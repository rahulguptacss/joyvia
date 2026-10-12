import React from 'react';
import { notFound } from 'next/navigation';
import Topbar from '../../../components/sections/Topbar';
import Header from '../../../components/sections/Header';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import ServiceDetails from '../../../components/sections/ServiceDetails';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import { common, sections, toSlug, ServiceDetailItem } from '../../../components/types';

export async function generateStaticParams() {
  return sections.services.items.map(item => ({
    slug: toSlug(item.title),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = sections.services.items.find(item => toSlug(item.title) === slug);
  if (!service) return { title: 'Service Details - Joyvia' };
  return { title: `${service.title} - Joyvia Broadband` };
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceItem = sections.services.items.find(item => toSlug(item.title) === slug);
  if (!serviceItem) notFound();

  const detailsData = sections.service_details?.find(
    sd => sd.slug === slug || toSlug(sd.title) === slug
  );

  const serviceData: ServiceDetailItem = {
    slug,
    title: detailsData?.title || serviceItem.title,
    badge: detailsData?.badge || detailsData?.subtitle || 'HOME BROADBAND',
    subtitle: detailsData?.subtitle || 'HOME BROADBAND',
    title_line1: detailsData?.title_line1 || 'Fast, Reliable Internet',
    title_highlight: detailsData?.title_highlight || 'for Every Home',
    description: detailsData?.description || serviceItem.description,
    image: detailsData?.image || serviceItem.image,
    key_points: detailsData?.key_points,
    secondary_section: detailsData?.secondary_section,
    steps_section: detailsData?.steps_section,
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#0f172a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb
          title="Services Detail"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Services Detail' },
          ]}
          backgroundImage="/images/breadcrumb-bg.webp"
        />
        <ServiceDetails service={serviceData} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
