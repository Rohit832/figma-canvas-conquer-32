import React from 'react';
import { Check } from 'lucide-react';

const SocialProof = () => {
  return (
    <div className="flex w-[377px] flex-col items-start gap-[34px] relative max-md:w-full max-sm:items-center">
      <div className="relative">
        <svg 
          width="190" 
          height="120" 
          viewBox="0 0 190 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[190px] h-[120px] relative"
        >
          <defs>
            <pattern id="img1" patternContentUnits="objectBoundingBox" width="1" height="1">
              <image href="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice"/>
            </pattern>
            <pattern id="img2" patternContentUnits="objectBoundingBox" width="1" height="1">
              <image href="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice"/>
            </pattern>
            <pattern id="img3" patternContentUnits="objectBoundingBox" width="1" height="1">
              <image href="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice"/>
            </pattern>
          </defs>
          <circle cx="38.5" cy="60" r="45" fill="url(#img1)" />
          <circle cx="94.5" cy="60" r="45" fill="url(#img2)" />
          <circle cx="151.5" cy="60" r="45" fill="url(#img3)" />
        </svg>
      </div>
      
      <div className="flex h-[43px] items-center gap-[9px] self-stretch relative pl-[15px] pr-2.5 py-0 rounded-[50px]">
        <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#64867E]">
          <Check className="w-3 h-3 text-white" />
        </div>
        <div className="w-[327px] h-[33px] text-[#344947] text-2xl relative flex items-center">
          <span className="font-bold">1043+</span>
          <span className="font-normal ml-1">people already joined</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
