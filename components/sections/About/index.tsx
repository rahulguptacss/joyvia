'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Wifi, Settings, Headset, ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { AboutSectionData } from '../../types';

interface AboutProps {
  data: AboutSectionData;
  hideCta?: boolean;
}

export default function About({ data, hideCta = false }: AboutProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#fa5522] fill-[#fa5522]" strokeWidth={2.2} />;
      case 'Wifi':
        return <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-[#fa5522]" strokeWidth={2.2} />;
      case 'Settings':
        return <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-[#fa5522] fill-[#fa5522]/30" strokeWidth={2.2} />;
      case 'Headset':
        return <Headset className="w-4 h-4 sm:w-5 sm:h-5 text-[#fa5522]" strokeWidth={2.2} />;
      case 'Globe':
        return <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#fa5522]" strokeWidth={2.2} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#fa5522]" strokeWidth={2.2} />;
      default:
        return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#fa5522] fill-[#fa5522]" strokeWidth={2.2} />;
    }
  };

  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Row with tight, compact gap between image and content */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-10">
          
          {/* Left Column: Overlapping Images with High-Visibility Positive-Z Accent Effects */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[520px] h-[310px] sm:h-[400px] lg:h-[460px] select-none"
            >
              
              {/* 1. Left Orange Solid Accent Pill (Behind Router - z-[1]) */}
              <div className="absolute left-0 top-[22%] w-10 sm:w-12 h-36 sm:h-44 bg-[#fa5522] rounded-2xl sm:rounded-3xl z-[1] shadow-sm" />

              {/* 2. Right Coral/Peach Solid Accent Pill (Behind Family - z-[1]) */}
              <div className="absolute right-0 top-[34%] w-9 sm:w-11 h-34 sm:h-40 bg-[#fba27d] rounded-2xl sm:rounded-3xl z-[1] shadow-sm" />

              {/* 3. Top-Right Dot Matrix Grid (6 cols x 4 rows - z-[1]) */}
              <div className="absolute right-10 sm:right-14 top-2 sm:top-4 grid grid-cols-6 gap-2.5 sm:gap-3 z-[1]">
                {[...Array(24)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#fba27d]" />
                ))}
              </div>

              {/* 4. Bottom-Left Concentric Wave Lines & Stipple Dots (z-[1] with subtle breathing motion) */}
              <motion.div
                animate={{
                  scale: [1, 1.025, 1],
                  opacity: [0.65, 0.85, 0.65],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 sm:-left-12 -bottom-8 sm:-bottom-12 w-60 sm:w-72 h-60 sm:h-72 z-[1] pointer-events-none"
              >
                <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="260" r="45" stroke="#fa5522" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.55" />
                  <circle cx="20" cy="260" r="75" stroke="#fa5522" strokeWidth="1.5" opacity="0.75" />
                  <circle cx="20" cy="260" r="105" stroke="#fa5522" strokeWidth="1.4" opacity="0.65" />
                  <circle cx="20" cy="260" r="135" stroke="#fa5522" strokeWidth="1.3" strokeDasharray="4 4" opacity="0.6" />
                  <circle cx="20" cy="260" r="165" stroke="#fa5522" strokeWidth="1.3" opacity="0.55" />
                  <circle cx="20" cy="260" r="195" stroke="#fa5522" strokeWidth="1.2" opacity="0.45" />
                  <circle cx="20" cy="260" r="225" stroke="#fa5522" strokeWidth="1.1" strokeDasharray="5 5" opacity="0.4" />
                  <circle cx="20" cy="260" r="255" stroke="#fa5522" strokeWidth="0.9" opacity="0.35" />
                  
                  {/* Stipple Dots cluster in curve */}
                  <circle cx="85" cy="195" r="2" fill="#fa5522" opacity="0.75" />
                  <circle cx="98" cy="180" r="2.2" fill="#fa5522" opacity="0.85" />
                  <circle cx="112" cy="198" r="2" fill="#fba27d" opacity="0.75" />
                  <circle cx="78" cy="210" r="2.2" fill="#fa5522" opacity="0.7" />
                  <circle cx="120" cy="170" r="2" fill="#fa5522" opacity="0.65" />
                  <circle cx="132" cy="185" r="2.2" fill="#fba27d" opacity="0.85" />
                  <circle cx="105" cy="160" r="2" fill="#fa5522" opacity="0.7" />
                  <circle cx="142" cy="165" r="2.2" fill="#fa5522" opacity="0.6" />
                  <circle cx="90" cy="225" r="2" fill="#fba27d" opacity="0.7" />
                  <circle cx="115" cy="215" r="2.2" fill="#fa5522" opacity="0.75" />
                  <circle cx="128" cy="205" r="2" fill="#fa5522" opacity="0.65" />
                  <circle cx="152" cy="178" r="2" fill="#fba27d" opacity="0.7" />
                </svg>
              </motion.div>

              {/* 5. Separate Image 1: Top-Left Card (Wi-Fi Router) - Layer z-[2] */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, -0.4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="absolute left-8 sm:left-10 top-5 sm:top-7 w-[52%] sm:w-[50%] aspect-[311/315] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_14px_35px_rgba(0,0,0,0.12)] border-[3.5px] sm:border-[4px] border-white bg-slate-100 z-[2] group"
              >
                <Image
                  src={data.image_secondary || '/images/about-router.webp'}
                  alt="Joyvia Wi-Fi Router"
                  fill
                  priority
                  sizes="(max-width: 768px) 55vw, 290px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* 6. Separate Image 2: Bottom-Right Card (Family with Laptop - Layer z-[10]) */}
              <motion.div
                animate={{
                  y: [0, 7, 0],
                  rotate: [0, 0.4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                whileHover={{ scale: 1.02 }}
                className="absolute right-6 sm:right-8 bottom-5 sm:bottom-7 w-[64%] sm:w-[62%] aspect-[376/371] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_22px_48px_rgba(0,0,0,0.2)] border-[5px] sm:border-[6px] border-white bg-slate-100 z-[10] group"
              >
                <Image
                  src={data.image || '/images/about-family.webp'}
                  alt="Joyvia Connected Family"
                  fill
                  priority
                  sizes="(max-width: 768px) 68vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

            </motion.div>
          </div>

          {/* Right Column: Exact Content, Headings, Feature Grid & CTA Button */}
          <div className="w-full lg:w-[52%] flex flex-col items-start text-left lg:pl-2">
            
            {/* Tagline / Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-7 h-[2px] bg-[#fa5522] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#fa5522] uppercase">
                {data.subtitle || 'ABOUT US'}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0a1128] leading-[1.18] tracking-tight mb-4"
            >
              <span className="block">{data.title_line1 || 'Connecting'}</span>
              <span className="text-[#fa5522]">{data.title_highlight || 'More Lives'}</span>{' '}
              <span>{data.title_line2 || 'Every Day'}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#64748b] text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-xl"
            >
              {data.description}
            </motion.p>

            {/* 4 Feature Points (2x2 Grid) with Motion & Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-x-3.5 sm:gap-x-8 gap-y-4 sm:gap-y-6 w-full mb-6 sm:mb-9"
            >
              {data.features?.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-start gap-2.5 sm:gap-3.5 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0 shadow-xs mt-0.5"
                  >
                    {getIcon(item.icon)}
                  </motion.div>
                  <div className="flex flex-col">
                    <h3 className="text-[13px] sm:text-[16px] font-bold text-[#0a1128] leading-tight group-hover:text-[#fa5522] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-[13px] text-[#64748b] mt-0.5 sm:mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button with Motion */}
            {!hideCta && data.button && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-block"
                >
                  <Link
                    href={data.button.href || '/about'}
                    className="inline-flex items-center gap-2.5 bg-[#fa5522] hover:bg-[#e04515] text-white px-7 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 group"
                  >
                    <span>{data.button.text || 'Read More'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-200" />
                  </Link>
                </motion.div>
              </motion.div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
