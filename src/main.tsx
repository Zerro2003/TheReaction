import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewFacts from "./nav.tsx";
import Sim from "./sim.tsx";
import { myData } from "./data.tsx";
import Chef from "./chef.tsx";
import Space from "./space.tsx";
import TestState from "./testState.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewFacts/>
    <Chef/>
    <Space/>
    <TestState/>
  </StrictMode>,
);
