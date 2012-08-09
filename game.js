var JSX = {};
(function () {

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions called by JSX
 * (enamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url);
};
/**
 * class Game extends Object
 * @constructor
 */
function Game() {
}

Game.prototype = new Object;
/**
 * @constructor
 */
function Game$() {
};

Game$.prototype = new Game;

/**
 * @param {!string} canvas_id
 * @param {!string} life_id
 */
Game.main$SS = function (canvas_id, life_id) {
	/** @type {HTMLCanvasElement} */
	var canvas;
	/** @type {!number} */
	var ww;
	/** @type {!number} */
	var wh;
	/** @type {!number} */
	var canvas_size;
	/** @type {!string} */
	var lbw;
	/** @type {WebGLRenderingContext} */
	var gl;
	var playSound;
	var getPoint;
	/** @type {Array.<undefined|!number>} */
	var lastTouchPos;
	var calcMousePosOnXYPlane;
	var touchStart;
	var touchEnd;
	var touchMove;
	var getRequestAnimationFrame;
	/** @type {*} */
	var w;
	var update;
	var render;
	var update_render;
	canvas = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas_id));
	ww = dom.window.innerWidth;
	wh = dom.window.innerHeight;
	canvas_size = Math.min(ww, wh);
	canvas.width = (canvas_size | 0);
	canvas.height = (canvas_size | 0);
	Game.status_text = (function (o) { return o instanceof HTMLDivElement ? o : null; })(dom$id$S('status'));
	Game.life_bar = (function (o) { return o instanceof HTMLDivElement ? o : null; })(dom$id$S(life_id));
	lbw = Game.life_bar.style.width;
	Game.life_bar_width = lbw.substring(0, lbw.length - 2) | 0;
	gl = Util$getWebGL$S(canvas_id);
	Game.gl = gl;
	Poi$initWithGL$LWebGLRenderingContext$(gl);
	Kingyo$initWithGL$LWebGLRenderingContext$(gl);
	Water$initWithGL$LWebGLRenderingContext$(gl);
	RenderTexture$initWithGL$LWebGLRenderingContext$(gl);
	Game.poi = new Poi$();
	Kingyo$init$I(20);
	Game.water = new Water$();
	Game.bltProg = Util$getProgram$SS('vt.vs', 'vt.fs');
	Game.bltULocs = Util$getUniformLocations$LWebGLProgram$(Game.bltProg);
	Game.bltALocs = Util$getAttribLocations$LWebGLProgram$(Game.bltProg);
	Game.bltVTBuf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, Game.bltVTBuf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), gl.STATIC_DRAW);
	playSound = (function (url) {
		/** @type {HTMLAudioElement} */
		var s;
		s = (function (o) { return o instanceof HTMLAudioElement ? o : null; })(dom.window.document.createElement('audio'));
		s.src = url;
		s.play();
	});
	getPoint = (function (e) {
		/** @type {!number} */
		var px;
		/** @type {!number} */
		var py;
		/** @type {MouseEvent} */
		var me;
		/** @type {TouchEvent} */
		var te;
		px = 0;
		py = 0;
		if (e instanceof MouseEvent) {
			me = (function (o) { return o instanceof MouseEvent ? o : null; })(e);
			px = me.clientX;
			py = me.clientY;
		} else {
			if (e instanceof TouchEvent) {
				te = (function (o) { return o instanceof TouchEvent ? o : null; })(e);
				px = te.touches[0].pageX;
				py = te.touches[0].pageY;
			}
		}
		return [ px, py ];
	});
	lastTouchPos = [ 0, 0 ];
	calcMousePosOnXYPlane = (function (p) {
		/** @type {!number} */
		var wx;
		/** @type {!number} */
		var wy;
		/** @type {V3} */
		var epos;
		/** @type {V3} */
		var pdir;
		/** @type {V3} */
		var hpos;
		wx = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:106] null access");
			}
			return v;
		}(p[0])) / canvas.width * 2 - 1;
		wy = - p[1] / canvas.height * 2 + 1;
		epos = new V3$NNN(0, 0, Game.viewDistance).transformBy$LM33$(new M33$().setRotateX$N(Game.viewLean));
		pdir = new V3$NNN(Game.fovh * wx, Game.fovv * wy, - 1).transformBy$LM33$(new M33$().setRotateX$N(Game.viewLean)).normalize$();
		hpos = pdir.clone$().mul$N(epos.z$() / - pdir.z$()).add$LV3$(epos);
		return [ hpos.x$(), hpos.y$() ];
	});
	touchStart = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Array.<undefined|Kingyo>} */
		var hit;
		e.preventDefault();
		lastTouchPos = getPoint(e);
		pos = calcMousePosOnXYPlane(lastTouchPos);
		Game.poi.setPosition$NN((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:121] null access");
			}
			return v;
		}(pos[0])), (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:121] null access");
			}
			return v;
		}(pos[1])));
		if (Game.poi.tearing$() || Kingyo$numRests$() === 0) {
			Game.life = 1;
			Game.life_bar.style.width = Game.life_bar_width.toString() + "px";
			Game.poi.tear$B(false);
			Kingyo$reset$();
			Game.status_text.innerHTML = 'click to start';
		} else {
			if (! Game.poi.tearing$()) {
				Game.poi.down$B(true);
				Game.poi_down_time = Date.now() / 1000;
				if (Game.startTime === 0) {
					Game.startTime = Date.now();
				}
			}
			hit = Kingyo$hit$NN((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:136] null access");
				}
				return v;
			}(pos[0])), (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:136] null access");
				}
				return v;
			}(pos[1])));
			if (hit.length > 0) {
				Game.poi.tear$B(true);
				playSound('tear.mp3');
				Game.startTime = 0;
			}
			Game.water.setImpulse$NNNN((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:144] null access");
				}
				return v;
			}(pos[0])) / 40 + 0.5, (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:145] null access");
				}
				return v;
			}(pos[1])) / 40 + 0.5, 0.03, 0);
		}
	});
	canvas.addEventListener("mousedown", touchStart);
	canvas.addEventListener("touchstart", touchStart);
	touchEnd = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Array.<undefined|Kingyo>} */
		var hit;
		e.preventDefault();
		if (e instanceof MouseEvent) {
			lastTouchPos = getPoint(e);
		}
		pos = calcMousePosOnXYPlane(lastTouchPos);
		Game.poi.setPosition$NN((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:158] null access");
			}
			return v;
		}(pos[0])), (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:158] null access");
			}
			return v;
		}(pos[1])));
		if (Game.poi.down$()) {
			if (! Game.poi.tearing$()) {
				hit = Kingyo$hit$NN((function (v) {
					if (! (v != null)) {
						debugger;
						throw new Error("[game.jsx:161] null access");
					}
					return v;
				}(pos[0])), (function (v) {
					if (! (v != null)) {
						debugger;
						throw new Error("[game.jsx:161] null access");
					}
					return v;
				}(pos[1])));
				Kingyo$fish$ALKingyo$(hit);
				if (hit.length > 0) {
					playSound('fish.mp3');
				}
				if (Kingyo$numRests$() === 0) {
					Game.startTime = 0;
				}
			}
			Game.water.setImpulse$NNNN((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:168] null access");
				}
				return v;
			}(pos[0])) / 40 + 0.5, (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:169] null access");
				}
				return v;
			}(pos[1])) / 40 + 0.5, 0.03, 1);
		}
		Game.poi.down$B(false);
	});
	canvas.addEventListener("mouseup", touchEnd);
	canvas.addEventListener("touchend", touchEnd);
	touchMove = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		e.preventDefault();
		lastTouchPos = getPoint(e);
		pos = calcMousePosOnXYPlane(lastTouchPos);
		Game.poi.setPosition$NN((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:183] null access");
			}
			return v;
		}(pos[0])), (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:183] null access");
			}
			return v;
		}(pos[1])));
		if (Game.poi.down$()) {
			Game.water.setImpulse$NNNN((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:187] null access");
				}
				return v;
			}(pos[0])) / 40 + 0.5, (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:188] null access");
				}
				return v;
			}(pos[1])) / 40 + 0.5, 0.02, 0.2);
		}
	});
	canvas.addEventListener("mousemove", touchMove);
	canvas.addEventListener("touchmove", touchMove);
	canvas.onmouseout = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		pos = calcMousePosOnXYPlane(getPoint(e));
		Game.poi.setPosition$NN((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:198] null access");
			}
			return v;
		}(pos[0])), (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:198] null access");
			}
			return v;
		}(pos[1])));
		Game.poi.down$B(false);
	});
	canvas.oncontextmenu = (function (e) {
		e.preventDefault();
	});
	canvas.style.cursor = 'none';
	Game.canvas = canvas;
	Game.renderTex = new RenderTexture$II(canvas.width, canvas.height);
	getRequestAnimationFrame = (function () {
		if (js.global.requestAnimationFrame != null) {
			return (function (tick) {
				dom.window.requestAnimationFrame(tick);
			});
		} else {
			if (js.global.webkitRequestAnimationFrame != null) {
				return (function (tick) {
					dom.window.webkitRequestAnimationFrame(tick);
				});
			} else {
				if (js.global.mozRequestAnimationFrame != null) {
					return (function (tick) {
						dom.window.mozRequestAnimationFrame(tick);
					});
				} else {
					return (function (tick) {
						dom.window.setTimeout((function () {
							tick(0);
						}), 1000 / 60);
					});
				}
			}
		}
	});
	w = dom.window;
	w.requestAnimationFrame = getRequestAnimationFrame();
	update = (function () {
		/** @type {!number} */
		var t;
		t = Date.now() / 1000;
		Kingyo$update$N(t);
		Game.water.step$N(t);
		if (Game.poi.down$()) {
			Game.life -= (t - Game.poi_down_time) * Game.damage_per_second;
			Game.poi_down_time = t;
			if (Game.life < 0 && ! Game.poi.tearing$()) {
				Game.life = 0;
				Game.poi.tear$B(true);
				playSound('tear.mp3');
				Game.startTime = 0;
			}
			Game.life_bar.style.width = (Game.life * Game.life_bar_width).toString() + "px";
		}
		if (Game.startTime > 0) {
			Game.status_text.innerHTML = ((Date.now() - Game.startTime | 0) / 1000).toString() + '[s]';
		}
	});
	render = (function () {
		/** @type {WebGLRenderingContext} */
		var gl;
		/** @type {!number} */
		var err;
		update();
		gl = Game.gl;
		Game.renderTex.begin$();
		gl.clearColor(0.2, 0.6, 0.8, 1);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.enable(gl.DEPTH_TEST);
		gl.enable(gl.BLEND);
		gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
		Kingyo$drawUnderWater$LM44$LM44$(Game.projMat, Game.viewMat);
		if (Game.poi.down$()) {
			Game.poi.draw$LM44$LM44$(Game.projMat, Game.viewMat);
		}
		Game.renderTex.end$();
		gl.clear(gl.DEPTH_BUFFER_BIT);
		gl.useProgram(Game.bltProg);
		gl.bindTexture(gl.TEXTURE_2D, Game.renderTex.texture$());
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.uniform1i(Game.bltULocs.texture, 0);
		gl.uniformMatrix4fv(Game.bltULocs.projectionMatrix, false, new M44$().setOrtho$NNNNNN(0, 1, 0, 1, - 1, 0).array$());
		gl.uniformMatrix4fv(Game.bltULocs.modelviewMatrix, false, new M44$().setIdentity$().array$());
		gl.bindBuffer(gl.ARRAY_BUFFER, Game.bltVTBuf);
		gl.vertexAttribPointer((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:287] null access");
			}
			return v;
		}(Game.bltALocs.vertex)), 2, gl.FLOAT, false, 0, 0);
		gl.vertexAttribPointer((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:288] null access");
			}
			return v;
		}(Game.bltALocs.texcoord)), 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:289] null access");
			}
			return v;
		}(Game.bltALocs.vertex)));
		gl.enableVertexAttribArray((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:290] null access");
			}
			return v;
		}(Game.bltALocs.texcoord)));
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		gl.disableVertexAttribArray((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:294] null access");
			}
			return v;
		}(Game.bltALocs.vertex)));
		gl.disableVertexAttribArray((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:295] null access");
			}
			return v;
		}(Game.bltALocs.texcoord)));
		Game.water.draw$LM44$LM44$LWebGLTexture$NN(Game.projMat, Game.viewMat, Game.renderTex.texture$(), Game.canvas.offsetWidth, Game.canvas.offsetHeight);
		Kingyo$drawAboveWater$LM44$LM44$(Game.projMat, Game.viewMat);
		if (! Game.poi.down$()) {
			Game.poi.draw$LM44$LM44$(Game.projMat, Game.viewMat);
		}
		err = gl.getError();
		if (err !== 0) {
			console.log('GL_ERROR: ' + err.toString());
		}
	});
	update_render = (function (time) {
		update();
		render();
		dom.window.requestAnimationFrame(update_render);
	});
	update_render(0);
	console.log('game start!');
};

var Game$main$SS = Game.main$SS;

/**
 * class js extends Object
 * @constructor
 */
function js() {
}

js.prototype = new Object;
/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

/**
 * class dom extends Object
 * @constructor
 */
function dom() {
}

dom.prototype = new Object;
/**
 * @constructor
 */
function dom$() {
};

dom$.prototype = new dom;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.id$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(id));
};

var dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(id));
};

var dom$getElementById$S = dom.getElementById$S;

/**
 * @param {!string} tag
 * @return {HTMLElement}
 */
dom.createElement$S = function (tag) {
	return (function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/js/web.jsx:30] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.createElement(tag)));
};

var dom$createElement$S = dom.createElement$S;

/**
 * class Timer extends Object
 * @constructor
 */
function Timer() {
}

Timer.prototype = new Object;
/**
 * @constructor
 */
function Timer$() {
};

Timer$.prototype = new Timer;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:27] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.setTimeout))(callback, intervalMS);
};

var Timer$setTimeout$F$V$N = Timer.setTimeout$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearTimeout$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:31] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearTimeout))(timer);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:35] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.setInterval))(callback, intervalMS);
};

var Timer$setInterval$F$V$N = Timer.setInterval$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearInterval$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:39] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearInterval))(timer);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

/**
 * @return {TimerHandle}
 */
Timer.requestAnimationFrame$F$NV$ = function (callback) {
	return Timer._requestAnimationFrame(callback);
};

var Timer$requestAnimationFrame$F$NV$ = Timer.requestAnimationFrame$F$NV$;

/**
 * @param {TimerHandle} timer
 */
Timer.cancelAnimationFrame$LTimerHandle$ = function (timer) {
	Timer._cancelAnimationFrame(timer);
};

var Timer$cancelAnimationFrame$LTimerHandle$ = Timer.cancelAnimationFrame$LTimerHandle$;

/**
 * @param {!boolean} enable
 */
Timer.useNativeRAF$B = function (enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

var Timer$useNativeRAF$B = Timer.useNativeRAF$B;

/**
 * @param {!boolean} useNativeImpl
 */
Timer._getRequestAnimationFrameImpl$B = function (useNativeImpl) {
	/** @type {!number} */
	var lastTime;
	if (useNativeImpl) {
		if (js.global.requestAnimationFrame) {
			return (function (callback) {
				return (function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:65] detected invalid cast, value is not a function or null");
					}
					return v;
				}(js.global.requestAnimationFrame))(callback);
			});
		} else {
			if (js.global.webkitRequestAnimationFrame) {
				return (function (callback) {
					return (function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:71] detected invalid cast, value is not a function or null");
						}
						return v;
					}(js.global.webkitRequestAnimationFrame))(callback);
				});
			} else {
				if (js.global.mozRequestAnimationFrame) {
					return (function (callback) {
						return (function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:77] detected invalid cast, value is not a function or null");
							}
							return v;
						}(js.global.mozRequestAnimationFrame))(callback);
					});
				} else {
					if (js.global.oRequestAnimationFrame) {
						return (function (callback) {
							return (function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:83] detected invalid cast, value is not a function or null");
								}
								return v;
							}(js.global.oRequestAnimationFrame))(callback);
						});
					} else {
						if (js.global.msRequestAnimationFrame) {
							return (function (callback) {
								return (function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:89] detected invalid cast, value is not a function or null");
									}
									return v;
								}(js.global.msRequestAnimationFrame))(callback);
							});
						}
					}
				}
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		/** @type {!number} */
		var now;
		/** @type {!number} */
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

var Timer$_getRequestAnimationFrameImpl$B = Timer._getRequestAnimationFrameImpl$B;

/**
 * @param {!boolean} useNativeImpl
 */
Timer._getCancelAnimationFrameImpl$B = function (useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				(function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:112] detected invalid cast, value is not a function or null");
					}
					return v;
				}(js.global.cancelAnimationFrame))(timer);
			});
		} else {
			if (js.global.webkitCancelAnimationFrame) {
				return (function (timer) {
					(function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:118] detected invalid cast, value is not a function or null");
						}
						return v;
					}(js.global.webkitCancelAnimationFrame))(timer);
				});
			} else {
				if (js.global.mozCancelAnimationFrame) {
					return (function (timer) {
						(function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:124] detected invalid cast, value is not a function or null");
							}
							return v;
						}(js.global.mozCancelAnimationFrame))(timer);
					});
				} else {
					if (js.global.oCancelAnimationFrame) {
						return (function (timer) {
							(function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:130] detected invalid cast, value is not a function or null");
								}
								return v;
							}(js.global.oCancelAnimationFrame))(timer);
						});
					} else {
						if (js.global.msCancelAnimationFrame) {
							return (function (timer) {
								(function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/timer.jsx:136] detected invalid cast, value is not a function or null");
									}
									return v;
								}(js.global.msCancelAnimationFrame))(timer);
							});
						}
					}
				}
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

var Timer$_getCancelAnimationFrameImpl$B = Timer._getCancelAnimationFrameImpl$B;

/**
 * class TimerHandle extends Object
 * @constructor
 */
function TimerHandle() {
}

TimerHandle.prototype = new Object;
/**
 * @constructor
 */
function TimerHandle$() {
};

TimerHandle$.prototype = new TimerHandle;

/**
 * class Util extends Object
 * @constructor
 */
function Util() {
}

Util.prototype = new Object;
/**
 * @constructor
 */
function Util$() {
};

Util$.prototype = new Util;

/**
 * @param {!string} canvas_id
 * @return {WebGLRenderingContext}
 */
Util.getWebGL$S = function (canvas_id) {
	/** @type {HTMLCanvasElement} */
	var canvas;
	/** @type {Array.<undefined|!string>} */
	var ctx_names;
	/** @type {WebGLRenderingContext} */
	var ctx;
	/** @type {!number} */
	var ni;
	if (Util.gl) {
		return Util.gl;
	}
	canvas = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas_id));
	ctx_names = [ 'webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d' ];
	ctx = null;
	for (ni in ctx_names) {
		try {
			ctx = (function (o) { return o instanceof WebGLRenderingContext ? o : null; })(canvas.getContext((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[webgl-util.jsx:16] null access");
				}
				return v;
			}(ctx_names[ni]))));
		} catch ($__jsx_catch_0) {
			if ($__jsx_catch_0 instanceof DOMException) {
				continue;
			} else {
				throw $__jsx_catch_0;
			}
		}
		if (ctx) {
			Util.gl = ctx;
			break;
		}
	}
	return Util.gl;
};

var Util$getWebGL$S = Util.getWebGL$S;

/**
 * @param {!string} url
 * @return {!string}
 */
Util.getFile$S = function (url) {
	/** @type {XMLHttpRequest} */
	var xhr;
	xhr = new XMLHttpRequest();
	xhr.open("GET", url, false);
	xhr.send();
	return xhr.responseText;
};

var Util$getFile$S = Util.getFile$S;

/**
 */
Util.checkGLError$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {!number} */
	var err;
	gl = Util.gl;
	err = gl.getError();
	if (err) {
		console.log('GL ERROR! :' + err.toString());
	}
};

var Util$checkGLError$ = Util.checkGLError$;

/**
 * @param {!string} url
 * @param {!number} type
 * @return {WebGLShader}
 */
Util.getShader$SI = function (url, type) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {!string} */
	var src;
	/** @type {WebGLShader} */
	var shader;
	gl = Util.gl;
	src = Util$getFile$S(url);
	shader = gl.createShader(type);
	gl.shaderSource(shader, src);
	gl.compileShader(shader);
	if (! (!! gl.getShaderParameter(shader, gl.COMPILE_STATUS))) {
		console.log(gl.getShaderInfoLog(shader));
		return null;
	}
	return shader;
};

var Util$getShader$SI = Util.getShader$SI;

/**
 * @param {!string} vs_url
 * @param {!string} fs_url
 * @return {WebGLProgram}
 */
Util.getProgram$SS = function (vs_url, fs_url) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLShader} */
	var vs;
	/** @type {WebGLShader} */
	var fs;
	/** @type {WebGLProgram} */
	var program;
	gl = Util.gl;
	vs = Util$getShader$SI(vs_url, gl.VERTEX_SHADER);
	fs = Util$getShader$SI(fs_url, gl.FRAGMENT_SHADER);
	if (! vs || ! fs) {
		return null;
	}
	program = gl.createProgram();
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.linkProgram(program);
	if (! (!! gl.getProgramParameter(program, gl.LINK_STATUS))) {
		console.log(gl.getProgramInfoLog(program));
		return null;
	}
	return program;
};

