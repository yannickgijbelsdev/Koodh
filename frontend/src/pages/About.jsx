import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, Compass } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import FaqSection from "../components/FaqSection";
import Reveal from "../components/Reveal";
import {
  koodhIntro,
  koodhServices,
  koodhValues,
  koodhStats,
  koodhClients,
  media,
} from "../mock";
import usePageMeta from "../lib/seo";
import yannickImg from "../assets/yannick-gijbels.png";
import chielImg from "../assets/chiel-van-gansewinkel.png";
import msLogo from "../assets/brands/microsoft.svg";
import xinkLogo from "../assets/brands/xink.svg";
import googleLogo from "../assets/brands/google.svg";
import proxmoxLogo from "../assets/brands/proxmox.svg";
import unraidLogo from "../assets/brands/unraid.svg";

const team = [
  { name: "Yannick Gijbels", role: "Online Identity, Microsoft 365 Cloud & Xink E-mail Signatures", photo: yannickImg },
  { name: "Chiel van Gansewinkel", role: "IT Consultancy & Microsoft 365 Cloud", photo: chielImg },
];

const tools = [
  { name: "Microsoft", logo: msLogo },
  { name: "Xink Signatures", logo: xinkLogo },
  { name: "Google", logo: googleLogo },
  { name: "Proxmox", logo: proxmoxLogo },
  { name: "Unraid", logo: unraidLogo },
];

const serviceIcons = [Code2, Cpu, Compass];

export default function About() {
  usePageMeta({
    title: "About",
    description:
      "Koodh builds websites and AI solutions for small and large businesses. Learn what we do: web development, AI solutions and IT consultancy across the Netherlands and Belgium.",
    path: "/about",
  });
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
            We build <span className="font-script" style={{ color: "#3f5b9e" }}>websites</span><br />&amp; AI solutions
          </h1>
          <p className="mt-10 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
            {koodhIntro}
          </p>
        </section>

        {/* Image feature band */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-8">
          <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[media.workspace, media.code, media.server, media.workspace2].map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl bg-neutral-100 ${
                  i === 0 ? "col-span-2 aspect-[2/1] md:aspect-[2/1]" : "aspect-square"
                }`}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </Reveal>
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
                <Reveal key={s.name} delay={i * 90} className="border-t-2 border-black pt-6">
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
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* How we work */}
        <section className="relative overflow-hidden bg-[#0e1728] text-[#f4efe3] py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: `url(${media.blueCircuit})` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0e1728] via-[#0e1728]/90 to-[#0e1728]/60" />
          <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-extrabold uppercase-tight text-3xl md:text-5xl leading-[1.05]">
                How we <span className="font-script text-[#8aa0d8]">work</span>
              </h2>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-[#f4efe3]/75 leading-relaxed">
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
            </Reveal>
            <Reveal delay={120} className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
              <img src={media.code3} alt="" loading="lazy" className="w-full h-full object-cover" />
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl max-w-3xl">
            What we stand for
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-14">
            {koodhValues.map((v, i) => (
              <Reveal as="div" key={v.title} delay={(i % 2) * 90} className="flex gap-6">
                <span className="text-neutral-300 font-extrabold text-3xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-2xl text-black">{v.title}</h3>
                  <p className="mt-3 text-neutral-600 text-lg leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="relative overflow-hidden bg-[#0e1728] text-[#f4efe3] py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-25 bg-cover bg-center"
            style={{ backgroundImage: `url(${media.blueStreaks})` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0e1728]/70 via-[#0e1728]/85 to-[#0e1728]" />
          <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {koodhStats.map((s, i) => (
                <Reveal as="div" key={s.label} delay={i * 90}>
                  <div className="font-extrabold text-5xl md:text-7xl">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[#f4efe3]/60 text-sm font-medium">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="bg-[#0e1728] border-t border-white/10 pb-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <h2 className="text-[#f4efe3] text-2xl md:text-3xl font-extrabold uppercase-tight">
              Trusted <span className="font-script text-[#8aa0d8]">by</span>
            </h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
              {koodhClients.map((c, i) => (
                <Reveal as="div" key={c.name} delay={i * 80} className="flex items-center justify-center h-14">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-12 max-w-[150px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Reveal>
              ))}
            </div>

            {/* We love to use */}
            <div className="mt-20 pt-12 border-t border-white/10">
              <h2 className="text-[#f4efe3] text-2xl md:text-3xl font-extrabold uppercase-tight">
                We love to use{" "}
                <span className="font-script text-[#8aa0d8]">brands</span> like
              </h2>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12 items-center">
                {tools.map((t, i) => (
                  <Reveal as="div" key={t.name} delay={i * 70} className="flex items-center justify-center h-10">
                    <img
                      src={t.logo}
                      alt={t.name}
                      className="max-h-9 max-w-[150px] object-contain opacity-75 hover:opacity-100 transition-opacity"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            Meet the <span className="font-script" style={{ color: "#3f5b9e" }}>team</span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600 text-lg">
            The people behind Koodh &mdash; a small, dedicated team that builds
            your websites and AI solutions with care.
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
            {team.map((m, i) => (
              <Reveal as="div" key={m.name} delay={i * 120} className="group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100">
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <h3 className="mt-5 font-bold text-black text-xl">{m.name}</h3>
                <p className="text-neutral-500">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FaqSection />

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#1c2a4a] text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${media.blueCurves})` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1c2a4a] via-[#22305a] to-[#3f5b9e]/70" />
          <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <h2 className="font-extrabold uppercase-tight text-3xl md:text-5xl max-w-2xl leading-[1.05]">
                Have a <span className="font-script text-[#c7d3f2]">project</span> in mind?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1c2a4a] rounded-full pl-6 pr-5 py-4 text-sm font-semibold hover:bg-neutral-100 transition-colors group shrink-0"
              >
                Let&rsquo;s talk
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
