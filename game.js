// generatedy by JSX compiler 0.9.4 (2013-02-01 15:36:58 +0900; 586ca84ff65e48b8e38268e9e1ed9e4aadf86a7b)
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

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
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
	/** @type {undefined|!string} */
	var lbw;
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {*} */
	var playSound;
	/** @type {*} */
	var getPoint;
	/** @type {Array.<undefined|!number>} */
	var lastTouchPos;
	/** @type {*} */
	var calcMousePosOnXYPlane;
	/** @type {*} */
	var touchStart;
	/** @type {*} */
	var touchEnd;
	/** @type {*} */
	var touchMove;
	/** @type {*} */
	var update;
	/** @type {*} */
	var render;
	/** @type {*} */
	var update_render;
	canvas = dom.document.getElementById(canvas_id);
	ww = dom.window.innerWidth;
	wh = dom.window.innerHeight;
	canvas_size = (ww <= wh ? ww : wh);
	canvas.width = canvas_size;
	canvas.height = canvas_size;
	Game.status_text = dom.document.getElementById('status');
	Game.life_bar = dom.document.getElementById(life_id);
	lbw = Game.life_bar.style.width;
	Game.life_bar_width = lbw.substring(0, lbw.length - 2) | 0;
	gl = Util$getWebGL$S(canvas_id);
	Game.gl = gl;
	Poi$initWithGL$LWebGLRenderingContext$(gl);
	Kingyo$initWithGL$LWebGLRenderingContext$(gl);
	Water$initWithGL$LWebGLRenderingContext$(gl);
	RenderTexture.gl = gl;
	Game.poi = {_x: 0, _y: 0, _z: 1, _down: false, _live: true};
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
		s = dom.window.document.createElement('audio');
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
			me = e;
			px = me.clientX;
			py = me.clientY;
		} else {
			if (e instanceof TouchEvent) {
				te = e;
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
		/** @type {V3} */
		var this$0;
		/** @type {!number} */
		var l$0;
		/** @type {Float32Array} */
		var _$0;
		wx = p[0] / canvas.width * 2 - 1;
		wy = - p[1] / canvas.height * 2 + 1;
		epos = V3$transformBy$LV3$LM33$(new V3$NNN(0, 0, 80), M33$setRotateX$LM33$N({_: new Float32Array(9)}, 0.2));
		this$0 = V3$transformBy$LV3$LM33$(new V3$NNN(0.2 * wx, 0.2 * wy, -1), M33$setRotateX$LM33$N({_: new Float32Array(9)}, 0.2));
		l$0 = Math.sqrt(V3$len2$LV3$(this$0));
		pdir = (l$0 > 0 ? V3$mul$LV3$N(this$0, 1 / l$0) : this$0);
		hpos = V3$add$LV3$LV3$(V3$mul$LV3$N(new V3$LV3$(pdir), epos._[2] / - pdir._[2]), epos);
		return [ (_$0 = hpos._)[0], _$0[1] ];
	});
	touchStart = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Array.<undefined|Kingyo>} */
		var hit;
		/** @type {Poi} */
		var this$0;
		/** @type {!number} */
		var x$0;
		/** @type {!number} */
		var y$0;
		/** @type {Poi} */
		var this$1;
		/** @type {Poi} */
		var this$2;
		/** @type {Poi} */
		var this$3;
		/** @type {Water} */
		var this$4;
		/** @type {!number} */
		var x$1;
		/** @type {!number} */
		var y$1;
		e.preventDefault();
		lastTouchPos = getPoint(e);
		pos = calcMousePosOnXYPlane(lastTouchPos);
		this$0 = Game.poi;
		x$0 = pos[0];
		y$0 = pos[1];
		this$0._x = x$0;
		this$0._y = y$0;
		if (Poi$tearing$LPoi$(Game.poi) || Kingyo$numRests$() === 0) {
			Game.life = 1;
			Game.life_bar.style.width = Game.life_bar_width.toString() + "px";
			this$1 = Game.poi;
			this$1._live = ! false;
			Kingyo$reset$();
			Game.status_text.innerHTML = 'click to start';
		} else {
			if (! Poi$tearing$LPoi$(Game.poi)) {
				this$2 = Game.poi;
				this$2._down = true;
				Game.poi_down_time = Date.now() / 1000;
				if (Game.startTime === 0) {
					Game.startTime = Date.now();
				}
			}
			hit = Kingyo$hit$NN(pos[0], pos[1]);
			if (hit.length > 0) {
				this$3 = Game.poi;
				this$3._live = ! true;
				playSound('tear.mp3');
				Game.startTime = 0;
			}
			this$4 = Game.water;
			x$1 = pos[0] / 40 + 0.5;
			y$1 = pos[1] / 40 + 0.5;
			this$4._ix = x$1;
			this$4._iy = y$1;
			this$4._ir = 0.03;
			this$4._iz = 0;
		}
	});
	canvas.addEventListener("mousedown", touchStart);
	canvas.addEventListener("touchstart", touchStart);
	touchEnd = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Array.<undefined|Kingyo>} */
		var hit;
		/** @type {Poi} */
		var this$0;
		/** @type {!number} */
		var x$0;
		/** @type {!number} */
		var y$0;
		/** @type {Poi} */
		var this$1;
		/** @type {Water} */
		var this$2;
		/** @type {!number} */
		var x$1;
		/** @type {!number} */
		var y$1;
		/** @type {Poi} */
		var this$3;
		e.preventDefault();
		if (e instanceof MouseEvent) {
			lastTouchPos = getPoint(e);
		}
		pos = calcMousePosOnXYPlane(lastTouchPos);
		this$0 = Game.poi;
		x$0 = pos[0];
		y$0 = pos[1];
		this$0._x = x$0;
		this$0._y = y$0;
		this$1 = Game.poi;
		if (this$1._down) {
			if (! Poi$tearing$LPoi$(Game.poi)) {
				hit = Kingyo$hit$NN(pos[0], pos[1]);
				Kingyo$fish$ALKingyo$(hit);
				if (hit.length > 0) {
					playSound('fish.mp3');
				}
				if (Kingyo$numRests$() === 0) {
					Game.startTime = 0;
				}
			}
			this$2 = Game.water;
			x$1 = pos[0] / 40 + 0.5;
			y$1 = pos[1] / 40 + 0.5;
			this$2._ix = x$1;
			this$2._iy = y$1;
			this$2._ir = 0.03;
			this$2._iz = 1;
		}
		this$3 = Game.poi;
		this$3._down = false;
	});
	canvas.addEventListener("mouseup", touchEnd);
	canvas.addEventListener("touchend", touchEnd);
	touchMove = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Poi} */
		var this$0;
		/** @type {!number} */
		var x$0;
		/** @type {!number} */
		var y$0;
		/** @type {Poi} */
		var this$1;
		/** @type {Water} */
		var this$2;
		/** @type {!number} */
		var x$1;
		/** @type {!number} */
		var y$1;
		e.preventDefault();
		lastTouchPos = getPoint(e);
		pos = calcMousePosOnXYPlane(lastTouchPos);
		this$0 = Game.poi;
		x$0 = pos[0];
		y$0 = pos[1];
		this$0._x = x$0;
		this$0._y = y$0;
		this$1 = Game.poi;
		if (this$1._down) {
			this$2 = Game.water;
			x$1 = pos[0] / 40 + 0.5;
			y$1 = pos[1] / 40 + 0.5;
			this$2._ix = x$1;
			this$2._iy = y$1;
			this$2._ir = 0.02;
			this$2._iz = 0.2;
		}
	});
	canvas.addEventListener("mousemove", touchMove);
	canvas.addEventListener("touchmove", touchMove);
	canvas.onmouseout = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Poi} */
		var this$0;
		/** @type {!number} */
		var x$0;
		/** @type {!number} */
		var y$0;
		/** @type {Poi} */
		var this$1;
		pos = calcMousePosOnXYPlane(getPoint(e));
		this$0 = Game.poi;
		x$0 = pos[0];
		y$0 = pos[1];
		this$0._x = x$0;
		this$0._y = y$0;
		this$1 = Game.poi;
		this$1._down = false;
	});
	canvas.oncontextmenu = (function (e) {
		e.preventDefault();
	});
	canvas.style.cursor = 'none';
	Game.canvas = canvas;
	Game.renderTex = new RenderTexture$II(canvas.width, canvas.height);
	update = (function () {
		/** @type {!number} */
		var t;
		/** @type {Poi} */
		var this$0;
		/** @type {Poi} */
		var this$1;
		t = Date.now() / 1000;
		Kingyo$update$N(t);
		Game.water.step$N(t);
		this$0 = Game.poi;
		if (this$0._down) {
			Game.life -= (t - Game.poi_down_time) * 0.5;
			Game.poi_down_time = t;
			if (Game.life < 0 && ! Poi$tearing$LPoi$(Game.poi)) {
				Game.life = 0;
				this$1 = Game.poi;
				this$1._live = ! true;
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
		/** @type {Poi} */
		var this$0;
		/** @type {RenderTexture} */
		var this$1;
		/** @type {WebGLRenderingContext} */
		var gl$0;
		/** @type {Int32Array} */
		var vp$0;
		update();
		gl = Game.gl;
		Game.renderTex.begin$();
		gl.clearColor(0.2, 0.6, 0.8, 1);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.enable(gl.DEPTH_TEST);
		gl.enable(gl.BLEND);
		gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
		Kingyo$drawUnderWater$LM44$LM44$(Game.projMat, Game.viewMat);
		this$0 = Game.poi;
		if (this$0._down) {
			Poi$draw$LPoi$LM44$LM44$(Game.poi, Game.projMat, Game.viewMat);
		}
		this$1 = Game.renderTex;
		gl$0 = RenderTexture.gl;
		gl$0.bindFramebuffer(gl$0.FRAMEBUFFER, null);
		vp$0 = this$1._viewport;
		gl$0.viewport(vp$0[0], vp$0[1], vp$0[2], vp$0[3]);
		gl.clear(gl.DEPTH_BUFFER_BIT);
		gl.useProgram(Game.bltProg);
		gl.bindTexture(gl.TEXTURE_2D, Game.renderTex.texture$());
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.uniform1i(Game.bltULocs.texture, 0);
		gl.uniformMatrix4fv(Game.bltULocs.projectionMatrix, false, M44$array$LM44$(M44$setOrtho$LM44$NNNNNN({_: new Float32Array(16)}, 0, 1, 0, 1, -1, 0)));
		gl.uniformMatrix4fv(Game.bltULocs.modelviewMatrix, false, M44$array$LM44$(M44$setIdentity$LM44$({_: new Float32Array(16)})));
		gl.bindBuffer(gl.ARRAY_BUFFER, Game.bltVTBuf);
		gl.vertexAttribPointer(Game.bltALocs.vertex, 2, gl.FLOAT, false, 0, 0);
		gl.vertexAttribPointer(Game.bltALocs.texcoord, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(Game.bltALocs.vertex);
		gl.enableVertexAttribArray(Game.bltALocs.texcoord);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		gl.disableVertexAttribArray(Game.bltALocs.vertex);
		gl.disableVertexAttribArray(Game.bltALocs.texcoord);
		Game.water.draw$LM44$LM44$LWebGLTexture$NN(Game.projMat, Game.viewMat, Game.renderTex.texture$(), Game.canvas.offsetWidth, Game.canvas.offsetHeight);
		Kingyo$drawAboveWater$LM44$LM44$(Game.projMat, Game.viewMat);
		if (! Poi$down$LPoi$(Game.poi)) {
			Poi$draw$LPoi$LM44$LM44$(Game.poi, Game.projMat, Game.viewMat);
		}
		err = gl.getError();
		if (err !== 0) {
		}
	});
	update_render = (function (time) {
		update();
		render();
		Timer._requestAnimationFrame(update_render);
	});
	update_render(0);
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
	return dom.document.getElementById(id);
};

var dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return dom.document.getElementById(id);
};

var dom$getElementById$S = dom.getElementById$S;

/**
 * @param {!string} tag
 * @return {HTMLElement}
 */
dom.createElement$S = function (tag) {
	return dom.document.createElement(tag);
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
 * @param {*} callback
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$N = function (callback, intervalMS) {
	return js.global.setTimeout(callback, intervalMS);
};

var Timer$setTimeout$F$V$N = Timer.setTimeout$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearTimeout$LTimerHandle$ = function (timer) {
	js.global.clearTimeout(timer);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {*} callback
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$N = function (callback, intervalMS) {
	return js.global.setInterval(callback, intervalMS);
};

var Timer$setInterval$F$V$N = Timer.setInterval$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearInterval$LTimerHandle$ = function (timer) {
	js.global.clearInterval(timer);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

/**
 * @param {*} callback
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
 * @return {*}
 */
Timer._getRequestAnimationFrameImpl$B = function (useNativeImpl) {
	/** @type {!number} */
	var lastTime;
	if (useNativeImpl) {
		if (js.global.requestAnimationFrame) {
			return (function (callback) {
				return js.global.requestAnimationFrame(callback);
			});
		} else {
			if (js.global.webkitRequestAnimationFrame) {
				return (function (callback) {
					return js.global.webkitRequestAnimationFrame(callback);
				});
			} else {
				if (js.global.mozRequestAnimationFrame) {
					return (function (callback) {
						return js.global.mozRequestAnimationFrame(callback);
					});
				} else {
					if (js.global.oRequestAnimationFrame) {
						return (function (callback) {
							return js.global.oRequestAnimationFrame(callback);
						});
					} else {
						if (js.global.msRequestAnimationFrame) {
							return (function (callback) {
								return js.global.msRequestAnimationFrame(callback);
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
		/** @type {!number} */
		var value2$0;
		now = Date.now();
		value2$0 = 16 - (now - lastTime);
		timeToCall = (0 >= value2$0 ? 0 : value2$0);
		lastTime = now + timeToCall;
		return js.global.setTimeout((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

var Timer$_getRequestAnimationFrameImpl$B = Timer._getRequestAnimationFrameImpl$B;

/**
 * @param {!boolean} useNativeImpl
 * @return {*}
 */
Timer._getCancelAnimationFrameImpl$B = function (useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				js.global.cancelAnimationFrame(timer);
			});
		} else {
			if (js.global.webkitCancelAnimationFrame) {
				return (function (timer) {
					js.global.webkitCancelAnimationFrame(timer);
				});
			} else {
				if (js.global.mozCancelAnimationFrame) {
					return (function (timer) {
						js.global.mozCancelAnimationFrame(timer);
					});
				} else {
					if (js.global.oCancelAnimationFrame) {
						return (function (timer) {
							js.global.oCancelAnimationFrame(timer);
						});
					} else {
						if (js.global.msCancelAnimationFrame) {
							return (function (timer) {
								js.global.msCancelAnimationFrame(timer);
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
	canvas = dom.document.getElementById(canvas_id);
	ctx_names = [ 'webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d' ];
	ctx = null;
	for (ni in ctx_names) {
		try {
			ctx = canvas.getContext(ctx_names[ni]);
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
	/** @type {XMLHttpRequest} */
	var xhr$0;
	gl = Util.gl;
	xhr$0 = new XMLHttpRequest();
	xhr$0.open("GET", url, false);
	xhr$0.send();
	src = xhr$0.responseText;
	shader = gl.createShader(type);
	gl.shaderSource(shader, src);
	gl.compileShader(shader);
	return (! (!! gl.getShaderParameter(shader, gl.COMPILE_STATUS)) ? null : shader);
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
	return (! (!! gl.getProgramParameter(program, gl.LINK_STATUS)) ? null : program);
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
		alocs[attr.name] = (gl.getAttribLocation(prog, attr.name) | 0);
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
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(2);
	_$0.set(v._);
};

V2$LV2$.prototype = new V2;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V2$AN(v) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(2);
	_$0.set(v);
};

V2$AN.prototype = new V2;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V2$LFloat32Array$(v) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(2);
	_$0.set(v);
};

V2$LFloat32Array$.prototype = new V2;

/**
 * @constructor
 * @param {!number} x
 * @param {!number} y
 */
function V2$NN(x, y) {
	this._ = new Float32Array(2);
	this._[0] = x;
	this._[1] = y;
};

V2$NN.prototype = new V2;

/**
 * @constructor
 * @param {V3} v
 */
function V2$LV3$(v) {
	this._ = new Float32Array(2);
	V2$set$LV2$LV3$(this, v);
};

V2$LV3$.prototype = new V2;

/**
 * @constructor
 * @param {V4} v
 */
function V2$LV4$(v) {
	this._ = new Float32Array(2);
	V2$set$LV2$LV4$(this, v);
};

V2$LV4$.prototype = new V2;

/**
 * @param {V2} $this
 * @return {Float32Array}
 */
V2.array$LV2$ = function ($this) {
	return $this._;
};

var V2$array$LV2$ = V2.array$LV2$;

/**
 * @param {V2} $this
 * @param {!number} z
 * @return {V3}
 */
V2.v3$LV2$N = function ($this, z) {
	return new V3$LV2$N($this, z);
};

var V2$v3$LV2$N = V2.v3$LV2$N;

/**
 * @param {V2} $this
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V2.v4$LV2$NN = function ($this, z, w) {
	return new V4$LV2$NN($this, z, w);
};

var V2$v4$LV2$NN = V2.v4$LV2$NN;

/**
 * @param {V2} $this
 * @param {V3} v
 * @return {V2}
 */
V2.set$LV2$LV3$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	$this._[0] = x$0;
	$this._[1] = y$0;
	return $this;
};

var V2$set$LV2$LV3$ = V2.set$LV2$LV3$;

/**
 * @param {V2} $this
 * @param {V4} v
 * @return {V2}
 */
V2.set$LV2$LV4$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	$this._[0] = x$0;
	$this._[1] = y$0;
	return $this;
};

var V2$set$LV2$LV4$ = V2.set$LV2$LV4$;

/**
 * @param {V2} $this
 * @return {V2}
 */
V2.clone$LV2$ = function ($this) {
	return new V2$LV2$($this);
};

var V2$clone$LV2$ = V2.clone$LV2$;

/**
 * @param {V2} $this
 * @return {V2}
 */
V2.clear$LV2$ = function ($this) {
	$this._[0] = 0;
	$this._[1] = 0;
	return $this;
};

var V2$clear$LV2$ = V2.clear$LV2$;

/**
 * @param {V2} $this
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.set$LV2$NN = function ($this, x, y) {
	$this._[0] = x;
	$this._[1] = y;
	return $this;
};

var V2$set$LV2$NN = V2.set$LV2$NN;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {V2}
 */
V2.set$LV2$LV2$ = function ($this, v) {
	$this._.set(v._);
	return $this;
};

var V2$set$LV2$LV2$ = V2.set$LV2$LV2$;

/**
 * @param {V2} $this
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.set$LV2$AN = function ($this, v) {
	$this._.set(v);
	return $this;
};

var V2$set$LV2$AN = V2.set$LV2$AN;

/**
 * @param {V2} $this
 * @param {Float32Array} v
 * @return {V2}
 */
V2.set$LV2$LFloat32Array$ = function ($this, v) {
	$this._.set(v);
	return $this;
};

var V2$set$LV2$LFloat32Array$ = V2.set$LV2$LFloat32Array$;

/**
 * @param {V2} $this
 * @return {!number}
 */
V2.x$LV2$ = function ($this) {
	return $this._[0];
};

var V2$x$LV2$ = V2.x$LV2$;

/**
 * @param {V2} $this
 * @return {!number}
 */
V2.y$LV2$ = function ($this) {
	return $this._[1];
};

var V2$y$LV2$ = V2.y$LV2$;

/**
 * @param {V2} $this
 * @param {!number} val
 * @return {V2}
 */
V2.x$LV2$N = function ($this, val) {
	$this._[0] = val;
	return $this;
};

var V2$x$LV2$N = V2.x$LV2$N;

/**
 * @param {V2} $this
 * @param {!number} val
 * @return {V2}
 */
V2.y$LV2$N = function ($this, val) {
	$this._[1] = val;
	return $this;
};

var V2$y$LV2$N = V2.y$LV2$N;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {!boolean}
 */
V2.equals$LV2$LV2$ = function ($this, v) {
	var $math_abs_t;
	return (($math_abs_t = v._[0] - $this._[0]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v._[1] - $this._[1]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001;
};

var V2$equals$LV2$LV2$ = V2.equals$LV2$LV2$;

/**
 * @param {V2} $this
 * @param {V2} v
 * @param {!number} eps
 * @return {!boolean}
 */
V2.equals$LV2$LV2$N = function ($this, v, eps) {
	var $math_abs_t;
	return (($math_abs_t = v._[0] - $this._[0]) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v._[1] - $this._[1]) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

var V2$equals$LV2$LV2$N = V2.equals$LV2$LV2$N;

/**
 * @param {V2} $this
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.add$LV2$NN = function ($this, x, y) {
	$this._[0] += x;
	$this._[1] += y;
	return $this;
};

var V2$add$LV2$NN = V2.add$LV2$NN;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {V2}
 */
V2.add$LV2$LV2$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	$this._[0] += x$0;
	$this._[1] += y$0;
	return $this;
};

var V2$add$LV2$LV2$ = V2.add$LV2$LV2$;

/**
 * @param {V2} $this
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.add$LV2$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this._[0] += x$0;
	$this._[1] += y$0;
	return $this;
};

var V2$add$LV2$AN = V2.add$LV2$AN;

/**
 * @param {V2} $this
 * @param {Float32Array} v
 * @return {V2}
 */
V2.add$LV2$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this._[0] += x$0;
	$this._[1] += y$0;
	return $this;
};

var V2$add$LV2$LFloat32Array$ = V2.add$LV2$LFloat32Array$;

/**
 * @param {V2} $this
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.sub$LV2$NN = function ($this, x, y) {
	$this._[0] -= x;
	$this._[1] -= y;
	return $this;
};

var V2$sub$LV2$NN = V2.sub$LV2$NN;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {V2}
 */
V2.sub$LV2$LV2$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	return $this;
};

var V2$sub$LV2$LV2$ = V2.sub$LV2$LV2$;

/**
 * @param {V2} $this
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.sub$LV2$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	return $this;
};

var V2$sub$LV2$AN = V2.sub$LV2$AN;

/**
 * @param {V2} $this
 * @param {Float32Array} v
 * @return {V2}
 */
V2.sub$LV2$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	return $this;
};

var V2$sub$LV2$LFloat32Array$ = V2.sub$LV2$LFloat32Array$;

/**
 * @param {V2} $this
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.mul$LV2$NN = function ($this, x, y) {
	$this._[0] *= x;
	$this._[1] *= y;
	return $this;
};

var V2$mul$LV2$NN = V2.mul$LV2$NN;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {V2}
 */
V2.mul$LV2$LV2$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	return $this;
};

var V2$mul$LV2$LV2$ = V2.mul$LV2$LV2$;

/**
 * @param {V2} $this
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.mul$LV2$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	return $this;
};

var V2$mul$LV2$AN = V2.mul$LV2$AN;

/**
 * @param {V2} $this
 * @param {Float32Array} v
 * @return {V2}
 */
V2.mul$LV2$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	return $this;
};

var V2$mul$LV2$LFloat32Array$ = V2.mul$LV2$LFloat32Array$;

/**
 * @param {V2} $this
 * @param {!number} s
 * @return {V2}
 */
V2.mul$LV2$N = function ($this, s) {
	$this._[0] *= s;
	$this._[1] *= s;
	return $this;
};

var V2$mul$LV2$N = V2.mul$LV2$N;

/**
 * @param {V2} $this
 * @return {V2}
 */
V2.neg$LV2$ = function ($this) {
	$this._[0] *= -1;
	$this._[1] *= -1;
	return $this;
};

var V2$neg$LV2$ = V2.neg$LV2$;

/**
 * @param {V2} $this
 * @return {V2}
 */
V2.normalize$LV2$ = function ($this) {
	/** @type {!number} */
	var l;
	l = Math.sqrt(V2$len2$LV2$($this));
	return (l > 0 ? V2$mul$LV2$N($this, 1 / l) : $this);
};

var V2$normalize$LV2$ = V2.normalize$LV2$;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {!number}
 */
V2.cross$LV2$LV2$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	return (_$1 = $this._)[0] * (_$0 = v._)[1] - _$0[0] * _$1[1];
};

var V2$cross$LV2$LV2$ = V2.cross$LV2$LV2$;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {!number}
 */
V2.dot$LV2$LV2$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	return (_$0 = $this._)[0] * (_$1 = v._)[0] + _$0[1] * _$1[1];
};

var V2$dot$LV2$LV2$ = V2.dot$LV2$LV2$;

/**
 * @param {V2} $this
 * @return {!number}
 */
V2.len$LV2$ = function ($this) {
	return Math.sqrt(V2$len2$LV2$($this));
};

var V2$len$LV2$ = V2.len$LV2$;

/**
 * @param {V2} $this
 * @return {!number}
 */
V2.len2$LV2$ = function ($this) {
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {Float32Array} */
	var _$0;
	(x = (_$0 = $this._)[0], y = _$0[1]);
	return x * x + y * y;
};

var V2$len2$LV2$ = V2.len2$LV2$;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {!number}
 */
V2.dist$LV2$LV2$ = function ($this, v) {
	return Math.sqrt(V2$dist2$LV2$LV2$($this, v));
};

var V2$dist$LV2$LV2$ = V2.dist$LV2$LV2$;

/**
 * @param {V2} $this
 * @param {V2} v
 * @return {!number}
 */
V2.dist2$LV2$LV2$ = function ($this, v) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	x = (_$0 = v._)[0] - (_$1 = $this._)[0];
	y = _$0[1] - _$1[1];
	return x * x + y * y;
};

var V2$dist2$LV2$LV2$ = V2.dist2$LV2$LV2$;

/**
 * @param {V2} $this
 * @param {V2} v0
 * @param {V2} v1
 * @param {!number} ratio
 * @return {V2}
 */
V2.lerp$LV2$LV2$LV2$N = function ($this, v0, v1, ratio) {
	$this._[0] = v0._[0] + ratio * (v1._[0] - v0._[0]);
	$this._[1] = v0._[1] + ratio * (v1._[1] - v0._[1]);
	return $this;
};

var V2$lerp$LV2$LV2$LV2$N = V2.lerp$LV2$LV2$LV2$N;

/**
 * @param {V2} $this
 * @param {M22} m
 * @return {V2}
 */
V2.transformBy$LV2$LM22$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var t;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	(a = $this._, t = m._);
	(x = a[0], y = a[1]);
	a[0] = t[0] * x + t[2] * y;
	a[1] = t[1] * x + t[3] * y;
	return $this;
};

var V2$transformBy$LV2$LM22$ = V2.transformBy$LV2$LM22$;

/**
 * @param {V2} $this
 * @param {M33} m
 * @return {V2}
 */
V2.transformBy$LV2$LM33$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var t;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	(a = $this._, t = m._);
	(x = a[0], y = a[1]);
	a[0] = t[0] * x + t[3] * y + t[6];
	a[1] = t[1] * x + t[4] * y + t[7];
	return $this;
};

var V2$transformBy$LV2$LM33$ = V2.transformBy$LV2$LM33$;

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
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(3);
	_$0.set(v._);
};

V3$LV3$.prototype = new V3;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V3$AN(v) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(3);
	_$0.set(v);
};

V3$AN.prototype = new V3;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V3$LFloat32Array$(v) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(3);
	_$0.set(v);
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
	this._[0] = x;
	this._[1] = y;
	this._[2] = z;
};

V3$NNN.prototype = new V3;

/**
 * @constructor
 * @param {V2} v
 * @param {!number} z
 */
function V3$LV2$N(v, z) {
	this._ = new Float32Array(3);
	V3$set$LV3$LV2$N(this, v, z);
};

V3$LV2$N.prototype = new V3;

/**
 * @constructor
 * @param {V4} v
 */
function V3$LV4$(v) {
	this._ = new Float32Array(3);
	V3$set$LV3$LV4$(this, v);
};

V3$LV4$.prototype = new V3;

/**
 * @param {V3} $this
 * @return {Float32Array}
 */
V3.array$LV3$ = function ($this) {
	return $this._;
};

var V3$array$LV3$ = V3.array$LV3$;

/**
 * @param {V3} $this
 * @return {V2}
 */
V3.v2$LV3$ = function ($this) {
	return new V2$LV3$($this);
};

var V3$v2$LV3$ = V3.v2$LV3$;

/**
 * @param {V3} $this
 * @param {!number} w
 * @return {V4}
 */
V3.v4$LV3$N = function ($this, w) {
	return new V4$LV3$N($this, w);
};

var V3$v4$LV3$N = V3.v4$LV3$N;

/**
 * @param {V3} $this
 * @param {V2} v
 * @param {!number} z
 * @return {V3}
 */
V3.set$LV3$LV2$N = function ($this, v, z) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	$this._[0] = x$0;
	$this._[1] = y$0;
	$this._[2] = z;
	return $this;
};

var V3$set$LV3$LV2$N = V3.set$LV3$LV2$N;

/**
 * @param {V3} $this
 * @param {V4} v
 * @return {V3}
 */
V3.set$LV3$LV4$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	z$0 = _$0[2];
	$this._[0] = x$0;
	$this._[1] = y$0;
	$this._[2] = z$0;
	return $this;
};

var V3$set$LV3$LV4$ = V3.set$LV3$LV4$;

/**
 * @param {V3} $this
 * @return {V3}
 */
V3.clone$LV3$ = function ($this) {
	return new V3$LV3$($this);
};

var V3$clone$LV3$ = V3.clone$LV3$;

/**
 * @param {V3} $this
 * @return {V3}
 */
V3.clear$LV3$ = function ($this) {
	$this._[0] = 0;
	$this._[1] = 0;
	$this._[2] = 0;
	return $this;
};

var V3$clear$LV3$ = V3.clear$LV3$;

/**
 * @param {V3} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.set$LV3$NNN = function ($this, x, y, z) {
	$this._[0] = x;
	$this._[1] = y;
	$this._[2] = z;
	return $this;
};

var V3$set$LV3$NNN = V3.set$LV3$NNN;

/**
 * @param {V3} $this
 * @param {V3} v
 * @return {V3}
 */
V3.set$LV3$LV3$ = function ($this, v) {
	$this._.set(v._);
	return $this;
};

var V3$set$LV3$LV3$ = V3.set$LV3$LV3$;

/**
 * @param {V3} $this
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.set$LV3$AN = function ($this, v) {
	$this._.set(v);
	return $this;
};

var V3$set$LV3$AN = V3.set$LV3$AN;

/**
 * @param {V3} $this
 * @param {Float32Array} v
 * @return {V3}
 */
V3.set$LV3$LFloat32Array$ = function ($this, v) {
	$this._.set(v);
	return $this;
};

var V3$set$LV3$LFloat32Array$ = V3.set$LV3$LFloat32Array$;

/**
 * @param {V3} $this
 * @return {!number}
 */
V3.x$LV3$ = function ($this) {
	return $this._[0];
};

var V3$x$LV3$ = V3.x$LV3$;

/**
 * @param {V3} $this
 * @return {!number}
 */
V3.y$LV3$ = function ($this) {
	return $this._[1];
};

var V3$y$LV3$ = V3.y$LV3$;

/**
 * @param {V3} $this
 * @return {!number}
 */
V3.z$LV3$ = function ($this) {
	return $this._[2];
};

var V3$z$LV3$ = V3.z$LV3$;

/**
 * @param {V3} $this
 * @param {!number} val
 * @return {V3}
 */
V3.x$LV3$N = function ($this, val) {
	$this._[0] = val;
	return $this;
};

var V3$x$LV3$N = V3.x$LV3$N;

/**
 * @param {V3} $this
 * @param {!number} val
 * @return {V3}
 */
V3.y$LV3$N = function ($this, val) {
	$this._[1] = val;
	return $this;
};

var V3$y$LV3$N = V3.y$LV3$N;

/**
 * @param {V3} $this
 * @param {!number} val
 * @return {V3}
 */
V3.z$LV3$N = function ($this, val) {
	$this._[2] = val;
	return $this;
};

var V3$z$LV3$N = V3.z$LV3$N;

/**
 * @param {V3} $this
 * @param {V3} v
 * @return {!boolean}
 */
V3.equals$LV3$LV3$ = function ($this, v) {
	var $math_abs_t;
	return (($math_abs_t = v._[0] - $this._[0]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v._[1] - $this._[1]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v._[2] - $this._[2]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001;
};

var V3$equals$LV3$LV3$ = V3.equals$LV3$LV3$;

/**
 * @param {V3} $this
 * @param {V3} v
 * @param {!number} eps
 * @return {!boolean}
 */
V3.equals$LV3$LV3$N = function ($this, v, eps) {
	var $math_abs_t;
	return (($math_abs_t = v._[0] - $this._[0]) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v._[1] - $this._[1]) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v._[2] - $this._[2]) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

var V3$equals$LV3$LV3$N = V3.equals$LV3$LV3$N;

/**
 * @param {V3} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.add$LV3$NNN = function ($this, x, y, z) {
	$this._[0] += x;
	$this._[1] += y;
	$this._[2] += z;
	return $this;
};

var V3$add$LV3$NNN = V3.add$LV3$NNN;

/**
 * @param {V3} $this
 * @param {V3} v
 * @return {V3}
 */
V3.add$LV3$LV3$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	z$0 = _$0[2];
	$this._[0] += x$0;
	$this._[1] += y$0;
	$this._[2] += z$0;
	return $this;
};

var V3$add$LV3$LV3$ = V3.add$LV3$LV3$;

/**
 * @param {V3} $this
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.add$LV3$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this._[0] += x$0;
	$this._[1] += y$0;
	$this._[2] += z$0;
	return $this;
};

var V3$add$LV3$AN = V3.add$LV3$AN;

/**
 * @param {V3} $this
 * @param {Float32Array} v
 * @return {V3}
 */
V3.add$LV3$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this._[0] += x$0;
	$this._[1] += y$0;
	$this._[2] += z$0;
	return $this;
};

var V3$add$LV3$LFloat32Array$ = V3.add$LV3$LFloat32Array$;

/**
 * @param {V3} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.sub$LV3$NNN = function ($this, x, y, z) {
	$this._[0] -= x;
	$this._[1] -= y;
	$this._[2] -= z;
	return $this;
};

var V3$sub$LV3$NNN = V3.sub$LV3$NNN;

/**
 * @param {V3} $this
 * @param {V3} v
 * @return {V3}
 */
V3.sub$LV3$LV3$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	z$0 = _$0[2];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	$this._[2] -= z$0;
	return $this;
};

var V3$sub$LV3$LV3$ = V3.sub$LV3$LV3$;

/**
 * @param {V3} $this
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.sub$LV3$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	$this._[2] -= z$0;
	return $this;
};

var V3$sub$LV3$AN = V3.sub$LV3$AN;

/**
 * @param {V3} $this
 * @param {Float32Array} v
 * @return {V3}
 */
V3.sub$LV3$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	$this._[2] -= z$0;
	return $this;
};

var V3$sub$LV3$LFloat32Array$ = V3.sub$LV3$LFloat32Array$;

/**
 * @param {V3} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.mul$LV3$NNN = function ($this, x, y, z) {
	$this._[0] *= x;
	$this._[1] *= y;
	$this._[2] *= z;
	return $this;
};

var V3$mul$LV3$NNN = V3.mul$LV3$NNN;

/**
 * @param {V3} $this
 * @param {V3} v
 * @return {V3}
 */
V3.mul$LV3$LV3$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	z$0 = _$0[2];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	$this._[2] *= z$0;
	return $this;
};

var V3$mul$LV3$LV3$ = V3.mul$LV3$LV3$;

/**
 * @param {V3} $this
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.mul$LV3$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	$this._[2] *= z$0;
	return $this;
};

var V3$mul$LV3$AN = V3.mul$LV3$AN;

/**
 * @param {V3} $this
 * @param {Float32Array} v
 * @return {V3}
 */
V3.mul$LV3$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	$this._[2] *= z$0;
	return $this;
};

