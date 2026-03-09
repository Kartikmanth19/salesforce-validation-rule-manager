require("dotenv").config()

const express = require("express")
const cors = require("cors")

const salesforceRoutes = require("./routes/salesforce")

const app = express()

app.use(cors())
app.use(express.json())


app.use("/salesforce", salesforceRoutes)

app.get("/", (req, res) => {
    res.send("Backend Running")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000")
})