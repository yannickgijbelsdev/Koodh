import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import WorkCard from "../components/WorkCard";
import { fetchWorkItems } from "../api";
import usePageMeta from "../lib/seo";

export default function Work() {
  usePageMeta({
    title: "Work",
    description:
      "Selected work by Koodh: websites, web apps and AI solutions built for ambitious businesses across the Netherlands and Belgium.",
    path: "/work",
  });
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetchWorkItems()
      .then((data) => alive && setItems(data))
      .catch(() => alive && setItems([]))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
          <h1 className="font-extrabold uppercase-tight text-black text-[13vw] md:text-[8vw] leading-[0.92]">
            Work
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
            Selected case studies. Brand and experience, put into action for
            ambitious organisations around the world.
          </p>
        </section>

        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i}>
                    <div className="aspect-square rounded-2xl bg-neutral-100 animate-pulse" />
                    <div className="mt-4 h-6 w-3/4 rounded bg-neutral-100 animate-pulse" />
                  </div>
                ))
              : items.map((c) => <WorkCard key={c.id} item={c} />)}
          </div>
          {!loading && items.length === 0 && (
            <p className="text-neutral-500 py-20 text-center">
              No projects yet.
            </p>
          )}
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
