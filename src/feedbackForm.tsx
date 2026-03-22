import { useState } from "react";

export default function FeedbackForm() {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating!");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Thank you! 🎉</h2>
        <p>You rated us: {"⭐".repeat(rating)}</p>
        <p>Feedback: {feedback || "No additional feedback"}</p>
        <button onClick={() => { setSubmitted(false); setRating(0); setFeedback(""); }}>
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>💬 Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <p>Rate your experience:</p>
        <div style={{ fontSize: "2rem", marginBottom: "15px" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                cursor: "pointer",
                color: star <= rating ? "#f39c12" : "#ddd",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tell us more..."
          rows={4}
          style={{ width: "100%", padding: "8px" }}
        />
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
