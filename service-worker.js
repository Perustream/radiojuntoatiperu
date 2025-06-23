
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("radio-cache-v1").then(cache => {
      return cache.addAll([
        "./radio_junto_a_ti_lazy_sin_botones_visibles_abajo.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
