import { useState } from "react";

const items = [
  "React", "Vue", "Angular", "Svelte", "Next.js",
  "Remix", "Gatsby", "Astro", "SolidJS", "Preact",
];

export default function SearchFilter() {
  const [query, setQuery] = useState<string>("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h2>🔍 Search Filter</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search frameworks..."
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.length > 0 ? (
          filtered.map((item, i) => (
            <li
              key={i}
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <li style={{ color: "#999", padding: "8px" }}>No results found</li>
        )}
      </ul>
      <p style={{ color: "#666" }}>
        {filtered.length} of {items.length} items
      </p>
    </div>
  );
}
