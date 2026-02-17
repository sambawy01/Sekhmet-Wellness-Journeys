import {defineField, defineType} from 'sanity'

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
