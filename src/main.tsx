import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContactForm from "./contactForm.tsx";
import SearchFilter from "./searchFilter.tsx";
import PasswordStrength from "./passwordStrength.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContactForm />
    <SearchFilter />
    <PasswordStrength />
  </StrictMode>,
);
