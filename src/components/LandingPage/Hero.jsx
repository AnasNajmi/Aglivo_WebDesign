"use client";

import React, { useState } from "react";
import TextDisplay from "./TextDisplay";
import EmailForm from "./EmailForm";

const services = [
  "UI/UX Designing",
  "Software Development",
  "Consultation",
  "Digital Marketing",
  "Content Creation",
];

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your email submission logic here
  };

  return (
    <div
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/assets/logos/waves.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wave-animation"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span>Your Vision</span>
              <span className="bg-white text-black px-4 py-1">
                Our Creativity
              </span>
            </div>
            <div className="flex items-center justify-start gap-4 whitespace-nowrap mt-2 md:ml-[-40px] justify-center md:justify-start">
              <span>Delivering</span>
              <div className="bg-white rounded-full w-[52px] h-[52px] flex items-center justify-center">
                <span className="text-black text-2xl font-bold">&lt;/&gt;</span>
              </div>
              <span>Custom Solutions</span>
            </div>
          </h1>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We are extensive experience and a strong team & We deliver creative
            branding, web design, and UI/UX solutions to make the most impact.
          </p>

          <EmailForm />

          {/* Arrow icon */}
          <div className="mt-16 animate-bounce">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width text display */}
      <div className="absolute bottom-0 translate-y-[-90px] w-full py-2 px-4 z-20">
        <TextDisplay items={services} />
      </div>
    </div>
  );
};

export default Hero;
