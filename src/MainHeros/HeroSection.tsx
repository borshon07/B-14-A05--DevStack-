
import bannerImage from "../assets/banner-stack.png";
export default function HeroSection() {
  return (
    <div className="grid w-full max-w-[1216px] grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="flex flex-col justify-center lg:col-span-7 lg:pr-8">
        <h1 className="text-4xl font-extrabold leading-tight tracking-[-1.5px] text-slate-900 sm:text-5xl lg:text-[60px] lg:leading-[60px]">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="italic mt-6 max-w-[576px] text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-[29px]">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 hover:text-black sm:w-[168px]">
            Explore Technologies
          </button>
          <button className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 hover:bg-black hover:text-white sm:w-[170px]">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex h-[280px] items-center justify-center sm:h-[350px] lg:col-span-5 lg:h-[420px]">
        <div className="relative h-full w-full max-w-[350px]">
          <div className="absolute -left-6 -top-6 h-56 w-56 rounded-full bg-white/25 blur-3xl" />
          <div className="absolute -bottom-6 -right-6 h-56 w-56 rounded-full bg-white/25 blur-3xl" />
          <div className="relative flex h-full w-full items-center justify-center rounded-3xl shadow-2xl">
            <img
              src={bannerImage}
              alt="Tech Stack Banner"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}