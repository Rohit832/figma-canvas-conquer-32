import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="flex w-screen min-h-screen flex-col items-start gap-2.5 relative overflow-x-hidden px-[140px] py-[23px] max-md:px-10 max-md:py-5 max-sm:px-5 max-sm:py-4">
      <div 
        className="flex w-full h-full justify-center items-center absolute z-[-1] object-cover left-0 top-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/hero-background.svg)'
        }}
        role="img"
        aria-label="Background image showing a peaceful financial wellness environment"
      />
      
      <div className="flex w-full max-w-[1232px] mx-auto flex-col gap-[60px] relative z-[1] max-md:gap-[40px] max-sm:gap-8">
        <div className="w-full flex justify-end max-sm:justify-center">
          <Header />
        </div>
        
        <main className="w-full">
          <HeroSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
