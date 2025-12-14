(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function a(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
var $l = { exports: {} },
  ii = {},
  Kl = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ld;
function ug() {
  if (ld) return oe;
  ld = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function T(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (x && k[x]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    V = Object.assign,
    L = {};
  function _(k, D, se) {
    (this.props = k),
      (this.context = D),
      (this.refs = L),
      (this.updater = se || M);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (k, D) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, D, "setState");
    }),
    (_.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function z() {}
  z.prototype = _.prototype;
  function U(k, D, se) {
    (this.props = k),
      (this.context = D),
      (this.refs = L),
      (this.updater = se || M);
  }
  var I = (U.prototype = new z());
  (I.constructor = U), V(I, _.prototype), (I.isPureReactComponent = !0);
  var Z = Array.isArray,
    X = Object.prototype.hasOwnProperty,
    q = { current: null },
    ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Q(k, D, se) {
    var le,
      ue = {},
      ce = null,
      me = null;
    if (D != null)
      for (le in (D.ref !== void 0 && (me = D.ref),
      D.key !== void 0 && (ce = "" + D.key),
      D))
        X.call(D, le) && !ee.hasOwnProperty(le) && (ue[le] = D[le]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = se;
    else if (1 < de) {
      for (var xe = Array(de), at = 0; at < de; at++)
        xe[at] = arguments[at + 2];
      ue.children = xe;
    }
    if (k && k.defaultProps)
      for (le in ((de = k.defaultProps), de))
        ue[le] === void 0 && (ue[le] = de[le]);
    return {
      $$typeof: n,
      type: k,
      key: ce,
      ref: me,
      props: ue,
      _owner: q.current,
    };
  }
  function pe(k, D) {
    return {
      $$typeof: n,
      type: k.type,
      key: D,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function ge(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function Ue(k) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (se) {
        return D[se];
      })
    );
  }
  var ot = /\/+/g;
  function Ye(k, D) {
    return typeof k == "object" && k !== null && k.key != null
      ? Ue("" + k.key)
      : D.toString(36);
  }
  function Je(k, D, se, le, ue) {
    var ce = typeof k;
    (ce === "undefined" || ce === "boolean") && (k = null);
    var me = !1;
    if (k === null) me = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case n:
            case i:
              me = !0;
          }
      }
    if (me)
      return (
        (me = k),
        (ue = ue(me)),
        (k = le === "" ? "." + Ye(me, 0) : le),
        Z(ue)
          ? ((se = ""),
            k != null && (se = k.replace(ot, "$&/") + "/"),
            Je(ue, D, se, "", function (at) {
              return at;
            }))
          : ue != null &&
            (ge(ue) &&
              (ue = pe(
                ue,
                se +
                  (!ue.key || (me && me.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(ot, "$&/") + "/") +
                  k
              )),
            D.push(ue)),
        1
      );
    if (((me = 0), (le = le === "" ? "." : le + ":"), Z(k)))
      for (var de = 0; de < k.length; de++) {
        ce = k[de];
        var xe = le + Ye(ce, de);
        me += Je(ce, D, se, xe, ue);
      }
    else if (((xe = T(k)), typeof xe == "function"))
      for (k = xe.call(k), de = 0; !(ce = k.next()).done; )
        (ce = ce.value),
          (xe = le + Ye(ce, de++)),
          (me += Je(ce, D, se, xe, ue));
    else if (ce === "object")
      throw (
        ((D = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : D) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return me;
  }
  function lt(k, D, se) {
    if (k == null) return k;
    var le = [],
      ue = 0;
    return (
      Je(k, le, "", "", function (ce) {
        return D.call(se, ce, ue++);
      }),
      le
    );
  }
  function Ge(k) {
    if (k._status === -1) {
      var D = k._result;
      (D = D()),
        D.then(
          function (se) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = se));
          },
          function (se) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = se));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = D));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ie = { current: null },
    F = { transition: null },
    G = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: q,
    };
  function O() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (oe.Children = {
      map: lt,
      forEach: function (k, D, se) {
        lt(
          k,
          function () {
            D.apply(this, arguments);
          },
          se
        );
      },
      count: function (k) {
        var D = 0;
        return (
          lt(k, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (k) {
        return (
          lt(k, function (D) {
            return D;
          }) || []
        );
      },
      only: function (k) {
        if (!ge(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (oe.Component = _),
    (oe.Fragment = o),
    (oe.Profiler = c),
    (oe.PureComponent = U),
    (oe.StrictMode = a),
    (oe.Suspense = m),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (oe.act = O),
    (oe.cloneElement = function (k, D, se) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            "."
        );
      var le = V({}, k.props),
        ue = k.key,
        ce = k.ref,
        me = k._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((ce = D.ref), (me = q.current)),
          D.key !== void 0 && (ue = "" + D.key),
          k.type && k.type.defaultProps)
        )
          var de = k.type.defaultProps;
        for (xe in D)
          X.call(D, xe) &&
            !ee.hasOwnProperty(xe) &&
            (le[xe] = D[xe] === void 0 && de !== void 0 ? de[xe] : D[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) le.children = se;
      else if (1 < xe) {
        de = Array(xe);
        for (var at = 0; at < xe; at++) de[at] = arguments[at + 2];
        le.children = de;
      }
      return {
        $$typeof: n,
        type: k.type,
        key: ue,
        ref: ce,
        props: le,
        _owner: me,
      };
    }),
    (oe.createContext = function (k) {
      return (
        (k = {
          $$typeof: f,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: d, _context: k }),
        (k.Consumer = k)
      );
    }),
    (oe.createElement = Q),
    (oe.createFactory = function (k) {
      var D = Q.bind(null, k);
      return (D.type = k), D;
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (k) {
      return { $$typeof: p, render: k };
    }),
    (oe.isValidElement = ge),
    (oe.lazy = function (k) {
      return { $$typeof: y, _payload: { _status: -1, _result: k }, _init: Ge };
    }),
    (oe.memo = function (k, D) {
      return { $$typeof: g, type: k, compare: D === void 0 ? null : D };
    }),
    (oe.startTransition = function (k) {
      var D = F.transition;
      F.transition = {};
      try {
        k();
      } finally {
        F.transition = D;
      }
    }),
    (oe.unstable_act = O),
    (oe.useCallback = function (k, D) {
      return ie.current.useCallback(k, D);
    }),
    (oe.useContext = function (k) {
      return ie.current.useContext(k);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (k) {
      return ie.current.useDeferredValue(k);
    }),
    (oe.useEffect = function (k, D) {
      return ie.current.useEffect(k, D);
    }),
    (oe.useId = function () {
      return ie.current.useId();
    }),
    (oe.useImperativeHandle = function (k, D, se) {
      return ie.current.useImperativeHandle(k, D, se);
    }),
    (oe.useInsertionEffect = function (k, D) {
      return ie.current.useInsertionEffect(k, D);
    }),
    (oe.useLayoutEffect = function (k, D) {
      return ie.current.useLayoutEffect(k, D);
    }),
    (oe.useMemo = function (k, D) {
      return ie.current.useMemo(k, D);
    }),
    (oe.useReducer = function (k, D, se) {
      return ie.current.useReducer(k, D, se);
    }),
    (oe.useRef = function (k) {
      return ie.current.useRef(k);
    }),
    (oe.useState = function (k) {
      return ie.current.useState(k);
    }),
    (oe.useSyncExternalStore = function (k, D, se) {
      return ie.current.useSyncExternalStore(k, D, se);
    }),
    (oe.useTransition = function () {
      return ie.current.useTransition();
    }),
    (oe.version = "18.3.1"),
    oe
  );
}
var ad;
function Va() {
  return ad || ((ad = 1), (Kl.exports = ug())), Kl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud;
function cg() {
  if (ud) return ii;
  ud = 1;
  var n = Va(),
    i = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var y,
      x = {},
      T = null,
      M = null;
    g !== void 0 && (T = "" + g),
      m.key !== void 0 && (T = "" + m.key),
      m.ref !== void 0 && (M = m.ref);
    for (y in m) a.call(m, y) && !d.hasOwnProperty(y) && (x[y] = m[y]);
    if (p && p.defaultProps)
      for (y in ((m = p.defaultProps), m)) x[y] === void 0 && (x[y] = m[y]);
    return {
      $$typeof: i,
      type: p,
      key: T,
      ref: M,
      props: x,
      _owner: c.current,
    };
  }
  return (ii.Fragment = o), (ii.jsx = f), (ii.jsxs = f), ii;
}
var cd;
function fg() {
  return cd || ((cd = 1), ($l.exports = cg())), $l.exports;
}
var re = fg(),
  Ns = {},
  Xl = { exports: {} },
  it = {},
  Yl = { exports: {} },
  Gl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd;
function dg() {
  return (
    fd ||
      ((fd = 1),
      (function (n) {
        function i(F, G) {
          var O = F.length;
          F.push(G);
          e: for (; 0 < O; ) {
            var k = (O - 1) >>> 1,
              D = F[k];
            if (0 < c(D, G)) (F[k] = G), (F[O] = D), (O = k);
            else break e;
          }
        }
        function o(F) {
          return F.length === 0 ? null : F[0];
        }
        function a(F) {
          if (F.length === 0) return null;
          var G = F[0],
            O = F.pop();
          if (O !== G) {
            F[0] = O;
            e: for (var k = 0, D = F.length, se = D >>> 1; k < se; ) {
              var le = 2 * (k + 1) - 1,
                ue = F[le],
                ce = le + 1,
                me = F[ce];
              if (0 > c(ue, O))
                ce < D && 0 > c(me, ue)
                  ? ((F[k] = me), (F[ce] = O), (k = ce))
                  : ((F[k] = ue), (F[le] = O), (k = le));
              else if (ce < D && 0 > c(me, O))
                (F[k] = me), (F[ce] = O), (k = ce);
              else break e;
            }
          }
          return G;
        }
        function c(F, G) {
          var O = F.sortIndex - G.sortIndex;
          return O !== 0 ? O : F.id - G.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          g = [],
          y = 1,
          x = null,
          T = 3,
          M = !1,
          V = !1,
          L = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          z = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function I(F) {
          for (var G = o(g); G !== null; ) {
            if (G.callback === null) a(g);
            else if (G.startTime <= F)
              a(g), (G.sortIndex = G.expirationTime), i(m, G);
            else break;
            G = o(g);
          }
        }
        function Z(F) {
          if (((L = !1), I(F), !V))
            if (o(m) !== null) (V = !0), Ge(X);
            else {
              var G = o(g);
              G !== null && ie(Z, G.startTime - F);
            }
        }
        function X(F, G) {
          (V = !1), L && ((L = !1), z(Q), (Q = -1)), (M = !0);
          var O = T;
          try {
            for (
              I(G), x = o(m);
              x !== null && (!(x.expirationTime > G) || (F && !Ue()));

            ) {
              var k = x.callback;
              if (typeof k == "function") {
                (x.callback = null), (T = x.priorityLevel);
                var D = k(x.expirationTime <= G);
                (G = n.unstable_now()),
                  typeof D == "function"
                    ? (x.callback = D)
                    : x === o(m) && a(m),
                  I(G);
              } else a(m);
              x = o(m);
            }
            if (x !== null) var se = !0;
            else {
              var le = o(g);
              le !== null && ie(Z, le.startTime - G), (se = !1);
            }
            return se;
          } finally {
            (x = null), (T = O), (M = !1);
          }
        }
        var q = !1,
          ee = null,
          Q = -1,
          pe = 5,
          ge = -1;
        function Ue() {
          return !(n.unstable_now() - ge < pe);
        }
        function ot() {
          if (ee !== null) {
            var F = n.unstable_now();
            ge = F;
            var G = !0;
            try {
              G = ee(!0, F);
            } finally {
              G ? Ye() : ((q = !1), (ee = null));
            }
          } else q = !1;
        }
        var Ye;
        if (typeof U == "function")
          Ye = function () {
            U(ot);
          };
        else if (typeof MessageChannel < "u") {
          var Je = new MessageChannel(),
            lt = Je.port2;
          (Je.port1.onmessage = ot),
            (Ye = function () {
              lt.postMessage(null);
            });
        } else
          Ye = function () {
            _(ot, 0);
          };
        function Ge(F) {
          (ee = F), q || ((q = !0), Ye());
        }
        function ie(F, G) {
          Q = _(function () {
            F(n.unstable_now());
          }, G);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            V || M || ((V = !0), Ge(X));
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (pe = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (n.unstable_next = function (F) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = T;
            }
            var O = T;
            T = G;
            try {
              return F();
            } finally {
              T = O;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (F, G) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var O = T;
            T = F;
            try {
              return G();
            } finally {
              T = O;
            }
          }),
          (n.unstable_scheduleCallback = function (F, G, O) {
            var k = n.unstable_now();
            switch (
              (typeof O == "object" && O !== null
                ? ((O = O.delay),
                  (O = typeof O == "number" && 0 < O ? k + O : k))
                : (O = k),
              F)
            ) {
              case 1:
                var D = -1;
                break;
              case 2:
                D = 250;
                break;
              case 5:
                D = 1073741823;
                break;
              case 4:
                D = 1e4;
                break;
              default:
                D = 5e3;
            }
            return (
              (D = O + D),
              (F = {
                id: y++,
                callback: G,
                priorityLevel: F,
                startTime: O,
                expirationTime: D,
                sortIndex: -1,
              }),
              O > k
                ? ((F.sortIndex = O),
                  i(g, F),
                  o(m) === null &&
                    F === o(g) &&
                    (L ? (z(Q), (Q = -1)) : (L = !0), ie(Z, O - k)))
                : ((F.sortIndex = D), i(m, F), V || M || ((V = !0), Ge(X))),
              F
            );
          }),
          (n.unstable_shouldYield = Ue),
          (n.unstable_wrapCallback = function (F) {
            var G = T;
            return function () {
              var O = T;
              T = G;
              try {
                return F.apply(this, arguments);
              } finally {
                T = O;
              }
            };
          });
      })(Gl)),
    Gl
  );
}
var dd;
function hg() {
  return dd || ((dd = 1), (Yl.exports = dg())), Yl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function pg() {
  if (hd) return it;
  hd = 1;
  var n = Va(),
    i = hg();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    c = {};
  function d(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    x = {};
  function T(e) {
    return m.call(x, e)
      ? !0
      : m.call(y, e)
      ? !1
      : g.test(e)
      ? (x[e] = !0)
      : ((y[e] = !0), !1);
  }
  function M(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function V(e, t, r, s) {
    if (t === null || typeof t > "u" || M(e, t, r, s)) return !0;
    if (s) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function L(e, t, r, s, l, u, h) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = l),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = h);
  }
  var _ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      _[e] = new L(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      _[t] = new L(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      _[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      _[e] = new L(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        _[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      _[e] = new L(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      _[e] = new L(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      _[e] = new L(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      _[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var z = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(z, U);
      _[t] = new L(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(z, U);
        _[t] = new L(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(z, U);
      _[t] = new L(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      _[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (_.xlinkHref = new L(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      _[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function I(e, t, r, s) {
    var l = _.hasOwnProperty(t) ? _[t] : null;
    (l !== null
      ? l.type !== 0
      : s ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (V(t, r, l, s) && (r = null),
      s || l === null
        ? T(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : l.mustUseProperty
        ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
        : ((t = l.attributeName),
          (s = l.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
              s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var Z = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    X = Symbol.for("react.element"),
    q = Symbol.for("react.portal"),
    ee = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    pe = Symbol.for("react.profiler"),
    ge = Symbol.for("react.provider"),
    Ue = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    Ye = Symbol.for("react.suspense"),
    Je = Symbol.for("react.suspense_list"),
    lt = Symbol.for("react.memo"),
    Ge = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var O = Object.assign,
    k;
  function D(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || "";
      }
    return (
      `
` +
      k +
      e
    );
  }
  var se = !1;
  function le(e, t) {
    if (!e || se) return "";
    se = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (E) {
            var s = E;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (E) {
            s = E;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (E) {
          s = E;
        }
        e();
      }
    } catch (E) {
      if (E && s && typeof E.stack == "string") {
        for (
          var l = E.stack.split(`
`),
            u = s.stack.split(`
`),
            h = l.length - 1,
            v = u.length - 1;
          1 <= h && 0 <= v && l[h] !== u[v];

        )
          v--;
        for (; 1 <= h && 0 <= v; h--, v--)
          if (l[h] !== u[v]) {
            if (h !== 1 || v !== 1)
              do
                if ((h--, v--, 0 > v || l[h] !== u[v])) {
                  var w =
                    `
` + l[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= h && 0 <= v);
            break;
          }
      }
    } finally {
      (se = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = le(e.type, !1)), e;
      case 11:
        return (e = le(e.type.render, !1)), e;
      case 1:
        return (e = le(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ee:
        return "Fragment";
      case q:
        return "Portal";
      case pe:
        return "Profiler";
      case Q:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case Je:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ue:
          return (e.displayName || "Context") + ".Consumer";
        case ge:
          return (e._context.displayName || "Context") + ".Provider";
        case ot:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case lt:
          return (
            (t = e.displayName || null), t !== null ? t : ce(e.type) || "Memo"
          );
        case Ge:
          (t = e._payload), (e = e._init);
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ce(t);
      case 8:
        return t === Q ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function de(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function at(e) {
    var t = xe(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var l = r.get,
        u = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (h) {
            (s = "" + h), u.call(this, h);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (h) {
            s = "" + h;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function xi(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function du(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      s = "";
    return (
      e && (s = xe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Si(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Zs(e, t) {
    var r = t.checked;
    return O({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function hu(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (r = de(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function pu(e, t) {
    (t = t.checked), t != null && I(e, "checked", t, !1);
  }
  function qs(e, t) {
    pu(e, t);
    var r = de(t.value),
      s = t.type;
    if (r != null)
      s === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Js(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && Js(e, t.type, de(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function mu(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (
        !(
          (s !== "submit" && s !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function Js(e, t, r) {
    (t !== "number" || Si(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var wr = Array.isArray;
  function zn(e, t, r, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
      for (r = 0; r < e.length; r++)
        (l = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== l && (e[r].selected = l),
          l && s && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + de(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          (e[l].selected = !0), s && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function bs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return O({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function yu(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(o(92));
        if (wr(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: de(r) };
  }
  function gu(e, t) {
    var r = de(t.value),
      s = de(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      s != null && (e.defaultValue = "" + s);
  }
  function vu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function wu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function eo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? wu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ti,
    xu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, s, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, s, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ti = Ti || document.createElement("div"),
            Ti.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ti.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function xr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Sr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    hm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Sr).forEach(function (e) {
    hm.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e]);
    });
  });
  function Su(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Tu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var s = r.indexOf("--") === 0,
          l = Su(r, t[r], s);
        r === "float" && (r = "cssFloat"), s ? e.setProperty(r, l) : (e[r] = l);
      }
  }
  var pm = O(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function to(e, t) {
    if (t) {
      if (pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function no(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ro = null;
  function io(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var so = null,
    In = null,
    On = null;
  function ku(e) {
    if ((e = Wr(e))) {
      if (typeof so != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = Ki(t)), so(e.stateNode, e.type, t));
    }
  }
  function Pu(e) {
    In ? (On ? On.push(e) : (On = [e])) : (In = e);
  }
  function Cu() {
    if (In) {
      var e = In,
        t = On;
      if (((On = In = null), ku(e), t)) for (e = 0; e < t.length; e++) ku(t[e]);
    }
  }
  function Eu(e, t) {
    return e(t);
  }
  function Mu() {}
  var oo = !1;
  function Au(e, t, r) {
    if (oo) return e(t, r);
    oo = !0;
    try {
      return Eu(e, t, r);
    } finally {
      (oo = !1), (In !== null || On !== null) && (Mu(), Cu());
    }
  }
  function Tr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = Ki(r);
    if (s === null) return null;
    r = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(o(231, t, typeof r));
    return r;
  }
  var lo = !1;
  if (p)
    try {
      var kr = {};
      Object.defineProperty(kr, "passive", {
        get: function () {
          lo = !0;
        },
      }),
        window.addEventListener("test", kr, kr),
        window.removeEventListener("test", kr, kr);
    } catch {
      lo = !1;
    }
  function mm(e, t, r, s, l, u, h, v, w) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, E);
    } catch (N) {
      this.onError(N);
    }
  }
  var Pr = !1,
    ki = null,
    Pi = !1,
    ao = null,
    ym = {
      onError: function (e) {
        (Pr = !0), (ki = e);
      },
    };
  function gm(e, t, r, s, l, u, h, v, w) {
    (Pr = !1), (ki = null), mm.apply(ym, arguments);
  }
  function vm(e, t, r, s, l, u, h, v, w) {
    if ((gm.apply(this, arguments), Pr)) {
      if (Pr) {
        var E = ki;
        (Pr = !1), (ki = null);
      } else throw Error(o(198));
      Pi || ((Pi = !0), (ao = E));
    }
  }
  function vn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Du(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Nu(e) {
    if (vn(e) !== e) throw Error(o(188));
  }
  function wm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = vn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ; ) {
      var l = r.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((s = l.return), s !== null)) {
          r = s;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === r) return Nu(l), e;
          if (u === s) return Nu(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== s.return) (r = l), (s = u);
      else {
        for (var h = !1, v = l.child; v; ) {
          if (v === r) {
            (h = !0), (r = l), (s = u);
            break;
          }
          if (v === s) {
            (h = !0), (s = l), (r = u);
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = u.child; v; ) {
            if (v === r) {
              (h = !0), (r = u), (s = l);
              break;
            }
            if (v === s) {
              (h = !0), (s = u), (r = l);
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (r.alternate !== s) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function Ru(e) {
    return (e = wm(e)), e !== null ? Vu(e) : null;
  }
  function Vu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Vu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Lu = i.unstable_scheduleCallback,
    ju = i.unstable_cancelCallback,
    xm = i.unstable_shouldYield,
    Sm = i.unstable_requestPaint,
    Ae = i.unstable_now,
    Tm = i.unstable_getCurrentPriorityLevel,
    uo = i.unstable_ImmediatePriority,
    _u = i.unstable_UserBlockingPriority,
    Ci = i.unstable_NormalPriority,
    km = i.unstable_LowPriority,
    Fu = i.unstable_IdlePriority,
    Ei = null,
    Rt = null;
  function Pm(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function")
      try {
        Rt.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Tt = Math.clz32 ? Math.clz32 : Mm,
    Cm = Math.log,
    Em = Math.LN2;
  function Mm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Cm(e) / Em) | 0)) | 0;
  }
  var Mi = 64,
    Ai = 4194304;
  function Cr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Di(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      h = r & 268435455;
    if (h !== 0) {
      var v = h & ~l;
      v !== 0 ? (s = Cr(v)) : ((u &= h), u !== 0 && (s = Cr(u)));
    } else (h = r & ~l), h !== 0 ? (s = Cr(h)) : u !== 0 && (s = Cr(u));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      (t & l) === 0 &&
      ((l = s & -s), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((s & 4) !== 0 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t; )
        (r = 31 - Tt(t)), (l = 1 << r), (s |= e[r]), (t &= ~l);
    return s;
  }
  function Am(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Dm(e, t) {
    for (
      var r = e.suspendedLanes,
        s = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var h = 31 - Tt(u),
        v = 1 << h,
        w = l[h];
      w === -1
        ? ((v & r) === 0 || (v & s) !== 0) && (l[h] = Am(v, t))
        : w <= t && (e.expiredLanes |= v),
        (u &= ~v);
    }
  }
  function co(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function zu() {
    var e = Mi;
    return (Mi <<= 1), (Mi & 4194240) === 0 && (Mi = 64), e;
  }
  function fo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Er(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Tt(t)),
      (e[t] = r);
  }
  function Nm(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var l = 31 - Tt(r),
        u = 1 << l;
      (t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~u);
    }
  }
  function ho(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var s = 31 - Tt(r),
        l = 1 << s;
      (l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l);
    }
  }
  var he = 0;
  function Iu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ou,
    po,
    Bu,
    Uu,
    Hu,
    mo = !1,
    Ni = [],
    Gt = null,
    Qt = null,
    Zt = null,
    Mr = new Map(),
    Ar = new Map(),
    qt = [],
    Rm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Wu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gt = null;
        break;
      case "dragenter":
      case "dragleave":
        Qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Mr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ar.delete(t.pointerId);
    }
  }
  function Dr(e, t, r, s, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: s,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = Wr(t)), t !== null && po(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Vm(e, t, r, s, l) {
    switch (t) {
      case "focusin":
        return (Gt = Dr(Gt, e, t, r, s, l)), !0;
      case "dragenter":
        return (Qt = Dr(Qt, e, t, r, s, l)), !0;
      case "mouseover":
        return (Zt = Dr(Zt, e, t, r, s, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return Mr.set(u, Dr(Mr.get(u) || null, e, t, r, s, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Ar.set(u, Dr(Ar.get(u) || null, e, t, r, s, l)), !0
        );
    }
    return !1;
  }
  function $u(e) {
    var t = wn(e.target);
    if (t !== null) {
      var r = vn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Du(r)), t !== null)) {
            (e.blockedOn = t),
              Hu(e.priority, function () {
                Bu(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ri(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        (ro = s), r.target.dispatchEvent(s), (ro = null);
      } else return (t = Wr(r)), t !== null && po(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Ku(e, t, r) {
    Ri(e) && r.delete(t);
  }
  function Lm() {
    (mo = !1),
      Gt !== null && Ri(Gt) && (Gt = null),
      Qt !== null && Ri(Qt) && (Qt = null),
      Zt !== null && Ri(Zt) && (Zt = null),
      Mr.forEach(Ku),
      Ar.forEach(Ku);
  }
  function Nr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      mo ||
        ((mo = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Lm)));
  }
  function Rr(e) {
    function t(l) {
      return Nr(l, e);
    }
    if (0 < Ni.length) {
      Nr(Ni[0], e);
      for (var r = 1; r < Ni.length; r++) {
        var s = Ni[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      Gt !== null && Nr(Gt, e),
        Qt !== null && Nr(Qt, e),
        Zt !== null && Nr(Zt, e),
        Mr.forEach(t),
        Ar.forEach(t),
        r = 0;
      r < qt.length;
      r++
    )
      (s = qt[r]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < qt.length && ((r = qt[0]), r.blockedOn === null); )
      $u(r), r.blockedOn === null && qt.shift();
  }
  var Bn = Z.ReactCurrentBatchConfig,
    Vi = !0;
  function jm(e, t, r, s) {
    var l = he,
      u = Bn.transition;
    Bn.transition = null;
    try {
      (he = 1), yo(e, t, r, s);
    } finally {
      (he = l), (Bn.transition = u);
    }
  }
  function _m(e, t, r, s) {
    var l = he,
      u = Bn.transition;
    Bn.transition = null;
    try {
      (he = 4), yo(e, t, r, s);
    } finally {
      (he = l), (Bn.transition = u);
    }
  }
  function yo(e, t, r, s) {
    if (Vi) {
      var l = go(e, t, r, s);
      if (l === null) jo(e, t, s, Li, r), Wu(e, s);
      else if (Vm(l, e, t, r, s)) s.stopPropagation();
      else if ((Wu(e, s), t & 4 && -1 < Rm.indexOf(e))) {
        for (; l !== null; ) {
          var u = Wr(l);
          if (
            (u !== null && Ou(u),
            (u = go(e, t, r, s)),
            u === null && jo(e, t, s, Li, r),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else jo(e, t, s, null, r);
    }
  }
  var Li = null;
  function go(e, t, r, s) {
    if (((Li = null), (e = io(s)), (e = wn(e)), e !== null))
      if (((t = vn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Du(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Li = e), null;
  }
  function Xu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Tm()) {
          case uo:
            return 1;
          case _u:
            return 4;
          case Ci:
          case km:
            return 16;
          case Fu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    vo = null,
    ji = null;
  function Yu() {
    if (ji) return ji;
    var e,
      t = vo,
      r = t.length,
      s,
      l = "value" in Jt ? Jt.value : Jt.textContent,
      u = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var h = r - e;
    for (s = 1; s <= h && t[r - s] === l[u - s]; s++);
    return (ji = l.slice(e, 1 < s ? 1 - s : void 0));
  }
  function _i(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fi() {
    return !0;
  }
  function Gu() {
    return !1;
  }
  function ut(e) {
    function t(r, s, l, u, h) {
      (this._reactName = r),
        (this._targetInst = l),
        (this.type = s),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((r = e[v]), (this[v] = r ? r(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Fi
          : Gu),
        (this.isPropagationStopped = Gu),
        this
      );
    }
    return (
      O(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Fi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Fi));
        },
        persist: function () {},
        isPersistent: Fi,
      }),
      t
    );
  }
  var Un = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wo = ut(Un),
    Vr = O({}, Un, { view: 0, detail: 0 }),
    Fm = ut(Vr),
    xo,
    So,
    Lr,
    zi = O({}, Vr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ko,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Lr &&
              (Lr && e.type === "mousemove"
                ? ((xo = e.screenX - Lr.screenX), (So = e.screenY - Lr.screenY))
                : (So = xo = 0),
              (Lr = e)),
            xo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : So;
      },
    }),
    Qu = ut(zi),
    zm = O({}, zi, { dataTransfer: 0 }),
    Im = ut(zm),
    Om = O({}, Vr, { relatedTarget: 0 }),
    To = ut(Om),
    Bm = O({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Um = ut(Bm),
    Hm = O({}, Un, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wm = ut(Hm),
    $m = O({}, Un, { data: 0 }),
    Zu = ut($m),
    Km = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Xm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ym = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Gm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ym[e])
      ? !!t[e]
      : !1;
  }
  function ko() {
    return Gm;
  }
  var Qm = O({}, Vr, {
      key: function (e) {
        if (e.key) {
          var t = Km[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = _i(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Xm[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ko,
      charCode: function (e) {
        return e.type === "keypress" ? _i(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? _i(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Zm = ut(Qm),
    qm = O({}, zi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    qu = ut(qm),
    Jm = O({}, Vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ko,
    }),
    bm = ut(Jm),
    ey = O({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ty = ut(ey),
    ny = O({}, zi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ry = ut(ny),
    iy = [9, 13, 27, 32],
    Po = p && "CompositionEvent" in window,
    jr = null;
  p && "documentMode" in document && (jr = document.documentMode);
  var sy = p && "TextEvent" in window && !jr,
    Ju = p && (!Po || (jr && 8 < jr && 11 >= jr)),
    bu = " ",
    ec = !1;
  function tc(e, t) {
    switch (e) {
      case "keyup":
        return iy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Hn = !1;
  function oy(e, t) {
    switch (e) {
      case "compositionend":
        return nc(t);
      case "keypress":
        return t.which !== 32 ? null : ((ec = !0), bu);
      case "textInput":
        return (e = t.data), e === bu && ec ? null : e;
      default:
        return null;
    }
  }
  function ly(e, t) {
    if (Hn)
      return e === "compositionend" || (!Po && tc(e, t))
        ? ((e = Yu()), (ji = vo = Jt = null), (Hn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ju && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ay = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ay[e.type] : t === "textarea";
  }
  function ic(e, t, r, s) {
    Pu(s),
      (t = Hi(t, "onChange")),
      0 < t.length &&
        ((r = new wo("onChange", "change", null, r, s)),
        e.push({ event: r, listeners: t }));
  }
  var _r = null,
    Fr = null;
  function uy(e) {
    Tc(e, 0);
  }
  function Ii(e) {
    var t = Yn(e);
    if (du(t)) return e;
  }
  function cy(e, t) {
    if (e === "change") return t;
  }
  var sc = !1;
  if (p) {
    var Co;
    if (p) {
      var Eo = "oninput" in document;
      if (!Eo) {
        var oc = document.createElement("div");
        oc.setAttribute("oninput", "return;"),
          (Eo = typeof oc.oninput == "function");
      }
      Co = Eo;
    } else Co = !1;
    sc = Co && (!document.documentMode || 9 < document.documentMode);
  }
  function lc() {
    _r && (_r.detachEvent("onpropertychange", ac), (Fr = _r = null));
  }
  function ac(e) {
    if (e.propertyName === "value" && Ii(Fr)) {
      var t = [];
      ic(t, Fr, e, io(e)), Au(uy, t);
    }
  }
  function fy(e, t, r) {
    e === "focusin"
      ? (lc(), (_r = t), (Fr = r), _r.attachEvent("onpropertychange", ac))
      : e === "focusout" && lc();
  }
  function dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ii(Fr);
  }
  function hy(e, t) {
    if (e === "click") return Ii(t);
  }
  function py(e, t) {
    if (e === "input" || e === "change") return Ii(t);
  }
  function my(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == "function" ? Object.is : my;
  function zr(e, t) {
    if (kt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var l = r[s];
      if (!m.call(t, l) || !kt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function uc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cc(e, t) {
    var r = uc(e);
    e = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (((s = e + r.textContent.length), e <= t && s >= t))
          return { node: r, offset: t - e };
        e = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = uc(r);
    }
  }
  function fc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? fc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function dc() {
    for (var e = window, t = Si(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Si(e.document);
    }
    return t;
  }
  function Mo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function yy(e) {
    var t = dc(),
      r = e.focusedElem,
      s = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      fc(r.ownerDocument.documentElement, r)
    ) {
      if (s !== null && Mo(r)) {
        if (
          ((t = s.start),
          (e = s.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = r.textContent.length,
            u = Math.min(s.start, l);
          (s = s.end === void 0 ? u : Math.min(s.end, l)),
            !e.extend && u > s && ((l = s), (s = u), (u = l)),
            (l = cc(r, u));
          var h = cc(r, s);
          l &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > s
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var gy = p && "documentMode" in document && 11 >= document.documentMode,
    Wn = null,
    Ao = null,
    Ir = null,
    Do = !1;
  function hc(e, t, r) {
    var s =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Do ||
      Wn == null ||
      Wn !== Si(s) ||
      ((s = Wn),
      "selectionStart" in s && Mo(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Ir && zr(Ir, s)) ||
        ((Ir = s),
        (s = Hi(Ao, "onSelect")),
        0 < s.length &&
          ((t = new wo("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: s }),
          (t.target = Wn))));
  }
  function Oi(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var $n = {
      animationend: Oi("Animation", "AnimationEnd"),
      animationiteration: Oi("Animation", "AnimationIteration"),
      animationstart: Oi("Animation", "AnimationStart"),
      transitionend: Oi("Transition", "TransitionEnd"),
    },
    No = {},
    pc = {};
  p &&
    ((pc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $n.animationend.animation,
      delete $n.animationiteration.animation,
      delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
  function Bi(e) {
    if (No[e]) return No[e];
    if (!$n[e]) return e;
    var t = $n[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in pc) return (No[e] = t[r]);
    return e;
  }
  var mc = Bi("animationend"),
    yc = Bi("animationiteration"),
    gc = Bi("animationstart"),
    vc = Bi("transitionend"),
    wc = new Map(),
    xc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function bt(e, t) {
    wc.set(e, t), d(t, [e]);
  }
  for (var Ro = 0; Ro < xc.length; Ro++) {
    var Vo = xc[Ro],
      vy = Vo.toLowerCase(),
      wy = Vo[0].toUpperCase() + Vo.slice(1);
    bt(vy, "on" + wy);
  }
  bt(mc, "onAnimationEnd"),
    bt(yc, "onAnimationIteration"),
    bt(gc, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(vc, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Or =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    xy = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Or)
    );
  function Sc(e, t, r) {
    var s = e.type || "unknown-event";
    (e.currentTarget = r), vm(s, t, void 0, e), (e.currentTarget = null);
  }
  function Tc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r],
        l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var h = s.length - 1; 0 <= h; h--) {
            var v = s[h],
              w = v.instance,
              E = v.currentTarget;
            if (((v = v.listener), w !== u && l.isPropagationStopped()))
              break e;
            Sc(l, v, E), (u = w);
          }
        else
          for (h = 0; h < s.length; h++) {
            if (
              ((v = s[h]),
              (w = v.instance),
              (E = v.currentTarget),
              (v = v.listener),
              w !== u && l.isPropagationStopped())
            )
              break e;
            Sc(l, v, E), (u = w);
          }
      }
    }
    if (Pi) throw ((e = ao), (Pi = !1), (ao = null), e);
  }
  function ve(e, t) {
    var r = t[Bo];
    r === void 0 && (r = t[Bo] = new Set());
    var s = e + "__bubble";
    r.has(s) || (kc(t, e, 2, !1), r.add(s));
  }
  function Lo(e, t, r) {
    var s = 0;
    t && (s |= 4), kc(r, e, s, t);
  }
  var Ui = "_reactListening" + Math.random().toString(36).slice(2);
  function Br(e) {
    if (!e[Ui]) {
      (e[Ui] = !0),
        a.forEach(function (r) {
          r !== "selectionchange" && (xy.has(r) || Lo(r, !1, e), Lo(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ui] || ((t[Ui] = !0), Lo("selectionchange", !1, t));
    }
  }
  function kc(e, t, r, s) {
    switch (Xu(t)) {
      case 1:
        var l = jm;
        break;
      case 4:
        l = _m;
        break;
      default:
        l = yo;
    }
    (r = l.bind(null, t, r, e)),
      (l = void 0),
      !lo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      s
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
        ? e.addEventListener(t, r, { passive: l })
        : e.addEventListener(t, r, !1);
  }
  function jo(e, t, r, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var h = s.tag;
        if (h === 3 || h === 4) {
          var v = s.stateNode.containerInfo;
          if (v === l || (v.nodeType === 8 && v.parentNode === l)) break;
          if (h === 4)
            for (h = s.return; h !== null; ) {
              var w = h.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = h.stateNode.containerInfo),
                w === l || (w.nodeType === 8 && w.parentNode === l))
              )
                return;
              h = h.return;
            }
          for (; v !== null; ) {
            if (((h = wn(v)), h === null)) return;
            if (((w = h.tag), w === 5 || w === 6)) {
              s = u = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        s = s.return;
      }
    Au(function () {
      var E = u,
        N = io(r),
        R = [];
      e: {
        var A = wc.get(e);
        if (A !== void 0) {
          var B = wo,
            $ = e;
          switch (e) {
            case "keypress":
              if (_i(r) === 0) break e;
            case "keydown":
            case "keyup":
              B = Zm;
              break;
            case "focusin":
              ($ = "focus"), (B = To);
              break;
            case "focusout":
              ($ = "blur"), (B = To);
              break;
            case "beforeblur":
            case "afterblur":
              B = To;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Qu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Im;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = bm;
              break;
            case mc:
            case yc:
            case gc:
              B = Um;
              break;
            case vc:
              B = ty;
              break;
            case "scroll":
              B = Fm;
              break;
            case "wheel":
              B = ry;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = Wm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = qu;
          }
          var K = (t & 4) !== 0,
            De = !K && e === "scroll",
            P = K ? (A !== null ? A + "Capture" : null) : A;
          K = [];
          for (var S = E, C; S !== null; ) {
            C = S;
            var j = C.stateNode;
            if (
              (C.tag === 5 &&
                j !== null &&
                ((C = j),
                P !== null &&
                  ((j = Tr(S, P)), j != null && K.push(Ur(S, j, C)))),
              De)
            )
              break;
            S = S.return;
          }
          0 < K.length &&
            ((A = new B(A, $, null, r, N)), R.push({ event: A, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((A = e === "mouseover" || e === "pointerover"),
            (B = e === "mouseout" || e === "pointerout"),
            A &&
              r !== ro &&
              ($ = r.relatedTarget || r.fromElement) &&
              (wn($) || $[It]))
          )
            break e;
          if (
            (B || A) &&
            ((A =
              N.window === N
                ? N
                : (A = N.ownerDocument)
                ? A.defaultView || A.parentWindow
                : window),
            B
              ? (($ = r.relatedTarget || r.toElement),
                (B = E),
                ($ = $ ? wn($) : null),
                $ !== null &&
                  ((De = vn($)), $ !== De || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((B = null), ($ = E)),
            B !== $)
          ) {
            if (
              ((K = Qu),
              (j = "onMouseLeave"),
              (P = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((K = qu),
                (j = "onPointerLeave"),
                (P = "onPointerEnter"),
                (S = "pointer")),
              (De = B == null ? A : Yn(B)),
              (C = $ == null ? A : Yn($)),
              (A = new K(j, S + "leave", B, r, N)),
              (A.target = De),
              (A.relatedTarget = C),
              (j = null),
              wn(N) === E &&
                ((K = new K(P, S + "enter", $, r, N)),
                (K.target = C),
                (K.relatedTarget = De),
                (j = K)),
              (De = j),
              B && $)
            )
              t: {
                for (K = B, P = $, S = 0, C = K; C; C = Kn(C)) S++;
                for (C = 0, j = P; j; j = Kn(j)) C++;
                for (; 0 < S - C; ) (K = Kn(K)), S--;
                for (; 0 < C - S; ) (P = Kn(P)), C--;
                for (; S--; ) {
                  if (K === P || (P !== null && K === P.alternate)) break t;
                  (K = Kn(K)), (P = Kn(P));
                }
                K = null;
              }
            else K = null;
            B !== null && Pc(R, A, B, K, !1),
              $ !== null && De !== null && Pc(R, De, $, K, !0);
          }
        }
        e: {
          if (
            ((A = E ? Yn(E) : window),
            (B = A.nodeName && A.nodeName.toLowerCase()),
            B === "select" || (B === "input" && A.type === "file"))
          )
            var Y = cy;
          else if (rc(A))
            if (sc) Y = py;
            else {
              Y = dy;
              var J = fy;
            }
          else
            (B = A.nodeName) &&
              B.toLowerCase() === "input" &&
              (A.type === "checkbox" || A.type === "radio") &&
              (Y = hy);
          if (Y && (Y = Y(e, E))) {
            ic(R, Y, r, N);
            break e;
          }
          J && J(e, A, E),
            e === "focusout" &&
              (J = A._wrapperState) &&
              J.controlled &&
              A.type === "number" &&
              Js(A, "number", A.value);
        }
        switch (((J = E ? Yn(E) : window), e)) {
          case "focusin":
            (rc(J) || J.contentEditable === "true") &&
              ((Wn = J), (Ao = E), (Ir = null));
            break;
          case "focusout":
            Ir = Ao = Wn = null;
            break;
          case "mousedown":
            Do = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Do = !1), hc(R, r, N);
            break;
          case "selectionchange":
            if (gy) break;
          case "keydown":
          case "keyup":
            hc(R, r, N);
        }
        var b;
        if (Po)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          Hn
            ? tc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (ne = "onCompositionStart");
        ne &&
          (Ju &&
            r.locale !== "ko" &&
            (Hn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Hn && (b = Yu())
              : ((Jt = N),
                (vo = "value" in Jt ? Jt.value : Jt.textContent),
                (Hn = !0))),
          (J = Hi(E, ne)),
          0 < J.length &&
            ((ne = new Zu(ne, e, null, r, N)),
            R.push({ event: ne, listeners: J }),
            b ? (ne.data = b) : ((b = nc(r)), b !== null && (ne.data = b)))),
          (b = sy ? oy(e, r) : ly(e, r)) &&
            ((E = Hi(E, "onBeforeInput")),
            0 < E.length &&
              ((N = new Zu("onBeforeInput", "beforeinput", null, r, N)),
              R.push({ event: N, listeners: E }),
              (N.data = b)));
      }
      Tc(R, t);
    });
  }
  function Ur(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Hi(e, t) {
    for (var r = t + "Capture", s = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Tr(e, r)),
        u != null && s.unshift(Ur(e, u, l)),
        (u = Tr(e, t)),
        u != null && s.push(Ur(e, u, l))),
        (e = e.return);
    }
    return s;
  }
  function Kn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Pc(e, t, r, s, l) {
    for (var u = t._reactName, h = []; r !== null && r !== s; ) {
      var v = r,
        w = v.alternate,
        E = v.stateNode;
      if (w !== null && w === s) break;
      v.tag === 5 &&
        E !== null &&
        ((v = E),
        l
          ? ((w = Tr(r, u)), w != null && h.unshift(Ur(r, w, v)))
          : l || ((w = Tr(r, u)), w != null && h.push(Ur(r, w, v)))),
        (r = r.return);
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Sy = /\r\n?/g,
    Ty = /\u0000|\uFFFD/g;
  function Cc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Sy,
        `
`
      )
      .replace(Ty, "");
  }
  function Wi(e, t, r) {
    if (((t = Cc(t)), Cc(e) !== t && r)) throw Error(o(425));
  }
  function $i() {}
  var _o = null,
    Fo = null;
  function zo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Io = typeof setTimeout == "function" ? setTimeout : void 0,
    ky = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ec = typeof Promise == "function" ? Promise : void 0,
    Py =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ec < "u"
        ? function (e) {
            return Ec.resolve(null).then(e).catch(Cy);
          }
        : Io;
  function Cy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Oo(e, t) {
    var r = t,
      s = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === "/$")) {
          if (s === 0) {
            e.removeChild(l), Rr(t);
            return;
          }
          s--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
      r = l;
    } while (r);
    Rr(t);
  }
  function en(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Mc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Xn = Math.random().toString(36).slice(2),
    Vt = "__reactFiber$" + Xn,
    Hr = "__reactProps$" + Xn,
    It = "__reactContainer$" + Xn,
    Bo = "__reactEvents$" + Xn,
    Ey = "__reactListeners$" + Xn,
    My = "__reactHandles$" + Xn;
  function wn(e) {
    var t = e[Vt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[It] || r[Vt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Mc(e); e !== null; ) {
            if ((r = e[Vt])) return r;
            e = Mc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Wr(e) {
    return (
      (e = e[Vt] || e[It]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ki(e) {
    return e[Hr] || null;
  }
  var Uo = [],
    Gn = -1;
  function tn(e) {
    return { current: e };
  }
  function we(e) {
    0 > Gn || ((e.current = Uo[Gn]), (Uo[Gn] = null), Gn--);
  }
  function ye(e, t) {
    Gn++, (Uo[Gn] = e.current), (e.current = t);
  }
  var nn = {},
    He = tn(nn),
    be = tn(!1),
    xn = nn;
  function Qn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return nn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in r) l[u] = t[u];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function et(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Xi() {
    we(be), we(He);
  }
  function Ac(e, t, r) {
    if (He.current !== nn) throw Error(o(168));
    ye(He, t), ye(be, r);
  }
  function Dc(e, t, r) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
      return r;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(o(108, me(e) || "Unknown", l));
    return O({}, r, s);
  }
  function Yi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        nn),
      (xn = He.current),
      ye(He, e),
      ye(be, be.current),
      !0
    );
  }
  function Nc(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    r
      ? ((e = Dc(e, t, xn)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        we(be),
        we(He),
        ye(He, e))
      : we(be),
      ye(be, r);
  }
  var Ot = null,
    Gi = !1,
    Ho = !1;
  function Rc(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function Ay(e) {
    (Gi = !0), Rc(e);
  }
  function rn() {
    if (!Ho && Ot !== null) {
      Ho = !0;
      var e = 0,
        t = he;
      try {
        var r = Ot;
        for (he = 1; e < r.length; e++) {
          var s = r[e];
          do s = s(!0);
          while (s !== null);
        }
        (Ot = null), (Gi = !1);
      } catch (l) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), Lu(uo, rn), l);
      } finally {
        (he = t), (Ho = !1);
      }
    }
    return null;
  }
  var Zn = [],
    qn = 0,
    Qi = null,
    Zi = 0,
    ht = [],
    pt = 0,
    Sn = null,
    Bt = 1,
    Ut = "";
  function Tn(e, t) {
    (Zn[qn++] = Zi), (Zn[qn++] = Qi), (Qi = e), (Zi = t);
  }
  function Vc(e, t, r) {
    (ht[pt++] = Bt), (ht[pt++] = Ut), (ht[pt++] = Sn), (Sn = e);
    var s = Bt;
    e = Ut;
    var l = 32 - Tt(s) - 1;
    (s &= ~(1 << l)), (r += 1);
    var u = 32 - Tt(t) + l;
    if (30 < u) {
      var h = l - (l % 5);
      (u = (s & ((1 << h) - 1)).toString(32)),
        (s >>= h),
        (l -= h),
        (Bt = (1 << (32 - Tt(t) + l)) | (r << l) | s),
        (Ut = u + e);
    } else (Bt = (1 << u) | (r << l) | s), (Ut = e);
  }
  function Wo(e) {
    e.return !== null && (Tn(e, 1), Vc(e, 1, 0));
  }
  function $o(e) {
    for (; e === Qi; )
      (Qi = Zn[--qn]), (Zn[qn] = null), (Zi = Zn[--qn]), (Zn[qn] = null);
    for (; e === Sn; )
      (Sn = ht[--pt]),
        (ht[pt] = null),
        (Ut = ht[--pt]),
        (ht[pt] = null),
        (Bt = ht[--pt]),
        (ht[pt] = null);
  }
  var ct = null,
    ft = null,
    Se = !1,
    Pt = null;
  function Lc(e, t) {
    var r = vt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function jc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ct = e), (ft = en(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (ft = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Sn !== null ? { id: Bt, overflow: Ut } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = vt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (ct = e),
              (ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ko(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Xo(e) {
    if (Se) {
      var t = ft;
      if (t) {
        var r = t;
        if (!jc(e, t)) {
          if (Ko(e)) throw Error(o(418));
          t = en(r.nextSibling);
          var s = ct;
          t && jc(e, t)
            ? Lc(s, r)
            : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (ct = e));
        }
      } else {
        if (Ko(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Se = !1), (ct = e);
      }
    }
  }
  function _c(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ct = e;
  }
  function qi(e) {
    if (e !== ct) return !1;
    if (!Se) return _c(e), (Se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps))),
      t && (t = ft))
    ) {
      if (Ko(e)) throw (Fc(), Error(o(418)));
      for (; t; ) Lc(e, t), (t = en(t.nextSibling));
    }
    if ((_c(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                ft = en(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = ct ? en(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fc() {
    for (var e = ft; e; ) e = en(e.nextSibling);
  }
  function Jn() {
    (ft = ct = null), (Se = !1);
  }
  function Yo(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var Dy = Z.ReactCurrentBatchConfig;
  function $r(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(o(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var l = s,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (h) {
              var v = l.refs;
              h === null ? delete v[u] : (v[u] = h);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!r._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ji(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function zc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ic(e) {
    function t(P, S) {
      if (e) {
        var C = P.deletions;
        C === null ? ((P.deletions = [S]), (P.flags |= 16)) : C.push(S);
      }
    }
    function r(P, S) {
      if (!e) return null;
      for (; S !== null; ) t(P, S), (S = S.sibling);
      return null;
    }
    function s(P, S) {
      for (P = new Map(); S !== null; )
        S.key !== null ? P.set(S.key, S) : P.set(S.index, S), (S = S.sibling);
      return P;
    }
    function l(P, S) {
      return (P = dn(P, S)), (P.index = 0), (P.sibling = null), P;
    }
    function u(P, S, C) {
      return (
        (P.index = C),
        e
          ? ((C = P.alternate),
            C !== null
              ? ((C = C.index), C < S ? ((P.flags |= 2), S) : C)
              : ((P.flags |= 2), S))
          : ((P.flags |= 1048576), S)
      );
    }
    function h(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function v(P, S, C, j) {
      return S === null || S.tag !== 6
        ? ((S = Il(C, P.mode, j)), (S.return = P), S)
        : ((S = l(S, C)), (S.return = P), S);
    }
    function w(P, S, C, j) {
      var Y = C.type;
      return Y === ee
        ? N(P, S, C.props.children, j, C.key)
        : S !== null &&
          (S.elementType === Y ||
            (typeof Y == "object" &&
              Y !== null &&
              Y.$$typeof === Ge &&
              zc(Y) === S.type))
        ? ((j = l(S, C.props)), (j.ref = $r(P, S, C)), (j.return = P), j)
        : ((j = Ts(C.type, C.key, C.props, null, P.mode, j)),
          (j.ref = $r(P, S, C)),
          (j.return = P),
          j);
    }
    function E(P, S, C, j) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== C.containerInfo ||
        S.stateNode.implementation !== C.implementation
        ? ((S = Ol(C, P.mode, j)), (S.return = P), S)
        : ((S = l(S, C.children || [])), (S.return = P), S);
    }
    function N(P, S, C, j, Y) {
      return S === null || S.tag !== 7
        ? ((S = Nn(C, P.mode, j, Y)), (S.return = P), S)
        : ((S = l(S, C)), (S.return = P), S);
    }
    function R(P, S, C) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = Il("" + S, P.mode, C)), (S.return = P), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case X:
            return (
              (C = Ts(S.type, S.key, S.props, null, P.mode, C)),
              (C.ref = $r(P, null, S)),
              (C.return = P),
              C
            );
          case q:
            return (S = Ol(S, P.mode, C)), (S.return = P), S;
          case Ge:
            var j = S._init;
            return R(P, j(S._payload), C);
        }
        if (wr(S) || G(S))
          return (S = Nn(S, P.mode, C, null)), (S.return = P), S;
        Ji(P, S);
      }
      return null;
    }
    function A(P, S, C, j) {
      var Y = S !== null ? S.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return Y !== null ? null : v(P, S, "" + C, j);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case X:
            return C.key === Y ? w(P, S, C, j) : null;
          case q:
            return C.key === Y ? E(P, S, C, j) : null;
          case Ge:
            return (Y = C._init), A(P, S, Y(C._payload), j);
        }
        if (wr(C) || G(C)) return Y !== null ? null : N(P, S, C, j, null);
        Ji(P, C);
      }
      return null;
    }
    function B(P, S, C, j, Y) {
      if ((typeof j == "string" && j !== "") || typeof j == "number")
        return (P = P.get(C) || null), v(S, P, "" + j, Y);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case X:
            return (
              (P = P.get(j.key === null ? C : j.key) || null), w(S, P, j, Y)
            );
          case q:
            return (
              (P = P.get(j.key === null ? C : j.key) || null), E(S, P, j, Y)
            );
          case Ge:
            var J = j._init;
            return B(P, S, C, J(j._payload), Y);
        }
        if (wr(j) || G(j)) return (P = P.get(C) || null), N(S, P, j, Y, null);
        Ji(S, j);
      }
      return null;
    }
    function $(P, S, C, j) {
      for (
        var Y = null, J = null, b = S, ne = (S = 0), ze = null;
        b !== null && ne < C.length;
        ne++
      ) {
        b.index > ne ? ((ze = b), (b = null)) : (ze = b.sibling);
        var fe = A(P, b, C[ne], j);
        if (fe === null) {
          b === null && (b = ze);
          break;
        }
        e && b && fe.alternate === null && t(P, b),
          (S = u(fe, S, ne)),
          J === null ? (Y = fe) : (J.sibling = fe),
          (J = fe),
          (b = ze);
      }
      if (ne === C.length) return r(P, b), Se && Tn(P, ne), Y;
      if (b === null) {
        for (; ne < C.length; ne++)
          (b = R(P, C[ne], j)),
            b !== null &&
              ((S = u(b, S, ne)),
              J === null ? (Y = b) : (J.sibling = b),
              (J = b));
        return Se && Tn(P, ne), Y;
      }
      for (b = s(P, b); ne < C.length; ne++)
        (ze = B(b, P, ne, C[ne], j)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              b.delete(ze.key === null ? ne : ze.key),
            (S = u(ze, S, ne)),
            J === null ? (Y = ze) : (J.sibling = ze),
            (J = ze));
      return (
        e &&
          b.forEach(function (hn) {
            return t(P, hn);
          }),
        Se && Tn(P, ne),
        Y
      );
    }
    function K(P, S, C, j) {
      var Y = G(C);
      if (typeof Y != "function") throw Error(o(150));
      if (((C = Y.call(C)), C == null)) throw Error(o(151));
      for (
        var J = (Y = null), b = S, ne = (S = 0), ze = null, fe = C.next();
        b !== null && !fe.done;
        ne++, fe = C.next()
      ) {
        b.index > ne ? ((ze = b), (b = null)) : (ze = b.sibling);
        var hn = A(P, b, fe.value, j);
        if (hn === null) {
          b === null && (b = ze);
          break;
        }
        e && b && hn.alternate === null && t(P, b),
          (S = u(hn, S, ne)),
          J === null ? (Y = hn) : (J.sibling = hn),
          (J = hn),
          (b = ze);
      }
      if (fe.done) return r(P, b), Se && Tn(P, ne), Y;
      if (b === null) {
        for (; !fe.done; ne++, fe = C.next())
          (fe = R(P, fe.value, j)),
            fe !== null &&
              ((S = u(fe, S, ne)),
              J === null ? (Y = fe) : (J.sibling = fe),
              (J = fe));
        return Se && Tn(P, ne), Y;
      }
      for (b = s(P, b); !fe.done; ne++, fe = C.next())
        (fe = B(b, P, ne, fe.value, j)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              b.delete(fe.key === null ? ne : fe.key),
            (S = u(fe, S, ne)),
            J === null ? (Y = fe) : (J.sibling = fe),
            (J = fe));
      return (
        e &&
          b.forEach(function (ag) {
            return t(P, ag);
          }),
        Se && Tn(P, ne),
        Y
      );
    }
    function De(P, S, C, j) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === ee &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case X:
            e: {
              for (var Y = C.key, J = S; J !== null; ) {
                if (J.key === Y) {
                  if (((Y = C.type), Y === ee)) {
                    if (J.tag === 7) {
                      r(P, J.sibling),
                        (S = l(J, C.props.children)),
                        (S.return = P),
                        (P = S);
                      break e;
                    }
                  } else if (
                    J.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === Ge &&
                      zc(Y) === J.type)
                  ) {
                    r(P, J.sibling),
                      (S = l(J, C.props)),
                      (S.ref = $r(P, J, C)),
                      (S.return = P),
                      (P = S);
                    break e;
                  }
                  r(P, J);
                  break;
                } else t(P, J);
                J = J.sibling;
              }
              C.type === ee
                ? ((S = Nn(C.props.children, P.mode, j, C.key)),
                  (S.return = P),
                  (P = S))
                : ((j = Ts(C.type, C.key, C.props, null, P.mode, j)),
                  (j.ref = $r(P, S, C)),
                  (j.return = P),
                  (P = j));
            }
            return h(P);
          case q:
            e: {
              for (J = C.key; S !== null; ) {
                if (S.key === J)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === C.containerInfo &&
                    S.stateNode.implementation === C.implementation
                  ) {
                    r(P, S.sibling),
                      (S = l(S, C.children || [])),
                      (S.return = P),
                      (P = S);
                    break e;
                  } else {
                    r(P, S);
                    break;
                  }
                else t(P, S);
                S = S.sibling;
              }
              (S = Ol(C, P.mode, j)), (S.return = P), (P = S);
            }
            return h(P);
          case Ge:
            return (J = C._init), De(P, S, J(C._payload), j);
        }
        if (wr(C)) return $(P, S, C, j);
        if (G(C)) return K(P, S, C, j);
        Ji(P, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          S !== null && S.tag === 6
            ? (r(P, S.sibling), (S = l(S, C)), (S.return = P), (P = S))
            : (r(P, S), (S = Il(C, P.mode, j)), (S.return = P), (P = S)),
          h(P))
        : r(P, S);
    }
    return De;
  }
  var bn = Ic(!0),
    Oc = Ic(!1),
    bi = tn(null),
    es = null,
    er = null,
    Go = null;
  function Qo() {
    Go = er = es = null;
  }
  function Zo(e) {
    var t = bi.current;
    we(bi), (e._currentValue = t);
  }
  function qo(e, t, r) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function tr(e, t) {
    (es = e),
      (Go = er = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (tt = !0), (e.firstContext = null));
  }
  function mt(e) {
    var t = e._currentValue;
    if (Go !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), er === null)) {
        if (es === null) throw Error(o(308));
        (er = e), (es.dependencies = { lanes: 0, firstContext: e });
      } else er = er.next = e;
    return t;
  }
  var kn = null;
  function Jo(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Bc(e, t, r, s) {
    var l = t.interleaved;
    return (
      l === null ? ((r.next = r), Jo(t)) : ((r.next = l.next), (l.next = r)),
      (t.interleaved = r),
      Ht(e, s)
    );
  }
  function Ht(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var sn = !1;
  function bo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Uc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Wt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function on(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (ae & 2) !== 0)) {
      var l = s.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (s.pending = t),
        Ht(e, r)
      );
    }
    return (
      (l = s.interleaved),
      l === null ? ((t.next = t), Jo(s)) : ((t.next = l.next), (l.next = t)),
      (s.interleaved = t),
      Ht(e, r)
    );
  }
  function ts(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), ho(e, r);
    }
  }
  function Hc(e, t) {
    var r = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), r === s)) {
      var l = null,
        u = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var h = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          u === null ? (l = u = h) : (u = u.next = h), (r = r.next);
        } while (r !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      (r = {
        baseState: s.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function ns(e, t, r, s) {
    var l = e.updateQueue;
    sn = !1;
    var u = l.firstBaseUpdate,
      h = l.lastBaseUpdate,
      v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var w = v,
        E = w.next;
      (w.next = null), h === null ? (u = E) : (h.next = E), (h = w);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (v = N.lastBaseUpdate),
        v !== h &&
          (v === null ? (N.firstBaseUpdate = E) : (v.next = E),
          (N.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var R = l.baseState;
      (h = 0), (N = E = w = null), (v = u);
      do {
        var A = v.lane,
          B = v.eventTime;
        if ((s & A) === A) {
          N !== null &&
            (N = N.next =
              {
                eventTime: B,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var $ = e,
              K = v;
            switch (((A = t), (B = r), K.tag)) {
              case 1:
                if ((($ = K.payload), typeof $ == "function")) {
                  R = $.call(B, R, A);
                  break e;
                }
                R = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = K.payload),
                  (A = typeof $ == "function" ? $.call(B, R, A) : $),
                  A == null)
                )
                  break e;
                R = O({}, R, A);
                break e;
              case 2:
                sn = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64),
            (A = l.effects),
            A === null ? (l.effects = [v]) : A.push(v));
        } else
          (B = {
            eventTime: B,
            lane: A,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            N === null ? ((E = N = B), (w = R)) : (N = N.next = B),
            (h |= A);
        if (((v = v.next), v === null)) {
          if (((v = l.shared.pending), v === null)) break;
          (A = v),
            (v = A.next),
            (A.next = null),
            (l.lastBaseUpdate = A),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (N === null && (w = R),
        (l.baseState = w),
        (l.firstBaseUpdate = E),
        (l.lastBaseUpdate = N),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (h |= l.lane), (l = l.next);
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      (En |= h), (e.lanes = h), (e.memoizedState = R);
    }
  }
  function Wc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          l = s.callback;
        if (l !== null) {
          if (((s.callback = null), (s = r), typeof l != "function"))
            throw Error(o(191, l));
          l.call(s);
        }
      }
  }
  var Kr = {},
    Lt = tn(Kr),
    Xr = tn(Kr),
    Yr = tn(Kr);
  function Pn(e) {
    if (e === Kr) throw Error(o(174));
    return e;
  }
  function el(e, t) {
    switch ((ye(Yr, t), ye(Xr, e), ye(Lt, Kr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : eo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = eo(t, e));
    }
    we(Lt), ye(Lt, t);
  }
  function nr() {
    we(Lt), we(Xr), we(Yr);
  }
  function $c(e) {
    Pn(Yr.current);
    var t = Pn(Lt.current),
      r = eo(t, e.type);
    t !== r && (ye(Xr, e), ye(Lt, r));
  }
  function tl(e) {
    Xr.current === e && (we(Lt), we(Xr));
  }
  var ke = tn(0);
  function rs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var nl = [];
  function rl() {
    for (var e = 0; e < nl.length; e++)
      nl[e]._workInProgressVersionPrimary = null;
    nl.length = 0;
  }
  var is = Z.ReactCurrentDispatcher,
    il = Z.ReactCurrentBatchConfig,
    Cn = 0,
    Pe = null,
    Ve = null,
    _e = null,
    ss = !1,
    Gr = !1,
    Qr = 0,
    Ny = 0;
  function We() {
    throw Error(o(321));
  }
  function sl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!kt(e[r], t[r])) return !1;
    return !0;
  }
  function ol(e, t, r, s, l, u) {
    if (
      ((Cn = u),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (is.current = e === null || e.memoizedState === null ? jy : _y),
      (e = r(s, l)),
      Gr)
    ) {
      u = 0;
      do {
        if (((Gr = !1), (Qr = 0), 25 <= u)) throw Error(o(301));
        (u += 1),
          (_e = Ve = null),
          (t.updateQueue = null),
          (is.current = Fy),
          (e = r(s, l));
      } while (Gr);
    }
    if (
      ((is.current = as),
      (t = Ve !== null && Ve.next !== null),
      (Cn = 0),
      (_e = Ve = Pe = null),
      (ss = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function ll() {
    var e = Qr !== 0;
    return (Qr = 0), e;
  }
  function jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return _e === null ? (Pe.memoizedState = _e = e) : (_e = _e.next = e), _e;
  }
  function yt() {
    if (Ve === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = _e === null ? Pe.memoizedState : _e.next;
    if (t !== null) (_e = t), (Ve = e);
    else {
      if (e === null) throw Error(o(310));
      (Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        _e === null ? (Pe.memoizedState = _e = e) : (_e = _e.next = e);
    }
    return _e;
  }
  function Zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function al(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var s = Ve,
      l = s.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (l !== null) {
        var h = l.next;
        (l.next = u.next), (u.next = h);
      }
      (s.baseQueue = l = u), (r.pending = null);
    }
    if (l !== null) {
      (u = l.next), (s = s.baseState);
      var v = (h = null),
        w = null,
        E = u;
      do {
        var N = E.lane;
        if ((Cn & N) === N)
          w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null,
              }),
            (s = E.hasEagerState ? E.eagerState : e(s, E.action));
        else {
          var R = {
            lane: N,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          };
          w === null ? ((v = w = R), (h = s)) : (w = w.next = R),
            (Pe.lanes |= N),
            (En |= N);
        }
        E = E.next;
      } while (E !== null && E !== u);
      w === null ? (h = s) : (w.next = v),
        kt(s, t.memoizedState) || (tt = !0),
        (t.memoizedState = s),
        (t.baseState = h),
        (t.baseQueue = w),
        (r.lastRenderedState = s);
    }
    if (((e = r.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (Pe.lanes |= u), (En |= u), (l = l.next);
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ul(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch,
      l = r.pending,
      u = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var h = (l = l.next);
      do (u = e(u, h.action)), (h = h.next);
      while (h !== l);
      kt(u, t.memoizedState) || (tt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u);
    }
    return [u, s];
  }
  function Kc() {}
  function Xc(e, t) {
    var r = Pe,
      s = yt(),
      l = t(),
      u = !kt(s.memoizedState, l);
    if (
      (u && ((s.memoizedState = l), (tt = !0)),
      (s = s.queue),
      cl(Qc.bind(null, r, s, e), [e]),
      s.getSnapshot !== t || u || (_e !== null && _e.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        qr(9, Gc.bind(null, r, s, l, t), void 0, null),
        Fe === null)
      )
        throw Error(o(349));
      (Cn & 30) !== 0 || Yc(r, t, l);
    }
    return l;
  }
  function Yc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Gc(e, t, r, s) {
    (t.value = r), (t.getSnapshot = s), Zc(t) && qc(e);
  }
  function Qc(e, t, r) {
    return r(function () {
      Zc(t) && qc(e);
    });
  }
  function Zc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !kt(e, r);
    } catch {
      return !0;
    }
  }
  function qc(e) {
    var t = Ht(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function Jc(e) {
    var t = jt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ly.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function qr(e, t, r, s) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function bc() {
    return yt().memoizedState;
  }
  function os(e, t, r, s) {
    var l = jt();
    (Pe.flags |= e),
      (l.memoizedState = qr(1 | t, r, void 0, s === void 0 ? null : s));
  }
  function ls(e, t, r, s) {
    var l = yt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if (Ve !== null) {
      var h = Ve.memoizedState;
      if (((u = h.destroy), s !== null && sl(s, h.deps))) {
        l.memoizedState = qr(t, r, u, s);
        return;
      }
    }
    (Pe.flags |= e), (l.memoizedState = qr(1 | t, r, u, s));
  }
  function ef(e, t) {
    return os(8390656, 8, e, t);
  }
  function cl(e, t) {
    return ls(2048, 8, e, t);
  }
  function tf(e, t) {
    return ls(4, 2, e, t);
  }
  function nf(e, t) {
    return ls(4, 4, e, t);
  }
  function rf(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function sf(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), ls(4, 4, rf.bind(null, t, e), r)
    );
  }
  function fl() {}
  function of(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && sl(t, s[1])
      ? s[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function lf(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && sl(t, s[1])
      ? s[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function af(e, t, r) {
    return (Cn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = r))
      : (kt(r, t) ||
          ((r = zu()), (Pe.lanes |= r), (En |= r), (e.baseState = !0)),
        t);
  }
  function Ry(e, t) {
    var r = he;
    (he = r !== 0 && 4 > r ? r : 4), e(!0);
    var s = il.transition;
    il.transition = {};
    try {
      e(!1), t();
    } finally {
      (he = r), (il.transition = s);
    }
  }
  function uf() {
    return yt().memoizedState;
  }
  function Vy(e, t, r) {
    var s = cn(e);
    if (
      ((r = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cf(e))
    )
      ff(t, r);
    else if (((r = Bc(e, t, r, s)), r !== null)) {
      var l = Ze();
      At(r, e, s, l), df(r, t, s);
    }
  }
  function Ly(e, t, r) {
    var s = cn(e),
      l = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (cf(e)) ff(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var h = t.lastRenderedState,
            v = u(h, r);
          if (((l.hasEagerState = !0), (l.eagerState = v), kt(v, h))) {
            var w = t.interleaved;
            w === null
              ? ((l.next = l), Jo(t))
              : ((l.next = w.next), (w.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (r = Bc(e, t, l, s)),
        r !== null && ((l = Ze()), At(r, e, s, l), df(r, t, s));
    }
  }
  function cf(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function ff(e, t) {
    Gr = ss = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function df(e, t, r) {
    if ((r & 4194240) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), ho(e, r);
    }
  }
  var as = {
      readContext: mt,
      useCallback: We,
      useContext: We,
      useEffect: We,
      useImperativeHandle: We,
      useInsertionEffect: We,
      useLayoutEffect: We,
      useMemo: We,
      useReducer: We,
      useRef: We,
      useState: We,
      useDebugValue: We,
      useDeferredValue: We,
      useTransition: We,
      useMutableSource: We,
      useSyncExternalStore: We,
      useId: We,
      unstable_isNewReconciler: !1,
    },
    jy = {
      readContext: mt,
      useCallback: function (e, t) {
        return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: mt,
      useEffect: ef,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          os(4194308, 4, rf.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return os(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return os(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = jt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var s = jt();
        return (
          (t = r !== void 0 ? r(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = Vy.bind(null, Pe, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Jc,
      useDebugValue: fl,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = Jc(!1),
          t = e[0];
        return (e = Ry.bind(null, e[1])), (jt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var s = Pe,
          l = jt();
        if (Se) {
          if (r === void 0) throw Error(o(407));
          r = r();
        } else {
          if (((r = t()), Fe === null)) throw Error(o(349));
          (Cn & 30) !== 0 || Yc(s, t, r);
        }
        l.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (l.queue = u),
          ef(Qc.bind(null, s, u, e), [e]),
          (s.flags |= 2048),
          qr(9, Gc.bind(null, s, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = jt(),
          t = Fe.identifierPrefix;
        if (Se) {
          var r = Ut,
            s = Bt;
          (r = (s & ~(1 << (32 - Tt(s) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Qr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Ny++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    _y = {
      readContext: mt,
      useCallback: of,
      useContext: mt,
      useEffect: cl,
      useImperativeHandle: sf,
      useInsertionEffect: tf,
      useLayoutEffect: nf,
      useMemo: lf,
      useReducer: al,
      useRef: bc,
      useState: function () {
        return al(Zr);
      },
      useDebugValue: fl,
      useDeferredValue: function (e) {
        var t = yt();
        return af(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = al(Zr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Kc,
      useSyncExternalStore: Xc,
      useId: uf,
      unstable_isNewReconciler: !1,
    },
    Fy = {
      readContext: mt,
      useCallback: of,
      useContext: mt,
      useEffect: cl,
      useImperativeHandle: sf,
      useInsertionEffect: tf,
      useLayoutEffect: nf,
      useMemo: lf,
      useReducer: ul,
      useRef: bc,
      useState: function () {
        return ul(Zr);
      },
      useDebugValue: fl,
      useDeferredValue: function (e) {
        var t = yt();
        return Ve === null ? (t.memoizedState = e) : af(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = ul(Zr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Kc,
      useSyncExternalStore: Xc,
      useId: uf,
      unstable_isNewReconciler: !1,
    };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      (t = O({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function dl(e, t, r, s) {
    (t = e.memoizedState),
      (r = r(s, t)),
      (r = r == null ? t : O({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var us = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var s = Ze(),
        l = cn(e),
        u = Wt(s, l);
      (u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, l)),
        t !== null && (At(t, e, l, s), ts(t, e, l));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var s = Ze(),
        l = cn(e),
        u = Wt(s, l);
      (u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = on(e, u, l)),
        t !== null && (At(t, e, l, s), ts(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ze(),
        s = cn(e),
        l = Wt(r, s);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = on(e, l, s)),
        t !== null && (At(t, e, s, r), ts(t, e, s));
    },
  };
  function hf(e, t, r, s, l, u, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, u, h)
        : t.prototype && t.prototype.isPureReactComponent
        ? !zr(r, s) || !zr(l, u)
        : !0
    );
  }
  function pf(e, t, r) {
    var s = !1,
      l = nn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = mt(u))
        : ((l = et(t) ? xn : He.current),
          (s = t.contextTypes),
          (u = (s = s != null) ? Qn(e, l) : nn)),
      (t = new t(r, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = us),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function mf(e, t, r, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, s),
      t.state !== e && us.enqueueReplaceState(t, t.state, null);
  }
  function hl(e, t, r, s) {
    var l = e.stateNode;
    (l.props = r), (l.state = e.memoizedState), (l.refs = {}), bo(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (l.context = mt(u))
      : ((u = et(t) ? xn : He.current), (l.context = Qn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (dl(e, t, u, r), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && us.enqueueReplaceState(l, l.state, null),
        ns(e, r, l, s),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function rr(e, t) {
    try {
      var r = "",
        s = t;
      do (r += ue(s)), (s = s.return);
      while (s);
      var l = r;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function pl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ml(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var zy = typeof WeakMap == "function" ? WeakMap : Map;
  function yf(e, t, r) {
    (r = Wt(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var s = t.value;
    return (
      (r.callback = function () {
        ys || ((ys = !0), (Nl = s)), ml(e, t);
      }),
      r
    );
  }
  function gf(e, t, r) {
    (r = Wt(-1, r)), (r.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      (r.payload = function () {
        return s(l);
      }),
        (r.callback = function () {
          ml(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          ml(e, t),
            typeof s != "function" &&
              (an === null ? (an = new Set([this])) : an.add(this));
          var h = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: h !== null ? h : "",
          });
        }),
      r
    );
  }
  function vf(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new zy();
      var l = new Set();
      s.set(t, l);
    } else (l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l));
    l.has(r) || (l.add(r), (e = qy.bind(null, e, t, r)), t.then(e, e));
  }
  function wf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function xf(e, t, r, s, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Wt(-1, 1)), (t.tag = 2), on(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Iy = Z.ReactCurrentOwner,
    tt = !1;
  function Qe(e, t, r, s) {
    t.child = e === null ? Oc(t, null, r, s) : bn(t, e.child, r, s);
  }
  function Sf(e, t, r, s, l) {
    r = r.render;
    var u = t.ref;
    return (
      tr(t, l),
      (s = ol(e, t, r, s, u, l)),
      (r = ll()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          $t(e, t, l))
        : (Se && r && Wo(t), (t.flags |= 1), Qe(e, t, s, l), t.child)
    );
  }
  function Tf(e, t, r, s, l) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !zl(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), kf(e, t, u, s, l))
        : ((e = Ts(r.type, null, s, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var h = u.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : zr), r(h, s) && e.ref === t.ref)
      )
        return $t(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = dn(u, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function kf(e, t, r, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (zr(u, s) && e.ref === t.ref)
        if (((tt = !1), (t.pendingProps = s = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (tt = !0);
        else return (t.lanes = e.lanes), $t(e, t, l);
    }
    return yl(e, t, r, s, l);
  }
  function Pf(e, t, r) {
    var s = t.pendingProps,
      l = s.children,
      u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ye(sr, dt),
          (dt |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ye(sr, dt),
            (dt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (s = u !== null ? u.baseLanes : r),
          ye(sr, dt),
          (dt |= s);
      }
    else
      u !== null ? ((s = u.baseLanes | r), (t.memoizedState = null)) : (s = r),
        ye(sr, dt),
        (dt |= s);
    return Qe(e, t, l, r), t.child;
  }
  function Cf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function yl(e, t, r, s, l) {
    var u = et(r) ? xn : He.current;
    return (
      (u = Qn(t, u)),
      tr(t, l),
      (r = ol(e, t, r, s, u, l)),
      (s = ll()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          $t(e, t, l))
        : (Se && s && Wo(t), (t.flags |= 1), Qe(e, t, r, l), t.child)
    );
  }
  function Ef(e, t, r, s, l) {
    if (et(r)) {
      var u = !0;
      Yi(t);
    } else u = !1;
    if ((tr(t, l), t.stateNode === null))
      fs(e, t), pf(t, r, s), hl(t, r, s, l), (s = !0);
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var w = h.context,
        E = r.contextType;
      typeof E == "object" && E !== null
        ? (E = mt(E))
        : ((E = et(r) ? xn : He.current), (E = Qn(t, E)));
      var N = r.getDerivedStateFromProps,
        R =
          typeof N == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function";
      R ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== s || w !== E) && mf(t, h, s, E)),
        (sn = !1);
      var A = t.memoizedState;
      (h.state = A),
        ns(t, s, h, l),
        (w = t.memoizedState),
        v !== s || A !== w || be.current || sn
          ? (typeof N == "function" && (dl(t, r, N, s), (w = t.memoizedState)),
            (v = sn || hf(t, r, v, s, A, w, E))
              ? (R ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = w)),
            (h.props = s),
            (h.state = w),
            (h.context = E),
            (s = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (s = !1));
    } else {
      (h = t.stateNode),
        Uc(e, t),
        (v = t.memoizedProps),
        (E = t.type === t.elementType ? v : Ct(t.type, v)),
        (h.props = E),
        (R = t.pendingProps),
        (A = h.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = mt(w))
          : ((w = et(r) ? xn : He.current), (w = Qn(t, w)));
      var B = r.getDerivedStateFromProps;
      (N =
        typeof B == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== R || A !== w) && mf(t, h, s, w)),
        (sn = !1),
        (A = t.memoizedState),
        (h.state = A),
        ns(t, s, h, l);
      var $ = t.memoizedState;
      v !== R || A !== $ || be.current || sn
        ? (typeof B == "function" && (dl(t, r, B, s), ($ = t.memoizedState)),
          (E = sn || hf(t, r, E, s, A, $, w) || !1)
            ? (N ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(s, $, w),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(s, $, w)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = $)),
          (h.props = s),
          (h.state = $),
          (h.context = w),
          (s = E))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return gl(e, t, r, s, u, l);
  }
  function gl(e, t, r, s, l, u) {
    Cf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!s && !h) return l && Nc(t, r, !1), $t(e, t, u);
    (s = t.stateNode), (Iy.current = t);
    var v =
      h && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = bn(t, e.child, null, u)), (t.child = bn(t, null, v, u)))
        : Qe(e, t, v, u),
      (t.memoizedState = s.state),
      l && Nc(t, r, !0),
      t.child
    );
  }
  function Mf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ac(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ac(e, t.context, !1),
      el(e, t.containerInfo);
  }
  function Af(e, t, r, s, l) {
    return Jn(), Yo(l), (t.flags |= 256), Qe(e, t, r, s), t.child;
  }
  var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function wl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Df(e, t, r) {
    var s = t.pendingProps,
      l = ke.current,
      u = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) ||
        (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      v
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ye(ke, l & 1),
      e === null)
    )
      return (
        Xo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((h = s.children),
            (e = s.fallback),
            u
              ? ((s = t.mode),
                (u = t.child),
                (h = { mode: "hidden", children: h }),
                (s & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = h))
                  : (u = ks(h, s, 0, null)),
                (e = Nn(e, s, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = wl(r)),
                (t.memoizedState = vl),
                e)
              : xl(t, h))
      );
    if (((l = e.memoizedState), l !== null && ((v = l.dehydrated), v !== null)))
      return Oy(e, t, h, s, v, l, r);
    if (u) {
      (u = s.fallback), (h = t.mode), (l = e.child), (v = l.sibling);
      var w = { mode: "hidden", children: s.children };
      return (
        (h & 1) === 0 && t.child !== l
          ? ((s = t.child),
            (s.childLanes = 0),
            (s.pendingProps = w),
            (t.deletions = null))
          : ((s = dn(l, w)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
        v !== null ? (u = dn(v, u)) : ((u = Nn(u, h, r, null)), (u.flags |= 2)),
        (u.return = t),
        (s.return = t),
        (s.sibling = u),
        (t.child = s),
        (s = u),
        (u = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? wl(r)
            : {
                baseLanes: h.baseLanes | r,
                cachePool: null,
                transitions: h.transitions,
              }),
        (u.memoizedState = h),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = vl),
        s
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (s = dn(u, { mode: "visible", children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = r),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function xl(e, t) {
    return (
      (t = ks({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cs(e, t, r, s) {
    return (
      s !== null && Yo(s),
      bn(t, e.child, null, r),
      (e = xl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Oy(e, t, r, s, l, u, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (s = pl(Error(o(422)))), cs(e, t, h, s))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = s.fallback),
          (l = t.mode),
          (s = ks({ mode: "visible", children: s.children }, l, 0, null)),
          (u = Nn(u, l, h, null)),
          (u.flags |= 2),
          (s.return = t),
          (u.return = t),
          (s.sibling = u),
          (t.child = s),
          (t.mode & 1) !== 0 && bn(t, e.child, null, h),
          (t.child.memoizedState = wl(h)),
          (t.memoizedState = vl),
          u);
    if ((t.mode & 1) === 0) return cs(e, t, h, null);
    if (l.data === "$!") {
      if (((s = l.nextSibling && l.nextSibling.dataset), s)) var v = s.dgst;
      return (
        (s = v), (u = Error(o(419))), (s = pl(u, s, void 0)), cs(e, t, h, s)
      );
    }
    if (((v = (h & e.childLanes) !== 0), tt || v)) {
      if (((s = Fe), s !== null)) {
        switch (h & -h) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (s.suspendedLanes | h)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), Ht(e, l), At(s, e, l, -1));
      }
      return Fl(), (s = pl(Error(o(421)))), cs(e, t, h, s);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Jy.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (ft = en(l.nextSibling)),
        (ct = t),
        (Se = !0),
        (Pt = null),
        e !== null &&
          ((ht[pt++] = Bt),
          (ht[pt++] = Ut),
          (ht[pt++] = Sn),
          (Bt = e.id),
          (Ut = e.overflow),
          (Sn = t)),
        (t = xl(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function Nf(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), qo(e.return, t, r);
  }
  function Sl(e, t, r, s, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: r,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = s),
        (u.tail = r),
        (u.tailMode = l));
  }
  function Rf(e, t, r) {
    var s = t.pendingProps,
      l = s.revealOrder,
      u = s.tail;
    if ((Qe(e, t, s.children, r), (s = ke.current), (s & 2) !== 0))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Nf(e, r, t);
          else if (e.tag === 19) Nf(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      s &= 1;
    }
    if ((ye(ke, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (r = t.child, l = null; r !== null; )
            (e = r.alternate),
              e !== null && rs(e) === null && (l = r),
              (r = r.sibling);
          (r = l),
            r === null
              ? ((l = t.child), (t.child = null))
              : ((l = r.sibling), (r.sibling = null)),
            Sl(t, !1, l, r, u);
          break;
        case "backwards":
          for (r = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && rs(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = r), (r = l), (l = e);
          }
          Sl(t, !0, r, null, u);
          break;
        case "together":
          Sl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fs(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $t(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (En |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, r = dn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = dn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function By(e, t, r) {
    switch (t.tag) {
      case 3:
        Mf(t), Jn();
        break;
      case 5:
        $c(t);
        break;
      case 1:
        et(t.type) && Yi(t);
        break;
      case 4:
        el(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          l = t.memoizedProps.value;
        ye(bi, s._currentValue), (s._currentValue = l);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (ye(ke, ke.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? Df(e, t, r)
            : (ye(ke, ke.current & 1),
              (e = $t(e, t, r)),
              e !== null ? e.sibling : null);
        ye(ke, ke.current & 1);
        break;
      case 19:
        if (((s = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return Rf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ye(ke, ke.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Pf(e, t, r);
    }
    return $t(e, t, r);
  }
  var Vf, Tl, Lf, jf;
  (Vf = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Tl = function () {}),
    (Lf = function (e, t, r, s) {
      var l = e.memoizedProps;
      if (l !== s) {
        (e = t.stateNode), Pn(Lt.current);
        var u = null;
        switch (r) {
          case "input":
            (l = Zs(e, l)), (s = Zs(e, s)), (u = []);
            break;
          case "select":
            (l = O({}, l, { value: void 0 })),
              (s = O({}, s, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = bs(e, l)), (s = bs(e, s)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof s.onClick == "function" &&
              (e.onclick = $i);
        }
        to(r, s);
        var h;
        r = null;
        for (E in l)
          if (!s.hasOwnProperty(E) && l.hasOwnProperty(E) && l[E] != null)
            if (E === "style") {
              var v = l[E];
              for (h in v) v.hasOwnProperty(h) && (r || (r = {}), (r[h] = ""));
            } else
              E !== "dangerouslySetInnerHTML" &&
                E !== "children" &&
                E !== "suppressContentEditableWarning" &&
                E !== "suppressHydrationWarning" &&
                E !== "autoFocus" &&
                (c.hasOwnProperty(E)
                  ? u || (u = [])
                  : (u = u || []).push(E, null));
        for (E in s) {
          var w = s[E];
          if (
            ((v = l?.[E]),
            s.hasOwnProperty(E) && w !== v && (w != null || v != null))
          )
            if (E === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (w && w.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ""));
                for (h in w)
                  w.hasOwnProperty(h) &&
                    v[h] !== w[h] &&
                    (r || (r = {}), (r[h] = w[h]));
              } else r || (u || (u = []), u.push(E, r)), (r = w);
            else
              E === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (v = v ? v.__html : void 0),
                  w != null && v !== w && (u = u || []).push(E, w))
                : E === "children"
                ? (typeof w != "string" && typeof w != "number") ||
                  (u = u || []).push(E, "" + w)
                : E !== "suppressContentEditableWarning" &&
                  E !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(E)
                    ? (w != null && E === "onScroll" && ve("scroll", e),
                      u || v === w || (u = []))
                    : (u = u || []).push(E, w));
        }
        r && (u = u || []).push("style", r);
        var E = u;
        (t.updateQueue = E) && (t.flags |= 4);
      }
    }),
    (jf = function (e, t, r, s) {
      r !== s && (t.flags |= 4);
    });
  function Jr(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      s = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags & 14680064),
          (s |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags),
          (s |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = r), t;
  }
  function Uy(e, t, r) {
    var s = t.pendingProps;
    switch (($o(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $e(t), null;
      case 1:
        return et(t.type) && Xi(), $e(t), null;
      case 3:
        return (
          (s = t.stateNode),
          nr(),
          we(be),
          we(He),
          rl(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (qi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (Ll(Pt), (Pt = null)))),
          Tl(e, t),
          $e(t),
          null
        );
      case 5:
        tl(t);
        var l = Pn(Yr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          Lf(e, t, r, s, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return $e(t), null;
          }
          if (((e = Pn(Lt.current)), qi(t))) {
            (s = t.stateNode), (r = t.type);
            var u = t.memoizedProps;
            switch (((s[Vt] = t), (s[Hr] = u), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                ve("cancel", s), ve("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Or.length; l++) ve(Or[l], s);
                break;
              case "source":
                ve("error", s);
                break;
              case "img":
              case "image":
              case "link":
                ve("error", s), ve("load", s);
                break;
              case "details":
                ve("toggle", s);
                break;
              case "input":
                hu(s, u), ve("invalid", s);
                break;
              case "select":
                (s._wrapperState = { wasMultiple: !!u.multiple }),
                  ve("invalid", s);
                break;
              case "textarea":
                yu(s, u), ve("invalid", s);
            }
            to(r, u), (l = null);
            for (var h in u)
              if (u.hasOwnProperty(h)) {
                var v = u[h];
                h === "children"
                  ? typeof v == "string"
                    ? s.textContent !== v &&
                      (u.suppressHydrationWarning !== !0 &&
                        Wi(s.textContent, v, e),
                      (l = ["children", v]))
                    : typeof v == "number" &&
                      s.textContent !== "" + v &&
                      (u.suppressHydrationWarning !== !0 &&
                        Wi(s.textContent, v, e),
                      (l = ["children", "" + v]))
                  : c.hasOwnProperty(h) &&
                    v != null &&
                    h === "onScroll" &&
                    ve("scroll", s);
              }
            switch (r) {
              case "input":
                xi(s), mu(s, u, !0);
                break;
              case "textarea":
                xi(s), vu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = $i);
            }
            (s = l), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (h = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = wu(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                  ? (e = h.createElement(r, { is: s.is }))
                  : ((e = h.createElement(r)),
                    r === "select" &&
                      ((h = e),
                      s.multiple
                        ? (h.multiple = !0)
                        : s.size && (h.size = s.size)))
                : (e = h.createElementNS(e, r)),
              (e[Vt] = t),
              (e[Hr] = s),
              Vf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((h = no(r, s)), r)) {
                case "dialog":
                  ve("cancel", e), ve("close", e), (l = s);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ve("load", e), (l = s);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Or.length; l++) ve(Or[l], e);
                  l = s;
                  break;
                case "source":
                  ve("error", e), (l = s);
                  break;
                case "img":
                case "image":
                case "link":
                  ve("error", e), ve("load", e), (l = s);
                  break;
                case "details":
                  ve("toggle", e), (l = s);
                  break;
                case "input":
                  hu(e, s), (l = Zs(e, s)), ve("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (l = O({}, s, { value: void 0 })),
                    ve("invalid", e);
                  break;
                case "textarea":
                  yu(e, s), (l = bs(e, s)), ve("invalid", e);
                  break;
                default:
                  l = s;
              }
              to(r, l), (v = l);
              for (u in v)
                if (v.hasOwnProperty(u)) {
                  var w = v[u];
                  u === "style"
                    ? Tu(e, w)
                    : u === "dangerouslySetInnerHTML"
                    ? ((w = w ? w.__html : void 0), w != null && xu(e, w))
                    : u === "children"
                    ? typeof w == "string"
                      ? (r !== "textarea" || w !== "") && xr(e, w)
                      : typeof w == "number" && xr(e, "" + w)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (c.hasOwnProperty(u)
                        ? w != null && u === "onScroll" && ve("scroll", e)
                        : w != null && I(e, u, w, h));
                }
              switch (r) {
                case "input":
                  xi(e), mu(e, s, !1);
                  break;
                case "textarea":
                  xi(e), vu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + de(s.value));
                  break;
                case "select":
                  (e.multiple = !!s.multiple),
                    (u = s.value),
                    u != null
                      ? zn(e, !!s.multiple, u, !1)
                      : s.defaultValue != null &&
                        zn(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $i);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return $e(t), null;
      case 6:
        if (e && t.stateNode != null) jf(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (((r = Pn(Yr.current)), Pn(Lt.current), qi(t))) {
            if (
              ((s = t.stateNode),
              (r = t.memoizedProps),
              (s[Vt] = t),
              (u = s.nodeValue !== r) && ((e = ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wi(s.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Wi(s.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
              (s[Vt] = t),
              (t.stateNode = s);
        }
        return $e(t), null;
      case 13:
        if (
          (we(ke),
          (s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Fc(), Jn(), (t.flags |= 98560), (u = !1);
          else if (((u = qi(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[Vt] = t;
            } else
              Jn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            $e(t), (u = !1);
          } else Pt !== null && (Ll(Pt), (Pt = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0
                  ? Le === 0 && (Le = 3)
                  : Fl())),
            t.updateQueue !== null && (t.flags |= 4),
            $e(t),
            null);
      case 4:
        return (
          nr(),
          Tl(e, t),
          e === null && Br(t.stateNode.containerInfo),
          $e(t),
          null
        );
      case 10:
        return Zo(t.type._context), $e(t), null;
      case 17:
        return et(t.type) && Xi(), $e(t), null;
      case 19:
        if ((we(ke), (u = t.memoizedState), u === null)) return $e(t), null;
        if (((s = (t.flags & 128) !== 0), (h = u.rendering), h === null))
          if (s) Jr(u, !1);
          else {
            if (Le !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = rs(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Jr(u, !1),
                      s = h.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = r,
                      r = t.child;
                    r !== null;

                  )
                    (u = r),
                      (e = s),
                      (u.flags &= 14680066),
                      (h = u.alternate),
                      h === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = h.childLanes),
                          (u.lanes = h.lanes),
                          (u.child = h.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = h.memoizedProps),
                          (u.memoizedState = h.memoizedState),
                          (u.updateQueue = h.updateQueue),
                          (u.type = h.type),
                          (e = h.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return ye(ke, (ke.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Ae() > or &&
              ((t.flags |= 128), (s = !0), Jr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = rs(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Jr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !h.alternate &&
                  !Se)
              )
                return $e(t), null;
            } else
              2 * Ae() - u.renderingStartTime > or &&
                r !== 1073741824 &&
                ((t.flags |= 128), (s = !0), Jr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((r = u.last),
              r !== null ? (r.sibling = h) : (t.child = h),
              (u.last = h));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Ae()),
            (t.sibling = null),
            (r = ke.current),
            ye(ke, s ? (r & 1) | 2 : r & 1),
            t)
          : ($e(t), null);
      case 22:
      case 23:
        return (
          _l(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0
            ? (dt & 1073741824) !== 0 &&
              ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : $e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Hy(e, t) {
    switch (($o(t), t.tag)) {
      case 1:
        return (
          et(t.type) && Xi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          nr(),
          we(be),
          we(He),
          rl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return tl(t), null;
      case 13:
        if (
          (we(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Jn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return we(ke), null;
      case 4:
        return nr(), null;
      case 10:
        return Zo(t.type._context), null;
      case 22:
      case 23:
        return _l(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ds = !1,
    Ke = !1,
    Wy = typeof WeakSet == "function" ? WeakSet : Set,
    W = null;
  function ir(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (s) {
          Ee(e, t, s);
        }
      else r.current = null;
  }
  function kl(e, t, r) {
    try {
      r();
    } catch (s) {
      Ee(e, t, s);
    }
  }
  var _f = !1;
  function $y(e, t) {
    if (((_o = Vi), (e = dc()), Mo(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var l = s.anchorOffset,
              u = s.focusNode;
            s = s.focusOffset;
            try {
              r.nodeType, u.nodeType;
            } catch {
              r = null;
              break e;
            }
            var h = 0,
              v = -1,
              w = -1,
              E = 0,
              N = 0,
              R = e,
              A = null;
            t: for (;;) {
              for (
                var B;
                R !== r || (l !== 0 && R.nodeType !== 3) || (v = h + l),
                  R !== u || (s !== 0 && R.nodeType !== 3) || (w = h + s),
                  R.nodeType === 3 && (h += R.nodeValue.length),
                  (B = R.firstChild) !== null;

              )
                (A = R), (R = B);
              for (;;) {
                if (R === e) break t;
                if (
                  (A === r && ++E === l && (v = h),
                  A === u && ++N === s && (w = h),
                  (B = R.nextSibling) !== null)
                )
                  break;
                (R = A), (A = R.parentNode);
              }
              R = B;
            }
            r = v === -1 || w === -1 ? null : { start: v, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Fo = { focusedElem: e, selectionRange: r }, Vi = !1, W = t;
      W !== null;

    )
      if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (W = e);
      else
        for (; W !== null; ) {
          t = W;
          try {
            var $ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($ !== null) {
                    var K = $.memoizedProps,
                      De = $.memoizedState,
                      P = t.stateNode,
                      S = P.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? K : Ct(t.type, K),
                        De
                      );
                    P.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = "")
                    : C.nodeType === 9 &&
                      C.documentElement &&
                      C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (j) {
            Ee(t, t.return, j);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (W = e);
            break;
          }
          W = t.return;
        }
    return ($ = _f), (_f = !1), $;
  }
  function br(e, t, r) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var l = (s = s.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && kl(t, r, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function hs(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Pl(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Ff(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ff(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Vt],
          delete t[Hr],
          delete t[Bo],
          delete t[Ey],
          delete t[My])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function zf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function If(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || zf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Cl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = $i));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Cl(e, t, r), e = e.sibling; e !== null; )
        Cl(e, t, r), (e = e.sibling);
  }
  function El(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (El(e, t, r), e = e.sibling; e !== null; )
        El(e, t, r), (e = e.sibling);
  }
  var Ie = null,
    Et = !1;
  function ln(e, t, r) {
    for (r = r.child; r !== null; ) Of(e, t, r), (r = r.sibling);
  }
  function Of(e, t, r) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function")
      try {
        Rt.onCommitFiberUnmount(Ei, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Ke || ir(r, t);
      case 6:
        var s = Ie,
          l = Et;
        (Ie = null),
          ln(e, t, r),
          (Ie = s),
          (Et = l),
          Ie !== null &&
            (Et
              ? ((e = Ie),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : Ie.removeChild(r.stateNode));
        break;
      case 18:
        Ie !== null &&
          (Et
            ? ((e = Ie),
              (r = r.stateNode),
              e.nodeType === 8
                ? Oo(e.parentNode, r)
                : e.nodeType === 1 && Oo(e, r),
              Rr(e))
            : Oo(Ie, r.stateNode));
        break;
      case 4:
        (s = Ie),
          (l = Et),
          (Ie = r.stateNode.containerInfo),
          (Et = !0),
          ln(e, t, r),
          (Ie = s),
          (Et = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ke &&
          ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
        ) {
          l = s = s.next;
          do {
            var u = l,
              h = u.destroy;
            (u = u.tag),
              h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && kl(r, t, h),
              (l = l.next);
          } while (l !== s);
        }
        ln(e, t, r);
        break;
      case 1:
        if (
          !Ke &&
          (ir(r, t),
          (s = r.stateNode),
          typeof s.componentWillUnmount == "function")
        )
          try {
            (s.props = r.memoizedProps),
              (s.state = r.memoizedState),
              s.componentWillUnmount();
          } catch (v) {
            Ee(r, t, v);
          }
        ln(e, t, r);
        break;
      case 21:
        ln(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((Ke = (s = Ke) || r.memoizedState !== null), ln(e, t, r), (Ke = s))
          : ln(e, t, r);
        break;
      default:
        ln(e, t, r);
    }
  }
  function Bf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Wy()),
        t.forEach(function (s) {
          var l = by.bind(null, e, s);
          r.has(s) || (r.add(s), s.then(l, l));
        });
    }
  }
  function Mt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var l = r[s];
        try {
          var u = e,
            h = t,
            v = h;
          e: for (; v !== null; ) {
            switch (v.tag) {
              case 5:
                (Ie = v.stateNode), (Et = !1);
                break e;
              case 3:
                (Ie = v.stateNode.containerInfo), (Et = !0);
                break e;
              case 4:
                (Ie = v.stateNode.containerInfo), (Et = !0);
                break e;
            }
            v = v.return;
          }
          if (Ie === null) throw Error(o(160));
          Of(u, h, l), (Ie = null), (Et = !1);
          var w = l.alternate;
          w !== null && (w.return = null), (l.return = null);
        } catch (E) {
          Ee(l, t, E);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Uf(t, e), (t = t.sibling);
  }
  function Uf(e, t) {
    var r = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mt(t, e), _t(e), s & 4)) {
          try {
            br(3, e, e.return), hs(3, e);
          } catch (K) {
            Ee(e, e.return, K);
          }
          try {
            br(5, e, e.return);
          } catch (K) {
            Ee(e, e.return, K);
          }
        }
        break;
      case 1:
        Mt(t, e), _t(e), s & 512 && r !== null && ir(r, r.return);
        break;
      case 5:
        if (
          (Mt(t, e),
          _t(e),
          s & 512 && r !== null && ir(r, r.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            xr(l, "");
          } catch (K) {
            Ee(e, e.return, K);
          }
        }
        if (s & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            h = r !== null ? r.memoizedProps : u,
            v = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              v === "input" && u.type === "radio" && u.name != null && pu(l, u),
                no(v, h);
              var E = no(v, u);
              for (h = 0; h < w.length; h += 2) {
                var N = w[h],
                  R = w[h + 1];
                N === "style"
                  ? Tu(l, R)
                  : N === "dangerouslySetInnerHTML"
                  ? xu(l, R)
                  : N === "children"
                  ? xr(l, R)
                  : I(l, N, R, E);
              }
              switch (v) {
                case "input":
                  qs(l, u);
                  break;
                case "textarea":
                  gu(l, u);
                  break;
                case "select":
                  var A = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var B = u.value;
                  B != null
                    ? zn(l, !!u.multiple, B, !1)
                    : A !== !!u.multiple &&
                      (u.defaultValue != null
                        ? zn(l, !!u.multiple, u.defaultValue, !0)
                        : zn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[Hr] = u;
            } catch (K) {
              Ee(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((Mt(t, e), _t(e), s & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (K) {
            Ee(e, e.return, K);
          }
        }
        break;
      case 3:
        if (
          (Mt(t, e), _t(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Rr(t.containerInfo);
          } catch (K) {
            Ee(e, e.return, K);
          }
        break;
      case 4:
        Mt(t, e), _t(e);
        break;
      case 13:
        Mt(t, e),
          _t(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Dl = Ae())),
          s & 4 && Bf(e);
        break;
      case 22:
        if (
          ((N = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Ke = (E = Ke) || N), Mt(t, e), (Ke = E)) : Mt(t, e),
          _t(e),
          s & 8192)
        ) {
          if (
            ((E = e.memoizedState !== null),
            (e.stateNode.isHidden = E) && !N && (e.mode & 1) !== 0)
          )
            for (W = e, N = e.child; N !== null; ) {
              for (R = W = N; W !== null; ) {
                switch (((A = W), (B = A.child), A.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    br(4, A, A.return);
                    break;
                  case 1:
                    ir(A, A.return);
                    var $ = A.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      (s = A), (r = A.return);
                      try {
                        (t = s),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount();
                      } catch (K) {
                        Ee(s, r, K);
                      }
                    }
                    break;
                  case 5:
                    ir(A, A.return);
                    break;
                  case 22:
                    if (A.memoizedState !== null) {
                      $f(R);
                      continue;
                    }
                }
                B !== null ? ((B.return = A), (W = B)) : $f(R);
              }
              N = N.sibling;
            }
          e: for (N = null, R = e; ; ) {
            if (R.tag === 5) {
              if (N === null) {
                N = R;
                try {
                  (l = R.stateNode),
                    E
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((v = R.stateNode),
                        (w = R.memoizedProps.style),
                        (h =
                          w != null && w.hasOwnProperty("display")
                            ? w.display
                            : null),
                        (v.style.display = Su("display", h)));
                } catch (K) {
                  Ee(e, e.return, K);
                }
              }
            } else if (R.tag === 6) {
              if (N === null)
                try {
                  R.stateNode.nodeValue = E ? "" : R.memoizedProps;
                } catch (K) {
                  Ee(e, e.return, K);
                }
            } else if (
              ((R.tag !== 22 && R.tag !== 23) ||
                R.memoizedState === null ||
                R === e) &&
              R.child !== null
            ) {
              (R.child.return = R), (R = R.child);
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              N === R && (N = null), (R = R.return);
            }
            N === R && (N = null),
              (R.sibling.return = R.return),
              (R = R.sibling);
          }
        }
        break;
      case 19:
        Mt(t, e), _t(e), s & 4 && Bf(e);
        break;
      case 21:
        break;
      default:
        Mt(t, e), _t(e);
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (zf(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (xr(l, ""), (s.flags &= -33));
            var u = If(e);
            El(e, u, l);
            break;
          case 3:
          case 4:
            var h = s.stateNode.containerInfo,
              v = If(e);
            Cl(e, v, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (w) {
        Ee(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ky(e, t, r) {
    (W = e), Hf(e);
  }
  function Hf(e, t, r) {
    for (var s = (e.mode & 1) !== 0; W !== null; ) {
      var l = W,
        u = l.child;
      if (l.tag === 22 && s) {
        var h = l.memoizedState !== null || ds;
        if (!h) {
          var v = l.alternate,
            w = (v !== null && v.memoizedState !== null) || Ke;
          v = ds;
          var E = Ke;
          if (((ds = h), (Ke = w) && !E))
            for (W = l; W !== null; )
              (h = W),
                (w = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Kf(l)
                  : w !== null
                  ? ((w.return = h), (W = w))
                  : Kf(l);
          for (; u !== null; ) (W = u), Hf(u), (u = u.sibling);
          (W = l), (ds = v), (Ke = E);
        }
        Wf(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && u !== null
          ? ((u.return = l), (W = u))
          : Wf(e);
    }
  }
  function Wf(e) {
    for (; W !== null; ) {
      var t = W;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ke || hs(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !Ke)
                  if (r === null) s.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Ct(t.type, r.memoizedProps);
                    s.componentDidUpdate(
                      l,
                      r.memoizedState,
                      s.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && Wc(t, u, s);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Wc(t, h, r);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = v;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && r.focus();
                      break;
                    case "img":
                      w.src && (r.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var E = t.alternate;
                  if (E !== null) {
                    var N = E.memoizedState;
                    if (N !== null) {
                      var R = N.dehydrated;
                      R !== null && Rr(R);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          Ke || (t.flags & 512 && Pl(t));
        } catch (A) {
          Ee(t, t.return, A);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (W = r);
        break;
      }
      W = t.return;
    }
  }
  function $f(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (W = r);
        break;
      }
      W = t.return;
    }
  }
  function Kf(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              hs(4, t);
            } catch (w) {
              Ee(t, r, w);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (w) {
                Ee(t, l, w);
              }
            }
            var u = t.return;
            try {
              Pl(t);
            } catch (w) {
              Ee(t, u, w);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Pl(t);
            } catch (w) {
              Ee(t, h, w);
            }
        }
      } catch (w) {
        Ee(t, t.return, w);
      }
      if (t === e) {
        W = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        (v.return = t.return), (W = v);
        break;
      }
      W = t.return;
    }
  }
  var Xy = Math.ceil,
    ps = Z.ReactCurrentDispatcher,
    Ml = Z.ReactCurrentOwner,
    gt = Z.ReactCurrentBatchConfig,
    ae = 0,
    Fe = null,
    Ne = null,
    Oe = 0,
    dt = 0,
    sr = tn(0),
    Le = 0,
    ei = null,
    En = 0,
    ms = 0,
    Al = 0,
    ti = null,
    nt = null,
    Dl = 0,
    or = 1 / 0,
    Kt = null,
    ys = !1,
    Nl = null,
    an = null,
    gs = !1,
    un = null,
    vs = 0,
    ni = 0,
    Rl = null,
    ws = -1,
    xs = 0;
  function Ze() {
    return (ae & 6) !== 0 ? Ae() : ws !== -1 ? ws : (ws = Ae());
  }
  function cn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Oe !== 0
      ? Oe & -Oe
      : Dy.transition !== null
      ? (xs === 0 && (xs = zu()), xs)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xu(e.type))),
        e);
  }
  function At(e, t, r, s) {
    if (50 < ni) throw ((ni = 0), (Rl = null), Error(o(185)));
    Er(e, r, s),
      ((ae & 2) === 0 || e !== Fe) &&
        (e === Fe && ((ae & 2) === 0 && (ms |= r), Le === 4 && fn(e, Oe)),
        rt(e, s),
        r === 1 &&
          ae === 0 &&
          (t.mode & 1) === 0 &&
          ((or = Ae() + 500), Gi && rn()));
  }
  function rt(e, t) {
    var r = e.callbackNode;
    Dm(e, t);
    var s = Di(e, e === Fe ? Oe : 0);
    if (s === 0)
      r !== null && ju(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((r != null && ju(r), t === 1))
        e.tag === 0 ? Ay(Yf.bind(null, e)) : Rc(Yf.bind(null, e)),
          Py(function () {
            (ae & 6) === 0 && rn();
          }),
          (r = null);
      else {
        switch (Iu(s)) {
          case 1:
            r = uo;
            break;
          case 4:
            r = _u;
            break;
          case 16:
            r = Ci;
            break;
          case 536870912:
            r = Fu;
            break;
          default:
            r = Ci;
        }
        r = td(r, Xf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Xf(e, t) {
    if (((ws = -1), (xs = 0), (ae & 6) !== 0)) throw Error(o(327));
    var r = e.callbackNode;
    if (lr() && e.callbackNode !== r) return null;
    var s = Di(e, e === Fe ? Oe : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ss(e, s);
    else {
      t = s;
      var l = ae;
      ae |= 2;
      var u = Qf();
      (Fe !== e || Oe !== t) && ((Kt = null), (or = Ae() + 500), An(e, t));
      do
        try {
          Qy();
          break;
        } catch (v) {
          Gf(e, v);
        }
      while (!0);
      Qo(),
        (ps.current = u),
        (ae = l),
        Ne !== null ? (t = 0) : ((Fe = null), (Oe = 0), (t = Le));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = co(e)), l !== 0 && ((s = l), (t = Vl(e, l)))),
        t === 1)
      )
        throw ((r = ei), An(e, 0), fn(e, s), rt(e, Ae()), r);
      if (t === 6) fn(e, s);
      else {
        if (
          ((l = e.current.alternate),
          (s & 30) === 0 &&
            !Yy(l) &&
            ((t = Ss(e, s)),
            t === 2 && ((u = co(e)), u !== 0 && ((s = u), (t = Vl(e, u)))),
            t === 1))
        )
          throw ((r = ei), An(e, 0), fn(e, s), rt(e, Ae()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Dn(e, nt, Kt);
            break;
          case 3:
            if (
              (fn(e, s),
              (s & 130023424) === s && ((t = Dl + 500 - Ae()), 10 < t))
            ) {
              if (Di(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & s) !== s)) {
                Ze(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Io(Dn.bind(null, e, nt, Kt), t);
              break;
            }
            Dn(e, nt, Kt);
            break;
          case 4:
            if ((fn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var h = 31 - Tt(s);
              (u = 1 << h), (h = t[h]), h > l && (l = h), (s &= ~u);
            }
            if (
              ((s = l),
              (s = Ae() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                  ? 480
                  : 1080 > s
                  ? 1080
                  : 1920 > s
                  ? 1920
                  : 3e3 > s
                  ? 3e3
                  : 4320 > s
                  ? 4320
                  : 1960 * Xy(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = Io(Dn.bind(null, e, nt, Kt), s);
              break;
            }
            Dn(e, nt, Kt);
            break;
          case 5:
            Dn(e, nt, Kt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return rt(e, Ae()), e.callbackNode === r ? Xf.bind(null, e) : null;
  }
  function Vl(e, t) {
    var r = ti;
    return (
      e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256),
      (e = Ss(e, t)),
      e !== 2 && ((t = nt), (nt = r), t !== null && Ll(t)),
      e
    );
  }
  function Ll(e) {
    nt === null ? (nt = e) : nt.push.apply(nt, e);
  }
  function Yy(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var s = 0; s < r.length; s++) {
            var l = r[s],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!kt(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function fn(e, t) {
    for (
      t &= ~Al,
        t &= ~ms,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Tt(t),
        s = 1 << r;
      (e[r] = -1), (t &= ~s);
    }
  }
  function Yf(e) {
    if ((ae & 6) !== 0) throw Error(o(327));
    lr();
    var t = Di(e, 0);
    if ((t & 1) === 0) return rt(e, Ae()), null;
    var r = Ss(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = co(e);
      s !== 0 && ((t = s), (r = Vl(e, s)));
    }
    if (r === 1) throw ((r = ei), An(e, 0), fn(e, t), rt(e, Ae()), r);
    if (r === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Dn(e, nt, Kt),
      rt(e, Ae()),
      null
    );
  }
  function jl(e, t) {
    var r = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      (ae = r), ae === 0 && ((or = Ae() + 500), Gi && rn());
    }
  }
  function Mn(e) {
    un !== null && un.tag === 0 && (ae & 6) === 0 && lr();
    var t = ae;
    ae |= 1;
    var r = gt.transition,
      s = he;
    try {
      if (((gt.transition = null), (he = 1), e)) return e();
    } finally {
      (he = s), (gt.transition = r), (ae = t), (ae & 6) === 0 && rn();
    }
  }
  function _l() {
    (dt = sr.current), we(sr);
  }
  function An(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), ky(r)), Ne !== null))
      for (r = Ne.return; r !== null; ) {
        var s = r;
        switch (($o(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && Xi();
            break;
          case 3:
            nr(), we(be), we(He), rl();
            break;
          case 5:
            tl(s);
            break;
          case 4:
            nr();
            break;
          case 13:
            we(ke);
            break;
          case 19:
            we(ke);
            break;
          case 10:
            Zo(s.type._context);
            break;
          case 22:
          case 23:
            _l();
        }
        r = r.return;
      }
    if (
      ((Fe = e),
      (Ne = e = dn(e.current, null)),
      (Oe = dt = t),
      (Le = 0),
      (ei = null),
      (Al = ms = En = 0),
      (nt = ti = null),
      kn !== null)
    ) {
      for (t = 0; t < kn.length; t++)
        if (((r = kn[t]), (s = r.interleaved), s !== null)) {
          r.interleaved = null;
          var l = s.next,
            u = r.pending;
          if (u !== null) {
            var h = u.next;
            (u.next = l), (s.next = h);
          }
          r.pending = s;
        }
      kn = null;
    }
    return e;
  }
  function Gf(e, t) {
    do {
      var r = Ne;
      try {
        if ((Qo(), (is.current = as), ss)) {
          for (var s = Pe.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), (s = s.next);
          }
          ss = !1;
        }
        if (
          ((Cn = 0),
          (_e = Ve = Pe = null),
          (Gr = !1),
          (Qr = 0),
          (Ml.current = null),
          r === null || r.return === null)
        ) {
          (Le = 1), (ei = t), (Ne = null);
          break;
        }
        e: {
          var u = e,
            h = r.return,
            v = r,
            w = t;
          if (
            ((t = Oe),
            (v.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var E = w,
              N = v,
              R = N.tag;
            if ((N.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var A = N.alternate;
              A
                ? ((N.updateQueue = A.updateQueue),
                  (N.memoizedState = A.memoizedState),
                  (N.lanes = A.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var B = wf(h);
            if (B !== null) {
              (B.flags &= -257),
                xf(B, h, v, u, t),
                B.mode & 1 && vf(u, E, t),
                (t = B),
                (w = E);
              var $ = t.updateQueue;
              if ($ === null) {
                var K = new Set();
                K.add(w), (t.updateQueue = K);
              } else $.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                vf(u, E, t), Fl();
                break e;
              }
              w = Error(o(426));
            }
          } else if (Se && v.mode & 1) {
            var De = wf(h);
            if (De !== null) {
              (De.flags & 65536) === 0 && (De.flags |= 256),
                xf(De, h, v, u, t),
                Yo(rr(w, v));
              break e;
            }
          }
          (u = w = rr(w, v)),
            Le !== 4 && (Le = 2),
            ti === null ? (ti = [u]) : ti.push(u),
            (u = h);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var P = yf(u, w, t);
                Hc(u, P);
                break e;
              case 1:
                v = w;
                var S = u.type,
                  C = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (an === null || !an.has(C))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var j = gf(u, v, t);
                  Hc(u, j);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        qf(r);
      } catch (Y) {
        (t = Y), Ne === r && r !== null && (Ne = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qf() {
    var e = ps.current;
    return (ps.current = as), e === null ? as : e;
  }
  function Fl() {
    (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
      Fe === null ||
        ((En & 268435455) === 0 && (ms & 268435455) === 0) ||
        fn(Fe, Oe);
  }
  function Ss(e, t) {
    var r = ae;
    ae |= 2;
    var s = Qf();
    (Fe !== e || Oe !== t) && ((Kt = null), An(e, t));
    do
      try {
        Gy();
        break;
      } catch (l) {
        Gf(e, l);
      }
    while (!0);
    if ((Qo(), (ae = r), (ps.current = s), Ne !== null)) throw Error(o(261));
    return (Fe = null), (Oe = 0), Le;
  }
  function Gy() {
    for (; Ne !== null; ) Zf(Ne);
  }
  function Qy() {
    for (; Ne !== null && !xm(); ) Zf(Ne);
  }
  function Zf(e) {
    var t = ed(e.alternate, e, dt);
    (e.memoizedProps = e.pendingProps),
      t === null ? qf(e) : (Ne = t),
      (Ml.current = null);
  }
  function qf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Uy(r, t, dt)), r !== null)) {
          Ne = r;
          return;
        }
      } else {
        if (((r = Hy(r, t)), r !== null)) {
          (r.flags &= 32767), (Ne = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Le = 6), (Ne = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function Dn(e, t, r) {
    var s = he,
      l = gt.transition;
    try {
      (gt.transition = null), (he = 1), Zy(e, t, r, s);
    } finally {
      (gt.transition = l), (he = s);
    }
    return null;
  }
  function Zy(e, t, r, s) {
    do lr();
    while (un !== null);
    if ((ae & 6) !== 0) throw Error(o(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = r.lanes | r.childLanes;
    if (
      (Nm(e, u),
      e === Fe && ((Ne = Fe = null), (Oe = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        gs ||
        ((gs = !0),
        td(Ci, function () {
          return lr(), null;
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      (u = gt.transition), (gt.transition = null);
      var h = he;
      he = 1;
      var v = ae;
      (ae |= 4),
        (Ml.current = null),
        $y(e, r),
        Uf(r, e),
        yy(Fo),
        (Vi = !!_o),
        (Fo = _o = null),
        (e.current = r),
        Ky(r),
        Sm(),
        (ae = v),
        (he = h),
        (gt.transition = u);
    } else e.current = r;
    if (
      (gs && ((gs = !1), (un = e), (vs = l)),
      (u = e.pendingLanes),
      u === 0 && (an = null),
      Pm(r.stateNode),
      rt(e, Ae()),
      t !== null)
    )
      for (s = e.onRecoverableError, r = 0; r < t.length; r++)
        (l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest });
    if (ys) throw ((ys = !1), (e = Nl), (Nl = null), e);
    return (
      (vs & 1) !== 0 && e.tag !== 0 && lr(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === Rl ? ni++ : ((ni = 0), (Rl = e))) : (ni = 0),
      rn(),
      null
    );
  }
  function lr() {
    if (un !== null) {
      var e = Iu(vs),
        t = gt.transition,
        r = he;
      try {
        if (((gt.transition = null), (he = 16 > e ? 16 : e), un === null))
          var s = !1;
        else {
          if (((e = un), (un = null), (vs = 0), (ae & 6) !== 0))
            throw Error(o(331));
          var l = ae;
          for (ae |= 4, W = e.current; W !== null; ) {
            var u = W,
              h = u.child;
            if ((W.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var E = v[w];
                  for (W = E; W !== null; ) {
                    var N = W;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        br(8, N, u);
                    }
                    var R = N.child;
                    if (R !== null) (R.return = N), (W = R);
                    else
                      for (; W !== null; ) {
                        N = W;
                        var A = N.sibling,
                          B = N.return;
                        if ((Ff(N), N === E)) {
                          W = null;
                          break;
                        }
                        if (A !== null) {
                          (A.return = B), (W = A);
                          break;
                        }
                        W = B;
                      }
                  }
                }
                var $ = u.alternate;
                if ($ !== null) {
                  var K = $.child;
                  if (K !== null) {
                    $.child = null;
                    do {
                      var De = K.sibling;
                      (K.sibling = null), (K = De);
                    } while (K !== null);
                  }
                }
                W = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null)
              (h.return = u), (W = h);
            else
              e: for (; W !== null; ) {
                if (((u = W), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(9, u, u.return);
                  }
                var P = u.sibling;
                if (P !== null) {
                  (P.return = u.return), (W = P);
                  break e;
                }
                W = u.return;
              }
          }
          var S = e.current;
          for (W = S; W !== null; ) {
            h = W;
            var C = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && C !== null)
              (C.return = h), (W = C);
            else
              e: for (h = S; W !== null; ) {
                if (((v = W), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hs(9, v);
                    }
                  } catch (Y) {
                    Ee(v, v.return, Y);
                  }
                if (v === h) {
                  W = null;
                  break e;
                }
                var j = v.sibling;
                if (j !== null) {
                  (j.return = v.return), (W = j);
                  break e;
                }
                W = v.return;
              }
          }
          if (
            ((ae = l),
            rn(),
            Rt && typeof Rt.onPostCommitFiberRoot == "function")
          )
            try {
              Rt.onPostCommitFiberRoot(Ei, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (he = r), (gt.transition = t);
      }
    }
    return !1;
  }
  function Jf(e, t, r) {
    (t = rr(r, t)),
      (t = yf(e, t, 1)),
      (e = on(e, t, 1)),
      (t = Ze()),
      e !== null && (Er(e, 1, t), rt(e, t));
  }
  function Ee(e, t, r) {
    if (e.tag === 3) Jf(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (an === null || !an.has(s)))
          ) {
            (e = rr(r, e)),
              (e = gf(t, e, 1)),
              (t = on(t, e, 1)),
              (e = Ze()),
              t !== null && (Er(t, 1, e), rt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function qy(e, t, r) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = Ze()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Fe === e &&
        (Oe & r) === r &&
        (Le === 4 || (Le === 3 && (Oe & 130023424) === Oe && 500 > Ae() - Dl)
          ? An(e, 0)
          : (Al |= r)),
      rt(e, t);
  }
  function bf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ai), (Ai <<= 1), (Ai & 130023424) === 0 && (Ai = 4194304)));
    var r = Ze();
    (e = Ht(e, t)), e !== null && (Er(e, t, r), rt(e, r));
  }
  function Jy(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), bf(e, r);
  }
  function by(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          l = e.memoizedState;
        l !== null && (r = l.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    s !== null && s.delete(t), bf(e, r);
  }
  var ed;
  ed = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || be.current) tt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (tt = !1), By(e, t, r);
        tt = (e.flags & 131072) !== 0;
      }
    else (tt = !1), Se && (t.flags & 1048576) !== 0 && Vc(t, Zi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        fs(e, t), (e = t.pendingProps);
        var l = Qn(t, He.current);
        tr(t, r), (l = ol(null, t, s, e, l, r));
        var u = ll();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              et(s) ? ((u = !0), Yi(t)) : (u = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              bo(t),
              (l.updater = us),
              (t.stateNode = l),
              (l._reactInternals = t),
              hl(t, s, e, r),
              (t = gl(null, t, s, !0, u, r)))
            : ((t.tag = 0), Se && u && Wo(t), Qe(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (fs(e, t),
            (e = t.pendingProps),
            (l = s._init),
            (s = l(s._payload)),
            (t.type = s),
            (l = t.tag = tg(s)),
            (e = Ct(s, e)),
            l)
          ) {
            case 0:
              t = yl(null, t, s, e, r);
              break e;
            case 1:
              t = Ef(null, t, s, e, r);
              break e;
            case 11:
              t = Sf(null, t, s, e, r);
              break e;
            case 14:
              t = Tf(null, t, s, Ct(s.type, e), r);
              break e;
          }
          throw Error(o(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Ct(s, l)),
          yl(e, t, s, l, r)
        );
      case 1:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Ct(s, l)),
          Ef(e, t, s, l, r)
        );
      case 3:
        e: {
          if ((Mf(t), e === null)) throw Error(o(387));
          (s = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            Uc(e, t),
            ns(t, s, null, r);
          var h = t.memoizedState;
          if (((s = h.element), u.isDehydrated))
            if (
              ((u = {
                element: s,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (l = rr(Error(o(423)), t)), (t = Af(e, t, s, r, l));
              break e;
            } else if (s !== l) {
              (l = rr(Error(o(424)), t)), (t = Af(e, t, s, r, l));
              break e;
            } else
              for (
                ft = en(t.stateNode.containerInfo.firstChild),
                  ct = t,
                  Se = !0,
                  Pt = null,
                  r = Oc(t, null, s, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Jn(), s === l)) {
              t = $t(e, t, r);
              break e;
            }
            Qe(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          $c(t),
          e === null && Xo(t),
          (s = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (h = l.children),
          zo(s, l) ? (h = null) : u !== null && zo(s, u) && (t.flags |= 32),
          Cf(e, t),
          Qe(e, t, h, r),
          t.child
        );
      case 6:
        return e === null && Xo(t), null;
      case 13:
        return Df(e, t, r);
      case 4:
        return (
          el(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = bn(t, null, s, r)) : Qe(e, t, s, r),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Ct(s, l)),
          Sf(e, t, s, l, r)
        );
      case 7:
        return Qe(e, t, t.pendingProps, r), t.child;
      case 8:
        return Qe(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Qe(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (h = l.value),
            ye(bi, s._currentValue),
            (s._currentValue = h),
            u !== null)
          )
            if (kt(u.value, h)) {
              if (u.children === l.children && !be.current) {
                t = $t(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var v = u.dependencies;
                if (v !== null) {
                  h = u.child;
                  for (var w = v.firstContext; w !== null; ) {
                    if (w.context === s) {
                      if (u.tag === 1) {
                        (w = Wt(-1, r & -r)), (w.tag = 2);
                        var E = u.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var N = E.pending;
                          N === null
                            ? (w.next = w)
                            : ((w.next = N.next), (N.next = w)),
                            (E.pending = w);
                        }
                      }
                      (u.lanes |= r),
                        (w = u.alternate),
                        w !== null && (w.lanes |= r),
                        qo(u.return, r, t),
                        (v.lanes |= r);
                      break;
                    }
                    w = w.next;
                  }
                } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((h = u.return), h === null)) throw Error(o(341));
                  (h.lanes |= r),
                    (v = h.alternate),
                    v !== null && (v.lanes |= r),
                    qo(h, r, t),
                    (h = u.sibling);
                } else h = u.child;
                if (h !== null) h.return = u;
                else
                  for (h = u; h !== null; ) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((u = h.sibling), u !== null)) {
                      (u.return = h.return), (h = u);
                      break;
                    }
                    h = h.return;
                  }
                u = h;
              }
          Qe(e, t, l.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (s = t.pendingProps.children),
          tr(t, r),
          (l = mt(l)),
          (s = s(l)),
          (t.flags |= 1),
          Qe(e, t, s, r),
          t.child
        );
      case 14:
        return (
          (s = t.type),
          (l = Ct(s, t.pendingProps)),
          (l = Ct(s.type, l)),
          Tf(e, t, s, l, r)
        );
      case 15:
        return kf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : Ct(s, l)),
          fs(e, t),
          (t.tag = 1),
          et(s) ? ((e = !0), Yi(t)) : (e = !1),
          tr(t, r),
          pf(t, s, l),
          hl(t, s, l, r),
          gl(null, t, s, !0, e, r)
        );
      case 19:
        return Rf(e, t, r);
      case 22:
        return Pf(e, t, r);
    }
    throw Error(o(156, t.tag));
  };
  function td(e, t) {
    return Lu(e, t);
  }
  function eg(e, t, r, s) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function vt(e, t, r, s) {
    return new eg(e, t, r, s);
  }
  function zl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function tg(e) {
    if (typeof e == "function") return zl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ot)) return 11;
      if (e === lt) return 14;
    }
    return 2;
  }
  function dn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = vt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Ts(e, t, r, s, l, u) {
    var h = 2;
    if (((s = e), typeof e == "function")) zl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case ee:
          return Nn(r.children, l, u, t);
        case Q:
          (h = 8), (l |= 8);
          break;
        case pe:
          return (
            (e = vt(12, r, t, l | 2)), (e.elementType = pe), (e.lanes = u), e
          );
        case Ye:
          return (e = vt(13, r, t, l)), (e.elementType = Ye), (e.lanes = u), e;
        case Je:
          return (e = vt(19, r, t, l)), (e.elementType = Je), (e.lanes = u), e;
        case ie:
          return ks(r, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ge:
                h = 10;
                break e;
              case Ue:
                h = 9;
                break e;
              case ot:
                h = 11;
                break e;
              case lt:
                h = 14;
                break e;
              case Ge:
                (h = 16), (s = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = vt(h, r, t, l)), (t.elementType = e), (t.type = s), (t.lanes = u), t
    );
  }
  function Nn(e, t, r, s) {
    return (e = vt(7, e, s, t)), (e.lanes = r), e;
  }
  function ks(e, t, r, s) {
    return (
      (e = vt(22, e, s, t)),
      (e.elementType = ie),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Il(e, t, r) {
    return (e = vt(6, e, null, t)), (e.lanes = r), e;
  }
  function Ol(e, t, r) {
    return (
      (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ng(e, t, r, s, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = fo(0)),
      (this.expirationTimes = fo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fo(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Bl(e, t, r, s, l, u, h, v, w) {
    return (
      (e = new ng(e, t, r, v, w)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = vt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: s,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      bo(u),
      e
    );
  }
  function rg(e, t, r) {
    var s =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function nd(e) {
    if (!e) return nn;
    e = e._reactInternals;
    e: {
      if (vn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (et(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (et(r)) return Dc(e, r, t);
    }
    return t;
  }
  function rd(e, t, r, s, l, u, h, v, w) {
    return (
      (e = Bl(r, s, !0, e, l, u, h, v, w)),
      (e.context = nd(null)),
      (r = e.current),
      (s = Ze()),
      (l = cn(r)),
      (u = Wt(s, l)),
      (u.callback = t ?? null),
      on(r, u, l),
      (e.current.lanes = l),
      Er(e, l, s),
      rt(e, s),
      e
    );
  }
  function Ps(e, t, r, s) {
    var l = t.current,
      u = Ze(),
      h = cn(l);
    return (
      (r = nd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Wt(u, h)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = on(l, t, h)),
      e !== null && (At(e, l, h, u), ts(e, l, h)),
      h
    );
  }
  function Cs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function id(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Ul(e, t) {
    id(e, t), (e = e.alternate) && id(e, t);
  }
  function ig() {
    return null;
  }
  var sd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Hl(e) {
    this._internalRoot = e;
  }
  (Es.prototype.render = Hl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Ps(e, t, null, null);
    }),
    (Es.prototype.unmount = Hl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Mn(function () {
            Ps(null, e, null, null);
          }),
            (t[It] = null);
        }
      });
  function Es(e) {
    this._internalRoot = e;
  }
  Es.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < qt.length && t !== 0 && t < qt[r].priority; r++);
      qt.splice(r, 0, e), r === 0 && $u(e);
    }
  };
  function Wl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ms(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function od() {}
  function sg(e, t, r, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function () {
          var E = Cs(h);
          u.call(E);
        };
      }
      var h = rd(t, s, e, 0, null, !1, !1, "", od);
      return (
        (e._reactRootContainer = h),
        (e[It] = h.current),
        Br(e.nodeType === 8 ? e.parentNode : e),
        Mn(),
        h
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof s == "function") {
      var v = s;
      s = function () {
        var E = Cs(w);
        v.call(E);
      };
    }
    var w = Bl(e, 0, !1, null, null, !1, !1, "", od);
    return (
      (e._reactRootContainer = w),
      (e[It] = w.current),
      Br(e.nodeType === 8 ? e.parentNode : e),
      Mn(function () {
        Ps(t, w, r, s);
      }),
      w
    );
  }
  function As(e, t, r, s, l) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof l == "function") {
        var v = l;
        l = function () {
          var w = Cs(h);
          v.call(w);
        };
      }
      Ps(t, h, e, l);
    } else h = sg(r, t, e, l, s);
    return Cs(h);
  }
  (Ou = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Cr(t.pendingLanes);
          r !== 0 &&
            (ho(t, r | 1),
            rt(t, Ae()),
            (ae & 6) === 0 && ((or = Ae() + 500), rn()));
        }
        break;
      case 13:
        Mn(function () {
          var s = Ht(e, 1);
          if (s !== null) {
            var l = Ze();
            At(s, e, 1, l);
          }
        }),
          Ul(e, 1);
    }
  }),
    (po = function (e) {
      if (e.tag === 13) {
        var t = Ht(e, 134217728);
        if (t !== null) {
          var r = Ze();
          At(t, e, 134217728, r);
        }
        Ul(e, 134217728);
      }
    }),
    (Bu = function (e) {
      if (e.tag === 13) {
        var t = cn(e),
          r = Ht(e, t);
        if (r !== null) {
          var s = Ze();
          At(r, e, t, s);
        }
        Ul(e, t);
      }
    }),
    (Uu = function () {
      return he;
    }),
    (Hu = function (e, t) {
      var r = he;
      try {
        return (he = e), t();
      } finally {
        he = r;
      }
    }),
    (so = function (e, t, r) {
      switch (t) {
        case "input":
          if ((qs(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var s = r[t];
              if (s !== e && s.form === e.form) {
                var l = Ki(s);
                if (!l) throw Error(o(90));
                du(s), qs(s, l);
              }
            }
          }
          break;
        case "textarea":
          gu(e, r);
          break;
        case "select":
          (t = r.value), t != null && zn(e, !!r.multiple, t, !1);
      }
    }),
    (Eu = jl),
    (Mu = Mn);
  var og = { usingClientEntryPoint: !1, Events: [Wr, Yn, Ki, Pu, Cu, jl] },
    ri = {
      findFiberByHostInstance: wn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    lg = {
      bundleType: ri.bundleType,
      version: ri.version,
      rendererPackageName: ri.rendererPackageName,
      rendererConfig: ri.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Ru(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ri.findFiberByHostInstance || ig,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ds.isDisabled && Ds.supportsFiber)
      try {
        (Ei = Ds.inject(lg)), (Rt = Ds);
      } catch {}
  }
  return (
    (it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = og),
    (it.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wl(t)) throw Error(o(200));
      return rg(e, t, null, r);
    }),
    (it.createRoot = function (e, t) {
      if (!Wl(e)) throw Error(o(299));
      var r = !1,
        s = "",
        l = sd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Bl(e, 1, !1, null, null, r, !1, s, l)),
        (e[It] = t.current),
        Br(e.nodeType === 8 ? e.parentNode : e),
        new Hl(t)
      );
    }),
    (it.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = Ru(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (it.flushSync = function (e) {
      return Mn(e);
    }),
    (it.hydrate = function (e, t, r) {
      if (!Ms(t)) throw Error(o(200));
      return As(null, e, t, !0, r);
    }),
    (it.hydrateRoot = function (e, t, r) {
      if (!Wl(e)) throw Error(o(405));
      var s = (r != null && r.hydratedSources) || null,
        l = !1,
        u = "",
        h = sd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = rd(t, null, e, 1, r ?? null, l, !1, u, h)),
        (e[It] = t.current),
        Br(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          (r = s[e]),
            (l = r._getVersion),
            (l = l(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l);
      return new Es(t);
    }),
    (it.render = function (e, t, r) {
      if (!Ms(t)) throw Error(o(200));
      return As(null, e, t, !1, r);
    }),
    (it.unmountComponentAtNode = function (e) {
      if (!Ms(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (Mn(function () {
            As(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[It] = null);
            });
          }),
          !0)
        : !1;
    }),
    (it.unstable_batchedUpdates = jl),
    (it.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
      if (!Ms(r)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return As(e, t, r, !1, s);
    }),
    (it.version = "18.3.1-next-f1338f8080-20240426"),
    it
  );
}
var pd;
function mg() {
  if (pd) return Xl.exports;
  pd = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (Xl.exports = pg()), Xl.exports;
}
var md;
function yg() {
  if (md) return Ns;
  md = 1;
  var n = mg();
  return (Ns.createRoot = n.createRoot), (Ns.hydrateRoot = n.hydrateRoot), Ns;
}
var gg = yg(),
  H = Va();
const La = H.createContext({});
function ja(n) {
  const i = H.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const _a = typeof window < "u",
  Vh = _a ? H.useLayoutEffect : H.useEffect,
  Xs = H.createContext(null);
function Fa(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function za(n, i) {
  const o = n.indexOf(i);
  o > -1 && n.splice(o, 1);
}
const Xt = (n, i, o) => (o > i ? i : o < n ? n : o);
let Ia = () => {};
const Yt = {},
  Lh = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function jh(n) {
  return typeof n == "object" && n !== null;
}
const _h = (n) => /^0[^.\s]+$/u.test(n);
function Oa(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const St = (n) => n,
  vg = (n, i) => (o) => i(n(o)),
  yi = (...n) => n.reduce(vg),
  fi = (n, i, o) => {
    const a = i - n;
    return a === 0 ? 1 : (o - n) / a;
  };
class Ba {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return Fa(this.subscriptions, i), () => za(this.subscriptions, i);
  }
  notify(i, o, a) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, o, a);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(i, o, a);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ft = (n) => n * 1e3,
  xt = (n) => n / 1e3;
function Fh(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const zh = (n, i, o) =>
    (((1 - 3 * o + 3 * i) * n + (3 * o - 6 * i)) * n + 3 * i) * n,
  wg = 1e-7,
  xg = 12;
function Sg(n, i, o, a, c) {
  let d,
    f,
    p = 0;
  do (f = i + (o - i) / 2), (d = zh(f, a, c) - n), d > 0 ? (o = f) : (i = f);
  while (Math.abs(d) > wg && ++p < xg);
  return f;
}
function gi(n, i, o, a) {
  if (n === i && o === a) return St;
  const c = (d) => Sg(d, 0, 1, n, o);
  return (d) => (d === 0 || d === 1 ? d : zh(c(d), i, a));
}
const Ih = (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2,
  Oh = (n) => (i) => 1 - n(1 - i),
  Bh = gi(0.33, 1.53, 0.69, 0.99),
  Ua = Oh(Bh),
  Uh = Ih(Ua),
  Hh = (n) =>
    (n *= 2) < 1 ? 0.5 * Ua(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  Ha = (n) => 1 - Math.sin(Math.acos(n)),
  Wh = Oh(Ha),
  $h = Ih(Ha),
  Tg = gi(0.42, 0, 1, 1),
  kg = gi(0, 0, 0.58, 1),
  Kh = gi(0.42, 0, 0.58, 1),
  Pg = (n) => Array.isArray(n) && typeof n[0] != "number",
  Xh = (n) => Array.isArray(n) && typeof n[0] == "number",
  Cg = {
    linear: St,
    easeIn: Tg,
    easeInOut: Kh,
    easeOut: kg,
    circIn: Ha,
    circInOut: $h,
    circOut: Wh,
    backIn: Ua,
    backInOut: Uh,
    backOut: Bh,
    anticipate: Hh,
  },
  Eg = (n) => typeof n == "string",
  yd = (n) => {
    if (Xh(n)) {
      Ia(n.length === 4);
      const [i, o, a, c] = n;
      return gi(i, o, a, c);
    } else if (Eg(n)) return Cg[n];
    return n;
  },
  Rs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Mg(n, i) {
  let o = new Set(),
    a = new Set(),
    c = !1,
    d = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(y) {
    f.has(y) && (g.schedule(y), n()), y(p);
  }
  const g = {
    schedule: (y, x = !1, T = !1) => {
      const V = T && c ? o : a;
      return x && f.add(y), V.has(y) || V.add(y), y;
    },
    cancel: (y) => {
      a.delete(y), f.delete(y);
    },
    process: (y) => {
      if (((p = y), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([o, a] = [a, o]),
        o.forEach(m),
        o.clear(),
        (c = !1),
        d && ((d = !1), g.process(y));
    },
  };
  return g;
}
const Ag = 40;
function Yh(n, i) {
  let o = !1,
    a = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (o = !0),
    f = Rs.reduce((I, Z) => ((I[Z] = Mg(d)), I), {}),
    {
      setup: p,
      read: m,
      resolveKeyframes: g,
      preUpdate: y,
      update: x,
      preRender: T,
      render: M,
      postRender: V,
    } = f,
    L = () => {
      const I = Yt.useManualTiming ? c.timestamp : performance.now();
      (o = !1),
        Yt.useManualTiming ||
          (c.delta = a ? 1e3 / 60 : Math.max(Math.min(I - c.timestamp, Ag), 1)),
        (c.timestamp = I),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        g.process(c),
        y.process(c),
        x.process(c),
        T.process(c),
        M.process(c),
        V.process(c),
        (c.isProcessing = !1),
        o && i && ((a = !1), n(L));
    },
    _ = () => {
      (o = !0), (a = !0), c.isProcessing || n(L);
    };
  return {
    schedule: Rs.reduce((I, Z) => {
      const X = f[Z];
      return (
        (I[Z] = (q, ee = !1, Q = !1) => (o || _(), X.schedule(q, ee, Q))), I
      );
    }, {}),
    cancel: (I) => {
      for (let Z = 0; Z < Rs.length; Z++) f[Rs[Z]].cancel(I);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: Te,
  cancel: mn,
  state: Be,
  steps: Ql,
} = Yh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let Fs;
function Dg() {
  Fs = void 0;
}
const st = {
    now: () => (
      Fs === void 0 &&
        st.set(
          Be.isProcessing || Yt.useManualTiming
            ? Be.timestamp
            : performance.now()
        ),
      Fs
    ),
    set: (n) => {
      (Fs = n), queueMicrotask(Dg);
    },
  },
  Gh = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Qh = Gh("--"),
  Ng = Gh("var(--"),
  Wa = (n) => (Ng(n) ? Rg.test(n.split("/*")[0].trim()) : !1),
  Rg =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  yr = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  di = { ...yr, transform: (n) => Xt(0, 1, n) },
  Vs = { ...yr, default: 1 },
  li = (n) => Math.round(n * 1e5) / 1e5,
  $a = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Vg(n) {
  return n == null;
}
const Lg =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ka = (n, i) => (o) =>
    !!(
      (typeof o == "string" && Lg.test(o) && o.startsWith(n)) ||
      (i && !Vg(o) && Object.prototype.hasOwnProperty.call(o, i))
    ),
  Zh = (n, i, o) => (a) => {
    if (typeof a != "string") return a;
    const [c, d, f, p] = a.match($a);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [o]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  jg = (n) => Xt(0, 255, n),
  Zl = { ...yr, transform: (n) => Math.round(jg(n)) },
  Ln = {
    test: Ka("rgb", "red"),
    parse: Zh("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: o, alpha: a = 1 }) =>
      "rgba(" +
      Zl.transform(n) +
      ", " +
      Zl.transform(i) +
      ", " +
      Zl.transform(o) +
      ", " +
      li(di.transform(a)) +
      ")",
  };
function _g(n) {
  let i = "",
    o = "",
    a = "",
    c = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (o = n.substring(3, 5)),
        (a = n.substring(5, 7)),
        (c = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (o = n.substring(2, 3)),
        (a = n.substring(3, 4)),
        (c = n.substring(4, 5)),
        (i += i),
        (o += o),
        (a += a),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(o, 16),
      blue: parseInt(a, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const ca = { test: Ka("#"), parse: _g, transform: Ln.transform },
  vi = (n) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  pn = vi("deg"),
  zt = vi("%"),
  te = vi("px"),
  Fg = vi("vh"),
  zg = vi("vw"),
  gd = {
    ...zt,
    parse: (n) => zt.parse(n) / 100,
    transform: (n) => zt.transform(n * 100),
  },
  ar = {
    test: Ka("hsl", "hue"),
    parse: Zh("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: o, alpha: a = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      zt.transform(li(i)) +
      ", " +
      zt.transform(li(o)) +
      ", " +
      li(di.transform(a)) +
      ")",
  },
  Re = {
    test: (n) => Ln.test(n) || ca.test(n) || ar.test(n),
    parse: (n) =>
      Ln.test(n) ? Ln.parse(n) : ar.test(n) ? ar.parse(n) : ca.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
        ? Ln.transform(n)
        : ar.transform(n),
    getAnimatableNone: (n) => {
      const i = Re.parse(n);
      return (i.alpha = 0), Re.transform(i);
    },
  },
  Ig =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Og(n) {
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (n.match($a)?.length || 0) + (n.match(Ig)?.length || 0) > 0
  );
}
const qh = "number",
  Jh = "color",
  Bg = "var",
  Ug = "var(",
  vd = "${}",
  Hg =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function hi(n) {
  const i = n.toString(),
    o = [],
    a = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      Hg,
      (m) => (
        Re.test(m)
          ? (a.color.push(d), c.push(Jh), o.push(Re.parse(m)))
          : m.startsWith(Ug)
          ? (a.var.push(d), c.push(Bg), o.push(m))
          : (a.number.push(d), c.push(qh), o.push(parseFloat(m))),
        ++d,
        vd
      )
    )
    .split(vd);
  return { values: o, split: p, indexes: a, types: c };
}
function bh(n) {
  return hi(n).values;
}
function ep(n) {
  const { split: i, types: o } = hi(n),
    a = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < a; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = o[f];
        p === qh
          ? (d += li(c[f]))
          : p === Jh
          ? (d += Re.transform(c[f]))
          : (d += c[f]);
      }
    return d;
  };
}
const Wg = (n) =>
  typeof n == "number" ? 0 : Re.test(n) ? Re.getAnimatableNone(n) : n;
function $g(n) {
  const i = bh(n);
  return ep(n)(i.map(Wg));
}
const yn = {
  test: Og,
  parse: bh,
  createTransformer: ep,
  getAnimatableNone: $g,
};
function ql(n, i, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? n + (i - n) * 6 * o
      : o < 1 / 2
      ? i
      : o < 2 / 3
      ? n + (i - n) * (2 / 3 - o) * 6
      : n
  );
}
function Kg({ hue: n, saturation: i, lightness: o, alpha: a }) {
  (n /= 360), (i /= 100), (o /= 100);
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = o;
  else {
    const p = o < 0.5 ? o * (1 + i) : o + i - o * i,
      m = 2 * o - p;
    (c = ql(m, p, n + 1 / 3)), (d = ql(m, p, n)), (f = ql(m, p, n - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: a,
  };
}
function Bs(n, i) {
  return (o) => (o > 0 ? i : n);
}
const Ce = (n, i, o) => n + (i - n) * o,
  Jl = (n, i, o) => {
    const a = n * n,
      c = o * (i * i - a) + a;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  Xg = [ca, Ln, ar],
  Yg = (n) => Xg.find((i) => i.test(n));
function wd(n) {
  const i = Yg(n);
  if (!i) return !1;
  let o = i.parse(n);
  return i === ar && (o = Kg(o)), o;
}
const xd = (n, i) => {
    const o = wd(n),
      a = wd(i);
    if (!o || !a) return Bs(n, i);
    const c = { ...o };
    return (d) => (
      (c.red = Jl(o.red, a.red, d)),
      (c.green = Jl(o.green, a.green, d)),
      (c.blue = Jl(o.blue, a.blue, d)),
      (c.alpha = Ce(o.alpha, a.alpha, d)),
      Ln.transform(c)
    );
  },
  fa = new Set(["none", "hidden"]);
function Gg(n, i) {
  return fa.has(n) ? (o) => (o <= 0 ? n : i) : (o) => (o >= 1 ? i : n);
}
function Qg(n, i) {
  return (o) => Ce(n, i, o);
}
function Xa(n) {
  return typeof n == "number"
    ? Qg
    : typeof n == "string"
    ? Wa(n)
      ? Bs
      : Re.test(n)
      ? xd
      : Jg
    : Array.isArray(n)
    ? tp
    : typeof n == "object"
    ? Re.test(n)
      ? xd
      : Zg
    : Bs;
}
function tp(n, i) {
  const o = [...n],
    a = o.length,
    c = n.map((d, f) => Xa(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < a; f++) o[f] = c[f](d);
    return o;
  };
}
function Zg(n, i) {
  const o = { ...n, ...i },
    a = {};
  for (const c in o)
    n[c] !== void 0 && i[c] !== void 0 && (a[c] = Xa(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in a) o[d] = a[d](c);
    return o;
  };
}
function qg(n, i) {
  const o = [],
    a = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const d = i.types[c],
      f = n.indexes[d][a[d]],
      p = n.values[f] ?? 0;
    (o[c] = p), a[d]++;
  }
  return o;
}
const Jg = (n, i) => {
  const o = yn.createTransformer(i),
    a = hi(n),
    c = hi(i);
  return a.indexes.var.length === c.indexes.var.length &&
    a.indexes.color.length === c.indexes.color.length &&
    a.indexes.number.length >= c.indexes.number.length
    ? (fa.has(n) && !c.values.length) || (fa.has(i) && !a.values.length)
      ? Gg(n, i)
      : yi(tp(qg(a, c), c.values), o)
    : Bs(n, i);
};
function np(n, i, o) {
  return typeof n == "number" && typeof i == "number" && typeof o == "number"
    ? Ce(n, i, o)
    : Xa(n)(n, i);
}
const bg = (n) => {
    const i = ({ timestamp: o }) => n(o);
    return {
      start: (o = !0) => Te.update(i, o),
      stop: () => mn(i),
      now: () => (Be.isProcessing ? Be.timestamp : st.now()),
    };
  },
  rp = (n, i, o = 10) => {
    let a = "";
    const c = Math.max(Math.round(i / o), 2);
    for (let d = 0; d < c; d++)
      a += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${a.substring(0, a.length - 2)})`;
  },
  Us = 2e4;
function Ya(n) {
  let i = 0;
  const o = 50;
  let a = n.next(i);
  for (; !a.done && i < Us; ) (i += o), (a = n.next(i));
  return i >= Us ? 1 / 0 : i;
}
function ev(n, i = 100, o) {
  const a = o({ ...n, keyframes: [0, i] }),
    c = Math.min(Ya(a), Us);
  return {
    type: "keyframes",
    ease: (d) => a.next(c * d).value / i,
    duration: xt(c),
  };
}
const tv = 5;
function ip(n, i, o) {
  const a = Math.max(i - tv, 0);
  return Fh(o - n(a), i - a);
}
const Me = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  bl = 0.001;
function nv({
  duration: n = Me.duration,
  bounce: i = Me.bounce,
  velocity: o = Me.velocity,
  mass: a = Me.mass,
}) {
  let c,
    d,
    f = 1 - i;
  (f = Xt(Me.minDamping, Me.maxDamping, f)),
    (n = Xt(Me.minDuration, Me.maxDuration, xt(n))),
    f < 1
      ? ((c = (g) => {
          const y = g * f,
            x = y * n,
            T = y - o,
            M = da(g, f),
            V = Math.exp(-x);
          return bl - (T / M) * V;
        }),
        (d = (g) => {
          const x = g * f * n,
            T = x * o + o,
            M = Math.pow(f, 2) * Math.pow(g, 2) * n,
            V = Math.exp(-x),
            L = da(Math.pow(g, 2), f);
          return ((-c(g) + bl > 0 ? -1 : 1) * ((T - M) * V)) / L;
        }))
      : ((c = (g) => {
          const y = Math.exp(-g * n),
            x = (g - o) * n + 1;
          return -bl + y * x;
        }),
        (d = (g) => {
          const y = Math.exp(-g * n),
            x = (o - g) * (n * n);
          return y * x;
        }));
  const p = 5 / n,
    m = iv(c, d, p);
  if (((n = Ft(n)), isNaN(m)))
    return { stiffness: Me.stiffness, damping: Me.damping, duration: n };
  {
    const g = Math.pow(m, 2) * a;
    return { stiffness: g, damping: f * 2 * Math.sqrt(a * g), duration: n };
  }
}
const rv = 12;
function iv(n, i, o) {
  let a = o;
  for (let c = 1; c < rv; c++) a = a - n(a) / i(a);
  return a;
}
function da(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const sv = ["duration", "bounce"],
  ov = ["stiffness", "damping", "mass"];
function Sd(n, i) {
  return i.some((o) => n[o] !== void 0);
}
function lv(n) {
  let i = {
    velocity: Me.velocity,
    stiffness: Me.stiffness,
    damping: Me.damping,
    mass: Me.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Sd(n, ov) && Sd(n, sv))
    if (n.visualDuration) {
      const o = n.visualDuration,
        a = (2 * Math.PI) / (o * 1.2),
        c = a * a,
        d = 2 * Xt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Me.mass, stiffness: c, damping: d };
    } else {
      const o = nv(n);
      (i = { ...i, ...o, mass: Me.mass }), (i.isResolvedFromDuration = !0);
    }
  return i;
}
function Hs(n = Me.visualDuration, i = Me.bounce) {
  const o =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n;
  let { restSpeed: a, restDelta: c } = o;
  const d = o.keyframes[0],
    f = o.keyframes[o.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: g,
      mass: y,
      duration: x,
      velocity: T,
      isResolvedFromDuration: M,
    } = lv({ ...o, velocity: -xt(o.velocity || 0) }),
    V = T || 0,
    L = g / (2 * Math.sqrt(m * y)),
    _ = f - d,
    z = xt(Math.sqrt(m / y)),
    U = Math.abs(_) < 5;
  a || (a = U ? Me.restSpeed.granular : Me.restSpeed.default),
    c || (c = U ? Me.restDelta.granular : Me.restDelta.default);
  let I;
  if (L < 1) {
    const X = da(z, L);
    I = (q) => {
      const ee = Math.exp(-L * z * q);
      return (
        f - ee * (((V + L * z * _) / X) * Math.sin(X * q) + _ * Math.cos(X * q))
      );
    };
  } else if (L === 1) I = (X) => f - Math.exp(-z * X) * (_ + (V + z * _) * X);
  else {
    const X = z * Math.sqrt(L * L - 1);
    I = (q) => {
      const ee = Math.exp(-L * z * q),
        Q = Math.min(X * q, 300);
      return (
        f - (ee * ((V + L * z * _) * Math.sinh(Q) + X * _ * Math.cosh(Q))) / X
      );
    };
  }
  const Z = {
    calculatedDuration: (M && x) || null,
    next: (X) => {
      const q = I(X);
      if (M) p.done = X >= x;
      else {
        let ee = X === 0 ? V : 0;
        L < 1 && (ee = X === 0 ? Ft(V) : ip(I, X, q));
        const Q = Math.abs(ee) <= a,
          pe = Math.abs(f - q) <= c;
        p.done = Q && pe;
      }
      return (p.value = p.done ? f : q), p;
    },
    toString: () => {
      const X = Math.min(Ya(Z), Us),
        q = rp((ee) => Z.next(X * ee).value, X, 30);
      return X + "ms " + q;
    },
    toTransition: () => {},
  };
  return Z;
}
Hs.applyToOptions = (n) => {
  const i = ev(n, 100, Hs);
  return (
    (n.ease = i.ease), (n.duration = Ft(i.duration)), (n.type = "keyframes"), n
  );
};
function ha({
  keyframes: n,
  velocity: i = 0,
  power: o = 0.8,
  timeConstant: a = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: g = 0.5,
  restSpeed: y,
}) {
  const x = n[0],
    T = { done: !1, value: x },
    M = (Q) => (p !== void 0 && Q < p) || (m !== void 0 && Q > m),
    V = (Q) =>
      p === void 0
        ? m
        : m === void 0 || Math.abs(p - Q) < Math.abs(m - Q)
        ? p
        : m;
  let L = o * i;
  const _ = x + L,
    z = f === void 0 ? _ : f(_);
  z !== _ && (L = z - x);
  const U = (Q) => -L * Math.exp(-Q / a),
    I = (Q) => z + U(Q),
    Z = (Q) => {
      const pe = U(Q),
        ge = I(Q);
      (T.done = Math.abs(pe) <= g), (T.value = T.done ? z : ge);
    };
  let X, q;
  const ee = (Q) => {
    M(T.value) &&
      ((X = Q),
      (q = Hs({
        keyframes: [T.value, V(T.value)],
        velocity: ip(I, Q, T.value),
        damping: c,
        stiffness: d,
        restDelta: g,
        restSpeed: y,
      })));
  };
  return (
    ee(0),
    {
      calculatedDuration: null,
      next: (Q) => {
        let pe = !1;
        return (
          !q && X === void 0 && ((pe = !0), Z(Q), ee(Q)),
          X !== void 0 && Q >= X ? q.next(Q - X) : (!pe && Z(Q), T)
        );
      },
    }
  );
}
function av(n, i, o) {
  const a = [],
    c = o || Yt.mix || np,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || St : i;
      p = yi(m, p);
    }
    a.push(p);
  }
  return a;
}
function uv(n, i, { clamp: o = !0, ease: a, mixer: c } = {}) {
  const d = n.length;
  if ((Ia(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = av(i, a, c),
    m = p.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++);
      const T = fi(n[x], n[x + 1], y);
      return p[x](T);
    };
  return o ? (y) => g(Xt(n[0], n[d - 1], y)) : g;
}
function cv(n, i) {
  const o = n[n.length - 1];
  for (let a = 1; a <= i; a++) {
    const c = fi(0, i, a);
    n.push(Ce(o, 1, c));
  }
}
function fv(n) {
  const i = [0];
  return cv(i, n.length - 1), i;
}
function dv(n, i) {
  return n.map((o) => o * i);
}
function hv(n, i) {
  return n.map(() => i || Kh).splice(0, n.length - 1);
}
function ai({
  duration: n = 300,
  keyframes: i,
  times: o,
  ease: a = "easeInOut",
}) {
  const c = Pg(a) ? a.map(yd) : yd(a),
    d = { done: !1, value: i[0] },
    f = dv(o && o.length === i.length ? o : fv(i), n),
    p = uv(f, i, { ease: Array.isArray(c) ? c : hv(i, c) });
  return {
    calculatedDuration: n,
    next: (m) => ((d.value = p(m)), (d.done = m >= n), d),
  };
}
const pv = (n) => n !== null;
function Ga(n, { repeat: i, repeatType: o = "loop" }, a, c = 1) {
  const d = n.filter(pv),
    p = c < 0 || (i && o !== "loop" && i % 2 === 1) ? 0 : d.length - 1;
  return !p || a === void 0 ? d[p] : a;
}
const mv = { decay: ha, inertia: ha, tween: ai, keyframes: ai, spring: Hs };
function sp(n) {
  typeof n.type == "string" && (n.type = mv[n.type]);
}
class Qa {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, o) {
    return this.finished.then(i, o);
  }
}
const yv = (n) => n / 100;
class Za extends Qa {
  constructor(i) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: o } = this.options;
        o && o.updatedAt !== st.now() && this.tick(st.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.());
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    sp(i);
    const {
      type: o = ai,
      repeat: a = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: f = 0,
    } = i;
    let { keyframes: p } = i;
    const m = o || ai;
    m !== ai &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = yi(yv, np(p[0], p[1]))), (p = [0, 100]));
    const g = m({ ...i, keyframes: p });
    d === "mirror" &&
      (this.mirroredGenerator = m({
        ...i,
        keyframes: [...p].reverse(),
        velocity: -f,
      })),
      g.calculatedDuration === null && (g.calculatedDuration = Ya(g));
    const { calculatedDuration: y } = g;
    (this.calculatedDuration = y),
      (this.resolvedDuration = y + c),
      (this.totalDuration = this.resolvedDuration * (a + 1) - c),
      (this.generator = g);
  }
  updateTime(i) {
    const o = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = o);
  }
  tick(i, o = !1) {
    const {
      generator: a,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return a.next(0);
    const {
      delay: g = 0,
      keyframes: y,
      repeat: x,
      repeatType: T,
      repeatDelay: M,
      type: V,
      onUpdate: L,
      finalKeyframe: _,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - c / this.speed, this.startTime)),
      o ? (this.currentTime = i) : this.updateTime(i);
    const z = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1),
      U = this.playbackSpeed >= 0 ? z < 0 : z > c;
    (this.currentTime = Math.max(z, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let I = this.currentTime,
      Z = a;
    if (x) {
      const Q = Math.min(this.currentTime, c) / p;
      let pe = Math.floor(Q),
        ge = Q % 1;
      !ge && Q >= 1 && (ge = 1),
        ge === 1 && pe--,
        (pe = Math.min(pe, x + 1)),
        !!(pe % 2) &&
          (T === "reverse"
            ? ((ge = 1 - ge), M && (ge -= M / p))
            : T === "mirror" && (Z = f)),
        (I = Xt(0, 1, ge) * p);
    }
    const X = U ? { done: !1, value: y[0] } : Z.next(I);
    d && (X.value = d(X.value));
    let { done: q } = X;
    !U &&
      m !== null &&
      (q =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const ee =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && q));
    return (
      ee && V !== ha && (X.value = Ga(y, this.options, _, this.speed)),
      L && L(X.value),
      ee && this.finish(),
      X
    );
  }
  then(i, o) {
    return this.finished.then(i, o);
  }
  get duration() {
    return xt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + xt(i);
  }
  get time() {
    return xt(this.currentTime);
  }
  set time(i) {
    (i = Ft(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(st.now());
    const o = this.playbackSpeed !== i;
    (this.playbackSpeed = i), o && (this.time = xt(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = bg, startTime: o } = this.options;
    this.driver || (this.driver = i((c) => this.tick(c))),
      this.options.onPlay?.();
    const a = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = a))
      : this.holdTime !== null
      ? (this.startTime = a - this.holdTime)
      : this.startTime || (this.startTime = o ?? a),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(st.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.();
  }
  cancel() {
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return (this.startTime = 0), this.tick(i, !0);
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function gv(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const jn = (n) => (n * 180) / Math.PI,
  pa = (n) => {
    const i = jn(Math.atan2(n[1], n[0]));
    return ma(i);
  },
  vv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: pa,
    rotateZ: pa,
    skewX: (n) => jn(Math.atan(n[1])),
    skewY: (n) => jn(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  ma = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Td = pa,
  kd = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Pd = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  wv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: kd,
    scaleY: Pd,
    scale: (n) => (kd(n) + Pd(n)) / 2,
    rotateX: (n) => ma(jn(Math.atan2(n[6], n[5]))),
    rotateY: (n) => ma(jn(Math.atan2(-n[2], n[0]))),
    rotateZ: Td,
    rotate: Td,
    skewX: (n) => jn(Math.atan(n[4])),
    skewY: (n) => jn(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function ya(n) {
  return n.includes("scale") ? 1 : 0;
}
function ga(n, i) {
  if (!n || n === "none") return ya(i);
  const o = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let a, c;
  if (o) (a = wv), (c = o);
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (a = vv), (c = p);
  }
  if (!c) return ya(i);
  const d = a[i],
    f = c[1].split(",").map(Sv);
  return typeof d == "function" ? d(f) : f[d];
}
const xv = (n, i) => {
  const { transform: o = "none" } = getComputedStyle(n);
  return ga(o, i);
};
function Sv(n) {
  return parseFloat(n.trim());
}
const gr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vr = new Set(gr),
  Cd = (n) => n === yr || n === te,
  Tv = new Set(["x", "y", "z"]),
  kv = gr.filter((n) => !Tv.has(n));
function Pv(n) {
  const i = [];
  return (
    kv.forEach((o) => {
      const a = n.getValue(o);
      a !== void 0 &&
        (i.push([o, a.get()]), a.set(o.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const _n = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: o = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(o),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: o = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(o),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: (n, { transform: i }) => ga(i, "x"),
  y: (n, { transform: i }) => ga(i, "y"),
};
_n.translateX = _n.x;
_n.translateY = _n.y;
const Fn = new Set();
let va = !1,
  wa = !1,
  xa = !1;
function op() {
  if (wa) {
    const n = Array.from(Fn).filter((a) => a.needsMeasurement),
      i = new Set(n.map((a) => a.element)),
      o = new Map();
    i.forEach((a) => {
      const c = Pv(a);
      c.length && (o.set(a, c), a.render());
    }),
      n.forEach((a) => a.measureInitialState()),
      i.forEach((a) => {
        a.render();
        const c = o.get(a);
        c &&
          c.forEach(([d, f]) => {
            a.getValue(d)?.set(f);
          });
      }),
      n.forEach((a) => a.measureEndState()),
      n.forEach((a) => {
        a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY);
      });
  }
  (wa = !1), (va = !1), Fn.forEach((n) => n.complete(xa)), Fn.clear();
}
function lp() {
  Fn.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (wa = !0);
  });
}
function Cv() {
  (xa = !0), lp(), op(), (xa = !1);
}
class qa {
  constructor(i, o, a, c, d, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = o),
      (this.name = a),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Fn.add(this),
          va || ((va = !0), Te.read(lp), Te.resolveKeyframes(op)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: o,
      element: a,
      motionValue: c,
    } = this;
    if (i[0] === null) {
      const d = c?.get(),
        f = i[i.length - 1];
      if (d !== void 0) i[0] = d;
      else if (a && o) {
        const p = a.readValue(o, f);
        p != null && (i[0] = p);
      }
      i[0] === void 0 && (i[0] = f), c && d === void 0 && c.set(i[0]);
    }
    gv(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Fn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Fn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Ev = (n) => n.startsWith("--");
function Mv(n, i, o) {
  Ev(i) ? n.style.setProperty(i, o) : (n.style[i] = o);
}
const Av = Oa(() => window.ScrollTimeline !== void 0),
  Dv = {};
function Nv(n, i) {
  const o = Oa(n);
  return () => Dv[i] ?? o();
}
const ap = Nv(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  oi = ([n, i, o, a]) => `cubic-bezier(${n}, ${i}, ${o}, ${a})`,
  Ed = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: oi([0, 0.65, 0.55, 1]),
    circOut: oi([0.55, 0, 1, 0.45]),
    backIn: oi([0.31, 0.01, 0.66, -0.59]),
    backOut: oi([0.33, 1.53, 0.69, 0.99]),
  };
function up(n, i) {
  if (n)
    return typeof n == "function"
      ? ap()
        ? rp(n, i)
        : "ease-out"
      : Xh(n)
      ? oi(n)
      : Array.isArray(n)
      ? n.map((o) => up(o, i) || Ed.easeOut)
      : Ed[n];
}
function Rv(
  n,
  i,
  o,
  {
    delay: a = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: m,
  } = {},
  g = void 0
) {
  const y = { [i]: o };
  m && (y.offset = m);
  const x = up(p, c);
  Array.isArray(x) && (y.easing = x);
  const T = {
    delay: a,
    duration: c,
    easing: Array.isArray(x) ? "linear" : x,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return g && (T.pseudoElement = g), n.animate(y, T);
}
function cp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function Vv({ type: n, ...i }) {
  return cp(n) && ap()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class Lv extends Qa {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: o,
      name: a,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: m,
    } = i;
    (this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = i),
      Ia(typeof i.type != "string");
    const g = Vv(i);
    (this.animation = Rv(o, a, c, g, d)),
      g.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const y = Ga(c, this.options, p, this.speed);
          this.updateMotionValue ? this.updateMotionValue(y) : Mv(o, a, y),
            this.animation.cancel();
        }
        m?.(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return xt(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + xt(i);
  }
  get time() {
    return xt(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    (this.finishedTime = null), (this.animation.currentTime = Ft(i));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: o }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && Av() ? ((this.animation.timeline = i), St) : o(this)
    );
  }
}
const fp = { anticipate: Hh, backInOut: Uh, circInOut: $h };
function jv(n) {
  return n in fp;
}
function _v(n) {
  typeof n.ease == "string" && jv(n.ease) && (n.ease = fp[n.ease]);
}
const Md = 10;
class Fv extends Lv {
  constructor(i) {
    _v(i),
      sp(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i);
  }
  updateMotionValue(i) {
    const {
      motionValue: o,
      onUpdate: a,
      onComplete: c,
      element: d,
      ...f
    } = this.options;
    if (!o) return;
    if (i !== void 0) {
      o.set(i);
      return;
    }
    const p = new Za({ ...f, autoplay: !1 }),
      m = Ft(this.finishedTime ?? this.time);
    o.setWithVelocity(p.sample(m - Md).value, p.sample(m).value, Md), p.stop();
  }
}
const Ad = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (yn.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function zv(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let o = 0; o < n.length; o++) if (n[o] !== i) return !0;
}
function Iv(n, i, o, a) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = Ad(c, i),
    p = Ad(d, i);
  return !f || !p ? !1 : zv(n) || ((o === "spring" || cp(o)) && a);
}
function Sa(n) {
  (n.duration = 0), (n.type = "keyframes");
}
const Ov = new Set(["opacity", "clipPath", "filter", "transform"]),
  Bv = Oa(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Uv(n) {
  const {
    motionValue: i,
    name: o,
    repeatDelay: a,
    repeatType: c,
    damping: d,
    type: f,
  } = n;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: m, transformTemplate: g } = i.owner.getProps();
  return (
    Bv() &&
    o &&
    Ov.has(o) &&
    (o !== "transform" || !g) &&
    !m &&
    !a &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const Hv = 40;
class Wv extends Qa {
  constructor({
    autoplay: i = !0,
    delay: o = 0,
    type: a = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: p,
    name: m,
    motionValue: g,
    element: y,
    ...x
  }) {
    super(),
      (this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel();
      }),
      (this.createdAt = st.now());
    const T = {
        autoplay: i,
        delay: o,
        type: a,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        name: m,
        motionValue: g,
        element: y,
        ...x,
      },
      M = y?.KeyframeResolver || qa;
    (this.keyframeResolver = new M(
      p,
      (V, L, _) => this.onKeyframesResolved(V, L, T, !_),
      m,
      g,
      y
    )),
      this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, o, a, c) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: p,
      delay: m,
      isHandoff: g,
      onUpdate: y,
    } = a;
    (this.resolvedAt = st.now()),
      Iv(i, d, f, p) ||
        ((Yt.instantAnimations || !m) && y?.(Ga(i, a, o)),
        (i[0] = i[i.length - 1]),
        Sa(a),
        (a.repeat = 0));
    const T = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Hv
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...a,
        keyframes: i,
      },
      M =
        !g && Uv(T)
          ? new Fv({ ...T, element: T.motionValue.owner.current })
          : new Za(T);
    M.finished.then(() => this.notifyFinished()).catch(St),
      this.pendingTimeline &&
        ((this.stopTimeline = M.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = M);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, o) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), Cv()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const $v = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Kv(n) {
  const i = $v.exec(n);
  if (!i) return [,];
  const [, o, a, c] = i;
  return [`--${o ?? a}`, c];
}
function dp(n, i, o = 1) {
  const [a, c] = Kv(n);
  if (!a) return;
  const d = window.getComputedStyle(i).getPropertyValue(a);
  if (d) {
    const f = d.trim();
    return Lh(f) ? parseFloat(f) : f;
  }
  return Wa(c) ? dp(c, i, o + 1) : c;
}
function Ja(n, i) {
  return n?.[i] ?? n?.default ?? n;
}
const hp = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...gr,
  ]),
  Xv = { test: (n) => n === "auto", parse: (n) => n },
  pp = (n) => (i) => i.test(n),
  mp = [yr, te, zt, pn, zg, Fg, Xv],
  Dd = (n) => mp.find(pp(n));
function Yv(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
    ? n === "none" || n === "0" || _h(n)
    : !0;
}
const Gv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Qv(n) {
  const [i, o] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [a] = o.match($a) || [];
  if (!a) return n;
  const c = o.replace(a, "");
  let d = Gv.has(i) ? 1 : 0;
  return a !== o && (d *= 100), i + "(" + d + c + ")";
}
const Zv = /\b([a-z-]*)\(.*?\)/gu,
  Ta = {
    ...yn,
    getAnimatableNone: (n) => {
      const i = n.match(Zv);
      return i ? i.map(Qv).join(" ") : n;
    },
  },
  Nd = { ...yr, transform: Math.round },
  qv = {
    rotate: pn,
    rotateX: pn,
    rotateY: pn,
    rotateZ: pn,
    scale: Vs,
    scaleX: Vs,
    scaleY: Vs,
    scaleZ: Vs,
    skew: pn,
    skewX: pn,
    skewY: pn,
    distance: te,
    translateX: te,
    translateY: te,
    translateZ: te,
    x: te,
    y: te,
    z: te,
    perspective: te,
    transformPerspective: te,
    opacity: di,
    originX: gd,
    originY: gd,
    originZ: te,
  },
  ba = {
    borderWidth: te,
    borderTopWidth: te,
    borderRightWidth: te,
    borderBottomWidth: te,
    borderLeftWidth: te,
    borderRadius: te,
    radius: te,
    borderTopLeftRadius: te,
    borderTopRightRadius: te,
    borderBottomRightRadius: te,
    borderBottomLeftRadius: te,
    width: te,
    maxWidth: te,
    height: te,
    maxHeight: te,
    top: te,
    right: te,
    bottom: te,
    left: te,
    padding: te,
    paddingTop: te,
    paddingRight: te,
    paddingBottom: te,
    paddingLeft: te,
    margin: te,
    marginTop: te,
    marginRight: te,
    marginBottom: te,
    marginLeft: te,
    backgroundPositionX: te,
    backgroundPositionY: te,
    ...qv,
    zIndex: Nd,
    fillOpacity: di,
    strokeOpacity: di,
    numOctaves: Nd,
  },
  Jv = {
    ...ba,
    color: Re,
    backgroundColor: Re,
    outlineColor: Re,
    fill: Re,
    stroke: Re,
    borderColor: Re,
    borderTopColor: Re,
    borderRightColor: Re,
    borderBottomColor: Re,
    borderLeftColor: Re,
    filter: Ta,
    WebkitFilter: Ta,
  },
  yp = (n) => Jv[n];
function gp(n, i) {
  let o = yp(n);
  return (
    o !== Ta && (o = yn), o.getAnimatableNone ? o.getAnimatableNone(i) : void 0
  );
}
const bv = new Set(["auto", "none", "0"]);
function e0(n, i, o) {
  let a = 0,
    c;
  for (; a < n.length && !c; ) {
    const d = n[a];
    typeof d == "string" && !bv.has(d) && hi(d).values.length && (c = n[a]),
      a++;
  }
  if (c && o) for (const d of i) n[d] = gp(o, c);
}
class t0 extends qa {
  constructor(i, o, a, c, d) {
    super(i, o, a, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: o, name: a } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let g = i[m];
      if (typeof g == "string" && ((g = g.trim()), Wa(g))) {
        const y = dp(g, o.current);
        y !== void 0 && (i[m] = y),
          m === i.length - 1 && (this.finalKeyframe = g);
      }
    }
    if ((this.resolveNoneKeyframes(), !hp.has(a) || i.length !== 2)) return;
    const [c, d] = i,
      f = Dd(c),
      p = Dd(d);
    if (f !== p)
      if (Cd(f) && Cd(p))
        for (let m = 0; m < i.length; m++) {
          const g = i[m];
          typeof g == "string" && (i[m] = parseFloat(g));
        }
      else _n[a] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: o } = this,
      a = [];
    for (let c = 0; c < i.length; c++) (i[c] === null || Yv(i[c])) && a.push(c);
    a.length && e0(i, a, o);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: o, name: a } = this;
    if (!i || !i.current) return;
    a === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = _n[a](
        i.measureViewportBox(),
        window.getComputedStyle(i.current)
      )),
      (o[0] = this.measuredOrigin);
    const c = o[o.length - 1];
    c !== void 0 && i.getValue(a, c).jump(c, !1);
  }
  measureEndState() {
    const { element: i, name: o, unresolvedKeyframes: a } = this;
    if (!i || !i.current) return;
    const c = i.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const d = a.length - 1,
      f = a[d];
    (a[d] = _n[o](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([p, m]) => {
          i.getValue(p).set(m);
        }),
      this.resolveNoneKeyframes();
  }
}
function n0(n, i, o) {
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let a = document;
    const c = o?.[n] ?? a.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n);
}
const vp = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function wp(n) {
  return jh(n) && "offsetHeight" in n;
}
const Rd = 30,
  r0 = (n) => !isNaN(parseFloat(n));
class i0 {
  constructor(i, o = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (a) => {
        const c = st.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(a),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = o.owner);
  }
  setCurrent(i) {
    (this.current = i),
      (this.updatedAt = st.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = r0(this.current));
  }
  setPrevFrameValue(i = this.current) {
    (this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, o) {
    this.events[i] || (this.events[i] = new Ba());
    const a = this.events[i].add(o);
    return i === "change"
      ? () => {
          a(),
            Te.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : a;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, o) {
    (this.passiveEffect = i), (this.stopPassiveEffect = o);
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, o, a) {
    this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - a);
  }
  jump(i, o = !0) {
    this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(i);
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = st.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Rd
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Rd);
    return Fh(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((o) => {
        (this.hasAnimated = !0),
          (this.animation = i(o)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function pr(n, i) {
  return new i0(n, i);
}
const { schedule: eu } = Yh(queueMicrotask, !1),
  Nt = { x: !1, y: !1 };
function xp() {
  return Nt.x || Nt.y;
}
function s0(n) {
  return n === "x" || n === "y"
    ? Nt[n]
      ? null
      : ((Nt[n] = !0),
        () => {
          Nt[n] = !1;
        })
    : Nt.x || Nt.y
    ? null
    : ((Nt.x = Nt.y = !0),
      () => {
        Nt.x = Nt.y = !1;
      });
}
function Sp(n, i) {
  const o = n0(n),
    a = new AbortController(),
    c = { passive: !0, ...i, signal: a.signal };
  return [o, c, () => a.abort()];
}
function Vd(n) {
  return !(n.pointerType === "touch" || xp());
}
function o0(n, i, o = {}) {
  const [a, c, d] = Sp(n, o),
    f = (p) => {
      if (!Vd(p)) return;
      const { target: m } = p,
        g = i(m, p);
      if (typeof g != "function" || !m) return;
      const y = (x) => {
        Vd(x) && (g(x), m.removeEventListener("pointerleave", y));
      };
      m.addEventListener("pointerleave", y, c);
    };
  return (
    a.forEach((p) => {
      p.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const Tp = (n, i) => (i ? (n === i ? !0 : Tp(n, i.parentElement)) : !1),
  tu = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  l0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function a0(n) {
  return l0.has(n.tagName) || n.tabIndex !== -1;
}
const zs = new WeakSet();
function Ld(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function ea(n, i) {
  n.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 })
  );
}
const u0 = (n, i) => {
  const o = n.currentTarget;
  if (!o) return;
  const a = Ld(() => {
    if (zs.has(o)) return;
    ea(o, "down");
    const c = Ld(() => {
        ea(o, "up");
      }),
      d = () => ea(o, "cancel");
    o.addEventListener("keyup", c, i), o.addEventListener("blur", d, i);
  });
  o.addEventListener("keydown", a, i),
    o.addEventListener("blur", () => o.removeEventListener("keydown", a), i);
};
function jd(n) {
  return tu(n) && !xp();
}
function c0(n, i, o = {}) {
  const [a, c, d] = Sp(n, o),
    f = (p) => {
      const m = p.currentTarget;
      if (!jd(p)) return;
      zs.add(m);
      const g = i(m, p),
        y = (M, V) => {
          window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", T),
            zs.has(m) && zs.delete(m),
            jd(M) && typeof g == "function" && g(M, { success: V });
        },
        x = (M) => {
          y(
            M,
            m === window ||
              m === document ||
              o.useGlobalTarget ||
              Tp(m, M.target)
          );
        },
        T = (M) => {
          y(M, !1);
        };
      window.addEventListener("pointerup", x, c),
        window.addEventListener("pointercancel", T, c);
    };
  return (
    a.forEach((p) => {
      (o.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        wp(p) &&
          (p.addEventListener("focus", (g) => u0(g, c)),
          !a0(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
    }),
    d
  );
}
function kp(n) {
  return jh(n) && "ownerSVGElement" in n;
}
function f0(n) {
  return kp(n) && n.tagName === "svg";
}
const Xe = (n) => !!(n && n.getVelocity),
  d0 = [...mp, Re, yn],
  h0 = (n) => d0.find(pp(n)),
  nu = H.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function _d(n, i) {
  if (typeof n == "function") return n(i);
  n != null && (n.current = i);
}
function p0(...n) {
  return (i) => {
    let o = !1;
    const a = n.map((c) => {
      const d = _d(c, i);
      return !o && typeof d == "function" && (o = !0), d;
    });
    if (o)
      return () => {
        for (let c = 0; c < a.length; c++) {
          const d = a[c];
          typeof d == "function" ? d() : _d(n[c], null);
        }
      };
  };
}
function m0(...n) {
  return H.useCallback(p0(...n), n);
}
class y0 extends H.Component {
  getSnapshotBeforeUpdate(i) {
    const o = this.props.childRef.current;
    if (o && i.isPresent && !this.props.isPresent) {
      const a = o.offsetParent,
        c = (wp(a) && a.offsetWidth) || 0,
        d = this.props.sizeRef.current;
      (d.height = o.offsetHeight || 0),
        (d.width = o.offsetWidth || 0),
        (d.top = o.offsetTop),
        (d.left = o.offsetLeft),
        (d.right = c - d.width - d.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function g0({ children: n, isPresent: i, anchorX: o, root: a }) {
  const c = H.useId(),
    d = H.useRef(null),
    f = H.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: p } = H.useContext(nu),
    m = m0(d, n?.ref);
  return (
    H.useInsertionEffect(() => {
      const { width: g, height: y, top: x, left: T, right: M } = f.current;
      if (i || !d.current || !g || !y) return;
      const V = o === "left" ? `left: ${T}` : `right: ${M}`;
      d.current.dataset.motionPopId = c;
      const L = document.createElement("style");
      p && (L.nonce = p);
      const _ = a ?? document.head;
      return (
        _.appendChild(L),
        L.sheet &&
          L.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${y}px !important;
            ${V}px !important;
            top: ${x}px !important;
          }
        `),
        () => {
          _.contains(L) && _.removeChild(L);
        }
      );
    }, [i]),
    re.jsx(y0, {
      isPresent: i,
      childRef: d,
      sizeRef: f,
      children: H.cloneElement(n, { ref: m }),
    })
  );
}
const v0 = ({
  children: n,
  initial: i,
  isPresent: o,
  onExitComplete: a,
  custom: c,
  presenceAffectsLayout: d,
  mode: f,
  anchorX: p,
  root: m,
}) => {
  const g = ja(w0),
    y = H.useId();
  let x = !0,
    T = H.useMemo(
      () => (
        (x = !1),
        {
          id: y,
          initial: i,
          isPresent: o,
          custom: c,
          onExitComplete: (M) => {
            g.set(M, !0);
            for (const V of g.values()) if (!V) return;
            a && a();
          },
          register: (M) => (g.set(M, !1), () => g.delete(M)),
        }
      ),
      [o, g, a]
    );
  return (
    d && x && (T = { ...T }),
    H.useMemo(() => {
      g.forEach((M, V) => g.set(V, !1));
    }, [o]),
    H.useEffect(() => {
      !o && !g.size && a && a();
    }, [o]),
    f === "popLayout" &&
      (n = re.jsx(g0, { isPresent: o, anchorX: p, root: m, children: n })),
    re.jsx(Xs.Provider, { value: T, children: n })
  );
};
function w0() {
  return new Map();
}
function Pp(n = !0) {
  const i = H.useContext(Xs);
  if (i === null) return [!0, null];
  const { isPresent: o, onExitComplete: a, register: c } = i,
    d = H.useId();
  H.useEffect(() => {
    if (n) return c(d);
  }, [n]);
  const f = H.useCallback(() => n && a && a(d), [d, a, n]);
  return !o && a ? [!1, f] : [!0];
}
const Ls = (n) => n.key || "";
function Fd(n) {
  const i = [];
  return (
    H.Children.forEach(n, (o) => {
      H.isValidElement(o) && i.push(o);
    }),
    i
  );
}
const zd = ({
    children: n,
    custom: i,
    initial: o = !0,
    onExitComplete: a,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: f = !1,
    anchorX: p = "left",
    root: m,
  }) => {
    const [g, y] = Pp(f),
      x = H.useMemo(() => Fd(n), [n]),
      T = f && !g ? [] : x.map(Ls),
      M = H.useRef(!0),
      V = H.useRef(x),
      L = ja(() => new Map()),
      [_, z] = H.useState(x),
      [U, I] = H.useState(x);
    Vh(() => {
      (M.current = !1), (V.current = x);
      for (let q = 0; q < U.length; q++) {
        const ee = Ls(U[q]);
        T.includes(ee) ? L.delete(ee) : L.get(ee) !== !0 && L.set(ee, !1);
      }
    }, [U, T.length, T.join("-")]);
    const Z = [];
    if (x !== _) {
      let q = [...x];
      for (let ee = 0; ee < U.length; ee++) {
        const Q = U[ee],
          pe = Ls(Q);
        T.includes(pe) || (q.splice(ee, 0, Q), Z.push(Q));
      }
      return d === "wait" && Z.length && (q = Z), I(Fd(q)), z(x), null;
    }
    const { forceRender: X } = H.useContext(La);
    return re.jsx(re.Fragment, {
      children: U.map((q) => {
        const ee = Ls(q),
          Q = f && !g ? !1 : x === U || T.includes(ee),
          pe = () => {
            if (L.has(ee)) L.set(ee, !0);
            else return;
            let ge = !0;
            L.forEach((Ue) => {
              Ue || (ge = !1);
            }),
              ge && (X?.(), I(V.current), f && y?.(), a && a());
          };
        return re.jsx(
          v0,
          {
            isPresent: Q,
            initial: !M.current || o ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: c,
            mode: d,
            root: m,
            onExitComplete: Q ? void 0 : pe,
            anchorX: p,
            children: q,
          },
          ee
        );
      }),
    });
  },
  Cp = H.createContext({ strict: !1 }),
  Id = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  mr = {};
for (const n in Id) mr[n] = { isEnabled: (i) => Id[n].some((o) => !!i[o]) };
function x0(n) {
  for (const i in n) mr[i] = { ...mr[i], ...n[i] };
}
const S0 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ws(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    S0.has(n)
  );
}
let Ep = (n) => !Ws(n);
function T0(n) {
  typeof n == "function" && (Ep = (i) => (i.startsWith("on") ? !Ws(i) : n(i)));
}
try {
  T0(require("@emotion/is-prop-valid").default);
} catch {}
function k0(n, i, o) {
  const a = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((Ep(c) ||
        (o === !0 && Ws(c)) ||
        (!i && !Ws(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (a[c] = n[c]));
  return a;
}
const Ys = H.createContext({});
function Gs(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function pi(n) {
  return typeof n == "string" || Array.isArray(n);
}
const ru = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  iu = ["initial", ...ru];
function Qs(n) {
  return Gs(n.animate) || iu.some((i) => pi(n[i]));
}
function Mp(n) {
  return !!(Qs(n) || n.variants);
}
function P0(n, i) {
  if (Qs(n)) {
    const { initial: o, animate: a } = n;
    return {
      initial: o === !1 || pi(o) ? o : void 0,
      animate: pi(a) ? a : void 0,
    };
  }
  return n.inherit !== !1 ? i : {};
}
function C0(n) {
  const { initial: i, animate: o } = P0(n, H.useContext(Ys));
  return H.useMemo(() => ({ initial: i, animate: o }), [Od(i), Od(o)]);
}
function Od(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
function Bd(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const si = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (te.test(n)) n = parseFloat(n);
        else return n;
      const o = Bd(n, i.target.x),
        a = Bd(n, i.target.y);
      return `${o}% ${a}%`;
    },
  },
  E0 = {
    correct: (n, { treeScale: i, projectionDelta: o }) => {
      const a = n,
        c = yn.parse(n);
      if (c.length > 5) return a;
      const d = yn.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        p = o.x.scale * i.x,
        m = o.y.scale * i.y;
      (c[0 + f] /= p), (c[1 + f] /= m);
      const g = Ce(p, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= g),
        typeof c[3 + f] == "number" && (c[3 + f] /= g),
        d(c)
      );
    },
  },
  ka = {
    borderRadius: {
      ...si,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: si,
    borderTopRightRadius: si,
    borderBottomLeftRadius: si,
    borderBottomRightRadius: si,
    boxShadow: E0,
  };
function Ap(n, { layout: i, layoutId: o }) {
  return (
    vr.has(n) ||
    n.startsWith("origin") ||
    ((i || o !== void 0) && (!!ka[n] || n === "opacity"))
  );
}
const M0 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  A0 = gr.length;
function D0(n, i, o) {
  let a = "",
    c = !0;
  for (let d = 0; d < A0; d++) {
    const f = gr[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || o)
    ) {
      const g = vp(p, ba[f]);
      if (!m) {
        c = !1;
        const y = M0[f] || f;
        a += `${y}(${g}) `;
      }
      o && (i[f] = g);
    }
  }
  return (a = a.trim()), o ? (a = o(i, c ? "" : a)) : c && (a = "none"), a;
}
function su(n, i, o) {
  const { style: a, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const g = i[m];
    if (vr.has(m)) {
      f = !0;
      continue;
    } else if (Qh(m)) {
      c[m] = g;
      continue;
    } else {
      const y = vp(g, ba[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = y)) : (a[m] = y);
    }
  }
  if (
    (i.transform ||
      (f || o
        ? (a.transform = D0(i, n.transform, o))
        : a.transform && (a.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
    a.transformOrigin = `${m} ${g} ${y}`;
  }
}
const ou = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Dp(n, i, o) {
  for (const a in i) !Xe(i[a]) && !Ap(a, o) && (n[a] = i[a]);
}
function N0({ transformTemplate: n }, i) {
  return H.useMemo(() => {
    const o = ou();
    return su(o, i, n), Object.assign({}, o.vars, o.style);
  }, [i]);
}
function R0(n, i) {
  const o = n.style || {},
    a = {};
  return Dp(a, o, n), Object.assign(a, N0(n, i)), a;
}
function V0(n, i) {
  const o = {},
    a = R0(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((o.draggable = !1),
      (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
      (a.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (o.tabIndex = 0),
    (o.style = a),
    o
  );
}
const L0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  j0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function _0(n, i, o = 1, a = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? L0 : j0;
  n[d.offset] = te.transform(-a);
  const f = te.transform(i),
    p = te.transform(o);
  n[d.array] = `${f} ${p}`;
}
function Np(
  n,
  {
    attrX: i,
    attrY: o,
    attrScale: a,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...p
  },
  m,
  g,
  y
) {
  if ((su(n, p, g), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: x, style: T } = n;
  x.transform && ((T.transform = x.transform), delete x.transform),
    (T.transform || x.transformOrigin) &&
      ((T.transformOrigin = x.transformOrigin ?? "50% 50%"),
      delete x.transformOrigin),
    T.transform &&
      ((T.transformBox = y?.transformBox ?? "fill-box"), delete x.transformBox),
    i !== void 0 && (x.x = i),
    o !== void 0 && (x.y = o),
    a !== void 0 && (x.scale = a),
    c !== void 0 && _0(x, c, d, f, !1);
}
const Rp = () => ({ ...ou(), attrs: {} }),
  Vp = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function F0(n, i, o, a) {
  const c = H.useMemo(() => {
    const d = Rp();
    return (
      Np(d, i, Vp(a), n.transformTemplate, n.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [i]);
  if (n.style) {
    const d = {};
    Dp(d, n.style, n), (c.style = { ...d, ...c.style });
  }
  return c;
}
const z0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function lu(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(z0.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function I0(n, i, o, { latestValues: a }, c, d = !1) {
  const p = (lu(n) ? F0 : V0)(i, a, c, n),
    m = k0(i, typeof n == "string", d),
    g = n !== H.Fragment ? { ...m, ...p, ref: o } : {},
    { children: y } = i,
    x = H.useMemo(() => (Xe(y) ? y.get() : y), [y]);
  return H.createElement(n, { ...g, children: x });
}
function Ud(n) {
  const i = [{}, {}];
  return (
    n?.values.forEach((o, a) => {
      (i[0][a] = o.get()), (i[1][a] = o.getVelocity());
    }),
    i
  );
}
function au(n, i, o, a) {
  if (typeof i == "function") {
    const [c, d] = Ud(a);
    i = i(o !== void 0 ? o : n.custom, c, d);
  }
  if (
    (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function")
  ) {
    const [c, d] = Ud(a);
    i = i(o !== void 0 ? o : n.custom, c, d);
  }
  return i;
}
function Is(n) {
  return Xe(n) ? n.get() : n;
}
function O0({ scrapeMotionValuesFromProps: n, createRenderState: i }, o, a, c) {
  return { latestValues: B0(o, a, c, n), renderState: i() };
}
function B0(n, i, o, a) {
  const c = {},
    d = a(n, {});
  for (const T in d) c[T] = Is(d[T]);
  let { initial: f, animate: p } = n;
  const m = Qs(n),
    g = Mp(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let y = o ? o.initial === !1 : !1;
  y = y || f === !1;
  const x = y ? p : f;
  if (x && typeof x != "boolean" && !Gs(x)) {
    const T = Array.isArray(x) ? x : [x];
    for (let M = 0; M < T.length; M++) {
      const V = au(n, T[M]);
      if (V) {
        const { transitionEnd: L, transition: _, ...z } = V;
        for (const U in z) {
          let I = z[U];
          if (Array.isArray(I)) {
            const Z = y ? I.length - 1 : 0;
            I = I[Z];
          }
          I !== null && (c[U] = I);
        }
        for (const U in L) c[U] = L[U];
      }
    }
  }
  return c;
}
const Lp = (n) => (i, o) => {
  const a = H.useContext(Ys),
    c = H.useContext(Xs),
    d = () => O0(n, i, a, c);
  return o ? d() : ja(d);
};
function uu(n, i, o) {
  const { style: a } = n,
    c = {};
  for (const d in a)
    (Xe(a[d]) ||
      (i.style && Xe(i.style[d])) ||
      Ap(d, n) ||
      o?.getValue(d)?.liveStyle !== void 0) &&
      (c[d] = a[d]);
  return c;
}
const U0 = Lp({ scrapeMotionValuesFromProps: uu, createRenderState: ou });
function jp(n, i, o) {
  const a = uu(n, i, o);
  for (const c in n)
    if (Xe(n[c]) || Xe(i[c])) {
      const d =
        gr.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      a[d] = n[c];
    }
  return a;
}
const H0 = Lp({ scrapeMotionValuesFromProps: jp, createRenderState: Rp }),
  W0 = Symbol.for("motionComponentSymbol");
function ur(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function $0(n, i, o) {
  return H.useCallback(
    (a) => {
      a && n.onMount && n.onMount(a),
        i && (a ? i.mount(a) : i.unmount()),
        o && (typeof o == "function" ? o(a) : ur(o) && (o.current = a));
    },
    [i]
  );
}
const cu = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  K0 = "framerAppearId",
  _p = "data-" + cu(K0),
  Fp = H.createContext({});
function X0(n, i, o, a, c) {
  const { visualElement: d } = H.useContext(Ys),
    f = H.useContext(Cp),
    p = H.useContext(Xs),
    m = H.useContext(nu).reducedMotion,
    g = H.useRef(null);
  (a = a || f.renderer),
    !g.current &&
      a &&
      (g.current = a(n, {
        visualState: i,
        parent: d,
        props: o,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m,
      }));
  const y = g.current,
    x = H.useContext(Fp);
  y &&
    !y.projection &&
    c &&
    (y.type === "html" || y.type === "svg") &&
    Y0(g.current, o, c, x);
  const T = H.useRef(!1);
  H.useInsertionEffect(() => {
    y && T.current && y.update(o, p);
  });
  const M = o[_p],
    V = H.useRef(
      !!M &&
        !window.MotionHandoffIsComplete?.(M) &&
        window.MotionHasOptimisedAnimation?.(M)
    );
  return (
    Vh(() => {
      y &&
        ((T.current = !0),
        (window.MotionIsMounted = !0),
        y.updateFeatures(),
        y.scheduleRenderMicrotask(),
        V.current && y.animationState && y.animationState.animateChanges());
    }),
    H.useEffect(() => {
      y &&
        (!V.current && y.animationState && y.animationState.animateChanges(),
        V.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(M);
          }),
          (V.current = !1)),
        (y.enteringChildren = void 0));
    }),
    y
  );
}
function Y0(n, i, o, a) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: g,
    layoutCrossfade: y,
  } = i;
  (n.projection = new o(
    n.latestValues,
    i["data-framer-portal-id"] ? void 0 : zp(n.parent)
  )),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && ur(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: a,
      crossfade: y,
      layoutScroll: m,
      layoutRoot: g,
    });
}
function zp(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : zp(n.parent);
}
function ta(n, { forwardMotionProps: i = !1 } = {}, o, a) {
  o && x0(o);
  const c = lu(n) ? H0 : U0;
  function d(p, m) {
    let g;
    const y = { ...H.useContext(nu), ...p, layoutId: G0(p) },
      { isStatic: x } = y,
      T = C0(p),
      M = c(p, x);
    if (!x && _a) {
      Q0();
      const V = Z0(y);
      (g = V.MeasureLayout),
        (T.visualElement = X0(n, M, y, a, V.ProjectionNode));
    }
    return re.jsxs(Ys.Provider, {
      value: T,
      children: [
        g && T.visualElement
          ? re.jsx(g, { visualElement: T.visualElement, ...y })
          : null,
        I0(n, p, $0(M, T.visualElement, m), M, x, i),
      ],
    });
  }
  d.displayName = `motion.${
    typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`
  }`;
  const f = H.forwardRef(d);
  return (f[W0] = n), f;
}
function G0({ layoutId: n }) {
  const i = H.useContext(La).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Q0(n, i) {
  H.useContext(Cp).strict;
}
function Z0(n) {
  const { drag: i, layout: o } = mr;
  if (!i && !o) return {};
  const a = { ...i, ...o };
  return {
    MeasureLayout:
      i?.isEnabled(n) || o?.isEnabled(n) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode,
  };
}
function q0(n, i) {
  if (typeof Proxy > "u") return ta;
  const o = new Map(),
    a = (d, f) => ta(d, f, n, i),
    c = (d, f) => a(d, f);
  return new Proxy(c, {
    get: (d, f) =>
      f === "create"
        ? a
        : (o.has(f) || o.set(f, ta(f, void 0, n, i)), o.get(f)),
  });
}
function Ip({ top: n, left: i, right: o, bottom: a }) {
  return { x: { min: i, max: o }, y: { min: n, max: a } };
}
function J0({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function b0(n, i) {
  if (!i) return n;
  const o = i({ x: n.left, y: n.top }),
    a = i({ x: n.right, y: n.bottom });
  return { top: o.y, left: o.x, bottom: a.y, right: a.x };
}
function na(n) {
  return n === void 0 || n === 1;
}
function Pa({ scale: n, scaleX: i, scaleY: o }) {
  return !na(n) || !na(i) || !na(o);
}
function Vn(n) {
  return (
    Pa(n) ||
    Op(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function Op(n) {
  return Hd(n.x) || Hd(n.y);
}
function Hd(n) {
  return n && n !== "0%";
}
function $s(n, i, o) {
  const a = n - o,
    c = i * a;
  return o + c;
}
function Wd(n, i, o, a, c) {
  return c !== void 0 && (n = $s(n, c, a)), $s(n, o, a) + i;
}
function Ca(n, i = 0, o = 1, a, c) {
  (n.min = Wd(n.min, i, o, a, c)), (n.max = Wd(n.max, i, o, a, c));
}
function Bp(n, { x: i, y: o }) {
  Ca(n.x, i.translate, i.scale, i.originPoint),
    Ca(n.y, o.translate, o.scale, o.originPoint);
}
const $d = 0.999999999999,
  Kd = 1.0000000000001;
function e1(n, i, o, a = !1) {
  const c = o.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let p = 0; p < c; p++) {
    (d = o[p]), (f = d.projectionDelta);
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (a &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        fr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Bp(n, f)),
      a && Vn(d.latestValues) && fr(n, d.latestValues));
  }
  i.x < Kd && i.x > $d && (i.x = 1), i.y < Kd && i.y > $d && (i.y = 1);
}
function cr(n, i) {
  (n.min = n.min + i), (n.max = n.max + i);
}
function Xd(n, i, o, a, c = 0.5) {
  const d = Ce(n.min, n.max, c);
  Ca(n, i, o, d, a);
}
function fr(n, i) {
  Xd(n.x, i.x, i.scaleX, i.scale, i.originX),
    Xd(n.y, i.y, i.scaleY, i.scale, i.originY);
}
function Up(n, i) {
  return Ip(b0(n.getBoundingClientRect(), i));
}
function t1(n, i, o) {
  const a = Up(n, o),
    { scroll: c } = i;
  return c && (cr(a.x, c.offset.x), cr(a.y, c.offset.y)), a;
}
const Yd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  dr = () => ({ x: Yd(), y: Yd() }),
  Gd = () => ({ min: 0, max: 0 }),
  je = () => ({ x: Gd(), y: Gd() }),
  Ea = { current: null },
  Hp = { current: !1 };
function n1() {
  if (((Hp.current = !0), !!_a))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Ea.current = n.matches);
      n.addEventListener("change", i), i();
    } else Ea.current = !1;
}
const r1 = new WeakMap();
function i1(n, i, o) {
  for (const a in i) {
    const c = i[a],
      d = o[a];
    if (Xe(c)) n.addValue(a, c);
    else if (Xe(d)) n.addValue(a, pr(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(a)) {
        const f = n.getValue(a);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(a);
        n.addValue(a, pr(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const a in o) i[a] === void 0 && n.removeValue(a);
  return i;
}
const Qd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class s1 {
  scrapeMotionValuesFromProps(i, o, a) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: o,
      presenceContext: a,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: f,
    },
    p = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = qa),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const T = st.now();
        this.renderScheduledAt < T &&
          ((this.renderScheduledAt = T), Te.render(this.render, !1, !0));
      });
    const { latestValues: m, renderState: g } = f;
    (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = o.initial ? { ...m } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = o),
      (this.presenceContext = a),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = Qs(o)),
      (this.isVariantNode = Mp(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current));
    const { willChange: y, ...x } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this
    );
    for (const T in x) {
      const M = x[T];
      m[T] !== void 0 && Xe(M) && M.set(m[T]);
    }
  }
  mount(i) {
    (this.current = i),
      r1.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, a) => this.bindToMotionValue(a, o)),
      Hp.current || n1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ea.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      mn(this.notifyUpdate),
      mn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this);
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const o = this.features[i];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i);
  }
  removeChild(i) {
    this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i);
  }
  bindToMotionValue(i, o) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const a = vr.has(i);
    a && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (f) => {
      (this.latestValues[i] = f),
        this.props.onUpdate && Te.preRender(this.notifyUpdate),
        a && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let d;
    window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, i, o)),
      this.valueSubscriptions.set(i, () => {
        c(), d && d(), o.owner && o.stop();
      });
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in mr) {
      const o = mr[i];
      if (!o) continue;
      const { isEnabled: a, Feature: c } = o;
      if (
        (!this.features[i] &&
          c &&
          a(this.props) &&
          (this.features[i] = new c(this)),
        this.features[i])
      ) {
        const d = this.features[i];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : je();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, o) {
    this.latestValues[i] = o;
  }
  update(i, o) {
    (i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o);
    for (let a = 0; a < Qd.length; a++) {
      const c = Qd[a];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    (this.prevMotionValues = i1(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(i) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(i),
        () => o.variantChildren.delete(i)
      );
  }
  addValue(i, o) {
    const a = this.values.get(i);
    o !== a &&
      (a && this.removeValue(i),
      this.bindToMotionValue(i, o),
      this.values.set(i, o),
      (this.latestValues[i] = o.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const o = this.valueSubscriptions.get(i);
    o && (o(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState);
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, o) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let a = this.values.get(i);
    return (
      a === void 0 &&
        o !== void 0 &&
        ((a = pr(o === null ? void 0 : o, { owner: this })),
        this.addValue(i, a)),
      a
    );
  }
  readValue(i, o) {
    let a =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options);
    return (
      a != null &&
        (typeof a == "string" && (Lh(a) || _h(a))
          ? (a = parseFloat(a))
          : !h0(a) && yn.test(o) && (a = gp(i, o)),
        this.setBaseTarget(i, Xe(a) ? a.get() : a)),
      Xe(a) ? a.get() : a
    );
  }
  setBaseTarget(i, o) {
    this.baseTarget[i] = o;
  }
  getBaseTarget(i) {
    const { initial: o } = this.props;
    let a;
    if (typeof o == "string" || typeof o == "object") {
      const d = au(this.props, o, this.presenceContext?.custom);
      d && (a = d[i]);
    }
    if (o && a !== void 0) return a;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !Xe(c)
      ? c
      : this.initialValues[i] !== void 0 && a === void 0
      ? void 0
      : this.baseTarget[i];
  }
  on(i, o) {
    return this.events[i] || (this.events[i] = new Ba()), this.events[i].add(o);
  }
  notify(i, ...o) {
    this.events[i] && this.events[i].notify(...o);
  }
  scheduleRenderMicrotask() {
    eu.render(this.render);
  }
}
class Wp extends s1 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = t0);
  }
  sortInstanceNodePosition(i, o) {
    return i.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, o) {
    return i.style ? i.style[o] : void 0;
  }
  removeValueFromRenderState(i, { vars: o, style: a }) {
    delete o[i], delete a[i];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    Xe(i) &&
      (this.childSubscription = i.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
function $p(n, { style: i, vars: o }, a, c) {
  const d = n.style;
  let f;
  for (f in i) d[f] = i[f];
  c?.applyProjectionStyles(d, a);
  for (f in o) d.setProperty(f, o[f]);
}
function o1(n) {
  return window.getComputedStyle(n);
}
class l1 extends Wp {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = $p);
  }
  readValueFromInstance(i, o) {
    if (vr.has(o)) return this.projection?.isProjecting ? ya(o) : xv(i, o);
    {
      const a = o1(i),
        c = (Qh(o) ? a.getPropertyValue(o) : a[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: o }) {
    return Up(i, o);
  }
  build(i, o, a) {
    su(i, o, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, o, a) {
    return uu(i, o, a);
  }
}
const Kp = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function a1(n, i, o, a) {
  $p(n, i, void 0, a);
  for (const c in i.attrs) n.setAttribute(Kp.has(c) ? c : cu(c), i.attrs[c]);
}
class u1 extends Wp {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = je);
  }
  getBaseTargetFromProps(i, o) {
    return i[o];
  }
  readValueFromInstance(i, o) {
    if (vr.has(o)) {
      const a = yp(o);
      return (a && a.default) || 0;
    }
    return (o = Kp.has(o) ? o : cu(o)), i.getAttribute(o);
  }
  scrapeMotionValuesFromProps(i, o, a) {
    return jp(i, o, a);
  }
  build(i, o, a) {
    Np(i, o, this.isSVGTag, a.transformTemplate, a.style);
  }
  renderInstance(i, o, a, c) {
    a1(i, o, a, c);
  }
  mount(i) {
    (this.isSVGTag = Vp(i.tagName)), super.mount(i);
  }
}
const c1 = (n, i) =>
  lu(n) ? new u1(i) : new l1(i, { allowProjection: n !== H.Fragment });
function hr(n, i, o) {
  const a = n.getProps();
  return au(a, i, o !== void 0 ? o : a.custom, n);
}
const Ma = (n) => Array.isArray(n);
function f1(n, i, o) {
  n.hasValue(i) ? n.getValue(i).set(o) : n.addValue(i, pr(o));
}
function d1(n) {
  return Ma(n) ? n[n.length - 1] || 0 : n;
}
function h1(n, i) {
  const o = hr(n, i);
  let { transitionEnd: a = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...a };
  for (const f in d) {
    const p = d1(d[f]);
    f1(n, f, p);
  }
}
function p1(n) {
  return !!(Xe(n) && n.add);
}
function Aa(n, i) {
  const o = n.getValue("willChange");
  if (p1(o)) return o.add(i);
  if (!o && Yt.WillChange) {
    const a = new Yt.WillChange("auto");
    n.addValue("willChange", a), a.add(i);
  }
}
function Xp(n) {
  return n.props[_p];
}
const m1 = (n) => n !== null;
function y1(n, { repeat: i, repeatType: o = "loop" }, a) {
  const c = n.filter(m1),
    d = i && o !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
const g1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  v1 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  w1 = { type: "keyframes", duration: 0.8 },
  x1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  S1 = (n, { keyframes: i }) =>
    i.length > 2
      ? w1
      : vr.has(n)
      ? n.startsWith("scale")
        ? v1(i[1])
        : g1
      : x1;
function T1({
  when: n,
  delay: i,
  delayChildren: o,
  staggerChildren: a,
  staggerDirection: c,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: g,
  ...y
}) {
  return !!Object.keys(y).length;
}
const fu =
  (n, i, o, a = {}, c, d) =>
  (f) => {
    const p = Ja(a, n) || {},
      m = p.delay || a.delay || 0;
    let { elapsed: g = 0 } = a;
    g = g - Ft(m);
    const y = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...p,
      delay: -g,
      onUpdate: (T) => {
        i.set(T), p.onUpdate && p.onUpdate(T);
      },
      onComplete: () => {
        f(), p.onComplete && p.onComplete();
      },
      name: n,
      motionValue: i,
      element: d ? void 0 : c,
    };
    T1(p) || Object.assign(y, S1(n, y)),
      y.duration && (y.duration = Ft(y.duration)),
      y.repeatDelay && (y.repeatDelay = Ft(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from);
    let x = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        (Sa(y), y.delay === 0 && (x = !0)),
      (Yt.instantAnimations || Yt.skipAnimations) &&
        ((x = !0), Sa(y), (y.delay = 0)),
      (y.allowFlatten = !p.type && !p.ease),
      x && !d && i.get() !== void 0)
    ) {
      const T = y1(y.keyframes, p);
      if (T !== void 0) {
        Te.update(() => {
          y.onUpdate(T), y.onComplete();
        });
        return;
      }
    }
    return p.isSync ? new Za(y) : new Wv(y);
  };
function k1({ protectedKeys: n, needsAnimating: i }, o) {
  const a = n.hasOwnProperty(o) && i[o] !== !0;
  return (i[o] = !1), a;
}
function Yp(n, i, { delay: o = 0, transitionOverride: a, type: c } = {}) {
  let { transition: d = n.getDefaultTransition(), transitionEnd: f, ...p } = i;
  a && (d = a);
  const m = [],
    g = c && n.animationState && n.animationState.getState()[c];
  for (const y in p) {
    const x = n.getValue(y, n.latestValues[y] ?? null),
      T = p[y];
    if (T === void 0 || (g && k1(g, y))) continue;
    const M = { delay: o, ...Ja(d || {}, y) },
      V = x.get();
    if (
      V !== void 0 &&
      !x.isAnimating &&
      !Array.isArray(T) &&
      T === V &&
      !M.velocity
    )
      continue;
    let L = !1;
    if (window.MotionHandoffAnimation) {
      const z = Xp(n);
      if (z) {
        const U = window.MotionHandoffAnimation(z, y, Te);
        U !== null && ((M.startTime = U), (L = !0));
      }
    }
    Aa(n, y),
      x.start(
        fu(y, x, T, n.shouldReduceMotion && hp.has(y) ? { type: !1 } : M, n, L)
      );
    const _ = x.animation;
    _ && m.push(_);
  }
  return (
    f &&
      Promise.all(m).then(() => {
        Te.update(() => {
          f && h1(n, f);
        });
      }),
    m
  );
}
function Gp(n, i, o, a = 0, c = 1) {
  const d = Array.from(n)
      .sort((g, y) => g.sortNodePosition(y))
      .indexOf(i),
    f = n.size,
    p = (f - 1) * a;
  return typeof o == "function" ? o(d, f) : c === 1 ? d * a : p - d * a;
}
function Da(n, i, o = {}) {
  const a = hr(n, i, o.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: c = n.getDefaultTransition() || {} } = a || {};
  o.transitionOverride && (c = o.transitionOverride);
  const d = a ? () => Promise.all(Yp(n, a, o)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: y,
              staggerDirection: x,
            } = c;
            return P1(n, i, m, g, y, x, o);
          }
        : () => Promise.resolve(),
    { when: p } = c;
  if (p) {
    const [m, g] = p === "beforeChildren" ? [d, f] : [f, d];
    return m().then(() => g());
  } else return Promise.all([d(), f(o.delay)]);
}
function P1(n, i, o = 0, a = 0, c = 0, d = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    m.notify("AnimationStart", i),
      p.push(
        Da(m, i, {
          ...f,
          delay:
            o +
            (typeof a == "function" ? 0 : a) +
            Gp(n.variantChildren, m, a, c, d),
        }).then(() => m.notify("AnimationComplete", i))
      );
  return Promise.all(p);
}
function C1(n, i, o = {}) {
  n.notify("AnimationStart", i);
  let a;
  if (Array.isArray(i)) {
    const c = i.map((d) => Da(n, d, o));
    a = Promise.all(c);
  } else if (typeof i == "string") a = Da(n, i, o);
  else {
    const c = typeof i == "function" ? hr(n, i, o.custom) : i;
    a = Promise.all(Yp(n, c, o));
  }
  return a.then(() => {
    n.notify("AnimationComplete", i);
  });
}
function Qp(n, i) {
  if (!Array.isArray(i)) return !1;
  const o = i.length;
  if (o !== n.length) return !1;
  for (let a = 0; a < o; a++) if (i[a] !== n[a]) return !1;
  return !0;
}
const E1 = iu.length;
function Zp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const o = n.parent ? Zp(n.parent) || {} : {};
    return n.props.initial !== void 0 && (o.initial = n.props.initial), o;
  }
  const i = {};
  for (let o = 0; o < E1; o++) {
    const a = iu[o],
      c = n.props[a];
    (pi(c) || c === !1) && (i[a] = c);
  }
  return i;
}
const M1 = [...ru].reverse(),
  A1 = ru.length;
function D1(n) {
  return (i) =>
    Promise.all(i.map(({ animation: o, options: a }) => C1(n, o, a)));
}
function N1(n) {
  let i = D1(n),
    o = Zd(),
    a = !0;
  const c = (m) => (g, y) => {
    const x = hr(n, y, m === "exit" ? n.presenceContext?.custom : void 0);
    if (x) {
      const { transition: T, transitionEnd: M, ...V } = x;
      g = { ...g, ...V, ...M };
    }
    return g;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: g } = n,
      y = Zp(n.parent) || {},
      x = [],
      T = new Set();
    let M = {},
      V = 1 / 0;
    for (let _ = 0; _ < A1; _++) {
      const z = M1[_],
        U = o[z],
        I = g[z] !== void 0 ? g[z] : y[z],
        Z = pi(I),
        X = z === m ? U.isActive : null;
      X === !1 && (V = _);
      let q = I === y[z] && I !== g[z] && Z;
      if (
        (q && a && n.manuallyAnimateOnMount && (q = !1),
        (U.protectedKeys = { ...M }),
        (!U.isActive && X === null) ||
          (!I && !U.prevProp) ||
          Gs(I) ||
          typeof I == "boolean")
      )
        continue;
      const ee = R1(U.prevProp, I);
      let Q = ee || (z === m && U.isActive && !q && Z) || (_ > V && Z),
        pe = !1;
      const ge = Array.isArray(I) ? I : [I];
      let Ue = ge.reduce(c(z), {});
      X === !1 && (Ue = {});
      const { prevResolvedValues: ot = {} } = U,
        Ye = { ...ot, ...Ue },
        Je = (ie) => {
          (Q = !0),
            T.has(ie) && ((pe = !0), T.delete(ie)),
            (U.needsAnimating[ie] = !0);
          const F = n.getValue(ie);
          F && (F.liveStyle = !1);
        };
      for (const ie in Ye) {
        const F = Ue[ie],
          G = ot[ie];
        if (M.hasOwnProperty(ie)) continue;
        let O = !1;
        Ma(F) && Ma(G) ? (O = !Qp(F, G)) : (O = F !== G),
          O
            ? F != null
              ? Je(ie)
              : T.add(ie)
            : F !== void 0 && T.has(ie)
            ? Je(ie)
            : (U.protectedKeys[ie] = !0);
      }
      (U.prevProp = I),
        (U.prevResolvedValues = Ue),
        U.isActive && (M = { ...M, ...Ue }),
        a && n.blockInitialAnimation && (Q = !1);
      const lt = q && ee;
      Q &&
        (!lt || pe) &&
        x.push(
          ...ge.map((ie) => {
            const F = { type: z };
            if (
              typeof ie == "string" &&
              a &&
              !lt &&
              n.manuallyAnimateOnMount &&
              n.parent
            ) {
              const { parent: G } = n,
                O = hr(G, ie);
              if (G.enteringChildren && O) {
                const { delayChildren: k } = O.transition || {};
                F.delay = Gp(G.enteringChildren, n, k);
              }
            }
            return { animation: ie, options: F };
          })
        );
    }
    if (T.size) {
      const _ = {};
      if (typeof g.initial != "boolean") {
        const z = hr(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        z && z.transition && (_.transition = z.transition);
      }
      T.forEach((z) => {
        const U = n.getBaseTarget(z),
          I = n.getValue(z);
        I && (I.liveStyle = !0), (_[z] = U ?? null);
      }),
        x.push({ animation: _ });
    }
    let L = !!x.length;
    return (
      a &&
        (g.initial === !1 || g.initial === g.animate) &&
        !n.manuallyAnimateOnMount &&
        (L = !1),
      (a = !1),
      L ? i(x) : Promise.resolve()
    );
  }
  function p(m, g) {
    if (o[m].isActive === g) return Promise.resolve();
    n.variantChildren?.forEach((x) => x.animationState?.setActive(m, g)),
      (o[m].isActive = g);
    const y = f(m);
    for (const x in o) o[x].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      o = Zd();
    },
  };
}
function R1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Qp(i, n) : !1;
}
function Rn(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Zd() {
  return {
    animate: Rn(!0),
    whileInView: Rn(),
    whileHover: Rn(),
    whileTap: Rn(),
    whileDrag: Rn(),
    whileFocus: Rn(),
    exit: Rn(),
  };
}
class gn {
  constructor(i) {
    (this.isMounted = !1), (this.node = i);
  }
  update() {}
}
class V1 extends gn {
  constructor(i) {
    super(i), i.animationState || (i.animationState = N1(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Gs(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    i !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let L1 = 0;
class j1 extends gn {
  constructor() {
    super(...arguments), (this.id = L1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: o } = this.node.presenceContext,
      { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === a) return;
    const c = this.node.animationState.setActive("exit", !i);
    o &&
      !i &&
      c.then(() => {
        o(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const _1 = { animation: { Feature: V1 }, exit: { Feature: j1 } };
function mi(n, i, o, a = { passive: !0 }) {
  return n.addEventListener(i, o, a), () => n.removeEventListener(i, o);
}
function wi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const F1 = (n) => (i) => tu(i) && n(i, wi(i));
function ui(n, i, o, a) {
  return mi(n, i, F1(o), a);
}
const qp = 1e-4,
  z1 = 1 - qp,
  I1 = 1 + qp,
  Jp = 0.01,
  O1 = 0 - Jp,
  B1 = 0 + Jp;
function qe(n) {
  return n.max - n.min;
}
function U1(n, i, o) {
  return Math.abs(n - i) <= o;
}
function qd(n, i, o, a = 0.5) {
  (n.origin = a),
    (n.originPoint = Ce(i.min, i.max, n.origin)),
    (n.scale = qe(o) / qe(i)),
    (n.translate = Ce(o.min, o.max, n.origin) - n.originPoint),
    ((n.scale >= z1 && n.scale <= I1) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= O1 && n.translate <= B1) || isNaN(n.translate)) &&
      (n.translate = 0);
}
function ci(n, i, o, a) {
  qd(n.x, i.x, o.x, a ? a.originX : void 0),
    qd(n.y, i.y, o.y, a ? a.originY : void 0);
}
function Jd(n, i, o) {
  (n.min = o.min + i.min), (n.max = n.min + qe(i));
}
function H1(n, i, o) {
  Jd(n.x, i.x, o.x), Jd(n.y, i.y, o.y);
}
function bd(n, i, o) {
  (n.min = i.min - o.min), (n.max = n.min + qe(i));
}
function Ks(n, i, o) {
  bd(n.x, i.x, o.x), bd(n.y, i.y, o.y);
}
function wt(n) {
  return [n("x"), n("y")];
}
const bp = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  eh = (n, i) => Math.abs(n - i);
function W1(n, i) {
  const o = eh(n.x, i.x),
    a = eh(n.y, i.y);
  return Math.sqrt(o ** 2 + a ** 2);
}
class em {
  constructor(
    i,
    o,
    {
      transformPagePoint: a,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const T = ia(this.lastMoveEventInfo, this.history),
          M = this.startEvent !== null,
          V = W1(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!M && !V) return;
        const { point: L } = T,
          { timestamp: _ } = Be;
        this.history.push({ ...L, timestamp: _ });
        const { onStart: z, onMove: U } = this.handlers;
        M ||
          (z && z(this.lastMoveEvent, T),
          (this.startEvent = this.lastMoveEvent)),
          U && U(this.lastMoveEvent, T);
      }),
      (this.handlePointerMove = (T, M) => {
        (this.lastMoveEvent = T),
          (this.lastMoveEventInfo = ra(M, this.transformPagePoint)),
          Te.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (T, M) => {
        this.end();
        const { onEnd: V, onSessionEnd: L, resumeAnimation: _ } = this.handlers;
        if (
          (this.dragSnapToOrigin && _ && _(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const z = ia(
          T.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ra(M, this.transformPagePoint),
          this.history
        );
        this.startEvent && V && V(T, z), L && L(T, z);
      }),
      !tu(i))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = o),
      (this.transformPagePoint = a),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window);
    const p = wi(i),
      m = ra(p, this.transformPagePoint),
      { point: g } = m,
      { timestamp: y } = Be;
    this.history = [{ ...g, timestamp: y }];
    const { onSessionStart: x } = o;
    x && x(i, ia(m, this.history)),
      (this.removeListeners = yi(
        ui(this.contextWindow, "pointermove", this.handlePointerMove),
        ui(this.contextWindow, "pointerup", this.handlePointerUp),
        ui(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), mn(this.updatePoint);
  }
}
function ra(n, i) {
  return i ? { point: i(n.point) } : n;
}
function th(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function ia({ point: n }, i) {
  return {
    point: n,
    delta: th(n, tm(i)),
    offset: th(n, $1(i)),
    velocity: K1(i, 0.1),
  };
}
function $1(n) {
  return n[0];
}
function tm(n) {
  return n[n.length - 1];
}
function K1(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let o = n.length - 1,
    a = null;
  const c = tm(n);
  for (; o >= 0 && ((a = n[o]), !(c.timestamp - a.timestamp > Ft(i))); ) o--;
  if (!a) return { x: 0, y: 0 };
  const d = xt(c.timestamp - a.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - a.x) / d, y: (c.y - a.y) / d };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function X1(n, { min: i, max: o }, a) {
  return (
    i !== void 0 && n < i
      ? (n = a ? Ce(i, n, a.min) : Math.max(n, i))
      : o !== void 0 && n > o && (n = a ? Ce(o, n, a.max) : Math.min(n, o)),
    n
  );
}
function nh(n, i, o) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: o !== void 0 ? n.max + o - (n.max - n.min) : void 0,
  };
}
function Y1(n, { top: i, left: o, bottom: a, right: c }) {
  return { x: nh(n.x, o, c), y: nh(n.y, i, a) };
}
function rh(n, i) {
  let o = i.min - n.min,
    a = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([o, a] = [a, o]), { min: o, max: a };
}
function G1(n, i) {
  return { x: rh(n.x, i.x), y: rh(n.y, i.y) };
}
function Q1(n, i) {
  let o = 0.5;
  const a = qe(n),
    c = qe(i);
  return (
    c > a
      ? (o = fi(i.min, i.max - a, n.min))
      : a > c && (o = fi(n.min, n.max - c, i.min)),
    Xt(0, 1, o)
  );
}
function Z1(n, i) {
  const o = {};
  return (
    i.min !== void 0 && (o.min = i.min - n.min),
    i.max !== void 0 && (o.max = i.max - n.min),
    o
  );
}
const Na = 0.35;
function q1(n = Na) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Na),
    { x: ih(n, "left", "right"), y: ih(n, "top", "bottom") }
  );
}
function ih(n, i, o) {
  return { min: sh(n, i), max: sh(n, o) };
}
function sh(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const J1 = new WeakMap();
class b1 {
  constructor(i) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = je()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i);
  }
  start(i, { snapToCursor: o = !1, distanceThreshold: a } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (x) => {
        const { dragSnapToOrigin: T } = this.getProps();
        T ? this.pauseAnimation() : this.stopAnimation(),
          o && this.snapToCursor(wi(x).point);
      },
      f = (x, T) => {
        const { drag: M, dragPropagation: V, onDragStart: L } = this.getProps();
        if (
          M &&
          !V &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = s0(M)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = x),
          (this.latestPanInfo = T),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          wt((z) => {
            let U = this.getAxisMotionValue(z).get() || 0;
            if (zt.test(U)) {
              const { projection: I } = this.visualElement;
              if (I && I.layout) {
                const Z = I.layout.layoutBox[z];
                Z && (U = qe(Z) * (parseFloat(U) / 100));
              }
            }
            this.originPoint[z] = U;
          }),
          L && Te.postRender(() => L(x, T)),
          Aa(this.visualElement, "transform");
        const { animationState: _ } = this.visualElement;
        _ && _.setActive("whileDrag", !0);
      },
      p = (x, T) => {
        (this.latestPointerEvent = x), (this.latestPanInfo = T);
        const {
          dragPropagation: M,
          dragDirectionLock: V,
          onDirectionLock: L,
          onDrag: _,
        } = this.getProps();
        if (!M && !this.openDragLock) return;
        const { offset: z } = T;
        if (V && this.currentDirection === null) {
          (this.currentDirection = ew(z)),
            this.currentDirection !== null && L && L(this.currentDirection);
          return;
        }
        this.updateAxis("x", T.point, z),
          this.updateAxis("y", T.point, z),
          this.visualElement.render(),
          _ && _(x, T);
      },
      m = (x, T) => {
        (this.latestPointerEvent = x),
          (this.latestPanInfo = T),
          this.stop(x, T),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      g = () =>
        wt(
          (x) =>
            this.getAnimationState(x) === "paused" &&
            this.getAxisMotionValue(x).animation?.play()
        ),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new em(
      i,
      {
        onSessionStart: d,
        onStart: f,
        onMove: p,
        onSessionEnd: m,
        resumeAnimation: g,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        distanceThreshold: a,
        contextWindow: bp(this.visualElement),
      }
    );
  }
  stop(i, o) {
    const a = i || this.latestPointerEvent,
      c = o || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !a)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && Te.postRender(() => p(a, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: o } = this.visualElement;
    i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: a } = this.getProps();
    !a &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1);
  }
  updateAxis(i, o, a) {
    const { drag: c } = this.getProps();
    if (!a || !js(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + a[i];
    this.constraints &&
      this.constraints[i] &&
      (f = X1(f, this.constraints[i], this.elastic[i])),
      d.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: o } = this.getProps(),
      a =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    i && ur(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && a
      ? (this.constraints = Y1(a.layoutBox, i))
      : (this.constraints = !1),
      (this.elastic = q1(o)),
      c !== this.constraints &&
        a &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        wt((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = Z1(a.layoutBox[d], this.constraints[d]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: o } = this.getProps();
    if (!i || !ur(i)) return !1;
    const a = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = t1(a, c.root, this.visualElement.getTransformPagePoint());
    let f = G1(c.layout.layoutBox, d);
    if (o) {
      const p = o(J0(f));
      (this.hasMutatedConstraints = !!p), p && (f = Ip(p));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: o,
        dragMomentum: a,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      g = wt((y) => {
        if (!js(y, o, this.currentDirection)) return;
        let x = (m && m[y]) || {};
        f && (x = { min: 0, max: 0 });
        const T = c ? 200 : 1e6,
          M = c ? 40 : 1e7,
          V = {
            type: "inertia",
            velocity: a ? i[y] : 0,
            bounceStiffness: T,
            bounceDamping: M,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...x,
          };
        return this.startAxisValueAnimation(y, V);
      });
    return Promise.all(g).then(p);
  }
  startAxisValueAnimation(i, o) {
    const a = this.getAxisMotionValue(i);
    return (
      Aa(this.visualElement, i), a.start(fu(i, a, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    wt((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    wt((i) => this.getAxisMotionValue(i).animation?.pause());
  }
  getAnimationState(i) {
    return this.getAxisMotionValue(i).animation?.state;
  }
  getAxisMotionValue(i) {
    const o = `_drag${i.toUpperCase()}`,
      a = this.visualElement.getProps(),
      c = a[o];
    return (
      c ||
      this.visualElement.getValue(i, (a.initial ? a.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    wt((o) => {
      const { drag: a } = this.getProps();
      if (!js(o, a, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: f, max: p } = c.layout.layoutBox[o];
        d.set(i[o] - Ce(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: o } = this.getProps(),
      { projection: a } = this.visualElement;
    if (!ur(o) || !a || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    wt((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = Q1({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      a.root && a.root.updateScroll(),
      a.updateLayout(),
      this.resolveConstraints(),
      wt((f) => {
        if (!js(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: g } = this.constraints[f];
        p.set(Ce(m, g, c[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    J1.set(this.visualElement, this);
    const i = this.visualElement.current,
      o = ui(i, "pointerdown", (m) => {
        const { drag: g, dragListener: y = !0 } = this.getProps();
        g && y && this.start(m);
      }),
      a = () => {
        const { dragConstraints: m } = this.getProps();
        ur(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", a);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Te.read(a);
    const f = mi(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (wt((y) => {
              const x = this.getAxisMotionValue(y);
              x &&
                ((this.originPoint[y] += m[y].translate),
                x.set(x.get() + m[y].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), o(), d(), p && p();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: a = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Na,
        dragMomentum: p = !0,
      } = i;
    return {
      ...i,
      drag: o,
      dragDirectionLock: a,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function js(n, i, o) {
  return (i === !0 || i === n) && (o === null || o === n);
}
function ew(n, i = 10) {
  let o = null;
  return Math.abs(n.y) > i ? (o = "y") : Math.abs(n.x) > i && (o = "x"), o;
}
class tw extends gn {
  constructor(i) {
    super(i),
      (this.removeGroupControls = St),
      (this.removeListeners = St),
      (this.controls = new b1(i));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || St);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const oh = (n) => (i, o) => {
  n && Te.postRender(() => n(i, o));
};
class nw extends gn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = St);
  }
  onPointerDown(i) {
    this.session = new em(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: bp(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: o,
      onPan: a,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: oh(i),
      onStart: oh(o),
      onMove: a,
      onEnd: (d, f) => {
        delete this.session, c && Te.postRender(() => c(d, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ui(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Os = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let sa = !1;
class rw extends H.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: o,
        switchLayoutGroup: a,
        layoutId: c,
      } = this.props,
      { projection: d } = i;
    d &&
      (o.group && o.group.add(d),
      a && a.register && c && a.register(d),
      sa && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Os.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: o,
        visualElement: a,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: f } = a;
    return (
      f &&
        ((f.isPresent = d),
        (sa = !0),
        c || i.layoutDependency !== o || o === void 0 || i.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              Te.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      eu.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: o,
        switchLayoutGroup: a,
      } = this.props,
      { projection: c } = i;
    (sa = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        a && a.deregister && a.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function nm(n) {
  const [i, o] = Pp(),
    a = H.useContext(La);
  return re.jsx(rw, {
    ...n,
    layoutGroup: a,
    switchLayoutGroup: H.useContext(Fp),
    isPresent: i,
    safeToRemove: o,
  });
}
function iw(n, i, o) {
  const a = Xe(n) ? n : pr(n);
  return a.start(fu("", a, i, o)), a.animation;
}
const sw = (n, i) => n.depth - i.depth;
class ow {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(i) {
    Fa(this.children, i), (this.isDirty = !0);
  }
  remove(i) {
    za(this.children, i), (this.isDirty = !0);
  }
  forEach(i) {
    this.isDirty && this.children.sort(sw),
      (this.isDirty = !1),
      this.children.forEach(i);
  }
}
function lw(n, i) {
  const o = st.now(),
    a = ({ timestamp: c }) => {
      const d = c - o;
      d >= i && (mn(a), n(d - i));
    };
  return Te.setup(a, !0), () => mn(a);
}
const rm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  aw = rm.length,
  lh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  ah = (n) => typeof n == "number" || te.test(n);
function uw(n, i, o, a, c, d) {
  c
    ? ((n.opacity = Ce(0, o.opacity ?? 1, cw(a))),
      (n.opacityExit = Ce(i.opacity ?? 1, 0, fw(a))))
    : d && (n.opacity = Ce(i.opacity ?? 1, o.opacity ?? 1, a));
  for (let f = 0; f < aw; f++) {
    const p = `border${rm[f]}Radius`;
    let m = uh(i, p),
      g = uh(o, p);
    if (m === void 0 && g === void 0) continue;
    m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || ah(m) === ah(g)
        ? ((n[p] = Math.max(Ce(lh(m), lh(g), a), 0)),
          (zt.test(g) || zt.test(m)) && (n[p] += "%"))
        : (n[p] = g);
  }
  (i.rotate || o.rotate) && (n.rotate = Ce(i.rotate || 0, o.rotate || 0, a));
}
function uh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const cw = im(0, 0.5, Wh),
  fw = im(0.5, 0.95, St);
function im(n, i, o) {
  return (a) => (a < n ? 0 : a > i ? 1 : o(fi(n, i, a)));
}
function ch(n, i) {
  (n.min = i.min), (n.max = i.max);
}
function Dt(n, i) {
  ch(n.x, i.x), ch(n.y, i.y);
}
function fh(n, i) {
  (n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin);
}
function dh(n, i, o, a, c) {
  return (
    (n -= i), (n = $s(n, 1 / o, a)), c !== void 0 && (n = $s(n, 1 / c, a)), n
  );
}
function dw(n, i = 0, o = 1, a = 0.5, c, d = n, f = n) {
  if (
    (zt.test(i) &&
      ((i = parseFloat(i)), (i = Ce(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Ce(d.min, d.max, a);
  n === d && (p -= i),
    (n.min = dh(n.min, i, o, p, c)),
    (n.max = dh(n.max, i, o, p, c));
}
function hh(n, i, [o, a, c], d, f) {
  dw(n, i[o], i[a], i[c], i.scale, d, f);
}
const hw = ["x", "scaleX", "originX"],
  pw = ["y", "scaleY", "originY"];
function ph(n, i, o, a) {
  hh(n.x, i, hw, o ? o.x : void 0, a ? a.x : void 0),
    hh(n.y, i, pw, o ? o.y : void 0, a ? a.y : void 0);
}
function mh(n) {
  return n.translate === 0 && n.scale === 1;
}
function sm(n) {
  return mh(n.x) && mh(n.y);
}
function yh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function mw(n, i) {
  return yh(n.x, i.x) && yh(n.y, i.y);
}
function gh(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  );
}
function om(n, i) {
  return gh(n.x, i.x) && gh(n.y, i.y);
}
function vh(n) {
  return qe(n.x) / qe(n.y);
}
function wh(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  );
}
class yw {
  constructor() {
    this.members = [];
  }
  add(i) {
    Fa(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (
      (za(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(i) {
    const o = this.members.findIndex((c) => i === c);
    if (o === 0) return !1;
    let a;
    for (let c = o; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        a = d;
        break;
      }
    }
    return a ? (this.promote(a), !0) : !1;
  }
  promote(i, o) {
    const a = this.lead;
    if (i !== a && ((this.prevLead = a), (this.lead = i), i.show(), a)) {
      a.instance && a.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = a),
        o && (i.resumeFrom.preserveOpacity = !0),
        a.snapshot &&
          ((i.snapshot = a.snapshot),
          (i.snapshot.latestValues = a.animationValues || a.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: c } = i.options;
      c === !1 && a.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: o, resumingFrom: a } = i;
      o.onExitComplete && o.onExitComplete(),
        a && a.options.onExitComplete && a.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function gw(n, i, o) {
  let a = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = o?.z || 0;
  if (
    ((c || d || f) && (a = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (a += `scale(${1 / i.x}, ${1 / i.y}) `),
    o)
  ) {
    const {
      transformPerspective: g,
      rotate: y,
      rotateX: x,
      rotateY: T,
      skewX: M,
      skewY: V,
    } = o;
    g && (a = `perspective(${g}px) ${a}`),
      y && (a += `rotate(${y}deg) `),
      x && (a += `rotateX(${x}deg) `),
      T && (a += `rotateY(${T}deg) `),
      M && (a += `skewX(${M}deg) `),
      V && (a += `skewY(${V}deg) `);
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return (p !== 1 || m !== 1) && (a += `scale(${p}, ${m})`), a || "none";
}
const oa = ["", "X", "Y", "Z"],
  vw = 1e3;
let ww = 0;
function la(n, i, o, a) {
  const { latestValues: c } = i;
  c[n] && ((o[n] = c[n]), i.setStaticValue(n, 0), a && (a[n] = 0));
}
function lm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const o = Xp(i);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Te, !(c || d));
  }
  const { parent: a } = n;
  a && !a.hasCheckedOptimisedAppear && lm(a);
}
function am({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: o,
  checkIsScrollRoot: a,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i?.()) {
      (this.id = ww++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Tw),
            this.nodes.forEach(Ew),
            this.nodes.forEach(Mw),
            this.nodes.forEach(kw);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0);
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ow());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Ba()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = kp(f) && !f0(f)), (this.instance = f);
      const { layoutId: p, layout: m, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
        n)
      ) {
        let y,
          x = 0;
        const T = () => (this.root.updateBlockedByResize = !1);
        Te.read(() => {
          x = window.innerWidth;
        }),
          n(f, () => {
            const M = window.innerWidth;
            M !== x &&
              ((x = M),
              (this.root.updateBlockedByResize = !0),
              y && y(),
              (y = lw(T, 250)),
              Os.hasAnimatedSinceResize &&
                ((Os.hasAnimatedSinceResize = !1), this.nodes.forEach(Th)));
          });
      }
      p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          g &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: x,
              hasRelativeLayoutChanged: T,
              layout: M,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const V =
                  this.options.transition || g.getDefaultTransition() || Vw,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: _ } =
                  g.getProps(),
                z = !this.targetLayout || !om(this.targetLayout, M),
                U = !x && T;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                U ||
                (x && (z || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const I = { ...Ja(V, "layout"), onPlay: L, onComplete: _ };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((I.delay = 0), (I.type = !1)),
                  this.startAnimation(I),
                  this.setAnimationOrigin(y, U);
              } else
                x || Th(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = M;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        mn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Aw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          lm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const x = this.path[y];
        (x.shouldResetTransform = !0),
          x.updateScroll("snapshot"),
          x.options.layoutRoot && x.willUpdate(!1);
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const g = this.getTransformTemplate();
      (this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(xh);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Sh);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Cw),
            this.nodes.forEach(xw),
            this.nodes.forEach(Sw))
          : this.nodes.forEach(Sh),
        this.clearAllSnapshots();
      const p = st.now();
      (Be.delta = Xt(0, 1e3 / 60, p - Be.timestamp)),
        (Be.timestamp = p),
        (Be.isProcessing = !0),
        Ql.update.process(Be),
        Ql.preRender.process(Be),
        Ql.render.process(Be),
        (Be.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), eu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Pw), this.sharedNodes.forEach(Dw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Te.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Te.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !qe(this.snapshot.measuredBox.x) &&
          !qe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = je()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p && this.instance)
      ) {
        const m = a(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !sm(this.projectionDelta),
        m = this.getTransformTemplate(),
        g = m ? m(this.latestValues, "") : void 0,
        y = g !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || Vn(this.latestValues) || y) &&
        (c(this.instance, g),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        Lw(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return je();
      const p = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(jw))) {
        const { scroll: g } = this.root;
        g && (cr(p.x, g.offset.x), cr(p.y, g.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      const p = je();
      if ((Dt(p, f), this.scroll?.wasRoot)) return p;
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m],
          { scroll: y, options: x } = g;
        g !== this.root &&
          y &&
          x.layoutScroll &&
          (y.wasRoot && Dt(p, f), cr(p.x, y.offset.x), cr(p.y, y.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1) {
      const m = je();
      Dt(m, f);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        !p &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          fr(m, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          Vn(y.latestValues) && fr(m, y.latestValues);
      }
      return Vn(this.latestValues) && fr(m, this.latestValues), m;
    }
    removeTransform(f) {
      const p = je();
      Dt(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Vn(g.latestValues)) continue;
        Pa(g.latestValues) && g.updateSnapshot();
        const y = je(),
          x = g.measurePageBox();
        Dt(y, x),
          ph(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, y);
      }
      return Vn(this.latestValues) && ph(p, this.latestValues), p;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== p;
      if (
        !(
          f ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: y, layoutId: x } = this.options;
      if (!this.layout || !(y || x)) return;
      this.resolvedRelativeTargetAt = Be.timestamp;
      const T = this.getClosestProjectingParent();
      T &&
        this.linkedParentVersion !== T.layoutVersion &&
        !T.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (T && T.layout
            ? this.createRelativeTarget(
                T,
                this.layout.layoutBox,
                T.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = je()), (this.targetWithTransforms = je())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              H1(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Dt(this.target, this.layout.layoutBox),
              Bp(this.target, this.targetDelta))
            : Dt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            T &&
            !!T.resumingFrom == !!this.resumingFrom &&
            !T.options.layoutScroll &&
            T.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(T, this.target, T.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Pa(this.parent.latestValues) ||
          Op(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, p, m) {
      (this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = je()),
        (this.relativeTargetOrigin = je()),
        Ks(this.relativeTargetOrigin, p, m),
        Dt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(),
        p = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === Be.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: g, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || y))
      )
        return;
      Dt(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x,
        T = this.treeScale.y;
      e1(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = je()));
      const { target: M } = f;
      if (!M) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (fh(this.prevProjectionDelta.x, this.projectionDelta.x),
          fh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ci(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
        (this.treeScale.x !== x ||
          this.treeScale.y !== T ||
          !wh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !wh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", M));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = dr()),
        (this.projectionDelta = dr()),
        (this.projectionDeltaWithTransform = dr());
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        g = m ? m.latestValues : {},
        y = { ...this.latestValues },
        x = dr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p);
      const T = je(),
        M = m ? m.source : void 0,
        V = this.layout ? this.layout.source : void 0,
        L = M !== V,
        _ = this.getStack(),
        z = !_ || _.members.length <= 1,
        U = !!(L && !z && this.options.crossfade === !0 && !this.path.some(Rw));
      this.animationProgress = 0;
      let I;
      (this.mixTargetDelta = (Z) => {
        const X = Z / 1e3;
        kh(x.x, f.x, X),
          kh(x.y, f.y, X),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ks(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Nw(this.relativeTarget, this.relativeTargetOrigin, T, X),
            I && mw(this.relativeTarget, I) && (this.isProjectionDirty = !1),
            I || (I = je()),
            Dt(I, this.relativeTarget)),
          L &&
            ((this.animationValues = y), uw(y, g, this.latestValues, X, U, z)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = X);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (mn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Te.update(() => {
          (Os.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = pr(0)),
            (this.currentAnimation = iw(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (p) => {
                this.mixTargetDelta(p), f.onUpdate && f.onUpdate(p);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(vw),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: p,
        target: m,
        layout: g,
        latestValues: y,
      } = f;
      if (!(!p || !m || !g)) {
        if (
          this !== f &&
          this.layout &&
          g &&
          um(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          m = this.target || je();
          const x = qe(this.layout.layoutBox.x);
          (m.x.min = f.target.x.min), (m.x.max = m.x.min + x);
          const T = qe(this.layout.layoutBox.y);
          (m.y.min = f.target.y.min), (m.y.max = m.y.min + T);
        }
        Dt(p, m),
          fr(p, y),
          ci(this.projectionDeltaWithTransform, this.layoutCorrected, p, y);
      }
    }
    registerSharedNode(f, p) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new yw()),
        this.sharedNodes.get(f).add(p);
      const g = p.options.initialPromotionConfig;
      p.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(p)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
      const g = this.getStack();
      g && g.promote(this, m),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let p = !1;
      const { latestValues: m } = f;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const g = {};
      m.z && la("z", f, g, this.animationValues);
      for (let y = 0; y < oa.length; y++)
        la(`rotate${oa[y]}`, f, g, this.animationValues),
          la(`skew${oa[y]}`, f, g, this.animationValues);
      f.render();
      for (const y in g)
        f.setStaticValue(y, g[y]),
          this.animationValues && (this.animationValues[y] = g[y]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Is(p?.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none");
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Is(p?.pointerEvents) || "")),
          this.hasProjected &&
            !Vn(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let x = gw(this.projectionDeltaWithTransform, this.treeScale, y);
      m && (x = m(y, x)), (f.transform = x);
      const { x: T, y: M } = this.projectionDelta;
      (f.transformOrigin = `${T.origin * 100}% ${M.origin * 100}% 0`),
        g.animationValues
          ? (f.opacity =
              g === this
                ? y.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : y.opacityExit)
          : (f.opacity =
              g === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                ? y.opacityExit
                : 0);
      for (const V in ka) {
        if (y[V] === void 0) continue;
        const { correct: L, applyTo: _, isCSSVariable: z } = ka[V],
          U = x === "none" ? y[V] : L(y[V], g);
        if (_) {
          const I = _.length;
          for (let Z = 0; Z < I; Z++) f[_[Z]] = U;
        } else
          z ? (this.options.visualElement.renderState.vars[V] = U) : (f[V] = U);
      }
      this.options.layoutId &&
        (f.pointerEvents = g === this ? Is(p?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(xh),
        this.root.sharedNodes.clear();
    }
  };
}
function xw(n) {
  n.updateLayout();
}
function Sw(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: a } = n.layout,
      { animationType: c } = n.options,
      d = i.source !== n.layout.source;
    c === "size"
      ? wt((y) => {
          const x = d ? i.measuredBox[y] : i.layoutBox[y],
            T = qe(x);
          (x.min = o[y].min), (x.max = x.min + T);
        })
      : um(c, i.layoutBox, o) &&
        wt((y) => {
          const x = d ? i.measuredBox[y] : i.layoutBox[y],
            T = qe(o[y]);
          (x.max = x.min + T),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[y].max = n.relativeTarget[y].min + T));
        });
    const f = dr();
    ci(f, o, i.layoutBox);
    const p = dr();
    d ? ci(p, n.applyTransform(a, !0), i.measuredBox) : ci(p, o, i.layoutBox);
    const m = !sm(f);
    let g = !1;
    if (!n.resumeFrom) {
      const y = n.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: x, layout: T } = y;
        if (x && T) {
          const M = je();
          Ks(M, i.layoutBox, x.layoutBox);
          const V = je();
          Ks(V, o, T.layoutBox),
            om(M, V) || (g = !0),
            y.options.layoutRoot &&
              ((n.relativeTarget = V),
              (n.relativeTargetOrigin = M),
              (n.relativeParent = y));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: o,
      snapshot: i,
      delta: p,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: o } = n.options;
    o && o();
  }
  n.options.transition = void 0;
}
function Tw(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function kw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function Pw(n) {
  n.clearSnapshot();
}
function xh(n) {
  n.clearMeasurements();
}
function Sh(n) {
  n.isLayoutDirty = !1;
}
function Cw(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform();
}
function Th(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function Ew(n) {
  n.resolveTargetDelta();
}
function Mw(n) {
  n.calcProjection();
}
function Aw(n) {
  n.resetSkewAndRotation();
}
function Dw(n) {
  n.removeLeadSnapshot();
}
function kh(n, i, o) {
  (n.translate = Ce(i.translate, 0, o)),
    (n.scale = Ce(i.scale, 1, o)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint);
}
function Ph(n, i, o, a) {
  (n.min = Ce(i.min, o.min, a)), (n.max = Ce(i.max, o.max, a));
}
function Nw(n, i, o, a) {
  Ph(n.x, i.x, o.x, a), Ph(n.y, i.y, o.y, a);
}
function Rw(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const Vw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ch = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  Eh = Ch("applewebkit/") && !Ch("chrome/") ? Math.round : St;
function Mh(n) {
  (n.min = Eh(n.min)), (n.max = Eh(n.max));
}
function Lw(n) {
  Mh(n.x), Mh(n.y);
}
function um(n, i, o) {
  return (
    n === "position" || (n === "preserve-aspect" && !U1(vh(i), vh(o), 0.2))
  );
}
function jw(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const _w = am({
    attachResizeListener: (n, i) => mi(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  aa = { current: void 0 },
  cm = am({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!aa.current) {
        const n = new _w({});
        n.mount(window), n.setOptions({ layoutScroll: !0 }), (aa.current = n);
      }
      return aa.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  Fw = {
    pan: { Feature: nw },
    drag: { Feature: tw, ProjectionNode: cm, MeasureLayout: nm },
  };
function Ah(n, i, o) {
  const { props: a } = n;
  n.animationState &&
    a.whileHover &&
    n.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    d = a[c];
  d && Te.postRender(() => d(i, wi(i)));
}
class zw extends gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = o0(
        i,
        (o, a) => (Ah(this.node, a, "Start"), (c) => Ah(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class Iw extends gn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = yi(
      mi(this.node.current, "focus", () => this.onFocus()),
      mi(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Dh(n, i, o) {
  const { props: a } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    a.whileTap &&
    n.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    d = a[c];
  d && Te.postRender(() => d(i, wi(i)));
}
class Ow extends gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = c0(
        i,
        (o, a) => (
          Dh(this.node, a, "Start"),
          (c, { success: d }) => Dh(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Ra = new WeakMap(),
  ua = new WeakMap(),
  Bw = (n) => {
    const i = Ra.get(n.target);
    i && i(n);
  },
  Uw = (n) => {
    n.forEach(Bw);
  };
function Hw({ root: n, ...i }) {
  const o = n || document;
  ua.has(o) || ua.set(o, {});
  const a = ua.get(o),
    c = JSON.stringify(i);
  return a[c] || (a[c] = new IntersectionObserver(Uw, { root: n, ...i })), a[c];
}
function Ww(n, i, o) {
  const a = Hw(i);
  return (
    Ra.set(n, o),
    a.observe(n),
    () => {
      Ra.delete(n), a.unobserve(n);
    }
  );
}
const $w = { some: 0, all: 1 };
class Kw extends gn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: o, margin: a, amount: c = "some", once: d } = i,
      f = {
        root: o ? o.current : void 0,
        rootMargin: a,
        threshold: typeof c == "number" ? c : $w[c],
      },
      p = (m) => {
        const { isIntersecting: g } = m;
        if (
          this.isInView === g ||
          ((this.isInView = g), d && !g && this.hasEnteredView)
        )
          return;
        g && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", g);
        const { onViewportEnter: y, onViewportLeave: x } = this.node.getProps(),
          T = g ? y : x;
        T && T(m);
      };
    return Ww(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(Xw(i, o)) && this.startObserver();
  }
  unmount() {}
}
function Xw({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (o) => n[o] !== i[o];
}
const Yw = {
    inView: { Feature: Kw },
    tap: { Feature: Ow },
    focus: { Feature: Iw },
    hover: { Feature: zw },
  },
  Gw = { layout: { ProjectionNode: cm, MeasureLayout: nm } },
  Qw = { ..._1, ...Yw, ...Fw, ...Gw },
  _s = q0(Qw, c1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zw = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  qw = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, o, a) =>
      a ? a.toUpperCase() : o.toLowerCase()
    ),
  Nh = (n) => {
    const i = qw(n);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  fm = (...n) =>
    n
      .filter((i, o, a) => !!i && i.trim() !== "" && a.indexOf(i) === o)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Jw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bw = H.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: a,
      className: c = "",
      children: d,
      iconNode: f,
      ...p
    },
    m
  ) =>
    H.createElement(
      "svg",
      {
        ref: m,
        ...Jw,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: a ? (Number(o) * 24) / Number(i) : o,
        className: fm("lucide", c),
        ...p,
      },
      [
        ...f.map(([g, y]) => H.createElement(g, y)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = (n, i) => {
  const o = H.forwardRef(({ className: a, ...c }, d) =>
    H.createElement(bw, {
      ref: d,
      iconNode: i,
      className: fm(`lucide-${Zw(Nh(n))}`, `lucide-${n}`, a),
      ...c,
    })
  );
  return (o.displayName = Nh(n)), o;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ex = [
    [
      "path",
      {
        d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
        key: "sc7q7i",
      },
    ],
  ],
  tx = dm("funnel", ex);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]],
  rx = dm("play", nx),
  Rh = [
    {
      id: 1,
      src: "https://andiwelt.github.io/portfolio2/assets/DJI_0068-Recovered.jpg",
      category: "Portrait",
      title: "Natural Light Portrait",
      type: "image",
    },
    {
      id: 2,
      src: "https://andiwelt.github.io/portfolio2/assets/IMG_0551.jpg",
      category: "Landscape",
      title: "Mountain Vista",
      type: "image",
    },
    {
      id: 3,
      src: "https://andiwelt.github.io/portfolio2/assets/IMG_7375-2-1920-web.jpg",
      category: "Architecture",
      title: "Urban Geometry",
      type: "image",
    },
    {
      id: 4,
      src: "https://andiwelt.github.io/portfolio2/assets/IMG_7918-Edit.jpg",
      category: "Video",
      title: "Behind the Scenes",
      type: "video",
    },
    {
      id: 5,
      src: "https://andiwelt.github.io/portfolio2/assets/IMG_8297-4.jpg",
      category: "Street",
      title: "City Life",
      type: "image",
    },
    {
      id: 6,
      src: "https://andiwelt.github.io/portfolio2/assets/P1230757_filtered.jpg",
      category: "Fashion",
      title: "Editorial Style",
      type: "image",
    },
    {
      id: 7,
      src: "https://andiwelt.github.io/portfolio2/assets/P1360505-web2.jpg",
      category: "Landscape",
      title: "Misty Sunrise",
      type: "image",
    },
    {
      id: 8,
      src: "https://andiwelt.github.io/portfolio2/assets/P1360559_web.jpg",
      category: "Travel",
      title: "Island Paradise",
      type: "image",
    },
    {
      id: 9,
      src: "https://andiwelt.github.io/portfolio2/assets/P1360649-web.jpg",
      category: "Food",
      title: "Culinary Art",
      type: "image",
    },
    {
      id: 10,
      src: "https://andiwelt.github.io/portfolio2/assets/P1360682-web.jpg",
      category: "Wildlife",
      title: "Wild Beauty",
      type: "image",
    },
    {
      id: 11,
      src: "https://andiwelt.github.io/portfolio2/assets/P1360706-web.jpg",
      category: "Video",
      title: "Travel Moments",
      type: "video",
    },
    {
      id: 12,
      src: "https://andiwelt.github.io/portfolio2/assets/P1360712-web.jpg",
      category: "Landscape",
      title: "Ocean Waves",
      type: "image",
    },
    {
      id: 13,
      src: "https://andiwelt.github.io/portfolio2/assets/P3499358-HDR-big.jpg",
      category: "Abstract",
      title: "Abstract Forms",
      type: "image",
    },
    {
      id: 14,
      src: "https://andiwelt.github.io/portfolio2/assets/P3644233-web.jpg",
      category: "Landscape",
      title: "Mountain Sunrise",
      type: "image",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGlnaHRzfGVufDF8fHx8MTc2MDI5MzIxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Urban",
      title: "City Lights",
      type: "image",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2MDI5NDQxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Minimal",
      title: "Minimalist Design",
      type: "image",
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjAyNzI4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Landscape",
      title: "Beach Sunset",
      type: "image",
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBwYXRofGVufDF8fHx8MTc2MDI5NzQ1MXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Nature",
      title: "Forest Path",
      type: "image",
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxpZmV8ZW58MXx8fHwxNzYwMjQ1NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Street",
      title: "Urban Life",
      type: "image",
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAyMTY5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Architecture",
      title: "Modern Interior",
      type: "image",
    },
  ];
function ix() {
  const [n, i] = H.useState("All"),
    [o, a] = H.useState(null),
    [c, d] = H.useState(!1),
    f = [
      "All",
      "Portrait",
      "Landscape",
      "Architecture",
      "Street",
      "Fashion",
      "Travel",
      "Food",
      "Wildlife",
      "Video",
      "Abstract",
      "Urban",
      "Minimal",
      "Nature",
    ],
    p = n === "All" ? Rh : Rh.filter((m) => m.category === n);
  return re.jsxs("div", {
    className: "relative w-full min-h-screen bg-black",
    children: [
      re.jsx("header", {
        className:
          "relative bg-black text-white py-12 px-6 border-b border-white/10",
        children: re.jsx("div", {
          className: "max-w-7xl mx-auto",
          children: re.jsxs(_s.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            children: [
              re.jsx("h1", {
                className: "text-4xl md:text-5xl mb-4",
                children: "Alex Morgan",
              }),
              re.jsx("p", {
                className: "text-white/70 text-lg max-w-2xl",
                children:
                  "Visual storyteller capturing moments through photography and videography. Specializing in portrait, landscape, and architectural work. Based in New York City.",
              }),
            ],
          }),
        }),
      }),
      re.jsx("button", {
        onClick: () => d(!c),
        className:
          "fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all",
        children: re.jsx(tx, { size: 20 }),
      }),
      re.jsx(zd, {
        children:
          c &&
          re.jsx(_s.div, {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            className:
              "fixed top-20 right-4 z-50 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-h-[70vh] overflow-y-auto",
            children: re.jsx("div", {
              className: "flex flex-col gap-2",
              children: f.map((m) =>
                re.jsx(
                  "button",
                  {
                    onClick: () => {
                      i(m), d(!1);
                    },
                    className: `px-4 py-2 rounded-lg transition-all text-left ${
                      n === m
                        ? "bg-black text-white"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    }`,
                    children: m,
                  },
                  m
                )
              ),
            }),
          }),
      }),
      re.jsxs("div", {
        className: "w-full relative",
        children: [
          re.jsx("div", {
            className: "grid grid-cols-5",
            children: p
              .slice(0, 20)
              .map((m, g) =>
                re.jsxs(
                  _s.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, delay: g * 0.02 },
                    className: `relative aspect-square overflow-hidden cursor-pointer group ${
                      o?.id === m.id ? "z-50" : "z-0"
                    }`,
                    onClick: () => a(o?.id === m.id ? null : m),
                    children: [
                      m.type === "image"
                        ? re.jsx("img", {
                            src: m.src,
                            alt: m.title,
                            className:
                              "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                          })
                        : re.jsxs(re.Fragment, {
                            children: [
                              re.jsx("video", {
                                src: m.src,
                                className: "w-full h-full object-cover",
                                muted: !0,
                                playsInline: !0,
                                loop: !0,
                              }),
                              re.jsx("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none",
                                children: re.jsx("div", {
                                  className:
                                    "bg-white/20 backdrop-blur-sm rounded-full p-4",
                                  children: re.jsx(rx, {
                                    size: 32,
                                    className: "text-white",
                                    fill: "white",
                                  }),
                                }),
                              }),
                            ],
                          }),
                      re.jsx("div", {
                        className:
                          "absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none",
                        children: re.jsx("div", {
                          className:
                            "text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4",
                          children: re.jsx("p", {
                            className: "text-sm",
                            children: m.title,
                          }),
                        }),
                      }),
                    ],
                  },
                  m.id
                )
              ),
          }),
          re.jsx(zd, {
            children:
              o &&
              re.jsx(_s.div, {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
                transition: { type: "spring", damping: 30, stiffness: 300 },
                className:
                  "fixed inset-0 z-[60] flex items-center justify-center p-8 md:p-16 bg-black/80",
                onClick: () => a(null),
                children: re.jsxs("div", {
                  className:
                    "relative max-w-6xl max-h-full flex flex-col items-center",
                  children: [
                    o.type === "image"
                      ? re.jsx("img", {
                          src: o.src,
                          alt: o.title,
                          className:
                            "max-w-full max-h-[80vh] object-contain border-2 border-white shadow-2xl",
                        })
                      : re.jsx("video", {
                          src: o.src,
                          controls: !0,
                          autoPlay: !0,
                          className:
                            "max-w-full max-h-[80vh] object-contain border-2 border-white shadow-2xl",
                          onClick: (m) => m.stopPropagation(),
                        }),
                    re.jsxs("div", {
                      className: "text-white mt-4 text-center",
                      children: [
                        re.jsx("h3", {
                          className: "text-xl",
                          children: o.title,
                        }),
                        re.jsx("p", {
                          className: "text-white/70 text-sm mt-1",
                          children: o.category,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          }),
        ],
      }),
    ],
  });
}
gg.createRoot(document.getElementById("root")).render(re.jsx(ix, {}));
