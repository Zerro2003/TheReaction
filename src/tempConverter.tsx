import { useState } from "react";

export default function TempConverter() {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  function handleCelsiusChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setCelsius(val);
    if (val === "") {
      setFahrenheit("");
    } else {
      setFahrenheit(((parseFloat(val) * 9) / 5 + 32).toFixed(1));
    }
  }

  function handleFahrenheitChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setFahrenheit(val);
    if (val === "") {
      setCelsius("");
    } else {
      setCelsius((((parseFloat(val) - 32) * 5) / 9).toFixed(1));
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🌡️ Temperature Converter</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center" }}>
        <div>
          <label>Celsius</label>
          <br />
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            style={{ padding: "8px", width: "100px", textAlign: "center" }}
          />
          <p>°C</p>
        </div>
        <span style={{ fontSize: "2rem" }}>⇄</span>
        <div>
          <label>Fahrenheit</label>
          <br />
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            style={{ padding: "8px", width: "100px", textAlign: "center" }}
          />
          <p>°F</p>
        </div>
      </div>
    </div>
  );
}
