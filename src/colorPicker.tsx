import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#3498db");
  const [history, setHistory] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newColor = e.target.value;
    setHistory((prev) => [...prev, color]);
    setColor(newColor);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Color Picker</h2>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          margin: "10px auto",
          borderRadius: "10px",
        }}
      />
      <input type="color" value={color} onChange={handleChange} />
      <p>Current: {color}</p>
      <h4>History</h4>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        {history.slice(-5).map((c, i) => (
          <div
            key={i}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: c,
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
