import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import usePageMeta from "../lib/seo";
import Reveal from "../components/Reveal";
import portfolio127 from "../assets/portfolio-127.webp";
import portfolioDbnt from "../assets/portfolio-dbnt.webp";
import portfolioGrk from "../assets/portfolio-grk.webp";

const contactShots = [portfolio127, portfolioDbnt, portfolioGrk];

export default function Contact() {
  usePageMeta({
    title: "Contact",
    description:
      "Get in touch with Koodh. Tell us about your website, AI or IT project and we'll get back to you. Email info@koodh.com.",
    path: "/contact",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        {/* Hero */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16">
          <h1 className="font-extrabold uppercase-tight text-black text-[11vw] md:text-[7vw] leading-[0.92]">
            We'd <span className="font-script" style={{ color: "#3f5b9e" }}>love</span> to<br />hear from you
          </h1>
          <p className="mt-8 max-w-xl text-xl text-neutral-600">
            Got an idea we can help with? Reach out and we'll get back to you.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-3xl">
            <div className="border-t-2 border-black pt-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                General enquiries
              </p>
              <a
                href="mailto:info@koodh.com"
                className="mt-3 block text-black link-underline"
              >
                info@koodh.com
              </a>
            </div>
            <div className="border-t-2 border-black pt-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Payments
              </p>
              <a
                href="mailto:payments@koodh.com"
                className="mt-3 block text-black link-underline"
              >
                payments@koodh.com
              </a>
            </div>
          </div>
        </section>

        {/* Image strip */}
        <section className="overflow-hidden pb-4">
          <div className="grid md:grid-cols-3 gap-4 px-6 md:px-10">
            {contactShots.map((src, i) => (
              <Reveal as="div" key={i} delay={i * 110} className="aspect-video rounded-2xl overflow-hidden bg-neutral-100">
                <img src={src} alt="Koodh project" className="w-full h-full object-cover" />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Email CTA */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
                Start a <span className="font-script" style={{ color: "#3f5b9e" }}>conversation</span>
              </h2>
              <p className="mt-4 text-neutral-600 text-lg max-w-md">
                Tell us a little about your project or question and we'll route
                it to the right people. Drop us an email and we'll take it from
                there.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <a
                href="mailto:info@koodh.com?subject=Project%20enquiry"
                className="group inline-flex items-center gap-4 rounded-2xl border border-black/10 bg-neutral-50 px-6 py-6 hover:border-black transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Email us
                  </span>
                  <span className="block text-xl md:text-2xl font-bold text-black">
                    info@koodh.com
                  </span>
                </span>
                <ArrowRight
                  size={20}
                  className="ml-2 text-black transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
