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
            <p className="text-orange-500">HENCY</p>{" "}
            <p className="text-green-600">ENGINEERING</p>
          </div>
          <div className="flex py-6 px-4 gap-8 items-center">
            <Link href="/" passHref>
              <div className="cursor-pointer">
                <IoMdHome
                  className={`hover:text-green-600 text-2xl ${
                    activeRoute === "/" ? " text-green-600" : ""
                  }`}
                />
              </div>
            </Link>
            <Link href="/aboutpage" passHref>
              <div
                className={`hover:text-green-600 font-semibold cursor-pointer hover:border-b-2 hover:border-green-600 tracking-wider ${
                  activeRoute === "/aboutpage"
                    ? "border-b-2 border-green-600 text-green-600"
                    : ""
                }`}
              >
                About
              </div>
            </Link>
            <div className="hover:text-green-600 font-semibold cursor-pointer hover:underline tracking-wider">
              Product
            </div>
            <div className="hover:text-green-600 font-semibold cursor-pointer hover:underline tracking-wider">
              Contact
            </div>
            <div className="hover:text-green-600 font-semibold cursor-pointer hover:underline tracking-wider">
              Service
            </div>
            <div className="hover:text-white hover:bg-green-600 text-orange-500 font-semibold cursor-pointer tracking-wider">
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
