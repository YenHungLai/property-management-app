self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open('my-cache').then((cache) => {
			cache.add('offline.html');
		})
	);
});

self.addEventListener('fetch', (e) => {
	console.log(e.request.url);
	e.respondWith(
		caches.match(e.request).then((response) => {
			return response || fetch(e.request);
		})
	);
});
