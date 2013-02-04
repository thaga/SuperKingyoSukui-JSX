// generatedy by JSX compiler 0.9.4 (2013-02-04 15:54:33 +0900; ab254a836fa725678a3b8c759f744e0d43e9d621)
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
JSX.DEBUG = true;
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
	canvas = (function (v) {
		if (! (v == null || v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[game.jsx:50] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}((function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/js/web.jsx:29] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.getElementById(canvas_id)))));
	ww = dom.window.innerWidth;
	wh = dom.window.innerHeight;
	canvas_size = (ww <= wh ? ww : wh);
	canvas.width = canvas_size;
	canvas.height = canvas_size;
	Game.status_text = (function (v) {
		if (! (v == null || v instanceof HTMLDivElement)) {
			debugger;
			throw new Error("[game.jsx:57] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}((function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/js/web.jsx:29] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.getElementById('status')))));
	Game.life_bar = (function (v) {
		if (! (v == null || v instanceof HTMLDivElement)) {
			debugger;
			throw new Error("[game.jsx:58] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}((function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/js/web.jsx:29] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.getElementById(life_id)))));
	lbw = Game.life_bar.style.width;
	Game.life_bar_width = lbw.substring(0, lbw.length - 2) | 0;
	gl = Util$getWebGL$S(canvas_id);
	Game.gl = gl;
	Poi$initWithGL$LWebGLRenderingContext$(gl);
	Kingyo$initWithGL$LWebGLRenderingContext$(gl);
	Water$initWithGL$LWebGLRenderingContext$(gl);
	RenderTexture.gl = gl;
	Game.poi = ({_x: 0, _y: 0, _z: 1, _down: false, _live: true});
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
		s = (function (v) {
			if (! (v == null || v instanceof HTMLAudioElement)) {
				debugger;
				throw new Error("[game.jsx:81] detected invalid cast, value is not an instance of the designated type or null");
			}
			return v;
		}(dom.window.document.createElement('audio')));
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
			me = (function (v) {
				if (! (v == null || v instanceof MouseEvent)) {
					debugger;
					throw new Error("[game.jsx:90] detected invalid cast, value is not an instance of the designated type or null");
				}
				return v;
			}(e));
			px = me.clientX;
			py = me.clientY;
		} else {
			if (e instanceof TouchEvent) {
				te = (function (v) {
					if (! (v == null || v instanceof TouchEvent)) {
						debugger;
						throw new Error("[game.jsx:95] detected invalid cast, value is not an instance of the designated type or null");
					}
					return v;
				}(e));
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
		wx = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:106] null access");
			}
			return v;
		}(p[0])) / canvas.width * 2 - 1;
		wy = - p[1] / canvas.height * 2 + 1;
		epos = new V3$NNN(0, 0, 80).transformBy$LM33$(new M33$().setRotateX$N(0.2));
		this$0 = new V3$NNN(0.2 * wx, 0.2 * wy, -1).transformBy$LM33$(new M33$().setRotateX$N(0.2));
		l$0 = Math.sqrt(this$0.len2$());
		pdir = (l$0 > 0 ? this$0.mul$N(1 / l$0) : this$0);
		hpos = new V3$LV3$(pdir).mul$N(epos.z / - pdir.z).add$LV3$(epos);
		return [ hpos.x, hpos.y ];
	});
	touchStart = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Array.<undefined|Kingyo>} */
		var hit;
		/** @type {Poi} */
		var this$0;
		/** @type {Poi} */
		var this$1;
		/** @type {Poi} */
		var this$2;
		/** @type {Water} */
		var this$3;
		/** @type {!number} */
		var x$0;
		/** @type {!number} */
		var y$0;
		e.preventDefault();
		lastTouchPos = getPoint(e);
		pos = calcMousePosOnXYPlane(lastTouchPos);
		Poi$setPosition$LPoi$NN(Game.poi, (function (v) {
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
		if (Poi$tearing$LPoi$(Game.poi) || Kingyo$numRests$() === 0) {
			Game.life = 1;
			Game.life_bar.style.width = Game.life_bar_width.toString() + "px";
			this$0 = Game.poi;
			this$0._live = ! false;
			this$0;
			Kingyo$reset$();
			Game.status_text.innerHTML = 'click to start';
		} else {
			if (! Poi$tearing$LPoi$(Game.poi)) {
				this$1 = Game.poi;
				this$1._down = true;
				this$1;
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
				this$2 = Game.poi;
				this$2._live = ! true;
				this$2;
				playSound('tear.mp3');
				Game.startTime = 0;
			}
			this$3 = Game.water;
			x$0 = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:144] null access");
				}
				return v;
			}(pos[0])) / 40 + 0.5;
			y$0 = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:145] null access");
				}
				return v;
			}(pos[1])) / 40 + 0.5;
			this$3._ix = x$0;
			this$3._iy = y$0;
			this$3._ir = 0.03;
			this$3._iz = 0;
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
		/** @type {Water} */
		var this$1;
		/** @type {!number} */
		var x$0;
		/** @type {!number} */
		var y$0;
		/** @type {Poi} */
		var this$2;
		e.preventDefault();
		if (e instanceof MouseEvent) {
			lastTouchPos = getPoint(e);
		}
		pos = calcMousePosOnXYPlane(lastTouchPos);
		Poi$setPosition$LPoi$NN(Game.poi, (function (v) {
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
		this$0 = Game.poi;
		if (this$0._down) {
			if (! Poi$tearing$LPoi$(Game.poi)) {
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
			this$1 = Game.water;
			x$0 = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:168] null access");
				}
				return v;
			}(pos[0])) / 40 + 0.5;
			y$0 = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:169] null access");
				}
				return v;
			}(pos[1])) / 40 + 0.5;
			this$1._ix = x$0;
			this$1._iy = y$0;
			this$1._ir = 0.03;
			this$1._iz = 1;
		}
		this$2 = Game.poi;
		this$2._down = false;
		this$2;
	});
	canvas.addEventListener("mouseup", touchEnd);
	canvas.addEventListener("touchend", touchEnd);
	touchMove = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Poi} */
		var this$0;
		/** @type {Water} */
		var this$1;
		/** @type {!number} */
		var x$0;
		/** @type {!number} */
		var y$0;
		e.preventDefault();
		lastTouchPos = getPoint(e);
		pos = calcMousePosOnXYPlane(lastTouchPos);
		Poi$setPosition$LPoi$NN(Game.poi, (function (v) {
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
		this$0 = Game.poi;
		if (this$0._down) {
			this$1 = Game.water;
			x$0 = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:187] null access");
				}
				return v;
			}(pos[0])) / 40 + 0.5;
			y$0 = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[game.jsx:188] null access");
				}
				return v;
			}(pos[1])) / 40 + 0.5;
			this$1._ix = x$0;
			this$1._iy = y$0;
			this$1._ir = 0.02;
			this$1._iz = 0.2;
		}
	});
	canvas.addEventListener("mousemove", touchMove);
	canvas.addEventListener("touchmove", touchMove);
	canvas.onmouseout = (function (e) {
		/** @type {Array.<undefined|!number>} */
		var pos;
		/** @type {Poi} */
		var this$0;
		pos = calcMousePosOnXYPlane(getPoint(e));
		Poi$setPosition$LPoi$NN(Game.poi, (function (v) {
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
		this$0 = Game.poi;
		this$0._down = false;
		this$0;
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
				this$1;
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
		gl$0.viewport((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[rendertexture.jsx:79] null access");
			}
			return v;
		}(vp$0[0])), (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[rendertexture.jsx:79] null access");
			}
			return v;
		}(vp$0[1])), (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[rendertexture.jsx:79] null access");
			}
			return v;
		}(vp$0[2])), (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[rendertexture.jsx:79] null access");
			}
			return v;
		}(vp$0[3])));
		gl.clear(gl.DEPTH_BUFFER_BIT);
		gl.useProgram(Game.bltProg);
		gl.bindTexture(gl.TEXTURE_2D, Game.renderTex.texture$());
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.uniform1i(Game.bltULocs.texture, 0);
		gl.uniformMatrix4fv(Game.bltULocs.projectionMatrix, false, new M44$().setOrtho$NNNNNN(0, 1, 0, 1, -1, 0).array$());
		gl.uniformMatrix4fv(Game.bltULocs.modelviewMatrix, false, new M44$().setIdentity$().array$());
		gl.bindBuffer(gl.ARRAY_BUFFER, Game.bltVTBuf);
		gl.vertexAttribPointer((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:268] null access");
			}
			return v;
		}(Game.bltALocs.vertex)), 2, gl.FLOAT, false, 0, 0);
		gl.vertexAttribPointer((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:269] null access");
			}
			return v;
		}(Game.bltALocs.texcoord)), 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:270] null access");
			}
			return v;
		}(Game.bltALocs.vertex)));
		gl.enableVertexAttribArray((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:271] null access");
			}
			return v;
		}(Game.bltALocs.texcoord)));
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		gl.disableVertexAttribArray((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:275] null access");
			}
			return v;
		}(Game.bltALocs.vertex)));
		gl.disableVertexAttribArray((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:276] null access");
			}
			return v;
		}(Game.bltALocs.texcoord)));
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
	return (function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/js/web.jsx:29] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.getElementById(id)));
};

var dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return (function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/js/web.jsx:37] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.getElementById(id)));
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
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/js/web.jsx:45] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.createElement(tag)));
};

var dom$createElement$S = dom.createElement$S;

/**
 * class EventInit extends Object
 * @constructor
 */
function EventInit() {
}

EventInit.prototype = new Object;
/**
 * @constructor
 */
function EventInit$() {
	this.bubbles = false;
	this.cancelable = false;
};

EventInit$.prototype = new EventInit;

/**
 * class CustomEventInit extends EventInit
 * @constructor
 */
function CustomEventInit() {
}

CustomEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function CustomEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.detail = null;
};

CustomEventInit$.prototype = new CustomEventInit;

/**
 * class MutationObserverInit extends Object
 * @constructor
 */
function MutationObserverInit() {
}

MutationObserverInit.prototype = new Object;
/**
 * @constructor
 */
function MutationObserverInit$() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

MutationObserverInit$.prototype = new MutationObserverInit;

/**
 * class UIEventInit extends EventInit
 * @constructor
 */
function UIEventInit() {
}

UIEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function UIEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
};

UIEventInit$.prototype = new UIEventInit;

/**
 * class FocusEventInit extends Object
 * @constructor
 */
function FocusEventInit() {
}

FocusEventInit.prototype = new Object;
/**
 * @constructor
 */
function FocusEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

FocusEventInit$.prototype = new FocusEventInit;

/**
 * class MouseEventInit extends UIEventInit
 * @constructor
 */
function MouseEventInit() {
}

MouseEventInit.prototype = new UIEventInit;
/**
 * @constructor
 */
function MouseEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

MouseEventInit$.prototype = new MouseEventInit;

/**
 * class WheelEventInit extends Object
 * @constructor
 */
function WheelEventInit() {
}

WheelEventInit.prototype = new Object;
/**
 * @constructor
 */
function WheelEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

WheelEventInit$.prototype = new WheelEventInit;

/**
 * class KeyboardEventInit extends Object
 * @constructor
 */
function KeyboardEventInit() {
}

KeyboardEventInit.prototype = new Object;
/**
 * @constructor
 */
function KeyboardEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.char = "";
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.locale = "";
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

KeyboardEventInit$.prototype = new KeyboardEventInit;

/**
 * class CompositionEventInit extends Object
 * @constructor
 */
function CompositionEventInit() {
}

CompositionEventInit.prototype = new Object;
/**
 * @constructor
 */
function CompositionEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
	this.locale = "";
};

CompositionEventInit$.prototype = new CompositionEventInit;

/**
 * class ProgressEventInit extends EventInit
 * @constructor
 */
function ProgressEventInit() {
}

ProgressEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function ProgressEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

ProgressEventInit$.prototype = new ProgressEventInit;

/**
 * class XMLHttpRequestOptions extends Object
 * @constructor
 */
function XMLHttpRequestOptions() {
}

XMLHttpRequestOptions.prototype = new Object;
/**
 * @constructor
 */
function XMLHttpRequestOptions$() {
	this.anon = false;
};

XMLHttpRequestOptions$.prototype = new XMLHttpRequestOptions;

/**
 * class TrackEventInit extends EventInit
 * @constructor
 */
function TrackEventInit() {
}

TrackEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function TrackEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

TrackEventInit$.prototype = new TrackEventInit;

/**
 * class PopStateEventInit extends EventInit
 * @constructor
 */
function PopStateEventInit() {
}

PopStateEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function PopStateEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.state = null;
};

PopStateEventInit$.prototype = new PopStateEventInit;

/**
 * class HashChangeEventInit extends EventInit
 * @constructor
 */
function HashChangeEventInit() {
}

HashChangeEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function HashChangeEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldURL = "";
	this.newURL = "";
};

HashChangeEventInit$.prototype = new HashChangeEventInit;

/**
 * class PageTransitionEventInit extends EventInit
 * @constructor
 */
function PageTransitionEventInit() {
}

PageTransitionEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function PageTransitionEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.persisted = false;
};

PageTransitionEventInit$.prototype = new PageTransitionEventInit;

/**
 * class DragEventInit extends EventInit
 * @constructor
 */
function DragEventInit() {
}

DragEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function DragEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.dataTransfer = null;
};

DragEventInit$.prototype = new DragEventInit;

/**
 * class CloseEventInit extends EventInit
 * @constructor
 */
function CloseEventInit() {
}

CloseEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function CloseEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

CloseEventInit$.prototype = new CloseEventInit;

/**
 * class StorageEventInit extends EventInit
 * @constructor
 */
function StorageEventInit() {
}

StorageEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function StorageEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

StorageEventInit$.prototype = new StorageEventInit;

/**
 * class MessageEventInit extends EventInit
 * @constructor
 */
function MessageEventInit() {
}

MessageEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function MessageEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

MessageEventInit$.prototype = new MessageEventInit;

/**
 * class ErrorEventInit extends EventInit
 * @constructor
 */
function ErrorEventInit() {
}

ErrorEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function ErrorEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.message = "";
	this.filename = "";
	this.lineno = 0;
};

ErrorEventInit$.prototype = new ErrorEventInit;

/**
 * class EventSourceInit extends Object
 * @constructor
 */
function EventSourceInit() {
}

EventSourceInit.prototype = new Object;
/**
 * @constructor
 */
function EventSourceInit$() {
	this.withCredentials = false;
};

EventSourceInit$.prototype = new EventSourceInit;

/**
 * class IDBObjectStoreParameters extends Object
 * @constructor
 */
function IDBObjectStoreParameters() {
}

IDBObjectStoreParameters.prototype = new Object;
/**
 * @constructor
 */
function IDBObjectStoreParameters$() {
	this.keyPath = null;
	this.autoIncrement = false;
};

IDBObjectStoreParameters$.prototype = new IDBObjectStoreParameters;

/**
 * class IDBIndexParameters extends Object
 * @constructor
 */
function IDBIndexParameters() {
}

IDBIndexParameters.prototype = new Object;
/**
 * @constructor
 */
function IDBIndexParameters$() {
	this.unique = false;
	this.multiEntry = false;
};

