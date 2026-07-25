import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Switch } from "./ui/switch";
import {
  getConsent,
  saveConsent,
  acceptAll,
  declineAll,
  defaultConsent,
} from "../lib/consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState(() => getConsent());
  const [showBanner, setShowBanner] = useState(() => getConsent() === null);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState(() => getConsent() || defaultConsent);

  // Allow footer / policy pages to reopen preferences.
  useEffect(() => {
    const open = () => {
      setPrefs(getConsent() || defaultConsent);
      setShowPrefs(true);
    };
    window.addEventListener("koodh:open-cookie-preferences", open);
    return () => window.removeEventListener("koodh:open-cookie-preferences", open);
  }, []);

  const handleAcceptAll = () => {
    const v = acceptAll();
    setConsent(v);
    setShowBanner(false);
    setShowPrefs(false);
  };

  const handleDeclineAll = () => {
    const v = declineAll();
    setConsent(v);
    setShowBanner(false);
    setShowPrefs(false);
  };

  const handleSavePrefs = () => {
    const v = saveConsent(prefs);
    setConsent(v);
    setShowBanner(false);
    setShowPrefs(false);
  };

  const categories = [
    {
      key: "necessary",
      title: "Strictly necessary",
      desc: "Required for the website to function properly. These cannot be switched off.",
      locked: true,
    },
    {
      key: "analytics",
      title: "Analytics",
      desc: "Help us understand how visitors use our website so we can improve it.",
    },
    {
      key: "marketing",
      title: "Marketing",
      desc: "Used to show you personalised content and relevant advertising.",
    },
  ];

  return (
    <>
      {/* Banner */}
      {showBanner && !showPrefs && (
        <div className="fixed bottom-4 right-4 z-[90] w-[92vw] max-w-[420px] bg-white rounded-2xl shadow-2xl border border-black/10 p-6 animate-fade-up">
          <h4 className="text-lg font-bold text-black">We use cookies</h4>
          <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
            We use cookies and other tracking technologies to improve your
            browsing experience, to show you personalised content and targeted
            ads, to analyse our website traffic, and to understand where our
            visitors are coming from. Read our{" "}
            <Link to="/privacy" className="underline text-black hover:no-underline">
              cookie policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={handleAcceptAll}
              className="px-5 py-2 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-neutral-800 transition-colors"
            >
              I AGREE
            </button>
            <button
              onClick={handleDeclineAll}
              className="px-5 py-2 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-neutral-800 transition-colors"
            >
              I DECLINE
            </button>
            <button
              onClick={() => setShowPrefs(true)}
              className="px-5 py-2 rounded-full border border-black text-black text-[13px] font-semibold hover:bg-black hover:text-white transition-colors"
            >
              CHANGE MY PREFERENCES
            </button>
          </div>
        </div>
      )}

      {/* Preferences modal */}
      {showPrefs && (
        <div
          className="fixed inset-0 z-[95] bg-black/50 flex items-end md:items-center justify-center p-0 md:p-4 animate-fade-up"
          onClick={() => (consent ? setShowPrefs(false) : null)}
        >
          <div
            className="w-full md:max-w-[560px] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-black">Cookie preferences</h3>
                <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed">
                  Manage your consent per category. You can change these at any
                  time. See our{" "}
                  <Link to="/privacy" className="underline text-black">
                    cookie policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/terms" className="underline text-black">
                    terms &amp; conditions
                  </Link>
                  .
                </p>
              </div>
              {consent && (
                <button
                  onClick={() => setShowPrefs(false)}
                  aria-label="Close"
                  className="shrink-0 text-neutral-500 hover:text-black transition-colors"
                >
                  <X size={22} />
                </button>
              )}
            </div>

            <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
              {categories.map((c) => (
                <div key={c.key} className="py-4 flex items-start justify-between gap-6">
                  <div>
                    <h4 className="font-semibold text-black">{c.title}</h4>
                    <p className="mt-1 text-[13px] text-neutral-600">{c.desc}</p>
                  </div>
                  <div className="shrink-0 pt-1">
                    <Switch
                      checked={c.locked ? true : !!prefs[c.key]}
                      disabled={c.locked}
                      onCheckedChange={(v) =>
                        setPrefs((p) => ({ ...p, [c.key]: v }))
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleSavePrefs}
                className="px-5 py-2.5 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-neutral-800 transition-colors"
              >
                SAVE PREFERENCES
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 rounded-full border border-black text-black text-[13px] font-semibold hover:bg-black hover:text-white transition-colors"
              >
                ACCEPT ALL
              </button>
              <button
                onClick={handleDeclineAll}
                className="px-5 py-2.5 rounded-full border border-black text-black text-[13px] font-semibold hover:bg-black hover:text-white transition-colors"
              >
                DECLINE ALL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
