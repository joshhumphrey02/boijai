import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { WHY } from "./components/WHY";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <Features />
        <WHY />
        <About />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
