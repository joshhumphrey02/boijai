export function ContactCTA() {
  return (
    <section className="w-full bg-purple-600 max-w-6xl mx-auto mb-8 py-16 px-6 rounded-xl">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Let's Get You Started</h2>
        <p className="text-lg mb-8">
          Reach out to learn how we can help your business thrive through
          smarter inventory systems.
        </p>
        <p className="text-lg mb-6">Join Bootcamp Via</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://wa.me/2349014132309?text=Hi%20Bowjai%20Team%2C%20I%27m%20interested%20in%20joining%20the%20Bowjai%20Creative%20Bootcamp%20Program.%20Please%20send%20me%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
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
