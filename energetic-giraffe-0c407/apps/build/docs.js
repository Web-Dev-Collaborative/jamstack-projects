!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=53)}([,function(t,e,n){"use strict";var r=window.jQuery;if(!r)throw new Error("SGDS couldn't initialize; please make sure jQuery is loaded!");e.a=r},function(t,e,n){var r=n(54),i=n(17),o=n(18),a=n(19),s=n(5),l=n(21),u=n(6),c=n(55),f=n(20);t.exports=function(t,e,d){var h,v=this,m=n(22)(v),p=n(56)(v),g=n(57)(v);h={start:function(){v.listClass="list",v.searchClass="search",v.sortClass="sort",v.page=1e4,v.i=1,v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.searchColumns=void 0,v.handlers={updated:[]},v.valueNames=[],v.utils={getByClass:i,extend:o,indexOf:a,events:s,toString:l,naturalSort:r,classes:u,getAttribute:c,toArray:f},v.utils.extend(v,e),v.listContainer="string"==typeof t?document.getElementById(t):t,v.listContainer&&(v.list=i(v.listContainer,v.listClass,!0),v.parse=n(58)(v),v.templater=n(59)(v),v.search=n(60)(v),v.filter=n(61)(v),v.sort=n(62)(v),v.fuzzySearch=n(63)(v,e.fuzzySearch),this.handlers(),this.items(),this.pagination(),v.update())},handlers:function(){for(var t in v.handlers)v[t]&&v.on(t,v[t])},items:function(){v.parse(v.list),void 0!==d&&v.add(d)},pagination:function(){if(void 0!==e.pagination){!0===e.pagination&&(e.pagination=[{}]),void 0===e.pagination[0]&&(e.pagination=[e.pagination]);for(var t=0,n=e.pagination.length;t<n;t++)g(e.pagination[t])}}},this.reIndex=function(){v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.parse(v.list)},this.toJSON=function(){for(var t=[],e=0,n=v.items.length;e<n;e++)t.push(v.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(!e){var n=[],r=!1;void 0===t[0]&&(t=[t]);for(var i=0,o=t.length;i<o;i++){var a;r=v.items.length>v.page,a=new m(t[i],void 0,r),v.items.push(a),n.push(a)}return v.update(),n}p(t,e)}},this.show=function(t,e){return this.i=t,this.page=e,v.update(),v},this.remove=function(t,e,n){for(var r=0,i=0,o=v.items.length;i<o;i++)v.items[i].values()[t]==e&&(v.templater.remove(v.items[i],n),v.items.splice(i,1),o--,i--,r++);return v.update(),r},this.get=function(t,e){for(var n=[],r=0,i=v.items.length;r<i;r++){var o=v.items[r];o.values()[t]==e&&n.push(o)}return n},this.size=function(){return v.items.length},this.clear=function(){return v.templater.clear(),v.items=[],v},this.on=function(t,e){return v.handlers[t].push(e),v},this.off=function(t,e){var n=v.handlers[t],r=a(n,e);return r>-1&&n.splice(r,1),v},this.trigger=function(t){for(var e=v.handlers[t].length;e--;)v.handlers[t][e](v);return v},this.reset={filter:function(){for(var t=v.items,e=t.length;e--;)t[e].filtered=!1;return v},search:function(){for(var t=v.items,e=t.length;e--;)t[e].found=!1;return v}},this.update=function(){var t=v.items,e=t.length;v.visibleItems=[],v.matchingItems=[],v.templater.clear();for(var n=0;n<e;n++)t[n].matching()&&v.matchingItems.length+1>=v.i&&v.visibleItems.length<v.page?(t[n].show(),v.visibleItems.push(t[n]),v.matchingItems.push(t[n])):t[n].matching()?(v.matchingItems.push(t[n]),t[n].hide()):t[n].hide();return v.trigger("updated"),v},h.start()}},,,function(t,e,n){var r=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",o="addEventListener"!==r?"on":"",a=n(20);e.bind=function(t,e,n,i){t=a(t);for(var s=0;s<t.length;s++)t[s][r](o+e,n,i||!1)},e.unbind=function(t,e,n,r){t=a(t);for(var s=0;s<t.length;s++)t[s][i](o+e,n,r||!1)}},function(t,e,n){var r=n(19),i=/\s+/;Object.prototype.toString;function o(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}t.exports=function(t){return new o(t)},o.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~r(e,t)||e.push(t),this.el.className=e.join(" "),this},o.prototype.remove=function(t){if(this.list)return this.list.remove(t),this;var e=this.array(),n=r(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},o.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},o.prototype.array=function(){var t=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(i);return""===t[0]&&t.shift(),t},o.prototype.has=o.prototype.contains=function(t){return this.list?this.list.contains(t):!!~r(this.array(),t)}},function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
var r;r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(t),r.removeAllRanges(),r.addRange(i),e=r.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function i(){r.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,i=n.length;r<i;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],i=[];if(r&&e)for(var o=0,a=r.length;o<a;o++)r[o].fn!==e&&r[o].fn._!==e&&i.push(r[o]);return i.length?n[t]=i:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),i=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return i(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var r=n(5);function i(t,e,n,r,i){var a=o.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}function o(t,e,n,i){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&i.call(t,n)}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return i(t,e,n,r,o)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=i()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=i()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),l=n(1),u=n.n(l),c=n(2),f=n.n(c),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=f()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){var e=m("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(u.a);function m(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=v}]).default},t.exports=r()},,,,,,,,,,function(t,e){t.exports=function(t,e,n,r){return(r=r||{}).test&&r.getElementsByClassName||!r.test&&document.getElementsByClassName?function(t,e,n){return n?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)}(t,e,n):r.test&&r.querySelector||!r.test&&document.querySelector?function(t,e,n){return e="."+e,n?t.querySelector(e):t.querySelectorAll(e)}(t,e,n):function(t,e,n){for(var r=[],i=t.getElementsByTagName("*"),o=i.length,a=new RegExp("(^|\\s)"+e+"(\\s|$)"),s=0,l=0;s<o;s++)if(a.test(i[s].className)){if(n)return i[s];r[l]=i[s],l++}return r}(t,e,n)}},function(t,e){t.exports=function(t){for(var e,n=Array.prototype.slice.call(arguments,1),r=0;e=n[r];r++)if(e)for(var i in e)t[i]=e[i];return t}},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e){t.exports=function(t){if(void 0===t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if(function(t){return"[object Array]"===Object.prototype.toString.call(t)}(t))return t;if("number"!=typeof t.length)return[t];if("function"==typeof t&&t instanceof Function)return[t];for(var e=[],n=0;n<t.length;n++)(Object.prototype.hasOwnProperty.call(t,n)||n in t)&&e.push(t[n]);return e.length?e:[]}},function(t,e){t.exports=function(t){return t=(t=null===(t=void 0===t?"":t)?"":t).toString()}},function(t,e){t.exports=function(t){return function(e,n,r){var i=this;this._values={},this.found=!1,this.filtered=!1;this.values=function(e,n){if(void 0===e)return i._values;for(var r in e)i._values[r]=e[r];!0!==n&&t.templater.set(i,i.values())},this.show=function(){t.templater.show(i)},this.hide=function(){t.templater.hide(i)},this.matching=function(){return t.filtered&&t.searched&&i.found&&i.filtered||t.filtered&&!t.searched&&i.filtered||!t.filtered&&t.searched&&i.found||!t.filtered&&!t.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=t.list)},function(e,n,r){if(void 0===n)r?i.values(e,r):i.values(e);else{i.elm=n;var o=t.templater.get(i,e);i.values(o)}}(e,n,r)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(7),i=n.n(r),o=n(2),a=n.n(o),s=n(1);Object(s.a)(document).ready((function(){Object(s.a)(".language-html").each((function(t,e){Object(s.a)(this).addClass("highlight"+t)})),new i.a(".clipboard-btn").on("success",(function(t){var e=t.trigger.innerHTML;t.clearSelection(),t.trigger.textContent="Copied",t.trigger.classList.add("is-success"),window.setTimeout((function(){t.trigger.textContent=e,t.trigger.classList.remove("is-success")}),1e3)})),Object(s.a)(".icon-clipboard-btn small").each((function(t,e){})),new i.a(".icon-clipboard-btn").on("success",(function(t){var e=t.trigger.lastElementChild.innerText;t.clearSelection(),t.trigger.classList.remove("sgds-tooltip"),t.trigger.lastElementChild.innerText="Copied",t.trigger.lastElementChild.classList.add("has-text-success"),window.setTimeout((function(){t.trigger.lastElementChild.innerText=e,t.trigger.classList.add("sgds-tooltip"),t.trigger.lastElementChild.classList.remove("has-text-success")}),1e3)})),function(){if(document.getElementById("search-field")){var t={valueNames:["component-name"]},e=new a.a("standard-component",t),n=new a.a("layouts-component",t),r=new a.a("general-component",t),i=document.getElementById("search-field");i.addEventListener("input",(function(){var t=i.value;e.search(t),n.search(t),r.search(t)}))}}()}))},function(t,e,n){"use strict";var r,i,o=0;function a(t){return t>=48&&t<=57}function s(t,e){for(var n=(t+="").length,r=(e+="").length,s=0,l=0;s<n&&l<r;){var u=t.charCodeAt(s),c=e.charCodeAt(l);if(a(u)){if(!a(c))return u-c;for(var f=s,d=l;48===u&&++f<n;)u=t.charCodeAt(f);for(;48===c&&++d<r;)c=e.charCodeAt(d);for(var h=f,v=d;h<n&&a(t.charCodeAt(h));)++h;for(;v<r&&a(e.charCodeAt(v));)++v;var m=h-f-v+d;if(m)return m;for(;f<h;)if(m=t.charCodeAt(f++)-e.charCodeAt(d++))return m;s=h,l=v}else{if(u!==c)return u<o&&c<o&&-1!==i[u]&&-1!==i[c]?i[u]-i[c]:u-c;++s,++l}}return s>=n&&l<r&&n>=r?-1:l>=r&&s<n&&r>=n?1:n-r}s.caseInsensitive=s.i=function(t,e){return s((""+t).toLowerCase(),(""+e).toLowerCase())},Object.defineProperties(s,{alphabet:{get:function(){return r},set:function(t){i=[];var e=0;if(r=t)for(;e<r.length;e++)i[r.charCodeAt(e)]=e;for(o=i.length,e=0;e<o;e++)void 0===i[e]&&(i[e]=-1)}}}),t.exports=s},function(t,e){t.exports=function(t,e){var n=t.getAttribute&&t.getAttribute(e)||null;if(!n)for(var r=t.attributes.length,i=0;i<r;i++)void 0!==e[i]&&e[i].nodeName===e&&(n=e[i].nodeValue);return n}},function(t,e){t.exports=function(t){var e=function(n,r,i){var o=n.splice(0,50);i=(i=i||[]).concat(t.add(o)),n.length>0?setTimeout((function(){e(n,r,i)}),1):(t.update(),r(i))};return e}},function(t,e,n){var r=n(6),i=n(5),o=n(2);t.exports=function(t){var e=function(e,i){var o,s=t.matchingItems.length,l=t.i,u=t.page,c=Math.ceil(s/u),f=Math.ceil(l/u),d=i.innerWindow||2,h=i.left||i.outerWindow||0,v=i.right||i.outerWindow||0;v=c-v,e.clear();for(var m=1;m<=c;m++){var p=f===m?"active":"";n.number(m,h,v,f,d)?(o=e.add({page:m,dotted:!1})[0],p&&r(o.elm).add(p),a(o.elm,m,u)):n.dotted(e,m,h,v,f,d,e.size())&&(o=e.add({page:"...",dotted:!0})[0],r(o.elm).add("disabled"))}},n={number:function(t,e,n,r,i){return this.left(t,e)||this.right(t,n)||this.innerWindow(t,r,i)},left:function(t,e){return t<=e},right:function(t,e){return t>e},innerWindow:function(t,e,n){return t>=e-n&&t<=e+n},dotted:function(t,e,n,r,i,o,a){return this.dottedLeft(t,e,n,r,i,o)||this.dottedRight(t,e,n,r,i,o,a)},dottedLeft:function(t,e,n,r,i,o){return e==n+1&&!this.innerWindow(e,i,o)&&!this.right(e,r)},dottedRight:function(t,e,n,r,i,o,a){return!t.items[a-1].values().dotted&&(e==r&&!this.innerWindow(e,i,o)&&!this.right(e,r))}},a=function(e,n,r){i.bind(e,"click",(function(){t.show((n-1)*r+1,r)}))};return function(n){var r=new o(t.listContainer.id,{listClass:n.paginationClass||"pagination",item:"<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});t.on("updated",(function(){e(r,n)})),e(r,n)}}},function(t,e,n){t.exports=function(t){var e=n(22)(t),r=function(n,r){for(var i=0,o=n.length;i<o;i++)t.items.push(new e(r,n[i]))},i=function(e,n){var o=e.splice(0,50);r(o,n),e.length>0?setTimeout((function(){i(e,n)}),1):(t.update(),t.trigger("parseComplete"))};return t.handlers.parseComplete=t.handlers.parseComplete||[],function(){var e=function(t){for(var e=t.childNodes,n=[],r=0,i=e.length;r<i;r++)void 0===e[r].data&&n.push(e[r]);return n}(t.list),n=t.valueNames;t.indexAsync?i(e,n):r(e,n)}}},function(t,e){var n=function(t){var e,n=this;this.clearSourceItem=function(e,n){for(var r=0,i=n.length;r<i;r++){var o;if(n[r].data)for(var a=0,s=n[r].data.length;a<s;a++)e.setAttribute("data-"+n[r].data[a],"");else n[r].attr&&n[r].name?(o=t.utils.getByClass(e,n[r].name,!0))&&o.setAttribute(n[r].attr,""):(o=t.utils.getByClass(e,n[r],!0))&&(o.innerHTML="");o=void 0}return e},this.getItemSource=function(e){if(void 0===e){for(var n=t.list.childNodes,r=0,i=n.length;r<i;r++)if(void 0===n[r].data)return n[r].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(e)){var o=document.createElement("tbody");return o.innerHTML=e,o.firstChild}if(-1!==e.indexOf("<")){var a=document.createElement("div");return a.innerHTML=e,a.firstChild}var s=document.getElementById(t.item);if(s)return s}},this.get=function(e,r){n.create(e);for(var i={},o=0,a=r.length;o<a;o++){var s;if(r[o].data)for(var l=0,u=r[o].data.length;l<u;l++)i[r[o].data[l]]=t.utils.getAttribute(e.elm,"data-"+r[o].data[l]);else r[o].attr&&r[o].name?(s=t.utils.getByClass(e.elm,r[o].name,!0),i[r[o].name]=s?t.utils.getAttribute(s,r[o].attr):""):(s=t.utils.getByClass(e.elm,r[o],!0),i[r[o]]=s?s.innerHTML:"");s=void 0}return i},this.set=function(e,r){var i=function(n,r){var i,o=function(e){for(var n=0,r=t.valueNames.length;n<r;n++)if(t.valueNames[n].data){for(var i=t.valueNames[n].data,o=0,a=i.length;o<a;o++)if(i[o]===e)return{data:e}}else{if(t.valueNames[n].attr&&t.valueNames[n].name&&t.valueNames[n].name==e)return t.valueNames[n];if(t.valueNames[n]===e)return e}}(n);o&&(o.data?e.elm.setAttribute("data-"+o.data,r):o.attr&&o.name?(i=t.utils.getByClass(e.elm,o.name,!0))&&i.setAttribute(o.attr,r):(i=t.utils.getByClass(e.elm,o,!0))&&(i.innerHTML=r),i=void 0)};if(!n.create(e))for(var o in r)r.hasOwnProperty(o)&&i(o,r[o])},this.create=function(t){if(void 0!==t.elm)return!1;if(void 0===e)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var r=e.cloneNode(!0);return r.removeAttribute("id"),t.elm=r,n.set(t,t.values()),!0},this.remove=function(e){e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.show=function(e){n.create(e),t.list.appendChild(e.elm)},this.hide=function(e){void 0!==e.elm&&e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.clear=function(){if(t.list.hasChildNodes())for(;t.list.childNodes.length>=1;)t.list.removeChild(t.list.firstChild)},(e=n.getItemSource(t.item))&&(e=n.clearSourceItem(e,t.valueNames))};t.exports=function(t){return new n(t)}},function(t,e){t.exports=function(t){var e,n,r,i,o={resetList:function(){t.i=1,t.templater.clear(),i=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?n=t[1]:2==t.length&&"function"==typeof t[1]?(n=void 0,i=t[1]):3==t.length?(n=t[1],i=t[2]):n=void 0},setColumns:function(){0!==t.items.length&&void 0===n&&(n=void 0===t.searchColumns?o.toArray(t.items[0].values()):t.searchColumns)},setSearchString:function(e){e=(e=t.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),r=e},toArray:function(t){var e=[];for(var n in t)e.push(n);return e}},a={list:function(){for(var e=0,n=t.items.length;e<n;e++)a.item(t.items[e])},item:function(t){t.found=!1;for(var e=0,r=n.length;e<r;e++)if(a.values(t.values(),n[e]))return void(t.found=!0)},values:function(n,i){return!!(n.hasOwnProperty(i)&&(e=t.utils.toString(n[i]).toLowerCase(),""!==r&&e.search(r)>-1))},reset:function(){t.reset.search(),t.searched=!1}},s=function(e){return t.trigger("searchStart"),o.resetList(),o.setSearchString(e),o.setOptions(arguments),o.setColumns(),""===r?a.reset():(t.searched=!0,i?i(r,n):a.list()),t.update(),t.trigger("searchComplete"),t.visibleItems};return t.handlers.searchStart=t.handlers.searchStart||[],t.handlers.searchComplete=t.handlers.searchComplete||[],t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"keyup",(function(e){var n=e.target||e.srcElement;""===n.value&&!t.searched||s(n.value)})),t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"input",(function(t){""===(t.target||t.srcElement).value&&s("")})),s}},function(t,e){t.exports=function(t){return t.handlers.filterStart=t.handlers.filterStart||[],t.handlers.filterComplete=t.handlers.filterComplete||[],function(e){if(t.trigger("filterStart"),t.i=1,t.reset.filter(),void 0===e)t.filtered=!1;else{t.filtered=!0;for(var n=t.items,r=0,i=n.length;r<i;r++){var o=n[r];e(o)?o.filtered=!0:o.filtered=!1}}return t.update(),t.trigger("filterComplete"),t.visibleItems}}},function(t,e){t.exports=function(t){var e={els:void 0,clear:function(){for(var n=0,r=e.els.length;n<r;n++)t.utils.classes(e.els[n]).remove("asc"),t.utils.classes(e.els[n]).remove("desc")},getOrder:function(e){var n=t.utils.getAttribute(e,"data-order");return"asc"==n||"desc"==n?n:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"},getInSensitive:function(e,n){var r=t.utils.getAttribute(e,"data-insensitive");n.insensitive="false"!==r},setOrder:function(n){for(var r=0,i=e.els.length;r<i;r++){var o=e.els[r];if(t.utils.getAttribute(o,"data-sort")===n.valueName){var a=t.utils.getAttribute(o,"data-order");"asc"==a||"desc"==a?a==n.order&&t.utils.classes(o).add(n.order):t.utils.classes(o).add(n.order)}}}},n=function(){t.trigger("sortStart");var n={},r=arguments[0].currentTarget||arguments[0].srcElement||void 0;r?(n.valueName=t.utils.getAttribute(r,"data-sort"),e.getInSensitive(r,n),n.order=e.getOrder(r)):((n=arguments[1]||n).valueName=arguments[0],n.order=n.order||"asc",n.insensitive=void 0===n.insensitive||n.insensitive),e.clear(),e.setOrder(n);var i,o=n.sortFunction||t.sortFunction||null,a="desc"===n.order?-1:1;i=o?function(t,e){return o(t,e,n)*a}:function(e,r){var i=t.utils.naturalSort;return i.alphabet=t.alphabet||n.alphabet||void 0,!i.alphabet&&n.insensitive&&(i=t.utils.naturalSort.caseInsensitive),i(e.values()[n.valueName],r.values()[n.valueName])*a},t.items.sort(i),t.update(),t.trigger("sortComplete")};return t.handlers.sortStart=t.handlers.sortStart||[],t.handlers.sortComplete=t.handlers.sortComplete||[],e.els=t.utils.getByClass(t.listContainer,t.sortClass),t.utils.events.bind(e.els,"click",n),t.on("searchStart",e.clear),t.on("filterStart",e.clear),n}},function(t,e,n){n(6);var r=n(5),i=n(18),o=n(21),a=n(17),s=n(64);t.exports=function(t,e){e=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},e=e||{});var n={search:function(r,i){for(var o=e.multiSearch?r.replace(/ +$/,"").split(/ +/):[r],a=0,s=t.items.length;a<s;a++)n.item(t.items[a],i,o)},item:function(t,e,r){for(var i=!0,o=0;o<r.length;o++){for(var a=!1,s=0,l=e.length;s<l;s++)n.values(t.values(),e[s],r[o])&&(a=!0);a||(i=!1)}t.found=i},values:function(t,n,r){if(t.hasOwnProperty(n)){var i=o(t[n]).toLowerCase();if(s(i,r,e))return!0}return!1}};return r.bind(a(t.listContainer,e.searchClass),"keyup",(function(e){var r=e.target||e.srcElement;t.search(r.value,n.search)})),function(e,r){t.search(e,r,n.search)}}},function(t,e){t.exports=function(t,e,n){var r=n.location||0,i=n.distance||100,o=n.threshold||.4;if(e===t)return!0;if(e.length>32)return!1;var a=r,s=function(){var t,n={};for(t=0;t<e.length;t++)n[e.charAt(t)]=0;for(t=0;t<e.length;t++)n[e.charAt(t)]|=1<<e.length-t-1;return n}();function l(t,n){var r=t/e.length,o=Math.abs(a-n);return i?r+o/i:o?1:r}var u=o,c=t.indexOf(e,a);-1!=c&&(u=Math.min(l(0,c),u),-1!=(c=t.lastIndexOf(e,a+e.length))&&(u=Math.min(l(0,c),u)));var f,d,h=1<<e.length-1;c=-1;for(var v,m=e.length+t.length,p=0;p<e.length;p++){for(f=0,d=m;f<d;)l(p,a+d)<=u?f=d:m=d,d=Math.floor((m-f)/2+f);m=d;var g=Math.max(1,a-d+1),y=Math.min(a+d,t.length)+e.length,b=Array(y+2);b[y+1]=(1<<p)-1;for(var C=y;C>=g;C--){var w=s[t.charAt(C-1)];if(b[C]=0===p?(b[C+1]<<1|1)&w:(b[C+1]<<1|1)&w|(v[C+1]|v[C])<<1|1|v[C+1],b[C]&h){var S=l(p,C-1);if(S<=u){if(u=S,!((c=C-1)>a))break;g=Math.max(1,2*a-c)}}}if(l(p+1,a)>u)break;v=b}return!(c<0)}}]);
//# sourceMappingURL=docs.js.map