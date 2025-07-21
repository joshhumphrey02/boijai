import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { WHY } from "./components/WHY";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WhoIsThisFor from "./components/WhoIsThisFor";
import { ContactCTA } from "./components/ContactCTA";
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
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}
