import { MetadataRoute } from 'next';
import { SITE } from '../content/site';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  const routes = ['','/training','/thermal','/recovery','/teen-fitness','/gift-cards','/contacts','/about','/prices','/booking'];
  return routes.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'weekly', priority: path === '' ? 1 : 0.7 }));
}
