import { useState } from "react";

export default function GradeDisplay() {
  const [score, setScore] = useState<number>(75);

  function getGrade(score: number): string {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  }

  function getColor(grade: string): string {
    switch (grade) {
      case "A": return "#27ae60";
      case "B": return "#2ecc71";
      case "C": return "#f39c12";
      case "D": return "#e67e22";
      case "F": return "#e74c3c";
      default: return "#333";
    }
  }

  const grade = getGrade(score);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Grade Calculator</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
      />
      <p>Score: {score}</p>
      <p style={{ fontSize: "3rem", color: getColor(grade) }}>{grade}</p>
      {score === 100 && <p>🎉 Perfect Score!</p>}
      {score < 60 && <p style={{ color: "red" }}>⚠️ Needs improvement</p>}
    </div>
  );
}
