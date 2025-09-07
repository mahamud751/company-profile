import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function LatestBlogs({ blogs }) {
  const blogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  // Ref to the top container of the section
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!blogs || blogs.length === 0) {
    return (
      <motion.p
        className="p-6 text-center text-white/70"
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        No blog posts found.
      </motion.p>
    );
  }

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Calculate which blogs to show for current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const visibleBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  // Handlers for arrows
  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <motion.div
      ref={sectionRef}
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div>
          <motion.p
            className="font-semibold text-sm uppercase tracking-wider"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
            initial={{ opacity: 0, x: -10 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Latest posts
          </motion.p>
          <motion.h1
            className="text-3xl font-bold mt-1"
            style={{ color: "#fd5001" }}
            initial={{ opacity: 0, x: -10 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Protoja Blog
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base mt-1"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
            initial={{ opacity: 0, x: -10 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Interviews, tips, guides, industry best practices
          </motion.p>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/blogs"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full hover:rounded-2xl transition text-sm font-medium border border-white/20 backdrop-blur-sm"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "white",
            }}
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {visibleBlogs.map((card, index) => (
          <motion.div
            key={card._id}
            className="group rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              rotateY: 5,
              rotateX: 5,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={card.photos[0]}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <motion.h2
                  className="text-lg font-semibold transition line-clamp-2"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                  whileHover={{ x: 5 }}
                >
                  {card.name}
                </motion.h2>
                <ArrowUpRight className="w-4 h-4 text-[#fd5001] group-hover:text-[#ff8c00] transition-colors" />
              </div>
              <motion.p
                className="text-sm line-clamp-2"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {card.desc}
              </motion.p>
            </div>

            <div className="px-4 py-2 border-t border-white/10 text-xs flex justify-between items-center">
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                {card.author}
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                {new Date(card.createdAt).toLocaleDateString()}
              </span>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(253,80,1,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center space-x-4 mt-8 mb-6">
        <motion.button
          onClick={goPrev}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-white/10"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
          whileHover={currentPage !== 1 ? { y: -3, scale: 1.1 } : {}}
          whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <ArrowLeft className="w-4 h-4" style={{ color: "white" }} />
        </motion.button>

        <motion.button
          onClick={goNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-white/10"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
          whileHover={currentPage !== totalPages ? { y: -3, scale: 1.1 } : {}}
          whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <ArrowRight className="w-4 h-4" style={{ color: "white" }} />
        </motion.button>
      </div>
    </motion.div>
  );
}
