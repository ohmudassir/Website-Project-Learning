import React from "react";

const Hero = () => {
  return (
  <section className="bg-gray-50 py-20 text-center max-w-screen-xl mx-auto px-4">
  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
  Hi, I’m Mudassir
</h1>

  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
    Experienced in IoT and Desktop Applications for 4 years, now building web apps for 1 year
  </h2>
  <p className="text-lg text-gray-600 mb-6">
    Combining deep technical expertise with modern web development skills to create efficient and scalable solutions.
  </p>
  <a
  href="#get-started"
  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
  aria-label="Get started with our services"
>
  Get Started
</a>
</section>

  );
};

export default Hero;
