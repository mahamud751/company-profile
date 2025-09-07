import React from "react";

const texts = [
  "Slide Decks",
  "Mobile Apps",
  "Figma",
  "Social Media",
  "Framer",
  "Branding",
  "Dashboard",
  "Logos",
  "Webflow",
];

const Slider = () => {
  const repeatedTexts = [...texts, ...texts];

  return (
    <div className="overflow-hidden w-full py-6 sm:py-8 md:py-10">
      <div className="whitespace-nowrap animate-scrollLeftToRight flex items-center gap-4 sm:gap-6">
        {repeatedTexts.map((item, index) => (
          <div key={index} className="flex items-center gap-4 sm:gap-6">
            <span className="text-base sm:text-lg md:text-2xl font-medium bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-transparent bg-clip-text whitespace-nowrap">
              {item}
            </span>
            <span className="text-white text-xl sm:text-2xl md:text-3xl leading-none">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
