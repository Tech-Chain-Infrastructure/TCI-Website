
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/tci_uploads/f42f31dc-b02c-48d2-97d5-af0d42b109d4.png" 
            alt="Tech Chain Infrastructures Logo" 
            className="h-10 mr-3"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-tci-primary transition-colors">Home</Link>
          <Link to="/edtech" className="text-gray-700 hover:text-tci-primary transition-colors">Ed-Tech</Link>
          <Link to="/fintech" className="text-gray-700 hover:text-tci-primary transition-colors">Fin-Tech</Link>
          <Link to="/ecommerce" className="text-gray-700 hover:text-tci-primary transition-colors">E-Commerce</Link>
          <Link to="/emergingtech" className="text-gray-700 hover:text-tci-primary transition-colors">Emerging Tech</Link>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white w-full border-t border-gray-200 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4 py-4">
            <Link to="/" className="text-gray-700 hover:text-tci-primary transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/edtech" className="text-gray-700 hover:text-tci-primary transition-colors" onClick={toggleMenu}>Ed-Tech</Link>
            <Link to="/fintech" className="text-gray-700 hover:text-tci-primary transition-colors" onClick={toggleMenu}>Fin-Tech</Link>
            <Link to="/ecommerce" className="text-gray-700 hover:text-tci-primary transition-colors" onClick={toggleMenu}>E-Commerce</Link>
            <Link to="/emergingtech" className="text-gray-700 hover:text-tci-primary transition-colors" onClick={toggleMenu}>Emerging Tech</Link>
            <Link to="/contact" className="btn-primary text-center" onClick={toggleMenu}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
