#!/usr/bin/env node
// Setup Sanity Schemas for Sekhmet Wellness Journeys
// Run: node setup-sanity-schemas.mjs

import fs from 'fs';
import path from 'path';

const STUDIO_SCHEMA_DIR = 'studio/schemaTypes';

// Ensure directory exists
if (!fs.existsSync(STUDIO_SCHEMA_DIR)) {
  fs.mkdirSync(STUDIO_SCHEMA_DIR, { recursive: true });
}

// ============================================================
// 1. TREATMENT SCHEMA
// ============================================================
const treatment = `import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'treatment',
  title: 'Treatment',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title.en', maxLength: 96},
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Dental', value: 'dental'},
          {title: 'Cosmetic', value: 'cosmetic'},
          {title: 'Fertility', value: 'fertility'},
          {title: 'Eye', value: 'eye'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'en', type: 'text', title: 'English'},
        {name: 'ar', type: 'text', title: 'Arabic'},
        {name: 'fr', type: 'text', title: 'French'},
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'priceFrom',
      title: 'Price From (USD)',
      type: 'number',
    }),
    defineField({
      name: 'savings',
      title: 'Savings Percentage',
      type: 'string',
      description: 'e.g. "Up to 70%"',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'procedures',
      title: 'Procedures',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'object',
              fields: [
                {name: 'en', type: 'string', title: 'English'},
                {name: 'ar', type: 'string', title: 'Arabic'},
                {name: 'fr', type: 'string', title: 'French'},
              ],
            },
            {name: 'priceEgypt', type: 'number', title: 'Price Egypt (USD)'},
            {name: 'priceUK', type: 'number', title: 'Price UK (USD)'},
            {name: 'priceUS', type: 'number', title: 'Price US (USD)'},
          ],
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'object',
      fields: [
        {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}, {type: 'image'}]},
        {name: 'ar', type: 'array', title: 'Arabic', of: [{type: 'block'}, {type: 'image'}]},
        {name: 'fr', type: 'array', title: 'French', of: [{type: 'block'}, {type: 'image'}]},
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'title.en', media: 'heroImage', category: 'category'},
    prepare({title, media, category}) {
      return {title, subtitle: category, media}
    },
  },
})
`;

// ============================================================
// 2. DOCTOR SCHEMA
// ============================================================
const doctor = `import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'doctor',
  title: 'Doctor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'specialty',
      title: 'Specialty',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'object',
      fields: [
        {name: 'en', type: 'text', title: 'English'},
        {name: 'ar', type: 'text', title: 'Arabic'},
        {name: 'fr', type: 'text', title: 'French'},
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'object',
      fields: [
        {name: 'en', type: 'text', title: 'English'},
        {name: 'ar', type: 'text', title: 'Arabic'},
        {name: 'fr', type: 'text', title: 'French'},
      ],
    }),
    defineField({
      name: 'yearsExperience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'hospital',
      title: 'Hospital / Clinic',
      type: 'string',
    }),
    defineField({
      name: 'languages',
      title: 'Languages Spoken',
      type: 'array',
      of: [{type: 'string'}],
      options: {list: ['English', 'Arabic', 'French', 'German', 'Turkish']},
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'specialty.en', media: 'photo'},
  },
})
`;

// ============================================================
// 3. TESTIMONIAL SCHEMA
// ============================================================
const testimonial = `import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Patient Story',
  type: 'document',
  fields: [
    defineField({
      name: 'patientName',
      title: 'Patient Name',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Patient Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'treatment',
      title: 'Treatment Received',
      type: 'reference',
      to: [{type: 'treatment'}],
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'object',
      fields: [
        {name: 'en', type: 'text', title: 'English'},
        {name: 'ar', type: 'text', title: 'Arabic'},
        {name: 'fr', type: 'text', title: 'French'},
      ],
    }),
    defineField({
      name: 'fullStory',
      title: 'Full Story',
      type: 'object',
      fields: [
        {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}]},
        {name: 'ar', type: 'array', title: 'Arabic', of: [{type: 'block'}]},
        {name: 'fr', type: 'array', title: 'French', of: [{type: 'block'}]},
      ],
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Testimonial URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
  ],
  preview: {
    select: {title: 'patientName', subtitle: 'country', media: 'photo'},
  },
})
`;

