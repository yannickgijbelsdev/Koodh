import React from "react";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import StatementSection from "../components/StatementSection";
import WorkGrid from "../components/WorkGrid";
import ServicesSection from "../components/ServicesSection";
import JournalSection from "../components/JournalSection";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <StatementSection />
        <WorkGrid />
        <ServicesSection />
        <JournalSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
