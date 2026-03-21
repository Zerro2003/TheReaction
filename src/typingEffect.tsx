import { useState, useEffect } from "react";

interface TypingEffectProps {
  text?: string;
  speed?: number;
}

export default function TypingEffect({
  text = "Hello, welcome to React! This text is typed character by character using useEffect.",
  speed = 50,
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [index, text, speed]);

  function restart() {
    setDisplayed("");
    setIndex(0);
    setIsComplete(false);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>⌨️ Typing Effect</h2>
      <p
        style={{
          fontSize: "1.2rem",
          fontFamily: "monospace",
          minHeight: "60px",
          borderLeft: "3px solid #3498db",
          paddingLeft: "10px",
        }}
      >
        {displayed}
        {!isComplete && <span style={{ animation: "blink 1s infinite" }}>|</span>}
      </p>
      {isComplete && (
        <button onClick={restart}>Restart ↺</button>
      )}
    </div>
  );
}