var Util$getProgram$SS = Util.getProgram$SS;

/**
 * @param {WebGLProgram} prog
 * @return {Object.<string, undefined|WebGLUniformLocation>}
 */
Util.getUniformLocations$LWebGLProgram$ = function (prog) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {Object.<string, undefined|WebGLUniformLocation>} */
	var ulocs;
	/** @type {!number} */
	var ui;
	/** @type {!number} */
	var nu;
	/** @type {WebGLActiveInfo} */
	var unif;
	gl = Util.gl;
	ulocs = {  };
	for ((ui = 0, nu = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS) | 0); ui < nu; ++ ui) {
		unif = gl.getActiveUniform(prog, ui);
		ulocs[unif.name] = gl.getUniformLocation(prog, unif.name);
	}
	return ulocs;
};

var Util$getUniformLocations$LWebGLProgram$ = Util.getUniformLocations$LWebGLProgram$;

/**
 * @param {WebGLProgram} prog
 * @return {Object.<string, undefined|!number>}
 */
Util.getAttribLocations$LWebGLProgram$ = function (prog) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {Object.<string, undefined|!number>} */
	var alocs;
	/** @type {!number} */
	var ai;
	/** @type {!number} */
	var na;
	/** @type {WebGLActiveInfo} */
	var attr;
	gl = Util.gl;
	alocs = {  };
	for ((ai = 0, na = gl.getProgramParameter(prog, gl.ACTIVE_ATTRIBUTES) | 0); ai < na; ++ ai) {
		attr = gl.getActiveAttrib(prog, ai);
		alocs[attr.name] = gl.getAttribLocation(prog, attr.name);
	}
	return alocs;
};

var Util$getAttribLocations$LWebGLProgram$ = Util.getAttribLocations$LWebGLProgram$;

/**
 * class MVQ extends Object
 * @constructor
 */
function MVQ() {
}

MVQ.prototype = new Object;
/**
 * @constructor
 */
function MVQ$() {
};

MVQ$.prototype = new MVQ;

/**
 * class V2 extends Object
 * @constructor
 */
function V2() {
}

V2.prototype = new Object;
/**
 * @constructor
 */
function V2$() {
	this._ = new Float32Array(2);
};

V2$.prototype = new V2;

/**
 * @constructor
 * @param {V2} v
 */
function V2$LV2$(v) {
	this._ = new Float32Array(2);
	this.set$LV2$(v);
};

V2$LV2$.prototype = new V2;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V2$AN(v) {
	this._ = new Float32Array(2);
	this.set$AN(v);
};

V2$AN.prototype = new V2;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V2$LFloat32Array$(v) {
	this._ = new Float32Array(2);
	this.set$LFloat32Array$(v);
};

V2$LFloat32Array$.prototype = new V2;

/**
 * @constructor
 * @param {!number} x
 * @param {!number} y
 */
function V2$NN(x, y) {
	this._ = new Float32Array(2);
	this.set$NN(x, y);
};

V2$NN.prototype = new V2;

/**
 * @constructor
 * @param {V3} v
 */
function V2$LV3$(v) {
	this._ = new Float32Array(2);
	this.set$LV3$(v);
};

V2$LV3$.prototype = new V2;

/**
 * @constructor
 * @param {V4} v
 */
function V2$LV4$(v) {
	this._ = new Float32Array(2);
	this.set$LV4$(v);
};

V2$LV4$.prototype = new V2;

/**
 * @return {Float32Array}
 */
V2.prototype.array$ = function () {
	return this._;
};

/**
 * @param {!number} z
 * @return {V3}
 */
V2.prototype.v3$N = function (z) {
	return new V3$LV2$N(this, z);
};

/**
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V2.prototype.v4$NN = function (z, w) {
	return new V4$LV2$NN(this, z, w);
};

/**
 * @param {V3} v
 * @return {V2}
 */
V2.prototype.set$LV3$ = function (v) {
	return this.set$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:23] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:23] null access");
		}
		return v;
	}(v._[1])));
};

/**
 * @param {V4} v
 * @return {V2}
 */
V2.prototype.set$LV4$ = function (v) {
	return this.set$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:24] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:24] null access");
		}
		return v;
	}(v._[1])));
};

/**
 * @return {V2}
 */
V2.prototype.clone$ = function () {
	return new V2$LV2$(this);
};

/**
 * @return {V2}
 */
V2.prototype.clear$ = function () {
	return this.set$NN(0, 0);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.prototype.set$NN = function (x, y) {
	this._[0] = x;
	this._[1] = y;
	return this;
};

/**
 * @param {V2} v
 * @return {V2}
 */
V2.prototype.set$LV2$ = function (v) {
	this._.set(v._);
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.prototype.set$AN = function (v) {
	this._.set(v);
	return this;
};

/**
 * @param {Float32Array} v
 * @return {V2}
 */
V2.prototype.set$LFloat32Array$ = function (v) {
	this._.set(v);
	return this;
};

/**
 * @return {!number}
 */
V2.prototype.x$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:37] null access");
		}
		return v;
	}(this._[0]));
};

/**
 * @return {!number}
 */
V2.prototype.y$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:38] null access");
		}
		return v;
	}(this._[1]));
};

/**
 * @param {!number} val
 * @return {V2}
 */
V2.prototype.x$N = function (val) {
	this._[0] = val;
	return this;
};

/**
 * @param {!number} val
 * @return {V2}
 */
V2.prototype.y$N = function (val) {
	this._[1] = val;
	return this;
};

/**
 * @param {V2} v
 * @return {!boolean}
 */
V2.prototype.equals$LV2$ = function (v) {
	return this.equals$LV2$N(v, MVQ.EQUAL_EPSILON);
};

/**
 * @param {V2} v
 * @param {!number} eps
 * @return {!boolean}
 */
V2.prototype.equals$LV2$N = function (v, eps) {
	var $math_abs_t;
	return (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:47] null access");
		}
		return v;
	}(v._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:47] null access");
		}
		return v;
	}(this._[0]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:48] null access");
		}
		return v;
	}(v._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:48] null access");
		}
		return v;
	}(this._[1]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.prototype.add$NN = function (x, y) {
	this._[0] += x;
	this._[1] += y;
	return this;
};

/**
 * @param {V2} v
 * @return {V2}
 */
V2.prototype.add$LV2$ = function (v) {
	return this.add$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:55] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:55] null access");
		}
		return v;
	}(v._[1])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.prototype.add$AN = function (v) {
	return this.add$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:56] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:56] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {Float32Array} v
 * @return {V2}
 */
V2.prototype.add$LFloat32Array$ = function (v) {
	return this.add$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:57] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:57] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.prototype.sub$NN = function (x, y) {
	this._[0] -= x;
	this._[1] -= y;
	return this;
};

/**
 * @param {V2} v
 * @return {V2}
 */
V2.prototype.sub$LV2$ = function (v) {
	return this.sub$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:63] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:63] null access");
		}
		return v;
	}(v._[1])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.prototype.sub$AN = function (v) {
	return this.sub$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:64] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:64] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {Float32Array} v
 * @return {V2}
 */
V2.prototype.sub$LFloat32Array$ = function (v) {
	return this.sub$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:65] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:65] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.prototype.mul$NN = function (x, y) {
	this._[0] *= x;
	this._[1] *= y;
	return this;
};

/**
 * @param {V2} v
 * @return {V2}
 */
V2.prototype.mul$LV2$ = function (v) {
	return this.mul$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:71] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:71] null access");
		}
		return v;
	}(v._[1])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.prototype.mul$AN = function (v) {
	return this.mul$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:72] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:72] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {Float32Array} v
 * @return {V2}
 */
V2.prototype.mul$LFloat32Array$ = function (v) {
	return this.mul$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:73] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:73] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {!number} s
 * @return {V2}
 */
V2.prototype.mul$N = function (s) {
	this._[0] *= s;
	this._[1] *= s;
	return this;
};

/**
 * @return {V2}
 */
V2.prototype.neg$ = function () {
	return this.mul$N(- 1);
};

/**
 * @return {V2}
 */
V2.prototype.normalize$ = function () {
	/** @type {!number} */
	var l;
	l = this.len$();
	if (l > 0) {
		return this.mul$N(1 / l);
	} else {
		return this;
	}
};

/**
 * @param {V2} v
 * @return {!number}
 */
V2.prototype.cross$LV2$ = function (v) {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:95] null access");
		}
		return v;
	}(this._[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:95] null access");
		}
		return v;
	}(v._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:95] null access");
		}
		return v;
	}(v._[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:95] null access");
		}
		return v;
	}(this._[1]));
};

/**
 * @param {V2} v
 * @return {!number}
 */
V2.prototype.dot$LV2$ = function (v) {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:99] null access");
		}
		return v;
	}(this._[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:99] null access");
		}
		return v;
	}(v._[0])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:99] null access");
		}
		return v;
	}(this._[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:99] null access");
		}
		return v;
	}(v._[1]));
};

/**
 * @return {!number}
 */
V2.prototype.len$ = function () {
	return Math.sqrt(this.len2$());
};

/**
 * @return {!number}
 */
V2.prototype.len2$ = function () {
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	(x = this._[0], y = this._[1]);
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:108] null access");
		}
		return v;
	}(x)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:108] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:108] null access");
		}
		return v;
	}(y)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:108] null access");
		}
		return v;
	}(y));
};

/**
 * @param {V2} v
 * @return {!number}
 */
V2.prototype.dist$LV2$ = function (v) {
	return Math.sqrt(this.dist2$LV2$(v));
};

/**
 * @param {V2} v
 * @return {!number}
 */
V2.prototype.dist2$LV2$ = function (v) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	x = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:116] null access");
		}
		return v;
	}(v._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:116] null access");
		}
		return v;
	}(this._[0]));
	y = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:117] null access");
		}
		return v;
	}(v._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:117] null access");
		}
		return v;
	}(this._[1]));
	return x * x + y * y;
};

/**
 * @param {V2} v0
 * @param {V2} v1
 * @param {!number} ratio
 * @return {V2}
 */
V2.prototype.lerp$LV2$LV2$N = function (v0, v1, ratio) {
	this._[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:122] null access");
		}
		return v;
	}(v0._[0])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:122] null access");
		}
		return v;
	}(v1._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:122] null access");
		}
		return v;
	}(v0._[0])));
	this._[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:123] null access");
		}
		return v;
	}(v0._[1])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:123] null access");
		}
		return v;
	}(v1._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:123] null access");
		}
		return v;
	}(v0._[1])));
	return this;
};

/**
 * @param {M22} m
 * @return {V2}
 */
V2.prototype.transformBy$LM22$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var t;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	(a = this.array$(), t = m.array$());
	(x = a[0], y = a[1]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:130] null access");
		}
		return v;
	}(t[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:130] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:130] null access");
		}
		return v;
	}(t[2])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:130] null access");
		}
		return v;
	}(y));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:131] null access");
		}
		return v;
	}(t[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:131] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:131] null access");
		}
		return v;
	}(t[3])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:131] null access");
		}
		return v;
	}(y));
	return this;
};

/**
 * @param {M33} m
 * @return {V2}
 */
V2.prototype.transformBy$LM33$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var t;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	(a = this.array$(), t = m.array$());
	(x = a[0], y = a[1]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:137] null access");
		}
		return v;
	}(t[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:137] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:137] null access");
		}
		return v;
	}(t[3])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:137] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:137] null access");
		}
		return v;
	}(t[6]));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:138] null access");
		}
		return v;
	}(t[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:138] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:138] null access");
		}
		return v;
	}(t[4])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:138] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:138] null access");
		}
		return v;
	}(t[7]));
	return this;
};

/**
 * class V3 extends Object
 * @constructor
 */
function V3() {
}

V3.prototype = new Object;
/**
 * @constructor
 */
function V3$() {
	this._ = new Float32Array(3);
};

V3$.prototype = new V3;

/**
 * @constructor
 * @param {V3} v
 */
function V3$LV3$(v) {
	this._ = new Float32Array(3);
	this.set$LV3$(v);
};

V3$LV3$.prototype = new V3;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V3$AN(v) {
	this._ = new Float32Array(3);
	this.set$AN(v);
};

V3$AN.prototype = new V3;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V3$LFloat32Array$(v) {
	this._ = new Float32Array(3);
	this.set$LFloat32Array$(v);
};

V3$LFloat32Array$.prototype = new V3;

/**
 * @constructor
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 */
function V3$NNN(x, y, z) {
	this._ = new Float32Array(3);
	this.set$NNN(x, y, z);
};

V3$NNN.prototype = new V3;

/**
 * @constructor
 * @param {V2} v
 * @param {!number} z
 */
function V3$LV2$N(v, z) {
	this._ = new Float32Array(3);
	this.set$LV2$N(v, z);
};

V3$LV2$N.prototype = new V3;

/**
 * @constructor
 * @param {V4} v
 */
function V3$LV4$(v) {
	this._ = new Float32Array(3);
	this.set$LV4$(v);
};

V3$LV4$.prototype = new V3;

/**
 * @return {Float32Array}
 */
V3.prototype.array$ = function () {
	return this._;
};

/**
 * @return {V2}
 */
V3.prototype.v2$ = function () {
	return new V2$LV3$(this);
};

/**
 * @param {!number} w
 * @return {V4}
 */
V3.prototype.v4$N = function (w) {
	return new V4$LV3$N(this, w);
};

/**
 * @param {V2} v
 * @param {!number} z
 * @return {V3}
 */
V3.prototype.set$LV2$N = function (v, z) {
	return this.set$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:159] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:159] null access");
		}
		return v;
	}(v._[1])), z);
};

/**
 * @param {V4} v
 * @return {V3}
 */
V3.prototype.set$LV4$ = function (v) {
	return this.set$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:160] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:160] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:160] null access");
		}
		return v;
	}(v._[2])));
};

/**
 * @return {V3}
 */
V3.prototype.clone$ = function () {
	return new V3$LV3$(this);
};

/**
 * @return {V3}
 */
V3.prototype.clear$ = function () {
	return this.set$NNN(0, 0, 0);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.prototype.set$NNN = function (x, y, z) {
	this._[0] = x;
	this._[1] = y;
	this._[2] = z;
	return this;
};

/**
 * @param {V3} v
 * @return {V3}
 */
V3.prototype.set$LV3$ = function (v) {
	this._.set(v._);
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.prototype.set$AN = function (v) {
	this._.set(v);
	return this;
};

/**
 * @param {Float32Array} v
 * @return {V3}
 */
V3.prototype.set$LFloat32Array$ = function (v) {
	this._.set(v);
	return this;
};

/**
 * @return {!number}
 */
V3.prototype.x$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:173] null access");
		}
		return v;
	}(this._[0]));
};

/**
 * @return {!number}
 */
V3.prototype.y$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:174] null access");
		}
		return v;
	}(this._[1]));
};

/**
 * @return {!number}
 */
V3.prototype.z$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:175] null access");
		}
		return v;
	}(this._[2]));
};

/**
 * @param {!number} val
 * @return {V3}
 */
V3.prototype.x$N = function (val) {
	this._[0] = val;
	return this;
};

/**
 * @param {!number} val
 * @return {V3}
 */
V3.prototype.y$N = function (val) {
	this._[1] = val;
	return this;
};

/**
 * @param {!number} val
 * @return {V3}
 */
V3.prototype.z$N = function (val) {
	this._[2] = val;
	return this;
};

/**
 * @param {V3} v
 * @return {!boolean}
 */
V3.prototype.equals$LV3$ = function (v) {
	return this.equals$LV3$N(v, MVQ.EQUAL_EPSILON);
};

/**
 * @param {V3} v
 * @param {!number} eps
 * @return {!boolean}
 */
V3.prototype.equals$LV3$N = function (v, eps) {
	var $math_abs_t;
	return (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:185] null access");
		}
		return v;
	}(v._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:185] null access");
		}
		return v;
	}(this._[0]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:186] null access");
		}
		return v;
	}(v._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:186] null access");
		}
		return v;
	}(this._[1]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:187] null access");
		}
		return v;
	}(v._[2])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:187] null access");
		}
		return v;
	}(this._[2]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.prototype.add$NNN = function (x, y, z) {
	this._[0] += x;
	this._[1] += y;
	this._[2] += z;
	return this;
};

/**
 * @param {V3} v
 * @return {V3}
 */
V3.prototype.add$LV3$ = function (v) {
	return this.add$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:194] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:194] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:194] null access");
		}
		return v;
	}(v._[2])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.prototype.add$AN = function (v) {
	return this.add$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:195] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:195] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:195] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {Float32Array} v
 * @return {V3}
 */
V3.prototype.add$LFloat32Array$ = function (v) {
	return this.add$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:196] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:196] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:196] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.prototype.sub$NNN = function (x, y, z) {
	this._[0] -= x;
	this._[1] -= y;
	this._[2] -= z;
	return this;
};

/**
 * @param {V3} v
 * @return {V3}
 */
V3.prototype.sub$LV3$ = function (v) {
	return this.sub$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:202] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:202] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:202] null access");
		}
		return v;
	}(v._[2])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.prototype.sub$AN = function (v) {
	return this.sub$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:203] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:203] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:203] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {Float32Array} v
 * @return {V3}
 */
V3.prototype.sub$LFloat32Array$ = function (v) {
	return this.sub$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:204] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:204] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:204] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.prototype.mul$NNN = function (x, y, z) {
	this._[0] *= x;
	this._[1] *= y;
	this._[2] *= z;
	return this;
};

/**
 * @param {V3} v
 * @return {V3}
 */
V3.prototype.mul$LV3$ = function (v) {
	return this.mul$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:210] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:210] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:210] null access");
		}
		return v;
	}(v._[2])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.prototype.mul$AN = function (v) {
	return this.mul$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:211] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:211] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:211] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {Float32Array} v
 * @return {V3}
 */
V3.prototype.mul$LFloat32Array$ = function (v) {
	return this.mul$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:212] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:212] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:212] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {!number} s
 * @return {V3}
 */
V3.prototype.mul$N = function (s) {
	this._[0] *= s;
	this._[1] *= s;
	this._[2] *= s;
	return this;
};

/**
 * @return {V3}
 */
V3.prototype.neg$ = function () {
	return this.mul$N(- 1);
};

/**
 * @return {V3}
 */
V3.prototype.normalize$ = function () {
	/** @type {!number} */
	var l;
	l = this.len$();
	if (l > 0) {
		return this.mul$N(1 / l);
	} else {
		return this;
	}
};

/**
 * @param {V3} v0
 * @param {V3} v1
 * @return {V3}
 */
V3.prototype.cross$LV3$LV3$ = function (v0, v1) {
	/** @type {undefined|!number} */
	var x0;
	/** @type {undefined|!number} */
	var y0;
	/** @type {undefined|!number} */
	var z0;
	/** @type {undefined|!number} */
	var x1;
	/** @type {undefined|!number} */
	var y1;
	/** @type {undefined|!number} */
	var z1;
	(x0 = v0._[0], y0 = v0._[1], z0 = v0._[2]);
	(x1 = v1._[0], y1 = v1._[1], z1 = v1._[2]);
	this._[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:237] null access");
		}
		return v;
	}(y0)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:237] null access");
		}
		return v;
	}(z1)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:237] null access");
		}
		return v;
	}(z0)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:237] null access");
		}
		return v;
	}(y1));
	this._[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:238] null access");
		}
		return v;
	}(z0)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:238] null access");
		}
		return v;
	}(x1)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:238] null access");
		}
		return v;
	}(x0)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:238] null access");
		}
		return v;
	}(z1));
	this._[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:239] null access");
		}
		return v;
	}(x0)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:239] null access");
		}
		return v;
	}(y1)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:239] null access");
		}
		return v;
	}(y0)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:239] null access");
		}
		return v;
	}(x1));
	return this;
};

/**
 * @param {V3} v
 * @return {!number}
 */
V3.prototype.dot$LV3$ = function (v) {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:244] null access");
		}
		return v;
	}(this._[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:244] null access");
		}
		return v;
	}(v._[0])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:244] null access");
		}
		return v;
	}(this._[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:244] null access");
		}
		return v;
	}(v._[1])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:244] null access");
		}
		return v;
	}(this._[2])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:244] null access");
		}
		return v;
	}(v._[2]));
};

/**
 * @return {!number}
 */
V3.prototype.len$ = function () {
	return Math.sqrt(this.len2$());
};

/**
 * @return {!number}
 */
V3.prototype.len2$ = function () {
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	(x = this._[0], y = this._[1], z = this._[2]);
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:253] null access");
		}
		return v;
	}(x)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:253] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:253] null access");
		}
		return v;
	}(y)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:253] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:253] null access");
		}
		return v;
	}(z)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:253] null access");
		}
		return v;
	}(z));
};

/**
 * @param {V3} v
 * @return {!number}
 */
V3.prototype.dist$LV3$ = function (v) {
	return Math.sqrt(this.dist2$LV3$(v));
};

/**
 * @param {V3} v
 * @return {!number}
 */
V3.prototype.dist2$LV3$ = function (v) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	x = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:261] null access");
		}
		return v;
	}(v._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:261] null access");
		}
		return v;
	}(this._[0]));
	y = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:262] null access");
		}
		return v;
	}(v._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:262] null access");
		}
		return v;
	}(this._[1]));
	z = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:263] null access");
		}
		return v;
	}(v._[2])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:263] null access");
		}
		return v;
	}(this._[2]));
	return x * x + y * y + z * z;
};

