'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Zap,
  Settings,
  MessageSquare,
  Headset,
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Wifi,
  ChevronDown,
  ArrowRight,
  Gauge,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnquireNowData } from '../../types';

interface EnquireNowProps {
  data: EnquireNowData;
}

export default function EnquireNow({ data }: EnquireNowProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
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
        address: '',
        service_type: '',
        message: '',
        consent: false,
      });
    }, 4500);
  };

  const getLeftIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'zap':
      case 'fast':
        return <Zap className="w-5 h-5 text-[#fa5522] fill-[#fa5522]" />;
      case 'settings':
      case 'gear':
      case 'customized':
        return <Settings className="w-5 h-5 text-[#fa5522]" />;
      case 'messagesquare':
      case 'message':
      case 'chat':
        return <MessageSquare className="w-5 h-5 text-[#fa5522]" />;
      case 'headset':
      case 'support':
        return <Headset className="w-5 h-5 text-[#fa5522]" />;
      default:
        return <Zap className="w-5 h-5 text-[#fa5522]" />;
    }
  };

  const getBottomIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'gauge':
      case 'speed':
      case 'plans':
        return <Gauge className="w-6 h-6 text-[#fa5522]" />;
      case 'user':
      case 'team':
      case 'expert':
        return <User className="w-6 h-6 text-[#fa5522]" />;
      case 'settings':
      case 'installation':
      case 'setup':
        return <Settings className="w-6 h-6 text-[#fa5522]" />;
      case 'headset':
      case 'support':
        return <Headset className="w-6 h-6 text-[#fa5522]" />;
      default:
        return <Gauge className="w-6 h-6 text-[#fa5522]" />;
    }
  };

  return (
    <div className="py-8 sm:py-10 lg:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* ========================================================
            ROW 1: TWO COLUMNS (LEFT: INFO + ROUTER IMAGE | RIGHT: FORM)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start mb-14 sm:mb-16 lg:mb-20">
          
          {/* Left Column: Let's Find the Right Plan for You */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#fa5522] rounded-full" />
              <span className="text-xs font-black tracking-widest uppercase text-[#fa5522]">
                {data.left_section?.tag || 'ENQUIRY NOW'}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#0b131c] tracking-tight leading-[1.2] mb-3">
              {data.left_section?.title_line1 || 'Let’s Find the'}{' '}
              <span className="text-[#fa5522]">
                {data.left_section?.title_highlight || 'Right Plan'}
              </span>{' '}
              {data.left_section?.title_suffix || 'for You'}
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 leading-relaxed max-w-lg">
              {data.left_section?.description ||
                'Share your details and our experts will help you choose the best internet plan as per your needs.'}
            </p>

            {/* 4 Feature Points */}
            <div className="space-y-3.5 sm:space-y-4 mb-4 sm:mb-5">
              {data.left_section?.features?.map((f, idx) => (
                <div key={idx} className="flex items-start gap-3.5 sm:gap-4 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fff2eb] flex items-center justify-center shrink-0 mt-0.5 select-none shadow-2xs group-hover:scale-105 transition-transform">
                    {getLeftIcon(f.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-bold text-[#0b131c] mb-0.5 leading-snug">
                      {f.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-normal">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Router Image with Reduced Height */}
            <div className="relative w-full h-36 sm:h-44 lg:h-48 rounded-2xl rounded-tr-[50px] sm:rounded-tr-[60px] overflow-hidden shadow-sm border border-gray-100 bg-slate-100">
              <Image
                src={data.left_section?.image || '/images/service-detail-router.webp'}
                alt="Joyvia High Speed Broadband Router"
                fill
                priority
                className="object-cover object-[center_65%]"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </motion.div>

          {/* Right Column: Enquire Now White Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white rounded-2xl sm:rounded-[26px] p-6 sm:p-8 lg:p-9 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          >
            {/* Tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#fa5522] rounded-full" />
              <span className="text-xs font-black tracking-widest uppercase text-[#fa5522]">
                {data.form?.tag || 'SEND US A MESSAGE'}
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0b131c] tracking-tight leading-tight mb-2">
              {data.form?.title_line1 || 'Enquire'}{' '}
              <span className="text-[#fa5522]">
                {data.form?.title_highlight || 'Now'}
              </span>
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              {data.form?.description ||
                'Fill out the form below and our team will connect with you soon with the best internet solutions.'}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-orange-50/60 border border-[#fa5522]/30 rounded-2xl p-7 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-[#fa5522] mx-auto mb-2.5" />
                <h4 className="text-lg font-bold text-[#0b131c]">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-md mx-auto">
                  Thank you! Our broadband specialist will review your details and contact you shortly with the best customized plan.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
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
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
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
                      placeholder="City *"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Address (Optional) */}
                <div className="relative">
                  <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Address (Optional)"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all"
                  />
                </div>

                {/* Row 4: Custom Modern Service Type Dropdown - Smooth & Mobile Responsive */}
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
                      {formData.service_type || 'Service Type *'}
                    </span>
                    <ChevronDown
                      className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-[#fa5522]' : 'text-gray-400'
                      }`}
                    />
                  </button>

                  {/* Hidden input to enforce HTML5 required validation */}
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

                {/* Row 5: Your Message (Optional) */}
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  <textarea
                    rows={4}
                    placeholder="Your Message (Optional)"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-3.5 py-3 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#fa5522] focus:ring-1 focus:ring-[#fa5522] transition-all resize-none"
                  />
                </div>

                {/* Row 6: Consent Checkbox */}
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

                {/* Row 7: Submit Button */}
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

        </div>

        {/* ========================================================
            ROW 2: "WHY ENQUIRE WITH JOYVIA" (4 Circular Features in 1 Row)
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center pt-4"
        >
          {/* Centered Tag */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#fa5522] rounded-full" />
            <span className="text-xs font-black tracking-widest uppercase text-[#fa5522]">
              {data.bottom_section?.tag || 'WHY ENQUIRE WITH JOYVIA'}
            </span>
            <span className="w-5 h-[2px] bg-[#fa5522] rounded-full" />
          </div>

          {/* Centered Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0b131c] tracking-tight leading-tight max-w-2xl mx-auto mb-8 sm:mb-12">
            {data.bottom_section?.title_line1 || 'A Faster, Smarter and More'}{' '}
            <span className="text-[#fa5522]">
              {data.bottom_section?.title_highlight || 'Reliable Internet Experience'}
            </span>
          </h2>

          {/* 4 Feature Badges (2 per row on mobile, 4 on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {data.bottom_section?.features?.map((f, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center p-3 sm:p-4 group"
              >
                {/* Round Soft-Orange Icon Circle */}
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#fff2eb] flex items-center justify-center mb-3 sm:mb-4 select-none group-hover:scale-105 transition-transform shadow-2xs">
                  {getBottomIcon(f.icon)}
                </div>

                {/* Feature Title */}
                <h4 className="text-sm sm:text-base font-bold text-[#0b131c] tracking-tight mb-1">
                  {f.title}
                </h4>

                {/* Feature Subtext */}
                <p className="text-xs sm:text-[13px] text-gray-500 font-normal leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
