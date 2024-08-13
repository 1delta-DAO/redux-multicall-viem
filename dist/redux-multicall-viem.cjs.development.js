'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var viem = require('viem');
var toolkit = require('@reduxjs/toolkit');

var DEFAULT_BLOCKS_PER_FETCH = 1;
var DEFAULT_CALL_GAS_REQUIRED = 1000000;
var DEFAULT_CHUNK_GAS_REQUIRED = 200000;
var CHUNK_GAS_LIMIT = 100000000;
var CONSERVATIVE_BLOCK_GAS_LIMIT = 10000000; // conservative, hard-coded estimate of the current block gas limit
// Consts for hooks
var INVALID_RESULT = {
  valid: false,
  blockNumber: undefined,
  data: undefined
};
var NEVER_RELOAD = {
  blocksPerFetch: Infinity
};
var INVALID_CALL_STATE = {
  valid: false,
  result: undefined,
  loading: false,
  syncing: false,
  error: false
};
var LOADING_CALL_STATE = {
  valid: true,
  result: undefined,
  loading: true,
  syncing: true,
  error: false
};

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

function toCallKey(call) {
  var key = call.address + "-" + call.callData;
  if (call.gasRequired) {
    if (!Number.isSafeInteger(call.gasRequired)) {
      throw new Error("Invalid number: " + call.gasRequired);
    }
    key += "-" + call.gasRequired;
  }
  return key;
}
function parseCallKey(callKey) {
  var pcs = callKey.split('-');
  if (![2, 3].includes(pcs.length)) {
    throw new Error("Invalid call key: " + callKey);
  }
  return _extends({
    address: pcs[0],
    callData: pcs[1]
  }, pcs[2] ? {
    gasRequired: Number.parseInt(pcs[2])
  } : {});
}
function callsToCallKeys(calls) {
  var _calls$filter$map$sor, _calls$filter;
  return (_calls$filter$map$sor = calls == null || (_calls$filter = calls.filter(function (c) {
    return Boolean(c);
  })) == null || (_calls$filter = _calls$filter.map(toCallKey)) == null ? void 0 : _calls$filter.sort()) != null ? _calls$filter$map$sor : [];
}
function callKeysToCalls(callKeys) {
  if (!(callKeys != null && callKeys.length)) return null;
  return callKeys.map(function (key) {
    return parseCallKey(key);
  });
}

// Converts CallResult[] to CallState[], only updating if call states have changed.
// Ensures that CallState results remain referentially stable when unchanged, preventing
// spurious re-renders which would otherwise occur because mapping always creates a new object.
function useCallStates(results, contractInterface, fragment, latestBlockNumber) {
  // Avoid refreshing the results with every changing block number (eg latestBlockNumber).
  // Instead, only refresh the results if they need to be synced - if there is a result which is stale, for which blockNumber < latestBlockNumber.
  var syncingBlockNumber = React.useMemo(function () {
    var lowestBlockNumber = results.reduce(function (memo, result) {
      return result.blockNumber ? Math.min(memo != null ? memo : result.blockNumber, result.blockNumber) : memo;
    }, undefined);
    return Math.max(lowestBlockNumber != null ? lowestBlockNumber : 0, latestBlockNumber != null ? latestBlockNumber : 0);
  }, [results, latestBlockNumber]);
  return React.useMemo(function () {
    return results.map(function (result, i) {
      var resultFragment = typeof fragment === 'function' ? fragment(i) : fragment;
      return toCallState(result, contractInterface, resultFragment, syncingBlockNumber);
    });
  }, [contractInterface, fragment, results, syncingBlockNumber]);
}
function toCallState(callResult, contractInterface, fragment, syncingBlockNumber) {
  if (!callResult || !callResult.valid) {
    return INVALID_CALL_STATE;
  }
  var data = callResult.data,
    blockNumber = callResult.blockNumber;
  if (!blockNumber || !contractInterface || !fragment || !syncingBlockNumber) {
    return LOADING_CALL_STATE;
  }
  var success = data && data.length > 2;
  var syncing = blockNumber < syncingBlockNumber;
  var result = undefined;
  if (success && data) {
    try {
      result = viem.decodeFunctionResult({
        abi: contractInterface,
        functionName: fragment,
        data: data
      });
    } catch (error) {
      console.debug('Result data parsing failed', fragment, data);
      return {
        valid: true,
        loading: false,
        error: true,
        syncing: syncing,
        result: result
      };
    }
  }
  return {
    valid: true,
    loading: false,
    syncing: syncing,
    result: result,
    error: !success
  };
}

function isMethodArg(x) {
  return x === null || x === undefined ? false : typeof BigInt(x) === 'bigint' || ['string', 'number'].indexOf(typeof x) !== -1;
}
function isValidMethodArgs(x) {
  return x === undefined || Array.isArray(x) && x.every(function (xi) {
    return isMethodArg(xi) || Array.isArray(xi) && xi.every(isMethodArg);
  });
}

