import { useState } from "react";

export default function PasswordStrength() {
  const [password, setPassword] = useState<string>("");

  function getStrength(pwd: string): { level: string; color: string; width: string } {
    if (pwd.length === 0) return { level: "", color: "#ddd", width: "0%" };
    if (pwd.length < 4) return { level: "Very Weak", color: "#e74c3c", width: "20%" };
    if (pwd.length < 6) return { level: "Weak", color: "#e67e22", width: "40%" };
    if (pwd.length < 8) return { level: "Fair", color: "#f1c40f", width: "60%" };
    
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*]/.test(pwd);
    const variety = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

    if (variety >= 3 && pwd.length >= 10) return { level: "Strong", color: "#27ae60", width: "100%" };
    if (variety >= 2) return { level: "Good", color: "#2ecc71", width: "80%" };
    return { level: "Fair", color: "#f1c40f", width: "60%" };
  }

  const strength = getStrength(password);

  return (
    <div style={{ padding: "20px", maxWidth: "350px", margin: "auto" }}>
      <h2>🔒 Password Strength</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter a password..."
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <div style={{ height: "8px", backgroundColor: "#eee", borderRadius: "4px" }}>
        <div
          style={{
            height: "100%",
            width: strength.width,
            backgroundColor: strength.color,
            borderRadius: "4px",
            transition: "width 0.3s, background-color 0.3s",
          }}
        />
      </div>
      {strength.level && (
        <p style={{ color: strength.color, marginTop: "5px" }}>{strength.level}</p>
      )}
      <ul style={{ fontSize: "0.85rem", color: "#666" }}>
        <li style={{ color: password.length >= 8 ? "#27ae60" : "#999" }}>At least 8 characters</li>
        <li style={{ color: /[A-Z]/.test(password) ? "#27ae60" : "#999" }}>Contains uppercase</li>
        <li style={{ color: /[0-9]/.test(password) ? "#27ae60" : "#999" }}>Contains number</li>
        <li style={{ color: /[!@#$%^&*]/.test(password) ? "#27ae60" : "#999" }}>Contains special char</li>
      </ul>
    </div>
  );
}
