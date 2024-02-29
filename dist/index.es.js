var ti = Object.defineProperty;
var ri = (e, t, r) => t in e ? ti(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var A = (e, t, r) => (ri(e, typeof t != "symbol" ? t + "" : t, r), r);
import pr, { createContext as pn, useRef as vn, useContext as mn, useState as bn, useEffect as $t } from "react";
var v = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rr = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function ni() {
  if (Mr)
    return Ke;
  Mr = 1;
  var e = pr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, f, w) {
    var l, s = {}, y = null, x = null;
    w !== void 0 && (y = "" + w), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (l in f)
      n.call(f, l) && !a.hasOwnProperty(l) && (s[l] = f[l]);
    if (c && c.defaultProps)
      for (l in f = c.defaultProps, f)
        s[l] === void 0 && (s[l] = f[l]);
    return { $$typeof: t, type: c, key: y, ref: x, props: s, _owner: o.current };
  }
  return Ke.Fragment = r, Ke.jsx = u, Ke.jsxs = u, Ke;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function oi() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), _ = Symbol.iterator, B = "@@iterator";
    function L(i) {
      if (i === null || typeof i != "object")
        return null;
      var h = _ && i[_] || i[B];
      return typeof h == "function" ? h : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(i) {
      {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), S = 1; S < h; S++)
          g[S - 1] = arguments[S];
        Q("error", i, g);
      }
    }
    function Q(i, h, g) {
      {
        var S = k.ReactDebugCurrentFrame, $ = S.getStackAddendum();
        $ !== "" && (h += "%s", g = g.concat([$]));
        var P = g.map(function(T) {
          return String(T);
        });
        P.unshift("Warning: " + h), Function.prototype.apply.call(console[i], console, P);
      }
    }
    var Z = !1, ae = !1, Ye = !1, Te = !1, Me = !1, $e;
    $e = Symbol.for("react.module.reference");
    function qt(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === a || Me || i === o || i === w || i === l || Te || i === x || Z || ae || Ye || typeof i == "object" && i !== null && (i.$$typeof === y || i.$$typeof === s || i.$$typeof === u || i.$$typeof === c || i.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === $e || i.getModuleId !== void 0));
    }
    function qe(i, h, g) {
      var S = i.displayName;
      if (S)
        return S;
      var $ = h.displayName || h.name || "";
      return $ !== "" ? g + "(" + $ + ")" : g;
    }
    function yt(i) {
      return i.displayName || "Context";
    }
    function z(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case w:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var h = i;
            return yt(h) + ".Consumer";
          case u:
            var g = i;
            return yt(g._context) + ".Provider";
          case f:
            return qe(i, i.render, "ForwardRef");
          case s:
            var S = i.displayName || null;
            return S !== null ? S : z(i.type) || "Memo";
          case y: {
            var $ = i, P = $._payload, T = $._init;
            try {
              return z(T(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var we = Object.assign, fe = 0, Et, wt, _t, b, d, m, E;
    function p() {
    }
    p.__reactDisabledLog = !0;
    function N() {
      {
        if (fe === 0) {
          Et = console.log, wt = console.info, _t = console.warn, b = console.error, d = console.group, m = console.groupCollapsed, E = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: p,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        fe++;
      }
    }
    function O() {
      {
        if (fe--, fe === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: we({}, i, {
              value: Et
            }),
            info: we({}, i, {
              value: wt
            }),
            warn: we({}, i, {
              value: _t
            }),
            error: we({}, i, {
              value: b
            }),
            group: we({}, i, {
              value: d
            }),
            groupCollapsed: we({}, i, {
              value: m
            }),
            groupEnd: we({}, i, {
              value: E
            })
          });
        }
        fe < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = k.ReactCurrentDispatcher, X;
    function D(i, h, g) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch ($) {
            var S = $.stack.trim().match(/\n( *(at )?)/);
            X = S && S[1] || "";
          }
        return `
` + X + i;
      }
    }
    var C = !1, ee;
    {
      var _e = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new _e();
    }
    function V(i, h) {
      if (!i || C)
        return "";
      {
        var g = ee.get(i);
        if (g !== void 0)
          return g;
      }
      var S;
      C = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = H.current, H.current = null, N();
      try {
        if (h) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (Ce) {
              S = Ce;
            }
            Reflect.construct(i, [], T);
          } else {
            try {
              T.call();
            } catch (Ce) {
              S = Ce;
            }
            i.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            S = Ce;
          }
          i();
        }
      } catch (Ce) {
        if (Ce && S && typeof Ce.stack == "string") {
          for (var R = Ce.stack.split(`
`), G = S.stack.split(`
`), U = R.length - 1, W = G.length - 1; U >= 1 && W >= 0 && R[U] !== G[W]; )
            W--;
          for (; U >= 1 && W >= 0; U--, W--)
            if (R[U] !== G[W]) {
              if (U !== 1 || W !== 1)
                do
                  if (U--, W--, W < 0 || R[U] !== G[W]) {
                    var ne = `
` + R[U].replace(" at new ", " at ");
                    return i.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", i.displayName)), typeof i == "function" && ee.set(i, ne), ne;
                  }
                while (U >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        C = !1, H.current = P, O(), Error.prepareStackTrace = $;
      }
      var We = i ? i.displayName || i.name : "", Ur = We ? D(We) : "";
      return typeof i == "function" && ee.set(i, Ur), Ur;
    }
    function re(i, h, g) {
      return V(i, !1);
    }
    function he(i) {
      var h = i.prototype;
      return !!(h && h.isReactComponent);
    }
    function K(i, h, g) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return V(i, he(i));
      if (typeof i == "string")
        return D(i);
      switch (i) {
        case w:
          return D("Suspense");
        case l:
          return D("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case f:
            return re(i.render);
          case s:
            return K(i.type, h, g);
          case y: {
            var S = i, $ = S._payload, P = S._init;
            try {
              return K(P($), h, g);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, Fe = {}, Ct = k.ReactDebugCurrentFrame;
    function St(i) {
      if (i) {
        var h = i._owner, g = K(i.type, i._source, h ? h.type : null);
        Ct.setExtraStackFrame(g);
      } else
        Ct.setExtraStackFrame(null);
    }
    function Io(i, h, g, S, $) {
      {
        var P = Function.call.bind(ue);
        for (var T in i)
          if (P(i, T)) {
            var R = void 0;
            try {
              if (typeof i[T] != "function") {
                var G = Error((S || "React class") + ": " + g + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              R = i[T](h, T, S, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (U) {
              R = U;
            }
            R && !(R instanceof Error) && (St($), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", g, T, typeof R), St(null)), R instanceof Error && !(R.message in Fe) && (Fe[R.message] = !0, St($), I("Failed %s type: %s", g, R.message), St(null));
          }
      }
    }
    var Ao = Array.isArray;
    function Ht(i) {
      return Ao(i);
    }
    function Lo(i) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, g = h && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return g;
      }
    }
    function Do(i) {
      try {
        return jr(i), !1;
      } catch {
        return !0;
      }
    }
    function jr(i) {
      return "" + i;
    }
    function kr(i) {
      if (Do(i))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lo(i)), jr(i);
    }
    var ze = k.ReactCurrentOwner, Uo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $r, Fr, Wt;
    Wt = {};
    function Mo(i) {
      if (ue.call(i, "ref")) {
        var h = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function qo(i) {
      if (ue.call(i, "key")) {
        var h = Object.getOwnPropertyDescriptor(i, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Ho(i, h) {
      if (typeof i.ref == "string" && ze.current && h && ze.current.stateNode !== h) {
        var g = z(ze.current.type);
        Wt[g] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(ze.current.type), i.ref), Wt[g] = !0);
      }
    }
    function Wo(i, h) {
      {
        var g = function() {
          $r || ($r = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Bo(i, h) {
      {
        var g = function() {
          Fr || (Fr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Xo = function(i, h, g, S, $, P, T) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: h,
        ref: g,
        props: T,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Jo(i, h, g, S, $) {
      {
        var P, T = {}, R = null, G = null;
        g !== void 0 && (kr(g), R = "" + g), qo(h) && (kr(h.key), R = "" + h.key), Mo(h) && (G = h.ref, Ho(h, $));
        for (P in h)
          ue.call(h, P) && !Uo.hasOwnProperty(P) && (T[P] = h[P]);
        if (i && i.defaultProps) {
          var U = i.defaultProps;
          for (P in U)
            T[P] === void 0 && (T[P] = U[P]);
        }
        if (R || G) {
          var W = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          R && Wo(T, W), G && Bo(T, W);
        }
        return Xo(i, R, G, $, S, ze.current, T);
      }
    }
    var Bt = k.ReactCurrentOwner, Nr = k.ReactDebugCurrentFrame;
    function He(i) {
      if (i) {
        var h = i._owner, g = K(i.type, i._source, h ? h.type : null);
        Nr.setExtraStackFrame(g);
      } else
        Nr.setExtraStackFrame(null);
    }
    var Xt;
    Xt = !1;
    function Jt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Pr() {
      {
        if (Bt.current) {
          var i = z(Bt.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Vo(i) {
      {
        if (i !== void 0) {
          var h = i.fileName.replace(/^.*[\\\/]/, ""), g = i.lineNumber;
          return `

Check your code at ` + h + ":" + g + ".";
        }
        return "";
      }
    }
    var Ir = {};
    function Go(i) {
      {
        var h = Pr();
        if (!h) {
          var g = typeof i == "string" ? i : i.displayName || i.name;
          g && (h = `

Check the top-level render call using <` + g + ">.");
        }
        return h;
      }
    }
    function Ar(i, h) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var g = Go(h);
        if (Ir[g])
          return;
        Ir[g] = !0;
        var S = "";
        i && i._owner && i._owner !== Bt.current && (S = " It was passed a child from " + z(i._owner.type) + "."), He(i), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, S), He(null);
      }
    }
    function Lr(i, h) {
      {
        if (typeof i != "object")
          return;
        if (Ht(i))
          for (var g = 0; g < i.length; g++) {
            var S = i[g];
            Jt(S) && Ar(S, h);
          }
        else if (Jt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var $ = L(i);
          if (typeof $ == "function" && $ !== i.entries)
            for (var P = $.call(i), T; !(T = P.next()).done; )
              Jt(T.value) && Ar(T.value, h);
        }
      }
    }
    function Yo(i) {
      {
        var h = i.type;
        if (h == null || typeof h == "string")
          return;
        var g;
        if (typeof h == "function")
          g = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === s))
          g = h.propTypes;
        else
          return;
        if (g) {
          var S = z(h);
          Io(g, i.props, "prop", S, i);
        } else if (h.PropTypes !== void 0 && !Xt) {
          Xt = !0;
          var $ = z(h);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zo(i) {
      {
        for (var h = Object.keys(i.props), g = 0; g < h.length; g++) {
          var S = h[g];
          if (S !== "children" && S !== "key") {
            He(i), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), He(null);
            break;
          }
        }
        i.ref !== null && (He(i), I("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
      }
    }
    function Dr(i, h, g, S, $, P) {
      {
        var T = qt(i);
        if (!T) {
          var R = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Vo($);
          G ? R += G : R += Pr();
          var U;
          i === null ? U = "null" : Ht(i) ? U = "array" : i !== void 0 && i.$$typeof === t ? (U = "<" + (z(i.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : U = typeof i, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, R);
        }
        var W = Jo(i, h, g, $, P);
        if (W == null)
          return W;
        if (T) {
          var ne = h.children;
          if (ne !== void 0)
            if (S)
              if (Ht(ne)) {
                for (var We = 0; We < ne.length; We++)
                  Lr(ne[We], i);
                Object.freeze && Object.freeze(ne);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lr(ne, i);
        }
        return i === n ? zo(W) : Yo(W), W;
      }
    }
    function Ko(i, h, g) {
      return Dr(i, h, g, !0);
    }
    function Qo(i, h, g) {
      return Dr(i, h, g, !1);
    }
    var Zo = Qo, ei = Ko;
    Qe.Fragment = n, Qe.jsx = Zo, Qe.jsxs = ei;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? rr.exports = ni() : rr.exports = oi();
var tt = rr.exports, yn = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n(pr);
  })(self, (r) => (() => {
    var n = { 156: (c) => {
      c.exports = r;
    } }, o = {};
    function a(c) {
      var f = o[c];
      if (f !== void 0)
        return f.exports;
      var w = o[c] = { exports: {} };
      return n[c](w, w.exports, a), w.exports;
    }
    a.d = (c, f) => {
      for (var w in f)
        a.o(f, w) && !a.o(c, w) && Object.defineProperty(c, w, { enumerable: !0, get: f[w] });
    }, a.o = (c, f) => Object.prototype.hasOwnProperty.call(c, f), a.r = (c) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(c, "__esModule", { value: !0 });
    };
    var u = {};
    return (() => {
      a.r(u), a.d(u, { Actions: () => x, default: () => _t, isAbortError: () => L, isErrorResponse: () => B, useDelete: () => Ye, useFetch: () => Z, useFetchImmediate: () => Me, useGet: () => qt, useGetImmediate: () => yt, usePost: () => we, usePut: () => Et, useUpload: () => wt });
      var c = function() {
        return c = Object.assign || function(b) {
          for (var d, m = 1, E = arguments.length; m < E; m++)
            for (var p in d = arguments[m])
              Object.prototype.hasOwnProperty.call(d, p) && (b[p] = d[p]);
          return b;
        }, c.apply(this, arguments);
      }, f = function(b, d, m, E) {
        return new (m || (m = Promise))(function(p, N) {
          function O(D) {
            try {
              X(E.next(D));
            } catch (C) {
              N(C);
            }
          }
          function H(D) {
            try {
              X(E.throw(D));
            } catch (C) {
              N(C);
            }
          }
          function X(D) {
            var C;
            D.done ? p(D.value) : (C = D.value, C instanceof m ? C : new m(function(ee) {
              ee(C);
            })).then(O, H);
          }
          X((E = E.apply(b, d || [])).next());
        });
      }, w = function(b, d) {
        var m, E, p, N, O = { label: 0, sent: function() {
          if (1 & p[0])
            throw p[1];
          return p[1];
        }, trys: [], ops: [] };
        return N = { next: H(0), throw: H(1), return: H(2) }, typeof Symbol == "function" && (N[Symbol.iterator] = function() {
          return this;
        }), N;
        function H(X) {
          return function(D) {
            return function(C) {
              if (m)
                throw new TypeError("Generator is already executing.");
              for (; N && (N = 0, C[0] && (O = 0)), O; )
                try {
                  if (m = 1, E && (p = 2 & C[0] ? E.return : C[0] ? E.throw || ((p = E.return) && p.call(E), 0) : E.next) && !(p = p.call(E, C[1])).done)
                    return p;
                  switch (E = 0, p && (C = [2 & C[0], p.value]), C[0]) {
                    case 0:
                    case 1:
                      p = C;
                      break;
                    case 4:
                      return O.label++, { value: C[1], done: !1 };
                    case 5:
                      O.label++, E = C[1], C = [0];
                      continue;
                    case 7:
                      C = O.ops.pop(), O.trys.pop();
                      continue;
                    default:
                      if (!((p = (p = O.trys).length > 0 && p[p.length - 1]) || C[0] !== 6 && C[0] !== 2)) {
                        O = 0;
                        continue;
                      }
                      if (C[0] === 3 && (!p || C[1] > p[0] && C[1] < p[3])) {
                        O.label = C[1];
                        break;
                      }
                      if (C[0] === 6 && O.label < p[1]) {
                        O.label = p[1], p = C;
                        break;
                      }
                      if (p && O.label < p[2]) {
                        O.label = p[2], O.ops.push(C);
                        break;
                      }
                      p[2] && O.ops.pop(), O.trys.pop();
                      continue;
                  }
                  C = d.call(b, O);
                } catch (ee) {
                  C = [6, ee], E = 0;
                } finally {
                  m = p = 0;
                }
              if (5 & C[0])
                throw C[1];
              return { value: C[0] ? C[1] : void 0, done: !0 };
            }([X, D]);
          };
        }
      };
      function l(b) {
        var d = {}, m = localStorage.getItem("XSRF-TOKEN");
        return m && (d["X-XSRF-TOKEN"] = m), b || (d["Content-Type"] = "application/json"), d;
      }
      function s(b) {
        return f(this, void 0, void 0, function() {
          var d, m;
          return w(this, function(E) {
            switch (E.label) {
              case 0:
                return (d = b.headers.get("X-XSRF-TOKEN")) && localStorage.setItem("XSRF-TOKEN", d), [4, b.json()];
              case 1:
                if (m = E.sent(), b.ok)
                  return [2, m];
                throw c({ status: b.status }, m);
            }
          });
        });
      }
      function y(b, d) {
        return d === void 0 && (d = {}), f(this, void 0, void 0, function() {
          var m, E, p, N, O, H, X, D, C, ee, _e;
          return w(this, function(V) {
            switch (V.label) {
              case 0:
                return m = d.method, E = m === void 0 ? "GET" : m, p = d.headers, N = p === void 0 ? {} : p, O = d.params, H = O === void 0 ? {} : O, X = d.body, D = d.signal, C = function(re) {
                  return new URLSearchParams(Object.entries(re).filter(function(he) {
                    return he[1] != null;
                  }).reduce(function(he, K) {
                    var ue, Fe = K[0], Ct = K[1];
                    return c(c({}, he), ((ue = {})[Fe] = Ct.toString(), ue));
                  }, {}));
                }(H || {}), ee = "".concat(b, "?").concat(C), _e = X instanceof FormData, [4, fetch(ee, c({ method: E, signal: D, credentials: "include", headers: c(c({}, l(_e)), N) }, X && { body: _e ? X : JSON.stringify(X) }))];
              case 1:
                return [4, s(V.sent())];
              case 2:
                return [2, V.sent()];
            }
          });
        });
      }
      var x, _ = a(156);
      function B(b) {
        return b.errorCode !== void 0 && b.message !== void 0;
      }
      function L(b) {
        return b.name === "AbortError";
      }
      (function(b) {
        b[b.FETCH_INIT = 0] = "FETCH_INIT", b[b.FETCH_SUCCESS = 1] = "FETCH_SUCCESS", b[b.FETCH_FAILURE = 2] = "FETCH_FAILURE", b[b.CLEAR_ERROR = 3] = "CLEAR_ERROR";
      })(x || (x = {}));
      var k = function() {
        return k = Object.assign || function(b) {
          for (var d, m = 1, E = arguments.length; m < E; m++)
            for (var p in d = arguments[m])
              Object.prototype.hasOwnProperty.call(d, p) && (b[p] = d[p]);
          return b;
        }, k.apply(this, arguments);
      }, I = { loading: !1, success: !1, error: null, data: null };
      function Q(b, d) {
        switch (d.type) {
          case x.FETCH_INIT:
            return k(k({}, b), { loading: !0, error: null, success: !1 });
          case x.FETCH_SUCCESS:
            return k(k({}, b), { loading: !1, error: null, data: d.payload, success: !0 });
          case x.FETCH_FAILURE:
            return k(k({}, b), { loading: !1, error: d.payload, success: !1 });
          case x.CLEAR_ERROR:
            return k(k({}, b), { error: null });
          default:
            throw new Error();
        }
      }
      function Z(b, d) {
        d === void 0 && (d = {});
        var m = (0, _.useReducer)(Q, I), E = m[0], p = m[1], N = (0, _.useRef)(b), O = (0, _.useRef)(d);
        (0, _.useEffect)(function() {
          N.current = b, O.current = d;
        }, [b, d]);
        var H = (0, _.useCallback)(function(D) {
          D === void 0 && (D = {});
          var C = new AbortController(), ee = k(k({}, D), { signal: C.signal });
          return p({ type: x.FETCH_INIT }), y(N.current, ee).then(function(_e) {
            return function(V, re, he) {
              var K = re.onComplete;
              he({ type: x.FETCH_SUCCESS, payload: V }), K == null || K(V);
            }(_e, O.current, p);
          }).catch(function(_e) {
            return function(V, re, he) {
              var K, ue;
              if (!L(V))
                if (B(V))
                  he({ type: x.FETCH_FAILURE, payload: V }), (K = re == null ? void 0 : re.onError) === null || K === void 0 || K.call(re, V);
                else {
                  var Fe = { errorCode: "UNCAUGHT_ERROR", message: "Uncaught error in useFetch" };
                  he({ type: x.FETCH_FAILURE, payload: Fe }), (ue = re == null ? void 0 : re.onError) === null || ue === void 0 || ue.call(re, Fe), console.warn("Unknown error:", V);
                }
            }(_e, O.current, p);
          }), C;
        }, []), X = (0, _.useCallback)(function() {
          p({ type: x.CLEAR_ERROR });
        }, []);
        return [H, k(k({}, E), { clearError: X })];
      }
      var ae = function() {
        return ae = Object.assign || function(b) {
          for (var d, m = 1, E = arguments.length; m < E; m++)
            for (var p in d = arguments[m])
              Object.prototype.hasOwnProperty.call(d, p) && (b[p] = d[p]);
          return b;
        }, ae.apply(this, arguments);
      };
      function Ye(b, d) {
        d === void 0 && (d = {});
        var m = Z(b, d), E = m[0], p = m[1];
        return [(0, _.useCallback)(function(N) {
          return E(ae(ae({}, N), { method: "DELETE" }));
        }, [E]), p];
      }
      var Te = function() {
        return Te = Object.assign || function(b) {
          for (var d, m = 1, E = arguments.length; m < E; m++)
            for (var p in d = arguments[m])
              Object.prototype.hasOwnProperty.call(d, p) && (b[p] = d[p]);
          return b;
        }, Te.apply(this, arguments);
      };
      function Me(b, d, m) {
        d === void 0 && (d = {}), m === void 0 && (m = {});
        var E = (0, _.useRef)(d), p = Z(b, m), N = p[0], O = p[1];
        return (0, _.useEffect)(function() {
          E.current = d;
        }, [d]), (0, _.useEffect)(function() {
          var H = N(E.current);
          return function() {
            H.abort();
          };
        }, [N]), Te({}, O);
      }
      var $e = function() {
        return $e = Object.assign || function(b) {
          for (var d, m = 1, E = arguments.length; m < E; m++)
            for (var p in d = arguments[m])
              Object.prototype.hasOwnProperty.call(d, p) && (b[p] = d[p]);
          return b;
        }, $e.apply(this, arguments);
      };
      function qt(b, d) {
        d === void 0 && (d = {});
        var m = Z(b, d), E = m[0], p = m[1];
        return [(0, _.useCallback)(function(N) {
          return E($e($e({}, N), { method: "GET" }));
        }, [E]), p];
      }
      var qe = function() {
        return qe = Object.assign || function(b) {
          for (var d, m = 1, E = arguments.length; m < E; m++)
            for (var p in d = arguments[m])
              Object.prototype.hasOwnProperty.call(d, p) && (b[p] = d[p]);
          return b;
        }, qe.apply(this, arguments);
      };
      function yt(b, d, m) {
        return Me(b, qe(qe({}, d), { method: "GET" }), m);
      }
      var z = function() {
        return z = Object.assign || function(b) {
          for (var d, m = 1, E = arguments.length; m < E; m++)
            for (var p in d = arguments[m])
              Object.prototype.hasOwnProperty.call(d, p) && (b[p] = d[p]);
          return b;
        }, z.apply(this, arguments);
      };
      function we(b, d) {
        d === void 0 && (d = {});
        var m = Z(b, d), E = m[0], p = m[1];
        return [(0, _.useCallback)(function(N) {
          return E(z(z({}, N), { method: "POST" }));
        }, [E]), p];
      }
      var fe = function() {
        return fe = Object.assign || function(b) {
          for (var d, m = 1, E = arguments.length; m < E; m++)
            for (var p in d = arguments[m])
              Object.prototype.hasOwnProperty.call(d, p) && (b[p] = d[p]);
          return b;
        }, fe.apply(this, arguments);
      };
      function Et(b, d) {
        d === void 0 && (d = {});
        var m = Z(b, d), E = m[0], p = m[1];
        return [(0, _.useCallback)(function(N) {
          return E(fe(fe({}, N), { method: "PUT" }));
        }, [E]), p];
      }
      function wt(b, d) {
        d === void 0 && (d = {});
        var m = Z(b, d), E = m[0], p = m[1];
        return [(0, _.useCallback)(function(N, O) {
          var H = new FormData();
          return H.append("blob", N), O != null && O.body && H.append("body", JSON.stringify(O.body)), E({ method: "POST", signal: O == null ? void 0 : O.signal, params: O == null ? void 0 : O.params, body: H });
        }, [E]), p];
      }
      const _t = y;
    })(), u;
  })());
})(yn);
var ii = yn.exports;
const si = /* @__PURE__ */ gn(ii);
var En = { exports: {} }, nr = {};
v.crypto && v.crypto.getRandomValues ? nr.randomBytes = function(e) {
  var t = new Uint8Array(e);
  return v.crypto.getRandomValues(t), t;
} : nr.randomBytes = function(e) {
  for (var t = new Array(e), r = 0; r < e; r++)
    t[r] = Math.floor(Math.random() * 256);
  return t;
};
var ai = nr, Hr = "abcdefghijklmnopqrstuvwxyz012345", Xe = {
  string: function(e) {
    for (var t = Hr.length, r = ai.randomBytes(e), n = [], o = 0; o < e; o++)
      n.push(Hr.substr(r[o] % t, 1));
    return n.join("");
  },
  number: function(e) {
    return Math.floor(Math.random() * e);
  },
  numberString: function(e) {
    var t = ("" + (e - 1)).length, r = new Array(t + 1).join("0");
    return (r + this.number(e)).slice(-t);
  }
};
(function(e) {
  var t = Xe, r = {}, n = !1, o = v.chrome && v.chrome.app && v.chrome.app.runtime;
  e.exports = {
    attachEvent: function(u, c) {
      typeof v.addEventListener < "u" ? v.addEventListener(u, c, !1) : v.document && v.attachEvent && (v.document.attachEvent("on" + u, c), v.attachEvent("on" + u, c));
    },
    detachEvent: function(u, c) {
      typeof v.addEventListener < "u" ? v.removeEventListener(u, c, !1) : v.document && v.detachEvent && (v.document.detachEvent("on" + u, c), v.detachEvent("on" + u, c));
    },
    unloadAdd: function(u) {
      if (o)
        return null;
      var c = t.string(8);
      return r[c] = u, n && setTimeout(this.triggerUnloadCallbacks, 0), c;
    },
    unloadDel: function(u) {
      u in r && delete r[u];
    },
    triggerUnloadCallbacks: function() {
      for (var u in r)
        r[u](), delete r[u];
    }
  };
  var a = function() {
    n || (n = !0, e.exports.triggerUnloadCallbacks());
  };
  o || e.exports.attachEvent("unload", a);
})(En);
var ke = En.exports, ui = function(t, r) {
  if (r = r.split(":")[0], t = +t, !t)
    return !1;
  switch (r) {
    case "http":
    case "ws":
      return t !== 80;
    case "https":
    case "wss":
      return t !== 443;
    case "ftp":
      return t !== 21;
    case "gopher":
      return t !== 70;
    case "file":
      return !1;
  }
  return t !== 0;
}, vr = {}, ci = Object.prototype.hasOwnProperty, li;
function Wr(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function Br(e) {
  try {
    return encodeURIComponent(e);
  } catch {
    return null;
  }
}
function fi(e) {
  for (var t = /([^=?#&]+)=?([^&]*)/g, r = {}, n; n = t.exec(e); ) {
    var o = Wr(n[1]), a = Wr(n[2]);
    o === null || a === null || o in r || (r[o] = a);
  }
  return r;
}
function hi(e, t) {
  t = t || "";
  var r = [], n, o;
  typeof t != "string" && (t = "?");
  for (o in e)
    if (ci.call(e, o)) {
      if (n = e[o], !n && (n === null || n === li || isNaN(n)) && (n = ""), o = Br(o), n = Br(n), o === null || n === null)
        continue;
      r.push(o + "=" + n);
    }
  return r.length ? t + r.join("&") : "";
}
vr.stringify = hi;
vr.parse = fi;
var wn = ui, Nt = vr, di = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, _n = /[\n\r\t]/g, pi = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, Cn = /:\d+$/, vi = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, mi = /^[a-zA-Z]:/;
function mr(e) {
  return (e || "").toString().replace(di, "");
}
var or = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(t, r) {
    return me(r.protocol) ? t.replace(/\\/g, "/") : t;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d*)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
], Xr = { hash: 1, query: 1 };
function Sn(e) {
  var t;
  typeof window < "u" ? t = window : typeof v < "u" ? t = v : typeof self < "u" ? t = self : t = {};
  var r = t.location || {};
  e = e || r;
  var n = {}, o = typeof e, a;
  if (e.protocol === "blob:")
    n = new ge(unescape(e.pathname), {});
  else if (o === "string") {
    n = new ge(e, {});
    for (a in Xr)
      delete n[a];
  } else if (o === "object") {
    for (a in e)
      a in Xr || (n[a] = e[a]);
    n.slashes === void 0 && (n.slashes = pi.test(e.href));
  }
  return n;
}
function me(e) {
  return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
}
function xn(e, t) {
  e = mr(e), e = e.replace(_n, ""), t = t || {};
  var r = vi.exec(e), n = r[1] ? r[1].toLowerCase() : "", o = !!r[2], a = !!r[3], u = 0, c;
  return o ? a ? (c = r[2] + r[3] + r[4], u = r[2].length + r[3].length) : (c = r[2] + r[4], u = r[2].length) : a ? (c = r[3] + r[4], u = r[3].length) : c = r[4], n === "file:" ? u >= 2 && (c = c.slice(2)) : me(n) ? c = r[4] : n ? o && (c = c.slice(2)) : u >= 2 && me(t.protocol) && (c = r[4]), {
    protocol: n,
    slashes: o || me(n),
    slashesCount: u,
    rest: c
  };
}
function bi(e, t) {
  if (e === "")
    return t;
  for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, o = r[n - 1], a = !1, u = 0; n--; )
    r[n] === "." ? r.splice(n, 1) : r[n] === ".." ? (r.splice(n, 1), u++) : u && (n === 0 && (a = !0), r.splice(n, 1), u--);
  return a && r.unshift(""), (o === "." || o === "..") && r.push(""), r.join("/");
}
function ge(e, t, r) {
  if (e = mr(e), e = e.replace(_n, ""), !(this instanceof ge))
    return new ge(e, t, r);
  var n, o, a, u, c, f, w = or.slice(), l = typeof t, s = this, y = 0;
  for (l !== "object" && l !== "string" && (r = t, t = null), r && typeof r != "function" && (r = Nt.parse), t = Sn(t), o = xn(e || "", t), n = !o.protocol && !o.slashes, s.slashes = o.slashes || n && t.slashes, s.protocol = o.protocol || t.protocol || "", e = o.rest, (o.protocol === "file:" && (o.slashesCount !== 2 || mi.test(e)) || !o.slashes && (o.protocol || o.slashesCount < 2 || !me(s.protocol))) && (w[3] = [/(.*)/, "pathname"]); y < w.length; y++) {
    if (u = w[y], typeof u == "function") {
      e = u(e, s);
      continue;
    }
    a = u[0], f = u[1], a !== a ? s[f] = e : typeof a == "string" ? (c = a === "@" ? e.lastIndexOf(a) : e.indexOf(a), ~c && (typeof u[2] == "number" ? (s[f] = e.slice(0, c), e = e.slice(c + u[2])) : (s[f] = e.slice(c), e = e.slice(0, c)))) : (c = a.exec(e)) && (s[f] = c[1], e = e.slice(0, c.index)), s[f] = s[f] || n && u[3] && t[f] || "", u[4] && (s[f] = s[f].toLowerCase());
  }
  r && (s.query = r(s.query)), n && t.slashes && s.pathname.charAt(0) !== "/" && (s.pathname !== "" || t.pathname !== "") && (s.pathname = bi(s.pathname, t.pathname)), s.pathname.charAt(0) !== "/" && me(s.protocol) && (s.pathname = "/" + s.pathname), wn(s.port, s.protocol) || (s.host = s.hostname, s.port = ""), s.username = s.password = "", s.auth && (c = s.auth.indexOf(":"), ~c ? (s.username = s.auth.slice(0, c), s.username = encodeURIComponent(decodeURIComponent(s.username)), s.password = s.auth.slice(c + 1), s.password = encodeURIComponent(decodeURIComponent(s.password))) : s.username = encodeURIComponent(decodeURIComponent(s.auth)), s.auth = s.password ? s.username + ":" + s.password : s.username), s.origin = s.protocol !== "file:" && me(s.protocol) && s.host ? s.protocol + "//" + s.host : "null", s.href = s.toString();
}
function gi(e, t, r) {
  var n = this;
  switch (e) {
    case "query":
      typeof t == "string" && t.length && (t = (r || Nt.parse)(t)), n[e] = t;
      break;
    case "port":
      n[e] = t, wn(t, n.protocol) ? t && (n.host = n.hostname + ":" + t) : (n.host = n.hostname, n[e] = "");
      break;
    case "hostname":
      n[e] = t, n.port && (t += ":" + n.port), n.host = t;
      break;
    case "host":
      n[e] = t, Cn.test(t) ? (t = t.split(":"), n.port = t.pop(), n.hostname = t.join(":")) : (n.hostname = t, n.port = "");
      break;
    case "protocol":
      n.protocol = t.toLowerCase(), n.slashes = !r;
      break;
    case "pathname":
    case "hash":
      if (t) {
        var o = e === "pathname" ? "/" : "#";
        n[e] = t.charAt(0) !== o ? o + t : t;
      } else
        n[e] = t;
      break;
    case "username":
    case "password":
      n[e] = encodeURIComponent(t);
      break;
    case "auth":
      var a = t.indexOf(":");
      ~a ? (n.username = t.slice(0, a), n.username = encodeURIComponent(decodeURIComponent(n.username)), n.password = t.slice(a + 1), n.password = encodeURIComponent(decodeURIComponent(n.password))) : n.username = encodeURIComponent(decodeURIComponent(t));
  }
  for (var u = 0; u < or.length; u++) {
    var c = or[u];
    c[4] && (n[c[1]] = n[c[1]].toLowerCase());
  }
  return n.auth = n.password ? n.username + ":" + n.password : n.username, n.origin = n.protocol !== "file:" && me(n.protocol) && n.host ? n.protocol + "//" + n.host : "null", n.href = n.toString(), n;
}
function yi(e) {
  (!e || typeof e != "function") && (e = Nt.stringify);
  var t, r = this, n = r.host, o = r.protocol;
  o && o.charAt(o.length - 1) !== ":" && (o += ":");
  var a = o + (r.protocol && r.slashes || me(r.protocol) ? "//" : "");
  return r.username ? (a += r.username, r.password && (a += ":" + r.password), a += "@") : r.password ? (a += ":" + r.password, a += "@") : r.protocol !== "file:" && me(r.protocol) && !n && r.pathname !== "/" && (a += "@"), (n[n.length - 1] === ":" || Cn.test(r.hostname) && !r.port) && (n += ":"), a += n + r.pathname, t = typeof r.query == "object" ? e(r.query) : r.query, t && (a += t.charAt(0) !== "?" ? "?" + t : t), r.hash && (a += r.hash), a;
}
ge.prototype = { set: gi, toString: yi };
ge.extractProtocol = xn;
ge.location = Sn;
ge.trimLeft = mr;
ge.qs = Nt;
var On = ge, xt = { exports: {} }, Vt, Jr;
function Ei() {
  if (Jr)
    return Vt;
  Jr = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, o = n * 7, a = n * 365.25;
  Vt = function(l, s) {
    s = s || {};
    var y = typeof l;
    if (y === "string" && l.length > 0)
      return u(l);
    if (y === "number" && isFinite(l))
      return s.long ? f(l) : c(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function u(l) {
    if (l = String(l), !(l.length > 100)) {
      var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (s) {
        var y = parseFloat(s[1]), x = (s[2] || "ms").toLowerCase();
        switch (x) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * a;
          case "weeks":
          case "week":
          case "w":
            return y * o;
          case "days":
          case "day":
          case "d":
            return y * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return y;
          default:
            return;
        }
      }
    }
  }
  function c(l) {
    var s = Math.abs(l);
    return s >= n ? Math.round(l / n) + "d" : s >= r ? Math.round(l / r) + "h" : s >= t ? Math.round(l / t) + "m" : s >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function f(l) {
    var s = Math.abs(l);
    return s >= n ? w(l, s, n, "day") : s >= r ? w(l, s, r, "hour") : s >= t ? w(l, s, t, "minute") : s >= e ? w(l, s, e, "second") : l + " ms";
  }
  function w(l, s, y, x) {
    var _ = s >= y * 1.5;
    return Math.round(l / y) + " " + x + (_ ? "s" : "");
  }
  return Vt;
}
var Gt, Vr;
function wi() {
  if (Vr)
    return Gt;
  Vr = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = w, n.disable = c, n.enable = u, n.enabled = f, n.humanize = Ei(), Object.keys(t).forEach(function(l) {
      n[l] = t[l];
    }), n.instances = [], n.names = [], n.skips = [], n.formatters = {};
    function r(l) {
      for (var s = 0, y = 0; y < l.length; y++)
        s = (s << 5) - s + l.charCodeAt(y), s |= 0;
      return n.colors[Math.abs(s) % n.colors.length];
    }
    n.selectColor = r;
    function n(l) {
      var s;
      function y() {
        if (y.enabled) {
          for (var x = arguments.length, _ = new Array(x), B = 0; B < x; B++)
            _[B] = arguments[B];
          var L = y, k = Number(/* @__PURE__ */ new Date()), I = k - (s || k);
          L.diff = I, L.prev = s, L.curr = k, s = k, _[0] = n.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
          var Q = 0;
          _[0] = _[0].replace(/%([a-zA-Z%])/g, function(ae, Ye) {
            if (ae === "%%")
              return ae;
            Q++;
            var Te = n.formatters[Ye];
            if (typeof Te == "function") {
              var Me = _[Q];
              ae = Te.call(L, Me), _.splice(Q, 1), Q--;
            }
            return ae;
          }), n.formatArgs.call(L, _);
          var Z = L.log || n.log;
          Z.apply(L, _);
        }
      }
      return y.namespace = l, y.enabled = n.enabled(l), y.useColors = n.useColors(), y.color = r(l), y.destroy = o, y.extend = a, typeof n.init == "function" && n.init(y), n.instances.push(y), y;
    }
    function o() {
      var l = n.instances.indexOf(this);
      return l !== -1 ? (n.instances.splice(l, 1), !0) : !1;
    }
    function a(l, s) {
      return n(this.namespace + (typeof s > "u" ? ":" : s) + l);
    }
    function u(l) {
      n.save(l), n.names = [], n.skips = [];
      var s, y = (typeof l == "string" ? l : "").split(/[\s,]+/), x = y.length;
      for (s = 0; s < x; s++)
        y[s] && (l = y[s].replace(/\*/g, ".*?"), l[0] === "-" ? n.skips.push(new RegExp("^" + l.substr(1) + "$")) : n.names.push(new RegExp("^" + l + "$")));
      for (s = 0; s < n.instances.length; s++) {
        var _ = n.instances[s];
        _.enabled = n.enabled(_.namespace);
      }
    }
    function c() {
      n.enable("");
    }
    function f(l) {
      if (l[l.length - 1] === "*")
        return !0;
      var s, y;
      for (s = 0, y = n.skips.length; s < y; s++)
        if (n.skips[s].test(l))
          return !1;
      for (s = 0, y = n.names.length; s < y; s++)
        if (n.names[s].test(l))
          return !0;
      return !1;
    }
    function w(l) {
      return l instanceof Error ? l.stack || l.message : l;
    }
    return n.enable(n.load()), n;
  }
  return Gt = e, Gt;
}
var Gr;
function q() {
  return Gr || (Gr = 1, function(e, t) {
    function r(l) {
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? r = function(y) {
        return typeof y;
      } : r = function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      }, r(l);
    }
    t.log = a, t.formatArgs = o, t.save = u, t.load = c, t.useColors = n, t.storage = f(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
      return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function o(l) {
      if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !!this.useColors) {
        var s = "color: " + this.color;
        l.splice(1, 0, s, "color: inherit");
        var y = 0, x = 0;
        l[0].replace(/%[a-zA-Z%]/g, function(_) {
          _ !== "%%" && (y++, _ === "%c" && (x = y));
        }), l.splice(x, 0, s);
      }
    }
    function a() {
      var l;
      return (typeof console > "u" ? "undefined" : r(console)) === "object" && console.log && (l = console).log.apply(l, arguments);
    }
    function u(l) {
      try {
        l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function c() {
      var l;
      try {
        l = t.storage.getItem("debug");
      } catch {
      }
      return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
    }
    function f() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = wi()(t);
    var w = e.exports.formatters;
    w.j = function(l) {
      try {
        return JSON.stringify(l);
      } catch (s) {
        return "[UnexpectedJSONParseError]: " + s.message;
      }
    };
  }(xt, xt.exports)), xt.exports;
}
var _i = On, Rn = function() {
};
process.env.NODE_ENV !== "production" && (Rn = q()("sockjs-client:utils:url"));
var se = {
  getOrigin: function(e) {
    if (!e)
      return null;
    var t = new _i(e);
    if (t.protocol === "file:")
      return null;
    var r = t.port;
    return r || (r = t.protocol === "https:" ? "443" : "80"), t.protocol + "//" + t.hostname + ":" + r;
  },
  isOriginEqual: function(e, t) {
    var r = this.getOrigin(e) === this.getOrigin(t);
    return Rn("same", e, t, r), r;
  },
  isSchemeEqual: function(e, t) {
    return e.split(":")[0] === t.split(":")[0];
  },
  addPath: function(e, t) {
    var r = e.split("?");
    return r[0] + t + (r[1] ? "?" + r[1] : "");
  },
  addQuery: function(e, t) {
    return e + (e.indexOf("?") === -1 ? "?" + t : "&" + t);
  },
  isLoopbackAddr: function(e) {
    return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) || /^\[::1\]$/.test(e);
  }
}, ir = { exports: {} };
typeof Object.create == "function" ? ir.exports = function(t, r) {
  r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : ir.exports = function(t, r) {
  if (r) {
    t.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
  }
};
var F = ir.exports, J = {};
function Pt() {
  this._listeners = {};
}
Pt.prototype.addEventListener = function(e, t) {
  e in this._listeners || (this._listeners[e] = []);
  var r = this._listeners[e];
  r.indexOf(t) === -1 && (r = r.concat([t])), this._listeners[e] = r;
};
Pt.prototype.removeEventListener = function(e, t) {
  var r = this._listeners[e];
  if (r) {
    var n = r.indexOf(t);
    if (n !== -1) {
      r.length > 1 ? this._listeners[e] = r.slice(0, n).concat(r.slice(n + 1)) : delete this._listeners[e];
      return;
    }
  }
};
Pt.prototype.dispatchEvent = function() {
  var e = arguments[0], t = e.type, r = arguments.length === 1 ? [e] : Array.apply(null, arguments);
  if (this["on" + t] && this["on" + t].apply(this, r), t in this._listeners)
    for (var n = this._listeners[t], o = 0; o < n.length; o++)
      n[o].apply(this, r);
};
var Tn = Pt, Ci = F, It = Tn;
function je() {
  It.call(this);
}
Ci(je, It);
je.prototype.removeAllListeners = function(e) {
  e ? delete this._listeners[e] : this._listeners = {};
};
je.prototype.once = function(e, t) {
  var r = this, n = !1;
  function o() {
    r.removeListener(e, o), n || (n = !0, t.apply(this, arguments));
  }
  this.on(e, o);
};
je.prototype.emit = function() {
  var e = arguments[0], t = this._listeners[e];
  if (t) {
    for (var r = arguments.length, n = new Array(r - 1), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    for (var a = 0; a < t.length; a++)
      t[a].apply(this, n);
  }
};
je.prototype.on = je.prototype.addListener = It.prototype.addEventListener;
je.prototype.removeListener = It.prototype.removeEventListener;
J.EventEmitter = je;
var sr = { exports: {} }, Yr = v.WebSocket || v.MozWebSocket;
Yr ? sr.exports = function(t) {
  return new Yr(t);
} : sr.exports = void 0;
var Si = sr.exports, jn = ke, xi = se, Oi = F, kn = J.EventEmitter, $n = Si, ve = function() {
};
process.env.NODE_ENV !== "production" && (ve = q()("sockjs-client:websocket"));
function Re(e, t, r) {
  if (!Re.enabled())
    throw new Error("Transport created when disabled");
  kn.call(this), ve("constructor", e);
  var n = this, o = xi.addPath(e, "/websocket");
  o.slice(0, 5) === "https" ? o = "wss" + o.slice(5) : o = "ws" + o.slice(4), this.url = o, this.ws = new $n(this.url, [], r), this.ws.onmessage = function(a) {
    ve("message event", a.data), n.emit("message", a.data);
  }, this.unloadRef = jn.unloadAdd(function() {
    ve("unload"), n.ws.close();
  }), this.ws.onclose = function(a) {
    ve("close event", a.code, a.reason), n.emit("close", a.code, a.reason), n._cleanup();
  }, this.ws.onerror = function(a) {
    ve("error event", a), n.emit("close", 1006, "WebSocket connection broken"), n._cleanup();
  };
}
Oi(Re, kn);
Re.prototype.send = function(e) {
  var t = "[" + e + "]";
  ve("send", t), this.ws.send(t);
};
Re.prototype.close = function() {
  ve("close");
  var e = this.ws;
  this._cleanup(), e && e.close();
};
Re.prototype._cleanup = function() {
  ve("_cleanup");
  var e = this.ws;
  e && (e.onmessage = e.onclose = e.onerror = null), jn.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners();
};
Re.enabled = function() {
  return ve("enabled"), !!$n;
};
Re.transportName = "websocket";
Re.roundTrips = 2;
var Ri = Re, Ti = F, Fn = J.EventEmitter, be = function() {
};
process.env.NODE_ENV !== "production" && (be = q()("sockjs-client:buffered-sender"));
function Ae(e, t) {
  be(e), Fn.call(this), this.sendBuffer = [], this.sender = t, this.url = e;
}
Ti(Ae, Fn);
Ae.prototype.send = function(e) {
  be("send", e), this.sendBuffer.push(e), this.sendStop || this.sendSchedule();
};
Ae.prototype.sendScheduleWait = function() {
  be("sendScheduleWait");
  var e = this, t;
  this.sendStop = function() {
    be("sendStop"), e.sendStop = null, clearTimeout(t);
  }, t = setTimeout(function() {
    be("timeout"), e.sendStop = null, e.sendSchedule();
  }, 25);
};
Ae.prototype.sendSchedule = function() {
  be("sendSchedule", this.sendBuffer.length);
  var e = this;
  if (this.sendBuffer.length > 0) {
    var t = "[" + this.sendBuffer.join(",") + "]";
    this.sendStop = this.sender(this.url, t, function(r) {
      e.sendStop = null, r ? (be("error", r), e.emit("close", r.code || 1006, "Sending error: " + r), e.close()) : e.sendScheduleWait();
    }), this.sendBuffer = [];
  }
};
Ae.prototype._cleanup = function() {
  be("_cleanup"), this.removeAllListeners();
};
Ae.prototype.close = function() {
  be("close"), this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null);
};
var ji = Ae, ki = F, Nn = J.EventEmitter, Be = function() {
};
process.env.NODE_ENV !== "production" && (Be = q()("sockjs-client:polling"));
function At(e, t, r) {
  Be(t), Nn.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = r, this._scheduleReceiver();
}
ki(At, Nn);
At.prototype._scheduleReceiver = function() {
  Be("_scheduleReceiver");
  var e = this, t = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
  t.on("message", function(r) {
    Be("message", r), e.emit("message", r);
  }), t.once("close", function(r, n) {
    Be("close", r, n, e.pollIsClosing), e.poll = t = null, e.pollIsClosing || (n === "network" ? e._scheduleReceiver() : (e.emit("close", r || 1006, n), e.removeAllListeners()));
  });
};
At.prototype.abort = function() {
  Be("abort"), this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort();
};
var $i = At, Fi = F, Ni = se, br = ji, Pi = $i, rt = function() {
};
process.env.NODE_ENV !== "production" && (rt = q()("sockjs-client:sender-receiver"));
function gr(e, t, r, n, o) {
  var a = Ni.addPath(e, t);
  rt(a);
  var u = this;
  br.call(this, e, r), this.poll = new Pi(n, a, o), this.poll.on("message", function(c) {
    rt("poll message", c), u.emit("message", c);
  }), this.poll.once("close", function(c, f) {
    rt("poll close", c, f), u.poll = null, u.emit("close", c, f), u.close();
  });
}
Fi(gr, br);
gr.prototype.close = function() {
  br.prototype.close.call(this), rt("close"), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null);
};
var Pn = gr, Ii = F, Ai = se, In = Pn, kt = function() {
};
process.env.NODE_ENV !== "production" && (kt = q()("sockjs-client:ajax-based"));
function Li(e) {
  return function(t, r, n) {
    kt("create ajax sender", t, r);
    var o = {};
    typeof r == "string" && (o.headers = { "Content-type": "text/plain" });
    var a = Ai.addPath(t, "/xhr_send"), u = new e("POST", a, r, o);
    return u.once("finish", function(c) {
      if (kt("finish", c), u = null, c !== 200 && c !== 204)
        return n(new Error("http status " + c));
      n();
    }), function() {
      kt("abort"), u.close(), u = null;
      var c = new Error("Aborted");
      c.code = 1e3, n(c);
    };
  };
}
function An(e, t, r, n) {
  In.call(this, e, t, Li(n), r, n);
}
Ii(An, In);
var Je = An, Di = F, Ln = J.EventEmitter, xe = function() {
};
process.env.NODE_ENV !== "production" && (xe = q()("sockjs-client:receiver:xhr"));
function ut(e, t) {
  xe(e), Ln.call(this);
  var r = this;
  this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function(n, o) {
    xe("finish", n, o), r._chunkHandler(n, o), r.xo = null;
    var a = n === 200 ? "network" : "permanent";
    xe("close", a), r.emit("close", null, a), r._cleanup();
  });
}
Di(ut, Ln);
ut.prototype._chunkHandler = function(e, t) {
  if (xe("_chunkHandler", e), !(e !== 200 || !t))
    for (var r = -1; ; this.bufferPosition += r + 1) {
      var n = t.slice(this.bufferPosition);
      if (r = n.indexOf(`
`), r === -1)
        break;
      var o = n.slice(0, r);
      o && (xe("message", o), this.emit("message", o));
    }
};
ut.prototype._cleanup = function() {
  xe("_cleanup"), this.removeAllListeners();
};
ut.prototype.abort = function() {
  xe("abort"), this.xo && (this.xo.close(), xe("close"), this.emit("close", null, "user"), this.xo = null), this._cleanup();
};
var Lt = ut, Dn = J.EventEmitter, Ui = F, Un = ke, Mi = se, it = v.XMLHttpRequest, Y = function() {
};
process.env.NODE_ENV !== "production" && (Y = q()("sockjs-client:browser:xhr"));
function ye(e, t, r, n) {
  Y(e, t);
  var o = this;
  Dn.call(this), setTimeout(function() {
    o._start(e, t, r, n);
  }, 0);
}
Ui(ye, Dn);
ye.prototype._start = function(e, t, r, n) {
  var o = this;
  try {
    this.xhr = new it();
  } catch {
  }
  if (!this.xhr) {
    Y("no xhr"), this.emit("finish", 0, "no xhr support"), this._cleanup();
    return;
  }
  t = Mi.addQuery(t, "t=" + +/* @__PURE__ */ new Date()), this.unloadRef = Un.unloadAdd(function() {
    Y("unload cleanup"), o._cleanup(!0);
  });
  try {
    this.xhr.open(e, t, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
      Y("xhr timeout"), o.emit("finish", 0, ""), o._cleanup(!1);
    });
  } catch (u) {
    Y("exception", u), this.emit("finish", 0, ""), this._cleanup(!1);
    return;
  }
  if ((!n || !n.noCredentials) && ye.supportsCORS && (Y("withCredentials"), this.xhr.withCredentials = !0), n && n.headers)
    for (var a in n.headers)
      this.xhr.setRequestHeader(a, n.headers[a]);
  this.xhr.onreadystatechange = function() {
    if (o.xhr) {
      var u = o.xhr, c, f;
      switch (Y("readyState", u.readyState), u.readyState) {
        case 3:
          try {
            f = u.status, c = u.responseText;
          } catch {
          }
          Y("status", f), f === 1223 && (f = 204), f === 200 && c && c.length > 0 && (Y("chunk"), o.emit("chunk", f, c));
          break;
        case 4:
          f = u.status, Y("status", f), f === 1223 && (f = 204), (f === 12005 || f === 12029) && (f = 0), Y("finish", f, u.responseText), o.emit("finish", f, u.responseText), o._cleanup(!1);
          break;
      }
    }
  };
  try {
    o.xhr.send(r);
  } catch {
    o.emit("finish", 0, ""), o._cleanup(!1);
  }
};
ye.prototype._cleanup = function(e) {
  if (Y("cleanup"), !!this.xhr) {
    if (this.removeAllListeners(), Un.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {
    }, this.xhr.ontimeout && (this.xhr.ontimeout = null), e)
      try {
        this.xhr.abort();
      } catch {
      }
    this.unloadRef = this.xhr = null;
  }
};
ye.prototype.close = function() {
  Y("close"), this._cleanup(!0);
};
ye.enabled = !!it;
var zr = ["Active"].concat("Object").join("X");
!ye.enabled && zr in v && (Y("overriding xmlhttprequest"), it = function() {
  try {
    return new v[zr]("Microsoft.XMLHTTP");
  } catch {
    return null;
  }
}, ye.enabled = !!new it());
var Mn = !1;
try {
  Mn = "withCredentials" in new it();
} catch {
}
ye.supportsCORS = Mn;
var qn = ye, qi = F, Ft = qn;
function yr(e, t, r, n) {
  Ft.call(this, e, t, r, n);
}
qi(yr, Ft);
yr.enabled = Ft.enabled && Ft.supportsCORS;
var Dt = yr, Hi = F, Er = qn;
function wr(e, t, r) {
  Er.call(this, e, t, r, {
    noCredentials: !0
  });
}
Hi(wr, Er);
wr.enabled = Er.enabled;
var ct = wr, lt = {
  isOpera: function() {
    return v.navigator && /opera/i.test(v.navigator.userAgent);
  },
  isKonqueror: function() {
    return v.navigator && /konqueror/i.test(v.navigator.userAgent);
  },
  hasDomain: function() {
    if (!v.document)
      return !0;
    try {
      return !!v.document.domain;
    } catch {
      return !1;
    }
  }
}, Wi = F, Hn = Je, Bi = Lt, ar = Dt, Xi = ct, Ji = lt;
function Ve(e) {
  if (!Xi.enabled && !ar.enabled)
    throw new Error("Transport created when disabled");
  Hn.call(this, e, "/xhr_streaming", Bi, ar);
}
Wi(Ve, Hn);
Ve.enabled = function(e) {
  return e.nullOrigin || Ji.isOpera() ? !1 : ar.enabled;
};
Ve.transportName = "xhr-streaming";
Ve.roundTrips = 2;
Ve.needBody = !!v.document;
var Vi = Ve, Wn = J.EventEmitter, Gi = F, Bn = ke, Yi = lt, zi = se, Se = function() {
};
process.env.NODE_ENV !== "production" && (Se = q()("sockjs-client:sender:xdr"));
function Le(e, t, r) {
  Se(e, t);
  var n = this;
  Wn.call(this), setTimeout(function() {
    n._start(e, t, r);
  }, 0);
}
Gi(Le, Wn);
Le.prototype._start = function(e, t, r) {
  Se("_start");
  var n = this, o = new v.XDomainRequest();
  t = zi.addQuery(t, "t=" + +/* @__PURE__ */ new Date()), o.onerror = function() {
    Se("onerror"), n._error();
  }, o.ontimeout = function() {
    Se("ontimeout"), n._error();
  }, o.onprogress = function() {
    Se("progress", o.responseText), n.emit("chunk", 200, o.responseText);
  }, o.onload = function() {
    Se("load"), n.emit("finish", 200, o.responseText), n._cleanup(!1);
  }, this.xdr = o, this.unloadRef = Bn.unloadAdd(function() {
    n._cleanup(!0);
  });
  try {
    this.xdr.open(e, t), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(r);
  } catch {
    this._error();
  }
};
Le.prototype._error = function() {
  this.emit("finish", 0, ""), this._cleanup(!1);
};
Le.prototype._cleanup = function(e) {
  if (Se("cleanup", e), !!this.xdr) {
    if (this.removeAllListeners(), Bn.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e)
      try {
        this.xdr.abort();
      } catch {
      }
    this.unloadRef = this.xdr = null;
  }
};
Le.prototype.close = function() {
  Se("close"), this._cleanup(!0);
};
Le.enabled = !!(v.XDomainRequest && Yi.hasDomain());
var _r = Le, Ki = F, Xn = Je, Qi = Lt, ur = _r;
function ft(e) {
  if (!ur.enabled)
    throw new Error("Transport created when disabled");
  Xn.call(this, e, "/xhr_streaming", Qi, ur);
}
Ki(ft, Xn);
ft.enabled = function(e) {
  return e.cookie_needed || e.nullOrigin ? !1 : ur.enabled && e.sameScheme;
};
ft.transportName = "xdr-streaming";
ft.roundTrips = 2;
var Jn = ft, Vn = v.EventSource, Zi = F, Gn = J.EventEmitter, es = Vn, Pe = function() {
};
process.env.NODE_ENV !== "production" && (Pe = q()("sockjs-client:receiver:eventsource"));
function ht(e) {
  Pe(e), Gn.call(this);
  var t = this, r = this.es = new es(e);
  r.onmessage = function(n) {
    Pe("message", n.data), t.emit("message", decodeURI(n.data));
  }, r.onerror = function(n) {
    Pe("error", r.readyState, n);
    var o = r.readyState !== 2 ? "network" : "permanent";
    t._cleanup(), t._close(o);
  };
}
Zi(ht, Gn);
ht.prototype.abort = function() {
  Pe("abort"), this._cleanup(), this._close("user");
};
ht.prototype._cleanup = function() {
  Pe("cleanup");
  var e = this.es;
  e && (e.onmessage = e.onerror = null, e.close(), this.es = null);
};
ht.prototype._close = function(e) {
  Pe("close", e);
  var t = this;
  setTimeout(function() {
    t.emit("close", null, e), t.removeAllListeners();
  }, 200);
};
var ts = ht, rs = F, Yn = Je, ns = ts, os = Dt, is = Vn;
function Ge(e) {
  if (!Ge.enabled())
    throw new Error("Transport created when disabled");
  Yn.call(this, e, "/eventsource", ns, os);
}
rs(Ge, Yn);
Ge.enabled = function() {
  return !!is;
};
Ge.transportName = "eventsource";
Ge.roundTrips = 2;
var Kr = Ge, Yt, Qr;
function zn() {
  return Qr || (Qr = 1, Yt = "1.6.1"), Yt;
}
var Kn = { exports: {} };
(function(e) {
  var t = ke, r = lt, n = function() {
  };
  process.env.NODE_ENV !== "production" && (n = q()("sockjs-client:utils:iframe")), e.exports = {
    WPrefix: "_jp",
    currentWindowId: null,
    polluteGlobalNamespace: function() {
      e.exports.WPrefix in v || (v[e.exports.WPrefix] = {});
    },
    postMessage: function(o, a) {
      v.parent !== v ? v.parent.postMessage(JSON.stringify({
        windowId: e.exports.currentWindowId,
        type: o,
        data: a || ""
      }), "*") : n("Cannot postMessage, no parent window.", o, a);
    },
    createIframe: function(o, a) {
      var u = v.document.createElement("iframe"), c, f, w = function() {
        n("unattach"), clearTimeout(c);
        try {
          u.onload = null;
        } catch {
        }
        u.onerror = null;
      }, l = function() {
        n("cleanup"), u && (w(), setTimeout(function() {
          u && u.parentNode.removeChild(u), u = null;
        }, 0), t.unloadDel(f));
      }, s = function(x) {
        n("onerror", x), u && (l(), a(x));
      }, y = function(x, _) {
        n("post", x, _), setTimeout(function() {
          try {
            u && u.contentWindow && u.contentWindow.postMessage(x, _);
          } catch {
          }
        }, 0);
      };
      return u.src = o, u.style.display = "none", u.style.position = "absolute", u.onerror = function() {
        s("onerror");
      }, u.onload = function() {
        n("onload"), clearTimeout(c), c = setTimeout(function() {
          s("onload timeout");
        }, 2e3);
      }, v.document.body.appendChild(u), c = setTimeout(function() {
        s("timeout");
      }, 15e3), f = t.unloadAdd(l), {
        post: y,
        cleanup: l,
        loaded: w
      };
    },
    createHtmlfile: function(o, a) {
      var u = ["Active"].concat("Object").join("X"), c = new v[u]("htmlfile"), f, w, l, s = function() {
        clearTimeout(f), l.onerror = null;
      }, y = function() {
        c && (s(), t.unloadDel(w), l.parentNode.removeChild(l), l = c = null, CollectGarbage());
      }, x = function(L) {
        n("onerror", L), c && (y(), a(L));
      }, _ = function(L, k) {
        try {
          setTimeout(function() {
            l && l.contentWindow && l.contentWindow.postMessage(L, k);
          }, 0);
        } catch {
        }
      };
      c.open(), c.write('<html><script>document.domain="' + v.document.domain + '";<\/script></html>'), c.close(), c.parentWindow[e.exports.WPrefix] = v[e.exports.WPrefix];
      var B = c.createElement("div");
      return c.body.appendChild(B), l = c.createElement("iframe"), B.appendChild(l), l.src = o, l.onerror = function() {
        x("onerror");
      }, f = setTimeout(function() {
        x("timeout");
      }, 15e3), w = t.unloadAdd(y), {
        post: _,
        cleanup: y,
        loaded: s
      };
    }
  }, e.exports.iframeEnabled = !1, v.document && (e.exports.iframeEnabled = (typeof v.postMessage == "function" || typeof v.postMessage == "object") && !r.isKonqueror());
})(Kn);
var dt = Kn.exports, ss = F, Qn = J.EventEmitter, as = zn(), cr = se, Zn = dt, eo = ke, us = Xe, ce = function() {
};
process.env.NODE_ENV !== "production" && (ce = q()("sockjs-client:transport:iframe"));
function Ee(e, t, r) {
  if (!Ee.enabled())
    throw new Error("Transport created when disabled");
  Qn.call(this);
  var n = this;
  this.origin = cr.getOrigin(r), this.baseUrl = r, this.transUrl = t, this.transport = e, this.windowId = us.string(8);
  var o = cr.addPath(r, "/iframe.html") + "#" + this.windowId;
  ce(e, t, o), this.iframeObj = Zn.createIframe(o, function(a) {
    ce("err callback"), n.emit("close", 1006, "Unable to load an iframe (" + a + ")"), n.close();
  }), this.onmessageCallback = this._message.bind(this), eo.attachEvent("message", this.onmessageCallback);
}
ss(Ee, Qn);
Ee.prototype.close = function() {
  if (ce("close"), this.removeAllListeners(), this.iframeObj) {
    eo.detachEvent("message", this.onmessageCallback);
    try {
      this.postMessage("c");
    } catch {
    }
    this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null;
  }
};
Ee.prototype._message = function(e) {
  if (ce("message", e.data), !cr.isOriginEqual(e.origin, this.origin)) {
    ce("not same origin", e.origin, this.origin);
    return;
  }
  var t;
  try {
    t = JSON.parse(e.data);
  } catch {
    ce("bad json", e.data);
    return;
  }
  if (t.windowId !== this.windowId) {
    ce("mismatched window id", t.windowId, this.windowId);
    return;
  }
  switch (t.type) {
    case "s":
      this.iframeObj.loaded(), this.postMessage("s", JSON.stringify([
        as,
        this.transport,
        this.transUrl,
        this.baseUrl
      ]));
      break;
    case "t":
      this.emit("message", t.data);
      break;
    case "c":
      var r;
      try {
        r = JSON.parse(t.data);
      } catch {
        ce("bad json", t.data);
        return;
      }
      this.emit("close", r[0], r[1]), this.close();
      break;
  }
};
Ee.prototype.postMessage = function(e, t) {
  ce("postMessage", e, t), this.iframeObj.post(JSON.stringify({
    windowId: this.windowId,
    type: e,
    data: t || ""
  }), this.origin);
};
Ee.prototype.send = function(e) {
  ce("send", e), this.postMessage("m", e);
};
Ee.enabled = function() {
  return Zn.iframeEnabled;
};
Ee.transportName = "iframe";
Ee.roundTrips = 2;
var to = Ee, Cr = {
  isObject: function(e) {
    var t = typeof e;
    return t === "function" || t === "object" && !!e;
  },
  extend: function(e) {
    if (!this.isObject(e))
      return e;
    for (var t, r, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }
}, cs = F, Ot = to, ls = Cr, zt = function(e) {
  function t(r, n) {
    Ot.call(this, e.transportName, r, n);
  }
  return cs(t, Ot), t.enabled = function(r, n) {
    if (!v.document)
      return !1;
    var o = ls.extend({}, n);
    return o.sameOrigin = !0, e.enabled(o) && Ot.enabled();
  }, t.transportName = "iframe-" + e.transportName, t.needBody = !0, t.roundTrips = Ot.roundTrips + e.roundTrips - 1, t.facadeTransport = e, t;
}, fs = F, Ne = dt, hs = se, ro = J.EventEmitter, ds = Xe, pe = function() {
};
process.env.NODE_ENV !== "production" && (pe = q()("sockjs-client:receiver:htmlfile"));
function le(e) {
  pe(e), ro.call(this);
  var t = this;
  Ne.polluteGlobalNamespace(), this.id = "a" + ds.string(6), e = hs.addQuery(e, "c=" + decodeURIComponent(Ne.WPrefix + "." + this.id)), pe("using htmlfile", le.htmlfileEnabled);
  var r = le.htmlfileEnabled ? Ne.createHtmlfile : Ne.createIframe;
  v[Ne.WPrefix][this.id] = {
    start: function() {
      pe("start"), t.iframeObj.loaded();
    },
    message: function(n) {
      pe("message", n), t.emit("message", n);
    },
    stop: function() {
      pe("stop"), t._cleanup(), t._close("network");
    }
  }, this.iframeObj = r(e, function() {
    pe("callback"), t._cleanup(), t._close("permanent");
  });
}
fs(le, ro);
le.prototype.abort = function() {
  pe("abort"), this._cleanup(), this._close("user");
};
le.prototype._cleanup = function() {
  pe("_cleanup"), this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete v[Ne.WPrefix][this.id];
};
le.prototype._close = function(e) {
  pe("_close", e), this.emit("close", null, e), this.removeAllListeners();
};
le.htmlfileEnabled = !1;
var Zr = ["Active"].concat("Object").join("X");
if (Zr in v)
  try {
    le.htmlfileEnabled = !!new v[Zr]("htmlfile");
  } catch {
  }
le.enabled = le.htmlfileEnabled || Ne.iframeEnabled;
var ps = le, vs = F, lr = ps, ms = ct, no = Je;
function pt(e) {
  if (!lr.enabled)
    throw new Error("Transport created when disabled");
  no.call(this, e, "/htmlfile", lr, ms);
}
vs(pt, no);
pt.enabled = function(e) {
  return lr.enabled && e.sameOrigin;
};
pt.transportName = "htmlfile";
pt.roundTrips = 2;
var en = pt, bs = F, oo = Je, gs = Lt, fr = Dt, io = ct;
function vt(e) {
  if (!io.enabled && !fr.enabled)
    throw new Error("Transport created when disabled");
  oo.call(this, e, "/xhr", gs, fr);
}
bs(vt, oo);
vt.enabled = function(e) {
  return e.nullOrigin ? !1 : io.enabled && e.sameOrigin ? !0 : fr.enabled;
};
vt.transportName = "xhr-polling";
vt.roundTrips = 2;
var tn = vt, ys = F, so = Je, Es = Jn, ws = Lt, rn = _r;
function mt(e) {
  if (!rn.enabled)
    throw new Error("Transport created when disabled");
  so.call(this, e, "/xhr", ws, rn);
}
ys(mt, so);
mt.enabled = Es.enabled;
mt.transportName = "xdr-polling";
mt.roundTrips = 2;
var _s = mt, nt = dt, ao = Xe, Cs = lt, Ss = se, xs = F, uo = J.EventEmitter, oe = function() {
};
process.env.NODE_ENV !== "production" && (oe = q()("sockjs-client:receiver:jsonp"));
function ie(e) {
  oe(e);
  var t = this;
  uo.call(this), nt.polluteGlobalNamespace(), this.id = "a" + ao.string(6);
  var r = Ss.addQuery(e, "c=" + encodeURIComponent(nt.WPrefix + "." + this.id));
  v[nt.WPrefix][this.id] = this._callback.bind(this), this._createScript(r), this.timeoutId = setTimeout(function() {
    oe("timeout"), t._abort(new Error("JSONP script loaded abnormally (timeout)"));
  }, ie.timeout);
}
xs(ie, uo);
ie.prototype.abort = function() {
  if (oe("abort"), v[nt.WPrefix][this.id]) {
    var e = new Error("JSONP user aborted read");
    e.code = 1e3, this._abort(e);
  }
};
ie.timeout = 35e3;
ie.scriptErrorTimeout = 1e3;
ie.prototype._callback = function(e) {
  oe("_callback", e), this._cleanup(), !this.aborting && (e && (oe("message", e), this.emit("message", e)), this.emit("close", null, "network"), this.removeAllListeners());
};
ie.prototype._abort = function(e) {
  oe("_abort", e), this._cleanup(), this.aborting = !0, this.emit("close", e.code, e.message), this.removeAllListeners();
};
ie.prototype._cleanup = function() {
  if (oe("_cleanup"), clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
    var e = this.script;
    e.parentNode.removeChild(e), e.onreadystatechange = e.onerror = e.onload = e.onclick = null, this.script = null;
  }
  delete v[nt.WPrefix][this.id];
};
ie.prototype._scriptError = function() {
  oe("_scriptError");
  var e = this;
  this.errorTimer || (this.errorTimer = setTimeout(function() {
    e.loadedOkay || e._abort(new Error("JSONP script loaded abnormally (onerror)"));
  }, ie.scriptErrorTimeout));
};
ie.prototype._createScript = function(e) {
  oe("_createScript", e);
  var t = this, r = this.script = v.document.createElement("script"), n;
  if (r.id = "a" + ao.string(8), r.src = e, r.type = "text/javascript", r.charset = "UTF-8", r.onerror = this._scriptError.bind(this), r.onload = function() {
    oe("onload"), t._abort(new Error("JSONP script loaded abnormally (onload)"));
  }, r.onreadystatechange = function() {
    if (oe("onreadystatechange", r.readyState), /loaded|closed/.test(r.readyState)) {
      if (r && r.htmlFor && r.onclick) {
        t.loadedOkay = !0;
        try {
          r.onclick();
        } catch {
        }
      }
      r && t._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"));
    }
  }, typeof r.async > "u" && v.document.attachEvent)
    if (Cs.isOpera())
      n = this.script2 = v.document.createElement("script"), n.text = "try{var a = document.getElementById('" + r.id + "'); if(a)a.onerror();}catch(x){};", r.async = n.async = !1;
    else {
      try {
        r.htmlFor = r.id, r.event = "onclick";
      } catch {
      }
      r.async = !0;
    }
  typeof r.async < "u" && (r.async = !0);
  var o = v.document.getElementsByTagName("head")[0];
  o.insertBefore(r, o.firstChild), n && o.insertBefore(n, o.firstChild);
};
var Os = ie, Rs = Xe, nn = se, de = function() {
};
process.env.NODE_ENV !== "production" && (de = q()("sockjs-client:sender:jsonp"));
var te, ot;
function Ts(e) {
  de("createIframe", e);
  try {
    return v.document.createElement('<iframe name="' + e + '">');
  } catch {
    var t = v.document.createElement("iframe");
    return t.name = e, t;
  }
}
function js() {
  de("createForm"), te = v.document.createElement("form"), te.style.display = "none", te.style.position = "absolute", te.method = "POST", te.enctype = "application/x-www-form-urlencoded", te.acceptCharset = "UTF-8", ot = v.document.createElement("textarea"), ot.name = "d", te.appendChild(ot), v.document.body.appendChild(te);
}
var ks = function(e, t, r) {
  de(e, t), te || js();
  var n = "a" + Rs.string(8);
  te.target = n, te.action = nn.addQuery(nn.addPath(e, "/jsonp_send"), "i=" + n);
  var o = Ts(n);
  o.id = n, o.style.display = "none", te.appendChild(o);
  try {
    ot.value = t;
  } catch {
  }
  te.submit();
  var a = function(u) {
    de("completed", n, u), o.onerror && (o.onreadystatechange = o.onerror = o.onload = null, setTimeout(function() {
      de("cleaning up", n), o.parentNode.removeChild(o), o = null;
    }, 500), ot.value = "", r(u));
  };
  return o.onerror = function() {
    de("onerror", n), a();
  }, o.onload = function() {
    de("onload", n), a();
  }, o.onreadystatechange = function(u) {
    de("onreadystatechange", n, o.readyState, u), o.readyState === "complete" && a();
  }, function() {
    de("aborted", n), a(new Error("Aborted"));
  };
}, $s = F, co = Pn, Fs = Os, Ns = ks;
function De(e) {
  if (!De.enabled())
    throw new Error("Transport created when disabled");
  co.call(this, e, "/jsonp", Ns, Fs);
}
$s(De, co);
De.enabled = function() {
  return !!v.document;
};
De.transportName = "jsonp-polling";
De.roundTrips = 1;
De.needBody = !0;
var Ps = De, Is = [
  // streaming transports
  Ri,
  Vi,
  Jn,
  Kr,
  zt(Kr),
  en,
  zt(en),
  tn,
  _s,
  zt(tn),
  Ps
], st = Array.prototype, Sr = Object.prototype, As = Function.prototype, at = String.prototype, Kt = st.slice, xr = Sr.toString, lo = function(e) {
  return Sr.toString.call(e) === "[object Function]";
}, Ls = function(t) {
  return xr.call(t) === "[object Array]";
}, fo = function(t) {
  return xr.call(t) === "[object String]";
}, Ds = Object.defineProperty && function() {
  try {
    return Object.defineProperty({}, "x", {}), !0;
  } catch {
    return !1;
  }
}(), hr;
Ds ? hr = function(e, t, r, n) {
  !n && t in e || Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: !0,
    value: r
  });
} : hr = function(e, t, r, n) {
  !n && t in e || (e[t] = r);
};
var bt = function(e, t, r) {
  for (var n in t)
    Sr.hasOwnProperty.call(t, n) && hr(e, n, t[n], r);
}, ho = function(e) {
  if (e == null)
    throw new TypeError("can't convert " + e + " to object");
  return Object(e);
};
function Us(e) {
  var t = +e;
  return t !== t ? t = 0 : t !== 0 && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t;
}
function Ms(e) {
  return e >>> 0;
}
function Qt() {
}
bt(As, {
  bind: function(t) {
    var r = this;
    if (!lo(r))
      throw new TypeError("Function.prototype.bind called on incompatible " + r);
    for (var n = Kt.call(arguments, 1), o = function() {
      if (this instanceof f) {
        var w = r.apply(
          this,
          n.concat(Kt.call(arguments))
        );
        return Object(w) === w ? w : this;
      } else
        return r.apply(
          t,
          n.concat(Kt.call(arguments))
        );
    }, a = Math.max(0, r.length - n.length), u = [], c = 0; c < a; c++)
      u.push("$" + c);
    var f = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this, arguments); }")(o);
    return r.prototype && (Qt.prototype = r.prototype, f.prototype = new Qt(), Qt.prototype = null), f;
  }
});
bt(Array, { isArray: Ls });
var on = Object("a"), po = on[0] !== "a" || !(0 in on), qs = function(t) {
  var r = !0, n = !0;
  return t && (t.call("foo", function(o, a, u) {
    typeof u != "object" && (r = !1);
  }), t.call([1], function() {
    n = typeof this == "string";
  }, "x")), !!t && r && n;
};
bt(st, {
  forEach: function(t) {
    var r = ho(this), n = po && fo(this) ? this.split("") : r, o = arguments[1], a = -1, u = n.length >>> 0;
    if (!lo(t))
      throw new TypeError();
    for (; ++a < u; )
      a in n && t.call(o, n[a], a, r);
  }
}, !qs(st.forEach));
var Hs = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
bt(st, {
  indexOf: function(t) {
    var r = po && fo(this) ? this.split("") : ho(this), n = r.length >>> 0;
    if (!n)
      return -1;
    var o = 0;
    for (arguments.length > 1 && (o = Us(arguments[1])), o = o >= 0 ? o : Math.max(0, n + o); o < n; o++)
      if (o in r && r[o] === t)
        return o;
    return -1;
  }
}, Hs);
var sn = at.split;
"ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
  var e = /()??/.exec("")[1] === void 0;
  at.split = function(t, r) {
    var n = this;
    if (t === void 0 && r === 0)
      return [];
    if (xr.call(t) !== "[object RegExp]")
      return sn.call(this, t, r);
    var o = [], a = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + // Proposed for ES6
    (t.sticky ? "y" : ""), u = 0, c, f, w, l;
    for (t = new RegExp(t.source, a + "g"), n += "", e || (c = new RegExp("^" + t.source + "$(?!\\s)", a)), r = r === void 0 ? -1 >>> 0 : (
      // Math.pow(2, 32) - 1
      Ms(r)
    ); (f = t.exec(n)) && (w = f.index + f[0].length, !(w > u && (o.push(n.slice(u, f.index)), !e && f.length > 1 && f[0].replace(c, function() {
      for (var s = 1; s < arguments.length - 2; s++)
        arguments[s] === void 0 && (f[s] = void 0);
    }), f.length > 1 && f.index < n.length && st.push.apply(o, f.slice(1)), l = f[0].length, u = w, o.length >= r))); )
      t.lastIndex === f.index && t.lastIndex++;
    return u === n.length ? (l || !t.test("")) && o.push("") : o.push(n.slice(u)), o.length > r ? o.slice(0, r) : o;
  };
}() : "0".split(void 0, 0).length && (at.split = function(t, r) {
  return t === void 0 && r === 0 ? [] : sn.call(this, t, r);
});
var Ws = at.substr, Bs = "".substr && "0b".substr(-1) !== "b";
bt(at, {
  substr: function(t, r) {
    return Ws.call(
      this,
      t < 0 && (t = this.length + t) < 0 ? 0 : t,
      r
    );
  }
}, Bs);
var Rt = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g, Zt, Xs = function(e) {
  var t, r = {}, n = [];
  for (t = 0; t < 65536; t++)
    n.push(String.fromCharCode(t));
  return e.lastIndex = 0, n.join("").replace(e, function(o) {
    return r[o] = "\\u" + ("0000" + o.charCodeAt(0).toString(16)).slice(-4), "";
  }), e.lastIndex = 0, r;
}, Js = {
  quote: function(e) {
    var t = JSON.stringify(e);
    return Rt.lastIndex = 0, Rt.test(t) ? (Zt || (Zt = Xs(Rt)), t.replace(Rt, function(r) {
      return Zt[r];
    })) : t;
  }
}, Ze = function() {
};
process.env.NODE_ENV !== "production" && (Ze = q()("sockjs-client:utils:transport"));
var Vs = function(e) {
  return {
    filterToEnabled: function(t, r) {
      var n = {
        main: [],
        facade: []
      };
      return t ? typeof t == "string" && (t = [t]) : t = [], e.forEach(function(o) {
        if (o) {
          if (o.transportName === "websocket" && r.websocket === !1) {
            Ze("disabled from server", "websocket");
            return;
          }
          if (t.length && t.indexOf(o.transportName) === -1) {
            Ze("not in whitelist", o.transportName);
            return;
          }
          o.enabled(r) ? (Ze("enabled", o.transportName), n.main.push(o), o.facadeTransport && n.facade.push(o.facadeTransport)) : Ze("disabled", o.transportName);
        }
      }), n;
    }
  };
}, dr = {};
["log", "debug", "warn"].forEach(function(e) {
  var t;
  try {
    t = v.console && v.console[e] && v.console[e].apply;
  } catch {
  }
  dr[e] = t ? function() {
    return v.console[e].apply(v.console, arguments);
  } : e === "log" ? function() {
  } : dr.log;
});
var Gs = dr;
function Ue(e) {
  this.type = e;
}
Ue.prototype.initEvent = function(e, t, r) {
  return this.type = e, this.bubbles = t, this.cancelable = r, this.timeStamp = +/* @__PURE__ */ new Date(), this;
};
Ue.prototype.stopPropagation = function() {
};
Ue.prototype.preventDefault = function() {
};
Ue.CAPTURING_PHASE = 1;
Ue.AT_TARGET = 2;
Ue.BUBBLING_PHASE = 3;
var Or = Ue, vo = v.location || {
  origin: "http://localhost:80",
  protocol: "http:",
  host: "localhost",
  port: 80,
  href: "http://localhost/",
  hash: ""
}, Ys = F, mo = Or;
function bo() {
  mo.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = "";
}
Ys(bo, mo);
var zs = bo, Ks = F, go = Or;
function yo(e) {
  go.call(this), this.initEvent("message", !1, !1), this.data = e;
}
Ks(yo, go);
var Qs = yo, Eo = J.EventEmitter, Zs = F;
function gt() {
  var e = this;
  Eo.call(this), this.to = setTimeout(function() {
    e.emit("finish", 200, "{}");
  }, gt.timeout);
}
Zs(gt, Eo);
gt.prototype.close = function() {
  clearTimeout(this.to);
};
gt.timeout = 2e3;
var ea = gt, wo = J.EventEmitter, ta = F, ra = Cr, _o = function() {
};
process.env.NODE_ENV !== "production" && (_o = q()("sockjs-client:info-ajax"));
function Rr(e, t) {
  wo.call(this);
  var r = this, n = +/* @__PURE__ */ new Date();
  this.xo = new t("GET", e), this.xo.once("finish", function(o, a) {
    var u, c;
    if (o === 200) {
      if (c = +/* @__PURE__ */ new Date() - n, a)
        try {
          u = JSON.parse(a);
        } catch {
          _o("bad json", a);
        }
      ra.isObject(u) || (u = {});
    }
    r.emit("finish", u, c), r.removeAllListeners();
  });
}
ta(Rr, wo);
Rr.prototype.close = function() {
  this.removeAllListeners(), this.xo.close();
};
var Co = Rr, na = F, So = J.EventEmitter, oa = ct, ia = Co;
function Ut(e) {
  var t = this;
  So.call(this), this.ir = new ia(e, oa), this.ir.once("finish", function(r, n) {
    t.ir = null, t.emit("message", JSON.stringify([r, n]));
  });
}
na(Ut, So);
Ut.transportName = "iframe-info-receiver";
Ut.prototype.close = function() {
  this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners();
};
var xo = Ut, Oo = J.EventEmitter, sa = F, aa = ke, Ro = to, ua = xo, To = function() {
};
process.env.NODE_ENV !== "production" && (To = q()("sockjs-client:info-iframe"));
function Mt(e, t) {
  var r = this;
  Oo.call(this);
  var n = function() {
    var o = r.ifr = new Ro(ua.transportName, t, e);
    o.once("message", function(a) {
      if (a) {
        var u;
        try {
          u = JSON.parse(a);
        } catch {
          To("bad json", a), r.emit("finish"), r.close();
          return;
        }
        var c = u[0], f = u[1];
        r.emit("finish", c, f);
      }
      r.close();
    }), o.once("close", function() {
      r.emit("finish"), r.close();
    });
  };
  v.document.body ? n() : aa.attachEvent("load", n);
}
sa(Mt, Oo);
Mt.enabled = function() {
  return Ro.enabled();
};
Mt.prototype.close = function() {
  this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null;
};
var ca = Mt, jo = J.EventEmitter, la = F, fa = se, an = _r, un = Dt, ha = ct, da = ea, cn = ca, Tt = Co, Ie = function() {
};
process.env.NODE_ENV !== "production" && (Ie = q()("sockjs-client:info-receiver"));
function Oe(e, t) {
  Ie(e);
  var r = this;
  jo.call(this), setTimeout(function() {
    r.doXhr(e, t);
  }, 0);
}
la(Oe, jo);
Oe._getReceiver = function(e, t, r) {
  return r.sameOrigin ? new Tt(t, ha) : un.enabled ? new Tt(t, un) : an.enabled && r.sameScheme ? new Tt(t, an) : cn.enabled() ? new cn(e, t) : new Tt(t, da);
};
Oe.prototype.doXhr = function(e, t) {
  var r = this, n = fa.addPath(e, "/info");
  Ie("doXhr", n), this.xo = Oe._getReceiver(e, n, t), this.timeoutRef = setTimeout(function() {
    Ie("timeout"), r._cleanup(!1), r.emit("finish");
  }, Oe.timeout), this.xo.once("finish", function(o, a) {
    Ie("finish", o, a), r._cleanup(!0), r.emit("finish", o, a);
  });
};
Oe.prototype._cleanup = function(e) {
  Ie("_cleanup"), clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null;
};
Oe.prototype.close = function() {
  Ie("close"), this.removeAllListeners(), this._cleanup(!1);
};
Oe.timeout = 8e3;
var pa = Oe, er, ln;
function va() {
  if (ln)
    return er;
  ln = 1;
  var e = dt;
  function t(r) {
    this._transport = r, r.on("message", this._transportMessage.bind(this)), r.on("close", this._transportClose.bind(this));
  }
  return t.prototype._transportClose = function(r, n) {
    e.postMessage("c", JSON.stringify([r, n]));
  }, t.prototype._transportMessage = function(r) {
    e.postMessage("t", r);
  }, t.prototype._send = function(r) {
    this._transport.send(r);
  }, t.prototype._close = function() {
    this._transport.close(), this._transport.removeAllListeners();
  }, er = t, er;
}
var tr, fn;
function ma() {
  if (fn)
    return tr;
  fn = 1;
  var e = se, t = ke, r = va(), n = xo, o = dt, a = vo, u = function() {
  };
  return process.env.NODE_ENV !== "production" && (u = q()("sockjs-client:iframe-bootstrap")), tr = function(c, f) {
    var w = {};
    f.forEach(function(s) {
      s.facadeTransport && (w[s.facadeTransport.transportName] = s.facadeTransport);
    }), w[n.transportName] = n;
    var l;
    c.bootstrap_iframe = function() {
      var s;
      o.currentWindowId = a.hash.slice(1);
      var y = function(x) {
        if (x.source === parent && (typeof l > "u" && (l = x.origin), x.origin === l)) {
          var _;
          try {
            _ = JSON.parse(x.data);
          } catch {
            u("bad json", x.data);
            return;
          }
          if (_.windowId === o.currentWindowId)
            switch (_.type) {
              case "s":
                var B;
                try {
                  B = JSON.parse(_.data);
                } catch {
                  u("bad json", _.data);
                  break;
                }
                var L = B[0], k = B[1], I = B[2], Q = B[3];
                if (u(L, k, I, Q), L !== c.version)
                  throw new Error('Incompatible SockJS! Main site uses: "' + L + '", the iframe: "' + c.version + '".');
                if (!e.isOriginEqual(I, a.href) || !e.isOriginEqual(Q, a.href))
                  throw new Error("Can't connect to different domain from within an iframe. (" + a.href + ", " + I + ", " + Q + ")");
                s = new r(new w[k](I, Q));
                break;
              case "m":
                s._send(_.data);
                break;
              case "c":
                s && s._close(), s = null;
                break;
            }
        }
      };
      t.attachEvent("message", y), o.postMessage("s");
    };
  }, tr;
}
var ba = On, ga = F, hn = Xe, ya = Js, et = se, Ea = ke, wa = Vs, _a = Cr, Ca = lt, Sa = Gs, Tr = Or, ko = Tn, jt = vo, xa = zs, dn = Qs, Oa = pa, M = function() {
};
process.env.NODE_ENV !== "production" && (M = q()("sockjs-client:main"));
var $o;
function j(e, t, r) {
  if (!(this instanceof j))
    return new j(e, t, r);
  if (arguments.length < 1)
    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
  ko.call(this), this.readyState = j.CONNECTING, this.extensions = "", this.protocol = "", r = r || {}, r.protocols_whitelist && Sa.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = r.transports, this._transportOptions = r.transportOptions || {}, this._timeout = r.timeout || 0;
  var n = r.sessionId || 8;
  if (typeof n == "function")
    this._generateSessionId = n;
  else if (typeof n == "number")
    this._generateSessionId = function() {
      return hn.string(n);
    };
  else
    throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
  this._server = r.server || hn.numberString(1e3);
  var o = new ba(e);
  if (!o.host || !o.protocol)
    throw new SyntaxError("The URL '" + e + "' is invalid");
  if (o.hash)
    throw new SyntaxError("The URL must not contain a fragment");
  if (o.protocol !== "http:" && o.protocol !== "https:")
    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + o.protocol + "' is not allowed.");
  var a = o.protocol === "https:";
  if (jt.protocol === "https:" && !a && !et.isLoopbackAddr(o.hostname))
    throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
  t ? Array.isArray(t) || (t = [t]) : t = [];
  var u = t.sort();
  u.forEach(function(f, w) {
    if (!f)
      throw new SyntaxError("The protocols entry '" + f + "' is invalid.");
    if (w < u.length - 1 && f === u[w + 1])
      throw new SyntaxError("The protocols entry '" + f + "' is duplicated.");
  });
  var c = et.getOrigin(jt.href);
  this._origin = c ? c.toLowerCase() : null, o.set("pathname", o.pathname.replace(/\/+$/, "")), this.url = o.href, M("using url", this.url), this._urlInfo = {
    nullOrigin: !Ca.hasDomain(),
    sameOrigin: et.isOriginEqual(this.url, jt.href),
    sameScheme: et.isSchemeEqual(this.url, jt.href)
  }, this._ir = new Oa(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this));
}
ga(j, ko);
function Fo(e) {
  return e === 1e3 || e >= 3e3 && e <= 4999;
}
j.prototype.close = function(e, t) {
  if (e && !Fo(e))
    throw new Error("InvalidAccessError: Invalid code");
  if (t && t.length > 123)
    throw new SyntaxError("reason argument has an invalid length");
  if (!(this.readyState === j.CLOSING || this.readyState === j.CLOSED)) {
    var r = !0;
    this._close(e || 1e3, t || "Normal closure", r);
  }
};
j.prototype.send = function(e) {
  if (typeof e != "string" && (e = "" + e), this.readyState === j.CONNECTING)
    throw new Error("InvalidStateError: The connection has not been established yet");
  this.readyState === j.OPEN && this._transport.send(ya.quote(e));
};
j.version = zn();
j.CONNECTING = 0;
j.OPEN = 1;
j.CLOSING = 2;
j.CLOSED = 3;
j.prototype._receiveInfo = function(e, t) {
  if (M("_receiveInfo", t), this._ir = null, !e) {
    this._close(1002, "Cannot connect to server");
    return;
  }
  this._rto = this.countRTO(t), this._transUrl = e.base_url ? e.base_url : this.url, e = _a.extend(e, this._urlInfo), M("info", e);
  var r = $o.filterToEnabled(this._transportsWhitelist, e);
  this._transports = r.main, M(this._transports.length + " enabled transports"), this._connect();
};
j.prototype._connect = function() {
  for (var e = this._transports.shift(); e; e = this._transports.shift()) {
    if (M("attempt", e.transportName), e.needBody && (!v.document.body || typeof v.document.readyState < "u" && v.document.readyState !== "complete" && v.document.readyState !== "interactive")) {
      M("waiting for body"), this._transports.unshift(e), Ea.attachEvent("load", this._connect.bind(this));
      return;
    }
    var t = Math.max(this._timeout, this._rto * e.roundTrips || 5e3);
    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), t), M("using timeout", t);
    var r = et.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()), n = this._transportOptions[e.transportName];
    M("transport url", r);
    var o = new e(r, this._transUrl, n);
    o.on("message", this._transportMessage.bind(this)), o.once("close", this._transportClose.bind(this)), o.transportName = e.transportName, this._transport = o;
    return;
  }
  this._close(2e3, "All transports failed", !1);
};
j.prototype._transportTimeout = function() {
  M("_transportTimeout"), this.readyState === j.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"));
};
j.prototype._transportMessage = function(e) {
  M("_transportMessage", e);
  var t = this, r = e.slice(0, 1), n = e.slice(1), o;
  switch (r) {
    case "o":
      this._open();
      return;
    case "h":
      this.dispatchEvent(new Tr("heartbeat")), M("heartbeat", this.transport);
      return;
  }
  if (n)
    try {
      o = JSON.parse(n);
    } catch {
      M("bad json", n);
    }
  if (typeof o > "u") {
    M("empty payload", n);
    return;
  }
  switch (r) {
    case "a":
      Array.isArray(o) && o.forEach(function(a) {
        M("message", t.transport, a), t.dispatchEvent(new dn(a));
      });
      break;
    case "m":
      M("message", this.transport, o), this.dispatchEvent(new dn(o));
      break;
    case "c":
      Array.isArray(o) && o.length === 2 && this._close(o[0], o[1], !0);
      break;
  }
};
j.prototype._transportClose = function(e, t) {
  if (M("_transportClose", this.transport, e, t), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), !Fo(e) && e !== 2e3 && this.readyState === j.CONNECTING) {
    this._connect();
    return;
  }
  this._close(e, t);
};
j.prototype._open = function() {
  M("_open", this._transport && this._transport.transportName, this.readyState), this.readyState === j.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = j.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new Tr("open")), M("connected", this.transport)) : this._close(1006, "Server lost session");
};
j.prototype._close = function(e, t, r) {
  M("_close", this.transport, e, t, r, this.readyState);
  var n = !1;
  if (this._ir && (n = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === j.CLOSED)
    throw new Error("InvalidStateError: SockJS has already been closed");
  this.readyState = j.CLOSING, setTimeout((function() {
    this.readyState = j.CLOSED, n && this.dispatchEvent(new Tr("error"));
    var o = new xa();
    o.wasClean = r || !1, o.code = e || 1e3, o.reason = t, this.dispatchEvent(o), this.onmessage = this.onclose = this.onerror = null, M("disconnected");
  }).bind(this), 0);
};
j.prototype.countRTO = function(e) {
  return e > 100 ? 4 * e : 300 + e;
};
var Ra = function(e) {
  return $o = wa(e), ma()(j, e), j;
}, Ta = Is, ja = Ra(Ta);
"_sockjs_onload" in v && setTimeout(v._sockjs_onload, 1);
const ka = /* @__PURE__ */ gn(ja);
class $a {
  constructor(t, r) {
    A(this, "socket");
    A(this, "createSocket", async (t, r) => {
      const n = `${t}/api/events`, o = await si(`${n}/request`);
      this.socket = new ka(n), this.socket.onerror = this.handleError, this.socket.onclose = this.handleClose, this.socket.onopen = () => this.handleOpen(o.token, r);
    });
    A(this, "handleError", (t) => {
      var r;
      t.eventPhase === EventSource.CLOSED ? (r = this.socket) == null || r.close() : console.error("Oops, Something went wrong with the co");
    });
    A(this, "handleClose", (t) => {
      t.code === 1e3 || t.code === 3e3 || console.log("Socket connection closed unexpectedly");
    });
    A(this, "handleOpen", (t, r) => {
      if (!this.socket)
        throw Error("Socket was not created");
      this.socket.send(t), r(this.socket);
    });
    A(this, "closeConnection", () => {
      var t;
      (t = this.socket) == null || t.close(1e3, "client");
    });
    this.createSocket(t, r);
  }
}
class Fa {
  constructor(t) {
    A(this, "socket");
    A(this, "listeners", {});
    A(this, "cachedStates", {});
    A(this, "dispatchFeed", (t, r) => {
      if (this.listeners[t] === void 0) {
        console.warn("Feed update was recieved but no feed listener was set up", { feed: t, state: r });
        return;
      }
      this.cachedStates[t] = r, this.listeners[t].forEach((n) => n(r));
    });
    A(this, "handleMessage", (t) => {
      const r = JSON.parse(t.data);
      r.feed && this.dispatchFeed(r.feed, r.state);
    });
    A(this, "setupListener", (t, r) => {
      this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set(), this.socket.send(JSON.stringify({ event: "feed-subscribe", message: { feed: t } }))), this.listeners[t].add(r);
    });
    A(this, "serveCache", (t, r) => {
      const n = this.cachedStates[t];
      n !== void 0 && r(n);
    });
    A(this, "unsubscribe", (t, r) => () => {
      this.listeners[t].delete(r), this.listeners[t].size === 0 && (delete this.listeners[t], this.socket.send(JSON.stringify({ event: "feed-unsubscribe", message: { feed: t } })));
    });
    A(this, "subscribe", (t, r) => (this.setupListener(t, r), this.serveCache(t, r), this.unsubscribe(t, r)));
    this.socket = t, this.socket.addEventListener("message", this.handleMessage);
  }
}
class Na {
  constructor(t) {
    A(this, "listeners", {});
    A(this, "dispatchEvent", (t, r) => {
      this.listeners[t] !== void 0 ? this.listeners[t].forEach((n) => n(r)) : console.debug("Push event was recieved but not caught", { event: t, data: r });
    });
    A(this, "setupListener", (t, r) => {
      this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), this.listeners[t].add(r);
    });
    A(this, "handleMessage", (t) => {
      const r = JSON.parse(t.data);
      this.dispatchEvent(r.event, r.message);
    });
    A(this, "unsubscribe", (t, r) => () => {
      this.listeners[t].delete(r), this.listeners[t].size === 0 && delete this.listeners[t];
    });
    A(this, "subscribe", (t, r) => (this.setupListener(t, r), this.unsubscribe(t, r)));
    t.addEventListener("message", this.handleMessage), this.handleMessage = this.handleMessage.bind(this), this.subscribe = this.subscribe.bind(this);
  }
}
const No = pn({});
function Pa({ children: e, socket: t }) {
  const r = vn(new Na(t));
  return /* @__PURE__ */ tt.jsx(No.Provider, { value: r.current.subscribe, children: e });
}
function Ia() {
  return mn(No);
}
const Aa = () => (console.warn("FeedSubscribe used outside of its Provider"), () => {
  console.warn("Unsubscribe called outside of FeedSubscribe Provider");
}), Po = pn(Aa);
function La({ children: e, socket: t }) {
  const r = vn(new Fa(t));
  return /* @__PURE__ */ tt.jsx(Po.Provider, { value: r.current.subscribe, children: e });
}
function Da() {
  return mn(Po);
}
function qa({ serverUrl: e, children: t }) {
  const [r, n] = bn();
  return $t(() => new $a(e, (a) => {
    n(a);
  }).closeConnection, [e]), r ? /* @__PURE__ */ tt.jsx(La, { socket: r, children: /* @__PURE__ */ tt.jsx(Pa, { socket: r, children: t }) }) : /* @__PURE__ */ tt.jsx("div", { children: "Setting up connection..." });
}
function Ha(e) {
  const t = Da(), [r, n] = bn({ loading: !0 });
  return $t(() => {
    !r.loading && !r.data && console.error(
      `Data should never be falsy when loading is false. This is most likely due to a backend error, take a look at the following feed: ${e}`
    );
  }, [r]), $t(() => t(e, (a) => {
    n({ data: a, loading: !1 });
  }), [e, t]), r;
}
function Wa(e, t) {
  const r = Ia();
  $t(() => r(e, t), [t, e, r]);
}
export {
  qa as ServerSubscriptionProvider,
  Wa as useEvent,
  Ha as useFeed
};
