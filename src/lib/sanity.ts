import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '1os0kj8d',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Helper to get localized field
export function localize(obj: any, language: string): string {
  if (!obj) return '';
  return obj[language] || obj['en'] || '';
}

// ============================================================
// Query helpers
// ============================================================

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getTreatments() {
  return sanityClient.fetch(`*[_type == "treatment"] | order(order asc)`);
}

export async function getTreatmentBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "treatment" && slug.current == $slug][0]`, { slug });
}

export async function getDoctors() {
  return sanityClient.fetch(`*[_type == "doctor"] | order(order asc)`);
}

export async function getTestimonials(featured?: boolean) {
  const filter = featured ? ' && featured == true' : '';
  return sanityClient.fetch(`*[_type == "testimonial"${filter}] | order(date desc)`);
}

export async function getBlogPosts(category?: string) {
  const filter = category ? ' && category == $category' : '';
  return sanityClient.fetch(
    `*[_type == "blogPost"${filter}] | order(publishedAt desc)`,
    category ? { category } : {}
  );
}

export async function getBlogPostBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug });
}

export async function getFAQs(category?: string) {
  const filter = category ? ' && category == $category' : '';
  return sanityClient.fetch(`*[_type == "faq"${filter}] | order(order asc)`);
}

export async function getPricingPackages() {
  return sanityClient.fetch(`*[_type == "pricingPackage"] | order(order asc) {
    ...,
    treatment->{ title, slug, category }
  }`);
}

export async function getPageBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug });
}
