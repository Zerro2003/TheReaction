import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Apple", price: 1.5, quantity: 1 },
    { id: 2, name: "Bread", price: 2.99, quantity: 1 },
    { id: 3, name: "Milk", price: 3.49, quantity: 1 },
  ]);

  function updateQuantity(id: number, delta: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      ).filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🛒 Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>{item.name}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeItem(item.id)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <p style={{ fontWeight: "bold", textAlign: "right" }}>
        Total: ${total.toFixed(2)}
      </p>
    </div>
  );
}
