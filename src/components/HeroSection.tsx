
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  buttonText = "Learn More", 
  buttonLink = "services",
  backgroundImage = "",
}) => {
  return (
    <div 
      className={`relative bg-gradient-to-br from-tci-primary/90 via-tci-primary/70 to-tci-primary/50 text-white py-20 md:py-32 overflow-hidden`}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            mixBlendMode: 'overlay'
          }}
        />
      )}
      <div className="container-custom text-center relative z-10">
        <h1 className="text-white mb-6 animate-fade-up">{title}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        
        {buttonText && buttonLink && (
          buttonLink.startsWith('/')
            ? (
              <Link 
                to={buttonLink}
                className="bg-white text-tci-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-block animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                {buttonText}
              </Link>
            )
            : (
              <ScrollLink 
                to={buttonLink}
                smooth={true}
                duration={500} 
                className="bg-white text-tci-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-block animate-fade-up cursor-pointer"
                style={{ animationDelay: '0.4s' }}
              >
                {buttonText}
              </ScrollLink>
            )
        )}
      </div>
    </div>
  );
};

export default HeroSection;
