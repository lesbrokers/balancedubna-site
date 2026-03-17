import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobile } from './components/StickyMobile';
import { SITE } from '../content/site';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),

  title: {
    default: 'Баланс — фитнес-клуб со SPA и термальной зоной в Дубне',
    template: '%s | Баланс Дубна'
  },

  description:
    'Баланс в Дубне: фитнес, массаж, SPA и термальная зона. Тренировки, восстановление и отдых в одном пространстве.',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  },

  openGraph: {
    title: 'Баланс — фитнес-клуб со SPA и термальной зоной в Дубне',
    description: 'Место, где занимаются телом, отдыхают и перезагружаются.',
    siteName: 'Баланс',
    type: 'website',
    locale: 'ru_RU'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
        <StickyMobile />
      </body>
    </html>
  );
}
