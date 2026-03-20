import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  function addTodo() {
    if (input.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  }

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 Todo List</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              margin: "5px 0",
              background: "#f8f9fa",
              borderRadius: "5px",
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#999" : "#333",
                cursor: "pointer",
              }}
            >
              {todo.completed ? "✅" : "⬜"} {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <p>{todos.filter((t) => !t.completed).length} tasks remaining</p>
    </div>
  );
}
