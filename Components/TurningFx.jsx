import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

function TurningFx() {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }} // Set initial scale to 0.5
        animate={{ opacity: 1, scale: 1 }} // Animate to normal scale
        exit={{ opacity: 0, scale: 0.5 }} // Animate to scale down on exit
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="main">
          {/* <img
        src="https://www.svgrepo.com/show/19515/coding.svg"
        width="50"
        height="50"
      /> */}
          <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
            <defs>
              <path
                id="circle"
                d="M 100, 100
    m -75, 0
    a 75, 75 0 1, 0 150, 0
    a 75, 75 0 1, 0 -150, 0
    "
              ></path>
            </defs>
            <text width="800" fontSize={"30"}>
              <textPath
                alignment-baseline="top"
                xlinkHref="#circle"
                className="text"
                style={{ fontFamily: "Jost" }}
              >
                {t("webdev")}
              </textPath>
            </text>
          </svg>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TurningFx;
