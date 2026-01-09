import { useState } from "react";

export default function Navbar({ lang, setLang }) {
  const toggleLanguage = () => {
    setLang(lang === "mr" ? "en" : "mr");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          Suvam<span className="text-purple-400">Oil</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#doctor">Doctor</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
          >
            {lang === "mr" ? "English" : "मराठी"}
          </button>

          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:scale-105 transition">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
}
