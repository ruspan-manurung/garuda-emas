import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "id" ? "en" : "id");
  };

  const navs = [
    { name: "Home", path: "/" },
    { name: "Sewa", path: "/sewa" },
    { name: "Layanan", path: "/solusi" },
  ];

  return (
    <nav className="fixed top-4 w-full z-50 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto inline-flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop border border-gray-200"
            : "bg-white/40 backdrop border border-white/20"
        } rounded-full px-2 py-1.5`}
      >
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center px-2">
            <img
              src="/images/logo.png"
              alt="Garuda Emas"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navs.map((n) => (
              <Link
                key={n.name}
                to={n.path}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
                  location.pathname === n.path
                    ? "bg-accent text-primary"
                    : "hover:text-accent"
                }`}
              >
                {n.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2 pl-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-full text-xs border border-gray-300 hover:border-accent hover:text-accent transition whitespace-nowrap"
            >
              {i18n.language.toUpperCase()}
            </button>

            <Link
              to="/sewa"
              className="px-4 py-2 rounded-full text-sm font-bold bg-primary text-white hover:bg-accent hover:text-primary transition whitespace-nowrap"
            >
              Pesan
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary text-2xl ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 space-y-3 md:hidden">
            {navs.map((n) => (
              <Link
                key={n.name}
                to={n.path}
                className={`block text-center py-3 rounded-xl font-bold ${
                  location.pathname === n.path
                    ? "bg-accent text-primary"
                    : "text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {n.name}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
              <button
                onClick={toggleLanguage}
                className="py-3 rounded-xl border border-gray-300 font-bold"
              >
                {i18n.language === "id" ? "INDO" : "ENG"}
              </button>
              <Link
                to="/sewa"
                className="bg-primary text-white py-3 rounded-xl font-bold text-center hover:bg-accent hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                BOOK
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
