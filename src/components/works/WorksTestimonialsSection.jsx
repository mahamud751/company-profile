"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, HealthTech Inc",
    company: "HealthTech Inc",
    avatar: "/avatar-01.jpg",
    rating: 5,
    text: "The team delivered an exceptional mobile wellness platform that exceeded our expectations. Their attention to detail and user-centric approach resulted in a 300% increase in user engagement.",
    project: "Unicorn Platform",
    highlight: "300% increase in user engagement",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, FinanceForAll",
    company: "FinanceForAll",
    avatar: "/avatar-02.jpg",
    rating: 5,
    text: "Outstanding work on our fintech platform. The inclusive design approach helped us reach underserved communities and achieve our mission of financial accessibility for all.",
    project: "Airtable Platform",
    highlight: "Reached underserved communities",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, MindfulTech",
    company: "MindfulTech",
    avatar: "/avatar-03.jpg",
    rating: 5,
    text: "ZenFlow became exactly what we envisioned - a beautiful, intuitive wellness app. The user feedback has been overwhelmingly positive, with 95% rating it 5 stars.",
    project: "ZenFlow App",
    highlight: "95% five-star ratings",
  },
  {
    id: 4,
    name: "David Park",
    position: "Product Director, NeoBank Pro",
    company: "NeoBank Pro",
    avatar: "/avatar-04.jpg",
    rating: 5,
    text: "The dashboard redesign transformed our banking experience. Users now complete transactions 40% faster, and our customer satisfaction scores have reached an all-time high.",
    project: "Neobank Dashboard",
    highlight: "40% faster transactions",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "VP Innovation, CollabCorp",
    company: "CollabCorp",
    avatar: "/avatar-05.jpg",
    rating: 5,
    text: "RemoteCollab has revolutionized how our distributed teams work together. The platform is intuitive, powerful, and has improved our productivity by 60%.",
    project: "RemoteCollab Suite",
    highlight: "60% productivity improvement",
  },
];

export default function WorksTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#fd5001]/5 to-orange-500/5 rounded-full blur-3xl"
          animate={
            isMounted
              ? {
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                }
              : {}
          }
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={
            isMounted
              ? {
                  scale: [1.2, 1, 1.2],
                  y: [0, -30, 0],
                }
              : {}
          }
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
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
            Client Success\n <br />
            <span className="text-gray-800">Stories</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our clients say about
            the transformative digital experiences we've created together.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="relative"
          variants={itemVariants}
          onHoverStart={() => setIsAutoPlaying(false)}
          onHoverEnd={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  isMounted={isMounted}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-[#fd5001] hover:text-white transition-all duration-300"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-[#fd5001] hover:text-white transition-all duration-300"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center gap-3 mt-8"
          variants={itemVariants}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#fd5001] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => goToTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div className="mt-20" variants={itemVariants}>
          <p className="text-center text-gray-500 mb-8 font-medium">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                className="text-gray-400 font-bold text-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {testimonial.company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TestimonialCard({ testimonial, isMounted }) {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isMounted ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Quote Icon */}
        <motion.div
          className="absolute -top-4 left-8 w-8 h-8 bg-[#fd5001] rounded-full flex items-center justify-center"
          animate={
            isMounted
              ? {
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Quote className="w-4 h-4 text-white" />
        </motion.div>

        {/* Rating */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Text */}
        <motion.blockquote
          className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          "{testimonial.text}"
        </motion.blockquote>

        {/* Highlight */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 text-[#fd5001] rounded-full text-sm font-semibold border border-[#fd5001]/20">
            ✨ {testimonial.highlight}
          </span>
        </motion.div>

        {/* Client Info */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00] p-0.5">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
            <motion.div
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"
              animate={
                isMounted
                  ? {
                      scale: [1, 1.2, 1],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="text-left">
            <div className="font-bold text-gray-800 text-lg">
              {testimonial.name}
            </div>
            <div className="text-gray-600">{testimonial.position}</div>
            <div className="text-[#fd5001] text-sm font-medium">
              {testimonial.project}
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-[#fd5001] rounded-full"
          animate={
            isMounted
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full"
          animate={
            isMounted
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }
              : {}
          }
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>
    </div>
  );
}
