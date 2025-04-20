
import React from 'react';

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = "",
  id
}) => {
  return (
    <section id={id} className={`section py-16 md:py-24 ${className}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default FeatureSection;
