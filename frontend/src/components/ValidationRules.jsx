import { useState } from "react"
import API from "../api"

function ValidationRules() {

  const [rules, setRules] = useState([])

  const fetchRules = async () => {
    try {
      const res = await API.get("/validation-rules")
      setRules(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  const toggleRule = async (rule) => {
    try {

      await API.post("/toggle-rule", {
        id: rule.Id,
        active: !rule.Active
      })

      fetchRules()

    } catch (error) {
      console.error(error)
    }
  }

  return (

    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}>

      <div style={{
        width: "100%",
        maxWidth: "900px",
        background: "rgba(122, 85, 62, 0.95)",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.25)"
      }}>

        <h2 style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#0f172a"
        }}>
          Salesforce Validation Rules
        </h2>

        <div style={{
          textAlign: "center",
          marginBottom: "25px"
        }}>

          <button
            onClick={fetchRules}
            style={{
              padding: "12px 26px",
              background: "linear-gradient(90deg,#2563eb,#3b82f6)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 5px 12px rgba(0,0,0,0.25)"
            }}
          >
            Fetch Validation Rules
          </button>

        </div>

        <table style={{
          width: "100%",
          borderCollapse: "collapse"
        }}>

          <thead>

            <tr style={{
              background: "#1e293b",
              color: "white"
            }}>
              <th style={{ padding: "14px", textAlign: "left" }}>Rule Name</th>
              <th style={{ padding: "14px", textAlign: "center" }}>Status</th>
              <th style={{ padding: "14px", textAlign: "center" }}>Action</th>
            </tr>

          </thead>

          <tbody>

            {rules.map(rule => (

              <tr
                key={rule.Id}
                style={{
                  borderTop: "1px solid #e5e7eb"
                }}
              >

                <td style={{
                  padding: "14px",
                  fontWeight: "500"
                }}>
                  {rule.ValidationName}
                </td>

                <td style={{
                  textAlign: "center",
                  padding: "14px"
                }}>

                  <span style={{
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    background: rule.Active ? "#dcfce7" : "#fee2e2",
                    color: rule.Active ? "#15803d" : "#b91c1c"
                  }}>
                    {rule.Active ? "Active" : "Inactive"}
                  </span>

                </td>

                <td style={{
                  textAlign: "center",
                  padding: "14px"
                }}>

                  <button
                    onClick={() => toggleRule(rule)}
                    style={{
                      padding: "8px 18px",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "600",
                      color: "white",
                      background: rule.Active ? "#ef4444" : "#22c55e"
                    }}
                  >
                    {rule.Active ? "Disable" : "Enable"}
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )
}

export default ValidationRules