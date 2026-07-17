import React, { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem("saffron_cookies") !== "done";
    } catch {
      return true;
    }
  });

  const dismiss = () => {
    try {
      localStorage.setItem("saffron_cookies", "done");
    } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[90] w-[92vw] max-w-[420px] bg-white rounded-2xl shadow-2xl border border-black/10 p-6 animate-fade-up">
      <h4 className="text-lg font-bold text-black">We use cookies</h4>
      <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
        We use cookies and other tracking technologies to improve your browsing
        experience on our website, to show you personalized content and targeted
        ads, to analyze our website traffic, and to understand where our visitors
        are coming from.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={dismiss}
          className="px-5 py-2 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-neutral-800 transition-colors"
        >
          I AGREE
        </button>
        <button
          onClick={dismiss}
          className="px-5 py-2 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-neutral-800 transition-colors"
        >
          I DECLINE
        </button>
        <button
          onClick={dismiss}
          className="px-5 py-2 rounded-full border border-black text-black text-[13px] font-semibold hover:bg-black hover:text-white transition-colors"
        >
          CHANGE MY PREFERENCES
        </button>
      </div>
    </div>
  );
}
