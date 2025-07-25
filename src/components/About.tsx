export default function About() {
  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-14">
          Meet Your Instructor
        </h1>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className=" text-xl md:text-2xl">
              Hi, I’m Esther Oyeyemi Ogoniba. I help business owners like you
              use tech tools to manage sales, inventory, and records. Over 30+
              entrepreneurs have learned from my classes.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Founder of <strong>Bowjai Creative Business Solutions</strong>,
                supporting SMEs in digital transformation and inventory
                management.
              </li>
              <li>
                Collaborating with local businesses in Abuja—supermarkets, hair
                vendors, clothing stores, and wine bars.
              </li>
              <li>
                Championing innovative tech solutions tailored to small business
                challenges.
              </li>
              <li>
                A devoted entrepreneur, wife, and mother of two, passionate
                about empowering fellow business owners.
              </li>
              <li>
                Tech enthusiast focused on making digital tools accessible and
                user-friendly for SMEs.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Portrait of Esther Oyeyemi Ogonniba"
              className="rounded-xl shadow-lg w-[80%] h-auto max-h-[32rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
