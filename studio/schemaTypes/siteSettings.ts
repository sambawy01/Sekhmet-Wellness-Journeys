import {defineField, defineType} from 'sanity'

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
