!function (e) {
	var t = {};
	function n(r) {
		if (t[r])
			return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n),
			o.l = !0,
			o.exports
	}
	n.m = e,
		n.c = t,
		n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			})
		},
		n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}),
				Object.defineProperty(e, "__esModule", {
					value: !0
				})
		},
		n.t = function (e, t) {
			if (1 & t && (e = n(e)), 8 & t)
				return e;
			if (4 & t && "object" == typeof e && e && e.__esModule)
				return e;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
				for (var o in e)
					n.d(r, o, function (t) {
						return e[t]
					}
						.bind(null, o));
			return r
		},
		n.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			}
				: function () {
					return e
				};
			return n.d(t, "a", t),
				t
		},
		n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		n.p = "",
		n(n.s = 45)
}
	([, , , , , function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			n(25),
			n(18);
		var r = n(26),
			o = n(13),
			a = {},
			i = !1;
		function u(e, t, n) {
			var o = a[e];
			o || (o = a[e] = new r.BrowserRenderer(e)),
				o.attachRootComponentToLogicalElement(n, t)
		}
		t.attachRootComponentToLogicalElement = u,
			t.attachRootComponentToElement = function (e, t, n) {
				var r = document.querySelector(e);
				if (!r)
					throw new Error("Could not find any element matching selector '" + e + "'.");
				u(n || 0, o.toLogicalElement(r, !0), t)
			},
			t.renderBatch = function (e, t) {
				var n = a[e];
				if (!n)
					throw new Error("There is no browser renderer with ID " + e + ".");
				for (var r = t.arrayRangeReader, o = t.updatedComponents(), u = r.values(o), l = r.count(o), s = t.referenceFrames(), c = r.values(s), d = t.diffReader, f = 0; f < l; f++) {
					var p = t.updatedComponentsEntry(u, f),
						m = d.componentId(p),
						h = d.edits(p);
					n.updateComponent(t, m, h, c)
				}
				var v = t.disposedComponentIds(),
					y = r.values(v),
					g = r.count(v);
				for (f = 0; f < g; f++)
					m = t.disposedComponentIdsEntry(y, f), n.disposeComponent(m);
				var b = t.disposedEventHandlerIds(),
					w = r.values(b),
					E = r.count(b);
				for (f = 0; f < E; f++) {
					var _ = t.disposedEventHandlerIdsEntry(w, f);
					n.disposeEventHandler(_)
				}
				i && (i = !1, window.scrollTo && window.scrollTo(0, 0))
			},
			t.resetScrollAfterNextBatch = function () {
				i = !0
			}
	}, , , , , , , function (e, t, n) {
		"use strict";
		var r = this && this.__awaiter || function (e, t, n, r) {
			return new (n || (n = Promise))(function (o, a) {
				function i(e) {
					try {
						l(r.next(e))
					} catch (e) {
						a(e)
					}
				}
				function u(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						a(e)
					}
				}
				function l(e) {
					e.done ? o(e.value) : new n(function (t) {
						t(e.value)
					}).then(i, u)
				}
				l((r = r.apply(e, t || [])).next())
			})
		},
			o = this && this.__generator || function (e, t) {
				var n,
					r,
					o,
					a,
					i = {
						label: 0,
						sent: function () {
							if (1 & o[0])
								throw o[1];
							return o[1]
						},
						trys: [],
						ops: []
					};
				return a = {
					next: u(0),
					throw: u(1),
					return: u(2)
				},
					"function" == typeof Symbol && (a[Symbol.iterator] = function () {
						return this
					}),
					a;
				function u(a) {
					return function (u) {
						return function (a) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; i;)
								try {
									if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done)
										return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
										case 0:
										case 1:
											o = a;
											break;
										case 4:
											return i.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											i.label++,
												r = a[1],
												a = [0];
											continue;
										case 7:
											a = i.ops.pop(),
												i.trys.pop();
											continue;
										default:
											if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
												i = 0;
												continue
											}
											if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
												i.label = a[1];
												break
											}
											if (6 === a[0] && i.label < o[1]) {
												i.label = o[1],
													o = a;
												break
											}
											if (o && i.label < o[2]) {
												i.label = o[2],
													i.ops.push(a);
												break
											}
											o[2] && i.ops.pop(),
												i.trys.pop();
											continue
									}
									a = t.call(e, i)
								} catch (e) {
									a = [6, e],
										r = 0
								}
								finally {
									n = o = 0
								}
							if (5 & a[0])
								throw a[1];
							return {
								value: a[0] ? a[1] : void 0,
								done: !0
							}
						}
							([a, u])
					}
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			n(17);
		var a,
			i = n(5),
			u = !1,
			l = !1,
			s = null;
		function c(e, t) {
			var n = p(e);
			if (!t && m(n))
				d(n, !1);
			else if (t && location.href === e) {
				var r = e + "?";
				history.replaceState(null, "", r),
					location.replace(e)
			} else
				location.href = e
		}
		function d(e, t) {
			i.resetScrollAfterNextBatch(),
				history.pushState(null, "", e),
				f(t)
		}
		function f(e) {
			return r(this, void 0, void 0, function () {
				return o(this, function (t) {
					switch (t.label) {
						case 0:
							return s ? [4, s(location.href, e)] : [3, 2];
						case 1:
							t.sent(),
								t.label = 2;
						case 2:
							return [2]
					}
				})
			})
		}
		function p(e) {
			return (a = a || document.createElement("a")).href = e,
				a.href
		}
		function m(e) {
			var t,
				n = (t = document.baseURI).substr(0, t.lastIndexOf("/") + 1);
			return e.startsWith(n)
		}
		t.internalFunctions = {
			listenForNavigationEvents: function (e) {
				if (s = e, l)
					return;
				l = !0,
					window.addEventListener("popstate", function () {
						return f(!1)
					})
			},
			enableNavigationInterception: function () {
				u = !0
			},
			navigateTo: c,
			getBaseURI: function () {
				return document.baseURI
			},
			getLocationHref: function () {
				return location.href
			}
		},
			t.attachToEventDelegator = function (e) {
				e.notifyAfterClick(function (e) {
					if (u && 0 === e.button && !function (e) {
						return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
					}
						(e) && !e.defaultPrevented) {
						var t = function e(t, n) {
							return t ? t.tagName === n ? t : e(t.parentElement, n) : null
						}
							(e.target, "A");
						if (t && t.hasAttribute("href")) {
							var n = t.getAttribute("target");
							if (n && "_self" !== n)
								return;
							var r = p(t.getAttribute("href"));
							m(r) && (e.preventDefault(), d(r, !0))
						}
					}
				})
			},
			t.navigateTo = c
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = p("_blazorLogicalChildren"),
			o = p("_blazorLogicalParent"),
			a = p("_blazorLogicalEnd");
		function i(e, t) {
			if (e.childNodes.length > 0 && !t)
				throw new Error("New logical elements must start empty, or allowExistingContents must be true");
			return e[r] = [],
				e
		}
		function u(e, t, n) {
			var a = e;
			if (e instanceof Comment && (s(a) && s(a).length > 0))
				throw new Error("Not implemented: inserting non-empty logical container");
			if (l(a))
				throw new Error("Not implemented: moving existing logical children");
			var i = s(t);
			if (n < i.length) {
				var u = i[n];
				u.parentNode.insertBefore(e, u),
					i.splice(n, 0, a)
			} else
				f(e, t), i.push(a);
			a[o] = t,
				r in a || (a[r] = [])
		}
		function l(e) {
			return e[o] || null
		}
		function s(e) {
			return e[r]
		}
		function c(e) {
			if (e instanceof Element)
				return e;
			if (e instanceof Comment)
				return e.parentNode;
			throw new Error("Not a valid logical element")
		}
		function d(e) {
			var t = s(l(e));
			return t[Array.prototype.indexOf.call(t, e) + 1] || null
		}
		function f(e, t) {
			if (t instanceof Element)
				t.appendChild(e);
			else {
				if (!(t instanceof Comment))
					throw new Error("Cannot append node because the parent is not a valid logical element. Parent: " + t);
				var n = d(t);
				n ? n.parentNode.insertBefore(e, n) : f(e, l(t))
			}
		}
		function p(e) {
			return "function" == typeof Symbol ? Symbol() : e
		}
		t.toLogicalRootCommentElement = function (e, t) {
			if (!e.parentNode)
				throw new Error("Comment not connected to the DOM " + e.textContent);
			var n = e.parentNode,
				r = i(n, !0),
				u = s(r);
			return Array.from(n.childNodes).forEach(function (e) {
				return u.push(e)
			}),
				e[o] = r,
				t && (e[a] = t, i(t, !0)),
				i(e, !0)
		},
			t.toLogicalElement = i,
			t.createAndInsertLogicalContainer = function (e, t) {
				var n = document.createComment("!");
				return u(n, e, t),
					n
			},
			t.insertLogicalChild = u,
			t.removeLogicalChild = function e(t, n) {
				var r = s(t).splice(n, 1)[0];
				if (r instanceof Comment)
					for (var o = s(r); o.length > 0;)
						e(r, 0);
				var a = r;
				a.parentNode.removeChild(a)
			},
			t.getLogicalParent = l,
			t.getLogicalSiblingEnd = function (e) {
				return e[a] || null
			},
			t.getLogicalChild = function (e, t) {
				return s(e)[t]
			},
			t.isSvgElement = function (e) {
				return "http://www.w3.org/2000/svg" === c(e).namespaceURI
			},
			t.getLogicalChildrenArray = s,
			t.permuteLogicalChildren = function (e, t) {
				var n = s(e);
				t.forEach(function (e) {
					e.moveRangeStart = n[e.fromSiblingIndex],
						e.moveRangeEnd = function e(t) {
							if (t instanceof Element)
								return t;
							var n = d(t);
							if (n)
								return n.previousSibling;
							var r = l(t);
							return r instanceof Element ? r.lastChild : e(r)
						}
							(e.moveRangeStart)
				}),
					t.forEach(function (t) {
						var r = t.moveToBeforeMarker = document.createComment("marker"),
							o = n[t.toSiblingIndex + 1];
						o ? o.parentNode.insertBefore(r, o) : f(r, e)
					}),
					t.forEach(function (e) {
						for (var t = e.moveToBeforeMarker, n = t.parentNode, r = e.moveRangeStart, o = e.moveRangeEnd, a = r; a;) {
							var i = a.nextSibling;
							if (n.insertBefore(a, t), a === o)
								break;
							a = i
						}
						n.removeChild(t)
					}),
					t.forEach(function (e) {
						n[e.toSiblingIndex] = e.moveRangeStart
					})
			},
			t.getClosestDomElement = c
	}, , , , function (e, t, n) {
		"use strict";
		var r;
		!function (e) {
			window.DotNet = e;
			var t = [],
				n = {},
				r = {},
				o = 1,
				a = null;
			function i(e) {
				t.push(e)
			}
			function u(e, t, n, r) {
				var o = s();
				if (o.invokeDotNetFromJS) {
					var a = JSON.stringify(r, h),
						i = o.invokeDotNetFromJS(e, t, n, a);
					return i ? d(i) : null
				}
				throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.")
			}
			function l(e, t, r, a) {
				if (e && r)
					throw new Error("For instance method calls, assemblyName should be null. Received '" + e + "'.");
				var i = o++,
					u = new Promise(function (e, t) {
						n[i] = {
							resolve: e,
							reject: t
						}
					});
				try {
					var l = JSON.stringify(a, h);
					s().beginInvokeDotNetFromJS(i, e, t, r, l)
				} catch (e) {
					c(i, !1, e)
				}
				return u
			}
			function s() {
				if (null !== a)
					return a;
				throw new Error("No .NET call dispatcher has been set.")
			}
			function c(e, t, r) {
				if (!n.hasOwnProperty(e))
					throw new Error("There is no pending async call with ID " + e + ".");
				var o = n[e];
				delete n[e],
					t ? o.resolve(r) : o.reject(r)
			}
			function d(e) {
				return e ? JSON.parse(e, function (e, n) {
					return t.reduce(function (t, n) {
						return n(e, t)
					}, n)
				}) : null
			}
			function f(e) {
				return e instanceof Error ? e.message + "\n" + e.stack : e ? e.toString() : "null"
			}
			function p(e) {
				if (r.hasOwnProperty(e))
					return r[e];
				var t,
					n = window,
					o = "window";
				if (e.split(".").forEach(function (e) {
					if (!(e in n))
						throw new Error("Could not find '" + e + "' in '" + o + "'.");
					t = n,
						n = n[e],
						o += "." + e
				}), n instanceof Function) return n = n.bind(t), r[e] = n, n;
				throw new Error("The value '" + o + "' is not a function.")
			}
			e.attachDispatcher = function (e) {
				a = e
			},
				e.attachReviver = i,
				e.invokeMethod = function (e, t) {
					for (var n = [], r = 2; r < arguments.length; r++)
						n[r - 2] = arguments[r];
					return u(e, t, null, n)
				},
				e.invokeMethodAsync = function (e, t) {
					for (var n = [], r = 2; r < arguments.length; r++)
						n[r - 2] = arguments[r];
					return l(e, t, null, n)
				},
				e.jsCallDispatcher = {
					findJSFunction: p,
					invokeJSFromDotNet: function (e, t) {
						var n = p(e).apply(null, d(t));
						return null == n ? null : JSON.stringify(n, h)
					},
					beginInvokeJSFromDotNet: function (e, t, n) {
						var r = new Promise(function (e) {
							e(p(t).apply(null, d(n)))
						});
						e && r.then(function (t) {
							return s().endInvokeJSFromDotNet(e, !0, JSON.stringify([e, !0, t], h))
						}, function (t) {
							return s().endInvokeJSFromDotNet(e, !1, JSON.stringify([e, !1, f(t)]))
						})
					},
					endInvokeDotNetFromJS: function (e, t, n) {
						var r = t ? n : new Error(n);
						c(parseInt(e), t, r)
					}
				};
			var m = function () {
				function e(e) {
					this._id = e
				}
				return e.prototype.invokeMethod = function (e) {
					for (var t = [], n = 1; n < arguments.length; n++)
						t[n - 1] = arguments[n];
					return u(null, e, this._id, t)
				},
					e.prototype.invokeMethodAsync = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++)
							t[n - 1] = arguments[n];
						return l(null, e, this._id, t)
					},
					e.prototype.dispose = function () {
						l(null, "__Dispose", this._id, null).catch(function (e) {
							return console.error(e)
						})
					},
					e.prototype.serializeAsArg = function () {
						return {
							__dotNetObject: this._id
						}
					},
					e
			}
				();
			function h(e, t) {
				return t instanceof m ? t.serializeAsArg() : t
			}
			i(function (e, t) {
				return t && "object" == typeof t && t.hasOwnProperty("__dotNetObject") ? new m(t.__dotNetObject) : t
			})
		}
			(r || (r = {}))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.setPlatform = function (e) {
				return t.platform = e,
					t.platform
			}
	}, function (e, t, n) {
		"use strict";
		var r;
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.dispatchEvent = function (e, t) {
				if (!r)
					throw new Error("eventDispatcher not initialized. Call 'setEventDispatcher' to configure it.");
				return r(e, t)
			},
			t.setEventDispatcher = function (e) {
				r = e
			}
	}, , , , , function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(12),
			o = n(5);
		window.Blazor = {
			navigateTo: r.navigateTo,
			_internal: {
				attachRootComponentToElement: o.attachRootComponentToElement,
				navigationManager: r.internalFunctions
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(27),
			o = n(28),
			a = n(13),
			i = n(31),
			u = n(19),
			l = n(12),
			s = document.createElement("template"),
			c = document.createElementNS("http://www.w3.org/2000/svg", "g"),
			d = {
				submit: !0
			},
			f = {},
			p = function () {
				function e(e) {
					var t = this;
					this.childComponentLocations = {},
						this.browserRendererId = e,
						this.eventDelegator = new o.EventDelegator(function (e, n, r, o) {
							!function (e, t, n, r, o) {
								d[e.type] && e.preventDefault();
								var a = {
									browserRendererId: t,
									eventHandlerId: n,
									eventArgsType: r.type,
									eventFieldInfo: o
								};
								u.dispatchEvent(a, r.data)
							}
								(e, t.browserRendererId, n, r, o)
						}),
						l.attachToEventDelegator(this.eventDelegator)
				}
				return e.prototype.attachRootComponentToLogicalElement = function (e, t) {
					this.attachComponentToElement(e, t),
						f[e] = t
				},
					e.prototype.updateComponent = function (e, t, n, r) {
						var o = this.childComponentLocations[t];
						if (!o)
							throw new Error("No element is currently associated with component " + t);
						var i = f[t];
						if (i) {
							var u = a.getLogicalSiblingEnd(i);
							delete f[t],
								u ? function (e, t) {
									var n = a.getLogicalParent(e);
									if (!n)
										throw new Error("Can't clear between nodes. The start node does not have a logical parent.");
									for (var r = a.getLogicalChildrenArray(n), o = r.indexOf(e) + 1, i = r.indexOf(t), u = o; u <= i; u++)
										a.removeLogicalChild(n, o);
									e.textContent = "!"
								}
									(i, u) : function (e) {
										var t;
										for (; t = e.firstChild;)
											e.removeChild(t)
									}
										(i)
						}
						var l = a.getClosestDomElement(o).ownerDocument,
							s = l && l.activeElement;
						this.applyEdits(e, t, o, 0, n, r),
							s instanceof HTMLElement && l && l.activeElement !== s && s.focus()
					},
					e.prototype.disposeComponent = function (e) {
						delete this.childComponentLocations[e]
					},
					e.prototype.disposeEventHandler = function (e) {
						this.eventDelegator.removeListener(e)
					},
					e.prototype.attachComponentToElement = function (e, t) {
						this.childComponentLocations[e] = t
					},
					e.prototype.applyEdits = function (e, t, n, o, i, u) {
						for (var l, s = 0, c = o, d = e.arrayBuilderSegmentReader, f = e.editReader, p = e.frameReader, m = d.values(i), h = d.offset(i), v = h + d.count(i), y = h; y < v; y++) {
							var g = e.diffReader.editsEntry(m, y),
								b = f.editType(g);
							switch (b) {
								case r.EditType.prependFrame:
									var w = f.newTreeIndex(g),
										E = e.referenceFramesEntry(u, w),
										_ = f.siblingIndex(g);
									this.insertFrame(e, t, n, c + _, u, E, w);
									break;
								case r.EditType.removeFrame:
									_ = f.siblingIndex(g);
									a.removeLogicalChild(n, c + _);
									break;
								case r.EditType.setAttribute:
									w = f.newTreeIndex(g),
										E = e.referenceFramesEntry(u, w),
										_ = f.siblingIndex(g);
									if (!((I = a.getLogicalChild(n, c + _)) instanceof Element))
										throw new Error("Cannot set attribute on non-element child");
									this.applyAttribute(e, t, I, E);
									break;
								case r.EditType.removeAttribute:
									var I;
									_ = f.siblingIndex(g);
									if (!((I = a.getLogicalChild(n, c + _)) instanceof HTMLElement))
										throw new Error("Cannot remove attribute from non-element child");
									var C = f.removedAttributeName(g);
									this.tryApplySpecialProperty(e, I, C, null) || I.removeAttribute(C);
									break;
								case r.EditType.updateText:
									w = f.newTreeIndex(g),
										E = e.referenceFramesEntry(u, w),
										_ = f.siblingIndex(g);
									var S = a.getLogicalChild(n, c + _);
									if (!(S instanceof Text))
										throw new Error("Cannot set text content on non-text child");
									S.textContent = p.textContent(E);
									break;
								case r.EditType.updateMarkup:
									w = f.newTreeIndex(g),
										E = e.referenceFramesEntry(u, w),
										_ = f.siblingIndex(g);
									a.removeLogicalChild(n, c + _),
										this.insertMarkup(e, n, c + _, E);
									break;
								case r.EditType.stepIn:
									_ = f.siblingIndex(g);
									n = a.getLogicalChild(n, c + _),
										s++,
										c = 0;
									break;
								case r.EditType.stepOut:
									n = a.getLogicalParent(n),
										c = 0 === --s ? o : 0;
									break;
								case r.EditType.permutationListEntry:
									(l = l || []).push({
										fromSiblingIndex: c + f.siblingIndex(g),
										toSiblingIndex: c + f.moveToSiblingIndex(g)
									});
									break;
								case r.EditType.permutationListEnd:
									a.permuteLogicalChildren(n, l),
										l = void 0;
									break;
								default:
									throw new Error("Unknown edit type: " + b)
							}
						}
					},
					e.prototype.insertFrame = function (e, t, n, o, a, u, l) {
						var s = e.frameReader,
							c = s.frameType(u);
						switch (c) {
							case r.FrameType.element:
								return this.insertElement(e, t, n, o, a, u, l),
									1;
							case r.FrameType.text:
								return this.insertText(e, n, o, u),
									1;
							case r.FrameType.attribute:
								throw new Error("Attribute frames should only be present as leading children of element frames.");
							case r.FrameType.component:
								return this.insertComponent(e, n, o, u),
									1;
							case r.FrameType.region:
								return this.insertFrameRange(e, t, n, o, a, l + 1, l + s.subtreeLength(u));
							case r.FrameType.elementReferenceCapture:
								if (n instanceof Element)
									return i.applyCaptureIdToElement(n, s.elementReferenceCaptureId(u)), 0;
								throw new Error("Reference capture frames can only be children of element frames.");
							case r.FrameType.markup:
								return this.insertMarkup(e, n, o, u),
									1;
							default:
								throw new Error("Unknown frame type: " + c)
						}
					},
					e.prototype.insertElement = function (e, t, n, o, i, u, l) {
						var s = e.frameReader,
							c = s.elementName(u),
							d = "svg" === c || a.isSvgElement(n) ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c),
							f = a.toLogicalElement(d);
						a.insertLogicalChild(d, n, o);
						for (var p = l + s.subtreeLength(u), m = l + 1; m < p; m++) {
							var h = e.referenceFramesEntry(i, m);
							if (s.frameType(h) !== r.FrameType.attribute) {
								this.insertFrameRange(e, t, f, 0, i, m, p);
								break
							}
							this.applyAttribute(e, t, d, h)
						}
						if (d instanceof HTMLSelectElement && "_blazorSelectValue" in d) {
							var v = d._blazorSelectValue;
							d.value = v,
								delete d._blazorSelectValue
						}
					},
					e.prototype.insertComponent = function (e, t, n, r) {
						var o = a.createAndInsertLogicalContainer(t, n),
							i = e.frameReader.componentId(r);
						this.attachComponentToElement(i, o)
					},
					e.prototype.insertText = function (e, t, n, r) {
						var o = e.frameReader.textContent(r),
							i = document.createTextNode(o);
						a.insertLogicalChild(i, t, n)
					},
					e.prototype.insertMarkup = function (e, t, n, r) {
						for (var o, i = a.createAndInsertLogicalContainer(t, n), u = e.frameReader.markupContent(r), l = (o = u, a.isSvgElement(t) ? (c.innerHTML = o || " ", c) : (s.innerHTML = o || " ", s.content)), d = 0; l.firstChild;)
							a.insertLogicalChild(l.firstChild, i, d++)
					},
					e.prototype.applyAttribute = function (e, t, n, r) {
						var o = e.frameReader,
							a = o.attributeName(r),
							i = o.attributeEventHandlerId(r);
						if (i) {
							var u = h(a);
							this.eventDelegator.setListener(n, u, i, t)
						} else
							this.tryApplySpecialProperty(e, n, a, r) || n.setAttribute(a, o.attributeValue(r))
					},
					e.prototype.tryApplySpecialProperty = function (e, t, n, r) {
						switch (n) {
							case "value":
								return this.tryApplyValueProperty(e, t, r);
							case "checked":
								return this.tryApplyCheckedProperty(e, t, r);
							default:
								return !!n.startsWith("__internal_") && (this.applyInternalAttribute(e, t, n.substring("__internal_".length), r), !0)
						}
					},
					e.prototype.applyInternalAttribute = function (e, t, n, r) {
						var o = r ? e.frameReader.attributeValue(r) : null;
						if (n.startsWith("stopPropagation_")) {
							var a = h(n.substring("stopPropagation_".length));
							this.eventDelegator.setStopPropagation(t, a, null !== o)
						} else {
							if (!n.startsWith("preventDefault_"))
								throw new Error("Unsupported internal attribute '" + n + "'");
							a = h(n.substring("preventDefault_".length));
							this.eventDelegator.setPreventDefault(t, a, null !== o)
						}
					},
					e.prototype.tryApplyValueProperty = function (e, t, n) {
						var r = e.frameReader;
						if ("INPUT" === t.tagName && "time" === t.getAttribute("type") && !t.getAttribute("step")) {
							var o = n ? r.attributeValue(n) : null;
							if (o)
								return t.value = o.substring(0, 5), !0
						}
						switch (t.tagName) {
							case "INPUT":
							case "SELECT":
							case "TEXTAREA":
								var a = n ? r.attributeValue(n) : null;
								return t.value = a,
									"SELECT" === t.tagName && (t._blazorSelectValue = a),
									!0;
							case "OPTION":
								(a = n ? r.attributeValue(n) : null) ? t.setAttribute("value", a) : t.removeAttribute("value");
								var i = this.findClosestAncestorSelectElement(t);
								return i && "_blazorSelectValue" in i && i._blazorSelectValue === a && (this.tryApplyValueProperty(e, i, n), delete i._blazorSelectValue),
									!0;
							default:
								return !1
						}
					},
					e.prototype.tryApplyCheckedProperty = function (e, t, n) {
						if ("INPUT" === t.tagName) {
							var r = n ? e.frameReader.attributeValue(n) : null;
							return t.checked = null !== r,
								!0
						}
						return !1
					},
					e.prototype.findClosestAncestorSelectElement = function (e) {
						for (; e;) {
							if (e instanceof HTMLSelectElement)
								return e;
							e = e.parentElement
						}
						return null
					},
					e.prototype.insertFrameRange = function (e, t, n, r, o, a, i) {
						for (var u = r, l = a; l < i; l++) {
							var s = e.referenceFramesEntry(o, l);
							r += this.insertFrame(e, t, n, r, o, s, l),
								l += m(e, s)
						}
						return r - u
					},
					e
			}
				();
		function m(e, t) {
			var n = e.frameReader;
			switch (n.frameType(t)) {
				case r.FrameType.component:
				case r.FrameType.element:
				case r.FrameType.region:
					return n.subtreeLength(t) - 1;
				default:
					return 0
			}
		}
		function h(e) {
			if (e.startsWith("on"))
				return e.substring(2);
			throw new Error("Attribute should be an event name, but doesn't start with 'on'. Value: '" + e + "'")
		}
		t.BrowserRenderer = p
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			function (e) {
				e[e.prependFrame = 1] = "prependFrame",
					e[e.removeFrame = 2] = "removeFrame",
					e[e.setAttribute = 3] = "setAttribute",
					e[e.removeAttribute = 4] = "removeAttribute",
					e[e.updateText = 5] = "updateText",
					e[e.stepIn = 6] = "stepIn",
					e[e.stepOut = 7] = "stepOut",
					e[e.updateMarkup = 8] = "updateMarkup",
					e[e.permutationListEntry = 9] = "permutationListEntry",
					e[e.permutationListEnd = 10] = "permutationListEnd"
			}
				(t.EditType || (t.EditType = {})),
			function (e) {
				e[e.element = 1] = "element",
					e[e.text = 2] = "text",
					e[e.attribute = 3] = "attribute",
					e[e.component = 4] = "component",
					e[e.region = 5] = "region",
					e[e.elementReferenceCapture = 6] = "elementReferenceCapture",
					e[e.markup = 8] = "markup"
			}
				(t.FrameType || (t.FrameType = {}))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(29),
			o = n(30),
			a = c(["abort", "blur", "change", "error", "focus", "load", "loadend", "loadstart", "mouseenter", "mouseleave", "progress", "reset", "scroll", "submit", "unload", "DOMNodeInsertedIntoDocument", "DOMNodeRemovedFromDocument"]),
			i = c(["click", "dblclick", "mousedown", "mousemove", "mouseup"]),
			u = function () {
				function e(t) {
					this.onEvent = t,
						this.afterClickCallbacks = [];
					var n = ++e.nextEventDelegatorId;
					this.eventsCollectionKey = "_blazorEvents_" + n,
						this.eventInfoStore = new l(this.onGlobalEvent.bind(this))
				}
				return e.prototype.setListener = function (e, t, n, r) {
					var o = this.getEventHandlerInfosForElement(e, !0),
						a = o.getHandler(t);
					if (a)
						this.eventInfoStore.update(a.eventHandlerId, n);
					else {
						var i = {
							element: e,
							eventName: t,
							eventHandlerId: n,
							renderingComponentId: r
						};
						this.eventInfoStore.add(i),
							o.setHandler(t, i)
					}
				},
					e.prototype.removeListener = function (e) {
						var t = this.eventInfoStore.remove(e);
						if (t) {
							var n = t.element,
								r = this.getEventHandlerInfosForElement(n, !1);
							r && r.removeHandler(t.eventName)
						}
					},
					e.prototype.notifyAfterClick = function (e) {
						this.afterClickCallbacks.push(e),
							this.eventInfoStore.addGlobalListener("click")
					},
					e.prototype.setStopPropagation = function (e, t, n) {
						this.getEventHandlerInfosForElement(e, !0).stopPropagation(t, n)
					},
					e.prototype.setPreventDefault = function (e, t, n) {
						this.getEventHandlerInfosForElement(e, !0).preventDefault(t, n)
					},
					e.prototype.onGlobalEvent = function (e) {
						if (e.target instanceof Element) {
							for (var t, n, u = e.target, l = null, s = a.hasOwnProperty(e.type), c = !1; u;) {
								var d = this.getEventHandlerInfosForElement(u, !1);
								if (d) {
									var f = d.getHandler(e.type);
									if (f && (t = u, n = e.type, !((t instanceof HTMLButtonElement || t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) && i.hasOwnProperty(n) && t.disabled))) {
										l || (l = r.EventForDotNet.fromDOMEvent(e));
										var p = o.EventFieldInfo.fromEvent(f.renderingComponentId, e);
										this.onEvent(e, f.eventHandlerId, l, p)
									}
									d.stopPropagation(e.type) && (c = !0),
										d.preventDefault(e.type) && e.preventDefault()
								}
								u = s || c ? null : u.parentElement
							}
							"click" === e.type && this.afterClickCallbacks.forEach(function (t) {
								return t(e)
							})
						}
					},
					e.prototype.getEventHandlerInfosForElement = function (e, t) {
						return e.hasOwnProperty(this.eventsCollectionKey) ? e[this.eventsCollectionKey] : t ? e[this.eventsCollectionKey] = new s : null
					},
					e.nextEventDelegatorId = 0,
					e
			}
				();
		t.EventDelegator = u;
		var l = function () {
			function e(e) {
				this.globalListener = e,
					this.infosByEventHandlerId = {},
					this.countByEventName = {}
			}
			return e.prototype.add = function (e) {
				if (this.infosByEventHandlerId[e.eventHandlerId])
					throw new Error("Event " + e.eventHandlerId + " is already tracked");
				this.infosByEventHandlerId[e.eventHandlerId] = e,
					this.addGlobalListener(e.eventName)
			},
				e.prototype.addGlobalListener = function (e) {
					if (this.countByEventName.hasOwnProperty(e))
						this.countByEventName[e]++;
					else {
						this.countByEventName[e] = 1;
						var t = a.hasOwnProperty(e);
						document.addEventListener(e, this.globalListener, t)
					}
				},
				e.prototype.update = function (e, t) {
					if (this.infosByEventHandlerId.hasOwnProperty(t))
						throw new Error("Event " + t + " is already tracked");
					var n = this.infosByEventHandlerId[e];
					delete this.infosByEventHandlerId[e],
						n.eventHandlerId = t,
						this.infosByEventHandlerId[t] = n
				},
				e.prototype.remove = function (e) {
					var t = this.infosByEventHandlerId[e];
					if (t) {
						delete this.infosByEventHandlerId[e];
						var n = t.eventName;
						0 == --this.countByEventName[n] && (delete this.countByEventName[n], document.removeEventListener(n, this.globalListener))
					}
					return t
				},
				e
		}
			(),
			s = function () {
				function e() {
					this.handlers = {},
						this.preventDefaultFlags = null,
						this.stopPropagationFlags = null
				}
				return e.prototype.getHandler = function (e) {
					return this.handlers.hasOwnProperty(e) ? this.handlers[e] : null
				},
					e.prototype.setHandler = function (e, t) {
						this.handlers[e] = t
					},
					e.prototype.removeHandler = function (e) {
						delete this.handlers[e]
					},
					e.prototype.preventDefault = function (e, t) {
						return void 0 !== t && (this.preventDefaultFlags = this.preventDefaultFlags || {}, this.preventDefaultFlags[e] = t),
							!!this.preventDefaultFlags && this.preventDefaultFlags[e]
					},
					e.prototype.stopPropagation = function (e, t) {
						return void 0 !== t && (this.stopPropagationFlags = this.stopPropagationFlags || {}, this.stopPropagationFlags[e] = t),
							!!this.stopPropagationFlags && this.stopPropagationFlags[e]
					},
					e
			}
				();
		function c(e) {
			var t = {};
			return e.forEach(function (e) {
				t[e] = !0
			}),
				t
		}
	}, function (e, t, n) {
		"use strict";
		var r = this && this.__assign || function () {
			return (r = Object.assign || function (e) {
				for (var t, n = 1, r = arguments.length; n < r; n++)
					for (var o in t = arguments[n])
						Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			}).apply(this, arguments)
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function () {
			function e(e, t) {
				this.type = e,
					this.data = t
			}
			return e.fromDOMEvent = function (t) {
				var n = t.target;
				switch (t.type) {
					case "input":
					case "change":
						if (function (e) {
							return -1 !== i.indexOf(e.getAttribute("type"))
						}
							(n)) {
							var o = function (e) {
								var t = e.value,
									n = e.type;
								switch (n) {
									case "date":
									case "datetime-local":
									case "month":
										return t;
									case "time":
										return 5 === t.length ? t + ":00" : t;
									case "week":
										return t
								}
								throw new Error("Invalid element type '" + n + "'.")
							}
								(n);
							return new e("change", {
								type: t.type,
								value: o
							})
						}
						var u = function (e) {
							return !!e && "INPUT" === e.tagName && "checkbox" === e.getAttribute("type")
						}
							(n) ? !!n.checked : n.value;
						return new e("change", {
							type: t.type,
							value: u
						});
					case "copy":
					case "cut":
					case "paste":
						return new e("clipboard", {
							type: t.type
						});
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						return new e("drag", function (e) {
							return r({}, a(e), {
								dataTransfer: e.dataTransfer
							})
						}
							(t));
					case "focus":
					case "blur":
					case "focusin":
					case "focusout":
						return new e("focus", {
							type: t.type
						});
					case "keydown":
					case "keyup":
					case "keypress":
						return new e("keyboard", function (e) {
							return {
								type: e.type,
								key: e.key,
								code: e.code,
								location: e.location,
								repeat: e.repeat,
								ctrlKey: e.ctrlKey,
								shiftKey: e.shiftKey,
								altKey: e.altKey,
								metaKey: e.metaKey
							}
						}
							(t));
					case "contextmenu":
					case "click":
					case "mouseover":
					case "mouseout":
					case "mousemove":
					case "mousedown":
					case "mouseup":
					case "dblclick":
						return new e("mouse", a(t));
					case "error":
						return new e("error", function (e) {
							return {
								type: e.type,
								message: e.message,
								filename: e.filename,
								lineno: e.lineno,
								colno: e.colno
							}
						}
							(t));
					case "loadstart":
					case "timeout":
					case "abort":
					case "load":
					case "loadend":
					case "progress":
						return new e("progress", function (e) {
							return {
								type: e.type,
								lengthComputable: e.lengthComputable,
								loaded: e.loaded,
								total: e.total
							}
						}
							(t));
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchenter":
					case "touchleave":
					case "touchstart":
						return new e("touch", function (e) {
							function t(e) {
								for (var t = [], n = 0; n < e.length; n++) {
									var r = e[n];
									t.push({
										identifier: r.identifier,
										clientX: r.clientX,
										clientY: r.clientY,
										screenX: r.screenX,
										screenY: r.screenY,
										pageX: r.pageX,
										pageY: r.pageY
									})
								}
								return t
							}
							return {
								type: e.type,
								detail: e.detail,
								touches: t(e.touches),
								targetTouches: t(e.targetTouches),
								changedTouches: t(e.changedTouches),
								ctrlKey: e.ctrlKey,
								shiftKey: e.shiftKey,
								altKey: e.altKey,
								metaKey: e.metaKey
							}
						}
							(t));
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointerenter":
					case "pointerleave":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						return new e("pointer", function (e) {
							return r({}, a(e), {
								pointerId: e.pointerId,
								width: e.width,
								height: e.height,
								pressure: e.pressure,
								tiltX: e.tiltX,
								tiltY: e.tiltY,
								pointerType: e.pointerType,
								isPrimary: e.isPrimary
							})
						}
							(t));
					case "wheel":
					case "mousewheel":
						return new e("wheel", function (e) {
							return r({}, a(e), {
								deltaX: e.deltaX,
								deltaY: e.deltaY,
								deltaZ: e.deltaZ,
								deltaMode: e.deltaMode
							})
						}
							(t));
					default:
						return new e("unknown", {
							type: t.type
						})
				}
			},
				e
		}
			();
		function a(e) {
			return {
				type: e.type,
				detail: e.detail,
				screenX: e.screenX,
				screenY: e.screenY,
				clientX: e.clientX,
				clientY: e.clientY,
				button: e.button,
				buttons: e.buttons,
				ctrlKey: e.ctrlKey,
				shiftKey: e.shiftKey,
				altKey: e.altKey,
				metaKey: e.metaKey
			}
		}
		t.EventForDotNet = o;
		var i = ["date", "datetime-local", "month", "time", "week"]
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function () {
			function e(e, t) {
				this.componentId = e,
					this.fieldValue = t
			}
			return e.fromEvent = function (t, n) {
				var r = n.target;
				if (r instanceof Element) {
					var o = function (e) {
						if (e instanceof HTMLInputElement)
							return e.type && "checkbox" === e.type.toLowerCase() ? {
								value: e.checked
							}
								: {
									value: e.value
								};
						if (e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement)
							return {
								value: e.value
							};
						return null
					}
						(r);
					if (o)
						return new e(t, o.value)
				}
				return null
			},
				e
		}
			();
		t.EventFieldInfo = r
	}, function (e, t, n) {
		"use strict";
		function r(e) {
			return "_bl_" + e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.applyCaptureIdToElement = function (e, t) {
				e.setAttribute(r(t), "")
			};
		DotNet.attachReviver(function (e, t) {
			return t && "object" == typeof t && t.hasOwnProperty("__internalId") && "string" == typeof t.__internalId ? (n = t.__internalId, o = "[" + r(n) + "]", document.querySelector(o)) : t;
			var n,
				o
		})
	}, function (e, t, n) {
		"use strict";
		var r = this && this.__awaiter || function (e, t, n, r) {
			return new (n || (n = Promise))(function (o, a) {
				function i(e) {
					try {
						l(r.next(e))
					} catch (e) {
						a(e)
					}
				}
				function u(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						a(e)
					}
				}
				function l(e) {
					e.done ? o(e.value) : new n(function (t) {
						t(e.value)
					}).then(i, u)
				}
				l((r = r.apply(e, t || [])).next())
			})
		},
			o = this && this.__generator || function (e, t) {
				var n,
					r,
					o,
					a,
					i = {
						label: 0,
						sent: function () {
							if (1 & o[0])
								throw o[1];
							return o[1]
						},
						trys: [],
						ops: []
					};
				return a = {
					next: u(0),
					throw: u(1),
					return: u(2)
				},
					"function" == typeof Symbol && (a[Symbol.iterator] = function () {
						return this
					}),
					a;
				function u(a) {
					return function (u) {
						return function (a) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; i;)
								try {
									if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done)
										return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
										case 0:
										case 1:
											o = a;
											break;
										case 4:
											return i.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											i.label++,
												r = a[1],
												a = [0];
											continue;
										case 7:
											a = i.ops.pop(),
												i.trys.pop();
											continue;
										default:
											if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
												i = 0;
												continue
											}
											if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
												i.label = a[1];
												break
											}
											if (6 === a[0] && i.label < o[1]) {
												i.label = o[1],
													o = a;
												break
											}
											if (o && i.label < o[2]) {
												i.label = o[2],
													i.ops.push(a);
												break
											}
											o[2] && i.ops.pop(),
												i.trys.pop();
											continue
									}
									a = t.call(e, i)
								} catch (e) {
									a = [6, e],
										r = 0
								}
								finally {
									n = o = 0
								}
							if (5 & a[0])
								throw a[1];
							return {
								value: a[0] ? a[1] : void 0,
								done: !0
							}
						}
							([a, u])
					}
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = !1;
		t.showErrorNotification = function () {
			return r(this, void 0, void 0, function () {
				var e;
				return o(this, function (t) {
					return (e = document.querySelector("#blazor-error-ui")) && (e.style.display = "block"),
						a || (a = !0, document.querySelectorAll("#blazor-error-ui .reload").forEach(function (e) {
							e.onclick = function (e) {
								location.reload(),
									e.preventDefault()
							}
						}), document.querySelectorAll("#blazor-error-ui .dismiss").forEach(function (e) {
							e.onclick = function (e) {
								var t = document.querySelector("#blazor-error-ui");
								t && (t.style.display = "none"),
									e.preventDefault()
							}
						})),
						[2]
				})
			})
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.shouldAutoStart = function () {
				return !(!document || !document.currentScript || "false" === document.currentScript.getAttribute("autostart"))
			}
	}, , function (e, t, n) {
		"use strict";
		function r(e) {
			var t = e.substring(e.lastIndexOf("/") + 1),
				n = t.indexOf("?");
			return n < 0 ? t : t.substring(0, n)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			t.getFileNameFromUrl = r,
			t.getAssemblyNameFromUrl = function (e) {
				return r(e).replace(/\.dll$/, "")
			}
	}, , , , , , , , , , function (e, t, n) {
		"use strict";
		var r = this && this.__awaiter || function (e, t, n, r) {
			return new (n || (n = Promise))(function (o, a) {
				function i(e) {
					/* Theses hack are for buggy iOS/Safari 13 */
					if (window.Blazor.isStarted) {
						try {
							l(r.next(e))
						} catch (e) {
							a(e)
						}
					}
					else {
						setTimeout(function (l, r, e) {
							try {
								l(r.next(e));
							} catch (e) {
								a(e)
							}
						}, 2000, l, r, e);
					}
				}
				function u(e) {
					try {
						l(r.throw(e))
					} catch (e) {
						a(e)
					}
				}
				function l(e) {
					e.done ? o(e.value) : new n(function (t) {
						t(e.value)
					}).then(i, u)
				}
				l((r = r.apply(e, t || [])).next())
			})
		},
			o = this && this.__generator || function (e, t) {
				var n,
					r,
					o,
					a,
					i = {
						label: 0,
						sent: function () {
							if (1 & o[0])
								throw o[1];
							return o[1]
						},
						trys: [],
						ops: []
					};
				return a = {
					next: u(0),
					throw: u(1),
					return: u(2)
				},
					"function" == typeof Symbol && (a[Symbol.iterator] = function () {
						return this
					}),
					a;
				function u(a) {
					return function (u) {
						return function (a) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; i;)
								try {
									if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done)
										return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
										case 0:
										case 1:
											o = a;
											break;
										case 4:
											return i.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											i.label++,
												r = a[1],
												a = [0];
											continue;
										case 7:
											a = i.ops.pop(),
												i.trys.pop();
											continue;
										default:
											if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
												i = 0;
												continue
											}
											if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
												i.label = a[1];
												break
											}
											if (6 === a[0] && i.label < o[1]) {
												i.label = o[1],
													o = a;
												break
											}
											if (o && i.label < o[2]) {
												i.label = o[2],
													i.ops.push(a);
												break
											}
											o[2] && i.ops.pop(),
												i.trys.pop();
											continue
									}
									a = t.call(e, i)
								} catch (e) {
									a = [6, e],
										r = 0
								}
								finally {
									n = o = 0
								}
							if (5 & a[0])
								throw a[1];
							return {
								value: a[0] ? a[1] : void 0,
								done: !0
							}
						}
							([a, u])
					}
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
			n(17),
			n(24);
		var a = n(18),
			i = n(46),
			u = n(5),
			l = n(48),
			s = n(33),
			c = n(19),
			d = !1;
		function f(e) {
			return r(this, void 0, void 0, function () {
				var e,
					t,
					n,
					s,
					f = this;
				return o(this, function (m) {
					switch (m.label) {
						case 0:
							if (d)
								throw new Error("Blazor has already started.");
							return d = !0,
								c.setEventDispatcher(function (e, t) {
									return DotNet.invokeMethodAsync("Microsoft.AspNetCore.Blazor", "DispatchEvent", e, JSON.stringify(t))
								}),
								e = a.setPlatform(i.monoPlatform),
								window.Blazor.platform = e,
								window.Blazor._internal.renderBatch = function (e, t) {
									u.renderBatch(e, new l.SharedMemoryRenderBatch(t))
								},
								window.Blazor._internal.navigationManager.listenForNavigationEvents(function (e, t) {
									return r(f, void 0, void 0, function () {
										return o(this, function (n) {
											switch (n.label) {
												case 0:
													return [4, DotNet.invokeMethodAsync("Microsoft.AspNetCore.Blazor", "NotifyLocationChanged", e, t)];
												case 1:
													return n.sent(),
														[2]
											}
										})
									})
								}),
								[4, p()];
						case 1:
							(t = m.sent()).linkerEnabled || console.info("Blazor is running in dev mode without IL stripping. To make the bundle size significantly smaller, publish the application or see https://go.microsoft.com/fwlink/?linkid=870414"),
								n = t.assemblies.map(function (e) {
									return "_framework/_bin/" + e
								}),
								m.label = 2;
						case 2:
							return m.trys.push([2, 4, , 5]),
								[4, e.start(n)];
						case 3:
							window.Blazor.isStarted = true;
							return m.sent(),
								[3, 5];
						case 4:
							throw s = m.sent(),
							new Error("Failed to start platform. Reason: " + s);
						case 5:
							return e.callEntryPoint(t.entryAssembly),
								[2]
					}
				})
			})
		}
		function p() {
			return r(this, void 0, void 0, function () {
				return o(this, function (e) {
					switch (e.label) {
						case 0:
							return [4, fetch("_framework/blazor.boot.json", {
								method: "Get",
								credentials: "include"
							})];
						case 1:
							return [2, e.sent().json()]
					}
				})
			})
		}
		window.Blazor.isStarted = false,
			window.Blazor.start = f,
			s.shouldAutoStart() && f().catch(function (e) {
				Module.printErr(e)
			})
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r,
			o = n(35),
			a = n(47),
			i = n(32),
			u = "appBinDir",
			l = Math.pow(2, 32),
			s = Math.pow(2, 21) - 1;
		t.monoPlatform = {
			start: function (e) {
				return new Promise(function (t, n) {
					var l,
						s;
					a.attachDebuggerHotkey(e),
						window.Browser = {
							init: function () { }
						},
						l = function () {
							window.Module = function (e, t, n) {
								var l = {},
									s = ["DEBUGGING ENABLED"];
								return l.print = function (e) {
									return s.indexOf(e) < 0 && console.log("WASM: " + e)
								},
									l.printErr = function (e) {
										console.error("WASM: " + e),
											i.showErrorNotification()
									},
									l.preRun = [],
									l.postRun = [],
									l.preloadPlugins = [],
									l.locateFile = function (e) {
										switch (e) {
											case "dotnet.wasm":
												return "_framework/wasm/dotnet.wasm";
											default:
												return e
										}
									},
									l.preRun.push(function () {
										var t = Module.cwrap("mono_wasm_add_assembly", null, ["string", "number", "number"]);
										r = Module.cwrap("mono_wasm_string_get_utf8", "number", ["number"]),
											MONO.loaded_files = [],
											e.forEach(function (e) {
												var r = o.getFileNameFromUrl(e),
													a = "blazor:" + r;
												addRunDependency(a),
													function (e) {
														return new Promise(function (t, n) {
															var r = new XMLHttpRequest;
															r.open("GET", e, !0),
																r.responseType = "arraybuffer",
																r.onload = function () {
																	if (200 == r.status || 0 == r.status && r.response) {
																		var e = new Uint8Array(r.response);
																		t(e)
																	} else
																		n(r)
																},
																r.onerror = n,
																r.send(void 0)
														})
													}
														(e).then(function (n) {
															var o,
																i = Module._malloc(n.length);
															new Uint8Array(Module.HEAPU8.buffer, i, n.length).set(n),
																t(r, i, n.length),
																MONO.loaded_files.push((o = e, c.href = o, c.href)),
																removeRunDependency(a)
														}, function (e) {
															e instanceof XMLHttpRequest && 404 === e.status && r.match(/\.pdb$/) || n(e),
																removeRunDependency(a)
														})
											})
									}),
									l.postRun.push(function () {
										var e,
											n,
											r;
										MONO.mono_wasm_setenv("MONO_URI_DOTNETRELATIVEORABSOLUTE", "true"),
											Module.cwrap("mono_wasm_load_runtime", null, ["string", "number"])(u, a.hasDebuggingEnabled() ? 1 : 0),
											MONO.mono_wasm_runtime_is_ready = !0,
											e = f("Mono.WebAssembly.Interop", "Mono.WebAssembly.Interop.MonoWebAssemblyJSRuntime", "InvokeDotNet"),
											n = f("Mono.WebAssembly.Interop", "Mono.WebAssembly.Interop.MonoWebAssemblyJSRuntime", "BeginInvokeDotNet"),
											r = f("Mono.WebAssembly.Interop", "Mono.WebAssembly.Interop.MonoWebAssemblyJSRuntime", "EndInvokeJS"),
											DotNet.attachDispatcher({
												beginInvokeDotNetFromJS: function (e, t, r, o, a) {
													if (!o && !t)
														throw new Error("Either assemblyName or dotNetObjectId must have a non null value.");
													var i = o ? o.toString() : t;
													n(e ? e.toString() : null, i, r, a)
												},
												endInvokeJSFromDotNet: function (e, t, n) {
													r(n)
												},
												invokeDotNetFromJS: function (t, n, r, o) {
													return e(t || null, n, r ? r.toString() : null, o)
												}
											}),
											t()
									}),
									l
							}
								(e, t, n),
								function () {
									if ("undefined" == typeof WebAssembly || !WebAssembly.validate)
										throw new Error("This browser does not support WebAssembly.");
									var e = document.createElement("script");
									e.src = "_framework/wasm/dotnet.js",
										e.defer = !0,
										document.body.appendChild(e)
								}
									()
						},
						s = document.createElement("script"),
						window.__wasmmodulecallback__ = l,
						s.type = "text/javascript",
						s.text = "var Module; window.__wasmmodulecallback__(); delete window.__wasmmodulecallback__;",
						document.body.appendChild(s)
				})
			},
			callEntryPoint: function (e) {
				f("Microsoft.AspNetCore.Blazor", "Microsoft.AspNetCore.Blazor.Hosting.EntrypointInvoker", "InvokeEntrypoint")(e, null)
			},
			toJavaScriptString: function (e) {
				var t = r(e),
					n = Module.UTF8ToString(t);
				return Module._free(t),
					n
			},
			toUint8Array: function (e) {
				var t = d(e),
					n = Module.getValue(t, "i32");
				return new Uint8Array(Module.HEAPU8.buffer, t + 4, n)
			},
			getArrayLength: function (e) {
				return Module.getValue(d(e), "i32")
			},
			getArrayEntryPtr: function (e, t, n) {
				return d(e) + 4 + t * n
			},
			getObjectFieldsBaseAddress: function (e) {
				return e + 8
			},
			readInt16Field: function (e, t) {
				return Module.getValue(e + (t || 0), "i16")
			},
			readInt32Field: function (e, t) {
				return Module.getValue(e + (t || 0), "i32")
			},
			readUint64Field: function (e, t) {
				var n = e + (t || 0) >> 2,
					r = Module.HEAPU32[n + 1];
				if (r > s)
					throw new Error("Cannot read uint64 with high order part " + r + ", because the result would exceed Number.MAX_SAFE_INTEGER.");
				return r * l + Module.HEAPU32[n]
			},
			readFloatField: function (e, t) {
				return Module.getValue(e + (t || 0), "float")
			},
			readObjectField: function (e, t) {
				return Module.getValue(e + (t || 0), "i32")
			},
			readStringField: function (e, n) {
				var r = Module.getValue(e + (n || 0), "i32");
				return 0 === r ? null : t.monoPlatform.toJavaScriptString(r)
			},
			readStructField: function (e, t) {
				return e + (t || 0)
			}
		};
		var c = document.createElement("a");
		function d(e) {
			return e + 12
		}
		function f(e, t, n) {
			var r = "[" + e + "] " + t + ":" + n;
			return Module.mono_bind_static_method(r)
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(35),
			o = window.chrome && navigator.userAgent.indexOf("Edge") < 0,
			a = !1;
		function i() {
			return a && o
		}
		t.hasDebuggingEnabled = i,
			t.attachDebuggerHotkey = function (e) {
				a = e.some(function (e) {
					return /\.pdb$/.test(r.getFileNameFromUrl(e))
				});
				var t = navigator.platform.match(/^Mac/i) ? "Cmd" : "Alt";
				i() && console.info("Debugging hotkey: Shift+" + t + "+D (when application has focus)"),
					document.addEventListener("keydown", function (e) {
						var t;
						e.shiftKey && (e.metaKey || e.altKey) && "KeyD" === e.code && (a ? o ? ((t = document.createElement("a")).href = "_framework/debug?url=" + encodeURIComponent(location.href), t.target = "_blank", t.rel = "noopener noreferrer", t.click()) : console.error("Currently, only Edge(Chromium) or Chrome is supported for debugging.") : console.error("Cannot start debugging, because the application was not compiled with debugging enabled."))
					})
			}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(18),
			o = function () {
				function e(e) {
					this.batchAddress = e,
						this.arrayRangeReader = a,
						this.arrayBuilderSegmentReader = i,
						this.diffReader = u,
						this.editReader = l,
						this.frameReader = s
				}
				return e.prototype.updatedComponents = function () {
					return r.platform.readStructField(this.batchAddress, 0)
				},
					e.prototype.referenceFrames = function () {
						return r.platform.readStructField(this.batchAddress, a.structLength)
					},
					e.prototype.disposedComponentIds = function () {
						return r.platform.readStructField(this.batchAddress, 2 * a.structLength)
					},
					e.prototype.disposedEventHandlerIds = function () {
						return r.platform.readStructField(this.batchAddress, 3 * a.structLength)
					},
					e.prototype.updatedComponentsEntry = function (e, t) {
						return c(e, t, u.structLength)
					},
					e.prototype.referenceFramesEntry = function (e, t) {
						return c(e, t, s.structLength)
					},
					e.prototype.disposedComponentIdsEntry = function (e, t) {
						var n = c(e, t, 4);
						return r.platform.readInt32Field(n)
					},
					e.prototype.disposedEventHandlerIdsEntry = function (e, t) {
						var n = c(e, t, 8);
						return r.platform.readUint64Field(n)
					},
					e
			}
				();
		t.SharedMemoryRenderBatch = o;
		var a = {
			structLength: 8,
			values: function (e) {
				return r.platform.readObjectField(e, 0)
			},
			count: function (e) {
				return r.platform.readInt32Field(e, 4)
			}
		},
			i = {
				structLength: 12,
				values: function (e) {
					var t = r.platform.readObjectField(e, 0),
						n = r.platform.getObjectFieldsBaseAddress(t);
					return r.platform.readObjectField(n, 0)
				},
				offset: function (e) {
					return r.platform.readInt32Field(e, 4)
				},
				count: function (e) {
					return r.platform.readInt32Field(e, 8)
				}
			},
			u = {
				structLength: 4 + i.structLength,
				componentId: function (e) {
					return r.platform.readInt32Field(e, 0)
				},
				edits: function (e) {
					return r.platform.readStructField(e, 4)
				},
				editsEntry: function (e, t) {
					return c(e, t, l.structLength)
				}
			},
			l = {
				structLength: 20,
				editType: function (e) {
					return r.platform.readInt32Field(e, 0)
				},
				siblingIndex: function (e) {
					return r.platform.readInt32Field(e, 4)
				},
				newTreeIndex: function (e) {
					return r.platform.readInt32Field(e, 8)
				},
				moveToSiblingIndex: function (e) {
					return r.platform.readInt32Field(e, 8)
				},
				removedAttributeName: function (e) {
					return r.platform.readStringField(e, 16)
				}
			},
			s = {
				structLength: 36,
				frameType: function (e) {
					return r.platform.readInt16Field(e, 4)
				},
				subtreeLength: function (e) {
					return r.platform.readInt32Field(e, 8)
				},
				elementReferenceCaptureId: function (e) {
					return r.platform.readStringField(e, 16)
				},
				componentId: function (e) {
					return r.platform.readInt32Field(e, 12)
				},
				elementName: function (e) {
					return r.platform.readStringField(e, 16)
				},
				textContent: function (e) {
					return r.platform.readStringField(e, 16)
				},
				markupContent: function (e) {
					return r.platform.readStringField(e, 16)
				},
				attributeName: function (e) {
					return r.platform.readStringField(e, 16)
				},
				attributeValue: function (e) {
					return r.platform.readStringField(e, 24)
				},
				attributeEventHandlerId: function (e) {
					return r.platform.readUint64Field(e, 8)
				}
			};
		function c(e, t, n) {
			return r.platform.getArrayEntryPtr(e, t, n)
		}
	}
	]);