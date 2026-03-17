import { FaqItem } from '../lib/types';

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid">
      {items.map((item, idx) => (
        <div className="card" style={{padding:16}} key={idx}>
          <h3>{item.q}</h3>
          <p className="muted">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
