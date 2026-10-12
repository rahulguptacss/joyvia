import React from 'react';
import Link from 'next/link';
import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages } from '../../components/types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: pages.thank_you.metadata.title,
};

export default function ThankYouPage() {
  const pageData = pages.thank_you;

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#0f172a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb
          title={pageData.title}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: pageData.pageName },
          ]}
          backgroundImage="/images/breadcrumb-bg.webp"
        />

        <div className="py-16 sm:py-24 text-center max-w-xl mx-auto px-5 sm:px-8">
          <div className="w-20 h-20 rounded-full bg-orange-100 text-[#f05423] flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
            Thank You for Choosing Joyvia!
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Your inquiry has been successfully submitted. Our broadband support team will get in touch with you shortly.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#f05423] hover:bg-[#d84416] text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>Return to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
