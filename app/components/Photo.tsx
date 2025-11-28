"use client";
import React from "react";

type PhotoProps = {
  src: string;
  content?: React.ReactNode;
  width: string;}

const Photo = ({ src, content, width }: PhotoProps) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center py-2">
      <div className="relative group">
        <img src={src} alt="Photo" width={width} height={600} className="rounded-lg shadow-md" />
        {content && <div className="mt-4 text-center">{content}</div>}
      </div>
    </div>
  );
};

export default Photo;