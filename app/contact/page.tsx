import React from 'react';
import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Contact from '../../components/sections/Contact';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.contact.metadata.title,
};

export default function ContactPage() {
  const pageData = pages.contact;

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
        <Contact data={sections.contact} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
