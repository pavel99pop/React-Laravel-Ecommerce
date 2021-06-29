import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.getItem("user-info") && history.push("/add");
  }, []);

  return (
    <div>
      <Header />
      <h1>This is the login page</h1>
    </div>
  );
};

export default Login;
