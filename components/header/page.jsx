"use client";
import { IoMdHome, IoMdMail } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(window.location.pathname);
  }, []);

  return (
    <div>
      <div className="shadow-md shadow-bottom-black">
        <div className="flex justify-between px-3 items-center">
          <div className="text-4xl font-bold flex gap-2 tracking-wider cursor-pointer">
            <p className="text-redMain">VEDANTI</p>{" "}
            <p className="text-blueMain">TECHNOLOGIES</p>
          </div>
          <div className="flex py-6 px-4 gap-8 items-center">
            <Link href="/" passHref>
              <div className="cursor-pointer">
                <IoMdHome
                  className={`hover:text-blueMain text-2xl ${
                    activeRoute === "/" ? " text-blueMain" : ""
                  }`}
                />
              </div>
            </Link>
            <Link href="/about" passHref>
              <div
                className={`hover:text-blueMain font-semibold cursor-pointer hover:border-b-2 hover:border-blueMain tracking-wider ${
                  activeRoute === "/about"
                    ? "border-b-2 border-blueMain text-blueMain"
                    : ""
                }`}
              >
                About
              </div>
            </Link>
            <div className="hover:text-blueMain font-semibold cursor-pointer hover:underline tracking-wider">
              Product
            </div>
            <Link href="/contact" passHref>
              <div
                className={`hover:text-blueMain font-semibold cursor-pointer hover:border-b-2 hover:border-blueMain tracking-wider ${
                  activeRoute === "/contact"
                    ? "border-b-2 border-blueMain text-blueMain"
                    : ""
                }`}
              >
                Contact
              </div>
            </Link>
            <div className="hover:text-blueMain font-semibold cursor-pointer hover:underline tracking-wider">
              Service
            </div>
            <div className="hover:text-white hover:bg-blueMain text-redMain font-semibold cursor-pointer tracking-wider">
              <div className="flex items-center gap-2 shadow px-4 py-2">
                <IoMdMail /> Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
