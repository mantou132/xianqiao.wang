if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/postach.io/sw.js', {scope: '/'});
}