/**
 * @param {V3} v0
 * @param {V3} v1
 * @param {!number} ratio
 * @return {V3}
 */
V3.prototype.lerp$LV3$LV3$N = function (v0, v1, ratio) {
	this._[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:268] null access");
		}
		return v;
	}(v0._[0])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:268] null access");
		}
		return v;
	}(v1._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:268] null access");
		}
		return v;
	}(v0._[0])));
	this._[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:269] null access");
		}
		return v;
	}(v0._[1])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:269] null access");
		}
		return v;
	}(v1._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:269] null access");
		}
		return v;
	}(v0._[1])));
	this._[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:270] null access");
		}
		return v;
	}(v0._[2])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:270] null access");
		}
		return v;
	}(v1._[2])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:270] null access");
		}
		return v;
	}(v0._[2])));
	return this;
};

/**
 * @param {M33} m
 * @return {V3}
 */
V3.prototype.transformBy$LM33$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var t;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	(a = this.array$(), t = m.array$());
	(x = a[0], y = a[1], z = a[2]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:277] null access");
		}
		return v;
	}(t[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:277] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:277] null access");
		}
		return v;
	}(t[3])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:277] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:277] null access");
		}
		return v;
	}(t[6])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:277] null access");
		}
		return v;
	}(z));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:278] null access");
		}
		return v;
	}(t[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:278] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:278] null access");
		}
		return v;
	}(t[4])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:278] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:278] null access");
		}
		return v;
	}(t[7])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:278] null access");
		}
		return v;
	}(z));
	a[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:279] null access");
		}
		return v;
	}(t[2])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:279] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:279] null access");
		}
		return v;
	}(t[5])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:279] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:279] null access");
		}
		return v;
	}(t[8])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:279] null access");
		}
		return v;
	}(z));
	return this;
};

/**
 * @param {M44} m
 * @return {V3}
 */
V3.prototype.transformBy$LM44$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var t;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	(a = this.array$(), t = m.array$());
	(x = a[0], y = a[1], z = a[2]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:285] null access");
		}
		return v;
	}(t[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:285] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:285] null access");
		}
		return v;
	}(t[4])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:285] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:285] null access");
		}
		return v;
	}(t[8])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:285] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:285] null access");
		}
		return v;
	}(t[12]));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:286] null access");
		}
		return v;
	}(t[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:286] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:286] null access");
		}
		return v;
	}(t[5])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:286] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:286] null access");
		}
		return v;
	}(t[9])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:286] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:286] null access");
		}
		return v;
	}(t[13]));
	a[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:287] null access");
		}
		return v;
	}(t[2])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:287] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:287] null access");
		}
		return v;
	}(t[6])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:287] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:287] null access");
		}
		return v;
	}(t[10])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:287] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:287] null access");
		}
		return v;
	}(t[14]));
	return this;
};

/**
 * class V4 extends Object
 * @constructor
 */
function V4() {
}

V4.prototype = new Object;
/**
 * @constructor
 */
function V4$() {
	this._ = new Float32Array(4);
};

V4$.prototype = new V4;

/**
 * @constructor
 * @param {V4} v
 */
function V4$LV4$(v) {
	this._ = new Float32Array(4);
	this.set$LV4$(v);
};

V4$LV4$.prototype = new V4;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V4$AN(v) {
	this._ = new Float32Array(4);
	this.set$AN(v);
};

V4$AN.prototype = new V4;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V4$LFloat32Array$(v) {
	this._ = new Float32Array(4);
	this.set$LFloat32Array$(v);
};

V4$LFloat32Array$.prototype = new V4;

/**
 * @constructor
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 */
function V4$NNNN(x, y, z, w) {
	this._ = new Float32Array(4);
	this.set$NNNN(x, y, z, w);
};

V4$NNNN.prototype = new V4;

/**
 * @constructor
 * @param {V2} v
 * @param {!number} z
 * @param {!number} w
 */
function V4$LV2$NN(v, z, w) {
	this._ = new Float32Array(4);
	this.set$LV2$NN(v, z, w);
};

V4$LV2$NN.prototype = new V4;

/**
 * @constructor
 * @param {V3} v
 * @param {!number} w
 */
function V4$LV3$N(v, w) {
	this._ = new Float32Array(4);
	this.set$LV3$N(v, w);
};

V4$LV3$N.prototype = new V4;

/**
 * @return {Float32Array}
 */
V4.prototype.array$ = function () {
	return this._;
};

/**
 * @return {V2}
 */
V4.prototype.v2$ = function () {
	return new V2$LV4$(this);
};

/**
 * @return {V3}
 */
V4.prototype.v3$ = function () {
	return new V3$LV4$(this);
};

/**
 * @param {V2} v
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.set$LV2$NN = function (v, z, w) {
	return this.set$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:308] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:308] null access");
		}
		return v;
	}(v._[1])), z, w);
};

/**
 * @param {V3} v
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.set$LV3$N = function (v, w) {
	return this.set$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:309] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:309] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:309] null access");
		}
		return v;
	}(v._[2])), w);
};

/**
 * @return {V4}
 */
V4.prototype.clone$ = function () {
	return new V4$LV4$(this);
};

/**
 * @return {V4}
 */
V4.prototype.clear$ = function () {
	return this.set$NNNN(0, 0, 0, 0);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.set$NNNN = function (x, y, z, w) {
	this._[0] = x;
	this._[1] = y;
	this._[2] = z;
	this._[3] = w;
	return this;
};

/**
 * @param {V4} v
 * @return {V4}
 */
V4.prototype.set$LV4$ = function (v) {
	this._.set(v._);
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.prototype.set$AN = function (v) {
	this._.set(v);
	return this;
};

/**
 * @param {Float32Array} v
 * @return {V4}
 */
V4.prototype.set$LFloat32Array$ = function (v) {
	this._.set(v);
	return this;
};

/**
 * @return {!number}
 */
V4.prototype.x$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:322] null access");
		}
		return v;
	}(this._[0]));
};

/**
 * @return {!number}
 */
V4.prototype.y$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:323] null access");
		}
		return v;
	}(this._[1]));
};

/**
 * @return {!number}
 */
V4.prototype.z$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:324] null access");
		}
		return v;
	}(this._[2]));
};

/**
 * @return {!number}
 */
V4.prototype.w$ = function () {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:325] null access");
		}
		return v;
	}(this._[3]));
};

/**
 * @param {!number} val
 * @return {V4}
 */
V4.prototype.x$N = function (val) {
	this._[0] = val;
	return this;
};

/**
 * @param {!number} val
 * @return {V4}
 */
V4.prototype.y$N = function (val) {
	this._[1] = val;
	return this;
};

/**
 * @param {!number} val
 * @return {V4}
 */
V4.prototype.z$N = function (val) {
	this._[2] = val;
	return this;
};

/**
 * @param {!number} val
 * @return {V4}
 */
V4.prototype.w$N = function (val) {
	this._[3] = val;
	return this;
};

/**
 * @param {V4} v
 * @return {!boolean}
 */
V4.prototype.equals$LV4$ = function (v) {
	return this.equals$LV4$N(v, MVQ.EQUAL_EPSILON);
};

/**
 * @param {V4} v
 * @param {!number} eps
 * @return {!boolean}
 */
V4.prototype.equals$LV4$N = function (v, eps) {
	var $math_abs_t;
	return (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:336] null access");
		}
		return v;
	}(v._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:336] null access");
		}
		return v;
	}(this._[0]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:337] null access");
		}
		return v;
	}(v._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:337] null access");
		}
		return v;
	}(this._[1]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:338] null access");
		}
		return v;
	}(v._[2])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:338] null access");
		}
		return v;
	}(this._[2]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:339] null access");
		}
		return v;
	}(v._[3])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:339] null access");
		}
		return v;
	}(this._[3]))) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.add$NNNN = function (x, y, z, w) {
	this._[0] += x;
	this._[1] += y;
	this._[2] += z;
	this._[3] += w;
	return this;
};

/**
 * @param {V4} v
 * @return {V4}
 */
V4.prototype.add$LV4$ = function (v) {
	return this.add$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:346] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:346] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:346] null access");
		}
		return v;
	}(v._[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:346] null access");
		}
		return v;
	}(v._[3])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.prototype.add$AN = function (v) {
	return this.add$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:347] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:347] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:347] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:347] null access");
		}
		return v;
	}(v[3])));
};

/**
 * @param {Float32Array} v
 * @return {V4}
 */
V4.prototype.add$LFloat32Array$ = function (v) {
	return this.add$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:348] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:348] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:348] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:348] null access");
		}
		return v;
	}(v[3])));
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.sub$NNNN = function (x, y, z, w) {
	this._[0] -= x;
	this._[1] -= y;
	this._[2] -= z;
	this._[3] -= w;
	return this;
};

/**
 * @param {V4} v
 * @return {V4}
 */
V4.prototype.sub$LV4$ = function (v) {
	return this.sub$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:354] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:354] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:354] null access");
		}
		return v;
	}(v._[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:354] null access");
		}
		return v;
	}(v._[3])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.prototype.sub$AN = function (v) {
	return this.sub$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:355] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:355] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:355] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:355] null access");
		}
		return v;
	}(v[3])));
};

/**
 * @param {Float32Array} v
 * @return {V4}
 */
V4.prototype.sub$LFloat32Array$ = function (v) {
	return this.sub$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:356] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:356] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:356] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:356] null access");
		}
		return v;
	}(v[3])));
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.mul$NNNN = function (x, y, z, w) {
	this._[0] *= x;
	this._[1] *= y;
	this._[2] *= z;
	this._[3] *= w;
	return this;
};

/**
 * @param {V4} v
 * @return {V4}
 */
V4.prototype.mul$LV4$ = function (v) {
	return this.mul$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:362] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:362] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:362] null access");
		}
		return v;
	}(v._[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:362] null access");
		}
		return v;
	}(v._[3])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.prototype.mul$AN = function (v) {
	return this.mul$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:363] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:363] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:363] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:363] null access");
		}
		return v;
	}(v[3])));
};

/**
 * @param {Float32Array} v
 * @return {V4}
 */
V4.prototype.mul$LFloat32Array$ = function (v) {
	return this.mul$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:364] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:364] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:364] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:364] null access");
		}
		return v;
	}(v[3])));
};

/**
 * @param {!number} s
 * @return {V4}
 */
V4.prototype.mul$N = function (s) {
	this._[0] *= s;
	this._[1] *= s;
	this._[2] *= s;
	this._[3] *= s;
	return this;
};

/**
 * @return {V4}
 */
V4.prototype.neg$ = function () {
	return this.mul$N(- 1);
};

/**
 * @return {V4}
 */
V4.prototype.normalize$ = function () {
	/** @type {!number} */
	var l;
	l = this.len$();
	if (l > 0) {
		return this.mul$N(1 / l);
	} else {
		return this;
	}
};

/**
 * @param {V4} v
 * @return {!number}
 */
V4.prototype.dot$LV4$ = function (v) {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:388] null access");
		}
		return v;
	}(this._[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:388] null access");
		}
		return v;
	}(v._[0])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:388] null access");
		}
		return v;
	}(this._[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:388] null access");
		}
		return v;
	}(v._[1])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:388] null access");
		}
		return v;
	}(this._[2])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:388] null access");
		}
		return v;
	}(v._[2])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:388] null access");
		}
		return v;
	}(this._[3])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:388] null access");
		}
		return v;
	}(v._[3]));
};

/**
 * @return {!number}
 */
V4.prototype.len$ = function () {
	return Math.sqrt(this.len2$());
};

/**
 * @return {!number}
 */
V4.prototype.len2$ = function () {
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	/** @type {undefined|!number} */
	var w;
	(x = this._[0], y = this._[1], z = this._[2], w = this._[3]);
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:397] null access");
		}
		return v;
	}(x)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:397] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:397] null access");
		}
		return v;
	}(y)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:397] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:397] null access");
		}
		return v;
	}(z)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:397] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:397] null access");
		}
		return v;
	}(w)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:397] null access");
		}
		return v;
	}(w));
};

/**
 * @param {V4} v
 * @return {!number}
 */
V4.prototype.dist$LV4$ = function (v) {
	return Math.sqrt(this.dist2$LV4$(v));
};

/**
 * @param {V4} v
 * @return {!number}
 */
V4.prototype.dist2$LV4$ = function (v) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	/** @type {!number} */
	var w;
	x = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:405] null access");
		}
		return v;
	}(v._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:405] null access");
		}
		return v;
	}(this._[0]));
	y = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:406] null access");
		}
		return v;
	}(v._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:406] null access");
		}
		return v;
	}(this._[1]));
	z = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:407] null access");
		}
		return v;
	}(v._[2])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:407] null access");
		}
		return v;
	}(this._[2]));
	w = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:408] null access");
		}
		return v;
	}(v._[3])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:408] null access");
		}
		return v;
	}(this._[3]));
	return x * x + y * y + z * z + w * w;
};

/**
 * @param {V4} v0
 * @param {V4} v1
 * @param {!number} ratio
 * @return {V4}
 */
V4.prototype.lerp$LV4$LV4$N = function (v0, v1, ratio) {
	this._[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:413] null access");
		}
		return v;
	}(v0._[0])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:413] null access");
		}
		return v;
	}(v1._[0])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:413] null access");
		}
		return v;
	}(v0._[0])));
	this._[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:414] null access");
		}
		return v;
	}(v0._[1])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:414] null access");
		}
		return v;
	}(v1._[1])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:414] null access");
		}
		return v;
	}(v0._[1])));
	this._[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:415] null access");
		}
		return v;
	}(v0._[2])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:415] null access");
		}
		return v;
	}(v1._[2])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:415] null access");
		}
		return v;
	}(v0._[2])));
	this._[3] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:416] null access");
		}
		return v;
	}(v0._[3])) + ratio * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:416] null access");
		}
		return v;
	}(v1._[3])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:416] null access");
		}
		return v;
	}(v0._[3])));
	return this;
};

/**
 * @param {M44} m
 * @return {V4}
 */
V4.prototype.transformBy$LM44$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var t;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	/** @type {undefined|!number} */
	var w;
	(a = this.array$(), t = m.array$());
	(x = a[0], y = a[1], z = a[2], w = a[3]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:423] null access");
		}
		return v;
	}(t[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:423] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:423] null access");
		}
		return v;
	}(t[4])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:423] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:423] null access");
		}
		return v;
	}(t[8])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:423] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:423] null access");
		}
		return v;
	}(t[12])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:423] null access");
		}
		return v;
	}(w));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:424] null access");
		}
		return v;
	}(t[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:424] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:424] null access");
		}
		return v;
	}(t[5])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:424] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:424] null access");
		}
		return v;
	}(t[9])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:424] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:424] null access");
		}
		return v;
	}(t[13])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:424] null access");
		}
		return v;
	}(w));
	a[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:425] null access");
		}
		return v;
	}(t[2])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:425] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:425] null access");
		}
		return v;
	}(t[6])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:425] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:425] null access");
		}
		return v;
	}(t[10])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:425] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:425] null access");
		}
		return v;
	}(t[14])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:425] null access");
		}
		return v;
	}(w));
	a[3] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:426] null access");
		}
		return v;
	}(t[3])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:426] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:426] null access");
		}
		return v;
	}(t[7])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:426] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:426] null access");
		}
		return v;
	}(t[11])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:426] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:426] null access");
		}
		return v;
	}(t[15])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:426] null access");
		}
		return v;
	}(w));
	return this;
};

/**
 * class M22 extends Object
 * @constructor
 */
function M22() {
}

M22.prototype = new Object;
/**
 * @constructor
 */
function M22$() {
	this._ = new Float32Array(M22.ELEMS);
};

M22$.prototype = new M22;

/**
 * @constructor
 * @param {M22} m
 */
function M22$LM22$(m) {
	this._ = new Float32Array(M22.ELEMS);
	this.set$LM22$(m);
};

M22$LM22$.prototype = new M22;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M22$AN(m) {
	this._ = new Float32Array(M22.ELEMS);
	this.set$AN(m);
};

M22$AN.prototype = new M22;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M22$LFloat32Array$(m) {
	this._ = new Float32Array(M22.ELEMS);
	this.set$LFloat32Array$(m);
};

M22$LFloat32Array$.prototype = new M22;

/**
 * @constructor
 * @param {!number} m00
 * @param {!number} m01
 * @param {!number} m10
 * @param {!number} m11
 */
function M22$NNNN(m00, m01, m10, m11) {
	/** @type {Float32Array} */
	var a;
	this._ = new Float32Array(M22.ELEMS);
	a = this.array$();
	a[0] = m00;
	a[1] = m10;
	a[2] = m01;
	a[3] = m11;
};

M22$NNNN.prototype = new M22;

/**
 * @constructor
 * @param {V2} v0
 * @param {V2} v1
 */
function M22$LV2$LV2$(v0, v1) {
	this._ = new Float32Array(M22.ELEMS);
	this.set$LV2$LV2$(v0, v1);
};

M22$LV2$LV2$.prototype = new M22;

/**
 * @constructor
 * @param {M33} m
 */
function M22$LM33$(m) {
	this._ = new Float32Array(M22.ELEMS);
	this.set$LM33$(m);
};

M22$LM33$.prototype = new M22;

/**
 * @constructor
 * @param {M44} m
 */
function M22$LM44$(m) {
	this._ = new Float32Array(M22.ELEMS);
	this.set$LM44$(m);
};

M22$LM44$.prototype = new M22;

/**
 * @return {Float32Array}
 */
M22.prototype.array$ = function () {
	return this._;
};

/**
 * @param {!number} m22
 * @return {M33}
 */
M22.prototype.m33$N = function (m22) {
	return new M33$LM22$N(this, m22);
};

/**
 * @param {!number} m22
 * @param {!number} m33
 * @return {M44}
 */
M22.prototype.m44$NN = function (m22, m33) {
	return new M44$LM22$NN(this, m22, m33);
};

/**
 * @param {M33} m
 * @return {M22}
 */
M22.prototype.set$LM33$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[1];
	a[2] = b[3];
	a[3] = b[4];
	return this;
};

/**
 * @param {M44} m
 * @return {M22}
 */
M22.prototype.set$LM44$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[1];
	a[2] = b[4];
	a[3] = b[5];
	return this;
};

/**
 * @return {M22}
 */
M22.prototype.clone$ = function () {
	return new M22$LM22$(this);
};

/**
 * @return {M22}
 */
M22.prototype.setZero$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = this.array$();
	for (i = 0; i < M22.ELEMS; ++ i) {
		a[i] = 0;
	}
	return this;
};

/**
 * @return {M22}
 */
M22.prototype.setIdentity$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = this.array$();
	for (i = 0; i < M22.ELEMS; ++ i) {
		a[i] = (i % (M22.ROWS + 1) === 0 ? 1 : 0);
	}
	return this;
};

/**
 * @param {!number} m00
 * @param {!number} m01
 * @param {!number} m10
 * @param {!number} m11
 * @return {M22}
 */
M22.prototype.set$NNNN = function (m00, m01, m10, m11) {
	/** @type {Float32Array} */
	var a;
	a = this.array$();
	a[0] = m00;
	a[1] = m10;
	a[2] = m01;
	a[3] = m11;
	return this;
};

/**
 * @param {V2} v0
 * @param {V2} v1
 * @return {M22}
 */
M22.prototype.set$LV2$LV2$ = function (v0, v1) {
	this._.set(v0._, 0);
	this._.set(v1._, 2);
	return this;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.set$LM22$ = function (m) {
	this._.set(m._);
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @return {M22}
 */
M22.prototype.set$AN = function (m) {
	this._.set(m);
	return this;
};

/**
 * @param {Float32Array} m
 * @return {M22}
 */
M22.prototype.set$LFloat32Array$ = function (m) {
	this._.set(m);
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @param {!number} offs
 * @return {M22}
 */
M22.prototype.set$ANN = function (m, offs) {
	this._.set(m, offs);
	return this;
};

/**
 * @param {Float32Array} m
 * @param {!number} offs
 * @return {M22}
 */
M22.prototype.set$LFloat32Array$N = function (m, offs) {
	this._.set(m, offs);
	return this;
};

/**
 * @param {M22} m
 * @return {!boolean}
 */
M22.prototype.equals$LM22$ = function (m) {
	return this.equals$LM22$N(m, MVQ.EQUAL_EPSILON);
};

/**
 * @param {M22} m
 * @param {!number} eps
 * @return {!boolean}
 */
M22.prototype.equals$LM22$N = function (m, eps) {
	var $math_abs_t;
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M22.ELEMS; ++ i) {
		if ((($math_abs_t = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:500] null access");
			}
			return v;
		}(b[i])) - (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:500] null access");
			}
			return v;
		}(a[i]))) >= 0 ? $math_abs_t : -$math_abs_t) >= eps) {
			return false;
		}
	}
	return true;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.add$LM22$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M22.ELEMS; ++ i) {
		a[i] += b[i];
	}
	return this;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.sub$LM22$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M22.ELEMS; ++ i) {
		a[i] -= b[i];
	}
	return this;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.mul$LM22$ = function (m) {
	return this.mul$LM22$LM22$(this, m);
};

