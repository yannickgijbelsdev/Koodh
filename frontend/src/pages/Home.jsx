import React, { useState } from "react";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import StatementSection from "../components/StatementSection";
import WorkGrid from "../components/WorkGrid";
import ServicesSection from "../components/ServicesSection";
import JournalSection from "../components/JournalSection";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import VideoModal from "../components/VideoModal";

export default function Home() {
  const [video, setVideo] = useState(null);
  return (
    <>
      <Header />
      <main>
        <HeroCarousel onPlayVideo={setVideo} />
        <StatementSection />
        <WorkGrid />
        <ServicesSection />
        <JournalSection />
      </main>
      <Footer />
      <CookieBanner />
      <VideoModal videoId={video} onClose={() => setVideo(null)} />
    </>
  );
}