var V3$mul$LV3$LFloat32Array$ = V3.mul$LV3$LFloat32Array$;

/**
 * @param {V3} $this
 * @param {!number} s
 * @return {V3}
 */
V3.mul$LV3$N = function ($this, s) {
	$this._[0] *= s;
	$this._[1] *= s;
	$this._[2] *= s;
	return $this;
};

var V3$mul$LV3$N = V3.mul$LV3$N;

/**
 * @param {V3} $this
 * @return {V3}
 */
V3.neg$LV3$ = function ($this) {
	$this._[0] *= -1;
	$this._[1] *= -1;
	$this._[2] *= -1;
	return $this;
};

var V3$neg$LV3$ = V3.neg$LV3$;

/**
 * @param {V3} $this
 * @return {V3}
 */
V3.normalize$LV3$ = function ($this) {
	/** @type {!number} */
	var l;
	l = Math.sqrt(V3$len2$LV3$($this));
	return (l > 0 ? V3$mul$LV3$N($this, 1 / l) : $this);
};

var V3$normalize$LV3$ = V3.normalize$LV3$;

/**
 * @param {V3} $this
 * @param {V3} v0
 * @param {V3} v1
 * @return {V3}
 */
V3.cross$LV3$LV3$LV3$ = function ($this, v0, v1) {
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
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	(x0 = (_$0 = v0._)[0], y0 = _$0[1], z0 = _$0[2]);
	(x1 = (_$1 = v1._)[0], y1 = _$1[1], z1 = _$1[2]);
	$this._[0] = y0 * z1 - z0 * y1;
	$this._[1] = z0 * x1 - x0 * z1;
	$this._[2] = x0 * y1 - y0 * x1;
	return $this;
};

