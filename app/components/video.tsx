"use client";
import React, { useState } from "react";

const Video = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center items-center h-100 py-5 ">
      <video
        src={src}
        className={`transition-all duration-1000 ${
          isHovered ? "w-3/4 h-3/4" : `w-${width} h-${height}`
        }`}
        width={isHovered ? width * 1.5 : width}
        height={isHovered ? height * 1.5 : height}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        controls
      />
      <div
        className={`flex flex-col w-1/4 px-5 ${isHovered ? "hidden" : "block"}`}
      >
        <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-neutral-900">
          VIDEO TITLE
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Video;
