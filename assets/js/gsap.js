!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (Bt) {
  "use strict";
  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function i(t, e, n) {
    e && r(t.prototype, e), n && r(t, n);
  }
  function o(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function Mt(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function s(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function d(t) {
    var e = 0;
    if ("undefined" != typeof Symbol && null != t[Symbol.iterator])
      return (e = t[Symbol.iterator]()).next.bind(e);
    if (
      Array.isArray(t) ||
      (t = (function (t, e) {
        if (t) {
          if ("string" == typeof t) return s(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && t.constructor ? t.constructor.name : n) ||
            "Set" === n
            ? Array.from(n)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? s(t, e)
            : void 0;
        }
      })(t))
    )
      return function () {
        return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
      };
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function I(t) {
    return !1 !== t;
  }
  function a() {
    return "undefined" != typeof window;
  }
  function A(t) {
    return h(t) || Fe(t);
  }
  function u(t) {
    return (He = k(t, Ye)) && pi;
  }
  function g(t, e) {
    return (t && (Ye[t] = e) && He && (He[t] = e)) || Ye;
  }
  function m() {
    return 0;
  }
  function v(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function b(t) {
    return !!(t._initted || t._startAt || t.add);
  }
  function _(t, e, n, r) {
    Ke.length && !Kt && an(),
      t.render(e, n, r || !!(Kt && e < 0 && b(t))),
      Ke.length && !Kt && an();
  }
  function D(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(Xe).length < 2
      ? e
      : Fe(t)
      ? t.trim()
      : t;
  }
  function w(t) {
    return t;
  }
  function X(t, e) {
    for (var n in e) n in t || (t[n] = e[n]);
    return t;
  }
  function k(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function C(t, e) {
    for (var n in e)
      "__proto__" !== n &&
        "constructor" !== n &&
        "prototype" !== n &&
        (t[n] = Ae(e[n]) ? C(t[n] || (t[n] = {}), e[n]) : e[n]);
    return t;
  }
  function Y(t, e) {
    var n,
      r = {};
    for (n in t) n in e || (r[n] = t[n]);
    return r;
  }
  function O(t) {
    var r,
      e = t.parent || B,
      n = t.keyframes
        ? ((r = Oe(t.keyframes)),
          function (t, e) {
            for (var n in e)
              n in t ||
                ("duration" === n && r) ||
                "ease" === n ||
                (t[n] = e[n]);
          })
        : X;
    if (I(t.inherit))
      for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function E(t, e, n, r, i) {
    void 0 === n && (n = "_first");
    var o,
      s = t[(r = void 0 === r ? "_last" : r)];
    if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
    s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[n]), (t[n] = e)),
      e._next ? (e._next._prev = e) : (t[r] = e),
      (e._prev = s),
      (e.parent = e._dp = t);
  }
  function T(t, e, n, r) {
    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
    var i = e._prev,
      o = e._next;
    i ? (i._next = o) : t[n] === e && (t[n] = o),
      o ? (o._prev = i) : t[r] === e && (t[r] = i),
      (e._next = e._prev = e.parent = null);
  }
  function H(t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  }
  function V(t, e, n, r) {
    t._startAt &&
      (Kt
        ? t._startAt.revert(qe)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, r));
  }
  function j(t) {
    return !t || (t._ts && j(t.parent));
  }
  function W(t) {
    return t._repeat ? q(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function q(t, e) {
    return (e = Math.floor((t = P(t / e)))), t && e === t ? e - 1 : e;
  }
  function U(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function G(t, e) {
    var n;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((n = U(t.rawTime(), e)),
        (!e._dur || at(0, e.totalDuration(), n) - e._tTime > R) &&
          e.render(n, !0)),
      ln(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (n = t; n._dp; )
          0 <= n.rawTime() && n.totalTime(n._tTime), (n = n._dp);
      t._zTime = -R;
    }
  }
  function K(t, e, n, r) {
    return (
      e.parent && H(e),
      (e._start = P(
        (Se(n) ? n : n || t !== B ? ot(t, n, e) : t._time) + e._delay
      )),
      (e._end = P(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      E(t, e, "_first", "_last", t._sort ? "_start" : 0),
      nt(e) || (t._recent = e),
      r || G(t, e),
      t._ts < 0 && cn(t, t._tTime),
      t
    );
  }
  function $(t, e) {
    (Ye.ScrollTrigger || Ve("scrollTrigger", e)) &&
      Ye.ScrollTrigger.create(e, t);
  }
  function Q(t, e, n, r, i) {
    return (
      Gn(t, e, i),
      t._initted
        ? !n &&
          t._pt &&
          !Kt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          te !== Tn.frame
          ? (Ke.push(t), (t._lazy = [i, r]))
          : void 0
        : 1
    );
  }
  function et(t) {
    return (
      (t = t.parent) &&
      t._ts &&
      t._initted &&
      !t._lock &&
      (t.rawTime() < 0 || et(t))
    );
  }
  function nt(t) {
    return "isFromStart" === (t = t.data) || "isStart" === t;
  }
  function rt(t, e, n, r) {
    var i = t._repeat,
      e = P(e) || 0,
      o = t._tTime / t._tDur;
    return (
      o && !r && (t._time *= e / t._dur),
      (t._dur = e),
      (t._tDur = i ? (i < 0 ? 1e10 : P(e * (i + 1) + t._rDelay * i)) : e),
      0 < o && !r && cn(t, (t._tTime = t._tDur * o)),
      t.parent && un(t),
      n || ln(t.parent, t),
      t
    );
  }
  function it(t) {
    return t instanceof Xn ? ln(t) : rt(t, t._dur);
  }
  function ot(t, e, n) {
    var r,
      i,
      o,
      s = t.labels,
      a = t._recent || hn,
      l = t.duration() >= xe ? a.endTime(!1) : t._dur;
    return Fe(e) && (isNaN(e) || e in s)
      ? ((i = e.charAt(0)),
        (o = "%" === e.substr(-1)),
        (r = e.indexOf("=")),
        "<" === i || ">" === i
          ? (0 <= r && (e = e.replace(/=/, "")),
            ("<" === i ? a._start : a.endTime(0 <= a._repeat)) +
              (parseFloat(e.substr(1)) || 0) *
                (o ? (r < 0 ? a : n).totalDuration() / 100 : 1))
          : r < 0
          ? (e in s || (s[e] = l), s[e])
          : ((i = parseFloat(e.charAt(r - 1) + e.substr(r + 1))),
            o && n && (i = (i / 100) * (Oe(n) ? n[0] : n).totalDuration()),
            1 < r ? ot(t, e.substr(0, r - 1), n) + i : l + i))
      : null == e
      ? l
      : +e;
  }
  function st(t, e, n) {
    var r,
      i,
      o = Se(e[1]),
      s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
      a = e[s];
    if ((o && (a.duration = e[1]), (a.parent = n), t)) {
      for (r = a, i = n; i && !("immediateRender" in r); )
        (r = i.vars.defaults || {}), (i = I(i.vars.inherit) && i.parent);
      (a.immediateRender = I(r.immediateRender)),
        t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
    }
    return new N(e[0], a, e[1 + s]);
  }
  function at(t, e, n) {
    return n < t ? t : e < n ? e : n;
  }
  function lt(e, n, t) {
    return pn(t, function (t) {
      return at(e, n, t);
    });
  }
  function ut(n) {
    return (
      (n = mn(n)[0] || je("Invalid scope") || {}),
      function (t) {
        var e = n.current || n.nativeElement || n;
        return mn(
          t,
          e.querySelectorAll
            ? e
            : e === n
            ? je("Invalid scope") || Qt.createElement("div")
            : n
        );
      }
    );
  }
  function ct(t) {
    if (h(t)) return t;
    var f = Ae(t) ? t : { each: t },
      d = kn(f.ease),
      g = f.from || 0,
      m = parseFloat(f.base) || 0,
      v = {},
      t = 0 < g && g < 1,
      _ = isNaN(g) || t,
      D = f.axis,
      y = g,
      x = g;
    return (
      Fe(g)
        ? (y = x = { center: 0.5, edges: 0.5, end: 1 }[g] || 0)
        : !t && _ && ((y = g[0]), (x = g[1])),
      function (t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          h = (n || f).length,
          p = v[h];
        if (!p) {
          if (!(c = "auto" === f.grid ? 0 : (f.grid || [1, xe])[1])) {
            for (
              l = -xe;
              l < (l = n[c++].getBoundingClientRect().left) && c < h;

            );
            c < h && c--;
          }
          for (
            p = v[h] = [],
              r = _ ? Math.min(c, h) * y - 0.5 : g % c,
              i = c === xe ? 0 : _ ? (h * x) / c - 0.5 : (g / c) | 0,
              u = xe,
              a = l = 0;
            a < h;
            a++
          )
            (s = (a % c) - r),
              (o = i - ((a / c) | 0)),
              (p[a] = s = D ? Math.abs("y" === D ? o : s) : Ee(s * s + o * o)),
              l < s && (l = s),
              s < u && (u = s);
          "random" === g && vn(p),
            (p.max = l - u),
            (p.min = u),
            (p.v = h =
              (parseFloat(f.amount) ||
                parseFloat(f.each) *
                  (h < c
                    ? h - 1
                    : D
                    ? "y" === D
                      ? h / c
                      : c
                    : Math.max(c, h / c)) ||
                0) * ("edges" === g ? -1 : 1)),
            (p.b = h < 0 ? m - h : m),
            (p.u = fn(f.amount || f.each) || 0),
            (d = d && h < 0 ? An(d) : d);
        }
        return (
          (h = (p[t] - p.min) / p.max || 0), P(p.b + (d ? d(h) : h) * p.v) + p.u
        );
      }
    );
  }
  function ht(n) {
    var r = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (t) {
      var e = P(Math.round(parseFloat(t) / n) * n * r);
      return (e - (e % 1)) / r + (Se(t) ? 0 : fn(t));
    };
  }
  function pt(l, t) {
    var u,
      c,
      e = Oe(l);
    return (
      !e &&
        Ae(l) &&
        ((u = e = l.radius || xe),
        l.values
          ? ((l = mn(l.values)), (c = !Se(l[0])) && (u *= u))
          : (l = ht(l.increment))),
      pn(
        t,
        e
          ? h(l)
            ? function (t) {
                return (c = l(t)), Math.abs(c - t) <= u ? c : t;
              }
            : function (t) {
                for (
                  var e,
                    n,
                    r = parseFloat(c ? t.x : t),
                    i = parseFloat(c ? t.y : 0),
                    o = xe,
                    s = 0,
                    a = l.length;
                  a--;

                )
                  (e = c
                    ? (e = l[a].x - r) * e + (n = l[a].y - i) * n
                    : Math.abs(l[a] - r)) < o && ((o = e), (s = a));
                return (
                  (s = !u || o <= u ? l[s] : t),
                  c || s === t || Se(t) ? s : s + fn(t)
                );
              }
          : ht(l)
      )
    );
  }
  function ft() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return function (t) {
      return e.reduce(function (t, e) {
        return e(t);
      }, t);
    };
  }
  function dt(e, n) {
    return function (t) {
      return e(parseFloat(t)) + (n || fn(t));
    };
  }
  function gt(t, e, n) {
    return xt(t, e, 0, 1, n);
  }
  function _t(e, n, t) {
    return pn(t, function (t) {
      return e[~~n(t)];
    });
  }
  function Dt(e, t, n) {
    var r = t - e;
    return Oe(e)
      ? _t(e, Dt(0, e.length), t)
      : pn(n, function (t) {
          return ((r + ((t - e) % r)) % r) + e;
        });
  }
  function yt(e, t, n) {
    var r = t - e,
      i = 2 * r;
    return Oe(e)
      ? _t(e, yt(0, e.length - 1), t)
      : pn(n, function (t) {
          return e + (r < (t = (i + ((t - e) % i)) % i || 0) ? i - t : t);
        });
  }
  function xt(e, t, n, r, i) {
    var o = t - e,
      s = r - n;
    return pn(i, function (t) {
      return n + (((t - e) / o) * s || 0);
    });
  }
  function bt(e, n, t, r) {
    var i = isNaN(e + n)
      ? 0
      : function (t) {
          return (1 - t) * e + t * n;
        };
    if (!i) {
      var o,
        s,
        a,
        l,
        u,
        c = Fe(e),
        h = {};
      if ((!0 === t && (r = 1) && (t = null), c))
        (e = { p: e }), (n = { p: n });
      else if (Oe(e) && !Oe(n)) {
        for (a = [], l = e.length, u = l - 2, s = 1; s < l; s++)
          a.push(bt(e[s - 1], e[s]));
        l--,
          (i = function (t) {
            t *= l;
            var e = Math.min(u, ~~t);
            return a[e](t - e);
          }),
          (t = n);
      } else r || (e = k(Oe(e) ? [] : {}, e));
      if (!a) {
        for (o in n) qn.call(h, e, o, "get", n[o]);
        i = function (t) {
          return ar(t, h) || (c ? e.p : e);
        };
      }
    }
    return pn(t, i);
  }
  function wt(t, e, n) {
    var r,
      i,
      o,
      s = t.labels,
      a = xe;
    for (r in s)
      (i = s[r] - e) < 0 == !!n &&
        i &&
        a > (i = Math.abs(i)) &&
        ((o = r), (a = i));
    return o;
  }
  function Ct(t, e, n) {
    var r = t.vars,
      i = r[e],
      o = l,
      s = t._ctx;
    if (i)
      return (
        (e = r[e + "Params"]),
        (r = r.callbackScope || t),
        n && Ke.length && an(),
        s && (l = s),
        (t = e ? i.apply(r, e) : i.call(r)),
        (l = o),
        t
      );
  }
  function At(t) {
    return (
      H(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!Kt),
      t.progress() < 1 && Ct(t, "onInterrupt"),
      t
    );
  }
  function kt(t) {
    if (t)
      if (((t = (!t.name && t.default) || t), a() || t.headless)) {
        var e = t.name,
          n = h(t),
          n =
            e && !n && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          r = {
            init: m,
            render: ar,
            add: qn,
            kill: ur,
            modifier: lr,
            rawVars: 0,
          },
          i = {
            targetTest: 0,
            get: 0,
            getSetter: rr,
            aliases: {},
            register: 0,
          };
        if ((Pn(), t !== n)) {
          if ($e[e]) return;
          X(n, X(Y(t, r), i)),
            k(n.prototype, k(r, Y(t, i))),
            ($e[(n.prop = e)] = n),
            t.targetTest && (tn.push(n), (Ge[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        g(e, n), t.register && t.register(pi, n, hr);
      } else yn.push(t);
  }
  function Ot(t, e, n) {
    return (
      ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
        ? e + (n - e) * t * 6
        : t < 0.5
        ? n
        : 3 * t < 2
        ? e + (n - e) * (2 / 3 - t) * 6
        : e) *
        p +
        0.5) |
      0
    );
  }
  function Yt(t, e, n) {
    var r,
      i,
      o,
      s,
      a = "",
      l = (t + a).match(Cn),
      u = e ? "hsla(" : "rgba(",
      c = 0;
    if (!l) return t;
    if (
      ((l = l.map(function (t) {
        return (
          (t = bn(t, e, 1)) &&
          u +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      n && ((o = wn(t)), (r = n.c).join(a) !== o.c.join(a)))
    )
      for (s = (i = t.replace(Cn, "1").split(Le)).length - 1; c < s; c++)
        a +=
          i[c] +
          (~r.indexOf(c)
            ? l.shift() || u + "0,0,0,0)"
            : (o.length ? o : l.length ? l : n).shift());
    if (!i) for (s = (i = t.split(Cn)).length - 1; c < s; c++) a += i[c] + l[c];
    return a + i[s];
  }
  function Ht(t) {
    var e = t.join(" ");
    if (((Cn.lastIndex = 0), Cn.test(e)))
      return (
        (e = En.test(e)),
        (t[1] = Yt(t[1], e)),
        (t[0] = Yt(t[0], e, wn(t[1]))),
        !0
      );
  }
  function Vt(t, e) {
    for (var n, r = t._first; r; )
      r instanceof Xn
        ? Vt(r, e)
        : !r.vars.yoyoEase ||
          (r._yoyo && r._repeat) ||
          r._yoyo === e ||
          (r.timeline
            ? Vt(r.timeline, e)
            : ((n = r._ease),
              (r._ease = r._yEase),
              (r._yEase = n),
              (r._yoyo = e))),
        (r = r._next);
  }
  function jt(t, e, n, r) {
    var i,
      o = {
        easeIn: e,
        easeOut: (n =
          void 0 === n
            ? function (t) {
                return 1 - e(1 - t);
              }
            : n),
        easeInOut: (r =
          void 0 === r
            ? function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              }
            : r),
      };
    v(t, function (t) {
      for (var e in ((F[t] = Ye[t] = o), (F[(i = t.toLowerCase())] = n), o))
        F[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] =
          F[t + "." + e] = o[e];
    });
  }
  function Wt(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function qt(n, t, e) {
    function r(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Pe((t - o) * s) + 1;
    }
    var i = 1 <= t ? t : 1,
      o =
        ((s = (e || (n ? 0.3 : 0.45)) / (t < 1 ? t : 1)) / be) *
        (Math.asin(1 / i) || 0),
      e =
        "out" === n
          ? r
          : "in" === n
          ? function (t) {
              return 1 - r(1 - t);
            }
          : Wt(r),
      s = be / s;
    return (
      (e.config = function (t, e) {
        return qt(n, t, e);
      }),
      e
    );
  }
  function Ut(e, n) {
    function r(t) {
      return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
    }
    void 0 === n && (n = 1.70158);
    var t =
      "out" === e
        ? r
        : "in" === e
        ? function (t) {
            return 1 - r(1 - t);
          }
        : Wt(r);
    return (
      (t.config = function (t) {
        return Ut(e, t);
      }),
      t
    );
  }
  var Gt,
    Kt,
    l,
    B,
    Zt,
    $t,
    Qt,
    Jt,
    te,
    ee,
    ne,
    re,
    ie,
    oe,
    se,
    ae,
    le,
    ue,
    ce,
    he,
    pe,
    fe,
    de,
    ge,
    me,
    ve,
    _e,
    De = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    ye = { duration: 0.5, overwrite: !1, delay: 0 },
    xe = 1e8,
    R = 1 / xe,
    be = 2 * Math.PI,
    we = be / 4,
    Ce = 0,
    Ee = Math.sqrt,
    Te = Math.cos,
    Pe = Math.sin,
    Fe = function (t) {
      return "string" == typeof t;
    },
    h = function (t) {
      return "function" == typeof t;
    },
    Se = function (t) {
      return "number" == typeof t;
    },
    Me = function (t) {
      return void 0 === t;
    },
    Ae = function (t) {
      return "object" == typeof t;
    },
    ke =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    Oe = Array.isArray,
    Be = /(?:-?\.?\d|\.)+/gi,
    Re = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Le = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ne = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Ie = /[+-]=-?[.\d]+/,
    Xe = /[^,'"\[\]\s]+/gi,
    ze = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ye = {},
    He = {},
    Ve = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    je = function (t, e) {
      return !e && console.warn(t);
    },
    We = { suppressEvents: !0, isStart: !0, kill: !1 },
    qe = { suppressEvents: !0, kill: !1 },
    Ue = { suppressEvents: !0 },
    Ge = {},
    Ke = [],
    Ze = {},
    $e = {},
    Qe = {},
    Je = 30,
    tn = [],
    en = "",
    nn = function (t) {
      var e,
        n,
        r = t[0];
      if ((Ae(r) || h(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
        for (n = tn.length; n-- && !tn[n].targetTest(r); );
        e = tn[n];
      }
      for (n = t.length; n--; )
        (t[n] && (t[n]._gsap || (t[n]._gsap = new Rn(t[n], e)))) ||
          t.splice(n, 1);
      return t;
    },
    rn = function (t) {
      return t._gsap || nn(mn(t))[0]._gsap;
    },
    on = function (t, e, n) {
      return (n = t[e]) && h(n)
        ? t[e]()
        : (Me(n) && t.getAttribute && t.getAttribute(e)) || n;
    },
    L = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    P = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    sn = function (t, e) {
      var n = e.charAt(0),
        e = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === n ? t + e : "-" === n ? t - e : "*" === n ? t * e : t / e
      );
    },
    an = function () {
      var t,
        e,
        n = Ke.length,
        r = Ke.slice(0);
      for (Ze = {}, t = Ke.length = 0; t < n; t++)
        (e = r[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    ln = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
      return t;
    },
    un = function (t) {
      return (t._end = P(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || R) || 0)
      ));
    },
    cn = function (t, e) {
      var n = t._dp;
      return (
        n &&
          n.smoothChildTiming &&
          t._ts &&
          ((t._start = P(
            n._time -
              (0 < t._ts
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          un(t),
          n._dirty || ln(n, t)),
        t
      );
    },
    hn = { _start: 0, endTime: m, totalDuration: m },
    pn = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    fn = function (t, e) {
      return Fe(t) && (e = ze.exec(t)) ? e[1] : "";
    },
    dn = [].slice,
    gn = function (t, e) {
      return (
        t &&
        Ae(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && Ae(t[0]))) &&
        !t.nodeType &&
        t !== Zt
      );
    },
    mn = function (t, e, n) {
      return l && !e && l.selector
        ? l.selector(t)
        : !Fe(t) || n || (!$t && Pn())
        ? Oe(t)
          ? ((r = n),
            void 0 === i && (i = []),
            t.forEach(function (t) {
              return (Fe(t) && !r) || gn(t, 1)
                ? i.push.apply(i, mn(t))
                : i.push(t);
            }) || i)
          : gn(t)
          ? dn.call(t, 0)
          : t
          ? [t]
          : []
        : dn.call((e || Qt).querySelectorAll(t), 0);
      var r, i;
    },
    vn = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    _n = function (t, e, n, r) {
      return pn(Oe(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
        return Oe(t)
          ? t[~~(Math.random() * t.length)]
          : (n = n || 1e-5) &&
              (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                ) *
                  n *
                  r
              ) / r;
      });
    },
    Dn = function (t) {
      for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
        (r = t.indexOf(")", e)),
          (i = "[" === t.charAt(e + 7)),
          (n = t.substr(e + 7, r - e - 7).match(i ? Xe : Be)),
          (s +=
            t.substr(o, e - o) +
            _n(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
          (o = r + 1);
      return s + t.substr(o, t.length - o);
    },
    yn = [],
    p = 255,
    xn = {
      aqua: [0, p, p],
      lime: [0, p, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, p],
      navy: [0, 0, 128],
      white: [p, p, p],
      olive: [128, 128, 0],
      yellow: [p, p, 0],
      orange: [p, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [p, 0, 0],
      pink: [p, 192, 203],
      cyan: [0, p, p],
      transparent: [p, p, p, 0],
    },
    bn = function (t, e, n) {
      var r,
        i,
        o,
        s,
        a,
        l,
        u,
        c = t ? (Se(t) ? [t >> 16, (t >> 8) & p, t & p] : 0) : xn.black;
      if (!c) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xn[t]))
          c = xn[t];
        else if ("#" === t.charAt(0)) {
          if (
            9 ===
            (t =
              t.length < 6
                ? "#" +
                  (r = t.charAt(1)) +
                  r +
                  (i = t.charAt(2)) +
                  i +
                  (o = t.charAt(3)) +
                  o +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : "")
                : t).length
          )
            return [
              (c = parseInt(t.substr(1, 6), 16)) >> 16,
              (c >> 8) & p,
              c & p,
              parseInt(t.substr(7), 16) / 255,
            ];
          c = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & p, t & p];
        } else if ("hsl" === t.substr(0, 3))
          if (((c = u = t.match(Be)), e)) {
            if (~t.indexOf("="))
              return (c = t.match(Re)), n && c.length < 4 && (c[3] = 1), c;
          } else
            (s = (+c[0] % 360) / 360),
              (a = +c[1] / 100),
              (r =
                2 * (l = +c[2] / 100) -
                (i = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
              3 < c.length && (c[3] *= 1),
              (c[0] = Ot(s + 1 / 3, r, i)),
              (c[1] = Ot(s, r, i)),
              (c[2] = Ot(s - 1 / 3, r, i));
        else c = t.match(Be) || xn.transparent;
        c = c.map(Number);
      }
      return (
        e &&
          !u &&
          ((r = c[0] / p),
          (i = c[1] / p),
          (o = c[2] / p),
          (l = ((t = Math.max(r, i, o)) + (e = Math.min(r, i, o))) / 2),
          t === e
            ? (s = a = 0)
            : ((u = t - e),
              (a = 0.5 < l ? u / (2 - t - e) : u / (t + e)),
              (s =
                t === r
                  ? (i - o) / u + (i < o ? 6 : 0)
                  : t === i
                  ? (o - r) / u + 2
                  : (r - i) / u + 4),
              (s *= 60)),
          (c[0] = ~~(s + 0.5)),
          (c[1] = ~~(100 * a + 0.5)),
          (c[2] = ~~(100 * l + 0.5))),
        n && c.length < 4 && (c[3] = 1),
        c
      );
    },
    wn = function (t) {
      var e = [],
        n = [],
        r = -1;
      return (
        t.split(Cn).forEach(function (t) {
          t = t.match(Le) || [];
          e.push.apply(e, t), n.push((r += t.length + 1));
        }),
        (e.c = n),
        e
      );
    },
    Cn = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in xn) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    En = /hsl[a]?\(/,
    Tn =
      ((le = Date.now),
      (ue = 500),
      (ce = 33),
      (he = le()),
      (pe = he),
      (de = fe = 1e3 / 240),
      (me = {
        time: 0,
        frame: 0,
        tick: function () {
          On(!0);
        },
        deltaRatio: function (t) {
          return se / (1e3 / (t || 60));
        },
        wake: function () {
          Jt &&
            (!$t &&
              a() &&
              ((Zt = $t = window),
              (Qt = Zt.document || {}),
              (Ye.gsap = pi),
              (Zt.gsapVersions || (Zt.gsapVersions = [])).push(pi.version),
              u(He || Zt.GreenSockGlobals || (!Zt.gsap && Zt) || {}),
              yn.forEach(kt)),
            (oe =
              "undefined" != typeof requestAnimationFrame &&
              requestAnimationFrame),
            re && me.sleep(),
            (ie =
              oe ||
              function (t) {
                return setTimeout(t, (de - 1e3 * me.time + 1) | 0);
              }),
            (ne = 1),
            On(2));
        },
        sleep: function () {
          (oe ? cancelAnimationFrame : clearTimeout)(re), (ne = 0), (ie = m);
        },
        lagSmoothing: function (t, e) {
          (ue = t || 1 / 0), (ce = Math.min(e || 33, ue));
        },
        fps: function (t) {
          (fe = 1e3 / (t || 240)), (de = 1e3 * me.time + fe);
        },
        add: function (i, t, e) {
          var o = t
            ? function (t, e, n, r) {
                i(t, e, n, r), me.remove(o);
              }
            : i;
          return me.remove(i), ge[e ? "unshift" : "push"](o), Pn(), o;
        },
        remove: function (t, e) {
          ~(e = ge.indexOf(t)) && ge.splice(e, 1) && e <= ae && ae--;
        },
        _listeners: (ge = []),
      })),
    Pn = function () {
      return !ne && Tn.wake();
    },
    F = {},
    Fn = /^[\d.\-M][\d.\-,\s]/,
    Sn = /["']/g,
    Mn = function (t) {
      var e,
        n,
        r,
        i = (t + "").split("("),
        o = F[i[0]];
      return o && 1 < i.length && o.config
        ? o.config.apply(
            null,
            ~t.indexOf("{")
              ? [
                  (function (t) {
                    for (
                      var e,
                        n,
                        r,
                        i = {},
                        o = t.substr(1, t.length - 3).split(":"),
                        s = o[0],
                        a = 1,
                        l = o.length;
                      a < l;
                      a++
                    )
                      (n = o[a]),
                        (e = a !== l - 1 ? n.lastIndexOf(",") : n.length),
                        (r = n.substr(0, e)),
                        (i[s] = isNaN(r) ? r.replace(Sn, "").trim() : +r),
                        (s = n.substr(e + 1).trim());
                    return i;
                  })(i[1]),
                ]
              : ((e = (i = t).indexOf("(") + 1),
                (n = i.indexOf(")")),
                (r = i.indexOf("(", e)),
                i
                  .substring(e, ~r && r < n ? i.indexOf(")", n + 1) : n)
                  .split(",")
                  .map(D))
          )
        : F._CE && Fn.test(t)
        ? F._CE("", t)
        : o;
    },
    An = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    kn = function (t, e) {
      return (t && (h(t) ? t : F[t] || Mn(t))) || e;
    };
  function On(t) {
    var e,
      n,
      r,
      i = le() - pe,
      o = !0 === t;
    if (
      ((ue < i || i < 0) && (he += i - ce),
      (0 < (i = (n = (pe += i) - he) - de) || o) &&
        ((r = ++me.frame),
        (se = n - 1e3 * me.time),
        (me.time = n /= 1e3),
        (de += i + (fe <= i ? 4 : fe - i)),
        (e = 1)),
      o || (re = ie(On)),
      e)
    )
      for (ae = 0; ae < ge.length; ae++) ge[ae](n, se, r, t);
  }
  function Bn(t) {
    return t < _e
      ? ve * t * t
      : t < 0.7272727272727273
      ? ve * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? ve * (t -= 2.25 / 2.75) * t + 0.9375
      : ve * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  v("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var n = e < 5 ? e + 1 : e;
    jt(
      t + ",Power" + (n - 1),
      e
        ? function (t) {
            return Math.pow(t, n);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, n);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, n) / 2
          : 1 - Math.pow(2 * (1 - t), n) / 2;
      }
    );
  }),
    (F.Linear.easeNone = F.none = F.Linear.easeIn),
    jt("Elastic", qt("in"), qt("out"), qt()),
    (ve = 7.5625),
    (_e = 1 / 2.75),
    jt(
      "Bounce",
      function (t) {
        return 1 - Bn(1 - t);
      },
      Bn
    ),
    jt("Expo", function (t) {
      return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
    }),
    jt("Circ", function (t) {
      return -(Ee(1 - t * t) - 1);
    }),
    jt("Sine", function (t) {
      return 1 === t ? 1 : 1 - Te(t * we);
    }),
    jt("Back", Ut("in"), Ut("out"), Ut()),
    (F.SteppedEase =
      F.steps =
      Ye.SteppedEase =
        {
          config: function (t, e) {
            var n = 1 / (t = void 0 === t ? 1 : t),
              r = t + (e ? 0 : 1),
              i = e ? 1 : 0,
              o = 1 - R;
            return function (t) {
              return (((r * at(0, o, t)) | 0) + i) * n;
            };
          },
        }),
    (ye.ease = F["quad.out"]),
    v(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (en += t + "," + t + "Params,");
      }
    );
  var Rn = function (t, e) {
      (this.id = Ce++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : on),
        (this.set = e ? e.getSetter : rr);
    },
    Ln =
      (((t = Nn.prototype).delay = function (t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (t.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            rt(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (t, e) {
        if ((Pn(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (cn(this, t), n._dp && !n.parent && G(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (0 <= n._ts
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            K(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === R) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), _(this, t, e)),
          this
        );
      }),
      (t.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + W(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (t.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : 0 <= this.rawTime() && this._initted
          ? 1
          : 0;
      }),
      (t.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                W(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : 0 < this.rawTime()
          ? 1
          : 0;
      }),
      (t.iteration = function (t, e) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * n, e)
          : this._repeat
          ? q(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (t, e) {
        if (!arguments.length) return this._rts === -R ? 0 : this._rts;
        if (this._rts === t) return this;
        for (
          var n =
              this.parent && this._ts
                ? U(this.parent._time, this)
                : this._tTime,
            t =
              ((this._rts = +t || 0),
              (this._ts = this._ps || t === -R ? 0 : this._rts),
              this.totalTime(
                at(-Math.abs(this._delay), this.totalDuration(), n),
                !1 !== e
              ),
              un(this),
              this),
            r = t.parent;
          r && r.parent;

        )
          (r._dirty = 1), r.totalDuration(), (r = r.parent);
        return t;
      }),
      (t.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== R &&
                      (this._tTime -= R)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (t) {
        var e;
        return arguments.length
          ? ((this._start = t),
            !(e = this.parent || this._dp) ||
              (!e._sort && this.parent) ||
              K(e, this, t - this._delay),
            this)
          : this._start;
      }),
      (t.endTime = function (t) {
        return (
          this._start +
          (I(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? U(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (t) {
        var e = Kt;
        return (
          (Kt = t = void 0 === t ? Ue : t),
          b(this) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (Kt = e),
          this
        );
      }),
      (t.globalTime = function (t) {
        for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
          (n = e._start + n / (Math.abs(e._ts) || 1)), (e = e._dp);
        return !this.parent && this._sat ? this._sat.globalTime(t) : n;
      }),
      (t.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), it(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (t) {
        var e;
        return arguments.length
          ? ((e = this._time),
            (this._rDelay = t),
            it(this),
            e ? this.time(e) : this)
          : this._rDelay;
      }),
      (t.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (t.seek = function (t, e) {
        return this.totalTime(ot(this, t), I(e));
      }),
      (t.restart = function (t, e) {
        return (
          this.play().totalTime(t ? -this._delay : 0, I(e)),
          this._dur || (this._zTime = -R),
          this
        );
      }),
      (t.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -R : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -R), this;
      }),
      (t.isActive = function () {
        var t = this.parent || this._dp,
          e = this._start;
        return !(
          t &&
          !(
            this._ts &&
            this._initted &&
            t.isActive() &&
            (t = t.rawTime(!0)) >= e &&
            t < this.endTime(!0) - R
          )
        );
      }),
      (t.eventCallback = function (t, e, n) {
        var r = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((r[t] = e),
                n && (r[t + "Params"] = n),
                "onUpdate" === t && (this._onUpdate = e))
              : delete r[t],
            this)
          : r[t];
      }),
      (t.then = function (r) {
        var i = this;
        return new Promise(function (e) {
          function t() {
            var t = i.then;
            (i.then = null),
              h(n) && (n = n(i)) && (n.then || n === i) && (i.then = t),
              e(n),
              (i.then = t);
          }
          var n = h(r) ? r : w;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? t()
            : (i._prom = t);
        });
      }),
      (t.kill = function () {
        At(this);
      }),
      Nn);
  function Nn(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      rt(this, +t.duration, 1, 1),
      (this.data = t.data),
      l && (this._ctx = l).data.push(this),
      ne || Tn.wake();
  }
  X(Ln.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -R,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  o(zn, (In = Ln)),
    ((t = zn.prototype).to = function (t, e, n) {
      return st(0, arguments, this), this;
    }),
    (t.from = function (t, e, n) {
      return st(1, arguments, this), this;
    }),
    (t.fromTo = function (t, e, n, r) {
      return st(2, arguments, this), this;
    }),
    (t.set = function (t, e, n) {
      return (
        (e.duration = 0),
        (e.parent = this),
        O(e).repeatDelay || (e.repeat = 0),
        (e.immediateRender = !!e.immediateRender),
        new N(t, e, ot(this, n), 1),
        this
      );
    }),
    (t.call = function (t, e, n) {
      return K(this, N.delayedCall(0, t, e), n);
    }),
    (t.staggerTo = function (t, e, n, r, i, o, s) {
      return (
        (n.duration = e),
        (n.stagger = n.stagger || r),
        (n.onComplete = o),
        (n.onCompleteParams = s),
        (n.parent = this),
        new N(t, n, ot(this, i)),
        this
      );
    }),
    (t.staggerFrom = function (t, e, n, r, i, o, s) {
      return (
        (n.runBackwards = 1),
        (O(n).immediateRender = I(n.immediateRender)),
        this.staggerTo(t, e, n, r, i, o, s)
      );
    }),
    (t.staggerFromTo = function (t, e, n, r, i, o, s, a) {
      return (
        (r.startAt = n),
        (O(r).immediateRender = I(r.immediateRender)),
        this.staggerTo(t, e, r, i, o, s, a)
      );
    }),
    (t.render = function (t, e, n) {
      var r,
        i,
        o,
        s,
        a,
        l,
        u,
        c,
        h,
        p,
        f = this._time,
        d = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        m = t <= 0 ? 0 : P(t),
        v = this._zTime < 0 != t < 0 && (this._initted || !g);
      if (
        (m = this !== B && d < m && 0 <= t ? d : m) !== this._tTime ||
        n ||
        v
      ) {
        if (
          (f !== this._time &&
            g &&
            ((m += this._time - f), (t += this._time - f)),
          (r = m),
          (c = this._start),
          (a = !(u = this._ts)),
          v && (g || (f = this._zTime), (!t && e) || (this._zTime = t)),
          this._repeat)
        ) {
          if (
            ((v = this._yoyo),
            (s = g + this._rDelay),
            this._repeat < -1 && t < 0)
          )
            return this.totalTime(100 * s + t, e, n);
          if (
            ((r = P(m % s)),
            m === d
              ? ((o = this._repeat), (r = g))
              : ((o = ~~(h = P(m / s))) && o === h && ((r = g), o--),
                g < r && (r = g)),
            (h = q(this._tTime, s)),
            v && 1 & o && ((r = g - r), (p = 1)),
            o !==
              (h =
                !f &&
                this._tTime &&
                h !== o &&
                this._tTime - h * s - this._dur <= 0
                  ? o
                  : h) && !this._lock)
          ) {
            var _ = v && 1 & h,
              v = _ === (v && 1 & o),
              f = (_ = o < h ? !_ : _) ? 0 : m % g ? g : m;
            if (
              ((this._lock = 1),
              (this.render(f || (p ? 0 : P(o * s)), e, !g)._lock = 0),
              (this._tTime = m),
              !e && this.parent && Ct(this, "onRepeat"),
              this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
              (f && f !== this._time) ||
                a != !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((g = this._dur),
              (d = this._tDur),
              v &&
                ((this._lock = 2),
                this.render((f = _ ? g : -1e-4), !0),
                this.vars.repeatRefresh && !p && this.invalidate()),
              (this._lock = 0),
              !this._ts && !a)
            )
              return this;
            Vt(this, p);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            (l = (function (t, e, n) {
              var r;
              if (e < n)
                for (r = t._first; r && r._start <= n; ) {
                  if ("isPause" === r.data && r._start > e) return r;
                  r = r._next;
                }
              else
                for (r = t._last; r && r._start >= n; ) {
                  if ("isPause" === r.data && r._start < e) return r;
                  r = r._prev;
                }
            })(this, P(f), P(r))) &&
            (m -= r - (r = l._start)),
          (this._tTime = m),
          (this._time = r),
          (this._act = !u),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = t),
            (f = 0)),
          !f && m && !e && !h && (Ct(this, "onStart"), this._tTime !== m))
        )
          return this;
        if (f <= r && 0 <= t)
          for (D = this._first; D; ) {
            if (
              ((i = D._next), (D._act || r >= D._start) && D._ts && l !== D)
            ) {
              if (D.parent !== this) return this.render(t, e, n);
              if (
                (D.render(
                  0 < D._ts
                    ? (r - D._start) * D._ts
                    : (D._dirty ? D.totalDuration() : D._tDur) +
                        (r - D._start) * D._ts,
                  e,
                  n
                ),
                r !== this._time || (!this._ts && !a))
              ) {
                (l = 0), i && (m += this._zTime = -R);
                break;
              }
            }
            D = i;
          }
        else
          for (var D = this._last, y = t < 0 ? t : r; D; ) {
            if (((i = D._prev), (D._act || y <= D._end) && D._ts && l !== D)) {
              if (D.parent !== this) return this.render(t, e, n);
              if (
                (D.render(
                  0 < D._ts
                    ? (y - D._start) * D._ts
                    : (D._dirty ? D.totalDuration() : D._tDur) +
                        (y - D._start) * D._ts,
                  e,
                  n || (Kt && b(D))
                ),
                r !== this._time || (!this._ts && !a))
              ) {
                (l = 0), i && (m += this._zTime = y ? -R : R);
                break;
              }
            }
            D = i;
          }
        if (
          l &&
          !e &&
          (this.pause(),
          (l.render(f <= r ? 0 : -R)._zTime = f <= r ? 1 : -1),
          this._ts)
        )
          return (this._start = c), un(this), this.render(t, e, n);
        this._onUpdate && !e && Ct(this, "onUpdate", !0),
          !((m === d && this._tTime >= this.totalDuration()) || (!m && f)) ||
            (c !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
            this._lock ||
            ((!t && g) ||
              !((m === d && 0 < this._ts) || (!m && this._ts < 0)) ||
              H(this, 1),
            e ||
              (t < 0 && !f) ||
              (!m && !f && d) ||
              (Ct(
                this,
                m === d && 0 <= t ? "onComplete" : "onReverseComplete",
                !0
              ),
              !this._prom || (m < d && 0 < this.timeScale()) || this._prom()));
      }
      return this;
    }),
    (t.add = function (t, e) {
      var n = this;
      if ((Se(e) || (e = ot(this, e, t)), !(t instanceof Ln))) {
        if (Oe(t))
          return (
            t.forEach(function (t) {
              return n.add(t, e);
            }),
            this
          );
        if (Fe(t)) return this.addLabel(t, e);
        if (!h(t)) return this;
        t = N.delayedCall(0, t);
      }
      return this !== t ? K(this, t, e) : this;
    }),
    (t.getChildren = function (t, e, n, r) {
      void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === n && (n = !0),
        void 0 === r && (r = -xe);
      for (var i = [], o = this._first; o; )
        o._start >= r &&
          (o instanceof N
            ? e && i.push(o)
            : (n && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, n)))),
          (o = o._next);
      return i;
    }),
    (t.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
        if (e[n].vars.id === t) return e[n];
    }),
    (t.remove = function (t) {
      return Fe(t)
        ? this.removeLabel(t)
        : h(t)
        ? this.killTweensOf(t)
        : (t.parent === this && T(this, t),
          t === this._recent && (this._recent = this._last),
          ln(this));
    }),
    (t.totalTime = function (t, e) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = P(
              Tn.time -
                (0 < this._ts
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts)
            )),
          In.prototype.totalTime.call(this, t, e),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (t, e) {
      return (this.labels[t] = ot(this, e)), this;
    }),
    (t.removeLabel = function (t) {
      return delete this.labels[t], this;
    }),
    (t.addPause = function (t, e, n) {
      e = N.delayedCall(0, e || m, n);
      return (
        (e.data = "isPause"), (this._hasPause = 1), K(this, e, ot(this, t))
      );
    }),
    (t.removePause = function (t) {
      var e = this._first;
      for (t = ot(this, t); e; )
        e._start === t && "isPause" === e.data && H(e), (e = e._next);
    }),
    (t.killTweensOf = function (t, e, n) {
      for (var r = this.getTweensOf(t, n), i = r.length; i--; )
        Vn !== r[i] && r[i].kill(t, e);
      return this;
    }),
    (t.getTweensOf = function (t, e) {
      for (var n, r = [], i = mn(t), o = this._first, s = Se(e); o; )
        o instanceof N
          ? (function (t, e) {
              for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
              return r < n;
            })(o._targets, i) &&
            (s
              ? (!Vn || (o._initted && o._ts)) &&
                o.globalTime(0) <= e &&
                o.globalTime(o.totalDuration()) > e
              : !e || o.isActive()) &&
            r.push(o)
          : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
          (o = o._next);
      return r;
    }),
    (t.tweenTo = function (t, e) {
      e = e || {};
      var n,
        r = this,
        i = ot(r, t),
        t = e,
        o = t.startAt,
        s = t.onStart,
        a = t.onStartParams,
        t = t.immediateRender,
        l = N.to(
          r,
          X(
            {
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: i,
              overwrite: "auto",
              duration:
                e.duration ||
                Math.abs(
                  (i - (o && "time" in o ? o.time : r._time)) / r.timeScale()
                ) ||
                R,
              onStart: function () {
                var t;
                r.pause(),
                  n ||
                    ((t =
                      e.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : r._time)) /
                          r.timeScale()
                      )),
                    l._dur !== t && rt(l, t, 0, 1).render(l._time, !0, !0),
                    (n = 1)),
                  s && s.apply(l, a || []);
              },
            },
            e
          )
        );
      return t ? l.render(0) : l;
    }),
    (t.tweenFromTo = function (t, e, n) {
      return this.tweenTo(e, X({ startAt: { time: ot(this, t) } }, n));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (t) {
      return void 0 === t && (t = this._time), wt(this, ot(this, t));
    }),
    (t.previousLabel = function (t) {
      return void 0 === t && (t = this._time), wt(this, ot(this, t), 1);
    }),
    (t.currentLabel = function (t) {
      return arguments.length
        ? this.seek(t, !0)
        : this.previousLabel(this._time + R);
    }),
    (t.shiftChildren = function (t, e, n) {
      void 0 === n && (n = 0);
      for (var r, i = this._first, o = this.labels; i; )
        i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
      if (e) for (r in o) o[r] >= n && (o[r] += t);
      return ln(this);
    }),
    (t.invalidate = function (t) {
      var e = this._first;
      for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
      return In.prototype.invalidate.call(this, t);
    }),
    (t.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, n = this._first; n; ) (e = n._next), this.remove(n), (n = e);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        ln(this)
      );
    }),
    (t.totalDuration = function (t) {
      var e,
        n,
        r,
        i = 0,
        o = this,
        s = o._last,
        a = xe;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -t : t)
        );
      if (o._dirty) {
        for (r = o.parent; s; )
          (e = s._prev),
            s._dirty && s.totalDuration(),
            a < (n = s._start) && o._sort && s._ts && !o._lock
              ? ((o._lock = 1), (K(o, s, n - s._delay, 1)._lock = 0))
              : (a = n),
            n < 0 &&
              s._ts &&
              ((i -= n),
              ((!r && !o._dp) || (r && r.smoothChildTiming)) &&
                ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)),
              o.shiftChildren(-n, !1, -1 / 0),
              (a = 0)),
            s._end > i && s._ts && (i = s._end),
            (s = e);
        rt(o, o === B && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (zn.updateRoot = function (t) {
      if ((B._ts && (_(B, U(t, B)), (te = Tn.frame)), Tn.frame >= Je)) {
        Je += De.autoSleep || 120;
        var e = B._first;
        if ((!e || !e._ts) && De.autoSleep && Tn._listeners.length < 2) {
          for (; e && !e._ts; ) e = e._next;
          e || Tn.sleep();
        }
      }
    });
  var In,
    Xn = zn;
  function zn(t, e) {
    var n;
    return (
      ((n = In.call(this, (t = void 0 === t ? {} : t)) || this).labels = {}),
      (n.smoothChildTiming = !!t.smoothChildTiming),
      (n.autoRemoveChildren = !!t.autoRemoveChildren),
      (n._sort = I(t.sortChildren)),
      B && K(t.parent || B, Mt(n), e),
      t.reversed && n.reverse(),
      t.paused && n.paused(!0),
      t.scrollTrigger && $(Mt(n), t.scrollTrigger),
      n
    );
  }
  X(Xn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function Yn(t, e, n, r, i, o) {
    var s, a, l, u;
    if (
      $e[t] &&
      !1 !==
        (s = new $e[t]()).init(
          i,
          s.rawVars ? e[t] : Un(e[t], r, i, o, n),
          n,
          r,
          o
        ) &&
      ((n._pt = a = new hr(n._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
      n !== ee)
    )
      for (l = n._ptLookup[n._targets.indexOf(i)], u = s._props.length; u--; )
        l[s._props[u]] = a;
    return s;
  }
  function Hn(t, e, n, r, i) {
    return h(t)
      ? t.call(e, n, r, i)
      : Fe(t) && ~t.indexOf("random(")
      ? Dn(t)
      : t;
  }
  var Vn,
    jn,
    Wn,
    qn = function (t, e, n, r, i, o, s, a, l, u) {
      h(r) && (r = r(i || 0, t, o));
      var c,
        i = t[e],
        o =
          "get" !== n
            ? n
            : h(i)
            ? l
              ? t[
                  e.indexOf("set") || !h(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : i,
        n = h(i) ? (l ? nr : er) : tr;
      if (
        (!Fe(r) ||
          "=" !== (r = ~r.indexOf("random(") ? Dn(r) : r).charAt(1) ||
          (!(c = sn(o, r) + (fn(o) || 0)) && 0 !== c) ||
          (r = c),
        !u || o !== r || jn)
      )
        return isNaN(o * r) || "" === r
          ? (i || e in t || Ve(e, r),
            function (t, e, n, r, i, o, s) {
              var a,
                l,
                u,
                c,
                h,
                p = new hr(this._pt, t, e, 0, 1, sr, null, i),
                f = 0,
                d = 0;
              for (
                p.b = n,
                  p.e = r,
                  n += "",
                  (i = ~(r += "").indexOf("random(")) && (r = Dn(r)),
                  o && (o((o = [n, r]), t, e), (n = o[0]), (r = o[1])),
                  a = n.match(Ne) || [];
                (c = Ne.exec(r));

              )
                (u = c[0]),
                  (c = r.substring(f, c.index)),
                  l ? (l = (l + 1) % 5) : "rgba(" === c.substr(-5) && (l = 1),
                  u !== a[d++] &&
                    ((h = parseFloat(a[d - 1]) || 0),
                    (p._pt = {
                      _next: p._pt,
                      p: c || 1 === d ? c : ",",
                      s: h,
                      c: "=" === u.charAt(1) ? sn(h, u) - h : parseFloat(u) - h,
                      m: l && l < 4 ? Math.round : 0,
                    }),
                    (f = Ne.lastIndex));
              return (
                (p.c = f < r.length ? r.substring(f, r.length) : ""),
                (p.fp = s),
                (Ie.test(r) || i) && (p.e = 0),
                (this._pt = p)
              );
            }.call(this, t, e, o, r, n, a || De.stringFilter, l))
          : ((c = new hr(
              this._pt,
              t,
              e,
              +o || 0,
              r - (o || 0),
              "boolean" == typeof i ? or : ir,
              0,
              n
            )),
            l && (c.fp = l),
            s && c.modifier(s, this, t),
            (this._pt = c));
    },
    Un = function (t, e, n, r, i) {
      if (
        (h(t) && (t = Hn(t, i, e, n, r)),
        !Ae(t) || (t.style && t.nodeType) || Oe(t) || ke(t))
      )
        return Fe(t) ? Hn(t, i, e, n, r) : t;
      var o,
        s = {};
      for (o in t) s[o] = Hn(t[o], i, e, n, r);
      return s;
    },
    Gn = function t(e, n, r) {
      var i,
        o,
        s,
        a,
        l,
        u,
        c,
        h,
        p,
        f,
        d,
        g,
        m,
        v = e.vars,
        _ = v.ease,
        D = v.startAt,
        y = v.immediateRender,
        x = v.lazy,
        b = v.onUpdate,
        w = v.runBackwards,
        C = v.yoyoEase,
        E = v.keyframes,
        T = v.autoRevert,
        P = e._dur,
        F = e._startAt,
        S = e._targets,
        M = e.parent,
        A = M && "nested" === M.data ? M.vars.targets : S,
        k = "auto" === e._overwrite && !Gt,
        O = e.timeline;
      if (
        ((e._ease = kn((_ = !O || (E && _) ? _ : "none"), ye.ease)),
        (e._yEase = C ? An(kn(!0 === C ? _ : C, ye.ease)) : 0),
        C &&
          e._yoyo &&
          !e._repeat &&
          ((C = e._yEase), (e._yEase = e._ease), (e._ease = C)),
        (e._from = !O && !!v.runBackwards),
        !O || (E && !v.stagger))
      ) {
        if (
          ((g = (h = S[0] ? rn(S[0]).harness : 0) && v[h.prop]),
          (i = Y(v, Ge)),
          F &&
            (F._zTime < 0 && F.progress(1),
            n < 0 && w && y && !T
              ? F.render(-1, !0)
              : F.revert(w && P ? qe : We),
            (F._lazy = 0)),
          D)
        ) {
          if (
            (H(
              (e._startAt = N.set(
                S,
                X(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: M,
                    immediateRender: !0,
                    lazy: !F && I(x),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      b &&
                      function () {
                        return Ct(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  D
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (Kt || (!y && !T)) && e._startAt.revert(qe),
            y && P && n <= 0 && r <= 0)
          )
            return void (n && (e._zTime = n));
        } else if (w && P && !F)
          if (
            ((s = X(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: (y = n ? !1 : y) && !F && I(x),
                immediateRender: y,
                stagger: 0,
                parent: M,
              },
              i
            )),
            g && (s[h.prop] = g),
            H((e._startAt = N.set(S, s))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (Kt ? e._startAt.revert(qe) : e._startAt.render(-1, !0)),
            (e._zTime = n),
            y)
          ) {
            if (!n) return;
          } else t(e._startAt, R, R);
        for (
          e._pt = e._ptCache = 0, x = (P && I(x)) || (x && !P), o = 0;
          o < S.length;
          o++
        ) {
          if (
            ((c = (l = S[o])._gsap || nn(S)[o]._gsap),
            (e._ptLookup[o] = f = {}),
            Ze[c.id] && Ke.length && an(),
            (d = A === S ? o : A.indexOf(l)),
            h &&
              !1 !== (p = new h()).init(l, g || i, e, d, A) &&
              ((e._pt = a =
                new hr(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority)),
              p._props.forEach(function (t) {
                f[t] = a;
              }),
              p.priority && (u = 1)),
            !h || g)
          )
            for (s in i)
              $e[s] && (p = Yn(s, i, e, d, l, A))
                ? p.priority && (u = 1)
                : (f[s] = a =
                    qn.call(e, l, s, "get", i[s], d, A, 0, v.stringFilter));
          e._op && e._op[o] && e.kill(l, e._op[o]),
            k &&
              e._pt &&
              ((Vn = e),
              B.killTweensOf(l, f, e.globalTime(n)),
              (m = !e.parent),
              (Vn = 0)),
            e._pt && x && (Ze[c.id] = 1);
        }
        u && cr(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = b),
        (e._initted = (!e._op || e._pt) && !m),
        E && n <= 0 && O.render(xe, !0, !0);
    },
    Kn = en + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Zn = {},
    N =
      (v(Kn + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (Zn[t] = 1);
      }),
      o($n, (Wn = Ln)),
      ((t = $n.prototype).render = function (t, e, n) {
        var r,
          i,
          o,
          s = this._time,
          a = this._tDur,
          l = this._dur,
          u = t < 0,
          c = a - R < t && !u ? a : t < R ? 0 : t;
        if (l) {
          if (
            c !== this._tTime ||
            !t ||
            n ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != u) ||
            this._lazy
          ) {
            if (((m = c), (g = this.timeline), this._repeat)) {
              if (((f = l + this._rDelay), this._repeat < -1 && u))
                return this.totalTime(100 * f + t, e, n);
              if (
                ((m = P(c % f)),
                c === a
                  ? ((v = this._repeat), (m = l))
                  : (v = ~~(D = P(c / f))) && v === D
                  ? ((m = l), v--)
                  : l < m && (m = l),
                (i = this._yoyo && 1 & v) && ((d = this._yEase), (m = l - m)),
                (D = q(this._tTime, f)),
                m === s && !n && this._initted && v === D)
              )
                return (this._tTime = c), this;
              v !== D &&
                (g && this._yEase && Vt(g, i),
                this.vars.repeatRefresh &&
                  !i &&
                  !this._lock &&
                  m !== f &&
                  this._initted &&
                  ((this._lock = n = 1),
                  (this.render(P(f * v), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Q(this, u ? t : m, n, e, c)) return (this._tTime = 0), this;
              if (
                !(s === this._time || (n && this.vars.repeatRefresh && v !== D))
              )
                return this;
              if (l !== this._dur) return this.render(t, e, n);
            }
            if (
              ((this._tTime = c),
              (this._time = m),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = o = (d || this._ease)(m / l)),
              this._from && (this.ratio = o = 1 - o),
              !s && c && !e && !D && (Ct(this, "onStart"), this._tTime !== c))
            )
              return this;
            for (r = this._pt; r; ) r.r(o, r.d), (r = r._next);
            (g &&
              g.render(t < 0 ? t : g._dur * g._ease(m / this._dur), e, n)) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (u && V(this, t, 0, n), Ct(this, "onUpdate")),
              this._repeat &&
                v !== D &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                Ct(this, "onRepeat"),
              (c !== this._tDur && c) ||
                this._tTime !== c ||
                (u && !this._onUpdate && V(this, t, 0, !0),
                (!t && l) ||
                  !(
                    (c === this._tDur && 0 < this._ts) ||
                    (!c && this._ts < 0)
                  ) ||
                  H(this, 1),
                e ||
                  (u && !s) ||
                  !(c || s || i) ||
                  (Ct(this, c === a ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (c < a && 0 < this.timeScale()) ||
                    this._prom()));
          }
        } else {
          var h,
            p,
            f = this,
            d = t,
            g = e,
            m = n,
            v = f.ratio,
            _ =
              d < 0 ||
              (!d &&
                ((!f._start && et(f) && (f._initted || !nt(f))) ||
                  ((f._ts < 0 || f._dp._ts < 0) && !nt(f))))
                ? 0
                : 1,
            D = f._rDelay,
            l = 0;
          if (
            (D &&
              f._repeat &&
              ((l = at(0, f._tDur, d)),
              (p = q(l, D)),
              f._yoyo && 1 & p && (_ = 1 - _),
              p !== q(f._tTime, D) &&
                ((v = 1 - _),
                f.vars.repeatRefresh && f._initted && f.invalidate())),
            _ !== v || Kt || m || f._zTime === R || (!d && f._zTime))
          ) {
            if (f._initted || !Q(f, d, m, g, l)) {
              for (
                p = f._zTime,
                  f._zTime = d || (g ? R : 0),
                  g = g || (d && !p),
                  f.ratio = _,
                  f._from && (_ = 1 - _),
                  f._time = 0,
                  f._tTime = l,
                  h = f._pt;
                h;

              )
                h.r(_, h.d), (h = h._next);
              d < 0 && V(f, d, 0, !0),
                f._onUpdate && !g && Ct(f, "onUpdate"),
                l && f._repeat && !g && f.parent && Ct(f, "onRepeat"),
                (d >= f._tDur || d < 0) &&
                  f.ratio === _ &&
                  (_ && H(f, 1),
                  g ||
                    Kt ||
                    (Ct(f, _ ? "onComplete" : "onReverseComplete", !0),
                    f._prom && f._prom()));
            }
          } else f._zTime || (f._zTime = d);
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (t) {
        return (
          (t && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          Wn.prototype.invalidate.call(this, t)
        );
      }),
      (t.resetTo = function (t, e, n, r, i) {
        ne || Tn.wake(), this._ts || this.play();
        var o,
          s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Gn(this, s),
          (o = this._ease(s / this._dur)),
          (function (t, e, n, r, i, o, s, a) {
            var l,
              u,
              c,
              h,
              p = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!p)
              for (
                p = t._ptCache[e] = [], c = t._ptLookup, h = t._targets.length;
                h--;

              ) {
                if ((l = c[h][e]) && l.d && l.d._pt)
                  for (l = l.d._pt; l && l.p !== e && l.fp !== e; ) l = l._next;
                if (!l)
                  return (
                    (jn = 1),
                    (t.vars[e] = "+=0"),
                    Gn(t, s),
                    (jn = 0),
                    a ? je(e + " not eligible for reset") : 1
                  );
                p.push(l);
              }
            for (h = p.length; h--; )
              ((l = (u = p[h])._pt || u).s =
                (!r && 0 !== r) || i ? l.s + (r || 0) + o * l.c : r),
                (l.c = n - l.s),
                u.e && (u.e = L(n) + fn(u.e)),
                u.b && (u.b = l.s + fn(u.b));
          })(this, t, e, n, r, o, s, i)
            ? this.resetTo(t, e, n, r, 1)
            : (cn(this, 0),
              this.parent ||
                E(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? At(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Kt),
            this
          );
        if (this.timeline)
          return (
            (p = this.timeline.totalDuration()),
            this.timeline.killTweensOf(t, e, Vn && !0 !== Vn.vars.overwrite)
              ._first || At(this),
            this.parent &&
              p !== this.timeline.totalDuration() &&
              rt(this, (this._dur * this.timeline._tDur) / p, 0, 1),
            this
          );
        var n,
          r,
          i,
          o,
          s,
          a,
          l,
          u = this._targets,
          c = t ? mn(t) : u,
          h = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var n = t.length, r = n === e.length;
              r && n-- && t[n] === e[n];

            );
            return n < 0;
          })(u, c)
        )
          return "all" === e && (this._pt = 0), At(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (Fe(e) &&
                ((s = {}),
                v(e, function (t) {
                  return (s[t] = 1);
                }),
                (e = s)),
              (e = (function (t, e) {
                var n,
                  r,
                  i,
                  o,
                  t = t[0] ? rn(t[0]).harness : 0,
                  s = t && t.aliases;
                if (!s) return e;
                for (r in ((n = k({}, e)), s))
                  if ((r in n))
                    for (i = (o = s[r].split(",")).length; i--; )
                      n[o[i]] = n[r];
                return n;
              })(u, e))),
            l = u.length;
          l--;

        )
          if (~c.indexOf(u[l]))
            for (s in ((r = h[l]),
            "all" === e
              ? ((n[l] = e), (o = r), (i = {}))
              : ((i = n[l] = n[l] || {}), (o = e)),
            o))
              (a = r && r[s]) &&
                (("kill" in a.d && !0 !== a.d.kill(s)) || T(this, a, "_pt"),
                delete r[s]),
                "all" !== i && (i[s] = 1);
        return this._initted && !this._pt && p && At(this), this;
      }),
      ($n.to = function (t, e) {
        return new $n(t, e, arguments[2]);
      }),
      ($n.from = function (t, e) {
        return st(1, arguments);
      }),
      ($n.delayedCall = function (t, e, n, r) {
        return new $n(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: n,
          onReverseCompleteParams: n,
          callbackScope: r,
        });
      }),
      ($n.fromTo = function (t, e, n) {
        return st(2, arguments);
      }),
      ($n.set = function (t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new $n(t, e);
      }),
      ($n.killTweensOf = function (t, e, n) {
        return B.killTweensOf(t, e, n);
      }),
      $n);
  function $n(t, e, n, r) {
    "number" == typeof e && ((n.duration = e), (e = n), (n = null));
    var i,
      o,
      s,
      a,
      l,
      u,
      c,
      h,
      p,
      r = (i = Wn.call(this, r ? e : O(e)) || this).vars,
      f = r.duration,
      d = r.delay,
      g = r.immediateRender,
      m = r.stagger,
      v = r.overwrite,
      _ = r.keyframes,
      D = r.defaults,
      y = r.scrollTrigger,
      x = r.yoyoEase,
      r = e.parent || B,
      b = (Oe(t) || ke(t) ? Se(t[0]) : "length" in e) ? [t] : mn(t);
    if (
      ((i._targets = b.length
        ? nn(b)
        : je(
            "GSAP target " + t + " not found. https://gsap.com",
            !De.nullTargetWarn
          ) || []),
      (i._ptLookup = []),
      (i._overwrite = v),
      _ || m || A(f) || A(d))
    ) {
      if (
        ((e = i.vars),
        (o = i.timeline =
          new Xn({
            data: "nested",
            defaults: D || {},
            targets: r && "nested" === r.data ? r.vars.targets : b,
          })).kill(),
        (o.parent = o._dp = Mt(i)),
        (o._start = 0),
        m || A(f) || A(d))
      ) {
        if (((l = b.length), (h = m && ct(m)), Ae(m)))
          for (u in m) ~Kn.indexOf(u) && ((p = p || {})[u] = m[u]);
        for (s = 0; s < l; s++)
          ((a = Y(e, Zn)).stagger = 0),
            x && (a.yoyoEase = x),
            p && k(a, p),
            (c = b[s]),
            (a.duration = +Hn(f, Mt(i), s, c, b)),
            (a.delay = (+Hn(d, Mt(i), s, c, b) || 0) - i._delay),
            !m &&
              1 === l &&
              a.delay &&
              ((i._delay = d = a.delay), (i._start += d), (a.delay = 0)),
            o.to(c, a, h ? h(s, c, b) : 0),
            (o._ease = F.none);
        o.duration() ? (f = d = 0) : (i.timeline = 0);
      } else if (_) {
        O(X(o.vars.defaults, { ease: "none" })),
          (o._ease = kn(_.ease || e.ease || "none"));
        var w,
          C,
          E,
          T = 0;
        if (Oe(_))
          _.forEach(function (t) {
            return o.to(b, t, ">");
          }),
            o.duration();
        else {
          for (u in ((a = {}), _))
            "ease" !== u &&
              "easeEach" !== u &&
              (function (t, n, e, r) {
                var i,
                  o,
                  s = n.ease || r || "power1.inOut";
                if (Oe(n))
                  (o = e[t] || (e[t] = [])),
                    n.forEach(function (t, e) {
                      return o.push({
                        t: (e / (n.length - 1)) * 100,
                        v: t,
                        e: s,
                      });
                    });
                else
                  for (i in n)
                    (o = e[i] || (e[i] = [])),
                      "ease" !== i &&
                        o.push({ t: parseFloat(t), v: n[i], e: s });
              })(u, _[u], a, _.easeEach);
          for (u in a)
            for (
              w = a[u].sort(function (t, e) {
                return t.t - e.t;
              }),
                s = T = 0;
              s < w.length;
              s++
            )
              ((E = {
                ease: (C = w[s]).e,
                duration: ((C.t - (s ? w[s - 1].t : 0)) / 100) * f,
              })[u] = C.v),
                o.to(b, E, T),
                (T += E.duration);
          o.duration() < f && o.to({}, { duration: f - o.duration() });
        }
      }
      f || i.duration((f = o.duration()));
    } else i.timeline = 0;
    return (
      !0 !== v || Gt || ((Vn = Mt(i)), B.killTweensOf(b), (Vn = 0)),
      K(r, Mt(i), n),
      e.reversed && i.reverse(),
      e.paused && i.paused(!0),
      (g ||
        (!f &&
          !_ &&
          i._start === P(r._time) &&
          I(g) &&
          j(Mt(i)) &&
          "nested" !== r.data)) &&
        ((i._tTime = -R), i.render(Math.max(0, -d) || 0)),
      y && $(Mt(i), y),
      i
    );
  }
  X(N.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    v("staggerTo,staggerFrom,staggerFromTo", function (n) {
      N[n] = function () {
        var t = new Xn(),
          e = dn.call(arguments, 0);
        return e.splice("staggerFromTo" === n ? 5 : 4, 0, 0), t[n].apply(t, e);
      };
    });
  function Qn(t, e, n) {
    return t.setAttribute(e, n);
  }
  function Jn(t, e, n, r) {
    r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
  }
  var tr = function (t, e, n) {
      return (t[e] = n);
    },
    er = function (t, e, n) {
      return t[e](n);
    },
    nr = function (t, e, n, r) {
      return t[e](r.fp, n);
    },
    rr = function (t, e) {
      return h(t[e]) ? er : Me(t[e]) && t.setAttribute ? Qn : tr;
    },
    ir = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    or = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    sr = function (t, e) {
      var n = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (1 === t && e.e) r = e.e;
      else {
        for (; n; )
          (r =
            n.p +
            (n.m
              ? n.m(n.s + n.c * t)
              : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
            r),
            (n = n._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    ar = function (t, e) {
      for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
    },
    lr = function (t, e, n, r) {
      for (var i, o = this._pt; o; )
        (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
    },
    ur = function (t) {
      for (var e, n, r = this._pt; r; )
        (n = r._next),
          (r.p === t && !r.op) || r.op === t
            ? T(this, r, "_pt")
            : r.dep || (e = 1),
          (r = n);
      return !e;
    },
    cr = function (t) {
      for (var e, n, r, i, o = t._pt; o; ) {
        for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
        (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
          (o._next = n) ? (n._prev = o) : (i = o),
          (o = e);
      }
      t._pt = r;
    },
    hr =
      ((pr.prototype.modifier = function (t, e, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Jn),
          (this.m = t),
          (this.mt = n),
          (this.tween = e);
      }),
      pr);
  function pr(t, e, n, r, i, o, s, a, l) {
    (this.t = e),
      (this.s = r),
      (this.c = i),
      (this.p = n),
      (this.r = o || ir),
      (this.d = s || this),
      (this.set = a || tr),
      (this.pr = l || 0),
      (this._next = t) && (t._prev = this);
  }
  v(
    en +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (Ge[t] = 1);
    }
  ),
    (Ye.TweenMax = Ye.TweenLite = N),
    (Ye.TimelineLite = Ye.TimelineMax = Xn),
    (B = new Xn({
      sortChildren: !1,
      defaults: ye,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (De.stringFilter = Ht);
  function fr(t) {
    (mr[t] || vr).map(function (t) {
      return t();
    });
  }
  function dr() {
    var t = Date.now(),
      a = [];
    2 < t - _r &&
      (fr("matchMediaInit"),
      gr.forEach(function (t) {
        var e,
          n,
          r,
          i,
          o = t.queries,
          s = t.conditions;
        for (n in o)
          (e = Zt.matchMedia(o[n]).matches) && (r = 1),
            e !== s[n] && ((s[n] = e), (i = 1));
        i && (t.revert(), r && a.push(t));
      }),
      fr("matchMediaRevert"),
      a.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (_r = t),
      fr("matchMedia"));
  }
  var gr = [],
    mr = {},
    vr = [],
    _r = 0,
    Dr = 0,
    yr =
      (((t = xr.prototype).add = function (t, r, i) {
        h(t) && ((i = r), (r = t), (t = h));
        function e() {
          var t,
            e = l,
            n = o.selector;
          return (
            e && e !== o && e.data.push(o),
            i && (o.selector = ut(i)),
            (l = o),
            (t = r.apply(o, arguments)),
            h(t) && o._r.push(t),
            (l = e),
            (o.selector = n),
            (o.isReverted = !1),
            t
          );
        }
        var o = this;
        return (
          (o.last = e),
          t === h
            ? e(o, function (t) {
                return o.add(null, t);
              })
            : t
            ? (o[t] = e)
            : e
        );
      }),
      (t.ignore = function (t) {
        var e = l;
        (l = null), t(this), (l = e);
      }),
      (t.getTweens = function () {
        var e = [];
        return (
          this.data.forEach(function (t) {
            return t instanceof xr
              ? e.push.apply(e, t.getTweens())
              : t instanceof N &&
                  !(t.parent && "nested" === t.parent.data) &&
                  e.push(t);
          }),
          e
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (e) {
          for (var r, i = n.getTweens(), o = n.data.length; o--; )
            "isFlip" === (r = n.data[o]).data &&
              (r.revert(),
              r.getChildren(!0, !0, !1).forEach(function (t) {
                return i.splice(i.indexOf(t), 1);
              }));
          for (
            i
              .map(function (t) {
                return {
                  g:
                    t._dur ||
                    t._delay ||
                    (t._sat && !t._sat.vars.immediateRender)
                      ? t.globalTime(0)
                      : -1 / 0,
                  t: t,
                };
              })
              .sort(function (t, e) {
                return e.g - t.g || -1 / 0;
              })
              .forEach(function (t) {
                return t.t.revert(e);
              }),
              o = n.data.length;
            o--;

          )
            (r = n.data[o]) instanceof Xn
              ? "nested" !== r.data &&
                (r.scrollTrigger && r.scrollTrigger.revert(), r.kill())
              : r instanceof N || !r.revert || r.revert(e);
          n._r.forEach(function (t) {
            return t(e, n);
          }),
            (n.isReverted = !0);
        } else
          this.data.forEach(function (t) {
            return t.kill && t.kill();
          });
        if ((this.clear(), t))
          for (var s = gr.length; s--; )
            gr[s].id === this.id && gr.splice(s, 1);
      }),
      (t.revert = function (t) {
        this.kill(t || {});
      }),
      xr);
  function xr(t, e) {
    (this.selector = e && ut(e)),
      (this.data = []),
      (this._r = []),
      (this.isReverted = !1),
      (this.id = Dr++),
      t && this.add(t);
  }
  ((t = wr.prototype).add = function (t, e, n) {
    Ae(t) || (t = { matches: t });
    var r,
      i,
      o,
      s = new yr(0, n || this.scope),
      a = (s.conditions = {});
    for (i in (l && !s.selector && (s.selector = l.selector),
    this.contexts.push(s),
    (e = s.add("onMatch", e)),
    (s.queries = t)))
      "all" === i
        ? (o = 1)
        : (r = Zt.matchMedia(t[i])) &&
          (gr.indexOf(s) < 0 && gr.push(s),
          (a[i] = r.matches) && (o = 1),
          r.addListener ? r.addListener(dr) : r.addEventListener("change", dr));
    return (
      o &&
        e(s, function (t) {
          return s.add(null, t);
        }),
      this
    );
  }),
    (t.revert = function (t) {
      this.kill(t || {});
    }),
    (t.kill = function (e) {
      this.contexts.forEach(function (t) {
        return t.kill(e, !0);
      });
    });
  var br = wr;
  function wr(t) {
    (this.contexts = []), (this.scope = t), l && l.data.push(this);
  }
  function Cr(t, c) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function (t, u, e) {
        e._onInit = function (t) {
          var e, n;
          if (
            (Fe(u) &&
              ((e = {}),
              v(u, function (t) {
                return (e[t] = 1);
              }),
              (u = e)),
            c)
          ) {
            for (n in ((e = {}), u)) e[n] = c(u[n]);
            u = e;
          }
          var r,
            i,
            o,
            s = t,
            a = u,
            l = s._targets;
          for (r in a)
            for (i = l.length; i--; )
              (o = (o = s._ptLookup[i][r]) && o.d) &&
                (o = o._pt ? hi(o, r) : o) &&
                o.modifier &&
                o.modifier(a[r], s, l[i], r);
        };
      },
    };
  }
  function Er(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function Tr(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function Pr(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function Fr(t, e) {
    (t = e.s + e.c * t), e.set(e.t, e.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function Sr(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Mr(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Ar(t, e, n) {
    return (t.style[e] = n);
  }
  function kr(t, e, n) {
    return t.style.setProperty(e, n);
  }
  function Or(t, e, n) {
    return (t._gsap[e] = n);
  }
  function Br(t, e, n) {
    return (t._gsap.scaleX = t._gsap.scaleY = n);
  }
  function Rr(t, e, n, r, i) {
    ((t = t._gsap).scaleX = t.scaleY = n), t.renderTransform(i, t);
  }
  function Lr(t, e, n, r, i) {
    ((t = t._gsap)[e] = n), t.renderTransform(i, t);
  }
  function Nr(t, e) {
    var n = this,
      r = this.target,
      i = r.style,
      o = r._gsap;
    if (t in Ai && i) {
      if (((this.tfm = this.tfm || {}), "transform" === t))
        return Ii.transform.split(",").forEach(function (t) {
          return Nr.call(n, t, e);
        });
      if (
        (~(t = Ii[t] || t).indexOf(",")
          ? t.split(",").forEach(function (t) {
              return (n.tfm[t] = Qi(r, t));
            })
          : (this.tfm[t] = o.x ? o[t] : Qi(r, t)),
        t === Xi && (this.tfm.zOrigin = o.zOrigin),
        0 <= this.props.indexOf(z))
      )
        return;
      o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Xi, e, "")),
        (t = z);
    }
    (i || e) && this.props.push(t, e, i[t]);
  }
  function Ir() {
    for (
      var t, e = this.props, n = this.target, r = n.style, i = n._gsap, o = 0;
      o < e.length;
      o += 3
    )
      e[o + 1]
        ? 2 === e[o + 1]
          ? n[e[o]](e[o + 2])
          : (n[e[o]] = e[o + 2])
        : e[o + 2]
        ? (r[e[o]] = e[o + 2])
        : r.removeProperty(
            "--" === e[o].substr(0, 2)
              ? e[o]
              : e[o].replace(Ri, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (t in this.tfm) i[t] = this.tfm[t];
      i.svg &&
        (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        ((o = si()) && o.isStart) ||
          r[z] ||
          (zi(r),
          i.zOrigin &&
            r[Xi] &&
            ((r[Xi] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  }
  function Xr(t, e) {
    var n = { target: t, props: [], revert: Ir, save: Nr };
    return (
      t._gsap || pi.core.getCache(t),
      e &&
        t.style &&
        t.nodeType &&
        e.split(",").forEach(function (t) {
          return n.save(t);
        }),
      n
    );
  }
  function zr() {
    Mi() &&
      window.document &&
      ((ti = window),
      (ei = ti.document),
      (ni = ei.documentElement),
      (ii = Yi("div") || { style: {} }),
      Yi("div"),
      (z = ji(z)),
      (Xi = z + "Origin"),
      (ii.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (ai = !!ji("perspective")),
      (si = pi.core.reverting),
      (ri = 1));
  }
  function Yr(t) {
    var e,
      n = t.ownerSVGElement,
      n = Yi(
        "svg",
        (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      );
    ((t = t.cloneNode(!0)).style.display = "block"),
      n.appendChild(t),
      ni.appendChild(n);
    try {
      e = t.getBBox();
    } catch (t) {}
    return n.removeChild(t), ni.removeChild(n), e;
  }
  function Hr(t, e) {
    for (var n = e.length; n--; )
      if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
  }
  function Vr(t, e, n, r) {
    (n && "none" !== n) ||
      ((i = (o = ji(e, t, 1)) && Hi(t, o, 1)) && i !== n
        ? ((e = o), (n = i))
        : "borderColor" === e && (n = Hi(t, "borderTopColor")));
    var i,
      o,
      s,
      a,
      l,
      u,
      c,
      h,
      p,
      f,
      d = new hr(this._pt, t.style, e, 0, 1, sr),
      g = 0,
      m = 0;
    if (
      ((d.b = n),
      (d.e = r),
      (n += ""),
      "auto" ===
        (r =
          "var(--" === (r += "").substring(0, 6)
            ? Hi(t, r.substring(4, r.indexOf(")")))
            : r) &&
        ((u = t.style[e]),
        (t.style[e] = r),
        (r = Hi(t, e) || r),
        u ? (t.style[e] = u) : Ui(t, e)),
      Ht((o = [n, r])),
      (r = o[1]),
      (s = (n = o[0]).match(Le) || []),
      (r.match(Le) || []).length)
    ) {
      for (; (h = Le.exec(r)); )
        (p = h[0]),
          (h = r.substring(g, h.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) || (l = 1),
          p !== (u = s[m++] || "") &&
            ((a = parseFloat(u) || 0),
            (f = u.substr((a + "").length)),
            "=" === p.charAt(1) && (p = sn(a, p) + f),
            (c = parseFloat(p)),
            (p = p.substr((c + "").length)),
            (g = Le.lastIndex - p.length),
            p ||
              ((p = p || De.units[e] || f),
              g === r.length && ((r += p), (d.e += p))),
            f !== p && (a = $i(t, e, u, p) || 0),
            (d._pt = {
              _next: d._pt,
              p: h || 1 === m ? h : ",",
              s: a,
              c: c - a,
              m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
            }));
      d.c = g < r.length ? r.substring(g, r.length) : "";
    } else d.r = "display" === e && "none" === r ? Mr : Sr;
    return Ie.test(r) && (d.e = 0), (this._pt = d);
  }
  function jr(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var n,
        r,
        i,
        o = e.t,
        s = o.style,
        a = e.u,
        e = o._gsap;
      if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
      else
        for (i = (a = a.split(",")).length; -1 < --i; )
          (n = a[i]),
            Ai[n] && ((r = 1), (n = "transformOrigin" === n ? Xi : z)),
            Ui(o, n);
      r &&
        (Ui(o, z),
        e &&
          (e.svg && o.removeAttribute("transform"),
          (s.scale = s.rotate = s.translate = "none"),
          oo(o, 1),
          (e.uncache = 1),
          zi(s)));
    }
  }
  function Wr(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function qr(t, e, n, r, i, o) {
    var s,
      a = t._gsap,
      i = i || io(t, !0),
      l = a.xOrigin || 0,
      u = a.yOrigin || 0,
      c = a.xOffset || 0,
      h = a.yOffset || 0,
      p = i[0],
      f = i[1],
      d = i[2],
      g = i[3],
      m = i[4],
      v = i[5],
      _ = e.split(" "),
      D = parseFloat(_[0]) || 0,
      y = parseFloat(_[1]) || 0;
    n
      ? i !== eo &&
        (i = p * g - f * d) &&
        ((s = D * (-f / i) + y * (p / i) - (p * v - f * m) / i),
        (D = D * (g / i) + y * (-d / i) + (d * v - g * m) / i),
        (y = s))
      : ((D = (i = Wi(t)).x + (~_[0].indexOf("%") ? (D / 100) * i.width : D)),
        (y = i.y + (~(_[1] || _[0]).indexOf("%") ? (y / 100) * i.height : y))),
      r || (!1 !== r && a.smooth)
        ? ((a.xOffset = c + ((m = D - l) * p + (v = y - u) * d) - m),
          (a.yOffset = h + (m * f + v * g) - v))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = D),
      (a.yOrigin = y),
      (a.smooth = !!r),
      (a.origin = e),
      (a.originIsAbsolute = !!n),
      (t.style[Xi] = "0px 0px"),
      o &&
        (Gi(o, a, "xOrigin", l, D),
        Gi(o, a, "yOrigin", u, y),
        Gi(o, a, "xOffset", c, a.xOffset),
        Gi(o, a, "yOffset", h, a.yOffset)),
      t.setAttribute("data-svg-origin", D + " " + y);
  }
  function Ur(t, e, n) {
    var r = fn(e);
    return L(parseFloat(e) + parseFloat($i(t, "x", n + "px", r))) + r;
  }
  function Gr(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function Kr(t) {
    return "string" == typeof t;
  }
  function Zr(t) {
    return "number" == typeof t;
  }
  function $r(t) {
    return Math.round(((t + To) % 1) * Mo) / Mo || (t < 0 ? 0 : 1);
  }
  function Qr(t, e, n) {
    var r = t.length,
      i = ~~(n * r);
    if (t[i] > e) {
      for (; --i && t[i] > e; );
      i < 0 && (i = 0);
    } else for (; t[++i] < e && i < r; );
    return i < r ? i : r - 1;
  }
  function Jr(t, e) {
    return (
      (e.totalLength = t.totalLength),
      t.samples
        ? ((e.samples = t.samples.slice(0)),
          (e.lookup = t.lookup.slice(0)),
          (e.minLength = t.minLength),
          (e.resolution = t.resolution))
        : t.totalPoints && (e.totalPoints = t.totalPoints),
      e
    );
  }
  var ti,
    ei,
    ni,
    ri,
    ii,
    oi,
    si,
    ai,
    li,
    ui,
    ci = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        e.forEach(kt);
      },
      timeline: function (t) {
        return new Xn(t);
      },
      getTweensOf: function (t, e) {
        return B.getTweensOf(t, e);
      },
      getProperty: function (r, t, e, n) {
        Fe(r) && (r = mn(r)[0]);
        var i = rn(r || {}).get,
          o = e ? w : D;
        return (
          "native" === e && (e = ""),
          r &&
            (t
              ? o((($e[t] && $e[t].get) || i)(r, t, e, n))
              : function (t, e, n) {
                  return o((($e[t] && $e[t].get) || i)(r, t, e, n));
                })
        );
      },
      quickSetter: function (n, e, r) {
        var i, o;
        if (1 < (n = mn(n)).length)
          return (
            (i = n.map(function (t) {
              return pi.quickSetter(t, e, r);
            })),
            (o = i.length),
            function (t) {
              for (var e = o; e--; ) i[e](t);
            }
          );
        n = n[0] || {};
        var s = $e[e],
          a = rn(n),
          l = (a.harness && (a.harness.aliases || {})[e]) || e,
          u = s
            ? function (t) {
                var e = new s();
                (ee._pt = 0),
                  e.init(n, r ? t + r : t, ee, 0, [n]),
                  e.render(1, e),
                  ee._pt && ar(1, ee);
              }
            : a.set(n, l);
        return s
          ? u
          : function (t) {
              return u(n, l, r ? t + r : t, a, 1);
            };
      },
      quickTo: function (t, r, e) {
        function n(t, e, n) {
          return i.resetTo(r, t, e, n);
        }
        var i = pi.to(
          t,
          X(
            (((t = {})[r] = "+=0.1"), (t.paused = !0), (t.stagger = 0), t),
            e || {}
          )
        );
        return (n.tween = i), n;
      },
      isTweening: function (t) {
        return 0 < B.getTweensOf(t, !0).length;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = kn(t.ease, ye.ease)), C(ye, t || {});
      },
      config: function (t) {
        return C(De, t || {});
      },
      registerEffect: function (t) {
        var r = t.name,
          i = t.effect,
          e = t.plugins,
          o = t.defaults,
          t = t.extendTimeline;
        (e || "").split(",").forEach(function (t) {
          return (
            t &&
            !$e[t] &&
            !Ye[t] &&
            je(r + " effect requires " + t + " plugin.")
          );
        }),
          (Qe[r] = function (t, e, n) {
            return i(mn(t), X(e || {}, o), n);
          }),
          t &&
            (Xn.prototype[r] = function (t, e, n) {
              return this.add(Qe[r](t, Ae(e) ? e : (n = e) && {}, this), n);
            });
      },
      registerEase: function (t, e) {
        F[t] = kn(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? kn(t, e) : F;
      },
      getById: function (t) {
        return B.getById(t);
      },
      exportRoot: function (t, e) {
        var n,
          r,
          i = new Xn((t = void 0 === t ? {} : t));
        for (
          i.smoothChildTiming = I(t.smoothChildTiming),
            B.remove(i),
            i._dp = 0,
            i._time = i._tTime = B._time,
            n = B._first;
          n;

        )
          (r = n._next),
            (!e &&
              !n._dur &&
              n instanceof N &&
              n.vars.onComplete === n._targets[0]) ||
              K(i, n, n._start - n._delay),
            (n = r);
        return K(B, i, 0), i;
      },
      context: function (t, e) {
        return t ? new yr(t, e) : l;
      },
      matchMedia: function (t) {
        return new br(t);
      },
      matchMediaRefresh: function () {
        return (
          gr.forEach(function (t) {
            var e,
              n,
              r = t.conditions;
            for (n in r) r[n] && ((r[n] = !1), (e = 1));
            e && t.revert();
          }) || dr()
        );
      },
      addEventListener: function (t, e) {
        t = mr[t] || (mr[t] = []);
        ~t.indexOf(e) || t.push(e);
      },
      removeEventListener: function (t, e) {
        (t = mr[t]), (e = t && t.indexOf(e));
        0 <= e && t.splice(e, 1);
      },
      utils: {
        wrap: Dt,
        wrapYoyo: yt,
        distribute: ct,
        random: _n,
        snap: pt,
        normalize: gt,
        getUnit: fn,
        clamp: lt,
        splitColor: bn,
        toArray: mn,
        selector: ut,
        mapRange: xt,
        pipe: ft,
        unitize: dt,
        interpolate: bt,
        shuffle: vn,
      },
      install: u,
      effects: Qe,
      ticker: Tn,
      updateRoot: Xn.updateRoot,
      plugins: $e,
      globalTimeline: B,
      core: {
        PropTween: hr,
        globals: g,
        Tween: N,
        Timeline: Xn,
        Animation: Ln,
        getCache: rn,
        _removeLinkedListItem: T,
        reverting: function () {
          return Kt;
        },
        context: function (t) {
          return t && l && (l.data.push(t), (t._ctx = l)), l;
        },
        suppressOverwrites: function (t) {
          return (Gt = t);
        },
      },
    },
    hi =
      (v("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (ci[t] = N[t]);
      }),
      Tn.add(Xn.updateRoot),
      (ee = ci.to({}, { duration: 0 })),
      function (t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
          n = n._next;
        return n;
      }),
    pi =
      ci.registerPlugin(
        {
          name: "attr",
          init: function (t, e, n, r, i) {
            var o, s, a;
            for (o in ((this.tween = n), e))
              (a = t.getAttribute(o) || ""),
                ((s = this.add(
                  t,
                  "setAttribute",
                  (a || 0) + "",
                  e[o],
                  r,
                  i,
                  0,
                  0,
                  o
                )).op = o),
                (s.b = a),
                this._props.push(o);
          },
          render: function (t, e) {
            for (var n = e._pt; n; )
              Kt ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (t, e) {
            for (var n = e.length; n--; )
              this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
          },
        },
        Cr("roundProps", ht),
        Cr("modifiers"),
        Cr("snap", pt)
      ) || ci,
    t =
      ((N.version = Xn.version = pi.version = "3.13.0"),
      (Jt = 1),
      a() && Pn(),
      F.Power0),
    fi = F.Power1,
    di = F.Power2,
    gi = F.Power3,
    mi = F.Power4,
    vi = F.Linear,
    _i = F.Quad,
    Di = F.Cubic,
    yi = F.Quart,
    xi = F.Quint,
    bi = F.Strong,
    wi = F.Elastic,
    Ci = F.Back,
    Ei = F.SteppedEase,
    Ti = F.Bounce,
    Pi = F.Sine,
    Fi = F.Expo,
    Si = F.Circ,
    Mi = function () {
      return "undefined" != typeof window;
    },
    Ai = {},
    ki = 180 / Math.PI,
    Oi = Math.PI / 180,
    Bi = Math.atan2,
    Ri = /([A-Z])/g,
    Li = /(left|right|width|margin|padding|x)/i,
    Ni = /[\s,\(]\S/,
    Ii = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    z = "transform",
    Xi = z + "Origin",
    zi = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    Yi = function (t, e) {
      e = ei.createElementNS
        ? ei.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : ei.createElement(t);
      return e && e.style ? e : ei.createElement(t);
    },
    Hi = function t(e, n, r) {
      var i = getComputedStyle(e);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(Ri, "-$1").toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && t(e, ji(n) || n, 1)) ||
        ""
      );
    },
    Vi = "O,Moz,ms,Ms,Webkit".split(","),
    ji = function (t, e, n) {
      var r = (e || ii).style,
        i = 5;
      if (t in r && !n) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        i-- && !(Vi[i] + t in r);

      );
      return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? Vi[i] : "") + t;
    },
    Wi = function (e) {
      var n, r;
      try {
        n = e.getBBox();
      } catch (t) {
        (n = Yr(e)), (r = 1);
      }
      return !(n = (n && (n.width || n.height)) || r ? n : Yr(e)) ||
        n.width ||
        n.x ||
        n.y
        ? n
        : {
            x: +Hr(e, ["x", "cx", "x1"]) || 0,
            y: +Hr(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          };
    },
    qi = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Wi(t));
    },
    Ui = function (t, e) {
      var n;
      e &&
        ((t = t.style),
        e in Ai && e !== Xi && (e = z),
        t.removeProperty
          ? (("ms" !== (n = e.substr(0, 2)) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            t.removeProperty(
              "--" === n ? e : e.replace(Ri, "-$1").toLowerCase()
            ))
          : t.removeAttribute(e));
    },
    Gi = function (t, e, n, r, i, o) {
      e = new hr(t._pt, e, n, 0, 1, o ? Mr : Sr);
      return ((t._pt = e).b = r), (e.e = i), t._props.push(n), e;
    },
    Ki = { deg: 1, rad: 1, turn: 1 },
    Zi = { grid: 1, flex: 1 },
    $i = function t(e, n, r, i) {
      var o,
        s,
        a = parseFloat(r) || 0,
        l = (r + "").trim().substr((a + "").length) || "px",
        u = ii.style,
        c = Li.test(n),
        h = "svg" === e.tagName.toLowerCase(),
        p = (h ? "client" : "offset") + (c ? "Width" : "Height"),
        f = "px" === i,
        d = "%" === i;
      return i === l || !a || Ki[i] || Ki[l]
        ? a
        : ("px" === l || f || (a = t(e, n, r, "px")),
          (r = e.getCTM && qi(e)),
          (!d && "%" !== l) || (!Ai[n] && !~n.indexOf("adius"))
            ? ((u[c ? "width" : "height"] = 100 + (f ? l : i)),
              (h =
                ("rem" !== i && ~n.indexOf("adius")) ||
                ("em" === i && e.appendChild && !h)
                  ? e
                  : e.parentNode),
              (s = (h =
                (h = r ? (e.ownerSVGElement || {}).parentNode : h) &&
                h !== ei &&
                h.appendChild
                  ? h
                  : ei.body)._gsap) &&
              d &&
              s.width &&
              c &&
              s.time === Tn.time &&
              !s.uncache
                ? L((a / s.width) * 100)
                : (!d || ("height" !== n && "width" !== n)
                    ? ((!d && "%" !== l) ||
                        Zi[Hi(h, "display")] ||
                        (u.position = Hi(e, "position")),
                      h === e && (u.position = "static"),
                      h.appendChild(ii),
                      (o = ii[p]),
                      h.removeChild(ii),
                      (u.position = "absolute"))
                    : ((l = e.style[n]),
                      (e.style[n] = 100 + i),
                      (o = e[p]),
                      l ? (e.style[n] = l) : Ui(e, n)),
                  c && d && (((s = rn(h)).time = Tn.time), (s.width = h[p])),
                  L(f ? (o * a) / 100 : o && a ? (100 / o) * a : 0)))
            : ((o = r ? e.getBBox()[c ? "width" : "height"] : e[p]),
              L(d ? (a / o) * 100 : (a / 100) * o)));
    },
    Qi = function (t, e, n, r) {
      var i;
      return (
        ri || zr(),
        e in Ii &&
          "transform" !== e &&
          ~(e = Ii[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Ai[e] && "transform" !== e
          ? ((i = oo(t, r)),
            (i =
              "transformOrigin" !== e
                ? i[e]
                : i.svg
                ? i.origin
                : so(Hi(t, Xi)) + " " + i.zOrigin + "px"))
          : ((i = t.style[e]) &&
              "auto" !== i &&
              !r &&
              !~(i + "").indexOf("calc(")) ||
            (i =
              (to[e] && to[e](t, e, n)) ||
              Hi(t, e) ||
              on(t, e) ||
              ("opacity" === e ? 1 : 0)),
        n && !~(i + "").trim().indexOf(" ") ? $i(t, e, i, n) + n : i
      );
    },
    Ji = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    to = {
      clearProps: function (t, e, n, r, i) {
        if ("isFromStart" !== i.data)
          return (
            ((e = t._pt = new hr(t._pt, e, n, 0, 0, jr)).u = r),
            (e.pr = -10),
            (e.tween = i),
            t._props.push(n),
            1
          );
      },
    },
    eo = [1, 0, 0, 1, 0, 0],
    no = {},
    ro = function (t) {
      t = Hi(t, z);
      return Wr(t) ? eo : t.substr(7).match(Re).map(L);
    },
    io = function (t, e) {
      var n,
        r,
        i,
        o = t._gsap || rn(t),
        s = t.style,
        a = ro(t);
      return o.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (a = [
            (r = t.transform.baseVal.consolidate().matrix).a,
            r.b,
            r.c,
            r.d,
            r.e,
            r.f,
          ]).join(",")
          ? eo
          : a
        : (a !== eo ||
            t.offsetParent ||
            t === ni ||
            o.svg ||
            ((r = s.display),
            (s.display = "block"),
            ((o = t.parentNode) &&
              (t.offsetParent || t.getBoundingClientRect().width)) ||
              ((i = 1), (n = t.nextElementSibling), ni.appendChild(t)),
            (a = ro(t)),
            r ? (s.display = r) : Ui(t, "display"),
            i &&
              (n
                ? o.insertBefore(t, n)
                : o
                ? o.appendChild(t)
                : ni.removeChild(t))),
          e && 6 < a.length ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
    },
    oo = function (t, e) {
      var n = t._gsap || new Rn(t);
      if ("x" in n && !e && !n.uncache) return n;
      var r,
        i,
        o,
        s,
        a,
        l,
        u,
        c,
        h,
        p,
        f,
        d,
        g,
        m,
        v,
        _,
        D,
        y,
        x,
        b,
        w,
        C,
        E,
        T,
        P,
        F = t.style,
        S = n.scaleX < 0,
        M = "deg",
        A = getComputedStyle(t),
        k = Hi(t, Xi) || "0",
        O = (r = i = s = a = l = u = c = 0),
        B = (o = 1);
      return (
        (n.svg = !(!t.getCTM || !qi(t))),
        A.translate &&
          (("none" === A.translate &&
            "none" === A.scale &&
            "none" === A.rotate) ||
            (F[z] =
              ("none" !== A.translate
                ? "translate3d(" +
                  (A.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== A.rotate ? "rotate(" + A.rotate + ") " : "") +
              ("none" !== A.scale
                ? "scale(" + A.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== A[z] ? A[z] : "")),
          (F.scale = F.rotate = F.translate = "none")),
        (A = io(t, n.svg)),
        n.svg &&
          ((D = n.uncache
            ? ((y = t.getBBox()),
              (k = n.xOrigin - y.x + "px " + (n.yOrigin - y.y) + "px"),
              "")
            : !e && t.getAttribute("data-svg-origin")),
          qr(t, D || k, !!D || n.originIsAbsolute, !1 !== n.smooth, A)),
        (P = n.xOrigin || 0),
        (E = n.yOrigin || 0),
        A !== eo &&
          ((f = A[0]),
          (d = A[1]),
          (g = A[2]),
          (m = A[3]),
          (O = v = A[4]),
          (r = _ = A[5]),
          6 === A.length
            ? ((B = Math.sqrt(f * f + d * d)),
              (o = Math.sqrt(m * m + g * g)),
              (s = f || d ? Bi(d, f) * ki : 0),
              (u = g || m ? Bi(g, m) * ki + s : 0) &&
                (o *= Math.abs(Math.cos(u * Oi))),
              n.svg && ((O -= P - (P * f + E * g)), (r -= E - (P * d + E * m))))
            : ((P = A[6]),
              (E = A[7]),
              (b = A[8]),
              (w = A[9]),
              (C = A[10]),
              (T = A[11]),
              (O = A[12]),
              (r = A[13]),
              (i = A[14]),
              (a = (A = Bi(P, C)) * ki),
              A &&
                ((D = v * (h = Math.cos(-A)) + b * (p = Math.sin(-A))),
                (y = _ * h + w * p),
                (x = P * h + C * p),
                (b = v * -p + b * h),
                (w = _ * -p + w * h),
                (C = P * -p + C * h),
                (T = E * -p + T * h),
                (v = D),
                (_ = y),
                (P = x)),
              (l = (A = Bi(-g, C)) * ki),
              A &&
                ((h = Math.cos(-A)),
                (T = m * (p = Math.sin(-A)) + T * h),
                (f = D = f * h - b * p),
                (d = y = d * h - w * p),
                (g = x = g * h - C * p)),
              (s = (A = Bi(d, f)) * ki),
              A &&
                ((D = f * (h = Math.cos(A)) + d * (p = Math.sin(A))),
                (y = v * h + _ * p),
                (d = d * h - f * p),
                (_ = _ * h - v * p),
                (f = D),
                (v = y)),
              a &&
                359.9 < Math.abs(a) + Math.abs(s) &&
                ((a = s = 0), (l = 180 - l)),
              (B = L(Math.sqrt(f * f + d * d + g * g))),
              (o = L(Math.sqrt(_ * _ + P * P))),
              (A = Bi(v, _)),
              (u = 2e-4 < Math.abs(A) ? A * ki : 0),
              (c = T ? 1 / (T < 0 ? -T : T) : 0)),
          n.svg &&
            ((D = t.getAttribute("transform")),
            (n.forceCSS = t.setAttribute("transform", "") || !Wr(Hi(t, z))),
            D && t.setAttribute("transform", D))),
        90 < Math.abs(u) &&
          Math.abs(u) < 270 &&
          (S
            ? ((B *= -1),
              (u += s <= 0 ? 180 : -180),
              (s += s <= 0 ? 180 : -180))
            : ((o *= -1), (u += u <= 0 ? 180 : -180))),
        (e = e || n.uncache),
        (n.x =
          O -
          ((n.xPercent =
            O &&
            ((!e && n.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-O) ? -50 : 0)))
            ? (t.offsetWidth * n.xPercent) / 100
            : 0) +
          "px"),
        (n.y =
          r -
          ((n.yPercent =
            r &&
            ((!e && n.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
            ? (t.offsetHeight * n.yPercent) / 100
            : 0) +
          "px"),
        (n.z = i + "px"),
        (n.scaleX = L(B)),
        (n.scaleY = L(o)),
        (n.rotation = L(s) + M),
        (n.rotationX = L(a) + M),
        (n.rotationY = L(l) + M),
        (n.skewX = u + M),
        (n.skewY = 0 + M),
        (n.transformPerspective = c + "px"),
        (n.zOrigin = parseFloat(k.split(" ")[2]) || (!e && n.zOrigin) || 0) &&
          (F[Xi] = so(k)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = De.force3D),
        (n.renderTransform = n.svg ? po : ai ? ho : ao),
        (n.uncache = 0),
        n
      );
    },
    so = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    ao = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        ho(t, e);
    },
    lo = "0deg",
    uo = "0px",
    co = ") ",
    ho = function (t, e) {
      var n,
        r,
        i,
        e = e || this,
        o = e.xPercent,
        s = e.yPercent,
        a = e.x,
        l = e.y,
        u = e.z,
        c = e.rotation,
        h = e.rotationY,
        p = e.rotationX,
        f = e.skewX,
        d = e.skewY,
        g = e.scaleX,
        m = e.scaleY,
        v = e.transformPerspective,
        _ = e.force3D,
        D = e.target,
        e = e.zOrigin,
        y = "",
        t = ("auto" === _ && t && 1 !== t) || !0 === _;
      !e ||
        (p === lo && h === lo) ||
        ((_ = parseFloat(h) * Oi),
        (n = Math.sin(_)),
        (r = Math.cos(_)),
        (_ = parseFloat(p) * Oi),
        (i = Math.cos(_)),
        (a = Ur(D, a, n * i * -e)),
        (l = Ur(D, l, -Math.sin(_) * -e)),
        (u = Ur(D, u, r * i * -e + e))),
        v !== uo && (y += "perspective(" + v + co),
        (o || s) && (y += "translate(" + o + "%, " + s + "%) "),
        (!t && a === uo && l === uo && u === uo) ||
          (y +=
            u !== uo || t
              ? "translate3d(" + a + ", " + l + ", " + u + ") "
              : "translate(" + a + ", " + l + co),
        c !== lo && (y += "rotate(" + c + co),
        h !== lo && (y += "rotateY(" + h + co),
        p !== lo && (y += "rotateX(" + p + co),
        (f === lo && d === lo) || (y += "skew(" + f + ", " + d + co),
        (1 === g && 1 === m) || (y += "scale(" + g + ", " + m + co),
        (D.style[z] = y || "translate(0, 0)");
    },
    po = function (t, e) {
      var n,
        r,
        i,
        o,
        s,
        e = e || this,
        a = e.xPercent,
        l = e.yPercent,
        u = e.x,
        c = e.y,
        h = e.rotation,
        p = e.skewX,
        f = e.skewY,
        d = e.scaleX,
        g = e.scaleY,
        m = e.target,
        v = e.xOrigin,
        _ = e.yOrigin,
        D = e.xOffset,
        y = e.yOffset,
        e = e.forceCSS,
        x = parseFloat(u),
        b = parseFloat(c),
        h = parseFloat(h),
        p = parseFloat(p);
      (f = parseFloat(f)) && ((p += f = parseFloat(f)), (h += f)),
        h || p
          ? ((h *= Oi),
            (p *= Oi),
            (n = Math.cos(h) * d),
            (r = Math.sin(h) * d),
            (i = Math.sin(h - p) * -g),
            (o = Math.cos(h - p) * g),
            p &&
              ((f *= Oi),
              (s = Math.tan(p - f)),
              (i *= s = Math.sqrt(1 + s * s)),
              (o *= s),
              f &&
                ((s = Math.tan(f)), (n *= s = Math.sqrt(1 + s * s)), (r *= s))),
            (n = L(n)),
            (r = L(r)),
            (i = L(i)),
            (o = L(o)))
          : ((n = d), (o = g), (r = i = 0)),
        ((x && !~(u + "").indexOf("px")) || (b && !~(c + "").indexOf("px"))) &&
          ((x = $i(m, "x", u, "px")), (b = $i(m, "y", c, "px"))),
        (v || _ || D || y) &&
          ((x = L(x + v - (v * n + _ * i) + D)),
          (b = L(b + _ - (v * r + _ * o) + y))),
        (a || l) &&
          ((s = m.getBBox()),
          (x = L(x + (a / 100) * s.width)),
          (b = L(b + (l / 100) * s.height))),
        m.setAttribute(
          "transform",
          (s =
            "matrix(" +
            n +
            "," +
            r +
            "," +
            i +
            "," +
            o +
            "," +
            x +
            "," +
            b +
            ")")
        ),
        e && (m.style[z] = s);
    },
    fo =
      (v("padding,margin,Width,Radius", function (e, n) {
        var t = "Right",
          r = "Bottom",
          i = "Left",
          a = (
            n < 3 ? ["Top", t, r, i] : ["Top" + i, "Top" + t, r + t, r + i]
          ).map(function (t) {
            return n < 2 ? e + t : "border" + t + e;
          });
        to[1 < n ? "border" + e : e] = function (e, t, n, r, i) {
          var o, s;
          if (arguments.length < 4)
            return (
              (o = a.map(function (t) {
                return Qi(e, t, n);
              })),
              5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
            );
          (o = (r + "").split(" ")),
            (s = {}),
            a.forEach(function (t, e) {
              return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
            }),
            e.init(t, s, i);
        };
      }),
      {
        name: "css",
        register: zr,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, n, r, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            h,
            p,
            f,
            L,
            d,
            g,
            N,
            m,
            v,
            _,
            I,
            D,
            y,
            x,
            b,
            X = this._props,
            w = t.style,
            C = n.vars.startAt;
          for (u in (ri || zr(),
          (this.styles = this.styles || Xr(t)),
          (m = this.styles.props),
          (this.tween = n),
          e))
            if (
              "autoRound" !== u &&
              ((s = e[u]), !$e[u] || !Yn(u, e, n, r, t, i))
            )
              if (
                ((y = typeof s),
                (l = to[u]),
                "string" ===
                  (y =
                    "function" === y ? typeof (s = s.call(n, r, t, i)) : y) &&
                  ~s.indexOf("random(") &&
                  (s = Dn(s)),
                l)
              )
                l(this, t, u, s, n) && (N = 1);
              else if ("--" === u.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(u) + "").trim()),
                  (s += ""),
                  (Cn.lastIndex = 0),
                  Cn.test(o) || ((c = fn(o)), (h = fn(s))),
                  h ? c !== h && (o = $i(t, u, o, h) + h) : c && (s += c),
                  this.add(w, "setProperty", o, s, r, i, 0, 0, u),
                  X.push(u),
                  m.push(u, 0, w[u]);
              else if ("undefined" !== y) {
                if (
                  (C && u in C
                    ? ((o =
                        "function" == typeof C[u]
                          ? C[u].call(n, r, t, i)
                          : C[u]),
                      Fe(o) && ~o.indexOf("random(") && (o = Dn(o)),
                      fn(o + "") ||
                        "auto" === o ||
                        (o += De.units[u] || fn(Qi(t, u)) || ""),
                      "=" === (o + "").charAt(1) && (o = Qi(t, u)))
                    : (o = Qi(t, u)),
                  (l = parseFloat(o)),
                  (p =
                    "string" === y && "=" === s.charAt(1) && s.substr(0, 2)) &&
                    (s = s.substr(2)),
                  (a = parseFloat(s)),
                  u in Ii &&
                    ("autoAlpha" === u &&
                      (1 === l &&
                        "hidden" === Qi(t, "visibility") &&
                        a &&
                        (l = 0),
                      m.push("visibility", 0, w.visibility),
                      Gi(
                        this,
                        w,
                        "visibility",
                        l ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== u &&
                      "transform" !== u &&
                      ~(u = Ii[u]).indexOf(",") &&
                      (u = u.split(",")[0])),
                  (f = u in Ai))
                )
                  if (
                    (this.styles.save(u),
                    "string" === y &&
                      "var(--" === s.substring(0, 6) &&
                      ((s = Hi(t, s.substring(4, s.indexOf(")")))),
                      (a = parseFloat(s))),
                    L ||
                      (((d = t._gsap).renderTransform && !e.parseTransform) ||
                        oo(t, e.parseTransform),
                      (g = !1 !== e.smoothOrigin && d.smooth),
                      ((L = this._pt =
                        new hr(
                          this._pt,
                          w,
                          z,
                          0,
                          1,
                          d.renderTransform,
                          d,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === u)
                  )
                    (this._pt = new hr(
                      this._pt,
                      d,
                      "scaleY",
                      d.scaleY,
                      (p ? sn(d.scaleY, p + a) : a) - d.scaleY || 0,
                      Er
                    )),
                      (this._pt.u = 0),
                      X.push("scaleY", u),
                      (u += "X");
                  else {
                    if ("transformOrigin" === u) {
                      m.push(Xi, 0, w[Xi]),
                        (b = x = y = void 0),
                        (y = (D = s).split(" ")),
                        (x = y[0]),
                        (b = y[1] || "50%"),
                        ("top" !== x &&
                          "bottom" !== x &&
                          "left" !== b &&
                          "right" !== b) ||
                          ((D = x), (x = b), (b = D)),
                        (y[0] = Ji[x] || x),
                        (y[1] = Ji[b] || b),
                        (s = y.join(" ")),
                        d.svg
                          ? qr(t, s, 0, g, 0, this)
                          : ((h = parseFloat(s.split(" ")[2]) || 0) !==
                              d.zOrigin && Gi(this, d, "zOrigin", d.zOrigin, h),
                            Gi(this, w, u, so(o), so(s)));
                      continue;
                    }
                    if ("svgOrigin" === u) {
                      qr(t, s, 1, g, 0, this);
                      continue;
                    }
                    if (u in no) {
                      (D = this),
                        (x = d),
                        (b = u),
                        (y = l),
                        (v = p ? sn(l, p + s) : s),
                        (I = _ = R = k = void 0),
                        (k = 360),
                        (R = Fe(v)),
                        (_ =
                          parseFloat(v) * (R && ~v.indexOf("rad") ? ki : 1) -
                          y),
                        (I = y + _ + "deg"),
                        R &&
                          ("short" === (R = v.split("_")[1]) &&
                            (_ %= k) !== _ % 180 &&
                            (_ += _ < 0 ? k : -k),
                          "cw" === R && _ < 0
                            ? (_ = ((_ + 36e9) % k) - ~~(_ / k) * k)
                            : "ccw" === R &&
                              0 < _ &&
                              (_ = ((_ - 36e9) % k) - ~~(_ / k) * k)),
                        (D._pt = v = new hr(D._pt, x, b, y, _, Tr)),
                        (v.e = I),
                        (v.u = "deg"),
                        D._props.push(b);
                      continue;
                    }
                    if ("smoothOrigin" === u) {
                      Gi(this, d, "smooth", d.smooth, s);
                      continue;
                    }
                    if ("force3D" === u) {
                      d[u] = s;
                      continue;
                    }
                    if ("transform" === u) {
                      M = S = F = S = P = T = E = R = B = void 0;
                      var E,
                        T,
                        P,
                        F,
                        S,
                        M,
                        A = this,
                        k = s,
                        O = t,
                        B = Gr({}, O._gsap),
                        R = O.style;
                      for (T in (B.svg
                        ? ((P = O.getAttribute("transform")),
                          O.setAttribute("transform", ""),
                          (R[z] = k),
                          (E = oo(O, 1)),
                          Ui(O, z),
                          O.setAttribute("transform", P))
                        : ((P = getComputedStyle(O)[z]),
                          (R[z] = k),
                          (E = oo(O, 1)),
                          (R[z] = P)),
                      Ai))
                        (P = B[T]) !== (S = E[T]) &&
                          "perspective,force3D,transformOrigin,svgOrigin".indexOf(
                            T
                          ) < 0 &&
                          ((F =
                            fn(P) !== (M = fn(S))
                              ? $i(O, T, P, M)
                              : parseFloat(P)),
                          (S = parseFloat(S)),
                          (A._pt = new hr(A._pt, E, T, F, S - F, Er)),
                          (A._pt.u = M || 0),
                          A._props.push(T));
                      Gr(E, B);
                      continue;
                    }
                  }
                else u in w || (u = ji(u) || u);
                if (
                  f ||
                  ((a || 0 === a) && (l || 0 === l) && !Ni.test(s) && u in w)
                )
                  (a = a || 0),
                    (c = (o + "").substr((l + "").length)) !==
                      (h = fn(s) || (u in De.units ? De.units[u] : c)) &&
                      (l = $i(t, u, o, h)),
                    (this._pt = new hr(
                      this._pt,
                      f ? d : w,
                      u,
                      l,
                      (p ? sn(l, p + a) : a) - l,
                      f || ("px" !== h && "zIndex" !== u) || !1 === e.autoRound
                        ? Er
                        : Fr
                    )),
                    (this._pt.u = h || 0),
                    c !== h &&
                      "%" !== h &&
                      ((this._pt.b = o), (this._pt.r = Pr));
                else if (u in w) Vr.call(this, t, u, o, p ? p + s : s);
                else if (u in t) this.add(t, u, o || t[u], p ? p + s : s, r, i);
                else if ("parseTransform" !== u) {
                  Ve(u, s);
                  continue;
                }
                f ||
                  (u in w
                    ? m.push(u, 0, w[u])
                    : "function" == typeof t[u]
                    ? m.push(u, 2, t[u]())
                    : m.push(u, 1, o || t[u])),
                  X.push(u);
              }
          N && cr(this);
        },
        render: function (t, e) {
          if (e.tween._time || !si())
            for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
          else e.styles.revert();
        },
        get: Qi,
        aliases: Ii,
        getSetter: function (t, e, n) {
          var r = Ii[e];
          return (e = r && r.indexOf(",") < 0 ? r : e) in Ai &&
            e !== Xi &&
            (t._gsap.x || Qi(t, "x"))
            ? n && oi === n
              ? "scale" === e
                ? Br
                : Or
              : (oi = n || {}) && ("scale" === e ? Rr : Lr)
            : t.style && !Me(t.style[e])
            ? Ar
            : ~e.indexOf("-")
            ? kr
            : rr(t, e);
        },
        core: { _removeProperty: Ui, _getMatrix: io },
      }),
    go =
      ((pi.utils.checkPrefix = ji),
      (pi.core.getStyleSaver = Xr),
      (li = v(
        (Nl = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
          "," +
          (vl = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          Ai[t] = 1;
        }
      )),
      v(vl, function (t) {
        (De.units[t] = "deg"), (no[t] = 1);
      }),
      (Ii[li[13]] = Nl + "," + vl),
      v(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          t = t.split(":");
          Ii[t[1]] = li[t[0]];
        }
      ),
      v(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          De.units[t] = "px";
        }
      ),
      pi.registerPlugin(fo),
      /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
    mo = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    vo = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    _o = /(^[#\.][a-z]|[a-y][a-z])/i,
    Do = Math.PI / 180,
    yo = 180 / Math.PI,
    xo = Math.sin,
    bo = Math.cos,
    wo = Math.abs,
    Co = Math.sqrt,
    Eo = Math.atan2,
    To = 1e8,
    Po = function (t) {
      return void 0 === t;
    },
    Fo = {},
    So = {},
    Mo = 1e5,
    x = function (t) {
      return Math.round(t * Mo) / Mo || 0;
    },
    Ao = function (t) {
      return Math.round(1e10 * t) / 1e10 || 0;
    },
    ko = function (t, e, n, r) {
      var i = t[e],
        o = 1 === r ? 6 : Vo(i, n, r);
      if ((o || !r) && o + n + 2 < i.length)
        return t.splice(e, 0, i.slice(0, n + o + 2)), i.splice(0, n + o), 1;
    },
    Oo = function (t, e) {
      var n = t.length;
      for (e || t.reverse(); n--; ) t[n].reversed || No(t[n]);
    },
    Bo = function (t, e) {
      var n = t.length,
        r = t[n - 1] || [],
        i = r.length;
      n &&
        e[0] === r[i - 2] &&
        e[1] === r[i - 1] &&
        ((e = r.concat(e.slice(2))), n--),
        (t[n] = e);
    };
  function Ro(t) {
    var e,
      n = (t = (Kr(t) && _o.test(t) && document.querySelector(t)) || t)
        .getAttribute
        ? t
        : 0;
    return n && (t = t.getAttribute("d"))
      ? (n._gsPath || (n._gsPath = {}),
        (e = n._gsPath[t]) && !e._dirty ? e : (n._gsPath[t] = Uo(t)))
      : t
      ? Kr(t)
        ? Uo(t)
        : Zr(t[0])
        ? [t]
        : t
      : console.warn("Expecting a <path> element or an SVG path data string");
  }
  function Lo(t) {
    for (var e = [], n = 0; n < t.length; n++) e[n] = Jr(t[n], t[n].slice(0));
    return Jr(t, e);
  }
  function No(t) {
    var e,
      n = 0;
    for (t.reverse(); n < t.length; n += 2)
      (e = t[n]), (t[n] = t[n + 1]), (t[n + 1] = e);
    t.reversed = !t.reversed;
  }
  var Io = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2",
  };
  function Xo(t, e) {
    var n,
      r,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      h,
      p,
      f,
      d,
      g,
      m,
      v,
      _,
      D = t.tagName.toLowerCase(),
      y = 0.552284749831;
    return "path" !== D && t.getBBox
      ? ((s = (function (t, e) {
          var n,
            r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
            i = [].slice.call(t.attributes),
            o = i.length;
          for (e = "," + e + ","; -1 < --o; )
            (n = i[o].nodeName.toLowerCase()),
              e.indexOf("," + n + ",") < 0 &&
                r.setAttributeNS(null, n, i[o].nodeValue);
          return r;
        })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
        (_ = (function (t, e) {
          for (var n = e ? e.split(",") : [], r = {}, i = n.length; -1 < --i; )
            r[n[i]] = +t.getAttribute(n[i]) || 0;
          return r;
        })(t, Io[D])),
        "rect" === D
          ? ((i = _.rx),
            (o = _.ry || i),
            (n = _.x),
            (r = _.y),
            (a = _.width - 2 * i),
            (l = _.height - 2 * o),
            (m =
              i || o
                ? "M" +
                  (f = (h = (c = n + i) + a) + i) +
                  "," +
                  (d = r + o) +
                  " V" +
                  (g = d + l) +
                  " C" +
                  [
                    f,
                    (m = g + o * y),
                    (p = h + i * y),
                    (v = g + o),
                    h,
                    v,
                    h - (h - c) / 3,
                    v,
                    c + (h - c) / 3,
                    v,
                    c,
                    v,
                    (u = n + i * (1 - y)),
                    v,
                    n,
                    m,
                    n,
                    g,
                    n,
                    g - (g - d) / 3,
                    n,
                    d + (g - d) / 3,
                    n,
                    d,
                    n,
                    (v = r + o * (1 - y)),
                    u,
                    r,
                    c,
                    r,
                    c + (h - c) / 3,
                    r,
                    h - (h - c) / 3,
                    r,
                    h,
                    r,
                    p,
                    r,
                    f,
                    v,
                    f,
                    d,
                  ].join(",") +
                  "z"
                : "M" +
                  (n + a) +
                  "," +
                  r +
                  " v" +
                  l +
                  " h" +
                  -a +
                  " v" +
                  -l +
                  " h" +
                  a +
                  "z"))
          : "circle" === D || "ellipse" === D
          ? ((g =
              "circle" === D
                ? (i = o = _.r) * y
                : ((i = _.rx), (o = _.ry) * y)),
            (m =
              "M" +
              ((n = _.cx) + i) +
              "," +
              (r = _.cy) +
              " C" +
              [
                n + i,
                r + g,
                n + (u = i * y),
                r + o,
                n,
                r + o,
                n - u,
                r + o,
                n - i,
                r + g,
                n - i,
                r,
                n - i,
                r - g,
                n - u,
                r - o,
                n,
                r - o,
                n + u,
                r - o,
                n + i,
                r - g,
                n + i,
                r,
              ].join(",") +
              "z"))
          : "line" === D
          ? (m = "M" + _.x1 + "," + _.y1 + " L" + _.x2 + "," + _.y2)
          : ("polyline" !== D && "polygon" !== D) ||
            ((m =
              "M" +
              (n = (c =
                (t.getAttribute("points") + "").match(mo) || []).shift()) +
              "," +
              (r = c.shift()) +
              " L" +
              c.join(",")),
            "polygon" === D && (m += "," + n + "," + r + "z")),
        s.setAttribute("d", ts((s._gsRawPath = Uo(m)))),
        e &&
          t.parentNode &&
          (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)),
        s)
      : t;
  }
  function zo(t, e, n) {
    var r,
      i = t[e],
      o = t[e + 2],
      s = t[e + 4];
    return (
      (i += (o - i) * n),
      (r =
        (o += (s - o) * n) +
        (s + (t[e + 6] - s) * n - o) * n -
        (i += (o - i) * n)),
      (i = t[e + 1]),
      (o = t[e + 3]),
      (s = t[e + 5]),
      (i += (o - i) * n),
      x(
        Eo(
          (o += (s - o) * n) +
            (s + (t[e + 7] - s) * n - o) * n -
            (i += (o - i) * n),
          r
        ) * yo
      )
    );
  }
  function Yo(t, e, n) {
    (n = Po(n) ? 1 : Ao(n) || 0), (e = Ao(e) || 0);
    var r,
      i,
      o,
      s,
      a,
      l = Math.max(0, ~~(wo(n - e) - 1e-8)),
      u = Lo(t),
      t =
        (n < e && ((e = 1 - e), (n = 1 - n), Oo(u), (u.totalLength = 0)),
        (e < 0 || n < 0) &&
          ((e += t = Math.abs(~~Math.min(e, n)) + 1), (n += t)),
        u.totalLength || Ho(u),
        1 < n),
      c = jo(u, e, Fo, !0),
      h = jo(u, n, So),
      p = h.segment,
      f = c.segment,
      d = h.segIndex,
      g = c.segIndex,
      m = h.i,
      v = c.i,
      _ = g === d,
      D = m === v && _;
    if (t || l) {
      for (
        t = d < g || (_ && m < v) || (D && h.t < c.t),
          ko(u, g, v, c.t) &&
            (g++,
            t ||
              (d++,
              D ? ((h.t = (h.t - c.t) / (1 - c.t)), (m = 0)) : _ && (m -= v))),
          Math.abs(1 - (n - e)) < 1e-5
            ? (d = g - 1)
            : !h.t && d
            ? d--
            : ko(u, d, m, h.t) && t && g++,
          1 === c.t && (g = (g + 1) % u.length),
          i = [],
          s = 1 + (o = u.length) * l,
          s += (o - (a = g) + d) % o,
          r = 0;
        r < s;
        r++
      )
        Bo(i, u[a++ % o]);
      u = i;
    } else if (((t = 1 === h.t ? 6 : Vo(p, m, h.t)), e !== n))
      for (
        l = Vo(f, v, D ? c.t / h.t : c.t),
          _ && (t += l),
          p.splice(m + t + 2),
          (l || v) && f.splice(0, v + l),
          r = u.length;
        r--;

      )
        (r < g || d < r) && u.splice(r, 1);
    else
      (p.angle = zo(p, m + t, 0)),
        (c = p[(m += t)]),
        (h = p[m + 1]),
        (p.length = p.totalLength = 0),
        (p.totalPoints = u.totalPoints = 8),
        p.push(c, h, c, h, c, h, c, h);
    return (u.totalLength = 0), u;
  }
  function Ho(t, e) {
    for (var n, r, i = (n = r = 0); i < t.length; i++)
      (t[i].resolution = ~~e || 12),
        (r += t[i].length),
        (n += (function (t, e, n) {
          (e = e || 0), t.samples || ((t.samples = []), (t.lookup = []));
          var r,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            h,
            p,
            f,
            d,
            g,
            m,
            v,
            _,
            D = ~~t.resolution || 12,
            y = 1 / D,
            x = n ? e + 6 * n + 1 : t.length,
            b = t[e],
            w = t[e + 1],
            C = e ? (e / 6) * D : 0,
            E = t.samples,
            T = t.lookup,
            P = (e ? t.minLength : To) || To,
            F = E[C + n * D - 1],
            S = e ? E[C - 1] : 0;
          for (E.length = T.length = 0, i = e + 2; i < x; i += 6) {
            if (
              ((o = t[i + 4] - b),
              (s = t[i + 2] - b),
              (a = t[i] - b),
              (c = t[i + 5] - w),
              (h = t[i + 3] - w),
              (p = t[i + 1] - w),
              (u = f = 0),
              wo(o) < 0.01 && wo(c) < 0.01 && wo(a) + wo(p) < 0.01)
            )
              8 < t.length && (t.splice(i, 6), (i -= 6), (x -= 6));
            else
              for (r = 1; r <= D; r++)
                (l =
                  u -
                  (u =
                    ((g = y * r) * g * o + 3 * (d = 1 - g) * (g * s + d * a)) *
                    g)),
                  (d = f - (f = (g * g * c + 3 * d * (g * h + d * p)) * g)),
                  (v = Co(d * d + l * l)) < P && (P = v),
                  (S += v),
                  (E[C++] = S);
            (b += o), (w += c);
          }
          if (F) for (F -= S; C < E.length; C++) E[C] += F;
          if (E.length && P) {
            if (
              ((t.totalLength = _ = E[E.length - 1] || 0),
              _ / (t.minLength = P) < 9999)
            )
              for (r = v = m = 0; r < _; r += P) T[v++] = E[m] < r ? ++m : m;
          } else t.totalLength = E[0] = 0;
          return e ? S - E[e / 2 - 1] : S;
        })(t[i]));
    return (t.totalPoints = r), (t.totalLength = n), t;
  }
  function Vo(t, e, n) {
    if (n <= 0 || 1 <= n) return 0;
    var r = t[e],
      i = t[e + 1],
      o = t[e + 2],
      s = t[e + 3],
      a = t[e + 4],
      l = t[e + 5],
      r = r + (o - r) * n,
      o = o + (a - o) * n,
      i = i + (s - i) * n,
      s = s + (l - s) * n,
      u = r + (o - r) * n,
      c = i + (s - i) * n,
      a = a + (t[e + 6] - a) * n,
      l = l + (t[e + 7] - l) * n;
    return (
      (o += (a - o) * n),
      (s += (l - s) * n),
      t.splice(
        e + 2,
        4,
        x(r),
        x(i),
        x(u),
        x(c),
        x(u + (o - u) * n),
        x(c + (s - c) * n),
        x(o),
        x(s),
        x(a),
        x(l)
      ),
      t.samples &&
        t.samples.splice(((e / 6) * t.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
      6
    );
  }
  function jo(t, e, n, r) {
    (n = n || {}), t.totalLength || Ho(t), (e < 0 || 1 < e) && (e = $r(e));
    var i,
      o,
      s,
      a,
      l,
      u,
      c,
      h = 0,
      p = t[0];
    if (e)
      if (1 === e) u = (p = t[(h = t.length - (c = 1))]).length - 8;
      else {
        if (1 < t.length) {
          for (
            s = t.totalLength * e, l = u = 0;
            (l += t[u++].totalLength) < s;

          )
            h = u;
          e = (s - (a = l - (p = t[h]).totalLength)) / (l - a) || 0;
        }
        (i = p.samples),
          (o = p.resolution),
          (s = p.totalLength * e),
          (a = (u = p.lookup.length
            ? p.lookup[~~(s / p.minLength)] || 0
            : Qr(i, s, e))
            ? i[u - 1]
            : 0),
          (l = i[u]) < s && ((a = l), (l = i[++u])),
          (c = (1 / o) * ((s - a) / (l - a) + (u % o))),
          (u = 6 * ~~(u / o)),
          r &&
            1 === c &&
            (u + 6 < p.length
              ? ((u += 6), (c = 0))
              : h + 1 < t.length && ((u = c = 0), (p = t[++h])));
      }
    else p = t[(c = u = h = 0)];
    return (
      (n.t = c), (n.i = u), (n.path = t), (n.segment = p), (n.segIndex = h), n
    );
  }
  function Wo(t, e, n, r) {
    var i,
      o,
      s,
      a,
      l,
      u,
      c = t[0],
      r = r || {};
    if (((e < 0 || 1 < e) && (e = $r(e)), c.lookup || Ho(t), 1 < t.length)) {
      for (o = t.totalLength * e, s = a = 0; (s += t[a++].totalLength) < o; )
        c = t[a];
      e = (o - (u = s - c.totalLength)) / (s - u) || 0;
    }
    return (
      (l = c.samples),
      (i = c.resolution),
      (o = c.totalLength * e),
      (u = (a = c.lookup.length
        ? c.lookup[e < 1 ? ~~(o / c.minLength) : c.lookup.length - 1] || 0
        : Qr(l, o, e))
        ? l[a - 1]
        : 0),
      (s = l[a]) < o && ((u = s), (s = l[++a])),
      (e = (1 / i) * ((o - u) / (s - u) + (a % i)) || 0),
      (l = c[(a = 6 * ~~(a / i))]),
      (r.x = x(
        (e * e * (c[a + 6] - l) +
          3 * (u = 1 - e) * (e * (c[a + 4] - l) + u * (c[a + 2] - l))) *
          e +
          l
      )),
      (r.y = x(
        (e * e * (c[a + 7] - (l = c[a + 1])) +
          3 * u * (e * (c[a + 5] - l) + u * (c[a + 3] - l))) *
          e +
          l
      )),
      n &&
        (r.angle = c.totalLength
          ? zo(c, a, 1 <= e ? 1 - 1e-9 : e || 1e-9)
          : c.angle || 0),
      r
    );
  }
  function qo(t, e, n, r, i, o, s) {
    for (var a, l, u, c, h, p = t.length; -1 < --p; )
      for (l = (a = t[p]).length, u = 0; u < l; u += 2)
        (c = a[u]),
          (h = a[u + 1]),
          (a[u] = c * e + h * r + o),
          (a[u + 1] = c * n + h * i + s);
    return (t._dirty = 1), t;
  }
  function Uo(t) {
    function e(t, e, n, r) {
      (c = (n - t) / 3),
        (h = (r - e) / 3),
        a.push(t + c, e + h, n - c, r - h, n, r);
    }
    var n,
      r,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      h,
      p,
      f,
      d,
      g =
        (t + "")
          .replace(vo, function (t) {
            t = +t;
            return t < 1e-4 && -1e-4 < t ? 0 : t;
          })
          .match(go) || [],
      m = [],
      v = 0,
      _ = 0,
      D = g.length,
      y = 0,
      x = "ERROR: malformed path: " + t;
    if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(x), m;
    for (n = 0; n < D; n++)
      if (
        ((f = o),
        isNaN(g[n]) ? (s = (o = g[n].toUpperCase()) !== g[n]) : n--,
        (d = +g[n + 1]),
        (i = +g[n + 2]),
        s && ((d += v), (i += _)),
        n || ((l = d), (u = i)),
        "M" === o)
      )
        a && (a.length < 8 ? --m.length : (y += a.length)),
          (v = l = d),
          (_ = u = i),
          (a = [d, i]),
          m.push(a),
          (n += 2),
          (o = "L");
      else if ("C" === o)
        s || (v = _ = 0),
          (a = a || [0, 0]).push(
            d,
            i,
            v + +g[n + 3],
            _ + +g[n + 4],
            (v += +g[n + 5]),
            (_ += +g[n + 6])
          ),
          (n += 6);
      else if ("S" === o)
        (c = v),
          (h = _),
          ("C" !== f && "S" !== f) ||
            ((c += v - a[a.length - 4]), (h += _ - a[a.length - 3])),
          s || (v = _ = 0),
          a.push(c, h, d, i, (v += +g[n + 3]), (_ += +g[n + 4])),
          (n += 4);
      else if ("Q" === o)
        (c = v + (2 / 3) * (d - v)),
          (h = _ + (2 / 3) * (i - _)),
          s || (v = _ = 0),
          (v += +g[n + 3]),
          (_ += +g[n + 4]),
          a.push(c, h, v + (2 / 3) * (d - v), _ + (2 / 3) * (i - _), v, _),
          (n += 4);
      else if ("T" === o)
        (c = v - a[a.length - 4]),
          (h = _ - a[a.length - 3]),
          a.push(
            v + c,
            _ + h,
            d + (2 / 3) * (v + 1.5 * c - d),
            i + (2 / 3) * (_ + 1.5 * h - i),
            (v = d),
            (_ = i)
          ),
          (n += 2);
      else if ("H" === o) e(v, _, (v = d), _), (n += 1);
      else if ("V" === o) e(v, _, v, (_ = d + (s ? _ - v : 0))), (n += 1);
      else if ("L" === o || "Z" === o)
        "Z" === o && ((d = l), (i = u), (a.closed = !0)),
          ("L" === o || 0.5 < wo(v - d) || 0.5 < wo(_ - i)) &&
            (e(v, _, d, i), "L" === o && (n += 2)),
          (v = d),
          (_ = i);
      else if ("A" === o) {
        if (
          ((f = g[n + 4]),
          (d = g[n + 5]),
          (c = g[n + 6]),
          (h = g[n + 7]),
          (r = 7),
          1 < f.length &&
            (f.length < 3
              ? ((h = c), (c = d), r--)
              : ((h = d), (c = f.substr(2)), (r -= 2)),
            (d = f.charAt(1)),
            (f = f.charAt(0))),
          (p = (function (t, e, n, r, i, o, s, a, l) {
            if (t !== a || e !== l) {
              (n = wo(n)), (r = wo(r));
              for (
                var u = (i % 360) * Do,
                  c = bo(u),
                  u = xo(u),
                  h = Math.PI,
                  p = 2 * h,
                  f = (t - a) / 2,
                  d = (e - l) / 2,
                  g = c * f + u * d,
                  m = -u * f + c * d,
                  f = g * g,
                  d = m * m,
                  v = f / (n * n) + d / (r * r),
                  v = (1 < v && ((n = Co(v) * n), (r = Co(v) * r)), n * n),
                  _ = r * r,
                  v = (v * _ - v * d - _ * f) / (v * d + _ * f),
                  d = (o === s ? -1 : 1) * Co((v = v < 0 ? 0 : v)),
                  _ = ((n * m) / r) * d,
                  f = ((-r * g) / n) * d,
                  D = c * _ - u * f + (t + a) / 2,
                  y = u * _ + c * f + (e + l) / 2,
                  x = (g - _) / n,
                  b = (m - f) / r,
                  o = (-g - _) / n,
                  v = (-m - f) / r,
                  d = x * x + b * b,
                  w = (b < 0 ? -1 : 1) * Math.acos(x / Co(d)),
                  t =
                    (x * v - b * o < 0 ? -1 : 1) *
                    Math.acos((x * o + b * v) / Co(d * (o * o + v * v))),
                  C =
                    (isNaN(t) && (t = h),
                    !s && 0 < t ? (t -= p) : s && t < 0 && (t += p),
                    (w %= p),
                    (t %= p),
                    Math.ceil(wo(t) / (p / 4))),
                  E = [],
                  T = t / C,
                  P = ((4 / 3) * xo(T / 2)) / (1 + bo(T / 2)),
                  F = c * n,
                  S = u * n,
                  M = u * -r,
                  A = c * r,
                  k = 0;
                k < C;
                k++
              )
                (g = bo((i = w + k * T))),
                  (m = xo(i)),
                  (x = bo((i += T))),
                  (b = xo(i)),
                  E.push(g - P * m, m + P * g, x + P * b, b - P * x, x, b);
              for (k = 0; k < E.length; k += 2)
                (g = E[k]),
                  (m = E[k + 1]),
                  (E[k] = g * F + m * M + D),
                  (E[k + 1] = g * S + m * A + y);
              return (E[k - 2] = a), (E[k - 1] = l), E;
            }
          })(
            v,
            _,
            +g[n + 1],
            +g[n + 2],
            +g[n + 3],
            +f,
            +d,
            (s ? v : 0) + +c,
            (s ? _ : 0) + +h
          )),
          (n += r),
          p)
        )
          for (r = 0; r < p.length; r++) a.push(p[r]);
        (v = a[a.length - 2]), (_ = a[a.length - 1]);
      } else console.log(x);
    return (
      (n = a.length) < 6
        ? (m.pop(), (n = 0))
        : a[0] === a[n - 2] && a[1] === a[n - 1] && (a.closed = !0),
      (m.totalPoints = y + n),
      m
    );
  }
  function Go(t, e, n, r, i, o, s, a, l, u, c) {
    var h = (t + n) / 2,
      p = (e + r) / 2,
      f = (n + i) / 2,
      d = (r + o) / 2,
      g = (i + s) / 2,
      m = (o + a) / 2,
      v = (h + f) / 2,
      _ = (p + d) / 2,
      f = (f + g) / 2,
      d = (d + m) / 2,
      D = (v + f) / 2,
      y = (_ + d) / 2,
      x = s - t,
      b = a - e,
      n = wo((n - s) * b - (r - a) * x),
      r = wo((i - s) * b - (o - a) * x);
    u || ((u = [t, e, s, a]), (c = 2)),
      u.splice(c || u.length - 2, 0, D, y),
      l * (x * x + b * b) < (n + r) * (n + r) &&
        ((i = u.length),
        Go(t, e, h, p, v, _, D, y, l, u, c),
        Go(D, y, f, d, g, m, s, a, l, u, c + 2 + (u.length - i)));
  }
  function Ko(t, e) {
    void 0 === e && (e = 1);
    for (var n = t[0], r = 0, i = [n, r], o = 2; o < t.length; o += 2)
      i.push(n, r, t[o], (r = ((t[o] - n) * e) / 2), (n = t[o]), -r);
    return i;
  }
  function Zo(t, e) {
    var n,
      r,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      h,
      p =
        (t = wo(t[0] - t[2]) < 1e-4 && wo(t[1] - t[3]) < 1e-4 ? t.slice(2) : t)
          .length - 2,
      f = +t[0],
      d = +t[1],
      g = +t[2],
      m = +t[3],
      v = [f, d, f, d],
      _ = g - f,
      D = m - d,
      y = Math.abs(t[p] - f) < 0.001 && Math.abs(t[p + 1] - d) < 0.001;
    for (
      y &&
        (t.push(g, m),
        (g = f),
        (m = d),
        (f = t[p - 2]),
        (d = t[p - 1]),
        t.unshift(f, d),
        (p += 4)),
        e = e || 0 === e ? +e : 1,
        i = 2;
      i < p;
      i += 2
    )
      (n = f),
        (r = d),
        (f = g),
        (d = m),
        (g = +t[i + 2]),
        (m = +t[i + 3]),
        (f === g && d === m) ||
          ((c = _),
          (s = D),
          (_ = g - f),
          (D = m - d),
          (c =
            (((h = Co(c * c + s * s)) + (o = Co(_ * _ + D * D))) * e * 0.25) /
            Co(Math.pow(_ / o + c / h, 2) + Math.pow(D / o + s / h, 2))),
          (l =
            f -
            ((s = f - (f - n) * (h ? c / h : 0)) +
              ((((a = f + (g - f) * (o ? c / o : 0)) - s) *
                ((3 * h) / (h + o) + 0.5)) /
                4 || 0))),
          (h =
            d -
            ((u = d - (d - r) * (h ? c / h : 0)) +
              ((((c = d + (m - d) * (o ? c / o : 0)) - u) *
                ((3 * h) / (h + o) + 0.5)) /
                4 || 0))),
          (f === n && d === r) ||
            v.push(x(s + l), x(u + h), x(f), x(d), x(a + l), x(c + h)));
    return (
      f !== g || d !== m || v.length < 4
        ? v.push(x(g), x(m), x(g), x(m))
        : (v.length -= 2),
      2 === v.length
        ? v.push(f, d, f, d, f, d)
        : y && (v.splice(0, 6), (v.length = v.length - 6)),
      v
    );
  }
  function $o(t, e, n, r, i) {
    for (
      var o,
        s,
        a,
        l,
        u,
        c,
        h,
        p,
        f,
        d,
        g = r,
        m = t[e],
        v = t[e + 1],
        _ = t[n],
        D = t[n + 1],
        y = e + 2;
      y < n;
      y += 2
    )
      (s = t[y]),
        (a = t[y + 1]),
        (d = f = p = void 0),
        (d = (h = D) - (u = v)),
        ((f = (c = _) - (l = m)) || d) &&
          (1 < (p = ((s - l) * f + (a - u) * d) / (f * f + d * d))
            ? ((l = c), (u = h))
            : 0 < p && ((l += f * p), (u += d * p))),
        g < (c = Math.pow(s - l, 2) + Math.pow(a - u, 2)) && ((o = y), (g = c));
    r < g &&
      (2 < o - e && $o(t, e, o, r, i),
      i.push(t[o], t[o + 1]),
      2 < n - o && $o(t, o, n, r, i));
  }
  function Qo(t, e) {
    var n,
      r,
      i,
      o,
      s,
      a,
      l = parseFloat(t[0]),
      u = parseFloat(t[1]),
      c = [l, u],
      h = t.length - 2;
    for (e = Math.pow(e || 1, 2), n = 2; n < h; n += 2)
      e <
        (i = l - (r = parseFloat(t[n]))) * i +
          (o = u - (i = parseFloat(t[n + 1]))) * o &&
        (c.push(r, i), (l = r), (u = i));
    return (
      c.push(parseFloat(t[h]), parseFloat(t[1 + h])),
      $o(c, 0, (a = c.length - 2), e, (s = [c[0], c[1]])),
      s.push(c[a], c[1 + a]),
      s
    );
  }
  function Jo(t, e, n, r) {
    for (
      var i, o, s, a = { j: 0, i: 0, t: 0 }, l = To, u = 0;
      u < t.length;
      u++
    )
      for (s = t[u], i = 0; i < s.length; i += 6)
        (o = (function t(e, n, r, i, o, s, a, l, u, c, h, p, f, d) {
          var g,
            m,
            v = (o - i) / s,
            _ = 0,
            D = i;
          for (ui = To; D <= o; )
            (m =
              (g =
                (m = 1 - D) * m * m * a +
                3 * m * m * D * u +
                3 * m * D * D * h +
                D * D * D * f -
                n) *
                g +
              (g =
                m * m * m * l +
                3 * m * m * D * c +
                3 * m * D * D * p +
                D * D * D * d -
                r) *
                g) < ui && ((ui = m), (_ = D)),
              (D += v);
          return 1 < e
            ? t(
                e - 1,
                n,
                r,
                Math.max(_ - v, 0),
                Math.min(_ + v, 1),
                s,
                a,
                l,
                u,
                c,
                h,
                p,
                f,
                d
              )
            : _;
        })(
          1,
          e,
          n,
          0,
          1,
          r || 20,
          s[i],
          s[i + 1],
          s[i + 2],
          s[i + 3],
          s[i + 4],
          s[i + 5],
          s[i + 6],
          s[i + 7]
        )),
          ui < l && ((l = ui), (a.j = u), (a.i = i), (a.t = o));
    return a;
  }
  function ts(t) {
    for (
      var e, n, r, i = "", o = (t = Zr(t[0]) ? [t] : t).length, s = 0;
      s < o;
      s++
    ) {
      for (
        r = t[s],
          i += "M" + x(r[0]) + "," + x(r[1]) + " C",
          e = r.length,
          n = 2;
        n < e;
        n++
      )
        i +=
          x(r[n++]) +
          "," +
          x(r[n++]) +
          " " +
          x(r[n++]) +
          "," +
          x(r[n++]) +
          " " +
          x(r[n++]) +
          "," +
          x(r[n]) +
          " ";
      r.closed && (i += "z");
    }
    return i;
  }
  function es() {
    (os = as())
      ? (os.registerEase("_CE", hs.create), (ss = 1))
      : console.warn("Please gsap.registerPlugin(CustomEase)");
  }
  function ns(t) {
    return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
  }
  function rs(t, e, n) {
    n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
    for (
      var r = -1 * +t[0],
        i = -n,
        o = t.length,
        s = 1 / (+t[o - 2] + r),
        a = (a =
          -e ||
          (Math.abs(+t[o - 1] - +t[1]) < 0.01 * (+t[o - 2] - +t[0])
            ? (function (t) {
                for (var e = t.length, n = ls, r = 1; r < e; r += 6)
                  +t[r] < n && (n = +t[r]);
                return n;
              })(t) + i
            : +t[o - 1] + i))
          ? 1 / a
          : -s,
        l = 0;
      l < o;
      l += 2
    )
      (t[l] = (+t[l] + r) * s), (t[l + 1] = (+t[l + 1] + i) * a);
  }
  function is(t, e, n, r, i, o, s, a, l, u, c) {
    var h = (t + n) / 2,
      p = (e + r) / 2,
      f = (n + i) / 2,
      d = (r + o) / 2,
      g = (i + s) / 2,
      m = (o + a) / 2,
      v = (h + f) / 2,
      _ = (p + d) / 2,
      D = (v + (f = (f + g) / 2)) / 2,
      y = (_ + (d = (d + m) / 2)) / 2,
      x = s - t,
      b = a - e,
      n = Math.abs((n - s) * b - (r - a) * x),
      r = Math.abs((i - s) * b - (o - a) * x);
    return (
      u ||
        ((u = [
          { x: t, y: e },
          { x: s, y: a },
        ]),
        (c = 1)),
      u.splice(c || u.length - 1, 0, { x: D, y: y }),
      l * (x * x + b * b) < (n + r) * (n + r) &&
        ((i = u.length),
        is(t, e, h, p, v, _, D, y, l, u, c),
        is(D, y, f, d, g, m, s, a, l, u, c + 1 + (u.length - i))),
      u
    );
  }
  var os,
    ss,
    as = function () {
      return (
        os ||
        ("undefined" != typeof window &&
          (os = window.gsap) &&
          os.registerPlugin &&
          os)
      );
    },
    ls = 1e20,
    us = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
    cs = /[cLlsSaAhHvVtTqQ]/g,
    hs =
      (((Nl = ps.prototype).setData = function (t, e) {
        e = e || {};
        var n,
          r,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          h = (t = t || "0,0,1,1").match(us),
          p = 1,
          f = [],
          d = [],
          g = e.precision || 1,
          m = g <= 1;
        if (
          ((this.data = t),
          (cs.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
            (h = Uo(t)[0]),
          4 === (n = h.length))
        )
          h.unshift(0, 0), h.push(1, 1), (n = 8);
        else if ((n - 2) % 6) throw "Invalid CustomEase";
        for (
          (0 == +h[0] && 1 == +h[n - 2]) || rs(h, e.height, e.originY),
            this.segment = h,
            o = 2;
          o < n;
          o += 6
        )
          (r = { x: +h[o - 2], y: +h[o - 1] }),
            (i = { x: +h[o + 4], y: +h[o + 5] }),
            f.push(r, i),
            is(
              r.x,
              r.y,
              +h[o],
              +h[o + 1],
              +h[o + 2],
              +h[o + 3],
              i.x,
              i.y,
              1 / (2e5 * g),
              f,
              f.length - 1
            );
        for (n = f.length, o = 0; o < n; o++)
          (l = f[o]),
            (u = f[o - 1] || l),
            (l.x > u.x || (u.y !== l.y && u.x === l.x) || l === u) && l.x <= 1
              ? ((u.cx = l.x - u.x),
                (u.cy = l.y - u.y),
                (u.n = l),
                (u.nx = l.x),
                m &&
                  1 < o &&
                  2 < Math.abs(u.cy / u.cx - f[o - 2].cy / f[o - 2].cx) &&
                  (m = 0),
                u.cx < p &&
                  (u.cx
                    ? (p = u.cx)
                    : ((u.cx = 0.001),
                      o === n - 1 &&
                        ((u.x -= 0.001), (p = Math.min(p, 0.001)), (m = 0)))))
              : (f.splice(o--, 1), n--);
        if (((s = 1 / (n = (1 / p + 1) | 0)), (l = f[(a = 0)]), m)) {
          for (o = 0; o < n; o++)
            (r =
              (l = l.nx < (c = o * s) ? f[++a] : l).y +
              ((c - l.x) / l.cx) * l.cy),
              (d[o] = { x: c, cx: s, y: r, cy: 0, nx: 9 }),
              o && (d[o - 1].cy = r - d[o - 1].y);
          (a = f[f.length - 1]),
            (d[n - 1].cy = a.y - r),
            (d[n - 1].cx = a.x - d[d.length - 1].x);
        } else {
          for (o = 0; o < n; o++) l.nx < o * s && (l = f[++a]), (d[o] = l);
          a < f.length - 1 && (d[o - 1] = f[f.length - 2]);
        }
        return (
          (this.ease = function (t) {
            var e = d[(t * n) | 0] || d[n - 1];
            return (e = e.nx < t ? e.n : e).y + ((t - e.x) / e.cx) * e.cy;
          }),
          (this.ease.custom = this).id &&
            os &&
            os.registerEase(this.id, this.ease),
          this
        );
      }),
      (Nl.getSVGData = function (t) {
        return ps.getSVGData(this, t);
      }),
      (ps.create = function (t, e, n) {
        return new ps(t, e, n).ease;
      }),
      (ps.register = function (t) {
        (os = t), es();
      }),
      (ps.get = function (t) {
        return os.parseEase(t);
      }),
      (ps.getSVGData = function (t, e) {
        var n,
          r,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          p = (e = e || {}).width || 100,
          f = e.height || 100,
          d = e.x || 0,
          g = (e.y || 0) + f,
          m = os.utils.toArray(e.path)[0];
        if (
          (e.invert && ((f = -f), (g = 0)),
          (t = (t = "string" == typeof t ? os.parseEase(t) : t).custom
            ? t.custom
            : t) instanceof ps)
        )
          n = ts(qo([t.segment], p, 0, 0, -f, d, g));
        else {
          for (
            n = [d, g],
              o = 1 / (l = Math.max(5, 200 * (e.precision || 1))),
              u = 5 / (l += 2),
              c = ns(d + o * p),
              r = ((h = ns(g + t(o) * -f)) - g) / (c - d),
              i = 2;
            i < l;
            i++
          )
            (s = ns(d + i * o * p)),
              (a = ns(g + t(i * o) * -f)),
              (Math.abs((a - h) / (s - c) - r) > u || i === l - 1) &&
                (n.push(c, h), (r = (a - h) / (s - c))),
              (c = s),
              (h = a);
          n = "M" + n.join(",");
        }
        return m && m.setAttribute("d", n), n;
      }),
      ps);
  function ps(t, e, n) {
    ss || es(), (this.id = t), this.setData(e, n);
  }
  (hs.version = "3.13.0"), (hs.headless = !0), as() && os.registerPlugin(hs);
  function fs(t, e) {
    var n, r, i, o, s, a;
    if (t.parentNode && (ms || Ps(t)))
      return (
        (a = (n = Os(t))
          ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml"),
        (r = n ? (e ? "rect" : "g") : "div"),
        (i = 2 !== e ? 0 : 100),
        (o = 3 === e ? 100 : 0),
        (s =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"),
        (a = ms.createElementNS
          ? ms.createElementNS(a.replace(/^https/, "http"), r)
          : ms.createElement(r)),
        e &&
          (n
            ? ((xs = xs || fs(t)),
              a.setAttribute("width", 0.01),
              a.setAttribute("height", 0.01),
              a.setAttribute("transform", "translate(" + i + "," + o + ")"),
              xs.appendChild(a))
            : (ys || ((ys = fs(t)).style.cssText = s),
              (a.style.cssText =
                s +
                "width:0.1px;height:0.1px;top:" +
                o +
                "px;left:" +
                i +
                "px"),
              ys.appendChild(a))),
        a
      );
    throw "Need document and parent.";
  }
  function ds(t) {
    var e,
      n = t.getCTM();
    return (
      n ||
        ((e = t.style[Es]),
        (t.style[Es] = "none"),
        t.appendChild(ws),
        (n = ws.getCTM()),
        t.removeChild(ws),
        e
          ? (t.style[Es] = e)
          : t.style.removeProperty(
              Es.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      n || bs.clone()
    );
  }
  function gs(t, e, n, r, i, o, s) {
    return (t.a = e), (t.b = n), (t.c = r), (t.d = i), (t.e = o), (t.f = s), t;
  }
  var ms,
    vs,
    _s,
    Ds,
    ys,
    xs,
    bs,
    ws,
    Cs,
    Es = "transform",
    Ts = Es + "Origin",
    Ps = function (t) {
      var e,
        n,
        r = t.ownerDocument || t;
      !(Es in t.style) &&
        "msTransform" in t.style &&
        (Ts = (Es = "msTransform") + "Origin");
      for (; r.parentNode && (r = r.parentNode); );
      return (
        (vs = window),
        (bs = new Ls()),
        r &&
          ((_s = (ms = r).documentElement),
          (Ds = r.body),
          ((ws = ms.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
          )).style.transform = "none"),
          (t = r.createElement("div")),
          (e = r.createElement("div")),
          (n = r && (r.body || r.firstElementChild)) &&
            n.appendChild &&
            (n.appendChild(t),
            t.appendChild(e),
            t.setAttribute(
              "style",
              "position:static;transform:translate3d(0,0,1px)"
            ),
            (Cs = e.offsetParent !== t),
            n.removeChild(t))),
        r
      );
    },
    Fs = function (t) {
      for (var e, n; t && t !== Ds; )
        (n = t._gsap) && n.uncache && n.get(t, "x"),
          n &&
            !n.scaleX &&
            !n.scaleY &&
            n.renderTransform &&
            ((n.scaleX = n.scaleY = 1e-4),
            n.renderTransform(1, n),
            e ? e.push(n) : (e = [n])),
          (t = t.parentNode);
      return e;
    },
    Ss = [],
    Ms = [],
    As = function () {
      return (
        vs.pageYOffset || ms.scrollTop || _s.scrollTop || Ds.scrollTop || 0
      );
    },
    ks = function () {
      return (
        vs.pageXOffset || ms.scrollLeft || _s.scrollLeft || Ds.scrollLeft || 0
      );
    },
    Os = function (t) {
      return (
        t.ownerSVGElement ||
        ("svg" === (t.tagName + "").toLowerCase() ? t : null)
      );
    },
    Bs = function t(e) {
      return (
        "fixed" === vs.getComputedStyle(e).position ||
        ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
      );
    },
    Rs = function (t, e) {
      var n,
        r,
        i,
        o,
        s = Os(t),
        a = t === s,
        l = s ? Ss : Ms,
        u = t.parentNode,
        c =
          u && !s && u.shadowRoot && u.shadowRoot.appendChild
            ? u.shadowRoot
            : u;
      if (t === vs) return t;
      if (
        (l.length || l.push(fs(t, 1), fs(t, 2), fs(t, 3)), (l = s ? xs : ys), s)
      )
        a
          ? ((i = -(r = ds(t)).e / r.a), (o = -r.f / r.d), (n = bs))
          : t.getBBox
          ? ((r = t.getBBox()),
            (i =
              (n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems
                ? 1 < n.numberOfItems
                  ? (function (t) {
                      for (var e = new Ls(), n = 0; n < t.numberOfItems; n++)
                        e.multiply(t.getItem(n).matrix);
                      return e;
                    })(n)
                  : n.getItem(0).matrix
                : bs).a *
                r.x +
              n.c * r.y),
            (o = n.b * r.x + n.d * r.y))
          : ((n = new Ls()), (i = o = 0)),
          e && "g" === t.tagName.toLowerCase() && (i = o = 0),
          (a ? s : u).appendChild(l),
          l.setAttribute(
            "transform",
            "matrix(" +
              n.a +
              "," +
              n.b +
              "," +
              n.c +
              "," +
              n.d +
              "," +
              (n.e + i) +
              "," +
              (n.f + o) +
              ")"
          );
      else {
        if (((i = o = 0), Cs))
          for (
            n = t.offsetParent, r = t;
            (r = r && r.parentNode) && r !== n && r.parentNode;

          )
            4 < (vs.getComputedStyle(r)[Es] + "").length &&
              ((i = r.offsetLeft), (o = r.offsetTop), (r = 0));
        if (
          "absolute" !== (e = vs.getComputedStyle(t)).position &&
          "fixed" !== e.position
        )
          for (n = t.offsetParent; u && u !== n; )
            (i += u.scrollLeft || 0),
              (o += u.scrollTop || 0),
              (u = u.parentNode);
        ((r = l.style).top = t.offsetTop - o + "px"),
          (r.left = t.offsetLeft - i + "px"),
          (r[Es] = e[Es]),
          (r[Ts] = e[Ts]),
          (r.position = "fixed" === e.position ? "fixed" : "absolute"),
          c.appendChild(l);
      }
      return l;
    },
    Ls =
      (((vl = Ns.prototype).inverse = function () {
        var t = this.a,
          e = this.b,
          n = this.c,
          r = this.d,
          i = this.e,
          o = this.f,
          s = t * r - e * n || 1e-10;
        return gs(
          this,
          r / s,
          -e / s,
          -n / s,
          t / s,
          (n * o - r * i) / s,
          -(t * o - e * i) / s
        );
      }),
      (vl.multiply = function (t) {
        var e = this.a,
          n = this.b,
          r = this.c,
          i = this.d,
          o = this.e,
          s = this.f,
          a = t.a,
          l = t.c,
          u = t.b,
          c = t.d,
          h = t.e,
          t = t.f;
        return gs(
          this,
          a * e + u * r,
          a * n + u * i,
          l * e + c * r,
          l * n + c * i,
          o + h * e + t * r,
          s + h * n + t * i
        );
      }),
      (vl.clone = function () {
        return new Ns(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (vl.equals = function (t) {
        var e = this.a,
          n = this.b,
          r = this.c,
          i = this.d,
          o = this.e,
          s = this.f;
        return (
          e === t.a &&
          n === t.b &&
          r === t.c &&
          i === t.d &&
          o === t.e &&
          s === t.f
        );
      }),
      (vl.apply = function (t, e) {
        var n = t.x,
          t = t.y,
          r = this.a,
          i = this.b,
          o = this.c,
          s = this.d,
          a = this.e,
          l = this.f;
        return (
          ((e = void 0 === e ? {} : e).x = n * r + t * o + a || 0),
          (e.y = n * i + t * s + l || 0),
          e
        );
      }),
      Ns);
  function Ns(t, e, n, r, i, o) {
    gs(
      this,
      (t = void 0 === t ? 1 : t),
      (e = void 0 === e ? 0 : e),
      (n = void 0 === n ? 0 : n),
      (r = void 0 === r ? 1 : r),
      (i = void 0 === i ? 0 : i),
      (o = void 0 === o ? 0 : o)
    );
  }
  function Et(t, e, n, r) {
    if (!t || !t.parentNode || (ms || Ps(t)).documentElement === t)
      return new Ls();
    var i = Fs(t),
      o = Os(t) ? Ss : Ms,
      n = Rs(t, n),
      s = o[0].getBoundingClientRect(),
      a = o[1].getBoundingClientRect(),
      o = o[2].getBoundingClientRect(),
      l = n.parentNode,
      r = !r && Bs(t),
      t = new Ls(
        (a.left - s.left) / 100,
        (a.top - s.top) / 100,
        (o.left - s.left) / 100,
        (o.top - s.top) / 100,
        s.left + (r ? 0 : ks()),
        s.top + (r ? 0 : As())
      );
    if ((l.removeChild(n), i))
      for (s = i.length; s--; )
        ((a = i[s]).scaleX = a.scaleY = 0), a.renderTransform(1, a);
    return e ? t.inverse() : t;
  }
  function Is(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function Xs(t, e) {
    for (var n, r = t.length; r--; )
      e
        ? (t[r].style.touchAction = e)
        : t[r].style.removeProperty("touch-action"),
        (n = t[r].children) && n.length && Xs(n, e);
  }
  function zs(t) {
    for (var e = La.length; e--; ) La[e] === t && La.splice(e, 1);
    Pt.to(Wa, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: Wa,
      data: "_draggable",
    });
  }
  function Ys(t) {
    t.preventDefault && t.preventDefault(),
      t.preventManipulation && t.preventManipulation();
  }
  function Hs(t) {
    (pa = t.touches && xa < t.touches.length), qa(t.target, "touchend", Ua);
  }
  function Vs(t, e) {
    qa(t, "scroll", e), Za(t.parentNode) || Vs(t.parentNode, e);
  }
  function js(t, e) {
    St(t, "scroll", e), Za(t.parentNode) || js(t.parentNode, e);
  }
  function Ws(t, e) {
    var n = $a(t, "x"),
      r = $a(t, "y");
    Za(t) ? (t = Ha) : Ws(t.parentNode, e),
      (t._gsMaxScrollX = n),
      (t._gsMaxScrollY = r),
      e ||
        ((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
  }
  function qs(t, e, n) {
    var r = t.style;
    r &&
      (Ta(r[e]) && (e = aa(e, t) || e),
      null == n
        ? r.removeProperty &&
          r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
        : (r[e] = n));
  }
  function Us(t) {
    if (t === Ft)
      return (
        (Ja.left = Ja.top = 0),
        (Ja.width = Ja.right =
          na.clientWidth || t.innerWidth || ra.clientWidth || 0),
        (Ja.height = Ja.bottom =
          (t.innerHeight || 0) - 20 < na.clientHeight
            ? na.clientHeight
            : t.innerHeight || ra.clientHeight || 0),
        Ja
      );
    var e = t.ownerDocument || ea,
      t = Ta(t.pageX)
        ? t.nodeType || Ta(t.left) || Ta(t.top)
          ? la(t)[0].getBoundingClientRect()
          : t
        : {
            left: t.pageX - Ka(e),
            top: t.pageY - Ga(e),
            right: t.pageX - Ka(e) + 1,
            bottom: t.pageY - Ga(e) + 1,
          };
    return (
      Ta(t.right) && !Ta(t.width)
        ? ((t.right = t.left + t.width), (t.bottom = t.top + t.height))
        : Ta(t.width) &&
          (t = {
            width: t.right - t.left,
            height: t.bottom - t.top,
            right: t.right,
            left: t.left,
            bottom: t.bottom,
            top: t.top,
          }),
      t
    );
  }
  function Tt(t, e, n) {
    var r,
      i = t.vars,
      o = i[n],
      s = t._listeners[e];
    return (
      Ca(o) &&
        (r = o.apply(
          i.callbackScope || t,
          i[n + "Params"] || [t.pointerEvent]
        )),
      (r = s && !1 === t.dispatchEvent(e) ? !1 : r)
    );
  }
  function Gs(t, e) {
    var n = la(t)[0];
    return n.nodeType || n === Ft
      ? el(n, e)
      : Ta(t.left)
      ? {
          left: (n = t.min || t.minX || t.minRotation || 0),
          top: (e = t.min || t.minY || 0),
          width: (t.max || t.maxX || t.maxRotation || 0) - n,
          height: (t.max || t.maxY || 0) - e,
        }
      : {
          left: t.left - (n = { x: 0, y: 0 }).x,
          top: t.top - n.y,
          width: t.width,
          height: t.height,
        };
  }
  function Ks(i, o, t, e, s, n) {
    var r,
      a,
      l,
      u = {};
    if (o)
      if (1 !== s && o instanceof Array) {
        if (((u.end = r = []), (l = o.length), Ea(o[0])))
          for (a = 0; a < l; a++) r[a] = Va(o[a], s);
        else for (a = 0; a < l; a++) r[a] = o[a] * s;
        (t += 1.1), (e -= 1.1);
      } else
        Ca(o)
          ? (u.end = function (t) {
              var e,
                n,
                r = o.call(i, t);
              if (1 !== s)
                if (Ea(r)) {
                  for (n in ((e = {}), r)) e[n] = r[n] * s;
                  r = e;
                } else r *= s;
              return r;
            })
          : (u.end = o);
    return (
      (!t && 0 !== t) || (u.max = t),
      (!e && 0 !== e) || (u.min = e),
      n && (u.velocity = 0),
      u
    );
  }
  function Zs(t) {
    var e;
    return (
      !(!t || !t.getAttribute || t === ra) &&
      (!(
        "true" !== (e = t.getAttribute("data-clickable")) &&
        ("false" === e ||
          (!Xa.test(t.nodeName + "") &&
            "true" !== t.getAttribute("contentEditable")))
      ) ||
        Zs(t.parentNode))
    );
  }
  function $s(t, e) {
    for (var n, r = t.length; r--; )
      ((n = t[r]).ondragstart = n.onselectstart = e ? null : Pa),
        Pt.set(n, { lazy: !0, userSelect: e ? "text" : "none" });
  }
  function Qs(t) {
    return (
      "fixed" === Qa(t).position ||
      ((t = t.parentNode) && 1 === t.nodeType ? Qs(t) : void 0)
    );
  }
  function Js(o, i) {
    (o = Pt.utils.toArray(o)[0]), (i = i || {});
    var s,
      a,
      l,
      t,
      u,
      c,
      h = document.createElement("div"),
      p = h.style,
      e = o.firstChild,
      f = 0,
      d = 0,
      g = o.scrollTop,
      m = o.scrollLeft,
      v = o.scrollWidth,
      _ = o.scrollHeight,
      D = 0,
      y = 0,
      x = 0;
    Da && !1 !== i.force3D
      ? ((u = "translate3d("), (c = "px,0px)"))
      : Fa && ((u = "translate("), (c = "px)")),
      (this.scrollTop = function (t, e) {
        if (!arguments.length) return -this.top();
        this.top(-t, e);
      }),
      (this.scrollLeft = function (t, e) {
        if (!arguments.length) return -this.left();
        this.left(-t, e);
      }),
      (this.left = function (t, e) {
        return arguments.length
          ? ((n = o.scrollLeft - m),
            (r = d),
            (2 < n || n < -2) && !e
              ? ((m = o.scrollLeft),
                Pt.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                this.left(-m),
                void (i.onKill && i.onKill()))
              : ((t = -t) < 0
                  ? ((d = (t - 0.5) | 0), (t = 0))
                  : y < t
                  ? ((d = (t - y) | 0), (t = y))
                  : (d = 0),
                (d || r) &&
                  (this._skip || (p[Fa] = u + -d + "px," + -f + c),
                  0 <= d + D && (p.paddingRight = d + D + "px")),
                (o.scrollLeft = 0 | t),
                void (m = o.scrollLeft)))
          : -(o.scrollLeft + d);
        var n, r;
      }),
      (this.top = function (t, e) {
        return arguments.length
          ? ((n = o.scrollTop - g),
            (r = f),
            (2 < n || n < -2) && !e
              ? ((g = o.scrollTop),
                Pt.killTweensOf(this, { top: 1, scrollTop: 1 }),
                this.top(-g),
                void (i.onKill && i.onKill()))
              : ((t = -t) < 0
                  ? ((f = (t - 0.5) | 0), (t = 0))
                  : x < t
                  ? ((f = (t - x) | 0), (t = x))
                  : (f = 0),
                (!f && !r) || this._skip || (p[Fa] = u + -d + "px," + -f + c),
                (o.scrollTop = 0 | t),
                void (g = o.scrollTop)))
          : -(o.scrollTop + f);
        var n, r;
      }),
      (this.maxScrollTop = function () {
        return x;
      }),
      (this.maxScrollLeft = function () {
        return y;
      }),
      (this.disable = function () {
        for (e = h.firstChild; e; )
          (t = e.nextSibling), o.appendChild(e), (e = t);
        o === h.parentNode && o.removeChild(h);
      }),
      (this.enable = function () {
        if ((e = o.firstChild) !== h) {
          for (; e; ) (t = e.nextSibling), h.appendChild(e), (e = t);
          o.appendChild(h), this.calibrate();
        }
      }),
      (this.calibrate = function (t) {
        var e,
          n,
          r,
          i = o.clientWidth === s;
        (g = o.scrollTop),
          (m = o.scrollLeft),
          (i &&
            o.clientHeight === a &&
            h.offsetHeight === l &&
            v === o.scrollWidth &&
            _ === o.scrollHeight &&
            !t) ||
            ((f || d) &&
              ((n = this.left()),
              (r = this.top()),
              this.left(-o.scrollLeft),
              this.top(-o.scrollTop)),
            (e = Qa(o)),
            (i && !t) ||
              ((p.display = "block"),
              (p.width = "auto"),
              (p.paddingRight = "0px"),
              (D = Math.max(0, o.scrollWidth - o.clientWidth)) &&
                (D +=
                  parseFloat(e.paddingLeft) +
                  (ya ? parseFloat(e.paddingRight) : 0))),
            (p.display = "inline-block"),
            (p.position = "relative"),
            (p.overflow = "visible"),
            (p.verticalAlign = "top"),
            (p.boxSizing = "content-box"),
            (p.width = "100%"),
            (p.paddingRight = D + "px"),
            ya && (p.paddingBottom = e.paddingBottom),
            (s = o.clientWidth),
            (a = o.clientHeight),
            (v = o.scrollWidth),
            (_ = o.scrollHeight),
            (y = o.scrollWidth - s),
            (x = o.scrollHeight - a),
            (l = h.offsetHeight),
            (p.display = "block"),
            (n || r) && (this.left(n), this.top(r)));
      }),
      (this.content = h),
      (this.element = o),
      (this._skip = !1),
      this.enable();
  }
  function ta(t) {
    var e, n, r, i;
    ba() &&
      document.body &&
      ((e = window && window.navigator),
      (Ft = window),
      (ea = document),
      (na = ea.documentElement),
      (ra = ea.body),
      (ia = Aa("div")),
      (ma = !!window.PointerEvent),
      ((oa = Aa("div")).style.cssText =
        "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
      (ga = "grab" === oa.style.cursor ? "grab" : "move"),
      (fa = e && -1 !== e.userAgent.toLowerCase().indexOf("android")),
      (ca =
        ("ontouchstart" in na && "orientation" in Ft) ||
        (e && (0 < e.MaxTouchPoints || 0 < e.msMaxTouchPoints))),
      (e = Aa("div")),
      (n = Aa("div")),
      (r = n.style),
      (i = ra),
      (r.display = "inline-block"),
      (r.position = "relative"),
      (e.style.cssText =
        "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
      e.appendChild(n),
      i.appendChild(e),
      (r = n.offsetHeight + 18 > e.scrollHeight),
      i.removeChild(e),
      (ya = r),
      (ha = (function (t) {
        for (
          var e = t.split(","),
            n = (
              ("onpointerdown" in ia)
                ? "pointerdown,pointermove,pointerup,pointercancel"
                : ("onmspointerdown" in ia)
                ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                : t
            ).split(","),
            r = {},
            i = 4;
          -1 < --i;

        )
          (r[e[i]] = n[i]), (r[n[i]] = e[i]);
        try {
          na.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
              get: function () {
                ua = 1;
              },
            })
          );
        } catch (t) {}
        return r;
      })("touchstart,touchmove,touchend,touchcancel")),
      qa(ea, "touchcancel", Pa),
      qa(Ft, "touchmove", Pa),
      ra && ra.addEventListener("touchstart", Pa),
      qa(ea, "contextmenu", function () {
        for (var t in Na) Na[t].isPressed && Na[t].endDrag();
      }),
      (Pt = sa = wa())),
      Pt
        ? ((da = Pt.plugins.inertia),
          (va = Pt.core.context || function () {}),
          (aa = Pt.utils.checkPrefix),
          (Fa = aa(Fa)),
          (Sa = aa(Sa)),
          (la = Pt.utils.toArray),
          (_a = Pt.core.getStyleSaver),
          (Da = !!aa("perspective")))
        : t && console.warn("Please gsap.registerPlugin(Draggable)");
  }
  var Pt,
    Ft,
    ea,
    na,
    ra,
    ia,
    oa,
    sa,
    aa,
    la,
    ua,
    ca,
    ha,
    pa,
    fa,
    da,
    ga,
    ma,
    va,
    _a,
    Da,
    ya,
    xa = 0,
    ba = function () {
      return "undefined" != typeof window;
    },
    wa = function () {
      return Pt || (ba() && (Pt = window.gsap) && Pt.registerPlugin && Pt);
    },
    Ca = function (t) {
      return "function" == typeof t;
    },
    Ea = function (t) {
      return "object" == typeof t;
    },
    Ta = function (t) {
      return void 0 === t;
    },
    Pa = function () {
      return !1;
    },
    Fa = "transform",
    Sa = "transformOrigin",
    Ma = Array.isArray,
    Aa = function (t, e) {
      e = ea.createElementNS
        ? ea.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : ea.createElement(t);
      return e.style ? e : ea.createElement(t);
    },
    ka = 180 / Math.PI,
    Oa = 1e20,
    Ba = new Ls(),
    Ra =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    La = [],
    Na = {},
    Ia = 0,
    Xa = /^(?:a|input|textarea|button|select)$/i,
    za = 0,
    Ya = {},
    Ha = {},
    Va = function (t, e) {
      var n,
        r = {};
      for (n in t) r[n] = e ? t[n] * e : t[n];
      return r;
    },
    ja = function () {
      return La.forEach(function (t) {
        return t();
      });
    },
    Wa = function () {
      return !La.length && Pt.ticker.remove(ja);
    },
    qa = function (t, e, n, r) {
      var i;
      t.addEventListener &&
        ((i = ha[e]),
        (r = r || (ua ? { passive: !1 } : null)),
        t.addEventListener(i || e, n, r),
        i && e !== i && t.addEventListener(e, n, r));
    },
    St = function (t, e, n, r) {
      var i;
      t.removeEventListener &&
        ((i = ha[e]),
        t.removeEventListener(i || e, n, r),
        i && e !== i && t.removeEventListener(e, n, r));
    },
    Ua = function t(e) {
      (pa = e.touches && xa < e.touches.length), St(e.target, "touchend", t);
    },
    Ga = function (t) {
      return (
        Ft.pageYOffset ||
        t.scrollTop ||
        t.documentElement.scrollTop ||
        t.body.scrollTop ||
        0
      );
    },
    Ka = function (t) {
      return (
        Ft.pageXOffset ||
        t.scrollLeft ||
        t.documentElement.scrollLeft ||
        t.body.scrollLeft ||
        0
      );
    },
    Za = function (t) {
      return !(
        t &&
        t !== na &&
        9 !== t.nodeType &&
        t !== ea.body &&
        t !== Ft &&
        t.nodeType &&
        t.parentNode
      );
    },
    $a = function (t, e) {
      var e = "x" === e ? "Width" : "Height",
        n = "scroll" + e,
        r = "client" + e;
      return Math.max(
        0,
        Za(t)
          ? Math.max(na[n], ra[n]) - (Ft["inner" + e] || na[r] || ra[r])
          : t[n] - t[r]
      );
    },
    Qa = function (t) {
      return Ft.getComputedStyle(
        (!(t instanceof Element) && (t.host || (t.parentNode || {}).host)) || t
      );
    },
    Ja = {},
    tl = {},
    el = function (t, e) {
      e = la(e)[0];
      var n,
        r,
        i,
        o,
        s,
        a,
        l,
        u = t.getBBox && t.ownerSVGElement,
        c = t.ownerDocument || ea;
      if (t === Ft)
        (i = Ga(c)),
          (r =
            (n = Ka(c)) +
            (c.documentElement.clientWidth ||
              t.innerWidth ||
              c.body.clientWidth ||
              0)),
          (o =
            i +
            ((t.innerHeight || 0) - 20 < c.documentElement.clientHeight
              ? c.documentElement.clientHeight
              : t.innerHeight || c.body.clientHeight || 0));
      else {
        if (e === Ft || Ta(e)) return t.getBoundingClientRect();
        (n = i = 0),
          u
            ? ((a = (s = t.getBBox()).width), (l = s.height))
            : (t.viewBox &&
                (s = t.viewBox.baseVal) &&
                ((n = s.x || 0), (i = s.y || 0), (a = s.width), (l = s.height)),
              a ||
                ((s = "border-box" === (c = Qa(t)).boxSizing),
                (a =
                  (parseFloat(c.width) || t.clientWidth || 0) +
                  (s
                    ? 0
                    : parseFloat(c.borderLeftWidth) +
                      parseFloat(c.borderRightWidth))),
                (l =
                  (parseFloat(c.height) || t.clientHeight || 0) +
                  (s
                    ? 0
                    : parseFloat(c.borderTopWidth) +
                      parseFloat(c.borderBottomWidth))))),
          (r = a),
          (o = l);
      }
      return t === e
        ? { left: n, top: i, width: r - n, height: o - i }
        : ((s = (u = Et(e, !0).multiply(Et(t))).apply({ x: n, y: i })),
          (c = u.apply({ x: r, y: i })),
          (a = u.apply({ x: r, y: o })),
          (l = u.apply({ x: n, y: o })),
          {
            left: (n = Math.min(s.x, c.x, a.x, l.x)),
            top: (i = Math.min(s.y, c.y, a.y, l.y)),
            width: Math.max(s.x, c.x, a.x, l.x) - n,
            height: Math.max(s.y, c.y, a.y, l.y) - i,
          });
    };
  function nl(t) {
    (this._listeners = {}), (this.target = t || this);
  }
  ((Nl = nl.prototype).addEventListener = function (t, e) {
    t = this._listeners[t] || (this._listeners[t] = []);
    ~t.indexOf(e) || t.push(e);
  }),
    (Nl.removeEventListener = function (t, e) {
      (t = this._listeners[t]), (e = t && t.indexOf(e));
      0 <= e && t.splice(e, 1);
    }),
    (Nl.dispatchEvent = function (e) {
      var n,
        r = this;
      return (
        (this._listeners[e] || []).forEach(function (t) {
          return !1 === t.call(r, { type: e, target: r.target }) && (n = !1);
        }),
        n
      );
    });
  o(ol, (rl = nl)),
    (ol.register = function (t) {
      (Pt = t), ta();
    }),
    (ol.create = function (t, e) {
      return (
        sa || ta(!0),
        la(t).map(function (t) {
          return new ol(t, e);
        })
      );
    }),
    (ol.get = function (t) {
      return Na[(la(t)[0] || {})._gsDragID];
    }),
    (ol.timeSinceDrag = function () {
      return (Ra() - za) / 1e3;
    }),
    (ol.hitTest = function (t, e, n) {
      if (t === e) return !1;
      var t = Us(t),
        e = Us(e),
        r = t.top,
        i = t.left,
        o = t.right,
        s = t.bottom,
        a = t.width,
        t = t.height,
        l = e.left > o || e.right < i || e.top > s || e.bottom < r;
      return l || !n
        ? !l
        : ((l = -1 !== (n + "").indexOf("%")),
          (n = parseFloat(n) || 0),
          ((i = { left: Math.max(i, e.left), top: Math.max(r, e.top) }).width =
            Math.min(o, e.right) - i.left),
          (i.height = Math.min(s, e.bottom) - i.top),
          !(i.width < 0 || i.height < 0) &&
            (l
              ? a * t * (n *= 0.01) <= (r = i.width * i.height) ||
                r >= e.width * e.height * n
              : i.width > n && i.height > n));
    });
  var rl,
    il = ol;
  function ol(d, h) {
    function i(t) {
      return (
        Ys(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1
      );
    }
    function o(t, e) {
      var n;
      if (
        !p ||
        N.isPressed ||
        !t ||
        (("mousedown" === t.type || "pointerdown" === t.type) &&
          !e &&
          Ra() - z < 30 &&
          ha[N.pointerEvent.type])
      )
        O && t && p && Ys(t);
      else {
        if (
          ((G = yt()),
          (Q = !1),
          (N.pointerEvent = t),
          ha[t.type]
            ? ((m = ~t.type.indexOf("touch") ? t.currentTarget || t.target : H),
              qa(m, "touchend", s),
              qa(m, "touchmove", bt),
              qa(m, "touchcancel", s),
              qa(H, "touchstart", Hs))
            : ((m = null), qa(H, "mousemove", bt)),
          (k = null),
          (ma && m) ||
            (qa(H, "mouseup", s), t && t.target && qa(t.target, "mouseup", s)),
          (U = lt.call(N, t.target) && !1 === h.dragClickables && !e))
        )
          return (
            qa(t.target, "change", s),
            Tt(N, "pressInit", "onPressInit"),
            Tt(N, "press", "onPress"),
            $s(I, !0),
            void (O = !1)
          );
        if (
          ((A =
            !(
              !m ||
              R === L ||
              !1 === N.vars.allowNativeTouchScrolling ||
              (N.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which))
            ) && (R ? "y" : "x")),
          (O = !A && !N.allowEventDefault) &&
            (Ys(t), qa(Ft, "touchforcechange", Ys)),
          t.changedTouches
            ? ((t = W = t.changedTouches[0]), (f = t.identifier))
            : t.pointerId
            ? (f = t.pointerId)
            : (W = f = null),
          xa++,
          (e = V),
          La.push(e),
          1 === La.length && Pt.ticker.add(ja),
          (_ = N.pointerY = t.pageY),
          (v = N.pointerX = t.pageX),
          Tt(N, "pressInit", "onPressInit"),
          (A || N.autoScroll) && Ws(d.parentNode),
          !d.parentNode ||
            !N.autoScroll ||
            g ||
            B ||
            !d.parentNode._gsMaxScrollX ||
            oa.parentNode ||
            d.getBBox ||
            ((oa.style.width = d.parentNode.scrollWidth + "px"),
            d.parentNode.appendChild(oa)),
          Dt(),
          N.tween && N.tween.kill(),
          (N.isThrowing = !1),
          Pt.killTweensOf(g || d, r, !0),
          g && Pt.killTweensOf(d, { scrollTo: 1 }, !0),
          (N.tween = N.lockedAxis = null),
          (!h.zIndexBoost && (B || g || !1 === h.zIndexBoost)) ||
            (d.style.zIndex = ol.zIndex++),
          (N.isPressed = !0),
          (j = !(!h.onDrag && !N._listeners.drag)),
          (u = !(!h.onMove && !N._listeners.move)),
          !1 !== h.cursor || h.activeCursor)
        )
          for (n = I.length; -1 < --n; )
            Pt.set(I[n], {
              cursor:
                h.activeCursor || h.cursor || ("grab" === ga ? "grabbing" : ga),
            });
        Tt(N, "press", "onPress");
      }
    }
    function a(t) {
      var e, n;
      t &&
        N.isDragging &&
        !g &&
        ((e = (t = t.target || d.parentNode).scrollLeft - t._gsScrollX),
        (n = t.scrollTop - t._gsScrollY),
        (e || n) &&
          (M
            ? ((v -= e * M.a + n * M.c), (_ -= n * M.d + e * M.b))
            : ((v -= e), (_ -= n)),
          (t._gsScrollX += e),
          (t._gsScrollY += n),
          wt(N.pointerX, N.pointerY)));
    }
    function l(t) {
      var e = (n = Ra()) - z < 100,
        n = n - rt < 50,
        r = e && Z === z,
        i = N.pointerEvent && N.pointerEvent.defaultPrevented,
        o = e && c === z,
        s = t.isTrusted || (null == t.isTrusted && e && r);
      if (
        ((r || (n && !1 !== N.vars.suppressClickOnDrag)) &&
          t.stopImmediatePropagation &&
          t.stopImmediatePropagation(),
        e &&
          (!N.pointerEvent || !N.pointerEvent.defaultPrevented) &&
          (!r || (s && !o)))
      )
        return s && r && (c = z), void (Z = z);
      !(N.isPressed || n || e) || (s && t.detail && e && !i) || Ys(t),
        e ||
          n ||
          Q ||
          (t && t.target && (N.pointerEvent = t), Tt(N, "click", "onClick"));
    }
    function n(t) {
      return M
        ? { x: t.x * M.a + t.y * M.c + M.e, y: t.x * M.b + t.y * M.d + M.f }
        : { x: t.x, y: t.y };
    }
    var p,
      g,
      v,
      _,
      D,
      y,
      x,
      j,
      u,
      b,
      w,
      C,
      E,
      W,
      f,
      q,
      T,
      P,
      F,
      S,
      U,
      m,
      M,
      G,
      A,
      k,
      K,
      Z,
      c,
      O,
      $,
      Q,
      t = rl.call(this) || this,
      e =
        (sa || ta(1),
        (d = la(d)[0]),
        (t.styles = _a && _a(d, "transform,left,top")),
        (da = da || Pt.plugins.inertia),
        (t.vars = h = Va(h || {})),
        (t.target = d),
        (t.x = t.y = t.rotation = 0),
        (t.dragResistance = parseFloat(h.dragResistance) || 0),
        (t.edgeResistance = isNaN(h.edgeResistance)
          ? 1
          : parseFloat(h.edgeResistance) || 0),
        (t.lockAxis = h.lockAxis),
        (t.autoScroll = h.autoScroll || 0),
        (t.lockedAxis = null),
        (t.allowEventDefault = !!h.allowEventDefault),
        Pt.getProperty(d, "x"),
        (h.type || "x,y").toLowerCase()),
      J = ~e.indexOf("x") || ~e.indexOf("y"),
      B = -1 !== e.indexOf("rotation"),
      tt = B ? "rotation" : J ? "x" : "left",
      et = J ? "y" : "top",
      R = !(!~e.indexOf("x") && !~e.indexOf("left") && "scroll" !== e),
      L = !(!~e.indexOf("y") && !~e.indexOf("top") && "scroll" !== e),
      nt = h.minimumMovement || 2,
      N = Mt(t),
      I = la(h.trigger || h.handle || d),
      r = {},
      rt = 0,
      X = !1,
      it = h.autoScrollMarginTop || 40,
      ot = h.autoScrollMarginRight || 40,
      st = h.autoScrollMarginBottom || 40,
      at = h.autoScrollMarginLeft || 40,
      lt = h.clickableTest || Zs,
      z = 0,
      Y = d._gsap || Pt.core.getCache(d),
      ut = Qs(d),
      ct = function (t, e) {
        return parseFloat(Y.get(d, t, e));
      },
      H = d.ownerDocument || ea,
      V = function t(e) {
        if (N.autoScroll && N.isDragging && (X || T)) {
          var n,
            r,
            i,
            o,
            s,
            a,
            l,
            u,
            c = d,
            h = 15 * N.autoScroll;
          for (
            X = !1,
              Ha.scrollTop =
                null != Ft.pageYOffset
                  ? Ft.pageYOffset
                  : (null != H.documentElement.scrollTop
                      ? H.documentElement
                      : H.body
                    ).scrollTop,
              Ha.scrollLeft =
                null != Ft.pageXOffset
                  ? Ft.pageXOffset
                  : (null != H.documentElement.scrollLeft
                      ? H.documentElement
                      : H.body
                    ).scrollLeft,
              o = N.pointerX - Ha.scrollLeft,
              s = N.pointerY - Ha.scrollTop;
            c && !r;

          )
            (n = (r = Za(c.parentNode)) ? Ha : c.parentNode),
              (i = r
                ? {
                    bottom: Math.max(na.clientHeight, Ft.innerHeight || 0),
                    right: Math.max(na.clientWidth, Ft.innerWidth || 0),
                    left: 0,
                    top: 0,
                  }
                : n.getBoundingClientRect()),
              (a = l = 0),
              L &&
                ((u = n._gsMaxScrollY - n.scrollTop) < 0
                  ? (l = u)
                  : s > i.bottom - st && u
                  ? ((X = !0),
                    (l = Math.min(
                      u,
                      (h * (1 - Math.max(0, i.bottom - s) / st)) | 0
                    )))
                  : s < i.top + it &&
                    n.scrollTop &&
                    ((X = !0),
                    (l = -Math.min(
                      n.scrollTop,
                      (h * (1 - Math.max(0, s - i.top) / it)) | 0
                    ))),
                l && (n.scrollTop += l)),
              R &&
                ((u = n._gsMaxScrollX - n.scrollLeft) < 0
                  ? (a = u)
                  : o > i.right - ot && u
                  ? ((X = !0),
                    (a = Math.min(
                      u,
                      (h * (1 - Math.max(0, i.right - o) / ot)) | 0
                    )))
                  : o < i.left + at &&
                    n.scrollLeft &&
                    ((X = !0),
                    (a = -Math.min(
                      n.scrollLeft,
                      (h * (1 - Math.max(0, o - i.left) / at)) | 0
                    ))),
                a && (n.scrollLeft += a)),
              r &&
                (a || l) &&
                (Ft.scrollTo(n.scrollLeft, n.scrollTop),
                wt(N.pointerX + a, N.pointerY + l)),
              (c = n);
        }
        var p, f;
        T &&
          ((p = N.x),
          (f = N.y),
          B
            ? ((N.deltaX = p - parseFloat(Y.rotation)),
              (N.rotation = p),
              (Y.rotation = p + "deg"),
              Y.renderTransform(1, Y))
            : g
            ? (L && ((N.deltaY = f - g.top()), g.top(f)),
              R && ((N.deltaX = p - g.left()), g.left(p)))
            : J
            ? (L && ((N.deltaY = f - parseFloat(Y.y)), (Y.y = f + "px")),
              R && ((N.deltaX = p - parseFloat(Y.x)), (Y.x = p + "px")),
              Y.renderTransform(1, Y))
            : (L &&
                ((N.deltaY = f - parseFloat(d.style.top || 0)),
                (d.style.top = f + "px")),
              R &&
                ((N.deltaX = p - parseFloat(d.style.left || 0)),
                (d.style.left = p + "px"))),
          !j ||
            e ||
            K ||
            (!(K = !0) === Tt(N, "drag", "onDrag") &&
              (R && (N.x -= N.deltaX), L && (N.y -= N.deltaY), t(!0)),
            (K = !1))),
          (T = !1);
      },
      ht = function (t, e) {
        var n,
          r,
          i = N.x,
          o = N.y;
        (Y = d._gsap ? Y : Pt.core.getCache(d)).uncache &&
          Pt.getProperty(d, "x"),
          J
            ? ((N.x = parseFloat(Y.x)), (N.y = parseFloat(Y.y)))
            : B
            ? (N.x = N.rotation = parseFloat(Y.rotation))
            : g
            ? ((N.y = g.top()), (N.x = g.left()))
            : ((N.y = parseFloat(d.style.top || ((r = Qa(d)) && r.top)) || 0),
              (N.x = parseFloat(d.style.left || (r || {}).left) || 0)),
          (P || F || S) &&
            !e &&
            (N.isDragging || N.isThrowing) &&
            (S &&
              ((Ya.x = N.x),
              (Ya.y = N.y),
              (n = S(Ya)).x !== N.x && ((N.x = n.x), (T = !0)),
              n.y !== N.y && ((N.y = n.y), (T = !0))),
            P &&
              (n = P(N.x)) !== N.x &&
              ((N.x = n), B && (N.rotation = n), (T = !0)),
            F && ((n = F(N.y)) !== N.y && (N.y = n), (T = !0))),
          T && V(!0),
          t ||
            ((N.deltaX = N.x - i),
            (N.deltaY = N.y - o),
            Tt(N, "throwupdate", "onThrowUpdate"));
      },
      pt = function (s, a, l, n) {
        return (
          null == a && (a = -Oa),
          null == l && (l = Oa),
          Ca(s)
            ? function (t) {
                var e = N.isPressed ? 1 - N.edgeResistance : 1;
                return (
                  s.call(
                    N,
                    (l < t ? l + (t - l) * e : t < a ? a + (t - a) * e : t) * n
                  ) * n
                );
              }
            : Ma(s)
            ? function (t) {
                for (var e, n, r = s.length, i = 0, o = Oa; -1 < --r; )
                  (n = (n = (e = s[r]) - t) < 0 ? -n : n) < o &&
                    a <= e &&
                    e <= l &&
                    ((i = r), (o = n));
                return s[i];
              }
            : isNaN(s)
            ? function (t) {
                return t;
              }
            : function () {
                return s * n;
              }
        );
      },
      ft = function (s, o, a, l, u, c, h) {
        return (
          (c = c && c < Oa ? c * c : Oa),
          Ca(s)
            ? function (t) {
                var e,
                  n = N.isPressed ? 1 - N.edgeResistance : 1,
                  r = t.x,
                  i = t.y;
                return (
                  (t.x = r =
                    a < r ? a + (r - a) * n : r < o ? o + (r - o) * n : r),
                  (t.y = i =
                    u < i ? u + (i - u) * n : i < l ? l + (i - l) * n : i),
                  (n = s.call(N, t)) !== t && ((t.x = n.x), (t.y = n.y)),
                  1 !== h && ((t.x *= h), (t.y *= h)),
                  c < Oa &&
                    ((n = t.x - r),
                    (e = t.y - i),
                    c < n * n + e * e && ((t.x = r), (t.y = i))),
                  t
                );
              }
            : Ma(s)
            ? function (t) {
                for (var e, n, r = s.length, i = 0, o = Oa; -1 < --r; )
                  (n = (e = (n = s[r]).x - t.x) * e + (e = n.y - t.y) * e) <
                    o && ((i = r), (o = n));
                return o <= c ? s[i] : t;
              }
            : function (t) {
                return t;
              }
        );
      },
      dt = function () {
        var t, e;
        (x = !1),
          g
            ? (g.calibrate(),
              (N.minX = w = -g.maxScrollLeft()),
              (N.minY = E = -g.maxScrollTop()),
              (N.maxX = b = N.maxY = C = 0),
              (x = !0))
            : h.bounds &&
              ((e = Gs(h.bounds, d.parentNode)),
              B
                ? ((N.minX = w = e.left),
                  (N.maxX = b = e.left + e.width),
                  (N.minY = E = N.maxY = C = 0))
                : Ta(h.bounds.maxX) && Ta(h.bounds.maxY)
                ? ((t = Gs(d, d.parentNode)),
                  (N.minX = w = Math.round(ct(tt, "px") + e.left - t.left)),
                  (N.minY = E = Math.round(ct(et, "px") + e.top - t.top)),
                  (N.maxX = b = Math.round(w + (e.width - t.width))),
                  (N.maxY = C = Math.round(E + (e.height - t.height))))
                : ((e = h.bounds),
                  (N.minX = w = e.minX),
                  (N.minY = E = e.minY),
                  (N.maxX = b = e.maxX),
                  (N.maxY = C = e.maxY)),
              b < w && ((N.minX = b), (N.maxX = b = w), (w = N.minX)),
              C < E && ((N.minY = C), (N.maxY = C = E), (E = N.minY)),
              B && ((N.minRotation = w), (N.maxRotation = b)),
              (x = !0)),
          h.liveSnap &&
            ((t = !0 === h.liveSnap ? h.snap || {} : h.liveSnap),
            (e = Ma(t) || Ca(t)),
            B
              ? ((P = pt(e ? t : t.rotation, w, b, 1)), (F = null))
              : t.points
              ? (S = ft(e ? t : t.points, w, b, E, C, t.radius, g ? -1 : 1))
              : (R &&
                  (P = pt(
                    e ? t : t.x || t.left || t.scrollLeft,
                    w,
                    b,
                    g ? -1 : 1
                  )),
                L &&
                  (F = pt(
                    e ? t : t.y || t.top || t.scrollTop,
                    E,
                    C,
                    g ? -1 : 1
                  ))));
      },
      gt = function () {
        (N.isThrowing = !1), Tt(N, "throwcomplete", "onThrowComplete");
      },
      mt = function () {
        N.isThrowing = !1;
      },
      vt = function (t, e) {
        var n, r;
        t && da
          ? (!0 === t &&
              ((n = h.snap || h.liveSnap || {}),
              (r = Ma(n) || Ca(n)),
              (t = {
                resistance:
                  (h.throwResistance || h.resistance || 1e3) / (B ? 10 : 1),
              }),
              B
                ? (t.rotation = Ks(N, r ? n : n.rotation, b, w, 1, e))
                : (R &&
                    (t[tt] = Ks(
                      N,
                      r ? n : n.points || n.x || n.left,
                      b,
                      w,
                      g ? -1 : 1,
                      e || "x" === N.lockedAxis
                    )),
                  L &&
                    (t[et] = Ks(
                      N,
                      r ? n : n.points || n.y || n.top,
                      C,
                      E,
                      g ? -1 : 1,
                      e || "y" === N.lockedAxis
                    )),
                  (n.points || (Ma(n) && Ea(n[0]))) &&
                    ((t.linkedProps = tt + "," + et), (t.radius = n.radius)))),
            (N.isThrowing = !0),
            (r = isNaN(h.overshootTolerance)
              ? 1 === h.edgeResistance
                ? 0
                : 1 - N.edgeResistance + 0.2
              : h.overshootTolerance),
            t.duration ||
              (t.duration = {
                max: Math.max(
                  h.minDuration || 0,
                  "maxDuration" in h ? h.maxDuration : 2
                ),
                min: isNaN(h.minDuration)
                  ? 0 === r || (Ea(t) && 1e3 < t.resistance)
                    ? 0
                    : 0.5
                  : h.minDuration,
                overshoot: r,
              }),
            (N.tween = e =
              Pt.to(g || d, {
                inertia: t,
                data: "_draggable",
                inherit: !1,
                onComplete: gt,
                onInterrupt: mt,
                onUpdate: h.fastMode ? Tt : ht,
                onUpdateParams: h.fastMode
                  ? [N, "onthrowupdate", "onThrowUpdate"]
                  : n && n.radius
                  ? [!1, !0]
                  : [],
              })),
            h.fastMode ||
              (g && (g._skip = !0),
              e.render(1e9, !0, !0),
              ht(!0, !0),
              (N.endX = N.x),
              (N.endY = N.y),
              B && (N.endRotation = N.x),
              e.play(0),
              ht(!0, !0),
              g && (g._skip = !1)))
          : x && N.applyBounds();
      },
      _t = function (t) {
        var e = M;
        (M = Et(d.parentNode, !0)),
          t &&
            N.isPressed &&
            !M.equals(e || new Ls()) &&
            ((t = e.inverse().apply({ x: v, y: _ })),
            M.apply(t, t),
            (v = t.x),
            (_ = t.y)),
          M.equals(Ba) && (M = null);
      },
      Dt = function () {
        var t,
          e = 1 - N.edgeResistance,
          n = ut ? Ka(H) : 0,
          r = ut ? Ga(H) : 0;
        J &&
          ((Y.x = ct(tt, "px") + "px"),
          (Y.y = ct(et, "px") + "px"),
          Y.renderTransform()),
          _t(!1),
          (tl.x = N.pointerX - n),
          (tl.y = N.pointerY - r),
          M && M.apply(tl, tl),
          (v = tl.x),
          (_ = tl.y),
          T && (wt(N.pointerX, N.pointerY), V(!0)),
          ($ = Et(d)),
          g
            ? (dt(), (y = g.top()), (D = g.left()))
            : (yt() ? (ht(!0, !0), dt()) : N.applyBounds(),
              B
                ? ((t = d.ownerSVGElement
                    ? [Y.xOrigin - d.getBBox().x, Y.yOrigin - d.getBBox().y]
                    : (Qa(d)[Sa] || "0 0").split(" ")),
                  (q = N.rotationOrigin =
                    Et(d).apply({
                      x: parseFloat(t[0]) || 0,
                      y: parseFloat(t[1]) || 0,
                    })),
                  ht(!0, !0),
                  (t = N.pointerX - q.x - n),
                  (n = q.y - N.pointerY + r),
                  (D = N.x),
                  (y = N.y = Math.atan2(n, t) * ka))
                : ((y = ct(et, "px")), (D = ct(tt, "px")))),
          x &&
            e &&
            (b < D ? (D = b + (D - b) / e) : D < w && (D = w - (w - D) / e),
            B ||
              (C < y ? (y = C + (y - C) / e) : y < E && (y = E - (E - y) / e))),
          (N.startX = D = Is(D)),
          (N.startY = y = Is(y));
      },
      yt = function () {
        return N.tween && N.tween.isActive();
      },
      xt = function () {
        !oa.parentNode || yt() || N.isDragging || oa.parentNode.removeChild(oa);
      },
      bt = function (t) {
        var e,
          n,
          r,
          i,
          o = t;
        if (p && !pa && N.isPressed && t) {
          if ((e = (N.pointerEvent = t).changedTouches)) {
            if ((t = e[0]) !== W && t.identifier !== f) {
              for (
                n = e.length;
                -1 < --n && (t = e[n]).identifier !== f && t.target !== d;

              );
              if (n < 0) return;
            }
          } else if (t.pointerId && f && t.pointerId !== f) return;
          m &&
          A &&
          !k &&
          ((tl.x = t.pageX - (ut ? Ka(H) : 0)),
          (tl.y = t.pageY - (ut ? Ga(H) : 0)),
          M && M.apply(tl, tl),
          (r = tl.x),
          (i = tl.y),
          (((r = Math.abs(r - v)) !== (i = Math.abs(i - _)) &&
            (nt < r || nt < i)) ||
            (fa && A === k)) &&
            ((k = i < r && R ? "x" : "y"),
            A && k !== A && qa(Ft, "touchforcechange", Ys),
            !1 !== N.vars.lockAxisOnTouchScroll &&
              R &&
              L &&
              ((N.lockedAxis = "x" === k ? "y" : "x"),
              Ca(N.vars.onLockAxis) && N.vars.onLockAxis.call(N, o)),
            fa && A === k))
            ? s(o)
            : ((O =
                N.allowEventDefault ||
                (A && (!k || A === k)) ||
                !1 === o.cancelable
                  ? O && !1
                  : (Ys(o), !0)),
              N.autoScroll && (X = !0),
              wt(t.pageX, t.pageY, u));
        } else O && t && p && Ys(t);
      },
      wt = function (t, e, n) {
        var r,
          i,
          o,
          s = 1 - N.dragResistance,
          a = 1 - N.edgeResistance,
          l = N.pointerX,
          u = N.pointerY,
          c = y,
          h = N.x,
          p = N.y,
          f = N.endX,
          d = N.endY,
          g = N.endRotation,
          m = T;
        (N.pointerX = t),
          (N.pointerY = e),
          ut && ((t -= Ka(H)), (e -= Ga(H))),
          B
            ? ((r = Math.atan2(q.y - e, t - q.x) * ka),
              180 < (i = N.y - r)
                ? ((y -= 360), (N.y = r))
                : i < -180 && ((y += 360), (N.y = r)),
              (i =
                N.x !== D || Math.max(Math.abs(v - t), Math.abs(_ - e)) > nt
                  ? ((N.y = r), D + (y - r) * s)
                  : D))
            : (M &&
                ((o = t * M.a + e * M.c + M.e),
                (e = t * M.b + e * M.d + M.f),
                (t = o)),
              (e = e - _) < nt && -nt < e && (e = 0),
              (t = t - v) < nt && -nt < t && (t = 0),
              (N.lockAxis || N.lockedAxis) &&
                (t || e) &&
                ((o = N.lockedAxis) ||
                  ((N.lockedAxis = o =
                    R && Math.abs(t) > Math.abs(e) ? "y" : L ? "x" : null),
                  o &&
                    Ca(N.vars.onLockAxis) &&
                    N.vars.onLockAxis.call(N, N.pointerEvent)),
                "y" === o ? (e = 0) : "x" === o && (t = 0)),
              (i = Is(D + t * s)),
              (r = Is(y + e * s))),
          (P || F || S) &&
            (N.x !== i || (N.y !== r && !B)) &&
            (S &&
              ((Ya.x = i),
              (Ya.y = r),
              (o = S(Ya)),
              (i = Is(o.x)),
              (r = Is(o.y))),
            P && (i = Is(P(i))),
            F && (r = Is(F(r)))),
          x &&
            (b < i
              ? (i = b + Math.round((i - b) * a))
              : i < w && (i = w + Math.round((i - w) * a)),
            B ||
              (C < r
                ? (r = Math.round(C + (r - C) * a))
                : r < E && (r = Math.round(E + (r - E) * a)))),
          (N.x === i && (N.y === r || B)) ||
            (B
              ? ((N.endRotation = N.x = N.endX = i), (T = !0))
              : (L && ((N.y = N.endY = r), (T = !0)),
                R && ((N.x = N.endX = i), (T = !0))),
            n && !1 === Tt(N, "move", "onMove")
              ? ((N.pointerX = l),
                (N.pointerY = u),
                (y = c),
                (N.x = h),
                (N.y = p),
                (N.endX = f),
                (N.endY = d),
                (N.endRotation = g),
                (T = m))
              : !N.isDragging &&
                N.isPressed &&
                ((N.isDragging = Q = !0), Tt(N, "dragstart", "onDragStart")));
      },
      s = function t(e, n) {
        if (
          p &&
          N.isPressed &&
          (!e ||
            null == f ||
            n ||
            !(
              (e.pointerId && e.pointerId !== f && e.target !== d) ||
              (e.changedTouches &&
                !(function (t, e) {
                  for (var n = t.length; n--; )
                    if (t[n].identifier === e) return !0;
                })(e.changedTouches, f))
            ))
        ) {
          N.isPressed = !1;
          var r,
            i,
            o,
            s,
            a = e,
            l = N.isDragging,
            u = N.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which),
            c = Pt.delayedCall(0.001, xt);
          if (
            (m
              ? (St(m, "touchend", t),
                St(m, "touchmove", bt),
                St(m, "touchcancel", t),
                St(H, "touchstart", Hs))
              : St(H, "mousemove", bt),
            St(Ft, "touchforcechange", Ys),
            (ma && m) ||
              (St(H, "mouseup", t),
              e && e.target && St(e.target, "mouseup", t)),
            (T = !1),
            l && ((rt = za = Ra()), (N.isDragging = !1)),
            zs(V),
            U && !u)
          )
            return (
              e && (St(e.target, "change", t), (N.pointerEvent = a)),
              $s(I, !1),
              Tt(N, "release", "onRelease"),
              Tt(N, "click", "onClick"),
              void (U = !1)
            );
          for (i = I.length; -1 < --i; )
            qs(I[i], "cursor", h.cursor || (!1 !== h.cursor ? ga : null));
          if ((xa--, e)) {
            if (
              (r = e.changedTouches) &&
              (e = r[0]) !== W &&
              e.identifier !== f
            ) {
              for (
                i = r.length;
                -1 < --i && (e = r[i]).identifier !== f && e.target !== d;

              );
              if (i < 0 && !n) return;
            }
            (N.pointerEvent = a),
              (N.pointerX = e.pageX),
              (N.pointerY = e.pageY);
          }
          return (
            u && a
              ? (Ys(a), (O = !0), Tt(N, "release", "onRelease"))
              : a && !l
              ? ((O = !1),
                G && (h.snap || h.bounds) && vt(h.inertia || h.throwProps),
                Tt(N, "release", "onRelease"),
                (fa && "touchmove" === a.type) ||
                  -1 !== a.type.indexOf("cancel") ||
                  (Tt(N, "click", "onClick"),
                  Ra() - z < 300 && Tt(N, "doubleclick", "onDoubleClick"),
                  (s = a.target || d),
                  (z = Ra()),
                  fa ||
                    a.defaultPrevented ||
                    Pt.delayedCall(0.05, function () {
                      z === Z ||
                        !N.enabled() ||
                        N.isPressed ||
                        a.defaultPrevented ||
                        (s.click
                          ? s.click()
                          : H.createEvent &&
                            ((o = H.createEvent("MouseEvents")).initMouseEvent(
                              "click",
                              !0,
                              !0,
                              Ft,
                              1,
                              N.pointerEvent.screenX,
                              N.pointerEvent.screenY,
                              N.pointerX,
                              N.pointerY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                            s.dispatchEvent(o)));
                    })))
              : (vt(h.inertia || h.throwProps),
                N.allowEventDefault ||
                !a ||
                (!1 === h.dragClickables && lt.call(N, a.target)) ||
                !l ||
                (A && (!k || A !== k)) ||
                !1 === a.cancelable
                  ? (O = !1)
                  : ((O = !0), Ys(a)),
                Tt(N, "release", "onRelease")),
            yt() && c.duration(N.tween.duration()),
            l && Tt(N, "dragend", "onDragEnd"),
            !0
          );
        }
        O && e && p && Ys(e);
      },
      Ct = ol.get(d);
    return (
      Ct && Ct.kill(),
      (t.startDrag = function (t, e) {
        o(t || N.pointerEvent, !0),
          e &&
            !N.hitTest(t || N.pointerEvent) &&
            ((e = Us(t || N.pointerEvent)),
            (t = Us(d)),
            (e = n({ x: e.left + e.width / 2, y: e.top + e.height / 2 })),
            (t = n({ x: t.left + t.width / 2, y: t.top + t.height / 2 })),
            (v -= e.x - t.x),
            (_ -= e.y - t.y)),
          N.isDragging ||
            ((N.isDragging = Q = !0), Tt(N, "dragstart", "onDragStart"));
      }),
      (t.drag = bt),
      (t.endDrag = function (t) {
        return s(t || N.pointerEvent, !0);
      }),
      (t.timeSinceDrag = function () {
        return N.isDragging ? 0 : (Ra() - rt) / 1e3;
      }),
      (t.timeSinceClick = function () {
        return (Ra() - z) / 1e3;
      }),
      (t.hitTest = function (t, e) {
        return ol.hitTest(N.target, t, e);
      }),
      (t.getDirection = function (t, e) {
        var n,
          r,
          i = "velocity" === t && da ? t : Ea(t) && !B ? "element" : "start";
        return (
          "element" === i && ((n = Us(N.target)), (r = Us(t))),
          (t =
            "start" === i
              ? N.x - D
              : "velocity" === i
              ? da.getVelocity(d, tt)
              : n.left + n.width / 2 - (r.left + r.width / 2)),
          B
            ? t < 0
              ? "counter-clockwise"
              : "clockwise"
            : ((e = e || 2),
              (i =
                "start" === i
                  ? N.y - y
                  : "velocity" === i
                  ? da.getVelocity(d, et)
                  : n.top + n.height / 2 - (r.top + r.height / 2)),
              (r =
                (n = Math.abs(t / i)) < 1 / e ? "" : t < 0 ? "left" : "right"),
              n < e && ("" !== r && (r += "-"), (r += i < 0 ? "up" : "down")),
              r)
        );
      }),
      (t.applyBounds = function (t, e) {
        var n, r, i, o;
        if (t && h.bounds !== t) return (h.bounds = t), N.update(!0, e);
        if ((ht(!0), dt(), x && !yt())) {
          if (
            ((t = N.x),
            (e = N.y),
            b < t ? (t = b) : t < w && (t = w),
            C < e ? (e = C) : e < E && (e = E),
            (N.x !== t || N.y !== e) &&
              ((n = !0),
              (N.x = N.endX = t),
              B ? (N.endRotation = t) : (N.y = N.endY = e),
              V((T = !0)),
              N.autoScroll && !N.isDragging))
          )
            for (
              Ws(d.parentNode),
                r = d,
                Ha.scrollTop =
                  null != Ft.pageYOffset
                    ? Ft.pageYOffset
                    : (null != H.documentElement.scrollTop
                        ? H.documentElement
                        : H.body
                      ).scrollTop,
                Ha.scrollLeft =
                  null != Ft.pageXOffset
                    ? Ft.pageXOffset
                    : (null != H.documentElement.scrollLeft
                        ? H.documentElement
                        : H.body
                      ).scrollLeft;
              r && !o;

            )
              (i = (o = Za(r.parentNode)) ? Ha : r.parentNode),
                L &&
                  i.scrollTop > i._gsMaxScrollY &&
                  (i.scrollTop = i._gsMaxScrollY),
                R &&
                  i.scrollLeft > i._gsMaxScrollX &&
                  (i.scrollLeft = i._gsMaxScrollX),
                (r = i);
          N.isThrowing &&
            (n || N.endX > b || N.endX < w || N.endY > C || N.endY < E) &&
            vt(h.inertia || h.throwProps, n);
        }
        return N;
      }),
      (t.update = function (t, e, n) {
        e &&
          N.isPressed &&
          ((i = Et(d)),
          (o = $.apply({ x: N.x - D, y: N.y - y })),
          (r = Et(d.parentNode, !0)).apply({ x: i.e - o.x, y: i.f - o.y }, o),
          (N.x -= o.x - r.e),
          (N.y -= o.y - r.f),
          V(!0),
          Dt());
        var r,
          i = N.x,
          o = N.y;
        return (
          _t(!e),
          t ? N.applyBounds() : (T && n && V(!0), ht(!0)),
          e && (wt(N.pointerX, N.pointerY), T && V(!0)),
          N.isPressed &&
            !e &&
            ((R && 0.01 < Math.abs(i - N.x)) ||
              (L && 0.01 < Math.abs(o - N.y) && !B)) &&
            Dt(),
          N.autoScroll &&
            (Ws(d.parentNode, N.isDragging),
            (X = N.isDragging),
            V(!0),
            js(d, a),
            Vs(d, a)),
          N
        );
      }),
      (t.enable = function (t) {
        var e,
          n,
          r = { lazy: !0 };
        if (
          (!1 !== h.cursor && (r.cursor = h.cursor || ga),
          Pt.utils.checkPrefix("touchCallout") && (r.touchCallout = "none"),
          "soft" !== t)
        ) {
          for (
            Xs(
              I,
              R === L
                ? "none"
                : (h.allowNativeTouchScrolling &&
                    (d.scrollHeight === d.clientHeight) ==
                      (d.scrollWidth === d.clientHeight)) ||
                  h.allowEventDefault
                ? "manipulation"
                : R
                ? "pan-y"
                : "pan-x"
            ),
              e = I.length;
            -1 < --e;

          )
            (n = I[e]),
              ma || qa(n, "mousedown", o),
              qa(n, "touchstart", o),
              qa(n, "click", l, !0),
              Pt.set(n, r),
              n.getBBox &&
                n.ownerSVGElement &&
                R !== L &&
                Pt.set(n.ownerSVGElement, {
                  touchAction:
                    h.allowNativeTouchScrolling || h.allowEventDefault
                      ? "manipulation"
                      : R
                      ? "pan-y"
                      : "pan-x",
                }),
              h.allowContextMenu || qa(n, "contextmenu", i);
          $s(I, !1);
        }
        return (
          Vs(d, a),
          (p = !0),
          da &&
            "soft" !== t &&
            da.track(g || d, J ? "x,y" : B ? "rotation" : "top,left"),
          (d._gsDragID = t = d._gsDragID || "d" + Ia++),
          (Na[t] = N),
          g && (g.enable(), (g.element._gsDragID = t)),
          (h.bounds || B) && Dt(),
          h.bounds && N.applyBounds(),
          N
        );
      }),
      (t.disable = function (t) {
        for (var e, n = N.isDragging, r = I.length; -1 < --r; )
          qs(I[r], "cursor", null);
        if ("soft" !== t) {
          for (Xs(I, null), r = I.length; -1 < --r; )
            (e = I[r]),
              qs(e, "touchCallout", null),
              St(e, "mousedown", o),
              St(e, "touchstart", o),
              St(e, "click", l, !0),
              St(e, "contextmenu", i);
          $s(I, !0),
            m &&
              (St(m, "touchcancel", s),
              St(m, "touchend", s),
              St(m, "touchmove", bt)),
            St(H, "mouseup", s),
            St(H, "mousemove", bt);
        }
        return (
          js(d, a),
          (p = !1),
          da &&
            "soft" !== t &&
            (da.untrack(g || d, J ? "x,y" : B ? "rotation" : "top,left"),
            N.tween && N.tween.kill()),
          g && g.disable(),
          zs(V),
          (N.isDragging = N.isPressed = U = !1),
          n && Tt(N, "dragend", "onDragEnd"),
          N
        );
      }),
      (t.enabled = function (t, e) {
        return arguments.length ? (t ? N.enable(e) : N.disable(e)) : p;
      }),
      (t.kill = function () {
        return (
          (N.isThrowing = !1),
          N.tween && N.tween.kill(),
          N.disable(),
          Pt.set(I, { clearProps: "userSelect" }),
          delete Na[d._gsDragID],
          N
        );
      }),
      (t.revert = function () {
        this.kill(), this.styles && this.styles.revert();
      }),
      ~e.indexOf("scroll") &&
        ((g = t.scrollProxy =
          new Js(
            d,
            (function (t, e) {
              for (var n in e) n in t || (t[n] = e[n]);
              return t;
            })(
              {
                onKill: function () {
                  N.isPressed && s(null);
                },
              },
              h
            )
          )),
        (d.style.overflowY = L && !ca ? "auto" : "hidden"),
        (d.style.overflowX = R && !ca ? "auto" : "hidden"),
        (d = g.content)),
      B ? (r.rotation = 1) : (R && (r[tt] = 1), L && (r[et] = 1)),
      (Y.force3D = !("force3D" in h) || h.force3D),
      va(Mt(t)),
      t.enable(),
      t
    );
  }
  var sl,
    al = il.prototype,
    ll = {
      pointerX: 0,
      pointerY: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      isDragging: !1,
      isPressed: !1,
    };
  for (sl in ll) sl in al || (al[sl] = ll[sl]);
  (il.zIndex = 1e3), (il.version = "3.13.0"), wa() && Pt.registerPlugin(il);
  function ul() {
    return (
      pl ||
        (cl(),
        dl ||
          console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),
      pl
    );
  }
  function cl(t) {
    (hl = t || ml()),
      gl() && (fl = document),
      hl && (dl = hl.plugins.css) && (pl = 1);
  }
  var hl,
    pl,
    fl,
    dl,
    gl = function () {
      return "undefined" != typeof window;
    },
    ml = function () {
      return hl || (gl() && (hl = window.gsap) && hl.registerPlugin && hl);
    },
    vl = {
      version: "3.13.0",
      name: "cssRule",
      init: function (t, e, n, r, i) {
        if (!ul() || void 0 === t.cssText) return !1;
        var o = (t._gsProxy = t._gsProxy || fl.createElement("div"));
        (this.ss = t),
          (this.style = o.style),
          (o.style.cssText = t.cssText),
          dl.prototype.init.call(this, o, e, n, r, i);
      },
      render: function (t, e) {
        for (var n, r = e._pt, i = e.style, o = e.ss; r; )
          r.r(t, r.d), (r = r._next);
        for (n = i.length; -1 < --n; ) o[i[n]] = i[i[n]];
      },
      getRule: function (t) {
        ul();
        var e,
          n,
          r,
          i,
          o = fl.all ? "rules" : "cssRules",
          s = fl.styleSheets,
          a = s.length,
          l = ":" === t.charAt(0);
        for (
          t = (l ? "" : ",") + t.split("::").join(":").toLowerCase() + ",",
            l && (i = []);
          a--;

        ) {
          try {
            if (!(n = s[a][o])) continue;
            e = n.length;
          } catch (t) {
            console.warn(t);
            continue;
          }
          for (; -1 < --e; )
            if (
              (r = n[e]).selectorText &&
              -1 !==
                (
                  "," +
                  r.selectorText.split("::").join(":").toLowerCase() +
                  ","
                ).indexOf(t)
            ) {
              if (!l) return r.style;
              i.push(r.style);
            }
        }
        return i;
      },
      register: cl,
    };
  ml() && hl.registerPlugin(vl);
  function _l() {
    return wl || (Ml() && (wl = window.gsap) && wl.registerPlugin && wl);
  }
  function Dl() {
    return Tl || (El && El.createjs) || El || {};
  }
  function yl(t) {
    var e = t.getBounds && t.getBounds();
    e ||
      ((e = t.nominalBounds || { x: 0, y: 0, width: 100, height: 100 }),
      t.setBounds && t.setBounds(e.x, e.y, e.width, e.height)),
      t.cache && t.cache(e.x, e.y, e.width, e.height),
      Al(
        "EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " +
          t
      );
  }
  function xl(t, e, n) {
    (Fl = Fl || Dl().ColorMatrixFilter) ||
      Al(
        "EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded."
      );
    for (
      var r, i, o, s, a, l, u, c, h, p, f = t.filters || [], d = f.length;
      -1 < --d;

    )
      if (f[d] instanceof Fl) {
        o = f[d];
        break;
      }
    for (
      o || ((o = new Fl(kl.slice())), f.push(o), (t.filters = f)),
        i = o.matrix,
        r = kl.slice(),
        null != e.colorize &&
          ((a = r),
          (l = e.colorize),
          (u = Number(e.colorizeAmount)),
          isNaN(u) && (u = 1),
          (l = wl.utils.splitColor(l)),
          (h = l[0] / 255),
          (p = l[1] / 255),
          (l = l[2] / 255),
          (r = Ll(
            [
              (c = 1 - u) + u * h * Ol,
              u * h * Bl,
              u * h * Rl,
              0,
              0,
              u * p * Ol,
              c + u * p * Bl,
              u * p * Rl,
              0,
              0,
              u * l * Ol,
              u * l * Bl,
              c + u * l * Rl,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
            ],
            a
          ))),
        null != e.contrast &&
          ((h = r),
          (p = Number(e.contrast)),
          (r = isNaN(p)
            ? h
            : Ll(
                [
                  (p += 0.01),
                  0,
                  0,
                  0,
                  128 * (1 - p),
                  0,
                  p,
                  0,
                  0,
                  128 * (1 - p),
                  0,
                  0,
                  p,
                  0,
                  128 * (1 - p),
                  0,
                  0,
                  0,
                  1,
                  0,
                ],
                h
              ))),
        null != e.hue &&
          (r = (function (t, e) {
            if (isNaN(e)) return t;
            e *= Math.PI / 180;
            var n = Math.cos(e),
              e = Math.sin(e);
            return Ll(
              [
                Ol + n * (1 - Ol) + e * -Ol,
                Bl + n * -Bl + e * -Bl,
                Rl + n * -Rl + e * (1 - Rl),
                0,
                0,
                Ol + n * -Ol + 0.143 * e,
                Bl + n * (1 - Bl) + 0.14 * e,
                Rl + n * -Rl + -0.283 * e,
                0,
                0,
                Ol + n * -Ol + e * -(1 - Ol),
                Bl + n * -Bl + e * Bl,
                Rl + n * (1 - Rl) + e * Rl,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ],
              t
            );
          })(r, Number(e.hue))),
        d = (r =
          null != e.saturation
            ? (function (t, e) {
                if (isNaN(e)) return t;
                var n = 1 - e,
                  r = n * Ol,
                  i = n * Bl,
                  n = n * Rl;
                return Ll(
                  [
                    r + e,
                    i,
                    n,
                    0,
                    0,
                    r,
                    i + e,
                    n,
                    0,
                    0,
                    r,
                    i,
                    n + e,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                  ],
                  t
                );
              })(r, Number(e.saturation))
            : r).length;
      -1 < --d;

    )
      r[d] !== i[d] &&
        (s = n.add(i, d, i[d], r[d], 0, 0, 0, 0, 0, 1)) &&
        (s.op = "easel_colorMatrixFilter");
    n._props.push("easel_colorMatrixFilter"),
      t.cacheID || yl(),
      (n._matrix = i);
  }
  function bl(t) {
    (wl = t || _l()), Ml() && (El = window), wl && (Cl = 1);
  }
  var wl,
    Cl,
    El,
    Tl,
    Pl,
    Fl,
    Sl =
      "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(
        ","
      ),
    Ml = function () {
      return "undefined" != typeof window;
    },
    Al = function (t) {
      return console.warn(t);
    },
    kl = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    Ol = 0.212671,
    Bl = 0.71516,
    Rl = 0.072169,
    Ll = function (t, e) {
      if (!(t instanceof Array && e instanceof Array)) return e;
      for (var n, r, i = [], o = 0, s = 0; s < 4; s++) {
        for (r = 0; r < 5; r++)
          (n = 4 === r ? t[o + 4] : 0),
            (i[o + r] =
              t[o] * e[r] +
              t[o + 1] * e[r + 5] +
              t[o + 2] * e[r + 10] +
              t[o + 3] * e[r + 15] +
              n);
        o += 5;
      }
      return i;
    },
    Nl = {
      version: "3.13.0",
      name: "easel",
      init: function (t, e, n, r, i) {
        var o, s, a, l, u, c;
        for (o in (Cl ||
          (bl(), wl || Al("Please gsap.registerPlugin(EaselPlugin)")),
        (this.target = t),
        e))
          if (
            ((l = e[o]),
            "colorFilter" === o ||
              "tint" === o ||
              "tintAmount" === o ||
              "exposure" === o ||
              "brightness" === o)
          ) {
            if (!s) {
              D = _ = v = m = g = d = x = y = void 0;
              var h = t,
                p = e.colorFilter || e,
                f = this;
              (Pl = Pl || Dl().ColorFilter) ||
                Al(
                  "EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded."
                );
              for (
                var d, g, m, v, _, D, y = h.filters || [], x = y.length;
                x--;

              )
                if (y[x] instanceof Pl) {
                  g = y[x];
                  break;
                }
              if (
                (g || ((g = new Pl()), y.push(g), (h.filters = y)),
                (m = g.clone()),
                null != p.tint)
              )
                (d = wl.utils.splitColor(p.tint)),
                  (v = null != p.tintAmount ? +p.tintAmount : 1),
                  (m.redOffset = +d[0] * v),
                  (m.greenOffset = +d[1] * v),
                  (m.blueOffset = +d[2] * v),
                  (m.redMultiplier =
                    m.greenMultiplier =
                    m.blueMultiplier =
                      1 - v);
              else
                for (_ in p)
                  "exposure" !== _ && "brightness" !== _ && (m[_] = +p[_]);
              for (
                null != p.exposure
                  ? ((m.redOffset =
                      m.greenOffset =
                      m.blueOffset =
                        255 * (+p.exposure - 1)),
                    (m.redMultiplier =
                      m.greenMultiplier =
                      m.blueMultiplier =
                        1))
                  : null != p.brightness &&
                    ((v = +p.brightness - 1),
                    (m.redOffset =
                      m.greenOffset =
                      m.blueOffset =
                        0 < v ? 255 * v : 0),
                    (m.redMultiplier =
                      m.greenMultiplier =
                      m.blueMultiplier =
                        1 - Math.abs(v))),
                  x = 8;
                x--;

              )
                g[(_ = Sl[x])] !== m[_] &&
                  (D = f.add(g, _, g[_], m[_], 0, 0, 0, 0, 0, 1)) &&
                  (D.op = "easel_colorFilter");
              f._props.push("easel_colorFilter"), h.cacheID || yl(h), (s = !0);
            }
          } else if (
            "saturation" === o ||
            "contrast" === o ||
            "hue" === o ||
            "colorize" === o ||
            "colorizeAmount" === o
          )
            a || (xl(t, e.colorMatrixFilter || e, this), (a = !0));
          else if ("frame" === o) {
            if ("string" == typeof l && "=" !== l.charAt(1) && (u = t.labels))
              for (c = 0; c < u.length; c++)
                u[c].label === l && (l = u[c].position);
            (d = this.add(
              t,
              "gotoAndStop",
              t.currentFrame,
              l,
              r,
              i,
              Math.round,
              0,
              0,
              1
            )) && (d.op = o);
          } else null != t[o] && this.add(t, o, "get", l);
      },
      render: function (t, e) {
        for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        e.target.cacheID && e.target.updateCache();
      },
      register: bl,
      registerCreateJS: function (t) {
        Tl = t;
      },
    };
  _l() && wl.registerPlugin(Nl);
  function Il() {
    return (
      Wl ||
      ("undefined" != typeof window &&
        (Wl = window.gsap) &&
        Wl.registerPlugin &&
        Wl)
    );
  }
  function Xl(t, e) {
    return !!(void 0 === t ? e : t && !~(t + "").indexOf("false"));
  }
  function zl(t) {
    if ((Wl = t || Il())) {
      ql = Wl.registerEase;
      var e,
        n = Wl.parseEase();
      for (e in n) n[e].config || n[e];
      for (e in (ql("slow", Gl), ql("expoScale", Kl), ql("rough", Zl), $l))
        "version" !== e && Wl.core.globals(e, $l[e]);
    }
  }
  function Yl(t, e, n) {
    var r = (t = Math.min(1, t || 0.7)) < 1 ? (e || 0 === e ? e : 0.7) : 0,
      i = (1 - t) / 2,
      o = i + t,
      s = Xl(n);
    return function (t) {
      var e = t + (0.5 - t) * r;
      return t < i
        ? s
          ? 1 - (t = 1 - t / i) * t
          : e - (t = 1 - t / i) * t * t * t * e
        : o < t
        ? s
          ? 1 === t
            ? 0
            : 1 - (t = (t - o) / i) * t
          : e + (t - e) * (t = (t - o) / i) * t * t * t
        : s
        ? 1
        : e;
    };
  }
  function Hl(e, t, n) {
    var r = Math.log(t / e),
      i = t - e;
    return (
      (n = n && Wl.parseEase(n)),
      function (t) {
        return (e * Math.exp(r * (n ? n(t) : t)) - e) / i;
      }
    );
  }
  function Vl(t, e, n) {
    (this.t = t),
      (this.v = e),
      n && ((((this.next = n).prev = this).c = n.v - e), (this.gap = n.t - t));
  }
  function jl(t) {
    for (
      var e,
        n,
        r,
        i,
        o,
        s,
        a,
        l =
          (t = "object" != typeof t ? { points: +t || 20 } : t).taper || "none",
        u = [],
        c = 0,
        h = 0 | (+t.points || 20),
        p = h,
        f = Xl(t.randomize, !0),
        d = Xl(t.clamp),
        g = Wl ? Wl.parseEase(t.template) : 0,
        m = 0.4 * (+t.strength || 1);
      -1 < --p;

    )
      (e = f ? Math.random() : (1 / h) * p),
        (n = g ? g(e) : e),
        (r =
          "none" === l
            ? m
            : "out" === l
            ? (i = 1 - e) * i * m
            : "in" === l
            ? e * e * m
            : e < 0.5
            ? (i = 2 * e) * i * 0.5 * m
            : (i = 2 * (1 - e)) * i * 0.5 * m),
        f
          ? (n += Math.random() * r - 0.5 * r)
          : p % 2
          ? (n += 0.5 * r)
          : (n -= 0.5 * r),
        d && (1 < n ? (n = 1) : n < 0 && (n = 0)),
        (u[c++] = { x: e, y: n });
    for (
      u.sort(function (t, e) {
        return t.x - e.x;
      }),
        s = new Vl(1, 1, null),
        p = h;
      p--;

    )
      (o = u[p]), (s = new Vl(o.x, o.y, s));
    return (
      (a = new Vl(0, 0, s.t ? s : s.next)),
      function (t) {
        var e = a;
        if (t > e.t) {
          for (; e.next && t >= e.t; ) e = e.next;
          e = e.prev;
        } else for (; e.prev && t <= e.t; ) e = e.prev;
        return (a = e).v + ((t - e.t) / e.gap) * e.c;
      }
    );
  }
  var Wl,
    ql,
    Ul,
    Gl = Yl(0.7),
    Kl = (((Gl.ease = Gl).config = Yl), Hl(1, 2)),
    Zl = ((Kl.config = Hl), jl()),
    $l =
      (((Zl.ease = Zl).config = jl),
      { SlowMo: Gl, RoughEase: Zl, ExpoScaleEase: Kl });
  for (Ul in $l) ($l[Ul].register = zl), ($l[Ul].version = "3.13.0");
  Il() && Wl.registerPlugin(Gl);
  function Ql(t, e) {
    t.actions.forEach(function (t) {
      return t.vars[e] && t.vars[e](t);
    });
  }
  function Jl(t) {
    return "string" == typeof t ? t.split(" ").join("").split(",") : t;
  }
  function tu(t) {
    return bu(t)[0] || console.warn("Element not found:", t);
  }
  function eu(t) {
    return Math.round(1e4 * t) / 1e4 || 0;
  }
  function nu(t, e, n) {
    return t.forEach(function (t) {
      return t.classList[n](e);
    });
  }
  function ru(t, e) {
    var n,
      r = {};
    for (n in t) e[n] || (r[n] = t[n]);
    return r;
  }
  function iu(t) {
    var e = (Yu[t] = Jl(t));
    return (Ru[t] = e.concat(Nu)), e;
  }
  function ou(t, e, n) {
    void 0 === n && (n = 0);
    for (
      var r = t.parentNode,
        i = 1e3 * Math.pow(10, n) * (e ? -1 : 1),
        o = e ? 900 * -i : 0;
      t;

    )
      (o += i), (t = t.previousSibling);
    return r ? o + ou(r, e, n + 1) : o;
  }
  function su(t, e, n) {
    return (
      t.forEach(function (t) {
        return (t.d = ou(n ? t.element : t.t, e));
      }),
      t.sort(function (t, e) {
        return t.d - e.d;
      }),
      t
    );
  }
  function au(t, e) {
    for (
      var n, r, i = t.element.style, o = (t.css = t.css || []), s = e.length;
      s--;

    )
      (r = i[(n = e[s])] || i.getPropertyValue(n)),
        o.push(r ? n : Bu[n] || (Bu[n] = zu(n)), r);
    return i;
  }
  function lu(t, e) {
    t.forEach(function (t) {
      return (t.a.cache.uncache = 1);
    }),
      e || t.finalStates.forEach(Hu);
  }
  function uu(t, e, n) {
    var r,
      i,
      o = t.element,
      s = t.width,
      a = t.height,
      l = t.uncache,
      u = t.getProp,
      c = o.style,
      h = 4;
    if (("object" != typeof e && (e = t), Z && 1 !== n))
      return (
        Z._abs.push({ t: o, b: t, a: t, sd: 0 }),
        Z._final.push(function () {
          return (t.cache.uncache = 1), Hu(t);
        }),
        o
      );
    for (
      n = "none" === u("display"),
        (t.isVisible && !n) ||
          (n && (au(t, ["display"]).display = e.display),
          (t.matrix = e.matrix),
          (t.width = s = t.width || e.width),
          (t.height = a = t.height || e.height)),
        au(t, Vu),
        r = window.getComputedStyle(o);
      h--;

    )
      c[Vu[h]] = r[Vu[h]];
    return (
      (c.gridArea = "1 / 1 / 1 / 1"),
      (c.transition = "none"),
      (c.position = "absolute"),
      (c.width = s + "px"),
      (c.height = a + "px"),
      c.top || (c.top = "0px"),
      c.left || (c.left = "0px"),
      l
        ? (i = new Zu(o))
        : (((i = ru(t, Ou)).position = "absolute"),
          t.simple
            ? ((u = o.getBoundingClientRect()),
              (i.matrix = new Ls(1, 0, 0, 1, u.left + ks(), u.top + As())))
            : (i.matrix = Et(o, !1, !1, !0))),
      (i = du(i, t, !0)),
      (t.x = Tu(i.x, 0.01)),
      (t.y = Tu(i.y, 0.01)),
      o
    );
  }
  function cu(t, e) {
    return (
      !0 !== e &&
        ((e = bu(e)),
        (t = t.filter(function (t) {
          if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
          t.t._gsap.renderTransform(1),
            t.b.isVisible &&
              ((t.t.style.width = t.b.width + "px"),
              (t.t.style.height = t.b.height + "px"));
        }))),
      t
    );
  }
  function hu(t) {
    su(t, !0).forEach(function (t) {
      return (
        (t.a.isVisible || t.b.isVisible) && uu(t.sd < 0 ? t.b : t.a, t.b, 1)
      );
    });
  }
  function pu(t, e) {
    var n,
      r = t.style || t;
    for (n in e) r[n] = e[n];
  }
  function fu(t, e, n) {
    t && e.length && n.add(t(Wu(e), n, new Gu(e, 0, !0)), 0);
  }
  function du(t, e, n, r, i, o) {
    var s,
      a,
      l,
      u,
      c,
      h,
      p = t.element,
      f = t.cache,
      d = t.parent,
      g = t.x,
      m = t.y,
      v = e.width,
      _ = e.height,
      D = e.scaleX,
      y = e.scaleY,
      x = e.rotation,
      b = e.bounds,
      w = o && Pu && Pu(p, "transform,width,height"),
      C = t,
      E = (T = e.matrix).e,
      T = T.f,
      P =
        !(b =
          t.bounds.width !== b.width ||
          t.bounds.height !== b.height ||
          t.scaleX !== D ||
          t.scaleY !== y ||
          t.rotation !== x) &&
        t.simple &&
        e.simple &&
        !i;
    return (
      P || !d
        ? ((D = y = 1), (x = s = 0))
        : ((c = (h =
            (h = (c = d)._gsap || wu.core.getCache(c)).gmCache ===
            wu.ticker.frame
              ? h.gMatrix
              : ((h.gmCache = wu.ticker.frame),
                (h.gMatrix = Et(c, !0, !1, !0))))
            .clone()
            .multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix)),
          (x = eu(Math.atan2(c.b, c.a) * Au)),
          (s = eu(Math.atan2(c.c, c.d) * Au + x) % 360),
          (D = Math.sqrt(Math.pow(c.a, 2) + Math.pow(c.b, 2))),
          (y =
            Math.sqrt(Math.pow(c.c, 2) + Math.pow(c.d, 2)) * Math.cos(s * ku)),
          i &&
            ((i = bu(i)[0]),
            (l = wu.getProperty(i)),
            (u = i.getBBox && "function" == typeof i.getBBox && i.getBBox()),
            (C = {
              scaleX: l("scaleX"),
              scaleY: l("scaleY"),
              width: u ? u.width : Math.ceil(parseFloat(l("width", "px"))),
              height: u ? u.height : parseFloat(l("height", "px")),
            })),
          (f.rotation = x + "deg"),
          (f.skewX = s + "deg")),
      n
        ? ((D *= v !== C.width && C.width ? v / C.width : 1),
          (y *= _ !== C.height && C.height ? _ / C.height : 1),
          (f.scaleX = D),
          (f.scaleY = y))
        : ((v = Tu((v * D) / C.scaleX, 0)),
          (_ = Tu((_ * y) / C.scaleY, 0)),
          (p.style.width = v + "px"),
          (p.style.height = _ + "px")),
      r && pu(p, e.props),
      P || !d
        ? ((g += E - t.matrix.e), (m += T - t.matrix.f))
        : b || d !== e.parent
        ? (f.renderTransform(1, f),
          (c = Et(i || p, !1, !1, !0)),
          (u = h.apply({ x: c.e, y: c.f })),
          (g += (a = h.apply({ x: E, y: T })).x - u.x),
          (m += a.y - u.y))
        : ((h.e = h.f = 0),
          (g += (a = h.apply({ x: E - t.matrix.e, y: T - t.matrix.f })).x),
          (m += a.y)),
      (g = Tu(g, 0.02)),
      (m = Tu(m, 0.02)),
      !o || o instanceof Zu
        ? ((f.x = g + "px"), (f.y = m + "px"), f.renderTransform(1, f))
        : w && w.revert(),
      o &&
        ((o.x = g),
        (o.y = m),
        (o.rotation = x),
        (o.skewX = s),
        n ? ((o.scaleX = D), (o.scaleY = y)) : ((o.width = v), (o.height = _))),
      o || f
    );
  }
  function gu(t, e) {
    return t instanceof Gu ? t : new Gu(t, e);
  }
  function mu(t, e, n) {
    var r = t.idLookup[n];
    return !(t = t.alt[n]).isVisible ||
      ((e.getElementState(t.element) || t).isVisible && r.isVisible)
      ? r
      : t;
  }
  function vu(t) {
    if (t !== Fu) {
      var e = Eu.style,
        n = Eu.clientWidth === window.outerWidth,
        r = Eu.clientHeight === window.outerHeight,
        i = 4;
      if (t && (n || r)) {
        for (; i--; ) qu[i] = e[Uu[i]];
        n && ((e.width = Eu.clientWidth + "px"), (e.overflowY = "hidden")),
          r && ((e.height = Eu.clientHeight + "px"), (e.overflowX = "hidden")),
          (Fu = t);
      } else if (Fu) {
        for (; i--; ) qu[i] ? (e[Uu[i]] = qu[i]) : e.removeProperty(zu(Uu[i]));
        Fu = t;
      }
    }
  }
  function _u(t, e, i, L) {
    (t instanceof Gu && e instanceof Gu) ||
      console.warn("Not a valid state object.");
    var o,
      s,
      N,
      a,
      l,
      u,
      c,
      h,
      p,
      n,
      r,
      f,
      d,
      g = (i = i || {}),
      I = g.clearProps,
      X = g.onEnter,
      z = g.onLeave,
      m = g.absolute,
      Y = g.absoluteOnLeave,
      v = g.custom,
      _ = g.delay,
      H = g.paused,
      V = g.repeat,
      j = g.repeatDelay,
      W = g.yoyo,
      D = g.toggleClass,
      y = g.nested,
      x = g.zIndex,
      b = g.scale,
      w = g.fade,
      C = g.stagger,
      E = g.spin,
      q = g.prune,
      T = ("props" in i ? i : t).props,
      P = ru(i, Iu),
      F = wu.timeline({
        delay: _,
        paused: H,
        repeat: V,
        repeatDelay: j,
        yoyo: W,
        data: "isFlip",
      }),
      S = P,
      M = [],
      A = [],
      k = [],
      O = [],
      U = !0 === E ? 1 : E || 0,
      G =
        "function" == typeof E
          ? E
          : function () {
              return U;
            },
      B = t.interrupted || e.interrupted,
      K = F[1 !== L ? "to" : "from"];
    for (s in e.idLookup)
      (r = e.alt[s] ? mu(e, t, s) : e.idLookup[s]),
        (l = r.element),
        (n = t.idLookup[s]),
        (n =
          !t.alt[s] || l !== n.element || (!t.alt[s].isVisible && r.isVisible)
            ? n
            : t.alt[s])
          ? ((u = {
              t: l,
              b: n,
              a: r,
              sd: n.element === l ? 0 : r.isVisible ? 1 : -1,
            }),
            k.push(u),
            u.sd &&
              (u.sd < 0 && ((u.b = r), (u.a = n)),
              B && au(u.b, T ? Ru[T] : Nu),
              w &&
                k.push(
                  (u.swap = {
                    t: n.element,
                    b: u.b,
                    a: u.a,
                    sd: -u.sd,
                    swap: u,
                  })
                )),
            (l._flip = n.element._flip = Z ? Z.timeline : F))
          : r.isVisible &&
            (k.push({
              t: l,
              b: ru(r, { isVisible: 1 }),
              a: r,
              sd: 0,
              entering: 1,
            }),
            (l._flip = Z ? Z.timeline : F));
    T &&
      (Yu[T] || iu(T)).forEach(function (e) {
        return (P[e] = function (t) {
          return k[t].a.props[e];
        });
      }),
      (k.finalStates = p = []),
      (g = function () {
        for (su(k), vu(!0), a = 0; a < k.length; a++)
          (u = k[a]),
            (f = u.a),
            (d = u.b),
            !q || f.isDifferent(d) || u.entering
              ? ((l = u.t),
                !y || u.sd < 0 || !a || (f.matrix = Et(l, !1, !1, !0)),
                d.isVisible && f.isVisible
                  ? (u.sd < 0
                      ? ((c = new Zu(l, T, t.simple)),
                        du(c, f, b, 0, 0, c),
                        (c.matrix = Et(l, !1, !1, !0)),
                        (c.css = u.b.css),
                        (u.a = f = c),
                        w && (l.style.opacity = (B ? d : f).opacity),
                        C && O.push(l))
                      : 0 < u.sd &&
                        w &&
                        (l.style.opacity = B ? f.opacity - d.opacity : "0"),
                    du(f, d, b, T))
                  : d.isVisible !== f.isVisible &&
                    (d.isVisible
                      ? f.isVisible ||
                        ((d.css = f.css),
                        A.push(d),
                        k.splice(a--, 1),
                        m && y && du(f, d, b, T))
                      : (f.isVisible && M.push(f), k.splice(a--, 1))),
                b ||
                  ((l.style.maxWidth = Math.max(f.width, d.width) + "px"),
                  (l.style.maxHeight = Math.max(f.height, d.height) + "px"),
                  (l.style.minWidth = Math.min(f.width, d.width) + "px"),
                  (l.style.minHeight = Math.min(f.height, d.height) + "px")),
                y && D && l.classList.add(D))
              : k.splice(a--, 1),
            p.push(f);
        var e, n;
        if (
          (D &&
            ((e = p.map(function (t) {
              return t.element;
            })),
            y &&
              e.forEach(function (t) {
                return t.classList.remove(D);
              })),
          vu(!1),
          b
            ? ((P.scaleX = function (t) {
                return k[t].a.scaleX;
              }),
              (P.scaleY = function (t) {
                return k[t].a.scaleY;
              }))
            : ((P.width = function (t) {
                return k[t].a.width + "px";
              }),
              (P.height = function (t) {
                return k[t].a.height + "px";
              }),
              (P.autoRound = i.autoRound || !1)),
          (P.x = function (t) {
            return k[t].a.x + "px";
          }),
          (P.y = function (t) {
            return k[t].a.y + "px";
          }),
          (P.rotation = function (t) {
            return k[t].a.rotation + (E ? 360 * G(t, h[t], h) : 0);
          }),
          (P.skewX = function (t) {
            return k[t].a.skewX;
          }),
          (h = k.map(function (t) {
            return t.t;
          })),
          (!x && 0 !== x) ||
            ((P.modifiers = {
              zIndex: function () {
                return x;
              },
            }),
            (P.zIndex = x),
            (P.immediateRender = !1 !== i.immediateRender)),
          w &&
            (P.opacity = function (t) {
              return k[t].sd < 0 ? 0 : 0 < k[t].sd ? k[t].a.opacity : "+=0";
            }),
          O.length &&
            ((C = wu.utils.distribute(C)),
            (n = h.slice(O.length)),
            (P.stagger = function (t, e) {
              return C(~O.indexOf(e) ? h.indexOf(k[t].swap.t) : t, e, n);
            })),
          Lu.forEach(function (t) {
            return i[t] && F.eventCallback(t, i[t], i[t + "Params"]);
          }),
          v && h.length)
        )
          for (s in ((S = ru(P, Iu)),
          "scale" in v && ((v.scaleX = v.scaleY = v.scale), delete v.scale),
          v))
            ((o = ru(v[s], Xu))[s] = P[s]),
              !("duration" in o) &&
                "duration" in P &&
                (o.duration = P.duration),
              (o.stagger = P.stagger),
              K.call(F, h, o, 0),
              delete S[s];
        (h.length || A.length || M.length) &&
          (D &&
            F.add(function () {
              return nu(e, D, F._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !H &&
            nu(e, D, "add"),
          h.length && K.call(F, h, S, 0)),
          fu(X, M, F),
          fu(z, A, F);
        var r = Z && Z.timeline;
        r &&
          (r.add(F, 0),
          Z._final.push(function () {
            return lu(k, !I);
          })),
          (N = F.duration()),
          F.call(function () {
            var t = F.time() >= N;
            t && !r && lu(k, !I), D && nu(e, D, t ? "remove" : "add");
          });
      }),
      Y &&
        (m = k
          .filter(function (t) {
            return !t.sd && !t.a.isVisible && t.b.isVisible;
          })
          .map(function (t) {
            return t.a.element;
          })),
      Z
        ? (m && (_ = Z._abs).push.apply(_, cu(k, m)), Z._run.push(g))
        : (m && hu(cu(k, m)), g());
    var R = Z ? Z.timeline : F;
    return (
      (R.revert = function () {
        return yu(R, 1, 1);
      }),
      R
    );
  }
  function Du(t) {
    t.vars.onInterrupt &&
      t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []),
      t.getChildren(!0, !1, !0).forEach(Du);
  }
  function yu(t, e, n) {
    if (t && t.progress() < 1 && (!t.paused() || n))
      return e && (Du(t), e < 2 && t.progress(1), t.kill()), !0;
  }
  function xu(t) {
    for (
      var e,
        n = (t.idLookup = {}),
        r = (t.alt = {}),
        i = t.elementStates,
        o = i.length;
      o--;

    )
      n[(e = i[o]).id] ? (r[e.id] = e) : (n[e.id] = e);
  }
  var bu,
    wu,
    Z,
    Cu,
    Eu,
    Tu,
    Pu,
    Fu,
    Su = 1,
    Mu = {},
    Au = 180 / Math.PI,
    ku = Math.PI / 180,
    Ou = {},
    Bu = {},
    Ru = {},
    Lu = Jl("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    Nu = Jl(
      "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
    ),
    Iu = {
      zIndex: 1,
      kill: 1,
      simple: 1,
      spin: 1,
      clearProps: 1,
      targets: 1,
      toggleClass: 1,
      onComplete: 1,
      onUpdate: 1,
      onInterrupt: 1,
      onStart: 1,
      delay: 1,
      repeat: 1,
      repeatDelay: 1,
      yoyo: 1,
      scale: 1,
      fade: 1,
      absolute: 1,
      props: 1,
      onEnter: 1,
      onLeave: 1,
      custom: 1,
      paused: 1,
      nested: 1,
      prune: 1,
      absoluteOnLeave: 1,
    },
    Xu = {
      zIndex: 1,
      simple: 1,
      clearProps: 1,
      scale: 1,
      absolute: 1,
      fitChild: 1,
      getVars: 1,
      props: 1,
    },
    zu = function (t) {
      return t.replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    Yu = {},
    Hu = function (t) {
      var e = t.css,
        n = t.element.style,
        r = 0;
      for (t.cache.uncache = 1; r < e.length; r += 2)
        e[r + 1] ? (n[e[r]] = e[r + 1]) : n.removeProperty(e[r]);
      !e[e.indexOf("transform") + 1] &&
        n.translate &&
        (n.removeProperty("translate"),
        n.removeProperty("scale"),
        n.removeProperty("rotate"));
    },
    Vu =
      "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
        ","
      ),
    ju = function (t, e, n, r) {
      return t instanceof Zu
        ? t
        : t instanceof Gu
        ? ((i = t), ((r = r) && i.idLookup[ju(r).id]) || i.elementStates[0])
        : new Zu(
            "string" == typeof t ? tu(t) || console.warn(t + " not found") : t,
            e,
            n
          );
      var i;
    },
    Wu = function (t) {
      return t.map(function (t) {
        return t.element;
      });
    },
    qu = [],
    Uu = "width,height,overflowX,overflowY".split(","),
    Gu =
      (((e = Ku.prototype).update = function (t) {
        var e = this;
        return (
          (this.elementStates = this.targets.map(function (t) {
            return new Zu(t, e.props, e.simple);
          })),
          xu(this),
          this.interrupt(t),
          this.recordInlineStyles(),
          this
        );
      }),
      (e.clear = function () {
        return (
          (this.targets.length = this.elementStates.length = 0), xu(this), this
        );
      }),
      (e.fit = function (t, e, n) {
        for (
          var r,
            i,
            o = su(this.elementStates.slice(0), !1, !0),
            s = (t || this).idLookup,
            a = 0;
          a < o.length;
          a++
        )
          (r = o[a]),
            n && (r.matrix = Et(r.element, !1, !1, !0)),
            (i = s[r.id]) && du(r, i, e, !0, 0, r),
            (r.matrix = Et(r.element, !1, !1, !0));
        return this;
      }),
      (e.getProperty = function (t, e) {
        t = this.getElementState(t) || Ou;
        return (e in t ? t : t.props || Ou)[e];
      }),
      (e.add = function (t) {
        for (
          var e, n, r = t.targets.length, i = this.idLookup, o = this.alt;
          r--;

        )
          (n = i[(e = t.elementStates[r]).id]) &&
          (e.element === n.element ||
            (o[e.id] && o[e.id].element === e.element))
            ? ((n = this.elementStates.indexOf(
                e.element === n.element ? n : o[e.id]
              )),
              this.targets.splice(n, 1, t.targets[r]),
              this.elementStates.splice(n, 1, e))
            : (this.targets.push(t.targets[r]), this.elementStates.push(e));
        return (
          t.interrupted && (this.interrupted = !0),
          t.simple || (this.simple = !1),
          xu(this),
          this
        );
      }),
      (e.compare = function (t) {
        function e(t, e, n) {
          m.indexOf(n) < 0 && D(t, e, n);
        }
        var n,
          r,
          i,
          o,
          s,
          a,
          l,
          u,
          c = t.idLookup,
          h = this.idLookup,
          p = [],
          f = [],
          d = [],
          g = [],
          m = [],
          v = t.alt,
          _ = this.alt,
          D = function (t, e, n) {
            return (
              (t.isVisible !== e.isVisible
                ? t.isVisible
                  ? d
                  : g
                : t.isVisible
                ? f
                : p
              ).push(n) && m.push(n)
            );
          };
        for (i in c)
          (s = v[i]),
            (a = _[i]),
            (o = (n = s ? mu(t, this, i) : c[i]).element),
            (r = h[i]),
            a
              ? ((u = r.isVisible || (!a.isVisible && o === r.element) ? r : a),
                (l =
                  !s || n.isVisible || s.isVisible || u.element !== s.element
                    ? n
                    : s).isVisible &&
                u.isVisible &&
                l.element !== u.element
                  ? ((l.isDifferent(u) ? f : p).push(l.element, u.element),
                    m.push(l.element, u.element))
                  : D(l, u, l.element),
                s && l.element === s.element && (s = c[i]),
                e(l.element !== r.element && s ? s : l, r, r.element),
                e(s && s.element === a.element ? s : l, a, a.element),
                s && e(s, a.element === s.element ? a : r, s.element))
              : (r ? (r.isDifferent(n) ? D(n, r, o) : p.push(o)) : d.push(o),
                s && e(s, r, s.element));
        for (i in h)
          c[i] || (g.push(h[i].element), _[i] && g.push(_[i].element));
        return { changed: f, unchanged: p, enter: d, leave: g };
      }),
      (e.recordInlineStyles = function () {
        for (var t = Ru[this.props] || Nu, e = this.elementStates.length; e--; )
          au(this.elementStates[e], t);
      }),
      (e.interrupt = function (n) {
        var r = this,
          i = [];
        this.targets.forEach(function (t) {
          var t = t._flip,
            e = yu(t, n ? 0 : 1);
          n &&
            e &&
            i.indexOf(t) < 0 &&
            t.add(function () {
              return r.updateVisibility();
            }),
            e && i.push(t);
        }),
          !n && i.length && this.updateVisibility(),
          this.interrupted || (this.interrupted = !!i.length);
      }),
      (e.updateVisibility = function () {
        this.elementStates.forEach(function (t) {
          var e = t.element.getBoundingClientRect();
          (t.isVisible = !!(e.width || e.height || e.top || e.left)),
            (t.uncache = 1);
        });
      }),
      (e.getElementState = function (t) {
        return this.elementStates[this.targets.indexOf(tu(t))];
      }),
      (e.makeAbsolute = function () {
        return su(this.elementStates.slice(0), !0, !0).map(uu);
      }),
      Ku);
  function Ku(t, e, n) {
    (this.props = e && e.props),
      (this.simple = !(!e || !e.simple)),
      n
        ? ((this.targets = Wu(t)), (this.elementStates = t), xu(this))
        : ((this.targets = bu(t)),
          (n = e && (!1 === e.kill || (e.batch && !e.kill))),
          Z && !n && Z._kill.push(this),
          this.update(n || !!Z));
  }
  ((e = $u.prototype).isDifferent = function (t) {
    var e = this.bounds,
      n = t.bounds;
    return (
      e.top !== n.top ||
      e.left !== n.left ||
      e.width !== n.width ||
      e.height !== n.height ||
      !this.matrix.equals(t.matrix) ||
      this.opacity !== t.opacity ||
      (this.props &&
        t.props &&
        JSON.stringify(this.props) !== JSON.stringify(t.props))
    );
  }),
    (e.update = function (t, e) {
      var n,
        r = this,
        i = r.element,
        o = wu.getProperty(i),
        s = wu.core.getCache(i),
        a = i.getBoundingClientRect(),
        l =
          i.getBBox &&
          "function" == typeof i.getBBox &&
          "svg" !== i.nodeName.toLowerCase() &&
          i.getBBox(),
        u = e
          ? new Ls(1, 0, 0, 1, a.left + ks(), a.top + As())
          : Et(i, !1, !1, !0);
      if (
        ((s.uncache = 1),
        (r.getProp = o),
        (r.element = i),
        (r.id =
          ((n = (c = i).getAttribute("data-flip-id")) ||
            c.setAttribute("data-flip-id", (n = "auto-" + Su++)),
          n)),
        (r.matrix = u),
        (r.cache = s),
        (r.bounds = a),
        (r.isVisible = !!(a.width || a.height || a.left || a.top)),
        (r.display = o("display")),
        (r.position = o("position")),
        (r.parent = i.parentNode),
        (r.x = o("x")),
        (r.y = o("y")),
        (r.scaleX = s.scaleX),
        (r.scaleY = s.scaleY),
        (r.rotation = o("rotation")),
        (r.skewX = o("skewX")),
        (r.opacity = o("opacity")),
        (r.width = l ? l.width : Tu(o("width", "px"), 0.04)),
        (r.height = l ? l.height : Tu(o("height", "px"), 0.04)),
        t)
      ) {
        for (
          var c = r,
            h = Yu[t] || iu(t),
            p = wu.getProperty(c.element, null, "native"),
            f = (c.props = {}),
            d = h.length;
          d--;

        )
          f[h[d]] = (p(h[d]) + "").trim();
        f.zIndex && (f.zIndex = parseFloat(f.zIndex) || 0);
      }
      (r.ctm =
        i.getCTM && "svg" === i.nodeName.toLowerCase() && ds(i).inverse()),
        (r.simple =
          e || (1 === eu(u.a) && !eu(u.b) && !eu(u.c) && 1 === eu(u.d))),
        (r.uncache = 0);
    });
  var Zu = $u;
  function $u(t, e, n) {
    (this.element = t), this.update(e, n);
  }
  ((e = Ju.prototype).getStateById = function (t) {
    for (var e = this.states.length; e--; )
      if (this.states[e].idLookup[t]) return this.states[e];
  }),
    (e.kill = function () {
      this.batch.remove(this);
    });
  var Qu = Ju;
  function Ju(t, e) {
    (this.vars = t),
      (this.batch = e),
      (this.states = []),
      (this.timeline = e.timeline);
  }
  ((e = ec.prototype).add = function (e) {
    var t = this.actions.filter(function (t) {
      return t.vars === e;
    });
    return t.length
      ? t[0]
      : ((t = new Qu("function" == typeof e ? { animate: e } : e, this)),
        this.actions.push(t),
        t);
  }),
    (e.remove = function (t) {
      t = this.actions.indexOf(t);
      return 0 <= t && this.actions.splice(t, 1), this;
    }),
    (e.getState = function (e) {
      var n = this,
        t = Z,
        r = Cu;
      return (
        (Z = this).state.clear(),
        (this._kill.length = 0),
        this.actions.forEach(function (t) {
          t.vars.getState &&
            ((t.states.length = 0), ((Cu = t).state = t.vars.getState(t))),
            e &&
              t.states.forEach(function (t) {
                return n.state.add(t);
              });
        }),
        (Cu = r),
        (Z = t),
        this.killConflicts(),
        this
      );
    }),
    (e.animate = function () {
      var t,
        e,
        n = this,
        r = Z,
        i = this.timeline,
        o = this.actions.length;
      for (
        Z = this,
          i.clear(),
          this._abs.length = this._final.length = this._run.length = 0,
          this.actions.forEach(function (t) {
            t.vars.animate && t.vars.animate(t);
            var e,
              n = t.vars.onEnter,
              r = t.vars.onLeave,
              i = t.targets;
            i &&
              i.length &&
              (n || r) &&
              ((e = new Gu()),
              t.states.forEach(function (t) {
                return e.add(t);
              }),
              (t = e.compare(nc.getState(i))).enter.length && n && n(t.enter),
              t.leave.length && r && r(t.leave));
          }),
          hu(this._abs),
          this._run.forEach(function (t) {
            return t();
          }),
          e = i.duration(),
          t = this._final.slice(0),
          i.add(function () {
            e <= i.time() &&
              (t.forEach(function (t) {
                return t();
              }),
              Ql(n, "onComplete"));
          }),
          Z = r;
        o--;

      )
        this.actions[o].vars.once && this.actions[o].kill();
      return Ql(this, "onStart"), i.restart(), this;
    }),
    (e.loadState = function (i) {
      i =
        i ||
        function () {
          return 0;
        };
      var o = [];
      return (
        this.actions.forEach(function (n) {
          var r, t;
          n.vars.loadState &&
            (o.push(
              (t = function t(e) {
                e && (n.targets = e),
                  ~(r = o.indexOf(t)) && (o.splice(r, 1), o.length || i());
              })
            ),
            n.vars.loadState(t));
        }),
        o.length || i(),
        this
      );
    }),
    (e.setState = function () {
      return (
        this.actions.forEach(function (t) {
          return (t.targets = t.vars.setState && t.vars.setState(t));
        }),
        this
      );
    }),
    (e.killConflicts = function (e) {
      return (
        this.state.interrupt(e),
        this._kill.forEach(function (t) {
          return t.interrupt(e);
        }),
        this
      );
    }),
    (e.run = function (t, e) {
      var n = this;
      return (
        this !== Z &&
          (t || this.getState(e),
          this.loadState(function () {
            n._killed || (n.setState(), n.animate());
          })),
        this
      );
    }),
    (e.clear = function (t) {
      this.state.clear(), t || (this.actions.length = 0);
    }),
    (e.getStateById = function (t) {
      for (var e, n = this.actions.length; n--; )
        if ((e = this.actions[n].getStateById(t))) return e;
      return this.state.idLookup[t] && this.state;
    }),
    (e.kill = function () {
      (this._killed = 1), this.clear(), delete Mu[this.id];
    });
  var tc = ec;
  function ec(t) {
    (this.id = t),
      (this.actions = []),
      (this._kill = []),
      (this._final = []),
      (this._abs = []),
      (this._run = []),
      (this.data = {}),
      (this.state = new Gu()),
      (this.timeline = wu.timeline());
  }
  (rc.getState = function (t, e) {
    t = gu(t, e);
    return (
      Cu && Cu.states.push(t), e && e.batch && rc.batch(e.batch).state.add(t), t
    );
  }),
    (rc.from = function (t, e) {
      return (
        "clearProps" in (e = e || {}) || (e.clearProps = !0),
        _u(
          t,
          gu(e.targets || t.targets, {
            props: e.props || t.props,
            simple: e.simple,
            kill: !!e.kill,
          }),
          e,
          -1
        )
      );
    }),
    (rc.to = function (t, e) {
      return _u(
        t,
        gu(e.targets || t.targets, {
          props: e.props || t.props,
          simple: e.simple,
          kill: !!e.kill,
        }),
        e,
        1
      );
    }),
    (rc.fromTo = function (t, e, n) {
      return _u(t, e, n);
    }),
    (rc.fit = function (t, e, n) {
      var r = n ? ru(n, Xu) : {},
        i = n || r,
        o = i.absolute,
        s = i.scale,
        a = i.getVars,
        l = i.props,
        u = i.runBackwards,
        c = i.onComplete,
        i = i.simple,
        h = n && n.fitChild && tu(n.fitChild),
        e = ju(e, l, i, t),
        p = ju(t, 0, i, e),
        t = l ? Ru[l] : Nu,
        i = wu.context();
      return (
        l && pu(r, e.props),
        au(p, t),
        u &&
          ("immediateRender" in r || (r.immediateRender = !0),
          (r.onComplete = function () {
            Hu(p), c && c.apply(this, arguments);
          })),
        o && uu(p, e),
        (r = du(p, e, s || h, !r.duration && l, h, r.duration || a ? r : 0)),
        "object" == typeof n && "zIndex" in n && (r.zIndex = n.zIndex),
        i &&
          !a &&
          i.add(function () {
            return function () {
              return Hu(p);
            };
          }),
        a ? r : r.duration ? wu.to(p.element, r) : null
      );
    }),
    (rc.makeAbsolute = function (t, e) {
      return (t instanceof Gu ? t : new Gu(t, e)).makeAbsolute();
    }),
    (rc.batch = function (t) {
      return Mu[(t = t || "default")] || (Mu[t] = new tc(t));
    }),
    (rc.killFlipsOf = function (t, e) {
      (t instanceof Gu ? t.targets : bu(t)).forEach(function (t) {
        return t && yu(t._flip, !1 !== e ? 1 : 2);
      });
    }),
    (rc.isFlipping = function (t) {
      t = rc.getByTarget(t);
      return !!t && t.isActive();
    }),
    (rc.getByTarget = function (t) {
      return (tu(t) || Ou)._flip;
    }),
    (rc.getElementState = function (t, e) {
      return new Zu(tu(t), e);
    }),
    (rc.convertCoordinates = function (t, e, n) {
      e = Et(e, !0, !0).multiply(Et(t));
      return n ? e.apply(n) : e;
    }),
    (rc.register = function (t) {
      var n;
      (Eu = "undefined" != typeof document && document.body) &&
        ((wu = t),
        Ps(Eu),
        (bu = wu.utils.toArray),
        (Pu = wu.core.getStyleSaver),
        (n = wu.utils.snap(0.1)),
        (Tu = function (t, e) {
          return n(parseFloat(t) + e);
        }));
    });
  var nc = rc;
  function rc() {}
  (nc.version = "3.13.0"),
    "undefined" != typeof window &&
      window.gsap &&
      window.gsap.registerPlugin(nc);
  function ic(t, e, n, r) {
    for (var i = e.length, o = 2 === r ? 0 : r, s = 0; s < i; s++)
      (t[o] = parseFloat(e[s][n])), 2 === r && (t[o + 1] = 0), (o += 2);
    return t;
  }
  function oc(t) {
    for (var e = t[0], n = t[1], r = 2; r < t.length; r += 2)
      (e = t[r] += e), (n = t[r + 1] += n);
  }
  function sc(t, e, n, r, i, o, s, a, l) {
    return (
      (e =
        "cubic" === s.type
          ? [e]
          : (!1 !== s.fromCurrent &&
              e.unshift(Dc(n, r, a), i ? Dc(n, i, l) : 0),
            s.relative && oc(e),
            [(i ? Zo : Ko)(e, s.curviness)])),
      (e = o(lc(e, n, s))),
      uc(t, n, r, e, "x", a),
      i && uc(t, n, i, e, "y", l),
      Ho(e, s.resolution || (0 === s.curviness ? 20 : 12))
    );
  }
  function ac(t, e, n) {
    var r,
      i = Et(t),
      o = 0,
      s = 0;
    return (
      "svg" === (t.tagName + "").toLowerCase()
        ? (r = t.viewBox.baseVal).width ||
          (r = {
            width: +t.getAttribute("width"),
            height: +t.getAttribute("height"),
          })
        : (r = e && t.getBBox && t.getBBox()),
      e &&
        "auto" !== e &&
        ((o = e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x),
        (s = e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y)),
      n.apply(o || s ? i.apply({ x: o, y: s }) : { x: i.e, y: i.f })
    );
  }
  function lc(t, e, n) {
    var r = n.align,
      i = n.matrix,
      o = n.offsetX,
      s = n.offsetY,
      n = n.alignOrigin,
      a = t[0][0],
      l = t[0][1],
      u = Dc(e, "x"),
      c = Dc(e, "y");
    return t && t.length
      ? (r &&
          ("self" === r || (r = fc(r)[0] || e) === e
            ? qo(t, 1, 0, 0, 1, u - a, c - l)
            : (n && !1 !== n[2]
                ? cc.set(e, {
                    transformOrigin: 100 * n[0] + "% " + 100 * n[1] + "%",
                  })
                : (n = [Dc(e, "xPercent") / -100, Dc(e, "yPercent") / -100]),
              (r = (e = bc(e, r, n, "auto")).apply({ x: a, y: l })),
              qo(
                t,
                e.a,
                e.b,
                e.c,
                e.d,
                u + e.e - (r.x - e.e),
                c + e.f - (r.y - e.f)
              ))),
        i
          ? qo(t, i.a, i.b, i.c, i.d, i.e, i.f)
          : (o || s) && qo(t, 1, 0, 0, 1, o || 0, s || 0),
        t)
      : Ro("M0,0L0,0");
  }
  function uc(t, e, n, r, i, o) {
    var s = e._gsap,
      a =
        (a = (a = s.harness) && a.aliases && a.aliases[n]) && a.indexOf(",") < 0
          ? a
          : n;
    ((n = t._pt = new hc(t._pt, e, a, 0, 0, yc, 0, s.set(e, a, t))).u =
      pc(s.get(e, a, o)) || 0),
      (n.path = r),
      (n.pp = i),
      t._props.push(a);
  }
  var cc,
    hc,
    pc,
    fc,
    dc,
    gc,
    mc = "x,translateX,left,marginLeft,xPercent".split(","),
    vc = "y,translateY,top,marginTop,yPercent".split(","),
    _c = Math.PI / 180,
    Dc = function (t, e, n) {
      return parseFloat(t._gsap.get(t, e, n || "px")) || 0;
    },
    yc = function (t) {
      return t;
    },
    xc = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
    bc = function (t, e, n, r) {
      var i,
        o = Et(t.parentNode, !0, !0),
        s = o.clone().multiply(Et(e)),
        t = ac(t, n, o),
        n = ac(e, r, o),
        o = n.x,
        n = n.y;
      return (
        (s.e = s.f = 0),
        "auto" === r &&
          e.getTotalLength &&
          "path" === e.tagName.toLowerCase() &&
          ((i = e.getAttribute("d").match(xc) || []),
          (o += (i = s.apply({ x: +i[0], y: +i[1] })).x),
          (n += i.y)),
        i && ((o -= (i = s.apply(e.getBBox())).x), (n -= i.y)),
        (s.e = o - t.x),
        (s.f = n - t.y),
        s
      );
    },
    e = {
      version: "3.13.0",
      name: "motionPath",
      register: function (t, e, n) {
        (pc = (cc = t).utils.getUnit),
          (fc = cc.utils.toArray),
          (dc = cc.core.getStyleSaver),
          (gc = cc.core.reverting || function () {}),
          (hc = n);
      },
      init: function (t, e, n) {
        if (!cc)
          return (
            console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1
          );
        var r,
          i,
          o,
          s = [],
          a = (e =
            "object" == typeof e && !e.style && e.path ? e : { path: e }),
          l = a.path,
          u = a.autoRotate,
          c = a.unitX,
          h = a.unitY,
          p = a.x,
          f = a.y,
          a = l[0],
          d =
            ((i = e.start),
            (o = "end" in e ? e.end : 1),
            function (t) {
              return i || 1 !== o ? Yo(t, i, o) : t;
            });
        if (
          ((this.rawPaths = s),
          (this.target = t),
          (this.tween = n),
          (this.styles = dc && dc(t, "transform")),
          (this.rotate = u || 0 === u) &&
            ((this.rOffset = parseFloat(u) || 0),
            (this.radians = !!e.useRadians),
            (this.rProp = e.rotation || "rotation"),
            (this.rSet = t._gsap.set(t, this.rProp, this)),
            (this.ru = pc(t._gsap.get(t, this.rProp)) || 0)),
          !Array.isArray(l) || "closed" in l || "number" == typeof a)
        )
          Ho((u = d(lc(Ro(e.path), t, e))), e.resolution),
            s.push(u),
            uc(this, t, e.x || "x", u, "x", e.unitX || "px"),
            uc(this, t, e.y || "y", u, "y", e.unitY || "px");
        else {
          for (r in a)
            !p && ~mc.indexOf(r) ? (p = r) : !f && ~vc.indexOf(r) && (f = r);
          for (r in (p && f
            ? s.push(
                sc(
                  this,
                  ic(ic([], l, p, 0), l, f, 1),
                  t,
                  p,
                  f,
                  d,
                  e,
                  c || pc(l[0][p]),
                  h || pc(l[0][f])
                )
              )
            : (p = f = 0),
          a))
            r !== p &&
              r !== f &&
              s.push(sc(this, ic([], l, r, 2), t, r, 0, d, e, pc(l[0][r])));
        }
        n.vars.immediateRender && this.render(n.progress(), this);
      },
      render: function (t, e) {
        var n = e.rawPaths,
          r = n.length,
          i = e._pt;
        if (e.tween._time || !gc()) {
          for (1 < t ? (t = 1) : t < 0 && (t = 0); r--; )
            Wo(n[r], t, !r && e.rotate, n[r]);
          for (; i; )
            i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), (i = i._next);
          e.rotate &&
            e.rSet(
              e.target,
              e.rProp,
              n[0].angle * (e.radians ? _c : 1) + e.rOffset + e.ru,
              e,
              t
            );
        } else e.styles.revert();
      },
      getLength: function (t) {
        return Ho(Ro(t)).totalLength;
      },
      sliceRawPath: Yo,
      getRawPath: Ro,
      pointsToSegment: Zo,
      stringToRawPath: Uo,
      rawPathToString: ts,
      transformRawPath: qo,
      getGlobalMatrix: Et,
      getPositionOnPath: Wo,
      cacheRawPathMeasurements: Ho,
      convertToPath: function (t, e) {
        return fc(t).map(function (t) {
          return Xo(t, !1 !== e);
        });
      },
      convertCoordinates: function (t, e, n) {
        e = Et(e, !0, !0).multiply(Et(t));
        return n ? e.apply(n) : e;
      },
      getAlignMatrix: bc,
      getRelativePosition: function (t, e, n, r) {
        t = bc(t, e, n, r);
        return { x: t.e, y: t.f };
      },
      arrayToRawPath: function (t, e) {
        t = ic(ic([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
        return (
          e.relative && oc(t), ["cubic" === e.type ? t : Zo(t, e.curviness)]
        );
      },
    };
  (cc ||
    ("undefined" != typeof window &&
      (cc = window.gsap) &&
      cc.registerPlugin &&
      cc)) &&
    cc.registerPlugin(e);
  function wc() {
    return (
      Lc ||
      ("undefined" != typeof window &&
        (Lc = window.gsap) &&
        Lc.registerPlugin &&
        Lc)
    );
  }
  function Cc(t) {
    return !!~Wc.indexOf(t);
  }
  function Ec(t, e, n, r, i) {
    t.addEventListener(e, n, { passive: !1 !== r, capture: !!i });
  }
  function Tc(t, e, n, r) {
    t.removeEventListener(e, n, !!r);
  }
  function Pc() {
    return (qc && qc.isPressed) || Bt._scrollers.cache++;
  }
  function Fc(n, r) {
    function i(t) {
      var e;
      return (
        t || 0 === t
          ? (Kc && (Ic.history.scrollRestoration = "manual"),
            (e = qc && qc.isPressed),
            (t = i.v = Math.round(t) || (qc && qc.iOS ? 1 : 0)),
            n(t),
            (i.cacheID = Bt._scrollers.cache),
            e && Qc("ss", t))
          : (r || Bt._scrollers.cache !== i.cacheID || Qc("ref")) &&
            ((i.cacheID = Bt._scrollers.cache), (i.v = n())),
        i.v + i.offset
      );
    }
    return (i.offset = 0), n && i;
  }
  function Sc(t, e) {
    return (
      ((e && e._ctx && e._ctx.selector) || Lc.utils.toArray)(t)[0] ||
      ("string" == typeof t && !1 !== Lc.config().nullTargetWarn
        ? console.warn("Element not found:", t)
        : null)
    );
  }
  function Mc(e, t) {
    var n = t.s,
      t = t.sc,
      r = (Cc(e) && (e = Xc.scrollingElement || zc), Bt._scrollers.indexOf(e)),
      i = t === ih.sc ? 1 : 2,
      o =
        (~r || (r = Bt._scrollers.push(e) - 1),
        Bt._scrollers[r + i] || Ec(e, "scroll", Pc),
        Bt._scrollers[r + i]);
    return (
      ((r =
        o ||
        (Bt._scrollers[r + i] =
          Fc(th(e, n), !0) ||
          (Cc(e)
            ? t
            : Fc(function (t) {
                return arguments.length ? (e[n] = t) : e[n];
              })))).target = e),
      o || (r.smooth = "smooth" === Lc.getProperty(e, "scrollBehavior")),
      r
    );
  }
  function Ac(t, e, i) {
    function o(t, e) {
      var n = $c();
      e || r < n - l
        ? ((a = s), (s = t), (u = l), (l = n))
        : i
        ? (s += t)
        : (s = a + ((t - a) / (n - u)) * (l - u));
    }
    var s = t,
      a = t,
      l = $c(),
      u = l,
      r = e || 50,
      c = Math.max(500, 3 * r);
    return {
      update: o,
      reset: function () {
        (a = s = i ? 0 : s), (u = l = 0);
      },
      getVelocity: function (t) {
        var e = u,
          n = a,
          r = $c();
        return (
          (!t && 0 !== t) || t === s || o(t),
          l === u || c < r - u
            ? 0
            : ((s + (i ? n : -n)) / ((i ? r : l) - e)) * 1e3
        );
      },
    };
  }
  function kc(t, e) {
    return (
      e && !t._gsapAllow && t.preventDefault(),
      t.changedTouches ? t.changedTouches[0] : t
    );
  }
  function Oc(t) {
    var e = Math.max.apply(Math, t),
      t = Math.min.apply(Math, t);
    return Math.abs(e) >= Math.abs(t) ? e : t;
  }
  function Bc() {
    (jc = Lc.core.globals().ScrollTrigger) && jc.core && Jc();
  }
  function Rc(t) {
    return (
      (Lc = t || wc()),
      !Nc &&
        Lc &&
        "undefined" != typeof document &&
        document.body &&
        ((Ic = window),
        (zc = (Xc = document).documentElement),
        (Yc = Xc.body),
        (Wc = [Ic, Xc, zc, Yc]),
        Lc.utils.clamp,
        (Gc = Lc.core.context || function () {}),
        (Vc = "onpointerenter" in Yc ? "pointer" : "mouse"),
        (Hc = S.isTouch =
          Ic.matchMedia &&
          Ic.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ic ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (Uc = S.eventTypes =
          (
            "ontouchstart" in zc
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in zc
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Kc = 0);
        }, 500),
        Bc(),
        (Nc = 1)),
      Nc
    );
  }
  var Lc,
    Nc,
    Ic,
    Xc,
    zc,
    Yc,
    Hc,
    Vc,
    jc,
    Wc,
    qc,
    Uc,
    Gc,
    Kc = 1,
    Zc = [],
    $c = ((Bt._scrollers = []), (Bt._proxies = []), Date.now),
    Qc = function (t, e) {
      return e;
    },
    Jc = function () {
      var t = jc.core,
        n = t.bridge || {},
        e = t._scrollers,
        t = t._proxies;
      e.push.apply(e, Bt._scrollers),
        t.push.apply(t, Bt._proxies),
        (Bt._scrollers = e),
        (Bt._proxies = t),
        (Qc = function (t, e) {
          return n[t](e);
        });
    },
    th = function (t, e) {
      return (
        ~Bt._proxies.indexOf(t) && Bt._proxies[Bt._proxies.indexOf(t) + 1][e]
      );
    },
    eh = "scrollLeft",
    nh = "scrollTop",
    rh = {
      s: eh,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Fc(function (t) {
        return arguments.length
          ? Ic.scrollTo(t, ih.sc())
          : Ic.pageXOffset || Xc[eh] || zc[eh] || Yc[eh] || 0;
      }),
    },
    ih = {
      s: nh,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: rh,
      sc: Fc(function (t) {
        return arguments.length
          ? Ic.scrollTo(rh.sc(), t)
          : Ic.pageYOffset || Xc[nh] || zc[nh] || Yc[nh] || 0;
      }),
    },
    S =
      ((rh.op = ih),
      (Bt._scrollers.cache = 0),
      (oh.prototype.init = function (t) {
        Nc || Rc(Lc) || console.warn("Please gsap.registerPlugin(Observer)"),
          jc || Bc();
        function L() {
          return (bt = $c());
        }
        function o(t) {
          var e, n, r, i;
          k(t, 1) ||
            ((e = (t = kc(t, f)).clientX),
            (t = t.clientY),
            (n = e - y.x),
            (r = t - y.y),
            (i = y.isDragging),
            (y.x = e),
            (y.y = t),
            (i ||
              ((n || r) &&
                (Math.abs(y.startX - e) >= h ||
                  Math.abs(y.startY - t) >= h))) &&
              ((s = i ? 2 : 1), i || (y.isDragging = !0), Ct(n, r)));
        }
        function N(t) {
          return (
            t.touches &&
            1 < t.touches.length &&
            (y.isGesturing = !0) &&
            pt(t, y.isDragging)
          );
        }
        function I() {
          return (y.isGesturing = !1), ft(y);
        }
        function X(t) {
          var e;
          k(t) ||
            ((t = C()),
            (e = E()),
            wt((t - T) * _, (e - P) * _, 1),
            (T = t),
            (P = e),
            d && R.restart(!0));
        }
        function z(t) {
          var e;
          k(t) ||
            ((t = kc(t, f)),
            dt && (l = !0),
            (e =
              (1 === t.deltaMode ? W : 2 === t.deltaMode ? Ic.innerHeight : 1) *
              U),
            wt(t.deltaX * e, t.deltaY * e, 0),
            d && !v && R.restart(!0));
        }
        function Y(t) {
          var e, n, r;
          k(t) ||
            ((e = t.clientX),
            (t = t.clientY),
            (n = e - y.x),
            (r = t - y.y),
            (y.x = e),
            (y.y = t),
            (a = !0),
            d && R.restart(!0),
            (n || r) && Ct(n, r));
        }
        function H(t) {
          (y.event = t), ut(y);
        }
        function V(t) {
          (y.event = t), ct(y);
        }
        function j(t) {
          return k(t) || (kc(t, f) && vt(y));
        }
        var i,
          s,
          a,
          l,
          u,
          n,
          c = t.tolerance,
          h = t.dragMinimum,
          e = t.type,
          p = t.target,
          W = t.lineHeight,
          r = t.debounce,
          f = t.preventDefault,
          d = t.onStop,
          q = t.onStopDelay,
          g = t.ignore,
          U = t.wheelSpeed,
          G = t.event,
          K = t.onDragStart,
          Z = t.onDragEnd,
          $ = t.onDrag,
          Q = t.onPress,
          J = t.onRelease,
          tt = t.onRight,
          et = t.onLeft,
          nt = t.onUp,
          rt = t.onDown,
          it = t.onChangeX,
          ot = t.onChangeY,
          st = t.onChange,
          at = t.onToggleX,
          lt = t.onToggleY,
          ut = t.onHover,
          ct = t.onHoverEnd,
          m = t.onMove,
          ht = t.ignoreCheck,
          v = t.isNormalizer,
          pt = t.onGestureStart,
          ft = t.onGestureEnd,
          dt = t.onWheel,
          gt = t.onEnable,
          mt = t.onDisable,
          vt = t.onClick,
          _ = t.scrollSpeed,
          D = t.capture,
          _t = t.allowClicks,
          Dt = t.lockAxis,
          yt = t.onLockAxis,
          g =
            ((this.target = p = Sc(p) || zc),
            (this.vars = t),
            g && Lc.utils.toArray(g)),
          c = c || 1e-9,
          h = h || 0,
          U = U || 1,
          _ = _ || 1,
          e = e || "wheel,touch,pointer",
          r = !1 !== r,
          W = W || parseFloat(Ic.getComputedStyle(Yc).lineHeight) || 22,
          y = this,
          x = 0,
          b = 0,
          w = t.passive || (!f && !1 !== t.passive),
          C = Mc(p, rh),
          E = Mc(p, ih),
          T = C(),
          P = E(),
          xt =
            ~e.indexOf("touch") &&
            !~e.indexOf("pointer") &&
            "pointerdown" === Uc[0],
          F = Cc(p),
          S = p.ownerDocument || Xc,
          M = [0, 0, 0],
          A = [0, 0, 0],
          bt = 0,
          k = function (t, e) {
            return (
              ((y.event = t) &&
                g &&
                (function (t, e) {
                  for (var n = e.length; n--; )
                    if (e[n] === t || e[n].contains(t)) return !0;
                  return !1;
                })(t.target, g)) ||
              (e && xt && "touch" !== t.pointerType) ||
              (ht && ht(t, e))
            );
          },
          O = function () {
            var t = (y.deltaX = Oc(M)),
              e = (y.deltaY = Oc(A)),
              n = Math.abs(t) >= c,
              r = Math.abs(e) >= c;
            st && (n || r) && st(y, t, e, M, A),
              n &&
                (tt && 0 < y.deltaX && tt(y),
                et && y.deltaX < 0 && et(y),
                it && it(y),
                at && y.deltaX < 0 != x < 0 && at(y),
                (x = y.deltaX),
                (M[0] = M[1] = M[2] = 0)),
              r &&
                (rt && 0 < y.deltaY && rt(y),
                nt && y.deltaY < 0 && nt(y),
                ot && ot(y),
                lt && y.deltaY < 0 != b < 0 && lt(y),
                (b = y.deltaY),
                (A[0] = A[1] = A[2] = 0)),
              (a || s) &&
                (m && m(y),
                s && (K && 1 === s && K(y), $ && $(y), (s = 0)),
                (a = !1)),
              u && !(u = !1) && yt && yt(y),
              l && (dt(y), (l = !1)),
              (i = 0);
          },
          wt = function (t, e, n) {
            (M[n] += t),
              (A[n] += e),
              y._vx.update(t),
              y._vy.update(e),
              r ? (i = i || requestAnimationFrame(O)) : O();
          },
          Ct = function (t, e) {
            Dt &&
              !n &&
              ((y.axis = n = Math.abs(t) > Math.abs(e) ? "x" : "y"), (u = !0)),
              "y" !== n && ((M[2] += t), y._vx.update(t, !0)),
              "x" !== n && ((A[2] += e), y._vy.update(e, !0)),
              r ? (i = i || requestAnimationFrame(O)) : O();
          },
          Et = (y.onPress = function (t) {
            k(t, 1) ||
              (t && t.button) ||
              ((y.axis = n = null),
              R.pause(),
              (y.isPressed = !0),
              (t = kc(t)),
              (x = b = 0),
              (y.startX = y.x = t.clientX),
              (y.startY = y.y = t.clientY),
              y._vx.reset(),
              y._vy.reset(),
              Ec(v ? p : S, Uc[1], o, w, !0),
              (y.deltaX = y.deltaY = 0),
              Q && Q(y));
          }),
          B = (y.onRelease = function (e) {
            var t, n, r, i;
            k(e, 1) ||
              (Tc(v ? p : S, Uc[1], o, !0),
              (t = !isNaN(y.y - y.startY)),
              (r =
                (n = y.isDragging) &&
                (3 < Math.abs(y.x - y.startX) || 3 < Math.abs(y.y - y.startY))),
              (i = kc(e)),
              !r &&
                t &&
                (y._vx.reset(),
                y._vy.reset(),
                f &&
                  _t &&
                  Lc.delayedCall(0.08, function () {
                    var t;
                    300 < $c() - bt &&
                      !e.defaultPrevented &&
                      (e.target.click
                        ? e.target.click()
                        : S.createEvent &&
                          ((t = S.createEvent("MouseEvents")).initMouseEvent(
                            "click",
                            !0,
                            !0,
                            Ic,
                            1,
                            i.screenX,
                            i.screenY,
                            i.clientX,
                            i.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                          e.target.dispatchEvent(t)));
                  })),
              (y.isDragging = y.isGesturing = y.isPressed = !1),
              d && n && !v && R.restart(!0),
              s && O(),
              Z && n && Z(y),
              J && J(y, r));
          }),
          R = (y._dc = Lc.delayedCall(q || 0.25, function () {
            y._vx.reset(), y._vy.reset(), R.pause(), d && d(y);
          }).pause());
        (y.deltaX = y.deltaY = 0),
          (y._vx = Ac(0, 50, !0)),
          (y._vy = Ac(0, 50, !0)),
          (y.scrollX = C),
          (y.scrollY = E),
          (y.isDragging = y.isGesturing = y.isPressed = !1),
          Gc(this),
          (y.enable = function (t) {
            return (
              y.isEnabled ||
                (Ec(F ? S : p, "scroll", Pc),
                0 <= e.indexOf("scroll") && Ec(F ? S : p, "scroll", X, w, D),
                0 <= e.indexOf("wheel") && Ec(p, "wheel", z, w, D),
                ((0 <= e.indexOf("touch") && Hc) ||
                  0 <= e.indexOf("pointer")) &&
                  (Ec(p, Uc[0], Et, w, D),
                  Ec(S, Uc[2], B),
                  Ec(S, Uc[3], B),
                  _t && Ec(p, "click", L, !0, !0),
                  vt && Ec(p, "click", j),
                  pt && Ec(S, "gesturestart", N),
                  ft && Ec(S, "gestureend", I),
                  ut && Ec(p, Vc + "enter", H),
                  ct && Ec(p, Vc + "leave", V),
                  m && Ec(p, Vc + "move", Y)),
                (y.isEnabled = !0),
                (y.isDragging = y.isGesturing = y.isPressed = a = s = !1),
                y._vx.reset(),
                y._vy.reset(),
                (T = C()),
                (P = E()),
                t && t.type && Et(t),
                gt && gt(y)),
              y
            );
          }),
          (y.disable = function () {
            y.isEnabled &&
              (Zc.filter(function (t) {
                return t !== y && Cc(t.target);
              }).length || Tc(F ? S : p, "scroll", Pc),
              y.isPressed &&
                (y._vx.reset(), y._vy.reset(), Tc(v ? p : S, Uc[1], o, !0)),
              Tc(F ? S : p, "scroll", X, D),
              Tc(p, "wheel", z, D),
              Tc(p, Uc[0], Et, D),
              Tc(S, Uc[2], B),
              Tc(S, Uc[3], B),
              Tc(p, "click", L, !0),
              Tc(p, "click", j),
              Tc(S, "gesturestart", N),
              Tc(S, "gestureend", I),
              Tc(p, Vc + "enter", H),
              Tc(p, Vc + "leave", V),
              Tc(p, Vc + "move", Y),
              (y.isEnabled = y.isPressed = y.isDragging = !1),
              mt && mt(y));
          }),
          (y.kill = y.revert =
            function () {
              y.disable();
              var t = Zc.indexOf(y);
              0 <= t && Zc.splice(t, 1), qc === y && (qc = 0);
            }),
          Zc.push(y),
          v && Cc(p) && (qc = y),
          y.enable(G);
      }),
      i(oh, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      oh);
  function oh(t) {
    this.init(t);
  }
  (S.version = "3.13.0"),
    (S.create = function (t) {
      return new S(t);
    }),
    (S.register = Rc),
    (S.getAll = function () {
      return Zc.slice();
    }),
    (S.getById = function (e) {
      return Zc.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    wc() && Lc.registerPlugin(S);
  for (
    var sh,
      ah,
      lh,
      uh,
      ch,
      hh,
      ph,
      fh,
      dh,
      gh = function () {
        return "undefined" != typeof window;
      },
      mh = function () {
        return sh || (gh() && (sh = window.gsap) && sh.registerPlugin && sh);
      },
      vh = function (t) {
        return "function" == typeof t;
      },
      _h = function (t) {
        return console.warn(t);
      },
      Dh = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      yh = 0.212671,
      xh = 0.71516,
      bh = 0.072169,
      wh = function (t) {
        return (vh(uh[t]) ? uh : uh.filters)[t];
      },
      Ch = function (t, e) {
        for (var n, r, i = [], o = 0, s = 0; s < 4; s++) {
          for (r = 0; r < 5; r++)
            (n = 4 === r ? t[o + 4] : 0),
              (i[o + r] =
                t[o] * e[r] +
                t[o + 1] * e[r + 5] +
                t[o + 2] * e[r + 10] +
                t[o + 3] * e[r + 15] +
                n);
          o += 5;
        }
        return i;
      },
      Eh = function (t, e) {
        var n = 1 - e,
          r = n * yh,
          i = n * xh,
          n = n * bh;
        return Ch(
          [
            r + e,
            i,
            n,
            0,
            0,
            r,
            i + e,
            n,
            0,
            0,
            r,
            i,
            n + e,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ],
          t
        );
      },
      Th = function (t, e, n) {
        var e = ah(e),
          r = e[0] / 255,
          i = e[1] / 255,
          e = e[2] / 255,
          o = 1 - n;
        return Ch(
          [
            o + n * r * yh,
            n * r * xh,
            n * r * bh,
            0,
            0,
            n * i * yh,
            o + n * i * xh,
            n * i * bh,
            0,
            0,
            n * e * yh,
            n * e * xh,
            o + n * e * bh,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ],
          t
        );
      },
      Ph = function (t, e) {
        e *= Math.PI / 180;
        var n = Math.cos(e),
          e = Math.sin(e);
        return Ch(
          [
            yh + n * (1 - yh) + e * -yh,
            xh + n * -xh + e * -xh,
            bh + n * -bh + e * (1 - bh),
            0,
            0,
            yh + n * -yh + 0.143 * e,
            xh + n * (1 - xh) + 0.14 * e,
            bh + n * -bh + -0.283 * e,
            0,
            0,
            yh + n * -yh + e * -(1 - yh),
            xh + n * -xh + e * xh,
            bh + n * (1 - bh) + e * bh,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
          ],
          t
        );
      },
      Fh = function (t, e) {
        return Ch(
          [
            e,
            0,
            0,
            0,
            0.5 * (1 - e),
            0,
            e,
            0,
            0,
            0.5 * (1 - e),
            0,
            0,
            e,
            0,
            0.5 * (1 - e),
            0,
            0,
            0,
            1,
            0,
          ],
          t
        );
      },
      Sh = function (t, e) {
        var n,
          r = wh(e),
          i = t.filters || [],
          o = i.length;
        for (
          r || _h(e + " not found. PixiPlugin.registerPIXI(PIXI)");
          -1 < --o;

        )
          if (i[o] instanceof r) return i[o];
        return (
          (n = new r()),
          "BlurFilter" === e && (fh ? (n.strength = 0) : (n.blur = 0)),
          (t.filters = [].concat(i, [n])),
          n
        );
      },
      Mh = function (t, e, n, r) {
        e.add(n, t, n[t], r[t]), e._props.push(t);
      },
      Ah = function (t, e) {
        var n = new (wh("ColorMatrixFilter"))();
        return (n.matrix = e), n.brightness(t, !0), n.matrix;
      },
      kh = {
        contrast: 1,
        saturation: 1,
        colorizeAmount: 0,
        colorize: "rgb(255,255,255)",
        hue: 0,
        brightness: 1,
      },
      Oh = function (t, e) {
        var n = e.t,
          r = e.p,
          i = e.color;
        (0, e.set)(n, r, (i[0] << 16) | (i[1] << 8) | i[2]);
      },
      Bh = function (t, e) {
        e = e.g;
        fh ? (e.fill(), e.stroke()) : e && (e.dirty++, e.clearDirty++);
      },
      Rh = function (t, e) {
        e.t.visible = !!e.t.alpha;
      },
      Lh = function (t, e, n, r) {
        var i = t[e],
          i = ah(
            vh(i)
              ? t[
                  e.indexOf("set") || !vh(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ]()
              : i
          ),
          n = ah(n);
        (r._pt = new ch(r._pt, t, e, 0, 0, Oh, {
          t: t,
          p: e,
          color: i,
          set: hh(t, e),
        })),
          r.add(i, 0, i[0], n[0]),
          r.add(i, 1, i[1], n[1]),
          r.add(i, 2, i[2], n[2]);
      },
      Nh = { tint: 1, lineColor: 1, fillColor: 1, strokeColor: 1 },
      Ih = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
      Xh = {
        x: "position",
        y: "position",
        tileX: "tilePosition",
        tileY: "tilePosition",
      },
      zh = {
        colorMatrixFilter: 1,
        saturation: 1,
        contrast: 1,
        hue: 1,
        colorize: 1,
        colorizeAmount: 1,
        brightness: 1,
        combineCMF: 1,
      },
      Yh = Math.PI / 180,
      Hh = function (t) {
        return "string" == typeof t;
      },
      Vh = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e5 * (e.s + e.c * t)) / 1e5,
          e
        );
      },
      jh = function () {
        var t;
        lh ||
          ((sh = mh()),
          (t =
            ((uh = lh = uh || (gh() && window.PIXI)) &&
              uh.VERSION &&
              parseFloat(uh.VERSION.split(".")[0])) ||
            0),
          (ph = 4 === t),
          (fh = 8 <= t),
          (ah = function (t) {
            return sh.utils.splitColor(
              "0x" === (t + "").substr(0, 2) ? "#" + t.substr(2) : t
            );
          }));
      },
      Wh = 0;
    Wh < Ih.length;
    Wh++
  )
    (dh = Ih[Wh]), (Xh[dh + "X"] = dh), (Xh[dh + "Y"] = dh);
  var qh = {
    version: "3.13.0",
    name: "pixi",
    register: function (t, e, n) {
      (sh = t), (ch = n), (hh = e.getSetter), jh();
    },
    headless: !0,
    registerPIXI: function (t) {
      uh = t;
    },
    init: function (t, e, n, r, i) {
      if ((uh || jh(), !uh))
        return _h("PIXI was not found. PixiPlugin.registerPIXI(PIXI);"), !1;
      var o, s, a, l, u, c, h, p, f, d, g, m;
      for (a in e) {
        if (((w = Xh[a]), (o = e[a]), w))
          (m = ~a
            .charAt(a.length - 1)
            .toLowerCase()
            .indexOf("x")
            ? "x"
            : "y"),
            this.add(
              t[w],
              m,
              t[w][m],
              "skew" === w
                ? Hh((m = o)) && "=" === m.charAt(1)
                  ? m.substr(0, 2) + parseFloat(m.substr(2)) * Yh
                  : m * Yh
                : o,
              0,
              0,
              0,
              0,
              0,
              1
            );
        else if (
          "scale" === a ||
          "anchor" === a ||
          "pivot" === a ||
          "tileScale" === a
        )
          this.add(t[a], "x", t[a].x, o), this.add(t[a], "y", t[a].y, o);
        else if ("rotation" === a || "angle" === a)
          (w = this),
            (p = (m = t)[(y = a)]),
            (g = b = D = void 0),
            (D = 360 * ((d = "rotation" === a) ? Yh : 1)),
            (b = Hh((f = o))),
            (g = b && "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0),
            (d = parseFloat(g ? f.substr(2) : f) * (d ? Yh : 1)),
            (d = p + (g = g ? d * g : d - p)),
            b &&
              ("short" === (b = f.split("_")[1]) &&
                (g %= D) !== g % (D / 2) &&
                (g += g < 0 ? D : -D),
              "cw" === b && g < 0
                ? (g = ((g + 1e10 * D) % D) - ~~(g / D) * D)
                : "ccw" === b &&
                  0 < g &&
                  (g = ((g - 1e10 * D) % D) - ~~(g / D) * D)),
            (w._pt = f = new ch(w._pt, m, y, p, g, Vh)),
            (f.e = d);
        else if (zh[a]) {
          if (!s) {
            C = _ = v = w = D = b = void 0;
            var v,
              _,
              D = t,
              y = e.colorMatrixFilter || e,
              x = this,
              b = Sh(D, "ColorMatrixFilter"),
              D = (D._gsColorMatrixFilter =
                D._gsColorMatrixFilter ||
                (function (t) {
                  var e,
                    n = {};
                  for (e in t) n[e] = t[e];
                  return n;
                })(kh)),
              w =
                y.combineCMF &&
                !("colorMatrixFilter" in y && !y.colorMatrixFilter),
              C = b.matrix;
            y.resolution && (b.resolution = y.resolution),
              y.matrix && y.matrix.length === C.length
                ? ((_ = y.matrix),
                  1 !== D.contrast && Mh("contrast", x, D, kh),
                  D.hue && Mh("hue", x, D, kh),
                  1 !== D.brightness && Mh("brightness", x, D, kh),
                  D.colorizeAmount &&
                    (Mh("colorize", x, D, kh), Mh("colorizeAmount", x, D, kh)),
                  1 !== D.saturation && Mh("saturation", x, D, kh))
                : ((_ = Dh.slice()),
                  null != y.contrast
                    ? ((_ = Fh(_, +y.contrast)), Mh("contrast", x, D, y))
                    : 1 !== D.contrast &&
                      (w ? (_ = Fh(_, D.contrast)) : Mh("contrast", x, D, kh)),
                  null != y.hue
                    ? ((_ = Ph(_, +y.hue)), Mh("hue", x, D, y))
                    : D.hue && (w ? (_ = Ph(_, D.hue)) : Mh("hue", x, D, kh)),
                  null != y.brightness
                    ? ((_ = Ah(+y.brightness, _)), Mh("brightness", x, D, y))
                    : 1 !== D.brightness &&
                      (w
                        ? (_ = Ah(D.brightness, _))
                        : Mh("brightness", x, D, kh)),
                  null != y.colorize
                    ? ((y.colorizeAmount =
                        "colorizeAmount" in y ? +y.colorizeAmount : 1),
                      (_ = Th(_, y.colorize, y.colorizeAmount)),
                      Mh("colorize", x, D, y),
                      Mh("colorizeAmount", x, D, y))
                    : D.colorizeAmount &&
                      (w
                        ? (_ = Th(_, D.colorize, D.colorizeAmount))
                        : (Mh("colorize", x, D, kh),
                          Mh("colorizeAmount", x, D, kh))),
                  null != y.saturation
                    ? ((_ = Eh(_, +y.saturation)), Mh("saturation", x, D, y))
                    : 1 !== D.saturation &&
                      (w
                        ? (_ = Eh(_, D.saturation))
                        : Mh("saturation", x, D, kh))),
              (v = _.length);
            for (; -1 < --v; )
              _[v] !== C[v] && x.add(C, v, C[v], _[v], "colorMatrixFilter");
            x._props.push("colorMatrixFilter"), (s = !0);
          }
        } else if (
          "blur" === a ||
          "blurX" === a ||
          "blurY" === a ||
          "blurPadding" === a
        ) {
          if (
            ((p = Sh(t, "BlurFilter")),
            this.add(p, a, p[a], o),
            0 !== e.blurPadding)
          )
            for (
              l = e.blurPadding || 2 * Math.max(p[a], o), u = t.filters.length;
              -1 < --u;

            )
              t.filters[u].padding = Math.max(t.filters[u].padding, l);
        } else if (Nh[a])
          if (
            ("lineColor" === a || "fillColor" === a || "strokeColor" === a) &&
            t instanceof uh.Graphics
          ) {
            (c = "fillStyle" in t ? [t] : (t.geometry || t).graphicsData),
              (h = a.substr(0, a.length - 5)),
              fh && "line" === h && (h = "stroke"),
              (this._pt = new ch(this._pt, t, a, 0, 0, Bh, {
                g: t.geometry || t,
              })),
              (u = c.length);
            for (; -1 < --u; )
              Lh(ph ? c[u] : c[u][h + "Style"], ph ? a : "color", o, this);
          } else Lh(t, a, o, this);
        else
          "autoAlpha" === a
            ? ((this._pt = new ch(this._pt, t, "visible", 0, 0, Rh)),
              this.add(t, "alpha", t.alpha, o),
              this._props.push("alpha", "visible"))
            : "resolution" !== a && this.add(t, a, "get", o);
        this._props.push(a);
      }
    },
  };
  mh() && sh.registerPlugin(qh);
  function Uh() {
    return tp || (lp() && (tp = window.gsap) && tp.registerPlugin && tp);
  }
  function Gh(t) {
    return "string" == typeof t;
  }
  function Kh(t) {
    return "function" == typeof t;
  }
  function Zh(t, e) {
    var n = "scroll" + (e = "x" === e ? "Width" : "Height"),
      r = "client" + e;
    return t === np || t === rp || t === ip
      ? Math.max(rp[n], ip[n]) - (np["inner" + e] || rp[r] || ip[r])
      : t[n] - t["offset" + e];
  }
  function $h(t, e) {
    if (!(t = op(t)[0]) || !t.getBoundingClientRect)
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var t = t.getBoundingClientRect(),
      n = !e || e === np || e === ip,
      r = n
        ? {
            top:
              rp.clientTop -
              (np.pageYOffset || rp.scrollTop || ip.scrollTop || 0),
            left:
              rp.clientLeft -
              (np.pageXOffset || rp.scrollLeft || ip.scrollLeft || 0),
          }
        : e.getBoundingClientRect(),
      t = { x: t.left - r.left, y: t.top - r.top };
    return !n && e && ((t.x += up(e, "x")()), (t.y += up(e, "y")())), t;
  }
  function Qh(t, e, n, r, i) {
    return isNaN(t) || "object" == typeof t
      ? Gh(t) && "=" === t.charAt(1)
        ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i
        : "max" === t
        ? Zh(e, n) - i
        : Math.min(Zh(e, n), $h(t, e)[n] - i)
      : parseFloat(t) - i;
  }
  function Jh() {
    (tp = Uh()),
      lp() &&
        tp &&
        "undefined" != typeof document &&
        document.body &&
        ((np = window),
        (ip = document.body),
        (rp = document.documentElement),
        (op = tp.utils.toArray),
        tp.config({ autoKillThreshold: 7 }),
        (sp = tp.config()),
        (ep = 1));
  }
  var tp,
    ep,
    np,
    rp,
    ip,
    op,
    sp,
    ap,
    lp = function () {
      return "undefined" != typeof window;
    },
    up = function (t, e) {
      var n = "scroll" + ("x" === e ? "Left" : "Top");
      return (
        t === np &&
          (null != t.pageXOffset
            ? (n = "page" + e.toUpperCase() + "Offset")
            : (t = null != rp[n] ? rp : ip)),
        function () {
          return t[n];
        }
      );
    },
    cp = {
      version: "3.13.0",
      name: "scrollTo",
      rawVars: 1,
      register: function (t) {
        (tp = t), Jh();
      },
      init: function (t, e, n, r, i) {
        ep || Jh();
        var o = this,
          s = tp.getProperty(t, "scrollSnapType");
        (o.isWin = t === np),
          (o.target = t),
          (o.tween = n),
          (e = (function (t, e, n, r) {
            if ("object" != typeof (t = Kh(t) ? t(e, n, r) : t))
              return Gh(t) && "max" !== t && "=" !== t.charAt(1)
                ? { x: t, y: t }
                : { y: t };
            if (t.nodeType) return { y: t, x: t };
            var i,
              o = {};
            for (i in t)
              o[i] = "onAutoKill" !== i && Kh(t[i]) ? t[i](e, n, r) : t[i];
            return o;
          })(e, r, t, i)),
          (o.vars = e),
          (o.autoKill = !!("autoKill" in e ? e : sp).autoKill),
          (o.getX = up(t, "x")),
          (o.getY = up(t, "y")),
          (o.x = o.xPrev = o.getX()),
          (o.y = o.yPrev = o.getY()),
          (ap = ap || tp.core.globals().ScrollTrigger),
          "smooth" === tp.getProperty(t, "scrollBehavior") &&
            tp.set(t, { scrollBehavior: "auto" }),
          s &&
            "none" !== s &&
            ((o.snap = 1),
            (o.snapInline = t.style.scrollSnapType),
            (t.style.scrollSnapType = "none")),
          null != e.x
            ? (o.add(o, "x", o.x, Qh(e.x, t, "x", o.x, e.offsetX || 0), r, i),
              o._props.push("scrollTo_x"))
            : (o.skipX = 1),
          null != e.y
            ? (o.add(o, "y", o.y, Qh(e.y, t, "y", o.y, e.offsetY || 0), r, i),
              o._props.push("scrollTo_y"))
            : (o.skipY = 1);
      },
      render: function (t, e) {
        for (
          var n,
            r,
            i,
            o = e._pt,
            s = e.target,
            a = e.tween,
            l = e.autoKill,
            u = e.xPrev,
            c = e.yPrev,
            h = e.isWin,
            p = e.snap,
            f = e.snapInline;
          o;

        )
          o.r(t, o.d), (o = o._next);
        (n = h || !e.skipX ? e.getX() : u),
          (c = (r = h || !e.skipY ? e.getY() : c) - c),
          (u = n - u),
          (i = sp.autoKillThreshold),
          e.x < 0 && (e.x = 0),
          e.y < 0 && (e.y = 0),
          l &&
            (!e.skipX && (i < u || u < -i) && n < Zh(s, "x") && (e.skipX = 1),
            !e.skipY && (i < c || c < -i) && r < Zh(s, "y") && (e.skipY = 1),
            e.skipX &&
              e.skipY &&
              (a.kill(),
              e.vars.onAutoKill &&
                e.vars.onAutoKill.apply(a, e.vars.onAutoKillParams || []))),
          h
            ? np.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y)
            : (e.skipY || (s.scrollTop = e.y), e.skipX || (s.scrollLeft = e.x)),
          !p ||
            (1 !== t && 0 !== t) ||
            ((r = s.scrollTop),
            (n = s.scrollLeft),
            f
              ? (s.style.scrollSnapType = f)
              : s.style.removeProperty("scroll-snap-type"),
            (s.scrollTop = r + 1),
            (s.scrollLeft = n + 1),
            (s.scrollTop = r),
            (s.scrollLeft = n)),
          (e.xPrev = e.x),
          (e.yPrev = e.y),
          ap && ap.update();
      },
      kill: function (t) {
        var e = "scrollTo" === t,
          n = this._props.indexOf(t);
        return (
          (!e && "scrollTo_x" !== t) || (this.skipX = 1),
          (!e && "scrollTo_y" !== t) || (this.skipY = 1),
          -1 < n && this._props.splice(n, 1),
          !this._props.length
        );
      },
    };
  (cp.max = Zh),
    (cp.getOffset = $h),
    (cp.buildGetter = up),
    (cp.config = function (t) {
      for (var e in (sp || Jh() || (sp = tp.config()), t)) sp[e] = t[e];
    }),
    Uh() && tp.registerPlugin(cp);
  function hp(t, e, n) {
    var r = If(t) && ("clamp(" === t.substr(0, 6) || -1 < t.indexOf("max"));
    return (n["_" + e + "Clamp"] = r) ? t.substr(6, t.length - 7) : t;
  }
  function pp(t, e) {
    return !e || (If(t) && "clamp(" === t.substr(0, 6))
      ? t
      : "clamp(" + t + ")";
  }
  function fp() {
    return Rf && requestAnimationFrame(fp);
  }
  function dp() {
    return (sf = 1);
  }
  function gp() {
    return (sf = 0);
  }
  function mp(t) {
    return t;
  }
  function vp(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function _p() {
    return "undefined" != typeof window;
  }
  function Dp() {
    return Rt || (_p() && (Rt = window.gsap) && Rt.registerPlugin && Rt);
  }
  function yp(t) {
    return (
      ("Height" === t ? wf : Lt["inner" + t]) ||
      $p["client" + t] ||
      It["client" + t]
    );
  }
  function xp(t) {
    return (
      th(t, "getBoundingClientRect") ||
      (Lf(t)
        ? function () {
            return (Cd.width = Lt.innerWidth), (Cd.height = wf), Cd;
          }
        : function () {
            return ed(t);
          })
    );
  }
  function bp(t, e) {
    for (var n = 0; n < hf.length; n += 3)
      (e && !~e.indexOf(hf[n + 1])) || t(hf[n], hf[n + 1], hf[n + 2]);
  }
  function wp(t) {
    return "number" == typeof t;
  }
  function Cp(t) {
    return "object" == typeof t;
  }
  function Ep(t, e, n) {
    t && t.progress(e ? 0 : 1) && n && t.pause();
  }
  function Tp(t, e) {
    var n;
    t.enabled &&
      (n = t._ctx
        ? t._ctx.add(function () {
            return e(t);
          })
        : e(t)) &&
      n.totalTime &&
      (t.callbackAnimation = n);
  }
  function Pp(t, e) {
    for (var n in e) n in t || (t[n] = e[n]);
    return t;
  }
  function Fp(t, e) {
    return (e = e.d2), t["offset" + e] || t["client" + e] || 0;
  }
  function Sp(t) {
    var e,
      n = [],
      r = t.labels,
      i = t.duration();
    for (e in r) n.push(r[e] / i);
    return n;
  }
  function Mp(i) {
    var o = Rt.utils.snap(i),
      s =
        Array.isArray(i) &&
        i.slice(0).sort(function (t, e) {
          return t - e;
        });
    return s
      ? function (t, e, n) {
          var r;
          if ((void 0 === n && (n = 0.001), !e)) return o(t);
          if (0 < e) {
            for (t -= n, r = 0; r < s.length; r++) if (s[r] >= t) return s[r];
            return s[r - 1];
          }
          for (r = s.length, t += n; r--; ) if (s[r] <= t) return s[r];
          return s[0];
        }
      : function (t, e, n) {
          void 0 === n && (n = 0.001);
          var r = o(t);
          return !e || Math.abs(r - t) < n || r - t < 0 == e < 0
            ? r
            : o(e < 0 ? t - i : t + i);
        };
  }
  function Ap(e, n, t, r) {
    t.split(",").forEach(function (t) {
      return e(n, t, r);
    });
  }
  function kp(t, e, n) {
    (n = n && n.wheelHandler) && (t(e, "wheel", n), t(e, "touchmove", n));
  }
  function Op(t, e) {
    var n, r;
    return (
      If(t) &&
        ((r = ~(n = t.indexOf("="))
          ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1))
          : 0),
        ~n && (t.indexOf("%") > n && (r *= e / 100), (t = t.substr(0, n - 1))),
        (t =
          r +
          (t in sd
            ? sd[t] * e
            : ~t.indexOf("%")
            ? (parseFloat(t) * e) / 100
            : parseFloat(t) || 0))),
      t
    );
  }
  function Bp(t, e, n, r, i, o, s, a) {
    var l = i.startColor,
      u = i.endColor,
      c = i.fontSize,
      h = i.indent,
      i = i.fontWeight,
      p = Nt.createElement("div"),
      f = Lf(n) || "fixed" === th(n, "pinType"),
      d = -1 !== t.indexOf("scroller"),
      n = f ? It : n,
      g = -1 !== t.indexOf("start"),
      u =
        "border-color:" +
        (l = g ? l : u) +
        ";font-size:" +
        c +
        ";color:" +
        l +
        ";font-weight:" +
        i +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (u += "position:" + ((d || a) && f ? "fixed;" : "absolute;")),
      (!d && !a && f) ||
        (u += (r === ih ? Yf : Hf) + ":" + (o + parseFloat(h)) + "px;"),
      s &&
        (u +=
          "box-sizing:border-box;text-align:left;width:" +
          s.offsetWidth +
          "px;"),
      (p._isStart = g),
      p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
      (p.style.cssText = u),
      (p.innerText = e || 0 === e ? t + "-" + e : t),
      n.children[0] ? n.insertBefore(p, n.children[0]) : n.appendChild(p),
      (p._offset = p["offset" + r.op.d2]),
      Rp(p, 0, r, g),
      p
    );
  }
  function Rp(t, e, n, r) {
    var i = { display: "block" },
      o = n[r ? "os2" : "p2"],
      s = n[r ? "p2" : "os2"];
    (t._isFlipped = r),
      (i[n.a + "Percent"] = r ? -100 : 0),
      (i[n.a] = r ? "1px" : 0),
      (i["border" + o + $f] = 1),
      (i["border" + s + $f] = 0),
      (i[n.p] = e + "px"),
      Rt.set(t, i);
  }
  function Lp() {
    return 34 < kf() - Bf && (Pf = Pf || requestAnimationFrame(yd));
  }
  function Np() {
    (gf && gf.isPressed && !(gf.startX > It.clientWidth)) ||
      (Bt._scrollers.cache++,
      gf ? (Pf = Pf || requestAnimationFrame(yd)) : yd(),
      Bf || hd("scrollStart"),
      (Bf = kf()));
  }
  function Ip() {
    (_f = Lt.innerWidth), (vf = Lt.innerHeight);
  }
  function Xp(t) {
    Bt._scrollers.cache++,
      (!0 !== t &&
        (of ||
          df ||
          Nt.fullscreenElement ||
          Nt.webkitFullscreenElement ||
          (mf &&
            _f === Lt.innerWidth &&
            !(Math.abs(Lt.innerHeight - vf) > 0.25 * Lt.innerHeight)))) ||
        Jp.restart(!0);
  }
  function zp(t) {
    for (var e = 0; e < pd.length; e += 5)
      (!t || (pd[e + 4] && pd[e + 4].query === t)) &&
        ((pd[e].style.cssText = pd[e + 1]),
        pd[e].getBBox && pd[e].setAttribute("transform", pd[e + 2] || ""),
        (pd[e + 3].uncache = 1));
  }
  function Yp(t, e) {
    ($p = Nt.documentElement),
      (It = Nt.body),
      (Qp = [Lt, Nt, $p, It]),
      !Bf || t || Cf
        ? (md(),
          (Ff = M.isRefreshing = !0),
          Bt._scrollers.forEach(function (t) {
            return Xf(t) && ++t.cacheID && (t.rec = t());
          }),
          (t = hd("refreshInit")),
          pf && M.sort(),
          e || fd(),
          Bt._scrollers.forEach(function (t) {
            Xf(t) &&
              (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
          }),
          Xt.slice(0).forEach(function (t) {
            return t.refresh();
          }),
          (Cf = !1),
          Xt.forEach(function (t) {
            var e, n;
            t._subPinOffset &&
              t.pin &&
              ((e = t.vars.horizontal ? "offsetWidth" : "offsetHeight"),
              (n = t.pin[e]),
              t.revert(!0, 1),
              t.adjustPinSpacing(t.pin[e] - n),
              t.refresh());
          }),
          (Ef = 1),
          vd(!0),
          Xt.forEach(function (t) {
            var e = Nf(t.scroller, t._dir),
              n = "max" === t.vars.end || (t._endClamp && t.end > e),
              r = t._startClamp && t.start >= e;
            (n || r) &&
              t.setPositions(
                r ? e - 1 : t.start,
                n ? Math.max(r ? e : t.start + 1, e) : t.end,
                !0
              );
          }),
          vd(!1),
          (Ef = 0),
          t.forEach(function (t) {
            return t && t.render && t.render(-1);
          }),
          Bt._scrollers.forEach(function (t) {
            Xf(t) &&
              (t.smooth &&
                requestAnimationFrame(function () {
                  return (t.target.style.scrollBehavior = "smooth");
                }),
              t.rec && t(t.rec));
          }),
          dd(xf, 1),
          Jp.pause(),
          gd++,
          yd((Ff = 2)),
          Xt.forEach(function (t) {
            return Xf(t.vars.onRefresh) && t.vars.onRefresh(t);
          }),
          (Ff = M.isRefreshing = !1),
          hd("refresh"))
        : nd(M, "scrollEnd", cd);
  }
  function Hp(t, e, n, r) {
    if (!t._gsap.swappedIn) {
      for (var i, o = xd.length, s = e.style, a = t.style; o--; )
        s[(i = xd[o])] = n[i];
      (s.position = "absolute" === n.position ? "absolute" : "relative"),
        "inline" === n.display && (s.display = "inline-block"),
        (a[Hf] = a[Yf] = "auto"),
        (s.flexBasis = n.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[Vf] = Fp(t, rh) + Jf),
        (s[jf] = Fp(t, ih) + Jf),
        (s[Kf] = a[Zf] = a.top = a.left = "0"),
        Vp(r),
        (a[Vf] = a["max" + $f] = n[Vf]),
        (a[jf] = a.maxHeight = n[jf]),
        (a[Kf] = n[Kf]),
        t.parentNode !== e &&
          (t.parentNode.insertBefore(e, t), e.appendChild(t)),
        (t._gsap.swappedIn = !0);
    }
  }
  function Vp(t) {
    if (t) {
      var e,
        n,
        r = t.t.style,
        i = t.length,
        o = 0;
      for ((t.t._gsap || Rt.core.getCache(t.t)).uncache = 1; o < i; o += 2)
        (n = t[o + 1]),
          (e = t[o]),
          n
            ? (r[e] = n)
            : r[e] && r.removeProperty(e.replace(wd, "-$1").toLowerCase());
    }
  }
  function jp(t) {
    for (var e = bd.length, n = t.style, r = [], i = 0; i < e; i++)
      r.push(bd[i], n[bd[i]]);
    return (r.t = t), r;
  }
  function Wp(t, e, n, r, i, o, s, a, l, u, c, h, p, f) {
    Xf(t) && (t = t(a)),
      If(t) &&
        "max" === t.substr(0, 3) &&
        (t = h + ("=" === t.charAt(4) ? Op("0" + t.substr(3), n) : 0));
    var d,
      g,
      m,
      v,
      _ = p ? p.time() : 0;
    return (
      p && p.seek(0),
      isNaN(t) || (t = +t),
      wp(t)
        ? (p &&
            (t = Rt.utils.mapRange(
              p.scrollTrigger.start,
              p.scrollTrigger.end,
              0,
              h,
              t
            )),
          s && Rp(s, n, r, !0))
        : (Xf(e) && (e = e(a)),
          (d = (t || "0").split(" ")),
          (m = Sc(e, a) || It),
          ((e = ed(m) || {}) && (e.left || e.top)) ||
            "none" !== td(m).display ||
            ((g = m.style.display),
            (m.style.display = "block"),
            (e = ed(m)),
            g ? (m.style.display = g) : m.style.removeProperty("display")),
          (g = Op(d[0], e[r.d])),
          (d = Op(d[1] || "0", n)),
          (t = e[r.p] - l[r.p] - u + g + i - d),
          s && Rp(s, d, r, n - d < 20 || (s._isStart && 20 < d)),
          (n -= n - d)),
      f && ((a[f] = t || -0.001), t < 0 && (t = 0)),
      o &&
        ((e = o._isStart),
        (v = "scroll" + r.d2),
        Rp(
          o,
          (u = t + n),
          r,
          (e && 20 < u) ||
            (!e && (c ? Math.max(It[v], $p[v]) : o.parentNode[v]) <= u + 1)
        ),
        c &&
          ((l = ed(s)),
          c && (o.style[r.op.p] = l[r.op.p] - r.op.m - o._offset + Jf))),
      p &&
        m &&
        ((v = ed(m)),
        p.seek(h),
        (g = ed(m)),
        (p._caScrollDist = v[r.p] - g[r.p]),
        (t = (t / p._caScrollDist) * h)),
      p && p.seek(_),
      p ? t : Math.round(t)
    );
  }
  function qp(t, e, n, r) {
    if (t.parentNode !== e) {
      var i,
        o,
        s = t.style;
      if (e === It) {
        for (i in ((t._stOrig = s.cssText), (o = td(t))))
          +i ||
            Ed.test(i) ||
            !o[i] ||
            "string" != typeof s[i] ||
            "0" === i ||
            (s[i] = o[i]);
        (s.top = n), (s.left = r);
      } else s.cssText = t._stOrig;
      (Rt.core.getCache(t).uncache = 1), e.appendChild(t);
    }
  }
  function Up(n, t, r) {
    var i = t,
      o = i;
    return function (t) {
      var e = Math.round(n());
      return (
        e !== i &&
          e !== o &&
          3 < Math.abs(e - i) &&
          3 < Math.abs(e - o) &&
          ((t = e), r && r()),
        (o = i),
        (i = Math.round(t))
      );
    };
  }
  function Gp(t, e, n) {
    var r = {};
    (r[e.p] = "+=" + n), Rt.set(t, r);
  }
  function Kp(u, t) {
    function c(t, e, n, r, i) {
      var o = c.tween,
        s = e.onComplete,
        a = {},
        l =
          ((n = n || h()),
          Up(h, n, function () {
            o.kill(), (c.tween = 0);
          }));
      return (
        (i = (r && i) || 0),
        (r = r || t - n),
        o && o.kill(),
        (e[p] = t),
        (e.inherit = !1),
        ((e.modifiers = a)[p] = function () {
          return l(n + r * o.ratio + i * o.ratio * o.ratio);
        }),
        (e.onUpdate = function () {
          Bt._scrollers.cache++, c.tween && yd();
        }),
        (e.onComplete = function () {
          (c.tween = 0), s && s.call(o);
        }),
        (o = c.tween = Rt.to(u, e))
      );
    }
    var h = Mc(u, t),
      p = "_scroll" + t.p2;
    return (
      ((u[p] = h).wheelHandler = function () {
        return c.tween && c.tween.kill() && (c.tween = 0);
      }),
      nd(u, "wheel", h.wheelHandler),
      M.isTouch && nd(u, "touchmove", h.wheelHandler),
      c
    );
  }
  var Rt,
    Zp,
    Lt,
    Nt,
    $p,
    It,
    Qp,
    Jp,
    tf,
    ef,
    nf,
    rf,
    of,
    sf,
    af,
    lf,
    uf,
    cf,
    hf,
    pf,
    ff,
    df,
    gf,
    mf,
    vf,
    _f,
    Df,
    yf,
    xf,
    bf,
    wf,
    Cf,
    Ef,
    Tf,
    Pf,
    Ff,
    Sf,
    Mf,
    Af = 1,
    kf = Date.now,
    Of = kf(),
    Bf = 0,
    Rf = 0,
    Lf = function (t) {
      return !!~Qp.indexOf(t);
    },
    Nf = function (t, e) {
      e.s;
      var n,
        r = e.d2,
        i = e.d,
        e = e.a;
      return Math.max(
        0,
        (n = "scroll" + r) && (e = th(t, n))
          ? e() - xp(t)()[i]
          : Lf(t)
          ? ($p[n] || It[n]) - yp(r)
          : t[n] - t["offset" + r]
      );
    },
    If = function (t) {
      return "string" == typeof t;
    },
    Xf = function (t) {
      return "function" == typeof t;
    },
    zf = Math.abs,
    Yf = "right",
    Hf = "bottom",
    Vf = "width",
    jf = "height",
    Wf = "Right",
    qf = "Left",
    Uf = "Top",
    Gf = "Bottom",
    Kf = "padding",
    Zf = "margin",
    $f = "Width",
    Qf = "Height",
    Jf = "px",
    td = function (t) {
      return Lt.getComputedStyle(t);
    },
    ed = function (t, e) {
      (e =
        e &&
        "matrix(1, 0, 0, 1, 0, 0)" !== td(t)[af] &&
        Rt.to(t, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1)),
        (t = t.getBoundingClientRect());
      return e && e.progress(0).kill(), t;
    },
    nd = function (t, e, n, r, i) {
      return t.addEventListener(e, n, { passive: !r, capture: !!i });
    },
    rd = function (t, e, n, r) {
      return t.removeEventListener(e, n, !!r);
    },
    id = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    od = { toggleActions: "play", anticipatePin: 0 },
    sd = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Xt = [],
    ad = {},
    ld = {},
    ud = [],
    cd = function t() {
      return rd(M, "scrollEnd", t) || Yp(!0);
    },
    hd = function (t) {
      return (
        (ld[t] &&
          ld[t].map(function (t) {
            return t();
          })) ||
        ud
      );
    },
    pd = [],
    fd = function (t, e) {
      var n;
      for (lf = 0; lf < Xt.length; lf++)
        !(n = Xt[lf]) ||
          (e && n._ctx !== e) ||
          (t ? n.kill(1) : n.revert(!0, !0));
      (Cf = !0), e && zp(e), e || hd("revert");
    },
    dd = function (t, e) {
      Bt._scrollers.cache++,
        (!e && Ff) ||
          Bt._scrollers.forEach(function (t) {
            return Xf(t) && t.cacheID++ && (t.rec = 0);
          }),
        If(t) && (Lt.history.scrollRestoration = xf = t);
    },
    gd = 0,
    md = function () {
      It.appendChild(bf),
        (wf = (!gf && bf.offsetHeight) || Lt.innerHeight),
        It.removeChild(bf);
    },
    vd = function (e) {
      return tf(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    _d = 0,
    Dd = 1,
    yd = function (t) {
      if (2 === t || (!Ff && !Cf)) {
        (M.isUpdating = !0), Mf && Mf.update(0);
        var e = Xt.length,
          t = kf(),
          n = 50 <= t - Of,
          r = e && Xt[0].scroll();
        if (
          ((Dd = r < _d ? -1 : 1),
          Ff || (_d = r),
          n &&
            (Bf && !sf && 200 < t - Bf && ((Bf = 0), hd("scrollEnd")),
            (nf = Of),
            (Of = t)),
          Dd < 0)
        ) {
          for (lf = e; 0 < lf--; ) Xt[lf] && Xt[lf].update(0, n);
          Dd = 1;
        } else for (lf = 0; lf < e; lf++) Xt[lf] && Xt[lf].update(0, n);
        M.isUpdating = !1;
      }
      Pf = 0;
    },
    xd = [
      "left",
      "top",
      Hf,
      Yf,
      Zf + Gf,
      Zf + Wf,
      Zf + Uf,
      Zf + qf,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    bd = xd.concat([
      Vf,
      jf,
      "boxSizing",
      "max" + $f,
      "max" + Qf,
      "position",
      Zf,
      Kf,
      Kf + Uf,
      Kf + Wf,
      Kf + Gf,
      Kf + qf,
    ]),
    wd = /([A-Z])/g,
    Cd = { left: 0, top: 0 },
    Ed = /(webkit|moz|length|cssText|inset)/i,
    M =
      ((zt.prototype.init = function (b, w) {
        var p,
          f,
          r,
          m,
          K,
          v,
          C,
          E,
          T,
          Z,
          _,
          o,
          D,
          y,
          d,
          $,
          P,
          x,
          Q,
          F,
          S,
          M,
          A,
          k,
          J,
          tt,
          et,
          nt,
          O,
          B,
          rt,
          it,
          ot,
          st,
          R,
          L,
          N,
          i,
          at,
          lt,
          ut,
          I,
          X,
          ct,
          z,
          ht,
          pt,
          ft,
          Y,
          dt,
          gt,
          mt,
          vt,
          _t,
          H,
          Dt,
          yt,
          xt,
          bt,
          wt,
          V,
          s,
          g,
          j,
          W,
          Ct,
          Et,
          a,
          l,
          t,
          u,
          c,
          h,
          Tt,
          Pt,
          q,
          U,
          e,
          G,
          Ft,
          St,
          n,
          Mt,
          At,
          kt,
          Ot;
        (this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          Rf
            ? ((e = b =
                Pp(If(b) || wp(b) || b.nodeType ? { trigger: b } : b, od)),
              (p = e.onUpdate),
              (f = e.toggleClass),
              (r = e.id),
              (m = e.onToggle),
              (K = e.onRefresh),
              (v = e.scrub),
              (C = e.trigger),
              (E = e.pin),
              (T = e.pinSpacing),
              (Z = e.invalidateOnRefresh),
              (_ = e.anticipatePin),
              (o = e.onScrubComplete),
              (D = e.onSnapComplete),
              (y = e.once),
              (d = e.snap),
              ($ = e.pinReparent),
              (n = e.pinSpacer),
              (P = e.containerAnimation),
              (x = e.fastScrollEnd),
              (Q = e.preventOverlaps),
              (F =
                b.horizontal || (b.containerAnimation && !1 !== b.horizontal)
                  ? rh
                  : ih),
              (S = !v && 0 !== v),
              (M = Sc(b.scroller || Lt)),
              (e = Rt.core.getCache(M)),
              (A = Lf(M)),
              (k =
                "fixed" ===
                ("pinType" in b
                  ? b.pinType
                  : th(M, "pinType") || (A && "fixed"))),
              (J = [b.onEnter, b.onLeave, b.onEnterBack, b.onLeaveBack]),
              (tt = S && b.toggleActions.split(" ")),
              (et = ("markers" in b ? b : od).markers),
              (nt = (!A && parseFloat(td(M)["border" + F.p2 + $f])) || 0),
              (O = this),
              (B =
                b.onRefreshInit &&
                function () {
                  return b.onRefreshInit(O);
                }),
              (a = M),
              (l = A),
              (u = (t = F).d),
              (c = t.d2),
              (h = t.a),
              (rt = (h = th(a, "getBoundingClientRect"))
                ? function () {
                    return h()[u];
                  }
                : function () {
                    return (l ? yp(c) : a["client" + c]) || 0;
                  }),
              (t = M),
              (it =
                !A || ~Bt._proxies.indexOf(t)
                  ? xp(t)
                  : function () {
                      return Cd;
                    }),
              (R = st = ot = 0),
              (L = Mc(M, F)),
              (O._startClamp = O._endClamp = !1),
              (O._dir = F),
              (_ *= 45),
              (O.scroller = M),
              (O.scroll = P ? P.time.bind(P) : L),
              (lt = L()),
              (O.vars = b),
              (w = w || b.animation),
              "refreshPriority" in b &&
                ((pf = 1), -9999 === b.refreshPriority && (Mf = O)),
              (e.tweenScroll = e.tweenScroll || {
                top: Kp(M, ih),
                left: Kp(M, rh),
              }),
              (O.tweenTo = N = e.tweenScroll[F.p]),
              (O.scrubDuration = function (t) {
                (s = wp(t) && t)
                  ? V
                    ? V.duration(t)
                    : (V = Rt.to(w, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: s,
                        paused: !0,
                        onComplete: function () {
                          return o && o(O);
                        },
                      }))
                  : (V && V.progress(1).kill(), (V = 0));
              }),
              w &&
                ((w.vars.lazy = !1),
                (w._initted && !O.isReverted) ||
                  (!1 !== w.vars.immediateRender &&
                    !1 !== b.immediateRender &&
                    w.duration() &&
                    w.render(0, !0, !0)),
                (O.animation = w.pause()),
                (w.scrollTrigger = O).scrubDuration(v),
                (bt = 0),
                (r = r || w.vars.id)),
              d &&
                ((Cp(d) && !d.push) || (d = { snapTo: d }),
                "scrollBehavior" in It.style &&
                  Rt.set(A ? [It, $p] : M, { scrollBehavior: "auto" }),
                Bt._scrollers.forEach(function (t) {
                  return (
                    Xf(t) &&
                    t.target === (A ? Nt.scrollingElement || $p : M) &&
                    (t.smooth = !1)
                  );
                }),
                (at = Xf(d.snapTo)
                  ? d.snapTo
                  : "labels" === d.snapTo
                  ? ((Pt = w),
                    function (t) {
                      return Rt.utils.snap(Sp(Pt), t);
                    })
                  : "labelsDirectional" === d.snapTo
                  ? ((Tt = w),
                    function (t, e) {
                      return Mp(Sp(Tt))(t, e.direction);
                    })
                  : !1 !== d.directional
                  ? function (t, e) {
                      return Mp(d.snapTo)(t, kf() - st < 500 ? 0 : e.direction);
                    }
                  : Rt.utils.snap(d.snapTo)),
                (g = d.duration || { min: 0.1, max: 2 }),
                (g = Cp(g) ? ef(g.min, g.max) : ef(g, g)),
                (j = Rt.delayedCall(d.delay || s / 2 || 0.1, function () {
                  var t,
                    e,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    l,
                    u = L(),
                    c = kf() - st < 500,
                    h = N.tween;
                  !(c || Math.abs(O.getVelocity()) < 10) || h || sf || ot === u
                    ? O.isActive && ot !== u && j.restart(!0)
                    : ((t = (u - I) / z),
                      (e = w && !S ? w.totalProgress() : t),
                      (c = (!c && ((e - wt) / (kf() - nf)) * 1e3) || 0),
                      (n = Rt.utils.clamp(-t, 1 - t, (zf(c / 2) * c) / 0.185)),
                      (r = t + (!1 === d.inertia ? 0 : n)),
                      (o = (i = d).onStart),
                      (s = i.onInterrupt),
                      (a = i.onComplete),
                      (l = at(r, O)),
                      wp(l) || (l = r),
                      (i = Math.max(0, Math.round(I + l * z))),
                      u <= X &&
                        I <= u &&
                        i !== u &&
                        ((h && !h._initted && h.data <= zf(i - u)) ||
                          (!1 === d.inertia && (n = l - t),
                          N(
                            i,
                            {
                              duration: g(
                                zf(
                                  (0.185 * Math.max(zf(r - e), zf(l - e))) /
                                    c /
                                    0.05 || 0
                                )
                              ),
                              ease: d.ease || "power3",
                              data: zf(i - u),
                              onInterrupt: function () {
                                return j.restart(!0) && s && s(O);
                              },
                              onComplete: function () {
                                O.update(),
                                  (ot = L()),
                                  w &&
                                    !S &&
                                    (V
                                      ? V.resetTo(
                                          "totalProgress",
                                          l,
                                          w._tTime / w._tDur
                                        )
                                      : w.progress(l)),
                                  (bt = wt =
                                    w && !S ? w.totalProgress() : O.progress),
                                  D && D(O),
                                  a && a(O);
                              },
                            },
                            u,
                            n * z,
                            i - u - n * z
                          ),
                          o && o(O, N.tween))));
                }).pause())),
              r && (ad[r] = O),
              (t =
                (t =
                  (C = O.trigger = Sc(C || (!0 !== E && E))) &&
                  C._gsap &&
                  C._gsap.stRevert) && t(O)),
              (E = !0 === E ? C : Sc(E)),
              If(f) && (f = { targets: C, className: f }),
              E &&
                (!1 !== T &&
                  T !== Zf &&
                  (T =
                    !(
                      !T &&
                      E.parentNode &&
                      E.parentNode.style &&
                      "flex" === td(E.parentNode).display
                    ) && Kf),
                (O.pin = E),
                (i = Rt.core.getCache(E)).spacer
                  ? (ht = i.pinState)
                  : (n &&
                      ((n = Sc(n)) &&
                        !n.nodeType &&
                        (n = n.current || n.nativeElement),
                      (i.spacerIsNative = !!n),
                      n && (i.spacerState = jp(n))),
                    (i.spacer = Y = n || Nt.createElement("div")),
                    Y.classList.add("pin-spacer"),
                    r && Y.classList.add("pin-spacer-" + r),
                    (i.pinState = ht = jp(E))),
                !1 !== b.force3D && Rt.set(E, { force3D: !0 }),
                (O.spacer = Y = i.spacer),
                (e = td(E)),
                (_t = e[T + F.os2]),
                (dt = Rt.getProperty(E)),
                (gt = Rt.quickSetter(E, F.a, Jf)),
                Hp(E, Y, e),
                (ft = jp(E))),
              et &&
                ((n = Cp(et) ? Pp(et, id) : id),
                (q = Bp("scroller-start", r, M, F, n, 0)),
                (U = Bp("scroller-end", r, M, F, n, 0, q)),
                (e = q["offset" + F.op.d2]),
                (St = Sc(th(M, "content") || M)),
                (G = this.markerStart = Bp("start", r, St, F, n, e, 0, P)),
                (Ft = this.markerEnd = Bp("end", r, St, F, n, e, 0, P)),
                P && (Et = Rt.quickSetter([G, Ft], F.a, Jf)),
                k ||
                  (Bt._proxies.length && !0 === th(M, "fixedMarkers")) ||
                  ((n = td((St = A ? It : M)).position),
                  (St.style.position =
                    "absolute" === n || "fixed" === n ? n : "relative"),
                  Rt.set([q, U], { force3D: !0 }),
                  (Dt = Rt.quickSetter(q, F.a, Jf)),
                  (xt = Rt.quickSetter(U, F.a, Jf)))),
              P &&
                ((Mt = P.vars.onUpdate),
                (At = P.vars.onUpdateParams),
                P.eventCallback("onUpdate", function () {
                  O.update(0, 0, 1), Mt && Mt.apply(P, At || []);
                })),
              (O.previous = function () {
                return Xt[Xt.indexOf(O) - 1];
              }),
              (O.next = function () {
                return Xt[Xt.indexOf(O) + 1];
              }),
              (O.revert = function (t, e) {
                if (!e) return O.kill(!0);
                var n,
                  r,
                  i = !1 !== t || !O.enabled,
                  e = of;
                i !== O.isReverted &&
                  (i &&
                    ((W = Math.max(L(), O.scroll.rec || 0)),
                    (R = O.progress),
                    (Ct = w && w.progress())),
                  G &&
                    [G, Ft, q, U].forEach(function (t) {
                      return (t.style.display = i ? "none" : "block");
                    }),
                  i && (of = O).update(i),
                  !E ||
                    ($ && O.isActive) ||
                    (i
                      ? ((t = E),
                        (n = Y),
                        Vp((r = ht)),
                        (r = t._gsap).spacerIsNative
                          ? Vp(r.spacerState)
                          : t._gsap.swappedIn &&
                            (r = n.parentNode) &&
                            (r.insertBefore(t, n), r.removeChild(n)),
                        (t._gsap.swappedIn = !1))
                      : Hp(E, Y, td(E), H)),
                  i || O.update(i),
                  (of = e),
                  (O.isReverted = i));
              }),
              (O.refresh = function (t, e, n, r) {
                if ((!of && O.enabled) || e)
                  if (E && t && Bf) nd(zt, "scrollEnd", cd);
                  else {
                    !Ff && B && B(O),
                      (of = O),
                      N.tween && !n && (N.tween.kill(), (N.tween = 0)),
                      V && V.pause(),
                      Z &&
                        w &&
                        (w.revert({ kill: !1 }).invalidate(),
                        w.getChildren &&
                          w.getChildren(!0, !0, !1).forEach(function (t) {
                            return (
                              t.vars.immediateRender && t.render(0, !0, !0)
                            );
                          })),
                      O.isReverted || O.revert(!0, !0),
                      (O._subPinOffset = !1);
                    var i,
                      o,
                      s,
                      a,
                      l,
                      u,
                      c,
                      h,
                      e = rt(),
                      t = it(),
                      p = P ? P.duration() : Nf(M, F),
                      f = z <= 0.01 || !z,
                      d = 0,
                      g = r || 0,
                      m = (Cp(n) ? n : b).end,
                      v = b.endTrigger || C,
                      _ = Cp(n)
                        ? n.start
                        : b.start ||
                          (0 !== b.start && C ? (E ? "0 0" : "0 100%") : 0),
                      D = (O.pinnedContainer =
                        b.pinnedContainer && Sc(b.pinnedContainer, O)),
                      y = (C && Math.max(0, Xt.indexOf(O))) || 0,
                      x = y;
                    for (
                      et &&
                      Cp(n) &&
                      ((c = Rt.getProperty(q, F.p)),
                      (h = Rt.getProperty(U, F.p)));
                      0 < x--;

                    )
                      (s = Xt[x]).end || s.refresh(0, 1) || (of = O),
                        !(a = s.pin) ||
                          (a !== C && a !== E && a !== D) ||
                          s.isReverted ||
                          ((l = l || []).unshift(s), s.revert(!0, !0)),
                        s !== Xt[x] && (y--, x--);
                    for (
                      Xf(_) && (_ = _(O)),
                        _ = hp(_, "start", O),
                        I =
                          Wp(
                            _,
                            C,
                            e,
                            F,
                            L(),
                            G,
                            q,
                            O,
                            t,
                            nt,
                            k,
                            p,
                            P,
                            O._startClamp && "_startClamp"
                          ) || (E ? -0.001 : 0),
                        Xf(m) && (m = m(O)),
                        If(m) &&
                          !m.indexOf("+=") &&
                          (~m.indexOf(" ")
                            ? (m = (If(_) ? _.split(" ")[0] : "") + m)
                            : ((d = Op(m.substr(2), e)),
                              (m = If(_)
                                ? _
                                : (P
                                    ? Rt.utils.mapRange(
                                        0,
                                        P.duration(),
                                        P.scrollTrigger.start,
                                        P.scrollTrigger.end,
                                        I
                                      )
                                    : I) + d),
                              (v = C))),
                        m = hp(m, "end", O),
                        X =
                          Math.max(
                            I,
                            Wp(
                              m || (v ? "100% 0" : p),
                              v,
                              e,
                              F,
                              L() + d,
                              Ft,
                              U,
                              O,
                              t,
                              nt,
                              k,
                              p,
                              P,
                              O._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                        d = 0,
                        x = y;
                      x--;

                    )
                      (a = (s = Xt[x]).pin) &&
                        s.start - s._pinPush <= I &&
                        !P &&
                        0 < s.end &&
                        ((i =
                          s.end -
                          (O._startClamp ? Math.max(0, s.start) : s.start)),
                        ((a === C && s.start - s._pinPush < I) || a === D) &&
                          isNaN(_) &&
                          (d += i * (1 - s.progress)),
                        a === E && (g += i));
                    if (
                      ((I += d),
                      (X += d),
                      O._startClamp && (O._startClamp += d),
                      O._endClamp &&
                        !Ff &&
                        ((O._endClamp = X || -0.001),
                        (X = Math.min(X, Nf(M, F)))),
                      (z = X - I || ((I -= 0.01) && 0.001)),
                      f &&
                        (R = Rt.utils.clamp(0, 1, Rt.utils.normalize(I, X, W))),
                      (O._pinPush = g),
                      G &&
                        d &&
                        (((i = {})[F.a] = "+=" + d),
                        D && (i[F.p] = "-=" + L()),
                        Rt.set([G, Ft], i)),
                      !E || (Ef && O.end >= Nf(M, F)))
                    ) {
                      if (C && L() && !P)
                        for (o = C.parentNode; o && o !== It; )
                          o._pinOffset &&
                            ((I -= o._pinOffset), (X -= o._pinOffset)),
                            (o = o.parentNode);
                    } else
                      (i = td(E)),
                        (n = F === ih),
                        (m = L()),
                        (mt = parseFloat(dt(F.a)) + g),
                        !p &&
                          1 < X &&
                          ((u = {
                            style: (u = (A ? Nt.scrollingElement || $p : M)
                              .style),
                            value: u["overflow" + F.a.toUpperCase()],
                          }),
                          A &&
                            "scroll" !==
                              td(It)["overflow" + F.a.toUpperCase()] &&
                            (u.style["overflow" + F.a.toUpperCase()] =
                              "scroll")),
                        Hp(E, Y, i),
                        (ft = jp(E)),
                        (o = ed(E, !0)),
                        (v = k && Mc(M, n ? rh : ih)()),
                        T
                          ? (((H = [T + F.os2, z + g + Jf]).t = Y),
                            (x = T === Kf ? Fp(E, F) + z + g : 0) &&
                              (H.push(F.d, x + Jf),
                              "auto" !== Y.style.flexBasis &&
                                (Y.style.flexBasis = x + Jf)),
                            Vp(H),
                            D &&
                              Xt.forEach(function (t) {
                                t.pin === D &&
                                  !1 !== t.vars.pinSpacing &&
                                  (t._subPinOffset = !0);
                              }),
                            k && L(W))
                          : (x = Fp(E, F)) &&
                            "auto" !== Y.style.flexBasis &&
                            (Y.style.flexBasis = x + Jf),
                        k &&
                          (((e = {
                            top: o.top + (n ? m - I : v) + Jf,
                            left: o.left + (n ? v : m - I) + Jf,
                            boxSizing: "border-box",
                            position: "fixed",
                          })[Vf] = e["max" + $f] =
                            Math.ceil(o.width) + Jf),
                          (e[jf] = e.maxHeight = Math.ceil(o.height) + Jf),
                          (e[Zf] =
                            e[Zf + Uf] =
                            e[Zf + Wf] =
                            e[Zf + Gf] =
                            e[Zf + qf] =
                              "0"),
                          (e[Kf] = i[Kf]),
                          (e[Kf + Uf] = i[Kf + Uf]),
                          (e[Kf + Wf] = i[Kf + Wf]),
                          (e[Kf + Gf] = i[Kf + Gf]),
                          (e[Kf + qf] = i[Kf + qf]),
                          (pt = (function (t, e, n) {
                            for (
                              var r, i = [], o = t.length, s = n ? 8 : 0;
                              s < o;
                              s += 2
                            )
                              (r = t[s]), i.push(r, r in e ? e[r] : t[s + 1]);
                            return (i.t = t.t), i;
                          })(ht, e, $)),
                          Ff && L(0)),
                        w
                          ? ((t = w._initted),
                            ff(1),
                            w.render(w.duration(), !0, !0),
                            (vt = dt(F.a) - mt + z + g),
                            (yt = 1 < Math.abs(z - vt)),
                            k && yt && pt.splice(pt.length - 2, 2),
                            w.render(0, !0, !0),
                            t || w.invalidate(!0),
                            w.parent || w.totalTime(w.totalTime()),
                            ff(0))
                          : (vt = z),
                        u &&
                          (u.value
                            ? (u.style["overflow" + F.a.toUpperCase()] =
                                u.value)
                            : u.style.removeProperty("overflow-" + F.a));
                    l &&
                      l.forEach(function (t) {
                        return t.revert(!1, !0);
                      }),
                      (O.start = I),
                      (O.end = X),
                      (lt = ut = Ff ? W : L()),
                      P || Ff || (lt < W && L(W), (O.scroll.rec = 0)),
                      O.revert(!1, !0),
                      (st = kf()),
                      j && ((ot = -1), j.restart(!0)),
                      (of = 0),
                      w &&
                        S &&
                        (w._initted || Ct) &&
                        w.progress() !== Ct &&
                        w.progress(Ct || 0, !0).render(w.time(), !0, !0),
                      (f || R !== O.progress || P || Z || (w && !w._initted)) &&
                        (w &&
                          !S &&
                          (w._initted || R || !1 !== w.vars.immediateRender) &&
                          w.totalProgress(
                            P && I < -0.001 && !R
                              ? Rt.utils.normalize(I, X, 0)
                              : R,
                            !0
                          ),
                        (O.progress = f || (lt - I) / z === R ? 0 : R)),
                      E && T && (Y._pinOffset = Math.round(O.progress * vt)),
                      V && V.invalidate(),
                      isNaN(c) ||
                        ((c -= Rt.getProperty(q, F.p)),
                        (h -= Rt.getProperty(U, F.p)),
                        Gp(q, F, c),
                        Gp(G, F, c - (r || 0)),
                        Gp(U, F, h),
                        Gp(Ft, F, h - (r || 0))),
                      f && !Ff && O.update(),
                      !K || Ff || ct || ((ct = !0), K(O), (ct = !1));
                  }
              }),
              (O.getVelocity = function () {
                return ((L() - ut) / (kf() - nf)) * 1e3 || 0;
              }),
              (O.endAnimation = function () {
                Ep(O.callbackAnimation),
                  w &&
                    (V
                      ? V.progress(1)
                      : w.paused()
                      ? S || Ep(w, O.direction < 0, 1)
                      : Ep(w, w.reversed()));
              }),
              (O.labelToScroll = function (t) {
                return (
                  (w &&
                    w.labels &&
                    (I || O.refresh() || I) +
                      (w.labels[t] / w.duration()) * z) ||
                  0
                );
              }),
              (O.getTrailing = function (e) {
                var t = Xt.indexOf(O),
                  t =
                    0 < O.direction
                      ? Xt.slice(0, t).reverse()
                      : Xt.slice(t + 1);
                return (
                  If(e)
                    ? t.filter(function (t) {
                        return t.vars.preventOverlaps === e;
                      })
                    : t
                ).filter(function (t) {
                  return 0 < O.direction ? t.end <= I : t.start >= X;
                });
              }),
              (O.update = function (t, e, n) {
                var r, i, o, s, a, l, u, c, h;
                (P && !n && !t) ||
                  ((n = !0 === Ff ? W : O.scroll()),
                  (r = (r = t ? 0 : (n - I) / z) < 0 ? 0 : 1 < r ? 1 : r || 0),
                  (l = O.progress),
                  e &&
                    ((ut = lt),
                    (lt = P ? L() : n),
                    d && ((wt = bt), (bt = w && !S ? w.totalProgress() : r))),
                  _ &&
                    E &&
                    !of &&
                    !Af &&
                    Bf &&
                    (!r && I < n + ((n - ut) / (kf() - nf)) * _
                      ? (r = 1e-4)
                      : 1 === r &&
                        X > n + ((n - ut) / (kf() - nf)) * _ &&
                        (r = 0.9999)),
                  r !== l &&
                    O.enabled &&
                    ((c =
                      (e = (u = O.isActive = !!r && r < 1) != (!!l && l < 1)) ||
                      !!r != !!l),
                    (O.direction = l < r ? 1 : -1),
                    (O.progress = r),
                    c &&
                      !of &&
                      ((i = r && !l ? 0 : 1 === r ? 1 : 1 === l ? 2 : 3),
                      S &&
                        ((o =
                          (!e && "none" !== tt[i + 1] && tt[i + 1]) || tt[i]),
                        (s =
                          w && ("complete" === o || "reset" === o || o in w)))),
                    Q &&
                      (e || s) &&
                      (s || v || !w) &&
                      (Xf(Q)
                        ? Q(O)
                        : O.getTrailing(Q).forEach(function (t) {
                            return t.endAnimation();
                          })),
                    S ||
                      (!V || of || Af
                        ? w && w.totalProgress(r, !(!of || (!st && !t)))
                        : (V._dp._time - V._start !== V._time &&
                            V.render(V._dp._time - V._start),
                          V.resetTo
                            ? V.resetTo("totalProgress", r, w._tTime / w._tDur)
                            : ((V.vars.totalProgress = r),
                              V.invalidate().restart()))),
                    E &&
                      (t && T && (Y.style[T + F.os2] = _t),
                      k
                        ? c &&
                          ((l = !t && l < r && n < X + 1 && n + 1 >= Nf(M, F)),
                          $ &&
                            (t || (!u && !l)
                              ? qp(E, Y)
                              : ((h = ed(E, !0)),
                                (a = n - I),
                                qp(
                                  E,
                                  It,
                                  h.top + (F === ih ? a : 0) + Jf,
                                  h.left + (F === ih ? 0 : a) + Jf
                                ))),
                          Vp(u || l ? pt : ft),
                          (yt && r < 1 && u) ||
                            gt(mt + (1 !== r || l ? 0 : vt)))
                        : gt(vp(mt + vt * r))),
                    !d || N.tween || of || Af || j.restart(!0),
                    f &&
                      (e || (y && r && (r < 1 || !Tf))) &&
                      tf(f.targets).forEach(function (t) {
                        return t.classList[u || y ? "add" : "remove"](
                          f.className
                        );
                      }),
                    !p || S || t || p(O),
                    c && !of
                      ? (S &&
                          (s &&
                            ("complete" === o
                              ? w.pause().totalProgress(1)
                              : "reset" === o
                              ? w.restart(!0).pause()
                              : "restart" === o
                              ? w.restart(!0)
                              : w[o]()),
                          p && p(O)),
                        (!e && Tf) ||
                          (m && e && Tp(O, m),
                          J[i] && Tp(O, J[i]),
                          y && (1 === r ? O.kill(!1, 1) : (J[i] = 0)),
                          e || (J[(i = 1 === r ? 1 : 3)] && Tp(O, J[i]))),
                        x &&
                          !u &&
                          Math.abs(O.getVelocity()) > (wp(x) ? x : 2500) &&
                          (Ep(O.callbackAnimation),
                          V
                            ? V.progress(1)
                            : Ep(w, "reverse" === o ? 1 : !r, 1)))
                      : S && p && !of && p(O)),
                  xt &&
                    ((h = P ? (n / P.duration()) * (P._caScrollDist || 0) : n),
                    Dt(h + (q._isFlipped ? 1 : 0)),
                    xt(h)),
                  Et && Et((-n / P.duration()) * (P._caScrollDist || 0)));
              }),
              (O.enable = function (t, e) {
                O.enabled ||
                  ((O.enabled = !0),
                  nd(M, "resize", Xp),
                  A || nd(M, "scroll", Np),
                  B && nd(zt, "refreshInit", B),
                  !1 !== t && ((O.progress = R = 0), (lt = ut = ot = L())),
                  !1 !== e && O.refresh());
              }),
              (O.getTween = function (t) {
                return t && N ? N.tween : V;
              }),
              (O.setPositions = function (t, e, n, r) {
                var i, o, s;
                P &&
                  ((i = P.scrollTrigger),
                  (o = P.duration()),
                  (s = i.end - i.start),
                  (t = i.start + (s * t) / o),
                  (e = i.start + (s * e) / o)),
                  O.refresh(
                    !1,
                    !1,
                    {
                      start: pp(t, n && !!O._startClamp),
                      end: pp(e, n && !!O._endClamp),
                    },
                    r
                  ),
                  O.update();
              }),
              (O.adjustPinSpacing = function (t) {
                var e;
                H &&
                  t &&
                  ((e = H.indexOf(F.d) + 1),
                  (H[e] = parseFloat(H[e]) + t + Jf),
                  (H[1] = parseFloat(H[1]) + t + Jf),
                  Vp(H));
              }),
              (O.disable = function (t, e) {
                if (
                  O.enabled &&
                  (!1 !== t && O.revert(!0, !0),
                  (O.enabled = O.isActive = !1),
                  e || (V && V.pause()),
                  (W = 0),
                  i && (i.uncache = 1),
                  B && rd(zt, "refreshInit", B),
                  j && (j.pause(), N.tween && N.tween.kill() && (N.tween = 0)),
                  !A)
                ) {
                  for (var n = Xt.length; n--; )
                    if (Xt[n].scroller === M && Xt[n] !== O) return;
                  rd(M, "resize", Xp), A || rd(M, "scroll", Np);
                }
              }),
              (O.kill = function (t, e) {
                O.disable(t, e), V && !e && V.kill(), r && delete ad[r];
                var n = Xt.indexOf(O);
                0 <= n && Xt.splice(n, 1),
                  n === lf && 0 < Dd && lf--,
                  (n = 0),
                  Xt.forEach(function (t) {
                    return t.scroller === O.scroller && (n = 1);
                  }),
                  n || Ff || (O.scroll.rec = 0),
                  w &&
                    ((w.scrollTrigger = null),
                    t && w.revert({ kill: !1 }),
                    e || w.kill()),
                  G &&
                    [G, Ft, q, U].forEach(function (t) {
                      return t.parentNode && t.parentNode.removeChild(t);
                    }),
                  Mf === O && (Mf = 0),
                  E &&
                    (i && (i.uncache = 1),
                    (n = 0),
                    Xt.forEach(function (t) {
                      return t.pin === E && n++;
                    }),
                    n || (i.spacer = 0)),
                  b.onKill && b.onKill(O);
              }),
              Xt.push(O),
              O.enable(!1, !1),
              t && t(O),
              w && w.add && !z
                ? ((kt = O.update),
                  (O.update = function () {
                    (O.update = kt),
                      Bt._scrollers.cache++,
                      I || X || O.refresh();
                  }),
                  Rt.delayedCall(0.01, O.update),
                  (z = 0.01),
                  (I = X = 0))
                : O.refresh(),
              E &&
                Sf !== gd &&
                ((Ot = Sf = gd),
                requestAnimationFrame(function () {
                  return Ot === gd && Yp(!0);
                })))
            : (this.update = this.refresh = this.kill = mp);
      }),
      (zt.register = function (t) {
        return (
          Zp ||
            ((Rt = t || Dp()),
            _p() && window.document && zt.enable(),
            (Zp = Rf)),
          Zp
        );
      }),
      (zt.defaults = function (t) {
        if (t) for (var e in t) od[e] = t[e];
        return od;
      }),
      (zt.disable = function (e, n) {
        (Rf = 0),
          Xt.forEach(function (t) {
            return t[n ? "kill" : "disable"](e);
          }),
          rd(Lt, "wheel", Np),
          rd(Nt, "scroll", Np),
          clearInterval(rf),
          rd(Nt, "touchcancel", mp),
          rd(It, "touchstart", mp),
          Ap(rd, Nt, "pointerdown,touchstart,mousedown", dp),
          Ap(rd, Nt, "pointerup,touchend,mouseup", gp),
          Jp.kill(),
          bp(rd);
        for (var t = 0; t < Bt._scrollers.length; t += 3)
          kp(rd, Bt._scrollers[t], Bt._scrollers[t + 1]),
            kp(rd, Bt._scrollers[t], Bt._scrollers[t + 2]);
      }),
      (zt.enable = function () {
        if (
          ((Lt = window),
          (Nt = document),
          ($p = Nt.documentElement),
          (It = Nt.body),
          Rt &&
            ((tf = Rt.utils.toArray),
            (ef = Rt.utils.clamp),
            (yf = Rt.core.context || mp),
            (ff = Rt.core.suppressOverwrites || mp),
            (xf = Lt.history.scrollRestoration || "auto"),
            (_d = Lt.pageYOffset || 0),
            Rt.core.globals("ScrollTrigger", zt),
            It))
        ) {
          (Rf = 1),
            ((bf = document.createElement("div")).style.height = "100vh"),
            (bf.style.position = "absolute"),
            md(),
            fp(),
            S.register(Rt),
            (zt.isTouch = S.isTouch),
            (Df =
              S.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (mf = 1 === S.isTouch),
            nd(Lt, "wheel", Np),
            (Qp = [Lt, Nt, $p, It]),
            Rt.matchMedia
              ? ((zt.matchMedia = function (t) {
                  var e,
                    n = Rt.matchMedia();
                  for (e in t) n.add(e, t[e]);
                  return n;
                }),
                Rt.addEventListener("matchMediaInit", function () {
                  return fd();
                }),
                Rt.addEventListener("matchMediaRevert", function () {
                  return zp();
                }),
                Rt.addEventListener("matchMedia", function () {
                  Yp(0, 1), hd("matchMedia");
                }),
                Rt.matchMedia().add("(orientation: portrait)", function () {
                  return Ip(), Ip;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Ip(),
            nd(Nt, "scroll", Np);
          var t,
            e = It.hasAttribute("style"),
            n = It.style,
            r = n.borderTopStyle,
            i = Rt.core.Animation.prototype;
          for (
            i.revert ||
              Object.defineProperty(i, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              n.borderTopStyle = "solid",
              i = ed(It),
              ih.m = Math.round(i.top + ih.sc()) || 0,
              rh.m = Math.round(i.left + rh.sc()) || 0,
              r ? (n.borderTopStyle = r) : n.removeProperty("border-top-style"),
              e || (It.setAttribute("style", ""), It.removeAttribute("style")),
              rf = setInterval(Lp, 250),
              Rt.delayedCall(0.5, function () {
                return (Af = 0);
              }),
              nd(Nt, "touchcancel", mp),
              nd(It, "touchstart", mp),
              Ap(nd, Nt, "pointerdown,touchstart,mousedown", dp),
              Ap(nd, Nt, "pointerup,touchend,mouseup", gp),
              af = Rt.utils.checkPrefix("transform"),
              bd.push(af),
              Zp = kf(),
              Jp = Rt.delayedCall(0.2, Yp).pause(),
              hf = [
                Nt,
                "visibilitychange",
                function () {
                  var t = Lt.innerWidth,
                    e = Lt.innerHeight;
                  Nt.hidden
                    ? ((uf = t), (cf = e))
                    : (uf === t && cf === e) || Xp();
                },
                Nt,
                "DOMContentLoaded",
                Yp,
                Lt,
                "load",
                Yp,
                Lt,
                "resize",
                Xp,
              ],
              bp(nd),
              Xt.forEach(function (t) {
                return t.enable(0, 1);
              }),
              t = 0;
            t < Bt._scrollers.length;
            t += 3
          )
            kp(rd, Bt._scrollers[t], Bt._scrollers[t + 1]),
              kp(rd, Bt._scrollers[t], Bt._scrollers[t + 2]);
        }
      }),
      (zt.config = function (t) {
        "limitCallbacks" in t && (Tf = !!t.limitCallbacks);
        var e = t.syncInterval;
        (e && clearInterval(rf)) || ((rf = e) && setInterval(Lp, e)),
          "ignoreMobileResize" in t &&
            (mf = 1 === zt.isTouch && t.ignoreMobileResize),
          "autoRefreshEvents" in t &&
            (bp(rd),
            bp(nd, t.autoRefreshEvents || "none"),
            (df = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
      }),
      (zt.scrollerProxy = function (t, e) {
        var t = Sc(t),
          n = Bt._scrollers.indexOf(t),
          r = Lf(t);
        ~n && Bt._scrollers.splice(n, r ? 6 : 2),
          e &&
            (r
              ? Bt._proxies.unshift(Lt, e, It, e, $p, e)
              : Bt._proxies.unshift(t, e));
      }),
      (zt.clearMatchMedia = function (e) {
        Xt.forEach(function (t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
        });
      }),
      (zt.isInViewport = function (t, e, n) {
        (t = (If(t) ? Sc(t) : t).getBoundingClientRect()),
          (e = t[n ? Vf : jf] * e || 0);
        return n
          ? 0 < t.right - e && t.left + e < Lt.innerWidth
          : 0 < t.bottom - e && t.top + e < Lt.innerHeight;
      }),
      (zt.positionInViewport = function (t, e, n) {
        var t = (t = If(t) ? Sc(t) : t).getBoundingClientRect(),
          r = t[n ? Vf : jf],
          r =
            null == e
              ? r / 2
              : e in sd
              ? sd[e] * r
              : ~e.indexOf("%")
              ? (parseFloat(e) * r) / 100
              : parseFloat(e) || 0;
        return n ? (t.left + r) / Lt.innerWidth : (t.top + r) / Lt.innerHeight;
      }),
      (zt.killAll = function (t) {
        Xt.slice(0).forEach(function (t) {
          return "ScrollSmoother" !== t.vars.id && t.kill();
        }),
          !0 !== t &&
            ((t = ld.killAll || []),
            (ld = {}),
            t.forEach(function (t) {
              return t();
            }));
      }),
      zt);
  function zt(t, e) {
    Zp ||
      zt.register(Rt) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      yf(this),
      this.init(t, e);
  }
  (M.version = "3.13.0"),
    (M.saveStyles = function (t) {
      return t
        ? tf(t).forEach(function (t) {
            var e;
            t &&
              t.style &&
              (0 <= (e = pd.indexOf(t)) && pd.splice(e, 5),
              pd.push(
                t,
                t.style.cssText,
                t.getBBox && t.getAttribute("transform"),
                Rt.core.getCache(t),
                yf()
              ));
          })
        : pd;
    }),
    (M.revert = function (t, e) {
      return fd(!t, e);
    }),
    (M.create = function (t, e) {
      return new M(t, e);
    }),
    (M.refresh = function (t) {
      return t ? Xp(!0) : (Zp || M.register()) && Yp(!0);
    }),
    (M.update = function (t) {
      return ++Bt._scrollers.cache && yd(!0 === t ? 2 : 0);
    }),
    (M.clearScrollMemory = dd),
    (M.maxScroll = function (t, e) {
      return Nf(t, e ? rh : ih);
    }),
    (M.getScrollFunc = function (t, e) {
      return Mc(Sc(t), e ? rh : ih);
    }),
    (M.getById = function (t) {
      return ad[t];
    }),
    (M.getAll = function () {
      return Xt.filter(function (t) {
        return "ScrollSmoother" !== t.vars.id;
      });
    }),
    (M.isScrolling = function () {
      return !!Bf;
    }),
    (M.snapDirectional = Mp),
    (M.addEventListener = function (t, e) {
      t = ld[t] || (ld[t] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (M.removeEventListener = function (t, e) {
      (t = ld[t]), (e = t && t.indexOf(e));
      0 <= e && t.splice(e, 1);
    }),
    (M.batch = function (t, e) {
      var n,
        r = [],
        i = {},
        o = e.interval || 0.016,
        s = e.batchMax || 1e9;
      for (n in e)
        i[n] =
          "on" === n.substr(0, 2) && Xf(e[n]) && "onRefreshInit" !== n
            ? (function (t) {
                var e = [],
                  n = [],
                  r = Rt.delayedCall(o, function () {
                    t(e, n), (e = []), (n = []);
                  }).pause();
                return function (t) {
                  e.length || r.restart(!0),
                    e.push(t.trigger),
                    n.push(t),
                    s <= e.length && r.progress(1);
                };
              })(e[n])
            : e[n];
      return (
        Xf(s) &&
          ((s = s()),
          nd(M, "refresh", function () {
            return (s = e.batchMax());
          })),
        tf(t).forEach(function (t) {
          var e = {};
          for (n in i) e[n] = i[n];
          (e.trigger = t), r.push(M.create(e));
        }),
        r
      );
    });
  function Td(t, e, n, r) {
    return (
      r < e ? t(r) : e < 0 && t(0),
      r < n ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
    );
  }
  function Pd(t, e) {
    !0 === e
      ? t.style.removeProperty("touch-action")
      : (t.style.touchAction =
          !0 === e
            ? "auto"
            : e
            ? "pan-" + e + (S.isTouch ? " pinch-zoom" : "")
            : "none"),
      t === $p && Pd(It, e);
  }
  function Fd(t, e, n, r) {
    return S.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: e,
      onWheel: (r = r && kd),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return n && nd(Nt, S.eventTypes[0], Bd, !1, !0);
      },
      onDisable: function () {
        return rd(Nt, S.eventTypes[0], Bd, !0);
      },
    });
  }
  function Sd(t) {
    function e() {
      return (r = !1);
    }
    function o() {
      (a = Nf(v, ih)),
        (F = ef(Df ? 1 : 0, a)),
        f && (P = ef(0, Nf(v, rh))),
        (l = gd);
    }
    function s() {
      (D._gsap.y = vp(parseFloat(D._gsap.y) + y.offset) + "px"),
        (D.style.transform =
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
          parseFloat(D._gsap.y) +
          ", 0, 1)"),
        (y.offset = y.cacheID = 0);
    }
    function i() {
      o(),
        u.isActive() &&
          u.vars.scrollY > a &&
          (y() > a ? u.progress(1) && y(a) : u.resetTo("scrollY", a));
    }
    ((t = Cp(t) ? t : {}).preventDefault = t.isNormalizer = t.allowClicks = !0),
      t.type || (t.type = "wheel,touch"),
      (t.debounce = !!t.debounce),
      (t.id = t.id || "normalizer");
    var n,
      a,
      l,
      r,
      u,
      c,
      h,
      p,
      f = (_ = t).normalizeScrollX,
      d = _.momentum,
      g = _.allowNestedScroll,
      m = _.onRelease,
      v = Sc(t.target) || $p,
      _ = (_ = Rt.core.globals().ScrollSmoother) && _.get(),
      D =
        Df &&
        ((t.content && Sc(t.content)) ||
          (_ && !1 !== t.content && !_.smooth() && _.content())),
      y = Mc(v, ih),
      x = Mc(v, rh),
      b = 1,
      w =
        (S.isTouch && Lt.visualViewport
          ? Lt.visualViewport.scale * Lt.visualViewport.width
          : Lt.outerWidth) / Lt.innerWidth,
      C = 0,
      E = Xf(d)
        ? function () {
            return d(n);
          }
        : function () {
            return d || 2.8;
          },
      T = Fd(v, t.type, !0, g),
      P = mp,
      F = mp;
    return (
      D && Rt.set(D, { y: "+=0" }),
      (t.ignoreCheck = function (t) {
        return (
          (Df &&
            "touchmove" === t.type &&
            (function () {
              var t;
              if (r)
                return (
                  requestAnimationFrame(e),
                  (t = vp(n.deltaY / 2)),
                  (t = F(y.v - t)),
                  D &&
                    t !== y.v + y.offset &&
                    ((y.offset = t - y.v),
                    (t = vp((parseFloat(D && D._gsap.y) || 0) - y.offset)),
                    (D.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      t +
                      ", 0, 1)"),
                    (D._gsap.y = t + "px"),
                    (y.cacheID = Bt._scrollers.cache),
                    yd()),
                  !0
                );
              y.offset && s(), (r = !0);
            })()) ||
          (1.05 < b && "touchstart" !== t.type) ||
          n.isGesturing ||
          (t.touches && 1 < t.touches.length)
        );
      }),
      (t.onPress = function () {
        r = !1;
        var t = b;
        (b = vp(((Lt.visualViewport && Lt.visualViewport.scale) || 1) / w)),
          u.pause(),
          t !== b && Pd(v, 1.01 < b || (!f && "x")),
          (c = x()),
          (h = y()),
          o(),
          (l = gd);
      }),
      (t.onRelease = t.onGestureStart =
        function (t, e) {
          var n, r;
          y.offset && s(),
            e
              ? (Bt._scrollers.cache++,
                (e = E()),
                f &&
                  ((r = (n = x()) + (0.05 * e * -t.velocityX) / 0.227),
                  (e *= Td(x, n, r, Nf(v, rh))),
                  (u.vars.scrollX = P(r))),
                (r = (n = y()) + (0.05 * e * -t.velocityY) / 0.227),
                (e *= Td(y, n, r, Nf(v, ih))),
                (u.vars.scrollY = F(r)),
                u.invalidate().duration(e).play(0.01),
                ((Df && u.vars.scrollY >= a) || a - 1 <= n) &&
                  Rt.to({}, { onUpdate: i, duration: e }))
              : p.restart(!0),
            m && m(t);
        }),
      (t.onWheel = function () {
        u._ts && u.pause(), 1e3 < kf() - C && ((l = 0), (C = kf()));
      }),
      (t.onChange = function (t, e, n, r, i) {
        gd !== l && o(),
          e && f && x(P(r[2] === e ? c + (t.startX - t.x) : x() + e - r[1])),
          n &&
            (y.offset && s(),
            (t = (r = i[2] === n) ? h + t.startY - t.y : y() + n - i[1]),
            (i = F(t)),
            r && t !== i && (h += i - t),
            y(i)),
          (n || e) && yd();
      }),
      (t.onEnable = function () {
        Pd(v, !f && "x"),
          M.addEventListener("refresh", i),
          nd(Lt, "resize", i),
          y.smooth &&
            ((y.target.style.scrollBehavior = "auto"),
            (y.smooth = x.smooth = !1)),
          T.enable();
      }),
      (t.onDisable = function () {
        Pd(v, !0),
          rd(Lt, "resize", i),
          M.removeEventListener("refresh", i),
          T.kill();
      }),
      (t.lockAxis = !1 !== t.lockAxis),
      ((n = new S(t)).iOS = Df) && !y() && y(1),
      Df && Rt.ticker.add(mp),
      (p = n._dc),
      (u = Rt.to(n, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Up(y, y(), function () {
            return u.pause();
          }),
        },
        onUpdate: yd,
        onComplete: p.vars.onComplete,
      })),
      n
    );
  }
  var Md,
    Ad = { auto: 1, scroll: 1 },
    kd = function (t) {
      var e,
        n = t.event,
        r = t.target,
        t = t.axis,
        i = (n.changedTouches ? n.changedTouches[0] : n).target,
        o = i._gsap || Rt.core.getCache(i),
        s = kf();
      if (!o._isScrollT || 2e3 < s - o._isScrollT) {
        for (
          ;
          i &&
          i !== It &&
          ((i.scrollHeight <= i.clientHeight &&
            i.scrollWidth <= i.clientWidth) ||
            (!Ad[(e = td(i)).overflowY] && !Ad[e.overflowX]));

        )
          i = i.parentNode;
        (o._isScroll =
          i &&
          i !== r &&
          !Lf(i) &&
          (Ad[(e = td(i)).overflowY] || Ad[e.overflowX])),
          (o._isScrollT = s);
      }
      (!o._isScroll && "x" !== t) || (n.stopPropagation(), (n._gsapAllow = !0));
    },
    Od = /(input|label|select|textarea)/i,
    Bd = function (t) {
      var e = Od.test(t.target.tagName);
      (e || Md) && ((t._gsapAllow = !0), (Md = e));
    },
    Rd =
      ((M.sort = function (t) {
        if (Xf(t)) return Xt.sort(t);
        var e = Lt.pageYOffset || 0;
        return (
          M.getAll().forEach(function (t) {
            return (t._sortY = t.trigger
              ? e + t.trigger.getBoundingClientRect().top
              : t.start + Lt.innerHeight);
          }),
          Xt.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  (t.vars.containerAnimation ? 1e6 : t._sortY) -
                  ((e.vars.containerAnimation ? 1e6 : e._sortY) +
                    -1e6 * (e.vars.refreshPriority || 0))
                );
              }
          )
        );
      }),
      (M.observe = function (t) {
        return new S(t);
      }),
      (M.normalizeScroll = function (t) {
        if (void 0 === t) return gf;
        if (!0 === t && gf) return gf.enable();
        if (!1 === t) return gf && gf.kill(), void (gf = t);
        t = t instanceof S ? t : Sd(t);
        return (
          gf && gf.target === t.target && gf.kill(), Lf(t.target) && (gf = t), t
        );
      }),
      (M.core = {
        _getVelocityProp: Ac,
        _inputObserver: Fd,
        _scrollers: Bt._scrollers,
        _proxies: Bt._proxies,
        bridge: {
          ss: function () {
            Bf || hd("scrollStart"), (Bf = kf());
          },
          ref: function () {
            return of;
          },
        },
      }),
      Dp() && Rt.registerPlugin(M),
      /(?:^\s+|\s+$)/g),
    Ld =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function Nd(t) {
    var e = t.nodeType,
      n = "";
    if (1 === e || 9 === e || 11 === e) {
      if ("string" == typeof t.textContent) return t.textContent;
      for (t = t.firstChild; t; t = t.nextSibling) n += Nd(t);
    } else if (3 === e || 4 === e) return t.nodeValue;
    return n;
  }
  function Id(t, e, n, r, i) {
    for (var o, s = t.firstChild, a = []; s; )
      3 === s.nodeType
        ? ((o = (s.nodeValue + "").replace(/^\n+/g, "")),
          r || (o = o.replace(/\s+/g, " ")),
          a.push.apply(a, Xd(o, e, n, r, i)))
        : "br" === (s.nodeName + "").toLowerCase()
        ? (a[a.length - 1] += "<br>")
        : a.push(s.outerHTML),
        (s = s.nextSibling);
    if (!i) for (o = a.length; o--; ) "&" === a[o] && a.splice(o, 1, "&amp;");
    return a;
  }
  function Xd(t, e, n, r, i) {
    if (
      ((t += ""),
      n && (t = t.trim ? t.trim() : t.replace(Rd, "")),
      e && "" !== e)
    )
      return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var o, s, a = [], l = t.length, u = 0; u < l; u++)
      ((55296 <= (s = t.charAt(u)).charCodeAt(0) && s.charCodeAt(0) <= 56319) ||
        (65024 <= t.charCodeAt(u + 1) && t.charCodeAt(u + 1) <= 65039)) &&
        ((o = ((t.substr(u, 12).split(Ld) || [])[1] || "").length || 2),
        (s = t.substr(u, o)),
        (u += o - (a.emoji = 1))),
        a.push(
          i
            ? s
            : ">" === s
            ? "&gt;"
            : "<" === s
            ? "&lt;"
            : !r ||
              " " !== s ||
              (" " !== t.charAt(u - 1) && " " !== t.charAt(u + 1))
            ? s
            : "&nbsp;"
        );
    return a;
  }
  var zd,
    Qf = {
      version: "3.13.0",
      name: "text",
      init: function (t, e, n) {
        "object" != typeof e && (e = { value: e });
        var r,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          h = t.nodeName.toUpperCase(),
          p = this,
          f = e,
          d = f.newClass,
          g = f.oldClass,
          m = f.preserveSpaces,
          f = f.rtl,
          v = (p.delimiter = e.delimiter || ""),
          _ = (p.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : ""));
        if (
          ((p.svg = t.getBBox && ("TEXT" === h || "TSPAN" === h)),
          !("innerHTML" in t || p.svg))
        )
          return !1;
        if (((p.target = t), "value" in e)) {
          for (
            o = Id(t, v, !1, m, p.svg),
              (zd = zd || document.createElement("div")).innerHTML = e.value,
              i = Id(zd, v, !1, m, p.svg),
              p.from = n._from,
              (!p.from && !f) || (f && p.from) || ((h = o), (o = i), (i = h)),
              p.hasClass = !(!d && !g),
              p.newClass = f ? g : d,
              p.oldClass = f ? d : g,
              r = (h = o.length - i.length) < 0 ? o : i,
              h < 0 && (h = -h);
            -1 < --h;

          )
            r.push(_);
          if ("diff" === e.type) {
            for (a = [], l = [], u = "", h = s = 0; h < i.length; h++)
              (c = i[h]) === o[h]
                ? (u += c)
                : ((a[s] = u + c), (l[s++] = u + o[h]), (u = ""));
            (i = a), (o = l), u && (i.push(u), o.push(u));
          }
          e.speed &&
            n.duration(
              Math.min((0.05 / e.speed) * r.length, e.maxDuration || 9999)
            ),
            (p.rtl = f),
            (p.original = o),
            (p.text = i),
            p._props.push("text");
        } else p.text = p.original = [""];
      },
      render: function (t, e) {
        1 < t ? (t = 1) : t < 0 && (t = 0), e.from && (t = 1 - t);
        var n = e.text,
          r = e.hasClass,
          i = e.newClass,
          o = e.oldClass,
          s = e.delimiter,
          a = e.target,
          l = e.fillChar,
          u = e.original,
          c = e.rtl,
          h = n.length,
          c = ((c ? 1 - t : t) * h + 0.5) | 0,
          h =
            r && t
              ? ((r = o && c !== h),
                ((t = i && c) ? "<span class='" + i + "'>" : "") +
                  n.slice(0, c).join(s) +
                  (t ? "</span>" : "") +
                  (r ? "<span class='" + o + "'>" : "") +
                  s +
                  u.slice(c).join(s) +
                  (r ? "</span>" : ""))
              : n.slice(0, c).join(s) + s + u.slice(c).join(s);
        e.svg
          ? (a.textContent = h)
          : (a.innerHTML =
              "&nbsp;" === l && ~h.indexOf("  ")
                ? h.split("  ").join("&nbsp;&nbsp;")
                : h);
      },
    };
  (Qf.splitInnerHTML = Id),
    (Qf.emojiSafeSplit = Xd),
    (Qf.getText = Nd),
    (c0 ||
      ("undefined" != typeof window &&
        (c0 = window.gsap) &&
        c0.registerPlugin &&
        c0)) &&
      c0.registerPlugin(Qf);
  function Yd() {
    return $d || (o0() && ($d = window.gsap) && $d.registerPlugin && $d);
  }
  function Hd(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function Vd(t, e) {
    var n = l0(t);
    return ~t.indexOf("%") ? (n / 100) * e : n;
  }
  function jd(t, e) {
    return l0(t.getAttribute(e));
  }
  function Wd(t, e, n, r, i, o) {
    return u0(
      Math.pow((l0(n) - l0(t)) * i, 2) + Math.pow((l0(r) - l0(e)) * o, 2)
    );
  }
  function qd(t) {
    console.warn(t);
  }
  function Ud(t) {
    return "non-scaling-stroke" === t.getAttribute("vector-effect");
  }
  function Gd(t) {
    if (!(t = Qd(t)[0])) return 0;
    var e,
      n,
      r,
      i,
      o = t.tagName.toLowerCase(),
      s = t.style,
      a = 1,
      l = 1;
    Ud(t) &&
      ((l = t.getScreenCTM()),
      (a = u0(l.a * l.a + l.b * l.b)),
      (l = u0(l.d * l.d + l.c * l.c)));
    try {
      i = t.getBBox();
    } catch (t) {
      qd(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var u = (p = i || { x: 0, y: 0, width: 0, height: 0 }).x,
      c = p.y,
      h = p.width,
      p = p.height;
    if (
      ((i && (h || p)) ||
        !a0[o] ||
        ((h = jd(t, a0[o][0])),
        (p = jd(t, a0[o][1])),
        "rect" !== o && "line" !== o && ((h *= 2), (p *= 2)),
        "line" === o &&
          ((u = jd(t, "x1")),
          (c = jd(t, "y1")),
          (h = Math.abs(h - u)),
          (p = Math.abs(p - c)))),
      "path" === o)
    )
      (i = s.strokeDasharray),
        (s.strokeDasharray = "none"),
        (e = t.getTotalLength() || 0),
        Hd(a) !== Hd(l) &&
          !n0 &&
          (n0 = 1) &&
          qd(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (e *= (a + l) / 2),
        (s.strokeDasharray = i);
    else if ("rect" === o) e = 2 * h * a + 2 * p * l;
    else if ("line" === o) e = Wd(u, c, u + h, c + p, a, l);
    else if ("polyline" === o || "polygon" === o)
      for (
        n = t.getAttribute("points").match(s0) || [],
          "polygon" === o && n.push(n[0], n[1]),
          e = 0,
          r = 2;
        r < n.length;
        r += 2
      )
        e += Wd(n[r - 2], n[r - 1], n[r], n[r + 1], a, l) || 0;
    else
      ("circle" !== o && "ellipse" !== o) ||
        ((s = (h / 2) * a),
        (i = (p / 2) * l),
        (e = Math.PI * (3 * (s + i) - u0((3 * s + i) * (s + 3 * i)))));
    return e || 0;
  }
  function Kd(t, e) {
    if (!(t = Qd(t)[0])) return [0, 0];
    e = e || Gd(t) + 1;
    var n = (t = Jd.getComputedStyle(t)).strokeDasharray || "",
      t = l0(t.strokeDashoffset),
      r = n.indexOf(",");
    return [
      -t || 0,
      (n =
        e < (n = (r = r < 0 ? n.indexOf(" ") : r) < 0 ? e : l0(n.substr(0, r)))
          ? e
          : n) - t || 0,
    ];
  }
  function Zd() {
    o0() &&
      ((Jd = window),
      (e0 = $d = Yd()),
      (Qd = $d.utils.toArray),
      (r0 = $d.core.getStyleSaver),
      (i0 = $d.core.reverting || function () {}),
      (t0 = -1 !== ((Jd.navigator || {}).userAgent || "").indexOf("Edge")));
  }
  var $d,
    Qd,
    Jd,
    t0,
    e0,
    n0,
    r0,
    i0,
    o0 = function () {
      return "undefined" != typeof window;
    },
    s0 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    a0 = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    l0 = function (t) {
      return parseFloat(t) || 0;
    },
    u0 = Math.sqrt,
    c0 = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (t) {
        ($d = t), Zd();
      },
      init: function (t, e, n, r, i) {
        if (!t.getBBox) return !1;
        e0 || Zd();
        var o,
          s,
          a,
          l,
          u,
          c = Gd(t);
        return (
          (this.styles =
            r0 && r0(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = n),
          (this._style = t.style),
          (this._target = t),
          e + "" == "true"
            ? (e = "0 100%")
            : e
            ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
            : (e = "0 0"),
          (n = Kd(t, c)),
          (o = e),
          (s = c),
          (a = n[0]),
          (l = o.indexOf(" ")),
          (a =
            l < 0
              ? ((u = void 0 !== a ? a + "" : o), o)
              : ((u = o.substr(0, l)), o.substr(l + 1))),
          (u = Vd(u, s)),
          (o = (a = Vd(a, s)) < u ? [a, u] : [u, a]),
          (this._length = Hd(c)),
          (this._dash = Hd(n[1] - n[0])),
          (this._offset = Hd(-n[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            Hd(o[1] - o[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          (this._offsetPT = this.add(
            this,
            "_offset",
            this._offset,
            Hd(-o[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          t0 &&
            (l = Jd.getComputedStyle(t)).strokeLinecap !== l.strokeLinejoin &&
            ((o = l0(l.strokeMiterlimit)),
            this.add(t.style, "strokeMiterlimit", o, o + 0.01)),
          (this._live = Ud(t) || ~(e + "").indexOf("live")),
          (this._nowrap = ~(e + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          1
        );
      },
      render: function (t, e) {
        if (e.tween._time || !i0()) {
          var n,
            r,
            i,
            o = e._pt,
            s = e._style;
          if (o) {
            for (
              e._live &&
              (n = Gd(e._target)) !== e._length &&
              ((r = n / e._length),
              (e._length = n),
              e._offsetPT && ((e._offsetPT.s *= r), (e._offsetPT.c *= r)),
              e._dashPT
                ? ((e._dashPT.s *= r), (e._dashPT.c *= r))
                : (e._dash *= r));
              o;

            )
              o.r(t, o.d), (o = o._next);
            (r = e._dash || (t && 1 !== t && 1e-4) || 0),
              (n = e._length - r + 0.1),
              (i = e._offset),
              r &&
                i &&
                r + Math.abs(i % e._length) > e._length - 0.05 &&
                (i += i < 0 ? 0.005 : -0.005) &&
                (n += 0.005),
              (s.strokeDashoffset = r ? i : i + 0.001),
              (s.strokeDasharray =
                n < 0.1
                  ? "none"
                  : r
                  ? r + "px," + (e._nowrap ? 999999 : n) + "px"
                  : "0px, 999999px");
          }
        } else e.styles.revert();
      },
      getLength: Gd,
      getPosition: Kd,
    };
  Yd() && $d.registerPlugin(c0);
  function h0() {
    return (
      g0 ||
      ("undefined" != typeof window &&
        (g0 = window.gsap) &&
        g0.registerPlugin &&
        g0)
    );
  }
  function p0(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function f0(t) {
    (g0 = t || h0()),
      m0 ||
        ((v0 = g0.utils.getUnit),
        (_0 = g0.core.getStyleSaver),
        (D0 = g0.core.reverting || function () {}),
        (m0 = 1));
  }
  function d0(t, e, n, r, i) {
    var o = t._gsap,
      s = o.get(t, e);
    (this.p = e),
      (this.set = o.set(t, e)),
      (this.s = this.val = parseFloat(s)),
      (this.u = v0(s) || 0),
      (this.vel = n || 0),
      (this.v = this.vel / i),
      r || 0 === r
        ? ((this.acc = r), (this.a = this.acc / (i * i)))
        : (this.acc = this.a = 0);
  }
  var g0,
    m0,
    v0,
    _0,
    D0,
    y0 = Math.PI / 180,
    x0 = {
      version: "3.13.0",
      name: "physics2D",
      register: f0,
      init: function (t, e, n) {
        m0 || f0();
        var r = this,
          i = +e.angle || 0,
          o = +e.velocity || 0,
          s = +e.acceleration || 0,
          a = e.xProp || "x",
          l = e.yProp || "y",
          u =
            e.accelerationAngle || 0 === e.accelerationAngle
              ? +e.accelerationAngle
              : i;
        (r.styles =
          _0 &&
          _0(
            t,
            e.xProp && "x" !== e.xProp ? e.xProp + "," + e.yProp : "transform"
          )),
          (r.target = t),
          (r.tween = n),
          (r.step = 0),
          (r.sps = 30),
          e.gravity && ((s = +e.gravity), (u = 90)),
          (i *= y0),
          (u *= y0),
          (r.fr = 1 - (+e.friction || 0)),
          r._props.push(a, l),
          (r.xp = new d0(t, a, Math.cos(i) * o, Math.cos(u) * s, r.sps)),
          (r.yp = new d0(t, l, Math.sin(i) * o, Math.sin(u) * s, r.sps)),
          (r.skipX = r.skipY = 0);
      },
      render: function (t, e) {
        var n,
          r,
          i,
          o = e.xp,
          s = e.yp,
          a = e.tween,
          l = e.target,
          u = e.step,
          c = e.sps,
          h = e.fr,
          p = e.skipX,
          f = e.skipY,
          d = a._from ? a._dur - a._time : a._time;
        if (a._time || !D0()) {
          if (1 === h)
            (n = o.s + o.vel * d + o.acc * (a = d * d * 0.5)),
              (r = s.s + s.vel * d + s.acc * a);
          else {
            for (
              a = i = (0 | (d *= c)) - u,
                i < 0 &&
                  ((o.v = o.vel / c),
                  (s.v = s.vel / c),
                  (o.val = o.s),
                  (s.val = s.s),
                  (a = i = (e.step = 0) | d)),
                u = (d % 1) * h;
              i--;

            )
              (o.v += o.a),
                (s.v += s.a),
                (o.v *= h),
                (s.v *= h),
                (o.val += o.v),
                (s.val += s.v);
            (n = o.val + o.v * u), (r = s.val + s.v * u), (e.step += a);
          }
          p || o.set(l, o.p, p0(n) + o.u), f || s.set(l, s.p, p0(r) + s.u);
        } else e.styles.revert();
      },
      kill: function (t) {
        this.xp.p === t && (this.skipX = 1),
          this.yp.p === t && (this.skipY = 1);
      },
    };
  h0() && g0.registerPlugin(x0);
  function b0() {
    return (
      T0 ||
      ("undefined" != typeof window &&
        (T0 = window.gsap) &&
        T0.registerPlugin &&
        T0)
    );
  }
  function w0(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function C0(t) {
    (T0 = t || b0()),
      P0 ||
        ((F0 = T0.utils.getUnit),
        (S0 = T0.core.getStyleSaver),
        (M0 = T0.core.reverting || function () {}),
        (P0 = 1));
  }
  function E0(t, e, n, r, i, o) {
    var s = t._gsap,
      a = s.get(t, e);
    (this.p = e),
      (this.set = s.set(t, e)),
      (this.s = this.val = parseFloat(a)),
      (this.u = F0(a) || 0),
      (this.vel = n || 0),
      (this.v = this.vel / o),
      r || 0 === r
        ? ((this.acc = r), (this.a = this.acc / (o * o)))
        : (this.acc = this.a = 0),
      (this.fr = 1 - (i || 0));
  }
  var T0,
    P0,
    F0,
    S0,
    M0,
    A0 = {
      version: "3.13.0",
      name: "physicsProps",
      register: C0,
      init: function (t, e, n) {
        P0 || C0();
        var r,
          i = this;
        for (r in ((i.styles = S0 && S0(t)),
        (i.target = t),
        (i.tween = n),
        (i.step = 0),
        (i.sps = 30),
        (i.vProps = []),
        e)) {
          var o = e[r],
            s = o.velocity,
            a = o.acceleration,
            o = o.friction;
          (s || a) &&
            (i.vProps.push(new E0(t, r, s, a, o, i.sps)),
            i._props.push(r),
            S0 && i.styles.save(r),
            o && (i.hasFr = 1));
        }
      },
      render: function (t, e) {
        var n,
          r,
          i,
          o,
          s,
          a = e.vProps,
          l = e.tween,
          u = e.target,
          c = e.step,
          h = e.hasFr,
          p = e.sps,
          f = a.length,
          d = l._from ? l._dur - l._time : l._time;
        if (l._time || !M0())
          if (h) {
            if ((r = (0 | (d *= p)) - c) < 0) {
              for (; f--; ) ((n = a[f]).v = n.vel / p), (n.val = n.s);
              (f = a.length), (r = (e.step = c = 0) | d);
            }
            for (i = d % 1; f--; ) {
              for (n = a[f], o = r; o--; )
                (n.v += n.a), (n.v *= n.fr), (n.val += n.v);
              n.set(u, n.p, w0(n.val + n.v * i * n.fr) + n.u);
            }
            e.step += r;
          } else
            for (s = d * d * 0.5; f--; )
              (n = a[f]).set(u, n.p, w0(n.s + n.vel * d + n.acc * s) + n.u);
        else e.styles.revert();
      },
      kill: function (t) {
        for (var e = this.vProps, n = e.length; n--; )
          e[n].p === t && e.splice(n, 1);
      },
    },
    k0 =
      (b0() && T0.registerPlugin(A0),
      (O0.prototype.grow = function (t) {
        for (var e = 0; e < 20; e++)
          this.sets[e] += X0(t - this.length, this.chars);
        this.length = t;
      }),
      O0);
  function O0(t) {
    (this.chars = Xd(t)), (this.sets = []), (this.length = 50);
    for (var e = 0; e < 20; e++) this.sets[e] = X0(80, this.chars);
  }
  function B0() {
    return (
      L0 ||
      ("undefined" != typeof window &&
        (L0 = window.gsap) &&
        L0.registerPlugin &&
        L0)
    );
  }
  function R0() {
    N0 = L0 = B0();
  }
  var L0,
    N0,
    I0 = /\s+/g,
    X0 = function (t, e) {
      for (var n = e.length, r = ""; -1 < --t; ) r += e[~~(Math.random() * n)];
      return r;
    },
    z0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Y0 = z0.toLowerCase(),
    H0 = {
      upperCase: new k0(z0),
      lowerCase: new k0(Y0),
      upperAndLowerCase: new k0(z0 + Y0),
    },
    z0 = {
      version: "3.13.0",
      name: "scrambleText",
      register: function (t, e, n) {
        (L0 = t), R0();
      },
      init: function (t, e, n, r, i) {
        var o, s, a, l;
        if (
          (N0 || R0(),
          (this.prop =
            "innerHTML" in t
              ? "innerHTML"
              : "textContent" in t
              ? "textContent"
              : 0),
          this.prop)
        )
          return (
            (this.target = t),
            (l =
              (e = "object" != typeof e ? { text: e } : e).text ||
              e.value ||
              ""),
            (a = !1 !== e.trim),
            (o = this),
            (o.delimiter = s = e.delimiter || ""),
            (o.original = Xd(
              Nd(t).replace(I0, " ").split("&nbsp;").join(""),
              s,
              a
            )),
            ("{original}" !== l && !0 !== l && null != l) ||
              (l = o.original.join(s)),
            (o.text = Xd((l || "").replace(I0, " "), s, a)),
            (o.hasClass = !(!e.newClass && !e.oldClass)),
            (o.newClass = e.newClass),
            (o.oldClass = e.oldClass),
            (o.textHasEmoji = (t = "" === s) && !!o.text.emoji),
            (o.charsHaveEmoji = !!e.chars && !!Xd(e.chars).emoji),
            (o.length = (t ? o.original : o.original.join(s)).length),
            (o.lengthDif = (t ? o.text : o.text.join(s)).length - o.length),
            (o.fillChar =
              e.fillChar || (e.chars && ~e.chars.indexOf(" ")) ? "&nbsp;" : ""),
            (o.charSet = l = H0[e.chars || "upperCase"] || new k0(e.chars)),
            (o.speed = 0.05 / (e.speed || 1)),
            (o.prevScrambleTime = 0),
            (o.setIndex = (20 * Math.random()) | 0),
            (a = o.length + Math.max(o.lengthDif, 0)) > l.length && l.grow(a),
            (o.chars = l.sets[o.setIndex]),
            (o.revealDelay = e.revealDelay || 0),
            (o.tweenLength = !1 !== e.tweenLength),
            (o.tween = n),
            (o.rightToLeft = !!e.rightToLeft),
            o._props.push("scrambleText", "text"),
            1
          );
      },
      render: function (t, e) {
        var n,
          r,
          i = e.target,
          o = e.prop,
          s = e.text,
          a = e.delimiter,
          l = e.tween,
          u = e.prevScrambleTime,
          c = e.revealDelay,
          h = e.setIndex,
          p = e.chars,
          f = e.charSet,
          d = e.length,
          g = e.textHasEmoji,
          m = e.charsHaveEmoji,
          v = e.lengthDif,
          _ = e.tweenLength,
          D = e.oldClass,
          y = e.newClass,
          x = e.rightToLeft,
          b = e.fillChar,
          w = e.speed,
          C = e.original,
          E = e.hasClass,
          T = s.length,
          P = l._time,
          u = P - u;
        (t = c
          ? 0 === (P = l._from ? l._dur - P : P)
            ? 0
            : P < c
            ? 1e-6
            : P === l._dur
            ? 1
            : l._ease((P - c) / (l._dur - c))
          : t) < 0
          ? (t = 0)
          : 1 < t && (t = 1),
          (P = ~~((t = x ? 1 - t : t) * T + 0.5)),
          (c = t
            ? ((w < u || u < -w) &&
                ((e.setIndex = h = (h + ((19 * Math.random()) | 0)) % 20),
                (e.chars = f.sets[h]),
                (e.prevScrambleTime += u)),
              p)
            : C.join(a)),
          (w = l._from ? t : 1 - t),
          (f = d + (_ ? (l._from ? w * w * w : 1 - w * w * w) : 1) * v),
          (c = x
            ? 1 !== t || (!l._from && "isFromStart" !== l.data)
              ? ((r = s.slice(P).join(a)),
                (n = m
                  ? Xd(c)
                      .slice(0, (f - (g ? Xd(r) : r).length + 0.5) | 0)
                      .join("")
                  : c.substr(0, (f - (g ? Xd(r) : r).length + 0.5) | 0)),
                r)
              : ((n = ""), C.join(a))
            : ((n = s.slice(0, P).join(a)),
              (h = (g ? Xd(n) : n).length),
              m
                ? Xd(c)
                    .slice(h, (f + 0.5) | 0)
                    .join("")
                : c.substr(h, (f - h + 0.5) | 0))),
          (r = E
            ? ((u = (e = x ? D : y) && 0 != P)
                ? "<span class='" + e + "'>"
                : "") +
              n +
              (u ? "</span>" : "") +
              ((d = (p = x ? y : D) && P !== T)
                ? "<span class='" + p + "'>"
                : "") +
              a +
              c +
              (d ? "</span>" : "")
            : n + a + c),
          (i[o] =
            "&nbsp;" === b && ~r.indexOf("  ")
              ? r.split("  ").join("&nbsp;&nbsp;")
              : r);
      },
    };
  (z0.emojiSafeSplit = Xd), (z0.getText = Nd), B0() && L0.registerPlugin(z0);
  function V0() {
    return (
      W0 ||
      ("undefined" != typeof window &&
        (W0 = window.gsap) &&
        W0.registerPlugin &&
        W0)
    );
  }
  function j0(t, e) {
    q0 || G0(1), (e = e || {});
    for (
      var n,
        r,
        i,
        o,
        s,
        a,
        l = Math.min(0.999, e.strength || 0.7),
        u = l,
        c = (e.squash || 0) / 100,
        h = c,
        p = 1 / 0.03,
        f = 0.2,
        d = 1,
        g = 0.1,
        m = [0, 0, 0.07, 0, 0.1, 1, 0.1, 1],
        v = [0, 0, 0, 0, 0.1, 0, 0.1, 0],
        _ = 0;
      _ < 200 &&
      ((s = g + (f *= u * ((u + 1) / 2))),
      (o = 1 - (d *= l * l)),
      (r = (i = g + 0.49 * f) + 0.8 * (i - (n = g + d / p))),
      c &&
        ((n += c),
        (i += c),
        (r += c),
        v.push(
          (g += c) - c,
          0,
          g - c,
          (a = c / h),
          g - c / 2,
          a,
          g,
          a,
          g,
          0,
          g,
          0,
          g,
          -0.6 * a,
          g + ((s += c) - g) / 6,
          0,
          s,
          0
        ),
        m.push(g - c, 1, g, 1, g, 1),
        (c *= l * l)),
      m.push(g, 1, n, o, i, o, r, o, s, 1, s, 1),
      (l *= 0.95),
      (p = d / (s - r)),
      (g = s),
      !(0.999 < o));
      _++
    );
    if (e.endAtStart && "false" !== e.endAtStart) {
      if ((m.unshift((i = -0.1), 1, i, 1, -0.07, 0), h))
        for (
          m.unshift((i -= c = 2.5 * h), 1, i, 1, i, 1),
            v.splice(0, 6),
            v.unshift(
              i,
              0,
              i,
              0,
              i,
              1,
              i + c / 2,
              1,
              i + c,
              1,
              i + c,
              0,
              i + c,
              0,
              i + c,
              -0.6,
              i + c + 0.033,
              0
            ),
            _ = 0;
          _ < v.length;
          _ += 2
        )
          v[_] -= i;
      for (_ = 0; _ < m.length; _ += 2) (m[_] -= i), (m[_ + 1] = 1 - m[_ + 1]);
    }
    return (
      c &&
        (K0(v),
        (v[2] = "C" + v[2]),
        U0(e.squashID || t + "-squash", "M" + v.join(","))),
      K0(m),
      (m[2] = "C" + m[2]),
      U0(t, "M" + m.join(","))
    );
  }
  var W0,
    q0,
    U0,
    G0 = function (t) {
      (W0 = V0()),
        (U0 = W0 && W0.parseEase("_CE"))
          ? ((q0 = 1),
            (W0.parseEase("bounce").config = function (t) {
              return "object" == typeof t
                ? j0("", t)
                : j0("bounce(" + t + ")", { strength: +t });
            }))
          : t &&
            console.warn(
              "Please gsap.registerPlugin(CustomEase, CustomBounce)"
            );
    },
    K0 = function (t) {
      for (var e = t.length, n = 1 / t[e - 2], r = 2; r < e; r += 2)
        t[r] = ~~(t[r] * n * 1e3) / 1e3;
      t[e - 2] = 1;
    },
    Y0 =
      ((Z0.create = j0),
      (Z0.register = function (t) {
        (W0 = t), G0();
      }),
      Z0);
  function Z0(t, e) {
    this.ease = j0(t, e);
  }
  V0() && W0.registerPlugin(Y0), (Y0.version = "3.13.0");
  function $0() {
    return (
      J0 ||
      ("undefined" != typeof window &&
        (J0 = window.gsap) &&
        J0.registerPlugin &&
        J0)
    );
  }
  function Q0(t, e) {
    tg || ig(1);
    var n,
      r,
      i,
      o,
      s,
      a,
      l,
      u,
      c = 0 | ((e = e || {}).wiggles || 10),
      h = 1 / c,
      p = h / 2,
      f = "anticipate" === e.type,
      d = ng[e.type] || ng.easeOut,
      g = rg;
    if (
      (f && ((g = d), (d = ng.easeOut)),
      e.timingEase && (g = og(e.timingEase)),
      e.amplitudeEase && (d = og(e.amplitudeEase, !0)),
      (l = [0, 0, (s = g(p)) / 4, 0, s / 2, (a = f ? -d(p) : d(p)), s, a]),
      "random" === e.type)
    ) {
      for (l.length = 4, n = g(h), r = 2 * Math.random() - 1, u = 2; u < c; u++)
        (p = n),
          (a = r),
          (n = g(h * u)),
          (r = 2 * Math.random() - 1),
          (o = Math.atan2(r - l[l.length - 3], n - l[l.length - 4])),
          (i = Math.cos(o) * h),
          (o = Math.sin(o) * h),
          l.push(p - i, a - o, p, a, p + i, a + o);
      l.push(n, 0, 1, 0);
    } else {
      for (u = 1; u < c; u++)
        l.push(g(p + h / 2), a),
          (p += h),
          (a = (0 < a ? -1 : 1) * d(u * h)),
          (s = g(p)),
          l.push(g(p - h / 2), a, s, a);
      l.push(g(p + h / 4), a, g(p + h / 4), 0, 1, 0);
    }
    for (u = l.length; -1 < --u; ) l[u] = ~~(1e3 * l[u]) / 1e3;
    return (l[2] = "C" + l[2]), eg(t, "M" + l.join(","));
  }
  var J0,
    tg,
    eg,
    ng = {
      easeOut: "M0,1,C0.7,1,0.6,0,1,0",
      easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
      anticipate:
        "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
      uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0",
    },
    rg = function (t) {
      return t;
    },
    ig = function (t) {
      if (!tg)
        if (((J0 = $0()), (eg = J0 && J0.parseEase("_CE")))) {
          for (var e in ng) ng[e] = eg("", ng[e]);
          (tg = 1),
            (Q0("wiggle").config = function (t) {
              return "object" == typeof t
                ? Q0("", t)
                : Q0("wiggle(" + t + ")", { wiggles: +t });
            });
        } else
          t &&
            console.warn(
              "Please gsap.registerPlugin(CustomEase, CustomWiggle)"
            );
    },
    og = function (e, t) {
      return (e = "function" != typeof e ? J0.parseEase(e) || eg("", e) : e)
        .custom || !t
        ? e
        : function (t) {
            return 1 - e(t);
          };
    },
    sg =
      ((ag.create = Q0),
      (ag.register = function (t) {
        (J0 = t), ig();
      }),
      ag);
  function ag(t, e) {
    this.ease = Q0(t, e);
  }
  $0() && J0.registerPlugin(sg), (sg.version = "3.13.0");
  function lg() {
    yg.selection
      ? yg.selection.empty()
      : bg.getSelection && bg.getSelection().removeAllRanges();
  }
  function ug(t, e) {
    for (var n = [], r = 0, i = mt.core.Tween, o = t._first; o; )
      o instanceof i
        ? o.vars.id && (n[r++] = o)
        : (e && o.vars.id && (n[r++] = o),
          (r = (n = n.concat(ug(o, e))).length)),
        (o = o._next);
    return n;
  }
  function cg(t, e) {
    var n = 0,
      r = Math.max(0, t._repeat),
      i = t._first;
    for (i || (n = t.duration()); i; )
      (n = Math.max(
        n,
        999 < i.totalDuration() ? i.endTime(!1) : i._start + i._tDur / i._ts
      )),
        (i = i._next);
    return !e && r ? n * (r + 1) + t._rDelay * r : n;
  }
  function hg(t, e, n, r) {
    var i;
    return (
      Lg(t) &&
        ("=" === t.charAt(1)
          ? (t =
              ((r =
                (i =
                  parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))) <
                  0 && 0 === r
                  ? 100
                  : r) /
                100) *
                e.duration() +
              i)
          : isNaN(t) && e.labels && -1 !== e.labels[t]
          ? (t = e.labels[t])
          : e === vt &&
            (0 < (r = t.indexOf("="))
              ? ((i =
                  parseInt(t.charAt(r - 1) + "1", 10) *
                  parseFloat(t.substr(r + 1))),
                (t = t.substr(0, r - 1)))
              : (i = 0),
            (r = mt.getById(t)) && (t = qg(r, (n / 100) * r.duration()) + i))),
      (t = isNaN(t) ? n : parseFloat(t)),
      Math.min(100, Math.max(0, (t / e.duration()) * 100))
    );
  }
  function pg(e, t, n, r) {
    var i, o;
    if (
      (("mousedown" !== t && "mouseup" !== t) || (e.style.cursor = "pointer"),
      "mousedown" === t &&
        (o = Xg(e.onpointerdown)
          ? Xg(e.ontouchstart)
            ? null
            : "touchstart"
          : "pointerdown"))
    )
      return (
        e.addEventListener(
          o,
          (i = function (t) {
            "select" !== t.target.nodeName.toLowerCase() && t.type === o
              ? (t.stopPropagation(), Ug && (t.preventDefault(), n.call(e, t)))
              : t.type !== o && n.call(e, t),
              (Ug = !0);
          }),
          r
        ),
        "pointerdown" !== o && e.addEventListener(t, i, r)
      );
    e.addEventListener(t, n, r);
  }
  function fg(t, e, n) {
    t.removeEventListener(e, n),
      (e =
        "mousedown" !== e
          ? null
          : Xg(t.onpointerdown)
          ? Xg(t.ontouchstart)
            ? null
            : "touchstart"
          : "pointerdown") && t.removeEventListener(e, n);
  }
  function dg(t, e, n, r) {
    var i,
      o = t.options,
      s = o.length;
    for (e += ""; -1 < --s; )
      if (o[s].innerHTML === e || o[s].value === e)
        return (t.selectedIndex = s), (n.innerHTML = o[s].innerHTML), o[s];
    r &&
      ((i = Wg("option", t)).setAttribute("value", e),
      (i.innerHTML = n.innerHTML = Lg(r) ? r : e),
      (t.selectedIndex = o.length - 1));
  }
  function gg(t, e, n) {
    var r = t.options,
      e = Math.min(r.length - 1, Math.max(0, t.selectedIndex + e));
    return (
      (t.selectedIndex = e), n && (n.innerHTML = r[e].innerHTML), r[e].value
    );
  }
  function mg(t) {
    return mt.getById(t) || Fg.getById(t) || (t === vt.vars.id && vt);
  }
  function vg(t) {
    (mt = t || Rg()),
      Dg ||
        (mt &&
          Bg() &&
          ((yg = document),
          (xg = yg.documentElement),
          (bg = window),
          (Mg = mt.core.context || function () {}),
          mt.registerPlugin(il),
          ((Pg = mt.globalTimeline)._sort = !0),
          (Pg.autoRemoveChildren = !1),
          (wg = mt.core.Animation),
          (Fg = mt.timeline({
            data: "indy",
            autoRemoveChildren: !0,
            smoothChildTiming: !0,
          })).kill(),
          (Fg._dp = 0),
          Fg.to({}, { duration: 1e12 }),
          (vt = mt.timeline(
            {
              data: "root",
              id: "Global Timeline",
              autoRemoveChildren: !1,
              smoothChildTiming: !0,
              parent: Fg,
            },
            0
          )),
          (Cg = mt.to(
            vt,
            {
              duration: 1,
              time: 1,
              ease: "none",
              data: "root",
              id: "_rootTween",
              paused: !0,
              immediateRender: !1,
              parent: Fg,
            },
            0
          )),
          (Pg.killTweensOf = function (t, e, n) {
            vt.killTweensOf(t, e, n), vt.killTweensOf.call(Pg, t, e, n);
          }),
          (Fg._start = mt.ticker.time),
          mt.ticker.add(function (t) {
            return Fg.render(t - Fg._start);
          }),
          (Pg._start += Pg._time),
          (vt._start = Pg._time = Pg._tTime = 0),
          (Sg = function (t, e, n, r) {
            return mt.to(
              e,
              {
                delay: t,
                duration: 0,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: r,
                parent: Fg,
              },
              Fg._time
            );
          })(0.01, function () {
            return Eg ? Eg.update() : Gg();
          }),
          Sg(2, function () {
            var t, e, n;
            if (!Eg)
              for (Gg(), t = vt._first, n = vt._start; t; )
                (e = t._next),
                  t._tDur !== t._tTime || (!t._dur && 1 !== t.progress())
                    ? Pg.add(t, t._start - t._delay + n)
                    : t.kill(),
                  (t = e);
            2 < Kg.globalRecordingTime
              ? Sg(Kg.globalRecordingTime - 2, function () {
                  Eg && Eg.update(), (Pg.autoRemoveChildren = !0);
                })
              : (Pg.autoRemoveChildren = !0),
              (kg = !1);
          }),
          (Dg = 1)));
  }
  function _g(t, e) {
    e.globalSync || t.parent === Pg || Pg.add(t, Pg.time());
  }
  var mt,
    Dg,
    yg,
    xg,
    bg,
    vt,
    wg,
    Cg,
    Eg,
    Tg,
    Pg,
    Fg,
    Sg,
    Mg,
    Ag,
    kg = !0,
    Og = 0,
    Bg = function () {
      return "undefined" != typeof window;
    },
    Rg = function () {
      return mt || (Bg() && (mt = window.gsap) && mt.registerPlugin && mt);
    },
    Lg = function (t) {
      return "string" == typeof t;
    },
    Ng = function (t) {
      return "function" == typeof t;
    },
    Ig = function (t) {
      return "object" == typeof t;
    },
    Xg = function (t) {
      return void 0 === t;
    },
    zg = "http://www.w3.org/2000/svg",
    Yg = "http://www.w3.org/1999/xhtml",
    Hg = 0,
    Vg = {},
    jg = (function () {
      try {
        return (
          sessionStorage.setItem("gsTest", "1"),
          sessionStorage.removeItem("gsTest"),
          !0
        );
      } catch (t) {
        return !1;
      }
    })(),
    Wg = function (t, e, n) {
      var r = yg.createElementNS
        ? yg.createElementNS("svg" === t ? zg : Yg, t)
        : yg.createElement(t);
      return (
        e && (e = Lg(e) ? yg.querySelector(e) : e).appendChild(r),
        "svg" === t &&
          (r.setAttribute("xmlns", zg), r.setAttribute("xmlns:xlink", Yg)),
        n && (r.style.cssText = n),
        r
      );
    },
    qg = function (t, e) {
      for (var n = t, r = 1 < arguments.length ? +e : n.rawTime(); n; )
        (r = n._start + r / (n._ts || 1)), (n = n.parent);
      return r;
    },
    Ug = !0,
    Gg = function () {
      var t,
        e,
        n,
        r = Pg._first;
      if (Eg) {
        for (t = vt._dur; r; )
          (e = r._next),
            (n = r._targets && r._targets[0]),
            (Ng(n) && n === r.vars.onComplete && !r._dur) ||
              (n && n._gsIgnore) ||
              vt.add(r, r._start - r._delay),
            (r = e);
        return t !== vt.duration();
      }
    },
    Kg = function L(o) {
      Dg ||
        (vg(), mt || console.warn("Please gsap.registerPlugin(GSDevTools)")),
        (this.vars = o = o || {}),
        o.animation &&
          (
            L.getByAnimation(o.animation) || {
              kill: function () {
                return 0;
              },
            }
          ).kill(),
        (o.id = o.id || (Lg(o.animation) ? o.animation : Hg++)),
        (Vg[o.id + ""] = this),
        "globalSync" in o || (o.globalSync = !o.animation);
      function t(t) {
        return m.querySelector(t);
      }
      function N(a, l, u) {
        return function (t) {
          var e,
            n = Z.getBoundingClientRect(),
            r = a.getBoundingClientRect(),
            i = r.width * l,
            o = mt.getProperty(a, "x"),
            s = n.left - r.left - i + o,
            r = n.right - r.right + (r.width - i) + o,
            i = s;
          u &&
            (a !== x &&
              (e = x.getBoundingClientRect()).left &&
              (s += e.left + e.width - n.left),
            a !== b &&
              (e = b.getBoundingClientRect()).left &&
              (r -= n.left + n.width - e.left)),
            (W = P),
            this.applyBounds({ minX: s, maxX: r }),
            (c = f.duration() / n.width),
            (h = -i * c),
            p ? f.pause() : f.pause(h + c * this.x),
            this.target === D &&
              (this.activated && (this.allowEventDefault = !1),
              (this.activated = !0)),
            (j = !0);
        };
      }
      function I() {
        (w = 0),
          (C = 100),
          (x.style.left = "0%"),
          (b.style.left = "100%"),
          v("in", w),
          v("out", C),
          k(!0);
      }
      function X(t) {
        var e;
        if (!A.isPressed)
          return (
            (e = t.target.getBoundingClientRect()),
            (e =
              (((t.changedTouches ? t.changedTouches[0] : t).clientX - e.left) /
                e.width) *
              100) < w
              ? ((w = e = Math.max(0, e)),
                (x.style.left = w + "%"),
                void rt.startDrag(t))
              : C < e
              ? ((C = e = Math.min(100, e)),
                (b.style.left = C + "%"),
                void it.startDrag(t))
              : (f.progress(e / 100).pause(), k(!0), void A.startDrag(t))
          );
      }
      function z(t) {
        ct(E.options[E.selectedIndex].animation),
          t.target && t.target.blur && t.target.blur(),
          P && O();
      }
      function Y(t) {
        var e,
          n = parseFloat(S.options[S.selectedIndex].value) || 1;
        f.timeScale(n),
          v("timeScale", n),
          P ||
            (f.progress() >= C / 100
              ? ((e = f._targets && f._targets[0]) === r &&
                  e.seek(i + ((a - i) * w) / 100),
                f.progress(w / 100, !0).pause())
              : f.pause(),
            Sg(0.01, function () {
              return f.resume();
            })),
          (M.innerHTML = n + "x"),
          S.blur && S.blur();
      }
      function H(t) {
        il.hitTest(t, m) ||
          A.isDragging ||
          rt.isDragging ||
          it.isDragging ||
          gt.restart(!0);
      }
      function V(t) {
        kg && !Og && (Og = vt._start),
          (q = !t),
          (t = o.animation),
          (s = t instanceof wg ? t : t ? mt.getById(t) : null) &&
            !s.vars.id &&
            (s.vars.id = "[no id]"),
          Gg(),
          ut();
        (t = mg(_("animation"))) &&
          ((t._inProgress = _("in") || 0), (t._outProgress = _("out") || 100)),
          o.paused && ot(),
          (r = null),
          ct(s || t || vt);
        var e = o.timeScale || _("timeScale"),
          n = t === r;
        e && (dg(S, e, M, e + "x"), f.timeScale(e)),
          100 ===
            (w =
              ("inTime" in o ? hg(o.inTime, r, 0, 0) : n ? t._inProgress : 0) ||
              0) &&
            !o.animation &&
            t &&
            (ct(vt), (w = hg(o.inTime, r, 0, 0) || 0)),
          w &&
            ((x.style.left = w + "%"),
            (x.style.display = b.style.display = "block")),
          100 !==
            (C =
              (C =
                ("outTime" in o
                  ? hg(o.outTime, r, 100, w)
                  : n
                  ? t._outProgress
                  : 0) || 100) < w
                ? 100
                : C) &&
            ((b.style.left = C + "%"),
            (x.style.display = b.style.display = "block")),
          (l = "loop" in o ? o.loop : _("loop")) && at(!0),
          o.paused && f.progress(w / 100, !0).pause(),
          kg && r === vt && Og && o.globalSync && !P && f.time(-Og, !0),
          k(!0);
      }
      var c,
        h,
        j,
        p,
        W,
        r,
        f,
        s,
        i,
        a,
        q,
        U,
        l,
        G,
        K,
        e,
        n,
        u,
        d,
        g = this,
        m =
          ((e = o.container),
          (n = o.minimal),
          (u = o.css),
          Ag ||
            ((Wg("style", xg).innerHTML =
              ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,avenir next,sans-serif;color:#bbbaa6}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;gap:1rem;background-color:#0e100f;height:42px;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;position:absolute;top:0;left:-15px;right:-15px}.gs-dev-tools .timeline-track{background-color:#222}.gs-dev-tools .progress-bar{background:linear-gradient(114.41deg,#0ae448 20.74%,#abff84 65.5%);height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#0ae448;transform:translateX(1px)}.gs-dev-tools .out-point-shape{fill:#ff8709}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;background:linear-gradient(114.41deg,#0ae448 20.74%,#abff84 65.5%)}.gs-dev-tools .gs-btn-white{fill:#fffce1}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:currentcolor;stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:14px}.gs-dev-tools .ease-border,.gs-dev-tools .rewind-path{fill:currentColor}.gs-dev-tools .play-pause{width:18px;height:18px}.gs-dev-tools .ease{width:20px;height:20px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:#abff84;stroke-width:2px}.gs-dev-tools .time-scale{text-align:center;min-width:30px}.gs-dev-tools .loop{width:15px}.gs-dev-tools label span{text-decoration:none}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:#000}.gs-dev-tools.minimal .gs-bottom{background-color:#0e100f;border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .gs-bottom-right,.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point,.gs-dev-tools.minimal .rewind,.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:#000;height:42px}.gs-dev-tools .gs-bottom{background-color:#000;border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .gs-bottom-right,.gs-dev-tools .in-point,.gs-dev-tools .out-point,.gs-dev-tools .rewind,.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .play-pause{width:18px;height:18px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{right:0}}"),
            (Ag = !0)),
          Lg(e) && (e = yg.querySelector(e)),
          (d = Wg(
            "div",
            e || xg.getElementsByTagName("body")[0] || xg
          )).setAttribute("class", "gs-dev-tools" + (n ? " minimal" : "")),
          (d.innerHTML =
            '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><path class=in-point-shape d="M0.5,2.283c0,-0.985 0.798,-1.783 1.783,-1.783c2.679,0 7.717,0 10.41,0c0.48,-0 0.939,0.19 1.278,0.529c0.339,0.339 0.529,0.798 0.529,1.277c-0,4.821 -0,17.897 0,21.968c0,0.253 -0.135,0.488 -0.354,0.615c-0.22,0.128 -0.49,0.128 -0.711,0.003c-2.653,-1.517 -9.526,-5.444 -12.016,-6.867c-0.568,-0.325 -0.919,-0.929 -0.919,-1.583c-0,-2.835 -0,-10.627 -0,-14.159Z" style="fill:#00ff52;fill-rule:nonzero;"/></svg><svg class=out-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><path class=out-point-shape d="M0.5,2.251c0,-0.465 0.184,-0.91 0.513,-1.238c0.328,-0.329 0.773,-0.513 1.238,-0.513c2.669,0 7.733,0 10.439,0c0.48,-0 0.94,0.191 1.28,0.53c0.339,0.34 0.53,0.8 0.53,1.28l0,14.17c-0,0.631 -0.338,1.213 -0.886,1.526c-2.44,1.395 -9.262,5.293 -11.977,6.845c-0.236,0.134 -0.524,0.133 -0.759,-0.003c-0.234,-0.136 -0.378,-0.386 -0.378,-0.657c0,-4.178 0,-17.198 0,-21.94Z" style="fill-rule:nonzero;"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span><svg class=select-arrow viewBox="0 0 12.05 6.73" xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38" xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg><svg class=play-pause viewBox="0 0 20.97 25.67" xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88" class="gs-btn-white play-1" style=stroke:#fffce1;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85" class="gs-btn-white play-2" style=stroke:#fffce1;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38" xmlns=http://www.w3.org/2000/svg fill="currentcolor"><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67" xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://gsap.com/docs/v3/Plugins/GSDevTools?source=GSDevTools" target=_blank title=Docs><svg class="logo" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M793 518.654C793 518.654 793 518.829 793 518.934L770.197 618.386C768.967 624.012 763.38 628.135 756.915 628.135H729.404C727.366 628.135 725.539 629.498 724.977 631.455C699.573 718.082 665.175 777.628 619.745 813.376C581.095 843.813 533.451 858 469.819 858C412.618 858 374.074 839.514 341.362 803.032C298.145 754.809 280.261 675.869 291.083 580.75C310.618 402.184 402.745 222.01 580.217 222.01C634.185 221.521 676.559 238.26 706.039 271.667C737.204 306.995 753.05 360.216 753.121 429.86C753.015 436.185 747.78 441.287 741.491 441.287H611.488C606.885 441.287 602.774 437.129 602.844 432.551C601.79 384.397 587.56 360.915 559.311 360.915C509.488 360.915 480.079 428.917 464.479 466.622C442.694 519.283 431.627 576.452 433.805 633.412C434.824 659.935 439.075 697.22 464.127 712.666C486.333 726.364 518.026 717.279 537.21 702.113C556.394 686.947 571.819 660.703 578.319 636.766C579.233 633.447 579.303 630.861 578.425 629.708C577.511 628.52 574.981 628.24 573.049 628.24H539.67C536.086 628.24 532.537 626.598 530.394 623.942C528.602 621.705 527.899 618.945 528.532 616.219L551.37 516.592C552.494 511.49 557.097 507.647 562.754 506.948V506.703H781.827C782.354 506.703 782.881 506.703 783.373 506.808C789.065 507.542 793.07 512.853 792.965 518.654H793Z" fill="#0AE448"/></svg></a></div></div>'),
          e &&
            ((d.style.position = "absolute"),
            (d.style.top = n ? "calc(100% - 42px)" : "calc(100% - 51px)")),
          u &&
            (Lg(u)
              ? (d.style.cssText = u)
              : Ig(u) && ((u.data = "root"), mt.set(d, u).kill()),
            d.style.top && (d.style.bottom = "auto"),
            d.style.width &&
              mt
                .set(d, {
                  xPercent: -50,
                  left: "50%",
                  right: "auto",
                  data: "root",
                })
                .kill()),
          !n &&
            d.offsetWidth < 600 &&
            (d.setAttribute("class", "gs-dev-tools minimal"),
            e && (d.style.top = "calc(100% - 42px)")),
          d),
        v = function (t, e) {
          return (
            !1 !== o.persist &&
              jg &&
              sessionStorage.setItem("gs-dev-" + t + o.id, e),
            e
          );
        },
        _ = function (t) {
          var e;
          if (!1 !== o.persist && jg)
            return (
              (e = sessionStorage.getItem("gs-dev-" + t + o.id)),
              "animation" === t
                ? e
                : "loop" === t
                ? "true" === e
                : parseFloat(e)
            );
        },
        D = t(".playhead"),
        Z = t(".timeline-track"),
        y = t(".progress-bar"),
        $ = t(".time"),
        Q = t(".duration"),
        J = 0,
        x = t(".in-point"),
        b = t(".out-point"),
        w = 0,
        C = 100,
        E = t(".animation-list"),
        tt = t(".animation-label"),
        T = t(".play-pause"),
        et =
          ((u = T),
          (K = mt.timeline(
            {
              data: "root",
              parent: Fg,
              onComplete: function () {
                return K.kill();
              },
            },
            Fg._time
          ))
            .to(u.querySelector(".play-1"), {
              duration: 0.4,
              attr: {
                d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12",
              },
              ease: "power2.inOut",
              rotation: 360,
              transformOrigin: "50% 50%",
            })
            .to(
              u.querySelector(".play-2"),
              {
                duration: 0.4,
                attr: {
                  d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12",
                },
                ease: "power2.inOut",
                rotation: 360,
                transformOrigin: "50% 50%",
              },
              0.05
            ),
          K),
        P = !1,
        F = t(".loop"),
        nt =
          ((n = F),
          (G = mt.timeline(
            {
              data: "root",
              id: "loop",
              parent: Fg,
              paused: !0,
              onComplete: function () {
                return G.kill();
              },
            },
            Fg._time
          ))
            .to(n, {
              duration: 0.5,
              rotation: 360,
              ease: "power3.inOut",
              transformOrigin: "50% 50%",
            })
            .to(
              n.querySelectorAll(".loop-path"),
              { duration: 0.5, fill: "#91e600", ease: "none" },
              0
            ),
          G),
        S = t(".time-scale select"),
        M = t(".time-scale-label"),
        A = il.create(D, {
          type: "x",
          cursor: "ew-resize",
          allowNativeTouchScrolling: !1,
          allowEventDefault: !0,
          onPress: N(D, 0.5, !0),
          onDrag: function () {
            var t = h + c * this.x;
            t < 0 ? (t = 0) : t > f._dur && (t = f._dur),
              p || f.time(t),
              (y.style.width =
                Math.min(C - w, Math.max(0, (t / f._dur) * 100 - w)) + "%"),
              ($.innerHTML = t.toFixed(2));
          },
          onRelease: function () {
            P || f.resume();
          },
        })[0],
        rt = il.create(x, {
          type: "x",
          cursor: "ew-resize",
          zIndexBoost: !1,
          allowNativeTouchScrolling: !1,
          allowEventDefault: !0,
          onPress: N(x, 1, !0),
          onDoubleClick: I,
          onDrag: function () {
            (w = ((h + c * this.x) / f.duration()) * 100),
              f.progress(w / 100),
              k(!0);
          },
          onRelease: function () {
            w < 0 && (w = 0),
              lg(),
              (x.style.left = w + "%"),
              v("in", w),
              mt.set(x, { x: 0, data: "root", display: "block" }),
              P || f.resume();
          },
        })[0],
        it = il.create(b, {
          type: "x",
          cursor: "ew-resize",
          allowNativeTouchScrolling: !1,
          allowEventDefault: !0,
          zIndexBoost: !1,
          onPress: N(b, 0, !0),
          onDoubleClick: I,
          onDrag: function () {
            (C = ((h + c * this.x) / f.duration()) * 100),
              f.progress(C / 100),
              k(!0);
          },
          onRelease: function () {
            100 < C && (C = 100),
              lg(),
              (b.style.left = C + "%"),
              v("out", C),
              mt.set(b, { x: 0, data: "root", display: "block" }),
              W || (O(), f.resume());
          },
        })[0],
        k = function (t) {
          var e, n;
          (A.isPressed && !0 !== t) ||
            ((e =
              l || -1 !== r._repeat
                ? 100 * f.progress() || 0
                : (r.totalTime() / r.duration()) * 100),
            (n =
              r._repeat &&
              r._rDelay &&
              r.totalTime() % (r.duration() + r._rDelay) > r.duration()),
            C <= (e = 100 < e ? 100 : e)
              ? !l || f.paused() || A.isDragging
                ? ((e === C && -1 !== r._repeat) ||
                    ((e = C), f.progress(e / 100)),
                  !P &&
                    (C < 100 || 1 === r.totalProgress() || -1 === r._repeat) &&
                    ot())
                : n ||
                  ((e = w),
                  (n = f._targets && f._targets[0]) === r &&
                    n.seek(i + ((a - i) * w) / 100),
                  0 < r._repeat && !w && 100 === C
                    ? 1 === r.totalProgress() && f.totalProgress(0, !0).resume()
                    : f.progress(e / 100, !0).resume())
              : e < w && ((e = w), f.progress(e / 100, !0)),
            (e === J && !0 !== t) ||
              ((y.style.left = w + "%"),
              (y.style.width = Math.max(0, e - w) + "%"),
              (D.style.left = e + "%"),
              ($.innerHTML = f._time.toFixed(2)),
              (Q.innerHTML = f._dur.toFixed(2)),
              j &&
                ((D.style.transform = "translate(-50%,0)"),
                (D._gsap.x = "0px"),
                (D._gsap.xPercent = -50),
                (j = !1)),
              (J = e)),
            f.paused() !== P && B());
        },
        O = function () {
          var t;
          f.progress() >= C / 100 &&
            (_g(f, o),
            (t = f._targets && f._targets[0]) === r &&
              t.seek(i + ((a - i) * w) / 100),
            f._repeat && !w
              ? f.totalProgress(0, !0)
              : f.reversed() || f.progress(w / 100, !0)),
            et.play(),
            f.resume(),
            P && g.update(),
            (P = !1);
        },
        ot = function () {
          et.reverse(), f && f.pause(), (P = !0);
        },
        B = function () {
          (P ? O : ot)();
        },
        st = function (t) {
          var e;
          A.isPressed ||
            (_g(f, o),
            (e = f._targets && f._targets[0]) === r &&
              e.seek(i + ((a - i) * w) / 100),
            f.progress(w / 100, !0),
            P || f.resume());
        },
        at = function (t) {
          v("loop", (l = t)),
            l
              ? (nt.play(),
                f.progress() >= C / 100 &&
                  ((t = f._targets && f._targets[0]) === r &&
                    t.seek(i + ((a - i) * w) / 100),
                  r._repeat && !w && 100 === C
                    ? f.totalProgress(0, !0)
                    : f.progress(w / 100, !0),
                  O()))
              : nt.reverse();
        },
        lt = function () {
          return at(!l);
        },
        ut = function () {
          var t,
            e,
            n = ug(s && !o.globalSync ? s : vt, !0),
            r = E.children,
            i = 0;
          for (
            s && !o.globalSync
              ? n.unshift(s)
              : o.hideGlobalTimeline || n.unshift(vt),
              e = 0;
            e < n.length;
            e++
          )
            ((t = r[e] || Wg("option", E)).animation = n[e]),
              (i = e && n[e].vars.id === n[e - 1].vars.id ? i + 1 : 0),
              t.setAttribute(
                "value",
                (t.innerHTML =
                  n[e].vars.id +
                  (i
                    ? " [" + i + "]"
                    : n[e + 1] && n[e + 1].vars.id === n[e].vars.id
                    ? " [0]"
                    : ""))
              );
          for (; e < r.length; e++) E.removeChild(r[e]);
        },
        ct = function (t) {
          var e,
            n = parseFloat(S.options[S.selectedIndex].value) || 1;
          if (!arguments.length) return r;
          if (
            ((t = Lg(t) ? mg(t) : t) instanceof wg ||
              console.warn("GSDevTools error: invalid animation."),
            t.scrollTrigger &&
              console.warn(
                "GSDevTools can't work with ScrollTrigger-based animations; either the scrollbar -OR- the GSDevTools scrubber can control the animation."
              ),
            t !== r)
          ) {
            if (
              (r && ((r._inProgress = w), (r._outProgress = C)),
              (r = t),
              f &&
                ((n = f.timeScale()),
                f._targets && f._targets[0] === s && (s.resume(), f.kill())),
              (w = r._inProgress || 0),
              (C = r._outProgress || 100),
              (x.style.left = w + "%"),
              (b.style.left = C + "%"),
              q && (v("animation", r.vars.id), v("in", w), v("out", C)),
              (i = 0),
              (t = o.maxDuration || Math.min(1e3, cg(r))),
              r === vt || o.globalSync)
            ) {
              if (
                (Gg(),
                (f = Cg),
                Eg &&
                  Eg !== g &&
                  console.warn(
                    "Error: GSDevTools can only have one instance that's globally synchronized."
                  ),
                (Eg = g),
                r !== vt)
              )
                for (
                  99999999 < (a = (e = r).totalDuration()) &&
                  (a = e.duration());
                  e.parent;

                )
                  (i = i / e._ts + e._start),
                    (a = a / e._ts + e._start),
                    (e = e.parent);
              else a = vt.duration();
              t < a - i && (a = i + t),
                vt.pause(i),
                (Cg.vars.time = a),
                Cg.invalidate(),
                Cg.duration(a - i).timeScale(n),
                P
                  ? Cg.progress(1, !0).pause(0, !0)
                  : Sg(0.01, function () {
                      Cg.resume().progress(w / 100), P && O();
                    });
            } else {
              if (
                (Eg === g && (Eg = null),
                (i = Math.min(w * r.duration(), r.time())),
                r !== s && s)
              ) {
                for (
                  99999999 < (a = (e = r).totalDuration()) &&
                  (a = e.duration());
                  e.parent.parent && e !== s;

                )
                  (i = i / (e._ts || e._pauseTS) + e._start),
                    (a = a / (e._ts || e._pauseTS) + e._start),
                    (e = e.parent);
                t < a - i && (a = i + t),
                  s.pause(i),
                  (f = mt.to(
                    s,
                    {
                      duration: a - i,
                      time: a,
                      ease: "none",
                      data: "root",
                      parent: Fg,
                    },
                    Fg._time
                  ));
              } else (f = r), !l && f._repeat && at(!0);
              f.timeScale(n), Cg.pause(), vt.resume(), f.seek(0);
            }
            (Q.innerHTML = f.duration().toFixed(2)), dg(E, r.vars.id, tt);
          }
        },
        ht = mt.to(
          [t(".gs-bottom"), t(".gs-top")],
          {
            duration: 0.3,
            autoAlpha: 0,
            y: 50,
            ease: "power2.in",
            data: "root",
            paused: !0,
            parent: Fg,
          },
          Fg._time
        ),
        R = !1,
        pt = function () {
          R || (ht.play(), gt.pause(), (R = !0));
        },
        ft = function () {
          gt.pause(), R && (ht.reverse(), (R = !1));
        },
        dt = function () {
          (R ? ft : pt)();
        },
        gt = Sg(1.3, pt).pause();
      pg(E, "change", z),
        pg(E, "mousedown", ut),
        pg(T, "mousedown", B),
        pg(t(".seek-bar"), "mousedown", X),
        pg(t(".rewind"), "mousedown", st),
        pg(F, "mousedown", lt),
        pg(S, "change", Y),
        "auto" === o.visibility
          ? (pg(m, "mouseout", H), pg(m, "mouseover", ft))
          : "hidden" === o.visibility && ((R = !0), ht.progress(1)),
        !1 !== o.keyboard &&
          (Tg && o.keyboard
            ? console.warn(
                "[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active."
              )
            : ((Tg = g),
              pg(
                xg,
                "keydown",
                (U = function (t) {
                  var e,
                    t = t.keyCode || t.which;
                  32 === t
                    ? B()
                    : 38 === t
                    ? ((e = parseFloat(gg(S, -1, M))),
                      f.timeScale(e),
                      v("timeScale", e))
                    : 40 === t
                    ? ((e = parseFloat(gg(S, 1, M))),
                      f.timeScale(e),
                      v("timeScale", e))
                    : 37 === t
                    ? st()
                    : 39 === t
                    ? f.progress(C / 100)
                    : 76 === t
                    ? lt()
                    : 72 === t
                    ? dt()
                    : 73 === t
                    ? ((w = 100 * f.progress()),
                      v("in", w),
                      (x.style.left = w + "%"),
                      k(!0))
                    : 79 === t &&
                      ((C = 100 * f.progress()),
                      v("out", C),
                      (b.style.left = C + "%"),
                      k(!0));
                })
              ))),
        mt.set(D, { xPercent: -50, x: 0, data: "root" }),
        mt.set(x, { xPercent: -100, x: 0, data: "root" }),
        (x._gsIgnore =
          b._gsIgnore =
          D._gsIgnore =
          T._gsIgnore =
          F._gsIgnore =
            !0),
        mt.killTweensOf([x, b, D]),
        V(kg),
        kg && Sg(1e-4, V, [!1], this),
        mt.ticker.add(k),
        (this.update = function (t) {
          var e, n;
          Eg === g &&
            ((Cg.paused() && !t) || Gg(),
            r === vt &&
              ((t = vt._time),
              vt.progress(1, !0).time(t, !0),
              (t = (Cg._dp._time - Cg._start) * Cg._ts),
              1e3 === (n = Math.min(1e3, vt.duration())) &&
                (n = Math.min(1e3, cg(vt))),
              1 != (e = Cg.duration() / n) &&
                n &&
                ((w *= e),
                C < 100 && (C *= e),
                Cg.seek(0),
                (Cg.vars.time = n),
                Cg.invalidate(),
                Cg.duration(n),
                Cg.time(t),
                (Q.innerHTML = n.toFixed(2)),
                (x.style.left = w + "%"),
                (b.style.left = C + "%"),
                k(!0))));
        }),
        (this.kill = this.revert =
          function () {
            fg(E, "change", z),
              fg(E, "mousedown", ut),
              fg(T, "mousedown", B),
              fg(t(".seek-bar"), "mousedown", X),
              fg(t(".rewind"), "mousedown", st),
              fg(F, "mousedown", lt),
              fg(S, "change", Y),
              A.disable(),
              rt.disable(),
              it.disable(),
              mt.ticker.remove(k),
              fg(m, "mouseout", H),
              fg(m, "mouseover", ft),
              m.parentNode.removeChild(m),
              Eg === g && (Eg = null),
              Tg === g && ((Tg = null), fg(xg, "keydown", U)),
              delete Vg[o.id + ""];
          }),
        (this.minimal = function (t) {
          var e = m.classList.contains("minimal");
          if (!arguments.length || e === t) return e;
          t ? m.classList.add("minimal") : m.classList.remove("minimal"),
            o.container &&
              (m.style.top = t ? "calc(100% - 42px)" : "calc(100% - 51px)"),
            A.isPressed &&
              ((p = !0),
              A.endDrag(A.pointerEvent),
              (p = !1),
              (e = 100 * f.progress()),
              (y.style.width = Math.max(0, e - w) + "%"),
              (D.style.left = e + "%"),
              (D.style.transform = "translate(-50%,0)"),
              (D._gsap.x = "0px"),
              (D._gsap.xPercent = -50),
              A.startDrag(A.pointerEvent, !0));
        }),
        (this.animation = ct),
        (this.updateList = ut),
        Mg(this);
    };
  (Kg.version = "3.13.0"),
    (Kg.globalRecordingTime = 2),
    (Kg.getById = function (t) {
      return t ? Vg[t] : Eg;
    }),
    (Kg.getByAnimation = function (t) {
      for (var e in (Lg(t) && (t = mt.getById(t)), Vg))
        if (Vg[e].animation() === t) return Vg[e];
    }),
    (Kg.create = function (t) {
      return new Kg(t);
    }),
    (Kg.register = vg),
    Rg() && mt.registerPlugin(Kg);
  function Zg(t) {
    return l1(t).id;
  }
  function $g(t) {
    return c1[Zg("string" == typeof t ? r1(t)[0] : t)];
  }
  function Qg(t) {
    var e,
      n = o1;
    if (0.05 <= t - a1)
      for (a1 = t; n; )
        ((e = n.g(n.t, n.p)) !== n.v1 || 0.2 < t - n.t1) &&
          ((n.v2 = n.v1), (n.v1 = e), (n.t2 = n.t1), (n.t1 = t)),
          (n = n._next);
  }
  function Jg() {
    (e1 = u1()) &&
      ((r1 = e1.utils.toArray),
      (i1 = e1.utils.getUnit),
      (l1 = e1.core.getCache),
      (s1 = e1.ticker),
      (n1 = 1));
  }
  function t1(t, e, n, r) {
    (this.t = t),
      (this.p = e),
      (this.g = t._gsap.get),
      (this.rCap = h1[n || i1(this.g(t, e))]),
      (this.v1 = this.v2 = 0),
      (this.t1 = this.t2 = s1.time),
      r && ((this._next = r)._prev = this);
  }
  var e1,
    n1,
    r1,
    i1,
    o1,
    s1,
    a1,
    l1,
    u1 = function () {
      return e1 || ("undefined" != typeof window && (e1 = window.gsap));
    },
    c1 = {},
    h1 = { deg: 360, rad: 2 * Math.PI },
    p1 =
      ((f1.register = function (t) {
        (e1 = t), Jg();
      }),
      ((n = f1.prototype).get = function (t, e) {
        var t =
            this._props[t] || console.warn("Not tracking " + t + " velocity."),
          n = parseFloat(e ? t.v1 : t.g(t.t, t.p)) - parseFloat(t.v2),
          r = t.rCap;
        return (
          r && (n %= r) !== n % (r / 2) && (n = n < 0 ? n + r : n - r),
          (r = n / ((e ? t.t1 : s1.time) - t.t2)),
          Math.round(1e4 * r) / 1e4
        );
      }),
      (n.getAll = function () {
        var t,
          e = {};
        for (t in this._props) e[t] = this.get(t);
        return e;
      }),
      (n.isTracking = function (t) {
        return t in this._props;
      }),
      (n.add = function (t, e) {
        t in this._props ||
          (o1 || (s1.add(Qg), (a1 = s1.time)),
          (o1 = this._props[t] = new t1(this.target, t, e, o1)));
      }),
      (n.remove = function (t) {
        var e,
          n,
          r = this._props[t];
        r &&
          ((e = r._prev),
          (n = r._next),
          e && (e._next = n),
          n ? (n._prev = e) : o1 === r && (s1.remove(Qg), (o1 = 0)),
          delete this._props[t]);
      }),
      (n.kill = function (t) {
        for (var e in this._props) this.remove(e);
        t || delete c1[Zg(this.target)];
      }),
      (f1.track = function (t, e, n) {
        n1 || Jg();
        for (
          var r,
            i,
            o = [],
            s = r1(t),
            a = e.split(","),
            l = (n || "").split(","),
            u = s.length;
          u--;

        ) {
          for (r = $g(s[u]) || new f1(s[u]), i = a.length; i--; )
            r.add(a[i], l[i] || l[0]);
          o.push(r);
        }
        return o;
      }),
      (f1.untrack = function (t, e) {
        var n = (e || "").split(",");
        r1(t).forEach(function (t) {
          var e = $g(t);
          e &&
            (n.length
              ? n.forEach(function (t) {
                  return e.remove(t);
                })
              : e.kill(1));
        });
      }),
      (f1.isTracking = function (t, e) {
        t = $g(t);
        return t && t.isTracking(e);
      }),
      (f1.getVelocity = function (t, e) {
        t = $g(t);
        return t && t.isTracking(e)
          ? t.get(e)
          : console.warn("Not tracking velocity of " + e);
      }),
      f1);
  function f1(t, e) {
    n1 || Jg(),
      (this.target = r1(t)[0]),
      ((c1[Zg(this.target)] = this)._props = {}),
      e && this.add(e);
  }
  (p1.getByTarget = $g), u1() && e1.registerPlugin(p1);
  function d1() {
    return (
      x1 ||
      ("undefined" != typeof window &&
        (x1 = window.gsap) &&
        x1.registerPlugin &&
        x1)
    );
  }
  function g1(t) {
    return t;
  }
  function m1(t) {
    var e,
      n,
      r = {};
    for (e in t) r[e] = N1((n = t[e])) && !X1(n) ? m1(n) : n;
    return r;
  }
  function v1(t, e, n, r, i, o, s) {
    if ("auto" === t.end) return t;
    var a,
      l,
      u = t.end;
    if (((n = isNaN(n) ? z1 : n), (r = isNaN(r) ? -z1 : r), N1(e))) {
      if (
        ((a = (!e.calculated && (I1(u) ? u(e, s) : V1(e, u, n, r, o))) || e),
        !e.calculated)
      ) {
        for (l in a) e[l] = a[l];
        e.calculated = !0;
      }
      a = a[i];
    } else a = I1(u) ? u(e, s) : X1(u) ? V1(e, u, n, r, o) : parseFloat(u);
    return (
      n < a ? (a = n) : a < r && (a = r),
      { max: a, min: a, unitFactor: t.unitFactor }
    );
  }
  function _1(t, e, n) {
    return Math.abs(((e - t) * M1) / n / H1);
  }
  function D1(t, e, n, r) {
    if (e.linkedProps) {
      for (
        var i, o, s, a, l = e.linkedProps.split(","), u = {}, c = 0;
        c < l.length;
        c++
      )
        (a = e[(i = l[c])]) &&
          ((o = L1(a.velocity)
            ? a.velocity
            : (s = s || R1(t)) && s.isTracking(i)
            ? s.get(i)
            : 0),
          (a = Math.abs(o / j1(a, "resistance", r))),
          (u[i] = parseFloat(n(t, i)) + W1(o, a)));
      return u;
    }
  }
  function y1() {
    (x1 = d1()) &&
      ((w1 = x1.parseEase),
      (C1 = x1.utils.toArray),
      (P1 = x1.utils.getUnit),
      (S1 = x1.core.getCache),
      (A1 = x1.utils.clamp),
      (O1 = x1.core.getStyleSaver),
      (B1 = x1.core.reverting || function () {}),
      (E1 = w1("power3")),
      (M1 = E1(0.05)),
      (F1 = x1.core.PropTween),
      x1.config({
        resistance: 100,
        unitFactors: {
          time: 1e3,
          totalTime: 1e3,
          progress: 1e3,
          totalProgress: 1e3,
        },
      }),
      (T1 = x1.config()),
      x1.registerPlugin(p1),
      (b1 = 1));
  }
  var x1,
    b1,
    w1,
    C1,
    E1,
    T1,
    P1,
    F1,
    S1,
    M1,
    A1,
    k1,
    O1,
    B1,
    R1 = p1.getByTarget,
    L1 = function (t) {
      return "number" == typeof t;
    },
    N1 = function (t) {
      return "object" == typeof t;
    },
    I1 = function (t) {
      return "function" == typeof t;
    },
    X1 = Array.isArray,
    z1 = 1e10,
    Y1 = 1 / z1,
    H1 = 0.05,
    V1 = function (t, e, n, r, i) {
      var o,
        s,
        a,
        l,
        u = e.length,
        c = 0,
        h = z1;
      if (N1(t)) {
        for (; u--; ) {
          for (a in ((o = e[u]), (s = 0), t)) s += (l = o[a] - t[a]) * l;
          s < h && ((c = u), (h = s));
        }
        if ((i || z1) < z1 && i < Math.sqrt(h)) return t;
      } else
        for (; u--; )
          (s = (s = (o = e[u]) - t) < 0 ? -s : s) < h &&
            r <= o &&
            o <= n &&
            ((c = u), (h = s));
      return e[c];
    },
    j1 = function (t, e, n) {
      return isNaN(t[e]) ? n : +t[e];
    },
    W1 = function (t, e) {
      return (e * H1 * t) / M1;
    },
    q1 = {
      resistance: 1,
      checkpoint: 1,
      preventOvershoot: 1,
      linkedProps: 1,
      radius: 1,
      duration: 1,
    },
    U1 = {
      version: "3.13.0",
      name: "inertia",
      register: function (t) {
        (x1 = t), y1();
      },
      init: function (t, e, n, r, i) {
        b1 || y1();
        var o = R1(t);
        if ("auto" === e) {
          if (!o)
            return void console.warn(
              "No inertia tracking on " +
                t +
                ". InertiaPlugin.track(target) first."
            );
          e = o.getAll();
        }
        (this.styles = O1 && "object" == typeof t.style && O1(t)),
          (this.target = t),
          (this.tween = n),
          (k1 = e);
        var s,
          a,
          l,
          u,
          c,
          h,
          p,
          f,
          d,
          g = t._gsap,
          m = g.get,
          v = e.duration,
          _ = N1(v),
          D = e.preventOvershoot || (_ && 0 === v.overshoot),
          y = j1(e, "resistance", T1.resistance),
          x = L1(v)
            ? v
            : (function (t, e, n, r, i, o) {
                if (
                  (void 0 === n && (n = 10),
                  void 0 === r && (r = 0.2),
                  void 0 === i && (i = 1),
                  void 0 === o && (o = 0),
                  !(t = "string" == typeof t ? C1(t)[0] : t))
                )
                  return 0;
                var s,
                  a,
                  l,
                  u,
                  c,
                  h,
                  p,
                  f,
                  d,
                  g = 0,
                  m = z1,
                  v = e.inertia || e,
                  _ = S1(t).get,
                  D = j1(v, "resistance", T1.resistance),
                  y = D1(t, v, _, D);
                for (s in v)
                  q1[s] ||
                    ((a = v[s]),
                    N1(a) ||
                      ((f = f || R1(t)) && f.isTracking(s)
                        ? (a = L1(a) ? { velocity: a } : { velocity: f.get(s) })
                        : ((u = +a || 0), (l = Math.abs(u / D)))),
                    N1(a) &&
                      ((u = L1(a.velocity)
                        ? a.velocity
                        : (f = f || R1(t)) && f.isTracking(s)
                        ? f.get(s)
                        : 0),
                      (l = A1(r, n, Math.abs(u / j1(a, "resistance", D)))),
                      (h = (c = parseFloat(_(t, s)) || 0) + W1(u, l)),
                      "end" in a &&
                        ((a = v1(
                          a,
                          y && s in y ? y : h,
                          a.max,
                          a.min,
                          s,
                          v.radius,
                          u
                        )),
                        o &&
                          (k1 === e && (k1 = v = m1(e)),
                          (v[s] = (function (t, e, n) {
                            for (var r in e) r in t || r === n || (t[r] = e[r]);
                            return t;
                          })(a, v[s], "end")))),
                      "max" in a && h > +a.max + Y1
                        ? ((d = a.unitFactor || T1.unitFactors[s] || 1),
                          (p =
                            (c > a.max && a.min !== a.max) ||
                            (-15 < u * d && u * d < 45)
                              ? r + 0.1 * (n - r)
                              : _1(c, a.max, u)) +
                            i <
                            m && (m = p + i))
                        : "min" in a &&
                          h < +a.min - Y1 &&
                          ((d = a.unitFactor || T1.unitFactors[s] || 1),
                          (p =
                            (c < a.min && a.min !== a.max) ||
                            (-45 < u * d && u * d < 15)
                              ? r + 0.1 * (n - r)
                              : _1(c, a.min, u)) +
                            i <
                            m && (m = p + i)),
                      g < p && (g = p)),
                    g < l && (g = l));
                return n < (g = m < g ? m : g) ? n : g < r ? r : g;
              })(
                t,
                e,
                (_ && v.max) || 10,
                (_ && v.min) || 0.2,
                _ && "overshoot" in v ? +v.overshoot : D ? 0 : 1,
                !0
              );
        for (s in ((e = k1), (k1 = 0), (d = D1(t, e, m, y)), e))
          q1[s] ||
            ((a = e[s]),
            I1(a) && (a = a(r, t, i)),
            L1(a)
              ? (c = a)
              : N1(a) && !isNaN(a.velocity)
              ? (c = +a.velocity)
              : o && o.isTracking(s)
              ? (c = o.get(s))
              : console.warn(
                  "ERROR: No velocity was defined for " + t + " property: " + s
                ),
            (h = W1(c, x)),
            (f = 0),
            (l = m(t, s)),
            (u = P1(l)),
            (l = parseFloat(l)),
            N1(a) &&
              ((p = l + h),
              "max" in
                (a =
                  "end" in a
                    ? v1(a, d && s in d ? d : p, a.max, a.min, s, e.radius, c)
                    : a) && +a.max < p
                ? D || a.preventOvershoot
                  ? (h = a.max - l)
                  : (f = a.max - l - h)
                : "min" in a &&
                  +a.min > p &&
                  (D || a.preventOvershoot
                    ? (h = a.min - l)
                    : (f = a.min - l - h))),
            this._props.push(s),
            this.styles && this.styles.save(s),
            (this._pt = new F1(this._pt, t, s, l, 0, g1, 0, g.set(t, s, this))),
            (this._pt.u = u || 0),
            (this._pt.c1 = h),
            (this._pt.c2 = f));
        return n.duration(x), 1;
      },
      render: function (t, e) {
        var n,
          r = e._pt;
        if ((t = E1(e.tween._time / e.tween._dur)) || !B1())
          for (; r; )
            r.set(
              r.t,
              r.p,
              ((n = r.s + r.c1 * t + r.c2 * t * t),
              Math.round(1e4 * n) / 1e4 + r.u),
              r.d,
              t
            ),
              (r = r._next);
        else e.styles.revert();
      },
    };
  "track,untrack,isTracking,getVelocity,getByTarget"
    .split(",")
    .forEach(function (t) {
      return (U1[t] = p1[t]);
    }),
    d1() && x1.registerPlugin(U1);
  function G1() {
    return (
      xm ||
      ("undefined" != typeof window &&
        (xm = window.gsap) &&
        xm.registerPlugin &&
        xm)
    );
  }
  function K1(t) {
    return "function" == typeof t;
  }
  function Z1(t) {
    console && console.warn(t);
  }
  function $1(t, e) {
    for (
      var n,
        r,
        i,
        o,
        s,
        a,
        l,
        u,
        c,
        h,
        p,
        f,
        d,
        g,
        m,
        v = t.length,
        _ = t[0][0],
        D = _,
        y = t[0][1],
        x = y,
        b = 1 / (e = void 0 === e ? 3 : e);
      -1 < --v;

    )
      for (n = (o = t[v]).length, i = 6; i < n; i += 6)
        for (
          u = o[i],
            c = o[i + 1],
            h = o[i + 2] - u,
            d = o[i + 3] - c,
            p = o[i + 4] - u,
            g = o[i + 5] - c,
            f = o[i + 6] - u,
            m = o[i + 7] - c,
            s = e;
          -1 < --s;

        )
          _ <
          (r =
            ((a = b * s) * a * f + 3 * (l = 1 - a) * (a * p + l * h)) * a + u)
            ? (_ = r)
            : r < D && (D = r),
            y < (r = (a * a * m + 3 * l * (a * g + l * d)) * a + c)
              ? (y = r)
              : r < x && (x = r);
    return (
      (t.centerX = (_ + D) / 2),
      (t.centerY = (y + x) / 2),
      (t.left = D),
      (t.width = _ - D),
      (t.top = x),
      (t.height = y - x),
      (t.size = (_ - D) * (y - x))
    );
  }
  function Q1(t, e) {
    return e.length - t.length;
  }
  function J1(t, e) {
    var n = t.size || Jm(t),
      r = e.size || Jm(e);
    return Math.abs(r - n) < (n + r) / 20
      ? e.centerX - t.centerX || e.centerY - t.centerY
      : r - n;
  }
  function tm(t, e) {
    var n,
      r,
      i = t.slice(0),
      o = t.length,
      s = o - 2;
    for (e |= 0, n = 0; n < o; n++)
      (r = (n + e) % s), (t[n++] = i[r]), (t[n] = i[1 + r]);
  }
  function em(t, e) {
    for (
      var n,
        r,
        i,
        o,
        s,
        a,
        l,
        u,
        c,
        h,
        p,
        f,
        d,
        g = 0,
        m = t.length,
        v = e / ((m - 2) / 6),
        _ = 2;
      _ < m;
      _ += 6
    )
      for (g += v; 0.999999 < g; )
        (n = t[_ - 2]),
          (r = t[_ - 1]),
          (i = t[_]),
          (o = t[_ + 1]),
          (s = t[_ + 2]),
          (a = t[_ + 3]),
          (l = t[_ + 4]),
          (u = t[_ + 5]),
          (c = n + (i - n) * (d = 1 / ((Math.floor(g) || 1) + 1))),
          (c += ((p = i + (s - i) * d) - c) * d),
          (h = r + (o - r) * d),
          (h += ((f = o + (a - o) * d) - h) * d),
          t.splice(
            _,
            4,
            n + (i - n) * d,
            r + (o - r) * d,
            c,
            h,
            c + ((p += (s + (l - s) * d - p) * d) - c) * d,
            h + ((f += (a + (u - a) * d - f) * d) - h) * d,
            p,
            f,
            s + (l - s) * d,
            a + (u - a) * d
          ),
          (_ += 6),
          (m += 6),
          g--;
  }
  function nm(t, e, n, r, i) {
    var o,
      s,
      a,
      l,
      u,
      c,
      h = e.length - t.length,
      p = 0 < h ? e : t,
      f = 0 < h ? t : e,
      d = 0,
      g = "complexity" === r ? Q1 : J1,
      m = "position" === r ? 0 : "number" == typeof r ? r : 0.8,
      v = f.length,
      _ = "object" == typeof n && n.push ? n.slice(0) : [n],
      D = "reverse" === _[0] || _[0] < 0,
      r = "log" === n;
    if (f[0]) {
      if (
        1 < p.length &&
        (t.sort(g),
        e.sort(g),
        p.size || $1(p),
        f.size || $1(f),
        (u = p.centerX - f.centerX),
        (c = p.centerY - f.centerY),
        g === J1)
      )
        for (v = 0; v < f.length; v++)
          p.splice(
            v,
            0,
            (function (t, e, n, r, i, o) {
              for (
                var s,
                  a,
                  l,
                  u = e.length,
                  c = 0,
                  h = Math.min(t.size || Jm(t), e[n].size || Jm(e[n])) * r,
                  p = Gm,
                  f = t.centerX + i,
                  d = t.centerY + o,
                  g = n;
                g < u && !((e[g].size || Jm(e[g])) < h);
                g++
              )
                (s = e[g].centerX - f),
                  (a = e[g].centerY - d),
                  (l = Vm(s * s + a * a)) < p && ((c = g), (p = l));
              return (l = e[c]), e.splice(c, 1), l;
            })(f[v], p, v, m, u, c)
          );
      if (h)
        for (
          h < 0 && (h = -h),
            p[0].length > f[0].length &&
              em(f[0], ((p[0].length - f[0].length) / 6) | 0),
            v = f.length;
          d < h;

        )
          p[v].size || Jm(p[v]),
            (a = (l = (function (t, e, n) {
              for (
                var r, i, o, s, a, l = t.length, u = Gm, c = 0, h = 0;
                -1 < --l;

              )
                for (a = (r = t[l]).length, s = 0; s < a; s += 6)
                  (o = r[s] - e),
                    (i = r[s + 1] - n),
                    (o = Vm(o * o + i * i)) < u &&
                      ((u = o), (c = r[s]), (h = r[s + 1]));
              return [c, h];
            })(f, p[v].centerX, p[v].centerY))[0]),
            (l = l[1]),
            (f[v++] = [a, l, a, l, a, l, a, l]),
            (f.totalPoints += 8),
            d++;
      for (v = 0; v < t.length; v++)
        (o = e[v]),
          (s = t[v]),
          (h = o.length - s.length) < 0
            ? em(o, (-h / 6) | 0)
            : 0 < h && em(s, (h / 6) | 0),
          D && !1 !== i && !s.reversed && No(s),
          (n = _[v] || 0 === _[v] ? _[v] : "auto") &&
            (s.closed ||
            (Math.abs(s[0] - s[s.length - 2]) < 0.5 &&
              Math.abs(s[1] - s[s.length - 1]) < 0.5)
              ? "auto" === n || "log" === n
                ? ((_[v] = n =
                    (function (t, e, n) {
                      for (
                        var r,
                          i,
                          o = t.length,
                          s = Qm(t),
                          a = Qm(e),
                          l = a[0] - s[0],
                          u = a[1] - s[1],
                          c = tv(t, e, 0, l, u),
                          h = 0,
                          p = 6;
                        p < o;
                        p += 6
                      )
                        (i = tv(t, e, p / 6, l, u)) < c && ((c = i), (h = p));
                      if (n)
                        for (No((r = t.slice(0))), p = 6; p < o; p += 6)
                          (i = tv(r, e, p / 6, l, u)) < c &&
                            ((c = i), (h = -p));
                      return h / 6;
                    })(s, o, !v || !1 === i)),
                  n < 0 && ((D = !0), No(s), (n = -n)),
                  tm(s, 6 * n))
                : "reverse" !== n &&
                  (v && n < 0 && No(s), tm(s, 6 * (n < 0 ? -n : n)))
              : !D &&
                (("auto" === n &&
                  Math.abs(o[0] - s[0]) +
                    Math.abs(o[1] - s[1]) +
                    Math.abs(o[o.length - 2] - s[s.length - 2]) +
                    Math.abs(o[o.length - 1] - s[s.length - 1]) >
                    Math.abs(o[0] - s[s.length - 2]) +
                      Math.abs(o[1] - s[s.length - 1]) +
                      Math.abs(o[o.length - 2] - s[0]) +
                      Math.abs(o[o.length - 1] - s[1])) ||
                  n % 2)
              ? (No(s), (_[v] = -1), (D = !0))
              : "auto" === n
              ? (_[v] = 0)
              : "reverse" === n && (_[v] = -1),
            s.closed !== o.closed && (s.closed = o.closed = !1));
      return r && Z1("shapeIndex:[" + _.join(",") + "]"), (t.shapeIndex = _);
    }
  }
  function rm(t, e, n, r, i) {
    var o = Uo(t[0]),
      s = Uo(t[1]);
    nm(o, s, e || 0 === e ? e : "auto", n, i) &&
      ((t[0] = ts(o)),
      (t[1] = ts(s)),
      ("log" !== r && !0 !== r) ||
        Z1('precompile:["' + t[0] + '","' + t[1] + '"]'));
  }
  function im(t) {
    var e = t[0].match(Km) || [],
      n = t[1].match(Km) || [],
      r = n.length - e.length;
    0 < r ? (t[0] = ev(e, r)) : (t[1] = ev(n, -r));
  }
  function om(e) {
    return isNaN(e)
      ? im
      : function (t) {
          im(t),
            (t[1] = (function (t, e) {
              if (!e) return t;
              for (
                var n,
                  r = t.match(Km) || [],
                  i = r.length,
                  o = "",
                  s =
                    "reverse" === e
                      ? ((n = i - 1), -2)
                      : ((n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * i) % i),
                        2),
                  a = 0;
                a < i;
                a += 2
              )
                (o += r[n - 1] + "," + r[n] + " "), (n = (n + s) % i);
              return o;
            })(t[1], parseInt(e, 10)));
        };
  }
  function sm(t, e) {
    for (
      var n, r, i, o, s, a, l, u, c, h, p, f, d = t.length, g = 0.2 * (e || 1);
      -1 < --d;

    ) {
      for (
        p = (r = t[d]).isSmooth = r.isSmooth || [0, 0, 0, 0],
          f = r.smoothData = r.smoothData || [0, 0, 0, 0],
          p.length = 4,
          u = r.length - 2,
          l = 6;
        l < u;
        l += 6
      )
        (i = r[l] - r[l - 2]),
          (o = r[l + 1] - r[l - 1]),
          (s = r[l + 2] - r[l]),
          (a = r[l + 3] - r[l + 1]),
          (c = zm(o, i)),
          (h = zm(a, s)),
          (n = Math.abs(c - h) < g) &&
            ((f[l - 2] = c),
            (f[l + 2] = h),
            (f[l - 1] = Vm(i * i + o * o)),
            (f[l + 3] = Vm(s * s + a * a))),
          p.push(n, n, 0, 0, n, n);
      r[u] === r[0] &&
        r[1 + u] === r[1] &&
        ((i = r[0] - r[u - 2]),
        (o = r[1] - r[u - 1]),
        (s = r[2] - r[0]),
        (a = r[3] - r[1]),
        (c = zm(o, i)),
        (h = zm(a, s)),
        Math.abs(c - h) < g &&
          ((f[u - 2] = c),
          (f[2] = h),
          (f[u - 1] = Vm(i * i + o * o)),
          (f[3] = Vm(s * s + a * a)),
          (p[u - 2] = p[u - 1] = !0)));
    }
    return t;
  }
  function am(t) {
    var e = t.trim().split(" ");
    return {
      x:
        (~t.indexOf("left")
          ? 0
          : ~t.indexOf("right")
          ? 100
          : isNaN(parseFloat(e[0]))
          ? 50
          : parseFloat(e[0])) / 100,
      y:
        (~t.indexOf("top")
          ? 0
          : ~t.indexOf("bottom")
          ? 100
          : isNaN(parseFloat(e[1]))
          ? 50
          : parseFloat(e[1])) / 100,
    };
  }
  function lm(t, e, n, r) {
    var i = this._origin,
      o = this._eOrigin,
      s = t[n] - i.x,
      i = t[n + 1] - i.y,
      a = Vm(s * s + i * i),
      l = zm(i, s),
      s = e[n] - o.x,
      i = e[n + 1] - o.y,
      e = zm(i, s) - l,
      o = nv(e);
    return (
      !r && wm && Math.abs(o + wm.ca) < qm && (r = wm),
      (this._anchorPT = wm =
        {
          _next: this._anchorPT,
          t: t,
          sa: l,
          ca: r && o * r.ca < 0 && Math.abs(o) > Um ? e : o,
          sl: a,
          cl: Vm(s * s + i * i) - a,
          i: n,
        })
    );
  }
  function um(t) {
    (xm = G1()),
      (Em = Em || (xm && xm.plugins.morphSVG)),
      xm && Em
        ? ((bm = xm.utils.toArray),
          (Em.prototype._tweenRotation = lm),
          (Cm = 1))
        : t && Z1("Please gsap.registerPlugin(MorphSVGPlugin)");
  }
  function cm(t, e, n) {
    var r,
      i = f.createElementNS("http://www.w3.org/2000/svg", t),
      o = /([a-z])([A-Z])/g;
    for (r in (((n = n || {}).class = n.class || "path-editor"), n))
      void 0 !== i.style[r]
        ? (i.style[r] = n[r])
        : i.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), n[r]);
    return e.appendChild(i), i;
  }
  function hm(t) {
    return ((t.transform && t.transform.baseVal.consolidate()) || Dv).matrix;
  }
  function pm(t) {
    (bv = t.touches && _dragCount < t.touches.length),
      Cv(t.target, "touchend", pm);
  }
  function fm(e, n) {
    return function (t) {
      return e.call(n, t);
    };
  }
  function dm(t, e, n) {
    (t = e.vars[t]) && t.call(e.vars.callbackScope || e, n || e);
  }
  function gm(t) {
    (f = document),
      (Pm = window),
      (Fm = f.body),
      (Sm =
        Sm ||
        t ||
        Pm.gsap ||
        console.warn("Please gsap.registerPlugin(PathEditor)")),
      (Mm = (Sm && Sm.core.context) || function () {}),
      (Lm = _v("div")),
      ((Im = _v("textarea")).style.display = "none"),
      Fm && Fm.appendChild(Im),
      (Nm = (function (t) {
        for (
          var e = t.split(","),
            n = (
              void 0 !== Lm.onpointerdown
                ? "pointerdown,pointermove,pointerup,pointercancel"
                : void 0 !== Lm.onmspointerdown
                ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                : t
            ).split(","),
            r = {},
            i = 4;
          -1 < --i;

        )
          (r[e[i]] = n[i]), (r[n[i]] = e[i]);
        return r;
      })("touchstart,touchmove,touchend,touchcancel")),
      (SVGElement.prototype.getTransformToElement =
        SVGElement.prototype.getTransformToElement ||
        function (t) {
          return t.getScreenCTM().inverse().multiply(this.getScreenCTM());
        }),
      f.addEventListener(
        "keydown",
        function (t) {
          var e,
            n,
            r,
            i,
            o = t.keyCode || t.which,
            t = t.key || o;
          if ("Shift" === t || 16 === o) Om = !0;
          else if ("Control" === t || 17 === o) Am = !0;
          else if ("Meta" === t || 91 === o) Bm = !0;
          else if ("Alt" === t || 18 === o)
            for (km = !0, e = mv.length; -1 < --e; ) mv[e]._onPressAlt();
          else if (("z" === t || 90 === o) && (Am || Bm) && 1 < fv.length) {
            if ((fv.shift(), (n = fv[0]))) {
              for (
                (i = n.path).path.setAttribute("d", n.d),
                  i.path.setAttribute("transform", n.transform),
                  i.init(),
                  r = i._anchors,
                  e = 0;
                e < r.length;
                e++
              )
                -1 !== n.selectedIndexes.indexOf(r[e].i) &&
                  i._selectedAnchors.push(r[e]);
              i._updateAnchors(),
                i.update(),
                i.vars.onUndo && i.vars.onUndo.call(i);
            }
          } else if (
            "Delete" === t ||
            "Backspace" === t ||
            8 === o ||
            46 === o ||
            63272 === o ||
            ("d" === o && (Am || Bm))
          )
            for (e = mv.length; -1 < --e; ) mv[e]._deleteSelectedAnchors();
          else if (("a" === t || 65 === o) && (Bm || Am))
            for (e = mv.length; -1 < --e; ) mv[e].select(!0);
        },
        !0
      ),
      f.addEventListener(
        "keyup",
        function (t) {
          t = t.key || t.keyCode || t.which;
          if ("Shift" === t || 16 === t) Om = !1;
          else if ("Control" === t || 17 === t) Am = !1;
          else if ("Meta" === t || 91 === t) Bm = !1;
          else if ("Alt" === t || 18 === t) {
            km = !1;
            for (var e = mv.length; -1 < --e; ) mv[e]._onReleaseAlt();
          }
        },
        !0
      ),
      (Tm = !!Pm.PointerEvent),
      wv(f, "mouseup", xv),
      wv(f, "touchend", xv),
      wv(f, "touchcancel", cv),
      wv(Pm, "touchmove", cv),
      Fm && Fm.addEventListener("touchstart", cv),
      (Xm = 1);
  }
  function mm(t) {
    var e,
      n = this,
      r = Et(n.target.parentNode, !0);
    (this._matrix = this.target.transform.baseVal.getItem(0).matrix),
      (this._ctm = r),
      Nm[t.type]
        ? ((e =
            -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : f),
          wv(e, "touchend", n._onRelease),
          wv(e, "touchmove", n._onMove),
          wv(e, "touchcancel", n._onRelease),
          wv(f, "touchstart", Tv),
          wv(Pm, "touchforcechange", vv))
        : ((e = null), wv(f, "mousemove", n._onMove)),
      Tm || wv(f, "mouseup", n._onRelease),
      vv(t),
      Pv(),
      t.changedTouches
        ? ((t = n.touch = t.changedTouches[0]), (n.touchID = t.identifier))
        : t.pointerId
        ? (n.touchID = t.pointerId)
        : (n.touch = n.touchID = null),
      (n._startPointerY = n.pointerY = t.pageY),
      (n._startPointerX = n.pointerX = t.pageX),
      (n._startElementX = n._matrix.e),
      (n._startElementY = n._matrix.f),
      1 === this._ctm.a &&
      0 === this._ctm.b &&
      0 === this._ctm.c &&
      1 === this._ctm.d
        ? (this._ctm = null)
        : ((r =
            n._startPointerX * this._ctm.a +
            n._startPointerY * this._ctm.c +
            this._ctm.e),
          (n._startPointerY =
            n._startPointerX * this._ctm.b +
            n._startPointerY * this._ctm.d +
            this._ctm.f),
          (n._startPointerX = r)),
      (n.isPressed = uv = !0),
      (n.touchEventTarget = e),
      n.vars.onPress &&
        n.vars.onPress.call(n.vars.callbackScope || n, n.pointerEvent);
  }
  function vm(t) {
    var e,
      n,
      r = this,
      i = t;
    if (r._enabled && !bv && r.isPressed && t) {
      if ((e = (r.pointerEvent = t).changedTouches)) {
        if ((t = e[0]) !== r.touch && t.identifier !== r.touchID) {
          for (n = e.length; -1 < --n && (t = e[n]).identifier !== r.touchID; );
          if (n < 0) return;
        }
      } else if (t.pointerId && r.touchID && t.pointerId !== r.touchID) return;
      vv(i),
        r.setPointerPosition(t.pageX, t.pageY),
        r.vars.onDrag &&
          r.vars.onDrag.call(r.vars.callbackScope || r, r.pointerEvent);
    }
  }
  function _m(t, e) {
    var n = this;
    if (
      n._enabled &&
      n.isPressed &&
      (!t ||
        null == n.touchID ||
        e ||
        !(
          (t.pointerId && t.pointerId !== n.touchID) ||
          (t.changedTouches && !Ev(t.changedTouches, n.touchID))
        ))
    ) {
      hv(), (n.isPressed = uv = !1);
      var r,
        i,
        e = t,
        o = n.isDragging,
        s = n.touchEventTarget;
      if (
        (s
          ? (Cv(s, "touchend", n._onRelease),
            Cv(s, "touchmove", n._onMove),
            Cv(s, "touchcancel", n._onRelease),
            Cv(f, "touchstart", Tv))
          : Cv(f, "mousemove", n._onMove),
        Tm ||
          (Cv(f, "mouseup", n._onRelease),
          t && t.target && Cv(t.target, "mouseup", n._onRelease)),
        o
          ? (n.isDragging = !1)
          : n.vars.onClick && n.vars.onClick.call(n.vars.callbackScope || n, e),
        t)
      ) {
        if (
          (r = t.changedTouches) &&
          (t = r[0]) !== n.touch &&
          t.identifier !== n.touchID
        ) {
          for (i = r.length; -1 < --i && (t = r[i]).identifier !== n.touchID; );
          if (i < 0) return;
        }
        (n.pointerEvent = e), (n.pointerX = t.pageX), (n.pointerY = t.pageY);
      }
      return (
        e && !o && n.vars.onDragRelease
          ? n.vars.onDragRelease.call(n, n.pointerEvent)
          : (e && vv(e),
            n.vars.onRelease &&
              n.vars.onRelease.call(n.vars.callbackScope || n, n.pointerEvent)),
        o &&
          n.vars.onDragEnd &&
          n.vars.onDragEnd.call(n.vars.callbackScope || n, n.pointerEvent),
        !0
      );
    }
  }
  function Dm(t, e, n, r) {
    for (
      var i = t[e], o = i.length - (i.closed ? 6 : 0), s = [], a = 0;
      a < o;
      a += 6
    )
      s.push(new Mv(n, t, e, a, r));
    return i.closed && (s[0].isClosedStart = !0), s;
  }
  function ym(t, e, n) {
    var r = t[n] - t[e],
      n = t[n + 1] - t[e + 1];
    return Math.sqrt(r * r + n * n);
  }
  var xm,
    bm,
    wm,
    Cm,
    Em,
    f,
    Tm,
    Pm,
    Fm,
    Sm,
    Mm,
    Am,
    km,
    Om,
    Bm,
    Rm,
    Lm,
    Nm,
    Im,
    Xm,
    zm = Math.atan2,
    Ym = Math.cos,
    Hm = Math.sin,
    Vm = Math.sqrt,
    jm = Math.PI,
    Wm = 2 * jm,
    qm = 0.3 * jm,
    Um = 0.7 * jm,
    Gm = 1e20,
    Km = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Zm = /(^[#\.][a-z]|[a-y][a-z])/i,
    $m = /[achlmqstvz]/i,
    Qm = function (t) {
      for (var e = t.length, n = 0, r = 0, i = 0; i < e; i++)
        (n += t[i++]), (r += t[i]);
      return [n / (e / 2), r / (e / 2)];
    },
    Jm = function (t) {
      for (
        var e, n = t.length, r = t[0], i = r, o = t[1], s = o, a = 6;
        a < n;
        a += 6
      )
        r < (e = t[a]) ? (r = e) : e < i && (i = e),
          o < (e = t[a + 1]) ? (o = e) : e < s && (s = e);
      return (
        (t.centerX = (r + i) / 2),
        (t.centerY = (o + s) / 2),
        (t.size = (r - i) * (o - s))
      );
    },
    tv = function (t, e, n, r, i) {
      var o,
        s,
        a,
        l = t.length,
        u = 0,
        c = l - 2;
      for (n *= 6, o = 0; o < l; o += 6)
        (a = t[(s = (o + n) % c)] - (e[o] - r)),
          (s = t[1 + s] - (e[o + 1] - i)),
          (u += Vm(s * s + a * a));
      return u;
    },
    ev = function (t, e) {
      for (
        var n,
          r,
          i,
          o,
          s = 0,
          a = parseFloat(t[0]),
          l = parseFloat(t[1]),
          u = a + "," + l + " ",
          c = t.length,
          h = (0.5 * e) / (0.5 * c - 1),
          p = 0;
        p < c - 2;
        p += 2
      ) {
        if (
          ((s += h),
          (i = parseFloat(t[p + 2])),
          (o = parseFloat(t[p + 3])),
          0.999999 < s)
        )
          for (r = 1 / (Math.floor(s) + 1), n = 1; 0.999999 < s; )
            (u +=
              (a + (i - a) * r * n).toFixed(2) +
              "," +
              (l + (o - l) * r * n).toFixed(2) +
              " "),
              s--,
              n++;
        (u += i + "," + o + " "), (a = i), (l = o);
      }
      return u;
    },
    nv = function (t) {
      return t !== t % jm ? t + (t < 0 ? Wm : -Wm) : t;
    },
    rv =
      "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
    iv = {
      version: "3.13.0",
      name: "morphSVG",
      rawVars: 1,
      register: function (t, e) {
        (xm = t), (Em = e), um();
      },
      init: function (t, e, n, r, i) {
        if ((Cm || um(1), !e)) return Z1("invalid shape"), !1;
        var o, s, a, l, u, c, h, p, f, d, g, m, v, _, D;
        if (
          "string" == typeof (e = K1(e) ? e.call(n, r, t, i) : e) ||
          e.getBBox ||
          e[0]
        )
          e = { shape: e };
        else if ("object" == typeof e) {
          for (o in ((y = {}), e))
            y[o] = K1(e[o]) && "render" !== o ? e[o].call(n, r, t, i) : e[o];
          e = y;
        }
        var y,
          x,
          b,
          w,
          C,
          E,
          T = t.nodeType ? window.getComputedStyle(t) : {},
          P = T.fill + "",
          P = !(
            "none" === P ||
            "0" === (P.match(Km) || [])[3] ||
            "evenodd" === T.fillRule
          ),
          T = (e.origin || "50 50").split(","),
          F =
            "POLYLINE" === (y = (t.nodeName + "").toUpperCase()) ||
            "POLYGON" === y;
        if ("PATH" !== y && !F && !e.prop)
          return Z1("Cannot morph a <" + y + "> element. " + rv), !1;
        if (!e.prop && !K1(t.setAttribute)) return !1;
        if (
          ((x = e.shape || e.d || e.points || ""),
          (b = "d" === (o = "PATH" === y ? "d" : "points")),
          (w = t),
          ("string" != typeof x ||
            Zm.test(x) ||
            (x.match(Km) || []).length < 3) &&
            ((C = bm(x)[0])
              ? ((E = (C.nodeName + "").toUpperCase()),
                b && "PATH" !== E && ((C = Xo(C, !1)), (E = "PATH")),
                (x = C.getAttribute("PATH" === E ? "d" : "points") || ""),
                C === w && (x = C.getAttributeNS(null, "data-original") || x))
              : (Z1("WARNING: invalid morph to: " + x), (x = !1))),
          (b = x),
          F && $m.test(b))
        )
          return Z1("A <" + y + "> cannot accept path data. " + rv), !1;
        if (
          ((E = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto"),
          (w = e.map || iv.defaultMap),
          (this._prop = e.prop),
          (this._render = e.render || iv.defaultRender),
          (this._apply =
            "updateTarget" in e ? e.updateTarget : iv.defaultUpdateTarget),
          (this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision)),
          (this._tween = n),
          b)
        ) {
          if (
            ((this._target = t),
            (C = "object" == typeof e.precompile),
            (u = this._prop ? t[this._prop] : t.getAttribute(o)),
            this._prop ||
              t.getAttributeNS(null, "data-original") ||
              t.setAttributeNS(null, "data-original", u),
            "d" === o || this._prop)
          ) {
            if (
              ((u = Uo(C ? e.precompile[0] : u)),
              (c = Uo(C ? e.precompile[1] : b)),
              !C && !nm(u, c, E, w, P))
            )
              return !1;
            for (
              ("log" !== e.precompile && !0 !== e.precompile) ||
                Z1('precompile:["' + ts(u) + '","' + ts(c) + '"]'),
                (_ = "linear" !== (e.type || iv.defaultType)) &&
                  ((u = sm(u, e.smoothTolerance)),
                  (c = sm(c, e.smoothTolerance)),
                  u.size || $1(u),
                  c.size || $1(c),
                  (x = am(T[0])),
                  (this._origin = u.origin =
                    { x: u.left + x.x * u.width, y: u.top + x.y * u.height }),
                  T[1] && (x = am(T[1])),
                  (this._eOrigin = {
                    x: c.left + x.x * c.width,
                    y: c.top + x.y * c.height,
                  })),
                p = (this._rawPath = t._gsRawPath = u).length;
              -1 < --p;

            )
              for (
                d = u[p],
                  g = c[p],
                  a = d.isSmooth || [],
                  l = g.isSmooth || [],
                  f = d.length,
                  h = wm = 0;
                h < f;
                h += 2
              )
                (g[h] === d[h] && g[h + 1] === d[h + 1]) ||
                  (_
                    ? a[h] && l[h]
                      ? ((m = d.smoothData),
                        (v = g.smoothData),
                        (this._controlPT = {
                          _next: this._controlPT,
                          i: h,
                          j: p,
                          l1s: m[h + 1],
                          l1c: v[h + 1] - m[h + 1],
                          l2s: m[(D = h + (h === f - 4 ? 7 - f : 5))],
                          l2c: v[D] - m[D],
                        }),
                        (s = this._tweenRotation(d, g, h + 2)),
                        this._tweenRotation(d, g, h, s),
                        this._tweenRotation(d, g, D - 1, s),
                        (h += 4))
                      : this._tweenRotation(d, g, h)
                    : ((s = this.add(d, h, d[h], g[h], 0, 0, 0, 0, 0, 1)),
                      (s =
                        this.add(
                          d,
                          h + 1,
                          d[h + 1],
                          g[h + 1],
                          0,
                          0,
                          0,
                          0,
                          0,
                          1
                        ) || s)));
          } else
            s = this.add(
              t,
              "setAttribute",
              t.getAttribute(o) + "",
              b + "",
              r,
              i,
              0,
              om(E),
              o
            );
          _ &&
            (this.add(
              this._origin,
              "x",
              this._origin.x,
              this._eOrigin.x,
              0,
              0,
              0,
              0,
              0,
              1
            ),
            (s = this.add(
              this._origin,
              "y",
              this._origin.y,
              this._eOrigin.y,
              0,
              0,
              0,
              0,
              0,
              1
            ))),
            s && (this._props.push("morphSVG"), (s.end = b), (s.endProp = o));
        }
        return 1;
      },
      render: function (t, e) {
        for (
          var n,
            r,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            h,
            p,
            f,
            d = e._rawPath,
            g = e._controlPT,
            m = e._anchorPT,
            v = e._rnd,
            _ = e._target,
            D = e._pt;
          D;

        )
          D.r(t, D.d), (D = D._next);
        if (1 === t && e._apply)
          for (D = e._pt; D; )
            D.end &&
              (e._prop
                ? (_[e._prop] = D.end)
                : _.setAttribute(D.endProp, D.end)),
              (D = D._next);
        else if (d) {
          for (; m; )
            (s = m.sa + t * m.ca),
              (o = m.sl + t * m.cl),
              (m.t[m.i] = e._origin.x + Ym(s) * o),
              (m.t[m.i + 1] = e._origin.y + Hm(s) * o),
              (m = m._next);
          for (r = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; g; )
            (f =
              (a = g.i) + (a === (i = d[g.j]).length - 4 ? 7 - i.length : 5)),
              (s = zm(i[f] - i[a + 1], i[f - 1] - i[a])),
              (h = Hm(s)),
              (p = Ym(s)),
              (u = i[a + 2]),
              (c = i[a + 3]),
              (o = g.l1s + r * g.l1c),
              (i[a] = u - p * o),
              (i[a + 1] = c - h * o),
              (o = g.l2s + r * g.l2c),
              (i[f - 1] = u + p * o),
              (i[f] = c + h * o),
              (g = g._next);
          if (((_._gsRawPath = d), e._apply)) {
            for (n = "", l = 0; l < d.length; l++)
              for (
                o = (i = d[l]).length,
                  n +=
                    "M" +
                    ((i[0] * v) | 0) / v +
                    " " +
                    ((i[1] * v) | 0) / v +
                    " C",
                  a = 2;
                a < o;
                a++
              )
                n += ((i[a] * v) | 0) / v + " ";
            e._prop ? (_[e._prop] = n) : _.setAttribute("d", n);
          }
        }
        e._render && d && e._render.call(e._tween, d, _);
      },
      kill: function (t) {
        this._pt = this._rawPath = 0;
      },
      getRawPath: Ro,
      stringToRawPath: Uo,
      rawPathToString: ts,
      normalizeStrings: function (t, e, n) {
        var r = n.shapeIndex,
          n = n.map,
          t = [t, e];
        return rm(t, r, n), t;
      },
      pathFilter: rm,
      pointsFilter: im,
      getTotalSize: $1,
      equalizeSegmentQuantity: nm,
      convertToPath: function (t, e) {
        return bm(t).map(function (t) {
          return Xo(t, !1 !== e);
        });
      },
      defaultType: "linear",
      defaultUpdateTarget: !0,
      defaultMap: "size",
    },
    ov =
      (G1() && xm.registerPlugin(iv),
      /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
    sv = "#4e7fff",
    av =
      (Math.PI,
      Date.now ||
        function () {
          return new Date().getTime();
        }),
    lv = 0,
    uv = 0,
    cv = function () {
      return !1;
    },
    hv = function () {
      return (lv = av());
    },
    pv = {},
    fv = [],
    dv = {},
    gv = [],
    c = ",",
    mv = [],
    vv = function (t) {
      t.preventDefault &&
        (t.preventDefault(), t.preventManipulation && t.preventManipulation());
    },
    _v = function (t) {
      return f.createElementNS
        ? f.createElementNS("http://www.w3.org/1999/xhtml", t)
        : f.createElement(t);
    },
    Dv = { matrix: new Ls() },
    yv = function (t) {
      return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
    },
    xv = function (t) {
      if (!t.target._gsSelection && !uv && 100 < av() - lv) {
        for (var e = mv.length; -1 < --e; ) mv[e].deselect();
        mv.length = 0;
      }
    },
    bv = 0,
    wv = function (t, e, n, r) {
      var i;
      t.addEventListener
        ? ((i = Nm[e]),
          t.addEventListener(i || e, n, (r = r || { passive: !1 })),
          i &&
            e !== i &&
            "pointer" !== i.substr(0, 7) &&
            t.addEventListener(e, n, r))
        : t.attachEvent && t.attachEvent("on" + e, n);
    },
    Cv = function (t, e, n) {
      var r;
      t.removeEventListener
        ? ((r = Nm[e]),
          t.removeEventListener(r || e, n),
          r &&
            e !== r &&
            "pointer" !== r.substr(0, 7) &&
            t.removeEventListener(e, n))
        : t.detachEvent && t.detachEvent("on" + e, n);
    },
    Ev = function (t, e) {
      for (var n = t.length; -1 < --n; ) if (t[n].identifier === e) return !0;
      return !1;
    },
    Tv = function (t) {
      (bv = t.touches && _dragCount < t.touches.length),
        wv(t.target, "touchend", pm);
    },
    Pv = function () {
      (Im.style.display = "block"), Im.select(), (Im.style.display = "none");
    },
    Fv =
      (((n = Sv.prototype).setPointerPosition = function (t, e) {
        var n;
        (this.pointerX = t),
          (this.pointerY = e),
          this._ctm &&
            ((n = t * this._ctm.a + e * this._ctm.c + this._ctm.e),
            (e = t * this._ctm.b + e * this._ctm.d + this._ctm.f),
            (t = n)),
          (n = e - this._startPointerY),
          (e = t - this._startPointerX),
          (t =
            ((1e3 * (this._startElementX + (e = e < 1 && -1 < e ? 0 : e))) |
              0) /
            1e3),
          (e =
            ((1e3 * (this._startElementY + (n = n < 1 && -1 < n ? 0 : n))) |
              0) /
            1e3),
          this.snap &&
            !Om &&
            ((dv.x = t),
            (dv.y = e),
            this.snap.call(this, dv),
            (t = dv.x),
            (e = dv.y)),
          (this.x === t && this.y === e) ||
            ((this._matrix.f = this.y = e),
            (this._matrix.e = this.x = t),
            !this.isDragging &&
              this.isPressed &&
              ((this.isDragging = !0),
              dm("onDragStart", this, this.pointerEvent)));
      }),
      (n.enabled = function (t) {
        return arguments.length
          ? ((this._enabled = t)
              ? (Tm || wv(this.target, "mousedown", this._onPress),
                wv(this.target, "touchstart", this._onPress),
                wv(this.target, "click", this._onClick, !0))
              : ((t = this.isDragging),
                Cv(this.target, "mousedown", this._onPress),
                Cv(this.target, "touchstart", this._onPress),
                Cv(Pm, "touchforcechange", vv),
                Cv(this.target, "click", this._onClick),
                this.touchEventTarget &&
                  (Cv(this.touchEventTarget, "touchcancel", this._onRelease),
                  Cv(this.touchEventTarget, "touchend", this._onRelease),
                  Cv(this.touchEventTarget, "touchmove", this._onMove)),
                Cv(f, "mouseup", this._onRelease),
                Cv(f, "mousemove", this._onMove),
                (this.isDragging = this.isPressed = !1),
                t && dm("onDragEnd", this, this.pointerEvent)),
            this)
          : this._enabled;
      }),
      (n.endDrag = function (t) {
        this._onRelease(t);
      }),
      Sv);
  function Sv(t, e) {
    (this.target = "string" == typeof t ? f.querySelectorAll(t)[0] : t),
      (this.vars = e || {}),
      (this._onPress = fm(mm, this)),
      (this._onMove = fm(vm, this)),
      (this._onRelease = fm(_m, this)),
      this.target.setAttribute(
        "transform",
        (this.target.getAttribute("transform") || "") + " translate(0,0)"
      ),
      (this._matrix = hm(this.target)),
      (this.x = this._matrix.e),
      (this.y = this._matrix.f),
      (this.snap = e.snap),
      isNaN(e.maxX) && isNaN(e.minX)
        ? (this._bounds = 0)
        : ((this._bounds = 1), (this.maxX = +e.maxX), (this.minX = +e.minX)),
      this.enabled(!0);
  }
  ((n = Av.prototype).onPress = function () {
    dm("onPress", this);
  }),
    (n.onClick = function () {
      dm("onClick", this);
    }),
    (n.onDrag = function () {
      var t = this.segment;
      this.vars.onDrag.call(
        this.vars.callbackScope || this,
        this,
        this._draggable.x - t[this.i],
        this._draggable.y - t[this.i + 1]
      );
    }),
    (n.onDragEnd = function () {
      dm("onDragEnd", this);
    }),
    (n.onRelease = function () {
      dm("onRelease", this);
    }),
    (n.update = function (t, e, n) {
      t && (this.rawPath = t),
        arguments.length <= 1
          ? ((e = this.j), (n = this.i))
          : ((this.j = e), (this.i = n));
      var t = this.smooth,
        e = this.rawPath[e],
        r = 0 === n && e.closed ? e.length - 4 : n - 2;
      (this.segment = e),
        (this.smooth =
          0 < n &&
          n < e.length - 2 &&
          Math.abs(
            Math.atan2(e[n + 1] - e[1 + r], e[n] - e[r]) -
              Math.atan2(e[n + 3] - e[n + 1], e[n + 2] - e[n])
          ) < 0.09
            ? 2
            : 0),
        this.smooth !== t &&
          this.element.setAttribute(
            "d",
            this.smooth ? this.editor._circleHandle : this.editor._squareHandle
          ),
        this.element.setAttribute(
          "transform",
          "translate(" + e[n] + "," + e[n + 1] + ")"
        );
    });
  var Mv = Av;
  function Av(t, e, n, r, i) {
    (this.editor = t),
      (this.element = cm("path", t._selection, {
        fill: sv,
        stroke: sv,
        strokeWidth: 2,
        vectorEffect: "non-scaling-stroke",
      })),
      this.update(e, n, r),
      (this.element._gsSelection = !0),
      (this.vars = i || {}),
      (this._draggable = new Fv(this.element, {
        callbackScope: this,
        onDrag: this.onDrag,
        snap: this.vars.snap,
        onPress: this.onPress,
        onRelease: this.onRelease,
        onClick: this.onClick,
        onDragEnd: this.onDragEnd,
      }));
  }
  ((n = Ov.prototype)._onRelease = function (t) {
    var e = this._editingAnchor;
    e && ((pv.x = e.segment[e.i]), (pv.y = e.segment[e.i + 1])),
      Cv(Pm, "touchforcechange", vv),
      dm("onRelease", this, t);
  }),
    (n.init = function () {
      var t,
        e,
        n = this.path.getAttribute("d"),
        r = Uo(n),
        i = this.path.getAttribute("transform") || "translate(0,0)",
        o =
          !this._rawPath ||
          r.totalPoints !== this._rawPath.totalPoints ||
          r.length !== this._rawPath.length,
        s = {
          callbackScope: this,
          snap: this.vars.anchorSnap,
          onDrag: this._onDragAnchor,
          onPress: this._onPressAnchor,
          onRelease: this._onRelease,
          onClick: this._onClickAnchor,
          onDragEnd: this._onDragEndAnchor,
          maxX: this.vars.maxX,
          minX: this.vars.minX,
        };
      if (o && this._anchors && this._anchors.length) {
        for (e = 0; e < this._anchors.length; e++)
          this._anchors[e].element.parentNode.removeChild(
            this._anchors[e].element
          ),
            this._anchors[e]._draggable.enabled(!1);
        this._selectedAnchors.length = 0;
      }
      if (((this._rawPath = r), o)) {
        if (((this._anchors = Dm(r, 0, this, s)), 1 < (t = r.length)))
          for (e = 1; e < t; e++)
            this._anchors = this._anchors.concat(Dm(r, e, this, s));
      } else
        for (e = this._anchors.length; -1 < --e; ) this._anchors[e].update(r);
      return (
        this._selection.appendChild(this._handle1),
        this._selection.appendChild(this._handle2),
        this._selectionPath.setAttribute("d", n),
        this._selectionHittest.setAttribute("d", n),
        this._g.setAttribute(
          "transform",
          (function (t) {
            for (
              var e = hm(t), n = t.ownerSVGElement;
              (t = t.parentNode) && t.ownerSVGElement === n;

            )
              e.multiply(hm(t));
            return (
              "matrix(" +
              e.a +
              "," +
              e.b +
              "," +
              e.c +
              "," +
              e.d +
              "," +
              e.e +
              "," +
              e.f +
              ")"
            );
          })(this.path.parentNode) || "translate(0,0)"
        ),
        this._selection.setAttribute("transform", i),
        this._selectionHittest.setAttribute("transform", i),
        this._updateAnchors(),
        this
      );
    }),
    (n._saveState = function () {
      for (
        var t = this, e = [], n = t._selectedAnchors, r = 0;
        r < n.length;
        r++
      )
        e[r] = n[r].i;
      fv.unshift({
        path: t,
        d: t.path.getAttribute("d"),
        transform: t.path.getAttribute("transform") || "",
        selectedIndexes: e,
      }),
        30 < fv.length && (fv.length = 30);
    }),
    (n._onClickSelectionPath = function (t) {
      if ("hidden" === this._selection.style.visibility) this.select();
      else if (km || (t && t.altKey)) {
        var e,
          n,
          r,
          i,
          o,
          s = {
            callbackScope: this,
            snap: this.vars.anchorSnap,
            onDrag: this._onDragAnchor,
            onPress: this._onPressAnchor,
            onRelease: this._onRelease,
            onClick: this._onClickAnchor,
            onDragEnd: this._onDragEndAnchor,
            maxX: this.vars.maxX,
            minX: this.vars.minX,
          },
          a = this._selection.getScreenCTM().inverse();
        for (
          this._draggable && this._draggable._onRelease(t),
            a &&
              ((r = t.clientX * a.a + t.clientY * a.c + a.e),
              (i = t.clientX * a.b + t.clientY * a.d + a.f)),
            o = Jo(this._rawPath, r, i),
            Vo(this._rawPath[o.j], o.i, o.t),
            e = o.i + 6,
            n = 0;
          n < this._anchors.length;
          n++
        )
          this._anchors[n].i >= e &&
            this._anchors[n].j === o.j &&
            (this._anchors[n].i += 6);
        (a = new Mv(this, this._rawPath, o.j, e, s)),
          this._selection.appendChild(this._handle1),
          this._selection.appendChild(this._handle2),
          a._draggable._onPress(t),
          (Rm = a),
          this._anchors.push(a),
          (this._selectedAnchors.length = 0),
          this._selectedAnchors.push(a),
          this._updateAnchors(),
          this.update(),
          this._saveState();
      }
      Pv(), wv(Pm, "touchforcechange", vv), dm("onPress", this);
    }),
    (n._onClickHandle1 = function () {
      var t = this._editingAnchor,
        e = t.i,
        n = t.segment,
        r = t.isClosedStart ? n.length - 4 : e - 2;
      km &&
        Math.abs(n[e] - n[r]) < 5 &&
        Math.abs(n[e + 1] - n[1 + r]) < 5 &&
        this._onClickAnchor(t);
    }),
    (n._onClickHandle2 = function () {
      var t = this._editingAnchor,
        e = t.i,
        n = t.segment;
      km &&
        Math.abs(n[e] - n[e + 2]) < 5 &&
        Math.abs(n[e + 1] - n[e + 3]) < 5 &&
        this._onClickAnchor(t);
    }),
    (n._onDragEndAnchor = function (t) {
      (Rm = null), this._saveState();
    }),
    (n.isSelected = function () {
      return (
        0 < this._selectedAnchors.length ||
        "visible" === this._selection.style.visibility
      );
    }),
    (n.select = function (t) {
      if (
        ((this._selection.style.visibility = "visible"),
        (this._editingAnchor = null),
        (this.path._gsSelection = !0) === t)
      )
        for (var e = this._anchors.length; -1 < --e; )
          this._selectedAnchors[e] = this._anchors[e];
      return (
        -1 === mv.indexOf(this) && mv.push(this), this._updateAnchors(), this
      );
    }),
    (n.deselect = function () {
      return (
        (this._selection.style.visibility = "hidden"),
        (this._selectedAnchors.length = 0),
        (this._editingAnchor = null),
        (this.path._gsSelection = !1),
        mv.splice(mv.indexOf(this), 1),
        this._updateAnchors(),
        this
      );
    }),
    (n._onDragPath = function (t) {
      var e =
        this._selectionHittest.getAttribute("transform") || "translate(0,0)";
      this._selection.setAttribute("transform", e),
        this.path.setAttribute("transform", e);
    }),
    (n._onPressAnchor = function (t) {
      -1 === this._selectedAnchors.indexOf(t)
        ? (Om || (this._selectedAnchors.length = 0),
          this._selectedAnchors.push(t))
        : Om &&
          (this._selectedAnchors.splice(this._selectedAnchors.indexOf(t), 1),
          t._draggable.endDrag()),
        (pv.x = t.segment[t.i]),
        (pv.y = t.segment[t.i + 1]),
        this._updateAnchors(),
        dm("onPress", this);
    }),
    (n._deleteSelectedAnchors = function () {
      for (var t, e, n, r, i = this._selectedAnchors, o = i.length; -1 < --o; )
        for (
          (t = i[o]).element.parentNode.removeChild(t.element),
            t._draggable.enabled(!1),
            e = t.i,
            r = t.j,
            e
              ? e < t.segment.length - 2
                ? t.segment.splice(e - 2, 6)
                : t.segment.splice(e - 4, 6)
              : t.segment.splice(e, 6),
            i.splice(o, 1),
            this._anchors.splice(this._anchors.indexOf(t), 1),
            n = 0;
          n < this._anchors.length;
          n++
        )
          this._anchors[n].i >= e &&
            this._anchors[n].j === r &&
            (this._anchors[n].i -= 6);
      this._updateAnchors(),
        this.update(),
        this._saveState(),
        this.vars.onDeleteAnchor &&
          this.vars.onDeleteAnchor.call(this.vars.callbackScope || this);
    }),
    (n._onClickAnchor = function (t) {
      var e,
        n,
        r,
        i,
        o,
        s = t.i,
        a = t.segment,
        l = t.isClosedStart ? a.length - 4 : s - 2,
        u = !s || s >= a.length - 2;
      km && Rm !== t && this._editingAnchor
        ? ((t.smooth = !t.smooth),
          u && !t.isClosedStart && (t.smooth = !1),
          t.element.setAttribute(
            "d",
            t.smooth ? this._circleHandle : this._squareHandle
          ),
          !t.smooth || (u && !t.isClosedStart)
            ? t.smooth ||
              (u && !t.isClosedStart) ||
              ((s || t.isClosedStart) && ((a[l] = a[s]), (a[1 + l] = a[s + 1])),
              s < a.length - 2 && ((a[s + 2] = a[s]), (a[s + 3] = a[s + 1])),
              this._updateAnchors(),
              this.update(),
              this._saveState())
            : ((u =
                ((u = Math.atan2(a[s + 1] - a[1 + l], a[s] - a[l])) +
                  (e = Math.atan2(a[s + 3] - a[s + 1], a[s + 2] - a[s]))) /
                2),
              (n = ym(a, l, s)),
              (r = ym(a, s, s + 2)),
              n < 0.2 &&
                ((n = ym(a, s, l - 4) / 4),
                (u =
                  e || Math.atan2(a[s + 7] - a[l - 3], a[s + 6] - a[l - 4]))),
              r < 0.2 &&
                ((r = ym(a, s, s + 6) / 4),
                (e =
                  u || Math.atan2(a[s + 7] - a[l - 3], a[s + 6] - a[l - 4]))),
              (i = Math.sin(u)),
              (o = Math.cos(u)),
              Math.abs(e - u) < Math.PI / 2 && ((i = -i), (o = -o)),
              (a[l] = ((1e3 * (a[s] + o * n)) | 0) / 1e3),
              (a[1 + l] = ((1e3 * (a[s + 1] + i * n)) | 0) / 1e3),
              (a[s + 2] = ((1e3 * (a[s] - o * r)) | 0) / 1e3),
              (a[s + 3] = ((1e3 * (a[s + 1] - i * r)) | 0) / 1e3),
              this._updateAnchors(),
              this.update(),
              this._saveState()))
        : Om ||
          ((this._selectedAnchors.length = 0), this._selectedAnchors.push(t)),
        (Rm = null),
        this._updateAnchors();
    }),
    (n._updateAnchors = function () {
      var t,
        e,
        n,
        r =
          1 === this._selectedAnchors.length ? this._selectedAnchors[0] : null,
        i = r ? r.segment : null;
      for (this._editingAnchor = r, t = 0; t < this._anchors.length; t++)
        this._anchors[t].element.style.fill =
          -1 !== this._selectedAnchors.indexOf(this._anchors[t]) ? sv : "white";
      r &&
        (this._handle1.setAttribute(
          "d",
          r.smooth ? this._circleHandle : this._squareHandle
        ),
        this._handle2.setAttribute(
          "d",
          r.smooth ? this._circleHandle : this._squareHandle
        )),
        (t = r ? r.i : 0),
        r && (t || r.isClosedStart)
          ? ((e = r.isClosedStart ? i[i.length - 4] : i[t - 2]),
            (n = r.isClosedStart ? i[i.length - 3] : i[t - 1]),
            (this._handle1.style.visibility = this._line1.style.visibility =
              km || e !== i[t] || n !== i[t + 1] ? "visible" : "hidden"),
            this._handle1.setAttribute(
              "transform",
              "translate(" + e + c + n + ")"
            ),
            this._line1.setAttribute(
              "points",
              e + c + n + c + i[t] + c + i[t + 1]
            ))
          : (this._handle1.style.visibility = this._line1.style.visibility =
              "hidden"),
        r && t < i.length - 2
          ? ((e = i[t + 2]),
            (n = i[t + 3]),
            (this._handle2.style.visibility = this._line2.style.visibility =
              km || e !== i[t] || n !== i[t + 1] ? "visible" : "hidden"),
            this._handle2.setAttribute(
              "transform",
              "translate(" + e + c + n + ")"
            ),
            this._line2.setAttribute(
              "points",
              i[t] + c + i[t + 1] + c + e + c + n
            ))
          : (this._handle2.style.visibility = this._line2.style.visibility =
              "hidden");
    }),
    (n._onPressAlt = function () {
      var t = this._editingAnchor;
      t &&
        ((t.i || t.isClosedStart) &&
          (this._handle1.style.visibility = this._line1.style.visibility =
            "visible"),
        t.i < t.segment.length - 2 &&
          (this._handle2.style.visibility = this._line2.style.visibility =
            "visible"));
    }),
    (n._onReleaseAlt = function () {
      var t,
        e,
        n = this._editingAnchor;
      n &&
        ((t = n.segment),
        (e = n.i),
        (n = n.isClosedStart ? t.length - 4 : e - 2),
        t[e] === t[n] &&
          t[e + 1] === t[1 + n] &&
          (this._handle1.style.visibility = this._line1.style.visibility =
            "hidden"),
        t[e] === t[e + 2] &&
          t[e + 1] === t[e + 3] &&
          (this._handle2.style.visibility = this._line2.style.visibility =
            "hidden"));
    }),
    (n._onPressHandle1 = function () {
      this._editingAnchor.smooth &&
        (this._oppositeHandleLength = ym(
          this._editingAnchor.segment,
          this._editingAnchor.i,
          this._editingAnchor.i + 2
        )),
        dm("onPress", this);
    }),
    (n._onPressHandle2 = function () {
      this._editingAnchor.smooth &&
        (this._oppositeHandleLength = ym(
          this._editingAnchor.segment,
          this._editingAnchor.isClosedStart
            ? this._editingAnchor.segment.length - 4
            : this._editingAnchor.i - 2,
          this._editingAnchor.i
        )),
        dm("onPress", this);
    }),
    (n._onReleaseHandle = function (t) {
      this._onRelease(t), this._saveState();
    }),
    (n._onDragHandle1 = function () {
      var t = this._editingAnchor,
        e = t.segment,
        n = t.i,
        r = t.isClosedStart ? e.length - 4 : n - 2,
        i = this._handle1._draggable.x,
        o = this._handle1._draggable.y;
      (e[r] = i = ((1e3 * i) | 0) / 1e3),
        (e[1 + r] = o = ((1e3 * o) | 0) / 1e3),
        t.smooth &&
          (km
            ? ((t.smooth = !1),
              t.element.setAttribute("d", this._squareHandle),
              this._handle1.setAttribute("d", this._squareHandle),
              this._handle2.setAttribute("d", this._squareHandle))
            : ((r = Math.atan2(e[n + 1] - o, e[n] - i)),
              (i = this._oppositeHandleLength * Math.cos(r)),
              (o = this._oppositeHandleLength * Math.sin(r)),
              (e[n + 2] = ((1e3 * (e[n] + i)) | 0) / 1e3),
              (e[n + 3] = ((1e3 * (e[n + 1] + o)) | 0) / 1e3))),
        this.update();
    }),
    (n._onDragHandle2 = function () {
      var t = this._editingAnchor,
        e = t.segment,
        n = t.i,
        r = t.isClosedStart ? e.length - 4 : n - 2,
        i = this._handle2._draggable.x,
        o = this._handle2._draggable.y;
      (e[n + 2] = i = ((1e3 * i) | 0) / 1e3),
        (e[n + 3] = o = ((1e3 * o) | 0) / 1e3),
        t.smooth &&
          (km
            ? ((t.smooth = !1),
              t.element.setAttribute("d", this._squareHandle),
              this._handle1.setAttribute("d", this._squareHandle),
              this._handle2.setAttribute("d", this._squareHandle))
            : ((t = Math.atan2(e[n + 1] - o, e[n] - i)),
              (i = this._oppositeHandleLength * Math.cos(t)),
              (o = this._oppositeHandleLength * Math.sin(t)),
              (e[r] = ((1e3 * (e[n] + i)) | 0) / 1e3),
              (e[1 + r] = ((1e3 * (e[n + 1] + o)) | 0) / 1e3))),
        this.update();
    }),
    (n._onDragAnchor = function (t, e, n) {
      for (
        var r, i, o, s, a = this._selectedAnchors, l = a.length, u = 0;
        u < l;
        u++
      )
        (r = (o = a[u]).i),
          (i = o.segment),
          r
            ? ((i[r - 2] = ((1e3 * (i[r - 2] + e)) | 0) / 1e3),
              (i[r - 1] = ((1e3 * (i[r - 1] + n)) | 0) / 1e3))
            : o.isClosedStart &&
              ((i[(s = i.length - 2)] = yv(i[s] + e)),
              (i[1 + s] = yv(i[1 + s] + n)),
              (i[s - 2] = yv(i[s - 2] + e)),
              (i[s - 1] = yv(i[s - 1] + n))),
          (i[r] = ((1e3 * (i[r] + e)) | 0) / 1e3),
          (i[r + 1] = ((1e3 * (i[r + 1] + n)) | 0) / 1e3),
          r < i.length - 2 &&
            ((i[r + 2] = ((1e3 * (i[r + 2] + e)) | 0) / 1e3),
            (i[r + 3] = ((1e3 * (i[r + 3] + n)) | 0) / 1e3)),
          o !== t &&
            o.element.setAttribute(
              "transform",
              "translate(" + i[r] + c + i[r + 1] + ")"
            );
      this.update();
    }),
    (n.enabled = function (t) {
      if (!arguments.length) return this._enabled;
      for (var e = this._anchors.length; -1 < --e; )
        this._anchors[e]._draggable.enabled(t);
      return (
        (this._enabled = t),
        this._handle1._draggable.enabled(t),
        this._handle2._draggable.enabled(t),
        this._draggable && this._draggable.enabled(t),
        t
          ? this._selection.parentNode ||
            (this.path.ownerSVGElement.appendChild(this._selectionHittest),
            this.path.ownerSVGElement.appendChild(this._selection),
            this.init(),
            this._saveState())
          : (this.deselect(),
            this._selectionHittest.parentNode &&
              this._selectionHittest.parentNode.removeChild(
                this._selectionHittest
              ),
            this._selection.parentNode &&
              this._selection.parentNode.removeChild(this._selection)),
        this._updateAnchors(),
        this.update()
      );
    }),
    (n.update = function (t) {
      var e,
        n,
        r,
        i,
        o = "",
        s = this._editingAnchor;
      if (
        (t && this.init(),
        s &&
          ((e = s.i),
          (n = s.segment),
          (e || s.isClosedStart) &&
            ((r = n[(s = s.isClosedStart ? n.length - 4 : e - 2)]),
            (i = n[1 + s]),
            this._handle1.setAttribute(
              "transform",
              "translate(" + r + c + i + ")"
            ),
            this._line1.setAttribute(
              "points",
              r + c + i + c + n[e] + c + n[e + 1]
            )),
          e < n.length - 2 &&
            ((r = n[e + 2]),
            (i = n[e + 3]),
            this._handle2.setAttribute(
              "transform",
              "translate(" + r + c + i + ")"
            ),
            this._line2.setAttribute(
              "points",
              n[e] + c + n[e + 1] + c + r + c + i
            ))),
        t)
      )
        o = this.path.getAttribute("d");
      else {
        for (e = 0; e < this._rawPath.length; e++)
          7 < (n = this._rawPath[e]).length &&
            (o += "M" + n[0] + c + n[1] + "C" + n.slice(2).join(c));
        this.path.setAttribute("d", o),
          this._selectionPath.setAttribute("d", o),
          this._selectionHittest.setAttribute("d", o);
      }
      return (
        this.vars.onUpdate && this._enabled && dm("onUpdate", this, o), this
      );
    }),
    (n.getRawPath = function (t, e, n) {
      return t
        ? ((t = hm(this.path)),
          qo(Lo(this._rawPath), 1, 0, 0, 1, t.e + (e || 0), t.f + (n || 0)))
        : this._rawPath;
    }),
    (n.getString = function (t, e, n) {
      return t
        ? ((t = hm(this.path)),
          ts(qo(Lo(this._rawPath), 1, 0, 0, 1, t.e + (e || 0), t.f + (n || 0))))
        : this.path.getAttribute("d");
    }),
    (n.getNormalizedSVG = function (t, e, n, r) {
      var i,
        o,
        s,
        a,
        l,
        u,
        c = this._rawPath[0],
        h = -1 * c[0],
        p = 0 === e ? 0 : -(e || c[1]),
        f = c.length,
        d = 1 / (c[f - 2] + h),
        g = (g = -t || c[f - 1] + p) ? 1 / g : -d;
      for (d *= 1e3, g *= 1e3, o = gv.length = 0; o < f; o += 2)
        (gv[o] = (((c[o] + h) * d) | 0) / 1e3),
          (gv[o + 1] = (((c[o + 1] + p) * g) | 0) / 1e3);
      if (r) {
        for (i = [], f = gv.length, o = 2; o < f; o += 6)
          (s = gv[o - 2]),
            (a = gv[o - 1]),
            (l = gv[o + 4]),
            (u = gv[o + 5]),
            i.push(s, a, l, u),
            Go(
              s,
              a,
              gv[o],
              gv[o + 1],
              gv[o + 2],
              gv[o + 3],
              l,
              u,
              0.001,
              i,
              i.length - 2
            );
        for (s = i[0], f = i.length, o = 2; o < f; o += 2) {
          if ((l = i[o]) < s || 1 < l || l < 0) {
            r();
            break;
          }
          s = l;
        }
      }
      return n &&
        8 === f &&
        0 === gv[0] &&
        0 === gv[1] &&
        1 === gv[f - 2] &&
        1 === gv[f - 1]
        ? gv.slice(2, 6).join(",")
        : ((gv[2] = "C" + gv[2]), "M" + gv.join(","));
    }),
    (n.kill = function () {
      this.enabled(!1),
        this._g.parentNode && this._g.parentNode.removeChild(this._g);
    }),
    (n.revert = function () {
      this.kill();
    });
  var kv = Ov;
  function Ov(t, e) {
    (e = e || {}),
      Xm || gm(),
      (this.vars = e),
      (this.path = "string" == typeof t ? f.querySelectorAll(t)[0] : t),
      (this._g = cm("g", this.path.ownerSVGElement, {
        class: "path-editor-g path-editor",
      })),
      (this._selectionHittest = cm("path", this._g, {
        stroke: "transparent",
        strokeWidth: 16,
        fill: "none",
        vectorEffect: "non-scaling-stroke",
      })),
      (this._selection =
        e._selection ||
        cm("g", this._g, { class: "path-editor-selection path-editor" })),
      (this._selectionPath = cm("path", this._selection, {
        stroke: sv,
        strokeWidth: 2,
        fill: "none",
        vectorEffect: "non-scaling-stroke",
      })),
      (this._selectedAnchors = []),
      (this._line1 = cm("polyline", this._selection, {
        stroke: sv,
        strokeWidth: 2,
        vectorEffect: "non-scaling-stroke",
      })),
      (this._line2 = cm("polyline", this._selection, {
        stroke: sv,
        strokeWidth: 2,
        vectorEffect: "non-scaling-stroke",
      })),
      (this._line1.style.pointerEvents =
        this._line2.style.pointerEvents =
        this._selectionPath.style.pointerEvents =
          "none"),
      (this._enabled = !0);
    for (
      var n,
        t = this.path.parentNode.getScreenCTM().inverse(),
        t = ((t.a + t.d) / 2) * (e.handleSize || 5),
        r =
          ((this._squareHandle = [
            "M-" + (n = yv((n = t))),
            -n,
            n,
            -n,
            n,
            n,
            -n,
            n + "z",
          ].join(c)),
          (this._circleHandle =
            ((t = yv(0.552284749831 * (n = 1.15 * t))),
            "M" +
              (n = yv(n)) +
              ",0C" +
              [
                n,
                t,
                t,
                n,
                0,
                n,
                -t,
                n,
                -n,
                t,
                -n,
                0,
                -n,
                -t,
                -t,
                -n,
                0,
                -n,
                t,
                -n,
                n,
                -t,
                n,
                0,
              ].join(c) +
              "z")),
          (this._handle1 = cm("path", this._selection, {
            d: this._squareHandle,
            fill: sv,
            stroke: "transparent",
            strokeWidth: 6,
          })),
          (this._handle2 = cm("path", this._selection, {
            d: this._squareHandle,
            fill: sv,
            stroke: "transparent",
            strokeWidth: 6,
          })),
          (this._handle1._draggable = new Fv(this._handle1, {
            onDrag: this._onDragHandle1,
            callbackScope: this,
            onPress: this._onPressHandle1,
            onRelease: this._onReleaseHandle,
            onClick: this._onClickHandle1,
            snap: e.handleSnap,
          })),
          (this._handle2._draggable = new Fv(this._handle2, {
            onDrag: this._onDragHandle2,
            callbackScope: this,
            onPress: this._onPressHandle2,
            onRelease: this._onReleaseHandle,
            onClick: this._onClickHandle2,
            snap: e.handleSnap,
          })),
          (this._handle1.style.visibility = this._handle2.style.visibility =
            "hidden"),
          [
            this._handle1,
            this._handle2,
            this._line1,
            this._line2,
            this._selection,
            this._selectionPath,
            this._selectionHittest,
          ]),
        i = r.length;
      -1 < --i;

    )
      r[i]._gsSelection = !0;
    !1 !== e.draggable &&
      (this._draggable = new Fv(this._selectionHittest, {
        callbackScope: this,
        onPress: this.select,
        onRelease: this._onRelease,
        onDrag: this._onDragPath,
        onDragEnd: this._saveState,
        maxX: this.vars.maxX,
        minX: this.vars.minX,
      })),
      this.init(),
      (this._selection.style.visibility =
        !1 === e.selected ? "hidden" : "visible"),
      !1 !== e.selected && ((this.path._gsSelection = !0), mv.push(this)),
      this._saveState(),
      Tm ||
        (wv(
          this._selectionHittest,
          "mousedown",
          fm(this._onClickSelectionPath, this)
        ),
        wv(this._selectionHittest, "mouseup", fm(this._onRelease, this))),
      wv(
        this._selectionHittest,
        "touchstart",
        fm(this._onClickSelectionPath, this)
      ),
      wv(this._selectionHittest, "touchend", fm(this._onRelease, this)),
      Mm(this);
  }
  (kv.simplifyPoints = Qo),
    (kv.pointsToSegment = Zo),
    (kv.simplifySVG = function (t, e) {
      var n,
        r,
        i,
        o,
        s,
        a,
        l,
        u,
        c,
        h = (e = e || {}).tolerance || 1,
        p = e.precision || 1 / h;
      void 0 !== e.cornerThreshold && e.cornerThreshold;
      if (
        (("#" !==
          (t = "string" != typeof t ? (n = t).getAttribute("d") : t).charAt(
            0
          ) &&
          "." !== t.charAt(0)) ||
          ((n = f.querySelector(t)) && (t = n.getAttribute("d"))),
        (r =
          !1 !== e.curved || /[achqstvz]/gi.test(t) ? Uo(t)[0] : t.match(ov)),
        !1 !== e.curved)
      ) {
        for (u = r, r = [], c = u.length, i = 2; i < c; i += 6)
          (o = +u[i - 2]),
            (a = +u[i - 1]),
            (s = +u[i + 4]),
            (l = +u[i + 5]),
            r.push(yv(o), yv(a), yv(s), yv(l)),
            Go(
              o,
              a,
              +u[i],
              +u[i + 1],
              +u[i + 2],
              +u[i + 3],
              s,
              l,
              1 / (2e5 * p),
              r,
              r.length - 2
            );
        (r = Zo(Qo(r, h), e.curviness))[2] = "C" + r[2];
      } else r = Qo(r, h);
      return (t = "M" + r.join(",")), n && n.setAttribute("d", t), t;
    }),
    (kv.create = function (t, e) {
      return new kv(t, e);
    }),
    (kv.editingAxis = pv),
    (kv.getSnapFunction = function (t) {
      var s = t.radius || 2,
        a = t.x || 0 === t.x ? t.x : t.width ? 0 : -1e20,
        l = t.y || 0 === t.y ? t.y : t.height ? 0 : -1e20,
        u = a + (t.width || 1e40),
        c = l + (t.height || 1e40),
        h = !1 !== t.containX,
        p = !1 !== t.containY,
        f = t.axis,
        d = t.gridSize;
      return (
        (s *= s),
        function (t) {
          var e,
            n,
            r,
            i = t.x,
            o = t.y;
          (h && i < a) || (n = i - a) * n < s
            ? (i = a)
            : ((h && u < i) || (n = u - i) * n < s) && (i = u),
            (p && o < l) || (r = o - l) * r < s
              ? (o = l)
              : ((p && c < o) || (r = c - o) * r < s) && (o = c),
            f &&
              ((n = i - f.x),
              (r = o - f.y),
              n * n < s && (i = f.x),
              r * r < s && (o = f.y)),
            d &&
              (n = (e = a + Math.round((i - a) / d) * d) - i) * n +
                (r = (n = l + Math.round((o - l) / d) * d) - o) * r <
                s &&
              ((i = e), (o = n)),
            (t.x = i),
            (t.y = o);
        }
      );
    }),
    (kv.version = "3.13.0"),
    (kv.register = gm);
  function Bv(t, e) {
    return (e = Iv.createElementNS
      ? Iv.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : Iv.createElement(t)).style
      ? e
      : Iv.createElement(t);
  }
  function Rv(t, e, n) {
    return Uv(t) && qv.test(t)
      ? Iv.querySelector(t)
      : Array.isArray(t)
      ? Vv(
          Hv(
            [{ x: y.getProperty(e, "x"), y: y.getProperty(e, "y") }].concat(t),
            n
          )
        )
      : Uv(t) || (t && "path" === (t.tagName + "").toLowerCase())
      ? t
      : 0;
  }
  function Lv(t, e) {
    var n = "Please gsap.registerPlugin(MotionPathPlugin)";
    (Nv = window),
      (y = y || t || Nv.gsap || console.warn(n)) && kv.register(y),
      (Iv = document),
      (zv = Iv.body),
      (Xv = Iv.documentElement),
      y &&
        ((Yv = y.plugins.motionPath),
        (Zv.PathEditor = kv),
        (jv = y.core.context || function () {})),
      Yv
        ? (Gv(), (Hv = Yv.arrayToRawPath), (Vv = Yv.rawPathToString))
        : !0 === e && console.warn(n);
  }
  var y,
    Nv,
    Iv,
    Xv,
    zv,
    Yv,
    Hv,
    Vv,
    jv,
    Wv,
    qv = /(^[#\.][a-z]|[a-y][a-z])/i,
    Uv = function (t) {
      return "string" == typeof t;
    },
    Gv = function () {
      ((Wv = Bv("textarea")).style.display = "none"), zv.appendChild(Wv);
    },
    Kv = { matrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 } },
    Zv =
      (($v.prototype.getString = function () {
        return this.editor.getString(!0, -this.offset.x, -this.offset.y);
      }),
      $v);
  function $v(t, e) {
    var n,
      r,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      h,
      p,
      f,
      d,
      g,
      m = this,
      v = (void 0 === e && (e = {}), Yv || Lv(e.gsap, 1), Bv("div")),
      _ = this,
      D = { x: 0, y: 0 };
    t instanceof y.core.Tween
      ? (n = (i = t).targets()[0])
      : ((n = y.utils.toArray(t)[0]),
        (i = (function (t) {
          for (var e = y.getTweensOf(t), n = 0; n < e.length; n++) {
            if (e[n].vars.motionPath) return e[n];
            e[n].timeline && e.push.apply(e, e[n].timeline.getChildren());
          }
        })(n))),
      (t = Rv(e.path, n, e)),
      (this.offset = D),
      (c = (c = n).getBoundingClientRect()),
      (h =
        Xv.clientTop - (Nv.pageYOffset || Xv.scrollTop || zv.scrollTop || 0)),
      (p =
        Xv.clientLeft -
        (Nv.pageXOffset || Xv.scrollLeft || zv.scrollLeft || 0)),
      (p = {
        left: c.left + p,
        top: c.top + h,
        right: c.right + p,
        bottom: c.bottom + h,
      }),
      (c = parseFloat(y.getProperty(n, "x", "px"))),
      (h = parseFloat(y.getProperty(n, "y", "px"))),
      (a = n.getCTM && "svg" !== n.tagName.toLowerCase()),
      i &&
        !t &&
        (t = Rv(
          i.vars.motionPath.path || i.vars.motionPath,
          n,
          i.vars.motionPath
        )),
      v.setAttribute("class", "copy-motion-path"),
      (v.style.cssText =
        "border-radius:8px; background-color:rgba(85, 85, 85, 0.7); color:#fff; cursor:pointer; padding:6px 12px; font-family:Signika Negative, Arial, sans-serif; position:fixed; left:50%; transform:translate(-50%, 0); font-size:19px; bottom:10px"),
      (v.innerText = "COPY MOTION PATH"),
      (v._gsHelper = _),
      (y.utils.toArray(e.container)[0] || zv).appendChild(v),
      (d = function () {
        return _.getString();
      }),
      (g = function () {
        return y.fromTo(
          v,
          { backgroundColor: "white" },
          { duration: 0.5, backgroundColor: "rgba(85, 85, 85, 0.6)" }
        );
      }),
      (f = v).addEventListener("click", function (t) {
        if (t.target._gsHelper) {
          t = d(t.target);
          if ((Wv.value = t) && Wv.select) {
            console.log(t), (Wv.style.display = "block"), Wv.select();
            try {
              Iv.execCommand("copy"), Wv.blur(), g && g(f);
            } catch (t) {
              console.warn(
                "Copy didn't work; this browser doesn't permit that."
              );
            }
            Wv.style.display = "none";
          }
        }
      }),
      (r = t && t.ownerSVGElement)
        ? (e.pathColor && y.set(t, { stroke: e.pathColor }),
          e.pathWidth && y.set(t, { strokeWidth: e.pathWidth }),
          e.pathOpacity && y.set(t, { opacity: e.pathOpacity }))
        : ((o =
            (a &&
              n.ownerSVGElement &&
              n.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"),
          a
            ? ((r = n.ownerSVGElement),
              (s = n.getBBox()),
              (c = (a = (n.transform.baseVal.consolidate() || Kv).matrix).e),
              (h = a.f),
              (D.x = s.x),
              (D.y = s.y))
            : ((r = Bv("svg", o)),
              (u = !0),
              zv.appendChild(r),
              r.setAttribute("viewBox", "0 0 100 100"),
              r.setAttribute("class", "motion-path-helper"),
              (r.style.cssText =
                "overflow:visible; background-color: transparent; position:absolute; z-index:5000; width:100px; height:100px; top:" +
                (p.top - h) +
                "px; left:" +
                (p.left - c) +
                "px;")),
          (s =
            Uv(t) && !qv.test(t)
              ? t
              : (function (t, e) {
                  for (
                    var n = [0, 31, 8, 58, 24, 75, 40, 90, 69, 100, 100, 100],
                      r = 0;
                    r < n.length;
                    r += 2
                  )
                    (n[r] += t), (n[r + 1] += e);
                  return "M" + t + "," + e + "C" + n.join(",");
                })(c, h)),
          (t = Bv("path", o)).setAttribute("d", s),
          t.setAttribute("vector-effect", "non-scaling-stroke"),
          (t.style.cssText =
            "fill:transparent; stroke-width:" +
            (e.pathWidth || 3) +
            "; stroke:" +
            (e.pathColor || "#555") +
            "; opacity:" +
            (e.pathOpacity || 0.6)),
          r.appendChild(t)),
      (D.x || D.y) && y.set(t, { x: D.x, y: D.y }),
      "selected" in e || (e.selected = !0),
      "anchorSnap" in e ||
        (e.anchorSnap = function (t) {
          t.x * t.x + t.y * t.y < 16 && (t.x = t.y = 0);
        }),
      (l = i && i.parent && "nested" === i.parent.data ? i.parent.parent : i),
      (e.onPress = function () {
        l.pause(0);
      }),
      (e.onRelease = e.onDeleteAnchor =
        function () {
          i.invalidate(), l.restart();
        }),
      (this.editor = kv.create(t, e)),
      e.center &&
        y.set(n, { transformOrigin: "50% 50%", xPercent: -50, yPercent: -50 }),
      i
        ? (i.vars.motionPath.path
            ? (i.vars.motionPath.path = t)
            : (i.vars.motionPath = { path: t }),
          l.parent !== y.globalTimeline &&
            y.globalTimeline.add(
              l,
              (function (t) {
                for (var e = t.totalTime(); t; )
                  (e = t.startTime() + e / (t.timeScale() || 1)),
                    (t = t.parent);
                return e;
              })(l) - l.delay()
            ),
          l.repeat(-1).repeatDelay(1))
        : (i = l =
            y.to(n, {
              motionPath: {
                path: t,
                start: e.start || 0,
                end: "end" in e ? e.end : 1,
                autoRotate: "autoRotate" in e && e.autoRotate,
                align: t,
                alignOrigin: e.alignOrigin,
              },
              duration: e.duration || 5,
              ease: e.ease || "power1.inOut",
              repeat: -1,
              repeatDelay: 1,
              paused: !e.path,
            })),
      (this.animation = i),
      jv(this),
      (this.kill = this.revert =
        function () {
          m.editor.kill(),
            v.parentNode && v.parentNode.removeChild(v),
            u && r.parentNode && r.parentNode.removeChild(r),
            l && l.revert();
        });
  }
  (Zv.register = Lv),
    (Zv.create = function (t, e) {
      return new Zv(t, e);
    }),
    (Zv.editPath = function (t, e) {
      return kv.create(t, e);
    }),
    (Zv.version = "3.13.0");
  function Qv() {
    return "undefined" != typeof window;
  }
  function Jv() {
    return J || (Qv() && (J = window.gsap) && J.registerPlugin && J);
  }
  function t_(t) {
    return tt.maxScroll(t || n_);
  }
  (g_.register = function (t) {
    return (
      e_ ||
        ((J = t || Jv()),
        Qv() &&
          window.document &&
          ((n_ = window),
          (r_ = document),
          (i_ = r_.documentElement),
          (o_ = r_.body)),
        J &&
          ((s_ = J.utils.toArray),
          (a_ = J.utils.clamp),
          (u_ = J.parseEase("expo")),
          (p_ = J.core.context || function () {}),
          (tt = J.core.globals().ScrollTrigger),
          J.core.globals("ScrollSmoother", g_),
          o_ &&
            tt &&
            ((f_ = J.delayedCall(0.2, function () {
              return tt.isRefreshing || (l_ && l_.refresh());
            }).pause()),
            (c_ = tt.core._getVelocityProp),
            (h_ = tt.core._inputObserver),
            (g_.refresh = tt.refresh),
            (e_ = 1)))),
      e_
    );
  }),
    i(g_, [
      {
        key: "progress",
        get: function () {
          return this.scrollTrigger
            ? this.scrollTrigger.animation._time / 100
            : 0;
        },
      },
    ]);
  var J,
    e_,
    n_,
    r_,
    i_,
    o_,
    s_,
    a_,
    tt,
    l_,
    u_,
    c_,
    h_,
    p_,
    f_,
    d_ = g_;
  function g_(e) {
    function n() {
      return A.update(-F);
    }
    function r(t) {
      t.update();
      var e = t.getTween();
      e && (e.pause(), (e._time = e._dur), (e._tTime = e._tDur)),
        (v = !1),
        t.animation.progress(t.progress, !0);
    }
    function i(t) {
      return arguments.length
        ? ((k.y = -(t = t < 0 ? 0 : t)),
          (v = !0),
          f ? (F = -t) : O(-t),
          tt.isRefreshing ? l.update() : E(t / P),
          this)
        : -F;
    }
    function o(t) {
      (x.scrollTop = 0),
        (t.target.contains && t.target.contains(x)) ||
          (H && !1 === H(_, t)) ||
          (tt.isInViewport(t.target) ||
            t.target === I ||
            _.scrollTo(t.target, !1, "center center"),
          (I = t.target));
    }
    function s() {
      return tt.addEventListener("refresh", K);
    }
    function L(s, t, e, n, r) {
      function i() {
        (t = d()),
          (e = parseFloat(g().value)),
          (l = parseFloat(t.value) || 1),
          (c = "auto" === t.value),
          (p =
            c || (u && u._startClamp && u.start <= 0) || _.offset
              ? 0
              : u && u._endClamp && u.end === t_()
              ? 1
              : 0.5),
          h && h.kill(),
          (h =
            e && J.to(s, { ease: u_, overwrite: !1, y: "+=0", duration: e })),
          u && ((u.ratio = l), (u.autoSpeed = c));
      }
      function a() {
        (v.y = m + "px"), v.renderTransform(1), i();
      }
      function o(t) {
        var e, n, r, i, o;
        c
          ? (a(),
            (e = s),
            (n = a_(0, 1, -t.start / (t.end - t.start))),
            (i = e.parentNode || i_),
            (e = e.getBoundingClientRect()),
            (i = i.getBoundingClientRect()),
            (o = i.top - e.top),
            (e = i.bottom - e.bottom),
            (o = (Math.abs(o) > Math.abs(e) ? o : e) / (1 - n)),
            (e = -o * n),
            0 < o &&
              ((i =
                0.5 == (r = i.height / (n_.innerHeight + i.height))
                  ? 2 * i.height
                  : 2 *
                    Math.min(i.height, Math.abs((-o * r) / (2 * r - 1))) *
                    (n || 1)),
              (e += n ? -i * n : -i / 2),
              (o += i)),
            (y = (r = { change: o, offset: e }).change),
            (f = r.offset))
          : ((f = _.offset || 0), (y = (t.end - t.start - f) * (1 - l))),
          _.forEach(function (t) {
            return (y -= t.distance * (1 - l));
          }),
          (t.offset = y || 0.001),
          t.vars.onUpdate(t),
          h && h.progress(1);
      }
      r = ("function" == typeof r ? r(n, s) : r) || 0;
      var l,
        u,
        c,
        h,
        p,
        f,
        d = Q("speed", t, n, s),
        g = Q("lag", e, n, s),
        m = J.getProperty(s, "y"),
        v = s._gsap,
        _ = [],
        D = [],
        y = 0;
      return (
        i(),
        (1 !== l || c || h) &&
          (o(
            (u = tt.create({
              trigger: c ? s.parentNode : s,
              start: function () {
                return t.clamp
                  ? "clamp(top bottom+=" + r + ")"
                  : "top bottom+=" + r;
              },
              end: function () {
                return t.value < 0
                  ? "max"
                  : t.clamp
                  ? "clamp(bottom top-=" + r + ")"
                  : "bottom top-=" + r;
              },
              scroller: x,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: a,
              onRefresh: o,
              onKill: function (t) {
                t = b.indexOf(t);
                0 <= t && b.splice(t, 1), a();
              },
              onUpdate: function (t) {
                var e,
                  n,
                  r,
                  i = m + y * (t.progress - p),
                  o = _.length,
                  s = 0;
                if (t.offset) {
                  if (o) {
                    for (n = -F, r = t.end; o--; ) {
                      if (
                        (e = _[o]).trig.isActive ||
                        (n >= e.start && n <= e.end)
                      )
                        return void (
                          h &&
                          ((e.trig.progress +=
                            e.trig.direction < 0 ? 0.001 : -0.001),
                          e.trig.update(0, 0, 1),
                          h.resetTo("y", parseFloat(v.y), -S, !0),
                          M && h.progress(1))
                        );
                      n > e.end && (s += e.distance), (r -= e.distance);
                    }
                    i =
                      m +
                      s +
                      y *
                        ((J.utils.clamp(t.start, t.end, n) - t.start - s) /
                          (r - t.start) -
                          p);
                  }
                  D.length &&
                    !c &&
                    D.forEach(function (t) {
                      return t(i - s);
                    }),
                    (t = i + f),
                    (i = Math.round(1e5 * t) / 1e5 || 0),
                    h
                      ? (h.resetTo("y", i, -S, !0), M && h.progress(1))
                      : ((v.y = i + "px"), v.renderTransform(1));
                }
              },
            }))
          ),
          (J.core.getCache(u.trigger).stRevert = $),
          (u.startY = m),
          (u.pins = _),
          (u.markers = D),
          (u.ratio = l),
          (u.autoSpeed = c),
          (s.style.willChange = "transform")),
        u
      );
    }
    var a,
      x,
      t,
      l,
      b,
      u,
      c,
      h,
      p,
      f,
      d,
      N,
      g,
      m,
      v,
      I,
      _ = this,
      D =
        (e_ ||
          g_.register(J) ||
          console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        (e = this.vars = e || {}),
        l_ && l_.kill(),
        p_((l_ = this)),
        e),
      X = D.smoothTouch,
      z = D.onUpdate,
      Y = D.onStop,
      y = D.smooth,
      H = D.onFocusIn,
      w = D.normalizeScroll,
      V = D.wholePixels,
      j = this,
      C = e.effectsPrefix || "",
      E = tt.getScrollFunc(n_),
      T =
        1 === tt.isTouch
          ? !0 === X
            ? 0.8
            : parseFloat(X) || 0
          : 0 === y || !1 === y
          ? 0
          : parseFloat(y) || 0.8,
      P = (T && +e.speed) || 1,
      F = 0,
      S = 0,
      M = 1,
      A = c_(0),
      k = { y: 0 },
      W = function () {
        return (a.style.overflow = "visible");
      },
      O = function (t, e) {
        ((t !== F && !f) || e) &&
          (V && (t = Math.round(t)),
          T &&
            ((a.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              t +
              ", 0, 1)"),
            (a._gsap.y = t + "px")),
          (S = t - F),
          (F = t),
          tt.isUpdating || g_.isRefreshing || tt.update());
      },
      B =
        "undefined" != typeof ResizeObserver &&
        !1 !== e.autoResize &&
        new ResizeObserver(function () {
          var t;
          tt.isRefreshing || ((t = t_(x) * P) < -F && i(t), f_.restart(!0));
        }),
      q = function (e, t) {
        if (e < t.start) return e;
        var n = isNaN(t.ratio) ? 1 : t.ratio,
          r = t.end - t.start,
          i = e - t.start,
          o = t.offset || 0,
          s = t.pins || [],
          a = s.offset || 0,
          t =
            (t._startClamp && t.start <= 0) || (t.pins && t.pins.offset)
              ? 0
              : t._endClamp && t.end === t_()
              ? 1
              : 0.5;
        return (
          s.forEach(function (t) {
            (r -= t.distance), t.nativeStart <= e && (i -= t.distance);
          }),
          a && (i *= (r - a / n) / r),
          e + (i - o * t) / n - i
        );
      },
      U = function t(e, n, r) {
        r || (e.pins.length = e.pins.offset = 0);
        for (
          var i, o, s, a, l = e.pins, u = e.markers, c = 0;
          c < n.length;
          c++
        )
          if (
            ((a = n[c]),
            e.trigger &&
              a.trigger &&
              e !== a &&
              (a.trigger === e.trigger ||
                a.pinnedContainer === e.trigger ||
                e.trigger.contains(a.trigger)) &&
              ((o = a._startNative || a._startClamp || a.start),
              (s = a._endNative || a._endClamp || a.end),
              (i = q(o, e)),
              (s = a.pin && 0 < s ? i + (s - o) : q(s, e)),
              a.setPositions(
                i,
                s,
                !0,
                (a._startClamp ? Math.max(0, i) : i) - o
              ),
              a.markerStart &&
                u.push(J.quickSetter([a.markerStart, a.markerEnd], "y", "px")),
              a.pin && 0 < a.end && !r))
          ) {
            if (((s = a.end - a.start), (i = e._startClamp && a.start < 0))) {
              if (0 < e.start)
                return (
                  e.setPositions(0, e.end + (e._startNative - e.start), !0),
                  void t(e, n)
                );
              (s += a.start), (l.offset = -a.start);
            }
            l.push({
              start: a.start,
              nativeStart: o,
              end: a.end,
              distance: s,
              trig: a,
            }),
              e.setPositions(e.start, e.end + (i ? -a.start : s), !0);
          }
      },
      G = function (e, n) {
        b.forEach(function (t) {
          return U(t, e, n);
        });
      },
      K = function () {
        (i_ = r_.documentElement),
          (o_ = r_.body),
          W(),
          requestAnimationFrame(W),
          b &&
            (tt.getAll().forEach(function (t) {
              (t._startNative = t.start), (t._endNative = t.end);
            }),
            b.forEach(function (t) {
              var e,
                n = t._startClamp || t.start,
                r = t.autoSpeed
                  ? Math.min(t_(), t.end)
                  : n + Math.abs((t.end - n) / t.ratio),
                i = r - t.end;
              (r -= i / 2) < (n -= i / 2) && ((e = n), (n = r), (r = e)),
                t._startClamp && n < 0
                  ? ((i = (r = t.ratio < 0 ? t_() : t.end / t.ratio) - t.end),
                    (n = 0))
                  : (t.ratio < 0 || (t._endClamp && r >= t_())) &&
                    (i =
                      ((r = t_()) -
                        (n =
                          t.ratio < 0 || 1 < t.ratio
                            ? 0
                            : r - (r - t.start) / t.ratio)) *
                        t.ratio -
                      (t.end - t.start)),
                (t.offset = i || 1e-4),
                (t.pins.length = t.pins.offset = 0),
                t.setPositions(n, r, !0);
            }),
            G(tt.sort())),
          A.reset();
      },
      Z = function () {
        return (
          b &&
          b.forEach(function (t) {
            return t.vars.onRefresh(t);
          })
        );
      },
      $ = function () {
        return (
          b &&
            b.forEach(function (t) {
              return t.vars.onRefreshInit(t);
            }),
          Z
        );
      },
      Q = function (n, r, i, o) {
        return function () {
          var t = "function" == typeof r ? r(i, o) : r,
            e =
              (t ||
                0 === t ||
                (t =
                  o.getAttribute("data-" + C + n) || ("speed" === n ? 1 : 0)),
              o.setAttribute("data-" + C + n, t),
              "clamp(" === (t + "").substr(0, 6));
          return { clamp: e, value: e ? t.substr(6, t.length - 7) : t };
        };
      };
    function R() {
      return (
        (t = a.clientHeight),
        (a.style.overflow = "visible"),
        (o_.style.height = n_.innerHeight + (t - n_.innerHeight) / P + "px"),
        t - n_.innerHeight
      );
    }
    s(),
      tt.addEventListener("killAll", s),
      J.delayedCall(0.5, function () {
        return (M = 0);
      }),
      (this.scrollTop = i),
      (this.scrollTo = function (t, e, n) {
        n = J.utils.clamp(0, t_(), isNaN(t) ? _.offset(t, n, !!e && !f) : +t);
        e
          ? f
            ? J.to(_, {
                duration: T,
                scrollTop: n,
                overwrite: "auto",
                ease: u_,
              })
            : E(n)
          : i(n);
      }),
      (this.offset = function (t, e, n) {
        var r = (t = s_(t)[0]).style.cssText,
          e = tt.create({ trigger: t, start: e || "top top" });
        return (
          b && (M ? tt.refresh() : G([e], !0)),
          (n = e.start / (n ? P : 1)),
          e.kill(!1),
          (t.style.cssText = r),
          (J.core.getCache(t).uncache = 1),
          n
        );
      }),
      (this.content = function (t) {
        return arguments.length
          ? ((t =
              s_(t || "#smooth-content")[0] ||
              console.warn("ScrollSmoother needs a valid content element.") ||
              o_.children[0]) !== a &&
              ((p = (a = t).getAttribute("style") || ""),
              B && B.observe(a),
              J.set(a, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0",
              }),
              T || J.set(a, { clearProps: "transform" })),
            this)
          : a;
      }),
      (this.wrapper = function (t) {
        return arguments.length
          ? ((x =
              s_(t || "#smooth-wrapper")[0] ||
              ((t = a),
              (e = r_.querySelector(".ScrollSmoother-wrapper")) ||
                ((e = r_.createElement("div")).classList.add(
                  "ScrollSmoother-wrapper"
                ),
                t.parentNode.insertBefore(e, t),
                e.appendChild(t)),
              e)),
            (h = x.getAttribute("style") || ""),
            R(),
            J.set(
              x,
              T
                ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto",
                  }
            ),
            this)
          : x;
        var e;
      }),
      (this.effects = function (t, e) {
        if (((b = b || []), !t)) return b.slice(0);
        (t = s_(t)).forEach(function (t) {
          for (var e = b.length; e--; ) b[e].trigger === t && b[e].kill();
        });
        for (
          var n,
            r = (e = e || {}),
            i = r.speed,
            o = r.lag,
            s = r.effectsPadding,
            a = [],
            l = 0;
          l < t.length;
          l++
        )
          (n = L(t[l], i, o, l, s)) && a.push(n);
        return b.push.apply(b, a), !1 !== e.refresh && tt.refresh(), a;
      }),
      (this.sections = function (t, e) {
        if (((u = u || []), !t)) return u.slice(0);
        t = s_(t).map(function (e) {
          return tt.create({
            trigger: e,
            start: "top 120%",
            end: "bottom -20%",
            onToggle: function (t) {
              (e.style.opacity = t.isActive ? "1" : "0"),
                (e.style.pointerEvents = t.isActive ? "all" : "none");
            },
          });
        });
        return e && e.add ? u.push.apply(u, t) : (u = t.slice(0)), t;
      }),
      this.content(e.content),
      this.wrapper(e.wrapper),
      (this.render = function (t) {
        return O(t || 0 === t ? t : F);
      }),
      (this.getVelocity = function () {
        return A.getVelocity(-F);
      }),
      tt.scrollerProxy(x, {
        scrollTop: i,
        scrollHeight: function () {
          return R() && o_.scrollHeight;
        },
        fixedMarkers: !1 !== e.fixedMarkers && !!T,
        content: a,
        getBoundingClientRect: function () {
          return {
            top: 0,
            left: 0,
            width: n_.innerWidth,
            height: n_.innerHeight,
          };
        },
      }),
      tt.defaults({ scroller: x });
    D = tt.getAll().filter(function (t) {
      return t.scroller === n_ || t.scroller === x;
    });
    D.forEach(function (t) {
      return t.revert(!0, !0);
    }),
      (l = tt.create({
        animation: J.fromTo(
          k,
          {
            y: function () {
              return (m = 0);
            },
          },
          {
            y: function () {
              return (m = 1), -R();
            },
            immediateRender: !1,
            ease: "none",
            data: "ScrollSmoother",
            duration: 100,
            onUpdate: function () {
              var t;
              m &&
                ((t = v) && (r(l), (k.y = F)), O(k.y, t), n(), z && !f && z(j));
            },
          }
        ),
        onRefreshInit: function (t) {
          var e;
          g_.isRefreshing ||
            ((g_.isRefreshing = !0),
            b &&
              ((e = tt.getAll().filter(function (t) {
                return !!t.pin;
              })),
              b.forEach(function (n) {
                n.vars.pinnedContainer ||
                  e.forEach(function (t) {
                    var e;
                    t.pin.contains(n.trigger) &&
                      (((e = n.vars).pinnedContainer = t.pin),
                      (n.vars = null),
                      n.init(e, n.animation));
                  });
              })),
            (t = t.getTween()),
            (g = t && t._end > t._dp._time),
            (N = F),
            (k.y = 0),
            T &&
              (1 === tt.isTouch && (x.style.position = "absolute"),
              (x.scrollTop = 0),
              1 === tt.isTouch && (x.style.position = "fixed")));
        },
        onRefresh: function (t) {
          t.animation.invalidate(),
            t.setPositions(t.start, R() / P),
            g || r(t),
            (k.y = -E() * P),
            O(k.y),
            M ||
              (g && (v = !1),
              t.animation.progress(J.utils.clamp(0, 1, N / P / -t.end))),
            g && ((t.progress -= 0.001), t.update()),
            (g_.isRefreshing = !1);
        },
        id: "ScrollSmoother",
        scroller: n_,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: function () {
          return R() / P;
        },
        onScrubComplete: function () {
          A.reset(), Y && Y(_);
        },
        scrub: T || !0,
      })),
      (this.smooth = function (t) {
        return (
          arguments.length &&
            ((P = ((T = t || 0) && +e.speed) || 1), l.scrubDuration(t)),
          l.getTween() ? l.getTween().duration() : 0
        );
      }),
      l.getTween() && (l.getTween().vars.ease = e.ease || u_),
      (this.scrollTrigger = l),
      e.effects &&
        this.effects(
          !0 === e.effects
            ? "[data-" + C + "speed], [data-" + C + "lag]"
            : e.effects,
          { effectsPadding: e.effectsPadding, refresh: !1 }
        ),
      e.sections &&
        this.sections(!0 === e.sections ? "[data-section]" : e.sections),
      D.forEach(function (t) {
        (t.vars.scroller = x), t.revert(!1, !0), t.init(t.vars, t.animation);
      }),
      (this.paused = function (t, e) {
        return arguments.length
          ? (!!f !== t &&
              (t
                ? (l.getTween() && l.getTween().pause(),
                  E(-F / P),
                  A.reset(),
                  (d = tt.normalizeScroll()) && d.disable(),
                  ((f = tt.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function () {
                      return i(-F);
                    },
                  })).nested = h_(i_, "wheel,touch,scroll", !0, !1 !== e)))
                : (f.nested.kill(),
                  f.kill(),
                  (f = 0),
                  d && d.enable(),
                  (l.progress = (-F / P - l.start) / (l.end - l.start)),
                  r(l))),
            this)
          : !!f;
      }),
      (this.kill = this.revert =
        function () {
          _.paused(!1), r(l), l.kill();
          for (var t = (b || []).concat(u || []), e = t.length; e--; )
            t[e].kill();
          tt.scrollerProxy(x),
            tt.removeEventListener("killAll", s),
            tt.removeEventListener("refresh", K),
            (x.style.cssText = h),
            (a.style.cssText = p);
          var n = tt.defaults({});
          n && n.scroller === x && tt.defaults({ scroller: n_ }),
            _.normalizer && tt.normalizeScroll(!1),
            clearInterval(c),
            (l_ = null),
            B && B.disconnect(),
            o_.style.removeProperty("height"),
            n_.removeEventListener("focusin", o);
        }),
      (this.refresh = function (t, e) {
        return l.refresh(t, e);
      }),
      w &&
        (this.normalizer = tt.normalizeScroll(
          !0 === w ? { debounce: !0, content: !T && a } : w
        )),
      tt.config(e),
      "scrollBehavior" in n_.getComputedStyle(o_) &&
        J.set([o_, i_], { scrollBehavior: "auto" }),
      n_.addEventListener("focusin", o),
      (c = setInterval(n, 250)),
      "loading" !== r_.readyState &&
        requestAnimationFrame(function () {
          return tt.refresh();
        });
  }
  (d_.version = "3.13.0"),
    (d_.create = function (t) {
      return l_ && t && l_.content() === s_(t.content)[0] ? l_ : new d_(t);
    }),
    (d_.get = function () {
      return l_;
    }),
    Jv() && J.registerPlugin(d_);
  function m_(t) {
    return T_(t).filter(function (t) {
      return t instanceof HTMLElement;
    });
  }
  function v_(t, e) {
    if (e) {
      var n,
        r,
        i,
        o = new Set(t.join("").match(e) || P_),
        s = t.length;
      if (o.size)
        for (; -1 < --s; )
          for (var a, l = t[s], u = d(o); !(a = u()).done; )
            if ((r = a.value).startsWith(l) && r.length > l.length) {
              for (
                n = 0, i = l;
                r.startsWith((i += t[s + ++n])) && i.length < r.length;

              );
              if (n && i.length === r.length) {
                (t[s] = r), t.splice(s + 1, n);
                break;
              }
            }
    }
    return t;
  }
  function __(t) {
    "inline" === window.getComputedStyle(t).display &&
      (t.style.display = "inline-block");
  }
  function D_(t, e, n) {
    e.insertBefore("string" == typeof t ? document.createTextNode(t) : t, n);
  }
  function y_(r, t, i) {
    function e(t) {
      var e = document.createElement(s),
        n = i.length + 1;
      return (
        o && (e.className = o + (c ? " " + o + n : "")),
        l && e.style.setProperty("--" + r, n + ""),
        "none" !== a && e.setAttribute("aria-hidden", "true"),
        "span" !== s &&
          ((e.style.position = "relative"), (e.style.display = u)),
        (e.textContent = t),
        i.push(e),
        e
      );
    }
    var o = t[r + "sClass"] || "",
      n = t.tag,
      s = void 0 === n ? "div" : n,
      a = void 0 === (n = t.aria) ? "auto" : n,
      l = void 0 !== (n = t.propIndex) && n,
      u = "line" === r ? "block" : "inline-block",
      c = -1 < o.indexOf("++");
    return c && (o = o.replace("++", "")), (e.collection = i), e;
  }
  function x_(t, e, n, r, i, o, s, a, l, u) {
    for (
      var c,
        h,
        p,
        f,
        d,
        g,
        m,
        v,
        _,
        D,
        y,
        x,
        b,
        w,
        C,
        E,
        T = Array.from(t.childNodes),
        P = 0,
        F = e.wordDelimiter,
        S = e.reduceWhiteSpace,
        M = void 0 === S || S,
        L = e.prepareText,
        N = t.getBoundingClientRect(),
        A = N,
        I =
          !M && "pre" === window.getComputedStyle(t).whiteSpace.substring(0, 3),
        k = 0,
        O = n.collection,
        B =
          "object" == typeof F
            ? ((c = F.delimiter || F), F.replaceWith || "")
            : "" === F
            ? ""
            : F || " ",
        R = " " !== B;
      P < T.length;
      P++
    )
      if (3 === (h = T[P]).nodeType) {
        for (
          b = h.textContent || "",
            M
              ? (b = b.replace(S_, " "))
              : I && (b = b.replace(/\n/g, B + "\n")),
            L && (b = L(b, t)),
            h.textContent = b,
            C = (p = B || c ? b.split(c || B) : b.match(a) || P_)[p.length - 1],
            g = R ? " " === C.slice(-1) : !C,
            C || p.pop(),
            A = N,
            (d = R ? " " === p[0].charAt(0) : !p[0]) && D_(" ", t, h),
            p[0] || p.shift(),
            v_(p, l),
            (o && u) || (h.textContent = ""),
            m = 1;
          m <= p.length;
          m++
        )
          if (
            ((w = p[m - 1]),
            !M &&
              I &&
              "\n" === w.charAt(0) &&
              (null != (v = h.previousSibling) && v.remove(),
              D_(document.createElement("br"), t, h),
              (w = w.slice(1))),
            M || "" !== w)
          )
            if (" " === w) t.insertBefore(document.createTextNode(" "), h);
            else {
              if (
                (R && " " === w.charAt(0) && D_(" ", t, h),
                k && 1 === m && !d && -1 < O.indexOf(k.parentNode)
                  ? (f = O[O.length - 1]).appendChild(
                      document.createTextNode(r ? "" : w)
                    )
                  : ((f = n(r ? "" : w)),
                    D_(f, t, h),
                    k && 1 === m && !d && f.insertBefore(k, f.firstChild)),
                r)
              )
                for (
                  _ = E_
                    ? v_(
                        [].concat(E_.segment(w)).map(function (t) {
                          return t.segment;
                        }),
                        l
                      )
                    : w.match(a) || P_,
                    E = 0;
                  E < _.length;
                  E++
                )
                  f.appendChild(
                    " " === _[E] ? document.createTextNode(" ") : r(_[E])
                  );
              if (o && u) {
                if (
                  ((b = h.textContent = b.substring(w.length + 1, b.length)),
                  (v = f.getBoundingClientRect()).top > A.top &&
                    v.left <= A.left)
                ) {
                  for (D = t.cloneNode(), y = t.childNodes[0]; y && y !== f; )
                    (y = (x = y).nextSibling), D.appendChild(x);
                  t.parentNode.insertBefore(D, t), i && __(D);
                }
                A = v;
              }
              (m < p.length || g) &&
                D_(
                  m >= p.length ? " " : R && " " === w.slice(-1) ? " " + B : B,
                  t,
                  h
                );
            }
          else D_(B, t, h);
        t.removeChild(h), (k = 0);
      } else
        1 === h.nodeType &&
          ((k =
            s && -1 < s.indexOf(h)
              ? (-1 < O.indexOf(h.previousSibling) &&
                  O[O.length - 1].appendChild(h),
                h)
              : (x_(h, e, n, r, i, o, s, a, l, !0), 0)),
          i && __(h));
  }
  var b_,
    w_,
    C_,
    E_ = "undefined" != typeof Intl ? new Intl.Segmenter() : 0,
    T_ = function (t) {
      return "string" == typeof t
        ? T_(document.querySelectorAll(t))
        : "length" in t
        ? Array.from(t)
        : [t];
    },
    P_ = [],
    F_ = function () {},
    S_ = /\s+/g,
    M_ = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    A_ = { left: 0, top: 0, width: 0, height: 0 },
    n =
      (((n = k_.prototype).split = function (x) {
        var b = this,
          t =
            (this.isSplit && this.revert(),
            (this.vars = x = x || this.vars || {}),
            this.vars),
          e = t.type,
          e = void 0 === e ? "chars,words,lines" : e,
          n = t.aria,
          w = void 0 === n ? "auto" : n,
          n = t.deepSlice,
          C = void 0 === n || n,
          E = t.smartWrap,
          n = t.onSplit,
          r = t.autoSplit,
          r = void 0 !== r && r,
          i = t.specialChars,
          t = t.mask,
          T = -1 < e.indexOf("lines"),
          P = -1 < e.indexOf("chars"),
          F = -1 < e.indexOf("words"),
          S = P && !F && !T,
          M =
            i &&
            ("push" in i ? new RegExp("(?:" + i.join("|") + ")", "gu") : i),
          A = M ? new RegExp(M.source + "|" + M_.source, "gu") : M_,
          k = !!x.ignore && m_(x.ignore),
          e = this._data,
          O = e.orig,
          i = e.animTime,
          o = e.obs;
        return (
          (P || F || T) &&
            (this.elements.forEach(function (t, e) {
              (O[e] = {
                element: t,
                html: t.innerHTML,
                ariaL: t.getAttribute("aria-label"),
                ariaH: t.getAttribute("aria-hidden"),
              }),
                "auto" === w
                  ? t.setAttribute("aria-label", (t.textContent || "").trim())
                  : "hidden" === w && t.setAttribute("aria-hidden", "true");
              var n,
                r,
                i,
                o,
                s,
                a,
                l,
                e = [],
                u = [],
                c = [],
                h = P ? y_("char", x, e) : null,
                p = y_("word", x, u);
              if ((x_(t, x, p, h, S, C && (T || S), k, A, M, !1), T)) {
                for (
                  var f,
                    d = T_(t.childNodes),
                    g =
                      ((o = t),
                      (s = d),
                      (a = y_("line", x, c)),
                      (l = window.getComputedStyle(o).textAlign || "left"),
                      function (t, e) {
                        var n = a("");
                        for (
                          n.style.textAlign = l, o.insertBefore(n, s[t]);
                          t < e;
                          t++
                        )
                          n.appendChild(s[t]);
                        n.normalize();
                      }),
                    m = [],
                    v = 0,
                    _ = d.map(function (t) {
                      return 1 === t.nodeType ? t.getBoundingClientRect() : A_;
                    }),
                    D = A_,
                    y = 0;
                  y < d.length;
                  y++
                )
                  1 === (f = d[y]).nodeType &&
                    (D =
                      "BR" === f.nodeName
                        ? (m.push(f), g(v, y + 1), _[(v = y + 1)])
                        : (y &&
                            _[y].top > D.top &&
                            _[y].left <= D.left &&
                            (g(v, y), (v = y)),
                          _[y]));
                v < y && g(v, y),
                  m.forEach(function (t) {
                    var e;
                    return null == (e = t.parentNode)
                      ? void 0
                      : e.removeChild(t);
                  });
              }
              if (!F) {
                for (y = 0; y < u.length; y++)
                  if (
                    ((n = u[y]),
                    P || !n.nextSibling || 3 !== n.nextSibling.nodeType)
                  )
                    if (E && !T) {
                      for (
                        (r = document.createElement("span")).style.whiteSpace =
                          "nowrap";
                        n.firstChild;

                      )
                        r.appendChild(n.firstChild);
                      n.replaceWith(r);
                    } else n.replaceWith.apply(n, n.childNodes);
                  else
                    (i = n.nextSibling) &&
                      3 === i.nodeType &&
                      ((i.textContent =
                        (n.textContent || "") + (i.textContent || "")),
                      n.remove());
                (u.length = 0), t.normalize();
              }
              (p = b.lines).push.apply(p, c),
                (h = b.words).push.apply(h, u),
                (t = b.chars).push.apply(t, e);
            }),
            t &&
              this[t] &&
              (e = this.masks).push.apply(
                e,
                this[t].map(function (t) {
                  var e = t.cloneNode();
                  return (
                    t.replaceWith(e),
                    e.appendChild(t),
                    t.className &&
                      (e.className = t.className.replace(
                        /(\b\w+\b)/g,
                        "$1-mask"
                      )),
                    (e.style.overflow = "clip"),
                    e
                  );
                })
              )),
          (this.isSplit = !0),
          w_ &&
            (r
              ? w_.addEventListener("loadingdone", this._split)
              : "loading" === w_.status &&
                console.warn("SplitText called before fonts loaded")),
          (e = n && n(this)) &&
            e.totalTime &&
            (this._data.anim = i ? e.totalTime(i) : e),
          T &&
            r &&
            this.elements.forEach(function (t, e) {
              (O[e].width = t.offsetWidth), o && o.observe(t);
            }),
          this
        );
      }),
      (n.revert = function () {
        var t = this._data,
          e = t.orig,
          n = t.anim,
          t = t.obs;
        return (
          t && t.disconnect(),
          e.forEach(function (t) {
            var e = t.element,
              n = t.html,
              r = t.ariaL,
              t = t.ariaH;
            (e.innerHTML = n),
              r
                ? e.setAttribute("aria-label", r)
                : e.removeAttribute("aria-label"),
              t
                ? e.setAttribute("aria-hidden", t)
                : e.removeAttribute("aria-hidden");
          }),
          (this.chars.length =
            this.words.length =
            this.lines.length =
            e.length =
            this.masks.length =
              0),
          (this.isSplit = !1),
          null != w_ && w_.removeEventListener("loadingdone", this._split),
          n && ((this._data.animTime = n.totalTime()), n.revert()),
          null != (e = (t = this.vars).onRevert) && e.call(t, this),
          this
        );
      }),
      (k_.create = function (t, e) {
        return new k_(t, e);
      }),
      (k_.register = function (t) {
        (b_ = b_ || t || window.gsap) &&
          ((T_ = b_.utils.toArray), (F_ = b_.core.context || F_)),
          !C_ && 0 < window.innerWidth && ((w_ = document.fonts), (C_ = !0));
      }),
      k_);
  function k_(t, e) {
    function n() {
      for (var t = o.length; t--; ) {
        var e,
          n = (e = o[t]).element.offsetWidth;
        if (n !== e.width) return (e.width = n), void i._split();
      }
    }
    var r,
      i = this,
      o =
        ((this.isSplit = !1),
        C_ || O_.register(window.gsap),
        (this.elements = m_(t)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = e),
        (this._split = function () {
          return i.isSplit && i.split(i.vars);
        }),
        []);
    (this._data = {
      orig: o,
      obs:
        "undefined" != typeof ResizeObserver &&
        new ResizeObserver(function () {
          clearTimeout(r), (r = setTimeout(n, 200));
        }),
    }),
      F_(this),
      this.split(e);
  }
  n.version = "3.13.0";
  var O_ = n,
    n = pi.registerPlugin(fo) || pi,
    B_ = n.core.Tween;
  (Bt.Back = Ci),
    (Bt.Bounce = Ti),
    (Bt.CSSPlugin = fo),
    (Bt.CSSRulePlugin = vl),
    (Bt.Circ = Si),
    (Bt.Cubic = Di),
    (Bt.CustomBounce = Y0),
    (Bt.CustomEase = hs),
    (Bt.CustomWiggle = sg),
    (Bt.Draggable = il),
    (Bt.DrawSVGPlugin = c0),
    (Bt.EasePack = $l),
    (Bt.EaselPlugin = Nl),
    (Bt.Elastic = wi),
    (Bt.Expo = Fi),
    (Bt.ExpoScaleEase = Kl),
    (Bt.Flip = nc),
    (Bt.GSDevTools = Kg),
    (Bt.InertiaPlugin = U1),
    (Bt.Linear = vi),
    (Bt.MorphSVGPlugin = iv),
    (Bt.MotionPathHelper = Zv),
    (Bt.MotionPathPlugin = e),
    (Bt.Observer = S),
    (Bt.Physics2DPlugin = x0),
    (Bt.PhysicsPropsPlugin = A0),
    (Bt.PixiPlugin = qh),
    (Bt.Power0 = t),
    (Bt.Power1 = fi),
    (Bt.Power2 = di),
    (Bt.Power3 = gi),
    (Bt.Power4 = mi),
    (Bt.Quad = _i),
    (Bt.Quart = yi),
    (Bt.Quint = xi),
    (Bt.RoughEase = Zl),
    (Bt.ScrambleTextPlugin = z0),
    (Bt.ScrollSmoother = d_),
    (Bt.ScrollToPlugin = cp),
    (Bt.ScrollTrigger = M),
    (Bt.Sine = Pi),
    (Bt.SlowMo = Gl),
    (Bt.SplitText = O_),
    (Bt.SteppedEase = Ei),
    (Bt.Strong = bi),
    (Bt.TextPlugin = Qf),
    (Bt.TimelineLite = Xn),
    (Bt.TimelineMax = Xn),
    (Bt.TweenLite = N),
    (Bt.TweenMax = B_),
    (Bt.VelocityTracker = p1),
    (Bt._getProxyProp = th),
    (Bt._getScrollFunc = Mc),
    (Bt._getTarget = Sc),
    (Bt._getVelocityProp = Ac),
    (Bt._horizontal = rh),
    (Bt._isViewport = Cc),
    (Bt._vertical = ih),
    (Bt.clamp = lt),
    (Bt.default = n),
    (Bt.distribute = ct),
    (Bt.getUnit = fn),
    (Bt.gsap = n),
    (Bt.interpolate = bt),
    (Bt.mapRange = xt),
    (Bt.normalize = gt),
    (Bt.pipe = ft),
    (Bt.random = _n),
    (Bt.selector = ut),
    (Bt.shuffle = vn),
    (Bt.snap = pt),
    (Bt.splitColor = bn),
    (Bt.toArray = mn),
    (Bt.unitize = dt),
    (Bt.wrap = Dt),
    (Bt.wrapYoyo = yt),
    Object.defineProperty(Bt, "__esModule", { value: !0 });
});
