import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (tabs.length === 0) return null;

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <div style={{ display: "flex", borderBottom: "2px solid #ddd" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "10px 20px",
              border: "none",
              borderBottom:
                activeIndex === index ? "2px solid #3498db" : "2px solid transparent",
              background: "none",
              color: activeIndex === index ? "#3498db" : "#666",
              cursor: "pointer",
              fontWeight: activeIndex === index ? "bold" : "normal",
              transition: "color 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px" }}>{tabs[activeIndex].content}</div>
    </div>
  );
}
