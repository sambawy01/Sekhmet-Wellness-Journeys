import {defineField, defineType} from 'sanity'

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
