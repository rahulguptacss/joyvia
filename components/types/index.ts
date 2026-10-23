import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  active?: boolean;
  children?: LinkType[];
}

export type NavItem = LinkType;

export interface ContactInfoItem {
  icon: string;
  label?: string;
  value: string;
  href?: string;
}

export interface SocialItem {
  icon: string;
  href: string;
}

export interface TopbarData {
  tagline?: string;
  contact_info: ContactInfoItem[];
  button_text?: string;
  button_link?: string;
  socials?: SocialItem[];
}

export interface HeaderData {
  logo_image?: string;
  logo_text: string;
  phone?: string;
  phone_label?: string;
  phone_href?: string;
  links: LinkType[];
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_image?: string;
  logo_text: string;
  description: string;
  socials: SocialItem[];
  quick_links: LinkType[];
  our_services: LinkType[];
  contact: {
    address: string;
    phone: string;
    email: string;
    hours?: string;
  };
  copyright: string;
}

export interface HeroSectionData {
  badge_text: string;
  title_line1: string;
  title_line2?: string;
  title_highlight: string;
  description: string;
  primary_button: { text: string; href: string };
  secondary_button?: { text: string; href: string };
  image: string;
  floating_badge_top?: {
    text: string;
    subtext?: string;
    video_url?: string;
  };
  floating_badge_bottom?: {
    label: string;
    tag?: string;
    speed: string;
  };
}

export interface AboutSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  title_line2?: string;
  description: string;
  image: string;
  image_secondary?: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  button?: {
    text: string;
    href: string;
  };
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface HighlightsSectionData {
  items: HighlightItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

export interface ServicesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button?: { text: string; href: string };
  items: ServiceItem[];
}

export interface PricingPlan {
  name: string;
  category: string;
  speed: string;
  speed_unit: string;
  price: string;
  billing_period: string;
  icon: string;
  is_popular?: boolean;
  popular_badge?: string;
  button_text: string;
  button_link: string;
  button_variant?: string;
  features: string[];
}

export interface PricingSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  plans: PricingPlan[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
  icon_image?: string;
}

export interface WhyChooseSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  items: WhyChooseItem[];
}

export interface CtaBannerSectionData {
  title_line1: string;
  title_line2?: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  image: string;
}

export interface TestimonialReview {
  text: string;
  author: string;
  role: string;
  location?: string;
  avatar: string;
  rating: number;
}

export interface TestimonialsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  rating_summary: {
    score: string;
    label: string;
    avatars: string[];
  };
  reviews: TestimonialReview[];
}

export interface StatsSectionData {
  items: { value: string; label: string; icon: string }[];
}

export interface ContactCard {
  icon: string;
  title: string;
  value?: string;
  lines?: string[];
  caption?: string;
  href?: string;
}

export interface ContactHighlight {
  icon: string;
  title: string;
  value: string;
}

export interface ContactOfficeAddress {
  title: string;
  address: string;
  button_text?: string;
  directions_url?: string;
}

export interface ContactSectionData {
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  description?: string;
  cards: ContactCard[];
  form: {
    subtitle?: string;
    title?: string;
    title_line1?: string;
    title_highlight?: string;
    description?: string;
    button_text?: string;
    image?: string;
    consent_text?: string;
    placeholders?: {
      name?: string;
      email?: string;
      phone?: string;
      city?: string;
      service_type?: string;
      message?: string;
      plan?: string;
      address?: string;
    };
  };
  location_section?: {
    subtitle?: string;
    title_line1?: string;
    title_highlight?: string;
    description?: string;
    office_address?: ContactOfficeAddress;
    highlights?: ContactHighlight[];
  };
  map?: {
    embed_url?: string;
    office_name?: string;
    office_address?: string;
  };
}

export interface GalleryItem {
  image: string;
  alt: string;
  category: string;
}

export interface GallerySectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  items: GalleryItem[];
}

export interface ServiceDetailFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailSecondary {
  badge?: string;
  title_line1?: string;
  title_highlight?: string;
  description: string;
  image: string;
  checklist: string[];
}

export interface ServiceDetailStepsSection {
  badge?: string;
  title_line1?: string;
  title_highlight?: string;
  steps: ServiceDetailStep[];
}

export interface ServiceDetailItem {
  slug: string;
  title: string;
  badge?: string;
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  description: string;
  image: string;
  features?: string[];
  key_points?: ServiceDetailFeature[];
  secondary_section?: ServiceDetailSecondary;
  steps_section?: ServiceDetailStepsSection;
}

export interface BlogTip {
  number: string;
  title: string;
  description: string;
  image?: string;
}

export interface BlogPost {
  id?: string | number;
  slug?: string;
  day: string;
  month_year: string;
  date_formatted?: string;
  category: string;
  title: string;
  title_line1?: string;
  title_highlight?: string;
  excerpt: string;
  image: string;
  read_more_text?: string;
  read_more_link?: string;
  content?: string[];
  tip?: BlogTip;
  tips?: BlogTip[];
}

export interface BlogsSectionData {
  title?: string;
  posts: BlogPost[];
}

export interface EnquireFeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface EnquireNowData {
  left_section?: {
    tag?: string;
    title_line1?: string;
    title_highlight?: string;
    title_suffix?: string;
    description?: string;
    features?: EnquireFeatureItem[];
    image?: string;
  };
  form?: {
    tag?: string;
    title_line1?: string;
    title_highlight?: string;
    description?: string;
    button_text?: string;
    consent_text?: string;
  };
  bottom_section?: {
    tag?: string;
    title_line1?: string;
    title_highlight?: string;
    features?: EnquireFeatureItem[];
  };
}

export interface BookAPlanData {
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  plans?: { name: string; price: string }[];
  left_section?: EnquireNowData['left_section'];
  form?: EnquireNowData['form'];
  bottom_section?: EnquireNowData['bottom_section'];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  backgroundImage?: string;
}

// Global data references matching electrocare structure
export const siteJson = data;
export const common = data.common;
export const template = data.categories.Broadband.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;

export function toSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
