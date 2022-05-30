self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('PWA-App').then((cache) => cache.addAll([
      '../Content/bootstrap.css',
      '../Content/site.css',
      '../Images/no-image.jpg',
      '../Images/istockphoto-1246706597-612x612.jpg',
      '../Scripts/bootstrap.js',
      '../Scripts/jquery-3.4.1.js',
      '../Scripts/jquery.validate-vsdoc.js',
      '../Scripts/jquery.validate.js',
      '../Scripts/jquery.validate.min.js',
      '../Scripts/jquery.validate.unobtrusive.js',
      '../Scripts/jquery.validate.unobtrusive.min.js',
      '../Scripts/modernizr-2.8.3.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
