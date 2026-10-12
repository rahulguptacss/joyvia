'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Wifi,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  Train,
  Car,
  Building2,
  CheckCircle2,
  ExternalLink,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactSectionData } from '../../types';

interface ContactProps {
  data: ContactSectionData;
}

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service_type: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    'Home Broadband',
    'Business Internet',
    'Wi-Fi Solutions',
    'Dedicated Internet',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanNumbers = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, phone: cleanNumbers }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        service_type: '',
        message: '',
        consent: false,
      });
    }, 4500);
  };

  const getTopCardIcon = (iconName: string) => {
    const iconClass = 'w-4 h-4 sm:w-5 sm:h-5 text-[#fa5522]';
    switch (iconName.toLowerCase()) {
      case 'phone':
        return <Phone className={`${iconClass} fill-[#fa5522]`} />;
      case 'mail':
        return <Mail className={`${iconClass} fill-[#fa5522]/20`} />;
      case 'mappin':
        return <MapPin className={`${iconClass} fill-[#fa5522]`} />;
      case 'clock':
        return <Clock className={iconClass} />;
      default:
        return <MapPin className={iconClass} />;
    }
  };

  const getHighlightIcon = (iconName: string) => {
    const iconClass = 'w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#fa5522]';
    switch (iconName.toLowerCase()) {
      case 'train':
      case 'metro':
        return <Train className={iconClass} />;
      case 'car':
      case 'parking':
        return <Car className={iconClass} />;
      case 'building2':
      case 'building':
      case 'landmark':
        return <Building2 className={iconClass} />;
      default:
        return <MapPin className={iconClass} />;
    }
  };

  return (
    <div className="py-8 sm:py-10 lg:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* ========================================================
            ROW 1: TOP 4 INFO CARDS (2 per row on mobile: grid-cols-2)
            ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {data.cards?.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-100 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(250,85,34,0.06)] hover:border-orange-100 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Round Orange Icon */}
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#fff2eb] flex items-center justify-center mb-2 sm:mb-3.5 select-none">
                  {getTopCardIcon(card.icon)}
                </div>

                {/* Card Title */}
                <h3 className="text-xs sm:text-base font-bold text-[#0b131c] tracking-tight mb-1 sm:mb-1.5">
                  {card.title}
                </h3>

                {/* Phone/Email/Address Lines */}
                <div className="space-y-0.5 text-[11px] sm:text-[13px] font-semibold text-gray-700 leading-snug break-words">
                  {card.lines ? (
                    card.lines.map((line, lIdx) => (
                      <div key={lIdx}>
                        {card.href && (card.icon === 'Phone' || card.icon === 'Mail') ? (
                          <a
                            href={card.href}
                            className="hover:text-[#fa5522] transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <span>{line}</span>
                        )}
                      </div>
                    ))
                  ) : (
                    <span>{card.value}</span>
                  )}
                </div>
              </div>

              {/* Bottom Caption */}
              {card.caption && (
                <div className="mt-2.5 sm:mt-3.5 pt-2 sm:pt-2.5 border-t border-gray-100/70">
                  <span className="text-[10px] sm:text-xs text-gray-400 font-normal leading-tight line-clamp-1 sm:line-clamp-none">
                    {card.caption}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            ROW 2: GET IN TOUCH FORM + OFFICE RECEPTION PHOTO
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14 sm:mb-16 lg:mb-20">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#fa5522] rounded-full" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#fa5522]">
                {data.form?.subtitle || 'SEND US A MESSAGE'}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0b131c] tracking-tight leading-tight mb-2">
              {data.form?.title_line1 || 'Get In'}{' '}
              <span className="text-[#fa5522]">
                {data.form?.title_highlight || 'Touch'}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              {data.form?.description ||
                'Fill out the form below and our team will get back to you as soon as possible.'}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-orange-50/60 border border-[#fa5522]/30 rounded-2xl p-7 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-[#fa5522] mx-auto mb-2.5" />
                <h4 className="text-lg font-bold text-[#0b131c]">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-md mx-auto">
                  Your enquiry has been received. Our Joyvia broadband specialist will connect with you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Inputs Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder={data.form?.placeholders?.name || 'Full Name *'}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder={data.form?.placeholders?.phone || 'Phone Number *'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all"
                    />
                  </div>
                </div>

                {/* Inputs Row 2: Email Address & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder={data.form?.placeholders?.email || 'Email Address *'}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder={data.form?.placeholders?.city || 'City *'}
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Custom Modern Service Type Dropdown - Smooth & Mobile Responsive */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(prev => !prev)}
                    className={`w-full bg-white border rounded-xl pl-10 pr-10 py-3 text-xs sm:text-[13.5px] text-left flex items-center justify-between transition-all cursor-pointer select-none touch-manipulation min-h-[46px] ${
                      isDropdownOpen
                        ? 'border-[#fa5522] ring-1 ring-[#fa5522] shadow-sm'
                        : 'border-gray-200/90 hover:border-gray-300'
                    }`}
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                  >
                    <Wifi
                      className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                        formData.service_type || isDropdownOpen ? 'text-[#fa5522]' : 'text-gray-400'
                      }`}
                    />
                    <span className={formData.service_type ? 'text-gray-800 font-medium' : 'text-gray-400'}>
                      {formData.service_type || data.form?.placeholders?.service_type || 'Service Type *'}
                    </span>
                    <ChevronDown
                      className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-[#fa5522]' : 'text-gray-400'
                      }`}
                    />
                  </button>

                  {/* Hidden input to enforce HTML5 validation if required */}
                  <input
                    type="text"
                    required
                    value={formData.service_type}
                    onChange={() => {}}
                    className="sr-only pointer-events-none"
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        role="listbox"
                        className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-white border border-gray-100 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] py-1.5 max-h-56 sm:max-h-64 overflow-y-auto overscroll-contain divide-y divide-gray-50 touch-pan-y"
                      >
                        {serviceOptions.map(option => {
                          const isSelected = formData.service_type === option;
                          return (
                            <li
                              key={option}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData(prev => ({ ...prev, service_type: option }));
                                setIsDropdownOpen(false);
                              }}
                              className={`px-4 py-3 sm:py-2.5 text-xs sm:text-[13.5px] cursor-pointer flex items-center justify-between transition-colors touch-manipulation select-none active:bg-[#fff2eb] ${
                                isSelected
                                  ? 'bg-[#fff2eb] text-[#fa5522] font-semibold'
                                  : 'text-gray-700 hover:bg-[#fff2eb]/60 hover:text-[#fa5522]'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                    isSelected ? 'bg-[#fa5522]' : 'bg-gray-300'
                                  }`}
                                />
                                <span>{option}</span>
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-[#fa5522]" />}
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Row 4: Your Message (Optional) */}
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  <textarea
                    rows={4}
                    placeholder={data.form?.placeholders?.message || 'Your Message (Optional)'}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all resize-none"
                  />
                </div>

                {/* Row 5: Consent Checkbox */}
                <label className="flex items-center gap-2.5 text-xs sm:text-[12.5px] text-gray-600 cursor-pointer select-none pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                    className="accent-[#fa5522] rounded w-4 h-4 cursor-pointer"
                  />
                  <span>
                    {data.form?.consent_text || 'I agree to be contacted by Joyvia for my enquiry.'}
                  </span>
                </label>

                {/* Row 6: Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#fa5522] hover:bg-[#e04515] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <span>{data.form?.button_text || 'Submit Enquiry'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Office Reception Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative w-full min-h-[360px] sm:min-h-[440px] lg:min-h-full rounded-2xl sm:rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 bg-slate-100"
          >
            <Image
              src={data.form?.image || '/images/contact-reception.webp'}
              alt="Joyvia Modern Office Reception"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
            />
          </motion.div>

        </div>

        {/* ========================================================
            ROW 3: FIND US EASILY + INTERACTIVE MAP
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Office Address Card + Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#fa5522] rounded-full" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#fa5522]">
                {data.location_section?.subtitle || 'OUR LOCATION'}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0b131c] tracking-tight leading-tight mb-2">
              {data.location_section?.title_line1 || 'Find Us'}{' '}
              <span className="text-[#fa5522]">
                {data.location_section?.title_highlight || 'Easily'}
              </span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              {data.location_section?.description ||
                'Visit our office or get in touch with us. We are conveniently located and easily accessible.'}
            </p>

            {/* Our Office Address Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-[0_2px_14px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#fff2eb] text-[#fa5522] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 fill-[#fa5522]/20" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0b131c] mb-1">
                    {data.location_section?.office_address?.title || 'Our Office Address'}
                  </h4>
                  <p className="text-xs text-gray-500 leading-snug whitespace-pre-line">
                    {data.location_section?.office_address?.address ||
                      '123 Tech Park, MG Road,\nBangalore - 560001, India'}
                  </p>
                </div>
              </div>

              <a
                href={
                  data.location_section?.office_address?.directions_url ||
                  'https://maps.google.com/?q=MG+Road+Bangalore'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 border border-[#fa5522] text-[#fa5522] hover:bg-[#fa5522] hover:text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer self-start sm:self-auto"
              >
                <span>
                  {data.location_section?.office_address?.button_text || 'Get Directions'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 3 Location Highlights (Nearest Metro, Parking, Landmark) - 1 row on mobile (grid-cols-3) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {data.location_section?.highlights?.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 sm:gap-3 min-w-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#fff2eb] flex items-center justify-center shrink-0 select-none">
                    {getHighlightIcon(h.icon)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-[11px] sm:text-xs font-bold text-[#0b131c] leading-tight truncate sm:whitespace-normal">
                      {h.title}
                    </h5>
                    <span className="text-[10px] sm:text-[11.5px] text-gray-400 font-medium block truncate sm:whitespace-normal leading-tight mt-0.5">
                      {h.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Google Maps Container with Overlay Pin & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 relative w-full min-h-[340px] sm:min-h-[400px] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 bg-[#e5e3df]"
          >
            {/* Embedded Google Map iframe */}
            <iframe
              src={
                data.map?.embed_url ||
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985551989069!2d77.6074!3d12.9734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16799014529d%3A0xc3b8655866f8e79b!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
              }
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Joyvia Office Location"
            />

            {/* Top-Left Map Card Overlay matching screenshot */}
            <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs rounded-xl p-3 sm:p-3.5 shadow-md border border-gray-100 max-w-[220px] sm:max-w-[240px] z-10 pointer-events-auto">
              <h5 className="text-xs sm:text-[13px] font-black text-[#0b131c]">
                {data.map?.office_name || 'Joyvia'}
              </h5>
              <p className="text-[10.5px] sm:text-[11px] text-gray-500 leading-tight mt-0.5 mb-1.5">
                {data.map?.office_address || '123 Tech Park, MG Road, Bangalore - 560001, India'}
              </p>
              <a
                href={
                  data.location_section?.office_address?.directions_url ||
                  'https://maps.google.com/?q=MG+Road+Bangalore'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10.5px] sm:text-[11px] font-bold text-[#fa5522] hover:underline inline-flex items-center gap-1"
              >
                <span>View larger map</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* Center Pin Marker matching screenshot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-lg border border-orange-100">
              <div className="w-5 h-5 rounded-full bg-[#fa5522] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-3 h-3 fill-white" />
              </div>
              <span className="text-xs font-extrabold text-[#0b131c] tracking-tight">
                Joyvia
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
