import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingName = () => {
  return (
    <h1 className="text-4xl font-bold">
      <span className="text-indigo-400">
        <Typewriter
          words={["Vivek Sharma"]}
          loop={false}        
          cursor
          cursorStyle="|"
          typeSpeed={120}       
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default TypingName;
