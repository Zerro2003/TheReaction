import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SmartLamp from "./myLamp.tsx";
import Write from "./writeCurrent.tsx";
import TitleCounter from "./titleCounter.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmartLamp />
    <Write />
    <TitleCounter />
  </StrictMode>,
);
