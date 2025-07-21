import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { WHY } from "./components/WHY";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import { CTA } from "./components/CTA";
import WhoIsThisFor from "./components/WhoIsThisFor";
export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <WhoIsThisFor />
        <Features />
        <WHY />
        <About />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
