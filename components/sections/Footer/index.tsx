'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronRight, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FooterData } from '../../types';

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  // Mobile accordion state (default: all collapsed on mobile, expandable on tap)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    quick_links: false,
    our_services: false,
    contact_us: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'facebook':
        return <FaFacebookF className="w-3.5 h-3.5" />;
      case 'instagram':
        return <FaInstagram className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <FaLinkedinIn className="w-3.5 h-3.5" />;
      case 'youtube':
        return <FaYoutube className="w-3.5 h-3.5" />;
      default:
        return <FaFacebookF className="w-3.5 h-3.5" />;
    }
  };

  return (
    <footer className="bg-[#12161b] text-gray-300 pt-7 sm:pt-8 pb-3.5 sm:pb-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main 4 Column Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-y-4 md:gap-y-6 pb-6 sm:pb-7">
          
          {/* Column 1: Logo & Bio & Socials (33% width with right vertical line on desktop) */}
          <div className="w-full lg:w-[33%] shrink-0 flex flex-col justify-between lg:pr-8 xl:pr-10 lg:border-r lg:border-white/10 pb-4 md:pb-0 border-b border-white/10 md:border-b-0">
            <div>
              {/* Logo with significantly increased size and tight bottom spacing */}
              <Link href="/" className="inline-block -mt-1 sm:-mt-2">
                <div className="relative h-16 sm:h-20 lg:h-[84px] w-64 sm:w-76 lg:w-84 -ml-2 sm:-ml-3">
                  <Image
                    src={data.logo_image || '/logo/logo-w.webp'}
                    alt={data.logo_text || 'Joyvia'}
                    fill
                    priority
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 280px, 340px"
                  />
                </div>
              </Link>

              {/* Bio description directly below logo with reduced spacing */}
              <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-xs -mt-2 sm:-mt-3 lg:-mt-3.5 mb-4">
                {data.description ||
                  'Joyvia delivers high-speed, reliable and secure internet services for homes and businesses. Connecting people to a brighter tomorrow.'}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {data.socials?.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#1e252c] border border-white/5 hover:border-[#fa5522] hover:bg-[#fa5522] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                  aria-label={social.icon}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (19% width, Accordion on mobile) */}
          <div className="w-full sm:w-1/2 lg:w-[19%] shrink-0 flex flex-col lg:pl-8 xl:pl-9 pb-3 md:pb-0 border-b border-white/10 md:border-b-0">
            
            {/* Header / Accordion Trigger on Mobile */}
            <button
              type="button"
              onClick={() => toggleSection('quick_links')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer md:cursor-default py-1 md:py-0"
              aria-expanded={openSections.quick_links}
            >
              <div>
                <h4 className="text-white text-sm sm:text-[15px] font-bold tracking-tight mb-1">
                  Quick Links
                </h4>
                <div className="w-7 h-[2px] bg-[#fa5522] rounded-full" />
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#fa5522] md:hidden transition-transform duration-200 ${
                  openSections.quick_links ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Content (always open on md+, collapsible on mobile) */}
            <div
              className={`${
                openSections.quick_links ? 'block pt-3' : 'hidden'
              } md:!block md:pt-3`}
            >
              <ul className="space-y-2 sm:space-y-2.5">
                {data.quick_links?.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-[13px] text-gray-300 hover:text-[#fa5522] transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#fa5522] shrink-0 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Our Services (21% width, Accordion on mobile, right border on desktop) */}
          <div className="w-full sm:w-1/2 lg:w-[21%] shrink-0 flex flex-col lg:pl-6 xl:pl-7 lg:pr-8 xl:pr-9 lg:border-r lg:border-white/10 pb-3 md:pb-0 border-b border-white/10 md:border-b-0">
            
            {/* Header / Accordion Trigger on Mobile */}
            <button
              type="button"
              onClick={() => toggleSection('our_services')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer md:cursor-default py-1 md:py-0"
              aria-expanded={openSections.our_services}
            >
              <div>
                <h4 className="text-white text-sm sm:text-[15px] font-bold tracking-tight mb-1">
                  Our Services
                </h4>
                <div className="w-7 h-[2px] bg-[#fa5522] rounded-full" />
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#fa5522] md:hidden transition-transform duration-200 ${
                  openSections.our_services ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Content (always open on md+, collapsible on mobile) */}
            <div
              className={`${
                openSections.our_services ? 'block pt-3' : 'hidden'
              } md:!block md:pt-3`}
            >
              <ul className="space-y-2 sm:space-y-2.5">
                {data.our_services?.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-[13px] text-gray-300 hover:text-[#fa5522] transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#fa5522] shrink-0 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us (27% width, Accordion on mobile) */}
          <div className="w-full lg:w-[27%] shrink-0 flex flex-col lg:pl-8 xl:pl-9 pb-2 md:pb-0">
            
            {/* Header / Accordion Trigger on Mobile */}
            <button
              type="button"
              onClick={() => toggleSection('contact_us')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer md:cursor-default py-1 md:py-0"
              aria-expanded={openSections.contact_us}
            >
              <div>
                <h4 className="text-white text-sm sm:text-[15px] font-bold tracking-tight mb-1">
                  Contact Us
                </h4>
                <div className="w-7 h-[2px] bg-[#fa5522] rounded-full" />
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#fa5522] md:hidden transition-transform duration-200 ${
                  openSections.contact_us ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Content (always open on md+, collapsible on mobile) */}
            <div
              className={`${
                openSections.contact_us ? 'block pt-3' : 'hidden'
              } md:!block md:pt-3`}
            >
              <ul className="space-y-3">
                {/* Address */}
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1e252c] border border-white/5 flex items-center justify-center text-[#fa5522] shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 fill-[#fa5522]/20" />
                  </div>
                  <span className="text-xs sm:text-[13px] text-gray-300 leading-snug whitespace-pre-line">
                    {data.contact?.address || '123 Network Street,\nNew Delhi, India 110001'}
                  </span>
                </li>

                {/* Phone */}
                {data.contact?.phone && (
                  <li className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1e252c] border border-white/5 flex items-center justify-center text-[#fa5522] shrink-0 shadow-xs">
                      <Phone className="w-3.5 h-3.5 fill-[#fa5522]" />
                    </div>
                    <a
                      href={`tel:${data.contact.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-[13px] text-gray-300 hover:text-[#fa5522] transition-colors font-medium"
                    >
                      {data.contact.phone}
                    </a>
                  </li>
                )}

                {/* Email */}
                {data.contact?.email && (
                  <li className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1e252c] border border-white/5 flex items-center justify-center text-[#fa5522] shrink-0 shadow-xs">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-xs sm:text-[13px] text-gray-300 hover:text-[#fa5522] transition-colors"
                    >
                      {data.contact.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-3.5 sm:pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-gray-400 font-normal">
            {data.copyright || 'Copyright © 2026. All rights reserved. Powered by Lestow'}
          </p>
        </div>

      </div>
    </footer>
  );
}
