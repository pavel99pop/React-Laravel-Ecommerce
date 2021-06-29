import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Protected = (props) => {
  const history = useHistory();

  const Cmp = props.Cmp;

  useEffect(() => {
    !localStorage.getItem("user-info") && history.push("/register");
  }, []);

  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;
