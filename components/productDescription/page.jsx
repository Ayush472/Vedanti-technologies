"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProductImage from "../../assets/Images/productsImage/3922.jpg";
const ProudctDescription = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPopupOpen]);
  return (
    // <div>ProudctDescription</div>
    <>
      <div className=" p-4">
        <h1 className="text-center text-2xl font-semibold	border-b-4 mb-4 border-red-800 rounded">
          Power Control Center Panel (PCC Panel)
        </h1>
        <div className="flex justify-around gap-6">
          <div className="w-fit">
            <Image src={ProductImage} className="rounded"></Image>
          </div>
          <div>
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
              className="text-lg border-2 border-red-600 px-4 py-2 rounded-lg mt-2 transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:shadow-lg hover:border-transparent"
              onClick={togglePopup}
            >
              Inquiry Now
            </button>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Inquiry Form</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-lg border-2 border-red-600 px-2 py-1 rounded hover:bg-red-600 hover:text-white"
                  onClick={togglePopup}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="ml-2 text-lg border-2 border-green-600 px-2 py-1 rounded hover:bg-green-600 hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProudctDescription;
