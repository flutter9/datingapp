'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/anne.jpeg": "7a636f9bf09ef6845f336b9de282007d",
"/assets/assets/icons/pulse.png": "57a1bc79ce84cb0f3312f6f02a42dbf9",
"/assets/assets/icons/checklist.png": "66ff9969f9ea36358ece8c51a6684513",
"/assets/assets/icons/location_pin.png": "ab8244023ac2fc303cbe48e3b0873e02",
"/assets/assets/icons/sad_smiley.png": "db9dc12af7684e1b780055be523512f0",
"/assets/assets/fonts/Raleway-Medium.ttf": "430a0518f5ff3b6c8968b759a29b36e2",
"/assets/assets/fonts/Raleway-SemiBold.ttf": "17ba6410cbc694808961a988fd4426de",
"/assets/FontManifest.json": "a296e782073f1ccaaff7840ea31a6137",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "64aaad034e9d5161cb2c8d51ac24af3d",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "a27d9627d2fae39216304f2aa52f436a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
