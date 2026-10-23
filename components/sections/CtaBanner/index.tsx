'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CtaBannerSectionData } from '../../types';

interface CtaBannerProps {
  data: CtaBannerSectionData;
}

export default function CtaBanner({ data }: CtaBannerProps) {
  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group/banner relative rounded-[22px] sm:rounded-[28px] border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] overflow-hidden bg-white flex flex-col lg:flex-row items-stretch justify-between"
        >
          {/* Left Text Content */}
          <div className="w-full lg:w-[48%] xl:w-[46%] p-6 sm:p-8 lg:py-8 lg:pl-10 lg:pr-4 flex flex-col justify-center z-20 bg-white">
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0a1128] leading-[1.18] tracking-tight mb-2 sm:mb-2.5"
            >
              {data.title_line1 || 'Ready for a Faster,'}
              <br />
              {data.title_line2 || 'Smarter'}{' '}
              <span className="text-[#fa5522]">{data.title_highlight || 'Internet Experience?'}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-md font-normal"
            >
              {data.description ||
                'Join thousands of happy users and get connected today with high-speed, reliable and secure internet services.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Link
                href={data.button?.href || '/broadband-plans'}
                className="inline-flex items-center gap-2 bg-[#fa5522] hover:bg-[#e04515] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_16px_rgba(250,85,34,0.3)] hover:shadow-[0_6px_22px_rgba(250,85,34,0.45)] active:scale-95 group/btn"
              >
                <span>{data.button?.text || 'Plans'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Image Container with Router & Glowing Wi-Fi */}
          <div className="w-full lg:w-[52%] xl:w-[54%] relative min-h-[220px] sm:min-h-[260px] lg:min-h-[270px] overflow-hidden bg-slate-50">
            {/* Desktop Organic Curved Wave Transition Mask */}
            <div className="hidden lg:block absolute inset-y-0 -left-1 w-20 pointer-events-none z-10">
              <svg
                className="w-full h-full text-white fill-current"
                viewBox="0 0 100 300"
                preserveAspectRatio="none"
              >
                <path d="M0 0 L70 0 C40 90, 85 180, 25 300 L0 300 Z" />
              </svg>
            </div>

            {/* Mobile/Tablet Top Gradient Fade */}
            <div className="lg:hidden absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

            {/* Pulsing Neon Wi-Fi Glow Effect positioned over the router's wifi icon */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0.75, 0.35],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-[18%] right-[22%] sm:right-[26%] w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/25 rounded-full blur-2xl pointer-events-none z-10"
            />

            {/* High-Resolution CTA Image (/images/cta.webp) */}
            <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] lg:min-h-[270px]">
              <Image
                src={data.image || '/images/cta.webp'}
                alt="Joyvia High-Speed Broadband Router"
                fill
                priority
                className="object-cover object-center lg:object-right transition-transform duration-700 ease-out group-hover/banner:scale-105 select-none pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
