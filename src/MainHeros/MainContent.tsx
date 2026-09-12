import HeroSection from "./HeroSection";
import TechCatalogSection from "./TechCatalogSection";

export default function MainContent() {
  return (
    <div className="flex flex-col items-center gap-28 pt-24">
      <HeroSection />
      <TechCatalogSection />
    </div>
  );
}