var V3$cross$LV3$LV3$LV3$ = V3.cross$LV3$LV3$LV3$;

/**
 * @param {V3} $this
 * @param {V3} v
 * @return {!number}
 */
V3.dot$LV3$LV3$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	return (_$0 = $this._)[0] * (_$1 = v._)[0] + _$0[1] * _$1[1] + _$0[2] * _$1[2];
};

var V3$dot$LV3$LV3$ = V3.dot$LV3$LV3$;

/**
 * @param {V3} $this
 * @return {!number}
 */
V3.len$LV3$ = function ($this) {
	return Math.sqrt(V3$len2$LV3$($this));
};

var V3$len$LV3$ = V3.len$LV3$;

/**
 * @param {V3} $this
 * @return {!number}
 */
V3.len2$LV3$ = function ($this) {
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	/** @type {Float32Array} */
	var _$0;
	(x = (_$0 = $this._)[0], y = _$0[1], z = _$0[2]);
	return x * x + y * y + z * z;
};

var V3$len2$LV3$ = V3.len2$LV3$;

/**
 * @param {V3} $this
 * @param {V3} v
 * @return {!number}
 */
V3.dist$LV3$LV3$ = function ($this, v) {
	return Math.sqrt(V3$dist2$LV3$LV3$($this, v));
};

var V3$dist$LV3$LV3$ = V3.dist$LV3$LV3$;

/**
 * @param {V3} $this
 * @param {V3} v
 * @return {!number}
 */
V3.dist2$LV3$LV3$ = function ($this, v) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	x = (_$0 = v._)[0] - (_$1 = $this._)[0];
	y = _$0[1] - _$1[1];
	z = _$0[2] - _$1[2];
	return x * x + y * y + z * z;
};

var V3$dist2$LV3$LV3$ = V3.dist2$LV3$LV3$;

/**
 * @param {V3} $this
 * @param {V3} v0
 * @param {V3} v1
 * @param {!number} ratio
 * @return {V3}
 */
V3.lerp$LV3$LV3$LV3$N = function ($this, v0, v1, ratio) {
	$this._[0] = v0._[0] + ratio * (v1._[0] - v0._[0]);
	$this._[1] = v0._[1] + ratio * (v1._[1] - v0._[1]);
	$this._[2] = v0._[2] + ratio * (v1._[2] - v0._[2]);
	return $this;
};

var V3$lerp$LV3$LV3$LV3$N = V3.lerp$LV3$LV3$LV3$N;

/**
 * @param {V3} $this
 * @param {M33} m
 * @return {V3}
 */
V3.transformBy$LV3$LM33$ = function ($this, m) {
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
	(a = $this._, t = m._);
	(x = a[0], y = a[1], z = a[2]);
	a[0] = t[0] * x + t[3] * y + t[6] * z;
	a[1] = t[1] * x + t[4] * y + t[7] * z;
	a[2] = t[2] * x + t[5] * y + t[8] * z;
	return $this;
};

var V3$transformBy$LV3$LM33$ = V3.transformBy$LV3$LM33$;

/**
 * @param {V3} $this
 * @param {M44} m
 * @return {V3}
 */
V3.transformBy$LV3$LM44$ = function ($this, m) {
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
	(a = $this._, t = m._);
	(x = a[0], y = a[1], z = a[2]);
	a[0] = t[0] * x + t[4] * y + t[8] * z + t[12];
	a[1] = t[1] * x + t[5] * y + t[9] * z + t[13];
	a[2] = t[2] * x + t[6] * y + t[10] * z + t[14];
	return $this;
};

var V3$transformBy$LV3$LM44$ = V3.transformBy$LV3$LM44$;

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
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(v._);
};

V4$LV4$.prototype = new V4;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V4$AN(v) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(v);
};

V4$AN.prototype = new V4;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V4$LFloat32Array$(v) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(v);
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
	V4$set$LV4$NNNN(this, x, y, z, w);
};

V4$NNNN.prototype = new V4;

/**
 * @constructor
 * @param {V2} v
 * @param {!number} z
 * @param {!number} w
 */
function V4$LV2$NN(v, z, w) {
	/** @type {Float32Array} */
	var _$0;
	this._ = new Float32Array(4);
	V4$set$LV4$NNNN(this, (_$0 = v._)[0], _$0[1], z, w);
};

V4$LV2$NN.prototype = new V4;

/**
 * @constructor
 * @param {V3} v
 * @param {!number} w
 */
function V4$LV3$N(v, w) {
	/** @type {Float32Array} */
	var _$0;
	this._ = new Float32Array(4);
	V4$set$LV4$NNNN(this, (_$0 = v._)[0], _$0[1], _$0[2], w);
};

V4$LV3$N.prototype = new V4;

/**
 * @param {V4} $this
 * @return {Float32Array}
 */
V4.array$LV4$ = function ($this) {
	return $this._;
};

var V4$array$LV4$ = V4.array$LV4$;

/**
 * @param {V4} $this
 * @return {V2}
 */
V4.v2$LV4$ = function ($this) {
	return new V2$LV4$($this);
};

var V4$v2$LV4$ = V4.v2$LV4$;

/**
 * @param {V4} $this
 * @return {V3}
 */
V4.v3$LV4$ = function ($this) {
	return new V3$LV4$($this);
};

var V4$v3$LV4$ = V4.v3$LV4$;

/**
 * @param {V4} $this
 * @param {V2} v
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.set$LV4$LV2$NN = function ($this, v, z, w) {
	/** @type {Float32Array} */
	var _$0;
	return V4$set$LV4$NNNN($this, (_$0 = v._)[0], _$0[1], z, w);
};

var V4$set$LV4$LV2$NN = V4.set$LV4$LV2$NN;

/**
 * @param {V4} $this
 * @param {V3} v
 * @param {!number} w
 * @return {V4}
 */
V4.set$LV4$LV3$N = function ($this, v, w) {
	/** @type {Float32Array} */
	var _$0;
	return V4$set$LV4$NNNN($this, (_$0 = v._)[0], _$0[1], _$0[2], w);
};

var V4$set$LV4$LV3$N = V4.set$LV4$LV3$N;

/**
 * @param {V4} $this
 * @return {V4}
 */
V4.clone$LV4$ = function ($this) {
	return new V4$LV4$($this);
};

var V4$clone$LV4$ = V4.clone$LV4$;

/**
 * @param {V4} $this
 * @return {V4}
 */
V4.clear$LV4$ = function ($this) {
	return V4$set$LV4$NNNN($this, 0, 0, 0, 0);
};

var V4$clear$LV4$ = V4.clear$LV4$;

/**
 * @param {V4} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.set$LV4$NNNN = function ($this, x, y, z, w) {
	$this._[0] = x;
	$this._[1] = y;
	$this._[2] = z;
	$this._[3] = w;
	return $this;
};

var V4$set$LV4$NNNN = V4.set$LV4$NNNN;

/**
 * @param {V4} $this
 * @param {V4} v
 * @return {V4}
 */
V4.set$LV4$LV4$ = function ($this, v) {
	$this._.set(v._);
	return $this;
};

var V4$set$LV4$LV4$ = V4.set$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.set$LV4$AN = function ($this, v) {
	$this._.set(v);
	return $this;
};

var V4$set$LV4$AN = V4.set$LV4$AN;

/**
 * @param {V4} $this
 * @param {Float32Array} v
 * @return {V4}
 */
V4.set$LV4$LFloat32Array$ = function ($this, v) {
	$this._.set(v);
	return $this;
};

var V4$set$LV4$LFloat32Array$ = V4.set$LV4$LFloat32Array$;

/**
 * @param {V4} $this
 * @return {!number}
 */
V4.x$LV4$ = function ($this) {
	return $this._[0];
};

var V4$x$LV4$ = V4.x$LV4$;

/**
 * @param {V4} $this
 * @return {!number}
 */
V4.y$LV4$ = function ($this) {
	return $this._[1];
};

var V4$y$LV4$ = V4.y$LV4$;

/**
 * @param {V4} $this
 * @return {!number}
 */
V4.z$LV4$ = function ($this) {
	return $this._[2];
};

var V4$z$LV4$ = V4.z$LV4$;

/**
 * @param {V4} $this
 * @return {!number}
 */
V4.w$LV4$ = function ($this) {
	return $this._[3];
};

var V4$w$LV4$ = V4.w$LV4$;

/**
 * @param {V4} $this
 * @param {!number} val
 * @return {V4}
 */
V4.x$LV4$N = function ($this, val) {
	$this._[0] = val;
	return $this;
};

var V4$x$LV4$N = V4.x$LV4$N;

/**
 * @param {V4} $this
 * @param {!number} val
 * @return {V4}
 */
V4.y$LV4$N = function ($this, val) {
	$this._[1] = val;
	return $this;
};

var V4$y$LV4$N = V4.y$LV4$N;

/**
 * @param {V4} $this
 * @param {!number} val
 * @return {V4}
 */
V4.z$LV4$N = function ($this, val) {
	$this._[2] = val;
	return $this;
};

var V4$z$LV4$N = V4.z$LV4$N;

/**
 * @param {V4} $this
 * @param {!number} val
 * @return {V4}
 */
V4.w$LV4$N = function ($this, val) {
	$this._[3] = val;
	return $this;
};

var V4$w$LV4$N = V4.w$LV4$N;

/**
 * @param {V4} $this
 * @param {V4} v
 * @return {!boolean}
 */
V4.equals$LV4$LV4$ = function ($this, v) {
	var $math_abs_t;
	return (($math_abs_t = v._[0] - $this._[0]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v._[1] - $this._[1]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v._[2] - $this._[2]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v._[3] - $this._[3]) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001;
};

var V4$equals$LV4$LV4$ = V4.equals$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {V4} v
 * @param {!number} eps
 * @return {!boolean}
 */
V4.equals$LV4$LV4$N = function ($this, v, eps) {
	var $math_abs_t;
	return (($math_abs_t = v._[0] - $this._[0]) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v._[1] - $this._[1]) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v._[2] - $this._[2]) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v._[3] - $this._[3]) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

var V4$equals$LV4$LV4$N = V4.equals$LV4$LV4$N;

/**
 * @param {V4} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.add$LV4$NNNN = function ($this, x, y, z, w) {
	$this._[0] += x;
	$this._[1] += y;
	$this._[2] += z;
	$this._[3] += w;
	return $this;
};

var V4$add$LV4$NNNN = V4.add$LV4$NNNN;

/**
 * @param {V4} $this
 * @param {V4} v
 * @return {V4}
 */
V4.add$LV4$LV4$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	return V4$add$LV4$NNNN($this, (_$0 = v._)[0], _$0[1], _$0[2], _$0[3]);
};

var V4$add$LV4$LV4$ = V4.add$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.add$LV4$AN = function ($this, v) {
	return V4$add$LV4$NNNN($this, v[0], v[1], v[2], v[3]);
};

var V4$add$LV4$AN = V4.add$LV4$AN;

/**
 * @param {V4} $this
 * @param {Float32Array} v
 * @return {V4}
 */
V4.add$LV4$LFloat32Array$ = function ($this, v) {
	return V4$add$LV4$NNNN($this, v[0], v[1], v[2], v[3]);
};

var V4$add$LV4$LFloat32Array$ = V4.add$LV4$LFloat32Array$;

/**
 * @param {V4} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.sub$LV4$NNNN = function ($this, x, y, z, w) {
	$this._[0] -= x;
	$this._[1] -= y;
	$this._[2] -= z;
	$this._[3] -= w;
	return $this;
};

var V4$sub$LV4$NNNN = V4.sub$LV4$NNNN;

/**
 * @param {V4} $this
 * @param {V4} v
 * @return {V4}
 */
V4.sub$LV4$LV4$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	return V4$sub$LV4$NNNN($this, (_$0 = v._)[0], _$0[1], _$0[2], _$0[3]);
};

var V4$sub$LV4$LV4$ = V4.sub$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.sub$LV4$AN = function ($this, v) {
	return V4$sub$LV4$NNNN($this, v[0], v[1], v[2], v[3]);
};

var V4$sub$LV4$AN = V4.sub$LV4$AN;

/**
 * @param {V4} $this
 * @param {Float32Array} v
 * @return {V4}
 */
V4.sub$LV4$LFloat32Array$ = function ($this, v) {
	return V4$sub$LV4$NNNN($this, v[0], v[1], v[2], v[3]);
};

var V4$sub$LV4$LFloat32Array$ = V4.sub$LV4$LFloat32Array$;

/**
 * @param {V4} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.mul$LV4$NNNN = function ($this, x, y, z, w) {
	$this._[0] *= x;
	$this._[1] *= y;
	$this._[2] *= z;
	$this._[3] *= w;
	return $this;
};

var V4$mul$LV4$NNNN = V4.mul$LV4$NNNN;

/**
 * @param {V4} $this
 * @param {V4} v
 * @return {V4}
 */
V4.mul$LV4$LV4$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	return V4$mul$LV4$NNNN($this, (_$0 = v._)[0], _$0[1], _$0[2], _$0[3]);
};

var V4$mul$LV4$LV4$ = V4.mul$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.mul$LV4$AN = function ($this, v) {
	return V4$mul$LV4$NNNN($this, v[0], v[1], v[2], v[3]);
};

var V4$mul$LV4$AN = V4.mul$LV4$AN;

/**
 * @param {V4} $this
 * @param {Float32Array} v
 * @return {V4}
 */
V4.mul$LV4$LFloat32Array$ = function ($this, v) {
	return V4$mul$LV4$NNNN($this, v[0], v[1], v[2], v[3]);
};

var V4$mul$LV4$LFloat32Array$ = V4.mul$LV4$LFloat32Array$;

/**
 * @param {V4} $this
 * @param {!number} s
 * @return {V4}
 */
V4.mul$LV4$N = function ($this, s) {
	$this._[0] *= s;
	$this._[1] *= s;
	$this._[2] *= s;
	$this._[3] *= s;
	return $this;
};

var V4$mul$LV4$N = V4.mul$LV4$N;

/**
 * @param {V4} $this
 * @return {V4}
 */
V4.neg$LV4$ = function ($this) {
	return V4$mul$LV4$N($this, -1);
};

var V4$neg$LV4$ = V4.neg$LV4$;

/**
 * @param {V4} $this
 * @return {V4}
 */
V4.normalize$LV4$ = function ($this) {
	/** @type {!number} */
	var l;
	l = Math.sqrt(V4$len2$LV4$($this));
	return (l > 0 ? V4$mul$LV4$N($this, 1 / l) : $this);
};

var V4$normalize$LV4$ = V4.normalize$LV4$;

/**
 * @param {V4} $this
 * @param {V4} v
 * @return {!number}
 */
V4.dot$LV4$LV4$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	return (_$0 = $this._)[0] * (_$1 = v._)[0] + _$0[1] * _$1[1] + _$0[2] * _$1[2] + _$0[3] * _$1[3];
};

var V4$dot$LV4$LV4$ = V4.dot$LV4$LV4$;

/**
 * @param {V4} $this
 * @return {!number}
 */
V4.len$LV4$ = function ($this) {
	return Math.sqrt(V4$len2$LV4$($this));
};

var V4$len$LV4$ = V4.len$LV4$;

/**
 * @param {V4} $this
 * @return {!number}
 */
V4.len2$LV4$ = function ($this) {
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	/** @type {undefined|!number} */
	var w;
	/** @type {Float32Array} */
	var _$0;
	(x = (_$0 = $this._)[0], y = _$0[1], z = _$0[2], w = _$0[3]);
	return x * x + y * y + z * z + w * w;
};

var V4$len2$LV4$ = V4.len2$LV4$;

/**
 * @param {V4} $this
 * @param {V4} v
 * @return {!number}
 */
V4.dist$LV4$LV4$ = function ($this, v) {
	return Math.sqrt(V4$dist2$LV4$LV4$($this, v));
};

var V4$dist$LV4$LV4$ = V4.dist$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {V4} v
 * @return {!number}
 */
