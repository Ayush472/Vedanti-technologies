"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer/page";
import Header from "@/components/header/page";
import HeaderTop from "@/components/headertop/page";
import PageHeader from "@/components/pageHeader/page";
import ProductCard from "@/components/proudctCard/page";
import img from "../../../assets/Images/productsImage/innerHeader.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import usePopup from "@/hook/usePopup";
import InquiryPopup from "@/components/InquiryPopup/page";

const PCC = () => {
  let object = {
    h: "60",
    text: "3xl",
    insetY: "auto",
    inset: "1/3",
  };
  const { isPopupOpen, togglePopup, popupRef } = usePopup();

  return (
    <>
      <HeaderTop />
      <Header />
      <PageHeader
        name={"Power Control Center Panel (PCC Panel)"}
        imageUrl={img}
        headerStyle={object}
      />

      <div className=" p-4">
        <h1 className="text-center text-2xl font-semibold	border-b-4 mb-4 border-red-800 rounded">
          Power Control Center Panel (PCC Panel){" "}
        </h1>
        <div className="flex justify-around gap-6">
          <div className="max-w-[50%] max-h-[500px]">
            <Image
              src={img}
              className="rounded"
              alt="Product Image"
              style={{ height: "100%" }}
            ></Image>{" "}
          </div>
          <div className="max-w-[50%]">
            <p>
              Breaker panel can be offered either in single to two tire
              configuration. Bus bars are designed for rating up to 3200a and
              65kA fault lavel for 1sec. rating and fault lavels can be offered.
              Higher rating and fault lavels can be offered.
            </p>
            <br />
            <p>
              Breaker Panel are Suitable either for cable or bus duct entry from
              top or bottom and can be coupled with Either single front or
              double front MCC panels. The breaker panels are provided with
              segregated Compartments for safety.
            </p>
            <button
              className="text-lg border-2 border-red-600 px-2 py-1 rounded mt-2 hover:bg-red-600 hover:text-white"
              onClick={togglePopup}
            >
              Inquiry Now
            </button>
          </div>
        </div>
      </div>
      <InquiryPopup
        isPopupOpen={isPopupOpen}
        togglePopup={togglePopup}
        popupRef={popupRef}
      />
      <Footer />
    </>
  );
};

export default PCC;
