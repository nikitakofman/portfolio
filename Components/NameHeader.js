"use client";

import GsapMagnetic from "./gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function NameHeader({ invertColors, style }) {
  return (
    <div className="hidden sm:flex z-20  right-0 justify-between items-center fixed">
      <div className="right-0 flip h-screen items-center justify-center  w-10 flex flex-col gap-5">
        <div className="h-[40px] w-full flex justify-end -mr-28 items-end">
          <h1
            className={`text-2xl whitespace-nowrap h-full flex rotate90 items-center text-center justify-center ${
              invertColors ? "getoutright" : "getinright"
            }`}
            style={{ fontFamily: " ", fontWeight: "300" }}
          >
            NIKITA KOFMAN
          </h1>
        </div>
      </div>
    </div>
  );
}
