import React from "react";
import LoginForm from "../components/LoginForm";
import loginbg from "../assets/loginbg.jpg";

function Login() {
  return (
    <div className=" h-screen bg ">
      <img
        src={loginbg}
        alt="loginbg"
        className="object-cover w-full h-full -z-10 absolute"
      />
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
