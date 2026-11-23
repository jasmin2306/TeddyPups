// Hand-drawn style SVG decorations (stroke = currentColor so CSS can tint them).
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const Squiggle = ({ className = '' }) => (
  <svg className={'doodle squiggle ' + className} viewBox="0 0 220 18" preserveAspectRatio="none" {...base}>
    <path d="M3 11c14-10 22 8 36 0s22 8 36 0 22 8 36 0 22 8 36 0 22 8 34 -1" />
  </svg>
);
export const Sparkle = ({ className = '' }) => (
  <svg className={'doodle sparkle ' + className} viewBox="0 0 40 40" {...base}>
    <path d="M20 3c1 9 3 15 17 17-14 2-16 8-17 17-1-9-3-15-17-17 14-2 16-8 17-17Z" />
  </svg>
);
export const Paw = ({ className = '' }) => (
  <svg className={'doodle paw ' + className} viewBox="0 0 48 48" {...base}>
    <path d="M24 26c-6 0-11 6-9 11 2 4 6 3 9 3s7 1 9-3c2-5-3-11-9-11Z" />
    <ellipse cx="10" cy="22" rx="3.5" ry="5" transform="rotate(-18 10 22)" />
    <ellipse cx="19" cy="12" rx="3.5" ry="5.5" />
    <ellipse cx="30" cy="12" rx="3.5" ry="5.5" />
    <ellipse cx="38.5" cy="22" rx="3.5" ry="5" transform="rotate(18 38.5 22)" />
  </svg>
);
export const HeartDoodle = ({ className = '' }) => (
  <svg className={'doodle heart-d ' + className} viewBox="0 0 40 36" {...base}>
    <path d="M20 33C6 23 3 15 6 9c3-6 11-5 14 2 3-7 11-8 14-2 3 6 0 14-14 24Z" />
  </svg>
);
export const CurlyArrow = ({ className = '' }) => (
  <svg className={'doodle arrow ' + className} viewBox="0 0 90 70" {...base}>
    <path d="M6 8C40 2 74 20 68 44c-3 13-20 12-18 1 2-9 16-9 22 5" />
    <path d="M62 52l10 -4 -1 -11" transform="translate(6 6)" />
  </svg>
);
export const Burst = ({ className = '' }) => (
  <svg className={'doodle burst ' + className} viewBox="0 0 60 60" {...base}>
    <path d="M30 5v12M30 43v12M5 30h12M43 30h12M12 12l8 8M40 40l8 8M48 12l-8 8M20 40l-8 8" />
  </svg>
);
export const Qmark = ({ className = '' }) => (
  <svg className={'doodle qmark ' + className} viewBox="0 0 120 170" {...base} strokeWidth="5">
    <path d="M22 48c0-30 22-40 40-40 22 0 38 14 38 34 0 30-34 30-38 58" />
    <circle cx="60" cy="148" r="5" fill="currentColor" />
  </svg>
);
export const Plane = ({ className = '' }) => (
  <svg className={'doodle plane ' + className} viewBox="0 0 64 64" {...base}>
    <path d="M58 8 6 28l18 8 8 18 8-14 14-12Z" /><path d="M24 36 58 8" />
  </svg>
);
// Teddy's "self-portrait" sketch used on the Puppies page.
export const SelfPortrait = ({ className = '' }) => (
  <svg className={'doodle self-portrait ' + className} viewBox="0 0 160 170" {...base}>
    <path d="M30 70c-12-4-20-18-14-30 5-9 18-9 26-2M130 70c12-4 20-18 14-30-5-9-18-9-26-2" />
    <path d="M30 72c0-34 22-52 50-52s50 18 50 52c0 36-22 62-50 62S30 108 30 72Z" />
    <circle cx="62" cy="76" r="4.5" fill="currentColor" /><circle cx="98" cy="76" r="4.5" fill="currentColor" />
    <path d="M70 94c6-6 14-6 20 0-4 8-16 8-20 0Z" fill="currentColor" />
    <path d="M80 100v8c-4 6-12 6-15 1M80 108c4 6 12 6 15 1" />
    <path d="M52 56c4-4 10-5 14-3M108 56c-4-4-10-5-14-3" />
    <path d="M56 138c-4 14-2 22 6 24M104 138c4 14 2 22-6 24" />
  </svg>
);
export const Social = ({ name }) => {
  const p = { viewBox: '0 0 24 24', width: 20, height: 20, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'Instagram') return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>;
  if (name === 'TikTok') return <svg {...p}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 3c.4 2.6 2.1 4.2 5 4.4" /></svg>;
  return <svg {...p}><path d="M14 8.5V7c0-1 .5-1.5 1.5-1.5H17V2.5h-2.5C11.8 2.5 10.5 4.2 10.5 6.8v1.7H8v3h2.5V21h3.5v-9.5h2.7l.5-3Z" /></svg>;
};
