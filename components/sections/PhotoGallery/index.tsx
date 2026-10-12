'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GallerySectionData } from '../../types';

interface GalleryProps {
  data: GallerySectionData;
}

export default function PhotoGallery({ data }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Home', 'Business', 'Gaming', 'Wi-Fi', 'Enterprise'];

  const filteredItems = activeCategory === 'All'
    ? data.items
    : data.items?.filter(item => item.category === activeCategory);

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-[#f05423]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f05423]">
              {data.subtitle || 'OUR GALLERY'}
            </span>
            <div className="w-6 h-0.5 bg-[#f05423]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            {data.title_line1 || 'Joyvia'}{' '}
            <span className="text-[#f05423]">{data.title_highlight || 'Photo Gallery'}</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#f05423] text-white shadow-md'
                  : 'bg-gray-100 hover:bg-orange-50 text-gray-700 hover:text-[#f05423]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-gray-100 border border-gray-100"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-bold text-[#f05423] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-white text-base font-bold">
                  {item.alt}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
