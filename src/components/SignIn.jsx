import React from "react";
import "./SignInStyles.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

