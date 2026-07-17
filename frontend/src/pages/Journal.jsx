import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { journalArticles, podcasts } from "../mock";

export default function Journal() {
  const [featured, ...rest] = journalArticles;

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-14">
          <h1 className="font-extrabold uppercase-tight text-black text-[13vw] md:text-[8vw] leading-[0.92]">
            A pinch of<br />Saffron
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
            Keep up with all the latest insights, events, and stories from our
            studios and beyond.
          </p>
        </section>

        {/* Featured */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-20">
          <Link to="/journal" className="group grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play size={22} fill="currentColor" className="text-black ml-0.5" />
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold text-neutral-500">
                <span className="uppercase tracking-wide text-black">{featured.tag}</span>
                <span>{featured.date}</span>
                <span>{featured.read}</span>
              </div>
              <h2 className="mt-4 font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05]">
                {featured.title}
              </h2>
              <p className="mt-4 text-neutral-600 text-lg">{featured.excerpt}</p>
            </div>
          </Link>
        </section>

        {/* Grid */}
        <section className="bg-neutral-50 border-y border-black/5 py-20">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <h2 className="font-extrabold uppercase-tight text-black text-2xl md:text-3xl">The latest</h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((a) => (
                <Link key={a.id} to="/journal" className="group block">
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

        {/* Podcasts */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24">
          <h2 className="font-extrabold uppercase-tight text-black text-2xl md:text-3xl">Podcast episodes</h2>
          <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
            {podcasts.map((p) => (
              <div key={p.title} className="py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group">
                <div className="flex-1">
                  <h3 className="font-bold text-black text-lg group-hover:underline decoration-1 underline-offset-4">{p.title}</h3>
                  <p className="text-neutral-500 text-sm mt-1">{p.host}</p>
                </div>
                <div className="text-sm text-neutral-500 md:w-40">{p.meta}</div>
                <div className="text-sm text-neutral-500 md:w-28">{p.date}</div>
                <a href="#" className="text-sm font-semibold text-black link-underline">Listen</a>
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
