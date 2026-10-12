import React from 'react';
import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Blogs from '../../components/sections/Blogs';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.blogs?.metadata?.title || 'Joyvia - Latest News & Blogs',
};

export default function BlogsPage() {
  const pageData = pages.blogs || {
    title: 'Blogs',
    pageName: 'Blogs',
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
        <Blogs data={sections.blogs} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
