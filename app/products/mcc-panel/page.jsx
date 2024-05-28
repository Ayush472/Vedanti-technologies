"use client";
import React from "react";
import Footer from "@/components/Footer/page";
import Header from "@/components/header/page";
import HeaderTop from "@/components/headertop/page";
import PageHeader from "@/components/pageHeader/page";
import img from "../../../assets/Images/productsImage/innerHeader.jpg";
import Image from "next/image";
import usePopup from "@/hook/usePopup";
import InquiryPopup from "@/components/InquiryPopup/page";

const MCC = () => {
  let object = {
    h: "60",
    text: "4xl",
    insetY: "auto",
    inset: "1/3",
  };

  const { isPopupOpen, togglePopup, popupRef } = usePopup();

  return (
    <>
      <HeaderTop />
      <Header />
      <PageHeader
        name={"Motor Control Center Panel"}
        imageUrl={img}
        headerStyle={object}
      />

      <div className=" p-4">
        <h1 className="text-center text-2xl font-semibold	border-b-4 mb-4 border-red-800 rounded">
          Motor Control Center Panel (MCC Panel){" "}
        </h1>
        <div className="flex justify-around gap-6">
          <div className="max-w-[50%] max-h-[500px]">
            <Image
              src={img}
              className="rounded"
              alt="Product Image"
              style={{ height: "100%" }}
            ></Image>
          </div>
          <div className="max-w-[50%]">
            <p>
              The Motor Control Center (MCC) from GE are of Modern Design with
              new generation features in conformation to the requirements of
              Power plants Refineries and other engineering & Process
              industries.
            </p>
            <button
              className="text-lg border-2 border-red-600 px-4 py-2 rounded-lg mt-2 transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:shadow-lg hover:border-transparent"
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

export default MCC;
