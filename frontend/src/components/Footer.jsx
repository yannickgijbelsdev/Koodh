import React from "react";
import { Mail } from "lucide-react";
import logo from "../assets/koodh-logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0e1728] text-[#f4efe3]">
      {/* Subtle diagonal chevron pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 2px, transparent 2px, transparent 26px), repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 26px)",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10">
        {/* LET'S talk. */}
        <div className="leading-[0.82]">
          <span className="block font-extrabold uppercase-tight text-[22vw] md:text-[15vw] lg:text-[12rem]">
            Let&rsquo;s
          </span>
          <span className="block font-script text-[16vw] md:text-[11vw] lg:text-[9rem] -mt-2 md:-mt-6">
            talk.
          </span>
        </div>

        {/* Talk to us */}
        <div className="mt-14 md:mt-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#f4efe3]/50">
            Talk to us
          </p>
          <a
            href="mailto:info@koodh.com"
            className="mt-4 inline-flex items-center gap-3 group"
          >
            <span className="w-9 h-9 rounded-full border border-[#f4efe3]/30 flex items-center justify-center group-hover:bg-[#f4efe3] group-hover:text-[#0e1728] transition-colors">
              <Mail size={16} />
            </span>
            <span className="text-2xl md:text-4xl font-bold group-hover:underline underline-offset-4 decoration-1">
              info@koodh.com
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="mt-16 md:mt-24 border-t border-[#f4efe3]/15" />

        {/* Bottom row */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <img
            src={logo}
            alt="Koodh"
            className="h-10 md:h-12 w-auto brightness-0 invert"
          />
          <p className="font-extrabold uppercase-tight text-2xl md:text-4xl lg:text-[2.6rem] leading-none">
            The right{" "}
            <span className="font-script lowercase font-semibold">team,</span>{" "}
            for your IT solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
