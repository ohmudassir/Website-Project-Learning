import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 transition-opacity duration-500 hover:opacity-80">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to My Site
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a simple hero section to introduce the site.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
