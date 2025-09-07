"use client";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Briefcase,
  Users,
  Star,
  Target,
  Zap,
  Heart,
  Trophy,
} from "lucide-react";
import CountUp from "react-countup";
import { useRef, useState } from "react";

const achievements = [
  {
    icon: <Briefcase size={40} className="text-[#fd5001] mb-4" />,
    count: 10,
    suffix: "+",
    desc: "Years of Crafting Digital Experiences",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: <Users size={40} className="text-[#fd5001] mb-4" />,
    count: 50,
    suffix: "+",
    desc: "Global Brands Collaborated With",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: <Award size={40} className="text-[#fd5001] mb-4" />,
    count: 20,
    suffix: "+",
    desc: "Awards for Creative Excellence",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: <Star size={40} className="text-[#fd5001] mb-4" />,
    count: 99,
    suffix: "%",
    desc: "Client Satisfaction Rate",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-500/10 to-pink-500/10",
  },
  {
    icon: <Target size={40} className="text-[#fd5001] mb-4" />,
    count: 200,
    suffix: "+",
    desc: "Projects Successfully Delivered",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: <Zap size={40} className="text-[#fd5001] mb-4" />,
    count: 95,
    suffix: "%",
    desc: "On-Time Project Completion",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10",
  },
  {
    icon: <Heart size={40} className="text-[#fd5001] mb-4" />,
    count: 1000,
    suffix: "+",
    desc: "Happy Users Worldwide",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: <Trophy size={40} className="text-[#fd5001] mb-4" />,
    count: 15,
    suffix: "+",
    desc: "Industry Recognitions",
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-500/10 to-yellow-500/10",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white px-6 py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#fd5001]/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight"
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
            Our Journey in
            <br />
            <span className="text-white">Numbers</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every milestone tells a story of dedication, creativity, and the
            relentless pursuit of digital excellence that defines our legacy.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
          variants={containerVariants}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Card background with glassmorphism */}
              <motion.div
                className="relative p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 text-center h-full flex flex-col justify-center items-center"
                style={{
                  background:
                    hoveredCard === index
                      ? `linear-gradient(135deg, rgba(253, 80, 1, 0.15), rgba(255, 140, 0, 0.15))`
                      : "rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                {/* Icon with floating animation */}
                <motion.div
                  className="relative z-10 mb-6"
                  animate={{
                    y: hoveredCard === index ? [-5, 5, -5] : 0,
                    rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                    scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredCard === index ? Infinity : 0,
                  }}
                >
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
                    {item.icon}
                  </div>
                </motion.div>

                {/* Counter */}
                <motion.div
                  className="relative z-10 text-5xl md:text-6xl font-black mb-4"
                  style={{
                    background:
                      hoveredCard === index
                        ? "linear-gradient(45deg, #fd5001, #ff8c00)"
                        : "linear-gradient(45deg, #ffffff, #f3f4f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  animate={{
                    scale: hoveredCard === index ? 1.1 : 1,
                  }}
                >
                  {isInView && (
                    <CountUp
                      end={item.count}
                      duration={2.5}
                      suffix={item.suffix}
                      delay={index * 0.2}
                    />
                  )}
                </motion.div>

                {/* Description */}
                <motion.p
                  className="relative z-10 text-gray-300 text-sm leading-relaxed font-medium"
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0.8,
                  }}
                >
                  {item.desc}
                </motion.p>

                {/* Floating particles effect */}
                {hoveredCard === index && (
                  <motion.div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#fd5001] rounded-full"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: "100%",
                          opacity: 0,
                        }}
                        animate={{
                          y: "0%",
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                )}

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/5 to-[#ff8c00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: hoveredCard === index ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredCard === index ? Infinity : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section with additional info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              🚀
            </motion.span>
            <span className="text-gray-300 font-medium">
              And we're just getting started!
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
