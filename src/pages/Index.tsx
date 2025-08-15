import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="flex w-screen min-h-screen flex-col items-start gap-2.5 relative overflow-x-hidden px-[140px] py-[23px] max-md:px-10 max-md:py-5 max-sm:px-5 max-sm:py-4">
      <div 
        className="fixed inset-0 w-full h-screen z-[-1]"
        style={{
          background: 'linear-gradient(180deg, #6ABFB1 0%, #GAB6FB1 100%)'
        }}
      />
      
      <div className="flex w-full max-w-[1232px] mx-auto flex-col gap-[60px] relative z-[1] max-md:gap-[40px] max-sm:gap-8">
        <div className="w-full flex justify-end max-md:justify-center">
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
