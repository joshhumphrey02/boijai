import { Header } from "./Header";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section
      style={{ backgroundImage: "url('/hero.png')" }}
      className="bg-cover bg-no-repeat bg-center md:bg-bottom md:h-[80dvh] text-white px-4 pb-20 lg:px-20 relative overflow-hidden"
    >
      <Header />
      <div className="text-center max-w-4xl mt-16 mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">
          Learn How to Track Your Inventory & Sales in 2 Weeks
        </h1>
        <h4 className="text-lg md:w-[70%] mx-auto md:text-xl mb-2 ">
          No tech skills needed. Perfect for shop owners, mini importers, food
          vendors, and anyone who wants to stop guessing in business.
        </h4>
        <h4 className="text-lg md:text-xl my-2 border-b-2 w-fit mx-auto py-1 ">
          From 14th - 27th September 2025
        </h4>

        <div className="flex flex-col mb-6 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8 2xl:mt-12">
          <a href="#contact">
            <Button className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white text-lg h-12 px-4 py-3 rounded-md">
              JOIN THE BOOTCAMP NOW
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