// the lowest level call for subscribing to contract data
function useCallsDataSubscription(context, chainId, calls, listenerOptions) {
  var reducerPath = context.reducerPath,
    actions = context.actions;
  var callResults = reactRedux.useSelector(function (state) {
    return state[reducerPath].callResults;
  });
  var defaultListenerOptions = reactRedux.useSelector(function (state) {
    return state[reducerPath].listenerOptions;
  });
  var dispatch = reactRedux.useDispatch();
  var serializedCallKeys = React.useMemo(function () {
    return JSON.stringify(callsToCallKeys(calls));
  }, [calls]);
  // update listeners when there is an actual change that persists for at least 100ms
  React.useEffect(function () {
    var _chainId, _ref, _listenerOptions$bloc;
    var callKeys = JSON.parse(serializedCallKeys);
    var calls = callKeysToCalls(callKeys);
    if (!chainId || !calls) return;
    var blocksPerFetchFromState = (_chainId = (defaultListenerOptions != null ? defaultListenerOptions : {})[chainId]) == null ? void 0 : _chainId.blocksPerFetch;
    var blocksPerFetchForChain = (_ref = (_listenerOptions$bloc = listenerOptions == null ? void 0 : listenerOptions.blocksPerFetch) != null ? _listenerOptions$bloc : blocksPerFetchFromState) != null ? _ref : DEFAULT_BLOCKS_PER_FETCH;
    dispatch(actions.addMulticallListeners({
      chainId: chainId,
      calls: calls,
      options: {
        blocksPerFetch: blocksPerFetchForChain
      }
    }));
    return function () {
      dispatch(actions.removeMulticallListeners({
        chainId: chainId,
        calls: calls,
        options: {
          blocksPerFetch: blocksPerFetchForChain
        }
      }));
    };
  }, [actions, chainId, dispatch, listenerOptions, serializedCallKeys, defaultListenerOptions]);
  var lastResults = React.useRef([]);
  return React.useMemo(function () {
    var isChanged = lastResults.current.length !== calls.length;
    // Construct results using a for-loop to handle sparse arrays.
    // Array.prototype.map would skip empty entries.
    var results = [];
    for (var i = 0; i < calls.length; ++i) {
      var call = calls[i];
      var result = INVALID_RESULT;
      if (chainId && call) {
        var _callResults$chainId;
        var callResult = (_callResults$chainId = callResults[chainId]) == null ? void 0 : _callResults$chainId[toCallKey(call)];
        result = {
          valid: true,
          data: callResult != null && callResult.data && callResult.data !== '0x' ? callResult.data : undefined,
          blockNumber: callResult == null ? void 0 : callResult.blockNumber
        };
      }
      isChanged = isChanged || !areCallResultsEqual(result, lastResults.current[i]);
      results.push(result);
    }
    // Force the results to be referentially stable if they have not changed.
    // This is necessary because *all* callResults are passed as deps when initially memoizing the results.
    if (isChanged) {
      lastResults.current = results;
    }
    return lastResults.current;
  }, [callResults, calls, chainId]);
}
function areCallResultsEqual(a, b) {
  return a.valid === b.valid && a.data === b.data && a.blockNumber === b.blockNumber;
}
// Similar to useCallsDataSubscription above but for subscribing to
// calls to multiple chains at once
function useMultichainCallsDataSubscription(context, chainToCalls, listenerOptions) {
  var reducerPath = context.reducerPath,
    actions = context.actions;
  var callResults = reactRedux.useSelector(function (state) {
    return state[reducerPath].callResults;
  });
  var defaultListenerOptions = reactRedux.useSelector(function (state) {
    return state[reducerPath].listenerOptions;
  });
  var dispatch = reactRedux.useDispatch();
  var serializedCallKeys = React.useMemo(function () {
    var sortedChainIds = getChainIds(chainToCalls).sort();
    var chainCallKeysTuple = sortedChainIds.map(function (chainId) {
      var calls = chainToCalls[chainId];
      var callKeys = callsToCallKeys(calls);
      // Note, using a tuple to ensure consistent order when serialized
      return [chainId, callKeys];
    });
    return JSON.stringify(chainCallKeysTuple);
  }, [chainToCalls]);
  React.useEffect(function () {
    var chainCallKeysTuples = JSON.parse(serializedCallKeys);
    if (!(chainCallKeysTuples != null && chainCallKeysTuples.length)) return;
    reactRedux.batch(function () {
      for (var _iterator = _createForOfIteratorHelperLoose(chainCallKeysTuples), _step; !(_step = _iterator()).done;) {
        var _chainId2, _ref2, _listenerOptions$bloc2;
        var _step$value = _step.value,
          chainId = _step$value[0],
          callKeys = _step$value[1];
        var calls = callKeysToCalls(callKeys);
        if (!(calls != null && calls.length)) continue;
        var blocksPerFetchFromState = (_chainId2 = (defaultListenerOptions != null ? defaultListenerOptions : {})[chainId]) == null ? void 0 : _chainId2.blocksPerFetch;
        var blocksPerFetchForChain = (_ref2 = (_listenerOptions$bloc2 = listenerOptions == null ? void 0 : listenerOptions.blocksPerFetch) != null ? _listenerOptions$bloc2 : blocksPerFetchFromState) != null ? _ref2 : DEFAULT_BLOCKS_PER_FETCH;
        dispatch(actions.addMulticallListeners({
          chainId: chainId,
          calls: calls,
          options: {
            blocksPerFetch: blocksPerFetchForChain
          }
        }));
      }
    });
    return function () {
      reactRedux.batch(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(chainCallKeysTuples), _step2; !(_step2 = _iterator2()).done;) {
          var _chainId3, _ref3, _listenerOptions$bloc3;
          var _step2$value = _step2.value,
            chainId = _step2$value[0],
            callKeys = _step2$value[1];
          var calls = callKeysToCalls(callKeys);
          if (!(calls != null && calls.length)) continue;
          var blocksPerFetchFromState = (_chainId3 = (defaultListenerOptions != null ? defaultListenerOptions : {})[chainId]) == null ? void 0 : _chainId3.blocksPerFetch;
          var blocksPerFetchForChain = (_ref3 = (_listenerOptions$bloc3 = listenerOptions == null ? void 0 : listenerOptions.blocksPerFetch) != null ? _listenerOptions$bloc3 : blocksPerFetchFromState) != null ? _ref3 : DEFAULT_BLOCKS_PER_FETCH;
          dispatch(actions.removeMulticallListeners({
            chainId: chainId,
            calls: calls,
            options: {
              blocksPerFetch: blocksPerFetchForChain
            }
          }));
        }
      });
    };
  }, [actions, dispatch, listenerOptions, serializedCallKeys, defaultListenerOptions]);
  return React.useMemo(function () {
    return getChainIds(chainToCalls).reduce(function (result, chainId) {
      var calls = chainToCalls[chainId];
      result[chainId] = calls.map(function (call) {
        var _callResults$chainId2;
        if (!chainId || !call) return INVALID_RESULT;
        var result = (_callResults$chainId2 = callResults[chainId]) == null ? void 0 : _callResults$chainId2[toCallKey(call)];
        var data = result != null && result.data && result.data !== '0x' ? result.data : undefined;
        return {
          valid: true,
          data: data,
          blockNumber: result == null ? void 0 : result.blockNumber
        };
      });
      return result;
    }, {});
  }, [callResults, chainToCalls]);
}
// formats many calls to a single function on a single contract, with the function name and inputs specified
function useSingleContractMultipleData(context, chainId, latestBlockNumber, contract, methodName, callInputs, options) {
  var _ref4 = options != null ? options : {},
    gasRequired = _ref4.gasRequired;
  // Create ethers function fragment
  var fragment = React.useMemo(function () {
    var _getAbiItem;
    return contract && ((_getAbiItem = viem.getAbiItem({
      abi: contract.abi,
      name: methodName
    })) == null ? void 0 : _getAbiItem.name);
  }, [contract, methodName]);
  // Get encoded call data. Note can't use useCallData below b.c. this is  for a list of CallInputs
  var callDatas = React.useMemo(function () {
    if (!contract || !fragment) return [];
    return callInputs.map(function (callInput) {
      return isValidMethodArgs(callInput) ? viem.encodeFunctionData({
        abi: contract.abi,
        functionName: fragment,
        args: callInput
      }) : undefined;
    });
  }, [callInputs, contract, fragment]);
  // Create call objects
  var calls = React.useMemo(function () {
    if (!contract) return [];
    return callDatas.map(function (callData) {
      if (!callData) return undefined;
      return {
        address: contract.address,
        callData: callData,
        gasRequired: gasRequired
      };
    });
  }, [contract, callDatas, gasRequired]);
  // Subscribe to call data
  var results = useCallsDataSubscription(context, chainId, calls, options);
  return useCallStates(results, contract == null ? void 0 : contract.abi, fragment, latestBlockNumber);
}
function useMultipleContractSingleData(context, chainId, latestBlockNumber, addresses, contractInterface, methodName, callInputs, options) {
  var _ref5 = options != null ? options : {},
    gasRequired = _ref5.gasRequired;
  var _useCallData = useCallData(methodName, contractInterface, callInputs),
    fragment = _useCallData.fragment,
    callData = _useCallData.callData;
  // Create call objects
  var calls = React.useMemo(function () {
    if (!callData) return [];
    return addresses.map(function (address) {
      if (!address) return undefined;
      return {
        address: address,
        callData: callData,
        gasRequired: gasRequired
      };
    });
  }, [addresses, callData, gasRequired]);
  // Subscribe to call data
  var results = useCallsDataSubscription(context, chainId, calls, options);
  return useCallStates(results, contractInterface, fragment, latestBlockNumber);
}
function useSingleCallResult(context, chainId, latestBlockNumber, contract, methodName, inputs, options) {
  var _useSingleContractMul;
  var callInputs = React.useMemo(function () {
    return [inputs];
  }, [inputs]);
  return (_useSingleContractMul = useSingleContractMultipleData(context, chainId, latestBlockNumber, contract, methodName, callInputs, options)[0]) != null ? _useSingleContractMul : INVALID_CALL_STATE;
}
// formats many calls to any number of functions on a single contract, with only the calldata specified
function useSingleContractWithCallData(context, chainId, latestBlockNumber, contract, callDatas, options) {
  var _ref6 = options != null ? options : {},
    gasRequired = _ref6.gasRequired;
  // Create call objects
  var calls = React.useMemo(function () {
    if (!contract) return [];
    return callDatas.map(function (callData) {
      return {
        address: contract.address,
        callData: callData,
        gasRequired: gasRequired
      };
    });
  }, [callDatas, contract, gasRequired]);
  // Subscribe to call data
  var results = useCallsDataSubscription(context, chainId, calls, options);
  var fragment = React.useCallback(function (i) {
    var _getAbiItem2;
    return (_getAbiItem2 = viem.getAbiItem({
      abi: contract == null ? void 0 : contract.abi,
      name: callDatas[i].substring(0, 10)
    })) == null ? void 0 : _getAbiItem2.name;
  }, [callDatas, contract]);
  return useCallStates(results, contract == null ? void 0 : contract.abi, fragment, latestBlockNumber);
}
// Similar to useMultipleContractSingleData but instead of multiple contracts on one chain,
// this is for querying compatible contracts on multiple chains
function useMultiChainMultiContractSingleData(context, chainToBlockNumber, chainToAddresses, contractInterface, methodName, callInputs, options) {
  var _ref7 = options != null ? options : {},
    gasRequired = _ref7.gasRequired;
  var _useCallData2 = useCallData(methodName, contractInterface, callInputs),
    fragment = _useCallData2.fragment,
    callData = _useCallData2.callData;
  // Create call objects
  var chainToCalls = React.useMemo(function () {
    if (!callData || !chainToAddresses) return {};
    return getChainIds(chainToAddresses).reduce(function (result, chainId) {
      var addresses = chainToAddresses[chainId];
      var calls = addresses.map(function (address) {
        if (!address) return undefined;
        return {
          address: address,
          callData: callData,
          gasRequired: gasRequired
        };
      });
      result[chainId] = calls;
      return result;
    }, {});
  }, [chainToAddresses, callData, gasRequired]);
  // Subscribe to call data
  var chainIdToResults = useMultichainCallsDataSubscription(context, chainToCalls, options);
  // TODO(WEB-2097): Multichain states are not referentially stable, because they cannot use the
  // same codepath (eg useCallStates).
  return React.useMemo(function () {
    return getChainIds(chainIdToResults).reduce(function (combinedResults, chainId) {
      var latestBlockNumber = chainToBlockNumber == null ? void 0 : chainToBlockNumber[chainId];
      var results = chainIdToResults[chainId];
      combinedResults[chainId] = results.map(function (result) {
        return toCallState(result, contractInterface, fragment, latestBlockNumber);
      });
      return combinedResults;
    }, {});
  }, [fragment, contractInterface, chainIdToResults, chainToBlockNumber]);
}
// Similar to useSingleCallResult but instead of one contract on one chain,
// this is for querying a contract on multiple chains
function useMultiChainSingleContractSingleData(context, chainToBlockNumber, chainToAddress, contractInterface, methodName, callInputs, options) {
  // This hook uses the more flexible useMultiChainMultiContractSingleData internally,
  // but transforms the inputs and outputs for convenience
  var chainIdToAddresses = React.useMemo(function () {
    return getChainIds(chainToAddress).reduce(function (result, chainId) {
      result[chainId] = [chainToAddress[chainId]];
      return result;
    }, {});
  }, [chainToAddress]);
  var multiContractResults = useMultiChainMultiContractSingleData(context, chainToBlockNumber, chainIdToAddresses, contractInterface, methodName, callInputs, options);
  return React.useMemo(function () {
    return getChainIds(chainToAddress).reduce(function (result, chainId) {
      var _multiContractResults, _multiContractResults2;
      result[chainId] = (_multiContractResults = (_multiContractResults2 = multiContractResults[chainId]) == null ? void 0 : _multiContractResults2[0]) != null ? _multiContractResults : INVALID_CALL_STATE;
      return result;
    }, {});
  }, [chainToAddress, multiContractResults]);
}
function useCallData(methodName, contractInterface, callInputs) {
  // Create ethers function fragment
  var fragment = React.useMemo(function () {
    var _getAbiItem3;
    return contractInterface && ((_getAbiItem3 = viem.getAbiItem({
      abi: contractInterface,
      name: methodName
    })) == null ? void 0 : _getAbiItem3.name);
  }, [contractInterface, methodName]);
  // Get encoded call data
  var callData = React.useMemo(function () {
    return fragment && isValidMethodArgs(callInputs) ? viem.encodeFunctionData({
      abi: contractInterface,
      functionName: fragment,
      args: callInputs
    }) : undefined;
  }, [callInputs, contractInterface, fragment]);
  return {
    fragment: fragment,
    callData: callData
  };
}
function getChainIds(chainIdMap) {
  return Object.keys(chainIdMap).map(function (c) {
    return parseInt(c, 10);
  });
}

