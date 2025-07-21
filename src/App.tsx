import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { TrustSection } from "./components/TrustSection";
export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <TrustSection />
      </main>
    </div>
  );
}
