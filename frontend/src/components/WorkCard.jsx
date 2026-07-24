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
      </div>
      <h3 className="mt-4 text-black font-extrabold uppercase-tight text-xl md:text-2xl leading-[1.1] max-w-[90%]">
        {item.title}
      </h3>
    </Link>
  );
}
