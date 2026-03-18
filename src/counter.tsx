import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "3rem" }}>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={reset} style={{ margin: "0 10px" }}>
        Reset
      </button>
      <button onClick={increment}>+</button>
    </div>
  );
}
