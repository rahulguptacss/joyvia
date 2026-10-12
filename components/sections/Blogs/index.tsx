'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogsSectionData, BlogPost } from '../../types';

interface BlogsProps {
  data: BlogsSectionData;
}

export default function Blogs({ data }: BlogsProps) {
  const posts: BlogPost[] = data?.posts || [];
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6;
  const totalPages = Math.max(1, Math.min(3, Math.ceil(posts.length / POSTS_PER_PAGE) || 3));

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  // If fewer than 6 on page 2 or 3, loop around from posts
  const displayPosts = [...posts.slice(startIndex, startIndex + POSTS_PER_PAGE)];
  if (displayPosts.length < POSTS_PER_PAGE && posts.length > 0) {
    while (displayPosts.length < POSTS_PER_PAGE) {
      displayPosts.push(...posts.slice(0, POSTS_PER_PAGE - displayPosts.length));
    }
  }

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* 3x2 Grid (6 Cards per page matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6.5 lg:gap-7">
          {displayPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[22px] sm:rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_22px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(250,85,34,0.09)] hover:border-orange-100 transition-all duration-300 flex flex-col group h-full"
            >
              {/* Top Image Frame with Orange Date Badge */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Orange Date Badge at top-left corner */}
                <div className="absolute top-3.5 left-3.5 bg-[#fa5522] text-white rounded-xl px-2.5 py-1.5 flex flex-col items-center justify-center shadow-md select-none z-10 min-w-[50px]">
                  <span className="text-lg sm:text-[19px] font-black leading-none tracking-tight">
                    {post.day}
                  </span>
                  <span className="text-[9.5px] sm:text-[10px] font-extrabold tracking-wider uppercase mt-1 leading-none">
                    {post.month_year}
                  </span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 sm:p-5.5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category Badge */}
                  <span className="inline-block bg-[#fff0eb] text-[#fa5522] text-[10.5px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2.5 w-fit">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-[17px] font-extrabold text-[#0b131c] tracking-tight leading-snug mb-2 group-hover:text-[#fa5522] transition-colors">
                    <Link href={post.read_more_link || (post.slug ? `/blogs/${post.slug}` : '/blogs')}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <Link
                  href={post.read_more_link || (post.slug ? `/blogs/${post.slug}` : '/blogs')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-extrabold text-[#fa5522] hover:text-[#d84416] transition-colors mt-auto group/btn w-fit"
                >
                  <span>{post.read_more_text || 'Read More'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Pagination Controls: [ < ] [ 1 ] [ 2 ] [ 3 ] [ > ] */}
        <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-[#fa5522] hover:text-[#fa5522] text-xs transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }).map((_, pIdx) => {
            const pageNum = pIdx + 1;
            const isActive = currentPage === pageNum;

            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-[#fa5522] text-white shadow-orange-500/20'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-[#fa5522] hover:text-[#fa5522]'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Arrow */}
          <button
            type="button"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-[#fa5522] hover:text-[#fa5522] text-xs transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

      </div>
    </section>
  );
}
