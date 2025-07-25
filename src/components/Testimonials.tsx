export default function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer",
      title: "Luxury Hair Business",
      location: "Kubwa, Abuja",
      testimonial:
        "Before using the system, I constantly dealt with stock losses and theft. Now, I have complete visibility into what enters and leaves my store. My business finally feels secure and under control.",
    },
    {
      name: "Grace",
      title: "Supermarket Owner",
      location: "Wuse 2, Abuja",
      testimonial:
        "I used to lose so much to expired goods. Now, I get alerts before items expire. I haven’t thrown away inventory in months—and I’m saving thousands every single month.",
    },
    {
      name: "Ebele",
      title: "Civil Servant & Boutique Owner",
      location: "Jabi, Abuja",
      testimonial:
        "Running a side business while working full-time was stressful. This system gave me full access remotely. I now know what’s selling, when, and who sold it—without calling anyone or leaving my office.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Real Results from Real Business Owners
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Discover how everyday entrepreneurs are transforming their businesses
          with our proven system.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((client, index) => (
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
                <p className="text-xs text-gray-400 italic">
                  {client.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
          <img
            src="/testimony1.jpeg"
            alt="Jennifer's Business"
            className="rounded-lg shadow-md object-cover w-full h-80"
          />
          <img
            src="/testimony2.jpeg"
            alt="Grace's Supermarket"
            className="rounded-lg shadow-md object-cover w-full h-80"
          />
          <img
            src="/testimony3.jpeg"
            alt="Ebele's Boutique"
            className="rounded-lg shadow-md object-cover w-full h-80"
          />
        </div>
      </div>
    </div>
  );
}