IDBIndexParameters$.prototype = new IDBIndexParameters;

/**
 * class IDBVersionChangeEventInit extends EventInit
 * @constructor
 */
function IDBVersionChangeEventInit() {
}

IDBVersionChangeEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function IDBVersionChangeEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldVersion = 0;
	this.newVersion = null;
};

IDBVersionChangeEventInit$.prototype = new IDBVersionChangeEventInit;

/**
 * class NotificationOptions extends Object
 * @constructor
 */
function NotificationOptions() {
}

NotificationOptions.prototype = new Object;
/**
 * @constructor
 */
function NotificationOptions$() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

NotificationOptions$.prototype = new NotificationOptions;

/**
 * class RTCSessionDescriptionInit extends Object
 * @constructor
 */
function RTCSessionDescriptionInit() {
}

RTCSessionDescriptionInit.prototype = new Object;
/**
 * @constructor
 */
function RTCSessionDescriptionInit$() {
	this.type = "";
	this.sdp = "";
};

RTCSessionDescriptionInit$.prototype = new RTCSessionDescriptionInit;

/**
 * class RTCIceCandidateInit extends Object
 * @constructor
 */
function RTCIceCandidateInit() {
}

RTCIceCandidateInit.prototype = new Object;
/**
 * @constructor
 */
function RTCIceCandidateInit$() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

RTCIceCandidateInit$.prototype = new RTCIceCandidateInit;

/**
 * class RTCIceServer extends Object
 * @constructor
 */
function RTCIceServer() {
}

RTCIceServer.prototype = new Object;
/**
 * @constructor
 */
function RTCIceServer$() {
	this.url = "";
	this.credential = null;
};

RTCIceServer$.prototype = new RTCIceServer;

/**
 * class RTCConfiguration extends Object
 * @constructor
 */
function RTCConfiguration() {
}

RTCConfiguration.prototype = new Object;
/**
 * @constructor
 */
function RTCConfiguration$() {
	this.iceServers = null;
};

RTCConfiguration$.prototype = new RTCConfiguration;

/**
 * class DataChannelInit extends Object
 * @constructor
 */
function DataChannelInit() {
}

DataChannelInit.prototype = new Object;
/**
 * @constructor
 */
function DataChannelInit$() {
	this.reliable = false;
};

DataChannelInit$.prototype = new DataChannelInit;

/**
 * class RTCPeerConnectionIceEventInit extends EventInit
 * @constructor
 */
function RTCPeerConnectionIceEventInit() {
}

RTCPeerConnectionIceEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function RTCPeerConnectionIceEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.candidate = null;
};

RTCPeerConnectionIceEventInit$.prototype = new RTCPeerConnectionIceEventInit;

/**
 * class MediaStreamEventInit extends EventInit
 * @constructor
 */
function MediaStreamEventInit() {
}

MediaStreamEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function MediaStreamEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.stream = null;
};

MediaStreamEventInit$.prototype = new MediaStreamEventInit;

/**
 * class DataChannelEventInit extends EventInit
 * @constructor
 */
function DataChannelEventInit() {
}

DataChannelEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function DataChannelEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.channel = null;
};

DataChannelEventInit$.prototype = new DataChannelEventInit;

/**
 * class MediaStreamConstraints extends Object
 * @constructor
 */
function MediaStreamConstraints() {
}

MediaStreamConstraints.prototype = new Object;
/**
 * @constructor
 */
function MediaStreamConstraints$() {
	this.video = null;
	this.audio = null;
};

MediaStreamConstraints$.prototype = new MediaStreamConstraints;

/**
 * class MediaTrackConstraints extends Object
 * @constructor
 */
function MediaTrackConstraints() {
}

MediaTrackConstraints.prototype = new Object;
/**
 * @constructor
 */
function MediaTrackConstraints$() {
	this.mandatory = null;
	this.optional = null;
};

MediaTrackConstraints$.prototype = new MediaTrackConstraints;

/**
 * class HitRegionOptions extends Object
 * @constructor
 */
function HitRegionOptions() {
}

HitRegionOptions.prototype = new Object;
/**
 * @constructor
 */
function HitRegionOptions$() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

HitRegionOptions$.prototype = new HitRegionOptions;

/**
 * class WebGLContextAttributes extends Object
 * @constructor
 */
function WebGLContextAttributes() {
}

WebGLContextAttributes.prototype = new Object;
/**
 * @constructor
 */
function WebGLContextAttributes$() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

WebGLContextAttributes$.prototype = new WebGLContextAttributes;

/**
 * class WebGLContextEventInit extends EventInit
 * @constructor
 */
function WebGLContextEventInit() {
}

WebGLContextEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function WebGLContextEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.statusMessage = "";
};

WebGLContextEventInit$.prototype = new WebGLContextEventInit;

/**
 * class DeviceOrientationEventInit extends EventInit
 * @constructor
 */
function DeviceOrientationEventInit() {
}

DeviceOrientationEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function DeviceOrientationEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

DeviceOrientationEventInit$.prototype = new DeviceOrientationEventInit;

/**
 * class DeviceMotionEventInit extends EventInit
 * @constructor
 */
function DeviceMotionEventInit() {
}

DeviceMotionEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function DeviceMotionEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

DeviceMotionEventInit$.prototype = new DeviceMotionEventInit;

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
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:34] detected invalid cast, value is not a function or null");
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
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:38] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearTimeout))(timer);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {*} callback
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:42] detected invalid cast, value is not a function or null");
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
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:46] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearInterval))(timer);
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
				return (function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:72] detected invalid cast, value is not a function or null");
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
							throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:78] detected invalid cast, value is not a function or null");
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
								throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:84] detected invalid cast, value is not a function or null");
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
									throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:90] detected invalid cast, value is not a function or null");
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
										throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:96] detected invalid cast, value is not a function or null");
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
		/** @type {!number} */
		var value2$0;
		now = Date.now();
		value2$0 = 16 - (now - lastTime);
		timeToCall = (0 >= value2$0 ? 0 : value2$0);
		lastTime = now + timeToCall;
		return (function (v) {
			if (! (v == null || typeof v === "function")) {
				debugger;
				throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:34] detected invalid cast, value is not a function or null");
			}
			return v;
		}(js.global.setTimeout))((function () {
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
				(function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:119] detected invalid cast, value is not a function or null");
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
							throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:125] detected invalid cast, value is not a function or null");
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
								throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:131] detected invalid cast, value is not a function or null");
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
									throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:137] detected invalid cast, value is not a function or null");
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
										throw new Error("[/Users/haga.takeshi/JSX/lib/js/timer.jsx:143] detected invalid cast, value is not a function or null");
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
	canvas = (function (v) {
		if (! (v == null || v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[webgl-util.jsx:9] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}((function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/js/web.jsx:29] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.getElementById(canvas_id)))));
	ctx_names = [ 'webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d' ];
	ctx = null;
	for (ni in ctx_names) {
		try {
			ctx = (function (v) {
				if (! (v == null || v instanceof WebGLRenderingContext)) {
					debugger;
					throw new Error("[webgl-util.jsx:16] detected invalid cast, value is not an instance of the designated type or null");
				}
				return v;
			}(canvas.getContext((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[webgl-util.jsx:16] null access");
				}
				return v;
			}(ctx_names[ni])))));
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
	ulocs = ({  });
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
	alocs = ({  });
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
	this.x = 0;
	this.y = 0;
};

V2$.prototype = new V2;

/**
 * @constructor
 * @param {V2} v
 */
function V2$LV2$(v) {
	this.x = 0;
	this.y = 0;
	this.set$LV2$(v);
};

V2$LV2$.prototype = new V2;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V2$AN(v) {
	this.x = 0;
	this.y = 0;
	this.set$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:40] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:40] null access");
		}
		return v;
	}(v[1])));
	this;
};

V2$AN.prototype = new V2;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V2$LFloat32Array$(v) {
	this.x = 0;
	this.y = 0;
	this.set$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:45] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:45] null access");
		}
		return v;
	}(v[1])));
	this;
};

V2$LFloat32Array$.prototype = new V2;

/**
 * @constructor
 * @param {!number} x
 * @param {!number} y
 */
function V2$NN(x, y) {
	this.x = 0;
	this.y = 0;
	this.x = x;
	this.y = y;
	this;
};

V2$NN.prototype = new V2;

/**
 * @constructor
 * @param {V3} v
 */
function V2$LV3$(v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	this.x = 0;
	this.y = 0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this;
};

V2$LV3$.prototype = new V2;

/**
 * @constructor
 * @param {V4} v
 */
function V2$LV4$(v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	this.x = 0;
	this.y = 0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this;
};

V2$LV4$.prototype = new V2;

/**
 * @return {Array.<undefined|!number>}
 */
V2.prototype.array$ = function () {
	return [ this.x, this.y ];
};

/**
 * @param {!number} z
 * @return {V3}
 */
V2.prototype.V3$N = function (z) {
	return new V3$LV2$N(this, z);
};

/**
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V2.prototype.V4$NN = function (z, w) {
	return new V4$LV2$NN(this, z, w);
};

/**
 * @param {V3} v
 * @return {V2}
 */
V2.prototype.set$LV3$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	return this;
};

/**
 * @param {V4} v
 * @return {V2}
 */
V2.prototype.set$LV4$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	return this;
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
	this.x = 0;
	this.y = 0;
	return this;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.prototype.set$NN = function (x, y) {
	this.x = x;
	this.y = y;
	return this;
};

/**
 * @param {V2} v
 * @return {V2}
 */
V2.prototype.set$LV2$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.prototype.set$AN = function (v) {
	this.set$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:40] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:40] null access");
		}
		return v;
	}(v[1])));
	return this;
};

/**
 * @param {Float32Array} v
 * @return {V2}
 */
V2.prototype.set$LFloat32Array$ = function (v) {
	this.set$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:45] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:45] null access");
		}
		return v;
	}(v[1])));
	return this;
};

/**
 * @param {V2} v
 * @return {!boolean}
 */
V2.prototype.equals$LV2$ = function (v) {
	var $math_abs_t;
	return (($math_abs_t = v.x - this.x) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v.y - this.y) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001;
};

/**
 * @param {V2} v
 * @param {!number} eps
 * @return {!boolean}
 */
V2.prototype.equals$LV2$N = function (v, eps) {
	var $math_abs_t;
	return (($math_abs_t = v.x - this.x) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v.y - this.y) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {V2}
 */
V2.prototype.add$NN = function (x, y) {
	this.x += x;
	this.y += y;
	return this;
};

/**
 * @param {V2} v
 * @return {V2}
 */
V2.prototype.add$LV2$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x += x$0;
	this.y += y$0;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.prototype.add$AN = function (v) {
	return this.add$NN((function (v) {
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
V2.prototype.add$LFloat32Array$ = function (v) {
	return this.add$NN((function (v) {
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
V2.prototype.sub$NN = function (x, y) {
	this.x -= x;
	this.y -= y;
	return this;
};

/**
 * @param {V2} v
 * @return {V2}
 */
V2.prototype.sub$LV2$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x -= x$0;
	this.y -= y$0;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.prototype.sub$AN = function (v) {
	return this.sub$NN((function (v) {
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
 * @param {Float32Array} v
 * @return {V2}
 */
V2.prototype.sub$LFloat32Array$ = function (v) {
	return this.sub$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:74] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:74] null access");
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
	this.x *= x;
	this.y *= y;
	return this;
};

/**
 * @param {V2} v
 * @return {V2}
 */
V2.prototype.mul$LV2$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x *= x$0;
	this.y *= y$0;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V2}
 */
V2.prototype.mul$AN = function (v) {
	return this.mul$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:82] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:82] null access");
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
			throw new Error("[mvq.jsx:83] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:83] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {!number} s
 * @return {V2}
 */
V2.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	return this;
};

/**
 * @return {V2}
 */
V2.prototype.neg$ = function () {
	this.x *= -1;
	this.y *= -1;
	return this;
};

/**
 * @return {V2}
 */
V2.prototype.normalize$ = function () {
	/** @type {!number} */
	var l;
	l = Math.sqrt(this.len2$());
	return (l > 0 ? this.mul$N(1 / l) : this);
};

/**
 * @param {V2} v
 * @return {!number}
 */
V2.prototype.cross$LV2$ = function (v) {
	return this.x * v.y - v.x * this.y;
};

/**
 * @param {V2} v
 * @return {!number}
 */
V2.prototype.dot$LV2$ = function (v) {
	return this.x * v.x + this.y * v.y;
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
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	(x = this.x, y = this.y);
	return x * x + y * y;
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
	x = v.x - this.x;
	y = v.y - this.y;
	return x * x + y * y;
};

/**
 * @param {V2} v0
 * @param {V2} v1
 * @param {!number} ratio
 * @return {V2}
 */
V2.prototype.lerp$LV2$LV2$N = function (v0, v1, ratio) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	return this;
};

/**
 * @param {M22} m
 * @return {V2}
 */
V2.prototype.transformBy$LM22$ = function (m) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	(x = this.x, y = this.y);
	this.x = m.m11 * x + m.m12 * y;
	this.y = m.m21 * x + m.m22 * y;
	return this;
};

/**
 * @param {M33} m
 * @return {V2}
 */
V2.prototype.transformBy$LM33$ = function (m) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	(x = this.x, y = this.y);
	this.x = m.m11 * x + m.m12 * y + m.m13;
	this.y = m.m21 * x + m.m22 * y + m.m23;
	return this;
};

/**
 * @return {!string}
 */
V2.prototype.toString = function () {
	return "V2" + JSON.stringify([ this.x, this.y ]);
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

V3$.prototype = new V3;

/**
 * @constructor
 * @param {V3} v
 */
function V3$LV3$(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LV3$(v);
};

V3$LV3$.prototype = new V3;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V3$AN(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:200] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:200] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:200] null access");
		}
		return v;
	}(v[2])));
	this;
};

V3$AN.prototype = new V3;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V3$LFloat32Array$(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:201] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:201] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:201] null access");
		}
		return v;
	}(v[2])));
	this;
};

V3$LFloat32Array$.prototype = new V3;

/**
 * @constructor
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 */
function V3$NNN(x, y, z) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.x = x;
	this.y = y;
	this.z = z;
	this;
};

V3$NNN.prototype = new V3;

/**
 * @constructor
 * @param {V2} v
 * @param {!number} z
 */
function V3$LV2$N(v, z) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LV2$N(v, z);
};

V3$LV2$N.prototype = new V3;

/**
 * @constructor
 * @param {V4} v
 */
function V3$LV4$(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LV4$(v);
};

V3$LV4$.prototype = new V3;

/**
 * @return {Array.<undefined|!number>}
 */
V3.prototype.array$ = function () {
	return [ this.x, this.y, this.z ];
};

/**
 * @return {V2}
 */
V3.prototype.V2$ = function () {
	return new V2$LV3$(this);
};

/**
 * @param {!number} w
 * @return {V4}
 */
V3.prototype.V4$N = function (w) {
	return new V4$LV3$N(this, w);
};

/**
 * @param {V2} v
 * @param {!number} z
 * @return {V3}
 */
V3.prototype.set$LV2$N = function (v, z) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this.z = z;
	return this;
};

