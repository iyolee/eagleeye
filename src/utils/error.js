export function handleWindowError() {
  window.onerror = function(message, source, lineno, colno, error) {
    console.log('WindowError message: ', message);
    console.log('WindowError source: ', source);
    console.log('WindowError lineno: ', lineno);
    console.log('WindowError colno: ', colno);
    console.log('WindowError error: ', error);
  }
}