// components/WhyPartnerSection.js

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Lightbulb,
  BarChart2,
  Layers,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Users size={32} />,
    title: "User-centric Core",
    desc: "We prioritize real users. By immersing in their world, we craft intuitive designs that feel natural and meaningful.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Expert Team",
    desc: "Our multidisciplinary team blends creativity with strategy to deliver exceptional, scalable results.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Strategic Innovation",
    desc: "We don't chase trends—we shape them. We design experiences that set benchmarks across industries.",
  },
  {
    icon: <BarChart2 size={32} />,
    title: "Data-Driven Decisions",
    desc: "We blend analytics with creativity, building solutions that are beautiful, measurable, and impactful.",
  },
  {
    icon: <Layers size={32} />,
    title: "Transparent Process",
    desc: "Expect clear, open communication through every phase of your project—we keep you confidently informed.",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Responsive Agility",
    desc: "Change is constant, and we're built to adapt—fast. Your designs stay ahead of evolving user needs.",
  },
];

export default function ServiceWhyPartnerSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: idx * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <motion.section
      className="text-white py-20 relative z-0 overflow-hidden"
      style={{ background: "rgba(26, 14, 28, 0.7)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #ff8c00 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #fd5001 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 px-4 relative z-10">
        {/* Left: Title + Image */}
        <motion.div
          className="md:w-1/3 flex flex-col justify-between"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line tracking-tight"
              style={{
                background:
                  "linear-gradient(45deg, #ffffff, #fd5001, #ff8c00, #ffffff)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              WHY{"\n"}PARTNER{"\n"}WITH{"\n"}MUSEMIND?
            </motion.h2>
          </div>
        </motion.div>

        {/* Right: Feature Cards */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="flex flex-col gap-3 p-6 border rounded-2xl shadow-lg transition-all duration-300 group border-white/20 bg-white/5 backdrop-blur-sm cursor-pointer"
              whileHover={{
                y: -5,
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-[#fd5001] to-[#ff8c00]">
                  {item.icon}
                </div>
                <span
                  className="text-lg font-semibold group-hover:text-[#fd5001] duration-200 transition"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  {item.title}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                {item.desc}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(253,80,1,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing gradient background blur */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#fd5001] rounded-full blur-[120px] pointer-events-none z-[-1] opacity-20" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fd5001] rounded-full blur-[100px] pointer-events-none z-[-1] opacity-20" />
    </motion.section>
  );
}
