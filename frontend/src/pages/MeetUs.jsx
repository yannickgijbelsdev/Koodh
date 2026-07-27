import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import usePageMeta from "../lib/seo";
import { koodhValues } from "../mock";
import yannickImg from "../assets/yannick-gijbels.png";
import chielImg from "../assets/chiel-van-gansewinkel.png";

const team = [
  {
    name: "Chiel van Gansewinkel",
    role: "IT Consultancy & Microsoft 365 Cloud",
    photo: chielImg,
    bio: "Chiel is the person you want on-site when the Wi-Fi drops or a computer plays up. Hands-on, calm and practical, he keeps your day-to-day tech running so you never have to think about it.",
  },
  {
    name: "Yannick Gijbels",
    role: "Online Identity, Microsoft 365 Cloud & Xink E-mail Signatures",
    photo: yannickImg,
    bio: "Yannick makes your business look sharp online \u2014 from Microsoft 365 setups to polished e-mail signatures with Xink. He loves the details that make a brand feel professional in every message.",
  },
];

export default function MeetUs() {
  usePageMeta({
    title: "Meet Us",
    description:
      "Meet the real Kootahs \u2014 the small, dedicated team behind Koodh building websites, AI and IT solutions across the Netherlands and Belgium.",
    path: "/meet-us",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Meet us"
          title={
            <>
              Meet the real{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                Kootahs
              </span>
            </>
          }
          subtitle="A small, dedicated team that treats your project like our own. Real people, real craft, no call centres."
        />

        {/* Team */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
            {team.map((m, i) => (
              <Reveal as="div" key={m.name} delay={i * 120} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-black/5">
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <h3 className="mt-6 font-bold text-black text-2xl">{m.name}</h3>
                <p className="text-[#3f5b9e] font-medium">{m.role}</p>
                <p className="mt-4 text-neutral-600 text-lg leading-relaxed max-w-xl">
                  {m.bio}
                </p>
              </Reveal>
            ))}
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

        <CtaBand
          title={
            <>
              Want to work{" "}
              <span className="font-script text-[#c7d3f2]">with us</span>?
            </>
          }
          label="Get in touch"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
