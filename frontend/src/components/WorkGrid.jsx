import React from "react";
import WorkCard from "./WorkCard";
import { caseStudies } from "../mock";

export default function WorkGrid() {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {caseStudies.map((c) => (
            <WorkCard key={c.id} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
