// components/TeamSection.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const team = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    img: "/about-team-member-01.jpg",
    bio: "Visionary leader with 15+ years in digital innovation and design strategy.",
    social: { linkedin: "#", twitter: "#" },
    skills: ["Strategy", "Leadership", "Innovation"],
  },
  {
    name: "John Smith",
    role: "Lead Designer",
    img: "/about-team-member-02.jpg",
    bio: "Creative genius who transforms complex ideas into beautiful, intuitive designs.",
    social: { linkedin: "#", dribbble: "#" },
    skills: ["UI/UX", "Branding", "Prototyping"],
  },
  {
    name: "Alice Lee",
    role: "UX Researcher",
    img: "/about-team-member-03.jpg",
    bio: "User advocate who uncovers insights that drive meaningful design decisions.",
    social: { linkedin: "#", medium: "#" },
    skills: ["Research", "Analytics", "Testing"],
  },
  {
    name: "Mark Chan",
    role: "Frontend Engineer",
    img: "/about-team-member-04.jpg",
    bio: "Code craftsman who brings designs to life with pixel-perfect precision.",
    social: { linkedin: "#", github: "#" },
    skills: ["React", "TypeScript", "Animation"],
  },
];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [flippedCards, setFlippedCards] = useState(new Set());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const toggleCardFlip = (index) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-100 px-6 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-[#fd5001]/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
            className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight"
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
            Meet Our
            <br />
            <span className="text-gray-800">Dream Team</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A collective of passionate creatives, strategic thinkers, and
            technical wizards dedicated to crafting extraordinary digital
            experiences.
          </motion.p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative h-96 perspective-1000"
              variants={cardVariants}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
              whileHover={{ y: -10 }}
            >
              {/* Card Container */}
              <motion.div
                className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
                animate={{
                  rotateY: flippedCards.has(index) ? 180 : 0,
                }}
                transition={{ duration: 0.6, type: "spring" }}
                onClick={() => toggleCardFlip(index)}
              >
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <motion.div
                    className="relative w-full h-full bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    style={{
                      background:
                        hoveredMember === index
                          ? "linear-gradient(135deg, rgba(253, 80, 1, 0.1), rgba(255, 140, 0, 0.1))"
                          : "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    {/* Profile Image */}
                    <div className="relative z-10 p-6 flex flex-col items-center h-full">
                      <motion.div
                        className="relative mb-6"
                        animate={{
                          scale: hoveredMember === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        {/* Floating ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#fd5001]/30"
                          animate={{
                            scale: hoveredMember === index ? [1, 1.2, 1] : 1,
                            rotate: hoveredMember === index ? [0, 360] : 0,
                          }}
                          transition={{
                            duration: 2,
                            repeat: hoveredMember === index ? Infinity : 0,
                          }}
                        />
                      </motion.div>

                      {/* Member Info */}
                      <div className="text-center flex-1 flex flex-col justify-center">
                        <motion.h3
                          className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#fd5001] transition-colors duration-300"
                          animate={{
                            scale: hoveredMember === index ? 1.05 : 1,
                          }}
                        >
                          {member.name}
                        </motion.h3>
                        <p className="text-sm text-gray-600 mb-4 font-medium">
                          {member.role}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          {member.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-[#fd5001]/10 text-[#fd5001] rounded-full text-xs font-medium"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                delay: index * 0.1 + skillIndex * 0.1,
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>

                        {/* Flip indicator */}
                        <motion.div
                          className="text-xs text-gray-400 flex items-center justify-center gap-1"
                          animate={{
                            opacity: hoveredMember === index ? 1 : 0.6,
                          }}
                        >
                          <span>Click to flip</span>
                          <motion.span
                            animate={{ rotateY: [0, 360] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            🔄
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover particles */}
                    {hoveredMember === index && (
                      <motion.div className="absolute inset-0 pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#fd5001] rounded-full"
                            initial={{
                              x: Math.random() * 100 + "%",
                              y: Math.random() * 100 + "%",
                              opacity: 0,
                            }}
                            animate={{
                              y: ["100%", "0%"],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-xl border border-slate-700 overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#fd5001]/10 to-[#ff8c00]/10"></div>

                    <div className="relative z-10 p-6 flex flex-col justify-center items-center h-full text-white">
                      <motion.div
                        className="text-4xl mb-4"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        ✨
                      </motion.div>

                      <h3 className="text-lg font-bold mb-2 text-[#fd5001]">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4 text-center leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex gap-3 mb-4">
                        {Object.entries(member.social).map(
                          ([platform, link]) => (
                            <motion.a
                              key={platform}
                              href={link}
                              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs hover:bg-[#fd5001] transition-colors duration-300"
                              whileHover={{ scale: 1.2, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {platform === "linkedin" && "in"}
                              {platform === "twitter" && "tw"}
                              {platform === "dribbble" && "dr"}
                              {platform === "medium" && "md"}
                              {platform === "github" && "gh"}
                            </motion.a>
                          )
                        )}
                      </div>

                      <motion.button
                        className="text-xs text-gray-400 flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardFlip(index);
                        }}
                      >
                        <span>Flip back</span>
                        <span>🔄</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Our Team
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#fd5001] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