/**
 * @param {V4} v
 * @return {V3}
 */
V3.prototype.set$LV4$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.prototype.set$NNN = function (x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};

/**
 * @param {V3} v
 * @return {V3}
 */
V3.prototype.set$LV3$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.prototype.set$AN = function (v) {
	this.set$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:200] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:200] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:200] null access");
		}
		return v;
	}(v[2])));
	return this;
};

/**
 * @param {Float32Array} v
 * @return {V3}
 */
V3.prototype.set$LFloat32Array$ = function (v) {
	this.set$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:201] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:201] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:201] null access");
		}
		return v;
	}(v[2])));
	return this;
};

/**
 * @param {V3} v
 * @return {!boolean}
 */
V3.prototype.equals$LV3$ = function (v) {
	var $math_abs_t;
	return (($math_abs_t = v.x - this.x) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v.y - this.y) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v.z - this.z) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001;
};

/**
 * @param {V3} v
 * @param {!number} eps
 * @return {!boolean}
 */
V3.prototype.equals$LV3$N = function (v, eps) {
	var $math_abs_t;
	return (($math_abs_t = v.x - this.x) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v.y - this.y) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v.z - this.z) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {V3}
 */
V3.prototype.add$NNN = function (x, y, z) {
	this.x += x;
	this.y += y;
	this.z += z;
	return this;
};

/**
 * @param {V3} v
 * @return {V3}
 */
V3.prototype.add$LV3$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.prototype.add$AN = function (v) {
	return this.add$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:219] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:219] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:219] null access");
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
			throw new Error("[mvq.jsx:220] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:220] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:220] null access");
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
	this.x -= x;
	this.y -= y;
	this.z -= z;
	return this;
};

/**
 * @param {V3} v
 * @return {V3}
 */
V3.prototype.sub$LV3$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.prototype.sub$AN = function (v) {
	return this.sub$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:228] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:228] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:228] null access");
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
			throw new Error("[mvq.jsx:229] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:229] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:229] null access");
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
	this.x *= x;
	this.y *= y;
	this.z *= z;
	return this;
};

/**
 * @param {V3} v
 * @return {V3}
 */
V3.prototype.mul$LV3$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V3}
 */
V3.prototype.mul$AN = function (v) {
	return this.mul$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:237] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:237] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:237] null access");
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
			throw new Error("[mvq.jsx:238] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:238] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:238] null access");
		}
		return v;
	}(v[2])));
};

/**
 * @param {!number} s
 * @return {V3}
 */
V3.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	this.z *= s;
	return this;
};

/**
 * @return {V3}
 */
V3.prototype.neg$ = function () {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	return this;
};

/**
 * @return {V3}
 */
V3.prototype.normalize$ = function () {
	/** @type {!number} */
	var l;
	l = Math.sqrt(this.len2$());
	return (l > 0 ? this.mul$N(1 / l) : this);
};

/**
 * @param {V3} v0
 * @param {V3} v1
 * @return {V3}
 */
V3.prototype.cross$LV3$LV3$ = function (v0, v1) {
	/** @type {!number} */
	var x0;
	/** @type {!number} */
	var y0;
	/** @type {!number} */
	var z0;
	/** @type {!number} */
	var x1;
	/** @type {!number} */
	var y1;
	/** @type {!number} */
	var z1;
	(x0 = v0.x, y0 = v0.y, z0 = v0.z);
	(x1 = v1.x, y1 = v1.y, z1 = v1.z);
	this.x = y0 * z1 - z0 * y1;
	this.y = z0 * x1 - x0 * z1;
	this.z = x0 * y1 - y0 * x1;
	return this;
};

/**
 * @param {V3} v
 * @return {!number}
 */
V3.prototype.dot$LV3$ = function (v) {
	return this.x * v.x + this.y * v.y + this.z * v.z;
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
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	(x = this.x, y = this.y, z = this.z);
	return x * x + y * y + z * z;
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
	x = v.x - this.x;
	y = v.y - this.y;
	z = v.z - this.z;
	return x * x + y * y + z * z;
};

/**
 * @param {V3} v0
 * @param {V3} v1
 * @param {!number} ratio
 * @return {V3}
 */
V3.prototype.lerp$LV3$LV3$N = function (v0, v1, ratio) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	return this;
};

/**
 * @param {M33} m
 * @return {V3}
 */
V3.prototype.transformBy$LM33$ = function (m) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	(x = this.x, y = this.y, z = this.z);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z;
	return this;
};

/**
 * @param {M44} m
 * @return {V3}
 */
V3.prototype.transformBy$LM44$ = function (m) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	(x = this.x, y = this.y, z = this.z);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34;
	return this;
};

/**
 * @return {!string}
 */
V3.prototype.toString = function () {
	return "V3" + JSON.stringify([ this.x, this.y, this.z ]);
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
};

V4$.prototype = new V4;

/**
 * @constructor
 * @param {V4} v
 */
function V4$LV4$(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$NNNN(v.x, v.y, v.z, v.w);
	this;
};

V4$LV4$.prototype = new V4;

/**
 * @constructor
 * @param {Array.<undefined|!number>} v
 */
function V4$AN(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:366] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:366] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:366] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:366] null access");
		}
		return v;
	}(v[3])));
	this;
};

V4$AN.prototype = new V4;

/**
 * @constructor
 * @param {Float32Array} v
 */
function V4$LFloat32Array$(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:367] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:367] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:367] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:367] null access");
		}
		return v;
	}(v[3])));
	this;
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$NNNN(v.x, v.y, z, w);
};

V4$LV2$NN.prototype = new V4;

/**
 * @constructor
 * @param {V3} v
 * @param {!number} w
 */
function V4$LV3$N(v, w) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	this.set$NNNN(v.x, v.y, v.z, w);
};

V4$LV3$N.prototype = new V4;

/**
 * @return {Array.<undefined|!number>}
 */
V4.prototype.array$ = function () {
	return [ this.x, this.y, this.z, this.w ];
};

/**
 * @return {V2}
 */
V4.prototype.V2$ = function () {
	return new V2$LV4$(this);
};

/**
 * @return {V3}
 */
V4.prototype.V3$ = function () {
	return new V3$LV4$(this);
};

/**
 * @param {V2} v
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.set$LV2$NN = function (v, z, w) {
	return this.set$NNNN(v.x, v.y, z, w);
};

/**
 * @param {V3} v
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.set$LV3$N = function (v, w) {
	return this.set$NNNN(v.x, v.y, v.z, w);
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
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
	return this;
};

/**
 * @param {V4} v
 * @return {V4}
 */
V4.prototype.set$LV4$ = function (v) {
	this.set$NNNN(v.x, v.y, v.z, v.w);
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.prototype.set$AN = function (v) {
	this.set$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:366] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:366] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:366] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:366] null access");
		}
		return v;
	}(v[3])));
	return this;
};

/**
 * @param {Float32Array} v
 * @return {V4}
 */
V4.prototype.set$LFloat32Array$ = function (v) {
	this.set$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:367] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:367] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:367] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:367] null access");
		}
		return v;
	}(v[3])));
	return this;
};

/**
 * @param {V4} v
 * @return {!boolean}
 */
V4.prototype.equals$LV4$ = function (v) {
	var $math_abs_t;
	return (($math_abs_t = v.x - this.x) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v.y - this.y) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v.z - this.z) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001 && (($math_abs_t = v.w - this.w) >= 0 ? $math_abs_t : -$math_abs_t) < 0.000001;
};

/**
 * @param {V4} v
 * @param {!number} eps
 * @return {!boolean}
 */
V4.prototype.equals$LV4$N = function (v, eps) {
	var $math_abs_t;
	return (($math_abs_t = v.x - this.x) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v.y - this.y) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v.z - this.z) >= 0 ? $math_abs_t : -$math_abs_t) < eps && (($math_abs_t = v.w - this.w) >= 0 ? $math_abs_t : -$math_abs_t) < eps;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.add$NNNN = function (x, y, z, w) {
	this.x += x;
	this.y += y;
	this.z += z;
	this.w += w;
	return this;
};

/**
 * @param {V4} v
 * @return {V4}
 */
V4.prototype.add$LV4$ = function (v) {
	return this.add$NNNN(v.x, v.y, v.z, v.w);
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.prototype.add$AN = function (v) {
	return this.add$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:386] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:386] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:386] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:386] null access");
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
			throw new Error("[mvq.jsx:387] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:387] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:387] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:387] null access");
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
	this.x -= x;
	this.y -= y;
	this.z -= z;
	this.w -= w;
	return this;
};

/**
 * @param {V4} v
 * @return {V4}
 */
V4.prototype.sub$LV4$ = function (v) {
	return this.sub$NNNN(v.x, v.y, v.z, v.w);
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.prototype.sub$AN = function (v) {
	return this.sub$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:395] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:395] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:395] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:395] null access");
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
			throw new Error("[mvq.jsx:396] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:396] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:396] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:396] null access");
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
	this.x *= x;
	this.y *= y;
	this.z *= z;
	this.w *= w;
	return this;
};

/**
 * @param {V4} v
 * @return {V4}
 */
V4.prototype.mul$LV4$ = function (v) {
	return this.mul$NNNN(v.x, v.y, v.z, v.w);
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.prototype.mul$AN = function (v) {
	return this.mul$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:404] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:404] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:404] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:404] null access");
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
			throw new Error("[mvq.jsx:405] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:405] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:405] null access");
		}
		return v;
	}(v[2])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:405] null access");
		}
		return v;
	}(v[3])));
};

/**
 * @param {!number} s
 * @return {V4}
 */
V4.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	this.z *= s;
	this.w *= s;
	return this;
};

/**
 * @return {V4}
 */
V4.prototype.neg$ = function () {
	return this.mul$N(-1);
};

/**
 * @return {V4}
 */
V4.prototype.normalize$ = function () {
	/** @type {!number} */
	var l;
	l = Math.sqrt(this.len2$());
	return (l > 0 ? this.mul$N(1 / l) : this);
};

/**
 * @param {V4} v
 * @return {!number}
 */
V4.prototype.dot$LV4$ = function (v) {
	return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
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
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	/** @type {!number} */
	var w;
	(x = this.x, y = this.y, z = this.z, w = this.w);
	return x * x + y * y + z * z + w * w;
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
	x = v.x - this.x;
	y = v.y - this.y;
	z = v.z - this.z;
	w = v.w - this.w;
	return x * x + y * y + z * z + w * w;
};

/**
 * @param {V4} v0
 * @param {V4} v1
 * @param {!number} ratio
 * @return {V4}
 */
V4.prototype.lerp$LV4$LV4$N = function (v0, v1, ratio) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	this.w = (w$0 = v0.w) + ratio * (v1.w - w$0);
	return this;
};

/**
 * @param {M44} m
 * @return {V4}
 */
V4.prototype.transformBy$LM44$ = function (m) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	/** @type {!number} */
	var w;
	(x = this.x, y = this.y, z = this.z, w = this.w);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14 * w;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24 * w;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34 * w;
	this.w = m.m41 * x + m.m42 * y + m.m43 * z + m.m44 * w;
	return this;
};

/**
 * @return {!string}
 */
V4.prototype.toString = function () {
	return "V4" + JSON.stringify([ this.x, this.y, this.z, this.w ]);
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
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
};

M22$.prototype = new M22;

/**
 * @constructor
 * @param {M22} m
 */
function M22$LM22$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LM22$(m);
};

M22$LM22$.prototype = new M22;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M22$AN(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$AN(m);
};

M22$AN.prototype = new M22;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M22$LFloat32Array$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LFloat32Array$(m);
};

M22$LFloat32Array$.prototype = new M22;

/**
 * @constructor
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m21
 * @param {!number} m22
 */
function M22$NNNN(m11, m12, m21, m22) {
	this.m11 = m11;
	this.m21 = m21;
	this.m12 = m12;
	this.m22 = m22;
};

M22$NNNN.prototype = new M22;

/**
 * @constructor
 * @param {V2} v0
 * @param {V2} v1
 */
function M22$LV2$LV2$(v0, v1) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LV2$LV2$(v0, v1);
};

M22$LV2$LV2$.prototype = new M22;

/**
 * @constructor
 * @param {!number} s
 */
function M22$N(s) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m11 = this.m22 = s;
	this.m21 = this.m12 = 0;
	this;
};

M22$N.prototype = new M22;

/**
 * @constructor
 * @param {M33} m
 */
function M22$LM33$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LM33$(m);
};

M22$LM33$.prototype = new M22;

/**
 * @constructor
 * @param {M44} m
 */
function M22$LM44$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.set$LM44$(m);
};

M22$LM44$.prototype = new M22;

/**
 * @return {Array.<undefined|!number>}
 */
M22.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m12, this.m22 ];
};

/**
 * @return {Array.<undefined|!number>}
 */
M22.prototype.transposedArray$ = function () {
	return [ this.m11, this.m12, this.m21, this.m22 ];
};

/**
 * @param {!number} m22
 * @return {M33}
 */
M22.prototype.M33$N = function (m22) {
	return new M33$LM22$N(this, m22);
};

/**
 * @param {!number} m22
 * @param {!number} m33
 * @return {M44}
 */
M22.prototype.M44$NN = function (m22, m33) {
	return new M44$LM22$NN(this, m22, m33);
};

/**
 * @param {M33} m
 * @return {M22}
 */
M22.prototype.set$LM33$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};

/**
 * @param {M44} m
 * @return {M22}
 */
M22.prototype.set$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
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
	this.m11 = this.m22 = 0;
	this.m21 = this.m12 = 0;
	return this;
};

/**
 * @return {M22}
 */
M22.prototype.setIdentity$ = function () {
	this.m11 = this.m22 = 1;
	this.m21 = this.m12 = 0;
	return this;
};

/**
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m21
 * @param {!number} m22
 * @return {M22}
 */
M22.prototype.set$NNNN = function (m11, m12, m21, m22) {
	this.m11 = m11;
	this.m21 = m21;
	this.m12 = m12;
	this.m22 = m22;
	return this;
};

/**
 * @param {V2} v0
 * @param {V2} v1
 * @return {M22}
 */
M22.prototype.set$LV2$LV2$ = function (v0, v1) {
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m12 = v1.x;
	this.m22 = v1.y;
	return this;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.set$LM22$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @return {M22}
 */
M22.prototype.set$AN = function (m) {
	this.m11 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:535] null access");
		}
		return v;
	}(m[0]));
	this.m21 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:535] null access");
		}
		return v;
	}(m[1]));
	this.m12 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:535] null access");
		}
		return v;
	}(m[2]));
	this.m22 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:535] null access");
		}
		return v;
	}(m[3]));
	return this;
};

/**
 * @param {Float32Array} m
 * @return {M22}
 */
M22.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:539] null access");
		}
		return v;
	}(m[0]));
	this.m21 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:539] null access");
		}
		return v;
	}(m[1]));
	this.m12 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:539] null access");
		}
		return v;
	}(m[2]));
	this.m22 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:539] null access");
		}
		return v;
	}(m[3]));
	return this;
};

/**
 * @param {!number} s
 * @return {M22}
 */
M22.prototype.set$N = function (s) {
	this.m11 = this.m22 = s;
	this.m21 = this.m12 = 0;
	return this;
};

