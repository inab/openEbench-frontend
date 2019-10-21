!(function(t, e) {
    for (var n in e) t[n] = e[n];
})(
    this,
    (function(t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function(t, e, r) {
                n.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function(t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (n.t = function(t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && 'string' != typeof t)
                )
                    for (var o in t)
                        n.d(
                            r,
                            o,
                            function(e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function(t) {
                var e =
                    t && t.__esModule
                        ? function() {
                              return t.default;
                          }
                        : function() {
                              return t;
                          };
                return n.d(e, 'a', e), e;
            }),
            (n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ''),
            n((n.s = 3))
        );
    })([
        function(t, e, n) {
            'use strict';
            function r(t, e) {
                var n = this;
                (this.location = o(t)),
                    (this.label = o(e)),
                    (this.updateLocation = function(t) {
                        var e = t.filter(function(t) {
                            return t.label() == n.label();
                        });
                        e.length > 0 &&
                            n.location(
                                (function(t) {
                                    var e = t[0].location().map(function() {
                                        return 0;
                                    });
                                    return t
                                        .map(function(t) {
                                            return t.location();
                                        })
                                        .reduce(function(t, e) {
                                            return (function(t, e) {
                                                return t.map(function(t, n) {
                                                    return t + e[n];
                                                });
                                            })(t, e);
                                        }, e)
                                        .map(function(e) {
                                            return e / t.length;
                                        });
                                })(e)
                            );
                    });
            }
            function o(t, e) {
                var n = t,
                    r =
                        e ||
                        function(t) {
                            return !0;
                        };
                return function(t) {
                    if (void 0 === t) return n;
                    r(t) && (n = t);
                };
            }
            t.exports = {
                data: o([], function(t) {
                    var e = t[0].length;
                    return t
                        .map(function(t) {
                            return t.length == e;
                        })
                        .reduce(function(t, e) {
                            return t & e;
                        }, !0);
                }),
                clusters: function() {
                    var t = (function(t, e) {
                            for (
                                var n =
                                        e.k ||
                                        Math.round(Math.sqrt(t.length / 2)),
                                    i = e.iterations,
                                    a = t.map(function(t) {
                                        return new (function(t) {
                                            var e = this;
                                            (this.location = o(t)),
                                                (this.label = o()),
                                                (this.updateLabel = function(
                                                    t
                                                ) {
                                                    var n = t.map(function(t) {
                                                        return (function(t, e) {
                                                            return t
                                                                .map(function(
                                                                    t,
                                                                    n
                                                                ) {
                                                                    return Math.pow(
                                                                        t -
                                                                            e[
                                                                                n
                                                                            ],
                                                                        2
                                                                    );
                                                                })
                                                                .reduce(
                                                                    function(
                                                                        t,
                                                                        e
                                                                    ) {
                                                                        return (
                                                                            t +
                                                                            e
                                                                        );
                                                                    },
                                                                    0
                                                                );
                                                        })(
                                                            e.location(),
                                                            t.location()
                                                        );
                                                    });
                                                    e.label(
                                                        (function(t) {
                                                            var e = t.reduce(
                                                                function(t, e) {
                                                                    return Math.min(
                                                                        t,
                                                                        e
                                                                    );
                                                                }
                                                            );
                                                            return t.indexOf(e);
                                                        })(n)
                                                    );
                                                });
                                        })(t);
                                    }),
                                    s = [],
                                    l = 0;
                                l < n;
                                l++
                            )
                                s.push(new r(a[l % a.length].location(), l));
                            for (var u = 0; u < i; u++)
                                a.forEach(function(t) {
                                    t.updateLabel(s);
                                }),
                                    s.forEach(function(t) {
                                        t.updateLocation(a);
                                    });
                            return { points: a, centroids: s };
                        })(this.data(), {
                            k: this.k(),
                            iterations: this.iterations()
                        }),
                        e = t.points;
                    return t.centroids.map(function(t) {
                        return {
                            centroid: t.location(),
                            points: e
                                .filter(function(e) {
                                    return e.label() == t.label();
                                })
                                .map(function(t) {
                                    return t.location();
                                })
                        };
                    });
                },
                k: o(void 0, function(t) {
                    return (t % 1 == 0) & (t > 0);
                }),
                iterations: o(Math.pow(10, 3), function(t) {
                    return (t % 1 == 0) & (t > 0);
                })
            };
        },
        function(t, e, n) {
            var r;
            /*!
             * jQuery JavaScript Library v3.3.1
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2018-01-20T17:24Z
             */
            /*!
             * jQuery JavaScript Library v3.3.1
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2018-01-20T17:24Z
             */
            !(function(e, n) {
                'use strict';
                'object' == typeof t && 'object' == typeof t.exports
                    ? (t.exports = e.document
                          ? n(e, !0)
                          : function(t) {
                                if (!t.document)
                                    throw new Error(
                                        'jQuery requires a window with a document'
                                    );
                                return n(t);
                            })
                    : n(e);
            })('undefined' != typeof window ? window : this, function(n, o) {
                'use strict';
                var i = [],
                    a = n.document,
                    s = Object.getPrototypeOf,
                    l = i.slice,
                    u = i.concat,
                    c = i.push,
                    f = i.indexOf,
                    p = {},
                    d = p.toString,
                    h = p.hasOwnProperty,
                    y = h.toString,
                    g = y.call(Object),
                    m = {},
                    v = function(t) {
                        return (
                            'function' == typeof t &&
                            'number' != typeof t.nodeType
                        );
                    },
                    b = function(t) {
                        return null != t && t === t.window;
                    },
                    x = { type: !0, src: !0, noModule: !0 };
                function w(t, e, n) {
                    var r,
                        o = (e = e || a).createElement('script');
                    if (((o.text = t), n)) for (r in x) n[r] && (o[r] = n[r]);
                    e.head.appendChild(o).parentNode.removeChild(o);
                }
                function _(t) {
                    return null == t
                        ? t + ''
                        : 'object' == typeof t || 'function' == typeof t
                        ? p[d.call(t)] || 'object'
                        : typeof t;
                }
                var T = function(t, e) {
                        return new T.fn.init(t, e);
                    },
                    A = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                function k(t) {
                    var e = !!t && 'length' in t && t.length,
                        n = _(t);
                    return (
                        !v(t) &&
                        !b(t) &&
                        ('array' === n ||
                            0 === e ||
                            ('number' == typeof e && e > 0 && e - 1 in t))
                    );
                }
                (T.fn = T.prototype = {
                    jquery: '3.3.1',
                    constructor: T,
                    length: 0,
                    toArray: function() {
                        return l.call(this);
                    },
                    get: function(t) {
                        return null == t
                            ? l.call(this)
                            : t < 0
                            ? this[t + this.length]
                            : this[t];
                    },
                    pushStack: function(t) {
                        var e = T.merge(this.constructor(), t);
                        return (e.prevObject = this), e;
                    },
                    each: function(t) {
                        return T.each(this, t);
                    },
                    map: function(t) {
                        return this.pushStack(
                            T.map(this, function(e, n) {
                                return t.call(e, n, e);
                            })
                        );
                    },
                    slice: function() {
                        return this.pushStack(l.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    eq: function(t) {
                        var e = this.length,
                            n = +t + (t < 0 ? e : 0);
                        return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push: c,
                    sort: i.sort,
                    splice: i.splice
                }),
                    (T.extend = T.fn.extend = function() {
                        var t,
                            e,
                            n,
                            r,
                            o,
                            i,
                            a = arguments[0] || {},
                            s = 1,
                            l = arguments.length,
                            u = !1;
                        for (
                            'boolean' == typeof a &&
                                ((u = a), (a = arguments[s] || {}), s++),
                                'object' == typeof a || v(a) || (a = {}),
                                s === l && ((a = this), s--);
                            s < l;
                            s++
                        )
                            if (null != (t = arguments[s]))
                                for (e in t)
                                    (n = a[e]),
                                        a !== (r = t[e]) &&
                                            (u &&
                                            r &&
                                            (T.isPlainObject(r) ||
                                                (o = Array.isArray(r)))
                                                ? (o
                                                      ? ((o = !1),
                                                        (i =
                                                            n &&
                                                            Array.isArray(n)
                                                                ? n
                                                                : []))
                                                      : (i =
                                                            n &&
                                                            T.isPlainObject(n)
                                                                ? n
                                                                : {}),
                                                  (a[e] = T.extend(u, i, r)))
                                                : void 0 !== r && (a[e] = r));
                        return a;
                    }),
                    T.extend({
                        expando:
                            'jQuery' +
                            ('3.3.1' + Math.random()).replace(/\D/g, ''),
                        isReady: !0,
                        error: function(t) {
                            throw new Error(t);
                        },
                        noop: function() {},
                        isPlainObject: function(t) {
                            var e, n;
                            return (
                                !(!t || '[object Object]' !== d.call(t)) &&
                                (!(e = s(t)) ||
                                    ('function' ==
                                        typeof (n =
                                            h.call(e, 'constructor') &&
                                            e.constructor) &&
                                        y.call(n) === g))
                            );
                        },
                        isEmptyObject: function(t) {
                            var e;
                            for (e in t) return !1;
                            return !0;
                        },
                        globalEval: function(t) {
                            w(t);
                        },
                        each: function(t, e) {
                            var n,
                                r = 0;
                            if (k(t))
                                for (
                                    n = t.length;
                                    r < n && !1 !== e.call(t[r], r, t[r]);
                                    r++
                                );
                            else
                                for (r in t)
                                    if (!1 === e.call(t[r], r, t[r])) break;
                            return t;
                        },
                        trim: function(t) {
                            return null == t ? '' : (t + '').replace(A, '');
                        },
                        makeArray: function(t, e) {
                            var n = e || [];
                            return (
                                null != t &&
                                    (k(Object(t))
                                        ? T.merge(
                                              n,
                                              'string' == typeof t ? [t] : t
                                          )
                                        : c.call(n, t)),
                                n
                            );
                        },
                        inArray: function(t, e, n) {
                            return null == e ? -1 : f.call(e, t, n);
                        },
                        merge: function(t, e) {
                            for (
                                var n = +e.length, r = 0, o = t.length;
                                r < n;
                                r++
                            )
                                t[o++] = e[r];
                            return (t.length = o), t;
                        },
                        grep: function(t, e, n) {
                            for (
                                var r = [], o = 0, i = t.length, a = !n;
                                o < i;
                                o++
                            )
                                !e(t[o], o) !== a && r.push(t[o]);
                            return r;
                        },
                        map: function(t, e, n) {
                            var r,
                                o,
                                i = 0,
                                a = [];
                            if (k(t))
                                for (r = t.length; i < r; i++)
                                    null != (o = e(t[i], i, n)) && a.push(o);
                            else
                                for (i in t)
                                    null != (o = e(t[i], i, n)) && a.push(o);
                            return u.apply([], a);
                        },
                        guid: 1,
                        support: m
                    }),
                    'function' == typeof Symbol &&
                        (T.fn[Symbol.iterator] = i[Symbol.iterator]),
                    T.each(
                        'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                            ' '
                        ),
                        function(t, e) {
                            p['[object ' + e + ']'] = e.toLowerCase();
                        }
                    );
                var E =
                    /*!
                     * Sizzle CSS Selector Engine v2.3.3
                     * https://sizzlejs.com/
                     *
                     * Copyright jQuery Foundation and other contributors
                     * Released under the MIT license
                     * http://jquery.org/license
                     *
                     * Date: 2016-08-08
                     */
                    (function(t) {
                        var e,
                            n,
                            r,
                            o,
                            i,
                            a,
                            s,
                            l,
                            u,
                            c,
                            f,
                            p,
                            d,
                            h,
                            y,
                            g,
                            m,
                            v,
                            b,
                            x = 'sizzle' + 1 * new Date(),
                            w = t.document,
                            _ = 0,
                            T = 0,
                            A = at(),
                            k = at(),
                            E = at(),
                            C = function(t, e) {
                                return t === e && (f = !0), 0;
                            },
                            S = {}.hasOwnProperty,
                            j = [],
                            N = j.pop,
                            D = j.push,
                            q = j.push,
                            L = j.slice,
                            O = function(t, e) {
                                for (var n = 0, r = t.length; n < r; n++)
                                    if (t[n] === e) return n;
                                return -1;
                            },
                            M =
                                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                            P = '[\\x20\\t\\r\\n\\f]',
                            R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
                            H =
                                '\\[' +
                                P +
                                '*(' +
                                R +
                                ')(?:' +
                                P +
                                '*([*^$|!~]?=)' +
                                P +
                                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                                R +
                                '))|)' +
                                P +
                                '*\\]',
                            I =
                                ':(' +
                                R +
                                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                                H +
                                ')*)|.*)\\)|)',
                            $ = new RegExp(P + '+', 'g'),
                            B = new RegExp(
                                '^' +
                                    P +
                                    '+|((?:^|[^\\\\])(?:\\\\.)*)' +
                                    P +
                                    '+$',
                                'g'
                            ),
                            F = new RegExp('^' + P + '*,' + P + '*'),
                            U = new RegExp(
                                '^' + P + '*([>+~]|' + P + ')' + P + '*'
                            ),
                            W = new RegExp(
                                '=' + P + '*([^\\]\'"]*?)' + P + '*\\]',
                                'g'
                            ),
                            z = new RegExp(I),
                            X = new RegExp('^' + R + '$'),
                            G = {
                                ID: new RegExp('^#(' + R + ')'),
                                CLASS: new RegExp('^\\.(' + R + ')'),
                                TAG: new RegExp('^(' + R + '|[*])'),
                                ATTR: new RegExp('^' + H),
                                PSEUDO: new RegExp('^' + I),
                                CHILD: new RegExp(
                                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                                        P +
                                        '*(even|odd|(([+-]|)(\\d*)n|)' +
                                        P +
                                        '*(?:([+-]|)' +
                                        P +
                                        '*(\\d+)|))' +
                                        P +
                                        '*\\)|)',
                                    'i'
                                ),
                                bool: new RegExp('^(?:' + M + ')$', 'i'),
                                needsContext: new RegExp(
                                    '^' +
                                        P +
                                        '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                                        P +
                                        '*((?:-\\d)?\\d*)' +
                                        P +
                                        '*\\)|)(?=[^-]|$)',
                                    'i'
                                )
                            },
                            V = /^(?:input|select|textarea|button)$/i,
                            Y = /^h\d$/i,
                            J = /^[^{]+\{\s*\[native \w/,
                            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            K = /[+~]/,
                            Z = new RegExp(
                                '\\\\([\\da-f]{1,6}' + P + '?|(' + P + ')|.)',
                                'ig'
                            ),
                            tt = function(t, e, n) {
                                var r = '0x' + e - 65536;
                                return r != r || n
                                    ? e
                                    : r < 0
                                    ? String.fromCharCode(r + 65536)
                                    : String.fromCharCode(
                                          (r >> 10) | 55296,
                                          (1023 & r) | 56320
                                      );
                            },
                            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            nt = function(t, e) {
                                return e
                                    ? '\0' === t
                                        ? '�'
                                        : t.slice(0, -1) +
                                          '\\' +
                                          t
                                              .charCodeAt(t.length - 1)
                                              .toString(16) +
                                          ' '
                                    : '\\' + t;
                            },
                            rt = function() {
                                p();
                            },
                            ot = vt(
                                function(t) {
                                    return (
                                        !0 === t.disabled &&
                                        ('form' in t || 'label' in t)
                                    );
                                },
                                { dir: 'parentNode', next: 'legend' }
                            );
                        try {
                            q.apply((j = L.call(w.childNodes)), w.childNodes),
                                j[w.childNodes.length].nodeType;
                        } catch (t) {
                            q = {
                                apply: j.length
                                    ? function(t, e) {
                                          D.apply(t, L.call(e));
                                      }
                                    : function(t, e) {
                                          for (
                                              var n = t.length, r = 0;
                                              (t[n++] = e[r++]);

                                          );
                                          t.length = n - 1;
                                      }
                            };
                        }
                        function it(t, e, r, o) {
                            var i,
                                s,
                                u,
                                c,
                                f,
                                h,
                                m,
                                v = e && e.ownerDocument,
                                _ = e ? e.nodeType : 9;
                            if (
                                ((r = r || []),
                                'string' != typeof t ||
                                    !t ||
                                    (1 !== _ && 9 !== _ && 11 !== _))
                            )
                                return r;
                            if (
                                !o &&
                                ((e ? e.ownerDocument || e : w) !== d && p(e),
                                (e = e || d),
                                y)
                            ) {
                                if (11 !== _ && (f = Q.exec(t)))
                                    if ((i = f[1])) {
                                        if (9 === _) {
                                            if (!(u = e.getElementById(i)))
                                                return r;
                                            if (u.id === i) return r.push(u), r;
                                        } else if (
                                            v &&
                                            (u = v.getElementById(i)) &&
                                            b(e, u) &&
                                            u.id === i
                                        )
                                            return r.push(u), r;
                                    } else {
                                        if (f[2])
                                            return (
                                                q.apply(
                                                    r,
                                                    e.getElementsByTagName(t)
                                                ),
                                                r
                                            );
                                        if (
                                            (i = f[3]) &&
                                            n.getElementsByClassName &&
                                            e.getElementsByClassName
                                        )
                                            return (
                                                q.apply(
                                                    r,
                                                    e.getElementsByClassName(i)
                                                ),
                                                r
                                            );
                                    }
                                if (
                                    n.qsa &&
                                    !E[t + ' '] &&
                                    (!g || !g.test(t))
                                ) {
                                    if (1 !== _) (v = e), (m = t);
                                    else if (
                                        'object' !== e.nodeName.toLowerCase()
                                    ) {
                                        for (
                                            (c = e.getAttribute('id'))
                                                ? (c = c.replace(et, nt))
                                                : e.setAttribute('id', (c = x)),
                                                s = (h = a(t)).length;
                                            s--;

                                        )
                                            h[s] = '#' + c + ' ' + mt(h[s]);
                                        (m = h.join(',')),
                                            (v =
                                                (K.test(t) &&
                                                    yt(e.parentNode)) ||
                                                e);
                                    }
                                    if (m)
                                        try {
                                            return (
                                                q.apply(
                                                    r,
                                                    v.querySelectorAll(m)
                                                ),
                                                r
                                            );
                                        } catch (t) {
                                        } finally {
                                            c === x && e.removeAttribute('id');
                                        }
                                }
                            }
                            return l(t.replace(B, '$1'), e, r, o);
                        }
                        function at() {
                            var t = [];
                            return function e(n, o) {
                                return (
                                    t.push(n + ' ') > r.cacheLength &&
                                        delete e[t.shift()],
                                    (e[n + ' '] = o)
                                );
                            };
                        }
                        function st(t) {
                            return (t[x] = !0), t;
                        }
                        function lt(t) {
                            var e = d.createElement('fieldset');
                            try {
                                return !!t(e);
                            } catch (t) {
                                return !1;
                            } finally {
                                e.parentNode && e.parentNode.removeChild(e),
                                    (e = null);
                            }
                        }
                        function ut(t, e) {
                            for (var n = t.split('|'), o = n.length; o--; )
                                r.attrHandle[n[o]] = e;
                        }
                        function ct(t, e) {
                            var n = e && t,
                                r =
                                    n &&
                                    1 === t.nodeType &&
                                    1 === e.nodeType &&
                                    t.sourceIndex - e.sourceIndex;
                            if (r) return r;
                            if (n)
                                for (; (n = n.nextSibling); )
                                    if (n === e) return -1;
                            return t ? 1 : -1;
                        }
                        function ft(t) {
                            return function(e) {
                                return (
                                    'input' === e.nodeName.toLowerCase() &&
                                    e.type === t
                                );
                            };
                        }
                        function pt(t) {
                            return function(e) {
                                var n = e.nodeName.toLowerCase();
                                return (
                                    ('input' === n || 'button' === n) &&
                                    e.type === t
                                );
                            };
                        }
                        function dt(t) {
                            return function(e) {
                                return 'form' in e
                                    ? e.parentNode && !1 === e.disabled
                                        ? 'label' in e
                                            ? 'label' in e.parentNode
                                                ? e.parentNode.disabled === t
                                                : e.disabled === t
                                            : e.isDisabled === t ||
                                              (e.isDisabled !== !t &&
                                                  ot(e) === t)
                                        : e.disabled === t
                                    : 'label' in e && e.disabled === t;
                            };
                        }
                        function ht(t) {
                            return st(function(e) {
                                return (
                                    (e = +e),
                                    st(function(n, r) {
                                        for (
                                            var o,
                                                i = t([], n.length, e),
                                                a = i.length;
                                            a--;

                                        )
                                            n[(o = i[a])] &&
                                                (n[o] = !(r[o] = n[o]));
                                    })
                                );
                            });
                        }
                        function yt(t) {
                            return t && void 0 !== t.getElementsByTagName && t;
                        }
                        for (e in ((n = it.support = {}),
                        (i = it.isXML = function(t) {
                            var e = t && (t.ownerDocument || t).documentElement;
                            return !!e && 'HTML' !== e.nodeName;
                        }),
                        (p = it.setDocument = function(t) {
                            var e,
                                o,
                                a = t ? t.ownerDocument || t : w;
                            return a !== d &&
                                9 === a.nodeType &&
                                a.documentElement
                                ? ((h = (d = a).documentElement),
                                  (y = !i(d)),
                                  w !== d &&
                                      (o = d.defaultView) &&
                                      o.top !== o &&
                                      (o.addEventListener
                                          ? o.addEventListener('unload', rt, !1)
                                          : o.attachEvent &&
                                            o.attachEvent('onunload', rt)),
                                  (n.attributes = lt(function(t) {
                                      return (
                                          (t.className = 'i'),
                                          !t.getAttribute('className')
                                      );
                                  })),
                                  (n.getElementsByTagName = lt(function(t) {
                                      return (
                                          t.appendChild(d.createComment('')),
                                          !t.getElementsByTagName('*').length
                                      );
                                  })),
                                  (n.getElementsByClassName = J.test(
                                      d.getElementsByClassName
                                  )),
                                  (n.getById = lt(function(t) {
                                      return (
                                          (h.appendChild(t).id = x),
                                          !d.getElementsByName ||
                                              !d.getElementsByName(x).length
                                      );
                                  })),
                                  n.getById
                                      ? ((r.filter.ID = function(t) {
                                            var e = t.replace(Z, tt);
                                            return function(t) {
                                                return (
                                                    t.getAttribute('id') === e
                                                );
                                            };
                                        }),
                                        (r.find.ID = function(t, e) {
                                            if (
                                                void 0 !== e.getElementById &&
                                                y
                                            ) {
                                                var n = e.getElementById(t);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((r.filter.ID = function(t) {
                                            var e = t.replace(Z, tt);
                                            return function(t) {
                                                var n =
                                                    void 0 !==
                                                        t.getAttributeNode &&
                                                    t.getAttributeNode('id');
                                                return n && n.value === e;
                                            };
                                        }),
                                        (r.find.ID = function(t, e) {
                                            if (
                                                void 0 !== e.getElementById &&
                                                y
                                            ) {
                                                var n,
                                                    r,
                                                    o,
                                                    i = e.getElementById(t);
                                                if (i) {
                                                    if (
                                                        (n = i.getAttributeNode(
                                                            'id'
                                                        )) &&
                                                        n.value === t
                                                    )
                                                        return [i];
                                                    for (
                                                        o = e.getElementsByName(
                                                            t
                                                        ),
                                                            r = 0;
                                                        (i = o[r++]);

                                                    )
                                                        if (
                                                            (n = i.getAttributeNode(
                                                                'id'
                                                            )) &&
                                                            n.value === t
                                                        )
                                                            return [i];
                                                }
                                                return [];
                                            }
                                        })),
                                  (r.find.TAG = n.getElementsByTagName
                                      ? function(t, e) {
                                            return void 0 !==
                                                e.getElementsByTagName
                                                ? e.getElementsByTagName(t)
                                                : n.qsa
                                                ? e.querySelectorAll(t)
                                                : void 0;
                                        }
                                      : function(t, e) {
                                            var n,
                                                r = [],
                                                o = 0,
                                                i = e.getElementsByTagName(t);
                                            if ('*' === t) {
                                                for (; (n = i[o++]); )
                                                    1 === n.nodeType &&
                                                        r.push(n);
                                                return r;
                                            }
                                            return i;
                                        }),
                                  (r.find.CLASS =
                                      n.getElementsByClassName &&
                                      function(t, e) {
                                          if (
                                              void 0 !==
                                                  e.getElementsByClassName &&
                                              y
                                          )
                                              return e.getElementsByClassName(
                                                  t
                                              );
                                      }),
                                  (m = []),
                                  (g = []),
                                  (n.qsa = J.test(d.querySelectorAll)) &&
                                      (lt(function(t) {
                                          (h.appendChild(t).innerHTML =
                                              "<a id='" +
                                              x +
                                              "'></a><select id='" +
                                              x +
                                              "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              t.querySelectorAll(
                                                  "[msallowcapture^='']"
                                              ).length &&
                                                  g.push(
                                                      '[*^$]=' +
                                                          P +
                                                          '*(?:\'\'|"")'
                                                  ),
                                              t.querySelectorAll('[selected]')
                                                  .length ||
                                                  g.push(
                                                      '\\[' +
                                                          P +
                                                          '*(?:value|' +
                                                          M +
                                                          ')'
                                                  ),
                                              t.querySelectorAll(
                                                  '[id~=' + x + '-]'
                                              ).length || g.push('~='),
                                              t.querySelectorAll(':checked')
                                                  .length || g.push(':checked'),
                                              t.querySelectorAll(
                                                  'a#' + x + '+*'
                                              ).length || g.push('.#.+[+~]');
                                      }),
                                      lt(function(t) {
                                          t.innerHTML =
                                              "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var e = d.createElement('input');
                                          e.setAttribute('type', 'hidden'),
                                              t
                                                  .appendChild(e)
                                                  .setAttribute('name', 'D'),
                                              t.querySelectorAll('[name=d]')
                                                  .length &&
                                                  g.push(
                                                      'name' + P + '*[*^$|!~]?='
                                                  ),
                                              2 !==
                                                  t.querySelectorAll(':enabled')
                                                      .length &&
                                                  g.push(
                                                      ':enabled',
                                                      ':disabled'
                                                  ),
                                              (h.appendChild(t).disabled = !0),
                                              2 !==
                                                  t.querySelectorAll(
                                                      ':disabled'
                                                  ).length &&
                                                  g.push(
                                                      ':enabled',
                                                      ':disabled'
                                                  ),
                                              t.querySelectorAll('*,:x'),
                                              g.push(',.*:');
                                      })),
                                  (n.matchesSelector = J.test(
                                      (v =
                                          h.matches ||
                                          h.webkitMatchesSelector ||
                                          h.mozMatchesSelector ||
                                          h.oMatchesSelector ||
                                          h.msMatchesSelector)
                                  )) &&
                                      lt(function(t) {
                                          (n.disconnectedMatch = v.call(
                                              t,
                                              '*'
                                          )),
                                              v.call(t, "[s!='']:x"),
                                              m.push('!=', I);
                                      }),
                                  (g = g.length && new RegExp(g.join('|'))),
                                  (m = m.length && new RegExp(m.join('|'))),
                                  (e = J.test(h.compareDocumentPosition)),
                                  (b =
                                      e || J.test(h.contains)
                                          ? function(t, e) {
                                                var n =
                                                        9 === t.nodeType
                                                            ? t.documentElement
                                                            : t,
                                                    r = e && e.parentNode;
                                                return (
                                                    t === r ||
                                                    !(
                                                        !r ||
                                                        1 !== r.nodeType ||
                                                        !(n.contains
                                                            ? n.contains(r)
                                                            : t.compareDocumentPosition &&
                                                              16 &
                                                                  t.compareDocumentPosition(
                                                                      r
                                                                  ))
                                                    )
                                                );
                                            }
                                          : function(t, e) {
                                                if (e)
                                                    for (; (e = e.parentNode); )
                                                        if (e === t) return !0;
                                                return !1;
                                            }),
                                  (C = e
                                      ? function(t, e) {
                                            if (t === e) return (f = !0), 0;
                                            var r =
                                                !t.compareDocumentPosition -
                                                !e.compareDocumentPosition;
                                            return (
                                                r ||
                                                (1 &
                                                    (r =
                                                        (t.ownerDocument ||
                                                            t) ===
                                                        (e.ownerDocument || e)
                                                            ? t.compareDocumentPosition(
                                                                  e
                                                              )
                                                            : 1) ||
                                                (!n.sortDetached &&
                                                    e.compareDocumentPosition(
                                                        t
                                                    ) === r)
                                                    ? t === d ||
                                                      (t.ownerDocument === w &&
                                                          b(w, t))
                                                        ? -1
                                                        : e === d ||
                                                          (e.ownerDocument ===
                                                              w &&
                                                              b(w, e))
                                                        ? 1
                                                        : c
                                                        ? O(c, t) - O(c, e)
                                                        : 0
                                                    : 4 & r
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function(t, e) {
                                            if (t === e) return (f = !0), 0;
                                            var n,
                                                r = 0,
                                                o = t.parentNode,
                                                i = e.parentNode,
                                                a = [t],
                                                s = [e];
                                            if (!o || !i)
                                                return t === d
                                                    ? -1
                                                    : e === d
                                                    ? 1
                                                    : o
                                                    ? -1
                                                    : i
                                                    ? 1
                                                    : c
                                                    ? O(c, t) - O(c, e)
                                                    : 0;
                                            if (o === i) return ct(t, e);
                                            for (n = t; (n = n.parentNode); )
                                                a.unshift(n);
                                            for (n = e; (n = n.parentNode); )
                                                s.unshift(n);
                                            for (; a[r] === s[r]; ) r++;
                                            return r
                                                ? ct(a[r], s[r])
                                                : a[r] === w
                                                ? -1
                                                : s[r] === w
                                                ? 1
                                                : 0;
                                        }),
                                  d)
                                : d;
                        }),
                        (it.matches = function(t, e) {
                            return it(t, null, null, e);
                        }),
                        (it.matchesSelector = function(t, e) {
                            if (
                                ((t.ownerDocument || t) !== d && p(t),
                                (e = e.replace(W, "='$1']")),
                                n.matchesSelector &&
                                    y &&
                                    !E[e + ' '] &&
                                    (!m || !m.test(e)) &&
                                    (!g || !g.test(e)))
                            )
                                try {
                                    var r = v.call(t, e);
                                    if (
                                        r ||
                                        n.disconnectedMatch ||
                                        (t.document &&
                                            11 !== t.document.nodeType)
                                    )
                                        return r;
                                } catch (t) {}
                            return it(e, d, null, [t]).length > 0;
                        }),
                        (it.contains = function(t, e) {
                            return (
                                (t.ownerDocument || t) !== d && p(t), b(t, e)
                            );
                        }),
                        (it.attr = function(t, e) {
                            (t.ownerDocument || t) !== d && p(t);
                            var o = r.attrHandle[e.toLowerCase()],
                                i =
                                    o && S.call(r.attrHandle, e.toLowerCase())
                                        ? o(t, e, !y)
                                        : void 0;
                            return void 0 !== i
                                ? i
                                : n.attributes || !y
                                ? t.getAttribute(e)
                                : (i = t.getAttributeNode(e)) && i.specified
                                ? i.value
                                : null;
                        }),
                        (it.escape = function(t) {
                            return (t + '').replace(et, nt);
                        }),
                        (it.error = function(t) {
                            throw new Error(
                                'Syntax error, unrecognized expression: ' + t
                            );
                        }),
                        (it.uniqueSort = function(t) {
                            var e,
                                r = [],
                                o = 0,
                                i = 0;
                            if (
                                ((f = !n.detectDuplicates),
                                (c = !n.sortStable && t.slice(0)),
                                t.sort(C),
                                f)
                            ) {
                                for (; (e = t[i++]); )
                                    e === t[i] && (o = r.push(i));
                                for (; o--; ) t.splice(r[o], 1);
                            }
                            return (c = null), t;
                        }),
                        (o = it.getText = function(t) {
                            var e,
                                n = '',
                                r = 0,
                                i = t.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ('string' == typeof t.textContent)
                                        return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling)
                                        n += o(t);
                                } else if (3 === i || 4 === i)
                                    return t.nodeValue;
                            } else for (; (e = t[r++]); ) n += o(e);
                            return n;
                        }),
                        ((r = it.selectors = {
                            cacheLength: 50,
                            createPseudo: st,
                            match: G,
                            attrHandle: {},
                            find: {},
                            relative: {
                                '>': { dir: 'parentNode', first: !0 },
                                ' ': { dir: 'parentNode' },
                                '+': { dir: 'previousSibling', first: !0 },
                                '~': { dir: 'previousSibling' }
                            },
                            preFilter: {
                                ATTR: function(t) {
                                    return (
                                        (t[1] = t[1].replace(Z, tt)),
                                        (t[3] = (
                                            t[3] ||
                                            t[4] ||
                                            t[5] ||
                                            ''
                                        ).replace(Z, tt)),
                                        '~=' === t[2] &&
                                            (t[3] = ' ' + t[3] + ' '),
                                        t.slice(0, 4)
                                    );
                                },
                                CHILD: function(t) {
                                    return (
                                        (t[1] = t[1].toLowerCase()),
                                        'nth' === t[1].slice(0, 3)
                                            ? (t[3] || it.error(t[0]),
                                              (t[4] = +(t[4]
                                                  ? t[5] + (t[6] || 1)
                                                  : 2 *
                                                    ('even' === t[3] ||
                                                        'odd' === t[3]))),
                                              (t[5] = +(
                                                  t[7] + t[8] || 'odd' === t[3]
                                              )))
                                            : t[3] && it.error(t[0]),
                                        t
                                    );
                                },
                                PSEUDO: function(t) {
                                    var e,
                                        n = !t[6] && t[2];
                                    return G.CHILD.test(t[0])
                                        ? null
                                        : (t[3]
                                              ? (t[2] = t[4] || t[5] || '')
                                              : n &&
                                                z.test(n) &&
                                                (e = a(n, !0)) &&
                                                (e =
                                                    n.indexOf(
                                                        ')',
                                                        n.length - e
                                                    ) - n.length) &&
                                                ((t[0] = t[0].slice(0, e)),
                                                (t[2] = n.slice(0, e))),
                                          t.slice(0, 3));
                                }
                            },
                            filter: {
                                TAG: function(t) {
                                    var e = t.replace(Z, tt).toLowerCase();
                                    return '*' === t
                                        ? function() {
                                              return !0;
                                          }
                                        : function(t) {
                                              return (
                                                  t.nodeName &&
                                                  t.nodeName.toLowerCase() === e
                                              );
                                          };
                                },
                                CLASS: function(t) {
                                    var e = A[t + ' '];
                                    return (
                                        e ||
                                        ((e = new RegExp(
                                            '(^|' +
                                                P +
                                                ')' +
                                                t +
                                                '(' +
                                                P +
                                                '|$)'
                                        )) &&
                                            A(t, function(t) {
                                                return e.test(
                                                    ('string' ==
                                                        typeof t.className &&
                                                        t.className) ||
                                                        (void 0 !==
                                                            t.getAttribute &&
                                                            t.getAttribute(
                                                                'class'
                                                            )) ||
                                                        ''
                                                );
                                            }))
                                    );
                                },
                                ATTR: function(t, e, n) {
                                    return function(r) {
                                        var o = it.attr(r, t);
                                        return null == o
                                            ? '!=' === e
                                            : !e ||
                                                  ((o += ''),
                                                  '=' === e
                                                      ? o === n
                                                      : '!=' === e
                                                      ? o !== n
                                                      : '^=' === e
                                                      ? n && 0 === o.indexOf(n)
                                                      : '*=' === e
                                                      ? n && o.indexOf(n) > -1
                                                      : '$=' === e
                                                      ? n &&
                                                        o.slice(-n.length) === n
                                                      : '~=' === e
                                                      ? (
                                                            ' ' +
                                                            o.replace($, ' ') +
                                                            ' '
                                                        ).indexOf(n) > -1
                                                      : '|=' === e &&
                                                        (o === n ||
                                                            o.slice(
                                                                0,
                                                                n.length + 1
                                                            ) ===
                                                                n + '-'));
                                    };
                                },
                                CHILD: function(t, e, n, r, o) {
                                    var i = 'nth' !== t.slice(0, 3),
                                        a = 'last' !== t.slice(-4),
                                        s = 'of-type' === e;
                                    return 1 === r && 0 === o
                                        ? function(t) {
                                              return !!t.parentNode;
                                          }
                                        : function(e, n, l) {
                                              var u,
                                                  c,
                                                  f,
                                                  p,
                                                  d,
                                                  h,
                                                  y =
                                                      i !== a
                                                          ? 'nextSibling'
                                                          : 'previousSibling',
                                                  g = e.parentNode,
                                                  m =
                                                      s &&
                                                      e.nodeName.toLowerCase(),
                                                  v = !l && !s,
                                                  b = !1;
                                              if (g) {
                                                  if (i) {
                                                      for (; y; ) {
                                                          for (
                                                              p = e;
                                                              (p = p[y]);

                                                          )
                                                              if (
                                                                  s
                                                                      ? p.nodeName.toLowerCase() ===
                                                                        m
                                                                      : 1 ===
                                                                        p.nodeType
                                                              )
                                                                  return !1;
                                                          h = y =
                                                              'only' === t &&
                                                              !h &&
                                                              'nextSibling';
                                                      }
                                                      return !0;
                                                  }
                                                  if (
                                                      ((h = [
                                                          a
                                                              ? g.firstChild
                                                              : g.lastChild
                                                      ]),
                                                      a && v)
                                                  ) {
                                                      for (
                                                          b =
                                                              (d =
                                                                  (u =
                                                                      (c =
                                                                          (f =
                                                                              (p = g)[
                                                                                  x
                                                                              ] ||
                                                                              (p[
                                                                                  x
                                                                              ] = {}))[
                                                                              p
                                                                                  .uniqueID
                                                                          ] ||
                                                                          (f[
                                                                              p.uniqueID
                                                                          ] = {}))[
                                                                          t
                                                                      ] ||
                                                                      [])[0] ===
                                                                      _ &&
                                                                  u[1]) && u[2],
                                                              p =
                                                                  d &&
                                                                  g.childNodes[
                                                                      d
                                                                  ];
                                                          (p =
                                                              (++d &&
                                                                  p &&
                                                                  p[y]) ||
                                                              (b = d = 0) ||
                                                              h.pop());

                                                      )
                                                          if (
                                                              1 ===
                                                                  p.nodeType &&
                                                              ++b &&
                                                              p === e
                                                          ) {
                                                              c[t] = [_, d, b];
                                                              break;
                                                          }
                                                  } else if (
                                                      (v &&
                                                          (b = d =
                                                              (u =
                                                                  (c =
                                                                      (f =
                                                                          (p = e)[
                                                                              x
                                                                          ] ||
                                                                          (p[
                                                                              x
                                                                          ] = {}))[
                                                                          p
                                                                              .uniqueID
                                                                      ] ||
                                                                      (f[
                                                                          p.uniqueID
                                                                      ] = {}))[
                                                                      t
                                                                  ] ||
                                                                  [])[0] ===
                                                                  _ && u[1]),
                                                      !1 === b)
                                                  )
                                                      for (
                                                          ;
                                                          (p =
                                                              (++d &&
                                                                  p &&
                                                                  p[y]) ||
                                                              (b = d = 0) ||
                                                              h.pop()) &&
                                                          ((s
                                                              ? p.nodeName.toLowerCase() !==
                                                                m
                                                              : 1 !==
                                                                p.nodeType) ||
                                                              !++b ||
                                                              (v &&
                                                                  ((c =
                                                                      (f =
                                                                          p[
                                                                              x
                                                                          ] ||
                                                                          (p[
                                                                              x
                                                                          ] = {}))[
                                                                          p
                                                                              .uniqueID
                                                                      ] ||
                                                                      (f[
                                                                          p.uniqueID
                                                                      ] = {}))[
                                                                      t
                                                                  ] = [_, b]),
                                                              p !== e));

                                                      );
                                                  return (
                                                      (b -= o) === r ||
                                                      (b % r == 0 && b / r >= 0)
                                                  );
                                              }
                                          };
                                },
                                PSEUDO: function(t, e) {
                                    var n,
                                        o =
                                            r.pseudos[t] ||
                                            r.setFilters[t.toLowerCase()] ||
                                            it.error(
                                                'unsupported pseudo: ' + t
                                            );
                                    return o[x]
                                        ? o(e)
                                        : o.length > 1
                                        ? ((n = [t, t, '', e]),
                                          r.setFilters.hasOwnProperty(
                                              t.toLowerCase()
                                          )
                                              ? st(function(t, n) {
                                                    for (
                                                        var r,
                                                            i = o(t, e),
                                                            a = i.length;
                                                        a--;

                                                    )
                                                        t[
                                                            (r = O(t, i[a]))
                                                        ] = !(n[r] = i[a]);
                                                })
                                              : function(t) {
                                                    return o(t, 0, n);
                                                })
                                        : o;
                                }
                            },
                            pseudos: {
                                not: st(function(t) {
                                    var e = [],
                                        n = [],
                                        r = s(t.replace(B, '$1'));
                                    return r[x]
                                        ? st(function(t, e, n, o) {
                                              for (
                                                  var i,
                                                      a = r(t, null, o, []),
                                                      s = t.length;
                                                  s--;

                                              )
                                                  (i = a[s]) &&
                                                      (t[s] = !(e[s] = i));
                                          })
                                        : function(t, o, i) {
                                              return (
                                                  (e[0] = t),
                                                  r(e, null, i, n),
                                                  (e[0] = null),
                                                  !n.pop()
                                              );
                                          };
                                }),
                                has: st(function(t) {
                                    return function(e) {
                                        return it(t, e).length > 0;
                                    };
                                }),
                                contains: st(function(t) {
                                    return (
                                        (t = t.replace(Z, tt)),
                                        function(e) {
                                            return (
                                                (
                                                    e.textContent ||
                                                    e.innerText ||
                                                    o(e)
                                                ).indexOf(t) > -1
                                            );
                                        }
                                    );
                                }),
                                lang: st(function(t) {
                                    return (
                                        X.test(t || '') ||
                                            it.error('unsupported lang: ' + t),
                                        (t = t.replace(Z, tt).toLowerCase()),
                                        function(e) {
                                            var n;
                                            do {
                                                if (
                                                    (n = y
                                                        ? e.lang
                                                        : e.getAttribute(
                                                              'xml:lang'
                                                          ) ||
                                                          e.getAttribute(
                                                              'lang'
                                                          ))
                                                )
                                                    return (
                                                        (n = n.toLowerCase()) ===
                                                            t ||
                                                        0 === n.indexOf(t + '-')
                                                    );
                                            } while (
                                                (e = e.parentNode) &&
                                                1 === e.nodeType
                                            );
                                            return !1;
                                        }
                                    );
                                }),
                                target: function(e) {
                                    var n = t.location && t.location.hash;
                                    return n && n.slice(1) === e.id;
                                },
                                root: function(t) {
                                    return t === h;
                                },
                                focus: function(t) {
                                    return (
                                        t === d.activeElement &&
                                        (!d.hasFocus || d.hasFocus()) &&
                                        !!(t.type || t.href || ~t.tabIndex)
                                    );
                                },
                                enabled: dt(!1),
                                disabled: dt(!0),
                                checked: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return (
                                        ('input' === e && !!t.checked) ||
                                        ('option' === e && !!t.selected)
                                    );
                                },
                                selected: function(t) {
                                    return (
                                        t.parentNode &&
                                            t.parentNode.selectedIndex,
                                        !0 === t.selected
                                    );
                                },
                                empty: function(t) {
                                    for (t = t.firstChild; t; t = t.nextSibling)
                                        if (t.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function(t) {
                                    return !r.pseudos.empty(t);
                                },
                                header: function(t) {
                                    return Y.test(t.nodeName);
                                },
                                input: function(t) {
                                    return V.test(t.nodeName);
                                },
                                button: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return (
                                        ('input' === e &&
                                            'button' === t.type) ||
                                        'button' === e
                                    );
                                },
                                text: function(t) {
                                    var e;
                                    return (
                                        'input' === t.nodeName.toLowerCase() &&
                                        'text' === t.type &&
                                        (null == (e = t.getAttribute('type')) ||
                                            'text' === e.toLowerCase())
                                    );
                                },
                                first: ht(function() {
                                    return [0];
                                }),
                                last: ht(function(t, e) {
                                    return [e - 1];
                                }),
                                eq: ht(function(t, e, n) {
                                    return [n < 0 ? n + e : n];
                                }),
                                even: ht(function(t, e) {
                                    for (var n = 0; n < e; n += 2) t.push(n);
                                    return t;
                                }),
                                odd: ht(function(t, e) {
                                    for (var n = 1; n < e; n += 2) t.push(n);
                                    return t;
                                }),
                                lt: ht(function(t, e, n) {
                                    for (var r = n < 0 ? n + e : n; --r >= 0; )
                                        t.push(r);
                                    return t;
                                }),
                                gt: ht(function(t, e, n) {
                                    for (var r = n < 0 ? n + e : n; ++r < e; )
                                        t.push(r);
                                    return t;
                                })
                            }
                        }).pseudos.nth = r.pseudos.eq),
                        {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }))
                            r.pseudos[e] = ft(e);
                        for (e in { submit: !0, reset: !0 })
                            r.pseudos[e] = pt(e);
                        function gt() {}
                        function mt(t) {
                            for (var e = 0, n = t.length, r = ''; e < n; e++)
                                r += t[e].value;
                            return r;
                        }
                        function vt(t, e, n) {
                            var r = e.dir,
                                o = e.next,
                                i = o || r,
                                a = n && 'parentNode' === i,
                                s = T++;
                            return e.first
                                ? function(e, n, o) {
                                      for (; (e = e[r]); )
                                          if (1 === e.nodeType || a)
                                              return t(e, n, o);
                                      return !1;
                                  }
                                : function(e, n, l) {
                                      var u,
                                          c,
                                          f,
                                          p = [_, s];
                                      if (l) {
                                          for (; (e = e[r]); )
                                              if (
                                                  (1 === e.nodeType || a) &&
                                                  t(e, n, l)
                                              )
                                                  return !0;
                                      } else
                                          for (; (e = e[r]); )
                                              if (1 === e.nodeType || a)
                                                  if (
                                                      ((c =
                                                          (f =
                                                              e[x] ||
                                                              (e[x] = {}))[
                                                              e.uniqueID
                                                          ] ||
                                                          (f[e.uniqueID] = {})),
                                                      o &&
                                                          o ===
                                                              e.nodeName.toLowerCase())
                                                  )
                                                      e = e[r] || e;
                                                  else {
                                                      if (
                                                          (u = c[i]) &&
                                                          u[0] === _ &&
                                                          u[1] === s
                                                      )
                                                          return (p[2] = u[2]);
                                                      if (
                                                          ((c[i] = p),
                                                          (p[2] = t(e, n, l)))
                                                      )
                                                          return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function bt(t) {
                            return t.length > 1
                                ? function(e, n, r) {
                                      for (var o = t.length; o--; )
                                          if (!t[o](e, n, r)) return !1;
                                      return !0;
                                  }
                                : t[0];
                        }
                        function xt(t, e, n, r, o) {
                            for (
                                var i,
                                    a = [],
                                    s = 0,
                                    l = t.length,
                                    u = null != e;
                                s < l;
                                s++
                            )
                                (i = t[s]) &&
                                    ((n && !n(i, r, o)) ||
                                        (a.push(i), u && e.push(s)));
                            return a;
                        }
                        function wt(t, e, n, r, o, i) {
                            return (
                                r && !r[x] && (r = wt(r)),
                                o && !o[x] && (o = wt(o, i)),
                                st(function(i, a, s, l) {
                                    var u,
                                        c,
                                        f,
                                        p = [],
                                        d = [],
                                        h = a.length,
                                        y =
                                            i ||
                                            (function(t, e, n) {
                                                for (
                                                    var r = 0, o = e.length;
                                                    r < o;
                                                    r++
                                                )
                                                    it(t, e[r], n);
                                                return n;
                                            })(
                                                e || '*',
                                                s.nodeType ? [s] : s,
                                                []
                                            ),
                                        g =
                                            !t || (!i && e)
                                                ? y
                                                : xt(y, p, t, s, l),
                                        m = n
                                            ? o || (i ? t : h || r)
                                                ? []
                                                : a
                                            : g;
                                    if ((n && n(g, m, s, l), r))
                                        for (
                                            u = xt(m, d),
                                                r(u, [], s, l),
                                                c = u.length;
                                            c--;

                                        )
                                            (f = u[c]) &&
                                                (m[d[c]] = !(g[d[c]] = f));
                                    if (i) {
                                        if (o || t) {
                                            if (o) {
                                                for (
                                                    u = [], c = m.length;
                                                    c--;

                                                )
                                                    (f = m[c]) &&
                                                        u.push((g[c] = f));
                                                o(null, (m = []), u, l);
                                            }
                                            for (c = m.length; c--; )
                                                (f = m[c]) &&
                                                    (u = o ? O(i, f) : p[c]) >
                                                        -1 &&
                                                    (i[u] = !(a[u] = f));
                                        }
                                    } else (m = xt(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, l) : q.apply(a, m);
                                })
                            );
                        }
                        function _t(t) {
                            for (
                                var e,
                                    n,
                                    o,
                                    i = t.length,
                                    a = r.relative[t[0].type],
                                    s = a || r.relative[' '],
                                    l = a ? 1 : 0,
                                    c = vt(
                                        function(t) {
                                            return t === e;
                                        },
                                        s,
                                        !0
                                    ),
                                    f = vt(
                                        function(t) {
                                            return O(e, t) > -1;
                                        },
                                        s,
                                        !0
                                    ),
                                    p = [
                                        function(t, n, r) {
                                            var o =
                                                (!a && (r || n !== u)) ||
                                                ((e = n).nodeType
                                                    ? c(t, n, r)
                                                    : f(t, n, r));
                                            return (e = null), o;
                                        }
                                    ];
                                l < i;
                                l++
                            )
                                if ((n = r.relative[t[l].type]))
                                    p = [vt(bt(p), n)];
                                else {
                                    if (
                                        (n = r.filter[t[l].type].apply(
                                            null,
                                            t[l].matches
                                        ))[x]
                                    ) {
                                        for (
                                            o = ++l;
                                            o < i && !r.relative[t[o].type];
                                            o++
                                        );
                                        return wt(
                                            l > 1 && bt(p),
                                            l > 1 &&
                                                mt(
                                                    t
                                                        .slice(0, l - 1)
                                                        .concat({
                                                            value:
                                                                ' ' ===
                                                                t[l - 2].type
                                                                    ? '*'
                                                                    : ''
                                                        })
                                                ).replace(B, '$1'),
                                            n,
                                            l < o && _t(t.slice(l, o)),
                                            o < i && _t((t = t.slice(o))),
                                            o < i && mt(t)
                                        );
                                    }
                                    p.push(n);
                                }
                            return bt(p);
                        }
                        return (
                            (gt.prototype = r.filters = r.pseudos),
                            (r.setFilters = new gt()),
                            (a = it.tokenize = function(t, e) {
                                var n,
                                    o,
                                    i,
                                    a,
                                    s,
                                    l,
                                    u,
                                    c = k[t + ' '];
                                if (c) return e ? 0 : c.slice(0);
                                for (s = t, l = [], u = r.preFilter; s; ) {
                                    for (a in ((n && !(o = F.exec(s))) ||
                                        (o && (s = s.slice(o[0].length) || s),
                                        l.push((i = []))),
                                    (n = !1),
                                    (o = U.exec(s)) &&
                                        ((n = o.shift()),
                                        i.push({
                                            value: n,
                                            type: o[0].replace(B, ' ')
                                        }),
                                        (s = s.slice(n.length))),
                                    r.filter))
                                        !(o = G[a].exec(s)) ||
                                            (u[a] && !(o = u[a](o))) ||
                                            ((n = o.shift()),
                                            i.push({
                                                value: n,
                                                type: a,
                                                matches: o
                                            }),
                                            (s = s.slice(n.length)));
                                    if (!n) break;
                                }
                                return e
                                    ? s.length
                                    : s
                                    ? it.error(t)
                                    : k(t, l).slice(0);
                            }),
                            (s = it.compile = function(t, e) {
                                var n,
                                    o = [],
                                    i = [],
                                    s = E[t + ' '];
                                if (!s) {
                                    for (e || (e = a(t)), n = e.length; n--; )
                                        (s = _t(e[n]))[x]
                                            ? o.push(s)
                                            : i.push(s);
                                    (s = E(
                                        t,
                                        (function(t, e) {
                                            var n = e.length > 0,
                                                o = t.length > 0,
                                                i = function(i, a, s, l, c) {
                                                    var f,
                                                        h,
                                                        g,
                                                        m = 0,
                                                        v = '0',
                                                        b = i && [],
                                                        x = [],
                                                        w = u,
                                                        T =
                                                            i ||
                                                            (o &&
                                                                r.find.TAG(
                                                                    '*',
                                                                    c
                                                                )),
                                                        A = (_ +=
                                                            null == w
                                                                ? 1
                                                                : Math.random() ||
                                                                  0.1),
                                                        k = T.length;
                                                    for (
                                                        c &&
                                                        (u = a === d || a || c);
                                                        v !== k &&
                                                        null != (f = T[v]);
                                                        v++
                                                    ) {
                                                        if (o && f) {
                                                            for (
                                                                h = 0,
                                                                    a ||
                                                                        f.ownerDocument ===
                                                                            d ||
                                                                        (p(f),
                                                                        (s = !y));
                                                                (g = t[h++]);

                                                            )
                                                                if (
                                                                    g(
                                                                        f,
                                                                        a || d,
                                                                        s
                                                                    )
                                                                ) {
                                                                    l.push(f);
                                                                    break;
                                                                }
                                                            c && (_ = A);
                                                        }
                                                        n &&
                                                            ((f = !g && f) &&
                                                                m--,
                                                            i && b.push(f));
                                                    }
                                                    if (
                                                        ((m += v), n && v !== m)
                                                    ) {
                                                        for (
                                                            h = 0;
                                                            (g = e[h++]);

                                                        )
                                                            g(b, x, a, s);
                                                        if (i) {
                                                            if (m > 0)
                                                                for (; v--; )
                                                                    b[v] ||
                                                                        x[v] ||
                                                                        (x[
                                                                            v
                                                                        ] = N.call(
                                                                            l
                                                                        ));
                                                            x = xt(x);
                                                        }
                                                        q.apply(l, x),
                                                            c &&
                                                                !i &&
                                                                x.length > 0 &&
                                                                m + e.length >
                                                                    1 &&
                                                                it.uniqueSort(
                                                                    l
                                                                );
                                                    }
                                                    return (
                                                        c && ((_ = A), (u = w)),
                                                        b
                                                    );
                                                };
                                            return n ? st(i) : i;
                                        })(i, o)
                                    )).selector = t;
                                }
                                return s;
                            }),
                            (l = it.select = function(t, e, n, o) {
                                var i,
                                    l,
                                    u,
                                    c,
                                    f,
                                    p = 'function' == typeof t && t,
                                    d = !o && a((t = p.selector || t));
                                if (((n = n || []), 1 === d.length)) {
                                    if (
                                        (l = d[0] = d[0].slice(0)).length > 2 &&
                                        'ID' === (u = l[0]).type &&
                                        9 === e.nodeType &&
                                        y &&
                                        r.relative[l[1].type]
                                    ) {
                                        if (
                                            !(e = (r.find.ID(
                                                u.matches[0].replace(Z, tt),
                                                e
                                            ) || [])[0])
                                        )
                                            return n;
                                        p && (e = e.parentNode),
                                            (t = t.slice(
                                                l.shift().value.length
                                            ));
                                    }
                                    for (
                                        i = G.needsContext.test(t)
                                            ? 0
                                            : l.length;
                                        i-- &&
                                        ((u = l[i]), !r.relative[(c = u.type)]);

                                    )
                                        if (
                                            (f = r.find[c]) &&
                                            (o = f(
                                                u.matches[0].replace(Z, tt),
                                                (K.test(l[0].type) &&
                                                    yt(e.parentNode)) ||
                                                    e
                                            ))
                                        ) {
                                            if (
                                                (l.splice(i, 1),
                                                !(t = o.length && mt(l)))
                                            )
                                                return q.apply(n, o), n;
                                            break;
                                        }
                                }
                                return (
                                    (p || s(t, d))(
                                        o,
                                        e,
                                        !y,
                                        n,
                                        !e ||
                                            (K.test(t) && yt(e.parentNode)) ||
                                            e
                                    ),
                                    n
                                );
                            }),
                            (n.sortStable =
                                x
                                    .split('')
                                    .sort(C)
                                    .join('') === x),
                            (n.detectDuplicates = !!f),
                            p(),
                            (n.sortDetached = lt(function(t) {
                                return (
                                    1 &
                                    t.compareDocumentPosition(
                                        d.createElement('fieldset')
                                    )
                                );
                            })),
                            lt(function(t) {
                                return (
                                    (t.innerHTML = "<a href='#'></a>"),
                                    '#' === t.firstChild.getAttribute('href')
                                );
                            }) ||
                                ut('type|href|height|width', function(t, e, n) {
                                    if (!n)
                                        return t.getAttribute(
                                            e,
                                            'type' === e.toLowerCase() ? 1 : 2
                                        );
                                }),
                            (n.attributes &&
                                lt(function(t) {
                                    return (
                                        (t.innerHTML = '<input/>'),
                                        t.firstChild.setAttribute('value', ''),
                                        '' ===
                                            t.firstChild.getAttribute('value')
                                    );
                                })) ||
                                ut('value', function(t, e, n) {
                                    if (
                                        !n &&
                                        'input' === t.nodeName.toLowerCase()
                                    )
                                        return t.defaultValue;
                                }),
                            lt(function(t) {
                                return null == t.getAttribute('disabled');
                            }) ||
                                ut(M, function(t, e, n) {
                                    var r;
                                    if (!n)
                                        return !0 === t[e]
                                            ? e.toLowerCase()
                                            : (r = t.getAttributeNode(e)) &&
                                              r.specified
                                            ? r.value
                                            : null;
                                }),
                            it
                        );
                    })(n);
                (T.find = E),
                    (T.expr = E.selectors),
                    (T.expr[':'] = T.expr.pseudos),
                    (T.uniqueSort = T.unique = E.uniqueSort),
                    (T.text = E.getText),
                    (T.isXMLDoc = E.isXML),
                    (T.contains = E.contains),
                    (T.escapeSelector = E.escape);
                var C = function(t, e, n) {
                        for (
                            var r = [], o = void 0 !== n;
                            (t = t[e]) && 9 !== t.nodeType;

                        )
                            if (1 === t.nodeType) {
                                if (o && T(t).is(n)) break;
                                r.push(t);
                            }
                        return r;
                    },
                    S = function(t, e) {
                        for (var n = []; t; t = t.nextSibling)
                            1 === t.nodeType && t !== e && n.push(t);
                        return n;
                    },
                    j = T.expr.match.needsContext;
                function N(t, e) {
                    return (
                        t.nodeName &&
                        t.nodeName.toLowerCase() === e.toLowerCase()
                    );
                }
                var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function q(t, e, n) {
                    return v(e)
                        ? T.grep(t, function(t, r) {
                              return !!e.call(t, r, t) !== n;
                          })
                        : e.nodeType
                        ? T.grep(t, function(t) {
                              return (t === e) !== n;
                          })
                        : 'string' != typeof e
                        ? T.grep(t, function(t) {
                              return f.call(e, t) > -1 !== n;
                          })
                        : T.filter(e, t, n);
                }
                (T.filter = function(t, e, n) {
                    var r = e[0];
                    return (
                        n && (t = ':not(' + t + ')'),
                        1 === e.length && 1 === r.nodeType
                            ? T.find.matchesSelector(r, t)
                                ? [r]
                                : []
                            : T.find.matches(
                                  t,
                                  T.grep(e, function(t) {
                                      return 1 === t.nodeType;
                                  })
                              )
                    );
                }),
                    T.fn.extend({
                        find: function(t) {
                            var e,
                                n,
                                r = this.length,
                                o = this;
                            if ('string' != typeof t)
                                return this.pushStack(
                                    T(t).filter(function() {
                                        for (e = 0; e < r; e++)
                                            if (T.contains(o[e], this))
                                                return !0;
                                    })
                                );
                            for (n = this.pushStack([]), e = 0; e < r; e++)
                                T.find(t, o[e], n);
                            return r > 1 ? T.uniqueSort(n) : n;
                        },
                        filter: function(t) {
                            return this.pushStack(q(this, t || [], !1));
                        },
                        not: function(t) {
                            return this.pushStack(q(this, t || [], !0));
                        },
                        is: function(t) {
                            return !!q(
                                this,
                                'string' == typeof t && j.test(t)
                                    ? T(t)
                                    : t || [],
                                !1
                            ).length;
                        }
                    });
                var L,
                    O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                ((T.fn.init = function(t, e, n) {
                    var r, o;
                    if (!t) return this;
                    if (((n = n || L), 'string' == typeof t)) {
                        if (
                            !(r =
                                '<' === t[0] &&
                                '>' === t[t.length - 1] &&
                                t.length >= 3
                                    ? [null, t, null]
                                    : O.exec(t)) ||
                            (!r[1] && e)
                        )
                            return !e || e.jquery
                                ? (e || n).find(t)
                                : this.constructor(e).find(t);
                        if (r[1]) {
                            if (
                                ((e = e instanceof T ? e[0] : e),
                                T.merge(
                                    this,
                                    T.parseHTML(
                                        r[1],
                                        e && e.nodeType
                                            ? e.ownerDocument || e
                                            : a,
                                        !0
                                    )
                                ),
                                D.test(r[1]) && T.isPlainObject(e))
                            )
                                for (r in e)
                                    v(this[r])
                                        ? this[r](e[r])
                                        : this.attr(r, e[r]);
                            return this;
                        }
                        return (
                            (o = a.getElementById(r[2])) &&
                                ((this[0] = o), (this.length = 1)),
                            this
                        );
                    }
                    return t.nodeType
                        ? ((this[0] = t), (this.length = 1), this)
                        : v(t)
                        ? void 0 !== n.ready
                            ? n.ready(t)
                            : t(T)
                        : T.makeArray(t, this);
                }).prototype = T.fn),
                    (L = T(a));
                var M = /^(?:parents|prev(?:Until|All))/,
                    P = { children: !0, contents: !0, next: !0, prev: !0 };
                function R(t, e) {
                    for (; (t = t[e]) && 1 !== t.nodeType; );
                    return t;
                }
                T.fn.extend({
                    has: function(t) {
                        var e = T(t, this),
                            n = e.length;
                        return this.filter(function() {
                            for (var t = 0; t < n; t++)
                                if (T.contains(this, e[t])) return !0;
                        });
                    },
                    closest: function(t, e) {
                        var n,
                            r = 0,
                            o = this.length,
                            i = [],
                            a = 'string' != typeof t && T(t);
                        if (!j.test(t))
                            for (; r < o; r++)
                                for (
                                    n = this[r];
                                    n && n !== e;
                                    n = n.parentNode
                                )
                                    if (
                                        n.nodeType < 11 &&
                                        (a
                                            ? a.index(n) > -1
                                            : 1 === n.nodeType &&
                                              T.find.matchesSelector(n, t))
                                    ) {
                                        i.push(n);
                                        break;
                                    }
                        return this.pushStack(
                            i.length > 1 ? T.uniqueSort(i) : i
                        );
                    },
                    index: function(t) {
                        return t
                            ? 'string' == typeof t
                                ? f.call(T(t), this[0])
                                : f.call(this, t.jquery ? t[0] : t)
                            : this[0] && this[0].parentNode
                            ? this.first().prevAll().length
                            : -1;
                    },
                    add: function(t, e) {
                        return this.pushStack(
                            T.uniqueSort(T.merge(this.get(), T(t, e)))
                        );
                    },
                    addBack: function(t) {
                        return this.add(
                            null == t
                                ? this.prevObject
                                : this.prevObject.filter(t)
                        );
                    }
                }),
                    T.each(
                        {
                            parent: function(t) {
                                var e = t.parentNode;
                                return e && 11 !== e.nodeType ? e : null;
                            },
                            parents: function(t) {
                                return C(t, 'parentNode');
                            },
                            parentsUntil: function(t, e, n) {
                                return C(t, 'parentNode', n);
                            },
                            next: function(t) {
                                return R(t, 'nextSibling');
                            },
                            prev: function(t) {
                                return R(t, 'previousSibling');
                            },
                            nextAll: function(t) {
                                return C(t, 'nextSibling');
                            },
                            prevAll: function(t) {
                                return C(t, 'previousSibling');
                            },
                            nextUntil: function(t, e, n) {
                                return C(t, 'nextSibling', n);
                            },
                            prevUntil: function(t, e, n) {
                                return C(t, 'previousSibling', n);
                            },
                            siblings: function(t) {
                                return S((t.parentNode || {}).firstChild, t);
                            },
                            children: function(t) {
                                return S(t.firstChild);
                            },
                            contents: function(t) {
                                return N(t, 'iframe')
                                    ? t.contentDocument
                                    : (N(t, 'template') && (t = t.content || t),
                                      T.merge([], t.childNodes));
                            }
                        },
                        function(t, e) {
                            T.fn[t] = function(n, r) {
                                var o = T.map(this, e, n);
                                return (
                                    'Until' !== t.slice(-5) && (r = n),
                                    r &&
                                        'string' == typeof r &&
                                        (o = T.filter(r, o)),
                                    this.length > 1 &&
                                        (P[t] || T.uniqueSort(o),
                                        M.test(t) && o.reverse()),
                                    this.pushStack(o)
                                );
                            };
                        }
                    );
                var H = /[^\x20\t\r\n\f]+/g;
                function I(t) {
                    return t;
                }
                function $(t) {
                    throw t;
                }
                function B(t, e, n, r) {
                    var o;
                    try {
                        t && v((o = t.promise))
                            ? o
                                  .call(t)
                                  .done(e)
                                  .fail(n)
                            : t && v((o = t.then))
                            ? o.call(t, e, n)
                            : e.apply(void 0, [t].slice(r));
                    } catch (t) {
                        n.apply(void 0, [t]);
                    }
                }
                (T.Callbacks = function(t) {
                    t =
                        'string' == typeof t
                            ? (function(t) {
                                  var e = {};
                                  return (
                                      T.each(t.match(H) || [], function(t, n) {
                                          e[n] = !0;
                                      }),
                                      e
                                  );
                              })(t)
                            : T.extend({}, t);
                    var e,
                        n,
                        r,
                        o,
                        i = [],
                        a = [],
                        s = -1,
                        l = function() {
                            for (o = o || t.once, r = e = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < i.length; )
                                    !1 === i[s].apply(n[0], n[1]) &&
                                        t.stopOnFalse &&
                                        ((s = i.length), (n = !1));
                            t.memory || (n = !1),
                                (e = !1),
                                o && (i = n ? [] : '');
                        },
                        u = {
                            add: function() {
                                return (
                                    i &&
                                        (n &&
                                            !e &&
                                            ((s = i.length - 1), a.push(n)),
                                        (function e(n) {
                                            T.each(n, function(n, r) {
                                                v(r)
                                                    ? (t.unique && u.has(r)) ||
                                                      i.push(r)
                                                    : r &&
                                                      r.length &&
                                                      'string' !== _(r) &&
                                                      e(r);
                                            });
                                        })(arguments),
                                        n && !e && l()),
                                    this
                                );
                            },
                            remove: function() {
                                return (
                                    T.each(arguments, function(t, e) {
                                        for (
                                            var n;
                                            (n = T.inArray(e, i, n)) > -1;

                                        )
                                            i.splice(n, 1), n <= s && s--;
                                    }),
                                    this
                                );
                            },
                            has: function(t) {
                                return t ? T.inArray(t, i) > -1 : i.length > 0;
                            },
                            empty: function() {
                                return i && (i = []), this;
                            },
                            disable: function() {
                                return (o = a = []), (i = n = ''), this;
                            },
                            disabled: function() {
                                return !i;
                            },
                            lock: function() {
                                return (
                                    (o = a = []), n || e || (i = n = ''), this
                                );
                            },
                            locked: function() {
                                return !!o;
                            },
                            fireWith: function(t, n) {
                                return (
                                    o ||
                                        ((n = [
                                            t,
                                            (n = n || []).slice ? n.slice() : n
                                        ]),
                                        a.push(n),
                                        e || l()),
                                    this
                                );
                            },
                            fire: function() {
                                return u.fireWith(this, arguments), this;
                            },
                            fired: function() {
                                return !!r;
                            }
                        };
                    return u;
                }),
                    T.extend({
                        Deferred: function(t) {
                            var e = [
                                    [
                                        'notify',
                                        'progress',
                                        T.Callbacks('memory'),
                                        T.Callbacks('memory'),
                                        2
                                    ],
                                    [
                                        'resolve',
                                        'done',
                                        T.Callbacks('once memory'),
                                        T.Callbacks('once memory'),
                                        0,
                                        'resolved'
                                    ],
                                    [
                                        'reject',
                                        'fail',
                                        T.Callbacks('once memory'),
                                        T.Callbacks('once memory'),
                                        1,
                                        'rejected'
                                    ]
                                ],
                                r = 'pending',
                                o = {
                                    state: function() {
                                        return r;
                                    },
                                    always: function() {
                                        return (
                                            i.done(arguments).fail(arguments),
                                            this
                                        );
                                    },
                                    catch: function(t) {
                                        return o.then(null, t);
                                    },
                                    pipe: function() {
                                        var t = arguments;
                                        return T.Deferred(function(n) {
                                            T.each(e, function(e, r) {
                                                var o = v(t[r[4]]) && t[r[4]];
                                                i[r[1]](function() {
                                                    var t =
                                                        o &&
                                                        o.apply(
                                                            this,
                                                            arguments
                                                        );
                                                    t && v(t.promise)
                                                        ? t
                                                              .promise()
                                                              .progress(
                                                                  n.notify
                                                              )
                                                              .done(n.resolve)
                                                              .fail(n.reject)
                                                        : n[r[0] + 'With'](
                                                              this,
                                                              o
                                                                  ? [t]
                                                                  : arguments
                                                          );
                                                });
                                            }),
                                                (t = null);
                                        }).promise();
                                    },
                                    then: function(t, r, o) {
                                        var i = 0;
                                        function a(t, e, r, o) {
                                            return function() {
                                                var s = this,
                                                    l = arguments,
                                                    u = function() {
                                                        var n, u;
                                                        if (!(t < i)) {
                                                            if (
                                                                (n = r.apply(
                                                                    s,
                                                                    l
                                                                )) ===
                                                                e.promise()
                                                            )
                                                                throw new TypeError(
                                                                    'Thenable self-resolution'
                                                                );
                                                            (u =
                                                                n &&
                                                                ('object' ==
                                                                    typeof n ||
                                                                    'function' ==
                                                                        typeof n) &&
                                                                n.then),
                                                                v(u)
                                                                    ? o
                                                                        ? u.call(
                                                                              n,
                                                                              a(
                                                                                  i,
                                                                                  e,
                                                                                  I,
                                                                                  o
                                                                              ),
                                                                              a(
                                                                                  i,
                                                                                  e,
                                                                                  $,
                                                                                  o
                                                                              )
                                                                          )
                                                                        : (i++,
                                                                          u.call(
                                                                              n,
                                                                              a(
                                                                                  i,
                                                                                  e,
                                                                                  I,
                                                                                  o
                                                                              ),
                                                                              a(
                                                                                  i,
                                                                                  e,
                                                                                  $,
                                                                                  o
                                                                              ),
                                                                              a(
                                                                                  i,
                                                                                  e,
                                                                                  I,
                                                                                  e.notifyWith
                                                                              )
                                                                          ))
                                                                    : (r !==
                                                                          I &&
                                                                          ((s = void 0),
                                                                          (l = [
                                                                              n
                                                                          ])),
                                                                      (o ||
                                                                          e.resolveWith)(
                                                                          s,
                                                                          l
                                                                      ));
                                                        }
                                                    },
                                                    c = o
                                                        ? u
                                                        : function() {
                                                              try {
                                                                  u();
                                                              } catch (n) {
                                                                  T.Deferred
                                                                      .exceptionHook &&
                                                                      T.Deferred.exceptionHook(
                                                                          n,
                                                                          c.stackTrace
                                                                      ),
                                                                      t + 1 >=
                                                                          i &&
                                                                          (r !==
                                                                              $ &&
                                                                              ((s = void 0),
                                                                              (l = [
                                                                                  n
                                                                              ])),
                                                                          e.rejectWith(
                                                                              s,
                                                                              l
                                                                          ));
                                                              }
                                                          };
                                                t
                                                    ? c()
                                                    : (T.Deferred
                                                          .getStackHook &&
                                                          (c.stackTrace = T.Deferred.getStackHook()),
                                                      n.setTimeout(c));
                                            };
                                        }
                                        return T.Deferred(function(n) {
                                            e[0][3].add(
                                                a(
                                                    0,
                                                    n,
                                                    v(o) ? o : I,
                                                    n.notifyWith
                                                )
                                            ),
                                                e[1][3].add(
                                                    a(0, n, v(t) ? t : I)
                                                ),
                                                e[2][3].add(
                                                    a(0, n, v(r) ? r : $)
                                                );
                                        }).promise();
                                    },
                                    promise: function(t) {
                                        return null != t ? T.extend(t, o) : o;
                                    }
                                },
                                i = {};
                            return (
                                T.each(e, function(t, n) {
                                    var a = n[2],
                                        s = n[5];
                                    (o[n[1]] = a.add),
                                        s &&
                                            a.add(
                                                function() {
                                                    r = s;
                                                },
                                                e[3 - t][2].disable,
                                                e[3 - t][3].disable,
                                                e[0][2].lock,
                                                e[0][3].lock
                                            ),
                                        a.add(n[3].fire),
                                        (i[n[0]] = function() {
                                            return (
                                                i[n[0] + 'With'](
                                                    this === i ? void 0 : this,
                                                    arguments
                                                ),
                                                this
                                            );
                                        }),
                                        (i[n[0] + 'With'] = a.fireWith);
                                }),
                                o.promise(i),
                                t && t.call(i, i),
                                i
                            );
                        },
                        when: function(t) {
                            var e = arguments.length,
                                n = e,
                                r = Array(n),
                                o = l.call(arguments),
                                i = T.Deferred(),
                                a = function(t) {
                                    return function(n) {
                                        (r[t] = this),
                                            (o[t] =
                                                arguments.length > 1
                                                    ? l.call(arguments)
                                                    : n),
                                            --e || i.resolveWith(r, o);
                                    };
                                };
                            if (
                                e <= 1 &&
                                (B(t, i.done(a(n)).resolve, i.reject, !e),
                                'pending' === i.state() || v(o[n] && o[n].then))
                            )
                                return i.then();
                            for (; n--; ) B(o[n], a(n), i.reject);
                            return i.promise();
                        }
                    });
                var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                (T.Deferred.exceptionHook = function(t, e) {
                    n.console &&
                        n.console.warn &&
                        t &&
                        F.test(t.name) &&
                        n.console.warn(
                            'jQuery.Deferred exception: ' + t.message,
                            t.stack,
                            e
                        );
                }),
                    (T.readyException = function(t) {
                        n.setTimeout(function() {
                            throw t;
                        });
                    });
                var U = T.Deferred();
                function W() {
                    a.removeEventListener('DOMContentLoaded', W),
                        n.removeEventListener('load', W),
                        T.ready();
                }
                (T.fn.ready = function(t) {
                    return (
                        U.then(t).catch(function(t) {
                            T.readyException(t);
                        }),
                        this
                    );
                }),
                    T.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(t) {
                            (!0 === t ? --T.readyWait : T.isReady) ||
                                ((T.isReady = !0),
                                (!0 !== t && --T.readyWait > 0) ||
                                    U.resolveWith(a, [T]));
                        }
                    }),
                    (T.ready.then = U.then),
                    'complete' === a.readyState ||
                    ('loading' !== a.readyState && !a.documentElement.doScroll)
                        ? n.setTimeout(T.ready)
                        : (a.addEventListener('DOMContentLoaded', W),
                          n.addEventListener('load', W));
                var z = function(t, e, n, r, o, i, a) {
                        var s = 0,
                            l = t.length,
                            u = null == n;
                        if ('object' === _(n))
                            for (s in ((o = !0), n)) z(t, e, s, n[s], !0, i, a);
                        else if (
                            void 0 !== r &&
                            ((o = !0),
                            v(r) || (a = !0),
                            u &&
                                (a
                                    ? (e.call(t, r), (e = null))
                                    : ((u = e),
                                      (e = function(t, e, n) {
                                          return u.call(T(t), n);
                                      }))),
                            e)
                        )
                            for (; s < l; s++)
                                e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                        return o ? t : u ? e.call(t) : l ? e(t[0], n) : i;
                    },
                    X = /^-ms-/,
                    G = /-([a-z])/g;
                function V(t, e) {
                    return e.toUpperCase();
                }
                function Y(t) {
                    return t.replace(X, 'ms-').replace(G, V);
                }
                var J = function(t) {
                    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
                };
                function Q() {
                    this.expando = T.expando + Q.uid++;
                }
                (Q.uid = 1),
                    (Q.prototype = {
                        cache: function(t) {
                            var e = t[this.expando];
                            return (
                                e ||
                                    ((e = {}),
                                    J(t) &&
                                        (t.nodeType
                                            ? (t[this.expando] = e)
                                            : Object.defineProperty(
                                                  t,
                                                  this.expando,
                                                  { value: e, configurable: !0 }
                                              ))),
                                e
                            );
                        },
                        set: function(t, e, n) {
                            var r,
                                o = this.cache(t);
                            if ('string' == typeof e) o[Y(e)] = n;
                            else for (r in e) o[Y(r)] = e[r];
                            return o;
                        },
                        get: function(t, e) {
                            return void 0 === e
                                ? this.cache(t)
                                : t[this.expando] && t[this.expando][Y(e)];
                        },
                        access: function(t, e, n) {
                            return void 0 === e ||
                                (e && 'string' == typeof e && void 0 === n)
                                ? this.get(t, e)
                                : (this.set(t, e, n), void 0 !== n ? n : e);
                        },
                        remove: function(t, e) {
                            var n,
                                r = t[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== e) {
                                    n = (e = Array.isArray(e)
                                        ? e.map(Y)
                                        : (e = Y(e)) in r
                                        ? [e]
                                        : e.match(H) || []).length;
                                    for (; n--; ) delete r[e[n]];
                                }
                                (void 0 === e || T.isEmptyObject(r)) &&
                                    (t.nodeType
                                        ? (t[this.expando] = void 0)
                                        : delete t[this.expando]);
                            }
                        },
                        hasData: function(t) {
                            var e = t[this.expando];
                            return void 0 !== e && !T.isEmptyObject(e);
                        }
                    });
                var K = new Q(),
                    Z = new Q(),
                    tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    et = /[A-Z]/g;
                function nt(t, e, n) {
                    var r;
                    if (void 0 === n && 1 === t.nodeType)
                        if (
                            ((r = 'data-' + e.replace(et, '-$&').toLowerCase()),
                            'string' == typeof (n = t.getAttribute(r)))
                        ) {
                            try {
                                n = (function(t) {
                                    return (
                                        'true' === t ||
                                        ('false' !== t &&
                                            ('null' === t
                                                ? null
                                                : t === +t + ''
                                                ? +t
                                                : tt.test(t)
                                                ? JSON.parse(t)
                                                : t))
                                    );
                                })(n);
                            } catch (t) {}
                            Z.set(t, e, n);
                        } else n = void 0;
                    return n;
                }
                T.extend({
                    hasData: function(t) {
                        return Z.hasData(t) || K.hasData(t);
                    },
                    data: function(t, e, n) {
                        return Z.access(t, e, n);
                    },
                    removeData: function(t, e) {
                        Z.remove(t, e);
                    },
                    _data: function(t, e, n) {
                        return K.access(t, e, n);
                    },
                    _removeData: function(t, e) {
                        K.remove(t, e);
                    }
                }),
                    T.fn.extend({
                        data: function(t, e) {
                            var n,
                                r,
                                o,
                                i = this[0],
                                a = i && i.attributes;
                            if (void 0 === t) {
                                if (
                                    this.length &&
                                    ((o = Z.get(i)),
                                    1 === i.nodeType &&
                                        !K.get(i, 'hasDataAttrs'))
                                ) {
                                    for (n = a.length; n--; )
                                        a[n] &&
                                            0 ===
                                                (r = a[n].name).indexOf(
                                                    'data-'
                                                ) &&
                                            ((r = Y(r.slice(5))),
                                            nt(i, r, o[r]));
                                    K.set(i, 'hasDataAttrs', !0);
                                }
                                return o;
                            }
                            return 'object' == typeof t
                                ? this.each(function() {
                                      Z.set(this, t);
                                  })
                                : z(
                                      this,
                                      function(e) {
                                          var n;
                                          if (i && void 0 === e)
                                              return void 0 !==
                                                  (n = Z.get(i, t))
                                                  ? n
                                                  : void 0 !== (n = nt(i, t))
                                                  ? n
                                                  : void 0;
                                          this.each(function() {
                                              Z.set(this, t, e);
                                          });
                                      },
                                      null,
                                      e,
                                      arguments.length > 1,
                                      null,
                                      !0
                                  );
                        },
                        removeData: function(t) {
                            return this.each(function() {
                                Z.remove(this, t);
                            });
                        }
                    }),
                    T.extend({
                        queue: function(t, e, n) {
                            var r;
                            if (t)
                                return (
                                    (e = (e || 'fx') + 'queue'),
                                    (r = K.get(t, e)),
                                    n &&
                                        (!r || Array.isArray(n)
                                            ? (r = K.access(
                                                  t,
                                                  e,
                                                  T.makeArray(n)
                                              ))
                                            : r.push(n)),
                                    r || []
                                );
                        },
                        dequeue: function(t, e) {
                            e = e || 'fx';
                            var n = T.queue(t, e),
                                r = n.length,
                                o = n.shift(),
                                i = T._queueHooks(t, e);
                            'inprogress' === o && ((o = n.shift()), r--),
                                o &&
                                    ('fx' === e && n.unshift('inprogress'),
                                    delete i.stop,
                                    o.call(
                                        t,
                                        function() {
                                            T.dequeue(t, e);
                                        },
                                        i
                                    )),
                                !r && i && i.empty.fire();
                        },
                        _queueHooks: function(t, e) {
                            var n = e + 'queueHooks';
                            return (
                                K.get(t, n) ||
                                K.access(t, n, {
                                    empty: T.Callbacks('once memory').add(
                                        function() {
                                            K.remove(t, [e + 'queue', n]);
                                        }
                                    )
                                })
                            );
                        }
                    }),
                    T.fn.extend({
                        queue: function(t, e) {
                            var n = 2;
                            return (
                                'string' != typeof t &&
                                    ((e = t), (t = 'fx'), n--),
                                arguments.length < n
                                    ? T.queue(this[0], t)
                                    : void 0 === e
                                    ? this
                                    : this.each(function() {
                                          var n = T.queue(this, t, e);
                                          T._queueHooks(this, t),
                                              'fx' === t &&
                                                  'inprogress' !== n[0] &&
                                                  T.dequeue(this, t);
                                      })
                            );
                        },
                        dequeue: function(t) {
                            return this.each(function() {
                                T.dequeue(this, t);
                            });
                        },
                        clearQueue: function(t) {
                            return this.queue(t || 'fx', []);
                        },
                        promise: function(t, e) {
                            var n,
                                r = 1,
                                o = T.Deferred(),
                                i = this,
                                a = this.length,
                                s = function() {
                                    --r || o.resolveWith(i, [i]);
                                };
                            for (
                                'string' != typeof t && ((e = t), (t = void 0)),
                                    t = t || 'fx';
                                a--;

                            )
                                (n = K.get(i[a], t + 'queueHooks')) &&
                                    n.empty &&
                                    (r++, n.empty.add(s));
                            return s(), o.promise(e);
                        }
                    });
                var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    ot = new RegExp('^(?:([+-])=|)(' + rt + ')([a-z%]*)$', 'i'),
                    it = ['Top', 'Right', 'Bottom', 'Left'],
                    at = function(t, e) {
                        return (
                            'none' === (t = e || t).style.display ||
                            ('' === t.style.display &&
                                T.contains(t.ownerDocument, t) &&
                                'none' === T.css(t, 'display'))
                        );
                    },
                    st = function(t, e, n, r) {
                        var o,
                            i,
                            a = {};
                        for (i in e) (a[i] = t.style[i]), (t.style[i] = e[i]);
                        for (i in ((o = n.apply(t, r || [])), e))
                            t.style[i] = a[i];
                        return o;
                    };
                function lt(t, e, n, r) {
                    var o,
                        i,
                        a = 20,
                        s = r
                            ? function() {
                                  return r.cur();
                              }
                            : function() {
                                  return T.css(t, e, '');
                              },
                        l = s(),
                        u = (n && n[3]) || (T.cssNumber[e] ? '' : 'px'),
                        c =
                            (T.cssNumber[e] || ('px' !== u && +l)) &&
                            ot.exec(T.css(t, e));
                    if (c && c[3] !== u) {
                        for (l /= 2, u = u || c[3], c = +l || 1; a--; )
                            T.style(t, e, c + u),
                                (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 &&
                                    (a = 0),
                                (c /= i);
                        (c *= 2), T.style(t, e, c + u), (n = n || []);
                    }
                    return (
                        n &&
                            ((c = +c || +l || 0),
                            (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                            r && ((r.unit = u), (r.start = c), (r.end = o))),
                        o
                    );
                }
                var ut = {};
                function ct(t) {
                    var e,
                        n = t.ownerDocument,
                        r = t.nodeName,
                        o = ut[r];
                    return (
                        o ||
                        ((e = n.body.appendChild(n.createElement(r))),
                        (o = T.css(e, 'display')),
                        e.parentNode.removeChild(e),
                        'none' === o && (o = 'block'),
                        (ut[r] = o),
                        o)
                    );
                }
                function ft(t, e) {
                    for (var n, r, o = [], i = 0, a = t.length; i < a; i++)
                        (r = t[i]).style &&
                            ((n = r.style.display),
                            e
                                ? ('none' === n &&
                                      ((o[i] = K.get(r, 'display') || null),
                                      o[i] || (r.style.display = '')),
                                  '' === r.style.display &&
                                      at(r) &&
                                      (o[i] = ct(r)))
                                : 'none' !== n &&
                                  ((o[i] = 'none'), K.set(r, 'display', n)));
                    for (i = 0; i < a; i++)
                        null != o[i] && (t[i].style.display = o[i]);
                    return t;
                }
                T.fn.extend({
                    show: function() {
                        return ft(this, !0);
                    },
                    hide: function() {
                        return ft(this);
                    },
                    toggle: function(t) {
                        return 'boolean' == typeof t
                            ? t
                                ? this.show()
                                : this.hide()
                            : this.each(function() {
                                  at(this) ? T(this).show() : T(this).hide();
                              });
                    }
                });
                var pt = /^(?:checkbox|radio)$/i,
                    dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                    ht = /^$|^module$|\/(?:java|ecma)script/i,
                    yt = {
                        option: [
                            1,
                            "<select multiple='multiple'>",
                            '</select>'
                        ],
                        thead: [1, '<table>', '</table>'],
                        col: [2, '<table><colgroup>', '</colgroup></table>'],
                        tr: [2, '<table><tbody>', '</tbody></table>'],
                        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
                        _default: [0, '', '']
                    };
                function gt(t, e) {
                    var n;
                    return (
                        (n =
                            void 0 !== t.getElementsByTagName
                                ? t.getElementsByTagName(e || '*')
                                : void 0 !== t.querySelectorAll
                                ? t.querySelectorAll(e || '*')
                                : []),
                        void 0 === e || (e && N(t, e)) ? T.merge([t], n) : n
                    );
                }
                function mt(t, e) {
                    for (var n = 0, r = t.length; n < r; n++)
                        K.set(
                            t[n],
                            'globalEval',
                            !e || K.get(e[n], 'globalEval')
                        );
                }
                (yt.optgroup = yt.option),
                    (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
                    (yt.th = yt.td);
                var vt = /<|&#?\w+;/;
                function bt(t, e, n, r, o) {
                    for (
                        var i,
                            a,
                            s,
                            l,
                            u,
                            c,
                            f = e.createDocumentFragment(),
                            p = [],
                            d = 0,
                            h = t.length;
                        d < h;
                        d++
                    )
                        if ((i = t[d]) || 0 === i)
                            if ('object' === _(i))
                                T.merge(p, i.nodeType ? [i] : i);
                            else if (vt.test(i)) {
                                for (
                                    a =
                                        a ||
                                        f.appendChild(e.createElement('div')),
                                        s = (dt.exec(i) || [
                                            '',
                                            ''
                                        ])[1].toLowerCase(),
                                        l = yt[s] || yt._default,
                                        a.innerHTML =
                                            l[1] + T.htmlPrefilter(i) + l[2],
                                        c = l[0];
                                    c--;

                                )
                                    a = a.lastChild;
                                T.merge(p, a.childNodes),
                                    ((a = f.firstChild).textContent = '');
                            } else p.push(e.createTextNode(i));
                    for (f.textContent = '', d = 0; (i = p[d++]); )
                        if (r && T.inArray(i, r) > -1) o && o.push(i);
                        else if (
                            ((u = T.contains(i.ownerDocument, i)),
                            (a = gt(f.appendChild(i), 'script')),
                            u && mt(a),
                            n)
                        )
                            for (c = 0; (i = a[c++]); )
                                ht.test(i.type || '') && n.push(i);
                    return f;
                }
                !(function() {
                    var t = a
                            .createDocumentFragment()
                            .appendChild(a.createElement('div')),
                        e = a.createElement('input');
                    e.setAttribute('type', 'radio'),
                        e.setAttribute('checked', 'checked'),
                        e.setAttribute('name', 't'),
                        t.appendChild(e),
                        (m.checkClone = t
                            .cloneNode(!0)
                            .cloneNode(!0).lastChild.checked),
                        (t.innerHTML = '<textarea>x</textarea>'),
                        (m.noCloneChecked = !!t.cloneNode(!0).lastChild
                            .defaultValue);
                })();
                var xt = a.documentElement,
                    wt = /^key/,
                    _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    Tt = /^([^.]*)(?:\.(.+)|)/;
                function At() {
                    return !0;
                }
                function kt() {
                    return !1;
                }
                function Et() {
                    try {
                        return a.activeElement;
                    } catch (t) {}
                }
                function Ct(t, e, n, r, o, i) {
                    var a, s;
                    if ('object' == typeof e) {
                        for (s in ('string' != typeof n &&
                            ((r = r || n), (n = void 0)),
                        e))
                            Ct(t, s, n, r, e[s], i);
                        return t;
                    }
                    if (
                        (null == r && null == o
                            ? ((o = n), (r = n = void 0))
                            : null == o &&
                              ('string' == typeof n
                                  ? ((o = r), (r = void 0))
                                  : ((o = r), (r = n), (n = void 0))),
                        !1 === o)
                    )
                        o = kt;
                    else if (!o) return t;
                    return (
                        1 === i &&
                            ((a = o),
                            ((o = function(t) {
                                return T().off(t), a.apply(this, arguments);
                            }).guid = a.guid || (a.guid = T.guid++))),
                        t.each(function() {
                            T.event.add(this, e, o, r, n);
                        })
                    );
                }
                (T.event = {
                    global: {},
                    add: function(t, e, n, r, o) {
                        var i,
                            a,
                            s,
                            l,
                            u,
                            c,
                            f,
                            p,
                            d,
                            h,
                            y,
                            g = K.get(t);
                        if (g)
                            for (
                                n.handler &&
                                    ((n = (i = n).handler), (o = i.selector)),
                                    o && T.find.matchesSelector(xt, o),
                                    n.guid || (n.guid = T.guid++),
                                    (l = g.events) || (l = g.events = {}),
                                    (a = g.handle) ||
                                        (a = g.handle = function(e) {
                                            return void 0 !== T &&
                                                T.event.triggered !== e.type
                                                ? T.event.dispatch.apply(
                                                      t,
                                                      arguments
                                                  )
                                                : void 0;
                                        }),
                                    u = (e = (e || '').match(H) || ['']).length;
                                u--;

                            )
                                (d = y = (s = Tt.exec(e[u]) || [])[1]),
                                    (h = (s[2] || '').split('.').sort()),
                                    d &&
                                        ((f = T.event.special[d] || {}),
                                        (d =
                                            (o ? f.delegateType : f.bindType) ||
                                            d),
                                        (f = T.event.special[d] || {}),
                                        (c = T.extend(
                                            {
                                                type: d,
                                                origType: y,
                                                data: r,
                                                handler: n,
                                                guid: n.guid,
                                                selector: o,
                                                needsContext:
                                                    o &&
                                                    T.expr.match.needsContext.test(
                                                        o
                                                    ),
                                                namespace: h.join('.')
                                            },
                                            i
                                        )),
                                        (p = l[d]) ||
                                            (((p = l[
                                                d
                                            ] = []).delegateCount = 0),
                                            (f.setup &&
                                                !1 !==
                                                    f.setup.call(t, r, h, a)) ||
                                                (t.addEventListener &&
                                                    t.addEventListener(d, a))),
                                        f.add &&
                                            (f.add.call(t, c),
                                            c.handler.guid ||
                                                (c.handler.guid = n.guid)),
                                        o
                                            ? p.splice(p.delegateCount++, 0, c)
                                            : p.push(c),
                                        (T.event.global[d] = !0));
                    },
                    remove: function(t, e, n, r, o) {
                        var i,
                            a,
                            s,
                            l,
                            u,
                            c,
                            f,
                            p,
                            d,
                            h,
                            y,
                            g = K.hasData(t) && K.get(t);
                        if (g && (l = g.events)) {
                            for (
                                u = (e = (e || '').match(H) || ['']).length;
                                u--;

                            )
                                if (
                                    ((d = y = (s = Tt.exec(e[u]) || [])[1]),
                                    (h = (s[2] || '').split('.').sort()),
                                    d)
                                ) {
                                    for (
                                        f = T.event.special[d] || {},
                                            p =
                                                l[
                                                    (d =
                                                        (r
                                                            ? f.delegateType
                                                            : f.bindType) || d)
                                                ] || [],
                                            s =
                                                s[2] &&
                                                new RegExp(
                                                    '(^|\\.)' +
                                                        h.join(
                                                            '\\.(?:.*\\.|)'
                                                        ) +
                                                        '(\\.|$)'
                                                ),
                                            a = i = p.length;
                                        i--;

                                    )
                                        (c = p[i]),
                                            (!o && y !== c.origType) ||
                                                (n && n.guid !== c.guid) ||
                                                (s && !s.test(c.namespace)) ||
                                                (r &&
                                                    r !== c.selector &&
                                                    ('**' !== r ||
                                                        !c.selector)) ||
                                                (p.splice(i, 1),
                                                c.selector && p.delegateCount--,
                                                f.remove &&
                                                    f.remove.call(t, c));
                                    a &&
                                        !p.length &&
                                        ((f.teardown &&
                                            !1 !==
                                                f.teardown.call(
                                                    t,
                                                    h,
                                                    g.handle
                                                )) ||
                                            T.removeEvent(t, d, g.handle),
                                        delete l[d]);
                                } else
                                    for (d in l)
                                        T.event.remove(t, d + e[u], n, r, !0);
                            T.isEmptyObject(l) && K.remove(t, 'handle events');
                        }
                    },
                    dispatch: function(t) {
                        var e,
                            n,
                            r,
                            o,
                            i,
                            a,
                            s = T.event.fix(t),
                            l = new Array(arguments.length),
                            u = (K.get(this, 'events') || {})[s.type] || [],
                            c = T.event.special[s.type] || {};
                        for (l[0] = s, e = 1; e < arguments.length; e++)
                            l[e] = arguments[e];
                        if (
                            ((s.delegateTarget = this),
                            !c.preDispatch ||
                                !1 !== c.preDispatch.call(this, s))
                        ) {
                            for (
                                a = T.event.handlers.call(this, s, u), e = 0;
                                (o = a[e++]) && !s.isPropagationStopped();

                            )
                                for (
                                    s.currentTarget = o.elem, n = 0;
                                    (i = o.handlers[n++]) &&
                                    !s.isImmediatePropagationStopped();

                                )
                                    (s.rnamespace &&
                                        !s.rnamespace.test(i.namespace)) ||
                                        ((s.handleObj = i),
                                        (s.data = i.data),
                                        void 0 !==
                                            (r = (
                                                (
                                                    T.event.special[
                                                        i.origType
                                                    ] || {}
                                                ).handle || i.handler
                                            ).apply(o.elem, l)) &&
                                            !1 === (s.result = r) &&
                                            (s.preventDefault(),
                                            s.stopPropagation()));
                            return (
                                c.postDispatch && c.postDispatch.call(this, s),
                                s.result
                            );
                        }
                    },
                    handlers: function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            a,
                            s = [],
                            l = e.delegateCount,
                            u = t.target;
                        if (
                            l &&
                            u.nodeType &&
                            !('click' === t.type && t.button >= 1)
                        )
                            for (; u !== this; u = u.parentNode || this)
                                if (
                                    1 === u.nodeType &&
                                    ('click' !== t.type || !0 !== u.disabled)
                                ) {
                                    for (i = [], a = {}, n = 0; n < l; n++)
                                        void 0 ===
                                            a[
                                                (o = (r = e[n]).selector + ' ')
                                            ] &&
                                            (a[o] = r.needsContext
                                                ? T(o, this).index(u) > -1
                                                : T.find(o, this, null, [u])
                                                      .length),
                                            a[o] && i.push(r);
                                    i.length &&
                                        s.push({ elem: u, handlers: i });
                                }
                        return (
                            (u = this),
                            l < e.length &&
                                s.push({ elem: u, handlers: e.slice(l) }),
                            s
                        );
                    },
                    addProp: function(t, e) {
                        Object.defineProperty(T.Event.prototype, t, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(e)
                                ? function() {
                                      if (this.originalEvent)
                                          return e(this.originalEvent);
                                  }
                                : function() {
                                      if (this.originalEvent)
                                          return this.originalEvent[t];
                                  },
                            set: function(e) {
                                Object.defineProperty(this, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: e
                                });
                            }
                        });
                    },
                    fix: function(t) {
                        return t[T.expando] ? t : new T.Event(t);
                    },
                    special: {
                        load: { noBubble: !0 },
                        focus: {
                            trigger: function() {
                                if (this !== Et() && this.focus)
                                    return this.focus(), !1;
                            },
                            delegateType: 'focusin'
                        },
                        blur: {
                            trigger: function() {
                                if (this === Et() && this.blur)
                                    return this.blur(), !1;
                            },
                            delegateType: 'focusout'
                        },
                        click: {
                            trigger: function() {
                                if (
                                    'checkbox' === this.type &&
                                    this.click &&
                                    N(this, 'input')
                                )
                                    return this.click(), !1;
                            },
                            _default: function(t) {
                                return N(t.target, 'a');
                            }
                        },
                        beforeunload: {
                            postDispatch: function(t) {
                                void 0 !== t.result &&
                                    t.originalEvent &&
                                    (t.originalEvent.returnValue = t.result);
                            }
                        }
                    }
                }),
                    (T.removeEvent = function(t, e, n) {
                        t.removeEventListener && t.removeEventListener(e, n);
                    }),
                    (T.Event = function(t, e) {
                        if (!(this instanceof T.Event))
                            return new T.Event(t, e);
                        t && t.type
                            ? ((this.originalEvent = t),
                              (this.type = t.type),
                              (this.isDefaultPrevented =
                                  t.defaultPrevented ||
                                  (void 0 === t.defaultPrevented &&
                                      !1 === t.returnValue)
                                      ? At
                                      : kt),
                              (this.target =
                                  t.target && 3 === t.target.nodeType
                                      ? t.target.parentNode
                                      : t.target),
                              (this.currentTarget = t.currentTarget),
                              (this.relatedTarget = t.relatedTarget))
                            : (this.type = t),
                            e && T.extend(this, e),
                            (this.timeStamp = (t && t.timeStamp) || Date.now()),
                            (this[T.expando] = !0);
                    }),
                    (T.Event.prototype = {
                        constructor: T.Event,
                        isDefaultPrevented: kt,
                        isPropagationStopped: kt,
                        isImmediatePropagationStopped: kt,
                        isSimulated: !1,
                        preventDefault: function() {
                            var t = this.originalEvent;
                            (this.isDefaultPrevented = At),
                                t && !this.isSimulated && t.preventDefault();
                        },
                        stopPropagation: function() {
                            var t = this.originalEvent;
                            (this.isPropagationStopped = At),
                                t && !this.isSimulated && t.stopPropagation();
                        },
                        stopImmediatePropagation: function() {
                            var t = this.originalEvent;
                            (this.isImmediatePropagationStopped = At),
                                t &&
                                    !this.isSimulated &&
                                    t.stopImmediatePropagation(),
                                this.stopPropagation();
                        }
                    }),
                    T.each(
                        {
                            altKey: !0,
                            bubbles: !0,
                            cancelable: !0,
                            changedTouches: !0,
                            ctrlKey: !0,
                            detail: !0,
                            eventPhase: !0,
                            metaKey: !0,
                            pageX: !0,
                            pageY: !0,
                            shiftKey: !0,
                            view: !0,
                            char: !0,
                            charCode: !0,
                            key: !0,
                            keyCode: !0,
                            button: !0,
                            buttons: !0,
                            clientX: !0,
                            clientY: !0,
                            offsetX: !0,
                            offsetY: !0,
                            pointerId: !0,
                            pointerType: !0,
                            screenX: !0,
                            screenY: !0,
                            targetTouches: !0,
                            toElement: !0,
                            touches: !0,
                            which: function(t) {
                                var e = t.button;
                                return null == t.which && wt.test(t.type)
                                    ? null != t.charCode
                                        ? t.charCode
                                        : t.keyCode
                                    : !t.which &&
                                      void 0 !== e &&
                                      _t.test(t.type)
                                    ? 1 & e
                                        ? 1
                                        : 2 & e
                                        ? 3
                                        : 4 & e
                                        ? 2
                                        : 0
                                    : t.which;
                            }
                        },
                        T.event.addProp
                    ),
                    T.each(
                        {
                            mouseenter: 'mouseover',
                            mouseleave: 'mouseout',
                            pointerenter: 'pointerover',
                            pointerleave: 'pointerout'
                        },
                        function(t, e) {
                            T.event.special[t] = {
                                delegateType: e,
                                bindType: e,
                                handle: function(t) {
                                    var n,
                                        r = t.relatedTarget,
                                        o = t.handleObj;
                                    return (
                                        (r &&
                                            (r === this ||
                                                T.contains(this, r))) ||
                                            ((t.type = o.origType),
                                            (n = o.handler.apply(
                                                this,
                                                arguments
                                            )),
                                            (t.type = e)),
                                        n
                                    );
                                }
                            };
                        }
                    ),
                    T.fn.extend({
                        on: function(t, e, n, r) {
                            return Ct(this, t, e, n, r);
                        },
                        one: function(t, e, n, r) {
                            return Ct(this, t, e, n, r, 1);
                        },
                        off: function(t, e, n) {
                            var r, o;
                            if (t && t.preventDefault && t.handleObj)
                                return (
                                    (r = t.handleObj),
                                    T(t.delegateTarget).off(
                                        r.namespace
                                            ? r.origType + '.' + r.namespace
                                            : r.origType,
                                        r.selector,
                                        r.handler
                                    ),
                                    this
                                );
                            if ('object' == typeof t) {
                                for (o in t) this.off(o, e, t[o]);
                                return this;
                            }
                            return (
                                (!1 !== e && 'function' != typeof e) ||
                                    ((n = e), (e = void 0)),
                                !1 === n && (n = kt),
                                this.each(function() {
                                    T.event.remove(this, t, n, e);
                                })
                            );
                        }
                    });
                var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                    jt = /<script|<style|<link/i,
                    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function qt(t, e) {
                    return (
                        (N(t, 'table') &&
                            N(11 !== e.nodeType ? e : e.firstChild, 'tr') &&
                            T(t).children('tbody')[0]) ||
                        t
                    );
                }
                function Lt(t) {
                    return (
                        (t.type =
                            (null !== t.getAttribute('type')) + '/' + t.type),
                        t
                    );
                }
                function Ot(t) {
                    return (
                        'true/' === (t.type || '').slice(0, 5)
                            ? (t.type = t.type.slice(5))
                            : t.removeAttribute('type'),
                        t
                    );
                }
                function Mt(t, e) {
                    var n, r, o, i, a, s, l, u;
                    if (1 === e.nodeType) {
                        if (
                            K.hasData(t) &&
                            ((i = K.access(t)),
                            (a = K.set(e, i)),
                            (u = i.events))
                        )
                            for (o in (delete a.handle, (a.events = {}), u))
                                for (n = 0, r = u[o].length; n < r; n++)
                                    T.event.add(e, o, u[o][n]);
                        Z.hasData(t) &&
                            ((s = Z.access(t)),
                            (l = T.extend({}, s)),
                            Z.set(e, l));
                    }
                }
                function Pt(t, e) {
                    var n = e.nodeName.toLowerCase();
                    'input' === n && pt.test(t.type)
                        ? (e.checked = t.checked)
                        : ('input' !== n && 'textarea' !== n) ||
                          (e.defaultValue = t.defaultValue);
                }
                function Rt(t, e, n, r) {
                    e = u.apply([], e);
                    var o,
                        i,
                        a,
                        s,
                        l,
                        c,
                        f = 0,
                        p = t.length,
                        d = p - 1,
                        h = e[0],
                        y = v(h);
                    if (
                        y ||
                        (p > 1 &&
                            'string' == typeof h &&
                            !m.checkClone &&
                            Nt.test(h))
                    )
                        return t.each(function(o) {
                            var i = t.eq(o);
                            y && (e[0] = h.call(this, o, i.html())),
                                Rt(i, e, n, r);
                        });
                    if (
                        p &&
                        ((i = (o = bt(e, t[0].ownerDocument, !1, t, r))
                            .firstChild),
                        1 === o.childNodes.length && (o = i),
                        i || r)
                    ) {
                        for (
                            s = (a = T.map(gt(o, 'script'), Lt)).length;
                            f < p;
                            f++
                        )
                            (l = o),
                                f !== d &&
                                    ((l = T.clone(l, !0, !0)),
                                    s && T.merge(a, gt(l, 'script'))),
                                n.call(t[f], l, f);
                        if (s)
                            for (
                                c = a[a.length - 1].ownerDocument,
                                    T.map(a, Ot),
                                    f = 0;
                                f < s;
                                f++
                            )
                                (l = a[f]),
                                    ht.test(l.type || '') &&
                                        !K.access(l, 'globalEval') &&
                                        T.contains(c, l) &&
                                        (l.src &&
                                        'module' !==
                                            (l.type || '').toLowerCase()
                                            ? T._evalUrl && T._evalUrl(l.src)
                                            : w(
                                                  l.textContent.replace(Dt, ''),
                                                  c,
                                                  l
                                              ));
                    }
                    return t;
                }
                function Ht(t, e, n) {
                    for (
                        var r, o = e ? T.filter(e, t) : t, i = 0;
                        null != (r = o[i]);
                        i++
                    )
                        n || 1 !== r.nodeType || T.cleanData(gt(r)),
                            r.parentNode &&
                                (n &&
                                    T.contains(r.ownerDocument, r) &&
                                    mt(gt(r, 'script')),
                                r.parentNode.removeChild(r));
                    return t;
                }
                T.extend({
                    htmlPrefilter: function(t) {
                        return t.replace(St, '<$1></$2>');
                    },
                    clone: function(t, e, n) {
                        var r,
                            o,
                            i,
                            a,
                            s = t.cloneNode(!0),
                            l = T.contains(t.ownerDocument, t);
                        if (
                            !(
                                m.noCloneChecked ||
                                (1 !== t.nodeType && 11 !== t.nodeType) ||
                                T.isXMLDoc(t)
                            )
                        )
                            for (
                                a = gt(s), r = 0, o = (i = gt(t)).length;
                                r < o;
                                r++
                            )
                                Pt(i[r], a[r]);
                        if (e)
                            if (n)
                                for (
                                    i = i || gt(t),
                                        a = a || gt(s),
                                        r = 0,
                                        o = i.length;
                                    r < o;
                                    r++
                                )
                                    Mt(i[r], a[r]);
                            else Mt(t, s);
                        return (
                            (a = gt(s, 'script')).length > 0 &&
                                mt(a, !l && gt(t, 'script')),
                            s
                        );
                    },
                    cleanData: function(t) {
                        for (
                            var e, n, r, o = T.event.special, i = 0;
                            void 0 !== (n = t[i]);
                            i++
                        )
                            if (J(n)) {
                                if ((e = n[K.expando])) {
                                    if (e.events)
                                        for (r in e.events)
                                            o[r]
                                                ? T.event.remove(n, r)
                                                : T.removeEvent(n, r, e.handle);
                                    n[K.expando] = void 0;
                                }
                                n[Z.expando] && (n[Z.expando] = void 0);
                            }
                    }
                }),
                    T.fn.extend({
                        detach: function(t) {
                            return Ht(this, t, !0);
                        },
                        remove: function(t) {
                            return Ht(this, t);
                        },
                        text: function(t) {
                            return z(
                                this,
                                function(t) {
                                    return void 0 === t
                                        ? T.text(this)
                                        : this.empty().each(function() {
                                              (1 !== this.nodeType &&
                                                  11 !== this.nodeType &&
                                                  9 !== this.nodeType) ||
                                                  (this.textContent = t);
                                          });
                                },
                                null,
                                t,
                                arguments.length
                            );
                        },
                        append: function() {
                            return Rt(this, arguments, function(t) {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                    qt(this, t).appendChild(t);
                            });
                        },
                        prepend: function() {
                            return Rt(this, arguments, function(t) {
                                if (
                                    1 === this.nodeType ||
                                    11 === this.nodeType ||
                                    9 === this.nodeType
                                ) {
                                    var e = qt(this, t);
                                    e.insertBefore(t, e.firstChild);
                                }
                            });
                        },
                        before: function() {
                            return Rt(this, arguments, function(t) {
                                this.parentNode &&
                                    this.parentNode.insertBefore(t, this);
                            });
                        },
                        after: function() {
                            return Rt(this, arguments, function(t) {
                                this.parentNode &&
                                    this.parentNode.insertBefore(
                                        t,
                                        this.nextSibling
                                    );
                            });
                        },
                        empty: function() {
                            for (var t, e = 0; null != (t = this[e]); e++)
                                1 === t.nodeType &&
                                    (T.cleanData(gt(t, !1)),
                                    (t.textContent = ''));
                            return this;
                        },
                        clone: function(t, e) {
                            return (
                                (t = null != t && t),
                                (e = null == e ? t : e),
                                this.map(function() {
                                    return T.clone(this, t, e);
                                })
                            );
                        },
                        html: function(t) {
                            return z(
                                this,
                                function(t) {
                                    var e = this[0] || {},
                                        n = 0,
                                        r = this.length;
                                    if (void 0 === t && 1 === e.nodeType)
                                        return e.innerHTML;
                                    if (
                                        'string' == typeof t &&
                                        !jt.test(t) &&
                                        !yt[
                                            (dt.exec(t) || [
                                                '',
                                                ''
                                            ])[1].toLowerCase()
                                        ]
                                    ) {
                                        t = T.htmlPrefilter(t);
                                        try {
                                            for (; n < r; n++)
                                                1 ===
                                                    (e = this[n] || {})
                                                        .nodeType &&
                                                    (T.cleanData(gt(e, !1)),
                                                    (e.innerHTML = t));
                                            e = 0;
                                        } catch (t) {}
                                    }
                                    e && this.empty().append(t);
                                },
                                null,
                                t,
                                arguments.length
                            );
                        },
                        replaceWith: function() {
                            var t = [];
                            return Rt(
                                this,
                                arguments,
                                function(e) {
                                    var n = this.parentNode;
                                    T.inArray(this, t) < 0 &&
                                        (T.cleanData(gt(this)),
                                        n && n.replaceChild(e, this));
                                },
                                t
                            );
                        }
                    }),
                    T.each(
                        {
                            appendTo: 'append',
                            prependTo: 'prepend',
                            insertBefore: 'before',
                            insertAfter: 'after',
                            replaceAll: 'replaceWith'
                        },
                        function(t, e) {
                            T.fn[t] = function(t) {
                                for (
                                    var n,
                                        r = [],
                                        o = T(t),
                                        i = o.length - 1,
                                        a = 0;
                                    a <= i;
                                    a++
                                )
                                    (n = a === i ? this : this.clone(!0)),
                                        T(o[a])[e](n),
                                        c.apply(r, n.get());
                                return this.pushStack(r);
                            };
                        }
                    );
                var It = new RegExp('^(' + rt + ')(?!px)[a-z%]+$', 'i'),
                    $t = function(t) {
                        var e = t.ownerDocument.defaultView;
                        return (
                            (e && e.opener) || (e = n), e.getComputedStyle(t)
                        );
                    },
                    Bt = new RegExp(it.join('|'), 'i');
                function Ft(t, e, n) {
                    var r,
                        o,
                        i,
                        a,
                        s = t.style;
                    return (
                        (n = n || $t(t)) &&
                            ('' !== (a = n.getPropertyValue(e) || n[e]) ||
                                T.contains(t.ownerDocument, t) ||
                                (a = T.style(t, e)),
                            !m.pixelBoxStyles() &&
                                It.test(a) &&
                                Bt.test(e) &&
                                ((r = s.width),
                                (o = s.minWidth),
                                (i = s.maxWidth),
                                (s.minWidth = s.maxWidth = s.width = a),
                                (a = n.width),
                                (s.width = r),
                                (s.minWidth = o),
                                (s.maxWidth = i))),
                        void 0 !== a ? a + '' : a
                    );
                }
                function Ut(t, e) {
                    return {
                        get: function() {
                            if (!t())
                                return (this.get = e).apply(this, arguments);
                            delete this.get;
                        }
                    };
                }
                !(function() {
                    function t() {
                        if (c) {
                            (u.style.cssText =
                                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                                (c.style.cssText =
                                    'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                                xt.appendChild(u).appendChild(c);
                            var t = n.getComputedStyle(c);
                            (r = '1%' !== t.top),
                                (l = 12 === e(t.marginLeft)),
                                (c.style.right = '60%'),
                                (s = 36 === e(t.right)),
                                (o = 36 === e(t.width)),
                                (c.style.position = 'absolute'),
                                (i = 36 === c.offsetWidth || 'absolute'),
                                xt.removeChild(u),
                                (c = null);
                        }
                    }
                    function e(t) {
                        return Math.round(parseFloat(t));
                    }
                    var r,
                        o,
                        i,
                        s,
                        l,
                        u = a.createElement('div'),
                        c = a.createElement('div');
                    c.style &&
                        ((c.style.backgroundClip = 'content-box'),
                        (c.cloneNode(!0).style.backgroundClip = ''),
                        (m.clearCloneStyle =
                            'content-box' === c.style.backgroundClip),
                        T.extend(m, {
                            boxSizingReliable: function() {
                                return t(), o;
                            },
                            pixelBoxStyles: function() {
                                return t(), s;
                            },
                            pixelPosition: function() {
                                return t(), r;
                            },
                            reliableMarginLeft: function() {
                                return t(), l;
                            },
                            scrollboxSize: function() {
                                return t(), i;
                            }
                        }));
                })();
                var Wt = /^(none|table(?!-c[ea]).+)/,
                    zt = /^--/,
                    Xt = {
                        position: 'absolute',
                        visibility: 'hidden',
                        display: 'block'
                    },
                    Gt = { letterSpacing: '0', fontWeight: '400' },
                    Vt = ['Webkit', 'Moz', 'ms'],
                    Yt = a.createElement('div').style;
                function Jt(t) {
                    var e = T.cssProps[t];
                    return (
                        e ||
                            (e = T.cssProps[t] =
                                (function(t) {
                                    if (t in Yt) return t;
                                    for (
                                        var e = t[0].toUpperCase() + t.slice(1),
                                            n = Vt.length;
                                        n--;

                                    )
                                        if ((t = Vt[n] + e) in Yt) return t;
                                })(t) || t),
                        e
                    );
                }
                function Qt(t, e, n) {
                    var r = ot.exec(e);
                    return r
                        ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px')
                        : e;
                }
                function Kt(t, e, n, r, o, i) {
                    var a = 'width' === e ? 1 : 0,
                        s = 0,
                        l = 0;
                    if (n === (r ? 'border' : 'content')) return 0;
                    for (; a < 4; a += 2)
                        'margin' === n && (l += T.css(t, n + it[a], !0, o)),
                            r
                                ? ('content' === n &&
                                      (l -= T.css(t, 'padding' + it[a], !0, o)),
                                  'margin' !== n &&
                                      (l -= T.css(
                                          t,
                                          'border' + it[a] + 'Width',
                                          !0,
                                          o
                                      )))
                                : ((l += T.css(t, 'padding' + it[a], !0, o)),
                                  'padding' !== n
                                      ? (l += T.css(
                                            t,
                                            'border' + it[a] + 'Width',
                                            !0,
                                            o
                                        ))
                                      : (s += T.css(
                                            t,
                                            'border' + it[a] + 'Width',
                                            !0,
                                            o
                                        )));
                    return (
                        !r &&
                            i >= 0 &&
                            (l += Math.max(
                                0,
                                Math.ceil(
                                    t[
                                        'offset' +
                                            e[0].toUpperCase() +
                                            e.slice(1)
                                    ] -
                                        i -
                                        l -
                                        s -
                                        0.5
                                )
                            )),
                        l
                    );
                }
                function Zt(t, e, n) {
                    var r = $t(t),
                        o = Ft(t, e, r),
                        i = 'border-box' === T.css(t, 'boxSizing', !1, r),
                        a = i;
                    if (It.test(o)) {
                        if (!n) return o;
                        o = 'auto';
                    }
                    return (
                        (a = a && (m.boxSizingReliable() || o === t.style[e])),
                        ('auto' === o ||
                            (!parseFloat(o) &&
                                'inline' === T.css(t, 'display', !1, r))) &&
                            ((o =
                                t['offset' + e[0].toUpperCase() + e.slice(1)]),
                            (a = !0)),
                        (o = parseFloat(o) || 0) +
                            Kt(t, e, n || (i ? 'border' : 'content'), a, r, o) +
                            'px'
                    );
                }
                function te(t, e, n, r, o) {
                    return new te.prototype.init(t, e, n, r, o);
                }
                T.extend({
                    cssHooks: {
                        opacity: {
                            get: function(t, e) {
                                if (e) {
                                    var n = Ft(t, 'opacity');
                                    return '' === n ? '1' : n;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
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
                    cssProps: {},
                    style: function(t, e, n, r) {
                        if (
                            t &&
                            3 !== t.nodeType &&
                            8 !== t.nodeType &&
                            t.style
                        ) {
                            var o,
                                i,
                                a,
                                s = Y(e),
                                l = zt.test(e),
                                u = t.style;
                            if (
                                (l || (e = Jt(s)),
                                (a = T.cssHooks[e] || T.cssHooks[s]),
                                void 0 === n)
                            )
                                return a &&
                                    'get' in a &&
                                    void 0 !== (o = a.get(t, !1, r))
                                    ? o
                                    : u[e];
                            'string' === (i = typeof n) &&
                                (o = ot.exec(n)) &&
                                o[1] &&
                                ((n = lt(t, e, o)), (i = 'number')),
                                null != n &&
                                    n == n &&
                                    ('number' === i &&
                                        (n +=
                                            (o && o[3]) ||
                                            (T.cssNumber[s] ? '' : 'px')),
                                    m.clearCloneStyle ||
                                        '' !== n ||
                                        0 !== e.indexOf('background') ||
                                        (u[e] = 'inherit'),
                                    (a &&
                                        'set' in a &&
                                        void 0 === (n = a.set(t, n, r))) ||
                                        (l ? u.setProperty(e, n) : (u[e] = n)));
                        }
                    },
                    css: function(t, e, n, r) {
                        var o,
                            i,
                            a,
                            s = Y(e);
                        return (
                            zt.test(e) || (e = Jt(s)),
                            (a = T.cssHooks[e] || T.cssHooks[s]) &&
                                'get' in a &&
                                (o = a.get(t, !0, n)),
                            void 0 === o && (o = Ft(t, e, r)),
                            'normal' === o && e in Gt && (o = Gt[e]),
                            '' === n || n
                                ? ((i = parseFloat(o)),
                                  !0 === n || isFinite(i) ? i || 0 : o)
                                : o
                        );
                    }
                }),
                    T.each(['height', 'width'], function(t, e) {
                        T.cssHooks[e] = {
                            get: function(t, n, r) {
                                if (n)
                                    return !Wt.test(T.css(t, 'display')) ||
                                        (t.getClientRects().length &&
                                            t.getBoundingClientRect().width)
                                        ? Zt(t, e, r)
                                        : st(t, Xt, function() {
                                              return Zt(t, e, r);
                                          });
                            },
                            set: function(t, n, r) {
                                var o,
                                    i = $t(t),
                                    a =
                                        'border-box' ===
                                        T.css(t, 'boxSizing', !1, i),
                                    s = r && Kt(t, e, r, a, i);
                                return (
                                    a &&
                                        m.scrollboxSize() === i.position &&
                                        (s -= Math.ceil(
                                            t[
                                                'offset' +
                                                    e[0].toUpperCase() +
                                                    e.slice(1)
                                            ] -
                                                parseFloat(i[e]) -
                                                Kt(t, e, 'border', !1, i) -
                                                0.5
                                        )),
                                    s &&
                                        (o = ot.exec(n)) &&
                                        'px' !== (o[3] || 'px') &&
                                        ((t.style[e] = n), (n = T.css(t, e))),
                                    Qt(0, n, s)
                                );
                            }
                        };
                    }),
                    (T.cssHooks.marginLeft = Ut(m.reliableMarginLeft, function(
                        t,
                        e
                    ) {
                        if (e)
                            return (
                                (parseFloat(Ft(t, 'marginLeft')) ||
                                    t.getBoundingClientRect().left -
                                        st(t, { marginLeft: 0 }, function() {
                                            return t.getBoundingClientRect().left;
                                        })) + 'px'
                            );
                    })),
                    T.each(
                        { margin: '', padding: '', border: 'Width' },
                        function(t, e) {
                            (T.cssHooks[t + e] = {
                                expand: function(n) {
                                    for (
                                        var r = 0,
                                            o = {},
                                            i =
                                                'string' == typeof n
                                                    ? n.split(' ')
                                                    : [n];
                                        r < 4;
                                        r++
                                    )
                                        o[t + it[r] + e] =
                                            i[r] || i[r - 2] || i[0];
                                    return o;
                                }
                            }),
                                'margin' !== t && (T.cssHooks[t + e].set = Qt);
                        }
                    ),
                    T.fn.extend({
                        css: function(t, e) {
                            return z(
                                this,
                                function(t, e, n) {
                                    var r,
                                        o,
                                        i = {},
                                        a = 0;
                                    if (Array.isArray(e)) {
                                        for (
                                            r = $t(t), o = e.length;
                                            a < o;
                                            a++
                                        )
                                            i[e[a]] = T.css(t, e[a], !1, r);
                                        return i;
                                    }
                                    return void 0 !== n
                                        ? T.style(t, e, n)
                                        : T.css(t, e);
                                },
                                t,
                                e,
                                arguments.length > 1
                            );
                        }
                    }),
                    (T.Tween = te),
                    (te.prototype = {
                        constructor: te,
                        init: function(t, e, n, r, o, i) {
                            (this.elem = t),
                                (this.prop = n),
                                (this.easing = o || T.easing._default),
                                (this.options = e),
                                (this.start = this.now = this.cur()),
                                (this.end = r),
                                (this.unit = i || (T.cssNumber[n] ? '' : 'px'));
                        },
                        cur: function() {
                            var t = te.propHooks[this.prop];
                            return t && t.get
                                ? t.get(this)
                                : te.propHooks._default.get(this);
                        },
                        run: function(t) {
                            var e,
                                n = te.propHooks[this.prop];
                            return (
                                this.options.duration
                                    ? (this.pos = e = T.easing[this.easing](
                                          t,
                                          this.options.duration * t,
                                          0,
                                          1,
                                          this.options.duration
                                      ))
                                    : (this.pos = e = t),
                                (this.now =
                                    (this.end - this.start) * e + this.start),
                                this.options.step &&
                                    this.options.step.call(
                                        this.elem,
                                        this.now,
                                        this
                                    ),
                                n && n.set
                                    ? n.set(this)
                                    : te.propHooks._default.set(this),
                                this
                            );
                        }
                    }),
                    (te.prototype.init.prototype = te.prototype),
                    (te.propHooks = {
                        _default: {
                            get: function(t) {
                                var e;
                                return 1 !== t.elem.nodeType ||
                                    (null != t.elem[t.prop] &&
                                        null == t.elem.style[t.prop])
                                    ? t.elem[t.prop]
                                    : (e = T.css(t.elem, t.prop, '')) &&
                                      'auto' !== e
                                    ? e
                                    : 0;
                            },
                            set: function(t) {
                                T.fx.step[t.prop]
                                    ? T.fx.step[t.prop](t)
                                    : 1 !== t.elem.nodeType ||
                                      (null ==
                                          t.elem.style[T.cssProps[t.prop]] &&
                                          !T.cssHooks[t.prop])
                                    ? (t.elem[t.prop] = t.now)
                                    : T.style(t.elem, t.prop, t.now + t.unit);
                            }
                        }
                    }),
                    (te.propHooks.scrollTop = te.propHooks.scrollLeft = {
                        set: function(t) {
                            t.elem.nodeType &&
                                t.elem.parentNode &&
                                (t.elem[t.prop] = t.now);
                        }
                    }),
                    (T.easing = {
                        linear: function(t) {
                            return t;
                        },
                        swing: function(t) {
                            return 0.5 - Math.cos(t * Math.PI) / 2;
                        },
                        _default: 'swing'
                    }),
                    (T.fx = te.prototype.init),
                    (T.fx.step = {});
                var ee,
                    ne,
                    re = /^(?:toggle|show|hide)$/,
                    oe = /queueHooks$/;
                function ie() {
                    ne &&
                        (!1 === a.hidden && n.requestAnimationFrame
                            ? n.requestAnimationFrame(ie)
                            : n.setTimeout(ie, T.fx.interval),
                        T.fx.tick());
                }
                function ae() {
                    return (
                        n.setTimeout(function() {
                            ee = void 0;
                        }),
                        (ee = Date.now())
                    );
                }
                function se(t, e) {
                    var n,
                        r = 0,
                        o = { height: t };
                    for (e = e ? 1 : 0; r < 4; r += 2 - e)
                        o['margin' + (n = it[r])] = o['padding' + n] = t;
                    return e && (o.opacity = o.width = t), o;
                }
                function le(t, e, n) {
                    for (
                        var r,
                            o = (ue.tweeners[e] || []).concat(ue.tweeners['*']),
                            i = 0,
                            a = o.length;
                        i < a;
                        i++
                    )
                        if ((r = o[i].call(n, e, t))) return r;
                }
                function ue(t, e, n) {
                    var r,
                        o,
                        i = 0,
                        a = ue.prefilters.length,
                        s = T.Deferred().always(function() {
                            delete l.elem;
                        }),
                        l = function() {
                            if (o) return !1;
                            for (
                                var e = ee || ae(),
                                    n = Math.max(
                                        0,
                                        u.startTime + u.duration - e
                                    ),
                                    r = 1 - (n / u.duration || 0),
                                    i = 0,
                                    a = u.tweens.length;
                                i < a;
                                i++
                            )
                                u.tweens[i].run(r);
                            return (
                                s.notifyWith(t, [u, r, n]),
                                r < 1 && a
                                    ? n
                                    : (a || s.notifyWith(t, [u, 1, 0]),
                                      s.resolveWith(t, [u]),
                                      !1)
                            );
                        },
                        u = s.promise({
                            elem: t,
                            props: T.extend({}, e),
                            opts: T.extend(
                                !0,
                                {
                                    specialEasing: {},
                                    easing: T.easing._default
                                },
                                n
                            ),
                            originalProperties: e,
                            originalOptions: n,
                            startTime: ee || ae(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(e, n) {
                                var r = T.Tween(
                                    t,
                                    u.opts,
                                    e,
                                    n,
                                    u.opts.specialEasing[e] || u.opts.easing
                                );
                                return u.tweens.push(r), r;
                            },
                            stop: function(e) {
                                var n = 0,
                                    r = e ? u.tweens.length : 0;
                                if (o) return this;
                                for (o = !0; n < r; n++) u.tweens[n].run(1);
                                return (
                                    e
                                        ? (s.notifyWith(t, [u, 1, 0]),
                                          s.resolveWith(t, [u, e]))
                                        : s.rejectWith(t, [u, e]),
                                    this
                                );
                            }
                        }),
                        c = u.props;
                    for (
                        !(function(t, e) {
                            var n, r, o, i, a;
                            for (n in t)
                                if (
                                    ((o = e[(r = Y(n))]),
                                    (i = t[n]),
                                    Array.isArray(i) &&
                                        ((o = i[1]), (i = t[n] = i[0])),
                                    n !== r && ((t[r] = i), delete t[n]),
                                    (a = T.cssHooks[r]) && ('expand' in a))
                                )
                                    for (n in ((i = a.expand(i)),
                                    delete t[r],
                                    i))
                                        (n in t) || ((t[n] = i[n]), (e[n] = o));
                                else e[r] = o;
                        })(c, u.opts.specialEasing);
                        i < a;
                        i++
                    )
                        if ((r = ue.prefilters[i].call(u, t, c, u.opts)))
                            return (
                                v(r.stop) &&
                                    (T._queueHooks(
                                        u.elem,
                                        u.opts.queue
                                    ).stop = r.stop.bind(r)),
                                r
                            );
                    return (
                        T.map(c, le, u),
                        v(u.opts.start) && u.opts.start.call(t, u),
                        u
                            .progress(u.opts.progress)
                            .done(u.opts.done, u.opts.complete)
                            .fail(u.opts.fail)
                            .always(u.opts.always),
                        T.fx.timer(
                            T.extend(l, {
                                elem: t,
                                anim: u,
                                queue: u.opts.queue
                            })
                        ),
                        u
                    );
                }
                (T.Animation = T.extend(ue, {
                    tweeners: {
                        '*': [
                            function(t, e) {
                                var n = this.createTween(t, e);
                                return lt(n.elem, t, ot.exec(e), n), n;
                            }
                        ]
                    },
                    tweener: function(t, e) {
                        v(t) ? ((e = t), (t = ['*'])) : (t = t.match(H));
                        for (var n, r = 0, o = t.length; r < o; r++)
                            (n = t[r]),
                                (ue.tweeners[n] = ue.tweeners[n] || []),
                                ue.tweeners[n].unshift(e);
                    },
                    prefilters: [
                        function(t, e, n) {
                            var r,
                                o,
                                i,
                                a,
                                s,
                                l,
                                u,
                                c,
                                f = 'width' in e || 'height' in e,
                                p = this,
                                d = {},
                                h = t.style,
                                y = t.nodeType && at(t),
                                g = K.get(t, 'fxshow');
                            for (r in (n.queue ||
                                (null ==
                                    (a = T._queueHooks(t, 'fx')).unqueued &&
                                    ((a.unqueued = 0),
                                    (s = a.empty.fire),
                                    (a.empty.fire = function() {
                                        a.unqueued || s();
                                    })),
                                a.unqueued++,
                                p.always(function() {
                                    p.always(function() {
                                        a.unqueued--,
                                            T.queue(t, 'fx').length ||
                                                a.empty.fire();
                                    });
                                })),
                            e))
                                if (((o = e[r]), re.test(o))) {
                                    if (
                                        (delete e[r],
                                        (i = i || 'toggle' === o),
                                        o === (y ? 'hide' : 'show'))
                                    ) {
                                        if (
                                            'show' !== o ||
                                            !g ||
                                            void 0 === g[r]
                                        )
                                            continue;
                                        y = !0;
                                    }
                                    d[r] = (g && g[r]) || T.style(t, r);
                                }
                            if (
                                (l = !T.isEmptyObject(e)) ||
                                !T.isEmptyObject(d)
                            )
                                for (r in (f &&
                                    1 === t.nodeType &&
                                    ((n.overflow = [
                                        h.overflow,
                                        h.overflowX,
                                        h.overflowY
                                    ]),
                                    null == (u = g && g.display) &&
                                        (u = K.get(t, 'display')),
                                    'none' === (c = T.css(t, 'display')) &&
                                        (u
                                            ? (c = u)
                                            : (ft([t], !0),
                                              (u = t.style.display || u),
                                              (c = T.css(t, 'display')),
                                              ft([t]))),
                                    ('inline' === c ||
                                        ('inline-block' === c && null != u)) &&
                                        'none' === T.css(t, 'float') &&
                                        (l ||
                                            (p.done(function() {
                                                h.display = u;
                                            }),
                                            null == u &&
                                                ((c = h.display),
                                                (u = 'none' === c ? '' : c))),
                                        (h.display = 'inline-block'))),
                                n.overflow &&
                                    ((h.overflow = 'hidden'),
                                    p.always(function() {
                                        (h.overflow = n.overflow[0]),
                                            (h.overflowX = n.overflow[1]),
                                            (h.overflowY = n.overflow[2]);
                                    })),
                                (l = !1),
                                d))
                                    l ||
                                        (g
                                            ? 'hidden' in g && (y = g.hidden)
                                            : (g = K.access(t, 'fxshow', {
                                                  display: u
                                              })),
                                        i && (g.hidden = !y),
                                        y && ft([t], !0),
                                        p.done(function() {
                                            for (r in (y || ft([t]),
                                            K.remove(t, 'fxshow'),
                                            d))
                                                T.style(t, r, d[r]);
                                        })),
                                        (l = le(y ? g[r] : 0, r, p)),
                                        r in g ||
                                            ((g[r] = l.start),
                                            y &&
                                                ((l.end = l.start),
                                                (l.start = 0)));
                        }
                    ],
                    prefilter: function(t, e) {
                        e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
                    }
                })),
                    (T.speed = function(t, e, n) {
                        var r =
                            t && 'object' == typeof t
                                ? T.extend({}, t)
                                : {
                                      complete: n || (!n && e) || (v(t) && t),
                                      duration: t,
                                      easing: (n && e) || (e && !v(e) && e)
                                  };
                        return (
                            T.fx.off
                                ? (r.duration = 0)
                                : 'number' != typeof r.duration &&
                                  (r.duration in T.fx.speeds
                                      ? (r.duration = T.fx.speeds[r.duration])
                                      : (r.duration = T.fx.speeds._default)),
                            (null != r.queue && !0 !== r.queue) ||
                                (r.queue = 'fx'),
                            (r.old = r.complete),
                            (r.complete = function() {
                                v(r.old) && r.old.call(this),
                                    r.queue && T.dequeue(this, r.queue);
                            }),
                            r
                        );
                    }),
                    T.fn.extend({
                        fadeTo: function(t, e, n, r) {
                            return this.filter(at)
                                .css('opacity', 0)
                                .show()
                                .end()
                                .animate({ opacity: e }, t, n, r);
                        },
                        animate: function(t, e, n, r) {
                            var o = T.isEmptyObject(t),
                                i = T.speed(e, n, r),
                                a = function() {
                                    var e = ue(this, T.extend({}, t), i);
                                    (o || K.get(this, 'finish')) && e.stop(!0);
                                };
                            return (
                                (a.finish = a),
                                o || !1 === i.queue
                                    ? this.each(a)
                                    : this.queue(i.queue, a)
                            );
                        },
                        stop: function(t, e, n) {
                            var r = function(t) {
                                var e = t.stop;
                                delete t.stop, e(n);
                            };
                            return (
                                'string' != typeof t &&
                                    ((n = e), (e = t), (t = void 0)),
                                e && !1 !== t && this.queue(t || 'fx', []),
                                this.each(function() {
                                    var e = !0,
                                        o = null != t && t + 'queueHooks',
                                        i = T.timers,
                                        a = K.get(this);
                                    if (o) a[o] && a[o].stop && r(a[o]);
                                    else
                                        for (o in a)
                                            a[o] &&
                                                a[o].stop &&
                                                oe.test(o) &&
                                                r(a[o]);
                                    for (o = i.length; o--; )
                                        i[o].elem !== this ||
                                            (null != t && i[o].queue !== t) ||
                                            (i[o].anim.stop(n),
                                            (e = !1),
                                            i.splice(o, 1));
                                    (!e && n) || T.dequeue(this, t);
                                })
                            );
                        },
                        finish: function(t) {
                            return (
                                !1 !== t && (t = t || 'fx'),
                                this.each(function() {
                                    var e,
                                        n = K.get(this),
                                        r = n[t + 'queue'],
                                        o = n[t + 'queueHooks'],
                                        i = T.timers,
                                        a = r ? r.length : 0;
                                    for (
                                        n.finish = !0,
                                            T.queue(this, t, []),
                                            o &&
                                                o.stop &&
                                                o.stop.call(this, !0),
                                            e = i.length;
                                        e--;

                                    )
                                        i[e].elem === this &&
                                            i[e].queue === t &&
                                            (i[e].anim.stop(!0),
                                            i.splice(e, 1));
                                    for (e = 0; e < a; e++)
                                        r[e] &&
                                            r[e].finish &&
                                            r[e].finish.call(this);
                                    delete n.finish;
                                })
                            );
                        }
                    }),
                    T.each(['toggle', 'show', 'hide'], function(t, e) {
                        var n = T.fn[e];
                        T.fn[e] = function(t, r, o) {
                            return null == t || 'boolean' == typeof t
                                ? n.apply(this, arguments)
                                : this.animate(se(e, !0), t, r, o);
                        };
                    }),
                    T.each(
                        {
                            slideDown: se('show'),
                            slideUp: se('hide'),
                            slideToggle: se('toggle'),
                            fadeIn: { opacity: 'show' },
                            fadeOut: { opacity: 'hide' },
                            fadeToggle: { opacity: 'toggle' }
                        },
                        function(t, e) {
                            T.fn[t] = function(t, n, r) {
                                return this.animate(e, t, n, r);
                            };
                        }
                    ),
                    (T.timers = []),
                    (T.fx.tick = function() {
                        var t,
                            e = 0,
                            n = T.timers;
                        for (ee = Date.now(); e < n.length; e++)
                            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                        n.length || T.fx.stop(), (ee = void 0);
                    }),
                    (T.fx.timer = function(t) {
                        T.timers.push(t), T.fx.start();
                    }),
                    (T.fx.interval = 13),
                    (T.fx.start = function() {
                        ne || ((ne = !0), ie());
                    }),
                    (T.fx.stop = function() {
                        ne = null;
                    }),
                    (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                    (T.fn.delay = function(t, e) {
                        return (
                            (t = (T.fx && T.fx.speeds[t]) || t),
                            (e = e || 'fx'),
                            this.queue(e, function(e, r) {
                                var o = n.setTimeout(e, t);
                                r.stop = function() {
                                    n.clearTimeout(o);
                                };
                            })
                        );
                    }),
                    (function() {
                        var t = a.createElement('input'),
                            e = a
                                .createElement('select')
                                .appendChild(a.createElement('option'));
                        (t.type = 'checkbox'),
                            (m.checkOn = '' !== t.value),
                            (m.optSelected = e.selected),
                            ((t = a.createElement('input')).value = 't'),
                            (t.type = 'radio'),
                            (m.radioValue = 't' === t.value);
                    })();
                var ce,
                    fe = T.expr.attrHandle;
                T.fn.extend({
                    attr: function(t, e) {
                        return z(this, T.attr, t, e, arguments.length > 1);
                    },
                    removeAttr: function(t) {
                        return this.each(function() {
                            T.removeAttr(this, t);
                        });
                    }
                }),
                    T.extend({
                        attr: function(t, e, n) {
                            var r,
                                o,
                                i = t.nodeType;
                            if (3 !== i && 8 !== i && 2 !== i)
                                return void 0 === t.getAttribute
                                    ? T.prop(t, e, n)
                                    : ((1 === i && T.isXMLDoc(t)) ||
                                          (o =
                                              T.attrHooks[e.toLowerCase()] ||
                                              (T.expr.match.bool.test(e)
                                                  ? ce
                                                  : void 0)),
                                      void 0 !== n
                                          ? null === n
                                              ? void T.removeAttr(t, e)
                                              : o &&
                                                'set' in o &&
                                                void 0 !== (r = o.set(t, n, e))
                                              ? r
                                              : (t.setAttribute(e, n + ''), n)
                                          : o &&
                                            'get' in o &&
                                            null !== (r = o.get(t, e))
                                          ? r
                                          : null == (r = T.find.attr(t, e))
                                          ? void 0
                                          : r);
                        },
                        attrHooks: {
                            type: {
                                set: function(t, e) {
                                    if (
                                        !m.radioValue &&
                                        'radio' === e &&
                                        N(t, 'input')
                                    ) {
                                        var n = t.value;
                                        return (
                                            t.setAttribute('type', e),
                                            n && (t.value = n),
                                            e
                                        );
                                    }
                                }
                            }
                        },
                        removeAttr: function(t, e) {
                            var n,
                                r = 0,
                                o = e && e.match(H);
                            if (o && 1 === t.nodeType)
                                for (; (n = o[r++]); ) t.removeAttribute(n);
                        }
                    }),
                    (ce = {
                        set: function(t, e, n) {
                            return (
                                !1 === e
                                    ? T.removeAttr(t, n)
                                    : t.setAttribute(n, n),
                                n
                            );
                        }
                    }),
                    T.each(T.expr.match.bool.source.match(/\w+/g), function(
                        t,
                        e
                    ) {
                        var n = fe[e] || T.find.attr;
                        fe[e] = function(t, e, r) {
                            var o,
                                i,
                                a = e.toLowerCase();
                            return (
                                r ||
                                    ((i = fe[a]),
                                    (fe[a] = o),
                                    (o = null != n(t, e, r) ? a : null),
                                    (fe[a] = i)),
                                o
                            );
                        };
                    });
                var pe = /^(?:input|select|textarea|button)$/i,
                    de = /^(?:a|area)$/i;
                function he(t) {
                    return (t.match(H) || []).join(' ');
                }
                function ye(t) {
                    return (t.getAttribute && t.getAttribute('class')) || '';
                }
                function ge(t) {
                    return Array.isArray(t)
                        ? t
                        : ('string' == typeof t && t.match(H)) || [];
                }
                T.fn.extend({
                    prop: function(t, e) {
                        return z(this, T.prop, t, e, arguments.length > 1);
                    },
                    removeProp: function(t) {
                        return this.each(function() {
                            delete this[T.propFix[t] || t];
                        });
                    }
                }),
                    T.extend({
                        prop: function(t, e, n) {
                            var r,
                                o,
                                i = t.nodeType;
                            if (3 !== i && 8 !== i && 2 !== i)
                                return (
                                    (1 === i && T.isXMLDoc(t)) ||
                                        ((e = T.propFix[e] || e),
                                        (o = T.propHooks[e])),
                                    void 0 !== n
                                        ? o &&
                                          'set' in o &&
                                          void 0 !== (r = o.set(t, n, e))
                                            ? r
                                            : (t[e] = n)
                                        : o &&
                                          'get' in o &&
                                          null !== (r = o.get(t, e))
                                        ? r
                                        : t[e]
                                );
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(t) {
                                    var e = T.find.attr(t, 'tabindex');
                                    return e
                                        ? parseInt(e, 10)
                                        : pe.test(t.nodeName) ||
                                          (de.test(t.nodeName) && t.href)
                                        ? 0
                                        : -1;
                                }
                            }
                        },
                        propFix: { for: 'htmlFor', class: 'className' }
                    }),
                    m.optSelected ||
                        (T.propHooks.selected = {
                            get: function(t) {
                                var e = t.parentNode;
                                return (
                                    e &&
                                        e.parentNode &&
                                        e.parentNode.selectedIndex,
                                    null
                                );
                            },
                            set: function(t) {
                                var e = t.parentNode;
                                e &&
                                    (e.selectedIndex,
                                    e.parentNode && e.parentNode.selectedIndex);
                            }
                        }),
                    T.each(
                        [
                            'tabIndex',
                            'readOnly',
                            'maxLength',
                            'cellSpacing',
                            'cellPadding',
                            'rowSpan',
                            'colSpan',
                            'useMap',
                            'frameBorder',
                            'contentEditable'
                        ],
                        function() {
                            T.propFix[this.toLowerCase()] = this;
                        }
                    ),
                    T.fn.extend({
                        addClass: function(t) {
                            var e,
                                n,
                                r,
                                o,
                                i,
                                a,
                                s,
                                l = 0;
                            if (v(t))
                                return this.each(function(e) {
                                    T(this).addClass(t.call(this, e, ye(this)));
                                });
                            if ((e = ge(t)).length)
                                for (; (n = this[l++]); )
                                    if (
                                        ((o = ye(n)),
                                        (r =
                                            1 === n.nodeType &&
                                            ' ' + he(o) + ' '))
                                    ) {
                                        for (a = 0; (i = e[a++]); )
                                            r.indexOf(' ' + i + ' ') < 0 &&
                                                (r += i + ' ');
                                        o !== (s = he(r)) &&
                                            n.setAttribute('class', s);
                                    }
                            return this;
                        },
                        removeClass: function(t) {
                            var e,
                                n,
                                r,
                                o,
                                i,
                                a,
                                s,
                                l = 0;
                            if (v(t))
                                return this.each(function(e) {
                                    T(this).removeClass(
                                        t.call(this, e, ye(this))
                                    );
                                });
                            if (!arguments.length)
                                return this.attr('class', '');
                            if ((e = ge(t)).length)
                                for (; (n = this[l++]); )
                                    if (
                                        ((o = ye(n)),
                                        (r =
                                            1 === n.nodeType &&
                                            ' ' + he(o) + ' '))
                                    ) {
                                        for (a = 0; (i = e[a++]); )
                                            for (
                                                ;
                                                r.indexOf(' ' + i + ' ') > -1;

                                            )
                                                r = r.replace(
                                                    ' ' + i + ' ',
                                                    ' '
                                                );
                                        o !== (s = he(r)) &&
                                            n.setAttribute('class', s);
                                    }
                            return this;
                        },
                        toggleClass: function(t, e) {
                            var n = typeof t,
                                r = 'string' === n || Array.isArray(t);
                            return 'boolean' == typeof e && r
                                ? e
                                    ? this.addClass(t)
                                    : this.removeClass(t)
                                : v(t)
                                ? this.each(function(n) {
                                      T(this).toggleClass(
                                          t.call(this, n, ye(this), e),
                                          e
                                      );
                                  })
                                : this.each(function() {
                                      var e, o, i, a;
                                      if (r)
                                          for (
                                              o = 0, i = T(this), a = ge(t);
                                              (e = a[o++]);

                                          )
                                              i.hasClass(e)
                                                  ? i.removeClass(e)
                                                  : i.addClass(e);
                                      else
                                          (void 0 !== t && 'boolean' !== n) ||
                                              ((e = ye(this)) &&
                                                  K.set(
                                                      this,
                                                      '__className__',
                                                      e
                                                  ),
                                              this.setAttribute &&
                                                  this.setAttribute(
                                                      'class',
                                                      e || !1 === t
                                                          ? ''
                                                          : K.get(
                                                                this,
                                                                '__className__'
                                                            ) || ''
                                                  ));
                                  });
                        },
                        hasClass: function(t) {
                            var e,
                                n,
                                r = 0;
                            for (e = ' ' + t + ' '; (n = this[r++]); )
                                if (
                                    1 === n.nodeType &&
                                    (' ' + he(ye(n)) + ' ').indexOf(e) > -1
                                )
                                    return !0;
                            return !1;
                        }
                    });
                var me = /\r/g;
                T.fn.extend({
                    val: function(t) {
                        var e,
                            n,
                            r,
                            o = this[0];
                        return arguments.length
                            ? ((r = v(t)),
                              this.each(function(n) {
                                  var o;
                                  1 === this.nodeType &&
                                      (null ==
                                      (o = r
                                          ? t.call(this, n, T(this).val())
                                          : t)
                                          ? (o = '')
                                          : 'number' == typeof o
                                          ? (o += '')
                                          : Array.isArray(o) &&
                                            (o = T.map(o, function(t) {
                                                return null == t ? '' : t + '';
                                            })),
                                      ((e =
                                          T.valHooks[this.type] ||
                                          T.valHooks[
                                              this.nodeName.toLowerCase()
                                          ]) &&
                                          'set' in e &&
                                          void 0 !== e.set(this, o, 'value')) ||
                                          (this.value = o));
                              }))
                            : o
                            ? (e =
                                  T.valHooks[o.type] ||
                                  T.valHooks[o.nodeName.toLowerCase()]) &&
                              'get' in e &&
                              void 0 !== (n = e.get(o, 'value'))
                                ? n
                                : 'string' == typeof (n = o.value)
                                ? n.replace(me, '')
                                : null == n
                                ? ''
                                : n
                            : void 0;
                    }
                }),
                    T.extend({
                        valHooks: {
                            option: {
                                get: function(t) {
                                    var e = T.find.attr(t, 'value');
                                    return null != e ? e : he(T.text(t));
                                }
                            },
                            select: {
                                get: function(t) {
                                    var e,
                                        n,
                                        r,
                                        o = t.options,
                                        i = t.selectedIndex,
                                        a = 'select-one' === t.type,
                                        s = a ? null : [],
                                        l = a ? i + 1 : o.length;
                                    for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                                        if (
                                            ((n = o[r]).selected || r === i) &&
                                            !n.disabled &&
                                            (!n.parentNode.disabled ||
                                                !N(n.parentNode, 'optgroup'))
                                        ) {
                                            if (((e = T(n).val()), a)) return e;
                                            s.push(e);
                                        }
                                    return s;
                                },
                                set: function(t, e) {
                                    for (
                                        var n,
                                            r,
                                            o = t.options,
                                            i = T.makeArray(e),
                                            a = o.length;
                                        a--;

                                    )
                                        ((r = o[a]).selected =
                                            T.inArray(
                                                T.valHooks.option.get(r),
                                                i
                                            ) > -1) && (n = !0);
                                    return n || (t.selectedIndex = -1), i;
                                }
                            }
                        }
                    }),
                    T.each(['radio', 'checkbox'], function() {
                        (T.valHooks[this] = {
                            set: function(t, e) {
                                if (Array.isArray(e))
                                    return (t.checked =
                                        T.inArray(T(t).val(), e) > -1);
                            }
                        }),
                            m.checkOn ||
                                (T.valHooks[this].get = function(t) {
                                    return null === t.getAttribute('value')
                                        ? 'on'
                                        : t.value;
                                });
                    }),
                    (m.focusin = 'onfocusin' in n);
                var ve = /^(?:focusinfocus|focusoutblur)$/,
                    be = function(t) {
                        t.stopPropagation();
                    };
                T.extend(T.event, {
                    trigger: function(t, e, r, o) {
                        var i,
                            s,
                            l,
                            u,
                            c,
                            f,
                            p,
                            d,
                            y = [r || a],
                            g = h.call(t, 'type') ? t.type : t,
                            m = h.call(t, 'namespace')
                                ? t.namespace.split('.')
                                : [];
                        if (
                            ((s = d = l = r = r || a),
                            3 !== r.nodeType &&
                                8 !== r.nodeType &&
                                !ve.test(g + T.event.triggered) &&
                                (g.indexOf('.') > -1 &&
                                    ((g = (m = g.split('.')).shift()),
                                    m.sort()),
                                (c = g.indexOf(':') < 0 && 'on' + g),
                                ((t = t[T.expando]
                                    ? t
                                    : new T.Event(
                                          g,
                                          'object' == typeof t && t
                                      )).isTrigger = o ? 2 : 3),
                                (t.namespace = m.join('.')),
                                (t.rnamespace = t.namespace
                                    ? new RegExp(
                                          '(^|\\.)' +
                                              m.join('\\.(?:.*\\.|)') +
                                              '(\\.|$)'
                                      )
                                    : null),
                                (t.result = void 0),
                                t.target || (t.target = r),
                                (e = null == e ? [t] : T.makeArray(e, [t])),
                                (p = T.event.special[g] || {}),
                                o ||
                                    !p.trigger ||
                                    !1 !== p.trigger.apply(r, e)))
                        ) {
                            if (!o && !p.noBubble && !b(r)) {
                                for (
                                    u = p.delegateType || g,
                                        ve.test(u + g) || (s = s.parentNode);
                                    s;
                                    s = s.parentNode
                                )
                                    y.push(s), (l = s);
                                l === (r.ownerDocument || a) &&
                                    y.push(
                                        l.defaultView || l.parentWindow || n
                                    );
                            }
                            for (
                                i = 0;
                                (s = y[i++]) && !t.isPropagationStopped();

                            )
                                (d = s),
                                    (t.type = i > 1 ? u : p.bindType || g),
                                    (f =
                                        (K.get(s, 'events') || {})[t.type] &&
                                        K.get(s, 'handle')) && f.apply(s, e),
                                    (f = c && s[c]) &&
                                        f.apply &&
                                        J(s) &&
                                        ((t.result = f.apply(s, e)),
                                        !1 === t.result && t.preventDefault());
                            return (
                                (t.type = g),
                                o ||
                                    t.isDefaultPrevented() ||
                                    (p._default &&
                                        !1 !== p._default.apply(y.pop(), e)) ||
                                    !J(r) ||
                                    (c &&
                                        v(r[g]) &&
                                        !b(r) &&
                                        ((l = r[c]) && (r[c] = null),
                                        (T.event.triggered = g),
                                        t.isPropagationStopped() &&
                                            d.addEventListener(g, be),
                                        r[g](),
                                        t.isPropagationStopped() &&
                                            d.removeEventListener(g, be),
                                        (T.event.triggered = void 0),
                                        l && (r[c] = l))),
                                t.result
                            );
                        }
                    },
                    simulate: function(t, e, n) {
                        var r = T.extend(new T.Event(), n, {
                            type: t,
                            isSimulated: !0
                        });
                        T.event.trigger(r, null, e);
                    }
                }),
                    T.fn.extend({
                        trigger: function(t, e) {
                            return this.each(function() {
                                T.event.trigger(t, e, this);
                            });
                        },
                        triggerHandler: function(t, e) {
                            var n = this[0];
                            if (n) return T.event.trigger(t, e, n, !0);
                        }
                    }),
                    m.focusin ||
                        T.each({ focus: 'focusin', blur: 'focusout' }, function(
                            t,
                            e
                        ) {
                            var n = function(t) {
                                T.event.simulate(e, t.target, T.event.fix(t));
                            };
                            T.event.special[e] = {
                                setup: function() {
                                    var r = this.ownerDocument || this,
                                        o = K.access(r, e);
                                    o || r.addEventListener(t, n, !0),
                                        K.access(r, e, (o || 0) + 1);
                                },
                                teardown: function() {
                                    var r = this.ownerDocument || this,
                                        o = K.access(r, e) - 1;
                                    o
                                        ? K.access(r, e, o)
                                        : (r.removeEventListener(t, n, !0),
                                          K.remove(r, e));
                                }
                            };
                        });
                var xe = n.location,
                    we = Date.now(),
                    _e = /\?/;
                T.parseXML = function(t) {
                    var e;
                    if (!t || 'string' != typeof t) return null;
                    try {
                        e = new n.DOMParser().parseFromString(t, 'text/xml');
                    } catch (t) {
                        e = void 0;
                    }
                    return (
                        (e && !e.getElementsByTagName('parsererror').length) ||
                            T.error('Invalid XML: ' + t),
                        e
                    );
                };
                var Te = /\[\]$/,
                    Ae = /\r?\n/g,
                    ke = /^(?:submit|button|image|reset|file)$/i,
                    Ee = /^(?:input|select|textarea|keygen)/i;
                function Ce(t, e, n, r) {
                    var o;
                    if (Array.isArray(e))
                        T.each(e, function(e, o) {
                            n || Te.test(t)
                                ? r(t, o)
                                : Ce(
                                      t +
                                          '[' +
                                          ('object' == typeof o && null != o
                                              ? e
                                              : '') +
                                          ']',
                                      o,
                                      n,
                                      r
                                  );
                        });
                    else if (n || 'object' !== _(e)) r(t, e);
                    else for (o in e) Ce(t + '[' + o + ']', e[o], n, r);
                }
                (T.param = function(t, e) {
                    var n,
                        r = [],
                        o = function(t, e) {
                            var n = v(e) ? e() : e;
                            r[r.length] =
                                encodeURIComponent(t) +
                                '=' +
                                encodeURIComponent(null == n ? '' : n);
                        };
                    if (Array.isArray(t) || (t.jquery && !T.isPlainObject(t)))
                        T.each(t, function() {
                            o(this.name, this.value);
                        });
                    else for (n in t) Ce(n, t[n], e, o);
                    return r.join('&');
                }),
                    T.fn.extend({
                        serialize: function() {
                            return T.param(this.serializeArray());
                        },
                        serializeArray: function() {
                            return this.map(function() {
                                var t = T.prop(this, 'elements');
                                return t ? T.makeArray(t) : this;
                            })
                                .filter(function() {
                                    var t = this.type;
                                    return (
                                        this.name &&
                                        !T(this).is(':disabled') &&
                                        Ee.test(this.nodeName) &&
                                        !ke.test(t) &&
                                        (this.checked || !pt.test(t))
                                    );
                                })
                                .map(function(t, e) {
                                    var n = T(this).val();
                                    return null == n
                                        ? null
                                        : Array.isArray(n)
                                        ? T.map(n, function(t) {
                                              return {
                                                  name: e.name,
                                                  value: t.replace(Ae, '\r\n')
                                              };
                                          })
                                        : {
                                              name: e.name,
                                              value: n.replace(Ae, '\r\n')
                                          };
                                })
                                .get();
                        }
                    });
                var Se = /%20/g,
                    je = /#.*$/,
                    Ne = /([?&])_=[^&]*/,
                    De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    qe = /^(?:GET|HEAD)$/,
                    Le = /^\/\//,
                    Oe = {},
                    Me = {},
                    Pe = '*/'.concat('*'),
                    Re = a.createElement('a');
                function He(t) {
                    return function(e, n) {
                        'string' != typeof e && ((n = e), (e = '*'));
                        var r,
                            o = 0,
                            i = e.toLowerCase().match(H) || [];
                        if (v(n))
                            for (; (r = i[o++]); )
                                '+' === r[0]
                                    ? ((r = r.slice(1) || '*'),
                                      (t[r] = t[r] || []).unshift(n))
                                    : (t[r] = t[r] || []).push(n);
                    };
                }
                function Ie(t, e, n, r) {
                    var o = {},
                        i = t === Me;
                    function a(s) {
                        var l;
                        return (
                            (o[s] = !0),
                            T.each(t[s] || [], function(t, s) {
                                var u = s(e, n, r);
                                return 'string' != typeof u || i || o[u]
                                    ? i
                                        ? !(l = u)
                                        : void 0
                                    : (e.dataTypes.unshift(u), a(u), !1);
                            }),
                            l
                        );
                    }
                    return a(e.dataTypes[0]) || (!o['*'] && a('*'));
                }
                function $e(t, e) {
                    var n,
                        r,
                        o = T.ajaxSettings.flatOptions || {};
                    for (n in e)
                        void 0 !== e[n] &&
                            ((o[n] ? t : r || (r = {}))[n] = e[n]);
                    return r && T.extend(!0, t, r), t;
                }
                (Re.href = xe.href),
                    T.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: xe.href,
                            type: 'GET',
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                xe.protocol
                            ),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType:
                                'application/x-www-form-urlencoded; charset=UTF-8',
                            accepts: {
                                '*': Pe,
                                text: 'text/plain',
                                html: 'text/html',
                                xml: 'application/xml, text/xml',
                                json: 'application/json, text/javascript'
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: 'responseXML',
                                text: 'responseText',
                                json: 'responseJSON'
                            },
                            converters: {
                                '* text': String,
                                'text html': !0,
                                'text json': JSON.parse,
                                'text xml': T.parseXML
                            },
                            flatOptions: { url: !0, context: !0 }
                        },
                        ajaxSetup: function(t, e) {
                            return e
                                ? $e($e(t, T.ajaxSettings), e)
                                : $e(T.ajaxSettings, t);
                        },
                        ajaxPrefilter: He(Oe),
                        ajaxTransport: He(Me),
                        ajax: function(t, e) {
                            'object' == typeof t && ((e = t), (t = void 0)),
                                (e = e || {});
                            var r,
                                o,
                                i,
                                s,
                                l,
                                u,
                                c,
                                f,
                                p,
                                d,
                                h = T.ajaxSetup({}, e),
                                y = h.context || h,
                                g =
                                    h.context && (y.nodeType || y.jquery)
                                        ? T(y)
                                        : T.event,
                                m = T.Deferred(),
                                v = T.Callbacks('once memory'),
                                b = h.statusCode || {},
                                x = {},
                                w = {},
                                _ = 'canceled',
                                A = {
                                    readyState: 0,
                                    getResponseHeader: function(t) {
                                        var e;
                                        if (c) {
                                            if (!s)
                                                for (s = {}; (e = De.exec(i)); )
                                                    s[e[1].toLowerCase()] =
                                                        e[2];
                                            e = s[t.toLowerCase()];
                                        }
                                        return null == e ? null : e;
                                    },
                                    getAllResponseHeaders: function() {
                                        return c ? i : null;
                                    },
                                    setRequestHeader: function(t, e) {
                                        return (
                                            null == c &&
                                                ((t = w[t.toLowerCase()] =
                                                    w[t.toLowerCase()] || t),
                                                (x[t] = e)),
                                            this
                                        );
                                    },
                                    overrideMimeType: function(t) {
                                        return (
                                            null == c && (h.mimeType = t), this
                                        );
                                    },
                                    statusCode: function(t) {
                                        var e;
                                        if (t)
                                            if (c) A.always(t[A.status]);
                                            else
                                                for (e in t)
                                                    b[e] = [b[e], t[e]];
                                        return this;
                                    },
                                    abort: function(t) {
                                        var e = t || _;
                                        return r && r.abort(e), k(0, e), this;
                                    }
                                };
                            if (
                                (m.promise(A),
                                (h.url = ((t || h.url || xe.href) + '').replace(
                                    Le,
                                    xe.protocol + '//'
                                )),
                                (h.type =
                                    e.method || e.type || h.method || h.type),
                                (h.dataTypes = (h.dataType || '*')
                                    .toLowerCase()
                                    .match(H) || ['']),
                                null == h.crossDomain)
                            ) {
                                u = a.createElement('a');
                                try {
                                    (u.href = h.url),
                                        (u.href = u.href),
                                        (h.crossDomain =
                                            Re.protocol + '//' + Re.host !=
                                            u.protocol + '//' + u.host);
                                } catch (t) {
                                    h.crossDomain = !0;
                                }
                            }
                            if (
                                (h.data &&
                                    h.processData &&
                                    'string' != typeof h.data &&
                                    (h.data = T.param(h.data, h.traditional)),
                                Ie(Oe, h, e, A),
                                c)
                            )
                                return A;
                            for (p in ((f = T.event && h.global) &&
                                0 == T.active++ &&
                                T.event.trigger('ajaxStart'),
                            (h.type = h.type.toUpperCase()),
                            (h.hasContent = !qe.test(h.type)),
                            (o = h.url.replace(je, '')),
                            h.hasContent
                                ? h.data &&
                                  h.processData &&
                                  0 ===
                                      (h.contentType || '').indexOf(
                                          'application/x-www-form-urlencoded'
                                      ) &&
                                  (h.data = h.data.replace(Se, '+'))
                                : ((d = h.url.slice(o.length)),
                                  h.data &&
                                      (h.processData ||
                                          'string' == typeof h.data) &&
                                      ((o += (_e.test(o) ? '&' : '?') + h.data),
                                      delete h.data),
                                  !1 === h.cache &&
                                      ((o = o.replace(Ne, '$1')),
                                      (d =
                                          (_e.test(o) ? '&' : '?') +
                                          '_=' +
                                          we++ +
                                          d)),
                                  (h.url = o + d)),
                            h.ifModified &&
                                (T.lastModified[o] &&
                                    A.setRequestHeader(
                                        'If-Modified-Since',
                                        T.lastModified[o]
                                    ),
                                T.etag[o] &&
                                    A.setRequestHeader(
                                        'If-None-Match',
                                        T.etag[o]
                                    )),
                            ((h.data && h.hasContent && !1 !== h.contentType) ||
                                e.contentType) &&
                                A.setRequestHeader(
                                    'Content-Type',
                                    h.contentType
                                ),
                            A.setRequestHeader(
                                'Accept',
                                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                                    ? h.accepts[h.dataTypes[0]] +
                                          ('*' !== h.dataTypes[0]
                                              ? ', ' + Pe + '; q=0.01'
                                              : '')
                                    : h.accepts['*']
                            ),
                            h.headers))
                                A.setRequestHeader(p, h.headers[p]);
                            if (
                                h.beforeSend &&
                                (!1 === h.beforeSend.call(y, A, h) || c)
                            )
                                return A.abort();
                            if (
                                ((_ = 'abort'),
                                v.add(h.complete),
                                A.done(h.success),
                                A.fail(h.error),
                                (r = Ie(Me, h, e, A)))
                            ) {
                                if (
                                    ((A.readyState = 1),
                                    f && g.trigger('ajaxSend', [A, h]),
                                    c)
                                )
                                    return A;
                                h.async &&
                                    h.timeout > 0 &&
                                    (l = n.setTimeout(function() {
                                        A.abort('timeout');
                                    }, h.timeout));
                                try {
                                    (c = !1), r.send(x, k);
                                } catch (t) {
                                    if (c) throw t;
                                    k(-1, t);
                                }
                            } else k(-1, 'No Transport');
                            function k(t, e, a, s) {
                                var u,
                                    p,
                                    d,
                                    x,
                                    w,
                                    _ = e;
                                c ||
                                    ((c = !0),
                                    l && n.clearTimeout(l),
                                    (r = void 0),
                                    (i = s || ''),
                                    (A.readyState = t > 0 ? 4 : 0),
                                    (u = (t >= 200 && t < 300) || 304 === t),
                                    a &&
                                        (x = (function(t, e, n) {
                                            for (
                                                var r,
                                                    o,
                                                    i,
                                                    a,
                                                    s = t.contents,
                                                    l = t.dataTypes;
                                                '*' === l[0];

                                            )
                                                l.shift(),
                                                    void 0 === r &&
                                                        (r =
                                                            t.mimeType ||
                                                            e.getResponseHeader(
                                                                'Content-Type'
                                                            ));
                                            if (r)
                                                for (o in s)
                                                    if (s[o] && s[o].test(r)) {
                                                        l.unshift(o);
                                                        break;
                                                    }
                                            if (l[0] in n) i = l[0];
                                            else {
                                                for (o in n) {
                                                    if (
                                                        !l[0] ||
                                                        t.converters[
                                                            o + ' ' + l[0]
                                                        ]
                                                    ) {
                                                        i = o;
                                                        break;
                                                    }
                                                    a || (a = o);
                                                }
                                                i = i || a;
                                            }
                                            if (i)
                                                return (
                                                    i !== l[0] && l.unshift(i),
                                                    n[i]
                                                );
                                        })(h, A, a)),
                                    (x = (function(t, e, n, r) {
                                        var o,
                                            i,
                                            a,
                                            s,
                                            l,
                                            u = {},
                                            c = t.dataTypes.slice();
                                        if (c[1])
                                            for (a in t.converters)
                                                u[a.toLowerCase()] =
                                                    t.converters[a];
                                        for (i = c.shift(); i; )
                                            if (
                                                (t.responseFields[i] &&
                                                    (n[
                                                        t.responseFields[i]
                                                    ] = e),
                                                !l &&
                                                    r &&
                                                    t.dataFilter &&
                                                    (e = t.dataFilter(
                                                        e,
                                                        t.dataType
                                                    )),
                                                (l = i),
                                                (i = c.shift()))
                                            )
                                                if ('*' === i) i = l;
                                                else if ('*' !== l && l !== i) {
                                                    if (
                                                        !(a =
                                                            u[l + ' ' + i] ||
                                                            u['* ' + i])
                                                    )
                                                        for (o in u)
                                                            if (
                                                                (s = o.split(
                                                                    ' '
                                                                ))[1] === i &&
                                                                (a =
                                                                    u[
                                                                        l +
                                                                            ' ' +
                                                                            s[0]
                                                                    ] ||
                                                                    u[
                                                                        '* ' +
                                                                            s[0]
                                                                    ])
                                                            ) {
                                                                !0 === a
                                                                    ? (a = u[o])
                                                                    : !0 !==
                                                                          u[
                                                                              o
                                                                          ] &&
                                                                      ((i =
                                                                          s[0]),
                                                                      c.unshift(
                                                                          s[1]
                                                                      ));
                                                                break;
                                                            }
                                                    if (!0 !== a)
                                                        if (a && t.throws)
                                                            e = a(e);
                                                        else
                                                            try {
                                                                e = a(e);
                                                            } catch (t) {
                                                                return {
                                                                    state:
                                                                        'parsererror',
                                                                    error: a
                                                                        ? t
                                                                        : 'No conversion from ' +
                                                                          l +
                                                                          ' to ' +
                                                                          i
                                                                };
                                                            }
                                                }
                                        return { state: 'success', data: e };
                                    })(h, x, A, u)),
                                    u
                                        ? (h.ifModified &&
                                              ((w = A.getResponseHeader(
                                                  'Last-Modified'
                                              )) && (T.lastModified[o] = w),
                                              (w = A.getResponseHeader(
                                                  'etag'
                                              )) && (T.etag[o] = w)),
                                          204 === t || 'HEAD' === h.type
                                              ? (_ = 'nocontent')
                                              : 304 === t
                                              ? (_ = 'notmodified')
                                              : ((_ = x.state),
                                                (p = x.data),
                                                (u = !(d = x.error))))
                                        : ((d = _),
                                          (!t && _) ||
                                              ((_ = 'error'),
                                              t < 0 && (t = 0))),
                                    (A.status = t),
                                    (A.statusText = (e || _) + ''),
                                    u
                                        ? m.resolveWith(y, [p, _, A])
                                        : m.rejectWith(y, [A, _, d]),
                                    A.statusCode(b),
                                    (b = void 0),
                                    f &&
                                        g.trigger(
                                            u ? 'ajaxSuccess' : 'ajaxError',
                                            [A, h, u ? p : d]
                                        ),
                                    v.fireWith(y, [A, _]),
                                    f &&
                                        (g.trigger('ajaxComplete', [A, h]),
                                        --T.active ||
                                            T.event.trigger('ajaxStop')));
                            }
                            return A;
                        },
                        getJSON: function(t, e, n) {
                            return T.get(t, e, n, 'json');
                        },
                        getScript: function(t, e) {
                            return T.get(t, void 0, e, 'script');
                        }
                    }),
                    T.each(['get', 'post'], function(t, e) {
                        T[e] = function(t, n, r, o) {
                            return (
                                v(n) && ((o = o || r), (r = n), (n = void 0)),
                                T.ajax(
                                    T.extend(
                                        {
                                            url: t,
                                            type: e,
                                            dataType: o,
                                            data: n,
                                            success: r
                                        },
                                        T.isPlainObject(t) && t
                                    )
                                )
                            );
                        };
                    }),
                    (T._evalUrl = function(t) {
                        return T.ajax({
                            url: t,
                            type: 'GET',
                            dataType: 'script',
                            cache: !0,
                            async: !1,
                            global: !1,
                            throws: !0
                        });
                    }),
                    T.fn.extend({
                        wrapAll: function(t) {
                            var e;
                            return (
                                this[0] &&
                                    (v(t) && (t = t.call(this[0])),
                                    (e = T(t, this[0].ownerDocument)
                                        .eq(0)
                                        .clone(!0)),
                                    this[0].parentNode &&
                                        e.insertBefore(this[0]),
                                    e
                                        .map(function() {
                                            for (
                                                var t = this;
                                                t.firstElementChild;

                                            )
                                                t = t.firstElementChild;
                                            return t;
                                        })
                                        .append(this)),
                                this
                            );
                        },
                        wrapInner: function(t) {
                            return v(t)
                                ? this.each(function(e) {
                                      T(this).wrapInner(t.call(this, e));
                                  })
                                : this.each(function() {
                                      var e = T(this),
                                          n = e.contents();
                                      n.length ? n.wrapAll(t) : e.append(t);
                                  });
                        },
                        wrap: function(t) {
                            var e = v(t);
                            return this.each(function(n) {
                                T(this).wrapAll(e ? t.call(this, n) : t);
                            });
                        },
                        unwrap: function(t) {
                            return (
                                this.parent(t)
                                    .not('body')
                                    .each(function() {
                                        T(this).replaceWith(this.childNodes);
                                    }),
                                this
                            );
                        }
                    }),
                    (T.expr.pseudos.hidden = function(t) {
                        return !T.expr.pseudos.visible(t);
                    }),
                    (T.expr.pseudos.visible = function(t) {
                        return !!(
                            t.offsetWidth ||
                            t.offsetHeight ||
                            t.getClientRects().length
                        );
                    }),
                    (T.ajaxSettings.xhr = function() {
                        try {
                            return new n.XMLHttpRequest();
                        } catch (t) {}
                    });
                var Be = { 0: 200, 1223: 204 },
                    Fe = T.ajaxSettings.xhr();
                (m.cors = !!Fe && 'withCredentials' in Fe),
                    (m.ajax = Fe = !!Fe),
                    T.ajaxTransport(function(t) {
                        var e, r;
                        if (m.cors || (Fe && !t.crossDomain))
                            return {
                                send: function(o, i) {
                                    var a,
                                        s = t.xhr();
                                    if (
                                        (s.open(
                                            t.type,
                                            t.url,
                                            t.async,
                                            t.username,
                                            t.password
                                        ),
                                        t.xhrFields)
                                    )
                                        for (a in t.xhrFields)
                                            s[a] = t.xhrFields[a];
                                    for (a in (t.mimeType &&
                                        s.overrideMimeType &&
                                        s.overrideMimeType(t.mimeType),
                                    t.crossDomain ||
                                        o['X-Requested-With'] ||
                                        (o['X-Requested-With'] =
                                            'XMLHttpRequest'),
                                    o))
                                        s.setRequestHeader(a, o[a]);
                                    (e = function(t) {
                                        return function() {
                                            e &&
                                                ((e = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                'abort' === t
                                                    ? s.abort()
                                                    : 'error' === t
                                                    ? 'number' !=
                                                      typeof s.status
                                                        ? i(0, 'error')
                                                        : i(
                                                              s.status,
                                                              s.statusText
                                                          )
                                                    : i(
                                                          Be[s.status] ||
                                                              s.status,
                                                          s.statusText,
                                                          'text' !==
                                                              (s.responseType ||
                                                                  'text') ||
                                                              'string' !=
                                                                  typeof s.responseText
                                                              ? {
                                                                    binary:
                                                                        s.response
                                                                }
                                                              : {
                                                                    text:
                                                                        s.responseText
                                                                },
                                                          s.getAllResponseHeaders()
                                                      ));
                                        };
                                    }),
                                        (s.onload = e()),
                                        (r = s.onerror = s.ontimeout = e(
                                            'error'
                                        )),
                                        void 0 !== s.onabort
                                            ? (s.onabort = r)
                                            : (s.onreadystatechange = function() {
                                                  4 === s.readyState &&
                                                      n.setTimeout(function() {
                                                          e && r();
                                                      });
                                              }),
                                        (e = e('abort'));
                                    try {
                                        s.send(
                                            (t.hasContent && t.data) || null
                                        );
                                    } catch (t) {
                                        if (e) throw t;
                                    }
                                },
                                abort: function() {
                                    e && e();
                                }
                            };
                    }),
                    T.ajaxPrefilter(function(t) {
                        t.crossDomain && (t.contents.script = !1);
                    }),
                    T.ajaxSetup({
                        accepts: {
                            script:
                                'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
                        },
                        contents: { script: /\b(?:java|ecma)script\b/ },
                        converters: {
                            'text script': function(t) {
                                return T.globalEval(t), t;
                            }
                        }
                    }),
                    T.ajaxPrefilter('script', function(t) {
                        void 0 === t.cache && (t.cache = !1),
                            t.crossDomain && (t.type = 'GET');
                    }),
                    T.ajaxTransport('script', function(t) {
                        var e, n;
                        if (t.crossDomain)
                            return {
                                send: function(r, o) {
                                    (e = T('<script>')
                                        .prop({
                                            charset: t.scriptCharset,
                                            src: t.url
                                        })
                                        .on(
                                            'load error',
                                            (n = function(t) {
                                                e.remove(),
                                                    (n = null),
                                                    t &&
                                                        o(
                                                            'error' === t.type
                                                                ? 404
                                                                : 200,
                                                            t.type
                                                        );
                                            })
                                        )),
                                        a.head.appendChild(e[0]);
                                },
                                abort: function() {
                                    n && n();
                                }
                            };
                    });
                var Ue = [],
                    We = /(=)\?(?=&|$)|\?\?/;
                T.ajaxSetup({
                    jsonp: 'callback',
                    jsonpCallback: function() {
                        var t = Ue.pop() || T.expando + '_' + we++;
                        return (this[t] = !0), t;
                    }
                }),
                    T.ajaxPrefilter('json jsonp', function(t, e, r) {
                        var o,
                            i,
                            a,
                            s =
                                !1 !== t.jsonp &&
                                (We.test(t.url)
                                    ? 'url'
                                    : 'string' == typeof t.data &&
                                      0 ===
                                          (t.contentType || '').indexOf(
                                              'application/x-www-form-urlencoded'
                                          ) &&
                                      We.test(t.data) &&
                                      'data');
                        if (s || 'jsonp' === t.dataTypes[0])
                            return (
                                (o = t.jsonpCallback = v(t.jsonpCallback)
                                    ? t.jsonpCallback()
                                    : t.jsonpCallback),
                                s
                                    ? (t[s] = t[s].replace(We, '$1' + o))
                                    : !1 !== t.jsonp &&
                                      (t.url +=
                                          (_e.test(t.url) ? '&' : '?') +
                                          t.jsonp +
                                          '=' +
                                          o),
                                (t.converters['script json'] = function() {
                                    return (
                                        a || T.error(o + ' was not called'),
                                        a[0]
                                    );
                                }),
                                (t.dataTypes[0] = 'json'),
                                (i = n[o]),
                                (n[o] = function() {
                                    a = arguments;
                                }),
                                r.always(function() {
                                    void 0 === i
                                        ? T(n).removeProp(o)
                                        : (n[o] = i),
                                        t[o] &&
                                            ((t.jsonpCallback =
                                                e.jsonpCallback),
                                            Ue.push(o)),
                                        a && v(i) && i(a[0]),
                                        (a = i = void 0);
                                }),
                                'script'
                            );
                    }),
                    (m.createHTMLDocument = (function() {
                        var t = a.implementation.createHTMLDocument('').body;
                        return (
                            (t.innerHTML = '<form></form><form></form>'),
                            2 === t.childNodes.length
                        );
                    })()),
                    (T.parseHTML = function(t, e, n) {
                        return 'string' != typeof t
                            ? []
                            : ('boolean' == typeof e && ((n = e), (e = !1)),
                              e ||
                                  (m.createHTMLDocument
                                      ? (((r = (e = a.implementation.createHTMLDocument(
                                            ''
                                        )).createElement('base')).href =
                                            a.location.href),
                                        e.head.appendChild(r))
                                      : (e = a)),
                              (o = D.exec(t)),
                              (i = !n && []),
                              o
                                  ? [e.createElement(o[1])]
                                  : ((o = bt([t], e, i)),
                                    i && i.length && T(i).remove(),
                                    T.merge([], o.childNodes)));
                        var r, o, i;
                    }),
                    (T.fn.load = function(t, e, n) {
                        var r,
                            o,
                            i,
                            a = this,
                            s = t.indexOf(' ');
                        return (
                            s > -1 &&
                                ((r = he(t.slice(s))), (t = t.slice(0, s))),
                            v(e)
                                ? ((n = e), (e = void 0))
                                : e && 'object' == typeof e && (o = 'POST'),
                            a.length > 0 &&
                                T.ajax({
                                    url: t,
                                    type: o || 'GET',
                                    dataType: 'html',
                                    data: e
                                })
                                    .done(function(t) {
                                        (i = arguments),
                                            a.html(
                                                r
                                                    ? T('<div>')
                                                          .append(
                                                              T.parseHTML(t)
                                                          )
                                                          .find(r)
                                                    : t
                                            );
                                    })
                                    .always(
                                        n &&
                                            function(t, e) {
                                                a.each(function() {
                                                    n.apply(
                                                        this,
                                                        i || [
                                                            t.responseText,
                                                            e,
                                                            t
                                                        ]
                                                    );
                                                });
                                            }
                                    ),
                            this
                        );
                    }),
                    T.each(
                        [
                            'ajaxStart',
                            'ajaxStop',
                            'ajaxComplete',
                            'ajaxError',
                            'ajaxSuccess',
                            'ajaxSend'
                        ],
                        function(t, e) {
                            T.fn[e] = function(t) {
                                return this.on(e, t);
                            };
                        }
                    ),
                    (T.expr.pseudos.animated = function(t) {
                        return T.grep(T.timers, function(e) {
                            return t === e.elem;
                        }).length;
                    }),
                    (T.offset = {
                        setOffset: function(t, e, n) {
                            var r,
                                o,
                                i,
                                a,
                                s,
                                l,
                                u = T.css(t, 'position'),
                                c = T(t),
                                f = {};
                            'static' === u && (t.style.position = 'relative'),
                                (s = c.offset()),
                                (i = T.css(t, 'top')),
                                (l = T.css(t, 'left')),
                                ('absolute' === u || 'fixed' === u) &&
                                (i + l).indexOf('auto') > -1
                                    ? ((a = (r = c.position()).top),
                                      (o = r.left))
                                    : ((a = parseFloat(i) || 0),
                                      (o = parseFloat(l) || 0)),
                                v(e) && (e = e.call(t, n, T.extend({}, s))),
                                null != e.top && (f.top = e.top - s.top + a),
                                null != e.left &&
                                    (f.left = e.left - s.left + o),
                                'using' in e ? e.using.call(t, f) : c.css(f);
                        }
                    }),
                    T.fn.extend({
                        offset: function(t) {
                            if (arguments.length)
                                return void 0 === t
                                    ? this
                                    : this.each(function(e) {
                                          T.offset.setOffset(this, t, e);
                                      });
                            var e,
                                n,
                                r = this[0];
                            return r
                                ? r.getClientRects().length
                                    ? ((e = r.getBoundingClientRect()),
                                      (n = r.ownerDocument.defaultView),
                                      {
                                          top: e.top + n.pageYOffset,
                                          left: e.left + n.pageXOffset
                                      })
                                    : { top: 0, left: 0 }
                                : void 0;
                        },
                        position: function() {
                            if (this[0]) {
                                var t,
                                    e,
                                    n,
                                    r = this[0],
                                    o = { top: 0, left: 0 };
                                if ('fixed' === T.css(r, 'position'))
                                    e = r.getBoundingClientRect();
                                else {
                                    for (
                                        e = this.offset(),
                                            n = r.ownerDocument,
                                            t =
                                                r.offsetParent ||
                                                n.documentElement;
                                        t &&
                                        (t === n.body ||
                                            t === n.documentElement) &&
                                        'static' === T.css(t, 'position');

                                    )
                                        t = t.parentNode;
                                    t &&
                                        t !== r &&
                                        1 === t.nodeType &&
                                        (((o = T(t).offset()).top += T.css(
                                            t,
                                            'borderTopWidth',
                                            !0
                                        )),
                                        (o.left += T.css(
                                            t,
                                            'borderLeftWidth',
                                            !0
                                        )));
                                }
                                return {
                                    top:
                                        e.top -
                                        o.top -
                                        T.css(r, 'marginTop', !0),
                                    left:
                                        e.left -
                                        o.left -
                                        T.css(r, 'marginLeft', !0)
                                };
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for (
                                    var t = this.offsetParent;
                                    t && 'static' === T.css(t, 'position');

                                )
                                    t = t.offsetParent;
                                return t || xt;
                            });
                        }
                    }),
                    T.each(
                        { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
                        function(t, e) {
                            var n = 'pageYOffset' === e;
                            T.fn[t] = function(r) {
                                return z(
                                    this,
                                    function(t, r, o) {
                                        var i;
                                        if (
                                            (b(t)
                                                ? (i = t)
                                                : 9 === t.nodeType &&
                                                  (i = t.defaultView),
                                            void 0 === o)
                                        )
                                            return i ? i[e] : t[r];
                                        i
                                            ? i.scrollTo(
                                                  n ? i.pageXOffset : o,
                                                  n ? o : i.pageYOffset
                                              )
                                            : (t[r] = o);
                                    },
                                    t,
                                    r,
                                    arguments.length
                                );
                            };
                        }
                    ),
                    T.each(['top', 'left'], function(t, e) {
                        T.cssHooks[e] = Ut(m.pixelPosition, function(t, n) {
                            if (n)
                                return (
                                    (n = Ft(t, e)),
                                    It.test(n) ? T(t).position()[e] + 'px' : n
                                );
                        });
                    }),
                    T.each({ Height: 'height', Width: 'width' }, function(
                        t,
                        e
                    ) {
                        T.each(
                            {
                                padding: 'inner' + t,
                                content: e,
                                '': 'outer' + t
                            },
                            function(n, r) {
                                T.fn[r] = function(o, i) {
                                    var a =
                                            arguments.length &&
                                            (n || 'boolean' != typeof o),
                                        s =
                                            n ||
                                            (!0 === o || !0 === i
                                                ? 'margin'
                                                : 'border');
                                    return z(
                                        this,
                                        function(e, n, o) {
                                            var i;
                                            return b(e)
                                                ? 0 === r.indexOf('outer')
                                                    ? e['inner' + t]
                                                    : e.document
                                                          .documentElement[
                                                          'client' + t
                                                      ]
                                                : 9 === e.nodeType
                                                ? ((i = e.documentElement),
                                                  Math.max(
                                                      e.body['scroll' + t],
                                                      i['scroll' + t],
                                                      e.body['offset' + t],
                                                      i['offset' + t],
                                                      i['client' + t]
                                                  ))
                                                : void 0 === o
                                                ? T.css(e, n, s)
                                                : T.style(e, n, o, s);
                                        },
                                        e,
                                        a ? o : void 0,
                                        a
                                    );
                                };
                            }
                        );
                    }),
                    T.each(
                        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                            ' '
                        ),
                        function(t, e) {
                            T.fn[e] = function(t, n) {
                                return arguments.length > 0
                                    ? this.on(e, null, t, n)
                                    : this.trigger(e);
                            };
                        }
                    ),
                    T.fn.extend({
                        hover: function(t, e) {
                            return this.mouseenter(t).mouseleave(e || t);
                        }
                    }),
                    T.fn.extend({
                        bind: function(t, e, n) {
                            return this.on(t, null, e, n);
                        },
                        unbind: function(t, e) {
                            return this.off(t, null, e);
                        },
                        delegate: function(t, e, n, r) {
                            return this.on(e, t, n, r);
                        },
                        undelegate: function(t, e, n) {
                            return 1 === arguments.length
                                ? this.off(t, '**')
                                : this.off(e, t || '**', n);
                        }
                    }),
                    (T.proxy = function(t, e) {
                        var n, r, o;
                        if (
                            ('string' == typeof e &&
                                ((n = t[e]), (e = t), (t = n)),
                            v(t))
                        )
                            return (
                                (r = l.call(arguments, 2)),
                                ((o = function() {
                                    return t.apply(
                                        e || this,
                                        r.concat(l.call(arguments))
                                    );
                                }).guid = t.guid = t.guid || T.guid++),
                                o
                            );
                    }),
                    (T.holdReady = function(t) {
                        t ? T.readyWait++ : T.ready(!0);
                    }),
                    (T.isArray = Array.isArray),
                    (T.parseJSON = JSON.parse),
                    (T.nodeName = N),
                    (T.isFunction = v),
                    (T.isWindow = b),
                    (T.camelCase = Y),
                    (T.type = _),
                    (T.now = Date.now),
                    (T.isNumeric = function(t) {
                        var e = T.type(t);
                        return (
                            ('number' === e || 'string' === e) &&
                            !isNaN(t - parseFloat(t))
                        );
                    }),
                    void 0 ===
                        (r = function() {
                            return T;
                        }.apply(e, [])) || (t.exports = r);
                var ze = n.jQuery,
                    Xe = n.$;
                return (
                    (T.noConflict = function(t) {
                        return (
                            n.$ === T && (n.$ = Xe),
                            t && n.jQuery === T && (n.jQuery = ze),
                            T
                        );
                    }),
                    o || (n.jQuery = n.$ = T),
                    T
                );
            });
        },
        function(t, e, n) {
            'use strict';
            const r = Object.freeze({
                topRight: (t, e) =>
                    e[0] < t[0]
                        ? -1
                        : e[0] > t[0]
                        ? 1
                        : e[1] < t[1]
                        ? -1
                        : e[1] > t[1]
                        ? 1
                        : 0,
                topLeft: (t, e) =>
                    t[0] < e[0]
                        ? -1
                        : t[0] > e[0]
                        ? 1
                        : t[1] < e[1]
                        ? 1
                        : t[1] > e[1]
                        ? -1
                        : 0,
                bottomRight: (t, e) =>
                    e[0] < t[0]
                        ? -1
                        : e[0] > t[0]
                        ? 1
                        : e[1] < t[1]
                        ? 1
                        : e[1] > t[1]
                        ? -1
                        : 0,
                bottomLeft: (t, e) =>
                    t[0] < e[0]
                        ? -1
                        : t[0] > e[0]
                        ? 1
                        : t[1] < e[1]
                        ? -1
                        : t[1] > e[1]
                        ? 1
                        : 0
            });
            e.getParetoFrontier = (t, e) => {
                if (
                    !Array.isArray(t) ||
                    !t.every(t => Array.isArray(t) && t.length >= 2)
                )
                    throw new TypeError('Require array of points as input');
                const n = (e && r[e.optimize]) || r.topRight,
                    o = n([0, 1], [0, 0]) < 0;
                let i;
                return Array.from(t)
                    .sort(n)
                    .filter(
                        (t, e) =>
                            !!(
                                0 === e ||
                                (o && t[1] > i) ||
                                (!o && t[1] < i)
                            ) && ((i = t[1]), !0)
                    );
            };
        },
        function(t, e, n) {
            'use strict';
            n.r(e);
            n(9);
            var r = n(1),
                o = n.n(r),
                i =
                    (n(4),
                    Object.assign ||
                        function(t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (e = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        o
                                    ) && (t[o] = e[o]);
                            return t;
                        });
            function a(t, e, n) {
                var r = this,
                    o = function() {
                        if (t.length > 0) {
                            var i = t.shift();
                            i && i.apply(r, [e, o]);
                        } else n(e);
                    };
                o();
            }
            function s(t, e) {
                var n;
                try {
                    n = JSON.stringify(t);
                } catch (t) {
                    throw new Error(
                        'Network request failed. Payload is not serializable: ' +
                            t.message
                    );
                }
                return i({ body: n, method: 'POST' }, e, {
                    headers: i(
                        { Accept: '*/*', 'Content-Type': 'application/json' },
                        e.headers || []
                    )
                });
            }
            function l(t) {
                void 0 === t && (t = {});
                var e = t.constructOptions,
                    n = t.customFetch,
                    r = t.uri || '/graphql',
                    o = [],
                    l = [],
                    u = [],
                    c = [],
                    f = function(t) {
                        var f,
                            p = {},
                            d = Array.isArray(t);
                        return (function(t, e) {
                            return new Promise(function(n, r) {
                                a(e ? l.slice() : o.slice(), t, n);
                            });
                        })(
                            d
                                ? { requests: t, options: p }
                                : { request: t, options: p },
                            d
                        )
                            .then(function(t) {
                                return (e ||
                                    s)(t.request || t.requests, t.options);
                            })
                            .then(function(t) {
                                return (p = i({}, t)), (n || fetch)(r, p);
                            })
                            .then(function(t) {
                                return t.text().then(function(e) {
                                    try {
                                        var n = JSON.parse(e);
                                        return (t.raw = e), (t.parsed = n), t;
                                    } catch (n) {
                                        return (f = n), (t.raw = e), t;
                                    }
                                });
                            })
                            .then(function(t) {
                                return (function(t, e) {
                                    return new Promise(function(n, r) {
                                        a(e ? c.slice() : u.slice(), t, n);
                                    });
                                })({ response: t, options: p }, d);
                            })
                            .then(function(t) {
                                var e = t.response;
                                if (e.parsed) {
                                    if (!d) return i({}, e.parsed);
                                    if (Array.isArray(e.parsed))
                                        return e.parsed;
                                    !(function(t) {
                                        var e = new Error(
                                            'A batched Operation of responses for '
                                        );
                                        throw ((e.response = t), e);
                                    })(e);
                                } else
                                    !(function(t, e) {
                                        var n;
                                        throw (((n =
                                            t && t.status >= 300
                                                ? new Error(
                                                      'Network request failed with status ' +
                                                          t.status +
                                                          ' - "' +
                                                          t.statusText +
                                                          '"'
                                                  )
                                                : new Error(
                                                      'Network request failed to return valid JSON'
                                                  )).response = t),
                                        (n.parseError = e),
                                        n);
                                    })(e, f);
                            });
                    };
                return (
                    (f.use = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Middleware must be a function');
                        return o.push(t), f;
                    }),
                    (f.useAfter = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Afterware must be a function');
                        return u.push(t), f;
                    }),
                    (f.batchUse = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Middleware must be a function');
                        return l.push(t), f;
                    }),
                    (f.batchUseAfter = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Afterware must be a function');
                        return c.push(t), f;
                    }),
                    f
                );
            }
            function u(t) {
                let e = t + '__none',
                    n = t + '__squares',
                    r = t + '__diagonals',
                    o = t + '__clusters';
                d3.select('#' + t)
                    .append('div')
                    .attr('id', 'tooltip_container');
                let i = d3
                    .select('#' + t)
                    .append('form')
                    .append('select')
                    .attr('class', 'classificators_list')
                    .attr('id', t + '_dropdown_list')
                    .on('change', function(t) {
                        let e = document.getElementById(
                                this.options[this.selectedIndex].id.split(
                                    '__'
                                )[0]
                            ),
                            n = e.getAttribute('metric_x'),
                            r = e.getAttribute('metric_y');
                        q(this.options[this.selectedIndex].id, n, r, j);
                    })
                    .append('optgroup')
                    .attr('label', 'Select a classification method:');
                i
                    .append('option')
                    .attr('class', 'selection_option')
                    .attr('id', e)
                    .attr('title', 'Show only raw data')
                    .attr('selected', 'disabled')
                    .attr('data-toggle', 'list_tooltip')
                    .attr('data-container', '#tooltip_container')
                    .text('NO CLASSIFICATION'),
                    i
                        .append('option')
                        .attr('class', 'selection_option')
                        .attr('id', n)
                        .attr(
                            'title',
                            'Apply square quartiles classification method (based on the 0.5 quartile of the X and Y metrics)'
                        )
                        .attr('data-toggle', 'list_tooltip')
                        .attr('data-container', '#tooltip_container')
                        .text('SQUARE QUARTILES'),
                    i
                        .append('option')
                        .attr('class', 'selection_option')
                        .attr('id', r)
                        .attr(
                            'title',
                            "Apply diagonal quartiles classifcation method (based on the assignment of a score to each participant proceeding from its distance to the 'optimal performance' corner)"
                        )
                        .attr('data-toggle', 'list_tooltip')
                        .attr('data-container', '#tooltip_container')
                        .text('DIAGONAL QUARTILES'),
                    i
                        .append('option')
                        .attr('class', 'selection_option')
                        .attr('id', o)
                        .attr(
                            'title',
                            'Apply K-Means clustering method (group the participants using the K-means clustering algorithm and sort the clusters according to the performance)'
                        )
                        .attr('data-toggle', 'list_tooltip')
                        .attr('data-container', '#tooltip_container')
                        .text('K-MEANS CLUSTERING');
            }
            function c(t, e) {
                let n = [];
                return (
                    t.forEach(t => {
                        -1 ==
                            $.inArray(
                                t.toolname.replace(/[\. ()/_]/g, '-'),
                                e
                            ) && n.push(t);
                    }),
                    n
                );
            }
            var f = n(2);
            function p(t, e, n, r) {
                var o = document.getElementById(t + '_table'),
                    i = o.insertRow(-1);
                (i.insertCell(0).innerHTML = '<b>TOOL</b>'),
                    (i.insertCell(1).innerHTML = '<b>QUARTILE</b>'),
                    n.forEach(function(n) {
                        var i = o.insertRow(-1);
                        if (
                            ((i.insertCell(0).innerHTML = n.toolname),
                            -1 ==
                                $.inArray(
                                    n.toolname.replace(/[\. ()/_]/g, '-'),
                                    r
                                ))
                        ) {
                            let t = e.find(
                                t =>
                                    t.toolname.replace(/[\. ()/_]/g, '-') ===
                                    n.toolname.replace(/[\. ()/_]/g, '-')
                            );
                            i.insertCell(1).innerHTML = t.quartile;
                        } else i.insertCell(1).innerHTML = '--';
                        var a = i.cells[0];
                        (a.id =
                            t +
                            '___cell' +
                            n.toolname.replace(/[\. ()/-]/g, '_')),
                            a.addEventListener('click', function(e) {
                                let n = this.id,
                                    r =
                                        t +
                                        '___leg_rect' +
                                        n.split('___cell')[1];
                                document
                                    .getElementById(r)
                                    .dispatchEvent(new Event('click'));
                            }),
                            a.addEventListener('mouseover', function(t) {
                                let e = this.id;
                                d3.select(this).style('cursor', 'pointer');
                                e.split('___cell')[1];
                                1 == d3.select(this).style('opacity') ||
                                0.5 == d3.select(this).style('opacity')
                                    ? ($(this).css('opacity', 0.7),
                                      $(this)
                                          .closest('tr')
                                          .css('opacity', 0.7))
                                    : ($(this).css('opacity', 1),
                                      $(this)
                                          .closest('tr')
                                          .css('opacity', 1));
                            }),
                            a.addEventListener('mouseout', function(e) {
                                let n = this.id;
                                d3.select(this).style('cursor', 'default');
                                let r =
                                    t + '___leg_rect' + n.split('___cell')[1];
                                0.2 == d3.select('#' + r).style('opacity') ||
                                0.5 == d3.select('#' + r).style('opacity')
                                    ? ($(this).css('opacity', 0.5),
                                      $(this)
                                          .closest('tr')
                                          .css('opacity', 0.5))
                                    : ($(this).css('opacity', 1),
                                      $(this)
                                          .closest('tr')
                                          .css('opacity', 1));
                            });
                    });
            }
            function d(t, e, n) {
                var r = Object.keys(e);
                $('#' + t + '_table td').each(function() {
                    var t = $(this).html();
                    1 == t
                        ? $(this).css({ background: '#238b45' })
                        : 2 == t
                        ? $(this).css({ background: '#74c476' })
                        : 3 == t
                        ? $(this).css({ background: '#bae4b3' })
                        : 4 == t
                        ? $(this).css({ background: '#edf8e9' })
                        : '--' == t
                        ? $(this).css({ background: '#f0f0f5' })
                        : $.inArray(t, r) > -1 &&
                          -1 == $.inArray(t.replace(/[\. ()/_]/g, '-'), n)
                        ? $(this).css({
                              background:
                                  'linear-gradient(to left, white 92%, ' +
                                  e[t] +
                                  ' 8%)'
                          })
                        : $.inArray(t.replace(/[\. ()/_]/g, '-'), n) > -1
                        ? ($(this).css({
                              background:
                                  'linear-gradient(to left, white 92%, ' +
                                  e[t] +
                                  ' 8%)',
                              opacity: 0.5
                          }),
                          $(this)
                              .closest('tr')
                              .css('opacity', 0.5))
                        : $(this).css({ background: '#FFFFFF' });
                });
            }
            function h(t, e, n, r, o, i, a, s, l, u) {
                let f = c(t, i),
                    h = f
                        .map(t => t.x)
                        .sort(function(t, e) {
                            return t - e;
                        }),
                    y = f
                        .map(t => t.y)
                        .sort(function(t, e) {
                            return t - e;
                        }),
                    g = d3.quantile(h, 0.5),
                    m = d3.quantile(y, 0.5),
                    v = n.domain(),
                    b = r.domain(),
                    x = d3.format(',');
                e
                    .append('line')
                    .attr('x1', n(g))
                    .attr('y1', r(b[0]))
                    .attr('x2', n(g))
                    .attr('y2', r(b[1]))
                    .attr('id', function(t) {
                        return s + '___x_quartile';
                    })
                    .attr('stroke', '#0A58A2')
                    .attr('stroke-width', 2)
                    .style('stroke-dasharray', '20, 5')
                    .style('opacity', 0.4)
                    .on('mouseover', function(t) {
                        o
                            .transition()
                            .duration(100)
                            .style('opacity', 0.9),
                            o
                                .html('X quartile = ' + x(g))
                                .style('left', d3.event.pageX + 'px')
                                .style('top', d3.event.pageY + 'px');
                    })
                    .on('mouseout', function(t) {
                        o.transition()
                            .duration(1e3)
                            .style('opacity', 0);
                    }),
                    e
                        .append('line')
                        .attr('x1', n(v[0]))
                        .attr('y1', r(m))
                        .attr('x2', n(v[1]))
                        .attr('y2', r(m))
                        .attr('id', function(t) {
                            return s + '___y_quartile';
                        })
                        .attr('stroke', '#0A58A2')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '20, 5')
                        .style('opacity', 0.4)
                        .on('mouseover', function(t) {
                            o
                                .transition()
                                .duration(100)
                                .style('opacity', 0.9),
                                o
                                    .html('Y quartile = ' + x(m))
                                    .style('left', d3.event.pageX + 'px')
                                    .style('top', d3.event.pageY + 'px');
                        })
                        .on('mouseout', function(t) {
                            o.transition()
                                .duration(1500)
                                .style('opacity', 0);
                        }),
                    1 == l &&
                        (function(t, e, n, r, o, i, a, s) {
                            'bottom-right' == t
                                ? e.forEach(function(t) {
                                      t.x >= n && t.y <= r
                                          ? (t.quartile = 1)
                                          : t.x >= n && t.y > r
                                          ? (t.quartile = 3)
                                          : t.x < n && t.y > r
                                          ? (t.quartile = 4)
                                          : t.x < n &&
                                            t.y <= r &&
                                            (t.quartile = 2);
                                  })
                                : 'top-right' == t &&
                                  e.forEach(function(t) {
                                      t.x >= n && t.y < r
                                          ? (t.quartile = 3)
                                          : t.x >= n && t.y >= r
                                          ? (t.quartile = 1)
                                          : t.x < n && t.y >= r
                                          ? (t.quartile = 2)
                                          : t.x < n &&
                                            t.y < r &&
                                            (t.quartile = 4);
                                  });
                            p(o, e, a, s), d(o, i, s);
                        })(a, f, g, m, s, u, t, i);
            }
            function y(t, e, n, r, o, i, a, s, l, u, f, h) {
                let y = c(t, s),
                    m = y.map(t => t.x),
                    v = y.map(t => t.y),
                    b = (function(t, e) {
                        let n = Math.max.apply(null, t),
                            r = Math.max.apply(null, e),
                            o = t.map(function(t) {
                                return t / n;
                            }),
                            i = e.map(function(t) {
                                return t / r;
                            });
                        return [o, i];
                    })(m, v),
                    [x, w] = [b[0], b[1]],
                    _ = Math.max.apply(null, m),
                    T = Math.max.apply(null, v),
                    A = [],
                    k = {};
                for (let t = 0; t < x.length; t++)
                    'bottom-right' == l
                        ? (A.push(x[t] + (1 - w[t])),
                          (k[x[t] + (1 - w[t])] = [m[t], v[t]]),
                          (y[t].score = x[t] + (1 - w[t])))
                        : 'top-right' == l &&
                          (A.push(x[t] + w[t]),
                          (k[x[t] + w[t]] = [m[t], v[t]]),
                          (y[t].score = x[t] + w[t]));
                A.sort(function(t, e) {
                    return e - t;
                });
                let E = d3.quantile(A, 0.25),
                    C = d3.quantile(A, 0.5),
                    S = d3.quantile(A, 0.75),
                    j = 0;
                [
                    g(A, k, E, l, _, T, e, n, r),
                    g(A, k, C, l, _, T, e, n, r),
                    g(A, k, S, l, _, T, e, n, r)
                ].forEach(t => {
                    let [o, s] = [t[0], t[1]];
                    e
                        .append('line')
                        .attr('clip-path', 'url(#clip)')
                        .attr('x1', n(o[0]))
                        .attr('y1', r(s[0]))
                        .attr('x2', n(o[1]))
                        .attr('y2', r(s[1]))
                        .attr('id', function(t) {
                            return u + '___diag_quartile_' + j;
                        })
                        .attr('stroke', '#0A58A2')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '20, 5')
                        .style('opacity', 0.4),
                        e
                            .append('clipPath')
                            .attr('id', 'clip')
                            .append('rect')
                            .attr('width', i)
                            .attr('height', a),
                        (j += 1);
                }),
                    1 == f &&
                        (function(t, e, n, r, o, i, a, s, l, u, c) {
                            let f = [[], [], [], []];
                            t.forEach(function(t) {
                                t.score > e
                                    ? ((t.quartile = 1), f[0].push([t.x, t.y]))
                                    : t.score > n && t.score <= e
                                    ? ((t.quartile = 2), f[1].push([t.x, t.y]))
                                    : t.score > r && t.score <= n
                                    ? ((t.quartile = 3), f[2].push([t.x, t.y]))
                                    : t.score <= r &&
                                      ((t.quartile = 4), f[3].push([t.x, t.y]));
                            });
                            let h = 1;
                            f.forEach(function(t) {
                                var e = (function(t) {
                                    return t.reduce(
                                        function(e, n) {
                                            return [
                                                e[0] + n[0] / t.length,
                                                e[1] + n[1] / t.length
                                            ];
                                        },
                                        [0, 0]
                                    );
                                })(t);
                                i
                                    .append('text')
                                    .attr('class', function(t) {
                                        return o + '___diag_num';
                                    })
                                    .attr('x', a(e[0]))
                                    .attr('y', s(e[1]))
                                    .style('opacity', 0.4)
                                    .style('font-size', '2vw')
                                    .style('fill', '#0A58A2')
                                    .text(h),
                                    h++;
                            }),
                                p(o, t, u, c),
                                d(o, l, c);
                        })(y, E, C, S, u, e, n, r, h, t, s);
            }
            function g(t, e, n, r, o, i, a, s, l) {
                let u;
                for (let r = 0; r < t.length; r++)
                    if (t[r] <= n) {
                        u = [
                            [e[t[r - 1]][0], e[t[r - 1]][1]],
                            [e[t[r]][0], e[t[r]][1]]
                        ];
                        break;
                    }
                let c,
                    f,
                    p = [(u[0][0] + u[1][0]) / 2, (u[0][1] + u[1][1]) / 2];
                return (
                    'bottom-right' == r
                        ? ((c = [p[0] - 2 * o, p[0] + 2 * o]),
                          (f = [p[1] - 2 * i, p[1] + 2 * i]))
                        : 'top-right' == r &&
                          ((c = [p[0] + 2 * o, p[0] - 2 * o]),
                          (f = [p[1] - 2 * i, p[1] + 2 * i])),
                    [c, f]
                );
            }
            var m = n(0),
                v = function(t, e, n) {
                    return (
                        (e[0] - t[0]) * (n[1] - t[1]) -
                        (e[1] - t[1]) * (n[0] - t[0])
                    );
                };
            function b(t, e) {
                return t[0] - e[0] || t[1] - e[1];
            }
            function x(t) {
                for (var e = t.length, n = [0, 1], r = 2, o = 2; o < e; ++o) {
                    for (; r > 1 && v(t[n[r - 2]], t[n[r - 1]], t[o]) <= 0; )
                        --r;
                    n[r++] = o;
                }
                return n.slice(0, r);
            }
            var w = function(t) {
                if ((n = t.length) < 3) return null;
                var e,
                    n,
                    r = new Array(n),
                    o = new Array(n);
                for (e = 0; e < n; ++e) r[e] = [+t[e][0], +t[e][1], e];
                for (r.sort(b), e = 0; e < n; ++e) o[e] = [r[e][0], -r[e][1]];
                var i = x(r),
                    a = x(o),
                    s = a[0] === i[0],
                    l = a[a.length - 1] === i[i.length - 1],
                    u = [];
                for (e = i.length - 1; e >= 0; --e) u.push(t[r[i[e]][2]]);
                for (e = +s; e < a.length - l; ++e) u.push(t[r[a[e]][2]]);
                return u;
            };
            function _(t, e, n, r, o, i, a, s, l, u, f, h) {
                let y = c(t, s),
                    g = y.map(t => t.x),
                    v = y.map(t => t.y),
                    b = [];
                for (let t = 0; t < g.length; t++) b.push([g[t], v[t]]);
                m.k(4), m.iterations(500), m.data(b);
                let x = m.clusters(),
                    _ = [],
                    T = [];
                x.forEach(function(t) {
                    _.push(t.centroid[0]), T.push(t.centroid[1]);
                });
                let [A, k] = (function(t, e) {
                        let n = Math.max.apply(null, t),
                            r = Math.max.apply(null, e),
                            o = t.map(function(t) {
                                return t / n;
                            }),
                            i = e.map(function(t) {
                                return t / r;
                            });
                        return [o, i];
                    })(_, T),
                    E = [];
                if ('top-right' == l)
                    for (let t = 0; t < A.length; t++) {
                        let e = A[t] + k[t];
                        E.push(e), (x[t].score = e);
                    }
                else if ('bottom-right' == l)
                    for (let t = 0; t < A.length; t++) {
                        let e = A[t] + (1 - k[t]);
                        E.push(e), (x[t].score = e);
                    }
                let C = (function(t, e) {
                    return t.sort(function(t, n) {
                        var r = t[e],
                            o = n[e];
                        return -1 * (r < o ? -1 : r > o ? 1 : 0);
                    });
                })(x, 'score');
                (C = (function(t, e, n, r, o) {
                    let i = 1;
                    var a = [];
                    return (
                        o.forEach(function(o) {
                            var s = [];
                            (o.cluster = i),
                                t
                                    .append('text')
                                    .attr('class', function(t) {
                                        return e + '___cluster_num';
                                    })
                                    .attr('x', n(o.centroid[0]))
                                    .attr('y', r(o.centroid[1]))
                                    .style('opacity', 0.9)
                                    .style('font-size', '2vw')
                                    .style('fill', '#0A58A2')
                                    .text(i),
                                o.points.forEach(function(i) {
                                    s.push([i[0], i[1]]),
                                        t
                                            .append('line')
                                            .attr('x1', n(o.centroid[0]))
                                            .attr('y1', r(o.centroid[1]))
                                            .attr('x2', n(i[0]))
                                            .attr('y2', r(i[1]))
                                            .attr('class', function(t) {
                                                return e + '___clust_lines';
                                            })
                                            .attr('stroke', '#0A58A2')
                                            .attr('stroke-width', 2)
                                            .style('stroke-dasharray', '20, 5')
                                            .style('opacity', 0.4);
                                });
                            var l = w(s);
                            a.push({ points: l }), i++;
                        }),
                        t
                            .selectAll('polygon')
                            .data(a)
                            .enter()
                            .append('polygon')
                            .attr('points', function(t) {
                                if (null != t.points)
                                    return t.points
                                        .map(function(t) {
                                            return [n(t[0]), r(t[1])].join(',');
                                        })
                                        .join(' ');
                            })
                            .attr('class', function(t) {
                                return e + '___clust_polygons';
                            })
                            .attr('fill', '#0A58A2')
                            .style('opacity', 0.1),
                        o
                    );
                })(e, u, n, r, C)),
                    1 == f &&
                        (function(t, e, n, r, o, i) {
                            t.forEach(function(t) {
                                let n = [t.x, t.y];
                                e.forEach(function(e) {
                                    1 ==
                                        (function(t, e) {
                                            var n = JSON.stringify(e);
                                            return t.some(function(t) {
                                                return JSON.stringify(t) === n;
                                            });
                                        })(e.points, n) &&
                                        (t.quartile = e.cluster);
                                });
                            }),
                                p(n, t, o, i),
                                d(n, r, i);
                        })(y, C, u, h, t, s);
            }
            function T(t, e, n, r, o, i, a, s, l, u, c, f) {
                let p;
                null != document.getElementById(l + '_table') &&
                    ((document.getElementById(l + '_table').innerHTML = ''),
                    (p = !0)),
                    (function(t, e, n, r, o) {
                        e.append('svg:defs')
                            .append('svg:marker')
                            .attr('id', 'opt_triangle')
                            .attr('class', function(e) {
                                return t + '___better_annotation';
                            })
                            .attr('refX', 6)
                            .attr('refY', 6)
                            .attr('markerWidth', 30)
                            .attr('markerHeight', 30)
                            .attr('markerUnits', 'userSpaceOnUse')
                            .attr('orient', 'auto')
                            .append('path')
                            .attr('d', 'M 0 0 12 6 0 12 3 6')
                            .style('fill', 'black')
                            .style('opacity', 0.7);
                        let i,
                            a,
                            s,
                            l,
                            u,
                            c = n.domain(),
                            f = r.domain();
                        'bottom-right' == o
                            ? ((i = c[1] - 0.05 * (c[1] - c[0])),
                              (a = f[1] - 0.9 * (f[1] - f[0])),
                              (s = c[1] - 0.009 * (c[1] - c[0])),
                              (l = f[1] - 0.97 * (f[1] - f[0])),
                              (u = 0))
                            : 'top-right' == o &&
                              ((i = c[1] - 0.05 * (c[1] - c[0])),
                              (a = f[1] - 0.1 * (f[1] - f[0])),
                              (s = c[1] - 0.009 * (c[1] - c[0])),
                              (l = f[1] - 0.03 * (f[1] - f[0])),
                              (u = 1));
                        e.append('line')
                            .attr('class', function(e) {
                                return t + '___better_annotation';
                            })
                            .attr('x1', n(i))
                            .attr('y1', r(a))
                            .attr('x2', n(s))
                            .attr('y2', r(l))
                            .attr('stroke', 'black')
                            .attr('stroke-width', 2)
                            .attr('marker-end', 'url(#opt_triangle)')
                            .style('opacity', 0.4);
                        e.append('text')
                            .attr('class', function(e) {
                                return t + '___better_annotation';
                            })
                            .attr('x', n(c[1]))
                            .attr('y', r(f[u]))
                            .style('opacity', 0.4)
                            .style('font-size', '.7vw')
                            .text('better');
                    })(l, e, n, r, f),
                    u == l + '__squares'
                        ? (A(t, e, n, r, s, l, f),
                          h(t, e, n, r, o, s, f, l, p, c),
                          (function(t, e, n, r, o) {
                              let i,
                                  a,
                                  s,
                                  l,
                                  u = e.domain(),
                                  c = n.domain();
                              'bottom-right' == r
                                  ? ((i = '1'), (a = '2'), (s = '3'), (l = '4'))
                                  : 'top-right' == r &&
                                    ((i = '3'),
                                    (a = '4'),
                                    (s = '1'),
                                    (l = '2')),
                                  t
                                      .append('text')
                                      .attr('id', function(t) {
                                          return o + '___num_bottom_right';
                                      })
                                      .attr('x', e(u[1] - 0.05 * (u[1] - u[0])))
                                      .attr('y', n(c[1] - 0.97 * (c[1] - c[0])))
                                      .style('opacity', 0.4)
                                      .style('font-size', '2vw')
                                      .style('fill', '#0A58A2')
                                      .text(i),
                                  t
                                      .append('text')
                                      .attr('id', function(t) {
                                          return o + '___num_bottom_left';
                                      })
                                      .attr('x', e(u[1] - 0.98 * (u[1] - u[0])))
                                      .attr('y', n(c[1] - 0.97 * (c[1] - c[0])))
                                      .style('opacity', 0.4)
                                      .style('font-size', '2vw')
                                      .style('fill', '#0A58A2')
                                      .text(a),
                                  t
                                      .append('text')
                                      .attr('id', function(t) {
                                          return o + '___num_top_right';
                                      })
                                      .attr('x', e(u[1] - 0.05 * (u[1] - u[0])))
                                      .attr('y', n(c[1] - 0.1 * (c[1] - c[0])))
                                      .style('opacity', 0.4)
                                      .style('font-size', '2vw')
                                      .style('fill', '#0A58A2')
                                      .text(s),
                                  t
                                      .append('text')
                                      .attr('id', function(t) {
                                          return o + '___num_top_left';
                                      })
                                      .attr('x', e(u[1] - 0.98 * (u[1] - u[0])))
                                      .attr('y', n(c[1] - 0.1 * (c[1] - c[0])))
                                      .style('opacity', 0.4)
                                      .style('font-size', '2vw')
                                      .style('fill', '#0A58A2')
                                      .text(l);
                          })(e, n, r, f, l))
                        : u == l + '__diagonals'
                        ? (A(t, e, n, r, s, l, f),
                          y(t, e, n, r, 0, i, a, s, f, l, p, c))
                        : u == l + '__clusters'
                        ? (A(t, e, n, r, s, l, f),
                          _(t, e, n, r, 0, 0, 0, s, f, l, p, c))
                        : A(t, e, n, r, s, l, f);
            }
            function A(t, e, n, r, o, i, a) {
                const s = [];
                let l;
                c(t, o).forEach(function(t) {
                    s.push([t.x, t.y]);
                });
                let u = n.domain(),
                    p = r.domain();
                'bottom-right' == a
                    ? ((l = f.getParetoFrontier(s, {
                          optimize: 'bottomRight'
                      })).unshift([l[0][0], p[1]]),
                      l.push([u[0], l[l.length - 1][1]]))
                    : 'top-right' == a &&
                      ((l = f.getParetoFrontier(s, {
                          optimize: 'topRight'
                      })).unshift([l[0][0], p[0]]),
                      l.push([u[0], l[l.length - 1][1]]));
                for (var d = 0; d < l.length - 1; d++)
                    e.append('line')
                        .attr('clip-path', 'url(#clip)')
                        .attr('x1', n(l[d][0]))
                        .attr('y1', r(l[d][1]))
                        .attr('x2', n(l[d + 1][0]))
                        .attr('y2', r(l[d + 1][1]))
                        .attr('id', function(t) {
                            return i + '___pareto';
                        })
                        .attr('stroke', 'grey')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '20, 5')
                        .style('opacity', 0.4);
            }
            function k(t, e, n, r, o, i, a, s, l, u, c, f, p) {
                let d = t.split('___')[1];
                if (
                    (n.selectAll('#' + u + '___x_quartile').remove(),
                    n.selectAll('#' + u + '___y_quartile').remove(),
                    n.selectAll('#' + u + '___diag_quartile_0').remove(),
                    n.selectAll('#' + u + '___diag_quartile_1').remove(),
                    n.selectAll('#' + u + '___diag_quartile_2').remove(),
                    n.selectAll('#' + u + '___num_bottom_right').remove(),
                    n.selectAll('#' + u + '___num_top_right').remove(),
                    n.selectAll('#' + u + '___num_bottom_left').remove(),
                    n.selectAll('#' + u + '___num_top_left').remove(),
                    n.selectAll('#' + u + '___pareto').remove(),
                    n.selectAll('.' + u + '___diag_num').remove(),
                    n.selectAll('.' + u + '___cluster_num').remove(),
                    n.selectAll('.' + u + '___clust_lines').remove(),
                    n.selectAll('.' + u + '___clust_polygons').remove(),
                    n.selectAll('.' + u + '___better_annotation').remove(),
                    0 == d3.select('#' + t).style('opacity'))
                ) {
                    d3.select('#' + t).style('opacity', 1),
                        d3.select('#' + u + '___top' + d).style('opacity', 1),
                        d3
                            .select('#' + u + '___bottom' + d)
                            .style('opacity', 1),
                        d3.select('#' + u + '___line' + d).style('opacity', 1),
                        d3.select('#' + u + '___lineX' + d).style('opacity', 1),
                        d3.select('#' + u + '___right' + d).style('opacity', 1),
                        d3.select('#' + u + '___left' + d).style('opacity', 1);
                    let h = $.inArray(d.replace(/_/g, '-'), l);
                    l.splice(h, 1),
                        T(e, n, r, o, i, a, s, l, u, c, p, j[u]),
                        d3.select(f).style('opacity', 1),
                        d3.select('text#' + u + '___' + d).style('opacity', 1);
                } else
                    d3.select('#' + t).style('opacity', 0),
                        d3.select('#' + u + '___top' + d).style('opacity', 0),
                        d3
                            .select('#' + u + '___bottom' + d)
                            .style('opacity', 0),
                        d3.select('#' + u + '___line' + d).style('opacity', 0),
                        d3.select('#' + u + '___lineX' + d).style('opacity', 0),
                        d3.select('#' + u + '___right' + d).style('opacity', 0),
                        d3.select('#' + u + '___left' + d).style('opacity', 0),
                        l.push(d.replace(/_/g, '-')),
                        T(e, n, r, o, i, a, s, l, u, c, p, j[u]),
                        d3.select(f).style('opacity', 0.2),
                        d3
                            .select('text#' + u + '___' + d)
                            .style('opacity', 0.2);
            }
            function E(t, e, n, r, o, i, a) {
                let s = 20,
                    l = 40,
                    u = (function(t) {
                        if (t.length % 5 == 0)
                            return 90 + 20 * Math.trunc(t.length / 5);
                        if (t.lenght % 5 != 0)
                            return 90 + 20 * (Math.trunc(t.length / 5) + 1);
                    })(t),
                    c = 60,
                    f = Math.round(0.6818 * $(window).width()) - c - l,
                    p = Math.round(0.5787037 * $(window).height()) - s - u,
                    d = d3
                        .scaleLinear()
                        .range([0, f])
                        .domain([
                            d3.min(t, function(t) {
                                return t.x;
                            }),
                            d3.max(t, function(t) {
                                return t.x;
                            })
                        ])
                        .nice(),
                    h = d3.min(t, function(t) {
                        return t.y;
                    }),
                    y = d3.max(t, function(t) {
                        return t.y;
                    }),
                    g = d3
                        .scaleLinear()
                        .range([p, 0])
                        .domain([h - 0.3 * (y - h), y + 0.3 * (y - h)])
                        .nice(),
                    m = d3.axisBottom(d).ticks(12),
                    v = d3.axisLeft(g).ticks((12 * p) / f),
                    b =
                        (d3
                            .line()
                            .x(function(t) {
                                return d(t.x);
                            })
                            .y(function(t) {
                                return g(t.y);
                            }),
                        d3
                            .select('#' + e)
                            .append('div')
                            .attr('class', 'benchmark_tooltip')
                            .style('opacity', 0)),
                    x = d3
                        .select('#' + e)
                        .append('svg')
                        .attr('class', 'benchmarkingSVG')
                        .attr(
                            'viewBox',
                            '0 0 ' + (f + c + l) + ' ' + (p + s + u)
                        )
                        .attr('preserveAspectRatio', 'xMinYMin meet')
                        .attr('id', 'svg_' + e)
                        .attr('width', f + c + l)
                        .attr('height', p + s + u)
                        .append('g')
                        .attr('transform', 'translate(' + c + ',' + s + ')');
                x
                    .append('g')
                    .append('rect')
                    .attr('width', f)
                    .attr('height', p)
                    .attr('class', 'plot-bg'),
                    x
                        .append('g')
                        .attr('class', 'axis axis--x')
                        .attr('transform', 'translate(0,' + p + ')')
                        .call(m),
                    x
                        .append('g')
                        .attr('class', 'axis axis--y')
                        .call(v),
                    x
                        .append('text')
                        .attr(
                            'transform',
                            'translate(' +
                                f / 2 +
                                ' ,' +
                                (p +
                                    s +
                                    Math.round(0.0347 * $(window).height())) +
                                ')'
                        )
                        .style('text-anchor', 'middle')
                        .style('font-weight', 'bold')
                        .style('font-size', '.75vw')
                        .text(i[r]),
                    x
                        .append('text')
                        .attr('transform', 'rotate(-90)')
                        .attr('y', 0 - c)
                        .attr('x', 0 - p / 2)
                        .attr('dy', '1em')
                        .style('text-anchor', 'middle')
                        .style('font-weight', 'bold')
                        .style('font-size', '.75vw')
                        .text(i[o]),
                    x
                        .append('line')
                        .attr('x1', 0)
                        .attr(
                            'y1',
                            p + s + Math.round(0.0347 * $(window).height())
                        )
                        .attr('x2', Math.round(0.02083 * $(window).width()))
                        .attr(
                            'y2',
                            p + s + Math.round(0.0347 * $(window).height())
                        )
                        .attr('stroke', 'grey')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '15, 5')
                        .style('opacity', 0.7),
                    x
                        .append('text')
                        .attr(
                            'transform',
                            'translate(' +
                                Math.round(0.05208 * $(window).width()) +
                                ' ,' +
                                (p +
                                    s +
                                    Math.round(0.0347 * $(window).height()) +
                                    5) +
                                ')'
                        )
                        .style('text-anchor', 'middle')
                        .style('font-size', '.75vw')
                        .text('Pareto frontier');
                var w = d3
                        .axisBottom()
                        .ticks(12)
                        .tickFormat('')
                        .tickSize(p)
                        .scale(d),
                    _ = d3
                        .axisLeft()
                        .ticks((12 * p) / f)
                        .tickFormat('')
                        .tickSize(-f)
                        .scale(g);
                x
                    .append('g')
                    .attr('class', 'bench_grid')
                    .call(w),
                    x
                        .append('g')
                        .attr('class', 'bench_grid')
                        .call(_);
                let A = [],
                    E = d3.scaleOrdinal(
                        d3.schemeSet1
                            .concat(d3.schemeSet3)
                            .concat(d3.schemeSet2)
                    );
                var C = {};
                t.forEach(function(t) {
                    C[t.toolname] = E(t.toolname);
                }),
                    (function(t, e, n, r, o, i, a, s, l, u, c) {
                        t
                            .append('g')
                            .selectAll('line')
                            .data(e)
                            .enter()
                            .append('line')
                            .attr('class', 'error-line')
                            .attr('id', function(t) {
                                return (
                                    s +
                                    '___line' +
                                    t.toolname.replace(/[\. ()/-]/g, '_')
                                );
                            })
                            .attr('x1', function(t) {
                                return n(t.x);
                            })
                            .attr('y1', function(t) {
                                return r(t.y + t.e_y);
                            })
                            .attr('x2', function(t) {
                                return n(t.x);
                            })
                            .attr('y2', function(t) {
                                return r(t.y - t.e_y);
                            }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('class', 'error-line')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___lineX' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    );
                                })
                                .attr('x1', function(t) {
                                    return n(t.x - t.e_x);
                                })
                                .attr('y1', function(t) {
                                    return r(t.y);
                                })
                                .attr('x2', function(t) {
                                    return n(t.x + t.e_x);
                                })
                                .attr('y2', function(t) {
                                    return r(t.y);
                                }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___top' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    );
                                })
                                .attr('class', 'error-cap')
                                .attr('x1', function(t) {
                                    return n(t.x) - 4;
                                })
                                .attr('y1', function(t) {
                                    return r(t.y + t.e_y);
                                })
                                .attr('x2', function(t) {
                                    return n(t.x) + 4;
                                })
                                .attr('y2', function(t) {
                                    return r(t.y + t.e_y);
                                }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___bottom' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    );
                                })
                                .attr('class', 'error-cap')
                                .attr('x1', function(t) {
                                    return n(t.x) - 4;
                                })
                                .attr('y1', function(t) {
                                    return r(t.y - t.e_y);
                                })
                                .attr('x2', function(t) {
                                    return n(t.x) + 4;
                                })
                                .attr('y2', function(t) {
                                    return r(t.y - t.e_y);
                                }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('class', 'error-cap')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___right' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    );
                                })
                                .attr('x1', function(t) {
                                    return n(t.x + t.e_x);
                                })
                                .attr('y1', function(t) {
                                    return r(t.y) - 4;
                                })
                                .attr('x2', function(t) {
                                    return n(t.x + t.e_x);
                                })
                                .attr('y2', function(t) {
                                    return r(t.y) + 4;
                                }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('class', 'error-cap')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___left' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    );
                                })
                                .attr('x1', function(t) {
                                    return n(t.x - t.e_x);
                                })
                                .attr('y1', function(t) {
                                    return r(t.y) - 4;
                                })
                                .attr('x2', function(t) {
                                    return n(t.x - t.e_x);
                                })
                                .attr('y2', function(t) {
                                    return r(t.y) + 4;
                                });
                        let f = d3.symbol(),
                            p = d3.format(','),
                            d = d3.format('.4f');
                        t.selectAll('.dots')
                            .data(e)
                            .enter()
                            .append('path')
                            .attr('class', 'benchmark_path')
                            .attr(
                                'd',
                                f.type(function() {
                                    return d3.symbolSquare;
                                })
                            )
                            .attr('id', function(t) {
                                return (
                                    s +
                                    '___' +
                                    t.toolname.replace(/[\. ()/-]/g, '_')
                                );
                            })
                            .attr('class', 'line')
                            .attr('transform', function(t) {
                                return (
                                    'translate(' + n(t.x) + ',' + r(t.y) + ')'
                                );
                            })
                            .attr('r', 6)
                            .style('fill', function(t) {
                                return a(i(t));
                            })
                            .on('mouseover', function(t) {
                                let e =
                                    s +
                                    '___' +
                                    t.toolname.replace(/[\. ()/-]/g, '_');
                                1 == d3.select('#' + e).style('opacity') &&
                                    (o
                                        .transition()
                                        .duration(100)
                                        .style('opacity', 0.9),
                                    o
                                        .html(
                                            '<b>' +
                                                t.toolname +
                                                '</b><br/>' +
                                                c[l] +
                                                ': ' +
                                                p(t.x) +
                                                '<br/>' +
                                                c[u] +
                                                ': ' +
                                                d(t.y)
                                        )
                                        .style('left', d3.event.pageX + 'px')
                                        .style('top', d3.event.pageY + 'px'));
                            })
                            .on('mouseout', function(t) {
                                o.transition()
                                    .duration(1500)
                                    .style('opacity', 0);
                            });
                    })(
                        x,
                        t,
                        d,
                        g,
                        b,
                        function(t) {
                            return t.toolname;
                        },
                        E,
                        e,
                        r,
                        o,
                        i
                    ),
                    (function(t, e, n, r, o, i, a, s, l, u, c, f, p) {
                        let d = e
                            .selectAll('.legend')
                            .data(u)
                            .enter()
                            .append('g')
                            .attr('class', 'legend')
                            .attr('transform', function(t, e) {
                                return (
                                    'translate(' +
                                    (-i +
                                        (e % 5) *
                                            Math.round(
                                                0.113636 * $(window).width()
                                            )) +
                                    ',' +
                                    (a +
                                        Math.round(
                                            0.0862962 * $(window).height()
                                        ) +
                                        Math.floor(e / 5) *
                                            Math.round(
                                                0.0231481 * $(window).height()
                                            )) +
                                    ')'
                                );
                            });
                        d
                            .append('rect')
                            .attr(
                                'x',
                                i + Math.round(0.010227 * $(window).width())
                            )
                            .attr(
                                'width',
                                Math.round(0.010227 * $(window).width())
                            )
                            .attr(
                                'height',
                                Math.round(0.020833 * $(window).height())
                            )
                            .attr('id', function(t) {
                                return (
                                    c +
                                    '___leg_rect' +
                                    t.replace(/[\. ()/-]/g, '_')
                                );
                            })
                            .attr('class', 'benchmark_legend_rect')
                            .style('fill', l)
                            .on('click', function(l) {
                                let u = d3.select(
                                    'text#' +
                                        c +
                                        '___' +
                                        l.replace(/[\. ()/-]/g, '_')
                                )._groups[0][0].id;
                                if (t.length - s.length - 1 >= 4)
                                    k(u, t, e, n, r, o, i, a, s, c, f, this, p);
                                else if (
                                    t.length - s.length - 1 < 4 &&
                                    0 == d3.select('#' + u).style('opacity')
                                )
                                    k(u, t, e, n, r, o, i, a, s, c, f, this, p);
                                else {
                                    $('.removal_alert').remove();
                                    var d = $(
                                        '<div class="removal_alert">                                  <span class="closebtn" onclick="(this.parentNode.remove());">&times;</span>                                  At least four participants are required for the benchmark!!                                </div>'
                                    );
                                    $('#' + c).append(d),
                                        setTimeout(function() {
                                            $('.removal_alert').length > 0 &&
                                                $('.removal_alert').remove();
                                        }, 5e3);
                                }
                            })
                            .on('mouseover', function(t) {
                                let e = d3.select(
                                        'text#' +
                                            c +
                                            '___' +
                                            t.replace(/[\. ()/-]/g, '_')
                                    )._groups[0][0].id,
                                    n = e.split('___')[1];
                                0 == d3.select('#' + e).style('opacity')
                                    ? (d3.select(this).style('opacity', 1),
                                      d3
                                          .select('text#' + c + '___' + n)
                                          .style('opacity', 1))
                                    : (d3.select(this).style('opacity', 0.2),
                                      d3
                                          .select('text#' + c + '___' + n)
                                          .style('opacity', 0.2));
                            })
                            .on('mouseout', function(t) {
                                let e = d3.select(
                                        'text#' +
                                            c +
                                            '___' +
                                            t.replace(/[\. ()/-]/g, '_')
                                    )._groups[0][0].id,
                                    n = e.split('___')[1];
                                0 == d3.select('#' + e).style('opacity')
                                    ? (d3.select(this).style('opacity', 0.2),
                                      d3
                                          .select('text#' + c + '___' + n)
                                          .style('opacity', 0.2))
                                    : (d3.select(this).style('opacity', 1),
                                      d3
                                          .select('text#' + c + '___' + n)
                                          .style('opacity', 1));
                            }),
                            d
                                .append('text')
                                .attr(
                                    'x',
                                    i + Math.round(0.022727 * $(window).width())
                                )
                                .attr(
                                    'y',
                                    Math.round(0.01041 * $(window).height())
                                )
                                .attr('id', function(t) {
                                    return (
                                        c + '___' + t.replace(/[\. ()/-]/g, '_')
                                    );
                                })
                                .attr('dy', '.35em')
                                .style('text-anchor', 'start')
                                .style('font-size', '.7vw')
                                .text(function(t) {
                                    return t;
                                });
                    })(t, x, d, g, b, f, p, A, E, E.domain(), e, n, C),
                    T(t, x, d, g, b, f, p, A, e, n, C, a[e]);
            }
            n.d(e, 'load_scatter_visualization', function() {
                return N;
            }),
                n.d(e, 'onQuartileChange', function() {
                    return q;
                }),
                n.d(e, 'better', function() {
                    return j;
                });
            let C = {},
                S = {},
                j = {};
            function N() {
                let t,
                    e,
                    n,
                    r = document.getElementsByClassName('benchmarkingChart'),
                    i = 0;
                for (n of ((i = 0), r)) {
                    let r =
                        'https://' +
                        (o()(n).data('mode')
                            ? 'dev-openebench'
                            : 'openebench') +
                        '.bsc.es/';
                    e = n.getAttribute('data-id');
                    var a = n.getAttribute('metric_x'),
                        s = n.getAttribute('metric_y');
                    if (
                        ((t = (e + i).replace(':', '_')),
                        (n.id = t),
                        u(t),
                        D(
                            r + 'sciapi/graphql',
                            'query getDatasets($challenge_id: String!){\n                          getDatasets(datasetFilters:{challenge_id: $challenge_id, type:"assessment"}) {\n                              _id\n                              community_ids\n                              datalink{\n                                  inline_data\n                              }\n                              depends_on{\n                                  tool_id\n                                  metrics_id\n                              }\n                          }\n                        }',
                            e,
                            t,
                            a,
                            s
                        ),
                        'true' == n.getAttribute('toTable'))
                    ) {
                        let n = t + '_table';
                        var l = o()(
                            '<br><br><table id="' +
                                n +
                                '" data-id="' +
                                e +
                                '" class="benchmarkingTable"></table>'
                        );
                        o()('#' + t).append(l);
                    }
                    i++;
                }
            }
            function D(t, e, n, r, o, i) {
                try {
                    const a = l({ uri: t });
                    a({ query: e, variables: { challenge_id: n } }).then(t => {
                        let e = t.data.getDatasets;
                        if (0 == e.length) {
                            document
                                .getElementById(r + '_dropdown_list')
                                .remove();
                            var s = document.createElement('td');
                            s.id = 'no_benchmark_data';
                            var l = document.createTextNode(
                                'No data available for the selected challenge: ' +
                                    n
                            );
                            s.appendChild(l),
                                document.getElementById(r).appendChild(s);
                        } else {
                            (() =>
                                a({
                                    query:
                                        'query getTools($community_id: String!){\n                        getTools(toolFilters:{community_id: $community_id}) {\n                            _id\n                            name\n                        }\n                        getMetrics {\n                          _id\n                          title\n                          representation_hints\n                        }\n                    }',
                                    variables: {
                                        community_id: e[0].community_ids[0]
                                    }
                                }))().then(t => {
                                let n = t.data.getTools,
                                    a = t.data.getMetrics,
                                    s = {};
                                n.forEach(function(t) {
                                    s[t._id] = t.name;
                                });
                                let l = {},
                                    u = {};
                                a.forEach(function(t) {
                                    (l[t._id] = t.title),
                                        null !== t.representation_hints
                                            ? (u[t._id] =
                                                  t.representation_hints.optimization)
                                            : (u[t._id] = null);
                                }),
                                    'minimize' == u[o] || 'minimize' == u[i]
                                        ? (j[r] = 'bottom-right')
                                        : (j[r] = 'top-right'),
                                    (function(t, e, n, r, o, i, a) {
                                        try {
                                            let l = {};
                                            t.forEach(function(t) {
                                                let n = e[t.depends_on.tool_id];
                                                n in l || (l[n] = new Array(4));
                                                let i = parseFloat(
                                                    t.datalink.inline_data.value
                                                );
                                                t.depends_on.metrics_id == r
                                                    ? ((l[n][0] = i),
                                                      void 0 !==
                                                      t.datalink.inline_data
                                                          .error
                                                          ? (l[
                                                                n
                                                            ][3] = parseFloat(
                                                                t.datalink
                                                                    .inline_data
                                                                    .error
                                                            ))
                                                          : (l[n][3] = 0))
                                                    : t.depends_on.metrics_id ==
                                                          o &&
                                                      ((l[n][1] = i),
                                                      void 0 !==
                                                      t.datalink.inline_data
                                                          .error
                                                          ? (l[
                                                                n
                                                            ][2] = parseFloat(
                                                                t.datalink
                                                                    .inline_data
                                                                    .error
                                                            ))
                                                          : (l[n][2] = 0));
                                            });
                                            let u = [];
                                            Object.keys(l).forEach(t => {
                                                let e = {};
                                                (e.toolname = t),
                                                    (e.x = l[t][0]),
                                                    (e.y = l[t][1]),
                                                    (e.e_y = l[t][2]),
                                                    (e.e_x = l[t][3]),
                                                    u.push(e);
                                            }),
                                                (C[n] = u),
                                                (S[n] = i);
                                            var s = document.getElementById(
                                                n + '_dropdown_list'
                                            );
                                            let c =
                                                s.options[s.selectedIndex].id;
                                            E(u, n, c, r, o, i, a);
                                        } catch (t) {
                                            console.log(
                                                `Invalid Url Error: ${t.stack} `
                                            );
                                        }
                                    })(e, s, r, o, i, l, j);
                            });
                        }
                    });
                } catch (t) {
                    console.log(`Invalid Url Error: ${t.stack} `);
                }
            }
            function q(t, e, n, r) {
                var o = t.split('__')[0];
                d3.select('#svg_' + o).remove();
                let i = t;
                E(C[o], o, i, e, n, S[o], r);
            }
            N();
        },
        function(t, e) {
            !(function(t) {
                'use strict';
                if (!t.fetch) {
                    var e = {
                        searchParams: 'URLSearchParams' in t,
                        iterable: 'Symbol' in t && 'iterator' in Symbol,
                        blob:
                            'FileReader' in t &&
                            'Blob' in t &&
                            (function() {
                                try {
                                    return new Blob(), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })(),
                        formData: 'FormData' in t,
                        arrayBuffer: 'ArrayBuffer' in t
                    };
                    if (e.arrayBuffer)
                        var n = [
                                '[object Int8Array]',
                                '[object Uint8Array]',
                                '[object Uint8ClampedArray]',
                                '[object Int16Array]',
                                '[object Uint16Array]',
                                '[object Int32Array]',
                                '[object Uint32Array]',
                                '[object Float32Array]',
                                '[object Float64Array]'
                            ],
                            r = function(t) {
                                return t && DataView.prototype.isPrototypeOf(t);
                            },
                            o =
                                ArrayBuffer.isView ||
                                function(t) {
                                    return (
                                        t &&
                                        n.indexOf(
                                            Object.prototype.toString.call(t)
                                        ) > -1
                                    );
                                };
                    (c.prototype.append = function(t, e) {
                        (t = s(t)), (e = l(e));
                        var n = this.map[t];
                        this.map[t] = n ? n + ',' + e : e;
                    }),
                        (c.prototype.delete = function(t) {
                            delete this.map[s(t)];
                        }),
                        (c.prototype.get = function(t) {
                            return (t = s(t)), this.has(t) ? this.map[t] : null;
                        }),
                        (c.prototype.has = function(t) {
                            return this.map.hasOwnProperty(s(t));
                        }),
                        (c.prototype.set = function(t, e) {
                            this.map[s(t)] = l(e);
                        }),
                        (c.prototype.forEach = function(t, e) {
                            for (var n in this.map)
                                this.map.hasOwnProperty(n) &&
                                    t.call(e, this.map[n], n, this);
                        }),
                        (c.prototype.keys = function() {
                            var t = [];
                            return (
                                this.forEach(function(e, n) {
                                    t.push(n);
                                }),
                                u(t)
                            );
                        }),
                        (c.prototype.values = function() {
                            var t = [];
                            return (
                                this.forEach(function(e) {
                                    t.push(e);
                                }),
                                u(t)
                            );
                        }),
                        (c.prototype.entries = function() {
                            var t = [];
                            return (
                                this.forEach(function(e, n) {
                                    t.push([n, e]);
                                }),
                                u(t)
                            );
                        }),
                        e.iterable &&
                            (c.prototype[Symbol.iterator] =
                                c.prototype.entries);
                    var i = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
                    (g.prototype.clone = function() {
                        return new g(this, { body: this._bodyInit });
                    }),
                        y.call(g.prototype),
                        y.call(v.prototype),
                        (v.prototype.clone = function() {
                            return new v(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new c(this.headers),
                                url: this.url
                            });
                        }),
                        (v.error = function() {
                            var t = new v(null, { status: 0, statusText: '' });
                            return (t.type = 'error'), t;
                        });
                    var a = [301, 302, 303, 307, 308];
                    (v.redirect = function(t, e) {
                        if (-1 === a.indexOf(e))
                            throw new RangeError('Invalid status code');
                        return new v(null, {
                            status: e,
                            headers: { location: t }
                        });
                    }),
                        (t.Headers = c),
                        (t.Request = g),
                        (t.Response = v),
                        (t.fetch = function(t, n) {
                            return new Promise(function(r, o) {
                                var i = new g(t, n),
                                    a = new XMLHttpRequest();
                                (a.onload = function() {
                                    var t = {
                                        status: a.status,
                                        statusText: a.statusText,
                                        headers: (function(t) {
                                            var e = new c();
                                            return (
                                                t
                                                    .split(/\r?\n/)
                                                    .forEach(function(t) {
                                                        var n = t.split(':'),
                                                            r = n
                                                                .shift()
                                                                .trim();
                                                        if (r) {
                                                            var o = n
                                                                .join(':')
                                                                .trim();
                                                            e.append(r, o);
                                                        }
                                                    }),
                                                e
                                            );
                                        })(a.getAllResponseHeaders() || '')
                                    };
                                    t.url =
                                        'responseURL' in a
                                            ? a.responseURL
                                            : t.headers.get('X-Request-URL');
                                    var e =
                                        'response' in a
                                            ? a.response
                                            : a.responseText;
                                    r(new v(e, t));
                                }),
                                    (a.onerror = function() {
                                        o(
                                            new TypeError(
                                                'Network request failed'
                                            )
                                        );
                                    }),
                                    (a.ontimeout = function() {
                                        o(
                                            new TypeError(
                                                'Network request failed'
                                            )
                                        );
                                    }),
                                    a.open(i.method, i.url, !0),
                                    'include' === i.credentials &&
                                        (a.withCredentials = !0),
                                    'responseType' in a &&
                                        e.blob &&
                                        (a.responseType = 'blob'),
                                    i.headers.forEach(function(t, e) {
                                        a.setRequestHeader(e, t);
                                    }),
                                    a.send(
                                        void 0 === i._bodyInit
                                            ? null
                                            : i._bodyInit
                                    );
                            });
                        }),
                        (t.fetch.polyfill = !0);
                }
                function s(t) {
                    if (
                        ('string' != typeof t && (t = String(t)),
                        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                    )
                        throw new TypeError(
                            'Invalid character in header field name'
                        );
                    return t.toLowerCase();
                }
                function l(t) {
                    return 'string' != typeof t && (t = String(t)), t;
                }
                function u(t) {
                    var n = {
                        next: function() {
                            var e = t.shift();
                            return { done: void 0 === e, value: e };
                        }
                    };
                    return (
                        e.iterable &&
                            (n[Symbol.iterator] = function() {
                                return n;
                            }),
                        n
                    );
                }
                function c(t) {
                    (this.map = {}),
                        t instanceof c
                            ? t.forEach(function(t, e) {
                                  this.append(e, t);
                              }, this)
                            : Array.isArray(t)
                            ? t.forEach(function(t) {
                                  this.append(t[0], t[1]);
                              }, this)
                            : t &&
                              Object.getOwnPropertyNames(t).forEach(function(
                                  e
                              ) {
                                  this.append(e, t[e]);
                              },
                              this);
                }
                function f(t) {
                    if (t.bodyUsed)
                        return Promise.reject(new TypeError('Already read'));
                    t.bodyUsed = !0;
                }
                function p(t) {
                    return new Promise(function(e, n) {
                        (t.onload = function() {
                            e(t.result);
                        }),
                            (t.onerror = function() {
                                n(t.error);
                            });
                    });
                }
                function d(t) {
                    var e = new FileReader(),
                        n = p(e);
                    return e.readAsArrayBuffer(t), n;
                }
                function h(t) {
                    if (t.slice) return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)), e.buffer;
                }
                function y() {
                    return (
                        (this.bodyUsed = !1),
                        (this._initBody = function(t) {
                            if (((this._bodyInit = t), t))
                                if ('string' == typeof t) this._bodyText = t;
                                else if (
                                    e.blob &&
                                    Blob.prototype.isPrototypeOf(t)
                                )
                                    this._bodyBlob = t;
                                else if (
                                    e.formData &&
                                    FormData.prototype.isPrototypeOf(t)
                                )
                                    this._bodyFormData = t;
                                else if (
                                    e.searchParams &&
                                    URLSearchParams.prototype.isPrototypeOf(t)
                                )
                                    this._bodyText = t.toString();
                                else if (e.arrayBuffer && e.blob && r(t))
                                    (this._bodyArrayBuffer = h(t.buffer)),
                                        (this._bodyInit = new Blob([
                                            this._bodyArrayBuffer
                                        ]));
                                else {
                                    if (
                                        !e.arrayBuffer ||
                                        (!ArrayBuffer.prototype.isPrototypeOf(
                                            t
                                        ) &&
                                            !o(t))
                                    )
                                        throw new Error(
                                            'unsupported BodyInit type'
                                        );
                                    this._bodyArrayBuffer = h(t);
                                }
                            else this._bodyText = '';
                            this.headers.get('content-type') ||
                                ('string' == typeof t
                                    ? this.headers.set(
                                          'content-type',
                                          'text/plain;charset=UTF-8'
                                      )
                                    : this._bodyBlob && this._bodyBlob.type
                                    ? this.headers.set(
                                          'content-type',
                                          this._bodyBlob.type
                                      )
                                    : e.searchParams &&
                                      URLSearchParams.prototype.isPrototypeOf(
                                          t
                                      ) &&
                                      this.headers.set(
                                          'content-type',
                                          'application/x-www-form-urlencoded;charset=UTF-8'
                                      ));
                        }),
                        e.blob &&
                            ((this.blob = function() {
                                var t = f(this);
                                if (t) return t;
                                if (this._bodyBlob)
                                    return Promise.resolve(this._bodyBlob);
                                if (this._bodyArrayBuffer)
                                    return Promise.resolve(
                                        new Blob([this._bodyArrayBuffer])
                                    );
                                if (this._bodyFormData)
                                    throw new Error(
                                        'could not read FormData body as blob'
                                    );
                                return Promise.resolve(
                                    new Blob([this._bodyText])
                                );
                            }),
                            (this.arrayBuffer = function() {
                                return this._bodyArrayBuffer
                                    ? f(this) ||
                                          Promise.resolve(this._bodyArrayBuffer)
                                    : this.blob().then(d);
                            })),
                        (this.text = function() {
                            var t = f(this);
                            if (t) return t;
                            if (this._bodyBlob)
                                return (function(t) {
                                    var e = new FileReader(),
                                        n = p(e);
                                    return e.readAsText(t), n;
                                })(this._bodyBlob);
                            if (this._bodyArrayBuffer)
                                return Promise.resolve(
                                    (function(t) {
                                        for (
                                            var e = new Uint8Array(t),
                                                n = new Array(e.length),
                                                r = 0;
                                            r < e.length;
                                            r++
                                        )
                                            n[r] = String.fromCharCode(e[r]);
                                        return n.join('');
                                    })(this._bodyArrayBuffer)
                                );
                            if (this._bodyFormData)
                                throw new Error(
                                    'could not read FormData body as text'
                                );
                            return Promise.resolve(this._bodyText);
                        }),
                        e.formData &&
                            (this.formData = function() {
                                return this.text().then(m);
                            }),
                        (this.json = function() {
                            return this.text().then(JSON.parse);
                        }),
                        this
                    );
                }
                function g(t, e) {
                    var n = (e = e || {}).body;
                    if (t instanceof g) {
                        if (t.bodyUsed) throw new TypeError('Already read');
                        (this.url = t.url),
                            (this.credentials = t.credentials),
                            e.headers || (this.headers = new c(t.headers)),
                            (this.method = t.method),
                            (this.mode = t.mode),
                            n ||
                                null == t._bodyInit ||
                                ((n = t._bodyInit), (t.bodyUsed = !0));
                    } else this.url = String(t);
                    if (
                        ((this.credentials =
                            e.credentials || this.credentials || 'omit'),
                        (!e.headers && this.headers) ||
                            (this.headers = new c(e.headers)),
                        (this.method = (function(t) {
                            var e = t.toUpperCase();
                            return i.indexOf(e) > -1 ? e : t;
                        })(e.method || this.method || 'GET')),
                        (this.mode = e.mode || this.mode || null),
                        (this.referrer = null),
                        ('GET' === this.method || 'HEAD' === this.method) && n)
                    )
                        throw new TypeError(
                            'Body not allowed for GET or HEAD requests'
                        );
                    this._initBody(n);
                }
                function m(t) {
                    var e = new FormData();
                    return (
                        t
                            .trim()
                            .split('&')
                            .forEach(function(t) {
                                if (t) {
                                    var n = t.split('='),
                                        r = n.shift().replace(/\+/g, ' '),
                                        o = n.join('=').replace(/\+/g, ' ');
                                    e.append(
                                        decodeURIComponent(r),
                                        decodeURIComponent(o)
                                    );
                                }
                            }),
                        e
                    );
                }
                function v(t, e) {
                    e || (e = {}),
                        (this.type = 'default'),
                        (this.status = 'status' in e ? e.status : 200),
                        (this.ok = this.status >= 200 && this.status < 300),
                        (this.statusText =
                            'statusText' in e ? e.statusText : 'OK'),
                        (this.headers = new c(e.headers)),
                        (this.url = e.url || ''),
                        this._initBody(t);
                }
            })('undefined' != typeof self ? self : this);
        },
        function(t, e) {
            t.exports = function(t) {
                var e = 'undefined' != typeof window && window.location;
                if (!e) throw new Error('fixUrls requires window.location');
                if (!t || 'string' != typeof t) return t;
                var n = e.protocol + '//' + e.host,
                    r = n + e.pathname.replace(/\/[^\/]*$/, '/');
                return t.replace(
                    /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                    function(t, e) {
                        var o,
                            i = e
                                .trim()
                                .replace(/^"(.*)"$/, function(t, e) {
                                    return e;
                                })
                                .replace(/^'(.*)'$/, function(t, e) {
                                    return e;
                                });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                            i
                        )
                            ? t
                            : ((o =
                                  0 === i.indexOf('//')
                                      ? i
                                      : 0 === i.indexOf('/')
                                      ? n + i
                                      : r + i.replace(/^\.\//, '')),
                              'url(' + JSON.stringify(o) + ')');
                    }
                );
            };
        },
        function(t, e, n) {
            var r = {},
                o = (function(t) {
                    var e;
                    return function() {
                        return (
                            void 0 === e && (e = t.apply(this, arguments)), e
                        );
                    };
                })(function() {
                    return window && document && document.all && !window.atob;
                }),
                i = (function(t) {
                    var e = {};
                    return function(t) {
                        if ('function' == typeof t) return t();
                        if (void 0 === e[t]) {
                            var n = function(t) {
                                return document.querySelector(t);
                            }.call(this, t);
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                a = null,
                s = 0,
                l = [],
                u = n(5);
            function c(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        i = r[o.id];
                    if (i) {
                        i.refs++;
                        for (var a = 0; a < i.parts.length; a++)
                            i.parts[a](o.parts[a]);
                        for (; a < o.parts.length; a++)
                            i.parts.push(g(o.parts[a], e));
                    } else {
                        var s = [];
                        for (a = 0; a < o.parts.length; a++)
                            s.push(g(o.parts[a], e));
                        r[o.id] = { id: o.id, refs: 1, parts: s };
                    }
                }
            }
            function f(t, e) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o],
                        a = e.base ? i[0] + e.base : i[0],
                        s = { css: i[1], media: i[2], sourceMap: i[3] };
                    r[a]
                        ? r[a].parts.push(s)
                        : n.push((r[a] = { id: a, parts: [s] }));
                }
                return n;
            }
            function p(t, e) {
                var n = i(t.insertInto);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                    );
                var r = l[l.length - 1];
                if ('top' === t.insertAt)
                    r
                        ? r.nextSibling
                            ? n.insertBefore(e, r.nextSibling)
                            : n.appendChild(e)
                        : n.insertBefore(e, n.firstChild),
                        l.push(e);
                else if ('bottom' === t.insertAt) n.appendChild(e);
                else {
                    if ('object' != typeof t.insertAt || !t.insertAt.before)
                        throw new Error(
                            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                        );
                    var o = i(t.insertInto + ' ' + t.insertAt.before);
                    n.insertBefore(e, o);
                }
            }
            function d(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = l.indexOf(t);
                e >= 0 && l.splice(e, 1);
            }
            function h(t) {
                var e = document.createElement('style');
                return (
                    void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                    y(e, t.attrs),
                    p(t, e),
                    e
                );
            }
            function y(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function g(t, e) {
                var n, r, o, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function() {};
                    t.css = i;
                }
                if (e.singleton) {
                    var l = s++;
                    (n = a || (a = h(e))),
                        (r = v.bind(null, n, l, !1)),
                        (o = v.bind(null, n, l, !0));
                } else
                    t.sourceMap &&
                    'function' == typeof URL &&
                    'function' == typeof URL.createObjectURL &&
                    'function' == typeof URL.revokeObjectURL &&
                    'function' == typeof Blob &&
                    'function' == typeof btoa
                        ? ((n = (function(t) {
                              var e = document.createElement('link');
                              return (
                                  void 0 === t.attrs.type &&
                                      (t.attrs.type = 'text/css'),
                                  (t.attrs.rel = 'stylesheet'),
                                  y(e, t.attrs),
                                  p(t, e),
                                  e
                              );
                          })(e)),
                          (r = function(t, e, n) {
                              var r = n.css,
                                  o = n.sourceMap,
                                  i = void 0 === e.convertToAbsoluteUrls && o;
                              (e.convertToAbsoluteUrls || i) && (r = u(r));
                              o &&
                                  (r +=
                                      '\n/*# sourceMappingURL=data:application/json;base64,' +
                                      btoa(
                                          unescape(
                                              encodeURIComponent(
                                                  JSON.stringify(o)
                                              )
                                          )
                                      ) +
                                      ' */');
                              var a = new Blob([r], { type: 'text/css' }),
                                  s = t.href;
                              (t.href = URL.createObjectURL(a)),
                                  s && URL.revokeObjectURL(s);
                          }.bind(null, n, e)),
                          (o = function() {
                              d(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = h(e)),
                          (r = function(t, e) {
                              var n = e.css,
                                  r = e.media;
                              r && t.setAttribute('media', r);
                              if (t.styleSheet) t.styleSheet.cssText = n;
                              else {
                                  for (; t.firstChild; )
                                      t.removeChild(t.firstChild);
                                  t.appendChild(document.createTextNode(n));
                              }
                          }.bind(null, n)),
                          (o = function() {
                              d(n);
                          }));
                return (
                    r(t),
                    function(e) {
                        if (e) {
                            if (
                                e.css === t.css &&
                                e.media === t.media &&
                                e.sourceMap === t.sourceMap
                            )
                                return;
                            r((t = e));
                        } else o();
                    }
                );
            }
            t.exports = function(t, e) {
                if (
                    'undefined' != typeof DEBUG &&
                    DEBUG &&
                    'object' != typeof document
                )
                    throw new Error(
                        'The style-loader cannot be used in a non-browser environment'
                    );
                ((e = e || {}).attrs =
                    'object' == typeof e.attrs ? e.attrs : {}),
                    e.singleton ||
                        'boolean' == typeof e.singleton ||
                        (e.singleton = o()),
                    e.insertInto || (e.insertInto = 'head'),
                    e.insertAt || (e.insertAt = 'bottom');
                var n = f(t, e);
                return (
                    c(n, e),
                    function(t) {
                        for (var o = [], i = 0; i < n.length; i++) {
                            var a = n[i];
                            (s = r[a.id]).refs--, o.push(s);
                        }
                        t && c(f(t, e), e);
                        for (i = 0; i < o.length; i++) {
                            var s;
                            if (0 === (s = o[i]).refs) {
                                for (var l = 0; l < s.parts.length; l++)
                                    s.parts[l]();
                                delete r[s.id];
                            }
                        }
                    }
                );
            };
            var m = (function() {
                var t = [];
                return function(e, n) {
                    return (t[e] = n), t.filter(Boolean).join('\n');
                };
            })();
            function v(t, e, n, r) {
                var o = n ? '' : r.css;
                if (t.styleSheet) t.styleSheet.cssText = m(e, o);
                else {
                    var i = document.createTextNode(o),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]),
                        a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
            }
        },
        function(t, e) {
            t.exports = function(t) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var n = (function(t, e) {
                                var n = t[1] || '',
                                    r = t[3];
                                if (!r) return n;
                                if (e && 'function' == typeof btoa) {
                                    var o = (function(t) {
                                            return (
                                                '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(t)
                                                        )
                                                    )
                                                ) +
                                                ' */'
                                            );
                                        })(r),
                                        i = r.sources.map(function(t) {
                                            return (
                                                '/*# sourceURL=' +
                                                r.sourceRoot +
                                                t +
                                                ' */'
                                            );
                                        });
                                    return [n]
                                        .concat(i)
                                        .concat([o])
                                        .join('\n');
                                }
                                return [n].join('\n');
                            })(e, t);
                            return e[2] ? '@media ' + e[2] + '{' + n + '}' : n;
                        }).join('');
                    }),
                    (e.i = function(t, n) {
                        'string' == typeof t && (t = [[null, t, '']]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            'number' == typeof i && (r[i] = !0);
                        }
                        for (o = 0; o < t.length; o++) {
                            var a = t[o];
                            ('number' == typeof a[0] && r[a[0]]) ||
                                (n && !a[2]
                                    ? (a[2] = n)
                                    : n &&
                                      (a[2] = '(' + a[2] + ') and (' + n + ')'),
                                e.push(a));
                        }
                    }),
                    e
                );
            };
        },
        function(t, e, n) {
            (t.exports = n(7)(!1)).push([
                t.i,
                '\n  \n  .error-line {\n    stroke:black;\n    stroke-dasharray: 2,2;\n  }\n  \n  .error-cap {\n    stroke:black;\n    stroke-width: 1px;\n  }\n  \n    div.benchmark_tooltip {\n      background-color: #fff;\n      padding: 7px;\n      text-shadow: #f5f5f5 0 1px 0;\n      font: 15px Helvetica Neue;\n      border: 4.5px solid;\n      border-color: #0A58A2;\n      border-radius: 3px;\n      opacity: 0.95;\n      position: absolute;\n      box-shadow: rgba(0, 0, 0, 0.3) 0 10px 15px;\n    }\n  \n  .benchmark_tooltip:after {\n      content: " ";\n      position: absolute;\n      top: 50%;\n      right: 100%;\n      margin-top: -10px;\n      border-width: 10px;\n      border-style: solid;\n      border-color: transparent transparent transparent transparent;\n      \n  }\n  \n   .plot-bg {\n     fill:#F8F8F8;\n     stroke: black;\n   }\n      \n   .axis path,\n   .axis line {\n       fill: none;\n       stroke: grey;\n       stroke-width: 1;\n       shape-rendering: crispEdges;\n   }\n\n   .bench_grid {\n    stroke-opacity: 0.1;\n    stroke-dasharray: 7,5;\n  }\n\n    \n    .classificators_list{\n        background-color: #0A58A2; \n        border-radius: 8px;\n        color: #fff;\n        font-size: 1vw;\n        padding-left: 25px;\n        padding-right: 25px;\n        text-align: center;\n        width: 20vw;\n    \n        }\n    \n    .classificators_list:hover {\n        background-color: #b3cde0;\n    \n    }\n\n    .benchmarkingTable td {\n        border: 2px solid black;\n        border-collapse: collapse;\n        text-align: center;\n        font-size: .7vw;\n    }\n\n    .benchmarkingTable {\n        width: 17vw; \n        border-collapse: collapse; \n        background-color: #f0f0f0;\n        border: 5px solid black; \n        float: right;\n    }\n\n    .benchmark_legend_rect {\n        cursor: pointer;\n    }\n\n    .benchmarkingChart{\n        width: 90vw;\n    }\n\n    .benchmarkingSVG{\n        width: 68vw;\n    }\n      .axis--x {\n          font-size: 12px;\n      }\n\n      .axis--y {\n        font-size: 12px;\n    }\n\n    .removal_alert {\n        padding: 10px;\n        background-color: #ffcccc;\n        color: #D10000;\n    }\n    \n    .closebtn {\n        margin-left: 15px;\n        color: #D10000;\n        font-weight: bold;\n        float: right;\n        font-size: 22px;\n        line-height: 20px;\n        cursor: pointer;\n        transition: 0.3s;\n    }\n    \n    .closebtn:hover {\n        color: white;\n    }',
                ''
            ]);
        },
        function(t, e, n) {
            var r = n(8);
            'string' == typeof r && (r = [[t.i, r, '']]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            n(6)(r, o);
            r.locals && (t.exports = r.locals);
        }
    ])
);
