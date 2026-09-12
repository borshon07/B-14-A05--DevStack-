import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";
import Spinner from "./Spainer";
import technologiesData from "../data/technologies.json";
import type { Technology } from "../types/tech";

export default function TechCatalogSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setTechnologies(technologiesData as Technology[]);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToStack = (id: string) => {
    const alreadyAdded = selectedStack.some((t) => t.id === id);
    const tech = technologies.find((t) => t.id === id);

    if (!tech) return;

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const tech = selectedStack.find((t) => t.id === id);
    setSelectedStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) {
      toast.info(`${tech.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="flex w-full max-w-[1280px] flex-col gap-10 px-4 pb-32 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-extrabold tracking-[-0.9px] text-slate-900 sm:text-4xl">
          Explore the <span className="text-gradient-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-base text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-12 gap-6 lg:items-start lg:gap-8">
          <div className="col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={selectedStack.some((t) => t.id === tech.id)}
                onAddToStack={handleAddToStack}
              />
            ))}
          </div>

          <StackSidebar
            selectedTechs={selectedStack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      )}
    </div>
  );
}