export function ContactCTA() {
  return (
    <section className="w-full bg-[#210051] max-w-6xl mx-auto mb-8 py-16 px-6 md:rounded-xl">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Here's Everything You Get for Just ₦15,500
        </h2>
        <ul className="text-left max-w-2xl mx-auto mb-8 text-white list-disc list-inside space-y-3 text-base">
          <li>
            <strong>Complete 5-Module System</strong> – Step-by-step training
            from basics to advanced.
          </li>
          <li>
            <strong>Ready-to-Use Templates</strong> – All the forms, checklists,
            and tools to get started immediately.
          </li>
          <li>
            <strong>3-Month Telegram Support</strong> – Direct access to the
            instructor and fellow business owners for daily guidance.
          </li>
          <li>
            <strong>Bonus Downloads</strong> – Extra resources and materials to
            accelerate your success.
          </li>
        </ul>

        <p className="text-xl font-semibold mb-6">
          JOIN THE BOOTCAMP FOR ₦15,500
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://wa.me/2349014132309?text=Hi%20Bowjai%20Team%2C%20I%27m%20interested%20in%20joining%20the%20Bowjai%20Creative%20Bootcamp%20Program.%20Please%20send%20me%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            WhatsApp
          </a>
          <a
            href="mailto:info@bowjai.com"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
