import React from "react";
import Logo from "../../assets/Images/vedanti-technologies-logo.jpg";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" bg-[#eceded]">
      <div className="box-border container mx-auto max-w-screen-xl p-4">
        <div className="container flex gap-4  bg-[#eceded] ">
          <div className="flex-auto w-1/2 px-8">
            {/* <div></div> */}
            <Image src={Logo} alt="Logo" />
            <div className="mt-2 text-[#4c4c4c] text-base">
              We are serving our electric control Panel manufacturer, exporter
              and maintenance service erection ,installation work, to major
              Industrial more than 50 companies like Chemical Manufacturer,
              Diamond industry Rolling Mills, Cashew Industries, Mall, and
              Telecommunication.
            </div>
            <div className="flex gap-2 mt-3">
              <div className="bg-red-700 rounded-full p-2">
                <FaInstagram style={{ color: "white" }} size={20} />
              </div>
              <div className="bg-red-700 rounded-full p-2">
                <FaYoutube style={{ color: "white" }} size={20} />
              </div>
              <div className="bg-red-700 rounded-full p-2">
                <FaFacebook style={{ color: "white" }} size={20} />
              </div>
              <div className="bg-red-700 rounded-full p-2">
                <FaTwitter style={{ color: "white" }} size={20} />
              </div>
            </div>
          </div>
          <div className="flex-auto w-1/5 text-start">
            <h4
              className=" inline-block rounded-md py-2 px-1 font-bold	text-lg	mb-2"
              style={{ borderBottom: "2px solid red" }}
            >
              Quick Access
            </h4>
            <div>
              <Link
                href={"/"}
                className="flex justify-start	items-center my-2 transition-all duration-100 ease-in-out transform hover:translate-x-2 hover:text-red-600 text-[#4c4c4c]"
              >
                <IoIosArrowForward
                  className="mr-2 transition-all duration-100 ease-in-out text-red-600"
                  fontSize={15}
                />
                Home
              </Link>
            </div>
            <div>
              <Link
                href={"/"}
                className="flex justify-start	items-center my-2 transition-all duration-100 ease-in-out transform hover:translate-x-2 hover:text-red-600 text-[#4c4c4c]"
              >
                <IoIosArrowForward
                  className="mr-2 transition-all duration-100 ease-in-out text-red-600"
                  fontSize={15}
                />
                Company Profile
              </Link>
            </div>{" "}
            <div>
              <Link
                href={"/"}
                className="flex justify-start	items-center my-2 transition-all duration-100 ease-in-out transform hover:translate-x-2 hover:text-red-600 text-[#4c4c4c]"
              >
                <IoIosArrowForward
                  className="mr-2 transition-all duration-100 ease-in-out text-red-600"
                  fontSize={15}
                />
                Our Team
              </Link>
            </div>{" "}
            <div>
              <Link
                href={"/"}
                className="flex justify-start	items-center my-2 transition-all duration-100 ease-in-out transform hover:translate-x-2 hover:text-red-600 text-[#4c4c4c]"
              >
                <IoIosArrowForward
                  className="mr-2 transition-all duration-100 ease-in-out text-red-600"
                  fontSize={15}
                />
                Our Products
              </Link>
            </div>{" "}
            <div>
              <Link
                href={"/"}
                className="flex justify-start items-center my-2 transition-all duration-100 ease-in-out transform hover:translate-x-2 hover:text-red-600 text-[#4c4c4c]"
              >
                <IoIosArrowForward
                  className="mr-2 transition-all duration-100 ease-in-out text-red-600"
                  fontSize={15}
                />
                Our Services
              </Link>
            </div>{" "}
            <div>
              <Link
                href={"/"}
                className="flex justify-start	items-center my-2 transition-all duration-100 ease-in-out transform hover:translate-x-2 hover:text-red-600 text-[#4c4c4c]"
              >
                <IoIosArrowForward
                  className="mr-2 transition-all duration-100 ease-in-out text-red-600"
                  fontSize={15}
                />
                Contact
              </Link>
            </div>{" "}
          </div>
          <div className="flex-auto w-1/3  text-start">
            <h4
              className=" inline-block rounded-md py-2 px-1 font-bold text-lg mb-2"
              style={{ borderBottom: "2px solid red" }}
            >
              Get In Touch{" "}
            </h4>

            <ul className="mt-2">
              <li>
                <Link
                  className="flex items-center my-2 text-[#4c4c4c]"
                  href="/"
                >
                  <FaPhoneVolume className="mr-5 text-[#4c4c4c] hover:text-blue-600" />
                  +91 9173787235
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center my-2 text-[#4c4c4c]"
                  href="/"
                >
                  <FaPhoneVolume className="mr-5 text-[#4c4c4c] hover:text-blue-600" />
                  +91 9173787235
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center my-2 text-[#4c4c4c]"
                  href="/"
                >
                  <IoMail
                    className="mr-5 text-[#4c4c4c] hover:text-blue-600"
                    size={20}
                  />
                  vedantitechnologies@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-start  my-2 text-[#4c4c4c]"
                  href="/"
                >
                  <IoLocationSharp
                    className="relative mr-3 text-[#4c4c4c] hover:text-blue-600"
                    size={70}
                    style={{ top: "-15px", right: "4px" }}
                  />
                  27, Satsang Estate, Nr Malhar Estate Nr Sai Palace Hotel, S. P
                  Ring Road, Odhav,Ahmedabad -382415,Gujarat (India){" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-zinc-950 text-white text-center py-2">
        Copyrights © {new Date().getFullYear()} All Rights Reserve. Vedanti
        Technologies
      </div>
    </footer>
  );
};

export default Footer;
