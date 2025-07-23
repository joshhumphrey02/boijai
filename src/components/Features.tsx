export default function CourseStructure() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What You'll Master in 5 Powerful Modules
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Step-by-step training designed to take you from inventory novice to
          confident business optimizer—with real skills and tools you can apply
          instantly.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {[
            {
              number: "Module 1",
              title: "Understanding Inventory the Right Way",
              description:
                "Stop guessing and start knowing exactly what inventory means for your business success. The perfect foundation for every entrepreneur.",
            },
            {
              number: "Module 2",
              title: "Manual Inventory Skills Every Business Owner Needs",
              description:
                "Master practical techniques you can apply with or without tech. Build the discipline and habits that keep stock under control.",
            },
            {
              number: "Module 3",
              title: "Digital Tools to Manage Your Stock with Ease",
              description:
                "Explore low-cost apps and cloud systems to automate your inventory, get alerts, and track everything—wherever you are.",
            },
            {
              number: "Module 4",
              title: "Real-Life Application, Practice & Support",
              description:
                "Apply your new system in your business with guided practice and personalized feedback to ensure success.",
            },
            {
              number: "Module 5",
              title: "Using AI to Simplify and Speed Up Inventory Tasks",
              description:
                "Learn how to use artificial intelligence to track trends, prevent out-of-stock issues, and optimize performance effortlessly.",
            },
          ].map((mod, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-sm font-bold text-indigo-600 mb-1">
                {mod.number}
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {mod.title}
              </h4>
              <p className="text-gray-700 text-sm">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
