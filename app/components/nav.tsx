"use client";
import React, { useState } from "react";

export default function Nav() {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "ABOUT",
      data: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "CONTACT",
      data: (
        <div className="flex flex-row justify-center space-x-4">
          <a href="https://www.linkedin.com/in/benny-mansell/">
            <img alt="Linkedin" src="./linkedin.svg" />
          </a>
          <a href="">
            <img alt="Email" src="./email.svg" />
          </a>
        </div>
      ),
      isOpen: false,
    },
  ]);
  const toggleAccordion = (accordionkey: number) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  function Accordion(props: {
    toggleAccordion: React.MouseEventHandler<HTMLButtonElement>;
    title: string;
    isOpen: boolean;
    data: any;
  }) {
    return (
      <div className="mb-1">
        <button className="w-full" onClick={props.toggleAccordion}>
          {props.title}
          {props.isOpen ? (
            <span className="px-2"> -</span>
          ) : (
            <span className="px-2"> +</span>
          )}
        </button>
        {props.isOpen && (
          <div className="w-full max-w-48 font-light justify-center p-2">
            {props.data}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mx-20 mb-5 mt-5 lg:mt-64 lg:mb-auto pb-5 pt-5">
      <div className="flex flex-col items-center justify-between h-16">
        <div className="px-100">
          <span className="text-lg text-2xl text-zinc-100 font-semibold whitespace-nowrap">
            <a href="/">BENNY MANSELL </a>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center py-2 text-m text-zinc-100">
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