var initialState = {
  callResults: {}
};
function createMulticallSlice(reducerPath) {
  return toolkit.createSlice({
    name: reducerPath,
    initialState: initialState,
    reducers: {
      addMulticallListeners: function addMulticallListeners(state, action) {
        var _listeners$chainId;
        var _action$payload = action.payload,
          calls = _action$payload.calls,
          chainId = _action$payload.chainId,
          blocksPerFetch = _action$payload.options.blocksPerFetch;
        var listeners = state.callListeners ? state.callListeners : state.callListeners = {};
        listeners[chainId] = (_listeners$chainId = listeners[chainId]) != null ? _listeners$chainId : {};
        calls.forEach(function (call) {
          var _listeners$chainId$ca, _listeners$chainId$ca2;
          var callKey = toCallKey(call);
          listeners[chainId][callKey] = (_listeners$chainId$ca = listeners[chainId][callKey]) != null ? _listeners$chainId$ca : {};
          listeners[chainId][callKey][blocksPerFetch] = ((_listeners$chainId$ca2 = listeners[chainId][callKey][blocksPerFetch]) != null ? _listeners$chainId$ca2 : 0) + 1;
        });
      },
      removeMulticallListeners: function removeMulticallListeners(state, action) {
        var _action$payload2 = action.payload,
          calls = _action$payload2.calls,
          chainId = _action$payload2.chainId,
          blocksPerFetch = _action$payload2.options.blocksPerFetch;
        var listeners = state.callListeners ? state.callListeners : state.callListeners = {};
        if (!listeners[chainId]) return;
        calls.forEach(function (call) {
          var callKey = toCallKey(call);
          if (!listeners[chainId][callKey]) return;
          if (!listeners[chainId][callKey][blocksPerFetch]) return;
          if (listeners[chainId][callKey][blocksPerFetch] === 1) {
            delete listeners[chainId][callKey][blocksPerFetch];
          } else {
            listeners[chainId][callKey][blocksPerFetch]--;
          }
        });
      },
      fetchingMulticallResults: function fetchingMulticallResults(state, action) {
        var _state$callResults$ch;
        var _action$payload3 = action.payload,
          chainId = _action$payload3.chainId,
          fetchingBlockNumber = _action$payload3.fetchingBlockNumber,
          calls = _action$payload3.calls;
        state.callResults[chainId] = (_state$callResults$ch = state.callResults[chainId]) != null ? _state$callResults$ch : {};
        calls.forEach(function (call) {
          var callKey = toCallKey(call);
          var current = state.callResults[chainId][callKey];
          if (!current) {
            state.callResults[chainId][callKey] = {
              fetchingBlockNumber: fetchingBlockNumber
            };
          } else {
            var _current$fetchingBloc;
            if (((_current$fetchingBloc = current.fetchingBlockNumber) != null ? _current$fetchingBloc : 0) >= fetchingBlockNumber) return;
            state.callResults[chainId][callKey].fetchingBlockNumber = fetchingBlockNumber;
          }
        });
      },
      errorFetchingMulticallResults: function errorFetchingMulticallResults(state, action) {
        var _state$callResults$ch2;
        var _action$payload4 = action.payload,
          chainId = _action$payload4.chainId,
          fetchingBlockNumber = _action$payload4.fetchingBlockNumber,
          calls = _action$payload4.calls;
        state.callResults[chainId] = (_state$callResults$ch2 = state.callResults[chainId]) != null ? _state$callResults$ch2 : {};
        calls.forEach(function (call) {
          var callKey = toCallKey(call);
          var current = state.callResults[chainId][callKey];
          if (!current || typeof current.fetchingBlockNumber !== 'number') return; // only should be dispatched if we are already fetching
          if (current.fetchingBlockNumber <= fetchingBlockNumber) {
            delete current.fetchingBlockNumber;
            current.data = null;
            current.blockNumber = fetchingBlockNumber;
          }
        });
      },
      updateMulticallResults: function updateMulticallResults(state, action) {
        var _state$callResults$ch3;
        var _action$payload5 = action.payload,
          chainId = _action$payload5.chainId,
          results = _action$payload5.results,
          blockNumber = _action$payload5.blockNumber;
        state.callResults[chainId] = (_state$callResults$ch3 = state.callResults[chainId]) != null ? _state$callResults$ch3 : {};
        Object.keys(results).forEach(function (callKey) {
          var _current$blockNumber;
          var current = state.callResults[chainId][callKey];
          if (((_current$blockNumber = current == null ? void 0 : current.blockNumber) != null ? _current$blockNumber : 0) > blockNumber) return;
          if ((current == null ? void 0 : current.data) === results[callKey] && (current == null ? void 0 : current.blockNumber) === blockNumber) return;
          state.callResults[chainId][callKey] = {
            data: results[callKey],
            blockNumber: blockNumber
          };
        });
      },
      updateListenerOptions: function updateListenerOptions(state, action) {
        var _state$listenerOption;
        var _action$payload6 = action.payload,
          chainId = _action$payload6.chainId,
          listenerOptions = _action$payload6.listenerOptions;
        state.listenerOptions = (_state$listenerOption = state.listenerOptions) != null ? _state$listenerOption : {};
        state.listenerOptions[chainId] = listenerOptions;
      }
    }
  });
}

