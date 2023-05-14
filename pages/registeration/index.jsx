import Login from "@comp/RegisterationForm/Login";
import Layout2 from "layout/Layout2";
import React from "react";

const registerationForm = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

registerationForm.PageLayout = Layout2;
export default registerationForm;
