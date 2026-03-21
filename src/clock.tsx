import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🕐 Live Clock</h2>
      <p
        style={{
          fontSize: "3rem",
          fontFamily: "monospace",
          letterSpacing: "5px",
        }}
      >
        {hours}:{minutes}:{seconds}
      </p>
      <p style={{ color: "#666" }}>
        {time.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
