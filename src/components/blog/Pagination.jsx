"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Pagination({
  blogsPerPage,
  totalBlogs,
  paginate,
  currentPage,
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Limit the number of page buttons displayed
  const maxVisiblePages = 5;
  const halfVisible = Math.floor(maxVisiblePages / 2);
  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(pageNumbers.length, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const visiblePages = pageNumbers.slice(startPage - 1, endPage);

  return (
    <motion.nav
      className="flex justify-center items-center gap-2 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Previous Button */}
      <motion.button
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
          currentPage === 1
            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
            : "bg-white/10 text-white hover:bg-[#fd5001] hover:text-white"
        }`}
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        whileHover={currentPage > 1 ? { scale: 1.1 } : {}}
        whileTap={currentPage > 1 ? { scale: 0.9 } : {}}
        disabled={currentPage === 1}
      >
        &laquo;
      </motion.button>

      {/* First Page */}
      {startPage > 1 && (
        <>
          <motion.button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#fd5001] transition-all duration-300"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            1
          </motion.button>
          {startPage > 2 && <span className="text-white/50 px-2">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {visiblePages.map((number) => (
        <motion.button
          key={number}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
            currentPage === number
              ? "bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white"
              : "bg-white/10 text-white hover:bg-[#fd5001]"
          }`}
          onClick={() => paginate(number)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: number * 0.05 }}
        >
          {number}
        </motion.button>
      ))}

      {/* Last Page */}
      {endPage < pageNumbers.length && (
        <>
          {endPage < pageNumbers.length - 1 && (
            <span className="text-white/50 px-2">...</span>
          )}
          <motion.button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#fd5001] transition-all duration-300"
            onClick={() => paginate(pageNumbers.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {pageNumbers.length}
          </motion.button>
        </>
      )}

      {/* Next Button */}
      <motion.button
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
          currentPage === pageNumbers.length
            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
            : "bg-white/10 text-white hover:bg-[#fd5001] hover:text-white"
        }`}
        onClick={() =>
          currentPage < pageNumbers.length && paginate(currentPage + 1)
        }
        whileHover={currentPage < pageNumbers.length ? { scale: 1.1 } : {}}
        whileTap={currentPage < pageNumbers.length ? { scale: 0.9 } : {}}
        disabled={currentPage === pageNumbers.length}
      >
        &raquo;
      </motion.button>
    </motion.nav>
  );
}
