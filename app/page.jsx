"use client";

import { useState } from "react";
import HeaderOne from "@/components/HeaderOne";
import FooterOne from "@/components/FooterOne";
import HeaderTwo from "@/components/HeaderTwo";
import FooterTwo from "@/components/FooterTwo";
import HeaderThree from "@/components/HeaderThree";
import FooterThree from "@/components/FooterThree";

const headers = [<HeaderOne />, <HeaderTwo />, <HeaderThree />];
const footers = [<FooterOne />, <FooterTwo />, <FooterThree />];

export default function Home() {
  const [currentHeader, setCurrentHeader] = useState(0);
  const [currentFooter, setCurrentFooter] = useState(0);

  const handleHeaderSwipe = (direction) => {
    if (direction === "left") {
      setCurrentHeader((prev) => (prev + 1) % headers.length);
    } else if (direction === "right") {
      setCurrentHeader((prev) => (prev - 1 + headers.length) % headers.length);
    }
  };

  const handleFooterSwipe = (direction) => {
    if (direction === "left") {
      setCurrentFooter((prev) => (prev + 1) % footers.length);
    } else if (direction === "right") {
      setCurrentFooter((prev) => (prev - 1 + footers.length) % footers.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div>{headers[currentHeader]}</div>

      <div className="container mx-auto flex justify-between p-5 items-center">
        <button
          onClick={() => handleHeaderSwipe("right")}
          aria-label="Previous Header"
          className="bg-accent bg-opacity-50 hover:bg-opacity-80 text-gray-900 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex space-x-2 mx-4">
          {headers.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentHeader ? "bg-accent shadow-lg" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => handleHeaderSwipe("left")}
          aria-label="Next Header"
          className="bg-accent bg-opacity-50 hover:bg-opacity-80 text-gray-900 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="container mx-auto flex justify-between p-5 items-center">
        <button
          onClick={() => handleFooterSwipe("right")}
          aria-label="Previous Footer"
          className="bg-accent bg-opacity-50 hover:bg-opacity-80 text-gray-900 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex space-x-2 mx-4">
          {footers.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentFooter ? "bg-accent shadow-lg" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => handleFooterSwipe("left")}
          aria-label="Next Footer"
          className="bg-accent bg-opacity-50 hover:bg-opacity-80 text-gray-900 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div>{footers[currentFooter]}</div>
    </div>
  );
}
