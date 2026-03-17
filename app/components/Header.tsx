import Link from 'next/link';
import { NAV, SITE } from '../../content/site';

export function Header() {
  return (
    <header className="header">
      <div className="container headerRow">
        <Link href="/" className="brand">
          <strong>{SITE.name}</strong>
          <span>{SITE.brandLine}</span>
        </Link>
        <nav className="nav">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="actions">
          <Link className="btn small primary" href={SITE.bookingUrl}>Записаться</Link>
          <Link className="btn small" href={SITE.telegramUrl}>Telegram</Link>
          <Link className="btn small" href={SITE.maxUrl}>MAX</Link>
        </div>
      </div>
    </header>
  );
}
