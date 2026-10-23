'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WhyChooseSectionData } from '../../types';

interface WhyChooseProps {
  data: WhyChooseSectionData;
}

export default function WhyChoose({ data }: WhyChooseProps) {
  // SVG Icon fallbacks in case icon_image is not loaded
  const renderFallbackIcon = (name: string) => {
    switch (name) {
      case 'Router':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#fa5522]" viewBox="0 0 32 32" fill="none" stroke="currentColor">
            <rect x="6" y="16" width="20" height="8" rx="2" strokeWidth="1.8" />
            <circle cx="10" cy="20" r="1" fill="currentColor" />
            <circle cx="13" cy="20" r="1" fill="currentColor" />
            <circle cx="16" cy="20" r="1" fill="currentColor" />
            <line x1="16" y1="16" x2="16" y2="8" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 11C11.2 12.2 10.8 13.5 10.8 15" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M9 8.5C7.8 10.3 7 12.5 7 15" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M20 11C20.8 12.2 21.2 13.5 21.2 15" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M23 8.5C24.2 10.3 25 12.5 25 15" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'Laptop5G':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#fa5522]" viewBox="0 0 32 32" fill="none" stroke="currentColor">
            <rect x="7" y="9" width="18" height="12" rx="1.5" strokeWidth="1.8" />
            <path d="M4 22H28L26.5 21H5.5L4 22Z" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M13 6C14 5 15 4.5 16 4.5C17 4.5 18 5 19 6" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M14.5 7.5C15 7 15.5 6.7 16 6.7C16.5 6.7 17 7 17.5 7.5" strokeWidth="1.8" strokeLinecap="round" />
            <text x="16" y="18" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="currentColor" fontFamily="sans-serif">5G</text>
          </svg>
        );
      case 'Screen4K':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#fa5522]" viewBox="0 0 32 32" fill="none" stroke="currentColor">
            <rect x="5" y="7" width="22" height="15" rx="2" strokeWidth="1.8" />
            <line x1="16" y1="22" x2="16" y2="25" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="11" y1="25" x2="21" y2="25" strokeWidth="1.8" strokeLinecap="round" />
            <text x="16" y="17.5" textAnchor="middle" fontSize="8" fontWeight="900" fill="currentColor" fontFamily="sans-serif" letterSpacing="-0.5">4K</text>
          </svg>
        );
      case 'Support24':
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#fa5522]" viewBox="0 0 32 32" fill="none" stroke="currentColor">
            <path d="M12 7H22C23.65 7 25 8.35 25 10V18C25 19.65 23.65 21 22 21H18L14 24V21H12C10.35 21 9 19.65 9 18V10C9 8.35 10.35 7 12 7Z" strokeWidth="1.8" strokeLinejoin="round" />
            <text x="17" y="16.5" textAnchor="middle" fontSize="7" fontWeight="900" fill="currentColor" fontFamily="sans-serif">24</text>
            <path d="M7 11C6.2 12.5 6 14.5 6.5 16.5C7.2 19 9 21.2 11.5 22.2C13 22.8 14.8 23 16 22.5" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 10L8 12M15 22L17 24" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden">
      {/* Decorative Bottom-Left Wave Arc Lines from Screenshot with subtle animation */}
      <motion.div
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-72 sm:w-80 md:w-[480px] h-40 sm:h-52 pointer-events-none -z-0 opacity-60"
      >
        <svg
          viewBox="0 0 480 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path d="M-60 215 C 60 220, 140 175, 260 200 C 360 220, 420 190, 480 180" stroke="#fcdcd3" strokeWidth="1.2" />
          <path d="M-60 225 C 65 230, 148 185, 268 210 C 368 230, 428 200, 488 190" stroke="#fcdcd3" strokeWidth="1.2" />
          <path d="M-60 235 C 70 240, 156 195, 276 220 C 376 240, 436 210, 496 200" stroke="#fcdcd3" strokeWidth="1.2" />
          <path d="M-60 245 C 75 250, 164 205, 284 230 C 384 250, 444 220, 504 210" stroke="#fcdcd3" strokeWidth="1.2" />
          <path d="M-60 255 C 80 260, 172 215, 292 240 C 392 260, 452 230, 512 220" stroke="#fcdcd3" strokeWidth="1.2" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Heading + 2x2 Feature Cards */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            
            {/* Subtitle tag with orange dash */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="w-5 sm:w-6 h-[2px] bg-[#fa5522] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#fa5522]">
                {data.subtitle || 'OUR FACILITY'}
              </span>
            </motion.div>

            {/* Main Heading (Dual Line: Navy + Orange) */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a1128] leading-[1.18] tracking-tight mb-2.5 sm:mb-3"
            >
              {data.title_line1 || 'More Than Internet,'}
              <br />
              <span className="text-[#fa5522]">{data.title_highlight || 'A Better Experience'}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-700 text-xs sm:text-sm max-w-xl leading-relaxed mb-5 sm:mb-6"
            >
              {data.description}
            </motion.p>

            {/* 4 Cards (2x2 Grid) - Compact with reduced gap and motion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 lg:gap-3.5">
              {data.items?.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -3, scale: 1.015 }}
                  className="bg-white rounded-2xl sm:rounded-[20px] border border-slate-100 shadow-[0_3px_15px_rgba(0,0,0,0.02)] p-3 sm:p-3.5 lg:p-4 flex items-center gap-3 sm:gap-3.5 transition-all duration-300 hover:border-[#fa5522]/30 hover:shadow-[0_8px_25px_rgba(250,85,34,0.08)] group cursor-pointer"
                >
                  {/* Peach Circular Icon Badge (Compact & Animated on hover) */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon_image ? (
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                        <Image
                          src={item.icon_image}
                          alt={item.title}
                          fill
                          className="object-contain"
                          sizes="36px"
                        />
                      </div>
                    ) : (
                      renderFallbackIcon(item.icon)
                    )}
                  </div>

                  {/* Card Title & Description - Black Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#0a1128] tracking-tight mb-0.5 sm:mb-1 group-hover:text-[#fa5522] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[11px] sm:text-xs leading-normal sm:leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Woman Cutout + Separate Animated Background Effects */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative mt-4 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] flex items-end justify-center min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]">
              
              {/* 1. Background Dot Grid Matrix (Top Right) with pulse */}
              <motion.div
                animate={{ opacity: [0.55, 0.9, 0.55] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1 sm:top-2 right-2 sm:right-4 grid grid-cols-6 gap-1.5 sm:gap-2 pointer-events-none z-[1]"
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#fba27d]" />
                ))}
              </motion.div>

              {/* 2. Soft Blush Glow (Left Background) */}
              <div className="absolute top-6 left-2 w-44 sm:w-56 h-44 sm:h-56 bg-[#fff0eb] rounded-full blur-2xl pointer-events-none z-[1]" />

              {/* 3. Secondary Peach Card (Right Tab) with gentle drift */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-16 sm:top-20 right-0 sm:right-2 w-36 sm:w-48 h-56 sm:h-72 bg-[#fba27d] rounded-[24px] sm:rounded-[32px] pointer-events-none z-[2] shadow-sm"
              />

              {/* 4. Primary Vibrant Orange Card with Wi-Fi Icon & breathing motion */}
              <motion.div
                animate={{ y: [0, -5, 0], scale: [1, 1.01, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 sm:top-12 left-4 sm:left-6 right-10 sm:right-14 h-72 sm:h-88 lg:h-92 bg-gradient-to-br from-[#ff6b3d] to-[#fa5522] rounded-[30px] sm:rounded-[40px] pointer-events-none z-[3] shadow-[0_10px_35px_rgba(250,85,34,0.22)] overflow-hidden"
              >
                {/* Radiating White Wi-Fi Icon with pulse */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.92, 1, 0.92] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white"
                >
                  <svg
                    className="w-13 h-13 sm:w-18 sm:h-18 drop-shadow-sm"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <circle cx="12" cy="20" r="1" fill="currentColor" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* 5. Foreground: The Girl Cutout Image (/images/girl.webp) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: 0.6 }
                }}
                className="relative z-[10] w-full pt-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
              >
                <div className="relative w-full aspect-[1295/1214]">
                  <Image
                    src={data.image || '/images/girl.webp'}
                    alt="Joyvia Internet Facility Experience"
                    fill
                    priority
                    className="object-contain object-bottom select-none pointer-events-none"
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 480px"
                  />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
