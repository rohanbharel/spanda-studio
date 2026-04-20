import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pravah.agency',
      lastModified: new Date(),
    }
  ]
}
