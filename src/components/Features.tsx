import { FeatureCard } from "./FeatureCard";
import { Smartphone, Package, User2, Headset } from "lucide-react";
export const Features = () => {
  const features = [
    {
      title: "Simple",
      description: "If you can use WhatsApp, you can use our tools",
      icon: <Smartphone className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Affordable",
      description: "Solutions that fit your budget",
      icon: <Package className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Personal",
      description: "We match tools to your specific business",
      icon: <User2 className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Supportive",
      description: "Full training and ongoing help",
      icon: <Headset className="h-6 w-6 text-indigo-500" />,
    },
  ];
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-semibold text-gray-900 mb-4 md:mb-8">
          Why Bowjai creative business solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
