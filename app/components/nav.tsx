import React from "react";

export default function Nav() {
  return (
    <nav className="sticky top-0 width-full bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg sm:text-2xl text-neutral-50 font-semibold hover:text-cyan-600">
            {" "}
            <a href="/">HOME </a>
          </span>
          <div className="flex space-x-4 text-m text-neutral-50">
            <a className="hover:text-cyan-600" href="/about">
              ABOUT
            </a>
            <a className="hover:text-cyan-600" href="/contact">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
