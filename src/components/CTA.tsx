export const CTA = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join thousands of others and be part of something amazing!
            </h2>
            <p className="text-lg text-gray-600">
              Discover a community where your journey gets better with every
              step—don't miss out, come aboard today!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="What's your work email?"
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-r-lg transition-colors duration-200">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
