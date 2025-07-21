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
      question: "How does the dashboard help track coffee sales?",
      answer:
        "The dashboard offers real-time insights into daily, weekly, and monthly sales, helping you stay on top of trends and performance.",
    },
    {
      question: "Can I manage inventory with this dashboard?",
      answer:
        "Yes, our dashboard includes comprehensive inventory management features that let you track stock levels, set reorder points, and monitor product availability in real-time.",
    },
    {
      question: "Can I track customer preferences?",
      answer:
        "Absolutely! The dashboard collects and analyzes customer purchase patterns, allowing you to identify preferences and tailor your offerings accordingly.",
    },
    {
      question: "Can the dashboard track daily sales performance?",
      answer:
        "Yes, the dashboard provides detailed daily sales reports with hourly breakdowns, allowing you to identify peak selling times and optimize staffing accordingly.",
    },
    {
      question: "Can I export sales reports?",
      answer:
        "Yes, all reports can be exported in multiple formats including PDF, CSV, and Excel for easy sharing and further analysis in your preferred tools.",
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
