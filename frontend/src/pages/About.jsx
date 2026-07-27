import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Code2, Cloud, Wifi } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import {
  koodhIntro,
  koodhValues,
  koodhStats,
  koodhClients,
} from "../mock";
import accentBg from "../assets/accent-bg.png";
import usePageMeta from "../lib/seo";
import yannickImg from "../assets/yannick-gijbels.png";
import chielImg from "../assets/chiel-van-gansewinkel.png";
import { brandLogos } from "../components/BrandStrip";

const services = [
  {
    name: "Website Development",
    icon: Code2,
    desc: "Fast, modern websites and web apps \u2014 with smart AI integration built right in.",
    to: "/website-development",
  },
  {
    name: "Microsoft 365 & Signatures",
    icon: Cloud,
    desc: "Cloud setup, migration and management, plus consistent Xink e-mail signatures.",
    to: "/microsoft-365",
  },
  {
    name: "IT Consultancy",
    icon: Wifi,
    desc: "Down-to-earth, on-site help with Wi-Fi, computers and everyday tech.",
    to: "/it-consultancy",
  },
];

const tools = [
  "microsoft",
  "xink",
  "google",
  "proxmox",
  "unraid",
  "unifi",
  "tplink",
  "omada",
  "cloudflare",
  "claude",
  "openai",
].map((k) => brandLogos[k]);

const team = [
  { name: "Chiel van Gansewinkel", photo: chielImg },
  { name: "Yannick Gijbels", photo: yannickImg },
];

export default function About() {
  usePageMeta({
    title: "About",
    description:
      "Koodh builds websites and AI solutions, sets up Microsoft 365 and provides down-to-earth IT support across the Netherlands and Belgium.",
    path: "/about",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="About Koodh"
          title={
            <>
              We make technology{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                simple
              </span>
            </>
          }
          subtitle={koodhIntro}
          chips={["Websites", "AI", "Microsoft 365", "IT support"]}
        />

        {/* What we do */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            What we{" "}
            <span className="font-script" style={{ color: "#3f5b9e" }}>
              do
            </span>
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.name} delay={i * 90}>
                  <Link
                    to={s.to}
                    data-testid={`about-service-${i}`}
                    className="group block h-full border-t-2 border-black pt-6 hover:border-[#3f5b9e] transition-colors"
                  >
                    <Icon size={30} strokeWidth={1.6} className="text-black group-hover:text-[#3f5b9e] transition-colors" />
                    <h3 className="mt-5 font-extrabold uppercase-tight text-2xl text-black">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-neutral-600 leading-relaxed">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3f5b9e]">
                      Learn more
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* How we work */}
        <section className="relative overflow-hidden bg-[#0e1728] text-[#f4efe3] py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-50 bg-cover bg-center"
            style={{ backgroundImage: `url(${accentBg})` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0e1728] via-[#0e1728]/90 to-[#0e1728]/70" />
          <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
            <Reveal className="max-w-3xl">
              <h2 className="font-extrabold uppercase-tight text-3xl md:text-5xl leading-[1.05]">
                How we{" "}
                <span className="font-script text-[#8aa0d8]">work</span>
              </h2>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-[#f4efe3]/75 leading-relaxed">
                <p>
                  We start by understanding your business, your customers and your
                  goals. From there we design and build digital products that are
                  fast, reliable and a pleasure to use.
                </p>
                <p>
                  Whether it&rsquo;s a brand-new website, a smart AI tool like
                  Clara, Microsoft 365 or hands-on IT support, we work closely with
                  you as one team &mdash; keeping things clear, honest and moving
                  forward.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl max-w-3xl">
            What we stand{" "}
            <span className="font-script" style={{ color: "#3f5b9e" }}>
              for
            </span>
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
            className="pointer-events-none absolute inset-0 opacity-50 bg-cover bg-center"
            style={{ backgroundImage: `url(${accentBg})` }}
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

        {/* Clients + tools */}
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

            <div className="mt-20 pt-12 border-t border-white/10">
              <h2 className="text-[#f4efe3] text-2xl md:text-3xl font-extrabold uppercase-tight">
                We love to use{" "}
                <span className="font-script text-[#8aa0d8]">brands</span> like
              </h2>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-8 items-center">
                {tools.map((t, i) => (
                  <Reveal as="div" key={t.name} delay={i * 60} className="flex items-center justify-center gap-2.5 h-9 opacity-80 hover:opacity-100 transition-opacity">
                    <img src={t.icon} alt={t.name} className="h-5 w-5 object-contain shrink-0" />
                    <span className="text-[#f4efe3] text-base font-semibold whitespace-nowrap">
                      {t.name}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team teaser */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05]">
                Meet the real{" "}
                <span className="font-script" style={{ color: "#3f5b9e" }}>
                  Kootahs
                </span>
              </h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-xl">
                Behind Koodh is a small, dedicated team that treats your project
                like our own. Get to know the people you&rsquo;ll actually be
                working with.
              </p>
              <Link
                to="/meet-us"
                data-testid="about-meet-us-link"
                className="mt-8 inline-flex items-center gap-2 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-sm font-semibold hover:bg-[#3f5b9e] transition-colors group"
              >
                Meet the team
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-2 gap-5">
              {team.map((m) => (
                <div key={m.name} className="group">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-black/5">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>
                  <p className="mt-3 font-semibold text-black text-sm">{m.name}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <CtaBand
          title={
            <>
              Have a{" "}
              <span className="font-script text-[#c7d3f2]">project</span> in mind?
            </>
          }
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
