'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/sanity/schemaTypes'

// Fallbacks keep embedded Studio usable if env is briefly missing at build time.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'z4m7bqdz'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'superkalooki-marketing',
  title: 'Super Kalooki Marketing',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