/**
 * @param {M22} m0
 * @param {M22} m1
 * @return {M22}
 */
M22.prototype.mul$LM22$LM22$ = function (m0, m1) {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a00;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a01;
	/** @type {undefined|!number} */
	var a11;
	/** @type {Float32Array} */
	var b;
	/** @type {undefined|!number} */
	var b00;
	/** @type {undefined|!number} */
	var b10;
	/** @type {undefined|!number} */
	var b01;
	/** @type {undefined|!number} */
	var b11;
	a = m0.array$();
	(a00 = a[0], a10 = a[1]);
	(a01 = a[2], a11 = a[3]);
	b = m1.array$();
	(b00 = b[0], b10 = b[1]);
	(b01 = b[2], b11 = b[3]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:524] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:524] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:524] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:524] null access");
		}
		return v;
	}(b10));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:525] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:525] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:525] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:525] null access");
		}
		return v;
	}(b10));
	a[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:526] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:526] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:526] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:526] null access");
		}
		return v;
	}(b11));
	a[3] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:527] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:527] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:527] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:527] null access");
		}
		return v;
	}(b11));
	return this;
};

/**
 * @return {M22}
 */
M22.prototype.transpose$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a10;
	a = this.array$();
	a10 = a[1];
	a[1] = a[2];
	a[2] = a10;
	return this;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.transpose$LM22$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[2];
	a[2] = b[1];
	a[3] = b[3];
	return this;
};

/**
 * @return {!number}
 */
M22.prototype.det$ = function () {
	/** @type {Float32Array} */
	var a;
	a = this.array$();
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:549] null access");
		}
		return v;
	}(a[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:549] null access");
		}
		return v;
	}(a[3])) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:549] null access");
		}
		return v;
	}(a[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:549] null access");
		}
		return v;
	}(a[2]));
};

/**
 * @return {M22}
 */
M22.prototype.inverse$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a00;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a01;
	/** @type {undefined|!number} */
	var a11;
	/** @type {!number} */
	var d;
	/** @type {!number} */
	var invDet;
	a = this.array$();
	(a00 = a[0], a10 = a[1], a01 = a[2], a11 = a[3]);
	d = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:555] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:555] null access");
		}
		return v;
	}(a11)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:555] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:555] null access");
		}
		return v;
	}(a01));
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:558] null access");
		}
		return v;
	}(a11)) * invDet;
	a[1] = - a10 * invDet;
	a[2] = - a01 * invDet;
	a[3] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:561] null access");
		}
		return v;
	}(a00)) * invDet;
	return this;
};

/**
 * @param {!number} s
 * @return {M22}
 */
M22.prototype.setScale$N = function (s) {
	return this.setScale$NN(s, s);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {M22}
 */
M22.prototype.setScale$NN = function (x, y) {
	this._[0] = x;
	this._[1] = this._[2] = 0;
	this._[3] = y;
	return this;
};

/**
 * @param {V2} v
 * @return {M22}
 */
M22.prototype.setScale$LV2$ = function (v) {
	return this.setScale$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:572] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:572] null access");
		}
		return v;
	}(v._[1])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {M22}
 */
M22.prototype.setScale$AN = function (v) {
	return this.setScale$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:573] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:573] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {Float32Array} v
 * @return {M22}
 */
M22.prototype.setScale$LFloat32Array$ = function (v) {
	return this.setScale$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:574] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:574] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {!number} rad
 * @return {M22}
 */
M22.prototype.setRotate$N = function (rad) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var c;
	/** @type {!number} */
	var s;
	a = this.array$();
	(c = Math.cos(rad), s = Math.sin(rad));
	a[0] = c;
	a[1] = s;
	a[2] = - s;
	a[3] = c;
	return this;
};

/**
 * class M33 extends Object
 * @constructor
 */
function M33() {
}

M33.prototype = new Object;
/**
 * @constructor
 */
function M33$() {
	this._ = new Float32Array(M33.ELEMS);
};

M33$.prototype = new M33;

/**
 * @constructor
 * @param {M33} m
 */
function M33$LM33$(m) {
	this._ = new Float32Array(M33.ELEMS);
	this.set$LM33$(m);
};

M33$LM33$.prototype = new M33;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M33$AN(m) {
	this._ = new Float32Array(M33.ELEMS);
	this.set$AN(m);
};

M33$AN.prototype = new M33;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M33$LFloat32Array$(m) {
	this._ = new Float32Array(M33.ELEMS);
	this.set$LFloat32Array$(m);
};

M33$LFloat32Array$.prototype = new M33;

/**
 * @constructor
 * @param {!number} m00
 * @param {!number} m01
 * @param {!number} m02
 * @param {!number} m10
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m20
 * @param {!number} m21
 * @param {!number} m22
 */
function M33$NNNNNNNNN(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	/** @type {Float32Array} */
	var a;
	this._ = new Float32Array(M33.ELEMS);
	a = this.array$();
	a[0] = m00;
	a[1] = m10;
	a[2] = m20;
	a[3] = m01;
	a[4] = m11;
	a[5] = m21;
	a[5] = m02;
	a[7] = m12;
	a[8] = m22;
};

M33$NNNNNNNNN.prototype = new M33;

/**
 * @constructor
 * @param {V3} v0
 * @param {V3} v1
 * @param {V3} v2
 */
function M33$LV3$LV3$LV3$(v0, v1, v2) {
	this._ = new Float32Array(M33.ELEMS);
	this.set$LV3$LV3$LV3$(v0, v1, v2);
};

M33$LV3$LV3$LV3$.prototype = new M33;

/**
 * @constructor
 * @param {M22} m
 * @param {!number} m22
 */
function M33$LM22$N(m, m22) {
	this._ = new Float32Array(M33.ELEMS);
	this.set$LM22$N(m, m22);
};

M33$LM22$N.prototype = new M33;

/**
 * @constructor
 * @param {M44} m
 */
function M33$LM44$(m) {
	this._ = new Float32Array(M33.ELEMS);
	this.set$LM44$(m);
};

M33$LM44$.prototype = new M33;

/**
 * @return {Float32Array}
 */
M33.prototype.array$ = function () {
	return this._;
};

/**
 * @return {M22}
 */
M33.prototype.m22$ = function () {
	return new M22$LM33$(this);
};

/**
 * @param {!number} m33
 * @return {M44}
 */
M33.prototype.m44$N = function (m33) {
	return new M44$LM33$N(this, m33);
};

/**
 * @param {M22} m
 * @param {!number} m22
 * @return {M33}
 */
M33.prototype.set$LM22$N = function (m, m22) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[1];
	a[2] = 0;
	a[3] = b[2];
	a[4] = b[3];
	a[5] = 0;
	a[6] = 0;
	a[7] = 0;
	a[8] = m22;
	return this;
};

/**
 * @param {M44} m
 * @return {M33}
 */
M33.prototype.set$LM44$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[1];
	a[2] = b[2];
	a[3] = b[4];
	a[4] = b[5];
	a[5] = b[6];
	a[6] = b[8];
	a[7] = b[9];
	a[8] = b[10];
	return this;
};

/**
 * @return {M33}
 */
M33.prototype.clone$ = function () {
	return new M33$LM33$(this);
};

/**
 * @return {M33}
 */
M33.prototype.setZero$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = this.array$();
	for (i = 0; i < M33.ELEMS; ++ i) {
		a[i] = 0;
	}
	return this;
};

/**
 * @return {M33}
 */
M33.prototype.setIdentity$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = this.array$();
	for (i = 0; i < M33.ELEMS; ++ i) {
		a[i] = (i % (M33.ROWS + 1) === 0 ? 1 : 0);
	}
	return this;
};

/**
 * @param {!number} m00
 * @param {!number} m01
 * @param {!number} m02
 * @param {!number} m10
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m20
 * @param {!number} m21
 * @param {!number} m22
 * @return {M33}
 */
M33.prototype.set$NNNNNNNNN = function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	/** @type {Float32Array} */
	var a;
	a = this.array$();
	a[0] = m00;
	a[1] = m10;
	a[2] = m20;
	a[3] = m01;
	a[4] = m11;
	a[5] = m21;
	a[6] = m02;
	a[7] = m12;
	a[8] = m22;
	return this;
};

/**
 * @param {V3} v0
 * @param {V3} v1
 * @param {V3} v2
 * @return {M33}
 */
M33.prototype.set$LV3$LV3$LV3$ = function (v0, v1, v2) {
	this._.set(v0._, 0);
	this._.set(v1._, 3);
	this._.set(v2._, 6);
	return this;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.set$LM33$ = function (m) {
	this._.set(m._);
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @return {M33}
 */
M33.prototype.set$AN = function (m) {
	this._.set(m);
	return this;
};

/**
 * @param {Float32Array} m
 * @return {M33}
 */
M33.prototype.set$LFloat32Array$ = function (m) {
	this._.set(m);
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @param {!number} offs
 * @return {M33}
 */
M33.prototype.set$ANN = function (m, offs) {
	this._.set(m, offs);
	return this;
};

/**
 * @param {Float32Array} m
 * @param {!number} offs
 * @return {M33}
 */
M33.prototype.set$LFloat32Array$N = function (m, offs) {
	this._.set(m, offs);
	return this;
};

/**
 * @param {M33} m
 * @return {!boolean}
 */
M33.prototype.equals$LM33$ = function (m) {
	return this.equals$LM33$N(m, MVQ.EQUAL_EPSILON);
};

/**
 * @param {M33} m
 * @param {!number} eps
 * @return {!boolean}
 */
M33.prototype.equals$LM33$N = function (m, eps) {
	var $math_abs_t;
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M33.ELEMS; ++ i) {
		if ((($math_abs_t = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:665] null access");
			}
			return v;
		}(b[i])) - (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:665] null access");
			}
			return v;
		}(a[i]))) >= 0 ? $math_abs_t : -$math_abs_t) >= eps) {
			return false;
		}
	}
	return true;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.add$LM33$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M33.ELEMS; ++ i) {
		a[i] += b[i];
	}
	return this;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.sub$LM33$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M33.ELEMS; ++ i) {
		a[i] -= b[i];
	}
	return this;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.mul$LM33$ = function (m) {
	return this.mul$LM33$LM33$(this, m);
};

/**
 * @param {M33} m0
 * @param {M33} m1
 * @return {M33}
 */
M33.prototype.mul$LM33$LM33$ = function (m0, m1) {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a00;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a01;
	/** @type {undefined|!number} */
	var a11;
	/** @type {undefined|!number} */
	var a21;
	/** @type {undefined|!number} */
	var a02;
	/** @type {undefined|!number} */
	var a12;
	/** @type {undefined|!number} */
	var a22;
	/** @type {Float32Array} */
	var b;
	/** @type {undefined|!number} */
	var b00;
	/** @type {undefined|!number} */
	var b10;
	/** @type {undefined|!number} */
	var b20;
	/** @type {undefined|!number} */
	var b01;
	/** @type {undefined|!number} */
	var b11;
	/** @type {undefined|!number} */
	var b21;
	/** @type {undefined|!number} */
	var b02;
	/** @type {undefined|!number} */
	var b12;
	/** @type {undefined|!number} */
	var b22;
	a = m0.array$();
	(a00 = a[0], a10 = a[1], a20 = a[2]);
	(a01 = a[3], a11 = a[4], a21 = a[5]);
	(a02 = a[6], a12 = a[7], a22 = a[8]);
	b = m1.array$();
	(b00 = b[0], b10 = b[1], b20 = b[2]);
	(b01 = b[3], b11 = b[4], b21 = b[5]);
	(b02 = b[6], b12 = b[7], b22 = b[8]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:691] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:691] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:691] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:691] null access");
		}
		return v;
	}(b10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:691] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:691] null access");
		}
		return v;
	}(b20));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:692] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:692] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:692] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:692] null access");
		}
		return v;
	}(b10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:692] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:692] null access");
		}
		return v;
	}(b20));
	a[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:693] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:693] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:693] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:693] null access");
		}
		return v;
	}(b10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:693] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:693] null access");
		}
		return v;
	}(b20));
	a[3] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:694] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:694] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:694] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:694] null access");
		}
		return v;
	}(b11)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:694] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:694] null access");
		}
		return v;
	}(b21));
	a[4] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:695] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:695] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:695] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:695] null access");
		}
		return v;
	}(b11)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:695] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:695] null access");
		}
		return v;
	}(b21));
	a[5] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:696] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:696] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:696] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:696] null access");
		}
		return v;
	}(b11)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:696] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:696] null access");
		}
		return v;
	}(b21));
	a[6] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:697] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:697] null access");
		}
		return v;
	}(b02)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:697] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:697] null access");
		}
		return v;
	}(b12)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:697] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:697] null access");
		}
		return v;
	}(b22));
	a[7] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:698] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:698] null access");
		}
		return v;
	}(b02)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:698] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:698] null access");
		}
		return v;
	}(b12)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:698] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:698] null access");
		}
		return v;
	}(b22));
	a[8] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:699] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:699] null access");
		}
		return v;
	}(b02)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:699] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:699] null access");
		}
		return v;
	}(b12)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:699] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:699] null access");
		}
		return v;
	}(b22));
	return this;
};

/**
 * @return {M33}
 */
M33.prototype.transpose$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a21;
	a = this.array$();
	(a10 = a[1], a20 = a[2], a21 = a[5]);
	a[1] = a[3];
	a[2] = a[6];
	a[3] = a10;
	a[5] = a[7];
	a[6] = a20;
	a[7] = a21;
	return this;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.transpose$LM33$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[3];
	a[2] = b[6];
	a[3] = b[1];
	a[4] = b[4];
	a[5] = b[7];
	a[6] = b[2];
	a[7] = b[5];
	a[8] = b[8];
	return this;
};

/**
 * @return {!number}
 */
M33.prototype.det$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a00;
	/** @type {undefined|!number} */
	var a01;
	/** @type {undefined|!number} */
	var a02;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a11;
	/** @type {undefined|!number} */
	var a12;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a21;
	/** @type {undefined|!number} */
	var a22;
	a = this.array$();
	(a00 = a[0], a01 = a[1], a02 = a[2]);
	(a10 = a[3], a11 = a[4], a12 = a[5]);
	(a20 = a[6], a21 = a[7], a22 = a[8]);
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a00)) * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a11)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a21))) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a01)) * (- a22 * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a20))) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a02)) * ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a10)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:733] null access");
		}
		return v;
	}(a20)));
};

/**
 * @return {M33}
 */
M33.prototype.inverse$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a00;
	/** @type {undefined|!number} */
	var a01;
	/** @type {undefined|!number} */
	var a02;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a11;
	/** @type {undefined|!number} */
	var a12;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a21;
	/** @type {undefined|!number} */
	var a22;
	/** @type {!number} */
	var b01;
	/** @type {!number} */
	var b11;
	/** @type {!number} */
	var b21;
	/** @type {!number} */
	var d;
	/** @type {!number} */
	var invDet;
	a = this.array$();
	(a00 = a[0], a01 = a[1], a02 = a[2]);
	(a10 = a[3], a11 = a[4], a12 = a[5]);
	(a20 = a[6], a21 = a[7], a22 = a[8]);
	b01 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:741] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:741] null access");
		}
		return v;
	}(a11)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:741] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:741] null access");
		}
		return v;
	}(a21));
	b11 = - a22 * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:742] null access");
		}
		return v;
	}(a10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:742] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:742] null access");
		}
		return v;
	}(a20));
	b21 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:743] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:743] null access");
		}
		return v;
	}(a10)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:743] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:743] null access");
		}
		return v;
	}(a20));
	d = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:745] null access");
		}
		return v;
	}(a00)) * b01 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:745] null access");
		}
		return v;
	}(a01)) * b11 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:745] null access");
		}
		return v;
	}(a02)) * b21;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	a[0] = b01 * invDet;
	a[1] = (- a22 * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:751] null access");
		}
		return v;
	}(a01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:751] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:751] null access");
		}
		return v;
	}(a21))) * invDet;
	a[2] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:752] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:752] null access");
		}
		return v;
	}(a01)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:752] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:752] null access");
		}
		return v;
	}(a11))) * invDet;
	a[3] = b11 * invDet;
	a[4] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:754] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:754] null access");
		}
		return v;
	}(a00)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:754] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:754] null access");
		}
		return v;
	}(a20))) * invDet;
	a[5] = (- a12 * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:755] null access");
		}
		return v;
	}(a00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:755] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:755] null access");
		}
		return v;
	}(a10))) * invDet;
	a[6] = b21 * invDet;
	a[7] = (- a21 * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:757] null access");
		}
		return v;
	}(a00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:757] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:757] null access");
		}
		return v;
	}(a20))) * invDet;
	a[8] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:758] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:758] null access");
		}
		return v;
	}(a00)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:758] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:758] null access");
		}
		return v;
	}(a10))) * invDet;
	return this;
};

/**
 * @param {!number} s
 * @return {M33}
 */
M33.prototype.setScale$N = function (s) {
	return this.setScale$NNN(s, s, s);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M33}
 */
M33.prototype.setScale$NNN = function (x, y, z) {
	this.setZero$();
	this._[0] = x;
	this._[4] = y;
	this._[8] = z;
	return this;
};

/**
 * @param {V3} v
 * @return {M33}
 */
M33.prototype.setScale$LV3$ = function (v) {
	return this.setScale$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:771] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:771] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:771] null access");
		}
		return v;
	}(v._[2])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {M33}
 */
M33.prototype.setScale$AN = function (v) {
	return this.setScale$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:772] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:772] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:772] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {Float32Array} v
 * @return {M33}
 */
M33.prototype.setScale$LFloat32Array$ = function (v) {
	return this.setScale$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:773] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:773] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:773] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {!number} rad
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M33}
 */
M33.prototype.setRotate$NNNN = function (rad, x, y, z) {
	/** @type {!number} */
	var l;
	/** @type {!number} */
	var il;
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var c;
	/** @type {!number} */
	var s;
	/** @type {!number} */
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	a = this.array$();
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	a[0] = x * x * _c + c;
	a[1] = y * x * _c + z * s;
	a[2] = x * z * _c - y * s;
	a[3] = x * y * _c - z * s;
	a[4] = y * y * _c + c;
	a[5] = y * z * _c + x * s;
	a[6] = x * z * _c + y * s;
	a[7] = y * z * _c - x * s;
	a[8] = z * z * _c + c;
	return this;
};

/**
 * @param {!number} rad
 * @param {V3} a
 * @return {M33}
 */
M33.prototype.setRotate$NLV3$ = function (rad, a) {
	return this.setRotate$NNNN(rad, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:796] null access");
		}
		return v;
	}(a._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:796] null access");
		}
		return v;
	}(a._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:796] null access");
		}
		return v;
	}(a._[2])));
};

/**
 * @param {!number} rad
 * @param {Array.<undefined|!number>} a
 * @return {M33}
 */
M33.prototype.setRotate$NAN = function (rad, a) {
	return this.setRotate$NNNN(rad, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:797] null access");
		}
		return v;
	}(a[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:797] null access");
		}
		return v;
	}(a[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:797] null access");
		}
		return v;
	}(a[2])));
};

/**
 * @param {!number} rad
 * @param {Float32Array} a
 * @return {M33}
 */
M33.prototype.setRotate$NLFloat32Array$ = function (rad, a) {
	return this.setRotate$NNNN(rad, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:798] null access");
		}
		return v;
	}(a[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:798] null access");
		}
		return v;
	}(a[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:798] null access");
		}
		return v;
	}(a[2])));
};

/**
 * @param {!number} rad
 * @return {M33}
 */
M33.prototype.setRotateX$N = function (rad) {
	return this.setRotate$NNNN(rad, 1, 0, 0);
};

/**
 * @param {!number} rad
 * @return {M33}
 */
M33.prototype.setRotateY$N = function (rad) {
	return this.setRotate$NNNN(rad, 0, 1, 0);
};

/**
 * @param {!number} rad
 * @return {M33}
 */
M33.prototype.setRotateZ$N = function (rad) {
	return this.setRotate$NNNN(rad, 0, 0, 1);
};

/**
 * class M44 extends Object
 * @constructor
 */
function M44() {
}

M44.prototype = new Object;
/**
 * @constructor
 */
function M44$() {
	this._ = new Float32Array(M44.ELEMS);
};

M44$.prototype = new M44;

/**
 * @constructor
 * @param {M44} m
 */
function M44$LM44$(m) {
	this._ = new Float32Array(M44.ELEMS);
	this.set$LM44$(m);
};

M44$LM44$.prototype = new M44;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M44$AN(m) {
	this._ = new Float32Array(M44.ELEMS);
	this.set$AN(m);
};

M44$AN.prototype = new M44;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M44$LFloat32Array$(m) {
	this._ = new Float32Array(M44.ELEMS);
	this.set$LFloat32Array$(m);
};

M44$LFloat32Array$.prototype = new M44;

/**
 * @constructor
 * @param {!number} m00
 * @param {!number} m01
 * @param {!number} m02
 * @param {!number} m03
 * @param {!number} m10
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m13
 * @param {!number} m20
 * @param {!number} m21
 * @param {!number} m22
 * @param {!number} m23
 * @param {!number} m30
 * @param {!number} m31
 * @param {!number} m32
 * @param {!number} m33
 */
