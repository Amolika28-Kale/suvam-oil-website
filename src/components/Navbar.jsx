import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "mr" ? "en" : "mr");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">
          Suvam<span className="text-indigo-600">Oil</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-indigo-600 transition">Home</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#product" className="hover:text-indigo-600 transition">Product</a>
          <a href="#doctor" className="hover:text-indigo-600 transition">Doctor</a>
        </div>

        {/* Language + Buy Now */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200 transition"
          >
            {lang === "mr" ? "English" : "मराठी"}
          </button>

          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition">
            Buy Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200 transition"
          >
            {lang === "mr" ? "EN" : "मर"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <a
            href="#home"
            className="block px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#product"
            className="block px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Product
          </a>
          <a
            href="#doctor"
            className="block px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Doctor
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="block w-[90%] mx-auto px-6 py-3 my-4 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition"
          >
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
}
