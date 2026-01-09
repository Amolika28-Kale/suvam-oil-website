import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "mr" ? "en" : "mr");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Suvam<span className="text-purple-400">Oil</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#product" className="hover:text-purple-400 transition">Product</a>
          <a href="#doctor" className="hover:text-purple-400 transition">Doctor</a>
        </div>

        {/* Language + Buy Now */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
          >
            {lang === "mr" ? "English" : "मराठी"}
          </button>

          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:scale-105 transition">
            Buy Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
          >
            {lang === "mr" ? "EN" : "मर"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10">
          <a
            href="#home"
            className="block px-6 py-4 text-white hover:bg-purple-800/20 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-6 py-4 text-white hover:bg-purple-800/20 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#product"
            className="block px-6 py-4 text-white hover:bg-purple-800/20 transition"
            onClick={() => setMenuOpen(false)}
          >
            Product
          </a>
          <a
            href="#doctor"
            className="block px-6 py-4 text-white hover:bg-purple-800/20 transition"
            onClick={() => setMenuOpen(false)}
          >
            Doctor
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="block w-full px-6 py-3 mt-2 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:scale-105 transition"
          >
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
}
