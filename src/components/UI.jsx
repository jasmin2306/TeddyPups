import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { waLink } from '../config';

export function Button({ children, to, href, outline = false, className = '', ...rest }) {
  const cls = `btn ${outline ? 'outline' : ''} ${className}`;
  const inner = <>{children}<ArrowUpRight size={17} /></>;
  if (href) return <a className={cls} href={href} target="_blank" rel="noopener" {...rest}>{inner}</a>;
  return <Link className={cls} to={to || '/puppies'} {...rest}>{inner}</Link>;
}
export const WhatsAppButton = ({ children = 'Enquire on WhatsApp', text, outline, className = '' }) => (
  <Button href={waLink(text)} outline={outline} className={className}>{children}</Button>
);
export const TextLink = ({ children, href, to }) => href
  ? <a className="text-link" href={href} target="_blank" rel="noopener">{children} <ArrowUpRight size={16} /></a>
  : <Link className="text-link" to={to}>{children} <ArrowUpRight size={16} /></Link>;
export const Eyebrow = ({ children, className = '' }) => <p className={'eyebrow ' + className}>{children}</p>;
export function SectionTitle({ eyebrow, title, body, center }) {
  return <div className={'section-title' + (center ? ' center' : '')}>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{body && <p>{body}</p>}</div>;
}
export function PageIntro({ eyebrow, title, body, children }) {
  return <section className="page-intro">{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h1>{title}</h1><p>{body}</p>{children}</section>;
}
// Image with a soft fade-in once loaded and a graceful empty state if it fails.
export function Img({ src, alt = '', className = '', ...rest }) {
  return <img className={'fade-img ' + className} src={src} alt={alt} loading="lazy" decoding="async" onLoad={(e) => e.currentTarget.classList.add('loaded')} onError={(e) => e.currentTarget.classList.add('loaded', 'broken')} {...rest} />;
}
