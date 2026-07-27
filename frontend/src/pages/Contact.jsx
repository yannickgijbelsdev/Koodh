import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import usePageMeta from "../lib/seo";
import Reveal from "../components/Reveal";
import portfolio127 from "../assets/portfolio-127.webp";
import portfolioDbnt from "../assets/portfolio-dbnt.webp";
import portfolioGrk from "../assets/portfolio-grk.webp";

const contactShots = [portfolio127, portfolioDbnt, portfolioGrk];

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  usePageMeta({
    title: "Contact",
    description:
      "Get in touch with Koodh. Tell us about your website, AI or IT project and we'll get back to you. Email info@koodh.com.",
    path: "/contact",
  });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please complete all fields" });
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — we'll be in touch soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us at info@koodh.com.",
      });
    } finally {
      setSending(false);
    }
  };

  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

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
            Got an idea we can help with? Want to join our team? Here's how you
            can reach us.
          </p>

          <div className="mt-14 max-w-3xl">
            <div className="border-t-2 border-black pt-5 md:max-w-sm">
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

        {/* Contact form */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
                Start a conversation
              </h2>
              <p className="mt-4 text-neutral-600 text-lg max-w-md">
                Tell us a little about your project or question and we'll route
                it to the right people.
              </p>
            </div>
            <form onSubmit={submit} className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-black">Name</label>
                <input
                  value={form.name}
                  onChange={upd("name")}
                  className="mt-2 w-full border-b border-black/20 focus:border-black outline-none py-3 bg-transparent text-black transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-black">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={upd("email")}
                  className="mt-2 w-full border-b border-black/20 focus:border-black outline-none py-3 bg-transparent text-black transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-black">Message</label>
                <textarea
                  value={form.message}
                  onChange={upd("message")}
                  rows={4}
                  className="mt-2 w-full border-b border-black/20 focus:border-black outline-none py-3 bg-transparent text-black resize-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-sm font-semibold hover:bg-neutral-800 transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send message"}
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <Toaster />
    </>
  );
}
