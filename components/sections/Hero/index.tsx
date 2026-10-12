'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSectionData } from '../../types';

interface HeroProps {
  data: HeroSectionData;
}

export default function Hero({ data }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#fdf9f8] border-b border-orange-100/50">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Grid: Left Container + Right Container (0 Right Padding) */}
      <div className="max-w-7xl mx-auto pl-5 sm:pl-8 lg:pl-12 pr-0 flex flex-col lg:flex-row items-center lg:items-stretch justify-between min-h-[400px] lg:min-h-[480px]">
        
        {/* Left Column: Content with comfortable padding (order-2 on mobile, order-1 on desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-6 sm:py-8 lg:py-10 z-10 order-2 lg:order-1 pr-5 sm:pr-8 lg:pr-6">
          
          {/* Top Tagline with Orange Horizontal Line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-3 sm:mb-4"
          >
            <span className="w-8 h-[2px] bg-[#f05423]"></span>
            <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#f05423]">
              {data.badge_text || 'FAST. RELIABLE. ALWAYS ON.'}
            </span>
          </motion.div>

          {/* Main Heading matching 3-line format */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.15rem] font-extrabold text-[#010d1d] leading-[1.15] tracking-tight mb-3.5 sm:mb-4"
          >
            {data.title_line1 || 'High-Speed Internet'} <br />
            {data.title_line2 || 'for a Brighter'} <br />
            <span className="text-[#f05423] inline-block">
              {data.title_highlight || 'Everyday'}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-lg"
          >
            {data.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <Link
              href={data.primary_button?.href || '/book-a-plan'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#f05423] hover:bg-[#d84416] text-white px-7 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{data.primary_button?.text || 'Get Connected'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Button */}
            {data.secondary_button && (
              <Link
                href={data.secondary_button?.href || '/broadband-plans'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-orange-200/90 hover:border-[#f05423] text-[#f05423] bg-white hover:bg-orange-50/50 px-7 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>{data.secondary_button?.text || 'View Plans'}</span>
              </Link>
            )}
          </motion.div>

        </div>

        {/* Right Column: Full Height Image (order-1 on mobile, order-2 on desktop) */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center self-stretch p-0 min-h-[300px] sm:min-h-[380px] lg:min-h-[480px] overflow-hidden order-1 lg:order-2">
          
          {/* Background Image: /images/hero.webp stretching edge-to-edge full height */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={data.image || '/images/hero.webp'}
              alt="High-Speed Internet Family"
              fill
              priority
              className="object-cover object-center lg:object-[center_right]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Overlay 1: Orange Orbital Elliptical Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
          >
            <svg
              className="w-[110%] h-[110%] max-w-[700px] overflow-visible"
              viewBox="0 0 689 579"
              fill="none"
            >
              <defs>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff5722" />
                  <stop offset="45%" stopColor="#f05423" />
                  <stop offset="75%" stopColor="#ff7043" />
                  <stop offset="100%" stopColor="#f4511e" />
                </linearGradient>
                <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <ellipse
                cx="345"
                cy="295"
                rx="318"
                ry="178"
                transform="rotate(-10 345 295)"
                stroke="url(#orbitGrad)"
                strokeWidth="11"
                strokeLinecap="round"
                filter="url(#ringGlow)"
                className="opacity-95"
              />
            </svg>
          </motion.div>

          {/* Overlay 2: Top-Left Card ("Streaming Lag-Free") */}
          <motion.button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, -6, 0] 
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-[26%] sm:top-[28%] left-3 sm:left-6 lg:left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_12px_35px_rgba(0,0,0,0.14)] border border-white flex items-center gap-3.5 text-left cursor-pointer group"
          >
            {/* Play Button Icon with dual circular ring */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ffefe9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#f05423] to-[#ff6b3d] flex items-center justify-center shadow-md shadow-orange-500/30 text-white">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs sm:text-[14px] font-bold text-[#0f172a] leading-tight">
                {data.floating_badge_top?.text || 'Streaming'}
              </span>
              <span className="text-xs sm:text-[14px] font-bold text-[#0f172a] leading-tight">
                {data.floating_badge_top?.subtext || 'Lag-Free'}
              </span>
            </div>
          </motion.button>

          {/* Overlay 3: Bottom-Right Card ("Ultra-Fast Speed 1 Gbps") */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, 6, 0] 
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.5,
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.03 }}
            className="absolute bottom-6 sm:bottom-10 right-3 sm:right-6 lg:right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:px-6 sm:py-4.5 shadow-[0_12px_35px_rgba(0,0,0,0.14)] border border-white flex items-center gap-4 text-left"
          >
            {/* Speedometer Gauge Dial */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-50/80 border border-orange-100 flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#f05423]" viewBox="0 0 36 36">
                <path
                  d="M6 24 A 12 12 0 1 1 30 24"
                  fill="none"
                  stroke="#ffd8cc"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 24 A 12 12 0 1 1 27 15"
                  fill="none"
                  stroke="#f05423"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="18" cy="24" r="3" fill="#f05423" />
                <line x1="18" y1="24" x2="25" y2="17" stroke="#f05423" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                {data.floating_badge_bottom?.label || 'Ultra-Fast Speed'}
              </span>

              {/* 10 Speed Progress Dots (6 active + 4 inactive) */}
              <div className="flex items-center gap-1 my-1">
                {[...Array(6)].map((_, i) => (
                  <span key={`a-${i}`} className="w-1.5 h-2.5 sm:w-2 sm:h-2.5 rounded-full bg-[#f05423]" />
                ))}
                {[...Array(4)].map((_, i) => (
                  <span key={`i-${i}`} className="w-1.5 h-2.5 sm:w-2 sm:h-2.5 rounded-full bg-orange-100" />
                ))}
              </div>

              {/* 1 Gbps Speed text */}
              <span className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight leading-none">
                {data.floating_badge_bottom?.speed || '1 Gbps'}
              </span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden aspect-video border border-orange-500/30 shadow-2xl flex items-center justify-center"
            >
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#f05423] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>

              <video
                src={data.floating_badge_top?.video_url || 'https://www.w3schools.com/html/mov_bbb.mp4'}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
