/* App Fotos do RT: guarda a tela no celular para abrir sem internet.
   Tudo deste site (página, ícones, config) sai do cache na hora e é atualizado em segundo plano:
   uma versão nova publicada aparece na próxima vez que o app for aberto. O Apps Script (outro site) não passa por aqui. */
const CACHE = 'fotos-rt-20261126162545';
const ARQUIVOS = ['./', 'index.html', 'manifest.webmanifest', 'config.js', 'icone-192.png', 'icone-512.png', 'icone-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('fotos-rt-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  const chave = e.request.mode === 'navigate' ? 'index.html' : e.request;
  e.respondWith(caches.open(CACHE).then(async c => {
    const salvo = await c.match(chave, { ignoreSearch: true });
    const rede = fetch(e.request).then(r => { if (r.ok) c.put(chave, r.clone()); return r; }).catch(() => null);
    if (salvo) { e.waitUntil(rede); return salvo; }
    return (await rede) || new Response('Sem conexão', { status: 503 });
  }));
});
