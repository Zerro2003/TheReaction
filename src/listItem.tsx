interface ListItemProps {
  text: string;
  onDelete?: () => void;
  completed?: boolean;
  onToggle?: () => void;
}

export default function ListItem({
  text,
  onDelete,
  completed = false,
  onToggle,
}: ListItemProps) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        margin: "5px 0",
        background: completed ? "#e8f8f5" : "#f8f9fa",
        borderRadius: "5px",
        borderLeft: completed ? "3px solid #27ae60" : "3px solid #3498db",
      }}
    >
      <span
        onClick={onToggle}
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "#999" : "#333",
          cursor: onToggle ? "pointer" : "default",
        }}
      >
        {text}
      </span>
      {onDelete && (
        <button
          onClick={onDelete}
          style={{
            background: "none",
            border: "none",
            color: "#e74c3c",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          ×
        </button>
      )}
    </li>
  );
}
