import React from "react";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import CookieBanner from "../components/CookieBanner";
import usePageMeta from "../lib/seo";

export default function Home() {
  usePageMeta({
    title: null,
    description:
      "Koodh builds websites and AI solutions for small and large businesses across the Netherlands and Belgium. The right team for your IT solutions.",
    path: "/",
  });
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
      </main>
      <CookieBanner />
    </>
  );
}
