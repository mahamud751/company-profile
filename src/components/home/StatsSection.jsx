"use client";
import { Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";

const statsData = [
  { number: "01", title: "Years of Experience", count: "6+" },
  { number: "02", title: "Country Served", count: "51+" },
  { number: "03", title: "Happy Clients", count: "200+" },
  { number: "04", title: "Industry we worked", count: "25+" },
];

const StatsSection = ({ header, span }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex overflow-hidden flex-col bg-white mt-40 sm:mt-60 md:mt-80" ref={ref}>
      <div className="justify-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center max-w-[1000px] mx-auto">
          <Typography
            variant="h6"
            color="initial"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
          >
            {header}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            {span}
          </Typography>
        </div>
      </div>

      <div className="flex flex-col self-center mt-8 sm:mt-12 md:mt-16 w-full max-w-[1170px] p-3 md:p-0">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-4 sm:p-6 md:p-8 rounded-2xl min-h-[300px] sm:min-h-[400px] md:min-h-[505px]
                ${
                  isVisible
                    ? "animate__animated " +
                      (index < 2 ? "animate__fadeInLeft" : "animate__fadeInRight")
                    : ""
                }`}
              style={{
                backgroundColor: index === 0 ? "#DD6504" : "#E8E8E8",
                color: index === 0 ? "white" : "black",
              }}
            >
              <div className="text-lg sm:text-xl md:text-2xl">
                {stat.number}
              </div>
              
              <div className="flex flex-col justify-end h-full">
                <div className="text-xl sm:text-2xl md:text-3xl pb-4 border-b border-zinc-300">
                  {stat.title}
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl mt-6 sm:mt-8">
                  {stat.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
