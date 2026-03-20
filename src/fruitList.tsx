import { useState } from "react";

interface Fruit {
  id: number;
  name: string;
  color: string;
  calories: number;
}

const fruits: Fruit[] = [
  { id: 1, name: "Apple", color: "red", calories: 95 },
  { id: 2, name: "Banana", color: "yellow", calories: 105 },
  { id: 3, name: "Blueberry", color: "blue", calories: 85 },
  { id: 4, name: "Orange", color: "orange", calories: 62 },
  { id: 5, name: "Kiwi", color: "green", calories: 42 },
  { id: 6, name: "Grape", color: "purple", calories: 67 },
];

export default function FruitList() {
  const [sortBy, setSortBy] = useState<"name" | "calories">("name");
  const [ascending, setAscending] = useState<boolean>(true);

  const sorted = [...fruits].sort((a, b) => {
    const modifier = ascending ? 1 : -1;
    if (sortBy === "name") return a.name.localeCompare(b.name) * modifier;
    return (a.calories - b.calories) * modifier;
  });

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🍎 Fruit List</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => setSortBy("name")}>
          Sort by Name {sortBy === "name" ? "✓" : ""}
        </button>
        <button onClick={() => setSortBy("calories")}>
          Sort by Calories {sortBy === "calories" ? "✓" : ""}
        </button>
        <button onClick={() => setAscending(!ascending)}>
          {ascending ? "↑ Asc" : "↓ Desc"}
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sorted.map((fruit) => (
          <li
            key={fruit.id}
            style={{
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              background: "#f8f9fa",
            }}
          >
            <span>
              {fruit.name} ({fruit.color})
            </span>
            <span>{fruit.calories} cal</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