/**
 * Tries to pack a list of items into as few bins as possible using the first-fit bin packing algorithm
 * @param calls the calls to chunk
 * @param chunkGasLimit the gas limit of any one chunk of calls, i.e. bin capacity
 * @param defaultGasRequired the default amount of gas an individual call should cost if not specified
 */
function chunkCalls(calls, chunkGasLimit, defaultGasRequired) {
  if (defaultGasRequired === void 0) {
    defaultGasRequired = DEFAULT_CHUNK_GAS_REQUIRED;
  }
  return calls
  // first sort by gas required
  .sort(function (c1, c2) {
    var _c2$gasRequired, _c1$gasRequired;
    return ((_c2$gasRequired = c2.gasRequired) != null ? _c2$gasRequired : defaultGasRequired) - ((_c1$gasRequired = c1.gasRequired) != null ? _c1$gasRequired : defaultGasRequired);
  })
  // then bin the calls according to the first fit algorithm
  .reduce(function (bins, call) {
    var _call$gasRequired;
    var gas = (_call$gasRequired = call.gasRequired) != null ? _call$gasRequired : defaultGasRequired;
    for (var _iterator = _createForOfIteratorHelperLoose(bins), _step; !(_step = _iterator()).done;) {
      var bin = _step.value;
      if (bin.cumulativeGasLimit + gas <= chunkGasLimit) {
        bin.calls.push(call);
        bin.cumulativeGasLimit += gas;
        return bins;
      }
    }
    // didn't find a bin for the call, make a new bin
    bins.push({
      calls: [call],
      cumulativeGasLimit: gas
    });
    return bins;
  }, [])
  // pull out just the calls from each bin
  .map(function (b) {
    return b.calls;
  });
}

