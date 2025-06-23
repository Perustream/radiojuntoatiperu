
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('radio-cache-v1').then(cache => {
      return cache.addAll([
        './radio_junto_a_ti_pwa.html',
        './manifest.json'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
