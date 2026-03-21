import { useState, useEffect } from "react";

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState<number>(0);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{ textAlign: "center", padding: "20px", minHeight: "200px" }}
      onClick={() => setClicks((c) => c + 1)}
    >
      <h2>🖱️ Mouse Tracker</h2>
      <p style={{ fontSize: "1.2rem" }}>
        Position: ({position.x}, {position.y})
      </p>
      <p>Click count: {clicks}</p>
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#e74c3c",
          position: "fixed",
          left: position.x - 10,
          top: position.y - 10,
          pointerEvents: "none",
          transition: "left 0.1s, top 0.1s",
        }}
      />
    </div>
  );
}