// TODO de-duplicate this file with web interface
// https://github.com/Uniswap/interface/blob/main/src/utils/retry.ts
function wait(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
function waitRandom(min, max) {
  return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */
var CancelledError = /*#__PURE__*/function (_Error) {
  function CancelledError() {
    var _this;
    _this = _Error.call(this, 'Cancelled') || this;
    _this.isCancelledError = true;
    return _this;
  }
  _inheritsLoose(CancelledError, _Error);
  return CancelledError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Throw this error if the function should retry
 */
var RetryableError = /*#__PURE__*/function (_Error2) {
  function RetryableError() {
    var _this2;
    _this2 = _Error2.apply(this, arguments) || this;
    _this2.isRetryableError = true;
    return _this2;
  }
  _inheritsLoose(RetryableError, _Error2);
  return RetryableError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
function retry(fn, _ref) {
  var n = _ref.n,
    minWait = _ref.minWait,
    maxWait = _ref.maxWait;
  var completed = false;
  var rejectCancelled;
  var promise = new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            rejectCancelled = reject;
          case 1:
            result = void 0;
            _context.prev = 3;
            _context.next = 6;
            return fn();
          case 6:
            result = _context.sent;
            if (!completed) {
              resolve(result);
              completed = true;
            }
            return _context.abrupt("break", 24);
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            if (!completed) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("break", 24);
          case 15:
            if (!(n <= 0 || !_context.t0.isRetryableError)) {
              _context.next = 19;
              break;
            }
            reject(_context.t0);
            completed = true;
            return _context.abrupt("break", 24);
          case 19:
            n--;
          case 20:
            _context.next = 22;
            return waitRandom(minWait, maxWait);
          case 22:
            _context.next = 1;
            break;
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 11]]);
    }));
    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  return {
    promise: promise,
    cancel: function cancel() {
      if (completed) return;
      completed = true;
      rejectCancelled(new CancelledError());
    }
  };
}

