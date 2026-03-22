import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>✅ Message Sent!</h2>
        <p>Thank you, {formData.name}!</p>
        <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}>
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📧 Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.name && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.name}</p>}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.message && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.message}</p>}
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
