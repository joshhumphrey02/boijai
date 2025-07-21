import { Header } from "./Header";

export function HeroSection() {
  return (
    <section
      style={{ backgroundImage: "url('/hero.png')" }}
      className="bg-cover bg-no-repeat bg-bottom h-[80dvh] text-white px-6 pb-20 lg:px-20 relative overflow-hidden"
    >
      <Header />
      <div className="text-center max-w-4xl mt-32 mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Experience <span className="italic font-light">Stress-Free</span>{" "}
          Business <br /> Management with Corai
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium w-48">
            Get Started
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md font-medium w-48 border border-gray-700">
            How it's work
          </button>
        </div>
      </div>
    </section>
  );
}
