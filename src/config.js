// Single source of truth for contact details & brand constants.
export const ORIGIN = 'https://puppy.instabizweb.com';
export const WA_NUMBER = '919898124987';
export const WA_TEXT = "Hi TeddyPups! I'd love to know more about your puppies.";
export const waLink = (text = WA_TEXT) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
export const PHONE_LABEL = '+971 50 000 0000';
export const PHONE_TEL = '+971500000000';
export const EMAIL = 'info@instabizweb.com';
export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/teddypups.worldwide/' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@teddypupsuae' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61567496944539' },
];
