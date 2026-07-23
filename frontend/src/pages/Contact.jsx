import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { contactImages, officeLocations } from "../mock";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please complete all fields" });
      return;
    }
    toast({
      title: "Message sent",
      description: "Thanks for reaching out — we'll be in touch soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        {/* Hero */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16">
          <h1 className="font-extrabold uppercase-tight text-black text-[11vw] md:text-[7vw] leading-[0.92]">
            We'd love to<br />hear from you
          </h1>
          <p className="mt-8 max-w-xl text-xl text-neutral-600">
            Got an idea we can help with? Want to join our team? Here's how you
            can reach us.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-3xl">
            <div className="border-t-2 border-black pt-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Business Development
              </p>
              <p className="mt-3 text-lg font-bold text-black">Alice Anderson</p>
              <a
                href="mailto:enquiries@koodh.com"
                className="text-black link-underline"
              >
                enquiries@koodh.com
              </a>
            </div>
            <div className="border-t-2 border-black pt-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Press & Media
              </p>
              <a
                href="mailto:media@koodh.com"
                className="mt-3 block text-black link-underline"
              >
                media@koodh.com
              </a>
            </div>
          </div>
        </section>

        {/* Image strip */}
        <section className="overflow-hidden pb-4">
          <div className="grid md:grid-cols-3 gap-4 px-6 md:px-10">
            {contactImages.map((src, i) => (
              <div key={i} className="aspect-video rounded-2xl overflow-hidden bg-neutral-100">
                <img src={src} alt="Koodh office" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-14">
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
                className="inline-flex items-center gap-2 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-sm font-semibold hover:bg-neutral-800 transition-colors group"
              >
                Send message
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </section>

        {/* Office locations */}
        <section className="bg-neutral-50 border-t border-black/5 py-24 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
              Office locations
            </h2>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {officeLocations.map((o) => (
                <div key={o.city}>
                  <div className="aspect-[5/4] rounded-2xl overflow-hidden bg-neutral-100">
                    <img src={o.image} alt={o.city} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <p className="mt-4 text-neutral-400 font-medium">{o.hello}</p>
                  <h3 className="font-bold text-xl text-black">{o.city}</h3>
                  <p className="mt-2 text-neutral-600 text-sm flex items-start gap-2">
                    <MapPin size={15} className="mt-0.5 shrink-0" />
                    <span>{o.address.join(", ")}</span>
                  </p>
                  <a
                    href={`tel:${o.phone.replace(/\s/g, "")}`}
                    className="mt-2 text-neutral-600 text-sm flex items-center gap-2 hover:text-black transition-colors"
                  >
                    <Phone size={15} /> {o.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <Toaster />
    </>
  );
}
