import { useLocalStorage } from "./useLocalStorage";

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const styles = {
    light: { background: "#ffffff", color: "#333333", border: "1px solid #ddd" },
    dark: { background: "#1a1a2e", color: "#e0e0e0", border: "1px solid #333" },
  };

  return (
    <div
      style={{
        ...styles[theme],
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h2>{theme === "light" ? "☀️" : "🌙"} Theme Toggle</h2>
      <p>Current theme: <strong>{theme}</strong></p>
      <p style={{ fontSize: "0.85rem", color: "#888" }}>
        This preference is saved in localStorage!
      </p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          backgroundColor: theme === "light" ? "#333" : "#fff",
          color: theme === "light" ? "#fff" : "#333",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
