if('serviceWorker' in navigator){
    console.log('Puedes usar los service worker en tu navegador');
    navigator.serviceWorker.register('sw.js')
                           .then(res=>console.log('Tu serviceWorker cargado correctamente',res))
                           .catch(err => console.log('El serviceWorker no se ha podido registrar', res))
}else{
    console.log('No se pude hacer el uso de service worker en tu navegador');

}