import ValidationRules from "./components/ValidationRules"

function App() {

  const login = () => {
    window.location.href = "https://salesforce-validation-backend.onrender.com/salesforce/login"
  }

  return (

    <div style={{
      minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1px",
    boxSizing: "border-box"
    }}>

      <h1 style={{
        color:"goldenrod",
        fontSize: "42px",
        marginBottom: "50px"
      }}>
        Salesforce Validation Rule Manager
      </h1>

      <button
        onClick={login}
        style={{
          padding: "12px 28px",
          background: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "50px"
        }}
      >
        Login with Salesforce
      </button>

      <ValidationRules />

    </div>

  )
}

export default App