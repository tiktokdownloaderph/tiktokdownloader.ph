const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

const files = fs.readdirSync(root).filter(f => f.endsWith('.html') && f !== 'tiktok-to-mp4.html');

// Page slug for "active" class in mobile nav
const selfMap = {
  'index.html': '/',
  'blog.html': '/blog',
  'about.html': '/about',
  'contact.html': '/contact',
  'disclaimer.html': '/disclaimer',
  'privacy-policy.html': '/privacy-policy',
  'terms.html': '/terms',
  'download-sa-pc.html': '/download-sa-pc',
  'download-tiktok-videos-sa-android.html': '/download-tiktok-videos-sa-android',
  'download-tiktok-videos-sa-iphone.html': '/download-tiktok-videos-sa-iphone',
  'download-tiktok-stories.html': '/download-tiktok-stories',
  'download-ang-larawan-at-slide-ng-tiktok.html': '/download-ang-larawan-at-slide-ng-tiktok',
  'download-tiktok-mp3.html': '/download-tiktok-mp3',
};

// Correct 4-item dropdown content
const dropdownItems = [
  '<li><a class="dropdown-item" href="/download-tiktok-stories">TikTok Stories Downloader</a></li>',
  '                <li><a class="dropdown-item" href="/download-ang-larawan-at-slide-ng-tiktok">Download TikTok Slideshows</a></li>',
  '                <li><a class="dropdown-item" href="/download-tiktok-mp3">Download TikTok MP3</a></li>',
  '                <li><a class="dropdown-item" href="/tiktok-to-mp4">TikTok to MP4</a></li>',
].join('\n');

// Build mobile nav download links for a given page's self-URL
function buildMobileLinks(self, indent) {
  const sp = indent || '          ';
  const links = [
    { href: '/download-tiktok-stories',              emoji: '&#127909;', label: 'TikTok Stories'   },
    { href: '/download-ang-larawan-at-slide-ng-tiktok', emoji: '&#128248;', label: 'TikTok Slideshows' },
    { href: '/download-tiktok-mp3',                  emoji: '&#127925;', label: 'TikTok MP3'       },
    { href: '/tiktok-to-mp4',                        emoji: '&#127909;', label: 'TikTok to MP4'    },
  ];
  return links.map(l => {
    const cls = l.href === self ? 'nav-link active' : 'nav-link';
    return sp + '<li class="nav-item"><a class="' + cls + '" href="' + l.href + '">' + l.emoji + '&nbsp;' + l.label + '</a></li>';
  }).join('\n');
}

let updated = 0;

for (const f of files) {
  const fullPath = path.join(root, f);
  let c = fs.readFileSync(fullPath, 'utf8');
  const self = selfMap[f] || '';
  let changed = false;

  // ── 1. FIX DESKTOP DROPDOWN ─────────────────────────────────────────────
  // Regex: capture from Stories dropdown-item through closing </ul></li> of TikTok Downloaders
  // Works regardless of how many items are currently in the dropdown
  const ddRe = /(<li><a class="dropdown-item" href="\/download-tiktok-stories">TikTok Stories Downloader<\/a><\/li>)[\s\S]*?(<\/ul>\s*<\/li>)/;
  if (ddRe.test(c)) {
    c = c.replace(ddRe, dropdownItems + '\n              </ul>\n            </li>');
    changed = true;
  }

  // ── 2. FIX MOBILE NAV ────────────────────────────────────────────────────
  // Pattern A: 10-space indent (most pages)
  const pcA  = '          <li class="nav-item"><a class="nav-link" href="/download-sa-pc">&#128187;&nbsp;I-download sa PC</a></li>';
  const conA = '          <li class="nav-item"><a class="nav-link" href="/contact">&#128172;&nbsp;Contact Us</a></li>';
  // Pattern B: 16-space indent (index.html)
  const pcB  = '                <li class="nav-item"><a class="nav-link" href="/download-sa-pc">&#128187;&nbsp;I-download sa PC</a></li>';
  const conB = '                <li class="nav-item"><a class="nav-link" href="/contact">&#128172;&nbsp;Contact Us</a></li>';

  if (c.includes(pcB) && c.includes(conB)) {
    const links = buildMobileLinks(self, '                ');
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const mre = new RegExp(esc(pcB) + '[\\s\\S]*?' + esc(conB));
    c = c.replace(mre, pcB + '\n' + links + '\n' + conB);
    changed = true;
  } else if (c.includes(pcA) && c.includes(conA)) {
    const links = buildMobileLinks(self, '          ');
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const mre = new RegExp(esc(pcA) + '[\\s\\S]*?' + esc(conA));
    c = c.replace(mre, pcA + '\n' + links + '\n' + conA);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(fullPath, c, 'utf8');
    console.log('Fixed: ' + f);
    updated++;
  } else {
    console.log('Skip:  ' + f);
  }
}

console.log('\nDone: ' + updated + ' files updated');
