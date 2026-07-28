import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pause, Play, ArrowUpRight } from "lucide-react";
import { fetchWorkItems } from "../api";

export default function HeroCarousel() {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  const prevIndex = useRef(0);
  const titleRefs = useRef([]);
  const [heights, setHeights] = useState([]);

  useEffect(() => {
    prevIndex.current = index;
  }, [index]);

  // Measure the real rendered height of every title so we can stack them
  // with consistent spacing regardless of how many lines each title wraps to.
  useLayoutEffect(() => {
    const measure = () => {
      setHeights(titleRefs.current.map((el) => (el ? el.offsetHeight : 0)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [slides]);

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
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-5 md:gap-6">
          {/* Pause / play */}
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play carousel" : "Pause carousel"}
            className="hidden md:flex w-11 h-11 rounded-full bg-white/15 backdrop-blur-md items-center justify-center text-white hover:bg-white/25 transition-colors shrink-0"
          >
            {paused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
          </button>

          {/* Rotating project title */}
          <div className="w-full md:flex-1 flex items-center md:justify-center">
            <div className="flex items-center gap-4 md:gap-8 w-full max-w-[1200px]">
              {active && (
                <img
                  src={active.cover}
                  alt={active.title}
                  className="w-12 h-12 md:w-20 md:h-20 rounded-2xl object-cover transition-all duration-500 shrink-0"
                  key={`icon-${active.id}`}
                />
              )}
              {(() => {
                const n = slides.length;
                const GAP = 10;
                const wrap = (off) => {
                  if (n <= 0) return off;
                  if (off > n / 2) off -= n;
                  if (off < -n / 2) off += n;
                  return off;
                };
                const h = (i) => heights[i] || 60;
                // cumulative vertical position of a title given its wrapped offset
                const yFor = (offset) => {
                  if (offset === 0) return 0;
                  let y = 0;
                  if (offset > 0) {
                    for (let j = 0; j < offset; j++) {
                      y += h((index + j) % n) + GAP;
                    }
                    return y;
                  }
                  for (let j = 1; j <= -offset; j++) {
                    y -= h(((index - j) % n + n) % n) + GAP;
                  }
                  return y;
                };
                const activeH = h(index);
                return (
                  <div
                    className="relative overflow-hidden flex-1 min-w-0"
                    style={{
                      height: activeH + 34,
                      WebkitMaskImage:
                        "linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)",
                    }}
                  >
                    {slides.map((s, i) => {
                      const offset = wrap(i - index);
                      const prevOffset = wrap(i - prevIndex.current);
                      // The title that wraps around jumps more than one step:
                      // snap it instantly so it never sweeps across the center.
                      const wrapped = Math.abs(offset - prevOffset) > 1;
                      return (
                        <button
                          key={s.id}
                          ref={(el) => (titleRefs.current[i] = el)}
                          onClick={() => setIndex(i)}
                          className="absolute left-0 top-0 w-full text-left text-white font-extrabold uppercase-tight text-2xl md:text-5xl leading-[1.08] line-clamp-3"
                          style={{
                            transform: `translateY(${yFor(offset)}px)`,
                            opacity: i === index ? 1 : 0.25,
                            transition: wrapped
                              ? "opacity 0.5s ease"
                              : "transform 0.5s ease, opacity 0.5s ease",
                          }}
                        >
                          {s.title}
                        </button>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          </div>

          {/* View project */}
          <div className="shrink-0">
            <button
              onClick={() => active && navigate(active.to)}
              data-testid="hero-view-project"
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
