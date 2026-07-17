import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-up"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close video"
      >
        <X size={34} />
      </button>
      <div
        className="w-full max-w-[1100px] aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Case study video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
