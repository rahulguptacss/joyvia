'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Gauge,
  Wifi,
  ShieldCheck,
  Laptop,
  Check,
  ArrowRight,
  FileText,
  Calendar,
  Zap,
  Server,
  Headset,
  Wrench,
  Router as RouterIcon,
} from 'lucide-react';
import { ServiceDetailItem } from '../../types';

interface ServiceDetailsProps {
  service: ServiceDetailItem;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  // Icon resolver for key points and steps
  const renderIcon = (iconName: string, className = 'w-6 h-6') => {
    switch (iconName.toLowerCase()) {
      case 'gauge':
      case 'speed':
        return <Gauge className={className} />;
      case 'wifi':
        return <Wifi className={className} />;
      case 'shieldcheck':
      case 'shield':
      case 'security':
        return <ShieldCheck className={className} />;
      case 'laptop':
      case 'devices':
        return <Laptop className={className} />;
      case 'filetext':
      case 'file':
      case 'document':
        return <FileText className={className} />;
      case 'calendar':
      case 'schedule':
        return <Calendar className={className} />;
      case 'zap':
      case 'bolt':
        return <Zap className={className} />;
      case 'server':
        return <Server className={className} />;
      case 'headset':
      case 'support':
        return <Headset className={className} />;
      case 'wrench':
      case 'setup':
        return <Wrench className={className} />;
      case 'router':
        return <RouterIcon className={className} />;
      default:
        return <Wifi className={className} />;
    }
  };

  const keyPoints = service.key_points || [
    {
      icon: 'Gauge',
      title: 'High-Speed Internet',
      description: 'Enjoy seamless browsing, streaming and gaming.',
    },
    {
      icon: 'Wifi',
      title: 'Strong Wi-Fi Coverage',
      description: 'Get consistent signal in every corner of your home.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Secure & Stable',
      description: 'Reliable and safe internet for your family.',
    },
    {
      icon: 'Laptop',
      title: 'Connect Multiple Devices',
      description: 'Stream, work and game on all your devices.',
    },
  ];

  const secondary = service.secondary_section || {
    badge: 'PERFECT FOR EVERYONE',
    title_line1: 'Designed for',
    title_highlight: 'Modern Homes',
    description:
      "Whether it's online classes, remote work, 4K streaming or gaming, our home broadband keeps your entire family connected without interruptions.",
    image: '/images/service-detail-family.webp',
    checklist: [
      'Smooth 4K/8K streaming experience',
      'Lag-free online gaming',
      'Reliable connection for work from home',
      'Ideal for smart home devices',
    ],
  };

  const stepsSection = service.steps_section || {
    badge: 'HOW IT WORKS',
    title_line1: 'Get Connected in',
    title_highlight: '3 Simple Steps',
    steps: [
      {
        step: '01',
        icon: 'FileText',
        title: 'Choose Your Plan',
        description: 'Select the plan that fits your needs.',
      },
      {
        step: '02',
        icon: 'Calendar',
        title: 'Schedule Installation',
        description: 'Book a convenient time for our expert team.',
      },
      {
        step: '03',
        icon: 'Wifi',
        title: 'Get Connected',
        description: 'Enjoy high-speed internet at your home.',
      },
    ],
  };

