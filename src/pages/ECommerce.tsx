
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import IconCard from '@/components/IconCard';
import { ShoppingBag, Users, Settings, Search, CreditCard, HeadphonesIcon } from 'lucide-react';

const ECommerce = () => {
  return (
    <Layout>
      <HeroSection 
        title="E-Commerce Solutions" 
        subtitle="Bridging the gap between consumers and sellers with our innovative platform"
        backgroundImage="/tci_uploads/e_commercebg.png"
      />
      
      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Connecting Consumers and Sellers</h2>
              <p className="text-lg text-gray-700 mb-6">
                TCI's E-Commerce department provides a comprehensive platform that brings together consumers and sellers in a seamless digital marketplace. Our solution simplifies the buying and selling process while ensuring security and reliability for all transactions.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a business looking to reach new customers or a consumer searching for products and services, our E-Commerce platform offers the tools and features you need for a successful online experience.
              </p>
            </div>
            <div className="bg-tci-accent/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Platform Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">User-friendly interface for both buyers and sellers</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Secure payment processing with multiple options</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Advanced search and filtering capabilities</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Detailed analytics and reporting tools</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Rating and review system to build trust</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Responsive design for all devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <FeatureSection
        id="services"
        title="Our E-Commerce Services"
        subtitle="Comprehensive solutions to facilitate commerce in the digital age"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IconCard icon={<ShoppingBag size={40} />} title="Marketplace Platform">
            <p>A comprehensive digital marketplace where buyers can discover products and services from various sellers in one place.</p>
          </IconCard>
          
          <IconCard icon={<Users size={40} />} title="Seller Services">
            <p>Tools and resources to help sellers list products, manage inventory, process orders, and grow their business.</p>
          </IconCard>
          
          <IconCard icon={<Settings size={40} />} title="Customization Options">
            <p>Flexible configuration options allowing businesses to tailor the platform to their specific needs and branding.</p>
          </IconCard>
          
          <IconCard icon={<Search size={40} />} title="Discovery Tools">
            <p>Advanced search and recommendation systems to help consumers find exactly what they're looking for quickly.</p>
          </IconCard>
          
          <IconCard icon={<CreditCard size={40} />} title="Payment Processing">
            <p>Secure, integrated payment processing with support for multiple payment methods and currencies.</p>
          </IconCard>
          
          <IconCard icon={<HeadphonesIcon size={40} />} title="Customer Support">
            <p>Comprehensive support systems for both buyers and sellers to ensure smooth transactions and resolution of issues.</p>
          </IconCard>
        </div>
      </FeatureSection>
      
      {/* Feature Highlight Section */}
      <FeatureSection
        title="Making Connections Easier"
        subtitle="How our E-Commerce platform bridges the gap between consumers and sellers"
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">For Sellers</h3>
              <p className="text-gray-700 mb-4">
                Our platform provides businesses with the tools they need to reach a wider audience and increase sales. From inventory management to order processing, we make it easy to run your online business efficiently.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Easy Listing Creation</span>
                    <p className="text-sm text-gray-600">Create and manage product listings with our intuitive tools</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Seller Dashboard</span>
                    <p className="text-sm text-gray-600">Track sales, analyze performance, and manage customer interactions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Marketing Tools</span>
                    <p className="text-sm text-gray-600">Promote your products with integrated marketing features</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-tci-accent to-tci-secondary text-white p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">For Consumers</h3>
                <p className="mb-4">
                  Our platform offers a seamless shopping experience with powerful search capabilities, secure transactions, and a wide selection of products and services from trusted sellers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">User-friendly search and filtering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Secure checkout process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Order tracking and history</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="bg-white text-tci-accent hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-all duration-300 inline-block"
                >
                  Start Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>
      
      {/* CTA Section */}
      <section className="py-20 bg-tci-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Join Our E-Commerce Platform?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you're a seller looking to expand your reach or a consumer searching for quality products and services, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-tci-accent hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
            >
              For Sellers
            </a>
            <a 
              href="/contact" 
              className="bg-white text-tci-dark hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300"
            >
              For Consumers
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ECommerce;
