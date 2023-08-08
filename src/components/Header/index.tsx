"use client";
import { rozha } from "@/app/fonts";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);

  const open = () => {
    const hamburguer = document.getElementById("navbar-solid-bg");
    setIsOpen((prev) => !prev);

    isOpen
      ? hamburguer!.classList.remove("hidden")
      : hamburguer!.classList.add("hidden");
  };

  // handle scroll event
  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.scrollY > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header: DOMRect;
    if (headerRef.current) header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <header
      className={`bg-slate-200 text-white w-full border-b border-gray-300 ${
        sticky.isSticky ? " sticky" : ""
      }`}
      ref={headerRef}
    >
      <nav className="border-gray-900">
        <div className=" flex flex-wrap items-center justify-between mx-auto py-2 px-16">
          <a href="./" className="flex items-center">
            <span
              className={`${rozha.className} self-center text-2xl font-semibold whitespace-nowrap text-neutral-950`}
            >
              K.dev
            </span>
          </a>
          <button
            onClick={() => open()}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
              <li className="border-r-2 border-blue-900 px-3">
                <a
                  href="./"
                  className="block py-2 pl-3 pr-4 text-neutral-950 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li className="border-r-2 border-blue-900 px-3">
                <a
                  href="#sobre"
                  className="block py-2 pl-3 pr-4 text-neutral-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Sobre
                </a>
              </li>
              <li className="border-r-2 border-blue-900 px-3">
                <a
                  href="#projetos"
                  className="block py-2 pl-3 pr-4 text-neutral-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Projetos
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#contato"
                  className="block py-2 pl-3 pr-4 text-neutral-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
