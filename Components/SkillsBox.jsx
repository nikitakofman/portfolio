import React from "react";

function SkillsBox() {
  // Function to render a single set of images
  const renderImages = () => (
    <React.Fragment>
      <img className="h-20 p-1 m-2" src="/htmlicon.png" alt="HTML Icon" />
      <img className="h-20 p-1 m-2" src="/cssicon.png" alt="CSS Icon" />
      <img className="h-20 p-1 m-2" src="/jsicon.png" alt="JavaScript Icon" />
      <img
        className="h-20 p-1 m-2"
        src="/typescript.png"
        alt="TypeScript Icon"
      />
      <img
        className="h-20 p-1 m-2"
        src="/tailwind.png"
        alt="Tailwind CSS Icon"
      />
      <img className="h-20 p-1 m-2" src="/reacticon.png" alt="React Icon" />
      <img className="h-[86px] p-1 m-2" src="/nextlogo2.png" alt="Next Icon" />
      <img
        className="h-20 p-1 m-2 bg-indigo-100 rounded-[50%]"
        src="/exsmall.png"
        alt="Express.js Icon"
      />
      <img className="h-20 p-1 m-2" src="/mongodb.svg" alt="MongoDB Icon" />
      <img
        className="h-20 p-1 m-2"
        src="/firebaseicon.png"
        alt="Firebase Icon"
      />
    </React.Fragment>
  );

  return (
    <div className=" skills-scroll text-1xl  group-hover:bg-blue-100/10 z-0 rounded-md xbg-indigo-100 font-medium text-black sm:ml-20 sm:mr-20 transition-all duration-300 ease-in-out">
      <div className="rounded-2xl p-2">
        <div className="flex flex-row justify-around items-center">
          {renderImages()}
          {renderImages()}
          {renderImages()}
          {renderImages()}

          {/* Duplicate the set of images for smooth scrolling */}
        </div>
      </div>
    </div>
  );
}

export default SkillsBox;
