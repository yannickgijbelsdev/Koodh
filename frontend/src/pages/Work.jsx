import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import WorkCard from "../components/WorkCard";
import { caseStudies } from "../mock";

const categories = [
  "All",
  "Technology",
  "Mobility & Hospitality",
  "Energy & Industrial",
  "Places & Real Estate",
  "Culture & Media",
];

export default function Work() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category.includes(filter));

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
          <h1 className="font-extrabold uppercase-tight text-black text-[13vw] md:text-[8vw] leading-[0.92]">
            Work
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
            Selected case studies. Brand and experience, put into action for
            ambitious organisations around the world.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-300 ${
                  filter === c
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/15 hover:border-black"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {filtered.map((c) => (
              <WorkCard key={c.id} item={c} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-neutral-500 py-20 text-center">No projects in this category yet.</p>
          )}
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
