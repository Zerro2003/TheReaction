import { useState } from "react";

interface User {
  id: number;
  name: string;
  role: string;
  active: boolean;
}

const initialUsers: User[] = [
  { id: 1, name: "Alice", role: "Admin", active: true },
  { id: 2, name: "Bob", role: "Editor", active: true },
  { id: 3, name: "Charlie", role: "Viewer", active: false },
  { id: 4, name: "Diana", role: "Editor", active: true },
  { id: 5, name: "Eve", role: "Admin", active: false },
];

export default function UserList() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredUsers = initialUsers
    .filter((user) => {
      if (filter === "active") return user.active;
      if (filter === "inactive") return !user.active;
      return true;
    })
    .filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>👥 User List</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        {["all", "active", "inactive"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "5px 15px",
              backgroundColor: filter === f ? "#3498db" : "#ecf0f1",
              color: filter === f ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              margin: "5px 0",
              background: user.active ? "#e8f5e9" : "#fbe9e7",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{user.name}</span>
            <span style={{ color: "#666" }}>{user.role}</span>
          </li>
        ))}
      </ul>
      <p>Showing {filteredUsers.length} of {initialUsers.length} users</p>
    </div>
  );
}
