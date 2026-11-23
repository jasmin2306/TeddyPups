import { useSearchParams, Link } from 'react-router-dom';
import { puppies, BREEDS, matchesBreed } from '../data/puppies';
import { gone } from '../data/gone';
import { PageIntro, Button, WhatsAppButton } from '../components/UI';
import { PuppyCard, GoneCard } from '../components/PuppyCard';
import { Reveal } from '../components/Reveal';
import { SelfPortrait, Sparkle } from '../components/Doodles';

export default function Puppies() {
  const [sp, setSp] = useSearchParams();
  const breed = sp.get('breed') || '';
  const origin = sp.get('origin') || '';
  const list = puppies.filter((p) => (!breed || matchesBreed(p, breed)) && (!origin || p.origin === origin));
  const set = (k, v) => { const n = new URLSearchParams(sp); v ? n.set(k, v) : n.delete(k); setSp(n, { replace: true }); };
  const filtered = breed || origin;
  return (
    <>
      <PageIntro eyebrow="from Teddy's sketchbook" title="Available puppies" body="Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.">
        <div className="self-portrait-wrap"><SelfPortrait /><span className="hand">self-portrait</span><Sparkle className="sp-a" /></div>
      </PageIntro>
      <section className="listing">
        <div className="filters" role="group" aria-label="Filter puppies">
          <b>Filter puppies</b>
          <button className={!breed ? 'active' : ''} onClick={() => set('breed', '')}>All</button>
          {BREEDS.map(([l, k]) => <button key={k} className={breed === k ? 'active' : ''} onClick={() => set('breed', k)}>{l}</button>)}
          <span className="sep" />
          <button className={origin === 'local' ? 'active' : ''} onClick={() => set('origin', origin === 'local' ? '' : 'local')}>In Dubai</button>
          <button className={origin === 'imported' ? 'active' : ''} onClick={() => set('origin', origin === 'imported' ? '' : 'imported')}>Imported</button>
        </div>
        <p className="result-count">{list.length} {list.length === 1 ? 'puppy' : 'puppies'} looking for a home</p>
        {list.length ? (
          <div className="grid puppies-grid">{list.map((p, i) => <Reveal key={p.slug} delay={(i % 4) * 60}><PuppyCard p={p} i={i} /></Reveal>)}</div>
        ) : (
          <div className="empty"><h3>No puppies match right now</h3><p>New pups arrive often — tell us what you're looking for and we'll help you find your match.</p><div className="actions"><WhatsAppButton text="Hi TeddyPups! I'm looking for a puppy — can you help me find a match?">Ask on WhatsApp</WhatsAppButton>{filtered && <Button to="/puppies" outline>Clear filters</Button>}</div></div>
        )}
      </section>
      <section className="already-gone">
        <div className="ag-head"><div><h2>Already gone home</h2><p>These puppies have found their families.</p></div><Link className="text-link" to="/gone-home">See the puppies who've gone home →</Link></div>
        <div className="gone-row">{gone.slice(0, 5).map((g) => <GoneCard key={g.slug} g={g} small />)}</div>
      </section>
    </>
  );
}
