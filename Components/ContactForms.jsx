"use client";

import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./text.module.css";
import { motion } from "framer-motion";

function ContactForms({ onVisibilityChange }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    onVisibilityChange(inView);
  }, [inView, onVisibilityChange]);

  const { t } = useTranslation();

  return (
    <div className="h-full contain flex flex-col items-center justify-center pr-5 pl-5 pb-5 md:p-10">
      <div id="contact" /> {/* <SlidingText /> */}
      <div className="w-full  flex items-center justify-center h-[50%]">
        {" "}
        <MaskText />
      </div>
      <div className="flex h-full borderborder-black text-[16px] md:text-[18px] flex-col md:flex-row w-full">
        <ContactForm />
        <div
          className="w-full md:w-6/12 mb-2 sm:mb-0 md:mt-0 mt-10 flex borderborder-black items-center justify-center flex-col  "
          ref={ref}
        >
          <div
            className={`gap-10 flex  flex-col sm:flex-row md:flex-col w-full justify-center  items-center border-black transition-all duration2k  ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[5rem]"
            }`}
          >
            <div className="sm:w-6/12 md:w-full  flex justify-start">
              <Image
                width={100}
                height={100}
                alt="NK Profil"
                src="/photoprofil.webp"
                className="rounded-full object-cover  mix-blend-multiply"
              />
            </div>
            <div className="flex gap-3 w-full items-center justify-center sm:items-baseline sm:justify-normal flex-col">
              <h1 className="font-extrabold">{t("contactdetails")}</h1>

              <p
                className="cursor-pointer"
                onClick={() => window.open("mailto:kofman.niki@gmail.com")}
              >
                {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "} */}
                kofman.niki@gmail.com
              </p>
              <p
                className="cursor-pointer"
                onClick={() => window.open("tel:+33678637087")}
              >
                {" "}
                {/* <FontAwesomeIcon icon={faPhone} className="mr-2" /> */}
                +33 (0) 6 78 63 70 87
              </p>
            </div>
            <div className="flex gap-3 w-full items-center justify-center sm:items-baseline sm:justify-normal  flex-col">
              <h1 className="font-extrabold">{t("businessdetails")}</h1>
              <p>Nikita Kofman</p>
              <p>SIREN: 891190050</p>
            </div>
          </div>
        </div>
        {/* <div className="fixed mb-10 bottom-0">
          <a href="#top">back to top</a>
        </div> */}
      </div>
    </div>
  );
}

export default ContactForms;

export function MaskText() {
  const { t } = useTranslation();
  const phrases = [t("lets"), t("start"), t("a"), t("project")];

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div
            key={index}
            className={`${styles.lineMask} md:mr-[30px] text-[11vw] md:text-[10vw]`}
            style={{ fontFamily: " ", fontWeight: "300" }}
          >
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
