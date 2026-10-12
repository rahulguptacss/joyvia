'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PricingSectionData } from '../../types';

interface PricingProps {
  data: PricingSectionData;
}

export default function Pricing({ data }: PricingProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2.5h2a.75.75 0 0 1 .75.75v3.6l-2.75-2.2V3.25A.75.75 0 0 1 16 2.5z" />
            <path d="M11.3 2.3a1 1 0 0 1 1.4 0l9 8a1 1 0 0 1-.66 1.7H19v7.5A1.5 1.5 0 0 1 17.5 21h-3a1 1 0 0 1-1-1v-4.5a1.5 1.5 0 0 0-3 0v4.5a1 1 0 0 1-1 1h-3A1.5 1.5 0 0 1 5 19.5V12H3a1 1 0 0 1-.66-1.7l9-8z" />
          </svg>
        );
      case 'Film':
      case 'Clapperboard':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 4h-15A2.5 2.5 0 0 0 2 6.5v11A2.5 2.5 0 0 0 4.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4zm-8.7 3.5h2.4l1.6-2h-2.4l-1.6 2zm4 0h2.4l1.6-2h-2.4l-1.6 2zM4.5 5.5h1.7l1.6 2H5.4l-1.6-2a.9.9 0 0 1 .7 0zm15 13h-15a1 1 0 0 1-1-1V9h17v8.5a1 1 0 0 1-1 1z" />
            <path d="M10 11.5v5l4.5-2.5-4.5-2.5z" />
          </svg>
        );
      case 'Users':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="3" />
            <path d="M7 17c0-2.5 2.2-4 5-4s5 1.5 5 4v1H7v-1z" />
            <circle cx="5.5" cy="8.5" r="2.2" />
            <path d="M1.5 17c0-2 1.8-3.2 4-3.2.4 0 .9.1 1.3.2-.5.8-.8 1.8-.8 3v1h-4.5v-1z" />
            <circle cx="18.5" cy="8.5" r="2.2" />
            <path d="M18 17c0-1.2-.3-2.2-.8-3 .4-.1.9-.2 1.3-.2 2.2 0 4 1.2 4 3.2v1h-4.5v-1z" />
          </svg>
        );
      case 'Briefcase':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3v1.5h-6V3z" />
            <path d="M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v3.2a1 1 0 0 1-.7.95l-7.3 2.1a2 2 0 0 1-2 0l-7.3-2.1A1 1 0 0 1 3 10.2V7z" />
            <path d="M3 12.5v5A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-5l-6.8 2a3.5 3.5 0 0 1-4.4 0L3 12.5zm9 2.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#fa5522]" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" />
          </svg>
        );
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#fffcf9] relative overflow-hidden">
      
      {/* Background Left Wave Arcs */}
      <div className="absolute -left-16 sm:-left-20 top-2 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-40 select-none -z-10">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <circle cx="10" cy="50" r="70" stroke="#fa5522" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="10" cy="50" r="105" stroke="#fa5522" strokeWidth="1.2" opacity="0.45" />
          <circle cx="10" cy="50" r="140" stroke="#fa5522" strokeWidth="1.2" opacity="0.4" />
          <circle cx="10" cy="50" r="175" stroke="#fa5522" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
          <circle cx="10" cy="50" r="210" stroke="#fa5522" strokeWidth="1" opacity="0.3" />
          <circle cx="10" cy="50" r="245" stroke="#fa5522" strokeWidth="0.8" opacity="0.25" />
          <circle cx="10" cy="50" r="280" stroke="#fa5522" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.2" />
        </svg>
      </div>

      {/* Background Right Wave Arcs */}
      <div className="absolute -right-16 sm:-right-20 top-2 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-40 select-none -z-10">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <circle cx="290" cy="50" r="70" stroke="#fa5522" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="290" cy="50" r="105" stroke="#fa5522" strokeWidth="1.2" opacity="0.45" />
          <circle cx="290" cy="50" r="140" stroke="#fa5522" strokeWidth="1.2" opacity="0.4" />
          <circle cx="290" cy="50" r="175" stroke="#fa5522" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
          <circle cx="290" cy="50" r="210" stroke="#fa5522" strokeWidth="1" opacity="0.3" />
          <circle cx="290" cy="50" r="245" stroke="#fa5522" strokeWidth="0.8" opacity="0.25" />
          <circle cx="290" cy="50" r="280" stroke="#fa5522" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header Centered matching screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-9">
          
          {/* Subtitle with dual orange lines */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 mb-2.5"
          >
            <span className="w-8 sm:w-10 h-[2px] bg-[#fa5522] rounded-full inline-block" />
            <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#fa5522]">
              {data.subtitle || 'OUR BROADBAND PLANS'}
            </span>
            <span className="w-8 sm:w-10 h-[2px] bg-[#fa5522] rounded-full inline-block" />
          </motion.div>

          {/* Main Heading (Single line on desktop) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[42px] font-black text-[#081028] leading-tight tracking-tight mb-3 sm:whitespace-nowrap"
          >
            <span>{data.title_line1 || 'Choose the Plan That'}</span>{' '}
            <span className="text-[#fa5522]">{data.title_highlight || 'Fits Your Needs'}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#556480] text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto whitespace-pre-line font-normal"
          >
            {data.description}
          </motion.p>
        </div>

        {/* 4 Cards Grid with Reduced Gaps and Reduced Card Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5 xl:gap-5 items-stretch">
          {data.plans?.map((plan, idx) => {
            const isFeatured = plan.is_popular;
            const isOutlineBtn = plan.button_variant === 'outline';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-[22px] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 bg-white h-full ${
                  isFeatured
                    ? 'border-2 border-[#fa5522] shadow-[0_12px_35px_rgba(250,85,34,0.14)] z-10'
                    : 'border border-slate-100 shadow-[0_4px_22px_rgba(0,0,0,0.04)] hover:border-orange-200 hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fa5522] text-white text-[10px] sm:text-[11px] font-extrabold px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                    {plan.popular_badge || 'MOST POPULAR'}
                  </div>
                )}

                <div>
                  {/* Top Header: Name, Category & Peach Circular Icon */}
                  <div className="flex items-start justify-between gap-2.5 mb-2">
                    <div>
                      <span className="text-[14px] sm:text-[15px] font-extrabold text-[#fa5522] uppercase tracking-wide block leading-tight">
                        {plan.name}
                      </span>
                      <span className="text-xs text-[#556480] font-medium mt-0.5 block leading-snug">
                        {plan.category}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0">
                      {getIcon(plan.icon)}
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="w-full h-[1px] bg-slate-100 my-3" />

                  {/* Speed & Price Row */}
                  <div className="flex items-center justify-between pb-3.5">
                    {/* Speed */}
                    <div className="flex items-baseline">
                      <span className="text-[28px] sm:text-[32px] font-black text-[#fa5522] tracking-tight leading-none">
                        {plan.speed}
                      </span>
                      <span className="text-sm font-extrabold text-[#0a1128] ml-1">
                        {plan.speed_unit || 'Mbps'}
                      </span>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1px] h-7 bg-slate-200" />

                    {/* Price */}
                    <div className="text-right">
                      <div className="text-[22px] sm:text-[24px] font-black text-[#0a1128] tracking-tight leading-none">
                        {plan.price}
                      </div>
                      <div className="text-[11px] text-[#64748b] font-medium mt-0.5">
                        {plan.billing_period || 'per month'}
                      </div>
                    </div>
                  </div>

                  {/* Features List with Orange Checkmarks */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {plan.features?.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#fa5522] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2 h-2 text-white stroke-current" viewBox="0 0 12 12" fill="none" strokeWidth="2.5">
                            <path d="M2.5 6l2.5 2.5 4.5-5" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-[12.5px] text-[#334155] leading-snug font-medium">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquire Now Button */}
                <div className="pt-1">
                  {isOutlineBtn ? (
                    <Link
                      href={plan.button_link || '/book-a-plan'}
                      className="w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm border-2 border-[#fa5522] text-[#fa5522] hover:bg-[#fa5522] hover:text-white flex items-center justify-center gap-1.5 transition-all duration-300 active:scale-95 group"
                    >
                      <span>{plan.button_text || 'Enquire Now'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <Link
                      href={plan.button_link || '/book-a-plan'}
                      className="w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#fa5522] hover:bg-[#d84416] text-white shadow-sm hover:shadow-md hover:shadow-orange-500/25 flex items-center justify-center gap-1.5 transition-all duration-300 active:scale-95 group"
                    >
                      <span>{plan.button_text || 'Enquire Now'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
