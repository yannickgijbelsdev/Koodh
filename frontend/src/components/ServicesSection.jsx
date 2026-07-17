import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../mock";

export default function ServicesSection() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-t border-black/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <h2 className="text-black font-extrabold uppercase-tight text-3xl md:text-5xl">
          Browse work by service
        </h2>
        <div className="mt-12 flex flex-wrap gap-3 md:gap-4">
          {services.map((s) => (
            <Link
              key={s}
              to="/work"
              className="px-6 py-3.5 rounded-full border border-black/15 text-black text-[15px] font-medium hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            >
              {s}
            </Link>
          ))}
        </div>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 mt-14 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-[14px] font-semibold hover:bg-neutral-800 transition-colors group"
        >
          View all case studies
          <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
