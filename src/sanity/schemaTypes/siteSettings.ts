import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Homepage headline',
      type: 'string',
    }),
    defineField({
      name: 'subcopy',
      title: 'Homepage subcopy',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA label',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaUrl',
      title: 'Primary CTA URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Site Settings'}),
  },
})
