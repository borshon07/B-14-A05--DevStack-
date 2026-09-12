import type { Technology } from "../types/tech";

interface StackSidebarProps {
  selectedTechs: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <div className="col-span-12 flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:col-span-3">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="pb-3 text-xs text-slate-400">
        {selectedTechs.length === 0
          ? "No technologies selected yet."
          : `${selectedTechs.length} technology${
              selectedTechs.length > 1 ? "ies" : ""
            } selected`}
      </p>

      {selectedTechs.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center">
          <p className="text-xs text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            {selectedTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="h-7 w-7" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {tech.name}
                    </p>
                    <p className="text-xs text-slate-400">{tech.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name}`}
                  className="text-slate-400 font-bold transition-colors hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-slate-200 py-2.5 text-xs font-bold text-slate-800 transition-colors hover:bg-red-600 hover:text-white"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}