// TODO de-duplicate this file with web interface
// modified from https://usehooks.com/useDebounce/
function useDebounce(value, delay) {
  var _useState = React.useState(value),
    debouncedValue = _useState[0],
    setDebouncedValue = _useState[1];
  React.useEffect(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

var IMulticallABI = [{
  inputs: [],
  name: 'getCurrentBlockTimestamp',
  outputs: [{
    internalType: 'uint256',
    name: 'timestamp',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    internalType: 'address',
    name: 'addr',
    type: 'address'
  }],
  name: 'getEthBalance',
  outputs: [{
    internalType: 'uint256',
    name: 'balance',
    type: 'uint256'
  }],
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [{
    components: [{
      internalType: 'address',
      name: 'target',
      type: 'address'
    }, {
      internalType: 'uint256',
      name: 'gasLimit',
      type: 'uint256'
    }, {
      internalType: 'bytes',
      name: 'callData',
      type: 'bytes'
    }],
    internalType: 'struct PancakeInterfaceMulticall.Call[]',
    name: 'calls',
    type: 'tuple[]'
  }],
  name: 'multicall',
  outputs: [{
    internalType: 'uint256',
    name: 'blockNumber',
    type: 'uint256'
  }, {
    components: [{
      internalType: 'bool',
      name: 'success',
      type: 'bool'
    }, {
      internalType: 'uint256',
      name: 'gasUsed',
      type: 'uint256'
    }, {
      internalType: 'bytes',
      name: 'returnData',
      type: 'bytes'
    }],
    internalType: 'struct PancakeInterfaceMulticall.Result[]',
    name: 'returnData',
    type: 'tuple[]'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}];

var FETCH_RETRY_CONFIG = {
  n: Infinity,
  minWait: 1000,
  maxWait: 2500
};
/**
 * Fetches a chunk of calls, enforcing a minimum block number constraint
 * @param multicall multicall contract to fetch against
 * @param chunk chunk of calls to make
 * @param blockNumber block number passed as the block tag in the eth_call
 */
function fetchChunk(_x, _x2, _x3, _x4) {
  return _fetchChunk.apply(this, arguments);
}
/**
 * From the current all listeners state, return each call key mapped to the
 * minimum number of blocks per fetch. This is how often each key must be fetched.
 * @param allListeners the all listeners state
 * @param chainId the current chain id
 */
function _fetchChunk() {
  _fetchChunk = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(multicallInfo, chunk, blockNumber, isDebug) {
    var _yield$multicallInfo$, _yield$multicallInfo$2, returnData, _error$message, _error$message2, error, half, _yield$Promise$all, c0, c1;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.debug('Fetching chunk', chunk, blockNumber, chunk.map(function (obj) {
            var _obj$gasRequired;
            return {
              target: obj.address,
              callData: obj.callData,
              gasLimit: (_obj$gasRequired = obj.gasRequired) != null ? _obj$gasRequired : DEFAULT_CALL_GAS_REQUIRED
            };
          }));
          _context.prev = 1;
          _context.next = 4;
          return multicallInfo.provider.simulateContract({
            abi: IMulticallABI,
            address: multicallInfo.address,
            functionName: 'multicall',
            args: [chunk.map(function (obj) {
              var _obj$gasRequired2;
              return {
                target: obj.address,
                callData: obj.callData,
                gasLimit: (_obj$gasRequired2 = obj.gasRequired) != null ? _obj$gasRequired2 : DEFAULT_CALL_GAS_REQUIRED
              };
            })],
            // we aren't passing through the block gas limit we used to create the chunk, because it causes a problem with the integ tests
            blockNumber: BigInt(blockNumber)
          });
        case 4:
          _yield$multicallInfo$ = _context.sent;
          _yield$multicallInfo$2 = _yield$multicallInfo$.result;
          returnData = _yield$multicallInfo$2[1];
          if (isDebug) {
            returnData.forEach(function (_ref, i) {
              var _chunk$i$gasRequired;
              var gasUsed = _ref.gasUsed,
                returnData = _ref.returnData,
                success = _ref.success;
              if (!success && returnData.length === 2 && gasUsed >= Math.floor(((_chunk$i$gasRequired = chunk[i].gasRequired) != null ? _chunk$i$gasRequired : DEFAULT_CALL_GAS_REQUIRED) * 0.95)) {
                var _chunk$i$gasRequired2;
                console.warn("A call failed due to requiring " + gasUsed.toString() + " vs. allowed " + ((_chunk$i$gasRequired2 = chunk[i].gasRequired) != null ? _chunk$i$gasRequired2 : DEFAULT_CALL_GAS_REQUIRED), chunk[i]);
              }
            });
          }
          return _context.abrupt("return", returnData);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          error = _context.t0;
          if (!(error.code === -32000 || ((_error$message = error.message) == null ? void 0 : _error$message.indexOf('header not found')) !== -1)) {
            _context.next = 18;
            break;
          }
          throw new RetryableError("header not found for block number " + blockNumber);
        case 18:
          if (!(error.code === -32603 || ((_error$message2 = error.message) == null ? void 0 : _error$message2.indexOf('execution ran out of gas')) !== -1)) {
            _context.next = 28;
            break;
          }
          if (!(chunk.length > 1)) {
            _context.next = 28;
            break;
          }
          {
            console.debug('Splitting a chunk in 2', chunk);
          }
          half = Math.floor(chunk.length / 2);
          _context.next = 24;
          return Promise.all([fetchChunk(multicallInfo, chunk.slice(0, half), blockNumber), fetchChunk(multicallInfo, chunk.slice(half, chunk.length), blockNumber)]);
        case 24:
          _yield$Promise$all = _context.sent;
          c0 = _yield$Promise$all[0];
          c1 = _yield$Promise$all[1];
          return _context.abrupt("return", c0.concat(c1));
        case 28:
          console.error('Failed to fetch chunk', error);
          throw error;
        case 30:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 11]]);
  }));
  return _fetchChunk.apply(this, arguments);
}
function activeListeningKeys(allListeners, chainId) {
  if (!allListeners || !chainId) return {};
  var listeners = allListeners[chainId];
  if (!listeners) return {};
  return Object.keys(listeners).reduce(function (memo, callKey) {
    var keyListeners = listeners[callKey];
    memo[callKey] = Object.keys(keyListeners).filter(function (key) {
      var blocksPerFetch = parseInt(key);
      if (blocksPerFetch <= 0) return false;
      return keyListeners[blocksPerFetch] > 0;
    }).reduce(function (previousMin, current) {
      return Math.min(previousMin, parseInt(current));
    }, Infinity);
    return memo;
  }, {});
}
/**
 * Return the keys that need to be refetched
 * @param callResults current call result state
 * @param listeningKeys each call key mapped to how old the data can be in blocks
 * @param chainId the current chain id
 * @param latestBlockNumber the latest block number
 */
