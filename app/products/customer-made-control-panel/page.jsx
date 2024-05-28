"use client";
import React from "react";
import Footer from "@/components/Footer/page";
import Header from "@/components/header/page";
import HeaderTop from "@/components/headertop/page";
import PageHeader from "@/components/pageHeader/page";
import Image from "next/image";
import img from "../../../assets/Images/productsImage/innerHeader.jpg";
import usePopup from "@/hook/usePopup";
import InquiryPopup from "@/components/InquiryPopup/page";
import { IoIosArrowForward } from "react-icons/io";
const CMCPanel = () => {
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
        name={"Customer Made Control Panel"}
        imageUrl={img}
        headerStyle={object}
      />

      <div className="p-4">
        <h1 className="text-center text-2xl font-semibold border-b-4 mb-4 border-red-800 rounded">
          Customer Made Control Panel{" "}
        </h1>
        <div className="flex justify-around gap-6">
          <div className="max-w-[50%] max-h-[500px]">
            <Image
              src={img}
              className="rounded"
              alt="Product Image"
              style={{ height: "100%" }}
            />
          </div>
          <div className="max-w-[50%]">
            <p>
              We are mananufacture complete range of project Client requirement
              special panel as follow.
            </p>
            <div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  CRANE PANEL
                </span>
              </div>

              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  SHOT BLASTING MACHINE PANEL
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  BENDING ROLLER CONTROL PANEL
                </span>
              </div>
            </div>
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

export default CMCPanel;
