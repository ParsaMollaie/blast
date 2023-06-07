import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUserAdd,
  AiOutlineLogin,
} from "react-icons/ai";
import logoImg from "../../public/images/Logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#a1a1aa");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 rtl"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center text-white p-4">
        <div className="flex items-center gap-12 w-full ">
          <div className="flex cursor-pointer ">
            <h1
              style={{ color: `${textColor}` }}
              className="font-bold text-4xl"
            >
              بلست
            </h1>
            <div className="hidden md:w-full md:block">
              <Image src={logoImg} className="w-16" />
            </div>
          </div>

          <ul
            style={{ color: `${textColor}` }}
            className="lg:flex gap-4 hidden"
          >
            <li className="hover:text-pink-400 ">
              <Link href="/">درباره بلست</Link>
            </li>
            <li className="hover:text-pink-400">
              <Link href="/calculator"> دریافت برنامه</Link>
            </li>
            <li className="hover:text-pink-400">
              <Link href="/"> تعرفه</Link>
            </li>
            <li className="hover:text-pink-400">
              <Link href="/"> خدمات</Link>
            </li>
            <li className="hover:text-pink-400">
              <Link href="/">تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div
          style={{ color: `${textColor}` }}
          className="items-center flex-row gap-3 ml-2 lg:ml-0 hidden lg:block"
        >
          <div
            className="inline-flex rounded-md shadow-lg text-sm"
            role="group"
          >
            <Link href="/registeration">
              <button
                style={{ color: `${textColor}` }}
                className="flex flex-row gap-3 items-center lg:px-6 px-2 py-2 rounded-r-lg text-white border border-pink-500"
              >
                <AiOutlineLogin size={15} className="z-5" />
                ورود
              </button>
            </Link>
            <Link href="/registeration">
              <button
                style={{ color: `${textColor}` }}
                className="flex flex-row gap-3 items-center lg:px-6 px-2 py-2 rounded-l-lg text-white border border-pink-500 bg-pink-500"
              >
                <AiOutlineUserAdd size={15} className="z-5" />
                عضویت
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Button */}

        <div
          onClick={handleNav}
          className="block cursor-pointer lg:hidden z-10"
        >
          {nav ? (
            <AiOutlineClose
              size={20}
              style={{
                backgroundColor: "#e1e1e1",
                borderRadius: "100%",
                padding: "4px",
              }}
            />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-[50%] bottom-0 flex flex-col gap-5  justify-center items-center w-[50%] h-screen bg-black ease-in duration-300 text-center"
              : "lg:hidden absolute top-0 left-[-100%] bottom-0 flex flex-col gap-5 justify-center items-center w-full h-screen bg-black ease-in duration-300 text-center"
          }
        >
          <div className="flex flex-col justify-center items-center w-full gap-5">
            <div>
              <Image src={logoImg} className="w-24" />
            </div>
            <h2 className="text-white font-semibold text-2xl">
              مجموعه <span className="text-pink-600">بلست</span>
            </h2>
            <div className="border-t-2 w-[50%] border-solid border-slate-500"></div>
          </div>
          <ul className="flex flex-col items-center justify-center gap-3 w-full">
            <li
              onClick={handleNav}
              className="text-2xl glassmorphism md:w-[50%] w-[90%] py-2 px-2 hover:bg-pink-600 hover:text-white"
            >
              <Link href="/">درباره بلست</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-2xl glassmorphism md:w-[50%] w-[90%] py-2 px-2 hover:bg-pink-600 hover:text-white"
            >
              <Link href="/">دریافت برنامه</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-2xl glassmorphism md:w-[50%] w-[90%] py-2 px-2 hover:bg-pink-600 hover:text-white"
            >
              <Link href="/">تعرفه</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-2xl glassmorphism md:w-[50%] w-[90%] py-2 px-2 hover:bg-pink-600 hover:text-white"
            >
              <Link href="/"> خدمات</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-2xl glassmorphism md:w-[50%] w-[90%] py-2 px-2 hover:bg-pink-600 hover:text-white"
            >
              <Link href="/">تماس با ما</Link>
            </li>
          </ul>
          <div className="items-center flex-row gap-3">
            <div
              className="inline-flex rounded-md shadow-lg text-sm"
              role="group"
            >
              <Link href="/registeration">
                <button className="flex flex-row gap-3 items-center lg:px-6 px-2 py-4 rounded-r-lg text-white border border-pink-500">
                  <AiOutlineLogin size={20} className="z-5" />
                  ورود
                </button>
              </Link>
              <Link href="/registeration">
                <button className="flex flex-row gap-3 items-center lg:px-6 px-2 py-4 rounded-l-lg text-white border border-pink-500 bg-pink-500">
                  <AiOutlineUserAdd size={20} className="z-5" />
                  عضویت
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
