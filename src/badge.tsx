interface BadgeProps {
  count: number;
  maxCount?: number;
  children: React.ReactNode;
}

export default function Badge({ count, maxCount = 99, children }: BadgeProps) {
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {children}
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            backgroundColor: "#e74c3c",
            color: "white",
            borderRadius: "10px",
            padding: "2px 6px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            minWidth: "18px",
            textAlign: "center",
          }}
        >
          {displayCount}
        </span>
      )}
    </div>
  );
}
