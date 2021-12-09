import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.ENTRY_POINT_API,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )
  return prismic;
}