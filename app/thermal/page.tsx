import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { thermalContent } from '../../content/thermal';
import { SITE } from '../../content/site';

export const metadata: Metadata = {
  title: 'Термальная зона',
  description: 'Сауна, хамам, джакузи и SPA-кабинеты в Баланс Дубна. Посещение по предварительной записи.'
};

export default function ThermalPage() {
  return (
    <main className="section"><div className="container">
      <h1>{thermalContent.title}</h1>
      <p className="muted" style={{fontSize:18}}>{thermalContent.intro}</p>
      <div className="grid grid-3" style={{marginTop:18}}>
        <div className="card" style={{overflow:'hidden'}}><Image src="/images/thermal/entrance-main.jpg" alt="Вход в термальную зону" width={1200} height={900} className="cover" /></div>
        <div className="card" style={{overflow:'hidden'}}><Image src="/images/thermal/hammam.jpg" alt="Хамам" width={1200} height={900} className="cover" /></div>
        <div className="card" style={{overflow:'hidden'}}><Image src="/images/thermal/sauna.jpg" alt="Сауна" width={1200} height={900} className="cover" /></div>
      </div>
      <div className="card" style={{padding:18, marginTop:16}}><h3>Что входит</h3><p className="muted">{thermalContent.composition}</p></div>
      <div className="grid grid-2" style={{marginTop:16}}>
        <div className="card" style={{padding:18}}><h3>Запись</h3><p className="muted">{thermalContent.booking}</p></div>
        <div className="card" style={{padding:18}}><h3>Формат посещения</h3><p className="muted">{thermalContent.pricing}</p></div>
      </div>
      <div className="card" style={{padding:18, marginTop:16}}><div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn primary" href={SITE.bookingUrl}>Выбрать время</Link><Link className="btn" href={SITE.telegramUrl}>Задать вопрос</Link></div></div>
    </div></main>
  );
}
