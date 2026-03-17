import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О клубе',
  description: 'О клубе Баланс в Дубне: история, обновление пространства и философия фитнеса и восстановления.'
};

export default function AboutPage() {
  return (
    <main className="section"><div className="container">
      <h1>О клубе</h1>
      <div className="card" style={{padding:18}}>
        <p className="muted">Клуб работает в Дубне около 20 лет. Примерно полтора года назад пространство было полностью обновлено: ремонт, новый формат, термальная зона и развитие направления SPA.</p>
        <p className="muted">Сегодня Баланс — небольшой уютный клуб, где можно тренироваться, восстанавливаться и ухаживать за собой без суеты и агрессивного фитнеса.</p>
      </div>
    </div></main>
  );
}
