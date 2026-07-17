import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { caseStudies } from "../mock";

export default function SimplePage({ title }) {
  const { slug } = useParams();
  const study = slug ? caseStudies.find((c) => c.id === slug) : null;
  const heading = study ? study.client : title;

  return (
    <>
      <Header />
      <main className="pt-[68px] min-h-screen bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <Link to="/" className="inline-flex items-center gap-2 text-[14px] font-semibold text-neutral-500 hover:text-black transition-colors">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <h1 className="mt-8 text-black font-extrabold uppercase-tight text-5xl md:text-7xl leading-[1.02]">
            {heading}
          </h1>
          {study && (
            <>
              <p className="mt-4 text-lg text-neutral-500 uppercase tracking-wide font-semibold">{study.category}</p>
              <p className="mt-6 text-2xl md:text-4xl font-bold text-black max-w-3xl">{study.title}</p>
              <div className="mt-12 aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 max-w-5xl">
                <img src={study.cover} alt={study.client} className="w-full h-full object-cover" />
              </div>
            </>
          )}
          {!study && (
            <p className="mt-6 text-xl text-neutral-500 max-w-2xl">
              This is a demo clone. The <span className="text-black font-semibold">{title}</span> page content is mocked for illustration.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
