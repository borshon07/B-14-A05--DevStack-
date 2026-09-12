import HeroSection from "./HeroSection";
import TechCatalogSection from "./TechCatalogSection";

export default function MainContent() {
  return (
    <div className="flex flex-col items-center gap-12 pt-12 sm:gap-16 sm:pt-16 lg:gap-28 lg:pt-24">
      <HeroSection />
      <TechCatalogSection />
    </div>
  );
}