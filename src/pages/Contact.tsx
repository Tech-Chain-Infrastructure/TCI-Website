
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <HeroSection 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, services, or support"
        buttonText=""
        buttonLink=""
      />
      
      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">We'd Love to Hear From You</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you have questions about our services, need technical support, or want to explore how TCI can help your business grow, our team is ready to assist you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 text-tci-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-700">General Inquiries: info@tciplatform.com</p>
                    <p className="text-gray-700">CEO Contact: gabrielobo26@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-tci-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-700">Customer Support: +1 (234) 567-8900</p>
                    <p className="text-gray-700">Business Hours: 9am - 5pm, Monday to Friday</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-tci-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-700">
                      Tech Chain Infrastructure<br />
                      123 Innovation Way<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Connect With Our Departments</h3>
                <p className="mb-4">For specific inquiries, you can reach out to our specialized departments:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-tci-primary mr-2"></div>
                    <span className="text-gray-700">Ed-Tech Department: edtech@tciplatform.com</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-tci-secondary mr-2"></div>
                    <span className="text-gray-700">Fin-Tech Department: fintech@tciplatform.com</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-tci-accent mr-2"></div>
                    <span className="text-gray-700">E-Commerce Department: ecommerce@tciplatform.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How quickly can I expect a response to my inquiry?</h3>
              <p className="text-gray-700">We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate the urgency in your message.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you offer custom development services?</h3>
              <p className="text-gray-700">Yes, we provide custom development services for apps, websites, and other digital solutions tailored to your specific requirements.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How can I join as a seller on your E-Commerce platform?</h3>
              <p className="text-gray-700">To join as a seller, please fill out the contact form specifying your interest in selling on our platform, and our team will guide you through the onboarding process.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Are your financial services available internationally?</h3>
              <p className="text-gray-700">Yes, our Fin-Tech services are designed to work globally, with support for multiple currencies and compliance with international regulations.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
