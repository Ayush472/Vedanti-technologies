"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  yourName: Yup.string().required("Name is required"),
  yourEmail: Yup.string().email("Invalid email").required("Email is required"),
  yourMessage: Yup.string().required("Message is required"),
});

const InquiryPopup = ({ isPopupOpen, togglePopup, popupRef }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form data", values);
    setSubmitting(false);
  };

  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div
            ref={popupRef}
            className="bg-white p-6 rounded shadow-lg max-w-md w-full"
          >
            <h2 className="text-xl font-semibold mb-4">Inquiry Form</h2>
            <Formik
              initialValues={{
                yourName: "",
                yourEmail: "",
                yourMessage: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="yourName"
                      className="block  font-semibold mb-1"
                    >
                      Your Name
                    </label>
                    <Field
                      type="text"
                      name="yourName"
                      className="w-full  border border-gray-700 rounded-md py-2 px-4  placeholder-gray-400 focus:outline-none focus:border-blueMain"
                    />
                    <ErrorMessage
                      name="yourName"
                      component="div"
                      className="text-redMain mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="yourEmail"
                      className="block  font-semibold mb-1"
                    >
                      Your Email
                    </label>
                    <Field
                      type="email"
                      name="yourEmail"
                      className="w-full  border border-gray-700 rounded-md py-2 px-4  placeholder-gray-400 focus:outline-none focus:border-blueMain"
                    />
                    <ErrorMessage
                      name="yourEmail"
                      component="div"
                      className="text-redMain mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="yourMessage"
                      className="block font-semibold mb-1"
                    >
                      Your Message
                    </label>
                    <Field
                      as="textarea"
                      name="yourMessage"
                      rows="4"
                      className="w-full border border-gray-700 rounded-md py-2 px-4  placeholder-gray-400 focus:outline-none focus:border-blueMain"
                    />
                    <ErrorMessage
                      name="yourMessage"
                      component="div"
                      className="text-redMain mt-1"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="bg-red-600 text-white cursor-pointer font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2"
                      onClick={togglePopup}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-600 text-white cursor-pointer font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryPopup;
