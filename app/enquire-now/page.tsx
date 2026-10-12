import React from 'react';
import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import EnquireNow from '../../components/sections/EnquireNow';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.enquire_now.metadata.title,
};

export default function EnquireNowPage() {
  const pageData = pages.enquire_now;

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#0f172a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb
          title={pageData.title || "Enquire Now"}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: pageData.pageName || 'Enquire Now' },
          ]}
          backgroundImage="/images/breadcrumb-bg.webp"
        />
        <EnquireNow data={sections.enquire_now} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
