# Salesforce Validation Rule Manager

## Overview

This project is a full-stack web application that connects with a Salesforce Developer Org and allows users to manage **Account Validation Rules** directly from a web interface.

The application authenticates users using **Salesforce OAuth 2.0**, retrieves validation rules using the **Salesforce Tooling API**, and enables users to **activate or deactivate validation rules dynamically**.

---

## Features

* Salesforce OAuth 2.0 Login
* Fetch Account Validation Rules
* Display Validation Rules with Status (Active / Inactive)
* Enable or Disable Individual Validation Rules
* Real-time updates reflected in Salesforce
* Full-stack implementation with React and Node.js
* Deployed online for public access

---

## Tech Stack

Frontend:

* React (Vite)
* JavaScript
* Axios

Backend:

* Node.js
* Express.js
* JSForce (Salesforce API library)

Salesforce:

* Salesforce Developer Org
* Connected App
* OAuth 2.0 Authentication
* Tooling API

Deployment:

* Frontend: Netlify
* Backend: Render

---

## Project Structure

```
salesforce-validation-rule-manager
│
├── backend
│   ├── routes
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend
│   ├── src
│   ├── components
│   ├── App.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## How It Works

1. User clicks **Login with Salesforce**
2. Salesforce OAuth authenticates the user
3. Backend retrieves validation rules via Tooling API
4. Rules are displayed in the frontend dashboard
5. User can enable or disable rules
6. Changes are deployed directly to Salesforce

---

## Live Application

Frontend:
(https://salesforce-validation.netlify.app/)

Backend API:
https://salesforce-validation-backend.onrender.com/

---

## GitHub Repository

https://github.com/Kartikmanth19/salesforce-validation-rule-manager

---

## Author

Kartik Rajesh Manthanwar

Email: [kartik.manth19@gmail.com](mailto:kartik.manth19@gmail.com)
GitHub: https://github.com/Kartikmanth19
