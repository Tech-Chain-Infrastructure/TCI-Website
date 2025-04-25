
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Features from '@/components/Features';
import IconCard from '@/components/IconCard';
import { Atom, Rocket, CircuitBoard, Code, Cpu } from 'lucide-react';

const EmergingTech = () => {
  const technologies = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description: "Advanced AI solutions for businesses and organizations, including machine learning, deep learning, and neural networks.",
      icon: <Atom className="h-10 w-10" />
    },
    {
      id: 2,
      title: "Blockchain Technology",
      description: "Secure, transparent blockchain solutions for various applications including smart contracts and decentralized systems.",
      icon: <CircuitBoard className="h-10 w-10" />
    },
    {
      id: 3,
      title: "Internet of Things",
      description: "IoT device development, network solutions, and integration services for connected environments and smart systems.",
      icon: <Cpu className="h-10 w-10" />
    },
    {
      id: 4,
      title: "Virtual & Augmented Reality",
      description: "Immersive VR/AR experiences for education, training, entertainment, and industrial applications.",
      icon: <Rocket className="h-10 w-10" />
    },
    {
      id: 5,
      title: "Quantum Computing",
      description: "Research, development, and application of quantum computing principles for solving complex computational problems.",
      icon: <Code className="h-10 w-10" />
    }
  ];

  const benefits = [
    {
      id: 1,
      title: "Innovation Leadership",
      description: "Stay at the forefront of technological advancement with cutting-edge solutions."
    },
    {
      id: 2,
      title: "Competitive Advantage",
      description: "Gain strategic advantage through early adoption of transformative technologies."
    },
    {
      id: 3,
      title: "Enhanced Efficiency",
      description: "Streamline operations and improve productivity with advanced technological solutions."
    },
    {
      id: 4,
      title: "Future-Proof Systems",
      description: "Develop systems and processes that are adaptable to future technological evolutions."
    },
    {
      id: 5,
      title: "Research Opportunities",
      description: "Engage in collaborative research to explore and develop revolutionary technologies."
    },
    {
      id: 6,
      title: "Custom Technology Solutions",
      description: "Tailored emerging technology applications designed to meet specific organizational needs."
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="Emerging Technologies" 
        subtitle="Pioneering the future through innovative technological solutions and research"
        buttonText="Explore Our Technologies"
        backgroundImage="/tci_uploads/circuit-board-background.jpg"
      />
      
      <FeatureSection 
        id="services"
        title="Cutting-Edge Innovations" 
        subtitle="Discover how TCI's Emerging Technologies department is shaping the future"
      >
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {technologies.map((tech) => (
              <IconCard 
                key={tech.id}
                title={tech.title}
                icon={tech.icon}
              >
                {tech.description}
              </IconCard>
            ))}
          </div>
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="Why Choose Our Emerging Tech Solutions"
        subtitle="Transformative technologies to accelerate your growth and innovation"
        className="bg-gray-50 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/tech-pattern-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10">
          <Features features={benefits} />
        </div>
      </FeatureSection>
      
      <section className="bg-tci-dark text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/futuristic-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-white mb-6">Ready to Explore the Future of Technology?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Connect with our team of experts to discover how emerging technologies can transform your organization.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-tci-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default EmergingTech;
