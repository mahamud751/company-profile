'use client';
import Link from 'next/link';
import grainImage from "@/assets/images/grain.jpg";
import { useRef } from 'react';
import gsap from 'gsap';

export default function ProjectShowcase() {
  const btnOverlayRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(btnOverlayRef.current, {
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnOverlayRef.current, {
      width: "0%",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-white relative">
      <div className="max-w-3xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 mx-auto relative">
        {/* Dotted SVG Border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none -z-10"
          viewBox="0 0 104 104"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fd5001">
                <animate attributeName="offset" values="0%;100%" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#ff8c00">
                <animate attributeName="offset" values="100%;200%" dur="6s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <rect
            x="2"
            y="2"
            width="100"
            height="100"
            rx="6"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.6"
            strokeDasharray="3 3"
            strokeDashoffset="0"
            style={{
              animation: 'border-dash 12s linear infinite',
            }}
          />
          <style>{`
            @keyframes border-dash {
              to {
                stroke-dashoffset: -60;
              }
            }
          `}</style>
        </svg>

        {/* Inner Card */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 rounded-2xl bg-[#1A0E1C] p-6 sm:p-8 md:p-10 lg:p-12 shadow-md overflow-hidden">
          {/* Grain background */}
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: 'cover', backgroundRepeat: 'repeat' }}
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#fd5001] font-display tracking-tight">
            Your project here
          </h2>

          <p className="text-sm sm:text-base text-white/50 leading-relaxed max-w-xl">
            The proof is in our work. Check out{' '}
            <Link
              href="/case-studies"
              className="text-[#fd5001] underline transition hover:text-[#ff8c00]"
            >
              our case studies
            </Link>{' '}
            to learn how our product development services can transform your business.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#fd5001] text-white font-medium py-2.5 px-6 rounded-full overflow-hidden border-2 border-[#fd5001] transition-all duration-300"
            aria-label="Book a free discovery session"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={btnOverlayRef}
              className="absolute left-0 top-0 h-full z-0 bg-[#d43e01]"
              style={{ width: "0%" }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M2 21l21-9-21-9v7l15 2-15 2v7z" />
              </svg>
              Book Free Discovery Session
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
