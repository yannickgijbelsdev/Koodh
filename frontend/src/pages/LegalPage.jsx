import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import usePageMeta from "../lib/seo";

export default function LegalPage({ title, updated, intro, sections, path }) {
  usePageMeta({ title, description: intro, path });
  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <section className="max-w-[900px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-8">
          <h1 className="font-extrabold uppercase-tight text-black text-[11vw] md:text-[6vw] leading-[0.95]">
            {title}
          </h1>
          {updated && (
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Last updated: {updated}
            </p>
          )}
          {intro && (
            <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
              {intro}
            </p>
          )}
        </section>

        <section className="max-w-[900px] mx-auto px-6 md:px-10 pb-28">
          <div className="mt-6 space-y-12">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-extrabold uppercase-tight text-black text-2xl md:text-3xl">
                  {i + 1}. {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-neutral-700 text-lg leading-relaxed">
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="mt-2 space-y-2">
                      {s.list.map((li, k) => (
                        <li key={k} className="flex items-start gap-3">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
