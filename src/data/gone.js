// Puppies who have gone home — [slug, name, breed, sex, source, image]
const T = 'TeddyPups', D = 'Dubai showroom';
const rows = [
  ['pomeranian-ace-boy','Ace','Pomeranian','boy',T,'mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif'],
  ['poodle-leo-male','Leo','Poodle','boy',T,'QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif'],
  ['maltipoo-mia-girl','Mia','Maltipoo','girl',D,'4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif'],
  ['maltipoo-sadie-girl','Sadie','Maltipoo','girl',T,'159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif'],
  ['blue-marle-pomeranian','Pomeranian','Pomeranian','Boy',T,'bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif'],
  ['pomsky-ollie-boy','Ollie','Pomsky','boy',T,'Qs2IHRk7OQIm/c16bea255c/27b888_ef3324a358d64858b4873a146574c3b9-mv2.avif'],
  ['maltipoo-bruno-boy','Bruno','Maltipoo','boy',D,'w-F8mJLs2gtj/f06147a6d3/27b888_301f58cbae624a1da36a79d46571043a-mv2.avif'],
  ['maltese-buddy-male','Buddy','Maltese','boy',D,'5ygCaO2TQb3v/f23ade89fa/27b888_6053b478acb641d1865de22aef938977-mv2.avif'],
  ['maltese-charlie-male','Charlie','Maltese','boy',T,'0c1rFiKXQLLk/75c6a20e15/27b888_b22287e7c1594de7ab2fba46eabea376-mv2.avif'],
  ['pomeranian-daisy-girl','Daisy','Pomeranian','girl',D,'d_ji2d9LVy0R/b19b4cf1c2/27b888_c6cbb607448f469a96d73f3bc42a992d-mv2.avif'],
  ['pomeranian-bella-female','Bella','Pomeranian','girl',T,'9jwfs8kSZW7K/9b8ae31d11/27b888_ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif'],
  ['poodle-teddy-male','Teddy','Poodle','boy',T,'9XFYXsuvjIcz/8d1efc8baa/27b888_430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif'],
  ['poodle-molly-female','Molly','Poodle','girl',D,'WZKcpiogRBW7/9ebcb8d165/27b888_2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif'],
  ['pomski-coco-girl','Coco','Pomsky','girl',T,'CXIzj6hYrmuI/eff60812df/27b888_ce94335cf4714a99a78c799f666f9323-mv2.avif'],
  ['pomsky-rosie-girl','Rosie','Pomsky','girl',D,'FhrW7pE84bji/f7c57baf49/27b888_08271c7de284451fb9c848757f4838fb-mv2.avif'],
  ['pomeranian-leo-boy','Leo','Pomeranian','boy',D,'5iCniMJshKud/8bfe42003c/27b888_84815fae2bd34283a7c79985cfc8b568-mv2.avif'],
  ['poodle-molly-girl','Molly','Poodle','girl',T,'lsaKvJhLwHB4/4cf2a02ed1/27b888_5aa959cec570411a8bb9372abe23f5e9-mv2.avif'],
  ['poodle-rocky-boy','Rocky','Poodle','boy',T,'51aMfxO7oeVe/6b70c96b1e/27b888_77a51d530b694ba58bc207f2a23e8620-mv2.avif'],
  ['maltipoo-sophie-girl','Sophie','Maltipoo','girl',D,'PYYTxpqgo76_/ae53ae6d3c/27b888_0d89c05fa55c43d4b6d55d573be83e73-mv2.avif'],
  ['maltipoo-lola-girl','Lola','Maltipoo','girl',D,'HPs4cYizPzy9/22b104e2c5/27b888_f24865b2456b46feb6ea6694fe90660f-mv2.avif'],
  ['pomeranian-rex-boy','Rex','Pomeranian','boy',T,'QIIvMqQTe9jr/d997ae172e/27b888_14fd6ec24bd94522bd54a5ae345240b8-mv2.avif'],
  ['pomsky-finn-male','Finn','Pomsky','boy',T,'tEAwWspMD8iG/1f55440daf/27b888_c68794a6e9ee442abb522a1d88a1e8cd-mv2.avif'],
  ['maltipoo-zoe-girl','Zoe','Maltipoo','girl',T,'fxj_9aZOSxQM/90c10b9c91/27b888_89e442e0035442308fc87fe3d2837f1d-mv2.avif'],
  ['pomeranian-mimi-girl','Mimi','Pomeranian','girl',D,'BLOZLPixUcjE/ea8ee97fd9/27b888_870c748ca6ee45cf8e0a311232dfe289-mv2.avif'],
  ['bichon-bailey-boy','Bailey','Bichon','boy',D,'fI-hlHuSwrRw/e5ae9b6384/27b888_8d87239e23854214a8718ef8f02c2d50-mv2.avif'],
  ['puppy','Maltipoo','Maltipoo','Girl',T,'Cl0B4v8U3Y-d/3dea5a9fec/27b888_1ae70e063fd7451a87d4dfe79794d58f-mv2.avif'],
  ['maltipo','Poodle','Poodle','Girl',D,'sFgPBojUhFBo/5ac1429cf4/27b888_aa0ce426ca3848abbc7d695f8c818568-mv2.avif'],
];
export const gone = rows.map(([slug, name, breed, sex, source, cover]) => ({
  slug, name, breed, sex, source, cover, status: 'gone',
  // Unnamed pups are labelled with their breed (name === breed).
  named: name !== breed,
}));
export const goneBySlug = (s) => gone.find((g) => g.slug === s);
export const goneAlt = (g) => {
  const s = g.sex.toLowerCase() === 'boy' ? 'male' : 'female';
  return g.named ? `${g.name}, ${s} ${g.breed} puppy` : `${s[0].toUpperCase() + s.slice(1)} ${g.name} puppy`;
};
