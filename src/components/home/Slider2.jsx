import React from "react";

const slideList = [
  { id: 1, img: 'https://i.ibb.co.com/3YfYM8RL/car-mobile.webp' },
  { id: 2, img: 'https://i.ibb.co.com/d4r5HXsN/fashion-mobile-home.webp' },
  { id: 3, img: 'https://i.ibb.co.com/BHWwKxw4/travel-homepage.webp' },
  { id: 4, img: 'https://i.ibb.co.com/tPvj57x4/gym-homepage-2.webp' },
  { id: 5, img: 'https://i.ibb.co.com/0p1vZh8Z/food-homepage.webp' },
  { id: 6, img: 'https://i.ibb.co.com/JwVc6cYv/fashion-homepage.webp' },
  { id: 7, img: 'https://i.ibb.co.com/yJMyhwP/stock-homepage.webp' },
];

const Slider2 = () => {
  const slides = [...slideList, ...slideList];

  return (
    <div className="overflow-hidden w-full py-6 sm:py-8 md:py-10">
      <div className="flex animate-scrollRightToLeft gap-4 sm:gap-6 w-[max-content]">
        {slides.map(({ id, img }) => (
          <div
            key={id}
            className="flex-shrink-0 rounded-xl overflow-hidden shadow-md sm:shadow-lg"
          >
            <img
              src={img}
              alt={`slide ${id}`}
              className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[160px] sm:h-[200px] md:h-[240px] lg:h-[300px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider2;
