
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-2">
        <Link to="/" className="flex items-center">
          <img 
            src="/tci_uploads/TCI_logo-ref.png" 
            alt="Tech Chain Infrastructures Logo" 
            className="h-15 w-20 mr-3"
          />
        </Link>

        {/* Desktop Navigation */}
  <div className="hidden lg:flex items-center space-x-8">
    <Link to="/" className="group relative font-medium text-gray-700 hover:text-tci-primary transition-colors">
      Home
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
    </Link>
          <Link to="/edtech" className="group relative font-medium text-gray-700 hover:text-tci-primary transition-colors">
            Ed-Tech
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </Link>
          <Link to="/fintech" className="group relative font-medium text-gray-700 hover:text-tci-primary transition-colors">
            Fin-Tech
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </Link>
          <Link to="/ecommerce" className="group relative font-medium text-gray-700 hover:text-tci-primary transition-colors">
            E-Commerce
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </Link>
          <Link to="/emergingtech" className="group relative font-medium text-gray-700 hover:text-tci-primary transition-colors">
            Emerging Tech
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
          </Link>
          <Link to="/contact" className="btn-primary rounded-xl">Contact Us</Link>
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
