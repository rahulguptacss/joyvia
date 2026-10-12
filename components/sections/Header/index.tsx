'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderData } from '../../types';

interface HeaderProps {
  data: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-[84px]">
          
          {/* Left: Logo + Desktop Navigation shifted towards the left */}
          <div className="flex items-center gap-5 xl:gap-8">
            {/* Logo with /logo/logo.webp */}
            <Link href="/" className="flex items-center shrink-0">
              <div className="relative h-[51px] sm:h-[58px] lg:h-[62px] w-[161px] sm:w-48 lg:w-52 xl:w-56">
                <Image
                  src={data.logo_image || '/logo/logo.webp'}
                  alt={data.logo_text || 'Joyvia'}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 180px, 240px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4.5 whitespace-nowrap">
              {data.links?.map((link, idx) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                return (
                  <Link
                    key={idx}
                    href={link.href}
                    className={`text-[13.5px] xl:text-[14.5px] font-semibold transition-colors duration-200 relative py-1 ${
                      isActive
                        ? 'text-[#f05423]'
                        : 'text-[#1e293b] hover:text-[#f05423]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="headerUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#f05423] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Action: Enquire Now Button (Phone Number Removed) */}
          <div className="hidden md:flex items-center">
            <Link
              href={data.button_link || '/book-a-plan'}
              className="inline-flex items-center gap-2.5 bg-[#f05423] hover:bg-[#d84416] text-white px-6 sm:px-7 py-3 rounded-full font-bold text-sm sm:text-[15px] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 cursor-pointer"
            >
              <span>{data.button_text || 'Enquire Now'}</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 lg:hidden">
            <Link
              href={data.button_link || '/book-a-plan'}
              className="md:hidden inline-flex items-center gap-2 bg-[#f05423] hover:bg-[#d84416] text-white px-4.5 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
            >
              <span>{data.button_text || 'Enquire Now'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-gray-700 hover:text-[#f05423] hover:bg-orange-50 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer - Smooth & Responsive */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-[0_12px_24px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="px-4 sm:px-6 pt-2.5 pb-5 space-y-1">
              {data.links?.map((link, idx) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.22, ease: 'easeOut' }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.99] touch-manipulation ${
                        isActive
                          ? 'bg-[#fff2eb] text-[#f05423] font-bold shadow-2xs'
                          : 'text-[#1e293b] hover:bg-orange-50/60 hover:text-[#f05423]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive ? 'text-[#f05423] translate-x-0.5' : 'text-gray-300'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
