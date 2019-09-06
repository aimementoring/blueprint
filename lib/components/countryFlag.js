function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d);}var C={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}var H=G.prototype=new F;
H.constructor=G;objectAssign(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return {$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function da(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return {result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c);}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++);}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a));}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b);}function W(){var a=I.current;null===a?B("321"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b);},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return {current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:y,render:a}},lazy:function(a){return {$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return {$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l;}return {$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default||Z;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module) {



if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;
var checkPropTypes = checkPropTypes_1;

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}
});

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});
var react_1 = react.Children;
var react_2 = react.Component;
var react_3 = react.PureComponent;
var react_4 = react.PropTypes;
var react_5 = react.createElement;
var react_6 = react.Fragment;
var react_7 = react.useState;
var react_8 = react.useEffect;
var react_9 = react.useRef;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".countryFlag-module_flagIconad__3gWvk, .countryFlag-module_flagIconae__64emT, .countryFlag-module_flagIconaf__nUQe0, .countryFlag-module_flagIconag__3lg99, .countryFlag-module_flagIconai__32vuE, .countryFlag-module_flagIconal__39GQ7, .countryFlag-module_flagIconam__3VufO, .countryFlag-module_flagIconao__3f9bp, .countryFlag-module_flagIconaq__34pcv, .countryFlag-module_flagIconar__jJ1eL, .countryFlag-module_flagIconas__3sr4G, .countryFlag-module_flagIconat__2_cNJ, .countryFlag-module_flagIconau__3llEh, .countryFlag-module_flagIconaw__1sJuO, .countryFlag-module_flagIconax__1Ju0e, .countryFlag-module_flagIconaz__393hC, .countryFlag-module_flagIconba__e05Ws, .countryFlag-module_flagIconbb__HhQ3u, .countryFlag-module_flagIconbd__2DC2H, .countryFlag-module_flagIconbe__Y3DrU, .countryFlag-module_flagIconbf__1MDY1, .countryFlag-module_flagIconbg__opP_l, .countryFlag-module_flagIconbh__3GtpP, .countryFlag-module_flagIconbi__2c-uM, .countryFlag-module_flagIconbj__14HXC, .countryFlag-module_flagIconbl__2anRm, .countryFlag-module_flagIconbm__2c5Xo, .countryFlag-module_flagIconbn__3M0cc, .countryFlag-module_flagIconbo__2Cu8Z, .countryFlag-module_flagIconbq__1XfIi, .countryFlag-module_flagIconbr__LFa3x, .countryFlag-module_flagIconbs__YdkO2, .countryFlag-module_flagIconbt__btA-g, .countryFlag-module_flagIconbv__19eZP, .countryFlag-module_flagIconbw__3MCtg, .countryFlag-module_flagIconby__3D6qH, .countryFlag-module_flagIconbz__1HjWQ, .countryFlag-module_flagIconca__29BfK, .countryFlag-module_flagIconcc__2zCOt, .countryFlag-module_flagIconcd__Nt-Oo, .countryFlag-module_flagIconcf__YfPu5, .countryFlag-module_flagIconcg__1NqPA, .countryFlag-module_flagIconch__3AsV7, .countryFlag-module_flagIconci__1tuH9, .countryFlag-module_flagIconck__2GwbD, .countryFlag-module_flagIconcl__2e1FA, .countryFlag-module_flagIconcm__1lonI, .countryFlag-module_flagIconcn__3vi2r, .countryFlag-module_flagIconco__2oA9m, .countryFlag-module_flagIconcr__1kxom, .countryFlag-module_flagIconcu__3VJKw, .countryFlag-module_flagIconcv__3l1CD, .countryFlag-module_flagIconcw__3cnMq, .countryFlag-module_flagIconcx__2Uw5G, .countryFlag-module_flagIconcy__1gJfL, .countryFlag-module_flagIconcz__2OuAN, .countryFlag-module_flagIconde__2uF8y, .countryFlag-module_flagIcondj__149TO, .countryFlag-module_flagIcondk__3Mso7, .countryFlag-module_flagIcondm__3WhYo, .countryFlag-module_flagIcondo__FoEps, .countryFlag-module_flagIcondz__1l9Df, .countryFlag-module_flagIconec__C6Vm-, .countryFlag-module_flagIconee__2igqc, .countryFlag-module_flagIconeg__2MGbu, .countryFlag-module_flagIconeh__1K-OS, .countryFlag-module_flagIconer__1mEIc, .countryFlag-module_flagIcones__2M0n5, .countryFlag-module_flagIconet__2JzD9, .countryFlag-module_flagIconfi__1BHFO, .countryFlag-module_flagIconfj__3auGY, .countryFlag-module_flagIconfk__24Wps, .countryFlag-module_flagIconfm__3xa3B, .countryFlag-module_flagIconfo__3gjpz, .countryFlag-module_flagIconfr__OPJjR, .countryFlag-module_flagIconga__1U7kz, .countryFlag-module_flagIcongb__1CgOa, .countryFlag-module_flagIcongd__3ohFf, .countryFlag-module_flagIconge__1zaDT, .countryFlag-module_flagIcongf__3lzk3, .countryFlag-module_flagIcongg__2BkwD, .countryFlag-module_flagIcongh__auKbx, .countryFlag-module_flagIcongi__3vL-6, .countryFlag-module_flagIcongl__2_MNy, .countryFlag-module_flagIcongm__2wX9i, .countryFlag-module_flagIcongn__2aH-m, .countryFlag-module_flagIcongp__38se1, .countryFlag-module_flagIcongq__2g03G, .countryFlag-module_flagIcongr__16yX5, .countryFlag-module_flagIcongs__37F0_, .countryFlag-module_flagIcongt__3lVBm, .countryFlag-module_flagIcongu__1ii9A, .countryFlag-module_flagIcongw__31V9u, .countryFlag-module_flagIcongy__2Fybe, .countryFlag-module_flagIconhk__3N-7y, .countryFlag-module_flagIconhm__1wdfB, .countryFlag-module_flagIconhn__pGQaM, .countryFlag-module_flagIconhr__cXFxP, .countryFlag-module_flagIconht__ov0Lz, .countryFlag-module_flagIconhu__2Bsop, .countryFlag-module_flagIconid__1PXkE, .countryFlag-module_flagIconie__2oU4z, .countryFlag-module_flagIconil__3Bpnp, .countryFlag-module_flagIconim__21XlK, .countryFlag-module_flagIconin__3fwCP, .countryFlag-module_flagIconio__uei2q, .countryFlag-module_flagIconiq__2qaSq, .countryFlag-module_flagIconir__RuI77, .countryFlag-module_flagIconis__2d_YR, .countryFlag-module_flagIconit__1tEEe, .countryFlag-module_flagIconje__1hH73, .countryFlag-module_flagIconjm__2_vlK, .countryFlag-module_flagIconjo__FW5Bi, .countryFlag-module_flagIconjp__3WT-j, .countryFlag-module_flagIconke__tyH43, .countryFlag-module_flagIconkg__3TjBh, .countryFlag-module_flagIconkh__l2375, .countryFlag-module_flagIconki__1ThZO, .countryFlag-module_flagIconkm__HSHir, .countryFlag-module_flagIconkn__3ZAIW, .countryFlag-module_flagIconkp__18Kji, .countryFlag-module_flagIconkr__1VdkQ, .countryFlag-module_flagIconkw__1MlMn, .countryFlag-module_flagIconky__1WEx2, .countryFlag-module_flagIconkz__2xyD2, .countryFlag-module_flagIconla__aapXu, .countryFlag-module_flagIconlb__2_sSk, .countryFlag-module_flagIconlc__rC8CI, .countryFlag-module_flagIconli__3sCJ9, .countryFlag-module_flagIconlk__1Sulz, .countryFlag-module_flagIconlr__2iJH3, .countryFlag-module_flagIconls__Ka3C-, .countryFlag-module_flagIconlt__26dXR, .countryFlag-module_flagIconlu__1tdo6, .countryFlag-module_flagIconlv__2RQoa, .countryFlag-module_flagIconly__3OTlK, .countryFlag-module_flagIconma__2ryhY, .countryFlag-module_flagIconmc__RTycp, .countryFlag-module_flagIconmd__1M893, .countryFlag-module_flagIconme__30w0e, .countryFlag-module_flagIconmf__26kxN, .countryFlag-module_flagIconmg__1JE8Y, .countryFlag-module_flagIconmh__2T01e, .countryFlag-module_flagIconmk__3ET4D, .countryFlag-module_flagIconml__24UsR, .countryFlag-module_flagIconmm__3Xehg, .countryFlag-module_flagIconmn__3WfAF, .countryFlag-module_flagIconmo__1nZuB, .countryFlag-module_flagIconmp__3LXBP, .countryFlag-module_flagIconmq__fuL89, .countryFlag-module_flagIconmr__1jtlB, .countryFlag-module_flagIconms__2lvRd, .countryFlag-module_flagIconmt__3UzTh, .countryFlag-module_flagIconmu__24tFl, .countryFlag-module_flagIconmv__5NHcB, .countryFlag-module_flagIconmw__1ObrI, .countryFlag-module_flagIconmx__1s3hO, .countryFlag-module_flagIconmy__2erL1, .countryFlag-module_flagIconmz__NLVHQ, .countryFlag-module_flagIconna__1YokS, .countryFlag-module_flagIconnc__1ALY5, .countryFlag-module_flagIconne__1pwo0, .countryFlag-module_flagIconnf__JGmhr, .countryFlag-module_flagIconng__2RZdf, .countryFlag-module_flagIconni__3rmAq, .countryFlag-module_flagIconnl__31zot, .countryFlag-module_flagIconno__2I0T3, .countryFlag-module_flagIconnp__1oR5w, .countryFlag-module_flagIconnr__dUA-G, .countryFlag-module_flagIconnu__37vFc, .countryFlag-module_flagIconnz__nGQ9H, .countryFlag-module_flagIconom__3w0up, .countryFlag-module_flagIconpa__2q21w, .countryFlag-module_flagIconpe__2g9rh, .countryFlag-module_flagIconpf__cALBR, .countryFlag-module_flagIconpg__14ZSI, .countryFlag-module_flagIconph__2BXt0, .countryFlag-module_flagIconpk__TM426, .countryFlag-module_flagIconpl__29qbl, .countryFlag-module_flagIconpm__1XrZ2, .countryFlag-module_flagIconpn__1J6OT, .countryFlag-module_flagIconpr__AsLRI, .countryFlag-module_flagIconps__3ONiM, .countryFlag-module_flagIconpt___mRNL, .countryFlag-module_flagIconpw__1XT5-, .countryFlag-module_flagIconpy__2qZVa, .countryFlag-module_flagIconqa__3PGYx, .countryFlag-module_flagIconre__2qHFa, .countryFlag-module_flagIconro__YwrNq, .countryFlag-module_flagIconrs__1AUas, .countryFlag-module_flagIconru__3qqPM, .countryFlag-module_flagIconrw__3up2x, .countryFlag-module_flagIconsa__1QWu0, .countryFlag-module_flagIconsb__3xK3g, .countryFlag-module_flagIconsc__S4E8D, .countryFlag-module_flagIconsd__5DIG9, .countryFlag-module_flagIconse__3kNqh, .countryFlag-module_flagIconsg__3CsSw, .countryFlag-module_flagIconsh__29yGE, .countryFlag-module_flagIconsi__4oxkh, .countryFlag-module_flagIconsj__2p2Bs, .countryFlag-module_flagIconsk__1U5Cq, .countryFlag-module_flagIconsl__1n9J4, .countryFlag-module_flagIconsm__3jh8_, .countryFlag-module_flagIconsn__3bTt-, .countryFlag-module_flagIconso__1_UaX, .countryFlag-module_flagIconsr__3lF3G, .countryFlag-module_flagIconss__19t2a, .countryFlag-module_flagIconst__WUm1s, .countryFlag-module_flagIconsv__BpIvG, .countryFlag-module_flagIconsx__asgUs, .countryFlag-module_flagIconsy__3vxYr, .countryFlag-module_flagIconsz__17cYW, .countryFlag-module_flagIcontc__2UV3z, .countryFlag-module_flagIcontd__2BIP_, .countryFlag-module_flagIcontf__2a1ka, .countryFlag-module_flagIcontg__2RNeb, .countryFlag-module_flagIconth__11pc9, .countryFlag-module_flagIcontj__3J0Al, .countryFlag-module_flagIcontk__1eCE0, .countryFlag-module_flagIcontl__BGqYV, .countryFlag-module_flagIcontm__2VwXV, .countryFlag-module_flagIcontn__WJlvx, .countryFlag-module_flagIconto__2mffn, .countryFlag-module_flagIcontr__1EIBo, .countryFlag-module_flagIcontt__3Nchf, .countryFlag-module_flagIcontv__v99rK, .countryFlag-module_flagIcontw__PhgDr, .countryFlag-module_flagIcontz__jgPdL, .countryFlag-module_flagIconua___77cP, .countryFlag-module_flagIconug__2eo9K, .countryFlag-module_flagIconum__24mh7, .countryFlag-module_flagIconus__GqGRS, .countryFlag-module_flagIconuy__2C6MB, .countryFlag-module_flagIconuz__3E8jN, .countryFlag-module_flagIconva__3NlAi, .countryFlag-module_flagIconvc__3bLDE, .countryFlag-module_flagIconve__1tK4L, .countryFlag-module_flagIconvg__1hPzt, .countryFlag-module_flagIconvi__1QNn4, .countryFlag-module_flagIconvn__zAq2v, .countryFlag-module_flagIconvu__3WTZh, .countryFlag-module_flagIconwf__16TuL, .countryFlag-module_flagIconws__1dn2G, .countryFlag-module_flagIconye__eVZ-A, .countryFlag-module_flagIconyt__1B1Lh, .countryFlag-module_flagIconza__2iCGN, .countryFlag-module_flagIconzm__3NPDr, .countryFlag-module_flagIconzw__ktfF6, .countryFlag-module_flagIcones-ct__3L17Q, .countryFlag-module_flagIconeu__3NOop, .countryFlag-module_flagIcongb-eng__26Mmz, .countryFlag-module_flagIcongb-nir__E8oMa, .countryFlag-module_flagIcongb-sct__149wz, .countryFlag-module_flagIcongb-wls__3UEMS, .countryFlag-module_flagIconun__2_NwH, .countryFlag-module_flagIconxk__1l6pZ {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  line-height: 1em; }\n  .countryFlag-module_flagIconad__3gWvk::before, .countryFlag-module_flagIconae__64emT::before, .countryFlag-module_flagIconaf__nUQe0::before, .countryFlag-module_flagIconag__3lg99::before, .countryFlag-module_flagIconai__32vuE::before, .countryFlag-module_flagIconal__39GQ7::before, .countryFlag-module_flagIconam__3VufO::before, .countryFlag-module_flagIconao__3f9bp::before, .countryFlag-module_flagIconaq__34pcv::before, .countryFlag-module_flagIconar__jJ1eL::before, .countryFlag-module_flagIconas__3sr4G::before, .countryFlag-module_flagIconat__2_cNJ::before, .countryFlag-module_flagIconau__3llEh::before, .countryFlag-module_flagIconaw__1sJuO::before, .countryFlag-module_flagIconax__1Ju0e::before, .countryFlag-module_flagIconaz__393hC::before, .countryFlag-module_flagIconba__e05Ws::before, .countryFlag-module_flagIconbb__HhQ3u::before, .countryFlag-module_flagIconbd__2DC2H::before, .countryFlag-module_flagIconbe__Y3DrU::before, .countryFlag-module_flagIconbf__1MDY1::before, .countryFlag-module_flagIconbg__opP_l::before, .countryFlag-module_flagIconbh__3GtpP::before, .countryFlag-module_flagIconbi__2c-uM::before, .countryFlag-module_flagIconbj__14HXC::before, .countryFlag-module_flagIconbl__2anRm::before, .countryFlag-module_flagIconbm__2c5Xo::before, .countryFlag-module_flagIconbn__3M0cc::before, .countryFlag-module_flagIconbo__2Cu8Z::before, .countryFlag-module_flagIconbq__1XfIi::before, .countryFlag-module_flagIconbr__LFa3x::before, .countryFlag-module_flagIconbs__YdkO2::before, .countryFlag-module_flagIconbt__btA-g::before, .countryFlag-module_flagIconbv__19eZP::before, .countryFlag-module_flagIconbw__3MCtg::before, .countryFlag-module_flagIconby__3D6qH::before, .countryFlag-module_flagIconbz__1HjWQ::before, .countryFlag-module_flagIconca__29BfK::before, .countryFlag-module_flagIconcc__2zCOt::before, .countryFlag-module_flagIconcd__Nt-Oo::before, .countryFlag-module_flagIconcf__YfPu5::before, .countryFlag-module_flagIconcg__1NqPA::before, .countryFlag-module_flagIconch__3AsV7::before, .countryFlag-module_flagIconci__1tuH9::before, .countryFlag-module_flagIconck__2GwbD::before, .countryFlag-module_flagIconcl__2e1FA::before, .countryFlag-module_flagIconcm__1lonI::before, .countryFlag-module_flagIconcn__3vi2r::before, .countryFlag-module_flagIconco__2oA9m::before, .countryFlag-module_flagIconcr__1kxom::before, .countryFlag-module_flagIconcu__3VJKw::before, .countryFlag-module_flagIconcv__3l1CD::before, .countryFlag-module_flagIconcw__3cnMq::before, .countryFlag-module_flagIconcx__2Uw5G::before, .countryFlag-module_flagIconcy__1gJfL::before, .countryFlag-module_flagIconcz__2OuAN::before, .countryFlag-module_flagIconde__2uF8y::before, .countryFlag-module_flagIcondj__149TO::before, .countryFlag-module_flagIcondk__3Mso7::before, .countryFlag-module_flagIcondm__3WhYo::before, .countryFlag-module_flagIcondo__FoEps::before, .countryFlag-module_flagIcondz__1l9Df::before, .countryFlag-module_flagIconec__C6Vm-::before, .countryFlag-module_flagIconee__2igqc::before, .countryFlag-module_flagIconeg__2MGbu::before, .countryFlag-module_flagIconeh__1K-OS::before, .countryFlag-module_flagIconer__1mEIc::before, .countryFlag-module_flagIcones__2M0n5::before, .countryFlag-module_flagIconet__2JzD9::before, .countryFlag-module_flagIconfi__1BHFO::before, .countryFlag-module_flagIconfj__3auGY::before, .countryFlag-module_flagIconfk__24Wps::before, .countryFlag-module_flagIconfm__3xa3B::before, .countryFlag-module_flagIconfo__3gjpz::before, .countryFlag-module_flagIconfr__OPJjR::before, .countryFlag-module_flagIconga__1U7kz::before, .countryFlag-module_flagIcongb__1CgOa::before, .countryFlag-module_flagIcongd__3ohFf::before, .countryFlag-module_flagIconge__1zaDT::before, .countryFlag-module_flagIcongf__3lzk3::before, .countryFlag-module_flagIcongg__2BkwD::before, .countryFlag-module_flagIcongh__auKbx::before, .countryFlag-module_flagIcongi__3vL-6::before, .countryFlag-module_flagIcongl__2_MNy::before, .countryFlag-module_flagIcongm__2wX9i::before, .countryFlag-module_flagIcongn__2aH-m::before, .countryFlag-module_flagIcongp__38se1::before, .countryFlag-module_flagIcongq__2g03G::before, .countryFlag-module_flagIcongr__16yX5::before, .countryFlag-module_flagIcongs__37F0_::before, .countryFlag-module_flagIcongt__3lVBm::before, .countryFlag-module_flagIcongu__1ii9A::before, .countryFlag-module_flagIcongw__31V9u::before, .countryFlag-module_flagIcongy__2Fybe::before, .countryFlag-module_flagIconhk__3N-7y::before, .countryFlag-module_flagIconhm__1wdfB::before, .countryFlag-module_flagIconhn__pGQaM::before, .countryFlag-module_flagIconhr__cXFxP::before, .countryFlag-module_flagIconht__ov0Lz::before, .countryFlag-module_flagIconhu__2Bsop::before, .countryFlag-module_flagIconid__1PXkE::before, .countryFlag-module_flagIconie__2oU4z::before, .countryFlag-module_flagIconil__3Bpnp::before, .countryFlag-module_flagIconim__21XlK::before, .countryFlag-module_flagIconin__3fwCP::before, .countryFlag-module_flagIconio__uei2q::before, .countryFlag-module_flagIconiq__2qaSq::before, .countryFlag-module_flagIconir__RuI77::before, .countryFlag-module_flagIconis__2d_YR::before, .countryFlag-module_flagIconit__1tEEe::before, .countryFlag-module_flagIconje__1hH73::before, .countryFlag-module_flagIconjm__2_vlK::before, .countryFlag-module_flagIconjo__FW5Bi::before, .countryFlag-module_flagIconjp__3WT-j::before, .countryFlag-module_flagIconke__tyH43::before, .countryFlag-module_flagIconkg__3TjBh::before, .countryFlag-module_flagIconkh__l2375::before, .countryFlag-module_flagIconki__1ThZO::before, .countryFlag-module_flagIconkm__HSHir::before, .countryFlag-module_flagIconkn__3ZAIW::before, .countryFlag-module_flagIconkp__18Kji::before, .countryFlag-module_flagIconkr__1VdkQ::before, .countryFlag-module_flagIconkw__1MlMn::before, .countryFlag-module_flagIconky__1WEx2::before, .countryFlag-module_flagIconkz__2xyD2::before, .countryFlag-module_flagIconla__aapXu::before, .countryFlag-module_flagIconlb__2_sSk::before, .countryFlag-module_flagIconlc__rC8CI::before, .countryFlag-module_flagIconli__3sCJ9::before, .countryFlag-module_flagIconlk__1Sulz::before, .countryFlag-module_flagIconlr__2iJH3::before, .countryFlag-module_flagIconls__Ka3C-::before, .countryFlag-module_flagIconlt__26dXR::before, .countryFlag-module_flagIconlu__1tdo6::before, .countryFlag-module_flagIconlv__2RQoa::before, .countryFlag-module_flagIconly__3OTlK::before, .countryFlag-module_flagIconma__2ryhY::before, .countryFlag-module_flagIconmc__RTycp::before, .countryFlag-module_flagIconmd__1M893::before, .countryFlag-module_flagIconme__30w0e::before, .countryFlag-module_flagIconmf__26kxN::before, .countryFlag-module_flagIconmg__1JE8Y::before, .countryFlag-module_flagIconmh__2T01e::before, .countryFlag-module_flagIconmk__3ET4D::before, .countryFlag-module_flagIconml__24UsR::before, .countryFlag-module_flagIconmm__3Xehg::before, .countryFlag-module_flagIconmn__3WfAF::before, .countryFlag-module_flagIconmo__1nZuB::before, .countryFlag-module_flagIconmp__3LXBP::before, .countryFlag-module_flagIconmq__fuL89::before, .countryFlag-module_flagIconmr__1jtlB::before, .countryFlag-module_flagIconms__2lvRd::before, .countryFlag-module_flagIconmt__3UzTh::before, .countryFlag-module_flagIconmu__24tFl::before, .countryFlag-module_flagIconmv__5NHcB::before, .countryFlag-module_flagIconmw__1ObrI::before, .countryFlag-module_flagIconmx__1s3hO::before, .countryFlag-module_flagIconmy__2erL1::before, .countryFlag-module_flagIconmz__NLVHQ::before, .countryFlag-module_flagIconna__1YokS::before, .countryFlag-module_flagIconnc__1ALY5::before, .countryFlag-module_flagIconne__1pwo0::before, .countryFlag-module_flagIconnf__JGmhr::before, .countryFlag-module_flagIconng__2RZdf::before, .countryFlag-module_flagIconni__3rmAq::before, .countryFlag-module_flagIconnl__31zot::before, .countryFlag-module_flagIconno__2I0T3::before, .countryFlag-module_flagIconnp__1oR5w::before, .countryFlag-module_flagIconnr__dUA-G::before, .countryFlag-module_flagIconnu__37vFc::before, .countryFlag-module_flagIconnz__nGQ9H::before, .countryFlag-module_flagIconom__3w0up::before, .countryFlag-module_flagIconpa__2q21w::before, .countryFlag-module_flagIconpe__2g9rh::before, .countryFlag-module_flagIconpf__cALBR::before, .countryFlag-module_flagIconpg__14ZSI::before, .countryFlag-module_flagIconph__2BXt0::before, .countryFlag-module_flagIconpk__TM426::before, .countryFlag-module_flagIconpl__29qbl::before, .countryFlag-module_flagIconpm__1XrZ2::before, .countryFlag-module_flagIconpn__1J6OT::before, .countryFlag-module_flagIconpr__AsLRI::before, .countryFlag-module_flagIconps__3ONiM::before, .countryFlag-module_flagIconpt___mRNL::before, .countryFlag-module_flagIconpw__1XT5-::before, .countryFlag-module_flagIconpy__2qZVa::before, .countryFlag-module_flagIconqa__3PGYx::before, .countryFlag-module_flagIconre__2qHFa::before, .countryFlag-module_flagIconro__YwrNq::before, .countryFlag-module_flagIconrs__1AUas::before, .countryFlag-module_flagIconru__3qqPM::before, .countryFlag-module_flagIconrw__3up2x::before, .countryFlag-module_flagIconsa__1QWu0::before, .countryFlag-module_flagIconsb__3xK3g::before, .countryFlag-module_flagIconsc__S4E8D::before, .countryFlag-module_flagIconsd__5DIG9::before, .countryFlag-module_flagIconse__3kNqh::before, .countryFlag-module_flagIconsg__3CsSw::before, .countryFlag-module_flagIconsh__29yGE::before, .countryFlag-module_flagIconsi__4oxkh::before, .countryFlag-module_flagIconsj__2p2Bs::before, .countryFlag-module_flagIconsk__1U5Cq::before, .countryFlag-module_flagIconsl__1n9J4::before, .countryFlag-module_flagIconsm__3jh8_::before, .countryFlag-module_flagIconsn__3bTt-::before, .countryFlag-module_flagIconso__1_UaX::before, .countryFlag-module_flagIconsr__3lF3G::before, .countryFlag-module_flagIconss__19t2a::before, .countryFlag-module_flagIconst__WUm1s::before, .countryFlag-module_flagIconsv__BpIvG::before, .countryFlag-module_flagIconsx__asgUs::before, .countryFlag-module_flagIconsy__3vxYr::before, .countryFlag-module_flagIconsz__17cYW::before, .countryFlag-module_flagIcontc__2UV3z::before, .countryFlag-module_flagIcontd__2BIP_::before, .countryFlag-module_flagIcontf__2a1ka::before, .countryFlag-module_flagIcontg__2RNeb::before, .countryFlag-module_flagIconth__11pc9::before, .countryFlag-module_flagIcontj__3J0Al::before, .countryFlag-module_flagIcontk__1eCE0::before, .countryFlag-module_flagIcontl__BGqYV::before, .countryFlag-module_flagIcontm__2VwXV::before, .countryFlag-module_flagIcontn__WJlvx::before, .countryFlag-module_flagIconto__2mffn::before, .countryFlag-module_flagIcontr__1EIBo::before, .countryFlag-module_flagIcontt__3Nchf::before, .countryFlag-module_flagIcontv__v99rK::before, .countryFlag-module_flagIcontw__PhgDr::before, .countryFlag-module_flagIcontz__jgPdL::before, .countryFlag-module_flagIconua___77cP::before, .countryFlag-module_flagIconug__2eo9K::before, .countryFlag-module_flagIconum__24mh7::before, .countryFlag-module_flagIconus__GqGRS::before, .countryFlag-module_flagIconuy__2C6MB::before, .countryFlag-module_flagIconuz__3E8jN::before, .countryFlag-module_flagIconva__3NlAi::before, .countryFlag-module_flagIconvc__3bLDE::before, .countryFlag-module_flagIconve__1tK4L::before, .countryFlag-module_flagIconvg__1hPzt::before, .countryFlag-module_flagIconvi__1QNn4::before, .countryFlag-module_flagIconvn__zAq2v::before, .countryFlag-module_flagIconvu__3WTZh::before, .countryFlag-module_flagIconwf__16TuL::before, .countryFlag-module_flagIconws__1dn2G::before, .countryFlag-module_flagIconye__eVZ-A::before, .countryFlag-module_flagIconyt__1B1Lh::before, .countryFlag-module_flagIconza__2iCGN::before, .countryFlag-module_flagIconzm__3NPDr::before, .countryFlag-module_flagIconzw__ktfF6::before, .countryFlag-module_flagIcones-ct__3L17Q::before, .countryFlag-module_flagIconeu__3NOop::before, .countryFlag-module_flagIcongb-eng__26Mmz::before, .countryFlag-module_flagIcongb-nir__E8oMa::before, .countryFlag-module_flagIcongb-sct__149wz::before, .countryFlag-module_flagIcongb-wls__3UEMS::before, .countryFlag-module_flagIconun__2_NwH::before, .countryFlag-module_flagIconxk__1l6pZ::before {\n    content: '\\A0'; }\n\n.countryFlag-module_flagIconad__3gWvk {\n  background-image: url(./flags/ad.svg); }\n\n.countryFlag-module_flagIconae__64emT {\n  background-image: url(./flags/ae.svg); }\n\n.countryFlag-module_flagIconaf__nUQe0 {\n  background-image: url(./flags/af.svg); }\n\n.countryFlag-module_flagIconag__3lg99 {\n  background-image: url(./flags/ag.svg); }\n\n.countryFlag-module_flagIconai__32vuE {\n  background-image: url(./flags/ai.svg); }\n\n.countryFlag-module_flagIconal__39GQ7 {\n  background-image: url(./flags/al.svg); }\n\n.countryFlag-module_flagIconam__3VufO {\n  background-image: url(./flags/am.svg); }\n\n.countryFlag-module_flagIconao__3f9bp {\n  background-image: url(./flags/ao.svg); }\n\n.countryFlag-module_flagIconaq__34pcv {\n  background-image: url(./flags/aq.svg); }\n\n.countryFlag-module_flagIconar__jJ1eL {\n  background-image: url(./flags/ar.svg); }\n\n.countryFlag-module_flagIconas__3sr4G {\n  background-image: url(./flags/as.svg); }\n\n.countryFlag-module_flagIconat__2_cNJ {\n  background-image: url(./flags/at.svg); }\n\n.countryFlag-module_flagIconau__3llEh {\n  background-image: url(./flags/au.svg); }\n\n.countryFlag-module_flagIconaw__1sJuO {\n  background-image: url(./flags/aw.svg); }\n\n.countryFlag-module_flagIconax__1Ju0e {\n  background-image: url(./flags/ax.svg); }\n\n.countryFlag-module_flagIconaz__393hC {\n  background-image: url(./flags/az.svg); }\n\n.countryFlag-module_flagIconba__e05Ws {\n  background-image: url(./flags/ba.svg); }\n\n.countryFlag-module_flagIconbb__HhQ3u {\n  background-image: url(./flags/bb.svg); }\n\n.countryFlag-module_flagIconbd__2DC2H {\n  background-image: url(./flags/bd.svg); }\n\n.countryFlag-module_flagIconbe__Y3DrU {\n  background-image: url(./flags/be.svg); }\n\n.countryFlag-module_flagIconbf__1MDY1 {\n  background-image: url(./flags/bf.svg); }\n\n.countryFlag-module_flagIconbg__opP_l {\n  background-image: url(./flags/bg.svg); }\n\n.countryFlag-module_flagIconbh__3GtpP {\n  background-image: url(./flags/bh.svg); }\n\n.countryFlag-module_flagIconbi__2c-uM {\n  background-image: url(./flags/bi.svg); }\n\n.countryFlag-module_flagIconbj__14HXC {\n  background-image: url(./flags/bj.svg); }\n\n.countryFlag-module_flagIconbl__2anRm {\n  background-image: url(./flags/bl.svg); }\n\n.countryFlag-module_flagIconbm__2c5Xo {\n  background-image: url(./flags/bm.svg); }\n\n.countryFlag-module_flagIconbn__3M0cc {\n  background-image: url(./flags/bn.svg); }\n\n.countryFlag-module_flagIconbo__2Cu8Z {\n  background-image: url(./flags/bo.svg); }\n\n.countryFlag-module_flagIconbq__1XfIi {\n  background-image: url(./flags/bq.svg); }\n\n.countryFlag-module_flagIconbr__LFa3x {\n  background-image: url(./flags/br.svg); }\n\n.countryFlag-module_flagIconbs__YdkO2 {\n  background-image: url(./flags/bs.svg); }\n\n.countryFlag-module_flagIconbt__btA-g {\n  background-image: url(./flags/bt.svg); }\n\n.countryFlag-module_flagIconbv__19eZP {\n  background-image: url(./flags/bv.svg); }\n\n.countryFlag-module_flagIconbw__3MCtg {\n  background-image: url(./flags/bw.svg); }\n\n.countryFlag-module_flagIconby__3D6qH {\n  background-image: url(./flags/by.svg); }\n\n.countryFlag-module_flagIconbz__1HjWQ {\n  background-image: url(./flags/bz.svg); }\n\n.countryFlag-module_flagIconca__29BfK {\n  background-image: url(./flags/ca.svg); }\n\n.countryFlag-module_flagIconcc__2zCOt {\n  background-image: url(./flags/cc.svg); }\n\n.countryFlag-module_flagIconcd__Nt-Oo {\n  background-image: url(./flags/cd.svg); }\n\n.countryFlag-module_flagIconcf__YfPu5 {\n  background-image: url(./flags/cf.svg); }\n\n.countryFlag-module_flagIconcg__1NqPA {\n  background-image: url(./flags/cg.svg); }\n\n.countryFlag-module_flagIconch__3AsV7 {\n  background-image: url(./flags/ch.svg); }\n\n.countryFlag-module_flagIconci__1tuH9 {\n  background-image: url(./flags/ci.svg); }\n\n.countryFlag-module_flagIconck__2GwbD {\n  background-image: url(./flags/ck.svg); }\n\n.countryFlag-module_flagIconcl__2e1FA {\n  background-image: url(./flags/cl.svg); }\n\n.countryFlag-module_flagIconcm__1lonI {\n  background-image: url(./flags/cm.svg); }\n\n.countryFlag-module_flagIconcn__3vi2r {\n  background-image: url(./flags/cn.svg); }\n\n.countryFlag-module_flagIconco__2oA9m {\n  background-image: url(./flags/co.svg); }\n\n.countryFlag-module_flagIconcr__1kxom {\n  background-image: url(./flags/cr.svg); }\n\n.countryFlag-module_flagIconcu__3VJKw {\n  background-image: url(./flags/cu.svg); }\n\n.countryFlag-module_flagIconcv__3l1CD {\n  background-image: url(./flags/cv.svg); }\n\n.countryFlag-module_flagIconcw__3cnMq {\n  background-image: url(./flags/cw.svg); }\n\n.countryFlag-module_flagIconcx__2Uw5G {\n  background-image: url(./flags/cx.svg); }\n\n.countryFlag-module_flagIconcy__1gJfL {\n  background-image: url(./flags/cy.svg); }\n\n.countryFlag-module_flagIconcz__2OuAN {\n  background-image: url(./flags/cz.svg); }\n\n.countryFlag-module_flagIconde__2uF8y {\n  background-image: url(./flags/de.svg); }\n\n.countryFlag-module_flagIcondj__149TO {\n  background-image: url(./flags/dj.svg); }\n\n.countryFlag-module_flagIcondk__3Mso7 {\n  background-image: url(./flags/dk.svg); }\n\n.countryFlag-module_flagIcondm__3WhYo {\n  background-image: url(./flags/dm.svg); }\n\n.countryFlag-module_flagIcondo__FoEps {\n  background-image: url(./flags/do.svg); }\n\n.countryFlag-module_flagIcondz__1l9Df {\n  background-image: url(./flags/dz.svg); }\n\n.countryFlag-module_flagIconec__C6Vm- {\n  background-image: url(./flags/ec.svg); }\n\n.countryFlag-module_flagIconee__2igqc {\n  background-image: url(./flags/ee.svg); }\n\n.countryFlag-module_flagIconeg__2MGbu {\n  background-image: url(./flags/eg.svg); }\n\n.countryFlag-module_flagIconeh__1K-OS {\n  background-image: url(./flags/eh.svg); }\n\n.countryFlag-module_flagIconer__1mEIc {\n  background-image: url(./flags/er.svg); }\n\n.countryFlag-module_flagIcones__2M0n5 {\n  background-image: url(./flags/es.svg); }\n\n.countryFlag-module_flagIconet__2JzD9 {\n  background-image: url(./flags/et.svg); }\n\n.countryFlag-module_flagIconfi__1BHFO {\n  background-image: url(./flags/fi.svg); }\n\n.countryFlag-module_flagIconfj__3auGY {\n  background-image: url(./flags/fj.svg); }\n\n.countryFlag-module_flagIconfk__24Wps {\n  background-image: url(./flags/fk.svg); }\n\n.countryFlag-module_flagIconfm__3xa3B {\n  background-image: url(./flags/fm.svg); }\n\n.countryFlag-module_flagIconfo__3gjpz {\n  background-image: url(./flags/fo.svg); }\n\n.countryFlag-module_flagIconfr__OPJjR {\n  background-image: url(./flags/fr.svg); }\n\n.countryFlag-module_flagIconga__1U7kz {\n  background-image: url(./flags/ga.svg); }\n\n.countryFlag-module_flagIcongb__1CgOa {\n  background-image: url(./flags/gb.svg); }\n\n.countryFlag-module_flagIcongd__3ohFf {\n  background-image: url(./flags/gd.svg); }\n\n.countryFlag-module_flagIconge__1zaDT {\n  background-image: url(./flags/ge.svg); }\n\n.countryFlag-module_flagIcongf__3lzk3 {\n  background-image: url(./flags/gf.svg); }\n\n.countryFlag-module_flagIcongg__2BkwD {\n  background-image: url(./flags/gg.svg); }\n\n.countryFlag-module_flagIcongh__auKbx {\n  background-image: url(./flags/gh.svg); }\n\n.countryFlag-module_flagIcongi__3vL-6 {\n  background-image: url(./flags/gi.svg); }\n\n.countryFlag-module_flagIcongl__2_MNy {\n  background-image: url(./flags/gl.svg); }\n\n.countryFlag-module_flagIcongm__2wX9i {\n  background-image: url(./flags/gm.svg); }\n\n.countryFlag-module_flagIcongn__2aH-m {\n  background-image: url(./flags/gn.svg); }\n\n.countryFlag-module_flagIcongp__38se1 {\n  background-image: url(./flags/gp.svg); }\n\n.countryFlag-module_flagIcongq__2g03G {\n  background-image: url(./flags/gq.svg); }\n\n.countryFlag-module_flagIcongr__16yX5 {\n  background-image: url(./flags/gr.svg); }\n\n.countryFlag-module_flagIcongs__37F0_ {\n  background-image: url(./flags/gs.svg); }\n\n.countryFlag-module_flagIcongt__3lVBm {\n  background-image: url(./flags/gt.svg); }\n\n.countryFlag-module_flagIcongu__1ii9A {\n  background-image: url(./flags/gu.svg); }\n\n.countryFlag-module_flagIcongw__31V9u {\n  background-image: url(./flags/gw.svg); }\n\n.countryFlag-module_flagIcongy__2Fybe {\n  background-image: url(./flags/gy.svg); }\n\n.countryFlag-module_flagIconhk__3N-7y {\n  background-image: url(./flags/hk.svg); }\n\n.countryFlag-module_flagIconhm__1wdfB {\n  background-image: url(./flags/hm.svg); }\n\n.countryFlag-module_flagIconhn__pGQaM {\n  background-image: url(./flags/hn.svg); }\n\n.countryFlag-module_flagIconhr__cXFxP {\n  background-image: url(./flags/hr.svg); }\n\n.countryFlag-module_flagIconht__ov0Lz {\n  background-image: url(./flags/ht.svg); }\n\n.countryFlag-module_flagIconhu__2Bsop {\n  background-image: url(./flags/hu.svg); }\n\n.countryFlag-module_flagIconid__1PXkE {\n  background-image: url(./flags/id.svg); }\n\n.countryFlag-module_flagIconie__2oU4z {\n  background-image: url(./flags/ie.svg); }\n\n.countryFlag-module_flagIconil__3Bpnp {\n  background-image: url(./flags/il.svg); }\n\n.countryFlag-module_flagIconim__21XlK {\n  background-image: url(./flags/im.svg); }\n\n.countryFlag-module_flagIconin__3fwCP {\n  background-image: url(./flags/in.svg); }\n\n.countryFlag-module_flagIconio__uei2q {\n  background-image: url(./flags/io.svg); }\n\n.countryFlag-module_flagIconiq__2qaSq {\n  background-image: url(./flags/iq.svg); }\n\n.countryFlag-module_flagIconir__RuI77 {\n  background-image: url(./flags/ir.svg); }\n\n.countryFlag-module_flagIconis__2d_YR {\n  background-image: url(./flags/is.svg); }\n\n.countryFlag-module_flagIconit__1tEEe {\n  background-image: url(./flags/it.svg); }\n\n.countryFlag-module_flagIconje__1hH73 {\n  background-image: url(./flags/je.svg); }\n\n.countryFlag-module_flagIconjm__2_vlK {\n  background-image: url(./flags/jm.svg); }\n\n.countryFlag-module_flagIconjo__FW5Bi {\n  background-image: url(./flags/jo.svg); }\n\n.countryFlag-module_flagIconjp__3WT-j {\n  background-image: url(./flags/jp.svg); }\n\n.countryFlag-module_flagIconke__tyH43 {\n  background-image: url(./flags/ke.svg); }\n\n.countryFlag-module_flagIconkg__3TjBh {\n  background-image: url(./flags/kg.svg); }\n\n.countryFlag-module_flagIconkh__l2375 {\n  background-image: url(./flags/kh.svg); }\n\n.countryFlag-module_flagIconki__1ThZO {\n  background-image: url(./flags/ki.svg); }\n\n.countryFlag-module_flagIconkm__HSHir {\n  background-image: url(./flags/km.svg); }\n\n.countryFlag-module_flagIconkn__3ZAIW {\n  background-image: url(./flags/kn.svg); }\n\n.countryFlag-module_flagIconkp__18Kji {\n  background-image: url(./flags/kp.svg); }\n\n.countryFlag-module_flagIconkr__1VdkQ {\n  background-image: url(./flags/kr.svg); }\n\n.countryFlag-module_flagIconkw__1MlMn {\n  background-image: url(./flags/kw.svg); }\n\n.countryFlag-module_flagIconky__1WEx2 {\n  background-image: url(./flags/ky.svg); }\n\n.countryFlag-module_flagIconkz__2xyD2 {\n  background-image: url(./flags/kz.svg); }\n\n.countryFlag-module_flagIconla__aapXu {\n  background-image: url(./flags/la.svg); }\n\n.countryFlag-module_flagIconlb__2_sSk {\n  background-image: url(./flags/lb.svg); }\n\n.countryFlag-module_flagIconlc__rC8CI {\n  background-image: url(./flags/lc.svg); }\n\n.countryFlag-module_flagIconli__3sCJ9 {\n  background-image: url(./flags/li.svg); }\n\n.countryFlag-module_flagIconlk__1Sulz {\n  background-image: url(./flags/lk.svg); }\n\n.countryFlag-module_flagIconlr__2iJH3 {\n  background-image: url(./flags/lr.svg); }\n\n.countryFlag-module_flagIconls__Ka3C- {\n  background-image: url(./flags/ls.svg); }\n\n.countryFlag-module_flagIconlt__26dXR {\n  background-image: url(./flags/lt.svg); }\n\n.countryFlag-module_flagIconlu__1tdo6 {\n  background-image: url(./flags/lu.svg); }\n\n.countryFlag-module_flagIconlv__2RQoa {\n  background-image: url(./flags/lv.svg); }\n\n.countryFlag-module_flagIconly__3OTlK {\n  background-image: url(./flags/ly.svg); }\n\n.countryFlag-module_flagIconma__2ryhY {\n  background-image: url(./flags/ma.svg); }\n\n.countryFlag-module_flagIconmc__RTycp {\n  background-image: url(./flags/mc.svg); }\n\n.countryFlag-module_flagIconmd__1M893 {\n  background-image: url(./flags/md.svg); }\n\n.countryFlag-module_flagIconme__30w0e {\n  background-image: url(./flags/me.svg); }\n\n.countryFlag-module_flagIconmf__26kxN {\n  background-image: url(./flags/mf.svg); }\n\n.countryFlag-module_flagIconmg__1JE8Y {\n  background-image: url(./flags/mg.svg); }\n\n.countryFlag-module_flagIconmh__2T01e {\n  background-image: url(./flags/mh.svg); }\n\n.countryFlag-module_flagIconmk__3ET4D {\n  background-image: url(./flags/mk.svg); }\n\n.countryFlag-module_flagIconml__24UsR {\n  background-image: url(./flags/ml.svg); }\n\n.countryFlag-module_flagIconmm__3Xehg {\n  background-image: url(./flags/mm.svg); }\n\n.countryFlag-module_flagIconmn__3WfAF {\n  background-image: url(./flags/mn.svg); }\n\n.countryFlag-module_flagIconmo__1nZuB {\n  background-image: url(./flags/mo.svg); }\n\n.countryFlag-module_flagIconmp__3LXBP {\n  background-image: url(./flags/mp.svg); }\n\n.countryFlag-module_flagIconmq__fuL89 {\n  background-image: url(./flags/mq.svg); }\n\n.countryFlag-module_flagIconmr__1jtlB {\n  background-image: url(./flags/mr.svg); }\n\n.countryFlag-module_flagIconms__2lvRd {\n  background-image: url(./flags/ms.svg); }\n\n.countryFlag-module_flagIconmt__3UzTh {\n  background-image: url(./flags/mt.svg); }\n\n.countryFlag-module_flagIconmu__24tFl {\n  background-image: url(./flags/mu.svg); }\n\n.countryFlag-module_flagIconmv__5NHcB {\n  background-image: url(./flags/mv.svg); }\n\n.countryFlag-module_flagIconmw__1ObrI {\n  background-image: url(./flags/mw.svg); }\n\n.countryFlag-module_flagIconmx__1s3hO {\n  background-image: url(./flags/mx.svg); }\n\n.countryFlag-module_flagIconmy__2erL1 {\n  background-image: url(./flags/my.svg); }\n\n.countryFlag-module_flagIconmz__NLVHQ {\n  background-image: url(./flags/mz.svg); }\n\n.countryFlag-module_flagIconna__1YokS {\n  background-image: url(./flags/na.svg); }\n\n.countryFlag-module_flagIconnc__1ALY5 {\n  background-image: url(./flags/nc.svg); }\n\n.countryFlag-module_flagIconne__1pwo0 {\n  background-image: url(./flags/ne.svg); }\n\n.countryFlag-module_flagIconnf__JGmhr {\n  background-image: url(./flags/nf.svg); }\n\n.countryFlag-module_flagIconng__2RZdf {\n  background-image: url(./flags/ng.svg); }\n\n.countryFlag-module_flagIconni__3rmAq {\n  background-image: url(./flags/ni.svg); }\n\n.countryFlag-module_flagIconnl__31zot {\n  background-image: url(./flags/nl.svg); }\n\n.countryFlag-module_flagIconno__2I0T3 {\n  background-image: url(./flags/no.svg); }\n\n.countryFlag-module_flagIconnp__1oR5w {\n  background-image: url(./flags/np.svg); }\n\n.countryFlag-module_flagIconnr__dUA-G {\n  background-image: url(./flags/nr.svg); }\n\n.countryFlag-module_flagIconnu__37vFc {\n  background-image: url(./flags/nu.svg); }\n\n.countryFlag-module_flagIconnz__nGQ9H {\n  background-image: url(./flags/nz.svg); }\n\n.countryFlag-module_flagIconom__3w0up {\n  background-image: url(./flags/om.svg); }\n\n.countryFlag-module_flagIconpa__2q21w {\n  background-image: url(./flags/pa.svg); }\n\n.countryFlag-module_flagIconpe__2g9rh {\n  background-image: url(./flags/pe.svg); }\n\n.countryFlag-module_flagIconpf__cALBR {\n  background-image: url(./flags/pf.svg); }\n\n.countryFlag-module_flagIconpg__14ZSI {\n  background-image: url(./flags/pg.svg); }\n\n.countryFlag-module_flagIconph__2BXt0 {\n  background-image: url(./flags/ph.svg); }\n\n.countryFlag-module_flagIconpk__TM426 {\n  background-image: url(./flags/pk.svg); }\n\n.countryFlag-module_flagIconpl__29qbl {\n  background-image: url(./flags/pl.svg); }\n\n.countryFlag-module_flagIconpm__1XrZ2 {\n  background-image: url(./flags/pm.svg); }\n\n.countryFlag-module_flagIconpn__1J6OT {\n  background-image: url(./flags/pn.svg); }\n\n.countryFlag-module_flagIconpr__AsLRI {\n  background-image: url(./flags/pr.svg); }\n\n.countryFlag-module_flagIconps__3ONiM {\n  background-image: url(./flags/ps.svg); }\n\n.countryFlag-module_flagIconpt___mRNL {\n  background-image: url(./flags/pt.svg); }\n\n.countryFlag-module_flagIconpw__1XT5- {\n  background-image: url(./flags/pw.svg); }\n\n.countryFlag-module_flagIconpy__2qZVa {\n  background-image: url(./flags/py.svg); }\n\n.countryFlag-module_flagIconqa__3PGYx {\n  background-image: url(./flags/qa.svg); }\n\n.countryFlag-module_flagIconre__2qHFa {\n  background-image: url(./flags/re.svg); }\n\n.countryFlag-module_flagIconro__YwrNq {\n  background-image: url(./flags/ro.svg); }\n\n.countryFlag-module_flagIconrs__1AUas {\n  background-image: url(./flags/rs.svg); }\n\n.countryFlag-module_flagIconru__3qqPM {\n  background-image: url(./flags/ru.svg); }\n\n.countryFlag-module_flagIconrw__3up2x {\n  background-image: url(./flags/rw.svg); }\n\n.countryFlag-module_flagIconsa__1QWu0 {\n  background-image: url(./flags/sa.svg); }\n\n.countryFlag-module_flagIconsb__3xK3g {\n  background-image: url(./flags/sb.svg); }\n\n.countryFlag-module_flagIconsc__S4E8D {\n  background-image: url(./flags/sc.svg); }\n\n.countryFlag-module_flagIconsd__5DIG9 {\n  background-image: url(./flags/sd.svg); }\n\n.countryFlag-module_flagIconse__3kNqh {\n  background-image: url(./flags/se.svg); }\n\n.countryFlag-module_flagIconsg__3CsSw {\n  background-image: url(./flags/sg.svg); }\n\n.countryFlag-module_flagIconsh__29yGE {\n  background-image: url(./flags/sh.svg); }\n\n.countryFlag-module_flagIconsi__4oxkh {\n  background-image: url(./flags/si.svg); }\n\n.countryFlag-module_flagIconsj__2p2Bs {\n  background-image: url(./flags/sj.svg); }\n\n.countryFlag-module_flagIconsk__1U5Cq {\n  background-image: url(./flags/sk.svg); }\n\n.countryFlag-module_flagIconsl__1n9J4 {\n  background-image: url(./flags/sl.svg); }\n\n.countryFlag-module_flagIconsm__3jh8_ {\n  background-image: url(./flags/sm.svg); }\n\n.countryFlag-module_flagIconsn__3bTt- {\n  background-image: url(./flags/sn.svg); }\n\n.countryFlag-module_flagIconso__1_UaX {\n  background-image: url(./flags/so.svg); }\n\n.countryFlag-module_flagIconsr__3lF3G {\n  background-image: url(./flags/sr.svg); }\n\n.countryFlag-module_flagIconss__19t2a {\n  background-image: url(./flags/ss.svg); }\n\n.countryFlag-module_flagIconst__WUm1s {\n  background-image: url(./flags/st.svg); }\n\n.countryFlag-module_flagIconsv__BpIvG {\n  background-image: url(./flags/sv.svg); }\n\n.countryFlag-module_flagIconsx__asgUs {\n  background-image: url(./flags/sx.svg); }\n\n.countryFlag-module_flagIconsy__3vxYr {\n  background-image: url(./flags/sy.svg); }\n\n.countryFlag-module_flagIconsz__17cYW {\n  background-image: url(./flags/sz.svg); }\n\n.countryFlag-module_flagIcontc__2UV3z {\n  background-image: url(./flags/tc.svg); }\n\n.countryFlag-module_flagIcontd__2BIP_ {\n  background-image: url(./flags/td.svg); }\n\n.countryFlag-module_flagIcontf__2a1ka {\n  background-image: url(./flags/tf.svg); }\n\n.countryFlag-module_flagIcontg__2RNeb {\n  background-image: url(./flags/tg.svg); }\n\n.countryFlag-module_flagIconth__11pc9 {\n  background-image: url(./flags/th.svg); }\n\n.countryFlag-module_flagIcontj__3J0Al {\n  background-image: url(./flags/tj.svg); }\n\n.countryFlag-module_flagIcontk__1eCE0 {\n  background-image: url(./flags/tk.svg); }\n\n.countryFlag-module_flagIcontl__BGqYV {\n  background-image: url(./flags/tl.svg); }\n\n.countryFlag-module_flagIcontm__2VwXV {\n  background-image: url(./flags/tm.svg); }\n\n.countryFlag-module_flagIcontn__WJlvx {\n  background-image: url(./flags/tn.svg); }\n\n.countryFlag-module_flagIconto__2mffn {\n  background-image: url(./flags/to.svg); }\n\n.countryFlag-module_flagIcontr__1EIBo {\n  background-image: url(./flags/tr.svg); }\n\n.countryFlag-module_flagIcontt__3Nchf {\n  background-image: url(./flags/tt.svg); }\n\n.countryFlag-module_flagIcontv__v99rK {\n  background-image: url(./flags/tv.svg); }\n\n.countryFlag-module_flagIcontw__PhgDr {\n  background-image: url(./flags/tw.svg); }\n\n.countryFlag-module_flagIcontz__jgPdL {\n  background-image: url(./flags/tz.svg); }\n\n.countryFlag-module_flagIconua___77cP {\n  background-image: url(./flags/ua.svg); }\n\n.countryFlag-module_flagIconug__2eo9K {\n  background-image: url(./flags/ug.svg); }\n\n.countryFlag-module_flagIconum__24mh7 {\n  background-image: url(./flags/um.svg); }\n\n.countryFlag-module_flagIconus__GqGRS {\n  background-image: url(./flags/us.svg); }\n\n.countryFlag-module_flagIconuy__2C6MB {\n  background-image: url(./flags/uy.svg); }\n\n.countryFlag-module_flagIconuz__3E8jN {\n  background-image: url(./flags/uz.svg); }\n\n.countryFlag-module_flagIconva__3NlAi {\n  background-image: url(./flags/va.svg); }\n\n.countryFlag-module_flagIconvc__3bLDE {\n  background-image: url(./flags/vc.svg); }\n\n.countryFlag-module_flagIconve__1tK4L {\n  background-image: url(./flags/ve.svg); }\n\n.countryFlag-module_flagIconvg__1hPzt {\n  background-image: url(./flags/vg.svg); }\n\n.countryFlag-module_flagIconvi__1QNn4 {\n  background-image: url(./flags/vi.svg); }\n\n.countryFlag-module_flagIconvn__zAq2v {\n  background-image: url(./flags/vn.svg); }\n\n.countryFlag-module_flagIconvu__3WTZh {\n  background-image: url(./flags/vu.svg); }\n\n.countryFlag-module_flagIconwf__16TuL {\n  background-image: url(./flags/wf.svg); }\n\n.countryFlag-module_flagIconws__1dn2G {\n  background-image: url(./flags/ws.svg); }\n\n.countryFlag-module_flagIconye__eVZ-A {\n  background-image: url(./flags/ye.svg); }\n\n.countryFlag-module_flagIconyt__1B1Lh {\n  background-image: url(./flags/yt.svg); }\n\n.countryFlag-module_flagIconza__2iCGN {\n  background-image: url(./flags/za.svg); }\n\n.countryFlag-module_flagIconzm__3NPDr {\n  background-image: url(./flags/zm.svg); }\n\n.countryFlag-module_flagIconzw__ktfF6 {\n  background-image: url(./flags/zw.svg); }\n\n.countryFlag-module_flagIcones-ct__3L17Q {\n  background-image: url(./flags/es-ct.svg); }\n\n.countryFlag-module_flagIconeu__3NOop {\n  background-image: url(./flags/eu.svg); }\n\n.countryFlag-module_flagIcongb-eng__26Mmz {\n  background-image: url(./flags/gb-eng.svg); }\n\n.countryFlag-module_flagIcongb-nir__E8oMa {\n  background-image: url(./flags/gb-nir.svg); }\n\n.countryFlag-module_flagIcongb-sct__149wz {\n  background-image: url(./flags/gb-sct.svg); }\n\n.countryFlag-module_flagIcongb-wls__3UEMS {\n  background-image: url(./flags/gb-wls.svg); }\n\n.countryFlag-module_flagIconun__2_NwH {\n  background-image: url(./flags/un.svg); }\n\n.countryFlag-module_flagIconxk__1l6pZ {\n  background-image: url(./flags/xk.svg); }\n\n.countryFlag-module_countryPrefix__1N6d5 {\n  margin-left: 1em; }\n";
var styles = {"flagIconad":"countryFlag-module_flagIconad__3gWvk","flagIconae":"countryFlag-module_flagIconae__64emT","flagIconaf":"countryFlag-module_flagIconaf__nUQe0","flagIconag":"countryFlag-module_flagIconag__3lg99","flagIconai":"countryFlag-module_flagIconai__32vuE","flagIconal":"countryFlag-module_flagIconal__39GQ7","flagIconam":"countryFlag-module_flagIconam__3VufO","flagIconao":"countryFlag-module_flagIconao__3f9bp","flagIconaq":"countryFlag-module_flagIconaq__34pcv","flagIconar":"countryFlag-module_flagIconar__jJ1eL","flagIconas":"countryFlag-module_flagIconas__3sr4G","flagIconat":"countryFlag-module_flagIconat__2_cNJ","flagIconau":"countryFlag-module_flagIconau__3llEh","flagIconaw":"countryFlag-module_flagIconaw__1sJuO","flagIconax":"countryFlag-module_flagIconax__1Ju0e","flagIconaz":"countryFlag-module_flagIconaz__393hC","flagIconba":"countryFlag-module_flagIconba__e05Ws","flagIconbb":"countryFlag-module_flagIconbb__HhQ3u","flagIconbd":"countryFlag-module_flagIconbd__2DC2H","flagIconbe":"countryFlag-module_flagIconbe__Y3DrU","flagIconbf":"countryFlag-module_flagIconbf__1MDY1","flagIconbg":"countryFlag-module_flagIconbg__opP_l","flagIconbh":"countryFlag-module_flagIconbh__3GtpP","flagIconbi":"countryFlag-module_flagIconbi__2c-uM","flagIconbj":"countryFlag-module_flagIconbj__14HXC","flagIconbl":"countryFlag-module_flagIconbl__2anRm","flagIconbm":"countryFlag-module_flagIconbm__2c5Xo","flagIconbn":"countryFlag-module_flagIconbn__3M0cc","flagIconbo":"countryFlag-module_flagIconbo__2Cu8Z","flagIconbq":"countryFlag-module_flagIconbq__1XfIi","flagIconbr":"countryFlag-module_flagIconbr__LFa3x","flagIconbs":"countryFlag-module_flagIconbs__YdkO2","flagIconbt":"countryFlag-module_flagIconbt__btA-g","flagIconbv":"countryFlag-module_flagIconbv__19eZP","flagIconbw":"countryFlag-module_flagIconbw__3MCtg","flagIconby":"countryFlag-module_flagIconby__3D6qH","flagIconbz":"countryFlag-module_flagIconbz__1HjWQ","flagIconca":"countryFlag-module_flagIconca__29BfK","flagIconcc":"countryFlag-module_flagIconcc__2zCOt","flagIconcd":"countryFlag-module_flagIconcd__Nt-Oo","flagIconcf":"countryFlag-module_flagIconcf__YfPu5","flagIconcg":"countryFlag-module_flagIconcg__1NqPA","flagIconch":"countryFlag-module_flagIconch__3AsV7","flagIconci":"countryFlag-module_flagIconci__1tuH9","flagIconck":"countryFlag-module_flagIconck__2GwbD","flagIconcl":"countryFlag-module_flagIconcl__2e1FA","flagIconcm":"countryFlag-module_flagIconcm__1lonI","flagIconcn":"countryFlag-module_flagIconcn__3vi2r","flagIconco":"countryFlag-module_flagIconco__2oA9m","flagIconcr":"countryFlag-module_flagIconcr__1kxom","flagIconcu":"countryFlag-module_flagIconcu__3VJKw","flagIconcv":"countryFlag-module_flagIconcv__3l1CD","flagIconcw":"countryFlag-module_flagIconcw__3cnMq","flagIconcx":"countryFlag-module_flagIconcx__2Uw5G","flagIconcy":"countryFlag-module_flagIconcy__1gJfL","flagIconcz":"countryFlag-module_flagIconcz__2OuAN","flagIconde":"countryFlag-module_flagIconde__2uF8y","flagIcondj":"countryFlag-module_flagIcondj__149TO","flagIcondk":"countryFlag-module_flagIcondk__3Mso7","flagIcondm":"countryFlag-module_flagIcondm__3WhYo","flagIcondo":"countryFlag-module_flagIcondo__FoEps","flagIcondz":"countryFlag-module_flagIcondz__1l9Df","flagIconec":"countryFlag-module_flagIconec__C6Vm-","flagIconee":"countryFlag-module_flagIconee__2igqc","flagIconeg":"countryFlag-module_flagIconeg__2MGbu","flagIconeh":"countryFlag-module_flagIconeh__1K-OS","flagIconer":"countryFlag-module_flagIconer__1mEIc","flagIcones":"countryFlag-module_flagIcones__2M0n5","flagIconet":"countryFlag-module_flagIconet__2JzD9","flagIconfi":"countryFlag-module_flagIconfi__1BHFO","flagIconfj":"countryFlag-module_flagIconfj__3auGY","flagIconfk":"countryFlag-module_flagIconfk__24Wps","flagIconfm":"countryFlag-module_flagIconfm__3xa3B","flagIconfo":"countryFlag-module_flagIconfo__3gjpz","flagIconfr":"countryFlag-module_flagIconfr__OPJjR","flagIconga":"countryFlag-module_flagIconga__1U7kz","flagIcongb":"countryFlag-module_flagIcongb__1CgOa","flagIcongd":"countryFlag-module_flagIcongd__3ohFf","flagIconge":"countryFlag-module_flagIconge__1zaDT","flagIcongf":"countryFlag-module_flagIcongf__3lzk3","flagIcongg":"countryFlag-module_flagIcongg__2BkwD","flagIcongh":"countryFlag-module_flagIcongh__auKbx","flagIcongi":"countryFlag-module_flagIcongi__3vL-6","flagIcongl":"countryFlag-module_flagIcongl__2_MNy","flagIcongm":"countryFlag-module_flagIcongm__2wX9i","flagIcongn":"countryFlag-module_flagIcongn__2aH-m","flagIcongp":"countryFlag-module_flagIcongp__38se1","flagIcongq":"countryFlag-module_flagIcongq__2g03G","flagIcongr":"countryFlag-module_flagIcongr__16yX5","flagIcongs":"countryFlag-module_flagIcongs__37F0_","flagIcongt":"countryFlag-module_flagIcongt__3lVBm","flagIcongu":"countryFlag-module_flagIcongu__1ii9A","flagIcongw":"countryFlag-module_flagIcongw__31V9u","flagIcongy":"countryFlag-module_flagIcongy__2Fybe","flagIconhk":"countryFlag-module_flagIconhk__3N-7y","flagIconhm":"countryFlag-module_flagIconhm__1wdfB","flagIconhn":"countryFlag-module_flagIconhn__pGQaM","flagIconhr":"countryFlag-module_flagIconhr__cXFxP","flagIconht":"countryFlag-module_flagIconht__ov0Lz","flagIconhu":"countryFlag-module_flagIconhu__2Bsop","flagIconid":"countryFlag-module_flagIconid__1PXkE","flagIconie":"countryFlag-module_flagIconie__2oU4z","flagIconil":"countryFlag-module_flagIconil__3Bpnp","flagIconim":"countryFlag-module_flagIconim__21XlK","flagIconin":"countryFlag-module_flagIconin__3fwCP","flagIconio":"countryFlag-module_flagIconio__uei2q","flagIconiq":"countryFlag-module_flagIconiq__2qaSq","flagIconir":"countryFlag-module_flagIconir__RuI77","flagIconis":"countryFlag-module_flagIconis__2d_YR","flagIconit":"countryFlag-module_flagIconit__1tEEe","flagIconje":"countryFlag-module_flagIconje__1hH73","flagIconjm":"countryFlag-module_flagIconjm__2_vlK","flagIconjo":"countryFlag-module_flagIconjo__FW5Bi","flagIconjp":"countryFlag-module_flagIconjp__3WT-j","flagIconke":"countryFlag-module_flagIconke__tyH43","flagIconkg":"countryFlag-module_flagIconkg__3TjBh","flagIconkh":"countryFlag-module_flagIconkh__l2375","flagIconki":"countryFlag-module_flagIconki__1ThZO","flagIconkm":"countryFlag-module_flagIconkm__HSHir","flagIconkn":"countryFlag-module_flagIconkn__3ZAIW","flagIconkp":"countryFlag-module_flagIconkp__18Kji","flagIconkr":"countryFlag-module_flagIconkr__1VdkQ","flagIconkw":"countryFlag-module_flagIconkw__1MlMn","flagIconky":"countryFlag-module_flagIconky__1WEx2","flagIconkz":"countryFlag-module_flagIconkz__2xyD2","flagIconla":"countryFlag-module_flagIconla__aapXu","flagIconlb":"countryFlag-module_flagIconlb__2_sSk","flagIconlc":"countryFlag-module_flagIconlc__rC8CI","flagIconli":"countryFlag-module_flagIconli__3sCJ9","flagIconlk":"countryFlag-module_flagIconlk__1Sulz","flagIconlr":"countryFlag-module_flagIconlr__2iJH3","flagIconls":"countryFlag-module_flagIconls__Ka3C-","flagIconlt":"countryFlag-module_flagIconlt__26dXR","flagIconlu":"countryFlag-module_flagIconlu__1tdo6","flagIconlv":"countryFlag-module_flagIconlv__2RQoa","flagIconly":"countryFlag-module_flagIconly__3OTlK","flagIconma":"countryFlag-module_flagIconma__2ryhY","flagIconmc":"countryFlag-module_flagIconmc__RTycp","flagIconmd":"countryFlag-module_flagIconmd__1M893","flagIconme":"countryFlag-module_flagIconme__30w0e","flagIconmf":"countryFlag-module_flagIconmf__26kxN","flagIconmg":"countryFlag-module_flagIconmg__1JE8Y","flagIconmh":"countryFlag-module_flagIconmh__2T01e","flagIconmk":"countryFlag-module_flagIconmk__3ET4D","flagIconml":"countryFlag-module_flagIconml__24UsR","flagIconmm":"countryFlag-module_flagIconmm__3Xehg","flagIconmn":"countryFlag-module_flagIconmn__3WfAF","flagIconmo":"countryFlag-module_flagIconmo__1nZuB","flagIconmp":"countryFlag-module_flagIconmp__3LXBP","flagIconmq":"countryFlag-module_flagIconmq__fuL89","flagIconmr":"countryFlag-module_flagIconmr__1jtlB","flagIconms":"countryFlag-module_flagIconms__2lvRd","flagIconmt":"countryFlag-module_flagIconmt__3UzTh","flagIconmu":"countryFlag-module_flagIconmu__24tFl","flagIconmv":"countryFlag-module_flagIconmv__5NHcB","flagIconmw":"countryFlag-module_flagIconmw__1ObrI","flagIconmx":"countryFlag-module_flagIconmx__1s3hO","flagIconmy":"countryFlag-module_flagIconmy__2erL1","flagIconmz":"countryFlag-module_flagIconmz__NLVHQ","flagIconna":"countryFlag-module_flagIconna__1YokS","flagIconnc":"countryFlag-module_flagIconnc__1ALY5","flagIconne":"countryFlag-module_flagIconne__1pwo0","flagIconnf":"countryFlag-module_flagIconnf__JGmhr","flagIconng":"countryFlag-module_flagIconng__2RZdf","flagIconni":"countryFlag-module_flagIconni__3rmAq","flagIconnl":"countryFlag-module_flagIconnl__31zot","flagIconno":"countryFlag-module_flagIconno__2I0T3","flagIconnp":"countryFlag-module_flagIconnp__1oR5w","flagIconnr":"countryFlag-module_flagIconnr__dUA-G","flagIconnu":"countryFlag-module_flagIconnu__37vFc","flagIconnz":"countryFlag-module_flagIconnz__nGQ9H","flagIconom":"countryFlag-module_flagIconom__3w0up","flagIconpa":"countryFlag-module_flagIconpa__2q21w","flagIconpe":"countryFlag-module_flagIconpe__2g9rh","flagIconpf":"countryFlag-module_flagIconpf__cALBR","flagIconpg":"countryFlag-module_flagIconpg__14ZSI","flagIconph":"countryFlag-module_flagIconph__2BXt0","flagIconpk":"countryFlag-module_flagIconpk__TM426","flagIconpl":"countryFlag-module_flagIconpl__29qbl","flagIconpm":"countryFlag-module_flagIconpm__1XrZ2","flagIconpn":"countryFlag-module_flagIconpn__1J6OT","flagIconpr":"countryFlag-module_flagIconpr__AsLRI","flagIconps":"countryFlag-module_flagIconps__3ONiM","flagIconpt":"countryFlag-module_flagIconpt___mRNL","flagIconpw":"countryFlag-module_flagIconpw__1XT5-","flagIconpy":"countryFlag-module_flagIconpy__2qZVa","flagIconqa":"countryFlag-module_flagIconqa__3PGYx","flagIconre":"countryFlag-module_flagIconre__2qHFa","flagIconro":"countryFlag-module_flagIconro__YwrNq","flagIconrs":"countryFlag-module_flagIconrs__1AUas","flagIconru":"countryFlag-module_flagIconru__3qqPM","flagIconrw":"countryFlag-module_flagIconrw__3up2x","flagIconsa":"countryFlag-module_flagIconsa__1QWu0","flagIconsb":"countryFlag-module_flagIconsb__3xK3g","flagIconsc":"countryFlag-module_flagIconsc__S4E8D","flagIconsd":"countryFlag-module_flagIconsd__5DIG9","flagIconse":"countryFlag-module_flagIconse__3kNqh","flagIconsg":"countryFlag-module_flagIconsg__3CsSw","flagIconsh":"countryFlag-module_flagIconsh__29yGE","flagIconsi":"countryFlag-module_flagIconsi__4oxkh","flagIconsj":"countryFlag-module_flagIconsj__2p2Bs","flagIconsk":"countryFlag-module_flagIconsk__1U5Cq","flagIconsl":"countryFlag-module_flagIconsl__1n9J4","flagIconsm":"countryFlag-module_flagIconsm__3jh8_","flagIconsn":"countryFlag-module_flagIconsn__3bTt-","flagIconso":"countryFlag-module_flagIconso__1_UaX","flagIconsr":"countryFlag-module_flagIconsr__3lF3G","flagIconss":"countryFlag-module_flagIconss__19t2a","flagIconst":"countryFlag-module_flagIconst__WUm1s","flagIconsv":"countryFlag-module_flagIconsv__BpIvG","flagIconsx":"countryFlag-module_flagIconsx__asgUs","flagIconsy":"countryFlag-module_flagIconsy__3vxYr","flagIconsz":"countryFlag-module_flagIconsz__17cYW","flagIcontc":"countryFlag-module_flagIcontc__2UV3z","flagIcontd":"countryFlag-module_flagIcontd__2BIP_","flagIcontf":"countryFlag-module_flagIcontf__2a1ka","flagIcontg":"countryFlag-module_flagIcontg__2RNeb","flagIconth":"countryFlag-module_flagIconth__11pc9","flagIcontj":"countryFlag-module_flagIcontj__3J0Al","flagIcontk":"countryFlag-module_flagIcontk__1eCE0","flagIcontl":"countryFlag-module_flagIcontl__BGqYV","flagIcontm":"countryFlag-module_flagIcontm__2VwXV","flagIcontn":"countryFlag-module_flagIcontn__WJlvx","flagIconto":"countryFlag-module_flagIconto__2mffn","flagIcontr":"countryFlag-module_flagIcontr__1EIBo","flagIcontt":"countryFlag-module_flagIcontt__3Nchf","flagIcontv":"countryFlag-module_flagIcontv__v99rK","flagIcontw":"countryFlag-module_flagIcontw__PhgDr","flagIcontz":"countryFlag-module_flagIcontz__jgPdL","flagIconua":"countryFlag-module_flagIconua___77cP","flagIconug":"countryFlag-module_flagIconug__2eo9K","flagIconum":"countryFlag-module_flagIconum__24mh7","flagIconus":"countryFlag-module_flagIconus__GqGRS","flagIconuy":"countryFlag-module_flagIconuy__2C6MB","flagIconuz":"countryFlag-module_flagIconuz__3E8jN","flagIconva":"countryFlag-module_flagIconva__3NlAi","flagIconvc":"countryFlag-module_flagIconvc__3bLDE","flagIconve":"countryFlag-module_flagIconve__1tK4L","flagIconvg":"countryFlag-module_flagIconvg__1hPzt","flagIconvi":"countryFlag-module_flagIconvi__1QNn4","flagIconvn":"countryFlag-module_flagIconvn__zAq2v","flagIconvu":"countryFlag-module_flagIconvu__3WTZh","flagIconwf":"countryFlag-module_flagIconwf__16TuL","flagIconws":"countryFlag-module_flagIconws__1dn2G","flagIconye":"countryFlag-module_flagIconye__eVZ-A","flagIconyt":"countryFlag-module_flagIconyt__1B1Lh","flagIconza":"countryFlag-module_flagIconza__2iCGN","flagIconzm":"countryFlag-module_flagIconzm__3NPDr","flagIconzw":"countryFlag-module_flagIconzw__ktfF6","flagIcones-ct":"countryFlag-module_flagIcones-ct__3L17Q","flagIconeu":"countryFlag-module_flagIconeu__3NOop","flagIcongb-eng":"countryFlag-module_flagIcongb-eng__26Mmz","flagIcongb-nir":"countryFlag-module_flagIcongb-nir__E8oMa","flagIcongb-sct":"countryFlag-module_flagIcongb-sct__149wz","flagIcongb-wls":"countryFlag-module_flagIcongb-wls__3UEMS","flagIconun":"countryFlag-module_flagIconun__2_NwH","flagIconxk":"countryFlag-module_flagIconxk__1l6pZ","countryPrefix":"countryFlag-module_countryPrefix__1N6d5"};
styleInject(css);

var CountryFlag = function CountryFlag(_ref) {
  var country = _ref.country,
      number = _ref.number;
  return react.createElement("span", null, react.createElement("span", {
    className: styles["flagIcon".concat(country.toLowerCase())]
  }), number && react.createElement("span", {
    className: styles.countryPrefix
  }, "+", number));
};

CountryFlag.defaultProps = {
  number: false
};

export default CountryFlag;
