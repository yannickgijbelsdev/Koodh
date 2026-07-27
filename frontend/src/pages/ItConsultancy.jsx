import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import FeatureRow from "../components/FeatureRow";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import { Wifi, MonitorSmartphone, MapPin, HeartHandshake } from "lucide-react";
import usePageMeta from "../lib/seo";
import kootahUnifi from "../assets/kootah-unifi.png";

const helps = [
  { icon: Wifi, title: "Wi-Fi solutions", text: "Fast, stable wireless that reaches every corner of your home or office \u2014 no more dead spots." },
  { icon: MonitorSmartphone, title: "PC problems solved", text: "Slow, stuck or acting up? We diagnose and fix your computers, laptops and devices." },
  { icon: MapPin, title: "On-site service", text: "We come to your location and sort it out in person, not over a chat window." },
  { icon: HeartHandshake, title: "Friendly advice", text: "Clear, honest guidance on your everyday tech \u2014 no jargon, no pressure." },
];

export default function ItConsultancy() {
  usePageMeta({
    title: "IT Consultancy",
    description:
      "Down-to-earth, on-site IT help from Koodh: Wi-Fi solutions, fixing PC problems and everyday tech support across the Netherlands and Belgium.",
    path: "/it-consultancy",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="IT consultancy"
          title={
            <>
              IT help that{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                shows up
              </span>
            </>
          }
          subtitle={
            "When your Wi-Fi drops or a computer plays up, you don\u2019t want a ticket number \u2014 you want someone who comes over and fixes it."
          }
          chips={["Wi-Fi & networks", "PC repair", "On-site", "Everyday support"]}
        />

        <FeatureRow
          title="On-site,"
          script="hands-on"
          text={
            "We\u2019re your down-to-earth IT partner. We come to you, roll up our sleeves and get your Wi-Fi and computers working again \u2014 in plain language and without the fuss. No endless waiting, no confusing tech-speak."
          }
          image={kootahUnifi}
          imgAlt="Koodh on-site Wi-Fi and network setup"
          imgPos="object-top"
          infoTestId="itc-info"
        />

        {/* What we help with */}
        <section className="bg-neutral-50 border-y border-black/5">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
            <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
              What we help{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                with
              </span>
            </h2>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helps.map((h, i) => {
                const Icon = h.icon;
                return (
                  <Reveal key={h.title} delay={i * 90} className="bg-white rounded-2xl ring-1 ring-black/5 p-7 hover:ring-[#3f5b9e]/40 transition-colors">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3f5b9e]/10 text-[#3f5b9e]">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 font-bold text-xl text-black">{h.title}</h3>
                    <p className="mt-3 text-neutral-600 leading-relaxed">{h.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <CtaBand
          title={
            <>
              Got a tech{" "}
              <span className="font-script text-[#c7d3f2]">headache</span>?
            </>
          }
          label="Call us in"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
