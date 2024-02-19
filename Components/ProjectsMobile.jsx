import React from "react";
import { useTranslation } from "react-i18next";

function ProjectsMobile() {
  const openNzx = () => {
    window.open("https://www.nzxaudio.com", "_blank");
  };

  const openBO = () => {
    window.open("https://www.beatodyssey.com", "_blank");
  };

  const openVP = () => {
    window.open("https://www.villadepalmire.com");
  };

  const { t } = useTranslation();
  return (
    <>
      {" "}
      <div
        className="flex md:hidden h-full flex-col p-6 "
        style={{ fontFamily: " ", fontWeight: "300" }}
      >
        <p>{t("mainworks")}</p>
        <div
          className="border-t-2 w-full my-1 flex  items-center justify-center border-black h-24"
          onClick={openVP}
        >
          <h1 className="text-[min(4rem,13vw)] whitespace-nowrap">
            Villa Palmire
          </h1>
        </div>
        <div
          className="border-t-2 w-full my-1 flex  items-center justify-center border-black h-24"
          onClick={openBO}
        >
          <h1 className="text-[min(4rem,13vw)]  whitespace-nowrap">
            Beat Odyssey
          </h1>
          {/* <img src="/BOFILM.gif"/> */}
        </div>
        <div
          className="border-t-2 w-full my-1 flex  items-center justify-center border-black h-24"
          onClick={openNzx}
        >
          <h1 className="text-[min(4rem,13vw)]">NZX</h1>
        </div>
      </div>
    </>
  );
}

export default ProjectsMobile;
