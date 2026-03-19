import { useState, useEffect } from "react";
export default function Write() {
  const [curText, setCurrent] = useState<String>("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setCurrent(e.target.value)}
      />
      {curText.length > 5 && (
        <div>
          <h1>{curText}</h1>
        </div>
      )}
    </div>
  );
}
