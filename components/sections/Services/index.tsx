'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Router, Wrench, Headset, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServicesSectionData } from '../../types';

interface ServicesProps {
  data: ServicesSectionData;
  isGrid?: boolean;
}

export default function Services({ data, isGrid = false }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3 7.8a15.2 15.2 0 0 1 21.4 0 1.3 1.3 0 0 1-1.8 1.8 12.6 12.6 0 0 0-17.8 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <path d="M4.8 11.3a10.2 10.2 0 0 1 14.4 0 1.3 1.3 0 0 1-1.8 1.8 7.6 7.6 0 0 0-10.8 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <path d="M8.4 14.9a5.2 5.2 0 0 1 7.2 0 1.3 1.3 0 0 1-1.8 1.8 2.6 2.6 0 0 0-3.6 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <circle cx="12" cy="19.5" r="1.8" />
          </svg>
        );
      case 'Briefcase':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3v1.5h-6V3z" />
            <path d="M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v3.2a1 1 0 0 1-.7.95l-7.3 2.1a2 2 0 0 1-2 0l-7.3-2.1A1 1 0 0 1 3 10.2V7z" />
            <path d="M3 12.5v5A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-5l-6.8 2a3.5 3.5 0 0 1-4.4 0L3 12.5zm9 2.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        );
      case 'Router':
        return <Router className="w-6 h-6 text-[#fa5522]" strokeWidth={2.2} />;
      case 'Cpu':
      case 'Server':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="20" height="4.5" rx="2.25" />
            <circle cx="6" cy="5.25" r="0.9" fill="white" />
            <circle cx="17.5" cy="5.25" r="0.9" fill="white" />
            <rect x="2" y="9.75" width="20" height="4.5" rx="2.25" />
            <circle cx="6" cy="12" r="0.9" fill="white" />
            <circle cx="17.5" cy="12" r="0.9" fill="white" />
            <rect x="2" y="16.5" width="20" height="4.5" rx="2.25" />
            <circle cx="6" cy="18.75" r="0.9" fill="white" />
            <circle cx="17.5" cy="18.75" r="0.9" fill="white" />
          </svg>
        );
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#fa5522]" strokeWidth={2.2} />;
      case 'Headset':
        return <Headset className="w-6 h-6 text-[#fa5522]" strokeWidth={2.2} />;
      default:
        return <Wifi className="w-6 h-6 text-[#fa5522]" strokeWidth={2.2} />;
    }
  };

  return (
    <section className="pt-8 sm:pt-10 pb-12 sm:pb-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header Centered with Reduced Gaping */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <div className="w-6 h-0.5 bg-[#fa5522]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#fa5522]">
              {data.subtitle || 'OUR SERVICES'}
            </span>
            <div className="w-6 h-0.5 bg-[#fa5522]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0a1128] leading-tight tracking-tight mb-2.5"
          >
            {data.title_line1 || 'Our'}{' '}
            <span className="text-[#fa5522]">{data.title_highlight || 'Internet Services'}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#64748b] text-sm sm:text-base leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* 6 Cards Grid (3x2) with Reduced Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {data.items?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[22px] sm:rounded-[24px] p-3 sm:p-3.5 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:border-orange-100 transition-all duration-300 flex flex-col group h-full"
            >
              <Link href={item.link || '/services'} className="flex flex-col h-full">
                
                {/* Framed Image Container */}
                <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Overlapping Circular Peach Icon Badge */}
                <div className="relative -mt-7 sm:-mt-8 ml-3 sm:ml-4 z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fdeee9] border-[3px] border-white shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(item.icon)}
                </div>

                {/* Card Body */}
                <div className="px-3 sm:px-4 pt-3 pb-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[19px] sm:text-[20px] font-extrabold text-[#0a1128] tracking-tight leading-snug group-hover:text-[#fa5522] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-[#556480] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#fa5522] group-hover:text-[#d84416] transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-200" />
                    </span>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button if provided */}
        {data.button && !isGrid && (
          <div className="text-center mt-10">
            <Link
              href={data.button.href || '/services'}
              className="inline-flex items-center gap-2 bg-[#fa5522] hover:bg-[#d84416] text-white px-7 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
            >
              <span>{data.button.text || 'View All Services'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
