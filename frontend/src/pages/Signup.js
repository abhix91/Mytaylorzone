import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import "./CSS/Login.css"; // Reuse the same CSS file for consistent styling

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://mytaylorzone-1.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
        return;
      }

      navigate("/login"); // Redirect to login after successful signup
    } catch (err) {
      console.error("Error signing up:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login"> {/* Reuse login class for consistent styling */}
      <Banner title={"Let's Sign Up"} num={"signup"} />
      <div className="login-content"> {/* Reuse login-content class */}
        <h2>Sign Up</h2>
        <form className="inputs-content" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Continue</button>
        </form>
        <p className="have-account">
          Already have an account? <a href="/login">Login here</a>
        </p>
        <div className="login-agree"> {/* Reuse login-agree class */}
          <input type="checkbox" required />
          <p>I agree to the terms and privacy policy</p>
        </div>
      </div>
    </div>
  );
}
