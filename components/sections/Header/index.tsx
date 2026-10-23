'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderData, LinkType } from '../../types';

interface HeaderProps {
  data: HeaderData;
}

/** Desktop Navigation Item with multi-level dropdown flyout support */
function DesktopNavItem({
  link,
  active,
  isActive,
}: {
  link: LinkType;
  active: boolean;
  isActive: (href: string) => boolean;
}) {
  const hasChildren = Boolean(link.children && link.children.length > 0);

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className={`text-[13.5px] xl:text-[14.5px] font-semibold transition-colors duration-200 relative py-1 ${
          active ? 'text-[#f05423]' : 'text-[#1e293b] hover:text-[#f05423]'
        }`}
      >
        {link.name}
        {active && (
          <motion.div
            layoutId="headerUnderline"
            className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#f05423] rounded-full"
          />
        )}
      </Link>
    );
  }

  // Multi-level Dropdown
  return (
    <div className="group/nav relative py-1">
      <Link
        href={link.href}
        className={`inline-flex items-center gap-1.5 text-[13.5px] xl:text-[14.5px] font-semibold transition-colors duration-200 relative ${
          active ? 'text-[#f05423]' : 'text-[#1e293b] group-hover/nav:text-[#f05423]'
        }`}
      >
        <span>{link.name}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover/nav:rotate-180 group-hover/nav:text-[#f05423]" />
        {active && (
          <motion.div
            layoutId="headerUnderline"
            className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#f05423] rounded-full"
          />
        )}
      </Link>

      {/* Level 1 Floating Dropdown Card */}
      <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 translate-y-2 transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100 group-hover/nav:translate-y-0 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:translate-y-0 z-50">
        <div className="min-w-[220px] rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_16px_36px_-10px_rgba(240,84,35,0.14)]">
          <ul className="space-y-0.5">
            {link.children?.map((sub) => {
              const hasSubChildren = Boolean(sub.children && sub.children.length > 0);
              const isSubActive = isActive(sub.href);

              if (!hasSubChildren) {
                return (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      className={`block rounded-xl px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                        isSubActive
                          ? 'bg-[#fff2eb] text-[#f05423]'
                          : 'text-[#1e293b] hover:bg-orange-50/60 hover:text-[#f05423]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                );
              }

              // Level 2: Nested flyout dropdown (Dropdown inside dropdown)
              return (
                <li key={sub.name} className="group/sub relative">
                  <Link
                    href={sub.href}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                      isSubActive
                        ? 'bg-[#fff2eb] text-[#f05423]'
                        : 'text-[#1e293b] hover:bg-orange-50/60 hover:text-[#f05423]'
                    }`}
                  >
                    <span>{sub.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover/sub:translate-x-0.5 group-hover/sub:text-[#f05423]" />
                  </Link>

                  {/* Level 2 Sub-Dropdown Card */}
                  <div className="pointer-events-none absolute left-full top-0 pl-2 opacity-0 translate-x-2 transition-all duration-200 group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:translate-x-0 z-50">
                    <div className="min-w-[200px] rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_16px_36px_-10px_rgba(240,84,35,0.14)]">
                      <ul className="space-y-0.5">
                        {sub.children?.map((nested) => (
                          <li key={nested.name}>
                            <Link
                              href={nested.href}
                              className={`block rounded-xl px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                                isActive(nested.href)
                                  ? 'bg-[#fff2eb] text-[#f05423]'
                                  : 'text-[#1e293b] hover:bg-orange-50/60 hover:text-[#f05423]'
                              }`}
                            >
                              {nested.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Mobile Navigation Item with multi-level accordion support */
function MobileNavItem({
  link,
  active,
  isActive,
  onClose,
}: {
  link: LinkType;
  active: boolean;
  isActive: (href: string) => boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [subExpanded, setSubExpanded] = useState<Record<string, boolean>>({});
  const hasChildren = Boolean(link.children && link.children.length > 0);

  const toggleSub = (name: string) => {
    setSubExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        onClick={onClose}
        className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.99] touch-manipulation ${
          active
            ? 'bg-[#fff2eb] text-[#f05423] font-bold shadow-2xs'
            : 'text-[#1e293b] hover:bg-orange-50/60 hover:text-[#f05423]'
        }`}
      >
        <span>{link.name}</span>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${
            active ? 'text-[#f05423] translate-x-0.5' : 'text-gray-300'
          }`}
        />
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center justify-between rounded-xl px-4 py-1 text-sm font-semibold transition ${
          active || expanded ? 'bg-[#fff2eb]' : 'hover:bg-orange-50/60'
        }`}
      >
        <Link
          href={link.href}
          onClick={(e) => {
            if (link.href === '#' || !link.href) {
              e.preventDefault();
              setExpanded((prev) => !prev);
            } else {
              onClose();
            }
          }}
          className={`flex-1 py-2 transition ${
            active || expanded ? 'text-[#f05423] font-bold' : 'text-[#1e293b]'
          }`}
        >
          {link.name}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-label={`Toggle ${link.name} sub-menu`}
          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all cursor-pointer ${
            expanded
              ? 'border-[#f05423] text-[#f05423] bg-[#fff2eb]'
              : 'border-gray-200 text-gray-600 hover:border-[#f05423] hover:text-[#f05423]'
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              expanded ? 'rotate-180 text-[#f05423]' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden pl-3 pr-1 my-1 space-y-1 border-l-2 border-[#f05423]/40 ml-4"
          >
            {link.children?.map((sub) => {
              const hasSubChildren = Boolean(sub.children && sub.children.length > 0);
              const isSubOpen = Boolean(subExpanded[sub.name]);
              const isSubActive = isActive(sub.href);

              if (!hasSubChildren) {
                return (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      onClick={onClose}
                      className={`block rounded-lg px-3 py-2 text-xs font-semibold transition ${
                        isSubActive
                          ? 'bg-[#fff2eb] text-[#f05423]'
                          : 'text-[#1e293b] hover:bg-orange-50/60 hover:text-[#f05423]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                );
              }

              // Level 2 inside mobile drawer
              return (
                <li key={sub.name} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between rounded-lg px-3 py-1 text-xs font-semibold ${
                      isSubActive || isSubOpen ? 'bg-[#fff2eb]' : 'hover:bg-orange-50/60'
                    }`}
                  >
                    <Link
                      href={sub.href}
                      onClick={(e) => {
                        if (sub.href === '#' || !sub.href) {
                          e.preventDefault();
                          toggleSub(sub.name);
                        } else {
                          onClose();
                        }
                      }}
                      className={`flex-1 py-1 transition ${
                        isSubActive || isSubOpen ? 'text-[#f05423]' : 'text-[#1e293b]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleSub(sub.name)}
                      aria-expanded={isSubOpen}
                      aria-label={`Toggle ${sub.name} nested menu`}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all cursor-pointer ${
                        isSubOpen
                          ? 'border-[#f05423] text-[#f05423] bg-[#fff2eb]'
                          : 'border-gray-200 text-gray-600 hover:border-[#f05423] hover:text-[#f05423]'
                      }`}
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isSubOpen ? 'rotate-180 text-[#f05423]' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isSubOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 pr-1 my-1 space-y-1 border-l border-[#f05423]/25 ml-3"
                      >
                        {sub.children?.map((nested) => (
                          <li key={nested.name}>
                            <Link
                              href={nested.href}
                              onClick={onClose}
                              className={`block rounded-md px-2.5 py-1.5 text-[11.5px] font-semibold transition ${
                                isActive(nested.href)
                                  ? 'bg-[#fff2eb] text-[#f05423]'
                                  : 'text-[#1e293b]/85 hover:bg-orange-50/60 hover:text-[#f05423]'
                              }`}
                            >
                              {nested.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({ data }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (!href || href === '#') return false;
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[84px]">
          {/* Left: Logo + Desktop Navigation shifted towards the left */}
          <div className="flex items-center gap-5 xl:gap-8">
            {/* Logo with /logo/logo.webp */}
            <Link href="/" className="flex items-center shrink-0">
              <div className="relative h-[40px] xs:h-[46px] sm:h-[58px] lg:h-[62px] w-[125px] xs:w-[150px] sm:w-48 lg:w-52 xl:w-56">
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
              {data.links?.map((link, idx) => (
                <DesktopNavItem
                  key={link.name + (link.href || idx)}
                  link={link}
                  active={isActive(link.href)}
                  isActive={isActive}
                />
              ))}
            </nav>
          </div>

          {/* Right Action: Enquire Now Button */}
          <div className="hidden md:flex items-center">
            <Link
              href={data.button_link && data.button_link !== '#' ? data.button_link : '/enquire-now'}
              className="inline-flex items-center gap-2.5 bg-[#f05423] hover:bg-[#d84416] text-white px-6 sm:px-7 py-3 rounded-full font-bold text-sm sm:text-[15px] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 cursor-pointer"
            >
              <span>{data.button_text || 'Enquire Now'}</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </Link>
          </div>

          {/* Mobile Menu Button + CTA */}
          <div className="flex items-center gap-2 sm:gap-3.5 lg:hidden shrink-0">
            <Link
              href={data.button_link && data.button_link !== '#' ? data.button_link : '/enquire-now'}
              className="md:hidden inline-flex items-center gap-1.5 bg-[#f05423] hover:bg-[#d84416] text-white px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all shrink-0"
            >
              <span>{data.button_text || 'Enquire Now'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2.5 rounded-xl text-gray-700 hover:text-[#f05423] hover:bg-orange-50 transition-colors cursor-pointer shrink-0"
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
              {data.links?.map((link) => (
                <MobileNavItem
                  key={link.name + link.href}
                  link={link}
                  active={isActive(link.href)}
                  isActive={isActive}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