function outdatedListeningKeys(callResults, listeningKeys, chainId, latestBlockNumber) {
  if (!chainId || !latestBlockNumber) return [];
  var results = callResults[chainId];
  // no results at all, load everything
  if (!results) return Object.keys(listeningKeys);
  return Object.keys(listeningKeys).filter(function (callKey) {
    var blocksPerFetch = listeningKeys[callKey];
    var data = callResults[chainId][callKey];
    // no data, must fetch
    if (!data) return true;
    var minDataBlockNumber = latestBlockNumber - (blocksPerFetch - 1);
    // already fetching it for a recent enough block, don't refetch it
    if (data.fetchingBlockNumber && data.fetchingBlockNumber >= minDataBlockNumber) return false;
    // if data is older than minDataBlockNumber, fetch it
    return !data.blockNumber || data.blockNumber < minDataBlockNumber;
  });
}
function onFetchChunkSuccess(context, chunk, result) {
  var actions = context.actions,
    dispatch = context.dispatch,
    chainId = context.chainId,
    latestBlockNumber = context.latestBlockNumber,
    isDebug = context.isDebug;
  // split the returned slice into errors and results
  var _chunk$reduce = chunk.reduce(function (memo, call, i) {
      if (result[i].success) {
        var _result$i$returnData;
        memo.results[toCallKey(call)] = (_result$i$returnData = result[i].returnData) != null ? _result$i$returnData : null;
      } else {
        memo.erroredCalls.push(call);
      }
      return memo;
    }, {
      erroredCalls: [],
      results: {}
    }),
    erroredCalls = _chunk$reduce.erroredCalls,
    results = _chunk$reduce.results;
  // dispatch any new results
  if (Object.keys(results).length > 0) dispatch(actions.updateMulticallResults({
    chainId: chainId,
    results: results,
    blockNumber: latestBlockNumber
  }));
  // dispatch any errored calls
  if (erroredCalls.length > 0) {
    if (isDebug) {
      result.forEach(function (returnData, ix) {
        if (!returnData.success) {
          console.debug('Call failed', chunk[ix], returnData);
        }
      });
    } else {
      console.debug('Calls errored in fetch', erroredCalls);
    }
    dispatch(actions.errorFetchingMulticallResults({
      calls: erroredCalls,
      chainId: chainId,
      fetchingBlockNumber: latestBlockNumber
    }));
  }
}
function onFetchChunkFailure(context, chunk, error) {
  var actions = context.actions,
    dispatch = context.dispatch,
    chainId = context.chainId,
    latestBlockNumber = context.latestBlockNumber;
  if (error.isCancelledError) {
    console.debug('Cancelled fetch for blockNumber', latestBlockNumber, chunk, chainId);
    return;
  }
  console.error('Failed to fetch multicall chunk', chunk, chainId, error);
  dispatch(actions.errorFetchingMulticallResults({
    calls: chunk,
    chainId: chainId,
    fetchingBlockNumber: latestBlockNumber
  }));
}
function Updater(props) {
  var context = props.context,
    chainId = props.chainId,
    latestBlockNumber = props.latestBlockNumber,
    multicallInfo = props.multicallInfo,
    isDebug = props.isDebug,
    listenerOptions = props.listenerOptions;
  var actions = context.actions,
    reducerPath = context.reducerPath;
  var dispatch = reactRedux.useDispatch();
  // set user configured listenerOptions in state for given chain ID.
  React.useEffect(function () {
    if (chainId && listenerOptions) {
      dispatch(actions.updateListenerOptions({
        chainId: chainId,
        listenerOptions: listenerOptions
      }));
    }
  }, [chainId, listenerOptions, actions, dispatch]);
  var state = reactRedux.useSelector(function (state) {
    return state[reducerPath];
  });
  // wait for listeners to settle before triggering updates
  var debouncedListeners = useDebounce(state.callListeners, 100);
  var cancellations = React.useRef();
  var listeningKeys = React.useMemo(function () {
    return activeListeningKeys(debouncedListeners, chainId);
  }, [debouncedListeners, chainId]);
  var serializedOutdatedCallKeys = React.useMemo(function () {
    var outdatedCallKeys = outdatedListeningKeys(state.callResults, listeningKeys, chainId, latestBlockNumber);
    return JSON.stringify(outdatedCallKeys.sort());
  }, [chainId, state.callResults, listeningKeys, latestBlockNumber]);
  React.useEffect(function () {
    if (!latestBlockNumber || !chainId || !multicallInfo) return;
    var outdatedCallKeys = JSON.parse(serializedOutdatedCallKeys);
    if (outdatedCallKeys.length === 0) return;
    var calls = outdatedCallKeys.map(function (key) {
      return parseCallKey(key);
    });
    var chunkedCalls = chunkCalls(calls, CHUNK_GAS_LIMIT);
    if (cancellations.current && cancellations.current.blockNumber !== latestBlockNumber) {
      cancellations.current.cancellations.forEach(function (c) {
        return c();
      });
    }
    dispatch(actions.fetchingMulticallResults({
      calls: calls,
      chainId: chainId,
      fetchingBlockNumber: latestBlockNumber
    }));
    var fetchChunkContext = {
      actions: actions,
      dispatch: dispatch,
      chainId: chainId,
      latestBlockNumber: latestBlockNumber,
      isDebug: isDebug
    };
    // Execute fetches and gather cancellation callbacks
    var newCancellations = chunkedCalls.map(function (chunk) {
      var _retry = retry(function () {
          return fetchChunk(multicallInfo, chunk, latestBlockNumber, isDebug);
        }, FETCH_RETRY_CONFIG),
        cancel = _retry.cancel,
        promise = _retry.promise;
      promise.then(function (result) {
        return onFetchChunkSuccess(fetchChunkContext, chunk, result);
      })["catch"](function (error) {
        return onFetchChunkFailure(fetchChunkContext, chunk, error);
      });
      return cancel;
    });
    cancellations.current = {
      blockNumber: latestBlockNumber,
      cancellations: newCancellations
    };
  }, [actions, chainId, multicallInfo, dispatch, serializedOutdatedCallKeys, latestBlockNumber, isDebug]);
  return null;
}
function createUpdater(context) {
  var UpdaterContextBound = function UpdaterContextBound(props) {
    return React__default.createElement(Updater, Object.assign({
      context: context
    }, props));
  };
  return UpdaterContextBound;
}

