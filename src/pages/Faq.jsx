import { useState } from 'react';
import { faqs } from '../data/content';
import { waLink } from '../config';
import { PageIntro, Eyebrow, TextLink } from '../components/UI';
import { FaqItem } from '../components/Faq';
import { Search } from 'lucide-react';
import { Qmark } from '../components/Doodles';

export default function Faq() {
  const [q, setQ] = useState('');
  const term = q.trim().toLowerCase();
  const list = faqs.filter(([a, b]) => !term || a.toLowerCase().includes(term) || b.toLowerCase().includes(term));
  return (
    <>
      <PageIntro title="Questions & answers" body="Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7." />
      <section className="faq-layout">
        <aside>
          <Eyebrow>sniff out a question</Eyebrow>
          <label className="search"><Search size={18} /><input type="search" placeholder="Search questions" aria-label="Search questions" value={q} onChange={(e) => setQ(e.target.value)} /></label>
          <p className="hand notes">{list.length} {list.length === 1 ? 'note' : 'notes'} on the board</p>
          <Qmark className="aside-q" />
          <TextLink href={waLink()}>Ask your own question</TextLink>
        </aside>
        <div className="faq-list">
          {list.map(([a, b]) => <FaqItem key={a} q={a} a={b} as="h2" />)}
          {!list.length && <p className="no-results">Nothing matches "{q}" — try another word, or <a href={waLink()} target="_blank" rel="noopener">ask us on WhatsApp</a>.</p>}
        </div>
      </section>
    </>
  );
}
