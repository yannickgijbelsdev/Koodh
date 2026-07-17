import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { journal } from "../mock";

export default function JournalSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-black font-extrabold uppercase-tight text-3xl md:text-5xl">
              The Latest
            </h2>
            <p className="mt-4 text-neutral-600 text-lg max-w-xl">
              Keep up with insights, events, and stories from our studios and beyond.
            </p>
          </div>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-[14px] font-semibold hover:bg-neutral-800 transition-colors group shrink-0"
          >
            Read our Journal
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {journal.map((j) => (
            <Link key={j.id} to="/journal" className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={j.image}
                  alt={j.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-[12px] font-semibold text-neutral-500">
                <span className="uppercase tracking-wide text-black">{j.tag}</span>
                <span>{j.read}</span>
                <span>{j.date}</span>
              </div>
              <h3 className="mt-2 text-black font-bold text-xl leading-snug group-hover:underline decoration-1 underline-offset-4">
                {j.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
