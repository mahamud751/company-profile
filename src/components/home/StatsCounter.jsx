"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, TrendingUp } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

function useCountUp(startCounting, target, duration = 2000) {
  const [count, setCount] = useState(0);
  const rafId = useRef();

  useEffect(() => {
    if (!startCounting) {
      setCount(0);
      return;
    }

    let start = null;

    function animate(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    rafId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId.current);
  }, [startCounting, target, duration]);

  return count;
}

const stats = [
  { label: "Team", value: 80, suffix: "+" },
  { label: "Projects", value: 230, suffix: "+" },
  { label: "Years", value: 9, suffix: "+" },
  { label: "Industries", value: 25, suffix: "+" },
  { label: "Awards", value: 10, suffix: "+" },
];

export default function StatsCounter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

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
            className="absolute w-1 h-1 bg-[#fd5001] rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15],
              x: [-8, 8],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-[#ff8c00]/10 to-[#fd5001]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 text-center relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold text-white mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="uppercase tracking-widest">Our Achievements</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{
              background: "linear-gradient(45deg, #fd5001, #ff8c00, #fd5001)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="italic font-serif">Our</span>{" "}
            <span className="font-semibold">STORY, BY NUMBERS</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {stats.map(({ label, value, suffix }, idx) => (
            <StatBlock
              key={label}
              label={label}
              value={value}
              suffix={suffix}
              delay={idx * 200}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function StatBlock({ label, value, suffix, delay, index }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [isHovered, setIsHovered] = useState(false);
  const count = useCountUp(inView, value, 1200);

  return (
    <motion.div
      ref={ref}
      className="relative group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl overflow-hidden cursor-pointer"
      style={{
        background: isHovered
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(253, 80, 1, 0.1))"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        animate={{
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Floating Icon */}
      <motion.div
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0, rotate: -45 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Sparkles className="w-4 h-4 text-[#fd5001]" />
      </motion.div>

      {/* Count Display */}
      <motion.span
        className="text-4xl sm:text-5xl md:text-6xl font-bold tabular-nums tracking-tight text-white mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.1 + 0.3,
        }}
      >
        <motion.span
          animate={{
            textShadow: isHovered
              ? "0 0 20px rgba(253, 80, 1, 0.5)"
              : "0 0 0px rgba(253, 80, 1, 0)",
          }}
        >
          {count}
        </motion.span>
        {suffix}
      </motion.span>

      {/* Label */}
      <motion.span
        className="text-sm sm:text-base text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        {label}
      </motion.span>

      {/* Progress Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, delay: index * 0.1 + 0.8 }}
      />

      {/* Corner decoration */}
      <motion.div
        className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#fd5001]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0, rotate: 45 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#fd5001] rounded-full opacity-0 group-hover:opacity-60"
          style={{
            top: `${30 + Math.sin(i * 2.1) * 20}%`,
            left: `${30 + Math.cos(i * 2.1) * 20}%`,
          }}
          animate={{
            y: isHovered ? [-3, 3] : 0,
            opacity: isHovered ? [0.6, 1, 0.6] : 0,
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: isHovered ? Infinity : 0,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
}
