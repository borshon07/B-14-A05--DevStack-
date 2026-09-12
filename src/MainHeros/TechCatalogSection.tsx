import { useState } from "react";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";
import { technologies } from "../Data/technologies";
import type { Technology } from "../types/tech";

export default function TechCatalogSection() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const handleAddToStack = (id: string) => {
    setSelectedStack((prev) => {
      if (prev.some((t) => t.id === id)) return prev;
      const tech = technologies.find((t) => t.id === id);
      return tech ? [...prev, tech] : prev;
    });
  };

  const handleRemove = (id: string) => {
    setSelectedStack((prev) => prev.filter((t) => t.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="flex w-full max-w-[1280px] flex-col gap-10 px-4 pb-32 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-extrabold tracking-[-0.9px] text-slate-900 sm:text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-base text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard key={tech.id} tech={tech} onAddToStack={handleAddToStack} />
          ))}
        </div>

        <StackSidebar
          selectedTechs={selectedStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
}