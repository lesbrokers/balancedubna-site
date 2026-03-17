import Link from 'next/link';
import { Metadata } from 'next';
import { SITE } from '../../../content/site';

export const metadata: Metadata = { title: 'Rules', description: 'Документы клуба Баланс.' };
export default function Page(){ return <main className="section"><div className="container"><h1>Документы клуба</h1><p className="muted">Актуальная версия документа доступна на поддомене документов.</p><Link className="btn primary" href={SITE.docsUrl}>Открыть docs.balancedubna.ru</Link></div></main>; }
