import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const FranceTime = () => {
  const [franceTime, setFranceTime] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    const getFranceTime = () => {
      const franceTimeZone = "Europe/Paris";
      const options = {
        timeZone: franceTimeZone,
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      };

      const currentFranceTime = new Date().toLocaleTimeString("en-US", options);
      setFranceTime(currentFranceTime);
    };

    // Update France time every second
    const intervalId = setInterval(getFranceTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ml-5  text-white text-[14px] flex flex-col">
      <h2 className="font-extrabold mr-3 text-gray-300 ">{t("localtime")}</h2>
      <p className="mt-3">{franceTime}</p>
    </div>
  );
};

export default FranceTime;
