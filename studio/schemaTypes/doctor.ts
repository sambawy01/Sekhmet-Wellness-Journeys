import {defineField, defineType} from 'sanity'

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
