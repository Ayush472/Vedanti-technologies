"use client";
import React from "react";
import Footer from "@/components/Footer/page";
import Header from "@/components/header/page";
import HeaderTop from "@/components/headertop/page";
import PageHeader from "@/components/pageHeader/page";
import img from "../../../assets/Images/productsImage/innerHeader.jpg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import usePopup from "@/hook/usePopup";
import InquiryPopup from "@/components/InquiryPopup/page";

let object = {
  h: "60",
  text: "3xl",
  insetY: "auto",
  inset: "1/3",
};
const APFC = () => {
  const { isPopupOpen, togglePopup, popupRef } = usePopup();

  return (
    <>
      <HeaderTop />
      <Header />
      <PageHeader
        name={"AUTOMATIC POWER FACTOR CORRECTION PANEL"}
        imageUrl={img}
        headerStyle={object}
      />
      {/* <ProudctDescription /> */}
      <div className=" p-4">
        <h1 className="text-center text-2xl font-semibold	border-b-4 mb-4 border-red-800 rounded">
          Automatic Power Factor Correction Control Panel (APFC Panel){" "}
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
              Capacitor Control Panel are provided for controlling the power
              Factor of the complete installation. The front of the fully
              Compartmentalized feeder for controlling individual capacitor.
              Whereas rear side of CPP house individual capacitor.
            </p>
            <br />
            <div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  High speed power factor correction.
                </span>
              </div>

              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Thyristor Switching.{" "}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Maintaining Standard Reducing electricity Consumption.{" "}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Provision of detuned Reactors in the panels for reliable
                  Operation in presence of harmonic.{" "}
                </span>
              </div>
            </div>
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

export default APFC;