V4.dist2$LV4$LV4$ = function ($this, v) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	/** @type {!number} */
	var w;
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	x = (_$0 = v._)[0] - (_$1 = $this._)[0];
	y = _$0[1] - _$1[1];
	z = _$0[2] - _$1[2];
	w = _$0[3] - _$1[3];
	return x * x + y * y + z * z + w * w;
};

var V4$dist2$LV4$LV4$ = V4.dist2$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {V4} v0
 * @param {V4} v1
 * @param {!number} ratio
 * @return {V4}
 */
V4.lerp$LV4$LV4$LV4$N = function ($this, v0, v1, ratio) {
	$this._[0] = v0._[0] + ratio * (v1._[0] - v0._[0]);
	$this._[1] = v0._[1] + ratio * (v1._[1] - v0._[1]);
	$this._[2] = v0._[2] + ratio * (v1._[2] - v0._[2]);
	$this._[3] = v0._[3] + ratio * (v1._[3] - v0._[3]);
	return $this;
};

var V4$lerp$LV4$LV4$LV4$N = V4.lerp$LV4$LV4$LV4$N;

/**
 * @param {V4} $this
 * @param {M44} m
 * @return {V4}
 */
V4.transformBy$LV4$LM44$ = function ($this, m) {
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
	(a = $this._, t = m._);
	(x = a[0], y = a[1], z = a[2], w = a[3]);
	a[0] = t[0] * x + t[4] * y + t[8] * z + t[12] * w;
	a[1] = t[1] * x + t[5] * y + t[9] * z + t[13] * w;
	a[2] = t[2] * x + t[6] * y + t[10] * z + t[14] * w;
	a[3] = t[3] * x + t[7] * y + t[11] * z + t[15] * w;
	return $this;
};

var V4$transformBy$LV4$LM44$ = V4.transformBy$LV4$LM44$;

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
	this._ = new Float32Array(4);
};

M22$.prototype = new M22;

/**
 * @constructor
 * @param {M22} m
 */
function M22$LM22$(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(m._);
};

M22$LM22$.prototype = new M22;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M22$AN(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(m);
};

M22$AN.prototype = new M22;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M22$LFloat32Array$(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(m);
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
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0[0] = m00;
	_$0[1] = m10;
	_$0[2] = m01;
	_$0[3] = m11;
};

M22$NNNN.prototype = new M22;

/**
 * @constructor
 * @param {V2} v0
 * @param {V2} v1
 */
function M22$LV2$LV2$(v0, v1) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(v0._, 0);
	this._.set(v1._, 2);
};

M22$LV2$LV2$.prototype = new M22;

/**
 * @constructor
 * @param {M33} m
 */
function M22$LM33$(m) {
	this._ = new Float32Array(4);
	M22$set$LM22$LM33$(this, m);
};

M22$LM33$.prototype = new M22;

/**
 * @constructor
 * @param {M44} m
 */
function M22$LM44$(m) {
	this._ = new Float32Array(4);
	M22$set$LM22$LM44$(this, m);
};

M22$LM44$.prototype = new M22;

/**
 * @param {M22} $this
 * @return {Float32Array}
 */
M22.array$LM22$ = function ($this) {
	return $this._;
};

var M22$array$LM22$ = M22.array$LM22$;

/**
 * @param {M22} $this
 * @param {!number} m22
 * @return {M33}
 */
M22.m33$LM22$N = function ($this, m22) {
	return new M33$LM22$N($this, m22);
};

var M22$m33$LM22$N = M22.m33$LM22$N;

/**
 * @param {M22} $this
 * @param {!number} m22
 * @param {!number} m33
 * @return {M44}
 */
M22.m44$LM22$NN = function ($this, m22, m33) {
	return new M44$LM22$NN($this, m22, m33);
};

var M22$m44$LM22$NN = M22.m44$LM22$NN;

/**
 * @param {M22} $this
 * @param {M33} m
 * @return {M22}
 */
M22.set$LM22$LM33$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
	a[0] = b[0];
	a[1] = b[1];
	a[2] = b[3];
	a[3] = b[4];
	return $this;
};

var M22$set$LM22$LM33$ = M22.set$LM22$LM33$;

/**
 * @param {M22} $this
 * @param {M44} m
 * @return {M22}
 */
M22.set$LM22$LM44$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
	a[0] = b[0];
	a[1] = b[1];
	a[2] = b[4];
	a[3] = b[5];
	return $this;
};

var M22$set$LM22$LM44$ = M22.set$LM22$LM44$;

/**
 * @param {M22} $this
 * @return {M22}
 */
M22.clone$LM22$ = function ($this) {
	return new M22$LM22$($this);
};

var M22$clone$LM22$ = M22.clone$LM22$;

/**
 * @param {M22} $this
 * @return {M22}
 */
M22.setZero$LM22$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = $this._;
	for (i = 0; i < 4; ++ i) {
		a[i] = 0;
	}
	return $this;
};

var M22$setZero$LM22$ = M22.setZero$LM22$;

/**
 * @param {M22} $this
 * @return {M22}
 */
M22.setIdentity$LM22$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = $this._;
	for (i = 0; i < 4; ++ i) {
		a[i] = (i % 3 === 0 ? 1 : 0);
	}
	return $this;
};

var M22$setIdentity$LM22$ = M22.setIdentity$LM22$;

/**
 * @param {M22} $this
 * @param {!number} m00
 * @param {!number} m01
 * @param {!number} m10
 * @param {!number} m11
 * @return {M22}
 */
M22.set$LM22$NNNN = function ($this, m00, m01, m10, m11) {
	/** @type {Float32Array} */
	var a;
	a = $this._;
	a[0] = m00;
	a[1] = m10;
	a[2] = m01;
	a[3] = m11;
	return $this;
};

var M22$set$LM22$NNNN = M22.set$LM22$NNNN;

/**
 * @param {M22} $this
 * @param {V2} v0
 * @param {V2} v1
 * @return {M22}
 */
M22.set$LM22$LV2$LV2$ = function ($this, v0, v1) {
	$this._.set(v0._, 0);
	$this._.set(v1._, 2);
	return $this;
};

var M22$set$LM22$LV2$LV2$ = M22.set$LM22$LV2$LV2$;

/**
 * @param {M22} $this
 * @param {M22} m
 * @return {M22}
 */
M22.set$LM22$LM22$ = function ($this, m) {
	$this._.set(m._);
	return $this;
};

var M22$set$LM22$LM22$ = M22.set$LM22$LM22$;

/**
 * @param {M22} $this
 * @param {Array.<undefined|!number>} m
 * @return {M22}
 */
M22.set$LM22$AN = function ($this, m) {
	$this._.set(m);
	return $this;
};

var M22$set$LM22$AN = M22.set$LM22$AN;

/**
 * @param {M22} $this
 * @param {Float32Array} m
 * @return {M22}
 */
M22.set$LM22$LFloat32Array$ = function ($this, m) {
	$this._.set(m);
	return $this;
};

var M22$set$LM22$LFloat32Array$ = M22.set$LM22$LFloat32Array$;

/**
 * @param {M22} $this
 * @param {Array.<undefined|!number>} m
 * @param {!number} offs
 * @return {M22}
 */
M22.set$LM22$ANN = function ($this, m, offs) {
	$this._.set(m, offs);
	return $this;
};

var M22$set$LM22$ANN = M22.set$LM22$ANN;

/**
 * @param {M22} $this
 * @param {Float32Array} m
 * @param {!number} offs
 * @return {M22}
 */
M22.set$LM22$LFloat32Array$N = function ($this, m, offs) {
	$this._.set(m, offs);
	return $this;
};

var M22$set$LM22$LFloat32Array$N = M22.set$LM22$LFloat32Array$N;

/**
 * @param {M22} $this
 * @param {M22} m
 * @return {!boolean}
 */
M22.equals$LM22$LM22$ = function ($this, m) {
	return M22$equals$LM22$LM22$N($this, m, 0.000001);
};

var M22$equals$LM22$LM22$ = M22.equals$LM22$LM22$;

/**
 * @param {M22} $this
 * @param {M22} m
 * @param {!number} eps
 * @return {!boolean}
 */
M22.equals$LM22$LM22$N = function ($this, m, eps) {
	var $math_abs_t;
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 4; ++ i) {
		if ((($math_abs_t = b[i] - a[i]) >= 0 ? $math_abs_t : -$math_abs_t) >= eps) {
			return false;
		}
	}
	return true;
};

var M22$equals$LM22$LM22$N = M22.equals$LM22$LM22$N;

/**
 * @param {M22} $this
 * @param {M22} m
 * @return {M22}
 */
M22.add$LM22$LM22$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 4; ++ i) {
		a[i] += b[i];
	}
	return $this;
};

var M22$add$LM22$LM22$ = M22.add$LM22$LM22$;

/**
 * @param {M22} $this
 * @param {M22} m
 * @return {M22}
 */
M22.sub$LM22$LM22$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 4; ++ i) {
		a[i] -= b[i];
	}
	return $this;
};

var M22$sub$LM22$LM22$ = M22.sub$LM22$LM22$;

/**
 * @param {M22} $this
 * @param {M22} m
 * @return {M22}
 */
M22.mul$LM22$LM22$ = function ($this, m) {
	return M22$mul$LM22$LM22$LM22$($this, $this, m);
};

var M22$mul$LM22$LM22$ = M22.mul$LM22$LM22$;

/**
 * @param {M22} $this
 * @param {M22} m0
 * @param {M22} m1
 * @return {M22}
 */
M22.mul$LM22$LM22$LM22$ = function ($this, m0, m1) {
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
	a = m0._;
	(a00 = a[0], a10 = a[1]);
	(a01 = a[2], a11 = a[3]);
	b = m1._;
	(b00 = b[0], b10 = b[1]);
	(b01 = b[2], b11 = b[3]);
	a[0] = a00 * b00 + a01 * b10;
	a[1] = a10 * b00 + a11 * b10;
	a[2] = a00 * b01 + a01 * b11;
	a[3] = a10 * b01 + a11 * b11;
	return $this;
};

var M22$mul$LM22$LM22$LM22$ = M22.mul$LM22$LM22$LM22$;

/**
 * @param {M22} $this
 * @return {M22}
 */
M22.transpose$LM22$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a10;
	a = $this._;
	a10 = a[1];
	a[1] = a[2];
	a[2] = a10;
	return $this;
};

var M22$transpose$LM22$ = M22.transpose$LM22$;

/**
 * @param {M22} $this
 * @param {M22} m
 * @return {M22}
 */
M22.transpose$LM22$LM22$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
	a[0] = b[0];
	a[1] = b[2];
	a[2] = b[1];
	a[3] = b[3];
	return $this;
};

var M22$transpose$LM22$LM22$ = M22.transpose$LM22$LM22$;

/**
 * @param {M22} $this
 * @return {!number}
 */
M22.det$LM22$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	a = $this._;
	return a[0] * a[3] - a[1] * a[2];
};

var M22$det$LM22$ = M22.det$LM22$;

/**
 * @param {M22} $this
 * @return {M22}
 */
M22.inverse$LM22$ = function ($this) {
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
	a = $this._;
	(a00 = a[0], a10 = a[1], a01 = a[2], a11 = a[3]);
	d = a00 * a11 - a10 * a01;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	a[0] = a11 * invDet;
	a[1] = - a10 * invDet;
	a[2] = - a01 * invDet;
	a[3] = a00 * invDet;
	return $this;
};

var M22$inverse$LM22$ = M22.inverse$LM22$;

/**
 * @param {M22} $this
 * @param {!number} s
 * @return {M22}
 */
M22.setScale$LM22$N = function ($this, s) {
	$this._[0] = s;
	$this._[1] = $this._[2] = 0;
	$this._[3] = s;
	return $this;
};

var M22$setScale$LM22$N = M22.setScale$LM22$N;

/**
 * @param {M22} $this
 * @param {!number} x
 * @param {!number} y
 * @return {M22}
 */
M22.setScale$LM22$NN = function ($this, x, y) {
	$this._[0] = x;
	$this._[1] = $this._[2] = 0;
	$this._[3] = y;
	return $this;
};

var M22$setScale$LM22$NN = M22.setScale$LM22$NN;

/**
 * @param {M22} $this
 * @param {V2} v
 * @return {M22}
 */
M22.setScale$LM22$LV2$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	$this._[0] = x$0;
	$this._[1] = $this._[2] = 0;
	$this._[3] = y$0;
	return $this;
};

var M22$setScale$LM22$LV2$ = M22.setScale$LM22$LV2$;

/**
 * @param {M22} $this
 * @param {Array.<undefined|!number>} v
 * @return {M22}
 */
M22.setScale$LM22$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this._[0] = x$0;
	$this._[1] = $this._[2] = 0;
	$this._[3] = y$0;
	return $this;
};

var M22$setScale$LM22$AN = M22.setScale$LM22$AN;

/**
 * @param {M22} $this
 * @param {Float32Array} v
 * @return {M22}
 */
M22.setScale$LM22$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this._[0] = x$0;
	$this._[1] = $this._[2] = 0;
	$this._[3] = y$0;
	return $this;
};

var M22$setScale$LM22$LFloat32Array$ = M22.setScale$LM22$LFloat32Array$;

/**
 * @param {M22} $this
 * @param {!number} rad
 * @return {M22}
 */
M22.setRotate$LM22$N = function ($this, rad) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var c;
	/** @type {!number} */
	var s;
	a = $this._;
	(c = Math.cos(rad), s = Math.sin(rad));
	a[0] = c;
	a[1] = s;
	a[2] = - s;
	a[3] = c;
	return $this;
};

var M22$setRotate$LM22$N = M22.setRotate$LM22$N;

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
	this._ = new Float32Array(9);
};

M33$.prototype = new M33;

/**
 * @constructor
 * @param {M33} m
 */
function M33$LM33$(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(9);
	_$0.set(m._);
};

M33$LM33$.prototype = new M33;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M33$AN(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(9);
	_$0.set(m);
};

M33$AN.prototype = new M33;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M33$LFloat32Array$(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(9);
	_$0.set(m);
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
	var _$0;
	_$0 = this._ = new Float32Array(9);
	_$0[0] = m00;
	_$0[1] = m10;
	_$0[2] = m20;
	_$0[3] = m01;
	_$0[4] = m11;
	_$0[5] = m21;
	_$0[5] = m02;
	_$0[7] = m12;
	_$0[8] = m22;
};

M33$NNNNNNNNN.prototype = new M33;

/**
 * @constructor
 * @param {V3} v0
 * @param {V3} v1
 * @param {V3} v2
 */
function M33$LV3$LV3$LV3$(v0, v1, v2) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(9);
	_$0.set(v0._, 0);
	this._.set(v1._, 3);
	this._.set(v2._, 6);
};

M33$LV3$LV3$LV3$.prototype = new M33;

/**
 * @constructor
 * @param {M22} m
 * @param {!number} m22
 */
function M33$LM22$N(m, m22) {
	this._ = new Float32Array(9);
	M33$set$LM33$LM22$N(this, m, m22);
};

M33$LM22$N.prototype = new M33;

/**
 * @constructor
 * @param {M44} m
 */
function M33$LM44$(m) {
	this._ = new Float32Array(9);
	M33$set$LM33$LM44$(this, m);
};

M33$LM44$.prototype = new M33;

/**
 * @param {M33} $this
 * @return {Float32Array}
 */
M33.array$LM33$ = function ($this) {
	return $this._;
};

var M33$array$LM33$ = M33.array$LM33$;

/**
 * @param {M33} $this
 * @return {M22}
 */
M33.m22$LM33$ = function ($this) {
	return new M22$LM33$($this);
};

var M33$m22$LM33$ = M33.m22$LM33$;

/**
 * @param {M33} $this
 * @param {!number} m33
 * @return {M44}
 */
M33.m44$LM33$N = function ($this, m33) {
	return new M44$LM33$N($this, m33);
};

var M33$m44$LM33$N = M33.m44$LM33$N;

/**
 * @param {M33} $this
 * @param {M22} m
 * @param {!number} m22
 * @return {M33}
 */
M33.set$LM33$LM22$N = function ($this, m, m22) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
	a[0] = b[0];
	a[1] = b[1];
	a[2] = 0;
	a[3] = b[2];
	a[4] = b[3];
	a[5] = 0;
	a[6] = 0;
	a[7] = 0;
	a[8] = m22;
	return $this;
};

var M33$set$LM33$LM22$N = M33.set$LM33$LM22$N;

/**
 * @param {M33} $this
 * @param {M44} m
 * @return {M33}
 */
M33.set$LM33$LM44$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
	a[0] = b[0];
	a[1] = b[1];
	a[2] = b[2];
	a[3] = b[4];
	a[4] = b[5];
	a[5] = b[6];
	a[6] = b[8];
	a[7] = b[9];
	a[8] = b[10];
	return $this;
};

var M33$set$LM33$LM44$ = M33.set$LM33$LM44$;

/**
 * @param {M33} $this
 * @return {M33}
 */
M33.clone$LM33$ = function ($this) {
	return new M33$LM33$($this);
};

var M33$clone$LM33$ = M33.clone$LM33$;

/**
 * @param {M33} $this
 * @return {M33}
 */
M33.setZero$LM33$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = $this._;
	for (i = 0; i < 9; ++ i) {
		a[i] = 0;
	}
	return $this;
};

var M33$setZero$LM33$ = M33.setZero$LM33$;

/**
 * @param {M33} $this
 * @return {M33}
 */
M33.setIdentity$LM33$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = $this._;
	for (i = 0; i < 9; ++ i) {
		a[i] = (i % 4 === 0 ? 1 : 0);
	}
	return $this;
};

var M33$setIdentity$LM33$ = M33.setIdentity$LM33$;

