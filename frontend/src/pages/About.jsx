import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import VideoModal from "../components/VideoModal";
import {
  aboutImages,
  aboutServices,
  clients,
  values,
  stats,
  team,
} from "../mock";

export default function About() {
  const [video, setVideo] = useState(null);

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        {/* Hero */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16">
          <h1 className="font-extrabold uppercase-tight text-black text-[13vw] md:text-[8vw] leading-[0.92]">
            Brand,<br />your identity<br />in action
          </h1>
          <p className="mt-10 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
            One team across London, Madrid, Tokyo and Vienna, integrating
            identity and interaction to create real value for brands around the
            world.
          </p>
        </section>

        {/* Image strip */}
        <section className="overflow-hidden pb-20">
          <div className="flex gap-4 px-6 md:px-10 overflow-x-auto no-scrollbar">
            {aboutImages.map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-[260px] md:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100"
              >
                <img src={src} alt="Koodh studio" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Statement + showreel */}
        <section className="bg-neutral-50 border-y border-black/5 py-24 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12">
            <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05]">
              Every touchpoint, every interaction, every moment.
            </h2>
            <div>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                At Koodh, we turn brand into action. We define your DNA and
                embed it across every interaction, ensuring it is consistently
                expressed, measured and continuously improved. Because brand is
                never finished — it evolves, learns and expands, becoming a force
                that builds the business, not just decorates it.
              </p>
              <button
                onClick={() => setVideo("AbZH7XWDW_k")}
                className="group mt-8 inline-flex items-center gap-3 text-black font-semibold"
              >
                <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play size={16} fill="currentColor" />
                </span>
                Play showreel
              </button>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            Our Services
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {aboutServices.map((s) => (
              <div key={s.name} className="border-t-2 border-black pt-6">
                <h3 className="font-extrabold uppercase-tight text-2xl text-black">{s.name}</h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="text-black font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="bg-neutral-50 border-y border-black/5 py-20">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <h2 className="font-extrabold uppercase-tight text-black text-2xl md:text-3xl">
              We've worked with
            </h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
              {clients.map((c) => (
                <div key={c.name} className="flex items-center justify-center h-12">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-9 max-w-[120px] object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl max-w-3xl">
            Who we are and what we stand for
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-14">
            {values.map((v, i) => (
              <div key={v.title} className="flex gap-6">
                <span className="text-neutral-300 font-extrabold text-3xl">0{i + 1}</span>
                <div>
                  <h3 className="font-bold text-2xl text-black">{v.title}</h3>
                  <p className="mt-3 text-neutral-600 text-lg leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-black text-white py-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <p className="text-white/60 max-w-xl text-lg">
              Koodh is an independent and global company. This is a snapshot of
              where we show up in the world.
            </p>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-extrabold text-5xl md:text-7xl">{s.value}</div>
                  <div className="mt-3 text-white/60 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
                Meet the team
              </h2>
              <p className="mt-4 text-neutral-600 text-lg max-w-xl">
                At Koodh, we collaborate with clients and each other on all
                projects as one team across our locations.
              </p>
            </div>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-sm font-semibold hover:bg-neutral-800 transition-colors group shrink-0"
            >
              Join the team
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="mt-4 font-bold text-black">{m.name}</h3>
                <p className="text-sm text-neutral-500">{m.role}</p>
                <p className="text-xs text-neutral-400 mt-1 font-medium tracking-wide">[{m.langs}]</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <VideoModal videoId={video} onClose={() => setVideo(null)} />
    </>
  );
}
