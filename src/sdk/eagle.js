window.onload = function() {
  function handleWindowError() {
    window.onerror = function(message, source, lineno, colno, error) {
      console.log('WindowError message: ', message);
      console.log('WindowError source: ', source);
      console.log('WindowError lineno: ', lineno);
      console.log('WindowError colno: ', colno);
      console.log('WindowError error: ', error);
    }
  
    // window.addEventListener('error', function(event) {
    //   console.log('addEventListener: ', event.target);
    // }, true);
  }

  function handlePromiseError() {
    window.addEventListener("unhandledrejection", event => {
      console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
    });
  }

  function handleConsoleError() {
    const consoleError = window.console.error; 
    window.console.error = function () { 
      console.warn(JSON.stringify(arguments));
      consoleError && consoleError.apply(window, arguments); 
    };
  }

  function handleLoadSourceError() {
    window.addEventListener('error', function(event) {
      console.log('addEventListener: ', event.target);
    }, true);
  }

  handleWindowError();
  handlePromiseError();
  handleConsoleError();
  handleLoadSourceError();
}