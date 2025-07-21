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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "William Ashford",
              title: "Product Manager",
              company: "Google",
              testimonial:
                "The analytics tools have transformed how we approach financial planning and forecasting.",
            },
            {
              name: "Laila Smith",
              title: "Account Executive",
              company: "Notion",
              testimonial:
                "The customer support has been outstanding. Quick, responsive, and super helpful.",
            },
            {
              name: "Samuel Kingsley",
              title: "Financial Analyst",
              company: "In Capital",
              testimonial:
                "The security features give us peace of mind knowing our customer data is safe.",
            },
            {
              name: "Henry Stewart",
              title: "Co-Founder",
              company: "NextGen",
              testimonial:
                "The integration process was seamless—we were up and running in no time.",
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
                <p className="text-sm text-gray-500">
                  {client.title}, {client.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
