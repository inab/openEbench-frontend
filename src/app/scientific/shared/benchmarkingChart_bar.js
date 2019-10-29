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
            n((n.s = 6))
        );
    })([
        function(t, e, n) {
            var r = n(1);
            'string' == typeof r && (r = [[t.i, r, '']]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            n(3)(r, o);
            r.locals && (t.exports = r.locals);
        },
        function(t, e, n) {
            (t.exports = n(2)(!1)).push([
                t.i,
                "  .benchmarkingTable_bars td {\n    border: 2px solid black;\n    border-collapse: collapse;\n    text-align: center;\n    font-size: .7vw;\n    width: 75%;\n    white-space:nowrap;\n}\n\n.benchmarkingTable_bars {\n    width: 17vw; \n    border-collapse: collapse; \n    background-color: #f0f0f0;\n    border: 5px solid black; \n    float: right;\n    display: none;\n    height: 70vh;\n    overflow-y: scroll;\n}\n\n.benchmarkingSVG{\n  width: 68vw;\n}\n\n.benchmarkingChart_bars{\n    width: 90vw;\n\n}\n\n.bar {\n\tfill: orange;\n}\n\n.bar:hover {\n\tfill: orangered;\n}\n\n.x.axis path {\n\tdisplay: none;\n}\n\n.d3-tip {\n\tline-height: 1;\n\tfont-weight: bold;\n\tpadding: 12px;\n\tbackground: rgba(0, 0, 0, 0.8);\n\tcolor: #fff;\n\tborder-radius: 2px;\n}\n\n/* Creates a small triangle extender for the tooltip */\n.d3-tip:after {\n\tbox-sizing: border-box;\n\tdisplay: inline;\n\tfont-size: 10px;\n\twidth: 100%;\n\tline-height: 1;\n\tcolor: rgba(0, 0, 0, 0.8);\n\tcontent: '\\25BC';\n\tposition: absolute;\n\ttext-align: center;\n}\n\n/* Style northward tooltips differently */\n.d3-tip.n:after {\n\tmargin: -1px 0 0 0;\n\ttop: 100%;\n\tleft: 0;\n}\n\n.classificator_button {\n\tposition: absolute;\n\tbackground-color: #0a58a2;\n\tborder-radius: 8px;\n\tcolor: #fff;\n\tfont-size: 1vw;\n\tpadding-left: 25px;\n\tpadding-right: 25px;\n\ttext-align: center;\n\twidth: 20vw;\n}\n\n.classificator_button:hover {\n\tbackground-color: #b3cde0;\n}\n",
                ''
            ]);
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
                                    var o =
                                            ((a = r),
                                            '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(a)
                                                        )
                                                    )
                                                ) +
                                                ' */'),
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
                                var a;
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
            var r,
                o,
                i = {},
                a =
                    ((r = function() {
                        return (
                            window && document && document.all && !window.atob
                        );
                    }),
                    function() {
                        return (
                            void 0 === o && (o = r.apply(this, arguments)), o
                        );
                    }),
                s = (function(t) {
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
                u = null,
                l = 0,
                c = [],
                f = n(4);
            function h(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                        o = i[r.id];
                    if (o) {
                        o.refs++;
                        for (var a = 0; a < o.parts.length; a++)
                            o.parts[a](r.parts[a]);
                        for (; a < r.parts.length; a++)
                            o.parts.push(b(r.parts[a], e));
                    } else {
                        var s = [];
                        for (a = 0; a < r.parts.length; a++)
                            s.push(b(r.parts[a], e));
                        i[r.id] = { id: r.id, refs: 1, parts: s };
                    }
                }
            }
            function p(t, e) {
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
            function d(t, e) {
                var n = s(t.insertInto);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                    );
                var r = c[c.length - 1];
                if ('top' === t.insertAt)
                    r
                        ? r.nextSibling
                            ? n.insertBefore(e, r.nextSibling)
                            : n.appendChild(e)
                        : n.insertBefore(e, n.firstChild),
                        c.push(e);
                else if ('bottom' === t.insertAt) n.appendChild(e);
                else {
                    if ('object' != typeof t.insertAt || !t.insertAt.before)
                        throw new Error(
                            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                        );
                    var o = s(t.insertInto + ' ' + t.insertAt.before);
                    n.insertBefore(e, o);
                }
            }
            function y(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = c.indexOf(t);
                e >= 0 && c.splice(e, 1);
            }
            function m(t) {
                var e = document.createElement('style');
                return (
                    void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                    v(e, t.attrs),
                    d(t, e),
                    e
                );
            }
            function v(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function b(t, e) {
                var n, r, o, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function() {};
                    t.css = i;
                }
                if (e.singleton) {
                    var a = l++;
                    (n = u || (u = m(e))),
                        (r = w.bind(null, n, a, !1)),
                        (o = w.bind(null, n, a, !0));
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
                                  v(e, t.attrs),
                                  d(t, e),
                                  e
                              );
                          })(e)),
                          (r = function(t, e, n) {
                              var r = n.css,
                                  o = n.sourceMap,
                                  i = void 0 === e.convertToAbsoluteUrls && o;
                              (e.convertToAbsoluteUrls || i) && (r = f(r));
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
                              y(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = m(e)),
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
                              y(n);
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
                        (e.singleton = a()),
                    e.insertInto || (e.insertInto = 'head'),
                    e.insertAt || (e.insertAt = 'bottom');
                var n = p(t, e);
                return (
                    h(n, e),
                    function(t) {
                        for (var r = [], o = 0; o < n.length; o++) {
                            var a = n[o];
                            (s = i[a.id]).refs--, r.push(s);
                        }
                        t && h(p(t, e), e);
                        for (o = 0; o < r.length; o++) {
                            var s;
                            if (0 === (s = r[o]).refs) {
                                for (var u = 0; u < s.parts.length; u++)
                                    s.parts[u]();
                                delete i[s.id];
                            }
                        }
                    }
                );
            };
            var g,
                _ =
                    ((g = []),
                    function(t, e) {
                        return (g[t] = e), g.filter(Boolean).join('\n');
                    });
            function w(t, e, n, r) {
                var o = n ? '' : r.css;
                if (t.styleSheet) t.styleSheet.cssText = _(e, o);
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
                        (t = s(t)), (e = u(e));
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
                            this.map[s(t)] = u(e);
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
                                l(t)
                            );
                        }),
                        (c.prototype.values = function() {
                            var t = [];
                            return (
                                this.forEach(function(e) {
                                    t.push(e);
                                }),
                                l(t)
                            );
                        }),
                        (c.prototype.entries = function() {
                            var t = [];
                            return (
                                this.forEach(function(e, n) {
                                    t.push([n, e]);
                                }),
                                l(t)
                            );
                        }),
                        e.iterable &&
                            (c.prototype[Symbol.iterator] =
                                c.prototype.entries);
                    var i = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
                    (m.prototype.clone = function() {
                        return new m(this, { body: this._bodyInit });
                    }),
                        y.call(m.prototype),
                        y.call(b.prototype),
                        (b.prototype.clone = function() {
                            return new b(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new c(this.headers),
                                url: this.url
                            });
                        }),
                        (b.error = function() {
                            var t = new b(null, { status: 0, statusText: '' });
                            return (t.type = 'error'), t;
                        });
                    var a = [301, 302, 303, 307, 308];
                    (b.redirect = function(t, e) {
                        if (-1 === a.indexOf(e))
                            throw new RangeError('Invalid status code');
                        return new b(null, {
                            status: e,
                            headers: { location: t }
                        });
                    }),
                        (t.Headers = c),
                        (t.Request = m),
                        (t.Response = b),
                        (t.fetch = function(t, n) {
                            return new Promise(function(r, o) {
                                var i = new m(t, n),
                                    a = new XMLHttpRequest();
                                (a.onload = function() {
                                    var t,
                                        e,
                                        n = {
                                            status: a.status,
                                            statusText: a.statusText,
                                            headers:
                                                ((t =
                                                    a.getAllResponseHeaders() ||
                                                    ''),
                                                (e = new c()),
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
                                                e)
                                        };
                                    n.url =
                                        'responseURL' in a
                                            ? a.responseURL
                                            : n.headers.get('X-Request-URL');
                                    var o =
                                        'response' in a
                                            ? a.response
                                            : a.responseText;
                                    r(new b(o, n));
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
                function u(t) {
                    return 'string' != typeof t && (t = String(t)), t;
                }
                function l(t) {
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
                function h(t) {
                    return new Promise(function(e, n) {
                        (t.onload = function() {
                            e(t.result);
                        }),
                            (t.onerror = function() {
                                n(t.error);
                            });
                    });
                }
                function p(t) {
                    var e = new FileReader(),
                        n = h(e);
                    return e.readAsArrayBuffer(t), n;
                }
                function d(t) {
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
                                    (this._bodyArrayBuffer = d(t.buffer)),
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
                                    this._bodyArrayBuffer = d(t);
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
                                    : this.blob().then(p);
                            })),
                        (this.text = function() {
                            var t,
                                e,
                                n,
                                r = f(this);
                            if (r) return r;
                            if (this._bodyBlob)
                                return (
                                    (t = this._bodyBlob),
                                    (e = new FileReader()),
                                    (n = h(e)),
                                    e.readAsText(t),
                                    n
                                );
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
                                return this.text().then(v);
                            }),
                        (this.json = function() {
                            return this.text().then(JSON.parse);
                        }),
                        this
                    );
                }
                function m(t, e) {
                    var n,
                        r,
                        o = (e = e || {}).body;
                    if (t instanceof m) {
                        if (t.bodyUsed) throw new TypeError('Already read');
                        (this.url = t.url),
                            (this.credentials = t.credentials),
                            e.headers || (this.headers = new c(t.headers)),
                            (this.method = t.method),
                            (this.mode = t.mode),
                            o ||
                                null == t._bodyInit ||
                                ((o = t._bodyInit), (t.bodyUsed = !0));
                    } else this.url = String(t);
                    if (
                        ((this.credentials =
                            e.credentials || this.credentials || 'omit'),
                        (!e.headers && this.headers) ||
                            (this.headers = new c(e.headers)),
                        (this.method =
                            ((n = e.method || this.method || 'GET'),
                            (r = n.toUpperCase()),
                            i.indexOf(r) > -1 ? r : n)),
                        (this.mode = e.mode || this.mode || null),
                        (this.referrer = null),
                        ('GET' === this.method || 'HEAD' === this.method) && o)
                    )
                        throw new TypeError(
                            'Body not allowed for GET or HEAD requests'
                        );
                    this._initBody(o);
                }
                function v(t) {
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
                function b(t, e) {
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
        function(t, e, n) {
            'use strict';
            n.r(e);
            function r() {}
            function o(t, e) {
                var n = new r();
                if (t instanceof r)
                    t.each(function(t, e) {
                        n.set(e, t);
                    });
                else if (Array.isArray(t)) {
                    var o,
                        i = -1,
                        a = t.length;
                    if (null == e) for (; ++i < a; ) n.set(i, t[i]);
                    else for (; ++i < a; ) n.set(e((o = t[i]), i, t), o);
                } else if (t) for (var s in t) n.set(s, t[s]);
                return n;
            }
            r.prototype = o.prototype = {
                constructor: r,
                has: function(t) {
                    return '$' + t in this;
                },
                get: function(t) {
                    return this['$' + t];
                },
                set: function(t, e) {
                    return (this['$' + t] = e), this;
                },
                remove: function(t) {
                    var e = '$' + t;
                    return e in this && delete this[e];
                },
                clear: function() {
                    for (var t in this) '$' === t[0] && delete this[t];
                },
                keys: function() {
                    var t = [];
                    for (var e in this) '$' === e[0] && t.push(e.slice(1));
                    return t;
                },
                values: function() {
                    var t = [];
                    for (var e in this) '$' === e[0] && t.push(this[e]);
                    return t;
                },
                entries: function() {
                    var t = [];
                    for (var e in this)
                        '$' === e[0] &&
                            t.push({ key: e.slice(1), value: this[e] });
                    return t;
                },
                size: function() {
                    var t = 0;
                    for (var e in this) '$' === e[0] && ++t;
                    return t;
                },
                empty: function() {
                    for (var t in this) if ('$' === t[0]) return !1;
                    return !0;
                },
                each: function(t) {
                    for (var e in this)
                        '$' === e[0] && t(this[e], e.slice(1), this);
                }
            };
            var i = o;
            function a() {}
            var s = i.prototype;
            function u(t, e) {
                var n = new a();
                if (t instanceof a)
                    t.each(function(t) {
                        n.add(t);
                    });
                else if (t) {
                    var r = -1,
                        o = t.length;
                    if (null == e) for (; ++r < o; ) n.add(t[r]);
                    else for (; ++r < o; ) n.add(e(t[r], r, t));
                }
                return n;
            }
            a.prototype = u.prototype = {
                constructor: a,
                has: s.has,
                add: function(t) {
                    return (this['$' + (t += '')] = t), this;
                },
                remove: s.remove,
                clear: s.clear,
                values: s.keys,
                size: s.size,
                empty: s.empty,
                each: s.each
            };
            var l = 'http://www.w3.org/1999/xhtml',
                c = {
                    svg: 'http://www.w3.org/2000/svg',
                    xhtml: l,
                    xlink: 'http://www.w3.org/1999/xlink',
                    xml: 'http://www.w3.org/XML/1998/namespace',
                    xmlns: 'http://www.w3.org/2000/xmlns/'
                },
                f = function(t) {
                    var e = (t += ''),
                        n = e.indexOf(':');
                    return (
                        n >= 0 &&
                            'xmlns' !== (e = t.slice(0, n)) &&
                            (t = t.slice(n + 1)),
                        c.hasOwnProperty(e) ? { space: c[e], local: t } : t
                    );
                };
            var h = function(t) {
                var e = f(t);
                return (e.local
                    ? function(t) {
                          return function() {
                              return this.ownerDocument.createElementNS(
                                  t.space,
                                  t.local
                              );
                          };
                      }
                    : function(t) {
                          return function() {
                              var e = this.ownerDocument,
                                  n = this.namespaceURI;
                              return n === l &&
                                  e.documentElement.namespaceURI === l
                                  ? e.createElement(t)
                                  : e.createElementNS(n, t);
                          };
                      })(e);
            };
            function p() {}
            var d = function(t) {
                return null == t
                    ? p
                    : function() {
                          return this.querySelector(t);
                      };
            };
            function y() {
                return [];
            }
            var m = function(t) {
                return new Array(t.length);
            };
            function v(t, e) {
                (this.ownerDocument = t.ownerDocument),
                    (this.namespaceURI = t.namespaceURI),
                    (this._next = null),
                    (this._parent = t),
                    (this.__data__ = e);
            }
            v.prototype = {
                constructor: v,
                appendChild: function(t) {
                    return this._parent.insertBefore(t, this._next);
                },
                insertBefore: function(t, e) {
                    return this._parent.insertBefore(t, e);
                },
                querySelector: function(t) {
                    return this._parent.querySelector(t);
                },
                querySelectorAll: function(t) {
                    return this._parent.querySelectorAll(t);
                }
            };
            var b = '$';
            function g(t, e, n, r, o, i) {
                for (var a, s = 0, u = e.length, l = i.length; s < l; ++s)
                    (a = e[s])
                        ? ((a.__data__ = i[s]), (r[s] = a))
                        : (n[s] = new v(t, i[s]));
                for (; s < u; ++s) (a = e[s]) && (o[s] = a);
            }
            function _(t, e, n, r, o, i, a) {
                var s,
                    u,
                    l,
                    c = {},
                    f = e.length,
                    h = i.length,
                    p = new Array(f);
                for (s = 0; s < f; ++s)
                    (u = e[s]) &&
                        ((p[s] = l = b + a.call(u, u.__data__, s, e)),
                        l in c ? (o[s] = u) : (c[l] = u));
                for (s = 0; s < h; ++s)
                    (u = c[(l = b + a.call(t, i[s], s, i))])
                        ? ((r[s] = u), (u.__data__ = i[s]), (c[l] = null))
                        : (n[s] = new v(t, i[s]));
                for (s = 0; s < f; ++s)
                    (u = e[s]) && c[p[s]] === u && (o[s] = u);
            }
            function w(t, e) {
                return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
            }
            var x = function(t) {
                return (
                    (t.ownerDocument && t.ownerDocument.defaultView) ||
                    (t.document && t) ||
                    t.defaultView
                );
            };
            function A(t) {
                return t.trim().split(/^|\s+/);
            }
            function E(t) {
                return t.classList || new T(t);
            }
            function T(t) {
                (this._node = t),
                    (this._names = A(t.getAttribute('class') || ''));
            }
            function S(t, e) {
                for (var n = E(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
            }
            function B(t, e) {
                for (var n = E(t), r = -1, o = e.length; ++r < o; )
                    n.remove(e[r]);
            }
            T.prototype = {
                add: function(t) {
                    this._names.indexOf(t) < 0 &&
                        (this._names.push(t),
                        this._node.setAttribute(
                            'class',
                            this._names.join(' ')
                        ));
                },
                remove: function(t) {
                    var e = this._names.indexOf(t);
                    e >= 0 &&
                        (this._names.splice(e, 1),
                        this._node.setAttribute(
                            'class',
                            this._names.join(' ')
                        ));
                },
                contains: function(t) {
                    return this._names.indexOf(t) >= 0;
                }
            };
            function O() {
                this.textContent = '';
            }
            function U() {
                this.innerHTML = '';
            }
            function C() {
                this.nextSibling && this.parentNode.appendChild(this);
            }
            function k() {
                this.previousSibling &&
                    this.parentNode.insertBefore(
                        this,
                        this.parentNode.firstChild
                    );
            }
            function L() {
                return null;
            }
            function P() {
                var t = this.parentNode;
                t && t.removeChild(this);
            }
            function R() {
                return this.parentNode.insertBefore(
                    this.cloneNode(!1),
                    this.nextSibling
                );
            }
            function j() {
                return this.parentNode.insertBefore(
                    this.cloneNode(!0),
                    this.nextSibling
                );
            }
            var N = {},
                q = null;
            'undefined' != typeof document &&
                ('onmouseenter' in document.documentElement ||
                    (N = { mouseenter: 'mouseover', mouseleave: 'mouseout' }));
            function I(t, e, n) {
                return (
                    (t = M(t, e, n)),
                    function(e) {
                        var n = e.relatedTarget;
                        (n &&
                            (n === this ||
                                8 & n.compareDocumentPosition(this))) ||
                            t.call(this, e);
                    }
                );
            }
            function M(t, e, n) {
                return function(r) {
                    var o = q;
                    q = r;
                    try {
                        t.call(this, this.__data__, e, n);
                    } finally {
                        q = o;
                    }
                };
            }
            function D(t) {
                return function() {
                    var e = this.__on;
                    if (e) {
                        for (var n, r = 0, o = -1, i = e.length; r < i; ++r)
                            (n = e[r]),
                                (t.type && n.type !== t.type) ||
                                n.name !== t.name
                                    ? (e[++o] = n)
                                    : this.removeEventListener(
                                          n.type,
                                          n.listener,
                                          n.capture
                                      );
                        ++o ? (e.length = o) : delete this.__on;
                    }
                };
            }
            function F(t, e, n) {
                var r = N.hasOwnProperty(t.type) ? I : M;
                return function(o, i, a) {
                    var s,
                        u = this.__on,
                        l = r(e, i, a);
                    if (u)
                        for (var c = 0, f = u.length; c < f; ++c)
                            if ((s = u[c]).type === t.type && s.name === t.name)
                                return (
                                    this.removeEventListener(
                                        s.type,
                                        s.listener,
                                        s.capture
                                    ),
                                    this.addEventListener(
                                        s.type,
                                        (s.listener = l),
                                        (s.capture = n)
                                    ),
                                    void (s.value = e)
                                );
                    this.addEventListener(t.type, l, n),
                        (s = {
                            type: t.type,
                            name: t.name,
                            value: e,
                            listener: l,
                            capture: n
                        }),
                        u ? u.push(s) : (this.__on = [s]);
                };
            }
            function H(t, e, n) {
                var r = x(t),
                    o = r.CustomEvent;
                'function' == typeof o
                    ? (o = new o(e, n))
                    : ((o = r.document.createEvent('Event')),
                      n
                          ? (o.initEvent(e, n.bubbles, n.cancelable),
                            (o.detail = n.detail))
                          : o.initEvent(e, !1, !1)),
                    t.dispatchEvent(o);
            }
            var z = [null];
            function G(t, e) {
                (this._groups = t), (this._parents = e);
            }
            function V() {
                return new G([[document.documentElement]], z);
            }
            G.prototype = V.prototype = {
                constructor: G,
                select: function(t) {
                    'function' != typeof t && (t = d(t));
                    for (
                        var e = this._groups,
                            n = e.length,
                            r = new Array(n),
                            o = 0;
                        o < n;
                        ++o
                    )
                        for (
                            var i,
                                a,
                                s = e[o],
                                u = s.length,
                                l = (r[o] = new Array(u)),
                                c = 0;
                            c < u;
                            ++c
                        )
                            (i = s[c]) &&
                                (a = t.call(i, i.__data__, c, s)) &&
                                ('__data__' in i && (a.__data__ = i.__data__),
                                (l[c] = a));
                    return new G(r, this._parents);
                },
                selectAll: function(t) {
                    var e;
                    'function' != typeof t &&
                        (t =
                            null == (e = t)
                                ? y
                                : function() {
                                      return this.querySelectorAll(e);
                                  });
                    for (
                        var n = this._groups,
                            r = n.length,
                            o = [],
                            i = [],
                            a = 0;
                        a < r;
                        ++a
                    )
                        for (var s, u = n[a], l = u.length, c = 0; c < l; ++c)
                            (s = u[c]) &&
                                (o.push(t.call(s, s.__data__, c, u)),
                                i.push(s));
                    return new G(o, i);
                },
                filter: function(t) {
                    var e;
                    'function' != typeof t &&
                        ((e = t),
                        (t = function() {
                            return this.matches(e);
                        }));
                    for (
                        var n = this._groups,
                            r = n.length,
                            o = new Array(r),
                            i = 0;
                        i < r;
                        ++i
                    )
                        for (
                            var a,
                                s = n[i],
                                u = s.length,
                                l = (o[i] = []),
                                c = 0;
                            c < u;
                            ++c
                        )
                            (a = s[c]) &&
                                t.call(a, a.__data__, c, s) &&
                                l.push(a);
                    return new G(o, this._parents);
                },
                data: function(t, e) {
                    if (!t)
                        return (
                            (d = new Array(this.size())),
                            (c = -1),
                            this.each(function(t) {
                                d[++c] = t;
                            }),
                            d
                        );
                    var n,
                        r = e ? _ : g,
                        o = this._parents,
                        i = this._groups;
                    'function' != typeof t &&
                        ((n = t),
                        (t = function() {
                            return n;
                        }));
                    for (
                        var a = i.length,
                            s = new Array(a),
                            u = new Array(a),
                            l = new Array(a),
                            c = 0;
                        c < a;
                        ++c
                    ) {
                        var f = o[c],
                            h = i[c],
                            p = h.length,
                            d = t.call(f, f && f.__data__, c, o),
                            y = d.length,
                            m = (u[c] = new Array(y)),
                            v = (s[c] = new Array(y));
                        r(f, h, m, v, (l[c] = new Array(p)), d, e);
                        for (var b, w, x = 0, A = 0; x < y; ++x)
                            if ((b = m[x])) {
                                for (
                                    x >= A && (A = x + 1);
                                    !(w = v[A]) && ++A < y;

                                );
                                b._next = w || null;
                            }
                    }
                    return ((s = new G(s, o))._enter = u), (s._exit = l), s;
                },
                enter: function() {
                    return new G(
                        this._enter || this._groups.map(m),
                        this._parents
                    );
                },
                exit: function() {
                    return new G(
                        this._exit || this._groups.map(m),
                        this._parents
                    );
                },
                join: function(t, e, n) {
                    var r = this.enter(),
                        o = this,
                        i = this.exit();
                    return (
                        (r = 'function' == typeof t ? t(r) : r.append(t + '')),
                        null != e && (o = e(o)),
                        null == n ? i.remove() : n(i),
                        r && o ? r.merge(o).order() : o
                    );
                },
                merge: function(t) {
                    for (
                        var e = this._groups,
                            n = t._groups,
                            r = e.length,
                            o = n.length,
                            i = Math.min(r, o),
                            a = new Array(r),
                            s = 0;
                        s < i;
                        ++s
                    )
                        for (
                            var u,
                                l = e[s],
                                c = n[s],
                                f = l.length,
                                h = (a[s] = new Array(f)),
                                p = 0;
                            p < f;
                            ++p
                        )
                            (u = l[p] || c[p]) && (h[p] = u);
                    for (; s < r; ++s) a[s] = e[s];
                    return new G(a, this._parents);
                },
                order: function() {
                    for (var t = this._groups, e = -1, n = t.length; ++e < n; )
                        for (
                            var r, o = t[e], i = o.length - 1, a = o[i];
                            --i >= 0;

                        )
                            (r = o[i]) &&
                                (a &&
                                    4 ^ r.compareDocumentPosition(a) &&
                                    a.parentNode.insertBefore(r, a),
                                (a = r));
                    return this;
                },
                sort: function(t) {
                    function e(e, n) {
                        return e && n ? t(e.__data__, n.__data__) : !e - !n;
                    }
                    t || (t = w);
                    for (
                        var n = this._groups,
                            r = n.length,
                            o = new Array(r),
                            i = 0;
                        i < r;
                        ++i
                    ) {
                        for (
                            var a,
                                s = n[i],
                                u = s.length,
                                l = (o[i] = new Array(u)),
                                c = 0;
                            c < u;
                            ++c
                        )
                            (a = s[c]) && (l[c] = a);
                        l.sort(e);
                    }
                    return new G(o, this._parents).order();
                },
                call: function() {
                    var t = arguments[0];
                    return (
                        (arguments[0] = this), t.apply(null, arguments), this
                    );
                },
                nodes: function() {
                    var t = new Array(this.size()),
                        e = -1;
                    return (
                        this.each(function() {
                            t[++e] = this;
                        }),
                        t
                    );
                },
                node: function() {
                    for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
                        for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
                            var a = r[o];
                            if (a) return a;
                        }
                    return null;
                },
                size: function() {
                    var t = 0;
                    return (
                        this.each(function() {
                            ++t;
                        }),
                        t
                    );
                },
                empty: function() {
                    return !this.node();
                },
                each: function(t) {
                    for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
                        for (var o, i = e[n], a = 0, s = i.length; a < s; ++a)
                            (o = i[a]) && t.call(o, o.__data__, a, i);
                    return this;
                },
                attr: function(t, e) {
                    var n = f(t);
                    if (arguments.length < 2) {
                        var r = this.node();
                        return n.local
                            ? r.getAttributeNS(n.space, n.local)
                            : r.getAttribute(n);
                    }
                    return this.each(
                        (null == e
                            ? n.local
                                ? function(t) {
                                      return function() {
                                          this.removeAttributeNS(
                                              t.space,
                                              t.local
                                          );
                                      };
                                  }
                                : function(t) {
                                      return function() {
                                          this.removeAttribute(t);
                                      };
                                  }
                            : 'function' == typeof e
                            ? n.local
                                ? function(t, e) {
                                      return function() {
                                          var n = e.apply(this, arguments);
                                          null == n
                                              ? this.removeAttributeNS(
                                                    t.space,
                                                    t.local
                                                )
                                              : this.setAttributeNS(
                                                    t.space,
                                                    t.local,
                                                    n
                                                );
                                      };
                                  }
                                : function(t, e) {
                                      return function() {
                                          var n = e.apply(this, arguments);
                                          null == n
                                              ? this.removeAttribute(t)
                                              : this.setAttribute(t, n);
                                      };
                                  }
                            : n.local
                            ? function(t, e) {
                                  return function() {
                                      this.setAttributeNS(t.space, t.local, e);
                                  };
                              }
                            : function(t, e) {
                                  return function() {
                                      this.setAttribute(t, e);
                                  };
                              })(n, e)
                    );
                },
                style: function(t, e, n) {
                    return arguments.length > 1
                        ? this.each(
                              (null == e
                                  ? function(t) {
                                        return function() {
                                            this.style.removeProperty(t);
                                        };
                                    }
                                  : 'function' == typeof e
                                  ? function(t, e, n) {
                                        return function() {
                                            var r = e.apply(this, arguments);
                                            null == r
                                                ? this.style.removeProperty(t)
                                                : this.style.setProperty(
                                                      t,
                                                      r,
                                                      n
                                                  );
                                        };
                                    }
                                  : function(t, e, n) {
                                        return function() {
                                            this.style.setProperty(t, e, n);
                                        };
                                    })(t, e, null == n ? '' : n)
                          )
                        : (function(t, e) {
                              return (
                                  t.style.getPropertyValue(e) ||
                                  x(t)
                                      .getComputedStyle(t, null)
                                      .getPropertyValue(e)
                              );
                          })(this.node(), t);
                },
                property: function(t, e) {
                    return arguments.length > 1
                        ? this.each(
                              (null == e
                                  ? function(t) {
                                        return function() {
                                            delete this[t];
                                        };
                                    }
                                  : 'function' == typeof e
                                  ? function(t, e) {
                                        return function() {
                                            var n = e.apply(this, arguments);
                                            null == n
                                                ? delete this[t]
                                                : (this[t] = n);
                                        };
                                    }
                                  : function(t, e) {
                                        return function() {
                                            this[t] = e;
                                        };
                                    })(t, e)
                          )
                        : this.node()[t];
                },
                classed: function(t, e) {
                    var n = A(t + '');
                    if (arguments.length < 2) {
                        for (
                            var r = E(this.node()), o = -1, i = n.length;
                            ++o < i;

                        )
                            if (!r.contains(n[o])) return !1;
                        return !0;
                    }
                    return this.each(
                        ('function' == typeof e
                            ? function(t, e) {
                                  return function() {
                                      (e.apply(this, arguments) ? S : B)(
                                          this,
                                          t
                                      );
                                  };
                              }
                            : e
                            ? function(t) {
                                  return function() {
                                      S(this, t);
                                  };
                              }
                            : function(t) {
                                  return function() {
                                      B(this, t);
                                  };
                              })(n, e)
                    );
                },
                text: function(t) {
                    return arguments.length
                        ? this.each(
                              null == t
                                  ? O
                                  : ('function' == typeof t
                                        ? function(t) {
                                              return function() {
                                                  var e = t.apply(
                                                      this,
                                                      arguments
                                                  );
                                                  this.textContent =
                                                      null == e ? '' : e;
                                              };
                                          }
                                        : function(t) {
                                              return function() {
                                                  this.textContent = t;
                                              };
                                          })(t)
                          )
                        : this.node().textContent;
                },
                html: function(t) {
                    return arguments.length
                        ? this.each(
                              null == t
                                  ? U
                                  : ('function' == typeof t
                                        ? function(t) {
                                              return function() {
                                                  var e = t.apply(
                                                      this,
                                                      arguments
                                                  );
                                                  this.innerHTML =
                                                      null == e ? '' : e;
                                              };
                                          }
                                        : function(t) {
                                              return function() {
                                                  this.innerHTML = t;
                                              };
                                          })(t)
                          )
                        : this.node().innerHTML;
                },
                raise: function() {
                    return this.each(C);
                },
                lower: function() {
                    return this.each(k);
                },
                append: function(t) {
                    var e = 'function' == typeof t ? t : h(t);
                    return this.select(function() {
                        return this.appendChild(e.apply(this, arguments));
                    });
                },
                insert: function(t, e) {
                    var n = 'function' == typeof t ? t : h(t),
                        r = null == e ? L : 'function' == typeof e ? e : d(e);
                    return this.select(function() {
                        return this.insertBefore(
                            n.apply(this, arguments),
                            r.apply(this, arguments) || null
                        );
                    });
                },
                remove: function() {
                    return this.each(P);
                },
                clone: function(t) {
                    return this.select(t ? j : R);
                },
                datum: function(t) {
                    return arguments.length
                        ? this.property('__data__', t)
                        : this.node().__data__;
                },
                on: function(t, e, n) {
                    var r,
                        o,
                        i = (function(t) {
                            return t
                                .trim()
                                .split(/^|\s+/)
                                .map(function(t) {
                                    var e = '',
                                        n = t.indexOf('.');
                                    return (
                                        n >= 0 &&
                                            ((e = t.slice(n + 1)),
                                            (t = t.slice(0, n))),
                                        { type: t, name: e }
                                    );
                                });
                        })(t + ''),
                        a = i.length;
                    if (!(arguments.length < 2)) {
                        for (
                            s = e ? F : D, null == n && (n = !1), r = 0;
                            r < a;
                            ++r
                        )
                            this.each(s(i[r], e, n));
                        return this;
                    }
                    var s = this.node().__on;
                    if (s)
                        for (var u, l = 0, c = s.length; l < c; ++l)
                            for (r = 0, u = s[l]; r < a; ++r)
                                if (
                                    (o = i[r]).type === u.type &&
                                    o.name === u.name
                                )
                                    return u.value;
                },
                dispatch: function(t, e) {
                    return this.each(
                        ('function' == typeof e
                            ? function(t, e) {
                                  return function() {
                                      return H(
                                          this,
                                          t,
                                          e.apply(this, arguments)
                                      );
                                  };
                              }
                            : function(t, e) {
                                  return function() {
                                      return H(this, t, e);
                                  };
                              })(t, e)
                    );
                }
            };
            var J = V,
                Q = function(t) {
                    return 'string' == typeof t
                        ? new G(
                              [[document.querySelector(t)]],
                              [document.documentElement]
                          )
                        : new G([[t]], z);
                },
                W = 0;
            function X() {
                this._ = '@' + (++W).toString(36);
            }
            X.prototype = function() {
                return new X();
            }.prototype = {
                constructor: X,
                get: function(t) {
                    for (var e = this._; !(e in t); )
                        if (!(t = t.parentNode)) return;
                    return t[e];
                },
                set: function(t, e) {
                    return (t[this._] = e);
                },
                remove: function(t) {
                    return this._ in t && delete t[this._];
                },
                toString: function() {
                    return this._;
                }
            };
            var K = function() {
                    var t = function() {
                            return 'n';
                        },
                        e = function() {
                            return [0, 0];
                        },
                        n = function() {
                            return ' ';
                        },
                        r = document.body,
                        o = h(),
                        a = null,
                        s = null,
                        u = null;
                    function l(t) {
                        var e;
                        (e = t.node()),
                            (a = e
                                ? 'svg' === e.tagName.toLowerCase()
                                    ? e
                                    : e.ownerSVGElement
                                : null) &&
                                ((s = a.createSVGPoint()), r.appendChild(o));
                    }
                    (l.show = function() {
                        var o = Array.prototype.slice.call(arguments);
                        o[o.length - 1] instanceof SVGElement && (u = o.pop());
                        var i,
                            a = n.apply(this, o),
                            s = e.apply(this, o),
                            h = t.apply(this, o),
                            d = p(),
                            y = f.length,
                            m =
                                document.documentElement.scrollTop ||
                                r.scrollTop,
                            v =
                                document.documentElement.scrollLeft ||
                                r.scrollLeft;
                        for (
                            d
                                .html(a)
                                .style('opacity', 1)
                                .style('pointer-events', 'all');
                            y--;

                        )
                            d.classed(f[y], !1);
                        return (
                            (i = c.get(h).apply(this)),
                            d
                                .classed(h, !0)
                                .style('top', i.top + s[0] + m + 'px')
                                .style('left', i.left + s[1] + v + 'px'),
                            l
                        );
                    }),
                        (l.hide = function() {
                            return (
                                p()
                                    .style('opacity', 0)
                                    .style('pointer-events', 'none'),
                                l
                            );
                        }),
                        (l.attr = function(t, e) {
                            if (arguments.length < 2 && 'string' == typeof t)
                                return p().attr(t);
                            var n = Array.prototype.slice.call(arguments);
                            return J.prototype.attr.apply(p(), n), l;
                        }),
                        (l.style = function(t, e) {
                            if (arguments.length < 2 && 'string' == typeof t)
                                return p().style(t);
                            var n = Array.prototype.slice.call(arguments);
                            return J.prototype.style.apply(p(), n), l;
                        }),
                        (l.direction = function(e) {
                            return arguments.length
                                ? ((t = null == e ? e : y(e)), l)
                                : t;
                        }),
                        (l.offset = function(t) {
                            return arguments.length
                                ? ((e = null == t ? t : y(t)), l)
                                : e;
                        }),
                        (l.html = function(t) {
                            return arguments.length
                                ? ((n = null == t ? t : y(t)), l)
                                : n;
                        }),
                        (l.rootElement = function(t) {
                            return arguments.length
                                ? ((r = null == t ? t : y(t)), l)
                                : r;
                        }),
                        (l.destroy = function() {
                            return o && (p().remove(), (o = null)), l;
                        });
                    var c = i({
                            n: function() {
                                var t = d(this);
                                return {
                                    top: t.n.y - o.offsetHeight,
                                    left: t.n.x - o.offsetWidth / 2
                                };
                            },
                            s: function() {
                                var t = d(this);
                                return {
                                    top: t.s.y,
                                    left: t.s.x - o.offsetWidth / 2
                                };
                            },
                            e: function() {
                                var t = d(this);
                                return {
                                    top: t.e.y - o.offsetHeight / 2,
                                    left: t.e.x
                                };
                            },
                            w: function() {
                                var t = d(this);
                                return {
                                    top: t.w.y - o.offsetHeight / 2,
                                    left: t.w.x - o.offsetWidth
                                };
                            },
                            nw: function() {
                                var t = d(this);
                                return {
                                    top: t.nw.y - o.offsetHeight,
                                    left: t.nw.x - o.offsetWidth
                                };
                            },
                            ne: function() {
                                var t = d(this);
                                return {
                                    top: t.ne.y - o.offsetHeight,
                                    left: t.ne.x
                                };
                            },
                            sw: function() {
                                var t = d(this);
                                return {
                                    top: t.sw.y,
                                    left: t.sw.x - o.offsetWidth
                                };
                            },
                            se: function() {
                                var t = d(this);
                                return { top: t.se.y, left: t.se.x };
                            }
                        }),
                        f = c.keys();
                    function h() {
                        var t = Q(document.createElement('div'));
                        return (
                            t
                                .style('position', 'absolute')
                                .style('top', 0)
                                .style('opacity', 0)
                                .style('pointer-events', 'none')
                                .style('box-sizing', 'border-box'),
                            t.node()
                        );
                    }
                    function p() {
                        return null == o && ((o = h()), r.appendChild(o)), Q(o);
                    }
                    function d(t) {
                        for (
                            var e = u || t;
                            null == e.getScreenCTM && null != e.parentNode;

                        )
                            e = e.parentNode;
                        var n = {},
                            r = e.getScreenCTM(),
                            o = e.getBBox(),
                            i = o.width,
                            a = o.height,
                            l = o.x,
                            c = o.y;
                        return (
                            (s.x = l),
                            (s.y = c),
                            (n.nw = s.matrixTransform(r)),
                            (s.x += i),
                            (n.ne = s.matrixTransform(r)),
                            (s.y += a),
                            (n.se = s.matrixTransform(r)),
                            (s.x -= i),
                            (n.sw = s.matrixTransform(r)),
                            (s.y -= a / 2),
                            (n.w = s.matrixTransform(r)),
                            (s.x += i),
                            (n.e = s.matrixTransform(r)),
                            (s.x -= i / 2),
                            (s.y -= a / 2),
                            (n.n = s.matrixTransform(r)),
                            (s.y += a),
                            (n.s = s.matrixTransform(r)),
                            n
                        );
                    }
                    function y(t) {
                        return 'function' == typeof t
                            ? t
                            : function() {
                                  return t;
                              };
                    }
                    return l;
                },
                Y =
                    (n(0),
                    n(5),
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
            function Z(t, e, n) {
                var r = this,
                    o = function() {
                        if (t.length > 0) {
                            var i = t.shift();
                            i && i.apply(r, [e, o]);
                        } else n(e);
                    };
                o();
            }
            function tt(t, e) {
                var n;
                try {
                    n = JSON.stringify(t);
                } catch (t) {
                    throw new Error(
                        'Network request failed. Payload is not serializable: ' +
                            t.message
                    );
                }
                return Y({ body: n, method: 'POST' }, e, {
                    headers: Y(
                        { Accept: '*/*', 'Content-Type': 'application/json' },
                        e.headers || []
                    )
                });
            }
            function et(t) {
                void 0 === t && (t = {});
                var e = t.constructOptions,
                    n = t.customFetch,
                    r = t.uri || '/graphql',
                    o = [],
                    i = [],
                    a = [],
                    s = [],
                    u = function(t) {
                        var u,
                            l = {},
                            c = Array.isArray(t);
                        return (function(t, e) {
                            return new Promise(function(n, r) {
                                Z(e ? i.slice() : o.slice(), t, n);
                            });
                        })(
                            c
                                ? { requests: t, options: l }
                                : { request: t, options: l },
                            c
                        )
                            .then(function(t) {
                                return (e ||
                                    tt)(t.request || t.requests, t.options);
                            })
                            .then(function(t) {
                                return (l = Y({}, t)), (n || fetch)(r, l);
                            })
                            .then(function(t) {
                                return t.text().then(function(e) {
                                    try {
                                        var n = JSON.parse(e);
                                        return (t.raw = e), (t.parsed = n), t;
                                    } catch (n) {
                                        return (u = n), (t.raw = e), t;
                                    }
                                });
                            })
                            .then(function(t) {
                                return (function(t, e) {
                                    return new Promise(function(n, r) {
                                        Z(e ? s.slice() : a.slice(), t, n);
                                    });
                                })({ response: t, options: l }, c);
                            })
                            .then(function(t) {
                                var e = t.response;
                                if (e.parsed) {
                                    if (!c) return Y({}, e.parsed);
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
                                    })(e, u);
                            });
                    };
                return (
                    (u.use = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Middleware must be a function');
                        return o.push(t), u;
                    }),
                    (u.useAfter = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Afterware must be a function');
                        return a.push(t), u;
                    }),
                    (u.batchUse = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Middleware must be a function');
                        return i.push(t), u;
                    }),
                    (u.batchUseAfter = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Afterware must be a function');
                        return s.push(t), u;
                    }),
                    u
                );
            }
            n.d(e, 'load_bars_visualization', function() {
                return rt;
            });
            const nt = {};
            function rt() {
                let t,
                    e,
                    n,
                    r = document.getElementsByClassName(
                        'benchmarkingChart_bars'
                    ),
                    o = 0;
                for (e of ((o = 0), r)) {
                    let r =
                        'https://' +
                        ($(e).data('mode') ? 'dev-openebench' : 'openebench') +
                        '.bsc.es/';
                    t = e.getAttribute('data-id');
                    var i = e.getAttribute('metric_y');
                    (n = (t + o).replace(':', '_')), (e.id = n);
                    let s = r + 'sciapi/graphql',
                        u =
                            'query getDatasets($challenge_id: String!){\n                        getDatasets(datasetFilters:{challenge_id: $challenge_id, type:"assessment"}) {\n                            _id\n                            community_ids\n                            datalink{\n                                inline_data\n                            }\n                            depends_on{\n                                tool_id\n                                metrics_id\n                            }\n                        }\n                      }';
                    var a = $(
                        '<br><br><table id="' +
                            (n + '_table') +
                            '"class="benchmarkingTable_bars"></table>'
                    );
                    $('#' + n).append(a), ot(s, u, t, n, i), o++;
                }
            }
            function ot(t, e, n, r, o) {
                try {
                    const i = et({ uri: t });
                    i({ query: e, variables: { challenge_id: n } }).then(t => {
                        let e = t.data.getDatasets;
                        if (0 == e.length) {
                            var a = document.createElement('td');
                            a.id = 'no_benchmark_data';
                            var s = document.createTextNode(
                                'No data available for the selected challenge: ' +
                                    n
                            );
                            a.appendChild(s),
                                document.getElementById(r).appendChild(a);
                        } else {
                            (() =>
                                i({
                                    query:
                                        'query getTools($community_id: String!){\n                        getTools(toolFilters:{community_id: $community_id}) {\n                            _id\n                            name\n                        }\n                        getMetrics {\n                          _id\n                          title\n                          representation_hints\n                        }\n                    }',
                                    variables: {
                                        community_id: e[0].community_ids[0]
                                    }
                                }))().then(t => {
                                let n,
                                    i = t.data.getTools,
                                    a = t.data.getMetrics,
                                    s = {};
                                i.forEach(function(t) {
                                    s[t._id] = t.name;
                                }),
                                    a.forEach(function(t) {
                                        t._id == o && (n = t.title);
                                    }),
                                    (function(t, e, n, r) {
                                        var o = [];
                                        t.forEach(function(t) {
                                            o.push({
                                                toolname:
                                                    n[t.depends_on.tool_id],
                                                metric_value: parseFloat(
                                                    t.datalink.inline_data.value
                                                )
                                            });
                                        }),
                                            (i = o),
                                            (a = 'toolname'),
                                            (o = i.sort(function(t, e) {
                                                var n = t[a],
                                                    r = e[a];
                                                return (
                                                    1 *
                                                    (n < r ? -1 : n > r ? 1 : 0)
                                                );
                                            })),
                                            (nt[e] = o);
                                        var i, a;
                                        var s = {
                                                top: 40,
                                                right: 30,
                                                bottom: 120,
                                                left: 60
                                            },
                                            u =
                                                Math.round(
                                                    0.70226 * $(window).width()
                                                ) -
                                                s.left -
                                                s.right,
                                            l =
                                                Math.round(
                                                    0.8888 * $(window).height()
                                                ) -
                                                s.top -
                                                s.bottom;
                                        d3
                                            .select('#' + e)
                                            .append('input')
                                            .attr('type', 'button')
                                            .attr(
                                                'class',
                                                'classificator_button'
                                            )
                                            .attr('id', e + '_button')
                                            .attr(
                                                'value',
                                                'Sort & Classify Results'
                                            )
                                            .on('click', function(t) {
                                                !(function(t, e, n, r, o) {
                                                    var i = document.getElementById(
                                                        t + '_table'
                                                    );
                                                    null != i &&
                                                        (i.innerHTML = '');
                                                    d3
                                                        .select(
                                                            '#' + t + '_svg'
                                                        )
                                                        .remove(),
                                                        'block' ==
                                                        getComputedStyle(i)
                                                            .display
                                                            ? (d3
                                                                  .select(
                                                                      '#' +
                                                                          t +
                                                                          '_button'
                                                                  )
                                                                  .attr(
                                                                      'value',
                                                                      'Sort & Classify Results'
                                                                  ),
                                                              (i.style.display =
                                                                  'none'),
                                                              it(
                                                                  nt[t],
                                                                  t,
                                                                  e,
                                                                  n,
                                                                  r,
                                                                  o
                                                              ))
                                                            : (d3
                                                                  .select(
                                                                      '#' +
                                                                          t +
                                                                          '_button'
                                                                  )
                                                                  .attr(
                                                                      'value',
                                                                      'Get Back to Raw Results'
                                                                  ),
                                                              (function(
                                                                  t,
                                                                  e,
                                                                  n,
                                                                  r,
                                                                  o,
                                                                  i
                                                              ) {
                                                                  let a = [
                                                                      ...t
                                                                  ].sort(
                                                                      function(
                                                                          t,
                                                                          e
                                                                      ) {
                                                                          return (
                                                                              e.metric_value -
                                                                              t.metric_value
                                                                          );
                                                                      }
                                                                  );
                                                                  it(
                                                                      a,
                                                                      e,
                                                                      n,
                                                                      r,
                                                                      o,
                                                                      i
                                                                  );
                                                                  let s = a
                                                                          .map(
                                                                              t =>
                                                                                  t.metric_value
                                                                          )
                                                                          .sort(
                                                                              function(
                                                                                  t,
                                                                                  e
                                                                              ) {
                                                                                  return (
                                                                                      t -
                                                                                      e
                                                                                  );
                                                                              }
                                                                          ),
                                                                      u = d3.quantile(
                                                                          s,
                                                                          0.25
                                                                      ),
                                                                      l = d3.quantile(
                                                                          s,
                                                                          0.5
                                                                      ),
                                                                      c = d3.quantile(
                                                                          s,
                                                                          0.75
                                                                      );
                                                                  var f = at(
                                                                      e,
                                                                      c,
                                                                      a,
                                                                      0,
                                                                      '1st Quartile',
                                                                      n,
                                                                      r,
                                                                      o
                                                                  );
                                                                  (f = at(
                                                                      e,
                                                                      l,
                                                                      a,
                                                                      f,
                                                                      '2nd Quartile',
                                                                      n,
                                                                      r,
                                                                      o
                                                                  )),
                                                                      (f = at(
                                                                          e,
                                                                          u,
                                                                          a,
                                                                          f,
                                                                          '3rd Quartile',
                                                                          n,
                                                                          r,
                                                                          o
                                                                      )),
                                                                      d3
                                                                          .select(
                                                                              '#' +
                                                                                  e +
                                                                                  '_svg'
                                                                          )
                                                                          .append(
                                                                              'text'
                                                                          )
                                                                          .attr(
                                                                              'id',
                                                                              function(
                                                                                  t
                                                                              ) {
                                                                                  return (
                                                                                      e +
                                                                                      '___num_bottom_right'
                                                                                  );
                                                                              }
                                                                          )
                                                                          .attr(
                                                                              'x',
                                                                              (n +
                                                                                  f) /
                                                                                  2 +
                                                                                  r.left
                                                                          )
                                                                          .attr(
                                                                              'y',
                                                                              r.top +
                                                                                  30
                                                                          )
                                                                          .attr(
                                                                              'text-anchor',
                                                                              'middle'
                                                                          )
                                                                          .style(
                                                                              'opacity',
                                                                              0.4
                                                                          )
                                                                          .style(
                                                                              'font-size',
                                                                              '2vw'
                                                                          )
                                                                          .style(
                                                                              'fill',
                                                                              '#0A58A2'
                                                                          )
                                                                          .text(
                                                                              '4th Quartile'
                                                                          ),
                                                                      (function(
                                                                          t,
                                                                          e,
                                                                          n,
                                                                          r,
                                                                          o
                                                                      ) {
                                                                          for (
                                                                              var i = 0;
                                                                              i <
                                                                              e.length;
                                                                              i++
                                                                          ) {
                                                                              var a =
                                                                                  e[
                                                                                      i
                                                                                  ];
                                                                              a.metric_value >=
                                                                              o
                                                                                  ? (a.quartile = 1)
                                                                                  : a.metric_value <
                                                                                        o &&
                                                                                    a.metric_value >=
                                                                                        r
                                                                                  ? (a.quartile = 2)
                                                                                  : a.metric_value <
                                                                                        r &&
                                                                                    a.metric_value >=
                                                                                        n
                                                                                  ? (a.quartile = 3)
                                                                                  : (a.quartile = 4);
                                                                          }
                                                                          (function(
                                                                              t,
                                                                              e
                                                                          ) {
                                                                              var n = document.getElementById(
                                                                                  t +
                                                                                      '_table'
                                                                              );
                                                                              n.style.display =
                                                                                  'block';
                                                                              var r = n.insertRow(
                                                                                  -1
                                                                              );
                                                                              (r.insertCell(
                                                                                  0
                                                                              ).innerHTML =
                                                                                  '<b>TOOL</b>'),
                                                                                  (r.insertCell(
                                                                                      1
                                                                                  ).innerHTML =
                                                                                      '<b>QUARTILE</b>'),
                                                                                  e.forEach(
                                                                                      function(
                                                                                          e
                                                                                      ) {
                                                                                          var r = n.insertRow(
                                                                                              -1
                                                                                          );
                                                                                          (r.insertCell(
                                                                                              0
                                                                                          ).innerHTML =
                                                                                              e.toolname),
                                                                                              (r.insertCell(
                                                                                                  1
                                                                                              ).innerHTML =
                                                                                                  e.quartile);
                                                                                          var o =
                                                                                              r
                                                                                                  .cells[0];
                                                                                          o.id =
                                                                                              t +
                                                                                              '___cell' +
                                                                                              e.toolname.replace(
                                                                                                  /[\. ()\/-]/g,
                                                                                                  '_'
                                                                                              );
                                                                                      }
                                                                                  );
                                                                          })(
                                                                              t,
                                                                              e
                                                                          ),
                                                                              (function(
                                                                                  t
                                                                              ) {
                                                                                  $(
                                                                                      '#' +
                                                                                          t +
                                                                                          '_table td'
                                                                                  ).each(
                                                                                      function() {
                                                                                          var t = $(
                                                                                              this
                                                                                          ).html();
                                                                                          1 ==
                                                                                          t
                                                                                              ? $(
                                                                                                    this
                                                                                                ).css(
                                                                                                    {
                                                                                                        background:
                                                                                                            '#238b45'
                                                                                                    }
                                                                                                )
                                                                                              : 2 ==
                                                                                                t
                                                                                              ? $(
                                                                                                    this
                                                                                                ).css(
                                                                                                    {
                                                                                                        background:
                                                                                                            '#74c476'
                                                                                                    }
                                                                                                )
                                                                                              : 3 ==
                                                                                                t
                                                                                              ? $(
                                                                                                    this
                                                                                                ).css(
                                                                                                    {
                                                                                                        background:
                                                                                                            '#bae4b3'
                                                                                                    }
                                                                                                )
                                                                                              : 4 ==
                                                                                                t
                                                                                              ? $(
                                                                                                    this
                                                                                                ).css(
                                                                                                    {
                                                                                                        background:
                                                                                                            '#edf8e9'
                                                                                                    }
                                                                                                )
                                                                                              : '--' ==
                                                                                                t
                                                                                              ? $(
                                                                                                    this
                                                                                                ).css(
                                                                                                    {
                                                                                                        background:
                                                                                                            '#f0f0f5'
                                                                                                    }
                                                                                                )
                                                                                              : $(
                                                                                                    this
                                                                                                ).css(
                                                                                                    {
                                                                                                        background:
                                                                                                            '#FFFFFF'
                                                                                                    }
                                                                                                );
                                                                                      }
                                                                                  );
                                                                              })(
                                                                                  t
                                                                              );
                                                                      })(
                                                                          e,
                                                                          t,
                                                                          u,
                                                                          l,
                                                                          c
                                                                      );
                                                              })(
                                                                  nt[t],
                                                                  t,
                                                                  e,
                                                                  n,
                                                                  r,
                                                                  o
                                                              ));
                                                })(e, u, s, l, r);
                                            }),
                                            it(o, e, u, s, l, r);
                                    })(e, r, s, n);
                            });
                        }
                    });
                } catch (t) {
                    console.log(`Invalid Url Error: ${t.stack} `);
                }
            }
            function it(t, e, n, r, o, i) {
                d3.format('.0%');
                let a = d3.format(','),
                    s =
                        (d3.format('.4f'),
                        d3.min(t, function(t) {
                            return t.metric_value;
                        })),
                    u = d3.max(t, function(t) {
                        return t.metric_value;
                    });
                var l = d3
                        .scaleBand()
                        .range([0, n], 0.1)
                        .domain(
                            t.map(function(t) {
                                return t.toolname;
                            })
                        )
                        .padding(0.4),
                    c = d3
                        .scaleLinear()
                        .domain([s, u])
                        .nice()
                        .range([o, 0]),
                    f = d3.axisBottom(l),
                    h = d3.axisLeft(c).ticks(5),
                    p = K();
                p.attr('class', 'd3-tip')
                    .offset([-10, 0])
                    .html(function(t) {
                        return (
                            '<b><strong>' +
                            t.toolname +
                            "</strong></b><br/><span style='color:red'>value: </span>" +
                            a(t.metric_value)
                        );
                    });
                var d = d3
                    .select('#' + e)
                    .append('svg')
                    .attr('id', e + '_svg')
                    .attr('class', 'benchmarkingSVG')
                    .attr('width', n + r.left + r.right)
                    .attr('height', o + r.top + r.bottom)
                    .append('g')
                    .attr(
                        'transform',
                        'translate(' + r.left + ',' + r.top + ')'
                    );
                d.call(p),
                    d
                        .append('text')
                        .attr(
                            'transform',
                            'translate(' + n / 2 + ' ,' + (o + r.top + 80) + ')'
                        )
                        .style('text-anchor', 'middle')
                        .style('font-weight', 'bold')
                        .style('font-size', '.75vw')
                        .text('TOOLS'),
                    d
                        .append('text')
                        .attr('transform', 'rotate(-90)')
                        .attr('y', 0 - r.left)
                        .attr('x', 0 - o / 2)
                        .attr('dy', '1em')
                        .style('text-anchor', 'middle')
                        .style('font-weight', 'bold')
                        .style('font-size', '.75vw')
                        .text(i),
                    d
                        .append('g')
                        .attr('class', 'x axis')
                        .attr('transform', 'translate(0,' + o + ')')
                        .call(f)
                        .selectAll('text')
                        .style('text-anchor', 'end')
                        .attr('dx', '-.8em')
                        .attr('dy', '-.55em')
                        .attr('transform', 'rotate(-60)'),
                    d
                        .append('g')
                        .attr('class', 'y axis')
                        .call(h)
                        .append('text')
                        .attr('transform', 'rotate(-90)')
                        .attr('y', 6)
                        .attr('dy', '.71em')
                        .style('text-anchor', 'end')
                        .text('wpc_index'),
                    d
                        .selectAll('.bar')
                        .data(t)
                        .enter()
                        .append('rect')
                        .attr('class', 'bar')
                        .attr('x', function(t) {
                            return l(t.toolname);
                        })
                        .attr('width', l.bandwidth())
                        .attr('height', function(t) {
                            return o - c(0);
                        })
                        .attr('y', function(t) {
                            return c(0);
                        })
                        .on('mouseover', p.show)
                        .on('mouseout', p.hide),
                    d
                        .selectAll('rect')
                        .transition()
                        .duration(1e3)
                        .attr('y', function(t) {
                            return c(t.metric_value);
                        })
                        .attr('height', function(t) {
                            return o - c(t.metric_value);
                        })
                        .delay(function(t, e) {
                            return 10 * e;
                        });
            }
            function at(t, e, n, r, o, i, a, s) {
                let u;
                for (var l = 0; l < n.length; l++) {
                    var c = n[l];
                    if (c.metric_value < e) {
                        u = c.toolname;
                        break;
                    }
                }
                var f = d3
                        .scaleBand()
                        .range([0, i], 0.1)
                        .domain(
                            n.map(function(t) {
                                return t.toolname;
                            })
                        )
                        .padding(0.4),
                    h = d3.select('#' + t + '_svg');
                return (
                    h
                        .append('g')
                        .attr(
                            'transform',
                            'translate(' +
                                (f(u) + f.step() / 2 - f.bandwidth() + a.left) +
                                ',0)'
                        )
                        .append('line')
                        .attr('y1', a.top)
                        .attr('y2', s + a.top)
                        .attr('stroke', '#0A58A2')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '20, 5')
                        .style('opacity', 0.4),
                    h
                        .append('text')
                        .attr('id', function(e) {
                            return t + '___num_bottom_right';
                        })
                        .attr('x', (f(u) + r) / 2 + a.left)
                        .attr('y', a.top + 30)
                        .attr('text-anchor', 'middle')
                        .style('opacity', 0.4)
                        .style('font-size', '2vw')
                        .style('fill', '#0A58A2')
                        .text(o),
                    f(u)
                );
            }
            rt();
        }
    ])
);
