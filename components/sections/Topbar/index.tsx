'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Headset } from 'lucide-react';
import { TopbarData } from '../../types';

interface TopbarProps {
  data: TopbarData;
}

export default function Topbar({ data }: TopbarProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Phone':
        return <Phone className="w-3.5 h-3.5 text-[#1e293b]" />;
      case 'Mail':
        return <Mail className="w-3.5 h-3.5 text-[#1e293b]" />;
      case 'Headset':
        return <Headset className="w-3.5 h-3.5 text-[#1e293b]" />;
      default:
        return <Phone className="w-3.5 h-3.5 text-[#1e293b]" />;
    }
  };

  const phoneItem = data.contact_info?.find((item) => item.icon === 'Phone') || data.contact_info?.[0];

  return (
    <div className="bg-[#fff9f6] border-b border-[#f5e6db] text-xs sm:text-[13px]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12 py-1.5 sm:py-2 flex items-center justify-between gap-2">
        
        {/* Left Tagline - Responsive text */}
        <div className="text-[#f05423] font-semibold tracking-tight sm:tracking-normal text-[11px] xs:text-[11.5px] sm:text-xs md:text-[13px] flex items-center gap-1.5 truncate sm:overflow-visible">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f05423] shrink-0 hidden min-[360px]:inline-block animate-pulse"></span>
          <span className="truncate sm:overflow-visible">{data.tagline || 'High-Speed Internet for a Brighter Tomorrow'}</span>
        </div>

        {/* Right Side: Mobile Call Action + Desktop Contact Info */}
        <div className="flex items-center gap-3 shrink-0">
          {phoneItem && (
            <a
              href={phoneItem.href || `tel:${phoneItem.value}`}
              className="sm:hidden inline-flex items-center gap-1 text-[11px] font-bold text-[#1e293b] hover:text-[#f05423] bg-white border border-[#f5e6db] px-2 py-0.5 rounded-full shadow-2xs transition-all active:scale-95 shrink-0"
              title={phoneItem.value}
            >
              <Phone className="w-3 h-3 text-[#f05423]" />
              <span className="hidden min-[420px]:inline">{phoneItem.value}</span>
              <span className="min-[420px]:hidden">Call</span>
            </a>
          )}

          {/* Desktop / Tablet Contact Info with Vertical Dividers */}
          <div className="hidden sm:flex items-center gap-3.5 lg:gap-4 text-[#1e293b]">
            {data.contact_info?.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-gray-300">|</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 hover:text-[#f05423] transition-colors"
                  >
                    {getIcon(item.icon)}
                    <span className="font-medium">{item.value}</span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-1.5">
                    {getIcon(item.icon)}
                    <span className="font-medium">{item.value}</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
