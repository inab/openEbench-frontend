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
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function(t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && "string" != typeof t)
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
                return n.d(e, "a", e), e;
            }),
            (n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 8))
        );
    })([
        function(t, e, n) {
            "use strict";
            function r(t) {
                var e = this;
                (this.location = i(t)),
                    (this.label = i()),
                    (this.updateLabel = function(t) {
                        var n,
                            r,
                            o = t.map(function(t) {
                                return (
                                    (n = e.location()),
                                    (r = t.location()),
                                    n
                                        .map(function(t, e) {
                                            return Math.pow(t - r[e], 2);
                                        })
                                        .reduce(function(t, e) {
                                            return t + e;
                                        }, 0)
                                );
                                var n, r;
                            });
                        e.label(
                            ((r = (n = o).reduce(function(t, e) {
                                return Math.min(t, e);
                            })),
                            n.indexOf(r))
                        );
                    });
            }
            function o(t, e) {
                var n = this;
                (this.location = i(t)),
                    (this.label = i(e)),
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
            function i(t, e) {
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
                data: i([], function(t) {
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
                                        return new r(t);
                                    }),
                                    s = [],
                                    l = 0;
                                l < n;
                                l++
                            )
                                s.push(new o(a[l % a.length].location(), l));
                            for (var c = 0; c < i; c++)
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
                k: i(void 0, function(t) {
                    return (t % 1 == 0) & (t > 0);
                }),
                iterations: i(Math.pow(10, 3), function(t) {
                    return (t % 1 == 0) & (t > 0);
                })
            };
        },
        function(t, e, n) {
            "use strict";
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
                    throw new TypeError("Require array of points as input");
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
            var r = n(3);
            "string" == typeof r && (r = [[t.i, r, ""]]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            n(5)(r, o);
            r.locals && (t.exports = r.locals);
        },
        function(t, e, n) {
            (t.exports = n(4)(!1)).push([
                t.i,
                '\n  \n  .error-line {\n    stroke:black;\n    stroke-dasharray: 2,2;\n  }\n  \n  .error-cap {\n    stroke:black;\n    stroke-width: 1px;\n  }\n  \n    div.benchmark_tooltip {\n      background-color: #fff;\n      padding: 7px;\n      text-shadow: #f5f5f5 0 1px 0;\n      font: 15px Helvetica Neue;\n      border: 4.5px solid;\n      border-color: #0A58A2;\n      border-radius: 3px;\n      opacity: 0.95;\n      position: absolute;\n      box-shadow: rgba(0, 0, 0, 0.3) 0 10px 15px;\n    }\n  \n  .benchmark_tooltip:after {\n      content: " ";\n      position: absolute;\n      top: 50%;\n      right: 100%;\n      margin-top: -10px;\n      border-width: 10px;\n      border-style: solid;\n      border-color: transparent transparent transparent transparent;\n      \n  }\n  \n   .plot-bg {\n     fill:#F8F8F8;\n     stroke: black;\n   }\n      \n   .axis path,\n   .axis line {\n       fill: none;\n       stroke: grey;\n       stroke-width: 1;\n       shape-rendering: crispEdges;\n   }\n\n   .bench_grid {\n    stroke-opacity: 0.1;\n    stroke-dasharray: 7,5;\n  }\n\n    \n    .classificators_list{\n        background-color: #0A58A2; \n        border-radius: 8px;\n        color: #fff;\n        font-size: 1vw;\n        padding-left: 25px;\n        padding-right: 25px;\n        text-align: center;\n        width: 20vw;\n    \n        }\n    \n    .classificators_list:hover {\n        background-color: #b3cde0;\n    \n    }\n\n    .benchmarkingTable_scatter td {\n        border: 2px solid black;\n        border-collapse: collapse;\n        text-align: center;\n        font-size: .7vw;\n    }\n\n    .benchmarkingTable_scatter {\n        width: 17vw; \n        border-collapse: collapse; \n        background-color: #f0f0f0;\n        border: 5px solid black; \n        float: right;\n    }\n\n    .benchmark_legend_rect {\n        cursor: pointer;\n    }\n\n    .benchmarkingChart_scatter{\n        width: 90vw;\n    }\n\n    .benchmarkingSVG{\n        width: 68vw;\n    }\n      .axis--x {\n          font-size: 12px;\n      }\n\n      .axis--y {\n        font-size: 12px;\n    }\n\n    .removal_alert {\n        padding: 10px;\n        background-color: #ffcccc;\n        color: #D10000;\n    }\n    \n    .closebtn {\n        margin-left: 15px;\n        color: #D10000;\n        font-weight: bold;\n        float: right;\n        font-size: 22px;\n        line-height: 20px;\n        cursor: pointer;\n        transition: 0.3s;\n    }\n    \n    .closebtn:hover {\n        color: white;\n    }',
                ""
            ]);
        },
        function(t, e) {
            t.exports = function(t) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var n = (function(t, e) {
                                var n = t[1] || "",
                                    r = t[3];
                                if (!r) return n;
                                if (e && "function" == typeof btoa) {
                                    var o =
                                            ((a = r),
                                            "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(a)
                                                        )
                                                    )
                                                ) +
                                                " */"),
                                        i = r.sources.map(function(t) {
                                            return (
                                                "/*# sourceURL=" +
                                                r.sourceRoot +
                                                t +
                                                " */"
                                            );
                                        });
                                    return [n]
                                        .concat(i)
                                        .concat([o])
                                        .join("\n");
                                }
                                var a;
                                return [n].join("\n");
                            })(e, t);
                            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
                        }).join("");
                    }),
                    (e.i = function(t, n) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            "number" == typeof i && (r[i] = !0);
                        }
                        for (o = 0; o < t.length; o++) {
                            var a = t[o];
                            ("number" == typeof a[0] && r[a[0]]) ||
                                (n && !a[2]
                                    ? (a[2] = n)
                                    : n &&
                                      (a[2] = "(" + a[2] + ") and (" + n + ")"),
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
                s = function(t) {
                    return document.querySelector(t);
                },
                l = (function(t) {
                    var e = {};
                    return function(t) {
                        if ("function" == typeof t) return t();
                        if (void 0 === e[t]) {
                            var n = s.call(this, t);
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
                c = null,
                u = 0,
                d = [],
                p = n(6);
            function f(t, e) {
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
            function h(t, e) {
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
            function y(t, e) {
                var n = l(t.insertInto);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                    );
                var r = d[d.length - 1];
                if ("top" === t.insertAt)
                    r
                        ? r.nextSibling
                            ? n.insertBefore(e, r.nextSibling)
                            : n.appendChild(e)
                        : n.insertBefore(e, n.firstChild),
                        d.push(e);
                else if ("bottom" === t.insertAt) n.appendChild(e);
                else {
                    if ("object" != typeof t.insertAt || !t.insertAt.before)
                        throw new Error(
                            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                        );
                    var o = l(t.insertInto + " " + t.insertAt.before);
                    n.insertBefore(e, o);
                }
            }
            function _(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = d.indexOf(t);
                e >= 0 && d.splice(e, 1);
            }
            function m(t) {
                var e = document.createElement("style");
                return (
                    void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                    g(e, t.attrs),
                    y(t, e),
                    e
                );
            }
            function g(t, e) {
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
                    var a = u++;
                    (n = c || (c = m(e))),
                        (r = w.bind(null, n, a, !1)),
                        (o = w.bind(null, n, a, !0));
                } else
                    t.sourceMap &&
                    "function" == typeof URL &&
                    "function" == typeof URL.createObjectURL &&
                    "function" == typeof URL.revokeObjectURL &&
                    "function" == typeof Blob &&
                    "function" == typeof btoa
                        ? ((n = (function(t) {
                              var e = document.createElement("link");
                              return (
                                  void 0 === t.attrs.type &&
                                      (t.attrs.type = "text/css"),
                                  (t.attrs.rel = "stylesheet"),
                                  g(e, t.attrs),
                                  y(t, e),
                                  e
                              );
                          })(e)),
                          (r = k.bind(null, n, e)),
                          (o = function() {
                              _(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = m(e)),
                          (r = A.bind(null, n)),
                          (o = function() {
                              _(n);
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
                    "undefined" != typeof DEBUG &&
                    DEBUG &&
                    "object" != typeof document
                )
                    throw new Error(
                        "The style-loader cannot be used in a non-browser environment"
                    );
                ((e = e || {}).attrs =
                    "object" == typeof e.attrs ? e.attrs : {}),
                    e.singleton ||
                        "boolean" == typeof e.singleton ||
                        (e.singleton = a()),
                    e.insertInto || (e.insertInto = "head"),
                    e.insertAt || (e.insertAt = "bottom");
                var n = h(t, e);
                return (
                    f(n, e),
                    function(t) {
                        for (var r = [], o = 0; o < n.length; o++) {
                            var a = n[o];
                            (s = i[a.id]).refs--, r.push(s);
                        }
                        t && f(h(t, e), e);
                        for (o = 0; o < r.length; o++) {
                            var s;
                            if (0 === (s = r[o]).refs) {
                                for (var l = 0; l < s.parts.length; l++)
                                    s.parts[l]();
                                delete i[s.id];
                            }
                        }
                    }
                );
            };
            var v,
                x =
                    ((v = []),
                    function(t, e) {
                        return (v[t] = e), v.filter(Boolean).join("\n");
                    });
            function w(t, e, n, r) {
                var o = n ? "" : r.css;
                if (t.styleSheet) t.styleSheet.cssText = x(e, o);
                else {
                    var i = document.createTextNode(o),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]),
                        a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
            }
            function A(t, e) {
                var n = e.css,
                    r = e.media;
                if ((r && t.setAttribute("media", r), t.styleSheet))
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n));
                }
            }
            function k(t, e, n) {
                var r = n.css,
                    o = n.sourceMap,
                    i = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || i) && (r = p(r)),
                    o &&
                        (r +=
                            "\n/*# sourceMappingURL=data:application/json;base64," +
                            btoa(
                                unescape(encodeURIComponent(JSON.stringify(o)))
                            ) +
                            " */");
                var a = new Blob([r], { type: "text/css" }),
                    s = t.href;
                (t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
            }
        },
        function(t, e) {
            t.exports = function(t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host,
                    r = n + e.pathname.replace(/\/[^\/]*$/, "/");
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
                                  0 === i.indexOf("//")
                                      ? i
                                      : 0 === i.indexOf("/")
                                      ? n + i
                                      : r + i.replace(/^\.\//, "")),
                              "url(" + JSON.stringify(o) + ")");
                    }
                );
            };
        },
        function(t, e) {
            !(function(t) {
                "use strict";
                if (!t.fetch) {
                    var e = {
                        searchParams: "URLSearchParams" in t,
                        iterable: "Symbol" in t && "iterator" in Symbol,
                        blob:
                            "FileReader" in t &&
                            "Blob" in t &&
                            (function() {
                                try {
                                    return new Blob(), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })(),
                        formData: "FormData" in t,
                        arrayBuffer: "ArrayBuffer" in t
                    };
                    if (e.arrayBuffer)
                        var n = [
                                "[object Int8Array]",
                                "[object Uint8Array]",
                                "[object Uint8ClampedArray]",
                                "[object Int16Array]",
                                "[object Uint16Array]",
                                "[object Int32Array]",
                                "[object Uint32Array]",
                                "[object Float32Array]",
                                "[object Float64Array]"
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
                    (u.prototype.append = function(t, e) {
                        (t = s(t)), (e = l(e));
                        var n = this.map[t];
                        this.map[t] = n ? n + "," + e : e;
                    }),
                        (u.prototype.delete = function(t) {
                            delete this.map[s(t)];
                        }),
                        (u.prototype.get = function(t) {
                            return (t = s(t)), this.has(t) ? this.map[t] : null;
                        }),
                        (u.prototype.has = function(t) {
                            return this.map.hasOwnProperty(s(t));
                        }),
                        (u.prototype.set = function(t, e) {
                            this.map[s(t)] = l(e);
                        }),
                        (u.prototype.forEach = function(t, e) {
                            for (var n in this.map)
                                this.map.hasOwnProperty(n) &&
                                    t.call(e, this.map[n], n, this);
                        }),
                        (u.prototype.keys = function() {
                            var t = [];
                            return (
                                this.forEach(function(e, n) {
                                    t.push(n);
                                }),
                                c(t)
                            );
                        }),
                        (u.prototype.values = function() {
                            var t = [];
                            return (
                                this.forEach(function(e) {
                                    t.push(e);
                                }),
                                c(t)
                            );
                        }),
                        (u.prototype.entries = function() {
                            var t = [];
                            return (
                                this.forEach(function(e, n) {
                                    t.push([n, e]);
                                }),
                                c(t)
                            );
                        }),
                        e.iterable &&
                            (u.prototype[Symbol.iterator] =
                                u.prototype.entries);
                    var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    (_.prototype.clone = function() {
                        return new _(this, { body: this._bodyInit });
                    }),
                        y.call(_.prototype),
                        y.call(g.prototype),
                        (g.prototype.clone = function() {
                            return new g(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new u(this.headers),
                                url: this.url
                            });
                        }),
                        (g.error = function() {
                            var t = new g(null, { status: 0, statusText: "" });
                            return (t.type = "error"), t;
                        });
                    var a = [301, 302, 303, 307, 308];
                    (g.redirect = function(t, e) {
                        if (-1 === a.indexOf(e))
                            throw new RangeError("Invalid status code");
                        return new g(null, {
                            status: e,
                            headers: { location: t }
                        });
                    }),
                        (t.Headers = u),
                        (t.Request = _),
                        (t.Response = g),
                        (t.fetch = function(t, n) {
                            return new Promise(function(r, o) {
                                var i = new _(t, n),
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
                                                    ""),
                                                (e = new u()),
                                                t
                                                    .split(/\r?\n/)
                                                    .forEach(function(t) {
                                                        var n = t.split(":"),
                                                            r = n
                                                                .shift()
                                                                .trim();
                                                        if (r) {
                                                            var o = n
                                                                .join(":")
                                                                .trim();
                                                            e.append(r, o);
                                                        }
                                                    }),
                                                e)
                                        };
                                    n.url =
                                        "responseURL" in a
                                            ? a.responseURL
                                            : n.headers.get("X-Request-URL");
                                    var o =
                                        "response" in a
                                            ? a.response
                                            : a.responseText;
                                    r(new g(o, n));
                                }),
                                    (a.onerror = function() {
                                        o(
                                            new TypeError(
                                                "Network request failed"
                                            )
                                        );
                                    }),
                                    (a.ontimeout = function() {
                                        o(
                                            new TypeError(
                                                "Network request failed"
                                            )
                                        );
                                    }),
                                    a.open(i.method, i.url, !0),
                                    "include" === i.credentials &&
                                        (a.withCredentials = !0),
                                    "responseType" in a &&
                                        e.blob &&
                                        (a.responseType = "blob"),
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
                        ("string" != typeof t && (t = String(t)),
                        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                    )
                        throw new TypeError(
                            "Invalid character in header field name"
                        );
                    return t.toLowerCase();
                }
                function l(t) {
                    return "string" != typeof t && (t = String(t)), t;
                }
                function c(t) {
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
                function u(t) {
                    (this.map = {}),
                        t instanceof u
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
                function d(t) {
                    if (t.bodyUsed)
                        return Promise.reject(new TypeError("Already read"));
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
                function f(t) {
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
                                if ("string" == typeof t) this._bodyText = t;
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
                                            "unsupported BodyInit type"
                                        );
                                    this._bodyArrayBuffer = h(t);
                                }
                            else this._bodyText = "";
                            this.headers.get("content-type") ||
                                ("string" == typeof t
                                    ? this.headers.set(
                                          "content-type",
                                          "text/plain;charset=UTF-8"
                                      )
                                    : this._bodyBlob && this._bodyBlob.type
                                    ? this.headers.set(
                                          "content-type",
                                          this._bodyBlob.type
                                      )
                                    : e.searchParams &&
                                      URLSearchParams.prototype.isPrototypeOf(
                                          t
                                      ) &&
                                      this.headers.set(
                                          "content-type",
                                          "application/x-www-form-urlencoded;charset=UTF-8"
                                      ));
                        }),
                        e.blob &&
                            ((this.blob = function() {
                                var t = d(this);
                                if (t) return t;
                                if (this._bodyBlob)
                                    return Promise.resolve(this._bodyBlob);
                                if (this._bodyArrayBuffer)
                                    return Promise.resolve(
                                        new Blob([this._bodyArrayBuffer])
                                    );
                                if (this._bodyFormData)
                                    throw new Error(
                                        "could not read FormData body as blob"
                                    );
                                return Promise.resolve(
                                    new Blob([this._bodyText])
                                );
                            }),
                            (this.arrayBuffer = function() {
                                return this._bodyArrayBuffer
                                    ? d(this) ||
                                          Promise.resolve(this._bodyArrayBuffer)
                                    : this.blob().then(f);
                            })),
                        (this.text = function() {
                            var t,
                                e,
                                n,
                                r = d(this);
                            if (r) return r;
                            if (this._bodyBlob)
                                return (
                                    (t = this._bodyBlob),
                                    (e = new FileReader()),
                                    (n = p(e)),
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
                                        return n.join("");
                                    })(this._bodyArrayBuffer)
                                );
                            if (this._bodyFormData)
                                throw new Error(
                                    "could not read FormData body as text"
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
                function _(t, e) {
                    var n,
                        r,
                        o = (e = e || {}).body;
                    if (t instanceof _) {
                        if (t.bodyUsed) throw new TypeError("Already read");
                        (this.url = t.url),
                            (this.credentials = t.credentials),
                            e.headers || (this.headers = new u(t.headers)),
                            (this.method = t.method),
                            (this.mode = t.mode),
                            o ||
                                null == t._bodyInit ||
                                ((o = t._bodyInit), (t.bodyUsed = !0));
                    } else this.url = String(t);
                    if (
                        ((this.credentials =
                            e.credentials || this.credentials || "omit"),
                        (!e.headers && this.headers) ||
                            (this.headers = new u(e.headers)),
                        (this.method =
                            ((n = e.method || this.method || "GET"),
                            (r = n.toUpperCase()),
                            i.indexOf(r) > -1 ? r : n)),
                        (this.mode = e.mode || this.mode || null),
                        (this.referrer = null),
                        ("GET" === this.method || "HEAD" === this.method) && o)
                    )
                        throw new TypeError(
                            "Body not allowed for GET or HEAD requests"
                        );
                    this._initBody(o);
                }
                function m(t) {
                    var e = new FormData();
                    return (
                        t
                            .trim()
                            .split("&")
                            .forEach(function(t) {
                                if (t) {
                                    var n = t.split("="),
                                        r = n.shift().replace(/\+/g, " "),
                                        o = n.join("=").replace(/\+/g, " ");
                                    e.append(
                                        decodeURIComponent(r),
                                        decodeURIComponent(o)
                                    );
                                }
                            }),
                        e
                    );
                }
                function g(t, e) {
                    e || (e = {}),
                        (this.type = "default"),
                        (this.status = "status" in e ? e.status : 200),
                        (this.ok = this.status >= 200 && this.status < 300),
                        (this.statusText =
                            "statusText" in e ? e.statusText : "OK"),
                        (this.headers = new u(e.headers)),
                        (this.url = e.url || ""),
                        this._initBody(t);
                }
            })("undefined" != typeof self ? self : this);
        },
        function(t, e, n) {
            "use strict";
            n.r(e);
            n(2), n(7);
            var r =
                Object.assign ||
                function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                            Object.prototype.hasOwnProperty.call(e, o) &&
                                (t[o] = e[o]);
                    return t;
                };
            function o(t, e, n) {
                var r = this,
                    o = function() {
                        if (t.length > 0) {
                            var i = t.shift();
                            i && i.apply(r, [e, o]);
                        } else n(e);
                    };
                o();
            }
            function i(t, e) {
                var n;
                try {
                    n = JSON.stringify(t);
                } catch (t) {
                    throw new Error(
                        "Network request failed. Payload is not serializable: " +
                            t.message
                    );
                }
                return r({ body: n, method: "POST" }, e, {
                    headers: r(
                        { Accept: "*/*", "Content-Type": "application/json" },
                        e.headers || []
                    )
                });
            }
            function a(t) {
                void 0 === t && (t = {});
                var e = t.constructOptions,
                    n = t.customFetch,
                    a = t.uri || "/graphql",
                    s = [],
                    l = [],
                    c = [],
                    u = [],
                    d = function(t) {
                        var d,
                            p = {},
                            f = Array.isArray(t);
                        return (function(t, e) {
                            return new Promise(function(n, r) {
                                o(e ? l.slice() : s.slice(), t, n);
                            });
                        })(
                            f
                                ? { requests: t, options: p }
                                : { request: t, options: p },
                            f
                        )
                            .then(function(t) {
                                return (
                                    e || i
                                )(t.request || t.requests, t.options);
                            })
                            .then(function(t) {
                                return (p = r({}, t)), (n || fetch)(a, p);
                            })
                            .then(function(t) {
                                return t.text().then(function(e) {
                                    try {
                                        var n = JSON.parse(e);
                                        return (t.raw = e), (t.parsed = n), t;
                                    } catch (n) {
                                        return (d = n), (t.raw = e), t;
                                    }
                                });
                            })
                            .then(function(t) {
                                return (function(t, e) {
                                    return new Promise(function(n, r) {
                                        o(e ? u.slice() : c.slice(), t, n);
                                    });
                                })({ response: t, options: p }, f);
                            })
                            .then(function(t) {
                                var e = t.response;
                                if (e.parsed) {
                                    if (!f) return r({}, e.parsed);
                                    if (Array.isArray(e.parsed))
                                        return e.parsed;
                                    !(function(t) {
                                        var e = new Error(
                                            "A batched Operation of responses for "
                                        );
                                        throw ((e.response = t), e);
                                    })(e);
                                } else
                                    !(function(t, e) {
                                        var n;
                                        throw (((n =
                                            t && t.status >= 300
                                                ? new Error(
                                                      "Network request failed with status " +
                                                          t.status +
                                                          ' - "' +
                                                          t.statusText +
                                                          '"'
                                                  )
                                                : new Error(
                                                      "Network request failed to return valid JSON"
                                                  )).response = t),
                                        (n.parseError = e),
                                        n);
                                    })(e, d);
                            });
                    };
                return (
                    (d.use = function(t) {
                        if ("function" != typeof t)
                            throw new Error("Middleware must be a function");
                        return s.push(t), d;
                    }),
                    (d.useAfter = function(t) {
                        if ("function" != typeof t)
                            throw new Error("Afterware must be a function");
                        return c.push(t), d;
                    }),
                    (d.batchUse = function(t) {
                        if ("function" != typeof t)
                            throw new Error("Middleware must be a function");
                        return l.push(t), d;
                    }),
                    (d.batchUseAfter = function(t) {
                        if ("function" != typeof t)
                            throw new Error("Afterware must be a function");
                        return u.push(t), d;
                    }),
                    d
                );
            }
            function s(t) {
                let e = t + "__none",
                    n = t + "__squares",
                    r = t + "__diagonals",
                    o = t + "__clusters";
                d3.select("#" + t)
                    .append("div")
                    .attr("id", "tooltip_container");
                let i = d3
                    .select("#" + t)
                    .append("form")
                    .append("select")
                    .attr("class", "classificators_list")
                    .attr("id", t + "_dropdown_list")
                    .on("change", function(t) {
                        let e = document.getElementById(
                                this.options[this.selectedIndex].id.split(
                                    "__"
                                )[0]
                            ),
                            n = e.getAttribute("metric_x"),
                            r = e.getAttribute("metric_y");
                        B(this.options[this.selectedIndex].id, n, r, O);
                    })
                    .append("optgroup")
                    .attr("label", "Select a classification method:");
                i
                    .append("option")
                    .attr("class", "selection_option")
                    .attr("id", e)
                    .attr("title", "Show only raw data")
                    .attr("selected", "disabled")
                    .attr("data-toggle", "list_tooltip")
                    .attr("data-container", "#tooltip_container")
                    .text("NO CLASSIFICATION"),
                    i
                        .append("option")
                        .attr("class", "selection_option")
                        .attr("id", n)
                        .attr(
                            "title",
                            "Apply square quartiles classification method (based on the 0.5 quartile of the X and Y metrics)"
                        )
                        .attr("data-toggle", "list_tooltip")
                        .attr("data-container", "#tooltip_container")
                        .text("SQUARE QUARTILES"),
                    i
                        .append("option")
                        .attr("class", "selection_option")
                        .attr("id", r)
                        .attr(
                            "title",
                            "Apply diagonal quartiles classifcation method (based on the assignment of a score to each participant proceeding from its distance to the 'optimal performance' corner)"
                        )
                        .attr("data-toggle", "list_tooltip")
                        .attr("data-container", "#tooltip_container")
                        .text("DIAGONAL QUARTILES"),
                    i
                        .append("option")
                        .attr("class", "selection_option")
                        .attr("id", o)
                        .attr(
                            "title",
                            "Apply K-Means clustering method (group the participants using the K-means clustering algorithm and sort the clusters according to the performance)"
                        )
                        .attr("data-toggle", "list_tooltip")
                        .attr("data-container", "#tooltip_container")
                        .text("K-MEANS CLUSTERING");
            }
            function l(t, e) {
                let n = [];
                return (
                    t.forEach(t => {
                        -1 ==
                            $.inArray(
                                t.toolname.replace(/[\. ()/_]/g, "-"),
                                e
                            ) && n.push(t);
                    }),
                    n
                );
            }
            var c = n(1);
            function u(t, e, n, r) {
                var o = document.getElementById(t + "_table"),
                    i = o.insertRow(-1);
                (i.insertCell(0).innerHTML = "<b>TOOL</b>"),
                    (i.insertCell(1).innerHTML = "<b>QUARTILE</b>"),
                    n.forEach(function(n) {
                        var i = o.insertRow(-1);
                        if (
                            ((i.insertCell(0).innerHTML = n.toolname),
                            -1 ==
                                $.inArray(
                                    n.toolname.replace(/[\. ()/_]/g, "-"),
                                    r
                                ))
                        ) {
                            let t = e.find(
                                t =>
                                    t.toolname.replace(/[\. ()/_]/g, "-") ===
                                    n.toolname.replace(/[\. ()/_]/g, "-")
                            );
                            i.insertCell(1).innerHTML = t.quartile;
                        } else i.insertCell(1).innerHTML = "--";
                        var a = i.cells[0];
                        (a.id =
                            t +
                            "___cell" +
                            n.toolname.replace(/[\. ()/-]/g, "_")),
                            a.addEventListener("click", function(e) {
                                let n = this.id,
                                    r =
                                        t +
                                        "___leg_rect" +
                                        n.split("___cell")[1];
                                document
                                    .getElementById(r)
                                    .dispatchEvent(new Event("click"));
                            }),
                            a.addEventListener("mouseover", function(t) {
                                let e = this.id;
                                d3.select(this).style("cursor", "pointer");
                                e.split("___cell")[1];
                                1 == d3.select(this).style("opacity") ||
                                0.5 == d3.select(this).style("opacity")
                                    ? ($(this).css("opacity", 0.7),
                                      $(this)
                                          .closest("tr")
                                          .css("opacity", 0.7))
                                    : ($(this).css("opacity", 1),
                                      $(this)
                                          .closest("tr")
                                          .css("opacity", 1));
                            }),
                            a.addEventListener("mouseout", function(e) {
                                let n = this.id;
                                d3.select(this).style("cursor", "default");
                                let r =
                                    t + "___leg_rect" + n.split("___cell")[1];
                                0.2 == d3.select("#" + r).style("opacity") ||
                                0.5 == d3.select("#" + r).style("opacity")
                                    ? ($(this).css("opacity", 0.5),
                                      $(this)
                                          .closest("tr")
                                          .css("opacity", 0.5))
                                    : ($(this).css("opacity", 1),
                                      $(this)
                                          .closest("tr")
                                          .css("opacity", 1));
                            });
                    });
            }
            function d(t, e, n) {
                var r = Object.keys(e);
                $("#" + t + "_table td").each(function() {
                    var t = $(this).html();
                    1 == t
                        ? $(this).css({ background: "#238b45" })
                        : 2 == t
                        ? $(this).css({ background: "#74c476" })
                        : 3 == t
                        ? $(this).css({ background: "#bae4b3" })
                        : 4 == t
                        ? $(this).css({ background: "#edf8e9" })
                        : "--" == t
                        ? $(this).css({ background: "#f0f0f5" })
                        : $.inArray(t, r) > -1 &&
                          -1 == $.inArray(t.replace(/[\. ()/_]/g, "-"), n)
                        ? $(this).css({
                              background:
                                  "linear-gradient(to left, white 92%, " +
                                  e[t] +
                                  " 8%)"
                          })
                        : $.inArray(t.replace(/[\. ()/_]/g, "-"), n) > -1
                        ? ($(this).css({
                              background:
                                  "linear-gradient(to left, white 92%, " +
                                  e[t] +
                                  " 8%)",
                              opacity: 0.5
                          }),
                          $(this)
                              .closest("tr")
                              .css("opacity", 0.5))
                        : $(this).css({ background: "#FFFFFF" });
                });
            }
            function p(t, e, n, r, o, i, a, s, c, p) {
                let f = l(t, i),
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
                    _ = d3.quantile(h, 0.5),
                    m = d3.quantile(y, 0.5),
                    g = n.domain(),
                    b = r.domain(),
                    v = d3.format(",");
                e
                    .append("line")
                    .attr("x1", n(_))
                    .attr("y1", r(b[0]))
                    .attr("x2", n(_))
                    .attr("y2", r(b[1]))
                    .attr("id", function(t) {
                        return s + "___x_quartile";
                    })
                    .attr("stroke", "#0A58A2")
                    .attr("stroke-width", 2)
                    .style("stroke-dasharray", "20, 5")
                    .style("opacity", 0.4)
                    .on("mouseover", function(t) {
                        o
                            .transition()
                            .duration(100)
                            .style("opacity", 0.9),
                            o
                                .html("X quartile = " + v(_))
                                .style("left", d3.event.pageX + "px")
                                .style("top", d3.event.pageY + "px");
                    })
                    .on("mouseout", function(t) {
                        o.transition()
                            .duration(1e3)
                            .style("opacity", 0);
                    }),
                    e
                        .append("line")
                        .attr("x1", n(g[0]))
                        .attr("y1", r(m))
                        .attr("x2", n(g[1]))
                        .attr("y2", r(m))
                        .attr("id", function(t) {
                            return s + "___y_quartile";
                        })
                        .attr("stroke", "#0A58A2")
                        .attr("stroke-width", 2)
                        .style("stroke-dasharray", "20, 5")
                        .style("opacity", 0.4)
                        .on("mouseover", function(t) {
                            o
                                .transition()
                                .duration(100)
                                .style("opacity", 0.9),
                                o
                                    .html("Y quartile = " + v(m))
                                    .style("left", d3.event.pageX + "px")
                                    .style("top", d3.event.pageY + "px");
                        })
                        .on("mouseout", function(t) {
                            o.transition()
                                .duration(1500)
                                .style("opacity", 0);
                        }),
                    1 == c &&
                        (function(t, e, n, r, o, i, a, s) {
                            "bottom-right" == t
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
                                : "top-right" == t &&
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
                            u(o, e, a, s), d(o, i, s);
                        })(a, f, _, m, s, p, t, i);
            }
            function f(t, e, n, r, o, i, a, s, c, p, f, y) {
                let _ = l(t, s),
                    m = _.map(t => t.x),
                    g = _.map(t => t.y),
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
                    })(m, g),
                    [v, x] = [b[0], b[1]],
                    w = Math.max.apply(null, m),
                    A = Math.max.apply(null, g),
                    k = [],
                    E = {};
                for (let t = 0; t < v.length; t++)
                    "bottom-right" == c
                        ? (k.push(v[t] + (1 - x[t])),
                          (E[v[t] + (1 - x[t])] = [m[t], g[t]]),
                          (_[t].score = v[t] + (1 - x[t])))
                        : "top-right" == c &&
                          (k.push(v[t] + x[t]),
                          (E[v[t] + x[t]] = [m[t], g[t]]),
                          (_[t].score = v[t] + x[t]));
                k.sort(function(t, e) {
                    return e - t;
                });
                let T = d3.quantile(k, 0.25),
                    q = d3.quantile(k, 0.5),
                    O = d3.quantile(k, 0.75),
                    M = [
                        h(k, E, T, c, w, A, e, n, r),
                        h(k, E, q, c, w, A, e, n, r),
                        h(k, E, O, c, w, A, e, n, r)
                    ],
                    $ = 0;
                M.forEach(t => {
                    let [o, s] = [t[0], t[1]];
                    e
                        .append("line")
                        .attr("clip-path", "url(#clip)")
                        .attr("x1", n(o[0]))
                        .attr("y1", r(s[0]))
                        .attr("x2", n(o[1]))
                        .attr("y2", r(s[1]))
                        .attr("id", function(t) {
                            return p + "___diag_quartile_" + $;
                        })
                        .attr("stroke", "#0A58A2")
                        .attr("stroke-width", 2)
                        .style("stroke-dasharray", "20, 5")
                        .style("opacity", 0.4),
                        e
                            .append("clipPath")
                            .attr("id", "clip")
                            .append("rect")
                            .attr("width", i)
                            .attr("height", a),
                        ($ += 1);
                }),
                    1 == f &&
                        (function(t, e, n, r, o, i, a, s, l, c, p) {
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
                                var e,
                                    n = (e = t).reduce(
                                        function(t, n) {
                                            return [
                                                t[0] + n[0] / e.length,
                                                t[1] + n[1] / e.length
                                            ];
                                        },
                                        [0, 0]
                                    );
                                i
                                    .append("text")
                                    .attr("class", function(t) {
                                        return o + "___diag_num";
                                    })
                                    .attr("x", a(n[0]))
                                    .attr("y", s(n[1]))
                                    .style("opacity", 0.4)
                                    .style("font-size", "2vw")
                                    .style("fill", "#0A58A2")
                                    .text(h),
                                    h++;
                            }),
                                u(o, t, c, p),
                                d(o, l, p);
                        })(_, T, q, O, p, e, n, r, y, t, s);
            }
            function h(t, e, n, r, o, i, a, s, l) {
                let c;
                for (let r = 0; r < t.length; r++)
                    if (t[r] <= n) {
                        c = [
                            [e[t[r - 1]][0], e[t[r - 1]][1]],
                            [e[t[r]][0], e[t[r]][1]]
                        ];
                        break;
                    }
                let u,
                    d,
                    p = [(c[0][0] + c[1][0]) / 2, (c[0][1] + c[1][1]) / 2];
                return (
                    "bottom-right" == r
                        ? ((u = [p[0] - 2 * o, p[0] + 2 * o]),
                          (d = [p[1] - 2 * i, p[1] + 2 * i]))
                        : "top-right" == r &&
                          ((u = [p[0] + 2 * o, p[0] - 2 * o]),
                          (d = [p[1] - 2 * i, p[1] + 2 * i])),
                    [u, d]
                );
            }
            var y = n(0),
                _ = function(t, e, n) {
                    return (
                        (e[0] - t[0]) * (n[1] - t[1]) -
                        (e[1] - t[1]) * (n[0] - t[0])
                    );
                };
            function m(t, e) {
                return t[0] - e[0] || t[1] - e[1];
            }
            function g(t) {
                for (var e = t.length, n = [0, 1], r = 2, o = 2; o < e; ++o) {
                    for (; r > 1 && _(t[n[r - 2]], t[n[r - 1]], t[o]) <= 0; )
                        --r;
                    n[r++] = o;
                }
                return n.slice(0, r);
            }
            var b = function(t) {
                if ((n = t.length) < 3) return null;
                var e,
                    n,
                    r = new Array(n),
                    o = new Array(n);
                for (e = 0; e < n; ++e) r[e] = [+t[e][0], +t[e][1], e];
                for (r.sort(m), e = 0; e < n; ++e) o[e] = [r[e][0], -r[e][1]];
                var i = g(r),
                    a = g(o),
                    s = a[0] === i[0],
                    l = a[a.length - 1] === i[i.length - 1],
                    c = [];
                for (e = i.length - 1; e >= 0; --e) c.push(t[r[i[e]][2]]);
                for (e = +s; e < a.length - l; ++e) c.push(t[r[a[e]][2]]);
                return c;
            };
            function v(t, e, n, r, o, i, a, s, c, p, f, h) {
                let _ = l(t, s),
                    m = _.map(t => t.x),
                    g = _.map(t => t.y),
                    v = [];
                for (let t = 0; t < m.length; t++) v.push([m[t], g[t]]);
                y.k(4), y.iterations(500), y.data(v);
                let x = y.clusters(),
                    w = [],
                    A = [];
                x.forEach(function(t) {
                    w.push(t.centroid[0]), A.push(t.centroid[1]);
                });
                let [k, E] = (function(t, e) {
                        let n = Math.max.apply(null, t),
                            r = Math.max.apply(null, e),
                            o = t.map(function(t) {
                                return t / n;
                            }),
                            i = e.map(function(t) {
                                return t / r;
                            });
                        return [o, i];
                    })(w, A),
                    T = [];
                if ("top-right" == c)
                    for (let t = 0; t < k.length; t++) {
                        let e = k[t] + E[t];
                        T.push(e), (x[t].score = e);
                    }
                else if ("bottom-right" == c)
                    for (let t = 0; t < k.length; t++) {
                        let e = k[t] + (1 - E[t]);
                        T.push(e), (x[t].score = e);
                    }
                let q =
                    ((O = "score"),
                    x.sort(function(t, e) {
                        var n = t[O],
                            r = e[O];
                        return -1 * (n < r ? -1 : n > r ? 1 : 0);
                    }));
                var O;
                (q = (function(t, e, n, r, o) {
                    let i = 1;
                    var a = [];
                    return (
                        o.forEach(function(o) {
                            var s = [];
                            (o.cluster = i),
                                t
                                    .append("text")
                                    .attr("class", function(t) {
                                        return e + "___cluster_num";
                                    })
                                    .attr("x", n(o.centroid[0]))
                                    .attr("y", r(o.centroid[1]))
                                    .style("opacity", 0.9)
                                    .style("font-size", "2vw")
                                    .style("fill", "#0A58A2")
                                    .text(i),
                                o.points.forEach(function(i) {
                                    s.push([i[0], i[1]]),
                                        t
                                            .append("line")
                                            .attr("x1", n(o.centroid[0]))
                                            .attr("y1", r(o.centroid[1]))
                                            .attr("x2", n(i[0]))
                                            .attr("y2", r(i[1]))
                                            .attr("class", function(t) {
                                                return e + "___clust_lines";
                                            })
                                            .attr("stroke", "#0A58A2")
                                            .attr("stroke-width", 2)
                                            .style("stroke-dasharray", "20, 5")
                                            .style("opacity", 0.4);
                                });
                            var l = b(s);
                            a.push({ points: l }), i++;
                        }),
                        t
                            .selectAll("polygon")
                            .data(a)
                            .enter()
                            .append("polygon")
                            .attr("points", function(t) {
                                if (null != t.points)
                                    return t.points
                                        .map(function(t) {
                                            return [n(t[0]), r(t[1])].join(",");
                                        })
                                        .join(" ");
                            })
                            .attr("class", function(t) {
                                return e + "___clust_polygons";
                            })
                            .attr("fill", "#0A58A2")
                            .style("opacity", 0.1),
                        o
                    );
                })(e, p, n, r, q)),
                    1 == f &&
                        (function(t, e, n, r, o, i) {
                            t.forEach(function(t) {
                                let n = [t.x, t.y];
                                e.forEach(function(e) {
                                    var r, o, i;
                                    1 ==
                                        ((r = e.points),
                                        (o = n),
                                        (i = JSON.stringify(o)),
                                        r.some(function(t) {
                                            return JSON.stringify(t) === i;
                                        })) && (t.quartile = e.cluster);
                                });
                            }),
                                u(n, t, o, i),
                                d(n, r, i);
                        })(_, q, p, h, t, s);
            }
            function x(t, e, n, r, o, i, a, s, l, c, u, d) {
                let h;
                null != document.getElementById(l + "_table") &&
                    ((document.getElementById(l + "_table").innerHTML = ""),
                    (h = !0)),
                    (function(t, e, n, r, o) {
                        e.append("svg:defs")
                            .append("svg:marker")
                            .attr("id", "opt_triangle")
                            .attr("class", function(e) {
                                return t + "___better_annotation";
                            })
                            .attr("refX", 6)
                            .attr("refY", 6)
                            .attr("markerWidth", 30)
                            .attr("markerHeight", 30)
                            .attr("markerUnits", "userSpaceOnUse")
                            .attr("orient", "auto")
                            .append("path")
                            .attr("d", "M 0 0 12 6 0 12 3 6")
                            .style("fill", "black")
                            .style("opacity", 0.7);
                        let i,
                            a,
                            s,
                            l,
                            c,
                            u = n.domain(),
                            d = r.domain();
                        "bottom-right" == o
                            ? ((i = u[1] - 0.05 * (u[1] - u[0])),
                              (a = d[1] - 0.9 * (d[1] - d[0])),
                              (s = u[1] - 0.009 * (u[1] - u[0])),
                              (l = d[1] - 0.97 * (d[1] - d[0])),
                              (c = 0))
                            : "top-right" == o &&
                              ((i = u[1] - 0.05 * (u[1] - u[0])),
                              (a = d[1] - 0.1 * (d[1] - d[0])),
                              (s = u[1] - 0.009 * (u[1] - u[0])),
                              (l = d[1] - 0.03 * (d[1] - d[0])),
                              (c = 1));
                        e.append("line")
                            .attr("class", function(e) {
                                return t + "___better_annotation";
                            })
                            .attr("x1", n(i))
                            .attr("y1", r(a))
                            .attr("x2", n(s))
                            .attr("y2", r(l))
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#opt_triangle)")
                            .style("opacity", 0.4);
                        e.append("text")
                            .attr("class", function(e) {
                                return t + "___better_annotation";
                            })
                            .attr("x", n(u[1]))
                            .attr("y", r(d[c]))
                            .style("opacity", 0.4)
                            .style("font-size", ".7vw")
                            .text("better");
                    })(l, e, n, r, d),
                    c == l + "__squares"
                        ? (w(t, e, n, r, s, l, d),
                          p(t, e, n, r, o, s, d, l, h, u),
                          (function(t, e, n, r, o) {
                              let i,
                                  a,
                                  s,
                                  l,
                                  c = e.domain(),
                                  u = n.domain();
                              "bottom-right" == r
                                  ? ((i = "1"), (a = "2"), (s = "3"), (l = "4"))
                                  : "top-right" == r &&
                                    ((i = "3"),
                                    (a = "4"),
                                    (s = "1"),
                                    (l = "2")),
                                  t
                                      .append("text")
                                      .attr("id", function(t) {
                                          return o + "___num_bottom_right";
                                      })
                                      .attr("x", e(c[1] - 0.05 * (c[1] - c[0])))
                                      .attr("y", n(u[1] - 0.97 * (u[1] - u[0])))
                                      .style("opacity", 0.4)
                                      .style("font-size", "2vw")
                                      .style("fill", "#0A58A2")
                                      .text(i),
                                  t
                                      .append("text")
                                      .attr("id", function(t) {
                                          return o + "___num_bottom_left";
                                      })
                                      .attr("x", e(c[1] - 0.98 * (c[1] - c[0])))
                                      .attr("y", n(u[1] - 0.97 * (u[1] - u[0])))
                                      .style("opacity", 0.4)
                                      .style("font-size", "2vw")
                                      .style("fill", "#0A58A2")
                                      .text(a),
                                  t
                                      .append("text")
                                      .attr("id", function(t) {
                                          return o + "___num_top_right";
                                      })
                                      .attr("x", e(c[1] - 0.05 * (c[1] - c[0])))
                                      .attr("y", n(u[1] - 0.1 * (u[1] - u[0])))
                                      .style("opacity", 0.4)
                                      .style("font-size", "2vw")
                                      .style("fill", "#0A58A2")
                                      .text(s),
                                  t
                                      .append("text")
                                      .attr("id", function(t) {
                                          return o + "___num_top_left";
                                      })
                                      .attr("x", e(c[1] - 0.98 * (c[1] - c[0])))
                                      .attr("y", n(u[1] - 0.1 * (u[1] - u[0])))
                                      .style("opacity", 0.4)
                                      .style("font-size", "2vw")
                                      .style("fill", "#0A58A2")
                                      .text(l);
                          })(e, n, r, d, l))
                        : c == l + "__diagonals"
                        ? (w(t, e, n, r, s, l, d),
                          f(t, e, n, r, 0, i, a, s, d, l, h, u))
                        : c == l + "__clusters"
                        ? (w(t, e, n, r, s, l, d),
                          v(t, e, n, r, 0, 0, 0, s, d, l, h, u))
                        : w(t, e, n, r, s, l, d);
            }
            function w(t, e, n, r, o, i, a) {
                const s = [];
                let u;
                l(t, o).forEach(function(t) {
                    s.push([t.x, t.y]);
                });
                let d = n.domain(),
                    p = r.domain();
                "bottom-right" == a
                    ? ((u = c.getParetoFrontier(s, {
                          optimize: "bottomRight"
                      })),
                      u.unshift([u[0][0], p[1]]),
                      u.push([d[0], u[u.length - 1][1]]))
                    : "top-right" == a &&
                      ((u = c.getParetoFrontier(s, { optimize: "topRight" })),
                      u.unshift([u[0][0], p[0]]),
                      u.push([d[0], u[u.length - 1][1]]));
                for (var f = 0; f < u.length - 1; f++)
                    e.append("line")
                        .attr("clip-path", "url(#clip)")
                        .attr("x1", n(u[f][0]))
                        .attr("y1", r(u[f][1]))
                        .attr("x2", n(u[f + 1][0]))
                        .attr("y2", r(u[f + 1][1]))
                        .attr("id", function(t) {
                            return i + "___pareto";
                        })
                        .attr("stroke", "grey")
                        .attr("stroke-width", 2)
                        .style("stroke-dasharray", "20, 5")
                        .style("opacity", 0.4);
            }
            function A(t, e, n, r, o, i, a, s, l, c, u, d, p) {
                let f = t.split("___")[1];
                if (
                    (n.selectAll("#" + c + "___x_quartile").remove(),
                    n.selectAll("#" + c + "___y_quartile").remove(),
                    n.selectAll("#" + c + "___diag_quartile_0").remove(),
                    n.selectAll("#" + c + "___diag_quartile_1").remove(),
                    n.selectAll("#" + c + "___diag_quartile_2").remove(),
                    n.selectAll("#" + c + "___num_bottom_right").remove(),
                    n.selectAll("#" + c + "___num_top_right").remove(),
                    n.selectAll("#" + c + "___num_bottom_left").remove(),
                    n.selectAll("#" + c + "___num_top_left").remove(),
                    n.selectAll("#" + c + "___pareto").remove(),
                    n.selectAll("." + c + "___diag_num").remove(),
                    n.selectAll("." + c + "___cluster_num").remove(),
                    n.selectAll("." + c + "___clust_lines").remove(),
                    n.selectAll("." + c + "___clust_polygons").remove(),
                    n.selectAll("." + c + "___better_annotation").remove(),
                    0 == d3.select("#" + t).style("opacity"))
                ) {
                    d3.select("#" + t).style("opacity", 1),
                        d3.select("#" + c + "___top" + f).style("opacity", 1),
                        d3
                            .select("#" + c + "___bottom" + f)
                            .style("opacity", 1),
                        d3.select("#" + c + "___line" + f).style("opacity", 1),
                        d3.select("#" + c + "___lineX" + f).style("opacity", 1),
                        d3.select("#" + c + "___right" + f).style("opacity", 1),
                        d3.select("#" + c + "___left" + f).style("opacity", 1);
                    let h = $.inArray(f.replace(/_/g, "-"), l);
                    l.splice(h, 1),
                        x(e, n, r, o, i, a, s, l, c, u, p, O[c]),
                        d3.select(d).style("opacity", 1),
                        d3.select("text#" + c + "___" + f).style("opacity", 1);
                } else
                    d3.select("#" + t).style("opacity", 0),
                        d3.select("#" + c + "___top" + f).style("opacity", 0),
                        d3
                            .select("#" + c + "___bottom" + f)
                            .style("opacity", 0),
                        d3.select("#" + c + "___line" + f).style("opacity", 0),
                        d3.select("#" + c + "___lineX" + f).style("opacity", 0),
                        d3.select("#" + c + "___right" + f).style("opacity", 0),
                        d3.select("#" + c + "___left" + f).style("opacity", 0),
                        l.push(f.replace(/_/g, "-")),
                        x(e, n, r, o, i, a, s, l, c, u, p, O[c]),
                        d3.select(d).style("opacity", 0.2),
                        d3
                            .select("text#" + c + "___" + f)
                            .style("opacity", 0.2);
            }
            function k(t, e, n, r, o, i, a) {
                let s = 20,
                    l = 40,
                    c = (function(t) {
                        if (t.length % 5 == 0)
                            return 90 + 20 * Math.trunc(t.length / 5);
                        if (t.lenght % 5 != 0)
                            return 90 + 20 * (Math.trunc(t.length / 5) + 1);
                    })(t),
                    u = 60,
                    d = Math.round(0.6818 * $(window).width()) - u - l,
                    p = Math.round(0.5787037 * $(window).height()) - s - c,
                    f = d3.min(t, function(t) {
                        return t.x;
                    }),
                    h = d3.max(t, function(t) {
                        return t.x;
                    });
                var y = E(t, "x") / (h - f);
                let _ = d3
                        .scaleLinear()
                        .range([0, d])
                        .domain([f - y * (h - f), h + y * (h - f)])
                        .nice(),
                    m = d3.min(t, function(t) {
                        return t.y;
                    }),
                    g = d3.max(t, function(t) {
                        return t.y;
                    });
                y = E(t, "y") / (g - m);
                let b = d3
                        .scaleLinear()
                        .range([p, 0])
                        .domain([m - y * (g - m), g + y * (g - m)])
                        .nice(),
                    v = d3.axisBottom(_).ticks(12),
                    w = d3.axisLeft(b).ticks((12 * p) / d),
                    k =
                        (d3
                            .line()
                            .x(function(t) {
                                return _(t.x);
                            })
                            .y(function(t) {
                                return b(t.y);
                            }),
                        d3
                            .select("#" + e)
                            .append("div")
                            .attr("class", "benchmark_tooltip")
                            .style("opacity", 0)),
                    T = d3
                        .select("#" + e)
                        .append("svg")
                        .attr("class", "benchmarkingSVG")
                        .attr(
                            "viewBox",
                            "0 0 " + (d + u + l) + " " + (p + s + c)
                        )
                        .attr("preserveAspectRatio", "xMinYMin meet")
                        .attr("id", "svg_" + e)
                        .attr("width", d + u + l)
                        .attr("height", p + s + c)
                        .append("g")
                        .attr("transform", "translate(" + u + "," + s + ")");
                T.append("g")
                    .append("rect")
                    .attr("width", d)
                    .attr("height", p)
                    .attr("class", "plot-bg"),
                    T.append("g")
                        .attr("class", "axis axis--x")
                        .attr("transform", "translate(0," + p + ")")
                        .call(v),
                    T.append("g")
                        .attr("class", "axis axis--y")
                        .call(w),
                    T.append("text")
                        .attr(
                            "transform",
                            "translate(" +
                                d / 2 +
                                " ," +
                                (p +
                                    s +
                                    Math.round(0.0347 * $(window).height())) +
                                ")"
                        )
                        .style("text-anchor", "middle")
                        .style("font-weight", "bold")
                        .style("font-size", ".75vw")
                        .text(i[r]),
                    T.append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", 0 - u)
                        .attr("x", 0 - p / 2)
                        .attr("dy", "1em")
                        .style("text-anchor", "middle")
                        .style("font-weight", "bold")
                        .style("font-size", ".75vw")
                        .text(i[o]),
                    T.append("line")
                        .attr("x1", 0)
                        .attr(
                            "y1",
                            p + s + Math.round(0.0347 * $(window).height())
                        )
                        .attr("x2", Math.round(0.02083 * $(window).width()))
                        .attr(
                            "y2",
                            p + s + Math.round(0.0347 * $(window).height())
                        )
                        .attr("stroke", "grey")
                        .attr("stroke-width", 2)
                        .style("stroke-dasharray", "15, 5")
                        .style("opacity", 0.7),
                    T.append("text")
                        .attr(
                            "transform",
                            "translate(" +
                                Math.round(0.05208 * $(window).width()) +
                                " ," +
                                (p +
                                    s +
                                    Math.round(0.0347 * $(window).height()) +
                                    5) +
                                ")"
                        )
                        .style("text-anchor", "middle")
                        .style("font-size", ".75vw")
                        .text("Pareto frontier");
                var q = d3
                        .axisBottom()
                        .ticks(12)
                        .tickFormat("")
                        .tickSize(p)
                        .scale(_),
                    O = d3
                        .axisLeft()
                        .ticks((12 * p) / d)
                        .tickFormat("")
                        .tickSize(-d)
                        .scale(b);
                T.append("g")
                    .attr("class", "bench_grid")
                    .call(q),
                    T.append("g")
                        .attr("class", "bench_grid")
                        .call(O);
                let M = [],
                    S = d3.scaleOrdinal(
                        d3.schemeSet1
                            .concat(d3.schemeSet3)
                            .concat(d3.schemeSet2)
                    );
                var B = {};
                t.forEach(function(t) {
                    B[t.toolname] = S(t.toolname);
                }),
                    (function(t, e, n, r, o, i, a, s, l, c, u) {
                        t
                            .append("g")
                            .selectAll("line")
                            .data(e)
                            .enter()
                            .append("line")
                            .attr("class", "error-line")
                            .attr("id", function(t) {
                                return (
                                    s +
                                    "___line" +
                                    t.toolname.replace(/[\. ()/-]/g, "_")
                                );
                            })
                            .attr("x1", function(t) {
                                return n(t.x);
                            })
                            .attr("y1", function(t) {
                                return r(t.y + t.e_y);
                            })
                            .attr("x2", function(t) {
                                return n(t.x);
                            })
                            .attr("y2", function(t) {
                                return r(t.y - t.e_y);
                            }),
                            t
                                .append("g")
                                .selectAll("line")
                                .data(e)
                                .enter()
                                .append("line")
                                .attr("class", "error-line")
                                .attr("id", function(t) {
                                    return (
                                        s +
                                        "___lineX" +
                                        t.toolname.replace(/[\. ()/-]/g, "_")
                                    );
                                })
                                .attr("x1", function(t) {
                                    return n(t.x - t.e_x);
                                })
                                .attr("y1", function(t) {
                                    return r(t.y);
                                })
                                .attr("x2", function(t) {
                                    return n(t.x + t.e_x);
                                })
                                .attr("y2", function(t) {
                                    return r(t.y);
                                }),
                            t
                                .append("g")
                                .selectAll("line")
                                .data(e)
                                .enter()
                                .append("line")
                                .attr("id", function(t) {
                                    return (
                                        s +
                                        "___top" +
                                        t.toolname.replace(/[\. ()/-]/g, "_")
                                    );
                                })
                                .attr("class", "error-cap")
                                .attr("x1", function(t) {
                                    return n(t.x) - 4;
                                })
                                .attr("y1", function(t) {
                                    return r(t.y + t.e_y);
                                })
                                .attr("x2", function(t) {
                                    return n(t.x) + 4;
                                })
                                .attr("y2", function(t) {
                                    return r(t.y + t.e_y);
                                }),
                            t
                                .append("g")
                                .selectAll("line")
                                .data(e)
                                .enter()
                                .append("line")
                                .attr("id", function(t) {
                                    return (
                                        s +
                                        "___bottom" +
                                        t.toolname.replace(/[\. ()/-]/g, "_")
                                    );
                                })
                                .attr("class", "error-cap")
                                .attr("x1", function(t) {
                                    return n(t.x) - 4;
                                })
                                .attr("y1", function(t) {
                                    return r(t.y - t.e_y);
                                })
                                .attr("x2", function(t) {
                                    return n(t.x) + 4;
                                })
                                .attr("y2", function(t) {
                                    return r(t.y - t.e_y);
                                }),
                            t
                                .append("g")
                                .selectAll("line")
                                .data(e)
                                .enter()
                                .append("line")
                                .attr("class", "error-cap")
                                .attr("id", function(t) {
                                    return (
                                        s +
                                        "___right" +
                                        t.toolname.replace(/[\. ()/-]/g, "_")
                                    );
                                })
                                .attr("x1", function(t) {
                                    return n(t.x + t.e_x);
                                })
                                .attr("y1", function(t) {
                                    return r(t.y) - 4;
                                })
                                .attr("x2", function(t) {
                                    return n(t.x + t.e_x);
                                })
                                .attr("y2", function(t) {
                                    return r(t.y) + 4;
                                }),
                            t
                                .append("g")
                                .selectAll("line")
                                .data(e)
                                .enter()
                                .append("line")
                                .attr("class", "error-cap")
                                .attr("id", function(t) {
                                    return (
                                        s +
                                        "___left" +
                                        t.toolname.replace(/[\. ()/-]/g, "_")
                                    );
                                })
                                .attr("x1", function(t) {
                                    return n(t.x - t.e_x);
                                })
                                .attr("y1", function(t) {
                                    return r(t.y) - 4;
                                })
                                .attr("x2", function(t) {
                                    return n(t.x - t.e_x);
                                })
                                .attr("y2", function(t) {
                                    return r(t.y) + 4;
                                });
                        let d = d3.symbol(),
                            p = d3.format(","),
                            f = d3.format(".4f");
                        t.selectAll(".dots")
                            .data(e)
                            .enter()
                            .append("path")
                            .attr("class", "benchmark_path")
                            .attr(
                                "d",
                                d.type(function() {
                                    return d3.symbolSquare;
                                })
                            )
                            .attr("id", function(t) {
                                return (
                                    s +
                                    "___" +
                                    t.toolname.replace(/[\. ()/-]/g, "_")
                                );
                            })
                            .attr("class", "line")
                            .attr("transform", function(t) {
                                return (
                                    "translate(" + n(t.x) + "," + r(t.y) + ")"
                                );
                            })
                            .attr("r", 6)
                            .style("fill", function(t) {
                                return a(i(t));
                            })
                            .on("mouseover", function(t) {
                                let e =
                                    s +
                                    "___" +
                                    t.toolname.replace(/[\. ()/-]/g, "_");
                                1 == d3.select("#" + e).style("opacity") &&
                                    (o
                                        .transition()
                                        .duration(100)
                                        .style("opacity", 0.9),
                                    o
                                        .html(
                                            "<b>" +
                                                t.toolname +
                                                "</b><br/>" +
                                                u[l] +
                                                ": " +
                                                p(t.x) +
                                                "<br/>" +
                                                u[c] +
                                                ": " +
                                                f(t.y)
                                        )
                                        .style("left", d3.event.pageX + "px")
                                        .style("top", d3.event.pageY + "px"));
                            })
                            .on("mouseout", function(t) {
                                o.transition()
                                    .duration(1500)
                                    .style("opacity", 0);
                            });
                    })(
                        T,
                        t,
                        _,
                        b,
                        k,
                        function(t) {
                            return t.toolname;
                        },
                        S,
                        e,
                        r,
                        o,
                        i
                    ),
                    (function(t, e, n, r, o, i, a, s, l, c, u, d, p) {
                        let f = e
                            .selectAll(".legend")
                            .data(c)
                            .enter()
                            .append("g")
                            .attr("class", "legend")
                            .attr("transform", function(t, e) {
                                return (
                                    "translate(" +
                                    (-i +
                                        (e % 5) *
                                            Math.round(
                                                0.113636 * $(window).width()
                                            )) +
                                    "," +
                                    (a +
                                        Math.round(
                                            0.0862962 * $(window).height()
                                        ) +
                                        Math.floor(e / 5) *
                                            Math.round(
                                                0.0231481 * $(window).height()
                                            )) +
                                    ")"
                                );
                            });
                        f
                            .append("rect")
                            .attr(
                                "x",
                                i + Math.round(0.010227 * $(window).width())
                            )
                            .attr(
                                "width",
                                Math.round(0.010227 * $(window).width())
                            )
                            .attr(
                                "height",
                                Math.round(0.020833 * $(window).height())
                            )
                            .attr("id", function(t) {
                                return (
                                    u +
                                    "___leg_rect" +
                                    t.replace(/[\. ()/-]/g, "_")
                                );
                            })
                            .attr("class", "benchmark_legend_rect")
                            .style("fill", l)
                            .on("click", function(l) {
                                let c = d3.select(
                                    "text#" +
                                        u +
                                        "___" +
                                        l.replace(/[\. ()/-]/g, "_")
                                )._groups[0][0].id;
                                if (t.length - s.length - 1 >= 4) {
                                    A(c, t, e, n, r, o, i, a, s, u, d, this, p);
                                } else if (
                                    t.length - s.length - 1 < 4 &&
                                    0 == d3.select("#" + c).style("opacity")
                                ) {
                                    A(c, t, e, n, r, o, i, a, s, u, d, this, p);
                                } else {
                                    $(".removal_alert").remove();
                                    var f = $(
                                        '<div class="removal_alert">                                  <span class="closebtn" onclick="(this.parentNode.remove());">&times;</span>                                  At least four participants are required for the benchmark!!                                </div>'
                                    );
                                    $("#" + u).append(f),
                                        setTimeout(function() {
                                            $(".removal_alert").length > 0 &&
                                                $(".removal_alert").remove();
                                        }, 5e3);
                                }
                            })
                            .on("mouseover", function(t) {
                                let e = d3.select(
                                        "text#" +
                                            u +
                                            "___" +
                                            t.replace(/[\. ()/-]/g, "_")
                                    )._groups[0][0].id,
                                    n = e.split("___")[1];
                                0 == d3.select("#" + e).style("opacity")
                                    ? (d3.select(this).style("opacity", 1),
                                      d3
                                          .select("text#" + u + "___" + n)
                                          .style("opacity", 1))
                                    : (d3.select(this).style("opacity", 0.2),
                                      d3
                                          .select("text#" + u + "___" + n)
                                          .style("opacity", 0.2));
                            })
                            .on("mouseout", function(t) {
                                let e = d3.select(
                                        "text#" +
                                            u +
                                            "___" +
                                            t.replace(/[\. ()/-]/g, "_")
                                    )._groups[0][0].id,
                                    n = e.split("___")[1];
                                0 == d3.select("#" + e).style("opacity")
                                    ? (d3.select(this).style("opacity", 0.2),
                                      d3
                                          .select("text#" + u + "___" + n)
                                          .style("opacity", 0.2))
                                    : (d3.select(this).style("opacity", 1),
                                      d3
                                          .select("text#" + u + "___" + n)
                                          .style("opacity", 1));
                            }),
                            f
                                .append("text")
                                .attr(
                                    "x",
                                    i + Math.round(0.022727 * $(window).width())
                                )
                                .attr(
                                    "y",
                                    Math.round(0.01041 * $(window).height())
                                )
                                .attr("id", function(t) {
                                    return (
                                        u + "___" + t.replace(/[\. ()/-]/g, "_")
                                    );
                                })
                                .attr("dy", ".35em")
                                .style("text-anchor", "start")
                                .style("font-size", ".7vw")
                                .text(function(t) {
                                    return t;
                                });
                    })(t, T, _, b, k, d, p, M, S, S.domain(), e, n, B),
                    x(t, T, _, b, k, d, p, M, e, n, B, a[e]);
            }
            function E(t, e) {
                var n = 0;
                return (
                    t.forEach(function(t) {
                        "y" == e ? (n += t.e_y) : "x" == e && (n += t.e_x);
                    }),
                    n / t.length
                );
            }
            n.d(e, "load_scatter_visualization", function() {
                return M;
            }),
                n.d(e, "onQuartileChange", function() {
                    return B;
                }),
                n.d(e, "better", function() {
                    return O;
                });
            let T = {},
                q = {},
                O = {};
            function M() {
                let t,
                    e,
                    n,
                    r = document.getElementsByClassName(
                        "benchmarkingChart_scatter"
                    ),
                    o = 0;
                for (n of ((o = 0), r)) {
                    let r =
                        "https://" +
                        ($(n).data("mode") ? "dev-openebench" : "openebench") +
                        ".bsc.es/";
                    e = n.getAttribute("data-id");
                    var i = n.getAttribute("metric_x"),
                        a = n.getAttribute("metric_y");
                    if (
                        ((t = (e + o).replace(":", "_")),
                        (n.id = t),
                        s(t),
                        S(
                            r + "sciapi/graphql",
                            'query getDatasets($challenge_id: String!){\n                          getDatasets(datasetFilters:{challenge_id: $challenge_id, type:"assessment"}) {\n                              _id\n                              community_ids\n                              datalink{\n                                  inline_data\n                              }\n                              depends_on{\n                                  tool_id\n                                  metrics_id\n                              }\n                          }\n                        }',
                            e,
                            t,
                            i,
                            a
                        ),
                        "true" == n.getAttribute("toTable"))
                    ) {
                        var l = $(
                            '<br><br><table id="' +
                                (t + "_table") +
                                '" data-id="' +
                                e +
                                '" class="benchmarkingTable_scatter"></table>'
                        );
                        $("#" + t).append(l);
                    }
                    o++;
                }
            }
            function S(t, e, n, r, o, i) {
                try {
                    const s = a({ uri: t });
                    s({ query: e, variables: { challenge_id: n } }).then(t => {
                        let e = t.data.getDatasets;
                        if (0 == e.length) {
                            document
                                .getElementById(r + "_dropdown_list")
                                .remove();
                            var a = document.createElement("td");
                            a.id = "no_benchmark_data";
                            var l = document.createTextNode(
                                "No data available for the selected challenge: " +
                                    n
                            );
                            a.appendChild(l),
                                document.getElementById(r).appendChild(a);
                        } else {
                            (() =>
                                s({
                                    query:
                                        "query getTools($community_id: String!){\n                        getTools(toolFilters:{community_id: $community_id}) {\n                            _id\n                            name\n                        }\n                        getMetrics {\n                          _id\n                          title\n                          representation_hints\n                        }\n                    }",
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
                                    c = {};
                                a.forEach(function(t) {
                                    (l[t._id] = t.title),
                                        null !== t.representation_hints
                                            ? (c[t._id] =
                                                  t.representation_hints.optimization)
                                            : (c[t._id] = null);
                                }),
                                    "minimize" == c[o] || "minimize" == c[i]
                                        ? (O[r] = "bottom-right")
                                        : (O[r] = "top-right"),
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
                                            let c = [];
                                            Object.keys(l).forEach(t => {
                                                var e;
                                                e =
                                                    t.length > 22
                                                        ? t.substring(0, 22)
                                                        : t;
                                                let n = {};
                                                (n.toolname = e),
                                                    (n.x = l[t][0]),
                                                    (n.y = l[t][1]),
                                                    (n.e_y = l[t][2]),
                                                    (n.e_x = l[t][3]),
                                                    c.push(n);
                                            }),
                                                (T[n] = c),
                                                (q[n] = i);
                                            var s = document.getElementById(
                                                n + "_dropdown_list"
                                            );
                                            let u =
                                                s.options[s.selectedIndex].id;
                                            k(c, n, u, r, o, i, a);
                                        } catch (t) {
                                            console.log(
                                                `Invalid Url Error: ${t.stack} `
                                            );
                                        }
                                    })(e, s, r, o, i, l, O);
                            });
                        }
                    });
                } catch (t) {
                    console.log(`Invalid Url Error: ${t.stack} `);
                }
            }
            function B(t, e, n, r) {
                var o = t.split("__")[0];
                d3.select("#svg_" + o).remove();
                let i = t;
                k(T[o], o, i, e, n, q[o], r);
            }
            M();
        }
    ])
);
