import React from 'react';
import Topbar from '../components/sections/Topbar';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Highlights from '../components/sections/Highlights';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import WhyChoose from '../components/sections/WhyChoose';
import CtaBanner from '../components/sections/CtaBanner';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { common, pages, sections } from '../components/types';

export const metadata = {
  title: pages.home.metadata.title,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#0f172a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Hero data={sections.hero} />
        <About data={sections.about} />
        <Highlights data={sections.highlights} />
        <Services data={sections.services} />
        <Pricing data={sections.pricing} />
        <WhyChoose data={sections.why_choose} />
        <CtaBanner data={sections.cta_banner} />
        <Testimonials data={sections.testimonials} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
