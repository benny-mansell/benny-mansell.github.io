"use client";
import React, { useState } from "react";

export default function Nav() {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
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
          <div className="w-full max-w-56 font-light text-center p-2">
            {props.data}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mt-10 mb-10 lg:mt-64">
      <div className="flex flex-col items-center justify-between h-16">
        <div className="flex flex-col justify-center items-center py-2 text-m text-zinc-100">
          <span className="text-4xl text-zinc-100 font-semibold p-5 text-center">
            <a href="/">BENNY MANSELL </a>
          </span>
          <span className="flex flex-row space-x-4">
            <a href="https://www.linkedin.com/in/benny-mansell/">
              <img alt="Linkedin" src="./linkedin.svg" />
            </a>
            <a href="">
              <img alt="Email" src="./email.svg" />
            </a>
          </span>
          {/* {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}
