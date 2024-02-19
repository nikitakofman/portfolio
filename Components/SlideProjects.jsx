"use client";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import CustomCursor from "./CustomCursor";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function index({ project }) {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src, link } = project;
  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={`${styles.project} cursor-none`}
      onClick={() => window.open(link)}
      style={{ fontFamily: " ", fontWeight: "300" }}
    >
      {" "}
      <CustomCursor isVisible={isActive} />
      <p>{title1}</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        <video autoPlay muted loop playsInline className="w-[110px]">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <p>{title2}</p>
    </div>
  );
}
