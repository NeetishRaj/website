if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then( reg => {console.log("Service Worker registered", reg);})
        .catch(err => {console.log("Couldn't register to the Service Worker");})
} else {
    alert("Service worker not supported on this device");
}