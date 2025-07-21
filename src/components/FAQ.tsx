import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
interface FAQItem {
  question: string;
  answer: string;
}
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const faqs: FAQItem[] = [
    {
      question: "Who is this course designed for?",
      answer:
        "It's perfect for product-based business owners, side hustlers, and anyone looking to learn inventory management as a profitable skill.",
    },
    {
      question: "Do I need technical experience to enroll?",
      answer:
        "No prior tech skills are required. The course guides you step-by-step with easy-to-follow systems and real-world examples.",
    },
    {
      question: "What will I be able to do after completing the program?",
      answer:
        "You'll have a fully functional inventory system for your business, plus the know-how to offer inventory consulting to others for extra income.",
    },
    {
      question: "Can this work for my business if I still work a 9-5?",
      answer:
        "Yes! The system is designed for remote tracking, automation, and low-maintenance control—perfect for busy professionals.",
    },
    {
      question: "Will I get templates or tools to help with setup?",
      answer:
        "Absolutely. You’ll receive plug-and-play templates and guided walkthroughs to get your inventory system up and running smoothly.",
    },
  ];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked
              <span className="block text-indigo-600">Questions</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Find quick answers to common queries about our product and
              services
            </p>
          </div>
          <div className="md:w-2/3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
