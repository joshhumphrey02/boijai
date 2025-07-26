import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { WHY } from "./components/WHY";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WhoIsThisFor from "./components/WhoIsThisFor";
import { ContactCTA } from "./components/ContactCTA";
import CourseStructure from "./components/Features";
import BootcampStructure from "./components/BootcampStructure";
export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <WhoIsThisFor />
        <ContactCTA />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=924477043197205&ev=PageView&noscript=1"
          />
        </noscript>
        <WHY />
        <CourseStructure />
        <ContactCTA />
        <BootcampStructure />
        <About />
        <ContactCTA />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
