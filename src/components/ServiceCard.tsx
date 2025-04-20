
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: 'primary' | 'secondary' | 'accent';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, color }) => {
  const colorClasses = {
    primary: 'border-t-4 border-tci-primary',
    secondary: 'border-t-4 border-tci-secondary',
    accent: 'border-t-4 border-tci-accent',
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 card-hover ${colorClasses[color]}`}>
      <div className="mb-4 text-tci-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-tci-primary hover:text-tci-secondary font-medium inline-flex items-center transition-colors"
      >
        Explore More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
