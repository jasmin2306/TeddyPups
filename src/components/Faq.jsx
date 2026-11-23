import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqItem({ q, a, defaultOpen = false, as: H = 'h3' }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={'faq-item ' + (open ? 'open' : '')}>
      <H><button aria-expanded={open} onClick={() => setOpen(!open)}><span>{q}</span><ChevronDown size={19} /></button></H>
      <div className="faq-body"><div><p>{a}</p></div></div>
    </div>
  );
}
