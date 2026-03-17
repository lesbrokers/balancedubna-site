import Link from 'next/link';
import { Metadata } from 'next';
import { SITE } from '../../content/site';

export const metadata: Metadata = {
  title: 'Онлайн-запись',
  description: 'Запись в Баланс через Yclients и приложение YPLACES.'
};

export default function BookingPage() {
  return (
    <main className="section"><div className="container">
      <h1>Онлайн-запись</h1>
      <div className="card" style={{padding:18}}>
        <p className="muted">Онлайн-запись ведётся через Yclients. Для групповых занятий и вечерних слотов рекомендуем записываться заранее. Также можно использовать приложение YPLACES.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn primary" href={SITE.bookingUrl}>Открыть Yclients</Link><Link className="btn" href={SITE.telegramUrl}>Telegram</Link><Link className="btn" href={`tel:${SITE.phoneE164}`}>Позвонить</Link></div>
      </div>
    </div></main>
  );
}
