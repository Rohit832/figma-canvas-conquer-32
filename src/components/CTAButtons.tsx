import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTAButtons = () => {
  const handleBookDemo = () => {
    // Handle book demo action
    console.log('Book demo clicked');
  };

  const handleSeeHowItWorks = () => {
    // Handle see how it works action
    console.log('See how it works clicked');
  };

  return (
    <div className="flex w-[389px] flex-col items-start gap-4 relative max-md:w-full max-md:max-w-[400px] max-sm:items-center">
      <button 
        onClick={handleBookDemo}
        className="flex h-[72px] justify-center items-center gap-2.5 self-stretch relative cursor-pointer px-[18px] py-2 rounded-[50px] bg-[#49887B] hover:bg-[#3a6b5f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#49887B] focus:ring-offset-2"
        aria-label="Book a demo"
      >
        <span className="text-white text-2xl font-medium relative">
          Book a Demo
        </span>
      </button>
      
      <button 
        onClick={handleSeeHowItWorks}
        className="flex items-center gap-1 relative cursor-pointer group hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#49887B] focus:ring-offset-2 rounded"
        aria-label="See how it works"
      >
        <span className="w-[220px] h-[37px] text-[#49887B] text-[28px] font-normal relative max-sm:text-2xl max-sm:w-auto flex items-center">
          See how it works
        </span>
        <ArrowRight 
          className="w-[21px] h-[21px] text-[#49887B] group-hover:translate-x-1 transition-transform" 
        />
      </button>
    </div>
  );
};

export default CTAButtons;