// ============================================================
// 4. BLOG POST SCHEMA
// ============================================================
const blogPost = `import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title.en', maxLength: 96},
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        {name: 'en', type: 'text', title: 'English', rows: 3},
        {name: 'ar', type: 'text', title: 'Arabic', rows: 3},
        {name: 'fr', type: 'text', title: 'French', rows: 3},
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cost Guides', value: 'cost-guides'},
          {title: 'Treatment Guides', value: 'treatment-guides'},
          {title: 'Patient Stories', value: 'patient-stories'},
          {title: 'Egypt Travel', value: 'egypt-travel'},
          {title: 'News', value: 'news'},
        ],
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'doctor'}],
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name (if not a doctor)',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}, {type: 'image'}]},
        {name: 'ar', type: 'array', title: 'Arabic', of: [{type: 'block'}, {type: 'image'}]},
        {name: 'fr', type: 'array', title: 'French', of: [{type: 'block'}, {type: 'image'}]},
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'title.en', subtitle: 'category', media: 'coverImage'},
  },
  orderings: [
    {title: 'Published Date', name: 'publishedAtDesc', by: [{field: 'publishedAt', direction: 'desc'}]},
  ],
})
`;

// ============================================================
// 5. FAQ SCHEMA
// ============================================================
const faq = `import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'object',
      fields: [
        {name: 'en', type: 'text', title: 'English'},
        {name: 'ar', type: 'text', title: 'Arabic'},
        {name: 'fr', type: 'text', title: 'French'},
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Travel & Logistics', value: 'travel'},
          {title: 'Medical', value: 'medical'},
          {title: 'Pricing & Payment', value: 'pricing'},
          {title: 'Aftercare', value: 'aftercare'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'question.en', subtitle: 'category'},
  },
})
`;

// ============================================================
// 6. PRICING PACKAGE SCHEMA
// ============================================================
const pricingPackage = `import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pricingPackage',
  title: 'Pricing Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'treatment',
      title: 'Treatment',
      type: 'reference',
      to: [{type: 'treatment'}],
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {list: ['Essential', 'Premium', 'VIP']},
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
    }),
    defineField({
      name: 'includes',
      title: 'Includes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'item',
              type: 'object',
              fields: [
                {name: 'en', type: 'string', title: 'English'},
                {name: 'ar', type: 'string', title: 'Arabic'},
                {name: 'fr', type: 'string', title: 'French'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'popular',
      title: 'Most Popular',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'name.en', subtitle: 'tier'},
  },
})
`;

// ============================================================
// 7. SITE SETTINGS (SINGLETON)
// ============================================================
const siteSettings = `import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'CTA Primary Text',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'CTA Secondary Text',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'trustSignals',
      title: 'Trust Signals',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'object',
              fields: [
                {name: 'en', type: 'string', title: 'English'},
                {name: 'ar', type: 'string', title: 'Arabic'},
                {name: 'fr', type: 'string', title: 'French'},
              ],
            },
            {name: 'icon', type: 'string', title: 'Icon Name (lucide)'},
          ],
        },
      ],
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {name: 'en', type: 'text', title: 'English'},
        {name: 'ar', type: 'text', title: 'Arabic'},
        {name: 'fr', type: 'text', title: 'French'},
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {name: 'facebook', type: 'url', title: 'Facebook'},
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'twitter', type: 'url', title: 'Twitter/X'},
        {name: 'youtube', type: 'url', title: 'YouTube'},
        {name: 'tiktok', type: 'url', title: 'TikTok'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
`;

// ============================================================
// 8. PAGE SCHEMA (for About, Contact, Travel Guide etc.)
// ============================================================
const page = `import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title.en', maxLength: 96},
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'ar', type: 'string', title: 'Arabic'},
        {name: 'fr', type: 'string', title: 'French'},
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'object',
      fields: [
        {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}, {type: 'image'}]},
        {name: 'ar', type: 'array', title: 'Arabic', of: [{type: 'block'}, {type: 'image'}]},
        {name: 'fr', type: 'array', title: 'French', of: [{type: 'block'}, {type: 'image'}]},
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              type: 'object',
              fields: [
                {name: 'en', type: 'string', title: 'English'},
                {name: 'ar', type: 'string', title: 'Arabic'},
                {name: 'fr', type: 'string', title: 'French'},
              ],
            },
            {
              name: 'content',
              type: 'object',
              fields: [
                {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}, {type: 'image'}]},
                {name: 'ar', type: 'array', title: 'Arabic', of: [{type: 'block'}, {type: 'image'}]},
                {name: 'fr', type: 'array', title: 'French', of: [{type: 'block'}, {type: 'image'}]},
              ],
            },
            {name: 'image', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title.en', media: 'heroImage'},
  },
})
`;