/**
 * @param {M22} m
 * @return {!boolean}
 */
M22.prototype.equals$LM22$ = function (m) {
	var $math_abs_t;
	return ((($math_abs_t = this.m11 - m.m11) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m21 - m.m21) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m12 - m.m12) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m22 - m.m22) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : true);
};

/**
 * @param {M22} m
 * @param {!number} eps
 * @return {!boolean}
 */
M22.prototype.equals$LM22$N = function (m, eps) {
	var $math_abs_t;
	return ((($math_abs_t = this.m11 - m.m11) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m21 - m.m21) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m12 - m.m12) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m22 - m.m22) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : true);
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.add$LM22$ = function (m) {
	this.m11 += m.m11;
	this.m21 += m.m21;
	this.m12 += m.m12;
	this.m22 += m.m22;
	return this;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.sub$LM22$ = function (m) {
	this.m11 -= m.m11;
	this.m21 -= m.m21;
	this.m12 -= m.m12;
	this.m22 -= m.m22;
	return this;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.mul$LM22$ = function (m) {
	return this.mul$LM22$LM22$(new M22$LM22$(this), m);
};

/**
 * @param {M22} m0
 * @param {M22} m1
 * @return {M22}
 */
M22.prototype.mul$LM22$LM22$ = function (m0, m1) {
	/** @type {!number} */
	var m11$0;
	/** @type {!number} */
	var m21$0;
	/** @type {!number} */
	var m11$1;
	/** @type {!number} */
	var m12$0;
	/** @type {!number} */
	var m21$1;
	/** @type {!number} */
	var m12$1;
	/** @type {!number} */
	var m22$0;
	/** @type {!number} */
	var m22$1;
	this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21);
	this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0;
	this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1;
	return this;
};

/**
 * @return {M22}
 */
M22.prototype.transpose$ = function () {
	/** @type {!number} */
	var m12;
	m12 = this.m12;
	this.m12 = this.m21;
	this.m21 = m12;
	return this;
};

/**
 * @param {M22} m
 * @return {M22}
 */
M22.prototype.transpose$LM22$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m12;
	this.m12 = m.m21;
	this.m22 = m.m22;
	return this;
};

/**
 * @return {!number}
 */
M22.prototype.det$ = function () {
	return this.m11 * this.m22 - this.m21 * this.m12;
};

/**
 * @return {M22}
 */
M22.prototype.inverse$ = function () {
	/** @type {!number} */
	var d;
	/** @type {!number} */
	var invDet;
	/** @type {M22} */
	var org;
	d = this.m11 * this.m22 - this.m21 * this.m12;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	org = new M22$LM22$(this);
	this.m11 = org.m22 * invDet;
	this.m21 = - org.m21 * invDet;
	this.m12 = - org.m12 * invDet;
	this.m22 = org.m11 * invDet;
	return this;
};

/**
 * @param {!number} s
 * @return {M22}
 */
M22.prototype.setScale$N = function (s) {
	this.m11 = s;
	this.m21 = this.m12 = 0;
	this.m22 = s;
	return this;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @return {M22}
 */
M22.prototype.setScale$NN = function (x, y) {
	this.m11 = x;
	this.m21 = this.m12 = 0;
	this.m22 = y;
	return this;
};

/**
 * @param {V2} v
 * @return {M22}
 */
M22.prototype.setScale$LV2$ = function (v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.m11 = x$0;
	this.m21 = this.m12 = 0;
	this.m22 = y$0;
	return this;
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {M22}
 */
M22.prototype.setScale$AN = function (v) {
	return this.setScale$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:616] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:616] null access");
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
			throw new Error("[mvq.jsx:617] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:617] null access");
		}
		return v;
	}(v[1])));
};

/**
 * @param {!number} rad
 * @return {M22}
 */
M22.prototype.setRotate$N = function (rad) {
	/** @type {!number} */
	var c;
	/** @type {!number} */
	var s;
	(c = Math.cos(rad), s = Math.sin(rad));
	this.m11 = c;
	this.m21 = s;
	this.m12 = - s;
	this.m22 = c;
	return this;
};

/**
 * @return {!string}
 */
M22.prototype.toString = function () {
	return "M22" + JSON.stringify([ this.m11, this.m21, this.m12, this.m22 ]);
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
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
};

M33$.prototype = new M33;

/**
 * @constructor
 * @param {M33} m
 */
function M33$LM33$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.set$LM33$(m);
};

M33$LM33$.prototype = new M33;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M33$AN(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.set$AN(m);
};

M33$AN.prototype = new M33;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M33$LFloat32Array$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.set$LFloat32Array$(m);
};

M33$LFloat32Array$.prototype = new M33;

/**
 * @constructor
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m13
 * @param {!number} m21
 * @param {!number} m22
 * @param {!number} m23
 * @param {!number} m31
 * @param {!number} m32
 * @param {!number} m33
 */
function M33$NNNNNNNNN(m11, m12, m13, m21, m22, m23, m31, m32, m33) {
	this.m11 = m11;
	this.m21 = m21;
	this.m31 = m31;
	this.m12 = m12;
	this.m22 = m22;
	this.m32 = m32;
	this.m13 = m13;
	this.m23 = m23;
	this.m33 = m33;
};

M33$NNNNNNNNN.prototype = new M33;

/**
 * @constructor
 * @param {V3} v0
 * @param {V3} v1
 * @param {V3} v2
 */
function M33$LV3$LV3$LV3$(v0, v1, v2) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.set$LV3$LV3$LV3$(v0, v1, v2);
};

M33$LV3$LV3$LV3$.prototype = new M33;

/**
 * @constructor
 * @param {!number} s
 */
function M33$N(s) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m11 = this.m22 = this.m33 = s;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	this;
};

M33$N.prototype = new M33;

/**
 * @constructor
 * @param {M22} m
 * @param {!number} m22
 */
function M33$LM22$N(m, m22) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.set$LM22$N(m, m22);
};

M33$LM22$N.prototype = new M33;

/**
 * @constructor
 * @param {M44} m
 */
function M33$LM44$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.set$LM44$(m);
};

M33$LM44$.prototype = new M33;

/**
 * @return {Array.<undefined|!number>}
 */
M33.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33 ];
};

/**
 * @return {M22}
 */
M33.prototype.M22$ = function () {
	return new M22$LM33$(this);
};

/**
 * @param {!number} m33
 * @return {M44}
 */
M33.prototype.M44$N = function (m33) {
	return new M44$LM33$N(this, m33);
};

/**
 * @param {M22} m
 * @param {!number} m22
 * @return {M33}
 */
M33.prototype.set$LM22$N = function (m, m22) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = 0;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	return this;
};

/**
 * @param {M44} m
 * @return {M33}
 */
M33.prototype.set$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
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
	this.m11 = this.m22 = this.m33 = 0;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};

/**
 * @return {M33}
 */
M33.prototype.setIdentity$ = function () {
	this.m11 = this.m22 = this.m33 = 1;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};

/**
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m13
 * @param {!number} m21
 * @param {!number} m22
 * @param {!number} m23
 * @param {!number} m31
 * @param {!number} m32
 * @param {!number} m33
 * @return {M33}
 */
M33.prototype.set$NNNNNNNNN = function (m11, m12, m13, m21, m22, m23, m31, m32, m33) {
	this.m11 = m11;
	this.m21 = m21;
	this.m31 = m31;
	this.m12 = m12;
	this.m22 = m22;
	this.m32 = m32;
	this.m13 = m13;
	this.m23 = m23;
	this.m33 = m33;
	return this;
};

/**
 * @param {V3} v0
 * @param {V3} v1
 * @param {V3} v2
 * @return {M33}
 */
M33.prototype.set$LV3$LV3$LV3$ = function (v0, v1, v2) {
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m31 = v0.z;
	this.m12 = v1.x;
	this.m22 = v1.y;
	this.m32 = v1.z;
	this.m13 = v2.x;
	this.m23 = v2.y;
	this.m33 = v2.z;
	return this;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.set$LM33$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @return {M33}
 */
M33.prototype.set$AN = function (m) {
	this.m11 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:702] null access");
		}
		return v;
	}(m[0]));
	this.m21 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:702] null access");
		}
		return v;
	}(m[1]));
	this.m31 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:702] null access");
		}
		return v;
	}(m[2]));
	this.m12 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:703] null access");
		}
		return v;
	}(m[3]));
	this.m22 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:703] null access");
		}
		return v;
	}(m[4]));
	this.m32 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:703] null access");
		}
		return v;
	}(m[5]));
	this.m13 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:704] null access");
		}
		return v;
	}(m[6]));
	this.m23 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:704] null access");
		}
		return v;
	}(m[7]));
	this.m33 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:704] null access");
		}
		return v;
	}(m[8]));
	return this;
};

/**
 * @param {Float32Array} m
 * @return {M33}
 */
M33.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:708] null access");
		}
		return v;
	}(m[0]));
	this.m21 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:708] null access");
		}
		return v;
	}(m[1]));
	this.m31 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:708] null access");
		}
		return v;
	}(m[2]));
	this.m12 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:709] null access");
		}
		return v;
	}(m[3]));
	this.m22 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:709] null access");
		}
		return v;
	}(m[4]));
	this.m32 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:709] null access");
		}
		return v;
	}(m[5]));
	this.m13 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:710] null access");
		}
		return v;
	}(m[6]));
	this.m23 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:710] null access");
		}
		return v;
	}(m[7]));
	this.m33 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:710] null access");
		}
		return v;
	}(m[8]));
	return this;
};

/**
 * @param {!number} s
 * @return {M33}
 */
M33.prototype.set$N = function (s) {
	this.m11 = this.m22 = this.m33 = s;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};

/**
 * @param {M33} m
 * @return {!boolean}
 */
M33.prototype.equals$LM33$ = function (m) {
	var $math_abs_t;
	return ((($math_abs_t = this.m11 - m.m11) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m21 - m.m21) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m31 - m.m31) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m12 - m.m12) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m22 - m.m22) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m32 - m.m32) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m13 - m.m13) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m23 - m.m23) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m33 - m.m33) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : true);
};

/**
 * @param {M33} m
 * @param {!number} eps
 * @return {!boolean}
 */
M33.prototype.equals$LM33$N = function (m, eps) {
	var $math_abs_t;
	return ((($math_abs_t = this.m11 - m.m11) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m21 - m.m21) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m31 - m.m31) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m12 - m.m12) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m22 - m.m22) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m32 - m.m32) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m13 - m.m13) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m23 - m.m23) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m33 - m.m33) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : true);
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.add$LM33$ = function (m) {
	this.m11 += m.m11;
	this.m21 += m.m21;
	this.m31 += m.m31;
	this.m12 += m.m12;
	this.m22 += m.m22;
	this.m32 += m.m32;
	this.m13 += m.m13;
	this.m23 += m.m23;
	this.m33 += m.m33;
	return this;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.sub$LM33$ = function (m) {
	this.m11 -= m.m11;
	this.m21 -= m.m21;
	this.m31 -= m.m31;
	this.m12 -= m.m12;
	this.m22 -= m.m22;
	this.m32 -= m.m32;
	this.m13 -= m.m13;
	this.m23 -= m.m23;
	this.m33 -= m.m33;
	return this;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.mul$LM33$ = function (m) {
	return this.mul$LM33$LM33$(new M33$LM33$(this), m);
};

/**
 * @param {M33} m0
 * @param {M33} m1
 * @return {M33}
 */
M33.prototype.mul$LM33$LM33$ = function (m0, m1) {
	/** @type {!number} */
	var m11$0;
	/** @type {!number} */
	var m21$0;
	/** @type {!number} */
	var m31$0;
	/** @type {!number} */
	var m11$1;
	/** @type {!number} */
	var m12$0;
	/** @type {!number} */
	var m13$0;
	/** @type {!number} */
	var m21$1;
	/** @type {!number} */
	var m12$1;
	/** @type {!number} */
	var m22$0;
	/** @type {!number} */
	var m22$1;
	/** @type {!number} */
	var m23$0;
	/** @type {!number} */
	var m32$0;
	/** @type {!number} */
	var m31$1;
	/** @type {!number} */
	var m32$1;
	/** @type {!number} */
	var m33$0;
	/** @type {!number} */
	var m13$1;
	/** @type {!number} */
	var m23$1;
	/** @type {!number} */
	var m33$1;
	this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21) + (m13$0 = m0.m13) * (m31$0 = m1.m31);
	this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0 + (m23$0 = m0.m23) * m31$0;
	this.m31 = (m31$1 = m0.m31) * m11$0 + (m32$1 = m0.m32) * m21$0 + (m33$0 = m0.m33) * m31$0;
	this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22) + m13$0 * (m32$0 = m1.m32);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0;
	this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0;
	this.m13 = m11$1 * (m13$1 = m1.m13) + m12$0 * (m23$1 = m1.m23) + m13$0 * (m33$1 = m1.m33);
	this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1;
	this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1;
	return this;
};

/**
 * @return {M33}
 */
M33.prototype.transpose$ = function () {
	/** @type {!number} */
	var m21;
	/** @type {!number} */
	var m31;
	/** @type {!number} */
	var m32;
	(m21 = this.m21, m31 = this.m31, m32 = this.m32);
	this.m21 = this.m12;
	this.m31 = this.m13;
	this.m32 = this.m23;
	this.m12 = m21;
	this.m13 = m31;
	this.m23 = m32;
	return this;
};

/**
 * @param {M33} m
 * @return {M33}
 */
M33.prototype.transpose$LM33$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m12;
	this.m31 = m.m13;
	this.m12 = m.m21;
	this.m22 = m.m22;
	this.m32 = m.m23;
	this.m13 = m.m31;
	this.m23 = m.m32;
	this.m33 = m.m33;
	return this;
};

/**
 * @return {!number}
 */
M33.prototype.det$ = function () {
	/** @type {!number} */
	var m11;
	/** @type {!number} */
	var m12;
	/** @type {!number} */
	var m13;
	/** @type {!number} */
	var m21;
	/** @type {!number} */
	var m22;
	/** @type {!number} */
	var m23;
	/** @type {!number} */
	var m31;
	/** @type {!number} */
	var m32;
	/** @type {!number} */
	var m33;
	(m11 = this.m11, m12 = this.m12, m13 = this.m13);
	(m21 = this.m21, m22 = this.m22, m23 = this.m23);
	(m31 = this.m31, m32 = this.m32, m33 = this.m33);
	return m11 * (m22 * m33 - m23 * m32) + m12 * (m23 * m31 - m21 * m33) + m13 * (m21 * m32 - m22 * m31);
};

/**
 * @return {M33}
 */
