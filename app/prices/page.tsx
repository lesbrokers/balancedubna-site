import Link from 'next/link';
import { Metadata } from 'next';
import { SITE } from '../../content/site';

export const metadata: Metadata = {
  title: 'Цены',
  description: 'Разовые посещения, абонементы и запись на услуги Баланс Дубна.'
};

export default function PricesPage() {
  return (
    <main className="section"><div className="container">
      <h1>Цены</h1>
      <div className="card" style={{padding:18}}>
        <p className="muted">Разовые посещения и абонементы доступны для тренажёрного зала и фитнеса. Актуальные варианты и цены удобнее всего посмотреть в онлайн-записи или уточнить у администратора.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn primary" href={SITE.bookingUrl}>Открыть онлайн-запись</Link><Link className="btn" href={SITE.telegramUrl}>Уточнить в Telegram</Link></div>
      </div>
    </div></main>
  );
}
