import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  function formatTime(totalSeconds: number): string {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  function handleReset() {
    setIsRunning(false);
    setSeconds(0);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>⏱️ Timer</h2>
      <p
        style={{
          fontSize: "3rem",
          fontFamily: "monospace",
          color: isRunning ? "#27ae60" : "#333",
        }}
      >
        {formatTime(seconds)}
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "⏸ Pause" : "▶ Start"}
        </button>
        <button onClick={handleReset}>🔄 Reset</button>
      </div>
    </div>
  );
}
