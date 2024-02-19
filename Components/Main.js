"use client";

import { useTranslation } from "react-i18next";
import Contacts from "./Contacts";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lenis from "@studio-freight/lenis";
import NameHeader from "./NameHeader";
import Projects from "./SlideProjectsMain";
import Welcome from "./Welcome";
import ContactForms from "./ContactForms";
import Loading from "./Loading";
import WelcomeMobile from "./WelcomeMobile";
import ProjectsMobile from "./ProjectsMobile";

import LanguageChanger from "./LanguageChanger";

function Main() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false); // To ensure the effect only plays once
  const containerRef = useRef(null);

  const [isBOSlideVisible, setIsBOSlideVisible] = useState(false);
  const [isNZXSlideVisible, setIsNZXSlideVisible] = useState(false);
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);

  const { scrollYProgress } = useScroll();

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);

  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is intersecting and the effect hasn't been played yet
          if (entry.isIntersecting && !hasPlayed) {
            setIsVisible(true);
            setHasPlayed(true); // Prevents the effect from running again
          } else if (!entry.isIntersecting && !hasPlayed) {
            // Optional: Hide it again if you want the effect to toggle based on viewport
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.7, // Adjust based on when you want the animation to trigger
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasPlayed]);

  const handleLoadingFinish = () => {
    console.log("Loading finished!");
    setIsLoadingFinished(true);
  };

  const [isNotMobile, setIsNotMobile] = useState(true);

  useEffect(() => {
    const checkIsNotMobile = () => {
      setIsNotMobile(window.innerWidth > 900);
    };

    checkIsNotMobile();
    window.addEventListener("resize", checkIsNotMobile);

    return () => window.removeEventListener("resize", checkIsNotMobile);
  }, []);

  return (
    <>
      <NameHeader invertColors={isBOSlideVisible} />
      <Contacts invertColors={isBOSlideVisible} />
      <LanguageChanger />

      {/* <motion.div
        className="progress-bar z-20 hidden sm:flex"
        style={{ scaleX: scrollYProgress }}
      /> */}
      <Loading onFinish={handleLoadingFinish} />
      {isNotMobile ? (
        <Welcome LoadingDone={isLoadingFinished} />
      ) : (
        <WelcomeMobile LoadingDone={isLoadingFinished} />
      )}
      <div className="h-full">
        <div id="work" />
        <div className="hidden md:flex md:flex-col">
          <Projects />
        </div>
        <ProjectsMobile />
      </div>
      <ContactForms
        onVisibilityChange={(isVisible) => setIsBOSlideVisible(isVisible)}
      />
      {/* <div className="h-screen">bruh</div> */}
    </>
  );
}

export default Main;

{
  /* <VPSlide />

        <BOSlide
        // onVisibilityChange={(isVisible) => setIsBOSlideVisible(isVisible)}
        />
        <NZXSlide
        // onVisibilityChange={(isVisible) => setIsNZXSlideVisible(isVisible)}
        /> */
}
