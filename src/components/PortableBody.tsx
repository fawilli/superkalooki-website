import {urlFor} from '@/sanity/lib/image'
import {PortableText, type PortableTextComponents} from '@portabletext/react'
import Image from 'next/image'

const components: PortableTextComponents = {
  types: {
    image: ({value}) => {
      if (!value?.asset) return null
      const src = urlFor(value).width(1200).height(675).fit('crop').url()
      return (
        <figure className="my-8">
          <Image
            alt={value.alt || ''}
            className="rounded-lg w-full h-auto"
            height={675}
            src={src}
            width={1200}
          />
          {value.alt ? (
            <figcaption className="text-sm text-text-muted mt-2">{value.alt}</figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

export function PortableBody({value}: {value: unknown}) {
  if (!value) return null
  return (
    <div className="prose prose-stone max-w-none">
      <PortableText components={components} value={value as never} />
    </div>
  )
}
