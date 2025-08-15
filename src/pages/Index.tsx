import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="flex w-screen h-screen flex-col items-start gap-2.5 relative overflow-hidden px-[140px] py-[23px] max-md:px-10 max-md:py-5 max-sm:h-auto max-sm:min-h-screen max-sm:px-5 max-sm:py-4">
      <div 
        className="flex w-full h-full justify-center items-center absolute z-[-1] object-cover left-0 top-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/a0e6814fc503bdbfca8ac299e13b3b71d6274415?width=3024)'
        }}
        role="img"
        aria-label="Background image showing a peaceful financial wellness environment"
      />
      
      <div className="flex w-full max-w-[1232px] flex-col items-end gap-[117px] relative z-[1] max-md:gap-[60px] max-sm:gap-10 max-sm:items-center">
        <Header />
        
        <main>
          <HeroSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
