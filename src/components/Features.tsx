
import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ features, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {features.map((feature) => (
        <div 
          key={feature.id} 
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
