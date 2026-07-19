import {createClient} from 'next-sanity'
import {apiVersion, dataset, projectId} from '../env'

/** Viewer token — needed when the dataset is private or public ACL is restricted. */
const token = process.env.SANITY_API_READ_TOKEN

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
  apiVersion,
  // Tokenized requests skip the CDN edge; fine for a marketing site.
  useCdn: !token,
  token,
  perspective: 'published',
})
