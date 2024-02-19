import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { t } = useTranslation();

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        toast.success(`bruh`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

    e.target.reset();
  };

  return (
    <>
      {" "}
      <ToastContainer />
      <form
        onSubmit={handleOnSubmit}
        className="w-full  flex items-start  flex-col gap-10 justify-center h-full"
        ref={ref}
      >
        <div className="w-full flex items-center justify-center flex-col">
          <div
            className={`w-full md:w-8/12 transition-all  duration-500 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-10rem]"
            }`}
          >
            <h1
              className={`text-[16px] md:text-[18px] -ml-0 md:-ml-3  font-light whitespace-nowrap`}
            >
              {t("name")}
            </h1>
          </div>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="border-b-2 placeholder-gray-500 border-gray-500 outline-none bg-transparent w-full md:w-8/12 p-3 h-14"
            placeholder={t("nameph")}
          />
        </div>
        <div className="w-full flex items-center  flex-col">
          <div
            className={`w-full md:w-8/12 transition-all  duration-1000 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-10rem]"
            }`}
          >
            <h1
              className={`text-[16px] md:text-[18px] -ml-0 md:-ml-3 font-light whitespace-nowrap`}
            >
              {t("email")}
            </h1>
          </div>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="border-b-2 placeholder-gray-500 border-gray-500 outline-none bg-transparent w-full md:w-8/12 p-3 h-14"
            placeholder={t("emailph")}
          />
        </div>
        <div className="w-full flex items-center  flex-col">
          <div
            className={`w-full md:w-8/12 transition-all duration2k ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-10rem]"
            }`}
          >
            <h1
              className={`text-[16px] md:text-[18px] -ml-0 md:-ml-3 font-light`}
            >
              {t("message")}
            </h1>
          </div>
          <textarea
            id="user_message"
            name="user_message"
            required
            className="border-b-2 h-40 max-h-48 placeholder-gray-500 border-gray-500 outline-none bg-transparent w-full md:w-8/12 p-3 "
            placeholder={t("messageph")}
          />
          <div
            className={`w-full md:w-8/12 flex transition-all duration2k justify-end mt-3 `}
          >
            <button className="w-full bg-[#1C1D20]" type="submit">
              <span>{t("send")}</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
