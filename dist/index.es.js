var Zi = Object.defineProperty;
var eo = (e, t, r) => t in e ? Zi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var I = (e, t, r) => (eo(e, typeof t != "symbol" ? t + "" : t, r), r);
import dr, { createContext as vn, useState as $t, useEffect as Ve, useContext as mn } from "react";
var v = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tr = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function to() {
  if (qr)
    return Ze;
  qr = 1;
  var e = dr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, f, w) {
    var l, s = {}, b = null, x = null;
    w !== void 0 && (b = "" + w), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (l in f)
      n.call(f, l) && !a.hasOwnProperty(l) && (s[l] = f[l]);
    if (c && c.defaultProps)
      for (l in f = c.defaultProps, f)
        s[l] === void 0 && (s[l] = f[l]);
    return { $$typeof: t, type: c, key: b, ref: x, props: s, _owner: i.current };
  }
  return Ze.Fragment = r, Ze.jsx = u, Ze.jsxs = u, Ze;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function ro() {
  return Wr || (Wr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = dr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), _ = Symbol.iterator, B = "@@iterator";
    function D(o) {
      if (o === null || typeof o != "object")
        return null;
      var h = _ && o[_] || o[B];
      return typeof h == "function" ? h : null;
    }
    var U = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(o) {
      {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), S = 1; S < h; S++)
          m[S - 1] = arguments[S];
        X("error", o, m);
      }
    }
    function X(o, h, m) {
      {
        var S = U.ReactDebugCurrentFrame, k = S.getStackAddendum();
        k !== "" && (h += "%s", m = m.concat([k]));
        var N = m.map(function(R) {
          return String(R);
        });
        N.unshift("Warning: " + h), Function.prototype.apply.call(console[o], console, N);
      }
    }
    var ce = !1, Oe = !1, Te = !1, Me = !1, le = !1, wt;
    wt = Symbol.for("react.module.reference");
    function qe(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || le || o === i || o === w || o === l || Me || o === x || ce || Oe || Te || typeof o == "object" && o !== null && (o.$$typeof === b || o.$$typeof === s || o.$$typeof === u || o.$$typeof === c || o.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === wt || o.getModuleId !== void 0));
    }
    function Mt(o, h, m) {
      var S = o.displayName;
      if (S)
        return S;
      var k = h.displayName || h.name || "";
      return k !== "" ? m + "(" + k + ")" : m;
    }
    function $e(o) {
      return o.displayName || "Context";
    }
    function se(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case w:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var h = o;
            return $e(h) + ".Consumer";
          case u:
            var m = o;
            return $e(m._context) + ".Provider";
          case f:
            return Mt(o, o.render, "ForwardRef");
          case s:
            var S = o.displayName || null;
            return S !== null ? S : se(o.type) || "Memo";
          case b: {
            var k = o, N = k._payload, R = k._init;
            try {
              return se(R(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ee = Object.assign, Fe = 0, y, d, g, E, p, F, O;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function A() {
      {
        if (Fe === 0) {
          y = console.log, d = console.info, g = console.warn, E = console.error, p = console.group, F = console.groupCollapsed, O = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        Fe++;
      }
    }
    function L() {
      {
        if (Fe--, Fe === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ee({}, o, {
              value: y
            }),
            info: Ee({}, o, {
              value: d
            }),
            warn: Ee({}, o, {
              value: g
            }),
            error: Ee({}, o, {
              value: E
            }),
            group: Ee({}, o, {
              value: p
            }),
            groupCollapsed: Ee({}, o, {
              value: F
            }),
            groupEnd: Ee({}, o, {
              value: O
            })
          });
        }
        Fe < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = U.ReactCurrentDispatcher, Z;
    function ee(o, h, m) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (k) {
            var S = k.stack.trim().match(/\n( *(at )?)/);
            Z = S && S[1] || "";
          }
        return `
` + Z + o;
      }
    }
    var G = !1, Y;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new fe();
    }
    function te(o, h) {
      if (!o || G)
        return "";
      {
        var m = Y.get(o);
        if (m !== void 0)
          return m;
      }
      var S;
      G = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = C.current, C.current = null, A();
      try {
        if (h) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (we) {
              S = we;
            }
            Reflect.construct(o, [], R);
          } else {
            try {
              R.call();
            } catch (we) {
              S = we;
            }
            o.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            S = we;
          }
          o();
        }
      } catch (we) {
        if (we && S && typeof we.stack == "string") {
          for (var T = we.stack.split(`
`), z = S.stack.split(`
`), M = T.length - 1, H = z.length - 1; M >= 1 && H >= 0 && T[M] !== z[H]; )
            H--;
          for (; M >= 1 && H >= 0; M--, H--)
            if (T[M] !== z[H]) {
              if (M !== 1 || H !== 1)
                do
                  if (M--, H--, H < 0 || T[M] !== z[H]) {
                    var re = `
` + T[M].replace(" at new ", " at ");
                    return o.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", o.displayName)), typeof o == "function" && Y.set(o, re), re;
                  }
                while (M >= 1 && H >= 0);
              break;
            }
        }
      } finally {
        G = !1, C.current = N, L(), Error.prepareStackTrace = k;
      }
      var Xe = o ? o.displayName || o.name : "", Mr = Xe ? ee(Xe) : "";
      return typeof o == "function" && Y.set(o, Mr), Mr;
    }
    function Re(o, h, m) {
      return te(o, !1);
    }
    function We(o) {
      var h = o.prototype;
      return !!(h && h.isReactComponent);
    }
    function He(o, h, m) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return te(o, We(o));
      if (typeof o == "string")
        return ee(o);
      switch (o) {
        case w:
          return ee("Suspense");
        case l:
          return ee("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case f:
            return Re(o.render);
          case s:
            return He(o.type, h, m);
          case b: {
            var S = o, k = S._payload, N = S._init;
            try {
              return He(N(k), h, m);
            } catch {
            }
          }
        }
      return "";
    }
    var _t = Object.prototype.hasOwnProperty, Rr = {}, jr = U.ReactDebugCurrentFrame;
    function Ct(o) {
      if (o) {
        var h = o._owner, m = He(o.type, o._source, h ? h.type : null);
        jr.setExtraStackFrame(m);
      } else
        jr.setExtraStackFrame(null);
    }
    function Ni(o, h, m, S, k) {
      {
        var N = Function.call.bind(_t);
        for (var R in o)
          if (N(o, R)) {
            var T = void 0;
            try {
              if (typeof o[R] != "function") {
                var z = Error((S || "React class") + ": " + m + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              T = o[R](h, R, S, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              T = M;
            }
            T && !(T instanceof Error) && (Ct(k), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", m, R, typeof T), Ct(null)), T instanceof Error && !(T.message in Rr) && (Rr[T.message] = !0, Ct(k), P("Failed %s type: %s", m, T.message), Ct(null));
          }
      }
    }
    var Pi = Array.isArray;
    function qt(o) {
      return Pi(o);
    }
    function Ii(o) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, m = h && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return m;
      }
    }
    function Ai(o) {
      try {
        return kr(o), !1;
      } catch {
        return !0;
      }
    }
    function kr(o) {
      return "" + o;
    }
    function $r(o) {
      if (Ai(o))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ii(o)), kr(o);
    }
    var Qe = U.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, Nr, Wt;
    Wt = {};
    function Di(o) {
      if (_t.call(o, "ref")) {
        var h = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ui(o) {
      if (_t.call(o, "key")) {
        var h = Object.getOwnPropertyDescriptor(o, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Mi(o, h) {
      if (typeof o.ref == "string" && Qe.current && h && Qe.current.stateNode !== h) {
        var m = se(Qe.current.type);
        Wt[m] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Qe.current.type), o.ref), Wt[m] = !0);
      }
    }
    function qi(o, h) {
      {
        var m = function() {
          Fr || (Fr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        m.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Wi(o, h) {
      {
        var m = function() {
          Nr || (Nr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        m.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Hi = function(o, h, m, S, k, N, R) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: h,
        ref: m,
        props: R,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function Bi(o, h, m, S, k) {
      {
        var N, R = {}, T = null, z = null;
        m !== void 0 && ($r(m), T = "" + m), Ui(h) && ($r(h.key), T = "" + h.key), Di(h) && (z = h.ref, Mi(h, k));
        for (N in h)
          _t.call(h, N) && !Li.hasOwnProperty(N) && (R[N] = h[N]);
        if (o && o.defaultProps) {
          var M = o.defaultProps;
          for (N in M)
            R[N] === void 0 && (R[N] = M[N]);
        }
        if (T || z) {
          var H = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          T && qi(R, H), z && Wi(R, H);
        }
        return Hi(o, T, z, k, S, Qe.current, R);
      }
    }
    var Ht = U.ReactCurrentOwner, Pr = U.ReactDebugCurrentFrame;
    function Be(o) {
      if (o) {
        var h = o._owner, m = He(o.type, o._source, h ? h.type : null);
        Pr.setExtraStackFrame(m);
      } else
        Pr.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Xt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Ir() {
      {
        if (Ht.current) {
          var o = se(Ht.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Xi(o) {
      {
        if (o !== void 0) {
          var h = o.fileName.replace(/^.*[\\\/]/, ""), m = o.lineNumber;
          return `

Check your code at ` + h + ":" + m + ".";
        }
        return "";
      }
    }
    var Ar = {};
    function Ji(o) {
      {
        var h = Ir();
        if (!h) {
          var m = typeof o == "string" ? o : o.displayName || o.name;
          m && (h = `

Check the top-level render call using <` + m + ">.");
        }
        return h;
      }
    }
    function Lr(o, h) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var m = Ji(h);
        if (Ar[m])
          return;
        Ar[m] = !0;
        var S = "";
        o && o._owner && o._owner !== Ht.current && (S = " It was passed a child from " + se(o._owner.type) + "."), Be(o), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, S), Be(null);
      }
    }
    function Dr(o, h) {
      {
        if (typeof o != "object")
          return;
        if (qt(o))
          for (var m = 0; m < o.length; m++) {
            var S = o[m];
            Xt(S) && Lr(S, h);
          }
        else if (Xt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var k = D(o);
          if (typeof k == "function" && k !== o.entries)
            for (var N = k.call(o), R; !(R = N.next()).done; )
              Xt(R.value) && Lr(R.value, h);
        }
      }
    }
    function Vi(o) {
      {
        var h = o.type;
        if (h == null || typeof h == "string")
          return;
        var m;
        if (typeof h == "function")
          m = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === s))
          m = h.propTypes;
        else
          return;
        if (m) {
          var S = se(h);
          Ni(m, o.props, "prop", S, o);
        } else if (h.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var k = se(h);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gi(o) {
      {
        for (var h = Object.keys(o.props), m = 0; m < h.length; m++) {
          var S = h[m];
          if (S !== "children" && S !== "key") {
            Be(o), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Be(null);
            break;
          }
        }
        o.ref !== null && (Be(o), P("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    function Ur(o, h, m, S, k, N) {
      {
        var R = qe(o);
        if (!R) {
          var T = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Xi(k);
          z ? T += z : T += Ir();
          var M;
          o === null ? M = "null" : qt(o) ? M = "array" : o !== void 0 && o.$$typeof === t ? (M = "<" + (se(o.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : M = typeof o, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, T);
        }
        var H = Bi(o, h, m, k, N);
        if (H == null)
          return H;
        if (R) {
          var re = h.children;
          if (re !== void 0)
            if (S)
              if (qt(re)) {
                for (var Xe = 0; Xe < re.length; Xe++)
                  Dr(re[Xe], o);
                Object.freeze && Object.freeze(re);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dr(re, o);
        }
        return o === n ? Gi(H) : Vi(H), H;
      }
    }
    function Yi(o, h, m) {
      return Ur(o, h, m, !0);
    }
    function zi(o, h, m) {
      return Ur(o, h, m, !1);
    }
    var Ki = zi, Qi = Yi;
    et.Fragment = n, et.jsx = Ki, et.jsxs = Qi;
  }()), et;
}
process.env.NODE_ENV === "production" ? tr.exports = to() : tr.exports = ro();
var nt = tr.exports, gn = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n(dr);
  })(self, (r) => (() => {
    var n = { 156: (c) => {
      c.exports = r;
    } }, i = {};
    function a(c) {
      var f = i[c];
      if (f !== void 0)
        return f.exports;
      var w = i[c] = { exports: {} };
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
      a.r(u), a.d(u, { Actions: () => x, default: () => Fe, isAbortError: () => D, isErrorResponse: () => B, useDelete: () => Oe, useGet: () => Me, useGetImmediate: () => wt, usePost: () => Mt, usePut: () => se, useUpload: () => Ee });
      var c = function() {
        return c = Object.assign || function(y) {
          for (var d, g = 1, E = arguments.length; g < E; g++)
            for (var p in d = arguments[g])
              Object.prototype.hasOwnProperty.call(d, p) && (y[p] = d[p]);
          return y;
        }, c.apply(this, arguments);
      }, f = function(y, d, g, E) {
        return new (g || (g = Promise))(function(p, F) {
          function O(L) {
            try {
              A(E.next(L));
            } catch (C) {
              F(C);
            }
          }
          function J(L) {
            try {
              A(E.throw(L));
            } catch (C) {
              F(C);
            }
          }
          function A(L) {
            var C;
            L.done ? p(L.value) : (C = L.value, C instanceof g ? C : new g(function(Z) {
              Z(C);
            })).then(O, J);
          }
          A((E = E.apply(y, d || [])).next());
        });
      }, w = function(y, d) {
        var g, E, p, F, O = { label: 0, sent: function() {
          if (1 & p[0])
            throw p[1];
          return p[1];
        }, trys: [], ops: [] };
        return F = { next: J(0), throw: J(1), return: J(2) }, typeof Symbol == "function" && (F[Symbol.iterator] = function() {
          return this;
        }), F;
        function J(A) {
          return function(L) {
            return function(C) {
              if (g)
                throw new TypeError("Generator is already executing.");
              for (; F && (F = 0, C[0] && (O = 0)), O; )
                try {
                  if (g = 1, E && (p = 2 & C[0] ? E.return : C[0] ? E.throw || ((p = E.return) && p.call(E), 0) : E.next) && !(p = p.call(E, C[1])).done)
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
                  C = d.call(y, O);
                } catch (Z) {
                  C = [6, Z], E = 0;
                } finally {
                  g = p = 0;
                }
              if (5 & C[0])
                throw C[1];
              return { value: C[0] ? C[1] : void 0, done: !0 };
            }([A, L]);
          };
        }
      };
      function l(y) {
        var d = {}, g = localStorage.getItem("XSRF-TOKEN");
        return g && (d["X-XSRF-TOKEN"] = g), y || (d["Content-Type"] = "application/json"), d;
      }
      function s(y) {
        return f(this, void 0, void 0, function() {
          var d, g;
          return w(this, function(E) {
            switch (E.label) {
              case 0:
                return (d = y.headers.get("X-XSRF-TOKEN")) && localStorage.setItem("XSRF-TOKEN", d), [4, y.json()];
              case 1:
                if (g = E.sent(), y.ok)
                  return [2, g];
                throw c({ status: y.status }, g);
            }
          });
        });
      }
      function b(y, d) {
        return d === void 0 && (d = {}), f(this, void 0, void 0, function() {
          var g, E, p, F, O, J, A, L, C, Z, ee;
          return w(this, function(G) {
            switch (G.label) {
              case 0:
                return g = d.method, E = g === void 0 ? "GET" : g, p = d.headers, F = p === void 0 ? {} : p, O = d.params, J = O === void 0 ? {} : O, A = d.body, L = d.signal, C = function(Y) {
                  return new URLSearchParams(Object.entries(Y).filter(function(fe) {
                    return fe[1] != null;
                  }).reduce(function(fe, te) {
                    var Re, We = te[0], He = te[1];
                    return c(c({}, fe), ((Re = {})[We] = He.toString(), Re));
                  }, {}));
                }(J || {}), Z = "".concat(y, "?").concat(C), ee = A instanceof FormData, [4, fetch(Z, c({ method: E, signal: L, credentials: "include", headers: c(c({}, l(ee)), F) }, A && { body: ee ? A : JSON.stringify(A) }))];
              case 1:
                return [4, s(G.sent())];
              case 2:
                return [2, G.sent()];
            }
          });
        });
      }
      var x, _ = a(156);
      function B(y) {
        return y.errorCode !== void 0 && y.message !== void 0;
      }
      function D(y) {
        return y.name === "AbortError";
      }
      (function(y) {
        y[y.FETCH_INIT = 0] = "FETCH_INIT", y[y.FETCH_SUCCESS = 1] = "FETCH_SUCCESS", y[y.FETCH_FAILURE = 2] = "FETCH_FAILURE", y[y.RESET_STATE = 3] = "RESET_STATE";
      })(x || (x = {}));
      var U = function() {
        return U = Object.assign || function(y) {
          for (var d, g = 1, E = arguments.length; g < E; g++)
            for (var p in d = arguments[g])
              Object.prototype.hasOwnProperty.call(d, p) && (y[p] = d[p]);
          return y;
        }, U.apply(this, arguments);
      };
      function P(y, d) {
        switch (d.type) {
          case x.FETCH_INIT:
            return { status: "loading" };
          case x.FETCH_SUCCESS:
            return { status: "success", data: d.payload };
          case x.FETCH_FAILURE:
            return { status: "error", error: d.payload };
          case x.RESET_STATE:
            return { status: "initial" };
          default:
            throw new Error();
        }
      }
      function X(y, d) {
        d === void 0 && (d = {});
        var g = (0, _.useReducer)(P, d != null && d.immediate ? { status: "loading" } : { status: "initial" }), E = g[0], p = g[1], F = (0, _.useRef)(y), O = (0, _.useRef)(d);
        (0, _.useEffect)(function() {
          F.current = y, O.current = d;
        }, [y, d]);
        var J = (0, _.useCallback)(function(L) {
          L === void 0 && (L = {});
          var C = new AbortController(), Z = U(U({}, L), { signal: C.signal });
          return p({ type: x.FETCH_INIT }), b(F.current, Z).then(function(ee) {
            return function(G, Y, fe) {
              var te = Y.onComplete;
              fe({ type: x.FETCH_SUCCESS, payload: G }), te == null || te(G);
            }(ee, O.current, p);
          }).catch(function(ee) {
            return function(G, Y, fe) {
              var te, Re;
              if (!D(G))
                if (B(G))
                  fe({ type: x.FETCH_FAILURE, payload: G }), (te = Y == null ? void 0 : Y.onError) === null || te === void 0 || te.call(Y, G);
                else {
                  var We = { errorCode: "UNCAUGHT_ERROR", message: "Uncaught error in useFetch" };
                  fe({ type: x.FETCH_FAILURE, payload: We }), (Re = Y == null ? void 0 : Y.onError) === null || Re === void 0 || Re.call(Y, We);
                }
            }(ee, O.current, p);
          }), C;
        }, []);
        (0, _.useEffect)(function() {
          O.current.immediate && J(O.current.fetchOptions);
        }, [J]);
        var A = (0, _.useCallback)(function() {
          p({ type: x.RESET_STATE });
        }, []);
        return [J, { state: E, actions: { resetState: A } }];
      }
      var ce = function() {
        return ce = Object.assign || function(y) {
          for (var d, g = 1, E = arguments.length; g < E; g++)
            for (var p in d = arguments[g])
              Object.prototype.hasOwnProperty.call(d, p) && (y[p] = d[p]);
          return y;
        }, ce.apply(this, arguments);
      };
      function Oe(y, d) {
        d === void 0 && (d = {});
        var g = X(y, d), E = g[0], p = g[1];
        return [(0, _.useCallback)(function(F) {
          return E(ce(ce({}, F), { method: "DELETE" }));
        }, [E]), p];
      }
      var Te = function() {
        return Te = Object.assign || function(y) {
          for (var d, g = 1, E = arguments.length; g < E; g++)
            for (var p in d = arguments[g])
              Object.prototype.hasOwnProperty.call(d, p) && (y[p] = d[p]);
          return y;
        }, Te.apply(this, arguments);
      };
      function Me(y, d) {
        d === void 0 && (d = {});
        var g = X(y, d), E = g[0], p = g[1];
        return [(0, _.useCallback)(function(F) {
          return E(Te(Te({}, F), { method: "GET" }));
        }, [E]), p];
      }
      var le = function() {
        return le = Object.assign || function(y) {
          for (var d, g = 1, E = arguments.length; g < E; g++)
            for (var p in d = arguments[g])
              Object.prototype.hasOwnProperty.call(d, p) && (y[p] = d[p]);
          return y;
        }, le.apply(this, arguments);
      };
      function wt(y, d) {
        var g = X(y, le(le({}, d), { immediate: !0 })), E = g[0], p = g[1], F = p.state, O = p.actions;
        return { state: F, actions: le(le({}, O), { refetch: E }) };
      }
      var qe = function() {
        return qe = Object.assign || function(y) {
          for (var d, g = 1, E = arguments.length; g < E; g++)
            for (var p in d = arguments[g])
              Object.prototype.hasOwnProperty.call(d, p) && (y[p] = d[p]);
          return y;
        }, qe.apply(this, arguments);
      };
      function Mt(y, d) {
        d === void 0 && (d = {});
        var g = X(y, d), E = g[0], p = g[1];
        return [(0, _.useCallback)(function(F) {
          return E(qe(qe({}, F), { method: "POST" }));
        }, [E]), p];
      }
      var $e = function() {
        return $e = Object.assign || function(y) {
          for (var d, g = 1, E = arguments.length; g < E; g++)
            for (var p in d = arguments[g])
              Object.prototype.hasOwnProperty.call(d, p) && (y[p] = d[p]);
          return y;
        }, $e.apply(this, arguments);
      };
      function se(y, d) {
        d === void 0 && (d = {});
        var g = X(y, d), E = g[0], p = g[1];
        return [(0, _.useCallback)(function(F) {
          return E($e($e({}, F), { method: "PUT" }));
        }, [E]), p];
      }
      function Ee(y, d) {
        d === void 0 && (d = {});
        var g = X(y, d), E = g[0], p = g[1], F = p.state, O = p.actions;
        return [(0, _.useCallback)(function(J, A) {
          var L = new FormData();
          return L.append("blob", J), A != null && A.body && L.append("body", JSON.stringify(A.body)), E({ method: "POST", signal: A == null ? void 0 : A.signal, params: A == null ? void 0 : A.params, body: L });
        }, [E]), { state: F, actions: O }];
      }
      const Fe = b;
    })(), u;
  })());
})(gn);
var no = gn.exports;
const io = /* @__PURE__ */ bn(no);
var yn = { exports: {} }, rr = {};
v.crypto && v.crypto.getRandomValues ? rr.randomBytes = function(e) {
  var t = new Uint8Array(e);
  return v.crypto.getRandomValues(t), t;
} : rr.randomBytes = function(e) {
  for (var t = new Array(e), r = 0; r < e; r++)
    t[r] = Math.floor(Math.random() * 256);
  return t;
};
var oo = rr, Hr = "abcdefghijklmnopqrstuvwxyz012345", Ge = {
  string: function(e) {
    for (var t = Hr.length, r = oo.randomBytes(e), n = [], i = 0; i < e; i++)
      n.push(Hr.substr(r[i] % t, 1));
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
  var t = Ge, r = {}, n = !1, i = v.chrome && v.chrome.app && v.chrome.app.runtime;
  e.exports = {
    attachEvent: function(u, c) {
      typeof v.addEventListener < "u" ? v.addEventListener(u, c, !1) : v.document && v.attachEvent && (v.document.attachEvent("on" + u, c), v.attachEvent("on" + u, c));
    },
    detachEvent: function(u, c) {
      typeof v.addEventListener < "u" ? v.removeEventListener(u, c, !1) : v.document && v.detachEvent && (v.document.detachEvent("on" + u, c), v.detachEvent("on" + u, c));
    },
    unloadAdd: function(u) {
      if (i)
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
  i || e.exports.attachEvent("unload", a);
})(yn);
var ke = yn.exports, so = function(t, r) {
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
}, pr = {}, ao = Object.prototype.hasOwnProperty, uo;
function Br(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function Xr(e) {
  try {
    return encodeURIComponent(e);
  } catch {
    return null;
  }
}
function co(e) {
  for (var t = /([^=?#&]+)=?([^&]*)/g, r = {}, n; n = t.exec(e); ) {
    var i = Br(n[1]), a = Br(n[2]);
    i === null || a === null || i in r || (r[i] = a);
  }
  return r;
}
function lo(e, t) {
  t = t || "";
  var r = [], n, i;
  typeof t != "string" && (t = "?");
  for (i in e)
    if (ao.call(e, i)) {
      if (n = e[i], !n && (n === null || n === uo || isNaN(n)) && (n = ""), i = Xr(i), n = Xr(n), i === null || n === null)
        continue;
      r.push(i + "=" + n);
    }
  return r.length ? t + r.join("&") : "";
}
pr.stringify = lo;
pr.parse = co;
var En = so, Ft = pr, fo = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, wn = /[\n\r\t]/g, ho = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, _n = /:\d+$/, po = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, vo = /^[a-zA-Z]:/;
function vr(e) {
  return (e || "").toString().replace(fo, "");
}
var nr = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(t, r) {
    return ve(r.protocol) ? t.replace(/\\/g, "/") : t;
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
], Jr = { hash: 1, query: 1 };
function Cn(e) {
  var t;
  typeof window < "u" ? t = window : typeof v < "u" ? t = v : typeof self < "u" ? t = self : t = {};
  var r = t.location || {};
  e = e || r;
  var n = {}, i = typeof e, a;
  if (e.protocol === "blob:")
    n = new be(unescape(e.pathname), {});
  else if (i === "string") {
    n = new be(e, {});
    for (a in Jr)
      delete n[a];
  } else if (i === "object") {
    for (a in e)
      a in Jr || (n[a] = e[a]);
    n.slashes === void 0 && (n.slashes = ho.test(e.href));
  }
  return n;
}
function ve(e) {
  return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
}
function Sn(e, t) {
  e = vr(e), e = e.replace(wn, ""), t = t || {};
  var r = po.exec(e), n = r[1] ? r[1].toLowerCase() : "", i = !!r[2], a = !!r[3], u = 0, c;
  return i ? a ? (c = r[2] + r[3] + r[4], u = r[2].length + r[3].length) : (c = r[2] + r[4], u = r[2].length) : a ? (c = r[3] + r[4], u = r[3].length) : c = r[4], n === "file:" ? u >= 2 && (c = c.slice(2)) : ve(n) ? c = r[4] : n ? i && (c = c.slice(2)) : u >= 2 && ve(t.protocol) && (c = r[4]), {
    protocol: n,
    slashes: i || ve(n),
    slashesCount: u,
    rest: c
  };
}
function mo(e, t) {
  if (e === "")
    return t;
  for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, i = r[n - 1], a = !1, u = 0; n--; )
    r[n] === "." ? r.splice(n, 1) : r[n] === ".." ? (r.splice(n, 1), u++) : u && (n === 0 && (a = !0), r.splice(n, 1), u--);
  return a && r.unshift(""), (i === "." || i === "..") && r.push(""), r.join("/");
}
function be(e, t, r) {
  if (e = vr(e), e = e.replace(wn, ""), !(this instanceof be))
    return new be(e, t, r);
  var n, i, a, u, c, f, w = nr.slice(), l = typeof t, s = this, b = 0;
  for (l !== "object" && l !== "string" && (r = t, t = null), r && typeof r != "function" && (r = Ft.parse), t = Cn(t), i = Sn(e || "", t), n = !i.protocol && !i.slashes, s.slashes = i.slashes || n && t.slashes, s.protocol = i.protocol || t.protocol || "", e = i.rest, (i.protocol === "file:" && (i.slashesCount !== 2 || vo.test(e)) || !i.slashes && (i.protocol || i.slashesCount < 2 || !ve(s.protocol))) && (w[3] = [/(.*)/, "pathname"]); b < w.length; b++) {
    if (u = w[b], typeof u == "function") {
      e = u(e, s);
      continue;
    }
    a = u[0], f = u[1], a !== a ? s[f] = e : typeof a == "string" ? (c = a === "@" ? e.lastIndexOf(a) : e.indexOf(a), ~c && (typeof u[2] == "number" ? (s[f] = e.slice(0, c), e = e.slice(c + u[2])) : (s[f] = e.slice(c), e = e.slice(0, c)))) : (c = a.exec(e)) && (s[f] = c[1], e = e.slice(0, c.index)), s[f] = s[f] || n && u[3] && t[f] || "", u[4] && (s[f] = s[f].toLowerCase());
  }
  r && (s.query = r(s.query)), n && t.slashes && s.pathname.charAt(0) !== "/" && (s.pathname !== "" || t.pathname !== "") && (s.pathname = mo(s.pathname, t.pathname)), s.pathname.charAt(0) !== "/" && ve(s.protocol) && (s.pathname = "/" + s.pathname), En(s.port, s.protocol) || (s.host = s.hostname, s.port = ""), s.username = s.password = "", s.auth && (c = s.auth.indexOf(":"), ~c ? (s.username = s.auth.slice(0, c), s.username = encodeURIComponent(decodeURIComponent(s.username)), s.password = s.auth.slice(c + 1), s.password = encodeURIComponent(decodeURIComponent(s.password))) : s.username = encodeURIComponent(decodeURIComponent(s.auth)), s.auth = s.password ? s.username + ":" + s.password : s.username), s.origin = s.protocol !== "file:" && ve(s.protocol) && s.host ? s.protocol + "//" + s.host : "null", s.href = s.toString();
}
function bo(e, t, r) {
  var n = this;
  switch (e) {
    case "query":
      typeof t == "string" && t.length && (t = (r || Ft.parse)(t)), n[e] = t;
      break;
    case "port":
      n[e] = t, En(t, n.protocol) ? t && (n.host = n.hostname + ":" + t) : (n.host = n.hostname, n[e] = "");
      break;
    case "hostname":
      n[e] = t, n.port && (t += ":" + n.port), n.host = t;
      break;
    case "host":
      n[e] = t, _n.test(t) ? (t = t.split(":"), n.port = t.pop(), n.hostname = t.join(":")) : (n.hostname = t, n.port = "");
      break;
    case "protocol":
      n.protocol = t.toLowerCase(), n.slashes = !r;
      break;
    case "pathname":
    case "hash":
      if (t) {
        var i = e === "pathname" ? "/" : "#";
        n[e] = t.charAt(0) !== i ? i + t : t;
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
  for (var u = 0; u < nr.length; u++) {
    var c = nr[u];
    c[4] && (n[c[1]] = n[c[1]].toLowerCase());
  }
  return n.auth = n.password ? n.username + ":" + n.password : n.username, n.origin = n.protocol !== "file:" && ve(n.protocol) && n.host ? n.protocol + "//" + n.host : "null", n.href = n.toString(), n;
}
function go(e) {
  (!e || typeof e != "function") && (e = Ft.stringify);
  var t, r = this, n = r.host, i = r.protocol;
  i && i.charAt(i.length - 1) !== ":" && (i += ":");
  var a = i + (r.protocol && r.slashes || ve(r.protocol) ? "//" : "");
  return r.username ? (a += r.username, r.password && (a += ":" + r.password), a += "@") : r.password ? (a += ":" + r.password, a += "@") : r.protocol !== "file:" && ve(r.protocol) && !n && r.pathname !== "/" && (a += "@"), (n[n.length - 1] === ":" || _n.test(r.hostname) && !r.port) && (n += ":"), a += n + r.pathname, t = typeof r.query == "object" ? e(r.query) : r.query, t && (a += t.charAt(0) !== "?" ? "?" + t : t), r.hash && (a += r.hash), a;
}
be.prototype = { set: bo, toString: go };
be.extractProtocol = Sn;
be.location = Cn;
be.trimLeft = vr;
be.qs = Ft;
var xn = be, St = { exports: {} }, Jt, Vr;
function yo() {
  if (Vr)
    return Jt;
  Vr = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  Jt = function(l, s) {
    s = s || {};
    var b = typeof l;
    if (b === "string" && l.length > 0)
      return u(l);
    if (b === "number" && isFinite(l))
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
        var b = parseFloat(s[1]), x = (s[2] || "ms").toLowerCase();
        switch (x) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return b * a;
          case "weeks":
          case "week":
          case "w":
            return b * i;
          case "days":
          case "day":
          case "d":
            return b * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return b * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return b * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return b * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return b;
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
  function w(l, s, b, x) {
    var _ = s >= b * 1.5;
    return Math.round(l / b) + " " + x + (_ ? "s" : "");
  }
  return Jt;
}
var Vt, Gr;
function Eo() {
  if (Gr)
    return Vt;
  Gr = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = w, n.disable = c, n.enable = u, n.enabled = f, n.humanize = yo(), Object.keys(t).forEach(function(l) {
      n[l] = t[l];
    }), n.instances = [], n.names = [], n.skips = [], n.formatters = {};
    function r(l) {
      for (var s = 0, b = 0; b < l.length; b++)
        s = (s << 5) - s + l.charCodeAt(b), s |= 0;
      return n.colors[Math.abs(s) % n.colors.length];
    }
    n.selectColor = r;
    function n(l) {
      var s;
      function b() {
        if (b.enabled) {
          for (var x = arguments.length, _ = new Array(x), B = 0; B < x; B++)
            _[B] = arguments[B];
          var D = b, U = Number(/* @__PURE__ */ new Date()), P = U - (s || U);
          D.diff = P, D.prev = s, D.curr = U, s = U, _[0] = n.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
          var X = 0;
          _[0] = _[0].replace(/%([a-zA-Z%])/g, function(Oe, Te) {
            if (Oe === "%%")
              return Oe;
            X++;
            var Me = n.formatters[Te];
            if (typeof Me == "function") {
              var le = _[X];
              Oe = Me.call(D, le), _.splice(X, 1), X--;
            }
            return Oe;
          }), n.formatArgs.call(D, _);
          var ce = D.log || n.log;
          ce.apply(D, _);
        }
      }
      return b.namespace = l, b.enabled = n.enabled(l), b.useColors = n.useColors(), b.color = r(l), b.destroy = i, b.extend = a, typeof n.init == "function" && n.init(b), n.instances.push(b), b;
    }
    function i() {
      var l = n.instances.indexOf(this);
      return l !== -1 ? (n.instances.splice(l, 1), !0) : !1;
    }
    function a(l, s) {
      return n(this.namespace + (typeof s > "u" ? ":" : s) + l);
    }
    function u(l) {
      n.save(l), n.names = [], n.skips = [];
      var s, b = (typeof l == "string" ? l : "").split(/[\s,]+/), x = b.length;
      for (s = 0; s < x; s++)
        b[s] && (l = b[s].replace(/\*/g, ".*?"), l[0] === "-" ? n.skips.push(new RegExp("^" + l.substr(1) + "$")) : n.names.push(new RegExp("^" + l + "$")));
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
      var s, b;
      for (s = 0, b = n.skips.length; s < b; s++)
        if (n.skips[s].test(l))
          return !1;
      for (s = 0, b = n.names.length; s < b; s++)
        if (n.names[s].test(l))
          return !0;
      return !1;
    }
    function w(l) {
      return l instanceof Error ? l.stack || l.message : l;
    }
    return n.enable(n.load()), n;
  }
  return Vt = e, Vt;
}
var Yr;
function W() {
  return Yr || (Yr = 1, function(e, t) {
    function r(l) {
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? r = function(b) {
        return typeof b;
      } : r = function(b) {
        return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
      }, r(l);
    }
    t.log = a, t.formatArgs = i, t.save = u, t.load = c, t.useColors = n, t.storage = f(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
      return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function i(l) {
      if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !!this.useColors) {
        var s = "color: " + this.color;
        l.splice(1, 0, s, "color: inherit");
        var b = 0, x = 0;
        l[0].replace(/%[a-zA-Z%]/g, function(_) {
          _ !== "%%" && (b++, _ === "%c" && (x = b));
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
    e.exports = Eo()(t);
    var w = e.exports.formatters;
    w.j = function(l) {
      try {
        return JSON.stringify(l);
      } catch (s) {
        return "[UnexpectedJSONParseError]: " + s.message;
      }
    };
  }(St, St.exports)), St.exports;
}
var wo = xn, On = function() {
};
process.env.NODE_ENV !== "production" && (On = W()("sockjs-client:utils:url"));
var oe = {
  getOrigin: function(e) {
    if (!e)
      return null;
    var t = new wo(e);
    if (t.protocol === "file:")
      return null;
    var r = t.port;
    return r || (r = t.protocol === "https:" ? "443" : "80"), t.protocol + "//" + t.hostname + ":" + r;
  },
  isOriginEqual: function(e, t) {
    var r = this.getOrigin(e) === this.getOrigin(t);
    return On("same", e, t, r), r;
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
var $ = ir.exports, V = {};
function Nt() {
  this._listeners = {};
}
Nt.prototype.addEventListener = function(e, t) {
  e in this._listeners || (this._listeners[e] = []);
  var r = this._listeners[e];
  r.indexOf(t) === -1 && (r = r.concat([t])), this._listeners[e] = r;
};
Nt.prototype.removeEventListener = function(e, t) {
  var r = this._listeners[e];
  if (r) {
    var n = r.indexOf(t);
    if (n !== -1) {
      r.length > 1 ? this._listeners[e] = r.slice(0, n).concat(r.slice(n + 1)) : delete this._listeners[e];
      return;
    }
  }
};
Nt.prototype.dispatchEvent = function() {
  var e = arguments[0], t = e.type, r = arguments.length === 1 ? [e] : Array.apply(null, arguments);
  if (this["on" + t] && this["on" + t].apply(this, r), t in this._listeners)
    for (var n = this._listeners[t], i = 0; i < n.length; i++)
      n[i].apply(this, r);
};
var Tn = Nt, _o = $, Pt = Tn;
function je() {
  Pt.call(this);
}
_o(je, Pt);
je.prototype.removeAllListeners = function(e) {
  e ? delete this._listeners[e] : this._listeners = {};
};
je.prototype.once = function(e, t) {
  var r = this, n = !1;
  function i() {
    r.removeListener(e, i), n || (n = !0, t.apply(this, arguments));
  }
  this.on(e, i);
};
je.prototype.emit = function() {
  var e = arguments[0], t = this._listeners[e];
  if (t) {
    for (var r = arguments.length, n = new Array(r - 1), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    for (var a = 0; a < t.length; a++)
      t[a].apply(this, n);
  }
};
je.prototype.on = je.prototype.addListener = Pt.prototype.addEventListener;
je.prototype.removeListener = Pt.prototype.removeEventListener;
V.EventEmitter = je;
var or = { exports: {} }, zr = v.WebSocket || v.MozWebSocket;
zr ? or.exports = function(t) {
  return new zr(t);
} : or.exports = void 0;
var Co = or.exports, Rn = ke, So = oe, xo = $, jn = V.EventEmitter, kn = Co, pe = function() {
};
process.env.NODE_ENV !== "production" && (pe = W()("sockjs-client:websocket"));
function xe(e, t, r) {
  if (!xe.enabled())
    throw new Error("Transport created when disabled");
  jn.call(this), pe("constructor", e);
  var n = this, i = So.addPath(e, "/websocket");
  i.slice(0, 5) === "https" ? i = "wss" + i.slice(5) : i = "ws" + i.slice(4), this.url = i, this.ws = new kn(this.url, [], r), this.ws.onmessage = function(a) {
    pe("message event", a.data), n.emit("message", a.data);
  }, this.unloadRef = Rn.unloadAdd(function() {
    pe("unload"), n.ws.close();
  }), this.ws.onclose = function(a) {
    pe("close event", a.code, a.reason), n.emit("close", a.code, a.reason), n._cleanup();
  }, this.ws.onerror = function(a) {
    pe("error event", a), n.emit("close", 1006, "WebSocket connection broken"), n._cleanup();
  };
}
xo(xe, jn);
xe.prototype.send = function(e) {
  var t = "[" + e + "]";
  pe("send", t), this.ws.send(t);
};
xe.prototype.close = function() {
  pe("close");
  var e = this.ws;
  this._cleanup(), e && e.close();
};
xe.prototype._cleanup = function() {
  pe("_cleanup");
  var e = this.ws;
  e && (e.onmessage = e.onclose = e.onerror = null), Rn.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners();
};
xe.enabled = function() {
  return pe("enabled"), !!kn;
};
xe.transportName = "websocket";
xe.roundTrips = 2;
var Oo = xe, To = $, $n = V.EventEmitter, me = function() {
};
process.env.NODE_ENV !== "production" && (me = W()("sockjs-client:buffered-sender"));
function Ae(e, t) {
  me(e), $n.call(this), this.sendBuffer = [], this.sender = t, this.url = e;
}
To(Ae, $n);
Ae.prototype.send = function(e) {
  me("send", e), this.sendBuffer.push(e), this.sendStop || this.sendSchedule();
};
Ae.prototype.sendScheduleWait = function() {
  me("sendScheduleWait");
  var e = this, t;
  this.sendStop = function() {
    me("sendStop"), e.sendStop = null, clearTimeout(t);
  }, t = setTimeout(function() {
    me("timeout"), e.sendStop = null, e.sendSchedule();
  }, 25);
};
Ae.prototype.sendSchedule = function() {
  me("sendSchedule", this.sendBuffer.length);
  var e = this;
  if (this.sendBuffer.length > 0) {
    var t = "[" + this.sendBuffer.join(",") + "]";
    this.sendStop = this.sender(this.url, t, function(r) {
      e.sendStop = null, r ? (me("error", r), e.emit("close", r.code || 1006, "Sending error: " + r), e.close()) : e.sendScheduleWait();
    }), this.sendBuffer = [];
  }
};
Ae.prototype._cleanup = function() {
  me("_cleanup"), this.removeAllListeners();
};
Ae.prototype.close = function() {
  me("close"), this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null);
};
var Ro = Ae, jo = $, Fn = V.EventEmitter, Je = function() {
};
process.env.NODE_ENV !== "production" && (Je = W()("sockjs-client:polling"));
function It(e, t, r) {
  Je(t), Fn.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = r, this._scheduleReceiver();
}
jo(It, Fn);
It.prototype._scheduleReceiver = function() {
  Je("_scheduleReceiver");
  var e = this, t = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
  t.on("message", function(r) {
    Je("message", r), e.emit("message", r);
  }), t.once("close", function(r, n) {
    Je("close", r, n, e.pollIsClosing), e.poll = t = null, e.pollIsClosing || (n === "network" ? e._scheduleReceiver() : (e.emit("close", r || 1006, n), e.removeAllListeners()));
  });
};
It.prototype.abort = function() {
  Je("abort"), this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort();
};
var ko = It, $o = $, Fo = oe, mr = Ro, No = ko, it = function() {
};
process.env.NODE_ENV !== "production" && (it = W()("sockjs-client:sender-receiver"));
function br(e, t, r, n, i) {
  var a = Fo.addPath(e, t);
  it(a);
  var u = this;
  mr.call(this, e, r), this.poll = new No(n, a, i), this.poll.on("message", function(c) {
    it("poll message", c), u.emit("message", c);
  }), this.poll.once("close", function(c, f) {
    it("poll close", c, f), u.poll = null, u.emit("close", c, f), u.close();
  });
}
$o(br, mr);
br.prototype.close = function() {
  mr.prototype.close.call(this), it("close"), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null);
};
var Nn = br, Po = $, Io = oe, Pn = Nn, jt = function() {
};
process.env.NODE_ENV !== "production" && (jt = W()("sockjs-client:ajax-based"));
function Ao(e) {
  return function(t, r, n) {
    jt("create ajax sender", t, r);
    var i = {};
    typeof r == "string" && (i.headers = { "Content-type": "text/plain" });
    var a = Io.addPath(t, "/xhr_send"), u = new e("POST", a, r, i);
    return u.once("finish", function(c) {
      if (jt("finish", c), u = null, c !== 200 && c !== 204)
        return n(new Error("http status " + c));
      n();
    }), function() {
      jt("abort"), u.close(), u = null;
      var c = new Error("Aborted");
      c.code = 1e3, n(c);
    };
  };
}
function In(e, t, r, n) {
  Pn.call(this, e, t, Ao(n), r, n);
}
Po(In, Pn);
var Ye = In, Lo = $, An = V.EventEmitter, Ce = function() {
};
process.env.NODE_ENV !== "production" && (Ce = W()("sockjs-client:receiver:xhr"));
function lt(e, t) {
  Ce(e), An.call(this);
  var r = this;
  this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function(n, i) {
    Ce("finish", n, i), r._chunkHandler(n, i), r.xo = null;
    var a = n === 200 ? "network" : "permanent";
    Ce("close", a), r.emit("close", null, a), r._cleanup();
  });
}
Lo(lt, An);
lt.prototype._chunkHandler = function(e, t) {
  if (Ce("_chunkHandler", e), !(e !== 200 || !t))
    for (var r = -1; ; this.bufferPosition += r + 1) {
      var n = t.slice(this.bufferPosition);
      if (r = n.indexOf(`
`), r === -1)
        break;
      var i = n.slice(0, r);
      i && (Ce("message", i), this.emit("message", i));
    }
};
lt.prototype._cleanup = function() {
  Ce("_cleanup"), this.removeAllListeners();
};
lt.prototype.abort = function() {
  Ce("abort"), this.xo && (this.xo.close(), Ce("close"), this.emit("close", null, "user"), this.xo = null), this._cleanup();
};
var At = lt, Ln = V.EventEmitter, Do = $, Dn = ke, Uo = oe, at = v.XMLHttpRequest, K = function() {
};
process.env.NODE_ENV !== "production" && (K = W()("sockjs-client:browser:xhr"));
function ge(e, t, r, n) {
  K(e, t);
  var i = this;
  Ln.call(this), setTimeout(function() {
    i._start(e, t, r, n);
  }, 0);
}
Do(ge, Ln);
ge.prototype._start = function(e, t, r, n) {
  var i = this;
  try {
    this.xhr = new at();
  } catch {
  }
  if (!this.xhr) {
    K("no xhr"), this.emit("finish", 0, "no xhr support"), this._cleanup();
    return;
  }
  t = Uo.addQuery(t, "t=" + +/* @__PURE__ */ new Date()), this.unloadRef = Dn.unloadAdd(function() {
    K("unload cleanup"), i._cleanup(!0);
  });
  try {
    this.xhr.open(e, t, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
      K("xhr timeout"), i.emit("finish", 0, ""), i._cleanup(!1);
    });
  } catch (u) {
    K("exception", u), this.emit("finish", 0, ""), this._cleanup(!1);
    return;
  }
  if ((!n || !n.noCredentials) && ge.supportsCORS && (K("withCredentials"), this.xhr.withCredentials = !0), n && n.headers)
    for (var a in n.headers)
      this.xhr.setRequestHeader(a, n.headers[a]);
  this.xhr.onreadystatechange = function() {
    if (i.xhr) {
      var u = i.xhr, c, f;
      switch (K("readyState", u.readyState), u.readyState) {
        case 3:
          try {
            f = u.status, c = u.responseText;
          } catch {
          }
          K("status", f), f === 1223 && (f = 204), f === 200 && c && c.length > 0 && (K("chunk"), i.emit("chunk", f, c));
          break;
        case 4:
          f = u.status, K("status", f), f === 1223 && (f = 204), (f === 12005 || f === 12029) && (f = 0), K("finish", f, u.responseText), i.emit("finish", f, u.responseText), i._cleanup(!1);
          break;
      }
    }
  };
  try {
    i.xhr.send(r);
  } catch {
    i.emit("finish", 0, ""), i._cleanup(!1);
  }
};
ge.prototype._cleanup = function(e) {
  if (K("cleanup"), !!this.xhr) {
    if (this.removeAllListeners(), Dn.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {
    }, this.xhr.ontimeout && (this.xhr.ontimeout = null), e)
      try {
        this.xhr.abort();
      } catch {
      }
    this.unloadRef = this.xhr = null;
  }
};
ge.prototype.close = function() {
  K("close"), this._cleanup(!0);
};
ge.enabled = !!at;
var Kr = ["Active"].concat("Object").join("X");
!ge.enabled && Kr in v && (K("overriding xmlhttprequest"), at = function() {
  try {
    return new v[Kr]("Microsoft.XMLHTTP");
  } catch {
    return null;
  }
}, ge.enabled = !!new at());
var Un = !1;
try {
  Un = "withCredentials" in new at();
} catch {
}
ge.supportsCORS = Un;
var Mn = ge, Mo = $, kt = Mn;
function gr(e, t, r, n) {
  kt.call(this, e, t, r, n);
}
Mo(gr, kt);
gr.enabled = kt.enabled && kt.supportsCORS;
var Lt = gr, qo = $, yr = Mn;
function Er(e, t, r) {
  yr.call(this, e, t, r, {
    noCredentials: !0
  });
}
qo(Er, yr);
Er.enabled = yr.enabled;
var ft = Er, ht = {
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
}, Wo = $, qn = Ye, Ho = At, sr = Lt, Bo = ft, Xo = ht;
function ze(e) {
  if (!Bo.enabled && !sr.enabled)
    throw new Error("Transport created when disabled");
  qn.call(this, e, "/xhr_streaming", Ho, sr);
}
Wo(ze, qn);
ze.enabled = function(e) {
  return e.nullOrigin || Xo.isOpera() ? !1 : sr.enabled;
};
ze.transportName = "xhr-streaming";
ze.roundTrips = 2;
ze.needBody = !!v.document;
var Jo = ze, Wn = V.EventEmitter, Vo = $, Hn = ke, Go = ht, Yo = oe, _e = function() {
};
process.env.NODE_ENV !== "production" && (_e = W()("sockjs-client:sender:xdr"));
function Le(e, t, r) {
  _e(e, t);
  var n = this;
  Wn.call(this), setTimeout(function() {
    n._start(e, t, r);
  }, 0);
}
Vo(Le, Wn);
Le.prototype._start = function(e, t, r) {
  _e("_start");
  var n = this, i = new v.XDomainRequest();
  t = Yo.addQuery(t, "t=" + +/* @__PURE__ */ new Date()), i.onerror = function() {
    _e("onerror"), n._error();
  }, i.ontimeout = function() {
    _e("ontimeout"), n._error();
  }, i.onprogress = function() {
    _e("progress", i.responseText), n.emit("chunk", 200, i.responseText);
  }, i.onload = function() {
    _e("load"), n.emit("finish", 200, i.responseText), n._cleanup(!1);
  }, this.xdr = i, this.unloadRef = Hn.unloadAdd(function() {
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
  if (_e("cleanup", e), !!this.xdr) {
    if (this.removeAllListeners(), Hn.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e)
      try {
        this.xdr.abort();
      } catch {
      }
    this.unloadRef = this.xdr = null;
  }
};
Le.prototype.close = function() {
  _e("close"), this._cleanup(!0);
};
Le.enabled = !!(v.XDomainRequest && Go.hasDomain());
var wr = Le, zo = $, Bn = Ye, Ko = At, ar = wr;
function dt(e) {
  if (!ar.enabled)
    throw new Error("Transport created when disabled");
  Bn.call(this, e, "/xhr_streaming", Ko, ar);
}
zo(dt, Bn);
dt.enabled = function(e) {
  return e.cookie_needed || e.nullOrigin ? !1 : ar.enabled && e.sameScheme;
};
dt.transportName = "xdr-streaming";
dt.roundTrips = 2;
var Xn = dt, Jn = v.EventSource, Qo = $, Vn = V.EventEmitter, Zo = Jn, Pe = function() {
};
process.env.NODE_ENV !== "production" && (Pe = W()("sockjs-client:receiver:eventsource"));
function pt(e) {
  Pe(e), Vn.call(this);
  var t = this, r = this.es = new Zo(e);
  r.onmessage = function(n) {
    Pe("message", n.data), t.emit("message", decodeURI(n.data));
  }, r.onerror = function(n) {
    Pe("error", r.readyState, n);
    var i = r.readyState !== 2 ? "network" : "permanent";
    t._cleanup(), t._close(i);
  };
}
Qo(pt, Vn);
pt.prototype.abort = function() {
  Pe("abort"), this._cleanup(), this._close("user");
};
pt.prototype._cleanup = function() {
  Pe("cleanup");
  var e = this.es;
  e && (e.onmessage = e.onerror = null, e.close(), this.es = null);
};
pt.prototype._close = function(e) {
  Pe("close", e);
  var t = this;
  setTimeout(function() {
    t.emit("close", null, e), t.removeAllListeners();
  }, 200);
};
var es = pt, ts = $, Gn = Ye, rs = es, ns = Lt, is = Jn;
function Ke(e) {
  if (!Ke.enabled())
    throw new Error("Transport created when disabled");
  Gn.call(this, e, "/eventsource", rs, ns);
}
ts(Ke, Gn);
Ke.enabled = function() {
  return !!is;
};
Ke.transportName = "eventsource";
Ke.roundTrips = 2;
var Qr = Ke, Gt, Zr;
function Yn() {
  return Zr || (Zr = 1, Gt = "1.6.1"), Gt;
}
var zn = { exports: {} };
(function(e) {
  var t = ke, r = ht, n = function() {
  };
  process.env.NODE_ENV !== "production" && (n = W()("sockjs-client:utils:iframe")), e.exports = {
    WPrefix: "_jp",
    currentWindowId: null,
    polluteGlobalNamespace: function() {
      e.exports.WPrefix in v || (v[e.exports.WPrefix] = {});
    },
    postMessage: function(i, a) {
      v.parent !== v ? v.parent.postMessage(JSON.stringify({
        windowId: e.exports.currentWindowId,
        type: i,
        data: a || ""
      }), "*") : n("Cannot postMessage, no parent window.", i, a);
    },
    createIframe: function(i, a) {
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
      }, b = function(x, _) {
        n("post", x, _), setTimeout(function() {
          try {
            u && u.contentWindow && u.contentWindow.postMessage(x, _);
          } catch {
          }
        }, 0);
      };
      return u.src = i, u.style.display = "none", u.style.position = "absolute", u.onerror = function() {
        s("onerror");
      }, u.onload = function() {
        n("onload"), clearTimeout(c), c = setTimeout(function() {
          s("onload timeout");
        }, 2e3);
      }, v.document.body.appendChild(u), c = setTimeout(function() {
        s("timeout");
      }, 15e3), f = t.unloadAdd(l), {
        post: b,
        cleanup: l,
        loaded: w
      };
    },
    createHtmlfile: function(i, a) {
      var u = ["Active"].concat("Object").join("X"), c = new v[u]("htmlfile"), f, w, l, s = function() {
        clearTimeout(f), l.onerror = null;
      }, b = function() {
        c && (s(), t.unloadDel(w), l.parentNode.removeChild(l), l = c = null, CollectGarbage());
      }, x = function(D) {
        n("onerror", D), c && (b(), a(D));
      }, _ = function(D, U) {
        try {
          setTimeout(function() {
            l && l.contentWindow && l.contentWindow.postMessage(D, U);
          }, 0);
        } catch {
        }
      };
      c.open(), c.write('<html><script>document.domain="' + v.document.domain + '";<\/script></html>'), c.close(), c.parentWindow[e.exports.WPrefix] = v[e.exports.WPrefix];
      var B = c.createElement("div");
      return c.body.appendChild(B), l = c.createElement("iframe"), B.appendChild(l), l.src = i, l.onerror = function() {
        x("onerror");
      }, f = setTimeout(function() {
        x("timeout");
      }, 15e3), w = t.unloadAdd(b), {
        post: _,
        cleanup: b,
        loaded: s
      };
    }
  }, e.exports.iframeEnabled = !1, v.document && (e.exports.iframeEnabled = (typeof v.postMessage == "function" || typeof v.postMessage == "object") && !r.isKonqueror());
})(zn);
var vt = zn.exports, os = $, Kn = V.EventEmitter, ss = Yn(), ur = oe, Qn = vt, Zn = ke, as = Ge, ae = function() {
};
process.env.NODE_ENV !== "production" && (ae = W()("sockjs-client:transport:iframe"));
function ye(e, t, r) {
  if (!ye.enabled())
    throw new Error("Transport created when disabled");
  Kn.call(this);
  var n = this;
  this.origin = ur.getOrigin(r), this.baseUrl = r, this.transUrl = t, this.transport = e, this.windowId = as.string(8);
  var i = ur.addPath(r, "/iframe.html") + "#" + this.windowId;
  ae(e, t, i), this.iframeObj = Qn.createIframe(i, function(a) {
    ae("err callback"), n.emit("close", 1006, "Unable to load an iframe (" + a + ")"), n.close();
  }), this.onmessageCallback = this._message.bind(this), Zn.attachEvent("message", this.onmessageCallback);
}
os(ye, Kn);
ye.prototype.close = function() {
  if (ae("close"), this.removeAllListeners(), this.iframeObj) {
    Zn.detachEvent("message", this.onmessageCallback);
    try {
      this.postMessage("c");
    } catch {
    }
    this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null;
  }
};
ye.prototype._message = function(e) {
  if (ae("message", e.data), !ur.isOriginEqual(e.origin, this.origin)) {
    ae("not same origin", e.origin, this.origin);
    return;
  }
  var t;
  try {
    t = JSON.parse(e.data);
  } catch {
    ae("bad json", e.data);
    return;
  }
  if (t.windowId !== this.windowId) {
    ae("mismatched window id", t.windowId, this.windowId);
    return;
  }
  switch (t.type) {
    case "s":
      this.iframeObj.loaded(), this.postMessage("s", JSON.stringify([
        ss,
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
        ae("bad json", t.data);
        return;
      }
      this.emit("close", r[0], r[1]), this.close();
      break;
  }
};
ye.prototype.postMessage = function(e, t) {
  ae("postMessage", e, t), this.iframeObj.post(JSON.stringify({
    windowId: this.windowId,
    type: e,
    data: t || ""
  }), this.origin);
};
ye.prototype.send = function(e) {
  ae("send", e), this.postMessage("m", e);
};
ye.enabled = function() {
  return Qn.iframeEnabled;
};
ye.transportName = "iframe";
ye.roundTrips = 2;
var ei = ye, _r = {
  isObject: function(e) {
    var t = typeof e;
    return t === "function" || t === "object" && !!e;
  },
  extend: function(e) {
    if (!this.isObject(e))
      return e;
    for (var t, r, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }
}, us = $, xt = ei, cs = _r, Yt = function(e) {
  function t(r, n) {
    xt.call(this, e.transportName, r, n);
  }
  return us(t, xt), t.enabled = function(r, n) {
    if (!v.document)
      return !1;
    var i = cs.extend({}, n);
    return i.sameOrigin = !0, e.enabled(i) && xt.enabled();
  }, t.transportName = "iframe-" + e.transportName, t.needBody = !0, t.roundTrips = xt.roundTrips + e.roundTrips - 1, t.facadeTransport = e, t;
}, ls = $, Ne = vt, fs = oe, ti = V.EventEmitter, hs = Ge, de = function() {
};
process.env.NODE_ENV !== "production" && (de = W()("sockjs-client:receiver:htmlfile"));
function ue(e) {
  de(e), ti.call(this);
  var t = this;
  Ne.polluteGlobalNamespace(), this.id = "a" + hs.string(6), e = fs.addQuery(e, "c=" + decodeURIComponent(Ne.WPrefix + "." + this.id)), de("using htmlfile", ue.htmlfileEnabled);
  var r = ue.htmlfileEnabled ? Ne.createHtmlfile : Ne.createIframe;
  v[Ne.WPrefix][this.id] = {
    start: function() {
      de("start"), t.iframeObj.loaded();
    },
    message: function(n) {
      de("message", n), t.emit("message", n);
    },
    stop: function() {
      de("stop"), t._cleanup(), t._close("network");
    }
  }, this.iframeObj = r(e, function() {
    de("callback"), t._cleanup(), t._close("permanent");
  });
}
ls(ue, ti);
ue.prototype.abort = function() {
  de("abort"), this._cleanup(), this._close("user");
};
ue.prototype._cleanup = function() {
  de("_cleanup"), this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete v[Ne.WPrefix][this.id];
};
ue.prototype._close = function(e) {
  de("_close", e), this.emit("close", null, e), this.removeAllListeners();
};
ue.htmlfileEnabled = !1;
var en = ["Active"].concat("Object").join("X");
if (en in v)
  try {
    ue.htmlfileEnabled = !!new v[en]("htmlfile");
  } catch {
  }
ue.enabled = ue.htmlfileEnabled || Ne.iframeEnabled;
var ds = ue, ps = $, cr = ds, vs = ft, ri = Ye;
function mt(e) {
  if (!cr.enabled)
    throw new Error("Transport created when disabled");
  ri.call(this, e, "/htmlfile", cr, vs);
}
ps(mt, ri);
mt.enabled = function(e) {
  return cr.enabled && e.sameOrigin;
};
mt.transportName = "htmlfile";
mt.roundTrips = 2;
var tn = mt, ms = $, ni = Ye, bs = At, lr = Lt, ii = ft;
function bt(e) {
  if (!ii.enabled && !lr.enabled)
    throw new Error("Transport created when disabled");
  ni.call(this, e, "/xhr", bs, lr);
}
ms(bt, ni);
bt.enabled = function(e) {
  return e.nullOrigin ? !1 : ii.enabled && e.sameOrigin ? !0 : lr.enabled;
};
bt.transportName = "xhr-polling";
bt.roundTrips = 2;
var rn = bt, gs = $, oi = Ye, ys = Xn, Es = At, nn = wr;
function gt(e) {
  if (!nn.enabled)
    throw new Error("Transport created when disabled");
  oi.call(this, e, "/xhr", Es, nn);
}
gs(gt, oi);
gt.enabled = ys.enabled;
gt.transportName = "xdr-polling";
gt.roundTrips = 2;
var ws = gt, ot = vt, si = Ge, _s = ht, Cs = oe, Ss = $, ai = V.EventEmitter, ne = function() {
};
process.env.NODE_ENV !== "production" && (ne = W()("sockjs-client:receiver:jsonp"));
function ie(e) {
  ne(e);
  var t = this;
  ai.call(this), ot.polluteGlobalNamespace(), this.id = "a" + si.string(6);
  var r = Cs.addQuery(e, "c=" + encodeURIComponent(ot.WPrefix + "." + this.id));
  v[ot.WPrefix][this.id] = this._callback.bind(this), this._createScript(r), this.timeoutId = setTimeout(function() {
    ne("timeout"), t._abort(new Error("JSONP script loaded abnormally (timeout)"));
  }, ie.timeout);
}
Ss(ie, ai);
ie.prototype.abort = function() {
  if (ne("abort"), v[ot.WPrefix][this.id]) {
    var e = new Error("JSONP user aborted read");
    e.code = 1e3, this._abort(e);
  }
};
ie.timeout = 35e3;
ie.scriptErrorTimeout = 1e3;
ie.prototype._callback = function(e) {
  ne("_callback", e), this._cleanup(), !this.aborting && (e && (ne("message", e), this.emit("message", e)), this.emit("close", null, "network"), this.removeAllListeners());
};
ie.prototype._abort = function(e) {
  ne("_abort", e), this._cleanup(), this.aborting = !0, this.emit("close", e.code, e.message), this.removeAllListeners();
};
ie.prototype._cleanup = function() {
  if (ne("_cleanup"), clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
    var e = this.script;
    e.parentNode.removeChild(e), e.onreadystatechange = e.onerror = e.onload = e.onclick = null, this.script = null;
  }
  delete v[ot.WPrefix][this.id];
};
ie.prototype._scriptError = function() {
  ne("_scriptError");
  var e = this;
  this.errorTimer || (this.errorTimer = setTimeout(function() {
    e.loadedOkay || e._abort(new Error("JSONP script loaded abnormally (onerror)"));
  }, ie.scriptErrorTimeout));
};
ie.prototype._createScript = function(e) {
  ne("_createScript", e);
  var t = this, r = this.script = v.document.createElement("script"), n;
  if (r.id = "a" + si.string(8), r.src = e, r.type = "text/javascript", r.charset = "UTF-8", r.onerror = this._scriptError.bind(this), r.onload = function() {
    ne("onload"), t._abort(new Error("JSONP script loaded abnormally (onload)"));
  }, r.onreadystatechange = function() {
    if (ne("onreadystatechange", r.readyState), /loaded|closed/.test(r.readyState)) {
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
    if (_s.isOpera())
      n = this.script2 = v.document.createElement("script"), n.text = "try{var a = document.getElementById('" + r.id + "'); if(a)a.onerror();}catch(x){};", r.async = n.async = !1;
    else {
      try {
        r.htmlFor = r.id, r.event = "onclick";
      } catch {
      }
      r.async = !0;
    }
  typeof r.async < "u" && (r.async = !0);
  var i = v.document.getElementsByTagName("head")[0];
  i.insertBefore(r, i.firstChild), n && i.insertBefore(n, i.firstChild);
};
var xs = ie, Os = Ge, on = oe, he = function() {
};
process.env.NODE_ENV !== "production" && (he = W()("sockjs-client:sender:jsonp"));
var Q, st;
function Ts(e) {
  he("createIframe", e);
  try {
    return v.document.createElement('<iframe name="' + e + '">');
  } catch {
    var t = v.document.createElement("iframe");
    return t.name = e, t;
  }
}
function Rs() {
  he("createForm"), Q = v.document.createElement("form"), Q.style.display = "none", Q.style.position = "absolute", Q.method = "POST", Q.enctype = "application/x-www-form-urlencoded", Q.acceptCharset = "UTF-8", st = v.document.createElement("textarea"), st.name = "d", Q.appendChild(st), v.document.body.appendChild(Q);
}
var js = function(e, t, r) {
  he(e, t), Q || Rs();
  var n = "a" + Os.string(8);
  Q.target = n, Q.action = on.addQuery(on.addPath(e, "/jsonp_send"), "i=" + n);
  var i = Ts(n);
  i.id = n, i.style.display = "none", Q.appendChild(i);
  try {
    st.value = t;
  } catch {
  }
  Q.submit();
  var a = function(u) {
    he("completed", n, u), i.onerror && (i.onreadystatechange = i.onerror = i.onload = null, setTimeout(function() {
      he("cleaning up", n), i.parentNode.removeChild(i), i = null;
    }, 500), st.value = "", r(u));
  };
  return i.onerror = function() {
    he("onerror", n), a();
  }, i.onload = function() {
    he("onload", n), a();
  }, i.onreadystatechange = function(u) {
    he("onreadystatechange", n, i.readyState, u), i.readyState === "complete" && a();
  }, function() {
    he("aborted", n), a(new Error("Aborted"));
  };
}, ks = $, ui = Nn, $s = xs, Fs = js;
function De(e) {
  if (!De.enabled())
    throw new Error("Transport created when disabled");
  ui.call(this, e, "/jsonp", Fs, $s);
}
ks(De, ui);
De.enabled = function() {
  return !!v.document;
};
De.transportName = "jsonp-polling";
De.roundTrips = 1;
De.needBody = !0;
var Ns = De, Ps = [
  // streaming transports
  Oo,
  Jo,
  Xn,
  Qr,
  Yt(Qr),
  tn,
  Yt(tn),
  rn,
  ws,
  Yt(rn),
  Ns
], ut = Array.prototype, Cr = Object.prototype, Is = Function.prototype, ct = String.prototype, zt = ut.slice, Sr = Cr.toString, ci = function(e) {
  return Cr.toString.call(e) === "[object Function]";
}, As = function(t) {
  return Sr.call(t) === "[object Array]";
}, li = function(t) {
  return Sr.call(t) === "[object String]";
}, Ls = Object.defineProperty && function() {
  try {
    return Object.defineProperty({}, "x", {}), !0;
  } catch {
    return !1;
  }
}(), fr;
Ls ? fr = function(e, t, r, n) {
  !n && t in e || Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: !0,
    value: r
  });
} : fr = function(e, t, r, n) {
  !n && t in e || (e[t] = r);
};
var yt = function(e, t, r) {
  for (var n in t)
    Cr.hasOwnProperty.call(t, n) && fr(e, n, t[n], r);
}, fi = function(e) {
  if (e == null)
    throw new TypeError("can't convert " + e + " to object");
  return Object(e);
};
function Ds(e) {
  var t = +e;
  return t !== t ? t = 0 : t !== 0 && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t;
}
function Us(e) {
  return e >>> 0;
}
function Kt() {
}
yt(Is, {
  bind: function(t) {
    var r = this;
    if (!ci(r))
      throw new TypeError("Function.prototype.bind called on incompatible " + r);
    for (var n = zt.call(arguments, 1), i = function() {
      if (this instanceof f) {
        var w = r.apply(
          this,
          n.concat(zt.call(arguments))
        );
        return Object(w) === w ? w : this;
      } else
        return r.apply(
          t,
          n.concat(zt.call(arguments))
        );
    }, a = Math.max(0, r.length - n.length), u = [], c = 0; c < a; c++)
      u.push("$" + c);
    var f = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this, arguments); }")(i);
    return r.prototype && (Kt.prototype = r.prototype, f.prototype = new Kt(), Kt.prototype = null), f;
  }
});
yt(Array, { isArray: As });
var sn = Object("a"), hi = sn[0] !== "a" || !(0 in sn), Ms = function(t) {
  var r = !0, n = !0;
  return t && (t.call("foo", function(i, a, u) {
    typeof u != "object" && (r = !1);
  }), t.call([1], function() {
    n = typeof this == "string";
  }, "x")), !!t && r && n;
};
yt(ut, {
  forEach: function(t) {
    var r = fi(this), n = hi && li(this) ? this.split("") : r, i = arguments[1], a = -1, u = n.length >>> 0;
    if (!ci(t))
      throw new TypeError();
    for (; ++a < u; )
      a in n && t.call(i, n[a], a, r);
  }
}, !Ms(ut.forEach));
var qs = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
yt(ut, {
  indexOf: function(t) {
    var r = hi && li(this) ? this.split("") : fi(this), n = r.length >>> 0;
    if (!n)
      return -1;
    var i = 0;
    for (arguments.length > 1 && (i = Ds(arguments[1])), i = i >= 0 ? i : Math.max(0, n + i); i < n; i++)
      if (i in r && r[i] === t)
        return i;
    return -1;
  }
}, qs);
var an = ct.split;
"ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
  var e = /()??/.exec("")[1] === void 0;
  ct.split = function(t, r) {
    var n = this;
    if (t === void 0 && r === 0)
      return [];
    if (Sr.call(t) !== "[object RegExp]")
      return an.call(this, t, r);
    var i = [], a = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + // Proposed for ES6
    (t.sticky ? "y" : ""), u = 0, c, f, w, l;
    for (t = new RegExp(t.source, a + "g"), n += "", e || (c = new RegExp("^" + t.source + "$(?!\\s)", a)), r = r === void 0 ? -1 >>> 0 : (
      // Math.pow(2, 32) - 1
      Us(r)
    ); (f = t.exec(n)) && (w = f.index + f[0].length, !(w > u && (i.push(n.slice(u, f.index)), !e && f.length > 1 && f[0].replace(c, function() {
      for (var s = 1; s < arguments.length - 2; s++)
        arguments[s] === void 0 && (f[s] = void 0);
    }), f.length > 1 && f.index < n.length && ut.push.apply(i, f.slice(1)), l = f[0].length, u = w, i.length >= r))); )
      t.lastIndex === f.index && t.lastIndex++;
    return u === n.length ? (l || !t.test("")) && i.push("") : i.push(n.slice(u)), i.length > r ? i.slice(0, r) : i;
  };
}() : "0".split(void 0, 0).length && (ct.split = function(t, r) {
  return t === void 0 && r === 0 ? [] : an.call(this, t, r);
});
var Ws = ct.substr, Hs = "".substr && "0b".substr(-1) !== "b";
yt(ct, {
  substr: function(t, r) {
    return Ws.call(
      this,
      t < 0 && (t = this.length + t) < 0 ? 0 : t,
      r
    );
  }
}, Hs);
var Ot = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g, Qt, Bs = function(e) {
  var t, r = {}, n = [];
  for (t = 0; t < 65536; t++)
    n.push(String.fromCharCode(t));
  return e.lastIndex = 0, n.join("").replace(e, function(i) {
    return r[i] = "\\u" + ("0000" + i.charCodeAt(0).toString(16)).slice(-4), "";
  }), e.lastIndex = 0, r;
}, Xs = {
  quote: function(e) {
    var t = JSON.stringify(e);
    return Ot.lastIndex = 0, Ot.test(t) ? (Qt || (Qt = Bs(Ot)), t.replace(Ot, function(r) {
      return Qt[r];
    })) : t;
  }
}, tt = function() {
};
process.env.NODE_ENV !== "production" && (tt = W()("sockjs-client:utils:transport"));
var Js = function(e) {
  return {
    filterToEnabled: function(t, r) {
      var n = {
        main: [],
        facade: []
      };
      return t ? typeof t == "string" && (t = [t]) : t = [], e.forEach(function(i) {
        if (i) {
          if (i.transportName === "websocket" && r.websocket === !1) {
            tt("disabled from server", "websocket");
            return;
          }
          if (t.length && t.indexOf(i.transportName) === -1) {
            tt("not in whitelist", i.transportName);
            return;
          }
          i.enabled(r) ? (tt("enabled", i.transportName), n.main.push(i), i.facadeTransport && n.facade.push(i.facadeTransport)) : tt("disabled", i.transportName);
        }
      }), n;
    }
  };
}, hr = {};
["log", "debug", "warn"].forEach(function(e) {
  var t;
  try {
    t = v.console && v.console[e] && v.console[e].apply;
  } catch {
  }
  hr[e] = t ? function() {
    return v.console[e].apply(v.console, arguments);
  } : e === "log" ? function() {
  } : hr.log;
});
var Vs = hr;
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
var xr = Ue, di = v.location || {
  origin: "http://localhost:80",
  protocol: "http:",
  host: "localhost",
  port: 80,
  href: "http://localhost/",
  hash: ""
}, Gs = $, pi = xr;
function vi() {
  pi.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = "";
}
Gs(vi, pi);
var Ys = vi, zs = $, mi = xr;
function bi(e) {
  mi.call(this), this.initEvent("message", !1, !1), this.data = e;
}
zs(bi, mi);
var Ks = bi, gi = V.EventEmitter, Qs = $;
function Et() {
  var e = this;
  gi.call(this), this.to = setTimeout(function() {
    e.emit("finish", 200, "{}");
  }, Et.timeout);
}
Qs(Et, gi);
Et.prototype.close = function() {
  clearTimeout(this.to);
};
Et.timeout = 2e3;
var Zs = Et, yi = V.EventEmitter, ea = $, ta = _r, Ei = function() {
};
process.env.NODE_ENV !== "production" && (Ei = W()("sockjs-client:info-ajax"));
function Or(e, t) {
  yi.call(this);
  var r = this, n = +/* @__PURE__ */ new Date();
  this.xo = new t("GET", e), this.xo.once("finish", function(i, a) {
    var u, c;
    if (i === 200) {
      if (c = +/* @__PURE__ */ new Date() - n, a)
        try {
          u = JSON.parse(a);
        } catch {
          Ei("bad json", a);
        }
      ta.isObject(u) || (u = {});
    }
    r.emit("finish", u, c), r.removeAllListeners();
  });
}
ea(Or, yi);
Or.prototype.close = function() {
  this.removeAllListeners(), this.xo.close();
};
var wi = Or, ra = $, _i = V.EventEmitter, na = ft, ia = wi;
function Dt(e) {
  var t = this;
  _i.call(this), this.ir = new ia(e, na), this.ir.once("finish", function(r, n) {
    t.ir = null, t.emit("message", JSON.stringify([r, n]));
  });
}
ra(Dt, _i);
Dt.transportName = "iframe-info-receiver";
Dt.prototype.close = function() {
  this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners();
};
var Ci = Dt, Si = V.EventEmitter, oa = $, sa = ke, xi = ei, aa = Ci, Oi = function() {
};
process.env.NODE_ENV !== "production" && (Oi = W()("sockjs-client:info-iframe"));
function Ut(e, t) {
  var r = this;
  Si.call(this);
  var n = function() {
    var i = r.ifr = new xi(aa.transportName, t, e);
    i.once("message", function(a) {
      if (a) {
        var u;
        try {
          u = JSON.parse(a);
        } catch {
          Oi("bad json", a), r.emit("finish"), r.close();
          return;
        }
        var c = u[0], f = u[1];
        r.emit("finish", c, f);
      }
      r.close();
    }), i.once("close", function() {
      r.emit("finish"), r.close();
    });
  };
  v.document.body ? n() : sa.attachEvent("load", n);
}
oa(Ut, Si);
Ut.enabled = function() {
  return xi.enabled();
};
Ut.prototype.close = function() {
  this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null;
};
var ua = Ut, Ti = V.EventEmitter, ca = $, la = oe, un = wr, cn = Lt, fa = ft, ha = Zs, ln = ua, Tt = wi, Ie = function() {
};
process.env.NODE_ENV !== "production" && (Ie = W()("sockjs-client:info-receiver"));
function Se(e, t) {
  Ie(e);
  var r = this;
  Ti.call(this), setTimeout(function() {
    r.doXhr(e, t);
  }, 0);
}
ca(Se, Ti);
Se._getReceiver = function(e, t, r) {
  return r.sameOrigin ? new Tt(t, fa) : cn.enabled ? new Tt(t, cn) : un.enabled && r.sameScheme ? new Tt(t, un) : ln.enabled() ? new ln(e, t) : new Tt(t, ha);
};
Se.prototype.doXhr = function(e, t) {
  var r = this, n = la.addPath(e, "/info");
  Ie("doXhr", n), this.xo = Se._getReceiver(e, n, t), this.timeoutRef = setTimeout(function() {
    Ie("timeout"), r._cleanup(!1), r.emit("finish");
  }, Se.timeout), this.xo.once("finish", function(i, a) {
    Ie("finish", i, a), r._cleanup(!0), r.emit("finish", i, a);
  });
};
Se.prototype._cleanup = function(e) {
  Ie("_cleanup"), clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null;
};
Se.prototype.close = function() {
  Ie("close"), this.removeAllListeners(), this._cleanup(!1);
};
Se.timeout = 8e3;
var da = Se, Zt, fn;
function pa() {
  if (fn)
    return Zt;
  fn = 1;
  var e = vt;
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
  }, Zt = t, Zt;
}
var er, hn;
function va() {
  if (hn)
    return er;
  hn = 1;
  var e = oe, t = ke, r = pa(), n = Ci, i = vt, a = di, u = function() {
  };
  return process.env.NODE_ENV !== "production" && (u = W()("sockjs-client:iframe-bootstrap")), er = function(c, f) {
    var w = {};
    f.forEach(function(s) {
      s.facadeTransport && (w[s.facadeTransport.transportName] = s.facadeTransport);
    }), w[n.transportName] = n;
    var l;
    c.bootstrap_iframe = function() {
      var s;
      i.currentWindowId = a.hash.slice(1);
      var b = function(x) {
        if (x.source === parent && (typeof l > "u" && (l = x.origin), x.origin === l)) {
          var _;
          try {
            _ = JSON.parse(x.data);
          } catch {
            u("bad json", x.data);
            return;
          }
          if (_.windowId === i.currentWindowId)
            switch (_.type) {
              case "s":
                var B;
                try {
                  B = JSON.parse(_.data);
                } catch {
                  u("bad json", _.data);
                  break;
                }
                var D = B[0], U = B[1], P = B[2], X = B[3];
                if (u(D, U, P, X), D !== c.version)
                  throw new Error('Incompatible SockJS! Main site uses: "' + D + '", the iframe: "' + c.version + '".');
                if (!e.isOriginEqual(P, a.href) || !e.isOriginEqual(X, a.href))
                  throw new Error("Can't connect to different domain from within an iframe. (" + a.href + ", " + P + ", " + X + ")");
                s = new r(new w[U](P, X));
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
      t.attachEvent("message", b), i.postMessage("s");
    };
  }, er;
}
var ma = xn, ba = $, dn = Ge, ga = Xs, rt = oe, ya = ke, Ea = Js, wa = _r, _a = ht, Ca = Vs, Tr = xr, Ri = Tn, Rt = di, Sa = Ys, pn = Ks, xa = da, q = function() {
};
process.env.NODE_ENV !== "production" && (q = W()("sockjs-client:main"));
var ji;
function j(e, t, r) {
  if (!(this instanceof j))
    return new j(e, t, r);
  if (arguments.length < 1)
    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
  Ri.call(this), this.readyState = j.CONNECTING, this.extensions = "", this.protocol = "", r = r || {}, r.protocols_whitelist && Ca.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = r.transports, this._transportOptions = r.transportOptions || {}, this._timeout = r.timeout || 0;
  var n = r.sessionId || 8;
  if (typeof n == "function")
    this._generateSessionId = n;
  else if (typeof n == "number")
    this._generateSessionId = function() {
      return dn.string(n);
    };
  else
    throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
  this._server = r.server || dn.numberString(1e3);
  var i = new ma(e);
  if (!i.host || !i.protocol)
    throw new SyntaxError("The URL '" + e + "' is invalid");
  if (i.hash)
    throw new SyntaxError("The URL must not contain a fragment");
  if (i.protocol !== "http:" && i.protocol !== "https:")
    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + i.protocol + "' is not allowed.");
  var a = i.protocol === "https:";
  if (Rt.protocol === "https:" && !a && !rt.isLoopbackAddr(i.hostname))
    throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
  t ? Array.isArray(t) || (t = [t]) : t = [];
  var u = t.sort();
  u.forEach(function(f, w) {
    if (!f)
      throw new SyntaxError("The protocols entry '" + f + "' is invalid.");
    if (w < u.length - 1 && f === u[w + 1])
      throw new SyntaxError("The protocols entry '" + f + "' is duplicated.");
  });
  var c = rt.getOrigin(Rt.href);
  this._origin = c ? c.toLowerCase() : null, i.set("pathname", i.pathname.replace(/\/+$/, "")), this.url = i.href, q("using url", this.url), this._urlInfo = {
    nullOrigin: !_a.hasDomain(),
    sameOrigin: rt.isOriginEqual(this.url, Rt.href),
    sameScheme: rt.isSchemeEqual(this.url, Rt.href)
  }, this._ir = new xa(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this));
}
ba(j, Ri);
function ki(e) {
  return e === 1e3 || e >= 3e3 && e <= 4999;
}
j.prototype.close = function(e, t) {
  if (e && !ki(e))
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
  this.readyState === j.OPEN && this._transport.send(ga.quote(e));
};
j.version = Yn();
j.CONNECTING = 0;
j.OPEN = 1;
j.CLOSING = 2;
j.CLOSED = 3;
j.prototype._receiveInfo = function(e, t) {
  if (q("_receiveInfo", t), this._ir = null, !e) {
    this._close(1002, "Cannot connect to server");
    return;
  }
  this._rto = this.countRTO(t), this._transUrl = e.base_url ? e.base_url : this.url, e = wa.extend(e, this._urlInfo), q("info", e);
  var r = ji.filterToEnabled(this._transportsWhitelist, e);
  this._transports = r.main, q(this._transports.length + " enabled transports"), this._connect();
};
j.prototype._connect = function() {
  for (var e = this._transports.shift(); e; e = this._transports.shift()) {
    if (q("attempt", e.transportName), e.needBody && (!v.document.body || typeof v.document.readyState < "u" && v.document.readyState !== "complete" && v.document.readyState !== "interactive")) {
      q("waiting for body"), this._transports.unshift(e), ya.attachEvent("load", this._connect.bind(this));
      return;
    }
    var t = Math.max(this._timeout, this._rto * e.roundTrips || 5e3);
    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), t), q("using timeout", t);
    var r = rt.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()), n = this._transportOptions[e.transportName];
    q("transport url", r);
    var i = new e(r, this._transUrl, n);
    i.on("message", this._transportMessage.bind(this)), i.once("close", this._transportClose.bind(this)), i.transportName = e.transportName, this._transport = i;
    return;
  }
  this._close(2e3, "All transports failed", !1);
};
j.prototype._transportTimeout = function() {
  q("_transportTimeout"), this.readyState === j.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"));
};
j.prototype._transportMessage = function(e) {
  q("_transportMessage", e);
  var t = this, r = e.slice(0, 1), n = e.slice(1), i;
  switch (r) {
    case "o":
      this._open();
      return;
    case "h":
      this.dispatchEvent(new Tr("heartbeat")), q("heartbeat", this.transport);
      return;
  }
  if (n)
    try {
      i = JSON.parse(n);
    } catch {
      q("bad json", n);
    }
  if (typeof i > "u") {
    q("empty payload", n);
    return;
  }
  switch (r) {
    case "a":
      Array.isArray(i) && i.forEach(function(a) {
        q("message", t.transport, a), t.dispatchEvent(new pn(a));
      });
      break;
    case "m":
      q("message", this.transport, i), this.dispatchEvent(new pn(i));
      break;
    case "c":
      Array.isArray(i) && i.length === 2 && this._close(i[0], i[1], !0);
      break;
  }
};
j.prototype._transportClose = function(e, t) {
  if (q("_transportClose", this.transport, e, t), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), !ki(e) && e !== 2e3 && this.readyState === j.CONNECTING) {
    this._connect();
    return;
  }
  this._close(e, t);
};
j.prototype._open = function() {
  q("_open", this._transport && this._transport.transportName, this.readyState), this.readyState === j.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = j.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new Tr("open")), q("connected", this.transport)) : this._close(1006, "Server lost session");
};
j.prototype._close = function(e, t, r) {
  q("_close", this.transport, e, t, r, this.readyState);
  var n = !1;
  if (this._ir && (n = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === j.CLOSED)
    throw new Error("InvalidStateError: SockJS has already been closed");
  this.readyState = j.CLOSING, setTimeout((function() {
    this.readyState = j.CLOSED, n && this.dispatchEvent(new Tr("error"));
    var i = new Sa();
    i.wasClean = r || !1, i.code = e || 1e3, i.reason = t, this.dispatchEvent(i), this.onmessage = this.onclose = this.onerror = null, q("disconnected");
  }).bind(this), 0);
};
j.prototype.countRTO = function(e) {
  return e > 100 ? 4 * e : 300 + e;
};
var Oa = function(e) {
  return ji = Ea(e), va()(j, e), j;
}, Ta = Ps, Ra = Oa(Ta);
"_sockjs_onload" in v && setTimeout(v._sockjs_onload, 1);
const ja = /* @__PURE__ */ bn(Ra);
class ka {
  constructor(t, r) {
    I(this, "socket");
    I(this, "createSocket", async (t, r) => {
      const n = `${t}/api/events`, i = await io(`${n}/request`);
      this.socket = new ja(n), this.socket.onerror = this.handleError, this.socket.onclose = this.handleClose, this.socket.onopen = () => this.handleOpen(i.token, r);
    });
    I(this, "handleError", (t) => {
      var r;
      t.eventPhase === EventSource.CLOSED ? (r = this.socket) == null || r.close() : console.error("Oops, Something went wrong with the co");
    });
    I(this, "handleClose", (t) => {
      t.code === 1e3 || t.code === 3e3 || console.log("Socket connection closed unexpectedly");
    });
    I(this, "handleOpen", (t, r) => {
      if (!this.socket)
        throw Error("Socket was not created");
      this.socket.send(t), r(this.socket);
    });
    I(this, "closeConnection", () => {
      var t;
      (t = this.socket) == null || t.close(1e3, "client");
    });
    this.createSocket(t, r);
  }
}
class $a {
  constructor(t) {
    I(this, "socket");
    I(this, "listeners", {});
    I(this, "cachedStates", {});
    I(this, "dispatchFeed", (t, r) => {
      if (this.listeners[t] === void 0) {
        console.warn("Feed update was recieved but no feed listener was set up", { feed: t, state: r });
        return;
      }
      this.cachedStates[t] = r, this.listeners[t].forEach((n) => n(r));
    });
    I(this, "handleMessage", (t) => {
      const r = JSON.parse(t.data);
      r.feed && this.dispatchFeed(r.feed, r.state);
    });
    I(this, "setupListener", (t, r) => {
      this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set(), this.socket.send(JSON.stringify({ event: "feed-subscribe", message: { feed: t } }))), this.listeners[t].add(r);
    });
    I(this, "serveCache", (t, r) => {
      const n = this.cachedStates[t];
      n !== void 0 && r(n);
    });
    I(this, "unsubscribe", (t, r) => () => {
      this.listeners[t].delete(r), this.listeners[t].size === 0 && (delete this.listeners[t], this.socket.send(JSON.stringify({ event: "feed-unsubscribe", message: { feed: t } })));
    });
    I(this, "subscribe", (t, r) => (this.setupListener(t, r), this.serveCache(t, r), this.unsubscribe(t, r)));
    I(this, "cleanup", () => {
      this.socket.removeEventListener("message", this.handleMessage), this.listeners = {}, this.cachedStates = {};
    });
    this.socket = t, this.socket.addEventListener("message", (r) => {
      this.handleMessage(r);
    });
  }
}
class Fa {
  constructor(t) {
    I(this, "socket");
    I(this, "listeners", {});
    I(this, "dispatchEvent", (t, r) => {
      this.listeners[t] !== void 0 ? this.listeners[t].forEach((n) => n(r)) : console.debug("Push event was recieved but not caught", { event: t, data: r });
    });
    I(this, "setupListener", (t, r) => {
      this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), this.listeners[t].add(r);
    });
    I(this, "handleMessage", (t) => {
      const r = JSON.parse(t.data);
      this.dispatchEvent(r.event, r.message);
    });
    I(this, "unsubscribe", (t, r) => () => {
      this.listeners[t].delete(r), this.listeners[t].size === 0 && delete this.listeners[t];
    });
    I(this, "subscribe", (t, r) => (this.setupListener(t, r), this.unsubscribe(t, r)));
    this.socket = t, t.addEventListener("message", this.handleMessage), this.handleMessage = this.handleMessage.bind(this), this.subscribe = this.subscribe.bind(this);
  }
  cleanup() {
    this.socket.removeEventListener("message", this.handleMessage), this.listeners = {};
  }
}
const Na = () => (console.warn("EventSubscribe used outside of its Provider"), () => {
  console.warn("Unsubscribe called outside of EventSubscribe Provider");
}), $i = vn(Na);
function Pa({ children: e, socket: t }) {
  const [r, n] = $t(null);
  return Ve(() => (n(new Fa(t)), () => r == null ? void 0 : r.cleanup()), [t]), r ? /* @__PURE__ */ nt.jsx($i.Provider, { value: r.subscribe, children: e }) : null;
}
function Ia() {
  return mn($i);
}
const Aa = () => (console.warn("FeedSubscribe used outside of its Provider"), () => {
  console.warn("Unsubscribe called outside of FeedSubscribe Provider");
}), Fi = vn(Aa);
function La({ children: e, socket: t }) {
  const [r, n] = $t(null);
  return Ve(() => (n(new $a(t)), () => r == null ? void 0 : r.cleanup()), [t]), r ? /* @__PURE__ */ nt.jsx(Fi.Provider, { value: r.subscribe, children: e }) : null;
}
function Da() {
  return mn(Fi);
}
function qa({ serverUrl: e, children: t }) {
  const [r, n] = $t();
  return Ve(() => new ka(e, (a) => {
    n(a);
  }).closeConnection, [e]), r ? /* @__PURE__ */ nt.jsx(La, { socket: r, children: /* @__PURE__ */ nt.jsx(Pa, { socket: r, children: t }) }) : /* @__PURE__ */ nt.jsx("div", { children: "Setting up connection..." });
}
function Wa(e) {
  const t = Da(), [r, n] = $t({ loading: !0 });
  return Ve(() => {
    !r.loading && !r.data && console.error(
      `Data should never be falsy when loading is false. This is most likely due to a backend error, take a look at the following feed: ${e}`
    );
  }, [r]), Ve(() => (n({ loading: !0 }), t(e, (a) => {
    n({ data: a, loading: !1 });
  })), [e, t]), r;
}
function Ha(e, t) {
  const r = Ia();
  Ve(() => r(e, t), [t, e, r]);
}
export {
  qa as ServerSubscriptionProvider,
  Ha as useEvent,
  Wa as useFeed
};
