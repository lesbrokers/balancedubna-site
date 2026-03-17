import Link from 'next/link';
import { Metadata } from 'next';
import { recoveryContent } from '../../content/recovery';
import { SITE } from '../../content/site';

export const metadata: Metadata = {
  title: 'Массаж и уход',
  description: 'Массаж, уход за лицом и телом, аппаратные процедуры и косметология в Баланс Дубна.'
};

export default function RecoveryPage() {
  return (
    <main className="section"><div className="container">
      <h1>{recoveryContent.title}</h1>
      <p className="muted" style={{fontSize:18}}>{recoveryContent.intro}</p>
      <div className="grid grid-2" style={{marginTop:18}}>
        {recoveryContent.items.map((item) => <div key={item.title} className="card" style={{padding:18}}><h3>{item.title}</h3><p className="muted">{item.text}</p></div>)}
      </div>
      <div className="card" style={{padding:18, marginTop:16}}>
        <h3>Запись</h3>
        <p className="muted">Массаж и уход — самостоятельный повод приехать в клуб. Записаться можно онлайн или через администратора.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn primary" href={SITE.bookingUrl}>Открыть онлайн-запись</Link><Link className="btn" href={SITE.telegramUrl}>Telegram</Link></div>
      </div>
    </div></main>
  );
}
