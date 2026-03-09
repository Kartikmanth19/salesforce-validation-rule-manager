import axios from "axios"

const API = axios.create({
    baseURL: "https://salesforce-validation-backend.onrender.com/salesforce"
})

export default API