M33.prototype.inverse$ = function () {
	/** @type {!number} */
	var d;
	/** @type {!number} */
	var invDet;
	/** @type {!number} */
	var m11;
	/** @type {!number} */
	var m21;
	/** @type {!number} */
	var m31;
	/** @type {!number} */
	var m12;
	/** @type {!number} */
	var m22;
	/** @type {!number} */
	var m32;
	/** @type {!number} */
	var m13;
	/** @type {!number} */
	var m23;
	/** @type {!number} */
	var m33;
	/** @type {!number} */
	var m11$0;
	/** @type {!number} */
	var m12$0;
	/** @type {!number} */
	var m13$0;
	/** @type {!number} */
	var m21$0;
	/** @type {!number} */
	var m22$0;
	/** @type {!number} */
	var m23$0;
	/** @type {!number} */
	var m31$0;
	/** @type {!number} */
	var m32$0;
	/** @type {!number} */
	var m33$0;
	(m11$0 = this.m11, m12$0 = this.m12, m13$0 = this.m13);
	(m21$0 = this.m21, m22$0 = this.m22, m23$0 = this.m23);
	(m31$0 = this.m31, m32$0 = this.m32, m33$0 = this.m33);
	d = m11$0 * (m22$0 * m33$0 - m23$0 * m32$0) + m12$0 * (m23$0 * m31$0 - m21$0 * m33$0) + m13$0 * (m21$0 * m32$0 - m22$0 * m31$0);
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	(m11 = this.m11, m21 = this.m21, m31 = this.m31);
	(m12 = this.m12, m22 = this.m22, m32 = this.m32);
	(m13 = this.m13, m23 = this.m23, m33 = this.m33);
	this.m11 = invDet * (m22 * m33 - m23 * m32);
	this.m21 = invDet * (m23 * m31 - m21 * m33);
	this.m31 = invDet * (m21 * m32 - m22 * m31);
	this.m12 = invDet * (m13 * m32 - m12 * m33);
	this.m22 = invDet * (m11 * m33 - m13 * m31);
	this.m32 = invDet * (m12 * m31 - m11 * m32);
	this.m13 = invDet * (m12 * m23 - m13 * m22);
	this.m23 = invDet * (m13 * m21 - m11 * m23);
	this.m33 = invDet * (m11 * m22 - m12 * m21);
	return this;
};

/**
 * @param {!number} s
 * @return {M33}
 */
M33.prototype.setScale$N = function (s) {
	this.m11 = this.m22 = this.m33 = s;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M33}
 */
M33.prototype.setScale$NNN = function (x, y, z) {
	this.m11 = x;
	this.m22 = y;
	this.m33 = z;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};

/**
 * @param {V3} v
 * @return {M33}
 */
M33.prototype.setScale$LV3$ = function (v) {
	return this.setScale$NNN(v.x, v.y, v.z);
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {M33}
 */
M33.prototype.setScale$AN = function (v) {
	return this.setScale$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:823] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:823] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:823] null access");
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
			throw new Error("[mvq.jsx:824] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:824] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:824] null access");
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
	/** @type {Array.<undefined|!number>} */
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
	a = [ this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33 ];
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	this.m11 = x * x * _c + c;
	this.m21 = y * x * _c + z * s;
	this.m31 = x * z * _c - y * s;
	this.m12 = x * y * _c - z * s;
	this.m22 = y * y * _c + c;
	this.m32 = y * z * _c + x * s;
	this.m13 = x * z * _c + y * s;
	this.m23 = y * z * _c - x * s;
	this.m33 = z * z * _c + c;
	return this;
};

/**
 * @param {!number} rad
 * @param {V3} a
 * @return {M33}
 */
M33.prototype.setRotate$NLV3$ = function (rad, a) {
	return this.setRotate$NNNN(rad, a.x, a.y, a.z);
};

/**
 * @param {!number} rad
 * @param {Array.<undefined|!number>} a
 * @return {M33}
 */
M33.prototype.setRotate$NAN = function (rad, a) {
	return this.setRotate$NNNN(rad, this.m11, this.m21, this.m31);
};

/**
 * @param {!number} rad
 * @param {Float32Array} a
 * @return {M33}
 */
M33.prototype.setRotate$NLFloat32Array$ = function (rad, a) {
	return this.setRotate$NNNN(rad, this.m11, this.m21, this.m31);
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
 * @return {!string}
 */
M33.prototype.toString = function () {
	return "M33" + JSON.stringify([ this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33 ]);
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
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
};

M44$.prototype = new M44;

/**
 * @constructor
 * @param {M44} m
 */
function M44$LM44$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	this.set$LM44$(m);
};

M44$LM44$.prototype = new M44;

/**
 * @constructor
 * @param {Array.<undefined|!number>} m
 */
function M44$AN(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	this.set$AN(m);
};

M44$AN.prototype = new M44;

/**
 * @constructor
 * @param {Float32Array} m
 */
function M44$LFloat32Array$(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	this.set$LFloat32Array$(m);
};

M44$LFloat32Array$.prototype = new M44;

/**
 * @constructor
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m13
 * @param {!number} m14
 * @param {!number} m21
 * @param {!number} m22
 * @param {!number} m23
 * @param {!number} m24
 * @param {!number} m31
 * @param {!number} m32
 * @param {!number} m33
 * @param {!number} m34
 * @param {!number} m41
 * @param {!number} m42
 * @param {!number} m43
 * @param {!number} m44
 */
function M44$NNNNNNNNNNNNNNNN(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
	this.m11 = m11;
	this.m21 = m21;
	this.m31 = m31;
	this.m41 = m41;
	this.m12 = m12;
	this.m22 = m22;
	this.m32 = m32;
	this.m42 = m42;
	this.m13 = m13;
	this.m23 = m23;
	this.m33 = m33;
	this.m43 = m43;
	this.m14 = m14;
	this.m24 = m24;
	this.m34 = m34;
	this.m44 = m44;
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
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	this.set$LV4$LV4$LV4$LV4$(v0, v1, v2, v3);
};

M44$LV4$LV4$LV4$LV4$.prototype = new M44;

/**
 * @constructor
 * @param {!number} s
 */
function M44$N(s) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	this.m11 = this.m22 = this.m33 = this.m44 = s;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	this;
};

M44$N.prototype = new M44;

/**
 * @constructor
 * @param {M22} m
 * @param {!number} m22
 * @param {!number} m33
 */
function M44$LM22$NN(m, m22, m33) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	this.set$LM22$NN(m, m22, m33);
};

M44$LM22$NN.prototype = new M44;

/**
 * @constructor
 * @param {M33} m
 * @param {!number} m33
 */
function M44$LM33$N(m, m33) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = 0;
	this.set$LM33$N(m, m33);
};

M44$LM33$N.prototype = new M44;

/**
 * @return {Array.<undefined|!number>}
 */
M44.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m31, this.m41, this.m12, this.m22, this.m32, this.m42, this.m13, this.m23, this.m33, this.m43, this.m14, this.m24, this.m34, this.m44 ];
};

/**
 * @return {M22}
 */
M44.prototype.M22$ = function () {
	return new M22$LM44$(this);
};

/**
 * @param {!number} m33
 * @return {M33}
 */
M44.prototype.M33$N = function (m33) {
	return new M33$LM44$(this);
};

/**
 * @param {M22} m
 * @param {!number} m33
 * @param {!number} m44
 * @return {M44}
 */
M44.prototype.set$LM22$NN = function (m, m33, m44) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = 0;
	this.m41 = 0;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = 0;
	this.m42 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = m33;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = m44;
	return this;
};

/**
 * @param {M33} m
 * @param {!number} m44
 * @return {M44}
 */
M44.prototype.set$LM33$N = function (m, m44) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m41 = 0;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m42 = 0;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = m44;
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
	this.m11 = this.m22 = this.m33 = this.m44 = 0;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	return this;
};

/**
 * @return {M44}
 */
M44.prototype.setIdentity$ = function () {
	this.m11 = this.m22 = this.m33 = this.m44 = 1;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	return this;
};

/**
 * @param {!number} m11
 * @param {!number} m12
 * @param {!number} m13
 * @param {!number} m14
 * @param {!number} m21
 * @param {!number} m22
 * @param {!number} m23
 * @param {!number} m24
 * @param {!number} m31
 * @param {!number} m32
 * @param {!number} m33
 * @param {!number} m34
 * @param {!number} m41
 * @param {!number} m42
 * @param {!number} m43
 * @param {!number} m44
 * @return {M44}
 */
M44.prototype.set$NNNNNNNNNNNNNNNN = function (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
	this.m11 = m11;
	this.m21 = m21;
	this.m31 = m31;
	this.m41 = m41;
	this.m12 = m12;
	this.m22 = m22;
	this.m32 = m32;
	this.m42 = m42;
	this.m13 = m13;
	this.m23 = m23;
	this.m33 = m33;
	this.m43 = m43;
	this.m14 = m14;
	this.m24 = m24;
	this.m34 = m34;
	this.m44 = m44;
	return this;
};

/**
 * @param {V4} v1
 * @param {V4} v2
 * @param {V4} v3
 * @param {V4} v4
 * @return {M44}
 */
M44.prototype.set$LV4$LV4$LV4$LV4$ = function (v1, v2, v3, v4) {
	this.m11 = v1.x;
	this.m21 = v1.y;
	this.m31 = v1.z;
	this.m41 = v1.w;
	this.m12 = v2.x;
	this.m22 = v2.y;
	this.m32 = v2.z;
	this.m42 = v2.w;
	this.m13 = v3.x;
	this.m23 = v3.y;
	this.m33 = v3.z;
	this.m43 = v3.w;
	this.m14 = v4.x;
	this.m24 = v4.y;
	this.m34 = v4.z;
	this.m44 = v4.w;
	return this;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.set$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m41 = m.m41;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m42 = m.m42;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	this.m43 = m.m43;
	this.m14 = m.m14;
	this.m24 = m.m24;
	this.m34 = m.m34;
	this.m44 = m.m44;
	return this;
};

/**
 * @param {Array.<undefined|!number>} m
 * @return {M44}
 */
M44.prototype.set$AN = function (m) {
	this.m11 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:943] null access");
		}
		return v;
	}(m[0]));
	this.m21 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:943] null access");
		}
		return v;
	}(m[1]));
	this.m31 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:943] null access");
		}
		return v;
	}(m[2]));
	this.m41 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:943] null access");
		}
		return v;
	}(m[3]));
	this.m12 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:944] null access");
		}
		return v;
	}(m[4]));
	this.m22 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:944] null access");
		}
		return v;
	}(m[5]));
	this.m32 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:944] null access");
		}
		return v;
	}(m[6]));
	this.m42 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:944] null access");
		}
		return v;
	}(m[7]));
	this.m13 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:945] null access");
		}
		return v;
	}(m[8]));
	this.m23 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:945] null access");
		}
		return v;
	}(m[9]));
	this.m33 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:945] null access");
		}
		return v;
	}(m[10]));
	this.m43 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:945] null access");
		}
		return v;
	}(m[11]));
	this.m14 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:946] null access");
		}
		return v;
	}(m[12]));
	this.m24 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:946] null access");
		}
		return v;
	}(m[13]));
	this.m34 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:946] null access");
		}
		return v;
	}(m[14]));
	this.m44 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:946] null access");
		}
		return v;
	}(m[15]));
	return this;
};

/**
 * @param {Float32Array} m
 * @return {M44}
 */
M44.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:950] null access");
		}
		return v;
	}(m[0]));
	this.m21 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:950] null access");
		}
		return v;
	}(m[1]));
	this.m31 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:950] null access");
		}
		return v;
	}(m[2]));
	this.m41 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:950] null access");
		}
		return v;
	}(m[3]));
	this.m12 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:951] null access");
		}
		return v;
	}(m[4]));
	this.m22 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:951] null access");
		}
		return v;
	}(m[5]));
	this.m32 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:951] null access");
		}
		return v;
	}(m[6]));
	this.m42 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:951] null access");
		}
		return v;
	}(m[7]));
	this.m13 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:952] null access");
		}
		return v;
	}(m[8]));
	this.m23 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:952] null access");
		}
		return v;
	}(m[9]));
	this.m33 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:952] null access");
		}
		return v;
	}(m[10]));
	this.m43 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:952] null access");
		}
		return v;
	}(m[11]));
	this.m14 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:953] null access");
		}
		return v;
	}(m[12]));
	this.m24 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:953] null access");
		}
		return v;
	}(m[13]));
	this.m34 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:953] null access");
		}
		return v;
	}(m[14]));
	this.m44 = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:953] null access");
		}
		return v;
	}(m[15]));
	return this;
};

/**
 * @param {!number} s
 * @return {M44}
 */
M44.prototype.set$N = function (s) {
	this.m11 = this.m22 = this.m33 = this.m44 = s;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	return this;
};

/**
 * @param {M44} m
 * @return {!boolean}
 */
M44.prototype.equals$LM44$ = function (m) {
	var $math_abs_t;
	return ((($math_abs_t = this.m11 - m.m11) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m21 - m.m21) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m31 - m.m31) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m41 - m.m41) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m12 - m.m12) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m22 - m.m22) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m32 - m.m32) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m42 - m.m42) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m13 - m.m13) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m23 - m.m23) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m33 - m.m33) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m43 - m.m43) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m14 - m.m14) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m24 - m.m24) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m34 - m.m34) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.m44 - m.m44) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : true);
};

/**
 * @param {M44} m
 * @param {!number} eps
 * @return {!boolean}
 */
