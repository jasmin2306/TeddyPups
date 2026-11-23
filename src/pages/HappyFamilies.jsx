import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { families, FAMILY_ALT } from '../data/families';
import { QUOTE, QUOTE_BY } from '../data/content';
import { media } from '../lib/img';
import { PageIntro, Img } from '../components/UI';
import { HeartDoodle, Paw } from '../components/Doodles';

function Lightbox({ i, close, step }) {
  useEffect(() => {
    const k = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); };
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [close, step]);
  const f = families[i];
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Happy family photo" onClick={close}>
      <button className="lb-x" onClick={close} aria-label="Close"><X /></button>
      <button className="lb-a l" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous"><ChevronLeft /></button>
      <figure onClick={(e) => e.stopPropagation()}><img src={media(f.p, 1080, 85)} alt={FAMILY_ALT} />{f.caption && <figcaption className="hand">{f.caption}</figcaption>}</figure>
      <button className="lb-a r" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next"><ChevronRight /></button>
      <span className="lb-n">{i + 1} / {families.length}</span>
    </div>
  );
}

export default function HappyFamilies() {
  const [open, setOpen] = useState(null);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + families.length) % families.length)), []);
  return (
    <>
      <PageIntro eyebrow="our wall of happy endings" title="Happy families" body="Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.">
        <p className="moments hand">{families.length} moments and counting</p><HeartDoodle className="hf-h" />
      </PageIntro>
      <section className="happy-gallery">
        <blockquote>{QUOTE}<cite>{QUOTE_BY}</cite></blockquote>
        <ul className="masonry">
          {families.map((f, i) => (
            <li key={f.p}><button onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`}><Img src={media(f.p, 640)} alt={FAMILY_ALT} />{f.caption && <span className="cap hand">{f.caption}</span>}</button></li>
          ))}
        </ul>
        <p className="wall-end hand"><Paw /> every one of them was a Teddy Pup once</p>
      </section>
      {open !== null && <Lightbox i={open} close={() => setOpen(null)} step={step} />}
    </>
  );
}
