"use client";

import GsapMagnetic from "./gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contacts({ invertColors }) {
  const openInsta = () => {
    window.open("https://www.instagram.com/nikikofman/", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/nikitakofman", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/nikitakofman", "_blank");
  };

  return (
    <div
      className={`z-20 pl-5 w-[30px] justify-between hidden md:flex items-center fixed ${
        invertColors ? "getout" : "getin"
      }`}
    >
      <div
        className="left-0 h-screen items-center justify-center flex flex-col
     gap-5 "
      >
        {" "}
        <GsapMagnetic>
          <FontAwesomeIcon
            className={`h-7 cursor-pointer pr-1 ${
              invertColors ? "fa-icon" : ""
            }`}
            onClick={openInsta}
            icon={faInstagram}
          />
        </GsapMagnetic>
        <GsapMagnetic>
          <FontAwesomeIcon
            className={`h-7 cursor-pointer pr-1 ${
              invertColors ? "fa-icon" : ""
            }`}
            onClick={openGithub}
            icon={faGithub}
          />
        </GsapMagnetic>
        <GsapMagnetic>
          <FontAwesomeIcon
            className={`h-7 cursor-pointer pr-1 ${
              invertColors ? "fa-icon" : ""
            }`}
            onClick={openLinkedin}
            icon={faLinkedin}
          />
        </GsapMagnetic>
      </div>
      {/* <div className="h-full  w-full flex justify-end -mr-[56px] items-end">
        <h1
          className="text-2xl h-full right-0 bottom-0 flex rotate90  items-center text-center justify-center"
          style={{ fontFamily: "Jockey One" }}
        >
          NIKITA KOFMAN
        </h1>
      </div> */}
    </div>
  );
}
