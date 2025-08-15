import React from 'react';
import { Check } from 'lucide-react';

const SocialProof = () => {
  return (
    <div className="flex w-[377px] flex-col items-start gap-[34px] relative max-md:w-full max-sm:items-center">
      <div className="relative">
        <svg 
          width="190" 
          height="77" 
          viewBox="0 0 190 77" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[190px] h-[77px] relative"
        >
          <circle cx="38.5" cy="38.5" r="38.5" fill="#D9D9D9" />
          <circle cx="38.5" cy="38.5" r="38.5" fill="url(#pattern0)" />
          <circle cx="94.5" cy="38.5" r="38.5" fill="#D9D9D9" />
          <circle cx="94.5" cy="38.5" r="38.5" fill="url(#pattern1)" />
          <circle cx="151.5" cy="38.5" r="38.5" fill="#D9D9D9" />
          <circle cx="151.5" cy="38.5" r="38.5" fill="url(#pattern2)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <rect width="1" height="1" fill="#4A90E2" />
            </pattern>
            <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
              <rect width="1" height="1" fill="#7ED321" />
            </pattern>
            <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
              <rect width="1" height="1" fill="#F5A623" />
            </pattern>
          </defs>
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
