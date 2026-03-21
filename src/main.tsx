import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Clock from "./clock.tsx";
import Timer from "./timer.tsx";
import WindowSize from "./windowSize.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Clock />
    <Timer />
    <WindowSize />
  </StrictMode>,
);
