export default function WhoIsThisFor() {
  return (
    <div className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Is This Program Right for You?
        </h2>
        <p className="text-lg hidden md:flex text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you're growing a business, juggling a side hustle, or looking
          to build a valuable skill—this program offers systems and insights to
          help you thrive.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Business Owners",
              description:
                "You're tired of losing money due to poor inventory systems. If you sell physical products—fashion, electronics, groceries—this is built for you.",
              bullets: [
                "Avoid losses from expired items",
                "Protect your stock from employee theft",
                "Keep your best-sellers in stock",
                "Lower storage costs and reduce waste",
              ],
            },
            {
              title: "Side Hustlers",
              description:
                "You’re balancing your 9-5 with a growing business. You need smart systems that work while you're away.",
              bullets: [
                "Track business remotely",
                "No more staff dependency for reports",
                "Automate inventory and alerts",
                "Manage efficiently with limited time",
              ],
            },
            {
              title: "Skill Seekers",
              description:
                "You're ready to learn a profitable, high-demand skill. Inventory management opens doors to stable income.",
              bullets: [
                "Gain expertise in a valuable field",
                "Support multiple businesses",
                "Create recurring income streams",
                "Become the trusted inventory consultant",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 flex flex-col rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-4">{section.description}</p>
              <ul className=" space-y-2 w-full text-start flex-1 flex flex-col justify-end text-gray-600 text-sm">
                {section.bullets.map((point, i) => (
                  <li key={i}>👉 {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
