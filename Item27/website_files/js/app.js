/*! For license information please see app.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
    type: "slider",
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: !1,
    hoverpause: !0,
    keyboard: !0,
    bound: !1,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: !1,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: !0,
    rewindDuration: 800,
    animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
    throttle: 10,
    direction: "ltr",
    peek: 0,
    breakpoints: {},
    classes: {
      direction: { ltr: "glide--ltr", rtl: "glide--rtl" },
      slider: "glide--slider",
      carousel: "glide--carousel",
      swipeable: "glide--swipeable",
      dragging: "glide--dragging",
      cloneSlide: "glide__slide--clone",
      activeNav: "glide__bullet--active",
      activeSlide: "glide__slide--active",
      disabledArrow: "glide__arrow--disabled",
    },
  };
  function t(e) {
    console.error("[Glide warn]: " + e);
  }
  var n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    i = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })(),
    o =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      },
    s = function e(t, n, i) {
      null === t && (t = Function.prototype);
      var r = Object.getOwnPropertyDescriptor(t, n);
      if (void 0 === r) {
        var o = Object.getPrototypeOf(t);
        return null === o ? void 0 : e(o, n, i);
      }
      if ("value" in r) return r.value;
      var s = r.get;
      return void 0 !== s ? s.call(i) : void 0;
    };
  function a(e) {
    return parseInt(e);
  }
  function u(e) {
    return "string" == typeof e;
  }
  function l(e) {
    var t = void 0 === e ? "undefined" : n(e);
    return "function" === t || ("object" === t && !!e);
  }
  function c(e) {
    return "function" == typeof e;
  }
  function f(e) {
    return void 0 === e;
  }
  function d(e) {
    return e.constructor === Array;
  }
  function p(e, t, n) {
    Object.defineProperty(e, t, n);
  }
  function h(e, t) {
    var n = o({}, e, t);
    return (
      t.hasOwnProperty("classes") &&
        ((n.classes = o({}, e.classes, t.classes)),
        t.classes.hasOwnProperty("direction") &&
          (n.classes.direction = o(
            {},
            e.classes.direction,
            t.classes.direction
          ))),
      t.hasOwnProperty("breakpoints") &&
        (n.breakpoints = o({}, e.breakpoints, t.breakpoints)),
      n
    );
  }
  var v = (function () {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, e), (this.events = t), (this.hop = t.hasOwnProperty);
      }
      return (
        r(e, [
          {
            key: "on",
            value: function (e, t) {
              if (d(e)) for (var n = 0; n < e.length; n++) this.on(e[n], t);
              this.hop.call(this.events, e) || (this.events[e] = []);
              var i = this.events[e].push(t) - 1;
              return {
                remove: function () {
                  delete this.events[e][i];
                },
              };
            },
          },
          {
            key: "emit",
            value: function (e, t) {
              if (d(e)) for (var n = 0; n < e.length; n++) this.emit(e[n], t);
              this.hop.call(this.events, e) &&
                this.events[e].forEach(function (e) {
                  e(t || {});
                });
            },
          },
        ]),
        e
      );
    })(),
    m = (function () {
      function n(t) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        i(this, n),
          (this._c = {}),
          (this._t = []),
          (this._e = new v()),
          (this.disabled = !1),
          (this.selector = t),
          (this.settings = h(e, r)),
          (this.index = this.settings.startAt);
      }
      return (
        r(n, [
          {
            key: "mount",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                this._e.emit("mount.before"),
                l(e)
                  ? (this._c = (function (e, n, i) {
                      var r = {};
                      for (var o in n)
                        c(n[o])
                          ? (r[o] = n[o](e, r, i))
                          : t("Extension must be a function");
                      for (var s in r) c(r[s].mount) && r[s].mount();
                      return r;
                    })(this, e, this._e))
                  : t("You need to provide a object on `mount()`"),
                this._e.emit("mount.after"),
                this
              );
            },
          },
          {
            key: "mutate",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return (
                d(e)
                  ? (this._t = e)
                  : t("You need to provide a array on `mutate()`"),
                this
              );
            },
          },
          {
            key: "update",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                (this.settings = h(this.settings, e)),
                e.hasOwnProperty("startAt") && (this.index = e.startAt),
                this._e.emit("update"),
                this
              );
            },
          },
          {
            key: "go",
            value: function (e) {
              return this._c.Run.make(e), this;
            },
          },
          {
            key: "move",
            value: function (e) {
              return this._c.Transition.disable(), this._c.Move.make(e), this;
            },
          },
          {
            key: "destroy",
            value: function () {
              return this._e.emit("destroy"), this;
            },
          },
          {
            key: "play",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return (
                e && (this.settings.autoplay = e), this._e.emit("play"), this
              );
            },
          },
          {
            key: "pause",
            value: function () {
              return this._e.emit("pause"), this;
            },
          },
          {
            key: "disable",
            value: function () {
              return (this.disabled = !0), this;
            },
          },
          {
            key: "enable",
            value: function () {
              return (this.disabled = !1), this;
            },
          },
          {
            key: "on",
            value: function (e, t) {
              return this._e.on(e, t), this;
            },
          },
          {
            key: "isType",
            value: function (e) {
              return this.settings.type === e;
            },
          },
          {
            key: "settings",
            get: function () {
              return this._o;
            },
            set: function (e) {
              l(e) ? (this._o = e) : t("Options must be an `object` instance.");
            },
          },
          {
            key: "index",
            get: function () {
              return this._i;
            },
            set: function (e) {
              this._i = a(e);
            },
          },
          {
            key: "type",
            get: function () {
              return this.settings.type;
            },
          },
          {
            key: "disabled",
            get: function () {
              return this._d;
            },
            set: function (e) {
              this._d = !!e;
            },
          },
        ]),
        n
      );
    })();
  function _() {
    return new Date().getTime();
  }
  function g(e, t, n) {
    var i = void 0,
      r = void 0,
      o = void 0,
      s = void 0,
      a = 0;
    n || (n = {});
    var u = function () {
        (a = !1 === n.leading ? 0 : _()),
          (i = null),
          (s = e.apply(r, o)),
          i || (r = o = null);
      },
      l = function () {
        var l = _();
        a || !1 !== n.leading || (a = l);
        var c = t - (l - a);
        return (
          (r = this),
          (o = arguments),
          c <= 0 || c > t
            ? (i && (clearTimeout(i), (i = null)),
              (a = l),
              (s = e.apply(r, o)),
              i || (r = o = null))
            : i || !1 === n.trailing || (i = setTimeout(u, c)),
          s
        );
      };
    return (
      (l.cancel = function () {
        clearTimeout(i), (a = 0), (i = r = o = null);
      }),
      l
    );
  }
  var y = {
    ltr: ["marginLeft", "marginRight"],
    rtl: ["marginRight", "marginLeft"],
  };
  function b(e) {
    if (e && e.parentNode) {
      for (var t = e.parentNode.firstChild, n = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && n.push(t);
      return n;
    }
    return [];
  }
  function x(e) {
    return !!(e && e instanceof window.HTMLElement);
  }
  var w = '[data-glide-el="track"]';
  var k = (function () {
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      i(this, e), (this.listeners = t);
    }
    return (
      r(e, [
        {
          key: "on",
          value: function (e, t, n) {
            var i =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            u(e) && (e = [e]);
            for (var r = 0; r < e.length; r++)
              (this.listeners[e[r]] = n),
                t.addEventListener(e[r], this.listeners[e[r]], i);
          },
        },
        {
          key: "off",
          value: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            u(e) && (e = [e]);
            for (var i = 0; i < e.length; i++)
              t.removeEventListener(e[i], this.listeners[e[i]], n);
          },
        },
        {
          key: "destroy",
          value: function () {
            delete this.listeners;
          },
        },
      ]),
      e
    );
  })();
  var S = ["ltr", "rtl"],
    E = { ">": "<", "<": ">", "=": "=" };
  function O(e, t) {
    return {
      modify: function (e) {
        return t.Direction.is("rtl") ? -e : e;
      },
    };
  }
  function A(e, t) {
    return {
      modify: function (n) {
        return n + t.Gaps.value * e.index;
      },
    };
  }
  function C(e, t) {
    return {
      modify: function (e) {
        return e + t.Clones.grow / 2;
      },
    };
  }
  function j(e, t) {
    return {
      modify: function (n) {
        if (e.settings.focusAt >= 0) {
          var i = t.Peek.value;
          return l(i) ? n - i.before : n - i;
        }
        return n;
      },
    };
  }
  function T(e, t) {
    return {
      modify: function (n) {
        var i = t.Gaps.value,
          r = t.Sizes.width,
          o = e.settings.focusAt,
          s = t.Sizes.slideWidth;
        return "center" === o ? n - (r / 2 - s / 2) : n - s * o - i * o;
      },
    };
  }
  var M = !1;
  try {
    var L = Object.defineProperty({}, "passive", {
      get: function () {
        M = !0;
      },
    });
    window.addEventListener("testPassive", null, L),
      window.removeEventListener("testPassive", null, L);
  } catch (e) {}
  var P = M,
    $ = ["touchstart", "mousedown"],
    H = ["touchmove", "mousemove"],
    R = ["touchend", "touchcancel", "mouseup", "mouseleave"],
    N = ["mousedown", "mousemove", "mouseup", "mouseleave"];
  function z(e) {
    return l(e)
      ? ((n = e),
        Object.keys(n)
          .sort()
          .reduce(function (e, t) {
            return (e[t] = n[t]), e[t], e;
          }, {}))
      : (t("Breakpoints option must be an object"), {});
    var n;
  }
  var D = {
    Html: function (e, n) {
      var i = {
        mount: function () {
          (this.root = e.selector),
            (this.track = this.root.querySelector(w)),
            (this.slides = Array.prototype.slice
              .call(this.wrapper.children)
              .filter(function (t) {
                return !t.classList.contains(e.settings.classes.cloneSlide);
              }));
        },
      };
      return (
        p(i, "root", {
          get: function () {
            return i._r;
          },
          set: function (e) {
            u(e) && (e = document.querySelector(e)),
              x(e)
                ? (i._r = e)
                : t("Root element must be a existing Html node");
          },
        }),
        p(i, "track", {
          get: function () {
            return i._t;
          },
          set: function (e) {
            x(e)
              ? (i._t = e)
              : t(
                  "Could not find track element. Please use " +
                    w +
                    " attribute."
                );
          },
        }),
        p(i, "wrapper", {
          get: function () {
            return i.track.children[0];
          },
        }),
        i
      );
    },
    Translate: function (e, n, i) {
      var r = {
        set: function (i) {
          var r = (function (e, n, i) {
            var r = [A, C, j, T].concat(e._t, [O]);
            return {
              mutate: function (o) {
                for (var s = 0; s < r.length; s++) {
                  var a = r[s];
                  c(a) && c(a().modify)
                    ? (o = a(e, n, i).modify(o))
                    : t(
                        "Transformer should be a function that returns an object with `modify()` method"
                      );
                }
                return o;
              },
            };
          })(e, n).mutate(i);
          n.Html.wrapper.style.transform =
            "translate3d(" + -1 * r + "px, 0px, 0px)";
        },
        remove: function () {
          n.Html.wrapper.style.transform = "";
        },
      };
      return (
        i.on("move", function (t) {
          var o = n.Gaps.value,
            s = n.Sizes.length,
            a = n.Sizes.slideWidth;
          return e.isType("carousel") && n.Run.isOffset("<")
            ? (n.Transition.after(function () {
                i.emit("translate.jump"), r.set(a * (s - 1));
              }),
              r.set(-a - o * s))
            : e.isType("carousel") && n.Run.isOffset(">")
            ? (n.Transition.after(function () {
                i.emit("translate.jump"), r.set(0);
              }),
              r.set(a * s + o * s))
            : r.set(t.movement);
        }),
        i.on("destroy", function () {
          r.remove();
        }),
        r
      );
    },
    Transition: function (e, t, n) {
      var i = !1,
        r = {
          compose: function (t) {
            var n = e.settings;
            return i
              ? t + " 0ms " + n.animationTimingFunc
              : t + " " + this.duration + "ms " + n.animationTimingFunc;
          },
          set: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "transform";
            t.Html.wrapper.style.transition = this.compose(e);
          },
          remove: function () {
            t.Html.wrapper.style.transition = "";
          },
          after: function (e) {
            setTimeout(function () {
              e();
            }, this.duration);
          },
          enable: function () {
            (i = !1), this.set();
          },
          disable: function () {
            (i = !0), this.set();
          },
        };
      return (
        p(r, "duration", {
          get: function () {
            var n = e.settings;
            return e.isType("slider") && t.Run.offset
              ? n.rewindDuration
              : n.animationDuration;
          },
        }),
        n.on("move", function () {
          r.set();
        }),
        n.on(["build.before", "resize", "translate.jump"], function () {
          r.disable();
        }),
        n.on("run", function () {
          r.enable();
        }),
        n.on("destroy", function () {
          r.remove();
        }),
        r
      );
    },
    Direction: function (e, n, i) {
      var r = {
        mount: function () {
          this.value = e.settings.direction;
        },
        resolve: function (e) {
          var t = e.slice(0, 1);
          return this.is("rtl") ? e.split(t).join(E[t]) : e;
        },
        is: function (e) {
          return this.value === e;
        },
        addClass: function () {
          n.Html.root.classList.add(e.settings.classes.direction[this.value]);
        },
        removeClass: function () {
          n.Html.root.classList.remove(
            e.settings.classes.direction[this.value]
          );
        },
      };
      return (
        p(r, "value", {
          get: function () {
            return r._v;
          },
          set: function (e) {
            S.indexOf(e) > -1
              ? (r._v = e)
              : t("Direction value must be `ltr` or `rtl`");
          },
        }),
        i.on(["destroy", "update"], function () {
          r.removeClass();
        }),
        i.on("update", function () {
          r.mount();
        }),
        i.on(["build.before", "update"], function () {
          r.addClass();
        }),
        r
      );
    },
    Peek: function (e, t, n) {
      var i = {
        mount: function () {
          this.value = e.settings.peek;
        },
      };
      return (
        p(i, "value", {
          get: function () {
            return i._v;
          },
          set: function (e) {
            l(e)
              ? ((e.before = a(e.before)), (e.after = a(e.after)))
              : (e = a(e)),
              (i._v = e);
          },
        }),
        p(i, "reductor", {
          get: function () {
            var t = i.value,
              n = e.settings.perView;
            return l(t) ? t.before / n + t.after / n : (2 * t) / n;
          },
        }),
        n.on(["resize", "update"], function () {
          i.mount();
        }),
        i
      );
    },
    Sizes: function (e, t, n) {
      var i = {
        setupSlides: function () {
          for (
            var e = this.slideWidth + "px", n = t.Html.slides, i = 0;
            i < n.length;
            i++
          )
            n[i].style.width = e;
        },
        setupWrapper: function (e) {
          t.Html.wrapper.style.width = this.wrapperSize + "px";
        },
        remove: function () {
          for (var e = t.Html.slides, n = 0; n < e.length; n++)
            e[n].style.width = "";
          t.Html.wrapper.style.width = "";
        },
      };
      return (
        p(i, "length", {
          get: function () {
            return t.Html.slides.length;
          },
        }),
        p(i, "width", {
          get: function () {
            return t.Html.root.offsetWidth;
          },
        }),
        p(i, "wrapperSize", {
          get: function () {
            return i.slideWidth * i.length + t.Gaps.grow + t.Clones.grow;
          },
        }),
        p(i, "slideWidth", {
          get: function () {
            return (
              i.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor
            );
          },
        }),
        n.on(["build.before", "resize", "update"], function () {
          i.setupSlides(), i.setupWrapper();
        }),
        n.on("destroy", function () {
          i.remove();
        }),
        i
      );
    },
    Gaps: function (e, t, n) {
      var i = {
        apply: function (e) {
          for (var n = 0, i = e.length; n < i; n++) {
            var r = e[n].style,
              o = t.Direction.value;
            (r[y[o][0]] = 0 !== n ? this.value / 2 + "px" : ""),
              n !== e.length - 1
                ? (r[y[o][1]] = this.value / 2 + "px")
                : (r[y[o][1]] = "");
          }
        },
        remove: function (e) {
          for (var t = 0, n = e.length; t < n; t++) {
            var i = e[t].style;
            (i.marginLeft = ""), (i.marginRight = "");
          }
        },
      };
      return (
        p(i, "value", {
          get: function () {
            return a(e.settings.gap);
          },
        }),
        p(i, "grow", {
          get: function () {
            return i.value * (t.Sizes.length - 1);
          },
        }),
        p(i, "reductor", {
          get: function () {
            var t = e.settings.perView;
            return (i.value * (t - 1)) / t;
          },
        }),
        n.on(
          ["build.after", "update"],
          g(function () {
            i.apply(t.Html.wrapper.children);
          }, 30)
        ),
        n.on("destroy", function () {
          i.remove(t.Html.wrapper.children);
        }),
        i
      );
    },
    Move: function (e, t, n) {
      var i = {
        mount: function () {
          this._o = 0;
        },
        make: function () {
          var e = this,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
          (this.offset = i),
            n.emit("move", { movement: this.value }),
            t.Transition.after(function () {
              n.emit("move.after", { movement: e.value });
            });
        },
      };
      return (
        p(i, "offset", {
          get: function () {
            return i._o;
          },
          set: function (e) {
            i._o = f(e) ? 0 : a(e);
          },
        }),
        p(i, "translate", {
          get: function () {
            return t.Sizes.slideWidth * e.index;
          },
        }),
        p(i, "value", {
          get: function () {
            var e = this.offset,
              n = this.translate;
            return t.Direction.is("rtl") ? n + e : n - e;
          },
        }),
        n.on(["build.before", "run"], function () {
          i.make();
        }),
        i
      );
    },
    Clones: function (e, t, n) {
      var i = {
        mount: function () {
          (this.items = []),
            e.isType("carousel") && (this.items = this.collect());
        },
        collect: function () {
          for (
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              i = t.Html.slides,
              r = e.settings,
              o = r.perView,
              s = r.classes,
              a = o + +!!e.settings.peek,
              u = i.slice(0, a),
              l = i.slice(-a),
              c = 0;
            c < Math.max(1, Math.floor(o / i.length));
            c++
          ) {
            for (var f = 0; f < u.length; f++) {
              var d = u[f].cloneNode(!0);
              d.classList.add(s.cloneSlide), n.push(d);
            }
            for (var p = 0; p < l.length; p++) {
              var h = l[p].cloneNode(!0);
              h.classList.add(s.cloneSlide), n.unshift(h);
            }
          }
          return n;
        },
        append: function () {
          for (
            var e = this.items,
              n = t.Html,
              i = n.wrapper,
              r = n.slides,
              o = Math.floor(e.length / 2),
              s = e.slice(0, o).reverse(),
              a = e.slice(o, e.length),
              u = t.Sizes.slideWidth + "px",
              l = 0;
            l < a.length;
            l++
          )
            i.appendChild(a[l]);
          for (var c = 0; c < s.length; c++) i.insertBefore(s[c], r[0]);
          for (var f = 0; f < e.length; f++) e[f].style.width = u;
        },
        remove: function () {
          for (var e = this.items, n = 0; n < e.length; n++)
            t.Html.wrapper.removeChild(e[n]);
        },
      };
      return (
        p(i, "grow", {
          get: function () {
            return (t.Sizes.slideWidth + t.Gaps.value) * i.items.length;
          },
        }),
        n.on("update", function () {
          i.remove(), i.mount(), i.append();
        }),
        n.on("build.before", function () {
          e.isType("carousel") && i.append();
        }),
        n.on("destroy", function () {
          i.remove();
        }),
        i
      );
    },
    Resize: function (e, t, n) {
      var i = new k(),
        r = {
          mount: function () {
            this.bind();
          },
          bind: function () {
            i.on(
              "resize",
              window,
              g(function () {
                n.emit("resize");
              }, e.settings.throttle)
            );
          },
          unbind: function () {
            i.off("resize", window);
          },
        };
      return (
        n.on("destroy", function () {
          r.unbind(), i.destroy();
        }),
        r
      );
    },
    Build: function (e, t, n) {
      var i = {
        mount: function () {
          n.emit("build.before"),
            this.typeClass(),
            this.activeClass(),
            n.emit("build.after");
        },
        typeClass: function () {
          t.Html.root.classList.add(e.settings.classes[e.settings.type]);
        },
        activeClass: function () {
          var n = e.settings.classes,
            i = t.Html.slides[e.index];
          i &&
            (i.classList.add(n.activeSlide),
            b(i).forEach(function (e) {
              e.classList.remove(n.activeSlide);
            }));
        },
        removeClasses: function () {
          var n = e.settings.classes;
          t.Html.root.classList.remove(n[e.settings.type]),
            t.Html.slides.forEach(function (e) {
              e.classList.remove(n.activeSlide);
            });
        },
      };
      return (
        n.on(["destroy", "update"], function () {
          i.removeClasses();
        }),
        n.on(["resize", "update"], function () {
          i.mount();
        }),
        n.on("move.after", function () {
          i.activeClass();
        }),
        i
      );
    },
    Run: function (e, n, i) {
      var r = {
        mount: function () {
          this._o = !1;
        },
        make: function (t) {
          var r = this;
          e.disabled ||
            (e.disable(),
            (this.move = t),
            i.emit("run.before", this.move),
            this.calculate(),
            i.emit("run", this.move),
            n.Transition.after(function () {
              r.isStart() && i.emit("run.start", r.move),
                r.isEnd() && i.emit("run.end", r.move),
                (r.isOffset("<") || r.isOffset(">")) &&
                  ((r._o = !1), i.emit("run.offset", r.move)),
                i.emit("run.after", r.move),
                e.enable();
            }));
        },
        calculate: function () {
          var n = this.move,
            i = this.length,
            r = n.steps,
            o = n.direction,
            s = "number" == typeof a(r) && 0 !== a(r);
          switch (o) {
            case ">":
              ">" === r
                ? (e.index = i)
                : this.isEnd()
                ? (e.isType("slider") && !e.settings.rewind) ||
                  ((this._o = !0), (e.index = 0))
                : s
                ? (e.index += Math.min(i - e.index, -a(r)))
                : e.index++;
              break;
            case "<":
              "<" === r
                ? (e.index = 0)
                : this.isStart()
                ? (e.isType("slider") && !e.settings.rewind) ||
                  ((this._o = !0), (e.index = i))
                : s
                ? (e.index -= Math.min(e.index, a(r)))
                : e.index--;
              break;
            case "=":
              e.index = r;
              break;
            default:
              t("Invalid direction pattern [" + o + r + "] has been used");
          }
        },
        isStart: function () {
          return 0 === e.index;
        },
        isEnd: function () {
          return e.index === this.length;
        },
        isOffset: function (e) {
          return this._o && this.move.direction === e;
        },
      };
      return (
        p(r, "move", {
          get: function () {
            return this._m;
          },
          set: function (e) {
            var t = e.substr(1);
            this._m = {
              direction: e.substr(0, 1),
              steps: t ? (a(t) ? a(t) : t) : 0,
            };
          },
        }),
        p(r, "length", {
          get: function () {
            var t = e.settings,
              i = n.Html.slides.length;
            return e.isType("slider") && "center" !== t.focusAt && t.bound
              ? i - 1 - (a(t.perView) - 1) + a(t.focusAt)
              : i - 1;
          },
        }),
        p(r, "offset", {
          get: function () {
            return this._o;
          },
        }),
        r
      );
    },
    Swipe: function (e, t, n) {
      var i = new k(),
        r = 0,
        o = 0,
        s = 0,
        u = !1,
        l = !!P && { passive: !0 },
        c = {
          mount: function () {
            this.bindSwipeStart();
          },
          start: function (t) {
            if (!u && !e.disabled) {
              this.disable();
              var i = this.touches(t);
              (r = null),
                (o = a(i.pageX)),
                (s = a(i.pageY)),
                this.bindSwipeMove(),
                this.bindSwipeEnd(),
                n.emit("swipe.start");
            }
          },
          move: function (i) {
            if (!e.disabled) {
              var u = e.settings,
                l = u.touchAngle,
                c = u.touchRatio,
                f = u.classes,
                d = this.touches(i),
                p = a(d.pageX) - o,
                h = a(d.pageY) - s,
                v = Math.abs(p << 2),
                m = Math.abs(h << 2),
                _ = Math.sqrt(v + m),
                g = Math.sqrt(m);
              if (!((180 * (r = Math.asin(g / _))) / Math.PI < l)) return !1;
              i.stopPropagation(),
                t.Move.make(p * parseFloat(c)),
                t.Html.root.classList.add(f.dragging),
                n.emit("swipe.move");
            }
          },
          end: function (i) {
            if (!e.disabled) {
              var s = e.settings,
                u = this.touches(i),
                l = this.threshold(i),
                c = u.pageX - o,
                f = (180 * r) / Math.PI,
                d = Math.round(c / t.Sizes.slideWidth);
              this.enable(),
                c > l && f < s.touchAngle
                  ? (s.perTouch && (d = Math.min(d, a(s.perTouch))),
                    t.Direction.is("rtl") && (d = -d),
                    t.Run.make(t.Direction.resolve("<" + d)))
                  : c < -l && f < s.touchAngle
                  ? (s.perTouch && (d = Math.max(d, -a(s.perTouch))),
                    t.Direction.is("rtl") && (d = -d),
                    t.Run.make(t.Direction.resolve(">" + d)))
                  : t.Move.make(),
                t.Html.root.classList.remove(s.classes.dragging),
                this.unbindSwipeMove(),
                this.unbindSwipeEnd(),
                n.emit("swipe.end");
            }
          },
          bindSwipeStart: function () {
            var n = this,
              r = e.settings;
            r.swipeThreshold &&
              i.on(
                $[0],
                t.Html.wrapper,
                function (e) {
                  n.start(e);
                },
                l
              ),
              r.dragThreshold &&
                i.on(
                  $[1],
                  t.Html.wrapper,
                  function (e) {
                    n.start(e);
                  },
                  l
                );
          },
          unbindSwipeStart: function () {
            i.off($[0], t.Html.wrapper, l), i.off($[1], t.Html.wrapper, l);
          },
          bindSwipeMove: function () {
            var n = this;
            i.on(
              H,
              t.Html.wrapper,
              g(function (e) {
                n.move(e);
              }, e.settings.throttle),
              l
            );
          },
          unbindSwipeMove: function () {
            i.off(H, t.Html.wrapper, l);
          },
          bindSwipeEnd: function () {
            var e = this;
            i.on(R, t.Html.wrapper, function (t) {
              e.end(t);
            });
          },
          unbindSwipeEnd: function () {
            i.off(R, t.Html.wrapper);
          },
          touches: function (e) {
            return N.indexOf(e.type) > -1
              ? e
              : e.touches[0] || e.changedTouches[0];
          },
          threshold: function (t) {
            var n = e.settings;
            return N.indexOf(t.type) > -1 ? n.dragThreshold : n.swipeThreshold;
          },
          enable: function () {
            return (u = !1), t.Transition.enable(), this;
          },
          disable: function () {
            return (u = !0), t.Transition.disable(), this;
          },
        };
      return (
        n.on("build.after", function () {
          t.Html.root.classList.add(e.settings.classes.swipeable);
        }),
        n.on("destroy", function () {
          c.unbindSwipeStart(),
            c.unbindSwipeMove(),
            c.unbindSwipeEnd(),
            i.destroy();
        }),
        c
      );
    },
    Images: function (e, t, n) {
      var i = new k(),
        r = {
          mount: function () {
            this.bind();
          },
          bind: function () {
            i.on("dragstart", t.Html.wrapper, this.dragstart);
          },
          unbind: function () {
            i.off("dragstart", t.Html.wrapper);
          },
          dragstart: function (e) {
            e.preventDefault();
          },
        };
      return (
        n.on("destroy", function () {
          r.unbind(), i.destroy();
        }),
        r
      );
    },
    Anchors: function (e, t, n) {
      var i = new k(),
        r = !1,
        o = !1,
        s = {
          mount: function () {
            (this._a = t.Html.wrapper.querySelectorAll("a")), this.bind();
          },
          bind: function () {
            i.on("click", t.Html.wrapper, this.click);
          },
          unbind: function () {
            i.off("click", t.Html.wrapper);
          },
          click: function (e) {
            o && (e.stopPropagation(), e.preventDefault());
          },
          detach: function () {
            if (((o = !0), !r)) {
              for (var e = 0; e < this.items.length; e++)
                (this.items[e].draggable = !1),
                  this.items[e].setAttribute(
                    "data-href",
                    this.items[e].getAttribute("href")
                  ),
                  this.items[e].removeAttribute("href");
              r = !0;
            }
            return this;
          },
          attach: function () {
            if (((o = !1), r)) {
              for (var e = 0; e < this.items.length; e++)
                (this.items[e].draggable = !0),
                  this.items[e].setAttribute(
                    "href",
                    this.items[e].getAttribute("data-href")
                  );
              r = !1;
            }
            return this;
          },
        };
      return (
        p(s, "items", {
          get: function () {
            return s._a;
          },
        }),
        n.on("swipe.move", function () {
          s.detach();
        }),
        n.on("swipe.end", function () {
          t.Transition.after(function () {
            s.attach();
          });
        }),
        n.on("destroy", function () {
          s.attach(), s.unbind(), i.destroy();
        }),
        s
      );
    },
    Controls: function (e, t, n) {
      var i = new k(),
        r = !!P && { passive: !0 },
        o = {
          mount: function () {
            (this._n = t.Html.root.querySelectorAll(
              '[data-glide-el="controls[nav]"]'
            )),
              (this._c = t.Html.root.querySelectorAll(
                '[data-glide-el^="controls"]'
              )),
              this.addBindings();
          },
          setActive: function () {
            for (var e = 0; e < this._n.length; e++)
              this.addClass(this._n[e].children);
          },
          removeActive: function () {
            for (var e = 0; e < this._n.length; e++)
              this.removeClass(this._n[e].children);
          },
          addClass: function (t) {
            var n = e.settings,
              i = t[e.index];
            i &&
              (i.classList.add(n.classes.activeNav),
              b(i).forEach(function (e) {
                e.classList.remove(n.classes.activeNav);
              }));
          },
          removeClass: function (t) {
            var n = t[e.index];
            n && n.classList.remove(e.settings.classes.activeNav);
          },
          addBindings: function () {
            for (var e = 0; e < this._c.length; e++)
              this.bind(this._c[e].children);
          },
          removeBindings: function () {
            for (var e = 0; e < this._c.length; e++)
              this.unbind(this._c[e].children);
          },
          bind: function (e) {
            for (var t = 0; t < e.length; t++)
              i.on("click", e[t], this.click),
                i.on("touchstart", e[t], this.click, r);
          },
          unbind: function (e) {
            for (var t = 0; t < e.length; t++)
              i.off(["click", "touchstart"], e[t]);
          },
          click: function (e) {
            e.preventDefault(),
              t.Run.make(
                t.Direction.resolve(
                  e.currentTarget.getAttribute("data-glide-dir")
                )
              );
          },
        };
      return (
        p(o, "items", {
          get: function () {
            return o._c;
          },
        }),
        n.on(["mount.after", "move.after"], function () {
          o.setActive();
        }),
        n.on("destroy", function () {
          o.removeBindings(), o.removeActive(), i.destroy();
        }),
        o
      );
    },
    Keyboard: function (e, t, n) {
      var i = new k(),
        r = {
          mount: function () {
            e.settings.keyboard && this.bind();
          },
          bind: function () {
            i.on("keyup", document, this.press);
          },
          unbind: function () {
            i.off("keyup", document);
          },
          press: function (e) {
            39 === e.keyCode && t.Run.make(t.Direction.resolve(">")),
              37 === e.keyCode && t.Run.make(t.Direction.resolve("<"));
          },
        };
      return (
        n.on(["destroy", "update"], function () {
          r.unbind();
        }),
        n.on("update", function () {
          r.mount();
        }),
        n.on("destroy", function () {
          i.destroy();
        }),
        r
      );
    },
    Autoplay: function (e, t, n) {
      var i = new k(),
        r = {
          mount: function () {
            this.start(), e.settings.hoverpause && this.bind();
          },
          start: function () {
            var n = this;
            e.settings.autoplay &&
              f(this._i) &&
              (this._i = setInterval(function () {
                n.stop(), t.Run.make(">"), n.start();
              }, this.time));
          },
          stop: function () {
            this._i = clearInterval(this._i);
          },
          bind: function () {
            var e = this;
            i.on("mouseover", t.Html.root, function () {
              e.stop();
            }),
              i.on("mouseout", t.Html.root, function () {
                e.start();
              });
          },
          unbind: function () {
            i.off(["mouseover", "mouseout"], t.Html.root);
          },
        };
      return (
        p(r, "time", {
          get: function () {
            var n = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
            return a(n || e.settings.autoplay);
          },
        }),
        n.on(["destroy", "update"], function () {
          r.unbind();
        }),
        n.on(
          ["run.before", "pause", "destroy", "swipe.start", "update"],
          function () {
            r.stop();
          }
        ),
        n.on(["run.after", "play", "swipe.end"], function () {
          r.start();
        }),
        n.on("update", function () {
          r.mount();
        }),
        n.on("destroy", function () {
          i.destroy();
        }),
        r
      );
    },
    Breakpoints: function (e, t, n) {
      var i = new k(),
        r = e.settings,
        s = z(r.breakpoints),
        a = o({}, r),
        u = {
          match: function (e) {
            if (void 0 !== window.matchMedia)
              for (var t in e)
                if (
                  e.hasOwnProperty(t) &&
                  window.matchMedia("(max-width: " + t + "px)").matches
                )
                  return e[t];
            return a;
          },
        };
      return (
        o(r, u.match(s)),
        i.on(
          "resize",
          window,
          g(function () {
            e.settings = h(r, u.match(s));
          }, e.settings.throttle)
        ),
        n.on("update", function () {
          (s = z(s)), (a = o({}, r));
        }),
        n.on("destroy", function () {
          i.off("resize", window);
        }),
        u
      );
    },
  };
  const I = (function (e) {
    function t() {
      return (
        i(this, t),
        (function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(t, e),
      r(t, [
        {
          key: "mount",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return s(
              t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
              "mount",
              this
            ).call(this, o({}, D, e));
          },
        },
      ]),
      t
    );
  })(m);
  var W,
    q,
    B,
    F,
    V = !1,
    K = !1,
    G = [];
  function U(e) {
    !(function (e) {
      G.includes(e) || G.push(e);
      K || V || ((V = !0), queueMicrotask(Z));
    })(e);
  }
  function Y(e) {
    let t = G.indexOf(e);
    -1 !== t && G.splice(t, 1);
  }
  function Z() {
    (V = !1), (K = !0);
    for (let e = 0; e < G.length; e++) G[e]();
    (G.length = 0), (K = !1);
  }
  var X = !0;
  function J(e) {
    q = e;
  }
  var Q = [],
    ee = [],
    te = [];
  function ne(e, t) {
    "function" == typeof t
      ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
      : ((t = e), ee.push(t));
  }
  function ie(e, t) {
    e._x_attributeCleanups &&
      Object.entries(e._x_attributeCleanups).forEach(([n, i]) => {
        (void 0 === t || t.includes(n)) &&
          (i.forEach((e) => e()), delete e._x_attributeCleanups[n]);
      });
  }
  var re = new MutationObserver(pe),
    oe = !1;
  function se() {
    re.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0,
    }),
      (oe = !0);
  }
  function ae() {
    (ue = ue.concat(re.takeRecords())).length &&
      !le &&
      ((le = !0),
      queueMicrotask(() => {
        pe(ue), (ue.length = 0), (le = !1);
      })),
      re.disconnect(),
      (oe = !1);
  }
  var ue = [],
    le = !1;
  function ce(e) {
    if (!oe) return e();
    ae();
    let t = e();
    return se(), t;
  }
  var fe = !1,
    de = [];
  function pe(e) {
    if (fe) return void (de = de.concat(e));
    let t = [],
      n = [],
      i = new Map(),
      r = new Map();
    for (let o = 0; o < e.length; o++)
      if (
        !e[o].target._x_ignoreMutationObserver &&
        ("childList" === e[o].type &&
          (e[o].addedNodes.forEach((e) => 1 === e.nodeType && t.push(e)),
          e[o].removedNodes.forEach((e) => 1 === e.nodeType && n.push(e))),
        "attributes" === e[o].type)
      ) {
        let t = e[o].target,
          n = e[o].attributeName,
          s = e[o].oldValue,
          a = () => {
            i.has(t) || i.set(t, []),
              i.get(t).push({ name: n, value: t.getAttribute(n) });
          },
          u = () => {
            r.has(t) || r.set(t, []), r.get(t).push(n);
          };
        t.hasAttribute(n) && null === s
          ? a()
          : t.hasAttribute(n)
          ? (u(), a())
          : u();
      }
    r.forEach((e, t) => {
      ie(t, e);
    }),
      i.forEach((e, t) => {
        Q.forEach((n) => n(t, e));
      });
    for (let e of n)
      if (!t.includes(e) && (ee.forEach((t) => t(e)), e._x_cleanups))
        for (; e._x_cleanups.length; ) e._x_cleanups.pop()();
    t.forEach((e) => {
      (e._x_ignoreSelf = !0), (e._x_ignore = !0);
    });
    for (let e of t)
      n.includes(e) ||
        (e.isConnected &&
          (delete e._x_ignoreSelf,
          delete e._x_ignore,
          te.forEach((t) => t(e)),
          (e._x_ignore = !0),
          (e._x_ignoreSelf = !0)));
    t.forEach((e) => {
      delete e._x_ignoreSelf, delete e._x_ignore;
    }),
      (t = null),
      (n = null),
      (i = null),
      (r = null);
  }
  function he(e) {
    return ge(_e(e));
  }
  function ve(e, t, n) {
    return (
      (e._x_dataStack = [t, ..._e(n || e)]),
      () => {
        e._x_dataStack = e._x_dataStack.filter((e) => e !== t);
      }
    );
  }
  function me(e, t) {
    let n = e._x_dataStack[0];
    Object.entries(t).forEach(([e, t]) => {
      n[e] = t;
    });
  }
  function _e(e) {
    return e._x_dataStack
      ? e._x_dataStack
      : "function" == typeof ShadowRoot && e instanceof ShadowRoot
      ? _e(e.host)
      : e.parentNode
      ? _e(e.parentNode)
      : [];
  }
  function ge(e) {
    let t = new Proxy(
      {},
      {
        ownKeys: () => Array.from(new Set(e.flatMap((e) => Object.keys(e)))),
        has: (t, n) => e.some((e) => e.hasOwnProperty(n)),
        get: (n, i) =>
          (e.find((e) => {
            if (e.hasOwnProperty(i)) {
              let n = Object.getOwnPropertyDescriptor(e, i);
              if (
                (n.get && n.get._x_alreadyBound) ||
                (n.set && n.set._x_alreadyBound)
              )
                return !0;
              if ((n.get || n.set) && n.enumerable) {
                let r = n.get,
                  o = n.set,
                  s = n;
                (r = r && r.bind(t)),
                  (o = o && o.bind(t)),
                  r && (r._x_alreadyBound = !0),
                  o && (o._x_alreadyBound = !0),
                  Object.defineProperty(e, i, { ...s, get: r, set: o });
              }
              return !0;
            }
            return !1;
          }) || {})[i],
        set: (t, n, i) => {
          let r = e.find((e) => e.hasOwnProperty(n));
          return r ? (r[n] = i) : (e[e.length - 1][n] = i), !0;
        },
      }
    );
    return t;
  }
  function ye(e) {
    let t = (n, i = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
        ([r, { value: o, enumerable: s }]) => {
          if (!1 === s || void 0 === o) return;
          let a = "" === i ? r : `${i}.${r}`;
          var u;
          "object" == typeof o && null !== o && o._x_interceptor
            ? (n[r] = o.initialize(e, a, r))
            : "object" != typeof (u = o) ||
              Array.isArray(u) ||
              null === u ||
              o === n ||
              o instanceof Element ||
              t(o, a);
        }
      );
    };
    return t(e);
  }
  function be(e, t = () => {}) {
    let n = {
      initialValue: void 0,
      _x_interceptor: !0,
      initialize(t, n, i) {
        return e(
          this.initialValue,
          () =>
            (function (e, t) {
              return t.split(".").reduce((e, t) => e[t], e);
            })(t, n),
          (e) => xe(t, n, e),
          n,
          i
        );
      },
    };
    return (
      t(n),
      (e) => {
        if ("object" == typeof e && null !== e && e._x_interceptor) {
          let t = n.initialize.bind(n);
          n.initialize = (i, r, o) => {
            let s = e.initialize(i, r, o);
            return (n.initialValue = s), t(i, r, o);
          };
        } else n.initialValue = e;
        return n;
      }
    );
  }
  function xe(e, t, n) {
    if (("string" == typeof t && (t = t.split(".")), 1 !== t.length)) {
      if (0 === t.length) throw error;
      return e[t[0]] || (e[t[0]] = {}), xe(e[t[0]], t.slice(1), n);
    }
    e[t[0]] = n;
  }
  var we = {};
  function ke(e, t) {
    we[e] = t;
  }
  function Se(e, t) {
    return (
      Object.entries(we).forEach(([n, i]) => {
        Object.defineProperty(e, `$${n}`, {
          get() {
            let [e, n] = Be(t);
            return (e = { interceptor: be, ...e }), ne(t, n), i(t, e);
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  function Ee(e, t, n, ...i) {
    try {
      return n(...i);
    } catch (n) {
      Oe(n, e, t);
    }
  }
  function Oe(e, t, n = void 0) {
    Object.assign(e, { el: t, expression: n }),
      console.warn(
        `Alpine Expression Error: ${e.message}\n\n${
          n ? 'Expression: "' + n + '"\n\n' : ""
        }`,
        t
      ),
      setTimeout(() => {
        throw e;
      }, 0);
  }
  var Ae = !0;
  function Ce(e, t, n = {}) {
    let i;
    return je(e, t)((e) => (i = e), n), i;
  }
  function je(...e) {
    return Te(...e);
  }
  var Te = Me;
  function Me(e, t) {
    let n = {};
    Se(n, e);
    let i = [n, ..._e(e)];
    if ("function" == typeof t)
      return (function (e, t) {
        return (n = () => {}, { scope: i = {}, params: r = [] } = {}) => {
          Pe(n, t.apply(ge([i, ...e]), r));
        };
      })(i, t);
    let r = (function (e, t, n) {
      let i = (function (e, t) {
        if (Le[e]) return Le[e];
        let n = Object.getPrototypeOf(async function () {}).constructor,
          i =
            /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e)
              ? `(() => { ${e} })()`
              : e;
        const r = () => {
          try {
            return new n(
              ["__self", "scope"],
              `with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`
            );
          } catch (n) {
            return Oe(n, t, e), Promise.resolve();
          }
        };
        let o = r();
        return (Le[e] = o), o;
      })(t, n);
      return (r = () => {}, { scope: o = {}, params: s = [] } = {}) => {
        (i.result = void 0), (i.finished = !1);
        let a = ge([o, ...e]);
        if ("function" == typeof i) {
          let e = i(i, a).catch((e) => Oe(e, n, t));
          i.finished
            ? (Pe(r, i.result, a, s, n), (i.result = void 0))
            : e
                .then((e) => {
                  Pe(r, e, a, s, n);
                })
                .catch((e) => Oe(e, n, t))
                .finally(() => (i.result = void 0));
        }
      };
    })(i, t, e);
    return Ee.bind(null, e, t, r);
  }
  var Le = {};
  function Pe(e, t, n, i, r) {
    if (Ae && "function" == typeof t) {
      let o = t.apply(n, i);
      o instanceof Promise
        ? o.then((t) => Pe(e, t, n, i)).catch((e) => Oe(e, r, t))
        : e(o);
    } else e(t);
  }
  var $e = "x-";
  function He(e = "") {
    return $e + e;
  }
  var Re = {};
  function Ne(e, t) {
    Re[e] = t;
  }
  function ze(e, t, n) {
    if (((t = Array.from(t)), e._x_virtualDirectives)) {
      let n = Object.entries(e._x_virtualDirectives).map(([e, t]) => ({
          name: e,
          value: t,
        })),
        i = De(n);
      (n = n.map((e) =>
        i.find((t) => t.name === e.name)
          ? { name: `x-bind:${e.name}`, value: `"${e.value}"` }
          : e
      )),
        (t = t.concat(n));
    }
    let i = {},
      r = t
        .map(Ve((e, t) => (i[e] = t)))
        .filter(Ue)
        .map(
          (function (e, t) {
            return ({ name: n, value: i }) => {
              let r = n.match(Ye()),
                o = n.match(/:([a-zA-Z0-9\-:]+)/),
                s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                a = t || e[n] || n;
              return {
                type: r ? r[1] : null,
                value: o ? o[1] : null,
                modifiers: s.map((e) => e.replace(".", "")),
                expression: i,
                original: a,
              };
            };
          })(i, n)
        )
        .sort(Je);
    return r.map((t) =>
      (function (e, t) {
        let n = () => {},
          i = Re[t.type] || n,
          [r, o] = Be(e);
        !(function (e, t, n) {
          e._x_attributeCleanups || (e._x_attributeCleanups = {}),
            e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
            e._x_attributeCleanups[t].push(n);
        })(e, t.original, o);
        let s = () => {
          e._x_ignore ||
            e._x_ignoreSelf ||
            (i.inline && i.inline(e, t, r),
            (i = i.bind(i, e, t, r)),
            Ie ? We.get(qe).push(i) : i());
        };
        return (s.runCleanups = o), s;
      })(e, t)
    );
  }
  function De(e) {
    return Array.from(e)
      .map(Ve())
      .filter((e) => !Ue(e));
  }
  var Ie = !1,
    We = new Map(),
    qe = Symbol();
  function Be(e) {
    let t = [],
      [n, i] = (function (e) {
        let t = () => {};
        return [
          (n) => {
            let i = q(n);
            return (
              e._x_effects ||
                ((e._x_effects = new Set()),
                (e._x_runEffects = () => {
                  e._x_effects.forEach((e) => e());
                })),
              e._x_effects.add(i),
              (t = () => {
                void 0 !== i && (e._x_effects.delete(i), B(i));
              }),
              i
            );
          },
          () => {
            t();
          },
        ];
      })(e);
    t.push(i);
    return [
      {
        Alpine: Ht,
        effect: n,
        cleanup: (e) => t.push(e),
        evaluateLater: je.bind(je, e),
        evaluate: Ce.bind(Ce, e),
      },
      () => t.forEach((e) => e()),
    ];
  }
  var Fe =
    (e, t) =>
    ({ name: n, value: i }) => (
      n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: i }
    );
  function Ve(e = () => {}) {
    return ({ name: t, value: n }) => {
      let { name: i, value: r } = Ke.reduce((e, t) => t(e), {
        name: t,
        value: n,
      });
      return i !== t && e(i, t), { name: i, value: r };
    };
  }
  var Ke = [];
  function Ge(e) {
    Ke.push(e);
  }
  function Ue({ name: e }) {
    return Ye().test(e);
  }
  var Ye = () => new RegExp(`^${$e}([^:^.]+)\\b`);
  var Ze = "DEFAULT",
    Xe = [
      "ignore",
      "ref",
      "data",
      "id",
      "tabs",
      "radio",
      "switch",
      "disclosure",
      "bind",
      "init",
      "for",
      "mask",
      "model",
      "modelable",
      "transition",
      "show",
      "if",
      Ze,
      "teleport",
    ];
  function Je(e, t) {
    let n = -1 === Xe.indexOf(e.type) ? Ze : e.type,
      i = -1 === Xe.indexOf(t.type) ? Ze : t.type;
    return Xe.indexOf(n) - Xe.indexOf(i);
  }
  function Qe(e, t, n = {}) {
    e.dispatchEvent(
      new CustomEvent(t, {
        detail: n,
        bubbles: !0,
        composed: !0,
        cancelable: !0,
      })
    );
  }
  var et = [],
    tt = !1;
  function nt(e = () => {}) {
    return (
      queueMicrotask(() => {
        tt ||
          setTimeout(() => {
            it();
          });
      }),
      new Promise((t) => {
        et.push(() => {
          e(), t();
        });
      })
    );
  }
  function it() {
    for (tt = !1; et.length; ) et.shift()();
  }
  function rt(e, t) {
    if ("function" == typeof ShadowRoot && e instanceof ShadowRoot)
      return void Array.from(e.children).forEach((e) => rt(e, t));
    let n = !1;
    if ((t(e, () => (n = !0)), n)) return;
    let i = e.firstElementChild;
    for (; i; ) rt(i, t), (i = i.nextElementSibling);
  }
  function ot(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t);
  }
  var st = [],
    at = [];
  function ut() {
    return st.map((e) => e());
  }
  function lt() {
    return st.concat(at).map((e) => e());
  }
  function ct(e) {
    st.push(e);
  }
  function ft(e) {
    at.push(e);
  }
  function dt(e, t = !1) {
    return pt(e, (e) => {
      if ((t ? lt() : ut()).some((t) => e.matches(t))) return !0;
    });
  }
  function pt(e, t) {
    if (e) {
      if (t(e)) return e;
      if ((e._x_teleportBack && (e = e._x_teleportBack), e.parentElement))
        return pt(e.parentElement, t);
    }
  }
  function ht(e, t = rt) {
    !(function (e) {
      Ie = !0;
      let t = Symbol();
      (qe = t), We.set(t, []);
      let n = () => {
        for (; We.get(t).length; ) We.get(t).shift()();
        We.delete(t);
      };
      e(n), (Ie = !1), n();
    })(() => {
      t(e, (e, t) => {
        ze(e, e.attributes).forEach((e) => e()), e._x_ignore && t();
      });
    });
  }
  function vt(e, t) {
    return Array.isArray(t)
      ? mt(e, t.join(" "))
      : "object" == typeof t && null !== t
      ? (function (e, t) {
          let n = (e) => e.split(" ").filter(Boolean),
            i = Object.entries(t)
              .flatMap(([e, t]) => !!t && n(e))
              .filter(Boolean),
            r = Object.entries(t)
              .flatMap(([e, t]) => !t && n(e))
              .filter(Boolean),
            o = [],
            s = [];
          return (
            r.forEach((t) => {
              e.classList.contains(t) && (e.classList.remove(t), s.push(t));
            }),
            i.forEach((t) => {
              e.classList.contains(t) || (e.classList.add(t), o.push(t));
            }),
            () => {
              s.forEach((t) => e.classList.add(t)),
                o.forEach((t) => e.classList.remove(t));
            }
          );
        })(e, t)
      : "function" == typeof t
      ? vt(e, t())
      : mt(e, t);
  }
  function mt(e, t) {
    return (
      (t = !0 === t ? (t = "") : t || ""),
      (n = t
        .split(" ")
        .filter((t) => !e.classList.contains(t))
        .filter(Boolean)),
      e.classList.add(...n),
      () => {
        e.classList.remove(...n);
      }
    );
    var n;
  }
  function _t(e, t) {
    return "object" == typeof t && null !== t
      ? (function (e, t) {
          let n = {};
          return (
            Object.entries(t).forEach(([t, i]) => {
              (n[t] = e.style[t]),
                t.startsWith("--") ||
                  (t = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
                e.style.setProperty(t, i);
            }),
            setTimeout(() => {
              0 === e.style.length && e.removeAttribute("style");
            }),
            () => {
              _t(e, n);
            }
          );
        })(e, t)
      : (function (e, t) {
          let n = e.getAttribute("style", t);
          return (
            e.setAttribute("style", t),
            () => {
              e.setAttribute("style", n || "");
            }
          );
        })(e, t);
  }
  function gt(e, t = () => {}) {
    let n = !1;
    return function () {
      n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
    };
  }
  function yt(e, t, n = {}) {
    e._x_transition ||
      (e._x_transition = {
        enter: { during: n, start: n, end: n },
        leave: { during: n, start: n, end: n },
        in(n = () => {}, i = () => {}) {
          xt(
            e,
            t,
            {
              during: this.enter.during,
              start: this.enter.start,
              end: this.enter.end,
            },
            n,
            i
          );
        },
        out(n = () => {}, i = () => {}) {
          xt(
            e,
            t,
            {
              during: this.leave.during,
              start: this.leave.start,
              end: this.leave.end,
            },
            n,
            i
          );
        },
      });
  }
  function bt(e) {
    let t = e.parentNode;
    if (t) return t._x_hidePromise ? t : bt(t);
  }
  function xt(
    e,
    t,
    { during: n, start: i, end: r } = {},
    o = () => {},
    s = () => {}
  ) {
    if (
      (e._x_transitioning && e._x_transitioning.cancel(),
      0 === Object.keys(n).length &&
        0 === Object.keys(i).length &&
        0 === Object.keys(r).length)
    )
      return o(), void s();
    let a, u, l;
    !(function (e, t) {
      let n,
        i,
        r,
        o = gt(() => {
          ce(() => {
            (n = !0),
              i || t.before(),
              r || (t.end(), it()),
              t.after(),
              e.isConnected && t.cleanup(),
              delete e._x_transitioning;
          });
        });
      (e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(e) {
          this.beforeCancels.push(e);
        },
        cancel: gt(function () {
          for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
          o();
        }),
        finish: o,
      }),
        ce(() => {
          t.start(), t.during();
        }),
        (tt = !0),
        requestAnimationFrame(() => {
          if (n) return;
          let o =
              1e3 *
              Number(
                getComputedStyle(e)
                  .transitionDuration.replace(/,.*/, "")
                  .replace("s", "")
              ),
            s =
              1e3 *
              Number(
                getComputedStyle(e)
                  .transitionDelay.replace(/,.*/, "")
                  .replace("s", "")
              );
          0 === o &&
            (o =
              1e3 *
              Number(getComputedStyle(e).animationDuration.replace("s", ""))),
            ce(() => {
              t.before();
            }),
            (i = !0),
            requestAnimationFrame(() => {
              n ||
                (ce(() => {
                  t.end();
                }),
                it(),
                setTimeout(e._x_transitioning.finish, o + s),
                (r = !0));
            });
        });
    })(e, {
      start() {
        a = t(e, i);
      },
      during() {
        u = t(e, n);
      },
      before: o,
      end() {
        a(), (l = t(e, r));
      },
      after: s,
      cleanup() {
        u(), l();
      },
    });
  }
  function wt(e, t, n) {
    if (-1 === e.indexOf(t)) return n;
    const i = e[e.indexOf(t) + 1];
    if (!i) return n;
    if ("scale" === t && isNaN(i)) return n;
    if ("duration" === t) {
      let e = i.match(/([0-9]+)ms/);
      if (e) return e[1];
    }
    return "origin" === t &&
      ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
      ? [i, e[e.indexOf(t) + 2]].join(" ")
      : i;
  }
  Ne(
    "transition",
    (e, { value: t, modifiers: n, expression: i }, { evaluate: r }) => {
      "function" == typeof i && (i = r(i)),
        i
          ? (function (e, t, n) {
              yt(e, vt, "");
              let i = {
                enter: (t) => {
                  e._x_transition.enter.during = t;
                },
                "enter-start": (t) => {
                  e._x_transition.enter.start = t;
                },
                "enter-end": (t) => {
                  e._x_transition.enter.end = t;
                },
                leave: (t) => {
                  e._x_transition.leave.during = t;
                },
                "leave-start": (t) => {
                  e._x_transition.leave.start = t;
                },
                "leave-end": (t) => {
                  e._x_transition.leave.end = t;
                },
              };
              i[n](t);
            })(e, i, t)
          : (function (e, t, n) {
              yt(e, _t);
              let i = !t.includes("in") && !t.includes("out") && !n,
                r = i || t.includes("in") || ["enter"].includes(n),
                o = i || t.includes("out") || ["leave"].includes(n);
              t.includes("in") &&
                !i &&
                (t = t.filter((e, n) => n < t.indexOf("out")));
              t.includes("out") &&
                !i &&
                (t = t.filter((e, n) => n > t.indexOf("out")));
              let s = !t.includes("opacity") && !t.includes("scale"),
                a = s || t.includes("opacity"),
                u = s || t.includes("scale"),
                l = a ? 0 : 1,
                c = u ? wt(t, "scale", 95) / 100 : 1,
                f = wt(t, "delay", 0),
                d = wt(t, "origin", "center"),
                p = "opacity, transform",
                h = wt(t, "duration", 150) / 1e3,
                v = wt(t, "duration", 75) / 1e3,
                m = "cubic-bezier(0.4, 0.0, 0.2, 1)";
              r &&
                ((e._x_transition.enter.during = {
                  transformOrigin: d,
                  transitionDelay: f,
                  transitionProperty: p,
                  transitionDuration: `${h}s`,
                  transitionTimingFunction: m,
                }),
                (e._x_transition.enter.start = {
                  opacity: l,
                  transform: `scale(${c})`,
                }),
                (e._x_transition.enter.end = {
                  opacity: 1,
                  transform: "scale(1)",
                }));
              o &&
                ((e._x_transition.leave.during = {
                  transformOrigin: d,
                  transitionDelay: f,
                  transitionProperty: p,
                  transitionDuration: `${v}s`,
                  transitionTimingFunction: m,
                }),
                (e._x_transition.leave.start = {
                  opacity: 1,
                  transform: "scale(1)",
                }),
                (e._x_transition.leave.end = {
                  opacity: l,
                  transform: `scale(${c})`,
                }));
            })(e, n, t);
    }
  ),
    (window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
      e,
      t,
      n,
      i
    ) {
      const r =
        "visible" === document.visibilityState
          ? requestAnimationFrame
          : setTimeout;
      let o = () => r(n);
      t
        ? e._x_transition && (e._x_transition.enter || e._x_transition.leave)
          ? e._x_transition.enter &&
            (Object.entries(e._x_transition.enter.during).length ||
              Object.entries(e._x_transition.enter.start).length ||
              Object.entries(e._x_transition.enter.end).length)
            ? e._x_transition.in(n)
            : o()
          : e._x_transition
          ? e._x_transition.in(n)
          : o()
        : ((e._x_hidePromise = e._x_transition
            ? new Promise((t, n) => {
                e._x_transition.out(
                  () => {},
                  () => t(i)
                ),
                  e._x_transitioning.beforeCancel(() =>
                    n({ isFromCancelledTransition: !0 })
                  );
              })
            : Promise.resolve(i)),
          queueMicrotask(() => {
            let t = bt(e);
            t
              ? (t._x_hideChildren || (t._x_hideChildren = []),
                t._x_hideChildren.push(e))
              : r(() => {
                  let t = (e) => {
                    let n = Promise.all([
                      e._x_hidePromise,
                      ...(e._x_hideChildren || []).map(t),
                    ]).then(([e]) => e());
                    return delete e._x_hidePromise, delete e._x_hideChildren, n;
                  };
                  t(e).catch((e) => {
                    if (!e.isFromCancelledTransition) throw e;
                  });
                });
          }));
    });
  var kt = !1;
  function St(e, t = () => {}) {
    return (...n) => (kt ? t(...n) : e(...n));
  }
  function Et(e, t, n, i = []) {
    switch (
      (e._x_bindings || (e._x_bindings = W({})),
      (e._x_bindings[t] = n),
      (t = i.includes("camel")
        ? t.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase())
        : t))
    ) {
      case "value":
        !(function (e, t) {
          if ("radio" === e.type)
            void 0 === e.attributes.value && (e.value = t),
              window.fromModel && (e.checked = Ot(e.value, t));
          else if ("checkbox" === e.type)
            Number.isInteger(t)
              ? (e.value = t)
              : Number.isInteger(t) ||
                Array.isArray(t) ||
                "boolean" == typeof t ||
                [null, void 0].includes(t)
              ? Array.isArray(t)
                ? (e.checked = t.some((t) => Ot(t, e.value)))
                : (e.checked = !!t)
              : (e.value = String(t));
          else if ("SELECT" === e.tagName)
            !(function (e, t) {
              const n = [].concat(t).map((e) => e + "");
              Array.from(e.options).forEach((e) => {
                e.selected = n.includes(e.value);
              });
            })(e, t);
          else {
            if (e.value === t) return;
            e.value = t;
          }
        })(e, n);
        break;
      case "style":
        !(function (e, t) {
          e._x_undoAddedStyles && e._x_undoAddedStyles();
          e._x_undoAddedStyles = _t(e, t);
        })(e, n);
        break;
      case "class":
        !(function (e, t) {
          e._x_undoAddedClasses && e._x_undoAddedClasses();
          e._x_undoAddedClasses = vt(e, t);
        })(e, n);
        break;
      default:
        !(function (e, t, n) {
          [null, void 0, !1].includes(n) &&
          (function (e) {
            return ![
              "aria-pressed",
              "aria-checked",
              "aria-expanded",
              "aria-selected",
            ].includes(e);
          })(t)
            ? e.removeAttribute(t)
            : (At(t) && (n = t),
              (function (e, t, n) {
                e.getAttribute(t) != n && e.setAttribute(t, n);
              })(e, t, n));
        })(e, t, n);
    }
  }
  function Ot(e, t) {
    return e == t;
  }
  function At(e) {
    return [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule",
    ].includes(e);
  }
  function Ct(e, t) {
    var n;
    return function () {
      var i = this,
        r = arguments;
      clearTimeout(n),
        (n = setTimeout(function () {
          (n = null), e.apply(i, r);
        }, t));
    };
  }
  function jt(e, t) {
    let n;
    return function () {
      let i = this,
        r = arguments;
      n || (e.apply(i, r), (n = !0), setTimeout(() => (n = !1), t));
    };
  }
  var Tt = {},
    Mt = !1;
  var Lt = {};
  function Pt(e, t, n) {
    let i = [];
    for (; i.length; ) i.pop()();
    let r = Object.entries(t).map(([e, t]) => ({ name: e, value: t })),
      o = De(r);
    (r = r.map((e) =>
      o.find((t) => t.name === e.name)
        ? { name: `x-bind:${e.name}`, value: `"${e.value}"` }
        : e
    )),
      ze(e, r, n).map((e) => {
        i.push(e.runCleanups), e();
      });
  }
  var $t = {};
  var Ht = {
    get reactive() {
      return W;
    },
    get release() {
      return B;
    },
    get effect() {
      return q;
    },
    get raw() {
      return F;
    },
    version: "3.10.4",
    flushAndStopDeferringMutations: function () {
      (fe = !1), pe(de), (de = []);
    },
    dontAutoEvaluateFunctions: function (e) {
      let t = Ae;
      (Ae = !1), e(), (Ae = t);
    },
    disableEffectScheduling: function (e) {
      (X = !1), e(), (X = !0);
    },
    setReactivityEngine: function (e) {
      (W = e.reactive),
        (B = e.release),
        (q = (t) =>
          e.effect(t, {
            scheduler: (e) => {
              X ? U(e) : e();
            },
          })),
        (F = e.raw);
    },
    closestDataStack: _e,
    skipDuringClone: St,
    addRootSelector: ct,
    addInitSelector: ft,
    addScopeToNode: ve,
    deferMutations: function () {
      fe = !0;
    },
    mapAttributes: Ge,
    evaluateLater: je,
    setEvaluator: function (e) {
      Te = e;
    },
    mergeProxies: ge,
    findClosest: pt,
    closestRoot: dt,
    interceptor: be,
    transition: xt,
    setStyles: _t,
    mutateDom: ce,
    directive: Ne,
    throttle: jt,
    debounce: Ct,
    evaluate: Ce,
    initTree: ht,
    nextTick: nt,
    prefixed: He,
    prefix: function (e) {
      $e = e;
    },
    plugin: function (e) {
      e(Ht);
    },
    magic: ke,
    store: function (e, t) {
      if ((Mt || ((Tt = W(Tt)), (Mt = !0)), void 0 === t)) return Tt[e];
      (Tt[e] = t),
        "object" == typeof t &&
          null !== t &&
          t.hasOwnProperty("init") &&
          "function" == typeof t.init &&
          Tt[e].init(),
        ye(Tt[e]);
    },
    start: function () {
      var e;
      document.body ||
        ot(
          "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
        ),
        Qe(document, "alpine:init"),
        Qe(document, "alpine:initializing"),
        se(),
        (e = (e) => ht(e, rt)),
        te.push(e),
        ne((e) => {
          rt(e, (e) => ie(e));
        }),
        (function (e) {
          Q.push(e);
        })((e, t) => {
          ze(e, t).forEach((e) => e());
        }),
        Array.from(document.querySelectorAll(lt()))
          .filter((e) => !dt(e.parentElement, !0))
          .forEach((e) => {
            ht(e);
          }),
        Qe(document, "alpine:initialized");
    },
    clone: function (e, t) {
      t._x_dataStack || (t._x_dataStack = e._x_dataStack),
        (kt = !0),
        (function (e) {
          let t = q;
          J((e, n) => {
            let i = t(e);
            return B(i), () => {};
          }),
            e(),
            J(t);
        })(() => {
          !(function (e) {
            let t = !1;
            ht(e, (e, n) => {
              rt(e, (e, i) => {
                if (
                  t &&
                  (function (e) {
                    return ut().some((t) => e.matches(t));
                  })(e)
                )
                  return i();
                (t = !0), n(e, i);
              });
            });
          })(t);
        }),
        (kt = !1);
    },
    bound: function (e, t, n) {
      if (e._x_bindings && void 0 !== e._x_bindings[t]) return e._x_bindings[t];
      let i = e.getAttribute(t);
      return null === i
        ? "function" == typeof n
          ? n()
          : n
        : "" === i || (At(t) ? !![t, "true"].includes(i) : i);
    },
    $data: he,
    data: function (e, t) {
      $t[e] = t;
    },
    bind: function (e, t) {
      let n = "function" != typeof t ? () => t : t;
      e instanceof Element ? Pt(e, n()) : (Lt[e] = n);
    },
  };
  function Rt(e, t) {
    const n = Object.create(null),
      i = e.split(",");
    for (let e = 0; e < i.length; e++) n[i[e]] = !0;
    return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
  }
  var Nt,
    zt = Object.freeze({}),
    Dt = (Object.freeze([]), Object.assign),
    It = Object.prototype.hasOwnProperty,
    Wt = (e, t) => It.call(e, t),
    qt = Array.isArray,
    Bt = (e) => "[object Map]" === Gt(e),
    Ft = (e) => "symbol" == typeof e,
    Vt = (e) => null !== e && "object" == typeof e,
    Kt = Object.prototype.toString,
    Gt = (e) => Kt.call(e),
    Ut = (e) => Gt(e).slice(8, -1),
    Yt = (e) =>
      "string" == typeof e &&
      "NaN" !== e &&
      "-" !== e[0] &&
      "" + parseInt(e, 10) === e,
    Zt = (e) => {
      const t = Object.create(null);
      return (n) => t[n] || (t[n] = e(n));
    },
    Xt = /-(\w)/g,
    Jt =
      (Zt((e) => e.replace(Xt, (e, t) => (t ? t.toUpperCase() : ""))),
      /\B([A-Z])/g),
    Qt =
      (Zt((e) => e.replace(Jt, "-$1").toLowerCase()),
      Zt((e) => e.charAt(0).toUpperCase() + e.slice(1))),
    en =
      (Zt((e) => (e ? `on${Qt(e)}` : "")),
      (e, t) => e !== t && (e == e || t == t)),
    tn = new WeakMap(),
    nn = [],
    rn = Symbol("iterate"),
    on = Symbol("Map key iterate");
  var sn = 0;
  function an(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++) t[n].delete(e);
      t.length = 0;
    }
  }
  var un = !0,
    ln = [];
  function cn() {
    const e = ln.pop();
    un = void 0 === e || e;
  }
  function fn(e, t, n) {
    if (!un || void 0 === Nt) return;
    let i = tn.get(e);
    i || tn.set(e, (i = new Map()));
    let r = i.get(n);
    r || i.set(n, (r = new Set())),
      r.has(Nt) ||
        (r.add(Nt),
        Nt.deps.push(r),
        Nt.options.onTrack &&
          Nt.options.onTrack({ effect: Nt, target: e, type: t, key: n }));
  }
  function dn(e, t, n, i, r, o) {
    const s = tn.get(e);
    if (!s) return;
    const a = new Set(),
      u = (e) => {
        e &&
          e.forEach((e) => {
            (e !== Nt || e.allowRecurse) && a.add(e);
          });
      };
    if ("clear" === t) s.forEach(u);
    else if ("length" === n && qt(e))
      s.forEach((e, t) => {
        ("length" === t || t >= i) && u(e);
      });
    else
      switch ((void 0 !== n && u(s.get(n)), t)) {
        case "add":
          qt(e)
            ? Yt(n) && u(s.get("length"))
            : (u(s.get(rn)), Bt(e) && u(s.get(on)));
          break;
        case "delete":
          qt(e) || (u(s.get(rn)), Bt(e) && u(s.get(on)));
          break;
        case "set":
          Bt(e) && u(s.get(rn));
      }
    a.forEach((s) => {
      s.options.onTrigger &&
        s.options.onTrigger({
          effect: s,
          target: e,
          key: n,
          type: t,
          newValue: i,
          oldValue: r,
          oldTarget: o,
        }),
        s.options.scheduler ? s.options.scheduler(s) : s();
    });
  }
  var pn = Rt("__proto__,__v_isRef,__isVue"),
    hn = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map((e) => Symbol[e])
        .filter(Ft)
    ),
    vn = bn(),
    mn = bn(!1, !0),
    _n = bn(!0),
    gn = bn(!0, !0),
    yn = {};
  function bn(e = !1, t = !1) {
    return function (n, i, r) {
      if ("__v_isReactive" === i) return !e;
      if ("__v_isReadonly" === i) return e;
      if ("__v_raw" === i && r === (e ? (t ? Yn : Un) : t ? Gn : Kn).get(n))
        return n;
      const o = qt(n);
      if (!e && o && Wt(yn, i)) return Reflect.get(yn, i, r);
      const s = Reflect.get(n, i, r);
      if (Ft(i) ? hn.has(i) : pn(i)) return s;
      if ((e || fn(n, "get", i), t)) return s;
      if (ei(s)) {
        return !o || !Yt(i) ? s.value : s;
      }
      return Vt(s) ? (e ? Xn(s) : Zn(s)) : s;
    };
  }
  function xn(e = !1) {
    return function (t, n, i, r) {
      let o = t[n];
      if (!e && ((i = Qn(i)), (o = Qn(o)), !qt(t) && ei(o) && !ei(i)))
        return (o.value = i), !0;
      const s = qt(t) && Yt(n) ? Number(n) < t.length : Wt(t, n),
        a = Reflect.set(t, n, i, r);
      return (
        t === Qn(r) &&
          (s ? en(i, o) && dn(t, "set", n, i, o) : dn(t, "add", n, i)),
        a
      );
    };
  }
  ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    const t = Array.prototype[e];
    yn[e] = function (...e) {
      const n = Qn(this);
      for (let e = 0, t = this.length; e < t; e++) fn(n, "get", e + "");
      const i = t.apply(n, e);
      return -1 === i || !1 === i ? t.apply(n, e.map(Qn)) : i;
    };
  }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      const t = Array.prototype[e];
      yn[e] = function (...e) {
        ln.push(un), (un = !1);
        const n = t.apply(this, e);
        return cn(), n;
      };
    });
  var wn = {
      get: vn,
      set: xn(),
      deleteProperty: function (e, t) {
        const n = Wt(e, t),
          i = e[t],
          r = Reflect.deleteProperty(e, t);
        return r && n && dn(e, "delete", t, void 0, i), r;
      },
      has: function (e, t) {
        const n = Reflect.has(e, t);
        return (Ft(t) && hn.has(t)) || fn(e, "has", t), n;
      },
      ownKeys: function (e) {
        return fn(e, "iterate", qt(e) ? "length" : rn), Reflect.ownKeys(e);
      },
    },
    kn = {
      get: _n,
      set: (e, t) => (
        console.warn(
          `Set operation on key "${String(t)}" failed: target is readonly.`,
          e
        ),
        !0
      ),
      deleteProperty: (e, t) => (
        console.warn(
          `Delete operation on key "${String(t)}" failed: target is readonly.`,
          e
        ),
        !0
      ),
    },
    Sn =
      (Dt({}, wn, { get: mn, set: xn(!0) }),
      Dt({}, kn, { get: gn }),
      (e) => (Vt(e) ? Zn(e) : e)),
    En = (e) => (Vt(e) ? Xn(e) : e),
    On = (e) => e,
    An = (e) => Reflect.getPrototypeOf(e);
  function Cn(e, t, n = !1, i = !1) {
    const r = Qn((e = e.__v_raw)),
      o = Qn(t);
    t !== o && !n && fn(r, "get", t), !n && fn(r, "get", o);
    const { has: s } = An(r),
      a = i ? On : n ? En : Sn;
    return s.call(r, t)
      ? a(e.get(t))
      : s.call(r, o)
      ? a(e.get(o))
      : void (e !== r && e.get(t));
  }
  function jn(e, t = !1) {
    const n = this.__v_raw,
      i = Qn(n),
      r = Qn(e);
    return (
      e !== r && !t && fn(i, "has", e),
      !t && fn(i, "has", r),
      e === r ? n.has(e) : n.has(e) || n.has(r)
    );
  }
  function Tn(e, t = !1) {
    return (
      (e = e.__v_raw), !t && fn(Qn(e), "iterate", rn), Reflect.get(e, "size", e)
    );
  }
  function Mn(e) {
    e = Qn(e);
    const t = Qn(this);
    return An(t).has.call(t, e) || (t.add(e), dn(t, "add", e, e)), this;
  }
  function Ln(e, t) {
    t = Qn(t);
    const n = Qn(this),
      { has: i, get: r } = An(n);
    let o = i.call(n, e);
    o ? Vn(n, i, e) : ((e = Qn(e)), (o = i.call(n, e)));
    const s = r.call(n, e);
    return (
      n.set(e, t),
      o ? en(t, s) && dn(n, "set", e, t, s) : dn(n, "add", e, t),
      this
    );
  }
  function Pn(e) {
    const t = Qn(this),
      { has: n, get: i } = An(t);
    let r = n.call(t, e);
    r ? Vn(t, n, e) : ((e = Qn(e)), (r = n.call(t, e)));
    const o = i ? i.call(t, e) : void 0,
      s = t.delete(e);
    return r && dn(t, "delete", e, void 0, o), s;
  }
  function $n() {
    const e = Qn(this),
      t = 0 !== e.size,
      n = Bt(e) ? new Map(e) : new Set(e),
      i = e.clear();
    return t && dn(e, "clear", void 0, void 0, n), i;
  }
  function Hn(e, t) {
    return function (n, i) {
      const r = this,
        o = r.__v_raw,
        s = Qn(o),
        a = t ? On : e ? En : Sn;
      return (
        !e && fn(s, "iterate", rn),
        o.forEach((e, t) => n.call(i, a(e), a(t), r))
      );
    };
  }
  function Rn(e, t, n) {
    return function (...i) {
      const r = this.__v_raw,
        o = Qn(r),
        s = Bt(o),
        a = "entries" === e || (e === Symbol.iterator && s),
        u = "keys" === e && s,
        l = r[e](...i),
        c = n ? On : t ? En : Sn;
      return (
        !t && fn(o, "iterate", u ? on : rn),
        {
          next() {
            const { value: e, done: t } = l.next();
            return t
              ? { value: e, done: t }
              : { value: a ? [c(e[0]), c(e[1])] : c(e), done: t };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function Nn(e) {
    return function (...t) {
      {
        const n = t[0] ? `on key "${t[0]}" ` : "";
        console.warn(
          `${Qt(e)} operation ${n}failed: target is readonly.`,
          Qn(this)
        );
      }
      return "delete" !== e && this;
    };
  }
  var zn = {
      get(e) {
        return Cn(this, e);
      },
      get size() {
        return Tn(this);
      },
      has: jn,
      add: Mn,
      set: Ln,
      delete: Pn,
      clear: $n,
      forEach: Hn(!1, !1),
    },
    Dn = {
      get(e) {
        return Cn(this, e, !1, !0);
      },
      get size() {
        return Tn(this);
      },
      has: jn,
      add: Mn,
      set: Ln,
      delete: Pn,
      clear: $n,
      forEach: Hn(!1, !0),
    },
    In = {
      get(e) {
        return Cn(this, e, !0);
      },
      get size() {
        return Tn(this, !0);
      },
      has(e) {
        return jn.call(this, e, !0);
      },
      add: Nn("add"),
      set: Nn("set"),
      delete: Nn("delete"),
      clear: Nn("clear"),
      forEach: Hn(!0, !1),
    },
    Wn = {
      get(e) {
        return Cn(this, e, !0, !0);
      },
      get size() {
        return Tn(this, !0);
      },
      has(e) {
        return jn.call(this, e, !0);
      },
      add: Nn("add"),
      set: Nn("set"),
      delete: Nn("delete"),
      clear: Nn("clear"),
      forEach: Hn(!0, !0),
    };
  function qn(e, t) {
    const n = t ? (e ? Wn : Dn) : e ? In : zn;
    return (t, i, r) =>
      "__v_isReactive" === i
        ? !e
        : "__v_isReadonly" === i
        ? e
        : "__v_raw" === i
        ? t
        : Reflect.get(Wt(n, i) && i in t ? n : t, i, r);
  }
  ["keys", "values", "entries", Symbol.iterator].forEach((e) => {
    (zn[e] = Rn(e, !1, !1)),
      (In[e] = Rn(e, !0, !1)),
      (Dn[e] = Rn(e, !1, !0)),
      (Wn[e] = Rn(e, !0, !0));
  });
  var Bn = { get: qn(!1, !1) },
    Fn = (qn(!1, !0), { get: qn(!0, !1) });
  qn(!0, !0);
  function Vn(e, t, n) {
    const i = Qn(n);
    if (i !== n && t.call(e, i)) {
      const t = Ut(e);
      console.warn(
        `Reactive ${t} contains both the raw and reactive versions of the same object${
          "Map" === t ? " as keys" : ""
        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var Kn = new WeakMap(),
    Gn = new WeakMap(),
    Un = new WeakMap(),
    Yn = new WeakMap();
  function Zn(e) {
    return e && e.__v_isReadonly ? e : Jn(e, !1, wn, Bn, Kn);
  }
  function Xn(e) {
    return Jn(e, !0, kn, Fn, Un);
  }
  function Jn(e, t, n, i, r) {
    if (!Vt(e))
      return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
    const o = r.get(e);
    if (o) return o;
    const s =
      (a = e).__v_skip || !Object.isExtensible(a)
        ? 0
        : (function (e) {
            switch (e) {
              case "Object":
              case "Array":
                return 1;
              case "Map":
              case "Set":
              case "WeakMap":
              case "WeakSet":
                return 2;
              default:
                return 0;
            }
          })(Ut(a));
    var a;
    if (0 === s) return e;
    const u = new Proxy(e, 2 === s ? i : n);
    return r.set(e, u), u;
  }
  function Qn(e) {
    return (e && Qn(e.__v_raw)) || e;
  }
  function ei(e) {
    return Boolean(e && !0 === e.__v_isRef);
  }
  ke("nextTick", () => nt),
    ke("dispatch", (e) => Qe.bind(Qe, e)),
    ke("watch", (e, { evaluateLater: t, effect: n }) => (i, r) => {
      let o,
        s = t(i),
        a = !0,
        u = n(() =>
          s((e) => {
            JSON.stringify(e),
              a
                ? (o = e)
                : queueMicrotask(() => {
                    r(e, o), (o = e);
                  }),
              (a = !1);
          })
        );
      e._x_effects.delete(u);
    }),
    ke("store", function () {
      return Tt;
    }),
    ke("data", (e) => he(e)),
    ke("root", (e) => dt(e)),
    ke(
      "refs",
      (e) => (
        e._x_refs_proxy ||
          (e._x_refs_proxy = ge(
            (function (e) {
              let t = [],
                n = e;
              for (; n; ) n._x_refs && t.push(n._x_refs), (n = n.parentNode);
              return t;
            })(e)
          )),
        e._x_refs_proxy
      )
    );
  var ti = {};
  function ni(e) {
    return ti[e] || (ti[e] = 0), ++ti[e];
  }
  function ii(e, t, n) {
    ke(t, (t) =>
      ot(
        `You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
        t
      )
    );
  }
  ke("id", (e) => (t, n = null) => {
    let i = (function (e, t) {
        return pt(e, (e) => {
          if (e._x_ids && e._x_ids[t]) return !0;
        });
      })(e, t),
      r = i ? i._x_ids[t] : ni(t);
    return n ? `${t}-${r}-${n}` : `${t}-${r}`;
  }),
    ke("el", (e) => e),
    ii("Focus", "focus", "focus"),
    ii("Persist", "persist", "persist"),
    Ne("modelable", (e, { expression: t }, { effect: n, evaluateLater: i }) => {
      let r = i(t),
        o = () => {
          let e;
          return r((t) => (e = t)), e;
        },
        s = i(`${t} = __placeholder`),
        a = (e) => s(() => {}, { scope: { __placeholder: e } }),
        u = o();
      a(u),
        queueMicrotask(() => {
          if (!e._x_model) return;
          e._x_removeModelListeners.default();
          let t = e._x_model.get,
            i = e._x_model.set;
          n(() => a(t())), n(() => i(o()));
        });
    }),
    Ne("teleport", (e, { expression: t }, { cleanup: n }) => {
      "template" !== e.tagName.toLowerCase() &&
        ot("x-teleport can only be used on a <template> tag", e);
      let i = document.querySelector(t);
      i || ot(`Cannot find x-teleport element for selector: "${t}"`);
      let r = e.content.cloneNode(!0).firstElementChild;
      (e._x_teleport = r),
        (r._x_teleportBack = e),
        e._x_forwardEvents &&
          e._x_forwardEvents.forEach((t) => {
            r.addEventListener(t, (t) => {
              t.stopPropagation(),
                e.dispatchEvent(new t.constructor(t.type, t));
            });
          }),
        ve(r, {}, e),
        ce(() => {
          i.appendChild(r), ht(r), (r._x_ignore = !0);
        }),
        n(() => r.remove());
    });
  var ri = () => {};
  function oi(e, t, n, i) {
    let r = e,
      o = (e) => i(e),
      s = {},
      a = (e, t) => (n) => t(e, n);
    if (
      (n.includes("dot") && (t = t.replace(/-/g, ".")),
      n.includes("camel") &&
        (t = (function (e) {
          return e.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
        })(t)),
      n.includes("passive") && (s.passive = !0),
      n.includes("capture") && (s.capture = !0),
      n.includes("window") && (r = window),
      n.includes("document") && (r = document),
      n.includes("prevent") &&
        (o = a(o, (e, t) => {
          t.preventDefault(), e(t);
        })),
      n.includes("stop") &&
        (o = a(o, (e, t) => {
          t.stopPropagation(), e(t);
        })),
      n.includes("self") &&
        (o = a(o, (t, n) => {
          n.target === e && t(n);
        })),
      (n.includes("away") || n.includes("outside")) &&
        ((r = document),
        (o = a(o, (t, n) => {
          e.contains(n.target) ||
            (!1 !== n.target.isConnected &&
              ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
                (!1 !== e._x_isShown && t(n))));
        }))),
      n.includes("once") &&
        (o = a(o, (e, n) => {
          e(n), r.removeEventListener(t, o, s);
        })),
      (o = a(o, (e, i) => {
        ((function (e) {
          return ["keydown", "keyup"].includes(e);
        })(t) &&
          (function (e, t) {
            let n = t.filter(
              (e) =>
                !["window", "document", "prevent", "stop", "once"].includes(e)
            );
            if (n.includes("debounce")) {
              let e = n.indexOf("debounce");
              n.splice(
                e,
                si((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1
              );
            }
            if (0 === n.length) return !1;
            if (1 === n.length && ai(e.key).includes(n[0])) return !1;
            const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(
              (e) => n.includes(e)
            );
            if (((n = n.filter((e) => !i.includes(e))), i.length > 0)) {
              if (
                i.filter(
                  (t) => (
                    ("cmd" !== t && "super" !== t) || (t = "meta"), e[`${t}Key`]
                  )
                ).length === i.length &&
                ai(e.key).includes(n[0])
              )
                return !1;
            }
            return !0;
          })(i, n)) ||
          e(i);
      })),
      n.includes("debounce"))
    ) {
      let e = n[n.indexOf("debounce") + 1] || "invalid-wait",
        t = si(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
      o = Ct(o, t);
    }
    if (n.includes("throttle")) {
      let e = n[n.indexOf("throttle") + 1] || "invalid-wait",
        t = si(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
      o = jt(o, t);
    }
    return (
      r.addEventListener(t, o, s),
      () => {
        r.removeEventListener(t, o, s);
      }
    );
  }
  function si(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function ai(e) {
    if (!e) return [];
    e = e
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[_\s]/, "-")
      .toLowerCase();
    let t = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "=",
    };
    return (
      (t[e] = e),
      Object.keys(t)
        .map((n) => {
          if (t[n] === e) return n;
        })
        .filter((e) => e)
    );
  }
  function ui(e) {
    let t = e ? parseFloat(e) : null;
    return (n = t), Array.isArray(n) || isNaN(n) ? e : t;
    var n;
  }
  function li(e, t, n, i) {
    let r = {};
    if (/^\[.*\]$/.test(e.item) && Array.isArray(t)) {
      e.item
        .replace("[", "")
        .replace("]", "")
        .split(",")
        .map((e) => e.trim())
        .forEach((e, n) => {
          r[e] = t[n];
        });
    } else if (
      /^\{.*\}$/.test(e.item) &&
      !Array.isArray(t) &&
      "object" == typeof t
    ) {
      e.item
        .replace("{", "")
        .replace("}", "")
        .split(",")
        .map((e) => e.trim())
        .forEach((e) => {
          r[e] = t[e];
        });
    } else r[e.item] = t;
    return (
      e.index && (r[e.index] = n), e.collection && (r[e.collection] = i), r
    );
  }
  function ci() {}
  function fi(e, t, n) {
    Ne(t, (i) =>
      ot(
        `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
        i
      )
    );
  }
  (ri.inline = (e, { modifiers: t }, { cleanup: n }) => {
    t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
      n(() => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
      });
  }),
    Ne("ignore", ri),
    Ne("effect", (e, { expression: t }, { effect: n }) => n(je(e, t))),
    Ne(
      "model",
      (e, { modifiers: t, expression: n }, { effect: i, cleanup: r }) => {
        let o = je(e, n),
          s = je(e, `${n} = rightSideOfExpression($event, ${n})`);
        var a =
          "select" === e.tagName.toLowerCase() ||
          ["checkbox", "radio"].includes(e.type) ||
          t.includes("lazy")
            ? "change"
            : "input";
        let u = (function (e, t, n) {
            "radio" === e.type &&
              ce(() => {
                e.hasAttribute("name") || e.setAttribute("name", n);
              });
            return (n, i) =>
              ce(() => {
                if (n instanceof CustomEvent && void 0 !== n.detail)
                  return n.detail || n.target.value;
                if ("checkbox" === e.type) {
                  if (Array.isArray(i)) {
                    let e = t.includes("number")
                      ? ui(n.target.value)
                      : n.target.value;
                    return n.target.checked
                      ? i.concat([e])
                      : i.filter((t) => !(t == e));
                  }
                  return n.target.checked;
                }
                if ("select" === e.tagName.toLowerCase() && e.multiple)
                  return t.includes("number")
                    ? Array.from(n.target.selectedOptions).map((e) =>
                        ui(e.value || e.text)
                      )
                    : Array.from(n.target.selectedOptions).map(
                        (e) => e.value || e.text
                      );
                {
                  let e = n.target.value;
                  return t.includes("number")
                    ? ui(e)
                    : t.includes("trim")
                    ? e.trim()
                    : e;
                }
              });
          })(e, t, n),
          l = oi(e, a, t, (e) => {
            s(() => {}, { scope: { $event: e, rightSideOfExpression: u } });
          });
        e._x_removeModelListeners || (e._x_removeModelListeners = {}),
          (e._x_removeModelListeners.default = l),
          r(() => e._x_removeModelListeners.default());
        let c = je(e, `${n} = __placeholder`);
        (e._x_model = {
          get() {
            let e;
            return o((t) => (e = t)), e;
          },
          set(e) {
            c(() => {}, { scope: { __placeholder: e } });
          },
        }),
          (e._x_forceModelUpdate = () => {
            o((t) => {
              void 0 === t && n.match(/\./) && (t = ""),
                (window.fromModel = !0),
                ce(() => Et(e, "value", t)),
                delete window.fromModel;
            });
          }),
          i(() => {
            (t.includes("unintrusive") &&
              document.activeElement.isSameNode(e)) ||
              e._x_forceModelUpdate();
          });
      }
    ),
    Ne("cloak", (e) =>
      queueMicrotask(() => ce(() => e.removeAttribute(He("cloak"))))
    ),
    ft(() => `[${He("init")}]`),
    Ne(
      "init",
      St((e, { expression: t }, { evaluate: n }) =>
        "string" == typeof t ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)
      )
    ),
    Ne("text", (e, { expression: t }, { effect: n, evaluateLater: i }) => {
      let r = i(t);
      n(() => {
        r((t) => {
          ce(() => {
            e.textContent = t;
          });
        });
      });
    }),
    Ne("html", (e, { expression: t }, { effect: n, evaluateLater: i }) => {
      let r = i(t);
      n(() => {
        r((t) => {
          ce(() => {
            (e.innerHTML = t),
              (e._x_ignoreSelf = !0),
              ht(e),
              delete e._x_ignoreSelf;
          });
        });
      });
    }),
    Ge(Fe(":", He("bind:"))),
    Ne(
      "bind",
      (
        e,
        { value: t, modifiers: n, expression: i, original: r },
        { effect: o }
      ) => {
        if (!t) {
          let t = {};
          return (
            (s = t),
            Object.entries(Lt).forEach(([e, t]) => {
              Object.defineProperty(s, e, {
                get:
                  () =>
                  (...e) =>
                    t(...e),
              });
            }),
            void je(e, i)(
              (t) => {
                Pt(e, t, r);
              },
              { scope: t }
            )
          );
        }
        var s;
        if ("key" === t)
          return (function (e, t) {
            e._x_keyExpression = t;
          })(e, i);
        let a = je(e, i);
        o(() =>
          a((r) => {
            void 0 === r && "string" == typeof i && i.match(/\./) && (r = ""),
              ce(() => Et(e, t, r, n));
          })
        );
      }
    ),
    ct(() => `[${He("data")}]`),
    Ne(
      "data",
      St((e, { expression: t }, { cleanup: n }) => {
        t = "" === t ? "{}" : t;
        let i = {};
        Se(i, e);
        let r = {};
        var o, s;
        (o = r),
          (s = i),
          Object.entries($t).forEach(([e, t]) => {
            Object.defineProperty(o, e, {
              get:
                () =>
                (...e) =>
                  t.bind(s)(...e),
              enumerable: !1,
            });
          });
        let a = Ce(e, t, { scope: r });
        void 0 === a && (a = {}), Se(a, e);
        let u = W(a);
        ye(u);
        let l = ve(e, u);
        u.init && Ce(e, u.init),
          n(() => {
            u.destroy && Ce(e, u.destroy), l();
          });
      })
    ),
    Ne("show", (e, { modifiers: t, expression: n }, { effect: i }) => {
      let r = je(e, n);
      e._x_doHide ||
        (e._x_doHide = () => {
          ce(() => {
            e.style.setProperty(
              "display",
              "none",
              t.includes("important") ? "important" : void 0
            );
          });
        }),
        e._x_doShow ||
          (e._x_doShow = () => {
            ce(() => {
              1 === e.style.length && "none" === e.style.display
                ? e.removeAttribute("style")
                : e.style.removeProperty("display");
            });
          });
      let o,
        s = () => {
          e._x_doHide(), (e._x_isShown = !1);
        },
        a = () => {
          e._x_doShow(), (e._x_isShown = !0);
        },
        u = () => setTimeout(a),
        l = gt(
          (e) => (e ? a() : s()),
          (t) => {
            "function" == typeof e._x_toggleAndCascadeWithTransitions
              ? e._x_toggleAndCascadeWithTransitions(e, t, a, s)
              : t
              ? u()
              : s();
          }
        ),
        c = !0;
      i(() =>
        r((e) => {
          (c || e !== o) &&
            (t.includes("immediate") && (e ? u() : s()),
            l(e),
            (o = e),
            (c = !1));
        })
      );
    }),
    Ne("for", (e, { expression: t }, { effect: n, cleanup: i }) => {
      let r = (function (e) {
          let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
            n = /^\s*\(|\)\s*$/g,
            i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
            r = e.match(i);
          if (!r) return;
          let o = {};
          o.items = r[2].trim();
          let s = r[1].replace(n, "").trim(),
            a = s.match(t);
          a
            ? ((o.item = s.replace(t, "").trim()),
              (o.index = a[1].trim()),
              a[2] && (o.collection = a[2].trim()))
            : (o.item = s);
          return o;
        })(t),
        o = je(e, r.items),
        s = je(e, e._x_keyExpression || "index");
      (e._x_prevKeys = []),
        (e._x_lookup = {}),
        n(() =>
          (function (e, t, n, i) {
            let r = (e) => "object" == typeof e && !Array.isArray(e),
              o = e;
            n((n) => {
              var s;
              (s = n),
                !Array.isArray(s) &&
                  !isNaN(s) &&
                  n >= 0 &&
                  (n = Array.from(Array(n).keys(), (e) => e + 1)),
                void 0 === n && (n = []);
              let a = e._x_lookup,
                u = e._x_prevKeys,
                l = [],
                c = [];
              if (r(n))
                n = Object.entries(n).map(([e, r]) => {
                  let o = li(t, r, e, n);
                  i((e) => c.push(e), { scope: { index: e, ...o } }), l.push(o);
                });
              else
                for (let e = 0; e < n.length; e++) {
                  let r = li(t, n[e], e, n);
                  i((e) => c.push(e), { scope: { index: e, ...r } }), l.push(r);
                }
              let f = [],
                d = [],
                p = [],
                h = [];
              for (let e = 0; e < u.length; e++) {
                let t = u[e];
                -1 === c.indexOf(t) && p.push(t);
              }
              u = u.filter((e) => !p.includes(e));
              let v = "template";
              for (let e = 0; e < c.length; e++) {
                let t = c[e],
                  n = u.indexOf(t);
                if (-1 === n) u.splice(e, 0, t), f.push([v, e]);
                else if (n !== e) {
                  let t = u.splice(e, 1)[0],
                    i = u.splice(n - 1, 1)[0];
                  u.splice(e, 0, i), u.splice(n, 0, t), d.push([t, i]);
                } else h.push(t);
                v = t;
              }
              for (let e = 0; e < p.length; e++) {
                let t = p[e];
                a[t]._x_effects && a[t]._x_effects.forEach(Y),
                  a[t].remove(),
                  (a[t] = null),
                  delete a[t];
              }
              for (let e = 0; e < d.length; e++) {
                let [t, n] = d[e],
                  i = a[t],
                  r = a[n],
                  o = document.createElement("div");
                ce(() => {
                  r.after(o),
                    i.after(r),
                    r._x_currentIfEl && r.after(r._x_currentIfEl),
                    o.before(i),
                    i._x_currentIfEl && i.after(i._x_currentIfEl),
                    o.remove();
                }),
                  me(r, l[c.indexOf(n)]);
              }
              for (let e = 0; e < f.length; e++) {
                let [t, n] = f[e],
                  i = "template" === t ? o : a[t];
                i._x_currentIfEl && (i = i._x_currentIfEl);
                let r = l[n],
                  s = c[n],
                  u = document.importNode(o.content, !0).firstElementChild;
                ve(u, W(r), o),
                  ce(() => {
                    i.after(u), ht(u);
                  }),
                  "object" == typeof s &&
                    ot(
                      "x-for key cannot be an object, it must be a string or an integer",
                      o
                    ),
                  (a[s] = u);
              }
              for (let e = 0; e < h.length; e++)
                me(a[h[e]], l[c.indexOf(h[e])]);
              o._x_prevKeys = c;
            });
          })(e, r, o, s)
        ),
        i(() => {
          Object.values(e._x_lookup).forEach((e) => e.remove()),
            delete e._x_prevKeys,
            delete e._x_lookup;
        });
    }),
    (ci.inline = (e, { expression: t }, { cleanup: n }) => {
      let i = dt(e);
      i._x_refs || (i._x_refs = {}),
        (i._x_refs[t] = e),
        n(() => delete i._x_refs[t]);
    }),
    Ne("ref", ci),
    Ne("if", (e, { expression: t }, { effect: n, cleanup: i }) => {
      let r = je(e, t);
      n(() =>
        r((t) => {
          t
            ? (() => {
                if (e._x_currentIfEl) return e._x_currentIfEl;
                let t = e.content.cloneNode(!0).firstElementChild;
                ve(t, {}, e),
                  ce(() => {
                    e.after(t), ht(t);
                  }),
                  (e._x_currentIfEl = t),
                  (e._x_undoIf = () => {
                    rt(t, (e) => {
                      e._x_effects && e._x_effects.forEach(Y);
                    }),
                      t.remove(),
                      delete e._x_currentIfEl;
                  });
              })()
            : e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
        })
      ),
        i(() => e._x_undoIf && e._x_undoIf());
    }),
    Ne("id", (e, { expression: t }, { evaluate: n }) => {
      n(t).forEach((t) =>
        (function (e, t) {
          e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = ni(t));
        })(e, t)
      );
    }),
    Ge(Fe("@", He("on:"))),
    Ne(
      "on",
      St((e, { value: t, modifiers: n, expression: i }, { cleanup: r }) => {
        let o = i ? je(e, i) : () => {};
        "template" === e.tagName.toLowerCase() &&
          (e._x_forwardEvents || (e._x_forwardEvents = []),
          e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
        let s = oi(e, t, n, (e) => {
          o(() => {}, { scope: { $event: e }, params: [e] });
        });
        r(() => s());
      })
    ),
    fi("Collapse", "collapse", "collapse"),
    fi("Intersect", "intersect", "intersect"),
    fi("Focus", "trap", "focus"),
    fi("Mask", "mask", "mask"),
    Ht.setEvaluator(Me),
    Ht.setReactivityEngine({
      reactive: Zn,
      effect: function (e, t = zt) {
        (function (e) {
          return e && !0 === e._isEffect;
        })(e) && (e = e.raw);
        const n = (function (e, t) {
          const n = function () {
            if (!n.active) return e();
            if (!nn.includes(n)) {
              an(n);
              try {
                return ln.push(un), (un = !0), nn.push(n), (Nt = n), e();
              } finally {
                nn.pop(), cn(), (Nt = nn[nn.length - 1]);
              }
            }
          };
          return (
            (n.id = sn++),
            (n.allowRecurse = !!t.allowRecurse),
            (n._isEffect = !0),
            (n.active = !0),
            (n.raw = e),
            (n.deps = []),
            (n.options = t),
            n
          );
        })(e, t);
        return t.lazy || n(), n;
      },
      release: function (e) {
        e.active &&
          (an(e), e.options.onStop && e.options.onStop(), (e.active = !1));
      },
      raw: Qn,
    });
  var di = Ht;
  function pi(e) {
    if (e.includes("full")) return 0.99;
    if (e.includes("half")) return 0.5;
    if (!e.includes("threshold")) return 0;
    let t = e[e.indexOf("threshold") + 1];
    return "100" === t ? 1 : "0" === t ? 0 : Number(`.${t}`);
  }
  function hi(e) {
    let t = e.match(/^(-?[0-9]+)(px|%)?$/);
    return t ? t[1] + (t[2] || "px") : void 0;
  }
  function vi(e) {
    const t = "0px 0px 0px 0px",
      n = e.indexOf("margin");
    if (-1 === n) return t;
    let i = [];
    for (let t = 1; t < 5; t++) i.push(hi(e[n + t] || ""));
    return (
      (i = i.filter((e) => void 0 !== e)), i.length ? i.join(" ").trim() : t
    );
  }
  var mi = function (e) {
      e.directive(
        "intersect",
        (
          e,
          { value: t, expression: n, modifiers: i },
          { evaluateLater: r, cleanup: o }
        ) => {
          let s = r(n),
            a = { rootMargin: vi(i), threshold: pi(i) },
            u = new IntersectionObserver((e) => {
              e.forEach((e) => {
                e.isIntersecting !== ("leave" === t) &&
                  (s(), i.includes("once") && u.disconnect());
              });
            }, a);
          u.observe(e),
            o(() => {
              u.disconnect();
            });
        }
      );
    },
    _i = {
      productsDropdown: function () {
        return {
          glide: null,
          show: !1,
          open: function () {
            var e = this;
            (this.show = !0),
              this.$nextTick(function () {
                null === e.glide &&
                  (e.glide = new I(".products-carousel", {
                    type: "carousel",
                    startAt: 0,
                    perView: 5,
                  }).mount());
              });
          },
          close: function () {
            this.show = !1;
          },
          isOpen: function () {
            return !0 === this.show;
          },
          toggle: function () {
            this.show ? this.close() : this.open();
          },
        };
      },
    };
  (window.utils = _i), (window.Alpine = di), di.plugin(mi), di.start();
})();
