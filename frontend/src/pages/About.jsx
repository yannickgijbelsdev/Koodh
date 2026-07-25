import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, Compass } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import {
  koodhIntro,
  koodhServices,
  koodhValues,
  koodhStats,
  koodhClients,
} from "../mock";

const serviceIcons = [Code2, Cpu, Compass];

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        {/* Hero */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
            About Koodh
          </p>
          <h1 className="mt-6 font-extrabold uppercase-tight text-black text-[11vw] md:text-[6.5vw] leading-[0.95]">
            We build websites<br />&amp; AI solutions
          </h1>
          <p className="mt-10 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
            {koodhIntro}
          </p>
        </section>

        {/* What we do */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            What we do
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {koodhServices.map((s, i) => {
              const Icon = serviceIcons[i] || Code2;
              return (
                <div key={s.name} className="border-t-2 border-black pt-6">
                  <Icon size={30} strokeWidth={1.6} className="text-black" />
                  <h3 className="mt-5 font-extrabold uppercase-tight text-2xl text-black">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="text-black font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* How we work */}
        <section className="bg-neutral-50 border-y border-black/5 py-24 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12">
            <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05]">
              How we work
            </h2>
            <div className="space-y-5 text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                We start by understanding your business, your customers and your
                goals. From there we design and build digital products that are
                fast, reliable and a pleasure to use.
              </p>
              <p>
                Whether it&rsquo;s a brand-new website, a smart AI tool like
                Clara, or hands-on IT support, we work closely with you as one
                team &mdash; keeping things clear, honest and moving forward.
              </p>
              <p>
                The result: technology that actually helps your business grow,
                built by a team that genuinely cares about the craft.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl max-w-3xl">
            What we stand for
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-14">
            {koodhValues.map((v, i) => (
              <div key={v.title} className="flex gap-6">
                <span className="text-neutral-300 font-extrabold text-3xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-2xl text-black">{v.title}</h3>
                  <p className="mt-3 text-neutral-600 text-lg leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#0e1728] text-[#f4efe3] py-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {koodhStats.map((s) => (
                <div key={s.label}>
                  <div className="font-extrabold text-5xl md:text-7xl">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[#f4efe3]/60 text-sm font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="bg-[#0e1728] border-t border-white/10 pb-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <h2 className="text-[#f4efe3]/60 text-sm font-semibold uppercase tracking-[0.2em]">
              Trusted by
            </h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
              {koodhClients.map((c) => (
                <div key={c.name} className="flex items-center justify-center h-14">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-12 max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl max-w-2xl leading-[1.05]">
              Have a project in mind?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black text-white rounded-full pl-6 pr-5 py-4 text-sm font-semibold hover:bg-neutral-800 transition-colors group shrink-0"
            >
              Let&rsquo;s talk
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
