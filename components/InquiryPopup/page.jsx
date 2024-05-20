"use client"
import React from "react";

const InquiryPopup = ({ isPopupOpen, togglePopup, popupRef }) => {
  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div ref={popupRef} className="bg-white p-4 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Inquiry Form</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="message">
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

export default InquiryPopup;