/**
 * @param {M33} $this
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
M33.set$LM33$NNNNNNNNN = function ($this, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	/** @type {Float32Array} */
	var a;
	a = $this._;
	a[0] = m00;
	a[1] = m10;
	a[2] = m20;
	a[3] = m01;
	a[4] = m11;
	a[5] = m21;
	a[6] = m02;
	a[7] = m12;
	a[8] = m22;
	return $this;
};

var M33$set$LM33$NNNNNNNNN = M33.set$LM33$NNNNNNNNN;

/**
 * @param {M33} $this
 * @param {V3} v0
 * @param {V3} v1
 * @param {V3} v2
 * @return {M33}
 */
M33.set$LM33$LV3$LV3$LV3$ = function ($this, v0, v1, v2) {
	$this._.set(v0._, 0);
	$this._.set(v1._, 3);
	$this._.set(v2._, 6);
	return $this;
};

var M33$set$LM33$LV3$LV3$LV3$ = M33.set$LM33$LV3$LV3$LV3$;

/**
 * @param {M33} $this
 * @param {M33} m
 * @return {M33}
 */
M33.set$LM33$LM33$ = function ($this, m) {
	$this._.set(m._);
	return $this;
};

var M33$set$LM33$LM33$ = M33.set$LM33$LM33$;

/**
 * @param {M33} $this
 * @param {Array.<undefined|!number>} m
 * @return {M33}
 */
M33.set$LM33$AN = function ($this, m) {
	$this._.set(m);
	return $this;
};

var M33$set$LM33$AN = M33.set$LM33$AN;

/**
 * @param {M33} $this
 * @param {Float32Array} m
 * @return {M33}
 */
M33.set$LM33$LFloat32Array$ = function ($this, m) {
	$this._.set(m);
	return $this;
};

var M33$set$LM33$LFloat32Array$ = M33.set$LM33$LFloat32Array$;

/**
 * @param {M33} $this
 * @param {Array.<undefined|!number>} m
 * @param {!number} offs
 * @return {M33}
 */
M33.set$LM33$ANN = function ($this, m, offs) {
	$this._.set(m, offs);
	return $this;
};

var M33$set$LM33$ANN = M33.set$LM33$ANN;

/**
 * @param {M33} $this
 * @param {Float32Array} m
 * @param {!number} offs
 * @return {M33}
 */
M33.set$LM33$LFloat32Array$N = function ($this, m, offs) {
	$this._.set(m, offs);
	return $this;
};

var M33$set$LM33$LFloat32Array$N = M33.set$LM33$LFloat32Array$N;

/**
 * @param {M33} $this
 * @param {M33} m
 * @return {!boolean}
 */
M33.equals$LM33$LM33$ = function ($this, m) {
	return M33$equals$LM33$LM33$N($this, m, 0.000001);
};

var M33$equals$LM33$LM33$ = M33.equals$LM33$LM33$;

/**
 * @param {M33} $this
 * @param {M33} m
 * @param {!number} eps
 * @return {!boolean}
 */
M33.equals$LM33$LM33$N = function ($this, m, eps) {
	var $math_abs_t;
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 9; ++ i) {
		if ((($math_abs_t = b[i] - a[i]) >= 0 ? $math_abs_t : -$math_abs_t) >= eps) {
			return false;
		}
	}
	return true;
};

var M33$equals$LM33$LM33$N = M33.equals$LM33$LM33$N;

/**
 * @param {M33} $this
 * @param {M33} m
 * @return {M33}
 */
M33.add$LM33$LM33$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 9; ++ i) {
		a[i] += b[i];
	}
	return $this;
};

var M33$add$LM33$LM33$ = M33.add$LM33$LM33$;

/**
 * @param {M33} $this
 * @param {M33} m
 * @return {M33}
 */
M33.sub$LM33$LM33$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 9; ++ i) {
		a[i] -= b[i];
	}
	return $this;
};

var M33$sub$LM33$LM33$ = M33.sub$LM33$LM33$;

/**
 * @param {M33} $this
 * @param {M33} m
 * @return {M33}
 */
M33.mul$LM33$LM33$ = function ($this, m) {
	return M33$mul$LM33$LM33$LM33$($this, $this, m);
};

var M33$mul$LM33$LM33$ = M33.mul$LM33$LM33$;

/**
 * @param {M33} $this
 * @param {M33} m0
 * @param {M33} m1
 * @return {M33}
 */
M33.mul$LM33$LM33$LM33$ = function ($this, m0, m1) {
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
	a = m0._;
	(a00 = a[0], a10 = a[1], a20 = a[2]);
	(a01 = a[3], a11 = a[4], a21 = a[5]);
	(a02 = a[6], a12 = a[7], a22 = a[8]);
	b = m1._;
	(b00 = b[0], b10 = b[1], b20 = b[2]);
	(b01 = b[3], b11 = b[4], b21 = b[5]);
	(b02 = b[6], b12 = b[7], b22 = b[8]);
	a[0] = a00 * b00 + a01 * b10 + a02 * b20;
	a[1] = a10 * b00 + a11 * b10 + a12 * b20;
	a[2] = a20 * b00 + a21 * b10 + a22 * b20;
	a[3] = a00 * b01 + a01 * b11 + a02 * b21;
	a[4] = a10 * b01 + a11 * b11 + a12 * b21;
	a[5] = a20 * b01 + a21 * b11 + a22 * b21;
	a[6] = a00 * b02 + a01 * b12 + a02 * b22;
	a[7] = a10 * b02 + a11 * b12 + a12 * b22;
	a[8] = a20 * b02 + a21 * b12 + a22 * b22;
	return $this;
};

var M33$mul$LM33$LM33$LM33$ = M33.mul$LM33$LM33$LM33$;

/**
 * @param {M33} $this
 * @return {M33}
 */
M33.transpose$LM33$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	/** @type {undefined|!number} */
	var a10;
	/** @type {undefined|!number} */
	var a20;
	/** @type {undefined|!number} */
	var a21;
	a = $this._;
	(a10 = a[1], a20 = a[2], a21 = a[5]);
	a[1] = a[3];
	a[2] = a[6];
	a[3] = a10;
	a[5] = a[7];
	a[6] = a20;
	a[7] = a21;
	return $this;
};

var M33$transpose$LM33$ = M33.transpose$LM33$;

/**
 * @param {M33} $this
 * @param {M33} m
 * @return {M33}
 */
M33.transpose$LM33$LM33$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
	a[0] = b[0];
	a[1] = b[3];
	a[2] = b[6];
	a[3] = b[1];
	a[4] = b[4];
	a[5] = b[7];
	a[6] = b[2];
	a[7] = b[5];
	a[8] = b[8];
	return $this;
};

var M33$transpose$LM33$LM33$ = M33.transpose$LM33$LM33$;

/**
 * @param {M33} $this
 * @return {!number}
 */
M33.det$LM33$ = function ($this) {
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
	a = $this._;
	(a00 = a[0], a01 = a[1], a02 = a[2]);
	(a10 = a[3], a11 = a[4], a12 = a[5]);
	(a20 = a[6], a21 = a[7], a22 = a[8]);
	return a00 * (a22 * a11 - a12 * a21) + a01 * (- a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

var M33$det$LM33$ = M33.det$LM33$;

/**
 * @param {M33} $this
 * @return {M33}
 */
M33.inverse$LM33$ = function ($this) {
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
	a = $this._;
	(a00 = a[0], a01 = a[1], a02 = a[2]);
	(a10 = a[3], a11 = a[4], a12 = a[5]);
	(a20 = a[6], a21 = a[7], a22 = a[8]);
	b01 = a22 * a11 - a12 * a21;
	b11 = - a22 * a10 + a12 * a20;
	b21 = a21 * a10 - a11 * a20;
	d = a00 * b01 + a01 * b11 + a02 * b21;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	a[0] = b01 * invDet;
	a[1] = (- a22 * a01 + a02 * a21) * invDet;
	a[2] = (a12 * a01 - a02 * a11) * invDet;
	a[3] = b11 * invDet;
	a[4] = (a22 * a00 - a02 * a20) * invDet;
	a[5] = (- a12 * a00 + a02 * a10) * invDet;
	a[6] = b21 * invDet;
	a[7] = (- a21 * a00 + a01 * a20) * invDet;
	a[8] = (a11 * a00 - a01 * a10) * invDet;
	return $this;
};

var M33$inverse$LM33$ = M33.inverse$LM33$;

/**
 * @param {M33} $this
 * @param {!number} s
 * @return {M33}
 */
M33.setScale$LM33$N = function ($this, s) {
	return M33$setScale$LM33$NNN($this, s, s, s);
};

var M33$setScale$LM33$N = M33.setScale$LM33$N;

/**
 * @param {M33} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M33}
 */
M33.setScale$LM33$NNN = function ($this, x, y, z) {
	M33$setZero$LM33$($this);
	$this._[0] = x;
	$this._[4] = y;
	$this._[8] = z;
	return $this;
};

var M33$setScale$LM33$NNN = M33.setScale$LM33$NNN;

/**
 * @param {M33} $this
 * @param {V3} v
 * @return {M33}
 */
M33.setScale$LM33$LV3$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	return M33$setScale$LM33$NNN($this, (_$0 = v._)[0], _$0[1], _$0[2]);
};

var M33$setScale$LM33$LV3$ = M33.setScale$LM33$LV3$;

/**
 * @param {M33} $this
 * @param {Array.<undefined|!number>} v
 * @return {M33}
 */
M33.setScale$LM33$AN = function ($this, v) {
	return M33$setScale$LM33$NNN($this, v[0], v[1], v[2]);
};

var M33$setScale$LM33$AN = M33.setScale$LM33$AN;

/**
 * @param {M33} $this
 * @param {Float32Array} v
 * @return {M33}
 */
M33.setScale$LM33$LFloat32Array$ = function ($this, v) {
	return M33$setScale$LM33$NNN($this, v[0], v[1], v[2]);
};

var M33$setScale$LM33$LFloat32Array$ = M33.setScale$LM33$LFloat32Array$;

/**
 * @param {M33} $this
 * @param {!number} rad
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M33}
 */
M33.setRotate$LM33$NNNN = function ($this, rad, x, y, z) {
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
	a = $this._;
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
	return $this;
};

var M33$setRotate$LM33$NNNN = M33.setRotate$LM33$NNNN;

/**
 * @param {M33} $this
 * @param {!number} rad
 * @param {V3} a
 * @return {M33}
 */
M33.setRotate$LM33$NLV3$ = function ($this, rad, a) {
	/** @type {Float32Array} */
	var _$0;
	return M33$setRotate$LM33$NNNN($this, rad, (_$0 = a._)[0], _$0[1], _$0[2]);
};

var M33$setRotate$LM33$NLV3$ = M33.setRotate$LM33$NLV3$;

/**
 * @param {M33} $this
 * @param {!number} rad
 * @param {Array.<undefined|!number>} a
 * @return {M33}
 */
M33.setRotate$LM33$NAN = function ($this, rad, a) {
	return M33$setRotate$LM33$NNNN($this, rad, a[0], a[1], a[2]);
};

var M33$setRotate$LM33$NAN = M33.setRotate$LM33$NAN;

/**
 * @param {M33} $this
 * @param {!number} rad
 * @param {Float32Array} a
 * @return {M33}
 */
M33.setRotate$LM33$NLFloat32Array$ = function ($this, rad, a) {
	return M33$setRotate$LM33$NNNN($this, rad, a[0], a[1], a[2]);
};

var M33$setRotate$LM33$NLFloat32Array$ = M33.setRotate$LM33$NLFloat32Array$;

/**
 * @param {M33} $this
 * @param {!number} rad
 * @return {M33}
 */
M33.setRotateX$LM33$N = function ($this, rad) {
	return M33$setRotate$LM33$NNNN($this, rad, 1, 0, 0);
};

var M33$setRotateX$LM33$N = M33.setRotateX$LM33$N;

/**
 * @param {M33} $this
 * @param {!number} rad
 * @return {M33}
 */
M33.setRotateY$LM33$N = function ($this, rad) {
	return M33$setRotate$LM33$NNNN($this, rad, 0, 1, 0);
};

var M33$setRotateY$LM33$N = M33.setRotateY$LM33$N;

/**
 * @param {M33} $this
 * @param {!number} rad
 * @return {M33}
 */
M33.setRotateZ$LM33$N = function ($this, rad) {
	return M33$setRotate$LM33$NNNN($this, rad, 0, 0, 1);
};

var M33$setRotateZ$LM33$N = M33.setRotateZ$LM33$N;

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
	this._ = new Float32Array(16);
};

M44$.prototype = new M44;

/**
 * @constructor
 * @param {M44} m
 */
function M44$LM44$(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(16);
	_$0.set(m._);
};

M44$LM44$.prototype = new M44;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M44$AN(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(16);
	_$0.set(m);
};

M44$AN.prototype = new M44;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M44$LFloat32Array$(m) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(16);
	_$0.set(m);
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
	var _$0;
	_$0 = this._ = new Float32Array(16);
	_$0[0] = m00;
	_$0[1] = m10;
	_$0[2] = m20;
	_$0[3] = m30;
	_$0[4] = m01;
	_$0[5] = m11;
	_$0[6] = m21;
	_$0[7] = m31;
	_$0[8] = m02;
	_$0[9] = m12;
	_$0[10] = m22;
	_$0[11] = m32;
	_$0[12] = m03;
	_$0[13] = m13;
	_$0[14] = m23;
	_$0[15] = m33;
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
	this._ = new Float32Array(16);
	M44$set$LM44$LV4$LV4$LV4$LV4$(this, v0, v1, v2, v3);
};

M44$LV4$LV4$LV4$LV4$.prototype = new M44;

/**
 * @constructor
 * @param {M22} m
 * @param {!number} m22
 * @param {!number} m33
 */
function M44$LM22$NN(m, m22, m33) {
	this._ = new Float32Array(16);
	M44$set$LM44$LM22$NN(this, m, m22, m33);
};

M44$LM22$NN.prototype = new M44;

/**
 * @constructor
 * @param {M33} m
 * @param {!number} m33
 */
function M44$LM33$N(m, m33) {
	this._ = new Float32Array(16);
	M44$set$LM44$LM33$N(this, m, m33);
};

M44$LM33$N.prototype = new M44;

/**
 * @param {M44} $this
 * @return {Float32Array}
 */
M44.array$LM44$ = function ($this) {
	return $this._;
};

var M44$array$LM44$ = M44.array$LM44$;

/**
 * @param {M44} $this
 * @return {M22}
 */
M44.m22$LM44$ = function ($this) {
	return new M22$LM44$($this);
};

var M44$m22$LM44$ = M44.m22$LM44$;

/**
 * @param {M44} $this
 * @param {!number} m33
 * @return {M33}
 */
M44.m33$LM44$N = function ($this, m33) {
	return new M33$LM44$($this);
};

var M44$m33$LM44$N = M44.m33$LM44$N;

/**
 * @param {M44} $this
 * @param {M22} m
 * @param {!number} m22
 * @param {!number} m33
 * @return {M44}
 */
M44.set$LM44$LM22$NN = function ($this, m, m22, m33) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
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
	return $this;
};

var M44$set$LM44$LM22$NN = M44.set$LM44$LM22$NN;

/**
 * @param {M44} $this
 * @param {M33} m
 * @param {!number} m33
 * @return {M44}
 */
M44.set$LM44$LM33$N = function ($this, m, m33) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
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
	return $this;
};

var M44$set$LM44$LM33$N = M44.set$LM44$LM33$N;

/**
 * @param {M44} $this
 * @return {M44}
 */
M44.clone$LM44$ = function ($this) {
	return new M44$LM44$($this);
};

var M44$clone$LM44$ = M44.clone$LM44$;

/**
 * @param {M44} $this
 * @return {M44}
 */
M44.setZero$LM44$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = $this._;
	for (i = 0; i < 16; ++ i) {
		a[i] = 0;
	}
	return $this;
};

var M44$setZero$LM44$ = M44.setZero$LM44$;

/**
 * @param {M44} $this
 * @return {M44}
 */
M44.setIdentity$LM44$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var i;
	a = $this._;
	for (i = 0; i < 16; ++ i) {
		a[i] = (i % 5 === 0 ? 1 : 0);
	}
	return $this;
};

var M44$setIdentity$LM44$ = M44.setIdentity$LM44$;

/**
 * @param {M44} $this
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
M44.set$LM44$NNNNNNNNNNNNNNNN = function ($this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	/** @type {Float32Array} */
	var a;
	a = $this._;
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
	return $this;
};

var M44$set$LM44$NNNNNNNNNNNNNNNN = M44.set$LM44$NNNNNNNNNNNNNNNN;

/**
 * @param {M44} $this
 * @param {V4} v0
 * @param {V4} v1
 * @param {V4} v2
 * @param {V4} v3
 * @return {M44}
 */
M44.set$LM44$LV4$LV4$LV4$LV4$ = function ($this, v0, v1, v2, v3) {
	$this._.set(v0._, 0);
	$this._.set(v1._, 4);
	$this._.set(v2._, 8);
	$this._.set(v3._, 12);
	return $this;
};

var M44$set$LM44$LV4$LV4$LV4$LV4$ = M44.set$LM44$LV4$LV4$LV4$LV4$;

/**
 * @param {M44} $this
 * @param {M44} m
 * @return {M44}
 */
M44.set$LM44$LM44$ = function ($this, m) {
	$this._.set(m._);
	return $this;
};

var M44$set$LM44$LM44$ = M44.set$LM44$LM44$;

/**
 * @param {M44} $this
 * @param {Array.<undefined|!number>} m
 * @return {M44}
 */
M44.set$LM44$AN = function ($this, m) {
	$this._.set(m);
	return $this;
};

var M44$set$LM44$AN = M44.set$LM44$AN;

/**
 * @param {M44} $this
 * @param {Float32Array} m
 * @return {M44}
 */
M44.set$LM44$LFloat32Array$ = function ($this, m) {
	$this._.set(m);
	return $this;
};

var M44$set$LM44$LFloat32Array$ = M44.set$LM44$LFloat32Array$;

