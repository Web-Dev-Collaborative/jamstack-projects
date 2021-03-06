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
