import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { puppies } from '../data/puppies';
import { showroom } from '../data/content';
import { waLink, PHONE_LABEL, PHONE_TEL, EMAIL } from '../config';
import { media } from '../lib/img';
import { PageIntro, Img } from '../components/UI';
import { Sparkle, HeartDoodle } from '../components/Doodles';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get('website')) return;
    const name = (f.get('name') || '').trim(), phone = (f.get('phone') || '').trim();
    if (!name || !phone) { setErr('Please add your name and a phone / WhatsApp number.'); return; }
    setErr('');
    const L = ['Hi TeddyPups!', '', `My name is ${name}, and you can reach me on ${phone}.`];
    if (f.get('email')) L.push(`Email: ${f.get('email')}`);
    if (f.get('area')) L.push(`I live in ${f.get('area')}.`);
    L.push(`I'm curious about: ${f.get('puppy')}.`);
    if (f.get('message')) L.push('', f.get('message'));
    window.open(waLink(L.join('\n')), '_blank', 'noopener');
    setSent(true);
  };
  return (
    <>
      <PageIntro title="Get in touch with us" body="Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!" />
      <section className="contact">
        <form className="letter" onSubmit={submit} noValidate>
          <p className="serif dear">Dear TeddyPups,</p>
          <p className="sentence">my name is <input name="name" required aria-label="Your name" autoComplete="name" />, and you can reach me on <input name="phone" required aria-label="Phone or WhatsApp" inputMode="tel" autoComplete="tel" /> or by email at <input name="email" type="email" aria-label="Email" autoComplete="email" />.</p>
          <p className="sentence">I live in <input name="area" aria-label="Where you live" />, and I'm curious about
            <select name="puppy" aria-label="Puppy you're interested in (optional)" defaultValue="any puppy (not sure yet)">
              <option>any puppy (not sure yet)</option>
              {puppies.map((p) => <option key={p.slug} value={`${p.name} (${p.breed})`}>{p.named ? `${p.name} (${p.breed}, ${p.sex})` : `${p.name} (${p.sex})`}</option>)}
            </select>.</p>
          <label className="msg"><span>Your message (optional)</span><textarea name="message" rows="4" /></label>
          <label className="hp" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
          {err && <p className="form-err" role="alert">{err}</p>}
          <p className="hand signoff">with love, a future puppy parent</p>
          <button className="btn" type="submit">{sent ? 'Letter sent ♥' : 'Post my letter'} <ArrowUpRight size={17} /></button>
          {sent && <p className="form-ok" role="status">WhatsApp should have opened with your letter — we'll reply as soon as we can.</p>}
        </form>
        <div className="contact-side">
          <ul className="contact-details">
            <li><a href={waLink()} target="_blank" rel="noopener"><MessageCircle size={20} /><span>WhatsApp {PHONE_LABEL}</span></a></li>
            <li><a href={'tel:' + PHONE_TEL}><Phone size={20} /><span><small>call us</small>{PHONE_LABEL}</span></a></li>
            <li><a href={'mailto:' + EMAIL}><Mail size={20} /><span><small>email</small>{EMAIL}</span></a></li>
          </ul>
          <div className="visit">
            <h2>Visit us in Downtown Dubai</h2>
            <p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p>
            <p className="addr"><MapPin size={18} /> Downtown Dubai, United Arab Emirates</p>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Downtown+Dubai" target="_blank" rel="noopener">Open in Google Maps <ArrowUpRight size={15} /></a>
          </div>
          <figure className="visit-photo"><Img src={media(showroom.photos[3][0], 828)} alt={showroom.photos[3][1]} /><Sparkle className="v-sp" /><HeartDoodle className="v-h" /></figure>
        </div>
      </section>
    </>
  );
}
