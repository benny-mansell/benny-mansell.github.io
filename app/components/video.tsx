"use client";
import React, { useState } from "react";

const Video = ({ src, content }: { src: string; content: any }) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center py-10">
      <div className="relative group">
        <iframe
          className="w-[400px] h-[225px] max-w-screen aspect-video"
          src={src}
          allow="fullscreen"
        ></iframe>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-65 text-white text-sm opacity-100 transition-opacity duration-300 group-hover:opacity-0">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Video;
