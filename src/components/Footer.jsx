import React, { useEffect } from "react";
import { animate } from "animejs";

export default function Footer() {
  useEffect(() => {
    animate(".bg-color", {
      background: ["#6366F1", "#8B5CF6", "#EC4899", "#22D3EE", "#10B981"],
      duration: 2000,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);
  return (
    <footer className="bg-color w-full  text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold tracking-wide">Tech Work</h2>
          <p className="text-sm text-white">
            Built with React, Tailwind, Shadcn/UI, Swiper & Anime.js
          </p>
        </div>

        <div className="text-white text-sm text-center md:text-left">
          © 2025 Tech Work — All rights reserved.
        </div>

        <div className="flex gap-4 text-white">
          <a href="#" className="hover:text-gray-400 transition-colors ease-in-out duration-500">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
