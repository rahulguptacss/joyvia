import React from 'react';
import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Testimonials from '../../components/sections/Testimonials';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.testimonials?.metadata?.title || 'Joyvia - Customer Testimonials',
};

export default function TestimonialsPage() {
  const pageData = pages.testimonials || {
    title: 'Testimonials',
    pageName: 'Testimonials',
  };

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
        <Testimonials data={sections.testimonials} isGrid={true} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
