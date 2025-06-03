import React from "react";
import profileImg from "../assets/mudassir.jpg"; // Make sure you have this image

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-10 pt-16 bg-gray-50">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-6xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3 opacity-0 animate-fade-in [animation-delay:200ms]">
            Hi, I'm Mudassir
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6 opacity-0 animate-fade-in [animation-delay:400ms]">
            4+ years in IoT & Desktop Apps — now building for the Web.
          </h2>
          <p className="text-gray-500 max-w-xl mb-8 opacity-0 animate-fade-in [animation-delay:600ms]">
            I create modern, fast, and responsive interfaces using React, Tailwind CSS, and professional development practices.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profileImg}
            alt="Mudassir"
            className="w-60 h-60 object-cover rounded-full border-4 border-blue-100 shadow-md opacity-0 animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
