import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { trainingContent } from '../../content/training';
import { SITE } from '../../content/site';

export const metadata: Metadata = {
  title: 'Фитнес',
  description: 'Тренажёрный зал, кардиозал, групповые занятия и персональные тренировки в Баланс Дубна.'
};

export default function TrainingPage() {
  return (
    <main className="section"><div className="container">
      <h1>{trainingContent.title}</h1>
      <p className="muted" style={{fontSize:18}}>{trainingContent.intro}</p>
      <div className="grid grid-3" style={{marginTop:18}}>
        <div className="card" style={{overflow:'hidden'}}><Image src="/images/gym/rack.jpg" alt="Силовая зона" width={1200} height={900} className="cover" /></div>
        <div className="card" style={{overflow:'hidden'}}><Image src="/images/cardio/treadmills.jpg" alt="Кардиозал" width={1200} height={900} className="cover" /></div>
        <div className="card" style={{overflow:'hidden'}}><Image src="/images/group/find-balance.jpg" alt="Зал групповых занятий" width={1200} height={900} className="cover" /></div>
      </div>
      <div className="grid grid-2" style={{marginTop:16}}>
        {trainingContent.items.map((item) => <div key={item.title} className="card" style={{padding:18}}><h3>{item.title}</h3><p className="muted">{item.text}</p></div>)}
      </div>
      <div className="card" style={{padding:18, marginTop:16}}><h3>Групповые программы</h3><p className="muted">{trainingContent.groupFormats}</p></div>
      <div className="card" style={{padding:18, marginTop:16}}><h3>Первый визит</h3><p className="muted">{trainingContent.entry}</p><div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn primary" href={SITE.bookingUrl}>Записаться</Link><Link className="btn" href={`tel:${SITE.phoneE164}`}>Позвонить</Link></div></div>
    </div></main>
  );
}
