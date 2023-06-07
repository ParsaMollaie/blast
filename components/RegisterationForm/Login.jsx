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
    <div
      className={`${
        show
          ? "bg-gradient-to-r from-[#ffafbd] to-[#ffc3a0]  duration-700"
          : "bg-gradient-to-r from-[#4568dc] to-[#b06ab3] duration-700"
      } relative min-h-screen flex justify-center items-center p-5 rtl `}
    >
      <div className="relative w-[800px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sign In section */}
        <div className="absolute top-0 left-0 w-full h-full flex">
          <div
            className={`${
              show ? "-left-full" : "left-0"
            } relative h-full w-[50%] hidden md:block bg-[#ff0] duration-500`}
          >
            <Image
              src={logInImg}
              className="h-full w-full top-0 left-0 absolute object-cover"
            />
          </div>
          <div
            className={`${
              show ? "left-full" : "left-0"
            } relative md:w-[50%] w-full h-full bg-white flex justify-center items-center p-10 duration-500`}
          >
            <form>
              <h2 className="text-lg font-semibold uppercase tracking-wider w-full mb-3 text-[#555] text-center">
                ورود
              </h2>
              {/* <input
                type="text"
                placeholder="نام"
                className="relative w-full p-3 bg-[#f5f5f5] text-[#333] border-none outline-none mx-0 my-2 text-sm  tracking-wide font-light shadow-none"
              /> */}
              <input
                type="text"
                placeholder="موبایل"
                className="relative w-full p-3 bg-[#f5f5f5] text-[#333] border-none outline-none mx-0 my-2 text-sm  tracking-wide font-light shadow-none"
              />
              <input
                type="submit"
                name=""
                value="ورود"
                className="max-w-[100px]  bg-[#677eff] text-white cursor-pointer text-sm  tracking-wide font-medium duration-500 relative px-8 py-3 border-none outline-none mx-0 my-2 shadow-none hover:brightness-75"
              />
              <p className="relative mt-5 text-xs tracking-wide font-light uppercase text-[#555]">
                اگه عضو بلست نیستی{" "}
                <a
                  onClick={toggle}
                  href="#"
                  className="font-semibold no-underline text-[#677eff] cursor-pointer"
                >
                  ثبت نام
                </a>{" "}
                کن
              </p>
            </form>
          </div>
        </div>
        {/* Sign up section */}

        <div
          className={`${
            show ? "pointer-events-auto" : "pointer-events-none"
          } absolute top-0 left-0 w-full h-full flex `}
        >
          <div
            className={`${
              show ? "left-0" : "left-full"
            } relative md:w-[50%] w-full h-full bg-white flex justify-center items-center p-10 duration-500 `}
          >
            <form>
              <h2 className="text-lg font-semibold uppercase tracking-wider w-full mb-3 text-[#555] text-center">
                ثبت نام
              </h2>
              <input
                type="text"
                placeholder="اسم"
                className="relative w-full p-3 bg-[#f5f5f5] text-[#333] border-none outline-none mx-0 my-2 text-sm  tracking-wide font-light shadow-none"
              />
              <input
                type="text"
                placeholder="موبایل"
                className="relative w-full p-3 bg-[#f5f5f5] text-[#333] border-none outline-none mx-0 my-2 text-sm  tracking-wide font-light shadow-none"
              />
              <input
                type="submit"
                value="ثبت"
                className="max-w-[100px]  bg-[#677eff] text-white cursor-pointer text-sm text-center tracking-wide font-medium duration-500 relative px-8 py-3 border-none outline-none mx-0 my-2 shadow-none hover:brightness-75"
              />
              <p className="relative mt-5 text-xs tracking-wide font-light uppercase text-[#555]">
                اگه عضو بلستی{" "}
                <a
                  onClick={toggle}
                  href="#"
                  className="font-semibold no-underline text-[#677eff] cursor-pointer"
                >
                  وارد شو
                </a>
                !
              </p>
            </form>
          </div>

          <div
            className={`${
              show ? "left-0" : "-left-full"
            } relative h-full w-[50%] bg-[#ff0] duration-500 md:block hidden `}
          >
            <Image
              src={signInImg}
              className="h-full w-full top-0 left-0 absolute object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
