import type { Technology } from "../types/tech";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAddToStack: (id: string) => void;
}

export default function TechCard({
  tech,
  isAdded,
  onAddToStack,
}: TechCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="h-7 w-7" />
          </div>
          {tech.badge && (
            <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[13.5px] font-semibold text-sky-600">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="mt-1.5 text-lg font-bold text-slate-900">{tech.name}</h3>
        <p className="mt-1 text-xs leading-[19.5px] text-slate-500">
          {tech.description}
        </p>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between border-t border-slate-50 pt-2.5 text-[11px]">
          <span className="rounded bg-slate-100/80 px-2 py-0.5 font-medium text-slate-600">
            {tech.category}
          </span>
          <span className="font-medium text-slate-500">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            ★ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAddToStack(tech.id)}
          disabled={isAdded}
          className={`mt-4 w-full rounded-lg py-2.5 text-xs font-medium transition-colors ${
            isAdded
              ? "cursor-not-allowed bg-emerald-50 text-bold"
              : "bg-[#0a0f1d] text-white hover:bg-white hover:text-[#0a0f1d] hover:ring-2 hover:ring-[#0a0f1d]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
