import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pause, Play, ArrowUpRight } from "lucide-react";
import { fetchWorkItems } from "../api";

export default function HeroCarousel() {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    let alive = true;
    fetchWorkItems()
      .then((data) => alive && setSlides(data))
      .catch(() => alive && setSlides([]));
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (paused || slides.length === 0) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer.current);
  }, [paused, slides.length]);

  const active = slides[index];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* Background layers */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <img src={s.cover} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
          {/* Pause / play */}
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play carousel" : "Pause carousel"}
            className="hidden md:flex w-11 h-11 rounded-full bg-white/15 backdrop-blur-md items-center justify-center text-white hover:bg-white/25 transition-colors shrink-0"
          >
            {paused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
          </button>

          {/* MADE WITH + rotating title */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-4 md:gap-6 max-w-[1100px]">
              <span className="text-white font-extrabold uppercase-tight text-3xl md:text-6xl leading-none shrink-0">
                MADE WITH
              </span>
              {active && (
                <img
                  src={active.cover}
                  alt={active.title}
                  className="w-10 h-10 md:w-16 md:h-16 rounded-2xl object-cover transition-all duration-500 shrink-0"
                  key={`icon-${active.id}`}
                />
              )}
              <div className="relative h-[52px] md:h-[80px] overflow-hidden flex-1 min-w-[160px]">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIndex(i)}
                    className="absolute left-0 top-0 w-full text-left text-white font-extrabold uppercase-tight text-2xl md:text-4xl leading-[1.05] transition-all duration-500 line-clamp-2"
                    style={{
                      transform: `translateY(${(i - index) * 100}%)`,
                      opacity: i === index ? 1 : 0.25,
                    }}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* View project */}
          <div className="hidden md:block shrink-0">
            <button
              onClick={() => active && navigate(active.to)}
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
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${s.title}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
