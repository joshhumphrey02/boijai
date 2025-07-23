import { Header } from "./Header";

export function HeroSection() {
  return (
    <section
      style={{ backgroundImage: "url('/hero.png')" }}
      className="bg-cover bg-no-repeat bg-center md:bg-bottom h-[80dvh] text-white px-4 pb-20 lg:px-20 relative overflow-hidden"
    >
      <Header />
      <div className="text-center max-w-4xl mt-16 mx-auto relative z-10">
        <h4 className="text-xl md:text-2xl mb-3 ">
          ATTENTION  PRODUCT-BASED  BUSINESS OWNERS 
        </h4>
        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">
          Stop Losing Money to Employee Theft & Poor Inventory Management
        </h1>

        <div className="flex flex-col mb-4 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8 2xl:mt-12">
          <h3 className="text-xl md:text-2xl font-bold">
            JOIN THE BOOTCAMP FOR ₦15,500
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
          <a
            href="https://wa.me/2349014132309?text=Hi%20Bowjai%20Team%2C%20I%27m%20interested%20in%20joining%20the%20Bowjai%20Creative%20Bootcamp%20Program.%20Please%20send%20me%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium"
          >
            WhatsApp
          </a>
          <a
            href="mailto:info@bowjai.com"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
