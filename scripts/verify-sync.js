const fs = require('fs');
const path = require('path');
const root = process.cwd();
const indexPath = path.join(root, 'index.html');
const pages = [
  'about.html',
  'blog.html',
  'contact.html',
  'disclaimer.html',
  'privacy-policy.html',
  'terms.html',
  'download-sa-pc.html'
];

function read(file) {
  try { return fs.readFileSync(path.join(root, file), 'utf8'); }
  catch (e) { return null; }
}

const index = read('index.html');
if (!index) { console.error('Could not read index.html'); process.exit(2); }

const normalize = (text) =>
  text
    .replace(/\r\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();

const navMatch = index.match(/<nav[\s\S]*?<\/nav>/m);
const footerMatch = index.match(/<footer[\s\S]*?<\/footer>/m);
const appleTouch = '<link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/favicon.png" />';
const icon32 = '<link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />';

if (!navMatch || !footerMatch) {
  console.error('index.html: could not extract nav or footer');
  process.exit(2);
}

const canonicalNav = normalize(navMatch[0]);
const canonicalFooter = normalize(footerMatch[0]);

console.log('Verifying pages vs index.html canonical nav/footer and favicons:');
for (const page of pages) {
  const content = read(page);
  if (!content) { console.log(page + ': MISSING'); continue; }
  const pnavRaw = (content.match(/<nav[\s\S]*?<\/nav>/m) || [''])[0];
  const pfootRaw = (content.match(/<footer[\s\S]*?<\/footer>/m) || [''])[0];
  const pnav = normalize(pnavRaw);
  const pfoot = normalize(pfootRaw);
  const navEqual = Boolean(pnav && pnav === canonicalNav);
  const footEqual = Boolean(pfoot && pfoot === canonicalFooter);
  const hasApple = content.includes(appleTouch);
  const has32 = content.includes(icon32);
  console.log(`${page}: nav=${navEqual} footer=${footEqual} apple=${hasApple} icon32=${has32}`);
}
