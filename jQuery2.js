/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(e, t, n, r, i, o) {
    function s(e) {
        var t = e.length, n = rt.type(e);
        return "function" === n || rt.isWindow(e)?!1 : 1 === e.nodeType && t?!0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function a(e, t, n) {
        if (rt.isFunction(t))
            return rt.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return rt.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ft.test(t))
                return rt.filter(t, e, n);
            t = rt.filter(t, e)
        }
        return rt.grep(e, function(e) {
            return J.call(t, e) >= 0 !== n
        })
    }
    function u(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function l(e) {
        var t = vt[e] = {};
        return rt.each(e.match(yt) || [], function(e, n) {
            t[n]=!0
        }), t
    }
    function c() {
        tt.removeEventListener("DOMContentLoaded", c, !1), o.removeEventListener("load", c, !1), rt.ready()
    }
    function f() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = rt.expando + t.random()
    }
    function p(e, t, n) {
        var r;
        if (n === i && 1 === e.nodeType)
            if (r = "data-" + t.replace(Nt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n?!0 : "false" === n?!1 : "null" === n ? null : + n + "" === n?+n : Ct.test(n) ? rt.parseJSON(n) : n
                } catch (o) {}
                Tt.set(e, t, n)
            } else 
                n = i;
        return n
    }
    function d() {
        return !0
    }
    function h() {
        return !1
    }
    function g() {
        try {
            return tt.activeElement
        } catch (e) {}
    }
    function m(e, t) {
        return rt.nodeName(e, "table") && rt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function v(e) {
        var t = Bt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function x(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            wt.set(e[n], "globalEval", !t || wt.get(t[n], "globalEval"))
    }
    function b(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (wt.hasData(e) && (o = wt.access(e), s = wt.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++)
                        rt.event.add(t, i, l[i][n])
                    }
            Tt.hasData(e) && (a = Tt.access(e), u = rt.extend({}, a), Tt.set(t, u))
        }
    }
    function w(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*"): e.querySelectorAll ? e.querySelectorAll(t || "*"): [];
        return t === i || t && rt.nodeName(e, t) ? rt.merge([e], n) : n
    }
    function T(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Et.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function C(e, t) {
        var n, r = rt(t.createElement(e)).appendTo(t.body), i = o.getDefaultComputedStyle && (n = o.getDefaultComputedStyle(r[0])) ? n.display: rt.css(r[0], "display");
        return r.detach(), i
    }
    function N(e) {
        var t = tt, n = Xt[e];
        return n || (n = C(e, t), "none" !== n && n || (_t = (_t || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = _t[0].contentDocument, t.write(), t.close(), n = C(e, t), _t.detach()), Xt[e] = n), n
    }
    function k(e, t, n) {
        var r, o, s, a, u = e.style;
        return n = n || Vt(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || rt.contains(e.ownerDocument, e) || (a = rt.style(e, t)), Ut.test(a) && zt.test(t) && (r = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = o, u.maxWidth = s)), a !== i ? a + "" : a
    }
    function D(e, t) {
        return {
            get: function() {
                return e() ? (delete this.get, i) : (this.get = t).apply(this, arguments)
            }
        }
    }
    function S(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Zt.length; i--;)
            if (t = Zt[i] + n, t in e)
                return t;
        return r
    }
    function E(e, n, r) {
        var i = Gt.exec(n);
        return i ? t.max(0, i[1] - (r || 0)) + (i[2] || "px") : n
    }
    function j(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += rt.css(e, n + Dt[o], !0, i)), r ? ("content" === n && (s -= rt.css(e, "padding" + Dt[o], !0, i)), "margin" !== n && (s -= rt.css(e, "border" + Dt[o] + "Width", !0, i))) : (s += rt.css(e, "padding" + Dt[o], !0, i), "padding" !== n && (s += rt.css(e, "border" + Dt[o] + "Width", !0, i)));
        return s
    }
    function A(t, n, r) {
        var i=!0, o = "width" === n ? t.offsetWidth : t.offsetHeight, s = Vt(t), a = "border-box" === rt.css(t, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if (o = k(t, n, s), (0 > o || null == o) && (o = t.style[n]), Ut.test(o))
                return o;
            i = a && (et.boxSizingReliable() || o === t.style[n]), o = e(o) || 0
        }
        return o + j(t, n, r || (a ? "border" : "content"), i, s) + "px"
    }
    function L(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
            r = e[s], r.style && (o[s] = wt.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && St(r) && (o[s] = wt.access(r, "olddisplay", N(r.nodeName)))) : (i = St(r), "none" === n && i || wt.set(r, "olddisplay", i ? n : rt.css(r, "display"))));
        for (s = 0; a > s; s++)
            r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function q(e, t, n, r, i) {
        return new q.prototype.init(e, t, n, r, i)
    }
    function H() {
        return setTimeout(function() {
            en = i
        }), en = rt.now()
    }
    function O(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Dt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function F(e, t, n) {
        for (var r, i = (an[t] || []).concat(an["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function P(e, t, n) {
        var r, o, s, a, u, l, c, f, p = this, d = {}, h = e.style, g = e.nodeType && St(e), m = wt.get(e, "fxshow");
        n.queue || (u = rt._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, l = u.empty.fire, u.empty.fire = function() {
            u.unqueued || l()
        }), u.unqueued++, p.always(function() {
            p.always(function() {
                u.unqueued--, rt.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = rt.css(e, "display"), f = "none" === c ? wt.get(e, "olddisplay") || N(e.nodeName) : c, "inline" === f && "none" === rt.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], nn.exec(o)) {
                if (delete t[r], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o ||!m || m[r] === i)
                        continue;
                        g=!0
                }
                d[r] = m && m[r] || rt.style(e, r)
            } else 
                c = i;
        if (rt.isEmptyObject(d))
            "inline" === ("none" === c ? N(e.nodeName) : c) && (h.display = c);
        else {
            m ? "hidden"in m && (g = m.hidden) : m = wt.access(e, "fxshow", {}), s && (m.hidden=!g), g ? rt(e).show() : p.done(function() {
                rt(e).hide()
            }), p.done(function() {
                var t;
                wt.remove(e, "fxshow");
                for (t in d)
                    rt.style(e, t, d[t])
            });
            for (r in d)
                a = F(g ? m[r] : 0, r, p), r in m || (m[r] = a.start, g && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function M(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = rt.camelCase(n), i = t[r], o = e[n], rt.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = rt.cssHooks[r], s && "expand"in s) {
                o = s.expand(o), delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n], t[n] = i)
            } else 
                t[r] = i
    }
    function W(e, n, r) {
        var i, o, s = 0, a = sn.length, u = rt.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var n = en || H(), r = t.max(0, c.startTime + c.duration - n), i = r / c.duration || 0, s = 1 - i, a = 0, l = c.tweens.length; l > a; a++)
                c.tweens[a].run(s);
            return u.notifyWith(e, [c, s, r]), 1 > s && l ? r : (u.resolveWith(e, [c]), !1)
        }, c = u.promise({
            elem: e,
            props: rt.extend({}, n),
            opts: rt.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: n,
            originalOptions: r,
            startTime: en || H(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = rt.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r
            },
            stop: function(t) {
                var n = 0, r = t ? c.tweens.length: 0;
                if (o)
                    return this;
                for (o=!0; r > n; n++)
                    c.tweens[n].run(1);
                return t ? u.resolveWith(e, [c, t]) : u.rejectWith(e, [c, t]), this
            }
        }), f = c.props;
        for (M(f, c.opts.specialEasing);
        a > s;
        s++)if (i = sn[s].call(c, e, f, c.opts))
            return i;
        return rt.map(f, F, c), rt.isFunction(c.opts.start) && c.opts.start.call(e, c), rt.fx.timer(rt.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(yt) || [];
            if (rt.isFunction(n))
                for (; r = o[i++];)
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function B(e, t, n, r) {
        function o(u) {
            var l;
            return s[u]=!0, rt.each(e[u] || [], function(e, u) {
                var c = u(t, n, r);
                return "string" != typeof c || a || s[c] ? a?!(l = c) : i : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var s = {}, a = e === Dn;
        return o(t.dataTypes[0]) ||!s["*"] && o("*")
    }
    function I(e, t) {
        var n, r, o = rt.ajaxSettings.flatOptions || {};
        for (n in t)
            t[n] !== i && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && rt.extend(!0, e, r), e
    }
    function R(e, t, n) {
        for (var r, o, s, a, u = e.contents, l = e.dataTypes; "*" === l[0];)
            l.shift(), r === i && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in u)
                if (u[o] && u[o].test(r)) {
                    l.unshift(o);
                    break
                }
        if (l[0]in n)
            s = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                a || (a = o)
            }
            s = s || a
        }
        return s ? (s !== l[0] && l.unshift(s), n[s]) : i
    }
    function _(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o], !s)
                        for (i in l)
                            if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                s===!0 ? s = l[i] : l[i]!==!0 && (o = a[0], c.unshift(a[1]));
                                break
                            }
                            if (s!==!0)
                                if (s && e["throws"])
                                    t = s(t);
                                else 
                                    try {
                                        t = s(t)
                                    } catch (f) {
                                        return {
                                            state: "parsererror",
                                            error: s ? f: "No conversion from " + u + " to " + o
                                        }
                                    }
                                }
        return {
            state: "success",
            data: t
        }
    }
    function X(e, t, n, r) {
        var i;
        if (rt.isArray(t))
            rt.each(t, function(t, i) {
                n || An.test(e) ? r(e, i) : X(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== rt.type(t))
            r(e, t);
        else 
            for (i in t)
                X(e + "[" + i + "]", t[i], n, r)
            }
    function z(e) {
        return rt.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var U = [], V = U.slice, Y = U.concat, G = U.push, J = U.indexOf, K = {}, Q = K.toString, Z = K.hasOwnProperty, et = {}, tt = o.document, nt = "2.1.1", rt = function(e, t) {
        return new rt.fn.init(e, t)
    }, it = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ot = /^-ms-/, st = /-([\da-z])/gi, at = function(e, t) {
        return t.toUpperCase()
    };
    rt.fn = rt.prototype = {
        jquery: nt,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return V.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
        },
        pushStack: function(e) {
            var t = rt.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return rt.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(rt.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length, n =+ e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: U.sort,
        splice: U.splice
    }, rt.extend = rt.fn.extend = function() {
        var e, t, n, r, o, s, a = arguments[0] || {}, u = 1, l = arguments.length, c=!1;
        for ("boolean" == typeof a && (c = a, a = arguments[u] || {}, u++), "object" == typeof a || rt.isFunction(a) || (a = {}), u === l && (a = this, u--); l > u; u++)
            if (null != (e = arguments[u]))
                for (t in e)
                    n = a[t], r = e[t], a !== r && (c && r && (rt.isPlainObject(r) || (o = rt.isArray(r))) ? (o ? (o=!1, s = n && rt.isArray(n) ? n : []) : s = n && rt.isPlainObject(n) ? n : {}, a[t] = rt.extend(c, s, r)) : r !== i && (a[t] = r));
        return a
    }, rt.extend({
        expando: "jQuery" + (nt + t.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === rt.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(t) {
            return !rt.isArray(t) && t - e(t) >= 0
        },
        isPlainObject: function(e) {
            return "object" !== rt.type(e) || e.nodeType || rt.isWindow(e)?!1 : e.constructor&&!Z.call(e.constructor.prototype, "isPrototypeOf")?!1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[Q.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = rt.trim(e), e && (1 === e.indexOf("use strict") ? (t = tt.createElement("script"), t.text = e, tt.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(ot, "ms-").replace(st, at)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = s(e);
            if (n) {
                if (a)
                    for (; o > i && (r = t.apply(e[i], n), r!==!1); i++);
                else 
                    for (i in e)
                        if (r = t.apply(e[i], n), r===!1)
                            break
            } else if (a)
                for (; o > i && (r = t.call(e[i], i, e[i]), r!==!1); i++);
            else 
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r===!1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(it, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? rt.merge(n, "string" == typeof e ? [e] : e) : G.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t?-1 : J.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n =+ t.length, r = 0, i = e.length; n > r; r++)
                e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a=!n; s > o; o++)
                r=!t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = s(e), u = [];
            if (a)
                for (; o > i; i++)
                    r = t(e[i], i, n), null != r && u.push(r);
            else 
                for (i in e)
                    r = t(e[i], i, n), null != r && u.push(r);
            return Y.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), rt.isFunction(e) ? (r = V.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(V.call(arguments)))
            }, o.guid = e.guid = e.guid || rt.guid++, o) : i
        },
        now: Date.now,
        support: et
    }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function(e) {
        function o(e, t, n, r) {
            var i, o, s, a, u, l, c, f, p, d;
            if ((t ? t.ownerDocument || t : X) !== P && F(t), t = t || P, n = n || [], !e || "string" != typeof e)
                return n;
            if (1 !== (a = t.nodeType) && 9 !== a)
                return [];
            if (W&&!r) {
                if (i = Tt.exec(e))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o ||!o.parentNode)
                                return n;
                                if (o.id === s)
                                    return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s)
                            return n.push(o), n
                    } else {
                        if (i[2])
                            return rt.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = i[3]) && k.getElementsByClassName && t.getElementsByClassName)
                                return rt.apply(n, t.getElementsByClassName(s)), n
                    }
                if (k.qsa && (!$ ||!$.test(e))) {
                    if (f = c = _, p = t, d = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = j(e), (c = t.getAttribute("id")) ? f = c.replace(Nt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;)
                            l[u] = f + m(l[u]);
                        p = Ct.test(e) && h(t.parentNode) || t, d = l.join(",")
                    }
                    if (d)
                        try {
                            return rt.apply(n, p.querySelectorAll(d)), n
                    } catch (g) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return L(e.replace(pt, "$1"), t, n, r)
        }
        function s() {
            function e(n, r) {
                return t.push(n + " ") > D.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }
        function a(e) {
            return e[_]=!0, e
        }
        function u(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function l(e, t) {
            for (var n = e.split("|"), r = e.length; r--;)
                D.attrHandle[n[r]] = t
        }
        function c(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return - 1;
            return e ? 1 : - 1
        }
        function f(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function p(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function d(e) {
            return a(function(t) {
                return t =+ t, a(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;)
                        n[i = o[s]] && (n[i]=!(r[i] = n[i]))
                })
            })
        }
        function h(e) {
            return e && typeof e.getElementsByTagName !== K && e
        }
        function g() {}
        function m(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function y(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = U++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [z, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s))
                            return !0
                } else 
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[_] || (t[_] = {}), (a = u[r]) && a[0] === z && a[1] === o)
                                return l[2] = a[2];
                                if (u[r] = l, l[2] = e(t, n, s))
                                    return !0
                        }
            }
        }
        function v(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function x(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++)
                o(e, t[r], n);
            return n
        }
        function b(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) 
                && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }
        function w(e, t, n, r, i, o) {
            return r&&!r[_] && (r = w(r)), i&&!i[_] && (i = w(i, o)), a(function(o, s, a, u) {
                var l, c, f, p = [], d = [], h = s.length, g = o || x(t || "*", a.nodeType ? [a] : a, []), m=!e ||!o && t ? g : b(g, p, e, a, u), y = n ? i || (o ? e : h || r) ? [] : s : m;
                if (n && n(m, y, a, u), r)
                    for (l = b(y, d), r(l, [], a, u), c = l.length; c--;)(f = l[c]) 
                        && (y[d[c]]=!(m[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = y.length; c--;)(f = y[c]) 
                                && l.push(m[c] = f);
                            i(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(f = y[c]) 
                            && (l = i ? ot.call(o, f) : p[c])>-1 && (o[l]=!(s[l] = f))
                        }
                } else 
                    y = b(y === s ? y.splice(h, y.length) : y), i ? i(null, s, y, u) : rt.apply(s, y)
            })
        }
        function T(e) {
            for (var t, n, r, i = e.length, o = D.relative[e[0].type], s = o || D.relative[" "], a = o ? 1 : 0, u = y(function(e) {
                return e === t
            }, s, !0), l = y(function(e) {
                return ot.call(t, e)>-1
            }, s, !0), c = [function(e, n, r) {
                return !o && (r || n !== q) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }
            ]; i > a; a++)
                if (n = D.relative[e[a].type])
                    c = [y(v(c), n)];
                else {
                    if (n = D.filter[e[a].type].apply(null, e[a].matches), n[_]) {
                        for (r=++a; i > r&&!D.relative[e[r].type]; r++);
                        return w(a > 1 && v(c), a > 1 && m(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*": ""
                        })).replace(pt, "$1"), n, r > a && T(e.slice(a, r)), i > r && T(e = e.slice(r)), i > r && m(e))
                    }
                    c.push(n)
                }
            return v(c)
        }
        function C(e, n) {
            var r = n.length > 0, i = e.length > 0, s = function(s, a, u, l, c) {
                var f, p, d, h = 0, g = "0", m = s && [], y = [], v = q, x = s || i && D.find.TAG("*", c), w = z += null == v ? 1: t.random() || .1, T = x.length;
                for (c && (q = a !== P && a); g !== T && null != (f = x[g]); g++) {
                    if (i && f) {
                        for (p = 0; d = e[p++];)
                            if (d(f, a, u)) {
                                l.push(f);
                                break
                            }
                        c && (z = w)
                    }
                    r && ((f=!d && f) && h--, s && m.push(f))
                }
                if (h += g, r && g !== h) {
                    for (p = 0; d = n[p++];)
                        d(m, y, a, u);
                    if (s) {
                        if (h > 0)
                            for (; g--;)
                                m[g] || y[g] || (y[g] = tt.call(l));
                        y = b(y)
                    }
                    rt.apply(l, y), c&&!s && y.length > 0 && h + n.length > 1 && o.uniqueSort(l)
                }
                return c && (z = w, q = v), m
            };
            return r ? a(s) : s
        }
        var N, k, D, S, E, j, A, L, q, H, O, F, P, M, W, $, B, I, R, _ = "sizzle" +- new Date, X = e.document, z = 0, U = 0, V = s(), Y = s(), G = s(), J = function(e, t) {
            return e === t && (O=!0), 0
        }, K = typeof i, Q = 1<<31, Z = {}.hasOwnProperty, et = [], tt = et.pop, nt = et.push, rt = et.push, it = et.slice, ot = et.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return - 1
        }, st = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", at = "[\\x20\\t\\r\\n\\f]", ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", lt = ut.replace("w", "w#"), ct = "\\[" + at + "*(" + ut + ")(?:" + at + "*([*^$|!~]?=)" + at + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + lt + "))|)" + at + "*\\]", ft = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ct + ")*)|.*)\\)|)", pt = new n("^" + at + "+|((?:^|[^\\\\])(?:\\\\.)*)" + at + "+$", "g"), dt = new n("^" + at + "*," + at + "*"), ht = new n("^" + at + "*([>+~]|" + at + ")" + at + "*"), gt = new n("=" + at + "*([^\\]'\"]*?)" + at + "*\\]", "g"), mt = new n(ft), yt = new n("^" + lt + "$"), vt = {
            ID: new n("^#(" + ut + ")"),
            CLASS: new n("^\\.(" + ut + ")"),
            TAG: new n("^(" + ut.replace("w", "w*") + ")"),
            ATTR: new n("^" + ct),
            PSEUDO: new n("^" + ft),
            CHILD: new n("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + at + "*(even|odd|(([+-]|)(\\d*)n|)" + at + "*(?:([+-]|)" + at + "*(\\d+)|))" + at + "*\\)|)", "i"),
            bool: new n("^(?:" + st + ")$", "i"),
            needsContext: new n("^" + at + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + at + "*((?:-\\d)?\\d*)" + at + "*\\)|)(?=[^-]|$)", "i")
        }, xt = /^(?:input|select|textarea|button)$/i, bt = /^h\d$/i, wt = /^[^{]+\{\s*\[native \w/, Tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ct = /[+~]/, Nt = /'|\\/g, kt = new n("\\\\([\\da-f]{1,6}" + at + "?|(" + at + ")|.)", "ig"), Dt = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? r.fromCharCode(i + 65536) : r.fromCharCode(i>>10 | 55296, 1023 & i | 56320)
        };
        try {
            rt.apply(et = it.call(X.childNodes), X.childNodes), et[X.childNodes.length].nodeType
        } catch (St) {
            rt = {
                apply: et.length ? function(e, t) {
                    nt.apply(e, it.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        k = o.support = {}, E = o.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, F = o.setDocument = function(e) {
            var t, r = e ? e.ownerDocument || e: X, o = r.defaultView;
            return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, M = r.documentElement, W=!E(r), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                F()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                F()
            })), k.attributes = u(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), k.getElementsByTagName = u(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), k.getElementsByClassName = wt.test(r.getElementsByClassName) && u(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), k.getById = u(function(e) {
                return M.appendChild(e).id = _, !r.getElementsByName ||!r.getElementsByName(_).length
            }), k.getById ? (D.find.ID = function(e, t) {
                if (typeof t.getElementById !== K && W) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, D.filter.ID = function(e) {
                var t = e.replace(kt, Dt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete D.find.ID, D.filter.ID = function(e) {
                var t = e.replace(kt, Dt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== K && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), D.find.TAG = k.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== K ? t.getElementsByTagName(e) : i
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, D.find.CLASS = k.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== K && W ? t.getElementsByClassName(e) : i
            }, B = [], $ = [], (k.qsa = wt.test(r.querySelectorAll)) && (u(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && $.push("[*^$]=" + at + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || $.push("\\[" + at + "*(?:value|" + st + ")"), e.querySelectorAll(":checked").length || $.push(":checked")
            }), u(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && $.push("name" + at + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), $.push(",.*:")
            })), (k.matchesSelector = wt.test(I = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && u(function(e) {
                k.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), B.push("!=", ft)
            }), $ = $.length && new n($.join("|")), B = B.length && new n(B.join("|")), t = wt.test(M.compareDocumentPosition), R = t || wt.test(M.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e, r = t && t.parentNode;
                return e === r ||!(!r || 1 !== r.nodeType ||!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e)
                            return !0;
                return !1
            }, J = t ? function(e, t) {
                if (e === t)
                    return O=!0, 0;
                var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n ||!k.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === X && R(X, e)?-1 : t === r || t.ownerDocument === X && R(X, t) ? 1 : H ? ot.call(H, e) - ot.call(H, t) : 0 : 4 & n?-1 : 1)
            } : function(e, t) {
                if (e === t)
                    return O=!0, 0;
                var n, i = 0, o = e.parentNode, s = t.parentNode, a = [e], u = [t];
                if (!o ||!s)
                    return e === r?-1 : t === r ? 1 : o?-1 : s ? 1 : H ? ot.call(H, e) - ot.call(H, t) : 0;
                if (o === s)
                    return c(e, t);
                for (n = e; n = n.parentNode;)
                    a.unshift(n);
                for (n = t; n = n.parentNode;)
                    u.unshift(n);
                for (; a[i] === u[i];)
                    i++;
                return i ? c(a[i], u[i]) : a[i] === X?-1 : u[i] === X ? 1 : 0
            }, r) : P
        }, o.matches = function(e, t) {
            return o(e, null, null, t)
        }, o.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== P && F(e), t = t.replace(gt, "='$1']"), !(!k.matchesSelector ||!W || B && B.test(t) || $ && $.test(t)))
                try {
                    var n = I.call(e, t);
                    if (n || k.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
            } catch (r) {}
            return o(t, P, null, [e]).length > 0
        }, o.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && F(e), R(e, t)
        }, o.attr = function(e, t) {
            (e.ownerDocument || e) !== P && F(e);
            var n = D.attrHandle[t.toLowerCase()], r = n && Z.call(D.attrHandle, t.toLowerCase()) ? n(e, t, !W): i;
            return r !== i ? r : k.attributes ||!W ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, o.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, o.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (O=!k.detectDuplicates, H=!k.sortStable && e.slice(0), e.sort(J), O) {
                for (; t = e[i++];)
                    t === e[i] && (r = n.push(i));
                for (; r--;)
                    e.splice(n[r], 1)
            }
            return H = null, e
        }, S = o.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += S(e)
                    } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else 
                for (; t = e[r++];)
                    n += S(t);
            return n
        }, D = o.selectors = {
            cacheLength: 50,
            createPseudo: a,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(kt, Dt), e[3] = (e[3] || e[4] || e[5] || "").replace(kt, Dt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] =+ (e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =+ (e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n=!e[6] && e[2];
                    return vt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && mt.test(n) && (t = j(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(kt, Dt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = V[e + " "];
                    return t || (t = new n("(^|" + at + ")" + e + "(" + at + "|$)")) && V(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== K && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = o.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n)>-1 : "$=" === t ? n && i.slice( - n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n)>-1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice( - 4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling": "previousSibling", m = t.parentNode, y = a && t.nodeName.toLowerCase(), v=!u&&!a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e&&!h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild: m.lastChild], s && v) {
                                for (c = m[_] || (m[_] = {}), l = c[e] || [], d = l[0] === z && l[1], p = l[0] === z && l[2], f = d && m.childNodes[d]; f=++d && f && f[g] || (p = d = 0) 
                                    || h.pop();
                                )if (1 === f.nodeType&&++p && f === t) {
                                    c[e] = [z, d, p];
                                    break
                                }
                            } else if (v && (l = (t[_] || (t[_] = {}))[e]) && l[0] === z)
                                p = l[1];
                            else 
                                for (; (f=++d && f && f[g] || (p = d = 0) || h.pop()) 
                                    && ((a ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType)||!++p || (v && ((f[_] || (f[_] = {}))[e] = [z, p]), f !== t));
                            );
                            return p -= i, p === r || p%r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = D.pseudos[e] || D.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                    return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], D.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--;)
                            i = ot.call(e, o[s]), e[i]=!(n[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: a(function(e) {
                    var t = [], n = [], r = A(e.replace(pt, "$1"));
                    return r[_] ? a(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) 
                            && (e[a]=!(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: a(function(e) {
                    return function(t) {
                        return o(e, t).length > 0
                    }
                }),
                contains: a(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e)>-1
                    }
                }),
                lang: a(function(e) {
                    return yt.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(kt, Dt).toLowerCase(), function(t) {
                        var n;
                        do 
                            if (n = W ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === M
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus())&&!!(e.type || e.href||~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled===!1
                },
                disabled: function(e) {
                    return e.disabled===!0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t&&!!e.checked || "option" === t&&!!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected===!0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !D.pseudos.empty(e)
                },
                header: function(e) {
                    return bt.test(e.nodeName)
                },
                input: function(e) {
                    return xt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(e, t) {
                    return [t - 1]
                }),
                eq: d(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: d(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: d(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: d(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)
                        e.push(r);
                    return e
                }),
                gt: d(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)
                        e.push(r);
                    return e
                })
            }
        }, D.pseudos.nth = D.pseudos.eq;
        for (N in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            D.pseudos[N] = f(N);
        for (N in{
            submit: !0,
            reset: !0
        })
            D.pseudos[N] = p(N);
        return g.prototype = D.filters = D.pseudos, D.setFilters = new g, j = o.tokenize = function(e, t) {
            var n, r, i, s, a, u, l, c = Y[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (a = e, u = [], l = D.preFilter; a;) {
                (!n || (r = dt.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(i = [])), n=!1, (r = ht.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(pt, " ")
                }), a = a.slice(n.length));
                for (s in D.filter)
                    !(r = vt[s].exec(a)) || l[s]&&!(r = l[s](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? o.error(e) : Y(e, u).slice(0)
        }, A = o.compile = function(e, t) {
            var n, r = [], i = [], o = G[e + " "];
            if (!o) {
                for (t || (t = j(e)), n = t.length; n--;)
                    o = T(t[n]), o[_] ? r.push(o) : i.push(o);
                o = G(e, C(i, r)), o.selector = e
            }
            return o
        }, L = o.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e, c=!r && j(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && k.getById && 9 === t.nodeType && W && D.relative[o[1].type]) {
                    if (t = (D.find.ID(s.matches[0].replace(kt, Dt), t) || [])[0], !t)
                        return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = vt.needsContext.test(e) ? 0 : o.length; i--&&(s = o[i], !D.relative[a = s.type]);)
                    if ((u = D.find[a]) && (r = u(s.matches[0].replace(kt, Dt), Ct.test(o[0].type) && h(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && m(o), !e)
                            return rt.apply(n, r), n;
                            break
                    }
            }
            return (l || A(e, c))(r, t, !W, n, Ct.test(e) && h(t.parentNode) || t), n
        }, k.sortStable = _.split("").sort(J).join("") === _, k.detectDuplicates=!!O, F(), k.sortDetached = u(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }), u(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || l("type|href|height|width", function(e, t, n) {
            return n ? i : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), k.attributes && u(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || l("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? i : e.defaultValue
        }), u(function(e) {
            return null == e.getAttribute("disabled")
        }) || l(st, function(e, t, n) {
            var r;
            return n ? i : e[t]===!0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), o
    }(o);
    rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
    var lt = rt.expr.match.needsContext, ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ft = /^.[^:#\[\.,]*$/;
    rt.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? rt.find.matchesSelector(r, e) ? [r] : [] : rt.find.matches(e, rt.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, rt.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(rt(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (rt.contains(i[t], this))
                            return !0
                        }));
            for (t = 0; n > t; t++)
                rt.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? rt.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && lt.test(e) ? rt(e) : e || [], !1).length
        }
    });
    var pt, dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ht = rt.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : dt.exec(e), !n ||!n[1] && t)
                return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : tt, !0)), ct.test(n[1]) && rt.isPlainObject(t))
                    for (n in t)
                        rt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = tt.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = tt, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? i !== pt.ready ? pt.ready(e) : e(rt) : (e.selector !== i && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
    };
    ht.prototype = rt.fn, pt = rt(tt);
    var gt = /^(?:parents|prev(?:Until|All))/, mt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    rt.extend({
        dir: function(e, t, n) {
            for (var r = [], o = n !== i; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && rt(e).is(n))
                        break;
                        r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), rt.fn.extend({
        has: function(e) {
            var t = rt(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (rt.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = lt.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n)>-1 : 1 === n.nodeType && rt.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? rt.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.call(rt(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(e, t) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), rt.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return rt.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return rt.dir(e, "parentNode", n)
        },
        next: function(e) {
            return u(e, "nextSibling")
        },
        prev: function(e) {
            return u(e, "previousSibling")
        },
        nextAll: function(e) {
            return rt.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return rt.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return rt.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return rt.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return rt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return rt.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || rt.merge([], e.childNodes)
        }
    }, function(e, t) {
        rt.fn[e] = function(n, r) {
            var i = rt.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n), r && "string" == typeof r && (i = rt.filter(r, i)), this.length > 1 && (mt[e] || rt.unique(i), gt.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var yt = /\S+/g, vt = {};
    rt.Callbacks = function(e) {
        e = "string" == typeof e ? vt[e] || l(e) : rt.extend({}, e);
        var t, n, r, o, s, a, u = [], c=!e.once && [], f = function(i) {
            for (t = e.memory && i, n=!0, a = o || 0, o = 0, s = u.length, r=!0; u && s > a; a++)
                if (u[a].apply(i[0], i[1])===!1 && e.stopOnFalse) {
                    t=!1;
                    break
                }
            r=!1, u && (c ? c.length && f(c.shift()) : t ? u = [] : p.disable())
        }, p = {
            add: function() {
                if (u) {
                    var n = u.length;
                    !function i(t) {
                        rt.each(t, function(t, n) {
                            var r = rt.type(n);
                            "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    }(arguments), r ? s = u.length : t && (o = n, f(t))
                }
                return this
            },
            remove: function() {
                return u && rt.each(arguments, function(e, t) {
                    for (var n; (n = rt.inArray(t, u, n))>-1;)
                        u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                }), this
            },
            has: function(e) {
                return e ? rt.inArray(e, u)>-1 : !(!u ||!u.length)
            },
            empty: function() {
                return u = [], s = 0, this
            },
            disable: function() {
                return u = c = t = i, this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return c = i, t || p.disable(), this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return !u || n&&!c || (t = t || [], t = [e, t.slice ? t.slice(): t], r ? c.push(t) : f(t)), this
            },
            fire: function() {
                return p.fireWith(this, arguments), this
            },
            fired: function() {
                return !!n
            }
        };
        return p
    }, rt.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]], n = "pending", r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this
                },
                then: function() {
                    var e = arguments;
                    return rt.Deferred(function(n) {
                        rt.each(t, function(t, o) {
                            var s = rt.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? rt.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, rt.each(t, function(e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1^e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0, o = V.call(arguments), s = o.length, a = 1 !== s || e && rt.isFunction(e.promise) ? s: 0, u = 1 === a ? e: rt.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? V.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)
                for (t = Array(s), n = Array(s), r = Array(s); s > i; i++)
                    o[i] && rt.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var xt;
    rt.fn.ready = function(e) {
        return rt.ready.promise().done(e), this
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function(e) {
            (e===!0?--rt.readyWait : rt.isReady) || (rt.isReady=!0, e!==!0&&--rt.readyWait > 0 || (xt.resolveWith(tt, [rt]), rt.fn.triggerHandler && (rt(tt).triggerHandler("ready"), rt(tt).off("ready"))))
        }
    }), rt.ready.promise = function(e) {
        return xt || (xt = rt.Deferred(), "complete" === tt.readyState ? setTimeout(rt.ready) : (tt.addEventListener("DOMContentLoaded", c, !1), o.addEventListener("load", c, !1))), xt.promise(e)
    }, rt.ready.promise();
    var bt = rt.access = function(e, t, n, r, o, s, a) {
        var u = 0, l = e.length, c = null == n;
        if ("object" === rt.type(n)) {
            o=!0;
            for (u in n)
                rt.access(e, t, u, n[u], !0, s, a)
        } else if (r !== i && (o=!0, rt.isFunction(r) || (a=!0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
            return c.call(rt(e), n)
        })), t))
            for (; l > u; u++)
                t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : s
    };
    rt.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType||!+e.nodeType
    }, f.uid = 1, f.accepts = rt.acceptData, f.prototype = {
        key: function(e) {
            if (!f.accepts(e))
                return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = f.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, rt.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)
                o[t] = n;
            else if (rt.isEmptyObject(o))
                rt.extend(this.cache[i], t);
            else 
                for (r in t)
                    o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return t === i ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return t === i || t && "string" == typeof t && n === i ? (r = this.get(e, t), r !== i ? r : this.get(e, rt.camelCase(t))) : (this.set(e, t, n), n !== i ? n : t)
        },
        remove: function(e, t) {
            var n, r, o, s = this.key(e), a = this.cache[s];
            if (t === i)
                this.cache[s] = {};
            else {
                rt.isArray(t) ? r = t.concat(t.map(rt.camelCase)) : (o = rt.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(yt) || [])), n = r.length;
                for (; n--;)
                    delete a[r[n]]
            }
        },
        hasData: function(e) {
            return !rt.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var wt = new f, Tt = new f, Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Nt = /([A-Z])/g;
    rt.extend({
        hasData: function(e) {
            return Tt.hasData(e) || wt.hasData(e)
        },
        data: function(e, t, n) {
            return Tt.access(e, t, n)
        },
        removeData: function(e, t) {
            Tt.remove(e, t)
        },
        _data: function(e, t, n) {
            return wt.access(e, t, n)
        },
        _removeData: function(e, t) {
            wt.remove(e, t)
        }
    }), rt.fn.extend({
        data: function(e, t) {
            var n, r, o, s = this[0], a = s && s.attributes;
            if (e === i) {
                if (this.length && (o = Tt.get(s), 1 === s.nodeType&&!wt.get(s, "hasDataAttrs"))) {
                    for (n = a.length; n--;)
                        a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = rt.camelCase(r.slice(5)), p(s, r, o[r])));
                    wt.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Tt.set(this, e)
            }) : bt(this, function(t) {
                var n, r = rt.camelCase(e);
                if (s && t === i) {
                    if (n = Tt.get(s, e), n !== i)
                        return n;
                    if (n = Tt.get(s, r), n !== i)
                        return n;
                    if (n = p(s, r, i), n !== i)
                        return n
                } else 
                    this.each(function() {
                        var n = Tt.get(this, r);
                        Tt.set(this, r, t), - 1 !== e.indexOf("-") && n !== i && Tt.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Tt.remove(this, e)
            })
        }
    }), rt.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = wt.get(e, t), n && (!r || rt.isArray(n) ? r = wt.access(e, t, rt.makeArray(n)) : r.push(n)), r || []) : i
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = rt.queue(e, t), r = n.length, i = n.shift(), o = rt._queueHooks(e, t), s = function() {
                rt.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return wt.get(e, n) || wt.access(e, n, {
                empty: rt.Callbacks("once memory").add(function() {
                    wt.remove(e, [t + "queue", n])
                })
            })
        }
    }), rt.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? rt.queue(this[0], e) : t === i ? this : this.each(function() {
                var n = rt.queue(this, e, t);
                rt._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && rt.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                rt.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, o = rt.Deferred(), s = this, a = this.length, u = function() {
                --r || o.resolveWith(s, [s])
            };
            for ("string" != typeof e && (t = e, e = i), e = e || "fx"; a--;)
                n = wt.get(s[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), o.promise(t)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Dt = ["Top", "Right", "Bottom", "Left"], St = function(e, t) {
        return e = t || e, "none" === rt.css(e, "display") ||!rt.contains(e.ownerDocument, e)
    }, Et = /^(?:checkbox|radio)$/i;
    !function() {
        var e = tt.createDocumentFragment(), t = e.appendChild(tt.createElement("div")), n = tt.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), et.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", et.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue
    }();
    var jt = typeof i;
    et.focusinBubbles = "onfocusin"in o;
    var At = /^key/, Lt = /^(?:mouse|pointer|contextmenu)|click/, qt = /^(?:focusinfocus|focusoutblur)$/, Ht = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var s, a, u, l, c, f, p, d, h, g, m, y = wt.get(e);
            if (y)
                for (n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = rt.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                    return typeof rt !== jt && rt.event.triggered !== t.type ? rt.event.dispatch.apply(e, arguments) : i
                }), t = (t || "").match(yt) || [""], c = t.length; c--;)
                    u = Ht.exec(t[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), h && (p = rt.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = rt.event.special[h] || {}, f = rt.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && rt.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, s), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, r, g, a)!==!1 || e.addEventListener && e.addEventListener(h, a, !1)), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), rt.event.global[h]=!0)
        },
        remove: function(e, t, r, i, o) {
            var s, a, u, l, c, f, p, d, h, g, m, y = wt.hasData(e) && wt.get(e);
            if (y && (l = y.events)) {
                for (t = (t || "").match(yt) || [""], c = t.length; c--;)
                    if (u = Ht.exec(t[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), h) {
                        for (p = rt.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, d = l[h] || [], u = u[2] && new n("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = d.length; s--;)
                            f = d[s], !o && m !== f.origType || r && r.guid !== f.guid || u&&!u.test(f.namespace) || i && i !== f.selector && ("**" !== i ||!f.selector) || (d.splice(s, 1), f.selector && d.delegateCount--, p.remove && p.remove.call(e, f));
                            a&&!d.length && (p.teardown && p.teardown.call(e, g, y.handle)!==!1 || rt.removeEvent(e, h, y.handle), delete l[h])
                    } else 
                        for (h in l)
                            rt.event.remove(e, h + t[c], r, i, !0);
                rt.isEmptyObject(l) && (delete y.handle, wt.remove(e, "events"))
            }
        },
        trigger: function(e, t, r, s) {
            var a, u, l, c, f, p, d, h = [r || tt], g = Z.call(e, "type") ? e.type: e, m = Z.call(e, "namespace") ? e.namespace.split("."): [];
            if (u = l = r = r || tt, 3 !== r.nodeType && 8 !== r.nodeType&&!qt.test(g + rt.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), f = g.indexOf(":") < 0 && "on" + g, e = e[rt.expando] ? e : new rt.Event(g, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = m.join("."), e.namespace_re = e.namespace ? new n("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = i, e.target || (e.target = r), t = null == t ? [e] : rt.makeArray(t, [e]), d = rt.event.special[g] || {}, s ||!d.trigger || d.trigger.apply(r, t)!==!1)) {
                if (!s&&!d.noBubble&&!rt.isWindow(r)) {
                    for (c = d.delegateType || g, qt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)
                        h.push(u), l = u;
                    l === (r.ownerDocument || tt) && h.push(l.defaultView || l.parentWindow || o)
                }
                for (a = 0; (u = h[a++])&&!e.isPropagationStopped();)
                    e.type = a > 1 ? c : d.bindType || g, p = (wt.get(u, "events") || {})[e.type] && wt.get(u, "handle"), p && p.apply(u, t), p = f && u[f], p && p.apply && rt.acceptData(u) && (e.result = p.apply(u, t), e.result===!1 && e.preventDefault());
                return e.type = g, s || e.isDefaultPrevented() || d._default && d._default.apply(h.pop(), t)!==!1 ||!rt.acceptData(r) || f && rt.isFunction(r[g])&&!rt.isWindow(r) && (l = r[f], l && (r[f] = null), rt.event.triggered = g, r[g](), rt.event.triggered = i, l && (r[f] = l)), e.result
            }
        },
        dispatch: function(e) {
            e = rt.event.fix(e);
            var t, n, r, o, s, a = [], u = V.call(arguments), l = (wt.get(this, "events") || {})[e.type] || [], c = rt.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e)!==!1) {
                for (a = rt.event.handlers.call(this, e, l), t = 0; (o = a[t++])&&!e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0; (s = o.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)
                        ) && (e.handleObj = s, e.data = s.data, r = ((rt.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u), r !== i && (e.result = r)===!1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, s, a = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled!==!0 || "click" !== e.type) {
                        for (r = [], n = 0; u > n; n++)
                            s = t[n], o = s.selector + " ", r[o] === i && (r[o] = s.needsContext ? rt(o, this).index(l) >= 0 : rt.find(o, this, null, [l]).length), r[o] && r.push(s);
                            r.length && a.push({
                                elem: l,
                                handlers: r
                            })
                    }
            return u < t.length && a.push({
                elem: this,
                handlers: t.slice(u)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, o, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || tt, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || s === i || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[rt.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Lt.test(i) ? this.mouseHooks : At.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new rt.Event(o), t = r.length; t--;)
                n = r[t], e[n] = o[n];
            return e.target || (e.target = tt), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : i
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : i
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && rt.nodeName(this, "input") ? (this.click(), !1) : i
                },
                _default: function(e) {
                    return rt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== i && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = rt.extend(new rt.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? rt.event.trigger(i, null, t) : rt.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, rt.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, rt.Event = function(e, t) {
        return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === i && e.returnValue===!1 ? d : h) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), this[rt.expando]=!0, i) : new rt.Event(e, t)
    }, rt.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        rt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r&&!rt.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), et.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            rt.event.simulate(t, e.target, rt.event.fix(e), !0)
        };
        rt.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this, i = wt.access(r, t);
                i || r.addEventListener(e, n, !0), wt.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this, i = wt.access(r, t) - 1;
                i ? wt.access(r, t, i) : (r.removeEventListener(e, n, !0), wt.remove(r, t))
            }
        }
    }), rt.fn.extend({
        on: function(e, t, n, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = i);
                for (a in e)
                    this.on(a, t, n, e[a], o);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = i) : null == r && ("string" == typeof t ? (r = n, n = i) : (r = n, n = t, t = i)), r===!1)
                r = h;
            else if (!r)
                return this;
            return 1 === o && (s = r, r = function(e) {
                return rt().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = rt.guid++)), this.each(function() {
                rt.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, rt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return (t===!1 || "function" == typeof t) && (n = t, t = i), n===!1 && (n = h), this.each(function() {
                rt.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                rt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? rt.event.trigger(e, t, n, !0) : i
        }
    });
    var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ft = /<([\w:]+)/, Pt = /<|&#?\w+;/, Mt = /<(?:script|style|link)/i, Wt = /checked\s*(?:[^=]|=\s*.checked.)/i, $t = /^$|\/(?:java|ecma)script/i, Bt = /^true\/(.*)/, It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Rt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td, rt.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = rt.contains(e.ownerDocument, e);
            if (!(et.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e)))
                for (s = w(a), o = w(e), r = 0, i = o.length; i > r; r++)
                    T(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || w(e), s = s || w(a), r = 0, i = o.length; i > r; r++)
                        b(o[r], s[r]);
                else 
                    b(e, a);
            return s = w(a, "script"), s.length > 0 && x(s, !u && w(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if (i = e[p], i || 0 === i)
                    if ("object" === rt.type(i))
                        rt.merge(f, i.nodeType ? [i] : i);
                    else if (Pt.test(i)) {
                        for (o = o || c.appendChild(t.createElement("div")), s = (Ft.exec(i) || ["", ""])[1].toLowerCase(), a = Rt[s] || Rt._default, o.innerHTML = a[1] + i.replace(Ot, "<$1></$2>") + a[2], l = a[0]; l--;)
                            o = o.lastChild;
                            rt.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else 
                        f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r||-1 === rt.inArray(i, r)) && (u = rt.contains(i.ownerDocument, i), o = w(c.appendChild(i), "script"), u && x(o), n))
                    for (l = 0; i = o[l++];)
                        $t.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, o, s = rt.event.special, a = 0; (n = e[a]) !== i; a++) {
                if (rt.acceptData(n) && (o = n[wt.expando], o && (t = wt.cache[o]))) {
                    if (t.events)
                        for (r in t.events)
                            s[r] ? rt.event.remove(n, r) : rt.removeEvent(n, r, t.handle);
                    wt.cache[o] && delete wt.cache[o]
                }
                delete Tt.cache[n[Tt.expando]]
            }
        }
    }), rt.fn.extend({
        text: function(e) {
            return bt(this, function(e) {
                return e === i ? rt.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? rt.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || rt.cleanData(w(n)), n.parentNode && (t && rt.contains(n.ownerDocument, n) && x(w(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (rt.cleanData(w(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e?!1 : e, t = null == t ? e : t, this.map(function() {
                return rt.clone(this, e, t)
            })
        },
        html: function(e) {
            return bt(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === i && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e&&!Mt.test(e)&&!Rt[(Ft.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ot, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {}, 1 === t.nodeType && (rt.cleanData(w(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, rt.cleanData(w(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Y.apply([], e);
            var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], d = rt.isFunction(p);
            if (d || l > 1 && "string" == typeof p&&!et.checkClone && Wt.test(p))
                return this.each(function(n) {
                    var r = c.eq(n);
                    d && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
                });
            if (l && (n = rt.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = rt.map(w(n, "script"), y), o = i.length; l > u; u++)
                    s = n, u !== f && (s = rt.clone(s, !0, !0), o && rt.merge(i, w(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, rt.map(i, v), u = 0; o > u; u++)
                        s = i[u], $t.test(s.type || "")&&!wt.access(s, "globalEval") && rt.contains(a, s) && (s.src ? rt._evalUrl && rt._evalUrl(s.src) : rt.globalEval(s.textContent.replace(It, "")))
            }
            return this
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        rt.fn[e] = function(e) {
            for (var n, r = [], i = rt(e), o = i.length - 1, s = 0; o >= s; s++)
                n = s === o ? this : this.clone(!0), rt(i[s])[t](n), G.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var _t, Xt = {}, zt = /^margin/, Ut = new n("^(" + kt + ")(?!px)[a-z%]+$", "i"), Vt = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(s);
            var e = o.getComputedStyle(a, null);
            n = "1%" !== e.top, r = "4px" === e.width, i.removeChild(s)
        }
        var n, r, i = tt.documentElement, s = tt.createElement("div"), a = tt.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", et.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(a), o.getComputedStyle && rt.extend(et, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(tt.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(s), t=!e(o.getComputedStyle(n, null).marginRight), i.removeChild(s), t
            }
        }))
    }(), rt.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t)
            s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = s[o];
        return i
    };
    var Yt = /^(none|table(?!-c[ea]).+)/, Gt = new n("^(" + kt + ")(.*)$", "i"), Jt = new n("^([+-])=(" + kt + ")", "i"), Kt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Zt = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = k(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, n, r, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, a, u, l = rt.camelCase(n), c = t.style;
                return n = rt.cssProps[l] || (rt.cssProps[l] = S(c, l)), u = rt.cssHooks[n] || rt.cssHooks[l], r === i ? u && "get"in u && (s = u.get(t, !1, o)) !== i ? s : c[n] : (a = typeof r, "string" === a && (s = Jt.exec(r)) && (r = (s[1] + 1) * s[2] + e(rt.css(t, n)), a = "number"), null != r && r === r && ("number" !== a || rt.cssNumber[l] || (r += "px"), et.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), u && "set"in u && (r = u.set(t, r, o)) === i || (c[n] = r)), i)
            }
        },
        css: function(t, n, r, o) {
            var s, a, u, l = rt.camelCase(n);
            return n = rt.cssProps[l] || (rt.cssProps[l] = S(t.style, l)), u = rt.cssHooks[n] || rt.cssHooks[l], u && "get"in u && (s = u.get(t, !0, r)), s === i && (s = k(t, n, o)), "normal" === s && n in Qt && (s = Qt[n]), "" === r || r ? (a = e(s), r===!0 || rt.isNumeric(a) ? a || 0 : s) : s
        }
    }), rt.each(["height", "width"], function(e, t) {
        rt.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Yt.test(rt.css(e, "display")) && 0 === e.offsetWidth ? rt.swap(e, Kt, function() {
                    return A(e, t, r)
                }) : A(e, t, r) : i
            },
            set: function(e, n, r) {
                var i = r && Vt(e);
                return E(e, n, r ? j(e, t, r, "border-box" === rt.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), rt.cssHooks.marginRight = D(et.reliableMarginRight, function(e, t) {
        return t ? rt.swap(e, {
            display: "inline-block"
        }, k, [e, "marginRight"]) : i
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        rt.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + Dt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, zt.test(e) || (rt.cssHooks[e + t].set = E)
    }), rt.fn.extend({
        css: function(e, t) {
            return bt(this, function(e, t, n) {
                var r, o, s = {}, a = 0;
                if (rt.isArray(t)) {
                    for (r = Vt(e), o = t.length; o > a; a++)
                        s[t[a]] = rt.css(e, t[a], !1, r);
                    return s
                }
                return n !== i ? rt.style(e, t, n) : rt.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                St(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = q, q.prototype = {
        constructor: q,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (rt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = q.propHooks[this.prop];
            return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, rt.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - t.cos(e * t.PI) / 2
        }
    }, rt.fx = q.prototype.init, rt.fx.step = {};
    var en, tn, nn = /^(?:toggle|show|hide)$/, rn = new n("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"), on = /queueHooks$/, sn = [P], an = {
        "*": [function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = rn.exec(t), o = i && i[3] || (rt.cssNumber[e] ? "" : "px"), s = (rt.cssNumber[e] || "px" !== o&&+r) && rn.exec(rt.css(n.elem, e)), a = 1, u = 20;
            if (s && s[3] !== o) {
                o = o || s[3], i = i || [], s =+ r || 1;
                do 
                    a = a || ".5", s/=a, rt.style(n.elem, e, s + o);
                while (a !== (a = n.cur() / r) && 1 !== a&&--u)
                }
            return i && (s = n.start =+ s||+r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : + i[2]), n
        }
        ]
    };
    rt.Animation = rt.extend(W, {
        tweener: function(e, t) {
            rt.isFunction(e) ? (t = e, e = ["*"]): e = e.split(" ");
            for (var n,
            r = 0,
            i = e.length;
            i > r;
            r++)n = e[r],
            an[n] = an[n] || [],
            an[n].unshift(t)
        }, prefilter : function(e, t) {
            t ? sn.unshift(e) : sn.push(e)
        }
    }), rt.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? rt.extend({}, e): {
            complete: n ||!n && t || rt.isFunction(e) && e,
            duration: e,
            easing: n && t || t&&!rt.isFunction(t) && t
        };
        return r.duration = rt.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in rt.fx.speeds ? rt.fx.speeds[r.duration] : rt.fx.speeds._default, (null == r.queue || r.queue===!0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            rt.isFunction(r.old) && r.old.call(this), r.queue && rt.dequeue(this, r.queue)
        }, r
    }, rt.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(St).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = rt.isEmptyObject(e), o = rt.speed(t, n, r), s = function() {
                var t = W(this, rt.extend({}, e), o);
                (i || wt.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || o.queue===!1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = i), t && e!==!1 && this.queue(e || "fx", []), this.each(function() {
                var t=!0, i = null != e && e + "queueHooks", o = rt.timers, s = wt.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else 
                    for (i in s)
                        s[i] && s[i].stop && on.test(i) && r(s[i]);
                for (i = o.length; i--;)
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t=!1, o.splice(i, 1));
                (t ||!n) && rt.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e!==!1 && (e = e || "fx"), this.each(function() {
                var t, n = wt.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = rt.timers, s = r ? r.length: 0;
                for (n.finish=!0, rt.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), rt.each(["toggle", "show", "hide"], function(e, t) {
        var n = rt.fn[t];
        rt.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
        }
    }), rt.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        rt.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), rt.timers = [], rt.fx.tick = function() {
        var e, t = 0, n = rt.timers;
        for (en = rt.now(); t < n.length; t++)
            e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || rt.fx.stop(), en = i
    }, rt.fx.timer = function(e) {
        rt.timers.push(e), e() ? rt.fx.start() : rt.timers.pop()
    }, rt.fx.interval = 13, rt.fx.start = function() {
        tn || (tn = setInterval(rt.fx.tick, rt.fx.interval))
    }, rt.fx.stop = function() {
        clearInterval(tn), tn = null
    }, rt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, rt.fn.delay = function(e, t) {
        return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, function() {
        var e = tt.createElement("input"), t = tt.createElement("select"), n = t.appendChild(tt.createElement("option"));
        e.type = "checkbox", et.checkOn = "" !== e.value, et.optSelected = n.selected, t.disabled=!0, et.optDisabled=!n.disabled, e = tt.createElement("input"), e.value = "t", e.type = "radio", et.radioValue = "t" === e.value
    }();
    var un, ln, cn = rt.expr.attrHandle;
    rt.fn.extend({
        attr: function(e, t) {
            return bt(this, rt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                rt.removeAttr(this, e)
            })
        }
    }), rt.extend({
        attr: function(e, t, n) {
            var r, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === jt ? rt.prop(e, t, n) : (1 === s && rt.isXMLDoc(e) || (t = t.toLowerCase(), r = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? ln : un)), n === i ? r && "get"in r && null !== (o = r.get(e, t)) ? o : (o = rt.find.attr(e, t), null == o ? i : o) : null !== n ? r && "set"in r && (o = r.set(e, n, t)) !== i ? o : (e.setAttribute(t, n + ""), n) : (rt.removeAttr(e, t), i))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(yt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];)
                    r = rt.propFix[n] || n, rt.expr.match.bool.test(n) && (e[r]=!1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!et.radioValue && "radio" === t && rt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ln = {
        set: function(e, t, n) {
            return t===!1 ? rt.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = cn[t] || rt.find.attr;
        cn[t] = function(e, t, r) {
            var i, o;
            return r || (o = cn[t], cn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, cn[t] = o), i
        }
    });
    var fn = /^(?:input|select|textarea|button)$/i;
    rt.fn.extend({
        prop: function(e, t) {
            return bt(this, rt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[rt.propFix[e] || e]
            })
        }
    }), rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)
                return s = 1 !== a ||!rt.isXMLDoc(e), s && (t = rt.propFix[t] || t, o = rt.propHooks[t]), n !== i ? o && "set"in o && (r = o.set(e, n, t)) !== i ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || fn.test(e.nodeName) || e.href ? e.tabIndex : - 1
                }
            }
        }
    }), et.optSelected || (rt.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        rt.propFix[this.toLowerCase()] = this
    });
    var pn = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
            if (rt.isFunction(e))
                return this.each(function(t) {
                    rt(this).addClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(yt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pn, " ") : " ")) {
                        for (o = 0; i = t[o++];)
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            s = rt.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (rt.isFunction(e))
                return this.each(function(t) {
                    rt(this).removeClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(yt) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pn, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;)
                                r = r.replace(" " + i + " ", " ");
                                s = e ? rt.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(rt.isFunction(e) ? function(n) {
                rt(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = rt(this), o = e.match(yt) || []; t = o[r++];)
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else (n === jt || "boolean" === n) 
                    && (this.className && wt.set(this, "__className__", this.className), this.className = this.className || e===!1 ? "" : wt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(pn, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var dn = /\r/g;
    rt.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            {
                if (arguments.length)
                    return r = rt.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = r ? e.call(this, n, rt(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : rt.isArray(o) && (o = rt.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set"in t && t.set(this, o, "value") !== i || (this.value = o))
                    });
                if (o)
                    return t = rt.valHooks[o.type] || rt.valHooks[o.nodeName.toLowerCase()], t && "get"in t && (n = t.get(o, "value")) !== i ? n : (n = o.value, "string" == typeof n ? n.replace(dn, "") : null == n ? "" : n)
            }
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = rt.find.attr(e, "value");
                    return null != t ? t : rt.trim(rt.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (et.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
                            if (t = rt(n).val(), o)
                                return t;
                                s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = rt.makeArray(t), s = i.length; s--;)
                        r = i[s], (r.selected = rt.inArray(r.value, o) >= 0) && (n=!0);
                    return n || (e.selectedIndex =- 1), o
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = {
            set: function(e, t) {
                return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : i
            }
        }, et.checkOn || (rt.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        rt.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), rt.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var hn = rt.now(), gn = /\?/;
    rt.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, rt.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = i
        }
        return (!t || t.getElementsByTagName("parsererror").length) && rt.error("Invalid XML: " + e), t
    };
    var mn, yn, vn = /#.*$/, xn = /([?&])_=[^&]*/, bn = /^(.*?):[ \t]*([^\r\n]*)$/gm, wn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn = /^(?:GET|HEAD)$/, Cn = /^\/\//, Nn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, kn = {}, Dn = {}, Sn = "*/".concat("*");
    try {
        yn = location.href
    } catch (En) {
        yn = tt.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = Nn.exec(yn.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: wn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": r,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? I(I(e, rt.ajaxSettings), t) : I(rt.ajaxSettings, e)
        },
        ajaxPrefilter: $(kn),
        ajaxTransport: $(Dn),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var l, f, v, x, w, C = t;
                2 !== b && (b = 2, u && clearTimeout(u), r = i, s = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (x = R(p, T, n)), x = _(p, x, T, l), l ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (rt.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (rt.etag[o] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, f = x.data, v = x.error, l=!v)) : (v = C, (e ||!C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, v]), T.statusCode(y), y = i, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f: v]), m.fireWith(d, [T, C]), c && (h.trigger("ajaxComplete", [T, p]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = i), t = t || {};
            var r, o, s, a, u, l, c, f, p = rt.ajaxSetup({}, t), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? rt(d): rt.event, g = rt.Deferred(), m = rt.Callbacks("once memory"), y = p.statusCode || {}, v = {}, x = {}, b = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!a)
                            for (a = {}; t = bn.exec(s);)
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = x[n] = x[n] || e, v[e] = t), this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e), this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                y[t] = [y[t], e[t]];
                        else 
                            T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return r && r.abort(t), n(0, t), this
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || yn) + "").replace(vn, "").replace(Cn, mn[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = rt.trim(p.dataType || "*").toLowerCase().match(yt) || [""], null == p.crossDomain && (l = Nn.exec(p.url.toLowerCase()), p.crossDomain=!(!l || l[1] === mn[1] && l[2] === mn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = rt.param(p.data, p.traditional)), B(kn, p, t, T), 2 === b)
                return T;
            c = p.global, c && 0 === rt.active++&&rt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent=!Tn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (gn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache===!1 && (p.url = xn.test(o) ? o.replace(xn, "$1_=" + hn++) : o + (gn.test(o) ? "&" : "?") + "_=" + hn++)), p.ifModified && (rt.lastModified[o] && T.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && T.setRequestHeader("If-None-Match", rt.etag[o])), (p.data && p.hasContent && p.contentType!==!1 || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Sn + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers)
                T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p)===!1 || 2 === b))
                return T.abort();
            w = "abort";
            for (f in{
                success: 1,
                error: 1,
                complete: 1
            })
                T[f](p[f]);
            if (r = B(Dn, p, t, T)) {
                T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, r.send(v, n)
                } catch (C) {
                    if (!(2 > b))
                        throw C;
                    n( - 1, C)
                }
            } else 
                n( - 1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return rt.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return rt.get(e, i, t, "script")
        }
    }), rt.each(["get", "post"], function(e, t) {
        rt[t] = function(e, n, r, o) {
            return rt.isFunction(n) && (o = o || r, r = n, n = i), rt.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            })
        }
    }), rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        rt.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), rt._evalUrl = function(e) {
        return rt.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, rt.fn.extend({
        wrapAll: function(e) {
            var t;
            return rt.isFunction(e) ? this.each(function(t) {
                rt(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = rt(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;)
                    e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(rt.isFunction(e) ? function(t) {
                rt(this).wrapInner(e.call(this, t))
            } : function() {
                var t = rt(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = rt.isFunction(e);
            return this.each(function(n) {
                rt(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, rt.expr.filters.visible = function(e) {
        return !rt.expr.filters.hidden(e)
    };
    var jn = /%20/g, An = /\[\]$/, Ln = /\r?\n/g, qn = /^(?:submit|button|image|reset|file)$/i, Hn = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(e, t) {
        var n, r = [], o = function(e, t) {
            t = rt.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === i && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery&&!rt.isPlainObject(e))
            rt.each(e, function() {
                o(this.name, this.value)
            });
        else 
            for (n in e)
                X(n, e[n], t, o);
        return r.join("&").replace(jn, "+")
    }, rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = rt.prop(this, "elements");
                return e ? rt.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name&&!rt(this).is(":disabled") && Hn.test(this.nodeName)&&!qn.test(e) && (this.checked ||!Et.test(e))
            }).map(function(e, t) {
                var n = rt(this).val();
                return null == n ? null : rt.isArray(n) ? rt.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ln, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ln, "\r\n")
                }
            }).get()
        }
    }), rt.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var On = 0, Fn = {}, Pn = {
        0: 200,
        1223: 204
    }, Mn = rt.ajaxSettings.xhr();
    o.ActiveXObject && rt(o).on("unload", function() {
        for (var e in Fn)
            Fn[e]()
    }), et.cors=!!Mn && "withCredentials"in Mn, et.ajax = Mn=!!Mn, rt.ajaxTransport(function(e) {
        var t;
        return et.cors || Mn&&!e.crossDomain ? {
            send: function(n, r) {
                var o, s = e.xhr(), a=++On;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields)
                        s[o] = e.xhrFields[o];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n)
                    s.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete Fn[a], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status, s.statusText) : r(Pn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : i, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), s.onerror = t("error"), t = Fn[a] = t("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (u) {
                    if (t)
                        throw u
                }
            },
            abort: function() {
                t && t()
            }
        } : i
    });
    var Wn = [], $n = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wn.pop() || rt.expando + "_" + hn++;
            return this[e]=!0, e
        }
    }), rt.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, s, a, u = e.jsonp!==!1 && ($n.test(e.url) ? "url" : "string" == typeof e.data&&!(e.contentType || "").indexOf("application/x-www-form-urlencoded") && $n.test(e.data) && "data");
        return u || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace($n, "$1" + r) : e.jsonp!==!1 && (e.url += (gn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return a || rt.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", s = o[r], o[r] = function() {
            a = arguments
        }, n.always(function() {
            o[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, Wn.push(r)), a && rt.isFunction(s) && s(a[0]), a = s = i
        }), "script") : i
    }), rt.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t=!1), t = t || tt;
        var r = ct.exec(e), i=!n && [];
        return r ? [t.createElement(r[1])] : (r = rt.buildFragment([e], t, i), i && i.length && rt(i).remove(), rt.merge([], r.childNodes))
    };
    var Bn = rt.fn.load;
    rt.fn.load = function(e, t, n) {
        if ("string" != typeof e && Bn)
            return Bn.apply(this, arguments);
        var r, o, s, a = this, u = e.indexOf(" ");
        return u >= 0 && (r = rt.trim(e.slice(u)), e = e.slice(0, u)), rt.isFunction(t) ? (n = t, t = i) : t && "object" == typeof t && (o = "POST"), a.length > 0 && rt.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, a.html(r ? rt("<div>").append(rt.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, s || [e.responseText, t, e])
        }), this
    }, rt.expr.filters.animated = function(e) {
        return rt.grep(rt.timers, function(t) {
            return e === t.elem
        }).length
    };
    var In = o.document.documentElement;
    rt.offset = {
        setOffset: function(t, n, r) {
            var i, o, s, a, u, l, c, f = rt.css(t, "position"), p = rt(t), d = {};
            "static" === f && (t.style.position = "relative"), u = p.offset(), s = rt.css(t, "top"), l = rt.css(t, "left"), c = ("absolute" === f || "fixed" === f) && (s + l).indexOf("auto")>-1, c ? (i = p.position(), a = i.top, o = i.left) : (a = e(s) || 0, o = e(l) || 0), rt.isFunction(n) && (n = n.call(t, r, u)), null != n.top && (d.top = n.top - u.top + a), null != n.left && (d.left = n.left - u.left + o), "using"in n ? n.using.call(t, d) : p.css(d)
        }
    }, rt.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return e === i ? this : this.each(function(t) {
                    rt.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], o = {
                top: 0,
                left: 0
            }, s = r && r.ownerDocument;
            if (s)
                return t = s.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== jt && (o = r.getBoundingClientRect()), n = z(s), {
                    top: o.top + n.pageYOffset - t.clientTop,
                    left: o.left + n.pageXOffset - t.clientLeft
                }) : o
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === rt.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (r = e.offset()), r.top += rt.css(e[0], "borderTopWidth", !0), r.left += rt.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - rt.css(n, "marginTop", !0),
                    left: t.left - r.left - rt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || In; e&&!rt.nodeName(e, "html") && "static" === rt.css(e, "position");)
                    e = e.offsetParent;
                return e || In
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        rt.fn[e] = function(r) {
            return bt(this, function(e, r, s) {
                var a = z(e);
                return s === i ? a ? a[t] : e[r] : (a ? a.scrollTo(n ? o.pageXOffset : s, n ? s : o.pageYOffset) : e[r] = s, i)
            }, e, r, arguments.length, null)
        }
    }), rt.each(["top", "left"], function(e, t) {
        rt.cssHooks[t] = D(et.pixelPosition, function(e, n) {
            return n ? (n = k(e, t), Ut.test(n) ? rt(e).position()[t] + "px" : n) : i
        })
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        rt.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, o) {
            rt.fn[o] = function(o, s) {
                var a = arguments.length && (r || "boolean" != typeof o), u = r || (o===!0 || s===!0 ? "margin" : "border");
                return bt(this, function(n, r, o) {
                    var s;
                    return rt.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, t.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : o === i ? rt.css(n, r, u) : rt.style(n, r, o, u)
                }, n, a ? o : i, a, null)
            }
        })
    }), rt.noConflict = function() {}, _GPL.lj(rt)
}(parseFloat, Math, RegExp, String, void 0, this);


