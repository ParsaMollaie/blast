import Image from "next/image";
import React, { useState } from "react";
import signInImg from "../../public/images/land.jpg";
import logInImg from "../../public/images/landing.jpg";

const Login = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center p-5 bg-[#fee648] ">
      <div className="relative w-[800px] h-[500px] bg-white shadow-md overflow-hidden">
        {/* Sign In section */}
        <div className="absolute top-0 left-0 w-full h-full flex">
          <div className="relative h-full w-[50%] bg-[#ff0] duration-500">
            {/* <img
              src={signInImg}
              className="h-full w-full top-0 left-0 absolute object-cover"
            /> */}
            <p className="h-full w-full top-0 left-0 absolute object-cover">
              kuyktgjhgjhgjhgjhgjhg
            </p>
          </div>
          <div className="relative w-[50%] h-full bg-white flex justify-center items-center p-10 duration-500">
            <form>
              <h2 className="text-lg font-semibold uppercase tracking-wider w-full mb-3 text-[#555] text-center">
                Sign in
              </h2>
              <input
                type="text"
                placeholder="User name"
                className="relative w-full p-3 bg-[#f5f5f5] text-[#333] border-none outline-none mx-0 my-2 text-sm  tracking-wide font-light shadow-none"
              />
              <input
                type="text"
                placeholder="number"
                className="relative w-full p-3 bg-[#f5f5f5] text-[#333] border-none outline-none mx-0 my-2 text-sm  tracking-wide font-light shadow-none"
              />
              <input
                type="submit"
                name=""
                value="Login"
                className="max-w-[100px]  bg-[#677eff] text-white cursor-pointer text-sm  tracking-wide font-medium duration-500 relative px-8 py-3 border-none outline-none mx-0 my-2 shadow-none"
              />
              <p className="relative mt-5 text-xs tracking-wide font-light uppercase text-[#555]">
                dont have acount{" "}
                <a
                  onClick={toggle}
                  href="#"
                  className="font-semibold no-underline text-[#677eff] cursor-pointer"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
        {/* relative w-[50%] h-full bg-white flex justify-center items-center p-10 duration-500 left-full */}
        {/* Sign up section */}
        {/* "absolute top-0 left-0 w-full h-full flex pointer-events-none" */}
        <div className="absolute top-0 left-0 w-full h-full flex pointer-events-none">
          <div
            className={`${
              !show &&
              "relative w-[50%] h-full bg-white flex justify-center items-center p-10 duration-500 left-full"
            }`}
          >
            <form>
              <h2 className="text-lg font-semibold uppercase tracking-wider w-full mb-3 text-[#555] text-center">
                Create an acount
              </h2>
              <input
                type="text"
                placeholder="User name"
                className="relative w-full p-3 bg-[#f5f5f5] text-[#333] border-none outline-none mx-0 my-2 text-sm  tracking-wide font-light shadow-none"
              />
              <input
                type="text"
                placeholder="number"
                className="relative w-full p-3 bg-[#f5f5f5] text-[#333] border-none outline-none mx-0 my-2 text-sm  tracking-wide font-light shadow-none"
              />
              <input
                type="submit"
                value="Sign Up"
                className="max-w-[100px]  bg-[#677eff] text-white cursor-pointer text-sm text-center tracking-wide font-medium duration-500 relative px-8 py-3 border-none outline-none mx-0 my-2 shadow-none"
              />
              <p className="relative mt-5 text-xs tracking-wide font-light uppercase text-[#555]">
                already have an acount{" "}
                <a
                  onClick={toggle}
                  href="#"
                  className="font-semibold no-underline text-[#677eff] cursor-pointer"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
          {/* "relative h-full w-[50%] bg-[#ff0] duration-500 -left-full" */}
          <div
            className={`${
              !show
                ? "left-0"
                : "relative h-full w-[50%] bg-[#ff0] duration-500 -left-full"
            }`}
          >
            {/* <img
              src={logInImg}
              className="h-full w-full top-0 left-0 absolute object-cover"
            /> */}
            <p className="h-full w-full top-0 left-0 absolute object-cover">
              kjhkjhkjh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
