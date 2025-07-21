import { InstagramIcon, TwitterIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
export function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto text-white">
      {/* Top bar */}
      <div className="flex justify-between items-center py-4 text-sm ">
        <div>Call us +234 816 260 9973</div>
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
      <div className="flex justify-between items-center bg-[#140335] shadow rounded-xl px-0 md:px-6 py-4 ">
        <div className="flex items-center">
          <div className="flex items-center mr-12 md:mr-24">
            <img
              src="/trans-logo.png"
              className=" w-16 h-16 rounded-full object-cover"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center cursor-pointer">Home</div>
            <div className="cursor-pointer">Service</div>
            <div className="cursor-pointer">About Us</div>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-4 py-1 rounded-md">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
