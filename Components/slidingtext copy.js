"use client";
import Image from "next/image";
import styles from "./style2.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SlidingText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const { t } = useTranslation();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "top top",
        end: "bottom top",
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: "-500px",
    });

    animate(animation.scrollTrigger);
  }, []);

  const animate = (scrollTrigger) => {
    if (!scrollTrigger) {
      // Ensure scrollTrigger is defined
      return;
    }

    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });

    xPercent += 0.03 * direction;

    if (scrollTrigger.isActive) {
      requestAnimationFrame(() => animate(scrollTrigger));
    }
  };

  return (
    <motion.main variants={slideUp} className={styles.landing}>
      <div className="w-full -z-10 ">
        <div className={styles.sliderContainer}>
          <div
            ref={slider}
            className={`${styles.slider} text-[65px]  sm:text-[100px]`}
          >
            <p ref={firstText}>
              {t("hello")}&nbsp;👨‍💻&nbsp;{t("make")}
              &nbsp;👨‍💻
            </p>
            <p ref={secondText}>
              {t("hello")}&nbsp;👨‍💻&nbsp;{t("make")}
              &nbsp;👨‍💻
            </p>
            <p ref={thirdText}>
              {t("hello")}&nbsp;👨‍💻&nbsp;{t("make")}
              &nbsp;👨‍💻
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
