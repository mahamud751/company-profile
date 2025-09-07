"use client";

import Slider from "./Slider";
import Slider2 from "./Slider2";
import SliderReverse from "./SliderReverse";

const Company = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-12 sm:py-16 md:py-20 lg:py-24">
      <Slider />
      <Slider2 />
      <SliderReverse />
    </section>
  );
};

export default Company;
