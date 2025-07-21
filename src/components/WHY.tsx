import { CheckCircle } from "lucide-react";
import { ContactCTA } from "./ContactCTA";
export function WHY() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">
          Why You Should Consider Our Bootcamp
        </h1>
        <div className="grid grid-cols-1 mb-8 md:grid-cols-3 gap-10">
          <FeatureItem
            title="Expiration Alerts"
            description="Product Expiration Alerts Never lose money on expired products again with automated tracking and early warning systems."
          />
          <FeatureItem
            title="Real Time"
            description="Real time report from anywhere."
          />
          <FeatureItem title="Theft" description="Stop employee theft." />
          <FeatureItem
            title="Prevent Stockouts"
            description="Low Stock Alerts Prevent stockouts and avoid over-buying with smart reorder notifications that optimize your purchasing Item."
          />
          <FeatureItem
            title="Data-Driven Decisions"
            description="Make Data-Driven Decisions Real-time insights into your best and worst performing inventory"
          />
          <FeatureItem
            title="Cash Flow Management"
            description="Better Cash Flow Management Know exactly what you have and when to reorder for optimal cash flow"
          />
        </div>
        <ContactCTA />
      </div>
    </div>
  );
}
function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex-col">
      <div className="mb-4">
        <CheckCircle
          size={40}
          className="text-orange-400"
          fill="#FFEBD8"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
