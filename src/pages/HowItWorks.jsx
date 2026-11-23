import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { how, promise, delivery, why } from '../data/content';
import { media } from '../lib/img';
import { PageIntro, SectionTitle, Eyebrow, Button, WhatsAppButton, Img } from '../components/UI';
import { Reveal } from '../components/Reveal';
import { Plane, Paw, Sparkle } from '../components/Doodles';
import { showroom } from '../data/content';

const ANCHORS = [['two-ways', 'Two ways home'], ['promise', 'Our premium puppy promise'], ['delivery', 'Delivery & collection'], ['why', 'Why choose us']];

function Route({ from = 'Korea', to = 'Dubai' }) {
  return <div className="route"><span>{from}</span><svg viewBox="0 0 220 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 9" aria-hidden="true"><path d="M4 50C60 -8 160 -8 216 50" /></svg><Plane className="flying" /><span>{to}</span></div>;
}

export default function HowItWorks() {
  const [tab, setTab] = useState('local');
  const t = how[tab];
  const body = Array.isArray(t.body) ? t.body : [t.body];
  return (
    <>
      <PageIntro title="How it works" body="Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable." />
      <section className="how-section">
        <nav className="how-nav" aria-label="On this page">{ANCHORS.map(([id, l], i) => <a key={id} href={'#' + id} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); history.replaceState(null, '', '#' + id); }}><b>{i + 1}</b>{l}</a>)}</nav>

        <Reveal className="how-block" id="two-ways">
          <SectionTitle eyebrow="choose your way" title="Two ways home" />
          <div className="tabs" role="tablist">
            <button role="tab" aria-selected={tab === 'local'} className={tab === 'local' ? 'active' : ''} onClick={() => setTab('local')}>In Dubai<small>meet in person</small></button>
            <button role="tab" aria-selected={tab === 'imported'} className={tab === 'imported' ? 'active' : ''} onClick={() => setTab('imported')}>Imported<small>order upon request</small></button>
          </div>
          <div className="how-content" key={tab}>
            <div className="hc-copy">
              <h3>{t.title}</h3>
              {body.map((b) => <p key={b}>{b}</p>)}
              {tab === 'local' ? <div className="location"><MapPin size={18} /> {t.place}</div> : <Route from="Europe · Korea" />}
            </div>
            <ol className="how-steps">{t.steps.map(([h, p], i) => <li key={h}><small>Step {i + 1}</small><h4>{h}</h4><p>{p}</p></li>)}</ol>
          </div>
        </Reveal>

        <Reveal className="promise" id="promise">
          <SectionTitle eyebrow="puppy passport" title="Our premium puppy promise" />
          <div className="trust-grid three">{promise.map(([h, p], i) => <div key={h}><b>{String(i + 1).padStart(2, '0')}</b><h3>{h}</h3><p>{p}</p></div>)}</div>
        </Reveal>

        <Reveal className="delivery" id="delivery">
          <SectionTitle title="Delivery & collection" body="From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely." />
          <div className="delivery-wrap">
            <ul className="delivery-grid">{delivery.map(([h, p]) => <li key={h}><Paw /><h3>{h}</h3><p>{p}</p></li>)}</ul>
            <Route />
          </div>
        </Reveal>

        <Reveal className="why" id="why">
          <SectionTitle title="Why choose us" body="We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love." />
          <div className="why-grid">{why.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
        </Reveal>

        <Reveal className="unique">
          <figure><Img src={media(showroom.photos[1][0], 828)} alt={showroom.photos[1][1]} /><Sparkle className="u-sp" /></figure>
          <div><h2>Unique and high quality puppies</h2><p>When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
            <div className="actions"><WhatsAppButton>Ask us on WhatsApp</WhatsAppButton><Button to="/puppies" outline>See available puppies</Button></div></div>
        </Reveal>
      </section>
    </>
  );
}
