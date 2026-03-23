import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  { title: "What is React?", content: "React is a JavaScript library for building user interfaces. It lets you build UI from individual pieces called components." },
  { title: "What are components?", content: "Components are reusable pieces of UI. They accept inputs called props and return React elements that describe what should appear on screen." },
  { title: "What is JSX?", content: "JSX is a syntax extension for JavaScript that lets you write HTML-like code in your JavaScript files. It gets compiled to regular function calls." },
  { title: "What are hooks?", content: "Hooks are functions that let you use state and other React features in function components. Common hooks include useState, useEffect, and useContext." },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>📚 React FAQ</h2>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            marginBottom: "5px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => toggle(index)}
            style={{
              width: "100%",
              padding: "12px 16px",
              textAlign: "left",
              border: "none",
              background: openIndex === index ? "#3498db" : "#f8f9fa",
              color: openIndex === index ? "white" : "#333",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            {openIndex === index ? "−" : "+"} {item.title}
          </button>
          {openIndex === index && (
            <div style={{ padding: "12px 16px", background: "white" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
