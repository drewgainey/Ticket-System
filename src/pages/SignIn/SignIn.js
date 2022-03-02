import React from "react";

export function SignIn() {
  return (
    <div className="signInForm">
      <p>This worked</p>
        <label for="email">Email</label>
        <input type="text" id="email"></input>
        <label for="password">Password</label>
        <input type="password" id="password"></input>
        <button>Log In</button>
    </div>
  );
}
