import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!form.agreeToTerms) {
      alert("You must agree to the terms!");
      return;
    }
    alert(`Registered: ${form.username} (${form.email})`);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
          {form.password && form.confirmPassword && form.password !== form.confirmPassword && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>Passwords don't match</p>
          )}
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={form.agreeToTerms}
              onChange={handleChange}
            />{" "}
            I agree to the Terms
          </label>
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Register
        </button>
      </form>
    </div>
  );
}
