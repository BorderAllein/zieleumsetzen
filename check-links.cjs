// Prüft alle Link-Map-Ziele auf HTTP 200. Aufruf: node check-links.cjs
const { NET } = require('./content/netzwerk.cjs');
const { NETWORK, SOCIAL } = require('./content/meta.cjs');
const urls = [...new Set([...Object.values(NET).flat().map(x => x.u), ...NETWORK.map(n => n.url), 'https://cogether.de/coach-sven/', 'https://cogether.de/coach-angie/', 'https://cogether.de/coach-michelle/', 'https://cogether.de/coach-kerstin/'])];
(async () => {
  let bad = 0;
  for (const u of urls) {
    try { const r = await fetch(u, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 link-check' } }); if (r.status !== 200) { bad++; console.log(r.status, u); } } catch (e) { bad++; console.log('ERR', u, e.message); }
  }
  console.log(urls.length + ' geprüft, ' + bad + ' Probleme');
})();
