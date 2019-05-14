// Opera 8.0+
export const isOpera = () => (!!window.opr &&
  !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
export const isFirefox = () => typeof InstallTrigger !== 'undefined';

const isSafariRemoteNotification = (p) => p.toString() === "[object SafariRemoteNotification]";

// Safari 3.0+ "[object HTMLElementConstructor]" 
export const isSafari = () => {
  return /constructor/i.test(window.HTMLElement) ||
    (isSafariRemoteNotification(!window.safari
      || (typeof safari !== 'undefined' && safari.pushNotification)));
}

// Internet Explorer 6-11
export const isIE = () => false || !!document.documentMode;

// Edge 20+
export const isEdge = () => !isIE && !!window.StyleMedia;

// Chrome 1 - 71
export const isChrome = () => !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Blink engine detection
export const isBlink = () => (isChrome || isOpera) && !!window.CSS;

export const getBrowser = () => {
  if (isChrome) return 'Chrome';
  if (isFirefox) return 'Firefox';
  if (isSafari) return 'Safari';
  if (isIE) return 'IE';
  if (isOpera) return 'Opera';
  if (isEdge) return 'Edge';
  if (isBlink) return 'Blink';
}
