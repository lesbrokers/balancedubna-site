import Link from 'next/link';
import { SITE } from '../../content/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-3">
        <div>
          <strong>{SITE.name}</strong>
          <div>{SITE.addressLine}</div>
          <div>{SITE.hours}</div>
          <div>{SITE.phoneDisplay}</div>
        </div>
        <div>
          <strong>Онлайн</strong>
          <div><Link href={SITE.bookingUrl}>Онлайн-запись</Link></div>
          <div><Link href={SITE.telegramUrl}>Telegram</Link></div>
          <div><Link href={SITE.maxUrl}>MAX</Link></div>
        </div>
        <div>
          <strong>Документы</strong>
          <div><Link href={SITE.docsUrl}>Документы клуба</Link></div>
          <div><Link href={`${SITE.docsUrl}/offer/`}>Публичная оферта</Link></div>
          <div><Link href={`${SITE.docsUrl}/rules/`}>Правила посещения</Link></div>
        </div>
      </div>
    </footer>
  );
}
