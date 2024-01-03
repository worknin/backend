import React, { useState, useEffect } from "react";
import Login from "../components/Login";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const submtForm = () => {
    fetch("http://localhost:5000/auth/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordVerify: passwordVerify,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success! ", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div class="bg-gray-50 dark:bg-gray-900">
        {/* <h1 className="text-2xl font-bold ">Login</h1> */}
        <Login />
      </div>
      <div className="container">
        <p>Email</p>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Password again</p>
        <input
          type="text"
          id="passwordVerify"
          onChange={(e) => setPasswordVerify(e.target.value)}
        />

        <button onClick={submtForm}>Submit</button>
      </div>
    </>
  );
}
