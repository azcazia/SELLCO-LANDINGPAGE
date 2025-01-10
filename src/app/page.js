"use client";

import React, { useEffect, useState } from "react";

export default function LandingPage() {
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true); // Flag that indicates client-side rendering
  }, []);

  return (
    <div className="bg-black text-white">
      <header className="flex flex-wrap justify-between items-center py-4 px-8">
        <a href="#">
          <img
            src="/sellco-white.webp"
            alt="sellco.ai logo"
            className="h-12"
          />
        </a>

        <nav>
          <ul className="flex flex-wrap space-x-6 text-sm md:text-base">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                SEO Tools
              </a>
            </li>
          </ul>
        </nav>

        <button className="bg-red-400 text-white px-4 py-2 rounded text-sm md:text-base">
          Book a Demo
        </button>
      </header>

      <section className="text-center py-10 px-4 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Transform Your Amazon Advertising with
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-red-400 mb-6">
          AI-Powered Precision
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          Seamlessly automate campaigns, boost performance, and drive profits.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded text-sm md:text-base">
            Contact us
          </button>
          <button className="bg-red-400 text-white px-6 py-3 rounded text-sm md:text-base">
            Book a Demo
          </button>
        </div>
      </section>

{clientRendered && (
  <section className="bg-black text-black p-4 sm:p-8">
    <div className="bg-black p-4 rounded-lg shadow-lg">
      <img
        src="/dash.webp"
        alt="Dashboard preview"
        className="w-full rounded-lg"
      />
    </div>
  </section>
)}


      <footer className="bg-black text-gray-400 text-center py-4 text-xs md:text-sm">
        <p>&copy; 2025 sellco.ai. All rights reserved.</p>
      </footer>
    </div>
  );
}
