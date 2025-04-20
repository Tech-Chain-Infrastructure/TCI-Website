import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import FeatureSection from "@/components/FeatureSection";
import Features from "@/components/Features";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  Book,
  BarChart3,
  ShoppingBag,
  Atom,
  Star,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useAdmin } from "./AdminContext";

const Index = () => {
  const { adminLoggedIn } = useAdmin();
  const keyFeatures = [
    {
      id: 1,
      title: "Bridging Gaps",
      description:
        "Connect consumers with sellers through our intuitive platform, facilitating seamless transactions and partnerships.",
    },
    {
      id: 2,
      title: "Educational Outreach",
      description:
        "Access comprehensive educational resources and programs designed to foster growth and learning.",
    },
    {
      id: 3,
      title: "Financial Solutions",
      description:
        "Leverage our Fin-Tech services for secure, efficient transaction processing and financial management.",
    },
    {
      id: 4,
      title: "Development Services",
      description:
        "Utilize our expertise in app and website development to bring your digital vision to life.",
    },
    {
      id: 5,
      title: "Secure Transactions",
      description:
        "Benefit from our advanced encryption and security protocols that ensure safe data handling.",
    },
    {
      id: 6,
      title: "24/7 Availability",
      description:
        "Access our platform anytime, anywhere with our commitment to round-the-clock service availability.",
    },
  ];

  const featuredServices = [
    {
      title: "AI Development Solutions",
      category: "Emerging Tech",
      image: "/tci_uploads/ai_developer.png",
      link: "/emergingtech",
    },
    {
      title: "Educational Platform Development",
      category: "Ed-Tech",
      image: "/tci_uploads/edu.png",
      link: "/edtech",
    },
    {
      title: "Payment Gateway Integration",
      category: "Fin-Tech",
      image: "/tci_uploads/payment.png",
      link: "/fintech",
    },
    {
      title: "E-Commerce Platform Solutions",
      category: "E-Commerce",
      image: "/tci_uploads/e_commerce.png",
      link: "/ecommerce",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Tech Chain Infrastructure"
        subtitle="Your trusted source for technology solutions and reviews"
        buttonText="Explore Our Services"
        buttonLink="services"
        backgroundImage="/tci_uploads/tech_grid_background.png"
      />

      {/* Featured Services Section - similar to "Top Rated Products" */}
      <section id="services" className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-tci-primary text-white py-1 px-3 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <Link
                    to={service.link}
                    className="text-tci-primary font-medium hover:underline flex items-center mt-2"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Using Cards with Review-like Format */}
      <FeatureSection
        id="departments"
        title="Our Departments"
        subtitle="Discover how TCI's specialized departments can support your needs"
      >
        <div className="relative">
          <div
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: "url('/tci_uploads/tech-grid-background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <ServiceCard
              title="Ed-Tech"
              description="Educational resources, outreach programs, and development services to enhance learning experiences."
              icon={<Book size={48} />}
              link="/edtech"
              color="primary"
            />
            <ServiceCard
              title="Fin-Tech"
              description="Financial solutions, secure transaction processing, and developer integration options."
              icon={<BarChart3 size={48} />}
              link="/fintech"
              color="secondary"
            />
            <ServiceCard
              title="E-Commerce"
              description="Platform connecting consumers and sellers, with support for listings and transactions."
              icon={<ShoppingBag size={48} />}
              link="/ecommerce"
              color="accent"
            />
            <ServiceCard
              title="Emerging Tech"
              description="Cutting-edge solutions in AI, blockchain, IoT, VR/AR, and quantum computing technologies."
              icon={<Atom size={48} />}
              link="/emergingtech"
              color="primary"
            />
          </div>
        </div>
      </FeatureSection>

      {/* Benefits Section with Review-Style Layout */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center text-3xl font-bold mb-12">
            Why Choose TCI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-tci-primary/10 p-4 rounded-full mb-4">
                <Award size={32} className="text-tci-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Top-Rated Solutions
              </h3>
              <p className="text-gray-600">
                Our technology solutions consistently receive top ratings from
                industry experts and clients alike.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-tci-primary/10 p-4 rounded-full mb-4">
                <CheckCircle size={32} className="text-tci-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
              <p className="text-gray-600">
                Each solution is thoroughly evaluated and reviewed by our team
                of technology experts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-tci-primary/10 p-4 rounded-full mb-4">
                <Clock size={32} className="text-tci-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Up-To-Date Information
              </h3>
              <p className="text-gray-600">
                We continuously update our reviews and solutions to reflect the
                latest technology advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <FeatureSection
        title="Our Platform Features"
        subtitle="Comprehensive solutions designed to meet your specific needs"
        className="bg-gray-50 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/tech-dots-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10">
          <Features features={keyFeatures} />
        </div>
      </FeatureSection>

      {/* CTA Section */}
      <section className="bg-tci-dark text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/tech-wave-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Connect with our team to explore how TCI can help you achieve your
            goals through our cutting-edge technology solutions.
          </p>
          <a
            href="/contact"
            className="bg-white text-tci-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
