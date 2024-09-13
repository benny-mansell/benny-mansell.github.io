"use client";
import React, { useState } from "react";

const Video = ({ src, content }: { src: string; content: any }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-10 px-5 pt-10">
      <iframe
        className="w-[300px] h-[168px] sm:w-[400px] sm:h-[225px] md:h-[300px] md:w-[533px] max-w-screen aspect-video"
        src={src}
        allow="autoplay"
      ></iframe>
      {content}
    </div>
  );
};

export default Video;