function M44$NNNNNNNNNNNNNNNN(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	/** @type {Float32Array} */
	var a;
	this._ = new Float32Array(M44.ELEMS);
	a = this.array$();
	a[0] = m00;
	a[1] = m10;
	a[2] = m20;
	a[3] = m30;
	a[4] = m01;
	a[5] = m11;
	a[6] = m21;
	a[7] = m31;
	a[8] = m02;
	a[9] = m12;
	a[10] = m22;
	a[11] = m32;
	a[12] = m03;
	a[13] = m13;
	a[14] = m23;
	a[15] = m33;
};

M44$NNNNNNNNNNNNNNNN.prototype = new M44;

/**
 * @constructor
 * @param {V4} v0
 * @param {V4} v1
 * @param {V4} v2
 * @param {V4} v3
 */
function M44$LV4$LV4$LV4$LV4$(v0, v1, v2, v3) {
	this._ = new Float32Array(M44.ELEMS);
	this.set$LV4$LV4$LV4$LV4$(v0, v1, v2, v3);
};

M44$LV4$LV4$LV4$LV4$.prototype = new M44;

/**
 * @constructor
 * @param {M22} m
 * @param {!number} m22
 * @param {!number} m33
 */
function M44$LM22$NN(m, m22, m33) {
	this._ = new Float32Array(M44.ELEMS);
	this.set$LM22$NN(m, m22, m33);
};

M44$LM22$NN.prototype = new M44;

/**
 * @constructor
 * @param {M33} m
 * @param {!number} m33
 */
function M44$LM33$N(m, m33) {
	this._ = new Float32Array(M44.ELEMS);
	this.set$LM33$N(m, m33);
};

M44$LM33$N.prototype = new M44;

/**
 * @return {Float32Array}
 */
M44.prototype.array$ = function () {
	return this._;
};

/**
 * @return {M22}
 */
M44.prototype.m22$ = function () {
	return new M22$LM44$(this);
};

/**
 * @param {!number} m33
 * @return {M33}
 */
M44.prototype.m33$N = function (m33) {
	return new M33$LM44$(this);
};

/**
 * @param {M22} m
 * @param {!number} m22
 * @param {!number} m33
 * @return {M44}
 */
M44.prototype.set$LM22$NN = function (m, m22, m33) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[1];
	a[2] = 0;
	a[3] = 0;
	a[4] = b[2];
	a[5] = b[3];
	a[6] = 0;
	a[7] = 0;
	a[8] = 0;
	a[9] = 0;
	a[10] = m22;
	a[11] = 0;
	a[12] = 0;
	a[13] = 0;
	a[14] = 0;
	a[15] = m33;
	return this;
};

/**
 * @param {M33} m
 * @param {!number} m33
 * @return {M44}
 */
M44.prototype.set$LM33$N = function (m, m33) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[1];
	a[2] = b[2];
	a[3] = 0;
	a[4] = b[3];
	a[5] = b[4];
	a[6] = b[5];
	a[7] = 0;
	a[8] = b[6];
	a[9] = b[7];
	a[10] = b[8];
	a[11] = 0;
	a[12] = 0;
	a[13] = 0;
	a[14] = 0;
	a[15] = m33;
	return this;
};

/**
 * @return {M44}
 */
M44.prototype.clone$ = function () {
	return new M44$LM44$(this);
};

/**
 * @return {M44}
 */
M44.prototype.setZero$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = this.array$();
	for (i = 0; i < M44.ELEMS; ++ i) {
		a[i] = 0;
	}
	return this;
};

/**
 * @return {M44}
 */
M44.prototype.setIdentity$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = this.array$();
	for (i = 0; i < M44.ELEMS; ++ i) {
		a[i] = (i % (M44.ROWS + 1) === 0 ? 1 : 0);
	}
	return this;
};

/**
 * @param {!number} m00
 * @param {!number} m01
 * @param {!number} m02
 * @param {!number} m03
 * @param {!number} m10
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m13
 * @param {!number} m20
 * @param {!number} m21
 * @param {!number} m22
 * @param {!number} m23
 * @param {!number} m30
 * @param {!number} m31
 * @param {!number} m32
 * @param {!number} m33
 * @return {M44}
 */
M44.prototype.set$NNNNNNNNNNNNNNNN = function (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	/** @type {Float32Array} */
	var a;
	a = this.array$();
	a[0] = m00;
	a[1] = m10;
	a[2] = m20;
	a[3] = m30;
	a[4] = m01;
	a[5] = m11;
	a[6] = m21;
	a[7] = m31;
	a[8] = m02;
	a[9] = m12;
	a[10] = m22;
	a[11] = m32;
	a[12] = m03;
	a[13] = m13;
	a[14] = m23;
	a[15] = m33;
	return this;
};

/**
 * @param {V4} v0
 * @param {V4} v1
 * @param {V4} v2
 * @param {V4} v3
 * @return {M44}
 */
M44.prototype.set$LV4$LV4$LV4$LV4$ = function (v0, v1, v2, v3) {
	this._.set(v0._, 0);
	this._.set(v1._, 4);
	this._.set(v2._, 8);
	this._.set(v3._, 12);
	return this;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.set$LM44$ = function (m) {
	this._.set(m._);
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @return {M44}
 */
M44.prototype.set$AN = function (m) {
	this._.set(m);
	return this;
};

/**
 * @param {Float32Array} m
 * @return {M44}
 */
M44.prototype.set$LFloat32Array$ = function (m) {
	this._.set(m);
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @param {!number} offs
 * @return {M44}
 */
M44.prototype.set$ANN = function (m, offs) {
	this._.set(m, offs);
	return this;
};

/**
 * @param {Float32Array} m
 * @param {!number} offs
 * @return {M44}
 */
M44.prototype.set$LFloat32Array$N = function (m, offs) {
	this._.set(m, offs);
	return this;
};

/**
 * @param {M44} m
 * @return {!boolean}
 */
M44.prototype.equals$LM44$ = function (m) {
	return this.equals$LM44$N(m, MVQ.EQUAL_EPSILON);
};

/**
 * @param {M44} m
 * @param {!number} eps
 * @return {!boolean}
 */
M44.prototype.equals$LM44$N = function (m, eps) {
	var $math_abs_t;
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M44.ELEMS; ++ i) {
		if ((($math_abs_t = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:890] null access");
			}
			return v;
		}(b[i])) - (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:890] null access");
			}
			return v;
		}(a[i]))) >= 0 ? $math_abs_t : -$math_abs_t) >= eps) {
			return false;
		}
	}
	return true;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.add$LM44$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M44.ELEMS; ++ i) {
		a[i] += b[i];
	}
	return this;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.sub$LM44$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = m.array$());
	for (i = 0; i < M44.ELEMS; ++ i) {
		a[i] -= b[i];
	}
	return this;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.mul$LM44$ = function (m) {
	return this.mul$LM44$LM44$(this, m);
};

/**
 * @param {M44} m0
 * @param {M44} m1
 * @return {M44}
 */
M44.prototype.mul$LM44$LM44$ = function (m0, m1) {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a00;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a30;
	/** @type {undefined|!number} */
	var a01;
	/** @type {undefined|!number} */
	var a11;
	/** @type {undefined|!number} */
	var a21;
	/** @type {undefined|!number} */
	var a31;
	/** @type {undefined|!number} */
	var a02;
	/** @type {undefined|!number} */
	var a12;
	/** @type {undefined|!number} */
	var a22;
	/** @type {undefined|!number} */
	var a32;
	/** @type {undefined|!number} */
	var a03;
	/** @type {undefined|!number} */
	var a13;
	/** @type {undefined|!number} */
	var a23;
	/** @type {undefined|!number} */
	var a33;
	/** @type {Float32Array} */
	var b;
	/** @type {undefined|!number} */
	var b00;
	/** @type {undefined|!number} */
	var b10;
	/** @type {undefined|!number} */
	var b20;
	/** @type {undefined|!number} */
	var b30;
	/** @type {undefined|!number} */
	var b01;
	/** @type {undefined|!number} */
	var b11;
	/** @type {undefined|!number} */
	var b21;
	/** @type {undefined|!number} */
	var b31;
	/** @type {undefined|!number} */
	var b02;
	/** @type {undefined|!number} */
	var b12;
	/** @type {undefined|!number} */
	var b22;
	/** @type {undefined|!number} */
	var b32;
	/** @type {undefined|!number} */
	var b03;
	/** @type {undefined|!number} */
	var b13;
	/** @type {undefined|!number} */
	var b23;
	/** @type {undefined|!number} */
	var b33;
	a = m0.array$();
	(a00 = a[0], a10 = a[1], a20 = a[2], a30 = a[3]);
	(a01 = a[4], a11 = a[5], a21 = a[6], a31 = a[7]);
	(a02 = a[8], a12 = a[9], a22 = a[10], a32 = a[11]);
	(a03 = a[12], a13 = a[13], a23 = a[14], a33 = a[15]);
	b = m1.array$();
	(b00 = b[0], b10 = b[1], b20 = b[2], b30 = b[3]);
	(b01 = b[4], b11 = b[5], b21 = b[6], b31 = b[7]);
	(b02 = b[8], b12 = b[9], b22 = b[10], b32 = b[11]);
	(b03 = b[12], b13 = b[13], b23 = b[14], b33 = b[15]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:918] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:918] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:918] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:918] null access");
		}
		return v;
	}(b10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:918] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:918] null access");
		}
		return v;
	}(b20)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:918] null access");
		}
		return v;
	}(a03)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:918] null access");
		}
		return v;
	}(b30));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:919] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:919] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:919] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:919] null access");
		}
		return v;
	}(b10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:919] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:919] null access");
		}
		return v;
	}(b20)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:919] null access");
		}
		return v;
	}(a13)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:919] null access");
		}
		return v;
	}(b30));
	a[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:920] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:920] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:920] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:920] null access");
		}
		return v;
	}(b10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:920] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:920] null access");
		}
		return v;
	}(b20)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:920] null access");
		}
		return v;
	}(a23)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:920] null access");
		}
		return v;
	}(b30));
	a[3] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:921] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:921] null access");
		}
		return v;
	}(b00)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:921] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:921] null access");
		}
		return v;
	}(b10)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:921] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:921] null access");
		}
		return v;
	}(b20)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:921] null access");
		}
		return v;
	}(a33)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:921] null access");
		}
		return v;
	}(b30));
	a[4] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:922] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:922] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:922] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:922] null access");
		}
		return v;
	}(b11)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:922] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:922] null access");
		}
		return v;
	}(b21)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:922] null access");
		}
		return v;
	}(a03)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:922] null access");
		}
		return v;
	}(b31));
	a[5] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:923] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:923] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:923] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:923] null access");
		}
		return v;
	}(b11)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:923] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:923] null access");
		}
		return v;
	}(b21)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:923] null access");
		}
		return v;
	}(a13)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:923] null access");
		}
		return v;
	}(b31));
	a[6] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:924] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:924] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:924] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:924] null access");
		}
		return v;
	}(b11)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:924] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:924] null access");
		}
		return v;
	}(b21)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:924] null access");
		}
		return v;
	}(a23)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:924] null access");
		}
		return v;
	}(b31));
	a[7] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:925] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:925] null access");
		}
		return v;
	}(b01)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:925] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:925] null access");
		}
		return v;
	}(b11)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:925] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:925] null access");
		}
		return v;
	}(b21)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:925] null access");
		}
		return v;
	}(a33)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:925] null access");
		}
		return v;
	}(b31));
	a[8] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:926] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:926] null access");
		}
		return v;
	}(b02)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:926] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:926] null access");
		}
		return v;
	}(b12)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:926] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:926] null access");
		}
		return v;
	}(b22)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:926] null access");
		}
		return v;
	}(a03)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:926] null access");
		}
		return v;
	}(b32));
	a[9] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:927] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:927] null access");
		}
		return v;
	}(b02)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:927] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:927] null access");
		}
		return v;
	}(b12)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:927] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:927] null access");
		}
		return v;
	}(b22)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:927] null access");
		}
		return v;
	}(a13)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:927] null access");
		}
		return v;
	}(b32));
	a[10] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:928] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:928] null access");
		}
		return v;
	}(b02)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:928] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:928] null access");
		}
		return v;
	}(b12)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:928] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:928] null access");
		}
		return v;
	}(b22)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:928] null access");
		}
		return v;
	}(a23)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:928] null access");
		}
		return v;
	}(b32));
	a[11] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:929] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:929] null access");
		}
		return v;
	}(b02)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:929] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:929] null access");
		}
		return v;
	}(b12)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:929] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:929] null access");
		}
		return v;
	}(b22)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:929] null access");
		}
		return v;
	}(a33)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:929] null access");
		}
		return v;
	}(b32));
	a[12] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:930] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:930] null access");
		}
		return v;
	}(b03)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:930] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:930] null access");
		}
		return v;
	}(b13)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:930] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:930] null access");
		}
		return v;
	}(b23)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:930] null access");
		}
		return v;
	}(a03)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:930] null access");
		}
		return v;
	}(b33));
	a[13] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:931] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:931] null access");
		}
		return v;
	}(b03)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:931] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:931] null access");
		}
		return v;
	}(b13)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:931] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:931] null access");
		}
		return v;
	}(b23)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:931] null access");
		}
		return v;
	}(a13)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:931] null access");
		}
		return v;
	}(b33));
	a[14] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:932] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:932] null access");
		}
		return v;
	}(b03)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:932] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:932] null access");
		}
		return v;
	}(b13)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:932] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:932] null access");
		}
		return v;
	}(b23)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:932] null access");
		}
		return v;
	}(a23)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:932] null access");
		}
		return v;
	}(b33));
	a[15] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:933] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:933] null access");
		}
		return v;
	}(b03)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:933] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:933] null access");
		}
		return v;
	}(b13)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:933] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:933] null access");
		}
		return v;
	}(b23)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:933] null access");
		}
		return v;
	}(a33)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:933] null access");
		}
		return v;
	}(b33));
	return this;
};

/**
 * @return {M44}
 */
M44.prototype.transpose$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a30;
	/** @type {undefined|!number} */
	var a21;
	/** @type {undefined|!number} */
	var a31;
	/** @type {undefined|!number} */
	var a32;
	a = this.array$();
	(a10 = a[1], a20 = a[2], a30 = a[3], a21 = a[6], a31 = a[7], a32 = a[11]);
	a[1] = a[4];
	a[2] = a[8];
	a[3] = a[12];
	a[4] = a10;
	a[6] = a[9];
	a[7] = a[13];
	a[8] = a20;
	a[9] = a21;
	a[11] = a[14];
	a[12] = a30;
	a[13] = a31;
	a[14] = a32;
	return this;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.transpose$LM44$ = function (m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = this.array$(), b = m.array$());
	a[0] = b[0];
	a[1] = b[4];
	a[2] = b[8];
	a[3] = b[12];
	a[4] = b[1];
	a[5] = b[5];
	a[6] = b[9];
	a[7] = b[13];
	a[8] = b[2];
	a[9] = b[6];
	a[10] = b[10];
	a[11] = b[14];
	a[12] = b[3];
	a[13] = b[7];
	a[14] = b[11];
	a[15] = b[15];
	return this;
};

/**
 * @return {!number}
 */
M44.prototype.det$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a00;
	/** @type {undefined|!number} */
	var a01;
	/** @type {undefined|!number} */
	var a02;
	/** @type {undefined|!number} */
	var a03;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a11;
	/** @type {undefined|!number} */
	var a12;
	/** @type {undefined|!number} */
	var a13;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a21;
	/** @type {undefined|!number} */
	var a22;
	/** @type {undefined|!number} */
	var a23;
	/** @type {undefined|!number} */
	var a30;
	/** @type {undefined|!number} */
	var a31;
	/** @type {undefined|!number} */
	var a32;
	/** @type {undefined|!number} */
	var a33;
	a = this.array$();
	(a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3]);
	(a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7]);
	(a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11]);
	(a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]);
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a03)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a03)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a03)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:982] null access");
		}
		return v;
	}(a03)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a03)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a03)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a13)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:983] null access");
		}
		return v;
	}(a13)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a13)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a13)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a13)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:984] null access");
		}
		return v;
	}(a13)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a23)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a23)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a30)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a23)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a31)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:985] null access");
		}
		return v;
	}(a23)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a23)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a32)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a23)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a33)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:986] null access");
		}
		return v;
	}(a33)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a33)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a12)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a33)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a10)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a33)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a11)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:987] null access");
		}
		return v;
	}(a33));
};

/**
 * @return {M44}
 */
M44.prototype.inverse$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a00;
	/** @type {undefined|!number} */
	var a01;
	/** @type {undefined|!number} */
	var a02;
	/** @type {undefined|!number} */
	var a03;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a11;
	/** @type {undefined|!number} */
	var a12;
	/** @type {undefined|!number} */
	var a13;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a21;
	/** @type {undefined|!number} */
	var a22;
	/** @type {undefined|!number} */
	var a23;
	/** @type {undefined|!number} */
	var a30;
	/** @type {undefined|!number} */
	var a31;
	/** @type {undefined|!number} */
	var a32;
	/** @type {undefined|!number} */
	var a33;
	/** @type {!number} */
	var b00;
	/** @type {!number} */
	var b01;
	/** @type {!number} */
	var b02;
	/** @type {!number} */
	var b03;
	/** @type {!number} */
	var b04;
	/** @type {!number} */
	var b05;
	/** @type {!number} */
	var b06;
	/** @type {!number} */
	var b07;
	/** @type {!number} */
	var b08;
	/** @type {!number} */
	var b09;
	/** @type {!number} */
	var b10;
	/** @type {!number} */
	var b11;
	/** @type {!number} */
	var d;
	/** @type {!number} */
	var invDet;
	a = this.array$();
	(a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]);
	(b00 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:998] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:998] null access");
		}
		return v;
	}(a11)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:998] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:998] null access");
		}
		return v;
	}(a10)), b01 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:999] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:999] null access");
		}
		return v;
	}(a12)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:999] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:999] null access");
		}
		return v;
	}(a10)), b02 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1000] null access");
		}
		return v;
	}(a00)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1000] null access");
		}
		return v;
	}(a13)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1000] null access");
		}
		return v;
	}(a03)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1000] null access");
		}
		return v;
	}(a10)), b03 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1001] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1001] null access");
		}
		return v;
	}(a12)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1001] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1001] null access");
		}
		return v;
	}(a11)), b04 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1002] null access");
		}
		return v;
	}(a01)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1002] null access");
		}
		return v;
	}(a13)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1002] null access");
		}
		return v;
	}(a03)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1002] null access");
		}
		return v;
	}(a11)), b05 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1003] null access");
		}
		return v;
	}(a02)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1003] null access");
		}
		return v;
	}(a13)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1003] null access");
		}
		return v;
	}(a03)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1003] null access");
		}
		return v;
	}(a12)), b06 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1004] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1004] null access");
		}
		return v;
	}(a31)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1004] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1004] null access");
		}
		return v;
	}(a30)), b07 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1005] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1005] null access");
		}
		return v;
	}(a32)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1005] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1005] null access");
		}
		return v;
	}(a30)), b08 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1006] null access");
		}
		return v;
	}(a20)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1006] null access");
		}
		return v;
	}(a33)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1006] null access");
		}
		return v;
	}(a23)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1006] null access");
		}
		return v;
	}(a30)), b09 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1007] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1007] null access");
		}
		return v;
	}(a32)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1007] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1007] null access");
		}
		return v;
	}(a31)), b10 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1008] null access");
		}
		return v;
	}(a21)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1008] null access");
		}
		return v;
	}(a33)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1008] null access");
		}
		return v;
	}(a23)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1008] null access");
		}
		return v;
	}(a31)), b11 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1009] null access");
		}
		return v;
	}(a22)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1009] null access");
		}
		return v;
	}(a33)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1009] null access");
		}
		return v;
	}(a23)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1009] null access");
		}
		return v;
	}(a32)));
	d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	a[0] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1016] null access");
		}
		return v;
	}(a11)) * b11 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1016] null access");
		}
		return v;
	}(a12)) * b10 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1016] null access");
		}
		return v;
	}(a13)) * b09) * invDet;
	a[1] = (- a01 * b11 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1017] null access");
		}
		return v;
	}(a02)) * b10 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1017] null access");
		}
		return v;
	}(a03)) * b09) * invDet;
	a[2] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1018] null access");
		}
		return v;
	}(a31)) * b05 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1018] null access");
		}
		return v;
	}(a32)) * b04 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1018] null access");
		}
		return v;
	}(a33)) * b03) * invDet;
	a[3] = (- a21 * b05 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1019] null access");
		}
		return v;
	}(a22)) * b04 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1019] null access");
		}
		return v;
	}(a23)) * b03) * invDet;
	a[4] = (- a10 * b11 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1020] null access");
		}
		return v;
	}(a12)) * b08 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1020] null access");
		}
		return v;
	}(a13)) * b07) * invDet;
	a[5] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1021] null access");
		}
		return v;
	}(a00)) * b11 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1021] null access");
		}
		return v;
	}(a02)) * b08 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1021] null access");
		}
		return v;
	}(a03)) * b07) * invDet;
	a[6] = (- a30 * b05 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1022] null access");
		}
		return v;
	}(a32)) * b02 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1022] null access");
		}
		return v;
	}(a33)) * b01) * invDet;
	a[7] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1023] null access");
		}
		return v;
	}(a20)) * b05 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1023] null access");
		}
		return v;
	}(a22)) * b02 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1023] null access");
		}
		return v;
	}(a23)) * b01) * invDet;
	a[8] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1024] null access");
		}
		return v;
	}(a10)) * b10 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1024] null access");
		}
		return v;
	}(a11)) * b08 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1024] null access");
		}
		return v;
	}(a13)) * b06) * invDet;
	a[9] = (- a00 * b10 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1025] null access");
		}
		return v;
	}(a01)) * b08 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1025] null access");
		}
		return v;
	}(a03)) * b06) * invDet;
	a[10] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1026] null access");
		}
		return v;
	}(a30)) * b04 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1026] null access");
		}
		return v;
	}(a31)) * b02 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1026] null access");
		}
		return v;
	}(a33)) * b00) * invDet;
	a[11] = (- a20 * b04 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1027] null access");
		}
		return v;
	}(a21)) * b02 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1027] null access");
		}
		return v;
	}(a23)) * b00) * invDet;
	a[12] = (- a10 * b09 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1028] null access");
		}
		return v;
	}(a11)) * b07 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1028] null access");
		}
		return v;
	}(a12)) * b06) * invDet;
	a[13] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1029] null access");
		}
		return v;
	}(a00)) * b09 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1029] null access");
		}
		return v;
	}(a01)) * b07 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1029] null access");
		}
		return v;
	}(a02)) * b06) * invDet;
	a[14] = (- a30 * b03 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1030] null access");
		}
		return v;
	}(a31)) * b01 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1030] null access");
		}
		return v;
	}(a32)) * b00) * invDet;
	a[15] = ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1031] null access");
		}
		return v;
	}(a20)) * b03 - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1031] null access");
		}
		return v;
	}(a21)) * b01 + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1031] null access");
		}
		return v;
	}(a22)) * b00) * invDet;
	return this;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M44}
 */
