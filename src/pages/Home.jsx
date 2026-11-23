import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Plane as PlaneIcon, Clock3, Heart } from 'lucide-react';
import { puppies, bySlug, heroSlugs, heroCentre, BREEDS, altFor } from '../data/puppies';
import { journey, trust, QUOTE, QUOTE_BY, showroom, faqs } from '../data/content';
import { featuredFamilies, FAMILY_ALT } from '../data/families';
import { media, raw, brand } from '../lib/img';
import { waLink } from '../config';
import { Button, WhatsAppButton, TextLink, Eyebrow, SectionTitle, Img } from '../components/UI';
import { PuppyCard } from '../components/PuppyCard';
import { FaqItem } from '../components/Faq';
import { Reveal } from '../components/Reveal';
import { Squiggle, Sparkle, Paw, HeartDoodle, Qmark, Burst, CurlyArrow, Plane } from '../components/Doodles';

const ICONS = { shield: ShieldCheck, plane: PlaneIcon, clock: Clock3, heart: Heart };

function Hero() {
  const pups = heroSlugs.map(bySlug);
  return (
    <section className="hero">
      <Sparkle className="d-sp1" /><Sparkle className="d-sp2" /><Paw className="d-paw" /><HeartDoodle className="d-heart" /><Burst className="d-burst" />
      <div className="hero-copy">
        <Eyebrow>every puppy is family</Eyebrow>
        <h1>Premium teacup<br /><span className="ul">puppies<Squiggle /></span> in Dubai</h1>
        <p>Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>
        <div className="actions"><Button to="/puppies">View available puppies</Button><TextLink href={waLink()}>Enquire on WhatsApp</TextLink></div>
      </div>
      <ul className="hero-pups">
        {pups.map((p, i) => (
          <li key={p.slug} className={'hero-pup hp' + i}>
            <Link to={'/puppies/' + p.slug} aria-label={p.name}><img src={media(p.cover, 828)} alt={altFor(p)} fetchpriority={i < 3 ? 'high' : undefined} /><span>{p.name}</span></Link>
          </li>
        ))}
        <li className="hero-pup hp-centre" aria-hidden="true"><img src={media(heroCentre, 640)} alt="" /></li>
      </ul>
    </section>
  );
}

function Meet() {
  return (
    <section className="meet">
      <div className="split-head">
        <SectionTitle title="Meet the pups" body="Real puppies, real photos, looking for their families right now." />
        <Button to="/puppies" outline>See all available puppies</Button>
      </div>
      <div className="grid puppies-grid">{puppies.map((p, i) => <Reveal key={p.slug} delay={(i % 4) * 70}><PuppyCard p={p} i={i} /></Reveal>)}</div>
      <div className="meet-all"><Button to="/puppies" outline>Meet them all</Button></div>
    </section>
  );
}

function Ways() {
  return (
    <section className="ways">
      <SectionTitle title="Two ways to meet your puppy" />
      <div className="way-grid">
        <Reveal as="article" className="way local">
          <div className="way-art"><Img src={media(showroom.photos[0][0], 828)} alt={showroom.alt} /><span className="tag hand">In our showroom</span><Sparkle className="w-sp" /></div>
          <h3>Puppies in Dubai</h3>
          <p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
          <Button to="/puppies?origin=local" outline>Meet local puppies</Button>
        </Reveal>
        <Reveal as="article" className="way dark-card" delay={90}>
          <div className="plane-art"><span>Korea</span><svg className="flight" viewBox="0 0 220 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 9" aria-hidden="true"><path d="M6 70C60 -5 160 -5 214 70" /></svg><Plane className="flying" /><span>Dubai</span></div>
          <h3>Imported for you</h3>
          <p>Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p>
          <Button to="/puppies?origin=imported">See imported puppies</Button>
        </Reveal>
      </div>
    </section>
  );
}

function Journey() {
  const vid = useRef(null);
  return (
    <section className="journey">
      <Reveal>
        <SectionTitle title="Your puppy journey" body="A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful." />
        <ol className="steps">{journey.map(([h, p], i) => <li key={h}><b>{i + 1}</b><h3>{h}</h3><p>{p}</p></li>)}</ol>
        <Button to="/how-it-works" outline>How it works</Button>
      </Reveal>
      <Reveal className="journey-visual" delay={120}>
        <div className="chat-card">
          <div className="chat-top"><img src={brand(96)} alt="" width="34" height="34" /><b>TeddyPups U.A.E.</b><span>● online</span></div>
          <div className="bubble">Hi TeddyPups! I'd love to know more about your puppies.</div>
          <div className="bubble cream">{journey[0][1]}
            <div className="breed-pills">{BREEDS.map(([l, k]) => <Link key={k} to={'/puppies?breed=' + k}>{l}</Link>)}</div>
          </div>
          <div className="bubble">{journey[1][1]}</div>
          <div className="bubble cream">{journey[2][1]}</div>
          <a className="wa" href={waLink()} target="_blank" rel="noopener">Say hello on WhatsApp <ArrowUpRight size={17} /></a>
        </div>
        <div className="showroom-strip">
          {showroom.photos.map(([p, a], i) => <Img key={p} src={media(p, 640)} alt={a} className={'sr' + i} />)}
          <video ref={vid} className="sr-video" src={raw(showroom.video)} poster={media(showroom.photos[0][0], 640)} muted loop playsInline preload="none" onMouseEnter={() => vid.current?.play().catch(() => {})} onMouseLeave={() => vid.current?.pause()} onClick={(e) => (e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause())} />
        </div>
        <CurlyArrow className="j-arrow" />
      </Reveal>
    </section>
  );
}

function Trust() {
  return (
    <section className="trust">
      <SectionTitle eyebrow="puppy passport" title="Why families trust TeddyPups" />
      <div className="trust-grid">{trust.map(([ic, h, p], i) => { const I = ICONS[ic]; return <Reveal key={h} delay={i * 80}><I /><h3>{h}</h3><p>{p}</p></Reveal>; })}</div>
    </section>
  );
}

function Families() {
  return (
    <section className="testimonial">
      <SectionTitle center title="Happy families & puppies" body="We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts." />
      <blockquote>{QUOTE}<cite>{QUOTE_BY}</cite></blockquote>
      <div className="polaroids">{featuredFamilies.map((f, i) => (
        <figure key={f.p} style={{ '--r': ((i * 7) % 9 - 4) + 'deg' }}><Img src={media(f.p, 640)} alt={FAMILY_ALT} /><figcaption className="hand">{f.caption}</figcaption></figure>
      ))}</div>
      <Button to="/happy-families" outline>See every happy family</Button>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="faq-preview">
      <div className="fp-head"><SectionTitle title="Questions, answered" /><Button to="/faq" outline>Read all questions</Button></div>
      <div className="fp-body"><Qmark className="fp-q" /><div className="fp-list">{faqs.slice(0, 3).map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}</div></div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta">
      <div>
        <Eyebrow>welcome home</Eyebrow>
        <h2>Ready to meet your new best friend?</h2>
        <p>Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.</p>
        <div className="actions"><WhatsAppButton /><Button to="/contact" outline>Visit & contact</Button></div>
      </div>
      <figure><Img src={media(bySlug('maltipoo-max-male').cover, 828)} alt="Max, waiting inside" /><Sparkle className="c-sp" /></figure>
    </section>
  );
}

export default function Home() {
  return <><Hero /><Meet /><Ways /><Journey /><Trust /><Families /><FaqPreview /><Cta /></>;
}
