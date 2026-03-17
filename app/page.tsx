import Image from 'next/image';
import Link from 'next/link';
import { homeContent } from '../content/home';
import { SITE } from '../content/site';
import { JsonLd } from './components/JsonLd';
import { Faq } from './components/Faq';

export default function HomePage() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['HealthClub', 'LocalBusiness'],
    name: SITE.name,
    description: homeContent.heroSubtitle,
    telephone: SITE.phoneE164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Дубна',
      streetAddress: 'Ленинградская ул., 1',
      addressCountry: 'RU'
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '09:00',
      closes: '21:00'
    }],
    url: `https://${SITE.domain}`,
    sameAs: [SITE.telegramUrl, SITE.maxUrl, SITE.docsUrl]
  };
  const faqJsonLd = {
    '@context':'https://schema.org',
    '@type':'FAQPage',
    mainEntity: homeContent.faqs.map((i) => ({ '@type':'Question', name:i.q, acceptedAnswer:{ '@type':'Answer', text:i.a } }))
  };

  return (
    <main>
      <JsonLd data={orgJsonLd} />
      <JsonLd data={faqJsonLd} />
      <section className="hero">
        <div className="container heroWrap">
          <div>
            <div className="badge">Живой клуб, без суеты</div>
            <h1>{homeContent.heroTitle}</h1>
            <p className="muted" style={{fontSize:18}}>{homeContent.heroSubtitle}</p>
            <div style={{display:'flex', gap:10, flexWrap:'wrap', marginTop:16}}>
              <Link className="btn primary" href={SITE.bookingUrl}>Записаться онлайн</Link>
              <Link className="btn" href={SITE.telegramUrl}>Telegram</Link>
              <Link className="btn" href={SITE.maxUrl}>MAX</Link>
              <Link className="btn" href={`tel:${SITE.phoneE164}`}>Позвонить</Link>
            </div>
            <p className="muted" style={{marginTop:14}}>{SITE.hours} · {SITE.addressLine}</p>
          </div>
          <div className="card heroCard">
            <div className="heroImage">
              <Image src="/images/group/find-balance.jpg" alt="Найди свой Balance" width={1200} height={900} className="cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{padding:18}}>
            <h2>О клубе</h2>
            <p className="muted">{homeContent.intro}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <h2>Основные направления</h2>
          <div className="grid grid-3">
            {homeContent.sections.map((section) => (
              <div className="card" style={{padding:18}} key={section.title}>
                <h3>{section.title}</h3>
                <p className="muted">{section.text}</p>
                <Link className="btn small primary" href={section.href}>Подробнее</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container gallery">
          <div className="card" style={{overflow:'hidden'}}>
            <Image src="/images/thermal/entrance-main.jpg" alt="Вход в термальную зону Баланс" width={1200} height={900} className="cover" />
          </div>
          <div className="galleryStack">
            <div className="card" style={{overflow:'hidden'}}>
              <Image src="/images/gym/rack.jpg" alt="Тренажёрный зал Баланс" width={1200} height={900} className="cover" />
            </div>
            <div className="card" style={{overflow:'hidden'}}>
              <Image src="/images/thermal/hammam.jpg" alt="Хамам Баланс" width={1200} height={900} className="cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <h2>Почему выбирают Баланс</h2>
          <div className="grid grid-2">
            {homeContent.trust.map((item) => (
              <div className="card" style={{padding:18}} key={item}><p className="muted" style={{margin:0}}>{item}</p></div>
            ))}
          </div>
          <div className="card" style={{padding:18, marginTop:16}}>
            <p className="muted" style={{margin:0}}>{homeContent.groupNote}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <h2>FAQ</h2>
          <Faq items={homeContent.faqs} />
        </div>
      </section>
    </main>
  );
}
