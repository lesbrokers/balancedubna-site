import Link from 'next/link';
import { Metadata } from 'next';
import { SITE } from '../../content/site';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Контакты Баланс Дубна: адрес, часы работы, запись, телефон и документы клуба.'
};

export default function ContactsPage() {
  return (
    <main className="section"><div className="container">
      <h1>Контакты</h1>
      <div className="grid grid-2" style={{marginTop:18}}>
        <div className="card" style={{padding:18}}>
          <h3>Адрес и часы</h3>
          <p className="muted">{SITE.addressLine}</p>
          <p className="muted">{SITE.hours}</p>
          <p className="muted">Городская парковка рядом со входом. Места обычно есть, иногда нужно пройти 1 минуту.</p>
        </div>
        <div className="card" style={{padding:18}}>
          <h3>Связаться</h3>
          <p className="muted">{SITE.phoneDisplay}</p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn primary" href={SITE.bookingUrl}>Записаться</Link><Link className="btn" href={SITE.telegramUrl}>Telegram</Link><Link className="btn" href={SITE.maxUrl}>MAX</Link></div>
        </div>
      </div>
      <div className="card" style={{padding:18, marginTop:16}}>
        <h3>Документы клуба</h3>
        <p className="muted">Оферта и правила посещения доступны на отдельном поддомене документов.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn" href={SITE.docsUrl}>Открыть документы</Link><Link className="btn" href={`${SITE.docsUrl}/offer/`}>Оферта</Link><Link className="btn" href={`${SITE.docsUrl}/rules/`}>Правила</Link></div>
      </div>
    </div></main>
  );
}
