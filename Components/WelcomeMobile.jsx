"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SkillsBox from "./SkillsBox";

import TurningFx from "./TurningFx";
import { useInView } from "react-intersection-observer";
import styles from "./text2.module.css";
import { AnimatePresence, motion } from "framer-motion";
import GsapMagnetic from "./gsap";
import Scroll from "./Scroll";
import SlidingText from "./slidingtext";
import Slider from "./Slider";
import useStore from "@/store";

function WelcomeMobile({ LoadingDone }) {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [fadeEffect, setFadeEffect] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);

  const updateModalPosition = (event) => {
    setIsModalVisible(true);
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
    setFadeEffect(true);
  };

  const hideModal = () => {
    setFadeEffect(false);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollText = document.getElementById("scroll-text");
      if (window.scrollY > 0) {
        scrollText.style.opacity = 0;
      } else {
        scrollText.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="top" />
      <div className="p-5 flex sm:hidden w-full justify-end fixed z-40">
        <Slider />
      </div>
      {/* <div className="fixed flex gap-5 mr-5 mt-3 text-[3vw] z-50 right-0">
        <a href="#work">
          <p>work</p>
        </a>
        <a href="#contact">
          {" "}
          <p>contact</p>
        </a>
      </div> */}
      {isModalVisible && (
        <div
          style={{
            position: "fixed",
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: fadeEffect ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          className="hidden md:flex modal-like-div"
        >
          <TurningFx />
        </div>
      )}
      <div
        className="h-svh flex flex-col  -z-10 contain box-border "
        onMouseMove={updateModalPosition}
        onMouseEnter={() => setFadeEffect(true)} // Trigger fade in on mouse enter
        onMouseLeave={hideModal}
      >
        <div className="h-full w-full borderborder-black">
          <div className="h-full w-full flex  justify-end pr-10  mt-3 text-[25px] z-50 ">
            {LoadingDone && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1,
                  translateY: -100,
                }}
                animate={{ opacity: 1, translateY: 0, scale: 1 }} // Animate to normal scale
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ fontFamily: " ", fontWeight: "300" }}
                className="sm:flex hidden"
              >
                {" "}
                <a href="#work" className="mr-5 underline-animation-2">
                  <p>{t("region")}</p>
                </a>
                <p className="mr-4">|</p>
                <a href="#contact" className="underline-animation-2">
                  <p>{t("rooms")}</p>
                </a>
              </motion.div>
            )}
          </div>
        </div>
        <div className="h-full w-full borderborder-black">
          {" "}
          <div
            className={`absolute rounded-xl h-full borderborder-black flex flex-col w-full ${
              LoadingDone ? "locaon" : "-translate-x-full"
            }`}
          >
            {" "}
            <div className="h-full relative -ml-[22px] flex-col -mt-20 flex justify-start border-black w-full">
              <div className="w-[195px] bg-[#1C1D20] ml-5 flex items-center justify-evenly rounded-r-full h-[100px]">
                <h1 className="ml-2  font-semibold text-lg  text-white p-2 text-left rounded-2xl">
                  {t("based")}
                  <br></br>
                  {t("france")}
                </h1>
                <Image
                  height="50"
                  width="50"
                  src="/globe.gif"
                  className="size-20 bg-[#D4CACA] p-2 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full borderborder-black ml-5 flex items-left justify-center flex-col text-left  h-full">
            {" "}
            {/* <h1>hi! i'm niki</h1>
            <h1>web designer & developer</h1> */}
            {LoadingDone && (
              <>
                <AnimatePresence>
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 1,
                      translateY: -100,
                      translateX: -25,
                    }}
                    animate={{ opacity: 1, translateY: 0, scale: 1 }} // Animate to normal scale
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-col   pt-[90px] absolute  border items-center leading-[60px]"
                    style={{ fontFamily: " ", fontWeight: "300" }}
                  >
                    {" "}
                    {/* <span className="text-[min(4rem,14vw)]">hi! i'm niki</span>
                    <span className="text-[min(4rem,14vw)]">web designer</span>
                    <span className="text-[min(4rem,14vw)]">& developer</span> */}
                    <SlidingText />
                  </motion.div>
                </AnimatePresence>
                {/* <MaskText /> <MaskText2 /> */}
              </>
            )}
          </div>
        </div>
        <div className="h-full w-full borderborder-black">
          {" "}
          <div className="w-full flex justify-end  z-10 flex-col  h-full">
            <Scroll />
          </div>
          <Image
            height={170}
            width={170}
            src="/cartoonnk.png"
            className={`absolute right-0 min-w-56 w-[40%] bottom-0 z-[9999] ${
              LoadingDone ? "cartoonup" : "translate-y-full"
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default WelcomeMobile;

export function MaskText() {
  const { t } = useTranslation();
  const phrases = ["hi!", "i'm", "niki"];

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
            className={`${styles.lineMask} text-[5vw] md:mr-[30px]`}
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

export function MaskText2() {
  const { t } = useTranslation();
  const phrases = ["Web", "designer &", "developer"];

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
            className={`${styles.lineMask} text-[5vw] md:mr-[30px]`}
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
