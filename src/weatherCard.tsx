import { useState } from "react";

type Weather = "sunny" | "rainy" | "cloudy" | "snowy";

export default function WeatherCard() {
  const [weather, setWeather] = useState<Weather>("sunny");

  function getEmoji(w: Weather): string {
    switch (w) {
      case "sunny": return "☀️";
      case "rainy": return "🌧️";
      case "cloudy": return "☁️";
      case "snowy": return "❄️";
    }
  }

  function getAdvice(w: Weather): string {
    switch (w) {
      case "sunny": return "Don't forget sunscreen!";
      case "rainy": return "Bring an umbrella!";
      case "cloudy": return "It might rain later.";
      case "snowy": return "Bundle up and stay warm!";
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>Weather Today</h2>
      <p style={{ fontSize: "4rem" }}>{getEmoji(weather)}</p>
      <p style={{ textTransform: "capitalize", fontSize: "1.5rem" }}>{weather}</p>
      <p>{getAdvice(weather)}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        {(["sunny", "rainy", "cloudy", "snowy"] as Weather[]).map((w) => (
          <button
            key={w}
            onClick={() => setWeather(w)}
            style={{
              padding: "5px 10px",
              backgroundColor: weather === w ? "#3498db" : "#ecf0f1",
              color: weather === w ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}
