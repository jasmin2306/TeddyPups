import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { waLink } from '../config';

// Static-site enquiry: validates, then hands the composed message to WhatsApp (no backend required).
export default function EnquiryForm({ defaultMessage = '', subject = '' }) {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get('website')) return; // honeypot
    const name = (f.get('name') || '').trim(), phone = (f.get('phone') || '').trim();
    if (!name || !phone) { setErr('Please add your name and a phone / WhatsApp number.'); return; }
    setErr('');
    const lines = [`Hi TeddyPups! ${f.get('message') || defaultMessage}`, '', `Name: ${name}`, `Phone: ${phone}`];
    if (f.get('email')) lines.push(`Email: ${f.get('email')}`);
    if (f.get('area')) lines.push(`Area: ${f.get('area')}`);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    setSent(true);
  };
  return (
    <form className="enq" onSubmit={submit} noValidate>
      <label><span>Your name *</span><input name="name" required autoComplete="name" /></label>
      <label><span>Phone or WhatsApp *</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="With country code, e.g. +971 50 123 4567" /></label>
      <label><span>Email (optional)</span><input name="email" type="email" autoComplete="email" /></label>
      <label><span>Your area (optional)</span><input name="area" placeholder="e.g. Dubai Marina" /></label>
      <label className="full"><span>Message (optional)</span><textarea name="message" rows="4" defaultValue={defaultMessage} /></label>
      <label className="hp" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
      {err && <p className="form-err" role="alert">{err}</p>}
      <button className="btn" type="submit">{sent ? 'Enquiry sent ♥' : 'Send enquiry'} <ArrowUpRight size={17} /></button>
      {sent && <p className="form-ok" role="status">WhatsApp should have opened with your message — we'll reply as soon as we can.</p>}
    </form>
  );
}
