import {defineField, defineType} from 'sanity'

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
