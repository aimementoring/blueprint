'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Opera 8.0+
const isOpera = () => !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Firefox 1.0+

const isFirefox = () => typeof InstallTrigger !== 'undefined';

const isSafariRemoteNotification = p => p.toString() === "[object SafariRemoteNotification]"; // Safari 3.0+ "[object HTMLElementConstructor]" 


const isSafari = () => {
  return /constructor/i.test(window.HTMLElement) || isSafariRemoteNotification(!window.safari || typeof safari !== 'undefined' && safari.pushNotification);
}; // Internet Explorer 6-11

const isIE = () =>  !!document.documentMode; // Edge 20+

const isEdge = () => !isIE && !!window.StyleMedia; // Chrome 1 - 71

const isChrome = () => !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime); // Blink engine detection

const isBlink = () => (isChrome || isOpera) && !!window.CSS;
const getBrowser = () => {
  if (isChrome) return 'Chrome';
  if (isFirefox) return 'Firefox';
  if (isSafari) return 'Safari';
  if (isIE) return 'IE';
  if (isOpera) return 'Opera';
  if (isEdge) return 'Edge';
  if (isBlink) return 'Blink';
};

exports.getBrowser = getBrowser;
exports.isBlink = isBlink;
exports.isChrome = isChrome;
exports.isEdge = isEdge;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
