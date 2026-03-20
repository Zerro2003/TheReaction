import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodoList from "./todoList.tsx";
import ShoppingCart from "./shoppingCart.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoList />
    <ShoppingCart />
  </StrictMode>,
);
