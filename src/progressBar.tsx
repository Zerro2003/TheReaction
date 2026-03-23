interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  label?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  color = "#3498db",
  label,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div style={{ margin: "10px 0" }}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
          <span style={{ fontSize: "0.85rem", color: "#666" }}>{label}</span>
          <span style={{ fontSize: "0.85rem", color: "#666" }}>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div
        style={{
          height: "12px",
          backgroundColor: "#eee",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percentage}%`,
            backgroundColor: color,
            borderRadius: "6px",
            transition: "width 0.5s ease",
          }}
        />
      </div>
    </div>
  );
}
