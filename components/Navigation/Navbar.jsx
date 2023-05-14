import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoImg from "../../public/images/Logo1.png";
import { FaInstagram } from "react-icons/fa";

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
            className="md:flex gap-4 hidden"
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
          className="flex items-center flex-row gap-5 ml-2 md:ml-0"
        >
          <div
            className="inline-flex rounded-md shadow-lg text-sm"
            role="group"
          >
            <Link href="/registeration">
              <button
                style={{ color: `${textColor}` }}
                className="flex flex-row gap-3 items-center md:px-6 px-2 py-2 rounded-r-lg text-white border border-pink-500"
              >
                <FaInstagram size={15} className="z-5" />
                ورود
              </button>
            </Link>
            <Link href="/registeration">
              <button
                style={{ color: `${textColor}` }}
                className="flex flex-row gap-3 items-center md:px-6 px-2 py-2 rounded-l-lg text-white border border-pink-500 bg-pink-500"
              >
                <FaInstagram size={15} className="z-5" />
                عضویت
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Button */}

        <div
          onClick={handleNav}
          className=" block cursor-pointer md:hidden z-10"
        >
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300 text-center"
              : "md:hidden absolute top-0 left-[-100%]  bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300 text-center"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 hover:text-pink-400 text-4xl"
            >
              <Link href="/">درباره بلست</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 hover:text-pink-400 text-4xl"
            >
              <Link href="/">دریافت برنامه</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 hover:text-pink-400 text-4xl"
            >
              <Link href="/">تعرفه</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 hover:text-pink-400 text-4xl"
            >
              <Link href="/"> خدمات</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 hover:text-pink-400 text-4xl"
            >
              <Link href="/">تماس با ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
