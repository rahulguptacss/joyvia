'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '../../types';

interface BlogDetailsProps {
  data?: any;
  post: BlogPost;
  recentPosts: BlogPost[];
}

export default function BlogDetails({ data, post, recentPosts }: BlogDetailsProps) {
  // If recentPosts has items, take top 5
  const sidebarPosts = (recentPosts || []).slice(0, 5);

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Blog Article Content (approx 68% width on desktop) */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-8 flex flex-col"
          >
            {/* Top Main Featured Image with Orange Date Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl sm:rounded-[24px] overflow-hidden bg-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 820px"
              />

              {/* Orange Date Badge at top-left corner with spring motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-[#fa5522] text-white rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-3 sm:py-2 flex flex-col items-center justify-center shadow-lg shadow-orange-600/25 select-none z-10 min-w-[48px] sm:min-w-[56px]"
              >
                <span className="text-lg sm:text-2xl font-black leading-none tracking-tight">
                  {post.day}
                </span>
                <span className="text-[9px] sm:text-[10.5px] font-extrabold tracking-wider uppercase mt-0.5 sm:mt-1 leading-none">
                  {post.month_year}
                </span>
              </motion.div>
            </motion.div>

            {/* Category Pill Tag */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.35 }}
              className="mt-4 sm:mt-5 mb-2"
            >
              <span className="inline-block bg-[#fff0eb] text-[#fa5522] text-[10.5px] sm:text-[11.5px] font-black px-3.5 py-1 sm:py-1.5 rounded-full uppercase tracking-wider shadow-2xs">
                {post.category}
              </span>
            </motion.div>

            {/* Main Title with Increased Font Size and Orange Highlight */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.4 }}
              className="text-[23px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[46px] font-black text-[#0b131c] tracking-tight leading-[1.18] sm:leading-[1.15] mb-3.5 sm:mb-4"
            >
              {post.title_line1 || post.title}{' '}
              {post.title_highlight && (
                <span className="text-[#fa5522]">{post.title_highlight}</span>
              )}
            </motion.h1>

            {/* Article Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              className="space-y-3 mb-5 sm:mb-6"
            >
              {post.content && post.content.length > 0 ? (
                post.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm md:text-[14.5px] text-gray-500 leading-relaxed font-normal"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-xs sm:text-sm md:text-[14.5px] text-gray-500 leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              )}
            </motion.div>

            {/* Tip / Step Highlight Section (e.g. 01 Place Your Router in the Right Location) */}
            {post.tip && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -2 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-1 sm:pt-2 group/tip"
              >
                {/* Left: 01 Badge + Heading + Text */}
                <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#fa5522] text-white flex items-center justify-center font-black text-lg sm:text-xl shrink-0 shadow-md shadow-orange-500/25 select-none transition-transform duration-300 group-hover/tip:scale-105">
                    {post.tip.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-[17px] font-bold text-[#0b131c] mb-1 sm:mb-1.5 leading-snug">
                      {post.tip.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] md:text-[13.5px] text-gray-500 leading-relaxed font-normal">
                      {post.tip.description}
                    </p>
                  </div>
                </div>

                {/* Right: Router Image Thumbnail */}
                <div className="relative w-full sm:w-[220px] md:w-[260px] lg:w-[280px] aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm shrink-0 bg-slate-100 border border-gray-100">
                  <Image
                    src={post.tip.image || '/images/service-detail-router.webp'}
                    alt={post.tip.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/tip:scale-105"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                </div>
              </motion.div>
            )}
          </motion.article>

          {/* Right Column: Sticky Recent Posts Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 w-full lg:sticky lg:top-28"
          >
            <div className="bg-white rounded-2xl sm:rounded-[24px] border border-gray-100 p-4 sm:p-5 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              <h3 className="text-base sm:text-lg md:text-xl font-black text-[#0b131c] tracking-tight mb-4 sm:mb-5">
                {data?.sidebar_title || 'Recent Posts'}
              </h3>

              <div className="space-y-3 sm:space-y-3.5 divide-y divide-gray-100">
                {sidebarPosts.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className={idx > 0 ? 'pt-3 sm:pt-3.5' : ''}
                  >
                    <Link
                      href={`/blogs/${item.slug}`}
                      className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer"
                    >
                      {/* Thumbnail Image */}
                      <div className="relative w-16 h-13 sm:w-20 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-300"
                          sizes="80px"
                        />
                      </div>

                      {/* Post Title & Date */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#0b131c] group-hover:text-[#fa5522] transition-colors line-clamp-2 leading-snug mb-1">
                          {item.title}
                        </h4>
                        <span className="text-[10.5px] sm:text-xs text-gray-400 font-medium">
                          {item.date_formatted || `${item.day} ${item.month_year.charAt(0) + item.month_year.slice(1).toLowerCase()}`}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  );
}
