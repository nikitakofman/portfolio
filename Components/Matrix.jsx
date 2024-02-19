"use client";

import { useEffect, useState } from "react";

const MatrixTextEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const finalText = "NIKITA KOFMAN";

  // Generate random characters
  const getRandomChar = () => {
    const characters =
      //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
      "</>!=-(){}[],?;_#";
    return characters[Math.floor(Math.random() * characters.length)];
  };

  // Function to update the display text with random characters
  const updateDisplayText = () => {
    setDisplayText(
      Array.from({ length: finalText.length }, getRandomChar).join("")
    );
  };

  // Function to start the animation
  const startAnimation = () => {
    const duration = 800; // Animation duration in milliseconds
    const interval = 50; // Interval between character updates in milliseconds

    let elapsedTime = 0;

    const animationInterval = setInterval(() => {
      updateDisplayText();
      elapsedTime += interval;

      if (elapsedTime >= duration) {
        clearInterval(animationInterval);
        setDisplayText(finalText);
      }
    }, interval);
  };

  useEffect(() => {
    // Start the animation after component mount
    startAnimation();
  }, []);

  return (
    <div
      className="text-[2rem] font-light"
      //   style={{
      //     fontFamily: " ",
      //     fontWeight: "300",
      //     fontSize: "2rem",
      //     color: "black",

      //     whiteSpace: "nowrap",
      //     display: "flex",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
    >
      {displayText}
    </div>
  );
};

export default MatrixTextEffect;