// Inspired by RTK Query's createApi
function createMulticall(options) {
  var _options$reducerPath;
  var reducerPath = (_options$reducerPath = options == null ? void 0 : options.reducerPath) != null ? _options$reducerPath : 'multicall';
  var slice = createMulticallSlice(reducerPath);
  var actions = slice.actions,
    reducer = slice.reducer;
  var context = {
    reducerPath: reducerPath,
    actions: actions
  };
  var useMultipleContractSingleData$1 = function useMultipleContractSingleData$1() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return useMultipleContractSingleData.apply(void 0, [context].concat(args));
  };
  var useSingleContractMultipleData$1 = function useSingleContractMultipleData$1() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return useSingleContractMultipleData.apply(void 0, [context].concat(args));
  };
  var useSingleContractWithCallData$1 = function useSingleContractWithCallData$1() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return useSingleContractWithCallData.apply(void 0, [context].concat(args));
  };
  var useSingleCallResult$1 = function useSingleCallResult$1() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return useSingleCallResult.apply(void 0, [context].concat(args));
  };
  var useMultiChainMultiContractSingleData$1 = function useMultiChainMultiContractSingleData$1() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return useMultiChainMultiContractSingleData.apply(void 0, [context].concat(args));
  };
  var useMultiChainSingleContractSingleData$1 = function useMultiChainSingleContractSingleData$1() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    return useMultiChainSingleContractSingleData.apply(void 0, [context].concat(args));
  };
  var hooks = {
    useMultipleContractSingleData: useMultipleContractSingleData$1,
    useSingleContractMultipleData: useSingleContractMultipleData$1,
    useSingleContractWithCallData: useSingleContractWithCallData$1,
    useSingleCallResult: useSingleCallResult$1,
    useMultiChainMultiContractSingleData: useMultiChainMultiContractSingleData$1,
    useMultiChainSingleContractSingleData: useMultiChainSingleContractSingleData$1
  };
  var Updater = createUpdater(context);
  return {
    reducerPath: reducerPath,
    reducer: reducer,
    actions: actions,
    hooks: hooks,
    Updater: Updater
  };
}

exports.CHUNK_GAS_LIMIT = CHUNK_GAS_LIMIT;
exports.CONSERVATIVE_BLOCK_GAS_LIMIT = CONSERVATIVE_BLOCK_GAS_LIMIT;
exports.DEFAULT_BLOCKS_PER_FETCH = DEFAULT_BLOCKS_PER_FETCH;
exports.DEFAULT_CALL_GAS_REQUIRED = DEFAULT_CALL_GAS_REQUIRED;
exports.DEFAULT_CHUNK_GAS_REQUIRED = DEFAULT_CHUNK_GAS_REQUIRED;
exports.INVALID_CALL_STATE = INVALID_CALL_STATE;
exports.INVALID_RESULT = INVALID_RESULT;
exports.LOADING_CALL_STATE = LOADING_CALL_STATE;
exports.NEVER_RELOAD = NEVER_RELOAD;
exports.createMulticall = createMulticall;
//# sourceMappingURL=redux-multicall-viem.cjs.development.js.map
