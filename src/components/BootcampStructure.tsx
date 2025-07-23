export default function BootcampStructure() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Bootcamp Structure
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          This program is built for flexibility and results—combining video
          content, live coaching, and daily support to help you master inventory
          management.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Pre-Recorded Video Classes",
              description:
                "Access on-demand tutorials covering each module with real-world examples and system walkthroughs.",
              detail: "⏱ 1 hour per day",
            },
            {
              title: "Weekly Live Sessions",
              description:
                "Join interactive sessions to ask questions, get feedback, and receive expert guidance every Saturday.",
              detail: "🗓 2 hours every Saturday",
            },
            {
              title: "Daily Support on Telegram",
              description:
                "Get your questions answered, share progress, and connect with other learners in our private support community.",
              detail: "💬 Active daily support",
            },
            {
              title: "Flexible Learning Schedule",
              description:
                "Study at your own pace—combine pre-recorded and live classes to fit your routine and learning style.",
              detail: "📅 Fully self-paced",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-3 text-sm">{item.description}</p>
              <p className="text-gray-500 text-xs">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
