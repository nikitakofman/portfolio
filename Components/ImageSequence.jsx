import React, { useState, useEffect, useRef } from "react";

const ImageSequence = ({ images }) => {
  // State to hold the current image index
  const [currentImage, setCurrentImage] = useState(0);
  // State to track if the animation has already been played
  const [hasPlayed, setHasPlayed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            // Set hasPlayed to true so the effect doesn't run again
            setHasPlayed(true);

            // Image sequence logic
            let counter = 0;
            const interval = setInterval(() => {
              counter++;
              setCurrentImage(counter);
              if (counter >= images.length - 1) {
                clearInterval(interval);
              }
            }, 200); // 2000 ms for 5 images results in 400 ms per image
          }
        });
      },
      { threshold: 0.7 } // Trigger when at least 50% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [images, hasPlayed]); //

  return (
    <div
      ref={containerRef}
      className="h-[200px] w-full  overflow-hidden flex items-center justify-center"
    >
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="object-cover w-screen h-full"
      />
    </div>
  );
};

export default ImageSequence;
