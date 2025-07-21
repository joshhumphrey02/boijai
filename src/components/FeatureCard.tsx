import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="p-2 bg-indigo-50 rounded-lg">{icon}</div>
      </div>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
};
