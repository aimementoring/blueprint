// Opera 8.0+
var isOpera = function isOpera() {
  return !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
}; // Firefox 1.0+

var isFirefox = function isFirefox() {
  return typeof InstallTrigger !== 'undefined';
};

var isSafariRemoteNotification = function isSafariRemoteNotification(p) {
  return p.toString() === "[object SafariRemoteNotification]";
}; // Safari 3.0+ "[object HTMLElementConstructor]" 


var isSafari = function isSafari() {
  return /constructor/i.test(window.HTMLElement) || isSafariRemoteNotification(!window.safari || typeof safari !== 'undefined' && safari.pushNotification);
}; // Internet Explorer 6-11

var isIE = function isIE() {
  return !!document.documentMode;
}; // Edge 20+

var isEdge = function isEdge() {
  return !isIE && !!window.StyleMedia;
}; // Chrome 1 - 71

var isChrome = function isChrome() {
  return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
}; // Blink engine detection

var isBlink = function isBlink() {
  return (isChrome || isOpera) && !!window.CSS;
};
var getBrowser = function getBrowser() {
  if (isChrome) return 'Chrome';
  if (isFirefox) return 'Firefox';
  if (isSafari) return 'Safari';
  if (isIE) return 'IE';
  if (isOpera) return 'Opera';
  if (isEdge) return 'Edge';
  if (isBlink) return 'Blink';
};

export { getBrowser, isBlink, isChrome, isEdge, isFirefox, isIE, isOpera, isSafari };
