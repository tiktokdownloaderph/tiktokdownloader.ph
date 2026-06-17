const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(root).filter((name) => name.endsWith('.html'));
const updated = [];

const removeHtmlPrefix = (text) => {
  text = text.replace(/href="([^\"]*?)""/g, 'href="$1"');
  text = text.replace(/href="([^\"]*?)\.html"/g, 'href="$1"');
  text = text.replace(/\/\s*>\s*>/g, ' />');
  text = text.replace(/<link\s+rel="canonical"\s+href="(https:\/\/tiktokdownloader\.ph\/[^"]*?)""\s*\/?\s*>\s*>/g, '<link rel="canonical" href="$1" />');
  text = text.replace(/<link\s+rel="canonical"\s+href="(https:\/\/tiktokdownloader\.ph\/[^"]*?)\.html"\s*\/?\s*>\s*>/g, '<link rel="canonical" href="$1" />');
  text = text.replace(/<link\s+rel="canonical"\s+href="(https:\/\/tiktokdownloader\.ph\/[^"]*?)"\s*\/?\s*>\s*>/g, '<link rel="canonical" href="$1" />');
  text = text.replace(/<link\s+rel="canonical"\s+href="(https:\/\/tiktokdownloader\.ph\/[^"]*?)""\s*\/?/g, '<link rel="canonical" href="$1" />');
  text = text.replace(/<link\s+rel="canonical"\s+href="(https:\/\/tiktokdownloader\.ph\/[^"]*?)\.html"\s*\/?/g, '<link rel="canonical" href="$1" />');
  text = text.replace(/<link\s+rel="canonical"\s+href="(https:\/\/tiktokdownloader\.ph\/[^"]*?)"\s*\/?/g, '<link rel="canonical" href="$1" />');
  text = text.replace(/href="([^"]*?)""/g, 'href="$1"');
  return text;
};

for (const file of htmlFiles) {
  const filePath = path.join(root, file);
  let text = fs.readFileSync(filePath, 'utf8');
  const original = text;

  text = removeHtmlPrefix(text);

  if (text !== original) {
    fs.writeFileSync(filePath, text, 'utf8');
    updated.push(file);
  }
}

const sitemapPath = path.join(root, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const original = sitemap;
  sitemap = sitemap.replace(/<loc>(https:\/\/tiktokdownloader\.ph\/(?:[a-zA-Z0-9\-]+\/)*[a-zA-Z0-9\-]+?)\.html<\/loc>/g, '<loc>$1</loc>');
  sitemap = sitemap.replace('https://tiktokdownloader.ph//', 'https://tiktokdownloader.ph/');
  if (sitemap !== original) {
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  }
}

const vercelConfig = {
  cleanUrls: true,
  trailingSlash: false,
  redirects: [
    { source: '/about.html', destination: '/about', permanent: true },
    { source: '/blog.html', destination: '/blog', permanent: true },
    { source: '/contact.html', destination: '/contact', permanent: true },
    { source: '/disclaimer.html', destination: '/disclaimer', permanent: true },
    { source: '/download-sa-pc.html', destination: '/download-sa-pc', permanent: true },
    { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
    { source: '/terms.html', destination: '/terms', permanent: true }
  ]
};
fs.writeFileSync(path.join(root, 'vercel.json'), JSON.stringify(vercelConfig, null, 2), 'utf8');
console.log('Updated HTML files:', updated.join(', ') || 'none');
console.log('vercel.json written.');
