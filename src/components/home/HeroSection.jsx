"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Star,
  Zap,
  Play,
  Award,
  TrendingUp,
} from "lucide-react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  // Reduced parallax effect for better scrolling experience

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Enhanced image array for rotating display
  const heroImages = [
    "/assets/banner.png",
    "/assets/service/website-development.jpg",
    "/assets/service/web-app-design.jpg",
    "/assets/scrool/4.png",
    "/assets/scrool/1.png",
  ];

  const logos = [
    {
      id: 1,
      src: "/assets/logos/comviva.png",
      alt: "Comviva",
      width: 90,
      height: 32,
    },
    {
      id: 2,
      src: "/assets/logos/damac.png",
      alt: "damac",
      width: 90,
      height: 32,
    },
    {
      id: 3,
      src: "/assets/logos/licious.png",
      alt: "licious",
      width: 90,
      height: 32,
    },
    {
      id: 4,
      src: "/assets/logos/mahindra.png",
      alt: "mahindra",
      width: 90,
      height: 32,
    },
    {
      id: 5,
      src: "/assets/logos/sony.png",
      alt: "sony",
      width: 90,
      height: 32,
    },
    {
      id: 6,
      src: "/assets/logos/tata.png",
      alt: "tata",
      width: 90,
      height: 32,
    },
  ];

  const logoItemWidth = 150;
  const logosSetWidth = logos.length * logoItemWidth;

  const btnOverlayRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) / 25,
        y: (clientY - innerHeight / 2) / 25,
      });
    };

    // Auto-rotate hero images
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(imageInterval);
    };
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative w-full h-screen overflow-hidden"
      style={{ y }}
    >
      {/* Enhanced Multi-Layer Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/50 via-transparent to-amber-50/50" />
      <div className="absolute inset-0 bg-gradient-to-bl from-[#fd5001]/5 via-transparent to-[#ff8c00]/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(253,80,1,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,140,0,0.06)_0%,transparent_50%)]" />
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Floating Shapes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Interactive Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-[#ff8c00]/20 to-[#fd5001]/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
            scale: [1.3, 1, 1.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Geometric Patterns */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-[#fd5001] rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-6 h-6 border-2 border-[#ff8c00] rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Enhanced Grid Overlay */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(253, 80, 1, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(253, 80, 1, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0 0", "50px 50px", "0 0"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Icons */}
        {[Sparkles, Star, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `${20 + index * 30}%`,
              right: `${10 + index * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + index * 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <Icon className="w-6 h-6 text-[#fd5001] opacity-30" />
          </motion.div>
        ))}

        {/* Animated Lines */}
        <motion.svg
          className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20"
          viewBox="0 0 100 100"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <motion.path
            d="M10,50 Q50,10 90,50 T90,50"
            stroke="#fd5001"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.svg>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-screen"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Enhanced Left Content */}
        <motion.div
          className="space-y-8 text-center md:text-left"
          variants={itemVariants}
        >
          {/* Floating Achievement Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-white/30 text-sm font-semibold text-[#fd5001] mb-8 shadow-lg"
            variants={floatingVariants}
            animate="animate"
          >
            <Award className="w-5 h-5" />
            <span>Award-Winning Design Studio</span>
            <motion.div
              className="w-3 h-3 bg-[#fd5001] rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Enhanced Title with Multiple Animations */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight relative"
            variants={itemVariants}
          >
            {/* Animated Background Text Effect */}
            <motion.div className="absolute inset-0 z-0">
              <motion.span
                className="block mb-2 text-[#fd5001]/10"
                animate={{
                  x: [0, 5, 0],
                  y: [0, 3, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Leading UI UX
              </motion.span>
              <motion.span
                className="block text-gray-800/10"
                animate={{
                  x: [0, -3, 0],
                  y: [0, 2, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Design Agency
              </motion.span>
            </motion.div>

            {/* Main Text */}
            <div className="relative z-10">
              <motion.span
                className="block mb-2"
                style={{
                  background:
                    "linear-gradient(45deg, #fd5001, #ff8c00, #fd5001)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(253, 80, 1, 0.5)",
                }}
              >
                {"Leading UI UX".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-transparent bg-clip-text"
                animate={{
                  backgroundSize: ["100%", "200%", "100%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(107, 114, 128, 0.5)",
                }}
              >
                {"Design Agency".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            {/* Floating Decoration */}
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 border-2 border-[#fd5001]/20 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-2 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full opacity-30"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-700 max-w-md md:max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium"
            variants={itemVariants}
          >
            <motion.span className="text-[#fd5001] font-bold">
              Transforming ideas
            </motion.span>{" "}
            into stunning digital experiences that captivate users and{" "}
            <motion.span
              className="bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-transparent bg-clip-text font-bold"
              whileHover={{ scale: 1.05 }}
            >
              drive business growth
            </motion.span>
          </motion.p>

          {/* Interactive Statistics */}
          <motion.div
            className="grid grid-cols-3 gap-8 py-8"
            variants={itemVariants}
          >
            {[
              { number: "150+", label: "Projects", icon: TrendingUp },
              { number: "98%", label: "Success Rate", icon: Award },
              { number: "50+", label: "Happy Clients", icon: Star },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div className="flex justify-center mb-2">
                  <metric.icon className="w-6 h-6 text-[#fd5001] group-hover:scale-110 transition-transform" />
                </motion.div>
                <motion.div
                  className="text-3xl sm:text-4xl font-black text-[#fd5001] mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  {metric.number}
                </motion.div>
                <div className="text-sm font-semibold text-gray-600">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full overflow-hidden font-bold text-white transition-all duration-300 shadow-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Enhanced Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full" />
              <motion.div
                ref={btnOverlayRef}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#ff8c00] to-[#fd5001] rounded-full"
                style={{ width: "0%" }}
              />

              {/* Button Content with Icons */}
              <span className="relative z-10 flex items-center gap-3 text-lg">
                <Play className="w-5 h-5" />
                Book A Call
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>

              {/* Multiple Glow Effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="#works"
              className="group relative inline-flex items-center text-lg font-bold text-[#fd5001] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">See Our Works</span>
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.div>
              <motion.span
                className="absolute left-0 -bottom-1 h-1 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full"
                initial={{ width: "80%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Enhanced Logo Carousel */}
          <motion.div className="relative pt-8 mt-8" variants={itemVariants}>
            <motion.div className="text-center mb-8">
              <motion.p
                className="text-sm font-bold text-gray-500 flex items-center justify-center md:justify-start gap-3 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-[#fd5001] to-[#ff8c00]"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
                TRUSTED BY INDUSTRY LEADERS
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-[#ff8c00] to-[#fd5001]"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </motion.p>
            </motion.div>

            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow-2xl">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#fd5001]/5 via-transparent to-[#ff8c00]/5"
                animate={{
                  background: [
                    "linear-gradient(to right, rgba(253, 80, 1, 0.05), transparent, rgba(255, 140, 0, 0.05))",
                    "linear-gradient(to right, rgba(255, 140, 0, 0.05), transparent, rgba(253, 80, 1, 0.05))",
                    "linear-gradient(to right, rgba(253, 80, 1, 0.05), transparent, rgba(255, 140, 0, 0.05))",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                className="flex items-center"
                style={{ width: logosSetWidth * 2 }}
                animate={{ x: [-0, -logosSetWidth] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...logos, ...logos].map((item, index) => (
                  <motion.div
                    key={`logo-${item.id}-${index}`}
                    className="flex-shrink-0 w-[150px] px-4 group"
                    whileHover={{ scale: 1.15, y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      {/* Enhanced Hover Effects */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-[#fd5001]/30 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Right Content with Dynamic Images */}
        <motion.div
          className="w-full flex justify-center relative"
          variants={itemVariants}
        >
          {/* Main Image Container with 3D Effects */}
          <motion.div
            className="relative group"
            style={{
              rotateY: mousePosition.x * 0.5,
              rotateX: mousePosition.y * -0.3,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Enhanced Image with Rotation */}
            <motion.div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative"
                >
                  <Image
                    src={heroImages[currentImageIndex]}
                    width={660}
                    height={660}
                    alt={`UI/UX Design Showcase ${currentImageIndex + 1}`}
                    priority
                    className="w-full max-w-[340px] sm:max-w-md md:max-w-lg lg:max-w-[660px] h-auto rounded-3xl transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay Effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#fd5001]/20 via-transparent to-[#ff8c00]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(to top, rgba(253, 80, 1, 0.2), transparent, rgba(255, 140, 0, 0.1))",
                        "linear-gradient(to top, rgba(255, 140, 0, 0.2), transparent, rgba(253, 80, 1, 0.1))",
                        "linear-gradient(to top, rgba(253, 80, 1, 0.2), transparent, rgba(255, 140, 0, 0.1))",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Border Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#fd5001] via-[#ff8c00] to-[#fd5001] rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, #fd5001, #ff8c00, #fd5001)",
                    "linear-gradient(90deg, #ff8c00, #fd5001, #ff8c00)",
                    "linear-gradient(135deg, #fd5001, #ff8c00, #fd5001)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            {/* Floating UI Elements Around Image */}
            <motion.div
              className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-gray-700">
                  Live Project
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-12 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-2xl p-4 shadow-xl"
              animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <Star className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30"
              animate={{
                x: [-5, 5, -5],
                y: [5, -5, 5],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#fd5001]" />
                <div>
                  <div className="text-xs font-bold text-gray-600">Growth</div>
                  <div className="text-lg font-black text-[#fd5001]">+150%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>

            {/* Particle Effects Around Image */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#fd5001] rounded-full"
                style={{
                  top: `${20 + Math.sin(i * 0.8) * 200}px`,
                  left: `${20 + Math.cos(i * 0.8) * 200}px`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Image Navigation Dots */}
            <motion.div
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {heroImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-[#fd5001] scale-125"
                      : "bg-gray-300 hover:bg-[#fd5001]/50"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
