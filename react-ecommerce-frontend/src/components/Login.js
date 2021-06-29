import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
// import { Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const history = useHistory();
  useEffect(() => {
    localStorage.getItem("user-info") && history.push("/add");
  }, []);

  const login = async () => {
    const creds = { email, password };
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(creds),
    });
    const data = await res.json();
    if (!data.error) {
      // setError(() => false);
      localStorage.setItem("user-info", JSON.stringify(data));
      history.push("/add");
    } else alert(data.error);
    // else setError(() => data.error);
  };

  return (
    <div>
      <Header />
      <h1>This is the login page</h1>
      <div className="col-sm-6 offset-sm-3">
        {/* {{ error } && (
          <>
            <Alert variant="danger">{error}</Alert>
          </>
        )} */}
        <input
          type="text"
          placeholder="Email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
