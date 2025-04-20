
import React from 'react';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 text-tci-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
};

export default IconCard;