// ============================================================
// Write all schema files
// ============================================================
const schemas = {
  'treatment.ts': treatment,
  'doctor.ts': doctor,
  'testimonial.ts': testimonial,
  'blogPost.ts': blogPost,
  'faq.ts': faq,
  'pricingPackage.ts': pricingPackage,
  'siteSettings.ts': siteSettings,
  'page.ts': page,
};

for (const [filename, content] of Object.entries(schemas)) {
  fs.writeFileSync(path.join(STUDIO_SCHEMA_DIR, filename), content.trim() + '\n');
  console.log(`✅ Created ${filename}`);
}

// ============================================================
// Update index.ts to export all schemas
// ============================================================
const indexContent = `import treatment from './treatment'
import doctor from './doctor'
import testimonial from './testimonial'
import blogPost from './blogPost'
import faq from './faq'
import pricingPackage from './pricingPackage'
import siteSettings from './siteSettings'
import page from './page'

export const schemaTypes = [
  // Content types
  treatment,
  doctor,
  testimonial,
  blogPost,
  faq,
  pricingPackage,
  // Settings & pages
  siteSettings,
  page,
]
`;

fs.writeFileSync(path.join(STUDIO_SCHEMA_DIR, 'index.ts'), indexContent);
console.log('✅ Updated index.ts');

// ============================================================
// Create Sanity client for the React app
// ============================================================
const sanityClientDir = 'src/lib';
if (!fs.existsSync(sanityClientDir)) {
  fs.mkdirSync(sanityClientDir, { recursive: true });
}

const sanityClient = `import { createClient } from '@sanity/client';
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
  return sanityClient.fetch(\`*[_type == "siteSettings"][0]\`);
}

export async function getTreatments() {
  return sanityClient.fetch(\`*[_type == "treatment"] | order(order asc)\`);
}

export async function getTreatmentBySlug(slug: string) {
  return sanityClient.fetch(\`*[_type == "treatment" && slug.current == $slug][0]\`, { slug });
}

export async function getDoctors() {
  return sanityClient.fetch(\`*[_type == "doctor"] | order(order asc)\`);
}

export async function getTestimonials(featured?: boolean) {
  const filter = featured ? ' && featured == true' : '';
  return sanityClient.fetch(\`*[_type == "testimonial"\${filter}] | order(date desc)\`);
}

export async function getBlogPosts(category?: string) {
  const filter = category ? ' && category == $category' : '';
  return sanityClient.fetch(
    \`*[_type == "blogPost"\${filter}] | order(publishedAt desc)\`,
    category ? { category } : {}
  );
}

export async function getBlogPostBySlug(slug: string) {
  return sanityClient.fetch(\`*[_type == "blogPost" && slug.current == $slug][0]\`, { slug });
}

export async function getFAQs(category?: string) {
  const filter = category ? ' && category == $category' : '';
  return sanityClient.fetch(\`*[_type == "faq"\${filter}] | order(order asc)\`);
}

export async function getPricingPackages() {
  return sanityClient.fetch(\`*[_type == "pricingPackage"] | order(order asc) {
    ...,
    treatment->{ title, slug, category }
  }\`);
}

export async function getPageBySlug(slug: string) {
  return sanityClient.fetch(\`*[_type == "page" && slug.current == $slug][0]\`, { slug });
}
`;

fs.writeFileSync(path.join(sanityClientDir, 'sanity.ts'), sanityClient);
console.log('✅ Created src/lib/sanity.ts (client + query helpers)');

console.log('\\n🎉 Sanity setup complete!');
console.log('\\nNext steps:');
console.log('1. cd studio && npm run dev    → Opens Sanity Studio at localhost:3333');
console.log('2. Add your content in the Studio');
console.log('3. Your React components can import from src/lib/sanity.ts');
console.log('\\nInstall client packages in your main project:');
console.log('   npm install @sanity/client @sanity/image-url');