/**
 * @param {M44} $this
 * @param {Array.<undefined|!number>} m
 * @param {!number} offs
 * @return {M44}
 */
M44.set$LM44$ANN = function ($this, m, offs) {
	$this._.set(m, offs);
	return $this;
};

var M44$set$LM44$ANN = M44.set$LM44$ANN;

/**
 * @param {M44} $this
 * @param {Float32Array} m
 * @param {!number} offs
 * @return {M44}
 */
M44.set$LM44$LFloat32Array$N = function ($this, m, offs) {
	$this._.set(m, offs);
	return $this;
};

var M44$set$LM44$LFloat32Array$N = M44.set$LM44$LFloat32Array$N;

/**
 * @param {M44} $this
 * @param {M44} m
 * @return {!boolean}
 */
M44.equals$LM44$LM44$ = function ($this, m) {
	return M44$equals$LM44$LM44$N($this, m, 0.000001);
};

var M44$equals$LM44$LM44$ = M44.equals$LM44$LM44$;

/**
 * @param {M44} $this
 * @param {M44} m
 * @param {!number} eps
 * @return {!boolean}
 */
M44.equals$LM44$LM44$N = function ($this, m, eps) {
	var $math_abs_t;
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 16; ++ i) {
		if ((($math_abs_t = b[i] - a[i]) >= 0 ? $math_abs_t : -$math_abs_t) >= eps) {
			return false;
		}
	}
	return true;
};

var M44$equals$LM44$LM44$N = M44.equals$LM44$LM44$N;

/**
 * @param {M44} $this
 * @param {M44} m
 * @return {M44}
 */
M44.add$LM44$LM44$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 16; ++ i) {
		a[i] += b[i];
	}
	return $this;
};

var M44$add$LM44$LM44$ = M44.add$LM44$LM44$;

/**
 * @param {M44} $this
 * @param {M44} m
 * @return {M44}
 */
M44.sub$LM44$LM44$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = m._);
	for (i = 0; i < 16; ++ i) {
		a[i] -= b[i];
	}
	return $this;
};

var M44$sub$LM44$LM44$ = M44.sub$LM44$LM44$;

/**
 * @param {M44} $this
 * @param {M44} m
 * @return {M44}
 */
M44.mul$LM44$LM44$ = function ($this, m) {
	return M44$mul$LM44$LM44$LM44$($this, $this, m);
};

var M44$mul$LM44$LM44$ = M44.mul$LM44$LM44$;

/**
 * @param {M44} $this
 * @param {M44} m0
 * @param {M44} m1
 * @return {M44}
 */
