import { InstagramIcon, TwitterIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
export function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto text-white">
      {/* Top bar */}
      <div className="flex justify-between items-center py-4 text-sm ">
        <div>Call us +234 901 413 2309</div>
        <div className=" hidden md:flex">
          Offers are on going. Jump right in
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Separator
            orientation="vertical"
            className=" h-full w-1 cursor-pointer"
          />
          <InstagramIcon size={20} className="cursor-pointer" />
          <TwitterIcon size={20} className="cursor-pointer" />
          <Separator
            orientation="vertical"
            className=" h-full w-1 cursor-pointer"
          />
        </div>
      </div>
      {/* Navigation */}
      <div className="flex justify-between items-center md:bg-[#23114a] shadow rounded-xl px-0 md:px-6 py-2 ">
        <div className="flex items-center">
          <div className="flex items-center gap-4 mr-12 md:mr-24">
            <img
              src="/light-logo.png"
              className=" w-12 2xl:w-14 h-12 2xl:h-14 rounded-full object-cover"
            />
            <h3 className={" capitalize text-xl hidden md:flex font-bold"}>
              creative business solutions
            </h3>
          </div>
          {/* <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center cursor-pointer">Home</div>
            <div className="cursor-pointer">Service</div>
            <div className="cursor-pointer">About Us</div>
          </nav> */}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/2349014132309?text=Hi%20Bowjai%20Team%2C%20I%27m%20interested%20in%20joining%20the%20Bowjai%20Creative%20Bootcamp%20Program.%20Please%20send%20me%20more%20details."
            target="_blank"
          >
            <Button className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-4 py-1 rounded-md">
              JOIN THE BOOTCAMP
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
