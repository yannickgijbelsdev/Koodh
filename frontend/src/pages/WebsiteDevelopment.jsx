import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import FeatureRow from "../components/FeatureRow";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import BrandStrip from "../components/BrandStrip";
import usePageMeta from "../lib/seo";
import kootahCode from "../assets/kootah-code.png";
import kootahAi from "../assets/kootah-ai.jpg";

const steps = [
  { n: "01", title: "Discover", text: "We get to know your business, your customers and what success looks like for you." },
  { n: "02", title: "Design", text: "We shape a clean, modern design that fits your brand and feels great to use." },
  { n: "03", title: "Build", text: "We develop a fast, reliable website or web app with clean, future-proof code." },
  { n: "04", title: "Launch & grow", text: "We go live, keep an eye on things and help your site grow along with you." },
];

export default function WebsiteDevelopment() {
  usePageMeta({
    title: "Website Development",
    description:
      "Koodh designs and builds fast, modern websites and web apps, with smart AI integration to make your business work smarter.",
    path: "/website-development",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Website development"
          title={
            <>
              Websites that{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                work
              </span>{" "}
              for you
            </>
          }
          subtitle={"Fast, modern and reliable websites and web apps, fully tailored to your brand \u2014 with a little AI magic built right in."}
          chips={["Websites", "Web apps", "AI integration", "Maintenance & hosting"]}
        />

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 pb-4">
          <BrandStrip brands={["google", "cloudflare", "claude", "openai"]} label="We often integrate" />
        </div>

        <FeatureRow
          title="Web"
          script="development"
          text={"We design and build websites and web apps that are quick to load, easy to manage and a pleasure to use. Every project is crafted around your brand and your goals \u2014 no cookie-cutter templates."}
          features={[
            { title: "Custom design", text: "A bespoke look that matches your brand and stands out from the crowd." },
            { title: "Responsive & fast", text: "Perfect on phones, tablets and desktops, with speed that keeps visitors happy." },
            { title: "Web apps", text: "Interactive tools and platforms built around the way you and your customers work." },
            { title: "Maintenance & hosting", text: "We keep your site secure, up to date and online, so you don\u2019t have to worry." },
          ]}
          image={kootahCode}
          imgAlt="Koodh web development workspace"
          infoTestId="webdev-code-info"
          caption={{ title: "Web development", sub: "Clean, modern and built to last" }}
        />

        <FeatureRow
          title="AI"
          script="integration"
          text={"From smart automation to custom tools like Clara, we bring artificial intelligence into your business in a practical, human way \u2014 helping you save time and do more with less."}
          features={[
            { title: "Custom AI tools", text: "Assistants and tools built around your workflow, like our own Clara." },
            { title: "Automation", text: "Let repetitive tasks run themselves so your team can focus on real work." },
            { title: "Content systems", text: "Generate and manage content faster, without losing your brand voice." },
            { title: "Smart integrations", text: "Connect AI neatly into the website and tools you already use." },
          ]}
          image={kootahAi}
          imgAlt="Koodh AI-assisted development and code"
          reverse
          tinted
          infoTestId="webdev-ai-info"
          caption={{ title: "AI integration", sub: "Built into your code, tools and workflows" }}
        />

        {/* Process */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            How we{" "}
            <span className="font-script" style={{ color: "#3f5b9e" }}>
              build
            </span>
          </h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className="border-t-2 border-black pt-6">
                <span className="font-extrabold text-4xl text-neutral-300">{s.n}</span>
                <h3 className="mt-4 font-bold text-xl text-black">{s.title}</h3>
                <p className="mt-3 text-neutral-600 leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBand
          title={
            <>
              Ready to build something{" "}
              <span className="font-script text-[#c7d3f2]">great</span>?
            </>
          }
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
