import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import loginBanner from "../Components/Assets/images/login_banner.png";
import "./CSS/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token); // Store the token for session
      localStorage.setItem("userId", data.userId); // Optional: Store userId
      navigate("/"); // Redirect to a dashboard or home page
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login">
      <Banner title={"Let's Login"} img={loginBanner} num={"login"} />
      <div className="login-content">
        <h2>Sign in</h2>
        <form className="inputs-content" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Continue</button>
        </form>
        <p className="have-account">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
        <div className="login-agree">
          <input type="checkbox" />
          <p>I agree to the terms and privacy policy</p>
        </div>
      </div>
    </div>
  );
}
