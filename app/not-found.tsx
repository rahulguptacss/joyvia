import React from 'react';
import Link from 'next/link';
import Topbar from '../components/sections/Topbar';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { common, pages } from '../components/types';
import { WifiOff, ArrowRight } from 'lucide-react';

export const metadata = {
  title: pages.not_found.metadata.title,
};

export default function NotFound() {
  const pageData = pages.not_found;

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#0f172a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="flex-1 flex items-center justify-center py-20 px-5 sm:px-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 rounded-3xl bg-orange-50 border border-orange-200 text-[#f05423] flex items-center justify-center mx-auto mb-6 shadow-sm">
            <WifiOff className="w-12 h-12" />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-[#f05423] block mb-2">
            {pageData.pageName}
          </span>
          <h1 className="text-4xl font-extrabold text-[#0f172a] mb-4">
            {pageData.heading}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            {pageData.description}
          </p>
          <Link
            href={pageData.button_href || '/'}
            className="inline-flex items-center gap-2 bg-[#f05423] hover:bg-[#d84416] text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>{pageData.button_text}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
