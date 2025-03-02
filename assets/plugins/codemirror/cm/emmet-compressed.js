var _ = function () {
	function f(a, b, c) {
		if (a === b) return 0 !== a || 1 / a == 1 / b; if (null == a || null == b) return a === b; a._chain && (a = a._wrapped); b._chain && (b = b._wrapped); if (a.isEqual && k.isFunction(a.isEqual)) return a.isEqual(b); if (b.isEqual && k.isFunction(b.isEqual)) return b.isEqual(a); var d = e.call(a); if (d != e.call(b)) return !1; switch (d) {
			case "[object String]": return a == String(b); case "[object Number]": return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b; case "[object Date]": case "[object Boolean]": return +a == +b; case "[object RegExp]": return a.source ==
				b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
		}if ("object" != typeof a || "object" != typeof b) return !1; for (var h = c.length; h--;)if (c[h] == a) return !0; c.push(a); var h = 0, x = !0; if ("[object Array]" == d) { if (h = a.length, x = h == b.length) for (; h-- && (x = h in a == h in b && f(a[h], b[h], c));); } else {
			if ("constructor" in a != "constructor" in b || a.constructor != b.constructor) return !1; for (var l in a) if (k.has(a, l) && (h++, !(x = k.has(b, l) && f(a[l], b[l], c)))) break; if (x) {
				for (l in b) if (k.has(b, l) && !h--) break;
				x = !h
			}
		} c.pop(); return x
	} var d = this, j = d._, g = {}, a = Array.prototype, c = Object.prototype, b = a.slice, h = a.unshift, e = c.toString, l = c.hasOwnProperty, m = a.forEach, p = a.map, n = a.reduce, q = a.reduceRight, r = a.filter, t = a.every, s = a.some, u = a.indexOf, v = a.lastIndexOf, c = Array.isArray, z = Object.keys, x = Function.prototype.bind, k = function (a) { return new A(a) }; "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = k), exports._ = k) : d._ = k; k.VERSION = "1.3.3"; var y = k.each = k.forEach = function (a,
		b, e) { if (null != a) if (m && a.forEach === m) a.forEach(b, e); else if (a.length === +a.length) for (var c = 0, d = a.length; c < d && !(c in a && b.call(e, a[c], c, a) === g); c++); else for (c in a) if (k.has(a, c) && b.call(e, a[c], c, a) === g) break }; k.map = k.collect = function (a, b, e) { var c = []; if (null == a) return c; if (p && a.map === p) return a.map(b, e); y(a, function (a, d, h) { c[c.length] = b.call(e, a, d, h) }); a.length === +a.length && (c.length = a.length); return c }; k.reduce = k.foldl = k.inject = function (a, b, e, c) {
			var d = 2 < arguments.length; null == a && (a = []); if (n && a.reduce ===
				n) return c && (b = k.bind(b, c)), d ? a.reduce(b, e) : a.reduce(b); y(a, function (a, h, k) { d ? e = b.call(c, e, a, h, k) : (e = a, d = !0) }); if (!d) throw new TypeError("Reduce of empty array with no initial value"); return e
		}; k.reduceRight = k.foldr = function (a, b, e, c) { var d = 2 < arguments.length; null == a && (a = []); if (q && a.reduceRight === q) return c && (b = k.bind(b, c)), d ? a.reduceRight(b, e) : a.reduceRight(b); var h = k.toArray(a).reverse(); c && !d && (b = k.bind(b, c)); return d ? k.reduce(h, b, e, c) : k.reduce(h, b) }; k.find = k.detect = function (a, b, e) {
			var c; G(a, function (a,
				d, h) { if (b.call(e, a, d, h)) return c = a, !0 }); return c
		}; k.filter = k.select = function (a, b, e) { var c = []; if (null == a) return c; if (r && a.filter === r) return a.filter(b, e); y(a, function (a, d, h) { b.call(e, a, d, h) && (c[c.length] = a) }); return c }; k.reject = function (a, b, e) { var c = []; if (null == a) return c; y(a, function (a, d, h) { b.call(e, a, d, h) || (c[c.length] = a) }); return c }; k.every = k.all = function (a, b, e) { var c = !0; if (null == a) return c; if (t && a.every === t) return a.every(b, e); y(a, function (a, d, h) { if (!(c = c && b.call(e, a, d, h))) return g }); return !!c };
	var G = k.some = k.any = function (a, b, e) { b || (b = k.identity); var c = !1; if (null == a) return c; if (s && a.some === s) return a.some(b, e); y(a, function (a, d, h) { if (c || (c = b.call(e, a, d, h))) return g }); return !!c }; k.include = k.contains = function (a, b) { var e = !1; return null == a ? e : u && a.indexOf === u ? -1 != a.indexOf(b) : e = G(a, function (a) { return a === b }) }; k.invoke = function (a, e) { var c = b.call(arguments, 2); return k.map(a, function (a) { return (k.isFunction(e) ? e || a : a[e]).apply(a, c) }) }; k.pluck = function (a, b) { return k.map(a, function (a) { return a[b] }) };
	k.max = function (a, b, e) { if (!b && k.isArray(a) && a[0] === +a[0]) return Math.max.apply(Math, a); if (!b && k.isEmpty(a)) return -Infinity; var c = { computed: -Infinity }; y(a, function (a, d, h) { d = b ? b.call(e, a, d, h) : a; d >= c.computed && (c = { value: a, computed: d }) }); return c.value }; k.min = function (a, b, e) { if (!b && k.isArray(a) && a[0] === +a[0]) return Math.min.apply(Math, a); if (!b && k.isEmpty(a)) return Infinity; var c = { computed: Infinity }; y(a, function (a, d, h) { d = b ? b.call(e, a, d, h) : a; d < c.computed && (c = { value: a, computed: d }) }); return c.value }; k.shuffle =
		function (a) { var b = [], e; y(a, function (a, c) { e = Math.floor(Math.random() * (c + 1)); b[c] = b[e]; b[e] = a }); return b }; k.sortBy = function (a, b, e) { var c = k.isFunction(b) ? b : function (a) { return a[b] }; return k.pluck(k.map(a, function (a, b, d) { return { value: a, criteria: c.call(e, a, b, d) } }).sort(function (a, b) { var e = a.criteria, c = b.criteria; return void 0 === e ? 1 : void 0 === c ? -1 : e < c ? -1 : e > c ? 1 : 0 }), "value") }; k.groupBy = function (a, b) {
			var e = {}, c = k.isFunction(b) ? b : function (a) { return a[b] }; y(a, function (a, b) { var d = c(a, b); (e[d] || (e[d] = [])).push(a) });
			return e
		}; k.sortedIndex = function (a, b, e) { e || (e = k.identity); for (var c = 0, d = a.length; c < d;) { var h = c + d >> 1; e(a[h]) < e(b) ? c = h + 1 : d = h } return c }; k.toArray = function (a) { return !a ? [] : k.isArray(a) || k.isArguments(a) ? b.call(a) : a.toArray && k.isFunction(a.toArray) ? a.toArray() : k.values(a) }; k.size = function (a) { return k.isArray(a) ? a.length : k.keys(a).length }; k.first = k.head = k.take = function (a, e, c) { return null != e && !c ? b.call(a, 0, e) : a[0] }; k.initial = function (a, e, c) { return b.call(a, 0, a.length - (null == e || c ? 1 : e)) }; k.last = function (a,
			e, c) { return null != e && !c ? b.call(a, Math.max(a.length - e, 0)) : a[a.length - 1] }; k.rest = k.tail = function (a, e, c) { return b.call(a, null == e || c ? 1 : e) }; k.compact = function (a) { return k.filter(a, function (a) { return !!a }) }; k.flatten = function (a, b) { return k.reduce(a, function (a, e) { if (k.isArray(e)) return a.concat(b ? e : k.flatten(e)); a[a.length] = e; return a }, []) }; k.without = function (a) { return k.difference(a, b.call(arguments, 1)) }; k.uniq = k.unique = function (a, b, e) {
				e = e ? k.map(a, e) : a; var c = []; 3 > a.length && (b = !0); k.reduce(e, function (e, d,
					h) { if (b ? k.last(e) !== d || !e.length : !k.include(e, d)) e.push(d), c.push(a[h]); return e }, []); return c
			}; k.union = function () { return k.uniq(k.flatten(arguments, !0)) }; k.intersection = k.intersect = function (a) { var e = b.call(arguments, 1); return k.filter(k.uniq(a), function (a) { return k.every(e, function (b) { return 0 <= k.indexOf(b, a) }) }) }; k.difference = function (a) { var e = k.flatten(b.call(arguments, 1), !0); return k.filter(a, function (a) { return !k.include(e, a) }) }; k.zip = function () {
				for (var a = b.call(arguments), e = k.max(k.pluck(a, "length")),
					c = Array(e), d = 0; d < e; d++)c[d] = k.pluck(a, "" + d); return c
			}; k.indexOf = function (a, b, e) { if (null == a) return -1; var c; if (e) return e = k.sortedIndex(a, b), a[e] === b ? e : -1; if (u && a.indexOf === u) return a.indexOf(b); e = 0; for (c = a.length; e < c; e++)if (e in a && a[e] === b) return e; return -1 }; k.lastIndexOf = function (a, b) { if (null == a) return -1; if (v && a.lastIndexOf === v) return a.lastIndexOf(b); for (var e = a.length; e--;)if (e in a && a[e] === b) return e; return -1 }; k.range = function (a, b, e) {
				1 >= arguments.length && (b = a || 0, a = 0); e = arguments[2] || 1; for (var c =
					Math.max(Math.ceil((b - a) / e), 0), d = 0, h = Array(c); d < c;)h[d++] = a, a += e; return h
			}; var C = function () { }; k.bind = function (a, e) { var c, d; if (a.bind === x && x) return x.apply(a, b.call(arguments, 1)); if (!k.isFunction(a)) throw new TypeError; d = b.call(arguments, 2); return c = function () { if (!(this instanceof c)) return a.apply(e, d.concat(b.call(arguments))); C.prototype = a.prototype; var h = new C, k = a.apply(h, d.concat(b.call(arguments))); return Object(k) === k ? k : h } }; k.bindAll = function (a) {
				var e = b.call(arguments, 1); 0 == e.length && (e = k.functions(a));
				y(e, function (b) { a[b] = k.bind(a[b], a) }); return a
			}; k.memoize = function (a, b) { var e = {}; b || (b = k.identity); return function () { var c = b.apply(this, arguments); return k.has(e, c) ? e[c] : e[c] = a.apply(this, arguments) } }; k.delay = function (a, e) { var c = b.call(arguments, 2); return setTimeout(function () { return a.apply(null, c) }, e) }; k.defer = function (a) { return k.delay.apply(k, [a, 1].concat(b.call(arguments, 1))) }; k.throttle = function (a, b) {
				var e, c, d, h, x, l, f = k.debounce(function () { x = h = !1 }, b); return function () {
					e = this; c = arguments; d ||
						(d = setTimeout(function () { d = null; x && a.apply(e, c); f() }, b)); h ? x = !0 : l = a.apply(e, c); f(); h = !0; return l
				}
			}; k.debounce = function (a, b, e) { var c; return function () { var d = this, h = arguments; e && !c && a.apply(d, h); clearTimeout(c); c = setTimeout(function () { c = null; e || a.apply(d, h) }, b) } }; k.once = function (a) { var b = !1, e; return function () { if (b) return e; b = !0; return e = a.apply(this, arguments) } }; k.wrap = function (a, e) { return function () { var c = [a].concat(b.call(arguments, 0)); return e.apply(this, c) } }; k.compose = function () {
				var a = arguments;
				return function () { for (var b = arguments, e = a.length - 1; 0 <= e; e--)b = [a[e].apply(this, b)]; return b[0] }
			}; k.after = function (a, b) { return 0 >= a ? b() : function () { if (1 > --a) return b.apply(this, arguments) } }; k.keys = z || function (a) { if (a !== Object(a)) throw new TypeError("Invalid object"); var b = [], e; for (e in a) k.has(a, e) && (b[b.length] = e); return b }; k.values = function (a) { return k.map(a, k.identity) }; k.functions = k.methods = function (a) { var b = [], e; for (e in a) k.isFunction(a[e]) && b.push(e); return b.sort() }; k.extend = function (a) {
				y(b.call(arguments,
					1), function (b) { for (var e in b) a[e] = b[e] }); return a
			}; k.pick = function (a) { var e = {}; y(k.flatten(b.call(arguments, 1)), function (b) { b in a && (e[b] = a[b]) }); return e }; k.defaults = function (a) { y(b.call(arguments, 1), function (b) { for (var e in b) null == a[e] && (a[e] = b[e]) }); return a }; k.clone = function (a) { return !k.isObject(a) ? a : k.isArray(a) ? a.slice() : k.extend({}, a) }; k.tap = function (a, b) { b(a); return a }; k.isEqual = function (a, b) { return f(a, b, []) }; k.isEmpty = function (a) {
				if (null == a) return !0; if (k.isArray(a) || k.isString(a)) return 0 ===
					a.length; for (var b in a) if (k.has(a, b)) return !1; return !0
			}; k.isElement = function (a) { return !!(a && 1 == a.nodeType) }; k.isArray = c || function (a) { return "[object Array]" == e.call(a) }; k.isObject = function (a) { return a === Object(a) }; k.isArguments = function (a) { return "[object Arguments]" == e.call(a) }; k.isArguments(arguments) || (k.isArguments = function (a) { return !(!a || !k.has(a, "callee")) }); k.isFunction = function (a) { return "[object Function]" == e.call(a) }; k.isString = function (a) { return "[object String]" == e.call(a) }; k.isNumber = function (a) {
				return "[object Number]" ==
					e.call(a)
			}; k.isFinite = function (a) { return k.isNumber(a) && isFinite(a) }; k.isNaN = function (a) { return a !== a }; k.isBoolean = function (a) { return !0 === a || !1 === a || "[object Boolean]" == e.call(a) }; k.isDate = function (a) { return "[object Date]" == e.call(a) }; k.isRegExp = function (a) { return "[object RegExp]" == e.call(a) }; k.isNull = function (a) { return null === a }; k.isUndefined = function (a) { return void 0 === a }; k.has = function (a, b) { return l.call(a, b) }; k.noConflict = function () { d._ = j; return this }; k.identity = function (a) { return a }; k.times =
				function (a, b, e) { for (var c = 0; c < a; c++)b.call(e, c) }; k.escape = function (a) { return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") }; k.result = function (a, b) { if (null == a) return null; var e = a[b]; return k.isFunction(e) ? e.call(a) : e }; k.mixin = function (a) { y(k.functions(a), function (e) { var c = k[e] = a[e]; A.prototype[e] = function () { var a = b.call(arguments); h.call(a, this._wrapped); return E(c.apply(k, a), this._chain) } }) }; var w = 0; k.uniqueId =
					function (a) { var b = w++; return a ? a + b : b }; k.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var H = /.^/, B = { "\\": "\\", "'": "'", r: "\r", n: "\n", t: "\t", u2028: "\u2028", u2029: "\u2029" }, I; for (I in B) B[B[I]] = I; var J = /\\|'|\r|\n|\t|\u2028|\u2029/g, K = /\\(\\|'|r|n|t|u2028|u2029)/g, D = function (a) { return a.replace(K, function (a, b) { return B[b] }) }; k.template = function (a, b, e) {
						e = k.defaults(e || {}, k.templateSettings); a = "__p+='" + a.replace(J, function (a) { return "\\" + B[a] }).replace(e.escape ||
							H, function (a, b) { return "'+\n_.escape(" + D(b) + ")+\n'" }).replace(e.interpolate || H, function (a, b) { return "'+\n(" + D(b) + ")+\n'" }).replace(e.evaluate || H, function (a, b) { return "';\n" + D(b) + "\n;__p+='" }) + "';\n"; e.variable || (a = "with(obj||{}){\n" + a + "}\n"); a = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + a + "return __p;\n"; var c = new Function(e.variable || "obj", "_", a); if (b) return c(b, k); b = function (a) { return c.call(this, a, k) }; b.source = "function(" + (e.variable || "obj") + "){\n" + a + "}"; return b
					};
	k.chain = function (a) { return k(a).chain() }; var A = function (a) { this._wrapped = a }; k.prototype = A.prototype; var E = function (a, b) { return b ? k(a).chain() : a }; k.mixin(k); y("pop push reverse shift sort splice unshift".split(" "), function (b) { var e = a[b]; A.prototype[b] = function () { var a = this._wrapped; e.apply(a, arguments); var c = a.length; ("shift" == b || "splice" == b) && 0 === c && delete a[0]; return E(a, this._chain) } }); y(["concat", "join", "slice"], function (b) {
		var e = a[b]; A.prototype[b] = function () {
			return E(e.apply(this._wrapped, arguments),
				this._chain)
		}
	}); A.prototype.chain = function () { this._chain = !0; return this }; A.prototype.value = function () { return this._wrapped }; return k
}.call({}), emmet = function (f) {
	function d(a) { !(a in g) && c && c(a); return g[a] } if ("undefined" == typeof _) try { _ = f.require("underscore") } catch (j) { } if ("undefined" == typeof _) throw "Cannot access to Underscore.js lib"; var g = { _: _ }, a = function () { }, c = null; return {
		define: function (a, c) { a in g || (g[a] = _.isFunction(c) ? this.exec(c) : c) }, require: d, exec: function (a, c) {
			return a.call(c || f, _.bind(d,
				this), _, this)
		}, extend: function (b, c) { var e = this, d; d = b && b.hasOwnProperty("constructor") ? b.constructor : function () { e.apply(this, arguments) }; _.extend(d, e); a.prototype = e.prototype; d.prototype = new a; b && _.extend(d.prototype, b); c && _.extend(d, c); d.prototype.constructor = d; d.__super__ = e.prototype; d.extend = this.extend; b.hasOwnProperty("toString") && (d.prototype.toString = b.toString); return d }, expandAbbreviation: function (a, c, e, l) {
			if (!a) return ""; c = c || "html"; var f = d("filters"), g = d("abbreviationParser"); e = d("profile").get(e,
				c); d("tabStops").resetTabstopIndex(); a = f.extractFromAbbreviation(a); l = g.parse(a[0], { syntax: c, contextNode: l }); c = f.composeList(c, e, a[1]); f.apply(l, c, e); return l.toString()
		}, defaultSyntax: function () { return "html" }, defaultProfile: function () { return "plain" }, log: function () { f.console && f.console.log && f.console.log.apply(f.console, arguments) }, setModuleLoader: function (a) { c = a }
	}
}(this); "undefined" !== typeof exports && ("undefined" !== typeof module && module.exports && (exports = module.exports = emmet), exports.emmet = emmet);
"undefined" !== typeof define && define(emmet);
emmet.define("abbreviationParser", function (f, d) {
	function j() { this.parent = null; this.children = []; this._attributes = []; this.abbreviation = ""; this.counter = 1; this._name = null; this._text = ""; this.repeatCount = 1; this.hasImplicitRepeat = !1; this._data = {}; this.padding = this.content = this.end = this.start = "" } function g(a) { return a.substring(1, a.length - 1) } function a(b) {
		b = f("utils").trim(b); var e = new j, c = e.addChild(), h, k = f("stringStream").create(b); b = 1E3; for (var m; !k.eol() && 0 < --b;)switch (h = k.peek(), h) {
			case "(": k.start =
				k.pos; if (k.skipToPair("(", ")")) h = a(g(k.current())), (m = k.match(/^\*(\d+)?/, !0)) && c._setRepeat(m[1]), d.each(h.children, function (a) { c.addChild(a) }); else throw 'Invalid abbreviation: mo matching ")" found for character at ' + k.pos; break; case ">": c = c.addChild(); k.next(); break; case "+": c = c.parent.addChild(); k.next(); break; case "^": h = c.parent || c; c = (h.parent || h).addChild(); k.next(); break; default: k.start = k.pos, k.eatWhile(function (a) {
					if ("[" == a || "{" == a) {
						if (k.skipToPair(a, n[a])) return k.backUp(1), !0; throw 'Invalid abbreviation: mo matching "' +
						n[a] + '" found for character at ' + k.pos;
					} return "+" == a ? (k.next(), a = k.eol() || ~"+>^*".indexOf(k.peek()), k.backUp(1), a) : "(" != a && l(a)
				}), c.setAbbreviation(k.current()), k.start = k.pos
		}if (1 > b) throw "Endless loop detected"; return e
	} function c(a) {
		a = f("utils").trim(a); var b = []; a = f("stringStream").create(a); for (a.eatSpace(); !a.eol();)if (a.start = a.pos, a.eatWhile(p)) {
			var e = a.current(), c = ""; if ("=" == a.peek()) {
				a.next(); a.start = a.pos; var d = a.peek(); if ('"' == d || "'" == d) {
					a.next(); a: {
						for (var c = a, h = void 0; h = c.next();)if (h ===
							d) { c = !0; break a } c = !1
					} if (c) c = a.current(), c = c.substring(1, c.length - 1); else throw "Invalid attribute value";
				} else if (a.eatWhile(/[^\s\]]/)) c = a.current(); else throw "Invalid attribute value";
			} b.push({ name: e, value: c }); a.eatSpace()
		} else break; return b
	} function b(a) { a = d.map(a, function (a) { return d.clone(a) }); var b = {}; return d.filter(a, function (a) { if (!(a.name in b)) return b[a.name] = a; var e = b[a.name]; e.value = "class" == a.name.toLowerCase() ? e.value + ((e.value.length ? " " : "") + a.value) : a.value; return !1 }) } function h(a) {
		for (var b =
			a.children.length - 1, e, c, k; 0 <= b; b--)if (c = a.children[b], c.isRepeating()) { k = e = c.repeatCount; c.repeatCount = 1; c.updateProperty("counter", 1); for (c.updateProperty("maxCount", k); 0 < --e;)c.parent.addChild(c.clone(), b + 1).updateProperty("counter", e + 1).updateProperty("maxCount", k) } d.each(a.children, h); return a
	} function e(a) { for (var b = a.children.length - 1; 0 <= b; b--) { var c = a.children[b]; c.isGroup() ? c.replace(e(c).children) : c.isEmpty() && c.remove() } d.each(a.children, e); return a } function l(a) {
		var b = a.charCodeAt(0); return 64 <
			b && 91 > b || 96 < b && 123 > b || 47 < b && 58 > b || -1 != "#.*:$-_!@|%".indexOf(a)
	} var m = /^[\w\-\$\:@\!%]+\+?$/i, p = /[\w\-:\$@]/, n = { "[": "]", "(": ")", "{": "}" }, q = Array.prototype.splice, r = [], t = [], s = []; j.prototype = {
		addChild: function (a, b) { a = a || new j; a.parent = this; d.isUndefined(b) ? this.children.push(a) : this.children.splice(b, 0, a); return a }, clone: function () {
			var a = new j; d.each("abbreviation counter _name _text repeatCount hasImplicitRepeat start end content padding".split(" "), function (b) { a[b] = this[b] }, this); a._attributes = d.map(this._attributes,
				function (a) { return d.clone(a) }); a._data = d.clone(this._data); a.children = d.map(this.children, function (b) { b = b.clone(); b.parent = a; return b }); return a
		}, remove: function () { this.parent && (this.parent.children = d.without(this.parent.children, this)); return this }, replace: function () { var a = this.parent, b = d.indexOf(a.children, this), e = d.flatten(arguments); q.apply(a.children, [b, 1].concat(e)); d.each(e, function (b) { b.parent = a }) }, updateProperty: function (a, b) {
			this[a] = b; d.each(this.children, function (e) {
				e.updateProperty(a,
					b)
			}); return this
		}, find: function (a) { return this.findAll(a)[0] }, findAll: function (a) { if (!d.isFunction(a)) { var b = a.toLowerCase(); a = function (a) { return a.name().toLowerCase() == b } } var e = []; d.each(this.children, function (b) { a(b) && e.push(b); e = e.concat(b.findAll(a)) }); return d.compact(e) }, data: function (a, b) { 2 == arguments.length && (this._data[a] = b, "resource" == a && f("elements").is(b, "snippet") && (this.content = b.data, this._text && (this.content = f("abbreviationUtils").insertChildContent(b.data, this._text)))); return this._data[a] },
		name: function () { var a = this.matchedResource(); return f("elements").is(a, "element") ? a.name : this._name }, attributeList: function () { var a = [], e = this.matchedResource(); f("elements").is(e, "element") && d.isArray(e.attributes) && (a = a.concat(e.attributes)); return b(a.concat(this._attributes)) }, attribute: function (a, b) {
			if (2 == arguments.length) { var e = d.indexOf(d.pluck(this._attributes, "name"), a.toLowerCase()); ~e ? this._attributes[e].value = b : this._attributes.push({ name: a, value: b }) } return (d.find(this.attributeList(),
				function (b) { return b.name == a }) || {}).value
		}, matchedResource: function () { return this.data("resource") }, index: function () { return this.parent ? d.indexOf(this.parent.children, this) : -1 }, _setRepeat: function (a) { a ? this.repeatCount = parseInt(a, 10) || 1 : this.hasImplicitRepeat = !0 }, setAbbreviation: function (a) {
			var e = this; this.abbreviation = a = (a || "").replace(/\*(\d+)?$/, function (a, b) { e._setRepeat(b); return "" }); var d; a: if (d = a, ~d.indexOf("{")) {
				for (var h = f("stringStream").create(d); !h.eol();)switch (h.peek()) {
					case "[": case "(": h.skipToPair(h.peek(),
						n[h.peek()]); break; case "{": h.start = h.pos; h.skipToPair("{", "}"); d = { element: d.substring(0, h.start), text: g(h.current()) }; break a; default: h.next()
				}d = void 0
			} else d = null; d && (a = d.element, this.content = this._text = d.text); d = a; for (var h = [], k = { "#": "id", ".": "class" }, l = null, j = f("stringStream").create(d); !j.eol();)switch (j.peek()) {
				case "#": case ".": null === l && (l = j.pos); var r = k[j.peek()]; j.next(); j.start = j.pos; j.eatWhile(p); h.push({ name: r, value: j.current() }); break; case "[": null === l && (l = j.pos); j.start = j.pos; if (!j.skipToPair("[",
					"]")) throw "Invalid attribute set definition"; h = h.concat(c(g(j.current()))); break; default: j.next()
			}d = h.length ? { element: d.substring(0, l), attributes: b(h) } : null; d && (a = d.element, this._attributes = d.attributes); if ((this._name = a) && !m.test(this._name)) throw "Invalid abbreviation";
		}, toString: function () {
			var a = f("utils"), b = this.start, e = this.end, c = this.content, h = this; d.each(s, function (a) { b = a(b, h, "start"); c = a(c, h, "content"); e = a(e, h, "end") }); var l = d.map(this.children, function (a) { return a.toString() }).join(""), c =
				f("abbreviationUtils").insertChildContent(c, l, { keepVariable: !1 }); return b + a.padString(c, this.padding) + e
		}, hasEmptyChildren: function () { return !!d.find(this.children, function (a) { return a.isEmpty() }) }, hasImplicitName: function () { return !this._name && !this.isTextNode() }, isGroup: function () { return !this.abbreviation }, isEmpty: function () { return !this.abbreviation && !this.children.length }, isRepeating: function () { return 1 < this.repeatCount || this.hasImplicitRepeat }, isTextNode: function () { return !this.name() && !this.attributeList().length },
		isElement: function () { return !this.isEmpty() && !this.isTextNode() }, deepestChild: function () { if (!this.children.length) return null; for (var a = this; a.children.length;)a = d.last(a.children); return a }
	}; s.push(function (a, b) { return f("utils").replaceCounter(a, b.counter, b.maxCount) }); return {
		parse: function (b, c) {
			c = c || {}; var l = a(b); if (c.contextNode) {
				l._name = c.contextNode.name; var f = {}; d.each(l._attributes, function (a) { f[a.name] = a }); d.each(c.contextNode.attributes, function (a) {
					a.name in f ? f[a.name].value = a.value : (a =
						d.clone(a), l._attributes.push(a), f[a.name] = a)
				})
			} d.each(r, function (a) { a(l, c) }); l = e(h(l)); d.each(t, function (a) { a(l, c) }); return l
		}, AbbreviationNode: j, addPreprocessor: function (a) { d.include(r, a) || r.push(a) }, removeFilter: function (a) { preprocessor = d.without(r, a) }, addPostprocessor: function (a) { d.include(t, a) || t.push(a) }, removePostprocessor: function (a) { t = d.without(t, a) }, addOutputProcessor: function (a) { d.include(s, a) || s.push(a) }, removeOutputProcessor: function (a) { s = d.without(s, a) }, isAllowedChar: function (a) {
			a = String(a);
			return l(a) || ~">+^[](){}".indexOf(a)
		}
	}
});
emmet.exec(function (f, d) {
	function j(g, a) {
		var c = f("resources"), b = f("elements"), h = f("abbreviationParser"); d.each(d.clone(g.children), function (e) {
			var l = c.getMatchedResource(e, a); if (d.isString(l)) e.data("resource", b.create("snippet", l)); else if (b.is(l, "reference")) {
				l = h.parse(l.data, { syntax: a }); if (1 < e.repeatCount) { var f = l.findAll(function (a) { return a.hasImplicitRepeat }); d.each(f, function (a) { a.repeatCount = e.repeatCount; a.hasImplicitRepeat = !1 }) } var g = l.deepestChild(); g && d.each(e.children, function (a) { g.addChild(a) });
				d.each(l.children, function (a) { d.each(e.attributeList(), function (b) { a.attribute(b.name, b.value) }) }); e.replace(l.children)
			} else e.data("resource", l); j(e, a)
		})
	} f("abbreviationParser").addPreprocessor(function (d, a) { var c = a.syntax || emmet.defaultSyntax(); j(d, c) })
});
emmet.exec(function (f, d) {
	function j(a) { var b = f("range"), c = []; for (a = f("stringStream").create(a); !a.eol();) { if ("\\" == a.peek()) a.next(); else if (a.start = a.pos, a.match(h, !0)) { c.push(b.create(a.start, h)); continue } a.next() } return c } function g(a, b) { var c = f("utils"), h = j(a); h.reverse(); d.each(h, function (d) { a = c.replaceSubstring(a, b, d) }); return a } function a(a) { return j(a.content).length ? !0 : !!d.find(a.attributeList(), function (a) { return !!j(a.value).length }) } function c(b, c, h) {
		var j = b.findAll(function (b) { return a(b) });
		a(b) && j.unshift(b); j.length ? d.each(j, function (a) { a.content = g(a.content, c); d.each(a._attributes, function (a) { a.value = g(a.value, c) }) }) : (b = b.deepestChild() || b, b.content = h ? c : f("abbreviationUtils").insertChildContent(b.content, c))
	} var b = f("abbreviationParser"), h = "$#"; b.addPreprocessor(function (a, b) { if (b.pastedContent) { var c = f("utils"), h = d.map(c.splitByLines(b.pastedContent, !0), c.trim); a.findAll(function (a) { if (a.hasImplicitRepeat) return a.data("paste", h), a.repeatCount = h.length }) } }); b.addPostprocessor(function (a,
		b) { !a.findAll(function (a) { var b = a.data("paste"), e = ""; d.isArray(b) ? e = b[a.counter - 1] : d.isFunction(b) ? e = b(a.counter - 1, a.content) : b && (e = b); e && c(a, e, !!a.data("pasteOverwrites")); a.data("paste", null); return !!b }).length && b.pastedContent && c(a, b.pastedContent) })
}); emmet.exec(function (f, d) { function j(g) { var a = f("tagName"); d.each(g.children, function (c) { if (c.hasImplicitName() || c.data("forceNameResolving")) c._name = a.resolve(c.parent.name()); j(c) }); return g } f("abbreviationParser").addPostprocessor(j) });
emmet.define("cssParser", function (f, d) {
	function j(a) { return "undefined" !== typeof a } function g() { return { "char": e.chnum, line: e.linenum } } function a(a, b, c) { var d = e; c = c || {}; l.push({ charstart: j(c["char"]) ? c["char"] : d.chnum, charend: j(c.charend) ? c.charend : d.chnum, linestart: j(c.line) ? c.line : d.linenum, lineend: j(c.lineend) ? c.lineend : d.linenum, value: a, type: b || a }) } function c(a, b) {
		var c = e, d = b || {}, h = j(d["char"]) ? d["char"] : c.chnum, d = j(d.line) ? d.line : c.linenum; return {
			name: "ParseError", message: a + " at line " + (d + 1) + " char " +
				(h + 1), walker: c, tokens: l
		}
	} function b(b) { var c = e, d = c.ch, h = g(), f = b ? b + d : d, d = c.nextChar(); for (b && (h["char"] -= b.length); p(d) || n(d);)f += d, d = c.nextChar(); a(f, "identifier", h) } function h() {
		var d = e.ch; if (" " === d || "\t" === d) { for (var d = e.ch, h = "", f = g(); " " === d || "\t" === d;)h += d, d = e.nextChar(); a(h, "white", f) } else {
			if ("/" === d) { var d = e, f = h = d.ch, k, l = g(); k = d.nextChar(); if ("*" !== k) l.charend = l["char"], l.lineend = l.line, d = a(f, f, l); else { for (; !("*" === h && "/" === k);)f += k, h = k, k = d.nextChar(); f += k; d.nextChar(); a(f, "comment", l); d = void 0 } return d } if ('"' ===
				d || "'" === d) { d = e; k = f = h = d.ch; for (var j = g(), h = d.nextChar(); h !== f;) { if ("\n" === h) if (l = d.nextChar(), "\\" === l) k += h + l; else throw c("Unterminated string", j); else k = "\\" === h ? k + (h + d.nextChar()) : k + h; h = d.nextChar() } k += h; d.nextChar(); a(k, "string", j) } else if ("(" === d) { d = e; h = d.ch; f = 0; k = h; l = g(); for (h = d.nextChar(); ")" !== h && !f;) { if ("(" === h) f++; else if (")" === h) f--; else if (!1 === h) throw c("Unterminated brace", l); k += h; h = d.nextChar() } k += h; d.nextChar(); a(k, "brace", l) } else {
					if ("-" === d || "." === d || n(d)) {
						d = e; h = d.ch; f = g(); k = h; l =
							"." === k; h = d.nextChar(); j = !n(h); if (l && j) f.charend = f["char"], f.lineend = f.line, d = a(k, ".", f); else if ("-" === k && j) d = b("-"); else { for (; !1 !== h && (n(h) || !l && "." === h);)"." === h && (l = !0), k += h, h = d.nextChar(); a(k, "number", f); d = void 0 } return d
					} if (p(d)) return b(); if (m(d)) d = e, f = d.ch, h = g(), k = d.nextChar(), "=" === k && m(f, !0) ? (a(f + k, "match", h), d.nextChar()) : (h.charend = h["char"] + 1, h.lineend = h.line, a(f, f, h)); else if ("\n" === d) a("line"), e.nextChar(); else throw c("Unrecognized character");
				}
		}
	} var e, l = [], m, p, n; e = {
		lines: null, total_lines: 0,
		linenum: -1, line: "", ch: "", chnum: -1, init: function (a) { var b = e; b.lines = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n"); b.total_lines = b.lines.length; b.chnum = -1; b.linenum = -1; b.ch = ""; b.line = ""; b.nextLine(); b.nextChar() }, nextLine: function () { this.linenum += 1; this.line = this.total_lines <= this.linenum ? !1 : this.lines[this.linenum]; -1 !== this.chnum && (this.chnum = 0); return this.line }, nextChar: function () {
			for (this.chnum += 1; "" === this.line.charAt(this.chnum);) {
				if (!1 === this.nextLine()) return this.ch = !1; this.chnum =
					-1; return this.ch = "\n"
			} return this.ch = this.line.charAt(this.chnum)
		}, peek: function () { return this.line.charAt(this.chnum + 1) }
	}; p = function (a) { return "&" == a || "_" === a || "-" === a || "a" <= a && "z" >= a || "A" <= a && "Z" >= a }; n = function (a) { return !1 !== a && "0" <= a && "9" >= a }; for (var q = "{}[]()+*=.,;:>~|\\%$#@^!".split(""), r = ["*", "^", "|", "$", "~"], t = {}, s = {}, u = 0; u < q.length; u += 1)t[q[u]] = !0; for (u = 0; u < r.length; u += 1)s[r[u]] = !0; m = function (a, b) { return b ? !!s[a] : !!t[a] }; return {
		lex: function (a) { e.init(a); for (l = []; !1 !== e.ch;)h(); return l }, parse: function (a) {
			var b =
				0; return d.map(this.lex(a), function (c) { "line" == c.type && (c.value = "\r" == a.charAt(b) && "\n" == a.charAt(b + 1) ? "\r\n" : a.charAt(b)); return { type: c.type, start: b, end: b += c.value.length } })
		}, toSource: function (a) { for (var b = 0, c = a.length, e, d = ""; b < c; b += 1)e = a[b], d = "line" === e.type ? d + "\n" : d + e.value; return d }
	}
});
emmet.define("xmlParser", function (f) {
	function d(b, c) {
		function e(a) { c.tokenize = a; return a(b, c) } var d = b.next(); if ("<" == d) { if (b.eat("!")) return b.eat("[") ? b.match("CDATA[") ? e(g("atom", "]]\x3e")) : null : b.match("--") ? e(g("comment", "--\x3e")) : b.match("DOCTYPE", !0, !0) ? (b.eatWhile(/[\w\._\-]/), e(a(1))) : null; if (b.eat("?")) return b.eatWhile(/[\w\._\-]/), c.tokenize = g("meta", "?>"), "meta"; u = b.eat("/") ? "closeTag" : "openTag"; b.eatSpace(); for (s = ""; d = b.eat(/[^\s\u00a0=<>\"\'\/?]/);)s += d; c.tokenize = j; return "tag" } if ("&" ==
			d) return (b.eat("#") ? b.eat("x") ? b.eatWhile(/[a-fA-F\d]/) && b.eat(";") : b.eatWhile(/[\d]/) && b.eat(";") : b.eatWhile(/[\w\.\-:]/) && b.eat(";")) ? "atom" : "error"; b.eatWhile(/[^&<]/); return "text"
	} function j(a, b) {
		var c = a.next(); if (">" == c || "/" == c && a.eat(">")) return b.tokenize = d, u = ">" == c ? "endTag" : "selfcloseTag", "tag"; if ("=" == c) return u = "equals", null; if (/[\'\"]/.test(c)) return b.tokenize = function (a, b) { for (; !a.eol();)if (a.next() == c) { b.tokenize = j; break } return "string" }, b.tokenize(a, b); a.eatWhile(/[^\s\u00a0=<>\"\'\/?]/);
		return "word"
	} function g(a, b) { return function (c, e) { for (; !c.eol();) { if (c.match(b)) { e.tokenize = d; break } c.next() } return a } } function a(b) { return function (c, e) { for (var h; null != (h = c.next());) { if ("<" == h) return e.tokenize = a(b + 1), e.tokenize(c, e); if (">" == h) if (1 == b) { e.tokenize = d; break } else return e.tokenize = a(b - 1), e.tokenize(c, e) } return "meta" } } function c() { for (var a = arguments.length - 1; 0 <= a; a--)v.cc.push(arguments[a]) } function b() { c.apply(null, arguments); return !0 } function h() { v.context && (v.context = v.context.prev) }
	function e(a) {
		if ("openTag" == a) { v.tagName = s; var c = v.startOfLine; return b(m, function (a) { if ("selfcloseTag" == a || "endTag" == a && t.autoSelfClosers.hasOwnProperty(v.tagName.toLowerCase())) return l(v.tagName.toLowerCase()), b(); if ("endTag" == a) { l(v.tagName.toLowerCase()); a = v.tagName; var e = t.doNotIndent.hasOwnProperty(a) || v.context && v.context.noIndent; v.context = { prev: v.context, tagName: a, indent: v.indented, startOfLine: c, noIndent: e } } return b() }) } if ("closeTag" == a) {
			a = !1; v.context ? v.context.tagName != s && (t.implicitlyClosed.hasOwnProperty(v.context.tagName.toLowerCase()) &&
				h(), a = !v.context || v.context.tagName != s) : a = !0; a && (z = "error"); var e = a; return b(function (a) { e && (z = "error"); if ("endTag" == a) return h(), b(); z = "error"; return b(arguments.callee) })
		} return b()
	} function l(a) { for (var b; v.context;) { b = v.context.tagName.toLowerCase(); if (!t.contextGrabbers.hasOwnProperty(b) || !t.contextGrabbers[b].hasOwnProperty(a)) break; h() } } function m(a) { if ("word" == a) return z = "attribute", b(p, m); if ("endTag" == a || "selfcloseTag" == a) return c(); z = "error"; return b(m) } function p(a) {
		if ("equals" == a) return b(n,
			m); t.allowMissing || (z = "error"); return "endTag" == a || "selfcloseTag" == a ? c() : b()
	} function n(a) { if ("string" == a) return b(q); if ("word" == a && t.allowUnquoted) return z = "string", b(); z = "error"; return "endTag" == a || "selfCloseTag" == a ? c() : b() } function q(a) { return "string" == a ? b(q) : c() } function r(a, b) { a.sol() && (b.startOfLine = !0, b.indented = 0); if (a.eatSpace()) return null; z = u = s = null; var c = b.tokenize(a, b); b.type = u; if ((c || u) && "comment" != c) for (v = b; !(b.cc.pop() || e)(u || c);); b.startOfLine = !1; return z || c } var t = {
		autoSelfClosers: {},
		implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: !0, allowMissing: !0
	}, s = null, u = null, v = null, z; return { parse: function (a, b) { b = b || 0; for (var c = { tokenize: d, cc: [], indented: 0, startOfLine: !0, tagName: null, context: null }, e = f("stringStream").create(a), h = []; !e.eol();)h.push({ type: r(e, c), start: e.start + b, end: e.pos + b }), e.start = e.pos; return h } }
});
emmet.define("string-score", function () { return { score: function (f, d, j) { if (f == d) return 1; if ("" == d) return 0; for (var g = 0, a = d.length, c = f.length, b, h = 1, e = 0, l, m, p, n; e < a; ++e) { p = d.charAt(e); l = f.indexOf(p.toLowerCase()); m = f.indexOf(p.toUpperCase()); n = Math.min(l, m); m = -1 < n ? n : Math.max(l, m); if (-1 === m) if (j) { h += 1 - j; continue } else return 0; else l = 0.1; f[m] === p && (l += 0.1); 0 === m ? (l += 0.6, 0 === e && (b = 1)) : " " === f.charAt(m - 1) && (l += 0.8); f = f.substring(m + 1, c); g += l } f = g / a; a = (f * (a / c) + f) / 2 / h; b && 1 > a + 0.15 && (a += 0.15); return a } } });
emmet.define("utils", function (f, d) {
	function j(a) { this._data = []; this.length = 0; a && this.append(a) } var g = "${0}"; j.prototype = { append: function (a) { this._data.push(a); this.length += a.length }, toString: function () { return this._data.join("") }, valueOf: function () { return this.toString() } }; return {
		reTag: /<\/?[\w:\-]+(?:\s+[\w\-:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*\s*(\/?)>$/, endsWithTag: function (a) { return this.reTag.test(a) }, isNumeric: function (a) {
			"string" == typeof a && (a = a.charCodeAt(0)); return a && 47 <
				a && 58 > a
		}, trim: function (a) { return (a || "").replace(/^\s+|\s+$/g, "") }, getNewline: function () { var a = f("resources"); if (!a) return "\n"; a = a.getVariable("newline"); return d.isString(a) ? a : "\n" }, setNewline: function (a) { var c = f("resources"); c.setVariable("newline", a); c.setVariable("nl", a) }, splitByLines: function (a, c) { var b = this.getNewline(), b = (a || "").replace(/\r\n/g, "\n").replace(/\n\r/g, "\n").replace(/\r/g, "\n").replace(/\n/g, b).split(b); c && (b = d.filter(b, function (a) { return a.length && !!this.trim(a) }, this)); return b },
		normalizeNewline: function (a) { return this.splitByLines(a).join(this.getNewline()) }, repeatString: function (a, c) { for (var b = [], d = 0; d < c; d++)b.push(a); return b.join("") }, getStringsPads: function (a) { a = d.map(a, function (a) { return d.isString(a) ? a.length : +a }); var c = d.max(a); return d.map(a, function (a) { return (a = c - a) ? this.repeatString(" ", a) : "" }, this) }, padString: function (a, c) {
			var b = d.isNumber(c) ? this.repeatString(f("resources").getVariable("indentation") || "\t", c) : c, h = [], e = this.splitByLines(a), l = this.getNewline();
			h.push(e[0]); for (var j = 1; j < e.length; j++)h.push(l + b + e[j]); return h.join("")
		}, zeroPadString: function (a, c) { for (var b = "", d = a.length; c > d++;)b += "0"; return b + a }, unindentString: function (a, c) { for (var b = this.splitByLines(a), d = 0; d < b.length; d++)0 == b[d].search(c) && (b[d] = b[d].substr(c.length)); return b.join(this.getNewline()) }, replaceUnescapedSymbol: function (a, c, b) {
			for (var h = 0, e = a.length, f = c.length, j = 0; h < e;)if ("\\" == a.charAt(h)) h += f + 1; else if (a.substr(h, f) == c) {
				var g = f; j++; var n = b; d.isFunction(b) && ((n = b(a, c, h, j)) ?
					(g = n[0].length, n = n[1]) : n = !1); !1 === n ? h++ : (a = a.substring(0, h) + n + a.substring(h + g), e = a.length, h += n.length)
			} else h++; return a
		}, replaceVariables: function (a, c) { c = c || {}; var b = d.isFunction(c) ? c : function (a, b) { return b in c ? c[b] : null }, h = f("resources"); return f("tabStops").processText(a, { variable: function (a) { var c = b(a.token, a.name, a); null === c && (c = h.getVariable(a.name)); if (null === c || d.isUndefined(c)) c = a.token; return c } }) }, replaceCounter: function (a, c, b) {
			a = String(a); c = String(c); /^\-?\d+$/.test(c) && (c = +c); var h =
				this; return this.replaceUnescapedSymbol(a, "$", function (a, f, j) { if ("{" == a.charAt(j + 1) || h.isNumeric(a.charAt(j + 1))) return !1; for (f = j + 1; "$" == a.charAt(f) && "{" != a.charAt(f + 1);)f++; var g = f - j, n = 0, q = !1, r; if (r = a.substr(f).match(/^@(\-?)(\d*)/)) f += r[0].length, r[1] && (q = !0), n = parseInt(r[2] || 1) - 1; q && (b && d.isNumber(c)) && (c = b - c + 1); c += n; return [a.substring(j, f), h.zeroPadString(c + "", g)] })
		}, matchesTag: function (a) { return this.reTag.test(a || "") }, escapeText: function (a) { return a.replace(/([\$\\])/g, "\\$1") }, unescapeText: function (a) {
			return a.replace(/\\(.)/g,
				"$1")
		}, getCaretPlaceholder: function () { return d.isFunction(g) ? g.apply(this, arguments) : g }, setCaretPlaceholder: function (a) { g = a }, getLinePadding: function (a) { return (a.match(/^(\s+)/) || [""])[0] }, getLinePaddingFromPosition: function (a, c) { var b = this.findNewlineBounds(a, c); return this.getLinePadding(b.substring(a)) }, escapeForRegexp: function (a) { return a.replace(RegExp("[.*+?|()\\[\\]{}\\\\]", "g"), "\\$&") }, prettifyNumber: function (a, c) { return a.toFixed("undefined" == typeof c ? 2 : c).replace(/\.?0+$/, "") }, stringBuilder: function (a) { return new j(a) },
		replaceSubstring: function (a, c, b, h) { d.isObject(b) && "end" in b && (h = b.end, b = b.start); d.isString(h) && (h = b + h.length); d.isUndefined(h) && (h = b); return 0 > b || b > a.length ? a : a.substring(0, b) + c + a.substring(h) }, narrowToNonSpace: function (a, c, b) { c = f("range").create(c, b); for (b = /[\s\n\r\u00a0]/; c.start < c.end && b.test(a.charAt(c.start));)c.start++; for (; c.end > c.start;)if (c.end--, !b.test(a.charAt(c.end))) { c.end++; break } return c }, findNewlineBounds: function (a, c) {
			for (var b = a.length, d = 0, e = b - 1, j = c - 1; 0 < j; j--) {
				var g = a.charAt(j);
				if ("\n" == g || "\r" == g) { d = j + 1; break }
			} for (j = c; j < b; j++)if (g = a.charAt(j), "\n" == g || "\r" == g) { e = j; break } return f("range").create(d, e - d)
		}, deepMerge: function () { var a, c, b, h, e, f = arguments[0] || {}, j = 1, g = arguments.length; for (!d.isObject(f) && !d.isFunction(f) && (f = {}); j < g; j++)if (null != (a = arguments[j])) for (c in a) b = f[c], h = a[c], f !== h && (h && (d.isObject(h) || (e = d.isArray(h))) ? (e ? (e = !1, b = b && d.isArray(b) ? b : []) : b = b && d.isObject(b) ? b : {}, f[c] = this.deepMerge(b, h)) : void 0 !== h && (f[c] = h)); return f }
	}
});
emmet.define("range", function (f, d) {
	function j(a, c, b) { switch (b) { case "eq": case "==": return a === c; case "lt": case "<": return a < c; case "lte": case "<=": return a <= c; case "gt": case ">": return a > c; case "gte": case ">=": return a >= c } } function g(a, c) { d.isObject(a) && "start" in a ? (this.start = Math.min(a.start, a.end), this.end = Math.max(a.start, a.end)) : d.isArray(a) ? (this.start = a[0], this.end = a[1]) : (c = d.isString(c) ? c.length : +c, this.start = a, this.end = a + c) } g.prototype = {
		length: function () { return Math.abs(this.end - this.start) },
		equal: function (a) { return this.cmp(a, "eq", "eq") }, shift: function (a) { this.start += a; this.end += a; return this }, overlap: function (a) { return a.start <= this.end && a.end >= this.start }, intersection: function (a) { if (this.overlap(a)) { var c = Math.max(a.start, this.start); a = Math.min(a.end, this.end); return new g(c, a - c) } return null }, union: function (a) { if (this.overlap(a)) { var c = Math.min(a.start, this.start); a = Math.max(a.end, this.end); return new g(c, a - c) } return null }, inside: function (a) { return this.cmp(a, "lte", "gt") }, contains: function (a) {
			return this.cmp(a,
				"lt", "gt")
		}, include: function () { return this.cmp(loc, "lte", "gte") }, cmp: function (a, c, b) { var d; a instanceof g ? (d = a.start, a = a.end) : d = a; return j(this.start, d, c || "<=") && j(this.end, a, b || ">") }, substring: function (a) { return 0 < this.length() ? a.substring(this.start, this.end) : "" }, clone: function () { return new g(this.start, this.length()) }, toArray: function () { return [this.start, this.end] }, toString: function () { return "{" + this.start + ", " + this.length() + "}" }
	}; return {
		create: function (a, c) {
			if (d.isUndefined(a) || null === a) return null;
			if (a instanceof g) return a; d.isObject(a) && ("start" in a && "end" in a) && (c = a.end - a.start, a = a.start); return new g(a, c)
		}, create2: function (a, c) { d.isNumber(a) && d.isNumber(c) && (c -= a); return this.create(a, c) }
	}
});
emmet.define("handlerList", function (f, d) { function j() { this._list = [] } j.prototype = { add: function (f, a) { this._list.push(d.extend({ order: 0 }, a || {}, { fn: f })) }, remove: function (f) { this._list = d.without(this._list, d.find(this._list, function (a) { return a.fn === f })) }, list: function () { return d.sortBy(this._list, "order").reverse() }, listFn: function () { return d.pluck(this.list(), "fn") }, exec: function (f, a) { a = a || []; var c = null; d.find(this.list(), function (b) { c = b.fn.apply(b, a); if (c !== f) return !0 }); return c } }; return { create: function () { return new j } } });
emmet.define("tokenIterator", function (f, d) {
	function j(d) { this.tokens = d; this._position = 0; this.reset() } j.prototype = {
		next: function () { if (this.hasNext()) { var d = this.tokens[++this._i]; this._position = d.start; return d } return null }, current: function () { return this.tokens[this._i] }, position: function () { return this._position }, hasNext: function () { return this._i < this._il - 1 }, reset: function () { this._i = -1; this._il = this.tokens.length }, item: function () { return this.tokens[this._i] }, itemNext: function () {
			return this.tokens[this._i +
				1]
		}, itemPrev: function () { return this.tokens[this._i - 1] }, nextUntil: function (f, a) { for (var c, b = d.isString(f) ? function (a) { return a.type == f } : f; (c = this.next()) && !(a && a.call(this, c), b.call(this, c));); }
	}; return { create: function (d) { return new j(d) } }
});
emmet.define("stringStream", function () {
	function f(d) { this.pos = this.start = 0; this.string = d } f.prototype = {
		eol: function () { return this.pos >= this.string.length }, sol: function () { return 0 == this.pos }, peek: function () { return this.string.charAt(this.pos) }, next: function () { if (this.pos < this.string.length) return this.string.charAt(this.pos++) }, eat: function (d) { var f = this.string.charAt(this.pos); if ("string" == typeof d ? f == d : f && (d.test ? d.test(f) : d(f))) return ++this.pos, f }, eatWhile: function (d) {
			for (var f = this.pos; this.eat(d););
			return this.pos > f
		}, eatSpace: function () { for (var d = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos; return this.pos > d }, skipToEnd: function () { this.pos = this.string.length }, skipTo: function (d) { d = this.string.indexOf(d, this.pos); if (-1 < d) return this.pos = d, !0 }, skipToPair: function (d, f) { for (var g = 0, a, c = this.pos, b = this.string.length; c < b;)if (a = this.string.charAt(c++), a == d) g++; else if (a == f && (g--, 1 > g)) return this.pos = c, !0; return !1 }, backUp: function (d) { this.pos -= d }, match: function (d, f, g) {
			if ("string" ==
				typeof d) { if (g = g ? function (a) { return a.toLowerCase() } : function (a) { return a }, g(this.string).indexOf(g(d), this.pos) == this.pos) return !1 !== f && (this.pos += d.length), !0 } else { if ((d = this.string.slice(this.pos).match(d)) && !1 !== f) this.pos += d[0].length; return d }
		}, current: function () { return this.string.slice(this.start, this.pos) }
	}; return { create: function (d) { return new f(d) } }
});
emmet.define("resources", function (f, d) {
	function j(b, c, d) { var h = f("utils"); c = h.replaceUnescapedSymbol(c, "|", h.getCaretPlaceholder()); if ("snippets" == d) return f("elements").create("snippet", c); if ("abbreviations" == d) { d = c; f("utils").trim(b); b = f("elements"); var j; b = (j = a.exec(d)) ? b.create("element", j[1], j[2], "/" == j[4]) : b.create("reference", d); return b } } var g = {}, a = /^<(\w+\:?[\w\-]*)((?:\s+[\w\:\-]+\s*=\s*(['"]).*?\3)*)\s*(\/?)>/, c = {}, b = {}, h = f("handlerList").create(); return {
		setVocabulary: function (a, d) {
			g = {};
			"system" == d ? c = a : b = a
		}, getVocabulary: function (a) { return "system" == a ? c : b }, getMatchedResource: function (a, b) { return h.exec(null, d.toArray(arguments)) || this.findSnippet(b, a.name()) }, getVariable: function (a) { return (this.getSection("variables") || {})[a] }, setVariable: function (a, b) { var c = this.getVocabulary("user") || {}; "variables" in c || (c.variables = {}); c.variables[a] = b; this.setVocabulary(c, "user") }, hasSyntax: function (a) { return a in this.getVocabulary("user") || a in this.getVocabulary("system") }, addResolver: function (a,
			b) { h.add(a, b) }, removeResolver: function (a) { h.remove(a) }, getSection: function (a) { if (!a) return null; a in g || (g[a] = f("utils").deepMerge({}, c[a], b[a])); for (var h = g[a], j = d.rest(arguments), p; h && (p = j.shift());)if (p in h) h = h[p]; else return null; return h }, findItem: function (a, b) { for (var c = this.getSection(a); c;) { if (b in c) return c[b]; c = this.getSection(c["extends"]) } }, findSnippet: function (a, b, c) {
				if (!a || !b) return null; c = c || []; var h = [b]; ~b.indexOf("-") && h.push(b.replace(/\-/g, ":")); var f = this.getSection(a), g = null;
				d.find(["snippets", "abbreviations"], function (b) { var c = this.getSection(a, b); if (c) return d.find(h, function (a) { if (c[a]) return g = j(a, c[a], b) }) }, this); c.push(a); return !g && f["extends"] && !d.include(c, f["extends"]) ? this.findSnippet(f["extends"], b, c) : g
			}, fuzzyFindSnippet: function (a, b, c) { c = c || 0.3; a = this.getAllSnippets(a); var h = f("string-score"); b = b.replace(/:$/, "").replace(/:/g, "-"); var j = d.map(a, function (a, c) { return { key: c, score: h.score(a.nk, b, 0.1) } }); if ((j = d.last(d.sortBy(j, "score"))) && j.score >= c) return a[j.key].parsedValue },
		getAllSnippets: function (a) { var b = "all-" + a; if (!g[b]) { var c = [], h = []; do { var f = this.getSection(a); if (!f) break; d.each(["snippets", "abbreviations"], function (a) { var b = {}; d.each(f[a] || null, function (c, d) { b[d] = { nk: d.replace(/:$/, "").replace(/:/g, "-"), value: c, parsedValue: j(d, c, a), type: a } }); c.push(b) }); h.push(a); a = f["extends"] } while (a && !d.include(h, a)); g[b] = d.extend.apply(d, c.reverse()) } return g[b] }
	}
});
emmet.define("actions", function (f, d) {
	function j(a) { return f("utils").trim(a.charAt(0).toUpperCase() + a.substring(1).replace(/_[a-z]/g, function (a) { return " " + a.charAt(1).toUpperCase() })) } var g = {}; return {
		add: function (a, c, b) { a = a.toLowerCase(); b = b || {}; b.label || (b.label = j(a)); g[a] = { name: a, fn: c, options: b } }, get: function (a) { return g[a.toLowerCase()] }, run: function (a, c) { d.isArray(c) || (c = d.rest(arguments)); var b = this.get(a); if (b) return b.fn.apply(emmet, c); emmet.log('Action "%s" is not defined', a); return !1 }, getAll: function () { return g },
		getList: function () { return d.values(this.getAll()) }, getMenu: function (a) { var c = []; a = a || []; d.each(this.getList(), function (b) { if (!b.options.hidden && !d.include(a, b.name)) { var h = j(b.name), e = c; if (b.options.label) for (var f = b.options.label.split("/"), h = f.pop(), g, p; g = f.shift();)p = d.find(e, function (a) { return "submenu" == a.type && a.name == g }), p || (p = { name: g, type: "submenu", items: [] }, e.push(p)), e = p.items; e.push({ type: "action", name: b.name, label: h }) } }); return c }, getActionNameForMenuTitle: function (a, c) {
			var b = null; d.find(c ||
				this.getMenu(), function (c) { if ("action" == c.type) { if (c.label == a || c.name == a) return b = c.name } else return b = this.getActionNameForMenuTitle(a, c.items) }, this); return b || null
		}
	}
});
emmet.define("profile", function (f, d) {
	function j(a) { d.extend(this, h, a) } function g(a, b) { switch (String(b || "").toLowerCase()) { case "lower": return a.toLowerCase(); case "upper": return a.toUpperCase() }return a } function a(a, c) { return b[a.toLowerCase()] = new j(c) } function c() { a("xhtml"); a("html", { self_closing_tag: !1 }); a("xml", { self_closing_tag: !0, tag_nl: !0 }); a("plain", { tag_nl: !1, indent: !1, place_cursor: !1 }); a("line", { tag_nl: !1, indent: !1, extraFilters: "s" }) } var b = {}, h = {
		tag_case: "asis", attr_case: "asis", attr_quotes: "double",
		tag_nl: "decide", tag_nl_leaf: !1, place_cursor: !0, indent: !0, inline_break: 3, self_closing_tag: "xhtml", filters: "", extraFilters: ""
	}; j.prototype = { tagName: function (a) { return g(a, this.tag_case) }, attributeName: function (a) { return g(a, this.attr_case) }, attributeQuote: function () { return "single" == this.attr_quotes ? "'" : '"' }, selfClosing: function () { return "xhtml" == this.self_closing_tag ? " /" : !0 === this.self_closing_tag ? "/" : "" }, cursor: function () { return this.place_cursor ? f("utils").getCaretPlaceholder() : "" } }; c(); return {
		create: function (b,
			c) { return 2 == arguments.length ? a(b, c) : new j(d.defaults(b || {}, h)) }, get: function (a, c) { if (!a && c) { var h = f("resources").findItem(c, "profile"); h && (a = h) } return !a ? b.plain : a instanceof j ? a : d.isString(a) && a.toLowerCase() in b ? b[a.toLowerCase()] : this.create(a) }, remove: function (a) { a = (a || "").toLowerCase(); a in b && delete b[a] }, reset: function () { b = {}; c() }, stringCase: g
	}
});
emmet.define("editorUtils", function (f) { return { isInsideTag: function (d, f) { for (var g = /^<\/?\w[\w\:\-]*.*?>/, a = f; -1 < a && "<" != d.charAt(a);)a--; return -1 != a && (g = g.exec(d.substring(a))) && f > a && f < a + g[0].length ? !0 : !1 }, outputInfo: function (d, f, g) { g = g || d.getProfileName(); return { syntax: String(f || d.getSyntax()), profile: g ? String(g) : null, content: String(d.getContent()) } }, unindent: function (d, j) { return f("utils").unindentString(j, this.getCurrentLinePadding(d)) }, getCurrentLinePadding: function (d) { return f("utils").getLinePadding(d.getCurrentLine()) } } });
emmet.define("actionUtils", function (f) {
	return {
		mimeTypes: { gif: "image/gif", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", svg: "image/svg+xml", html: "text/html", htm: "text/html" }, extractAbbreviation: function (d) {
			for (var j = d.length, g = -1, a = 0, c = 0, b = 0, h = f("utils"), e = f("abbreviationParser"); ;) {
				j--; if (0 > j) { g = 0; break } var l = d.charAt(j); if ("]" == l) c++; else if ("[" == l) { if (!c) { g = j + 1; break } c-- } else if ("}" == l) b++; else if ("{" == l) { if (!b) { g = j + 1; break } b-- } else if (")" == l) a++; else if ("(" == l) { if (!a) { g = j + 1; break } a-- } else if (!c &&
					!b && (!e.isAllowedChar(l) || ">" == l && h.endsWithTag(d.substring(0, j + 1)))) { g = j + 1; break }
			} return -1 != g && !b && !c && !a ? d.substring(g).replace(/^[\*\+\>\^]+/, "") : ""
		}, getImageSize: function (d) {
			var f = function () { return d.charCodeAt(g++) }; if ("\u0089PNG\r\n\u001a\n" === d.substr(0, 8)) { var g = d.indexOf("IHDR") + 4; return { width: f() << 24 | f() << 16 | f() << 8 | f(), height: f() << 24 | f() << 16 | f() << 8 | f() } } if ("GIF8" === d.substr(0, 4)) return g = 6, { width: f() | f() << 8, height: f() | f() << 8 }; if ("\u00ff\u00d8" === d.substr(0, 2)) for (var g = 2, a = d.length; g < a &&
				255 == f();) { var c = f(); if (218 == c) break; var b = f() << 8 | f(); if (192 <= c && 207 >= c && !(c & 4) && !(c & 8)) return g += 1, { height: f() << 8 | f(), width: f() << 8 | f() }; g += b - 2 }
		}, captureContext: function (d) {
			if (String(d.getSyntax()) in { html: 1, xml: 1, xsl: 1 }) {
				var j = String(d.getContent()), g = f("htmlMatcher").find(j, d.getCaretPos()); if (g && "tag" == g.type) {
					d = /([\w\-:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g; for (var g = g.open, j = g.range.substring(j).replace(/^<[\w\-\:]+/, ""), g = { name: g.name, attributes: [] }, a; a = d.exec(j);)g.attributes.push({
						name: a[1],
						value: a[2]
					}); return g
				}
			} return null
		}, findExpressionBounds: function (d, j) { for (var g = String(d.getContent()), a = g.length, c = d.getCaretPos() - 1, b = c + 1; 0 <= c && j(g.charAt(c), c, g);)c--; for (; b < a && j(g.charAt(b), b, g);)b++; if (b > c) return f("range").create([++c, b]) }, compoundUpdate: function (d, f) { if (f) { var g = d.getSelectionRange(); d.replaceContent(f.data, f.start, f.end, !0); d.createSelection(f.caret, f.caret + g.end - g.start); return !0 } return !1 }, detectSyntax: function (d, j) {
			var g = j || "html"; f("resources").hasSyntax(g) || (g = "html");
			if ("html" == g && (this.isStyle(d) || this.isInlineCSS(d))) g = "css"; return g
		}, detectProfile: function (d) { var j = d.getSyntax(), g = f("resources").findItem(j, "profile"); if (g) return g; switch (j) { case "xml": case "xsl": return "xml"; case "css": if (this.isInlineCSS(d)) return "line"; break; case "html": return (g = f("resources").getVariable("profile")) || (g = this.isXHTML(d) ? "xhtml" : "html"), g }return "xhtml" }, isXHTML: function (d) { return -1 != d.getContent().search(/<!DOCTYPE[^>]+XHTML/i) }, isStyle: function (d) {
			var j = String(d.getContent());
			d = d.getCaretPos(); return (j = f("htmlMatcher").tag(j, d)) && "style" == j.open.name.toLowerCase() && j.innerRange.cmp(d, "lte", "gte")
		}, isInlineCSS: function (d) { var j = String(d.getContent()); d = d.getCaretPos(); return (j = f("xmlEditTree").parseFromPosition(j, d, !0)) ? (j = j.itemFromPosition(d, !0)) && "style" == j.name().toLowerCase() && j.valueRange(!0).cmp(d, "lte", "gte") : !1 }
	}
});
emmet.define("abbreviationUtils", function (f, d) {
	return {
		isSnippet: function (d) { return f("elements").is(d.matchedResource(), "snippet") }, isUnary: function (d) { var g = d.matchedResource(); return d.children.length || this.isSnippet(d) ? !1 : g && g.is_empty || f("tagName").isEmptyElement(d.name()) }, isInline: function (d) { return d.isTextNode() || !d.name() || f("tagName").isInlineLevel(d.name()) }, isBlock: function (d) { return this.isSnippet(d) || !this.isInline(d) }, isSnippet: function (d) {
			return f("elements").is(d.matchedResource(),
				"snippet")
		}, hasTagsInContent: function (d) { return f("utils").matchesTag(d.content) }, hasBlockChildren: function (f) { return this.hasTagsInContent(f) && this.isBlock(f) || d.any(f.children, function (d) { return this.isBlock(d) }, this) }, insertChildContent: function (j, g, a) {
			a = d.extend({ keepVariable: !0, appendIfNoChild: !0 }, a || {}); var c = !1, b = f("utils"); j = b.replaceVariables(j, function (d, e, f) { var m = d; "child" == e && (m = b.padString(g, b.getLinePaddingFromPosition(j, f.start)), c = !0, a.keepVariable && (m += d)); return m }); !c && a.appendIfNoChild &&
				(j += g); return j
		}
	}
});
emmet.define("base64", function () {
	return {
		encode: function (f) {
			for (var d = [], j, g, a, c, b, h, e = 0, l = f.length; e < l;)c = f.charCodeAt(e++), b = f.charCodeAt(e++), h = f.charCodeAt(e++), j = c & 255, g = b & 255, a = h & 255, c = j >> 2, j = (j & 3) << 4 | g >> 4, g = (g & 15) << 2 | a >> 6, a &= 63, isNaN(b) ? g = a = 64 : isNaN(h) && (a = 64), d.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(j) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a));
			return d.join("")
		}, decode: function (f) {
			var d, j, g, a, c, b = 0, h = 0, e = [], l = f.length; if (!f) return f; f += ""; do d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(f.charAt(b++)), j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(f.charAt(b++)), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(f.charAt(b++)), c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(f.charAt(b++)), g = d << 18 | j << 12 | a << 6 | c, d = g >> 16 &
				255, j = g >> 8 & 255, g &= 255, 64 == a ? e[h++] = String.fromCharCode(d) : 64 == c ? e[h++] = String.fromCharCode(d, j) : e[h++] = String.fromCharCode(d, j, g); while (b < l); return e.join("")
		}
	}
});
emmet.define("htmlMatcher", function (f, d) {
	function j(a, b, d) { return a.substring(b, b + d.length) == d } var g = /^<([\w\:\-]+)((?:\s+[\w\-:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, a = /^<\/([\w\:\-]+)[^>]*>/; return {
		find: function (c, b) {
			var h = f("range"), e, l = {}, m; e = {
				open: function (a) { return (a = this.matches(a)) && "open" == a.type ? a : null }, close: function (a) { return (a = this.matches(a)) && "close" == a.type ? a : null }, matches: function (b) {
					var d = "p" + b; if (!(d in l) && "<" == c.charAt(b)) {
						var e = c.slice(b); l[d] = (m = e.match(g)) ?
							{ name: m[1], selfClose: !!m[3], range: f("range").create(b, m[0]), type: "open" } : (m = e.match(a)) ? { name: m[1], range: f("range").create(b, m[0]), type: "close" } : !1
					} return l[d]
				}, text: function () { return c }
			}; for (var p = null, n = null, q = b; 0 <= q; q--)if (p = e.open(q)) if (p.selfClose) { if (p.range.cmp(b, "lt", "gt")) break } else {
				a: {
					for (var n = p, r = e, t = [], s = null, u = r.text(), v = n.range.end, z = u.length; v < z; v++) {
						if (j(u, v, "\x3c!--")) for (s = v; s < z; s++)if (j(u, s, "--\x3e")) { v = s + 3; break } if (s = r.matches(v)) if ("open" == s.type && !s.selfClose) t.push(s.name);
						else if ("close" == s.type) { if (!t.length) { n = s.name == n.name ? s : null; break a } if (d.last(t) == s.name) t.pop(); else { for (var x = !1; t.length && !x;)t.pop() == s.name && (x = !0); if (!t.length && !x) { n = s.name == n.name ? s : null; break a } } }
					} n = void 0
				} if (n) { if (h.create2(p.range.start, n.range.end).contains(b)) break } else if (p.range.contains(b)) break; p = null
			} else if (j(c, q, "--\x3e")) for (r = q - 1; 0 <= r && !j(c, r, "--\x3e"); r--) { if (j(c, r, "\x3c!--")) { q = r; break } } else if (j(c, q, "\x3c!--")) {
				r = q + 4; for (p = c.length; r < p; r++)if (j(c, r, "--\x3e")) { r += 3; break } p =
					{ range: f("range").create(q, d.isNumber(r) ? r - q : r[0]), type: "comment" }; break
			} if (p) return e = q = null, n ? (q = h.create2(p.range.start, n.range.end), e = h.create2(p.range.end, n.range.start)) : q = e = h.create2(p.range.start, p.range.end), "comment" == p.type && (h = q.substring(c), e.start += h.length - h.replace(/^<\!--\s*/, "").length, e.end -= h.length - h.replace(/\s*--\x3e$/, "").length), {
				open: p, close: n, type: "comment" == p.type ? "comment" : "tag", innerRange: e, innerContent: function () { return this.innerRange.substring(c) }, outerRange: q, outerContent: function () { return this.outerRange.substring(c) },
				range: !e.length() || !e.cmp(b, "lte", "gte") ? q : e, content: function () { return this.range.substring(c) }, source: c
			}
		}, tag: function (a, b) { var d = this.find(a, b); if (d && "tag" == d.type) return d }
	}
});
emmet.define("tabStops", function (f, d) {
	var j = 100, g = 0, a = { replaceCarets: !1, escape: function (a) { return "\\" + a }, tabstop: function (a) { return a.token }, variable: function (a) { return a.token } }; f("abbreviationParser").addOutputProcessor(function (a, b) {
		var d = 0, e = f("tabStops"), j = f("utils"), m = { tabstop: function (a) { var b = parseInt(a.group); if (0 == b) return "${0}"; b > d && (d = b); return a.placeholder ? (b += g, a = e.processText(a.placeholder, m), "${" + b + ":" + a + "}") : "${" + (b + g) + "}" } }; a = e.processText(a, m); a = j.replaceVariables(a, e.variablesResolver(b));
		g += d + 1; return a
	}); return {
		extract: function (c, b) {
			var h = f("utils"), e = { carets: "" }, g = []; b = d.extend({}, a, b, { tabstop: function (a) { var b = a.token, c = ""; "cursor" == a.placeholder ? g.push({ start: a.start, end: a.start + b.length, group: "carets", value: "" }) : ("placeholder" in a && (e[a.group] = a.placeholder), a.group in e && (c = e[a.group]), g.push({ start: a.start, end: a.start + b.length, group: a.group, value: c })); return b } }); b.replaceCarets && (c = c.replace(RegExp(h.escapeForRegexp(h.getCaretPlaceholder()), "g"), "${0:cursor}")); c = this.processText(c,
				b); var j = h.stringBuilder(), p = 0, h = d.map(g, function (a) { j.append(c.substring(p, a.start)); var b = j.length, d = e[a.group] || ""; j.append(d); p = a.end; return { group: a.group, start: b, end: b + d.length } }); j.append(c.substring(p)); return { text: j.toString(), tabstops: d.sortBy(h, "start") }
		}, processText: function (c, b) {
			b = d.extend({}, a, b); for (var h = f("utils").stringBuilder(), e = f("stringStream").create(c), g, j; g = e.next();)if ("\\" == g && !e.eol()) h.append(b.escape(e.next())); else {
				j = g; if ("$" == g) if (e.start = e.pos - 1, e.match(/^[0-9]+/)) j =
					b.tabstop({ start: h.length, group: e.current().substr(1), token: e.current() }); else if (g = e.match(/^\{([a-z_\-][\w\-]*)\}/)) j = b.variable({ start: h.length, name: g[1], token: e.current() }); else if (g = e.match(/^\{([0-9]+)(:.+?)?\}/, !1)) { e.skipToPair("{", "}"); j = { start: h.length, group: g[1], token: e.current() }; if (g = j.token.substring(j.group.length + 2, j.token.length - 1)) j.placeholder = g.substr(1); j = b.tabstop(j) } h.append(j)
			} return h.toString()
		}, upgrade: function (a, b) {
			var h = 0, e = {
				tabstop: function (a) {
					var c = parseInt(a.group);
					c > h && (h = c); return a.placeholder ? "${" + (c + b) + ":" + a.placeholder + "}" : "${" + (c + b) + "}"
				}
			}; d.each(["start", "end", "content"], function (b) { a[b] = this.processText(a[b], e) }, this); return h
		}, variablesResolver: function (a) { var b = {}, h = f("resources"); return function (e, g) { if ("child" == g) return e; if ("cursor" == g) return f("utils").getCaretPlaceholder(); var m = a.attribute(g); if (!d.isUndefined(m) && m !== e || (m = h.getVariable(g))) return m; b[g] || (b[g] = j++); return "${" + b[g] + ":" + g + "}" } }, resetTabstopIndex: function () { g = 0; j = 100 }
	}
});
emmet.define("preferences", function (f, d) {
	var j = {}, g = {}, a = null, c = null; return {
		define: function (a, c, e) { var f = a; d.isString(a) && (f = {}, f[a] = { value: c, description: e }); d.each(f, function (a, b) { g[b] = d.isObject(a) && "value" in a && 3 > d.keys(a).length ? a : { value: a } }) }, set: function (a, c) {
			var e = a; d.isString(a) && (e = {}, e[a] = c); d.each(e, function (a, b) {
				if (!(b in g)) throw 'Property "' + b + '" is not defined. You should define it first with `define` method of current module'; if (a !== g[b].value) {
					switch (typeof g[b].value) {
						case "boolean": var c =
							a; d.isString(c) ? (c = c.toLowerCase(), a = "yes" == c || "true" == c || "1" == c) : a = !!c; break; case "number": a = parseInt(a + "", 10) || 0; break; default: a += ""
					}j[b] = a
				} else b in j && delete j[b]
			})
		}, get: function (a) { if (a in j) return j[a]; if (a in g) return g[a].value }, getArray: function (a) { a = this.get(a); d.isUndefined(a) || (a = d.map(a.split(","), f("utils").trim), a.length || (a = null)); return a }, getDict: function (a) { var c = {}; d.each(this.getArray(a), function (a) { a = a.split(":"); c[a[0]] = a[1] }); return c }, description: function (a) {
			return a in g ?
				g[a].description : void 0
		}, remove: function (a) { d.isArray(a) || (a = [a]); d.each(a, function (a) { a in j && delete j[a]; a in g && delete g[a] }) }, list: function () { return d.map(d.keys(g).sort(), function (a) { return { name: a, value: this.get(a), type: typeof g[a].value, description: g[a].description } }, this) }, load: function (a) { d.each(a, function (a, b) { this.set(b, a) }, this) }, exportModified: function () { return d.clone(j) }, reset: function () { j = {} }, _startTest: function () { a = g; c = j; g = {}; j = {} }, _stopTest: function () { g = a; j = c }
	}
});
emmet.define("filters", function (f, d) {
	function j(a) { return !a ? [] : d.isString(a) ? a.split(/[\|,]/g) : a } var g = {}; return {
		add: function (a, c) { g[a] = c }, apply: function (a, c, b) { var h = f("utils"); b = f("profile").get(b); d.each(j(c), function (c) { (c = h.trim(c.toLowerCase())) && c in g && (a = g[c](a, b)) }); return a }, composeList: function (a, c, b) { c = f("profile").get(c); a = j(c.filters || f("resources").findItem(a, "filters") || "html"); c.extraFilters && (a = a.concat(j(c.extraFilters))); b && (a = a.concat(j(b))); if (!a || !a.length) a = j("html"); return a },
		extractFromAbbreviation: function (a) { var c = ""; a = a.replace(/\|([\w\|\-]+)$/, function (a, d) { c = d; return "" }); return [a, j(c)] }
	}
});
emmet.define("elements", function (f, d) {
	function j(a) { return { data: a } } var g = {}, a = /([\w\-]+)\s*=\s*(['"])(.*?)\2/g, c = { add: function (a, c) { var d = this; g[a] = function () { var f = c.apply(d, arguments); f && (f.type = a); return f } }, get: function (a) { return g[a] }, create: function (a) { var c = [].slice.call(arguments, 1), d = this.get(a); return d ? d.apply(this, c) : null }, is: function (a, c) { return a && a.type === c } }; c.add("element", function (b, c, e) {
		var f = { name: b, is_empty: !!e }; if (c) if (f.attributes = [], d.isArray(c)) f.attributes = c; else if (d.isString(c)) for (; b =
			a.exec(c);)f.attributes.push({ name: b[1], value: b[3] }); else d.each(c, function (a, b) { f.attributes.push({ name: b, value: a }) }); return f
	}); c.add("snippet", j); c.add("reference", j); c.add("empty", function () { return {} }); return c
});
emmet.define("editTree", function (f, d, j) {
	function g(a, c) { this.options = d.extend({ offset: 0 }, c); this.source = a; this._children = []; this._positions = { name: 0 }; this.initialize.apply(this, arguments) } function a(a, c, d) { this.parent = a; this._name = c.value; this._value = d ? d.value : ""; this._positions = { name: c.start, value: d ? d.start : -1 }; this.initialize.apply(this, arguments) } var c = f("range").create; g.extend = j.extend; g.prototype = {
		initialize: function () { }, _updateSource: function (a, h, e) {
			var g = c(h, d.isUndefined(e) ? 0 : e - h), j = a.length -
				g.length(), p = function (a) { d.each(a, function (b, c) { b >= g.end && (a[c] += j) }) }; p(this._positions); d.each(this.list(), function (a) { p(a._positions) }); this.source = f("utils").replaceSubstring(this.source, a, g)
		}, add: function (b, c) { var d = new a(b, c); this._children.push(d); return d }, get: function (a) { return d.isNumber(a) ? this.list()[a] : d.isString(a) ? d.find(this.list(), function (c) { return c.name() === a }) : a }, getAll: function (a) {
			d.isArray(a) || (a = [a]); var c = [], e = []; d.each(a, function (a) {
				d.isString(a) ? c.push(a) : d.isNumber(a) &&
					e.push(a)
			}); return d.filter(this.list(), function (a, b) { return d.include(e, b) || d.include(c, a.name()) })
		}, value: function (a, c, e) { var f = this.get(a); if (f) return f.value(c); if (!d.isUndefined(c)) return this.add(a, c, e) }, values: function (a) { return d.map(this.getAll(a), function (a) { return a.value() }) }, remove: function (a) { if (a = this.get(a)) this._updateSource("", a.fullRange()), this._children = d.without(this._children, a) }, list: function () { return this._children }, indexOf: function (a) { return d.indexOf(this.list(), this.get(a)) },
		name: function (a) { if (!d.isUndefined(a) && this._name !== (a = String(a))) this._updateSource(a, this._positions.name, this._positions.name + this._name.length), this._name = a; return this._name }, nameRange: function (a) { return c(this._positions.name + (a ? this.options.offset : 0), this.name()) }, range: function (a) { return c(a ? this.options.offset : 0, this.toString()) }, itemFromPosition: function (a, c) { return d.find(this.list(), function (d) { return d.range(c).inside(a) }) }, toString: function () { return this.source }
	}; a.extend = j.extend; a.prototype =
	{
		initialize: function () { }, _pos: function (a, c) { return a + (c ? this.parent.options.offset : 0) }, value: function (a) { if (!d.isUndefined(a) && this._value !== (a = String(a))) this.parent._updateSource(a, this.valueRange()), this._value = a; return this._value }, name: function (a) { if (!d.isUndefined(a) && this._name !== (a = String(a))) this.parent._updateSource(a, this.nameRange()), this._name = a; return this._name }, namePosition: function (a) { return this._pos(this._positions.name, a) }, valuePosition: function (a) {
			return this._pos(this._positions.value,
				a)
		}, range: function (a) { return c(this.namePosition(a), this.toString()) }, fullRange: function (a) { return this.range(a) }, nameRange: function (a) { return c(this.namePosition(a), this.name()) }, valueRange: function (a) { return c(this.valuePosition(a), this.value()) }, toString: function () { return this.name() + this.value() }, valueOf: function () { return this.toString() }
	}; return { EditContainer: g, EditElement: a, createToken: function (a, c, d) { a = { start: a || 0, value: c || "", type: d }; a.end = a.start + a.value.length; return a } }
});
emmet.define("cssEditTree", function (f, d) {
	function j(a, b) { return f("range").create(a, b) } function g(a, b) { b = b || h | e; var c = ["white", "line"]; if ((b & e) == e) for (; a.length && d.include(c, d.last(a).type);)a.pop(); if ((b & h) == h) for (; a.length && d.include(c, a[0].type);)a.shift(); return a } function a(a) {
		var b = ["white", "line", ":"], c = [], f, l; a.nextUntil(function () { return !d.include(b, this.itemNext().type) }); for (l = a.current().end; f = a.next();) {
			if ("}" == f.type || ";" == f.type) return g(c, h | ("}" == f.type ? e : 0)), c.length ? (l = c[0].start,
				a = d.last(c).end) : a = l, j(l, a - l); c.push(f)
		} if (c.length) return j(c[0].start, d.last(c).end - c[0].start)
	} function c(a) {
		var b = f("stringStream").create(a), c = [], e = /[\s\u00a0,]/, h = function () { b.next(); c.push(j(b.start, b.current())); b.start = b.pos }; b.eatSpace(); for (b.start = b.pos; a = b.next();)if ('"' == a || "'" == a) { b.next(); if (!b.skipTo(a)) break; h() } else if ("(" == a) { b.backUp(1); if (!b.skipToPair("(", ")")) break; b.backUp(1); h() } else e.test(a) && (c.push(j(b.start, b.current().length - 1)), b.eatWhile(e), b.start = b.pos); h(); return d.chain(c).filter(function (a) { return !!a.length() }).uniq(!1,
			function (a) { return a.toString() }).value()
	} var b = { styleBefore: "\n\t", styleSeparator: ": ", offset: 0 }, h = 1, e = 2, l = f("editTree").EditContainer.extend({
		initialize: function (c) {
			d.defaults(this.options, b); var e = f("editTree"), h = f("tokenIterator").create(f("cssParser").parse(c)), l, t = [], s; for (l = h.position(); (s = h.next()) && "{" != s.type;)t.push(s); g(t); t.length ? (l = t[0].start, t = d.last(t).end) : t = l; l = j(l, t - l); this._positions.name = l.start; this._name = l.substring(c); if (!h.current() || "{" != h.current().type) throw "Invalid CSS rule";
			for (this._positions.contentStart = h.position() + 1; l = h.next();) { if (t = "identifier" == l.type) a: { t = h.tokens; s = h._i + 1; for (var u = t.length; s < u; s++) { if (":" == t[s].type) { t = !0; break a } if ("identifier" == t[s].type || "line" == t[s].type) { t = !1; break a } } t = !1 } t && (l = j(l), t = a(h), s = h.current() && ";" == h.current().type ? j(h.current()) : j(t.end, 0), this._children.push(new m(this, e.createToken(l.start, l.substring(c)), e.createToken(t.start, t.substring(c)), e.createToken(s.start, s.substring(c))))) } this._saveStyle()
		}, _saveStyle: function () {
			var a =
				this._positions.contentStart, b = this.source, c = f("utils"); d.each(this.list(), function (e) { e.styleBefore = b.substring(a, e.namePosition()); var h = c.splitByLines(e.styleBefore); 1 < h.length && (e.styleBefore = "\n" + d.last(h)); e.styleSeparator = b.substring(e.nameRange().end, e.valuePosition()); e.styleBefore = d.last(e.styleBefore.split("*/")); e.styleSeparator = e.styleSeparator.replace(/\/\*.*?\*\//g, ""); a = e.range().end })
		}, add: function (a, b, c) {
			var e = this.list(), h = this._positions.contentStart, g = d.pick(this.options, "styleBefore",
				"styleSeparator"), j = f("editTree"); d.isUndefined(c) && (c = e.length); var l = e[c]; if (l) h = l.fullRange().start; else if (l = e[c - 1]) l.end(";"), h = l.range().end; l && (g = d.pick(l, "styleBefore", "styleSeparator")); a = j.createToken(h + g.styleBefore.length, a); b = j.createToken(a.end + g.styleSeparator.length, b); j = new m(this, a, b, j.createToken(b.end, ";")); d.extend(j, g); this._updateSource(j.styleBefore + j.toString(), h); this._children.splice(c, 0, j); return j
		}
	}), m = f("editTree").EditElement.extend({
		initialize: function (a, b, c, d) {
			this.styleBefore =
				a.options.styleBefore; this.styleSeparator = a.options.styleSeparator; this._end = d.value; this._positions.end = d.start
		}, valueParts: function (a) { var b = c(this.value()); if (a) { var e = this.valuePosition(!0); d.each(b, function (a) { a.shift(e) }) } return b }, end: function (a) { !d.isUndefined(a) && this._end !== a && (this.parent._updateSource(a, this._positions.end, this._positions.end + this._end.length), this._end = a); return this._end }, fullRange: function (a) { a = this.range(a); a.start -= this.styleBefore.length; return a }, toString: function () {
			return this.name() +
				this.styleSeparator + this.value() + this.end()
		}
	}); return {
		parse: function (a, b) { return new l(a, b) }, parseFromPosition: function (a, b, c) { c = this.extractRule(a, b, c); return !c || !c.inside(b) ? null : this.parse(c.substring(a), { offset: c.start }) }, extractRule: function (a, b, c) {
			for (var d = "", e = a.length, h = -1, g; 0 <= b;) { g = a.charAt(b); if ("{" == g) { h = b; break } else if ("}" == g && !c) { b++; break } b-- } for (; b < e;) { g = a.charAt(b); if ("{" == g) h = b; else if ("}" == g) { -1 != h && (d = a.substring(h, b + 1)); break } b++ } if (d) {
				b = h - 1; for (c = ""; 0 <= b;) {
					g = a.charAt(b); if (-1 !=
						"{}/\\<>\n\r".indexOf(g)) break; b--
				} c = a.substring(b + 1, h).replace(/^[\s\n\r]+/m, ""); return f("range").create(h - c.length, d.length + c.length)
			} return null
		}, baseName: function (a) { return a.replace(/^\s*\-\w+\-/, "") }, findParts: c
	}
});
emmet.define("xmlEditTree", function (f, d) {
	var j = { styleBefore: " ", styleSeparator: "=", styleQuote: '"', offset: 0 }, g = /^<([\w\:\-]+)((?:\s+[\w\-:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/m, a = f("editTree").EditContainer.extend({
		initialize: function (a) {
			d.defaults(this.options, j); this._positions.name = 1; var h = null, e = f("xmlParser").parse(a), g = f("range"); d.each(e, function (d) {
				d.value = g.create(d).substring(a); switch (d.type) {
					case "tag": /^<[^\/]+/.test(d.value) && (this._name = d.value.substring(1));
						break; case "attribute": h && this._children.push(new c(this, h)); h = d; break; case "string": this._children.push(new c(this, h, d)), h = null
				}
			}, this); h && this._children.push(new c(this, h)); this._saveStyle()
		}, _saveStyle: function () { var a = this.nameRange().end, c = this.source; d.each(this.list(), function (d) { d.styleBefore = c.substring(a, d.namePosition()); -1 !== d.valuePosition() && (d.styleSeparator = c.substring(d.namePosition() + d.name().length, d.valuePosition() - d.styleQuote.length)); a = d.range().end }) }, add: function (a, h, e) {
			var g =
				this.list(), j = this.nameRange().end, p = f("editTree"), n = d.pick(this.options, "styleBefore", "styleSeparator", "styleQuote"); d.isUndefined(e) && (e = g.length); var q = g[e]; if (q) j = q.fullRange().start; else if (q = g[e - 1]) j = q.range().end; q && (n = d.pick(q, "styleBefore", "styleSeparator", "styleQuote")); h = n.styleQuote + h + n.styleQuote; a = new c(this, p.createToken(j + n.styleBefore.length, a), p.createToken(j + n.styleBefore.length + a.length + n.styleSeparator.length, h)); d.extend(a, n); this._updateSource(a.styleBefore + a.toString(), j);
			this._children.splice(e, 0, a); return a
		}
	}), c = f("editTree").EditElement.extend({
		initialize: function (a, c, d) { this.styleBefore = a.options.styleBefore; this.styleSeparator = a.options.styleSeparator; c = ""; a = a.options.styleQuote; d && (c = d.value, a = c.charAt(0), '"' == a || "'" == a ? c = c.substring(1) : a = "", a && c.charAt(c.length - 1) == a && (c = c.substring(0, c.length - 1))); this.styleQuote = a; this._value = c; this._positions.value = d ? d.start + a.length : -1 }, fullRange: function (a) { a = this.range(a); a.start -= this.styleBefore.length; return a }, toString: function () {
			return this.name() +
				this.styleSeparator + this.styleQuote + this.value() + this.styleQuote
		}
	}); return {
		parse: function (b, c) { return new a(b, c) }, parseFromPosition: function (a, c, d) { d = this.extractTag(a, c, d); return !d || !d.inside(c) ? null : this.parse(d.substring(a), { offset: d.start }) }, extractTag: function (a, c, d) {
			var j = a.length, m, p = f("range"), n = Math.min(2E3, j), q = null, r = function (c) { var d; if ("<" == a.charAt(c) && (d = a.substr(c, n).match(g))) return p.create(c, d[0]) }; for (m = c; 0 <= m && !(q = r(m)); m--); if (q && (q.inside(c) || d)) return q; if (!q && d) return null;
			for (m = c; m < j; m++)if (q = r(m)) return q
		}
	}
});
emmet.define("expandAbbreviation", function (f, d) {
	var j = f("handlerList").create(), g = null, a = f("actions"); a.add("expand_abbreviation", function (a, b, h) { var e = d.toArray(arguments), g = f("editorUtils").outputInfo(a, b, h); e[1] = g.syntax; e[2] = g.profile; return j.exec(!1, e) }); a.add("expand_abbreviation_with_tab", function (c, b, d) {
		var e = c.getSelection(), g = f("resources").getVariable("indentation"); if (e) return d = f("utils"), b = f("range").create(c.getSelectionRange()), e = d.padString(e, g), c.replaceContent(g + "${0}", c.getCaretPos()),
			g = f("range").create(c.getCaretPos(), b.length()), c.replaceContent(e, g.start, g.end, !0), c.createSelection(g.start, g.start + e.length), !0; a.run("expand_abbreviation", c, b, d) || c.replaceContent(g, c.getCaretPos()); return !0
	}, { hidden: !0 }); j.add(function (a, b, d) { var e = a.getSelectionRange().end, j = g.findAbbreviation(a); return j && (b = emmet.expandAbbreviation(j, b, d, f("actionUtils").captureContext(a))) ? (a.replaceContent(b, e - j.length, e), !0) : !1 }, { order: -1 }); return g = {
		addHandler: function (a, b) { j.add(a, b) }, removeHandler: function (a) {
			j.remove(a,
				options)
		}, findAbbreviation: function (a) { var b = f("range").create(a.getSelectionRange()), d = String(a.getContent()); if (b.length()) return b.substring(d); a = a.getCurrentLineRange(); return f("actionUtils").extractAbbreviation(d.substring(a.start, b.start)) }
	}
});
emmet.define("wrapWithAbbreviation", function (f) {
	var d = null; f("actions").add("wrap_with_abbreviation", function (j, g, a, c) {
		a = f("editorUtils").outputInfo(j, a, c); var b = f("utils"); c = f("editorUtils"); g = g || j.prompt("Enter abbreviation"); if (!g) return null; g = String(g); var h = f("range").create(j.getSelectionRange()); if (!h.length()) { h = f("htmlMatcher").tag(a.content, h.start); if (!h) return !1; h = b.narrowToNonSpace(a.content, h.range) } b = b.escapeText(h.substring(a.content)); return (g = d.wrap(g, c.unindent(j, b), a.syntax, a.profile,
			f("actionUtils").captureContext(j))) ? (j.replaceContent(g, h.start, h.end), !0) : !1
	}); return d = { wrap: function (d, g, a, c, b) { var h = f("filters"), e = f("utils"); a = a || emmet.defaultSyntax(); c = f("profile").get(c, a); f("tabStops").resetTabstopIndex(); d = h.extractFromAbbreviation(d); return (g = f("abbreviationParser").parse(d[0], { syntax: a, pastedContent: g, contextNode: b })) ? (a = h.composeList(a, c, d[1]), h.apply(g, a, c), e.replaceVariables(g.toString())) : null } }
});
emmet.exec(function (f, d) {
	function j(d, a, c, b) {
		for (var h = f("editorUtils"), e = h.outputInfo(d).content, j = d.getCaretPos(), m = null, p = f("utils"), m = j, n = -1, q = -1; m--;)if (e.substr(m, a.length) == a) { n = m; break } if (-1 != n) for (var m = n, r = e.length; r >= m++;)if (e.substr(m, c.length) == c) { q = m + c.length; break } (m = -1 != n && -1 != q ? f("range").create(n, q - n) : null) && m.overlap(b) ? (b = m, m = b.substring(e).replace(RegExp("^" + p.escapeForRegexp(a) + "\\s*"), function (a) { j -= a.length; return "" }).replace(RegExp("\\s*" + p.escapeForRegexp(c) + "$"), "")) : (m =
			a + " " + b.substring(e).replace(RegExp(p.escapeForRegexp(a) + "\\s*|\\s*" + p.escapeForRegexp(c), "g"), "") + " " + c, j += a.length + 1); return null !== m ? (m = p.escapeText(m), d.setCaretPos(b.start), d.replaceContent(h.unindent(d, m), b.start, b.end), d.setCaretPos(j), !0) : !1
	} f("actions").add("toggle_comment", function (g) {
		var a = f("editorUtils").outputInfo(g); if ("css" == a.syntax) { var c = g.getCaretPos(), b = f("htmlMatcher").tag(a.content, c); b && b.open.range.inside(c) && (a.syntax = "html") } if ("css" == a.syntax) {
			c = f("range").create(g.getSelectionRange());
			a = f("editorUtils").outputInfo(g); if (!c.length()) { var h = f("cssEditTree").parseFromPosition(a.content, g.getCaretPos()); if (h) var e = g.getCaretPos() - (h.options.offset || 0), l = /^[\s\n\r]/, c = (c = d.find(h.list(), function (a) { return a.range().end === e ? l.test(h.source.charAt(e)) : a.range().inside(e) })) ? c.range(!0) : f("range").create(h.nameRange(!0).start, h.source) } c.length() || (c = f("range").create(g.getCurrentLineRange()), f("utils").narrowToNonSpace(a.content, c)); return j(g, "/*", "*/", c)
		} a = f("range").create(g.getSelectionRange());
		c = f("editorUtils").outputInfo(g); if (!a.length() && (c = f("htmlMatcher").tag(c.content, g.getCaretPos()))) a = c.outerRange; return j(g, "\x3c!--", "--\x3e", a)
	})
});
emmet.exec(function (f) {
	function d(d, f, a) { function c(a) { for (var c = a; 0 <= c;) { var d = b.charAt(c); if ("\n" == d || "\r" == d) break; c-- } return b.substring(c, a) } f = f || 1; a = d.getCaretPos() + (a || 0); var b = String(d.getContent()); d = b.length; for (var h = -1, e = /^\s+$/; a <= d && 0 <= a;) { a += f; var l = b.charAt(a), m = b.charAt(a + 1), p = b.charAt(a - 1); switch (l) { case '"': case "'": m == l && "=" == p && (h = a + 1); break; case ">": "<" == m && (h = a + 1); break; case "\n": case "\r": e.test(c(a - 1)) && (h = a) }if (-1 != h) break } return h } f = f("actions"); f.add("prev_edit_point",
		function (f) { var g = f.getCaretPos(), a = d(f, -1); a == g && (a = d(f, -1, -2)); return -1 != a ? (f.setCaretPos(a), !0) : !1 }, { label: "Previous Edit Point" }); f.add("next_edit_point", function (f) { var g = d(f, 1); return -1 != g ? (f.setCaretPos(g), !0) : !1 })
});
emmet.exec(function (f, d) {
	function j(a, b, c, d) { var e = f("range"), h = f("editorUtils").outputInfo(a).content, g = h.length, j, k = e.create(-1, 0), l = e.create(a.getSelectionRange()); j = l.start; for (var n = 1E5; 0 <= j && j < g && 0 < --n;) { if (e = c(h, j, b)) { if (k.equal(e)) break; k = e.clone(); if (j = d(e.substring(h), e.start, l.clone())) return a.createSelection(j.start, j.end), !0; j = b ? e.start : e.end - 1 } j += b ? -1 : 1 } return !1 } function g(a, b) {
		b = b || 0; var c = [], d = f("stringStream").create(a), e = f("range"); d.eatSpace(); d.start = d.pos; for (var h; h = d.next();)/[\s\u00a0]/.test(h) &&
			(c.push(e.create(d.start + b, d.pos - d.start - 1)), d.eatSpace(), d.start = d.pos); c.push(e.create(d.start + b, d.pos - d.start)); return c
	} function a(a, c, e, h) {
		var j = f("xmlParser").parse(a), l = c, l = l || 0, z = f("range"), x = [], k = -1, n = "", m = "", p, w; d.each(j, function (c) {
			switch (c.type) {
				case "tag": w = a.substring(c.start, c.end); /^<[\w\:\-]/.test(w) && x.push(z.create({ start: c.start + 1, end: c.end })); break; case "attribute": k = c.start; n = a.substring(c.start, c.end); break; case "string": x.push(z.create(k, c.end - k)), p = z.create(c), m = p.substring(a),
					b(m.charAt(0)) && p.start++, b(m.charAt(m.length - 1)) && p.end--, x.push(p), "class" == n && (x = x.concat(g(p.substring(a), p.start)))
			}
		}); d.each(x, function (a) { a.shift(l) }); c = d.chain(x).filter(function (a) { return !!a.length() }).uniq(!1, function (a) { return a.toString() }).value(); h && c.reverse(); return (j = d.find(c, function (a) { return a.equal(e) })) ? (h = d.indexOf(c, j), h < c.length - 1 ? c[h + 1] : null) : h ? d.find(c, function (a) { return a.start < e.start }) : !j && (h = d.filter(c, function (a) { return a.inside(e.end) }), 1 < h.length) ? h[1] : d.find(c, function (a) {
			return a.end >
				e.end
		})
	} function c(a, c) { var b; if ("<" == a.charAt(c) && (b = a.substring(c, a.length).match(p))) return f("range").create(c, b[0]) } function b(a) { return '"' == a || "'" == a } function h(a) {
		var c = a.valueRange(!0), b = [a.range(!0), c], e = f("stringStream"), h = f("cssEditTree"), g = f("range"), j = a.value(); d.each(a.valueParts(), function (a) {
			var f = a.clone(); b.push(f.shift(c.start)); var l = e.create(a.substring(j)); if (l.match(/^[\w\-]+\(/, !0)) {
				l.start = l.pos; l.skipToPair("(", ")"); var n = l.current(); b.push(g.create(f.start + l.start, n)); d.each(h.findParts(n),
					function (a) { b.push(g.create(f.start + l.start + a.start, a.substring(n))) })
			}
		}); return d.chain(b).filter(function (a) { return !!a.length() }).uniq(!1, function (a) { return a.toString() }).value()
	} function e(a, c, b) {
		var e = null, f = null, g = a.list(), j, l; b ? (g.reverse(), j = function (a) { return a.range(!0).start <= c.start }, l = function (a) { return a.start < c.start }) : (j = function (a) { return a.range(!0).end >= c.end }, l = function (a) { return a.end > c.start }); for (; e = d.find(g, j);) {
			a = h(e); b && a.reverse(); if (f = d.find(a, function (a) { return a.equal(c) })) {
				if (f =
					d.indexOf(a, f), f != a.length - 1) { f = a[f + 1]; break }
			} else { f = d.filter(a, function (a) { return a.inside(c.end) }); if (1 < f.length) { f = f[1]; break } if (f = d.find(a, l)) break } f = null; c.start = c.end = b ? e.range(!0).start - 1 : e.range(!0).end + 1
		} return f
	} function l(a, c, b) { a = f("cssEditTree").parse(a, { offset: c }); c = a.nameRange(!0); return b.end < c.end ? c : e(a, b, !1) } function m(a, c, b) { c = f("cssEditTree").parse(a, { offset: c }); a = e(c, b, !0); return !a && (c = c.nameRange(!0), b.start > c.start) ? c : a } var p = /^<([\w\:\-]+)((?:\s+[\w\-:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		n = f("actions"); n.add("select_next_item", function (b) { if ("css" == b.getSyntax()) return j(b, !1, f("cssEditTree").extractRule, l); var d = !0; return j(b, !1, function (a, b) { if (d) { d = !1; var e; a: { e = b; for (var f; 0 <= e;) { if (f = c(a, e)) { e = f; break a } e-- } e = null } return e } return c(a, b) }, function (c, b, d) { return a(c, b, d, !1) }) }); n.add("select_previous_item", function (b) { return "css" == b.getSyntax() ? j(b, !0, f("cssEditTree").extractRule, m) : j(b, !0, c, function (c, b, d) { return a(c, b, d, !0) }) })
});
emmet.exec(function (f) {
	function d(c, b) {
		b = String((b || "out").toLowerCase()); var d = f("editorUtils").outputInfo(c), e = f("range").create(c.getSelectionRange()), d = d.content; a && !a.range.equal(e) && (a = null); if (a && e.length()) if ("in" == b) { if ("tag" == a.type && !a.close) return !1; if (a.range.equal(a.outerRange)) a.range = a.innerRange; else { var j = f("utils").narrowToNonSpace(d, a.innerRange); if ((a = g.find(d, j.start + 1)) && a.range.equal(e) && a.outerRange.equal(e)) a.range = a.innerRange } } else if (!a.innerRange.equal(a.outerRange) &&
			a.range.equal(a.innerRange) && e.equal(a.range)) a.range = a.outerRange; else { if ((a = g.find(d, e.start)) && a.range.equal(e) && a.innerRange.equal(e)) a.range = a.outerRange } else a = g.find(d, e.start); if (a && !a.range.equal(e)) return c.createSelection(a.range.start, a.range.end), !0; a = null; return !1
	} var j = f("actions"), g = f("htmlMatcher"), a = null; j.add("match_pair", d, { hidden: !0 }); j.add("match_pair_inward", function (a) { return d(a, "in") }, { label: "HTML/Match Pair Tag (inward)" }); j.add("match_pair_outward", function (a) {
		return d(a,
			"out")
	}, { label: "HTML/Match Pair Tag (outward)" }); j.add("matching_pair", function (a) { var b = String(a.getContent()), d = a.getCaretPos(); "<" == b.charAt(d) && d++; return (b = g.tag(b, d)) && b.close ? (b.open.range.inside(d) ? a.setCaretPos(b.close.range.start) : a.setCaretPos(b.open.range.start), !0) : !1 }, { label: "HTML/Go To Matching Tag Pair" })
});
emmet.exec(function (f) {
	f("actions").add("remove_tag", function (d) {
		var j = f("utils"), g = f("editorUtils").outputInfo(d), a = f("htmlMatcher").tag(g.content, d.getCaretPos()); if (a) {
			if (a.close) { var c = j.narrowToNonSpace(g.content, a.innerRange), b = j.findNewlineBounds(g.content, c.start), b = j.getLinePadding(b.substring(g.content)), g = c.substring(g.content), g = j.unindentString(g, b); d.replaceContent(j.getCaretPlaceholder() + j.escapeText(g), a.outerRange.start, a.outerRange.end) } else d.replaceContent(j.getCaretPlaceholder(),
				a.range.start, a.range.end); return !0
		} return !1
	}, { label: "HTML/Remove Tag" })
});
emmet.exec(function (f) {
	f("actions").add("split_join_tag", function (d, j) {
		var g = f("htmlMatcher"), a = f("editorUtils").outputInfo(d, null, j), c = f("profile").get(a.profile); if (g = g.tag(a.content, d.getCaretPos())) {
			if (g.close) { var a = f("utils"), c = c.selfClosing() || " /", c = g.open.range.substring(g.source).replace(/\s*>$/, c + ">"), b = d.getCaretPos(); c.length + g.outerRange.start < b && (b = c.length + g.outerRange.start); c = a.escapeText(c); d.replaceContent(c, g.outerRange.start, g.outerRange.end) } else {
				var a = f("utils"), h = a.getNewline(),
					e = f("resources").getVariable("indentation"), b = d.getCaretPos(), c = !0 === c.tag_nl ? h + e + h : "", h = g.outerContent().replace(/\s*\/>$/, ">"), b = g.outerRange.start + h.length, h = h + (c + "</" + g.open.name + ">"), h = a.escapeText(h); d.replaceContent(h, g.outerRange.start, g.outerRange.end)
			} d.setCaretPos(b); return !0
		} return !1
	}, { label: "HTML/Split\\Join Tag Declaration" })
});
emmet.define("reflectCSSValue", function (f, d) {
	function j(a) { var c = f("cssEditTree"), b = f("editorUtils").outputInfo(a); a = a.getCaretPos(); if (c = c.parseFromPosition(b.content, a)) if (b = c.itemFromPosition(a, !0)) { var d = c.source, e = c.options.offset; a = a - e - b.range().start; g.exec(!1, [b]); if (d !== c.source) return { data: c.source, start: e, end: e + d.length, caret: e + b.range().start + a } } } var g = f("handlerList").create(); f("actions").add("reflect_css_value", function (a) {
		return "css" != a.getSyntax() ? !1 : f("actionUtils").compoundUpdate(a,
			j(a))
	}, { label: "CSS/Reflect Value" }); g.add(function (a) {
		var c, b = a.name(), b = f("cssEditTree").baseName(b), h; c = "opacity" == b || "filter" == b ? /^(?:\-\w+\-)?(?:opacity|filter)$/ : (h = b.match(/^border-radius-(top|bottom)(left|right)/)) ? RegExp("^(?:\\-\\w+\\-)?(?:" + b + "|border-" + h[1] + "-" + h[2] + "-radius)$") : (h = b.match(/^border-(top|bottom)-(left|right)-radius/)) ? RegExp("^(?:\\-\\w+\\-)?(?:" + b + "|border-radius-" + h[1] + h[2] + ")$") : RegExp("^(?:\\-\\w+\\-)?" + b + "$"); d.each(a.parent.list(), function (b) {
			if (c.test(b.name())) {
				var d;
				var h = a.name(), g = a.value(), j = b.name(); d = b.value(); var q = f("cssEditTree"), r = f("utils"), h = q.baseName(h), j = q.baseName(j); d = "opacity" == h && "filter" == j ? d.replace(/opacity=[^)]*/i, "opacity=" + Math.floor(100 * parseFloat(g))) : "filter" == h && "opacity" == j ? (h = g.match(/opacity=([^)]*)/i)) ? r.prettifyNumber(parseInt(h[1]) / 100) : d : g; b.value(d)
			}
		})
	}, { order: -1 }); return { addHandler: function (a, c) { g.add(a, c) }, removeHandler: function (a) { g.remove(a, options) } }
});
emmet.exec(function (f) {
	f("actions").add("evaluate_math_expression", function (d) {
		var j = f("actionUtils"), g = f("utils"), a = String(d.getContent()), c = f("range").create(d.getSelectionRange()); c.length() || (c = j.findExpressionBounds(d, function (a) { return g.isNumeric(a) || -1 != ".+-*/\\".indexOf(a) })); if (c && c.length()) {
			j = c.substring(a); j = j.replace(/([\d\.\-]+)\\([\d\.\-]+)/g, "Math.round($1/$2)"); try {
				var b = g.prettifyNumber((new Function("return " + j))()); d.replaceContent(b, c.start, c.end); d.setCaretPos(c.start + b.length);
				return !0
			} catch (h) { }
		} return !1
	}, { label: "Numbers/Evaluate Math Expression" })
});
emmet.exec(function (f, d) {
	function j(a) { a = a.replace(/^\-/, ""); return ~a.indexOf(".") ? a.split(".")[0].length : a.length } var g = f("actions"); d.each([1, -1, 10, -10, 0.1, -0.1], function (a) {
		var c = 0 < a ? "increment" : "decrement"; g.add(c + "_number_by_" + String(Math.abs(a)).replace(".", "").substring(0, 2), function (b) {
			a: {
				var c = f("utils"), e = !1, g = !1, m = f("actionUtils").findExpressionBounds(b, function (a, b, d) { return c.isNumeric(a) ? !0 : "." == a ? !c.isNumeric(d.charAt(b + 1)) ? !1 : g ? !1 : g = !0 : "-" == a ? e ? !1 : e = !0 : !1 }); if (m && m.length()) {
					var p =
						m.substring(String(b.getContent())), n = parseFloat(p); if (!d.isNaN(n)) { n = c.prettifyNumber(n + a); if (/^(\-?)0+[1-9]/.test(p)) { var q = ""; RegExp.$1 && (q = "-", n = n.substring(1)); n = n.split("."); n[0] = c.zeroPadString(n[0], j(p)); n = q + n.join(".") } b.replaceContent(n, m.start, m.end); b.createSelection(m.start, m.start + n.length); b = !0; break a }
				} b = !1
			} return b
		}, { label: "Numbers/" + c.charAt(0).toUpperCase() + c.substring(1) + " number by " + Math.abs(a) })
	})
});
emmet.exec(function (f, d) {
	var j = f("actions"), g = f("preferences"); g.define("css.closeBraceIndentation", "\n", "Indentation before closing brace of CSS rule. Some users prefere indented closing brace of CSS rule for better readability. This preference\u2019s value will be automatically inserted before closing brace when user adds newline in newly created CSS rule (e.g. when \u201cInsert formatted linebreak\u201d action will be performed in CSS file). If you\u2019re such user, you may want to write put a value like <code>\\n\\t</code> in this preference.");
	j.add("insert_formatted_line_break_only", function (a) {
		var c = f("utils"), b = f("resources"), h = f("editorUtils").outputInfo(a), e = a.getCaretPos(), j = c.getNewline(); if (d.include(["html", "xml", "xsl"], h.syntax)) { if (b = b.getVariable("indentation"), (h = f("htmlMatcher").tag(h.content, e)) && !h.innerRange.length()) return a.replaceContent(j + b + c.getCaretPlaceholder() + j, e), !0 } else if ("css" == h.syntax && (h = h.content, e && "{" == h.charAt(e - 1))) {
			var m = g.get("css.closeBraceIndentation"), b = b.getVariable("indentation"), p = "}" == h.charAt(e);
			if (!p) for (var n = e, q = h.length, r; n < q; n++) { r = h.charAt(n); if ("{" == r) break; if ("}" == r) { m = ""; p = !0; break } } p || (m += "}"); c = j + b + c.getCaretPlaceholder() + m; a.replaceContent(c, e); return !0
		} return !1
	}, { hidden: !0 }); j.add("insert_formatted_line_break", function (a) {
		if (!j.run("insert_formatted_line_break_only", a)) {
			for (var c = f("utils"), b = f("editorUtils").getCurrentLinePadding(a), d = String(a.getContent()), e = a.getCaretPos(), g = d.length, c = c.getNewline(), m = "", p = a.getCurrentLineRange().end + 1, n; p < g; p++)if (n = d.charAt(p), " " == n ||
				"\t" == n) m += n; else break; m.length > b.length ? a.replaceContent(c + m, e, e, !0) : a.replaceContent(c, e)
		} return !0
	}, { hidden: !0 })
});
emmet.exec(function (f) { f("actions").add("merge_lines", function (d) { var j = f("htmlMatcher"), g = f("utils"), a = f("editorUtils").outputInfo(d), c = f("range").create(d.getSelectionRange()); if (!c.length() && (j = j.find(a.content, d.getCaretPos()))) c = j.outerRange; if (c.length()) { a = c.substring(a.content); a = g.splitByLines(a); for (j = 1; j < a.length; j++)a[j] = a[j].replace(/^\s+/, ""); a = a.join("").replace(/\s{2,}/, " "); j = a.length; a = g.escapeText(a); d.replaceContent(a, c.start, c.end); d.createSelection(c.start, c.start + j); return !0 } return !1 }) });
emmet.exec(function (f) {
	function d(d, f, a) { a = a || 0; return f.charAt(a) == d.charAt(0) && f.substr(a, d.length) == d } f("actions").add("encode_decode_data_url", function (j) {
		var g = String(j.getSelection()), a = j.getCaretPos(); if (!g) for (var c = String(j.getContent()); 0 <= a--;)if (d("src=", c, a)) { if (c = c.substr(a).match(/^(src=(["'])?)([^'"<>\s]+)\1?/)) g = c[3], a += c[1].length; break } else if (d("url(", c, a)) { if (c = c.substr(a).match(/^(url\((['"])?)([^'"\)\s]+)\1?/)) g = c[3], a += c[1].length; break } if (g) {
			if (d("data:", g)) {
				if (c = String(j.prompt("Enter path to file (absolute or relative)"))) {
					var b =
						f("file"), h = b.createPath(j.getFilePath(), c); if (!h) throw "Can't save file"; b.save(h, f("base64").decode(g.replace(/^data\:.+?;.+?,/, ""))); j.replaceContent("$0" + c, a, a + g.length); g = !0
				} else g = !1; return g
			} var e = g, l = a, m = f("file"), p = f("actionUtils"), g = j.getFilePath(); if (null === g) throw "You should save your file before using this action"; var n = m.locateFile(g, e); if (null === n) throw "Can't find " + e + " file"; m.read(n, function (a, b) {
				if (a) throw "Unable to read " + n + ": " + a; var c = f("base64").encode(String(b)); if (!c) throw "Can't encode file content to base64";
				c = "data:" + (p.mimeTypes[String(m.getExt(n))] || "application/octet-stream") + ";base64," + c; j.replaceContent("$0" + c, l, l + e.length)
			}); return !0
		} return !1
	}, { label: "Encode\\Decode data:URL image" })
});
emmet.exec(function (f, d) {
	function j(d, a, c) { var b = f("actionUtils"); if (a) { if (/^data:/.test(a)) return d = f("base64").decode(a.replace(/^data\:.+?;.+?,/, "")), c(b.getImageSize(d)); var h = f("file"), e = h.locateFile(d.getFilePath(), a); if (null === e) throw "Can't find " + a + " file"; h.read(e, function (a, d) { if (a) throw "Unable to read " + e + ": " + a; d = String(d); c(b.getImageSize(d)) }) } } f("actions").add("update_image_size", function (g) {
		if (d.include(["css", "less", "scss"], String(g.getSyntax()))) {
			var a = g.getCaretPos(), c = f("editorUtils").outputInfo(g),
				b = f("cssEditTree").parseFromPosition(c.content, a, !0); if (b) { var c = b.itemFromPosition(a, !0), h; c && (h = /url\((["']?)(.+?)\1\)/i.exec(c.value() || "")) && j(g, h[2], function (c) { if (c) { var e = b.range(!0); b.value("width", c.width + "px"); b.value("height", c.height + "px", b.indexOf("width") + 1); f("actionUtils").compoundUpdate(g, d.extend(e, { data: b.toString(), caret: a })) } }) }
		} else {
			var e = g.getCaretPos(); h = f("editorUtils").outputInfo(g); var l = f("xmlEditTree").parseFromPosition(h.content, e, !0); l && "img" == (l.name() || "").toLowerCase() &&
				j(g, l.value("src"), function (a) { if (a) { var b = l.range(!0); l.value("width", a.width); l.value("height", a.height, l.indexOf("width") + 1); f("actionUtils").compoundUpdate(g, d.extend(b, { data: l.toString(), caret: e })) } })
		} return !0
	})
});
emmet.define("cssResolver", function (f, d) {
	function j(a) { var b = a && a.charCodeAt(0); return a && "." == a || 47 < b && 58 > b } function g(a) { a = f("utils").trim(a); if (~a.indexOf("/*") || /[\n\r]/.test(a) || !/^[a-z0-9\-]+\s*\:/i.test(a)) return !1; a = f("tabStops").processText(a, { replaceCarets: !0, tabstop: function () { return "value" } }); return 2 == a.split(":").length } function a(a) {
		"-" == a.charAt(0) && !/^\-[\.\d]/.test(a) && (a = a.replace(/^\-+/, "")); if ("#" == a.charAt(0)) {
			var b = a.replace(/^#+/, "") || "0"; if ("t" == b.toLowerCase()) a = "transparent";
			else { var d = f("utils").repeatString; a = null; switch (b.length) { case 1: a = d(b, 6); break; case 2: a = d(b, 3); break; case 3: a = b.charAt(0) + b.charAt(0) + b.charAt(1) + b.charAt(1) + b.charAt(2) + b.charAt(2); break; case 4: a = b + b.substr(0, 2); break; case 5: a = b + b.charAt(0); break; default: a = b.substr(0, 6) }r.get("css.color.short") && (b = a.split(""), b[0] == b[1] && (b[2] == b[3] && b[4] == b[5]) && (a = b[0] + b[2] + b[4])); switch (r.get("css.color.case")) { case "upper": a = a.toUpperCase(); break; case "lower": a = a.toLowerCase() }a = "#" + a } return a
		} return c(a)
	}
	function c(a) { var b = r.getDict("css.keywordAliases"); return a in b ? b[a] : a } function b(a) { return d.include(r.getArray("css.keywords"), c(a)) } function h(a, b) { var c = q[b]; c || (c = d.find(q, function (a) { return a.prefix == b })); return c && c.supports(a) } function e(a, b) { d.isString(b) && (b = { prefix: b }); q[a] = d.extend({}, n, b) } function l(a, b) { if (b) { var c = r.get(b + "." + a); if (!d.isUndefined(c)) return c } return r.get("css." + a) } function m(a, b, c) {
		d.isString(a) || (a = a.data); if (!g(a)) return a; b && (a = ~a.indexOf(";") ? a.split(";").join(" !important;") :
			a + " !important"); b = a.indexOf(":"); a = a.substring(0, b).replace(/\s+$/, "") + l("valueSeparator", c) + f("utils").trim(a.substring(b + 1)); return a.replace(/\s*;\s*$/, l("propertyEnd", c))
	} var p = null, n = {
		prefix: "emmet", obsolete: !1, transformName: function (a) { return "-" + this.prefix + "-" + a }, properties: function () { var a = "css." + this.prefix + "Properties", b = r.getArray(a); d.each(r.getArray(a + "Addon"), function (a) { "-" == a.charAt(0) ? b = d.without(b, a.substr(1)) : ("+" == a.charAt(0) && (a = a.substr(1)), b.push(a)) }); return b || [] }, supports: function (a) {
			return d.include(this.properties(),
				a)
		}
	}, q = {}, r = f("preferences"); r.define("css.valueSeparator", ": ", "Defines a symbol that should be placed between CSS property and value when expanding CSS abbreviations."); r.define("css.propertyEnd", ";", "Defines a symbol that should be placed at the end of CSS property  when expanding CSS abbreviations."); r.define("stylus.valueSeparator", " ", "Defines a symbol that should be placed between CSS property and value when expanding CSS abbreviations in Stylus dialect."); r.define("stylus.propertyEnd", "",
		"Defines a symbol that should be placed at the end of CSS property  when expanding CSS abbreviations in Stylus dialect."); r.define("sass.propertyEnd", "", "Defines a symbol that should be placed at the end of CSS property  when expanding CSS abbreviations in SASS dialect."); r.define("css.autoInsertVendorPrefixes", !0, "Automatically generate vendor-prefixed copies of expanded CSS property. By default, Emmet will generate vendor-prefixed properties only when you put dash before abbreviation (e.g. <code>-bxsh</code>). With this option enabled, you don\u2019t need dashes before abbreviations: Emmet will produce vendor-prefixed properties for you.");
	var t = d.template("A comma-separated list of CSS properties that may have <code><%= vendor %></code> vendor prefix. This list is used to generate a list of prefixed properties when expanding <code>-property</code> abbreviations. Empty list means that all possible CSS values may have <code><%= vendor %></code> prefix."), s = d.template("A comma-separated list of <em>additional</em> CSS properties for <code>css.<%= vendor %>Preperties</code> preference. You should use this list if you want to add or remove a few CSS properties to original set. To add a new property, simply write its name, to remove it, precede property with hyphen.<br>For example, to add <em>foo</em> property and remove <em>border-radius</em> one, the preference value will look like this: <code>foo, -border-radius</code>.");
	d.each({
		webkit: "animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, appearance, backface-visibility, background-clip, background-composite, background-origin, background-size, border-fit, border-horizontal-spacing, border-image, border-vertical-spacing, box-align, box-direction, box-flex, box-flex-group, box-lines, box-ordinal-group, box-orient, box-pack, box-reflect, box-shadow, color-correction, column-break-after, column-break-before, column-break-inside, column-count, column-gap, column-rule-color, column-rule-style, column-rule-width, column-span, column-width, dashboard-region, font-smoothing, highlight, hyphenate-character, hyphenate-limit-after, hyphenate-limit-before, hyphens, line-box-contain, line-break, line-clamp, locale, margin-before-collapse, margin-after-collapse, marquee-direction, marquee-increment, marquee-repetition, marquee-style, mask-attachment, mask-box-image, mask-box-image-outset, mask-box-image-repeat, mask-box-image-slice, mask-box-image-source, mask-box-image-width, mask-clip, mask-composite, mask-image, mask-origin, mask-position, mask-repeat, mask-size, nbsp-mode, perspective, perspective-origin, rtl-ordering, text-combine, text-decorations-in-effect, text-emphasis-color, text-emphasis-position, text-emphasis-style, text-fill-color, text-orientation, text-security, text-stroke-color, text-stroke-width, transform, transition, transform-origin, transform-style, transition-delay, transition-duration, transition-property, transition-timing-function, user-drag, user-modify, user-select, writing-mode, svg-shadow, box-sizing, border-radius",
		moz: "animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, appearance, backface-visibility, background-inline-policy, binding, border-bottom-colors, border-image, border-left-colors, border-right-colors, border-top-colors, box-align, box-direction, box-flex, box-ordinal-group, box-orient, box-pack, box-shadow, box-sizing, column-count, column-gap, column-rule-color, column-rule-style, column-rule-width, column-width, float-edge, font-feature-settings, font-language-override, force-broken-image-icon, hyphens, image-region, orient, outline-radius-bottomleft, outline-radius-bottomright, outline-radius-topleft, outline-radius-topright, perspective, perspective-origin, stack-sizing, tab-size, text-blink, text-decoration-color, text-decoration-line, text-decoration-style, text-size-adjust, transform, transform-origin, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, user-focus, user-input, user-modify, user-select, window-shadow, background-clip, border-radius",
		ms: "accelerator, backface-visibility, background-position-x, background-position-y, behavior, block-progression, box-align, box-direction, box-flex, box-line-progression, box-lines, box-ordinal-group, box-orient, box-pack, content-zoom-boundary, content-zoom-boundary-max, content-zoom-boundary-min, content-zoom-chaining, content-zoom-snap, content-zoom-snap-points, content-zoom-snap-type, content-zooming, filter, flow-from, flow-into, font-feature-settings, grid-column, grid-column-align, grid-column-span, grid-columns, grid-layer, grid-row, grid-row-align, grid-row-span, grid-rows, high-contrast-adjust, hyphenate-limit-chars, hyphenate-limit-lines, hyphenate-limit-zone, hyphens, ime-mode, interpolation-mode, layout-flow, layout-grid, layout-grid-char, layout-grid-line, layout-grid-mode, layout-grid-type, line-break, overflow-style, perspective, perspective-origin, perspective-origin-x, perspective-origin-y, scroll-boundary, scroll-boundary-bottom, scroll-boundary-left, scroll-boundary-right, scroll-boundary-top, scroll-chaining, scroll-rails, scroll-snap-points-x, scroll-snap-points-y, scroll-snap-type, scroll-snap-x, scroll-snap-y, scrollbar-arrow-color, scrollbar-base-color, scrollbar-darkshadow-color, scrollbar-face-color, scrollbar-highlight-color, scrollbar-shadow-color, scrollbar-track-color, text-align-last, text-autospace, text-justify, text-kashida-space, text-overflow, text-size-adjust, text-underline-position, touch-action, transform, transform-origin, transform-origin-x, transform-origin-y, transform-origin-z, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, user-select, word-break, word-wrap, wrap-flow, wrap-margin, wrap-through, writing-mode",
		o: "dashboard-region, animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, border-image, link, link-source, object-fit, object-position, tab-size, table-baseline, transform, transform-origin, transition, transition-delay, transition-duration, transition-property, transition-timing-function, accesskey, input-format, input-required, marquee-dir, marquee-loop, marquee-speed, marquee-style"
	},
		function (a, b) { r.define("css." + b + "Properties", a, t({ vendor: b })); r.define("css." + b + "PropertiesAddon", "", s({ vendor: b })) }); r.define("css.unitlessProperties", "z-index, line-height, opacity, font-weight, zoom", "The list of properties whose values \u200b\u200bmust not contain units."); r.define("css.intUnit", "px", "Default unit for integer values"); r.define("css.floatUnit", "em", "Default unit for float values"); r.define("css.keywords", "auto, inherit", "A comma-separated list of valid keywords that can be used in CSS abbreviations.");
	r.define("css.keywordAliases", "a:auto, i:inherit, s:solid, da:dashed, do:dotted, t:transparent", "A comma-separated list of keyword aliases, used in CSS abbreviation. Each alias should be defined as <code>alias:keyword_name</code>."); r.define("css.unitAliases", "e:em, p:%, x:ex, r:rem", "A comma-separated list of unit aliases, used in CSS abbreviation. Each alias should be defined as <code>alias:unit_value</code>."); r.define("css.color.short", !0, "Should color values like <code>#ffffff</code> be shortened to <code>#fff</code> after abbreviation with color was expanded.");
	r.define("css.color.case", "keep", "Letter case of color values generated by abbreviations with color (like <code>c#0</code>). Possible values are <code>upper</code>, <code>lower</code> and <code>keep</code>."); r.define("css.fuzzySearch", !0, "Enable fuzzy search among CSS snippet names. When enabled, every <em>unknown</em> snippet will be scored against available snippet names (not values or CSS properties!). The match with best score will be used to resolve snippet value. For example, with this preference enabled, the following abbreviations are equal: <code>ov:h</code> == <code>ov-h</code> == <code>o-h</code> == <code>oh</code>");
	r.define("css.fuzzySearchMinScore", 0.3, "The minium score (from 0 to 1) that fuzzy-matched abbreviation should achive. Lower values may produce many false-positive matches, higher values may reduce possible matches."); r.define("css.alignVendor", !1, "If set to <code>true</code>, all generated vendor-prefixed properties will be aligned by real property name."); e("w", { prefix: "webkit" }); e("m", { prefix: "moz" }); e("s", { prefix: "ms" }); e("o", { prefix: "o" }); var u = ["css", "less", "sass", "scss", "stylus"]; f("resources").addResolver(function (a,
		b) { return d.include(u, b) && a.isElement() ? p.expandToSnippet(a.abbreviation, b) : null }); var v = f("expandAbbreviation"); v.addHandler(function (a, b, c) { if (!d.include(u, b)) return !1; var e = a.getSelectionRange().end, f = v.findAbbreviation(a); return f && (b = emmet.expandAbbreviation(f, b, c)) ? (f = e - f.length, c = e, ";" == a.getContent().charAt(e) && ";" == b.charAt(b.length - 1) && c++, a.replaceContent(b, f, c), !0) : !1 }); return p = {
			addPrefix: e, supportsPrefix: h, prefixed: function (a, b) { return h(a, b) ? "-" + b + "-" + a : a }, listPrefixes: function () {
				return d.map(q,
					function (a) { return a.prefix })
			}, getPrefix: function (a) { return q[a] }, removePrefix: function (a) { a in q && delete q[a] }, extractPrefixes: function (a) { if ("-" != a.charAt(0)) return { property: a, prefixes: null }; for (var b = 1, c = a.length, d, e = []; b < c;) { d = a.charAt(b); if ("-" == d) { b++; break } if (d in q) e.push(d); else { e.length = 0; b = 1; break } b++ } b == c - 1 && (b = 1, e.length = 1); return { property: a.substring(b), prefixes: e.length ? e : "all" } }, findValuesInAbbreviation: function (a, c) {
				c = c || "css"; for (var d = 0, e = a.length, h = "", g; d < e;) {
					g = a.charAt(d); if (j(g) ||
						"#" == g || "-" == g && j(a.charAt(d + 1))) { h = a.substring(d); break } d++
				} g = a.substring(0, a.length - h.length); d = f("resources"); for (e = []; ~g.indexOf("-") && !d.findSnippet(c, g);) { g = g.split("-"); var l = g.pop(); if (!b(l)) break; e.unshift(l); g = g.join("-") } return e.join("-") + h
			}, parseValues: function (c) {
				for (var e = f("stringStream").create(c), h = [], g = null; g = e.next();) {
					if ("#" == g) e.match(/^t|[0-9a-f]+/i, !0); else if ("-" == g) { if (b(d.last(h)) || e.start && j(c.charAt(e.start - 1))) e.start = e.pos; e.match(/^\-?[0-9]*(\.[0-9]+)?[a-z%\.]*/, !0) } else e.match(/^[0-9]*(\.[0-9]*)?[a-z%]*/,
						!0); h.push(e.current()); e.start = e.pos
				} return d.map(d.compact(h), a)
			}, extractValues: function (a) { var b = this.findValuesInAbbreviation(a); return !b ? { property: a, values: null } : { property: a.substring(0, a.length - b.length).replace(/-$/, ""), values: this.parseValues(b) } }, normalizeValue: function (a, b) {
				b = (b || "").toLowerCase(); var c = r.getArray("css.unitlessProperties"); return a.replace(/^(\-?[0-9\.]+)([a-z]*)$/, function (a, e, f) {
					if (!f && ("0" == e || d.include(c, b))) return e; if (!f) return e.replace(/\.$/, "") + r.get(~e.indexOf(".") ?
						"css.floatUnit" : "css.intUnit"); a = r.getDict("css.unitAliases"); return e + (f in a ? a[f] : f)
				})
			}, expand: function (a, b, c) {
				c = c || "css"; var e = f("resources"), j = r.get("css.autoInsertVendorPrefixes"), l; if (l = /^(.+)\!$/.test(a)) a = RegExp.$1; var n = e.findSnippet(c, a); if (n && !j) return m(n, l, c); a = this.extractPrefixes(a); var t = this.extractValues(a.property); a = d.extend(a, t); n ? a.values = null : n = e.findSnippet(c, a.property); !n && r.get("css.fuzzySearch") && (n = e.fuzzyFindSnippet(c, a.property, parseFloat(r.get("css.fuzzySearchMinScore"))));
				n ? d.isString(n) || (n = n.data) : n = a.property + ":${1};"; if (!g(n)) return n; var p = this.splitSnippet(n), s = []; !b && a.values && (b = d.map(a.values, function (a) { return this.normalizeValue(a, p.name) }, this).join(" ") + ";"); p.value = b || p.value; if ("all" == a.prefixes || !a.prefixes && j) { var v = p.name; b = j && "all" != a.prefixes; var u = []; d.each(q, function (a, b) { h(v, b) && u.push(b) }); !u.length && !b && d.each(q, function (a, b) { a.obsolete || u.push(b) }); b = u } else b = a.prefixes; var D = [], A; d.each(b, function (a) {
					a in q && (A = q[a].transformName(p.name),
						D.push(A), s.push(m(A + ":" + p.value, l, c)))
				}); s.push(m(p.name + ":" + p.value, l, c)); D.push(p.name); if (r.get("css.alignVendor")) var E = f("utils").getStringsPads(D), s = d.map(s, function (a, b) { return E[b] + a }); return s
			}, expandToSnippet: function (a, b) { var c = this.expand(a, null, b); return d.isArray(c) ? c.join("\n") : !d.isString(c) ? c.data : String(c) }, splitSnippet: function (a) {
				var b = f("utils"); a = b.trim(a); if (-1 == a.indexOf(":")) return { name: a, value: "${1};" }; a = a.split(":"); return {
					name: b.trim(a.shift()), value: b.trim(a.join(":")).replace(/^(\$\{0\}|\$0)(\s*;?)$/,
						"${1}$2")
				}
			}, getSyntaxPreference: l, transformSnippet: m
		}
});
emmet.define("cssGradient", function (f, d) {
	function j(a) { return f("utils").trim(a).replace(/\s+/g, " ") } function g(a) { a = j(a); var b = null; a = a.replace(/^(\w+\(.+?\))\s*/, function (a, c) { b = c; return "" }); b || (a = a.split(" "), b = a[0], a = a[1] || ""); var c = { color: b }; a && a.replace(/^(\-?[\d\.]+)([a-z%]+)?$/, function (a, b, d) { c.position = b; ~b.indexOf(".") ? d = "" : d || (d = "%"); d && (c.unit = d) }); return c } function a(a) {
		var b = parseFloat(a); if (!d.isNaN(b)) switch (b % 360) {
			case 0: return "left"; case 90: return "bottom"; case 180: return "right";
			case 240: return "top"
		}return a
	} function c(a) { var b = r.getArray("css.gradient.prefixes"), b = d.map(b, function (b) { return "-" + b + "-" + a }); b.push(a); return b } function b(a, b) {
		var c = [], e = f("cssResolver"); r.get("css.gradient.fallback") && ~b.toLowerCase().indexOf("background") && c.push({ name: "background-color", value: "${1:" + a.colorStops[0].color + "}" }); d.each(r.getArray("css.gradient.prefixes"), function (d) {
			var f = e.prefixed(b, d); if ("webkit" == d && r.get("css.gradient.oldWebkit")) try { c.push({ name: f, value: m.oldWebkitLinearGradient(a) }) } catch (h) { } c.push({
				name: f,
				value: m.toString(a, d)
			})
		}); return c.sort(function (a, b) { return b.name.length - a.name.length })
	} function h(a) { var b = a.value(), c = null; return (a = d.find(a.valueParts(), function (a) { return c = m.parse(a.substring(b)) })) && c ? { gradient: c, valueRange: a } : null } function e(a, b) { var c = null, e = f("cssEditTree").parseFromPosition(a, b, !0); e && ((c = e.itemFromPosition(b, !0)) || (c = d.find(e.list(), function (a) { return a.range(!0).end == b }))); return { rule: e, property: c } } var l = ["top", "to bottom", "0deg"], m = null, p = "css less sass scss stylus styl".split(" "),
		n = /\d+deg/i, q = /top|bottom|left|right/i, r = f("preferences"); r.define("css.gradient.prefixes", "webkit, moz, o", "A comma-separated list of vendor-prefixes for which values should be generated."); r.define("css.gradient.oldWebkit", !0, "Generate gradient definition for old Webkit implementations"); r.define("css.gradient.omitDefaultDirection", !0, "Do not output default direction definition in generated gradients."); r.define("css.gradient.defaultProperty", "background-image", "When gradient expanded outside CSS value context, it will produce properties with this name.");
	r.define("css.gradient.fallback", !1, "With this option enabled, CSS gradient generator will produce <code>background-color</code> property with gradient first color as fallback for old browsers."); f("expandAbbreviation").addHandler(function (a, g, j) {
		j = f("editorUtils").outputInfo(a, g, j); if (!d.include(p, j.syntax)) return !1; var l = a.getCaretPos(), n = j.content; j = e(n, l); if (j.property) {
			var q = h(j.property); if (q) {
				var k = j.rule.options.offset || 0, y = k + j.rule.toString().length; if (/[\n\r]/.test(j.property.value())) {
					var G =
						j.property.valueRange(!0).start + q.valueRange.end, n = f("utils").replaceSubstring(n, ";", G), l = e(n, l); l.property && (q = h(l.property), j = l)
				} j.property.end(";"); var l = j.property.name(), n = f("resources"), G = f("preferences"), C = n.findSnippet(g, l); !C && G.get("css.fuzzySearch") && (C = n.fuzzyFindSnippet(g, l, parseFloat(G.get("css.fuzzySearchMinScore")))); C ? (d.isString(C) || (C = C.data), g = f("cssResolver").splitSnippet(C).name) : g = void 0; g && j.property.name(g); var w = j.property; g = q.gradient; var H = q.valueRange, B = w.parent, I = f("utils"),
					q = f("preferences").get("css.alignVendor"), J = w.styleSeparator, K = w.styleBefore; d.each(B.getAll(c(w.name())), function (a) { a != w && /gradient/i.test(a.value()) && (a.styleSeparator.length < J.length && (J = a.styleSeparator), a.styleBefore.length < K.length && (K = a.styleBefore), B.remove(a)) }); q && (K != w.styleBefore && (l = w.fullRange(), B._updateSource(K, l.start, l.start + w.styleBefore.length), w.styleBefore = K), J != w.styleSeparator && (B._updateSource(J, w.nameRange().end, w.valueRange().start), w.styleSeparator = J)); var D = w.value();
				H || (H = f("range").create(0, w.value())); w.value(function (a) { return I.replaceSubstring(D, a, H) }(m.toString(g)) + "${2}"); g = b(g, w.name()); if (q) { q = d.pluck(g, "value"); l = d.pluck(g, "name"); q.push(w.value()); l.push(w.name()); var A = I.getStringsPads(d.map(q, function (a) { return a.substring(0, a.indexOf("(")) })), E = I.getStringsPads(l); w.name(d.last(E) + w.name()); d.each(g, function (a, b) { a.name = E[b] + a.name; a.value = A[b] + a.value }); w.value(d.last(A) + w.value()) } d.each(g, function (a) { B.add(a.name, a.value, B.indexOf(w)) }); a.replaceContent(j.rule.toString(),
					k, y, !0); return !0
			}
		} if (j = r.get("css.gradient.defaultProperty")) {
			var k = String(a.getContent()), F = f("range").create(a.getCurrentLineRange()), y = F.substring(k).replace(/^\s+/, function (a) { F.start += a.length; return "" }).replace(/\s+$/, function (a) { F.end -= a.length; return "" }), k = f("cssResolver"); if (y = m.parse(y)) {
				q = b(y, j); q.push({ name: j, value: m.toString(y) + "${2}" }); var L = k.getSyntaxPreference("valueSeparator", g), M = k.getSyntaxPreference("propertyEnd", g); if (f("preferences").get("css.alignVendor")) {
					var N = f("utils").getStringsPads(d.map(q,
						function (a) { return a.value.substring(0, a.value.indexOf("(")) })); d.each(q, function (a, b) { a.value = N[b] + a.value })
				} q = d.map(q, function (a) { return a.name + L + a.value + M }); a.replaceContent(q.join("\n"), F.start, F.end); a = !0
			} else a = !1
		} else a = !1; return a
	}); f("reflectCSSValue").addHandler(function (a) {
		var b = f("utils"), e = h(a); if (!e) return !1; var g = a.value(), j = function (a) { return b.replaceSubstring(g, a, e.valueRange) }; d.each(a.parent.getAll(c(a.name())), function (b) {
			if (b !== a) {
				var c = b.value().match(/^\s*(\-([a-z]+)\-)?linear\-gradient/);
				c ? b.value(j(m.toString(e.gradient, c[2] || ""))) : b.value().match(/\s*\-webkit\-gradient/) && b.value(j(m.oldWebkitLinearGradient(e.gradient)))
			}
		}); return !0
	}); return m = {
		parse: function (a) {
			var b = null; f("utils").trim(a).replace(/^([\w\-]+)\((.+?)\)$/, function (a, c, e) {
				c = c.toLowerCase().replace(/^\-[a-z]+\-/, ""); if ("linear-gradient" == c || "lg" == c) {
					a = l[0]; e = f("stringStream").create(f("utils").trim(e)); c = []; for (var h; h = e.next();)"," == e.peek() ? (c.push(e.current()), e.next(), e.eatSpace(), e.start = e.pos) : "(" == h && e.skipTo(")");
					c.push(e.current()); c = d.compact(d.map(c, j)); if (c.length) { if (n.test(c[0]) || q.test(c[0])) a = c.shift(); b = { type: "linear", direction: a, colorStops: d.map(c, g) } } else b = null; return ""
				} return a
			}); return b
		}, oldWebkitLinearGradient: function (b) {
			d.isString(b) && (b = this.parse(b)); if (!b) return null; var c = d.map(b.colorStops, d.clone); d.each(c, function (a) {
				if ("position" in a) if (~a.position.indexOf(".") || "%" == a.unit) a.position = parseFloat(a.position) / ("%" == a.unit ? 100 : 1); else throw "Can't convert color stop '" + (a.position + (a.unit ||
					"")) + "'";
			}); var e = c, f = 0; d.each(e, function (a, b) { if (!b) return a.position = a.position || 0; b == e.length - 1 && !("position" in a) && (a.position = 1); if ("position" in a) { var c = e[f].position || 0, h = (a.position - c) / (b - f); d.each(e.slice(f, b), function (a, b) { a.position = c + h * b }); f = b } }); var c = d.map(c, function (a, b) { return !a.position && !b ? "from(" + a.color + ")" : 1 == a.position && b == c.length - 1 ? "to(" + a.color + ")" : "color-stop(" + a.position.toFixed(2).replace(/\.?0+$/, "") + ", " + a.color + ")" }), h = b.direction, h = a(h); if (n.test(h)) throw "The direction is an angle that can\u2019t be converted.";
			b = function (a) { return ~h.indexOf(a) ? "100%" : "0" }; return "-webkit-gradient(linear, " + (b("right") + " " + b("bottom") + ", " + b("left") + " " + b("top")) + ", " + c.join(", ") + ")"
		}, toString: function (a, b) { if ("linear" == a.type) { var c = (b ? "-" + b + "-" : "") + "linear-gradient", e = d.map(a.colorStops, function (a) { return a.color + ("position" in a ? " " + a.position + (a.unit || "") : "") }); a.direction && (!r.get("css.gradient.omitDefaultDirection") || !d.include(l, a.direction)) && e.unshift(a.direction); return c + "(" + e.join(", ") + ")" } }
	}
});
emmet.exec(function (f, d) { var j = f("handlerList").create(), g = f("resources"); d.extend(g, { addGenerator: function (a, c, b) { d.isString(a) && (a = RegExp(a)); j.add(function (b, d) { var f; return (f = a.exec(b.name())) ? c(f, b, d) : null }, b) } }); g.addResolver(function (a, c) { return j.exec(null, d.toArray(arguments)) }) });
emmet.define("tagName", function (f, d) {
	var j = { empty: "area base basefont br col frame hr img input isindex link meta param embed keygen command".split(" "), blockLevel: "address applet blockquote button center dd del dir div dl dt fieldset form frameset hr iframe ins isindex li link map menu noframes noscript object ol p pre script table tbody td tfoot th thead tr ul h1 h2 h3 h4 h5 h6".split(" "), inlineLevel: "a abbr acronym applet b basefont bdo big br button cite code del dfn em font i iframe img input ins kbd label map object q s samp select small span strike strong sub sup textarea tt u var".split(" ") },
		g = { p: "span", ul: "li", ol: "li", table: "tr", tr: "td", tbody: "tr", thead: "tr", tfoot: "tr", colgroup: "col", select: "option", optgroup: "option", audio: "source", video: "source", object: "param", map: "area" }; return {
			resolve: function (a) { a = (a || "").toLowerCase(); return a in g ? this.getMapping(a) : this.isInlineLevel(a) ? "span" : "div" }, getMapping: function (a) { return g[a.toLowerCase()] }, isInlineLevel: function (a) { return this.isTypeOf(a, "inlineLevel") }, isBlockLevel: function (a) { return this.isTypeOf(a, "blockLevel") }, isEmptyElement: function (a) {
				return this.isTypeOf(a,
					"empty")
			}, isTypeOf: function (a, c) { return d.include(j[c], a) }, addMapping: function (a, c) { g[a] = c }, removeMapping: function (a) { a in g && delete g[a] }, addElementToCollection: function (a, c) { j[c] || (j[c] = []); var b = this.getCollection(c); d.include(b, a) || b.push(a) }, removeElementFromCollection: function (a, c) { c in j && (j[c] = d.without(this.getCollection(c), a)) }, getCollection: function (a) { return j[a] }
		}
});
emmet.exec(function (f, d) {
	function j() { return { element: c.get("bem.elementSeparator"), modifier: c.get("bem.modifierSeparator") } } function g(a, b, c) { var d = j(), f = RegExp("^(" + d[c] + ")+", "g"); if (f.test(a)) { for (var g = 0, f = a.replace(f, function (a) { g = a.length / d[c].length; return "" }), q = b; q.parent && g--;)q = q.parent; if (!q || !q.__bem) q = b; if (q && q.__bem) return a = q.__bem.block, "modifier" == c && q.__bem.element && (a += d.element + q.__bem.element), a + d[c] + f } return a } function a(h, e) {
		if (h.name && !f("abbreviationUtils").isSnippet(h)) {
			h.__bem =
				{ block: "", element: "", modifier: "" }; var l = h.attribute("class"), m = f("utils"), l = (" " + (l || "") + " ").replace(/\s+/g, " "), p = c.get("bem.shortElementPrefix"); p && (p = RegExp("\\s(" + m.escapeForRegexp(p) + "+)", "g"), l = l.replace(p, function (a, b) { return " " + m.repeatString(j().element, b.length) })); var l = m.trim(l).split(" "), n = /^[a-z]\-/i; h.__bem.block = d.find(l, function (a) { return n.test(a) }); h.__bem.block || (n = /^[a-z]/i, h.__bem.block = d.find(l, function (a) { return n.test(a) }) || ""); (l = d.chain(l).map(function (a) {
					var b; b = g(a,
						h, "element"); b = g(b, h, "modifier"); var c = "", d = "", e = ""; a = j(); ~b.indexOf(a.element) ? (c = b.split(a.element), e = c[1].split(a.modifier), c = c[0], d = e.shift(), e = e.join(a.modifier)) : ~b.indexOf(a.modifier) && (e = b.split(a.modifier), c = e.shift(), e = e.join(a.modifier)); if (c || d || e) { c || (c = h.__bem.block); b = c; var f = []; d && (b += a.element + d); f.push(b); e && f.push(b + a.modifier + e); h.__bem.block = c; h.__bem.element = d; h.__bem.modifier = e; a = f } else a = b; return a
				}).flatten().uniq().value().join(" ")) && h.attribute("class", l)
		} var q = f("abbreviationUtils");
		d.each(h.children, function (c) { a(c, e); !q.isSnippet(c) && c.start && (b = !0) }); return h
	} var c = f("preferences"); c.define("bem.elementSeparator", "__", "Class name\u2019s element separator."); c.define("bem.modifierSeparator", "_", "Class name\u2019s modifier separator."); c.define("bem.shortElementPrefix", "-", "Symbol for describing short \u201cblock-element\u201d notation. Class names prefixed with this symbol will be treated as element name for parent\u2018s block name. Each symbol instance traverses one level up in parsed tree for block name lookup. Empty value will disable short notation.");
	var b = !1; f("filters").add("bem", function (c, d) { b = !1; c = a(c, d); b && (c = f("filters").apply(c, "html", d)); return c })
});
emmet.exec(function (f, d) {
	function j(a, c, b) {
		var h = f("abbreviationUtils"); d.each(a.children, function (a) {
			if (h.isBlock(a)) {
				var l = f("utils"), m = g.get("filter.commentTrigger"); if ("*" == m || d.find(m.split(","), function (b) { return !!a.attribute(l.trim(b)) })) {
					var p = { node: a, name: a.name(), padding: a.parent ? a.parent.padding : "", attr: function (b, c, d) { return (b = a.attribute(b)) ? (c || "") + b + (d || "") : "" } }, m = l.normalizeNewline(c ? c(p) : ""), p = l.normalizeNewline(b ? b(p) : ""); a.start = a.start.replace(/</, m + "<"); a.end = a.end.replace(/>/,
						">" + p)
				}
			} j(a, c, b)
		}); return a
	} var g = f("preferences"); g.define("filter.commentAfter", '\n\x3c!-- /<%= attr("id", "#") %><%= attr("class", ".") %> --\x3e', "A definition of comment that should be placed <i>after</i> matched element when <code>comment</code> filter is applied. This definition is an ERB-style template passed to <code>_.template()</code> function (see Underscore.js docs for details). In template context, the following properties and functions are availabe:\n<ul><li><code>attr(name, before, after)</code> \u2013 a function that outputsspecified attribute value concatenated with <code>before</code> and <code>after</code> strings. If attribute doesn't exists, the empty string will be returned.</li><li><code>node</code> \u2013 current node (instance of <code>AbbreviationNode</code>)</li><li><code>name</code> \u2013 name of current tag</li><li><code>padding</code> \u2013 current string padding, can be used for formatting</li></ul>");
	g.define("filter.commentBefore", "", "A definition of comment that should be placed <i>before</i> matched element when <code>comment</code> filter is applied. For more info, read description of <code>filter.commentAfter</code> property"); g.define("filter.commentTrigger", "id, class", "A comma-separated list of attribute names that should exist in abbreviatoin where comment should be added. If you wish to add comment for every element, set this option to <code>*</code>"); f("filters").add("c", function (a) {
		var c =
			d.template(g.get("filter.commentBefore")), b = d.template(g.get("filter.commentAfter")); return j(a, c, b)
	})
}); emmet.exec(function (f, d) { function j(a) { return a.replace(/([<>&])/g, function (a, b) { return g[b] }) } var g = { "<": "&lt;", ">": "&gt;", "&": "&amp;" }; f("filters").add("e", function c(b) { d.each(b.children, function (b) { b.start = j(b.start); b.end = j(b.end); b.content = j(b.content); c(b) }); return b }) });
emmet.exec(function (f, d) {
	function j(a) { return a.parent && !a.parent.parent && !a.index() } function g(b, c) { var d = f("abbreviationUtils"); return !0 === c.tag_nl || d.isBlock(b) ? !0 : !b.parent || !c.inline_break ? !1 : a(b.parent, c) } function a(a, c) { var e = 0, g = f("abbreviationUtils"); return !!d.find(a.children, function (a) { a.isTextNode() || !g.isInline(a) ? e = 0 : g.isInline(a) && e++; if (e >= c.inline_break) return !0 }) } var c = f("preferences"); c.define("format.noIndentTags", "html", "A comma-separated list of tag names that should not get inner indentation.");
	c.define("format.forceIndentationForTags", "body", "A comma-separated list of tag names that should <em>always</em> get inner indentation."); f("filters").add("_format", function h(e, l, m) {
		m = m || 0; var p = f("abbreviationUtils"); d.each(e.children, function (e) {
			if (p.isSnippet(e)) { if (e.start = e.end = "", !j(e) && (!1 !== l.tag_nl && g(e, l)) && (!e.parent.parent || !f("abbreviationUtils").isInline(e.parent))) e.start = f("utils").getNewline() + e.start } else {
				e.start = e.end = "%s"; var q = f("utils"), r = f("abbreviationUtils"), t = r.isUnary(e),
					q = q.getNewline(), s = d.include(c.getArray("format.noIndentTags") || [], e.name()) ? "" : f("resources").getVariable("indentation"); if (!1 !== l.tag_nl) {
						var u = !0 === l.tag_nl && (l.tag_nl_leaf || e.children.length); u || (u = d.include(c.getArray("format.forceIndentationForTags") || [], e.name())); if (!e.isTextNode()) {
							if (g(e, l)) {
								if (!j(e) && (!r.isSnippet(e.parent) || e.index())) e.start = q + e.start; if (r.hasBlockChildren(e) || e.children.length && g(e.children[0], l) || u && !t) e.end = q + e.end; if (r.hasTagsInContent(e) || u && !e.children.length &&
									!t) e.start += q + s
							} else if (r.isInline(e) && e.parent && f("abbreviationUtils").hasBlockChildren(e.parent) && !j(e)) e.start = q + e.start; else { if (r = r.isInline(e)) var v = f("abbreviationUtils"), r = !d.any(e.children, function (a) { return v.isSnippet(a) ? !1 : !v.isInline(a) }) ? a(e, l) : !0; r && (e.end = q + e.end) } e.padding = s
						}
					}
			} h(e, l, m + 1)
		}); return e
	})
});
emmet.exec(function (f, d) {
	f("filters").add("haml", function g(a, c, b) {
		b = b || 0; var h = f("abbreviationUtils"); b || (a = f("filters").apply(a, "_format", c)); d.each(a.children, function (a) {
			if (!h.isSnippet(a) && a.parent) {
				var l = f("abbreviationUtils"), m = f("utils"), p, n = "", q = [], r = c.attributeQuote(), t = c.cursor(); d.each(a.attributeList(), function (a) {
					var b = c.attributeName(a.name); switch (b.toLowerCase()) {
						case "id": n += "#" + (a.value || t); break; case "class": n += "." + f("utils").trim(a.value || t).replace(/\s+/g, "."); break; default: q.push(":" +
							b + " => " + r + (a.value || t) + r)
					}
				}); q.length && (n += "{" + q.join(", ") + "}"); p = n; var s = c.cursor(), l = l.isUnary(a), u = c.self_closing_tag && l ? "/" : "", v = "%" + c.tagName(a.name()); "%div" == v.toLowerCase() && (p && -1 == p.indexOf("{")) && (v = ""); a.end = ""; a.start = m.replaceSubstring(a.start, v + p + u + " ", a.start.indexOf("%s"), "%s"); !a.children.length && !l && (a.start += s)
			} g(a, c, b + 1)
		}); return a
	})
});
emmet.exec(function (f, d) {
	f("filters").add("html", function g(a, c, b) {
		b = b || 0; var h = f("abbreviationUtils"); b || (a = f("filters").apply(a, "_format", c)); d.each(a.children, function (a) {
			if (!h.isSnippet(a) && a.parent) {
				var l = f("abbreviationUtils"), m = f("utils"), p, n = c.attributeQuote(), q = c.cursor(); p = d.map(a.attributeList(), function (a) { return " " + c.attributeName(a.name) + "=" + n + (a.value || q) + n }).join(""); var r = c.cursor(), l = l.isUnary(a), t = "", s = ""; if (!a.isTextNode()) {
					var u = c.tagName(a.name()); l ? (t = "<" + u + p + c.selfClosing() +
						">", a.end = "") : (t = "<" + u + p + ">", s = "</" + u + ">")
				} a.start = m.replaceSubstring(a.start, t, a.start.indexOf("%s"), "%s"); a.end = m.replaceSubstring(a.end, s, a.end.indexOf("%s"), "%s"); !a.children.length && (!l && !~a.content.indexOf(r) && !f("tabStops").extract(a.content).tabstops.length) && (a.start += r)
			} g(a, c, b + 1)
		}); return a
	})
});
emmet.exec(function (f, d) { var j = /^\s+/, g = /[\n\r]/g; f("filters").add("s", function c(b) { var h = f("abbreviationUtils"); d.each(b.children, function (b) { h.isSnippet(b) || (b.start = b.start.replace(j, ""), b.end = b.end.replace(j, "")); b.start = b.start.replace(g, ""); b.end = b.end.replace(g, ""); b.content = b.content.replace(g, ""); c(b) }); return b }) });
emmet.exec(function (f, d) {
	function j(f, a) { d.each(f.children, function (c) { c.content && (c.content = c.content.replace(a, "")); j(c, a) }); return f } f("preferences").define("filter.trimRegexp", "[\\s|\\u00a0]*[\\d|#|\\-|*|\\u2022]+\\.?\\s*", "Regular expression used to remove list markers (numbers, dashes, bullets, etc.) in <code>t</code> (trim) filter. The trim filter is useful for wrapping with abbreviation lists, pased from other documents (for example, Word documents)."); f("filters").add("t", function (d) {
		var a =
			RegExp(f("preferences").get("filter.trimRegexp")); return j(d, a)
	})
}); emmet.exec(function (f, d) { var j = { "xsl:variable": 1, "xsl:with-param": 1 }; f("filters").add("xsl", function a(c) { var b = f("abbreviationUtils"); d.each(c.children, function (c) { if (!b.isSnippet(c) && (c.name() || "").toLowerCase() in j && c.children.length) c.start = c.start.replace(/\s+select\s*=\s*(['"]).*?\1/, ""); a(c) }); return c }) });
emmet.exec(function (f, d) {
	function j(a, b) { return Math.round(Math.random() * (b - a) + a) } function g(a, b) { for (var c = a.length, f = Math.min(c, b), h = []; h.length < f;) { var g = j(0, c - 1); d.include(h, g) || h.push(g) } return d.map(h, function (b) { return a[b] }) } function a(a, b) { a.length && (a[0] = a[0].charAt(0).toUpperCase() + a[0].substring(1)); var c = a.join(" "), f; if (!(f = b)) f = d.isString("?!...") ? "?!...".charAt(j(0, 4)) : "?!..."[j(0, 4)]; return c + f } function c(a) {
		var b = a.length, c = 0, c = 3 < b && 6 >= b ? j(0, 1) : 6 < b && 12 >= b ? j(0, 2) : j(1, 4); d.each(g(d.range(c)),
			function (b) { a[b] += "," })
	} f("abbreviationParser").addPreprocessor(function (d) {
		var f = /^(?:lorem|lipsum)(\d*)$/i, m; d.findAll(function (d) {
			if (d._name && (m = d._name.match(f))) {
				var e = m[1] || 30; d._name = ""; d.data("forceNameResolving", d.isRepeating() || d.attributeList().length); d.data("pasteOverwrites", !0); d.data("paste", function (d) {
					var f = e, l = !d; d = []; var m = 0, f = parseInt(f, 10); l && (l = b.slice(0, f), 5 < l.length && (l[4] += ","), m += l.length, d.push(a(l, "."))); for (; m < f;)l = g(h, Math.min(j(3, 12) * j(1, 5), f - m)), m += l.length, c(l), d.push(a(l));
					return d.join(" ")
				})
			}
		})
	}); var b = "lorem ipsum dolor sit amet consectetur adipisicing elit".split(" "), h = "exercitationem perferendis perspiciatis laborum eveniet sunt iure nam nobis eum cum officiis excepturi odio consectetur quasi aut quisquam vel eligendi itaque non odit tempore quaerat dignissimos facilis neque nihil expedita vitae vero ipsum nisi animi cumque pariatur velit modi natus iusto eaque sequi illo sed ex et voluptatibus tempora veritatis ratione assumenda incidunt nostrum placeat aliquid fuga provident praesentium rem necessitatibus suscipit adipisci quidem possimus voluptas debitis sint accusantium unde sapiente voluptate qui aspernatur laudantium soluta amet quo aliquam saepe culpa libero ipsa dicta reiciendis nesciunt doloribus autem impedit minima maiores repudiandae ipsam obcaecati ullam enim totam delectus ducimus quis voluptates dolores molestiae harum dolorem quia voluptatem molestias magni distinctio omnis illum dolorum voluptatum ea quas quam corporis quae blanditiis atque deserunt laboriosam earum consequuntur hic cupiditate quibusdam accusamus ut rerum error minus eius ab ad nemo fugit officia at in id quos reprehenderit numquam iste fugiat sit inventore beatae repellendus magnam recusandae quod explicabo doloremque aperiam consequatur asperiores commodi optio dolor labore temporibus repellat veniam architecto est esse mollitia nulla a similique eos alias dolore tenetur deleniti porro facere maxime corrupti".split(" ")
});
emmet.exec(function (f) { f("actions").add("select_line", function (d) { var f = d.getCurrentLineRange(); d.createSelection(f.start, f.end); return !0 }) });
emmet.exec(function (f) {
	f("resources").setVocabulary({
		variables: { lang: "en", locale: "en-US", charset: "UTF-8", indentation: "\t", newline: "\n" }, css: {
			filters: "html", snippets: {
				"@i": "@import url(|);", "@import": "@import url(|);", "@m": "@media ${1:screen} {\n\t|\n}", "@media": "@media ${1:screen} {\n\t|\n}", "@f": "@font-face {\n\tfont-family:|;\n\tsrc:url(|);\n}", "@f+": "@font-face {\n\tfont-family: '${1:FontName}';\n\tsrc: url('${2:FileName}.eot');\n\tsrc: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n\t\t url('${2:FileName}.woff') format('woff'),\n\t\t url('${2:FileName}.ttf') format('truetype'),\n\t\t url('${2:FileName}.svg#${1:FontName}') format('svg');\n\tfont-style: ${3:normal};\n\tfont-weight: ${4:normal};\n}", "@kf": "@-webkit-keyframes ${1:identifier} {\n\t${2:from} { ${3} }${6}\n\t${4:to} { ${5} }\n}\n@-o-keyframes ${1:identifier} {\n\t${2:from} { ${3} }${6}\n\t${4:to} { ${5} }\n}\n@-moz-keyframes ${1:identifier} {\n\t${2:from} { ${3} }${6}\n\t${4:to} { ${5} }\n}\n@keyframes ${1:identifier} {\n\t${2:from} { ${3} }${6}\n\t${4:to} { ${5} }\n}",
				anim: "animation:|;", "anim-": "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode};", animdel: "animation-delay:${1:time};", animdir: "animation-direction:${1:normal};", "animdir:n": "animation-direction:normal;", "animdir:r": "animation-direction:reverse;", "animdir:a": "animation-direction:alternate;", "animdir:ar": "animation-direction:alternate-reverse;", animdur: "animation-duration:${1:0}s;", animfm: "animation-fill-mode:${1:both};", "animfm:f": "animation-fill-mode:forwards;",
				"animfm:b": "animation-fill-mode:backwards;", "animfm:bt": "animation-fill-mode:both;", "animfm:bh": "animation-fill-mode:both;", animic: "animation-iteration-count:${1:1};", "animic:i": "animation-iteration-count:infinite;", animn: "animation-name:${1:none};", animps: "animation-play-state:${1:running};", "animps:p": "animation-play-state:paused;", "animps:r": "animation-play-state:running;", animtf: "animation-timing-function:${1:linear};", "animtf:e": "animation-timing-function:ease;", "animtf:ei": "animation-timing-function:ease-in;",
				"animtf:eo": "animation-timing-function:ease-out;", "animtf:eio": "animation-timing-function:ease-in-out;", "animtf:l": "animation-timing-function:linear;", "animtf:cb": "animation-timing-function:cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1});", ap: "appearance:${none}", "!": "!important", pos: "position:${1:relative};", "pos:s": "position:static;", "pos:a": "position:absolute;", "pos:r": "position:relative;", "pos:f": "position:fixed;", t: "top:|;", "t:a": "top:auto;", r: "right:|;", "r:a": "right:auto;", b: "bottom:|;",
				"b:a": "bottom:auto;", l: "left:|;", "l:a": "left:auto;", z: "z-index:|;", "z:a": "z-index:auto;", fl: "float:${1:left};", "fl:n": "float:none;", "fl:l": "float:left;", "fl:r": "float:right;", cl: "clear:${1:both};", "cl:n": "clear:none;", "cl:l": "clear:left;", "cl:r": "clear:right;", "cl:b": "clear:both;", colm: "columns:|;", colmc: "column-count:|;", colmf: "column-fill:|;", colmg: "column-gap:|;", colmr: "column-rule:|;", colmrc: "column-rule-color:|;", colmrs: "column-rule-style:|;", colmrw: "column-rule-width:|;", colms: "column-span:|;",
				colmw: "column-width:|;", d: "display:${1:block};", "d:n": "display:none;", "d:b": "display:block;", "d:i": "display:inline;", "d:ib": "display:inline-block;", "d:li": "display:list-item;", "d:ri": "display:run-in;", "d:cp": "display:compact;", "d:tb": "display:table;", "d:itb": "display:inline-table;", "d:tbcp": "display:table-caption;", "d:tbcl": "display:table-column;", "d:tbclg": "display:table-column-group;", "d:tbhg": "display:table-header-group;", "d:tbfg": "display:table-footer-group;", "d:tbr": "display:table-row;", "d:tbrg": "display:table-row-group;",
				"d:tbc": "display:table-cell;", "d:rb": "display:ruby;", "d:rbb": "display:ruby-base;", "d:rbbg": "display:ruby-base-group;", "d:rbt": "display:ruby-text;", "d:rbtg": "display:ruby-text-group;", v: "visibility:${1:hidden};", "v:v": "visibility:visible;", "v:h": "visibility:hidden;", "v:c": "visibility:collapse;", ov: "overflow:${1:hidden};", "ov:v": "overflow:visible;", "ov:h": "overflow:hidden;", "ov:s": "overflow:scroll;", "ov:a": "overflow:auto;", ovx: "overflow-x:${1:hidden};", "ovx:v": "overflow-x:visible;", "ovx:h": "overflow-x:hidden;",
				"ovx:s": "overflow-x:scroll;", "ovx:a": "overflow-x:auto;", ovy: "overflow-y:${1:hidden};", "ovy:v": "overflow-y:visible;", "ovy:h": "overflow-y:hidden;", "ovy:s": "overflow-y:scroll;", "ovy:a": "overflow-y:auto;", ovs: "overflow-style:${1:scrollbar};", "ovs:a": "overflow-style:auto;", "ovs:s": "overflow-style:scrollbar;", "ovs:p": "overflow-style:panner;", "ovs:m": "overflow-style:move;", "ovs:mq": "overflow-style:marquee;", zoo: "zoom:1;", zm: "zoom:1;", cp: "clip:|;", "cp:a": "clip:auto;", "cp:r": "clip:rect(${1:top} ${2:right} ${3:bottom} ${4:left});",
				bxz: "box-sizing:${1:border-box};", "bxz:cb": "box-sizing:content-box;", "bxz:bb": "box-sizing:border-box;", bxsh: "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:color};", "bxsh:r": "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:spread }rgb(${6:0}, ${7:0}, ${8:0});", "bxsh:ra": "box-shadow:${1:inset }${2:h} ${3:v} ${4:blur} ${5:spread }rgba(${6:0}, ${7:0}, ${8:0}, .${9:5});", "bxsh:n": "box-shadow:none;", m: "margin:|;", "m:a": "margin:auto;", mt: "margin-top:|;", "mt:a": "margin-top:auto;", mr: "margin-right:|;",
				"mr:a": "margin-right:auto;", mb: "margin-bottom:|;", "mb:a": "margin-bottom:auto;", ml: "margin-left:|;", "ml:a": "margin-left:auto;", p: "padding:|;", pt: "padding-top:|;", pr: "padding-right:|;", pb: "padding-bottom:|;", pl: "padding-left:|;", w: "width:|;", "w:a": "width:auto;", h: "height:|;", "h:a": "height:auto;", maw: "max-width:|;", "maw:n": "max-width:none;", mah: "max-height:|;", "mah:n": "max-height:none;", miw: "min-width:|;", mih: "min-height:|;", mar: "max-resolution:${1:res};", mir: "min-resolution:${1:res};", ori: "orientation:|;",
				"ori:l": "orientation:landscape;", "ori:p": "orientation:portrait;", ol: "outline:|;", "ol:n": "outline:none;", olo: "outline-offset:|;", olw: "outline-width:|;", ols: "outline-style:|;", olc: "outline-color:#${1:000};", "olc:i": "outline-color:invert;", bd: "border:|;", "bd+": "border:${1:1px} ${2:solid} ${3:#000};", "bd:n": "border:none;", bdbk: "border-break:${1:close};", "bdbk:c": "border-break:close;", bdcl: "border-collapse:|;", "bdcl:c": "border-collapse:collapse;", "bdcl:s": "border-collapse:separate;", bdc: "border-color:#${1:000};",
				"bdc:t": "border-color:transparent;", bdi: "border-image:url(|);", "bdi:n": "border-image:none;", bdti: "border-top-image:url(|);", "bdti:n": "border-top-image:none;", bdri: "border-right-image:url(|);", "bdri:n": "border-right-image:none;", bdbi: "border-bottom-image:url(|);", "bdbi:n": "border-bottom-image:none;", bdli: "border-left-image:url(|);", "bdli:n": "border-left-image:none;", bdci: "border-corner-image:url(|);", "bdci:n": "border-corner-image:none;", "bdci:c": "border-corner-image:continue;", bdtli: "border-top-left-image:url(|);",
				"bdtli:n": "border-top-left-image:none;", "bdtli:c": "border-top-left-image:continue;", bdtri: "border-top-right-image:url(|);", "bdtri:n": "border-top-right-image:none;", "bdtri:c": "border-top-right-image:continue;", bdbri: "border-bottom-right-image:url(|);", "bdbri:n": "border-bottom-right-image:none;", "bdbri:c": "border-bottom-right-image:continue;", bdbli: "border-bottom-left-image:url(|);", "bdbli:n": "border-bottom-left-image:none;", "bdbli:c": "border-bottom-left-image:continue;", bdf: "border-fit:${1:repeat};",
				"bdf:c": "border-fit:clip;", "bdf:r": "border-fit:repeat;", "bdf:sc": "border-fit:scale;", "bdf:st": "border-fit:stretch;", "bdf:ow": "border-fit:overwrite;", "bdf:of": "border-fit:overflow;", "bdf:sp": "border-fit:space;", bdlen: "border-length:|;", "bdlen:a": "border-length:auto;", bdsp: "border-spacing:|;", bds: "border-style:|;", "bds:n": "border-style:none;", "bds:h": "border-style:hidden;", "bds:dt": "border-style:dotted;", "bds:ds": "border-style:dashed;", "bds:s": "border-style:solid;", "bds:db": "border-style:double;", "bds:dtds": "border-style:dot-dash;",
				"bds:dtdtds": "border-style:dot-dot-dash;", "bds:w": "border-style:wave;", "bds:g": "border-style:groove;", "bds:r": "border-style:ridge;", "bds:i": "border-style:inset;", "bds:o": "border-style:outset;", bdw: "border-width:|;", bdtw: "border-top-width:|;", bdrw: "border-right-width:|;", bdbw: "border-bottom-width:|;", bdlw: "border-left-width:|;", bdt: "border-top:|;", bt: "border-top:|;", "bdt+": "border-top:${1:1px} ${2:solid} ${3:#000};", "bdt:n": "border-top:none;", bdts: "border-top-style:|;", "bdts:n": "border-top-style:none;",
				bdtc: "border-top-color:#${1:000};", "bdtc:t": "border-top-color:transparent;", bdr: "border-right:|;", br: "border-right:|;", "bdr+": "border-right:${1:1px} ${2:solid} ${3:#000};", "bdr:n": "border-right:none;", bdrst: "border-right-style:|;", "bdrst:n": "border-right-style:none;", bdrc: "border-right-color:#${1:000};", "bdrc:t": "border-right-color:transparent;", bdb: "border-bottom:|;", bb: "border-bottom:|;", "bdb+": "border-bottom:${1:1px} ${2:solid} ${3:#000};", "bdb:n": "border-bottom:none;", bdbs: "border-bottom-style:|;",
				"bdbs:n": "border-bottom-style:none;", bdbc: "border-bottom-color:#${1:000};", "bdbc:t": "border-bottom-color:transparent;", bdl: "border-left:|;", bl: "border-left:|;", "bdl+": "border-left:${1:1px} ${2:solid} ${3:#000};", "bdl:n": "border-left:none;", bdls: "border-left-style:|;", "bdls:n": "border-left-style:none;", bdlc: "border-left-color:#${1:000};", "bdlc:t": "border-left-color:transparent;", bdrs: "border-radius:|;", bdtrrs: "border-top-right-radius:|;", bdtlrs: "border-top-left-radius:|;", bdbrrs: "border-bottom-right-radius:|;",
				bdblrs: "border-bottom-left-radius:|;", bg: "background:|;", "bg+": "background:${1:#fff} url(${2}) ${3:0} ${4:0} ${5:no-repeat};", "bg:n": "background:none;", "bg:ie": "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${1:x}.png',sizingMethod='${2:crop}');", bgc: "background-color:#${1:fff};", "bgc:t": "background-color:transparent;", bgi: "background-image:url(|);", "bgi:n": "background-image:none;", bgr: "background-repeat:|;", "bgr:n": "background-repeat:no-repeat;", "bgr:x": "background-repeat:repeat-x;",
				"bgr:y": "background-repeat:repeat-y;", "bgr:sp": "background-repeat:space;", "bgr:rd": "background-repeat:round;", bga: "background-attachment:|;", "bga:f": "background-attachment:fixed;", "bga:s": "background-attachment:scroll;", bgp: "background-position:${1:0} ${2:0};", bgpx: "background-position-x:|;", bgpy: "background-position-y:|;", bgbk: "background-break:|;", "bgbk:bb": "background-break:bounding-box;", "bgbk:eb": "background-break:each-box;", "bgbk:c": "background-break:continuous;", bgcp: "background-clip:${1:padding-box};",
				"bgcp:bb": "background-clip:border-box;", "bgcp:pb": "background-clip:padding-box;", "bgcp:cb": "background-clip:content-box;", "bgcp:nc": "background-clip:no-clip;", bgo: "background-origin:|;", "bgo:pb": "background-origin:padding-box;", "bgo:bb": "background-origin:border-box;", "bgo:cb": "background-origin:content-box;", bgsz: "background-size:|;", "bgsz:a": "background-size:auto;", "bgsz:ct": "background-size:contain;", "bgsz:cv": "background-size:cover;", c: "color:#${1:000};", "c:r": "color:rgb(${1:0}, ${2:0}, ${3:0});",
				"c:ra": "color:rgba(${1:0}, ${2:0}, ${3:0}, .${4:5});", cm: "/* |${child} */", cnt: "content:'|';", "cnt:n": "content:normal;", "cnt:oq": "content:open-quote;", "cnt:noq": "content:no-open-quote;", "cnt:cq": "content:close-quote;", "cnt:ncq": "content:no-close-quote;", "cnt:a": "content:attr(|);", "cnt:c": "content:counter(|);", "cnt:cs": "content:counters(|);", tbl: "table-layout:|;", "tbl:a": "table-layout:auto;", "tbl:f": "table-layout:fixed;", cps: "caption-side:|;", "cps:t": "caption-side:top;", "cps:b": "caption-side:bottom;",
				ec: "empty-cells:|;", "ec:s": "empty-cells:show;", "ec:h": "empty-cells:hide;", lis: "list-style:|;", "lis:n": "list-style:none;", lisp: "list-style-position:|;", "lisp:i": "list-style-position:inside;", "lisp:o": "list-style-position:outside;", list: "list-style-type:|;", "list:n": "list-style-type:none;", "list:d": "list-style-type:disc;", "list:c": "list-style-type:circle;", "list:s": "list-style-type:square;", "list:dc": "list-style-type:decimal;", "list:dclz": "list-style-type:decimal-leading-zero;", "list:lr": "list-style-type:lower-roman;",
				"list:ur": "list-style-type:upper-roman;", lisi: "list-style-image:|;", "lisi:n": "list-style-image:none;", q: "quotes:|;", "q:n": "quotes:none;", "q:ru": "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C';", "q:en": "quotes:'\\201C' '\\201D' '\\2018' '\\2019';", ct: "content:|;", "ct:n": "content:normal;", "ct:oq": "content:open-quote;", "ct:noq": "content:no-open-quote;", "ct:cq": "content:close-quote;", "ct:ncq": "content:no-close-quote;", "ct:a": "content:attr(|);", "ct:c": "content:counter(|);", "ct:cs": "content:counters(|);", coi: "counter-increment:|;",
				cor: "counter-reset:|;", va: "vertical-align:${1:top};", "va:sup": "vertical-align:super;", "va:t": "vertical-align:top;", "va:tt": "vertical-align:text-top;", "va:m": "vertical-align:middle;", "va:bl": "vertical-align:baseline;", "va:b": "vertical-align:bottom;", "va:tb": "vertical-align:text-bottom;", "va:sub": "vertical-align:sub;", ta: "text-align:${1:left};", "ta:l": "text-align:left;", "ta:c": "text-align:center;", "ta:r": "text-align:right;", "ta:j": "text-align:justify;", "ta-lst": "text-align-last:|;", "tal:a": "text-align-last:auto;",
				"tal:l": "text-align-last:left;", "tal:c": "text-align-last:center;", "tal:r": "text-align-last:right;", td: "text-decoration:${1:none};", "td:n": "text-decoration:none;", "td:u": "text-decoration:underline;", "td:o": "text-decoration:overline;", "td:l": "text-decoration:line-through;", te: "text-emphasis:|;", "te:n": "text-emphasis:none;", "te:ac": "text-emphasis:accent;", "te:dt": "text-emphasis:dot;", "te:c": "text-emphasis:circle;", "te:ds": "text-emphasis:disc;", "te:b": "text-emphasis:before;", "te:a": "text-emphasis:after;",
				th: "text-height:|;", "th:a": "text-height:auto;", "th:f": "text-height:font-size;", "th:t": "text-height:text-size;", "th:m": "text-height:max-size;", ti: "text-indent:|;", "ti:-": "text-indent:-9999px;", tj: "text-justify:|;", "tj:a": "text-justify:auto;", "tj:iw": "text-justify:inter-word;", "tj:ii": "text-justify:inter-ideograph;", "tj:ic": "text-justify:inter-cluster;", "tj:d": "text-justify:distribute;", "tj:k": "text-justify:kashida;", "tj:t": "text-justify:tibetan;", tov: "text-overflow:${ellipsis};", "tov:e": "text-overflow:ellipsis;",
				"tov:c": "text-overflow:clip;", to: "text-outline:|;", "to+": "text-outline:${1:0} ${2:0} ${3:#000};", "to:n": "text-outline:none;", tr: "text-replace:|;", "tr:n": "text-replace:none;", tt: "text-transform:${1:uppercase};", "tt:n": "text-transform:none;", "tt:c": "text-transform:capitalize;", "tt:u": "text-transform:uppercase;", "tt:l": "text-transform:lowercase;", tw: "text-wrap:|;", "tw:n": "text-wrap:normal;", "tw:no": "text-wrap:none;", "tw:u": "text-wrap:unrestricted;", "tw:s": "text-wrap:suppress;", tsh: "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000};",
				"tsh:r": "text-shadow:${1:h} ${2:v} ${3:blur} rgb(${4:0}, ${5:0}, ${6:0});", "tsh:ra": "text-shadow:${1:h} ${2:v} ${3:blur} rgba(${4:0}, ${5:0}, ${6:0}, .${7:5});", "tsh+": "text-shadow:${1:0} ${2:0} ${3:0} ${4:#000};", "tsh:n": "text-shadow:none;", trf: "transform:|;", "trf:skx": "transform: skewX(${1:angle});", "trf:sky": "transform: skewY(${1:angle});", "trf:sc": "transform: scale(${1:x}, ${2:y});", "trf:scx": "transform: scaleX(${1:x});", "trf:scy": "transform: scaleY(${1:y});", "trf:r": "transform: rotate(${1:angle});",
				"trf:t": "transform: translate(${1:x}, ${2:y});", "trf:tx": "transform: translateX(${1:x});", "trf:ty": "transform: translateY(${1:y});", trfo: "transform-origin:|;", trfs: "transform-style:${1:preserve-3d};", trs: "transition:${1:prop} ${2:time};", trsde: "transition-delay:${1:time};", trsdu: "transition-duration:${1:time};", trsp: "transition-property:${1:prop};", trstf: "transition-timing-function:${1:tfunc};", lh: "line-height:|;", whs: "white-space:|;", "whs:n": "white-space:normal;", "whs:p": "white-space:pre;", "whs:nw": "white-space:nowrap;",
				"whs:pw": "white-space:pre-wrap;", "whs:pl": "white-space:pre-line;", whsc: "white-space-collapse:|;", "whsc:n": "white-space-collapse:normal;", "whsc:k": "white-space-collapse:keep-all;", "whsc:l": "white-space-collapse:loose;", "whsc:bs": "white-space-collapse:break-strict;", "whsc:ba": "white-space-collapse:break-all;", wob: "word-break:|;", "wob:n": "word-break:normal;", "wob:k": "word-break:keep-all;", "wob:l": "word-break:loose;", "wob:bs": "word-break:break-strict;", "wob:ba": "word-break:break-all;", wos: "word-spacing:|;",
				wow: "word-wrap:|;", "wow:nm": "word-wrap:normal;", "wow:n": "word-wrap:none;", "wow:u": "word-wrap:unrestricted;", "wow:s": "word-wrap:suppress;", lts: "letter-spacing:|;", f: "font:|;", "f+": "font:${1:1em} ${2:Arial,sans-serif};", fw: "font-weight:|;", "fw:n": "font-weight:normal;", "fw:b": "font-weight:bold;", "fw:br": "font-weight:bolder;", "fw:lr": "font-weight:lighter;", fs: "font-style:${italic};", "fs:n": "font-style:normal;", "fs:i": "font-style:italic;", "fs:o": "font-style:oblique;", fv: "font-variant:|;", "fv:n": "font-variant:normal;",
				"fv:sc": "font-variant:small-caps;", fz: "font-size:|;", fza: "font-size-adjust:|;", "fza:n": "font-size-adjust:none;", ff: "font-family:|;", "ff:s": "font-family:serif;", "ff:ss": "font-family:sans-serif;", "ff:c": "font-family:cursive;", "ff:f": "font-family:fantasy;", "ff:m": "font-family:monospace;", fef: "font-effect:|;", "fef:n": "font-effect:none;", "fef:eg": "font-effect:engrave;", "fef:eb": "font-effect:emboss;", "fef:o": "font-effect:outline;", fem: "font-emphasize:|;", femp: "font-emphasize-position:|;", "femp:b": "font-emphasize-position:before;",
				"femp:a": "font-emphasize-position:after;", fems: "font-emphasize-style:|;", "fems:n": "font-emphasize-style:none;", "fems:ac": "font-emphasize-style:accent;", "fems:dt": "font-emphasize-style:dot;", "fems:c": "font-emphasize-style:circle;", "fems:ds": "font-emphasize-style:disc;", fsm: "font-smooth:|;", "fsm:a": "font-smooth:auto;", "fsm:n": "font-smooth:never;", "fsm:aw": "font-smooth:always;", fst: "font-stretch:|;", "fst:n": "font-stretch:normal;", "fst:uc": "font-stretch:ultra-condensed;", "fst:ec": "font-stretch:extra-condensed;",
				"fst:c": "font-stretch:condensed;", "fst:sc": "font-stretch:semi-condensed;", "fst:se": "font-stretch:semi-expanded;", "fst:e": "font-stretch:expanded;", "fst:ee": "font-stretch:extra-expanded;", "fst:ue": "font-stretch:ultra-expanded;", op: "opacity:|;", "op:ie": "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);", "op:ms": "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';", rsz: "resize:|;", "rsz:n": "resize:none;", "rsz:b": "resize:both;", "rsz:h": "resize:horizontal;", "rsz:v": "resize:vertical;",
				cur: "cursor:${pointer};", "cur:a": "cursor:auto;", "cur:d": "cursor:default;", "cur:c": "cursor:crosshair;", "cur:ha": "cursor:hand;", "cur:he": "cursor:help;", "cur:m": "cursor:move;", "cur:p": "cursor:pointer;", "cur:t": "cursor:text;", pgbb: "page-break-before:|;", "pgbb:au": "page-break-before:auto;", "pgbb:al": "page-break-before:always;", "pgbb:l": "page-break-before:left;", "pgbb:r": "page-break-before:right;", pgbi: "page-break-inside:|;", "pgbi:au": "page-break-inside:auto;", "pgbi:av": "page-break-inside:avoid;", pgba: "page-break-after:|;",
				"pgba:au": "page-break-after:auto;", "pgba:al": "page-break-after:always;", "pgba:l": "page-break-after:left;", "pgba:r": "page-break-after:right;", orp: "orphans:|;", us: "user-select:${none};", wid: "widows:|;", wfsm: "-webkit-font-smoothing:${antialiased};", "wfsm:a": "-webkit-font-smoothing:antialiased;", "wfsm:s": "-webkit-font-smoothing:subpixel-antialiased;", "wfsm:sa": "-webkit-font-smoothing:subpixel-antialiased;", "wfsm:n": "-webkit-font-smoothing:none;"
			}
		}, html: {
			filters: "html", profile: "html", snippets: {

				"summary": "[[summary? \n\r\t&text=`[*content*]` \n\r\t&len=`200`\n\r]]",
				"!summary": "[!summary? \n\r\t&text=`[*content*]` \n\r\t&len=`200`!]",
				"phpthumb": "[[phpthumb? \n\r\t&input=`[+image+]` \n\r\t&options=`w=150,h=76,far=C,bg=FFFFFF`\n\r]]",
				"!phpthumb": "[!phpthumb? \n\r\t&input=`[+image+]` \n\r\t&options=`w=150,h=76,far=C,bg=FFFFFF`!]",
				"thumb": "[[phpthumb? \n\r\t&input=`[+image+]` \n\r\t&options=`w=150,h=76,far=C,bg=FFFFFF`\n\r]]",
				"!thumb": "[[phpthumb? \n\r\t&input=`[+image+]` \n\r\t&options=`w=150,h=76,far=C,bg=FFFFFF`\n\r]]",
				"EvoGallery": "[[EvoGallery? \n\r&docId=`[*id*]` \n\r\t&show=`9` \n\r\t&itemTpl=`` \n\r\t&paginate=`1` \n\r\t&paginateNextText=`Вперед` \n\r\t&paginatePreviousText=`Назад`\n\r]]",
				"!EvoGallery": "[!EvoGallery? \n\r\t&docId=`[*id*]` \n\r\t&show=`9` \n\r\t&itemTpl=`` \n\r\t&paginate=`1` \n\r\t&paginateNextText=`Вперед` \n\r\t&paginatePreviousText=`Назад`!]",
				"Ditto": "[[Ditto? \n\r\t&parents=`` \n\r\t&tpl=`` \n\r\t&orderBy=`pub_date DESC` \n\r\t&paginate=`0` \n\r\t&display=`all` \n\r&dateFormat=`%d.%m.%Y` \n\r\t&dateSource=`pub_date`\n\r]]",
				"!Ditto": "[!Ditto? \n\r\t&parents=`` \n\r\t&tpl=`` \n\r\t&orderBy=`pub_date DESC` \n\r\t&paginate=`0` \n\r\t&display=`all` \n\r\t&dateFormat=`%d.%m.%Y` \n\r\t&dateSource=`pub_date`!]",
				"Breadcrumbs": "[[Breadcrumbs? \n\r\t&templateSet=`defaultString`\n\r\t&showHomeCrumb=`1` &showCrumbsAsLinks=`1`\n\r]]",
				"!Breadcrumbs": "[!Breadcrumbs? \n\r\t&templateSet=`defaultString` \n\r\t&showHomeCrumb=`1` \n\r\t&showCrumbsAsLinks=`1`!]",
				"Wayfinder": "[[Wayfinder? \n\r\t&startId=``\n\r\t&level=`` \n\r\t&rowTpl=`` \n\r\t&outerTpl =`` \n\r\t&outerClass=`` \n\r\t&hereClass=`active`\n\r]]",
				"!Wayfinder": "[!Wayfinder? \n\r\t&startId=`` &level=`` &rowTpl=`` \n\r\t&outerTpl =`` \n\r\t&outerClass=`` \n\r\t&hereClass=`active`!]",
				"eForm": "[!eForm? \n\r\t&formid=`feedbackForm` \n\r\t&subject=`Сообщение с сайта [(site_name)]` \n\r\t&tpl=`eFeedbackForm` \n\r\t&report=`eFeedbackReport` \n\r\t&gotoid=`[*id*]`\n\r\t&vericode=`1`!] ",
				"!eForm": "[!eForm? \n\r\t&formid=`feedbackForm` \n\r\t&subject=`Сообщение с сайта [(site_name)]` \n\r\t&tpl=`eFeedbackForm` \n\r\t&report=`eFeedbackReport` \n\r\t&gotoid=`[*id*]` \n\r\t&vericode=`1`!] ",
				"if": "[[if? \n\r\t&is=`[*a*]+1:=:2` \n\r\t&then=`@TPL:true` \n\r\t&else=`@TPL:false` \n\r\t&math=`on` \n\r\t&separator=`:`\n\r]]",
				"!if": "[!if? \n\r\t&is=`[*a*]+1:=:2` \n\r\t&then=`@TPL:true` \n\r\t&else=`@TPL:false` \n\r\t&math=`on` \n\r\t&separator=`:`!]",
				"UltimateParent": "[[UltimateParent? &topLevel=`2`\n\r]]",
				"!UltimateParent": "[!UltimateParent? \n\r\t&id=`45` \n\r\t&top=`6`!]",
				"Shopkeeper": "[!Shopkeeper? \n\r\t&priceTV=`price` \n\r\t&cartType=`full` \n\r\t&cartTpl=`small_CartTpl` \n\r\t&cartRowTpl=`inner_CartTpl` \n\r\t&orderFormPage=`` \n\r\t&noJQuery=`1` \n\r\t&currency=`руб`!]",
				"!Shopkeeper": "[!Shopkeeper? \n\r\t&orderFormPage=`10`\n\r!]",
				"multiTV": "[[multiTV? \n\r\t&tvName=`` \n\r\t&docid=`[*id*]` \n\r\t&tplConfig=`` \n\r\t&outerTpl=`@CODE:<ul>[+wrapper+]</ul>` \n\r\t&rowTpl=`@CODE:<li>[+event+], [+location+], [+price+]</li>` \n\r\t&display=`all` \n\r\t&offset=`0` \n\r\t&orderBy=``\n\r]]",
				"!multiTV": "[!multiTV? \n\r\t&tvName=``\n\r\t&docid=`[*id*]` \n\r\t&tplConfig=`` \n\r\t&outerTpl=`@CODE:<ul>[+wrapper+]</ul>` \n\r\t&rowTpl=`@CODE:<li>[+event+], [+location+], [+price+]</li>`\n\r\t&display=`all` \n\r\t&offset=`0` \n\r\t&orderBy=``\n\r!]",
				"DocLister": '[[DocLister?  \n\r\t&idType=`parents`\n\r\t&parents=`2` \n\r\t&display=`4`\n\r\t&depth=`2`\n\r\t&ownerTPL=`@CODE: [+dl.wrap+]`\n\r\t&tpl=`@CODE: [+pagetitle+]`\n\r\t&dateFormat=`%d.%m.%Y в %H:%M` \n\r\t&dateSource=`pub_date`\n\r\t&tvList=`img`\n\r\t&addWhereList=``\n\r\t&sortBy=`menuindex`\n\r\t&paginate=`pages`\n\r\t&TplNextP=`` \n\r\t&TplPrevP=`` \n\r\t&TplPage=`@CODE: <li><a href="[+link+]">[+num+]</a></li>` \n\r\t&TplCurrentPage=`@CODE: <li class="active"><a href="[+link+]">[+num+]</a></li>`\n\r\t&TplWrapPaginate=`@CODE: <div class="pagination"><ul>[+wrap+]</ul></div>`\n\r]]',
				"!DocLister": '[!DocLister? \n\r\t&idType=`parents`\n\r &parents=`2` \n\r&display=`4` \n\r&depth=`2`\n\r\t&ownerTPL=`@CODE: [+dl.wrap+]`\n\r&tpl=`@CODE: [+pagetitle+]` \n\r&dateFormat=`%d.%m.%Y в %H:%M` \n\r\t&dateSource=`pub_date` \n\r\t&tvList=`img`\n\r\t&addWhereList=``\n\r\t&sortBy=`menuindex`\n\r\t&paginate=`pages`\n\r\t&TplNextP=`` \n\r\t&TplPrevP=`` \n\r\t&TplPage=`@CODE: <li><a href="[+link+]">[+num+]</a></li>` \n\r\t&TplCurrentPage=`@CODE: <li class="active"><a href="[+link+]">[+num+]</a></li>`\n\r\t&TplWrapPaginate=`@CODE: <div class="pagination"><ul>[+wrap+]</ul></div>`\n\r!]',
				"!DLmenu": '[!DLMenu? \n\r\t&parents=`2` \n\r\t&maxDepth=`2` \n\r\t&outerTpl=`@CODE: <ul [+classes+]>[+wrap+]</ul>` \n\r\t&rowTpl=`@CODE:<li[+classes+]><a href="[+url+]">[+title+]</a></li>` \n\r\t&outerClass=`nav navbar-nav` \n\r\t&parentClass=`dropdown` \n\r&hereClass=`active` \n\r\t&activeClass=`active` \n\r\t&innerClass=`dropdown-menu`\n\r!]',
				"DLmenu": '[[DLMenu? \n\r\t&parents=`2` \n\r\t&maxDepth=`2` \n\r\t&outerTpl=`@CODE: <ul [+classes+]>[+wrap+]</ul>` \n\r\t&rowTpl=`@CODE:<li[+classes+]><a href="[+url+]">[+title+]</a></li>` \n\r\t&outerClass=`nav navbar-nav` \n\r\t&parentClass=`dropdown` \n\r\t&hereClass=`active` \n\r\t&activeClass=`active`\n\r\t&innerClass=`dropdown-menu`\n\r]]',
				"@multiTV": "@INCLUDE/assets/tvs/multitv/multitv.customtv.php",
				"@choiceTV": "@INCLUDE /assets/tvs/choicetv/choicetv.php",


				"!!!": "<!doctype html>", "!!!4t": '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">', "!!!4s": '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">', "!!!xt": '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
				"!!!xs": '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">', "!!!xxs": '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">', c: "\x3c!-- |${child} --\x3e", "cc:ie6": "\x3c!--[if lte IE 6]>\n\t${child}|\n<![endif]--\x3e", "cc:ie": "\x3c!--[if IE]>\n\t${child}|\n<![endif]--\x3e", "cc:noie": "\x3c!--[if !IE]>\x3c!--\x3e\n\t${child}|\n\x3c!--<![endif]--\x3e"
			}, abbreviations: {
				"!": "html:5", a: '<a href="">', "a:link": '<a href="http://|">',
				"a:mail": '<a href="mailto:|">', abbr: '<abbr title="">', acronym: '<acronym title="">', base: '<base href="" />', bdo: '<bdo dir="">', "bdo:r": '<bdo dir="rtl">', "bdo:l": '<bdo dir="ltr">', link: '<link rel="stylesheet" href="" />', "link:css": '<link rel="stylesheet" href="${1:style}.css" media="all" />', "link:print": '<link rel="stylesheet" href="${1:print}.css" media="print" />', "link:favicon": '<link rel="shortcut icon" type="image/x-icon" href="${1:favicon.ico}" />', "link:touch": '<link rel="apple-touch-icon" href="${1:favicon.png}" />',
				"link:rss": '<link rel="alternate" type="application/rss+xml" title="RSS" href="${1:rss.xml}" />', "link:atom": '<link rel="alternate" type="application/atom+xml" title="Atom" href="${1:atom.xml}" />', "meta:utf": '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />', "meta:win": '<meta http-equiv="Content-Type" content="text/html;charset=windows-1251" />', "meta:vp": '<meta name="viewport" content="width=${1:device-width}, user-scalable=${2:no}, initial-scale=${3:1.0}, maximum-scale=${4:1.0}, minimum-scale=${5:1.0}" />',
				"meta:compat": '<meta http-equiv="X-UA-Compatible" content="${1:IE=7}" />', style: "<style>", script: "<script>", "script:src": '<script src="">', img: '<img src="" alt="" />', iframe: '<iframe src="" frameborder="0">', embed: '<embed src="" type="" />', object: '<object data="" type="">', param: '<param name="" value="" />', map: '<map name="">', area: '<area shape="" coords="" href="" alt="" />', "area:d": '<area shape="default" href="" alt="" />', "area:c": '<area shape="circle" coords="" href="" alt="" />', "area:r": '<area shape="rect" coords="" href="" alt="" />',
				"area:p": '<area shape="poly" coords="" href="" alt="" />', form: '<form action="">', "form:get": '<form action="" method="get">', "form:post": '<form action="" method="post">', label: '<label for="">', input: '<input type="${1:text}" />', inp: '<input type="${1:text}" name="" id="" />', "input:hidden": "input[type=hidden name]", "input:h": "input:hidden", "input:text": "inp", "input:t": "inp", "input:search": "inp[type=search]", "input:email": "inp[type=email]", "input:url": "inp[type=url]", "input:password": "inp[type=password]",
				"input:p": "input:password", "input:datetime": "inp[type=datetime]", "input:date": "inp[type=date]", "input:datetime-local": "inp[type=datetime-local]", "input:month": "inp[type=month]", "input:week": "inp[type=week]", "input:time": "inp[type=time]", "input:number": "inp[type=number]", "input:color": "inp[type=color]", "input:checkbox": "inp[type=checkbox]", "input:c": "input:checkbox", "input:radio": "inp[type=radio]", "input:r": "input:radio", "input:range": "inp[type=range]", "input:file": "inp[type=file]", "input:f": "input:file",
				"input:submit": '<input type="submit" value="" />', "input:s": "input:submit", "input:image": '<input type="image" src="" alt="" />', "input:i": "input:image", "input:button": '<input type="button" value="" />', "input:b": "input:button", "input:reset": "input:button[type=reset]", select: '<select name="" id="">', option: '<option value="">', textarea: '<textarea name="" id="" cols="${1:30}" rows="${2:10}">', "menu:context": "menu[type=context]>", "menu:c": "menu:context", "menu:toolbar": "menu[type=toolbar]>", "menu:t": "menu:toolbar",
				video: '<video src="">', audio: '<audio src="">', "html:xml": '<html xmlns="http://www.w3.org/1999/xhtml">', bq: "blockquote", acr: "acronym", fig: "figure", figc: "figcaption", ifr: "iframe", emb: "embed", obj: "object", src: "source", cap: "caption", colg: "colgroup", fst: "fieldset", btn: "button", optg: "optgroup", opt: "option", tarea: "textarea", leg: "legend", sect: "section", art: "article", hdr: "header", ftr: "footer", adr: "address", dlg: "dialog", str: "strong", prog: "progress", fset: "fieldset", datag: "datagrid", datal: "datalist", kg: "keygen",
				out: "output", det: "details", cmd: "command", doc: "html>(head>meta[charset=UTF-8]+title{${1:Document}})+body", doc4: 'html>(head>meta[http-equiv="Content-Type" content="text/html;charset=${charset}"]+title{${1:Document}})', "html:4t": "!!!4t+doc4[lang=${lang}]", "html:4s": "!!!4s+doc4[lang=${lang}]", "html:xt": "!!!xt+doc4[xmlns=http://www.w3.org/1999/xhtml xml:lang=${lang}]", "html:xs": "!!!xs+doc4[xmlns=http://www.w3.org/1999/xhtml xml:lang=${lang}]", "html:xxs": "!!!xxs+doc4[xmlns=http://www.w3.org/1999/xhtml xml:lang=${lang}]",
				"html:5": "!!!+doc[lang=${lang}]", "ol+": "ol>li", "ul+": "ul>li", "dl+": "dl>dt+dd", "map+": "map>area", "table+": "table>tr>td", "colgroup+": "colgroup>col", "colg+": "colgroup>col", "tr+": "tr>td", "select+": "select>option", "optgroup+": "optgroup>option", "optg+": "optgroup>option"
			}
		}, xml: { "extends": "html", profile: "xml", filters: "html" }, xsl: {
			"extends": "html", profile: "xml", filters: "html, xsl", abbreviations: {
				tm: '<xsl:template match="" mode="">', tmatch: "tm", tn: '<xsl:template name="">', tname: "tn", call: '<xsl:call-template name=""/>',
				ap: '<xsl:apply-templates select="" mode=""/>', api: "<xsl:apply-imports/>", imp: '<xsl:import href=""/>', inc: '<xsl:include href=""/>', ch: "<xsl:choose>", "xsl:when": '<xsl:when test="">', wh: "xsl:when", ot: "<xsl:otherwise>", "if": '<xsl:if test="">', par: '<xsl:param name="">', pare: '<xsl:param name="" select=""/>', "var": '<xsl:variable name="">', vare: '<xsl:variable name="" select=""/>', wp: '<xsl:with-param name="" select=""/>', key: '<xsl:key name="" match="" use=""/>', elem: '<xsl:element name="">', attr: '<xsl:attribute name="">',
				attrs: '<xsl:attribute-set name="">', cp: '<xsl:copy select=""/>', co: '<xsl:copy-of select=""/>', val: '<xsl:value-of select=""/>', each: '<xsl:for-each select="">', "for": "each", tex: "<xsl:text></xsl:text>", com: "<xsl:comment>", msg: '<xsl:message terminate="no">', fall: "<xsl:fallback>", num: '<xsl:number value=""/>', nam: '<namespace-alias stylesheet-prefix="" result-prefix=""/>', pres: '<xsl:preserve-space elements=""/>', strip: '<xsl:strip-space elements=""/>', proc: '<xsl:processing-instruction name="">', sort: '<xsl:sort select="" order=""/>',
				"choose+": "xsl:choose>xsl:when+xsl:otherwise", xsl: "!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{\n|}"
			}, snippets: { "!!!": '<?xml version="1.0" encoding="UTF-8"?>' }
		}, haml: { filters: "haml", "extends": "html", profile: "xml" }, scss: { "extends": "css" }, sass: { "extends": "css" }, less: { "extends": "css" }, stylus: { "extends": "css" }
	}, "system")
});
emmet.define("cm-editor-proxy", function (f, d) {
	function j() { if ("3.1" <= CodeMirror.version) return CodeMirror.Pass; throw CodeMirror.Pass; } var g = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent) || /Mac/.test(navigator.platform), a = {
		"Cmd-E": "expand_abbreviation", Tab: "expand_abbreviation_with_tab", "Cmd-D": "match_pair_outward", "Shift-Cmd-D": "match_pair_inward", "Cmd-T": "matching_pair", "Shift-Cmd-A": "wrap_with_abbreviation", "Ctrl-Alt-Right": "next_edit_point", "Ctrl-Alt-Left": "prev_edit_point",
		"Cmd-L": "select_line", "Cmd-Shift-M": "merge_lines", "Cmd-/": "toggle_comment", "Cmd-J": "split_join_tag", "Cmd-K": "remove_tag", "Shift-Cmd-Y": "evaluate_math_expression", "Ctrl-Up": "increment_number_by_1", "Ctrl-Down": "decrement_number_by_1", "Alt-Up": "increment_number_by_01", "Alt-Down": "decrement_number_by_01", "Ctrl-Alt-Up": "increment_number_by_10", "Ctrl-Alt-Down": "decrement_number_by_10", "Shift-Cmd-.": "select_next_item", "Shift-Cmd-,": "select_previous_item", "Cmd-B": "reflect_css_value", Enter: "insert_formatted_line_break_only"
	},
		c = { "MODx-text/html": "html", "MODx-application/xml": "xml", "MODx-text/xsl": "xsl", "MODx-text/css": "css", "MODx-text/x-less": "less" }; CodeMirror.defineOption ? CodeMirror.defineOption("profile", "html") : CodeMirror.defaults.profile = "html"; var b = {
			context: null, getSelectionRange: function () { var a = this.getCaretPos(); return { start: a, end: a + this.getSelection().length } }, createSelection: function (a, b) { a == b ? this.context.setCursor(this.context.posFromIndex(a)) : this.context.setSelection(this.context.posFromIndex(a), this.context.posFromIndex(b)) },
			getCurrentLineRange: function () { var a = this.context.getCursor(!0); return { start: this.context.indexFromPos({ line: a.line, ch: 0 }), end: this.context.indexFromPos({ line: a.line, ch: this.context.getLine(a.line).length }) } }, getCaretPos: function () { return this.context.indexFromPos(this.context.getCursor(!0)) }, setCaretPos: function (a) { this.createSelection(a, a) }, getCurrentLine: function () { return this.context.getLine(this.context.getCursor(!0).line) || "" }, replaceContent: function (a, b, c, g) {
				d.isUndefined(c) && (c = d.isUndefined(b) ?
					content.length : b); d.isUndefined(b) && (b = 0); var j = f("utils"); g || (a = j.padString(a, j.getLinePaddingFromPosition(this.getContent(), b))); g = f("tabStops").extract(a, { escape: function (a) { return a } }); a = g.text; var n = g.tabstops[0]; n ? (n.start += b, n.end += b) : n = { start: a.length + b, end: a.length + b }; var q = this; (this.context.operation || this.context.compoundChange).call(this.context, function () { q.context.replaceRange(a, q.context.posFromIndex(b), q.context.posFromIndex(c)); q.createSelection(n.start, n.end) })
			}, getContent: function () { return this.context.getValue() },
			getSyntax: function () { var a = this.context.getOption("mode"); a in c && (a = c[a]); return f("actionUtils").detectSyntax(this, a) }, getProfileName: function () { return this.context.getOption("profile") ? this.context.getOption("profile") : f("actionUtils").detectProfile(this) }, prompt: function (a) { return prompt(a) }, getSelection: function () { return this.context.getSelection() || "" }, getFilePath: function () { return location.href }, setupContext: function (a) {
				this.context = a; var b = "\t"; a.getOption("indentWithTabs") || (b = f("utils").repeatString(" ",
					a.getOption("indentUnit"))); f("resources").setVariable("indentation", b)
			}, addAction: function (a, c, d) {
				var m = "emmet." + a; CodeMirror.commands[m] || (CodeMirror.commands[m] = function (c) {
					b.setupContext(c); var d; if (d = "expand_abbreviation_with_tab" == a) if (!(d = b.getSelection())) d = b.getSyntax(), d = !f("resources").hasSyntax(d); if (d) c = j(); else {
						d = !0; try { var e = f("actions").run(a, b); ("next_edit_point" == a || "prev_edit_point" == a) && c.replaceSelection(""); !e && "insert_formatted_line_break_only" == a && (d = !1) } catch (g) { } c = d ? void 0 :
							j()
					} return c
				}); c && (d || (CodeMirror.keyMap && CodeMirror.keyMap["default"] ? d = CodeMirror.keyMap["default"] : (CodeMirror.defaults.extraKeys || (CodeMirror.defaults.extraKeys = {}), d = CodeMirror.defaults.extraKeys)), g || (c = c.replace("Cmd", "Ctrl")), d && (d[c] = m))
			}
		}; "undefined" != typeof emmetKeymap && (a = emmetKeymap); d.each(a, function (c, d) { a; b.addAction(c, d) }); return b
});
