import Link from 'next/link';
import { Metadata } from 'next';
import { teenContent } from '../../content/teen';
import { SITE } from '../../content/site';

export const metadata: Metadata = {
  title: 'Подростковый фитнес 10+',
  description: 'Групповые тренировки для подростков с 10 лет: здоровье, осанка и общая физическая подготовка.'
};

export default function TeenPage() {
  return (
    <main className="section"><div className="container">
      <h1>{teenContent.title}</h1>
      <p className="muted" style={{fontSize:18}}>{teenContent.intro}</p>
      <div className="card" style={{padding:18, marginTop:16}}>
        <h3>Формат</h3>
        <p className="muted">Групповые занятия. Упор на здоровье, осанку, физическую базу и привычку к спорту без перегруза.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn primary" href={SITE.bookingUrl}>Записаться</Link><Link className="btn" href={SITE.telegramUrl}>Уточнить детали</Link></div>
      </div>
    </div></main>
  );
}
