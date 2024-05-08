"use client";
import Image from "next/image";
import img from "../../assets/Images/images-headerabout.jpeg";
import { LuPhoneCall } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  yourName: Yup.string().required("Name is required"),
  yourEmail: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  yourMessage: Yup.string("Message is required"),
});

const ContactPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div>
      <div className="absolute">
        <div className="font-bold text-5xl mt-36 ml-10">Contact</div>
      </div>
      <Image
        src={img}
        alt="machine"
        className="w-full h-60 relative"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))",
          opacity: 0.5,
        }}
      />
      <div className="flex p-5 mt-10 items-center">
        <div className="w-1/2 ml-5">
          <div className="text-redMain text-xl font-medium">
            GET IN TOUCH WITH US
          </div>
          <div className="text-5xl mt-3 font-bold">Contact us now</div>
          <div className="mt-8 flex flex-col gap-3">
            <div className="text-blueMain flex gap-3 items-center cursor-pointer">
              <div className="flex items-center justify-center h-14 w-14 bg-blueMain hover:bg-redMain hover:w-16 hover:h-16">
                <LuPhoneCall className="text-white text-5xl p-2" />
              </div>
              <div className="text-xl font-semibold">Phone</div>
              <div className="text-xl font-semibold">+91 1234567890</div>
            </div>
            <div className="text-blueMain flex gap-3 items-center cursor-pointer">
              <div className="flex items-center justify-center h-14 w-14 bg-blueMain hover:bg-redMain hover:w-16 hover:h-16">
                <LuPhoneCall className="text-white text-5xl p-2" />
              </div>
              <div className="text-xl font-semibold">Phone</div>
              <div className="text-xl font-semibold">+91 1234567890</div>
            </div>
            <div className="text-blueMain flex gap-3 items-center cursor-pointer">
              <div className="flex items-center justify-center h-14 w-14 bg-blueMain hover:bg-redMain hover:w-16 hover:h-16">
                <TiMessages className="text-white text-5xl p-2" />
              </div>
              <div className="text-xl font-semibold">Email</div>
              <div className="text-xl font-semibold">
                vedantitechnologies@gmail.com
              </div>
            </div>
            <div className="text-blueMain flex gap-3 items-center cursor-pointer">
              <div className="flex items-center justify-center h-14 w-14 bg-blueMain hover:bg-redMain hover:w-16 hover:h-16">
                <FaLocationDot className="text-white text-5xl p-2" />
              </div>
              <div className="text-xl font-semibold">Address</div>
              <div className="text-xl font-semibold">
                41, krishna indusrial estate, nr.Gokul estate,
                kathawada-Singarwa road, Kathwada GIDC Ahmedabad-382430
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-6 bg-black rounded-lg shadow-md">
            <Formik
              initialValues={{
                yourName: "",
                yourEmail: "",
                subject: "",
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
                      className="block text-white font-semibold mb-2"
                    >
                      Your Name
                    </label>
                    <Field
                      type="text"
                      name="yourName"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blueMain"
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
                      className="block text-white font-semibold mb-2"
                    >
                      Your Email
                    </label>
                    <Field
                      type="email"
                      name="yourEmail"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blueMain"
                    />
                    <ErrorMessage
                      name="yourEmail"
                      component="div"
                      className="text-redMain mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-white font-semibold mb-2"
                    >
                      Subject
                    </label>
                    <Field
                      type="text"
                      name="subject"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blueMain"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-redMain mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="yourMessage"
                      className="block text-white font-semibold mb-2"
                    >
                      Your Message
                    </label>
                    <Field
                      as="textarea"
                      name="yourMessage"
                      rows="4"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blueMain"
                    />
                    <ErrorMessage
                      name="yourMessage"
                      component="div"
                      className="text-redMain mt-1"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blueMain hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>

          </div>
        </div>
      </div>
            <div className="flex justifyContent-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.515485711983!2d72.64051547854747!3d23.004837763345336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8646d7677d81%3A0x59c9a5071de76452!2sVedanti%20Technologies!5e0!3m2!1sen!2sin!4v1715188968866!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" ></iframe>
            </div>
    </div>
  );
};
export default ContactPage;