M44.prototype.equals$LM44$N = function (m, eps) {
	var $math_abs_t;
	return ((($math_abs_t = this.m11 - m.m11) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m21 - m.m21) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m31 - m.m31) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m41 - m.m41) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m12 - m.m12) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m22 - m.m22) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m32 - m.m32) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m42 - m.m42) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m13 - m.m13) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m23 - m.m23) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m33 - m.m33) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m43 - m.m43) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m14 - m.m14) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m24 - m.m24) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m34 - m.m34) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.m44 - m.m44) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : true);
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.add$LM44$ = function (m) {
	this.m11 += m.m11;
	this.m21 += m.m21;
	this.m31 += m.m31;
	this.m41 += m.m41;
	this.m12 += m.m12;
	this.m22 += m.m22;
	this.m32 += m.m32;
	this.m42 += m.m42;
	this.m13 += m.m13;
	this.m23 += m.m23;
	this.m33 += m.m33;
	this.m43 += m.m43;
	this.m14 += m.m14;
	this.m24 += m.m24;
	this.m34 += m.m34;
	this.m44 += m.m44;
	return this;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.sub$LM44$ = function (m) {
	this.m11 -= m.m11;
	this.m21 -= m.m21;
	this.m31 -= m.m31;
	this.m41 -= m.m41;
	this.m12 -= m.m12;
	this.m22 -= m.m22;
	this.m32 -= m.m32;
	this.m42 -= m.m42;
	this.m13 -= m.m13;
	this.m23 -= m.m23;
	this.m33 -= m.m33;
	this.m43 -= m.m43;
	this.m14 -= m.m14;
	this.m24 -= m.m24;
	this.m34 -= m.m34;
	this.m44 -= m.m44;
	return this;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.mul$LM44$ = function (m) {
	return this.mul$LM44$LM44$(new M44$LM44$(this), m);
};

/**
 * @param {M44} m0
 * @param {M44} m1
 * @return {M44}
 */
M44.prototype.mul$LM44$LM44$ = function (m0, m1) {
	/** @type {!number} */
	var m11$0;
	/** @type {!number} */
	var m21$0;
	/** @type {!number} */
	var m31$0;
	/** @type {!number} */
	var m41$0;
	/** @type {!number} */
	var m11$1;
	/** @type {!number} */
	var m12$0;
	/** @type {!number} */
	var m13$0;
	/** @type {!number} */
	var m14$0;
	/** @type {!number} */
	var m21$1;
	/** @type {!number} */
	var m12$1;
	/** @type {!number} */
	var m22$0;
	/** @type {!number} */
	var m22$1;
	/** @type {!number} */
	var m23$0;
	/** @type {!number} */
	var m32$0;
	/** @type {!number} */
	var m24$0;
	/** @type {!number} */
	var m42$0;
	/** @type {!number} */
	var m31$1;
	/** @type {!number} */
	var m32$1;
	/** @type {!number} */
	var m33$0;
	/** @type {!number} */
	var m34$0;
	/** @type {!number} */
	var m41$1;
	/** @type {!number} */
	var m42$1;
	/** @type {!number} */
	var m43$0;
	/** @type {!number} */
	var m44$0;
	/** @type {!number} */
	var m13$1;
	/** @type {!number} */
	var m23$1;
	/** @type {!number} */
	var m33$1;
	/** @type {!number} */
	var m43$1;
	/** @type {!number} */
	var m14$1;
	/** @type {!number} */
	var m24$1;
	/** @type {!number} */
	var m34$1;
	/** @type {!number} */
	var m44$1;
	this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21) + (m13$0 = m0.m13) * (m31$0 = m1.m31) + (m14$0 = m0.m14) * (m41$0 = m1.m41);
	this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0 + (m23$0 = m0.m23) * m31$0 + (m24$0 = m0.m24) * m41$0;
	this.m31 = (m31$1 = m0.m31) * m11$0 + (m32$1 = m0.m32) * m21$0 + (m33$0 = m0.m33) * m31$0 + (m34$0 = m0.m34) * m41$0;
	this.m41 = (m41$1 = m0.m41) * m11$0 + (m42$1 = m0.m42) * m21$0 + (m43$0 = m0.m43) * m31$0 + (m44$0 = m0.m44) * m41$0;
	this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22) + m13$0 * (m32$0 = m1.m32) + m14$0 * (m42$0 = m1.m42);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
	this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
	this.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
	this.m13 = m11$1 * (m13$1 = m1.m13) + m12$0 * (m23$1 = m1.m23) + m13$0 * (m33$1 = m1.m33) + m14$0 * (m43$1 = m1.m43);
	this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
	this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
	this.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
	this.m14 = m11$1 * (m14$1 = m1.m14) + m12$0 * (m24$1 = m1.m24) + m13$0 * (m34$1 = m1.m34) + m14$0 * (m44$1 = m1.m44);
	this.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
	this.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
	this.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
	return this;
};

/**
 * @return {M44}
 */
M44.prototype.transpose$ = function () {
	/** @type {!number} */
	var m21;
	/** @type {!number} */
	var m31;
	/** @type {!number} */
	var m41;
	/** @type {!number} */
	var m32;
	/** @type {!number} */
	var m42;
	/** @type {!number} */
	var m43;
	(m21 = this.m21, m31 = this.m31, m41 = this.m41, m32 = this.m32, m42 = this.m42, m43 = this.m43);
	this.m21 = this.m12;
	this.m31 = this.m13;
	this.m41 = this.m14;
	this.m12 = m21;
	this.m32 = this.m23;
	this.m42 = this.m24;
	this.m13 = m31;
	this.m23 = m32;
	this.m43 = this.m34;
	this.m14 = m41;
	this.m24 = m42;
	this.m34 = m43;
	return this;
};

/**
 * @param {M44} m
 * @return {M44}
 */
M44.prototype.transpose$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m12;
	this.m31 = m.m13;
	this.m41 = m.m14;
	this.m12 = m.m21;
	this.m22 = m.m22;
	this.m32 = m.m23;
	this.m42 = m.m24;
	this.m13 = m.m31;
	this.m23 = m.m32;
	this.m33 = m.m33;
	this.m43 = m.m34;
	this.m14 = m.m41;
	this.m24 = m.m42;
	this.m34 = m.m43;
	this.m44 = m.m44;
	return this;
};

/**
 * @return {!number}
 */
M44.prototype.det$ = function () {
	/** @type {!number} */
	var m11;
	/** @type {!number} */
	var m21;
	/** @type {!number} */
	var m31;
	/** @type {!number} */
	var m41;
	/** @type {!number} */
	var m12;
	/** @type {!number} */
	var m22;
	/** @type {!number} */
	var m32;
	/** @type {!number} */
	var m42;
	/** @type {!number} */
	var m13;
	/** @type {!number} */
	var m23;
	/** @type {!number} */
	var m33;
	/** @type {!number} */
	var m43;
	/** @type {!number} */
	var m14;
	/** @type {!number} */
	var m24;
	/** @type {!number} */
	var m34;
	/** @type {!number} */
	var m44;
	(m11 = this.m11, m21 = this.m21, m31 = this.m31, m41 = this.m41);
	(m12 = this.m12, m22 = this.m22, m32 = this.m32, m42 = this.m42);
	(m13 = this.m13, m23 = this.m23, m33 = this.m33, m43 = this.m43);
	(m14 = this.m14, m24 = this.m24, m34 = this.m34, m44 = this.m44);
	return m14 * m23 * m32 * m41 - m13 * m24 * m32 * m41 - m14 * m22 * m33 * m41 + m12 * m24 * m33 * m41 + m13 * m22 * m34 * m41 - m12 * m23 * m34 * m41 - m14 * m23 * m31 * m42 + m13 * m24 * m31 * m42 + m14 * m21 * m33 * m42 - m11 * m24 * m33 * m42 - m13 * m21 * m34 * m42 + m11 * m23 * m34 * m42 + m14 * m22 * m31 * m43 - m12 * m24 * m31 * m43 - m14 * m21 * m32 * m43 + m11 * m24 * m32 * m43 + m12 * m21 * m34 * m43 - m11 * m22 * m34 * m43 - m13 * m22 * m31 * m44 + m12 * m23 * m31 * m44 + m13 * m21 * m32 * m44 - m11 * m23 * m32 * m44 - m12 * m21 * m33 * m44 + m11 * m22 * m33 * m44;
};

/**
 * @return {M44}
 */
M44.prototype.inverse$ = function () {
	/** @type {!number} */
	var m11;
	/** @type {!number} */
	var m21;
	/** @type {!number} */
	var m31;
	/** @type {!number} */
	var m41;
	/** @type {!number} */
	var m12;
	/** @type {!number} */
	var m22;
	/** @type {!number} */
	var m32;
	/** @type {!number} */
	var m42;
	/** @type {!number} */
	var m13;
	/** @type {!number} */
	var m23;
	/** @type {!number} */
	var m33;
	/** @type {!number} */
	var m43;
	/** @type {!number} */
	var m14;
	/** @type {!number} */
	var m24;
	/** @type {!number} */
	var m34;
	/** @type {!number} */
	var m44;
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
	(m11 = this.m11, m21 = this.m21, m31 = this.m31, m41 = this.m41, m12 = this.m12, m22 = this.m22, m32 = this.m32, m42 = this.m42, m13 = this.m13, m23 = this.m23, m33 = this.m33, m43 = this.m43, m14 = this.m14, m24 = this.m24, m34 = this.m34, m44 = this.m44);
	(b00 = m11 * m22 - m21 * m12, b01 = m11 * m32 - m31 * m12, b02 = m11 * m42 - m41 * m12, b03 = m21 * m32 - m31 * m22, b04 = m21 * m42 - m41 * m22, b05 = m31 * m42 - m41 * m32, b06 = m13 * m24 - m23 * m14, b07 = m13 * m34 - m33 * m14, b08 = m13 * m44 - m43 * m14, b09 = m23 * m34 - m33 * m24, b10 = m23 * m44 - m43 * m24, b11 = m33 * m44 - m43 * m34);
	d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	this.m11 = (m22 * b11 - m32 * b10 + m42 * b09) * invDet;
	this.m21 = (- m21 * b11 + m31 * b10 - m41 * b09) * invDet;
	this.m31 = (m24 * b05 - m34 * b04 + m44 * b03) * invDet;
	this.m41 = (- m23 * b05 + m33 * b04 - m43 * b03) * invDet;
	this.m12 = (- m12 * b11 + m32 * b08 - m42 * b07) * invDet;
	this.m22 = (m11 * b11 - m31 * b08 + m41 * b07) * invDet;
	this.m32 = (- m14 * b05 + m34 * b02 - m44 * b01) * invDet;
	this.m42 = (m13 * b05 - m33 * b02 + m43 * b01) * invDet;
	this.m13 = (m12 * b10 - m22 * b08 + m42 * b06) * invDet;
	this.m23 = (- m11 * b10 + m21 * b08 - m41 * b06) * invDet;
	this.m33 = (m14 * b04 - m24 * b02 + m44 * b00) * invDet;
	this.m43 = (- m13 * b04 + m23 * b02 - m43 * b00) * invDet;
	this.m14 = (- m12 * b09 + m22 * b07 - m32 * b06) * invDet;
	this.m24 = (m11 * b09 - m21 * b07 + m31 * b06) * invDet;
	this.m34 = (- m14 * b03 + m24 * b01 - m34 * b00) * invDet;
	this.m44 = (m13 * b03 - m23 * b01 + m33 * b00) * invDet;
	return this;
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 * @return {M44}
 */
M44.prototype.setTranslate$NNN = function (x, y, z) {
	this.m11 = this.m22 = this.m33 = this.m44 = 1;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	this;
	this.m14 = x;
	this.m24 = y;
	this.m34 = z;
	return this;
};

/**
 * @param {V3} v
 * @return {M44}
 */
M44.prototype.setTranslate$LV3$ = function (v) {
	return this.setTranslate$NNN(v.x, v.y, v.z);
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {M44}
 */
M44.prototype.setTranslate$AN = function (v) {
	return this.setTranslate$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1128] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1128] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1128] null access");
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
			throw new Error("[mvq.jsx:1129] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1129] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1129] null access");
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
	this.m11 = this.m22 = this.m33 = this.m44 = 0;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	this;
	this.m11 = x;
	this.m22 = y;
	this.m33 = z;
	this.m44 = 1;
	return this;
};

/**
 * @param {V3} v
 * @return {M44}
 */
M44.prototype.setScale$LV3$ = function (v) {
	return this.setScale$NNN(v.x, v.y, v.z);
};

/**
 * @param {Array.<undefined|!number>} v
 * @return {M44}
 */
M44.prototype.setScale$AN = function (v) {
	return this.setScale$NNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1141] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1141] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1141] null access");
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
			throw new Error("[mvq.jsx:1142] null access");
		}
		return v;
	}(v[0])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1142] null access");
		}
		return v;
	}(v[1])), (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1142] null access");
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
	/** @type {Array.<undefined|!number>} */
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
	a = [ this.m11, this.m21, this.m31, this.m41, this.m12, this.m22, this.m32, this.m42, this.m13, this.m23, this.m33, this.m43, this.m14, this.m24, this.m34, this.m44 ];
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	this.m11 = x * x * _c + c;
	this.m21 = y * x * _c + z * s;
	this.m31 = x * z * _c - y * s;
	this.m12 = x * y * _c - z * s;
	this.m22 = y * y * _c + c;
	this.m32 = y * z * _c + x * s;
	this.m13 = x * z * _c + y * s;
	this.m23 = y * z * _c - x * s;
	this.m33 = z * z * _c + c;
	this.m41 = this.m42 = this.m43 = this.m14 = this.m24 = this.m34 = 0;
	this.m44 = 1;
	return this;
};

/**
 * @param {!number} rad
 * @param {V3} a
 * @return {M44}
 */
M44.prototype.setRotate$NLV3$ = function (rad, a) {
	return this.setRotate$NNNN(rad, a.x, a.y, a.z);
};

/**
 * @param {!number} rad
 * @param {Array.<undefined|!number>} a
 * @return {M44}
 */
M44.prototype.setRotate$NAN = function (rad, a) {
	return this.setRotate$NNNN(rad, this.m11, this.m21, this.m31);
};

/**
 * @param {!number} rad
 * @param {Float32Array} a
 * @return {M44}
 */
M44.prototype.setRotate$NLFloat32Array$ = function (rad, a) {
	return this.setRotate$NNNN(rad, this.m11, this.m21, this.m31);
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
	/** @type {Array.<undefined|!number>} */
	var a;
	/** @type {!number} */
	var rl;
	/** @type {!number} */
	var tb;
	/** @type {!number} */
	var fn;
	a = [ this.m11, this.m21, this.m31, this.m41, this.m12, this.m22, this.m32, this.m42, this.m13, this.m23, this.m33, this.m43, this.m14, this.m24, this.m34, this.m44 ];
	(rl = r - l, tb = t - b, fn = f - n);
	this.m11 = 2 * n / rl;
	this.m22 = 2 * n / tb;
	this.m13 = (r + l) / rl;
	this.m23 = (t + b) / tb;
	this.m33 = - (f + n) / fn;
	this.m43 = -1;
	this.m34 = -2 * f * n / fn;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m14 = this.m24 = this.m44 = 0;
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
	/** @type {Array.<undefined|!number>} */
	var a;
	/** @type {!number} */
	var rl;
	/** @type {!number} */
	var tb;
	/** @type {!number} */
	var fn;
	a = [ this.m11, this.m21, this.m31, this.m41, this.m12, this.m22, this.m32, this.m42, this.m13, this.m23, this.m33, this.m43, this.m14, this.m24, this.m34, this.m44 ];
	(rl = r - l, tb = t - b, fn = f - n);
	this.m11 = 2 / rl;
	this.m22 = 2 / tb;
	this.m33 = -2 / fn;
	this.m14 = - (r + l) / rl;
	this.m24 = - (t + b) / tb;
	this.m34 = - (f + n) / fn;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m43 = 0;
	this.m44 = 1;
	return this;
};

/**
 * @return {!string}
 */
M44.prototype.toString = function () {
	return "M44" + JSON.stringify([ this.m11, this.m21, this.m31, this.m41, this.m12, this.m22, this.m32, this.m42, this.m13, this.m23, this.m33, this.m43, this.m14, this.m24, this.m34, this.m44 ]);
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
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

Quat$.prototype = new Quat;

/**
 * @constructor
 * @param {Quat} q
 */
function Quat$LQuat$(q) {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$LQuat$(q);
};

Quat$LQuat$.prototype = new Quat;

/**
 * @constructor
 * @param {Array.<undefined|!number>} q
 */
function Quat$AN(q) {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$AN(q);
};

Quat$AN.prototype = new Quat;

/**
 * @constructor
 * @param {Float32Array} q
 */
function Quat$LFloat32Array$(q) {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
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
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.set$NNNN(w, x, y, z);
};

Quat$NNNN.prototype = new Quat;

/**
 * @return {Array.<undefined|!number>}
 */
Quat.prototype.array$ = function () {
	return [ this.w, this.x, this.y, this.z ];
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
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};

/**
 * @param {Quat} q
 * @return {Quat}
 */
Quat.prototype.set$LQuat$ = function (q) {
	this.w = q.w;
	this.x = q.x;
	this.y = q.y;
	this.z = q.z;
	return this;
};

/**
 * @param {Array.<undefined|!number>} q
 * @return {Quat}
 */
Quat.prototype.set$AN = function (q) {
	this.w = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1236] null access");
		}
		return v;
	}(q[0]));
	this.x = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1236] null access");
		}
		return v;
	}(q[1]));
	this.y = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1236] null access");
		}
		return v;
	}(q[2]));
	this.z = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1236] null access");
		}
		return v;
	}(q[3]));
	return this;
};

