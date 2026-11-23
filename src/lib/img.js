import { ORIGIN } from '../config';
// Next.js-style optimised URL on the original host (keeps pages light); `raw` returns the original file.
export const media = (p, w = 828, q = 75) => `${ORIGIN}/_next/image?url=${encodeURIComponent('/media/' + p)}&w=${w}&q=${q}`;
export const raw = (p) => `${ORIGIN}/media/${p}`;
export const brand = (w = 128) => `${ORIGIN}/_next/image?url=${encodeURIComponent('/brand/logo.png')}&w=${w}&q=75`;
