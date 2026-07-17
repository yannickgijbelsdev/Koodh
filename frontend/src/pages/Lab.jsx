import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { labArticles } from "../mock";

export default function Lab() {
  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Lab</p>
          <h1 className="mt-4 font-extrabold uppercase-tight text-black text-[9vw] md:text-[5.5vw] leading-[0.98]">
            Saffron Lab:<br />Testing creative boundaries
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
            A space for us to explore, toy with, and incubate new ideas that push
            our work and clients forward.
          </p>
        </section>

        <section className="bg-neutral-50 border-y border-black/5 py-20">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <h2 className="font-extrabold uppercase-tight text-black text-2xl md:text-3xl">The latest</h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {labArticles.map((a) => (
                <Link key={a.id} to="/lab" className="group block">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
                    <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-neutral-500">
                    <span className="uppercase tracking-wide text-black">{a.tag}</span>
                    <span>{a.date}</span>
                    <span>{a.read}</span>
                  </div>
                  <h3 className="mt-2 font-bold text-black text-xl leading-snug group-hover:underline decoration-1 underline-offset-4">{a.title}</h3>
                  <p className="mt-2 text-neutral-600 text-sm">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
