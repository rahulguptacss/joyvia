'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbProps } from '../../types';

export default function Breadcrumb({ title, breadcrumb, backgroundImage }: BreadcrumbProps) {
  return (
    <div className="relative py-12 sm:py-16 md:py-20 lg:py-22 overflow-hidden bg-[#0c141d]">
      {/* Background Image with Dark Vignette Overlay matching screenshot */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || '/images/breadcrumb-bg.webp'}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c141d]/90 via-[#0c141d]/75 to-[#0c141d]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Top Trail: HOME > ABOUT US matching screenshot */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-2.5 sm:mb-3"
          >
            {breadcrumb.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <span className="text-[#fa5522] font-black text-sm select-none">
                    &gt;
                  </span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-gray-300 hover:text-[#fa5522] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#fa5522] font-bold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Main Title matching screenshot */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}
