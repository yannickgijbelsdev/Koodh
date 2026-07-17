import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { navLinks, offices } from "../mock";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="font-extrabold uppercase-tight text-4xl md:text-6xl leading-[1.02]">
              Let&rsquo;s make<br />something together.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-white text-black rounded-full pl-6 pr-5 py-3.5 text-[14px] font-semibold hover:bg-neutral-200 transition-colors group"
            >
              Get in touch
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/50">Menu</h4>
              <ul className="mt-4 space-y-3">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[15px] font-medium text-white/90 hover:text-white link-underline">
                      {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/50">Studios</h4>
              <ul className="mt-4 space-y-3">
                {offices.map((o) => (
                  <li key={o} className="text-[15px] font-medium text-white/90">{o}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/50">Social</h4>
              <ul className="mt-4 space-y-3">
                {["Instagram", "LinkedIn", "X", "YouTube"].map((s) => (
                  <li key={s}>
                    <a href="#" className="text-[15px] font-medium text-white/90 hover:text-white link-underline">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-3xl font-extrabold tracking-tight">SAFFRON</span>
          <p className="text-[13px] text-white/50">
            &copy; {new Date().getFullYear()} Saffron Brand Consultants. Clone for demo purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
