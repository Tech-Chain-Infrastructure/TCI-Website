
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import IconCard from '@/components/IconCard';
import { BarChart3, Shield, Clock, Code, Database, Lock } from 'lucide-react';

const FinTech = () => {
  return (
    <Layout>
      <HeroSection 
        title="Financial Technology" 
        subtitle="Innovative financial solutions with secure, high-performance transaction processing capabilities"
        backgroundImage="/tci_uploads/finance.png"
      />
      
      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-tci-secondary/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Performance Metrics</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Transaction Processing</span>
                    <span className="text-tci-secondary">1,000+ TPS</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-tci-secondary h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Latency</span>
                    <span className="text-tci-secondary">&lt; 2 seconds</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-tci-secondary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Encryption</span>
                    <span className="text-tci-secondary">AES-256</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-tci-secondary h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Uptime</span>
                    <span className="text-tci-secondary">99.99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-tci-secondary h-2 rounded-full" style={{width: '99.99%'}}></div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6">Secure, Scalable Financial Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                TCI's Fin-Tech department delivers high-performance financial technology solutions designed for modern businesses. Our platform processes transactions securely and efficiently, with the ability to handle over 1,000 transactions per second.
              </p>
              <p className="text-lg text-gray-700">
                We employ industry-leading security measures, including AES-256 encryption, to protect sensitive financial data and ensure compliance with regulatory standards. Whether you're a small business or a large enterprise, our Fin-Tech solutions are scalable to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <FeatureSection
        id="services"
        title="Our Fin-Tech Services"
        subtitle="Comprehensive financial technology solutions for businesses of all sizes"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IconCard icon={<BarChart3 size={40} />} title="Transaction Processing">
            <p>High-capacity transaction processing system capable of handling 1,000+ transactions per second with minimal latency.</p>
          </IconCard>
          
          <IconCard icon={<Shield size={40} />} title="Secure Payment Gateway">
            <p>Integrated payment gateway with advanced encryption and fraud detection capabilities for secure financial transactions.</p>
          </IconCard>
          
          <IconCard icon={<Clock size={40} />} title="Real-time Analytics">
            <p>Monitor and analyze financial data in real-time to make informed business decisions and identify trends.</p>
          </IconCard>
          
          <IconCard icon={<Code size={40} />} title="Developer Integration">
            <p>Comprehensive API documentation and integration support for developers looking to incorporate our financial services.</p>
          </IconCard>
          
          <IconCard icon={<Database size={40} />} title="Data Management">
            <p>Secure storage and management of financial data with robust backup and recovery systems.</p>
          </IconCard>
          
          <IconCard icon={<Lock size={40} />} title="Regulatory Compliance">
            <p>Built-in compliance features to help your business meet financial regulations and security standards.</p>
          </IconCard>
        </div>
      </FeatureSection>
      
      {/* Technology Section */}
      <FeatureSection
        title="Our Financial Technology"
        subtitle="Cutting-edge technology powering our financial solutions"
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Advanced Security Features</h3>
              <p className="text-gray-700 mb-4">
                Security is our top priority in all financial operations. Our platform implements multiple layers of protection to safeguard sensitive data and transactions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">AES-256 Encryption</span>
                    <p className="text-sm text-gray-600">Military-grade encryption for all sensitive data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Multi-Factor Authentication</span>
                    <p className="text-sm text-gray-600">Enhanced account security for administrative access</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Role-Based Access Control</span>
                    <p className="text-sm text-gray-600">Granular permission settings to restrict access</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-tci-secondary to-tci-accent text-white p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Developer Resources</h3>
                <p className="mb-4">
                  We provide comprehensive documentation and support for developers looking to integrate with our financial systems.
                </p>
                <p className="mb-6">
                  Our APIs are designed to be easy to use while maintaining the highest security standards, allowing for seamless integration with your existing systems.
                </p>
                <a 
                  href="/contact" 
                  className="bg-white text-tci-secondary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-all duration-300 inline-block"
                >
                  Access Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>
      
      {/* CTA Section */}
      <section className="py-20 bg-tci-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Financial Operations?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Our team is ready to help you implement secure, efficient financial technology solutions tailored to your business needs.
          </p>
          <a 
            href="/contact" 
            className="bg-tci-secondary hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default FinTech;
