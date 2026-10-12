import React from 'react';
import { notFound } from 'next/navigation';
import Topbar from '../../../components/sections/Topbar';
import Header from '../../../components/sections/Header';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import BlogDetails from '../../../components/sections/BlogDetails';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import { common, sections, pages, toSlug } from '../../../components/types';

export async function generateStaticParams() {
  const posts = sections.blogs?.posts || [];
  return posts.map(post => ({
    slug: post.slug || toSlug(post.title),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = sections.blogs?.posts || [];
  const post = posts.find(p => (p.slug || toSlug(p.title)) === slug);
  if (!post) return { title: pages.blog_details?.metadata?.title || 'Blogs Detail - Joyvia' };
  return { title: `${post.title} - Joyvia Broadband` };
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = sections.blogs?.posts || [];
  const currentPost = posts.find(p => (p.slug || toSlug(p.title)) === slug);

  if (!currentPost) {
    notFound();
  }

  const pageData = pages.blog_details;

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#0f172a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb
          title={pageData?.title || "Blogs Detail"}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: pageData?.pageName || 'Blogs Detail' },
          ]}
          backgroundImage="/images/breadcrumb-bg.webp"
        />
        <BlogDetails data={sections.blog_details} post={currentPost} recentPosts={posts} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
