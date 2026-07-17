import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Plus, Minus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import VideoModal from "../components/VideoModal";
import { careersImages, benefits, dayInLife, careersFaq, stats } from "../mock";

export default function Careers() {
  const [video, setVideo] = useState(null);
  const [open, setOpen] = useState(null);

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        {/* Hero */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-14">
          <h1 className="font-extrabold uppercase-tight text-black text-[13vw] md:text-[8vw] leading-[0.92]">
            Imagine at<br />Saffron
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
            Take your curiosity anywhere. Create opportunity everywhere.
          </p>
          <button
            onClick={() => setVideo("AbZH7XWDW_k")}
            className="group mt-8 inline-flex items-center gap-3 text-black font-semibold"
          >
            <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play size={16} fill="currentColor" />
            </span>
            Play the video
          </button>
        </section>

        {/* Image strip */}
        <section className="overflow-hidden pb-20">
          <div className="flex gap-4 px-6 md:px-10 overflow-x-auto no-scrollbar">
            {careersImages.map((src, i) => (
              <div key={i} className="shrink-0 w-[260px] md:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                <img src={src} alt="Life at Saffron" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* No open positions */}
        <section className="bg-neutral-50 border-y border-black/5 py-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
            <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
              No open positions
            </h2>
            <div>
              <p className="text-lg text-neutral-600">
                Looks like we don't have any jobs open at the moment but we're
                always on the lookout for new talent.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-sm font-semibold hover:bg-neutral-800 transition-colors group"
              >
                Let's connect
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">At Saffron</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-extrabold text-5xl md:text-7xl text-black">{s.value}</div>
                <div className="mt-3 text-neutral-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* A day in the life */}
        <section className="bg-neutral-50 border-y border-black/5 py-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">A day in the life</h2>
            <p className="mt-4 max-w-2xl text-neutral-600 text-lg">
              From strategy and design to keeping the whole agency's work running,
              our team is a skilful group of humans.
            </p>
            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {dayInLife.map((d) => (
                <div key={d.name} className="group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                    <img src={d.photo} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <p className="mt-4 text-sm text-neutral-500">{d.role}</p>
                  <p className="text-xs text-neutral-400 font-medium">[{d.langs}]</p>
                  <h3 className="mt-1 font-bold text-black text-xl">{d.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">Perks & Benefits</h2>
          <p className="mt-4 max-w-2xl text-neutral-600 text-lg">
            Interesting work with global clients is where our offer starts. At
            Saffron, we look after our people.
          </p>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.n} className="border-t-2 border-black pt-5">
                <span className="text-neutral-300 font-extrabold text-2xl">{b.n}</span>
                <h3 className="mt-2 font-bold text-black text-xl">{b.title}</h3>
                <p className="mt-2 text-neutral-600">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-50 border-t border-black/5 py-24">
          <div className="max-w-[1000px] mx-auto px-6 md:px-10">
            <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
              Find answers to your questions
            </h2>
            <div className="mt-12 border-t border-black/10">
              {careersFaq.map((f, i) => (
                <div key={i} className="border-b border-black/10">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-bold text-black text-lg md:text-xl">{f.q}</span>
                    <span className="shrink-0 text-black">
                      {open === i ? <Minus size={22} /> : <Plus size={22} />}
                    </span>
                  </button>
                  {open === i && (
                    <p className="pb-6 text-neutral-600 text-lg max-w-2xl animate-fade-up">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <VideoModal videoId={video} onClose={() => setVideo(null)} />
    </>
  );
}
