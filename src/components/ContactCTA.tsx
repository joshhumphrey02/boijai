export function ContactCTA() {
  return (
    <section
      id="contact"
      className="w-full bg-[#210051] max-w-6xl mx-auto mb-8 py-16 px-6 md:rounded-xl"
    >
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          🎯 Everything You Get for Just ₦15,500!
        </h2>
        <ul className="text-left max-w-2xl mx-auto mb-8 list-disc list-inside space-y-3 text-base">
          <li>
            <strong>✅ 5-Module Masterclass</strong> – Learn step-by-step from
            beginner to pro.
          </li>
          <li>
            <strong>📁 Ready-to-Use Templates</strong> – Forms, checklists, and
            tools you can apply instantly.
          </li>
          <li>
            <strong>💬 3-Month Telegram Support</strong> – Ask questions, get
            answers, and grow with others.
          </li>
          <li>
            <strong>🎁 Exclusive Bonus Downloads</strong> – Extra materials to
            fast-track your success.
          </li>
        </ul>

        <p className="text-xl font-semibold mb-4">
          💰 Real Value: <span className=" stroke-1">₦45,000</span> –{" "}
          <span className="text-green-300">You Pay Only ₦15,500</span>
        </p>

        <div className="bg-white text-[#210051] p-4 rounded-lg mb-4 inline-block text-sm sm:text-base">
          <p className="font-semibold">Payment Details:</p>
          <p>
            💳 <strong>Acct No:</strong> 3001833397
          </p>
          <p>
            <strong>Bank:</strong> GTBank
          </p>
          <p>
            <strong>Name:</strong> Bowjai Creative Business Solutions Ltd
          </p>
        </div>

        <p className="mb-6 text-sm text-gray-200 max-w-xl mx-auto">
          After payment, kindly send your proof of payment to us via WhatsApp or
          email below to secure your access.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://wa.me/2349014132309?text=Hi%20Bowjai%20Team%2C%20I%27m%20interested%20in%20joining%20the%20Bowjai%20Creative%20Bootcamp%20Program.%20Please%20send%20me%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
          >
            📲 Chat on WhatsApp
          </a>
          <a
            href="mailto:info@bowjai.com"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#210051] transition"
          >
            ✉️ Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
}
