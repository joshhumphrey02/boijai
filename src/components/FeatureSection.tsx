import { CheckIcon } from "lucide-react";
export function FeatureSection() {
  return (
    <section className="px-6 lg:px-20 -mt-44 relative z-10">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <div className=" pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Effortlessly Manage your Business to Thrive.
            </h2>
            <p className="text-gray-600 mb-6">
              Focuses on the idea of simplicity, appealing to users who might
              feel overwhelmed with managing their business, emphasizing smooth
              and hassle-free operations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckIcon
                  className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Learn to build streamlined inventory systems that reduce
                  losses and increase profitability in product-based businesses.
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon
                  className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Easily track stock, prevent waste, and manage operations
                  remotely
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon
                  className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Finish with a ready-to-run system and the skills to support
                  other businesses or earn extra income through consulting
                </span>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className="rounded-lg overflow-hidden bg-gray-900 relative h-32 md:h-full max-h-96">
              <img
                src="/play.png"
                alt="Business professional using futuristic interface"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
