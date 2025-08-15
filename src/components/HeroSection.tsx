import React from 'react';
import SocialProof from './SocialProof';
import CTAButtons from './CTAButtons';

const HeroSection = () => {
  return (
    <section className="flex items-center gap-[49px] self-stretch relative max-md:flex-col max-md:gap-10 max-sm:items-center max-sm:gap-[30px]">
      <div className="flex w-[580px] flex-col items-start gap-12 relative max-md:w-full max-md:max-w-[600px] max-sm:gap-[30px] max-sm:items-center max-sm:text-center">
        <div className="flex flex-col items-start gap-6 self-stretch relative max-sm:items-center max-sm:text-center">
          <h1 className="self-stretch text-[#49887B] text-[64px] font-black relative max-md:text-5xl max-sm:text-4xl max-sm:text-center leading-tight">
            Financial Wellness for Teams That Care
          </h1>
          <p className="w-[535px] text-[#49887B] text-[28px] font-medium relative max-md:w-full max-md:text-2xl max-sm:text-xl max-sm:text-center max-sm:h-auto leading-relaxed">
            Give your employees the tools to stress less, save more, and live better
          </p>
        </div>
        
        <SocialProof />
        <CTAButtons />
      </div>
      
      <div className="flex-1 flex justify-center">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/04a59cac4033703d8cbb30c61cfefcf69a00d403?width=1204"
          alt="Financial wellness dashboard showing various tools and features for employee financial health"
          className="w-[602px] h-[634px] relative object-cover rounded-[41px] max-md:w-full max-md:max-w-[500px] max-md:h-auto max-sm:w-full max-sm:max-w-[400px] max-sm:rounded-[20px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
