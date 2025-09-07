"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

const iconClass = "w-12 h-12 text-white";

const InfinityIcon = () => (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.5 12a4.5 4.5 0 0 0-7-3.5 4.5 4.5 0 0 0-7 3.5 4.5 4.5 0 0 0 7 3.5 4.5 4.5 0 0 0 7-3.5z" />
  </svg>
);

const UserIcon = () => (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
  </svg>
);

const DollarIcon = () => (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
  </svg>
);

const PieChartIcon = () => (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v10l7 7" />
  </svg>
);

const StarIcon = () => (
  <svg
    className={iconClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15 11 22 11 17 16 19 22 12 18 5 22 7 16 2 11 9 11 12 2" />
  </svg>
);

const Card = ({ Icon, title, description, index, isMounted }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isMounted ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="relative group flex flex-col gap-6 rounded-3xl border border-white/20 p-8 md:p-10 lg:p-12 shadow-xl overflow-hidden transition-all duration-500 cursor-pointer"
      style={{
        background: isHovered
          ? "linear-gradient(135deg, rgba(253, 80, 1, 0.95), rgba(255, 140, 0, 0.95))"
          : "rgba(255, 255, 255, 0.9)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -15,
        scale: 1.03,
        rotateY: 8,
        rotateX: 8,
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(253, 80, 1, 0.5)"
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: "cover",
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        animate={{
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Icon Container */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.15, rotate: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-2xl flex items-center justify-center shadow-lg"
          animate={{
            rotate: isHovered ? [0, 15, -15, 0] : 0,
          }}
          transition={{ duration: 0.7 }}
        >
          <Icon />
        </motion.div>

        {/* Floating particles around icon */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-80"
            style={{
              top: `${20 + Math.sin(i * 1.57) * 20}px`,
              left: `${20 + Math.cos(i * 1.57) * 20}px`,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.8, 1, 0.8],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 1.5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      <div>
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-white transition-colors duration-500"
          whileHover={{ scale: 1.03 }}
          style={{
            color: isHovered ? "white" : "#1a0e1c",
          }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          style={{
            color: isHovered ? "rgba(255, 255, 255, 0.9)" : "#4b5563",
          }}
        >
          {description}
        </motion.p>
      </div>

      {/* Interactive Button */}
      <motion.div
        className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ y: 20 }}
        whileHover={{ y: 0 }}
      >
        <motion.button
          className="inline-flex items-center gap-2 font-semibold text-sm group/btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            color: isHovered ? "white" : "#fd5001",
          }}
        >
          <span>Learn More</span>
          <ArrowRight
            className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300"
            style={{
              color: isHovered ? "white" : "#fd5001",
            }}
          />
        </motion.button>
      </motion.div>

      {/* Corner decoration */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          borderColor: isHovered ? "rgba(255, 255, 255, 0.5)" : "#fd5001",
        }}
        initial={{ scale: 0, rotate: -45 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
};

const DesignForFutureSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      className="relative bg-gradient-to-br from-[#1a0e1c] via-[#2a1e2c] to-[#1a0e1c] py-20 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#fd5001" : i % 3 === 1 ? "#ff8c00" : "#ffffff",
            }}
            animate={{
              y: [-30, 30],
              x: [-20, 20],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 80, 1, 0.3) 0%, rgba(255, 140, 0, 0.1) 70%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [-20, 20, -20],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 140, 0, 0.3) 0%, rgba(253, 80, 1, 0.1) 70%, transparent 100%)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.6, 0.3],
            y: [-20, 20, -20],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Additional floating orbs */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border text-sm font-semibold mb-6"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest">Why Choose Us</span>
          </motion.div>

          <motion.h2
            className="font-serif text-4xl md:text-6xl text-center"
            style={{
              background:
                "linear-gradient(45deg, #ffffff, #fd5001, #ff8c00, #ffffff)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={
              isMounted
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{ duration: 6, repeat: Infinity }}
          >
            We Design for the Future to <br className="hidden md:block" />
            Drive Today's Success
          </motion.h2>

          <motion.p
            className="mt-6 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            Experience the perfect blend of innovation and creativity with our
            cutting-edge design solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          <Card
            Icon={InfinityIcon}
            title="Unlimited Revisions"
            description="We're committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine."
            index={0}
            isMounted={isMounted}
          />
          <Card
            Icon={UserIcon}
            title="Lifetime Support"
            description="With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it."
            index={1}
            isMounted={isMounted}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
        >
          <Card
            Icon={DollarIcon}
            title="Personalised Plans"
            description="Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment."
            index={2}
            isMounted={isMounted}
          />
          <Card
            Icon={PieChartIcon}
            title="Custom Design Solutions"
            description="Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget."
            index={3}
            isMounted={isMounted}
          />
          <Card
            Icon={StarIcon}
            title="24/7 Customer Support"
            description="Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results."
            index={4}
            isMounted={isMounted}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DesignForFutureSection;