  return (
    <div className="bg-white text-[#0b131c]">
      {/* ========================================================= */}
      {/* SECTION 1: MAIN SERVICE HERO & 4 FEATURES (EXACT SCREENSHOT) */}
      {/* ========================================================= */}
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-2 sm:pb-3 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
            
            {/* Left Content (Cols 7 on lg) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Top Subtitle with Orange Bar */}
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-6 sm:w-8 h-[2.5px] bg-[#fa5522] rounded-full inline-block" />
                <span className="text-xs sm:text-[13px] font-black tracking-widest uppercase text-[#fa5522]">
                  {service.badge || service.subtitle || 'HOME BROADBAND'}
                </span>
              </div>

              {/* Main Heading with Orange Highlight */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0b131c] tracking-tight leading-[1.18] mb-3 sm:mb-3.5">
                {service.title_line1 || 'Fast, Reliable Internet'}{' '}
                <span className="text-[#fa5522]">
                  {service.title_highlight || 'for Every Home'}
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed mb-5 sm:mb-6 font-normal max-w-xl">
                {service.description}
              </p>

              {/* 4 Feature Points (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5 sm:gap-y-4">
                {keyPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="flex items-start gap-3.5 group"
                  >
                    {/* Peach Circular Icon */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0 text-[#fa5522] transition-transform duration-300 group-hover:scale-110">
                      {renderIcon(point.icon, 'w-5 h-5 sm:w-5.5 sm:h-5.5')}
                    </div>

                    {/* Feature Text */}
                    <div className="flex flex-col">
                      <h4 className="text-[13.5px] sm:text-[14.5px] font-extrabold text-[#0b131c] tracking-tight leading-snug">
                        {point.title}
                      </h4>
                      <p className="text-[11.5px] sm:text-xs text-gray-500 font-normal leading-relaxed mt-0.5">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Router Image Frame (Cols 5 on lg) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 bg-slate-50 group">
                <Image
                  src={service.image || '/images/service-detail-router.webp'}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: SECONDARY BLOCK - FAMILY IMAGE & MODERN HOMES CHECKLIST */}
      {/* ========================================================= */}
      <section className="py-4 sm:py-5 lg:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
            
            {/* Left Family Image Frame (Cols 6 on lg) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 bg-slate-50 group">
                <Image
                  src={secondary.image || '/images/service-detail-family.webp'}
                  alt={secondary.title_highlight || 'Modern Homes'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Right Checklist Content (Cols 6 on lg) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              {/* Top Subtitle with Orange Bar */}
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 sm:w-8 h-[2.5px] bg-[#fa5522] rounded-full inline-block" />
                <span className="text-xs sm:text-[13px] font-black tracking-widest uppercase text-[#fa5522]">
                  {secondary.badge || 'PERFECT FOR EVERYONE'}
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0b131c] tracking-tight leading-[1.2] mb-3">
                {secondary.title_line1 || 'Designed for'}{' '}
                <span className="text-[#fa5522]">
                  {secondary.title_highlight || 'Modern Homes'}
                </span>
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed mb-4 sm:mb-5 max-w-xl font-normal">
                {secondary.description}
              </p>

              {/* Checklist */}
              <div className="space-y-2.5 sm:space-y-3">
                {secondary.checklist.map((item, cIdx) => (
                  <motion.div
                    key={cIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: cIdx * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    {/* Orange Circular Checkmark */}
                    <div className="w-5 h-5 rounded-full bg-[#fa5522] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    {/* Check item text */}
                    <span className="text-xs sm:text-[13.5px] text-gray-700 font-semibold tracking-tight">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: HOW IT WORKS - 3 SIMPLE STEPS (EXACT SCREENSHOT) */}
      {/* ========================================================= */}
      <section className="pt-4 sm:pt-5 lg:pt-6 pb-10 sm:pb-14 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          
          {/* Header Centered */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <span className="w-6 sm:w-8 h-[2.5px] bg-[#fa5522] rounded-full inline-block" />
              <span className="text-xs sm:text-[13px] font-black tracking-widest uppercase text-[#fa5522]">
                {stepsSection.badge || 'HOW IT WORKS'}
              </span>
              <span className="w-6 sm:w-8 h-[2.5px] bg-[#fa5522] rounded-full inline-block" />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0b131c] tracking-tight">
              {stepsSection.title_line1 || 'Get Connected in'}{' '}
              <span className="text-[#fa5522]">
                {stepsSection.title_highlight || '3 Simple Steps'}
              </span>
            </h3>
          </div>

          {/* 3 Steps Row with Arrows */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-5 lg:gap-3">
            {stepsSection.steps.map((st, sIdx) => (
              <React.Fragment key={sIdx}>
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sIdx * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="relative bg-white rounded-[20px] p-5 sm:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(250,85,34,0.08)] hover:border-orange-100 transition-all duration-300 w-full lg:flex-1 max-w-sm flex items-center gap-4 text-left group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-2.5 left-4 sm:left-5 bg-[#fff4f0] border border-[#fde1d8] text-[#fa5522] text-[10.5px] sm:text-[11px] font-black px-2 py-0.5 rounded-md shadow-2xs">
                    {st.step}
                  </div>

                  {/* Icon in Peach Circle */}
                  <div className="w-12 h-12 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0 text-[#fa5522] transition-transform duration-300 group-hover:scale-110">
                    {renderIcon(st.icon, 'w-5 h-5')}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <h4 className="text-sm sm:text-[15px] font-extrabold text-[#0b131c] tracking-tight leading-snug">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed mt-0.5">
                      {st.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow Right between cards (on desktop) */}
                {sIdx < stepsSection.steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-[#fa5522] shrink-0 px-1 xl:px-2">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
