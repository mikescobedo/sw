self.addEventListener('install', e=>{
    const cacheProm = caches.open('cache-v1')
    .then(cache =>{
        cache.addAll([
            './',
            '/index.html',
            '/css/estilos.css',
            '/app.js',
            '/images/estadio.png',
            '/images/boleto.png',
            'images/tabla.png',
            'images/bandera.png',
            'images/facebook.png',
            'images/instagram.png',
            'images/twiter.png',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
            "https://www.youtube.com/embed/qnxlsYqsqk4",
            "https://www.youtube.com/embed/bw069vTgDAI",
            "https://www.youtube.com/embed/dQbQ2cy2LgA"
        ])
    });
    e.waitUntil(cacheProm);
});

self.addEventListener('fetch', e =>{
    //cache with network fallback
    const respuesta = caches.match( e.request )
        .then ( res => {
            if ( res ) return res;
            //no existe el archivo
            //tengo que ir a la web
            console.log('No existe', e.request.url);
            return fetch( e.request ).then ( newResp => {
                caches.open('cache-v1')
                    .then( cache => {
                        cache.put( e.request, newResp);
                    }

                    )
                return newResp.clone;
            });
        });
        e.respondWith(respuesta);
    //only cache
    //e.respondWith( caches.match(e.request));
});