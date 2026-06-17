const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const navMatch = indexHtml.match(/<nav[\s\S]*?class="navbar navbar-expand-md bg-dark py-3 navbar-dark"[\s\S]*?<\/nav>/);
const footerMatch = indexHtml.match(/<footer[\s\S]*?id="footer"[\s\S]*?<\/footer>/);
const iconMatch = indexHtml.match(/<link rel="shortcut icon" type="image\/png" href="data:image\/png;base64,[^"]*"[\s\S]*?(?=<link rel="stylesheet"|<script)/);
if (!navMatch || !footerMatch || !iconMatch) {
  throw new Error('Could not extract required index.html blocks');
}
const navHtml = navMatch[0];
const footerHtml = footerMatch[0];
const iconHtml = iconMatch[0].trim();
const pages = [
  'about.html',
  'blog.html',
  'contact.html',
  'disclaimer.html',
  'privacy-policy.html',
  'terms.html',
  'download-sa-pc.html'
];
for (const page of pages) {
  const filePath = path.join(root, page);
  console.log('Patching', page);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('<link rel="shortcut icon" type="image/png"')) {
    content = content.replace(/<link rel="shortcut icon" type="image\/png" href="data:image\/png;base64,[\s\S]*?(?=<link rel="stylesheet"|<script)/, iconHtml);
  } else {
    content = content.replace(/(<meta name="theme-color" content="#121212" \/>)/, `$1\n    ${iconHtml}`);
  }
  content = content.replace(/<nav class="navbar navbar-expand-md bg-dark py-3 navbar-dark"[\s\S]*?<\/nav>/, navHtml);
  content = content.replace(/<footer id="footer"[\s\S]*?<\/footer>/, footerHtml);
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Done');
