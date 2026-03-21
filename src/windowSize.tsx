import { useState, useEffect } from "react";

export default function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function removes listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📐 Window Size Tracker</h2>
      <p style={{ fontSize: "1.5rem" }}>
        Width: <strong>{size.width}px</strong>
      </p>
      <p style={{ fontSize: "1.5rem" }}>
        Height: <strong>{size.height}px</strong>
      </p>
      <p style={{ color: "#666" }}>Try resizing the window!</p>
    </div>
  );
}
