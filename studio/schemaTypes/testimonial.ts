import {defineField, defineType} from 'sanity'

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
