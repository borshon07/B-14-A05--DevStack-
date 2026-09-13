import bannerImage from "../assets/banner-stack.png";

export default function HeroSection() {
  return (
    <div className="grid w-full max-w-[1216px] grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="flex flex-col items-center justify-center text-center lg:col-span-7 lg:items-start lg:pr-8 lg:text-left">
        <h1 className="text-4xl font-extrabold leading-tight tracking-[-1.5px] text-slate-900 sm:text-5xl lg:text-[60px] lg:leading-[60px]">
          Build Your Ideal
          <br />
          <span className="text-gradient-brand transition hover:opacity-100">
            Development Stack
          </span>
        </h1>

        <p className="italic mt-6 max-w-[576px] text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-[29px]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:items-center">
          <button className="bg-gradient-brand w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition sm:w-[168px]">
            Explore Technologies
          </button>

          <button className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-md text-gray-700 transition hover:bg-black hover:text-white sm:w-[170px]">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex w-full items-center justify-center px-6 sm:px-10 lg:col-span-5 lg:px-0">
        <img
          src={bannerImage}
          alt="Tech Stack Banner"
          className="aspect-[489/449] w-full max-w-[560px] object-contain lg:max-w-[560px]"
        />
      </div>
    </div>
  );
}
