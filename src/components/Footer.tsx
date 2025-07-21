export const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mr-12">
              <img
                src="/trans-logo.png"
                className=" w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="mt-4 text-gray-600 text-sm md:w-[60%]">
              Monitor performance, track top-selling products, conversion rates,
              and analyze customer behaviors across devices—all in one place
            </p>
            <p className="mt-8 text-gray-500 text-sm">Bowjai© 2025</p>
          </div>
          <div className="col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {["Home", "Features", "About"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">More</h3>
            <ul className="space-y-3">
              {["FAQ", "Contact Us", "Request Demo"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
