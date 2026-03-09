const express = require("express")
const jsforce = require("jsforce")

const router = express.Router()

let connection = null

const oauth2 = new jsforce.OAuth2({
    clientId: process.env.SF_CLIENT_ID,
    clientSecret: process.env.SF_CLIENT_SECRET,
    redirectUri: process.env.SF_REDIRECT_URI,
    loginUrl: process.env.SF_LOGIN_URL
})


router.get("/login", (req, res) => {

    const authUrl = oauth2.getAuthorizationUrl()

    res.redirect(authUrl)

})


router.get("/oauth/callback", async (req, res) => {

    const conn = new jsforce.Connection({ oauth2 })

    const code = req.query.code

    try {

        await conn.authorize(code)

        connection = conn

        res.send("Salesforce Login Successful")

    } catch (error) {

        console.error(error)

        res.send("Login Failed")

    }

})


router.get("/validation-rules", async (req, res) => {

    if (!connection) {
        return res.status(401).send("Not logged into Salesforce")
    }

    try {

        const result = await connection.tooling.query(
            "SELECT Id, ValidationName, Active FROM ValidationRule WHERE EntityDefinition.QualifiedApiName='Account'"
        )

        res.json(result.records)

    } catch (error) {

        console.error(error)

        res.status(500).send("Error fetching validation rules")

    }

})


router.post("/toggle-rule", async (req, res) => {

    const { id, active } = req.body

    if (!connection) {
        return res.status(401).send("Not logged into Salesforce")
    }

    try {

        const rule = await connection.tooling.sobject("ValidationRule").retrieve(id)

        const metadata = rule.Metadata

        metadata.active = active

        const result = await connection.tooling.sobject("ValidationRule").update({
            Id: id,
            Metadata: metadata
        })

        res.json(result)

    } catch (error) {

        console.error(error)

        res.status(500).send("Error updating validation rule")

    }

})

module.exports = router