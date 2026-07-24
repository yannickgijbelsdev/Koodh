import React from "react";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import CookieBanner from "../components/CookieBanner";

export default function Home() {
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
