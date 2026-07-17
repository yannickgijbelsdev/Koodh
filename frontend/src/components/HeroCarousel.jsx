import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Pause, Play, ArrowUpRight } from "lucide-react";
import { heroSlides } from "../mock";

export default function HeroCarousel({ onPlayVideo }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer.current);
  }, [paused]);

  const active = heroSlides[index];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* Background layers */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <img
            src={s.bg}
            alt={s.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Pause / play */}
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play carousel" : "Pause carousel"}
            className="hidden md:flex w-11 h-11 rounded-full bg-white/15 backdrop-blur-md items-center justify-center text-white hover:bg-white/25 transition-colors"
          >
            {paused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
          </button>

          {/* MADE WITH + rotating list */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="text-white font-extrabold uppercase-tight text-3xl md:text-6xl leading-none">
                MADE WITH
              </span>
              <img
                src={active.icon}
                alt={active.name}
                className="w-10 h-10 md:w-16 md:h-16 rounded-2xl object-cover transition-all duration-500"
                key={active.id}
              />
              <div className="relative h-[44px] md:h-[70px] overflow-hidden min-w-[180px] md:min-w-[340px]">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIndex(i)}
                    className="absolute left-0 w-full text-left text-white font-extrabold uppercase-tight text-3xl md:text-6xl leading-none transition-all duration-500"
                    style={{
                      transform: `translateY(${(i - index) * 100}%)`,
                      opacity: i === index ? 1 : 0.25,
                    }}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* View project */}
          <div className="hidden md:block">
            <button
              onClick={() => onPlayVideo(active.youtube)}
              className="group flex items-center gap-2 bg-white text-black rounded-full pl-6 pr-5 py-3 text-[14px] font-semibold hover:bg-neutral-100 transition-colors"
            >
              View project
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${s.name}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
