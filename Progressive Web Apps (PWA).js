// Registering a Service Worker to enable PWA features
if ('serviceWorker' in navigator) {
    // Check if the browser supports Service Workers
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            // Service Worker registration was successful
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(error => {
            // Service Worker registration failed
            console.log('Service Worker registration failed:', error);
        });
}

// Example Service Worker script (service-worker.js)

// Listen for the 'install' event, which occurs when the Service Worker is installed
self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Wait until the following actions are completed before considering the installation finished
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            // Open a cache and store specified assets for offline access
            return cache.addAll([
                '/',              // Cache the root URL
                '/index.html',    // Cache the main HTML file
                '/styles.css',    // Cache the CSS file
                '/script.js',     // Cache the JavaScript file
            ]);
        })
    );
});

// Listen for the 'fetch' event, which occurs for every network request
self.addEventListener('fetch', event => {
    // Intercept network requests and respond with cached assets if available
    event.respondWith(
        caches.match(event.request).then(response => {
            // Return the cached response if found, otherwise fetch from the network
            return response || fetch(event.request);
        })
    );
});
