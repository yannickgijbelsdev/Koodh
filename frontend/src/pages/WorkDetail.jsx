import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { fetchWorkArticle } from "../api";

// Remove the duplicate image-credit paragraph(s) from the article body.
// The small credit is already shown under the photo via image_caption_html.
const stripImageCredit = (html) =>
  (html || "").replace(
    /<p[^>]*class=["'][^"']*clara-image-credit[^"']*["'][^>]*>[\s\S]*?<\/p>/gi,
    ""
  );

export default function WorkDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchWorkArticle(slug)
      .then((data) => alive && setArticle(data && !data.error ? data : null))
      .catch(() => alive && setArticle(null))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [slug]);

  return (
    <>
      <Header />
      <main className="pt-[68px] min-h-screen bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>

          {loading && (
            <div className="mt-10 animate-pulse">
              <div className="h-4 w-32 bg-neutral-100 rounded" />
              <div className="mt-6 h-12 w-full bg-neutral-100 rounded" />
              <div className="mt-3 h-12 w-2/3 bg-neutral-100 rounded" />
              <div className="mt-10 aspect-video w-full bg-neutral-100 rounded-2xl" />
            </div>
          )}

          {!loading && !article && (
            <p className="mt-12 text-lg text-neutral-500">
              This project could not be loaded.
            </p>
          )}

          {!loading && article && (
            <article>
              <h1 className="mt-10 font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05]">
                {article.title}
              </h1>

              {article.image_url && (
                <div className="mt-10 aspect-video rounded-2xl overflow-hidden bg-neutral-100">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {article.image_caption_html && (
                <div
                  className="mt-3 text-xs text-neutral-400"
                  dangerouslySetInnerHTML={{ __html: article.image_caption_html }}
                />
              )}

              {article.body && (
                <div
                  className="article-body mt-10 text-lg text-neutral-700 leading-relaxed space-y-5"
                  dangerouslySetInnerHTML={{ __html: stripImageCredit(article.body) }}
                />
              )}
            </article>
          )}
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
