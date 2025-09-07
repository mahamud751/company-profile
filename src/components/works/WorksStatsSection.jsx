"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  Award,
  Users,
  Star,
  TrendingUp,
  Heart,
  Eye,
  Clock,
  Target,
} from "lucide-react";

const stats = [
  {
    icon: <Award size={32} />,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful digital solutions delivered",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Users size={32} />,
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: <Star size={32} />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Average client satisfaction rate",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: <TrendingUp size={32} />,
    value: 250,
    suffix: "%",
    label: "ROI Increase",
    description: "Average return on investment",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: <Heart size={32} />,
    value: 15,
    suffix: "k+",
    label: "Users Engaged",
    description: "Total users reached",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: <Eye size={32} />,
    value: 1.2,
    suffix: "M",
    label: "Portfolio Views",
    description: "Total portfolio impressions",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: <Clock size={32} />,
    value: 99,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Projects delivered on schedule",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: <Target size={32} />,
    value: 95,
    suffix: "%",
    label: "Goal Achievement",
    description: "Client objectives met",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
  },
];

export default function WorksStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const statVariants = {
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
      className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#fd5001]/10 to-orange-500/10 rounded-full blur-3xl"
          animate={
            isMounted
              ? {
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }
              : {}
          }
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={
            isMounted
              ? {
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }
              : {}
          }
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
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
            animate={
              isMounted
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{ duration: 4, repeat: Infinity }}
          >
            Our Impact in
            <br />
            <span className="text-white">Numbers</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            These metrics represent our commitment to delivering exceptional
            digital experiences that drive real business results and user
            satisfaction.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative"
              variants={statVariants}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Card background with glassmorphism */}
              <motion.div
                className="relative p-6 md:p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 text-center h-full flex flex-col justify-center"
                style={{
                  background:
                    hoveredStat === index
                      ? `linear-gradient(135deg, rgba(253, 80, 1, 0.15), rgba(255, 140, 0, 0.15))`
                      : "rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                {/* Icon with floating animation */}
                <motion.div
                  className="relative z-10 mx-auto mb-4"
                  animate={{
                    y: hoveredStat === index ? [-5, 5, -5] : 0,
                    rotate: hoveredStat === index ? [0, 5, -5, 0] : 0,
                    scale: hoveredStat === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredStat === index ? Infinity : 0,
                  }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} backdrop-blur-sm border border-white/20 text-[#fd5001]`}
                  >
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Value */}
                <motion.div
                  className="relative z-10 text-4xl md:text-5xl font-black mb-2"
                  style={{
                    background:
                      hoveredStat === index
                        ? "linear-gradient(45deg, #fd5001, #ff8c00)"
                        : "linear-gradient(45deg, #ffffff, #f3f4f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  animate={{
                    scale: hoveredStat === index ? 1.1 : 1,
                  }}
                >
                  {isInView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                      delay={index * 0.2}
                      decimals={stat.suffix === "M" ? 1 : 0}
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.h3
                  className="relative z-10 text-white font-bold text-base md:text-lg mb-2"
                  animate={{
                    opacity: hoveredStat === index ? 1 : 0.9,
                  }}
                >
                  {stat.label}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="relative z-10 text-gray-400 text-xs md:text-sm leading-relaxed"
                  animate={{
                    opacity: hoveredStat === index ? 1 : 0.7,
                  }}
                >
                  {stat.description}
                </motion.p>

                {/* Floating particles effect */}
                {hoveredStat === index && (
                  <motion.div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    {[...Array(8)].map((_, i) => (
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
                    scale: hoveredStat === index ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredStat === index ? Infinity : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-2xl"
              animate={isMounted ? { rotate: [0, 360] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              🎯
            </motion.span>
            <span className="text-gray-300 font-medium">
              Driving measurable results since 2020
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
