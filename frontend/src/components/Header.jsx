import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { navLinks } from "../mock";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home the hero is dark -> white text until scrolled
  const light = isHome && !scrolled;
  const textColor = light ? "text-white" : "text-black";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        <Link
          to="/"
          className={`text-[22px] font-extrabold tracking-tight ${textColor} transition-colors duration-300`}
        >
          SAFFRON
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-[13px] font-semibold tracking-wide link-underline ${textColor} transition-colors duration-300`}
            >
              {l.label}
            </Link>
          ))}
          <button
            className={`flex items-center gap-2 text-[13px] font-semibold tracking-wide ${textColor} transition-colors duration-300`}
          >
            SEARCH
            <Search size={15} strokeWidth={2.2} />
          </button>
        </nav>

        <button
          className={`lg:hidden ${textColor}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-6 animate-fade-up">
          <div className="flex items-center justify-between h-[36px]">
            <span className="text-[22px] font-extrabold tracking-tight text-black">SAFFRON</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={28} className="text-black" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-4xl font-extrabold uppercase-tight text-black"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
