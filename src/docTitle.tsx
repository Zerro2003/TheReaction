import { useState, useEffect } from "react";

export default function DocTitle() {
  const [title, setTitle] = useState<string>("My React App");

  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "React App";
    };
  }, [title]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📄 Document Title Updater</h2>
      <p>Current title: <strong>{title}</strong></p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type a new page title..."
        style={{ padding: "8px", width: "300px" }}
      />
      <p style={{ color: "#666", marginTop: "10px" }}>
        Check your browser tab to see the title change!
      </p>
    </div>
  );
}
