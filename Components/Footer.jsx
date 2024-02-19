"use client";

import React from "react";
import FranceTime from "./FranceLocal";
import GsapMagnetic from "./gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Footer() {
  const openInsta = () => {
    window.open("https://www.instagram.com/nikikofman/", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/nikitakofman", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/nikitakofman", "_blank");
  };

  const { t } = useTranslation();

  return (
    <div className="h-[100px] flex items-center w-full justify-between bg-[#1C1D20]">
      <div className="flex sm:justify-normal sm:mr-0 sm:w-6/12 justify-between mr-3 w-full">
        {" "}
        <FranceTime />
        <div className="ml-6  text-white text-[14px] flex flex-col">
          <h2 className="font-extrabold mr-3 text-gray-300 sm:text-left text-right ">
            {t("version")}
          </h2>
          <p className="mt-3 mr-3 sm:mr-0">2024 © N.K.</p>
        </div>
      </div>

      <div className="text-white hidden sm:flex flex-col  underline-animation text-[14px] z-30  mr-5">
        <h2 className="font-extrabold   text-gray-300 ">{t("socials")}</h2>
        <div className="[&>p]:mr-3 [&>p]:ml-3 mt-3 [&>p]:cursor-pointer">
          <GsapMagnetic>
            <FontAwesomeIcon
              className="mr-5 size-5 cursor-pointer"
              icon={faInstagram}
              onClick={openInsta}
            />
          </GsapMagnetic>
          <GsapMagnetic>
            <FontAwesomeIcon
              className="mr-5 size-5 cursor-pointer"
              icon={faGithub}
              onClick={openGithub}
            />
          </GsapMagnetic>
          <GsapMagnetic>
            <FontAwesomeIcon
              className="mr-5 size-5 cursor-pointer"
              icon={faLinkedin}
              onClick={openLinkedin}
            />
          </GsapMagnetic>
        </div>
      </div>
    </div>
  );
}

export default Footer;
