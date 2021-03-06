/*
reframe.js - Reframe.js: responsive iframes for embedded content
@version v2.2.5
@link https://github.com/dollarshaveclub/reframe.js#readme
@author Jeff Wainwright <jjwainwright2@gmail.com> (http://jeffry.in)
@license MIT
*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.reframe = t());
})(this, function () {
  "use strict";
  function e(e, t) {
    var i = "string" == typeof e ? document.querySelectorAll(e) : e,
      n = t || "js-reframe";
    "length" in i || (i = [i]);
    for (var o = 0; o < i.length; o += 1) {
      var r = i[o];
      if (!(-1 !== r.className.split(" ").indexOf(n))) {
        var d = r.getAttribute("height"),
          f = r.getAttribute("width");
        if (!(f.indexOf("%") > -1 || r.style.width.indexOf("%") > -1)) {
          var a = ((d || r.offsetHeight) / (f || r.offsetWidth)) * 100,
            s = document.createElement("div");
          s.className = n;
          var l = s.style;
          (l.position = "relative"),
            (l.width = "100%"),
            (l.paddingTop = a + "%");
          var p = r.style;
          (p.position = "absolute"),
            (p.width = "100%"),
            (p.height = "100%"),
            (p.left = "0"),
            (p.top = "0"),
            r.parentNode.insertBefore(s, r),
            r.parentNode.removeChild(r),
            s.appendChild(r);
        }
      }
    }
  }
  return e;
});

/*!
 * Smooth Scroll behavior polyfill
 * https://github.com/iamdustan/smoothscroll
 * MIT License
 */
!(function () {
  "use strict";
  function o() {
    var o = window,
      t = document;
    if (
      !(
        "scrollBehavior" in t.documentElement.style &&
        !0 !== o.__forceSmoothScrollPolyfill__
      )
    ) {
      var l,
        e = o.HTMLElement || o.Element,
        r = 468,
        i = {
          scroll: o.scroll || o.scrollTo,
          scrollBy: o.scrollBy,
          elementScroll: e.prototype.scroll || n,
          scrollIntoView: e.prototype.scrollIntoView,
        },
        s =
          o.performance && o.performance.now
            ? o.performance.now.bind(o.performance)
            : Date.now,
        c =
          ((l = o.navigator.userAgent),
          new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);
      (o.scroll = o.scrollTo =
        function () {
          void 0 !== arguments[0] &&
            (!0 !== f(arguments[0])
              ? h.call(
                  o,
                  t.body,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left
                    : o.scrollX || o.pageXOffset,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top
                    : o.scrollY || o.pageYOffset
                )
              : i.scroll.call(
                  o,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : "object" != typeof arguments[0]
                    ? arguments[0]
                    : o.scrollX || o.pageXOffset,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : o.scrollY || o.pageYOffset
                ));
        }),
        (o.scrollBy = function () {
          void 0 !== arguments[0] &&
            (f(arguments[0])
              ? i.scrollBy.call(
                  o,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : "object" != typeof arguments[0]
                    ? arguments[0]
                    : 0,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : 0
                )
              : h.call(
                  o,
                  t.body,
                  ~~arguments[0].left + (o.scrollX || o.pageXOffset),
                  ~~arguments[0].top + (o.scrollY || o.pageYOffset)
                ));
        }),
        (e.prototype.scroll = e.prototype.scrollTo =
          function () {
            if (void 0 !== arguments[0])
              if (!0 !== f(arguments[0])) {
                var o = arguments[0].left,
                  t = arguments[0].top;
                h.call(
                  this,
                  this,
                  void 0 === o ? this.scrollLeft : ~~o,
                  void 0 === t ? this.scrollTop : ~~t
                );
              } else {
                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                  throw new SyntaxError("Value could not be converted");
                i.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left
                    : "object" != typeof arguments[0]
                    ? ~~arguments[0]
                    : this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top
                    : void 0 !== arguments[1]
                    ? ~~arguments[1]
                    : this.scrollTop
                );
              }
          }),
        (e.prototype.scrollBy = function () {
          void 0 !== arguments[0] &&
            (!0 !== f(arguments[0])
              ? this.scroll({
                  left: ~~arguments[0].left + this.scrollLeft,
                  top: ~~arguments[0].top + this.scrollTop,
                  behavior: arguments[0].behavior,
                })
              : i.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
                ));
        }),
        (e.prototype.scrollIntoView = function () {
          if (!0 !== f(arguments[0])) {
            var l = (function (o) {
                for (
                  ;
                  o !== t.body &&
                  !1 ===
                    ((e = p((l = o), "Y") && a(l, "Y")),
                    (r = p(l, "X") && a(l, "X")),
                    e || r);

                )
                  o = o.parentNode || o.host;
                var l, e, r;
                return o;
              })(this),
              e = l.getBoundingClientRect(),
              r = this.getBoundingClientRect();
            l !== t.body
              ? (h.call(
                  this,
                  l,
                  l.scrollLeft + r.left - e.left,
                  l.scrollTop + r.top - e.top
                ),
                "fixed" !== o.getComputedStyle(l).position &&
                  o.scrollBy({ left: e.left, top: e.top, behavior: "smooth" }))
              : o.scrollBy({ left: r.left, top: r.top, behavior: "smooth" });
          } else
            i.scrollIntoView.call(
              this,
              void 0 === arguments[0] || arguments[0]
            );
        });
    }
    function n(o, t) {
      (this.scrollLeft = o), (this.scrollTop = t);
    }
    function f(o) {
      if (
        null === o ||
        "object" != typeof o ||
        void 0 === o.behavior ||
        "auto" === o.behavior ||
        "instant" === o.behavior
      )
        return !0;
      if ("object" == typeof o && "smooth" === o.behavior) return !1;
      throw new TypeError(
        "behavior member of ScrollOptions " +
          o.behavior +
          " is not a valid value for enumeration ScrollBehavior."
      );
    }
    function p(o, t) {
      return "Y" === t
        ? o.clientHeight + c < o.scrollHeight
        : "X" === t
        ? o.clientWidth + c < o.scrollWidth
        : void 0;
    }
    function a(t, l) {
      var e = o.getComputedStyle(t, null)["overflow" + l];
      return "auto" === e || "scroll" === e;
    }
    function d(t) {
      var l,
        e,
        i,
        c,
        n = (s() - t.startTime) / r;
      (c = n = n > 1 ? 1 : n),
        (l = 0.5 * (1 - Math.cos(Math.PI * c))),
        (e = t.startX + (t.x - t.startX) * l),
        (i = t.startY + (t.y - t.startY) * l),
        t.method.call(t.scrollable, e, i),
        (e === t.x && i === t.y) || o.requestAnimationFrame(d.bind(o, t));
    }
    function h(l, e, r) {
      var c,
        f,
        p,
        a,
        h = s();
      l === t.body
        ? ((c = o),
          (f = o.scrollX || o.pageXOffset),
          (p = o.scrollY || o.pageYOffset),
          (a = i.scroll))
        : ((c = l), (f = l.scrollLeft), (p = l.scrollTop), (a = n)),
        d({
          scrollable: c,
          method: a,
          startTime: h,
          startX: f,
          startY: p,
          x: e,
          y: r,
        });
    }
  }
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = { polyfill: o })
    : o();
})();