M44.prototype.setTranslate$NNN = function (x, y, z) {
	this.setIdentity$();
	this._[12] = x;
	this._[13] = y;
	this._[14] = z;
	return this;
};

/**
 * @param {V3} v
 * @return {M44}
 */
M44.prototype.setTranslate$LV3$ = function (v) {
	return this.setTranslate$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1043] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1043] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1043] null access");
		}
		return v;
	}(v._[2])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {M44}
 */
M44.prototype.setTranslate$AN = function (v) {
	return this.setTranslate$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1044] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1044] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1044] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {Float32Array} v
 * @return {M44}
 */
M44.prototype.setTranslate$LFloat32Array$ = function (v) {
	return this.setTranslate$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1045] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1045] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1045] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {!number} s
 * @return {M44}
 */
M44.prototype.setScale$N = function (s) {
	return this.setScale$NNN(s, s, s);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M44}
 */
M44.prototype.setScale$NNN = function (x, y, z) {
	this.setZero$();
	this._[0] = x;
	this._[5] = y;
	this._[10] = z;
	this._[15] = 1;
	return this;
};

/**
 * @param {V3} v
 * @return {M44}
 */
M44.prototype.setScale$LV3$ = function (v) {
	return this.setScale$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1056] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1056] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1056] null access");
		}
		return v;
	}(v._[2])));
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {M44}
 */
M44.prototype.setScale$AN = function (v) {
	return this.setScale$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1057] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1057] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1057] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {Float32Array} v
 * @return {M44}
 */
M44.prototype.setScale$LFloat32Array$ = function (v) {
	return this.setScale$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1058] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1058] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1058] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {!number} rad
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M44}
 */
M44.prototype.setRotate$NNNN = function (rad, x, y, z) {
	/** @type {!number} */
	var l;
	/** @type {!number} */
	var il;
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var c;
	/** @type {!number} */
	var s;
	/** @type {!number} */
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	a = this.array$();
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	a[0] = x * x * _c + c;
	a[1] = y * x * _c + z * s;
	a[2] = x * z * _c - y * s;
	a[4] = x * y * _c - z * s;
	a[5] = y * y * _c + c;
	a[6] = y * z * _c + x * s;
	a[8] = x * z * _c + y * s;
	a[9] = y * z * _c - x * s;
	a[10] = z * z * _c + c;
	a[3] = a[7] = a[11] = a[12] = a[13] = a[14] = 0;
	a[15] = 1;
	return this;
};

/**
 * @param {!number} rad
 * @param {V3} a
 * @return {M44}
 */
M44.prototype.setRotate$NLV3$ = function (rad, a) {
	return this.setRotate$NNNN(rad, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1083] null access");
		}
		return v;
	}(a._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1083] null access");
		}
		return v;
	}(a._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1083] null access");
		}
		return v;
	}(a._[2])));
};

/**
 * @param {!number} rad
 * @param {Array.<undefined|!number>} a
 * @return {M44}
 */
M44.prototype.setRotate$NAN = function (rad, a) {
	return this.setRotate$NNNN(rad, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1084] null access");
		}
		return v;
	}(a[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1084] null access");
		}
		return v;
	}(a[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1084] null access");
		}
		return v;
	}(a[2])));
};

/**
 * @param {!number} rad
 * @param {Float32Array} a
 * @return {M44}
 */
M44.prototype.setRotate$NLFloat32Array$ = function (rad, a) {
	return this.setRotate$NNNN(rad, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1085] null access");
		}
		return v;
	}(a[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1085] null access");
		}
		return v;
	}(a[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1085] null access");
		}
		return v;
	}(a[2])));
};

/**
 * @param {!number} rad
 * @return {M44}
 */
M44.prototype.setRotateX$N = function (rad) {
	return this.setRotate$NNNN(rad, 1, 0, 0);
};

/**
 * @param {!number} rad
 * @return {M44}
 */
M44.prototype.setRotateY$N = function (rad) {
	return this.setRotate$NNNN(rad, 0, 1, 0);
};

/**
 * @param {!number} rad
 * @return {M44}
 */
M44.prototype.setRotateZ$N = function (rad) {
	return this.setRotate$NNNN(rad, 0, 0, 1);
};

/**
 * @param {!number} l
 * @param {!number} r
 * @param {!number} b
 * @param {!number} t
 * @param {!number} n
 * @param {!number} f
 * @return {M44}
 */
M44.prototype.setFrustum$NNNNNN = function (l, r, b, t, n, f) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var rl;
	/** @type {!number} */
	var tb;
	/** @type {!number} */
	var fn;
	a = this.array$();
	(rl = r - l, tb = t - b, fn = f - n);
	a[0] = 2 * n / rl;
	a[5] = 2 * n / tb;
	a[8] = (r + l) / rl;
	a[9] = (t + b) / tb;
	a[10] = - (f + n) / fn;
	a[11] = - 1;
	a[14] = - 2 * f * n / fn;
	a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[12] = a[13] = a[15] = 0;
	return this;
};

/**
 * @param {!number} l
 * @param {!number} r
 * @param {!number} b
 * @param {!number} t
 * @param {!number} n
 * @param {!number} f
 * @return {M44}
 */
M44.prototype.setOrtho$NNNNNN = function (l, r, b, t, n, f) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var rl;
	/** @type {!number} */
	var tb;
	/** @type {!number} */
	var fn;
	a = this.array$();
	(rl = r - l, tb = t - b, fn = f - n);
	a[0] = 2 / rl;
	a[5] = 2 / tb;
	a[10] = - 2 / fn;
	a[12] = - (r + l) / rl;
	a[13] = - (t + b) / tb;
	a[14] = - (f + n) / fn;
	a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = 0;
	a[15] = 1;
	return this;
};

/**
 * @return {M44}
 */
M44.prototype.dump$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = this.array$();
	for (i = 0; i < 4; ++ i) {
		console.log(a[i].toString() + ', ' + a[i + 4].toString() + ', ' + a[i + 8].toString() + ', ' + a[i + 12].toString());
	}
	return this;
};

/**
 * class Quat extends Object
 * @constructor
 */
function Quat() {
}

Quat.prototype = new Object;
/**
 * @constructor
 */
function Quat$() {
	this._ = new Float32Array(Quat.ELEMS);
};

Quat$.prototype = new Quat;

/**
 * @constructor
 * @param {Quat} q
 */
function Quat$LQuat$(q) {
	this._ = new Float32Array(Quat.ELEMS);
	this.set$LQuat$(q);
};

Quat$LQuat$.prototype = new Quat;

/**
 * @constructor
 * @param {Array.<undefined|!number>} q
 */
function Quat$AN(q) {
	this._ = new Float32Array(Quat.ELEMS);
	this.set$AN(q);
};

Quat$AN.prototype = new Quat;

/**
 * @constructor
 * @param {Float32Array} q
 */
function Quat$LFloat32Array$(q) {
	this._ = new Float32Array(Quat.ELEMS);
	this.set$LFloat32Array$(q);
};

Quat$LFloat32Array$.prototype = new Quat;

/**
 * @constructor
 * @param {!number} w
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 */
function Quat$NNNN(w, x, y, z) {
	this._ = new Float32Array(Quat.ELEMS);
	this.set$NNNN(w, x, y, z);
};

Quat$NNNN.prototype = new Quat;

/**
 * @return {Float32Array}
 */
Quat.prototype.array$ = function () {
	return this._;
};

/**
 * @return {Quat}
 */
Quat.prototype.clone$ = function () {
	return new Quat$LQuat$(this);
};

/**
 * @return {Quat}
 */
Quat.prototype.setZero$ = function () {
	return this.set$NNNN(0, 0, 0, 0);
};

/**
 * @return {Quat}
 */
Quat.prototype.setIdentity$ = function () {
	return this.set$NNNN(1, 0, 0, 0);
};

/**
 * @param {!number} w
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {Quat}
 */
Quat.prototype.set$NNNN = function (w, x, y, z) {
	this._[0] = w;
	this._[1] = x;
	this._[2] = y;
	this._[3] = z;
	return this;
};

/**
 * @param {Quat} q
 * @return {Quat}
 */
Quat.prototype.set$LQuat$ = function (q) {
	this._.set(q._);
	return this;
};

/**
 * @param {Array.<undefined|!number>} q
 * @return {Quat}
 */
Quat.prototype.set$AN = function (q) {
	this._.set(q);
	return this;
};

/**
 * @param {Float32Array} q
 * @return {Quat}
 */
Quat.prototype.set$LFloat32Array$ = function (q) {
	this._.set(q);
	return this;
};

/**
 * @param {!number} w
 * @param {V3} v
 * @return {Quat}
 */
Quat.prototype.set$NLV3$ = function (w, v) {
	return this.set$NNNN(w, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1153] null access");
		}
		return v;
	}(v._[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1153] null access");
		}
		return v;
	}(v._[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1153] null access");
		}
		return v;
	}(v._[2])));
};

/**
 * @param {Quat} q
 * @return {!boolean}
 */
Quat.prototype.equals$LQuat$ = function (q) {
	return this.equals$LQuat$N(q, MVQ.EQUAL_EPSILON);
};

/**
 * @param {Quat} q
 * @param {!number} eps
 * @return {!boolean}
 */
Quat.prototype.equals$LQuat$N = function (q, eps) {
	var $math_abs_t;
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = q.array$());
	for (i = 0; i < Quat.ELEMS; ++ i) {
		if ((($math_abs_t = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1160] null access");
			}
			return v;
		}(b[i])) - (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1160] null access");
			}
			return v;
		}(a[i]))) >= 0 ? $math_abs_t : -$math_abs_t) >= eps) {
			return false;
		}
	}
	return true;
};

/**
 * @param {Quat} q
 * @return {!number}
 */
Quat.prototype.dot$LQuat$ = function (q) {
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1165] null access");
		}
		return v;
	}(this._[0])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1165] null access");
		}
		return v;
	}(q._[0])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1165] null access");
		}
		return v;
	}(this._[1])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1165] null access");
		}
		return v;
	}(q._[1])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1165] null access");
		}
		return v;
	}(this._[2])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1165] null access");
		}
		return v;
	}(q._[2])) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1165] null access");
		}
		return v;
	}(this._[3])) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1165] null access");
		}
		return v;
	}(q._[3]));
};

/**
 * @return {Quat}
 */
Quat.prototype.inverse$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var q0;
	/** @type {undefined|!number} */
	var q1;
	/** @type {undefined|!number} */
	var q2;
	/** @type {undefined|!number} */
	var q3;
	/** @type {!number} */
	var dot;
	/** @type {!number} */
	var invDot;
	a = this.array$();
	(q0 = a[0], q1 = a[1], q2 = a[2], q3 = a[3]);
	dot = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1171] null access");
		}
		return v;
	}(q0)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1171] null access");
		}
		return v;
	}(q0)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1171] null access");
		}
		return v;
	}(q1)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1171] null access");
		}
		return v;
	}(q1)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1171] null access");
		}
		return v;
	}(q2)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1171] null access");
		}
		return v;
	}(q2)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1171] null access");
		}
		return v;
	}(q3)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1171] null access");
		}
		return v;
	}(q3));
	if (dot === 0) {
		return null;
	}
	invDot = 1 / dot;
	a[0] *= invDot;
	a[1] *= - invDot;
	a[2] *= - invDot;
	a[3] *= - invDot;
	return this;
};

/**
 * @return {Quat}
 */
Quat.prototype.conjugate$ = function () {
	/** @type {Float32Array} */
	var a;
	a = this.array$();
	a[1] *= - 1;
	a[2] *= - 1;
	a[3] *= - 1;
	return this;
};

/**
 * @return {!number}
 */
Quat.prototype.len$ = function () {
	return Math.sqrt(this.len2$());
};

/**
 * @return {!number}
 */
Quat.prototype.len2$ = function () {
	/** @type {undefined|!number} */
	var w;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	(w = this._[0], x = this._[1], y = this._[2], z = this._[3]);
	return (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1195] null access");
		}
		return v;
	}(w)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1195] null access");
		}
		return v;
	}(w)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1195] null access");
		}
		return v;
	}(x)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1195] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1195] null access");
		}
		return v;
	}(y)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1195] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1195] null access");
		}
		return v;
	}(z)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1195] null access");
		}
		return v;
	}(z));
};

/**
 * @return {Quat}
 */
Quat.prototype.normalize$ = function () {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var w;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	/** @type {!number} */
	var l;
	/** @type {!number} */
	var il;
	a = this.array$();
	(w = a[0], x = a[1], y = a[2], z = a[3]);
	l = Math.sqrt((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1201] null access");
		}
		return v;
	}(x)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1201] null access");
		}
		return v;
	}(x)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1201] null access");
		}
		return v;
	}(y)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1201] null access");
		}
		return v;
	}(y)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1201] null access");
		}
		return v;
	}(z)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1201] null access");
		}
		return v;
	}(z)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1201] null access");
		}
		return v;
	}(w)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1201] null access");
		}
		return v;
	}(w)));
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	a[0] *= il;
	a[1] *= il;
	a[2] *= il;
	a[3] *= il;
	return this;
};

/**
 * @param {Quat} q
 * @return {Quat}
 */
Quat.prototype.add$LQuat$ = function (q) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = q.array$());
	for (i = 0; i < Quat.ELEMS; ++ i) {
		a[i] += b[i];
	}
	return this;
};

/**
 * @param {Quat} q
 * @return {Quat}
 */
Quat.prototype.sub$LQuat$ = function (q) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = this.array$(), b = q.array$());
	for (i = 0; i < Quat.ELEMS; ++ i) {
		a[i] -= b[i];
	}
	return this;
};

/**
 * @param {Quat} q
 * @return {Quat}
 */
Quat.prototype.mul$LQuat$ = function (q) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {undefined|!number} */
	var aw;
	/** @type {undefined|!number} */
	var ax;
	/** @type {undefined|!number} */
	var ay;
	/** @type {undefined|!number} */
	var az;
	/** @type {undefined|!number} */
	var bw;
	/** @type {undefined|!number} */
	var bx;
	/** @type {undefined|!number} */
	var by;
	/** @type {undefined|!number} */
	var bz;
	(a = this.array$(), b = q.array$());
	(aw = a[0], ax = a[1], ay = a[2], az = a[3]);
	(bw = b[0], bx = b[1], by = b[2], bz = b[3]);
	a[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1225] null access");
		}
		return v;
	}(aw)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1225] null access");
		}
		return v;
	}(bw)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1225] null access");
		}
		return v;
	}(ax)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1225] null access");
		}
		return v;
	}(bx)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1225] null access");
		}
		return v;
	}(ay)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1225] null access");
		}
		return v;
	}(by)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1225] null access");
		}
		return v;
	}(az)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1225] null access");
		}
		return v;
	}(bz));
	a[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1226] null access");
		}
		return v;
	}(aw)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1226] null access");
		}
		return v;
	}(bx)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1226] null access");
		}
		return v;
	}(ax)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1226] null access");
		}
		return v;
	}(bw)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1226] null access");
		}
		return v;
	}(ay)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1226] null access");
		}
		return v;
	}(bz)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1226] null access");
		}
		return v;
	}(az)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1226] null access");
		}
		return v;
	}(by));
	a[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1227] null access");
		}
		return v;
	}(aw)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1227] null access");
		}
		return v;
	}(by)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1227] null access");
		}
		return v;
	}(ax)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1227] null access");
		}
		return v;
	}(bz)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1227] null access");
		}
		return v;
	}(ay)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1227] null access");
		}
		return v;
	}(bw)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1227] null access");
		}
		return v;
	}(az)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1227] null access");
		}
		return v;
	}(bx));
	a[3] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1228] null access");
		}
		return v;
	}(aw)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1228] null access");
		}
		return v;
	}(bz)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1228] null access");
		}
		return v;
	}(ax)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1228] null access");
		}
		return v;
	}(by)) - (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1228] null access");
		}
		return v;
	}(ay)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1228] null access");
		}
		return v;
	}(bx)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1228] null access");
		}
		return v;
	}(az)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1228] null access");
		}
		return v;
	}(bw));
	return this;
};

/**
 * @param {!number} s
 * @return {Quat}
 */
Quat.prototype.mul$N = function (s) {
	/** @type {Float32Array} */
	var a;
	a = this.array$();
	a[0] *= s;
	a[1] *= s;
	a[2] *= s;
	a[3] *= s;
	return this;
};

/**
 * @param {Quat} q0
 * @param {Quat} q1
 * @param {!number} slerp
 * @return {Quat}
 */
Quat.prototype.slerp$LQuat$LQuat$N = function (q0, q1, slerp) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {Float32Array} */
	var c;
	/** @type {undefined|!number} */
	var aw;
	/** @type {undefined|!number} */
	var ax;
	/** @type {undefined|!number} */
	var ay;
	/** @type {undefined|!number} */
	var az;
	/** @type {undefined|!number} */
	var bw;
	/** @type {undefined|!number} */
	var bx;
	/** @type {undefined|!number} */
	var by;
	/** @type {undefined|!number} */
	var bz;
	/** @type {!number} */
	var cosHalfTheta;
	/** @type {!number} */
	var halfTheta;
	/** @type {!number} */
	var sinHalfTheta;
	/** @type {!number} */
	var ratioA;
	/** @type {!number} */
	var ratioB;
	(a = q0.array$(), b = q1.array$(), c = this.array$());
	(aw = a[0], ax = a[1], ay = a[2], az = a[3]);
	(bw = b[0], bx = b[1], by = b[2], bz = b[3]);
	cosHalfTheta = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1245] null access");
		}
		return v;
	}(aw)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1245] null access");
		}
		return v;
	}(bw)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1245] null access");
		}
		return v;
	}(ax)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1245] null access");
		}
		return v;
	}(bx)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1245] null access");
		}
		return v;
	}(ay)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1245] null access");
		}
		return v;
	}(by)) + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1245] null access");
		}
		return v;
	}(az)) * (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1245] null access");
		}
		return v;
	}(bz));
	if ((cosHalfTheta >= 0 ? cosHalfTheta : - cosHalfTheta) >= 1.0) {
		return this;
	}
	halfTheta = Math.acos(cosHalfTheta);
	sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
	if ((sinHalfTheta >= 0 ? sinHalfTheta : - sinHalfTheta) < 0.001) {
		c[0] = ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1252] null access");
			}
			return v;
		}(aw)) + (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1252] null access");
			}
			return v;
		}(bw))) / 2;
		c[1] = ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1253] null access");
			}
			return v;
		}(ax)) + (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1253] null access");
			}
			return v;
		}(bx))) / 2;
		c[2] = ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1254] null access");
			}
			return v;
		}(ay)) + (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1254] null access");
			}
			return v;
		}(by))) / 2;
		c[3] = ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1255] null access");
			}
			return v;
		}(az)) + (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[mvq.jsx:1255] null access");
			}
			return v;
		}(bz))) / 2;
		return this;
	}
	ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
	ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;
	c[0] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1262] null access");
		}
		return v;
	}(aw)) * ratioA + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1262] null access");
		}
		return v;
	}(bw)) * ratioB;
	c[1] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1263] null access");
		}
		return v;
	}(ax)) * ratioA + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1263] null access");
		}
		return v;
	}(bx)) * ratioB;
	c[2] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1264] null access");
		}
		return v;
	}(ay)) * ratioA + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1264] null access");
		}
		return v;
	}(by)) * ratioB;
	c[3] = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1265] null access");
		}
		return v;
	}(az)) * ratioA + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1265] null access");
		}
		return v;
	}(bz)) * ratioB;
	return this;
};

