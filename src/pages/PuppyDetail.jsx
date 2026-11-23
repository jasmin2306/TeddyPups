import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { puppies, bySlug, altFor, capital, whereLabel } from '../data/puppies';
import { goneBySlug, goneAlt } from '../data/gone';
import { everyPupComes, wayHome } from '../data/content';
import { media } from '../lib/img';
import { waLink } from '../config';
import { Button, Img, Eyebrow } from '../components/UI';
import { Reveal } from '../components/Reveal';
import { Sparkle, Paw } from '../components/Doodles';
import EnquiryForm from '../components/EnquiryForm';

function Gallery({ p }) {
  const [i, setI] = useState(0);
  useEffect(() => setI(0), [p.slug]);
  const n = p.gallery.length;
  const go = (d) => setI((x) => (x + d + n) % n);
  useEffect(() => {
    const k = (e) => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [n]);
  const cur = p.gallery[i];
  return (
    <div className="pd-gallery">
      <div className="pd-main">
        <img key={cur.p} src={media(cur.p, 1080, 85)} alt={altFor(p)} />
        {cur.v && <span className="video-pill big">▶ video</span>}
        {n > 1 && <div className="pd-ctrl"><button onClick={() => go(-1)} aria-label="Previous photo"><ChevronLeft size={18} /></button><span>{i + 1} / {n}</span><button onClick={() => go(1)} aria-label="Next photo"><ChevronRight size={18} /></button></div>}
      </div>
      {n > 1 && <ul className="pd-thumbs">{p.gallery.map((g, k) => <li key={g.p}><button className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}><Img src={media(g.p, 384)} alt="" />{g.v && <span>▶</span>}</button></li>)}</ul>}
    </div>
  );
}

function Neighbour({ p, dir }) {
  return <Link className={'pd-nb ' + dir} to={'/puppies/' + p.slug}><Img src={media(p.cover, 384)} alt={altFor(p)} /><span><small>{dir === 'prev' ? 'Previous pup' : 'Next pup'}</small>{p.name}</span></Link>;
}

function Gone({ g }) {
  return (
    <section className="pd pd-gone">
      <nav className="crumbs"><Link to="/gone-home">Gone home</Link> / {g.name}</nav>
      <div className="pd-top">
        <div className="pd-gallery"><div className="pd-main"><img src={media(g.cover, 1080, 85)} alt={goneAlt(g)} /></div></div>
        <div className="pd-info">
          <span className="status gone">gone home ♥</span>
          <h1>{g.name}</h1>
          <dl className="facts">
            <div><dt>Breed</dt><dd>{g.breed}</dd></div>
            <div><dt>Boy or girl</dt><dd>{capital(g.sex)}</dd></div>
            <div><dt>Came from</dt><dd>{g.source}</dd></div>
          </dl>
          <p className="gone-note">{g.name} has already joined a loving family. Looking for one just like {g.sex.toLowerCase() === 'boy' ? 'him' : 'her'}? Tell us — we'll help you find your match.</p>
          <div className="actions"><Button href={waLink(`Hi TeddyPups! I saw ${g.name} (${g.breed}) on your site and I'm looking for a puppy like ${g.sex.toLowerCase() === 'boy' ? 'him' : 'her'}.`)}>Find me a match</Button><Button to="/puppies" outline>See available puppies</Button></div>
        </div>
      </div>
    </section>
  );
}

export default function PuppyDetail() {
  const { slug } = useParams();
  const p = bySlug(slug);
  if (!p) { const g = goneBySlug(slug); return g ? <Gone g={g} /> : <Navigate to="/puppies" replace />; }
  const idx = puppies.indexOf(p);
  const prev = puppies[(idx - 1 + puppies.length) % puppies.length];
  const next = puppies[(idx + 1) % puppies.length];
  const label = p.named ? p.name : 'this ' + p.breed;
  const askName = p.named ? p.name : 'this puppy';
  const msg = p.named ? `Hi! I'd love to know more about ${p.name} (${p.breed}).` : `Hi! I'd love to know more about ${p.breed}.`;
  const imported = p.origin === 'imported';
  return (
    <section className="pd">
      <nav className="crumbs"><Link to="/puppies">Available puppies</Link> / {p.named ? p.name : p.breed}</nav>
      <div className="pd-step"><b>1</b><span className="hand">hello, it's me</span></div>
      <div className="pd-top">
        <Gallery p={p} />
        <div className="pd-info">
          <span className="status">Available</span>
          <h1>{p.name}</h1>
          {p.named && <p className="breed-line">{p.breed}</p>}
          <dl className="facts">
            <div><dt>Breed</dt><dd>{p.breed}</dd></div>
            <div><dt>Boy or girl</dt><dd>{capital(p.sex)}</dd></div>
            <div><dt>Age</dt><dd>{p.age}</dd></div>
            <div><dt>Where</dt><dd>{whereLabel(p)}</dd></div>
          </dl>
          <div className="actions">
            <Button href={waLink(msg)}>{p.named ? `Ask about ${p.name} on WhatsApp` : 'Ask about this puppy on WhatsApp'}</Button>
            <a className="btn outline" href={`#enquire-${p.slug}`} onClick={(e) => { e.preventDefault(); document.getElementById('enquire-' + p.slug)?.scrollIntoView({ behavior: 'smooth' }); }}>Send an enquiry <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </div>

      <Reveal className="pd-block comes">
        <div className="pd-step"><b>2</b><span className="hand">what comes with {label}</span></div>
        <h2>Every Teddy Pup comes</h2>
        <ul className="ticks">{everyPupComes.map((t) => <li key={t}><Paw />{t}</li>)}</ul>
      </Reveal>

      {imported && (
        <Reveal className="pd-block way">
          <div className="pd-step"><b>3</b><span className="hand">the way home</span></div>
          <h2>Coming home from abroad</h2>
          <ol className="way-steps">{wayHome.map(([h, t], i) => <li key={h}><b>{i + 1}</b><h3>{h}</h3><p>{t}</p></li>)}</ol>
        </Reveal>
      )}

      <Reveal className="pd-block enquire" id={'enquire-' + p.slug}>
        <div className="pd-step"><b>{imported ? 4 : 3}</b><span className="hand">dear TeddyPups…</span></div>
        <h2>Ask about {askName === 'this puppy' ? 'this puppy' : askName}</h2>
        <p className="lead">Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.</p>
        <EnquiryForm defaultMessage={msg} subject={p.named ? `${p.name} (${p.breed})` : p.breed} />
      </Reveal>

      <div className="pd-nav"><Neighbour p={prev} dir="prev" /><Neighbour p={next} dir="next" /></div>
    </section>
  );
}
