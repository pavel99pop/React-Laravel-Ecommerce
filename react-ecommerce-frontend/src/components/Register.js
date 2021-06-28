import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signUp = async () => {
    const newUser = { name, email, password };
    console.warn(newUser);

    const res = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    localStorage.setItem("user-info", JSON.stringify(data));
    history.push("/add");
  };

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="Name"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="Password"
      />
      <br />
      <button onClick={signUp} className="btn btn-primary">
        Sign Up
      </button>
    </div>
  );
};

export default Register;
