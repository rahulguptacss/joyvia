'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HighlightsSectionData } from '../../types';

interface HighlightsProps {
  data: HighlightsSectionData;
}

export default function Highlights({ data }: HighlightsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2.5h2a.75.75 0 0 1 .75.75v3.6l-2.75-2.2V3.25A.75.75 0 0 1 16 2.5z" />
            <path d="M11.3 2.3a1 1 0 0 1 1.4 0l9 8a1 1 0 0 1-.66 1.7H19v7.5A1.5 1.5 0 0 1 17.5 21h-3a1 1 0 0 1-1-1v-4.5a1.5 1.5 0 0 0-3 0v4.5a1 1 0 0 1-1 1h-3A1.5 1.5 0 0 1 5 19.5V12H3a1 1 0 0 1-.66-1.7l9-8z" />
          </svg>
        );
      case 'Briefcase':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3v1.5h-6V3z" />
            <path d="M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v3.2a1 1 0 0 1-.7.95l-7.3 2.1a2 2 0 0 1-2 0l-7.3-2.1A1 1 0 0 1 3 10.2V7z" />
            <path d="M3 12.5v5A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-5l-6.8 2a3.5 3.5 0 0 1-4.4 0L3 12.5zm9 2.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        );
      case 'Wifi':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3 7.8a15.2 15.2 0 0 1 21.4 0 1.3 1.3 0 0 1-1.8 1.8 12.6 12.6 0 0 0-17.8 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <path d="M4.8 11.3a10.2 10.2 0 0 1 14.4 0 1.3 1.3 0 0 1-1.8 1.8 7.6 7.6 0 0 0-10.8 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <path d="M8.4 14.9a5.2 5.2 0 0 1 7.2 0 1.3 1.3 0 0 1-1.8 1.8 2.6 2.6 0 0 0-3.6 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <circle cx="12" cy="19.5" r="1.8" />
          </svg>
        );
      case 'Server':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
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
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3 7.8a15.2 15.2 0 0 1 21.4 0 1.3 1.3 0 0 1-1.8 1.8 12.6 12.6 0 0 0-17.8 0 1.3 1.3 0 0 1-1.8-1.8z" />
            <circle cx="12" cy="19.5" r="1.8" />
          </svg>
        );
    }
  };

  return (
    <section className="pt-0 sm:pt-1 lg:pt-2 pb-8 sm:pb-10 lg:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {data.items?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group h-full"
            >
              <Link
                href={item.link || '/services'}
                className="block h-full bg-white rounded-[22px] border border-gray-100 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] hover:border-orange-100 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Circular Peach Icon Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {getIcon(item.icon)}
                  </div>
                  
                  {/* Text Container */}
                  <div className="flex flex-col">
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0a1128] tracking-tight leading-snug group-hover:text-[#fa5522] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] text-[#556480] leading-snug mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
