
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tci-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tech Chain Infrastructure</h3>
            <p className="text-gray-300">
              Fostering societal growth through Ed-Tech, Fin-Tech, E-Commerce, and Emerging Technologies solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/edtech" className="text-gray-300 hover:text-white transition-colors">Ed-Tech</Link></li>
              <li><Link to="/fintech" className="text-gray-300 hover:text-white transition-colors">Fin-Tech</Link></li>
              <li><Link to="/ecommerce" className="text-gray-300 hover:text-white transition-colors">E-Commerce</Link></li>
              <li><Link to="/emergingtech" className="text-gray-300 hover:text-white transition-colors">Emerging Tech</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/edtech#outreach" className="text-gray-300 hover:text-white transition-colors">Educational Outreach</a></li>
              <li><a href="/fintech#solutions" className="text-gray-300 hover:text-white transition-colors">Financial Solutions</a></li>
              <li><a href="/ecommerce#connect" className="text-gray-300 hover:text-white transition-colors">Consumer-Seller Connections</a></li>
              <li><a href="/emergingtech#technologies" className="text-gray-300 hover:text-white transition-colors">Emerging Technologies</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Custom Development</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@tciplatform.com</li>
              <li className="text-gray-300">CEO: gabrielobo26@gmail.com</li>
              <li><Link to="/contact" className="text-tci-accent hover:text-white transition-colors">Send us a message</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Tech Chain Infrastructure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
