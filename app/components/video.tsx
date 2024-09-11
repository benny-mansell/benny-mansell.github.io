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
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-5 py-5 ">
      <iframe src={src} width="650" height="400" allow="autoplay"></iframe>
      <div className="flex flex-col py-5 px-5">
        <h2 className="text-3xl lg:text-4xl mb-2 font-bold text-zinc-100">
          VIDEO TITLE
        </h2>
        <p className="text-zinc-100 max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Video;
