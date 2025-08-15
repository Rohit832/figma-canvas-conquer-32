import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center gap-[45px] relative max-md:flex-wrap max-md:gap-5 max-sm:w-full max-sm:justify-between max-sm:flex-wrap sm:justify-center md:justify-start">
      <nav className="flex items-center gap-[34.9px] relative max-md:gap-5 max-sm:hidden">
        <div className="flex items-center gap-[29.589px] relative max-md:gap-5 max-sm:hidden">
          <a 
            href="#about" 
            className="text-black text-lg font-normal relative hover:text-[#49887B] transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-black text-lg font-normal relative hover:text-[#49887B] transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="w-0.5 h-[41px] opacity-50 relative bg-black" />
        <div className="flex items-center relative gap-1">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center gap-1 text-black text-lg font-normal relative hover:text-[#49887B] transition-colors"
            aria-expanded={isLanguageOpen}
            aria-haspopup="true"
          >
            EN
            <ChevronDown 
              className={`w-[18px] h-[18px] transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {isLanguageOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[80px]">
              <button 
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-black"
                onClick={() => setIsLanguageOpen(false)}
              >
                EN
              </button>
              <button 
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-black"
                onClick={() => setIsLanguageOpen(false)}
              >
                ES
              </button>
              <button 
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-black"
                onClick={() => setIsLanguageOpen(false)}
              >
                FR
              </button>
            </div>
          )}
        </div>
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="text-black text-lg font-bold relative hover:text-[#49887B] transition-colors whitespace-nowrap">
          Sign In
        </button>
        <button className="flex w-[195px] h-[49px] justify-center items-center gap-2.5 relative rounded-[50px] bg-[#49887B] text-white hover:bg-[#3a6b5f] transition-colors max-sm:w-[150px] max-sm:h-10">
          Book Demo
        </button>
      </div>

      <button 
        className="hidden max-sm:block"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mx-4">
          <nav className="flex flex-col p-4 gap-3">
            <a 
              href="#about" 
              className="text-black text-lg font-normal hover:text-[#49887B] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-black text-lg font-normal hover:text-[#49887B] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex items-center justify-between py-2">
              <span className="text-black text-lg font-normal">Language:</span>
              <select className="border border-gray-300 rounded px-3 py-1 bg-white text-black">
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
