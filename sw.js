// service worker installed

self.addEventListener('install', evt => {
    console.log('Service worker installed');
});


// activate event
self.addEventListener('activate', evt => {
    console.log('Service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('Service worker fetched', evt);
});