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

  return (
    <div className="bg-[#fff9f6] border-b border-[#f5e6db] text-xs sm:text-[13px]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-2 sm:py-2.5 flex items-center justify-between">
        
        {/* Left Tagline - Orange Text matching screenshot */}
        <div className="text-[#f05423] font-medium tracking-wide">
          {data.tagline || 'High-Speed Internet for a Brighter Tomorrow'}
        </div>

        {/* Right Contact Info with Vertical Dividers */}
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
  );
}
