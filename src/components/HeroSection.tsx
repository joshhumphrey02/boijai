import { Header } from "./Header";

export function HeroSection() {
  return (
    <section
      style={{ backgroundImage: "url('/hero.png')" }}
      className="bg-cover bg-no-repeat bg-bottom h-[80dvh] text-white px-6 pb-20 lg:px-20 relative overflow-hidden"
    >
      <Header />
      {/* Background wave effects */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute bottom-0 left-0"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,400 C150,500 350,300 500,400 C650,500 800,400 800,400 L800,800 L0,800 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,450 C200,350 300,450 400,350 C500,250 600,350 800,300 L800,800 L0,800 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
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
