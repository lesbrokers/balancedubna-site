import Link from 'next/link';
import { Metadata } from 'next';
import { giftCardsContent } from '../../content/gift-cards';
import { SITE } from '../../content/site';

export const metadata: Metadata = {
  title: 'Подарочные сертификаты',
  description: 'Электронные и бумажные подарочные сертификаты Баланс на фиксированные номиналы.'
};

export default function GiftCardsPage() {
  return (
    <main className="section"><div className="container">
      <h1>{giftCardsContent.title}</h1>
      <p className="muted" style={{fontSize:18}}>{giftCardsContent.intro}</p>
      <div className="grid grid-2" style={{marginTop:18}}>
        <div className="card" style={{padding:18}}><h3>Как это работает</h3><p className="muted">{giftCardsContent.note}</p></div>
        <div className="card" style={{padding:18}}><h3>Для чего выбирают</h3><p className="muted">{giftCardsContent.useCases}</p></div>
      </div>
      <div className="card" style={{padding:18, marginTop:16}}><div style={{display:'flex',gap:10,flexWrap:'wrap'}}><Link className="btn primary" href={SITE.telegramUrl}>Купить сертификат</Link><Link className="btn" href={`tel:${SITE.phoneE164}`}>Позвонить</Link></div></div>
    </div></main>
  );
}