M44.mul$LM44$LM44$LM44$ = function ($this, m0, m1) {
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
	a = m0._;
	(a00 = a[0], a10 = a[1], a20 = a[2], a30 = a[3]);
	(a01 = a[4], a11 = a[5], a21 = a[6], a31 = a[7]);
	(a02 = a[8], a12 = a[9], a22 = a[10], a32 = a[11]);
	(a03 = a[12], a13 = a[13], a23 = a[14], a33 = a[15]);
	b = m1._;
	(b00 = b[0], b10 = b[1], b20 = b[2], b30 = b[3]);
	(b01 = b[4], b11 = b[5], b21 = b[6], b31 = b[7]);
	(b02 = b[8], b12 = b[9], b22 = b[10], b32 = b[11]);
	(b03 = b[12], b13 = b[13], b23 = b[14], b33 = b[15]);
	a[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
	a[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
	a[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
	a[3] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
	a[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
	a[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
	a[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
	a[7] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
	a[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
	a[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
	a[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
	a[11] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
	a[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;
	a[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;
	a[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;
	a[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;
	return $this;
};

var M44$mul$LM44$LM44$LM44$ = M44.mul$LM44$LM44$LM44$;

/**
 * @param {M44} $this
 * @return {M44}
 */
M44.transpose$LM44$ = function ($this) {
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
	a = $this._;
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
	return $this;
};

var M44$transpose$LM44$ = M44.transpose$LM44$;

/**
 * @param {M44} $this
 * @param {M44} m
 * @return {M44}
 */
M44.transpose$LM44$LM44$ = function ($this, m) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	(a = $this._, b = m._);
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
	return $this;
};

var M44$transpose$LM44$LM44$ = M44.transpose$LM44$LM44$;

/**
 * @param {M44} $this
 * @return {!number}
 */
M44.det$LM44$ = function ($this) {
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
	a = $this._;
	(a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3]);
	(a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7]);
	(a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11]);
	(a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]);
	return a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 + a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 + a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 + a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 + a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 + a20 * a01 * a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33;
};

var M44$det$LM44$ = M44.det$LM44$;

/**
 * @param {M44} $this
 * @return {M44}
 */
M44.inverse$LM44$ = function ($this) {
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
	a = $this._;
	(a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]);
	(b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11, b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30, b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32);
	d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	a[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
	a[1] = (- a01 * b11 + a02 * b10 - a03 * b09) * invDet;
	a[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
	a[3] = (- a21 * b05 + a22 * b04 - a23 * b03) * invDet;
	a[4] = (- a10 * b11 + a12 * b08 - a13 * b07) * invDet;
	a[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
	a[6] = (- a30 * b05 + a32 * b02 - a33 * b01) * invDet;
	a[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
	a[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
	a[9] = (- a00 * b10 + a01 * b08 - a03 * b06) * invDet;
	a[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
	a[11] = (- a20 * b04 + a21 * b02 - a23 * b00) * invDet;
	a[12] = (- a10 * b09 + a11 * b07 - a12 * b06) * invDet;
	a[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
	a[14] = (- a30 * b03 + a31 * b01 - a32 * b00) * invDet;
	a[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
	return $this;
};

var M44$inverse$LM44$ = M44.inverse$LM44$;

/**
 * @param {M44} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M44}
 */
M44.setTranslate$LM44$NNN = function ($this, x, y, z) {
	M44$setIdentity$LM44$($this);
	$this._[12] = x;
	$this._[13] = y;
	$this._[14] = z;
	return $this;
};

var M44$setTranslate$LM44$NNN = M44.setTranslate$LM44$NNN;

/**
 * @param {M44} $this
 * @param {V3} v
 * @return {M44}
 */
M44.setTranslate$LM44$LV3$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	return M44$setTranslate$LM44$NNN($this, (_$0 = v._)[0], _$0[1], _$0[2]);
};

var M44$setTranslate$LM44$LV3$ = M44.setTranslate$LM44$LV3$;

/**
 * @param {M44} $this
 * @param {Array.<undefined|!number>} v
 * @return {M44}
 */
M44.setTranslate$LM44$AN = function ($this, v) {
	return M44$setTranslate$LM44$NNN($this, v[0], v[1], v[2]);
};

var M44$setTranslate$LM44$AN = M44.setTranslate$LM44$AN;

/**
 * @param {M44} $this
 * @param {Float32Array} v
 * @return {M44}
 */
M44.setTranslate$LM44$LFloat32Array$ = function ($this, v) {
	return M44$setTranslate$LM44$NNN($this, v[0], v[1], v[2]);
};

var M44$setTranslate$LM44$LFloat32Array$ = M44.setTranslate$LM44$LFloat32Array$;

/**
 * @param {M44} $this
 * @param {!number} s
 * @return {M44}
 */
M44.setScale$LM44$N = function ($this, s) {
	return M44$setScale$LM44$NNN($this, s, s, s);
};

var M44$setScale$LM44$N = M44.setScale$LM44$N;

/**
 * @param {M44} $this
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M44}
 */
M44.setScale$LM44$NNN = function ($this, x, y, z) {
	M44$setZero$LM44$($this);
	$this._[0] = x;
	$this._[5] = y;
	$this._[10] = z;
	$this._[15] = 1;
	return $this;
};

var M44$setScale$LM44$NNN = M44.setScale$LM44$NNN;

/**
 * @param {M44} $this
 * @param {V3} v
 * @return {M44}
 */
M44.setScale$LM44$LV3$ = function ($this, v) {
	/** @type {Float32Array} */
	var _$0;
	return M44$setScale$LM44$NNN($this, (_$0 = v._)[0], _$0[1], _$0[2]);
};

var M44$setScale$LM44$LV3$ = M44.setScale$LM44$LV3$;

/**
 * @param {M44} $this
 * @param {Array.<undefined|!number>} v
 * @return {M44}
 */
M44.setScale$LM44$AN = function ($this, v) {
	return M44$setScale$LM44$NNN($this, v[0], v[1], v[2]);
};

var M44$setScale$LM44$AN = M44.setScale$LM44$AN;

/**
 * @param {M44} $this
 * @param {Float32Array} v
 * @return {M44}
 */
M44.setScale$LM44$LFloat32Array$ = function ($this, v) {
	return M44$setScale$LM44$NNN($this, v[0], v[1], v[2]);
};

var M44$setScale$LM44$LFloat32Array$ = M44.setScale$LM44$LFloat32Array$;

/**
 * @param {M44} $this
 * @param {!number} rad
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M44}
 */
M44.setRotate$LM44$NNNN = function ($this, rad, x, y, z) {
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
	a = $this._;
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
	return $this;
};

var M44$setRotate$LM44$NNNN = M44.setRotate$LM44$NNNN;

/**
 * @param {M44} $this
 * @param {!number} rad
 * @param {V3} a
 * @return {M44}
 */
M44.setRotate$LM44$NLV3$ = function ($this, rad, a) {
	/** @type {Float32Array} */
	var _$0;
	return M44$setRotate$LM44$NNNN($this, rad, (_$0 = a._)[0], _$0[1], _$0[2]);
};

var M44$setRotate$LM44$NLV3$ = M44.setRotate$LM44$NLV3$;

/**
 * @param {M44} $this
 * @param {!number} rad
 * @param {Array.<undefined|!number>} a
 * @return {M44}
 */
M44.setRotate$LM44$NAN = function ($this, rad, a) {
	return M44$setRotate$LM44$NNNN($this, rad, a[0], a[1], a[2]);
};

var M44$setRotate$LM44$NAN = M44.setRotate$LM44$NAN;

/**
 * @param {M44} $this
 * @param {!number} rad
 * @param {Float32Array} a
 * @return {M44}
 */
M44.setRotate$LM44$NLFloat32Array$ = function ($this, rad, a) {
	return M44$setRotate$LM44$NNNN($this, rad, a[0], a[1], a[2]);
};

var M44$setRotate$LM44$NLFloat32Array$ = M44.setRotate$LM44$NLFloat32Array$;

/**
 * @param {M44} $this
 * @param {!number} rad
 * @return {M44}
 */
M44.setRotateX$LM44$N = function ($this, rad) {
	return M44$setRotate$LM44$NNNN($this, rad, 1, 0, 0);
};

var M44$setRotateX$LM44$N = M44.setRotateX$LM44$N;

/**
 * @param {M44} $this
 * @param {!number} rad
 * @return {M44}
 */
M44.setRotateY$LM44$N = function ($this, rad) {
	return M44$setRotate$LM44$NNNN($this, rad, 0, 1, 0);
};

var M44$setRotateY$LM44$N = M44.setRotateY$LM44$N;

/**
 * @param {M44} $this
 * @param {!number} rad
 * @return {M44}
 */
M44.setRotateZ$LM44$N = function ($this, rad) {
	return M44$setRotate$LM44$NNNN($this, rad, 0, 0, 1);
};

var M44$setRotateZ$LM44$N = M44.setRotateZ$LM44$N;

/**
 * @param {M44} $this
 * @param {!number} l
 * @param {!number} r
 * @param {!number} b
 * @param {!number} t
 * @param {!number} n
 * @param {!number} f
 * @return {M44}
 */
M44.setFrustum$LM44$NNNNNN = function ($this, l, r, b, t, n, f) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var rl;
	/** @type {!number} */
	var tb;
	/** @type {!number} */
	var fn;
	a = $this._;
	(rl = r - l, tb = t - b, fn = f - n);
	a[0] = 2 * n / rl;
	a[5] = 2 * n / tb;
	a[8] = (r + l) / rl;
	a[9] = (t + b) / tb;
	a[10] = - (f + n) / fn;
	a[11] = -1;
	a[14] = -2 * f * n / fn;
	a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[12] = a[13] = a[15] = 0;
	return $this;
};

var M44$setFrustum$LM44$NNNNNN = M44.setFrustum$LM44$NNNNNN;

/**
 * @param {M44} $this
 * @param {!number} l
 * @param {!number} r
 * @param {!number} b
 * @param {!number} t
 * @param {!number} n
 * @param {!number} f
 * @return {M44}
 */
M44.setOrtho$LM44$NNNNNN = function ($this, l, r, b, t, n, f) {
	/** @type {Float32Array} */
	var a;
	/** @type {!number} */
	var rl;
	/** @type {!number} */
	var tb;
	/** @type {!number} */
	var fn;
	a = $this._;
	(rl = r - l, tb = t - b, fn = f - n);
	a[0] = 2 / rl;
	a[5] = 2 / tb;
	a[10] = -2 / fn;
	a[12] = - (r + l) / rl;
	a[13] = - (t + b) / tb;
	a[14] = - (f + n) / fn;
	a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = 0;
	a[15] = 1;
	return $this;
};

var M44$setOrtho$LM44$NNNNNN = M44.setOrtho$LM44$NNNNNN;

/**
 * @param {M44} $this
 * @return {M44}
 */
M44.dump$LM44$ = function ($this) {
	/** @type {!number} */
	var i;
	for (i = 0; i < 4; ++ i) {
	}
	return $this;
};

var M44$dump$LM44$ = M44.dump$LM44$;

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
	this._ = new Float32Array(4);
};

Quat$.prototype = new Quat;

/**
 * @constructor
 * @param {Quat} q
 */
function Quat$LQuat$(q) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(q._);
};

Quat$LQuat$.prototype = new Quat;

/**
 * @constructor
 * @param {Array.<undefined|!number>} q
 */
function Quat$AN(q) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(q);
};

Quat$AN.prototype = new Quat;

/**
 * @constructor
 * @param {Float32Array} q
 */
function Quat$LFloat32Array$(q) {
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	_$0.set(q);
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
	this._ = new Float32Array(4);
	Quat$set$LQuat$NNNN(this, w, x, y, z);
};

Quat$NNNN.prototype = new Quat;

/**
 * @param {Quat} $this
 * @return {Float32Array}
 */
Quat.array$LQuat$ = function ($this) {
	return $this._;
};

var Quat$array$LQuat$ = Quat.array$LQuat$;

/**
 * @param {Quat} $this
 * @return {Quat}
 */
Quat.clone$LQuat$ = function ($this) {
	return new Quat$LQuat$($this);
};

var Quat$clone$LQuat$ = Quat.clone$LQuat$;

/**
 * @param {Quat} $this
 * @return {Quat}
 */
Quat.setZero$LQuat$ = function ($this) {
	return Quat$set$LQuat$NNNN($this, 0, 0, 0, 0);
};

var Quat$setZero$LQuat$ = Quat.setZero$LQuat$;

/**
 * @param {Quat} $this
 * @return {Quat}
 */
Quat.setIdentity$LQuat$ = function ($this) {
	return Quat$set$LQuat$NNNN($this, 1, 0, 0, 0);
};

var Quat$setIdentity$LQuat$ = Quat.setIdentity$LQuat$;

/**
 * @param {Quat} $this
 * @param {!number} w
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {Quat}
 */
Quat.set$LQuat$NNNN = function ($this, w, x, y, z) {
	$this._[0] = w;
	$this._[1] = x;
	$this._[2] = y;
	$this._[3] = z;
	return $this;
};

var Quat$set$LQuat$NNNN = Quat.set$LQuat$NNNN;

/**
 * @param {Quat} $this
 * @param {Quat} q
 * @return {Quat}
 */
Quat.set$LQuat$LQuat$ = function ($this, q) {
	$this._.set(q._);
	return $this;
};

var Quat$set$LQuat$LQuat$ = Quat.set$LQuat$LQuat$;

/**
 * @param {Quat} $this
 * @param {Array.<undefined|!number>} q
 * @return {Quat}
 */
Quat.set$LQuat$AN = function ($this, q) {
	$this._.set(q);
	return $this;
};

var Quat$set$LQuat$AN = Quat.set$LQuat$AN;

/**
 * @param {Quat} $this
 * @param {Float32Array} q
 * @return {Quat}
 */
Quat.set$LQuat$LFloat32Array$ = function ($this, q) {
	$this._.set(q);
	return $this;
};

var Quat$set$LQuat$LFloat32Array$ = Quat.set$LQuat$LFloat32Array$;

/**
 * @param {Quat} $this
 * @param {!number} w
 * @param {V3} v
 * @return {Quat}
 */
Quat.set$LQuat$NLV3$ = function ($this, w, v) {
	/** @type {Float32Array} */
	var _$0;
	return Quat$set$LQuat$NNNN($this, w, (_$0 = v._)[0], _$0[1], _$0[2]);
};

var Quat$set$LQuat$NLV3$ = Quat.set$LQuat$NLV3$;

/**
 * @param {Quat} $this
 * @param {Quat} q
 * @return {!boolean}
 */
Quat.equals$LQuat$LQuat$ = function ($this, q) {
	return Quat$equals$LQuat$LQuat$N($this, q, 0.000001);
};

var Quat$equals$LQuat$LQuat$ = Quat.equals$LQuat$LQuat$;

/**
 * @param {Quat} $this
 * @param {Quat} q
 * @param {!number} eps
 * @return {!boolean}
 */
Quat.equals$LQuat$LQuat$N = function ($this, q, eps) {
	var $math_abs_t;
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = q._);
	for (i = 0; i < 4; ++ i) {
		if ((($math_abs_t = b[i] - a[i]) >= 0 ? $math_abs_t : -$math_abs_t) >= eps) {
			return false;
		}
	}
	return true;
};

var Quat$equals$LQuat$LQuat$N = Quat.equals$LQuat$LQuat$N;

/**
 * @param {Quat} $this
 * @param {Quat} q
 * @return {!number}
 */
Quat.dot$LQuat$LQuat$ = function ($this, q) {
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
	return (_$0 = $this._)[0] * (_$1 = q._)[0] + _$0[1] * _$1[1] + _$0[2] * _$1[2] + _$0[3] * _$1[3];
};

var Quat$dot$LQuat$LQuat$ = Quat.dot$LQuat$LQuat$;

/**
 * @param {Quat} $this
 * @return {Quat}
 */
Quat.inverse$LQuat$ = function ($this) {
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
	a = $this._;
	(q0 = a[0], q1 = a[1], q2 = a[2], q3 = a[3]);
	dot = q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3;
	if (dot === 0) {
		return null;
	}
	invDot = 1 / dot;
	a[0] *= invDot;
	a[1] *= - invDot;
	a[2] *= - invDot;
	a[3] *= - invDot;
	return $this;
};

var Quat$inverse$LQuat$ = Quat.inverse$LQuat$;

/**
 * @param {Quat} $this
 * @return {Quat}
 */
Quat.conjugate$LQuat$ = function ($this) {
	/** @type {Float32Array} */
	var a;
	a = $this._;
	a[1] *= -1;
	a[2] *= -1;
	a[3] *= -1;
	return $this;
};

var Quat$conjugate$LQuat$ = Quat.conjugate$LQuat$;

/**
 * @param {Quat} $this
 * @return {!number}
 */
Quat.len$LQuat$ = function ($this) {
	return Math.sqrt(Quat$len2$LQuat$($this));
};

var Quat$len$LQuat$ = Quat.len$LQuat$;

/**
 * @param {Quat} $this
 * @return {!number}
 */
Quat.len2$LQuat$ = function ($this) {
	/** @type {undefined|!number} */
	var w;
	/** @type {undefined|!number} */
	var x;
	/** @type {undefined|!number} */
	var y;
	/** @type {undefined|!number} */
	var z;
	/** @type {Float32Array} */
	var _$0;
	(w = (_$0 = $this._)[0], x = _$0[1], y = _$0[2], z = _$0[3]);
	return w * w + x * x + y * y + z * z;
};

var Quat$len2$LQuat$ = Quat.len2$LQuat$;

/**
 * @param {Quat} $this
 * @return {Quat}
 */
Quat.normalize$LQuat$ = function ($this) {
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
	a = $this._;
	(w = a[0], x = a[1], y = a[2], z = a[3]);
	l = Math.sqrt(x * x + y * y + z * z + w * w);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	a[0] *= il;
	a[1] *= il;
	a[2] *= il;
	a[3] *= il;
	return $this;
};

var Quat$normalize$LQuat$ = Quat.normalize$LQuat$;

/**
 * @param {Quat} $this
 * @param {Quat} q
 * @return {Quat}
 */
Quat.add$LQuat$LQuat$ = function ($this, q) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = q._);
	for (i = 0; i < 4; ++ i) {
		a[i] += b[i];
	}
	return $this;
};

var Quat$add$LQuat$LQuat$ = Quat.add$LQuat$LQuat$;

/**
 * @param {Quat} $this
 * @param {Quat} q
 * @return {Quat}
 */
Quat.sub$LQuat$LQuat$ = function ($this, q) {
	/** @type {Float32Array} */
	var a;
	/** @type {Float32Array} */
	var b;
	/** @type {!number} */
	var i;
	(a = $this._, b = q._);
	for (i = 0; i < 4; ++ i) {
		a[i] -= b[i];
	}
	return $this;
};

var Quat$sub$LQuat$LQuat$ = Quat.sub$LQuat$LQuat$;

/**
 * @param {Quat} $this
 * @param {Quat} q
 * @return {Quat}
 */
Quat.mul$LQuat$LQuat$ = function ($this, q) {
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
	(a = $this._, b = q._);
	(aw = a[0], ax = a[1], ay = a[2], az = a[3]);
	(bw = b[0], bx = b[1], by = b[2], bz = b[3]);
	a[0] = aw * bw - ax * bx - ay * by - az * bz;
	a[1] = aw * bx + ax * bw + ay * bz - az * by;
	a[2] = aw * by - ax * bz + ay * bw + az * bx;
	a[3] = aw * bz + ax * by - ay * bx + az * bw;
	return $this;
};

var Quat$mul$LQuat$LQuat$ = Quat.mul$LQuat$LQuat$;

/**
 * @param {Quat} $this
 * @param {!number} s
 * @return {Quat}
 */
Quat.mul$LQuat$N = function ($this, s) {
	/** @type {Float32Array} */
	var a;
	a = $this._;
	a[0] *= s;
	a[1] *= s;
	a[2] *= s;
	a[3] *= s;
	return $this;
};

var Quat$mul$LQuat$N = Quat.mul$LQuat$N;

/**
 * @param {Quat} $this
 * @param {Quat} q0
 * @param {Quat} q1
 * @param {!number} slerp
 * @return {Quat}
 */
Quat.slerp$LQuat$LQuat$LQuat$N = function ($this, q0, q1, slerp) {
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
	(a = q0._, b = q1._, c = $this._);
	(aw = a[0], ax = a[1], ay = a[2], az = a[3]);
	(bw = b[0], bx = b[1], by = b[2], bz = b[3]);
	cosHalfTheta = aw * bw + ax * bx + ay * by + az * bz;
	if ((cosHalfTheta >= 0 ? cosHalfTheta : - cosHalfTheta) >= 1.0) {
		return $this;
	}
	halfTheta = Math.acos(cosHalfTheta);
	sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
	if ((sinHalfTheta >= 0 ? sinHalfTheta : - sinHalfTheta) < 0.001) {
		c[0] = (aw + bw) / 2;
		c[1] = (ax + bx) / 2;
		c[2] = (ay + by) / 2;
		c[3] = (az + bz) / 2;
		return $this;
	}
	ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
	ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;
	c[0] = aw * ratioA + bw * ratioB;
	c[1] = ax * ratioA + bx * ratioB;
	c[2] = ay * ratioA + by * ratioB;
	c[3] = az * ratioA + bz * ratioB;
	return $this;
};

var Quat$slerp$LQuat$LQuat$LQuat$N = Quat.slerp$LQuat$LQuat$LQuat$N;

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
	/** @type {M44} */
	var m;
	/** @type {Float32Array} */
	var ta;
	/** @type {M44} */
	var im;
	/** @type {M44} */
	var iim;
	/** @type {Array.<undefined|!number>} */
	var m$0;
	/** @type {M44} */
	var m$1;
	/** @type {M44} */
	var this$0;
	/** @type {M44} */
	var m$2;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var this$3;
	v = new V3$NNN(1, 2, 3);
	new V3$LV3$(v);
	m = {_: new Float32Array(16)};
	m$0 = [ 1, 2, 43, 5 ];
	m._.set(m$0);
	ta = new Float32Array(5);
	ta[4] = 100;
	m._.set(ta);
	M44$setIdentity$LM44$(m);
	this$2 = {_: new Float32Array(16)};
	m$1 = M44$setRotate$LM44$NNNN(this$2, 10, 1, 0, 0);
	M44$mul$LM44$LM44$LM44$(m, m, m$1);
	this$0 = M44$setTranslate$LM44$NNN({_: new Float32Array(16)}, 1, 2, 3);
	m = M44$mul$LM44$LM44$LM44$(this$0, this$0, m);
	this$3 = {_: new Float32Array(16)};
	m$2 = M44$setScale$LM44$NNN(this$3, 100, 100, 100);
	M44$mul$LM44$LM44$LM44$(m, m, m$2);
	im = M44$inverse$LM44$(new M44$LM44$(m));
	_Main$dump$LM44$(m);
	_Main$dump$LM44$(im);
	this$1 = new M44$LM44$(m);
	iim = M44$mul$LM44$LM44$LM44$(this$1, this$1, im);
	_Main$dump$LM44$(iim);
	_Main$dump$LM44$(M44$set$LM44$LV4$LV4$LV4$LV4$(m, new V4$NNNN(0, 1, 2, 3), new V4$NNNN(4, 5, 6, 7), new V4$NNNN(8, 9, 10, 11), new V4$NNNN(12, 13, 14, 16)));
};

var _Main$main$AS = _Main.main$AS;

/**
 * @param {M44} m
 */
_Main.dump$LM44$ = function (m) {
	/** @type {!number} */
	var i;
	for (i = 0; i < 4; ++ i) {
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
 * @param {_Part} $this
 * @param {Array.<undefined|!number>} v
 * @return {_Part}
 */
_Part.setVertex$L_Part$AN = function ($this, v) {
	$this.vbuf = _Part$createArrayBuffer$AN(v);
	$this.numv = (v.length / 3 | 0);
	return $this;
};

var _Part$setVertex$L_Part$AN = _Part.setVertex$L_Part$AN;

/**
 * @param {_Part} $this
 * @param {Array.<undefined|!number>} n
 * @return {_Part}
 */
_Part.setNormal$L_Part$AN = function ($this, n) {
	$this.nbuf = _Part$createArrayBuffer$AN(n);
	return $this;
};

var _Part$setNormal$L_Part$AN = _Part.setNormal$L_Part$AN;

/**
 * @param {_Part} $this
 * @param {Array.<undefined|!number>} i
 * @return {_Part}
 */
_Part.setIndex$L_Part$AI = function ($this, i) {
	$this.ibuf = _Part$createIndexBuffer$AI(i);
	$this.numi = (i.length | 0);
	return $this;
};

var _Part$setIndex$L_Part$AI = _Part.setIndex$L_Part$AI;

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
	this._pos = {_: new Float32Array(3)};
	this._vangle = 0;
	this._velo = 0;
	this._anim = 0;
	this._state = '';
	this._spinMat = {_: new Float32Array(16)};
	this._spinAxis = {_: new Float32Array(3)};
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
	/** @type {Array.<undefined|!number>} */
	var i$0;
	/** @type {Array.<undefined|!number>} */
	var i$1;
	/** @type {Array.<undefined|!number>} */
	var i$2;
	/** @type {Array.<undefined|!number>} */
	var i$3;
	/** @type {Array.<undefined|!number>} */
	var i$4;
	/** @type {Array.<undefined|!number>} */
	var i$5;
	/** @type {Array.<undefined|!number>} */
	var n$0;
	/** @type {Array.<undefined|!number>} */
	var n$1;
	/** @type {Array.<undefined|!number>} */
	var n$2;
	/** @type {Array.<undefined|!number>} */
	var n$3;
	/** @type {Array.<undefined|!number>} */
	var n$4;
	/** @type {_Part} */
	var this$11;
	/** @type {Array.<undefined|!number>} */
	var v$0;
	/** @type {_Part} */
	var this$12;
	/** @type {Array.<undefined|!number>} */
	var v$1;
	/** @type {_Part} */
	var this$13;
	/** @type {Array.<undefined|!number>} */
	var v$2;
	/** @type {_Part} */
	var this$14;
	/** @type {Array.<undefined|!number>} */
	var v$3;
	/** @type {_Part} */
	var this$15;
	/** @type {Array.<undefined|!number>} */
	var v$4;
	/** @type {_Part} */
	var this$16;
	/** @type {Array.<undefined|!number>} */
	var v$5;
	Kingyo.gl = gl;
	Kingyo.prog = Util$getProgram$SS('kbody.vs', 'kbody.fs');
	this$12 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$1 = [ 0, 0, 1, 0.7, 0, 0, 0, 1, 0, -0.7, 0, 0, 0, -1, 0, 0, 0, -1 ];
	this$12.vbuf = _Part$createArrayBuffer$AN(v$1);
	this$12.numv = (v$1.length / 3 | 0);
	n$0 = [ 0, 0, 1, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1 ];
	this$12.nbuf = _Part$createArrayBuffer$AN(n$0);
	i$0 = [ 0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 5, 2, 1, 5, 3, 2, 5, 4, 3, 5, 1, 4 ];
	this$12.ibuf = _Part$createIndexBuffer$AI(i$0);
	this$12.numi = (i$0.length | 0);
	Kingyo.body = this$12;
	this$13 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$2 = [ 0, 0, 0, 0.5, -0.25, 0, 0.8, 0.25, 0 ];
	this$13.vbuf = _Part$createArrayBuffer$AN(v$2);
	this$13.numv = (v$2.length / 3 | 0);
	n$1 = [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ];
	this$13.nbuf = _Part$createArrayBuffer$AN(n$1);
	i$1 = [ 0, 1, 2 ];
	this$13.ibuf = _Part$createIndexBuffer$AI(i$1);
	this$13.numi = (i$1.length | 0);
	Kingyo.lfin = this$13;
	this$14 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$3 = [ 0, 0, 0, -0.8, 0.25, 0, -0.5, -0.25, 0 ];
	this$14.vbuf = _Part$createArrayBuffer$AN(v$3);
	this$14.numv = (v$3.length / 3 | 0);
	n$2 = [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ];
	this$14.nbuf = _Part$createArrayBuffer$AN(n$2);
	i$2 = [ 0, 1, 2 ];
	this$14.ibuf = _Part$createIndexBuffer$AI(i$2);
	this$14.numi = (i$2.length | 0);
	Kingyo.rfin = this$14;
	this$15 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$4 = [ 0, 0, 0, 0, -0.5, -1, 0, 0.5, -0.8 ];
	this$15.vbuf = _Part$createArrayBuffer$AN(v$4);
	this$15.numv = (v$4.length / 3 | 0);
	n$3 = [ 1, 0, 0, 1, 0, 0, 1, 0, 0 ];
	this$15.nbuf = _Part$createArrayBuffer$AN(n$3);
	i$3 = [ 0, 1, 2 ];
	this$15.ibuf = _Part$createIndexBuffer$AI(i$3);
	this$15.numi = (i$3.length | 0);
	Kingyo.bfin = this$15;
	this$16 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$5 = [ 0, 0, 0, 0.8, -0.5, -1, 0, 0.4, -0.8, -0.8, -0.5, -1 ];
	this$16.vbuf = _Part$createArrayBuffer$AN(v$5);
	this$16.numv = (v$5.length / 3 | 0);
	n$4 = [ 0, 1, 1, 1, 1, 1, 0, 1, 0, -1, 1, 1 ];
	this$16.nbuf = _Part$createArrayBuffer$AN(n$4);
	i$4 = [ 0, 1, 2, 0, 2, 3 ];
	this$16.ibuf = _Part$createIndexBuffer$AI(i$4);
	this$16.numi = (i$4.length | 0);
	Kingyo.tfin = this$16;
	Kingyo.ulocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.alocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.eyeProg = Util$getProgram$SS('keye.vs', 'keye.fs');
	Kingyo.eyeULocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.eyeProg);
	Kingyo.eyeALocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.eyeProg);
	(ex = 0.3, ey = 0.15, ez = 0.5);
	this$11 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$0 = [ - ex, ey, ez, 0, - ex, ey, ez, 1, - ex, ey, ez, 2, - ex, ey, ez, 3, ex, ey, ez, 4, ex, ey, ez, 5, ex, ey, ez, 6, ex, ey, ez, 7 ];
	this$11.vbuf = _Part$createArrayBuffer$AN(v$0);
	this$11.numv = (v$0.length / 3 | 0);
	i$5 = [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7 ];
	this$11.ibuf = _Part$createIndexBuffer$AI(i$5);
	this$11.numi = (i$5.length | 0);
	Kingyo.eyes = this$11;
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
 * @param {*} pred
 */
Kingyo.draw$LM44$LM44$F$LKingyo$B$ = function (projMat, viewMat, pred) {
	/** @type {WebGLRenderingContext} */
	var gl;
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
	ulocs = Kingyo.ulocs;
	alocs = Kingyo.alocs;
	gl.useProgram(Kingyo.prog);
	gl.uniformMatrix4fv(ulocs.projectionMatrix, false, projMat._);
	gl.uniformMatrix4fv(ulocs.viewMatrix, false, viewMat._);
	gl.uniform4fv(ulocs.lightPosition, [ 0, 1, 1, 0 ]);
	gl.enableVertexAttribArray(alocs.vertex);
	gl.enableVertexAttribArray(alocs.normal);
	for (i = 0; i < Kingyo.all.length; ++ i) {
		k = Kingyo.all[i];
		if (pred(k)) {
			k._draw$();
		}
	}
	gl.disableVertexAttribArray(alocs.vertex);
	gl.disableVertexAttribArray(alocs.normal);
	eulocs = Kingyo.eyeULocs;
	ealocs = Kingyo.eyeALocs;
	gl.useProgram(Kingyo.eyeProg);
	gl.uniformMatrix4fv(eulocs.projectionMatrix, false, projMat._);
	gl.uniformMatrix4fv(eulocs.viewMatrix, false, viewMat._);
	gl.uniform4fv(eulocs.lightPosition, [ 0, 1, 1, 0 ]);
	gl.uniform1f(eulocs.radius, 0.2);
	gl.bindBuffer(gl.ARRAY_BUFFER, Kingyo.eyes.vbuf);
	gl.vertexAttribPointer(ealocs.position, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(ealocs.position);
	for (i = 0; i < Kingyo.all.length; ++ i) {
		k = Kingyo.all[i];
		if (pred(k)) {
			k._drawEyes$();
		}
	}
	gl.disableVertexAttribArray(ealocs.position);
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
		dx = V3$x$LV3$(k._pos) - x;
		dy = V3$y$LV3$(k._pos) - y;
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
	/** @type {V3} */
	var this$0;
	/** @type {!number} */
	var z$0;
	/** @type {V3} */
	var this$1;
	this._vangle = Math.random() * 2 * 3.141592653589793;
	this._velo = Math.random() * 15 + 1;
	r = 8 * Math.random();
	x = r * Math.cos(this._vangle);
	y = r * Math.sin(this._vangle);
	this$0 = this._pos;
	z$0 = -2 - Math.random() * 3;
	this$0._[0] = x;
	this$0._[1] = y;
	this$0._[2] = z$0;
	this._anim = 0;
	this._state = 'swimming';
	M44$setIdentity$LM44$(this._spinMat);
	this$1 = this._spinAxis;
	this$1._[0] = 0;
	this$1._[1] = 0;
	this$1._[2] = 0;
	this._spinSpeed = 0;
	this._vz = 0;
};

/**
 */
Kingyo.prototype._setRandom$ = function () {
	this._vangle = Math.random() * 2 * 3.141592653589793;
	this._velo = Math.random() * 15 + 1;
};

/**
 */
Kingyo.prototype._fished$ = function () {
	/** @type {!number} */
	var a;
	/** @type {V3} */
	var this$0;
	/** @type {V3} */
	var this$1;
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	this._state = 'flying';
	this$0 = this._pos;
	this$0._[2] = 2;
	this._vz = 150 + Math.random() * 50;
	this._velo = 12;
	M44$setIdentity$LM44$(this._spinMat);
	a = 6.283185307179586 * Math.random();
	this$1 = this._spinAxis;
	x$0 = Math.cos(a);
	y$0 = Math.sin(a);
	z$0 = Math.random() - 0.5;
	this$1._[0] = x$0;
	this$1._[1] = y$0;
	this$1._[2] = z$0;
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
	/** @type {V3} */
	var this$0;
	/** @type {V3} */
	var this$1;
	/** @type {V3} */
	var this$2;
	/** @type {!number} */
	var val$0;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var m$0;
	/** @type {V3} */
	var this$4;
	/** @type {!number} */
	var x$0;
	/** @type {M44} */
	var this$5;
	/** @type {!number} */
	var rad$0;
	/** @type {V3} */
	var a$0;
	/** @type {V3} */
	var _pos$0;
	/** @type {Float32Array} */
	var _$0;
	switch (this._state) {
	default:
		break;
	case 'swimming':
		x = V3$x$LV3$(this._pos) + Math.cos(this._vangle) * this._velo * dt;
		y = V3$y$LV3$(this._pos) + Math.sin(this._vangle) * this._velo * dt;
		b = 10;
		if (x < -10) {
			x = - b;
			this._vangle = Math.random() * 2 * 3.141592653589793;
			this._velo = Math.random() * 15 + 1;
		}
		if (y < - b) {
			y = - b;
			this._vangle = Math.random() * 2 * 3.141592653589793;
			this._velo = Math.random() * 15 + 1;
		}
		if (x > b) {
			x = b;
			this._vangle = Math.random() * 2 * 3.141592653589793;
			this._velo = Math.random() * 15 + 1;
		}
		if (y > b) {
			y = b;
			this._vangle = Math.random() * 2 * 3.141592653589793;
			this._velo = Math.random() * 15 + 1;
		}
		this$0 = this._pos;
		this$0._[0] = x;
		this$1 = this._pos;
		this$1._[1] = y;
		break;
	case 'flying':
		this._vz -= 300 * dt;
		this$2 = _pos$0 = this._pos;
		val$0 = V3$z$LV3$(_pos$0) + this._vz * dt;
		this$2._[2] = val$0;
		this$3 = this._spinMat;
		this$5 = {_: new Float32Array(16)};
		rad$0 = dt * this._spinSpeed;
		a$0 = this._spinAxis;
		m$0 = M44$setRotate$LM44$NNNN(this$5, rad$0, (_$0 = a$0._)[0], _$0[1], _$0[2]);
		M44$mul$LM44$LM44$LM44$(this$3, this$3, m$0);
		if (V3$z$LV3$(this._pos) >= 2) {
			break;
		}
		num_listed = 0;
		for (i = 0; i < Kingyo.all.length; ++ i) {
			if (Kingyo.all[i]._state === 'listed') {
				++ num_listed;
			}
		}
		this$4 = this._pos;
		x$0 = num_listed * 1.5 - 10 - 4.25;
		this$4._[0] = x$0;
		this$4._[1] = 13;
		this$4._[2] = 2;
		this._vangle = 1.5707963267948966;
		M44$setIdentity$LM44$(this._spinMat);
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
	/** @type {M44} */
	var this$0;
	/** @type {M44} */
	var m$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var m$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var m$3;
	/** @type {M44} */
	var this$4;
	/** @type {M44} */
	var m$4;
	/** @type {M44} */
	var this$5;
	/** @type {M44} */
	var m$5;
	/** @type {M44} */
	var this$6;
	/** @type {M44} */
	var this$7;
	/** @type {M44} */
	var m$6;
	/** @type {M44} */
	var this$8;
	/** @type {M44} */
	var m$7;
	/** @type {M44} */
	var this$9;
	/** @type {M44} */
	var m$8;
	/** @type {M44} */
	var this$10;
	/** @type {M44} */
	var m$9;
	/** @type {M44} */
	var this$11;
	/** @type {M44} */
	var m$10;
	/** @type {M44} */
	var this$12;
	/** @type {M44} */
	var this$13;
	/** @type {M44} */
	var m$11;
	/** @type {M44} */
	var this$14;
	/** @type {!number} */
	var rad$0;
	/** @type {M44} */
	var this$15;
	/** @type {V3} */
	var v$0;
	/** @type {Float32Array} */
	var _$0;
	gl = Kingyo.gl;
	gl.uniform3fv(Kingyo.ulocs.color, this._color);
	gl.uniform3fv(Kingyo.ulocs.color2, this._color2);
	gl.uniform4fv(Kingyo.ulocs.color2pos, this._color2pos);
	modelMatLoc = Kingyo.ulocs.modelMatrix;
	s = Math.sin(this._anim * 5);
	this$15 = {_: new Float32Array(16)};
	v$0 = this._pos;
	this$13 = M44$setTranslate$LM44$NNN(this$15, (_$0 = v$0._)[0], _$0[1], _$0[2]);
	m$11 = this._spinMat;
	this$11 = M44$mul$LM44$LM44$LM44$(this$13, this$13, m$11);
	this$14 = {_: new Float32Array(16)};
	rad$0 = this._vangle - s / 10;
	m$10 = M44$setRotate$LM44$NNNN(this$14, rad$0, 0, 0, 1);
	this$5 = M44$mul$LM44$LM44$LM44$(this$11, this$11, m$10);
	this$12 = {_: new Float32Array(16)};
	m$5 = M44$setRotate$LM44$NNNN(this$12, 1.5707963267948966, 1, 0, 0);
	this$0 = M44$mul$LM44$LM44$LM44$(this$5, this$5, m$5);
	this$6 = {_: new Float32Array(16)};
	m$0 = M44$setRotate$LM44$NNNN(this$6, 1.5707963267948966, 0, 1, 0);
	bodyMat = M44$mul$LM44$LM44$LM44$(this$0, this$0, m$0);
	gl.uniformMatrix4fv(modelMatLoc, false, bodyMat._);
	this._drawPart$L_Part$(Kingyo.body);
	this$7 = new M44$LM44$(bodyMat);
	m$6 = M44$setTranslate$LM44$NNN({_: new Float32Array(16)}, 0.5, -0.3, 0);
	this$1 = M44$mul$LM44$LM44$LM44$(this$7, this$7, m$6);
	m$1 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, 1 + s / 2, 0.2, 1, -0.5);
	lfinMat = M44$mul$LM44$LM44$LM44$(this$1, this$1, m$1);
	gl.uniformMatrix4fv(modelMatLoc, false, lfinMat._);
	this._drawPart$L_Part$(Kingyo.lfin);
	this$8 = new M44$LM44$(bodyMat);
	m$7 = M44$setTranslate$LM44$NNN({_: new Float32Array(16)}, -0.5, -0.3, 0);
	this$2 = M44$mul$LM44$LM44$LM44$(this$8, this$8, m$7);
	m$2 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, -1 - s / 2, -0.2, 1, -0.5);
	rfinMat = M44$mul$LM44$LM44$LM44$(this$2, this$2, m$2);
	gl.uniformMatrix4fv(modelMatLoc, false, rfinMat._);
	this._drawPart$L_Part$(Kingyo.rfin);
	this$9 = new M44$LM44$(bodyMat);
	m$8 = M44$setTranslate$LM44$NNN({_: new Float32Array(16)}, 0, 0.7, 0);
	this$3 = M44$mul$LM44$LM44$LM44$(this$9, this$9, m$8);
	m$3 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, s / 2, 0, 1, 1);
	bfinMat = M44$mul$LM44$LM44$LM44$(this$3, this$3, m$3);
	gl.uniformMatrix4fv(modelMatLoc, false, bfinMat._);
	this._drawPart$L_Part$(Kingyo.bfin);
	this$10 = new M44$LM44$(bodyMat);
	m$9 = M44$setTranslate$LM44$NNN({_: new Float32Array(16)}, 0, 0, -0.7);
	this$4 = M44$mul$LM44$LM44$LM44$(this$10, this$10, m$9);
	m$4 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, s / 2, 0, 1, 0);
	tfinMat = M44$mul$LM44$LM44$LM44$(this$4, this$4, m$4);
	gl.uniformMatrix4fv(modelMatLoc, false, tfinMat._);
	this._drawPart$L_Part$(Kingyo.tfin);
};

/**
 * @param {_Part} p
 */
Kingyo.prototype._drawPart$L_Part$ = function (p) {
	/** @type {WebGLRenderingContext} */
	var gl;
	gl = Kingyo.gl;
	gl.bindBuffer(gl.ARRAY_BUFFER, p.vbuf);
	gl.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, p.nbuf);
	gl.vertexAttribPointer(Kingyo.alocs.normal, 3, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, p.ibuf);
	gl.drawElements(gl.TRIANGLES, p.numi, gl.UNSIGNED_SHORT, 0);
};

/**
 */
Kingyo.prototype._drawEyes$ = function () {
	/** @type {WebGLRenderingContext} */
	var gl;
	/** @type {Object.<string, undefined|WebGLUniformLocation>} */
	var ulocs;
	/** @type {!number} */
	var s;
	/** @type {M44} */
	var bodyMat;
	/** @type {M44} */
	var this$0;
	/** @type {M44} */
	var m$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var m$2;
	/** @type {M44} */
	var this$4;
	/** @type {M44} */
	var this$5;
	/** @type {M44} */
	var m$3;
	/** @type {M44} */
	var this$6;
	/** @type {!number} */
	var rad$0;
	/** @type {M44} */
	var this$7;
	/** @type {V3} */
	var v$0;
	/** @type {Float32Array} */
	var _$0;
	gl = Kingyo.gl;
	ulocs = Kingyo.eyeULocs;
	gl.uniform3fv(ulocs.color, this._color);
	s = Math.sin(this._anim * 5);
	this$7 = {_: new Float32Array(16)};
	v$0 = this._pos;
	this$5 = M44$setTranslate$LM44$NNN(this$7, (_$0 = v$0._)[0], _$0[1], _$0[2]);
	m$3 = this._spinMat;
	this$3 = M44$mul$LM44$LM44$LM44$(this$5, this$5, m$3);
	this$6 = {_: new Float32Array(16)};
	rad$0 = this._vangle - s / 10;
	m$2 = M44$setRotate$LM44$NNNN(this$6, rad$0, 0, 0, 1);
	this$1 = M44$mul$LM44$LM44$LM44$(this$3, this$3, m$2);
	this$4 = {_: new Float32Array(16)};
	m$1 = M44$setRotate$LM44$NNNN(this$4, 1.5707963267948966, 1, 0, 0);
	this$0 = M44$mul$LM44$LM44$LM44$(this$1, this$1, m$1);
	this$2 = {_: new Float32Array(16)};
	m$0 = M44$setRotate$LM44$NNNN(this$2, 1.5707963267948966, 0, 1, 0);
	bodyMat = M44$mul$LM44$LM44$LM44$(this$0, this$0, m$0);
	gl.uniformMatrix4fv(ulocs.modelMatrix, false, bodyMat._);
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
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ -2, -6, 2, -6, 2, 2, -2, 2, 0, 0, 1, 0, 1, 1, 0, 1 ]), gl.STATIC_DRAW);
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
	image = dom.window.document.createElement('img');
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
 * @param {Poi} $this
 * @param {!number} x
 * @param {!number} y
 * @return {Poi}
 */
Poi.setPosition$LPoi$NN = function ($this, x, y) {
	$this._x = x;
	$this._y = y;
	return $this;
};

var Poi$setPosition$LPoi$NN = Poi.setPosition$LPoi$NN;

/**
 * @param {Poi} $this
 * @param {!boolean} d
 * @return {Poi}
 */
Poi.down$LPoi$B = function ($this, d) {
	$this._down = d;
	return $this;
};

var Poi$down$LPoi$B = Poi.down$LPoi$B;

/**
 * @param {Poi} $this
 * @return {!boolean}
 */
Poi.down$LPoi$ = function ($this) {
	return $this._down;
};

var Poi$down$LPoi$ = Poi.down$LPoi$;

/**
 * @param {Poi} $this
 * @param {!boolean} t
 * @return {Poi}
 */
Poi.tear$LPoi$B = function ($this, t) {
	$this._live = ! t;
	return $this;
};

var Poi$tear$LPoi$B = Poi.tear$LPoi$B;

/**
 * @param {Poi} $this
 * @return {!boolean}
 */
Poi.tearing$LPoi$ = function ($this) {
	return ! $this._live;
};

var Poi$tearing$LPoi$ = Poi.tearing$LPoi$;

/**
 * @param {Poi} $this
 * @param {M44} projMat
 * @param {M44} viewMat
 */
Poi.draw$LPoi$LM44$LM44$ = function ($this, projMat, viewMat) {
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
	/** @type {M44} */
	var this$0;
	/** @type {M44} */
	var m$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {M44} */
	var m$2;
	/** @type {M44} */
	var this$2;
	gl = Poi.gl;
	prog = Poi.prog;
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, projMat._);
	this$0 = new M44$LM44$(viewMat);
	m$0 = M44$setTranslate$LM44$NNN({_: new Float32Array(16)}, $this._x, $this._y, $this._z);
	mvMat = M44$mul$LM44$LM44$LM44$(this$0, this$0, m$0);
	if ($this._down) {
		m$2 = M44$setTranslate$LM44$NNN({_: new Float32Array(16)}, 0, 0, -7);
		this$1 = M44$mul$LM44$LM44$LM44$(mvMat, mvMat, m$2);
		this$2 = {_: new Float32Array(16)};
		m$1 = M44$setRotate$LM44$NNNN(this$2, -0.1, 1, 0, 0);
		M44$mul$LM44$LM44$LM44$(this$1, this$1, m$1);
	}
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, mvMat._);
	gl.bindBuffer(gl.ARRAY_BUFFER, Poi.vtbuf);
	vloc = gl.getAttribLocation(prog, 'vertex');
	tloc = gl.getAttribLocation(prog, 'texcoord');
	gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
	gl.vertexAttribPointer(tloc, 2, gl.FLOAT, false, 0, 32);
	gl.enableVertexAttribArray(vloc);
	gl.enableVertexAttribArray(tloc);
	gl.bindTexture(gl.TEXTURE_2D, $this._live ? Poi.tex : Poi.texx);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(vloc);
	gl.disableVertexAttribArray(tloc);
};

