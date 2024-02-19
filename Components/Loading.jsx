"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import TurningFx from "./TurningFx";
import MatrixTextEffect from "./Matrix";

function Loading({ onFinish }) {
  const [isLoading, setIsLoading] = useState(true); // State to control loading screen
  const [isAnimating, setIsAnimating] = useState(false); // New state to control animation

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);

      // Wait for the animation to finish before hiding the loader
      const animationTimer = setTimeout(() => {
        setIsLoading(false);
        onFinish(); // Call the onFinish callback when loading finishes
      }, 1000); // Match this duration to the length of your CSS animation

      return () => clearTimeout(animationTimer); // Cleanup the animation timer
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the loading timer
  }, [onFinish]);

  const loadingClass = isAnimating ? "bounce-off" : "";

  // useEffect(() => {
  //   const bars = document.querySelectorAll(".bar");
  //   bars[1].classList.add("delayed-animation");
  //   bars[2].classList.add("delayed-animation");
  // }, []);

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
    <div>
      {" "}
      {isLoading && (
        <div
          className={`fixed top-0  left-0 w-full cursor-progress h-full bg-[#d4caca] flex justify-center font-light text-[25px] items-center z-50 ${loadingClass} `}
        >
          {/* Your loading screen content, e.g., a spinner */}
          {/* <TurningFxNoText /> */} {displayText}
          {/* <div className="loader-container">
            <div className="bar bar1"></div>
            <div className="bar bar2 flex items-center justify-center">
              <h1
                className="text-2xl z-50  whitespace-nowrap flex items-center text-center justify-center bounce-text"
                style={{ fontFamily: "Jockey One" }}
              >
                NIKITA KOFMAN
              </h1>
            </div>
            <div className="bar -z-10 bar3"></div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Loading;
