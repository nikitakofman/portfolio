"use client";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "zustand";

function Slider() {
  const { t } = useTranslation();

  const [isSheetOpen, setSheetOpen] = useState(false);

  // Function to close the sheet
  const closeSheet = () => {
    setSheetOpen(false);
  };

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
    <Sheet
      open={isSheetOpen}
      onOpenChange={setSheetOpen}
      className="cursor-pointer"
    >
      <SheetTrigger asChild>
        <div className="flex">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl mt-[3px] text-black"
          />
        </div>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            <div className="  text-3xl w-full  flex pl-1 -mt-2.5 text-[#D4CACA]  ">
              menu
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex   underline-animation2 flex-col sm:flex-row justify-between text-white  gap-3 items-left text-left text-2xl">
              <div className="flex gap-2 w-full flex-col justify-between">
                <a href="#work" onClick={closeSheet}>
                  <p className="p-1 w-full cursor-pointer">{t("region")}</p>
                </a>
                <a href="#contact" onClick={closeSheet}>
                  <p className="p-1 w-full cursor-pointer">{t("rooms")}</p>
                </a>
              </div>
              {/* <div className="flex gap-2 w-full flex-col justify-between">
                <p className=" p-1 w-full cursor-pointer">Contact</p>
                <p className=" p-1 w-full cursor-pointer">Terms</p>

                <p className=" p-1 w-full cursor-pointer">RGPD</p>
                <p className=" p-1 w-full cursor-pointer">Support</p>
              </div> */}
              <div className="[&>p]:mr-3 [&>p]:ml-3  mt-3 [&>p]:cursor-pointer">
                <FontAwesomeIcon
                  className="mr-5 size-7 cursor-pointer"
                  icon={faInstagram}
                  onClick={openInsta}
                />

                <FontAwesomeIcon
                  className="mr-5 size-7 cursor-pointer"
                  icon={faGithub}
                  onClick={openGithub}
                />

                <FontAwesomeIcon
                  className="mr-5 size-7 cursor-pointer"
                  icon={faLinkedin}
                  onClick={openLinkedin}
                />
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Slider;
