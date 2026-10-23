'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Star, ArrowLeft, ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialsSectionData } from '../../types';

interface TestimonialsProps {
  data: TestimonialsSectionData;
  isGrid?: boolean;
}

export default function Testimonials({ data, isGrid = false }: TestimonialsProps) {
  const reviews = data.reviews || [];

  // ==========================
  // GRID MODE (For /testimonials page matching screenshot)
  // ==========================
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;
  const totalPages = Math.max(1, Math.min(3, Math.ceil(reviews.length / ITEMS_PER_PAGE) || 3));

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // If fewer than 9 on page 2 or 3, loop around from reviews
  const gridReviews = [...reviews.slice(startIndex, startIndex + ITEMS_PER_PAGE)];
  if (gridReviews.length < ITEMS_PER_PAGE && reviews.length > 0) {
    while (gridReviews.length < ITEMS_PER_PAGE) {
      gridReviews.push(...reviews.slice(0, ITEMS_PER_PAGE - gridReviews.length));
    }
  }

  // ==========================
  // SLIDER MODE (For Homepage matching 1-by-1 auto-slide)
  // ==========================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive cards per view for slider mode
  useEffect(() => {
    if (isGrid) return;
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isGrid]);

  // Duplicate items for infinite seamless 1-by-1 sliding
  const displayReviews = [...reviews, ...reviews.slice(0, 3)];

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(reviews.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(reviews.length - 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex, reviews.length]);

  useEffect(() => {
    if (isGrid) return;
    if (currentIndex >= reviews.length) {
      resetTimerRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 460);
    }
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [currentIndex, reviews.length, isGrid]);

  useEffect(() => {
    if (isGrid || isPaused || reviews.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, reviews.length, isGrid]);

  const activeDot = Math.min(2, Math.floor((currentIndex % reviews.length) / 2));

  const handleDotClick = (dotIdx: number) => {
    setIsTransitioning(true);
    setCurrentIndex(dotIdx * 2);
  };

  const translateX = (currentIndex * 100) / cardsPerView;

  // ==========================
  // RENDER: GRID VIEW (Exact Screenshot Match)
  // ==========================
  if (isGrid) {
    return (
      <section className="py-10 sm:py-12 lg:py-14 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* 3x3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6.5">
            {gridReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(250,85,34,0.07)] hover:border-orange-100/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: 5 Amber Stars (Left) & Double Quote Mark (Right) */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {[...Array(review.rating || 5)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-3.5 h-3.5 fill-current text-[#fa5522]"
                        />
                      ))}
                    </div>

                    <div className="text-[#fcdcd3] select-none">
                      <svg className="w-7 h-7 fill-current" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6 0 2.8 1.9 5.2 4.5 5.8-.3 1.8-1.5 3.3-3.2 4-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4 3-1.3 5-4.1 5-7.3V14c0-3.3-2.7-6-6-6zm14 0c-3.3 0-6 2.7-6 6 0 2.8 1.9 5.2 4.5 5.8-.3 1.8-1.5 3.3-3.2 4-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4 3-1.3 5-4.1 5-7.3V14c0-3.3-2.7-6-6-6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Middle: Review Quote Text */}
                  <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-5">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Bottom Row: User Avatar + Author Name + City Location */}
                <div className="flex items-center gap-3 pt-3.5 border-t border-gray-100/80">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-orange-100 shrink-0 shadow-xs">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="text-sm font-extrabold text-[#0b131c] tracking-tight leading-snug">
                      {review.author}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
                      <MapPin className="w-3 h-3 text-[#fa5522] fill-[#fa5522]/20 shrink-0" />
                      <span>{review.location || review.role.split(',')[1]?.trim() || review.role}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Pagination Controls: [ < ] [ 1 ] [ 2 ] [ 3 ] [ > ] */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-[#fa5522] hover:text-[#fa5522] text-xs transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }).map((_, pIdx) => {
              const pageNum = pIdx + 1;
              const isActive = currentPage === pageNum;

              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                    isActive
                      ? 'bg-[#fa5522] text-white shadow-orange-500/20'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-[#fa5522] hover:text-[#fa5522]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Arrow */}
            <button
              type="button"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-[#fa5522] hover:text-[#fa5522] text-xs transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>

        </div>
      </section>
    );
  }

  // ==========================
  // RENDER: HOMEPAGE SLIDER VIEW (1-by-1 Continuous Auto-Slide)
  // ==========================
  return (
    <section
      className="py-5 sm:py-7 lg:py-8 bg-[#fffdfb] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header & Floating Rating Card */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4 sm:mb-5">
          
          {/* Left Text Block */}
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="w-6 h-[2.5px] bg-[#fa5522] rounded-full inline-block" />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-wider uppercase text-[#fa5522]">
                {data.subtitle || 'CUSTOMER REVIEWS'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0b131c] leading-[1.15] tracking-tight mb-1.5 sm:mb-2">
              {data.title_line1 || 'What Our'}{' '}
              <span className="text-[#fa5522]">
                {data.title_highlight || 'Customers Say'}
              </span>
            </h2>

            <p className="text-gray-500 text-xs sm:text-[14px] leading-relaxed max-w-lg">
              {data.description ||
                'Trusted by thousands of happy customers for fast, reliable and uninterrupted internet services.'}
            </p>
          </div>
        </div>

        {/* 1-by-1 Continuous Sliding Track */}
        <div className="overflow-hidden py-1">
          <div
            className="flex -mx-2 sm:-mx-2.5 items-stretch"
            style={{
              transform: `translateX(-${translateX}%)`,
              transition: isTransitioning
                ? 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none',
            }}
          >
            {displayReviews.map((review, idx) => (
              <div
                key={idx}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-2.5"
              >
                <div className="bg-white rounded-2xl sm:rounded-[22px] p-4.5 sm:p-5 border border-orange-100/70 shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(250,85,34,0.08)] hover:border-orange-200 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between mb-2.5">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-orange-100/80 shadow-xs shrink-0">
                          <Image
                            src={review.avatar}
                            alt={review.author}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h4 className="text-[14px] sm:text-[15px] font-extrabold text-[#0b131c] tracking-tight leading-snug">
                            {review.author}
                          </h4>
                          <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium">
                            {review.role}
                          </p>
                          <div className="flex items-center gap-0.5 text-[#fbbf24] mt-0.5">
                            {[...Array(review.rating || 5)].map((_, sIdx) => (
                              <Star
                                key={sIdx}
                                className="w-3.5 h-3.5 fill-current text-[#f59e0b]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 text-[#fcdcd3] select-none pl-1">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6 0 2.8 1.9 5.2 4.5 5.8-.3 1.8-1.5 3.3-3.2 4-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4 3-1.3 5-4.1 5-7.3V14c0-3.3-2.7-6-6-6zm14 0c-3.3 0-6 2.7-6 6 0 2.8 1.9 5.2 4.5 5.8-.3 1.8-1.5 3.3-3.2 4-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4 3-1.3 5-4.1 5-7.3V14c0-3.3-2.7-6-6-6z" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-normal mt-2">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls: Left Arrow, 3 Pagination Dots, Right Arrow */}
        <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-4 sm:mt-5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-orange-200/90 bg-white hover:bg-orange-50 text-[#fa5522] flex items-center justify-center shadow-xs hover:border-[#fa5522] active:scale-90 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          <div className="flex items-center gap-1.5 px-1">
            {[0, 1, 2].map(dotIdx => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => handleDotClick(dotIdx)}
                aria-label={`Go to slide group ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeDot === dotIdx
                    ? 'w-6 sm:w-7 h-2 bg-[#fa5522]'
                    : 'w-2 h-2 bg-[#fcdcd3] hover:bg-[#fba27d]'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-orange-200/90 bg-white hover:bg-orange-50 text-[#fa5522] flex items-center justify-center shadow-xs hover:border-[#fa5522] active:scale-90 transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

      </div>
    </section>
  );
}