/**
 * @param {Float32Array} q
 * @return {Quat}
 */
Quat.prototype.set$LFloat32Array$ = function (q) {
	this.w = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1240] null access");
		}
		return v;
	}(q[0]));
	this.x = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1240] null access");
		}
		return v;
	}(q[1]));
	this.y = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1240] null access");
		}
		return v;
	}(q[2]));
	this.z = (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[mvq.jsx:1240] null access");
		}
		return v;
	}(q[3]));
	return this;
};

/**
 * @param {!number} w
 * @param {V3} v
 * @return {Quat}
 */
Quat.prototype.set$NLV3$ = function (w, v) {
	this.w = w;
	this.x = v.x;
	this.y = v.y;
	this.z = v.z;
	return this;
};

/**
 * @param {Quat} q
 * @return {!boolean}
 */
Quat.prototype.equals$LQuat$ = function (q) {
	var $math_abs_t;
	return ((($math_abs_t = this.w - q.w) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.x - q.x) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.y - q.y) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : (($math_abs_t = this.z - q.z) >= 0 ? $math_abs_t : -$math_abs_t) >= 0.000001 ? false : true);
};

/**
 * @param {Quat} q
 * @param {!number} eps
 * @return {!boolean}
 */
Quat.prototype.equals$LQuat$N = function (q, eps) {
	var $math_abs_t;
	return ((($math_abs_t = this.w - q.w) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.x - q.x) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.y - q.y) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : (($math_abs_t = this.z - q.z) >= 0 ? $math_abs_t : -$math_abs_t) >= eps ? false : true);
};

/**
 * @param {Quat} q
 * @return {!number}
 */
Quat.prototype.dot$LQuat$ = function (q) {
	return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
};

/**
 * @return {Quat}
 */
Quat.prototype.inverse$ = function () {
	/** @type {!number} */
	var q0;
	/** @type {!number} */
	var q1;
	/** @type {!number} */
	var q2;
	/** @type {!number} */
	var q3;
	/** @type {!number} */
	var dot;
	/** @type {!number} */
	var invDot;
	(q0 = this.w, q1 = this.x, q2 = this.y, q3 = this.z);
	dot = q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3;
	if (dot === 0) {
		return null;
	}
	invDot = 1 / dot;
	this.w *= invDot;
	this.x *= - invDot;
	this.y *= - invDot;
	this.z *= - invDot;
	return this;
};

/**
 * @return {Quat}
 */
Quat.prototype.conjugate$ = function () {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
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
	/** @type {!number} */
	var w;
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	(w = this.w, x = this.x, y = this.y, z = this.z);
	return w * w + x * x + y * y + z * z;
};

/**
 * @return {Quat}
 */
Quat.prototype.normalize$ = function () {
	/** @type {!number} */
	var w;
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	/** @type {!number} */
	var l;
	/** @type {!number} */
	var il;
	(w = this.w, x = this.x, y = this.y, z = this.z);
	l = Math.sqrt(x * x + y * y + z * z + w * w);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	this.w *= il;
	this.x *= il;
	this.y *= il;
	this.z *= il;
	return this;
};

/**
 * @param {Quat} q
 * @return {Quat}
 */
Quat.prototype.add$LQuat$ = function (q) {
	this.w += q.w;
	this.x += q.x;
	this.y += q.y;
	this.z += q.z;
	return this;
};

/**
 * @param {Quat} q
 * @return {Quat}
 */
Quat.prototype.sub$LQuat$ = function (q) {
	this.w -= q.w;
	this.x -= q.x;
	this.y -= q.y;
	this.z -= q.z;
	return this;
};

/**
 * @param {Quat} q
 * @return {Quat}
 */
Quat.prototype.mul$LQuat$ = function (q) {
	/** @type {!number} */
	var aw;
	/** @type {!number} */
	var ax;
	/** @type {!number} */
	var ay;
	/** @type {!number} */
	var az;
	/** @type {!number} */
	var bw;
	/** @type {!number} */
	var bx;
	/** @type {!number} */
	var by;
	/** @type {!number} */
	var bz;
	(aw = this.w, ax = this.x, ay = this.y, az = this.z);
	(bw = q.w, bx = q.x, by = q.y, bz = q.z);
	this.w = aw * bw - ax * bx - ay * by - az * bz;
	this.x = aw * bx + ax * bw + ay * bz - az * by;
	this.y = aw * by - ax * bz + ay * bw + az * bx;
	this.z = aw * bz + ax * by - ay * bx + az * bw;
	return this;
};

/**
 * @param {!number} s
 * @return {Quat}
 */
Quat.prototype.mul$N = function (s) {
	this.w *= s;
	this.x *= s;
	this.y *= s;
	this.z *= s;
	return this;
};

/**
 * @param {Quat} q0
 * @param {Quat} q1
 * @param {!number} slerp
 * @return {Quat}
 */
Quat.prototype.slerp$LQuat$LQuat$N = function (q0, q1, slerp) {
	/** @type {!number} */
	var aw;
	/** @type {!number} */
	var ax;
	/** @type {!number} */
	var ay;
	/** @type {!number} */
	var az;
	/** @type {!number} */
	var bw;
	/** @type {!number} */
	var bx;
	/** @type {!number} */
	var by;
	/** @type {!number} */
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
	(aw = q0.w, ax = q0.x, ay = q0.y, az = q0.z);
	(bw = q1.w, bx = q1.x, by = q1.y, bz = q1.z);
	cosHalfTheta = aw * bw + ax * bx + ay * by + az * bz;
	if ((cosHalfTheta >= 0 ? cosHalfTheta : - cosHalfTheta) >= 1.0) {
		return this;
	}
	halfTheta = Math.acos(cosHalfTheta);
	sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
	if ((sinHalfTheta >= 0 ? sinHalfTheta : - sinHalfTheta) < 0.001) {
		this.w = (aw + bw) / 2;
		this.x = (ax + bx) / 2;
		this.y = (ay + by) / 2;
		this.z = (az + bz) / 2;
		return this;
	}
	ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
	ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;
	this.w = aw * ratioA + bw * ratioB;
	this.x = ax * ratioA + bx * ratioB;
	this.y = ay * ratioA + by * ratioB;
	this.z = az * ratioA + bz * ratioB;
	return this;
};

/**
 * @return {!string}
 */
Quat.prototype.toString = function () {
	return "Quat" + JSON.stringify([ this.w, this.x, this.y, this.z ]);
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
};

