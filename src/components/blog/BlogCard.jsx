"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pagination from "./Pagination";
import Link from "next/link";
import mockBlogData from "@/data/mockBlogData .js";

export default function BlogCard() {
  const [blogData, setBlogData] = useState([]);
  const [filteredData, setFilteredData] = useState(mockBlogData);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(8);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setBlogData(mockBlogData);
    setFilteredData(mockBlogData);
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to get a vibrant color based on blog type
  const getBlogTypeColor = (type) => {
    const colors = {
      technology: "from-blue-500 to-purple-600",
      design: "from-[#fd5001] to-[#ff8c00]",
      productivity: "from-green-500 to-teal-600",
      lifestyle: "from-pink-500 to-rose-600",
      business: "from-amber-500 to-orange-600",
      default: "from-gray-500 to-gray-600",
    };
    return colors[type] || colors.default;
  };

  return (
    <>
      <section className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
          {currentBlogs?.map((card, index) => (
            <Link href={`/blog-details/${card._id}`} key={index}>
              <motion.div
                key={card._id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isMounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.98 }}
                className="relative group rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm cursor-pointer"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getBlogTypeColor(
                    card.type
                  )} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0`}
                />

                {/* Image Container with Enhanced Animation */}
                <motion.div
                  className="relative w-full h-48 overflow-hidden rounded-t-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={card.photos[0]}
                    alt={card.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-t-2xl group-hover:scale-110 transition duration-500"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                    style={{
                      background: "rgba(255, 255, 255, 0.15)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "white",
                    }}
                    initial={{ scale: 0 }}
                    animate={isMounted ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {card.type.charAt(0).toUpperCase() + card.type.slice(1)}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="p-5 relative z-10">
                  <div className="flex justify-between items-start group">
                    <motion.h2
                      className="text-xl font-bold h-16 mb-2 group-hover:text-white transition-colors duration-300"
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isMounted ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {card.name}
                    </motion.h2>
                    <motion.div
                      whileHover={{ x: 5, y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <MdArrowOutward
                        size={20}
                        className="text-white group-hover:text-[#ff8c00] transition-colors duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.p
                    className="text-gray-300 mt-2 text-sm mb-4 line-clamp-2"
                    initial={{ opacity: 0.7, y: 20 }}
                    animate={isMounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {card.desc}
                  </motion.p>

                  {/* Author and Date */}
                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00] flex items-center justify-center text-white text-xs font-bold mr-2">
                        {card.author.charAt(0)}
                      </div>
                      <motion.span
                        className="text-white text-sm font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isMounted ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {card.author}
                      </motion.span>
                    </div>
                    <motion.span
                      className="text-gray-400 text-xs"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isMounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {new Date(card.createdAt).toLocaleDateString()}
                    </motion.span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(253,80,1,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>

        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={filteredData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </section>
    </>
  );
}
