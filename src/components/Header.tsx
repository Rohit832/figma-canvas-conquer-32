import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-[#49887B]">FinWell</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-[#344947] text-lg font-medium hover:text-[#49887B] transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-[#344947] text-lg font-medium hover:text-[#49887B] transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-[#344947] text-lg font-medium hover:text-[#49887B] transition-colors duration-200"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-[#344947] text-lg font-medium hover:text-[#49887B] transition-colors duration-200"
            >
              Contact
            </a>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1 text-[#344947] text-lg font-medium hover:text-[#49887B] transition-colors duration-200"
                aria-expanded={isLanguageOpen}
                aria-haspopup="true"
              >
                EN
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg z-10 min-w-[80px]">
                  <button className="block w-full px-4 py-2 text-left text-[#344947] hover:bg-[#49887B]/10 hover:text-[#49887B] transition-colors duration-200 rounded-t-lg">EN</button>
                  <button className="block w-full px-4 py-2 text-left text-[#344947] hover:bg-[#49887B]/10 hover:text-[#49887B] transition-colors duration-200">ES</button>
                  <button className="block w-full px-4 py-2 text-left text-[#344947] hover:bg-[#49887B]/10 hover:text-[#49887B] transition-colors duration-200 rounded-b-lg">FR</button>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#344947] text-lg font-semibold hover:text-[#49887B] transition-colors duration-200">
              Sign In
            </button>
            <button className="px-6 py-2 bg-[#49887B] text-white font-semibold rounded-full hover:bg-[#3a6b5f] transition-colors duration-200 shadow-lg">
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-[#344947] hover:text-[#49887B] hover:bg-white/20 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-white/20">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a 
              href="#about" 
              className="block px-3 py-2 text-[#344947] text-lg font-medium hover:text-[#49887B] hover:bg-[#49887B]/10 rounded-md transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#features" 
              className="block px-3 py-2 text-[#344947] text-lg font-medium hover:text-[#49887B] hover:bg-[#49887B]/10 rounded-md transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 text-[#344947] text-lg font-medium hover:text-[#49887B] hover:bg-[#49887B]/10 rounded-md transition-colors duration-200"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-[#344947] text-lg font-medium hover:text-[#49887B] hover:bg-[#49887B]/10 rounded-md transition-colors duration-200"
            >
              Contact
            </a>
            
            {/* Mobile Language Selector */}
            <div className="px-3 py-2">
              <label className="block text-[#344947] text-sm font-medium mb-1">Language</label>
              <select className="w-full border border-white/30 rounded-md px-3 py-1 bg-white/80 text-[#344947]">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="px-3 pt-4 pb-2 space-y-2">
              <button className="w-full text-left px-3 py-2 text-[#344947] text-lg font-semibold hover:text-[#49887B] hover:bg-[#49887B]/10 rounded-md transition-colors duration-200">
                Sign In
              </button>
              <button className="w-full px-3 py-2 bg-[#49887B] text-white font-semibold rounded-md hover:bg-[#3a6b5f] transition-colors duration-200">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
