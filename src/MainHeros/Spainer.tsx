export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#ec4899]" />
      <p className="italic text-lg text-slate-400">Loading Technologies...</p>
    </div>
  );
}