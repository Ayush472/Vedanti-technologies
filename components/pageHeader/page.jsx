"use client";
import React from "react";
import Image from "next/image";
import img from "../../assets/Images/productsImage/innerHeader.jpg";
import { FaThinkPeaks } from "react-icons/fa6";
// import "./pageHeader.css"
const PageHeader = ({ name, imageUrl, headerStyle }) => {
  return (
    <div className={`relative  h-${headerStyle.h}`}>
      <div
        className={`z-10 absolute inset-y-${headerStyle.insetY}	inset-${headerStyle.inset}	font-bold text-${headerStyle.text} opacity-100	text-white	`}
      >
        {name}
        {/* <div className="text-center">
          <div className="flex">
            <div className="border-t-4"></div>
            <div className="">
              <FaThinkPeaks />
            </div>
            <div className="border-t-4"></div>
          </div>
        </div> */}
      </div>
      <Image
        src={imageUrl}
        alt="machine"
        className="w-full h-full object-cover"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))",
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default PageHeader;
