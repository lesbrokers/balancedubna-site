import Link from 'next/link';
import { SITE } from '../../content/site';

export function StickyMobile() {
  return (
    <div className="stickyMobile">
      <div className="stickyRow">
        <Link className="btn primary" href={SITE.bookingUrl}>Записаться</Link>
        <Link className="btn" href={`tel:${SITE.phoneE164}`}>Позвонить</Link>
      </div>
    </div>
  );
}
