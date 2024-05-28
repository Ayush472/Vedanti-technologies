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
const DOL = () => {
  const { isPopupOpen, togglePopup, popupRef } = usePopup();

  return (
    <>
      <div>APFC</div>
      <HeaderTop />
      <Header />
      <PageHeader
        name={"DOL, Star-Delta & ATS Control Panel"}
        imageUrl={img}
        headerStyle={object}
      />
      {/* <ProudctDescription /> */}
      <div className=" p-4">
        <h1 className="text-center text-2xl font-semibold	border-b-4 mb-4 border-red-800 rounded">
          DOL, Star-Delta & ATS Control Panel
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
              Our Manufactured Control Panel were used for operating submersible
              pump or other electric motors & specially for Rural agro electric
              market.
            </p>
            <br />
            <div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Overload Protection
                </span>
              </div>

              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Single Phase Protection
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Unbalance Current Protection Three Phase Motor
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  High/Low Level Protection
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Reverse Phasing Protection{" "}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Dry Run Protection
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <IoIosArrowForward />
                  Various Current Rate Setting{" "}
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

export default DOL;
