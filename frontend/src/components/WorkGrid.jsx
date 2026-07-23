import React, { useEffect, useState } from "react";
import WorkCard from "./WorkCard";
import { fetchWorkItems } from "../api";

export default function WorkGrid() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetchWorkItems()
      .then((data) => alive && setItems(data))
      .catch(() => alive && setItems([]))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="bg-white pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i}>
                  <div className="aspect-square rounded-2xl bg-neutral-100 animate-pulse" />
                  <div className="mt-4 h-6 w-3/4 rounded bg-neutral-100 animate-pulse" />
                </div>
              ))
            : items.map((c) => <WorkCard key={c.id} item={c} />)}
        </div>
      </div>
    </section>
  );
}
