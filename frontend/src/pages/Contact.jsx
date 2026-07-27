import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, CreditCard, MapPin, MessageCircle, PenTool, Rocket } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import usePageMeta from "../lib/seo";

const channels = [
  {
    icon: Mail,
    label: "General enquiries",
    value: "info@koodh.com",
    href: "mailto:info@koodh.com?subject=Project%20enquiry",
    note: "Websites, AI, Microsoft 365 or IT support \u2014 start here.",
  },
  {
    icon: CreditCard,
    label: "Payments",
    value: "payments@koodh.com",
    href: "mailto:payments@koodh.com?subject=Payment%20question",
    note: "Questions about an invoice or a payment.",
  },
];

const steps = [
  { icon: MessageCircle, title: "You reach out", text: "Send us a quick e-mail with your idea, question or challenge \u2014 no essay needed." },
  { icon: PenTool, title: "We think along", text: "We reply with honest, jargon-free advice and a clear next step that fits you." },
  { icon: Rocket, title: "We get to work", text: "Once it clicks, we roll up our sleeves and turn the plan into something real." },
];

export default function Contact() {
  usePageMeta({
    title: "Contact",
    description:
      "Get in touch with Koodh. Tell us about your website, AI, Microsoft 365 or IT question and we'll get back to you. Email info@koodh.com.",
    path: "/contact",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s start a{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                conversation
              </span>
            </>
          }
          subtitle={"Got an idea we can help with? Drop us a line and we\u2019ll get back to you \u2014 real people, no ticket numbers."}
          chips={["Websites", "AI", "Microsoft 365", "IT support"]}
        />

        {/* Contact channels */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal as="div" key={c.label} delay={i * 100}>
                  <a
                    href={c.href}
                    data-testid={`contact-channel-${i}`}
                    className="group flex items-start gap-5 rounded-2xl border border-black/10 bg-neutral-50 p-7 md:p-8 hover:border-[#3f5b9e] hover:bg-white transition-colors h-full"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3f5b9e]/10 text-[#3f5b9e] group-hover:bg-[#3f5b9e] group-hover:text-white transition-colors">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                        {c.label}
                      </p>
                      <p className="mt-2 text-xl md:text-2xl font-bold text-black break-words">
                        {c.value}
                      </p>
                      <p className="mt-3 text-neutral-600 leading-relaxed">{c.note}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3f5b9e]">
                        Send an e-mail
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* Where we work */}
          <Reveal as="div" className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-black/10 p-6 md:p-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-black">
              <MapPin size={18} strokeWidth={1.8} />
            </span>
            <p className="text-neutral-600">
              <span className="font-semibold text-black">Working across the Netherlands &amp; Belgium.</span>{" "}
              On-site where it helps, online where it&rsquo;s faster. &middot; KVK 42066318
            </p>
          </Reveal>
        </section>

        {/* What happens next */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            What happens{" "}
            <span className="font-script" style={{ color: "#3f5b9e" }}>
              next
            </span>
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 100} className="border-t-2 border-black pt-6">
                  <div className="flex items-center gap-4">
                    <span className="font-extrabold text-3xl text-neutral-300">0{i + 1}</span>
                    <Icon size={24} strokeWidth={1.7} className="text-[#3f5b9e]" />
                  </div>
                  <h3 className="mt-5 font-bold text-xl text-black">{s.title}</h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed">{s.text}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Explore services instead of a hard CTA */}
        <CtaBand
          title={
            <>
              Not sure where to{" "}
              <span className="font-script text-[#c7d3f2]">start</span>?
            </>
          }
          to="/about"
          label="Explore what we do"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
