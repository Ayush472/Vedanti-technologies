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

const PowerDistribution = () => {
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
        name={"Power Distribution Panel"}
        imageUrl={img}
        headerStyle={object}
      />

      <div className="p-4">
        <h1 className="text-center text-2xl font-semibold border-b-4 mb-4 border-red-800 rounded">
          Power Distribution Panel
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
              Our Manufactured Distribution Panel were used for operating
              Lighting, fan or other electric item.
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

export default PowerDistribution;
