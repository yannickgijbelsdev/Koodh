import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "../assets/koodh-logo.png";
import footerBg from "../assets/footer-bg.png";
import { openCookiePreferences } from "../lib/consent";

const NAVY = "#3f5b9e";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-[#1c2a4a]">
      {/* Chevron pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* White wash for text legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.72) 45%, rgba(255,255,255,0.6) 100%)",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10">
        {/* LET'S talk. */}
        <div className="leading-[0.82]">
          <span className="block font-extrabold uppercase-tight text-[22vw] md:text-[15vw] lg:text-[12rem]">
            Let&rsquo;s
          </span>
          <span
            className="block font-script text-[16vw] md:text-[11vw] lg:text-[9rem] -mt-2 md:-mt-6"
            style={{ color: NAVY }}
          >
            talk.
          </span>
        </div>

        {/* Talk to us */}
        <div className="mt-14 md:mt-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#1c2a4a]/50">
            Talk to us
          </p>
          <a
            href="mailto:info@koodh.com"
            className="mt-4 inline-flex items-center gap-3 group"
          >
            <span className="w-9 h-9 rounded-full border border-[#1c2a4a]/30 flex items-center justify-center group-hover:bg-[#1c2a4a] group-hover:text-white transition-colors">
              <Mail size={16} />
            </span>
            <span className="text-2xl md:text-4xl font-bold group-hover:underline underline-offset-4 decoration-1">
              info@koodh.com
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="mt-16 md:mt-24 border-t border-[#1c2a4a]/15" />

        {/* Bottom row */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <img src={logo} alt="Koodh" className="h-10 md:h-12 w-auto" />
          <p className="font-extrabold uppercase-tight text-2xl md:text-4xl lg:text-[2.6rem] leading-none">
            The right{" "}
            <span className="font-script lowercase font-semibold" style={{ color: NAVY }}>
              team,
            </span>{" "}
            for your IT solutions.
          </p>
        </div>

        {/* Legal links */}
        <div className="mt-10 pt-6 border-t border-[#1c2a4a]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-[#1c2a4a]/50">
            &copy; {new Date().getFullYear()} Koodh. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-[#1c2a4a]/80">
            <Link to="/terms" className="hover:text-[#1c2a4a] link-underline">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy" className="hover:text-[#1c2a4a] link-underline">
              Privacy &amp; Cookies
            </Link>
            <button
              onClick={openCookiePreferences}
              className="hover:text-[#1c2a4a] link-underline"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
