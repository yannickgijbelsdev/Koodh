import React from "react";
import { Link } from "react-router-dom";

export default function WorkCard({ item }) {
  return (
    <Link to={item.to} className="work-card group block">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-900">
        <img
          src={item.cover}
          alt={item.client}
          loading="lazy"
          className="cover-base absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={item.hover}
          alt=""
          loading="lazy"
          className="cover-hover absolute inset-0 w-full h-full object-cover"
        />
        {/* bottom label chip */}
        <div className="absolute left-4 bottom-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg overflow-hidden bg-white/90 flex items-center justify-center">
            <img src={item.icon} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text-white">
            <div className="text-[14px] font-bold leading-tight">{item.client}</div>
            <div className="text-[10px] font-semibold tracking-wide uppercase text-white/80 leading-tight">
              {item.category}
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-black font-extrabold uppercase-tight text-xl md:text-2xl leading-[1.1] max-w-[90%]">
        {item.title}
      </h3>
    </Link>
  );
}
