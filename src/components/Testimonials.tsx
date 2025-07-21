export default function Testimonials() {
  return (
    <div className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We take pride in delivering exceptional solutions that deliver great
          results. But don’t just take our word for it.
        </p>
        <div className="grid gap-8 md:grid-cols-3 ">
          {[
            {
              name: "Jennifer",
              title: "Luxury Hair Business",
              location: "Kubwa, Abuja",
              testimonial:
                "Saw a dramatic reduction in employee theft after setting up her inventory management system. Now she knows exactly what comes in and goes out.",
            },
            {
              name: "Grace",
              title: "Supermarket Owner",
              location: "Wuse 2, Abuja",
              testimonial:
                "Can now track goods before expiration. No more throwing away expired products—saving thousands monthly.",
            },
            {
              name: "Ebele",
              title: "Civil Servant with Boutique",
              location: "Jabi, Abuja",
              testimonial:
                "Can now access her business remotely. Knows what's sold, when, and who sold it—without depending on sales reps for reports while at the office.",
            },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <p className="text-gray-700 text-base mb-4">
                “{client.testimonial}”
              </p>
              <div>
                <p className="font-semibold text-gray-900">{client.name}</p>
                <p className="text-sm text-gray-500">{client.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
