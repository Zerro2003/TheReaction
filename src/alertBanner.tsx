import { useState } from "react";

type AlertType = "success" | "warning" | "error" | "info";

interface AlertBannerProps {
  type?: AlertType;
  message?: string;
}

export default function AlertBanner({
  type = "info",
  message = "This is an alert message",
}: AlertBannerProps) {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) return null;

  const colors: Record<AlertType, { bg: string; border: string; text: string }> = {
    success: { bg: "#d4edda", border: "#28a745", text: "#155724" },
    warning: { bg: "#fff3cd", border: "#ffc107", text: "#856404" },
    error: { bg: "#f8d7da", border: "#dc3545", text: "#721c24" },
    info: { bg: "#d1ecf1", border: "#17a2b8", text: "#0c5460" },
  };

  const icons: Record<AlertType, string> = {
    success: "✅",
    warning: "⚠️",
    error: "❌",
    info: "ℹ️",
  };

  return (
    <div
      style={{
        padding: "12px 20px",
        backgroundColor: colors[type].bg,
        borderLeft: `4px solid ${colors[type].border}`,
        color: colors[type].text,
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0",
      }}
    >
      <span>
        {icons[type]} {message}
      </span>
      <button
        onClick={() => setVisible(false)}
        style={{
          background: "none",
          border: "none",
          fontSize: "1.2rem",
          cursor: "pointer",
          color: colors[type].text,
        }}
      >
        ×
      </button>
    </div>
  );
}
