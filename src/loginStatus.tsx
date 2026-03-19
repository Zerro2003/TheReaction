import { useState } from "react";

export default function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  if (!isLoggedIn) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Please Log In</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <button
          onClick={() => username.length > 0 && setIsLoggedIn(true)}
          style={{ marginTop: "10px" }}
        >
          Log In
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Welcome, {username}! 👋</h2>
      <p>You are now logged in.</p>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          setUsername("");
        }}
      >
        Log Out
      </button>
    </div>
  );
}
