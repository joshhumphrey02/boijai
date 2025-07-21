import { FeatureCard } from "./FeatureCard";
import {
  BarChart3,
  Smartphone,
  LineChart,
  TrendingUp,
  Package,
  ShoppingCart,
} from "lucide-react";
export const Features = () => {
  const features = [
    {
      title: "Inventory Management",
      description:
        "Effortlessly track stock levels, reorder products, and monitor real-time availability",
      icon: <Package className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Device Tracking",
      description:
        "Gain insights into customer interactions with your store across multiple devices",
      icon: <Smartphone className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Performance Summary",
      description:
        "View key metrics to assess overall store health and performance",
      icon: <LineChart className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Sales Overview",
      description: "Track revenue growth and identify top-selling products",
      icon: <TrendingUp className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Order Status",
      description: "Monitor orders from placement to delivery fulfillment",
      icon: <ShoppingCart className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Conversion Rate",
      description:
        "Measure how effectively your store converts visitors into buyers",
      icon: <BarChart3 className="h-6 w-6 text-indigo-500" />,
    },
  ];
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
