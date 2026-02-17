import {defineField, defineType} from 'sanity'

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
