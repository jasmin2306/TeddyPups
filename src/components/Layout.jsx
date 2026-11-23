import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu as MenuIcon, X, Phone, MessageCircle } from 'lucide-react';
import { waLink, PHONE_LABEL, PHONE_TEL, EMAIL, SOCIALS } from '../config';
import { brand } from '../lib/img';
import { Paw } from './Doodles';

export const NAV = [['Home', '/'], ['Puppies', '/puppies'], ['Happy families', '/happy-families'], ['How it works', '/how-it-works'], ['FAQ', '/faq'], ['Visit & contact', '/contact']];

// Scrolls to top on navigation, or to the #anchor when one is given (e.g. /how-it-works#delivery).
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

function Logo({ footer }) {
  return <Link className="logo" to="/"><img src={brand(footer ? 96 : 128)} alt="" width={footer ? 58 : 48} height={footer ? 58 : 48} /><span>TeddyPups</span></Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const menuButtonRef = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) closeRef.current?.focus({ preventScroll: true });
    const k = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus({ preventScroll: true });
      }
      if (e.key === 'Tab' && open) {
        const focusable = [...document.querySelectorAll('.mobile-menu a, .mobile-menu button')];
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', k);
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [open]);
  return (
    <>
      <div className="topbar" aria-hidden="true"><div className="ticker">{Array.from({ length: 8 }, (_, i) => <span key={i}>every puppy is family <Paw /></span>)}</div></div>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <Logo />
        <nav aria-label="Primary">{NAV.map(([l, to]) => <NavLink key={to} to={to} end={to === '/'}>{l}<Paw className="nav-paw" /></NavLink>)}</nav>
        <a className="wa mini" href={waLink()} target="_blank" rel="noopener">WhatsApp us</a>
        <button ref={menuButtonRef} className="menu-btn" aria-expanded={open} aria-controls="mobile-site-menu" onClick={() => setOpen(true)}><MenuIcon size={16} /><span>Menu</span></button>
      </header>
      <div className={'mobile-scrim' + (open ? ' open' : '')} aria-hidden="true" onClick={() => setOpen(false)} />
      <div id="mobile-site-menu" className={'mobile-menu' + (open ? ' open' : '')} role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <div className="mm-top"><span className="hand">where to, friend?</span><button ref={closeRef} onClick={() => { setOpen(false); menuButtonRef.current?.focus({ preventScroll: true }); }} aria-label="Close menu"><X size={20} /> Close</button></div>
        {NAV.map(([l, to], i) => <Link key={to} to={to} style={{ '--i': i }}>{l}<ArrowUpRight size={19} /></Link>)}
        <a className="wa" href={waLink()} target="_blank" rel="noopener">WhatsApp us <ArrowUpRight size={17} /></a>
        <p className="mm-phone">{PHONE_LABEL}</p>
      </div>
    </>
  );
}

const EXPLORE = [['Available puppies', '/puppies'], ['Gone home', '/gone-home'], ['Happy families', '/happy-families'], ['How it works', '/how-it-works'], ['Delivery & collection', '/how-it-works#delivery'], ['FAQ', '/faq'], ['Visit & contact', '/contact']];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-stars" aria-hidden="true"><span /><span /><span /><span /><i /></div>
      <div className="footer-intro">
        <p className="serif footer-lead">Home, at last.</p>
        <p>TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.</p>
      </div>
      <div className="footer-basket" aria-label="Teddy sitting snug in his basket" role="img"><div className="footer-pup"><i /><i /><b /></div><div className="basket-rim" /><div className="basket-body"><span /><span /><span /></div></div>
      <div className="footer-explore"><h2>Explore</h2>{EXPLORE.map(([l, to]) => <Link key={l} to={to}>{l}</Link>)}</div>
      <div className="footer-contact">
        <h2>Say hello</h2>
        <a href={waLink()} target="_blank" rel="noopener">WhatsApp {PHONE_LABEL}</a>
        <a href={'mailto:' + EMAIL}>{EMAIL}</a>
        <span>Downtown Dubai, United Arab Emirates</span>
        <div className="social">{SOCIALS.map((s) => <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={s.name} title={s.name}>{s.name}</a>)}</div>
      </div>
      <div className="copyright"><span className="cp-brand"><img src={brand(96)} alt="" width="28" height="28" />© 2026 TeddyPups U.A.E.</span><span>every puppy is family</span></div>
    </footer>
  );
}

export function Layout({ children }) {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <a href={waLink()} target="_blank" rel="noopener" className="float-wa" aria-label="WhatsApp us"><MessageCircle size={26} /></a>
      <div className="mobile-bar"><a className="mb-wa" href={waLink()} target="_blank" rel="noopener"><MessageCircle size={18} /> WhatsApp us</a><a className="mb-call" href={'tel:' + PHONE_TEL}><Phone size={17} /> Call</a></div>
    </>
  );
}
