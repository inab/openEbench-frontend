! function(t, e) { for (var A in e) t[A] = e[A] }(this, function(t) {
    var e = {};

    function A(r) { if (e[r]) return e[r].exports; var n = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(n.exports, n, n.exports, A), n.l = !0, n.exports }
    return A.m = t, A.c = e, A.d = function(t, e, r) { A.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, A.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, A.t = function(t, e) {
        if (1 & e && (t = A(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (A.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var n in t) A.d(r, n, function(e) { return t[e] }.bind(null, n));
        return r
    }, A.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return A.d(e, "a", e), e }, A.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, A.p = "", A(A.s = 5)
}([function(t, e, A) {
    "use strict";

    function r(t, e) {
        var A = this;
        this.location = n(t), this.label = n(e), this.updateLocation = function(t) {
            var e = t.filter(function(t) { return t.label() == A.label() });
            e.length > 0 && A.location(function(t) { var e = t[0].location().map(function() { return 0 }); return t.map(function(t) { return t.location() }).reduce(function(t, e) { return function(t, e) { return t.map(function(t, A) { return t + e[A] }) }(t, e) }, e).map(function(e) { return e / t.length }) }(e))
        }
    }

    function n(t, e) {
        var A = t,
            r = e || function(t) { return !0 };
        return function(t) {
            if (void 0 === t) return A;
            r(t) && (A = t)
        }
    }
    t.exports = {
        data: n([], function(t) { var e = t[0].length; return t.map(function(t) { return t.length == e }).reduce(function(t, e) { return t & e }, !0) }),
        clusters: function() {
            var t = function(t, e) {
                    for (var A = e.k || Math.round(Math.sqrt(t.length / 2)), i = e.iterations, o = t.map(function(t) {
                            return new function(t) {
                                var e = this;
                                this.location = n(t), this.label = n(), this.updateLabel = function(t) {
                                    var A = t.map(function(t) { return function(t, e) { return t.map(function(t, A) { return Math.pow(t - e[A], 2) }).reduce(function(t, e) { return t + e }, 0) }(e.location(), t.location()) });
                                    e.label(function(t) { var e = t.reduce(function(t, e) { return Math.min(t, e) }); return t.indexOf(e) }(A))
                                }
                            }(t)
                        }), s = [], a = 0; a < A; a++) s.push(new r(o[a % o.length].location(), a));
                    for (var c = 0; c < i; c++) o.forEach(function(t) { t.updateLabel(s) }), s.forEach(function(t) { t.updateLocation(o) });
                    return { points: o, centroids: s }
                }(this.data(), { k: this.k(), iterations: this.iterations() }),
                e = t.points;
            return t.centroids.map(function(t) { return { centroid: t.location(), points: e.filter(function(e) { return e.label() == t.label() }).map(function(t) { return t.location() }) } })
        },
        k: n(void 0, function(t) { return t % 1 == 0 & t > 0 }),
        iterations: n(Math.pow(10, 3), function(t) { return t % 1 == 0 & t > 0 })
    }
}, function(t, e, A) {
    "use strict";
    const r = Object.freeze({ topRight: (t, e) => e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : e[1] < t[1] ? -1 : e[1] > t[1] ? 1 : 0, topLeft: (t, e) => t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : t[1] < e[1] ? 1 : t[1] > e[1] ? -1 : 0, bottomRight: (t, e) => e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : e[1] < t[1] ? 1 : e[1] > t[1] ? -1 : 0, bottomLeft: (t, e) => t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : t[1] < e[1] ? -1 : t[1] > e[1] ? 1 : 0 });
    e.getParetoFrontier = ((t, e) => {
        if (!Array.isArray(t) || !t.every(t => Array.isArray(t) && t.length >= 2)) throw new TypeError("Require array of points as input");
        const A = e && r[e.optimize] || r.topRight,
            n = A([0, 1], [0, 0]) < 0;
        let i;
        return Array.from(t).sort(A).filter((t, e) => !!(0 === e || n && t[1] > i || !n && t[1] < i) && (i = t[1], !0))
    })
}, function(t, e, A) {
    ! function(t) {
        "use strict";
        var e = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };

        function A(t) {
            t.setAttribute("version", "1.1"), t.removeAttribute("xmlns"), t.removeAttribute("xlink"), t.hasAttributeNS(e.xmlns, "xmlns") || t.setAttributeNS(e.xmlns, "xmlns", e.svg), t.hasAttributeNS(e.xmlns, "xmlns:xlink") || t.setAttributeNS(e.xmlns, "xmlns:xlink", e.xlink),
                function(t) {
                    var A = window.document.createElementNS(e.svg, "svg");
                    window.document.body.appendChild(A);
                    for (var r = window.getComputedStyle(A), n = function(t) {
                            var e = [];
                            return e.push(t),
                                function t(A) {
                                    if (A && A.hasChildNodes())
                                        for (var r = A.firstChild; r;) 1 === r.nodeType && "SCRIPT" != r.nodeName && (e.push(r), t(r)), r = r.nextSibling
                                }(t), e
                        }(t), i = n.length; i--;) o(n[i]);

                    function o(t) {
                        var e, A, n, i, o = window.getComputedStyle(t),
                            s = "";
                        for (e = 0, A = o.length; e < A; e++) n = o[e], (i = o.getPropertyValue(n)) !== r.getPropertyValue(n) && "height" !== n && "width" !== n && (s += n + ":" + i + ";");
                        t.setAttribute("style", s)
                    }
                    A.parentNode.removeChild(A)
                }(t);
            var A = new XMLSerializer,
                r = A.serializeToString(t),
                n = t.getBoundingClientRect(),
                i = { top: n.top, left: n.left, width: n.width, height: n.height, class: t.getAttribute("class"), id: t.getAttribute("id"), childElementCount: t.childElementCount, source: ['<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + r] };
            return i
        }

        function r(t, e) {
            var A, r = new XMLHttpRequest(t);
            r.open("GET", t, !0), r.responseType = "arraybuffer", r.callback = e, r.onload = function() { A = function(t) { for (var e = new Uint8Array(t), A = e.length, r = []; A--;) r[A] = String.fromCharCode(e[A]); return window.btoa(r.join("")) }(this.response), this.callback(null, A) }, r.onerror = function() { e("B64 ERROR", null) }, r.send()
        }
        t.version = "0.0.2", t.save = function(t, e) {
            if ("svg" !== t.nodeName || 1 !== t.nodeType) throw "Need an svg element input";
            var r = function(t) { var e = "untitled"; return t.id ? e = t.id : t.class ? e = t.class : window.document.title && (e = window.document.title.replace(/[^a-z0-9]/gi, "-").toLowerCase()), e }(A(t, e = e || {})),
                n = e.filename || r;
            ! function(t, e) {
                window.URL = window.URL || window.webkitURL;
                var A = new Blob(t.source, { type: "text/xml" }),
                    r = window.URL.createObjectURL(A),
                    n = document.body,
                    i = document.createElement("a");
                n.appendChild(i), i.setAttribute("download", e + ".svg"), i.setAttribute("href", r), i.style.display = "none", i.click(), i.parentNode.removeChild(i), setTimeout(function() { window.URL.revokeObjectURL(r) }, 10)
            }(A(t), n)
        }, t.embedRasterImages = function(t) {
            var A = t.querySelectorAll("image");
            [].forEach.call(A, function(t) {
                var A = t.getAttribute("href");
                (function(t) { return !!t.match(/^\s*data:([a-z]+\/[a-z0-9\-]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i) })(A) || r(A, function(A, r) { t.setAttributeNS(e.xlink, "href", "data:image/png;base64," + r) })
            })
        }
    }(e)
}, function(t, e, A) {
    (function(r) {
        var n, i;
        n = function() {
            "use strict";
            /** @license
             * jsPDF - PDF Document creation from JavaScript
             * Version 1.5.3 Built on 2018-12-27T14:11:42.696Z
             *                      CommitID d93d28db14
             *
             * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
             *               2010 Aaron Spike, https://github.com/acspike
             *               2012 Willow Systems Corporation, willow-systems.com
             *               2012 Pablo Hess, https://github.com/pablohess
             *               2012 Florian Jenett, https://github.com/fjenett
             *               2013 Warren Weckesser, https://github.com/warrenweckesser
             *               2013 Youssef Beddad, https://github.com/lifof
             *               2013 Lee Driscoll, https://github.com/lsdriscoll
             *               2013 Stefan Slonevskiy, https://github.com/stefslon
             *               2013 Jeremy Morel, https://github.com/jmorel
             *               2013 Christoph Hartmann, https://github.com/chris-rock
             *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
             *               2014 James Makes, https://github.com/dollaruw
             *               2014 Diego Casorran, https://github.com/diegocr
             *               2014 Steven Spungin, https://github.com/Flamenco
             *               2014 Kenneth Glassey, https://github.com/Gavvers
             *
             * Licensed under the MIT License
             *
             * Contributor(s):
             *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
             *    kim3er, mfo, alnorth, Flamenco
             */
            function n(t) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }! function(t) {
                if ("object" !== n(t.console)) { t.console = {}; for (var e, A, r = t.console, i = function() {}, o = ["memory"], s = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); e = o.pop();) r[e] || (r[e] = {}); for (; A = s.pop();) r[A] || (r[A] = i) }
                var a, c, l, u, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                void 0 === t.btoa && (t.btoa = function(t) {
                    var e, A, r, n, i, o = 0,
                        s = 0,
                        a = "",
                        c = [];
                    if (!t) return t;
                    for (; e = (i = t.charCodeAt(o++) << 16 | t.charCodeAt(o++) << 8 | t.charCodeAt(o++)) >> 18 & 63, A = i >> 12 & 63, r = i >> 6 & 63, n = 63 & i, c[s++] = h.charAt(e) + h.charAt(A) + h.charAt(r) + h.charAt(n), o < t.length;);
                    a = c.join("");
                    var l = t.length % 3;
                    return (l ? a.slice(0, l - 3) : a) + "===".slice(l || 3)
                }), void 0 === t.atob && (t.atob = function(t) {
                    var e, A, r, n, i, o, s = 0,
                        a = 0,
                        c = [];
                    if (!t) return t;
                    for (t += ""; e = (o = h.indexOf(t.charAt(s++)) << 18 | h.indexOf(t.charAt(s++)) << 12 | (n = h.indexOf(t.charAt(s++))) << 6 | (i = h.indexOf(t.charAt(s++)))) >> 16 & 255, A = o >> 8 & 255, r = 255 & o, c[a++] = 64 == n ? String.fromCharCode(e) : 64 == i ? String.fromCharCode(e, A) : String.fromCharCode(e, A, r), s < t.length;);
                    return c.join("")
                }), Array.prototype.map || (Array.prototype.map = function(t) { if (null == this || "function" != typeof t) throw new TypeError; for (var e = Object(this), A = e.length >>> 0, r = new Array(A), n = 1 < arguments.length ? arguments[1] : void 0, i = 0; i < A; i++) i in e && (r[i] = t.call(n, e[i], i, e)); return r }), Array.isArray || (Array.isArray = function(t) { return "[object Array]" === Object.prototype.toString.call(t) }), Array.prototype.forEach || (Array.prototype.forEach = function(t, e) { if (null == this || "function" != typeof t) throw new TypeError; for (var A = Object(this), r = A.length >>> 0, n = 0; n < r; n++) n in A && t.call(e, A[n], n, A) }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                    value: function(t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var e = Object(this),
                            A = e.length >>> 0;
                        if ("function" != typeof t) throw new TypeError("predicate must be a function");
                        for (var r = arguments[1], n = 0; n < A;) {
                            var i = e[n];
                            if (t.call(r, i, n, e)) return i;
                            n++
                        }
                    },
                    configurable: !0,
                    writable: !0
                }), Object.keys || (Object.keys = (a = Object.prototype.hasOwnProperty, c = !{ toString: null }.propertyIsEnumerable("toString"), u = (l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(t) {
                    if ("object" !== n(t) && ("function" != typeof t || null === t)) throw new TypeError;
                    var e, A, r = [];
                    for (e in t) a.call(t, e) && r.push(e);
                    if (c)
                        for (A = 0; A < u; A++) a.call(t, l[A]) && r.push(l[A]);
                    return r
                })), "function" != typeof Object.assign && (Object.assign = function(t) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    t = Object(t);
                    for (var e = 1; e < arguments.length; e++) {
                        var A = arguments[e];
                        if (null != A)
                            for (var r in A) Object.prototype.hasOwnProperty.call(A, r) && (t[r] = A[r])
                    }
                    return t
                }), String.prototype.trim || (String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, "") }), String.prototype.trimLeft || (String.prototype.trimLeft = function() { return this.replace(/^\s+/g, "") }), String.prototype.trimRight || (String.prototype.trimRight = function() { return this.replace(/\s+$/g, "") }), Number.isInteger = Number.isInteger || function(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")());
            var o, s, a, c, l, u, h, f, d, p, g, B, w, m, y, v, b, C, Q, F, U, E, N, L, x, _, H, S, I, T, R, O, M, P, K, D, k, z, j, q, V, X, G, J, W, Y, Z, $, tt, et, At, rt, nt, it, ot, st, at, ct, lt, ut, ht, ft, dt = function(r) {
                function o(t) {
                    if ("object" !== n(t)) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
                    var e = {};
                    this.subscribe = function(t, A, r) {
                        if (r = r || !1, "string" != typeof t || "function" != typeof A || "boolean" != typeof r) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
                        e.hasOwnProperty(t) || (e[t] = {});
                        var n = Math.random().toString(35);
                        return e[t][n] = [A, !!r], n
                    }, this.unsubscribe = function(t) {
                        for (var A in e)
                            if (e[A][t]) return delete e[A][t], 0 === Object.keys(e[A]).length && delete e[A], !0;
                        return !1
                    }, this.publish = function(A) {
                        if (e.hasOwnProperty(A)) {
                            var n = Array.prototype.slice.call(arguments, 1),
                                i = [];
                            for (var o in e[A]) {
                                var s = e[A][o];
                                try { s[0].apply(t, n) } catch (A) { r.console && console.error("jsPDF PubSub Error", A.message, A) }
                                s[1] && i.push(o)
                            }
                            i.length && i.forEach(this.unsubscribe)
                        }
                    }, this.getTopics = function() { return e }
                }

                function s(t, e, A, i) {
                    var a = {},
                        c = [],
                        l = 1;
                    "object" === n(t) && (t = (a = t).orientation, e = a.unit || e, A = a.format || A, i = a.compress || a.compressPdf || i, c = a.filters || (!0 === i ? ["FlateEncode"] : c), l = "number" == typeof a.userUnit ? Math.abs(a.userUnit) : 1), e = e || "mm", t = ("" + (t || "P")).toLowerCase();
                    var u = a.putOnlyUsedFonts || !0,
                        h = {},
                        f = { internal: {}, __private__: {} };
                    f.__private__.PubSub = o;
                    var d = "1.3",
                        p = f.__private__.getPdfVersion = function() { return d },
                        g = (f.__private__.setPdfVersion = function(t) { d = t }, { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] }),
                        B = (f.__private__.getPageFormats = function() { return g }, f.__private__.getPageFormat = function(t) { return g[t] });
                    "string" == typeof A && (A = B(A)), A = A || B("a4");
                    var w, m = f.f2 = f.__private__.f2 = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2"); return t.toFixed(2) },
                        y = f.__private__.f3 = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3"); return t.toFixed(3) },
                        v = "00000000000000000000000000000000",
                        b = f.__private__.getFileId = function() { return v },
                        C = f.__private__.setFileId = function(t) { return t = t || "12345678901234567890123456789012".split("").map(function() { return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random())) }).join(""), v = t };
                    f.setFileId = function(t) { return C(t), this }, f.getFileId = function() { return b() };
                    var Q = f.__private__.convertDateToPDFDate = function(t) {
                            var e = t.getTimezoneOffset(),
                                A = e < 0 ? "+" : "-",
                                r = Math.floor(Math.abs(e / 60)),
                                n = Math.abs(e % 60),
                                i = [A, R(r), "'", R(n), "'"].join("");
                            return ["D:", t.getFullYear(), R(t.getMonth() + 1), R(t.getDate()), R(t.getHours()), R(t.getMinutes()), R(t.getSeconds()), i].join("")
                        },
                        F = f.__private__.convertPDFDateToDate = function(t) {
                            var e = parseInt(t.substr(2, 4), 10),
                                A = parseInt(t.substr(6, 2), 10) - 1,
                                r = parseInt(t.substr(8, 2), 10),
                                n = parseInt(t.substr(10, 2), 10),
                                i = parseInt(t.substr(12, 2), 10),
                                o = parseInt(t.substr(14, 2), 10);
                            return parseInt(t.substr(16, 2), 10), parseInt(t.substr(20, 2), 10), new Date(e, A, r, n, i, o, 0)
                        },
                        U = f.__private__.setCreationDate = function(t) {
                            var e;
                            if (void 0 === t && (t = new Date), "object" === n(t) && "[object Date]" === Object.prototype.toString.call(t)) e = Q(t);
                            else {
                                if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
                                e = t
                            }
                            return w = e
                        },
                        E = f.__private__.getCreationDate = function(t) { var e = w; return "jsDate" === t && (e = F(w)), e };
                    f.setCreationDate = function(t) { return U(t), this }, f.getCreationDate = function(t) { return E(t) };
                    var N, L, x, _, H, S, I, T, R = f.__private__.padd2 = function(t) { return ("0" + parseInt(t)).slice(-2) },
                        O = !1,
                        M = [],
                        P = [],
                        K = 0,
                        D = (f.__private__.setCustomOutputDestination = function(t) { L = t }, f.__private__.resetCustomOutputDestination = function(t) { L = void 0 }, f.__private__.out = function(t) { var e; return t = "string" == typeof t ? t : t.toString(), (e = void 0 === L ? O ? M[N] : P : L).push(t), O || (K += t.length + 1), e }),
                        k = f.__private__.write = function(t) { return D(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " ")) },
                        z = f.__private__.getArrayBuffer = function(t) { for (var e = t.length, A = new ArrayBuffer(e), r = new Uint8Array(A); e--;) r[e] = t.charCodeAt(e); return A },
                        j = [
                            ["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
                            ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
                            ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
                            ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
                            ["Courier", "courier", "normal", "WinAnsiEncoding"],
                            ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
                            ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
                            ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
                            ["Times-Roman", "times", "normal", "WinAnsiEncoding"],
                            ["Times-Bold", "times", "bold", "WinAnsiEncoding"],
                            ["Times-Italic", "times", "italic", "WinAnsiEncoding"],
                            ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
                            ["ZapfDingbats", "zapfdingbats", "normal", null],
                            ["Symbol", "symbol", "normal", null]
                        ],
                        q = (f.__private__.getStandardFonts = function(t) { return j }, a.fontSize || 16),
                        V = (f.__private__.setFontSize = f.setFontSize = function(t) { return q = t, this }, f.__private__.getFontSize = f.getFontSize = function() { return q }),
                        X = a.R2L || !1,
                        G = (f.__private__.setR2L = f.setR2L = function(t) { return X = t, this }, f.__private__.getR2L = f.getR2L = function(t) { return X }, f.__private__.setZoomMode = function(t) {
                            if (/^\d*\.?\d*\%$/.test(t)) x = t;
                            else if (isNaN(t)) {
                                if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(t)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
                                x = t
                            } else x = parseInt(t, 10)
                        }),
                        J = (f.__private__.getZoomMode = function() { return x }, f.__private__.setPageMode = function(t) {
                            if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
                            _ = t
                        }),
                        W = (f.__private__.getPageMode = function() { return _ }, f.__private__.setLayoutMode = function(t) {
                            if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
                            H = t
                        }),
                        Y = (f.__private__.getLayoutMode = function() { return H }, f.__private__.setDisplayMode = f.setDisplayMode = function(t, e, A) { return G(t), W(e), J(A), this }, { title: "", subject: "", author: "", keywords: "", creator: "" }),
                        Z = (f.__private__.getDocumentProperty = function(t) { if (-1 === Object.keys(Y).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty"); return Y[t] }, f.__private__.getDocumentProperties = function(t) { return Y }, f.__private__.setDocumentProperties = f.setProperties = f.setDocumentProperties = function(t) { for (var e in Y) Y.hasOwnProperty(e) && t[e] && (Y[e] = t[e]); return this }, f.__private__.setDocumentProperty = function(t, e) { if (-1 === Object.keys(Y).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty"); return Y[t] = e }, 0),
                        $ = [],
                        tt = {},
                        et = {},
                        At = 0,
                        rt = [],
                        nt = [],
                        it = new o(f),
                        ot = a.hotfixes || [],
                        st = f.__private__.newObject = function() { var t = at(); return ct(t, !0), t },
                        at = f.__private__.newObjectDeferred = function() { return $[++Z] = function() { return K }, Z },
                        ct = function(t, e) { return e = "boolean" == typeof e && e, $[t] = K, e && D(t + " 0 obj"), t },
                        lt = f.__private__.newAdditionalObject = function() { var t = { objId: at(), content: "" }; return nt.push(t), t },
                        ut = at(),
                        ht = at(),
                        ft = f.__private__.decodeColorString = function(t) {
                            var e = t.split(" ");
                            if (2 === e.length && ("g" === e[1] || "G" === e[1])) {
                                var A = parseFloat(e[0]);
                                e = [A, A, A, "r"]
                            }
                            for (var r = "#", n = 0; n < 3; n++) r += ("0" + Math.floor(255 * parseFloat(e[n])).toString(16)).slice(-2);
                            return r
                        },
                        dt = f.__private__.encodeColorString = function(t) {
                            var e;
                            "string" == typeof t && (t = { ch1: t });
                            var A = t.ch1,
                                r = t.ch2,
                                i = t.ch3,
                                o = t.ch4,
                                s = (t.precision, "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"]);
                            if ("string" == typeof A && "#" !== A.charAt(0)) {
                                var a = new RGBColor(A);
                                if (a.ok) A = a.toHex();
                                else if (!/^\d*\.?\d*$/.test(A)) throw new Error('Invalid color "' + A + '" passed to jsPDF.encodeColorString.')
                            }
                            if ("string" == typeof A && /^#[0-9A-Fa-f]{3}$/.test(A) && (A = "#" + A[1] + A[1] + A[2] + A[2] + A[3] + A[3]), "string" == typeof A && /^#[0-9A-Fa-f]{6}$/.test(A)) {
                                var c = parseInt(A.substr(1), 16);
                                A = c >> 16 & 255, r = c >> 8 & 255, i = 255 & c
                            }
                            if (void 0 === r || void 0 === o && A === r && r === i)
                                if ("string" == typeof A) e = A + " " + s[0];
                                else switch (t.precision) {
                                    case 2:
                                        e = m(A / 255) + " " + s[0];
                                        break;
                                    case 3:
                                    default:
                                        e = y(A / 255) + " " + s[0]
                                } else if (void 0 === o || "object" === n(o)) {
                                    if (o && !isNaN(o.a) && 0 === o.a) return e = ["1.000", "1.000", "1.000", s[1]].join(" ");
                                    if ("string" == typeof A) e = [A, r, i, s[1]].join(" ");
                                    else switch (t.precision) {
                                        case 2:
                                            e = [m(A / 255), m(r / 255), m(i / 255), s[1]].join(" ");
                                            break;
                                        default:
                                        case 3:
                                            e = [y(A / 255), y(r / 255), y(i / 255), s[1]].join(" ")
                                    }
                                } else if ("string" == typeof A) e = [A, r, i, o, s[2]].join(" ");
                            else switch (t.precision) {
                                case 2:
                                    e = [m(A / 255), m(r / 255), m(i / 255), m(o / 255), s[2]].join(" ");
                                    break;
                                case 3:
                                default:
                                    e = [y(A / 255), y(r / 255), y(i / 255), y(o / 255), s[2]].join(" ")
                            }
                            return e
                        },
                        pt = f.__private__.getFilters = function() { return c },
                        gt = f.__private__.putStream = function(t) {
                            var e = (t = t || {}).data || "",
                                A = t.filters || pt(),
                                r = t.alreadyAppliedFilters || [],
                                n = t.addLength1 || !1,
                                i = e.length,
                                o = {};
                            !0 === A && (A = ["FlateEncode"]);
                            var a = t.additionalKeyValues || [],
                                c = (o = void 0 !== s.API.processDataByFilters ? s.API.processDataByFilters(e, A) : { data: e, reverseChain: [] }).reverseChain + (Array.isArray(r) ? r.join(" ") : r.toString());
                            0 !== o.data.length && (a.push({ key: "Length", value: o.data.length }), !0 === n && a.push({ key: "Length1", value: i })), 0 != c.length && (c.split("/").length - 1 == 1 ? a.push({ key: "Filter", value: c }) : a.push({ key: "Filter", value: "[" + c + "]" })), D("<<");
                            for (var l = 0; l < a.length; l++) D("/" + a[l].key + " " + a[l].value);
                            D(">>"), 0 !== o.data.length && (D("stream"), D(o.data), D("endstream"))
                        },
                        Bt = f.__private__.putPage = function(t) {
                            t.mediaBox;
                            var e = t.number,
                                A = t.data,
                                r = t.objId,
                                n = t.contentsObjId;
                            ct(r, !0), rt[N].mediaBox.topRightX, rt[N].mediaBox.bottomLeftX, rt[N].mediaBox.topRightY, rt[N].mediaBox.bottomLeftY, D("<</Type /Page"), D("/Parent " + t.rootDictionaryObjId + " 0 R"), D("/Resources " + t.resourceDictionaryObjId + " 0 R"), D("/MediaBox [" + parseFloat(m(t.mediaBox.bottomLeftX)) + " " + parseFloat(m(t.mediaBox.bottomLeftY)) + " " + m(t.mediaBox.topRightX) + " " + m(t.mediaBox.topRightY) + "]"), null !== t.cropBox && D("/CropBox [" + m(t.cropBox.bottomLeftX) + " " + m(t.cropBox.bottomLeftY) + " " + m(t.cropBox.topRightX) + " " + m(t.cropBox.topRightY) + "]"), null !== t.bleedBox && D("/BleedBox [" + m(t.bleedBox.bottomLeftX) + " " + m(t.bleedBox.bottomLeftY) + " " + m(t.bleedBox.topRightX) + " " + m(t.bleedBox.topRightY) + "]"), null !== t.trimBox && D("/TrimBox [" + m(t.trimBox.bottomLeftX) + " " + m(t.trimBox.bottomLeftY) + " " + m(t.trimBox.topRightX) + " " + m(t.trimBox.topRightY) + "]"), null !== t.artBox && D("/ArtBox [" + m(t.artBox.bottomLeftX) + " " + m(t.artBox.bottomLeftY) + " " + m(t.artBox.topRightX) + " " + m(t.artBox.topRightY) + "]"), "number" == typeof t.userUnit && 1 !== t.userUnit && D("/UserUnit " + t.userUnit), it.publish("putPage", { objId: r, pageContext: rt[e], pageNumber: e, page: A }), D("/Contents " + n + " 0 R"), D(">>"), D("endobj");
                            var i = A.join("\n");
                            return ct(n, !0), gt({ data: i, filters: pt() }), D("endobj"), r
                        },
                        wt = f.__private__.putPages = function() {
                            var t, e, A = [];
                            for (t = 1; t <= At; t++) rt[t].objId = at(), rt[t].contentsObjId = at();
                            for (t = 1; t <= At; t++) A.push(Bt({ number: t, data: M[t], objId: rt[t].objId, contentsObjId: rt[t].contentsObjId, mediaBox: rt[t].mediaBox, cropBox: rt[t].cropBox, bleedBox: rt[t].bleedBox, trimBox: rt[t].trimBox, artBox: rt[t].artBox, userUnit: rt[t].userUnit, rootDictionaryObjId: ut, resourceDictionaryObjId: ht }));
                            ct(ut, !0), D("<</Type /Pages");
                            var r = "/Kids [";
                            for (e = 0; e < At; e++) r += A[e] + " 0 R ";
                            D(r + "]"), D("/Count " + At), D(">>"), D("endobj"), it.publish("postPutPages")
                        },
                        mt = function(t, e, A) { et.hasOwnProperty(e) || (et[e] = {}), et[e][A] = t },
                        yt = function(t, e, A, r, n) {
                            n = n || !1;
                            var i = "F" + (Object.keys(tt).length + 1).toString(10),
                                o = { id: i, postScriptName: t, fontName: e, fontStyle: A, encoding: r, isStandardFont: n, metadata: {} };
                            return it.publish("addFont", { font: o, instance: this }), void 0 !== i && (tt[i] = o, mt(i, e, A)), i
                        },
                        vt = f.__private__.pdfEscape = f.pdfEscape = function(t, e) {
                            return function(t, e) {
                                var A, r, n, i, o, s, a, c, l;
                                if (n = (e = e || {}).sourceEncoding || "Unicode", o = e.outputEncoding, (e.autoencode || o) && tt[S].metadata && tt[S].metadata[n] && tt[S].metadata[n].encoding && (i = tt[S].metadata[n].encoding, !o && tt[S].encoding && (o = tt[S].encoding), !o && i.codePages && (o = i.codePages[0]), "string" == typeof o && (o = i[o]), o)) {
                                    for (a = !1, s = [], A = 0, r = t.length; A < r; A++)(c = o[t.charCodeAt(A)]) ? s.push(String.fromCharCode(c)) : s.push(t[A]), s[A].charCodeAt(0) >> 8 && (a = !0);
                                    t = s.join("")
                                }
                                for (A = t.length; void 0 === a && 0 !== A;) t.charCodeAt(A - 1) >> 8 && (a = !0), A--;
                                if (!a) return t;
                                for (s = e.noBOM ? [] : [254, 255], A = 0, r = t.length; A < r; A++) {
                                    if ((l = (c = t.charCodeAt(A)) >> 8) >> 8) throw new Error("Character at position " + A + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                                    s.push(l), s.push(c - (l << 8))
                                }
                                return String.fromCharCode.apply(void 0, s)
                            }(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
                        },
                        bt = f.__private__.beginPage = function(t, e) {
                            var r, n = "string" == typeof e && e.toLowerCase();
                            if ("string" == typeof t && (r = B(t.toLowerCase())) && (t = r[0], e = r[1]), Array.isArray(t) && (e = t[1], t = t[0]), (isNaN(t) || isNaN(e)) && (t = A[0], e = A[1]), n) {
                                switch (n.substr(0, 1)) {
                                    case "l":
                                        t < e && (n = "s");
                                        break;
                                    case "p":
                                        e < t && (n = "s")
                                }
                                "s" === n && (r = t, t = e, e = r)
                            }(14400 < t || 14400 < e) && (console.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), t = Math.min(14400, t), e = Math.min(14400, e)), A = [t, e], O = !0, M[++At] = [], rt[At] = { objId: 0, contentsObjId: 0, userUnit: Number(l), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(t), topRightY: Number(e) } }, Qt(At)
                        },
                        Ct = function() { bt.apply(this, arguments), jt(zt), D(Zt), 0 !== ne && D(ne + " J"), 0 !== oe && D(oe + " j"), it.publish("addPage", { pageNumber: At }) },
                        Qt = function(t) { 0 < t && t <= At && (N = t) },
                        Ft = f.__private__.getNumberOfPages = f.getNumberOfPages = function() { return M.length - 1 },
                        Ut = function(t, e, A) { var r, n = void 0; return A = A || {}, t = void 0 !== t ? t : tt[S].fontName, e = void 0 !== e ? e : tt[S].fontStyle, r = t.toLowerCase(), void 0 !== et[r] && void 0 !== et[r][e] ? n = et[r][e] : void 0 !== et[t] && void 0 !== et[t][e] ? n = et[t][e] : !1 === A.disableWarning && console.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."), n || A.noFallback || null == (n = et.times[e]) && (n = et.times.normal), n },
                        Et = f.__private__.putInfo = function() {
                            for (var t in st(), D("<<"), D("/Producer (jsPDF " + s.version + ")"), Y) Y.hasOwnProperty(t) && Y[t] && D("/" + t.substr(0, 1).toUpperCase() + t.substr(1) + " (" + vt(Y[t]) + ")");
                            D("/CreationDate (" + w + ")"), D(">>"), D("endobj")
                        },
                        Nt = f.__private__.putCatalog = function(t) {
                            var e = (t = t || {}).rootDictionaryObjId || ut;
                            switch (st(), D("<<"), D("/Type /Catalog"), D("/Pages " + e + " 0 R"), x || (x = "fullwidth"), x) {
                                case "fullwidth":
                                    D("/OpenAction [3 0 R /FitH null]");
                                    break;
                                case "fullheight":
                                    D("/OpenAction [3 0 R /FitV null]");
                                    break;
                                case "fullpage":
                                    D("/OpenAction [3 0 R /Fit]");
                                    break;
                                case "original":
                                    D("/OpenAction [3 0 R /XYZ null null 1]");
                                    break;
                                default:
                                    var A = "" + x;
                                    "%" === A.substr(A.length - 1) && (x = parseInt(x) / 100), "number" == typeof x && D("/OpenAction [3 0 R /XYZ null null " + m(x) + "]")
                            }
                            switch (H || (H = "continuous"), H) {
                                case "continuous":
                                    D("/PageLayout /OneColumn");
                                    break;
                                case "single":
                                    D("/PageLayout /SinglePage");
                                    break;
                                case "two":
                                case "twoleft":
                                    D("/PageLayout /TwoColumnLeft");
                                    break;
                                case "tworight":
                                    D("/PageLayout /TwoColumnRight")
                            }
                            _ && D("/PageMode /" + _), it.publish("putCatalog"), D(">>"), D("endobj")
                        },
                        Lt = f.__private__.putTrailer = function() { D("trailer"), D("<<"), D("/Size " + (Z + 1)), D("/Root " + Z + " 0 R"), D("/Info " + (Z - 1) + " 0 R"), D("/ID [ <" + v + "> <" + v + "> ]"), D(">>") },
                        _t = f.__private__.putHeader = function() { D("%PDF-" + d), D("%ºß¬à") },
                        Ht = f.__private__.putXRef = function() {
                            var t = 1,
                                e = "0000000000";
                            for (D("xref"), D("0 " + (Z + 1)), D("0000000000 65535 f "), t = 1; t <= Z; t++) "function" == typeof $[t] ? D((e + $[t]()).slice(-10) + " 00000 n ") : void 0 !== $[t] ? D((e + $[t]).slice(-10) + " 00000 n ") : D("0000000000 00000 n ")
                        },
                        St = f.__private__.buildDocument = function() {
                            O = !1, K = Z = 0, P = [], $ = [], nt = [], ut = at(), ht = at(), it.publish("buildDocument"), _t(), wt(),
                                function() {
                                    it.publish("putAdditionalObjects");
                                    for (var t = 0; t < nt.length; t++) {
                                        var e = nt[t];
                                        ct(e.objId, !0), D(e.content), D("endobj")
                                    }
                                    it.publish("postPutAdditionalObjects")
                                }(),
                                function() { for (var t in tt) tt.hasOwnProperty(t) && (!1 === u || !0 === u && h.hasOwnProperty(t)) && (e = tt[t], it.publish("putFont", { font: e, out: D, newObject: st, putStream: gt }), !0 !== e.isAlreadyPutted && (e.objectNumber = st(), D("<<"), D("/Type /Font"), D("/BaseFont /" + e.postScriptName), D("/Subtype /Type1"), "string" == typeof e.encoding && D("/Encoding /" + e.encoding), D("/FirstChar 32"), D("/LastChar 255"), D(">>"), D("endobj"))); var e }(), it.publish("putResources"), ct(ht, !0), D("<<"),
                                function() {
                                    for (var t in D("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), D("/Font <<"), tt) tt.hasOwnProperty(t) && (!1 === u || !0 === u && h.hasOwnProperty(t)) && D("/" + t + " " + tt[t].objectNumber + " 0 R");
                                    D(">>"), D("/XObject <<"), it.publish("putXobjectDict"), D(">>")
                                }(), D(">>"), D("endobj"), it.publish("postPutResources"), Et(), Nt();
                            var t = K;
                            return Ht(), Lt(), D("startxref"), D("" + t), D("%%EOF"), O = !0, P.join("\n")
                        },
                        It = f.__private__.getBlob = function(t) { return new Blob([z(t)], { type: "application/pdf" }) },
                        Tt = f.output = f.__private__.output = ((T = function(t, e) {
                            e = e || {};
                            var A = St();
                            switch ("string" == typeof e ? e = { filename: e } : e.filename = e.filename || "generated.pdf", t) {
                                case void 0:
                                    return A;
                                case "save":
                                    f.save(e.filename);
                                    break;
                                case "arraybuffer":
                                    return z(A);
                                case "blob":
                                    return It(A);
                                case "bloburi":
                                case "bloburl":
                                    if (void 0 !== r.URL && "function" == typeof r.URL.createObjectURL) return r.URL && r.URL.createObjectURL(It(A)) || void 0;
                                    console.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                                    break;
                                case "datauristring":
                                case "dataurlstring":
                                    return "data:application/pdf;filename=" + e.filename + ";base64," + btoa(A);
                                case "dataurlnewwindow":
                                    var n = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring") + '"></iframe></body></html>',
                                        i = r.open();
                                    if (null !== i && i.document.write(n), i || "undefined" == typeof safari) return i;
                                case "datauri":
                                case "dataurl":
                                    return r.document.location.href = "data:application/pdf;filename=" + e.filename + ";base64," + btoa(A);
                                default:
                                    return null
                            }
                        }).foo = function() {
                            try { return T.apply(this, arguments) } catch (A) {
                                var t = A.stack || "";
                                ~t.indexOf(" at ") && (t = t.split(" at ")[1]);
                                var e = "Error in function " + t.split("\n")[0].split("<")[0] + ": " + A.message;
                                if (!r.console) throw new Error(e);
                                r.console.error(e, A), r.alert && alert(e)
                            }
                        }, (T.foo.bar = T).foo),
                        Rt = function(t) { return !0 === Array.isArray(ot) && -1 < ot.indexOf(t) };
                    switch (e) {
                        case "pt":
                            I = 1;
                            break;
                        case "mm":
                            I = 72 / 25.4;
                            break;
                        case "cm":
                            I = 72 / 2.54;
                            break;
                        case "in":
                            I = 72;
                            break;
                        case "px":
                            I = 1 == Rt("px_scaling") ? .75 : 96 / 72;
                            break;
                        case "pc":
                        case "em":
                            I = 12;
                            break;
                        case "ex":
                            I = 6;
                            break;
                        default:
                            throw new Error("Invalid unit: " + e)
                    }
                    U(), C();
                    var Ot = f.__private__.getPageInfo = function(t) { if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo"); return { objId: rt[t].objId, pageNumber: t, pageContext: rt[t] } },
                        Mt = f.__private__.getPageInfoByObjId = function(t) {
                            for (var e in rt)
                                if (rt[e].objId === t) break;
                            if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
                            return Ot(e)
                        },
                        Pt = f.__private__.getCurrentPageInfo = function() { return { objId: rt[N].objId, pageNumber: N, pageContext: rt[N] } };
                    f.addPage = function() { return Ct.apply(this, arguments), this }, f.setPage = function() { return Qt.apply(this, arguments), this }, f.insertPage = function(t) { return this.addPage(), this.movePage(N, t), this }, f.movePage = function(t, e) {
                        if (e < t) {
                            for (var A = M[t], r = rt[t], n = t; e < n; n--) M[n] = M[n - 1], rt[n] = rt[n - 1];
                            M[e] = A, rt[e] = r, this.setPage(e)
                        } else if (t < e) {
                            for (A = M[t], r = rt[t], n = t; n < e; n++) M[n] = M[n + 1], rt[n] = rt[n + 1];
                            M[e] = A, rt[e] = r, this.setPage(e)
                        }
                        return this
                    }, f.deletePage = function() { return function(t) { 0 < t && t <= At && (M.splice(t, 1), --At < N && (N = At), this.setPage(N)) }.apply(this, arguments), this }, f.__private__.text = f.text = function(t, e, A, r) {
                        var i;
                        "number" != typeof t || "number" != typeof e || "string" != typeof A && !Array.isArray(A) || (i = A, A = e, e = t, t = i);
                        var o = arguments[3],
                            s = arguments[4],
                            a = arguments[5];
                        if ("object" === n(o) && null !== o || ("string" == typeof s && (a = s, s = null), "string" == typeof o && (a = o, o = null), "number" == typeof o && (s = o, o = null), r = { flags: o, angle: s, align: a }), (o = o || {}).noBOM = o.noBOM || !0, o.autoencode = o.autoencode || !0, isNaN(e) || isNaN(A) || null == t) throw new Error("Invalid arguments passed to jsPDF.text");
                        if (0 === t.length) return f;
                        var c, l = "",
                            u = "number" == typeof r.lineHeightFactor ? r.lineHeightFactor : kt,
                            f = r.scope || this;

                        function d(t) { for (var e, A = t.concat(), r = [], n = A.length; n--;) "string" == typeof(e = A.shift()) ? r.push(e) : Array.isArray(t) && 1 === e.length ? r.push(e[0]) : r.push([e[0], e[1], e[2]]); return r }

                        function p(t, e) {
                            var A;
                            if ("string" == typeof t) A = e(t)[0];
                            else if (Array.isArray(t)) {
                                for (var r, n, i = t.concat(), o = [], s = i.length; s--;) "string" == typeof(r = i.shift()) ? o.push(e(r)[0]) : Array.isArray(r) && "string" === r[0] && (n = e(r[0], r[1], r[2]), o.push([n[0], n[1], n[2]]));
                                A = o
                            }
                            return A
                        }
                        var g = !1,
                            B = !0;
                        if ("string" == typeof t) g = !0;
                        else if (Array.isArray(t)) {
                            for (var w, v = t.concat(), b = [], C = v.length; C--;)("string" != typeof(w = v.shift()) || Array.isArray(w) && "string" != typeof w[0]) && (B = !1);
                            g = B
                        }
                        if (!1 === g) throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
                        var Q = tt[S].encoding;
                        "WinAnsiEncoding" !== Q && "StandardEncoding" !== Q || (t = p(t, function(t, e, A) { return [(n = t, n = n.split("\t").join(Array(r.TabLen || 9).join(" ")), vt(n, o)), e, A]; var n })), "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
                        var F = q / f.internal.scaleFactor,
                            U = F * (kt - 1);
                        switch (r.baseline) {
                            case "bottom":
                                A -= U;
                                break;
                            case "top":
                                A += F - U;
                                break;
                            case "hanging":
                                A += F - 2 * U;
                                break;
                            case "middle":
                                A += F / 2 - U
                        }
                        0 < (k = r.maxWidth || 0) && ("string" == typeof t ? t = f.splitTextToSize(t, k) : "[object Array]" === Object.prototype.toString.call(t) && (t = f.splitTextToSize(t.join(" "), k)));
                        var E = { text: t, x: e, y: A, options: r, mutex: { pdfEscape: vt, activeFontKey: S, fonts: tt, activeFontSize: q } };
                        it.publish("preProcessText", E), t = E.text, s = (r = E.options).angle;
                        var N = f.internal.scaleFactor,
                            L = [];
                        if (s) {
                            s *= Math.PI / 180;
                            var x = Math.cos(s),
                                _ = Math.sin(s);
                            L = [m(x), m(_), m(-1 * _), m(x)]
                        }
                        void 0 !== (K = r.charSpace) && (l += y(K * N) + " Tc\n"), r.lang;
                        var H = -1,
                            I = void 0 !== r.renderingMode ? r.renderingMode : r.stroke,
                            T = f.internal.getCurrentPageInfo().pageContext;
                        switch (I) {
                            case 0:
                            case !1:
                            case "fill":
                                H = 0;
                                break;
                            case 1:
                            case !0:
                            case "stroke":
                                H = 1;
                                break;
                            case 2:
                            case "fillThenStroke":
                                H = 2;
                                break;
                            case 3:
                            case "invisible":
                                H = 3;
                                break;
                            case 4:
                            case "fillAndAddForClipping":
                                H = 4;
                                break;
                            case 5:
                            case "strokeAndAddPathForClipping":
                                H = 5;
                                break;
                            case 6:
                            case "fillThenStrokeAndAddToPathForClipping":
                                H = 6;
                                break;
                            case 7:
                            case "addToPathForClipping":
                                H = 7
                        }
                        var R = void 0 !== T.usedRenderingMode ? T.usedRenderingMode : -1; - 1 !== H ? l += H + " Tr\n" : -1 !== R && (l += "0 Tr\n"), -1 !== H && (T.usedRenderingMode = H), a = r.align || "left";
                        var O = q * u,
                            M = f.internal.pageSize.getWidth(),
                            P = (N = f.internal.scaleFactor, tt[S]),
                            K = r.charSpace || Ae,
                            k = r.maxWidth || 0,
                            z = (o = {}, []);
                        if ("[object Array]" === Object.prototype.toString.call(t)) {
                            var j, V;
                            b = d(t), "left" !== a && (V = b.map(function(t) { return f.getStringUnitWidth(t, { font: P, charSpace: K, fontSize: q }) * q / N })), Math.max.apply(Math, V);
                            var G, J = 0;
                            if ("right" === a) { e -= V[0], t = []; var W = 0; for (C = b.length; W < C; W++) V[W], j = 0 === W ? (G = Gt(e), Jt(A)) : (G = (J - V[W]) * N, -O), t.push([b[W], G, j]), J = V[W] } else if ("center" === a)
                                for (e -= V[0] / 2, t = [], W = 0, C = b.length; W < C; W++) V[W], j = 0 === W ? (G = Gt(e), Jt(A)) : (G = (J - V[W]) / 2 * N, -O), t.push([b[W], G, j]), J = V[W];
                            else if ("left" === a)
                                for (t = [], W = 0, C = b.length; W < C; W++) j = 0 === W ? Jt(A) : -O, G = 0 === W ? Gt(e) : 0, t.push(b[W]);
                            else { if ("justify" !== a) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".'); for (t = [], k = 0 !== k ? k : M, W = 0, C = b.length; W < C; W++) j = 0 === W ? Jt(A) : -O, G = 0 === W ? Gt(e) : 0, W < C - 1 && z.push(((k - V[W]) / (b[W].split(" ").length - 1) * N).toFixed(2)), t.push([b[W], G, j]) }
                        }!0 === ("boolean" == typeof r.R2L ? r.R2L : X) && (t = p(t, function(t, e, A) { return [t.split("").reverse().join(""), e, A] })), E = { text: t, x: e, y: A, options: r, mutex: { pdfEscape: vt, activeFontKey: S, fonts: tt, activeFontSize: q } }, it.publish("postProcessText", E), t = E.text, c = E.mutex.isHex, b = d(t), t = [];
                        var Y, Z, $, et = 0,
                            At = (C = b.length, "");
                        for (W = 0; W < C; W++) At = "", Array.isArray(b[W]) ? (Y = parseFloat(b[W][1]), Z = parseFloat(b[W][2]), $ = (c ? "<" : "(") + b[W][0] + (c ? ">" : ")"), et = 1) : (Y = Gt(e), Z = Jt(A), $ = (c ? "<" : "(") + b[W] + (c ? ">" : ")")), void 0 !== z && void 0 !== z[W] && (At = z[W] + " Tw\n"), 0 !== L.length && 0 === W ? t.push(At + L.join(" ") + " " + Y.toFixed(2) + " " + Z.toFixed(2) + " Tm\n" + $) : 1 === et || 0 === et && 0 === W ? t.push(At + Y.toFixed(2) + " " + Z.toFixed(2) + " Td\n" + $) : t.push(At + $);
                        t = 0 === et ? t.join(" Tj\nT* ") : t.join(" Tj\n"), t += " Tj\n";
                        var rt = "BT\n/" + S + " " + q + " Tf\n" + (q * u).toFixed(2) + " TL\n" + te + "\n";
                        return rt += l, rt += t, D(rt += "ET"), h[S] = !0, f
                    }, f.__private__.lstext = f.lstext = function(t, e, A, r) { return console.warn("jsPDF.lstext is deprecated"), this.text(t, e, A, { charSpace: r }) }, f.__private__.clip = f.clip = function(t) { D("evenodd" === t ? "W*" : "W"), D("n") }, f.__private__.clip_fixed = f.clip_fixed = function(t) { console.log("clip_fixed is deprecated"), f.clip(t) };
                    var Kt = f.__private__.isValidStyle = function(t) { var e = !1; return -1 !== [void 0, null, "S", "F", "DF", "FD", "f", "f*", "B", "B*"].indexOf(t) && (e = !0), e },
                        Dt = f.__private__.getStyle = function(t) { var e = "S"; return "F" === t ? e = "f" : "FD" === t || "DF" === t ? e = "B" : "f" !== t && "f*" !== t && "B" !== t && "B*" !== t || (e = t), e };
                    f.__private__.line = f.line = function(t, e, A, r) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r)) throw new Error("Invalid arguments passed to jsPDF.line");
                        return this.lines([
                            [A - t, r - e]
                        ], t, e)
                    }, f.__private__.lines = f.lines = function(t, e, A, r, n, i) { var o, s, a, c, l, u, h, f, d, p, g, B; if ("number" == typeof t && (B = A, A = e, e = t, t = B), r = r || [1, 1], i = i || !1, isNaN(e) || isNaN(A) || !Array.isArray(t) || !Array.isArray(r) || !Kt(n) || "boolean" != typeof i) throw new Error("Invalid arguments passed to jsPDF.lines"); for (D(y(Gt(e)) + " " + y(Jt(A)) + " m "), o = r[0], s = r[1], c = t.length, p = e, g = A, a = 0; a < c; a++) 2 === (l = t[a]).length ? (p = l[0] * o + p, g = l[1] * s + g, D(y(Gt(p)) + " " + y(Jt(g)) + " l")) : (u = l[0] * o + p, h = l[1] * s + g, f = l[2] * o + p, d = l[3] * s + g, p = l[4] * o + p, g = l[5] * s + g, D(y(Gt(u)) + " " + y(Jt(h)) + " " + y(Gt(f)) + " " + y(Jt(d)) + " " + y(Gt(p)) + " " + y(Jt(g)) + " c")); return i && D(" h"), null !== n && D(Dt(n)), this }, f.__private__.rect = f.rect = function(t, e, A, r, n) { if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r) || !Kt(n)) throw new Error("Invalid arguments passed to jsPDF.rect"); return D([m(Gt(t)), m(Jt(e)), m(A * I), m(-r * I), "re"].join(" ")), null !== n && D(Dt(n)), this }, f.__private__.triangle = f.triangle = function(t, e, A, r, n, i, o) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r) || isNaN(n) || isNaN(i) || !Kt(o)) throw new Error("Invalid arguments passed to jsPDF.triangle");
                        return this.lines([
                            [A - t, r - e],
                            [n - A, i - r],
                            [t - n, e - i]
                        ], t, e, [1, 1], o, !0), this
                    }, f.__private__.roundedRect = f.roundedRect = function(t, e, A, r, n, i, o) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r) || isNaN(n) || isNaN(i) || !Kt(o)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
                        var s = 4 / 3 * (Math.SQRT2 - 1);
                        return this.lines([
                            [A - 2 * n, 0],
                            [n * s, 0, n, i - i * s, n, i],
                            [0, r - 2 * i],
                            [0, i * s, -n * s, i, -n, i],
                            [2 * n - A, 0],
                            [-n * s, 0, -n, -i * s, -n, -i],
                            [0, 2 * i - r],
                            [0, -i * s, n * s, -i, n, -i]
                        ], t + n, e, [1, 1], o), this
                    }, f.__private__.ellipse = f.ellipse = function(t, e, A, r, n) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r) || !Kt(n)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
                        var i = 4 / 3 * (Math.SQRT2 - 1) * A,
                            o = 4 / 3 * (Math.SQRT2 - 1) * r;
                        return D([m(Gt(t + A)), m(Jt(e)), "m", m(Gt(t + A)), m(Jt(e - o)), m(Gt(t + i)), m(Jt(e - r)), m(Gt(t)), m(Jt(e - r)), "c"].join(" ")), D([m(Gt(t - i)), m(Jt(e - r)), m(Gt(t - A)), m(Jt(e - o)), m(Gt(t - A)), m(Jt(e)), "c"].join(" ")), D([m(Gt(t - A)), m(Jt(e + o)), m(Gt(t - i)), m(Jt(e + r)), m(Gt(t)), m(Jt(e + r)), "c"].join(" ")), D([m(Gt(t + i)), m(Jt(e + r)), m(Gt(t + A)), m(Jt(e + o)), m(Gt(t + A)), m(Jt(e)), "c"].join(" ")), null !== n && D(Dt(n)), this
                    }, f.__private__.circle = f.circle = function(t, e, A, r) { if (isNaN(t) || isNaN(e) || isNaN(A) || !Kt(r)) throw new Error("Invalid arguments passed to jsPDF.circle"); return this.ellipse(t, e, A, A, r) }, f.setFont = function(t, e) { return S = Ut(t, e, { disableWarning: !1 }), this }, f.setFontStyle = f.setFontType = function(t) { return S = Ut(void 0, t), this }, f.__private__.getFontList = f.getFontList = function() {
                        var t, e, A, r = {};
                        for (t in et)
                            if (et.hasOwnProperty(t))
                                for (e in r[t] = A = [], et[t]) et[t].hasOwnProperty(e) && A.push(e);
                        return r
                    }, f.addFont = function(t, e, A, r) { yt.call(this, t, e, A, r = r || "Identity-H") };
                    var kt, zt = a.lineWidth || .200025,
                        jt = f.__private__.setLineWidth = f.setLineWidth = function(t) { return D((t * I).toFixed(2) + " w"), this },
                        qt = (f.__private__.setLineDash = s.API.setLineDash = function(t, e) { if (t = t || [], e = e || 0, isNaN(e) || !Array.isArray(t)) throw new Error("Invalid arguments passed to jsPDF.setLineDash"); return t = t.map(function(t) { return (t * I).toFixed(3) }).join(" "), e = parseFloat((e * I).toFixed(3)), D("[" + t + "] " + e + " d"), this }, f.__private__.getLineHeight = f.getLineHeight = function() { return q * kt }),
                        Vt = (qt = f.__private__.getLineHeight = f.getLineHeight = function() { return q * kt }, f.__private__.setLineHeightFactor = f.setLineHeightFactor = function(t) { return "number" == typeof(t = t || 1.15) && (kt = t), this }),
                        Xt = f.__private__.getLineHeightFactor = f.getLineHeightFactor = function() { return kt };
                    Vt(a.lineHeight);
                    var Gt = f.__private__.getHorizontalCoordinate = function(t) { return t * I },
                        Jt = f.__private__.getVerticalCoordinate = function(t) { return rt[N].mediaBox.topRightY - rt[N].mediaBox.bottomLeftY - t * I },
                        Wt = f.__private__.getHorizontalCoordinateString = function(t) { return m(t * I) },
                        Yt = f.__private__.getVerticalCoordinateString = function(t) { return m(rt[N].mediaBox.topRightY - rt[N].mediaBox.bottomLeftY - t * I) },
                        Zt = a.strokeColor || "0 G",
                        $t = (f.__private__.getStrokeColor = f.getDrawColor = function() { return ft(Zt) }, f.__private__.setStrokeColor = f.setDrawColor = function(t, e, A, r) { return Zt = dt({ ch1: t, ch2: e, ch3: A, ch4: r, pdfColorType: "draw", precision: 2 }), D(Zt), this }, a.fillColor || "0 g"),
                        te = (f.__private__.getFillColor = f.getFillColor = function() { return ft($t) }, f.__private__.setFillColor = f.setFillColor = function(t, e, A, r) { return $t = dt({ ch1: t, ch2: e, ch3: A, ch4: r, pdfColorType: "fill", precision: 2 }), D($t), this }, a.textColor || "0 g"),
                        ee = f.__private__.getTextColor = f.getTextColor = function() { return ft(te) },
                        Ae = (f.__private__.setTextColor = f.setTextColor = function(t, e, A, r) { return te = dt({ ch1: t, ch2: e, ch3: A, ch4: r, pdfColorType: "text", precision: 3 }), this }, a.charSpace || 0),
                        re = f.__private__.getCharSpace = f.getCharSpace = function() { return Ae },
                        ne = (f.__private__.setCharSpace = f.setCharSpace = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace"); return Ae = t, this }, 0);
                    f.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, f.__private__.setLineCap = f.setLineCap = function(t) { var e = f.CapJoinStyles[t]; if (void 0 === e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles"); return D((ne = e) + " J"), this };
                    var ie, oe = 0;
                    for (var se in f.__private__.setLineJoin = f.setLineJoin = function(t) { var e = f.CapJoinStyles[t]; if (void 0 === e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles"); return D((oe = e) + " j"), this }, f.__private__.setMiterLimit = f.setMiterLimit = function(t) { if (t = t || 0, isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setMiterLimit"); return ie = parseFloat(m(t * I)), D(ie + " M"), this }, f.save = function(t, e) {
                            if (t = t || "generated.pdf", (e = e || {}).returnPromise = e.returnPromise || !1, !1 !== e.returnPromise) return new Promise(function(e, A) { try { var n = xt(It(St()), t); "function" == typeof xt.unload && r.setTimeout && setTimeout(xt.unload, 911), e(n) } catch (e) { A(e.message) } });
                            xt(It(St()), t), "function" == typeof xt.unload && r.setTimeout && setTimeout(xt.unload, 911)
                        }, s.API) s.API.hasOwnProperty(se) && ("events" === se && s.API.events.length ? function(t, e) { var A, r, n; for (n = e.length - 1; - 1 !== n; n--) A = e[n][0], r = e[n][1], t.subscribe.apply(t, [A].concat("function" == typeof r ? [r] : r)) }(it, s.API.events) : f[se] = s.API[se]);
                    return f.internal = { pdfEscape: vt, getStyle: Dt, getFont: function() { return tt[Ut.apply(f, arguments)] }, getFontSize: V, getCharSpace: re, getTextColor: ee, getLineHeight: qt, getLineHeightFactor: Xt, write: k, getHorizontalCoordinate: Gt, getVerticalCoordinate: Jt, getCoordinateString: Wt, getVerticalCoordinateString: Yt, collections: {}, newObject: st, newAdditionalObject: lt, newObjectDeferred: at, newObjectDeferredBegin: ct, getFilters: pt, putStream: gt, events: it, scaleFactor: I, pageSize: { getWidth: function() { return (rt[N].mediaBox.topRightX - rt[N].mediaBox.bottomLeftX) / I }, setWidth: function(t) { rt[N].mediaBox.topRightX = t * I + rt[N].mediaBox.bottomLeftX }, getHeight: function() { return (rt[N].mediaBox.topRightY - rt[N].mediaBox.bottomLeftY) / I }, setHeight: function(t) { rt[N].mediaBox.topRightY = t * I + rt[N].mediaBox.bottomLeftY } }, output: Tt, getNumberOfPages: Ft, pages: M, out: D, f2: m, f3: y, getPageInfo: Ot, getPageInfoByObjId: Mt, getCurrentPageInfo: Pt, getPDFVersion: p, hasHotfix: Rt }, Object.defineProperty(f.internal.pageSize, "width", { get: function() { return (rt[N].mediaBox.topRightX - rt[N].mediaBox.bottomLeftX) / I }, set: function(t) { rt[N].mediaBox.topRightX = t * I + rt[N].mediaBox.bottomLeftX }, enumerable: !0, configurable: !0 }), Object.defineProperty(f.internal.pageSize, "height", { get: function() { return (rt[N].mediaBox.topRightY - rt[N].mediaBox.bottomLeftY) / I }, set: function(t) { rt[N].mediaBox.topRightY = t * I + rt[N].mediaBox.bottomLeftY }, enumerable: !0, configurable: !0 }),
                        function(t) {
                            for (var e = 0, A = j.length; e < A; e++) {
                                var r = yt(t[e][0], t[e][1], t[e][2], j[e][3], !0);
                                h[r] = !0;
                                var n = t[e][0].split("-");
                                mt(r, n[0], n[1] || "")
                            }
                            it.publish("addFonts", { fonts: tt, dictionary: et })
                        }(j), S = "F1", Ct(A, t), it.publish("initialized"), f
                }
                return s.API = { events: [] }, s.version = "1.5.3", void 0 !== (i = function() { return s }.call(e, A, e, t)) && (t.exports = i), s
            }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")());
            /**
             * @license
             * Copyright (c) 2016 Alexander Weidt,
             * https://github.com/BiggA94
             * 
             * Licensed under the MIT License. http://opensource.org/licenses/mit-license
             */
            /**
             * @license
             * Copyright (c) 2016 Alexander Weidt,
             * https://github.com/BiggA94
             * 
             * Licensed under the MIT License. http://opensource.org/licenses/mit-license
             */
            (function(t, e) {
                var A, r = 1,
                    i = function(t) { return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)") },
                    o = function(t) { return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")") },
                    s = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2"); return t.toFixed(2) },
                    a = function(t) { if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2"); return t.toFixed(5) };
                t.__acroform__ = {};
                var c = function(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t },
                    l = function(t) { return t * r },
                    u = function(t) { return t / r },
                    h = function(t) {
                        var e = new I,
                            A = G.internal.getHeight(t) || 0,
                            r = G.internal.getWidth(t) || 0;
                        return e.BBox = [0, 0, Number(s(r)), Number(s(A))], e
                    },
                    f = t.__acroform__.setBit = function(t, e) { if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit"); return t |= 1 << e },
                    d = t.__acroform__.clearBit = function(t, e) { if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit"); return t &= ~(1 << e) },
                    p = t.__acroform__.getBit = function(t, e) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit"); return 0 == (t & 1 << e) ? 0 : 1 },
                    g = t.__acroform__.getBitForPdf = function(t, e) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf"); return p(t, e - 1) },
                    B = t.__acroform__.setBitForPdf = function(t, e) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf"); return f(t, e - 1) },
                    w = t.__acroform__.clearBitForPdf = function(t, e, A) { if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf"); return d(t, e - 1) },
                    m = t.__acroform__.calculateCoordinates = function(t) {
                        var e = this.internal.getHorizontalCoordinate,
                            A = this.internal.getVerticalCoordinate,
                            r = t[0],
                            n = t[1],
                            i = t[2],
                            o = t[3],
                            a = {};
                        return a.lowerLeft_X = e(r) || 0, a.lowerLeft_Y = A(n + o) || 0, a.upperRight_X = e(r + i) || 0, a.upperRight_Y = A(n) || 0, [Number(s(a.lowerLeft_X)), Number(s(a.lowerLeft_Y)), Number(s(a.upperRight_X)), Number(s(a.upperRight_Y))]
                    },
                    y = function(t) {
                        if (t.appearanceStreamContent) return t.appearanceStreamContent;
                        if (t.V || t.DV) {
                            var e = [],
                                r = t.V || t.DV,
                                n = v(t, r),
                                i = A.internal.getFont(t.fontName, t.fontStyle).id;
                            e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(A.__private__.encodeColorString(t.color)), e.push("/" + i + " " + s(n.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(n.text), e.push("ET"), e.push("Q"), e.push("EMC");
                            var o = new h(t);
                            return o.stream = e.join("\n"), o
                        }
                    },
                    v = function(t, e) {
                        var r = t.maxFontSize || 12,
                            n = (t.fontName, { text: "", fontSize: "" }),
                            o = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" "),
                            a = (A.__private__.encodeColorString(t.color), r),
                            c = G.internal.getHeight(t) || 0;
                        c = c < 0 ? -c : c;
                        var l = G.internal.getWidth(t) || 0;
                        l = l < 0 ? -l : l;
                        var u = function(e, A, r) { if (e + 1 < o.length) { var n = A + " " + o[e + 1]; return b(n, t, r).width <= l - 4 } return !1 };
                        a++;
                        t: for (;;) {
                            e = "";
                            var h = b("3", t, --a).height,
                                f = t.multiline ? c - a : (c - h) / 2,
                                d = -2,
                                p = f += 2,
                                g = 0,
                                B = 0,
                                w = 0;
                            if (a <= 0) { e = "(...) Tj\n", e += "% Width of Text: " + b(e, t, a = 12).width + ", FieldWidth:" + l + "\n"; break }
                            w = b(o[0] + " ", t, a).width;
                            var m = "",
                                y = 0;
                            for (var v in o)
                                if (o.hasOwnProperty(v)) {
                                    m = " " == (m += o[v] + " ").substr(m.length - 1) ? m.substr(0, m.length - 1) : m;
                                    var C = parseInt(v);
                                    w = b(m + " ", t, a).width;
                                    var Q = u(C, m, a),
                                        F = v >= o.length - 1;
                                    if (Q && !F) { m += " "; continue }
                                    if (Q || F) {
                                        if (F) B = C;
                                        else if (t.multiline && c < (h + 2) * (y + 2) + 2) continue t
                                    } else {
                                        if (!t.multiline) continue t;
                                        if (c < (h + 2) * (y + 2) + 2) continue t;
                                        B = C
                                    }
                                    for (var U = "", E = g; E <= B; E++) U += o[E] + " ";
                                    switch (U = " " == U.substr(U.length - 1) ? U.substr(0, U.length - 1) : U, w = b(U, t, a).width, t.textAlign) {
                                        case "right":
                                            d = l - w - 2;
                                            break;
                                        case "center":
                                            d = (l - w) / 2;
                                            break;
                                        case "left":
                                        default:
                                            d = 2
                                    }
                                    e += s(d) + " " + s(p) + " Td\n", e += "(" + i(U) + ") Tj\n", e += -s(d) + " 0 Td\n", p = -(a + 2), w = 0, g = B + 1, y++, m = ""
                                }
                            break
                        }
                        return n.text = e, n.fontSize = a, n
                    },
                    b = function(t, e, r) {
                        var n = A.internal.getFont(e.fontName, e.fontStyle),
                            i = A.getStringUnitWidth(t, { font: n, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r);
                        return { height: A.getStringUnitWidth("3", { font: n, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r) * 1.5, width: i }
                    },
                    C = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 },
                    Q = function() {
                        A.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                        var t = A.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                        for (var e in t)
                            if (t.hasOwnProperty(e)) {
                                var r = t[e];
                                r.objId = void 0, r.hasAnnotation && F.call(A, r)
                            }
                    },
                    F = function(t) {
                        var e = { type: "reference", object: t };
                        void 0 === A.internal.getPageInfo(t.page).pageContext.annotations.find(function(t) { return t.type === e.type && t.object === e.object }) && A.internal.getPageInfo(t.page).pageContext.annotations.push(e)
                    },
                    U = function() {
                        if (void 0 === A.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
                        A.internal.write("/AcroForm " + A.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
                    },
                    E = function() { A.internal.events.unsubscribe(A.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete A.internal.acroformPlugin.acroFormDictionaryRoot._eventID, A.internal.acroformPlugin.printedOut = !0 },
                    N = function(t) {
                        var e = !t;
                        for (var r in t || (A.internal.newObjectDeferredBegin(A.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), A.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), t = t || A.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
                            if (t.hasOwnProperty(r)) {
                                var i = t[r],
                                    o = [],
                                    s = i.Rect;
                                if (i.Rect && (i.Rect = m.call(this, i.Rect)), A.internal.newObjectDeferredBegin(i.objId, !0), i.DA = G.createDefaultAppearanceStream(i), "object" === n(i) && "function" == typeof i.getKeyValueListForStream && (o = i.getKeyValueListForStream()), i.Rect = s, i.hasAppearanceStream && !i.appearanceStreamContent) {
                                    var a = y.call(this, i);
                                    o.push({ key: "AP", value: "<</N " + a + ">>" }), A.internal.acroformPlugin.xForms.push(a)
                                }
                                if (i.appearanceStreamContent) {
                                    var c = "";
                                    for (var l in i.appearanceStreamContent)
                                        if (i.appearanceStreamContent.hasOwnProperty(l)) {
                                            var u = i.appearanceStreamContent[l];
                                            if (c += "/" + l + " ", c += "<<", 1 <= Object.keys(u).length || Array.isArray(u))
                                                for (var r in u) {
                                                    var h;
                                                    u.hasOwnProperty(r) && ("function" == typeof(h = u[r]) && (h = h.call(this, i)), c += "/" + r + " " + h + " ", 0 <= A.internal.acroformPlugin.xForms.indexOf(h) || A.internal.acroformPlugin.xForms.push(h))
                                                } else "function" == typeof(h = u) && (h = h.call(this, i)), c += "/" + r + " " + h, 0 <= A.internal.acroformPlugin.xForms.indexOf(h) || A.internal.acroformPlugin.xForms.push(h);
                                            c += ">>"
                                        }
                                    o.push({ key: "AP", value: "<<\n" + c + ">>" })
                                }
                                A.internal.putStream({ additionalKeyValues: o }), A.internal.out("endobj")
                            }
                        e && L.call(this, A.internal.acroformPlugin.xForms)
                    },
                    L = function(t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e)) {
                                var r = e,
                                    i = t[e];
                                A.internal.newObjectDeferredBegin(i && i.objId, !0), "object" === n(i) && "function" == typeof i.putStream && i.putStream(), delete t[r]
                            }
                    },
                    x = function() {
                        if (void 0 !== this.internal && (void 0 === this.internal.acroformPlugin || !1 === this.internal.acroformPlugin.isInitialized)) {
                            if (A = this, R.FieldNum = 0, this.internal.acroformPlugin = JSON.parse(JSON.stringify(C)), this.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
                            r = A.internal.scaleFactor, A.internal.acroformPlugin.acroFormDictionaryRoot = new T, A.internal.acroformPlugin.acroFormDictionaryRoot._eventID = A.internal.events.subscribe("postPutResources", E), A.internal.events.subscribe("buildDocument", Q), A.internal.events.subscribe("putCatalog", U), A.internal.events.subscribe("postPutPages", N), A.internal.acroformPlugin.isInitialized = !0
                        }
                    },
                    _ = t.__acroform__.arrayToPdfArray = function(t) {
                        if (Array.isArray(t)) {
                            for (var e = "[", A = 0; A < t.length; A++) switch (0 !== A && (e += " "), n(t[A])) {
                                case "boolean":
                                case "number":
                                case "object":
                                    e += t[A].toString();
                                    break;
                                case "string":
                                    "/" !== t[A].substr(0, 1) ? e += "(" + i(t[A].toString()) + ")" : e += t[A].toString()
                            }
                            return e += "]"
                        }
                        throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
                    },
                    H = function(t) { return (t = t || "").toString(), t = "(" + i(t) + ")" },
                    S = function() {
                        var t;
                        Object.defineProperty(this, "objId", { configurable: !0, get: function() { if (t || (t = A.internal.newObjectDeferred()), !t) throw new Error("AcroFormPDFObject: Couldn't create Object ID"); return t }, set: function(e) { t = e } })
                    };
                S.prototype.toString = function() { return this.objId + " 0 R" }, S.prototype.putStream = function() {
                    var t = this.getKeyValueListForStream();
                    A.internal.putStream({ data: this.stream, additionalKeyValues: t }), A.internal.out("endobj")
                }, S.prototype.getKeyValueListForStream = function() {
                    return function(t) {
                        var e = [],
                            A = Object.getOwnPropertyNames(t).filter(function(t) { return "content" != t && "appearanceStreamContent" != t && "_" != t.substring(0, 1) });
                        for (var r in A)
                            if (!1 === Object.getOwnPropertyDescriptor(t, A[r]).configurable) {
                                var n = A[r],
                                    i = t[n];
                                i && (Array.isArray(i) ? e.push({ key: n, value: _(i) }) : i instanceof S ? e.push({ key: n, value: i.objId + " 0 R" }) : "function" != typeof i && e.push({ key: n, value: i }))
                            }
                        return e
                    }(this)
                };
                var I = function() {
                    S.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writeable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writeable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writeable: !0 });
                    var t, e = [];
                    Object.defineProperty(this, "BBox", { configurable: !1, writeable: !0, get: function() { return e }, set: function(t) { e = t } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writeable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(e) { t = e.trim() }, get: function() { return t || null } })
                };
                c(I, S);
                var T = function() {
                    S.call(this);
                    var t, e = [];
                    Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() { return 0 < e.length ? e : void 0 } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() { return e } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() { if (t) return "(" + t + ")" }, set: function(e) { t = e } })
                };
                c(T, S);
                var R = function t() {
                    S.call(this);
                    var e = 4;
                    Object.defineProperty(this, "F", {
                        enumerable: !1,
                        configurable: !1,
                        get: function() { return e },
                        set: function(t) {
                            if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute F supplied.');
                            e = t
                        }
                    }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(e, 3)) }, set: function(t) {!0 === Boolean(t) ? this.F = B(e, 3) : this.F = w(e, 3) } });
                    var A = 0;
                    Object.defineProperty(this, "Ff", {
                        enumerable: !1,
                        configurable: !1,
                        get: function() { return A },
                        set: function(t) {
                            if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
                            A = t
                        }
                    });
                    var r = [];
                    Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() { if (0 !== r.length) return r }, set: function(t) { r = void 0 !== t ? t : [] } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() { return !r || isNaN(r[0]) ? 0 : u(r[0]) }, set: function(t) { r[0] = l(t) } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() { return !r || isNaN(r[1]) ? 0 : u(r[1]) }, set: function(t) { r[1] = l(t) } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() { return !r || isNaN(r[2]) ? 0 : u(r[2]) }, set: function(t) { r[2] = l(t) } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() { return !r || isNaN(r[3]) ? 0 : u(r[3]) }, set: function(t) { r[3] = l(t) } });
                    var n = "";
                    Object.defineProperty(this, "FT", {
                        enumerable: !0,
                        configurable: !1,
                        get: function() { return n },
                        set: function(t) {
                            switch (t) {
                                case "/Btn":
                                case "/Tx":
                                case "/Ch":
                                case "/Sig":
                                    n = t;
                                    break;
                                default:
                                    throw new Error('Invalid value "' + t + '" for attribute FT supplied.')
                            }
                        }
                    });
                    var s = null;
                    Object.defineProperty(this, "T", {
                        enumerable: !0,
                        configurable: !1,
                        get: function() {
                            if (!s || s.length < 1) {
                                if (this instanceof j) return;
                                s = "FieldObject" + t.FieldNum++
                            }
                            return "(" + i(s) + ")"
                        },
                        set: function(t) { s = t.toString() }
                    }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() { return s }, set: function(t) { s = t } });
                    var a = "helvetica";
                    Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() { return a }, set: function(t) { a = t } });
                    var c = "normal";
                    Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() { return c }, set: function(t) { c = t } });
                    var h = 0;
                    Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() { return u(h) }, set: function(t) { h = l(t) } });
                    var f = 50;
                    Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() { return u(f) }, set: function(t) { f = l(t) } });
                    var d = "black";
                    Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() { return d }, set: function(t) { d = t } });
                    var p = "/F1 0 Tf 0 g";
                    Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() { if (!(!p || this instanceof j || this instanceof V)) return H(p) }, set: function(t) { t = t.toString(), p = t } });
                    var m = null;
                    Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() { if (m) return this instanceof D == 0 ? H(m) : m }, set: function(t) { t = t.toString(), m = this instanceof D == 0 ? "(" === t.substr(0, 1) ? o(t.substr(1, t.length - 2)) : o(t) : t } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() { return this instanceof D == 1 ? o(m.substr(1, m.length - 1)) : m }, set: function(t) { t = t.toString(), m = this instanceof D == 1 ? "/" + t : t } });
                    var y = null;
                    Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() { if (y) return this instanceof D == 0 ? H(y) : y }, set: function(t) { t = t.toString(), y = this instanceof D == 0 ? "(" === t.substr(0, 1) ? o(t.substr(1, t.length - 2)) : o(t) : t } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() { return this instanceof D == 1 ? o(y.substr(1, y.length - 1)) : y }, set: function(t) { t = t.toString(), y = this instanceof D == 1 ? "/" + t : t } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() { return this.Rect } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() { return this.hasAnnotation ? "/Annot" : null } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() { return this.hasAnnotation ? "/Widget" : null } });
                    var v, b = !1;
                    Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, writeable: !0, get: function() { return b }, set: function(t) { t = Boolean(t), b = t } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, writeable: !0, get: function() { if (v) return v }, set: function(t) { v = t } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 1)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 1) : this.Ff = w(this.Ff, 1) } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 2)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 2) : this.Ff = w(this.Ff, 2) } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 3)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 3) : this.Ff = w(this.Ff, 3) } });
                    var C = null;
                    Object.defineProperty(this, "Q", {
                        enumerable: !0,
                        configurable: !1,
                        get: function() { if (null !== C) return C },
                        set: function(t) {
                            if (-1 === [0, 1, 2].indexOf(t)) throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
                            C = t
                        }
                    }), Object.defineProperty(this, "textAlign", {
                        get: function() {
                            var t = "left";
                            switch (C) {
                                case 0:
                                default:
                                    t = "left";
                                    break;
                                case 1:
                                    t = "center";
                                    break;
                                case 2:
                                    t = "right"
                            }
                            return t
                        },
                        configurable: !0,
                        enumerable: !0,
                        set: function(t) {
                            switch (t) {
                                case "right":
                                case 2:
                                    C = 2;
                                    break;
                                case "center":
                                case 1:
                                    C = 1;
                                    break;
                                case "left":
                                case 0:
                                default:
                                    C = 0
                            }
                        }
                    })
                };
                c(R, S);
                var O = function() {
                    R.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
                    var t = 0;
                    Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() { return t }, set: function(e) { t = e } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() { return t }, set: function(e) { t = e } });
                    var e = [];
                    Object.defineProperty(this, "Opt", {
                        enumerable: !0,
                        configurable: !1,
                        get: function() { return _(e) },
                        set: function(t) {
                            var A, r;
                            r = [], "string" == typeof(A = t) && (r = function(t, e, A) { A || (A = 1); for (var r, n = []; r = e.exec(t);) n.push(r[A]); return n }(A, /\((.*?)\)/g)), e = r
                        }
                    }), this.getOptions = function() { return e }, this.setOptions = function(t) { e = t, this.sort && e.sort() }, this.addOption = function(t) { t = (t = t || "").toString(), e.push(t), this.sort && e.sort() }, this.removeOption = function(t, A) { for (A = A || !1, t = (t = t || "").toString(); - 1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1), !1 !== A);); }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 18)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 18) : this.Ff = w(this.Ff, 18) } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 19)) }, set: function(t) {!0 === this.combo && (!0 === Boolean(t) ? this.Ff = B(this.Ff, 19) : this.Ff = w(this.Ff, 19)) } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 20)) }, set: function(t) {!0 === Boolean(t) ? (this.Ff = B(this.Ff, 20), e.sort()) : this.Ff = w(this.Ff, 20) } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 22)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 22) : this.Ff = w(this.Ff, 22) } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 23)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 23) : this.Ff = w(this.Ff, 23) } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 27)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 27) : this.Ff = w(this.Ff, 27) } }), this.hasAppearanceStream = !1
                };
                c(O, R);
                var M = function() { O.call(this), this.fontName = "helvetica", this.combo = !1 };
                c(M, O);
                var P = function() { M.call(this), this.combo = !0 };
                c(P, M);
                var K = function() { P.call(this), this.edit = !0 };
                c(K, P);
                var D = function() {
                    R.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 15)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 15) : this.Ff = w(this.Ff, 15) } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 16)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 16) : this.Ff = w(this.Ff, 16) } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 17)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 17) : this.Ff = w(this.Ff, 17) } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 26)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 26) : this.Ff = w(this.Ff, 26) } });
                    var t, e = {};
                    Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() { if (0 !== Object.keys(e).length) { var t, A = []; for (t in A.push("<<"), e) A.push("/" + t + " (" + e[t] + ")"); return A.push(">>"), A.join("\n") } }, set: function(t) { "object" === n(t) && (e = t) } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() { return e.CA || "" }, set: function(t) { "string" == typeof t && (e.CA = t) } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() { return t }, set: function(e) { t = e } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() { return t.substr(1, t.length - 1) }, set: function(e) { t = "/" + e } })
                };
                c(D, R);
                var k = function() { D.call(this), this.pushButton = !0 };
                c(k, D);
                var z = function() {
                    D.call(this), this.radio = !0, this.pushButton = !1;
                    var t = [];
                    Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() { return t }, set: function(e) { t = void 0 !== e ? e : [] } })
                };
                c(z, D);
                var j = function() {
                    var t, e;
                    R.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() { return t }, set: function(e) { t = e } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() { return e }, set: function(t) { e = t } });
                    var A, r = {};
                    Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() { var t, e = []; for (t in e.push("<<"), r) e.push("/" + t + " (" + r[t] + ")"); return e.push(">>"), e.join("\n") }, set: function(t) { "object" === n(t) && (r = t) } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() { return r.CA || "" }, set: function(t) { "string" == typeof t && (r.CA = t) } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() { return A }, set: function(t) { A = t } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() { return A.substr(1, A.length - 1) }, set: function(t) { A = "/" + t } }), this.optionName = name, this.caption = "l", this.appearanceState = "Off", this._AppearanceType = G.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(name)
                };
                c(j, R), z.prototype.setAppearance = function(t) {
                    if (!("createAppearanceStream" in t && "getCA" in t)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
                    for (var e in this.Kids)
                        if (this.Kids.hasOwnProperty(e)) {
                            var A = this.Kids[e];
                            A.appearanceStreamContent = t.createAppearanceStream(A.optionName), A.caption = t.getCA()
                        }
                }, z.prototype.createOption = function(t) { this.Kids.length; var e = new j; return e.Parent = this, e.optionName = t, this.Kids.push(e), J.call(this, e), e };
                var q = function() { D.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = G.CheckBox.createAppearanceStream() };
                c(q, D);
                var V = function() {
                    R.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 13)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 13) : this.Ff = w(this.Ff, 13) } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 21)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 21) : this.Ff = w(this.Ff, 21) } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 23)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 23) : this.Ff = w(this.Ff, 23) } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 24)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 24) : this.Ff = w(this.Ff, 24) } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 25)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 25) : this.Ff = w(this.Ff, 25) } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 26)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 26) : this.Ff = w(this.Ff, 26) } });
                    var t = null;
                    Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() { return t }, set: function(e) { t = e } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() { return t }, set: function(e) { Number.isInteger(e) && (t = e) } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() { return this.V || this.DV } })
                };
                c(V, R);
                var X = function() { V.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() { return Boolean(g(this.Ff, 14)) }, set: function(t) {!0 === Boolean(t) ? this.Ff = B(this.Ff, 14) : this.Ff = w(this.Ff, 14) } }), this.password = !0 };
                c(X, V);
                var G = {
                    CheckBox: {
                        createAppearanceStream: function() { return { N: { On: G.CheckBox.YesNormal }, D: { On: G.CheckBox.YesPushDown, Off: G.CheckBox.OffPushDown } } },
                        YesPushDown: function(t) {
                            var e = h(t),
                                r = [],
                                n = A.internal.getFont(t.fontName, t.fontStyle).id,
                                i = A.__private__.encodeColorString(t.color),
                                o = v(t, t.caption);
                            return r.push("0.749023 g"), r.push("0 0 " + s(G.internal.getWidth(t)) + " " + s(G.internal.getHeight(t)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + n + " " + s(o.fontSize) + " Tf " + i), r.push("BT"), r.push(o.text), r.push("ET"), r.push("Q"), r.push("EMC"), e.stream = r.join("\n"), e
                        },
                        YesNormal: function(t) {
                            var e = h(t),
                                r = A.internal.getFont(t.fontName, t.fontStyle).id,
                                n = A.__private__.encodeColorString(t.color),
                                i = [],
                                o = G.internal.getHeight(t),
                                a = G.internal.getWidth(t),
                                c = v(t, t.caption);
                            return i.push("1 g"), i.push("0 0 " + s(a) + " " + s(o) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + s(a - 1) + " " + s(o - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + r + " " + s(c.fontSize) + " Tf " + n), i.push(c.text), i.push("ET"), i.push("Q"), e.stream = i.join("\n"), e
                        },
                        OffPushDown: function(t) {
                            var e = h(t),
                                A = [];
                            return A.push("0.749023 g"), A.push("0 0 " + s(G.internal.getWidth(t)) + " " + s(G.internal.getHeight(t)) + " re"), A.push("f"), e.stream = A.join("\n"), e
                        }
                    },
                    RadioButton: {
                        Circle: {
                            createAppearanceStream: function(t) { var e = { D: { Off: G.RadioButton.Circle.OffPushDown }, N: {} }; return e.N[t] = G.RadioButton.Circle.YesNormal, e.D[t] = G.RadioButton.Circle.YesPushDown, e },
                            getCA: function() { return "l" },
                            YesNormal: function(t) {
                                var e = h(t),
                                    A = [],
                                    r = G.internal.getWidth(t) <= G.internal.getHeight(t) ? G.internal.getWidth(t) / 4 : G.internal.getHeight(t) / 4;
                                r = Number((.9 * r).toFixed(5));
                                var n = G.internal.Bezier_C,
                                    i = Number((r * n).toFixed(5));
                                return A.push("q"), A.push("1 0 0 1 " + a(G.internal.getWidth(t) / 2) + " " + a(G.internal.getHeight(t) / 2) + " cm"), A.push(r + " 0 m"), A.push(r + " " + i + " " + i + " " + r + " 0 " + r + " c"), A.push("-" + i + " " + r + " -" + r + " " + i + " -" + r + " 0 c"), A.push("-" + r + " -" + i + " -" + i + " -" + r + " 0 -" + r + " c"), A.push(i + " -" + r + " " + r + " -" + i + " " + r + " 0 c"), A.push("f"), A.push("Q"), e.stream = A.join("\n"), e
                            },
                            YesPushDown: function(t) {
                                var e = h(t),
                                    A = [],
                                    r = G.internal.getWidth(t) <= G.internal.getHeight(t) ? G.internal.getWidth(t) / 4 : G.internal.getHeight(t) / 4,
                                    n = (r = Number((.9 * r).toFixed(5)), Number((2 * r).toFixed(5))),
                                    i = Number((n * G.internal.Bezier_C).toFixed(5)),
                                    o = Number((r * G.internal.Bezier_C).toFixed(5));
                                return A.push("0.749023 g"), A.push("q"), A.push("1 0 0 1 " + a(G.internal.getWidth(t) / 2) + " " + a(G.internal.getHeight(t) / 2) + " cm"), A.push(n + " 0 m"), A.push(n + " " + i + " " + i + " " + n + " 0 " + n + " c"), A.push("-" + i + " " + n + " -" + n + " " + i + " -" + n + " 0 c"), A.push("-" + n + " -" + i + " -" + i + " -" + n + " 0 -" + n + " c"), A.push(i + " -" + n + " " + n + " -" + i + " " + n + " 0 c"), A.push("f"), A.push("Q"), A.push("0 g"), A.push("q"), A.push("1 0 0 1 " + a(G.internal.getWidth(t) / 2) + " " + a(G.internal.getHeight(t) / 2) + " cm"), A.push(r + " 0 m"), A.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"), A.push("-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"), A.push("-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"), A.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"), A.push("f"), A.push("Q"), e.stream = A.join("\n"), e
                            },
                            OffPushDown: function(t) {
                                var e = h(t),
                                    A = [],
                                    r = G.internal.getWidth(t) <= G.internal.getHeight(t) ? G.internal.getWidth(t) / 4 : G.internal.getHeight(t) / 4,
                                    n = (r = Number((.9 * r).toFixed(5)), Number((2 * r).toFixed(5))),
                                    i = Number((n * G.internal.Bezier_C).toFixed(5));
                                return A.push("0.749023 g"), A.push("q"), A.push("1 0 0 1 " + a(G.internal.getWidth(t) / 2) + " " + a(G.internal.getHeight(t) / 2) + " cm"), A.push(n + " 0 m"), A.push(n + " " + i + " " + i + " " + n + " 0 " + n + " c"), A.push("-" + i + " " + n + " -" + n + " " + i + " -" + n + " 0 c"), A.push("-" + n + " -" + i + " -" + i + " -" + n + " 0 -" + n + " c"), A.push(i + " -" + n + " " + n + " -" + i + " " + n + " 0 c"), A.push("f"), A.push("Q"), e.stream = A.join("\n"), e
                            }
                        },
                        Cross: {
                            createAppearanceStream: function(t) { var e = { D: { Off: G.RadioButton.Cross.OffPushDown }, N: {} }; return e.N[t] = G.RadioButton.Cross.YesNormal, e.D[t] = G.RadioButton.Cross.YesPushDown, e },
                            getCA: function() { return "8" },
                            YesNormal: function(t) {
                                var e = h(t),
                                    A = [],
                                    r = G.internal.calculateCross(t);
                                return A.push("q"), A.push("1 1 " + s(G.internal.getWidth(t) - 2) + " " + s(G.internal.getHeight(t) - 2) + " re"), A.push("W"), A.push("n"), A.push(s(r.x1.x) + " " + s(r.x1.y) + " m"), A.push(s(r.x2.x) + " " + s(r.x2.y) + " l"), A.push(s(r.x4.x) + " " + s(r.x4.y) + " m"), A.push(s(r.x3.x) + " " + s(r.x3.y) + " l"), A.push("s"), A.push("Q"), e.stream = A.join("\n"), e
                            },
                            YesPushDown: function(t) {
                                var e = h(t),
                                    A = G.internal.calculateCross(t),
                                    r = [];
                                return r.push("0.749023 g"), r.push("0 0 " + s(G.internal.getWidth(t)) + " " + s(G.internal.getHeight(t)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + s(G.internal.getWidth(t) - 2) + " " + s(G.internal.getHeight(t) - 2) + " re"), r.push("W"), r.push("n"), r.push(s(A.x1.x) + " " + s(A.x1.y) + " m"), r.push(s(A.x2.x) + " " + s(A.x2.y) + " l"), r.push(s(A.x4.x) + " " + s(A.x4.y) + " m"), r.push(s(A.x3.x) + " " + s(A.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e
                            },
                            OffPushDown: function(t) {
                                var e = h(t),
                                    A = [];
                                return A.push("0.749023 g"), A.push("0 0 " + s(G.internal.getWidth(t)) + " " + s(G.internal.getHeight(t)) + " re"), A.push("f"), e.stream = A.join("\n"), e
                            }
                        }
                    },
                    createDefaultAppearanceStream: function(t) {
                        var e = A.internal.getFont(t.fontName, t.fontStyle).id,
                            r = A.__private__.encodeColorString(t.color);
                        return "/" + e + " " + t.fontSize + " Tf " + r
                    }
                };
                G.internal = {
                    Bezier_C: .551915024494,
                    calculateCross: function(t) {
                        var e = G.internal.getWidth(t),
                            A = G.internal.getHeight(t),
                            r = Math.min(e, A);
                        return { x1: { x: (e - r) / 2, y: (A - r) / 2 + r }, x2: { x: (e - r) / 2 + r, y: (A - r) / 2 }, x3: { x: (e - r) / 2, y: (A - r) / 2 }, x4: { x: (e - r) / 2 + r, y: (A - r) / 2 + r } }
                    }
                }, G.internal.getWidth = function(t) { var e = 0; return "object" === n(t) && (e = l(t.Rect[2])), e }, G.internal.getHeight = function(t) { var e = 0; return "object" === n(t) && (e = l(t.Rect[3])), e };
                var J = t.addField = function(t) { if (x.call(this), !(t instanceof R)) throw new Error("Invalid argument passed to jsPDF.addField."); return function(t) { A.internal.acroformPlugin.printedOut && (A.internal.acroformPlugin.printedOut = !1, A.internal.acroformPlugin.acroFormDictionaryRoot = null), A.internal.acroformPlugin.acroFormDictionaryRoot || x.call(A), A.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t) }.call(this, t), t.page = A.internal.getCurrentPageInfo().pageNumber, this };
                t.addButton = function(t) { if (t instanceof D == 0) throw new Error("Invalid argument passed to jsPDF.addButton."); return J.call(this, t) }, t.addTextField = function(t) { if (t instanceof V == 0) throw new Error("Invalid argument passed to jsPDF.addTextField."); return J.call(this, t) }, t.addChoiceField = function(t) { if (t instanceof O == 0) throw new Error("Invalid argument passed to jsPDF.addChoiceField."); return J.call(this, t) }, "object" == n(e) && void 0 === e.ChoiceField && void 0 === e.ListBox && void 0 === e.ComboBox && void 0 === e.EditBox && void 0 === e.Button && void 0 === e.PushButton && void 0 === e.RadioButton && void 0 === e.CheckBox && void 0 === e.TextField && void 0 === e.PasswordField ? (e.ChoiceField = O, e.ListBox = M, e.ComboBox = P, e.EditBox = K, e.Button = D, e.PushButton = k, e.RadioButton = z, e.CheckBox = q, e.TextField = V, e.PasswordField = X, e.AcroForm = { Appearance: G }) : console.warn("AcroForm-Classes are not populated into global-namespace, because the class-Names exist already."), t.AcroFormChoiceField = O, t.AcroFormListBox = M, t.AcroFormComboBox = P, t.AcroFormEditBox = K, t.AcroFormButton = D, t.AcroFormPushButton = k, t.AcroFormRadioButton = z, t.AcroFormCheckBox = q, t.AcroFormTextField = V, t.AcroFormPasswordField = X, t.AcroFormAppearance = G, t.AcroForm = { ChoiceField: O, ListBox: M, ComboBox: P, EditBox: K, Button: D, PushButton: k, RadioButton: z, CheckBox: q, TextField: V, PasswordField: X, Appearance: G }
            })((window.tmp = dt).API, "undefined" != typeof window && window || void 0 !== r && r),
            /** @license
             * jsPDF addImage plugin
             * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
             *               2013 Chris Dowling, https://github.com/gingerchris
             *               2013 Trinh Ho, https://github.com/ineedfat
             *               2013 Edwin Alejandro Perez, https://github.com/eaparango
             *               2013 Norah Smith, https://github.com/burnburnrocket
             *               2014 Diego Casorran, https://github.com/diegocr
             *               2014 James Robb, https://github.com/jamesbrobb
             *
             * 
             */
            function(t) {
                var e = "addImage_",
                    A = {
                        PNG: [
                            [137, 80, 78, 71]
                        ],
                        TIFF: [
                            [77, 77, 0, 42],
                            [73, 73, 42, 0]
                        ],
                        JPEG: [
                            [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
                            [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0]
                        ],
                        JPEG2000: [
                            [0, 0, 0, 12, 106, 80, 32, 32]
                        ],
                        GIF87a: [
                            [71, 73, 70, 56, 55, 97]
                        ],
                        GIF89a: [
                            [71, 73, 70, 56, 57, 97]
                        ],
                        BMP: [
                            [66, 77],
                            [66, 65],
                            [67, 73],
                            [67, 80],
                            [73, 67],
                            [80, 84]
                        ]
                    },
                    r = t.getImageFileTypeByImageData = function(e, r) {
                        var n, i;
                        r = r || "UNKNOWN";
                        var o, s, a, c = "UNKNOWN";
                        for (a in t.isArrayBufferView(e) && (e = t.arrayBufferToBinaryString(e)), A)
                            for (o = A[a], n = 0; n < o.length; n += 1) {
                                for (s = !0, i = 0; i < o[n].length; i += 1)
                                    if (void 0 !== o[n][i] && o[n][i] !== e.charCodeAt(i)) { s = !1; break }
                                if (!0 === s) { c = a; break }
                            }
                        return "UNKNOWN" === c && "UNKNOWN" !== r && (console.warn('FileType of Image not recognized. Processing image as "' + r + '".'), c = r), c
                    },
                    i = function t(e) {
                        for (var A = this.internal.newObject(), r = this.internal.write, n = this.internal.putStream, i = (0, this.internal.getFilters)(); - 1 !== i.indexOf("FlateEncode");) i.splice(i.indexOf("FlateEncode"), 1);
                        e.n = A;
                        var o = [];
                        if (o.push({ key: "Type", value: "/XObject" }), o.push({ key: "Subtype", value: "/Image" }), o.push({ key: "Width", value: e.w }), o.push({ key: "Height", value: e.h }), e.cs === this.color_spaces.INDEXED ? o.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (e.pal.length / 3 - 1) + " " + ("smask" in e ? A + 2 : A + 1) + " 0 R]" }) : (o.push({ key: "ColorSpace", value: "/" + e.cs }), e.cs === this.color_spaces.DEVICE_CMYK && o.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), o.push({ key: "BitsPerComponent", value: e.bpc }), "dp" in e && o.push({ key: "DecodeParms", value: "<<" + e.dp + ">>" }), "trns" in e && e.trns.constructor == Array) {
                            for (var s = "", a = 0, c = e.trns.length; a < c; a++) s += e.trns[a] + " " + e.trns[a] + " ";
                            o.push({ key: "Mask", value: "[" + s + "]" })
                        }
                        "smask" in e && o.push({ key: "SMask", value: A + 1 + " 0 R" });
                        var l = void 0 !== e.f ? ["/" + e.f] : void 0;
                        if (n({ data: e.data, additionalKeyValues: o, alreadyAppliedFilters: l }), r("endobj"), "smask" in e) {
                            var u = "/Predictor " + e.p + " /Colors 1 /BitsPerComponent " + e.bpc + " /Columns " + e.w,
                                h = { w: e.w, h: e.h, cs: "DeviceGray", bpc: e.bpc, dp: u, data: e.smask };
                            "f" in e && (h.f = e.f), t.call(this, h)
                        }
                        e.cs === this.color_spaces.INDEXED && (this.internal.newObject(), n({ data: this.arrayBufferToBinaryString(new Uint8Array(e.pal)) }), r("endobj"))
                    },
                    o = function() { var t = this.internal.collections[e + "images"]; for (var A in t) i.call(this, t[A]) },
                    s = function() {
                        var t, A = this.internal.collections[e + "images"],
                            r = this.internal.write;
                        for (var n in A) r("/I" + (t = A[n]).i, t.n, "0", "R")
                    },
                    a = function(e) { return "function" == typeof t["process" + e.toUpperCase()] },
                    c = function(t) { return "object" === n(t) && 1 === t.nodeType },
                    l = function(e, A) { if ("IMG" === e.nodeName && e.hasAttribute("src")) { var r = "" + e.getAttribute("src"); if (0 === r.indexOf("data:image/")) return unescape(r); var n = t.loadFile(r); if (void 0 !== n) return btoa(n) } if ("CANVAS" === e.nodeName) { var i = e; return e.toDataURL("image/jpeg", 1) }(i = document.createElement("canvas")).width = e.clientWidth || e.width, i.height = e.clientHeight || e.height; var o = i.getContext("2d"); if (!o) throw "addImage requires canvas to be supported by browser."; return o.drawImage(e, 0, 0, i.width, i.height), i.toDataURL("png" == ("" + A).toLowerCase() ? "image/png" : "image/jpeg") },
                    u = function(t, e) {
                        var A;
                        if (e)
                            for (var r in e)
                                if (t === e[r].alias) { A = e[r]; break }
                        return A
                    };
                t.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" }, t.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" }, t.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, t.sHashCode = function(t) { var e, A = 0; if (0 === (t = t || "").length) return A; for (e = 0; e < t.length; e++) A = (A << 5) - A + t.charCodeAt(e), A |= 0; return A }, t.isString = function(t) { return "string" == typeof t }, t.validateStringAsBase64 = function(t) {
                    (t = t || "").toString().trim();
                    var e = !0;
                    return 0 === t.length && (e = !1), t.length % 4 != 0 && (e = !1), !1 === /^[A-Za-z0-9+\/]+$/.test(t.substr(0, t.length - 2)) && (e = !1), !1 === /^[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==$/.test(t.substr(-2)) && (e = !1), e
                }, t.extractInfoFromBase64DataURI = function(t) { return /^data:([\w]+?\/([\w]+?));\S*;*base64,(.+)$/g.exec(t) }, t.extractImageFromDataUrl = function(t) {
                    var e = (t = t || "").split("base64,"),
                        A = null;
                    if (2 === e.length) {
                        var r = /^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e[0]);
                        Array.isArray(r) && (A = { mimeType: r[1], charset: r[2], data: e[1] })
                    }
                    return A
                }, t.supportsArrayBuffer = function() { return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array }, t.isArrayBuffer = function(t) { return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer }, t.isArrayBufferView = function(t) { return !!this.supportsArrayBuffer() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) }, t.binaryStringToUint8Array = function(t) { for (var e = t.length, A = new Uint8Array(e), r = 0; r < e; r++) A[r] = t.charCodeAt(r); return A }, t.arrayBufferToBinaryString = function(t) { if ("function" == typeof atob) return atob(this.arrayBufferToBase64(t)) }, t.arrayBufferToBase64 = function(t) { for (var e, A = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(t), i = n.byteLength, o = i % 3, s = i - o, a = 0; a < s; a += 3) A += r[(16515072 & (e = n[a] << 16 | n[a + 1] << 8 | n[a + 2])) >> 18] + r[(258048 & e) >> 12] + r[(4032 & e) >> 6] + r[63 & e]; return 1 == o ? A += r[(252 & (e = n[s])) >> 2] + r[(3 & e) << 4] + "==" : 2 == o && (A += r[(64512 & (e = n[s] << 8 | n[s + 1])) >> 10] + r[(1008 & e) >> 4] + r[(15 & e) << 2] + "="), A }, t.createImageInfo = function(t, e, A, r, n, i, o, s, a, c, l, u, h) { var f = { alias: s, w: e, h: A, cs: r, bpc: n, i: o, data: t }; return i && (f.f = i), a && (f.dp = a), c && (f.trns = c), l && (f.pal = l), u && (f.smask = u), h && (f.p = h), f }, t.addImage = function(A, r, i, h, f, d, p, g, B) {
                    var w = "";
                    if ("string" != typeof r) {
                        var m = d;
                        d = f, f = h, h = i, i = r, r = m
                    }
                    if ("object" === n(A) && !c(A) && "imageData" in A) {
                        var y = A;
                        A = y.imageData, r = y.format || r || "UNKNOWN", i = y.x || i || 0, h = y.y || h || 0, f = y.w || f, d = y.h || d, p = y.alias || p, g = y.compression || g, B = y.rotation || y.angle || B
                    }
                    var v = this.internal.getFilters();
                    if (void 0 === g && -1 !== v.indexOf("FlateEncode") && (g = "SLOW"), "string" == typeof A && (A = unescape(A)), isNaN(i) || isNaN(h)) throw console.error("jsPDF.addImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addImage");
                    var b, C, Q, F, U, E, N, L = function() { var t = this.internal.collections[e + "images"]; return t || (this.internal.collections[e + "images"] = t = {}, this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", s)), t }.call(this);
                    if (!((b = u(A, L)) || (c(A) && (A = l(A, r)), (null == (N = p) || 0 === N.length) && (p = "string" == typeof(E = A) ? t.sHashCode(E) : t.isArrayBufferView(E) ? t.sHashCode(t.arrayBufferToBinaryString(E)) : null), b = u(p, L)))) { if (this.isString(A) && ("" !== (w = this.convertStringToImageData(A)) ? A = w : void 0 !== (w = t.loadFile(A)) && (A = w)), r = this.getImageFileTypeByImageData(A, r), !a(r)) throw new Error("addImage does not support files of type '" + r + "', please ensure that a plugin for '" + r + "' support is added."); if (this.supportsArrayBuffer() && (A instanceof Uint8Array || (C = A, A = this.binaryStringToUint8Array(A))), !(b = this["process" + r.toUpperCase()](A, (U = 0, (F = L) && (U = Object.keys ? Object.keys(F).length : function(t) { var e = 0; for (var A in t) t.hasOwnProperty(A) && e++; return e }(F)), U), p, ((Q = g) && "string" == typeof Q && (Q = Q.toUpperCase()), Q in t.image_compression ? Q : t.image_compression.NONE), C))) throw new Error("An unknown error occurred whilst processing the image") }
                    return function(t, e, A, r, n, i, o, s) {
                        var a = function(t, e, A) { return t || e || (e = t = -96), t < 0 && (t = -1 * A.w * 72 / t / this.internal.scaleFactor), e < 0 && (e = -1 * A.h * 72 / e / this.internal.scaleFactor), 0 === t && (t = e * A.w / A.h), 0 === e && (e = t * A.h / A.w), [t, e] }.call(this, A, r, n),
                            c = this.internal.getCoordinateString,
                            l = this.internal.getVerticalCoordinateString;
                        if (A = a[0], r = a[1], o[i] = n, s) {
                            s *= Math.PI / 180;
                            var u = Math.cos(s),
                                h = Math.sin(s),
                                f = function(t) { return t.toFixed(4) },
                                d = [f(u), f(h), f(-1 * h), f(u), 0, 0, "cm"]
                        }
                        this.internal.write("q"), s ? (this.internal.write([1, "0", "0", 1, c(t), l(e + r), "cm"].join(" ")), this.internal.write(d.join(" ")), this.internal.write([c(A), "0", "0", c(r), "0", "0", "cm"].join(" "))) : this.internal.write([c(A), "0", "0", c(r), c(t), l(e + r), "cm"].join(" ")), this.internal.write("/I" + n.i + " Do"), this.internal.write("Q")
                    }.call(this, i, h, f, d, b, b.i, L, B), this
                }, t.convertStringToImageData = function(e) {
                    var A, r = "";
                    if (this.isString(e)) {
                        var n;
                        A = null !== (n = this.extractImageFromDataUrl(e)) ? n.data : e;
                        try { r = atob(A) } catch (e) { throw t.validateStringAsBase64(A) ? new Error("atob-Error in jsPDF.convertStringToImageData " + e.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertStringToImageData ") }
                    }
                    return r
                };
                var h = function(t, e) { return t.subarray(e, e + 5) };
                t.processJPEG = function(t, e, A, n, i, o) {
                    var s, a = this.decode.DCT_DECODE;
                    if (!this.isString(t) && !this.isArrayBuffer(t) && !this.isArrayBufferView(t)) return null;
                    if (this.isString(t) && (s = function(t) {
                            var e;
                            if ("JPEG" !== r(t)) throw new Error("getJpegSize requires a binary string jpeg file");
                            for (var A = 256 * t.charCodeAt(4) + t.charCodeAt(5), n = 4, i = t.length; n < i;) {
                                if (n += A, 255 !== t.charCodeAt(n)) throw new Error("getJpegSize could not find the size of the image");
                                if (192 === t.charCodeAt(n + 1) || 193 === t.charCodeAt(n + 1) || 194 === t.charCodeAt(n + 1) || 195 === t.charCodeAt(n + 1) || 196 === t.charCodeAt(n + 1) || 197 === t.charCodeAt(n + 1) || 198 === t.charCodeAt(n + 1) || 199 === t.charCodeAt(n + 1)) return e = 256 * t.charCodeAt(n + 5) + t.charCodeAt(n + 6), [256 * t.charCodeAt(n + 7) + t.charCodeAt(n + 8), e, t.charCodeAt(n + 9)];
                                n += 2, A = 256 * t.charCodeAt(n) + t.charCodeAt(n + 1)
                            }
                        }(t)), this.isArrayBuffer(t) && (t = new Uint8Array(t)), this.isArrayBufferView(t) && (s = function(t) {
                            if (65496 != (t[0] << 8 | t[1])) throw new Error("Supplied data is not a JPEG");
                            for (var e, A = t.length, r = (t[4] << 8) + t[5], n = 4; n < A;) {
                                if (r = ((e = h(t, n += r))[2] << 8) + e[3], (192 === e[1] || 194 === e[1]) && 255 === e[0] && 7 < r) return { width: ((e = h(t, n + 5))[2] << 8) + e[3], height: (e[0] << 8) + e[1], numcomponents: e[4] };
                                n += 2
                            }
                            throw new Error("getJpegSizeFromBytes could not find the size of the image")
                        }(t), t = i || this.arrayBufferToBinaryString(t)), void 0 === o) switch (s.numcomponents) {
                        case 1:
                            o = this.color_spaces.DEVICE_GRAY;
                            break;
                        case 4:
                            o = this.color_spaces.DEVICE_CMYK;
                            break;
                        default:
                        case 3:
                            o = this.color_spaces.DEVICE_RGB
                    }
                    return this.createImageInfo(t, s.width, s.height, o, 8, a, e, A)
                }, t.processJPG = function() { return this.processJPEG.apply(this, arguments) }, t.getImageProperties = function(e) { var A, r, n = ""; if (c(e) && (e = l(e)), this.isString(e) && ("" !== (n = this.convertStringToImageData(e)) ? e = n : void 0 !== (n = t.loadFile(e)) && (e = n)), r = this.getImageFileTypeByImageData(e), !a(r)) throw new Error("addImage does not support files of type '" + r + "', please ensure that a plugin for '" + r + "' support is added."); if (this.supportsArrayBuffer() && (e instanceof Uint8Array || (e = this.binaryStringToUint8Array(e))), !(A = this["process" + r.toUpperCase()](e))) throw new Error("An unknown error occurred whilst processing the image"); return { fileType: r, width: A.w, height: A.h, colorSpace: A.cs, compressionMode: A.f, bitsPerComponent: A.bpc } }
            }(dt.API),
            /**
             * @license
             * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
             *
             * Licensed under the MIT License.
             * http://opensource.org/licenses/mit-license
             */
            o = dt.API, dt.API.events.push(["addPage", function(t) { this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [] }]), o.events.push(["putPage", function(t) {
                    for (var e = this.internal.getPageInfoByObjId(t.objId), A = t.pageContext.annotations, r = function(t) { if (void 0 !== t && "" != t) return !0 }, n = !1, i = 0; i < A.length && !n; i++) switch ((a = A[i]).type) {
                        case "link":
                            if (r(a.options.url) || r(a.options.pageNumber)) { n = !0; break }
                        case "reference":
                        case "text":
                        case "freetext":
                            n = !0
                    }
                    if (0 != n) {
                        this.internal.write("/Annots ["), this.internal.pageSize.height;
                        var o = this.internal.getCoordinateString,
                            s = this.internal.getVerticalCoordinateString;
                        for (i = 0; i < A.length; i++) {
                            var a;
                            switch ((a = A[i]).type) {
                                case "reference":
                                    this.internal.write(" " + a.object.objId + " 0 R ");
                                    break;
                                case "text":
                                    var c = this.internal.newAdditionalObject(),
                                        l = this.internal.newAdditionalObject(),
                                        u = a.title || "Note";
                                    g = "<</Type /Annot /Subtype /Text " + (f = "/Rect [" + o(a.bounds.x) + " " + s(a.bounds.y + a.bounds.h) + " " + o(a.bounds.x + a.bounds.w) + " " + s(a.bounds.y) + "] ") + "/Contents (" + a.contents + ")", g += " /Popup " + l.objId + " 0 R", g += " /P " + e.objId + " 0 R", g += " /T (" + u + ") >>", c.content = g;
                                    var h = c.objId + " 0 R";
                                    g = "<</Type /Annot /Subtype /Popup " + (f = "/Rect [" + o(a.bounds.x + 30) + " " + s(a.bounds.y + a.bounds.h) + " " + o(a.bounds.x + a.bounds.w + 30) + " " + s(a.bounds.y) + "] ") + " /Parent " + h, a.open && (g += " /Open true"), g += " >>", l.content = g, this.internal.write(c.objId, "0 R", l.objId, "0 R");
                                    break;
                                case "freetext":
                                    var f = "/Rect [" + o(a.bounds.x) + " " + s(a.bounds.y) + " " + o(a.bounds.x + a.bounds.w) + " " + s(a.bounds.y + a.bounds.h) + "] ",
                                        d = a.color || "#000000";
                                    g = "<</Type /Annot /Subtype /FreeText " + f + "/Contents (" + a.contents + ")", g += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + d + ")", g += " /Border [0 0 0]", g += " >>", this.internal.write(g);
                                    break;
                                case "link":
                                    if (a.options.name) {
                                        var p = this.annotations._nameMap[a.options.name];
                                        a.options.pageNumber = p.page, a.options.top = p.y
                                    } else a.options.top || (a.options.top = 0);
                                    f = "/Rect [" + o(a.x) + " " + s(a.y) + " " + o(a.x + a.w) + " " + s(a.y + a.h) + "] ";
                                    var g = "";
                                    if (a.options.url) g = "<</Type /Annot /Subtype /Link " + f + "/Border [0 0 0] /A <</S /URI /URI (" + a.options.url + ") >>";
                                    else if (a.options.pageNumber) switch (g = "<</Type /Annot /Subtype /Link " + f + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(a.options.pageNumber).objId + " 0 R", a.options.magFactor = a.options.magFactor || "XYZ", a.options.magFactor) {
                                        case "Fit":
                                            g += " /Fit]";
                                            break;
                                        case "FitH":
                                            g += " /FitH " + a.options.top + "]";
                                            break;
                                        case "FitV":
                                            a.options.left = a.options.left || 0, g += " /FitV " + a.options.left + "]";
                                            break;
                                        case "XYZ":
                                        default:
                                            var B = s(a.options.top);
                                            a.options.left = a.options.left || 0, void 0 === a.options.zoom && (a.options.zoom = 0), g += " /XYZ " + a.options.left + " " + B + " " + a.options.zoom + "]"
                                    }
                                    "" != g && (g += " >>", this.internal.write(g))
                            }
                        }
                        this.internal.write("]")
                    }
                }]), o.createAnnotation = function(t) {
                    var e = this.internal.getCurrentPageInfo();
                    switch (t.type) {
                        case "link":
                            this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                            break;
                        case "text":
                        case "freetext":
                            e.pageContext.annotations.push(t)
                    }
                }, o.link = function(t, e, A, r, n) { this.internal.getCurrentPageInfo().pageContext.annotations.push({ x: t, y: e, w: A, h: r, options: n, type: "link" }) }, o.textWithLink = function(t, e, A, r) {
                    var n = this.getTextWidth(t),
                        i = this.internal.getLineHeight() / this.internal.scaleFactor;
                    return this.text(t, e, A), A += .2 * i, this.link(e, A - i, n, i, r), n
                }, o.getTextWidth = function(t) { var e = this.internal.getFontSize(); return this.getStringUnitWidth(t) * e / this.internal.scaleFactor },
                /**
                 * @license
                 * Copyright (c) 2017 Aras Abbasi 
                 *
                 * Licensed under the MIT License.
                 * http://opensource.org/licenses/mit-license
                 */
                function(t) {
                    var e = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] },
                        A = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } },
                        r = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 },
                        n = [1570, 1571, 1573, 1575];
                    t.__arabicParser__ = {};
                    var i = t.__arabicParser__.isInArabicSubstitutionA = function(t) { return void 0 !== e[t.charCodeAt(0)] },
                        o = t.__arabicParser__.isArabicLetter = function(t) { return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t) },
                        s = t.__arabicParser__.isArabicEndLetter = function(t) { return o(t) && i(t) && e[t.charCodeAt(0)].length <= 2 },
                        a = t.__arabicParser__.isArabicAlfLetter = function(t) { return o(t) && 0 <= n.indexOf(t.charCodeAt(0)) },
                        c = (t.__arabicParser__.arabicLetterHasIsolatedForm = function(t) { return o(t) && i(t) && 1 <= e[t.charCodeAt(0)].length }, t.__arabicParser__.arabicLetterHasFinalForm = function(t) { return o(t) && i(t) && 2 <= e[t.charCodeAt(0)].length }),
                        l = (t.__arabicParser__.arabicLetterHasInitialForm = function(t) { return o(t) && i(t) && 3 <= e[t.charCodeAt(0)].length }, t.__arabicParser__.arabicLetterHasMedialForm = function(t) { return o(t) && i(t) && 4 == e[t.charCodeAt(0)].length }),
                        u = t.__arabicParser__.resolveLigatures = function(t) {
                            var e = 0,
                                r = A,
                                n = 0,
                                i = "",
                                o = 0;
                            for (e = 0; e < t.length; e += 1) void 0 !== r[t.charCodeAt(e)] ? (o++, "number" == typeof(r = r[t.charCodeAt(e)]) && (n = -1 !== (n = h(t.charAt(e), t.charAt(e - o), t.charAt(e + 1))) ? n : 0, i += String.fromCharCode(r), r = A, o = 0), e === t.length - 1 && (r = A, i += t.charAt(e - (o - 1)), e -= o - 1, o = 0)) : (r = A, i += t.charAt(e - o), e -= o, o = 0);
                            return i
                        },
                        h = (t.__arabicParser__.isArabicDiacritic = function(t) { return void 0 !== t && void 0 !== r[t.charCodeAt(0)] }, t.__arabicParser__.getCorrectForm = function(t, e, A) { return o(t) ? !1 === i(t) ? -1 : !c(t) || !o(e) && !o(A) || !o(A) && s(e) || s(t) && !o(e) || s(t) && a(e) || s(t) && s(e) ? 0 : l(t) && o(e) && !s(e) && o(A) && c(A) ? 3 : s(t) || !o(A) ? 1 : 2 : -1 }),
                        f = t.__arabicParser__.processArabic = t.processArabic = function(t) {
                            var A = 0,
                                r = 0,
                                n = 0,
                                i = "",
                                s = "",
                                a = "",
                                c = (t = t || "").split("\\s+"),
                                l = [];
                            for (A = 0; A < c.length; A += 1) {
                                for (l.push(""), r = 0; r < c[A].length; r += 1) i = c[A][r], s = c[A][r - 1], a = c[A][r + 1], o(i) ? (n = h(i, s, a), l[A] += -1 !== n ? String.fromCharCode(e[i.charCodeAt(0)][n]) : i) : l[A] += i;
                                l[A] = u(l[A])
                            }
                            return l.join(" ")
                        };
                    t.events.push(["preProcessText", function(t) {
                        var e = t.text,
                            A = (t.x, t.y, t.options || {}),
                            r = (t.mutex, A.lang, []);
                        if ("[object Array]" === Object.prototype.toString.call(e)) {
                            var n = 0;
                            for (r = [], n = 0; n < e.length; n += 1) "[object Array]" === Object.prototype.toString.call(e[n]) ? r.push([f(e[n][0]), e[n][1], e[n][2]]) : r.push([f(e[n])]);
                            t.text = r
                        } else t.text = f(e)
                    }])
                }(dt.API), dt.API.autoPrint = function(t) {
                    var e;
                    switch ((t = t || {}).variant = t.variant || "non-conform", t.variant) {
                        case "javascript":
                            this.addJS("print({});");
                            break;
                        case "non-conform":
                        default:
                            this.internal.events.subscribe("postPutResources", function() { e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj") }), this.internal.events.subscribe("putCatalog", function() { this.internal.out("/OpenAction " + e + " 0 R") })
                    }
                    return this
                },
                /**
                 * @license
                 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
                 *
                 * Licensed under the MIT License.
                 * http://opensource.org/licenses/mit-license
                 */
                s = dt.API, (a = function() {
                    var t = void 0;
                    Object.defineProperty(this, "pdf", { get: function() { return t }, set: function(e) { t = e } });
                    var e = 150;
                    Object.defineProperty(this, "width", { get: function() { return e }, set: function(t) { e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e + 1) } });
                    var A = 300;
                    Object.defineProperty(this, "height", { get: function() { return A }, set: function(t) { A = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = A + 1) } });
                    var r = [];
                    Object.defineProperty(this, "childNodes", { get: function() { return r }, set: function(t) { r = t } });
                    var n = {};
                    Object.defineProperty(this, "style", { get: function() { return n }, set: function(t) { n = t } }), Object.defineProperty(this, "parentNode", { get: function() { return !1 } })
                }).prototype.getContext = function(t, e) { var A; if ("2d" !== (t = t || "2d")) return null; for (A in e) this.pdf.context2d.hasOwnProperty(A) && (this.pdf.context2d[A] = e[A]); return (this.pdf.context2d._canvas = this).pdf.context2d }, a.prototype.toDataURL = function() { throw new Error("toDataURL is not implemented.") }, s.events.push(["initialized", function() { this.canvas = new a, this.canvas.pdf = this }]),
                /** 
                 * @license
                 * ====================================================================
                 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
                 *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
                 *               2013 Lee Driscoll, https://github.com/lsdriscoll
                 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
                 *               2014 James Hall, james@parall.ax
                 *               2014 Diego Casorran, https://github.com/diegocr
                 *
                 * 
                 * ====================================================================
                 */
                c = dt.API, u = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, h = 1, f = function(t, e, A, r, n) { u = { x: t, y: e, w: A, h: r, ln: n } }, d = function() { return u }, p = { left: 0, top: 0, bottom: 0 }, c.setHeaderFunction = function(t) { l = t }, c.getTextDimensions = function(t, e) {
                    var A = this.table_font_size || this.internal.getFontSize(),
                        r = (this.internal.getFont().fontStyle, (e = e || {}).scaleFactor || this.internal.scaleFactor),
                        n = 0,
                        i = 0,
                        o = 0;
                    if ("string" == typeof t) 0 != (n = this.getStringUnitWidth(t) * A) && (i = 1);
                    else {
                        if ("[object Array]" !== Object.prototype.toString.call(t)) throw new Error("getTextDimensions expects text-parameter to be of type String or an Array of Strings.");
                        for (var s = 0; s < t.length; s++) n < (o = this.getStringUnitWidth(t[s]) * A) && (n = o);
                        0 !== n && (i = t.length)
                    }
                    return { w: n /= r, h: Math.max((i * A * this.getLineHeightFactor() - A * (this.getLineHeightFactor() - 1)) / r, 0) }
                }, c.cellAddPage = function() {
                    var t = this.margins || p;
                    this.addPage(), f(t.left, t.top, void 0, void 0), h += 1
                }, c.cellInitialize = function() { u = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, h = 1 }, c.cell = function(t, e, A, r, n, i, o) {
                    var s = d(),
                        a = !1;
                    if (void 0 !== s.ln)
                        if (s.ln === i) t = s.x + s.w, e = s.y;
                        else {
                            var c = this.margins || p;
                            s.y + s.h + r + 13 >= this.internal.pageSize.getHeight() - c.bottom && (this.cellAddPage(), a = !0, this.printHeaders && this.tableHeaderRow && this.printHeaderRow(i, !0)), e = d().y + d().h, a && (e = 23)
                        }
                    if (void 0 !== n[0])
                        if (this.printingHeaderRow ? this.rect(t, e, A, r, "FD") : this.rect(t, e, A, r), "right" === o) {
                            n instanceof Array || (n = [n]);
                            for (var l = 0; l < n.length; l++) {
                                var u = n[l],
                                    h = this.getStringUnitWidth(u) * this.internal.getFontSize() / this.internal.scaleFactor;
                                this.text(u, t + A - h - 3, e + this.internal.getLineHeight() * (l + 1))
                            }
                        } else this.text(n, t + 3, e + this.internal.getLineHeight());
                    return f(t, e, A, r, i), this
                }, c.arrayMax = function(t, e) { var A, r, n, i = t[0]; for (A = 0, r = t.length; A < r; A += 1) n = t[A], e ? -1 === e(i, n) && (i = n) : i < n && (i = n); return i }, c.table = function(t, e, A, r, n) {
                    if (!A) throw "No data for PDF table";
                    var i, o, s, a, l, f, d, g, B, w, m = [],
                        y = [],
                        v = {},
                        b = {},
                        C = [],
                        Q = [],
                        F = !1,
                        U = !0,
                        E = 12,
                        N = p;
                    if (N.width = this.internal.pageSize.getWidth(), n && (!0 === n.autoSize && (F = !0), !1 === n.printHeaders && (U = !1), n.fontSize && (E = n.fontSize), n.css && void 0 !== n.css["font-size"] && (E = 16 * n.css["font-size"]), n.margins && (N = n.margins)), this.lnMod = 0, u = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, h = 1, this.printHeaders = U, this.margins = N, this.setFontSize(E), this.table_font_size = E, null == r) m = Object.keys(A[0]);
                    else if (r[0] && "string" != typeof r[0])
                        for (o = 0, s = r.length; o < s; o += 1) i = r[o], m.push(i.name), y.push(i.prompt), b[i.name] = i.width * (19.049976 / 25.4);
                    else m = r;
                    if (F)
                        for (w = function(t) { return t[i] }, o = 0, s = m.length; o < s; o += 1) {
                            for (v[i = m[o]] = A.map(w), C.push(this.getTextDimensions(y[o] || i, { scaleFactor: 1 }).w), d = 0, a = (f = v[i]).length; d < a; d += 1) l = f[d], C.push(this.getTextDimensions(l, { scaleFactor: 1 }).w);
                            b[i] = c.arrayMax(C), C = []
                        }
                    if (U) {
                        var L = this.calculateLineHeight(m, b, y.length ? y : m);
                        for (o = 0, s = m.length; o < s; o += 1) i = m[o], Q.push([t, e, b[i], L, String(y.length ? y[o] : i)]);
                        this.setTableHeaderRow(Q), this.printHeaderRow(1, !1)
                    }
                    for (o = 0, s = A.length; o < s; o += 1)
                        for (g = A[o], L = this.calculateLineHeight(m, b, g), d = 0, B = m.length; d < B; d += 1) i = m[d], this.cell(t, e, b[i], L, g[i], o + 2, i.align);
                    return this.lastCellPos = u, this.table_x = t, this.table_y = e, this
                }, c.calculateLineHeight = function(t, e, A) {
                    for (var r, n = 0, i = 0; i < t.length; i++) {
                        A[r = t[i]] = this.splitTextToSize(String(A[r]), e[r] - 3);
                        var o = this.internal.getLineHeight() * A[r].length + 3;
                        n < o && (n = o)
                    }
                    return n
                }, c.setTableHeaderRow = function(t) { this.tableHeaderRow = t }, c.printHeaderRow = function(t, e) {
                    if (!this.tableHeaderRow) throw "Property tableHeaderRow does not exist.";
                    var A, r, n, i;
                    if (this.printingHeaderRow = !0, void 0 !== l) {
                        var o = l(this, h);
                        f(o[0], o[1], o[2], o[3], -1)
                    }
                    this.setFontStyle("bold");
                    var s = [];
                    for (n = 0, i = this.tableHeaderRow.length; n < i; n += 1) this.setFillColor(200, 200, 200), A = this.tableHeaderRow[n], e && (this.margins.top = 13, A[1] = this.margins && this.margins.top || 0, s.push(A)), r = [].concat(A), this.cell.apply(this, r.concat(t));
                    0 < s.length && this.setTableHeaderRow(s), this.setFontStyle("normal"), this.printingHeaderRow = !1
                },
                function(t, e) {
                    var A, r, i, o, s, a = function(t) { return t = t || {}, this.isStrokeTransparent = t.isStrokeTransparent || !1, this.strokeOpacity = t.strokeOpacity || 1, this.strokeStyle = t.strokeStyle || "#000000", this.fillStyle = t.fillStyle || "#000000", this.isFillTransparent = t.isFillTransparent || !1, this.fillOpacity = t.fillOpacity || 1, this.font = t.font || "10px sans-serif", this.textBaseline = t.textBaseline || "alphabetic", this.textAlign = t.textAlign || "left", this.lineWidth = t.lineWidth || 1, this.lineJoin = t.lineJoin || "miter", this.lineCap = t.lineCap || "butt", this.path = t.path || [], this.transform = void 0 !== t.transform ? t.transform.clone() : new T, this.globalCompositeOperation = t.globalCompositeOperation || "normal", this.globalAlpha = t.globalAlpha || 1, this.clip_path = t.clip_path || [], this.currentPoint = t.currentPoint || new S, this.miterLimit = t.miterLimit || 10, this.lastPoint = t.lastPoint || new S, this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect, this };
                    t.events.push(["initialized", function() { this.context2d = new c(this), A = this.internal.f2, this.internal.f3, r = this.internal.getCoordinateString, i = this.internal.getVerticalCoordinateString, o = this.internal.getHorizontalCoordinate, s = this.internal.getVerticalCoordinate }]);
                    var c = function(t) {
                        Object.defineProperty(this, "canvas", { get: function() { return { parentNode: !1, style: !1 } } }), Object.defineProperty(this, "pdf", { get: function() { return t } });
                        var e = !1;
                        Object.defineProperty(this, "pageWrapXEnabled", { get: function() { return e }, set: function(t) { e = Boolean(t) } });
                        var A = !1;
                        Object.defineProperty(this, "pageWrapYEnabled", { get: function() { return A }, set: function(t) { A = Boolean(t) } });
                        var r = 0;
                        Object.defineProperty(this, "posX", { get: function() { return r }, set: function(t) { isNaN(t) || (r = t) } });
                        var n = 0;
                        Object.defineProperty(this, "posY", { get: function() { return n }, set: function(t) { isNaN(t) || (n = t) } });
                        var i = !1;
                        Object.defineProperty(this, "autoPaging", { get: function() { return i }, set: function(t) { i = Boolean(t) } });
                        var o = 0;
                        Object.defineProperty(this, "lastBreak", { get: function() { return o }, set: function(t) { o = t } });
                        var s = [];
                        Object.defineProperty(this, "pageBreaks", { get: function() { return s }, set: function(t) { s = t } });
                        var c = new a;
                        Object.defineProperty(this, "ctx", { get: function() { return c }, set: function(t) { t instanceof a && (c = t) } }), Object.defineProperty(this, "path", { get: function() { return c.path }, set: function(t) { c.path = t } });
                        var u = [];
                        Object.defineProperty(this, "ctxStack", { get: function() { return u }, set: function(t) { u = t } }), Object.defineProperty(this, "fillStyle", {
                            get: function() { return this.ctx.fillStyle },
                            set: function(t) {
                                var e;
                                e = l(t), this.ctx.fillStyle = e.style, this.ctx.isFillTransparent = 0 === e.a, this.ctx.fillOpacity = e.a, this.pdf.setFillColor(e.r, e.g, e.b, { a: e.a }), this.pdf.setTextColor(e.r, e.g, e.b, { a: e.a })
                            }
                        }), Object.defineProperty(this, "strokeStyle", {
                            get: function() { return this.ctx.strokeStyle },
                            set: function(t) {
                                var e = l(t);
                                this.ctx.strokeStyle = e.style, this.ctx.isStrokeTransparent = 0 === e.a, this.ctx.strokeOpacity = e.a, 0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b))
                            }
                        }), Object.defineProperty(this, "lineCap", { get: function() { return this.ctx.lineCap }, set: function(t) {-1 !== ["butt", "round", "square"].indexOf(t) && (this.ctx.lineCap = t, this.pdf.setLineCap(t)) } }), Object.defineProperty(this, "lineWidth", { get: function() { return this.ctx.lineWidth }, set: function(t) { isNaN(t) || (this.ctx.lineWidth = t, this.pdf.setLineWidth(t)) } }), Object.defineProperty(this, "lineJoin", { get: function() { return this.ctx.lineJoin }, set: function(t) {-1 !== ["bevel", "round", "miter"].indexOf(t) && (this.ctx.lineJoin = t, this.pdf.setLineJoin(t)) } }), Object.defineProperty(this, "miterLimit", { get: function() { return this.ctx.miterLimit }, set: function(t) { isNaN(t) || (this.ctx.miterLimit = t, this.pdf.setMiterLimit(t)) } }), Object.defineProperty(this, "textBaseline", { get: function() { return this.ctx.textBaseline }, set: function(t) { this.ctx.textBaseline = t } }), Object.defineProperty(this, "textAlign", { get: function() { return this.ctx.textAlign }, set: function(t) {-1 !== ["right", "end", "center", "left", "start"].indexOf(t) && (this.ctx.textAlign = t) } }), Object.defineProperty(this, "font", {
                            get: function() { return this.ctx.font },
                            set: function(t) {
                                var e;
                                if (this.ctx.font = t, null !== (e = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))) {
                                    var A = e[1],
                                        r = (e[2], e[3]),
                                        n = e[4],
                                        i = e[5],
                                        o = e[6];
                                    n = "px" === i ? Math.floor(parseFloat(n)) : "em" === i ? Math.floor(parseFloat(n) * this.pdf.getFontSize()) : Math.floor(parseFloat(n)), this.pdf.setFontSize(n);
                                    var s = "";
                                    ("bold" === r || 700 <= parseInt(r, 10) || "bold" === A) && (s = "bold"), "italic" === A && (s += "italic"), 0 === s.length && (s = "normal");
                                    for (var a = "", c = o.toLowerCase().replace(/"|'/g, "").split(/\s*,\s*/), l = { arial: "Helvetica", verdana: "Helvetica", helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", courier: "Courier", times: "Times", cursive: "Times", fantasy: "Times", serif: "Times" }, u = 0; u < c.length; u++) {
                                        if (void 0 !== this.pdf.internal.getFont(c[u], s, { noFallback: !0, disableWarning: !0 })) { a = c[u]; break }
                                        if ("bolditalic" === s && void 0 !== this.pdf.internal.getFont(c[u], "bold", { noFallback: !0, disableWarning: !0 })) a = c[u], s = "bold";
                                        else if (void 0 !== this.pdf.internal.getFont(c[u], "normal", { noFallback: !0, disableWarning: !0 })) { a = c[u], s = "normal"; break }
                                    }
                                    if ("" === a)
                                        for (u = 0; u < c.length; u++)
                                            if (l[c[u]]) { a = l[c[u]]; break }
                                    a = "" === a ? "Times" : a, this.pdf.setFont(a, s)
                                }
                            }
                        }), Object.defineProperty(this, "globalCompositeOperation", { get: function() { return this.ctx.globalCompositeOperation }, set: function(t) { this.ctx.globalCompositeOperation = t } }), Object.defineProperty(this, "globalAlpha", { get: function() { return this.ctx.globalAlpha }, set: function(t) { this.ctx.globalAlpha = t } }), Object.defineProperty(this, "ignoreClearRect", { get: function() { return this.ctx.ignoreClearRect }, set: function(t) { this.ctx.ignoreClearRect = Boolean(t) } })
                    };
                    c.prototype.fill = function() { g.call(this, "fill", !1) }, c.prototype.stroke = function() { g.call(this, "stroke", !1) }, c.prototype.beginPath = function() { this.path = [{ type: "begin" }] }, c.prototype.moveTo = function(t, e) {
                        if (isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
                        var A = this.ctx.transform.applyToPoint(new S(t, e));
                        this.path.push({ type: "mt", x: A.x, y: A.y }), this.ctx.lastPoint = new S(t, e)
                    }, c.prototype.closePath = function() {
                        var t = new S(0, 0),
                            e = 0;
                        for (e = this.path.length - 1; - 1 !== e; e--)
                            if ("begin" === this.path[e].type && "object" === n(this.path[e + 1]) && "number" == typeof this.path[e + 1].x) { t = new S(this.path[e + 1].x, this.path[e + 1].y), this.path.push({ type: "lt", x: t.x, y: t.y }); break }
                            "object" === n(this.path[e + 2]) && "number" == typeof this.path[e + 2].x && this.path.push(JSON.parse(JSON.stringify(this.path[e + 2]))), this.path.push({ type: "close" }), this.ctx.lastPoint = new S(t.x, t.y)
                    }, c.prototype.lineTo = function(t, e) {
                        if (isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
                        var A = this.ctx.transform.applyToPoint(new S(t, e));
                        this.path.push({ type: "lt", x: A.x, y: A.y }), this.ctx.lastPoint = new S(A.x, A.y)
                    }, c.prototype.clip = function() { this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), g.call(this, null, !0) }, c.prototype.quadraticCurveTo = function(t, e, A, r) {
                        if (isNaN(A) || isNaN(r) || isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
                        var n = this.ctx.transform.applyToPoint(new S(A, r)),
                            i = this.ctx.transform.applyToPoint(new S(t, e));
                        this.path.push({ type: "qct", x1: i.x, y1: i.y, x: n.x, y: n.y }), this.ctx.lastPoint = new S(n.x, n.y)
                    }, c.prototype.bezierCurveTo = function(t, e, A, r, n, i) {
                        if (isNaN(n) || isNaN(i) || isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r)) throw console.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
                        var o = this.ctx.transform.applyToPoint(new S(n, i)),
                            s = this.ctx.transform.applyToPoint(new S(t, e)),
                            a = this.ctx.transform.applyToPoint(new S(A, r));
                        this.path.push({ type: "bct", x1: s.x, y1: s.y, x2: a.x, y2: a.y, x: o.x, y: o.y }), this.ctx.lastPoint = new S(o.x, o.y)
                    }, c.prototype.arc = function(t, e, A, r, n, i) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r) || isNaN(n)) throw console.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
                        if (i = Boolean(i), !this.ctx.transform.isIdentity) {
                            var o = this.ctx.transform.applyToPoint(new S(t, e));
                            t = o.x, e = o.y;
                            var s = this.ctx.transform.applyToPoint(new S(0, A)),
                                a = this.ctx.transform.applyToPoint(new S(0, 0));
                            A = Math.sqrt(Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2))
                        }
                        Math.abs(n - r) >= 2 * Math.PI && (r = 0, n = 2 * Math.PI), this.path.push({ type: "arc", x: t, y: e, radius: A, startAngle: r, endAngle: n, counterclockwise: i })
                    }, c.prototype.arcTo = function(t, e, A, r, n) { throw new Error("arcTo not implemented.") }, c.prototype.rect = function(t, e, A, r) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r)) throw console.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
                        this.moveTo(t, e), this.lineTo(t + A, e), this.lineTo(t + A, e + r), this.lineTo(t, e + r), this.lineTo(t, e), this.lineTo(t + A, e), this.lineTo(t, e)
                    }, c.prototype.fillRect = function(t, e, A, r) { if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r)) throw console.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect"); if (!u.call(this)) { var n = {}; "butt" !== this.lineCap && (n.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (n.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t, e, A, r), this.fill(), n.hasOwnProperty("lineCap") && (this.lineCap = n.lineCap), n.hasOwnProperty("lineJoin") && (this.lineJoin = n.lineJoin) } }, c.prototype.strokeRect = function(t, e, A, r) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r)) throw console.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
                        h.call(this) || (this.beginPath(), this.rect(t, e, A, r), this.stroke())
                    }, c.prototype.clearRect = function(t, e, A, r) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r)) throw console.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
                        this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t, e, A, r))
                    }, c.prototype.save = function(t) {
                        t = "boolean" != typeof t || t;
                        for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, A = 0; A < this.pdf.internal.getNumberOfPages(); A++) this.pdf.setPage(A + 1), this.pdf.internal.out("q");
                        if (this.pdf.setPage(e), t) {
                            this.ctx.fontSize = this.pdf.internal.getFontSize();
                            var r = new a(this.ctx);
                            this.ctxStack.push(this.ctx), this.ctx = r
                        }
                    }, c.prototype.restore = function(t) {
                        t = "boolean" != typeof t || t;
                        for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, A = 0; A < this.pdf.internal.getNumberOfPages(); A++) this.pdf.setPage(A + 1), this.pdf.internal.out("Q");
                        this.pdf.setPage(e), t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin)
                    }, c.prototype.toDataURL = function() { throw new Error("toDataUrl not implemented.") };
                    var l = function(t) {
                            var e, A, r, n;
                            if (!0 === t.isCanvasGradient && (t = t.getColor()), !t) return { r: 0, g: 0, b: 0, a: 0, style: t };
                            if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) n = r = A = e = 0;
                            else {
                                var i = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
                                if (null !== i) e = parseInt(i[1]), A = parseInt(i[2]), r = parseInt(i[3]), n = 1;
                                else if (null !== (i = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/.exec(t))) e = parseInt(i[1]), A = parseInt(i[2]), r = parseInt(i[3]), n = parseFloat(i[4]);
                                else {
                                    if (n = 1, "string" == typeof t && "#" !== t.charAt(0)) {
                                        var o = new RGBColor(t);
                                        t = o.ok ? o.toHex() : "#000000"
                                    }
                                    4 === t.length ? (e = t.substring(1, 2), e += e, A = t.substring(2, 3), A += A, r = t.substring(3, 4), r += r) : (e = t.substring(1, 3), A = t.substring(3, 5), r = t.substring(5, 7)), e = parseInt(e, 16), A = parseInt(A, 16), r = parseInt(r, 16)
                                }
                            }
                            return { r: e, g: A, b: r, a: n, style: t }
                        },
                        u = function() { return this.ctx.isFillTransparent || 0 == this.globalAlpha },
                        h = function() { return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha) };
                    c.prototype.fillText = function(t, e, A, r) {
                        if (isNaN(e) || isNaN(A) || "string" != typeof t) throw console.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
                        if (r = isNaN(r) ? void 0 : r, !u.call(this)) {
                            A = w.call(this, A);
                            var n = L(this.ctx.transform.rotation),
                                i = this.ctx.transform.scaleX;
                            C.call(this, { text: t, x: e, y: A, scale: i, angle: n, align: this.textAlign, maxWidth: r })
                        }
                    }, c.prototype.strokeText = function(t, e, A, r) {
                        if (isNaN(e) || isNaN(A) || "string" != typeof t) throw console.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
                        if (!h.call(this)) {
                            r = isNaN(r) ? void 0 : r, A = w.call(this, A);
                            var n = L(this.ctx.transform.rotation),
                                i = this.ctx.transform.scaleX;
                            C.call(this, { text: t, x: e, y: A, scale: i, renderingMode: "stroke", angle: n, align: this.textAlign, maxWidth: r })
                        }
                    }, c.prototype.measureText = function(t) {
                        if ("string" != typeof t) throw console.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
                        var e = this.pdf,
                            A = this.pdf.internal.scaleFactor,
                            r = e.internal.getFontSize(),
                            n = e.getStringUnitWidth(t) * r / e.internal.scaleFactor;
                        return new function(t) { var e = (t = t || {}).width || 0; return Object.defineProperty(this, "width", { get: function() { return e } }), this }({ width: n *= Math.round(96 * A / 72 * 1e4) / 1e4 })
                    }, c.prototype.scale = function(t, e) {
                        if (isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
                        var A = new T(t, 0, 0, e, 0, 0);
                        this.ctx.transform = this.ctx.transform.multiply(A)
                    }, c.prototype.rotate = function(t) {
                        if (isNaN(t)) throw console.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
                        var e = new T(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
                        this.ctx.transform = this.ctx.transform.multiply(e)
                    }, c.prototype.translate = function(t, e) {
                        if (isNaN(t) || isNaN(e)) throw console.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
                        var A = new T(1, 0, 0, 1, t, e);
                        this.ctx.transform = this.ctx.transform.multiply(A)
                    }, c.prototype.transform = function(t, e, A, r, n, i) {
                        if (isNaN(t) || isNaN(e) || isNaN(A) || isNaN(r) || isNaN(n) || isNaN(i)) throw console.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
                        var o = new T(t, e, A, r, n, i);
                        this.ctx.transform = this.ctx.transform.multiply(o)
                    }, c.prototype.setTransform = function(t, e, A, r, n, i) { t = isNaN(t) ? 1 : t, e = isNaN(e) ? 0 : e, A = isNaN(A) ? 0 : A, r = isNaN(r) ? 1 : r, n = isNaN(n) ? 0 : n, i = isNaN(i) ? 0 : i, this.ctx.transform = new T(t, e, A, r, n, i) }, c.prototype.drawImage = function(t, e, A, r, n, i, o, s, a) {
                        var c = this.pdf.getImageProperties(t),
                            l = 1,
                            u = 1,
                            h = 1,
                            d = 1;
                        void 0 !== r && void 0 !== s && (h = s / r, d = a / n, l = c.width / r * s / r, u = c.height / n * a / n), void 0 === i && (i = e, o = A, A = e = 0), void 0 !== r && void 0 === s && (s = r, a = n), void 0 === r && void 0 === s && (s = c.width, a = c.height);
                        var g = this.ctx.transform.decompose(),
                            w = L(g.rotate.shx);
                        g.scale.sx, g.scale.sy;
                        for (var m, y = new T, v = ((y = (y = (y = y.multiply(g.translate)).multiply(g.skew)).multiply(g.scale)).applyToPoint(new S(s, a)), y.applyToRectangle(new I(i - e * h, o - A * d, r * l, n * u))), b = f.call(this, v), C = [], Q = 0; Q < b.length; Q += 1) - 1 === C.indexOf(b[Q]) && C.push(b[Q]);
                        if (C.sort(), this.autoPaging)
                            for (var F = C[0], U = C[C.length - 1], E = F; E < U + 1; E++) {
                                if (this.pdf.setPage(E), 0 !== this.ctx.clip_path.length) {
                                    var N = this.path;
                                    m = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = p(m, this.posX, -1 * this.pdf.internal.pageSize.height * (E - 1) + this.posY), B.call(this, "fill", !0), this.path = N
                                }
                                var x = JSON.parse(JSON.stringify(v));
                                x = p([x], this.posX, -1 * this.pdf.internal.pageSize.height * (E - 1) + this.posY)[0], this.pdf.addImage(t, "jpg", x.x, x.y, x.w, x.h, null, null, w)
                            } else this.pdf.addImage(t, "jpg", v.x, v.y, v.w, v.h, null, null, w)
                    };
                    var f = function(t, e, A) {
                            var r = [];
                            switch (e = e || this.pdf.internal.pageSize.width, A = A || this.pdf.internal.pageSize.height, t.type) {
                                default:
                                    case "mt":
                                    case "lt":
                                    r.push(Math.floor((t.y + this.posY) / A) + 1);
                                break;
                                case "arc":
                                        r.push(Math.floor((t.y + this.posY - t.radius) / A) + 1),
                                    r.push(Math.floor((t.y + this.posY + t.radius) / A) + 1);
                                    break;
                                case "qct":
                                        var n = _(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);r.push(Math.floor(n.y / A) + 1),
                                    r.push(Math.floor((n.y + n.h) / A) + 1);
                                    break;
                                case "bct":
                                        var i = H(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);r.push(Math.floor(i.y / A) + 1),
                                    r.push(Math.floor((i.y + i.h) / A) + 1);
                                    break;
                                case "rect":
                                        r.push(Math.floor((t.y + this.posY) / A) + 1),
                                    r.push(Math.floor((t.y + t.h + this.posY) / A) + 1)
                            }
                            for (var o = 0; o < r.length; o += 1)
                                for (; this.pdf.internal.getNumberOfPages() < r[o];) d.call(this);
                            return r
                        },
                        d = function() {
                            var t = this.fillStyle,
                                e = this.strokeStyle,
                                A = this.font,
                                r = this.lineCap,
                                n = this.lineWidth,
                                i = this.lineJoin;
                            this.pdf.addPage(), this.fillStyle = t, this.strokeStyle = e, this.font = A, this.lineCap = r, this.lineWidth = n, this.lineJoin = i
                        },
                        p = function(t, e, A) {
                            for (var r = 0; r < t.length; r++) switch (t[r].type) {
                                case "bct":
                                    t[r].x2 += e, t[r].y2 += A;
                                case "qct":
                                    t[r].x1 += e, t[r].y1 += A;
                                case "mt":
                                case "lt":
                                case "arc":
                                default:
                                    t[r].x += e, t[r].y += A
                            }
                            return t
                        },
                        g = function(t, e) {
                            for (var A, r, n = this.fillStyle, i = this.strokeStyle, o = (this.font, this.lineCap), s = this.lineWidth, a = this.lineJoin, c = JSON.parse(JSON.stringify(this.path)), l = JSON.parse(JSON.stringify(this.path)), u = [], h = 0; h < l.length; h++)
                                if (void 0 !== l[h].x)
                                    for (var g = f.call(this, l[h]), w = 0; w < g.length; w += 1) - 1 === u.indexOf(g[w]) && u.push(g[w]);
                            for (h = 0; h < u.length; h++)
                                for (; this.pdf.internal.getNumberOfPages() < u[h];) d.call(this);
                            if (u.sort(), this.autoPaging) {
                                var m = u[0],
                                    y = u[u.length - 1];
                                for (h = m; h < y + 1; h++) {
                                    if (this.pdf.setPage(h), this.fillStyle = n, this.strokeStyle = i, this.lineCap = o, this.lineWidth = s, this.lineJoin = a, 0 !== this.ctx.clip_path.length) {
                                        var v = this.path;
                                        A = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = p(A, this.posX, -1 * this.pdf.internal.pageSize.height * (h - 1) + this.posY), B.call(this, t, !0), this.path = v
                                    }
                                    r = JSON.parse(JSON.stringify(c)), this.path = p(r, this.posX, -1 * this.pdf.internal.pageSize.height * (h - 1) + this.posY), !1 !== e && 0 !== h || B.call(this, t, e)
                                }
                            } else B.call(this, t, e);
                            this.path = c
                        },
                        B = function(t, e) {
                            if (("stroke" !== t || e || !h.call(this)) && ("stroke" === t || e || !u.call(this))) {
                                var A = [];
                                this.ctx.globalAlpha, this.ctx.fillOpacity < 1 && this.ctx.fillOpacity;
                                for (var r, n = this.path, i = 0; i < n.length; i++) {
                                    var o = n[i];
                                    switch (o.type) {
                                        case "begin":
                                            A.push({ begin: !0 });
                                            break;
                                        case "close":
                                            A.push({ close: !0 });
                                            break;
                                        case "mt":
                                            A.push({ start: o, deltas: [], abs: [] });
                                            break;
                                        case "lt":
                                            var s = A.length;
                                            if (!isNaN(n[i - 1].x)) {
                                                var a = [o.x - n[i - 1].x, o.y - n[i - 1].y];
                                                if (0 < s)
                                                    for (; 0 <= s; s--)
                                                        if (!0 !== A[s - 1].close && !0 !== A[s - 1].begin) { A[s - 1].deltas.push(a), A[s - 1].abs.push(o); break }
                                            }
                                            break;
                                        case "bct":
                                            a = [o.x1 - n[i - 1].x, o.y1 - n[i - 1].y, o.x2 - n[i - 1].x, o.y2 - n[i - 1].y, o.x - n[i - 1].x, o.y - n[i - 1].y], A[A.length - 1].deltas.push(a);
                                            break;
                                        case "qct":
                                            var c = n[i - 1].x + 2 / 3 * (o.x1 - n[i - 1].x),
                                                l = n[i - 1].y + 2 / 3 * (o.y1 - n[i - 1].y),
                                                f = o.x + 2 / 3 * (o.x1 - o.x),
                                                d = o.y + 2 / 3 * (o.y1 - o.y),
                                                p = o.x,
                                                g = o.y;
                                            a = [c - n[i - 1].x, l - n[i - 1].y, f - n[i - 1].x, d - n[i - 1].y, p - n[i - 1].x, g - n[i - 1].y], A[A.length - 1].deltas.push(a);
                                            break;
                                        case "arc":
                                            A.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(A[A.length - 1].abs) && A[A.length - 1].abs.push(o)
                                    }
                                }
                                for (r = e ? null : "stroke" === t ? "stroke" : "fill", i = 0; i < A.length; i++) {
                                    if (A[i].arc)
                                        for (var B = A[i].abs, w = 0; w < B.length; w++) {
                                            var b = B[w];
                                            if (void 0 !== b.startAngle) {
                                                var C = L(b.startAngle),
                                                    U = L(b.endAngle),
                                                    E = b.x,
                                                    N = b.y;
                                                m.call(this, E, N, b.radius, C, U, b.counterclockwise, r, e)
                                            } else Q.call(this, b.x, b.y)
                                        }
                                    A[i].arc || !0 === A[i].close || !0 === A[i].begin || (E = A[i].start.x, N = A[i].start.y, F.call(this, A[i].deltas, E, N, null, null))
                                }
                                r && y.call(this, r), e && v.call(this)
                            }
                        },
                        w = function(t) {
                            var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
                                A = e * (this.pdf.internal.getLineHeightFactor() - 1);
                            switch (this.ctx.textBaseline) {
                                case "bottom":
                                    return t - A;
                                case "top":
                                    return t + e - A;
                                case "hanging":
                                    return t + e - 2 * A;
                                case "middle":
                                    return t + e / 2 - A;
                                case "ideographic":
                                    return t;
                                case "alphabetic":
                                default:
                                    return t
                            }
                        };
                    c.prototype.createLinearGradient = function() { var t = function() {}; return t.colorStops = [], t.addColorStop = function(t, e) { this.colorStops.push([t, e]) }, t.getColor = function() { return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1] }, t.isCanvasGradient = !0, t }, c.prototype.createPattern = function() { return this.createLinearGradient() }, c.prototype.createRadialGradient = function() { return this.createLinearGradient() };
                    var m = function(t, e, A, r, n, i, o, s) {
                            this.pdf.internal.scaleFactor;
                            for (var a = x(r), c = x(n), l = E.call(this, A, a, c, i), u = 0; u < l.length; u++) {
                                var h = l[u];
                                0 === u && b.call(this, h.x1 + t, h.y1 + e), U.call(this, t, e, h.x2, h.y2, h.x3, h.y3, h.x4, h.y4)
                            }
                            s ? v.call(this) : y.call(this, o)
                        },
                        y = function(t) {
                            switch (t) {
                                case "stroke":
                                    this.pdf.internal.out("S");
                                    break;
                                case "fill":
                                    this.pdf.internal.out("f")
                            }
                        },
                        v = function() { this.pdf.clip() },
                        b = function(t, e) { this.pdf.internal.out(r(t) + " " + i(e) + " m") },
                        C = function(t) {
                            var e;
                            switch (t.align) {
                                case "right":
                                case "end":
                                    e = "right";
                                    break;
                                case "center":
                                    e = "center";
                                    break;
                                case "left":
                                case "start":
                                default:
                                    e = "left"
                            }
                            var A = this.ctx.transform.applyToPoint(new S(t.x, t.y)),
                                r = this.ctx.transform.decompose(),
                                n = new T;
                            n = (n = (n = n.multiply(r.translate)).multiply(r.skew)).multiply(r.scale);
                            for (var i, o = this.pdf.getTextDimensions(t.text), s = this.ctx.transform.applyToRectangle(new I(t.x, t.y, o.w, o.h)), a = n.applyToRectangle(new I(t.x, t.y - o.h, o.w, o.h)), c = f.call(this, a), l = [], u = 0; u < c.length; u += 1) - 1 === l.indexOf(c[u]) && l.push(c[u]);
                            if (l.sort(), !0 === this.autoPaging)
                                for (var h = l[0], d = l[l.length - 1], g = h; g < d + 1; g++) {
                                    if (this.pdf.setPage(g), 0 !== this.ctx.clip_path.length) {
                                        var w = this.path;
                                        i = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = p(i, this.posX, -1 * this.pdf.internal.pageSize.height * (g - 1) + this.posY), B.call(this, "fill", !0), this.path = w
                                    }
                                    var m = JSON.parse(JSON.stringify(s));
                                    if (m = p([m], this.posX, -1 * this.pdf.internal.pageSize.height * (g - 1) + this.posY)[0], .01 <= t.scale) {
                                        var y = this.pdf.internal.getFontSize();
                                        this.pdf.setFontSize(y * t.scale)
                                    }
                                    this.pdf.text(t.text, m.x, m.y, { angle: t.angle, align: e, renderingMode: t.renderingMode, maxWidth: t.maxWidth }), .01 <= t.scale && this.pdf.setFontSize(y)
                                } else .01 <= t.scale && (y = this.pdf.internal.getFontSize(), this.pdf.setFontSize(y * t.scale)), this.pdf.text(t.text, A.x + this.posX, A.y + this.posY, { angle: t.angle, align: e, renderingMode: t.renderingMode, maxWidth: t.maxWidth }), .01 <= t.scale && this.pdf.setFontSize(y)
                        },
                        Q = function(t, e, A, n) { A = A || 0, n = n || 0, this.pdf.internal.out(r(t + A) + " " + i(e + n) + " l") },
                        F = function(t, e, A) { return this.pdf.lines(t, e, A, null, null) },
                        U = function(t, e, r, n, i, a, c, l) { this.pdf.internal.out([A(o(r + t)), A(s(n + e)), A(o(i + t)), A(s(a + e)), A(o(c + t)), A(s(l + e)), "c"].join(" ")) },
                        E = function(t, e, A, r) {
                            var n = 2 * Math.PI,
                                i = e;
                            (i < n || n < i) && (i %= n);
                            var o = A;
                            (o < n || n < o) && (o %= n);
                            for (var s = [], a = Math.PI / 2, c = r ? -1 : 1, l = e, u = Math.min(n, Math.abs(o - i)); 1e-5 < u;) {
                                var h = l + c * Math.min(u, a);
                                s.push(N.call(this, t, l, h)), u -= Math.abs(h - l), l = h
                            }
                            return s
                        },
                        N = function(t, e, A) {
                            var r = (A - e) / 2,
                                n = t * Math.cos(r),
                                i = t * Math.sin(r),
                                o = n,
                                s = -i,
                                a = o * o + s * s,
                                c = a + o * n + s * i,
                                l = 4 / 3 * (Math.sqrt(2 * a * c) - c) / (o * i - s * n),
                                u = o - l * s,
                                h = s + l * o,
                                f = u,
                                d = -h,
                                p = r + e,
                                g = Math.cos(p),
                                B = Math.sin(p);
                            return { x1: t * Math.cos(e), y1: t * Math.sin(e), x2: u * g - h * B, y2: u * B + h * g, x3: f * g - d * B, y3: f * B + d * g, x4: t * Math.cos(A), y4: t * Math.sin(A) }
                        },
                        L = function(t) { return 180 * t / Math.PI },
                        x = function(t) { return t * Math.PI / 180 },
                        _ = function(t, e, A, r, n, i) {
                            var o = t + .5 * (A - t),
                                s = e + .5 * (r - e),
                                a = n + .5 * (A - n),
                                c = i + .5 * (r - i),
                                l = Math.min(t, n, o, a),
                                u = Math.max(t, n, o, a),
                                h = Math.min(e, i, s, c),
                                f = Math.max(e, i, s, c);
                            return new I(l, h, u - l, f - h)
                        },
                        H = function(t, e, A, r, n, i, o, s) { for (var a, c, l, u, h, f, d, p, g, B, w, m, y, v = A - t, b = r - e, C = n - A, Q = i - r, F = o - n, U = s - i, E = 0; E < 41; E++) p = (f = (c = t + (a = E / 40) * v) + a * ((u = A + a * C) - c)) + a * (u + a * (n + a * F - u) - f), g = (d = (l = e + a * b) + a * ((h = r + a * Q) - l)) + a * (h + a * (i + a * U - h) - d), y = 0 == E ? (m = B = p, w = g) : (B = Math.min(B, p), w = Math.min(w, g), m = Math.max(m, p), Math.max(y, g)); return new I(Math.round(B), Math.round(w), Math.round(m - B), Math.round(y - w)) },
                        S = function(t, e) {
                            var A = t || 0;
                            Object.defineProperty(this, "x", { enumerable: !0, get: function() { return A }, set: function(t) { isNaN(t) || (A = parseFloat(t)) } });
                            var r = e || 0;
                            Object.defineProperty(this, "y", { enumerable: !0, get: function() { return r }, set: function(t) { isNaN(t) || (r = parseFloat(t)) } });
                            var n = "pt";
                            return Object.defineProperty(this, "type", { enumerable: !0, get: function() { return n }, set: function(t) { n = t.toString() } }), this
                        },
                        I = function(t, e, A, r) {
                            S.call(this, t, e), this.type = "rect";
                            var n = A || 0;
                            Object.defineProperty(this, "w", { enumerable: !0, get: function() { return n }, set: function(t) { isNaN(t) || (n = parseFloat(t)) } });
                            var i = r || 0;
                            return Object.defineProperty(this, "h", { enumerable: !0, get: function() { return i }, set: function(t) { isNaN(t) || (i = parseFloat(t)) } }), this
                        },
                        T = function(t, e, A, r, n, i) { var o = []; return Object.defineProperty(this, "sx", { get: function() { return o[0] }, set: function(t) { o[0] = Math.round(1e5 * t) / 1e5 } }), Object.defineProperty(this, "shy", { get: function() { return o[1] }, set: function(t) { o[1] = Math.round(1e5 * t) / 1e5 } }), Object.defineProperty(this, "shx", { get: function() { return o[2] }, set: function(t) { o[2] = Math.round(1e5 * t) / 1e5 } }), Object.defineProperty(this, "sy", { get: function() { return o[3] }, set: function(t) { o[3] = Math.round(1e5 * t) / 1e5 } }), Object.defineProperty(this, "tx", { get: function() { return o[4] }, set: function(t) { o[4] = Math.round(1e5 * t) / 1e5 } }), Object.defineProperty(this, "ty", { get: function() { return o[5] }, set: function(t) { o[5] = Math.round(1e5 * t) / 1e5 } }), Object.defineProperty(this, "rotation", { get: function() { return Math.atan2(this.shx, this.sx) } }), Object.defineProperty(this, "scaleX", { get: function() { return this.decompose().scale.sx } }), Object.defineProperty(this, "scaleY", { get: function() { return this.decompose().scale.sy } }), Object.defineProperty(this, "isIdentity", { get: function() { return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty } }), this.sx = isNaN(t) ? 1 : t, this.shy = isNaN(e) ? 0 : e, this.shx = isNaN(A) ? 0 : A, this.sy = isNaN(r) ? 1 : r, this.tx = isNaN(n) ? 0 : n, this.ty = isNaN(i) ? 0 : i, this };
                    T.prototype.multiply = function(t) {
                        var e = t.sx * this.sx + t.shy * this.shx,
                            A = t.sx * this.shy + t.shy * this.sy,
                            r = t.shx * this.sx + t.sy * this.shx,
                            n = t.shx * this.shy + t.sy * this.sy,
                            i = t.tx * this.sx + t.ty * this.shx + this.tx,
                            o = t.tx * this.shy + t.ty * this.sy + this.ty;
                        return new T(e, A, r, n, i, o)
                    }, T.prototype.decompose = function() {
                        var t = this.sx,
                            e = this.shy,
                            A = this.shx,
                            r = this.sy,
                            n = this.tx,
                            i = this.ty,
                            o = Math.sqrt(t * t + e * e),
                            s = (t /= o) * A + (e /= o) * r;
                        A -= t * s, r -= e * s;
                        var a = Math.sqrt(A * A + r * r);
                        return s /= a, t * (r /= a) < e * (A /= a) && (t = -t, e = -e, s = -s, o = -o), { scale: new T(o, 0, 0, a, 0, 0), translate: new T(1, 0, 0, 1, n, i), rotate: new T(t, e, -e, t, 0, 0), skew: new T(1, 0, s, 1, 0, 0) }
                    }, T.prototype.applyToPoint = function(t) {
                        var e = t.x * this.sx + t.y * this.shx + this.tx,
                            A = t.x * this.shy + t.y * this.sy + this.ty;
                        return new S(e, A)
                    }, T.prototype.applyToRectangle = function(t) {
                        var e = this.applyToPoint(t),
                            A = this.applyToPoint(new S(t.x + t.w, t.y + t.h));
                        return new I(e.x, e.y, A.x - e.x, A.y - e.y)
                    }, T.prototype.clone = function() {
                        var t = this.sx,
                            e = this.shy,
                            A = this.shx,
                            r = this.sy,
                            n = this.tx,
                            i = this.ty;
                        return new T(t, e, A, r, n, i)
                    }
                }(dt.API, "undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")()), g = dt.API, B = function(t) { var e, A, r, n, i, o, s, a, c, l; for (/[^\x00-\xFF]/.test(t), A = [], r = 0, n = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length; r < n; r += 4) 0 !== (i = (t.charCodeAt(r) << 24) + (t.charCodeAt(r + 1) << 16) + (t.charCodeAt(r + 2) << 8) + t.charCodeAt(r + 3)) ? (o = (i = ((i = ((i = ((i = (i - (l = i % 85)) / 85) - (c = i % 85)) / 85) - (a = i % 85)) / 85) - (s = i % 85)) / 85) % 85, A.push(o + 33, s + 33, a + 33, c + 33, l + 33)) : A.push(122); return function(t, A) { for (var r = e.length; 0 < r; r--) t.pop() }(A), String.fromCharCode.apply(String, A) + "~>" }, w = function(t) {
                    var e, A, r, n, i, o = String,
                        s = "length",
                        a = "charCodeAt",
                        c = "slice",
                        l = "replace";
                    for (t[c](-2), t = t[c](0, -2)[l](/\s/g, "")[l]("z", "!!!!!"), r = [], n = 0, i = (t += e = "uuuuu" [c](t[s] % 5 || 5))[s]; n < i; n += 5) A = 52200625 * (t[a](n) - 33) + 614125 * (t[a](n + 1) - 33) + 7225 * (t[a](n + 2) - 33) + 85 * (t[a](n + 3) - 33) + (t[a](n + 4) - 33), r.push(255 & A >> 24, 255 & A >> 16, 255 & A >> 8, 255 & A);
                    return function(t, A) { for (var r = e[s]; 0 < r; r--) t.pop() }(r), o.fromCharCode.apply(o, r)
                }, m = function(t) { for (var e = "", A = 0; A < t.length; A += 1) e += ("0" + t.charCodeAt(A).toString(16)).slice(-2); return e += ">" }, y = function(t) { var e = new RegExp(/^([0-9A-Fa-f]{2})+$/); if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))), t.length % 2 && (t += "0"), !1 === e.test(t)) return ""; for (var A = "", r = 0; r < t.length; r += 2) A += String.fromCharCode("0x" + (t[r] + t[r + 1])); return A }, v = function(t, e) { e = Object.assign({ predictor: 1, colors: 1, bitsPerComponent: 8, columns: 1 }, e); for (var A, r, n = [], i = t.length; i--;) n[i] = t.charCodeAt(i); return A = g.adler32cs.from(t), (r = new Deflater(6)).append(new Uint8Array(n)), t = r.flush(), (n = new Uint8Array(t.length + 6)).set(new Uint8Array([120, 156])), n.set(t, 2), n.set(new Uint8Array([255 & A, A >> 8 & 255, A >> 16 & 255, A >> 24 & 255]), t.length + 2), t = String.fromCharCode.apply(null, n) }, g.processDataByFilters = function(t, e) {
                    var A = 0,
                        r = t || "",
                        n = [];
                    for ("string" == typeof(e = e || []) && (e = [e]), A = 0; A < e.length; A += 1) switch (e[A]) {
                        case "ASCII85Decode":
                        case "/ASCII85Decode":
                            r = w(r), n.push("/ASCII85Encode");
                            break;
                        case "ASCII85Encode":
                        case "/ASCII85Encode":
                            r = B(r), n.push("/ASCII85Decode");
                            break;
                        case "ASCIIHexDecode":
                        case "/ASCIIHexDecode":
                            r = y(r), n.push("/ASCIIHexEncode");
                            break;
                        case "ASCIIHexEncode":
                        case "/ASCIIHexEncode":
                            r = m(r), n.push("/ASCIIHexDecode");
                            break;
                        case "FlateEncode":
                        case "/FlateEncode":
                            r = v(r), n.push("/FlateDecode");
                            break;
                        default:
                            throw 'The filter: "' + e[A] + '" is not implemented'
                    }
                    return { data: r, reverseChain: n.reverse().join(" ") }
                }, (b = dt.API).loadFile = function(t, e, A) {
                    var r;
                    e = e || !0, A = A || function() {};
                    try {
                        r = function(t, e, A) {
                            var r = new XMLHttpRequest,
                                n = [],
                                i = 0,
                                o = function(t) {
                                    var e = t.length,
                                        A = String.fromCharCode;
                                    for (i = 0; i < e; i += 1) n.push(A(255 & t.charCodeAt(i)));
                                    return n.join("")
                                };
                            if (r.open("GET", t, !e), r.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e && (r.onload = function() { return o(this.responseText) }), r.send(null), 200 === r.status) return e ? o(r.responseText) : void 0;
                            console.warn('Unable to load file "' + t + '"')
                        }(t, e)
                    } catch (t) { r = void 0 }
                    return r
                }, b.loadImageFile = b.loadFile, C = dt.API, Q = "undefined" != typeof window && window || void 0 !== r && r, F = function(t) { var e = n(t); return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown" }, U = function(t, e) { var A = document.createElement(t); if (e.className && (A.className = e.className), e.innerHTML) { A.innerHTML = e.innerHTML; for (var r = A.getElementsByTagName("script"), n = r.length; 0 < n--; null) r[n].parentNode.removeChild(r[n]) } for (var i in e.style) A.style[i] = e.style[i]; return A }, (((E = function t(e) {
                    var A = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))),
                        r = t.convert(Promise.resolve(), A);
                    return r = (r = r.setProgress(1, t, 1, [t])).set(e)
                }).prototype = Object.create(Promise.prototype)).constructor = E).convert = function(t, e) { return t.__proto__ = e || E.prototype, t }, E.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {} }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {} } }, E.prototype.from = function(t, e) {
                    return this.then(function() {
                        switch (e = e || function(t) {
                            switch (F(t)) {
                                case "string":
                                    return "string";
                                case "element":
                                    return "canvas" === t.nodeName.toLowerCase ? "canvas" : "element";
                                default:
                                    return "unknown"
                            }
                        }(t)) {
                            case "string":
                                return this.set({ src: U("div", { innerHTML: t }) });
                            case "element":
                                return this.set({ src: t });
                            case "canvas":
                                return this.set({ canvas: t });
                            case "img":
                                return this.set({ img: t });
                            default:
                                return this.error("Unknown source type.")
                        }
                    })
                }, E.prototype.to = function(t) {
                    switch (t) {
                        case "container":
                            return this.toContainer();
                        case "canvas":
                            return this.toCanvas();
                        case "img":
                            return this.toImg();
                        case "pdf":
                            return this.toPdf();
                        default:
                            return this.error("Invalid target.")
                    }
                }, E.prototype.toContainer = function() {
                    return this.thenList([function() { return this.prop.src || this.error("Cannot duplicate - no source HTML.") }, function() { return this.prop.pageSize || this.setPageSize() }]).then(function() {
                        var t = { position: "relative", display: "inline-block", width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: "white" },
                            e = function t(e, A) { for (var r = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), n = e.firstChild; n; n = n.nextSibling) !0 !== A && 1 === n.nodeType && "SCRIPT" === n.nodeName || r.appendChild(t(n, A)); return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (r.width = e.width, r.height = e.height, r.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (r.value = e.value), r.addEventListener("load", function() { r.scrollTop = e.scrollTop, r.scrollLeft = e.scrollLeft }, !0)), r }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                        "BODY" === e.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = U("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = U("div", { className: "html2pdf__container", style: t }), this.prop.container.appendChild(e), this.prop.container.firstChild.appendChild(U("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
                    })
                }, E.prototype.toCanvas = function() {
                    var t = [function() { return document.body.contains(this.prop.container) || this.toContainer() }];
                    return this.thenList(t).then(function() { var t = Object.assign({}, this.opt.html2canvas); if (delete t.onrendered, this.isHtml2CanvasLoaded()) return html2canvas(this.prop.container, t) }).then(function(t) {
                        (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay)
                    })
                }, E.prototype.toContext2d = function() {
                    var t = [function() { return document.body.contains(this.prop.container) || this.toContainer() }];
                    return this.thenList(t).then(function() {
                        var t = this.opt.jsPDF,
                            e = Object.assign({ async: !0, allowTaint: !0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
                        if (delete e.onrendered, t.context2d.autoPaging = !0, t.context2d.posX = this.opt.x, t.context2d.posY = this.opt.y, e.windowHeight = e.windowHeight || 0, e.windowHeight = 0 == e.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : e.windowHeight, this.isHtml2CanvasLoaded()) return html2canvas(this.prop.container, e)
                    }).then(function(t) {
                        (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay)
                    })
                }, E.prototype.toImg = function() {
                    return this.thenList([function() { return this.prop.canvas || this.toCanvas() }]).then(function() {
                        var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
                        this.prop.img = document.createElement("img"), this.prop.img.src = t
                    })
                }, E.prototype.toPdf = function() { return this.thenList([function() { return this.toContext2d() }]).then(function() { this.prop.pdf = this.prop.pdf || this.opt.jsPDF }) }, E.prototype.output = function(t, e, A) { return "img" === (A = A || "pdf").toLowerCase() || "image" === A.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e) }, E.prototype.outputPdf = function(t, e) { return this.thenList([function() { return this.prop.pdf || this.toPdf() }]).then(function() { return this.prop.pdf.output(t, e) }) }, E.prototype.outputImg = function(t, e) {
                    return this.thenList([function() { return this.prop.img || this.toImg() }]).then(function() {
                        switch (t) {
                            case void 0:
                            case "img":
                                return this.prop.img;
                            case "datauristring":
                            case "dataurlstring":
                                return this.prop.img.src;
                            case "datauri":
                            case "dataurl":
                                return document.location.href = this.prop.img.src;
                            default:
                                throw 'Image output type "' + t + '" is not supported.'
                        }
                    })
                }, E.prototype.isHtml2CanvasLoaded = function() { var t = void 0 !== Q.html2canvas; return t || console.error("html2canvas not loaded."), t }, E.prototype.save = function(t) { if (this.isHtml2CanvasLoaded()) return this.thenList([function() { return this.prop.pdf || this.toPdf() }]).set(t ? { filename: t } : null).then(function() { this.prop.pdf.save(this.opt.filename) }) }, E.prototype.doCallback = function(t) { if (this.isHtml2CanvasLoaded()) return this.thenList([function() { return this.prop.pdf || this.toPdf() }]).then(function() { this.prop.callback(this.prop.pdf) }) }, E.prototype.set = function(t) {
                    if ("object" !== F(t)) return this;
                    var e = Object.keys(t || {}).map(function(e) {
                        if (e in E.template.prop) return function() { this.prop[e] = t[e] };
                        switch (e) {
                            case "margin":
                                return this.setMargin.bind(this, t.margin);
                            case "jsPDF":
                                return function() { return this.opt.jsPDF = t.jsPDF, this.setPageSize() };
                            case "pageSize":
                                return this.setPageSize.bind(this, t.pageSize);
                            default:
                                return function() { this.opt[e] = t[e] }
                        }
                    }, this);
                    return this.then(function() { return this.thenList(e) })
                }, E.prototype.get = function(t, e) { return this.then(function() { var A = t in E.template.prop ? this.prop[t] : this.opt[t]; return e ? e(A) : A }) }, E.prototype.setMargin = function(t) {
                    return this.then(function() {
                        switch (F(t)) {
                            case "number":
                                t = [t, t, t, t];
                            case "array":
                                if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]), 4 === t.length) break;
                            default:
                                return this.error("Invalid margin array.")
                        }
                        this.opt.margin = t
                    }).then(this.setPageSize)
                }, E.prototype.setPageSize = function(t) {
                    function e(t, e) { return Math.floor(t * e / 72 * 96) }
                    return this.then(function() {
                        (t = t || dt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = { width: t.width - this.opt.margin[1] - this.opt.margin[3], height: t.height - this.opt.margin[0] - this.opt.margin[2] }, t.inner.px = { width: e(t.inner.width, t.k), height: e(t.inner.height, t.k) }, t.inner.ratio = t.inner.height / t.inner.width), this.prop.pageSize = t
                    })
                }, E.prototype.setProgress = function(t, e, A, r) { return null != t && (this.progress.val = t), null != e && (this.progress.state = e), null != A && (this.progress.n = A), null != r && (this.progress.stack = r), this.progress.ratio = this.progress.val / this.progress.state, this }, E.prototype.updateProgress = function(t, e, A, r) { return this.setProgress(t ? this.progress.val + t : null, e || null, A ? this.progress.n + A : null, r ? this.progress.stack.concat(r) : null) }, E.prototype.then = function(t, e) { var A = this; return this.thenCore(t, e, function(t, e) { return A.updateProgress(null, null, 1, [t]), Promise.prototype.then.call(this, function(e) { return A.updateProgress(null, t), e }).then(t, e).then(function(t) { return A.updateProgress(1), t }) }) }, E.prototype.thenCore = function(t, e, A) {
                    A = A || Promise.prototype.then;
                    var r = this;
                    t && (t = t.bind(r)), e && (e = e.bind(r));
                    var n = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? r : E.convert(Object.assign({}, r), Promise.prototype),
                        i = A.call(n, t, e);
                    return E.convert(i, r.__proto__)
                }, E.prototype.thenExternal = function(t, e) { return Promise.prototype.then.call(this, t, e) }, E.prototype.thenList = function(t) { var e = this; return t.forEach(function(t) { e = e.thenCore(t) }), e }, E.prototype.catch = function(t) { t && (t = t.bind(this)); var e = Promise.prototype.catch.call(this, t); return E.convert(e, this) }, E.prototype.catchExternal = function(t) { return Promise.prototype.catch.call(this, t) }, E.prototype.error = function(t) { return this.then(function() { throw new Error(t) }) }, E.prototype.using = E.prototype.set, E.prototype.saveAs = E.prototype.save, E.prototype.export = E.prototype.output, E.prototype.run = E.prototype.then, dt.getPageSize = function(t, e, A) {
                    if ("object" === n(t)) {
                        var r = t;
                        t = r.orientation, e = r.unit || e, A = r.format || A
                    }
                    e = e || "mm", A = A || "a4", t = ("" + (t || "P")).toLowerCase();
                    var i = ("" + A).toLowerCase(),
                        o = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
                    switch (e) {
                        case "pt":
                            var s = 1;
                            break;
                        case "mm":
                            s = 72 / 25.4;
                            break;
                        case "cm":
                            s = 72 / 2.54;
                            break;
                        case "in":
                            s = 72;
                            break;
                        case "px":
                            s = .75;
                            break;
                        case "pc":
                        case "em":
                            s = 12;
                            break;
                        case "ex":
                            s = 6;
                            break;
                        default:
                            throw "Invalid unit: " + e
                    }
                    if (o.hasOwnProperty(i)) var a = o[i][1] / s,
                        c = o[i][0] / s;
                    else try { a = A[1], c = A[0] } catch (t) { throw new Error("Invalid format: " + A) }
                    if ("p" === t || "portrait" === t) {
                        if (t = "p", a < c) {
                            var l = c;
                            c = a, a = l
                        }
                    } else {
                        if ("l" !== t && "landscape" !== t) throw "Invalid orientation: " + t;
                        t = "l", c < a && (l = c, c = a, a = l)
                    }
                    return { width: c, height: a, unit: e, k: s }
                }, C.html = function(t, e) {
                    (e = e || {}).callback = e.callback || function() {}, e.html2canvas = e.html2canvas || {}, e.html2canvas.canvas = e.html2canvas.canvas || this.canvas, e.jsPDF = e.jsPDF || this, e.jsPDF;
                    var A = new E(e);
                    return e.worker ? A : A.from(t).doCallback()
                }, dt.API.addJS = function(t) { return x = t, this.internal.events.subscribe("postPutResources", function(t) { N = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (N + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), L = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + x + ")"), this.internal.out(">>"), this.internal.out("endobj") }), this.internal.events.subscribe("putCatalog", function() { void 0 !== N && void 0 !== L && this.internal.out("/Names <</JavaScript " + N + " 0 R>>") }), this },
                /**
                 * @license
                 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
                 *
                 * Licensed under the MIT License.
                 * http://opensource.org/licenses/mit-license
                 */
                (_ = dt.API).events.push(["postPutResources", function() {
                    var t = this,
                        e = /^(\d+) 0 obj$/;
                    if (0 < this.outline.root.children.length)
                        for (var A = t.outline.render().split(/\r\n/), r = 0; r < A.length; r++) {
                            var n = A[r],
                                i = e.exec(n);
                            if (null != i) {
                                var o = i[1];
                                t.internal.newObjectDeferredBegin(o, !1)
                            }
                            t.internal.write(n)
                        }
                    if (this.outline.createNamedDestinations) {
                        var s = this.internal.pages.length,
                            a = [];
                        for (r = 0; r < s; r++) {
                            var c = t.internal.newObject();
                            a.push(c);
                            var l = t.internal.getPageInfo(r + 1);
                            t.internal.write("<< /D[" + l.objId + " 0 R /XYZ null null null]>> endobj")
                        }
                        var u = t.internal.newObject();
                        for (t.internal.write("<< /Names [ "), r = 0; r < a.length; r++) t.internal.write("(page_" + (r + 1) + ")" + a[r] + " 0 R");
                        t.internal.write(" ] >>", "endobj"), t.internal.newObject(), t.internal.write("<< /Dests " + u + " 0 R"), t.internal.write(">>", "endobj")
                    }
                }]), _.events.push(["putCatalog", function() { 0 < this.outline.root.children.length && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + namesOid + " 0 R")) }]), _.events.push(["initialized", function() {
                    var t = this;
                    t.outline = { createNamedDestinations: !1, root: { children: [] } }, t.outline.add = function(t, e, A) { var r = { title: e, options: A, children: [] }; return null == t && (t = this.root), t.children.push(r), r }, t.outline.render = function() { return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val }, t.outline.genIds_r = function(e) { e.id = t.internal.newObjectDeferred(); for (var A = 0; A < e.children.length; A++) this.genIds_r(e.children[A]) }, t.outline.renderRoot = function(t) { this.objStart(t), this.line("/Type /Outlines"), 0 < t.children.length && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, t)), this.objEnd() }, t.outline.renderItems = function(e) {
                        this.ctx.pdf.internal.getCoordinateString;
                        for (var A = this.ctx.pdf.internal.getVerticalCoordinateString, r = 0; r < e.children.length; r++) {
                            var n = e.children[r];
                            this.objStart(n), this.line("/Title " + this.makeString(n.title)), this.line("/Parent " + this.makeRef(e)), 0 < r && this.line("/Prev " + this.makeRef(e.children[r - 1])), r < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[r + 1])), 0 < n.children.length && (this.line("/First " + this.makeRef(n.children[0])), this.line("/Last " + this.makeRef(n.children[n.children.length - 1])));
                            var i = this.count = this.count_r({ count: 0 }, n);
                            if (0 < i && this.line("/Count " + i), n.options && n.options.pageNumber) {
                                var o = t.internal.getPageInfo(n.options.pageNumber);
                                this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + A(0) + " 0]")
                            }
                            this.objEnd()
                        }
                        for (r = 0; r < e.children.length; r++) n = e.children[r], this.renderItems(n)
                    }, t.outline.line = function(t) { this.ctx.val += t + "\r\n" }, t.outline.makeRef = function(t) { return t.id + " 0 R" }, t.outline.makeString = function(e) { return "(" + t.internal.pdfEscape(e) + ")" }, t.outline.objStart = function(t) { this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n" }, t.outline.objEnd = function(t) { this.ctx.val += ">> \r\nendobj\r\n" }, t.outline.count_r = function(t, e) { for (var A = 0; A < e.children.length; A++) t.count++, this.count_r(t, e.children[A]); return t.count }
                }]),
                /**
                 * @license
                 * 
                 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
                 *
                 * 
                 * ====================================================================
                 */
                H = dt.API, S = function() { var t = "function" == typeof Deflater; if (!t) throw new Error("requires deflate.js for compression"); return t }, I = function(t, e, A, r) {
                    var n = 5,
                        i = K;
                    switch (r) {
                        case H.image_compression.FAST:
                            n = 3, i = P;
                            break;
                        case H.image_compression.MEDIUM:
                            n = 6, i = D;
                            break;
                        case H.image_compression.SLOW:
                            n = 9, i = k
                    }
                    t = O(t, e, A, i);
                    var o = new Uint8Array(T(n)),
                        s = R(t),
                        a = new Deflater(n),
                        c = a.append(t),
                        l = a.flush(),
                        u = o.length + c.length + l.length,
                        h = new Uint8Array(u + 4);
                    return h.set(o), h.set(c, o.length), h.set(l, o.length + c.length), h[u++] = s >>> 24 & 255, h[u++] = s >>> 16 & 255, h[u++] = s >>> 8 & 255, h[u++] = 255 & s, H.arrayBufferToBinaryString(h)
                }, T = function(t, e) {
                    var A = Math.LOG2E * Math.log(32768) - 8 << 4 | 8,
                        r = A << 8;
                    return r |= Math.min(3, (e - 1 & 255) >> 1) << 6, r |= 0, [A, 255 & (r += 31 - r % 31)]
                }, R = function(t, e) {
                    for (var A, r = 1, n = 0, i = t.length, o = 0; 0 < i;) {
                        for (i -= A = e < i ? e : i; n += r += t[o++], --A;);
                        r %= 65521, n %= 65521
                    }
                    return (n << 16 | r) >>> 0
                }, O = function(t, e, A, r) {
                    for (var n, i, o, s = t.length / e, a = new Uint8Array(t.length + s), c = j(), l = 0; l < s; l++) {
                        if (o = l * e, n = t.subarray(o, o + e), r) a.set(r(n, A, i), o + l);
                        else {
                            for (var u = 0, h = c.length, f = []; u < h; u++) f[u] = c[u](n, A, i);
                            var d = q(f.concat());
                            a.set(f[d], o + l)
                        }
                        i = n
                    }
                    return a
                }, M = function(t, e, A) { var r = Array.apply([], t); return r.unshift(0), r }, P = function(t, e, A) {
                    var r, n = [],
                        i = 0,
                        o = t.length;
                    for (n[0] = 1; i < o; i++) r = t[i - e] || 0, n[i + 1] = t[i] - r + 256 & 255;
                    return n
                }, K = function(t, e, A) {
                    var r, n = [],
                        i = 0,
                        o = t.length;
                    for (n[0] = 2; i < o; i++) r = A && A[i] || 0, n[i + 1] = t[i] - r + 256 & 255;
                    return n
                }, D = function(t, e, A) {
                    var r, n, i = [],
                        o = 0,
                        s = t.length;
                    for (i[0] = 3; o < s; o++) r = t[o - e] || 0, n = A && A[o] || 0, i[o + 1] = t[o] + 256 - (r + n >>> 1) & 255;
                    return i
                }, k = function(t, e, A) {
                    var r, n, i, o, s = [],
                        a = 0,
                        c = t.length;
                    for (s[0] = 4; a < c; a++) r = t[a - e] || 0, n = A && A[a] || 0, i = A && A[a - e] || 0, o = z(r, n, i), s[a + 1] = t[a] - o + 256 & 255;
                    return s
                }, z = function(t, e, A) {
                    var r = t + e - A,
                        n = Math.abs(r - t),
                        i = Math.abs(r - e),
                        o = Math.abs(r - A);
                    return n <= i && n <= o ? t : i <= o ? e : A
                }, j = function() { return [M, P, K, D, k] }, q = function(t) { for (var e, A, r, n = 0, i = t.length; n < i;)((e = V(t[n].slice(1))) < A || !A) && (A = e, r = n), n++; return r }, V = function(t) { for (var e = 0, A = t.length, r = 0; e < A;) r += Math.abs(t[e++]); return r }, H.processPNG = function(t, e, A, r, n) {
                    var i, o, s, a, c, l, u = this.color_spaces.DEVICE_RGB,
                        h = this.decode.FLATE_DECODE,
                        f = 8;
                    if (this.isArrayBuffer(t) && (t = new Uint8Array(t)), this.isArrayBufferView(t)) {
                        if ("function" != typeof PNG || "function" != typeof Rt) throw new Error("PNG support requires png.js and zlib.js");
                        if (t = (i = new PNG(t)).imgData, f = i.bits, u = i.colorSpace, a = i.colors, -1 !== [4, 6].indexOf(i.colorType)) {
                            if (8 === i.bits)
                                for (var d, p = (U = 32 == i.pixelBitlength ? new Uint32Array(i.decodePixels().buffer) : 16 == i.pixelBitlength ? new Uint16Array(i.decodePixels().buffer) : new Uint8Array(i.decodePixels().buffer)).length, g = new Uint8Array(p * i.colors), B = new Uint8Array(p), w = i.pixelBitlength - i.bits, m = 0, y = 0; m < p; m++) {
                                    for (v = U[m], d = 0; d < w;) g[y++] = v >>> d & 255, d += i.bits;
                                    B[m] = v >>> d & 255
                                }
                            if (16 === i.bits) {
                                p = (U = new Uint32Array(i.decodePixels().buffer)).length, g = new Uint8Array(p * (32 / i.pixelBitlength) * i.colors), B = new Uint8Array(p * (32 / i.pixelBitlength));
                                for (var v, b = 1 < i.colors, C = y = m = 0; m < p;) v = U[m++], g[y++] = v >>> 0 & 255, b && (g[y++] = v >>> 16 & 255, v = U[m++], g[y++] = v >>> 0 & 255), B[C++] = v >>> 16 & 255;
                                f = 8
                            }
                            r !== H.image_compression.NONE && S() ? (t = I(g, i.width * i.colors, i.colors, r), l = I(B, i.width, 1, r)) : (t = g, l = B, h = null)
                        }
                        if (3 === i.colorType && (u = this.color_spaces.INDEXED, c = i.palette, i.transparency.indexed)) {
                            var Q = i.transparency.indexed,
                                F = 0;
                            for (m = 0, p = Q.length; m < p; ++m) F += Q[m];
                            if ((F /= 255) == p - 1 && -1 !== Q.indexOf(0)) s = [Q.indexOf(0)];
                            else if (F !== p) {
                                var U = i.decodePixels();
                                for (B = new Uint8Array(U.length), m = 0, p = U.length; m < p; m++) B[m] = Q[U[m]];
                                l = I(B, i.width, 1)
                            }
                        }
                        var E = function(t) {
                            var e;
                            switch (t) {
                                case H.image_compression.FAST:
                                    e = 11;
                                    break;
                                case H.image_compression.MEDIUM:
                                    e = 13;
                                    break;
                                case H.image_compression.SLOW:
                                    e = 14;
                                    break;
                                default:
                                    e = 12
                            }
                            return e
                        }(r);
                        return o = h === this.decode.FLATE_DECODE ? "/Predictor " + E + " /Colors " + a + " /BitsPerComponent " + f + " /Columns " + i.width : "/Colors " + a + " /BitsPerComponent " + f + " /Columns " + i.width, (this.isArrayBuffer(t) || this.isArrayBufferView(t)) && (t = this.arrayBufferToBinaryString(t)), (l && this.isArrayBuffer(l) || this.isArrayBufferView(l)) && (l = this.arrayBufferToBinaryString(l)), this.createImageInfo(t, i.width, i.height, u, f, h, e, A, o, s, c, l, E)
                    }
                    throw new Error("Unsupported PNG image data, try using JPEG instead.")
                },
                /**
                 * @license
                 * Copyright (c) 2017 Aras Abbasi 
                 *
                 * Licensed under the MIT License.
                 * http://opensource.org/licenses/mit-license
                 */
                (X = dt.API).processGIF89A = function(t, e, A, r, n) {
                    var i = new _t(t),
                        o = i.width,
                        s = i.height,
                        a = [];
                    i.decodeAndBlitFrameRGBA(0, a);
                    var c = { data: a, width: o, height: s },
                        l = new St(100).encode(c, 100);
                    return X.processJPEG.call(this, l, e, A, r)
                }, X.processGIF87A = X.processGIF89A, (G = dt.API).processBMP = function(t, e, A, r, n) {
                    var i = new It(t, !1),
                        o = i.width,
                        s = i.height,
                        a = { data: i.getData(), width: o, height: s },
                        c = new St(100).encode(a, 100);
                    return G.processJPEG.call(this, c, e, A, r)
                }, dt.API.setLanguage = function(t) {
                    return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "FYRO Macedonian", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[t] && (this.internal.languageSettings.languageCode = t, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() { this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")") }), this.internal.languageSettings.isSubscribed = !0)), this
                        /** @license
                         * MIT license.
                         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
                         *               2014 Diego Casorran, https://github.com/diegocr
                         *
                         * 
                         * ====================================================================
                         */
                }, J = dt.API, W = J.getCharWidthsArray = function(t, e) {
                    var A, r, n, i = (e = e || {}).font || this.internal.getFont(),
                        o = e.fontSize || this.internal.getFontSize(),
                        s = e.charSpace || this.internal.getCharSpace(),
                        a = e.widths ? e.widths : i.metadata.Unicode.widths,
                        c = a.fof ? a.fof : 1,
                        l = e.kerning ? e.kerning : i.metadata.Unicode.kerning,
                        u = l.fof ? l.fof : 1,
                        h = 0,
                        f = a[0] || c,
                        d = [];
                    for (A = 0, r = t.length; A < r; A++) n = t.charCodeAt(A), "function" == typeof i.metadata.widthOfString ? d.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(n)) + s * (1e3 / o) || 0) / 1e3) : d.push((a[n] || f) / c + (l[n] && l[n][h] || 0) / u), h = n;
                    return d
                }, Y = J.getArraySum = function(t) { for (var e = t.length, A = 0; e;) A += t[--e]; return A }, Z = J.getStringUnitWidth = function(t, e) {
                    var A = (e = e || {}).fontSize || this.internal.getFontSize(),
                        r = e.font || this.internal.getFont(),
                        n = e.charSpace || this.internal.getCharSpace();
                    return "function" == typeof r.metadata.widthOfString ? r.metadata.widthOfString(t, A, n) / A : Y(W.apply(this, arguments))
                }, $ = function(t, e, A, r) {
                    for (var n = [], i = 0, o = t.length, s = 0; i !== o && s + e[i] < A;) s += e[i], i++;
                    n.push(t.slice(0, i));
                    var a = i;
                    for (s = 0; i !== o;) s + e[i] > r && (n.push(t.slice(a, i)), s = 0, a = i), s += e[i], i++;
                    return a !== i && n.push(t.slice(a, i)), n
                }, tt = function(t, e, A) {
                    A || (A = {});
                    var r, n, i, o, s, a, c = [],
                        l = [c],
                        u = A.textIndent || 0,
                        h = 0,
                        f = 0,
                        d = t.split(" "),
                        p = W.apply(this, [" ", A])[0];
                    if (a = -1 === A.lineIndent ? d[0].length + 2 : A.lineIndent || 0) {
                        var g = Array(a).join(" "),
                            B = [];
                        d.map(function(t) { 1 < (t = t.split(/\s*\n/)).length ? B = B.concat(t.map(function(t, e) { return (e && t.length ? "\n" : "") + t })) : B.push(t[0]) }), d = B, a = Z.apply(this, [g, A])
                    }
                    for (i = 0, o = d.length; i < o; i++) {
                        var w = 0;
                        if (r = d[i], a && "\n" == r[0] && (r = r.substr(1), w = 1), n = W.apply(this, [r, A]), e < u + h + (f = Y(n)) || w) {
                            if (e < f) {
                                for (s = $.apply(this, [r, n, e - (u + h), e]), c.push(s.shift()), c = [s.pop()]; s.length;) l.push([s.shift()]);
                                f = Y(n.slice(r.length - (c[0] ? c[0].length : 0)))
                            } else c = [r];
                            l.push(c), u = f + a, h = p
                        } else c.push(r), u += h + f, h = p
                    }
                    if (a) var m = function(t, e) { return (e ? g : "") + t.join(" ") };
                    else m = function(t) { return t.join(" ") };
                    return l.map(m)
                }, J.splitTextToSize = function(t, e, A) {
                    var r, n = (A = A || {}).fontSize || this.internal.getFontSize(),
                        i = function(t) {
                            if (t.widths && t.kerning) return { widths: t.widths, kerning: t.kerning };
                            var e = this.internal.getFont(t.fontName, t.fontStyle),
                                A = "Unicode";
                            return e.metadata[A] ? { widths: e.metadata[A].widths || { 0: 1 }, kerning: e.metadata[A].kerning || {} } : { font: e.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() }
                        }.call(this, A);
                    r = Array.isArray(t) ? t : t.split(/\r?\n/);
                    var o = 1 * this.internal.scaleFactor * e / n;
                    i.textIndent = A.textIndent ? 1 * A.textIndent * this.internal.scaleFactor / n : 0, i.lineIndent = A.lineIndent;
                    var s, a, c = [];
                    for (s = 0, a = r.length; s < a; s++) c = c.concat(tt.apply(this, [r[s], o, i]));
                    return c
                },
                /** @license
                   jsPDF standard_fonts_metrics plugin
                   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
                   * MIT license.
                   * 
                   * ====================================================================
                   */
                et = dt.API, rt = {
                    codePages: ["WinAnsiEncoding"],
                    WinAnsiEncoding: (At = function(t) {
                        for (var e = "klmnopqrstuvwxyz", A = {}, r = 0; r < e.length; r++) A[e[r]] = "0123456789abcdef" [r];
                        var n, i, o, s, a, c = {},
                            l = 1,
                            u = c,
                            h = [],
                            f = "",
                            d = "",
                            p = t.length - 1;
                        for (r = 1; r != p;) a = t[r], r += 1, "'" == a ? i = i ? (s = i.join(""), n) : [] : i ? i.push(a) : "{" == a ? (h.push([u, s]), u = {}, s = n) : "}" == a ? ((o = h.pop())[0][o[1]] = u, s = n, u = o[0]) : "-" == a ? l = -1 : s === n ? A.hasOwnProperty(a) ? (f += A[a], s = parseInt(f, 16) * l, l = 1, f = "") : f += a : A.hasOwnProperty(a) ? (d += A[a], u[s] = parseInt(d, 16) * l, l = 1, s = n, d = "") : d += a;
                        return c
                    })("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
                }, nt = { Unicode: { Courier: rt, "Courier-Bold": rt, "Courier-BoldOblique": rt, "Courier-Oblique": rt, Helvetica: rt, "Helvetica-Bold": rt, "Helvetica-BoldOblique": rt, "Helvetica-Oblique": rt, "Times-Roman": rt, "Times-Bold": rt, "Times-BoldItalic": rt, "Times-Italic": rt } }, it = { Unicode: { "Courier-Oblique": At("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": At("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": At("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: At("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": At("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": At("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: At("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: At("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": At("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: At("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": At("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": At("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": At("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": At("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } }, et.events.push(["addFont", function(t) {
                    var e, A, r, n = t.font,
                        i = "Unicode";
                    (e = it[i][n.postScriptName]) && ((A = n.metadata[i] ? n.metadata[i] : n.metadata[i] = {}).widths = e.widths, A.kerning = e.kerning), (r = nt[i][n.postScriptName]) && ((A = n.metadata[i] ? n.metadata[i] : n.metadata[i] = {}).encoding = r).codePages && r.codePages.length && (n.encoding = r.codePages[0])
                }]),
                /**
                 * @license
                 * Licensed under the MIT License.
                 * http://opensource.org/licenses/mit-license
                 */
                ot = dt, "undefined" != typeof self && self || void 0 !== r && r || "undefined" != typeof window && window || Function("return this")(), ot.API.events.push(["addFont", function(t) {
                    var e = t.font,
                        A = t.instance;
                    if (void 0 !== A && A.existsFileInVFS(e.postScriptName)) {
                        var r = A.getFileFromVFS(e.postScriptName);
                        if ("string" != typeof r) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + e.postScriptName + "').");
                        e.metadata = ot.API.TTFFont.open(e.postScriptName, e.fontName, r, e.encoding), e.metadata.Unicode = e.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, e.metadata.glyIdsUsed = [0]
                    } else if (!1 === e.isStandardFont) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + e.postScriptName + "').")
                }]),
                /** @license
                 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
                 * 
                 * 
                 * ====================================================================
                 */
                (st = dt.API).addSvg = function(t, e, A, r, n) {
                    if (void 0 === e || void 0 === A) throw new Error("addSVG needs values for 'x' and 'y'");

                    function i(t) { for (var e = parseFloat(t[1]), A = parseFloat(t[2]), r = [], n = 3, i = t.length; n < i;) "c" === t[n] ? (r.push([parseFloat(t[n + 1]), parseFloat(t[n + 2]), parseFloat(t[n + 3]), parseFloat(t[n + 4]), parseFloat(t[n + 5]), parseFloat(t[n + 6])]), n += 7) : "l" === t[n] ? (r.push([parseFloat(t[n + 1]), parseFloat(t[n + 2])]), n += 3) : n += 1; return [e, A, r] }
                    var o, s, a, c, l, u, h, f, d = (c = document, f = c.createElement("iframe"), l = ".jsPDF_sillysvg_iframe {display:none;position:absolute;}", (h = (u = c).createElement("style")).type = "text/css", h.styleSheet ? h.styleSheet.cssText = l : h.appendChild(u.createTextNode(l)), u.getElementsByTagName("head")[0].appendChild(h), f.name = "childframe", f.setAttribute("width", 0), f.setAttribute("height", 0), f.setAttribute("frameborder", "0"), f.setAttribute("scrolling", "no"), f.setAttribute("seamless", "seamless"), f.setAttribute("class", "jsPDF_sillysvg_iframe"), c.body.appendChild(f), f),
                        p = (o = t, (a = ((s = d).contentWindow || s.contentDocument).document).write(o), a.close(), a.getElementsByTagName("svg")[0]),
                        g = [1, 1],
                        B = parseFloat(p.getAttribute("width")),
                        w = parseFloat(p.getAttribute("height"));
                    B && w && (r && n ? g = [r / B, n / w] : r ? g = [r / B, r / B] : n && (g = [n / w, n / w]));
                    var m, y, v, b, C = p.childNodes;
                    for (m = 0, y = C.length; m < y; m++)(v = C[m]).tagName && "PATH" === v.tagName.toUpperCase() && ((b = i(v.getAttribute("d").split(" ")))[0] = b[0] * g[0] + e, b[1] = b[1] * g[1] + A, this.lines.call(this, b[2], b[0], b[1], g));
                    return this
                }, st.addSVG = st.addSvg, st.addSvgAsImage = function(t, e, A, r, n, i, o, s) {
                    if (isNaN(e) || isNaN(A)) throw console.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
                    if (isNaN(r) || isNaN(n)) throw console.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
                    var a = document.createElement("canvas");
                    a.width = r, a.height = n;
                    var c = a.getContext("2d");
                    return c.fillStyle = "#fff", c.fillRect(0, 0, a.width, a.height), canvg(a, t, { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0, ignoreClear: !0 }), this.addImage(a.toDataURL("image/jpeg", 1), e, A, r, n, o, s), this
                }, dt.API.putTotalPages = function(t) {
                    var e, A = 0;
                    A = parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t, "g"), this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g"), this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
                    for (var r = 1; r <= this.internal.getNumberOfPages(); r++)
                        for (var n = 0; n < this.internal.pages[r].length; n++) this.internal.pages[r][n] = this.internal.pages[r][n].replace(e, A);
                    return this
                }, dt.API.viewerPreferences = function(t, e) {
                    var A;
                    t = t || {}, e = e || !1;
                    var r, i, o = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } },
                        s = Object.keys(o),
                        a = [],
                        c = 0,
                        l = 0,
                        u = 0,
                        h = !0;

                    function f(t, e) { var A, r = !1; for (A = 0; A < t.length; A += 1) t[A] === e && (r = !0); return r }
                    if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o)), this.internal.viewerpreferences.isSubscribed = !1), A = this.internal.viewerpreferences.configuration, "reset" === t || !0 === e) { var d = s.length; for (u = 0; u < d; u += 1) A[s[u]].value = A[s[u]].defaultValue, A[s[u]].explicitSet = !1 }
                    if ("object" === n(t))
                        for (r in t)
                            if (i = t[r], f(s, r) && void 0 !== i) {
                                if ("boolean" === A[r].type && "boolean" == typeof i) A[r].value = i;
                                else if ("name" === A[r].type && f(A[r].valueSet, i)) A[r].value = i;
                                else if ("integer" === A[r].type && Number.isInteger(i)) A[r].value = i;
                                else if ("array" === A[r].type) {
                                    for (c = 0; c < i.length; c += 1)
                                        if (h = !0, 1 === i[c].length && "number" == typeof i[c][0]) a.push(String(i[c] - 1));
                                        else if (1 < i[c].length) { for (l = 0; l < i[c].length; l += 1) "number" != typeof i[c][l] && (h = !1);!0 === h && a.push([i[c][0] - 1, i[c][1] - 1].join(" ")) }
                                    A[r].value = "[" + a.join(" ") + "]"
                                } else A[r].value = A[r].defaultValue;
                                A[r].explicitSet = !0
                            }
                    return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
                        var t, e = [];
                        for (t in A) !0 === A[t].explicitSet && ("name" === A[t].type ? e.push("/" + t + " /" + A[t].value) : e.push("/" + t + " " + A[t].value));
                        0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>")
                    }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = A, this
                }, at = dt.API, ut = lt = ct = "", at.addMetadata = function(t, e) {
                    return lt = e || "http://jspdf.default.namespaceuri/", ct = t, this.internal.events.subscribe("postPutResources", function() {
                        if (ct) {
                            var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + lt + '"><jspdf:metadata>',
                                e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
                                A = unescape(encodeURIComponent(t)),
                                r = unescape(encodeURIComponent(ct)),
                                n = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
                                i = unescape(encodeURIComponent("</x:xmpmeta>")),
                                o = A.length + r.length + n.length + e.length + i.length;
                            ut = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"), this.internal.write("stream"), this.internal.write(e + A + r + n + i), this.internal.write("endstream"), this.internal.write("endobj")
                        } else ut = ""
                    }), this.internal.events.subscribe("putCatalog", function() { ut && this.internal.write("/Metadata " + ut + " 0 R") }), this
                },
                function(t, e) {
                    var A = t.API,
                        r = A.pdfEscape16 = function(t, e) {
                            for (var A, r = e.metadata.Unicode.widths, n = ["", "0", "00", "000", "0000"], i = [""], o = 0, s = t.length; o < s; ++o) {
                                if (A = e.metadata.characterToGlyph(t.charCodeAt(o)), e.metadata.glyIdsUsed.push(A), e.metadata.toUnicode[A] = t.charCodeAt(o), -1 == r.indexOf(A) && (r.push(A), r.push([parseInt(e.metadata.widthOfGlyph(A), 10)])), "0" == A) return i.join("");
                                A = A.toString(16), i.push(n[4 - A.length], A)
                            }
                            return i.join("")
                        },
                        n = function(t) { var e, A, r, n, i, o, s; for (i = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r = [], o = 0, s = (A = Object.keys(t).sort(function(t, e) { return t - e })).length; o < s; o++) e = A[o], 100 <= r.length && (i += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar", r = []), n = ("0000" + t[e].toString(16)).slice(-4), e = ("0000" + (+e).toString(16)).slice(-4), r.push("<" + e + "><" + n + ">"); return r.length && (i += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar\n"), i += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend" };
                    A.events.push(["putFont", function(e) {
                        ! function(e, A, r, i) {
                            if (e.metadata instanceof t.API.TTFFont && "Identity-H" === e.encoding) {
                                for (var o = e.metadata.Unicode.widths, s = e.metadata.subset.encode(e.metadata.glyIdsUsed, 1), a = "", c = 0; c < s.length; c++) a += String.fromCharCode(s[c]);
                                var l = r();
                                i({ data: a, addLength1: !0 }), A("endobj");
                                var u = r();
                                i({ data: n(e.metadata.toUnicode), addLength1: !0 }), A("endobj");
                                var h = r();
                                A("<<"), A("/Type /FontDescriptor"), A("/FontName /" + e.fontName), A("/FontFile2 " + l + " 0 R"), A("/FontBBox " + t.API.PDFObject.convert(e.metadata.bbox)), A("/Flags " + e.metadata.flags), A("/StemV " + e.metadata.stemV), A("/ItalicAngle " + e.metadata.italicAngle), A("/Ascent " + e.metadata.ascender), A("/Descent " + e.metadata.decender), A("/CapHeight " + e.metadata.capHeight), A(">>"), A("endobj");
                                var f = r();
                                A("<<"), A("/Type /Font"), A("/BaseFont /" + e.fontName), A("/FontDescriptor " + h + " 0 R"), A("/W " + t.API.PDFObject.convert(o)), A("/CIDToGIDMap /Identity"), A("/DW 1000"), A("/Subtype /CIDFontType2"), A("/CIDSystemInfo"), A("<<"), A("/Supplement 0"), A("/Registry (Adobe)"), A("/Ordering (" + e.encoding + ")"), A(">>"), A(">>"), A("endobj"), e.objectNumber = r(), A("<<"), A("/Type /Font"), A("/Subtype /Type0"), A("/ToUnicode " + u + " 0 R"), A("/BaseFont /" + e.fontName), A("/Encoding /" + e.encoding), A("/DescendantFonts [" + f + " 0 R]"), A(">>"), A("endobj"), e.isAlreadyPutted = !0
                            }
                        }(e.font, e.out, e.newObject, e.putStream)
                    }]), A.events.push(["putFont", function(e) {
                        ! function(e, A, r, i) {
                            if (e.metadata instanceof t.API.TTFFont && "WinAnsiEncoding" === e.encoding) {
                                e.metadata.Unicode.widths;
                                for (var o = e.metadata.rawData, s = "", a = 0; a < o.length; a++) s += String.fromCharCode(o[a]);
                                var c = r();
                                i({ data: s, addLength1: !0 }), A("endobj");
                                var l = r();
                                i({ data: n(e.metadata.toUnicode), addLength1: !0 }), A("endobj");
                                var u = r();
                                for (A("<<"), A("/Descent " + e.metadata.decender), A("/CapHeight " + e.metadata.capHeight), A("/StemV " + e.metadata.stemV), A("/Type /FontDescriptor"), A("/FontFile2 " + c + " 0 R"), A("/Flags 96"), A("/FontBBox " + t.API.PDFObject.convert(e.metadata.bbox)), A("/FontName /" + e.fontName), A("/ItalicAngle " + e.metadata.italicAngle), A("/Ascent " + e.metadata.ascender), A(">>"), A("endobj"), e.objectNumber = r(), a = 0; a < e.metadata.hmtx.widths.length; a++) e.metadata.hmtx.widths[a] = parseInt(e.metadata.hmtx.widths[a] * (1e3 / e.metadata.head.unitsPerEm));
                                A("<</Subtype/TrueType/Type/Font/ToUnicode " + l + " 0 R/BaseFont/" + e.fontName + "/FontDescriptor " + u + " 0 R/Encoding/" + e.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t.API.PDFObject.convert(e.metadata.hmtx.widths) + ">>"), A("endobj"), e.isAlreadyPutted = !0
                            }
                        }(e.font, e.out, e.newObject, e.putStream)
                    }]);
                    var i = function(t) {
                        var e, A, n = t.text || "",
                            i = t.x,
                            o = t.y,
                            s = t.options || {},
                            a = t.mutex || {},
                            c = a.pdfEscape,
                            l = a.activeFontKey,
                            u = a.fonts,
                            h = (a.activeFontSize, ""),
                            f = 0,
                            d = "",
                            p = u[A = l].encoding;
                        if ("Identity-H" !== u[A].encoding) return { text: n, x: i, y: o, options: s, mutex: a };
                        for (d = n, A = l, "[object Array]" === Object.prototype.toString.call(n) && (d = n[0]), f = 0; f < d.length; f += 1) u[A].metadata.hasOwnProperty("cmap") && (e = u[A].metadata.cmap.unicode.codeMap[d[f].charCodeAt(0)]), e ? h += d[f] : d[f].charCodeAt(0) < 256 && u[A].metadata.hasOwnProperty("Unicode") ? h += d[f] : h += "";
                        var g = "";
                        return parseInt(A.slice(1)) < 14 || "WinAnsiEncoding" === p ? g = function(t) { for (var e = "", A = 0; A < t.length; A++) e += "" + t.charCodeAt(A).toString(16); return e }(c(h, A)) : "Identity-H" === p && (g = r(h, u[A])), a.isHex = !0, { text: g, x: i, y: o, options: s, mutex: a }
                    };
                    A.events.push(["postProcessText", function(t) {
                        var e = t.text || "",
                            A = t.x,
                            r = t.y,
                            n = t.options,
                            o = t.mutex,
                            s = (n.lang, []),
                            a = { text: e, x: A, y: r, options: n, mutex: o };
                        if ("[object Array]" === Object.prototype.toString.call(e)) {
                            var c = 0;
                            for (c = 0; c < e.length; c += 1) "[object Array]" === Object.prototype.toString.call(e[c]) && 3 === e[c].length ? s.push([i(Object.assign({}, a, { text: e[c][0] })).text, e[c][1], e[c][2]]) : s.push(i(Object.assign({}, a, { text: e[c] })).text);
                            t.text = s
                        } else t.text = i(Object.assign({}, a, { text: e })).text
                    }])
                }(dt, "undefined" != typeof self && self || void 0 !== r && r || "undefined" != typeof window && window || Function("return this")()), ht = dt.API, ft = function(t) { return void 0 !== t && (void 0 === t.vFS && (t.vFS = {}), !0) }, ht.existsFileInVFS = function(t) { return !!ft(this.internal) && void 0 !== this.internal.vFS[t] }, ht.addFileToVFS = function(t, e) { return ft(this.internal), this.internal.vFS[t] = e, this }, ht.getFileFromVFS = function(t) { return ft(this.internal), void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null }, dt.API.addHTML = function(t, e, A, r, n) {
                    if ("undefined" == typeof html2canvas && "undefined" == typeof rasterizeHTML) throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
                    "number" != typeof e && (r = e, n = A), "function" == typeof r && (n = r, r = null), "function" != typeof n && (n = function() {});
                    var i = this.internal,
                        o = i.scaleFactor,
                        s = i.pageSize.getWidth(),
                        a = i.pageSize.getHeight();
                    if ((r = r || {}).onrendered = function(t) {
                            e = parseInt(e) || 0, A = parseInt(A) || 0;
                            var i = r.dim || {},
                                c = Object.assign({ top: 0, right: 0, bottom: 0, left: 0, useFor: "content" }, r.margin),
                                l = i.h || Math.min(a, t.height / o),
                                u = i.w || Math.min(s, t.width / o) - e,
                                h = r.format || "JPEG",
                                f = r.imageCompression || "SLOW";
                            if (t.height > a - c.top - c.bottom && r.pagesplit) {
                                var d = function(t, e, A, n, i) {
                                        var o = document.createElement("canvas");
                                        o.height = i, o.width = n;
                                        var s = o.getContext("2d");
                                        return s.mozImageSmoothingEnabled = !1, s.webkitImageSmoothingEnabled = !1, s.msImageSmoothingEnabled = !1, s.imageSmoothingEnabled = !1, s.fillStyle = r.backgroundColor || "#ffffff", s.fillRect(0, 0, n, i), s.drawImage(t, e, A, n, i, 0, 0, n, i), o
                                    },
                                    p = function() {
                                        for (var r, i, l = 0, p = 0, g = {}, B = !1;;) {
                                            var w;
                                            if (p = 0, g.top = 0 !== l ? c.top : A, g.left = 0 !== l ? c.left : e, B = (s - c.left - c.right) * o < t.width, "content" === c.useFor ? 0 === l ? (r = Math.min((s - c.left) * o, t.width), i = Math.min((a - c.top) * o, t.height - l)) : (r = Math.min(s * o, t.width), i = Math.min(a * o, t.height - l), g.top = 0) : (r = Math.min((s - c.left - c.right) * o, t.width), i = Math.min((a - c.bottom - c.top) * o, t.height - l)), B)
                                                for (;;) {
                                                    "content" === c.useFor && (0 === p ? r = Math.min((s - c.left) * o, t.width) : (r = Math.min(s * o, t.width - p), g.left = 0));
                                                    var m = [w = d(t, p, l, r, i), g.left, g.top, w.width / o, w.height / o, h, null, f];
                                                    if (this.addImage.apply(this, m), (p += r) >= t.width) break;
                                                    this.addPage()
                                                } else m = [w = d(t, 0, l, r, i), g.left, g.top, w.width / o, w.height / o, h, null, f], this.addImage.apply(this, m);
                                            if ((l += i) >= t.height) break;
                                            this.addPage()
                                        }
                                        n(u, l, null, m)
                                    }.bind(this);
                                if ("CANVAS" === t.nodeName) {
                                    var g = new Image;
                                    g.onload = p, g.src = t.toDataURL("image/png"), t = g
                                } else p()
                            } else {
                                var B = Math.random().toString(35),
                                    w = [t, e, A, u, l, h, B, f];
                                this.addImage.apply(this, w), n(u, l, B, w)
                            }
                        }.bind(this), "undefined" != typeof html2canvas && !r.rstz) return html2canvas(t, r);
                    if ("undefined" == typeof rasterizeHTML) return null;
                    var c = "drawDocument";
                    return "string" == typeof t && (c = /^http/.test(t) ? "drawURL" : "drawHTML"), r.width = r.width || s * o, rasterizeHTML[c](t, void 0, r).then(function(t) { r.onrendered(t.image) }, function(t) { n(null, t) })
                        /**
                         * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
                         * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
                         *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
                         *               2014 Diego Casorran, https://github.com/diegocr
                         *               2014 Daniel Husar, https://github.com/danielhusar
                         *               2014 Wolfgang Gassler, https://github.com/woolfg
                         *               2014 Steven Spungin, https://github.com/flamenco
                         *
                         * @license
                         * 
                         * ====================================================================
                         */
                },
                function(t) {
                    var e, A, r, i, o, s, a, c, l, u, h, f, d, p, g, B, w, m, y, v;
                    e = function() {
                        return function(e) { return t.prototype = e, new t };

                        function t() {}
                    }(), u = function(t) { var e, A, r, n, i, o, s; for (A = 0, r = t.length, e = void 0, o = n = !1; !n && A !== r;)(e = t[A] = t[A].trimLeft()) && (n = !0), A++; for (A = r - 1; r && !o && -1 !== A;)(e = t[A] = t[A].trimRight()) && (o = !0), A--; for (i = /\s+$/g, s = !0, A = 0; A !== r;) "\u2028" != t[A] && (e = t[A].replace(/\s+/g, " "), s && (e = e.trimLeft()), e && (s = i.test(e)), t[A] = e), A++; return t }, f = function(t) { var e, A, n; for (e = void 0, A = (n = t.split(",")).shift(); !e && A;) e = r[A.trim().toLowerCase()], A = n.shift(); return e }, d = function(t) { var e; return -1 < (t = "auto" === t ? "0px" : t).indexOf("em") && !isNaN(Number(t.replace("em", ""))) && (t = 18.719 * Number(t.replace("em", "")) + "px"), -1 < t.indexOf("pt") && !isNaN(Number(t.replace("pt", ""))) && (t = 1.333 * Number(t.replace("pt", "")) + "px"), (e = p[t]) ? e : void 0 !== (e = { "xx-small": 9, "x-small": 11, small: 13, medium: 16, large: 19, "x-large": 23, "xx-large": 28, auto: 0 }[t]) ? p[t] = e / 16 : (e = parseFloat(t)) ? p[t] = e / 16 : (e = t.match(/([\d\.]+)(px)/), Array.isArray(e) && 3 === e.length ? p[t] = parseFloat(e[1]) / 16 : p[t] = 1) }, l = function(t) { var e, A, r, n, l; return l = t, n = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(l, null) : l.currentStyle ? l.currentStyle : l.style, A = void 0, (e = {})["font-family"] = f((r = function(t) { return t = t.replace(/-\D/g, function(t) { return t.charAt(1).toUpperCase() }), n[t] })("font-family")) || "times", e["font-style"] = i[r("font-style")] || "normal", e["text-align"] = o[r("text-align")] || "left", "bold" === (A = s[r("font-weight")] || "normal") && ("normal" === e["font-style"] ? e["font-style"] = A : e["font-style"] = A + e["font-style"]), e["font-size"] = d(r("font-size")) || 1, e["line-height"] = d(r("line-height")) || 1, e.display = "inline" === r("display") ? "inline" : "block", A = "block" === e.display, e["margin-top"] = A && d(r("margin-top")) || 0, e["margin-bottom"] = A && d(r("margin-bottom")) || 0, e["padding-top"] = A && d(r("padding-top")) || 0, e["padding-bottom"] = A && d(r("padding-bottom")) || 0, e["margin-left"] = A && d(r("margin-left")) || 0, e["margin-right"] = A && d(r("margin-right")) || 0, e["padding-left"] = A && d(r("padding-left")) || 0, e["padding-right"] = A && d(r("padding-right")) || 0, e["page-break-before"] = r("page-break-before") || "auto", e.float = a[r("cssFloat")] || "none", e.clear = c[r("clear")] || "none", e.color = r("color"), e }, g = function(t, e, A) {
                        var r, n, i, o, s;
                        if (i = !1, o = n = void 0, r = A["#" + t.id])
                            if ("function" == typeof r) i = r(t, e);
                            else
                                for (n = 0, o = r.length; !i && n !== o;) i = r[n](t, e), n++;
                        if (r = A[t.nodeName], !i && r)
                            if ("function" == typeof r) i = r(t, e);
                            else
                                for (n = 0, o = r.length; !i && n !== o;) i = r[n](t, e), n++;
                        for (s = "string" == typeof t.className ? t.className.split(" ") : [], n = 0; n < s.length; n++)
                            if (r = A["." + s[n]], !i && r)
                                if ("function" == typeof r) i = r(t, e);
                                else
                                    for (n = 0, o = r.length; !i && n !== o;) i = r[n](t, e), n++;
                        return i
                    }, v = function(t, e) {
                        var A, r, n, i, o, s, a, c, l;
                        for (A = [], r = [], n = 0, l = t.rows[0].cells.length, a = t.clientWidth; n < l;) c = t.rows[0].cells[n], r[n] = { name: c.textContent.toLowerCase().replace(/\s+/g, ""), prompt: c.textContent.replace(/\r?\n/g, ""), width: c.clientWidth / a * e.pdf.internal.pageSize.getWidth() }, n++;
                        for (n = 1; n < t.rows.length;) {
                            for (s = t.rows[n], o = {}, i = 0; i < s.cells.length;) o[r[i].name] = s.cells[i].textContent.replace(/\r?\n/g, ""), i++;
                            A.push(o), n++
                        }
                        return { rows: A, headers: r }
                    };
                    var b = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, OBJECT: 1, EMBED: 1, SELECT: 1 },
                        C = 1;
                    A = function(t, r, i) {
                        var o, s, a, c, u, h, f, d;
                        for (s = t.childNodes, o = void 0, (u = "block" === (a = l(t)).display) && (r.setBlockBoundary(), r.setBlockStyle(a)), c = 0, h = s.length; c < h;) {
                            if ("object" === n(o = s[c])) {
                                if (r.executeWatchFunctions(o), 1 === o.nodeType && "HEADER" === o.nodeName) {
                                    var p = o,
                                        w = r.pdf.margins_doc.top;
                                    r.pdf.internal.events.subscribe("addPage", function(t) { r.y = w, A(p, r, i), r.pdf.margins_doc.top = r.y + 10, r.y += 10 }, !1)
                                }
                                if (8 === o.nodeType && "#comment" === o.nodeName) ~o.textContent.indexOf("ADD_PAGE") && (r.pdf.addPage(), r.y = r.pdf.margins_doc.top);
                                else if (1 !== o.nodeType || b[o.nodeName])
                                    if (3 === o.nodeType) {
                                        var m = o.nodeValue;
                                        if (o.nodeValue && "LI" === o.parentNode.nodeName)
                                            if ("OL" === o.parentNode.parentNode.nodeName) m = C++ + ". " + m;
                                            else {
                                                var y = a["font-size"],
                                                    Q = (3 - .75 * y) * r.pdf.internal.scaleFactor,
                                                    F = .75 * y * r.pdf.internal.scaleFactor,
                                                    U = 1.74 * y / r.pdf.internal.scaleFactor;
                                                d = function(t, e) { this.pdf.circle(t + Q, e + F, U, "FD") }
                                            }
                                        16 & o.ownerDocument.body.compareDocumentPosition(o) && r.addText(m, a)
                                    } else "string" == typeof o && r.addText(o, a);
                                else {
                                    var E;
                                    if ("IMG" === o.nodeName) {
                                        var N = o.getAttribute("src");
                                        E = B[r.pdf.sHashCode(N) || N]
                                    }
                                    if (E) {
                                        r.pdf.internal.pageSize.getHeight() - r.pdf.margins_doc.bottom < r.y + o.height && r.y > r.pdf.margins_doc.top && (r.pdf.addPage(), r.y = r.pdf.margins_doc.top, r.executeWatchFunctions(o));
                                        var L = l(o),
                                            x = r.x,
                                            _ = 12 / r.pdf.internal.scaleFactor,
                                            H = (L["margin-left"] + L["padding-left"]) * _,
                                            S = (L["margin-right"] + L["padding-right"]) * _,
                                            I = (L["margin-top"] + L["padding-top"]) * _,
                                            T = (L["margin-bottom"] + L["padding-bottom"]) * _;
                                        void 0 !== L.float && "right" === L.float ? x += r.settings.width - o.width - S : x += H, r.pdf.addImage(E, x, r.y + I, o.width, o.height), E = void 0, "right" === L.float || "left" === L.float ? (r.watchFunctions.push(function(t, e, A, n) { return r.y >= e ? (r.x += t, r.settings.width += A, !0) : !!(n && 1 === n.nodeType && !b[n.nodeName] && r.x + n.width > r.pdf.margins_doc.left + r.pdf.margins_doc.width) && (r.x += t, r.y = e, r.settings.width += A, !0) }.bind(this, "left" === L.float ? -o.width - H - S : 0, r.y + o.height + I + T, o.width)), r.watchFunctions.push(function(t, e, A) { return !(r.y < t && e === r.pdf.internal.getNumberOfPages()) || 1 === A.nodeType && "both" === l(A).clear && (r.y = t, !0) }.bind(this, r.y + o.height, r.pdf.internal.getNumberOfPages())), r.settings.width -= o.width + H + S, "left" === L.float && (r.x += o.width + H + S)) : r.y += o.height + I + T
                                    } else if ("TABLE" === o.nodeName) f = v(o, r), r.y += 10, r.pdf.table(r.x, r.y, f.rows, f.headers, { autoSize: !1, printHeaders: i.printHeaders, margins: r.pdf.margins_doc, css: l(o) }), r.y = r.pdf.lastCellPos.y + r.pdf.lastCellPos.h + 20;
                                    else if ("OL" === o.nodeName || "UL" === o.nodeName) C = 1, g(o, r, i) || A(o, r, i), r.y += 10;
                                    else if ("LI" === o.nodeName) {
                                        var R = r.x;
                                        r.x += 20 / r.pdf.internal.scaleFactor, r.y += 3, g(o, r, i) || A(o, r, i), r.x = R
                                    } else "BR" === o.nodeName ? (r.y += a["font-size"] * r.pdf.internal.scaleFactor, r.addText("\u2028", e(a))) : g(o, r, i) || A(o, r, i)
                                }
                            }
                            c++
                        }
                        if (i.outY = r.y, u) return r.setBlockBoundary(d)
                    }, B = {}, w = function(t, e, A, r) {
                        var n, i = t.getElementsByTagName("img"),
                            o = i.length,
                            s = 0;

                        function a() { e.pdf.internal.events.publish("imagesLoaded"), r(n) }

                        function c(t, A, r) {
                            if (t) {
                                var i = new Image;
                                n = ++s, i.crossOrigin = "", i.onerror = i.onload = function() {
                                    if (i.complete && (0 === i.src.indexOf("data:image/") && (i.width = A || i.width || 0, i.height = r || i.height || 0), i.width + i.height)) {
                                        var n = e.pdf.sHashCode(t) || t;
                                        B[n] = B[n] || i
                                    }--s || a()
                                }, i.src = t
                            }
                        }
                        for (; o--;) c(i[o].getAttribute("src"), i[o].width, i[o].height);
                        return s || a()
                    }, m = function(t, e, r) {
                        var n = t.getElementsByTagName("footer");
                        if (0 < n.length) {
                            n = n[0];
                            var i = e.pdf.internal.write,
                                o = e.y;
                            e.pdf.internal.write = function() {}, A(n, e, r);
                            var s = Math.ceil(e.y - o) + 5;
                            e.y = o, e.pdf.internal.write = i, e.pdf.margins_doc.bottom += s;
                            for (var a = function(t) {
                                    var i = void 0 !== t ? t.pageNumber : 1,
                                        o = e.y;
                                    e.y = e.pdf.internal.pageSize.getHeight() - e.pdf.margins_doc.bottom, e.pdf.margins_doc.bottom -= s;
                                    for (var a = n.getElementsByTagName("span"), c = 0; c < a.length; ++c) - 1 < (" " + a[c].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") && (a[c].innerHTML = i), -1 < (" " + a[c].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && (a[c].innerHTML = "###jsPDFVarTotalPages###");
                                    A(n, e, r), e.pdf.margins_doc.bottom += s, e.y = o
                                }, c = n.getElementsByTagName("span"), l = 0; l < c.length; ++l) - 1 < (" " + c[l].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && e.pdf.internal.events.subscribe("htmlRenderingFinished", e.pdf.putTotalPages.bind(e.pdf, "###jsPDFVarTotalPages###"), !0);
                            e.pdf.internal.events.subscribe("addPage", a, !1), a(), b.FOOTER = 1
                        }
                    }, y = function(t, e, r, n, i, o) { if (!e) return !1; var s, a, c, l; "string" == typeof e || e.parentNode || (e = "" + e.innerHTML), "string" == typeof e && (s = e.replace(/<\/?script[^>]*?>/gi, ""), l = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0), (c = document.createElement("div")).style.cssText = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;", c.innerHTML = '<iframe style="height:1px;width:1px" name="' + l + '" />', document.body.appendChild(c), (a = window.frames[l]).document.open(), a.document.writeln(s), a.document.close(), e = a.document.body); var u, f = new h(t, r, n, i); return w.call(this, e, f, i.elementHandlers, function(t) { m(e, f, i.elementHandlers), A(e, f, i.elementHandlers), f.pdf.internal.events.publish("htmlRenderingFinished"), u = f.dispose(), "function" == typeof o ? o(u) : t && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!") }), u || { x: f.x, y: f.y } }, (h = function(t, e, A, r) { return this.pdf = t, this.x = e, this.y = A, this.settings = r, this.watchFunctions = [], this.init(), this }).prototype.init = function() { return this.paragraph = { text: [], style: [] }, this.pdf.internal.write("q") }, h.prototype.dispose = function() { return this.pdf.internal.write("Q"), { x: this.x, y: this.y, ready: !0 } }, h.prototype.executeWatchFunctions = function(t) {
                        var e = !1,
                            A = [];
                        if (0 < this.watchFunctions.length) {
                            for (var r = 0; r < this.watchFunctions.length; ++r) !0 === this.watchFunctions[r](t) ? e = !0 : A.push(this.watchFunctions[r]);
                            this.watchFunctions = A
                        }
                        return e
                    }, h.prototype.splitFragmentsIntoLines = function(t, A) {
                        var r, n, i, o, s, a, c, l, u, h, f, d, p, g;
                        for (h = this.pdf.internal.scaleFactor, o = {}, a = c = l = g = s = i = u = n = void 0, d = [f = []], r = 0, p = this.settings.width; t.length;)
                            if (s = t.shift(), g = A.shift(), s)
                                if ((i = o[(n = g["font-family"]) + (u = g["font-style"])]) || (i = this.pdf.internal.getFont(n, u).metadata.Unicode, o[n + u] = i), l = { widths: i.widths, kerning: i.kerning, fontSize: 12 * g["font-size"], textIndent: r }, c = this.pdf.getStringUnitWidth(s, l) * l.fontSize / h, "\u2028" == s) f = [], d.push(f);
                                else if (p < r + c) {
                            for (a = this.pdf.splitTextToSize(s, p, l), f.push([a.shift(), g]); a.length;) f = [
                                [a.shift(), g]
                            ], d.push(f);
                            r = this.pdf.getStringUnitWidth(f[0][0], l) * l.fontSize / h
                        } else f.push([s, g]), r += c;
                        if (void 0 !== g["text-align"] && ("center" === g["text-align"] || "right" === g["text-align"] || "justify" === g["text-align"]))
                            for (var B = 0; B < d.length; ++B) {
                                var w = this.pdf.getStringUnitWidth(d[B][0][0], l) * l.fontSize / h;
                                0 < B && (d[B][0][1] = e(d[B][0][1]));
                                var m = p - w;
                                if ("right" === g["text-align"]) d[B][0][1]["margin-left"] = m;
                                else if ("center" === g["text-align"]) d[B][0][1]["margin-left"] = m / 2;
                                else if ("justify" === g["text-align"]) {
                                    var y = d[B][0][0].split(" ").length - 1;
                                    d[B][0][1]["word-spacing"] = m / y, B === d.length - 1 && (d[B][0][1]["word-spacing"] = 0)
                                }
                            }
                        return d
                    }, h.prototype.RenderTextFragment = function(t, e) {
                        var A, r;
                        r = 0, this.pdf.internal.pageSize.getHeight() - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() && (this.pdf.internal.write("ET", "Q"), this.pdf.addPage(), this.y = this.pdf.margins_doc.top, this.pdf.internal.write("q", "BT", this.getPdfColor(e.color), this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"), r = Math.max(r, e["line-height"], e["font-size"]), this.pdf.internal.write(0, (-12 * r).toFixed(2), "Td")), A = this.pdf.internal.getFont(e["font-family"], e["font-style"]);
                        var n = this.getPdfColor(e.color);
                        n !== this.lastTextColor && (this.pdf.internal.write(n), this.lastTextColor = n), void 0 !== e["word-spacing"] && 0 < e["word-spacing"] && this.pdf.internal.write(e["word-spacing"].toFixed(2), "Tw"), this.pdf.internal.write("/" + A.id, (12 * e["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(t) + ") Tj"), void 0 !== e["word-spacing"] && this.pdf.internal.write(0, "Tw")
                    }, h.prototype.getPdfColor = function(t) {
                        var e, A, r, n = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);
                        if (null != n) e = parseInt(n[1]), A = parseInt(n[2]), r = parseInt(n[3]);
                        else {
                            if ("string" == typeof t && "#" != t.charAt(0)) {
                                var i = new RGBColor(t);
                                t = i.ok ? i.toHex() : "#000000"
                            }
                            e = t.substring(1, 3), e = parseInt(e, 16), A = t.substring(3, 5), A = parseInt(A, 16), r = t.substring(5, 7), r = parseInt(r, 16)
                        }
                        if ("string" == typeof e && /^#[0-9A-Fa-f]{6}$/.test(e)) {
                            var o = parseInt(e.substr(1), 16);
                            e = o >> 16 & 255, A = o >> 8 & 255, r = 255 & o
                        }
                        var s = this.f3;
                        return 0 === e && 0 === A && 0 === r || void 0 === A ? s(e / 255) + " g" : [s(e / 255), s(A / 255), s(r / 255), "rg"].join(" ")
                    }, h.prototype.f3 = function(t) { return t.toFixed(3) }, h.prototype.renderParagraph = function(t) {
                        var e, A, r, n, i, o, s, a, c, l, h, f, d;
                        if (r = u(this.paragraph.text), f = this.paragraph.style, e = this.paragraph.blockstyle, this.paragraph.priorblockstyle, this.paragraph = { text: [], style: [], blockstyle: {}, priorblockstyle: e }, r.join("").trim()) {
                            s = this.splitFragmentsIntoLines(r, f), a = o = void 0, A = 12 / this.pdf.internal.scaleFactor, this.priorMarginBottom = this.priorMarginBottom || 0, h = (Math.max((e["margin-top"] || 0) - this.priorMarginBottom, 0) + (e["padding-top"] || 0)) * A, l = ((e["margin-bottom"] || 0) + (e["padding-bottom"] || 0)) * A, this.priorMarginBottom = e["margin-bottom"] || 0, "always" === e["page-break-before"] && (this.pdf.addPage(), this.y = 0, h = ((e["margin-top"] || 0) + (e["padding-top"] || 0)) * A), c = this.pdf.internal.write, i = n = void 0, this.y += h, c("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
                            for (var p = 0; s.length;) {
                                for (n = a = 0, i = (o = s.shift()).length; n !== i;) o[n][0].trim() && (a = Math.max(a, o[n][1]["line-height"], o[n][1]["font-size"]), d = 7 * o[n][1]["font-size"]), n++;
                                var g = 0,
                                    B = 0;
                                for (void 0 !== o[0][1]["margin-left"] && 0 < o[0][1]["margin-left"] && (g = (B = this.pdf.internal.getCoordinateString(o[0][1]["margin-left"])) - p, p = B), c(g + Math.max(e["margin-left"] || 0, 0) * A, (-12 * a).toFixed(2), "Td"), n = 0, i = o.length; n !== i;) o[n][0] && this.RenderTextFragment(o[n][0], o[n][1]), n++;
                                if (this.y += a * A, this.executeWatchFunctions(o[0][1]) && 0 < s.length) {
                                    var w = [],
                                        m = [];
                                    s.forEach(function(t) { for (var e = 0, A = t.length; e !== A;) t[e][0] && (w.push(t[e][0] + " "), m.push(t[e][1])), ++e }), s = this.splitFragmentsIntoLines(u(w), m), c("ET", "Q"), c("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td")
                                }
                            }
                            return t && "function" == typeof t && t.call(this, this.x - 9, this.y - d / 2), c("ET", "Q"), this.y += l
                        }
                    }, h.prototype.setBlockBoundary = function(t) { return this.renderParagraph(t) }, h.prototype.setBlockStyle = function(t) { return this.paragraph.blockstyle = t }, h.prototype.addText = function(t, e) { return this.paragraph.text.push(t), this.paragraph.style.push(e) }, r = { helvetica: "helvetica", "sans-serif": "helvetica", "times new roman": "times", serif: "times", times: "times", monospace: "courier", courier: "courier" }, s = { 100: "normal", 200: "normal", 300: "normal", 400: "normal", 500: "bold", 600: "bold", 700: "bold", 800: "bold", 900: "bold", normal: "normal", bold: "bold", bolder: "bold", lighter: "normal" }, i = { normal: "normal", italic: "italic", oblique: "italic" }, o = { left: "left", right: "right", center: "center", justify: "justify" }, a = { none: "none", right: "right", left: "left" }, c = { none: "none", both: "both" }, p = { normal: 1 }, t.fromHTML = function(t, e, A, r, n, i) { return this.margins_doc = i || { top: 0, bottom: 0 }, r || (r = {}), r.elementHandlers || (r.elementHandlers = {}), y(this, t, isNaN(e) ? 4 : e, isNaN(A) ? 4 : A, r, n) }
                }(dt.API), dt.API, ("undefined" != typeof window && window || void 0 !== r && r).html2pdf = function(t, e, A) {
                    var r = e.canvas;
                    if (r) {
                        var n, i;
                        if ((r.pdf = e).annotations = {
                                _nameMap: [],
                                createAnnotation: function(t, A) {
                                    var r, n = e.context2d._wrapX(A.left),
                                        i = e.context2d._wrapY(A.top),
                                        o = (e.context2d._page(A.top), t.indexOf("#"));
                                    r = 0 <= o ? { name: t.substring(o + 1) } : { url: t }, e.link(n, i, A.right - A.left, A.bottom - A.top, r)
                                },
                                setName: function(t, A) {
                                    var r = e.context2d._wrapX(A.left),
                                        n = e.context2d._wrapY(A.top),
                                        i = e.context2d._page(A.top);
                                    this._nameMap[t] = { page: i, x: r, y: n }
                                }
                            }, r.annotations = e.annotations, e.context2d._pageBreakAt = function(t) { this.pageBreaks.push(t) }, e.context2d._gotoPage = function(t) {
                                for (; e.internal.getNumberOfPages() < t;) e.addPage();
                                e.setPage(t)
                            }, "string" == typeof t) {
                            t = t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
                            var o, s, a = document.createElement("iframe");
                            document.body.appendChild(a), null != (o = a.contentDocument) && null != o || (o = a.contentWindow.document), o.open(), o.write(t), o.close(), n = o.body, s = o.body || {}, t = o.documentElement || {}, i = Math.max(s.scrollHeight, s.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)
                        } else s = (n = t).body || {}, i = Math.max(s.scrollHeight, s.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
                        var c = { async: !0, allowTaint: !0, backgroundColor: "#ffffff", canvas: r, imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1, windowHeight: i = e.internal.pageSize.getHeight(), scrollY: i };
                        e.context2d.pageWrapYEnabled = !0, e.context2d.pageWrapY = e.internal.pageSize.getHeight(), html2canvas(n, c).then(function(t) { A && (a && a.parentElement.removeChild(a), A(e)) })
                    } else alert("jsPDF canvas plugin not installed")
                }, window.tmp = html2pdf,
                function(t) {
                    var e = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder;
                    t.URL = t.URL || t.webkitURL || function(t, e) { return (e = document.createElement("a")).href = t, e };
                    var A = t.Blob,
                        r = URL.createObjectURL,
                        n = URL.revokeObjectURL,
                        i = t.Symbol && t.Symbol.toStringTag,
                        o = !1,
                        s = !1,
                        a = !!t.ArrayBuffer,
                        c = e && e.prototype.append && e.prototype.getBlob;
                    try { o = 2 === new Blob(["ä"]).size, s = 2 === new Blob([new Uint8Array([1, 2])]).size } catch (o) {}

                    function l(t) {
                        return t.map(function(t) {
                            if (t.buffer instanceof ArrayBuffer) {
                                var e = t.buffer;
                                if (t.byteLength !== e.byteLength) {
                                    var A = new Uint8Array(t.byteLength);
                                    A.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = A.buffer
                                }
                                return e
                            }
                            return t
                        })
                    }

                    function u(t, A) { A = A || {}; var r = new e; return l(t).forEach(function(t) { r.append(t) }), A.type ? r.getBlob(A.type) : r.getBlob() }

                    function h(t, e) { return new A(l(t), e || {}) }
                    if (t.Blob && (u.prototype = Blob.prototype, h.prototype = Blob.prototype), i) try { File.prototype[i] = "File", Blob.prototype[i] = "Blob", FileReader.prototype[i] = "FileReader" } catch (o) {}

                    function f() {
                        var e = !!t.ActiveXObject || "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
                            A = t.XMLHttpRequest && t.XMLHttpRequest.prototype.send;
                        e && A && (XMLHttpRequest.prototype.send = function(t) { t instanceof Blob && this.setRequestHeader("Content-Type", t.type), A.call(this, t) });
                        try { new File([], "") } catch (e) {
                            try {
                                var r = new Function('class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name;this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date;this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File')();
                                t.File = r
                            } catch (e) {
                                r = function(t, e, A) {
                                    var r = new Blob(t, A),
                                        n = A && void 0 !== A.lastModified ? new Date(A.lastModified) : new Date;
                                    return r.name = e, r.lastModifiedDate = n, r.lastModified = +n, r.toString = function() { return "[object File]" }, i && (r[i] = "File"), r
                                }, t.File = r
                            }
                        }
                    }
                    o ? (f(), t.Blob = s ? t.Blob : h) : c ? (f(), t.Blob = u) : function() {
                        function e(t) {
                            for (var e = [], A = 0; A < t.length; A++) {
                                var r = t.charCodeAt(A);
                                r < 128 ? e.push(r) : r < 2048 ? e.push(192 | r >> 6, 128 | 63 & r) : r < 55296 || 57344 <= r ? e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (A++, r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(A)), e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
                            }
                            return e
                        }

                        function A(t) {
                            var e, A, r, n, i, o;
                            for (e = "", r = t.length, A = 0; A < r;) switch ((n = t[A++]) >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    e += String.fromCharCode(n);
                                    break;
                                case 12:
                                case 13:
                                    i = t[A++], e += String.fromCharCode((31 & n) << 6 | 63 & i);
                                    break;
                                case 14:
                                    i = t[A++], o = t[A++], e += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | (63 & o) << 0)
                            }
                            return e
                        }

                        function i(t) { for (var e = new Array(t.byteLength), A = new Uint8Array(t), r = e.length; r--;) e[r] = A[r]; return e }

                        function o(t) {
                            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", A = [], r = 0; r < t.length; r += 3) {
                                var n = t[r],
                                    i = r + 1 < t.length,
                                    o = i ? t[r + 1] : 0,
                                    s = r + 2 < t.length,
                                    a = s ? t[r + 2] : 0,
                                    c = n >> 2,
                                    l = (3 & n) << 4 | o >> 4,
                                    u = (15 & o) << 2 | a >> 6,
                                    h = 63 & a;
                                s || (h = 64, i || (u = 64)), A.push(e[c], e[l], e[u], e[h])
                            }
                            return A.join("")
                        }
                        var s = Object.create || function(t) {
                            function e() {}
                            return e.prototype = t, new e
                        };
                        if (a) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                            l = ArrayBuffer.isView || function(t) { return t && -1 < c.indexOf(Object.prototype.toString.call(t)) };

                        function u(t, A) {
                            for (var r = 0, n = (t = t || []).length; r < n; r++) {
                                var o = t[r];
                                o instanceof u ? t[r] = o._buffer : "string" == typeof o ? t[r] = e(o) : a && (ArrayBuffer.prototype.isPrototypeOf(o) || l(o)) ? t[r] = i(o) : a && (s = o) && DataView.prototype.isPrototypeOf(s) ? t[r] = i(o.buffer) : t[r] = e(String(o))
                            }
                            var s;
                            this._buffer = [].concat.apply([], t), this.size = this._buffer.length, this.type = A && A.type || ""
                        }

                        function h(t, e, A) { var r = u.call(this, t, A = A || {}) || this; return r.name = e, r.lastModifiedDate = A.lastModified ? new Date(A.lastModified) : new Date, r.lastModified = +r.lastModifiedDate, r }
                        if (u.prototype.slice = function(t, e, A) { return new u([this._buffer.slice(t || 0, e || this._buffer.length)], { type: A }) }, u.prototype.toString = function() { return "[object Blob]" }, (h.prototype = s(u.prototype)).constructor = h, Object.setPrototypeOf) Object.setPrototypeOf(h, u);
                        else try { h.__proto__ = u } catch (s) {}

                        function f() {
                            if (!(this instanceof f)) throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
                            var t = document.createDocumentFragment();
                            this.addEventListener = t.addEventListener, this.dispatchEvent = function(e) { var A = this["on" + e.type]; "function" == typeof A && A(e), t.dispatchEvent(e) }, this.removeEventListener = t.removeEventListener
                        }

                        function d(t, e, A) {
                            if (!(e instanceof u)) throw new TypeError("Failed to execute '" + A + "' on 'FileReader': parameter 1 is not of type 'Blob'.");
                            t.result = "", setTimeout(function() { this.readyState = f.LOADING, t.dispatchEvent(new Event("load")), t.dispatchEvent(new Event("loadend")) })
                        }
                        h.prototype.toString = function() { return "[object File]" }, f.EMPTY = 0, f.LOADING = 1, f.DONE = 2, f.prototype.error = null, f.prototype.onabort = null, f.prototype.onerror = null, f.prototype.onload = null, f.prototype.onloadend = null, f.prototype.onloadstart = null, f.prototype.onprogress = null, f.prototype.readAsDataURL = function(t) { d(this, t, "readAsDataURL"), this.result = "data:" + t.type + ";base64," + o(t._buffer) }, f.prototype.readAsText = function(t) { d(this, t, "readAsText"), this.result = A(t._buffer) }, f.prototype.readAsArrayBuffer = function(t) { d(this, t, "readAsText"), this.result = t._buffer.slice() }, f.prototype.abort = function() {}, URL.createObjectURL = function(t) { return t instanceof u ? "data:" + t.type + ";base64," + o(t._buffer) : r.call(URL, t) }, URL.revokeObjectURL = function(t) { n && n.call(URL, t) };
                        var p = t.XMLHttpRequest && t.XMLHttpRequest.prototype.send;
                        p && (XMLHttpRequest.prototype.send = function(t) { t instanceof u ? (this.setRequestHeader("Content-Type", t.type), p.call(this, A(t._buffer))) : p.call(this, t) }), t.FileReader = f, t.File = h, t.Blob = u
                    }()
                }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")());
            var pt, gt, Bt, wt, mt, yt, vt, bt, Ct, Qt, Ft, Ut, Et, Nt, Lt, xt = xt || function(t) {
                if (!(void 0 === t || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                    var e = t.document,
                        A = function() { return t.URL || t.webkitURL || t },
                        r = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                        n = "download" in r,
                        i = /constructor/i.test(t.HTMLElement) || t.safari,
                        o = /CriOS\/[\d]+/.test(navigator.userAgent),
                        s = t.setImmediate || t.setTimeout,
                        a = function(t) { s(function() { throw t }, 0) },
                        c = function(t) { setTimeout(function() { "string" == typeof t ? A().revokeObjectURL(t) : t.remove() }, 4e4) },
                        l = function(t) { return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t },
                        u = function(e, u, h) {
                            h || (e = l(e));
                            var f, d = this,
                                p = "application/octet-stream" === e.type,
                                g = function() {! function(t, e, A) { for (var r = (e = [].concat(e)).length; r--;) { var n = t["on" + e[r]]; if ("function" == typeof n) try { n.call(t, t) } catch (t) { a(t) } } }(d, "writestart progress write writeend".split(" ")) };
                            if (d.readyState = d.INIT, n) return f = A().createObjectURL(e), void s(function() {
                                var t, e;
                                r.href = f, r.download = u, t = r, e = new MouseEvent("click"), t.dispatchEvent(e), g(), c(f), d.readyState = d.DONE
                            }, 0);
                            ! function() {
                                if ((o || p && i) && t.FileReader) {
                                    var r = new FileReader;
                                    return r.onloadend = function() {
                                        var e = o ? r.result : r.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                        t.open(e, "_blank") || (t.location.href = e), e = void 0, d.readyState = d.DONE, g()
                                    }, r.readAsDataURL(e), d.readyState = d.INIT
                                }
                                f || (f = A().createObjectURL(e)), p ? t.location.href = f : t.open(f, "_blank") || (t.location.href = f), d.readyState = d.DONE, g(), c(f)
                            }()
                        },
                        h = u.prototype;
                    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, A) { return e = e || t.name || "download", A || (t = l(t)), navigator.msSaveOrOpenBlob(t, e) } : (h.abort = function() {}, h.readyState = h.INIT = 0, h.WRITING = 1, h.DONE = 2, h.error = h.onwritestart = h.onprogress = h.onwrite = h.onabort = h.onerror = h.onwriteend = null, function(t, e, A) { return new u(t, e || t.name || "download", A) })
                }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0);

            function _t(t) {
                var e = 0;
                if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != (t[e++] + 1 & 253) || 97 !== t[e++]) throw "Invalid GIF 87a/89a header.";
                var A = t[e++] | t[e++] << 8,
                    r = t[e++] | t[e++] << 8,
                    n = t[e++],
                    i = n >> 7,
                    o = 1 << 1 + (7 & n);
                t[e++], t[e++];
                var s = null;
                i && (s = e, e += 3 * o);
                var a = !0,
                    c = [],
                    l = 0,
                    u = null,
                    h = 0,
                    f = null;
                for (this.width = A, this.height = r; a && e < t.length;) switch (t[e++]) {
                    case 33:
                        switch (t[e++]) {
                            case 255:
                                if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16]) e += 14, f = t[e++] | t[e++] << 8, e++;
                                else
                                    for (e += 12; 0 !== (Q = t[e++]);) e += Q;
                                break;
                            case 249:
                                if (4 !== t[e++] || 0 !== t[e + 4]) throw "Invalid graphics extension block.";
                                var d = t[e++];
                                l = t[e++] | t[e++] << 8, u = t[e++], 0 == (1 & d) && (u = null), h = d >> 2 & 7, e++;
                                break;
                            case 254:
                                for (; 0 !== (Q = t[e++]);) e += Q;
                                break;
                            default:
                                throw "Unknown graphic control label: 0x" + t[e - 1].toString(16)
                        }
                        break;
                    case 44:
                        var p = t[e++] | t[e++] << 8,
                            g = t[e++] | t[e++] << 8,
                            B = t[e++] | t[e++] << 8,
                            w = t[e++] | t[e++] << 8,
                            m = t[e++],
                            y = m >> 6 & 1,
                            v = s,
                            b = !1;
                        m >> 7 && (b = !0, v = e, e += 3 * (1 << 1 + (7 & m)));
                        var C = e;
                        for (e++;;) {
                            var Q;
                            if (0 === (Q = t[e++])) break;
                            e += Q
                        }
                        c.push({ x: p, y: g, width: B, height: w, has_local_palette: b, palette_offset: v, data_offset: C, data_length: e - C, transparent_index: u, interlaced: !!y, delay: l, disposal: h });
                        break;
                    case 59:
                        a = !1;
                        break;
                    default:
                        throw "Unknown gif block: 0x" + t[e - 1].toString(16)
                }
                this.numFrames = function() { return c.length }, this.loopCount = function() { return f }, this.frameInfo = function(t) { if (t < 0 || t >= c.length) throw "Frame index out of range."; return c[t] }, this.decodeAndBlitFrameBGRA = function(e, r) {
                    var n = this.frameInfo(e),
                        i = n.width * n.height,
                        o = new Uint8Array(i);
                    Ht(t, n.data_offset, o, i);
                    var s = n.palette_offset,
                        a = n.transparent_index;
                    null === a && (a = 256);
                    var c = n.width,
                        l = A - c,
                        u = c,
                        h = 4 * (n.y * A + n.x),
                        f = 4 * ((n.y + n.height) * A + n.x),
                        d = h,
                        p = 4 * l;
                    !0 === n.interlaced && (p += 4 * (c + l) * 7);
                    for (var g = 8, B = 0, w = o.length; B < w; ++B) {
                        var m = o[B];
                        if (0 === u && (u = c, f <= (d += p) && (p = l + 4 * (c + l) * (g - 1), d = h + (c + l) * (g << 1), g >>= 1)), m === a) d += 4;
                        else {
                            var y = t[s + 3 * m],
                                v = t[s + 3 * m + 1],
                                b = t[s + 3 * m + 2];
                            r[d++] = b, r[d++] = v, r[d++] = y, r[d++] = 255
                        }--u
                    }
                }, this.decodeAndBlitFrameRGBA = function(e, r) {
                    var n = this.frameInfo(e),
                        i = n.width * n.height,
                        o = new Uint8Array(i);
                    Ht(t, n.data_offset, o, i);
                    var s = n.palette_offset,
                        a = n.transparent_index;
                    null === a && (a = 256);
                    var c = n.width,
                        l = A - c,
                        u = c,
                        h = 4 * (n.y * A + n.x),
                        f = 4 * ((n.y + n.height) * A + n.x),
                        d = h,
                        p = 4 * l;
                    !0 === n.interlaced && (p += 4 * (c + l) * 7);
                    for (var g = 8, B = 0, w = o.length; B < w; ++B) {
                        var m = o[B];
                        if (0 === u && (u = c, f <= (d += p) && (p = l + 4 * (c + l) * (g - 1), d = h + (c + l) * (g << 1), g >>= 1)), m === a) d += 4;
                        else {
                            var y = t[s + 3 * m],
                                v = t[s + 3 * m + 1],
                                b = t[s + 3 * m + 2];
                            r[d++] = y, r[d++] = v, r[d++] = b, r[d++] = 255
                        }--u
                    }
                }
            }

            function Ht(t, e, A, r) {
                for (var n = t[e++], i = 1 << n, o = i + 1, s = o + 1, a = n + 1, c = (1 << a) - 1, l = 0, u = 0, h = 0, f = t[e++], d = new Int32Array(4096), p = null;;) {
                    for (; l < 16 && 0 !== f;) u |= t[e++] << l, l += 8, 1 === f ? f = t[e++] : --f;
                    if (l < a) break;
                    var g = u & c;
                    if (u >>= a, l -= a, g !== i) {
                        if (g === o) break;
                        for (var B = g < s ? g : p, w = 0, m = B; i < m;) m = d[m] >> 8, ++w;
                        var y = m;
                        if (r < h + w + (B !== g ? 1 : 0)) return void console.log("Warning, gif stream longer than expected.");
                        A[h++] = y;
                        var v = h += w;
                        for (B !== g && (A[h++] = y), m = B; w--;) m = d[m], A[--v] = 255 & m, m >>= 8;
                        null !== p && s < 4096 && (d[s++] = p << 8 | y, c + 1 <= s && a < 12 && (++a, c = c << 1 | 1)), p = g
                    } else s = o + 1, c = (1 << (a = n + 1)) - 1, p = null
                }
                return h !== r && console.log("Warning, gif stream shorter than expected."), A
            }
            try {
                e.GifWriter = function(t, e, A, r) {
                    var n = 0,
                        i = void 0 === (r = void 0 === r ? {} : r).loop ? null : r.loop,
                        o = void 0 === r.palette ? null : r.palette;
                    if (e <= 0 || A <= 0 || 65535 < e || 65535 < A) throw "Width/Height invalid.";

                    function s(t) { var e = t.length; if (e < 2 || 256 < e || e & e - 1) throw "Invalid code/color length, must be power of 2 and 2 .. 256."; return e }
                    t[n++] = 71, t[n++] = 73, t[n++] = 70, t[n++] = 56, t[n++] = 57, t[n++] = 97;
                    var a = 0,
                        c = 0;
                    if (null !== o) { for (var l = s(o); l >>= 1;) ++a; if (l = 1 << a, --a, void 0 !== r.background) { if (l <= (c = r.background)) throw "Background index out of range."; if (0 === c) throw "Background index explicitly passed as 0." } }
                    if (t[n++] = 255 & e, t[n++] = e >> 8 & 255, t[n++] = 255 & A, t[n++] = A >> 8 & 255, t[n++] = (null !== o ? 128 : 0) | a, t[n++] = c, t[n++] = 0, null !== o)
                        for (var u = 0, h = o.length; u < h; ++u) {
                            var f = o[u];
                            t[n++] = f >> 16 & 255, t[n++] = f >> 8 & 255, t[n++] = 255 & f
                        }
                    if (null !== i) {
                        if (i < 0 || 65535 < i) throw "Loop count invalid.";
                        t[n++] = 33, t[n++] = 255, t[n++] = 11, t[n++] = 78, t[n++] = 69, t[n++] = 84, t[n++] = 83, t[n++] = 67, t[n++] = 65, t[n++] = 80, t[n++] = 69, t[n++] = 50, t[n++] = 46, t[n++] = 48, t[n++] = 3, t[n++] = 1, t[n++] = 255 & i, t[n++] = i >> 8 & 255, t[n++] = 0
                    }
                    var d = !1;
                    this.addFrame = function(e, A, r, i, a, c) {
                        if (!0 === d && (--n, d = !1), c = void 0 === c ? {} : c, e < 0 || A < 0 || 65535 < e || 65535 < A) throw "x/y invalid.";
                        if (r <= 0 || i <= 0 || 65535 < r || 65535 < i) throw "Width/Height invalid.";
                        if (a.length < r * i) throw "Not enough pixels for the frame size.";
                        var l = !0,
                            u = c.palette;
                        if (null == u && (l = !1, u = o), null == u) throw "Must supply either a local or global palette.";
                        for (var h = s(u), f = 0; h >>= 1;) ++f;
                        h = 1 << f;
                        var p = void 0 === c.delay ? 0 : c.delay,
                            g = void 0 === c.disposal ? 0 : c.disposal;
                        if (g < 0 || 3 < g) throw "Disposal out of range.";
                        var B = !1,
                            w = 0;
                        if (void 0 !== c.transparent && null !== c.transparent && (B = !0, (w = c.transparent) < 0 || h <= w)) throw "Transparent color index.";
                        if ((0 !== g || B || 0 !== p) && (t[n++] = 33, t[n++] = 249, t[n++] = 4, t[n++] = g << 2 | (!0 === B ? 1 : 0), t[n++] = 255 & p, t[n++] = p >> 8 & 255, t[n++] = w, t[n++] = 0), t[n++] = 44, t[n++] = 255 & e, t[n++] = e >> 8 & 255, t[n++] = 255 & A, t[n++] = A >> 8 & 255, t[n++] = 255 & r, t[n++] = r >> 8 & 255, t[n++] = 255 & i, t[n++] = i >> 8 & 255, t[n++] = !0 === l ? 128 | f - 1 : 0, !0 === l)
                            for (var m = 0, y = u.length; m < y; ++m) {
                                var v = u[m];
                                t[n++] = v >> 16 & 255, t[n++] = v >> 8 & 255, t[n++] = 255 & v
                            }
                        n = function(t, e, A, r) {
                            t[e++] = A;
                            var n = e++,
                                i = 1 << A,
                                o = i - 1,
                                s = i + 1,
                                a = s + 1,
                                c = A + 1,
                                l = 0,
                                u = 0;

                            function h(A) { for (; A <= l;) t[e++] = 255 & u, u >>= 8, l -= 8, e === n + 256 && (t[n] = 255, n = e++) }

                            function f(t) { u |= t << l, l += c, h(8) }
                            var d = r[0] & o,
                                p = {};
                            f(i);
                            for (var g = 1, B = r.length; g < B; ++g) {
                                var w = r[g] & o,
                                    m = d << 8 | w,
                                    y = p[m];
                                if (void 0 === y) {
                                    for (u |= d << l, l += c; 8 <= l;) t[e++] = 255 & u, u >>= 8, l -= 8, e === n + 256 && (t[n] = 255, n = e++);
                                    4096 === a ? (f(i), a = s + 1, c = A + 1, p = {}) : (1 << c <= a && ++c, p[m] = a++), d = w
                                } else d = y
                            }
                            return f(d), f(s), h(1), n + 1 === e ? t[n] = 0 : (t[n] = e - n - 1, t[e++] = 0), e
                        }(t, n, f < 2 ? 2 : f, a)
                    }, this.end = function() { return !1 === d && (t[n++] = 59, d = !0), n }
                }, e.GifReader = _t
            } catch (o) {}

            function St(t) {
                var e, A, r, n, i, o = Math.floor,
                    s = new Array(64),
                    a = new Array(64),
                    c = new Array(64),
                    l = new Array(64),
                    u = new Array(65535),
                    h = new Array(65535),
                    f = new Array(64),
                    d = new Array(64),
                    p = [],
                    g = 0,
                    B = 7,
                    w = new Array(64),
                    m = new Array(64),
                    y = new Array(64),
                    v = new Array(256),
                    b = new Array(2048),
                    C = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
                    Q = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                    F = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    U = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
                    E = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                    N = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                    L = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    x = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
                    _ = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

                function H(t, e) {
                    for (var A = 0, r = 0, n = new Array, i = 1; i <= 16; i++) {
                        for (var o = 1; o <= t[i]; o++) n[e[r]] = [], n[e[r]][0] = A, n[e[r]][1] = i, r++, A++;
                        A *= 2
                    }
                    return n
                }

                function S(t) { for (var e = t[0], A = t[1] - 1; 0 <= A;) e & 1 << A && (g |= 1 << B), A--, --B < 0 && (255 == g ? (I(255), I(0)) : I(g), B = 7, g = 0) }

                function I(t) { p.push(t) }

                function T(t) { I(t >> 8 & 255), I(255 & t) }

                function R(t, e, A, r, n) {
                    for (var i, o = n[0], s = n[240], a = function(t, e) {
                            var A, r, n, i, o, s, a, c, l, u, h = 0;
                            for (l = 0; l < 8; ++l) {
                                A = t[h], r = t[h + 1], n = t[h + 2], i = t[h + 3], o = t[h + 4], s = t[h + 5], a = t[h + 6];
                                var d = A + (c = t[h + 7]),
                                    p = A - c,
                                    g = r + a,
                                    B = r - a,
                                    w = n + s,
                                    m = n - s,
                                    y = i + o,
                                    v = i - o,
                                    b = d + y,
                                    C = d - y,
                                    Q = g + w,
                                    F = g - w;
                                t[h] = b + Q, t[h + 4] = b - Q;
                                var U = .707106781 * (F + C);
                                t[h + 2] = C + U, t[h + 6] = C - U;
                                var E = .382683433 * ((b = v + m) - (F = B + p)),
                                    N = .5411961 * b + E,
                                    L = 1.306562965 * F + E,
                                    x = .707106781 * (Q = m + B),
                                    _ = p + x,
                                    H = p - x;
                                t[h + 5] = H + N, t[h + 3] = H - N, t[h + 1] = _ + L, t[h + 7] = _ - L, h += 8
                            }
                            for (l = h = 0; l < 8; ++l) {
                                A = t[h], r = t[h + 8], n = t[h + 16], i = t[h + 24], o = t[h + 32], s = t[h + 40], a = t[h + 48];
                                var S = A + (c = t[h + 56]),
                                    I = A - c,
                                    T = r + a,
                                    R = r - a,
                                    O = n + s,
                                    M = n - s,
                                    P = i + o,
                                    K = i - o,
                                    D = S + P,
                                    k = S - P,
                                    z = T + O,
                                    j = T - O;
                                t[h] = D + z, t[h + 32] = D - z;
                                var q = .707106781 * (j + k);
                                t[h + 16] = k + q, t[h + 48] = k - q;
                                var V = .382683433 * ((D = K + M) - (j = R + I)),
                                    X = .5411961 * D + V,
                                    G = 1.306562965 * j + V,
                                    J = .707106781 * (z = M + R),
                                    W = I + J,
                                    Y = I - J;
                                t[h + 40] = Y + X, t[h + 24] = Y - X, t[h + 8] = W + G, t[h + 56] = W - G, h++
                            }
                            for (l = 0; l < 64; ++l) u = t[l] * e[l], f[l] = 0 < u ? u + .5 | 0 : u - .5 | 0;
                            return f
                        }(t, e), c = 0; c < 64; ++c) d[C[c]] = a[c];
                    var l = d[0] - A;
                    A = d[0], 0 == l ? S(r[0]) : (S(r[h[i = 32767 + l]]), S(u[i]));
                    for (var p = 63; 0 < p && 0 == d[p]; p--);
                    if (0 == p) return S(o), A;
                    for (var g, B = 1; B <= p;) {
                        for (var w = B; 0 == d[B] && B <= p; ++B);
                        var m = B - w;
                        if (16 <= m) {
                            g = m >> 4;
                            for (var y = 1; y <= g; ++y) S(s);
                            m &= 15
                        }
                        i = 32767 + d[B], S(n[(m << 4) + h[i]]), S(u[i]), B++
                    }
                    return 63 != p && S(o), A
                }

                function O(t) {
                    t <= 0 && (t = 1), 100 < t && (t = 100), i != t && (function(t) {
                        for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], A = 0; A < 64; A++) {
                            var r = o((e[A] * t + 50) / 100);
                            r < 1 ? r = 1 : 255 < r && (r = 255), s[C[A]] = r
                        }
                        for (var n = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], i = 0; i < 64; i++) {
                            var u = o((n[i] * t + 50) / 100);
                            u < 1 ? u = 1 : 255 < u && (u = 255), a[C[i]] = u
                        }
                        for (var h = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], f = 0, d = 0; d < 8; d++)
                            for (var p = 0; p < 8; p++) c[f] = 1 / (s[C[f]] * h[d] * h[p] * 8), l[f] = 1 / (a[C[f]] * h[d] * h[p] * 8), f++
                    }(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)), i = t)
                }
                this.encode = function(t, i) {
                        var o, u;
                        (new Date).getTime(), i && O(i), p = new Array, g = 0, B = 7, T(65496), T(65504), T(16), I(74), I(70), I(73), I(70), I(0), I(1), I(1), I(0), T(1), T(1), I(0), I(0),
                            function() {
                                T(65499), T(132), I(0);
                                for (var t = 0; t < 64; t++) I(s[t]);
                                I(1);
                                for (var e = 0; e < 64; e++) I(a[e])
                            }(), o = t.width, u = t.height, T(65472), T(17), I(8), T(u), T(o), I(3), I(1), I(17), I(0), I(2), I(17), I(1), I(3), I(17), I(1),
                            function() {
                                T(65476), T(418), I(0);
                                for (var t = 0; t < 16; t++) I(Q[t + 1]);
                                for (var e = 0; e <= 11; e++) I(F[e]);
                                I(16);
                                for (var A = 0; A < 16; A++) I(U[A + 1]);
                                for (var r = 0; r <= 161; r++) I(E[r]);
                                I(1);
                                for (var n = 0; n < 16; n++) I(N[n + 1]);
                                for (var i = 0; i <= 11; i++) I(L[i]);
                                I(17);
                                for (var o = 0; o < 16; o++) I(x[o + 1]);
                                for (var s = 0; s <= 161; s++) I(_[s])
                            }(), T(65498), T(12), I(3), I(1), I(0), I(2), I(17), I(3), I(17), I(0), I(63), I(0);
                        var h = 0,
                            f = 0,
                            d = 0;
                        g = 0, B = 7, this.encode.displayName = "_encode_";
                        for (var v, C, H, M, P, K, D, k, z, j = t.data, q = t.width, V = t.height, X = 4 * q, G = 0; G < V;) {
                            for (v = 0; v < X;) {
                                for (K = P = X * G + v, D = -1, z = k = 0; z < 64; z++) K = P + (k = z >> 3) * X + (D = 4 * (7 & z)), V <= G + k && (K -= X * (G + 1 + k - V)), X <= v + D && (K -= v + D - X + 4), C = j[K++], H = j[K++], M = j[K++], w[z] = (b[C] + b[H + 256 >> 0] + b[M + 512 >> 0] >> 16) - 128, m[z] = (b[C + 768 >> 0] + b[H + 1024 >> 0] + b[M + 1280 >> 0] >> 16) - 128, y[z] = (b[C + 1280 >> 0] + b[H + 1536 >> 0] + b[M + 1792 >> 0] >> 16) - 128;
                                h = R(w, c, h, e, r), f = R(m, l, f, A, n), d = R(y, l, d, A, n), v += 32
                            }
                            G += 8
                        }
                        if (0 <= B) {
                            var J = [];
                            J[1] = B + 1, J[0] = (1 << B + 1) - 1, S(J)
                        }
                        return T(65497), new Uint8Array(p)
                    }, (new Date).getTime(), t || (t = 50),
                    function() { for (var t = String.fromCharCode, e = 0; e < 256; e++) v[e] = t(e) }(), e = H(Q, F), A = H(N, L), r = H(U, E), n = H(x, _),
                    function() {
                        for (var t = 1, e = 2, A = 1; A <= 15; A++) {
                            for (var r = t; r < e; r++) h[32767 + r] = A, u[32767 + r] = [], u[32767 + r][1] = A, u[32767 + r][0] = r;
                            for (var n = -(e - 1); n <= -t; n++) h[32767 + n] = A, u[32767 + n] = [], u[32767 + n][1] = A, u[32767 + n][0] = e - 1 + n;
                            t <<= 1, e <<= 1
                        }
                    }(),
                    function() { for (var t = 0; t < 256; t++) b[t] = 19595 * t, b[t + 256 >> 0] = 38470 * t, b[t + 512 >> 0] = 7471 * t + 32768, b[t + 768 >> 0] = -11059 * t, b[t + 1024 >> 0] = -21709 * t, b[t + 1280 >> 0] = 32768 * t + 8421375, b[t + 1536 >> 0] = -27439 * t, b[t + 1792 >> 0] = -5329 * t }(), O(t), (new Date).getTime()
            }

            function It(t, e) {
                if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
                this.parseHeader(), this.parseBGR()
            }
            window.tmp = _t, dt.API.adler32cs = (yt = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array, vt = null, bt = function() { if (!yt) return function() { return !1 }; try { var t = {}; "function" == typeof t.Buffer && (vt = t.Buffer) } catch (t) {} return function(t) { return t instanceof ArrayBuffer || null !== vt && t instanceof vt } }(), Ct = null !== vt ? function(t) { return new vt(t, "utf8").toString("binary") } : function(t) { return unescape(encodeURIComponent(t)) }, Qt = function(t, e) { for (var A = 65535 & t, r = t >>> 16, n = 0, i = e.length; n < i; n++) A = (A + (255 & e.charCodeAt(n))) % 65521, r = (r + A) % 65521; return (r << 16 | A) >>> 0 }, Ft = function(t, e) { for (var A = 65535 & t, r = t >>> 16, n = 0, i = e.length; n < i; n++) A = (A + e[n]) % 65521, r = (r + A) % 65521; return (r << 16 | A) >>> 0 }, Et = (Ut = {}).Adler32 = (((mt = (wt = function(t) {
                    if (!(this instanceof wt)) throw new TypeError("Constructor cannot called be as a function.");
                    if (!isFinite(t = null == t ? 1 : +t)) throw new Error("First arguments needs to be a finite number.");
                    this.checksum = t >>> 0
                }).prototype = {}).constructor = wt).from = ((pt = function(t) {
                    if (!(this instanceof wt)) throw new TypeError("Constructor cannot called be as a function.");
                    if (null == t) throw new Error("First argument needs to be a string.");
                    this.checksum = Qt(1, t.toString())
                }).prototype = mt, pt), wt.fromUtf8 = ((gt = function(t) {
                    if (!(this instanceof wt)) throw new TypeError("Constructor cannot called be as a function.");
                    if (null == t) throw new Error("First argument needs to be a string.");
                    var e = Ct(t.toString());
                    this.checksum = Qt(1, e)
                }).prototype = mt, gt), yt && (wt.fromBuffer = ((Bt = function(t) { if (!(this instanceof wt)) throw new TypeError("Constructor cannot called be as a function."); if (!bt(t)) throw new Error("First argument needs to be ArrayBuffer."); var e = new Uint8Array(t); return this.checksum = Ft(1, e) }).prototype = mt, Bt)), mt.update = function(t) { if (null == t) throw new Error("First argument needs to be a string."); return t = t.toString(), this.checksum = Qt(this.checksum, t) }, mt.updateUtf8 = function(t) { if (null == t) throw new Error("First argument needs to be a string."); var e = Ct(t.toString()); return this.checksum = Qt(this.checksum, e) }, yt && (mt.updateBuffer = function(t) { if (!bt(t)) throw new Error("First argument needs to be ArrayBuffer."); var e = new Uint8Array(t); return this.checksum = Ft(this.checksum, e) }), mt.clone = function() { return new Et(this.checksum) }, wt), Ut.from = function(t) { if (null == t) throw new Error("First argument needs to be a string."); return Qt(1, t.toString()) }, Ut.fromUtf8 = function(t) { if (null == t) throw new Error("First argument needs to be a string."); var e = Ct(t.toString()); return Qt(1, e) }, yt && (Ut.fromBuffer = function(t) { if (!bt(t)) throw new Error("First argument need to be ArrayBuffer."); var e = new Uint8Array(t); return Ft(1, e) }), Ut),
                function(t) {
                    t.__bidiEngine__ = t.prototype.__bidiEngine__ = function(t) {
                        var A, r, n, i, o, s, a, c = e,
                            l = [
                                [0, 3, 0, 1, 0, 0, 0],
                                [0, 3, 0, 1, 2, 2, 0],
                                [0, 3, 0, 17, 2, 0, 1],
                                [0, 3, 5, 5, 4, 1, 0],
                                [0, 3, 21, 21, 4, 0, 1],
                                [0, 3, 5, 5, 4, 2, 0]
                            ],
                            u = [
                                [2, 0, 1, 1, 0, 1, 0],
                                [2, 0, 1, 1, 0, 2, 0],
                                [2, 0, 2, 1, 3, 2, 0],
                                [2, 0, 2, 33, 3, 1, 1]
                            ],
                            h = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
                            f = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
                            d = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"],
                            p = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
                            g = !1,
                            B = 0;
                        this.__bidiEngine__ = {};
                        var w = function(t) {
                                var e = t.charCodeAt(),
                                    A = e >> 8,
                                    r = f[A];
                                return void 0 !== r ? c[256 * r + (255 & e)] : 252 === A || 253 === A ? "AL" : p.test(A) ? "L" : 8 === A ? "R" : "N"
                            },
                            m = function(t) { for (var e, A = 0; A < t.length; A++) { if ("L" === (e = w(t.charAt(A)))) return !1; if ("R" === e) return !0 } return !1 },
                            y = function(t, e, o, s) {
                                var a, c, l, u, h = e[s];
                                switch (h) {
                                    case "L":
                                    case "R":
                                        g = !1;
                                        break;
                                    case "N":
                                    case "AN":
                                        break;
                                    case "EN":
                                        g && (h = "AN");
                                        break;
                                    case "AL":
                                        g = !0, h = "R";
                                        break;
                                    case "WS":
                                        h = "N";
                                        break;
                                    case "CS":
                                        s < 1 || s + 1 >= e.length || "EN" !== (a = o[s - 1]) && "AN" !== a || "EN" !== (c = e[s + 1]) && "AN" !== c ? h = "N" : g && (c = "AN"), h = c === a ? c : "N";
                                        break;
                                    case "ES":
                                        h = "EN" === (a = 0 < s ? o[s - 1] : "B") && s + 1 < e.length && "EN" === e[s + 1] ? "EN" : "N";
                                        break;
                                    case "ET":
                                        if (0 < s && "EN" === o[s - 1]) { h = "EN"; break }
                                        if (g) { h = "N"; break }
                                        for (l = s + 1, u = e.length; l < u && "ET" === e[l];) l++;
                                        h = l < u && "EN" === e[l] ? "EN" : "N";
                                        break;
                                    case "NSM":
                                        if (n && !i) {
                                            for (u = e.length, l = s + 1; l < u && "NSM" === e[l];) l++;
                                            if (l < u) {
                                                var f = t[s],
                                                    d = 1425 <= f && f <= 2303 || 64286 === f;
                                                if (a = e[l], d && ("R" === a || "AL" === a)) { h = "R"; break }
                                            }
                                        }
                                        h = s < 1 || "B" === (a = e[s - 1]) ? "N" : o[s - 1];
                                        break;
                                    case "B":
                                        A = !(g = !1), h = B;
                                        break;
                                    case "S":
                                        r = !0, h = "N";
                                        break;
                                    case "LRE":
                                    case "RLE":
                                    case "LRO":
                                    case "RLO":
                                    case "PDF":
                                        g = !1;
                                        break;
                                    case "BN":
                                        h = "N"
                                }
                                return h
                            },
                            v = function(t, e, A) { var r = t.split(""); return A && b(r, A, { hiLevel: B }), r.reverse(), e && e.reverse(), r.join("") },
                            b = function(t, e, n) {
                                var i, o, s, a, c, f = -1,
                                    d = t.length,
                                    p = 0,
                                    m = [],
                                    v = B ? u : l,
                                    b = [];
                                for (r = A = g = !1, o = 0; o < d; o++) b[o] = w(t[o]);
                                for (s = 0; s < d; s++) {
                                    if (c = p, m[s] = y(t, b, m, s), i = 240 & (p = v[c][h[m[s]]]), p &= 15, e[s] = a = v[p][5], 0 < i)
                                        if (16 === i) {
                                            for (o = f; o < s; o++) e[o] = 1;
                                            f = -1
                                        } else f = -1;
                                    if (v[p][6]) - 1 === f && (f = s);
                                    else if (-1 < f) {
                                        for (o = f; o < s; o++) e[o] = a;
                                        f = -1
                                    }
                                    "B" === b[s] && (e[s] = 0), n.hiLevel |= a
                                }
                                r && function(t, e, A) {
                                    for (var r = 0; r < A; r++)
                                        if ("S" === t[r]) { e[r] = B; for (var n = r - 1; 0 <= n && "WS" === t[n]; n--) e[n] = B }
                                }(b, e, d)
                            },
                            C = function(t, e, r, n, i) {
                                if (!(i.hiLevel < t)) {
                                    if (1 === t && 1 === B && !A) return e.reverse(), void(r && r.reverse());
                                    for (var o, s, a, c, l = e.length, u = 0; u < l;) {
                                        if (n[u] >= t) {
                                            for (a = u + 1; a < l && n[a] >= t;) a++;
                                            for (c = u, s = a - 1; c < s; c++, s--) o = e[c], e[c] = e[s], e[s] = o, r && (o = r[c], r[c] = r[s], r[s] = o);
                                            u = a
                                        }
                                        u++
                                    }
                                }
                            },
                            Q = function(t, e, A) {
                                var r = t.split(""),
                                    n = { hiLevel: B };
                                return A || (A = []), b(r, A, n),
                                    function(t, e, A) {
                                        if (0 !== A.hiLevel && a)
                                            for (var r, n = 0; n < t.length; n++) 1 === e[n] && 0 <= (r = d.indexOf(t[n])) && (t[n] = d[r + 1])
                                    }(r, A, n), C(2, r, e, A, n), C(1, r, e, A, n), r.join("")
                            };
                        return this.__bidiEngine__.doBidiReorder = function(t, e, A) {
                            if (function(t, e) {
                                    if (e)
                                        for (var A = 0; A < t.length; A++) e[A] = A;
                                    void 0 === i && (i = m(t)), void 0 === s && (s = m(t))
                                }(t, e), n || !o || s)
                                if (n && o && i ^ s) B = i ? 1 : 0, t = v(t, e, A);
                                else if (!n && o && s) B = i ? 1 : 0, t = Q(t, e, A), t = v(t, e);
                            else if (!n || i || o || s) {
                                if (n && !o && i ^ s) t = v(t, e), t = i ? (B = 0, Q(t, e, A)) : (B = 1, t = Q(t, e, A), v(t, e));
                                else if (n && i && !o && s) B = 1, t = Q(t, e, A), t = v(t, e);
                                else if (!n && !o && i ^ s) {
                                    var r = a;
                                    i ? (B = 1, t = Q(t, e, A), B = 0, a = !1, t = Q(t, e, A), a = r) : (B = 0, t = Q(t, e, A), t = v(t, e), a = !(B = 1), t = Q(t, e, A), a = r, t = v(t, e))
                                }
                            } else B = 0, t = Q(t, e, A);
                            else B = i ? 1 : 0, t = Q(t, e, A);
                            return t
                        }, this.__bidiEngine__.setOptions = function(t) { t && (n = t.isInputVisual, o = t.isOutputVisual, i = t.isInputRtl, s = t.isOutputRtl, a = t.isSymmetricSwapping) }, this.__bidiEngine__.setOptions(t), this.__bidiEngine__
                    };
                    var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
                        A = new t.__bidiEngine__({ isInputVisual: !0 });
                    t.API.events.push(["postProcessText", function(t) {
                        var e = t.text,
                            r = (t.x, t.y, t.options || {}),
                            n = (t.mutex, r.lang, []);
                        if ("[object Array]" === Object.prototype.toString.call(e)) {
                            var i = 0;
                            for (n = [], i = 0; i < e.length; i += 1) "[object Array]" === Object.prototype.toString.call(e[i]) ? n.push([A.doBidiReorder(e[i][0]), e[i][1], e[i][2]]) : n.push([A.doBidiReorder(e[i])]);
                            t.text = n
                        } else t.text = A.doBidiReorder(e)
                    }])
                }(dt), window.tmp = St, It.prototype.parseHeader = function() {
                    if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
                        var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
                        this.palette = new Array(t);
                        for (var e = 0; e < t; e++) {
                            var A = this.datav.getUint8(this.pos++, !0),
                                r = this.datav.getUint8(this.pos++, !0),
                                n = this.datav.getUint8(this.pos++, !0),
                                i = this.datav.getUint8(this.pos++, !0);
                            this.palette[e] = { red: n, green: r, blue: A, quad: i }
                        }
                    }
                    this.height < 0 && (this.height *= -1, this.bottom_up = !1)
                }, It.prototype.parseBGR = function() {
                    this.pos = this.offset;
                    try {
                        var t = "bit" + this.bitPP,
                            e = this.width * this.height * 4;
                        this.data = new Uint8Array(e), this[t]()
                    } catch (t) { console.log("bit decode error:" + t) }
                }, It.prototype.bit1 = function() {
                    var t = Math.ceil(this.width / 8),
                        e = t % 4,
                        A = 0 <= this.height ? this.height - 1 : -this.height;
                    for (A = this.height - 1; 0 <= A; A--) {
                        for (var r = this.bottom_up ? A : this.height - 1 - A, n = 0; n < t; n++)
                            for (var i = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 8 * n * 4, s = 0; s < 8 && 8 * n + s < this.width; s++) {
                                var a = this.palette[i >> 7 - s & 1];
                                this.data[o + 4 * s] = a.blue, this.data[o + 4 * s + 1] = a.green, this.data[o + 4 * s + 2] = a.red, this.data[o + 4 * s + 3] = 255
                            }
                        0 != e && (this.pos += 4 - e)
                    }
                }, It.prototype.bit4 = function() {
                    for (var t = Math.ceil(this.width / 2), e = t % 4, A = this.height - 1; 0 <= A; A--) {
                        for (var r = this.bottom_up ? A : this.height - 1 - A, n = 0; n < t; n++) {
                            var i = this.datav.getUint8(this.pos++, !0),
                                o = r * this.width * 4 + 2 * n * 4,
                                s = i >> 4,
                                a = 15 & i,
                                c = this.palette[s];
                            if (this.data[o] = c.blue, this.data[o + 1] = c.green, this.data[o + 2] = c.red, this.data[o + 3] = 255, 2 * n + 1 >= this.width) break;
                            c = this.palette[a], this.data[o + 4] = c.blue, this.data[o + 4 + 1] = c.green, this.data[o + 4 + 2] = c.red, this.data[o + 4 + 3] = 255
                        }
                        0 != e && (this.pos += 4 - e)
                    }
                }, It.prototype.bit8 = function() {
                    for (var t = this.width % 4, e = this.height - 1; 0 <= e; e--) {
                        for (var A = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
                            var n = this.datav.getUint8(this.pos++, !0),
                                i = A * this.width * 4 + 4 * r;
                            if (n < this.palette.length) {
                                var o = this.palette[n];
                                this.data[i] = o.red, this.data[i + 1] = o.green, this.data[i + 2] = o.blue, this.data[i + 3] = 255
                            } else this.data[i] = 255, this.data[i + 1] = 255, this.data[i + 2] = 255, this.data[i + 3] = 255
                        }
                        0 != t && (this.pos += 4 - t)
                    }
                }, It.prototype.bit15 = function() {
                    for (var t = this.width % 3, e = parseInt("11111", 2), A = this.height - 1; 0 <= A; A--) {
                        for (var r = this.bottom_up ? A : this.height - 1 - A, n = 0; n < this.width; n++) {
                            var i = this.datav.getUint16(this.pos, !0);
                            this.pos += 2;
                            var o = (i & e) / e * 255 | 0,
                                s = (i >> 5 & e) / e * 255 | 0,
                                a = (i >> 10 & e) / e * 255 | 0,
                                c = i >> 15 ? 255 : 0,
                                l = r * this.width * 4 + 4 * n;
                            this.data[l] = a, this.data[l + 1] = s, this.data[l + 2] = o, this.data[l + 3] = c
                        }
                        this.pos += t
                    }
                }, It.prototype.bit16 = function() {
                    for (var t = this.width % 3, e = parseInt("11111", 2), A = parseInt("111111", 2), r = this.height - 1; 0 <= r; r--) {
                        for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < this.width; i++) {
                            var o = this.datav.getUint16(this.pos, !0);
                            this.pos += 2;
                            var s = (o & e) / e * 255 | 0,
                                a = (o >> 5 & A) / A * 255 | 0,
                                c = (o >> 11) / e * 255 | 0,
                                l = n * this.width * 4 + 4 * i;
                            this.data[l] = c, this.data[l + 1] = a, this.data[l + 2] = s, this.data[l + 3] = 255
                        }
                        this.pos += t
                    }
                }, It.prototype.bit24 = function() {
                    for (var t = this.height - 1; 0 <= t; t--) {
                        for (var e = this.bottom_up ? t : this.height - 1 - t, A = 0; A < this.width; A++) {
                            var r = this.datav.getUint8(this.pos++, !0),
                                n = this.datav.getUint8(this.pos++, !0),
                                i = this.datav.getUint8(this.pos++, !0),
                                o = e * this.width * 4 + 4 * A;
                            this.data[o] = i, this.data[o + 1] = n, this.data[o + 2] = r, this.data[o + 3] = 255
                        }
                        this.pos += this.width % 4
                    }
                }, It.prototype.bit32 = function() {
                    for (var t = this.height - 1; 0 <= t; t--)
                        for (var e = this.bottom_up ? t : this.height - 1 - t, A = 0; A < this.width; A++) {
                            var r = this.datav.getUint8(this.pos++, !0),
                                n = this.datav.getUint8(this.pos++, !0),
                                i = this.datav.getUint8(this.pos++, !0),
                                o = this.datav.getUint8(this.pos++, !0),
                                s = e * this.width * 4 + 4 * A;
                            this.data[s] = i, this.data[s + 1] = n, this.data[s + 2] = r, this.data[s + 3] = o
                        }
                }, It.prototype.getData = function() { return this.data }, window.tmp = It,
                function(t) {
                    var e = 15,
                        A = 573,
                        r = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];

                    function n() {
                        var t = this;

                        function r(t, e) { for (var A = 0; A |= 1 & t, t >>>= 1, A <<= 1, 0 < --e;); return A >>> 1 }
                        t.build_tree = function(n) {
                            var i, o, s, a = t.dyn_tree,
                                c = t.stat_desc.static_tree,
                                l = t.stat_desc.elems,
                                u = -1;
                            for (n.heap_len = 0, n.heap_max = A, i = 0; i < l; i++) 0 !== a[2 * i] ? (n.heap[++n.heap_len] = u = i, n.depth[i] = 0) : a[2 * i + 1] = 0;
                            for (; n.heap_len < 2;) a[2 * (s = n.heap[++n.heap_len] = u < 2 ? ++u : 0)] = 1, n.depth[s] = 0, n.opt_len--, c && (n.static_len -= c[2 * s + 1]);
                            for (t.max_code = u, i = Math.floor(n.heap_len / 2); 1 <= i; i--) n.pqdownheap(a, i);
                            for (s = l; i = n.heap[1], n.heap[1] = n.heap[n.heap_len--], n.pqdownheap(a, 1), o = n.heap[1], n.heap[--n.heap_max] = i, n.heap[--n.heap_max] = o, a[2 * s] = a[2 * i] + a[2 * o], n.depth[s] = Math.max(n.depth[i], n.depth[o]) + 1, a[2 * i + 1] = a[2 * o + 1] = s, n.heap[1] = s++, n.pqdownheap(a, 1), 2 <= n.heap_len;);
                            n.heap[--n.heap_max] = n.heap[1],
                                function(r) {
                                    var n, i, o, s, a, c, l = t.dyn_tree,
                                        u = t.stat_desc.static_tree,
                                        h = t.stat_desc.extra_bits,
                                        f = t.stat_desc.extra_base,
                                        d = t.stat_desc.max_length,
                                        p = 0;
                                    for (s = 0; s <= e; s++) r.bl_count[s] = 0;
                                    for (l[2 * r.heap[r.heap_max] + 1] = 0, n = r.heap_max + 1; n < A; n++) d < (s = l[2 * l[2 * (i = r.heap[n]) + 1] + 1] + 1) && (s = d, p++), l[2 * i + 1] = s, i > t.max_code || (r.bl_count[s]++, a = 0, f <= i && (a = h[i - f]), c = l[2 * i], r.opt_len += c * (s + a), u && (r.static_len += c * (u[2 * i + 1] + a)));
                                    if (0 !== p) {
                                        do {
                                            for (s = d - 1; 0 === r.bl_count[s];) s--;
                                            r.bl_count[s]--, r.bl_count[s + 1] += 2, r.bl_count[d]--, p -= 2
                                        } while (0 < p);
                                        for (s = d; 0 !== s; s--)
                                            for (i = r.bl_count[s]; 0 !== i;)(o = r.heap[--n]) > t.max_code || (l[2 * o + 1] != s && (r.opt_len += (s - l[2 * o + 1]) * l[2 * o], l[2 * o + 1] = s), i--)
                                    }
                                }(n),
                                function(t, A, n) {
                                    var i, o, s, a = [],
                                        c = 0;
                                    for (i = 1; i <= e; i++) a[i] = c = c + n[i - 1] << 1;
                                    for (o = 0; o <= A; o++) 0 !== (s = t[2 * o + 1]) && (t[2 * o] = r(a[s]++, s))
                                }(a, t.max_code, n.bl_count)
                        }
                    }

                    function i(t, e, A, r, n) { this.static_tree = t, this.extra_bits = e, this.extra_base = A, this.elems = r, this.max_length = n }

                    function o(t, e, A, r, n) { this.good_length = t, this.max_lazy = e, this.nice_length = A, this.max_chain = r, this.func = n }
                    n._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], n.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], n.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], n.d_code = function(t) { return t < 256 ? r[t] : r[256 + (t >>> 7)] }, n.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], n.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], n.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], n.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], i.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], i.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], i.static_l_desc = new i(i.static_ltree, n.extra_lbits, 257, 286, e), i.static_d_desc = new i(i.static_dtree, n.extra_dbits, 0, 30, e), i.static_bl_desc = new i(null, n.extra_blbits, 0, 19, 7);
                    var s = [new o(0, 0, 0, 0, 0), new o(4, 4, 8, 4, 1), new o(4, 5, 16, 8, 1), new o(4, 6, 32, 32, 1), new o(4, 4, 16, 16, 2), new o(8, 16, 32, 32, 2), new o(8, 16, 128, 128, 2), new o(8, 32, 128, 256, 2), new o(32, 128, 258, 1024, 2), new o(32, 258, 258, 4096, 2)],
                        a = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""];

                    function c(t, e, A, r) {
                        var n = t[2 * e],
                            i = t[2 * A];
                        return n < i || n == i && r[e] <= r[A]
                    }

                    function l() {
                        var t, e, A, r, o, l, u, h, f, d, p, g, B, w, m, y, v, b, C, Q, F, U, E, N, L, x, _, H, S, I, T, R, O, M, P, K, D, k, z, j, q, V = this,
                            X = new n,
                            G = new n,
                            J = new n;

                        function W() {
                            var t;
                            for (t = 0; t < 286; t++) T[2 * t] = 0;
                            for (t = 0; t < 30; t++) R[2 * t] = 0;
                            for (t = 0; t < 19; t++) O[2 * t] = 0;
                            T[512] = 1, V.opt_len = V.static_len = 0, K = k = 0
                        }

                        function Y(t, e) {
                            var A, r, n = -1,
                                i = t[1],
                                o = 0,
                                s = 7,
                                a = 4;
                            for (0 === i && (s = 138, a = 3), t[2 * (e + 1) + 1] = 65535, A = 0; A <= e; A++) r = i, i = t[2 * (A + 1) + 1], ++o < s && r == i || (o < a ? O[2 * r] += o : 0 !== r ? (r != n && O[2 * r]++, O[32]++) : o <= 10 ? O[34]++ : O[36]++, n = r, a = (o = 0) === i ? (s = 138, 3) : r == i ? (s = 6, 3) : (s = 7, 4))
                        }

                        function Z(t) { V.pending_buf[V.pending++] = t }

                        function $(t) { Z(255 & t), Z(t >>> 8 & 255) }

                        function tt(t, e) {
                            var A, r = e;
                            16 - r < q ? ($(j |= (A = t) << q & 65535), j = A >>> 16 - q, q += r - 16) : (j |= t << q & 65535, q += r)
                        }

                        function et(t, e) {
                            var A = 2 * t;
                            tt(65535 & e[A], 65535 & e[A + 1])
                        }

                        function At(t, e) {
                            var A, r, n = -1,
                                i = t[1],
                                o = 0,
                                s = 7,
                                a = 4;
                            for (0 === i && (s = 138, a = 3), A = 0; A <= e; A++)
                                if (r = i, i = t[2 * (A + 1) + 1], !(++o < s && r == i)) {
                                    if (o < a)
                                        for (; et(r, O), 0 != --o;);
                                    else 0 !== r ? (r != n && (et(r, O), o--), et(16, O), tt(o - 3, 2)) : o <= 10 ? (et(17, O), tt(o - 3, 3)) : (et(18, O), tt(o - 11, 7));
                                    n = r, a = (o = 0) === i ? (s = 138, 3) : r == i ? (s = 6, 3) : (s = 7, 4)
                                }
                        }

                        function rt() { 16 == q ? ($(j), q = j = 0) : 8 <= q && (Z(255 & j), j >>>= 8, q -= 8) }

                        function nt(t, e) { var A, r, i; if (V.pending_buf[D + 2 * K] = t >>> 8 & 255, V.pending_buf[D + 2 * K + 1] = 255 & t, V.pending_buf[M + K] = 255 & e, K++, 0 === t ? T[2 * e]++ : (k++, t--, T[2 * (n._length_code[e] + 256 + 1)]++, R[2 * n.d_code(t)]++), 0 == (8191 & K) && 2 < _) { for (A = 8 * K, r = F - v, i = 0; i < 30; i++) A += R[2 * i] * (5 + n.extra_dbits[i]); if (A >>>= 3, k < Math.floor(K / 2) && A < Math.floor(r / 2)) return !0 } return K == P - 1 }

                        function it(t, e) {
                            var A, r, i, o, s = 0;
                            if (0 !== K)
                                for (; A = V.pending_buf[D + 2 * s] << 8 & 65280 | 255 & V.pending_buf[D + 2 * s + 1], r = 255 & V.pending_buf[M + s], s++, 0 === A ? et(r, t) : (et((i = n._length_code[r]) + 256 + 1, t), 0 !== (o = n.extra_lbits[i]) && tt(r -= n.base_length[i], o), et(i = n.d_code(--A), e), 0 !== (o = n.extra_dbits[i]) && tt(A -= n.base_dist[i], o)), s < K;);
                            et(256, t), z = t[513]
                        }

                        function ot() { 8 < q ? $(j) : 0 < q && Z(255 & j), q = j = 0 }

                        function st(t, e, A) {
                            var r, n;
                            tt(0 + (A ? 1 : 0), 3), r = t, n = e, ot(), z = 8, $(n), $(~n), V.pending_buf.set(h.subarray(r, r + n), V.pending), V.pending += n
                        }

                        function at(e) {
                            (function(t, e, A) {
                                var r, o, s = 0;
                                0 < _ ? (X.build_tree(V), G.build_tree(V), s = function() { var t; for (Y(T, X.max_code), Y(R, G.max_code), J.build_tree(V), t = 18; 3 <= t && 0 === O[2 * n.bl_order[t] + 1]; t--); return V.opt_len += 3 * (t + 1) + 5 + 5 + 4, t }(), r = V.opt_len + 3 + 7 >>> 3, (o = V.static_len + 3 + 7 >>> 3) <= r && (r = o)) : r = o = e + 5, e + 4 <= r && -1 != t ? st(t, e, A) : o == r ? (tt(2 + (A ? 1 : 0), 3), it(i.static_ltree, i.static_dtree)) : (tt(4 + (A ? 1 : 0), 3), function(t, e, A) {
                                    var r;
                                    for (tt(t - 257, 5), tt(e - 1, 5), tt(A - 4, 4), r = 0; r < A; r++) tt(O[2 * n.bl_order[r] + 1], 3);
                                    At(T, t - 1), At(R, e - 1)
                                }(X.max_code + 1, G.max_code + 1, s + 1), it(T, R)), W(), A && ot()
                            })(0 <= v ? v : -1, F - v, e), v = F, t.flush_pending()
                        }

                        function ct() {
                            var e, A, r, n;
                            do {
                                if (0 == (n = f - E - F) && 0 === F && 0 === E) n = o;
                                else if (-1 == n) n--;
                                else if (o + o - 262 <= F) {
                                    for (h.set(h.subarray(o, o + o), 0), U -= o, F -= o, v -= o, r = e = B; A = 65535 & p[--r], p[r] = o <= A ? A - o : 0, 0 != --e;);
                                    for (r = e = o; A = 65535 & d[--r], d[r] = o <= A ? A - o : 0, 0 != --e;);
                                    n += o
                                }
                                if (0 === t.avail_in) return;
                                e = t.read_buf(h, F + E, n), 3 <= (E += e) && (g = ((g = 255 & h[F]) << y ^ 255 & h[F + 1]) & m)
                            } while (E < 262 && 0 !== t.avail_in)
                        }

                        function lt(t) {
                            var e, A, r = L,
                                n = F,
                                i = N,
                                s = o - 262 < F ? F - (o - 262) : 0,
                                a = I,
                                c = u,
                                l = F + 258,
                                f = h[n + i - 1],
                                p = h[n + i];
                            S <= N && (r >>= 2), E < a && (a = E);
                            do {
                                if (h[(e = t) + i] == p && h[e + i - 1] == f && h[e] == h[n] && h[++e] == h[n + 1]) {
                                    n += 2, e++;
                                    do {} while (h[++n] == h[++e] && h[++n] == h[++e] && h[++n] == h[++e] && h[++n] == h[++e] && h[++n] == h[++e] && h[++n] == h[++e] && h[++n] == h[++e] && h[++n] == h[++e] && n < l);
                                    if (A = 258 - (l - n), n = l - 258, i < A) {
                                        if (U = t, a <= (i = A)) break;
                                        f = h[n + i - 1], p = h[n + i]
                                    }
                                }
                            } while ((t = 65535 & d[t & c]) > s && 0 != --r);
                            return i <= E ? i : E
                        }

                        function ut(t) {
                            return t.total_in = t.total_out = 0, t.msg = null, V.pending = 0, V.pending_out = 0, e = 113, r = 0, X.dyn_tree = T, X.stat_desc = i.static_l_desc, G.dyn_tree = R, G.stat_desc = i.static_d_desc, J.dyn_tree = O, J.stat_desc = i.static_bl_desc, q = j = 0, z = 8, W(),
                                function() {
                                    var t;
                                    for (f = 2 * o, t = p[B - 1] = 0; t < B - 1; t++) p[t] = 0;
                                    x = s[_].max_lazy, S = s[_].good_length, I = s[_].nice_length, L = s[_].max_chain, b = N = 2, g = Q = E = v = F = 0
                                }(), 0
                        }
                        V.depth = [], V.bl_count = [], V.heap = [], T = [], R = [], O = [], V.pqdownheap = function(t, e) {
                            for (var A = V.heap, r = A[e], n = e << 1; n <= V.heap_len && (n < V.heap_len && c(t, A[n + 1], A[n], V.depth) && n++, !c(t, r, A[n], V.depth));) A[e] = A[n], e = n, n <<= 1;
                            A[e] = r
                        }, V.deflateInit = function(t, e, r, n, i, s) { return n || (n = 8), i || (i = 8), s || (s = 0), t.msg = null, -1 == e && (e = 6), i < 1 || 9 < i || 8 != n || r < 9 || 15 < r || e < 0 || 9 < e || s < 0 || 2 < s ? -2 : (t.dstate = V, u = (o = 1 << (l = r)) - 1, m = (B = 1 << (w = i + 7)) - 1, y = Math.floor((w + 3 - 1) / 3), h = new Uint8Array(2 * o), d = [], p = [], P = 1 << i + 6, V.pending_buf = new Uint8Array(4 * P), A = 4 * P, D = Math.floor(P / 2), M = 3 * P, _ = e, H = s, ut(t)) }, V.deflateEnd = function() { return 42 != e && 113 != e && 666 != e ? -2 : (V.pending_buf = null, h = d = p = null, V.dstate = null, 113 == e ? -3 : 0) }, V.deflateParams = function(t, e, A) { var r = 0; return -1 == e && (e = 6), e < 0 || 9 < e || A < 0 || 2 < A ? -2 : (s[_].func != s[e].func && 0 !== t.total_in && (r = t.deflate(1)), _ != e && (x = s[_ = e].max_lazy, S = s[_].good_length, I = s[_].nice_length, L = s[_].max_chain), H = A, r) }, V.deflateSetDictionary = function(t, A, r) {
                            var n, i = r,
                                s = 0;
                            if (!A || 42 != e) return -2;
                            if (i < 3) return 0;
                            for (o - 262 < i && (s = r - (i = o - 262)), h.set(A.subarray(s, s + i), 0), v = F = i, g = ((g = 255 & h[0]) << y ^ 255 & h[1]) & m, n = 0; n <= i - 3; n++) g = (g << y ^ 255 & h[n + 2]) & m, d[n & u] = p[g], p[g] = n;
                            return 0
                        }, V.deflate = function(n, c) {
                            var f, w, L, S, I, T;
                            if (4 < c || c < 0) return -2;
                            if (!n.next_out || !n.next_in && 0 !== n.avail_in || 666 == e && 4 != c) return n.msg = a[4], -2;
                            if (0 === n.avail_out) return n.msg = a[7], -5;
                            if (t = n, S = r, r = c, 42 == e && (w = 8 + (l - 8 << 4) << 8, 3 < (L = (_ - 1 & 255) >> 1) && (L = 3), w |= L << 6, 0 !== F && (w |= 32), e = 113, Z((T = w += 31 - w % 31) >> 8 & 255), Z(255 & T)), 0 !== V.pending) { if (t.flush_pending(), 0 === t.avail_out) return r = -1, 0 } else if (0 === t.avail_in && c <= S && 4 != c) return t.msg = a[7], -5;
                            if (666 == e && 0 !== t.avail_in) return n.msg = a[7], -5;
                            if (0 !== t.avail_in || 0 !== E || 0 != c && 666 != e) {
                                switch (I = -1, s[_].func) {
                                    case 0:
                                        I = function(e) { var r, n = 65535; for (A - 5 < n && (n = A - 5);;) { if (E <= 1) { if (ct(), 0 === E && 0 == e) return 0; if (0 === E) break } if (F += E, r = v + n, ((E = 0) === F || r <= F) && (E = F - r, F = r, at(!1), 0 === t.avail_out)) return 0; if (o - 262 <= F - v && (at(!1), 0 === t.avail_out)) return 0 } return at(4 == e), 0 === t.avail_out ? 4 == e ? 2 : 0 : 4 == e ? 3 : 1 }(c);
                                        break;
                                    case 1:
                                        I = function(e) {
                                            for (var A, r = 0;;) {
                                                if (E < 262) { if (ct(), E < 262 && 0 == e) return 0; if (0 === E) break }
                                                if (3 <= E && (g = (g << y ^ 255 & h[F + 2]) & m, r = 65535 & p[g], d[F & u] = p[g], p[g] = F), 0 !== r && (F - r & 65535) <= o - 262 && 2 != H && (b = lt(r)), 3 <= b)
                                                    if (A = nt(F - U, b - 3), E -= b, b <= x && 3 <= E) {
                                                        for (b--; g = (g << y ^ 255 & h[++F + 2]) & m, r = 65535 & p[g], d[F & u] = p[g], p[g] = F, 0 != --b;);
                                                        F++
                                                    } else F += b, b = 0, g = ((g = 255 & h[F]) << y ^ 255 & h[F + 1]) & m;
                                                else A = nt(0, 255 & h[F]), E--, F++;
                                                if (A && (at(!1), 0 === t.avail_out)) return 0
                                            }
                                            return at(4 == e), 0 === t.avail_out ? 4 == e ? 2 : 0 : 4 == e ? 3 : 1
                                        }(c);
                                        break;
                                    case 2:
                                        I = function(e) { for (var A, r, n = 0;;) { if (E < 262) { if (ct(), E < 262 && 0 == e) return 0; if (0 === E) break } if (3 <= E && (g = (g << y ^ 255 & h[F + 2]) & m, n = 65535 & p[g], d[F & u] = p[g], p[g] = F), N = b, C = U, b = 2, 0 !== n && N < x && (F - n & 65535) <= o - 262 && (2 != H && (b = lt(n)), b <= 5 && (1 == H || 3 == b && 4096 < F - U) && (b = 2)), 3 <= N && b <= N) { for (r = F + E - 3, A = nt(F - 1 - C, N - 3), E -= N - 1, N -= 2; ++F <= r && (g = (g << y ^ 255 & h[F + 2]) & m, n = 65535 & p[g], d[F & u] = p[g], p[g] = F), 0 != --N;); if (Q = 0, b = 2, F++, A && (at(!1), 0 === t.avail_out)) return 0 } else if (0 !== Q) { if ((A = nt(0, 255 & h[F - 1])) && at(!1), F++, E--, 0 === t.avail_out) return 0 } else Q = 1, F++, E-- } return 0 !== Q && (A = nt(0, 255 & h[F - 1]), Q = 0), at(4 == e), 0 === t.avail_out ? 4 == e ? 2 : 0 : 4 == e ? 3 : 1 }(c)
                                }
                                if (2 != I && 3 != I || (e = 666), 0 == I || 2 == I) return 0 === t.avail_out && (r = -1), 0;
                                if (1 == I) {
                                    if (1 == c) tt(2, 3), et(256, i.static_ltree), rt(), 1 + z + 10 - q < 9 && (tt(2, 3), et(256, i.static_ltree), rt()), z = 7;
                                    else if (st(0, 0, !1), 3 == c)
                                        for (f = 0; f < B; f++) p[f] = 0;
                                    if (t.flush_pending(), 0 === t.avail_out) return r = -1, 0
                                }
                            }
                            return 4 != c ? 0 : 1
                        }
                    }

                    function u() { this.next_in_index = 0, this.next_out_index = 0, this.avail_in = 0, this.total_in = 0, this.avail_out = 0, this.total_out = 0 }
                    u.prototype = {
                        deflateInit: function(t, A) { return this.dstate = new l, A || (A = e), this.dstate.deflateInit(this, t, A) },
                        deflate: function(t) { return this.dstate ? this.dstate.deflate(this, t) : -2 },
                        deflateEnd: function() { if (!this.dstate) return -2; var t = this.dstate.deflateEnd(); return this.dstate = null, t },
                        deflateParams: function(t, e) { return this.dstate ? this.dstate.deflateParams(this, t, e) : -2 },
                        deflateSetDictionary: function(t, e) { return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : -2 },
                        read_buf: function(t, e, A) { var r = this.avail_in; return A < r && (r = A), 0 === r ? 0 : (this.avail_in -= r, t.set(this.next_in.subarray(this.next_in_index, this.next_in_index + r), e), this.next_in_index += r, this.total_in += r, r) },
                        flush_pending: function() {
                            var t = this,
                                e = t.dstate.pending;
                            e > t.avail_out && (e = t.avail_out), 0 !== e && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + e), t.next_out_index), t.next_out_index += e, t.dstate.pending_out += e, t.total_out += e, t.avail_out -= e, t.dstate.pending -= e, 0 === t.dstate.pending && (t.dstate.pending_out = 0))
                        }
                    };
                    var h = t.zip || t;
                    h.Deflater = h._jzlib_Deflater = function(t) {
                        var e = new u,
                            A = new Uint8Array(512),
                            r = t ? t.level : -1;
                        void 0 === r && (r = -1), e.deflateInit(r), e.next_out = A, this.append = function(t, r) {
                            var n, i = [],
                                o = 0,
                                s = 0,
                                a = 0;
                            if (t.length) {
                                e.next_in_index = 0, e.next_in = t, e.avail_in = t.length;
                                do {
                                    if (e.next_out_index = 0, e.avail_out = 512, 0 != e.deflate(0)) throw new Error("deflating: " + e.msg);
                                    e.next_out_index && (512 == e.next_out_index ? i.push(new Uint8Array(A)) : i.push(new Uint8Array(A.subarray(0, e.next_out_index)))), a += e.next_out_index, r && 0 < e.next_in_index && e.next_in_index != o && (r(e.next_in_index), o = e.next_in_index)
                                } while (0 < e.avail_in || 0 === e.avail_out);
                                return n = new Uint8Array(a), i.forEach(function(t) { n.set(t, s), s += t.length }), n
                            }
                        }, this.flush = function() {
                            var t, r, n = [],
                                i = 0,
                                o = 0;
                            do {
                                if (e.next_out_index = 0, e.avail_out = 512, 1 != (t = e.deflate(4)) && 0 != t) throw new Error("deflating: " + e.msg);
                                0 < 512 - e.avail_out && n.push(new Uint8Array(A.subarray(0, e.next_out_index))), o += e.next_out_index
                            } while (0 < e.avail_in || 0 === e.avail_out);
                            return e.deflateEnd(), r = new Uint8Array(o), n.forEach(function(t) { r.set(t, i), i += t.length }), r
                        }
                    }
                }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")()), ("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")()).RGBColor = function(t) {
                    var e;
                    t = t || "", this.ok = !1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = (t = t.replace(/ /g, "")).toLowerCase();
                    var A = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" };
                    for (var r in A) t == r && (t = A[r]);
                    for (var n = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(t) { return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])] } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }], i = 0; i < n.length; i++) {
                        var o = n[i].re,
                            s = n[i].process,
                            a = o.exec(t);
                        a && (e = s(a), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0)
                    }
                    this.r = this.r < 0 || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b, this.toRGB = function() { return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")" }, this.toHex = function() {
                        var t = this.r.toString(16),
                            e = this.g.toString(16),
                            A = this.b.toString(16);
                        return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == A.length && (A = "0" + A), "#" + t + e + A
                    }
                },
                function(t) {
                    var e = "+".charCodeAt(0),
                        A = "/".charCodeAt(0),
                        r = "0".charCodeAt(0),
                        n = "a".charCodeAt(0),
                        i = "A".charCodeAt(0),
                        o = "-".charCodeAt(0),
                        s = "_".charCodeAt(0),
                        a = function(t) { var a = t.charCodeAt(0); return a === e || a === o ? 62 : a === A || a === s ? 63 : a < r ? -1 : a < r + 10 ? a - r + 26 + 26 : a < i + 26 ? a - i : a < n + 26 ? a - n + 26 : void 0 };
                    t.API.TTFFont = function() {
                        function t(t, e, A) {
                            var r;
                            if (this.rawData = t, r = this.contents = new l(t), this.contents.pos = 4, "ttcf" === r.readString(4)) { if (!e) throw new Error("Must specify a font name for TTC files."); throw new Error("Font " + e + " not found in TTC file.") }
                            r.pos = 0, this.parse(), this.subset = new L(this), this.registerTTF()
                        }
                        return t.open = function(e, A, r, n) {
                            if ("string" != typeof r) throw new Error("Invalid argument supplied in TTFFont.open");
                            return new t(function(t) {
                                var e, A, r, n, i, o;
                                if (0 < t.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                                var s = t.length;
                                i = "=" === t.charAt(s - 2) ? 2 : "=" === t.charAt(s - 1) ? 1 : 0, o = new Uint8Array(3 * t.length / 4 - i), r = 0 < i ? t.length - 4 : t.length;
                                var c = 0;

                                function l(t) { o[c++] = t }
                                for (A = e = 0; e < r; e += 4, A += 3) l((16711680 & (n = a(t.charAt(e)) << 18 | a(t.charAt(e + 1)) << 12 | a(t.charAt(e + 2)) << 6 | a(t.charAt(e + 3)))) >> 16), l((65280 & n) >> 8), l(255 & n);
                                return 2 === i ? l(255 & (n = a(t.charAt(e)) << 2 | a(t.charAt(e + 1)) >> 4)) : 1 === i && (l((n = a(t.charAt(e)) << 10 | a(t.charAt(e + 1)) << 4 | a(t.charAt(e + 2)) >> 2) >> 8 & 255), l(255 & n)), o
                            }(r), A, n)
                        }, t.prototype.parse = function() { return this.directory = new u(this.contents), this.head = new d(this), this.name = new v(this), this.cmap = new g(this), this.toUnicode = new Map, this.hhea = new B(this), this.maxp = new b(this), this.hmtx = new C(this), this.post = new m(this), this.os2 = new w(this), this.loca = new N(this), this.glyf = new F(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax] }, t.prototype.registerTTF = function() { var t, e, A, r, n; if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() { var e, A, r, n; for (n = [], e = 0, A = (r = this.bbox).length; e < A; e++) t = r[e], n.push(Math.round(t * this.scaleFactor)); return n }.call(this), this.stemV = 0, this.post.exists ? (A = 255 & (r = this.post.italic_angle), !0 & (e = r >> 16) && (e = -(1 + (65535 ^ e))), this.italicAngle = +(e + "." + A)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (n = this.familyClass) || 2 === n || 3 === n || 4 === n || 5 === n || 7 === n, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font") }, t.prototype.characterToGlyph = function(t) { var e; return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0 }, t.prototype.widthOfGlyph = function(t) { var e; return e = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e }, t.prototype.widthOfString = function(t, e, A) { var r, n, i, o, s; for (n = o = i = 0, s = (t = "" + t).length; 0 <= s ? o < s : s < o; n = 0 <= s ? ++o : --o) r = t.charCodeAt(n), i += this.widthOfGlyph(this.characterToGlyph(r)) + A * (1e3 / e) || 0; return i * (e / 1e3) }, t.prototype.lineHeight = function(t, e) { var A; return null == e && (e = !1), A = e ? this.lineGap : 0, (this.ascender + A - this.decender) / 1e3 * t }, t
                    }();
                    var c, l = function() {
                            function t(t) { this.data = null != t ? t : [], this.pos = 0, this.length = this.data.length }
                            return t.prototype.readByte = function() { return this.data[this.pos++] }, t.prototype.writeByte = function(t) { return this.data[this.pos++] = t }, t.prototype.readUInt32 = function() { return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte() }, t.prototype.writeUInt32 = function(t) { return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t) }, t.prototype.readInt32 = function() { var t; return 2147483648 <= (t = this.readUInt32()) ? t - 4294967296 : t }, t.prototype.writeInt32 = function(t) { return t < 0 && (t += 4294967296), this.writeUInt32(t) }, t.prototype.readUInt16 = function() { return this.readByte() << 8 | this.readByte() }, t.prototype.writeUInt16 = function(t) { return this.writeByte(t >> 8 & 255), this.writeByte(255 & t) }, t.prototype.readInt16 = function() { var t; return 32768 <= (t = this.readUInt16()) ? t - 65536 : t }, t.prototype.writeInt16 = function(t) { return t < 0 && (t += 65536), this.writeUInt16(t) }, t.prototype.readString = function(t) { var e, A, r; for (A = [], e = r = 0; 0 <= t ? r < t : t < r; e = 0 <= t ? ++r : --r) A[e] = String.fromCharCode(this.readByte()); return A.join("") }, t.prototype.writeString = function(t) { var e, A, r, n; for (n = [], e = A = 0, r = t.length; 0 <= r ? A < r : r < A; e = 0 <= r ? ++A : --A) n.push(this.writeByte(t.charCodeAt(e))); return n }, t.prototype.readShort = function() { return this.readInt16() }, t.prototype.writeShort = function(t) { return this.writeInt16(t) }, t.prototype.readLongLong = function() { var t, e, A, r, n, i, o, s; return t = this.readByte(), e = this.readByte(), A = this.readByte(), r = this.readByte(), n = this.readByte(), i = this.readByte(), o = this.readByte(), s = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ A) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ n) + 65536 * (255 ^ i) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * A + 4294967296 * r + 16777216 * n + 65536 * i + 256 * o + s }, t.prototype.writeLongLong = function(t) { var e, A; return e = Math.floor(t / 4294967296), A = 4294967295 & t, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(A >> 24 & 255), this.writeByte(A >> 16 & 255), this.writeByte(A >> 8 & 255), this.writeByte(255 & A) }, t.prototype.readInt = function() { return this.readInt32() }, t.prototype.writeInt = function(t) { return this.writeInt32(t) }, t.prototype.read = function(t) { var e, A; for (e = [], A = 0; 0 <= t ? A < t : t < A; 0 <= t ? ++A : --A) e.push(this.readByte()); return e }, t.prototype.write = function(t) { var e, A, r, n; for (n = [], A = 0, r = t.length; A < r; A++) e = t[A], n.push(this.writeByte(e)); return n }, t
                        }(),
                        u = function() {
                            var t;

                            function e(t) { var e, A, r; for (this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, A = 0, r = this.tableCount; 0 <= r ? A < r : r < A; 0 <= r ? ++A : --A) e = { tag: t.readString(4), checksum: t.readInt(), offset: t.readInt(), length: t.readInt() }, this.tables[e.tag] = e }
                            return e.prototype.encode = function(e) {
                                var A, r, n, i, o, s, a, c, u, h, f, d, p;
                                for (p in f = Object.keys(e).length, s = Math.log(2), u = 16 * Math.floor(Math.log(f) / s), i = Math.floor(u / s), c = 16 * f - u, (r = new l).writeInt(this.scalarType), r.writeShort(f), r.writeShort(u), r.writeShort(i), r.writeShort(c), n = 16 * f, a = r.pos + n, o = null, d = [], e)
                                    for (h = e[p], r.writeString(p), r.writeInt(t(h)), r.writeInt(a), r.writeInt(h.length), d = d.concat(h), "head" === p && (o = a), a += h.length; a % 4;) d.push(0), a++;
                                return r.write(d), A = 2981146554 - t(r.data), r.pos = o + 8, r.writeUInt32(A), r.data
                            }, t = function(t) { var e, A, r, n; for (t = Q.call(t); t.length % 4;) t.push(0); for (A = new l(t), r = e = 0, n = t.length; r < n; r += 4) e += A.readUInt32(); return 4294967295 & e }, e
                        }(),
                        h = {}.hasOwnProperty,
                        f = function(t, e) {
                            for (var A in e) h.call(e, A) && (t[A] = e[A]);

                            function r() { this.constructor = t }
                            return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
                        };
                    c = function() {
                        function t(t) {
                            var e;
                            this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents))
                        }
                        return t.prototype.parse = function() {}, t.prototype.encode = function() {}, t.prototype.raw = function() { return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null }, t
                    }();
                    var d = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "head", e.prototype.parse = function(t) { return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort() }, e.prototype.encode = function(t) { var e; return (e = new l).writeInt(this.version), e.writeInt(this.revision), e.writeInt(this.checkSumAdjustment), e.writeInt(this.magicNumber), e.writeShort(this.flags), e.writeShort(this.unitsPerEm), e.writeLongLong(this.created), e.writeLongLong(this.modified), e.writeShort(this.xMin), e.writeShort(this.yMin), e.writeShort(this.xMax), e.writeShort(this.yMax), e.writeShort(this.macStyle), e.writeShort(this.lowestRecPPEM), e.writeShort(this.fontDirectionHint), e.writeShort(t), e.writeShort(this.glyphDataFormat), e.data }, e
                        }(),
                        p = function() {
                            function t(t, e) {
                                var A, r, n, i, o, s, a, c, l, u, h, f, d, p, g, B, w, m;
                                switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = e + t.readInt(), l = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
                                    case 0:
                                        for (s = g = 0; g < 256; s = ++g) this.codeMap[s] = t.readByte();
                                        break;
                                    case 4:
                                        for (h = t.readUInt16(), u = h / 2, t.pos += 6, n = function() { var e, A; for (A = [], s = e = 0; 0 <= u ? e < u : u < e; s = 0 <= u ? ++e : --e) A.push(t.readUInt16()); return A }(), t.pos += 2, d = function() { var e, A; for (A = [], s = e = 0; 0 <= u ? e < u : u < e; s = 0 <= u ? ++e : --e) A.push(t.readUInt16()); return A }(), a = function() { var e, A; for (A = [], s = e = 0; 0 <= u ? e < u : u < e; s = 0 <= u ? ++e : --e) A.push(t.readUInt16()); return A }(), c = function() { var e, A; for (A = [], s = e = 0; 0 <= u ? e < u : u < e; s = 0 <= u ? ++e : --e) A.push(t.readUInt16()); return A }(), r = (this.length - t.pos + this.offset) / 2, o = function() { var e, A; for (A = [], s = e = 0; 0 <= r ? e < r : r < e; s = 0 <= r ? ++e : --e) A.push(t.readUInt16()); return A }(), s = B = 0, m = n.length; B < m; s = ++B)
                                            for (p = n[s], A = w = f = d[s]; f <= p ? w <= p : p <= w; A = f <= p ? ++w : --w) 0 === c[s] ? i = A + a[s] : 0 !== (i = o[c[s] / 2 + (A - f) - (u - s)] || 0) && (i += a[s]), this.codeMap[A] = 65535 & i
                                }
                                t.pos = l
                            }
                            return t.encode = function(t, e) {
                                var A, r, n, i, o, s, a, c, u, h, f, d, p, g, B, w, m, y, v, b, C, Q, F, U, E, N, L, x, _, H, S, I, T, R, O, M, P, K, D, k, z, j, q, V, X, G;
                                switch (x = new l, i = Object.keys(t).sort(function(t, e) { return t - e }), e) {
                                    case "macroman":
                                        for (p = 0, g = function() { var t, e; for (e = [], d = t = 0; t < 256; d = ++t) e.push(0); return e }(), w = { 0: 0 }, n = {}, _ = 0, T = i.length; _ < T; _++) null == w[q = t[r = i[_]]] && (w[q] = ++p), n[r] = { old: t[r], new: w[t[r]] }, g[r] = w[t[r]];
                                        return x.writeUInt16(1), x.writeUInt16(0), x.writeUInt32(12), x.writeUInt16(0), x.writeUInt16(262), x.writeUInt16(0), x.write(g), { charMap: n, subtable: x.data, maxGlyphID: p + 1 };
                                    case "unicode":
                                        for (N = [], u = [], w = {}, A = {}, B = a = null, H = m = 0, R = i.length; H < R; H++) null == w[v = t[r = i[H]]] && (w[v] = ++m), A[r] = { old: v, new: w[v] }, o = w[v] - r, null != B && o === a || (B && u.push(B), N.push(r), a = o), B = r;
                                        for (B && u.push(B), u.push(65535), N.push(65535), U = 2 * (F = N.length), Q = 2 * Math.pow(Math.log(F) / Math.LN2, 2), h = Math.log(Q / 2) / Math.LN2, C = 2 * F - Q, s = [], b = [], f = [], d = S = 0, O = N.length; S < O; d = ++S) {
                                            if (E = N[d], c = u[d], 65535 === E) { s.push(0), b.push(0); break }
                                            if (32768 <= E - (L = A[E].new))
                                                for (s.push(0), b.push(2 * (f.length + F - d)), r = I = E; E <= c ? I <= c : c <= I; r = E <= c ? ++I : --I) f.push(A[r].new);
                                            else s.push(L - E), b.push(0)
                                        }
                                        for (x.writeUInt16(3), x.writeUInt16(1), x.writeUInt32(12), x.writeUInt16(4), x.writeUInt16(16 + 8 * F + 2 * f.length), x.writeUInt16(0), x.writeUInt16(U), x.writeUInt16(Q), x.writeUInt16(h), x.writeUInt16(C), z = 0, M = u.length; z < M; z++) r = u[z], x.writeUInt16(r);
                                        for (x.writeUInt16(0), j = 0, P = N.length; j < P; j++) r = N[j], x.writeUInt16(r);
                                        for (V = 0, K = s.length; V < K; V++) o = s[V], x.writeUInt16(o);
                                        for (X = 0, D = b.length; X < D; X++) y = b[X], x.writeUInt16(y);
                                        for (G = 0, k = f.length; G < k; G++) p = f[G], x.writeUInt16(p);
                                        return { charMap: A, subtable: x.data, maxGlyphID: m + 1 }
                                }
                            }, t
                        }(),
                        g = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "cmap", e.prototype.parse = function(t) { var e, A, r; for (t.pos = this.offset, this.version = t.readUInt16(), A = t.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= A ? r < A : A < r; 0 <= A ? ++r : --r) e = new p(t, this.offset), this.tables.push(e), e.isUnicode && null == this.unicode && (this.unicode = e); return !0 }, e.encode = function(t, e) { var A, r; return null == e && (e = "macroman"), A = p.encode(t, e), (r = new l).writeUInt16(0), r.writeUInt16(1), A.table = r.data.concat(A.subtable), A }, e
                        }(),
                        B = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "hhea", e.prototype.parse = function(t) { return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16() }, e
                        }(),
                        w = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "OS/2", e.prototype.parse = function(t) { if (t.pos = this.offset, this.version = t.readUInt16(), this.averageCharWidth = t.readShort(), this.weightClass = t.readUInt16(), this.widthClass = t.readUInt16(), this.type = t.readShort(), this.ySubscriptXSize = t.readShort(), this.ySubscriptYSize = t.readShort(), this.ySubscriptXOffset = t.readShort(), this.ySubscriptYOffset = t.readShort(), this.ySuperscriptXSize = t.readShort(), this.ySuperscriptYSize = t.readShort(), this.ySuperscriptXOffset = t.readShort(), this.ySuperscriptYOffset = t.readShort(), this.yStrikeoutSize = t.readShort(), this.yStrikeoutPosition = t.readShort(), this.familyClass = t.readShort(), this.panose = function() { var e, A; for (A = [], e = 0; e < 10; ++e) A.push(t.readByte()); return A }(), this.charRange = function() { var e, A; for (A = [], e = 0; e < 4; ++e) A.push(t.readInt()); return A }(), this.vendorID = t.readString(4), this.selection = t.readShort(), this.firstCharIndex = t.readShort(), this.lastCharIndex = t.readShort(), 0 < this.version && (this.ascent = t.readShort(), this.descent = t.readShort(), this.lineGap = t.readShort(), this.winAscent = t.readShort(), this.winDescent = t.readShort(), this.codePageRange = function() { var e, A; for (A = [], e = 0; e < 2; ++e) A.push(t.readInt()); return A }(), 1 < this.version)) return this.xHeight = t.readShort(), this.capHeight = t.readShort(), this.defaultChar = t.readShort(), this.breakChar = t.readShort(), this.maxContext = t.readShort() }, e
                        }(),
                        m = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "post", e.prototype.parse = function(t) {
                                var e, A, r, n;
                                switch (t.pos = this.offset, this.format = t.readInt(), this.italicAngle = t.readInt(), this.underlinePosition = t.readShort(), this.underlineThickness = t.readShort(), this.isFixedPitch = t.readInt(), this.minMemType42 = t.readInt(), this.maxMemType42 = t.readInt(), this.minMemType1 = t.readInt(), this.maxMemType1 = t.readInt(), this.format) {
                                    case 65536:
                                        break;
                                    case 131072:
                                        for (A = t.readUInt16(), this.glyphNameIndex = [], r = 0; 0 <= A ? r < A : A < r; 0 <= A ? ++r : --r) this.glyphNameIndex.push(t.readUInt16());
                                        for (this.names = [], n = []; t.pos < this.offset + this.length;) e = t.readByte(), n.push(this.names.push(t.readString(e)));
                                        return n;
                                    case 151552:
                                        return A = t.readUInt16(), this.offsets = t.read(A);
                                    case 196608:
                                        break;
                                    case 262144:
                                        return this.map = function() { var e, A, r; for (r = [], e = 0, A = this.file.maxp.numGlyphs; 0 <= A ? e < A : A < e; 0 <= A ? ++e : --e) r.push(t.readUInt32()); return r }.call(this)
                                }
                            }, e
                        }(),
                        y = function(t, e) { this.raw = t, this.length = t.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID },
                        v = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "name", e.prototype.parse = function(t) {
                                var e, A, r, n, i, o, s, a, c, l, u, h;
                                for (t.pos = this.offset, t.readShort(), e = t.readShort(), o = t.readShort(), A = [], n = c = 0; 0 <= e ? c < e : e < c; n = 0 <= e ? ++c : --c) A.push({ platformID: t.readShort(), encodingID: t.readShort(), languageID: t.readShort(), nameID: t.readShort(), length: t.readShort(), offset: this.offset + o + t.readShort() });
                                for (s = {}, n = l = 0, u = A.length; l < u; n = ++l) r = A[n], t.pos = r.offset, a = t.readString(r.length), i = new y(a, r), null == s[h = r.nameID] && (s[h] = []), s[r.nameID].push(i);
                                this.strings = s, this.copyright = s[0], this.fontFamily = s[1], this.fontSubfamily = s[2], this.uniqueSubfamily = s[3], this.fontName = s[4], this.version = s[5];
                                try { this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "") } catch (t) { this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "") }
                                return this.trademark = s[7], this.manufacturer = s[8], this.designer = s[9], this.description = s[10], this.vendorUrl = s[11], this.designerUrl = s[12], this.license = s[13], this.licenseUrl = s[14], this.preferredFamily = s[15], this.preferredSubfamily = s[17], this.compatibleFull = s[18], this.sampleText = s[19]
                            }, e
                        }(),
                        b = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "maxp", e.prototype.parse = function(t) { return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16() }, e
                        }(),
                        C = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "hmtx", e.prototype.parse = function(t) { var e, A, r, n, i, o, s; for (t.pos = this.offset, this.metrics = [], n = 0, o = this.file.hhea.numberOfMetrics; 0 <= o ? n < o : o < n; 0 <= o ? ++n : --n) this.metrics.push({ advance: t.readUInt16(), lsb: t.readInt16() }); for (A = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() { var e, r; for (r = [], e = 0; 0 <= A ? e < A : A < e; 0 <= A ? ++e : --e) r.push(t.readInt16()); return r }(), this.widths = function() { var t, e, A, n; for (n = [], t = 0, e = (A = this.metrics).length; t < e; t++) r = A[t], n.push(r.advance); return n }.call(this), e = this.widths[this.widths.length - 1], s = [], i = 0; 0 <= A ? i < A : A < i; 0 <= A ? ++i : --i) s.push(this.widths.push(e)); return s }, e.prototype.forGlyph = function(t) { return t in this.metrics ? this.metrics[t] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[t - this.metrics.length] } }, e
                        }(),
                        Q = [].slice,
                        F = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "glyf", e.prototype.parse = function(t) { return this.cache = {} }, e.prototype.glyphFor = function(t) { var e, A, r, n, i, o, s, a, c, u; return (t = t) in this.cache ? this.cache[t] : (n = this.file.loca, e = this.file.contents, A = n.indexOf(t), 0 === (r = n.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + A, i = (o = new l(e.read(r))).readShort(), a = o.readShort(), u = o.readShort(), s = o.readShort(), c = o.readShort(), this.cache[t] = -1 === i ? new E(o, a, u, s, c) : new U(o, i, a, u, s, c), this.cache[t])) }, e.prototype.encode = function(t, e, A) { var r, n, i, o, s; for (i = [], n = [], o = 0, s = e.length; o < s; o++) r = t[e[o]], n.push(i.length), r && (i = i.concat(r.encode(A))); return n.push(i.length), { table: i, offsets: n } }, e
                        }(),
                        U = function() {
                            function t(t, e, A, r, n, i) { this.raw = t, this.numberOfContours = e, this.xMin = A, this.yMin = r, this.xMax = n, this.yMax = i, this.compound = !1 }
                            return t.prototype.encode = function() { return this.raw.data }, t
                        }(),
                        E = function() {
                            function t(t, e, A, r, n) { var i, o; for (this.raw = t, this.xMin = e, this.yMin = A, this.xMax = r, this.yMax = n, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], i = this.raw; o = i.readShort(), this.glyphOffsets.push(i.pos), this.glyphIDs.push(i.readShort()), 32 & o;) i.pos += 1 & o ? 4 : 2, 128 & o ? i.pos += 8 : 64 & o ? i.pos += 4 : 8 & o && (i.pos += 2) }
                            return t.prototype.encode = function(t) { var e, A, r, n, i; for (A = new l(Q.call(this.raw.data)), e = r = 0, n = (i = this.glyphIDs).length; r < n; e = ++r) i[e], A.pos = this.glyphOffsets[e]; return A.data }, t
                        }(),
                        N = function(t) {
                            function e() { return e.__super__.constructor.apply(this, arguments) }
                            return f(e, c), e.prototype.tag = "loca", e.prototype.parse = function(t) { var e; return t.pos = this.offset, e = this.file.head.indexToLocFormat, this.offsets = 0 === e ? function() { var e, A, r; for (r = [], e = 0, A = this.length; e < A; e += 2) r.push(2 * t.readUInt16()); return r }.call(this) : function() { var e, A, r; for (r = [], e = 0, A = this.length; e < A; e += 4) r.push(t.readUInt32()); return r }.call(this) }, e.prototype.indexOf = function(t) { return this.offsets[t] }, e.prototype.lengthOf = function(t) { return this.offsets[t + 1] - this.offsets[t] }, e.prototype.encode = function(t, e) {
                                for (var A = new Uint32Array(this.offsets.length), r = 0, n = 0, i = 0; i < A.length; ++i)
                                    if (A[i] = r, n < e.length && e[n] == i) {
                                        ++n, A[i] = r;
                                        var o = this.offsets[i],
                                            s = this.offsets[i + 1] - o;
                                        0 < s && (r += s)
                                    }
                                for (var a = new Array(4 * A.length), c = 0; c < A.length; ++c) a[4 * c + 3] = 255 & A[c], a[4 * c + 2] = (65280 & A[c]) >> 8, a[4 * c + 1] = (16711680 & A[c]) >> 16, a[4 * c] = (4278190080 & A[c]) >> 24;
                                return a
                            }, e
                        }(),
                        L = function() {
                            function t(t) { this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33 }
                            return t.prototype.generateCmap = function() { var t, e, A, r, n; for (e in r = this.font.cmap.tables[0].codeMap, t = {}, n = this.subset) A = n[e], t[e] = r[A]; return t }, t.prototype.glyphsFor = function(t) {
                                var e, A, r, n, i, o, s;
                                for (r = {}, i = 0, o = t.length; i < o; i++) r[n = t[i]] = this.font.glyf.glyphFor(n);
                                for (n in e = [], r)(null != (A = r[n]) ? A.compound : void 0) && e.push.apply(e, A.glyphIDs);
                                if (0 < e.length)
                                    for (n in s = this.glyphsFor(e)) A = s[n], r[n] = A;
                                return r
                            }, t.prototype.encode = function(t, e) { var A, r, n, i, o, s, a, c, l, u, h, f, d, p, B; for (r in A = g.encode(this.generateCmap(), "unicode"), i = this.glyphsFor(t), h = { 0: 0 }, B = A.charMap) h[(s = B[r]).old] = s.new; for (f in u = A.maxGlyphID, i) f in h || (h[f] = u++); return c = function(t) { var e, A; for (e in A = {}, t) A[t[e]] = e; return A }(h), l = Object.keys(c).sort(function(t, e) { return t - e }), d = function() { var t, e, A; for (A = [], t = 0, e = l.length; t < e; t++) o = l[t], A.push(c[o]); return A }(), n = this.font.glyf.encode(i, d, h), a = this.font.loca.encode(n.offsets, d), p = { cmap: this.font.cmap.raw(), glyf: n.table, loca: a, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(e) }, this.font.os2.exists && (p["OS/2"] = this.font.os2.raw()), this.font.directory.encode(p) }, t
                        }();
                    t.API.PDFObject = function() {
                        var t;

                        function e() {}
                        return t = function(t, e) { return (Array(e + 1).join("0") + t).slice(-e) }, e.convert = function(A) { var r, n, i, o; if (Array.isArray(A)) return "[" + function() { var t, n, i; for (i = [], t = 0, n = A.length; t < n; t++) r = A[t], i.push(e.convert(r)); return i }().join(" ") + "]"; if ("string" == typeof A) return "/" + A; if (null != A ? A.isString : void 0) return "(" + A + ")"; if (A instanceof Date) return "(D:" + t(A.getUTCFullYear(), 4) + t(A.getUTCMonth(), 2) + t(A.getUTCDate(), 2) + t(A.getUTCHours(), 2) + t(A.getUTCMinutes(), 2) + t(A.getUTCSeconds(), 2) + "Z)"; if ("[object Object]" !== {}.toString.call(A)) return "" + A; for (n in i = ["<<"], A) o = A[n], i.push("/" + n + " " + e.convert(o)); return i.push(">>"), i.join("\n") }, e
                    }()
                }(dt), Nt = "undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== r && r || Function('return typeof this === "object" && this.content')() || Function("return this")(), Lt = function() {
                    var t, e, A;

                    function r(t) {
                        var e, A, r, n, i, o, s, a, c, l, u, h, f, d;
                        for (this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;) {
                            switch (e = this.readUInt32(), c = function() { var t, e; for (e = [], t = 0; t < 4; ++t) e.push(String.fromCharCode(this.data[this.pos++])); return e }.call(this).join("")) {
                                case "IHDR":
                                    this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                                    break;
                                case "acTL":
                                    this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
                                    break;
                                case "PLTE":
                                    this.palette = this.read(e);
                                    break;
                                case "fcTL":
                                    o && this.animation.frames.push(o), this.pos += 4, o = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, i = this.readUInt16(), n = this.readUInt16() || 100, o.delay = 1e3 * i / n, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
                                    break;
                                case "IDAT":
                                case "fdAT":
                                    for ("fdAT" === c && (this.pos += 4, e -= 4), t = (null != o ? o.data : void 0) || this.imgData, h = 0; 0 <= e ? h < e : e < h; 0 <= e ? ++h : --h) t.push(this.data[this.pos++]);
                                    break;
                                case "tRNS":
                                    switch (this.transparency = {}, this.colorType) {
                                        case 3:
                                            if (r = this.palette.length / 3, this.transparency.indexed = this.read(e), this.transparency.indexed.length > r) throw new Error("More transparent colors than palette size");
                                            if (0 < (l = r - this.transparency.indexed.length))
                                                for (f = 0; 0 <= l ? f < l : l < f; 0 <= l ? ++f : --f) this.transparency.indexed.push(255);
                                            break;
                                        case 0:
                                            this.transparency.grayscale = this.read(e)[0];
                                            break;
                                        case 2:
                                            this.transparency.rgb = this.read(e)
                                    }
                                    break;
                                case "tEXt":
                                    s = (u = this.read(e)).indexOf(0), a = String.fromCharCode.apply(String, u.slice(0, s)), this.text[a] = String.fromCharCode.apply(String, u.slice(s + 1));
                                    break;
                                case "IEND":
                                    return o && this.animation.frames.push(o), this.colors = function() {
                                        switch (this.colorType) {
                                            case 0:
                                            case 3:
                                            case 4:
                                                return 1;
                                            case 2:
                                            case 6:
                                                return 3
                                        }
                                    }.call(this), this.hasAlphaChannel = 4 === (d = this.colorType) || 6 === d, A = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * A, this.colorSpace = function() {
                                        switch (this.colors) {
                                            case 1:
                                                return "DeviceGray";
                                            case 3:
                                                return "DeviceRGB"
                                        }
                                    }.call(this), void(this.imgData = new Uint8Array(this.imgData));
                                default:
                                    this.pos += e
                            }
                            if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
                        }
                    }
                    r.load = function(t, e, A) { var n; return "function" == typeof e && (A = e), (n = new XMLHttpRequest).open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() { var t; return t = new r(new Uint8Array(n.response || n.mozResponseArrayBuffer)), "function" == typeof(null != e ? e.getContext : void 0) && t.render(e), "function" == typeof A ? A(t) : void 0 }, n.send(null) }, r.prototype.read = function(t) { var e, A; for (A = [], e = 0; 0 <= t ? e < t : t < e; 0 <= t ? ++e : --e) A.push(this.data[this.pos++]); return A }, r.prototype.readUInt32 = function() { return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++] }, r.prototype.readUInt16 = function() { return this.data[this.pos++] << 8 | this.data[this.pos++] }, r.prototype.decodePixels = function(t) {
                        var e = this.pixelBitlength / 8,
                            A = new Uint8Array(this.width * this.height * e),
                            r = 0,
                            n = this;
                        if (null == t && (t = this.imgData), 0 === t.length) return new Uint8Array(0);

                        function i(i, o, s, a) {
                            var c, l, u, h, f, d, p, g, B, w, m, y, v, b, C, Q, F, U, E, N, L, x = Math.ceil((n.width - i) / s),
                                _ = Math.ceil((n.height - o) / a),
                                H = n.width == x && n.height == _;
                            for (b = e * x, y = H ? A : new Uint8Array(b * _), d = t.length, l = v = 0; v < _ && r < d;) {
                                switch (t[r++]) {
                                    case 0:
                                        for (h = F = 0; F < b; h = F += 1) y[l++] = t[r++];
                                        break;
                                    case 1:
                                        for (h = U = 0; U < b; h = U += 1) c = t[r++], f = h < e ? 0 : y[l - e], y[l++] = (c + f) % 256;
                                        break;
                                    case 2:
                                        for (h = E = 0; E < b; h = E += 1) c = t[r++], u = (h - h % e) / e, C = v && y[(v - 1) * b + u * e + h % e], y[l++] = (C + c) % 256;
                                        break;
                                    case 3:
                                        for (h = N = 0; N < b; h = N += 1) c = t[r++], u = (h - h % e) / e, f = h < e ? 0 : y[l - e], C = v && y[(v - 1) * b + u * e + h % e], y[l++] = (c + Math.floor((f + C) / 2)) % 256;
                                        break;
                                    case 4:
                                        for (h = L = 0; L < b; h = L += 1) c = t[r++], u = (h - h % e) / e, f = h < e ? 0 : y[l - e], 0 === v ? C = Q = 0 : (C = y[(v - 1) * b + u * e + h % e], Q = u && y[(v - 1) * b + (u - 1) * e + h % e]), p = f + C - Q, g = Math.abs(p - f), w = Math.abs(p - C), m = Math.abs(p - Q), B = g <= w && g <= m ? f : w <= m ? C : Q, y[l++] = (c + B) % 256;
                                        break;
                                    default:
                                        throw new Error("Invalid filter algorithm: " + t[r - 1])
                                }
                                if (!H) {
                                    var S = ((o + v * a) * n.width + i) * e,
                                        I = v * b;
                                    for (h = 0; h < x; h += 1) {
                                        for (var T = 0; T < e; T += 1) A[S++] = y[I++];
                                        S += (s - 1) * e
                                    }
                                }
                                v++
                            }
                        }
                        return t = (t = new Rt(t)).getBytes(), 1 == n.interlaceMethod ? (i(0, 0, 8, 8), i(4, 0, 8, 8), i(0, 4, 4, 8), i(2, 0, 4, 4), i(0, 2, 2, 4), i(1, 0, 2, 2), i(0, 1, 1, 2)) : i(0, 0, 1, 1), A
                    }, r.prototype.decodePalette = function() { var t, e, A, r, n, i, o, s, a; for (A = this.palette, i = this.transparency.indexed || [], n = new Uint8Array((i.length || 0) + A.length), r = 0, A.length, e = o = t = 0, s = A.length; o < s; e = o += 3) n[r++] = A[e], n[r++] = A[e + 1], n[r++] = A[e + 2], n[r++] = null != (a = i[t++]) ? a : 255; return n }, r.prototype.copyToImageData = function(t, e) {
                        var A, r, n, i, o, s, a, c, l, u, h;
                        if (r = this.colors, l = null, A = this.hasAlphaChannel, this.palette.length && (l = null != (h = this._decodedPalette) ? h : this._decodedPalette = this.decodePalette(), r = 4, A = !0), c = (n = t.data || t).length, o = l || e, i = s = 0, 1 === r)
                            for (; i < c;) a = l ? 4 * e[i / 4] : s, u = o[a++], n[i++] = u, n[i++] = u, n[i++] = u, n[i++] = A ? o[a++] : 255, s = a;
                        else
                            for (; i < c;) a = l ? 4 * e[i / 4] : s, n[i++] = o[a++], n[i++] = o[a++], n[i++] = o[a++], n[i++] = A ? o[a++] : 255, s = a
                    }, r.prototype.decode = function() { var t; return t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t };
                    try { e = Nt.document.createElement("canvas"), A = e.getContext("2d") } catch (t) { return -1 }
                    return t = function(t) { var r; return A.width = t.width, A.height = t.height, A.clearRect(0, 0, t.width, t.height), A.putImageData(t, 0, 0), (r = new Image).src = e.toDataURL(), r }, r.prototype.decodeFrames = function(e) { var A, r, n, i, o, s, a, c; if (this.animation) { for (c = [], r = o = 0, s = (a = this.animation.frames).length; o < s; r = ++o) A = a[r], n = e.createImageData(A.width, A.height), i = this.decodePixels(new Uint8Array(A.data)), this.copyToImageData(n, i), A.imageData = n, c.push(A.image = t(n)); return c } }, r.prototype.renderFrame = function(t, e) { var A, r, n; return A = (r = this.animation.frames)[e], n = r[e - 1], 0 === e && t.clearRect(0, 0, this.width, this.height), 1 === (null != n ? n.disposeOp : void 0) ? t.clearRect(n.xOffset, n.yOffset, n.width, n.height) : 2 === (null != n ? n.disposeOp : void 0) && t.putImageData(n.imageData, n.xOffset, n.yOffset), 0 === A.blendOp && t.clearRect(A.xOffset, A.yOffset, A.width, A.height), t.drawImage(A.image, A.xOffset, A.yOffset) }, r.prototype.animate = function(t) { var e, A, r, n, i, o, s = this; return A = 0, o = this.animation, n = o.numFrames, r = o.frames, i = o.numPlays, (e = function() { var o, a; if (o = A++ % n, a = r[o], s.renderFrame(t, o), 1 < n && A / n < i) return s.animation._timeout = setTimeout(e, a.delay) })() }, r.prototype.stopAnimation = function() { var t; return clearTimeout(null != (t = this.animation) ? t._timeout : void 0) }, r.prototype.render = function(t) { var e, A; return t._png && t._png.stopAnimation(), t._png = this, t.width = this.width, t.height = this.height, e = t.getContext("2d"), this.animation ? (this.decodeFrames(e), this.animate(e)) : (A = e.createImageData(this.width, this.height), this.copyToImageData(A, this.decodePixels()), e.putImageData(A, 0, 0)) }, r
                }(), Nt.PNG = Lt;
            var Tt = function() {
                    function t() { this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null }
                    return t.prototype = {
                        ensureBuffer: function(t) {
                            var e = this.buffer,
                                A = e ? e.byteLength : 0;
                            if (t < A) return e;
                            for (var r = 512; r < t;) r <<= 1;
                            for (var n = new Uint8Array(r), i = 0; i < A; ++i) n[i] = e[i];
                            return this.buffer = n
                        },
                        getByte: function() {
                            for (var t = this.pos; this.bufferLength <= t;) {
                                if (this.eof) return null;
                                this.readBlock()
                            }
                            return this.buffer[this.pos++]
                        },
                        getBytes: function(t) {
                            var e = this.pos;
                            if (t) {
                                this.ensureBuffer(e + t);
                                for (var A = e + t; !this.eof && this.bufferLength < A;) this.readBlock();
                                var r = this.bufferLength;
                                r < A && (A = r)
                            } else {
                                for (; !this.eof;) this.readBlock();
                                A = this.bufferLength
                            }
                            return this.pos = A, this.buffer.subarray(e, A)
                        },
                        lookChar: function() {
                            for (var t = this.pos; this.bufferLength <= t;) {
                                if (this.eof) return null;
                                this.readBlock()
                            }
                            return String.fromCharCode(this.buffer[this.pos])
                        },
                        getChar: function() {
                            for (var t = this.pos; this.bufferLength <= t;) {
                                if (this.eof) return null;
                                this.readBlock()
                            }
                            return String.fromCharCode(this.buffer[this.pos++])
                        },
                        makeSubStream: function(t, e, A) { for (var r = t + e; this.bufferLength <= r && !this.eof;) this.readBlock(); return new Stream(this.buffer, t, e, A) },
                        skip: function(t) { t || (t = 1), this.pos += t },
                        reset: function() { this.pos = 0 }
                    }, t
                }(),
                Rt = function() {
                    if ("undefined" != typeof Uint32Array) {
                        var t = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                            e = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
                            A = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
                            r = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
                            n = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
                        return (o.prototype = Object.create(Tt.prototype)).getBits = function(t) { for (var e, A = this.codeSize, r = this.codeBuf, n = this.bytes, o = this.bytesPos; A < t;) void 0 === (e = n[o++]) && i("Bad encoding in flate stream"), r |= e << A, A += 8; return e = r & (1 << t) - 1, this.codeBuf = r >> t, this.codeSize = A -= t, this.bytesPos = o, e }, o.prototype.getCode = function(t) {
                            for (var e = t[0], A = t[1], r = this.codeSize, n = this.codeBuf, o = this.bytes, s = this.bytesPos; r < A;) {
                                var a;
                                void 0 === (a = o[s++]) && i("Bad encoding in flate stream"), n |= a << r, r += 8
                            }
                            var c = e[n & (1 << A) - 1],
                                l = c >> 16,
                                u = 65535 & c;
                            return (0 == r || r < l || 0 == l) && i("Bad encoding in flate stream"), this.codeBuf = n >> l, this.codeSize = r - l, this.bytesPos = s, u
                        }, o.prototype.generateHuffmanTable = function(t) {
                            for (var e = t.length, A = 0, r = 0; r < e; ++r) t[r] > A && (A = t[r]);
                            for (var n = 1 << A, i = new Uint32Array(n), o = 1, s = 0, a = 2; o <= A; ++o, s <<= 1, a <<= 1)
                                for (var c = 0; c < e; ++c)
                                    if (t[c] == o) {
                                        var l = 0,
                                            u = s;
                                        for (r = 0; r < o; ++r) l = l << 1 | 1 & u, u >>= 1;
                                        for (r = l; r < n; r += a) i[r] = o << 16 | c;
                                        ++s
                                    }
                            return [i, A]
                        }, o.prototype.readBlock = function() {
                            function o(t, e, A, r, n) { for (var i = t.getBits(A) + r; 0 < i--;) e[d++] = n }
                            var s = this.getBits(3);
                            if (1 & s && (this.eof = !0), 0 != (s >>= 1)) {
                                var a, c;
                                if (1 == s) a = r, c = n;
                                else if (2 == s) {
                                    for (var l = this.getBits(5) + 257, u = this.getBits(5) + 1, h = this.getBits(4) + 4, f = Array(t.length), d = 0; d < h;) f[t[d++]] = this.getBits(3);
                                    for (var p = this.generateHuffmanTable(f), g = 0, B = (d = 0, l + u), w = new Array(B); d < B;) {
                                        var m = this.getCode(p);
                                        16 == m ? o(this, w, 2, 3, g) : 17 == m ? o(this, w, 3, 3, g = 0) : 18 == m ? o(this, w, 7, 11, g = 0) : w[d++] = g = m
                                    }
                                    a = this.generateHuffmanTable(w.slice(0, l)), c = this.generateHuffmanTable(w.slice(l, B))
                                } else i("Unknown block type in flate stream");
                                for (var y = (H = this.buffer) ? H.length : 0, v = this.bufferLength;;) {
                                    var b = this.getCode(a);
                                    if (b < 256) y <= v + 1 && (y = (H = this.ensureBuffer(v + 1)).length), H[v++] = b;
                                    else {
                                        if (256 == b) return void(this.bufferLength = v);
                                        var C = (b = e[b -= 257]) >> 16;
                                        0 < C && (C = this.getBits(C)), g = (65535 & b) + C, b = this.getCode(c), 0 < (C = (b = A[b]) >> 16) && (C = this.getBits(C));
                                        var Q = (65535 & b) + C;
                                        y <= v + g && (y = (H = this.ensureBuffer(v + g)).length);
                                        for (var F = 0; F < g; ++F, ++v) H[v] = H[v - Q]
                                    }
                                }
                            } else {
                                var U, E = this.bytes,
                                    N = this.bytesPos;
                                void 0 === (U = E[N++]) && i("Bad block header in flate stream");
                                var L = U;
                                void 0 === (U = E[N++]) && i("Bad block header in flate stream"), L |= U << 8, void 0 === (U = E[N++]) && i("Bad block header in flate stream");
                                var x = U;
                                void 0 === (U = E[N++]) && i("Bad block header in flate stream"), (x |= U << 8) != (65535 & ~L) && i("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
                                var _ = this.bufferLength,
                                    H = this.ensureBuffer(_ + L),
                                    S = _ + L;
                                this.bufferLength = S;
                                for (var I = _; I < S; ++I) {
                                    if (void 0 === (U = E[N++])) { this.eof = !0; break }
                                    H[I] = U
                                }
                                this.bytesPos = N
                            }
                        }, o
                    }

                    function i(t) { throw new Error(t) }

                    function o(t) {
                        var e = 0,
                            A = t[e++],
                            r = t[e++]; - 1 != A && -1 != r || i("Invalid header in flate stream"), 8 != (15 & A) && i("Unknown compression method in flate stream"), ((A << 8) + r) % 31 != 0 && i("Bad FCHECK in flate stream"), 32 & r && i("FDICT bit set in flate stream"), this.bytes = t, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, Tt.call(this)
                    }
                }();
            window.tmp = Rt
        }, void 0 === (i = "function" == typeof n ? n.call(e, A, e, t) : n) || (t.exports = i);
        try { t.exports = jsPDF } catch (t) {}
    }).call(this, A(6))
}, function(t, e, A) {
    /*!
     * html2canvas 1.0.0-rc.5 <https://html2canvas.hertzen.com>
     * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    t.exports = function() {
        "use strict";
        /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
        var t = function(e, A) {
            return (t = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var A in e) e.hasOwnProperty(A) && (t[A] = e[A]) })(e, A)
        };

        function e(e, A) {
            function r() { this.constructor = e }
            t(e, A), e.prototype = null === A ? Object.create(A) : (r.prototype = A.prototype, new r)
        }
        var A = function() {
            return (A = Object.assign || function(t) {
                for (var e, A = 1, r = arguments.length; A < r; A++)
                    for (var n in e = arguments[A]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }).apply(this, arguments)
        };

        function r(t, e, A, r) {
            return new(A || (A = Promise))(function(n, i) {
                function o(t) { try { a(r.next(t)) } catch (t) { i(t) } }

                function s(t) { try { a(r.throw(t)) } catch (t) { i(t) } }

                function a(t) { t.done ? n(t.value) : new A(function(e) { e(t.value) }).then(o, s) }
                a((r = r.apply(t, e || [])).next())
            })
        }

        function n(t, e) {
            var A, r, n, i, o = { label: 0, sent: function() { if (1 & n[0]) throw n[1]; return n[1] }, trys: [], ops: [] };
            return i = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (A) throw new TypeError("Generator is already executing.");
                        for (; o;) try {
                            if (A = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                            switch (r = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                                case 0:
                                case 1:
                                    n = i;
                                    break;
                                case 4:
                                    return o.label++, { value: i[1], done: !1 };
                                case 5:
                                    o.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) { o = 0; continue }
                                    if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) { o.label = i[1]; break }
                                    if (6 === i[0] && o.label < n[1]) { o.label = n[1], n = i; break }
                                    if (n && o.label < n[2]) { o.label = n[2], o.ops.push(i); break }
                                    n[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            i = e.call(t, o)
                        } catch (t) { i = [6, t], r = 0 } finally { A = n = 0 }
                        if (5 & i[0]) throw i[1];
                        return { value: i[0] ? i[1] : void 0, done: !0 }
                    }([i, s])
                }
            }
        }
        for (var i = function() {
                function t(t, e, A, r) { this.left = t, this.top = e, this.width = A, this.height = r }
                return t.prototype.add = function(e, A, r, n) { return new t(this.left + e, this.top + A, this.width + r, this.height + n) }, t.fromClientRect = function(e) { return new t(e.left, e.top, e.width, e.height) }, t
            }(), o = function(t) { return i.fromClientRect(t.getBoundingClientRect()) }, s = function(t) {
                for (var e = [], A = 0, r = t.length; A < r;) {
                    var n = t.charCodeAt(A++);
                    if (n >= 55296 && n <= 56319 && A < r) {
                        var i = t.charCodeAt(A++);
                        56320 == (64512 & i) ? e.push(((1023 & n) << 10) + (1023 & i) + 65536) : (e.push(n), A--)
                    } else e.push(n)
                }
                return e
            }, a = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                if (String.fromCodePoint) return String.fromCodePoint.apply(String, t);
                var A = t.length;
                if (!A) return "";
                for (var r = [], n = -1, i = ""; ++n < A;) {
                    var o = t[n];
                    o <= 65535 ? r.push(o) : (o -= 65536, r.push(55296 + (o >> 10), o % 1024 + 56320)), (n + 1 === A || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0)
                }
                return i
            }, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), u = 0; u < c.length; u++) l[c.charCodeAt(u)] = u;
        var h, f = function(t, e, A) { return t.slice ? t.slice(e, A) : new Uint16Array(Array.prototype.slice.call(t, e, A)) },
            d = function() {
                function t(t, e, A, r, n, i) { this.initialValue = t, this.errorValue = e, this.highStart = A, this.highValueIndex = r, this.index = n, this.data = i }
                return t.prototype.get = function(t) { var e; if (t >= 0) { if (t < 55296 || t > 56319 && t <= 65535) return e = ((e = this.index[t >> 5]) << 2) + (31 & t), this.data[e]; if (t <= 65535) return e = ((e = this.index[2048 + (t - 55296 >> 5)]) << 2) + (31 & t), this.data[e]; if (t < this.highStart) return e = 2080 + (t >> 11), e = this.index[e], e += t >> 5 & 63, e = ((e = this.index[e]) << 2) + (31 & t), this.data[e]; if (t <= 1114111) return this.data[this.highValueIndex] } return this.errorValue }, t
            }(),
            p = 10,
            g = 13,
            B = 15,
            w = 17,
            m = 18,
            y = 19,
            v = 20,
            b = 21,
            C = 22,
            Q = 24,
            F = 25,
            U = 26,
            E = 27,
            N = 28,
            L = 30,
            x = 32,
            _ = 33,
            H = 34,
            S = 35,
            I = 37,
            T = 38,
            R = 39,
            O = 40,
            M = 42,
            P = "!",
            K = function(t) {
                var e = function(t) {
                        var e, A, r, n, i, o = .75 * t.length,
                            s = t.length,
                            a = 0;
                        "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
                        var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(o) : new Array(o),
                            u = Array.isArray(c) ? c : new Uint8Array(c);
                        for (e = 0; e < s; e += 4) A = l[t.charCodeAt(e)], r = l[t.charCodeAt(e + 1)], n = l[t.charCodeAt(e + 2)], i = l[t.charCodeAt(e + 3)], u[a++] = A << 2 | r >> 4, u[a++] = (15 & r) << 4 | n >> 2, u[a++] = (3 & n) << 6 | 63 & i;
                        return c
                    }(t),
                    A = Array.isArray(e) ? function(t) { for (var e = t.length, A = [], r = 0; r < e; r += 4) A.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]); return A }(e) : new Uint32Array(e),
                    r = Array.isArray(e) ? function(t) { for (var e = t.length, A = [], r = 0; r < e; r += 2) A.push(t[r + 1] << 8 | t[r]); return A }(e) : new Uint16Array(e),
                    n = f(r, 12, A[4] / 2),
                    i = 2 === A[5] ? f(r, (24 + A[4]) / 2) : function(t, e, A) { return t.slice ? t.slice(e, A) : new Uint32Array(Array.prototype.slice.call(t, e, A)) }(A, Math.ceil((24 + A[4]) / 4));
                return new d(A[0], A[1], A[2], A[3], n, i)
            }("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"),
            D = [L, 36],
            k = [1, 2, 3, 5],
            z = [p, 8],
            j = [E, U],
            q = k.concat(z),
            V = [T, R, O, H, S],
            X = [B, g],
            G = function(t, e, A, r) {
                var n = r[A];
                if (Array.isArray(t) ? -1 !== t.indexOf(n) : t === n)
                    for (var i = A; i <= r.length;) { var o = r[++i]; if (o === e) return !0; if (o !== p) break }
                if (n === p)
                    for (var i = A; i > 0;) {
                        var s = r[--i];
                        if (Array.isArray(t) ? -1 !== t.indexOf(s) : t === s)
                            for (var a = A; a <= r.length;) { var o = r[++a]; if (o === e) return !0; if (o !== p) break }
                        if (s !== p) break
                    }
                return !1
            },
            J = function(t, e) {
                for (var A = t; A >= 0;) {
                    var r = e[A];
                    if (r !== p) return r;
                    A--
                }
                return 0
            },
            W = function(t, e, A, r, n) {
                if (0 === A[r]) return "×";
                var i = r - 1;
                if (Array.isArray(n) && !0 === n[i]) return "×";
                var o = i - 1,
                    s = i + 1,
                    a = e[i],
                    c = o >= 0 ? e[o] : 0,
                    l = e[s];
                if (2 === a && 3 === l) return "×";
                if (-1 !== k.indexOf(a)) return P;
                if (-1 !== k.indexOf(l)) return "×";
                if (-1 !== z.indexOf(l)) return "×";
                if (8 === J(i, e)) return "÷";
                if (11 === K.get(t[i]) && (l === I || l === x || l === _)) return "×";
                if (7 === a || 7 === l) return "×";
                if (9 === a) return "×";
                if (-1 === [p, g, B].indexOf(a) && 9 === l) return "×";
                if (-1 !== [w, m, y, Q, N].indexOf(l)) return "×";
                if (J(i, e) === C) return "×";
                if (G(23, C, i, e)) return "×";
                if (G([w, m], b, i, e)) return "×";
                if (G(12, 12, i, e)) return "×";
                if (a === p) return "÷";
                if (23 === a || 23 === l) return "×";
                if (16 === l || 16 === a) return "÷";
                if (-1 !== [g, B, b].indexOf(l) || 14 === a) return "×";
                if (36 === c && -1 !== X.indexOf(a)) return "×";
                if (a === N && 36 === l) return "×";
                if (l === v && -1 !== D.concat(v, y, F, I, x, _).indexOf(a)) return "×";
                if (-1 !== D.indexOf(l) && a === F || -1 !== D.indexOf(a) && l === F) return "×";
                if (a === E && -1 !== [I, x, _].indexOf(l) || -1 !== [I, x, _].indexOf(a) && l === U) return "×";
                if (-1 !== D.indexOf(a) && -1 !== j.indexOf(l) || -1 !== j.indexOf(a) && -1 !== D.indexOf(l)) return "×";
                if (-1 !== [E, U].indexOf(a) && (l === F || -1 !== [C, B].indexOf(l) && e[s + 1] === F) || -1 !== [C, B].indexOf(a) && l === F || a === F && -1 !== [F, N, Q].indexOf(l)) return "×";
                if (-1 !== [F, N, Q, w, m].indexOf(l))
                    for (var u = i; u >= 0;) {
                        var h = e[u];
                        if (h === F) return "×";
                        if (-1 === [N, Q].indexOf(h)) break;
                        u--
                    }
                if (-1 !== [E, U].indexOf(l))
                    for (var u = -1 !== [w, m].indexOf(a) ? o : i; u >= 0;) {
                        var h = e[u];
                        if (h === F) return "×";
                        if (-1 === [N, Q].indexOf(h)) break;
                        u--
                    }
                if (T === a && -1 !== [T, R, H, S].indexOf(l) || -1 !== [R, H].indexOf(a) && -1 !== [R, O].indexOf(l) || -1 !== [O, S].indexOf(a) && l === O) return "×";
                if (-1 !== V.indexOf(a) && -1 !== [v, U].indexOf(l) || -1 !== V.indexOf(l) && a === E) return "×";
                if (-1 !== D.indexOf(a) && -1 !== D.indexOf(l)) return "×";
                if (a === Q && -1 !== D.indexOf(l)) return "×";
                if (-1 !== D.concat(F).indexOf(a) && l === C || -1 !== D.concat(F).indexOf(l) && a === m) return "×";
                if (41 === a && 41 === l) { for (var f = A[i], d = 1; f > 0 && 41 === e[--f];) d++; if (d % 2 != 0) return "×" }
                return a === x && l === _ ? "×" : "÷"
            },
            Y = function(t, e) {
                e || (e = { lineBreak: "normal", wordBreak: "normal" });
                var A = function(t, e) {
                        void 0 === e && (e = "strict");
                        var A = [],
                            r = [],
                            n = [];
                        return t.forEach(function(t, i) { var o = K.get(t); if (o > 50 ? (n.push(!0), o -= 50) : n.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(t)) return r.push(i), A.push(16); if (4 === o || 11 === o) { if (0 === i) return r.push(i), A.push(L); var s = A[i - 1]; return -1 === q.indexOf(s) ? (r.push(r[i - 1]), A.push(s)) : (r.push(i), A.push(L)) } return r.push(i), 31 === o ? A.push("strict" === e ? b : I) : o === M ? A.push(L) : 29 === o ? A.push(L) : 43 === o ? t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141 ? A.push(I) : A.push(L) : void A.push(o) }), [r, A, n]
                    }(t, e.lineBreak),
                    r = A[0],
                    n = A[1],
                    i = A[2];
                "break-all" !== e.wordBreak && "break-word" !== e.wordBreak || (n = n.map(function(t) { return -1 !== [F, L, M].indexOf(t) ? I : t }));
                var o = "keep-all" === e.wordBreak ? i.map(function(e, A) { return e && t[A] >= 19968 && t[A] <= 40959 }) : void 0;
                return [r, n, o]
            },
            Z = function() {
                function t(t, e, A, r) { this.codePoints = t, this.required = e === P, this.start = A, this.end = r }
                return t.prototype.slice = function() { return a.apply(void 0, this.codePoints.slice(this.start, this.end)) }, t
            }();
        ! function(t) { t[t.STRING_TOKEN = 0] = "STRING_TOKEN", t[t.BAD_STRING_TOKEN = 1] = "BAD_STRING_TOKEN", t[t.LEFT_PARENTHESIS_TOKEN = 2] = "LEFT_PARENTHESIS_TOKEN", t[t.RIGHT_PARENTHESIS_TOKEN = 3] = "RIGHT_PARENTHESIS_TOKEN", t[t.COMMA_TOKEN = 4] = "COMMA_TOKEN", t[t.HASH_TOKEN = 5] = "HASH_TOKEN", t[t.DELIM_TOKEN = 6] = "DELIM_TOKEN", t[t.AT_KEYWORD_TOKEN = 7] = "AT_KEYWORD_TOKEN", t[t.PREFIX_MATCH_TOKEN = 8] = "PREFIX_MATCH_TOKEN", t[t.DASH_MATCH_TOKEN = 9] = "DASH_MATCH_TOKEN", t[t.INCLUDE_MATCH_TOKEN = 10] = "INCLUDE_MATCH_TOKEN", t[t.LEFT_CURLY_BRACKET_TOKEN = 11] = "LEFT_CURLY_BRACKET_TOKEN", t[t.RIGHT_CURLY_BRACKET_TOKEN = 12] = "RIGHT_CURLY_BRACKET_TOKEN", t[t.SUFFIX_MATCH_TOKEN = 13] = "SUFFIX_MATCH_TOKEN", t[t.SUBSTRING_MATCH_TOKEN = 14] = "SUBSTRING_MATCH_TOKEN", t[t.DIMENSION_TOKEN = 15] = "DIMENSION_TOKEN", t[t.PERCENTAGE_TOKEN = 16] = "PERCENTAGE_TOKEN", t[t.NUMBER_TOKEN = 17] = "NUMBER_TOKEN", t[t.FUNCTION = 18] = "FUNCTION", t[t.FUNCTION_TOKEN = 19] = "FUNCTION_TOKEN", t[t.IDENT_TOKEN = 20] = "IDENT_TOKEN", t[t.COLUMN_TOKEN = 21] = "COLUMN_TOKEN", t[t.URL_TOKEN = 22] = "URL_TOKEN", t[t.BAD_URL_TOKEN = 23] = "BAD_URL_TOKEN", t[t.CDC_TOKEN = 24] = "CDC_TOKEN", t[t.CDO_TOKEN = 25] = "CDO_TOKEN", t[t.COLON_TOKEN = 26] = "COLON_TOKEN", t[t.SEMICOLON_TOKEN = 27] = "SEMICOLON_TOKEN", t[t.LEFT_SQUARE_BRACKET_TOKEN = 28] = "LEFT_SQUARE_BRACKET_TOKEN", t[t.RIGHT_SQUARE_BRACKET_TOKEN = 29] = "RIGHT_SQUARE_BRACKET_TOKEN", t[t.UNICODE_RANGE_TOKEN = 30] = "UNICODE_RANGE_TOKEN", t[t.WHITESPACE_TOKEN = 31] = "WHITESPACE_TOKEN", t[t.EOF_TOKEN = 32] = "EOF_TOKEN" }(h || (h = {}));
        var $ = function(t) { return t >= 48 && t <= 57 },
            tt = function(t) { return $(t) || t >= 65 && t <= 70 || t >= 97 && t <= 102 },
            et = function(t) { return function(t) { return t >= 97 && t <= 122 }(t) || function(t) { return t >= 65 && t <= 90 }(t) },
            At = function(t) { return 10 === t || 9 === t || 32 === t },
            rt = function(t) { return et(t) || function(t) { return t >= 128 }(t) || 95 === t },
            nt = function(t) { return rt(t) || $(t) || 45 === t },
            it = function(t) { return t >= 0 && t <= 8 || 11 === t || t >= 14 && t <= 31 || 127 === t },
            ot = function(t, e) { return 92 === t && 10 !== e },
            st = function(t, e, A) { return 45 === t ? rt(e) || ot(e, A) : !!rt(t) || !(92 !== t || !ot(t, e)) },
            at = function(t, e, A) { return 43 === t || 45 === t ? !!$(e) || 46 === e && $(A) : $(46 === t ? e : t) },
            ct = { type: h.LEFT_PARENTHESIS_TOKEN },
            lt = { type: h.RIGHT_PARENTHESIS_TOKEN },
            ut = { type: h.COMMA_TOKEN },
            ht = { type: h.SUFFIX_MATCH_TOKEN },
            ft = { type: h.PREFIX_MATCH_TOKEN },
            dt = { type: h.COLUMN_TOKEN },
            pt = { type: h.DASH_MATCH_TOKEN },
            gt = { type: h.INCLUDE_MATCH_TOKEN },
            Bt = { type: h.LEFT_CURLY_BRACKET_TOKEN },
            wt = { type: h.RIGHT_CURLY_BRACKET_TOKEN },
            mt = { type: h.SUBSTRING_MATCH_TOKEN },
            yt = { type: h.BAD_URL_TOKEN },
            vt = { type: h.BAD_STRING_TOKEN },
            bt = { type: h.CDO_TOKEN },
            Ct = { type: h.CDC_TOKEN },
            Qt = { type: h.COLON_TOKEN },
            Ft = { type: h.SEMICOLON_TOKEN },
            Ut = { type: h.LEFT_SQUARE_BRACKET_TOKEN },
            Et = { type: h.RIGHT_SQUARE_BRACKET_TOKEN },
            Nt = { type: h.WHITESPACE_TOKEN },
            Lt = { type: h.EOF_TOKEN },
            xt = function() {
                function t() { this._value = [] }
                return t.prototype.write = function(t) { this._value = this._value.concat(s(t)) }, t.prototype.read = function() { for (var t = [], e = this.consumeToken(); e !== Lt;) t.push(e), e = this.consumeToken(); return t }, t.prototype.consumeToken = function() {
                    var t = this.consumeCodePoint();
                    switch (t) {
                        case 34:
                            return this.consumeStringToken(34);
                        case 35:
                            var e = this.peekCodePoint(0),
                                A = this.peekCodePoint(1),
                                r = this.peekCodePoint(2);
                            if (nt(e) || ot(A, r)) {
                                var n = st(e, A, r) ? 2 : 1,
                                    i = this.consumeName();
                                return { type: h.HASH_TOKEN, value: i, flags: n }
                            }
                            break;
                        case 36:
                            if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), ht;
                            break;
                        case 39:
                            return this.consumeStringToken(39);
                        case 40:
                            return ct;
                        case 41:
                            return lt;
                        case 42:
                            if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), mt;
                            break;
                        case 43:
                            if (at(t, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(t), this.consumeNumericToken();
                            break;
                        case 44:
                            return ut;
                        case 45:
                            var o = t,
                                s = this.peekCodePoint(0),
                                c = this.peekCodePoint(1);
                            if (at(o, s, c)) return this.reconsumeCodePoint(t), this.consumeNumericToken();
                            if (st(o, s, c)) return this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
                            if (45 === s && 62 === c) return this.consumeCodePoint(), this.consumeCodePoint(), Ct;
                            break;
                        case 46:
                            if (at(t, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(t), this.consumeNumericToken();
                            break;
                        case 47:
                            if (42 === this.peekCodePoint(0))
                                for (this.consumeCodePoint();;) { var l = this.consumeCodePoint(); if (42 === l && 47 === (l = this.consumeCodePoint())) return this.consumeToken(); if (-1 === l) return this.consumeToken() }
                            break;
                        case 58:
                            return Qt;
                        case 59:
                            return Ft;
                        case 60:
                            if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), bt;
                            break;
                        case 64:
                            var u = this.peekCodePoint(0),
                                f = this.peekCodePoint(1),
                                d = this.peekCodePoint(2);
                            if (st(u, f, d)) { var i = this.consumeName(); return { type: h.AT_KEYWORD_TOKEN, value: i } }
                            break;
                        case 91:
                            return Ut;
                        case 92:
                            if (ot(t, this.peekCodePoint(0))) return this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
                            break;
                        case 93:
                            return Et;
                        case 61:
                            if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), ft;
                            break;
                        case 123:
                            return Bt;
                        case 125:
                            return wt;
                        case 117:
                        case 85:
                            var p = this.peekCodePoint(0),
                                g = this.peekCodePoint(1);
                            return 43 !== p || !tt(g) && 63 !== g || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
                        case 124:
                            if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), pt;
                            if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), dt;
                            break;
                        case 126:
                            if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), gt;
                            break;
                        case -1:
                            return Lt
                    }
                    return At(t) ? (this.consumeWhiteSpace(), Nt) : $(t) ? (this.reconsumeCodePoint(t), this.consumeNumericToken()) : rt(t) ? (this.reconsumeCodePoint(t), this.consumeIdentLikeToken()) : { type: h.DELIM_TOKEN, value: a(t) }
                }, t.prototype.consumeCodePoint = function() { var t = this._value.shift(); return void 0 === t ? -1 : t }, t.prototype.reconsumeCodePoint = function(t) { this._value.unshift(t) }, t.prototype.peekCodePoint = function(t) { return t >= this._value.length ? -1 : this._value[t] }, t.prototype.consumeUnicodeRangeToken = function() {
                    for (var t = [], e = this.consumeCodePoint(); tt(e) && t.length < 6;) t.push(e), e = this.consumeCodePoint();
                    for (var A = !1; 63 === e && t.length < 6;) t.push(e), e = this.consumeCodePoint(), A = !0;
                    if (A) {
                        var r = parseInt(a.apply(void 0, t.map(function(t) { return 63 === t ? 48 : t })), 16),
                            n = parseInt(a.apply(void 0, t.map(function(t) { return 63 === t ? 70 : t })), 16);
                        return { type: h.UNICODE_RANGE_TOKEN, start: r, end: n }
                    }
                    var i = parseInt(a.apply(void 0, t), 16);
                    if (45 === this.peekCodePoint(0) && tt(this.peekCodePoint(1))) { this.consumeCodePoint(), e = this.consumeCodePoint(); for (var o = []; tt(e) && o.length < 6;) o.push(e), e = this.consumeCodePoint(); var n = parseInt(a.apply(void 0, o), 16); return { type: h.UNICODE_RANGE_TOKEN, start: i, end: n } }
                    return { type: h.UNICODE_RANGE_TOKEN, start: i, end: i }
                }, t.prototype.consumeIdentLikeToken = function() { var t = this.consumeName(); return "url" === t.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), { type: h.FUNCTION_TOKEN, value: t }) : { type: h.IDENT_TOKEN, value: t } }, t.prototype.consumeUrlToken = function() {
                    var t = [];
                    if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return { type: h.URL_TOKEN, value: "" };
                    var e = this.peekCodePoint(0);
                    if (39 === e || 34 === e) { var A = this.consumeStringToken(this.consumeCodePoint()); return A.type === h.STRING_TOKEN && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), { type: h.URL_TOKEN, value: A.value }) : (this.consumeBadUrlRemnants(), yt) }
                    for (;;) {
                        var r = this.consumeCodePoint();
                        if (-1 === r || 41 === r) return { type: h.URL_TOKEN, value: a.apply(void 0, t) };
                        if (At(r)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), { type: h.URL_TOKEN, value: a.apply(void 0, t) }) : (this.consumeBadUrlRemnants(), yt);
                        if (34 === r || 39 === r || 40 === r || it(r)) return this.consumeBadUrlRemnants(), yt;
                        if (92 === r) {
                            if (!ot(r, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), yt;
                            t.push(this.consumeEscapedCodePoint())
                        } else t.push(r)
                    }
                }, t.prototype.consumeWhiteSpace = function() { for (; At(this.peekCodePoint(0));) this.consumeCodePoint() }, t.prototype.consumeBadUrlRemnants = function() {
                    for (;;) {
                        var t = this.consumeCodePoint();
                        if (41 === t || -1 === t) return;
                        ot(t, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                    }
                }, t.prototype.consumeStringSlice = function(t) {
                    for (var e = ""; t > 0;) {
                        var A = Math.min(6e4, t);
                        e += a.apply(void 0, this._value.splice(0, A)), t -= A
                    }
                    return this._value.shift(), e
                }, t.prototype.consumeStringToken = function(t) {
                    for (var e = "", A = 0;;) {
                        var r = this._value[A];
                        if (-1 === r || void 0 === r || r === t) return e += this.consumeStringSlice(A), { type: h.STRING_TOKEN, value: e };
                        if (10 === r) return this._value.splice(0, A), vt;
                        if (92 === r) { var n = this._value[A + 1]; - 1 !== n && void 0 !== n && (10 === n ? (e += this.consumeStringSlice(A), A = -1, this._value.shift()) : ot(r, n) && (e += this.consumeStringSlice(A), e += a(this.consumeEscapedCodePoint()), A = -1)) }
                        A++
                    }
                }, t.prototype.consumeNumber = function() {
                    var t = [],
                        e = 4,
                        A = this.peekCodePoint(0);
                    for (43 !== A && 45 !== A || t.push(this.consumeCodePoint()); $(this.peekCodePoint(0));) t.push(this.consumeCodePoint());
                    A = this.peekCodePoint(0);
                    var r = this.peekCodePoint(1);
                    if (46 === A && $(r))
                        for (t.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; $(this.peekCodePoint(0));) t.push(this.consumeCodePoint());
                    A = this.peekCodePoint(0), r = this.peekCodePoint(1);
                    var n = this.peekCodePoint(2);
                    if ((69 === A || 101 === A) && ((43 === r || 45 === r) && $(n) || $(r)))
                        for (t.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; $(this.peekCodePoint(0));) t.push(this.consumeCodePoint());
                    return [function(t) {
                        var e = 0,
                            A = 1;
                        43 !== t[e] && 45 !== t[e] || (45 === t[e] && (A = -1), e++);
                        for (var r = []; $(t[e]);) r.push(t[e++]);
                        var n = r.length ? parseInt(a.apply(void 0, r), 10) : 0;
                        46 === t[e] && e++;
                        for (var i = []; $(t[e]);) i.push(t[e++]);
                        var o = i.length,
                            s = o ? parseInt(a.apply(void 0, i), 10) : 0;
                        69 !== t[e] && 101 !== t[e] || e++;
                        var c = 1;
                        43 !== t[e] && 45 !== t[e] || (45 === t[e] && (c = -1), e++);
                        for (var l = []; $(t[e]);) l.push(t[e++]);
                        var u = l.length ? parseInt(a.apply(void 0, l), 10) : 0;
                        return A * (n + s * Math.pow(10, -o)) * Math.pow(10, c * u)
                    }(t), e]
                }, t.prototype.consumeNumericToken = function() {
                    var t = this.consumeNumber(),
                        e = t[0],
                        A = t[1],
                        r = this.peekCodePoint(0),
                        n = this.peekCodePoint(1),
                        i = this.peekCodePoint(2);
                    if (st(r, n, i)) { var o = this.consumeName(); return { type: h.DIMENSION_TOKEN, number: e, flags: A, unit: o } }
                    return 37 === r ? (this.consumeCodePoint(), { type: h.PERCENTAGE_TOKEN, number: e, flags: A }) : { type: h.NUMBER_TOKEN, number: e, flags: A }
                }, t.prototype.consumeEscapedCodePoint = function() {
                    var t = this.consumeCodePoint();
                    if (tt(t)) {
                        for (var e = a(t); tt(this.peekCodePoint(0)) && e.length < 6;) e += a(this.consumeCodePoint());
                        At(this.peekCodePoint(0)) && this.consumeCodePoint();
                        var A = parseInt(e, 16);
                        return 0 === A || function(t) { return t >= 55296 && t <= 57343 }(A) || A > 1114111 ? 65533 : A
                    }
                    return -1 === t ? 65533 : t
                }, t.prototype.consumeName = function() {
                    for (var t = "";;) {
                        var e = this.consumeCodePoint();
                        if (nt(e)) t += a(e);
                        else {
                            if (!ot(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), t;
                            t += a(this.consumeEscapedCodePoint())
                        }
                    }
                }, t
            }(),
            _t = function() {
                function t(t) { this._tokens = t }
                return t.create = function(e) { var A = new xt; return A.write(e), new t(A.read()) }, t.parseValue = function(e) { return t.create(e).parseComponentValue() }, t.parseValues = function(e) { return t.create(e).parseComponentValues() }, t.prototype.parseComponentValue = function() {
                    for (var t = this.consumeToken(); t.type === h.WHITESPACE_TOKEN;) t = this.consumeToken();
                    if (t.type === h.EOF_TOKEN) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                    this.reconsumeToken(t);
                    var e = this.consumeComponentValue();
                    do { t = this.consumeToken() } while (t.type === h.WHITESPACE_TOKEN);
                    if (t.type === h.EOF_TOKEN) return e;
                    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
                }, t.prototype.parseComponentValues = function() {
                    for (var t = [];;) {
                        var e = this.consumeComponentValue();
                        if (e.type === h.EOF_TOKEN) return t;
                        t.push(e), t.push()
                    }
                }, t.prototype.consumeComponentValue = function() {
                    var t = this.consumeToken();
                    switch (t.type) {
                        case h.LEFT_CURLY_BRACKET_TOKEN:
                        case h.LEFT_SQUARE_BRACKET_TOKEN:
                        case h.LEFT_PARENTHESIS_TOKEN:
                            return this.consumeSimpleBlock(t.type);
                        case h.FUNCTION_TOKEN:
                            return this.consumeFunction(t)
                    }
                    return t
                }, t.prototype.consumeSimpleBlock = function(t) {
                    for (var e = { type: t, values: [] }, A = this.consumeToken();;) {
                        if (A.type === h.EOF_TOKEN || Kt(A, t)) return e;
                        this.reconsumeToken(A), e.values.push(this.consumeComponentValue()), A = this.consumeToken()
                    }
                }, t.prototype.consumeFunction = function(t) {
                    for (var e = { name: t.value, values: [], type: h.FUNCTION };;) {
                        var A = this.consumeToken();
                        if (A.type === h.EOF_TOKEN || A.type === h.RIGHT_PARENTHESIS_TOKEN) return e;
                        this.reconsumeToken(A), e.values.push(this.consumeComponentValue())
                    }
                }, t.prototype.consumeToken = function() { var t = this._tokens.shift(); return void 0 === t ? Lt : t }, t.prototype.reconsumeToken = function(t) { this._tokens.unshift(t) }, t
            }(),
            Ht = function(t) { return t.type === h.DIMENSION_TOKEN },
            St = function(t) { return t.type === h.NUMBER_TOKEN },
            It = function(t) { return t.type === h.IDENT_TOKEN },
            Tt = function(t) { return t.type === h.STRING_TOKEN },
            Rt = function(t, e) { return It(t) && t.value === e },
            Ot = function(t) { return t.type !== h.WHITESPACE_TOKEN },
            Mt = function(t) { return t.type !== h.WHITESPACE_TOKEN && t.type !== h.COMMA_TOKEN },
            Pt = function(t) {
                var e = [],
                    A = [];
                return t.forEach(function(t) {
                    if (t.type === h.COMMA_TOKEN) { if (0 === A.length) throw new Error("Error parsing function args, zero tokens for arg"); return e.push(A), void(A = []) }
                    t.type !== h.WHITESPACE_TOKEN && A.push(t)
                }), A.length && e.push(A), e
            },
            Kt = function(t, e) { return e === h.LEFT_CURLY_BRACKET_TOKEN && t.type === h.RIGHT_CURLY_BRACKET_TOKEN || e === h.LEFT_SQUARE_BRACKET_TOKEN && t.type === h.RIGHT_SQUARE_BRACKET_TOKEN || e === h.LEFT_PARENTHESIS_TOKEN && t.type === h.RIGHT_PARENTHESIS_TOKEN },
            Dt = function(t) { return t.type === h.NUMBER_TOKEN || t.type === h.DIMENSION_TOKEN },
            kt = function(t) { return t.type === h.PERCENTAGE_TOKEN || Dt(t) },
            zt = function(t) { return t.length > 1 ? [t[0], t[1]] : [t[0]] },
            jt = { type: h.NUMBER_TOKEN, number: 0, flags: 4 },
            qt = { type: h.PERCENTAGE_TOKEN, number: 50, flags: 4 },
            Vt = { type: h.PERCENTAGE_TOKEN, number: 100, flags: 4 },
            Xt = function(t, e, A) {
                var r = t[0],
                    n = t[1];
                return [Gt(r, e), Gt(void 0 !== n ? n : r, A)]
            },
            Gt = function(t, e) {
                if (t.type === h.PERCENTAGE_TOKEN) return t.number / 100 * e;
                if (Ht(t)) switch (t.unit) {
                    case "rem":
                    case "em":
                        return 16 * t.number;
                    case "px":
                    default:
                        return t.number
                }
                return t.number
            },
            Jt = {
                name: "angle",
                parse: function(t) {
                    if (t.type === h.DIMENSION_TOKEN) switch (t.unit) {
                        case "deg":
                            return Math.PI * t.number / 180;
                        case "grad":
                            return Math.PI / 200 * t.number;
                        case "rad":
                            return t.number;
                        case "turn":
                            return 2 * Math.PI * t.number
                    }
                    throw new Error("Unsupported angle type")
                }
            },
            Wt = function(t) { return t.type === h.DIMENSION_TOKEN && ("deg" === t.unit || "grad" === t.unit || "rad" === t.unit || "turn" === t.unit) },
            Yt = function(t) {
                var e = t.filter(It).map(function(t) { return t.value }).join(" ");
                switch (e) {
                    case "to bottom right":
                    case "to right bottom":
                    case "left top":
                    case "top left":
                        return [jt, jt];
                    case "to top":
                    case "bottom":
                        return Zt(0);
                    case "to bottom left":
                    case "to left bottom":
                    case "right top":
                    case "top right":
                        return [jt, Vt];
                    case "to right":
                    case "left":
                        return Zt(90);
                    case "to top left":
                    case "to left top":
                    case "right bottom":
                    case "bottom right":
                        return [Vt, Vt];
                    case "to bottom":
                    case "top":
                        return Zt(180);
                    case "to top right":
                    case "to right top":
                    case "left bottom":
                    case "bottom left":
                        return [Vt, jt];
                    case "to left":
                    case "right":
                        return Zt(270)
                }
                return 0
            },
            Zt = function(t) { return Math.PI * t / 180 },
            $t = {
                name: "color",
                parse: function(t) {
                    if (t.type === h.FUNCTION) { var e = ce[t.name]; if (void 0 === e) throw new Error('Attempting to parse an unsupported color function "' + t.name + '"'); return e(t.values) }
                    if (t.type === h.HASH_TOKEN) {
                        if (3 === t.value.length) {
                            var A = t.value.substring(0, 1),
                                r = t.value.substring(1, 2),
                                n = t.value.substring(2, 3);
                            return Ae(parseInt(A + A, 16), parseInt(r + r, 16), parseInt(n + n, 16), 1)
                        }
                        if (4 === t.value.length) {
                            var A = t.value.substring(0, 1),
                                r = t.value.substring(1, 2),
                                n = t.value.substring(2, 3),
                                i = t.value.substring(3, 4);
                            return Ae(parseInt(A + A, 16), parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16) / 255)
                        }
                        if (6 === t.value.length) {
                            var A = t.value.substring(0, 2),
                                r = t.value.substring(2, 4),
                                n = t.value.substring(4, 6);
                            return Ae(parseInt(A, 16), parseInt(r, 16), parseInt(n, 16), 1)
                        }
                        if (8 === t.value.length) {
                            var A = t.value.substring(0, 2),
                                r = t.value.substring(2, 4),
                                n = t.value.substring(4, 6),
                                i = t.value.substring(6, 8);
                            return Ae(parseInt(A, 16), parseInt(r, 16), parseInt(n, 16), parseInt(i, 16) / 255)
                        }
                    }
                    if (t.type === h.IDENT_TOKEN) { var o = le[t.value.toUpperCase()]; if (void 0 !== o) return o }
                    return le.TRANSPARENT
                }
            },
            te = function(t) { return 0 == (255 & t) },
            ee = function(t) {
                var e = 255 & t,
                    A = 255 & t >> 8,
                    r = 255 & t >> 16,
                    n = 255 & t >> 24;
                return e < 255 ? "rgba(" + n + "," + r + "," + A + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + A + ")"
            },
            Ae = function(t, e, A, r) { return (t << 24 | e << 16 | A << 8 | Math.round(255 * r) << 0) >>> 0 },
            re = function(t, e) { if (t.type === h.NUMBER_TOKEN) return t.number; if (t.type === h.PERCENTAGE_TOKEN) { var A = 3 === e ? 1 : 255; return 3 === e ? t.number / 100 * A : Math.round(t.number / 100 * A) } return 0 },
            ne = function(t) {
                var e = t.filter(Mt);
                if (3 === e.length) {
                    var A = e.map(re),
                        r = A[0],
                        n = A[1],
                        i = A[2];
                    return Ae(r, n, i, 1)
                }
                if (4 === e.length) {
                    var o = e.map(re),
                        r = o[0],
                        n = o[1],
                        i = o[2],
                        s = o[3];
                    return Ae(r, n, i, s)
                }
                return 0
            };

        function ie(t, e, A) { return A < 0 && (A += 1), A >= 1 && (A -= 1), A < 1 / 6 ? (e - t) * A * 6 + t : A < .5 ? e : A < 2 / 3 ? 6 * (e - t) * (2 / 3 - A) + t : t }
        var oe, se, ae = function(t) {
                var e = t.filter(Mt),
                    A = e[0],
                    r = e[1],
                    n = e[2],
                    i = e[3],
                    o = (A.type === h.NUMBER_TOKEN ? Zt(A.number) : Jt.parse(A)) / (2 * Math.PI),
                    s = kt(r) ? r.number / 100 : 0,
                    a = kt(n) ? n.number / 100 : 0,
                    c = void 0 !== i && kt(i) ? Gt(i, 1) : 1;
                if (0 === s) return Ae(255 * a, 255 * a, 255 * a, 1);
                var l = a <= .5 ? a * (s + 1) : a + s - a * s,
                    u = 2 * a - l,
                    f = ie(u, l, o + 1 / 3),
                    d = ie(u, l, o),
                    p = ie(u, l, o - 1 / 3);
                return Ae(255 * f, 255 * d, 255 * p, c)
            },
            ce = { hsl: ae, hsla: ae, rgb: ne, rgba: ne },
            le = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 };
        (function(t) { t[t.VALUE = 0] = "VALUE", t[t.LIST = 1] = "LIST", t[t.IDENT_VALUE = 2] = "IDENT_VALUE", t[t.TYPE_VALUE = 3] = "TYPE_VALUE", t[t.TOKEN_VALUE = 4] = "TOKEN_VALUE" })(oe || (oe = {})),
        function(t) { t[t.BORDER_BOX = 0] = "BORDER_BOX", t[t.PADDING_BOX = 1] = "PADDING_BOX", t[t.CONTENT_BOX = 2] = "CONTENT_BOX" }(se || (se = {}));
        var ue, he, fe, de = {
                name: "background-clip",
                initialValue: "border-box",
                prefix: !1,
                type: oe.LIST,
                parse: function(t) {
                    return t.map(function(t) {
                        if (It(t)) switch (t.value) {
                            case "padding-box":
                                return se.PADDING_BOX;
                            case "content-box":
                                return se.CONTENT_BOX
                        }
                        return se.BORDER_BOX
                    })
                }
            },
            pe = { name: "background-color", initialValue: "transparent", prefix: !1, type: oe.TYPE_VALUE, format: "color" },
            ge = function(t) {
                var e = $t.parse(t[0]),
                    A = t[1];
                return A && kt(A) ? { color: e, stop: A } : { color: e, stop: null }
            },
            Be = function(t, e) {
                var A = t[0],
                    r = t[t.length - 1];
                null === A.stop && (A.stop = jt), null === r.stop && (r.stop = Vt);
                for (var n = [], i = 0, o = 0; o < t.length; o++) {
                    var s = t[o].stop;
                    if (null !== s) {
                        var a = Gt(s, e);
                        a > i ? n.push(a) : n.push(i), i = a
                    } else n.push(null)
                }
                for (var c = null, o = 0; o < n.length; o++) {
                    var l = n[o];
                    if (null === l) null === c && (c = o);
                    else if (null !== c) {
                        for (var u = o - c, h = n[c - 1], f = (l - h) / (u + 1), d = 1; d <= u; d++) n[c + d - 1] = f * d;
                        c = null
                    }
                }
                return t.map(function(t, A) { var r = t.color; return { color: r, stop: Math.max(Math.min(1, n[A] / e), 0) } })
            },
            we = function(t, e, A) {
                var r = "number" == typeof t ? t : function(t, e, A) {
                        var r = e / 2,
                            n = A / 2,
                            i = Gt(t[0], e) - r,
                            o = n - Gt(t[1], A);
                        return (Math.atan2(o, i) + 2 * Math.PI) % (2 * Math.PI)
                    }(t, e, A),
                    n = Math.abs(e * Math.sin(r)) + Math.abs(A * Math.cos(r)),
                    i = e / 2,
                    o = A / 2,
                    s = n / 2,
                    a = Math.sin(r - Math.PI / 2) * s,
                    c = Math.cos(r - Math.PI / 2) * s;
                return [n, i - c, i + c, o - a, o + a]
            },
            me = function(t, e) { return Math.sqrt(t * t + e * e) },
            ye = function(t, e, A, r, n) {
                var i = [
                    [0, 0],
                    [0, e],
                    [t, 0],
                    [t, e]
                ];
                return i.reduce(function(t, e) {
                    var i = e[0],
                        o = e[1],
                        s = me(A - i, r - o);
                    return (n ? s < t.optimumDistance : s > t.optimumDistance) ? { optimumCorner: e, optimumDistance: s } : t
                }, { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner
            },
            ve = function(t) {
                var e = Zt(180),
                    A = [];
                return Pt(t).forEach(function(t, r) {
                    if (0 === r) { var n = t[0]; if (n.type === h.IDENT_TOKEN && -1 !== ["top", "left", "right", "bottom"].indexOf(n.value)) return void(e = Yt(t)); if (Wt(n)) return void(e = (Jt.parse(n) + Zt(270)) % Zt(360)) }
                    var i = ge(t);
                    A.push(i)
                }), { angle: e, stops: A, type: ue.LINEAR_GRADIENT }
            },
            be = function(t) { return 0 === t[0] && 255 === t[1] && 0 === t[2] && 255 === t[3] },
            Ce = function(t, e, A, r, n) {
                var i = "http://www.w3.org/2000/svg",
                    o = document.createElementNS(i, "svg"),
                    s = document.createElementNS(i, "foreignObject");
                return o.setAttributeNS(null, "width", t.toString()), o.setAttributeNS(null, "height", e.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", A.toString()), s.setAttributeNS(null, "y", r.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(s), s.appendChild(n), o
            },
            Qe = function(t) {
                return new Promise(function(e, A) {
                    var r = new Image;
                    r.onload = function() { return e(r) }, r.onerror = A, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(t))
                })
            },
            Fe = {get SUPPORT_RANGE_BOUNDS() {
                    var t = function(t) {
                        if (t.createRange) {
                            var e = t.createRange();
                            if (e.getBoundingClientRect) {
                                var A = t.createElement("boundtest");
                                A.style.height = "123px", A.style.display = "block", t.body.appendChild(A), e.selectNode(A);
                                var r = e.getBoundingClientRect(),
                                    n = Math.round(r.height);
                                if (t.body.removeChild(A), 123 === n) return !0
                            }
                        }
                        return !1
                    }(document);
                    return Object.defineProperty(Fe, "SUPPORT_RANGE_BOUNDS", { value: t }), t
                },
                get SUPPORT_SVG_DRAWING() {
                    var t = function(t) {
                        var e = new Image,
                            A = t.createElement("canvas"),
                            r = A.getContext("2d");
                        if (!r) return !1;
                        e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                        try { r.drawImage(e, 0, 0), A.toDataURL() } catch (t) { return !1 }
                        return !0
                    }(document);
                    return Object.defineProperty(Fe, "SUPPORT_SVG_DRAWING", { value: t }), t
                },
                get SUPPORT_FOREIGNOBJECT_DRAWING() {
                    var t = "function" == typeof Array.from && "function" == typeof window.fetch ? function(t) {
                        var e = t.createElement("canvas");
                        e.width = 100, e.height = 100;
                        var A = e.getContext("2d");
                        if (!A) return Promise.reject(!1);
                        A.fillStyle = "rgb(0, 255, 0)", A.fillRect(0, 0, 100, 100);
                        var r = new Image,
                            n = e.toDataURL();
                        r.src = n;
                        var i = Ce(100, 100, 0, 0, r);
                        return A.fillStyle = "red", A.fillRect(0, 0, 100, 100), Qe(i).then(function(e) {
                            A.drawImage(e, 0, 0);
                            var r = A.getImageData(0, 0, 100, 100).data;
                            A.fillStyle = "red", A.fillRect(0, 0, 100, 100);
                            var i = t.createElement("div");
                            return i.style.backgroundImage = "url(" + n + ")", i.style.height = "100px", be(r) ? Qe(Ce(100, 100, 0, 0, i)) : Promise.reject(!1)
                        }).then(function(t) { return A.drawImage(t, 0, 0), be(A.getImageData(0, 0, 100, 100).data) }).catch(function() { return !1 })
                    }(document) : Promise.resolve(!1);
                    return Object.defineProperty(Fe, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t
                },
                get SUPPORT_CORS_IMAGES() { var t = void 0 !== (new Image).crossOrigin; return Object.defineProperty(Fe, "SUPPORT_CORS_IMAGES", { value: t }), t },
                get SUPPORT_RESPONSE_TYPE() { var t = "string" == typeof(new XMLHttpRequest).responseType; return Object.defineProperty(Fe, "SUPPORT_RESPONSE_TYPE", { value: t }), t },
                get SUPPORT_CORS_XHR() { var t = "withCredentials" in new XMLHttpRequest; return Object.defineProperty(Fe, "SUPPORT_CORS_XHR", { value: t }), t }
            },
            Ue = function() {
                function t(t) {
                    var e = t.id,
                        A = t.enabled;
                    this.id = e, this.enabled = A, this.start = Date.now()
                }
                return t.prototype.debug = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, [this.id, this.getTime() + "ms"].concat(t)) : this.info.apply(this, t))
                }, t.prototype.getTime = function() { return Date.now() - this.start }, t.create = function(e) { t.instances[e.id] = new t(e) }, t.destroy = function(e) { delete t.instances[e] }, t.getInstance = function(e) { var A = t.instances[e]; if (void 0 === A) throw new Error("No logger instance found with id " + e); return A }, t.prototype.info = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, [this.id, this.getTime() + "ms"].concat(t))
                }, t.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, [this.id, this.getTime() + "ms"].concat(t)) : this.info.apply(this, t))
                }, t.instances = {}, t
            }(),
            Ee = function() {
                function t() {}
                return t.create = function(e, A) { return t._caches[e] = new Ne(e, A) }, t.destroy = function(e) { delete t._caches[e] }, t.open = function(e) { var A = t._caches[e]; if (void 0 !== A) return A; throw new Error('Cache with key "' + e + '" not found') }, t.getOrigin = function(e) { var A = t._link; return A ? (A.href = e, A.href = A.href, A.protocol + A.hostname + A.port) : "about:blank" }, t.isSameOrigin = function(e) { return t.getOrigin(e) === t._origin }, t.setContext = function(e) { t._link = e.document.createElement("a"), t._origin = t.getOrigin(e.location.href) }, t.getInstance = function() { var e = t._current; if (null === e) throw new Error("No cache instance attached"); return e }, t.attachInstance = function(e) { t._current = e }, t.detachInstance = function() { t._current = null }, t._caches = {}, t._origin = "about:blank", t._current = null, t
            }(),
            Ne = function() {
                function t(t, e) { this.id = t, this._options = e, this._cache = {} }
                return t.prototype.addImage = function(t) { var e = Promise.resolve(); return this.has(t) ? e : Te(t) || He(t) ? (this._cache[t] = this.loadImage(t), e) : e }, t.prototype.match = function(t) { return this._cache[t] }, t.prototype.loadImage = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, A, r, i, o = this;
                        return n(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = Ee.isSameOrigin(t), A = !Se(t) && !0 === this._options.useCORS && Fe.SUPPORT_CORS_IMAGES && !e, r = !Se(t) && !e && "string" == typeof this._options.proxy && Fe.SUPPORT_CORS_XHR && !A, e || !1 !== this._options.allowTaint || Se(t) || r || A ? (i = t, r ? [4, this.proxy(i)] : [3, 2]) : [2];
                                case 1:
                                    i = n.sent(), n.label = 2;
                                case 2:
                                    return Ue.getInstance(this.id).debug("Added image " + t.substring(0, 256)), [4, new Promise(function(t, e) {
                                        var r = new Image;
                                        r.onload = function() { return t(r) }, r.onerror = e, (Ie(i) || A) && (r.crossOrigin = "anonymous"), r.src = i, !0 === r.complete && setTimeout(function() { return t(r) }, 500), o._options.imageTimeout > 0 && setTimeout(function() { return e("Timed out (" + o._options.imageTimeout + "ms) loading image") }, o._options.imageTimeout)
                                    })];
                                case 3:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.has = function(t) { return void 0 !== this._cache[t] }, t.prototype.keys = function() { return Promise.resolve(Object.keys(this._cache)) }, t.prototype.proxy = function(t) {
                    var e = this,
                        A = this._options.proxy;
                    if (!A) throw new Error("No proxy defined");
                    var r = t.substring(0, 256);
                    return new Promise(function(n, i) {
                        var o = Fe.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                            s = new XMLHttpRequest;
                        if (s.onload = function() {
                                if (200 === s.status)
                                    if ("text" === o) n(s.response);
                                    else {
                                        var t = new FileReader;
                                        t.addEventListener("load", function() { return n(t.result) }, !1), t.addEventListener("error", function(t) { return i(t) }, !1), t.readAsDataURL(s.response)
                                    }
                                else i("Failed to proxy resource " + r + " with status code " + s.status)
                            }, s.onerror = i, s.open("GET", A + "?url=" + encodeURIComponent(t) + "&responseType=" + o), "text" !== o && s instanceof XMLHttpRequest && (s.responseType = o), e._options.imageTimeout) {
                            var a = e._options.imageTimeout;
                            s.timeout = a, s.ontimeout = function() { return i("Timed out (" + a + "ms) proxying " + r) }
                        }
                        s.send()
                    })
                }, t
            }(),
            Le = /^data:image\/svg\+xml/i,
            xe = /^data:image\/.*;base64,/i,
            _e = /^data:image\/.*/i,
            He = function(t) { return Fe.SUPPORT_SVG_DRAWING || !Re(t) },
            Se = function(t) { return _e.test(t) },
            Ie = function(t) { return xe.test(t) },
            Te = function(t) { return "blob" === t.substr(0, 4) },
            Re = function(t) { return "svg" === t.substr(-3).toLowerCase() || Le.test(t) },
            Oe = function(t) {
                var e = he.CIRCLE,
                    A = fe.FARTHEST_CORNER,
                    r = [],
                    n = [];
                return Pt(t).forEach(function(t, i) {
                    var o = !0;
                    if (0 === i ? o = t.reduce(function(t, e) {
                            if (It(e)) switch (e.value) {
                                    case "center":
                                        return n.push(qt), !1;
                                    case "top":
                                    case "left":
                                        return n.push(jt), !1;
                                    case "right":
                                    case "bottom":
                                        return n.push(Vt), !1
                                } else if (kt(e) || Dt(e)) return n.push(e), !1;
                            return t
                        }, o) : 1 === i && (o = t.reduce(function(t, r) {
                            if (It(r)) switch (r.value) {
                                    case "circle":
                                        return e = he.CIRCLE, !1;
                                    case "ellipse":
                                        return e = he.ELLIPSE, !1;
                                    case "contain":
                                    case "closest-side":
                                        return A = fe.CLOSEST_SIDE, !1;
                                    case "farthest-side":
                                        return A = fe.FARTHEST_SIDE, !1;
                                    case "closest-corner":
                                        return A = fe.CLOSEST_CORNER, !1;
                                    case "cover":
                                    case "farthest-corner":
                                        return A = fe.FARTHEST_CORNER, !1
                                } else if (Dt(r) || kt(r)) return Array.isArray(A) || (A = []), A.push(r), !1;
                            return t
                        }, o)), o) {
                        var s = ge(t);
                        r.push(s)
                    }
                }), { size: A, shape: e, stops: r, position: n, type: ue.RADIAL_GRADIENT }
            };
        ! function(t) { t[t.URL = 0] = "URL", t[t.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT", t[t.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT" }(ue || (ue = {})),
        function(t) { t[t.CIRCLE = 0] = "CIRCLE", t[t.ELLIPSE = 1] = "ELLIPSE" }(he || (he = {})),
        function(t) { t[t.CLOSEST_SIDE = 0] = "CLOSEST_SIDE", t[t.FARTHEST_SIDE = 1] = "FARTHEST_SIDE", t[t.CLOSEST_CORNER = 2] = "CLOSEST_CORNER", t[t.FARTHEST_CORNER = 3] = "FARTHEST_CORNER" }(fe || (fe = {}));
        var Me, Pe = { name: "image", parse: function(t) { if (t.type === h.URL_TOKEN) { var e = { url: t.value, type: ue.URL }; return Ee.getInstance().addImage(t.value), e } if (t.type === h.FUNCTION) { var A = Ke[t.name]; if (void 0 === A) throw new Error('Attempting to parse an unsupported image function "' + t.name + '"'); return A(t.values) } throw new Error("Unsupported image type") } },
            Ke = {
                "linear-gradient": function(t) {
                    var e = Zt(180),
                        A = [];
                    return Pt(t).forEach(function(t, r) {
                        if (0 === r) { var n = t[0]; if (n.type === h.IDENT_TOKEN && "to" === n.value) return void(e = Yt(t)); if (Wt(n)) return void(e = Jt.parse(n)) }
                        var i = ge(t);
                        A.push(i)
                    }), { angle: e, stops: A, type: ue.LINEAR_GRADIENT }
                },
                "-moz-linear-gradient": ve,
                "-ms-linear-gradient": ve,
                "-o-linear-gradient": ve,
                "-webkit-linear-gradient": ve,
                "radial-gradient": function(t) {
                    var e = he.CIRCLE,
                        A = fe.FARTHEST_CORNER,
                        r = [],
                        n = [];
                    return Pt(t).forEach(function(t, i) {
                        var o = !0;
                        if (0 === i) {
                            var s = !1;
                            o = t.reduce(function(t, r) {
                                if (s)
                                    if (It(r)) switch (r.value) {
                                        case "center":
                                            return n.push(qt), t;
                                        case "top":
                                        case "left":
                                            return n.push(jt), t;
                                        case "right":
                                        case "bottom":
                                            return n.push(Vt), t
                                    } else(kt(r) || Dt(r)) && n.push(r);
                                    else if (It(r)) switch (r.value) {
                                        case "circle":
                                            return e = he.CIRCLE, !1;
                                        case "ellipse":
                                            return e = he.ELLIPSE, !1;
                                        case "at":
                                            return s = !0, !1;
                                        case "closest-side":
                                            return A = fe.CLOSEST_SIDE, !1;
                                        case "cover":
                                        case "farthest-side":
                                            return A = fe.FARTHEST_SIDE, !1;
                                        case "contain":
                                        case "closest-corner":
                                            return A = fe.CLOSEST_CORNER, !1;
                                        case "farthest-corner":
                                            return A = fe.FARTHEST_CORNER, !1
                                    } else if (Dt(r) || kt(r)) return Array.isArray(A) || (A = []), A.push(r), !1;
                                return t
                            }, o)
                        }
                        if (o) {
                            var a = ge(t);
                            r.push(a)
                        }
                    }), { size: A, shape: e, stops: r, position: n, type: ue.RADIAL_GRADIENT }
                },
                "-moz-radial-gradient": Oe,
                "-ms-radial-gradient": Oe,
                "-o-radial-gradient": Oe,
                "-webkit-radial-gradient": Oe,
                "-webkit-gradient": function(t) {
                    var e = Zt(180),
                        A = [],
                        r = ue.LINEAR_GRADIENT,
                        n = he.CIRCLE,
                        i = fe.FARTHEST_CORNER;
                    return Pt(t).forEach(function(t, e) {
                        var n = t[0];
                        if (0 === e) { if (It(n) && "linear" === n.value) return void(r = ue.LINEAR_GRADIENT); if (It(n) && "radial" === n.value) return void(r = ue.RADIAL_GRADIENT) }
                        if (n.type === h.FUNCTION)
                            if ("from" === n.name) {
                                var i = $t.parse(n.values[0]);
                                A.push({ stop: jt, color: i })
                            } else if ("to" === n.name) i = $t.parse(n.values[0]), A.push({ stop: Vt, color: i });
                        else if ("color-stop" === n.name) {
                            var o = n.values.filter(Mt);
                            if (2 === o.length) {
                                i = $t.parse(o[1]);
                                var s = o[0];
                                St(s) && A.push({ stop: { type: h.PERCENTAGE_TOKEN, number: 100 * s.number, flags: s.flags }, color: i })
                            }
                        }
                    }), r === ue.LINEAR_GRADIENT ? { angle: (e + Zt(180)) % Zt(360), stops: A, type: r } : { size: i, shape: n, stops: A, position: [], type: r }
                }
            },
            De = { name: "background-image", initialValue: "none", type: oe.LIST, prefix: !1, parse: function(t) { if (0 === t.length) return []; var e = t[0]; return e.type === h.IDENT_TOKEN && "none" === e.value ? [] : t.filter(function(t) { return Mt(t) && function(t) { return t.type !== h.FUNCTION || Ke[t.name] }(t) }).map(Pe.parse) } },
            ke = {
                name: "background-origin",
                initialValue: "border-box",
                prefix: !1,
                type: oe.LIST,
                parse: function(t) {
                    return t.map(function(t) {
                        if (It(t)) switch (t.value) {
                            case "padding-box":
                                return 1;
                            case "content-box":
                                return 2
                        }
                        return 0
                    })
                }
            },
            ze = { name: "background-position", initialValue: "0% 0%", type: oe.LIST, prefix: !1, parse: function(t) { return Pt(t).map(function(t) { return t.filter(kt) }).map(zt) } };
        ! function(t) { t[t.REPEAT = 0] = "REPEAT", t[t.NO_REPEAT = 1] = "NO_REPEAT", t[t.REPEAT_X = 2] = "REPEAT_X", t[t.REPEAT_Y = 3] = "REPEAT_Y" }(Me || (Me = {}));
        var je, qe = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: oe.LIST, parse: function(t) { return Pt(t).map(function(t) { return t.filter(It).map(function(t) { return t.value }).join(" ") }).map(Ve) } },
            Ve = function(t) {
                switch (t) {
                    case "no-repeat":
                        return Me.NO_REPEAT;
                    case "repeat-x":
                    case "repeat no-repeat":
                        return Me.REPEAT_X;
                    case "repeat-y":
                    case "no-repeat repeat":
                        return Me.REPEAT_Y;
                    case "repeat":
                    default:
                        return Me.REPEAT
                }
            };
        ! function(t) { t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover" }(je || (je = {}));
        var Xe, Ge = { name: "background-size", initialValue: "0", prefix: !1, type: oe.LIST, parse: function(t) { return Pt(t).map(function(t) { return t.filter(Je) }) } },
            Je = function(t) { return It(t) || kt(t) },
            We = function(t) { return { name: "border-" + t + "-color", initialValue: "transparent", prefix: !1, type: oe.TYPE_VALUE, format: "color" } },
            Ye = We("top"),
            Ze = We("right"),
            $e = We("bottom"),
            tA = We("left"),
            eA = function(t) { return { name: "border-radius-" + t, initialValue: "0 0", prefix: !1, type: oe.LIST, parse: function(t) { return zt(t.filter(kt)) } } },
            AA = eA("top-left"),
            rA = eA("top-right"),
            nA = eA("bottom-right"),
            iA = eA("bottom-left");
        ! function(t) { t[t.NONE = 0] = "NONE", t[t.SOLID = 1] = "SOLID" }(Xe || (Xe = {}));
        var oA, sA = function(t) {
                return {
                    name: "border-" + t + "-style",
                    initialValue: "solid",
                    prefix: !1,
                    type: oe.IDENT_VALUE,
                    parse: function(t) {
                        switch (t) {
                            case "none":
                                return Xe.NONE
                        }
                        return Xe.SOLID
                    }
                }
            },
            aA = sA("top"),
            cA = sA("right"),
            lA = sA("bottom"),
            uA = sA("left"),
            hA = function(t) { return { name: "border-" + t + "-width", initialValue: "0", type: oe.VALUE, prefix: !1, parse: function(t) { return Ht(t) ? t.number : 0 } } },
            fA = hA("top"),
            dA = hA("right"),
            pA = hA("bottom"),
            gA = hA("left"),
            BA = { name: "color", initialValue: "transparent", prefix: !1, type: oe.TYPE_VALUE, format: "color" },
            wA = { name: "display", initialValue: "inline-block", prefix: !1, type: oe.LIST, parse: function(t) { return t.filter(It).reduce(function(t, e) { return t | mA(e.value) }, 0) } },
            mA = function(t) {
                switch (t) {
                    case "block":
                        return 2;
                    case "inline":
                        return 4;
                    case "run-in":
                        return 8;
                    case "flow":
                        return 16;
                    case "flow-root":
                        return 32;
                    case "table":
                        return 64;
                    case "flex":
                    case "-webkit-flex":
                        return 128;
                    case "grid":
                    case "-ms-grid":
                        return 256;
                    case "ruby":
                        return 512;
                    case "subgrid":
                        return 1024;
                    case "list-item":
                        return 2048;
                    case "table-row-group":
                        return 4096;
                    case "table-header-group":
                        return 8192;
                    case "table-footer-group":
                        return 16384;
                    case "table-row":
                        return 32768;
                    case "table-cell":
                        return 65536;
                    case "table-column-group":
                        return 131072;
                    case "table-column":
                        return 262144;
                    case "table-caption":
                        return 524288;
                    case "ruby-base":
                        return 1048576;
                    case "ruby-text":
                        return 2097152;
                    case "ruby-base-container":
                        return 4194304;
                    case "ruby-text-container":
                        return 8388608;
                    case "contents":
                        return 16777216;
                    case "inline-block":
                        return 33554432;
                    case "inline-list-item":
                        return 67108864;
                    case "inline-table":
                        return 134217728;
                    case "inline-flex":
                        return 268435456;
                    case "inline-grid":
                        return 536870912
                }
                return 0
            };
        ! function(t) { t[t.NONE = 0] = "NONE", t[t.LEFT = 1] = "LEFT", t[t.RIGHT = 2] = "RIGHT", t[t.INLINE_START = 3] = "INLINE_START", t[t.INLINE_END = 4] = "INLINE_END" }(oA || (oA = {}));
        var yA, vA = {
                name: "float",
                initialValue: "none",
                prefix: !1,
                type: oe.IDENT_VALUE,
                parse: function(t) {
                    switch (t) {
                        case "left":
                            return oA.LEFT;
                        case "right":
                            return oA.RIGHT;
                        case "inline-start":
                            return oA.INLINE_START;
                        case "inline-end":
                            return oA.INLINE_END
                    }
                    return oA.NONE
                }
            },
            bA = { name: "letter-spacing", initialValue: "0", prefix: !1, type: oe.VALUE, parse: function(t) { return t.type === h.IDENT_TOKEN && "normal" === t.value ? 0 : t.type === h.NUMBER_TOKEN ? t.number : t.type === h.DIMENSION_TOKEN ? t.number : 0 } };
        ! function(t) { t.NORMAL = "normal", t.STRICT = "strict" }(yA || (yA = {}));
        var CA, QA = {
                name: "line-break",
                initialValue: "normal",
                prefix: !1,
                type: oe.IDENT_VALUE,
                parse: function(t) {
                    switch (t) {
                        case "strict":
                            return yA.STRICT;
                        case "normal":
                        default:
                            return yA.NORMAL
                    }
                }
            },
            FA = { name: "line-height", initialValue: "normal", prefix: !1, type: oe.TOKEN_VALUE },
            UA = { name: "list-style-image", initialValue: "none", type: oe.VALUE, prefix: !1, parse: function(t) { return t.type === h.IDENT_TOKEN && "none" === t.value ? null : Pe.parse(t) } };
        ! function(t) { t[t.INSIDE = 0] = "INSIDE", t[t.OUTSIDE = 1] = "OUTSIDE" }(CA || (CA = {}));
        var EA, NA = {
            name: "list-style-position",
            initialValue: "outside",
            prefix: !1,
            type: oe.IDENT_VALUE,
            parse: function(t) {
                switch (t) {
                    case "inside":
                        return CA.INSIDE;
                    case "outside":
                    default:
                        return CA.OUTSIDE
                }
            }
        };
        ! function(t) { t[t.NONE = -1] = "NONE", t[t.DISC = 0] = "DISC", t[t.CIRCLE = 1] = "CIRCLE", t[t.SQUARE = 2] = "SQUARE", t[t.DECIMAL = 3] = "DECIMAL", t[t.CJK_DECIMAL = 4] = "CJK_DECIMAL", t[t.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO", t[t.LOWER_ROMAN = 6] = "LOWER_ROMAN", t[t.UPPER_ROMAN = 7] = "UPPER_ROMAN", t[t.LOWER_GREEK = 8] = "LOWER_GREEK", t[t.LOWER_ALPHA = 9] = "LOWER_ALPHA", t[t.UPPER_ALPHA = 10] = "UPPER_ALPHA", t[t.ARABIC_INDIC = 11] = "ARABIC_INDIC", t[t.ARMENIAN = 12] = "ARMENIAN", t[t.BENGALI = 13] = "BENGALI", t[t.CAMBODIAN = 14] = "CAMBODIAN", t[t.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH", t[t.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM", t[t.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC", t[t.DEVANAGARI = 18] = "DEVANAGARI", t[t.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC", t[t.GEORGIAN = 20] = "GEORGIAN", t[t.GUJARATI = 21] = "GUJARATI", t[t.GURMUKHI = 22] = "GURMUKHI", t[t.HEBREW = 22] = "HEBREW", t[t.HIRAGANA = 23] = "HIRAGANA", t[t.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA", t[t.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL", t[t.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL", t[t.KANNADA = 27] = "KANNADA", t[t.KATAKANA = 28] = "KATAKANA", t[t.KATAKANA_IROHA = 29] = "KATAKANA_IROHA", t[t.KHMER = 30] = "KHMER", t[t.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL", t[t.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL", t[t.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL", t[t.LAO = 34] = "LAO", t[t.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN", t[t.MALAYALAM = 36] = "MALAYALAM", t[t.MONGOLIAN = 37] = "MONGOLIAN", t[t.MYANMAR = 38] = "MYANMAR", t[t.ORIYA = 39] = "ORIYA", t[t.PERSIAN = 40] = "PERSIAN", t[t.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL", t[t.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL", t[t.TAMIL = 43] = "TAMIL", t[t.TELUGU = 44] = "TELUGU", t[t.THAI = 45] = "THAI", t[t.TIBETAN = 46] = "TIBETAN", t[t.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL", t[t.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL", t[t.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN", t[t.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN", t[t.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED" }(EA || (EA = {}));
        var LA, xA = {
                name: "list-style-type",
                initialValue: "none",
                prefix: !1,
                type: oe.IDENT_VALUE,
                parse: function(t) {
                    switch (t) {
                        case "disc":
                            return EA.DISC;
                        case "circle":
                            return EA.CIRCLE;
                        case "square":
                            return EA.SQUARE;
                        case "decimal":
                            return EA.DECIMAL;
                        case "cjk-decimal":
                            return EA.CJK_DECIMAL;
                        case "decimal-leading-zero":
                            return EA.DECIMAL_LEADING_ZERO;
                        case "lower-roman":
                            return EA.LOWER_ROMAN;
                        case "upper-roman":
                            return EA.UPPER_ROMAN;
                        case "lower-greek":
                            return EA.LOWER_GREEK;
                        case "lower-alpha":
                            return EA.LOWER_ALPHA;
                        case "upper-alpha":
                            return EA.UPPER_ALPHA;
                        case "arabic-indic":
                            return EA.ARABIC_INDIC;
                        case "armenian":
                            return EA.ARMENIAN;
                        case "bengali":
                            return EA.BENGALI;
                        case "cambodian":
                            return EA.CAMBODIAN;
                        case "cjk-earthly-branch":
                            return EA.CJK_EARTHLY_BRANCH;
                        case "cjk-heavenly-stem":
                            return EA.CJK_HEAVENLY_STEM;
                        case "cjk-ideographic":
                            return EA.CJK_IDEOGRAPHIC;
                        case "devanagari":
                            return EA.DEVANAGARI;
                        case "ethiopic-numeric":
                            return EA.ETHIOPIC_NUMERIC;
                        case "georgian":
                            return EA.GEORGIAN;
                        case "gujarati":
                            return EA.GUJARATI;
                        case "gurmukhi":
                            return EA.GURMUKHI;
                        case "hebrew":
                            return EA.HEBREW;
                        case "hiragana":
                            return EA.HIRAGANA;
                        case "hiragana-iroha":
                            return EA.HIRAGANA_IROHA;
                        case "japanese-formal":
                            return EA.JAPANESE_FORMAL;
                        case "japanese-informal":
                            return EA.JAPANESE_INFORMAL;
                        case "kannada":
                            return EA.KANNADA;
                        case "katakana":
                            return EA.KATAKANA;
                        case "katakana-iroha":
                            return EA.KATAKANA_IROHA;
                        case "khmer":
                            return EA.KHMER;
                        case "korean-hangul-formal":
                            return EA.KOREAN_HANGUL_FORMAL;
                        case "korean-hanja-formal":
                            return EA.KOREAN_HANJA_FORMAL;
                        case "korean-hanja-informal":
                            return EA.KOREAN_HANJA_INFORMAL;
                        case "lao":
                            return EA.LAO;
                        case "lower-armenian":
                            return EA.LOWER_ARMENIAN;
                        case "malayalam":
                            return EA.MALAYALAM;
                        case "mongolian":
                            return EA.MONGOLIAN;
                        case "myanmar":
                            return EA.MYANMAR;
                        case "oriya":
                            return EA.ORIYA;
                        case "persian":
                            return EA.PERSIAN;
                        case "simp-chinese-formal":
                            return EA.SIMP_CHINESE_FORMAL;
                        case "simp-chinese-informal":
                            return EA.SIMP_CHINESE_INFORMAL;
                        case "tamil":
                            return EA.TAMIL;
                        case "telugu":
                            return EA.TELUGU;
                        case "thai":
                            return EA.THAI;
                        case "tibetan":
                            return EA.TIBETAN;
                        case "trad-chinese-formal":
                            return EA.TRAD_CHINESE_FORMAL;
                        case "trad-chinese-informal":
                            return EA.TRAD_CHINESE_INFORMAL;
                        case "upper-armenian":
                            return EA.UPPER_ARMENIAN;
                        case "disclosure-open":
                            return EA.DISCLOSURE_OPEN;
                        case "disclosure-closed":
                            return EA.DISCLOSURE_CLOSED;
                        case "none":
                        default:
                            return EA.NONE
                    }
                }
            },
            _A = function(t) { return { name: "margin-" + t, initialValue: "0", prefix: !1, type: oe.TOKEN_VALUE } },
            HA = _A("top"),
            SA = _A("right"),
            IA = _A("bottom"),
            TA = _A("left");
        ! function(t) { t[t.VISIBLE = 0] = "VISIBLE", t[t.HIDDEN = 1] = "HIDDEN", t[t.SCROLL = 2] = "SCROLL", t[t.AUTO = 3] = "AUTO" }(LA || (LA = {}));
        var RA, OA = {
            name: "overflow",
            initialValue: "visible",
            prefix: !1,
            type: oe.LIST,
            parse: function(t) {
                return t.filter(It).map(function(t) {
                    switch (t.value) {
                        case "hidden":
                            return LA.HIDDEN;
                        case "scroll":
                            return LA.SCROLL;
                        case "auto":
                            return LA.AUTO;
                        case "visible":
                        default:
                            return LA.VISIBLE
                    }
                })
            }
        };
        ! function(t) { t.NORMAL = "normal", t.BREAK_WORD = "break-word" }(RA || (RA = {}));
        var MA, PA = {
                name: "overflow-wrap",
                initialValue: "normal",
                prefix: !1,
                type: oe.IDENT_VALUE,
                parse: function(t) {
                    switch (t) {
                        case "break-word":
                            return RA.BREAK_WORD;
                        case "normal":
                        default:
                            return RA.NORMAL
                    }
                }
            },
            KA = function(t) { return { name: "padding-" + t, initialValue: "0", prefix: !1, type: oe.TYPE_VALUE, format: "length-percentage" } },
            DA = KA("top"),
            kA = KA("right"),
            zA = KA("bottom"),
            jA = KA("left");
        ! function(t) { t[t.LEFT = 0] = "LEFT", t[t.CENTER = 1] = "CENTER", t[t.RIGHT = 2] = "RIGHT" }(MA || (MA = {}));
        var qA, VA = {
            name: "text-align",
            initialValue: "left",
            prefix: !1,
            type: oe.IDENT_VALUE,
            parse: function(t) {
                switch (t) {
                    case "right":
                        return MA.RIGHT;
                    case "center":
                    case "justify":
                        return MA.CENTER;
                    case "left":
                    default:
                        return MA.LEFT
                }
            }
        };
        ! function(t) { t[t.STATIC = 0] = "STATIC", t[t.RELATIVE = 1] = "RELATIVE", t[t.ABSOLUTE = 2] = "ABSOLUTE", t[t.FIXED = 3] = "FIXED", t[t.STICKY = 4] = "STICKY" }(qA || (qA = {}));
        var XA, GA = {
                name: "position",
                initialValue: "static",
                prefix: !1,
                type: oe.IDENT_VALUE,
                parse: function(t) {
                    switch (t) {
                        case "relative":
                            return qA.RELATIVE;
                        case "absolute":
                            return qA.ABSOLUTE;
                        case "fixed":
                            return qA.FIXED;
                        case "sticky":
                            return qA.STICKY
                    }
                    return qA.STATIC
                }
            },
            JA = {
                name: "text-shadow",
                initialValue: "none",
                type: oe.LIST,
                prefix: !1,
                parse: function(t) {
                    return 1 === t.length && Rt(t[0], "none") ? [] : Pt(t).map(function(t) {
                        for (var e = { color: le.TRANSPARENT, offsetX: jt, offsetY: jt, blur: jt }, A = 0, r = 0; r < t.length; r++) {
                            var n = t[r];
                            Dt(n) ? (0 === A ? e.offsetX = n : 1 === A ? e.offsetY = n : e.blur = n, A++) : e.color = $t.parse(n)
                        }
                        return e
                    })
                }
            };
        ! function(t) { t[t.NONE = 0] = "NONE", t[t.LOWERCASE = 1] = "LOWERCASE", t[t.UPPERCASE = 2] = "UPPERCASE", t[t.CAPITALIZE = 3] = "CAPITALIZE" }(XA || (XA = {}));
        var WA, YA = {
                name: "text-transform",
                initialValue: "none",
                prefix: !1,
                type: oe.IDENT_VALUE,
                parse: function(t) {
                    switch (t) {
                        case "uppercase":
                            return XA.UPPERCASE;
                        case "lowercase":
                            return XA.LOWERCASE;
                        case "capitalize":
                            return XA.CAPITALIZE
                    }
                    return XA.NONE
                }
            },
            ZA = { name: "transform", initialValue: "none", prefix: !0, type: oe.VALUE, parse: function(t) { if (t.type === h.IDENT_TOKEN && "none" === t.value) return null; if (t.type === h.FUNCTION) { var e = $A[t.name]; if (void 0 === e) throw new Error('Attempting to parse an unsupported transform function "' + t.name + '"'); return e(t.values) } return null } },
            $A = {
                matrix: function(t) { var e = t.filter(function(t) { return t.type === h.NUMBER_TOKEN }).map(function(t) { return t.number }); return 6 === e.length ? e : null },
                matrix3d: function(t) {
                    var e = t.filter(function(t) { return t.type === h.NUMBER_TOKEN }).map(function(t) { return t.number }),
                        A = e[0],
                        r = e[1],
                        n = (e[2], e[3], e[4]),
                        i = e[5],
                        o = (e[6], e[7], e[8], e[9], e[10], e[11], e[12]),
                        s = e[13];
                    return e[14], e[15], 16 === e.length ? [A, r, n, i, o, s] : null
                }
            },
            tr = { type: h.PERCENTAGE_TOKEN, number: 50, flags: 4 },
            er = [tr, tr],
            Ar = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: oe.LIST, parse: function(t) { var e = t.filter(kt); return 2 !== e.length ? er : [e[0], e[1]] } };
        ! function(t) { t[t.VISIBLE = 0] = "VISIBLE", t[t.HIDDEN = 1] = "HIDDEN", t[t.COLLAPSE = 2] = "COLLAPSE" }(WA || (WA = {}));
        var rr, nr = {
            name: "visible",
            initialValue: "none",
            prefix: !1,
            type: oe.IDENT_VALUE,
            parse: function(t) {
                switch (t) {
                    case "hidden":
                        return WA.HIDDEN;
                    case "collapse":
                        return WA.COLLAPSE;
                    case "visible":
                    default:
                        return WA.VISIBLE
                }
            }
        };
        ! function(t) { t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all" }(rr || (rr = {}));
        var ir, or = {
                name: "word-break",
                initialValue: "normal",
                prefix: !1,
                type: oe.IDENT_VALUE,
                parse: function(t) {
                    switch (t) {
                        case "break-all":
                            return rr.BREAK_ALL;
                        case "keep-all":
                            return rr.KEEP_ALL;
                        case "normal":
                        default:
                            return rr.NORMAL
                    }
                }
            },
            sr = { name: "z-index", initialValue: "auto", prefix: !1, type: oe.VALUE, parse: function(t) { if (t.type === h.IDENT_TOKEN) return { auto: !0, order: 0 }; if (St(t)) return { auto: !1, order: t.number }; throw new Error("Invalid z-index number parsed") } },
            ar = { name: "opacity", initialValue: "1", type: oe.VALUE, prefix: !1, parse: function(t) { return St(t) ? t.number : 1 } },
            cr = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: oe.TYPE_VALUE, format: "color" },
            lr = {
                name: "text-decoration-line",
                initialValue: "none",
                prefix: !1,
                type: oe.LIST,
                parse: function(t) {
                    return t.filter(It).map(function(t) {
                        switch (t.value) {
                            case "underline":
                                return 1;
                            case "overline":
                                return 2;
                            case "line-through":
                                return 3;
                            case "none":
                                return 4
                        }
                        return 0
                    }).filter(function(t) { return 0 !== t })
                }
            },
            ur = { name: "font-family", initialValue: "", prefix: !1, type: oe.LIST, parse: function(t) { return t.filter(hr).map(function(t) { return t.value }) } },
            hr = function(t) { return t.type === h.STRING_TOKEN || t.type === h.IDENT_TOKEN },
            fr = { name: "font-size", initialValue: "0", prefix: !1, type: oe.TYPE_VALUE, format: "length" },
            dr = {
                name: "font-weight",
                initialValue: "normal",
                type: oe.VALUE,
                prefix: !1,
                parse: function(t) {
                    if (St(t)) return t.number;
                    if (It(t)) switch (t.value) {
                        case "bold":
                            return 700;
                        case "normal":
                        default:
                            return 400
                    }
                    return 400
                }
            },
            pr = { name: "font-variant", initialValue: "none", type: oe.LIST, prefix: !1, parse: function(t) { return t.filter(It).map(function(t) { return t.value }) } };
        ! function(t) { t.NORMAL = "normal", t.ITALIC = "italic", t.OBLIQUE = "oblique" }(ir || (ir = {}));
        var gr, Br = {
                name: "font-style",
                initialValue: "normal",
                prefix: !1,
                type: oe.IDENT_VALUE,
                parse: function(t) {
                    switch (t) {
                        case "oblique":
                            return ir.OBLIQUE;
                        case "italic":
                            return ir.ITALIC;
                        case "normal":
                        default:
                            return ir.NORMAL
                    }
                }
            },
            wr = function(t, e) { return 0 != (t & e) },
            mr = { name: "content", initialValue: "none", type: oe.LIST, prefix: !1, parse: function(t) { if (0 === t.length) return []; var e = t[0]; return e.type === h.IDENT_TOKEN && "none" === e.value ? [] : t } },
            yr = {
                name: "counter-increment",
                initialValue: "none",
                prefix: !0,
                type: oe.LIST,
                parse: function(t) {
                    if (0 === t.length) return null;
                    var e = t[0];
                    if (e.type === h.IDENT_TOKEN && "none" === e.value) return null;
                    for (var A = [], r = t.filter(Ot), n = 0; n < r.length; n++) {
                        var i = r[n],
                            o = r[n + 1];
                        if (i.type === h.IDENT_TOKEN) {
                            var s = o && St(o) ? o.number : 1;
                            A.push({ counter: i.value, increment: s })
                        }
                    }
                    return A
                }
            },
            vr = {
                name: "counter-reset",
                initialValue: "none",
                prefix: !0,
                type: oe.LIST,
                parse: function(t) {
                    if (0 === t.length) return [];
                    for (var e = [], A = t.filter(Ot), r = 0; r < A.length; r++) {
                        var n = A[r],
                            i = A[r + 1];
                        if (It(n) && "none" !== n.value) {
                            var o = i && St(i) ? i.number : 0;
                            e.push({ counter: n.value, reset: o })
                        }
                    }
                    return e
                }
            },
            br = {
                name: "quotes",
                initialValue: "none",
                prefix: !0,
                type: oe.LIST,
                parse: function(t) {
                    if (0 === t.length) return null;
                    var e = t[0];
                    if (e.type === h.IDENT_TOKEN && "none" === e.value) return null;
                    var A = [],
                        r = t.filter(Tt);
                    if (r.length % 2 != 0) return null;
                    for (var n = 0; n < r.length; n += 2) {
                        var i = r[n].value,
                            o = r[n + 1].value;
                        A.push({ open: i, close: o })
                    }
                    return A
                }
            },
            Cr = function(t, e, A) { if (!t) return ""; var r = t[Math.min(e, t.length - 1)]; return r ? A ? r.open : r.close : "" },
            Qr = {
                name: "box-shadow",
                initialValue: "none",
                type: oe.LIST,
                prefix: !1,
                parse: function(t) {
                    return 1 === t.length && Rt(t[0], "none") ? [] : Pt(t).map(function(t) {
                        for (var e = { color: 255, offsetX: jt, offsetY: jt, blur: jt, spread: jt, inset: !1 }, A = 0, r = 0; r < t.length; r++) {
                            var n = t[r];
                            Rt(n, "inset") ? e.inset = !0 : Dt(n) ? (0 === A ? e.offsetX = n : 1 === A ? e.offsetY = n : 2 === A ? e.blur = n : e.spread = n, A++) : e.color = $t.parse(n)
                        }
                        return e
                    })
                }
            },
            Fr = function() {
                function t(t) {
                    this.backgroundClip = Nr(de, t.backgroundClip), this.backgroundColor = Nr(pe, t.backgroundColor), this.backgroundImage = Nr(De, t.backgroundImage), this.backgroundOrigin = Nr(ke, t.backgroundOrigin), this.backgroundPosition = Nr(ze, t.backgroundPosition), this.backgroundRepeat = Nr(qe, t.backgroundRepeat), this.backgroundSize = Nr(Ge, t.backgroundSize), this.borderTopColor = Nr(Ye, t.borderTopColor), this.borderRightColor = Nr(Ze, t.borderRightColor), this.borderBottomColor = Nr($e, t.borderBottomColor), this.borderLeftColor = Nr(tA, t.borderLeftColor), this.borderTopLeftRadius = Nr(AA, t.borderTopLeftRadius), this.borderTopRightRadius = Nr(rA, t.borderTopRightRadius), this.borderBottomRightRadius = Nr(nA, t.borderBottomRightRadius), this.borderBottomLeftRadius = Nr(iA, t.borderBottomLeftRadius), this.borderTopStyle = Nr(aA, t.borderTopStyle), this.borderRightStyle = Nr(cA, t.borderRightStyle), this.borderBottomStyle = Nr(lA, t.borderBottomStyle), this.borderLeftStyle = Nr(uA, t.borderLeftStyle), this.borderTopWidth = Nr(fA, t.borderTopWidth), this.borderRightWidth = Nr(dA, t.borderRightWidth), this.borderBottomWidth = Nr(pA, t.borderBottomWidth), this.borderLeftWidth = Nr(gA, t.borderLeftWidth), this.boxShadow = Nr(Qr, t.boxShadow), this.color = Nr(BA, t.color), this.display = Nr(wA, t.display), this.float = Nr(vA, t.cssFloat), this.fontFamily = Nr(ur, t.fontFamily), this.fontSize = Nr(fr, t.fontSize), this.fontStyle = Nr(Br, t.fontStyle), this.fontVariant = Nr(pr, t.fontVariant), this.fontWeight = Nr(dr, t.fontWeight), this.letterSpacing = Nr(bA, t.letterSpacing), this.lineBreak = Nr(QA, t.lineBreak), this.lineHeight = Nr(FA, t.lineHeight), this.listStyleImage = Nr(UA, t.listStyleImage), this.listStylePosition = Nr(NA, t.listStylePosition), this.listStyleType = Nr(xA, t.listStyleType), this.marginTop = Nr(HA, t.marginTop), this.marginRight = Nr(SA, t.marginRight), this.marginBottom = Nr(IA, t.marginBottom), this.marginLeft = Nr(TA, t.marginLeft), this.opacity = Nr(ar, t.opacity);
                    var e = Nr(OA, t.overflow);
                    this.overflowX = e[0], this.overflowY = e[e.length > 1 ? 1 : 0], this.overflowWrap = Nr(PA, t.overflowWrap), this.paddingTop = Nr(DA, t.paddingTop), this.paddingRight = Nr(kA, t.paddingRight), this.paddingBottom = Nr(zA, t.paddingBottom), this.paddingLeft = Nr(jA, t.paddingLeft), this.position = Nr(GA, t.position), this.textAlign = Nr(VA, t.textAlign), this.textDecorationColor = Nr(cr, t.textDecorationColor || t.color), this.textDecorationLine = Nr(lr, t.textDecorationLine), this.textShadow = Nr(JA, t.textShadow), this.textTransform = Nr(YA, t.textTransform), this.transform = Nr(ZA, t.transform), this.transformOrigin = Nr(Ar, t.transformOrigin), this.visibility = Nr(nr, t.visibility), this.wordBreak = Nr(or, t.wordBreak), this.zIndex = Nr(sr, t.zIndex)
                }
                return t.prototype.isVisible = function() { return this.display > 0 && this.opacity > 0 && this.visibility === WA.VISIBLE }, t.prototype.isTransparent = function() { return te(this.backgroundColor) }, t.prototype.isTransformed = function() { return null !== this.transform }, t.prototype.isPositioned = function() { return this.position !== qA.STATIC }, t.prototype.isPositionedWithZIndex = function() { return this.isPositioned() && !this.zIndex.auto }, t.prototype.isFloating = function() { return this.float !== oA.NONE }, t.prototype.isInlineLevel = function() { return wr(this.display, 4) || wr(this.display, 33554432) || wr(this.display, 268435456) || wr(this.display, 536870912) || wr(this.display, 67108864) || wr(this.display, 134217728) }, t
            }(),
            Ur = function(t) { this.content = Nr(mr, t.content), this.quotes = Nr(br, t.quotes) },
            Er = function(t) { this.counterIncrement = Nr(yr, t.counterIncrement), this.counterReset = Nr(vr, t.counterReset) },
            Nr = function(t, e) {
                var A = new xt,
                    r = null !== e && void 0 !== e ? e.toString() : t.initialValue;
                A.write(r);
                var n = new _t(A.read());
                switch (t.type) {
                    case oe.IDENT_VALUE:
                        var i = n.parseComponentValue();
                        return t.parse(It(i) ? i.value : t.initialValue);
                    case oe.VALUE:
                        return t.parse(n.parseComponentValue());
                    case oe.LIST:
                        return t.parse(n.parseComponentValues());
                    case oe.TOKEN_VALUE:
                        return n.parseComponentValue();
                    case oe.TYPE_VALUE:
                        switch (t.format) {
                            case "angle":
                                return Jt.parse(n.parseComponentValue());
                            case "color":
                                return $t.parse(n.parseComponentValue());
                            case "image":
                                return Pe.parse(n.parseComponentValue());
                            case "length":
                                var o = n.parseComponentValue();
                                return Dt(o) ? o : jt;
                            case "length-percentage":
                                var s = n.parseComponentValue();
                                return kt(s) ? s : jt
                        }
                }
                throw new Error("Attempting to parse unsupported css format type " + t.format)
            },
            Lr = function(t) { this.styles = new Fr(window.getComputedStyle(t, null)), this.textNodes = [], this.elements = [], null !== this.styles.transform && hn(t) && (t.style.transform = "none"), this.bounds = o(t), this.flags = 0 },
            xr = function(t, e) { this.text = t, this.bounds = e },
            _r = function(t, e, A) {
                var r = Ir(t, e),
                    n = [],
                    i = 0;
                return r.forEach(function(t) {
                    if (e.textDecorationLine.length || t.trim().length > 0)
                        if (Fe.SUPPORT_RANGE_BOUNDS) n.push(new xr(t, Sr(A, i, t.length)));
                        else {
                            var r = A.splitText(t.length);
                            n.push(new xr(t, Hr(A))), A = r
                        }
                    else Fe.SUPPORT_RANGE_BOUNDS || (A = A.splitText(t.length));
                    i += t.length
                }), n
            },
            Hr = function(t) {
                var e = t.ownerDocument;
                if (e) {
                    var A = e.createElement("html2canvaswrapper");
                    A.appendChild(t.cloneNode(!0));
                    var r = t.parentNode;
                    if (r) { r.replaceChild(A, t); var n = o(A); return A.firstChild && r.replaceChild(A.firstChild, A), n }
                }
                return new i(0, 0, 0, 0)
            },
            Sr = function(t, e, A) { var r = t.ownerDocument; if (!r) throw new Error("Node has no owner document"); var n = r.createRange(); return n.setStart(t, e), n.setEnd(t, e + A), i.fromClientRect(n.getBoundingClientRect()) },
            Ir = function(t, e) { return 0 !== e.letterSpacing ? s(t).map(function(t) { return a(t) }) : Tr(t, e) },
            Tr = function(t, e) {
                for (var A, r = function(t, e) {
                        var A = s(t),
                            r = Y(A, e),
                            n = r[0],
                            i = r[1],
                            o = r[2],
                            a = A.length,
                            c = 0,
                            l = 0;
                        return { next: function() { if (l >= a) return { done: !0, value: null }; for (var t = "×"; l < a && "×" === (t = W(A, i, n, ++l, o));); if ("×" !== t || l === a) { var e = new Z(A, t, c, l); return c = l, { value: e, done: !1 } } return { done: !0, value: null } } }
                    }(t, { lineBreak: e.lineBreak, wordBreak: e.overflowWrap === RA.BREAK_WORD ? "break-word" : e.wordBreak }), n = []; !(A = r.next()).done;) A.value && n.push(A.value.slice());
                return n
            },
            Rr = function(t, e) { this.text = Or(t.data, e.textTransform), this.textBounds = _r(this.text, e, t) },
            Or = function(t, e) {
                switch (e) {
                    case XA.LOWERCASE:
                        return t.toLowerCase();
                    case XA.CAPITALIZE:
                        return t.replace(Mr, Pr);
                    case XA.UPPERCASE:
                        return t.toUpperCase();
                    default:
                        return t
                }
            },
            Mr = /(^|\s|:|-|\(|\))([a-z])/g,
            Pr = function(t, e, A) { return t.length > 0 ? e + A.toUpperCase() : t },
            Kr = function(t) {
                function A(e) { var A = t.call(this, e) || this; return A.src = e.currentSrc || e.src, A.intrinsicWidth = e.naturalWidth, A.intrinsicHeight = e.naturalHeight, Ee.getInstance().addImage(A.src), A }
                return e(A, t), A
            }(Lr),
            Dr = function(t) {
                function A(e) { var A = t.call(this, e) || this; return A.canvas = e, A.intrinsicWidth = e.width, A.intrinsicHeight = e.height, A }
                return e(A, t), A
            }(Lr),
            kr = function(t) {
                function A(e) {
                    var A = t.call(this, e) || this,
                        r = new XMLSerializer;
                    return A.svg = "data:image/svg+xml," + encodeURIComponent(r.serializeToString(e)), A.intrinsicWidth = e.width.baseVal.value, A.intrinsicHeight = e.height.baseVal.value, Ee.getInstance().addImage(A.svg), A
                }
                return e(A, t), A
            }(Lr),
            zr = function(t) {
                function A(e) { var A = t.call(this, e) || this; return A.value = e.value, A }
                return e(A, t), A
            }(Lr),
            jr = function(t) {
                function A(e) { var A = t.call(this, e) || this; return A.start = e.start, A.reversed = "boolean" == typeof e.reversed && !0 === e.reversed, A }
                return e(A, t), A
            }(Lr),
            qr = [{ type: h.DIMENSION_TOKEN, flags: 0, unit: "px", number: 3 }],
            Vr = [{ type: h.PERCENTAGE_TOKEN, flags: 0, number: 50 }],
            Xr = function(t) { return t.width > t.height ? new i(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new i(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t },
            Gr = function(t) { var e = t.type === Yr ? new Array(t.value.length + 1).join("•") : t.value; return 0 === e.length ? t.placeholder || "" : e },
            Jr = "checkbox",
            Wr = "radio",
            Yr = "password",
            Zr = function(t) {
                function A(e) {
                    var A = t.call(this, e) || this;
                    switch (A.type = e.type.toLowerCase(), A.checked = e.checked, A.value = Gr(e), A.type !== Jr && A.type !== Wr || (A.styles.backgroundColor = 3739148031, A.styles.borderTopColor = A.styles.borderRightColor = A.styles.borderBottomColor = A.styles.borderLeftColor = 2779096575, A.styles.borderTopWidth = A.styles.borderRightWidth = A.styles.borderBottomWidth = A.styles.borderLeftWidth = 1, A.styles.borderTopStyle = A.styles.borderRightStyle = A.styles.borderBottomStyle = A.styles.borderLeftStyle = Xe.SOLID, A.styles.backgroundClip = [se.BORDER_BOX], A.styles.backgroundOrigin = [0], A.bounds = Xr(A.bounds)), A.type) {
                        case Jr:
                            A.styles.borderTopRightRadius = A.styles.borderTopLeftRadius = A.styles.borderBottomRightRadius = A.styles.borderBottomLeftRadius = qr;
                            break;
                        case Wr:
                            A.styles.borderTopRightRadius = A.styles.borderTopLeftRadius = A.styles.borderBottomRightRadius = A.styles.borderBottomLeftRadius = Vr
                    }
                    return A
                }
                return e(A, t), A
            }(Lr),
            $r = function(t) {
                function A(e) {
                    var A = t.call(this, e) || this,
                        r = e.options[e.selectedIndex || 0];
                    return A.value = r && r.text || "", A
                }
                return e(A, t), A
            }(Lr),
            tn = function(t) {
                function A(e) { var A = t.call(this, e) || this; return A.value = e.value, A }
                return e(A, t), A
            }(Lr),
            en = function(t) { return $t.parse(_t.create(t).parseComponentValue()) },
            An = function(t) {
                function A(e) {
                    var A = t.call(this, e) || this;
                    A.src = e.src, A.width = parseInt(e.width, 10) || 0, A.height = parseInt(e.height, 10) || 0, A.backgroundColor = A.styles.backgroundColor;
                    try {
                        if (e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement) {
                            A.tree = sn(e.contentWindow.document.documentElement);
                            var r = e.contentWindow.document.documentElement ? en(getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : le.TRANSPARENT,
                                n = e.contentWindow.document.body ? en(getComputedStyle(e.contentWindow.document.body).backgroundColor) : le.TRANSPARENT;
                            A.backgroundColor = te(r) ? te(n) ? A.styles.backgroundColor : n : r
                        }
                    } catch (t) {}
                    return A
                }
                return e(A, t), A
            }(Lr),
            rn = ["OL", "UL", "MENU"],
            nn = function(t, e, A) {
                for (var r = t.firstChild, n = void 0; r; r = n)
                    if (n = r.nextSibling, ln(r) && r.data.trim().length > 0) e.textNodes.push(new Rr(r, e.styles));
                    else if (un(r)) {
                    var i = on(r);
                    i.styles.isVisible() && (an(r, i, A) ? i.flags |= 4 : cn(i.styles) && (i.flags |= 2), -1 !== rn.indexOf(r.tagName) && (i.flags |= 8), e.elements.push(i), Cn(r) || gn(r) || Qn(r) || nn(r, i, A))
                }
            },
            on = function(t) { return mn(t) ? new Kr(t) : wn(t) ? new Dr(t) : gn(t) ? new kr(t) : fn(t) ? new zr(t) : dn(t) ? new jr(t) : pn(t) ? new Zr(t) : Qn(t) ? new $r(t) : Cn(t) ? new tn(t) : yn(t) ? new An(t) : new Lr(t) },
            sn = function(t) { var e = on(t); return e.flags |= 4, nn(t, e, e), e },
            an = function(t, e, A) { return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Bn(t) && A.styles.isTransparent() },
            cn = function(t) { return t.isPositioned() || t.isFloating() },
            ln = function(t) { return t.nodeType === Node.TEXT_NODE },
            un = function(t) { return t.nodeType === Node.ELEMENT_NODE },
            hn = function(t) { return void 0 !== t.style },
            fn = function(t) { return "LI" === t.tagName },
            dn = function(t) { return "OL" === t.tagName },
            pn = function(t) { return "INPUT" === t.tagName },
            gn = function(t) { return "svg" === t.tagName },
            Bn = function(t) { return "BODY" === t.tagName },
            wn = function(t) { return "CANVAS" === t.tagName },
            mn = function(t) { return "IMG" === t.tagName },
            yn = function(t) { return "IFRAME" === t.tagName },
            vn = function(t) { return "STYLE" === t.tagName },
            bn = function(t) { return "SCRIPT" === t.tagName },
            Cn = function(t) { return "TEXTAREA" === t.tagName },
            Qn = function(t) { return "SELECT" === t.tagName },
            Fn = function() {
                function t() { this.counters = {} }
                return t.prototype.getCounterValue = function(t) { var e = this.counters[t]; return e && e.length ? e[e.length - 1] : 1 }, t.prototype.getCounterValues = function(t) { var e = this.counters[t]; return e || [] }, t.prototype.pop = function(t) {
                    var e = this;
                    t.forEach(function(t) { return e.counters[t].pop() })
                }, t.prototype.parse = function(t) {
                    var e = this,
                        A = t.counterIncrement,
                        r = t.counterReset,
                        n = !0;
                    null !== A && A.forEach(function(t) {
                        var A = e.counters[t.counter];
                        A && 0 !== t.increment && (n = !1, A[Math.max(0, A.length - 1)] += t.increment)
                    });
                    var i = [];
                    return n && r.forEach(function(t) {
                        var A = e.counters[t.counter];
                        i.push(t.counter), A || (A = e.counters[t.counter] = []), A.push(t.reset)
                    }), i
                }, t
            }(),
            Un = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] },
            En = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] },
            Nn = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] },
            Ln = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] },
            xn = function(t, e, A, r, n, i) { return t < e || t > A ? Tn(t, n, i.length > 0) : r.integers.reduce(function(e, A, n) { for (; t >= A;) t -= A, e += r.values[n]; return e }, "") + i },
            _n = function(t, e, A, r) {
                var n = "";
                do { A || t--, n = r(t) + n, t /= e } while (t * e >= e);
                return n
            },
            Hn = function(t, e, A, r, n) { var i = A - e + 1; return (t < 0 ? "-" : "") + (_n(Math.abs(t), i, r, function(t) { return a(Math.floor(t % i) + e) }) + n) },
            Sn = function(t, e, A) { void 0 === A && (A = ". "); var r = e.length; return _n(Math.abs(t), r, !1, function(t) { return e[Math.floor(t % r)] }) + A },
            In = function(t, e, A, r, n, i) {
                if (t < -9999 || t > 9999) return Tn(t, EA.CJK_DECIMAL, n.length > 0);
                var o = Math.abs(t),
                    s = n;
                if (0 === o) return e[0] + s;
                for (var a = 0; o > 0 && a <= 4; a++) {
                    var c = o % 10;
                    0 === c && wr(i, 1) && "" !== s ? s = e[c] + s : c > 1 || 1 === c && 0 === a || 1 === c && 1 === a && wr(i, 2) || 1 === c && 1 === a && wr(i, 4) && t > 100 || 1 === c && a > 1 && wr(i, 8) ? s = e[c] + (a > 0 ? A[a - 1] : "") + s : 1 === c && a > 0 && (s = A[a - 1] + s), o = Math.floor(o / 10)
                }
                return (t < 0 ? r : "") + s
            },
            Tn = function(t, e, A) {
                var r = A ? ". " : "",
                    n = A ? "、" : "",
                    i = A ? ", " : "",
                    o = A ? " " : "";
                switch (e) {
                    case EA.DISC:
                        return "•" + o;
                    case EA.CIRCLE:
                        return "◦" + o;
                    case EA.SQUARE:
                        return "◾" + o;
                    case EA.DECIMAL_LEADING_ZERO:
                        var s = Hn(t, 48, 57, !0, r);
                        return s.length < 4 ? "0" + s : s;
                    case EA.CJK_DECIMAL:
                        return Sn(t, "〇一二三四五六七八九", n);
                    case EA.LOWER_ROMAN:
                        return xn(t, 1, 3999, Un, EA.DECIMAL, r).toLowerCase();
                    case EA.UPPER_ROMAN:
                        return xn(t, 1, 3999, Un, EA.DECIMAL, r);
                    case EA.LOWER_GREEK:
                        return Hn(t, 945, 969, !1, r);
                    case EA.LOWER_ALPHA:
                        return Hn(t, 97, 122, !1, r);
                    case EA.UPPER_ALPHA:
                        return Hn(t, 65, 90, !1, r);
                    case EA.ARABIC_INDIC:
                        return Hn(t, 1632, 1641, !0, r);
                    case EA.ARMENIAN:
                    case EA.UPPER_ARMENIAN:
                        return xn(t, 1, 9999, En, EA.DECIMAL, r);
                    case EA.LOWER_ARMENIAN:
                        return xn(t, 1, 9999, En, EA.DECIMAL, r).toLowerCase();
                    case EA.BENGALI:
                        return Hn(t, 2534, 2543, !0, r);
                    case EA.CAMBODIAN:
                    case EA.KHMER:
                        return Hn(t, 6112, 6121, !0, r);
                    case EA.CJK_EARTHLY_BRANCH:
                        return Sn(t, "子丑寅卯辰巳午未申酉戌亥", n);
                    case EA.CJK_HEAVENLY_STEM:
                        return Sn(t, "甲乙丙丁戊己庚辛壬癸", n);
                    case EA.CJK_IDEOGRAPHIC:
                    case EA.TRAD_CHINESE_INFORMAL:
                        return In(t, "零一二三四五六七八九", "十百千萬", "負", n, 14);
                    case EA.TRAD_CHINESE_FORMAL:
                        return In(t, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
                    case EA.SIMP_CHINESE_INFORMAL:
                        return In(t, "零一二三四五六七八九", "十百千萬", "负", n, 14);
                    case EA.SIMP_CHINESE_FORMAL:
                        return In(t, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
                    case EA.JAPANESE_INFORMAL:
                        return In(t, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);
                    case EA.JAPANESE_FORMAL:
                        return In(t, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);
                    case EA.KOREAN_HANGUL_FORMAL:
                        return In(t, "영일이삼사오육칠팔구", "십백천만", "마이너스", i, 7);
                    case EA.KOREAN_HANJA_INFORMAL:
                        return In(t, "零一二三四五六七八九", "十百千萬", "마이너스", i, 0);
                    case EA.KOREAN_HANJA_FORMAL:
                        return In(t, "零壹貳參四五六七八九", "拾百千", "마이너스", i, 7);
                    case EA.DEVANAGARI:
                        return Hn(t, 2406, 2415, !0, r);
                    case EA.GEORGIAN:
                        return xn(t, 1, 19999, Ln, EA.DECIMAL, r);
                    case EA.GUJARATI:
                        return Hn(t, 2790, 2799, !0, r);
                    case EA.GURMUKHI:
                        return Hn(t, 2662, 2671, !0, r);
                    case EA.HEBREW:
                        return xn(t, 1, 10999, Nn, EA.DECIMAL, r);
                    case EA.HIRAGANA:
                        return Sn(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                    case EA.HIRAGANA_IROHA:
                        return Sn(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                    case EA.KANNADA:
                        return Hn(t, 3302, 3311, !0, r);
                    case EA.KATAKANA:
                        return Sn(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
                    case EA.KATAKANA_IROHA:
                        return Sn(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
                    case EA.LAO:
                        return Hn(t, 3792, 3801, !0, r);
                    case EA.MONGOLIAN:
                        return Hn(t, 6160, 6169, !0, r);
                    case EA.MYANMAR:
                        return Hn(t, 4160, 4169, !0, r);
                    case EA.ORIYA:
                        return Hn(t, 2918, 2927, !0, r);
                    case EA.PERSIAN:
                        return Hn(t, 1776, 1785, !0, r);
                    case EA.TAMIL:
                        return Hn(t, 3046, 3055, !0, r);
                    case EA.TELUGU:
                        return Hn(t, 3174, 3183, !0, r);
                    case EA.THAI:
                        return Hn(t, 3664, 3673, !0, r);
                    case EA.TIBETAN:
                        return Hn(t, 3872, 3881, !0, r);
                    case EA.DECIMAL:
                    default:
                        return Hn(t, 48, 57, !0, r)
                }
            },
            Rn = function() {
                function t(t, e) {
                    if (this.options = e, this.scrolledElements = [], this.referenceElement = t, this.counters = new Fn, this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
                    this.documentElement = this.cloneNode(t.ownerDocument.documentElement)
                }
                return t.prototype.toIFrame = function(t, e) {
                    var A = this,
                        i = Mn(t, e);
                    if (!i.contentWindow) return Promise.reject("Unable to find iframe window");
                    var o = t.defaultView.pageXOffset,
                        s = t.defaultView.pageYOffset,
                        a = i.contentWindow,
                        c = a.document,
                        l = Pn(i).then(function() {
                            return r(A, void 0, void 0, function() {
                                var t;
                                return n(this, function(A) {
                                    switch (A.label) {
                                        case 0:
                                            return this.scrolledElements.forEach(zn), a && (a.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || a.scrollY === e.top && a.scrollX === e.left || (c.documentElement.style.top = -e.top + "px", c.documentElement.style.left = -e.left + "px", c.documentElement.style.position = "absolute")), t = this.options.onclone, void 0 === this.clonedReferenceElement ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : c.fonts && c.fonts.ready ? [4, c.fonts.ready] : [3, 2];
                                        case 1:
                                            A.sent(), A.label = 2;
                                        case 2:
                                            return "function" == typeof t ? [2, Promise.resolve().then(function() { return t(c) }).then(function() { return i })] : [2, i]
                                    }
                                })
                            })
                        });
                    return c.open(), c.write(Dn(document.doctype) + "<html></html>"), kn(this.referenceElement.ownerDocument, o, s), c.replaceChild(c.adoptNode(this.documentElement), c.documentElement), c.close(), l
                }, t.prototype.createElementClone = function(t) { return wn(t) ? this.createCanvasClone(t) : vn(t) ? this.createStyleClone(t) : t.cloneNode(!1) }, t.prototype.createStyleClone = function(t) {
                    try {
                        var e = t.sheet;
                        if (e && e.cssRules) {
                            var A = [].slice.call(e.cssRules, 0).reduce(function(t, e) { return e && "string" == typeof e.cssText ? t + e.cssText : t }, ""),
                                r = t.cloneNode(!1);
                            return r.textContent = A, r
                        }
                    } catch (t) { if (Ue.getInstance(this.options.id).error("Unable to access cssRules property", t), "SecurityError" !== t.name) throw t }
                    return t.cloneNode(!1)
                }, t.prototype.createCanvasClone = function(t) {
                    if (this.options.inlineImages && t.ownerDocument) { var e = t.ownerDocument.createElement("img"); try { return e.src = t.toDataURL(), e } catch (t) { Ue.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted") } }
                    var A = t.cloneNode(!1);
                    try {
                        A.width = t.width, A.height = t.height;
                        var r = t.getContext("2d"),
                            n = A.getContext("2d");
                        return n && (r ? n.putImageData(r.getImageData(0, 0, t.width, t.height), 0, 0) : n.drawImage(t, 0, 0)), A
                    } catch (t) {}
                    return A
                }, t.prototype.cloneNode = function(t) {
                    if (ln(t)) return document.createTextNode(t.data);
                    if (!t.ownerDocument) return t.cloneNode(!1);
                    var e = t.ownerDocument.defaultView;
                    if (hn(t) && e) {
                        var A = this.createElementClone(t),
                            r = e.getComputedStyle(t),
                            n = e.getComputedStyle(t, ":before"),
                            i = e.getComputedStyle(t, ":after");
                        this.referenceElement === t && (this.clonedReferenceElement = A), Bn(A) && Vn(A);
                        for (var o = this.counters.parse(new Er(r)), s = this.resolvePseudoContent(t, A, n, gr.BEFORE), a = t.firstChild; a; a = a.nextSibling) un(a) && (bn(a) || a.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(a)) || this.options.copyStyles && un(a) && vn(a) || A.appendChild(this.cloneNode(a));
                        s && A.insertBefore(s, A.firstChild);
                        var c = this.resolvePseudoContent(t, A, i, gr.AFTER);
                        return c && A.appendChild(c), this.counters.pop(o), r && this.options.copyStyles && !yn(t) && Kn(r, A), 0 === t.scrollTop && 0 === t.scrollLeft || this.scrolledElements.push([A, t.scrollLeft, t.scrollTop]), (Cn(t) || Qn(t)) && (Cn(A) || Qn(A)) && (A.value = t.value), A
                    }
                    return t.cloneNode(!1)
                }, t.prototype.resolvePseudoContent = function(t, e, A, r) {
                    var n = this;
                    if (A) {
                        var i = A.content,
                            o = e.ownerDocument;
                        if (o && i && "none" !== i && "-moz-alt-content" !== i && "none" !== A.display) {
                            this.counters.parse(new Er(A));
                            var s = new Ur(A),
                                a = o.createElement("html2canvaspseudoelement");
                            return Kn(A, a), s.content.forEach(function(e) {
                                if (e.type === h.STRING_TOKEN) a.appendChild(o.createTextNode(e.value));
                                else if (e.type === h.URL_TOKEN) {
                                    var A = o.createElement("img");
                                    A.src = e.value, A.style.opacity = "1", a.appendChild(A)
                                } else if (e.type === h.FUNCTION) {
                                    if ("attr" === e.name) {
                                        var r = e.values.filter(It);
                                        r.length && a.appendChild(o.createTextNode(t.getAttribute(r[0].value) || ""))
                                    } else if ("counter" === e.name) {
                                        var i = e.values.filter(Mt),
                                            c = i[0],
                                            l = i[1];
                                        if (c && It(c)) {
                                            var u = n.counters.getCounterValue(c.value),
                                                f = l && It(l) ? xA.parse(l.value) : EA.DECIMAL;
                                            a.appendChild(o.createTextNode(Tn(u, f, !1)))
                                        }
                                    } else if ("counters" === e.name) {
                                        var d = e.values.filter(Mt),
                                            c = d[0],
                                            p = d[1],
                                            l = d[2];
                                        if (c && It(c)) {
                                            var g = n.counters.getCounterValues(c.value),
                                                B = l && It(l) ? xA.parse(l.value) : EA.DECIMAL,
                                                w = p && p.type === h.STRING_TOKEN ? p.value : "",
                                                m = g.map(function(t) { return Tn(t, B, !1) }).join(w);
                                            a.appendChild(o.createTextNode(m))
                                        }
                                    }
                                } else if (e.type === h.IDENT_TOKEN) switch (e.value) {
                                    case "open-quote":
                                        a.appendChild(o.createTextNode(Cr(s.quotes, n.quoteDepth++, !0)));
                                        break;
                                    case "close-quote":
                                        a.appendChild(o.createTextNode(Cr(s.quotes, --n.quoteDepth, !1)));
                                        break;
                                    default:
                                        a.appendChild(o.createTextNode(e.value))
                                }
                            }), a.className = jn + " " + qn, e.className += r === gr.BEFORE ? " " + jn : " " + qn, a
                        }
                    }
                }, t.destroy = function(t) { return !!t.parentNode && (t.parentNode.removeChild(t), !0) }, t
            }();
        ! function(t) { t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER" }(gr || (gr = {}));
        var On, Mn = function(t, e) { var A = t.createElement("iframe"); return A.className = "html2canvas-container", A.style.visibility = "hidden", A.style.position = "fixed", A.style.left = "-10000px", A.style.top = "0px", A.style.border = "0", A.width = e.width.toString(), A.height = e.height.toString(), A.scrolling = "no", A.setAttribute("data-html2canvas-ignore", "true"), t.body.appendChild(A), A },
            Pn = function(t) {
                return new Promise(function(e, A) {
                    var r = t.contentWindow;
                    if (!r) return A("No window assigned for iframe");
                    var n = r.document;
                    r.onload = t.onload = n.onreadystatechange = function() { r.onload = t.onload = n.onreadystatechange = null; var A = setInterval(function() { n.body.childNodes.length > 0 && "complete" === n.readyState && (clearInterval(A), e(t)) }, 50) }
                })
            },
            Kn = function(t, e) { for (var A = t.length - 1; A >= 0; A--) { var r = t.item(A); "content" !== r && e.style.setProperty(r, t.getPropertyValue(r)) } return e },
            Dn = function(t) { var e = ""; return t && (e += "<!DOCTYPE ", t.name && (e += t.name), t.internalSubset && (e += t.internalSubset), t.publicId && (e += '"' + t.publicId + '"'), t.systemId && (e += '"' + t.systemId + '"'), e += ">"), e },
            kn = function(t, e, A) { t && t.defaultView && (e !== t.defaultView.pageXOffset || A !== t.defaultView.pageYOffset) && t.defaultView.scrollTo(e, A) },
            zn = function(t) {
                var e = t[0],
                    A = t[1],
                    r = t[2];
                e.scrollLeft = A, e.scrollTop = r
            },
            jn = "___html2canvas___pseudoelement_before",
            qn = "___html2canvas___pseudoelement_after",
            Vn = function(t) { Xn(t, "." + jn + ':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' + qn + ':after{\n    content: "" !important;\n    display: none !important;\n}') },
            Xn = function(t, e) {
                var A = t.ownerDocument;
                if (A) {
                    var r = A.createElement("style");
                    r.textContent = e, t.appendChild(r)
                }
            };
        ! function(t) { t[t.VECTOR = 0] = "VECTOR", t[t.BEZIER_CURVE = 1] = "BEZIER_CURVE" }(On || (On = {}));
        var Gn, Jn = function(t, e) { return t.length === e.length && t.some(function(t, A) { return t === e[A] }) },
            Wn = function() {
                function t(t, e) { this.type = On.VECTOR, this.x = t, this.y = e }
                return t.prototype.add = function(e, A) { return new t(this.x + e, this.y + A) }, t
            }(),
            Yn = function(t, e, A) { return new Wn(t.x + (e.x - t.x) * A, t.y + (e.y - t.y) * A) },
            Zn = function() {
                function t(t, e, A, r) { this.type = On.BEZIER_CURVE, this.start = t, this.startControl = e, this.endControl = A, this.end = r }
                return t.prototype.subdivide = function(e, A) {
                    var r = Yn(this.start, this.startControl, e),
                        n = Yn(this.startControl, this.endControl, e),
                        i = Yn(this.endControl, this.end, e),
                        o = Yn(r, n, e),
                        s = Yn(n, i, e),
                        a = Yn(o, s, e);
                    return A ? new t(this.start, r, o, a) : new t(a, s, i, this.end)
                }, t.prototype.add = function(e, A) { return new t(this.start.add(e, A), this.startControl.add(e, A), this.endControl.add(e, A), this.end.add(e, A)) }, t.prototype.reverse = function() { return new t(this.end, this.endControl, this.startControl, this.start) }, t
            }(),
            $n = function(t) { return t.type === On.BEZIER_CURVE },
            ti = function(t) {
                var e = t.styles,
                    A = t.bounds,
                    r = Xt(e.borderTopLeftRadius, A.width, A.height),
                    n = r[0],
                    i = r[1],
                    o = Xt(e.borderTopRightRadius, A.width, A.height),
                    s = o[0],
                    a = o[1],
                    c = Xt(e.borderBottomRightRadius, A.width, A.height),
                    l = c[0],
                    u = c[1],
                    h = Xt(e.borderBottomLeftRadius, A.width, A.height),
                    f = h[0],
                    d = h[1],
                    p = [];
                p.push((n + s) / A.width), p.push((f + l) / A.width), p.push((i + d) / A.height), p.push((a + u) / A.height);
                var g = Math.max.apply(Math, p);
                g > 1 && (n /= g, i /= g, s /= g, a /= g, l /= g, u /= g, f /= g, d /= g);
                var B = A.width - s,
                    w = A.height - u,
                    m = A.width - l,
                    y = A.height - d,
                    v = e.borderTopWidth,
                    b = e.borderRightWidth,
                    C = e.borderBottomWidth,
                    Q = e.borderLeftWidth,
                    F = Gt(e.paddingTop, t.bounds.width),
                    U = Gt(e.paddingRight, t.bounds.width),
                    E = Gt(e.paddingBottom, t.bounds.width),
                    N = Gt(e.paddingLeft, t.bounds.width);
                this.topLeftBorderBox = n > 0 || i > 0 ? ei(A.left, A.top, n, i, Gn.TOP_LEFT) : new Wn(A.left, A.top), this.topRightBorderBox = s > 0 || a > 0 ? ei(A.left + B, A.top, s, a, Gn.TOP_RIGHT) : new Wn(A.left + A.width, A.top), this.bottomRightBorderBox = l > 0 || u > 0 ? ei(A.left + m, A.top + w, l, u, Gn.BOTTOM_RIGHT) : new Wn(A.left + A.width, A.top + A.height), this.bottomLeftBorderBox = f > 0 || d > 0 ? ei(A.left, A.top + y, f, d, Gn.BOTTOM_LEFT) : new Wn(A.left, A.top + A.height), this.topLeftPaddingBox = n > 0 || i > 0 ? ei(A.left + Q, A.top + v, Math.max(0, n - Q), Math.max(0, i - v), Gn.TOP_LEFT) : new Wn(A.left + Q, A.top + v), this.topRightPaddingBox = s > 0 || a > 0 ? ei(A.left + Math.min(B, A.width + Q), A.top + v, B > A.width + Q ? 0 : s - Q, a - v, Gn.TOP_RIGHT) : new Wn(A.left + A.width - b, A.top + v), this.bottomRightPaddingBox = l > 0 || u > 0 ? ei(A.left + Math.min(m, A.width - Q), A.top + Math.min(w, A.height + v), Math.max(0, l - b), u - C, Gn.BOTTOM_RIGHT) : new Wn(A.left + A.width - b, A.top + A.height - C), this.bottomLeftPaddingBox = f > 0 || d > 0 ? ei(A.left + Q, A.top + y, Math.max(0, f - Q), d - C, Gn.BOTTOM_LEFT) : new Wn(A.left + Q, A.top + A.height - C), this.topLeftContentBox = n > 0 || i > 0 ? ei(A.left + Q + N, A.top + v + F, Math.max(0, n - (Q + N)), Math.max(0, i - (v + F)), Gn.TOP_LEFT) : new Wn(A.left + Q + N, A.top + v + F), this.topRightContentBox = s > 0 || a > 0 ? ei(A.left + Math.min(B, A.width + Q + N), A.top + v + F, B > A.width + Q + N ? 0 : s - Q + N, a - (v + F), Gn.TOP_RIGHT) : new Wn(A.left + A.width - (b + U), A.top + v + F), this.bottomRightContentBox = l > 0 || u > 0 ? ei(A.left + Math.min(m, A.width - (Q + N)), A.top + Math.min(w, A.height + v + F), Math.max(0, l - (b + U)), u - (C + E), Gn.BOTTOM_RIGHT) : new Wn(A.left + A.width - (b + U), A.top + A.height - (C + E)), this.bottomLeftContentBox = f > 0 || d > 0 ? ei(A.left + Q + N, A.top + y, Math.max(0, f - (Q + N)), d - (C + E), Gn.BOTTOM_LEFT) : new Wn(A.left + Q + N, A.top + A.height - (C + E))
            };
        ! function(t) { t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT" }(Gn || (Gn = {}));
        var ei = function(t, e, A, r, n) {
                var i = (Math.sqrt(2) - 1) / 3 * 4,
                    o = A * i,
                    s = r * i,
                    a = t + A,
                    c = e + r;
                switch (n) {
                    case Gn.TOP_LEFT:
                        return new Zn(new Wn(t, c), new Wn(t, c - s), new Wn(a - o, e), new Wn(a, e));
                    case Gn.TOP_RIGHT:
                        return new Zn(new Wn(t, e), new Wn(t + o, e), new Wn(a, c - s), new Wn(a, c));
                    case Gn.BOTTOM_RIGHT:
                        return new Zn(new Wn(a, e), new Wn(a, e + s), new Wn(t + o, c), new Wn(t, c));
                    case Gn.BOTTOM_LEFT:
                    default:
                        return new Zn(new Wn(a, c), new Wn(a - o, c), new Wn(t, e + s), new Wn(t, e))
                }
            },
            Ai = function(t) { return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox] },
            ri = function(t) { return [t.topLeftPaddingBox, t.topRightPaddingBox, t.bottomRightPaddingBox, t.bottomLeftPaddingBox] },
            ni = function(t, e, A) { this.type = 0, this.offsetX = t, this.offsetY = e, this.matrix = A, this.target = 6 },
            ii = function(t, e) { this.type = 1, this.target = e, this.path = t },
            oi = function(t) { this.element = t, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [] },
            si = function() {
                function t(t, e) {
                    if (this.container = t, this.effects = e.slice(0), this.curves = new ti(t), null !== t.styles.transform) {
                        var A = t.bounds.left + t.styles.transformOrigin[0].number,
                            r = t.bounds.top + t.styles.transformOrigin[1].number,
                            n = t.styles.transform;
                        this.effects.push(new ni(A, r, n))
                    }
                    if (t.styles.overflowX !== LA.VISIBLE) {
                        var i = Ai(this.curves),
                            o = ri(this.curves);
                        Jn(i, o) ? this.effects.push(new ii(i, 6)) : (this.effects.push(new ii(i, 2)), this.effects.push(new ii(o, 4)))
                    }
                }
                return t.prototype.getParentEffects = function() {
                    var t = this.effects.slice(0);
                    if (this.container.styles.overflowX !== LA.VISIBLE) {
                        var e = Ai(this.curves),
                            A = ri(this.curves);
                        Jn(e, A) || t.push(new ii(A, 6))
                    }
                    return t
                }, t
            }(),
            ai = function(t, e, A, r) {
                t.container.elements.forEach(function(n) {
                    var i = wr(n.flags, 4),
                        o = wr(n.flags, 2),
                        s = new si(n, t.getParentEffects());
                    wr(n.styles.display, 2048) && r.push(s);
                    var a = wr(n.flags, 8) ? [] : r;
                    if (i || o) {
                        var c = i || n.styles.isPositioned() ? A : e,
                            l = new oi(s);
                        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
                            var u = n.styles.zIndex.order;
                            if (u < 0) {
                                var h = 0;
                                c.negativeZIndex.some(function(t, e) { return u > t.element.container.styles.zIndex.order ? (h = e, !1) : h > 0 }), c.negativeZIndex.splice(h, 0, l)
                            } else if (u > 0) {
                                var f = 0;
                                c.positiveZIndex.some(function(t, e) { return u > t.element.container.styles.zIndex.order ? (f = e + 1, !1) : f > 0 }), c.positiveZIndex.splice(f, 0, l)
                            } else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)
                        } else n.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
                        ai(s, l, i ? l : A, a)
                    } else n.styles.isInlineLevel() ? e.inlineLevel.push(s) : e.nonInlineLevel.push(s), ai(s, e, A, a);
                    wr(n.flags, 8) && ci(n, a)
                })
            },
            ci = function(t, e) {
                for (var A = t instanceof jr ? t.start : 1, r = t instanceof jr && t.reversed, n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.container instanceof zr && "number" == typeof i.container.value && 0 !== i.container.value && (A = i.container.value), i.listValue = Tn(A, i.container.styles.listStyleType, !0), A += r ? -1 : 1
                }
            },
            li = function(t, e, A, r) { var n = []; return $n(t) ? n.push(t.subdivide(.5, !1)) : n.push(t), $n(A) ? n.push(A.subdivide(.5, !0)) : n.push(A), $n(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), $n(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e), n },
            ui = function(t) {
                var e = t.bounds,
                    A = t.styles;
                return e.add(A.borderLeftWidth, A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth), -(A.borderTopWidth + A.borderBottomWidth))
            },
            hi = function(t) {
                var e = t.styles,
                    A = t.bounds,
                    r = Gt(e.paddingLeft, A.width),
                    n = Gt(e.paddingRight, A.width),
                    i = Gt(e.paddingTop, A.width),
                    o = Gt(e.paddingBottom, A.width);
                return A.add(r + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + i + o))
            },
            fi = function(t, e, A) {
                var r = function(t, e) { return 0 === t ? e.bounds : 2 === t ? hi(e) : ui(e) }(Bi(t.styles.backgroundOrigin, e), t),
                    n = function(t, e) { return t === se.BORDER_BOX ? e.bounds : t === se.CONTENT_BOX ? hi(e) : ui(e) }(Bi(t.styles.backgroundClip, e), t),
                    i = gi(Bi(t.styles.backgroundSize, e), A, r),
                    o = i[0],
                    s = i[1],
                    a = Xt(Bi(t.styles.backgroundPosition, e), r.width - o, r.height - s),
                    c = wi(Bi(t.styles.backgroundRepeat, e), a, i, r, n),
                    l = Math.round(r.left + a[0]),
                    u = Math.round(r.top + a[1]);
                return [c, l, u, o, s]
            },
            di = function(t) { return It(t) && t.value === je.AUTO },
            pi = function(t) { return "number" == typeof t },
            gi = function(t, e, A) {
                var r = e[0],
                    n = e[1],
                    i = e[2],
                    o = t[0],
                    s = t[1];
                if (kt(o) && s && kt(s)) return [Gt(o, A.width), Gt(s, A.height)];
                var a = pi(i);
                if (It(o) && (o.value === je.CONTAIN || o.value === je.COVER)) { if (pi(i)) { var c = A.width / A.height; return c < i != (o.value === je.COVER) ? [A.width, A.width / i] : [A.height * i, A.height] } return [A.width, A.height] }
                var l = pi(r),
                    u = pi(n),
                    h = l || u;
                if (di(o) && (!s || di(s))) {
                    if (l && u) return [r, n];
                    if (!a && !h) return [A.width, A.height];
                    if (h && a) {
                        var f = l ? r : n * i,
                            d = u ? n : r / i;
                        return [f, d]
                    }
                    var p = l ? r : A.width,
                        g = u ? n : A.height;
                    return [p, g]
                }
                if (a) {
                    var B = 0,
                        w = 0;
                    return kt(o) ? B = Gt(o, A.width) : kt(s) && (w = Gt(s, A.height)), di(o) ? B = w * i : s && !di(s) || (w = B / i), [B, w]
                }
                var m = null,
                    y = null;
                if (kt(o) ? m = Gt(o, A.width) : s && kt(s) && (y = Gt(s, A.height)), null === m || s && !di(s) || (y = l && u ? m / r * n : A.height), null !== y && di(o) && (m = l && u ? y / n * r : A.width), null !== m && null !== y) return [m, y];
                throw new Error("Unable to calculate background-size for element")
            },
            Bi = function(t, e) { var A = t[e]; return void 0 === A ? t[0] : A },
            wi = function(t, e, A, r, n) {
                var i = e[0],
                    o = e[1],
                    s = A[0],
                    a = A[1];
                switch (t) {
                    case Me.REPEAT_X:
                        return [new Wn(Math.round(r.left), Math.round(r.top + o)), new Wn(Math.round(r.left + r.width), Math.round(r.top + o)), new Wn(Math.round(r.left + r.width), Math.round(a + r.top + o)), new Wn(Math.round(r.left), Math.round(a + r.top + o))];
                    case Me.REPEAT_Y:
                        return [new Wn(Math.round(r.left + i), Math.round(r.top)), new Wn(Math.round(r.left + i + s), Math.round(r.top)), new Wn(Math.round(r.left + i + s), Math.round(r.height + r.top)), new Wn(Math.round(r.left + i), Math.round(r.height + r.top))];
                    case Me.NO_REPEAT:
                        return [new Wn(Math.round(r.left + i), Math.round(r.top + o)), new Wn(Math.round(r.left + i + s), Math.round(r.top + o)), new Wn(Math.round(r.left + i + s), Math.round(r.top + o + a)), new Wn(Math.round(r.left + i), Math.round(r.top + o + a))];
                    default:
                        return [new Wn(Math.round(n.left), Math.round(n.top)), new Wn(Math.round(n.left + n.width), Math.round(n.top)), new Wn(Math.round(n.left + n.width), Math.round(n.height + n.top)), new Wn(Math.round(n.left), Math.round(n.height + n.top))]
                }
            },
            mi = function() {
                function t(t) { this._data = {}, this._document = t }
                return t.prototype.parseMetrics = function(t, e) {
                    var A = this._document.createElement("div"),
                        r = this._document.createElement("img"),
                        n = this._document.createElement("span"),
                        i = this._document.body;
                    A.style.visibility = "hidden", A.style.fontFamily = t, A.style.fontSize = e, A.style.margin = "0", A.style.padding = "0", i.appendChild(A), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = t, n.style.fontSize = e, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode("Hidden Text")), A.appendChild(n), A.appendChild(r);
                    var o = r.offsetTop - n.offsetTop + 2;
                    A.removeChild(n), A.appendChild(this._document.createTextNode("Hidden Text")), A.style.lineHeight = "normal", r.style.verticalAlign = "super";
                    var s = r.offsetTop - A.offsetTop + 2;
                    return i.removeChild(A), { baseline: o, middle: s }
                }, t.prototype.getMetrics = function(t, e) { var A = t + " " + e; return void 0 === this._data[A] && (this._data[A] = this.parseMetrics(t, e)), this._data[A] }, t
            }(),
            yi = function() {
                function t(t) { this._activeEffects = [], this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = t, t.canvas || (this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = t.width + "px", this.canvas.style.height = t.height + "px"), this.fontMetrics = new mi(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x + t.scrollX, -t.y + t.scrollY), this.ctx.textBaseline = "bottom", this._activeEffects = [], Ue.getInstance(t.id).debug("Canvas renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale) }
                return t.prototype.applyEffects = function(t, e) {
                    for (var A = this; this._activeEffects.length;) this.popEffect();
                    t.filter(function(t) { return wr(t.target, e) }).forEach(function(t) { return A.applyEffect(t) })
                }, t.prototype.applyEffect = function(t) {
                    this.ctx.save(),
                        function(t) { return 0 === t.type }(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)),
                        function(t) { return 1 === t.type }(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t)
                }, t.prototype.popEffect = function() { this._activeEffects.pop(), this.ctx.restore() }, t.prototype.renderStack = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e;
                        return n(this, function(A) {
                            switch (A.label) {
                                case 0:
                                    return (e = t.element.container.styles).isVisible() ? (this.ctx.globalAlpha = e.opacity, [4, this.renderStackContent(t)]) : [3, 2];
                                case 1:
                                    A.sent(), A.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderNode = function(t) {
                    return r(this, void 0, void 0, function() {
                        return n(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
                                case 1:
                                    return e.sent(), [4, this.renderNodeContent(t)];
                                case 2:
                                    e.sent(), e.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderTextWithLetterSpacing = function(t, e) {
                    var A = this;
                    if (0 === e) this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height);
                    else {
                        var r = s(t.text).map(function(t) { return a(t) });
                        r.reduce(function(e, r) { return A.ctx.fillText(r, e, t.bounds.top + t.bounds.height), e + A.ctx.measureText(r).width }, t.bounds.left)
                    }
                }, t.prototype.createFontStyle = function(t) {
                    var e = t.fontVariant.filter(function(t) { return "normal" === t || "small-caps" === t }).join(""),
                        A = t.fontFamily.join(", "),
                        r = Ht(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
                    return [
                        [t.fontStyle, e, t.fontWeight, r, A].join(" "), A, r
                    ]
                }, t.prototype.renderTextNode = function(t, e) {
                    return r(this, void 0, void 0, function() {
                        var A, r, i, o, s = this;
                        return n(this, function(n) {
                            return A = this.createFontStyle(e), r = A[0], i = A[1], o = A[2], this.ctx.font = r, t.textBounds.forEach(function(t) {
                                s.ctx.fillStyle = ee(e.color), s.renderTextWithLetterSpacing(t, e.letterSpacing);
                                var A = e.textShadow;
                                A.length && t.text.trim().length && (A.slice(0).reverse().forEach(function(e) { s.ctx.shadowColor = ee(e.color), s.ctx.shadowOffsetX = e.offsetX.number * s.options.scale, s.ctx.shadowOffsetY = e.offsetY.number * s.options.scale, s.ctx.shadowBlur = e.blur.number, s.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height) }), s.ctx.shadowColor = "", s.ctx.shadowOffsetX = 0, s.ctx.shadowOffsetY = 0, s.ctx.shadowBlur = 0), e.textDecorationLine.length && (s.ctx.fillStyle = ee(e.textDecorationColor || e.color), e.textDecorationLine.forEach(function(e) {
                                    switch (e) {
                                        case 1:
                                            var A = s.fontMetrics.getMetrics(i, o).baseline;
                                            s.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top + A), t.bounds.width, 1);
                                            break;
                                        case 2:
                                            s.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top), t.bounds.width, 1);
                                            break;
                                        case 3:
                                            var r = s.fontMetrics.getMetrics(i, o).middle;
                                            s.ctx.fillRect(t.bounds.left, Math.ceil(t.bounds.top + r), t.bounds.width, 1)
                                    }
                                }))
                            }), [2]
                        })
                    })
                }, t.prototype.renderReplacedElement = function(t, e, A) {
                    if (A && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
                        var r = hi(t),
                            n = ri(e);
                        this.path(n), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(A, 0, 0, t.intrinsicWidth, t.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore()
                    }
                }, t.prototype.renderNodeContent = function(e) {
                    return r(this, void 0, void 0, function() {
                        var A, r, o, s, a, c, l, u, f, d, p, g, B, w;
                        return n(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    this.applyEffects(e.effects, 4), A = e.container, r = e.curves, o = A.styles, s = 0, a = A.textNodes, n.label = 1;
                                case 1:
                                    return s < a.length ? (c = a[s], [4, this.renderTextNode(c, o)]) : [3, 4];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return s++, [3, 1];
                                case 4:
                                    if (!(A instanceof Kr)) return [3, 8];
                                    n.label = 5;
                                case 5:
                                    return n.trys.push([5, 7, , 8]), [4, this.options.cache.match(A.src)];
                                case 6:
                                    return g = n.sent(), this.renderReplacedElement(A, r, g), [3, 8];
                                case 7:
                                    return n.sent(), Ue.getInstance(this.options.id).error("Error loading image " + A.src), [3, 8];
                                case 8:
                                    if (A instanceof Dr && this.renderReplacedElement(A, r, A.canvas), !(A instanceof kr)) return [3, 12];
                                    n.label = 9;
                                case 9:
                                    return n.trys.push([9, 11, , 12]), [4, this.options.cache.match(A.svg)];
                                case 10:
                                    return g = n.sent(), this.renderReplacedElement(A, r, g), [3, 12];
                                case 11:
                                    return n.sent(), Ue.getInstance(this.options.id).error("Error loading svg " + A.svg.substring(0, 255)), [3, 12];
                                case 12:
                                    return A instanceof An && A.tree ? [4, new t({ id: this.options.id, scale: this.options.scale, backgroundColor: A.backgroundColor, x: 0, y: 0, scrollX: 0, scrollY: 0, width: A.width, height: A.height, cache: this.options.cache, windowWidth: A.width, windowHeight: A.height }).render(A.tree)] : [3, 14];
                                case 13:
                                    l = n.sent(), A.width && A.height && this.ctx.drawImage(l, 0, 0, A.width, A.height, A.bounds.left, A.bounds.top, A.bounds.width, A.bounds.height), n.label = 14;
                                case 14:
                                    if (A instanceof Zr && (u = Math.min(A.bounds.width, A.bounds.height), A.type === Jr ? A.checked && (this.ctx.save(), this.path([new Wn(A.bounds.left + .39363 * u, A.bounds.top + .79 * u), new Wn(A.bounds.left + .16 * u, A.bounds.top + .5549 * u), new Wn(A.bounds.left + .27347 * u, A.bounds.top + .44071 * u), new Wn(A.bounds.left + .39694 * u, A.bounds.top + .5649 * u), new Wn(A.bounds.left + .72983 * u, A.bounds.top + .23 * u), new Wn(A.bounds.left + .84 * u, A.bounds.top + .34085 * u), new Wn(A.bounds.left + .39363 * u, A.bounds.top + .79 * u)]), this.ctx.fillStyle = ee(707406591), this.ctx.fill(), this.ctx.restore()) : A.type === Wr && A.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(A.bounds.left + u / 2, A.bounds.top + u / 2, u / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = ee(707406591), this.ctx.fill(), this.ctx.restore())), vi(A) && A.value.length) {
                                        switch (this.ctx.font = this.createFontStyle(o)[0], this.ctx.fillStyle = ee(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = Ci(A.styles.textAlign), w = hi(A), f = 0, A.styles.textAlign) {
                                            case MA.CENTER:
                                                f += w.width / 2;
                                                break;
                                            case MA.RIGHT:
                                                f += w.width
                                        }
                                        d = w.add(f, 0, 0, -w.height / 2 + 1), this.ctx.save(), this.path([new Wn(w.left, w.top), new Wn(w.left + w.width, w.top), new Wn(w.left + w.width, w.top + w.height), new Wn(w.left, w.top + w.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new xr(A.value, d), o.letterSpacing), this.ctx.restore(), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"
                                    }
                                    if (!wr(A.styles.display, 2048)) return [3, 20];
                                    if (null === A.styles.listStyleImage) return [3, 19];
                                    if ((p = A.styles.listStyleImage).type !== ue.URL) return [3, 18];
                                    g = void 0, B = p.url, n.label = 15;
                                case 15:
                                    return n.trys.push([15, 17, , 18]), [4, this.options.cache.match(B)];
                                case 16:
                                    return g = n.sent(), this.ctx.drawImage(g, A.bounds.left - (g.width + 10), A.bounds.top), [3, 18];
                                case 17:
                                    return n.sent(), Ue.getInstance(this.options.id).error("Error loading list-style-image " + B), [3, 18];
                                case 18:
                                    return [3, 20];
                                case 19:
                                    e.listValue && A.styles.listStyleType !== EA.NONE && (this.ctx.font = this.createFontStyle(o)[0], this.ctx.fillStyle = ee(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", w = new i(A.bounds.left, A.bounds.top + Gt(A.styles.paddingTop, A.bounds.width), A.bounds.width, function(t, e) { return It(t) && "normal" === t.value ? 1.2 * e : t.type === h.NUMBER_TOKEN ? e * t.number : kt(t) ? Gt(t, e) : e }(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new xr(e.listValue, w), o.letterSpacing), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), n.label = 20;
                                case 20:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderStackContent = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, A, r, i, o, s, a, c, l, u, h, f, d, p, g;
                        return n(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.renderNodeBackgroundAndBorders(t.element)];
                                case 1:
                                    n.sent(), e = 0, A = t.negativeZIndex, n.label = 2;
                                case 2:
                                    return e < A.length ? (g = A[e], [4, this.renderStack(g)]) : [3, 5];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return e++, [3, 2];
                                case 5:
                                    return [4, this.renderNodeContent(t.element)];
                                case 6:
                                    n.sent(), r = 0, i = t.nonInlineLevel, n.label = 7;
                                case 7:
                                    return r < i.length ? (g = i[r], [4, this.renderNode(g)]) : [3, 10];
                                case 8:
                                    n.sent(), n.label = 9;
                                case 9:
                                    return r++, [3, 7];
                                case 10:
                                    o = 0, s = t.nonPositionedFloats, n.label = 11;
                                case 11:
                                    return o < s.length ? (g = s[o], [4, this.renderStack(g)]) : [3, 14];
                                case 12:
                                    n.sent(), n.label = 13;
                                case 13:
                                    return o++, [3, 11];
                                case 14:
                                    a = 0, c = t.nonPositionedInlineLevel, n.label = 15;
                                case 15:
                                    return a < c.length ? (g = c[a], [4, this.renderStack(g)]) : [3, 18];
                                case 16:
                                    n.sent(), n.label = 17;
                                case 17:
                                    return a++, [3, 15];
                                case 18:
                                    l = 0, u = t.inlineLevel, n.label = 19;
                                case 19:
                                    return l < u.length ? (g = u[l], [4, this.renderNode(g)]) : [3, 22];
                                case 20:
                                    n.sent(), n.label = 21;
                                case 21:
                                    return l++, [3, 19];
                                case 22:
                                    h = 0, f = t.zeroOrAutoZIndexOrTransformedOrOpacity, n.label = 23;
                                case 23:
                                    return h < f.length ? (g = f[h], [4, this.renderStack(g)]) : [3, 26];
                                case 24:
                                    n.sent(), n.label = 25;
                                case 25:
                                    return h++, [3, 23];
                                case 26:
                                    d = 0, p = t.positiveZIndex, n.label = 27;
                                case 27:
                                    return d < p.length ? (g = p[d], [4, this.renderStack(g)]) : [3, 30];
                                case 28:
                                    n.sent(), n.label = 29;
                                case 29:
                                    return d++, [3, 27];
                                case 30:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.mask = function(t) { this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath() }, t.prototype.path = function(t) { this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath() }, t.prototype.formatPath = function(t) {
                    var e = this;
                    t.forEach(function(t, A) {
                        var r = $n(t) ? t.start : t;
                        0 === A ? e.ctx.moveTo(r.x, r.y) : e.ctx.lineTo(r.x, r.y), $n(t) && e.ctx.bezierCurveTo(t.startControl.x, t.startControl.y, t.endControl.x, t.endControl.y, t.end.x, t.end.y)
                    })
                }, t.prototype.renderRepeat = function(t, e, A, r) { this.path(t), this.ctx.fillStyle = e, this.ctx.translate(A, r), this.ctx.fill(), this.ctx.translate(-A, -r) }, t.prototype.resizeImage = function(t, e, A) {
                    if (t.width === e && t.height === A) return t;
                    var r = this.canvas.ownerDocument.createElement("canvas");
                    r.width = e, r.height = A;
                    var n = r.getContext("2d");
                    return n.drawImage(t, 0, 0, t.width, t.height, 0, 0, e, A), r
                }, t.prototype.renderBackgroundImage = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, A, r, i, o, s;
                        return n(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    e = t.styles.backgroundImage.length - 1, A = function(A) {
                                        var i, o, s, a, c, l, u, h, f, d, p, g, B, w, m, y, v, b, C, Q, F, U, E, N, L, x, _, H, S, I, T;
                                        return n(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    if (A.type !== ue.URL) return [3, 5];
                                                    i = void 0, o = A.url, n.label = 1;
                                                case 1:
                                                    return n.trys.push([1, 3, , 4]), [4, r.options.cache.match(o)];
                                                case 2:
                                                    return i = n.sent(), [3, 4];
                                                case 3:
                                                    return n.sent(), Ue.getInstance(r.options.id).error("Error loading background-image " + o), [3, 4];
                                                case 4:
                                                    return i && (s = fi(t, e, [i.width, i.height, i.width / i.height]), y = s[0], U = s[1], E = s[2], C = s[3], Q = s[4], w = r.ctx.createPattern(r.resizeImage(i, C, Q), "repeat"), r.renderRepeat(y, w, U, E)), [3, 6];
                                                case 5:
                                                    ! function(t) { return t.type === ue.LINEAR_GRADIENT }(A) ? function(t) { return t.type === ue.RADIAL_GRADIENT }(A) && (m = fi(t, e, [null, null, null]), y = m[0], v = m[1], b = m[2], C = m[3], Q = m[4], F = 0 === A.position.length ? [qt] : A.position, U = Gt(F[0], C), E = Gt(F[F.length - 1], Q), N = function(t, e, A, r, n) {
                                                        var i = 0,
                                                            o = 0;
                                                        switch (t.size) {
                                                            case fe.CLOSEST_SIDE:
                                                                t.shape === he.CIRCLE ? i = o = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(A), Math.abs(A - n)) : t.shape === he.ELLIPSE && (i = Math.min(Math.abs(e), Math.abs(e - r)), o = Math.min(Math.abs(A), Math.abs(A - n)));
                                                                break;
                                                            case fe.CLOSEST_CORNER:
                                                                if (t.shape === he.CIRCLE) i = o = Math.min(me(e, A), me(e, A - n), me(e - r, A), me(e - r, A - n));
                                                                else if (t.shape === he.ELLIPSE) {
                                                                    var s = Math.min(Math.abs(A), Math.abs(A - n)) / Math.min(Math.abs(e), Math.abs(e - r)),
                                                                        a = ye(r, n, e, A, !0),
                                                                        c = a[0],
                                                                        l = a[1];
                                                                    i = me(c - e, (l - A) / s), o = s * i
                                                                }
                                                                break;
                                                            case fe.FARTHEST_SIDE:
                                                                t.shape === he.CIRCLE ? i = o = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(A), Math.abs(A - n)) : t.shape === he.ELLIPSE && (i = Math.max(Math.abs(e), Math.abs(e - r)), o = Math.max(Math.abs(A), Math.abs(A - n)));
                                                                break;
                                                            case fe.FARTHEST_CORNER:
                                                                if (t.shape === he.CIRCLE) i = o = Math.max(me(e, A), me(e, A - n), me(e - r, A), me(e - r, A - n));
                                                                else if (t.shape === he.ELLIPSE) {
                                                                    var s = Math.max(Math.abs(A), Math.abs(A - n)) / Math.max(Math.abs(e), Math.abs(e - r)),
                                                                        u = ye(r, n, e, A, !1),
                                                                        c = u[0],
                                                                        l = u[1];
                                                                    i = me(c - e, (l - A) / s), o = s * i
                                                                }
                                                        }
                                                        return Array.isArray(t.size) && (i = Gt(t.size[0], r), o = 2 === t.size.length ? Gt(t.size[1], n) : i), [i, o]
                                                    }(A, U, E, C, Q), L = N[0], x = N[1], L > 0 && L > 0 && (_ = r.ctx.createRadialGradient(v + U, b + E, 0, v + U, b + E, L), Be(A.stops, 2 * L).forEach(function(t) { return _.addColorStop(t.stop, ee(t.color)) }), r.path(y), r.ctx.fillStyle = _, L !== x ? (H = t.bounds.left + .5 * t.bounds.width, S = t.bounds.top + .5 * t.bounds.height, T = 1 / (I = x / L), r.ctx.save(), r.ctx.translate(H, S), r.ctx.transform(1, 0, 0, I, 0, 0), r.ctx.translate(-H, -S), r.ctx.fillRect(v, T * (b - S) + S, C, Q * T), r.ctx.restore()) : r.ctx.fill())) : (a = fi(t, e, [null, null, null]), y = a[0], U = a[1], E = a[2], C = a[3], Q = a[4], c = we(A.angle, C, Q), l = c[0], u = c[1], h = c[2], f = c[3], d = c[4], (p = document.createElement("canvas")).width = C, p.height = Q, g = p.getContext("2d"), B = g.createLinearGradient(u, f, h, d), Be(A.stops, l).forEach(function(t) { return B.addColorStop(t.stop, ee(t.color)) }), g.fillStyle = B, g.fillRect(0, 0, C, Q), C > 0 && Q > 0 && (w = r.ctx.createPattern(p, "repeat"), r.renderRepeat(y, w, U, E))), n.label = 6;
                                                case 6:
                                                    return e--, [2]
                                            }
                                        })
                                    }, r = this, i = 0, o = t.styles.backgroundImage.slice(0).reverse(), a.label = 1;
                                case 1:
                                    return i < o.length ? (s = o[i], [5, A(s)]) : [3, 4];
                                case 2:
                                    a.sent(), a.label = 3;
                                case 3:
                                    return i++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderBorder = function(t, e, A) {
                    return r(this, void 0, void 0, function() {
                        return n(this, function(r) {
                            return this.path(function(t, e) {
                                switch (e) {
                                    case 0:
                                        return li(t.topLeftBorderBox, t.topLeftPaddingBox, t.topRightBorderBox, t.topRightPaddingBox);
                                    case 1:
                                        return li(t.topRightBorderBox, t.topRightPaddingBox, t.bottomRightBorderBox, t.bottomRightPaddingBox);
                                    case 2:
                                        return li(t.bottomRightBorderBox, t.bottomRightPaddingBox, t.bottomLeftBorderBox, t.bottomLeftPaddingBox);
                                    case 3:
                                    default:
                                        return li(t.bottomLeftBorderBox, t.bottomLeftPaddingBox, t.topLeftBorderBox, t.topLeftPaddingBox)
                                }
                            }(A, e)), this.ctx.fillStyle = ee(t), this.ctx.fill(), [2]
                        })
                    })
                }, t.prototype.renderNodeBackgroundAndBorders = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, A, r, i, o, s, a, c, l = this;
                        return n(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.applyEffects(t.effects, 2), e = t.container.styles, A = !te(e.backgroundColor) || e.backgroundImage.length, r = [{ style: e.borderTopStyle, color: e.borderTopColor }, { style: e.borderRightStyle, color: e.borderRightColor }, { style: e.borderBottomStyle, color: e.borderBottomColor }, { style: e.borderLeftStyle, color: e.borderLeftColor }], i = bi(Bi(e.backgroundClip, 0), t.curves), A || e.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), te(e.backgroundColor) || (this.ctx.fillStyle = ee(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
                                case 1:
                                    n.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach(function(e) {
                                        l.ctx.save();
                                        var A = Ai(t.curves),
                                            r = e.inset ? 0 : 1e4,
                                            n = function(t, e, A, r, n) {
                                                return t.map(function(t, i) {
                                                    switch (i) {
                                                        case 0:
                                                            return t.add(e, A);
                                                        case 1:
                                                            return t.add(e + r, A);
                                                        case 2:
                                                            return t.add(e + r, A + n);
                                                        case 3:
                                                            return t.add(e, A + n)
                                                    }
                                                    return t
                                                })
                                            }(A, -r + (e.inset ? 1 : -1) * e.spread.number, (e.inset ? 1 : -1) * e.spread.number, e.spread.number * (e.inset ? -2 : 2), e.spread.number * (e.inset ? -2 : 2));
                                        e.inset ? (l.path(A), l.ctx.clip(), l.mask(n)) : (l.mask(A), l.ctx.clip(), l.path(n)), l.ctx.shadowOffsetX = e.offsetX.number + r, l.ctx.shadowOffsetY = e.offsetY.number, l.ctx.shadowColor = ee(e.color), l.ctx.shadowBlur = e.blur.number, l.ctx.fillStyle = e.inset ? ee(e.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore()
                                    }), n.label = 2;
                                case 2:
                                    o = 0, s = 0, a = r, n.label = 3;
                                case 3:
                                    return s < a.length ? (c = a[s]).style === Xe.NONE || te(c.color) ? [3, 5] : [4, this.renderBorder(c.color, o, t.curves)] : [3, 7];
                                case 4:
                                    n.sent(), n.label = 5;
                                case 5:
                                    o++, n.label = 6;
                                case 6:
                                    return s++, [3, 3];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e;
                        return n(this, function(A) {
                            switch (A.label) {
                                case 0:
                                    return this.options.backgroundColor && (this.ctx.fillStyle = ee(this.options.backgroundColor), this.ctx.fillRect(this.options.x - this.options.scrollX, this.options.y - this.options.scrollY, this.options.width, this.options.height)), e = function(t) {
                                        var e = new si(t, []),
                                            A = new oi(e),
                                            r = [];
                                        return ai(e, A, A, r), ci(e.container, r), A
                                    }(t), [4, this.renderStack(e)];
                                case 1:
                                    return A.sent(), this.applyEffects([], 2), [2, this.canvas]
                            }
                        })
                    })
                }, t
            }(),
            vi = function(t) { return t instanceof tn || t instanceof $r || t instanceof Zr && t.type !== Wr && t.type !== Jr },
            bi = function(t, e) {
                switch (t) {
                    case se.BORDER_BOX:
                        return Ai(e);
                    case se.CONTENT_BOX:
                        return function(t) { return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox] }(e);
                    case se.PADDING_BOX:
                    default:
                        return ri(e)
                }
            },
            Ci = function(t) {
                switch (t) {
                    case MA.CENTER:
                        return "center";
                    case MA.RIGHT:
                        return "right";
                    case MA.LEFT:
                    default:
                        return "left"
                }
            },
            Qi = function() {
                function t(t) { this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = t, this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = t.width + "px", this.canvas.style.height = t.height + "px", this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x + t.scrollX, -t.y + t.scrollY), Ue.getInstance(t.id).debug("EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale) }
                return t.prototype.render = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, A;
                        return n(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e = Ce(Math.max(this.options.windowWidth, this.options.width) * this.options.scale, Math.max(this.options.windowHeight, this.options.height) * this.options.scale, this.options.scrollX * this.options.scale, this.options.scrollY * this.options.scale, t), [4, Fi(e)];
                                case 1:
                                    return A = r.sent(), this.options.backgroundColor && (this.ctx.fillStyle = ee(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(A, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
                            }
                        })
                    })
                }, t
            }(),
            Fi = function(t) {
                return new Promise(function(e, A) {
                    var r = new Image;
                    r.onload = function() { e(r) }, r.onerror = A, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(t))
                })
            },
            Ui = void 0,
            Ei = function(t) { return $t.parse(_t.create(t).parseComponentValue()) };
        Ee.setContext(window);
        var Ni = function(t, e) {
            return r(Ui, void 0, void 0, function() {
                var r, s, a, c, l, u, h, f, d, p, g, B, w, m, y, v, b, C, Q, F, U, E, N;
                return n(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (!(r = t.ownerDocument)) throw new Error("Element is not attached to a Document");
                            if (!(s = r.defaultView)) throw new Error("Document is not attached to a Window");
                            return a = (Math.round(1e3 * Math.random()) + Date.now()).toString(16), c = Bn(t) || function(t) { return "HTML" === t.tagName }(t) ? function(t) {
                                var e = t.body,
                                    A = t.documentElement;
                                if (!e || !A) throw new Error("Unable to get document size");
                                var r = Math.max(Math.max(e.scrollWidth, A.scrollWidth), Math.max(e.offsetWidth, A.offsetWidth), Math.max(e.clientWidth, A.clientWidth)),
                                    n = Math.max(Math.max(e.scrollHeight, A.scrollHeight), Math.max(e.offsetHeight, A.offsetHeight), Math.max(e.clientHeight, A.clientHeight));
                                return new i(0, 0, r, n)
                            }(r) : o(t), l = c.width, u = c.height, h = c.left, f = c.top, d = A({}, { allowTaint: !1, imageTimeout: 15e3, proxy: void 0, useCORS: !1 }, e), p = { backgroundColor: "#ffffff", cache: e.cache ? e.cache : Ee.create(a, d), logging: !0, removeContainer: !0, foreignObjectRendering: !1, scale: s.devicePixelRatio || 1, windowWidth: s.innerWidth, windowHeight: s.innerHeight, scrollX: s.pageXOffset, scrollY: s.pageYOffset, x: h, y: f, width: Math.ceil(l), height: Math.ceil(u), id: a }, g = A({}, p, d, e), B = new i(g.scrollX, g.scrollY, g.windowWidth, g.windowHeight), Ue.create({ id: a, enabled: g.logging }), Ue.getInstance(a).debug("Starting document clone"), w = new Rn(t, { id: a, onclone: g.onclone, ignoreElements: g.ignoreElements, inlineImages: g.foreignObjectRendering, copyStyles: g.foreignObjectRendering }), (m = w.clonedReferenceElement) ? [4, w.toIFrame(r, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                        case 1:
                            return y = n.sent(), v = r.documentElement ? Ei(getComputedStyle(r.documentElement).backgroundColor) : le.TRANSPARENT, b = r.body ? Ei(getComputedStyle(r.body).backgroundColor) : le.TRANSPARENT, C = e.backgroundColor, Q = "string" == typeof C ? Ei(C) : null === C ? le.TRANSPARENT : 4294967295, F = t === r.documentElement ? te(v) ? te(b) ? Q : b : v : Q, U = { id: a, cache: g.cache, canvas: g.canvas, backgroundColor: F, scale: g.scale, x: g.x, y: g.y, scrollX: g.scrollX, scrollY: g.scrollY, width: g.width, height: g.height, windowWidth: g.windowWidth, windowHeight: g.windowHeight }, g.foreignObjectRendering ? (Ue.getInstance(a).debug("Document cloned, using foreign object rendering"), [4, new Qi(U).render(m)]) : [3, 3];
                        case 2:
                            return E = n.sent(), [3, 5];
                        case 3:
                            return Ue.getInstance(a).debug("Document cloned, using computed rendering"), Ee.attachInstance(g.cache), Ue.getInstance(a).debug("Starting DOM parsing"), N = sn(m), Ee.detachInstance(), F === N.styles.backgroundColor && (N.styles.backgroundColor = le.TRANSPARENT), Ue.getInstance(a).debug("Starting renderer"), [4, new yi(U).render(N)];
                        case 4:
                            E = n.sent(), n.label = 5;
                        case 5:
                            return !0 === g.removeContainer && (Rn.destroy(y) || Ue.getInstance(a).error("Cannot detach cloned iframe as it is not in the DOM anymore")), Ue.getInstance(a).debug("Finished rendering"), Ue.destroy(a), Ee.destroy(a), [2, E]
                    }
                })
            })
        };
        return function(t, e) { return void 0 === e && (e = {}), Ni(t, e) }
    }()
}, function(t, e, A) {
    "use strict";
    A.r(e);
    A(12), A(7);
    var r = Object.assign || function(t) {
        for (var e, A = 1, r = arguments.length; A < r; A++)
            for (var n in e = arguments[A]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    };

    function n(t, e, A) {
        var r = this,
            n = function() {
                if (t.length > 0) {
                    var i = t.shift();
                    i && i.apply(r, [e, n])
                } else A(e)
            };
        n()
    }

    function i(t, e) { var A; try { A = JSON.stringify(t) } catch (t) { throw new Error("Network request failed. Payload is not serializable: " + t.message) } return r({ body: A, method: "POST" }, e, { headers: r({ Accept: "*/*", "Content-Type": "application/json" }, e.headers || []) }) }

    function o(t) {
        void 0 === t && (t = {});
        var e = t.constructOptions,
            A = t.customFetch,
            o = t.uri || "/graphql",
            s = [],
            a = [],
            c = [],
            l = [],
            u = function(t) {
                var u, h = {},
                    f = Array.isArray(t);
                return function(t, e) { return new Promise(function(A, r) { n(e ? a.slice() : s.slice(), t, A) }) }(f ? { requests: t, options: h } : { request: t, options: h }, f).then(function(t) { return (e || i)(t.request || t.requests, t.options) }).then(function(t) { return h = r({}, t), (A || fetch)(o, h) }).then(function(t) { return t.text().then(function(e) { try { var A = JSON.parse(e); return t.raw = e, t.parsed = A, t } catch (A) { return u = A, t.raw = e, t } }) }).then(function(t) { return function(t, e) { return new Promise(function(A, r) { n(e ? l.slice() : c.slice(), t, A) }) }({ response: t, options: h }, f) }).then(function(t) { var e = t.response; if (e.parsed) { if (!f) return r({}, e.parsed); if (Array.isArray(e.parsed)) return e.parsed;! function(t) { var e = new Error("A batched Operation of responses for "); throw e.response = t, e }(e) } else ! function(t, e) { var A; throw (A = t && t.status >= 300 ? new Error("Network request failed with status " + t.status + ' - "' + t.statusText + '"') : new Error("Network request failed to return valid JSON")).response = t, A.parseError = e, A }(e, u) })
            };
        return u.use = function(t) { if ("function" != typeof t) throw new Error("Middleware must be a function"); return s.push(t), u }, u.useAfter = function(t) { if ("function" != typeof t) throw new Error("Afterware must be a function"); return c.push(t), u }, u.batchUse = function(t) { if ("function" != typeof t) throw new Error("Middleware must be a function"); return a.push(t), u }, u.batchUseAfter = function(t) { if ("function" != typeof t) throw new Error("Afterware must be a function"); return l.push(t), u }, u
    }

    function s(t) {
        let e = t + "__none",
            A = t + "__squares",
            r = t + "__diagonals",
            n = t + "__clusters";
        d3.select("#" + t).append("div").attr("id", "tooltip_container"), d3.select("#" + t).append("div").attr("id", t + "_buttons_container").attr("class", "buttons_container");
        let i = d3.select("#" + t + "_buttons_container").append("form").append("select").attr("class", "classificators_list").attr("id", t + "_dropdown_list").on("change", function(t) {
            let e = document.getElementById(this.options[this.selectedIndex].id.split("__")[0]),
                A = e.getAttribute("metric_x"),
                r = e.getAttribute("metric_y");
            R(this.options[this.selectedIndex].id, A, r, S)
        }).append("optgroup").attr("label", "Select a classification method:");
        d3.select("#" + t).append("div").attr("class", "flex-container").attr("id", t + "flex-container"), i.append("option").attr("class", "selection_option").attr("id", e).attr("title", "Show only raw data").attr("selected", "disabled").attr("data-toggle", "list_tooltip").attr("data-container", "#tooltip_container").text("NO CLASSIFICATION"), i.append("option").attr("class", "selection_option").attr("id", A).attr("title", "Apply square quartiles classification method (based on the 0.5 quartile of the X and Y metrics)").attr("data-toggle", "list_tooltip").attr("data-container", "#tooltip_container").text("SQUARE QUARTILES"), i.append("option").attr("class", "selection_option").attr("id", r).attr("title", "Apply diagonal quartiles classifcation method (based on the assignment of a score to each participant proceeding from its distance to the 'optimal performance' corner)").attr("data-toggle", "list_tooltip").attr("data-container", "#tooltip_container").text("DIAGONAL QUARTILES"), i.append("option").attr("class", "selection_option").attr("id", n).attr("title", "Apply K-Means clustering method (group the participants using the K-means clustering algorithm and sort the clusters according to the performance)").attr("data-toggle", "list_tooltip").attr("data-container", "#tooltip_container").text("K-MEANS CLUSTERING")
    }

    function a(t, e) { let A = []; return t.forEach(t => {-1 == $.inArray(t.toolname.replace(/[\. ()/_]/g, "-"), e) && A.push(t) }), A }
    var c = A(1);

    function l(t, e, A, r) {
        var n = document.getElementById(t + "_table"),
            i = n.insertRow(-1);
        i.insertCell(0).innerHTML = "<b>TOOL</b>", i.insertCell(1).innerHTML = "<b>QUARTILE</b>", A.forEach(function(A) {
            var i = n.insertRow(-1);
            if (i.insertCell(0).innerHTML = A.toolname, -1 == $.inArray(A.toolname.replace(/[\. ()/_]/g, "-"), r)) {
                let t = e.find(t => t.toolname.replace(/[\. ()/_]/g, "-") === A.toolname.replace(/[\. ()/_]/g, "-"));
                i.insertCell(1).innerHTML = t.quartile
            } else i.insertCell(1).innerHTML = "--";
            var o = i.cells[0];
            o.id = t + "___cell" + A.toolname.replace(/[\. ()/-]/g, "_"), o.addEventListener("click", function(e) {
                let A = this.id,
                    r = t + "___leg_rect" + A.split("___cell")[1];
                document.getElementById(r).dispatchEvent(new Event("click"))
            }), o.addEventListener("mouseover", function(t) {
                let e = this.id;
                d3.select(this).style("cursor", "pointer");
                e.split("___cell")[1];
                1 == d3.select(this).style("opacity") || .5 == d3.select(this).style("opacity") ? ($(this).css("opacity", .7), $(this).closest("tr").css("opacity", .7)) : ($(this).css("opacity", 1), $(this).closest("tr").css("opacity", 1))
            }), o.addEventListener("mouseout", function(e) {
                let A = this.id;
                d3.select(this).style("cursor", "default");
                let r = t + "___leg_rect" + A.split("___cell")[1];
                .2 == d3.select("#" + r).style("opacity") || .5 == d3.select("#" + r).style("opacity") ? ($(this).css("opacity", .5), $(this).closest("tr").css("opacity", .5)) : ($(this).css("opacity", 1), $(this).closest("tr").css("opacity", 1))
            })
        })
    }

    function u(t, e, A) {
        var r = Object.keys(e);
        $("#" + t + "_table td").each(function() {
            var t = $(this).html();
            1 == t ? $(this).css({ background: "#238b45" }) : 2 == t ? $(this).css({ background: "#74c476" }) : 3 == t ? $(this).css({ background: "#bae4b3" }) : 4 == t ? $(this).css({ background: "#edf8e9" }) : "--" == t ? $(this).css({ background: "#f0f0f5" }) : $.inArray(t, r) > -1 && -1 == $.inArray(t.replace(/[\. ()/_]/g, "-"), A) ? $(this).css({ background: "linear-gradient(to left, white 92%, " + e[t] + " 8%)" }) : $.inArray(t.replace(/[\. ()/_]/g, "-"), A) > -1 ? ($(this).css({ background: "linear-gradient(to left, white 92%, " + e[t] + " 8%)", opacity: .5 }), $(this).closest("tr").css("opacity", .5)) : $(this).css({ background: "#FFFFFF" })
        })
    }

    function h(t, e, A, r, n, i, o, s, c, h) {
        let f = a(t, i),
            d = f.map(t => t.x).sort(function(t, e) { return t - e }),
            p = f.map(t => t.y).sort(function(t, e) { return t - e }),
            g = d3.quantile(d, .5),
            B = d3.quantile(p, .5),
            w = A.domain(),
            m = r.domain(),
            y = d3.format(",");
        e.append("line").attr("x1", A(g)).attr("y1", r(m[0])).attr("x2", A(g)).attr("y2", r(m[1])).attr("id", function(t) { return s + "___x_quartile" }).attr("stroke", "#0A58A2").attr("stroke-width", 2).style("stroke-dasharray", "20, 5").style("opacity", .4).on("mouseover", function(t) { n.transition().duration(100).style("opacity", .9), n.html("X quartile = " + y(g)).style("left", d3.event.pageX + "px").style("top", d3.event.pageY + "px") }).on("mouseout", function(t) { n.transition().duration(1e3).style("opacity", 0) }), e.append("line").attr("x1", A(w[0])).attr("y1", r(B)).attr("x2", A(w[1])).attr("y2", r(B)).attr("id", function(t) { return s + "___y_quartile" }).attr("stroke", "#0A58A2").attr("stroke-width", 2).style("stroke-dasharray", "20, 5").style("opacity", .4).on("mouseover", function(t) { n.transition().duration(100).style("opacity", .9), n.html("Y quartile = " + y(B)).style("left", d3.event.pageX + "px").style("top", d3.event.pageY + "px") }).on("mouseout", function(t) { n.transition().duration(1500).style("opacity", 0) }), 1 == c && function(t, e, A, r, n, i, o, s) {
            "bottom-right" == t ? e.forEach(function(t) { t.x >= A && t.y <= r ? t.quartile = 1 : t.x >= A && t.y > r ? t.quartile = 3 : t.x < A && t.y > r ? t.quartile = 4 : t.x < A && t.y <= r && (t.quartile = 2) }) : "top-right" == t && e.forEach(function(t) { t.x >= A && t.y < r ? t.quartile = 3 : t.x >= A && t.y >= r ? t.quartile = 1 : t.x < A && t.y >= r ? t.quartile = 2 : t.x < A && t.y < r && (t.quartile = 4) });
            l(n, e, o, s), u(n, i, s)
        }(o, f, g, B, s, h, t, i)
    }

    function f(t, e, A, r, n, i, o, s, c, h, f, p) {
        let g = a(t, s),
            B = g.map(t => t.x),
            w = g.map(t => t.y),
            m = function(t, e) {
                let A = Math.max.apply(null, t),
                    r = Math.max.apply(null, e),
                    n = t.map(function(t) { return t / A }),
                    i = e.map(function(t) { return t / r });
                return [n, i]
            }(B, w),
            [y, v] = [m[0], m[1]],
            b = Math.max.apply(null, B),
            C = Math.max.apply(null, w),
            Q = [],
            F = {};
        for (let t = 0; t < y.length; t++) "bottom-right" == c ? (Q.push(y[t] + (1 - v[t])), F[y[t] + (1 - v[t])] = [B[t], w[t]], g[t].score = y[t] + (1 - v[t])) : "top-right" == c && (Q.push(y[t] + v[t]), F[y[t] + v[t]] = [B[t], w[t]], g[t].score = y[t] + v[t]);
        Q.sort(function(t, e) { return e - t });
        let U = d3.quantile(Q, .25),
            E = d3.quantile(Q, .5),
            N = d3.quantile(Q, .75),
            L = 0;
        [d(Q, F, U, c, b, C, e, A, r), d(Q, F, E, c, b, C, e, A, r), d(Q, F, N, c, b, C, e, A, r)].forEach(t => {
            let [n, s] = [t[0], t[1]];
            e.append("line").attr("clip-path", "url(#clip)").attr("x1", A(n[0])).attr("y1", r(s[0])).attr("x2", A(n[1])).attr("y2", r(s[1])).attr("id", function(t) { return h + "___diag_quartile_" + L }).attr("stroke", "#0A58A2").attr("stroke-width", 2).style("stroke-dasharray", "20, 5").style("opacity", .4), e.append("clipPath").attr("id", "clip").append("rect").attr("width", i).attr("height", o), L += 1
        }), 1 == f && function(t, e, A, r, n, i, o, s, a, c, h) {
            let f = [
                [],
                [],
                [],
                []
            ];
            t.forEach(function(t) { t.score > e ? (t.quartile = 1, f[0].push([t.x, t.y])) : t.score > A && t.score <= e ? (t.quartile = 2, f[1].push([t.x, t.y])) : t.score > r && t.score <= A ? (t.quartile = 3, f[2].push([t.x, t.y])) : t.score <= r && (t.quartile = 4, f[3].push([t.x, t.y])) });
            let d = 1;
            f.forEach(function(t) {
                var e = function(t) { return t.reduce(function(e, A) { return [e[0] + A[0] / t.length, e[1] + A[1] / t.length] }, [0, 0]) }(t);
                i.append("text").attr("class", function(t) { return n + "___diag_num" }).attr("x", o(e[0])).attr("y", s(e[1])).style("opacity", .4).style("font-size", "2vw").style("fill", "#0A58A2").text(d), d++
            }), l(n, t, c, h), u(n, a, h)
        }(g, U, E, N, h, e, A, r, p, t, s)
    }

    function d(t, e, A, r, n, i, o, s, a) {
        let c;
        for (let r = 0; r < t.length; r++)
            if (t[r] <= A) {
                c = [
                    [e[t[r - 1]][0], e[t[r - 1]][1]],
                    [e[t[r]][0], e[t[r]][1]]
                ];
                break
            }
        let l, u, h = [(c[0][0] + c[1][0]) / 2, (c[0][1] + c[1][1]) / 2];
        return "bottom-right" == r ? (l = [h[0] - 2 * n, h[0] + 2 * n], u = [h[1] - 2 * i, h[1] + 2 * i]) : "top-right" == r && (l = [h[0] + 2 * n, h[0] - 2 * n], u = [h[1] - 2 * i, h[1] + 2 * i]), [l, u]
    }
    var p = A(0),
        g = function(t, e, A) { return (e[0] - t[0]) * (A[1] - t[1]) - (e[1] - t[1]) * (A[0] - t[0]) };

    function B(t, e) { return t[0] - e[0] || t[1] - e[1] }

    function w(t) {
        for (var e = t.length, A = [0, 1], r = 2, n = 2; n < e; ++n) {
            for (; r > 1 && g(t[A[r - 2]], t[A[r - 1]], t[n]) <= 0;) --r;
            A[r++] = n
        }
        return A.slice(0, r)
    }
    var m = function(t) {
        if ((A = t.length) < 3) return null;
        var e, A, r = new Array(A),
            n = new Array(A);
        for (e = 0; e < A; ++e) r[e] = [+t[e][0], +t[e][1], e];
        for (r.sort(B), e = 0; e < A; ++e) n[e] = [r[e][0], -r[e][1]];
        var i = w(r),
            o = w(n),
            s = o[0] === i[0],
            a = o[o.length - 1] === i[i.length - 1],
            c = [];
        for (e = i.length - 1; e >= 0; --e) c.push(t[r[i[e]][2]]);
        for (e = +s; e < o.length - a; ++e) c.push(t[r[o[e]][2]]);
        return c
    };

    function y(t, e, A, r, n, i, o, s, c, h, f, d) {
        let g = a(t, s),
            B = g.map(t => t.x),
            w = g.map(t => t.y),
            y = [];
        for (let t = 0; t < B.length; t++) y.push([B[t], w[t]]);
        p.k(4), p.iterations(500), p.data(y);
        let v = p.clusters(),
            b = [],
            C = [];
        v.forEach(function(t) { b.push(t.centroid[0]), C.push(t.centroid[1]) });
        let [Q, F] = function(t, e) {
            let A = Math.max.apply(null, t),
                r = Math.max.apply(null, e),
                n = t.map(function(t) { return t / A }),
                i = e.map(function(t) { return t / r });
            return [n, i]
        }(b, C), U = [];
        if ("top-right" == c)
            for (let t = 0; t < Q.length; t++) {
                let e = Q[t] + F[t];
                U.push(e), v[t].score = e
            } else if ("bottom-right" == c)
                for (let t = 0; t < Q.length; t++) {
                    let e = Q[t] + (1 - F[t]);
                    U.push(e), v[t].score = e
                }
        let E = function(t, e) {
            return t.sort(function(t, A) {
                var r = t[e],
                    n = A[e];
                return -1 * (r < n ? -1 : r > n ? 1 : 0)
            })
        }(v, "score");
        E = function(t, e, A, r, n) {
            let i = 1;
            var o = [];
            return n.forEach(function(n) {
                var s = [];
                n.cluster = i, t.append("text").attr("class", function(t) { return e + "___cluster_num" }).attr("x", A(n.centroid[0])).attr("y", r(n.centroid[1])).style("opacity", .9).style("font-size", "2vw").style("fill", "#0A58A2").text(i), n.points.forEach(function(i) { s.push([i[0], i[1]]), t.append("line").attr("x1", A(n.centroid[0])).attr("y1", r(n.centroid[1])).attr("x2", A(i[0])).attr("y2", r(i[1])).attr("class", function(t) { return e + "___clust_lines" }).attr("stroke", "#0A58A2").attr("stroke-width", 2).style("stroke-dasharray", "20, 5").style("opacity", .4) });
                var a = m(s);
                o.push({ points: a }), i++
            }), t.selectAll("polygon").data(o).enter().append("polygon").attr("points", function(t) { if (null != t.points) return t.points.map(function(t) { return [A(t[0]), r(t[1])].join(",") }).join(" ") }).attr("class", function(t) { return e + "___clust_polygons" }).attr("fill", "#0A58A2").style("opacity", .1), n
        }(e, h, A, r, E), 1 == f && function(t, e, A, r, n, i) {
            t.forEach(function(t) {
                let A = [t.x, t.y];
                e.forEach(function(e) { 1 == function(t, e) { var A = JSON.stringify(e); return t.some(function(t) { return JSON.stringify(t) === A }) }(e.points, A) && (t.quartile = e.cluster) })
            }), l(A, t, n, i), u(A, r, i)
        }(g, E, h, d, t, s)
    }

    function v(t, e, A, r, n, i, o, s, a, c, l, u) {
        let d;
        null != document.getElementById(a + "_table") && (document.getElementById(a + "_table").innerHTML = "", d = !0),
            function(t, e, A, r, n) {
                e.append("svg:defs").append("svg:marker").attr("id", "opt_triangle").attr("class", function(e) { return t + "___better_annotation" }).attr("refX", 6).attr("refY", 6).attr("markerWidth", 30).attr("markerHeight", 30).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 0 0 12 6 0 12 3 6").style("fill", "black").style("opacity", .7);
                let i, o, s, a, c, l = A.domain(),
                    u = r.domain();
                "bottom-right" == n ? (i = l[1] - .05 * (l[1] - l[0]), o = u[1] - .9 * (u[1] - u[0]), s = l[1] - .009 * (l[1] - l[0]), a = u[1] - .97 * (u[1] - u[0]), c = 0) : "top-right" == n && (i = l[1] - .05 * (l[1] - l[0]), o = u[1] - .1 * (u[1] - u[0]), s = l[1] - .009 * (l[1] - l[0]), a = u[1] - .03 * (u[1] - u[0]), c = 1);
                e.append("line").attr("class", function(e) { return t + "___better_annotation" }).attr("x1", A(i)).attr("y1", r(o)).attr("x2", A(s)).attr("y2", r(a)).attr("stroke", "black").attr("stroke-width", 2).attr("marker-end", "url(#opt_triangle)").style("opacity", .4);
                e.append("text").attr("class", function(e) { return t + "___better_annotation" }).attr("x", A(l[1])).attr("y", r(u[c])).style("opacity", .4).style("font-size", ".7vw").text("better")
            }(a, e, A, r, u), c == a + "__squares" ? (b(t, e, A, r, s, a, u), h(t, e, A, r, n, s, u, a, d, l), function(t, e, A, r, n) {
                let i, o, s, a, c = e.domain(),
                    l = A.domain();
                "bottom-right" == r ? (i = "1", o = "2", s = "3", a = "4") : "top-right" == r && (i = "3", o = "4", s = "1", a = "2"), t.append("text").attr("id", function(t) { return n + "___num_bottom_right" }).attr("x", e(c[1] - .05 * (c[1] - c[0]))).attr("y", A(l[1] - .97 * (l[1] - l[0]))).style("opacity", .4).style("font-size", "2vw").style("fill", "#0A58A2").text(i), t.append("text").attr("id", function(t) { return n + "___num_bottom_left" }).attr("x", e(c[1] - .98 * (c[1] - c[0]))).attr("y", A(l[1] - .97 * (l[1] - l[0]))).style("opacity", .4).style("font-size", "2vw").style("fill", "#0A58A2").text(o), t.append("text").attr("id", function(t) { return n + "___num_top_right" }).attr("x", e(c[1] - .05 * (c[1] - c[0]))).attr("y", A(l[1] - .1 * (l[1] - l[0]))).style("opacity", .4).style("font-size", "2vw").style("fill", "#0A58A2").text(s), t.append("text").attr("id", function(t) { return n + "___num_top_left" }).attr("x", e(c[1] - .98 * (c[1] - c[0]))).attr("y", A(l[1] - .1 * (l[1] - l[0]))).style("opacity", .4).style("font-size", "2vw").style("fill", "#0A58A2").text(a)
            }(e, A, r, u, a)) : c == a + "__diagonals" ? (b(t, e, A, r, s, a, u), f(t, e, A, r, 0, i, o, s, u, a, d, l)) : c == a + "__clusters" ? (b(t, e, A, r, s, a, u), y(t, e, A, r, 0, 0, 0, s, u, a, d, l)) : b(t, e, A, r, s, a, u)
    }

    function b(t, e, A, r, n, i, o) {
        const s = [];
        let l;
        a(t, n).forEach(function(t) { s.push([t.x, t.y]) });
        let u = A.domain(),
            h = r.domain();
        "bottom-right" == o ? ((l = c.getParetoFrontier(s, { optimize: "bottomRight" })).unshift([l[0][0], h[1]]), l.push([u[0], l[l.length - 1][1]])) : "top-right" == o && ((l = c.getParetoFrontier(s, { optimize: "topRight" })).unshift([l[0][0], h[0]]), l.push([u[0], l[l.length - 1][1]]));
        for (var f = 0; f < l.length - 1; f++) e.append("line").attr("clip-path", "url(#clip)").attr("x1", A(l[f][0])).attr("y1", r(l[f][1])).attr("x2", A(l[f + 1][0])).attr("y2", r(l[f + 1][1])).attr("id", function(t) { return i + "___pareto" }).attr("stroke", "grey").attr("stroke-width", 2).style("stroke-dasharray", "20, 5").style("opacity", .4)
    }

    function C(t, e, A, r, n, i, o, s, a, c, l, u, h) {
        let f = t.split("___")[1];
        if (A.selectAll("#" + c + "___x_quartile").remove(), A.selectAll("#" + c + "___y_quartile").remove(), A.selectAll("#" + c + "___diag_quartile_0").remove(), A.selectAll("#" + c + "___diag_quartile_1").remove(), A.selectAll("#" + c + "___diag_quartile_2").remove(), A.selectAll("#" + c + "___num_bottom_right").remove(), A.selectAll("#" + c + "___num_top_right").remove(), A.selectAll("#" + c + "___num_bottom_left").remove(), A.selectAll("#" + c + "___num_top_left").remove(), A.selectAll("#" + c + "___pareto").remove(), A.selectAll("." + c + "___diag_num").remove(), A.selectAll("." + c + "___cluster_num").remove(), A.selectAll("." + c + "___clust_lines").remove(), A.selectAll("." + c + "___clust_polygons").remove(), A.selectAll("." + c + "___better_annotation").remove(), 0 == d3.select("#" + t).style("opacity")) {
            d3.select("#" + t).style("opacity", 1), d3.select("#" + c + "___top" + f).style("opacity", 1), d3.select("#" + c + "___bottom" + f).style("opacity", 1), d3.select("#" + c + "___line" + f).style("opacity", 1), d3.select("#" + c + "___lineX" + f).style("opacity", 1), d3.select("#" + c + "___right" + f).style("opacity", 1), d3.select("#" + c + "___left" + f).style("opacity", 1);
            let d = $.inArray(f.replace(/_/g, "-"), a);
            a.splice(d, 1), v(e, A, r, n, i, o, s, a, c, l, h, S[c]), d3.select(u).style("opacity", 1), d3.select("text#" + c + "___" + f).style("opacity", 1)
        } else d3.select("#" + t).style("opacity", 0), d3.select("#" + c + "___top" + f).style("opacity", 0), d3.select("#" + c + "___bottom" + f).style("opacity", 0), d3.select("#" + c + "___line" + f).style("opacity", 0), d3.select("#" + c + "___lineX" + f).style("opacity", 0), d3.select("#" + c + "___right" + f).style("opacity", 0), d3.select("#" + c + "___left" + f).style("opacity", 0), a.push(f.replace(/_/g, "-")), v(e, A, r, n, i, o, s, a, c, l, h, S[c]), d3.select(u).style("opacity", .2), d3.select("text#" + c + "___" + f).style("opacity", .2)
    }

    function Q(t, e, A, r, n, i, o, s) {
        let a = { top: Math.round(.0318 * $(window).height()), right: Math.round(.0261 * $(window).width()), bottom: function(t) { if (t.length % 5 == 0) return 165 + 20 * Math.trunc(t.length / 5); if (t.lenght % 5 != 0) return 165 + 20 * (Math.trunc(t.length / 5) + 1) }(t), left: Math.round(.0373 * $(window).width()) },
            c = Math.round(.6818 * $(window).width()) - a.left - a.right,
            l = Math.round(.87 * $(window).height()) - a.top - a.bottom,
            u = d3.min(t, function(t) { return t.x }),
            h = d3.max(t, function(t) { return t.x }),
            f = d3.min(t, function(t) { return t.y }),
            d = d3.max(t, function(t) { return t.y });
        var p = F(t, "x") / (h - u);
        var g = "auto" == s ? u - p * (h - u) : 0;
        let B = d3.scaleLinear().range([0, c]).domain([g, h + p * (h - u)]).nice();
        p = F(t, "y") / (d - f);
        var w = "auto" == s ? f - p * (d - f) : 0;
        let m = d3.scaleLinear().range([l, 0]).domain([w, d + p * (d - f)]).nice(),
            y = d3.axisBottom(B).ticks(12),
            b = d3.axisLeft(m).ticks(12 * l / c),
            Q = (d3.line().x(function(t) { return B(t.x) }).y(function(t) { return m(t.y) }), d3.select("body").append("div").attr("class", "benchmark_tooltip").style("opacity", 0));
        d3.select("#" + e + "flex-container").append("div").attr("id", e + "_svg_container");
        let U = d3.select("#" + e + "_svg_container").append("svg").attr("class", "benchmarkingSVG").attr("viewBox", "0 0 " + (c + a.left + a.right) + " " + (l + a.top + a.bottom)).attr("preserveAspectRatio", "xMinYMin meet").attr("id", "svg_" + e).attr("width", c + a.left + a.right).attr("height", l + a.top + a.bottom).append("g").attr("transform", "translate(" + a.left + "," + a.top + ")");
        if (U.append("g").append("rect").attr("width", c).attr("height", l).attr("class", "plot-bg").attr("fill", "#F8F8F8").attr("stroke", "black"), U.append("g").attr("class", "axis axis--x").attr("transform", "translate(0," + l + ")").call(y), U.append("g").attr("class", "axis axis--y").call(b), 1 == r.startsWith("OEBM")) var E = i[r];
        else E = r;
        if (1 == n.startsWith("OEBM")) var N = i[n];
        else N = n;
        U.append("text").attr("transform", "translate(" + c / 2 + " ," + (l + a.top + Math.round(.0347 * $(window).height())) + ")").style("text-anchor", "middle").style("font-weight", "bold").style("font-size", ".95vw").text(E), U.append("text").attr("transform", "rotate(-90)").attr("y", 0 - a.left).attr("x", 0 - l / 2).attr("dy", "1em").style("text-anchor", "middle").style("font-weight", "bold").style("font-size", ".95vw").text(N), U.append("line").attr("x1", 0).attr("y1", l + a.top + Math.round(.0347 * $(window).height())).attr("x2", Math.round(.02083 * $(window).width())).attr("y2", l + a.top + Math.round(.0347 * $(window).height())).attr("stroke", "grey").attr("stroke-width", 2).style("stroke-dasharray", "15, 5").style("opacity", .7), U.append("text").attr("transform", "translate(" + Math.round(.05208 * $(window).width()) + " ," + (l + a.top + Math.round(.0347 * $(window).height()) + 5) + ")").style("text-anchor", "middle").style("font-size", ".75vw").text("Pareto frontier");
        var L = d3.axisBottom().ticks(12).tickFormat("").tickSize(l).scale(B),
            x = d3.axisLeft().ticks(12 * l / c).tickFormat("").tickSize(-c).scale(m);
        U.append("g").attr("class", "bench_grid").attr("stroke-opacity", .1).attr("stroke-dasharray", 7, 5).call(L), U.append("g").attr("class", "bench_grid").attr("stroke-opacity", .1).attr("stroke-dasharray", 7, 5).call(x), 0 == window.location.href.toLocaleLowerCase().includes("openebench") && function(t, e) { t.append("a").attr("xlink:href", "https://openebench.bsc.es").attr("target", "_blank").append("rect").attr("transform", "translate(" + Math.round(.6 * $(window).width()) + " ," + (e.top - Math.round(.057 * $(window).height())) + ")").attr("height", Math.round(.0235 * $(window).height())).attr("width", Math.round(.03 * $(window).width())).style("fill", "white").attr("rx", 10).attr("ry", 10), t.append("svg:image").attr("transform", "translate(" + Math.round(.6 * $(window).width()) + " ," + (e.top - Math.round(.063 * $(window).height())) + ")").attr("width", Math.round(.029 * $(window).width())).attr("height", Math.round(.026 * $(window).height())).attr("xlink:href", "images/logo.png").style("pointer-events", "none") }(U, a);
        let _ = [],
            H = d3.scaleOrdinal(d3.schemeSet1.concat(d3.schemeSet3).concat(d3.schemeSet2));
        var S = {};
        t.forEach(function(t) { S[t.toolname] = H(t.toolname) }),
            function(t, e, A, r, n, i, o, s, a, c, l) {
                t.append("g").selectAll("line").data(e).enter().append("line").attr("class", "error-line").attr("stroke", "black").style("stroke-dasharray", "2, 2").attr("id", function(t) { return s + "___line" + t.toolname.replace(/[\. ()/-]/g, "_") }).attr("x1", function(t) { return A(t.x) }).attr("y1", function(t) { return r(t.y + t.e_y) }).attr("x2", function(t) { return A(t.x) }).attr("y2", function(t) { return r(t.y - t.e_y) }), t.append("g").selectAll("line").data(e).enter().append("line").attr("class", "error-line").attr("stroke", "black").style("stroke-dasharray", "2, 2").attr("id", function(t) { return s + "___lineX" + t.toolname.replace(/[\. ()/-]/g, "_") }).attr("x1", function(t) { return A(t.x - t.e_x) }).attr("y1", function(t) { return r(t.y) }).attr("x2", function(t) { return A(t.x + t.e_x) }).attr("y2", function(t) { return r(t.y) }), t.append("g").selectAll("line").data(e).enter().append("line").attr("id", function(t) { return s + "___top" + t.toolname.replace(/[\. ()/-]/g, "_") }).attr("class", "error-cap").attr("stroke", "black").style("stroke-width", "1px").attr("x1", function(t) { return A(t.x) - 4 }).attr("y1", function(t) { return r(t.y + t.e_y) }).attr("x2", function(t) { return A(t.x) + 4 }).attr("y2", function(t) { return r(t.y + t.e_y) }), t.append("g").selectAll("line").data(e).enter().append("line").attr("id", function(t) { return s + "___bottom" + t.toolname.replace(/[\. ()/-]/g, "_") }).attr("class", "error-cap").attr("stroke", "black").style("stroke-width", "1px").attr("x1", function(t) { return A(t.x) - 4 }).attr("y1", function(t) { return r(t.y - t.e_y) }).attr("x2", function(t) { return A(t.x) + 4 }).attr("y2", function(t) { return r(t.y - t.e_y) }), t.append("g").selectAll("line").data(e).enter().append("line").attr("class", "error-cap").attr("stroke", "black").style("stroke-width", "1px").attr("id", function(t) { return s + "___right" + t.toolname.replace(/[\. ()/-]/g, "_") }).attr("x1", function(t) { return A(t.x + t.e_x) }).attr("y1", function(t) { return r(t.y) - 4 }).attr("x2", function(t) { return A(t.x + t.e_x) }).attr("y2", function(t) { return r(t.y) + 4 }), t.append("g").selectAll("line").data(e).enter().append("line").attr("class", "error-cap").attr("stroke", "black").style("stroke-width", "1px").attr("id", function(t) { return s + "___left" + t.toolname.replace(/[\. ()/-]/g, "_") }).attr("x1", function(t) { return A(t.x - t.e_x) }).attr("y1", function(t) { return r(t.y) - 4 }).attr("x2", function(t) { return A(t.x - t.e_x) }).attr("y2", function(t) { return r(t.y) + 4 });
                let u = d3.symbol(),
                    h = d3.format(","),
                    f = d3.format(".4f");
                t.selectAll(".dots").data(e).enter().append("path").attr("class", "benchmark_path").attr("d", u.type(function() { return d3.symbolSquare })).attr("id", function(t) { return s + "___" + t.toolname.replace(/[\. ()/-]/g, "_") }).attr("class", "line").attr("transform", function(t) { return "translate(" + A(t.x) + "," + r(t.y) + ")" }).attr("r", 6).style("fill", function(t) { return o(i(t)) }).on("mouseover", function(t) {
                    let e = s + "___" + t.toolname.replace(/[\. ()/-]/g, "_");
                    if (1 == a.startsWith("OEBM")) var A = l[a];
                    else A = a;
                    if (1 == c.startsWith("OEBM")) var r = l[c];
                    else r = c;
                    1 == d3.select("#" + e).style("opacity") && (n.transition().duration(100).style("display", "block").style("opacity", .9), n.html("<b>" + t.toolname + "</b><br/>" + A + ": " + h(t.x) + "<br/>" + r + ": " + f(t.y)).style("left", d3.event.pageX + "px").style("top", d3.event.pageY + "px"))
                }).on("mouseout", function(t) { n.transition().duration(1500).style("display", "none").style("opacity", 0) })
            }(U, t, B, m, Q, function(t) { return t.toolname }, H, e, r, n, i),
            function(t, e, A, r, n, i, o, s, a, c, l, u, h) {
                let f = e.selectAll(".legend").data(c).enter().append("g").attr("class", "legend").attr("transform", function(t, e) { return "translate(" + (-i + e % 4 * Math.round(.16 * $(window).width())) + "," + (o + Math.round(.0862962 * $(window).height()) + Math.floor(e / 4) * Math.round(.0251481 * $(window).height())) + ")" });
                f.append("rect").attr("x", i + Math.round(.010227 * $(window).width())).attr("width", Math.round(.010227 * $(window).width())).attr("height", Math.round(.020833 * $(window).height())).attr("id", function(t) { return l + "___leg_rect" + t.replace(/[\. ()/-]/g, "_") }).attr("class", "benchmark_legend_rect").style("fill", a).on("click", function(a) {
                    let c = d3.select("text#" + l + "___" + a.replace(/[\. ()/-]/g, "_"))._groups[0][0].id;
                    if (t.length - s.length - 1 >= 4) C(c, t, e, A, r, n, i, o, s, l, u, this, h);
                    else if (t.length - s.length - 1 < 4 && 0 == d3.select("#" + c).style("opacity")) C(c, t, e, A, r, n, i, o, s, l, u, this, h);
                    else {
                        $(".removal_alert").remove();
                        var f = $('<div class="removal_alert">                                  <span class="closebtn" onclick="(this.parentNode.remove());">&times;</span>                                  At least four participants are required for the benchmark!!                                </div>');
                        $("#" + l).append(f), setTimeout(function() { $(".removal_alert").length > 0 && $(".removal_alert").remove() }, 5e3)
                    }
                }).on("mouseover", function(t) {
                    let e = d3.select("text#" + l + "___" + t.replace(/[\. ()/-]/g, "_"))._groups[0][0].id,
                        A = e.split("___")[1];
                    0 == d3.select("#" + e).style("opacity") ? (d3.select(this).style("opacity", 1), d3.select("text#" + l + "___" + A).style("opacity", 1)) : (d3.select(this).style("opacity", .2), d3.select("text#" + l + "___" + A).style("opacity", .2))
                }).on("mouseout", function(t) {
                    let e = d3.select("text#" + l + "___" + t.replace(/[\. ()/-]/g, "_"))._groups[0][0].id,
                        A = e.split("___")[1];
                    0 == d3.select("#" + e).style("opacity") ? (d3.select(this).style("opacity", .2), d3.select("text#" + l + "___" + A).style("opacity", .2)) : (d3.select(this).style("opacity", 1), d3.select("text#" + l + "___" + A).style("opacity", 1))
                }), f.append("text").attr("x", i + Math.round(.022727 * $(window).width())).attr("y", Math.round(.01041 * $(window).height())).attr("id", function(t) { return l + "___" + t.replace(/[\. ()/-]/g, "_") }).attr("dy", ".35em").style("text-anchor", "start").style("font-size", "1vw").text(function(t) { return t })
            }(t, U, B, m, Q, c, l, _, H, H.domain(), e, A, S), v(t, U, B, m, Q, c, l, _, e, A, S, o[e])
    }

    function F(t, e) { var A = 0; return t.forEach(function(t) { "y" == e ? A += t.e_y : "x" == e && (A += t.e_x) }), A / t.length }
    var U = A(4),
        E = A.n(U),
        N = A(3),
        L = A(2),
        x = A.n(L);
    A.d(e, "load_scatter_visualization", function() { return I }), A.d(e, "onQuartileChange", function() { return R }), A.d(e, "better", function() { return S });
    let _ = {},
        H = {},
        S = {};

    function I() {
        let t, e, A, r = document.getElementsByClassName("benchmarkingChart_scatter"),
            n = 0;
        for (A of(n = 0, r)) {
            let r = "https://" + ($(A).data("mode") ? "dev-openebench" : "openebench") + ".bsc.es/";
            if (t = ((e = A.getAttribute("data-id")) + n).replace(":", "_"), A.id = t, s(t), T(r + "sciapi/graphql", 'query getDatasets($dataset_id: String!){\n                          getDatasets(datasetFilters:{id: $dataset_id, type:"aggregation"}) {\n                              _id\n                              community_ids\n                              datalink{\n                                  inline_data\n                              }\n                          }\n                        }', e, t), "true" == A.getAttribute("toTable")) {
                var i = $('<br><br><table id="' + (t + "_table") + '" data-id="' + e + '" class="benchmarkingTable_scatter"></table>');
                $("#" + t + "flex-container").append(i)
            }
            n++
        }
    }

    function T(t, e, A, r) {
        try {
            const n = o({ uri: t });
            n({ query: e, variables: { dataset_id: A } }).then(t => {
                let e = t.data.getDatasets;
                if (0 == e.length) {
                    document.getElementById(r + "_dropdown_list").remove();
                    var i = document.createElement("td");
                    i.id = "no_benchmark_data";
                    var o = document.createTextNode("No data available for the selected challenge: " + A);
                    i.appendChild(o), document.getElementById(r).appendChild(i)
                } else {
                    (() => n({ query: "query getMetrics{\n                        getMetrics {\n                          _id\n                          title\n                          representation_hints\n                        }\n                    }" }))().then(t => {
                        let A = {};
                        t.data.getMetrics.forEach(function(t) { A[t._id] = t.title }), "bottom-right" == e[0].datalink.inline_data.visualization.optimization ? S[r] = "bottom-right" : S[r] = "top-right";
                        let n = e[0].datalink.inline_data.visualization.x_axis,
                            i = e[0].datalink.inline_data.visualization.y_axis;
                        document.getElementById(r).setAttribute("metric_x", n), document.getElementById(r).setAttribute("metric_y", i),
                            function(t, e, A, r, n, i) {
                                try {
                                    let s = [];
                                    t[0].datalink.inline_data.challenge_participants.forEach(function(t) {
                                        let e = t.tool_id;
                                        var A;
                                        A = e.length > 22 ? e.substring(0, 22) : e;
                                        let r = {};
                                        r.toolname = A, r.x = t.metric_x, r.y = t.metric_y, r.e_y = t.stderr_y ? parseFloat(t.stderr_y) : 0, r.e_x = t.stderr_x ? parseFloat(t.stderr_x) : 0, s.push(r)
                                    }), s.sort(function(t, e) {
                                        let A = t.toolname.toLowerCase(),
                                            r = e.toolname.toLowerCase();
                                        return A < r ? -1 : A > r ? 1 : 0
                                    }), _[e] = s, H[e] = n;
                                    var o = document.getElementById(e + "_dropdown_list");
                                    let a = o.options[o.selectedIndex].id;
                                    ! function(t, e, A, r) {
                                        d3.select("#" + t + "_buttons_container").append("div").attr("class", "toggle_div").append("button").attr("class", "toggle_axis_button").attr("id", t + "axis_button").attr("name", "optimal view").text("optimal view").on("click", function(n) {
                                            if ("optimal view" == this.name) {
                                                d3.select(this).text("reset view"), this.name = "reset view";
                                                let n = document.getElementById(t + "_dropdown_list");
                                                R(n.options[n.selectedIndex].id, e, A, r)
                                            } else {
                                                d3.select(this).text("optimal view"), this.name = "optimal view";
                                                let n = document.getElementById(t + "_dropdown_list");
                                                R(n.options[n.selectedIndex].id, e, A, r)
                                            }
                                        });
                                        let n = d3.select("#" + t + "_buttons_container").append("div").attr("class", "download_div").append("form").append("select").attr("class", "download_button").attr("id", t + "_download_button").on("change", function(e) {
                                            ! function(t, e) {
                                                var A;
                                                A = $("#" + e + "_table").is(":empty") ? e + "_svg_container" : e + "flex-container";
                                                let r = [window.pageXOffset, window.pageYOffset];
                                                window.scrollTo(0, 0), "svg" == t ? function(t) {
                                                    var e = "svg_" + t,
                                                        A = "benchmarking_chart_" + t;
                                                    x.a.save(d3.select("#" + e).node(), { filename: A })
                                                }(e) : E()(document.querySelector("#" + A)).then(function(A) {
                                                    "pdf" == t ? function(t, e, A) {
                                                        var r = new N({ orientation: "landscape", unit: "mm" });
                                                        let n, i = r.internal.pageSize.getHeight();
                                                        n = $("#" + t + "_table").is(":empty") ? r.internal.pageSize.getWidth() : r.internal.pageSize.getWidth() + -.02 * r.internal.pageSize.getWidth();
                                                        r.addImage(e, "PNG", 5, 5, n, i), r.save(A)
                                                    }(e, A.toDataURL(), "benchmarking_chart_" + e + ".pdf") : "png" == t && function(t, e) { var A = document.createElement("a"); "string" == typeof A.download ? (A.href = t, A.download = e, document.body.appendChild(A), A.click(), document.body.removeChild(A)) : window.open(t) }(A.toDataURL(), "benchmarking_chart_" + e + ".png")
                                                });
                                                window.scrollTo(r[0], r[1])
                                            }(this.options[this.selectedIndex].id, t);
                                            let A = document.getElementById(t + "_download_button");
                                            A.value = "Download"
                                        }).append("optgroup").attr("label", "Select a format: ");
                                        n.append("option").attr("value", "Download").attr("disabled", "selected").text("Download").attr("style", "display:none"), n.append("option").attr("class", "selection_option").attr("id", "png").attr("title", "Download plot as PNG").attr("data-toggle", "list_tooltip").attr("data-container", "#tooltip_container").text("PNG"), n.append("option").attr("class", "selection_option").attr("id", "pdf").attr("title", "Download plot as PDF").attr("data-toggle", "list_tooltip").attr("data-container", "#tooltip_container").text("PDF"), n.append("option").attr("class", "selection_option").attr("id", "svg").attr("title", "Download plot as SVG").attr("data-toggle", "list_tooltip").attr("data-container", "#tooltip_container").text("SVG (only plot)")
                                    }(e, A, r, i), Q(s, e, a, A, r, n, i, 0)
                                } catch (t) { console.log(`Invalid Url Error: ${t.stack} `) }
                            }(e, r, n, i, A, S)
                    })
                }
            })
        } catch (t) { console.log(`Invalid Url Error: ${t.stack} `) }
    }

    function R(t, e, A, r, n = "auto") {
        var i = t.split("__")[0];
        d3.select("#svg_" + i).remove();
        let o = t;
        n = "optimal view" == document.getElementById(i + "axis_button").name ? 0 : "auto", Q(_[i], i, o, e, A, H[i], r, n)
    }
    I()
}, function(t, e) {
    var A;
    A = function() { return this }();
    try { A = A || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (A = window) }
    t.exports = A
}, function(t, e) {
    ! function(t) {
        "use strict";
        if (!t.fetch) {
            var e = { searchParams: "URLSearchParams" in t, iterable: "Symbol" in t && "iterator" in Symbol, blob: "FileReader" in t && "Blob" in t && function() { try { return new Blob, !0 } catch (t) { return !1 } }(), formData: "FormData" in t, arrayBuffer: "ArrayBuffer" in t };
            if (e.arrayBuffer) var A = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                r = function(t) { return t && DataView.prototype.isPrototypeOf(t) },
                n = ArrayBuffer.isView || function(t) { return t && A.indexOf(Object.prototype.toString.call(t)) > -1 };
            l.prototype.append = function(t, e) {
                t = s(t), e = a(e);
                var A = this.map[t];
                this.map[t] = A ? A + "," + e : e
            }, l.prototype.delete = function(t) { delete this.map[s(t)] }, l.prototype.get = function(t) { return t = s(t), this.has(t) ? this.map[t] : null }, l.prototype.has = function(t) { return this.map.hasOwnProperty(s(t)) }, l.prototype.set = function(t, e) { this.map[s(t)] = a(e) }, l.prototype.forEach = function(t, e) { for (var A in this.map) this.map.hasOwnProperty(A) && t.call(e, this.map[A], A, this) }, l.prototype.keys = function() { var t = []; return this.forEach(function(e, A) { t.push(A) }), c(t) }, l.prototype.values = function() { var t = []; return this.forEach(function(e) { t.push(e) }), c(t) }, l.prototype.entries = function() { var t = []; return this.forEach(function(e, A) { t.push([A, e]) }), c(t) }, e.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
            var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            g.prototype.clone = function() { return new g(this, { body: this._bodyInit }) }, p.call(g.prototype), p.call(w.prototype), w.prototype.clone = function() { return new w(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new l(this.headers), url: this.url }) }, w.error = function() { var t = new w(null, { status: 0, statusText: "" }); return t.type = "error", t };
            var o = [301, 302, 303, 307, 308];
            w.redirect = function(t, e) { if (-1 === o.indexOf(e)) throw new RangeError("Invalid status code"); return new w(null, { status: e, headers: { location: t } }) }, t.Headers = l, t.Request = g, t.Response = w, t.fetch = function(t, A) {
                return new Promise(function(r, n) {
                    var i = new g(t, A),
                        o = new XMLHttpRequest;
                    o.onload = function() {
                        var t = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: function(t) {
                                var e = new l;
                                return t.split(/\r?\n/).forEach(function(t) {
                                    var A = t.split(":"),
                                        r = A.shift().trim();
                                    if (r) {
                                        var n = A.join(":").trim();
                                        e.append(r, n)
                                    }
                                }), e
                            }(o.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL" in o ? o.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in o ? o.response : o.responseText;
                        r(new w(e, t))
                    }, o.onerror = function() { n(new TypeError("Network request failed")) }, o.ontimeout = function() { n(new TypeError("Network request failed")) }, o.open(i.method, i.url, !0), "include" === i.credentials && (o.withCredentials = !0), "responseType" in o && e.blob && (o.responseType = "blob"), i.headers.forEach(function(t, e) { o.setRequestHeader(e, t) }), o.send(void 0 === i._bodyInit ? null : i._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }

        function s(t) { if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name"); return t.toLowerCase() }

        function a(t) { return "string" != typeof t && (t = String(t)), t }

        function c(t) { var A = { next: function() { var e = t.shift(); return { done: void 0 === e, value: e } } }; return e.iterable && (A[Symbol.iterator] = function() { return A }), A }

        function l(t) { this.map = {}, t instanceof l ? t.forEach(function(t, e) { this.append(e, t) }, this) : Array.isArray(t) ? t.forEach(function(t) { this.append(t[0], t[1]) }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) { this.append(e, t[e]) }, this) }

        function u(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function h(t) { return new Promise(function(e, A) { t.onload = function() { e(t.result) }, t.onerror = function() { A(t.error) } }) }

        function f(t) {
            var e = new FileReader,
                A = h(e);
            return e.readAsArrayBuffer(t), A
        }

        function d(t) { if (t.slice) return t.slice(0); var e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer }

        function p() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (e.arrayBuffer && e.blob && r(t)) this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !n(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = d(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, e.blob && (this.blob = function() { var t = u(this); if (t) return t; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(f) }), this.text = function() {
                var t = u(this);
                if (t) return t;
                if (this._bodyBlob) return function(t) {
                    var e = new FileReader,
                        A = h(e);
                    return e.readAsText(t), A
                }(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) { for (var e = new Uint8Array(t), A = new Array(e.length), r = 0; r < e.length; r++) A[r] = String.fromCharCode(e[r]); return A.join("") }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, e.formData && (this.formData = function() { return this.text().then(B) }), this.json = function() { return this.text().then(JSON.parse) }, this
        }

        function g(t, e) {
            var A = (e = e || {}).body;
            if (t instanceof g) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new l(t.headers)), this.method = t.method, this.mode = t.mode, A || null == t._bodyInit || (A = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new l(e.headers)), this.method = function(t) { var e = t.toUpperCase(); return i.indexOf(e) > -1 ? e : t }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && A) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(A)
        }

        function B(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var A = t.split("="),
                        r = A.shift().replace(/\+/g, " "),
                        n = A.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(n))
                }
            }), e
        }

        function w(t, e) { e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new l(e.headers), this.url = e.url || "", this._initBody(t) }
    }("undefined" != typeof self ? self : this)
}, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var A = e.protocol + "//" + e.host,
            r = A + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) { var n, i = e.trim().replace(/^"(.*)"$/, function(t, e) { return e }).replace(/^'(.*)'$/, function(t, e) { return e }); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (n = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? A + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")") })
    }
}, function(t, e, A) {
    var r = {},
        n = function(t) { var e; return function() { return void 0 === e && (e = t.apply(this, arguments)), e } }(function() { return window && document && document.all && !window.atob }),
        i = function(t) {
            var e = {};
            return function(t) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var A = function(t) { return document.querySelector(t) }.call(this, t);
                    if (window.HTMLIFrameElement && A instanceof window.HTMLIFrameElement) try { A = A.contentDocument.head } catch (t) { A = null }
                    e[t] = A
                }
                return e[t]
            }
        }(),
        o = null,
        s = 0,
        a = [],
        c = A(8);

    function l(t, e) {
        for (var A = 0; A < t.length; A++) {
            var n = t[A],
                i = r[n.id];
            if (i) { i.refs++; for (var o = 0; o < i.parts.length; o++) i.parts[o](n.parts[o]); for (; o < n.parts.length; o++) i.parts.push(g(n.parts[o], e)) } else {
                var s = [];
                for (o = 0; o < n.parts.length; o++) s.push(g(n.parts[o], e));
                r[n.id] = { id: n.id, refs: 1, parts: s }
            }
        }
    }

    function u(t, e) {
        for (var A = [], r = {}, n = 0; n < t.length; n++) {
            var i = t[n],
                o = e.base ? i[0] + e.base : i[0],
                s = { css: i[1], media: i[2], sourceMap: i[3] };
            r[o] ? r[o].parts.push(s) : A.push(r[o] = { id: o, parts: [s] })
        }
        return A
    }

    function h(t, e) {
        var A = i(t.insertInto);
        if (!A) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = a[a.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? A.insertBefore(e, r.nextSibling) : A.appendChild(e) : A.insertBefore(e, A.firstChild), a.push(e);
        else if ("bottom" === t.insertAt) A.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var n = i(t.insertInto + " " + t.insertAt.before);
            A.insertBefore(e, n)
        }
    }

    function f(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = a.indexOf(t);
        e >= 0 && a.splice(e, 1)
    }

    function d(t) { var e = document.createElement("style"); return void 0 === t.attrs.type && (t.attrs.type = "text/css"), p(e, t.attrs), h(t, e), e }

    function p(t, e) { Object.keys(e).forEach(function(A) { t.setAttribute(A, e[A]) }) }

    function g(t, e) {
        var A, r, n, i;
        if (e.transform && t.css) {
            if (!(i = e.transform(t.css))) return function() {};
            t.css = i
        }
        if (e.singleton) {
            var a = s++;
            A = o || (o = d(e)), r = w.bind(null, A, a, !1), n = w.bind(null, A, a, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (A = function(t) { var e = document.createElement("link"); return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", p(e, t.attrs), h(t, e), e }(e), r = function(t, e, A) {
            var r = A.css,
                n = A.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && n;
            (e.convertToAbsoluteUrls || i) && (r = c(r));
            n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
            var o = new Blob([r], { type: "text/css" }),
                s = t.href;
            t.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
        }.bind(null, A, e), n = function() { f(A), A.href && URL.revokeObjectURL(A.href) }) : (A = d(e), r = function(t, e) {
            var A = e.css,
                r = e.media;
            r && t.setAttribute("media", r);
            if (t.styleSheet) t.styleSheet.cssText = A;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(A))
            }
        }.bind(null, A), n = function() { f(A) });
        return r(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else n()
            }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = n()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var A = u(t, e);
        return l(A, e),
            function(t) {
                for (var n = [], i = 0; i < A.length; i++) {
                    var o = A[i];
                    (s = r[o.id]).refs--, n.push(s)
                }
                t && l(u(t, e), e);
                for (i = 0; i < n.length; i++) {
                    var s;
                    if (0 === (s = n[i]).refs) {
                        for (var a = 0; a < s.parts.length; a++) s.parts[a]();
                        delete r[s.id]
                    }
                }
            }
    };
    var B = function() { var t = []; return function(e, A) { return t[e] = A, t.filter(Boolean).join("\n") } }();

    function w(t, e, A, r) {
        var n = A ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = B(e, n);
        else {
            var i = document.createTextNode(n),
                o = t.childNodes;
            o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(i, o[e]) : t.appendChild(i)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var A = function(t, e) {
                    var A = t[1] || "",
                        r = t[3];
                    if (!r) return A;
                    if (e && "function" == typeof btoa) {
                        var n = function(t) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */" }(r),
                            i = r.sources.map(function(t) { return "/*# sourceURL=" + r.sourceRoot + t + " */" });
                        return [A].concat(i).concat([n]).join("\n")
                    }
                    return [A].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + A + "}" : A
            }).join("")
        }, e.i = function(t, A) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, n = 0; n < this.length; n++) { var i = this[n][0]; "number" == typeof i && (r[i] = !0) }
            for (n = 0; n < t.length; n++) { var o = t[n]; "number" == typeof o[0] && r[o[0]] || (A && !o[2] ? o[2] = A : A && (o[2] = "(" + o[2] + ") and (" + A + ")"), e.push(o)) }
        }, e
    }
}, function(t, e, A) {
    (t.exports = A(10)(!1)).push([t.i, '.error-line {\n    stroke: black;\n    stroke-dasharray: 2, 2;\n}\n\n.error-cap {\n    stroke: black;\n    stroke-width: 1px;\n}\n\ndiv.benchmark_tooltip {\n    background-color: #fff;\n    padding: 7px;\n    text-shadow: #f5f5f5 0 1px 0;\n    font: 15px Helvetica Neue;\n    border: 4.5px solid;\n    border-color: #0a58a2;\n    border-radius: 3px;\n    opacity: 0.95;\n    position: absolute;\n    box-shadow: rgba(0, 0, 0, 0.3) 0 10px 15px;\n    z-index: 3;\n}\n\n\n/* .benchmark_tooltip:after {\n      content: " ";\n      position: absolute;\n      top: 50%;\n      right: 100%;\n      margin-top: -10px;\n      border-width: 10px;\n      border-style: solid;\n      border-color: transparent transparent transparent transparent;\n      \n  } */\n\n.plot-bg {\n    fill: #f8f8f8;\n    stroke: black;\n}\n\n.axis path,\n.axis line {\n    fill: none;\n    stroke: grey;\n    stroke-width: 1;\n    shape-rendering: crispEdges;\n}\n\n.bench_grid {\n    stroke-opacity: 0.1;\n    stroke-dasharray: 7, 5;\n}\n\n.classificators_list {\n    order: 1;\n    background-color: #0a58a2;\n    border-radius: 8px;\n    color: #fff;\n    font-size: 1vw;\n    padding-left: 25px;\n    padding-right: 25px;\n    text-align: center;\n    width: 20vw;\n    float: left;\n}\n\n.classificators_list:hover {\n    background-color: #b3cde0;\n}\n\n.benchmarkingTable_scatter td {\n    border: 2px solid black;\n    border-collapse: collapse;\n    text-align: center;\n    font-size: 0.8vw;\n}\n\n.benchmarkingTable_scatter {\n    order: 2;\n    width: 18vw;\n    border-collapse: collapse;\n    background-color: #f0f0f0;\n    border: 5px solid black;\n    /* float: right; */\n    margin-left: 1vw;\n}\n\n.benchmark_legend_rect {\n    cursor: pointer;\n}\n\n.benchmarkingChart_scatter {\n    width: inherit;\n}\n\n.flex-container {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n}\n\n.buttons_container {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n}\n\n.benchmarkingSVG {\n    order: 1;\n    width: 60vw;\n}\n\n.axis--x {\n    font-size: 12px;\n}\n\n.axis--y {\n    font-size: 12px;\n}\n\n.removal_alert {\n    padding: 10px;\n    background-color: #ffcccc;\n    color: #d10000;\n}\n\n.closebtn {\n    margin-left: 15px;\n    color: #d10000;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 20px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.closebtn:hover {\n    color: white;\n}\n\n.OEB_text_link {\n    cursor: pointer;\n    fill: #0000ee;\n}\n\n.toggle_axis_button {\n    background-color: #0a58a2;\n    text-align: center;\n    border-radius: 8px;\n    color: #fff;\n    cursor: pointer;\n    height: 1.5vw;\n}\n\n.download_button {\n    background-color: #0a58a2;\n    border-radius: 8px;\n    color: #fff;\n    font-size: 1vw;\n    text-align: center;\n    width: 10vw;\n}\n\n.download_div {\n    order: 3;\n    padding-left: .5vw;\n}\n\n.toggle_div {\n    order: 2;\n    padding-left: .5vw;\n}', ""])
}, function(t, e, A) {
    var r = A(11);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]);
    var n = { hmr: !0, transform: void 0, insertInto: void 0 };
    A(9)(r, n);
    r.locals && (t.exports = r.locals)
}]));