var Poi$draw$LPoi$LM44$LM44$ = Poi.draw$LPoi$LM44$LM44$;

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
	this._ix = -1;
	this._iy = -1;
	this._ir = 0;
	this._iz = 0;
	this._next_step_time = 0;
	gl = Water.gl;
	w = 64;
	h = 64;
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
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ -20, -20, 20, -20, 20, 20, -20, 20 ]), gl.STATIC_DRAW);
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
	/** @type {!number} */
	var _next_step_time$0;
	if (! this._next_step_time) {
		this._next_step_time = t;
	}
	if (t < this._next_step_time) {
		return;
	}
	_next_step_time$0 = this._next_step_time += 0.02;
	if (_next_step_time$0 < t) {
		this._next_step_time = t;
	}
	gl = Water.gl;
	vp = gl.getParameter(gl.VIEWPORT);
	if (! vp) {
		vp = new Int32Array(gl.getParameter(gl.VIEWPORT));
	}
	gl.disable(gl.BLEND);
	gl.disable(gl.DEPTH_TEST);
	this._step$LWebGLProgram$(Water.progDisp);
	this._step$LWebGLProgram$(Water.progVelo);
	gl.viewport(vp[0], vp[1], vp[2], vp[3]);
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
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array$LM44$(M44$setOrtho$LM44$NNNNNN({_: new Float32Array(16)}, 0, 1, 0, 1, -1, 1)));
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
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array$LM44$(M44$setOrtho$LM44$NNNNNN({_: new Float32Array(16)}, 0, 1, 0, 1, -1, 1)));
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
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, projMat._);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, viewMat._);
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
	/** @type {Int32Array} */
	var _viewport$0;
	gl = RenderTexture.gl;
	_viewport$0 = this._viewport = gl.getParameter(gl.VIEWPORT);
	if (! _viewport$0) {
		this._viewport = new Int32Array(gl.getParameter(gl.VIEWPORT));
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
	gl.viewport(vp[0], vp[1], vp[2], vp[3]);
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
	return M44$setFrustum$LM44$NNNNNN({_: new Float32Array(16)}, - Game.near * Game.fovh, Game.near * Game.fovh, - Game.near * Game.fovv, Game.near * Game.fovv, Game.near, Game.far);
});
$__jsx_lazy_init(Game, "viewMat", function () {
	return M44$mul$LM44$LM44$(M44$setTranslate$LM44$NNN({_: new Float32Array(16)}, 0, 0, - Game.viewDistance), M44$setRotateX$LM44$N({_: new Float32Array(16)}, - Game.viewLean));
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
	return js.global.document;
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
M22.ELEMS = 4;
M33.ROWS = 3;
M33.COLS = 3;
M33.ELEMS = 9;
M44.ROWS = 4;
M44.COLS = 4;
M44.ELEMS = 16;
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
