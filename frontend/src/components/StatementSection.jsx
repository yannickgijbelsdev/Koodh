import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { teaserImages } from "../mock";

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

export default function StatementSection() {
  const [ref, shown] = useReveal();

  const words = [
    { t: "WE ARE YOUR " },
    { t: "BRAND", underline: true },
    { t: " & " },
    { t: "EXPERIENCE", underline: true },
    { t: " PARTNER. PUTTING YOUR IDENTITY INTO " },
    { t: "ACTION", underline: true },
    { t: ". EVERY TOUCH POINT, EVERY INTERACTION, EVERY MOMENT." },
  ];

  return (
    <section ref={ref} className="bg-white py-24 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={shown ? "animate-fade-up" : "opacity-0"}>
            <h2 className="text-black font-extrabold uppercase-tight text-3xl md:text-[46px] leading-[1.08]">
              {words.map((w, i) => (
                <span
                  key={i}
                  className={w.underline ? "underline decoration-1 underline-offset-[6px]" : ""}
                >
                  {w.t}
                </span>
              ))}
            </h2>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-10 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-[14px] font-semibold hover:bg-neutral-800 transition-colors group"
            >
              Learn more about us
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {teaserImages.map((src, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-2xl bg-neutral-100"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={src}
                  alt="Saffron work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