/**
 * class _Main extends Object
 * @constructor
 */
function _Main() {
}

_Main.prototype = new Object;
/**
 * @constructor
 */
function _Main$() {
};

_Main$.prototype = new _Main;

/**
 * @param {Array.<undefined|!string>} args
 */
_Main.main$AS = function (args) {
	/** @type {V3} */
	var v;
	/** @type {V3} */
	var v2;
	/** @type {M44} */
	var m;
	/** @type {Float32Array} */
	var ta;
	/** @type {M44} */
	var im;
	/** @type {M44} */
	var iim;
	v = new V3$NNN(1, 2, 3);
	v2 = new V3$LV3$(v);
	console.log(v.dist$LV3$(v2));
	m = new M44$();
	m.set$AN([ 1, 2, 43, 5 ]);
	ta = new Float32Array(5);
	ta[4] = 100;
	m.set$LFloat32Array$(ta);
	m.setIdentity$();
	m.mul$LM44$(new M44$().setRotateX$N(10));
	m = new M44$().setTranslate$NNN(1, 2, 3).mul$LM44$(m);
	m.mul$LM44$(new M44$().setScale$N(100));
	im = new M44$LM44$(m).inverse$();
	_Main$dump$LM44$(m);
	_Main$dump$LM44$(im);
	iim = new M44$LM44$(m).mul$LM44$(im);
	_Main$dump$LM44$(iim);
	console.log(iim.equals$LM44$(new M44$().setIdentity$()));
	_Main$dump$LM44$(m.set$LV4$LV4$LV4$LV4$(new V4$NNNN(0, 1, 2, 3), new V4$NNNN(4, 5, 6, 7), new V4$NNNN(8, 9, 10, 11), new V4$NNNN(12, 13, 14, 16)));
};

var _Main$main$AS = _Main.main$AS;

/**
 * @param {M44} m
 */
_Main.dump$LM44$ = function (m) {
	/** @type {!number} */
	var i;
	for (i = 0; i < 4; ++ i) {
		console.log(m._[i].toString() + ', ' + m._[i + 4].toString() + ', ' + m._[i + 8].toString() + ', ' + m._[i + 12].toString());
	}
};

var _Main$dump$LM44$ = _Main.dump$LM44$;

/**
 * class _Part extends Object
 * @constructor
 */
function _Part() {
}

_Part.prototype = new Object;
/**
 * @constructor
 */
function _Part$() {
	this.vbuf = null;
	this.nbuf = null;
	this.ibuf = null;
	this.numv = 0;
	this.numi = 0;
};

_Part$.prototype = new _Part;

/**
 * @param {Array.<undefined|!number>} a
 * @return {WebGLBuffer}
 */
_Part.createArrayBuffer$AN = function (a) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLBuffer} */
	var buf;
	gl = Kingyo.gl;
	buf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(a), gl.STATIC_DRAW);
	return buf;
};

var _Part$createArrayBuffer$AN = _Part.createArrayBuffer$AN;

/**
 * @param {Array.<undefined|!number>} a
 * @return {WebGLBuffer}
 */
_Part.createIndexBuffer$AI = function (a) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLBuffer} */
	var buf;
	gl = Kingyo.gl;
	buf = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buf);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(a), gl.STATIC_DRAW);
	return buf;
};

var _Part$createIndexBuffer$AI = _Part.createIndexBuffer$AI;

/**
 * @param {Array.<undefined|!number>} v
 * @return {_Part}
 */
_Part.prototype.setVertex$AN = function (v) {
	this.vbuf = _Part$createArrayBuffer$AN(v);
	this.numv = (v.length / 3 | 0);
	return this;
};

/**
 * @param {Array.<undefined|!number>} n
 * @return {_Part}
 */
_Part.prototype.setNormal$AN = function (n) {
	this.nbuf = _Part$createArrayBuffer$AN(n);
	return this;
};

/**
 * @param {Array.<undefined|!number>} i
 * @return {_Part}
 */
_Part.prototype.setIndex$AI = function (i) {
	this.ibuf = _Part$createIndexBuffer$AI(i);
	this.numi = (i.length | 0);
	return this;
};

/**
 * class Kingyo extends Object
 * @constructor
 */
function Kingyo() {
}

Kingyo.prototype = new Object;
/**
 * @constructor
 */
function Kingyo$() {
	this._pos = new V3$();
	this._vangle = 0;
	this._velo = 0;
	this._anim = 0;
	this._state = '';
	this._spinMat = new M44$();
	this._spinAxis = new V3$();
	this._spinSpeed = 0;
	this._vz = 0;
	this._color = [ 0.7, 0, 0 ];
	this._color2 = [ 0.7, 0, 0 ];
	this._color2pos = [ 0, 0, 0, 0 ];
	this.init$();
	if (Math.random() < 0.3) {
		this._color2 = [ 0.7, 0.7, 0.8 ];
		this._color2pos = [ 2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1, 0.5 * Math.random() + 0.5 ];
	} else {
		if (Math.random() < 0.5) {
			this._color = [ 0.15, 0.1, 0.2 ];
			this._color2 = [ 0.15, 0.1, 0.2 ];
			this._color2pos = [ 0, 0, 0, 0 ];
		}
	}
};

Kingyo$.prototype = new Kingyo;

/**
 * @param {WebGLRenderingContext} gl
 */
Kingyo.initWithGL$LWebGLRenderingContext$ = function (gl) {
	/** @type {!number} */
	var ex;
	/** @type {!number} */
	var ey;
	/** @type {!number} */
	var ez;
	Kingyo.gl = gl;
	Kingyo.prog = Util$getProgram$SS('kbody.vs', 'kbody.fs');
	Kingyo.body = new _Part$().setVertex$AN([ 0, 0, 1, 0.7, 0, 0, 0, 1, 0, - 0.7, 0, 0, 0, - 1, 0, 0, 0, - 1 ]).setNormal$AN([ 0, 0, 1, 1, 0, 0, 0, 1, 0, - 1, 0, 0, 0, - 1, 0, 0, 0, - 1 ]).setIndex$AI([ 0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 5, 2, 1, 5, 3, 2, 5, 4, 3, 5, 1, 4 ]);
	Kingyo.lfin = new _Part$().setVertex$AN([ 0, 0, 0, 0.5, - 0.25, 0, 0.8, 0.25, 0 ]).setNormal$AN([ 0, 0, 1, 0, 0, 1, 0, 0, 1 ]).setIndex$AI([ 0, 1, 2 ]);
	Kingyo.rfin = new _Part$().setVertex$AN([ 0, 0, 0, - 0.8, 0.25, 0, - 0.5, - 0.25, 0 ]).setNormal$AN([ 0, 0, 1, 0, 0, 1, 0, 0, 1 ]).setIndex$AI([ 0, 1, 2 ]);
	Kingyo.bfin = new _Part$().setVertex$AN([ 0, 0, 0, 0, - 0.5, - 1, 0, 0.5, - 0.8 ]).setNormal$AN([ 1, 0, 0, 1, 0, 0, 1, 0, 0 ]).setIndex$AI([ 0, 1, 2 ]);
	Kingyo.tfin = new _Part$().setVertex$AN([ 0, 0, 0, 0.8, - 0.5, - 1, 0, 0.4, - 0.8, - 0.8, - 0.5, - 1 ]).setNormal$AN([ 0, 1, 1, 1, 1, 1, 0, 1, 0, - 1, 1, 1 ]).setIndex$AI([ 0, 1, 2, 0, 2, 3 ]);
	Kingyo.ulocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.alocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.eyeProg = Util$getProgram$SS('keye.vs', 'keye.fs');
	Kingyo.eyeULocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.eyeProg);
	Kingyo.eyeALocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.eyeProg);
	(ex = 0.3, ey = 0.15, ez = 0.5);
	Kingyo.eyes = new _Part$().setVertex$AN([ - ex, ey, ez, 0, - ex, ey, ez, 1, - ex, ey, ez, 2, - ex, ey, ez, 3, ex, ey, ez, 4, ex, ey, ez, 5, ex, ey, ez, 6, ex, ey, ez, 7 ]).setIndex$AI([ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7 ]);
};

var Kingyo$initWithGL$LWebGLRenderingContext$ = Kingyo.initWithGL$LWebGLRenderingContext$;

/**
 * @param {!number} num_kingyos
 */
Kingyo.init$I = function (num_kingyos) {
	/** @type {!number} */
	var i;
	for (i = 0; i < num_kingyos; ++ i) {
		Kingyo.all.push(new Kingyo$());
	}
};

var Kingyo$init$I = Kingyo.init$I;

/**
 */
Kingyo.reset$ = function () {
	/** @type {!number} */
	var i;
	for (i = 0; i < Kingyo.all.length; ++ i) {
		Kingyo.all[i].init$();
	}
};

var Kingyo$reset$ = Kingyo.reset$;

/**
 * @return {!number}
 */
Kingyo.numRests$ = function () {
	/** @type {!number} */
	var r;
	/** @type {!number} */
	var i;
	r = 0;
	for (i = 0; i < Kingyo.all.length; ++ i) {
		if (Kingyo.all[i]._state === 'swimming') {
			++ r;
		}
	}
	return (r | 0);
};

var Kingyo$numRests$ = Kingyo.numRests$;

/**
 * @param {!number} t
 */
Kingyo.update$N = function (t) {
	/** @type {!number} */
	var dt;
	/** @type {!number} */
	var i;
	if (Kingyo.prevTime === 0) {
		Kingyo.prevTime = t;
	}
	dt = t - Kingyo.prevTime;
	for (i = 0; i < Kingyo.all.length; ++ i) {
		Kingyo.all[i]._update$N(dt);
	}
	Kingyo.prevTime = t;
};

var Kingyo$update$N = Kingyo.update$N;

/**
 * @param {M44} projMat
 * @param {M44} viewMat
 */
Kingyo.drawUnderWater$LM44$LM44$ = function (projMat, viewMat) {
	Kingyo$draw$LM44$LM44$F$LKingyo$B$(projMat, viewMat, (function (k) {
		return k._state === 'swimming';
	}));
};

var Kingyo$drawUnderWater$LM44$LM44$ = Kingyo.drawUnderWater$LM44$LM44$;

/**
 * @param {M44} projMat
 * @param {M44} viewMat
 */
Kingyo.drawAboveWater$LM44$LM44$ = function (projMat, viewMat) {
	Kingyo$draw$LM44$LM44$F$LKingyo$B$(projMat, viewMat, (function (k) {
		return k._state !== 'swimming';
	}));
};

var Kingyo$drawAboveWater$LM44$LM44$ = Kingyo.drawAboveWater$LM44$LM44$;

/**
 * @param {M44} projMat
 * @param {M44} viewMat
 */
Kingyo.draw$LM44$LM44$F$LKingyo$B$ = function (projMat, viewMat, pred) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLProgram} */
	var prog;
	/** @type {Object.<string, undefined|WebGLUniformLocation>} */
	var ulocs;
	/** @type {Object.<string, undefined|!number>} */
	var alocs;
	/** @type {!number} */
	var i;
	/** @type {Kingyo} */
	var k;
	/** @type {Object.<string, undefined|WebGLUniformLocation>} */
	var eulocs;
	/** @type {Object.<string, undefined|!number>} */
	var ealocs;
	gl = Kingyo.gl;
	prog = Kingyo.prog;
	ulocs = Kingyo.ulocs;
	alocs = Kingyo.alocs;
	gl.useProgram(Kingyo.prog);
	gl.uniformMatrix4fv(ulocs.projectionMatrix, false, projMat.array$());
	gl.uniformMatrix4fv(ulocs.viewMatrix, false, viewMat.array$());
	gl.uniform4fv(ulocs.lightPosition, [ 0, 1, 1, 0 ]);
	gl.enableVertexAttribArray((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:136] null access");
		}
		return v;
	}(alocs.vertex)));
	gl.enableVertexAttribArray((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:137] null access");
		}
		return v;
	}(alocs.normal)));
	for (i = 0; i < Kingyo.all.length; ++ i) {
		k = Kingyo.all[i];
		if (pred(k)) {
			k._draw$();
		}
	}
	gl.disableVertexAttribArray((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:144] null access");
		}
		return v;
	}(alocs.vertex)));
	gl.disableVertexAttribArray((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:145] null access");
		}
		return v;
	}(alocs.normal)));
	eulocs = Kingyo.eyeULocs;
	ealocs = Kingyo.eyeALocs;
	gl.useProgram(Kingyo.eyeProg);
	gl.uniformMatrix4fv(eulocs.projectionMatrix, false, projMat.array$());
	gl.uniformMatrix4fv(eulocs.viewMatrix, false, viewMat.array$());
	gl.uniform4fv(eulocs.lightPosition, [ 0, 1, 1, 0 ]);
	gl.uniform1f(eulocs.radius, 0.2);
	gl.bindBuffer(gl.ARRAY_BUFFER, Kingyo.eyes.vbuf);
	gl.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:156] null access");
		}
		return v;
	}(ealocs.position)), 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:157] null access");
		}
		return v;
	}(ealocs.position)));
	for (i = 0; i < Kingyo.all.length; ++ i) {
		k = Kingyo.all[i];
		if (pred(k)) {
			k._drawEyes$();
		}
	}
	gl.disableVertexAttribArray((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:164] null access");
		}
		return v;
	}(ealocs.position)));
};

var Kingyo$draw$LM44$LM44$F$LKingyo$B$ = Kingyo.draw$LM44$LM44$F$LKingyo$B$;

/**
 * @param {!number} x
 * @param {!number} y
 * @return {Array.<undefined|Kingyo>}
 */
Kingyo.hit$NN = function (x, y) {
	/** @type {Array.<undefined|Kingyo>} */
	var h;
	/** @type {!number} */
	var i;
	/** @type {Kingyo} */
	var k;
	/** @type {!number} */
	var dx;
	/** @type {!number} */
	var dy;
	/** @type {!number} */
	var r;
	h = [  ];
	for (i = 0; i < Kingyo.all.length; ++ i) {
		k = Kingyo.all[i];
		if (k._state !== 'swimming') {
			continue;
		}
		dx = k._pos.x$() - x;
		dy = k._pos.y$() - y;
		r = Math.sqrt(dx * dx + dy * dy);
		if (r < 2) {
			h.push(k);
		}
	}
	return h;
};

var Kingyo$hit$NN = Kingyo.hit$NN;

/**
 * @param {Array.<undefined|Kingyo>} kingyos
 */
Kingyo.fish$ALKingyo$ = function (kingyos) {
	/** @type {!number} */
	var i;
	for (i = 0; i < kingyos.length; ++ i) {
		kingyos[i]._fished$();
	}
};

var Kingyo$fish$ALKingyo$ = Kingyo.fish$ALKingyo$;

/**
 */
Kingyo.prototype.init$ = function () {
	/** @type {!number} */
	var r;
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	this._setRandom$();
	r = 8 * Math.random();
	x = r * Math.cos(this._vangle);
	y = r * Math.sin(this._vangle);
	this._pos.set$NNN(x, y, - 2 - Math.random() * 3);
	this._anim = 0;
	this._state = 'swimming';
	this._spinMat.setIdentity$();
	this._spinAxis.set$NNN(0, 0, 0);
	this._spinSpeed = 0;
	this._vz = 0;
};

/**
 */
Kingyo.prototype._setRandom$ = function () {
	this._vangle = Math.random() * 2 * Math.PI;
	this._velo = Math.random() * 15 + 1;
};

/**
 */
Kingyo.prototype._fished$ = function () {
	/** @type {!number} */
	var a;
	this._state = 'flying';
	this._pos.z$N(2);
	this._vz = 150 + Math.random() * 50;
	this._velo = 12;
	this._spinMat.setIdentity$();
	a = 2 * Math.PI * Math.random();
	this._spinAxis.set$NNN(Math.cos(a), Math.sin(a), Math.random() - 0.5);
	this._spinSpeed = 10 * Math.random() + 2;
};

/**
 * @param {!number} dt
 */
Kingyo.prototype._update$N = function (dt) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var b;
	/** @type {!number} */
	var num_listed;
	/** @type {!number} */
	var i;
	switch (this._state) {
	default:
		break;
	case 'swimming':
		x = this._pos.x$() + Math.cos(this._vangle) * this._velo * dt;
		y = this._pos.y$() + Math.sin(this._vangle) * this._velo * dt;
		b = Kingyo.bound;
		if (x < - b) {
			x = - b;
			this._setRandom$();
		}
		if (y < - b) {
			y = - b;
			this._setRandom$();
		}
		if (x > b) {
			x = b;
			this._setRandom$();
		}
		if (y > b) {
			y = b;
			this._setRandom$();
		}
		this._pos.x$N(x);
		this._pos.y$N(y);
		break;
	case 'flying':
		this._vz -= 300 * dt;
		this._pos.z$N(this._pos.z$() + this._vz * dt);
		this._spinMat.mul$LM44$(new M44$().setRotate$NLV3$(dt * this._spinSpeed, this._spinAxis));
		if (this._pos.z$() >= 2) {
			break;
		}
		num_listed = 0;
		for (i = 0; i < Kingyo.all.length; ++ i) {
			if (Kingyo.all[i]._state === 'listed') {
				++ num_listed;
			}
		}
		this._pos.set$NNN(num_listed * 1.5 - Kingyo.bound - 4.25, 3 + Kingyo.bound, 2);
		this._vangle = Math.PI / 2;
		this._spinMat.setIdentity$();
		this._velo = 2;
		this._state = 'listed';
	case 'listed':
		break;
	}
	this._anim += dt * this._velo;
};

/**
 */
Kingyo.prototype._draw$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLProgram} */
	var prog;
	/** @type {WebGLUniformLocation} */
	var modelMatLoc;
	/** @type {!number} */
	var s;
	/** @type {M44} */
	var bodyMat;
	/** @type {M44} */
	var lfinMat;
	/** @type {M44} */
	var rfinMat;
	/** @type {M44} */
	var bfinMat;
	/** @type {M44} */
	var tfinMat;
	gl = Kingyo.gl;
	prog = Kingyo.prog;
	gl.uniform3fv(Kingyo.ulocs.color, this._color);
	gl.uniform3fv(Kingyo.ulocs.color2, this._color2);
	gl.uniform4fv(Kingyo.ulocs.color2pos, this._color2pos);
	modelMatLoc = Kingyo.ulocs.modelMatrix;
	s = Math.sin(this._anim * 5);
	bodyMat = new M44$().setTranslate$LV3$(this._pos).mul$LM44$(this._spinMat).mul$LM44$(new M44$().setRotateZ$N(this._vangle - s / 10)).mul$LM44$(new M44$().setRotateX$N(Math.PI / 2)).mul$LM44$(new M44$().setRotateY$N(Math.PI / 2));
	gl.uniformMatrix4fv(modelMatLoc, false, bodyMat.array$());
	this._drawPart$L_Part$(Kingyo.body);
	lfinMat = bodyMat.clone$().mul$LM44$(new M44$().setTranslate$NNN(0.5, - 0.3, 0)).mul$LM44$(new M44$().setRotate$NNNN(1 + s / 2, 0.2, 1, - 0.5));
	gl.uniformMatrix4fv(modelMatLoc, false, lfinMat.array$());
	this._drawPart$L_Part$(Kingyo.lfin);
	rfinMat = bodyMat.clone$().mul$LM44$(new M44$().setTranslate$NNN(- 0.5, - 0.3, 0)).mul$LM44$(new M44$().setRotate$NNNN(- 1 - s / 2, - 0.2, 1, - 0.5));
	gl.uniformMatrix4fv(modelMatLoc, false, rfinMat.array$());
	this._drawPart$L_Part$(Kingyo.rfin);
	bfinMat = bodyMat.clone$().mul$LM44$(new M44$().setTranslate$NNN(0, 0.7, 0)).mul$LM44$(new M44$().setRotate$NNNN(s / 2, 0, 1, 1));
	gl.uniformMatrix4fv(modelMatLoc, false, bfinMat.array$());
	this._drawPart$L_Part$(Kingyo.bfin);
	tfinMat = bodyMat.clone$().mul$LM44$(new M44$().setTranslate$NNN(0, 0, - 0.7)).mul$LM44$(new M44$().setRotate$NNNN(s / 2, 0, 1, 0));
	gl.uniformMatrix4fv(modelMatLoc, false, tfinMat.array$());
	this._drawPart$L_Part$(Kingyo.tfin);
};

/**
 * @param {_Part} p
 */
Kingyo.prototype._drawPart$L_Part$ = function (p) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLProgram} */
	var prog;
	gl = Kingyo.gl;
	prog = Kingyo.prog;
	gl.bindBuffer(gl.ARRAY_BUFFER, p.vbuf);
	gl.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:332] null access");
		}
		return v;
	}(Kingyo.alocs.vertex)), 3, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, p.nbuf);
	gl.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:335] null access");
		}
		return v;
	}(Kingyo.alocs.normal)), 3, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, p.ibuf);
	gl.drawElements(gl.TRIANGLES, p.numi, gl.UNSIGNED_SHORT, 0);
};

/**
 */
