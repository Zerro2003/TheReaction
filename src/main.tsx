import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Accordion from "./accordion.tsx";
import CardWrapper from "./cardWrapper.tsx";
import ProgressBar from "./progressBar.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardWrapper title="Component Composition Demo">
      <Accordion />
    </CardWrapper>
    <ProgressBar value={75} label="React Progress" />
  </StrictMode>,
);
