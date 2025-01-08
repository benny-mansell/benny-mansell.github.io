"use client";
import React, { useState } from "react";

const Video = ({ src, content }: { src: string; content: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col lg:flex-row items-center py-10">
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          className="w-[400px] h-[225px] max-w-screen aspect-video"
          src={src}
          aria-labelledby="videoTitle"
          controls={isHovered} // Only show controls on hover
        ></video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Video;

