import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewFacts from "./nav.tsx";
import Sim from "./sim.tsx";
import { myData } from "./data.tsx";
import Chef from "./chef.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewFacts/>
    {myData.map((item)=>{
      return(
        <Sim
        key={item.id}
        name={item.name}
        age={item.age}
        email={item.email}
        phone={item.phone}
        />
      )
    })}
    <Chef/>
  </StrictMode>,
);
