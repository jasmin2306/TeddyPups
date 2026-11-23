// Available puppies — copy, slugs and image IDs taken from the original site.
// `gallery` lists extra photos; { v:true } marks a video poster frame.
const P = (slug, name, sex, age, cover, extra = {}) => ({
  slug, name, breed: extra.breed || name, sex, age, cover,
  video: !!extra.video, origin: 'imported', gallery: extra.gallery || [{ p: cover }], status: 'available',
  gender: sex.startsWith('boy') ? 'male' : 'female', named: !!extra.named,
});

export const puppies = [
  P('maltipoo-max-male', 'Max', 'boy', '3 months', 'Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp', {
    breed: 'Maltipoo', video: true, named: true,
    gallery: [{ p: 'Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp' }, { p: 'RH7J577OfQ7f/e776d07dbd/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg', v: true }] }),
  P('korean-teacup-maltipoo-female', 'Korean Teacup Maltipoo', 'girl', '2 months', 'gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg', {
    video: true,
    gallery: ['gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg','lrYgKCzauGW9/862b350f1f/b942a5_dd7daf7c699444a8bfea0bb4dcf963a1-mv2.jpg','2HME5hUXxDGx/c14e39aab8/b942a5_bab687bfd14446ed854f19e1550eb266-mv2.jpg','_I7jTQ-C-Dh5/b09aa1a0f5/b942a5_830ab138aef84b82b3db7b48185ee50c-mv2.jpg','kutyfJpoJ-DA/ca1aa390f9/b942a5_71048e5af78a49e4b6e412bee89631e2-mv2.jpg','NCtufeu82GJy/0cb53c797a/b942a5_ebec2dc631bf4872aeb94a01c0f12dd7-mv2.jpg','fQuTnvGZbJAa/86ed3161c6/b942a5_5d0c26e331114666b05aeb4fca8cd3f1-mv2.jpg','ds4-88xZCxr-/8317b998ec/b942a5_b9aafc7b5d0040e4819b526de9f4c1e2-mv2.jpg','vdAI8reODuzV/51cc01057b/b942a5_27cb35500f7b4c53b3e379324de49ba7-mv2.jpg','3brH1qwkxHa9/5f4c527879/b942a5_4b29b9e240d145ce8673732fa58dc7ec-mv2.jpg'].map((p) => ({ p })).concat([{ p: 'VEmjKw7D8k2w/44fc2c4d8f/b942a5_fc2a6555d51b4e65b8ad229592c3755bf002.jpg', v: true }]) }),
  P('korean-teacup-poodle-female', 'Korean Teacup Poodle', 'girl', '2 months', 'xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg', {
    gallery: ['xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg','GcThnLZ1o_XO/f28ac11602/b942a5_e172674fef9e426eaff0e73a7e4eba77-mv2.jpg','-GPU8k3WeJq7/59ae864abe/b942a5_677a4998fefe4388b8c5f79d74129b88-mv2.jpg','9v0TRGsxL1vp/43b2f58f58/b942a5_e17e745414544ea1b578880ea1bf535b-mv2.jpg'].map((p) => ({ p })) }),
  P('maltipoo-cavapoo-male', 'Maltipoo & Cavapoo', 'boy', '3 months Maltipoo & 2 months Cavapoo', 'YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg', { video: true }),
  P('toy-poodle-male-female', 'Toy Poodle', 'boy & girl', '2 months', 'vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg'),
  P('maltipoo-female-2', 'Maltipoo', 'girl', '3 months', '3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg', {
    video: true,
    gallery: [{ p: '3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg' },{ p: 's4vjs4fDhIH5/13bc63e2d9/b942a5_814fc9ca21e943149ca1b73af08c0d50-mv2.jpg' },{ p: 'P339nL9SBx1E/68f8b9aa08/b942a5_f4f6b9eaf3fa434d84e9011b104a2f2e-mv2.jpg' },{ p: 'Bba5vIUEEoRl/b9cb795228/b942a5_2cea5a50b30b4e6d81ef2b71a4455d04-mv2.jpg' },
      { p: 'e9Tc1KFwflMo/bf15ff5eaf/b942a5_867cc819aad8444bbdc7ef58bccc22e3f000.jpg', v: true },{ p: 'sE8ic09hv3OL/df0013d33c/b942a5_409c00762732451a9c914fd605f6427bf000.jpg', v: true },{ p: 'Wxd28D1k9rc-/f1091062ce/b942a5_4363a677510a4d298769f98ad3d42742f000.jpg', v: true }] }),
  P('pomeranian-female', 'Pomeranian', 'girl', '3 months', '3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg'),
  P('copper-male', 'Copper', 'boy', '2 months', 'O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg', {
    breed: 'Cavapoo', named: true,
    gallery: ['O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg','57IVFGZFRSJ1/70ec15d562/b942a5_2c13cdda0a174e33b22cf65063e1aa7f-mv2.jpg','2stMgxztsgXb/8b643b4842/b942a5_ce135cde6ebe45abb75435a7ce7d6910-mv2.jpg','objS5G36nXH0/4d398662f6/b942a5_f29547489be747e597ed20c191e1f24c-mv2.jpg'].map((p) => ({ p })) }),
  P('shitzu-female', 'Shih Tzu', 'girl', '2 months', 'qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg'),
  P('shitzu-male', 'Shih Tzu', 'boy', '2 months', 'crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg'),
  P('maltipoo-female-1', 'Maltipoo', 'girl', '2.5 months', 'wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg'),
  P('maltipoo-female', 'Maltipoo', 'girl', '2 months', 'lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg'),
  P('korean-teacup-pomeranian-1', 'Korean Teacup Pomeranian', 'girl', '2 months', 'EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg'),
  P('korean-teacup-pomeranian', 'Korean Teacup Pomeranian', 'girl', '2 months', 'vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg'),
  P('korean-teacup-pomeranian-male', 'Korean Teacup Pomeranian', 'boy', '2 months', 'nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg'),
];

// Normalise gallery entries that were given as plain path strings.
puppies.forEach((p) => { p.gallery = p.gallery.map((g) => (typeof g === 'string' ? { p: g } : g)); });

export const capital = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const altFor = (p) => {
  const sex = p.gender === 'male' ? 'male' : 'female';
  const base = p.sex === 'boy & girl' ? '' : sex;
  if (p.named) return `${p.name}, ${base} ${p.breed} puppy`;
  return base ? `${capital(base)} ${p.name} puppy` : `${p.name} puppy`;
};
export const subtitle = (p) => (p.name === p.breed ? `${p.sex} · ${p.age}` : `${p.breed} · ${p.sex} · ${p.age}`);
export const whereLabel = (p) => (p.origin === 'imported' ? 'Imported for you' : 'Dubai showroom');
export const bySlug = (slug) => puppies.find((p) => p.slug === slug);
export const BREEDS = [['Maltipoo', 'maltipoo'], ['Pomeranian', 'pomeranian'], ['Poodle', 'poodle'], ['Cavapoo', 'cavapoo'], ['Shih Tzu', 'shih-tzu']];
export const matchesBreed = (p, key) => p.breed.toLowerCase().replace(/\s+/g, '-').includes(key);

// Hero cluster (same six pups, same order as the original) + the pomeranian peeking in the centre.
export const heroSlugs = ['maltipoo-max-male','korean-teacup-maltipoo-female','korean-teacup-poodle-female','maltipoo-cavapoo-male','toy-poodle-male-female','maltipoo-female-2'];
export const heroCentre = '3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg';
