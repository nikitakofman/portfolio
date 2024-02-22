"use client";
import Image from "next/image";
import styles from "./style2.module.scss";
import { useRef, useEffect } from "react";
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }

      // Use translate3d initially and smoothly transition to xPercent
      gsap.to(firstText.current, { x: 0, xPercent: xPercent });
      gsap.to(secondText.current, { x: 0, xPercent: xPercent });
      gsap.to(thirdText.current, { x: 0, xPercent: xPercent });

      requestAnimationFrame(animate);
      xPercent += 0.03 * direction;
    };

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: window,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animate);

    return () => {
      gsap.to(slider.current, { x: 0 });
      gsap.killTweensOf([
        firstText.current,
        secondText.current,
        thirdText.current,
      ]);
      gsap.killTweensOf(slider.current);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.main variants={slideUp} className={styles.landing}>
      <div className="w-full -z-10 ">
        <div className={styles.sliderContainer}>
          <div
            ref={slider}
            className={`${styles.slider} text-[65px] sm:text-[100px]`}
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
