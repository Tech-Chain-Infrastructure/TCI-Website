
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import IconCard from '@/components/IconCard';
import { BookOpen, GraduationCap, Code, Users, Globe, Monitor } from 'lucide-react';

const EdTech = () => {
  return (
    <Layout>
      <HeroSection 
        title="Educational Technology" 
        subtitle="Empowering growth through innovative educational resources, outreach programs, and development services"
        backgroundImage="/tci_uploads/edu_bg.jpg"
      />
      
      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Transforming Education Through Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TCI's Ed-Tech department, we're passionate about leveraging technology to create impactful educational experiences. We provide resources and services designed to enhance learning, foster skill development, and bridge knowledge gaps across communities.
              </p>
              <p className="text-lg text-gray-700">
                Our approach combines cutting-edge technology with educational expertise to develop solutions that are both innovative and accessible. Whether you're an educational institution, a business, or an individual learner, our Ed-Tech services are designed to meet your unique needs.
              </p>
            </div>
            <div className="bg-tci-primary/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Ed-Tech Focus Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Educational Resource Development</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Community Outreach Programs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Educational App Development</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Learning Management Systems</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-tci-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Educational Content Creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <FeatureSection
        id="services"
        title="Our Ed-Tech Services"
        subtitle="Comprehensive educational technology solutions tailored to your needs"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IconCard icon={<BookOpen size={40} />} title="Educational Resources">
            <p>Access a wide range of digital learning materials, interactive content, and educational tools designed to enhance the learning experience.</p>
          </IconCard>
          
          <IconCard icon={<GraduationCap size={40} />} title="Online Learning Platforms">
            <p>Utilize our customized learning management systems that facilitate remote education, student tracking, and assessment.</p>
          </IconCard>
          
          <IconCard icon={<Code size={40} />} title="Educational App Development">
            <p>Partner with our development team to create mobile and web applications specifically designed for educational purposes.</p>
          </IconCard>
          
          <IconCard icon={<Users size={40} />} title="Community Outreach">
            <p>Participate in our programs designed to bring educational resources to underserved communities and bridge the digital divide.</p>
          </IconCard>
          
          <IconCard icon={<Globe size={40} />} title="Global Learning Initiatives">
            <p>Join our global network of educators and learners sharing knowledge and resources across borders.</p>
          </IconCard>
          
          <IconCard icon={<Monitor size={40} />} title="Technical Consulting">
            <p>Get expert advice on implementing educational technology solutions within your organization or institution.</p>
          </IconCard>
        </div>
      </FeatureSection>
      
      {/* Outreach Section */}
      <FeatureSection
        id="outreach"
        title="Educational Outreach"
        subtitle="Making quality education accessible to everyone"
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Bridging Educational Gaps</h3>
              <p className="text-gray-700 mb-4">
                Our outreach programs are designed to bring educational resources to communities that may not have easy access to them. We believe that everyone deserves quality education, regardless of their location or circumstances.
              </p>
              <p className="text-gray-700 mb-4">
                Through partnerships with local organizations and educational institutions, we're able to extend our reach and make a meaningful impact in diverse communities.
              </p>
              <h4 className="text-xl font-semibold mb-2">Our Outreach Initiatives Include:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 text-tci-primary">•</div>
                  <span>Digital literacy programs for underserved communities</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-tci-primary">•</div>
                  <span>Technology donation drives for schools and libraries</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-tci-primary">•</div>
                  <span>Free educational workshops and webinars</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-tci-primary">•</div>
                  <span>Mentorship programs for aspiring technologists</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-tci-primary to-tci-secondary text-white p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get Involved</h3>
                <p className="mb-4">
                  There are many ways you can contribute to our educational outreach efforts, whether as a volunteer, sponsor, or partner organization.
                </p>
                <p className="mb-6">
                  Your support helps us expand our reach and make a bigger impact in communities that need it most.
                </p>
                <a 
                  href="/contact" 
                  className="bg-white text-tci-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-all duration-300 inline-block"
                >
                  Join Our Efforts
                </a>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>
      
      {/* CTA Section */}
      <section className="py-20 bg-tci-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Transform Your Educational Approach</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Ready to harness the power of technology for educational excellence? Connect with our Ed-Tech team today.
          </p>
          <a 
            href="/contact" 
            className="bg-tci-primary hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default EdTech;
