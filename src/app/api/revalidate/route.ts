import {parseBody} from 'next-sanity/webhook'
import {revalidatePath, revalidateTag} from 'next/cache'
import {NextResponse, type NextRequest} from 'next/server'

type WebhookPayload = {
  _type?: string
  slug?: {current?: string}
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET
    if (!secret) {
      return new NextResponse('Missing SANITY_REVALIDATE_SECRET', {status: 500})
    }

    const {isValidSignature, body} = await parseBody<WebhookPayload>(req, secret)
    if (!isValidSignature) {
      return new NextResponse('Invalid signature', {status: 401})
    }

    revalidateTag('sanity', 'max')

    const type = body?._type
    if (type === 'article') {
      revalidatePath('/blog')
      revalidatePath('/')
      const slug = body?.slug?.current
      if (slug) {
        revalidatePath(`/blog/${slug}`)
      }
    } else if (type === 'faqItem') {
      revalidatePath('/faq')
    } else if (type === 'siteSettings') {
      revalidatePath('/')
    } else {
      revalidatePath('/')
      revalidatePath('/blog')
      revalidatePath('/faq')
    }

    return NextResponse.json({revalidated: true, type: type ?? 'unknown'})
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new NextResponse(message, {status: 500})
  }
}
