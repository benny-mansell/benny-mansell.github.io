"use client";
import React from "react";

export default function Nav() {
  return (
    <div className="mt-10 mb-10 lg:mt-64">
      <div className="flex flex-col items-center justify-between h-16">
        <div className="flex flex-col justify-center items-center py-2 text-m text-zinc-100">
          <span className="text-4xl font-bold text-white p-5 text-center">
            <a href="/">BENNY MANSELL </a>
          </span>
          <span className="flex flex-row space-x-6">
            <a href="/photography">
              <img alt="photo" src="./photo.svg" />
            </a>

            <a href="https://www.linkedin.com/in/benny-mansell/">
              <img alt="Linkedin" src="./linkedin.svg" />
            </a>
            <a href="mailto:bennymansell49@gmail.com">
              <img alt="Email" src="./email.svg" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