var _Main$main$AS = _Main.main$AS;

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
	/** @type {_Part} */
	var this$0;
	/** @type {Array.<undefined|!number>} */
	var i$0;
	/** @type {_Part} */
	var this$1;
	/** @type {Array.<undefined|!number>} */
	var i$1;
	/** @type {_Part} */
	var this$2;
	/** @type {Array.<undefined|!number>} */
	var i$2;
	/** @type {_Part} */
	var this$3;
	/** @type {Array.<undefined|!number>} */
	var i$3;
	/** @type {_Part} */
	var this$4;
	/** @type {Array.<undefined|!number>} */
	var i$4;
	/** @type {_Part} */
	var this$5;
	/** @type {Array.<undefined|!number>} */
	var i$5;
	/** @type {_Part} */
	var this$6;
	/** @type {Array.<undefined|!number>} */
	var n$0;
	/** @type {_Part} */
	var this$7;
	/** @type {Array.<undefined|!number>} */
	var n$1;
	/** @type {_Part} */
	var this$8;
	/** @type {Array.<undefined|!number>} */
	var n$2;
	/** @type {_Part} */
	var this$9;
	/** @type {Array.<undefined|!number>} */
	var n$3;
	/** @type {_Part} */
	var this$10;
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
	this$12 = ({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0});
	v$1 = [ 0, 0, 1, 0.7, 0, 0, 0, 1, 0, -0.7, 0, 0, 0, -1, 0, 0, 0, -1 ];
	this$12.vbuf = _Part$createArrayBuffer$AN(v$1);
	this$12.numv = (v$1.length / 3 | 0);
	this$6 = this$12;
	n$0 = [ 0, 0, 1, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1 ];
	this$6.nbuf = _Part$createArrayBuffer$AN(n$0);
	this$0 = this$6;
	i$0 = [ 0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 5, 2, 1, 5, 3, 2, 5, 4, 3, 5, 1, 4 ];
	this$0.ibuf = _Part$createIndexBuffer$AI(i$0);
	this$0.numi = (i$0.length | 0);
	Kingyo.body = this$0;
	this$13 = ({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0});
	v$2 = [ 0, 0, 0, 0.5, -0.25, 0, 0.8, 0.25, 0 ];
	this$13.vbuf = _Part$createArrayBuffer$AN(v$2);
	this$13.numv = (v$2.length / 3 | 0);
	this$7 = this$13;
	n$1 = [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ];
	this$7.nbuf = _Part$createArrayBuffer$AN(n$1);
	this$1 = this$7;
	i$1 = [ 0, 1, 2 ];
	this$1.ibuf = _Part$createIndexBuffer$AI(i$1);
	this$1.numi = (i$1.length | 0);
	Kingyo.lfin = this$1;
	this$14 = ({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0});
	v$3 = [ 0, 0, 0, -0.8, 0.25, 0, -0.5, -0.25, 0 ];
	this$14.vbuf = _Part$createArrayBuffer$AN(v$3);
	this$14.numv = (v$3.length / 3 | 0);
	this$8 = this$14;
	n$2 = [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ];
	this$8.nbuf = _Part$createArrayBuffer$AN(n$2);
	this$2 = this$8;
	i$2 = [ 0, 1, 2 ];
	this$2.ibuf = _Part$createIndexBuffer$AI(i$2);
	this$2.numi = (i$2.length | 0);
	Kingyo.rfin = this$2;
	this$15 = ({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0});
	v$4 = [ 0, 0, 0, 0, -0.5, -1, 0, 0.5, -0.8 ];
	this$15.vbuf = _Part$createArrayBuffer$AN(v$4);
	this$15.numv = (v$4.length / 3 | 0);
	this$9 = this$15;
	n$3 = [ 1, 0, 0, 1, 0, 0, 1, 0, 0 ];
	this$9.nbuf = _Part$createArrayBuffer$AN(n$3);
	this$3 = this$9;
	i$3 = [ 0, 1, 2 ];
	this$3.ibuf = _Part$createIndexBuffer$AI(i$3);
	this$3.numi = (i$3.length | 0);
	Kingyo.bfin = this$3;
	this$16 = ({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0});
	v$5 = [ 0, 0, 0, 0.8, -0.5, -1, 0, 0.4, -0.8, -0.8, -0.5, -1 ];
	this$16.vbuf = _Part$createArrayBuffer$AN(v$5);
	this$16.numv = (v$5.length / 3 | 0);
	this$10 = this$16;
	n$4 = [ 0, 1, 1, 1, 1, 1, 0, 1, 0, -1, 1, 1 ];
	this$10.nbuf = _Part$createArrayBuffer$AN(n$4);
	this$4 = this$10;
	i$4 = [ 0, 1, 2, 0, 2, 3 ];
	this$4.ibuf = _Part$createIndexBuffer$AI(i$4);
	this$4.numi = (i$4.length | 0);
	Kingyo.tfin = this$4;
	Kingyo.ulocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.alocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.eyeProg = Util$getProgram$SS('keye.vs', 'keye.fs');
	Kingyo.eyeULocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.eyeProg);
	Kingyo.eyeALocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.eyeProg);
	(ex = 0.3, ey = 0.15, ez = 0.5);
	this$11 = ({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0});
	v$0 = [ - ex, ey, ez, 0, - ex, ey, ez, 1, - ex, ey, ez, 2, - ex, ey, ez, 3, ex, ey, ez, 4, ex, ey, ez, 5, ex, ey, ez, 6, ex, ey, ez, 7 ];
	this$11.vbuf = _Part$createArrayBuffer$AN(v$0);
	this$11.numv = (v$0.length / 3 | 0);
	this$5 = this$11;
	i$5 = [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7 ];
	this$5.ibuf = _Part$createIndexBuffer$AI(i$5);
	this$5.numi = (i$5.length | 0);
	Kingyo.eyes = this$5;
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
	gl.uniformMatrix4fv(ulocs.projectionMatrix, false, [ projMat.m11, projMat.m21, projMat.m31, projMat.m41, projMat.m12, projMat.m22, projMat.m32, projMat.m42, projMat.m13, projMat.m23, projMat.m33, projMat.m43, projMat.m14, projMat.m24, projMat.m34, projMat.m44 ]);
	gl.uniformMatrix4fv(ulocs.viewMatrix, false, [ viewMat.m11, viewMat.m21, viewMat.m31, viewMat.m41, viewMat.m12, viewMat.m22, viewMat.m32, viewMat.m42, viewMat.m13, viewMat.m23, viewMat.m33, viewMat.m43, viewMat.m14, viewMat.m24, viewMat.m34, viewMat.m44 ]);
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
	gl.uniformMatrix4fv(eulocs.projectionMatrix, false, [ projMat.m11, projMat.m21, projMat.m31, projMat.m41, projMat.m12, projMat.m22, projMat.m32, projMat.m42, projMat.m13, projMat.m23, projMat.m33, projMat.m43, projMat.m14, projMat.m24, projMat.m34, projMat.m44 ]);
	gl.uniformMatrix4fv(eulocs.viewMatrix, false, [ viewMat.m11, viewMat.m21, viewMat.m31, viewMat.m41, viewMat.m12, viewMat.m22, viewMat.m32, viewMat.m42, viewMat.m13, viewMat.m23, viewMat.m33, viewMat.m43, viewMat.m14, viewMat.m24, viewMat.m34, viewMat.m44 ]);
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
	/** @type {V3} */
	var _pos$0;
	h = [  ];
	for (i = 0; i < Kingyo.all.length; ++ i) {
		k = Kingyo.all[i];
		if (k._state !== 'swimming') {
			continue;
		}
		dx = (_pos$0 = k._pos).x - x;
		dy = _pos$0.y - y;
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
	/** @type {M44} */
	var this$1;
	/** @type {V3} */
	var this$2;
	this._vangle = Math.random() * 2 * 3.141592653589793;
	this._velo = Math.random() * 15 + 1;
	r = 8 * Math.random();
	x = r * Math.cos(this._vangle);
	y = r * Math.sin(this._vangle);
	this$0 = this._pos;
	z$0 = -2 - Math.random() * 3;
	this$0.x = x;
	this$0.y = y;
	this$0.z = z$0;
	this$0;
	this._anim = 0;
	this._state = 'swimming';
	this$1 = this._spinMat;
	this$1.m11 = this$1.m22 = this$1.m33 = this$1.m44 = 1;
	this$1.m21 = this$1.m31 = this$1.m41 = this$1.m12 = this$1.m32 = this$1.m42 = this$1.m13 = this$1.m23 = this$1.m24 = this$1.m14 = this$1.m24 = this$1.m34 = 0;
	this$1;
	this$2 = this._spinAxis;
	this$2.x = 0;
	this$2.y = 0;
	this$2.z = 0;
	this$2;
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
	/** @type {M44} */
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
	this._pos.z = 2;
	this._vz = 150 + Math.random() * 50;
	this._velo = 12;
	this$0 = this._spinMat;
	this$0.m11 = this$0.m22 = this$0.m33 = this$0.m44 = 1;
	this$0.m21 = this$0.m31 = this$0.m41 = this$0.m12 = this$0.m32 = this$0.m42 = this$0.m13 = this$0.m23 = this$0.m24 = this$0.m14 = this$0.m24 = this$0.m34 = 0;
	this$0;
	a = 6.283185307179586 * Math.random();
	this$1 = this._spinAxis;
	x$0 = Math.cos(a);
	y$0 = Math.sin(a);
	z$0 = Math.random() - 0.5;
	this$1.x = x$0;
	this$1.y = y$0;
	this$1.z = z$0;
	this$1;
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
	/** @type {M44} */
	var this$0;
	/** @type {M44} */
	var m$0;
	/** @type {V3} */
	var this$1;
	/** @type {!number} */
	var x$0;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var this$3;
	/** @type {!number} */
	var rad$0;
	/** @type {V3} */
	var a$0;
	/** @type {V3} */
	var _pos$0;
	/** @type {V3} */
	var _pos$1;
	/** @type {!number} */
	var _vz$0;
	switch (this._state) {
	default:
		break;
	case 'swimming':
		x = this._pos.x + Math.cos(this._vangle) * this._velo * dt;
		y = this._pos.y + Math.sin(this._vangle) * this._velo * dt;
		b = 10;
		if (x < - b) {
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
		(_pos$0 = this._pos).x = x;
		_pos$0.y = y;
		break;
	case 'flying':
		_vz$0 = this._vz -= 300 * dt;
		(_pos$1 = this._pos).z = _pos$1.z + _vz$0 * dt;
		this$0 = this._spinMat;
		this$3 = new M44$();
		rad$0 = dt * this._spinSpeed;
		a$0 = this._spinAxis;
		m$0 = this$3.setRotate$NNNN(rad$0, a$0.x, a$0.y, a$0.z);
		this$0.mul$LM44$LM44$(new M44$LM44$(this$0), m$0);
		if (this._pos.z >= 2) {
			break;
		}
		num_listed = 0;
		for (i = 0; i < Kingyo.all.length; ++ i) {
			if (Kingyo.all[i]._state === 'listed') {
				++ num_listed;
			}
		}
		this$1 = this._pos;
		x$0 = num_listed * 1.5 - 10 - 4.25;
		this$1.x = x$0;
		this$1.y = 13;
		this$1.z = 2;
		this$1;
		this._vangle = 1.5707963267948966;
		this$2 = this._spinMat;
		this$2.m11 = this$2.m22 = this$2.m33 = this$2.m44 = 1;
		this$2.m21 = this$2.m31 = this$2.m41 = this$2.m12 = this$2.m32 = this$2.m42 = this$2.m13 = this$2.m23 = this$2.m24 = this$2.m14 = this$2.m24 = this$2.m34 = 0;
		this$2;
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
	gl = Kingyo.gl;
	prog = Kingyo.prog;
	gl.uniform3fv(Kingyo.ulocs.color, this._color);
	gl.uniform3fv(Kingyo.ulocs.color2, this._color2);
	gl.uniform4fv(Kingyo.ulocs.color2pos, this._color2pos);
	modelMatLoc = Kingyo.ulocs.modelMatrix;
	s = Math.sin(this._anim * 5);
	this$15 = new M44$();
	v$0 = this._pos;
	this$13 = this$15.setTranslate$NNN(v$0.x, v$0.y, v$0.z);
	m$11 = this._spinMat;
	this$11 = this$13.mul$LM44$LM44$(new M44$LM44$(this$13), m$11);
	this$14 = new M44$();
	rad$0 = this._vangle - s / 10;
	m$10 = this$14.setRotate$NNNN(rad$0, 0, 0, 1);
	this$5 = this$11.mul$LM44$LM44$(new M44$LM44$(this$11), m$10);
	this$12 = new M44$();
	m$5 = this$12.setRotate$NNNN(1.5707963267948966, 1, 0, 0);
	this$0 = this$5.mul$LM44$LM44$(new M44$LM44$(this$5), m$5);
	this$6 = new M44$();
	m$0 = this$6.setRotate$NNNN(1.5707963267948966, 0, 1, 0);
	bodyMat = this$0.mul$LM44$LM44$(new M44$LM44$(this$0), m$0);
	gl.uniformMatrix4fv(modelMatLoc, false, [ bodyMat.m11, bodyMat.m21, bodyMat.m31, bodyMat.m41, bodyMat.m12, bodyMat.m22, bodyMat.m32, bodyMat.m42, bodyMat.m13, bodyMat.m23, bodyMat.m33, bodyMat.m43, bodyMat.m14, bodyMat.m24, bodyMat.m34, bodyMat.m44 ]);
	this._drawPart$L_Part$(Kingyo.body);
	this$7 = new M44$LM44$(bodyMat);
	m$6 = new M44$().setTranslate$NNN(0.5, -0.3, 0);
	this$1 = this$7.mul$LM44$LM44$(new M44$LM44$(this$7), m$6);
	m$1 = new M44$().setRotate$NNNN(1 + s / 2, 0.2, 1, -0.5);
	lfinMat = this$1.mul$LM44$LM44$(new M44$LM44$(this$1), m$1);
	gl.uniformMatrix4fv(modelMatLoc, false, [ lfinMat.m11, lfinMat.m21, lfinMat.m31, lfinMat.m41, lfinMat.m12, lfinMat.m22, lfinMat.m32, lfinMat.m42, lfinMat.m13, lfinMat.m23, lfinMat.m33, lfinMat.m43, lfinMat.m14, lfinMat.m24, lfinMat.m34, lfinMat.m44 ]);
	this._drawPart$L_Part$(Kingyo.lfin);
	this$8 = new M44$LM44$(bodyMat);
	m$7 = new M44$().setTranslate$NNN(-0.5, -0.3, 0);
	this$2 = this$8.mul$LM44$LM44$(new M44$LM44$(this$8), m$7);
	m$2 = new M44$().setRotate$NNNN(-1 - s / 2, -0.2, 1, -0.5);
	rfinMat = this$2.mul$LM44$LM44$(new M44$LM44$(this$2), m$2);
	gl.uniformMatrix4fv(modelMatLoc, false, [ rfinMat.m11, rfinMat.m21, rfinMat.m31, rfinMat.m41, rfinMat.m12, rfinMat.m22, rfinMat.m32, rfinMat.m42, rfinMat.m13, rfinMat.m23, rfinMat.m33, rfinMat.m43, rfinMat.m14, rfinMat.m24, rfinMat.m34, rfinMat.m44 ]);
	this._drawPart$L_Part$(Kingyo.rfin);
	this$9 = new M44$LM44$(bodyMat);
	m$8 = new M44$().setTranslate$NNN(0, 0.7, 0);
	this$3 = this$9.mul$LM44$LM44$(new M44$LM44$(this$9), m$8);
	m$3 = new M44$().setRotate$NNNN(s / 2, 0, 1, 1);
	bfinMat = this$3.mul$LM44$LM44$(new M44$LM44$(this$3), m$3);
	gl.uniformMatrix4fv(modelMatLoc, false, [ bfinMat.m11, bfinMat.m21, bfinMat.m31, bfinMat.m41, bfinMat.m12, bfinMat.m22, bfinMat.m32, bfinMat.m42, bfinMat.m13, bfinMat.m23, bfinMat.m33, bfinMat.m43, bfinMat.m14, bfinMat.m24, bfinMat.m34, bfinMat.m44 ]);
	this._drawPart$L_Part$(Kingyo.bfin);
	this$10 = new M44$LM44$(bodyMat);
	m$9 = new M44$().setTranslate$NNN(0, 0, -0.7);
	this$4 = this$10.mul$LM44$LM44$(new M44$LM44$(this$10), m$9);
	m$4 = new M44$().setRotate$NNNN(s / 2, 0, 1, 0);
	tfinMat = this$4.mul$LM44$LM44$(new M44$LM44$(this$4), m$4);
	gl.uniformMatrix4fv(modelMatLoc, false, [ tfinMat.m11, tfinMat.m21, tfinMat.m31, tfinMat.m41, tfinMat.m12, tfinMat.m22, tfinMat.m32, tfinMat.m42, tfinMat.m13, tfinMat.m23, tfinMat.m33, tfinMat.m43, tfinMat.m14, tfinMat.m24, tfinMat.m34, tfinMat.m44 ]);
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
	gl = Kingyo.gl;
	prog = Kingyo.eyeProg;
	ulocs = Kingyo.eyeULocs;
	alocs = Kingyo.eyeALocs;
	gl.uniform3fv(ulocs.color, this._color);
	s = Math.sin(this._anim * 5);
	this$7 = new M44$();
	v$0 = this._pos;
	this$5 = this$7.setTranslate$NNN(v$0.x, v$0.y, v$0.z);
	m$3 = this._spinMat;
	this$3 = this$5.mul$LM44$LM44$(new M44$LM44$(this$5), m$3);
	this$6 = new M44$();
	rad$0 = this._vangle - s / 10;
	m$2 = this$6.setRotate$NNNN(rad$0, 0, 0, 1);
	this$1 = this$3.mul$LM44$LM44$(new M44$LM44$(this$3), m$2);
	this$4 = new M44$();
	m$1 = this$4.setRotate$NNNN(1.5707963267948966, 1, 0, 0);
	this$0 = this$1.mul$LM44$LM44$(new M44$LM44$(this$1), m$1);
	this$2 = new M44$();
	m$0 = this$2.setRotate$NNNN(1.5707963267948966, 0, 1, 0);
	bodyMat = this$0.mul$LM44$LM44$(new M44$LM44$(this$0), m$0);
	gl.uniformMatrix4fv(ulocs.modelMatrix, false, [ bodyMat.m11, bodyMat.m21, bodyMat.m31, bodyMat.m41, bodyMat.m12, bodyMat.m22, bodyMat.m32, bodyMat.m42, bodyMat.m13, bodyMat.m23, bodyMat.m33, bodyMat.m43, bodyMat.m14, bodyMat.m24, bodyMat.m34, bodyMat.m44 ]);
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
	image = (function (v) {
		if (! (v == null || v instanceof HTMLImageElement)) {
			debugger;
			throw new Error("[poi.jsx:27] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.window.document.createElement('img')));
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
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, [ projMat.m11, projMat.m21, projMat.m31, projMat.m41, projMat.m12, projMat.m22, projMat.m32, projMat.m42, projMat.m13, projMat.m23, projMat.m33, projMat.m43, projMat.m14, projMat.m24, projMat.m34, projMat.m44 ]);
	this$0 = new M44$LM44$(viewMat);
	m$0 = new M44$().setTranslate$NNN($this._x, $this._y, $this._z);
	mvMat = this$0.mul$LM44$LM44$(new M44$LM44$(this$0), m$0);
	if ($this._down) {
		m$2 = new M44$().setTranslate$NNN(0, 0, -7);
		this$1 = mvMat.mul$LM44$LM44$(new M44$LM44$(mvMat), m$2);
		this$2 = new M44$();
		m$1 = this$2.setRotate$NNNN(-0.1, 1, 0, 0);
		this$1.mul$LM44$LM44$(new M44$LM44$(this$1), m$1);
	}
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, [ mvMat.m11, mvMat.m21, mvMat.m31, mvMat.m41, mvMat.m12, mvMat.m22, mvMat.m32, mvMat.m42, mvMat.m13, mvMat.m23, mvMat.m33, mvMat.m43, mvMat.m14, mvMat.m24, mvMat.m34, mvMat.m44 ]);
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
	vp = (function (v) {
		if (! (v == null || v instanceof Int32Array)) {
			debugger;
			throw new Error("[water.jsx:117] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(gl.getParameter(gl.VIEWPORT)));
	if (! vp) {
		vp = new Int32Array((function (v) {
			if (! (v == null || v instanceof Array)) {
				debugger;
				throw new Error("[water.jsx:120] detected invalid cast, value is not an Array or null");
			}
			return v;
		}(gl.getParameter(gl.VIEWPORT))));
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
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, new M44$().setOrtho$NNNNNN(0, 1, 0, 1, -1, 1).array$());
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
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, new M44$().setOrtho$NNNNNN(0, 1, 0, 1, -1, 1).array$());
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
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, [ projMat.m11, projMat.m21, projMat.m31, projMat.m41, projMat.m12, projMat.m22, projMat.m32, projMat.m42, projMat.m13, projMat.m23, projMat.m33, projMat.m43, projMat.m14, projMat.m24, projMat.m34, projMat.m44 ]);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, [ viewMat.m11, viewMat.m21, viewMat.m31, viewMat.m41, viewMat.m12, viewMat.m22, viewMat.m32, viewMat.m42, viewMat.m13, viewMat.m23, viewMat.m33, viewMat.m43, viewMat.m14, viewMat.m24, viewMat.m34, viewMat.m44 ]);
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
	_viewport$0 = this._viewport = (function (v) {
		if (! (v == null || v instanceof Int32Array)) {
			debugger;
			throw new Error("[rendertexture.jsx:61] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(gl.getParameter(gl.VIEWPORT)));
	if (! _viewport$0) {
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
			throw new Error("[/Users/haga.takeshi/JSX/lib/js/js/web.jsx:23] detected invalid cast, value is not an instance of the designated type or null");
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
		dom$: dom$,
		EventInit: EventInit,
		EventInit$: EventInit$,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit$,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit$,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit$,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit$,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit$,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit$,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit$,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit$,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit$,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions$,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit$,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit$,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit$,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit$,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit$,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit$,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit$,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit$,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit$,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit$,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters$,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters$,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit$,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions$,
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit$,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit$,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer$,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration$,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit$,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit$,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit$,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit$,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints$,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints$,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions$,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes$,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit$,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit$,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit$
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
		M22$N: M22$N,
		M22$LM33$: M22$LM33$,
		M22$LM44$: M22$LM44$,
		M33: M33,
		M33$: M33$,
		M33$LM33$: M33$LM33$,
		M33$AN: M33$AN,
		M33$LFloat32Array$: M33$LFloat32Array$,
		M33$NNNNNNNNN: M33$NNNNNNNNN,
		M33$LV3$LV3$LV3$: M33$LV3$LV3$LV3$,
		M33$N: M33$N,
		M33$LM22$N: M33$LM22$N,
		M33$LM44$: M33$LM44$,
		M44: M44,
		M44$: M44$,
		M44$LM44$: M44$LM44$,
		M44$AN: M44$AN,
		M44$LFloat32Array$: M44$LFloat32Array$,
		M44$NNNNNNNNNNNNNNNN: M44$NNNNNNNNNNNNNNNN,
		M44$LV4$LV4$LV4$LV4$: M44$LV4$LV4$LV4$LV4$,
		M44$N: M44$N,
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
