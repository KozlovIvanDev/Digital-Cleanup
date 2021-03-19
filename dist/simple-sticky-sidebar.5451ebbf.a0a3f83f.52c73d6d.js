// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"simple-sticky-sidebar.5451ebbf.a0a3f83f.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "cHRK": [function (require, module, exports) {
    var define;
    var global = arguments[3];
    var e,
        r = arguments[3];

    function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    parcelRequire = function (r, n, o, a) {
      var i,
          c = "function" == typeof parcelRequire && parcelRequire,
          s = "function" == typeof require && require;

      function l(e, t) {
        if (!n[e]) {
          if (!r[e]) {
            var o = "function" == typeof parcelRequire && parcelRequire;
            if (!t && o) return o(e, !0);
            if (c) return c(e, !0);
            if (s && "string" == typeof e) return s(e);
            var a = new Error("Cannot find module '" + e + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          u.resolve = function (t) {
            return r[e][1][t] || t;
          }, u.cache = {};
          var i = n[e] = new l.Module(e);
          r[e][0].call(i.exports, u, i, i.exports, this);
        }

        return n[e].exports;

        function u(e) {
          return l(u.resolve(e));
        }
      }

      l.isParcelRequire = !0, l.Module = function (e) {
        this.id = e, this.bundle = l, this.exports = {};
      }, l.modules = r, l.cache = n, l.parent = c, l.register = function (e, t) {
        r[e] = [function (e, r) {
          r.exports = t;
        }, {}];
      };

      for (var u = 0; u < o.length; u++) {
        try {
          l(o[u]);
        } catch (d) {
          i || (i = d);
        }
      }

      if (o.length) {
        var p = l(o[o.length - 1]);
        "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = p : "function" == typeof e && e.amd && e(function () {
          return p;
        });
      }

      if (parcelRequire = l, i) throw i;
      return l;
    }({
      "js/simple-sticky-sidebar.js": [function (e, r, t) {}, {}],
      "node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (e, r, t) {
        var n,
            o,
            a = arguments[3],
            i = "__parcel__error__overlay__",
            c = r.bundle.Module;

        r.bundle.Module = function (e) {
          c.call(this, e), this.hot = {
            data: r.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function accept(e) {
              this._acceptCallbacks.push(e || function () {});
            },
            dispose: function dispose(e) {
              this._disposeCallbacks.push(e);
            }
          }, r.bundle.hotData = null;
        };

        var s = r.bundle.parent;

        if (!(s && s.isParcelRequire || "undefined" == typeof WebSocket)) {
          var l = location.hostname,
              u = "https:" === location.protocol ? "wss" : "ws",
              p = new WebSocket(u + "://" + l + ":59557/");

          p.onmessage = function (e) {
            n = {}, o = [];
            var r = JSON.parse(e.data);

            if ("update" === r.type) {
              var t = !1;
              r.assets.forEach(function (e) {
                e.isNew || function e(r, t) {
                  var i = r.modules;
                  if (!i) return;
                  if (!i[t] && r.parent) return e(r.parent, t);
                  if (n[t]) return;
                  n[t] = !0;
                  var c = r.cache[t];
                  o.push([r, t]);
                  if (c && c.hot && c.hot._acceptCallbacks.length) return !0;
                  return function e(r, t) {
                    var n = r.modules;
                    if (!n) return [];
                    var o = [];
                    var a, i, c;

                    for (a in n) {
                      for (i in n[a][1]) {
                        ((c = n[a][1][i]) === t || Array.isArray(c) && c[c.length - 1] === t) && o.push(a);
                      }
                    }

                    r.parent && (o = o.concat(e(r.parent, t)));
                    return o;
                  }(a.parcelRequire, t).some(function (r) {
                    return e(a.parcelRequire, r);
                  });
                }(a.parcelRequire, e.id) && (t = !0);
              }), (t = t || r.assets.every(function (e) {
                return "css" === e.type && e.generated.js;
              })) ? (console.clear(), r.assets.forEach(function (e) {
                !function e(r, t) {
                  var n = r.modules;
                  if (!n) return;

                  if (n[t.id] || !r.parent) {
                    var o = new Function("require", "module", "exports", t.generated.js);
                    t.isNew = !n[t.id], n[t.id] = [o, t.deps];
                  } else r.parent && e(r.parent, t);
                }(a.parcelRequire, e);
              }), o.forEach(function (e) {
                !function (e, r) {
                  var t = e.cache[r];
                  e.hotData = {}, t && (t.hot.data = e.hotData);
                  t && t.hot && t.hot._disposeCallbacks.length && t.hot._disposeCallbacks.forEach(function (r) {
                    r(e.hotData);
                  });
                  if (delete e.cache[r], e(r), (t = e.cache[r]) && t.hot && t.hot._acceptCallbacks.length) t.hot._acceptCallbacks.forEach(function (e) {
                    e();
                  });
                }(e[0], e[1]);
              })) : location.reload && location.reload();
            }

            if ("reload" === r.type && (p.close(), p.onclose = function () {
              location.reload();
            }), "error-resolved" === r.type && (console.log("[parcel] ✨ Error resolved"), d()), "error" === r.type) {
              console.error("[parcel] 🚨  " + r.error.message + "\n" + r.error.stack), d();

              var c = function (e) {
                var r = document.createElement("div");
                r.id = i;
                var t = document.createElement("div"),
                    n = document.createElement("pre");
                return t.innerText = e.error.message, n.innerText = e.error.stack, r.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;"><span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span><span style="top: 2px; margin-left: 5px; position: relative;">🚨</span><div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + t.innerHTML + "</div><pre>" + n.innerHTML + "</pre></div>", r;
              }(r);

              document.body.appendChild(c);
            }
          };
        }

        function d() {
          var e = document.getElementById(i);
          e && e.remove();
        }
      }, {}]
    }, {}, ["node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "js/simple-sticky-sidebar.js"]);
  }, {}]
}, {}, ["cHRK"], null);
},{}]