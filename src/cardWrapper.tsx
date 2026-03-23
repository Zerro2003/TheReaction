import React from "react";

interface CardWrapperProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function CardWrapper({ title, children, footer }: CardWrapperProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "10px",
        maxWidth: "400px",
      }}
    >
      {title && (
        <div
          style={{
            padding: "12px 16px",
            backgroundColor: "#f8f9fa",
            borderBottom: "1px solid #ddd",
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
      )}
      <div style={{ padding: "16px" }}>{children}</div>
      {footer && (
        <div
          style={{
            padding: "12px 16px",
            backgroundColor: "#f8f9fa",
            borderTop: "1px solid #ddd",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