Kingyo.prototype._drawEyes$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLProgram} */
	var prog;
	/** @type {Object.<string, undefined|WebGLUniformLocation>} */
	var ulocs;
	/** @type {Object.<string, undefined|!number>} */
	var alocs;
	/** @type {!number} */
	var s;
	/** @type {M44} */
	var bodyMat;
	gl = Kingyo.gl;
	prog = Kingyo.eyeProg;
	ulocs = Kingyo.eyeULocs;
	alocs = Kingyo.eyeALocs;
	gl.uniform3fv(ulocs.color, this._color);
	s = Math.sin(this._anim * 5);
	bodyMat = new M44$().setTranslate$LV3$(this._pos).mul$LM44$(this._spinMat).mul$LM44$(new M44$().setRotateZ$N(this._vangle - s / 10)).mul$LM44$(new M44$().setRotateX$N(Math.PI / 2)).mul$LM44$(new M44$().setRotateY$N(Math.PI / 2));
	gl.uniformMatrix4fv(ulocs.modelMatrix, false, bodyMat.array$());
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Kingyo.eyes.ibuf);
	gl.drawElements(gl.TRIANGLES, 12, gl.UNSIGNED_SHORT, 0);
};

/**
 * class Poi extends Object
 * @constructor
 */
function Poi() {
}

Poi.prototype = new Object;
/**
 * @constructor
 */
function Poi$() {
	this._x = 0;
	this._y = 0;
	this._z = 1;
	this._down = false;
	this._live = true;
};

Poi$.prototype = new Poi;

/**
 * @param {WebGLRenderingContext} gl
 */
Poi.initWithGL$LWebGLRenderingContext$ = function (gl) {
	Poi.gl = gl;
	Poi.prog = Util$getProgram$SS('vt.vs', 'vt.fs');
	Poi.vtbuf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, Poi.vtbuf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ - 2, - 6, 2, - 6, 2, 2, - 2, 2, 0, 0, 1, 0, 1, 1, 0, 1 ]), gl.STATIC_DRAW);
	Poi.tex = Poi$loadTex$S('poi.png');
	Poi.texx = Poi$loadTex$S('poix.png');
};

var Poi$initWithGL$LWebGLRenderingContext$ = Poi.initWithGL$LWebGLRenderingContext$;

/**
 * @param {!string} filename
 * @return {WebGLTexture}
 */
Poi.loadTex$S = function (filename) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLTexture} */
	var tex;
	/** @type {HTMLImageElement} */
	var image;
	gl = Poi.gl;
	tex = gl.createTexture();
	image = (function (o) { return o instanceof HTMLImageElement ? o : null; })(dom.window.document.createElement('img'));
	image.onload = (function (e) {
		gl.bindTexture(gl.TEXTURE_2D, tex);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		gl.generateMipmap(gl.TEXTURE_2D);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	});
	image.src = filename;
	return tex;
};

var Poi$loadTex$S = Poi.loadTex$S;

/**
 * @param {!number} x
 * @param {!number} y
 * @return {Poi}
 */
Poi.prototype.setPosition$NN = function (x, y) {
	this._x = x;
	this._y = y;
	return this;
};

/**
 * @param {!boolean} d
 * @return {Poi}
 */
Poi.prototype.down$B = function (d) {
	this._down = d;
	return this;
};

/**
 * @return {!boolean}
 */
Poi.prototype.down$ = function () {
	return this._down;
};

/**
 * @param {!boolean} t
 * @return {Poi}
 */
Poi.prototype.tear$B = function (t) {
	this._live = ! t;
	return this;
};

/**
 * @return {!boolean}
 */
Poi.prototype.tearing$ = function () {
	return ! this._live;
};

/**
 * @param {M44} projMat
 * @param {M44} viewMat
 */
Poi.prototype.draw$LM44$LM44$ = function (projMat, viewMat) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLProgram} */
	var prog;
	/** @type {M44} */
	var mvMat;
	/** @type {!number} */
	var vloc;
	/** @type {!number} */
	var tloc;
	gl = Poi.gl;
	prog = Poi.prog;
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, projMat.array$());
	mvMat = new M44$LM44$(viewMat).mul$LM44$(new M44$().setTranslate$NNN(this._x, this._y, this._z));
	if (this._down) {
		mvMat.mul$LM44$(new M44$().setTranslate$NNN(0, 0, - 7)).mul$LM44$(new M44$().setRotateX$N(- 0.1));
	}
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, mvMat.array$());
	gl.bindBuffer(gl.ARRAY_BUFFER, Poi.vtbuf);
	vloc = gl.getAttribLocation(prog, 'vertex');
	tloc = gl.getAttribLocation(prog, 'texcoord');
	gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
	gl.vertexAttribPointer(tloc, 2, gl.FLOAT, false, 0, 4 * 8);
	gl.enableVertexAttribArray(vloc);
	gl.enableVertexAttribArray(tloc);
	gl.bindTexture(gl.TEXTURE_2D, this._live ? Poi.tex : Poi.texx);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(vloc);
	gl.disableVertexAttribArray(tloc);
};

/**
 * class Water extends Object
 * @constructor
 */
function Water() {
}

Water.prototype = new Object;
/**
 * @constructor
 */
function Water$() {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {!number} */
	var w;
	/** @type {!number} */
	var h;
	/** @type {WebGLFramebuffer} */
	var framebuffer;
	/** @type {!number} */
	var i;
	/** @type {Uint8Array} */
	var timg;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var b;
	/** @type {WebGLTexture} */
	var texture;
	/** @type {WebGLRenderbuffer} */
	var depthbuffer;
	this.texture = null;
	this.framebuffer = null;
	this.texturebuffer = null;
	this.depthbuffer = null;
	this.width = 0;
	this.height = 0;
	this._ix = - 1;
	this._iy = - 1;
	this._ir = 0;
	this._iz = 0;
	this._next_step_time = 0;
	gl = Water.gl;
	w = Water.tsize;
	h = Water.tsize;
	framebuffer = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
	for (i = 0; i < 2; ++ i) {
		timg = new Uint8Array(w * h * 4);
		for (y = 0; y < h; ++ y) {
			for (x = 0; x < w; ++ x) {
				b = (y * w + x) * 4;
				timg[b] = 128;
				timg[b + 1] = 128;
				timg[b + 2] = 0;
				timg[b + 3] = 0;
			}
		}
		texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, timg);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.bindTexture(gl.TEXTURE_2D, null);
		if (i === 0) {
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
			this.texturebuffer = texture;
		} else {
			this.texture = texture;
		}
	}
	depthbuffer = gl.createRenderbuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	this.framebuffer = framebuffer;
	this.depthbuffer = depthbuffer;
	this.width = w;
	this.height = h;
};

Water$.prototype = new Water;

/**
 * @param {WebGLRenderingContext} gl
 */
Water.initWithGL$LWebGLRenderingContext$ = function (gl) {
	Water.gl = gl;
	Water.progDisp = Util$getProgram$SS('water.vs', 'waterd.fs');
	Water.progVelo = Util$getProgram$SS('water.vs', 'waterv.fs');
	Water.vbuf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.vbuf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), gl.STATIC_DRAW);
	Water.drawProg = Util$getProgram$SS('vt.vs', 'refr.fs');
	Water.drawVBuf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.drawVBuf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ - 20, - 20, 20, - 20, 20, 20, - 20, 20 ]), gl.STATIC_DRAW);
	Water.drawTBuf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.drawTBuf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), gl.STATIC_DRAW);
};

var Water$initWithGL$LWebGLRenderingContext$ = Water.initWithGL$LWebGLRenderingContext$;

/**
 */
Water.prototype.destroy$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	gl = Water.gl;
	gl.deleteFramebuffer(this.framebuffer);
	gl.deleteTexture(this.texturebuffer);
	gl.deleteRenderbuffer(this.depthbuffer);
	gl.deleteTexture(this.texture);
};

/**
 * @param {!number} t
 */
Water.prototype.step$N = function (t) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {Int32Array} */
	var vp;
	if (! this._next_step_time) {
		this._next_step_time = t;
	}
	if (t < this._next_step_time) {
		return;
	}
	this._next_step_time += Water.time_step;
	if (this._next_step_time < t) {
		this._next_step_time = t;
	}
	gl = Water.gl;
	vp = (function (o) { return o instanceof Int32Array ? o : null; })(gl.getParameter(gl.VIEWPORT));
	if (! vp) {
		vp = new Int32Array((function (o) { return o instanceof Array ? o : null; })(gl.getParameter(gl.VIEWPORT)));
	}
	gl.disable(gl.BLEND);
	gl.disable(gl.DEPTH_TEST);
	this._step$LWebGLProgram$(Water.progDisp);
	this._step$LWebGLProgram$(Water.progVelo);
	gl.viewport((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[water.jsx:129] null access");
		}
		return v;
	}(vp[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[water.jsx:129] null access");
		}
		return v;
	}(vp[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[water.jsx:129] null access");
		}
		return v;
	}(vp[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[water.jsx:129] null access");
		}
		return v;
	}(vp[3])));
	gl.enable(gl.BLEND);
	gl.enable(gl.DEPTH_TEST);
	if (this._ir > 0) {
		this._ir = 0;
	}
};

/**
 * @param {WebGLProgram} prog
 */
Water.prototype._step$LWebGLProgram$ = function (prog) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {!number} */
	var vloc;
	/** @type {WebGLUniformLocation} */
	var impLoc;
	/** @type {WebGLTexture} */
	var tmpTex;
	gl = Water.gl;
	vloc = gl.getAttribLocation(prog, 'vertex');
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
	gl.viewport(0, 0, this.width, this.height);
	gl.useProgram(prog);
	impLoc = gl.getUniformLocation(prog, 'impulse');
	if (impLoc) {
		gl.uniform4f(impLoc, this._ix, this._iy, this._iz, this._ir);
	}
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, new M44$().setOrtho$NNNNNN(0, 1, 0, 1, - 1, 1).array$());
	gl.uniform2f(gl.getUniformLocation(prog, 'sampleStep'), 1 / this.width, 1 / this.height);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.vbuf);
	gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vloc);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(vloc);
	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	tmpTex = this.texturebuffer;
	this.texturebuffer = this.texture;
	this.texture = tmpTex;
};

/**
 */
Water.prototype.debugDraw$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLProgram} */
	var prog;
	/** @type {!number} */
	var vloc;
	gl = Water.gl;
	prog = Water.progDisp;
	vloc = gl.getAttribLocation(prog, 'vertex');
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, new M44$().setOrtho$NNNNNN(0, 1, 0, 1, - 1, 1).array$());
	gl.uniform2f(gl.getUniformLocation(prog, 'sampleStep'), 1 / this.width, 1 / this.height);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.vbuf);
	gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vloc);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(vloc);
};

/**
 * @param {M44} projMat
 * @param {M44} viewMat
 * @param {WebGLTexture} bgTex
 * @param {!number} w
 * @param {!number} h
 */
Water.prototype.draw$LM44$LM44$LWebGLTexture$NN = function (projMat, viewMat, bgTex, w, h) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLProgram} */
	var prog;
	/** @type {!number} */
	var vloc;
	/** @type {!number} */
	var tloc;
	gl = Water.gl;
	prog = Water.drawProg;
	vloc = gl.getAttribLocation(prog, 'vertex');
	tloc = gl.getAttribLocation(prog, 'texcoord');
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, projMat.array$());
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, viewMat.array$());
	gl.uniform2f(gl.getUniformLocation(prog, 'texSize'), w, h);
	gl.activeTexture(gl.TEXTURE1);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.uniform1i(gl.getUniformLocation(prog, 'waveTexture'), 1);
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, bgTex);
	gl.uniform1i(gl.getUniformLocation(prog, 'bgTexture'), 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.drawVBuf);
	gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vloc);
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.drawTBuf);
	gl.vertexAttribPointer(tloc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(tloc);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(vloc);
	gl.disableVertexAttribArray(tloc);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} r
 * @param {!number} z
 */
Water.prototype.setImpulse$NNNN = function (x, y, r, z) {
	this._ix = x;
	this._iy = y;
	this._ir = r;
	this._iz = z;
};

/**
 * class RenderTexture extends Object
 * @constructor
 */
function RenderTexture() {
}

RenderTexture.prototype = new Object;
/**
 * @constructor
 * @param {!number} w
 * @param {!number} h
 */
function RenderTexture$II(w, h) {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {WebGLFramebuffer} */
	var framebuffer;
	/** @type {WebGLTexture} */
	var texturebuffer;
	/** @type {WebGLRenderbuffer} */
	var depthbuffer;
	this._viewport = null;
	gl = RenderTexture.gl;
	framebuffer = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
	texturebuffer = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texturebuffer);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(w * h * 4));
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texturebuffer, 0);
	depthbuffer = gl.createRenderbuffer();
	gl.bindRenderbuffer(gl.RENDERBUFFER, depthbuffer);
	gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, w, h);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthbuffer);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	this.framebuffer = framebuffer;
	this.texturebuffer = texturebuffer;
	this.depthbuffer = depthbuffer;
	this.width = w;
	this.height = h;
};

RenderTexture$II.prototype = new RenderTexture;

/**
 * @param {WebGLRenderingContext} gl
 */
RenderTexture.initWithGL$LWebGLRenderingContext$ = function (gl) {
	RenderTexture.gl = gl;
};

var RenderTexture$initWithGL$LWebGLRenderingContext$ = RenderTexture.initWithGL$LWebGLRenderingContext$;

/**
 */
RenderTexture.prototype.destroy$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	gl = RenderTexture.gl;
	gl.deleteFramebuffer(this.framebuffer);
	gl.deleteTexture(this.texturebuffer);
	gl.deleteRenderbuffer(this.depthbuffer);
};

/**
 */
RenderTexture.prototype.begin$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	gl = RenderTexture.gl;
	this._viewport = (function (o) { return o instanceof Int32Array ? o : null; })(gl.getParameter(gl.VIEWPORT));
	if (! this._viewport) {
		this._viewport = new Int32Array((function (v) {
			if (! (v == null || v instanceof Array)) {
				debugger;
				throw new Error("[rendertexture.jsx:64] detected invalid cast, value is not an Array or null");
			}
			return v;
		}(gl.getParameter(gl.VIEWPORT))));
	}
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
	gl.viewport(0, 0, this.width, this.height);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

/**
 */
RenderTexture.prototype.end$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {Int32Array} */
	var vp;
	gl = RenderTexture.gl;
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	vp = this._viewport;
	gl.viewport((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[rendertexture.jsx:79] null access");
		}
		return v;
	}(vp[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[rendertexture.jsx:79] null access");
		}
		return v;
	}(vp[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[rendertexture.jsx:79] null access");
		}
		return v;
	}(vp[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[rendertexture.jsx:79] null access");
		}
		return v;
	}(vp[3])));
};

/**
 * @return {WebGLTexture}
 */
RenderTexture.prototype.texture$ = function () {
	return this.texturebuffer;
};

Game.viewDistance = 80;
Game.viewLean = 0.2;
Game.near = 2;
Game.far = 1000;
Game.fovh = 0.2;
Game.fovv = 0.2;
Game.gl = null;
$__jsx_lazy_init(Game, "projMat", function () {
	return new M44$().setFrustum$NNNNNN(- Game.near * Game.fovh, Game.near * Game.fovh, - Game.near * Game.fovv, Game.near * Game.fovv, Game.near, Game.far);
});
$__jsx_lazy_init(Game, "viewMat", function () {
	return new M44$().setTranslate$NNN(0, 0, - Game.viewDistance).mul$LM44$(new M44$().setRotateX$N(- Game.viewLean));
});
Game.poi = null;
Game.water = null;
Game.canvas = null;
Game.renderTex = null;
Game.bltProg = null;
Game.bltULocs = null;
Game.bltALocs = null;
Game.bltVTBuf = null;
Game.life = 1;
Game.poi_down_time = 0;
Game.damage_per_second = 0.5;
Game.life_bar = null;
Game.life_bar_width = 100;
Game.status_text = null;
Game.startTime = 0;
js.global = (function () { return this; })();

$__jsx_lazy_init(dom, "window", function () {
	return js.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return (function (v) {
		if (! (v == null || v instanceof HTMLDocument)) {
			debugger;
			throw new Error("[/Users/haga.takeshi/Documents/JSX/lib/js/js/web.jsx:16] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(js.global.document));
});
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
Util.gl = null;
MVQ.EQUAL_EPSILON = 0.000001;
M22.ROWS = 2;
M22.COLS = 2;
$__jsx_lazy_init(M22, "ELEMS", function () {
	return M22.ROWS * M22.COLS;
});
M33.ROWS = 3;
M33.COLS = 3;
$__jsx_lazy_init(M33, "ELEMS", function () {
	return M33.ROWS * M33.COLS;
});
M44.ROWS = 4;
M44.COLS = 4;
$__jsx_lazy_init(M44, "ELEMS", function () {
	return M44.ROWS * M44.COLS;
});
Quat.ELEMS = 4;
Kingyo.bound = 10;
Kingyo.gl = null;
Kingyo.prog = null;
Kingyo.ulocs = null;
Kingyo.alocs = null;
Kingyo.body = null;
Kingyo.lfin = null;
Kingyo.rfin = null;
Kingyo.bfin = null;
Kingyo.tfin = null;
$__jsx_lazy_init(Kingyo, "all", function () {
	return [  ];
});
Kingyo.prevTime = 0;
Kingyo.eyeProg = null;
Kingyo.eyeULocs = null;
Kingyo.eyeALocs = null;
Kingyo.eyes = null;
Poi.gl = null;
Poi.prog = null;
Poi.vtbuf = null;
Poi.tex = null;
Poi.texx = null;
Water.gl = null;
Water.progDisp = null;
Water.progVelo = null;
Water.vbuf = null;
Water.drawProg = null;
Water.drawVBuf = null;
Water.drawTBuf = null;
Water.tsize = 64;
Water.time_step = 0.02;
RenderTexture.gl = null;
var $__jsx_classMap = {
	"game.jsx": {
		Game: Game,
		Game$: Game$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom$
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer$,
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle$
	},
	"webgl-util.jsx": {
		Util: Util,
		Util$: Util$
	},
	"mvq.jsx": {
		MVQ: MVQ,
		MVQ$: MVQ$,
		V2: V2,
		V2$: V2$,
		V2$LV2$: V2$LV2$,
		V2$AN: V2$AN,
		V2$LFloat32Array$: V2$LFloat32Array$,
		V2$NN: V2$NN,
		V2$LV3$: V2$LV3$,
		V2$LV4$: V2$LV4$,
		V3: V3,
		V3$: V3$,
		V3$LV3$: V3$LV3$,
		V3$AN: V3$AN,
		V3$LFloat32Array$: V3$LFloat32Array$,
		V3$NNN: V3$NNN,
		V3$LV2$N: V3$LV2$N,
		V3$LV4$: V3$LV4$,
		V4: V4,
		V4$: V4$,
		V4$LV4$: V4$LV4$,
		V4$AN: V4$AN,
		V4$LFloat32Array$: V4$LFloat32Array$,
		V4$NNNN: V4$NNNN,
		V4$LV2$NN: V4$LV2$NN,
		V4$LV3$N: V4$LV3$N,
		M22: M22,
		M22$: M22$,
		M22$LM22$: M22$LM22$,
		M22$AN: M22$AN,
		M22$LFloat32Array$: M22$LFloat32Array$,
		M22$NNNN: M22$NNNN,
		M22$LV2$LV2$: M22$LV2$LV2$,
		M22$LM33$: M22$LM33$,
		M22$LM44$: M22$LM44$,
		M33: M33,
		M33$: M33$,
		M33$LM33$: M33$LM33$,
		M33$AN: M33$AN,
		M33$LFloat32Array$: M33$LFloat32Array$,
		M33$NNNNNNNNN: M33$NNNNNNNNN,
		M33$LV3$LV3$LV3$: M33$LV3$LV3$LV3$,
		M33$LM22$N: M33$LM22$N,
		M33$LM44$: M33$LM44$,
		M44: M44,
		M44$: M44$,
		M44$LM44$: M44$LM44$,
		M44$AN: M44$AN,
		M44$LFloat32Array$: M44$LFloat32Array$,
		M44$NNNNNNNNNNNNNNNN: M44$NNNNNNNNNNNNNNNN,
		M44$LV4$LV4$LV4$LV4$: M44$LV4$LV4$LV4$LV4$,
		M44$LM22$NN: M44$LM22$NN,
		M44$LM33$N: M44$LM33$N,
		Quat: Quat,
		Quat$: Quat$,
		Quat$LQuat$: Quat$LQuat$,
		Quat$AN: Quat$AN,
		Quat$LFloat32Array$: Quat$LFloat32Array$,
		Quat$NNNN: Quat$NNNN,
		_Main: _Main,
		_Main$: _Main$
	},
	"kingyo.jsx": {
		_Part: _Part,
		_Part$: _Part$,
		Kingyo: Kingyo,
		Kingyo$: Kingyo$
	},
	"poi.jsx": {
		Poi: Poi,
		Poi$: Poi$
	},
	"water.jsx": {
		Water: Water,
		Water$: Water$
	},
	"rendertexture.jsx": {
		RenderTexture: RenderTexture,
		RenderTexture$II: RenderTexture$II
	}
};


})();
