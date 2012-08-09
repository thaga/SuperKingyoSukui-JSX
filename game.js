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
	/** @type {!number} */
	var ex$0;
	/** @type {!number} */
	var ey$0;
	/** @type {!number} */
	var ez$0;
	/** @type {_Part} */
	var this$0$0;
	/** @type {Array.<undefined|!number>} */
	var i$0$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$0$0;
	/** @type {WebGLBuffer} */
	var buf$0$0$0;
	/** @type {_Part} */
	var this$1$0;
	/** @type {Array.<undefined|!number>} */
	var i$1$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$1$0;
	/** @type {WebGLBuffer} */
	var buf$0$1$0;
	/** @type {_Part} */
	var this$2$0;
	/** @type {Array.<undefined|!number>} */
	var i$2$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$2$0;
	/** @type {WebGLBuffer} */
	var buf$0$2$0;
	/** @type {_Part} */
	var this$3$0;
	/** @type {Array.<undefined|!number>} */
	var i$3$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$3$0;
	/** @type {WebGLBuffer} */
	var buf$0$3$0;
	/** @type {_Part} */
	var this$4$0;
	/** @type {Array.<undefined|!number>} */
	var i$4$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$4$0;
	/** @type {WebGLBuffer} */
	var buf$0$4$0;
	/** @type {_Part} */
	var this$5$0;
	/** @type {Array.<undefined|!number>} */
	var i$5$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$5$0;
	/** @type {WebGLBuffer} */
	var buf$0$5$0;
	/** @type {_Part} */
	var this$6$0;
	/** @type {Array.<undefined|!number>} */
	var n$0$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$6$0;
	/** @type {WebGLBuffer} */
	var buf$0$6$0;
	/** @type {_Part} */
	var this$7$0;
	/** @type {Array.<undefined|!number>} */
	var n$1$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$7$0;
	/** @type {WebGLBuffer} */
	var buf$0$7$0;
	/** @type {_Part} */
	var this$8$0;
	/** @type {Array.<undefined|!number>} */
	var n$2$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$8$0;
	/** @type {WebGLBuffer} */
	var buf$0$8$0;
	/** @type {_Part} */
	var this$9$0;
	/** @type {Array.<undefined|!number>} */
	var n$3$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$9$0;
	/** @type {WebGLBuffer} */
	var buf$0$9$0;
	/** @type {_Part} */
	var this$10$0;
	/** @type {Array.<undefined|!number>} */
	var n$4$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$10$0;
	/** @type {WebGLBuffer} */
	var buf$0$10$0;
	/** @type {_Part} */
	var this$11$0;
	/** @type {Array.<undefined|!number>} */
	var v$0$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$11$0;
	/** @type {WebGLBuffer} */
	var buf$0$11$0;
	/** @type {_Part} */
	var this$12$0;
	/** @type {Array.<undefined|!number>} */
	var v$1$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$12$0;
	/** @type {WebGLBuffer} */
	var buf$0$12$0;
	/** @type {_Part} */
	var this$13$0;
	/** @type {Array.<undefined|!number>} */
	var v$2$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$13$0;
	/** @type {WebGLBuffer} */
	var buf$0$13$0;
	/** @type {_Part} */
	var this$14$0;
	/** @type {Array.<undefined|!number>} */
	var v$3$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$14$0;
	/** @type {WebGLBuffer} */
	var buf$0$14$0;
	/** @type {_Part} */
	var this$15$0;
	/** @type {Array.<undefined|!number>} */
	var v$4$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$15$0;
	/** @type {WebGLBuffer} */
	var buf$0$15$0;
	/** @type {_Part} */
	var this$16$0;
	/** @type {Array.<undefined|!number>} */
	var v$5$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$16$0;
	/** @type {WebGLBuffer} */
	var buf$0$16$0;
	canvas = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(canvas_id)));
	ww = dom.window.innerWidth;
	wh = dom.window.innerHeight;
	canvas_size = (ww <= wh ? ww : wh);
	canvas.width = (canvas_size | 0);
	canvas.height = (canvas_size | 0);
	Game.status_text = (function (o) { return o instanceof HTMLDivElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById('status')));
	Game.life_bar = (function (o) { return o instanceof HTMLDivElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(life_id)));
	lbw = Game.life_bar.style.width;
	Game.life_bar_width = lbw.substring(0, lbw.length - 2) | 0;
	gl = Util$getWebGL$S(canvas_id);
	Game.gl = gl;
	Poi.gl = gl;
	Poi.prog = Util$getProgram$SS('vt.vs', 'vt.fs');
	Poi.vtbuf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, Poi.vtbuf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ -2, -6, 2, -6, 2, 2, -2, 2, 0, 0, 1, 0, 1, 1, 0, 1 ]), gl.STATIC_DRAW);
	Poi.tex = Poi$loadTex$S('poi.png');
	Poi.texx = Poi$loadTex$S('poix.png');
	Kingyo.gl = gl;
	Kingyo.prog = Util$getProgram$SS('kbody.vs', 'kbody.fs');
	this$12$0 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$1$0 = [ 0, 0, 1, 0.7, 0, 0, 0, 1, 0, -0.7, 0, 0, 0, -1, 0, 0, 0, -1 ];
	gl$0$12$0 = Kingyo.gl;
	buf$0$12$0 = gl$0$12$0.createBuffer();
	gl$0$12$0.bindBuffer(gl$0$12$0.ARRAY_BUFFER, buf$0$12$0);
	gl$0$12$0.bufferData(gl$0$12$0.ARRAY_BUFFER, new Float32Array(v$1$0), gl$0$12$0.STATIC_DRAW);
	this$12$0.vbuf = buf$0$12$0;
	this$12$0.numv = (v$1$0.length / 3 | 0);
	this$6$0 = this$12$0;
	n$0$0 = [ 0, 0, 1, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1 ];
	gl$0$6$0 = Kingyo.gl;
	buf$0$6$0 = gl$0$6$0.createBuffer();
	gl$0$6$0.bindBuffer(gl$0$6$0.ARRAY_BUFFER, buf$0$6$0);
	gl$0$6$0.bufferData(gl$0$6$0.ARRAY_BUFFER, new Float32Array(n$0$0), gl$0$6$0.STATIC_DRAW);
	this$6$0.nbuf = buf$0$6$0;
	this$0$0 = this$6$0;
	i$0$0 = [ 0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 5, 2, 1, 5, 3, 2, 5, 4, 3, 5, 1, 4 ];
	gl$0$0$0 = Kingyo.gl;
	buf$0$0$0 = gl$0$0$0.createBuffer();
	gl$0$0$0.bindBuffer(gl$0$0$0.ELEMENT_ARRAY_BUFFER, buf$0$0$0);
	gl$0$0$0.bufferData(gl$0$0$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$0$0), gl$0$0$0.STATIC_DRAW);
	this$0$0.ibuf = buf$0$0$0;
	this$0$0.numi = (i$0$0.length | 0);
	Kingyo.body = this$0$0;
	this$13$0 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$2$0 = [ 0, 0, 0, 0.5, -0.25, 0, 0.8, 0.25, 0 ];
	gl$0$13$0 = Kingyo.gl;
	buf$0$13$0 = gl$0$13$0.createBuffer();
	gl$0$13$0.bindBuffer(gl$0$13$0.ARRAY_BUFFER, buf$0$13$0);
	gl$0$13$0.bufferData(gl$0$13$0.ARRAY_BUFFER, new Float32Array(v$2$0), gl$0$13$0.STATIC_DRAW);
	this$13$0.vbuf = buf$0$13$0;
	this$13$0.numv = (v$2$0.length / 3 | 0);
	this$7$0 = this$13$0;
	n$1$0 = [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ];
	gl$0$7$0 = Kingyo.gl;
	buf$0$7$0 = gl$0$7$0.createBuffer();
	gl$0$7$0.bindBuffer(gl$0$7$0.ARRAY_BUFFER, buf$0$7$0);
	gl$0$7$0.bufferData(gl$0$7$0.ARRAY_BUFFER, new Float32Array(n$1$0), gl$0$7$0.STATIC_DRAW);
	this$7$0.nbuf = buf$0$7$0;
	this$1$0 = this$7$0;
	i$1$0 = [ 0, 1, 2 ];
	gl$0$1$0 = Kingyo.gl;
	buf$0$1$0 = gl$0$1$0.createBuffer();
	gl$0$1$0.bindBuffer(gl$0$1$0.ELEMENT_ARRAY_BUFFER, buf$0$1$0);
	gl$0$1$0.bufferData(gl$0$1$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$1$0), gl$0$1$0.STATIC_DRAW);
	this$1$0.ibuf = buf$0$1$0;
	this$1$0.numi = (i$1$0.length | 0);
	Kingyo.lfin = this$1$0;
	this$14$0 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$3$0 = [ 0, 0, 0, -0.8, 0.25, 0, -0.5, -0.25, 0 ];
	gl$0$14$0 = Kingyo.gl;
	buf$0$14$0 = gl$0$14$0.createBuffer();
	gl$0$14$0.bindBuffer(gl$0$14$0.ARRAY_BUFFER, buf$0$14$0);
	gl$0$14$0.bufferData(gl$0$14$0.ARRAY_BUFFER, new Float32Array(v$3$0), gl$0$14$0.STATIC_DRAW);
	this$14$0.vbuf = buf$0$14$0;
	this$14$0.numv = (v$3$0.length / 3 | 0);
	this$8$0 = this$14$0;
	n$2$0 = [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ];
	gl$0$8$0 = Kingyo.gl;
	buf$0$8$0 = gl$0$8$0.createBuffer();
	gl$0$8$0.bindBuffer(gl$0$8$0.ARRAY_BUFFER, buf$0$8$0);
	gl$0$8$0.bufferData(gl$0$8$0.ARRAY_BUFFER, new Float32Array(n$2$0), gl$0$8$0.STATIC_DRAW);
	this$8$0.nbuf = buf$0$8$0;
	this$2$0 = this$8$0;
	i$2$0 = [ 0, 1, 2 ];
	gl$0$2$0 = Kingyo.gl;
	buf$0$2$0 = gl$0$2$0.createBuffer();
	gl$0$2$0.bindBuffer(gl$0$2$0.ELEMENT_ARRAY_BUFFER, buf$0$2$0);
	gl$0$2$0.bufferData(gl$0$2$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$2$0), gl$0$2$0.STATIC_DRAW);
	this$2$0.ibuf = buf$0$2$0;
	this$2$0.numi = (i$2$0.length | 0);
	Kingyo.rfin = this$2$0;
	this$15$0 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$4$0 = [ 0, 0, 0, 0, -0.5, -1, 0, 0.5, -0.8 ];
	gl$0$15$0 = Kingyo.gl;
	buf$0$15$0 = gl$0$15$0.createBuffer();
	gl$0$15$0.bindBuffer(gl$0$15$0.ARRAY_BUFFER, buf$0$15$0);
	gl$0$15$0.bufferData(gl$0$15$0.ARRAY_BUFFER, new Float32Array(v$4$0), gl$0$15$0.STATIC_DRAW);
	this$15$0.vbuf = buf$0$15$0;
	this$15$0.numv = (v$4$0.length / 3 | 0);
	this$9$0 = this$15$0;
	n$3$0 = [ 1, 0, 0, 1, 0, 0, 1, 0, 0 ];
	gl$0$9$0 = Kingyo.gl;
	buf$0$9$0 = gl$0$9$0.createBuffer();
	gl$0$9$0.bindBuffer(gl$0$9$0.ARRAY_BUFFER, buf$0$9$0);
	gl$0$9$0.bufferData(gl$0$9$0.ARRAY_BUFFER, new Float32Array(n$3$0), gl$0$9$0.STATIC_DRAW);
	this$9$0.nbuf = buf$0$9$0;
	this$3$0 = this$9$0;
	i$3$0 = [ 0, 1, 2 ];
	gl$0$3$0 = Kingyo.gl;
	buf$0$3$0 = gl$0$3$0.createBuffer();
	gl$0$3$0.bindBuffer(gl$0$3$0.ELEMENT_ARRAY_BUFFER, buf$0$3$0);
	gl$0$3$0.bufferData(gl$0$3$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$3$0), gl$0$3$0.STATIC_DRAW);
	this$3$0.ibuf = buf$0$3$0;
	this$3$0.numi = (i$3$0.length | 0);
	Kingyo.bfin = this$3$0;
	this$16$0 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$5$0 = [ 0, 0, 0, 0.8, -0.5, -1, 0, 0.4, -0.8, -0.8, -0.5, -1 ];
	gl$0$16$0 = Kingyo.gl;
	buf$0$16$0 = gl$0$16$0.createBuffer();
	gl$0$16$0.bindBuffer(gl$0$16$0.ARRAY_BUFFER, buf$0$16$0);
	gl$0$16$0.bufferData(gl$0$16$0.ARRAY_BUFFER, new Float32Array(v$5$0), gl$0$16$0.STATIC_DRAW);
	this$16$0.vbuf = buf$0$16$0;
	this$16$0.numv = (v$5$0.length / 3 | 0);
	this$10$0 = this$16$0;
	n$4$0 = [ 0, 1, 1, 1, 1, 1, 0, 1, 0, -1, 1, 1 ];
	gl$0$10$0 = Kingyo.gl;
	buf$0$10$0 = gl$0$10$0.createBuffer();
	gl$0$10$0.bindBuffer(gl$0$10$0.ARRAY_BUFFER, buf$0$10$0);
	gl$0$10$0.bufferData(gl$0$10$0.ARRAY_BUFFER, new Float32Array(n$4$0), gl$0$10$0.STATIC_DRAW);
	this$10$0.nbuf = buf$0$10$0;
	this$4$0 = this$10$0;
	i$4$0 = [ 0, 1, 2, 0, 2, 3 ];
	gl$0$4$0 = Kingyo.gl;
	buf$0$4$0 = gl$0$4$0.createBuffer();
	gl$0$4$0.bindBuffer(gl$0$4$0.ELEMENT_ARRAY_BUFFER, buf$0$4$0);
	gl$0$4$0.bufferData(gl$0$4$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$4$0), gl$0$4$0.STATIC_DRAW);
	this$4$0.ibuf = buf$0$4$0;
	this$4$0.numi = (i$4$0.length | 0);
	Kingyo.tfin = this$4$0;
	Kingyo.ulocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.alocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.eyeProg = Util$getProgram$SS('keye.vs', 'keye.fs');
	Kingyo.eyeULocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.eyeProg);
	Kingyo.eyeALocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.eyeProg);
	(ex$0 = 0.3, ey$0 = 0.15, ez$0 = 0.5);
	this$11$0 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$0$0 = [ - ex$0, ey$0, ez$0, 0, - ex$0, ey$0, ez$0, 1, - ex$0, ey$0, ez$0, 2, - ex$0, ey$0, ez$0, 3, ex$0, ey$0, ez$0, 4, ex$0, ey$0, ez$0, 5, ex$0, ey$0, ez$0, 6, ex$0, ey$0, ez$0, 7 ];
	gl$0$11$0 = Kingyo.gl;
	buf$0$11$0 = gl$0$11$0.createBuffer();
	gl$0$11$0.bindBuffer(gl$0$11$0.ARRAY_BUFFER, buf$0$11$0);
	gl$0$11$0.bufferData(gl$0$11$0.ARRAY_BUFFER, new Float32Array(v$0$0), gl$0$11$0.STATIC_DRAW);
	this$11$0.vbuf = buf$0$11$0;
	this$11$0.numv = (v$0$0.length / 3 | 0);
	this$5$0 = this$11$0;
	i$5$0 = [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7 ];
	gl$0$5$0 = Kingyo.gl;
	buf$0$5$0 = gl$0$5$0.createBuffer();
	gl$0$5$0.bindBuffer(gl$0$5$0.ELEMENT_ARRAY_BUFFER, buf$0$5$0);
	gl$0$5$0.bufferData(gl$0$5$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$5$0), gl$0$5$0.STATIC_DRAW);
	this$5$0.ibuf = buf$0$5$0;
	this$5$0.numi = (i$5$0.length | 0);
	Kingyo.eyes = this$5$0;
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
		var this$0;
		/** @type {M33} */
		var m$0;
		/** @type {Float32Array} */
		var a$0;
		/** @type {Float32Array} */
		var t$0;
		/** @type {undefined|!number} */
		var x$0;
		/** @type {undefined|!number} */
		var y$0;
		/** @type {undefined|!number} */
		var z$0;
		/** @type {V3} */
		var this$1;
		/** @type {!number} */
		var l$0;
		/** @type {!number} */
		var x$0$0;
		/** @type {!number} */
		var y$0$0;
		/** @type {!number} */
		var z$0$0;
		/** @type {M33} */
		var this$3;
		/** @type {V3} */
		var this$4;
		/** @type {M33} */
		var m$1;
		/** @type {Float32Array} */
		var a$1;
		/** @type {Float32Array} */
		var t$1;
		/** @type {undefined|!number} */
		var x$1;
		/** @type {undefined|!number} */
		var y$1;
		/** @type {undefined|!number} */
		var z$1;
		/** @type {V3} */
		var this$5;
		/** @type {!number} */
		var s$0;
		/** @type {M33} */
		var this$6;
		/** @type {Float32Array} */
		var _$0;
		/** @type {Float32Array} */
		var _$1;
		wx = p[0] / canvas.width * 2 - 1;
		wy = - p[1] / canvas.height * 2 + 1;
		this$0 = new V3$NNN(0, 0, 80);
		this$3 = {_: new Float32Array(9)};
		m$0 = M33$setRotate$LM33$NNNN(this$3, 0.2, 1, 0, 0);
		(a$0 = this$0._, t$0 = m$0._);
		(x$0 = a$0[0], y$0 = a$0[1], z$0 = a$0[2]);
		a$0[0] = t$0[0] * x$0 + t$0[3] * y$0 + t$0[6] * z$0;
		a$0[1] = t$0[1] * x$0 + t$0[4] * y$0 + t$0[7] * z$0;
		a$0[2] = t$0[2] * x$0 + t$0[5] * y$0 + t$0[8] * z$0;
		epos = this$0;
		this$4 = new V3$NNN(0.2 * wx, 0.2 * wy, -1);
		this$6 = {_: new Float32Array(9)};
		m$1 = M33$setRotate$LM33$NNNN(this$6, 0.2, 1, 0, 0);
		(a$1 = this$4._, t$1 = m$1._);
		(x$1 = a$1[0], y$1 = a$1[1], z$1 = a$1[2]);
		a$1[0] = t$1[0] * x$1 + t$1[3] * y$1 + t$1[6] * z$1;
		a$1[1] = t$1[1] * x$1 + t$1[4] * y$1 + t$1[7] * z$1;
		a$1[2] = t$1[2] * x$1 + t$1[5] * y$1 + t$1[8] * z$1;
		this$1 = this$4;
		l$0 = Math.sqrt(V3$len2$LV3$(this$4));
		pdir = (l$0 > 0 ? V3$mul$LV3$N(this$1, 1 / l$0) : this$1);
		this$5 = new V3$LV3$(pdir);
		s$0 = epos._[2] / - pdir._[2];
		this$5._[0] *= s$0;
		this$5._[1] *= s$0;
		this$5._[2] *= s$0;
		x$0$0 = (_$0 = epos._)[0];
		y$0$0 = _$0[1];
		z$0$0 = _$0[2];
		this$5._[0] += x$0$0;
		this$5._[1] += y$0$0;
		this$5._[2] += z$0$0;
		return [ (_$1 = this$5._)[0], _$1[1] ];
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
	getRequestAnimationFrame = (function () {
		return (js.global.requestAnimationFrame != null ? (function (tick) {
			dom.window.requestAnimationFrame(tick);
		}) : js.global.webkitRequestAnimationFrame != null ? (function (tick) {
			dom.window.webkitRequestAnimationFrame(tick);
		}) : js.global.mozRequestAnimationFrame != null ? (function (tick) {
			dom.window.mozRequestAnimationFrame(tick);
		}) : (function (tick) {
			dom.window.setTimeout((function () {
				tick(0);
			}), 1000 / 60);
		}));
	});
	w = dom.window;
	w.requestAnimationFrame = getRequestAnimationFrame();
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
		dom.window.requestAnimationFrame(update_render);
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
	canvas = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(canvas_id)));
	ctx_names = [ 'webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d' ];
	ctx = null;
	for (ni in ctx_names) {
		try {
			ctx = (function (o) { return o instanceof WebGLRenderingContext ? o : null; })(canvas.getContext(ctx_names[ni]));
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
	/** @type {!number} */
	var type$0;
	/** @type {WebGLRenderingContext} */
	var gl$0;
	/** @type {!string} */
	var src$0;
	/** @type {WebGLShader} */
	var shader$0;
	/** @type {XMLHttpRequest} */
	var xhr$0$0;
	/** @type {!number} */
	var type$1;
	/** @type {WebGLRenderingContext} */
	var gl$1;
	/** @type {!string} */
	var src$1;
	/** @type {WebGLShader} */
	var shader$1;
	/** @type {XMLHttpRequest} */
	var xhr$0$1;
	gl = Util.gl;
	type$0 = gl.VERTEX_SHADER;
	gl$0 = Util.gl;
	xhr$0$0 = new XMLHttpRequest();
	xhr$0$0.open("GET", vs_url, false);
	xhr$0$0.send();
	src$0 = xhr$0$0.responseText;
	shader$0 = gl$0.createShader(type$0);
	gl$0.shaderSource(shader$0, src$0);
	gl$0.compileShader(shader$0);
	vs = (! (!! gl$0.getShaderParameter(shader$0, gl$0.COMPILE_STATUS)) ? null : shader$0);
	type$1 = gl.FRAGMENT_SHADER;
	gl$1 = Util.gl;
	xhr$0$1 = new XMLHttpRequest();
	xhr$0$1.open("GET", fs_url, false);
	xhr$0$1.send();
	src$1 = xhr$0$1.responseText;
	shader$1 = gl$1.createShader(type$1);
	gl$1.shaderSource(shader$1, src$1);
	gl$1.compileShader(shader$1);
	fs = (! (!! gl$1.getShaderParameter(shader$1, gl$1.COMPILE_STATUS)) ? null : shader$1);
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
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {Float32Array} */
	var _$0;
	this._ = new Float32Array(2);
	x$0$0 = (_$0 = v._)[0];
	y$0$0 = _$0[1];
	this._[0] = x$0$0;
	this._[1] = y$0$0;
};

V2$LV3$.prototype = new V2;

/**
 * @constructor
 * @param {V4} v
 */
function V2$LV4$(v) {
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {Float32Array} */
	var _$0;
	this._ = new Float32Array(2);
	x$0$0 = (_$0 = v._)[0];
	y$0$0 = _$0[1];
	this._[0] = x$0$0;
	this._[1] = y$0$0;
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
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {Float32Array} */
	var _$0;
	this._ = new Float32Array(3);
	x$0$0 = (_$0 = v._)[0];
	y$0$0 = _$0[1];
	this._[0] = x$0$0;
	this._[1] = y$0$0;
	this._[2] = z;
};

V3$LV2$N.prototype = new V3;

/**
 * @constructor
 * @param {V4} v
 */
function V3$LV4$(v) {
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {!number} */
	var z$0$0;
	/** @type {Float32Array} */
	var _$0;
	this._ = new Float32Array(3);
	x$0$0 = (_$0 = v._)[0];
	y$0$0 = _$0[1];
	z$0$0 = _$0[2];
	this._[0] = x$0$0;
	this._[1] = y$0$0;
	this._[2] = z$0$0;
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
	this._[0] = x;
	this._[1] = y;
	this._[2] = z;
	this._[3] = w;
};

V4$NNNN.prototype = new V4;

/**
 * @constructor
 * @param {V2} v
 * @param {!number} z
 * @param {!number} w
 */
function V4$LV2$NN(v, z, w) {
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {Float32Array} */
	var _$0;
	this._ = new Float32Array(4);
	x$0$0 = (_$0 = v._)[0];
	y$0$0 = _$0[1];
	this._[0] = x$0$0;
	this._[1] = y$0$0;
	this._[2] = z;
	this._[3] = w;
};

V4$LV2$NN.prototype = new V4;

/**
 * @constructor
 * @param {V3} v
 * @param {!number} w
 */
function V4$LV3$N(v, w) {
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {!number} */
	var z$0$0;
	/** @type {Float32Array} */
	var _$0;
	this._ = new Float32Array(4);
	x$0$0 = (_$0 = v._)[0];
	y$0$0 = _$0[1];
	z$0$0 = _$0[2];
	this._[0] = x$0$0;
	this._[1] = y$0$0;
	this._[2] = z$0$0;
	this._[3] = w;
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
	$this._[3] = w;
	return $this;
};

var V4$set$LV4$LV2$NN = V4.set$LV4$LV2$NN;

/**
 * @param {V4} $this
 * @param {V3} v
 * @param {!number} w
 * @return {V4}
 */
V4.set$LV4$LV3$N = function ($this, v, w) {
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
	$this._[3] = w;
	return $this;
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
	$this._[0] = 0;
	$this._[1] = 0;
	$this._[2] = 0;
	$this._[3] = 0;
	return $this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	z$0 = _$0[2];
	w$0 = _$0[3];
	$this._[0] += x$0;
	$this._[1] += y$0;
	$this._[2] += z$0;
	$this._[3] += w$0;
	return $this;
};

var V4$add$LV4$LV4$ = V4.add$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.add$LV4$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this._[0] += x$0;
	$this._[1] += y$0;
	$this._[2] += z$0;
	$this._[3] += w$0;
	return $this;
};

var V4$add$LV4$AN = V4.add$LV4$AN;

/**
 * @param {V4} $this
 * @param {Float32Array} v
 * @return {V4}
 */
V4.add$LV4$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this._[0] += x$0;
	$this._[1] += y$0;
	$this._[2] += z$0;
	$this._[3] += w$0;
	return $this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	z$0 = _$0[2];
	w$0 = _$0[3];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	$this._[2] -= z$0;
	$this._[3] -= w$0;
	return $this;
};

var V4$sub$LV4$LV4$ = V4.sub$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.sub$LV4$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	$this._[2] -= z$0;
	$this._[3] -= w$0;
	return $this;
};

var V4$sub$LV4$AN = V4.sub$LV4$AN;

/**
 * @param {V4} $this
 * @param {Float32Array} v
 * @return {V4}
 */
V4.sub$LV4$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this._[0] -= x$0;
	$this._[1] -= y$0;
	$this._[2] -= z$0;
	$this._[3] -= w$0;
	return $this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	/** @type {Float32Array} */
	var _$0;
	x$0 = (_$0 = v._)[0];
	y$0 = _$0[1];
	z$0 = _$0[2];
	w$0 = _$0[3];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	$this._[2] *= z$0;
	$this._[3] *= w$0;
	return $this;
};

var V4$mul$LV4$LV4$ = V4.mul$LV4$LV4$;

/**
 * @param {V4} $this
 * @param {Array.<undefined|!number>} v
 * @return {V4}
 */
V4.mul$LV4$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	$this._[2] *= z$0;
	$this._[3] *= w$0;
	return $this;
};

var V4$mul$LV4$AN = V4.mul$LV4$AN;

/**
 * @param {V4} $this
 * @param {Float32Array} v
 * @return {V4}
 */
V4.mul$LV4$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this._[0] *= x$0;
	$this._[1] *= y$0;
	$this._[2] *= z$0;
	$this._[3] *= w$0;
	return $this;
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
	$this._[0] *= -1;
	$this._[1] *= -1;
	$this._[2] *= -1;
	$this._[3] *= -1;
	return $this;
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
	/** @type {Float32Array} */
	var b$0;
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	(_$0, b$0 = m._);
	_$0[0] = b$0[0];
	_$0[1] = b$0[1];
	_$0[2] = b$0[3];
	_$0[3] = b$0[4];
};

M22$LM33$.prototype = new M22;

/**
 * @constructor
 * @param {M44} m
 */
function M22$LM44$(m) {
	/** @type {Float32Array} */
	var b$0;
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(4);
	(_$0, b$0 = m._);
	_$0[0] = b$0[0];
	_$0[1] = b$0[1];
	_$0[2] = b$0[4];
	_$0[3] = b$0[5];
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
	/** @type {Float32Array} */
	var a$0;
	/** @type {undefined|!number} */
	var a00$0;
	/** @type {undefined|!number} */
	var a10$0;
	/** @type {undefined|!number} */
	var a01$0;
	/** @type {undefined|!number} */
	var a11$0;
	/** @type {Float32Array} */
	var b$0;
	/** @type {undefined|!number} */
	var b00$0;
	/** @type {undefined|!number} */
	var b10$0;
	/** @type {undefined|!number} */
	var b01$0;
	/** @type {undefined|!number} */
	var b11$0;
	a$0 = $this._;
	(a00$0 = a$0[0], a10$0 = a$0[1]);
	(a01$0 = a$0[2], a11$0 = a$0[3]);
	b$0 = m._;
	(b00$0 = b$0[0], b10$0 = b$0[1]);
	(b01$0 = b$0[2], b11$0 = b$0[3]);
	a$0[0] = a00$0 * b00$0 + a01$0 * b10$0;
	a$0[1] = a10$0 * b00$0 + a11$0 * b10$0;
	a$0[2] = a00$0 * b01$0 + a01$0 * b11$0;
	a$0[3] = a10$0 * b01$0 + a11$0 * b11$0;
	return $this;
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
	/** @type {Float32Array} */
	var b$0;
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(9);
	(_$0, b$0 = m._);
	_$0[0] = b$0[0];
	_$0[1] = b$0[1];
	_$0[2] = 0;
	_$0[3] = b$0[2];
	_$0[4] = b$0[3];
	_$0[5] = 0;
	_$0[6] = 0;
	_$0[7] = 0;
	_$0[8] = m22;
};

M33$LM22$N.prototype = new M33;

/**
 * @constructor
 * @param {M44} m
 */
function M33$LM44$(m) {
	/** @type {Float32Array} */
	var b$0;
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(9);
	(_$0, b$0 = m._);
	_$0[0] = b$0[0];
	_$0[1] = b$0[1];
	_$0[2] = b$0[2];
	_$0[3] = b$0[4];
	_$0[4] = b$0[5];
	_$0[5] = b$0[6];
	_$0[6] = b$0[8];
	_$0[7] = b$0[9];
	_$0[8] = b$0[10];
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
	/** @type {Float32Array} */
	var a$0;
	/** @type {undefined|!number} */
	var a00$0;
	/** @type {undefined|!number} */
	var a10$0;
	/** @type {undefined|!number} */
	var a20$0;
	/** @type {undefined|!number} */
	var a01$0;
	/** @type {undefined|!number} */
	var a11$0;
	/** @type {undefined|!number} */
	var a21$0;
	/** @type {undefined|!number} */
	var a02$0;
	/** @type {undefined|!number} */
	var a12$0;
	/** @type {undefined|!number} */
	var a22$0;
	/** @type {Float32Array} */
	var b$0;
	/** @type {undefined|!number} */
	var b00$0;
	/** @type {undefined|!number} */
	var b10$0;
	/** @type {undefined|!number} */
	var b20$0;
	/** @type {undefined|!number} */
	var b01$0;
	/** @type {undefined|!number} */
	var b11$0;
	/** @type {undefined|!number} */
	var b21$0;
	/** @type {undefined|!number} */
	var b02$0;
	/** @type {undefined|!number} */
	var b12$0;
	/** @type {undefined|!number} */
	var b22$0;
	a$0 = $this._;
	(a00$0 = a$0[0], a10$0 = a$0[1], a20$0 = a$0[2]);
	(a01$0 = a$0[3], a11$0 = a$0[4], a21$0 = a$0[5]);
	(a02$0 = a$0[6], a12$0 = a$0[7], a22$0 = a$0[8]);
	b$0 = m._;
	(b00$0 = b$0[0], b10$0 = b$0[1], b20$0 = b$0[2]);
	(b01$0 = b$0[3], b11$0 = b$0[4], b21$0 = b$0[5]);
	(b02$0 = b$0[6], b12$0 = b$0[7], b22$0 = b$0[8]);
	a$0[0] = a00$0 * b00$0 + a01$0 * b10$0 + a02$0 * b20$0;
	a$0[1] = a10$0 * b00$0 + a11$0 * b10$0 + a12$0 * b20$0;
	a$0[2] = a20$0 * b00$0 + a21$0 * b10$0 + a22$0 * b20$0;
	a$0[3] = a00$0 * b01$0 + a01$0 * b11$0 + a02$0 * b21$0;
	a$0[4] = a10$0 * b01$0 + a11$0 * b11$0 + a12$0 * b21$0;
	a$0[5] = a20$0 * b01$0 + a21$0 * b11$0 + a22$0 * b21$0;
	a$0[6] = a00$0 * b02$0 + a01$0 * b12$0 + a02$0 * b22$0;
	a$0[7] = a10$0 * b02$0 + a11$0 * b12$0 + a12$0 * b22$0;
	a$0[8] = a20$0 * b02$0 + a21$0 * b12$0 + a22$0 * b22$0;
	return $this;
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
	M33$setZero$LM33$($this);
	$this._[0] = s;
	$this._[4] = s;
	$this._[8] = s;
	return $this;
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
	M33$setZero$LM33$($this);
	$this._[0] = x$0;
	$this._[4] = y$0;
	$this._[8] = z$0;
	return $this;
};

var M33$setScale$LM33$LV3$ = M33.setScale$LM33$LV3$;

/**
 * @param {M33} $this
 * @param {Array.<undefined|!number>} v
 * @return {M33}
 */
M33.setScale$LM33$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M33$setZero$LM33$($this);
	$this._[0] = x$0;
	$this._[4] = y$0;
	$this._[8] = z$0;
	return $this;
};

var M33$setScale$LM33$AN = M33.setScale$LM33$AN;

/**
 * @param {M33} $this
 * @param {Float32Array} v
 * @return {M33}
 */
M33.setScale$LM33$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M33$setZero$LM33$($this);
	$this._[0] = x$0;
	$this._[4] = y$0;
	$this._[8] = z$0;
	return $this;
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
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(16);
	_$0.set(v0._, 0);
	this._.set(v1._, 4);
	this._.set(v2._, 8);
	this._.set(v3._, 12);
};

M44$LV4$LV4$LV4$LV4$.prototype = new M44;

/**
 * @constructor
 * @param {M22} m
 * @param {!number} m22
 * @param {!number} m33
 */
function M44$LM22$NN(m, m22, m33) {
	/** @type {Float32Array} */
	var b$0;
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(16);
	(_$0, b$0 = m._);
	_$0[0] = b$0[0];
	_$0[1] = b$0[1];
	_$0[2] = 0;
	_$0[3] = 0;
	_$0[4] = b$0[2];
	_$0[5] = b$0[3];
	_$0[6] = 0;
	_$0[7] = 0;
	_$0[8] = 0;
	_$0[9] = 0;
	_$0[10] = m22;
	_$0[11] = 0;
	_$0[12] = 0;
	_$0[13] = 0;
	_$0[14] = 0;
	_$0[15] = m33;
};

M44$LM22$NN.prototype = new M44;

/**
 * @constructor
 * @param {M33} m
 * @param {!number} m33
 */
function M44$LM33$N(m, m33) {
	/** @type {Float32Array} */
	var b$0;
	/** @type {Float32Array} */
	var _$0;
	_$0 = this._ = new Float32Array(16);
	(_$0, b$0 = m._);
	_$0[0] = b$0[0];
	_$0[1] = b$0[1];
	_$0[2] = b$0[2];
	_$0[3] = 0;
	_$0[4] = b$0[3];
	_$0[5] = b$0[4];
	_$0[6] = b$0[5];
	_$0[7] = 0;
	_$0[8] = b$0[6];
	_$0[9] = b$0[7];
	_$0[10] = b$0[8];
	_$0[11] = 0;
	_$0[12] = 0;
	_$0[13] = 0;
	_$0[14] = 0;
	_$0[15] = m33;
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
	/** @type {Float32Array} */
	var a$0;
	/** @type {undefined|!number} */
	var a00$0;
	/** @type {undefined|!number} */
	var a10$0;
	/** @type {undefined|!number} */
	var a20$0;
	/** @type {undefined|!number} */
	var a30$0;
	/** @type {undefined|!number} */
	var a01$0;
	/** @type {undefined|!number} */
	var a11$0;
	/** @type {undefined|!number} */
	var a21$0;
	/** @type {undefined|!number} */
	var a31$0;
	/** @type {undefined|!number} */
	var a02$0;
	/** @type {undefined|!number} */
	var a12$0;
	/** @type {undefined|!number} */
	var a22$0;
	/** @type {undefined|!number} */
	var a32$0;
	/** @type {undefined|!number} */
	var a03$0;
	/** @type {undefined|!number} */
	var a13$0;
	/** @type {undefined|!number} */
	var a23$0;
	/** @type {undefined|!number} */
	var a33$0;
	/** @type {Float32Array} */
	var b$0;
	/** @type {undefined|!number} */
	var b00$0;
	/** @type {undefined|!number} */
	var b10$0;
	/** @type {undefined|!number} */
	var b20$0;
	/** @type {undefined|!number} */
	var b30$0;
	/** @type {undefined|!number} */
	var b01$0;
	/** @type {undefined|!number} */
	var b11$0;
	/** @type {undefined|!number} */
	var b21$0;
	/** @type {undefined|!number} */
	var b31$0;
	/** @type {undefined|!number} */
	var b02$0;
	/** @type {undefined|!number} */
	var b12$0;
	/** @type {undefined|!number} */
	var b22$0;
	/** @type {undefined|!number} */
	var b32$0;
	/** @type {undefined|!number} */
	var b03$0;
	/** @type {undefined|!number} */
	var b13$0;
	/** @type {undefined|!number} */
	var b23$0;
	/** @type {undefined|!number} */
	var b33$0;
	a$0 = $this._;
	(a00$0 = a$0[0], a10$0 = a$0[1], a20$0 = a$0[2], a30$0 = a$0[3]);
	(a01$0 = a$0[4], a11$0 = a$0[5], a21$0 = a$0[6], a31$0 = a$0[7]);
	(a02$0 = a$0[8], a12$0 = a$0[9], a22$0 = a$0[10], a32$0 = a$0[11]);
	(a03$0 = a$0[12], a13$0 = a$0[13], a23$0 = a$0[14], a33$0 = a$0[15]);
	b$0 = m._;
	(b00$0 = b$0[0], b10$0 = b$0[1], b20$0 = b$0[2], b30$0 = b$0[3]);
	(b01$0 = b$0[4], b11$0 = b$0[5], b21$0 = b$0[6], b31$0 = b$0[7]);
	(b02$0 = b$0[8], b12$0 = b$0[9], b22$0 = b$0[10], b32$0 = b$0[11]);
	(b03$0 = b$0[12], b13$0 = b$0[13], b23$0 = b$0[14], b33$0 = b$0[15]);
	a$0[0] = a00$0 * b00$0 + a01$0 * b10$0 + a02$0 * b20$0 + a03$0 * b30$0;
	a$0[1] = a10$0 * b00$0 + a11$0 * b10$0 + a12$0 * b20$0 + a13$0 * b30$0;
	a$0[2] = a20$0 * b00$0 + a21$0 * b10$0 + a22$0 * b20$0 + a23$0 * b30$0;
	a$0[3] = a30$0 * b00$0 + a31$0 * b10$0 + a32$0 * b20$0 + a33$0 * b30$0;
	a$0[4] = a00$0 * b01$0 + a01$0 * b11$0 + a02$0 * b21$0 + a03$0 * b31$0;
	a$0[5] = a10$0 * b01$0 + a11$0 * b11$0 + a12$0 * b21$0 + a13$0 * b31$0;
	a$0[6] = a20$0 * b01$0 + a21$0 * b11$0 + a22$0 * b21$0 + a23$0 * b31$0;
	a$0[7] = a30$0 * b01$0 + a31$0 * b11$0 + a32$0 * b21$0 + a33$0 * b31$0;
	a$0[8] = a00$0 * b02$0 + a01$0 * b12$0 + a02$0 * b22$0 + a03$0 * b32$0;
	a$0[9] = a10$0 * b02$0 + a11$0 * b12$0 + a12$0 * b22$0 + a13$0 * b32$0;
	a$0[10] = a20$0 * b02$0 + a21$0 * b12$0 + a22$0 * b22$0 + a23$0 * b32$0;
	a$0[11] = a30$0 * b02$0 + a31$0 * b12$0 + a32$0 * b22$0 + a33$0 * b32$0;
	a$0[12] = a00$0 * b03$0 + a01$0 * b13$0 + a02$0 * b23$0 + a03$0 * b33$0;
	a$0[13] = a10$0 * b03$0 + a11$0 * b13$0 + a12$0 * b23$0 + a13$0 * b33$0;
	a$0[14] = a20$0 * b03$0 + a21$0 * b13$0 + a22$0 * b23$0 + a23$0 * b33$0;
	a$0[15] = a30$0 * b03$0 + a31$0 * b13$0 + a32$0 * b23$0 + a33$0 * b33$0;
	return $this;
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
	M44$setIdentity$LM44$($this);
	$this._[12] = x$0;
	$this._[13] = y$0;
	$this._[14] = z$0;
	return $this;
};

var M44$setTranslate$LM44$LV3$ = M44.setTranslate$LM44$LV3$;

/**
 * @param {M44} $this
 * @param {Array.<undefined|!number>} v
 * @return {M44}
 */
M44.setTranslate$LM44$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$setIdentity$LM44$($this);
	$this._[12] = x$0;
	$this._[13] = y$0;
	$this._[14] = z$0;
	return $this;
};

var M44$setTranslate$LM44$AN = M44.setTranslate$LM44$AN;

/**
 * @param {M44} $this
 * @param {Float32Array} v
 * @return {M44}
 */
M44.setTranslate$LM44$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$setIdentity$LM44$($this);
	$this._[12] = x$0;
	$this._[13] = y$0;
	$this._[14] = z$0;
	return $this;
};

var M44$setTranslate$LM44$LFloat32Array$ = M44.setTranslate$LM44$LFloat32Array$;

/**
 * @param {M44} $this
 * @param {!number} s
 * @return {M44}
 */
M44.setScale$LM44$N = function ($this, s) {
	M44$setZero$LM44$($this);
	$this._[0] = s;
	$this._[5] = s;
	$this._[10] = s;
	$this._[15] = 1;
	return $this;
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
	M44$setZero$LM44$($this);
	$this._[0] = x$0;
	$this._[5] = y$0;
	$this._[10] = z$0;
	$this._[15] = 1;
	return $this;
};

var M44$setScale$LM44$LV3$ = M44.setScale$LM44$LV3$;

/**
 * @param {M44} $this
 * @param {Array.<undefined|!number>} v
 * @return {M44}
 */
M44.setScale$LM44$AN = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$setZero$LM44$($this);
	$this._[0] = x$0;
	$this._[5] = y$0;
	$this._[10] = z$0;
	$this._[15] = 1;
	return $this;
};

var M44$setScale$LM44$AN = M44.setScale$LM44$AN;

/**
 * @param {M44} $this
 * @param {Float32Array} v
 * @return {M44}
 */
M44.setScale$LM44$LFloat32Array$ = function ($this, v) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$setZero$LM44$($this);
	$this._[0] = x$0;
	$this._[5] = y$0;
	$this._[10] = z$0;
	$this._[15] = 1;
	return $this;
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
	this._[0] = w;
	this._[1] = x;
	this._[2] = y;
	this._[3] = z;
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
	$this._[0] = 0;
	$this._[1] = 0;
	$this._[2] = 0;
	$this._[3] = 0;
	return $this;
};

var Quat$setZero$LQuat$ = Quat.setZero$LQuat$;

/**
 * @param {Quat} $this
 * @return {Quat}
 */
Quat.setIdentity$LQuat$ = function ($this) {
	$this._[0] = 1;
	$this._[1] = 0;
	$this._[2] = 0;
	$this._[3] = 0;
	return $this;
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
	$this._[0] = w;
	$this._[1] = x$0;
	$this._[2] = y$0;
	$this._[3] = z$0;
	return $this;
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
	/** @type {Array.<undefined|!number>} */
	var m$0;
	/** @type {M44} */
	var m$1;
	/** @type {Float32Array} */
	var a$0$0;
	/** @type {undefined|!number} */
	var a00$0$0;
	/** @type {undefined|!number} */
	var a10$0$0;
	/** @type {undefined|!number} */
	var a20$0$0;
	/** @type {undefined|!number} */
	var a30$0$0;
	/** @type {undefined|!number} */
	var a01$0$0;
	/** @type {undefined|!number} */
	var a11$0$0;
	/** @type {undefined|!number} */
	var a21$0$0;
	/** @type {undefined|!number} */
	var a31$0$0;
	/** @type {undefined|!number} */
	var a02$0$0;
	/** @type {undefined|!number} */
	var a12$0$0;
	/** @type {undefined|!number} */
	var a22$0$0;
	/** @type {undefined|!number} */
	var a32$0$0;
	/** @type {undefined|!number} */
	var a03$0$0;
	/** @type {undefined|!number} */
	var a13$0$0;
	/** @type {undefined|!number} */
	var a23$0$0;
	/** @type {undefined|!number} */
	var a33$0$0;
	/** @type {Float32Array} */
	var b$0$0;
	/** @type {undefined|!number} */
	var b00$0$0;
	/** @type {undefined|!number} */
	var b10$0$0;
	/** @type {undefined|!number} */
	var b20$0$0;
	/** @type {undefined|!number} */
	var b30$0$0;
	/** @type {undefined|!number} */
	var b01$0$0;
	/** @type {undefined|!number} */
	var b11$0$0;
	/** @type {undefined|!number} */
	var b21$0$0;
	/** @type {undefined|!number} */
	var b31$0$0;
	/** @type {undefined|!number} */
	var b02$0$0;
	/** @type {undefined|!number} */
	var b12$0$0;
	/** @type {undefined|!number} */
	var b22$0$0;
	/** @type {undefined|!number} */
	var b32$0$0;
	/** @type {undefined|!number} */
	var b03$0$0;
	/** @type {undefined|!number} */
	var b13$0$0;
	/** @type {undefined|!number} */
	var b23$0$0;
	/** @type {undefined|!number} */
	var b33$0$0;
	/** @type {Float32Array} */
	var a$0$1;
	/** @type {undefined|!number} */
	var a00$0$1;
	/** @type {undefined|!number} */
	var a10$0$1;
	/** @type {undefined|!number} */
	var a20$0$1;
	/** @type {undefined|!number} */
	var a30$0$1;
	/** @type {undefined|!number} */
	var a01$0$1;
	/** @type {undefined|!number} */
	var a11$0$1;
	/** @type {undefined|!number} */
	var a21$0$1;
	/** @type {undefined|!number} */
	var a31$0$1;
	/** @type {undefined|!number} */
	var a02$0$1;
	/** @type {undefined|!number} */
	var a12$0$1;
	/** @type {undefined|!number} */
	var a22$0$1;
	/** @type {undefined|!number} */
	var a32$0$1;
	/** @type {undefined|!number} */
	var a03$0$1;
	/** @type {undefined|!number} */
	var a13$0$1;
	/** @type {undefined|!number} */
	var a23$0$1;
	/** @type {undefined|!number} */
	var a33$0$1;
	/** @type {Float32Array} */
	var b$0$1;
	/** @type {undefined|!number} */
	var b00$0$1;
	/** @type {undefined|!number} */
	var b10$0$1;
	/** @type {undefined|!number} */
	var b20$0$1;
	/** @type {undefined|!number} */
	var b30$0$1;
	/** @type {undefined|!number} */
	var b01$0$1;
	/** @type {undefined|!number} */
	var b11$0$1;
	/** @type {undefined|!number} */
	var b21$0$1;
	/** @type {undefined|!number} */
	var b31$0$1;
	/** @type {undefined|!number} */
	var b02$0$1;
	/** @type {undefined|!number} */
	var b12$0$1;
	/** @type {undefined|!number} */
	var b22$0$1;
	/** @type {undefined|!number} */
	var b32$0$1;
	/** @type {undefined|!number} */
	var b03$0$1;
	/** @type {undefined|!number} */
	var b13$0$1;
	/** @type {undefined|!number} */
	var b23$0$1;
	/** @type {undefined|!number} */
	var b33$0$1;
	/** @type {Float32Array} */
	var a$0$2;
	/** @type {undefined|!number} */
	var a00$0$2;
	/** @type {undefined|!number} */
	var a10$0$2;
	/** @type {undefined|!number} */
	var a20$0$2;
	/** @type {undefined|!number} */
	var a30$0$2;
	/** @type {undefined|!number} */
	var a01$0$2;
	/** @type {undefined|!number} */
	var a11$0$2;
	/** @type {undefined|!number} */
	var a21$0$2;
	/** @type {undefined|!number} */
	var a31$0$2;
	/** @type {undefined|!number} */
	var a02$0$2;
	/** @type {undefined|!number} */
	var a12$0$2;
	/** @type {undefined|!number} */
	var a22$0$2;
	/** @type {undefined|!number} */
	var a32$0$2;
	/** @type {undefined|!number} */
	var a03$0$2;
	/** @type {undefined|!number} */
	var a13$0$2;
	/** @type {undefined|!number} */
	var a23$0$2;
	/** @type {undefined|!number} */
	var a33$0$2;
	/** @type {Float32Array} */
	var b$0$2;
	/** @type {undefined|!number} */
	var b00$0$2;
	/** @type {undefined|!number} */
	var b10$0$2;
	/** @type {undefined|!number} */
	var b20$0$2;
	/** @type {undefined|!number} */
	var b30$0$2;
	/** @type {undefined|!number} */
	var b01$0$2;
	/** @type {undefined|!number} */
	var b11$0$2;
	/** @type {undefined|!number} */
	var b21$0$2;
	/** @type {undefined|!number} */
	var b31$0$2;
	/** @type {undefined|!number} */
	var b02$0$2;
	/** @type {undefined|!number} */
	var b12$0$2;
	/** @type {undefined|!number} */
	var b22$0$2;
	/** @type {undefined|!number} */
	var b32$0$2;
	/** @type {undefined|!number} */
	var b03$0$2;
	/** @type {undefined|!number} */
	var b13$0$2;
	/** @type {undefined|!number} */
	var b23$0$2;
	/** @type {undefined|!number} */
	var b33$0$2;
	/** @type {M44} */
	var this$1;
	/** @type {Float32Array} */
	var a$0$3;
	/** @type {undefined|!number} */
	var a00$0$3;
	/** @type {undefined|!number} */
	var a10$0$3;
	/** @type {undefined|!number} */
	var a20$0$3;
	/** @type {undefined|!number} */
	var a30$0$3;
	/** @type {undefined|!number} */
	var a01$0$3;
	/** @type {undefined|!number} */
	var a11$0$3;
	/** @type {undefined|!number} */
	var a21$0$3;
	/** @type {undefined|!number} */
	var a31$0$3;
	/** @type {undefined|!number} */
	var a02$0$3;
	/** @type {undefined|!number} */
	var a12$0$3;
	/** @type {undefined|!number} */
	var a22$0$3;
	/** @type {undefined|!number} */
	var a32$0$3;
	/** @type {undefined|!number} */
	var a03$0$3;
	/** @type {undefined|!number} */
	var a13$0$3;
	/** @type {undefined|!number} */
	var a23$0$3;
	/** @type {undefined|!number} */
	var a33$0$3;
	/** @type {Float32Array} */
	var b$0$3;
	/** @type {undefined|!number} */
	var b00$0$3;
	/** @type {undefined|!number} */
	var b10$0$3;
	/** @type {undefined|!number} */
	var b20$0$3;
	/** @type {undefined|!number} */
	var b30$0$3;
	/** @type {undefined|!number} */
	var b01$0$3;
	/** @type {undefined|!number} */
	var b11$0$3;
	/** @type {undefined|!number} */
	var b21$0$3;
	/** @type {undefined|!number} */
	var b31$0$3;
	/** @type {undefined|!number} */
	var b02$0$3;
	/** @type {undefined|!number} */
	var b12$0$3;
	/** @type {undefined|!number} */
	var b22$0$3;
	/** @type {undefined|!number} */
	var b32$0$3;
	/** @type {undefined|!number} */
	var b03$0$3;
	/** @type {undefined|!number} */
	var b13$0$3;
	/** @type {undefined|!number} */
	var b23$0$3;
	/** @type {undefined|!number} */
	var b33$0$3;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var this$4;
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
	a$0$0 = m._;
	(a00$0$0 = a$0$0[0], a10$0$0 = a$0$0[1], a20$0$0 = a$0$0[2], a30$0$0 = a$0$0[3]);
	(a01$0$0 = a$0$0[4], a11$0$0 = a$0$0[5], a21$0$0 = a$0$0[6], a31$0$0 = a$0$0[7]);
	(a02$0$0 = a$0$0[8], a12$0$0 = a$0$0[9], a22$0$0 = a$0$0[10], a32$0$0 = a$0$0[11]);
	(a03$0$0 = a$0$0[12], a13$0$0 = a$0$0[13], a23$0$0 = a$0$0[14], a33$0$0 = a$0$0[15]);
	b$0$0 = m$1._;
	(b00$0$0 = b$0$0[0], b10$0$0 = b$0$0[1], b20$0$0 = b$0$0[2], b30$0$0 = b$0$0[3]);
	(b01$0$0 = b$0$0[4], b11$0$0 = b$0$0[5], b21$0$0 = b$0$0[6], b31$0$0 = b$0$0[7]);
	(b02$0$0 = b$0$0[8], b12$0$0 = b$0$0[9], b22$0$0 = b$0$0[10], b32$0$0 = b$0$0[11]);
	(b03$0$0 = b$0$0[12], b13$0$0 = b$0$0[13], b23$0$0 = b$0$0[14], b33$0$0 = b$0$0[15]);
	a$0$0[0] = a00$0$0 * b00$0$0 + a01$0$0 * b10$0$0 + a02$0$0 * b20$0$0 + a03$0$0 * b30$0$0;
	a$0$0[1] = a10$0$0 * b00$0$0 + a11$0$0 * b10$0$0 + a12$0$0 * b20$0$0 + a13$0$0 * b30$0$0;
	a$0$0[2] = a20$0$0 * b00$0$0 + a21$0$0 * b10$0$0 + a22$0$0 * b20$0$0 + a23$0$0 * b30$0$0;
	a$0$0[3] = a30$0$0 * b00$0$0 + a31$0$0 * b10$0$0 + a32$0$0 * b20$0$0 + a33$0$0 * b30$0$0;
	a$0$0[4] = a00$0$0 * b01$0$0 + a01$0$0 * b11$0$0 + a02$0$0 * b21$0$0 + a03$0$0 * b31$0$0;
	a$0$0[5] = a10$0$0 * b01$0$0 + a11$0$0 * b11$0$0 + a12$0$0 * b21$0$0 + a13$0$0 * b31$0$0;
	a$0$0[6] = a20$0$0 * b01$0$0 + a21$0$0 * b11$0$0 + a22$0$0 * b21$0$0 + a23$0$0 * b31$0$0;
	a$0$0[7] = a30$0$0 * b01$0$0 + a31$0$0 * b11$0$0 + a32$0$0 * b21$0$0 + a33$0$0 * b31$0$0;
	a$0$0[8] = a00$0$0 * b02$0$0 + a01$0$0 * b12$0$0 + a02$0$0 * b22$0$0 + a03$0$0 * b32$0$0;
	a$0$0[9] = a10$0$0 * b02$0$0 + a11$0$0 * b12$0$0 + a12$0$0 * b22$0$0 + a13$0$0 * b32$0$0;
	a$0$0[10] = a20$0$0 * b02$0$0 + a21$0$0 * b12$0$0 + a22$0$0 * b22$0$0 + a23$0$0 * b32$0$0;
	a$0$0[11] = a30$0$0 * b02$0$0 + a31$0$0 * b12$0$0 + a32$0$0 * b22$0$0 + a33$0$0 * b32$0$0;
	a$0$0[12] = a00$0$0 * b03$0$0 + a01$0$0 * b13$0$0 + a02$0$0 * b23$0$0 + a03$0$0 * b33$0$0;
	a$0$0[13] = a10$0$0 * b03$0$0 + a11$0$0 * b13$0$0 + a12$0$0 * b23$0$0 + a13$0$0 * b33$0$0;
	a$0$0[14] = a20$0$0 * b03$0$0 + a21$0$0 * b13$0$0 + a22$0$0 * b23$0$0 + a23$0$0 * b33$0$0;
	a$0$0[15] = a30$0$0 * b03$0$0 + a31$0$0 * b13$0$0 + a32$0$0 * b23$0$0 + a33$0$0 * b33$0$0;
	this$3 = {_: new Float32Array(16)};
	M44$setIdentity$LM44$(this$3);
	this$3._[12] = 1;
	this$3._[13] = 2;
	this$3._[14] = 3;
	a$0$1 = this$3._;
	(a00$0$1 = a$0$1[0], a10$0$1 = a$0$1[1], a20$0$1 = a$0$1[2], a30$0$1 = a$0$1[3]);
	(a01$0$1 = a$0$1[4], a11$0$1 = a$0$1[5], a21$0$1 = a$0$1[6], a31$0$1 = a$0$1[7]);
	(a02$0$1 = a$0$1[8], a12$0$1 = a$0$1[9], a22$0$1 = a$0$1[10], a32$0$1 = a$0$1[11]);
	(a03$0$1 = a$0$1[12], a13$0$1 = a$0$1[13], a23$0$1 = a$0$1[14], a33$0$1 = a$0$1[15]);
	b$0$1 = m._;
	(b00$0$1 = b$0$1[0], b10$0$1 = b$0$1[1], b20$0$1 = b$0$1[2], b30$0$1 = b$0$1[3]);
	(b01$0$1 = b$0$1[4], b11$0$1 = b$0$1[5], b21$0$1 = b$0$1[6], b31$0$1 = b$0$1[7]);
	(b02$0$1 = b$0$1[8], b12$0$1 = b$0$1[9], b22$0$1 = b$0$1[10], b32$0$1 = b$0$1[11]);
	(b03$0$1 = b$0$1[12], b13$0$1 = b$0$1[13], b23$0$1 = b$0$1[14], b33$0$1 = b$0$1[15]);
	a$0$1[0] = a00$0$1 * b00$0$1 + a01$0$1 * b10$0$1 + a02$0$1 * b20$0$1 + a03$0$1 * b30$0$1;
	a$0$1[1] = a10$0$1 * b00$0$1 + a11$0$1 * b10$0$1 + a12$0$1 * b20$0$1 + a13$0$1 * b30$0$1;
	a$0$1[2] = a20$0$1 * b00$0$1 + a21$0$1 * b10$0$1 + a22$0$1 * b20$0$1 + a23$0$1 * b30$0$1;
	a$0$1[3] = a30$0$1 * b00$0$1 + a31$0$1 * b10$0$1 + a32$0$1 * b20$0$1 + a33$0$1 * b30$0$1;
	a$0$1[4] = a00$0$1 * b01$0$1 + a01$0$1 * b11$0$1 + a02$0$1 * b21$0$1 + a03$0$1 * b31$0$1;
	a$0$1[5] = a10$0$1 * b01$0$1 + a11$0$1 * b11$0$1 + a12$0$1 * b21$0$1 + a13$0$1 * b31$0$1;
	a$0$1[6] = a20$0$1 * b01$0$1 + a21$0$1 * b11$0$1 + a22$0$1 * b21$0$1 + a23$0$1 * b31$0$1;
	a$0$1[7] = a30$0$1 * b01$0$1 + a31$0$1 * b11$0$1 + a32$0$1 * b21$0$1 + a33$0$1 * b31$0$1;
	a$0$1[8] = a00$0$1 * b02$0$1 + a01$0$1 * b12$0$1 + a02$0$1 * b22$0$1 + a03$0$1 * b32$0$1;
	a$0$1[9] = a10$0$1 * b02$0$1 + a11$0$1 * b12$0$1 + a12$0$1 * b22$0$1 + a13$0$1 * b32$0$1;
	a$0$1[10] = a20$0$1 * b02$0$1 + a21$0$1 * b12$0$1 + a22$0$1 * b22$0$1 + a23$0$1 * b32$0$1;
	a$0$1[11] = a30$0$1 * b02$0$1 + a31$0$1 * b12$0$1 + a32$0$1 * b22$0$1 + a33$0$1 * b32$0$1;
	a$0$1[12] = a00$0$1 * b03$0$1 + a01$0$1 * b13$0$1 + a02$0$1 * b23$0$1 + a03$0$1 * b33$0$1;
	a$0$1[13] = a10$0$1 * b03$0$1 + a11$0$1 * b13$0$1 + a12$0$1 * b23$0$1 + a13$0$1 * b33$0$1;
	a$0$1[14] = a20$0$1 * b03$0$1 + a21$0$1 * b13$0$1 + a22$0$1 * b23$0$1 + a23$0$1 * b33$0$1;
	a$0$1[15] = a30$0$1 * b03$0$1 + a31$0$1 * b13$0$1 + a32$0$1 * b23$0$1 + a33$0$1 * b33$0$1;
	m = this$3;
	this$4 = {_: new Float32Array(16)};
	M44$setZero$LM44$(this$4);
	this$4._[0] = 100;
	this$4._[5] = 100;
	this$4._[10] = 100;
	this$4._[15] = 1;
	a$0$2 = m._;
	(a00$0$2 = a$0$2[0], a10$0$2 = a$0$2[1], a20$0$2 = a$0$2[2], a30$0$2 = a$0$2[3]);
	(a01$0$2 = a$0$2[4], a11$0$2 = a$0$2[5], a21$0$2 = a$0$2[6], a31$0$2 = a$0$2[7]);
	(a02$0$2 = a$0$2[8], a12$0$2 = a$0$2[9], a22$0$2 = a$0$2[10], a32$0$2 = a$0$2[11]);
	(a03$0$2 = a$0$2[12], a13$0$2 = a$0$2[13], a23$0$2 = a$0$2[14], a33$0$2 = a$0$2[15]);
	b$0$2 = this$4._;
	(b00$0$2 = b$0$2[0], b10$0$2 = b$0$2[1], b20$0$2 = b$0$2[2], b30$0$2 = b$0$2[3]);
	(b01$0$2 = b$0$2[4], b11$0$2 = b$0$2[5], b21$0$2 = b$0$2[6], b31$0$2 = b$0$2[7]);
	(b02$0$2 = b$0$2[8], b12$0$2 = b$0$2[9], b22$0$2 = b$0$2[10], b32$0$2 = b$0$2[11]);
	(b03$0$2 = b$0$2[12], b13$0$2 = b$0$2[13], b23$0$2 = b$0$2[14], b33$0$2 = b$0$2[15]);
	a$0$2[0] = a00$0$2 * b00$0$2 + a01$0$2 * b10$0$2 + a02$0$2 * b20$0$2 + a03$0$2 * b30$0$2;
	a$0$2[1] = a10$0$2 * b00$0$2 + a11$0$2 * b10$0$2 + a12$0$2 * b20$0$2 + a13$0$2 * b30$0$2;
	a$0$2[2] = a20$0$2 * b00$0$2 + a21$0$2 * b10$0$2 + a22$0$2 * b20$0$2 + a23$0$2 * b30$0$2;
	a$0$2[3] = a30$0$2 * b00$0$2 + a31$0$2 * b10$0$2 + a32$0$2 * b20$0$2 + a33$0$2 * b30$0$2;
	a$0$2[4] = a00$0$2 * b01$0$2 + a01$0$2 * b11$0$2 + a02$0$2 * b21$0$2 + a03$0$2 * b31$0$2;
	a$0$2[5] = a10$0$2 * b01$0$2 + a11$0$2 * b11$0$2 + a12$0$2 * b21$0$2 + a13$0$2 * b31$0$2;
	a$0$2[6] = a20$0$2 * b01$0$2 + a21$0$2 * b11$0$2 + a22$0$2 * b21$0$2 + a23$0$2 * b31$0$2;
	a$0$2[7] = a30$0$2 * b01$0$2 + a31$0$2 * b11$0$2 + a32$0$2 * b21$0$2 + a33$0$2 * b31$0$2;
	a$0$2[8] = a00$0$2 * b02$0$2 + a01$0$2 * b12$0$2 + a02$0$2 * b22$0$2 + a03$0$2 * b32$0$2;
	a$0$2[9] = a10$0$2 * b02$0$2 + a11$0$2 * b12$0$2 + a12$0$2 * b22$0$2 + a13$0$2 * b32$0$2;
	a$0$2[10] = a20$0$2 * b02$0$2 + a21$0$2 * b12$0$2 + a22$0$2 * b22$0$2 + a23$0$2 * b32$0$2;
	a$0$2[11] = a30$0$2 * b02$0$2 + a31$0$2 * b12$0$2 + a32$0$2 * b22$0$2 + a33$0$2 * b32$0$2;
	a$0$2[12] = a00$0$2 * b03$0$2 + a01$0$2 * b13$0$2 + a02$0$2 * b23$0$2 + a03$0$2 * b33$0$2;
	a$0$2[13] = a10$0$2 * b03$0$2 + a11$0$2 * b13$0$2 + a12$0$2 * b23$0$2 + a13$0$2 * b33$0$2;
	a$0$2[14] = a20$0$2 * b03$0$2 + a21$0$2 * b13$0$2 + a22$0$2 * b23$0$2 + a23$0$2 * b33$0$2;
	a$0$2[15] = a30$0$2 * b03$0$2 + a31$0$2 * b13$0$2 + a32$0$2 * b23$0$2 + a33$0$2 * b33$0$2;
	im = M44$inverse$LM44$(new M44$LM44$(m));
	_Main$dump$LM44$(m);
	_Main$dump$LM44$(im);
	this$1 = new M44$LM44$(m);
	a$0$3 = this$1._;
	(a00$0$3 = a$0$3[0], a10$0$3 = a$0$3[1], a20$0$3 = a$0$3[2], a30$0$3 = a$0$3[3]);
	(a01$0$3 = a$0$3[4], a11$0$3 = a$0$3[5], a21$0$3 = a$0$3[6], a31$0$3 = a$0$3[7]);
	(a02$0$3 = a$0$3[8], a12$0$3 = a$0$3[9], a22$0$3 = a$0$3[10], a32$0$3 = a$0$3[11]);
	(a03$0$3 = a$0$3[12], a13$0$3 = a$0$3[13], a23$0$3 = a$0$3[14], a33$0$3 = a$0$3[15]);
	b$0$3 = im._;
	(b00$0$3 = b$0$3[0], b10$0$3 = b$0$3[1], b20$0$3 = b$0$3[2], b30$0$3 = b$0$3[3]);
	(b01$0$3 = b$0$3[4], b11$0$3 = b$0$3[5], b21$0$3 = b$0$3[6], b31$0$3 = b$0$3[7]);
	(b02$0$3 = b$0$3[8], b12$0$3 = b$0$3[9], b22$0$3 = b$0$3[10], b32$0$3 = b$0$3[11]);
	(b03$0$3 = b$0$3[12], b13$0$3 = b$0$3[13], b23$0$3 = b$0$3[14], b33$0$3 = b$0$3[15]);
	a$0$3[0] = a00$0$3 * b00$0$3 + a01$0$3 * b10$0$3 + a02$0$3 * b20$0$3 + a03$0$3 * b30$0$3;
	a$0$3[1] = a10$0$3 * b00$0$3 + a11$0$3 * b10$0$3 + a12$0$3 * b20$0$3 + a13$0$3 * b30$0$3;
	a$0$3[2] = a20$0$3 * b00$0$3 + a21$0$3 * b10$0$3 + a22$0$3 * b20$0$3 + a23$0$3 * b30$0$3;
	a$0$3[3] = a30$0$3 * b00$0$3 + a31$0$3 * b10$0$3 + a32$0$3 * b20$0$3 + a33$0$3 * b30$0$3;
	a$0$3[4] = a00$0$3 * b01$0$3 + a01$0$3 * b11$0$3 + a02$0$3 * b21$0$3 + a03$0$3 * b31$0$3;
	a$0$3[5] = a10$0$3 * b01$0$3 + a11$0$3 * b11$0$3 + a12$0$3 * b21$0$3 + a13$0$3 * b31$0$3;
	a$0$3[6] = a20$0$3 * b01$0$3 + a21$0$3 * b11$0$3 + a22$0$3 * b21$0$3 + a23$0$3 * b31$0$3;
	a$0$3[7] = a30$0$3 * b01$0$3 + a31$0$3 * b11$0$3 + a32$0$3 * b21$0$3 + a33$0$3 * b31$0$3;
	a$0$3[8] = a00$0$3 * b02$0$3 + a01$0$3 * b12$0$3 + a02$0$3 * b22$0$3 + a03$0$3 * b32$0$3;
	a$0$3[9] = a10$0$3 * b02$0$3 + a11$0$3 * b12$0$3 + a12$0$3 * b22$0$3 + a13$0$3 * b32$0$3;
	a$0$3[10] = a20$0$3 * b02$0$3 + a21$0$3 * b12$0$3 + a22$0$3 * b22$0$3 + a23$0$3 * b32$0$3;
	a$0$3[11] = a30$0$3 * b02$0$3 + a31$0$3 * b12$0$3 + a32$0$3 * b22$0$3 + a33$0$3 * b32$0$3;
	a$0$3[12] = a00$0$3 * b03$0$3 + a01$0$3 * b13$0$3 + a02$0$3 * b23$0$3 + a03$0$3 * b33$0$3;
	a$0$3[13] = a10$0$3 * b03$0$3 + a11$0$3 * b13$0$3 + a12$0$3 * b23$0$3 + a13$0$3 * b33$0$3;
	a$0$3[14] = a20$0$3 * b03$0$3 + a21$0$3 * b13$0$3 + a22$0$3 * b23$0$3 + a23$0$3 * b33$0$3;
	a$0$3[15] = a30$0$3 * b03$0$3 + a31$0$3 * b13$0$3 + a32$0$3 * b23$0$3 + a33$0$3 * b33$0$3;
	_Main$dump$LM44$(this$1);
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
	/** @type {WebGLRenderingContext} */
	var gl$0;
	/** @type {WebGLBuffer} */
	var buf$0;
	gl$0 = Kingyo.gl;
	buf$0 = gl$0.createBuffer();
	gl$0.bindBuffer(gl$0.ARRAY_BUFFER, buf$0);
	gl$0.bufferData(gl$0.ARRAY_BUFFER, new Float32Array(v), gl$0.STATIC_DRAW);
	$this.vbuf = buf$0;
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
	/** @type {WebGLRenderingContext} */
	var gl$0;
	/** @type {WebGLBuffer} */
	var buf$0;
	gl$0 = Kingyo.gl;
	buf$0 = gl$0.createBuffer();
	gl$0.bindBuffer(gl$0.ARRAY_BUFFER, buf$0);
	gl$0.bufferData(gl$0.ARRAY_BUFFER, new Float32Array(n), gl$0.STATIC_DRAW);
	$this.nbuf = buf$0;
	return $this;
};

var _Part$setNormal$L_Part$AN = _Part.setNormal$L_Part$AN;

/**
 * @param {_Part} $this
 * @param {Array.<undefined|!number>} i
 * @return {_Part}
 */
_Part.setIndex$L_Part$AI = function ($this, i) {
	/** @type {WebGLRenderingContext} */
	var gl$0;
	/** @type {WebGLBuffer} */
	var buf$0;
	gl$0 = Kingyo.gl;
	buf$0 = gl$0.createBuffer();
	gl$0.bindBuffer(gl$0.ELEMENT_ARRAY_BUFFER, buf$0);
	gl$0.bufferData(gl$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i), gl$0.STATIC_DRAW);
	$this.ibuf = buf$0;
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
	/** @type {!number} */
	var r$0;
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {V3} */
	var this$0$0;
	/** @type {!number} */
	var z$0$0;
	/** @type {V3} */
	var this$1$0;
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
	this._vangle = Math.random() * 2 * 3.141592653589793;
	this._velo = Math.random() * 15 + 1;
	r$0 = 8 * Math.random();
	x$0 = r$0 * Math.cos(this._vangle);
	y$0 = r$0 * Math.sin(this._vangle);
	this$0$0 = this._pos;
	z$0$0 = -2 - Math.random() * 3;
	this$0$0._[0] = x$0;
	this$0$0._[1] = y$0;
	this$0$0._[2] = z$0$0;
	this._anim = 0;
	this._state = 'swimming';
	M44$setIdentity$LM44$(this._spinMat);
	this$1$0 = this._spinAxis;
	this$1$0._[0] = 0;
	this$1$0._[1] = 0;
	this$1$0._[2] = 0;
	this._spinSpeed = 0;
	this._vz = 0;
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
	/** @type {WebGLRenderingContext} */
	var gl$0$0;
	/** @type {WebGLBuffer} */
	var buf$0$0;
	/** @type {_Part} */
	var this$1;
	/** @type {Array.<undefined|!number>} */
	var i$1;
	/** @type {WebGLRenderingContext} */
	var gl$0$1;
	/** @type {WebGLBuffer} */
	var buf$0$1;
	/** @type {_Part} */
	var this$2;
	/** @type {Array.<undefined|!number>} */
	var i$2;
	/** @type {WebGLRenderingContext} */
	var gl$0$2;
	/** @type {WebGLBuffer} */
	var buf$0$2;
	/** @type {_Part} */
	var this$3;
	/** @type {Array.<undefined|!number>} */
	var i$3;
	/** @type {WebGLRenderingContext} */
	var gl$0$3;
	/** @type {WebGLBuffer} */
	var buf$0$3;
	/** @type {_Part} */
	var this$4;
	/** @type {Array.<undefined|!number>} */
	var i$4;
	/** @type {WebGLRenderingContext} */
	var gl$0$4;
	/** @type {WebGLBuffer} */
	var buf$0$4;
	/** @type {_Part} */
	var this$5;
	/** @type {Array.<undefined|!number>} */
	var i$5;
	/** @type {WebGLRenderingContext} */
	var gl$0$5;
	/** @type {WebGLBuffer} */
	var buf$0$5;
	/** @type {_Part} */
	var this$6;
	/** @type {Array.<undefined|!number>} */
	var n$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$6;
	/** @type {WebGLBuffer} */
	var buf$0$6;
	/** @type {_Part} */
	var this$7;
	/** @type {Array.<undefined|!number>} */
	var n$1;
	/** @type {WebGLRenderingContext} */
	var gl$0$7;
	/** @type {WebGLBuffer} */
	var buf$0$7;
	/** @type {_Part} */
	var this$8;
	/** @type {Array.<undefined|!number>} */
	var n$2;
	/** @type {WebGLRenderingContext} */
	var gl$0$8;
	/** @type {WebGLBuffer} */
	var buf$0$8;
	/** @type {_Part} */
	var this$9;
	/** @type {Array.<undefined|!number>} */
	var n$3;
	/** @type {WebGLRenderingContext} */
	var gl$0$9;
	/** @type {WebGLBuffer} */
	var buf$0$9;
	/** @type {_Part} */
	var this$10;
	/** @type {Array.<undefined|!number>} */
	var n$4;
	/** @type {WebGLRenderingContext} */
	var gl$0$10;
	/** @type {WebGLBuffer} */
	var buf$0$10;
	/** @type {_Part} */
	var this$11;
	/** @type {Array.<undefined|!number>} */
	var v$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$11;
	/** @type {WebGLBuffer} */
	var buf$0$11;
	/** @type {_Part} */
	var this$12;
	/** @type {Array.<undefined|!number>} */
	var v$1;
	/** @type {WebGLRenderingContext} */
	var gl$0$12;
	/** @type {WebGLBuffer} */
	var buf$0$12;
	/** @type {_Part} */
	var this$13;
	/** @type {Array.<undefined|!number>} */
	var v$2;
	/** @type {WebGLRenderingContext} */
	var gl$0$13;
	/** @type {WebGLBuffer} */
	var buf$0$13;
	/** @type {_Part} */
	var this$14;
	/** @type {Array.<undefined|!number>} */
	var v$3;
	/** @type {WebGLRenderingContext} */
	var gl$0$14;
	/** @type {WebGLBuffer} */
	var buf$0$14;
	/** @type {_Part} */
	var this$15;
	/** @type {Array.<undefined|!number>} */
	var v$4;
	/** @type {WebGLRenderingContext} */
	var gl$0$15;
	/** @type {WebGLBuffer} */
	var buf$0$15;
	/** @type {_Part} */
	var this$16;
	/** @type {Array.<undefined|!number>} */
	var v$5;
	/** @type {WebGLRenderingContext} */
	var gl$0$16;
	/** @type {WebGLBuffer} */
	var buf$0$16;
	Kingyo.gl = gl;
	Kingyo.prog = Util$getProgram$SS('kbody.vs', 'kbody.fs');
	this$12 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$1 = [ 0, 0, 1, 0.7, 0, 0, 0, 1, 0, -0.7, 0, 0, 0, -1, 0, 0, 0, -1 ];
	gl$0$12 = Kingyo.gl;
	buf$0$12 = gl$0$12.createBuffer();
	gl$0$12.bindBuffer(gl$0$12.ARRAY_BUFFER, buf$0$12);
	gl$0$12.bufferData(gl$0$12.ARRAY_BUFFER, new Float32Array(v$1), gl$0$12.STATIC_DRAW);
	this$12.vbuf = buf$0$12;
	this$12.numv = (v$1.length / 3 | 0);
	this$6 = this$12;
	n$0 = [ 0, 0, 1, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1 ];
	gl$0$6 = Kingyo.gl;
	buf$0$6 = gl$0$6.createBuffer();
	gl$0$6.bindBuffer(gl$0$6.ARRAY_BUFFER, buf$0$6);
	gl$0$6.bufferData(gl$0$6.ARRAY_BUFFER, new Float32Array(n$0), gl$0$6.STATIC_DRAW);
	this$6.nbuf = buf$0$6;
	this$0 = this$6;
	i$0 = [ 0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 5, 2, 1, 5, 3, 2, 5, 4, 3, 5, 1, 4 ];
	gl$0$0 = Kingyo.gl;
	buf$0$0 = gl$0$0.createBuffer();
	gl$0$0.bindBuffer(gl$0$0.ELEMENT_ARRAY_BUFFER, buf$0$0);
	gl$0$0.bufferData(gl$0$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$0), gl$0$0.STATIC_DRAW);
	this$0.ibuf = buf$0$0;
	this$0.numi = (i$0.length | 0);
	Kingyo.body = this$0;
	this$13 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$2 = [ 0, 0, 0, 0.5, -0.25, 0, 0.8, 0.25, 0 ];
	gl$0$13 = Kingyo.gl;
	buf$0$13 = gl$0$13.createBuffer();
	gl$0$13.bindBuffer(gl$0$13.ARRAY_BUFFER, buf$0$13);
	gl$0$13.bufferData(gl$0$13.ARRAY_BUFFER, new Float32Array(v$2), gl$0$13.STATIC_DRAW);
	this$13.vbuf = buf$0$13;
	this$13.numv = (v$2.length / 3 | 0);
	this$7 = this$13;
	n$1 = [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ];
	gl$0$7 = Kingyo.gl;
	buf$0$7 = gl$0$7.createBuffer();
	gl$0$7.bindBuffer(gl$0$7.ARRAY_BUFFER, buf$0$7);
	gl$0$7.bufferData(gl$0$7.ARRAY_BUFFER, new Float32Array(n$1), gl$0$7.STATIC_DRAW);
	this$7.nbuf = buf$0$7;
	this$1 = this$7;
	i$1 = [ 0, 1, 2 ];
	gl$0$1 = Kingyo.gl;
	buf$0$1 = gl$0$1.createBuffer();
	gl$0$1.bindBuffer(gl$0$1.ELEMENT_ARRAY_BUFFER, buf$0$1);
	gl$0$1.bufferData(gl$0$1.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$1), gl$0$1.STATIC_DRAW);
	this$1.ibuf = buf$0$1;
	this$1.numi = (i$1.length | 0);
	Kingyo.lfin = this$1;
	this$14 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$3 = [ 0, 0, 0, -0.8, 0.25, 0, -0.5, -0.25, 0 ];
	gl$0$14 = Kingyo.gl;
	buf$0$14 = gl$0$14.createBuffer();
	gl$0$14.bindBuffer(gl$0$14.ARRAY_BUFFER, buf$0$14);
	gl$0$14.bufferData(gl$0$14.ARRAY_BUFFER, new Float32Array(v$3), gl$0$14.STATIC_DRAW);
	this$14.vbuf = buf$0$14;
	this$14.numv = (v$3.length / 3 | 0);
	this$8 = this$14;
	n$2 = [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ];
	gl$0$8 = Kingyo.gl;
	buf$0$8 = gl$0$8.createBuffer();
	gl$0$8.bindBuffer(gl$0$8.ARRAY_BUFFER, buf$0$8);
	gl$0$8.bufferData(gl$0$8.ARRAY_BUFFER, new Float32Array(n$2), gl$0$8.STATIC_DRAW);
	this$8.nbuf = buf$0$8;
	this$2 = this$8;
	i$2 = [ 0, 1, 2 ];
	gl$0$2 = Kingyo.gl;
	buf$0$2 = gl$0$2.createBuffer();
	gl$0$2.bindBuffer(gl$0$2.ELEMENT_ARRAY_BUFFER, buf$0$2);
	gl$0$2.bufferData(gl$0$2.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$2), gl$0$2.STATIC_DRAW);
	this$2.ibuf = buf$0$2;
	this$2.numi = (i$2.length | 0);
	Kingyo.rfin = this$2;
	this$15 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$4 = [ 0, 0, 0, 0, -0.5, -1, 0, 0.5, -0.8 ];
	gl$0$15 = Kingyo.gl;
	buf$0$15 = gl$0$15.createBuffer();
	gl$0$15.bindBuffer(gl$0$15.ARRAY_BUFFER, buf$0$15);
	gl$0$15.bufferData(gl$0$15.ARRAY_BUFFER, new Float32Array(v$4), gl$0$15.STATIC_DRAW);
	this$15.vbuf = buf$0$15;
	this$15.numv = (v$4.length / 3 | 0);
	this$9 = this$15;
	n$3 = [ 1, 0, 0, 1, 0, 0, 1, 0, 0 ];
	gl$0$9 = Kingyo.gl;
	buf$0$9 = gl$0$9.createBuffer();
	gl$0$9.bindBuffer(gl$0$9.ARRAY_BUFFER, buf$0$9);
	gl$0$9.bufferData(gl$0$9.ARRAY_BUFFER, new Float32Array(n$3), gl$0$9.STATIC_DRAW);
	this$9.nbuf = buf$0$9;
	this$3 = this$9;
	i$3 = [ 0, 1, 2 ];
	gl$0$3 = Kingyo.gl;
	buf$0$3 = gl$0$3.createBuffer();
	gl$0$3.bindBuffer(gl$0$3.ELEMENT_ARRAY_BUFFER, buf$0$3);
	gl$0$3.bufferData(gl$0$3.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$3), gl$0$3.STATIC_DRAW);
	this$3.ibuf = buf$0$3;
	this$3.numi = (i$3.length | 0);
	Kingyo.bfin = this$3;
	this$16 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$5 = [ 0, 0, 0, 0.8, -0.5, -1, 0, 0.4, -0.8, -0.8, -0.5, -1 ];
	gl$0$16 = Kingyo.gl;
	buf$0$16 = gl$0$16.createBuffer();
	gl$0$16.bindBuffer(gl$0$16.ARRAY_BUFFER, buf$0$16);
	gl$0$16.bufferData(gl$0$16.ARRAY_BUFFER, new Float32Array(v$5), gl$0$16.STATIC_DRAW);
	this$16.vbuf = buf$0$16;
	this$16.numv = (v$5.length / 3 | 0);
	this$10 = this$16;
	n$4 = [ 0, 1, 1, 1, 1, 1, 0, 1, 0, -1, 1, 1 ];
	gl$0$10 = Kingyo.gl;
	buf$0$10 = gl$0$10.createBuffer();
	gl$0$10.bindBuffer(gl$0$10.ARRAY_BUFFER, buf$0$10);
	gl$0$10.bufferData(gl$0$10.ARRAY_BUFFER, new Float32Array(n$4), gl$0$10.STATIC_DRAW);
	this$10.nbuf = buf$0$10;
	this$4 = this$10;
	i$4 = [ 0, 1, 2, 0, 2, 3 ];
	gl$0$4 = Kingyo.gl;
	buf$0$4 = gl$0$4.createBuffer();
	gl$0$4.bindBuffer(gl$0$4.ELEMENT_ARRAY_BUFFER, buf$0$4);
	gl$0$4.bufferData(gl$0$4.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$4), gl$0$4.STATIC_DRAW);
	this$4.ibuf = buf$0$4;
	this$4.numi = (i$4.length | 0);
	Kingyo.tfin = this$4;
	Kingyo.ulocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.alocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.eyeProg = Util$getProgram$SS('keye.vs', 'keye.fs');
	Kingyo.eyeULocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.eyeProg);
	Kingyo.eyeALocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.eyeProg);
	(ex = 0.3, ey = 0.15, ez = 0.5);
	this$11 = {vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0};
	v$0 = [ - ex, ey, ez, 0, - ex, ey, ez, 1, - ex, ey, ez, 2, - ex, ey, ez, 3, ex, ey, ez, 4, ex, ey, ez, 5, ex, ey, ez, 6, ex, ey, ez, 7 ];
	gl$0$11 = Kingyo.gl;
	buf$0$11 = gl$0$11.createBuffer();
	gl$0$11.bindBuffer(gl$0$11.ARRAY_BUFFER, buf$0$11);
	gl$0$11.bufferData(gl$0$11.ARRAY_BUFFER, new Float32Array(v$0), gl$0$11.STATIC_DRAW);
	this$11.vbuf = buf$0$11;
	this$11.numv = (v$0.length / 3 | 0);
	this$5 = this$11;
	i$5 = [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7 ];
	gl$0$5 = Kingyo.gl;
	buf$0$5 = gl$0$5.createBuffer();
	gl$0$5.bindBuffer(gl$0$5.ELEMENT_ARRAY_BUFFER, buf$0$5);
	gl$0$5.bufferData(gl$0$5.ELEMENT_ARRAY_BUFFER, new Uint16Array(i$5), gl$0$5.STATIC_DRAW);
	this$5.ibuf = buf$0$5;
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
	/** @type {Kingyo} */
	var this$0;
	/** @type {!number} */
	var r$0;
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {V3} */
	var this$0$0;
	/** @type {!number} */
	var z$0$0;
	/** @type {V3} */
	var this$1$0;
	for (i = 0; i < Kingyo.all.length; ++ i) {
		this$0 = Kingyo.all[i];
		this$0._vangle = Math.random() * 2 * 3.141592653589793;
		this$0._velo = Math.random() * 15 + 1;
		r$0 = 8 * Math.random();
		x$0 = r$0 * Math.cos(this$0._vangle);
		y$0 = r$0 * Math.sin(this$0._vangle);
		this$0$0 = this$0._pos;
		z$0$0 = -2 - Math.random() * 3;
		this$0$0._[0] = x$0;
		this$0$0._[1] = y$0;
		this$0$0._[2] = z$0$0;
		this$0._anim = 0;
		this$0._state = 'swimming';
		M44$setIdentity$LM44$(this$0._spinMat);
		this$1$0 = this$0._spinAxis;
		this$1$0._[0] = 0;
		this$1$0._[1] = 0;
		this$1$0._[2] = 0;
		this$0._spinSpeed = 0;
		this$0._vz = 0;
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
	/** @type {WebGLRenderingContext} */
	var gl$0;
	/** @type {WebGLUniformLocation} */
	var modelMatLoc$0;
	/** @type {!number} */
	var s$0;
	/** @type {M44} */
	var bodyMat$0;
	/** @type {M44} */
	var this$0$0;
	/** @type {M44} */
	var m$0$0;
	/** @type {Float32Array} */
	var a$0$0$0;
	/** @type {undefined|!number} */
	var a00$0$0$0;
	/** @type {undefined|!number} */
	var a10$0$0$0;
	/** @type {undefined|!number} */
	var a20$0$0$0;
	/** @type {undefined|!number} */
	var a30$0$0$0;
	/** @type {undefined|!number} */
	var a01$0$0$0;
	/** @type {undefined|!number} */
	var a11$0$0$0;
	/** @type {undefined|!number} */
	var a21$0$0$0;
	/** @type {undefined|!number} */
	var a31$0$0$0;
	/** @type {undefined|!number} */
	var a02$0$0$0;
	/** @type {undefined|!number} */
	var a12$0$0$0;
	/** @type {undefined|!number} */
	var a22$0$0$0;
	/** @type {undefined|!number} */
	var a32$0$0$0;
	/** @type {undefined|!number} */
	var a03$0$0$0;
	/** @type {undefined|!number} */
	var a13$0$0$0;
	/** @type {undefined|!number} */
	var a23$0$0$0;
	/** @type {undefined|!number} */
	var a33$0$0$0;
	/** @type {Float32Array} */
	var b$0$0$0;
	/** @type {undefined|!number} */
	var b00$0$0$0;
	/** @type {undefined|!number} */
	var b10$0$0$0;
	/** @type {undefined|!number} */
	var b20$0$0$0;
	/** @type {undefined|!number} */
	var b30$0$0$0;
	/** @type {undefined|!number} */
	var b01$0$0$0;
	/** @type {undefined|!number} */
	var b11$0$0$0;
	/** @type {undefined|!number} */
	var b21$0$0$0;
	/** @type {undefined|!number} */
	var b31$0$0$0;
	/** @type {undefined|!number} */
	var b02$0$0$0;
	/** @type {undefined|!number} */
	var b12$0$0$0;
	/** @type {undefined|!number} */
	var b22$0$0$0;
	/** @type {undefined|!number} */
	var b32$0$0$0;
	/** @type {undefined|!number} */
	var b03$0$0$0;
	/** @type {undefined|!number} */
	var b13$0$0$0;
	/** @type {undefined|!number} */
	var b23$0$0$0;
	/** @type {undefined|!number} */
	var b33$0$0$0;
	/** @type {_Part} */
	var p$0$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$0;
	/** @type {M44} */
	var this$1$0;
	/** @type {M44} */
	var m$1$0;
	/** @type {Float32Array} */
	var a$0$1$0;
	/** @type {undefined|!number} */
	var a00$0$1$0;
	/** @type {undefined|!number} */
	var a10$0$1$0;
	/** @type {undefined|!number} */
	var a20$0$1$0;
	/** @type {undefined|!number} */
	var a30$0$1$0;
	/** @type {undefined|!number} */
	var a01$0$1$0;
	/** @type {undefined|!number} */
	var a11$0$1$0;
	/** @type {undefined|!number} */
	var a21$0$1$0;
	/** @type {undefined|!number} */
	var a31$0$1$0;
	/** @type {undefined|!number} */
	var a02$0$1$0;
	/** @type {undefined|!number} */
	var a12$0$1$0;
	/** @type {undefined|!number} */
	var a22$0$1$0;
	/** @type {undefined|!number} */
	var a32$0$1$0;
	/** @type {undefined|!number} */
	var a03$0$1$0;
	/** @type {undefined|!number} */
	var a13$0$1$0;
	/** @type {undefined|!number} */
	var a23$0$1$0;
	/** @type {undefined|!number} */
	var a33$0$1$0;
	/** @type {Float32Array} */
	var b$0$1$0;
	/** @type {undefined|!number} */
	var b00$0$1$0;
	/** @type {undefined|!number} */
	var b10$0$1$0;
	/** @type {undefined|!number} */
	var b20$0$1$0;
	/** @type {undefined|!number} */
	var b30$0$1$0;
	/** @type {undefined|!number} */
	var b01$0$1$0;
	/** @type {undefined|!number} */
	var b11$0$1$0;
	/** @type {undefined|!number} */
	var b21$0$1$0;
	/** @type {undefined|!number} */
	var b31$0$1$0;
	/** @type {undefined|!number} */
	var b02$0$1$0;
	/** @type {undefined|!number} */
	var b12$0$1$0;
	/** @type {undefined|!number} */
	var b22$0$1$0;
	/** @type {undefined|!number} */
	var b32$0$1$0;
	/** @type {undefined|!number} */
	var b03$0$1$0;
	/** @type {undefined|!number} */
	var b13$0$1$0;
	/** @type {undefined|!number} */
	var b23$0$1$0;
	/** @type {undefined|!number} */
	var b33$0$1$0;
	/** @type {_Part} */
	var p$1$0;
	/** @type {WebGLRenderingContext} */
	var gl$1$0;
	/** @type {M44} */
	var this$2$0;
	/** @type {M44} */
	var m$2$0;
	/** @type {Float32Array} */
	var a$0$2$0;
	/** @type {undefined|!number} */
	var a00$0$2$0;
	/** @type {undefined|!number} */
	var a10$0$2$0;
	/** @type {undefined|!number} */
	var a20$0$2$0;
	/** @type {undefined|!number} */
	var a30$0$2$0;
	/** @type {undefined|!number} */
	var a01$0$2$0;
	/** @type {undefined|!number} */
	var a11$0$2$0;
	/** @type {undefined|!number} */
	var a21$0$2$0;
	/** @type {undefined|!number} */
	var a31$0$2$0;
	/** @type {undefined|!number} */
	var a02$0$2$0;
	/** @type {undefined|!number} */
	var a12$0$2$0;
	/** @type {undefined|!number} */
	var a22$0$2$0;
	/** @type {undefined|!number} */
	var a32$0$2$0;
	/** @type {undefined|!number} */
	var a03$0$2$0;
	/** @type {undefined|!number} */
	var a13$0$2$0;
	/** @type {undefined|!number} */
	var a23$0$2$0;
	/** @type {undefined|!number} */
	var a33$0$2$0;
	/** @type {Float32Array} */
	var b$0$2$0;
	/** @type {undefined|!number} */
	var b00$0$2$0;
	/** @type {undefined|!number} */
	var b10$0$2$0;
	/** @type {undefined|!number} */
	var b20$0$2$0;
	/** @type {undefined|!number} */
	var b30$0$2$0;
	/** @type {undefined|!number} */
	var b01$0$2$0;
	/** @type {undefined|!number} */
	var b11$0$2$0;
	/** @type {undefined|!number} */
	var b21$0$2$0;
	/** @type {undefined|!number} */
	var b31$0$2$0;
	/** @type {undefined|!number} */
	var b02$0$2$0;
	/** @type {undefined|!number} */
	var b12$0$2$0;
	/** @type {undefined|!number} */
	var b22$0$2$0;
	/** @type {undefined|!number} */
	var b32$0$2$0;
	/** @type {undefined|!number} */
	var b03$0$2$0;
	/** @type {undefined|!number} */
	var b13$0$2$0;
	/** @type {undefined|!number} */
	var b23$0$2$0;
	/** @type {undefined|!number} */
	var b33$0$2$0;
	/** @type {_Part} */
	var p$2$0;
	/** @type {WebGLRenderingContext} */
	var gl$2$0;
	/** @type {M44} */
	var this$3$0;
	/** @type {M44} */
	var m$3$0;
	/** @type {Float32Array} */
	var a$0$3$0;
	/** @type {undefined|!number} */
	var a00$0$3$0;
	/** @type {undefined|!number} */
	var a10$0$3$0;
	/** @type {undefined|!number} */
	var a20$0$3$0;
	/** @type {undefined|!number} */
	var a30$0$3$0;
	/** @type {undefined|!number} */
	var a01$0$3$0;
	/** @type {undefined|!number} */
	var a11$0$3$0;
	/** @type {undefined|!number} */
	var a21$0$3$0;
	/** @type {undefined|!number} */
	var a31$0$3$0;
	/** @type {undefined|!number} */
	var a02$0$3$0;
	/** @type {undefined|!number} */
	var a12$0$3$0;
	/** @type {undefined|!number} */
	var a22$0$3$0;
	/** @type {undefined|!number} */
	var a32$0$3$0;
	/** @type {undefined|!number} */
	var a03$0$3$0;
	/** @type {undefined|!number} */
	var a13$0$3$0;
	/** @type {undefined|!number} */
	var a23$0$3$0;
	/** @type {undefined|!number} */
	var a33$0$3$0;
	/** @type {Float32Array} */
	var b$0$3$0;
	/** @type {undefined|!number} */
	var b00$0$3$0;
	/** @type {undefined|!number} */
	var b10$0$3$0;
	/** @type {undefined|!number} */
	var b20$0$3$0;
	/** @type {undefined|!number} */
	var b30$0$3$0;
	/** @type {undefined|!number} */
	var b01$0$3$0;
	/** @type {undefined|!number} */
	var b11$0$3$0;
	/** @type {undefined|!number} */
	var b21$0$3$0;
	/** @type {undefined|!number} */
	var b31$0$3$0;
	/** @type {undefined|!number} */
	var b02$0$3$0;
	/** @type {undefined|!number} */
	var b12$0$3$0;
	/** @type {undefined|!number} */
	var b22$0$3$0;
	/** @type {undefined|!number} */
	var b32$0$3$0;
	/** @type {undefined|!number} */
	var b03$0$3$0;
	/** @type {undefined|!number} */
	var b13$0$3$0;
	/** @type {undefined|!number} */
	var b23$0$3$0;
	/** @type {undefined|!number} */
	var b33$0$3$0;
	/** @type {_Part} */
	var p$3$0;
	/** @type {WebGLRenderingContext} */
	var gl$3$0;
	/** @type {M44} */
	var this$4$0;
	/** @type {M44} */
	var m$4$0;
	/** @type {Float32Array} */
	var a$0$4$0;
	/** @type {undefined|!number} */
	var a00$0$4$0;
	/** @type {undefined|!number} */
	var a10$0$4$0;
	/** @type {undefined|!number} */
	var a20$0$4$0;
	/** @type {undefined|!number} */
	var a30$0$4$0;
	/** @type {undefined|!number} */
	var a01$0$4$0;
	/** @type {undefined|!number} */
	var a11$0$4$0;
	/** @type {undefined|!number} */
	var a21$0$4$0;
	/** @type {undefined|!number} */
	var a31$0$4$0;
	/** @type {undefined|!number} */
	var a02$0$4$0;
	/** @type {undefined|!number} */
	var a12$0$4$0;
	/** @type {undefined|!number} */
	var a22$0$4$0;
	/** @type {undefined|!number} */
	var a32$0$4$0;
	/** @type {undefined|!number} */
	var a03$0$4$0;
	/** @type {undefined|!number} */
	var a13$0$4$0;
	/** @type {undefined|!number} */
	var a23$0$4$0;
	/** @type {undefined|!number} */
	var a33$0$4$0;
	/** @type {Float32Array} */
	var b$0$4$0;
	/** @type {undefined|!number} */
	var b00$0$4$0;
	/** @type {undefined|!number} */
	var b10$0$4$0;
	/** @type {undefined|!number} */
	var b20$0$4$0;
	/** @type {undefined|!number} */
	var b30$0$4$0;
	/** @type {undefined|!number} */
	var b01$0$4$0;
	/** @type {undefined|!number} */
	var b11$0$4$0;
	/** @type {undefined|!number} */
	var b21$0$4$0;
	/** @type {undefined|!number} */
	var b31$0$4$0;
	/** @type {undefined|!number} */
	var b02$0$4$0;
	/** @type {undefined|!number} */
	var b12$0$4$0;
	/** @type {undefined|!number} */
	var b22$0$4$0;
	/** @type {undefined|!number} */
	var b32$0$4$0;
	/** @type {undefined|!number} */
	var b03$0$4$0;
	/** @type {undefined|!number} */
	var b13$0$4$0;
	/** @type {undefined|!number} */
	var b23$0$4$0;
	/** @type {undefined|!number} */
	var b33$0$4$0;
	/** @type {_Part} */
	var p$4$0;
	/** @type {WebGLRenderingContext} */
	var gl$4$0;
	/** @type {M44} */
	var this$5$0;
	/** @type {M44} */
	var m$5$0;
	/** @type {Float32Array} */
	var a$0$5$0;
	/** @type {undefined|!number} */
	var a00$0$5$0;
	/** @type {undefined|!number} */
	var a10$0$5$0;
	/** @type {undefined|!number} */
	var a20$0$5$0;
	/** @type {undefined|!number} */
	var a30$0$5$0;
	/** @type {undefined|!number} */
	var a01$0$5$0;
	/** @type {undefined|!number} */
	var a11$0$5$0;
	/** @type {undefined|!number} */
	var a21$0$5$0;
	/** @type {undefined|!number} */
	var a31$0$5$0;
	/** @type {undefined|!number} */
	var a02$0$5$0;
	/** @type {undefined|!number} */
	var a12$0$5$0;
	/** @type {undefined|!number} */
	var a22$0$5$0;
	/** @type {undefined|!number} */
	var a32$0$5$0;
	/** @type {undefined|!number} */
	var a03$0$5$0;
	/** @type {undefined|!number} */
	var a13$0$5$0;
	/** @type {undefined|!number} */
	var a23$0$5$0;
	/** @type {undefined|!number} */
	var a33$0$5$0;
	/** @type {Float32Array} */
	var b$0$5$0;
	/** @type {undefined|!number} */
	var b00$0$5$0;
	/** @type {undefined|!number} */
	var b10$0$5$0;
	/** @type {undefined|!number} */
	var b20$0$5$0;
	/** @type {undefined|!number} */
	var b30$0$5$0;
	/** @type {undefined|!number} */
	var b01$0$5$0;
	/** @type {undefined|!number} */
	var b11$0$5$0;
	/** @type {undefined|!number} */
	var b21$0$5$0;
	/** @type {undefined|!number} */
	var b31$0$5$0;
	/** @type {undefined|!number} */
	var b02$0$5$0;
	/** @type {undefined|!number} */
	var b12$0$5$0;
	/** @type {undefined|!number} */
	var b22$0$5$0;
	/** @type {undefined|!number} */
	var b32$0$5$0;
	/** @type {undefined|!number} */
	var b03$0$5$0;
	/** @type {undefined|!number} */
	var b13$0$5$0;
	/** @type {undefined|!number} */
	var b23$0$5$0;
	/** @type {undefined|!number} */
	var b33$0$5$0;
	/** @type {M44} */
	var this$6$0;
	/** @type {M44} */
	var this$7$0;
	/** @type {Float32Array} */
	var a$0$6$0;
	/** @type {undefined|!number} */
	var a00$0$6$0;
	/** @type {undefined|!number} */
	var a10$0$6$0;
	/** @type {undefined|!number} */
	var a20$0$6$0;
	/** @type {undefined|!number} */
	var a30$0$6$0;
	/** @type {undefined|!number} */
	var a01$0$6$0;
	/** @type {undefined|!number} */
	var a11$0$6$0;
	/** @type {undefined|!number} */
	var a21$0$6$0;
	/** @type {undefined|!number} */
	var a31$0$6$0;
	/** @type {undefined|!number} */
	var a02$0$6$0;
	/** @type {undefined|!number} */
	var a12$0$6$0;
	/** @type {undefined|!number} */
	var a22$0$6$0;
	/** @type {undefined|!number} */
	var a32$0$6$0;
	/** @type {undefined|!number} */
	var a03$0$6$0;
	/** @type {undefined|!number} */
	var a13$0$6$0;
	/** @type {undefined|!number} */
	var a23$0$6$0;
	/** @type {undefined|!number} */
	var a33$0$6$0;
	/** @type {Float32Array} */
	var b$0$6$0;
	/** @type {undefined|!number} */
	var b00$0$6$0;
	/** @type {undefined|!number} */
	var b10$0$6$0;
	/** @type {undefined|!number} */
	var b20$0$6$0;
	/** @type {undefined|!number} */
	var b30$0$6$0;
	/** @type {undefined|!number} */
	var b01$0$6$0;
	/** @type {undefined|!number} */
	var b11$0$6$0;
	/** @type {undefined|!number} */
	var b21$0$6$0;
	/** @type {undefined|!number} */
	var b31$0$6$0;
	/** @type {undefined|!number} */
	var b02$0$6$0;
	/** @type {undefined|!number} */
	var b12$0$6$0;
	/** @type {undefined|!number} */
	var b22$0$6$0;
	/** @type {undefined|!number} */
	var b32$0$6$0;
	/** @type {undefined|!number} */
	var b03$0$6$0;
	/** @type {undefined|!number} */
	var b13$0$6$0;
	/** @type {undefined|!number} */
	var b23$0$6$0;
	/** @type {undefined|!number} */
	var b33$0$6$0;
	/** @type {M44} */
	var this$8$0;
	/** @type {Float32Array} */
	var a$0$7$0;
	/** @type {undefined|!number} */
	var a00$0$7$0;
	/** @type {undefined|!number} */
	var a10$0$7$0;
	/** @type {undefined|!number} */
	var a20$0$7$0;
	/** @type {undefined|!number} */
	var a30$0$7$0;
	/** @type {undefined|!number} */
	var a01$0$7$0;
	/** @type {undefined|!number} */
	var a11$0$7$0;
	/** @type {undefined|!number} */
	var a21$0$7$0;
	/** @type {undefined|!number} */
	var a31$0$7$0;
	/** @type {undefined|!number} */
	var a02$0$7$0;
	/** @type {undefined|!number} */
	var a12$0$7$0;
	/** @type {undefined|!number} */
	var a22$0$7$0;
	/** @type {undefined|!number} */
	var a32$0$7$0;
	/** @type {undefined|!number} */
	var a03$0$7$0;
	/** @type {undefined|!number} */
	var a13$0$7$0;
	/** @type {undefined|!number} */
	var a23$0$7$0;
	/** @type {undefined|!number} */
	var a33$0$7$0;
	/** @type {Float32Array} */
	var b$0$7$0;
	/** @type {undefined|!number} */
	var b00$0$7$0;
	/** @type {undefined|!number} */
	var b10$0$7$0;
	/** @type {undefined|!number} */
	var b20$0$7$0;
	/** @type {undefined|!number} */
	var b30$0$7$0;
	/** @type {undefined|!number} */
	var b01$0$7$0;
	/** @type {undefined|!number} */
	var b11$0$7$0;
	/** @type {undefined|!number} */
	var b21$0$7$0;
	/** @type {undefined|!number} */
	var b31$0$7$0;
	/** @type {undefined|!number} */
	var b02$0$7$0;
	/** @type {undefined|!number} */
	var b12$0$7$0;
	/** @type {undefined|!number} */
	var b22$0$7$0;
	/** @type {undefined|!number} */
	var b32$0$7$0;
	/** @type {undefined|!number} */
	var b03$0$7$0;
	/** @type {undefined|!number} */
	var b13$0$7$0;
	/** @type {undefined|!number} */
	var b23$0$7$0;
	/** @type {undefined|!number} */
	var b33$0$7$0;
	/** @type {M44} */
	var this$9$0;
	/** @type {Float32Array} */
	var a$0$8$0;
	/** @type {undefined|!number} */
	var a00$0$8$0;
	/** @type {undefined|!number} */
	var a10$0$8$0;
	/** @type {undefined|!number} */
	var a20$0$8$0;
	/** @type {undefined|!number} */
	var a30$0$8$0;
	/** @type {undefined|!number} */
	var a01$0$8$0;
	/** @type {undefined|!number} */
	var a11$0$8$0;
	/** @type {undefined|!number} */
	var a21$0$8$0;
	/** @type {undefined|!number} */
	var a31$0$8$0;
	/** @type {undefined|!number} */
	var a02$0$8$0;
	/** @type {undefined|!number} */
	var a12$0$8$0;
	/** @type {undefined|!number} */
	var a22$0$8$0;
	/** @type {undefined|!number} */
	var a32$0$8$0;
	/** @type {undefined|!number} */
	var a03$0$8$0;
	/** @type {undefined|!number} */
	var a13$0$8$0;
	/** @type {undefined|!number} */
	var a23$0$8$0;
	/** @type {undefined|!number} */
	var a33$0$8$0;
	/** @type {Float32Array} */
	var b$0$8$0;
	/** @type {undefined|!number} */
	var b00$0$8$0;
	/** @type {undefined|!number} */
	var b10$0$8$0;
	/** @type {undefined|!number} */
	var b20$0$8$0;
	/** @type {undefined|!number} */
	var b30$0$8$0;
	/** @type {undefined|!number} */
	var b01$0$8$0;
	/** @type {undefined|!number} */
	var b11$0$8$0;
	/** @type {undefined|!number} */
	var b21$0$8$0;
	/** @type {undefined|!number} */
	var b31$0$8$0;
	/** @type {undefined|!number} */
	var b02$0$8$0;
	/** @type {undefined|!number} */
	var b12$0$8$0;
	/** @type {undefined|!number} */
	var b22$0$8$0;
	/** @type {undefined|!number} */
	var b32$0$8$0;
	/** @type {undefined|!number} */
	var b03$0$8$0;
	/** @type {undefined|!number} */
	var b13$0$8$0;
	/** @type {undefined|!number} */
	var b23$0$8$0;
	/** @type {undefined|!number} */
	var b33$0$8$0;
	/** @type {M44} */
	var this$10$0;
	/** @type {Float32Array} */
	var a$0$9$0;
	/** @type {undefined|!number} */
	var a00$0$9$0;
	/** @type {undefined|!number} */
	var a10$0$9$0;
	/** @type {undefined|!number} */
	var a20$0$9$0;
	/** @type {undefined|!number} */
	var a30$0$9$0;
	/** @type {undefined|!number} */
	var a01$0$9$0;
	/** @type {undefined|!number} */
	var a11$0$9$0;
	/** @type {undefined|!number} */
	var a21$0$9$0;
	/** @type {undefined|!number} */
	var a31$0$9$0;
	/** @type {undefined|!number} */
	var a02$0$9$0;
	/** @type {undefined|!number} */
	var a12$0$9$0;
	/** @type {undefined|!number} */
	var a22$0$9$0;
	/** @type {undefined|!number} */
	var a32$0$9$0;
	/** @type {undefined|!number} */
	var a03$0$9$0;
	/** @type {undefined|!number} */
	var a13$0$9$0;
	/** @type {undefined|!number} */
	var a23$0$9$0;
	/** @type {undefined|!number} */
	var a33$0$9$0;
	/** @type {Float32Array} */
	var b$0$9$0;
	/** @type {undefined|!number} */
	var b00$0$9$0;
	/** @type {undefined|!number} */
	var b10$0$9$0;
	/** @type {undefined|!number} */
	var b20$0$9$0;
	/** @type {undefined|!number} */
	var b30$0$9$0;
	/** @type {undefined|!number} */
	var b01$0$9$0;
	/** @type {undefined|!number} */
	var b11$0$9$0;
	/** @type {undefined|!number} */
	var b21$0$9$0;
	/** @type {undefined|!number} */
	var b31$0$9$0;
	/** @type {undefined|!number} */
	var b02$0$9$0;
	/** @type {undefined|!number} */
	var b12$0$9$0;
	/** @type {undefined|!number} */
	var b22$0$9$0;
	/** @type {undefined|!number} */
	var b32$0$9$0;
	/** @type {undefined|!number} */
	var b03$0$9$0;
	/** @type {undefined|!number} */
	var b13$0$9$0;
	/** @type {undefined|!number} */
	var b23$0$9$0;
	/** @type {undefined|!number} */
	var b33$0$9$0;
	/** @type {M44} */
	var this$11$0;
	/** @type {M44} */
	var m$10$0;
	/** @type {Float32Array} */
	var a$0$10$0;
	/** @type {undefined|!number} */
	var a00$0$10$0;
	/** @type {undefined|!number} */
	var a10$0$10$0;
	/** @type {undefined|!number} */
	var a20$0$10$0;
	/** @type {undefined|!number} */
	var a30$0$10$0;
	/** @type {undefined|!number} */
	var a01$0$10$0;
	/** @type {undefined|!number} */
	var a11$0$10$0;
	/** @type {undefined|!number} */
	var a21$0$10$0;
	/** @type {undefined|!number} */
	var a31$0$10$0;
	/** @type {undefined|!number} */
	var a02$0$10$0;
	/** @type {undefined|!number} */
	var a12$0$10$0;
	/** @type {undefined|!number} */
	var a22$0$10$0;
	/** @type {undefined|!number} */
	var a32$0$10$0;
	/** @type {undefined|!number} */
	var a03$0$10$0;
	/** @type {undefined|!number} */
	var a13$0$10$0;
	/** @type {undefined|!number} */
	var a23$0$10$0;
	/** @type {undefined|!number} */
	var a33$0$10$0;
	/** @type {Float32Array} */
	var b$0$10$0;
	/** @type {undefined|!number} */
	var b00$0$10$0;
	/** @type {undefined|!number} */
	var b10$0$10$0;
	/** @type {undefined|!number} */
	var b20$0$10$0;
	/** @type {undefined|!number} */
	var b30$0$10$0;
	/** @type {undefined|!number} */
	var b01$0$10$0;
	/** @type {undefined|!number} */
	var b11$0$10$0;
	/** @type {undefined|!number} */
	var b21$0$10$0;
	/** @type {undefined|!number} */
	var b31$0$10$0;
	/** @type {undefined|!number} */
	var b02$0$10$0;
	/** @type {undefined|!number} */
	var b12$0$10$0;
	/** @type {undefined|!number} */
	var b22$0$10$0;
	/** @type {undefined|!number} */
	var b32$0$10$0;
	/** @type {undefined|!number} */
	var b03$0$10$0;
	/** @type {undefined|!number} */
	var b13$0$10$0;
	/** @type {undefined|!number} */
	var b23$0$10$0;
	/** @type {undefined|!number} */
	var b33$0$10$0;
	/** @type {M44} */
	var this$12$0;
	/** @type {M44} */
	var this$13$0;
	/** @type {M44} */
	var this$14$0;
	/** @type {M44} */
	var this$15$0;
	/** @type {M44} */
	var this$16$0;
	/** @type {M44} */
	var m$11$0;
	/** @type {Float32Array} */
	var a$0$11$0;
	/** @type {undefined|!number} */
	var a00$0$11$0;
	/** @type {undefined|!number} */
	var a10$0$11$0;
	/** @type {undefined|!number} */
	var a20$0$11$0;
	/** @type {undefined|!number} */
	var a30$0$11$0;
	/** @type {undefined|!number} */
	var a01$0$11$0;
	/** @type {undefined|!number} */
	var a11$0$11$0;
	/** @type {undefined|!number} */
	var a21$0$11$0;
	/** @type {undefined|!number} */
	var a31$0$11$0;
	/** @type {undefined|!number} */
	var a02$0$11$0;
	/** @type {undefined|!number} */
	var a12$0$11$0;
	/** @type {undefined|!number} */
	var a22$0$11$0;
	/** @type {undefined|!number} */
	var a32$0$11$0;
	/** @type {undefined|!number} */
	var a03$0$11$0;
	/** @type {undefined|!number} */
	var a13$0$11$0;
	/** @type {undefined|!number} */
	var a23$0$11$0;
	/** @type {undefined|!number} */
	var a33$0$11$0;
	/** @type {Float32Array} */
	var b$0$11$0;
	/** @type {undefined|!number} */
	var b00$0$11$0;
	/** @type {undefined|!number} */
	var b10$0$11$0;
	/** @type {undefined|!number} */
	var b20$0$11$0;
	/** @type {undefined|!number} */
	var b30$0$11$0;
	/** @type {undefined|!number} */
	var b01$0$11$0;
	/** @type {undefined|!number} */
	var b11$0$11$0;
	/** @type {undefined|!number} */
	var b21$0$11$0;
	/** @type {undefined|!number} */
	var b31$0$11$0;
	/** @type {undefined|!number} */
	var b02$0$11$0;
	/** @type {undefined|!number} */
	var b12$0$11$0;
	/** @type {undefined|!number} */
	var b22$0$11$0;
	/** @type {undefined|!number} */
	var b32$0$11$0;
	/** @type {undefined|!number} */
	var b03$0$11$0;
	/** @type {undefined|!number} */
	var b13$0$11$0;
	/** @type {undefined|!number} */
	var b23$0$11$0;
	/** @type {undefined|!number} */
	var b33$0$11$0;
	/** @type {M44} */
	var this$18$0;
	/** @type {!number} */
	var rad$0$0;
	/** @type {M44} */
	var this$19$0;
	/** @type {V3} */
	var v$0$0;
	/** @type {!number} */
	var x$0$0$0;
	/** @type {!number} */
	var y$0$0$0;
	/** @type {!number} */
	var z$0$0$0;
	/** @type {WebGLRenderingContext} */
	var gl$1;
	/** @type {Object.<string, undefined|WebGLUniformLocation>} */
	var ulocs$0;
	/** @type {!number} */
	var s$1;
	/** @type {M44} */
	var this$0$1;
	/** @type {M44} */
	var m$0$1;
	/** @type {Float32Array} */
	var a$0$0$1;
	/** @type {undefined|!number} */
	var a00$0$0$1;
	/** @type {undefined|!number} */
	var a10$0$0$1;
	/** @type {undefined|!number} */
	var a20$0$0$1;
	/** @type {undefined|!number} */
	var a30$0$0$1;
	/** @type {undefined|!number} */
	var a01$0$0$1;
	/** @type {undefined|!number} */
	var a11$0$0$1;
	/** @type {undefined|!number} */
	var a21$0$0$1;
	/** @type {undefined|!number} */
	var a31$0$0$1;
	/** @type {undefined|!number} */
	var a02$0$0$1;
	/** @type {undefined|!number} */
	var a12$0$0$1;
	/** @type {undefined|!number} */
	var a22$0$0$1;
	/** @type {undefined|!number} */
	var a32$0$0$1;
	/** @type {undefined|!number} */
	var a03$0$0$1;
	/** @type {undefined|!number} */
	var a13$0$0$1;
	/** @type {undefined|!number} */
	var a23$0$0$1;
	/** @type {undefined|!number} */
	var a33$0$0$1;
	/** @type {Float32Array} */
	var b$0$0$1;
	/** @type {undefined|!number} */
	var b00$0$0$1;
	/** @type {undefined|!number} */
	var b10$0$0$1;
	/** @type {undefined|!number} */
	var b20$0$0$1;
	/** @type {undefined|!number} */
	var b30$0$0$1;
	/** @type {undefined|!number} */
	var b01$0$0$1;
	/** @type {undefined|!number} */
	var b11$0$0$1;
	/** @type {undefined|!number} */
	var b21$0$0$1;
	/** @type {undefined|!number} */
	var b31$0$0$1;
	/** @type {undefined|!number} */
	var b02$0$0$1;
	/** @type {undefined|!number} */
	var b12$0$0$1;
	/** @type {undefined|!number} */
	var b22$0$0$1;
	/** @type {undefined|!number} */
	var b32$0$0$1;
	/** @type {undefined|!number} */
	var b03$0$0$1;
	/** @type {undefined|!number} */
	var b13$0$0$1;
	/** @type {undefined|!number} */
	var b23$0$0$1;
	/** @type {undefined|!number} */
	var b33$0$0$1;
	/** @type {M44} */
	var this$1$1;
	/** @type {M44} */
	var m$1$1;
	/** @type {Float32Array} */
	var a$0$1$1;
	/** @type {undefined|!number} */
	var a00$0$1$1;
	/** @type {undefined|!number} */
	var a10$0$1$1;
	/** @type {undefined|!number} */
	var a20$0$1$1;
	/** @type {undefined|!number} */
	var a30$0$1$1;
	/** @type {undefined|!number} */
	var a01$0$1$1;
	/** @type {undefined|!number} */
	var a11$0$1$1;
	/** @type {undefined|!number} */
	var a21$0$1$1;
	/** @type {undefined|!number} */
	var a31$0$1$1;
	/** @type {undefined|!number} */
	var a02$0$1$1;
	/** @type {undefined|!number} */
	var a12$0$1$1;
	/** @type {undefined|!number} */
	var a22$0$1$1;
	/** @type {undefined|!number} */
	var a32$0$1$1;
	/** @type {undefined|!number} */
	var a03$0$1$1;
	/** @type {undefined|!number} */
	var a13$0$1$1;
	/** @type {undefined|!number} */
	var a23$0$1$1;
	/** @type {undefined|!number} */
	var a33$0$1$1;
	/** @type {Float32Array} */
	var b$0$1$1;
	/** @type {undefined|!number} */
	var b00$0$1$1;
	/** @type {undefined|!number} */
	var b10$0$1$1;
	/** @type {undefined|!number} */
	var b20$0$1$1;
	/** @type {undefined|!number} */
	var b30$0$1$1;
	/** @type {undefined|!number} */
	var b01$0$1$1;
	/** @type {undefined|!number} */
	var b11$0$1$1;
	/** @type {undefined|!number} */
	var b21$0$1$1;
	/** @type {undefined|!number} */
	var b31$0$1$1;
	/** @type {undefined|!number} */
	var b02$0$1$1;
	/** @type {undefined|!number} */
	var b12$0$1$1;
	/** @type {undefined|!number} */
	var b22$0$1$1;
	/** @type {undefined|!number} */
	var b32$0$1$1;
	/** @type {undefined|!number} */
	var b03$0$1$1;
	/** @type {undefined|!number} */
	var b13$0$1$1;
	/** @type {undefined|!number} */
	var b23$0$1$1;
	/** @type {undefined|!number} */
	var b33$0$1$1;
	/** @type {M44} */
	var this$2$1;
	/** @type {M44} */
	var this$3$1;
	/** @type {M44} */
	var m$2$1;
	/** @type {Float32Array} */
	var a$0$2$1;
	/** @type {undefined|!number} */
	var a00$0$2$1;
	/** @type {undefined|!number} */
	var a10$0$2$1;
	/** @type {undefined|!number} */
	var a20$0$2$1;
	/** @type {undefined|!number} */
	var a30$0$2$1;
	/** @type {undefined|!number} */
	var a01$0$2$1;
	/** @type {undefined|!number} */
	var a11$0$2$1;
	/** @type {undefined|!number} */
	var a21$0$2$1;
	/** @type {undefined|!number} */
	var a31$0$2$1;
	/** @type {undefined|!number} */
	var a02$0$2$1;
	/** @type {undefined|!number} */
	var a12$0$2$1;
	/** @type {undefined|!number} */
	var a22$0$2$1;
	/** @type {undefined|!number} */
	var a32$0$2$1;
	/** @type {undefined|!number} */
	var a03$0$2$1;
	/** @type {undefined|!number} */
	var a13$0$2$1;
	/** @type {undefined|!number} */
	var a23$0$2$1;
	/** @type {undefined|!number} */
	var a33$0$2$1;
	/** @type {Float32Array} */
	var b$0$2$1;
	/** @type {undefined|!number} */
	var b00$0$2$1;
	/** @type {undefined|!number} */
	var b10$0$2$1;
	/** @type {undefined|!number} */
	var b20$0$2$1;
	/** @type {undefined|!number} */
	var b30$0$2$1;
	/** @type {undefined|!number} */
	var b01$0$2$1;
	/** @type {undefined|!number} */
	var b11$0$2$1;
	/** @type {undefined|!number} */
	var b21$0$2$1;
	/** @type {undefined|!number} */
	var b31$0$2$1;
	/** @type {undefined|!number} */
	var b02$0$2$1;
	/** @type {undefined|!number} */
	var b12$0$2$1;
	/** @type {undefined|!number} */
	var b22$0$2$1;
	/** @type {undefined|!number} */
	var b32$0$2$1;
	/** @type {undefined|!number} */
	var b03$0$2$1;
	/** @type {undefined|!number} */
	var b13$0$2$1;
	/** @type {undefined|!number} */
	var b23$0$2$1;
	/** @type {undefined|!number} */
	var b33$0$2$1;
	/** @type {M44} */
	var this$4$1;
	/** @type {M44} */
	var m$3$1;
	/** @type {Float32Array} */
	var a$0$3$1;
	/** @type {undefined|!number} */
	var a00$0$3$1;
	/** @type {undefined|!number} */
	var a10$0$3$1;
	/** @type {undefined|!number} */
	var a20$0$3$1;
	/** @type {undefined|!number} */
	var a30$0$3$1;
	/** @type {undefined|!number} */
	var a01$0$3$1;
	/** @type {undefined|!number} */
	var a11$0$3$1;
	/** @type {undefined|!number} */
	var a21$0$3$1;
	/** @type {undefined|!number} */
	var a31$0$3$1;
	/** @type {undefined|!number} */
	var a02$0$3$1;
	/** @type {undefined|!number} */
	var a12$0$3$1;
	/** @type {undefined|!number} */
	var a22$0$3$1;
	/** @type {undefined|!number} */
	var a32$0$3$1;
	/** @type {undefined|!number} */
	var a03$0$3$1;
	/** @type {undefined|!number} */
	var a13$0$3$1;
	/** @type {undefined|!number} */
	var a23$0$3$1;
	/** @type {undefined|!number} */
	var a33$0$3$1;
	/** @type {Float32Array} */
	var b$0$3$1;
	/** @type {undefined|!number} */
	var b00$0$3$1;
	/** @type {undefined|!number} */
	var b10$0$3$1;
	/** @type {undefined|!number} */
	var b20$0$3$1;
	/** @type {undefined|!number} */
	var b30$0$3$1;
	/** @type {undefined|!number} */
	var b01$0$3$1;
	/** @type {undefined|!number} */
	var b11$0$3$1;
	/** @type {undefined|!number} */
	var b21$0$3$1;
	/** @type {undefined|!number} */
	var b31$0$3$1;
	/** @type {undefined|!number} */
	var b02$0$3$1;
	/** @type {undefined|!number} */
	var b12$0$3$1;
	/** @type {undefined|!number} */
	var b22$0$3$1;
	/** @type {undefined|!number} */
	var b32$0$3$1;
	/** @type {undefined|!number} */
	var b03$0$3$1;
	/** @type {undefined|!number} */
	var b13$0$3$1;
	/** @type {undefined|!number} */
	var b23$0$3$1;
	/** @type {undefined|!number} */
	var b33$0$3$1;
	/** @type {M44} */
	var this$6$1;
	/** @type {!number} */
	var rad$0$1;
	/** @type {M44} */
	var this$7$1;
	/** @type {V3} */
	var v$0$1;
	/** @type {!number} */
	var x$0$0$1;
	/** @type {!number} */
	var y$0$0$1;
	/** @type {!number} */
	var z$0$0$1;
	/** @type {Float32Array} */
	var _$0;
	/** @type {Float32Array} */
	var _$1;
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
			gl$0 = Kingyo.gl;
			gl$0.uniform3fv(Kingyo.ulocs.color, k._color);
			gl$0.uniform3fv(Kingyo.ulocs.color2, k._color2);
			gl$0.uniform4fv(Kingyo.ulocs.color2pos, k._color2pos);
			modelMatLoc$0 = Kingyo.ulocs.modelMatrix;
			s$0 = Math.sin(k._anim * 5);
			this$19$0 = {_: new Float32Array(16)};
			v$0$0 = k._pos;
			x$0$0$0 = (_$0 = v$0$0._)[0];
			y$0$0$0 = _$0[1];
			z$0$0$0 = _$0[2];
			M44$setIdentity$LM44$(this$19$0);
			this$19$0._[12] = x$0$0$0;
			this$19$0._[13] = y$0$0$0;
			this$19$0._[14] = z$0$0$0;
			m$11$0 = k._spinMat;
			a$0$11$0 = this$19$0._;
			(a00$0$11$0 = a$0$11$0[0], a10$0$11$0 = a$0$11$0[1], a20$0$11$0 = a$0$11$0[2], a30$0$11$0 = a$0$11$0[3]);
			(a01$0$11$0 = a$0$11$0[4], a11$0$11$0 = a$0$11$0[5], a21$0$11$0 = a$0$11$0[6], a31$0$11$0 = a$0$11$0[7]);
			(a02$0$11$0 = a$0$11$0[8], a12$0$11$0 = a$0$11$0[9], a22$0$11$0 = a$0$11$0[10], a32$0$11$0 = a$0$11$0[11]);
			(a03$0$11$0 = a$0$11$0[12], a13$0$11$0 = a$0$11$0[13], a23$0$11$0 = a$0$11$0[14], a33$0$11$0 = a$0$11$0[15]);
			b$0$11$0 = m$11$0._;
			(b00$0$11$0 = b$0$11$0[0], b10$0$11$0 = b$0$11$0[1], b20$0$11$0 = b$0$11$0[2], b30$0$11$0 = b$0$11$0[3]);
			(b01$0$11$0 = b$0$11$0[4], b11$0$11$0 = b$0$11$0[5], b21$0$11$0 = b$0$11$0[6], b31$0$11$0 = b$0$11$0[7]);
			(b02$0$11$0 = b$0$11$0[8], b12$0$11$0 = b$0$11$0[9], b22$0$11$0 = b$0$11$0[10], b32$0$11$0 = b$0$11$0[11]);
			(b03$0$11$0 = b$0$11$0[12], b13$0$11$0 = b$0$11$0[13], b23$0$11$0 = b$0$11$0[14], b33$0$11$0 = b$0$11$0[15]);
			a$0$11$0[0] = a00$0$11$0 * b00$0$11$0 + a01$0$11$0 * b10$0$11$0 + a02$0$11$0 * b20$0$11$0 + a03$0$11$0 * b30$0$11$0;
			a$0$11$0[1] = a10$0$11$0 * b00$0$11$0 + a11$0$11$0 * b10$0$11$0 + a12$0$11$0 * b20$0$11$0 + a13$0$11$0 * b30$0$11$0;
			a$0$11$0[2] = a20$0$11$0 * b00$0$11$0 + a21$0$11$0 * b10$0$11$0 + a22$0$11$0 * b20$0$11$0 + a23$0$11$0 * b30$0$11$0;
			a$0$11$0[3] = a30$0$11$0 * b00$0$11$0 + a31$0$11$0 * b10$0$11$0 + a32$0$11$0 * b20$0$11$0 + a33$0$11$0 * b30$0$11$0;
			a$0$11$0[4] = a00$0$11$0 * b01$0$11$0 + a01$0$11$0 * b11$0$11$0 + a02$0$11$0 * b21$0$11$0 + a03$0$11$0 * b31$0$11$0;
			a$0$11$0[5] = a10$0$11$0 * b01$0$11$0 + a11$0$11$0 * b11$0$11$0 + a12$0$11$0 * b21$0$11$0 + a13$0$11$0 * b31$0$11$0;
			a$0$11$0[6] = a20$0$11$0 * b01$0$11$0 + a21$0$11$0 * b11$0$11$0 + a22$0$11$0 * b21$0$11$0 + a23$0$11$0 * b31$0$11$0;
			a$0$11$0[7] = a30$0$11$0 * b01$0$11$0 + a31$0$11$0 * b11$0$11$0 + a32$0$11$0 * b21$0$11$0 + a33$0$11$0 * b31$0$11$0;
			a$0$11$0[8] = a00$0$11$0 * b02$0$11$0 + a01$0$11$0 * b12$0$11$0 + a02$0$11$0 * b22$0$11$0 + a03$0$11$0 * b32$0$11$0;
			a$0$11$0[9] = a10$0$11$0 * b02$0$11$0 + a11$0$11$0 * b12$0$11$0 + a12$0$11$0 * b22$0$11$0 + a13$0$11$0 * b32$0$11$0;
			a$0$11$0[10] = a20$0$11$0 * b02$0$11$0 + a21$0$11$0 * b12$0$11$0 + a22$0$11$0 * b22$0$11$0 + a23$0$11$0 * b32$0$11$0;
			a$0$11$0[11] = a30$0$11$0 * b02$0$11$0 + a31$0$11$0 * b12$0$11$0 + a32$0$11$0 * b22$0$11$0 + a33$0$11$0 * b32$0$11$0;
			a$0$11$0[12] = a00$0$11$0 * b03$0$11$0 + a01$0$11$0 * b13$0$11$0 + a02$0$11$0 * b23$0$11$0 + a03$0$11$0 * b33$0$11$0;
			a$0$11$0[13] = a10$0$11$0 * b03$0$11$0 + a11$0$11$0 * b13$0$11$0 + a12$0$11$0 * b23$0$11$0 + a13$0$11$0 * b33$0$11$0;
			a$0$11$0[14] = a20$0$11$0 * b03$0$11$0 + a21$0$11$0 * b13$0$11$0 + a22$0$11$0 * b23$0$11$0 + a23$0$11$0 * b33$0$11$0;
			a$0$11$0[15] = a30$0$11$0 * b03$0$11$0 + a31$0$11$0 * b13$0$11$0 + a32$0$11$0 * b23$0$11$0 + a33$0$11$0 * b33$0$11$0;
			this$11$0 = this$19$0;
			this$18$0 = {_: new Float32Array(16)};
			rad$0$0 = k._vangle - s$0 / 10;
			m$10$0 = M44$setRotate$LM44$NNNN(this$18$0, rad$0$0, 0, 0, 1);
			a$0$10$0 = this$11$0._;
			(a00$0$10$0 = a$0$10$0[0], a10$0$10$0 = a$0$10$0[1], a20$0$10$0 = a$0$10$0[2], a30$0$10$0 = a$0$10$0[3]);
			(a01$0$10$0 = a$0$10$0[4], a11$0$10$0 = a$0$10$0[5], a21$0$10$0 = a$0$10$0[6], a31$0$10$0 = a$0$10$0[7]);
			(a02$0$10$0 = a$0$10$0[8], a12$0$10$0 = a$0$10$0[9], a22$0$10$0 = a$0$10$0[10], a32$0$10$0 = a$0$10$0[11]);
			(a03$0$10$0 = a$0$10$0[12], a13$0$10$0 = a$0$10$0[13], a23$0$10$0 = a$0$10$0[14], a33$0$10$0 = a$0$10$0[15]);
			b$0$10$0 = m$10$0._;
			(b00$0$10$0 = b$0$10$0[0], b10$0$10$0 = b$0$10$0[1], b20$0$10$0 = b$0$10$0[2], b30$0$10$0 = b$0$10$0[3]);
			(b01$0$10$0 = b$0$10$0[4], b11$0$10$0 = b$0$10$0[5], b21$0$10$0 = b$0$10$0[6], b31$0$10$0 = b$0$10$0[7]);
			(b02$0$10$0 = b$0$10$0[8], b12$0$10$0 = b$0$10$0[9], b22$0$10$0 = b$0$10$0[10], b32$0$10$0 = b$0$10$0[11]);
			(b03$0$10$0 = b$0$10$0[12], b13$0$10$0 = b$0$10$0[13], b23$0$10$0 = b$0$10$0[14], b33$0$10$0 = b$0$10$0[15]);
			a$0$10$0[0] = a00$0$10$0 * b00$0$10$0 + a01$0$10$0 * b10$0$10$0 + a02$0$10$0 * b20$0$10$0 + a03$0$10$0 * b30$0$10$0;
			a$0$10$0[1] = a10$0$10$0 * b00$0$10$0 + a11$0$10$0 * b10$0$10$0 + a12$0$10$0 * b20$0$10$0 + a13$0$10$0 * b30$0$10$0;
			a$0$10$0[2] = a20$0$10$0 * b00$0$10$0 + a21$0$10$0 * b10$0$10$0 + a22$0$10$0 * b20$0$10$0 + a23$0$10$0 * b30$0$10$0;
			a$0$10$0[3] = a30$0$10$0 * b00$0$10$0 + a31$0$10$0 * b10$0$10$0 + a32$0$10$0 * b20$0$10$0 + a33$0$10$0 * b30$0$10$0;
			a$0$10$0[4] = a00$0$10$0 * b01$0$10$0 + a01$0$10$0 * b11$0$10$0 + a02$0$10$0 * b21$0$10$0 + a03$0$10$0 * b31$0$10$0;
			a$0$10$0[5] = a10$0$10$0 * b01$0$10$0 + a11$0$10$0 * b11$0$10$0 + a12$0$10$0 * b21$0$10$0 + a13$0$10$0 * b31$0$10$0;
			a$0$10$0[6] = a20$0$10$0 * b01$0$10$0 + a21$0$10$0 * b11$0$10$0 + a22$0$10$0 * b21$0$10$0 + a23$0$10$0 * b31$0$10$0;
			a$0$10$0[7] = a30$0$10$0 * b01$0$10$0 + a31$0$10$0 * b11$0$10$0 + a32$0$10$0 * b21$0$10$0 + a33$0$10$0 * b31$0$10$0;
			a$0$10$0[8] = a00$0$10$0 * b02$0$10$0 + a01$0$10$0 * b12$0$10$0 + a02$0$10$0 * b22$0$10$0 + a03$0$10$0 * b32$0$10$0;
			a$0$10$0[9] = a10$0$10$0 * b02$0$10$0 + a11$0$10$0 * b12$0$10$0 + a12$0$10$0 * b22$0$10$0 + a13$0$10$0 * b32$0$10$0;
			a$0$10$0[10] = a20$0$10$0 * b02$0$10$0 + a21$0$10$0 * b12$0$10$0 + a22$0$10$0 * b22$0$10$0 + a23$0$10$0 * b32$0$10$0;
			a$0$10$0[11] = a30$0$10$0 * b02$0$10$0 + a31$0$10$0 * b12$0$10$0 + a32$0$10$0 * b22$0$10$0 + a33$0$10$0 * b32$0$10$0;
			a$0$10$0[12] = a00$0$10$0 * b03$0$10$0 + a01$0$10$0 * b13$0$10$0 + a02$0$10$0 * b23$0$10$0 + a03$0$10$0 * b33$0$10$0;
			a$0$10$0[13] = a10$0$10$0 * b03$0$10$0 + a11$0$10$0 * b13$0$10$0 + a12$0$10$0 * b23$0$10$0 + a13$0$10$0 * b33$0$10$0;
			a$0$10$0[14] = a20$0$10$0 * b03$0$10$0 + a21$0$10$0 * b13$0$10$0 + a22$0$10$0 * b23$0$10$0 + a23$0$10$0 * b33$0$10$0;
			a$0$10$0[15] = a30$0$10$0 * b03$0$10$0 + a31$0$10$0 * b13$0$10$0 + a32$0$10$0 * b23$0$10$0 + a33$0$10$0 * b33$0$10$0;
			this$5$0 = this$11$0;
			this$12$0 = {_: new Float32Array(16)};
			m$5$0 = M44$setRotate$LM44$NNNN(this$12$0, 1.5707963267948966, 1, 0, 0);
			a$0$5$0 = this$5$0._;
			(a00$0$5$0 = a$0$5$0[0], a10$0$5$0 = a$0$5$0[1], a20$0$5$0 = a$0$5$0[2], a30$0$5$0 = a$0$5$0[3]);
			(a01$0$5$0 = a$0$5$0[4], a11$0$5$0 = a$0$5$0[5], a21$0$5$0 = a$0$5$0[6], a31$0$5$0 = a$0$5$0[7]);
			(a02$0$5$0 = a$0$5$0[8], a12$0$5$0 = a$0$5$0[9], a22$0$5$0 = a$0$5$0[10], a32$0$5$0 = a$0$5$0[11]);
			(a03$0$5$0 = a$0$5$0[12], a13$0$5$0 = a$0$5$0[13], a23$0$5$0 = a$0$5$0[14], a33$0$5$0 = a$0$5$0[15]);
			b$0$5$0 = m$5$0._;
			(b00$0$5$0 = b$0$5$0[0], b10$0$5$0 = b$0$5$0[1], b20$0$5$0 = b$0$5$0[2], b30$0$5$0 = b$0$5$0[3]);
			(b01$0$5$0 = b$0$5$0[4], b11$0$5$0 = b$0$5$0[5], b21$0$5$0 = b$0$5$0[6], b31$0$5$0 = b$0$5$0[7]);
			(b02$0$5$0 = b$0$5$0[8], b12$0$5$0 = b$0$5$0[9], b22$0$5$0 = b$0$5$0[10], b32$0$5$0 = b$0$5$0[11]);
			(b03$0$5$0 = b$0$5$0[12], b13$0$5$0 = b$0$5$0[13], b23$0$5$0 = b$0$5$0[14], b33$0$5$0 = b$0$5$0[15]);
			a$0$5$0[0] = a00$0$5$0 * b00$0$5$0 + a01$0$5$0 * b10$0$5$0 + a02$0$5$0 * b20$0$5$0 + a03$0$5$0 * b30$0$5$0;
			a$0$5$0[1] = a10$0$5$0 * b00$0$5$0 + a11$0$5$0 * b10$0$5$0 + a12$0$5$0 * b20$0$5$0 + a13$0$5$0 * b30$0$5$0;
			a$0$5$0[2] = a20$0$5$0 * b00$0$5$0 + a21$0$5$0 * b10$0$5$0 + a22$0$5$0 * b20$0$5$0 + a23$0$5$0 * b30$0$5$0;
			a$0$5$0[3] = a30$0$5$0 * b00$0$5$0 + a31$0$5$0 * b10$0$5$0 + a32$0$5$0 * b20$0$5$0 + a33$0$5$0 * b30$0$5$0;
			a$0$5$0[4] = a00$0$5$0 * b01$0$5$0 + a01$0$5$0 * b11$0$5$0 + a02$0$5$0 * b21$0$5$0 + a03$0$5$0 * b31$0$5$0;
			a$0$5$0[5] = a10$0$5$0 * b01$0$5$0 + a11$0$5$0 * b11$0$5$0 + a12$0$5$0 * b21$0$5$0 + a13$0$5$0 * b31$0$5$0;
			a$0$5$0[6] = a20$0$5$0 * b01$0$5$0 + a21$0$5$0 * b11$0$5$0 + a22$0$5$0 * b21$0$5$0 + a23$0$5$0 * b31$0$5$0;
			a$0$5$0[7] = a30$0$5$0 * b01$0$5$0 + a31$0$5$0 * b11$0$5$0 + a32$0$5$0 * b21$0$5$0 + a33$0$5$0 * b31$0$5$0;
			a$0$5$0[8] = a00$0$5$0 * b02$0$5$0 + a01$0$5$0 * b12$0$5$0 + a02$0$5$0 * b22$0$5$0 + a03$0$5$0 * b32$0$5$0;
			a$0$5$0[9] = a10$0$5$0 * b02$0$5$0 + a11$0$5$0 * b12$0$5$0 + a12$0$5$0 * b22$0$5$0 + a13$0$5$0 * b32$0$5$0;
			a$0$5$0[10] = a20$0$5$0 * b02$0$5$0 + a21$0$5$0 * b12$0$5$0 + a22$0$5$0 * b22$0$5$0 + a23$0$5$0 * b32$0$5$0;
			a$0$5$0[11] = a30$0$5$0 * b02$0$5$0 + a31$0$5$0 * b12$0$5$0 + a32$0$5$0 * b22$0$5$0 + a33$0$5$0 * b32$0$5$0;
			a$0$5$0[12] = a00$0$5$0 * b03$0$5$0 + a01$0$5$0 * b13$0$5$0 + a02$0$5$0 * b23$0$5$0 + a03$0$5$0 * b33$0$5$0;
			a$0$5$0[13] = a10$0$5$0 * b03$0$5$0 + a11$0$5$0 * b13$0$5$0 + a12$0$5$0 * b23$0$5$0 + a13$0$5$0 * b33$0$5$0;
			a$0$5$0[14] = a20$0$5$0 * b03$0$5$0 + a21$0$5$0 * b13$0$5$0 + a22$0$5$0 * b23$0$5$0 + a23$0$5$0 * b33$0$5$0;
			a$0$5$0[15] = a30$0$5$0 * b03$0$5$0 + a31$0$5$0 * b13$0$5$0 + a32$0$5$0 * b23$0$5$0 + a33$0$5$0 * b33$0$5$0;
			this$0$0 = this$5$0;
			this$6$0 = {_: new Float32Array(16)};
			m$0$0 = M44$setRotate$LM44$NNNN(this$6$0, 1.5707963267948966, 0, 1, 0);
			a$0$0$0 = this$0$0._;
			(a00$0$0$0 = a$0$0$0[0], a10$0$0$0 = a$0$0$0[1], a20$0$0$0 = a$0$0$0[2], a30$0$0$0 = a$0$0$0[3]);
			(a01$0$0$0 = a$0$0$0[4], a11$0$0$0 = a$0$0$0[5], a21$0$0$0 = a$0$0$0[6], a31$0$0$0 = a$0$0$0[7]);
			(a02$0$0$0 = a$0$0$0[8], a12$0$0$0 = a$0$0$0[9], a22$0$0$0 = a$0$0$0[10], a32$0$0$0 = a$0$0$0[11]);
			(a03$0$0$0 = a$0$0$0[12], a13$0$0$0 = a$0$0$0[13], a23$0$0$0 = a$0$0$0[14], a33$0$0$0 = a$0$0$0[15]);
			b$0$0$0 = m$0$0._;
			(b00$0$0$0 = b$0$0$0[0], b10$0$0$0 = b$0$0$0[1], b20$0$0$0 = b$0$0$0[2], b30$0$0$0 = b$0$0$0[3]);
			(b01$0$0$0 = b$0$0$0[4], b11$0$0$0 = b$0$0$0[5], b21$0$0$0 = b$0$0$0[6], b31$0$0$0 = b$0$0$0[7]);
			(b02$0$0$0 = b$0$0$0[8], b12$0$0$0 = b$0$0$0[9], b22$0$0$0 = b$0$0$0[10], b32$0$0$0 = b$0$0$0[11]);
			(b03$0$0$0 = b$0$0$0[12], b13$0$0$0 = b$0$0$0[13], b23$0$0$0 = b$0$0$0[14], b33$0$0$0 = b$0$0$0[15]);
			a$0$0$0[0] = a00$0$0$0 * b00$0$0$0 + a01$0$0$0 * b10$0$0$0 + a02$0$0$0 * b20$0$0$0 + a03$0$0$0 * b30$0$0$0;
			a$0$0$0[1] = a10$0$0$0 * b00$0$0$0 + a11$0$0$0 * b10$0$0$0 + a12$0$0$0 * b20$0$0$0 + a13$0$0$0 * b30$0$0$0;
			a$0$0$0[2] = a20$0$0$0 * b00$0$0$0 + a21$0$0$0 * b10$0$0$0 + a22$0$0$0 * b20$0$0$0 + a23$0$0$0 * b30$0$0$0;
			a$0$0$0[3] = a30$0$0$0 * b00$0$0$0 + a31$0$0$0 * b10$0$0$0 + a32$0$0$0 * b20$0$0$0 + a33$0$0$0 * b30$0$0$0;
			a$0$0$0[4] = a00$0$0$0 * b01$0$0$0 + a01$0$0$0 * b11$0$0$0 + a02$0$0$0 * b21$0$0$0 + a03$0$0$0 * b31$0$0$0;
			a$0$0$0[5] = a10$0$0$0 * b01$0$0$0 + a11$0$0$0 * b11$0$0$0 + a12$0$0$0 * b21$0$0$0 + a13$0$0$0 * b31$0$0$0;
			a$0$0$0[6] = a20$0$0$0 * b01$0$0$0 + a21$0$0$0 * b11$0$0$0 + a22$0$0$0 * b21$0$0$0 + a23$0$0$0 * b31$0$0$0;
			a$0$0$0[7] = a30$0$0$0 * b01$0$0$0 + a31$0$0$0 * b11$0$0$0 + a32$0$0$0 * b21$0$0$0 + a33$0$0$0 * b31$0$0$0;
			a$0$0$0[8] = a00$0$0$0 * b02$0$0$0 + a01$0$0$0 * b12$0$0$0 + a02$0$0$0 * b22$0$0$0 + a03$0$0$0 * b32$0$0$0;
			a$0$0$0[9] = a10$0$0$0 * b02$0$0$0 + a11$0$0$0 * b12$0$0$0 + a12$0$0$0 * b22$0$0$0 + a13$0$0$0 * b32$0$0$0;
			a$0$0$0[10] = a20$0$0$0 * b02$0$0$0 + a21$0$0$0 * b12$0$0$0 + a22$0$0$0 * b22$0$0$0 + a23$0$0$0 * b32$0$0$0;
			a$0$0$0[11] = a30$0$0$0 * b02$0$0$0 + a31$0$0$0 * b12$0$0$0 + a32$0$0$0 * b22$0$0$0 + a33$0$0$0 * b32$0$0$0;
			a$0$0$0[12] = a00$0$0$0 * b03$0$0$0 + a01$0$0$0 * b13$0$0$0 + a02$0$0$0 * b23$0$0$0 + a03$0$0$0 * b33$0$0$0;
			a$0$0$0[13] = a10$0$0$0 * b03$0$0$0 + a11$0$0$0 * b13$0$0$0 + a12$0$0$0 * b23$0$0$0 + a13$0$0$0 * b33$0$0$0;
			a$0$0$0[14] = a20$0$0$0 * b03$0$0$0 + a21$0$0$0 * b13$0$0$0 + a22$0$0$0 * b23$0$0$0 + a23$0$0$0 * b33$0$0$0;
			a$0$0$0[15] = a30$0$0$0 * b03$0$0$0 + a31$0$0$0 * b13$0$0$0 + a32$0$0$0 * b23$0$0$0 + a33$0$0$0 * b33$0$0$0;
			bodyMat$0 = this$0$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, this$0$0._);
			p$0$0 = Kingyo.body;
			gl$0$0 = Kingyo.gl;
			gl$0$0.bindBuffer(gl$0$0.ARRAY_BUFFER, p$0$0.vbuf);
			gl$0$0.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$0$0.FLOAT, false, 0, 0);
			gl$0$0.bindBuffer(gl$0$0.ARRAY_BUFFER, p$0$0.nbuf);
			gl$0$0.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$0$0.FLOAT, false, 0, 0);
			gl$0$0.bindBuffer(gl$0$0.ELEMENT_ARRAY_BUFFER, p$0$0.ibuf);
			gl$0$0.drawElements(gl$0$0.TRIANGLES, p$0$0.numi, gl$0$0.UNSIGNED_SHORT, 0);
			this$7$0 = new M44$LM44$(this$0$0);
			this$13$0 = {_: new Float32Array(16)};
			M44$setIdentity$LM44$(this$13$0);
			this$13$0._[12] = 0.5;
			this$13$0._[13] = -0.3;
			this$13$0._[14] = 0;
			a$0$6$0 = this$7$0._;
			(a00$0$6$0 = a$0$6$0[0], a10$0$6$0 = a$0$6$0[1], a20$0$6$0 = a$0$6$0[2], a30$0$6$0 = a$0$6$0[3]);
			(a01$0$6$0 = a$0$6$0[4], a11$0$6$0 = a$0$6$0[5], a21$0$6$0 = a$0$6$0[6], a31$0$6$0 = a$0$6$0[7]);
			(a02$0$6$0 = a$0$6$0[8], a12$0$6$0 = a$0$6$0[9], a22$0$6$0 = a$0$6$0[10], a32$0$6$0 = a$0$6$0[11]);
			(a03$0$6$0 = a$0$6$0[12], a13$0$6$0 = a$0$6$0[13], a23$0$6$0 = a$0$6$0[14], a33$0$6$0 = a$0$6$0[15]);
			b$0$6$0 = this$13$0._;
			(b00$0$6$0 = b$0$6$0[0], b10$0$6$0 = b$0$6$0[1], b20$0$6$0 = b$0$6$0[2], b30$0$6$0 = b$0$6$0[3]);
			(b01$0$6$0 = b$0$6$0[4], b11$0$6$0 = b$0$6$0[5], b21$0$6$0 = b$0$6$0[6], b31$0$6$0 = b$0$6$0[7]);
			(b02$0$6$0 = b$0$6$0[8], b12$0$6$0 = b$0$6$0[9], b22$0$6$0 = b$0$6$0[10], b32$0$6$0 = b$0$6$0[11]);
			(b03$0$6$0 = b$0$6$0[12], b13$0$6$0 = b$0$6$0[13], b23$0$6$0 = b$0$6$0[14], b33$0$6$0 = b$0$6$0[15]);
			a$0$6$0[0] = a00$0$6$0 * b00$0$6$0 + a01$0$6$0 * b10$0$6$0 + a02$0$6$0 * b20$0$6$0 + a03$0$6$0 * b30$0$6$0;
			a$0$6$0[1] = a10$0$6$0 * b00$0$6$0 + a11$0$6$0 * b10$0$6$0 + a12$0$6$0 * b20$0$6$0 + a13$0$6$0 * b30$0$6$0;
			a$0$6$0[2] = a20$0$6$0 * b00$0$6$0 + a21$0$6$0 * b10$0$6$0 + a22$0$6$0 * b20$0$6$0 + a23$0$6$0 * b30$0$6$0;
			a$0$6$0[3] = a30$0$6$0 * b00$0$6$0 + a31$0$6$0 * b10$0$6$0 + a32$0$6$0 * b20$0$6$0 + a33$0$6$0 * b30$0$6$0;
			a$0$6$0[4] = a00$0$6$0 * b01$0$6$0 + a01$0$6$0 * b11$0$6$0 + a02$0$6$0 * b21$0$6$0 + a03$0$6$0 * b31$0$6$0;
			a$0$6$0[5] = a10$0$6$0 * b01$0$6$0 + a11$0$6$0 * b11$0$6$0 + a12$0$6$0 * b21$0$6$0 + a13$0$6$0 * b31$0$6$0;
			a$0$6$0[6] = a20$0$6$0 * b01$0$6$0 + a21$0$6$0 * b11$0$6$0 + a22$0$6$0 * b21$0$6$0 + a23$0$6$0 * b31$0$6$0;
			a$0$6$0[7] = a30$0$6$0 * b01$0$6$0 + a31$0$6$0 * b11$0$6$0 + a32$0$6$0 * b21$0$6$0 + a33$0$6$0 * b31$0$6$0;
			a$0$6$0[8] = a00$0$6$0 * b02$0$6$0 + a01$0$6$0 * b12$0$6$0 + a02$0$6$0 * b22$0$6$0 + a03$0$6$0 * b32$0$6$0;
			a$0$6$0[9] = a10$0$6$0 * b02$0$6$0 + a11$0$6$0 * b12$0$6$0 + a12$0$6$0 * b22$0$6$0 + a13$0$6$0 * b32$0$6$0;
			a$0$6$0[10] = a20$0$6$0 * b02$0$6$0 + a21$0$6$0 * b12$0$6$0 + a22$0$6$0 * b22$0$6$0 + a23$0$6$0 * b32$0$6$0;
			a$0$6$0[11] = a30$0$6$0 * b02$0$6$0 + a31$0$6$0 * b12$0$6$0 + a32$0$6$0 * b22$0$6$0 + a33$0$6$0 * b32$0$6$0;
			a$0$6$0[12] = a00$0$6$0 * b03$0$6$0 + a01$0$6$0 * b13$0$6$0 + a02$0$6$0 * b23$0$6$0 + a03$0$6$0 * b33$0$6$0;
			a$0$6$0[13] = a10$0$6$0 * b03$0$6$0 + a11$0$6$0 * b13$0$6$0 + a12$0$6$0 * b23$0$6$0 + a13$0$6$0 * b33$0$6$0;
			a$0$6$0[14] = a20$0$6$0 * b03$0$6$0 + a21$0$6$0 * b13$0$6$0 + a22$0$6$0 * b23$0$6$0 + a23$0$6$0 * b33$0$6$0;
			a$0$6$0[15] = a30$0$6$0 * b03$0$6$0 + a31$0$6$0 * b13$0$6$0 + a32$0$6$0 * b23$0$6$0 + a33$0$6$0 * b33$0$6$0;
			this$1$0 = this$7$0;
			m$1$0 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, 1 + s$0 / 2, 0.2, 1, -0.5);
			a$0$1$0 = this$1$0._;
			(a00$0$1$0 = a$0$1$0[0], a10$0$1$0 = a$0$1$0[1], a20$0$1$0 = a$0$1$0[2], a30$0$1$0 = a$0$1$0[3]);
			(a01$0$1$0 = a$0$1$0[4], a11$0$1$0 = a$0$1$0[5], a21$0$1$0 = a$0$1$0[6], a31$0$1$0 = a$0$1$0[7]);
			(a02$0$1$0 = a$0$1$0[8], a12$0$1$0 = a$0$1$0[9], a22$0$1$0 = a$0$1$0[10], a32$0$1$0 = a$0$1$0[11]);
			(a03$0$1$0 = a$0$1$0[12], a13$0$1$0 = a$0$1$0[13], a23$0$1$0 = a$0$1$0[14], a33$0$1$0 = a$0$1$0[15]);
			b$0$1$0 = m$1$0._;
			(b00$0$1$0 = b$0$1$0[0], b10$0$1$0 = b$0$1$0[1], b20$0$1$0 = b$0$1$0[2], b30$0$1$0 = b$0$1$0[3]);
			(b01$0$1$0 = b$0$1$0[4], b11$0$1$0 = b$0$1$0[5], b21$0$1$0 = b$0$1$0[6], b31$0$1$0 = b$0$1$0[7]);
			(b02$0$1$0 = b$0$1$0[8], b12$0$1$0 = b$0$1$0[9], b22$0$1$0 = b$0$1$0[10], b32$0$1$0 = b$0$1$0[11]);
			(b03$0$1$0 = b$0$1$0[12], b13$0$1$0 = b$0$1$0[13], b23$0$1$0 = b$0$1$0[14], b33$0$1$0 = b$0$1$0[15]);
			a$0$1$0[0] = a00$0$1$0 * b00$0$1$0 + a01$0$1$0 * b10$0$1$0 + a02$0$1$0 * b20$0$1$0 + a03$0$1$0 * b30$0$1$0;
			a$0$1$0[1] = a10$0$1$0 * b00$0$1$0 + a11$0$1$0 * b10$0$1$0 + a12$0$1$0 * b20$0$1$0 + a13$0$1$0 * b30$0$1$0;
			a$0$1$0[2] = a20$0$1$0 * b00$0$1$0 + a21$0$1$0 * b10$0$1$0 + a22$0$1$0 * b20$0$1$0 + a23$0$1$0 * b30$0$1$0;
			a$0$1$0[3] = a30$0$1$0 * b00$0$1$0 + a31$0$1$0 * b10$0$1$0 + a32$0$1$0 * b20$0$1$0 + a33$0$1$0 * b30$0$1$0;
			a$0$1$0[4] = a00$0$1$0 * b01$0$1$0 + a01$0$1$0 * b11$0$1$0 + a02$0$1$0 * b21$0$1$0 + a03$0$1$0 * b31$0$1$0;
			a$0$1$0[5] = a10$0$1$0 * b01$0$1$0 + a11$0$1$0 * b11$0$1$0 + a12$0$1$0 * b21$0$1$0 + a13$0$1$0 * b31$0$1$0;
			a$0$1$0[6] = a20$0$1$0 * b01$0$1$0 + a21$0$1$0 * b11$0$1$0 + a22$0$1$0 * b21$0$1$0 + a23$0$1$0 * b31$0$1$0;
			a$0$1$0[7] = a30$0$1$0 * b01$0$1$0 + a31$0$1$0 * b11$0$1$0 + a32$0$1$0 * b21$0$1$0 + a33$0$1$0 * b31$0$1$0;
			a$0$1$0[8] = a00$0$1$0 * b02$0$1$0 + a01$0$1$0 * b12$0$1$0 + a02$0$1$0 * b22$0$1$0 + a03$0$1$0 * b32$0$1$0;
			a$0$1$0[9] = a10$0$1$0 * b02$0$1$0 + a11$0$1$0 * b12$0$1$0 + a12$0$1$0 * b22$0$1$0 + a13$0$1$0 * b32$0$1$0;
			a$0$1$0[10] = a20$0$1$0 * b02$0$1$0 + a21$0$1$0 * b12$0$1$0 + a22$0$1$0 * b22$0$1$0 + a23$0$1$0 * b32$0$1$0;
			a$0$1$0[11] = a30$0$1$0 * b02$0$1$0 + a31$0$1$0 * b12$0$1$0 + a32$0$1$0 * b22$0$1$0 + a33$0$1$0 * b32$0$1$0;
			a$0$1$0[12] = a00$0$1$0 * b03$0$1$0 + a01$0$1$0 * b13$0$1$0 + a02$0$1$0 * b23$0$1$0 + a03$0$1$0 * b33$0$1$0;
			a$0$1$0[13] = a10$0$1$0 * b03$0$1$0 + a11$0$1$0 * b13$0$1$0 + a12$0$1$0 * b23$0$1$0 + a13$0$1$0 * b33$0$1$0;
			a$0$1$0[14] = a20$0$1$0 * b03$0$1$0 + a21$0$1$0 * b13$0$1$0 + a22$0$1$0 * b23$0$1$0 + a23$0$1$0 * b33$0$1$0;
			a$0$1$0[15] = a30$0$1$0 * b03$0$1$0 + a31$0$1$0 * b13$0$1$0 + a32$0$1$0 * b23$0$1$0 + a33$0$1$0 * b33$0$1$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, this$1$0._);
			p$1$0 = Kingyo.lfin;
			gl$1$0 = Kingyo.gl;
			gl$1$0.bindBuffer(gl$1$0.ARRAY_BUFFER, p$1$0.vbuf);
			gl$1$0.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$1$0.FLOAT, false, 0, 0);
			gl$1$0.bindBuffer(gl$1$0.ARRAY_BUFFER, p$1$0.nbuf);
			gl$1$0.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$1$0.FLOAT, false, 0, 0);
			gl$1$0.bindBuffer(gl$1$0.ELEMENT_ARRAY_BUFFER, p$1$0.ibuf);
			gl$1$0.drawElements(gl$1$0.TRIANGLES, p$1$0.numi, gl$1$0.UNSIGNED_SHORT, 0);
			this$8$0 = new M44$LM44$(bodyMat$0);
			this$14$0 = {_: new Float32Array(16)};
			M44$setIdentity$LM44$(this$14$0);
			this$14$0._[12] = -0.5;
			this$14$0._[13] = -0.3;
			this$14$0._[14] = 0;
			a$0$7$0 = this$8$0._;
			(a00$0$7$0 = a$0$7$0[0], a10$0$7$0 = a$0$7$0[1], a20$0$7$0 = a$0$7$0[2], a30$0$7$0 = a$0$7$0[3]);
			(a01$0$7$0 = a$0$7$0[4], a11$0$7$0 = a$0$7$0[5], a21$0$7$0 = a$0$7$0[6], a31$0$7$0 = a$0$7$0[7]);
			(a02$0$7$0 = a$0$7$0[8], a12$0$7$0 = a$0$7$0[9], a22$0$7$0 = a$0$7$0[10], a32$0$7$0 = a$0$7$0[11]);
			(a03$0$7$0 = a$0$7$0[12], a13$0$7$0 = a$0$7$0[13], a23$0$7$0 = a$0$7$0[14], a33$0$7$0 = a$0$7$0[15]);
			b$0$7$0 = this$14$0._;
			(b00$0$7$0 = b$0$7$0[0], b10$0$7$0 = b$0$7$0[1], b20$0$7$0 = b$0$7$0[2], b30$0$7$0 = b$0$7$0[3]);
			(b01$0$7$0 = b$0$7$0[4], b11$0$7$0 = b$0$7$0[5], b21$0$7$0 = b$0$7$0[6], b31$0$7$0 = b$0$7$0[7]);
			(b02$0$7$0 = b$0$7$0[8], b12$0$7$0 = b$0$7$0[9], b22$0$7$0 = b$0$7$0[10], b32$0$7$0 = b$0$7$0[11]);
			(b03$0$7$0 = b$0$7$0[12], b13$0$7$0 = b$0$7$0[13], b23$0$7$0 = b$0$7$0[14], b33$0$7$0 = b$0$7$0[15]);
			a$0$7$0[0] = a00$0$7$0 * b00$0$7$0 + a01$0$7$0 * b10$0$7$0 + a02$0$7$0 * b20$0$7$0 + a03$0$7$0 * b30$0$7$0;
			a$0$7$0[1] = a10$0$7$0 * b00$0$7$0 + a11$0$7$0 * b10$0$7$0 + a12$0$7$0 * b20$0$7$0 + a13$0$7$0 * b30$0$7$0;
			a$0$7$0[2] = a20$0$7$0 * b00$0$7$0 + a21$0$7$0 * b10$0$7$0 + a22$0$7$0 * b20$0$7$0 + a23$0$7$0 * b30$0$7$0;
			a$0$7$0[3] = a30$0$7$0 * b00$0$7$0 + a31$0$7$0 * b10$0$7$0 + a32$0$7$0 * b20$0$7$0 + a33$0$7$0 * b30$0$7$0;
			a$0$7$0[4] = a00$0$7$0 * b01$0$7$0 + a01$0$7$0 * b11$0$7$0 + a02$0$7$0 * b21$0$7$0 + a03$0$7$0 * b31$0$7$0;
			a$0$7$0[5] = a10$0$7$0 * b01$0$7$0 + a11$0$7$0 * b11$0$7$0 + a12$0$7$0 * b21$0$7$0 + a13$0$7$0 * b31$0$7$0;
			a$0$7$0[6] = a20$0$7$0 * b01$0$7$0 + a21$0$7$0 * b11$0$7$0 + a22$0$7$0 * b21$0$7$0 + a23$0$7$0 * b31$0$7$0;
			a$0$7$0[7] = a30$0$7$0 * b01$0$7$0 + a31$0$7$0 * b11$0$7$0 + a32$0$7$0 * b21$0$7$0 + a33$0$7$0 * b31$0$7$0;
			a$0$7$0[8] = a00$0$7$0 * b02$0$7$0 + a01$0$7$0 * b12$0$7$0 + a02$0$7$0 * b22$0$7$0 + a03$0$7$0 * b32$0$7$0;
			a$0$7$0[9] = a10$0$7$0 * b02$0$7$0 + a11$0$7$0 * b12$0$7$0 + a12$0$7$0 * b22$0$7$0 + a13$0$7$0 * b32$0$7$0;
			a$0$7$0[10] = a20$0$7$0 * b02$0$7$0 + a21$0$7$0 * b12$0$7$0 + a22$0$7$0 * b22$0$7$0 + a23$0$7$0 * b32$0$7$0;
			a$0$7$0[11] = a30$0$7$0 * b02$0$7$0 + a31$0$7$0 * b12$0$7$0 + a32$0$7$0 * b22$0$7$0 + a33$0$7$0 * b32$0$7$0;
			a$0$7$0[12] = a00$0$7$0 * b03$0$7$0 + a01$0$7$0 * b13$0$7$0 + a02$0$7$0 * b23$0$7$0 + a03$0$7$0 * b33$0$7$0;
			a$0$7$0[13] = a10$0$7$0 * b03$0$7$0 + a11$0$7$0 * b13$0$7$0 + a12$0$7$0 * b23$0$7$0 + a13$0$7$0 * b33$0$7$0;
			a$0$7$0[14] = a20$0$7$0 * b03$0$7$0 + a21$0$7$0 * b13$0$7$0 + a22$0$7$0 * b23$0$7$0 + a23$0$7$0 * b33$0$7$0;
			a$0$7$0[15] = a30$0$7$0 * b03$0$7$0 + a31$0$7$0 * b13$0$7$0 + a32$0$7$0 * b23$0$7$0 + a33$0$7$0 * b33$0$7$0;
			this$2$0 = this$8$0;
			m$2$0 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, -1 - s$0 / 2, -0.2, 1, -0.5);
			a$0$2$0 = this$2$0._;
			(a00$0$2$0 = a$0$2$0[0], a10$0$2$0 = a$0$2$0[1], a20$0$2$0 = a$0$2$0[2], a30$0$2$0 = a$0$2$0[3]);
			(a01$0$2$0 = a$0$2$0[4], a11$0$2$0 = a$0$2$0[5], a21$0$2$0 = a$0$2$0[6], a31$0$2$0 = a$0$2$0[7]);
			(a02$0$2$0 = a$0$2$0[8], a12$0$2$0 = a$0$2$0[9], a22$0$2$0 = a$0$2$0[10], a32$0$2$0 = a$0$2$0[11]);
			(a03$0$2$0 = a$0$2$0[12], a13$0$2$0 = a$0$2$0[13], a23$0$2$0 = a$0$2$0[14], a33$0$2$0 = a$0$2$0[15]);
			b$0$2$0 = m$2$0._;
			(b00$0$2$0 = b$0$2$0[0], b10$0$2$0 = b$0$2$0[1], b20$0$2$0 = b$0$2$0[2], b30$0$2$0 = b$0$2$0[3]);
			(b01$0$2$0 = b$0$2$0[4], b11$0$2$0 = b$0$2$0[5], b21$0$2$0 = b$0$2$0[6], b31$0$2$0 = b$0$2$0[7]);
			(b02$0$2$0 = b$0$2$0[8], b12$0$2$0 = b$0$2$0[9], b22$0$2$0 = b$0$2$0[10], b32$0$2$0 = b$0$2$0[11]);
			(b03$0$2$0 = b$0$2$0[12], b13$0$2$0 = b$0$2$0[13], b23$0$2$0 = b$0$2$0[14], b33$0$2$0 = b$0$2$0[15]);
			a$0$2$0[0] = a00$0$2$0 * b00$0$2$0 + a01$0$2$0 * b10$0$2$0 + a02$0$2$0 * b20$0$2$0 + a03$0$2$0 * b30$0$2$0;
			a$0$2$0[1] = a10$0$2$0 * b00$0$2$0 + a11$0$2$0 * b10$0$2$0 + a12$0$2$0 * b20$0$2$0 + a13$0$2$0 * b30$0$2$0;
			a$0$2$0[2] = a20$0$2$0 * b00$0$2$0 + a21$0$2$0 * b10$0$2$0 + a22$0$2$0 * b20$0$2$0 + a23$0$2$0 * b30$0$2$0;
			a$0$2$0[3] = a30$0$2$0 * b00$0$2$0 + a31$0$2$0 * b10$0$2$0 + a32$0$2$0 * b20$0$2$0 + a33$0$2$0 * b30$0$2$0;
			a$0$2$0[4] = a00$0$2$0 * b01$0$2$0 + a01$0$2$0 * b11$0$2$0 + a02$0$2$0 * b21$0$2$0 + a03$0$2$0 * b31$0$2$0;
			a$0$2$0[5] = a10$0$2$0 * b01$0$2$0 + a11$0$2$0 * b11$0$2$0 + a12$0$2$0 * b21$0$2$0 + a13$0$2$0 * b31$0$2$0;
			a$0$2$0[6] = a20$0$2$0 * b01$0$2$0 + a21$0$2$0 * b11$0$2$0 + a22$0$2$0 * b21$0$2$0 + a23$0$2$0 * b31$0$2$0;
			a$0$2$0[7] = a30$0$2$0 * b01$0$2$0 + a31$0$2$0 * b11$0$2$0 + a32$0$2$0 * b21$0$2$0 + a33$0$2$0 * b31$0$2$0;
			a$0$2$0[8] = a00$0$2$0 * b02$0$2$0 + a01$0$2$0 * b12$0$2$0 + a02$0$2$0 * b22$0$2$0 + a03$0$2$0 * b32$0$2$0;
			a$0$2$0[9] = a10$0$2$0 * b02$0$2$0 + a11$0$2$0 * b12$0$2$0 + a12$0$2$0 * b22$0$2$0 + a13$0$2$0 * b32$0$2$0;
			a$0$2$0[10] = a20$0$2$0 * b02$0$2$0 + a21$0$2$0 * b12$0$2$0 + a22$0$2$0 * b22$0$2$0 + a23$0$2$0 * b32$0$2$0;
			a$0$2$0[11] = a30$0$2$0 * b02$0$2$0 + a31$0$2$0 * b12$0$2$0 + a32$0$2$0 * b22$0$2$0 + a33$0$2$0 * b32$0$2$0;
			a$0$2$0[12] = a00$0$2$0 * b03$0$2$0 + a01$0$2$0 * b13$0$2$0 + a02$0$2$0 * b23$0$2$0 + a03$0$2$0 * b33$0$2$0;
			a$0$2$0[13] = a10$0$2$0 * b03$0$2$0 + a11$0$2$0 * b13$0$2$0 + a12$0$2$0 * b23$0$2$0 + a13$0$2$0 * b33$0$2$0;
			a$0$2$0[14] = a20$0$2$0 * b03$0$2$0 + a21$0$2$0 * b13$0$2$0 + a22$0$2$0 * b23$0$2$0 + a23$0$2$0 * b33$0$2$0;
			a$0$2$0[15] = a30$0$2$0 * b03$0$2$0 + a31$0$2$0 * b13$0$2$0 + a32$0$2$0 * b23$0$2$0 + a33$0$2$0 * b33$0$2$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, this$2$0._);
			p$2$0 = Kingyo.rfin;
			gl$2$0 = Kingyo.gl;
			gl$2$0.bindBuffer(gl$2$0.ARRAY_BUFFER, p$2$0.vbuf);
			gl$2$0.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$2$0.FLOAT, false, 0, 0);
			gl$2$0.bindBuffer(gl$2$0.ARRAY_BUFFER, p$2$0.nbuf);
			gl$2$0.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$2$0.FLOAT, false, 0, 0);
			gl$2$0.bindBuffer(gl$2$0.ELEMENT_ARRAY_BUFFER, p$2$0.ibuf);
			gl$2$0.drawElements(gl$2$0.TRIANGLES, p$2$0.numi, gl$2$0.UNSIGNED_SHORT, 0);
			this$9$0 = new M44$LM44$(bodyMat$0);
			this$15$0 = {_: new Float32Array(16)};
			M44$setIdentity$LM44$(this$15$0);
			this$15$0._[12] = 0;
			this$15$0._[13] = 0.7;
			this$15$0._[14] = 0;
			a$0$8$0 = this$9$0._;
			(a00$0$8$0 = a$0$8$0[0], a10$0$8$0 = a$0$8$0[1], a20$0$8$0 = a$0$8$0[2], a30$0$8$0 = a$0$8$0[3]);
			(a01$0$8$0 = a$0$8$0[4], a11$0$8$0 = a$0$8$0[5], a21$0$8$0 = a$0$8$0[6], a31$0$8$0 = a$0$8$0[7]);
			(a02$0$8$0 = a$0$8$0[8], a12$0$8$0 = a$0$8$0[9], a22$0$8$0 = a$0$8$0[10], a32$0$8$0 = a$0$8$0[11]);
			(a03$0$8$0 = a$0$8$0[12], a13$0$8$0 = a$0$8$0[13], a23$0$8$0 = a$0$8$0[14], a33$0$8$0 = a$0$8$0[15]);
			b$0$8$0 = this$15$0._;
			(b00$0$8$0 = b$0$8$0[0], b10$0$8$0 = b$0$8$0[1], b20$0$8$0 = b$0$8$0[2], b30$0$8$0 = b$0$8$0[3]);
			(b01$0$8$0 = b$0$8$0[4], b11$0$8$0 = b$0$8$0[5], b21$0$8$0 = b$0$8$0[6], b31$0$8$0 = b$0$8$0[7]);
			(b02$0$8$0 = b$0$8$0[8], b12$0$8$0 = b$0$8$0[9], b22$0$8$0 = b$0$8$0[10], b32$0$8$0 = b$0$8$0[11]);
			(b03$0$8$0 = b$0$8$0[12], b13$0$8$0 = b$0$8$0[13], b23$0$8$0 = b$0$8$0[14], b33$0$8$0 = b$0$8$0[15]);
			a$0$8$0[0] = a00$0$8$0 * b00$0$8$0 + a01$0$8$0 * b10$0$8$0 + a02$0$8$0 * b20$0$8$0 + a03$0$8$0 * b30$0$8$0;
			a$0$8$0[1] = a10$0$8$0 * b00$0$8$0 + a11$0$8$0 * b10$0$8$0 + a12$0$8$0 * b20$0$8$0 + a13$0$8$0 * b30$0$8$0;
			a$0$8$0[2] = a20$0$8$0 * b00$0$8$0 + a21$0$8$0 * b10$0$8$0 + a22$0$8$0 * b20$0$8$0 + a23$0$8$0 * b30$0$8$0;
			a$0$8$0[3] = a30$0$8$0 * b00$0$8$0 + a31$0$8$0 * b10$0$8$0 + a32$0$8$0 * b20$0$8$0 + a33$0$8$0 * b30$0$8$0;
			a$0$8$0[4] = a00$0$8$0 * b01$0$8$0 + a01$0$8$0 * b11$0$8$0 + a02$0$8$0 * b21$0$8$0 + a03$0$8$0 * b31$0$8$0;
			a$0$8$0[5] = a10$0$8$0 * b01$0$8$0 + a11$0$8$0 * b11$0$8$0 + a12$0$8$0 * b21$0$8$0 + a13$0$8$0 * b31$0$8$0;
			a$0$8$0[6] = a20$0$8$0 * b01$0$8$0 + a21$0$8$0 * b11$0$8$0 + a22$0$8$0 * b21$0$8$0 + a23$0$8$0 * b31$0$8$0;
			a$0$8$0[7] = a30$0$8$0 * b01$0$8$0 + a31$0$8$0 * b11$0$8$0 + a32$0$8$0 * b21$0$8$0 + a33$0$8$0 * b31$0$8$0;
			a$0$8$0[8] = a00$0$8$0 * b02$0$8$0 + a01$0$8$0 * b12$0$8$0 + a02$0$8$0 * b22$0$8$0 + a03$0$8$0 * b32$0$8$0;
			a$0$8$0[9] = a10$0$8$0 * b02$0$8$0 + a11$0$8$0 * b12$0$8$0 + a12$0$8$0 * b22$0$8$0 + a13$0$8$0 * b32$0$8$0;
			a$0$8$0[10] = a20$0$8$0 * b02$0$8$0 + a21$0$8$0 * b12$0$8$0 + a22$0$8$0 * b22$0$8$0 + a23$0$8$0 * b32$0$8$0;
			a$0$8$0[11] = a30$0$8$0 * b02$0$8$0 + a31$0$8$0 * b12$0$8$0 + a32$0$8$0 * b22$0$8$0 + a33$0$8$0 * b32$0$8$0;
			a$0$8$0[12] = a00$0$8$0 * b03$0$8$0 + a01$0$8$0 * b13$0$8$0 + a02$0$8$0 * b23$0$8$0 + a03$0$8$0 * b33$0$8$0;
			a$0$8$0[13] = a10$0$8$0 * b03$0$8$0 + a11$0$8$0 * b13$0$8$0 + a12$0$8$0 * b23$0$8$0 + a13$0$8$0 * b33$0$8$0;
			a$0$8$0[14] = a20$0$8$0 * b03$0$8$0 + a21$0$8$0 * b13$0$8$0 + a22$0$8$0 * b23$0$8$0 + a23$0$8$0 * b33$0$8$0;
			a$0$8$0[15] = a30$0$8$0 * b03$0$8$0 + a31$0$8$0 * b13$0$8$0 + a32$0$8$0 * b23$0$8$0 + a33$0$8$0 * b33$0$8$0;
			this$3$0 = this$9$0;
			m$3$0 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, s$0 / 2, 0, 1, 1);
			a$0$3$0 = this$3$0._;
			(a00$0$3$0 = a$0$3$0[0], a10$0$3$0 = a$0$3$0[1], a20$0$3$0 = a$0$3$0[2], a30$0$3$0 = a$0$3$0[3]);
			(a01$0$3$0 = a$0$3$0[4], a11$0$3$0 = a$0$3$0[5], a21$0$3$0 = a$0$3$0[6], a31$0$3$0 = a$0$3$0[7]);
			(a02$0$3$0 = a$0$3$0[8], a12$0$3$0 = a$0$3$0[9], a22$0$3$0 = a$0$3$0[10], a32$0$3$0 = a$0$3$0[11]);
			(a03$0$3$0 = a$0$3$0[12], a13$0$3$0 = a$0$3$0[13], a23$0$3$0 = a$0$3$0[14], a33$0$3$0 = a$0$3$0[15]);
			b$0$3$0 = m$3$0._;
			(b00$0$3$0 = b$0$3$0[0], b10$0$3$0 = b$0$3$0[1], b20$0$3$0 = b$0$3$0[2], b30$0$3$0 = b$0$3$0[3]);
			(b01$0$3$0 = b$0$3$0[4], b11$0$3$0 = b$0$3$0[5], b21$0$3$0 = b$0$3$0[6], b31$0$3$0 = b$0$3$0[7]);
			(b02$0$3$0 = b$0$3$0[8], b12$0$3$0 = b$0$3$0[9], b22$0$3$0 = b$0$3$0[10], b32$0$3$0 = b$0$3$0[11]);
			(b03$0$3$0 = b$0$3$0[12], b13$0$3$0 = b$0$3$0[13], b23$0$3$0 = b$0$3$0[14], b33$0$3$0 = b$0$3$0[15]);
			a$0$3$0[0] = a00$0$3$0 * b00$0$3$0 + a01$0$3$0 * b10$0$3$0 + a02$0$3$0 * b20$0$3$0 + a03$0$3$0 * b30$0$3$0;
			a$0$3$0[1] = a10$0$3$0 * b00$0$3$0 + a11$0$3$0 * b10$0$3$0 + a12$0$3$0 * b20$0$3$0 + a13$0$3$0 * b30$0$3$0;
			a$0$3$0[2] = a20$0$3$0 * b00$0$3$0 + a21$0$3$0 * b10$0$3$0 + a22$0$3$0 * b20$0$3$0 + a23$0$3$0 * b30$0$3$0;
			a$0$3$0[3] = a30$0$3$0 * b00$0$3$0 + a31$0$3$0 * b10$0$3$0 + a32$0$3$0 * b20$0$3$0 + a33$0$3$0 * b30$0$3$0;
			a$0$3$0[4] = a00$0$3$0 * b01$0$3$0 + a01$0$3$0 * b11$0$3$0 + a02$0$3$0 * b21$0$3$0 + a03$0$3$0 * b31$0$3$0;
			a$0$3$0[5] = a10$0$3$0 * b01$0$3$0 + a11$0$3$0 * b11$0$3$0 + a12$0$3$0 * b21$0$3$0 + a13$0$3$0 * b31$0$3$0;
			a$0$3$0[6] = a20$0$3$0 * b01$0$3$0 + a21$0$3$0 * b11$0$3$0 + a22$0$3$0 * b21$0$3$0 + a23$0$3$0 * b31$0$3$0;
			a$0$3$0[7] = a30$0$3$0 * b01$0$3$0 + a31$0$3$0 * b11$0$3$0 + a32$0$3$0 * b21$0$3$0 + a33$0$3$0 * b31$0$3$0;
			a$0$3$0[8] = a00$0$3$0 * b02$0$3$0 + a01$0$3$0 * b12$0$3$0 + a02$0$3$0 * b22$0$3$0 + a03$0$3$0 * b32$0$3$0;
			a$0$3$0[9] = a10$0$3$0 * b02$0$3$0 + a11$0$3$0 * b12$0$3$0 + a12$0$3$0 * b22$0$3$0 + a13$0$3$0 * b32$0$3$0;
			a$0$3$0[10] = a20$0$3$0 * b02$0$3$0 + a21$0$3$0 * b12$0$3$0 + a22$0$3$0 * b22$0$3$0 + a23$0$3$0 * b32$0$3$0;
			a$0$3$0[11] = a30$0$3$0 * b02$0$3$0 + a31$0$3$0 * b12$0$3$0 + a32$0$3$0 * b22$0$3$0 + a33$0$3$0 * b32$0$3$0;
			a$0$3$0[12] = a00$0$3$0 * b03$0$3$0 + a01$0$3$0 * b13$0$3$0 + a02$0$3$0 * b23$0$3$0 + a03$0$3$0 * b33$0$3$0;
			a$0$3$0[13] = a10$0$3$0 * b03$0$3$0 + a11$0$3$0 * b13$0$3$0 + a12$0$3$0 * b23$0$3$0 + a13$0$3$0 * b33$0$3$0;
			a$0$3$0[14] = a20$0$3$0 * b03$0$3$0 + a21$0$3$0 * b13$0$3$0 + a22$0$3$0 * b23$0$3$0 + a23$0$3$0 * b33$0$3$0;
			a$0$3$0[15] = a30$0$3$0 * b03$0$3$0 + a31$0$3$0 * b13$0$3$0 + a32$0$3$0 * b23$0$3$0 + a33$0$3$0 * b33$0$3$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, this$3$0._);
			p$3$0 = Kingyo.bfin;
			gl$3$0 = Kingyo.gl;
			gl$3$0.bindBuffer(gl$3$0.ARRAY_BUFFER, p$3$0.vbuf);
			gl$3$0.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$3$0.FLOAT, false, 0, 0);
			gl$3$0.bindBuffer(gl$3$0.ARRAY_BUFFER, p$3$0.nbuf);
			gl$3$0.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$3$0.FLOAT, false, 0, 0);
			gl$3$0.bindBuffer(gl$3$0.ELEMENT_ARRAY_BUFFER, p$3$0.ibuf);
			gl$3$0.drawElements(gl$3$0.TRIANGLES, p$3$0.numi, gl$3$0.UNSIGNED_SHORT, 0);
			this$10$0 = new M44$LM44$(bodyMat$0);
			this$16$0 = {_: new Float32Array(16)};
			M44$setIdentity$LM44$(this$16$0);
			this$16$0._[12] = 0;
			this$16$0._[13] = 0;
			this$16$0._[14] = -0.7;
			a$0$9$0 = this$10$0._;
			(a00$0$9$0 = a$0$9$0[0], a10$0$9$0 = a$0$9$0[1], a20$0$9$0 = a$0$9$0[2], a30$0$9$0 = a$0$9$0[3]);
			(a01$0$9$0 = a$0$9$0[4], a11$0$9$0 = a$0$9$0[5], a21$0$9$0 = a$0$9$0[6], a31$0$9$0 = a$0$9$0[7]);
			(a02$0$9$0 = a$0$9$0[8], a12$0$9$0 = a$0$9$0[9], a22$0$9$0 = a$0$9$0[10], a32$0$9$0 = a$0$9$0[11]);
			(a03$0$9$0 = a$0$9$0[12], a13$0$9$0 = a$0$9$0[13], a23$0$9$0 = a$0$9$0[14], a33$0$9$0 = a$0$9$0[15]);
			b$0$9$0 = this$16$0._;
			(b00$0$9$0 = b$0$9$0[0], b10$0$9$0 = b$0$9$0[1], b20$0$9$0 = b$0$9$0[2], b30$0$9$0 = b$0$9$0[3]);
			(b01$0$9$0 = b$0$9$0[4], b11$0$9$0 = b$0$9$0[5], b21$0$9$0 = b$0$9$0[6], b31$0$9$0 = b$0$9$0[7]);
			(b02$0$9$0 = b$0$9$0[8], b12$0$9$0 = b$0$9$0[9], b22$0$9$0 = b$0$9$0[10], b32$0$9$0 = b$0$9$0[11]);
			(b03$0$9$0 = b$0$9$0[12], b13$0$9$0 = b$0$9$0[13], b23$0$9$0 = b$0$9$0[14], b33$0$9$0 = b$0$9$0[15]);
			a$0$9$0[0] = a00$0$9$0 * b00$0$9$0 + a01$0$9$0 * b10$0$9$0 + a02$0$9$0 * b20$0$9$0 + a03$0$9$0 * b30$0$9$0;
			a$0$9$0[1] = a10$0$9$0 * b00$0$9$0 + a11$0$9$0 * b10$0$9$0 + a12$0$9$0 * b20$0$9$0 + a13$0$9$0 * b30$0$9$0;
			a$0$9$0[2] = a20$0$9$0 * b00$0$9$0 + a21$0$9$0 * b10$0$9$0 + a22$0$9$0 * b20$0$9$0 + a23$0$9$0 * b30$0$9$0;
			a$0$9$0[3] = a30$0$9$0 * b00$0$9$0 + a31$0$9$0 * b10$0$9$0 + a32$0$9$0 * b20$0$9$0 + a33$0$9$0 * b30$0$9$0;
			a$0$9$0[4] = a00$0$9$0 * b01$0$9$0 + a01$0$9$0 * b11$0$9$0 + a02$0$9$0 * b21$0$9$0 + a03$0$9$0 * b31$0$9$0;
			a$0$9$0[5] = a10$0$9$0 * b01$0$9$0 + a11$0$9$0 * b11$0$9$0 + a12$0$9$0 * b21$0$9$0 + a13$0$9$0 * b31$0$9$0;
			a$0$9$0[6] = a20$0$9$0 * b01$0$9$0 + a21$0$9$0 * b11$0$9$0 + a22$0$9$0 * b21$0$9$0 + a23$0$9$0 * b31$0$9$0;
			a$0$9$0[7] = a30$0$9$0 * b01$0$9$0 + a31$0$9$0 * b11$0$9$0 + a32$0$9$0 * b21$0$9$0 + a33$0$9$0 * b31$0$9$0;
			a$0$9$0[8] = a00$0$9$0 * b02$0$9$0 + a01$0$9$0 * b12$0$9$0 + a02$0$9$0 * b22$0$9$0 + a03$0$9$0 * b32$0$9$0;
			a$0$9$0[9] = a10$0$9$0 * b02$0$9$0 + a11$0$9$0 * b12$0$9$0 + a12$0$9$0 * b22$0$9$0 + a13$0$9$0 * b32$0$9$0;
			a$0$9$0[10] = a20$0$9$0 * b02$0$9$0 + a21$0$9$0 * b12$0$9$0 + a22$0$9$0 * b22$0$9$0 + a23$0$9$0 * b32$0$9$0;
			a$0$9$0[11] = a30$0$9$0 * b02$0$9$0 + a31$0$9$0 * b12$0$9$0 + a32$0$9$0 * b22$0$9$0 + a33$0$9$0 * b32$0$9$0;
			a$0$9$0[12] = a00$0$9$0 * b03$0$9$0 + a01$0$9$0 * b13$0$9$0 + a02$0$9$0 * b23$0$9$0 + a03$0$9$0 * b33$0$9$0;
			a$0$9$0[13] = a10$0$9$0 * b03$0$9$0 + a11$0$9$0 * b13$0$9$0 + a12$0$9$0 * b23$0$9$0 + a13$0$9$0 * b33$0$9$0;
			a$0$9$0[14] = a20$0$9$0 * b03$0$9$0 + a21$0$9$0 * b13$0$9$0 + a22$0$9$0 * b23$0$9$0 + a23$0$9$0 * b33$0$9$0;
			a$0$9$0[15] = a30$0$9$0 * b03$0$9$0 + a31$0$9$0 * b13$0$9$0 + a32$0$9$0 * b23$0$9$0 + a33$0$9$0 * b33$0$9$0;
			this$4$0 = this$10$0;
			m$4$0 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, s$0 / 2, 0, 1, 0);
			a$0$4$0 = this$4$0._;
			(a00$0$4$0 = a$0$4$0[0], a10$0$4$0 = a$0$4$0[1], a20$0$4$0 = a$0$4$0[2], a30$0$4$0 = a$0$4$0[3]);
			(a01$0$4$0 = a$0$4$0[4], a11$0$4$0 = a$0$4$0[5], a21$0$4$0 = a$0$4$0[6], a31$0$4$0 = a$0$4$0[7]);
			(a02$0$4$0 = a$0$4$0[8], a12$0$4$0 = a$0$4$0[9], a22$0$4$0 = a$0$4$0[10], a32$0$4$0 = a$0$4$0[11]);
			(a03$0$4$0 = a$0$4$0[12], a13$0$4$0 = a$0$4$0[13], a23$0$4$0 = a$0$4$0[14], a33$0$4$0 = a$0$4$0[15]);
			b$0$4$0 = m$4$0._;
			(b00$0$4$0 = b$0$4$0[0], b10$0$4$0 = b$0$4$0[1], b20$0$4$0 = b$0$4$0[2], b30$0$4$0 = b$0$4$0[3]);
			(b01$0$4$0 = b$0$4$0[4], b11$0$4$0 = b$0$4$0[5], b21$0$4$0 = b$0$4$0[6], b31$0$4$0 = b$0$4$0[7]);
			(b02$0$4$0 = b$0$4$0[8], b12$0$4$0 = b$0$4$0[9], b22$0$4$0 = b$0$4$0[10], b32$0$4$0 = b$0$4$0[11]);
			(b03$0$4$0 = b$0$4$0[12], b13$0$4$0 = b$0$4$0[13], b23$0$4$0 = b$0$4$0[14], b33$0$4$0 = b$0$4$0[15]);
			a$0$4$0[0] = a00$0$4$0 * b00$0$4$0 + a01$0$4$0 * b10$0$4$0 + a02$0$4$0 * b20$0$4$0 + a03$0$4$0 * b30$0$4$0;
			a$0$4$0[1] = a10$0$4$0 * b00$0$4$0 + a11$0$4$0 * b10$0$4$0 + a12$0$4$0 * b20$0$4$0 + a13$0$4$0 * b30$0$4$0;
			a$0$4$0[2] = a20$0$4$0 * b00$0$4$0 + a21$0$4$0 * b10$0$4$0 + a22$0$4$0 * b20$0$4$0 + a23$0$4$0 * b30$0$4$0;
			a$0$4$0[3] = a30$0$4$0 * b00$0$4$0 + a31$0$4$0 * b10$0$4$0 + a32$0$4$0 * b20$0$4$0 + a33$0$4$0 * b30$0$4$0;
			a$0$4$0[4] = a00$0$4$0 * b01$0$4$0 + a01$0$4$0 * b11$0$4$0 + a02$0$4$0 * b21$0$4$0 + a03$0$4$0 * b31$0$4$0;
			a$0$4$0[5] = a10$0$4$0 * b01$0$4$0 + a11$0$4$0 * b11$0$4$0 + a12$0$4$0 * b21$0$4$0 + a13$0$4$0 * b31$0$4$0;
			a$0$4$0[6] = a20$0$4$0 * b01$0$4$0 + a21$0$4$0 * b11$0$4$0 + a22$0$4$0 * b21$0$4$0 + a23$0$4$0 * b31$0$4$0;
			a$0$4$0[7] = a30$0$4$0 * b01$0$4$0 + a31$0$4$0 * b11$0$4$0 + a32$0$4$0 * b21$0$4$0 + a33$0$4$0 * b31$0$4$0;
			a$0$4$0[8] = a00$0$4$0 * b02$0$4$0 + a01$0$4$0 * b12$0$4$0 + a02$0$4$0 * b22$0$4$0 + a03$0$4$0 * b32$0$4$0;
			a$0$4$0[9] = a10$0$4$0 * b02$0$4$0 + a11$0$4$0 * b12$0$4$0 + a12$0$4$0 * b22$0$4$0 + a13$0$4$0 * b32$0$4$0;
			a$0$4$0[10] = a20$0$4$0 * b02$0$4$0 + a21$0$4$0 * b12$0$4$0 + a22$0$4$0 * b22$0$4$0 + a23$0$4$0 * b32$0$4$0;
			a$0$4$0[11] = a30$0$4$0 * b02$0$4$0 + a31$0$4$0 * b12$0$4$0 + a32$0$4$0 * b22$0$4$0 + a33$0$4$0 * b32$0$4$0;
			a$0$4$0[12] = a00$0$4$0 * b03$0$4$0 + a01$0$4$0 * b13$0$4$0 + a02$0$4$0 * b23$0$4$0 + a03$0$4$0 * b33$0$4$0;
			a$0$4$0[13] = a10$0$4$0 * b03$0$4$0 + a11$0$4$0 * b13$0$4$0 + a12$0$4$0 * b23$0$4$0 + a13$0$4$0 * b33$0$4$0;
			a$0$4$0[14] = a20$0$4$0 * b03$0$4$0 + a21$0$4$0 * b13$0$4$0 + a22$0$4$0 * b23$0$4$0 + a23$0$4$0 * b33$0$4$0;
			a$0$4$0[15] = a30$0$4$0 * b03$0$4$0 + a31$0$4$0 * b13$0$4$0 + a32$0$4$0 * b23$0$4$0 + a33$0$4$0 * b33$0$4$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, this$4$0._);
			p$4$0 = Kingyo.tfin;
			gl$4$0 = Kingyo.gl;
			gl$4$0.bindBuffer(gl$4$0.ARRAY_BUFFER, p$4$0.vbuf);
			gl$4$0.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$4$0.FLOAT, false, 0, 0);
			gl$4$0.bindBuffer(gl$4$0.ARRAY_BUFFER, p$4$0.nbuf);
			gl$4$0.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$4$0.FLOAT, false, 0, 0);
			gl$4$0.bindBuffer(gl$4$0.ELEMENT_ARRAY_BUFFER, p$4$0.ibuf);
			gl$4$0.drawElements(gl$4$0.TRIANGLES, p$4$0.numi, gl$4$0.UNSIGNED_SHORT, 0);
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
			gl$1 = Kingyo.gl;
			ulocs$0 = Kingyo.eyeULocs;
			gl$1.uniform3fv(ulocs$0.color, k._color);
			s$1 = Math.sin(k._anim * 5);
			this$7$1 = {_: new Float32Array(16)};
			v$0$1 = k._pos;
			x$0$0$1 = (_$1 = v$0$1._)[0];
			y$0$0$1 = _$1[1];
			z$0$0$1 = _$1[2];
			M44$setIdentity$LM44$(this$7$1);
			this$7$1._[12] = x$0$0$1;
			this$7$1._[13] = y$0$0$1;
			this$7$1._[14] = z$0$0$1;
			m$3$1 = k._spinMat;
			a$0$3$1 = this$7$1._;
			(a00$0$3$1 = a$0$3$1[0], a10$0$3$1 = a$0$3$1[1], a20$0$3$1 = a$0$3$1[2], a30$0$3$1 = a$0$3$1[3]);
			(a01$0$3$1 = a$0$3$1[4], a11$0$3$1 = a$0$3$1[5], a21$0$3$1 = a$0$3$1[6], a31$0$3$1 = a$0$3$1[7]);
			(a02$0$3$1 = a$0$3$1[8], a12$0$3$1 = a$0$3$1[9], a22$0$3$1 = a$0$3$1[10], a32$0$3$1 = a$0$3$1[11]);
			(a03$0$3$1 = a$0$3$1[12], a13$0$3$1 = a$0$3$1[13], a23$0$3$1 = a$0$3$1[14], a33$0$3$1 = a$0$3$1[15]);
			b$0$3$1 = m$3$1._;
			(b00$0$3$1 = b$0$3$1[0], b10$0$3$1 = b$0$3$1[1], b20$0$3$1 = b$0$3$1[2], b30$0$3$1 = b$0$3$1[3]);
			(b01$0$3$1 = b$0$3$1[4], b11$0$3$1 = b$0$3$1[5], b21$0$3$1 = b$0$3$1[6], b31$0$3$1 = b$0$3$1[7]);
			(b02$0$3$1 = b$0$3$1[8], b12$0$3$1 = b$0$3$1[9], b22$0$3$1 = b$0$3$1[10], b32$0$3$1 = b$0$3$1[11]);
			(b03$0$3$1 = b$0$3$1[12], b13$0$3$1 = b$0$3$1[13], b23$0$3$1 = b$0$3$1[14], b33$0$3$1 = b$0$3$1[15]);
			a$0$3$1[0] = a00$0$3$1 * b00$0$3$1 + a01$0$3$1 * b10$0$3$1 + a02$0$3$1 * b20$0$3$1 + a03$0$3$1 * b30$0$3$1;
			a$0$3$1[1] = a10$0$3$1 * b00$0$3$1 + a11$0$3$1 * b10$0$3$1 + a12$0$3$1 * b20$0$3$1 + a13$0$3$1 * b30$0$3$1;
			a$0$3$1[2] = a20$0$3$1 * b00$0$3$1 + a21$0$3$1 * b10$0$3$1 + a22$0$3$1 * b20$0$3$1 + a23$0$3$1 * b30$0$3$1;
			a$0$3$1[3] = a30$0$3$1 * b00$0$3$1 + a31$0$3$1 * b10$0$3$1 + a32$0$3$1 * b20$0$3$1 + a33$0$3$1 * b30$0$3$1;
			a$0$3$1[4] = a00$0$3$1 * b01$0$3$1 + a01$0$3$1 * b11$0$3$1 + a02$0$3$1 * b21$0$3$1 + a03$0$3$1 * b31$0$3$1;
			a$0$3$1[5] = a10$0$3$1 * b01$0$3$1 + a11$0$3$1 * b11$0$3$1 + a12$0$3$1 * b21$0$3$1 + a13$0$3$1 * b31$0$3$1;
			a$0$3$1[6] = a20$0$3$1 * b01$0$3$1 + a21$0$3$1 * b11$0$3$1 + a22$0$3$1 * b21$0$3$1 + a23$0$3$1 * b31$0$3$1;
			a$0$3$1[7] = a30$0$3$1 * b01$0$3$1 + a31$0$3$1 * b11$0$3$1 + a32$0$3$1 * b21$0$3$1 + a33$0$3$1 * b31$0$3$1;
			a$0$3$1[8] = a00$0$3$1 * b02$0$3$1 + a01$0$3$1 * b12$0$3$1 + a02$0$3$1 * b22$0$3$1 + a03$0$3$1 * b32$0$3$1;
			a$0$3$1[9] = a10$0$3$1 * b02$0$3$1 + a11$0$3$1 * b12$0$3$1 + a12$0$3$1 * b22$0$3$1 + a13$0$3$1 * b32$0$3$1;
			a$0$3$1[10] = a20$0$3$1 * b02$0$3$1 + a21$0$3$1 * b12$0$3$1 + a22$0$3$1 * b22$0$3$1 + a23$0$3$1 * b32$0$3$1;
			a$0$3$1[11] = a30$0$3$1 * b02$0$3$1 + a31$0$3$1 * b12$0$3$1 + a32$0$3$1 * b22$0$3$1 + a33$0$3$1 * b32$0$3$1;
			a$0$3$1[12] = a00$0$3$1 * b03$0$3$1 + a01$0$3$1 * b13$0$3$1 + a02$0$3$1 * b23$0$3$1 + a03$0$3$1 * b33$0$3$1;
			a$0$3$1[13] = a10$0$3$1 * b03$0$3$1 + a11$0$3$1 * b13$0$3$1 + a12$0$3$1 * b23$0$3$1 + a13$0$3$1 * b33$0$3$1;
			a$0$3$1[14] = a20$0$3$1 * b03$0$3$1 + a21$0$3$1 * b13$0$3$1 + a22$0$3$1 * b23$0$3$1 + a23$0$3$1 * b33$0$3$1;
			a$0$3$1[15] = a30$0$3$1 * b03$0$3$1 + a31$0$3$1 * b13$0$3$1 + a32$0$3$1 * b23$0$3$1 + a33$0$3$1 * b33$0$3$1;
			this$3$1 = this$7$1;
			this$6$1 = {_: new Float32Array(16)};
			rad$0$1 = k._vangle - s$1 / 10;
			m$2$1 = M44$setRotate$LM44$NNNN(this$6$1, rad$0$1, 0, 0, 1);
			a$0$2$1 = this$3$1._;
			(a00$0$2$1 = a$0$2$1[0], a10$0$2$1 = a$0$2$1[1], a20$0$2$1 = a$0$2$1[2], a30$0$2$1 = a$0$2$1[3]);
			(a01$0$2$1 = a$0$2$1[4], a11$0$2$1 = a$0$2$1[5], a21$0$2$1 = a$0$2$1[6], a31$0$2$1 = a$0$2$1[7]);
			(a02$0$2$1 = a$0$2$1[8], a12$0$2$1 = a$0$2$1[9], a22$0$2$1 = a$0$2$1[10], a32$0$2$1 = a$0$2$1[11]);
			(a03$0$2$1 = a$0$2$1[12], a13$0$2$1 = a$0$2$1[13], a23$0$2$1 = a$0$2$1[14], a33$0$2$1 = a$0$2$1[15]);
			b$0$2$1 = m$2$1._;
			(b00$0$2$1 = b$0$2$1[0], b10$0$2$1 = b$0$2$1[1], b20$0$2$1 = b$0$2$1[2], b30$0$2$1 = b$0$2$1[3]);
			(b01$0$2$1 = b$0$2$1[4], b11$0$2$1 = b$0$2$1[5], b21$0$2$1 = b$0$2$1[6], b31$0$2$1 = b$0$2$1[7]);
			(b02$0$2$1 = b$0$2$1[8], b12$0$2$1 = b$0$2$1[9], b22$0$2$1 = b$0$2$1[10], b32$0$2$1 = b$0$2$1[11]);
			(b03$0$2$1 = b$0$2$1[12], b13$0$2$1 = b$0$2$1[13], b23$0$2$1 = b$0$2$1[14], b33$0$2$1 = b$0$2$1[15]);
			a$0$2$1[0] = a00$0$2$1 * b00$0$2$1 + a01$0$2$1 * b10$0$2$1 + a02$0$2$1 * b20$0$2$1 + a03$0$2$1 * b30$0$2$1;
			a$0$2$1[1] = a10$0$2$1 * b00$0$2$1 + a11$0$2$1 * b10$0$2$1 + a12$0$2$1 * b20$0$2$1 + a13$0$2$1 * b30$0$2$1;
			a$0$2$1[2] = a20$0$2$1 * b00$0$2$1 + a21$0$2$1 * b10$0$2$1 + a22$0$2$1 * b20$0$2$1 + a23$0$2$1 * b30$0$2$1;
			a$0$2$1[3] = a30$0$2$1 * b00$0$2$1 + a31$0$2$1 * b10$0$2$1 + a32$0$2$1 * b20$0$2$1 + a33$0$2$1 * b30$0$2$1;
			a$0$2$1[4] = a00$0$2$1 * b01$0$2$1 + a01$0$2$1 * b11$0$2$1 + a02$0$2$1 * b21$0$2$1 + a03$0$2$1 * b31$0$2$1;
			a$0$2$1[5] = a10$0$2$1 * b01$0$2$1 + a11$0$2$1 * b11$0$2$1 + a12$0$2$1 * b21$0$2$1 + a13$0$2$1 * b31$0$2$1;
			a$0$2$1[6] = a20$0$2$1 * b01$0$2$1 + a21$0$2$1 * b11$0$2$1 + a22$0$2$1 * b21$0$2$1 + a23$0$2$1 * b31$0$2$1;
			a$0$2$1[7] = a30$0$2$1 * b01$0$2$1 + a31$0$2$1 * b11$0$2$1 + a32$0$2$1 * b21$0$2$1 + a33$0$2$1 * b31$0$2$1;
			a$0$2$1[8] = a00$0$2$1 * b02$0$2$1 + a01$0$2$1 * b12$0$2$1 + a02$0$2$1 * b22$0$2$1 + a03$0$2$1 * b32$0$2$1;
			a$0$2$1[9] = a10$0$2$1 * b02$0$2$1 + a11$0$2$1 * b12$0$2$1 + a12$0$2$1 * b22$0$2$1 + a13$0$2$1 * b32$0$2$1;
			a$0$2$1[10] = a20$0$2$1 * b02$0$2$1 + a21$0$2$1 * b12$0$2$1 + a22$0$2$1 * b22$0$2$1 + a23$0$2$1 * b32$0$2$1;
			a$0$2$1[11] = a30$0$2$1 * b02$0$2$1 + a31$0$2$1 * b12$0$2$1 + a32$0$2$1 * b22$0$2$1 + a33$0$2$1 * b32$0$2$1;
			a$0$2$1[12] = a00$0$2$1 * b03$0$2$1 + a01$0$2$1 * b13$0$2$1 + a02$0$2$1 * b23$0$2$1 + a03$0$2$1 * b33$0$2$1;
			a$0$2$1[13] = a10$0$2$1 * b03$0$2$1 + a11$0$2$1 * b13$0$2$1 + a12$0$2$1 * b23$0$2$1 + a13$0$2$1 * b33$0$2$1;
			a$0$2$1[14] = a20$0$2$1 * b03$0$2$1 + a21$0$2$1 * b13$0$2$1 + a22$0$2$1 * b23$0$2$1 + a23$0$2$1 * b33$0$2$1;
			a$0$2$1[15] = a30$0$2$1 * b03$0$2$1 + a31$0$2$1 * b13$0$2$1 + a32$0$2$1 * b23$0$2$1 + a33$0$2$1 * b33$0$2$1;
			this$1$1 = this$3$1;
			this$4$1 = {_: new Float32Array(16)};
			m$1$1 = M44$setRotate$LM44$NNNN(this$4$1, 1.5707963267948966, 1, 0, 0);
			a$0$1$1 = this$1$1._;
			(a00$0$1$1 = a$0$1$1[0], a10$0$1$1 = a$0$1$1[1], a20$0$1$1 = a$0$1$1[2], a30$0$1$1 = a$0$1$1[3]);
			(a01$0$1$1 = a$0$1$1[4], a11$0$1$1 = a$0$1$1[5], a21$0$1$1 = a$0$1$1[6], a31$0$1$1 = a$0$1$1[7]);
			(a02$0$1$1 = a$0$1$1[8], a12$0$1$1 = a$0$1$1[9], a22$0$1$1 = a$0$1$1[10], a32$0$1$1 = a$0$1$1[11]);
			(a03$0$1$1 = a$0$1$1[12], a13$0$1$1 = a$0$1$1[13], a23$0$1$1 = a$0$1$1[14], a33$0$1$1 = a$0$1$1[15]);
			b$0$1$1 = m$1$1._;
			(b00$0$1$1 = b$0$1$1[0], b10$0$1$1 = b$0$1$1[1], b20$0$1$1 = b$0$1$1[2], b30$0$1$1 = b$0$1$1[3]);
			(b01$0$1$1 = b$0$1$1[4], b11$0$1$1 = b$0$1$1[5], b21$0$1$1 = b$0$1$1[6], b31$0$1$1 = b$0$1$1[7]);
			(b02$0$1$1 = b$0$1$1[8], b12$0$1$1 = b$0$1$1[9], b22$0$1$1 = b$0$1$1[10], b32$0$1$1 = b$0$1$1[11]);
			(b03$0$1$1 = b$0$1$1[12], b13$0$1$1 = b$0$1$1[13], b23$0$1$1 = b$0$1$1[14], b33$0$1$1 = b$0$1$1[15]);
			a$0$1$1[0] = a00$0$1$1 * b00$0$1$1 + a01$0$1$1 * b10$0$1$1 + a02$0$1$1 * b20$0$1$1 + a03$0$1$1 * b30$0$1$1;
			a$0$1$1[1] = a10$0$1$1 * b00$0$1$1 + a11$0$1$1 * b10$0$1$1 + a12$0$1$1 * b20$0$1$1 + a13$0$1$1 * b30$0$1$1;
			a$0$1$1[2] = a20$0$1$1 * b00$0$1$1 + a21$0$1$1 * b10$0$1$1 + a22$0$1$1 * b20$0$1$1 + a23$0$1$1 * b30$0$1$1;
			a$0$1$1[3] = a30$0$1$1 * b00$0$1$1 + a31$0$1$1 * b10$0$1$1 + a32$0$1$1 * b20$0$1$1 + a33$0$1$1 * b30$0$1$1;
			a$0$1$1[4] = a00$0$1$1 * b01$0$1$1 + a01$0$1$1 * b11$0$1$1 + a02$0$1$1 * b21$0$1$1 + a03$0$1$1 * b31$0$1$1;
			a$0$1$1[5] = a10$0$1$1 * b01$0$1$1 + a11$0$1$1 * b11$0$1$1 + a12$0$1$1 * b21$0$1$1 + a13$0$1$1 * b31$0$1$1;
			a$0$1$1[6] = a20$0$1$1 * b01$0$1$1 + a21$0$1$1 * b11$0$1$1 + a22$0$1$1 * b21$0$1$1 + a23$0$1$1 * b31$0$1$1;
			a$0$1$1[7] = a30$0$1$1 * b01$0$1$1 + a31$0$1$1 * b11$0$1$1 + a32$0$1$1 * b21$0$1$1 + a33$0$1$1 * b31$0$1$1;
			a$0$1$1[8] = a00$0$1$1 * b02$0$1$1 + a01$0$1$1 * b12$0$1$1 + a02$0$1$1 * b22$0$1$1 + a03$0$1$1 * b32$0$1$1;
			a$0$1$1[9] = a10$0$1$1 * b02$0$1$1 + a11$0$1$1 * b12$0$1$1 + a12$0$1$1 * b22$0$1$1 + a13$0$1$1 * b32$0$1$1;
			a$0$1$1[10] = a20$0$1$1 * b02$0$1$1 + a21$0$1$1 * b12$0$1$1 + a22$0$1$1 * b22$0$1$1 + a23$0$1$1 * b32$0$1$1;
			a$0$1$1[11] = a30$0$1$1 * b02$0$1$1 + a31$0$1$1 * b12$0$1$1 + a32$0$1$1 * b22$0$1$1 + a33$0$1$1 * b32$0$1$1;
			a$0$1$1[12] = a00$0$1$1 * b03$0$1$1 + a01$0$1$1 * b13$0$1$1 + a02$0$1$1 * b23$0$1$1 + a03$0$1$1 * b33$0$1$1;
			a$0$1$1[13] = a10$0$1$1 * b03$0$1$1 + a11$0$1$1 * b13$0$1$1 + a12$0$1$1 * b23$0$1$1 + a13$0$1$1 * b33$0$1$1;
			a$0$1$1[14] = a20$0$1$1 * b03$0$1$1 + a21$0$1$1 * b13$0$1$1 + a22$0$1$1 * b23$0$1$1 + a23$0$1$1 * b33$0$1$1;
			a$0$1$1[15] = a30$0$1$1 * b03$0$1$1 + a31$0$1$1 * b13$0$1$1 + a32$0$1$1 * b23$0$1$1 + a33$0$1$1 * b33$0$1$1;
			this$0$1 = this$1$1;
			this$2$1 = {_: new Float32Array(16)};
			m$0$1 = M44$setRotate$LM44$NNNN(this$2$1, 1.5707963267948966, 0, 1, 0);
			a$0$0$1 = this$0$1._;
			(a00$0$0$1 = a$0$0$1[0], a10$0$0$1 = a$0$0$1[1], a20$0$0$1 = a$0$0$1[2], a30$0$0$1 = a$0$0$1[3]);
			(a01$0$0$1 = a$0$0$1[4], a11$0$0$1 = a$0$0$1[5], a21$0$0$1 = a$0$0$1[6], a31$0$0$1 = a$0$0$1[7]);
			(a02$0$0$1 = a$0$0$1[8], a12$0$0$1 = a$0$0$1[9], a22$0$0$1 = a$0$0$1[10], a32$0$0$1 = a$0$0$1[11]);
			(a03$0$0$1 = a$0$0$1[12], a13$0$0$1 = a$0$0$1[13], a23$0$0$1 = a$0$0$1[14], a33$0$0$1 = a$0$0$1[15]);
			b$0$0$1 = m$0$1._;
			(b00$0$0$1 = b$0$0$1[0], b10$0$0$1 = b$0$0$1[1], b20$0$0$1 = b$0$0$1[2], b30$0$0$1 = b$0$0$1[3]);
			(b01$0$0$1 = b$0$0$1[4], b11$0$0$1 = b$0$0$1[5], b21$0$0$1 = b$0$0$1[6], b31$0$0$1 = b$0$0$1[7]);
			(b02$0$0$1 = b$0$0$1[8], b12$0$0$1 = b$0$0$1[9], b22$0$0$1 = b$0$0$1[10], b32$0$0$1 = b$0$0$1[11]);
			(b03$0$0$1 = b$0$0$1[12], b13$0$0$1 = b$0$0$1[13], b23$0$0$1 = b$0$0$1[14], b33$0$0$1 = b$0$0$1[15]);
			a$0$0$1[0] = a00$0$0$1 * b00$0$0$1 + a01$0$0$1 * b10$0$0$1 + a02$0$0$1 * b20$0$0$1 + a03$0$0$1 * b30$0$0$1;
			a$0$0$1[1] = a10$0$0$1 * b00$0$0$1 + a11$0$0$1 * b10$0$0$1 + a12$0$0$1 * b20$0$0$1 + a13$0$0$1 * b30$0$0$1;
			a$0$0$1[2] = a20$0$0$1 * b00$0$0$1 + a21$0$0$1 * b10$0$0$1 + a22$0$0$1 * b20$0$0$1 + a23$0$0$1 * b30$0$0$1;
			a$0$0$1[3] = a30$0$0$1 * b00$0$0$1 + a31$0$0$1 * b10$0$0$1 + a32$0$0$1 * b20$0$0$1 + a33$0$0$1 * b30$0$0$1;
			a$0$0$1[4] = a00$0$0$1 * b01$0$0$1 + a01$0$0$1 * b11$0$0$1 + a02$0$0$1 * b21$0$0$1 + a03$0$0$1 * b31$0$0$1;
			a$0$0$1[5] = a10$0$0$1 * b01$0$0$1 + a11$0$0$1 * b11$0$0$1 + a12$0$0$1 * b21$0$0$1 + a13$0$0$1 * b31$0$0$1;
			a$0$0$1[6] = a20$0$0$1 * b01$0$0$1 + a21$0$0$1 * b11$0$0$1 + a22$0$0$1 * b21$0$0$1 + a23$0$0$1 * b31$0$0$1;
			a$0$0$1[7] = a30$0$0$1 * b01$0$0$1 + a31$0$0$1 * b11$0$0$1 + a32$0$0$1 * b21$0$0$1 + a33$0$0$1 * b31$0$0$1;
			a$0$0$1[8] = a00$0$0$1 * b02$0$0$1 + a01$0$0$1 * b12$0$0$1 + a02$0$0$1 * b22$0$0$1 + a03$0$0$1 * b32$0$0$1;
			a$0$0$1[9] = a10$0$0$1 * b02$0$0$1 + a11$0$0$1 * b12$0$0$1 + a12$0$0$1 * b22$0$0$1 + a13$0$0$1 * b32$0$0$1;
			a$0$0$1[10] = a20$0$0$1 * b02$0$0$1 + a21$0$0$1 * b12$0$0$1 + a22$0$0$1 * b22$0$0$1 + a23$0$0$1 * b32$0$0$1;
			a$0$0$1[11] = a30$0$0$1 * b02$0$0$1 + a31$0$0$1 * b12$0$0$1 + a32$0$0$1 * b22$0$0$1 + a33$0$0$1 * b32$0$0$1;
			a$0$0$1[12] = a00$0$0$1 * b03$0$0$1 + a01$0$0$1 * b13$0$0$1 + a02$0$0$1 * b23$0$0$1 + a03$0$0$1 * b33$0$0$1;
			a$0$0$1[13] = a10$0$0$1 * b03$0$0$1 + a11$0$0$1 * b13$0$0$1 + a12$0$0$1 * b23$0$0$1 + a13$0$0$1 * b33$0$0$1;
			a$0$0$1[14] = a20$0$0$1 * b03$0$0$1 + a21$0$0$1 * b13$0$0$1 + a22$0$0$1 * b23$0$0$1 + a23$0$0$1 * b33$0$0$1;
			a$0$0$1[15] = a30$0$0$1 * b03$0$0$1 + a31$0$0$1 * b13$0$0$1 + a32$0$0$1 * b23$0$0$1 + a33$0$0$1 * b33$0$0$1;
			gl$1.uniformMatrix4fv(ulocs$0.modelMatrix, false, this$0$1._);
			gl$1.bindBuffer(gl$1.ELEMENT_ARRAY_BUFFER, Kingyo.eyes.ibuf);
			gl$1.drawElements(gl$1.TRIANGLES, 12, gl$1.UNSIGNED_SHORT, 0);
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
	/** @type {Kingyo} */
	var this$0;
	/** @type {!number} */
	var a$0;
	/** @type {V3} */
	var this$0$0;
	/** @type {V3} */
	var this$1$0;
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {!number} */
	var z$0$0;
	for (i = 0; i < kingyos.length; ++ i) {
		this$0 = kingyos[i];
		this$0._state = 'flying';
		this$0$0 = this$0._pos;
		this$0$0._[2] = 2;
		this$0._vz = 150 + Math.random() * 50;
		this$0._velo = 12;
		M44$setIdentity$LM44$(this$0._spinMat);
		a$0 = 6.283185307179586 * Math.random();
		this$1$0 = this$0._spinAxis;
		x$0$0 = Math.cos(a$0);
		y$0$0 = Math.sin(a$0);
		z$0$0 = Math.random() - 0.5;
		this$1$0._[0] = x$0$0;
		this$1$0._[1] = y$0$0;
		this$1$0._[2] = z$0$0;
		this$0._spinSpeed = 10 * Math.random() + 2;
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
	/** @type {Float32Array} */
	var a$0$0;
	/** @type {undefined|!number} */
	var a00$0$0;
	/** @type {undefined|!number} */
	var a10$0$0;
	/** @type {undefined|!number} */
	var a20$0$0;
	/** @type {undefined|!number} */
	var a30$0$0;
	/** @type {undefined|!number} */
	var a01$0$0;
	/** @type {undefined|!number} */
	var a11$0$0;
	/** @type {undefined|!number} */
	var a21$0$0;
	/** @type {undefined|!number} */
	var a31$0$0;
	/** @type {undefined|!number} */
	var a02$0$0;
	/** @type {undefined|!number} */
	var a12$0$0;
	/** @type {undefined|!number} */
	var a22$0$0;
	/** @type {undefined|!number} */
	var a32$0$0;
	/** @type {undefined|!number} */
	var a03$0$0;
	/** @type {undefined|!number} */
	var a13$0$0;
	/** @type {undefined|!number} */
	var a23$0$0;
	/** @type {undefined|!number} */
	var a33$0$0;
	/** @type {Float32Array} */
	var b$0$0;
	/** @type {undefined|!number} */
	var b00$0$0;
	/** @type {undefined|!number} */
	var b10$0$0;
	/** @type {undefined|!number} */
	var b20$0$0;
	/** @type {undefined|!number} */
	var b30$0$0;
	/** @type {undefined|!number} */
	var b01$0$0;
	/** @type {undefined|!number} */
	var b11$0$0;
	/** @type {undefined|!number} */
	var b21$0$0;
	/** @type {undefined|!number} */
	var b31$0$0;
	/** @type {undefined|!number} */
	var b02$0$0;
	/** @type {undefined|!number} */
	var b12$0$0;
	/** @type {undefined|!number} */
	var b22$0$0;
	/** @type {undefined|!number} */
	var b32$0$0;
	/** @type {undefined|!number} */
	var b03$0$0;
	/** @type {undefined|!number} */
	var b13$0$0;
	/** @type {undefined|!number} */
	var b23$0$0;
	/** @type {undefined|!number} */
	var b33$0$0;
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
		a$0$0 = this$3._;
		(a00$0$0 = a$0$0[0], a10$0$0 = a$0$0[1], a20$0$0 = a$0$0[2], a30$0$0 = a$0$0[3]);
		(a01$0$0 = a$0$0[4], a11$0$0 = a$0$0[5], a21$0$0 = a$0$0[6], a31$0$0 = a$0$0[7]);
		(a02$0$0 = a$0$0[8], a12$0$0 = a$0$0[9], a22$0$0 = a$0$0[10], a32$0$0 = a$0$0[11]);
		(a03$0$0 = a$0$0[12], a13$0$0 = a$0$0[13], a23$0$0 = a$0$0[14], a33$0$0 = a$0$0[15]);
		b$0$0 = m$0._;
		(b00$0$0 = b$0$0[0], b10$0$0 = b$0$0[1], b20$0$0 = b$0$0[2], b30$0$0 = b$0$0[3]);
		(b01$0$0 = b$0$0[4], b11$0$0 = b$0$0[5], b21$0$0 = b$0$0[6], b31$0$0 = b$0$0[7]);
		(b02$0$0 = b$0$0[8], b12$0$0 = b$0$0[9], b22$0$0 = b$0$0[10], b32$0$0 = b$0$0[11]);
		(b03$0$0 = b$0$0[12], b13$0$0 = b$0$0[13], b23$0$0 = b$0$0[14], b33$0$0 = b$0$0[15]);
		a$0$0[0] = a00$0$0 * b00$0$0 + a01$0$0 * b10$0$0 + a02$0$0 * b20$0$0 + a03$0$0 * b30$0$0;
		a$0$0[1] = a10$0$0 * b00$0$0 + a11$0$0 * b10$0$0 + a12$0$0 * b20$0$0 + a13$0$0 * b30$0$0;
		a$0$0[2] = a20$0$0 * b00$0$0 + a21$0$0 * b10$0$0 + a22$0$0 * b20$0$0 + a23$0$0 * b30$0$0;
		a$0$0[3] = a30$0$0 * b00$0$0 + a31$0$0 * b10$0$0 + a32$0$0 * b20$0$0 + a33$0$0 * b30$0$0;
		a$0$0[4] = a00$0$0 * b01$0$0 + a01$0$0 * b11$0$0 + a02$0$0 * b21$0$0 + a03$0$0 * b31$0$0;
		a$0$0[5] = a10$0$0 * b01$0$0 + a11$0$0 * b11$0$0 + a12$0$0 * b21$0$0 + a13$0$0 * b31$0$0;
		a$0$0[6] = a20$0$0 * b01$0$0 + a21$0$0 * b11$0$0 + a22$0$0 * b21$0$0 + a23$0$0 * b31$0$0;
		a$0$0[7] = a30$0$0 * b01$0$0 + a31$0$0 * b11$0$0 + a32$0$0 * b21$0$0 + a33$0$0 * b31$0$0;
		a$0$0[8] = a00$0$0 * b02$0$0 + a01$0$0 * b12$0$0 + a02$0$0 * b22$0$0 + a03$0$0 * b32$0$0;
		a$0$0[9] = a10$0$0 * b02$0$0 + a11$0$0 * b12$0$0 + a12$0$0 * b22$0$0 + a13$0$0 * b32$0$0;
		a$0$0[10] = a20$0$0 * b02$0$0 + a21$0$0 * b12$0$0 + a22$0$0 * b22$0$0 + a23$0$0 * b32$0$0;
		a$0$0[11] = a30$0$0 * b02$0$0 + a31$0$0 * b12$0$0 + a32$0$0 * b22$0$0 + a33$0$0 * b32$0$0;
		a$0$0[12] = a00$0$0 * b03$0$0 + a01$0$0 * b13$0$0 + a02$0$0 * b23$0$0 + a03$0$0 * b33$0$0;
		a$0$0[13] = a10$0$0 * b03$0$0 + a11$0$0 * b13$0$0 + a12$0$0 * b23$0$0 + a13$0$0 * b33$0$0;
		a$0$0[14] = a20$0$0 * b03$0$0 + a21$0$0 * b13$0$0 + a22$0$0 * b23$0$0 + a23$0$0 * b33$0$0;
		a$0$0[15] = a30$0$0 * b03$0$0 + a31$0$0 * b13$0$0 + a32$0$0 * b23$0$0 + a33$0$0 * b33$0$0;
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
	var this$0;
	/** @type {M44} */
	var m$0;
	/** @type {Float32Array} */
	var a$0$0;
	/** @type {undefined|!number} */
	var a00$0$0;
	/** @type {undefined|!number} */
	var a10$0$0;
	/** @type {undefined|!number} */
	var a20$0$0;
	/** @type {undefined|!number} */
	var a30$0$0;
	/** @type {undefined|!number} */
	var a01$0$0;
	/** @type {undefined|!number} */
	var a11$0$0;
	/** @type {undefined|!number} */
	var a21$0$0;
	/** @type {undefined|!number} */
	var a31$0$0;
	/** @type {undefined|!number} */
	var a02$0$0;
	/** @type {undefined|!number} */
	var a12$0$0;
	/** @type {undefined|!number} */
	var a22$0$0;
	/** @type {undefined|!number} */
	var a32$0$0;
	/** @type {undefined|!number} */
	var a03$0$0;
	/** @type {undefined|!number} */
	var a13$0$0;
	/** @type {undefined|!number} */
	var a23$0$0;
	/** @type {undefined|!number} */
	var a33$0$0;
	/** @type {Float32Array} */
	var b$0$0;
	/** @type {undefined|!number} */
	var b00$0$0;
	/** @type {undefined|!number} */
	var b10$0$0;
	/** @type {undefined|!number} */
	var b20$0$0;
	/** @type {undefined|!number} */
	var b30$0$0;
	/** @type {undefined|!number} */
	var b01$0$0;
	/** @type {undefined|!number} */
	var b11$0$0;
	/** @type {undefined|!number} */
	var b21$0$0;
	/** @type {undefined|!number} */
	var b31$0$0;
	/** @type {undefined|!number} */
	var b02$0$0;
	/** @type {undefined|!number} */
	var b12$0$0;
	/** @type {undefined|!number} */
	var b22$0$0;
	/** @type {undefined|!number} */
	var b32$0$0;
	/** @type {undefined|!number} */
	var b03$0$0;
	/** @type {undefined|!number} */
	var b13$0$0;
	/** @type {undefined|!number} */
	var b23$0$0;
	/** @type {undefined|!number} */
	var b33$0$0;
	/** @type {_Part} */
	var p$0;
	/** @type {WebGLRenderingContext} */
	var gl$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {Float32Array} */
	var a$0$1;
	/** @type {undefined|!number} */
	var a00$0$1;
	/** @type {undefined|!number} */
	var a10$0$1;
	/** @type {undefined|!number} */
	var a20$0$1;
	/** @type {undefined|!number} */
	var a30$0$1;
	/** @type {undefined|!number} */
	var a01$0$1;
	/** @type {undefined|!number} */
	var a11$0$1;
	/** @type {undefined|!number} */
	var a21$0$1;
	/** @type {undefined|!number} */
	var a31$0$1;
	/** @type {undefined|!number} */
	var a02$0$1;
	/** @type {undefined|!number} */
	var a12$0$1;
	/** @type {undefined|!number} */
	var a22$0$1;
	/** @type {undefined|!number} */
	var a32$0$1;
	/** @type {undefined|!number} */
	var a03$0$1;
	/** @type {undefined|!number} */
	var a13$0$1;
	/** @type {undefined|!number} */
	var a23$0$1;
	/** @type {undefined|!number} */
	var a33$0$1;
	/** @type {Float32Array} */
	var b$0$1;
	/** @type {undefined|!number} */
	var b00$0$1;
	/** @type {undefined|!number} */
	var b10$0$1;
	/** @type {undefined|!number} */
	var b20$0$1;
	/** @type {undefined|!number} */
	var b30$0$1;
	/** @type {undefined|!number} */
	var b01$0$1;
	/** @type {undefined|!number} */
	var b11$0$1;
	/** @type {undefined|!number} */
	var b21$0$1;
	/** @type {undefined|!number} */
	var b31$0$1;
	/** @type {undefined|!number} */
	var b02$0$1;
	/** @type {undefined|!number} */
	var b12$0$1;
	/** @type {undefined|!number} */
	var b22$0$1;
	/** @type {undefined|!number} */
	var b32$0$1;
	/** @type {undefined|!number} */
	var b03$0$1;
	/** @type {undefined|!number} */
	var b13$0$1;
	/** @type {undefined|!number} */
	var b23$0$1;
	/** @type {undefined|!number} */
	var b33$0$1;
	/** @type {_Part} */
	var p$1;
	/** @type {WebGLRenderingContext} */
	var gl$1;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var m$2;
	/** @type {Float32Array} */
	var a$0$2;
	/** @type {undefined|!number} */
	var a00$0$2;
	/** @type {undefined|!number} */
	var a10$0$2;
	/** @type {undefined|!number} */
	var a20$0$2;
	/** @type {undefined|!number} */
	var a30$0$2;
	/** @type {undefined|!number} */
	var a01$0$2;
	/** @type {undefined|!number} */
	var a11$0$2;
	/** @type {undefined|!number} */
	var a21$0$2;
	/** @type {undefined|!number} */
	var a31$0$2;
	/** @type {undefined|!number} */
	var a02$0$2;
	/** @type {undefined|!number} */
	var a12$0$2;
	/** @type {undefined|!number} */
	var a22$0$2;
	/** @type {undefined|!number} */
	var a32$0$2;
	/** @type {undefined|!number} */
	var a03$0$2;
	/** @type {undefined|!number} */
	var a13$0$2;
	/** @type {undefined|!number} */
	var a23$0$2;
	/** @type {undefined|!number} */
	var a33$0$2;
	/** @type {Float32Array} */
	var b$0$2;
	/** @type {undefined|!number} */
	var b00$0$2;
	/** @type {undefined|!number} */
	var b10$0$2;
	/** @type {undefined|!number} */
	var b20$0$2;
	/** @type {undefined|!number} */
	var b30$0$2;
	/** @type {undefined|!number} */
	var b01$0$2;
	/** @type {undefined|!number} */
	var b11$0$2;
	/** @type {undefined|!number} */
	var b21$0$2;
	/** @type {undefined|!number} */
	var b31$0$2;
	/** @type {undefined|!number} */
	var b02$0$2;
	/** @type {undefined|!number} */
	var b12$0$2;
	/** @type {undefined|!number} */
	var b22$0$2;
	/** @type {undefined|!number} */
	var b32$0$2;
	/** @type {undefined|!number} */
	var b03$0$2;
	/** @type {undefined|!number} */
	var b13$0$2;
	/** @type {undefined|!number} */
	var b23$0$2;
	/** @type {undefined|!number} */
	var b33$0$2;
	/** @type {_Part} */
	var p$2;
	/** @type {WebGLRenderingContext} */
	var gl$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var m$3;
	/** @type {Float32Array} */
	var a$0$3;
	/** @type {undefined|!number} */
	var a00$0$3;
	/** @type {undefined|!number} */
	var a10$0$3;
	/** @type {undefined|!number} */
	var a20$0$3;
	/** @type {undefined|!number} */
	var a30$0$3;
	/** @type {undefined|!number} */
	var a01$0$3;
	/** @type {undefined|!number} */
	var a11$0$3;
	/** @type {undefined|!number} */
	var a21$0$3;
	/** @type {undefined|!number} */
	var a31$0$3;
	/** @type {undefined|!number} */
	var a02$0$3;
	/** @type {undefined|!number} */
	var a12$0$3;
	/** @type {undefined|!number} */
	var a22$0$3;
	/** @type {undefined|!number} */
	var a32$0$3;
	/** @type {undefined|!number} */
	var a03$0$3;
	/** @type {undefined|!number} */
	var a13$0$3;
	/** @type {undefined|!number} */
	var a23$0$3;
	/** @type {undefined|!number} */
	var a33$0$3;
	/** @type {Float32Array} */
	var b$0$3;
	/** @type {undefined|!number} */
	var b00$0$3;
	/** @type {undefined|!number} */
	var b10$0$3;
	/** @type {undefined|!number} */
	var b20$0$3;
	/** @type {undefined|!number} */
	var b30$0$3;
	/** @type {undefined|!number} */
	var b01$0$3;
	/** @type {undefined|!number} */
	var b11$0$3;
	/** @type {undefined|!number} */
	var b21$0$3;
	/** @type {undefined|!number} */
	var b31$0$3;
	/** @type {undefined|!number} */
	var b02$0$3;
	/** @type {undefined|!number} */
	var b12$0$3;
	/** @type {undefined|!number} */
	var b22$0$3;
	/** @type {undefined|!number} */
	var b32$0$3;
	/** @type {undefined|!number} */
	var b03$0$3;
	/** @type {undefined|!number} */
	var b13$0$3;
	/** @type {undefined|!number} */
	var b23$0$3;
	/** @type {undefined|!number} */
	var b33$0$3;
	/** @type {_Part} */
	var p$3;
	/** @type {WebGLRenderingContext} */
	var gl$3;
	/** @type {M44} */
	var this$4;
	/** @type {M44} */
	var m$4;
	/** @type {Float32Array} */
	var a$0$4;
	/** @type {undefined|!number} */
	var a00$0$4;
	/** @type {undefined|!number} */
	var a10$0$4;
	/** @type {undefined|!number} */
	var a20$0$4;
	/** @type {undefined|!number} */
	var a30$0$4;
	/** @type {undefined|!number} */
	var a01$0$4;
	/** @type {undefined|!number} */
	var a11$0$4;
	/** @type {undefined|!number} */
	var a21$0$4;
	/** @type {undefined|!number} */
	var a31$0$4;
	/** @type {undefined|!number} */
	var a02$0$4;
	/** @type {undefined|!number} */
	var a12$0$4;
	/** @type {undefined|!number} */
	var a22$0$4;
	/** @type {undefined|!number} */
	var a32$0$4;
	/** @type {undefined|!number} */
	var a03$0$4;
	/** @type {undefined|!number} */
	var a13$0$4;
	/** @type {undefined|!number} */
	var a23$0$4;
	/** @type {undefined|!number} */
	var a33$0$4;
	/** @type {Float32Array} */
	var b$0$4;
	/** @type {undefined|!number} */
	var b00$0$4;
	/** @type {undefined|!number} */
	var b10$0$4;
	/** @type {undefined|!number} */
	var b20$0$4;
	/** @type {undefined|!number} */
	var b30$0$4;
	/** @type {undefined|!number} */
	var b01$0$4;
	/** @type {undefined|!number} */
	var b11$0$4;
	/** @type {undefined|!number} */
	var b21$0$4;
	/** @type {undefined|!number} */
	var b31$0$4;
	/** @type {undefined|!number} */
	var b02$0$4;
	/** @type {undefined|!number} */
	var b12$0$4;
	/** @type {undefined|!number} */
	var b22$0$4;
	/** @type {undefined|!number} */
	var b32$0$4;
	/** @type {undefined|!number} */
	var b03$0$4;
	/** @type {undefined|!number} */
	var b13$0$4;
	/** @type {undefined|!number} */
	var b23$0$4;
	/** @type {undefined|!number} */
	var b33$0$4;
	/** @type {_Part} */
	var p$4;
	/** @type {WebGLRenderingContext} */
	var gl$4;
	/** @type {M44} */
	var this$5;
	/** @type {M44} */
	var m$5;
	/** @type {Float32Array} */
	var a$0$5;
	/** @type {undefined|!number} */
	var a00$0$5;
	/** @type {undefined|!number} */
	var a10$0$5;
	/** @type {undefined|!number} */
	var a20$0$5;
	/** @type {undefined|!number} */
	var a30$0$5;
	/** @type {undefined|!number} */
	var a01$0$5;
	/** @type {undefined|!number} */
	var a11$0$5;
	/** @type {undefined|!number} */
	var a21$0$5;
	/** @type {undefined|!number} */
	var a31$0$5;
	/** @type {undefined|!number} */
	var a02$0$5;
	/** @type {undefined|!number} */
	var a12$0$5;
	/** @type {undefined|!number} */
	var a22$0$5;
	/** @type {undefined|!number} */
	var a32$0$5;
	/** @type {undefined|!number} */
	var a03$0$5;
	/** @type {undefined|!number} */
	var a13$0$5;
	/** @type {undefined|!number} */
	var a23$0$5;
	/** @type {undefined|!number} */
	var a33$0$5;
	/** @type {Float32Array} */
	var b$0$5;
	/** @type {undefined|!number} */
	var b00$0$5;
	/** @type {undefined|!number} */
	var b10$0$5;
	/** @type {undefined|!number} */
	var b20$0$5;
	/** @type {undefined|!number} */
	var b30$0$5;
	/** @type {undefined|!number} */
	var b01$0$5;
	/** @type {undefined|!number} */
	var b11$0$5;
	/** @type {undefined|!number} */
	var b21$0$5;
	/** @type {undefined|!number} */
	var b31$0$5;
	/** @type {undefined|!number} */
	var b02$0$5;
	/** @type {undefined|!number} */
	var b12$0$5;
	/** @type {undefined|!number} */
	var b22$0$5;
	/** @type {undefined|!number} */
	var b32$0$5;
	/** @type {undefined|!number} */
	var b03$0$5;
	/** @type {undefined|!number} */
	var b13$0$5;
	/** @type {undefined|!number} */
	var b23$0$5;
	/** @type {undefined|!number} */
	var b33$0$5;
	/** @type {M44} */
	var this$6;
	/** @type {M44} */
	var this$7;
	/** @type {Float32Array} */
	var a$0$6;
	/** @type {undefined|!number} */
	var a00$0$6;
	/** @type {undefined|!number} */
	var a10$0$6;
	/** @type {undefined|!number} */
	var a20$0$6;
	/** @type {undefined|!number} */
	var a30$0$6;
	/** @type {undefined|!number} */
	var a01$0$6;
	/** @type {undefined|!number} */
	var a11$0$6;
	/** @type {undefined|!number} */
	var a21$0$6;
	/** @type {undefined|!number} */
	var a31$0$6;
	/** @type {undefined|!number} */
	var a02$0$6;
	/** @type {undefined|!number} */
	var a12$0$6;
	/** @type {undefined|!number} */
	var a22$0$6;
	/** @type {undefined|!number} */
	var a32$0$6;
	/** @type {undefined|!number} */
	var a03$0$6;
	/** @type {undefined|!number} */
	var a13$0$6;
	/** @type {undefined|!number} */
	var a23$0$6;
	/** @type {undefined|!number} */
	var a33$0$6;
	/** @type {Float32Array} */
	var b$0$6;
	/** @type {undefined|!number} */
	var b00$0$6;
	/** @type {undefined|!number} */
	var b10$0$6;
	/** @type {undefined|!number} */
	var b20$0$6;
	/** @type {undefined|!number} */
	var b30$0$6;
	/** @type {undefined|!number} */
	var b01$0$6;
	/** @type {undefined|!number} */
	var b11$0$6;
	/** @type {undefined|!number} */
	var b21$0$6;
	/** @type {undefined|!number} */
	var b31$0$6;
	/** @type {undefined|!number} */
	var b02$0$6;
	/** @type {undefined|!number} */
	var b12$0$6;
	/** @type {undefined|!number} */
	var b22$0$6;
	/** @type {undefined|!number} */
	var b32$0$6;
	/** @type {undefined|!number} */
	var b03$0$6;
	/** @type {undefined|!number} */
	var b13$0$6;
	/** @type {undefined|!number} */
	var b23$0$6;
	/** @type {undefined|!number} */
	var b33$0$6;
	/** @type {M44} */
	var this$8;
	/** @type {Float32Array} */
	var a$0$7;
	/** @type {undefined|!number} */
	var a00$0$7;
	/** @type {undefined|!number} */
	var a10$0$7;
	/** @type {undefined|!number} */
	var a20$0$7;
	/** @type {undefined|!number} */
	var a30$0$7;
	/** @type {undefined|!number} */
	var a01$0$7;
	/** @type {undefined|!number} */
	var a11$0$7;
	/** @type {undefined|!number} */
	var a21$0$7;
	/** @type {undefined|!number} */
	var a31$0$7;
	/** @type {undefined|!number} */
	var a02$0$7;
	/** @type {undefined|!number} */
	var a12$0$7;
	/** @type {undefined|!number} */
	var a22$0$7;
	/** @type {undefined|!number} */
	var a32$0$7;
	/** @type {undefined|!number} */
	var a03$0$7;
	/** @type {undefined|!number} */
	var a13$0$7;
	/** @type {undefined|!number} */
	var a23$0$7;
	/** @type {undefined|!number} */
	var a33$0$7;
	/** @type {Float32Array} */
	var b$0$7;
	/** @type {undefined|!number} */
	var b00$0$7;
	/** @type {undefined|!number} */
	var b10$0$7;
	/** @type {undefined|!number} */
	var b20$0$7;
	/** @type {undefined|!number} */
	var b30$0$7;
	/** @type {undefined|!number} */
	var b01$0$7;
	/** @type {undefined|!number} */
	var b11$0$7;
	/** @type {undefined|!number} */
	var b21$0$7;
	/** @type {undefined|!number} */
	var b31$0$7;
	/** @type {undefined|!number} */
	var b02$0$7;
	/** @type {undefined|!number} */
	var b12$0$7;
	/** @type {undefined|!number} */
	var b22$0$7;
	/** @type {undefined|!number} */
	var b32$0$7;
	/** @type {undefined|!number} */
	var b03$0$7;
	/** @type {undefined|!number} */
	var b13$0$7;
	/** @type {undefined|!number} */
	var b23$0$7;
	/** @type {undefined|!number} */
	var b33$0$7;
	/** @type {M44} */
	var this$9;
	/** @type {Float32Array} */
	var a$0$8;
	/** @type {undefined|!number} */
	var a00$0$8;
	/** @type {undefined|!number} */
	var a10$0$8;
	/** @type {undefined|!number} */
	var a20$0$8;
	/** @type {undefined|!number} */
	var a30$0$8;
	/** @type {undefined|!number} */
	var a01$0$8;
	/** @type {undefined|!number} */
	var a11$0$8;
	/** @type {undefined|!number} */
	var a21$0$8;
	/** @type {undefined|!number} */
	var a31$0$8;
	/** @type {undefined|!number} */
	var a02$0$8;
	/** @type {undefined|!number} */
	var a12$0$8;
	/** @type {undefined|!number} */
	var a22$0$8;
	/** @type {undefined|!number} */
	var a32$0$8;
	/** @type {undefined|!number} */
	var a03$0$8;
	/** @type {undefined|!number} */
	var a13$0$8;
	/** @type {undefined|!number} */
	var a23$0$8;
	/** @type {undefined|!number} */
	var a33$0$8;
	/** @type {Float32Array} */
	var b$0$8;
	/** @type {undefined|!number} */
	var b00$0$8;
	/** @type {undefined|!number} */
	var b10$0$8;
	/** @type {undefined|!number} */
	var b20$0$8;
	/** @type {undefined|!number} */
	var b30$0$8;
	/** @type {undefined|!number} */
	var b01$0$8;
	/** @type {undefined|!number} */
	var b11$0$8;
	/** @type {undefined|!number} */
	var b21$0$8;
	/** @type {undefined|!number} */
	var b31$0$8;
	/** @type {undefined|!number} */
	var b02$0$8;
	/** @type {undefined|!number} */
	var b12$0$8;
	/** @type {undefined|!number} */
	var b22$0$8;
	/** @type {undefined|!number} */
	var b32$0$8;
	/** @type {undefined|!number} */
	var b03$0$8;
	/** @type {undefined|!number} */
	var b13$0$8;
	/** @type {undefined|!number} */
	var b23$0$8;
	/** @type {undefined|!number} */
	var b33$0$8;
	/** @type {M44} */
	var this$10;
	/** @type {Float32Array} */
	var a$0$9;
	/** @type {undefined|!number} */
	var a00$0$9;
	/** @type {undefined|!number} */
	var a10$0$9;
	/** @type {undefined|!number} */
	var a20$0$9;
	/** @type {undefined|!number} */
	var a30$0$9;
	/** @type {undefined|!number} */
	var a01$0$9;
	/** @type {undefined|!number} */
	var a11$0$9;
	/** @type {undefined|!number} */
	var a21$0$9;
	/** @type {undefined|!number} */
	var a31$0$9;
	/** @type {undefined|!number} */
	var a02$0$9;
	/** @type {undefined|!number} */
	var a12$0$9;
	/** @type {undefined|!number} */
	var a22$0$9;
	/** @type {undefined|!number} */
	var a32$0$9;
	/** @type {undefined|!number} */
	var a03$0$9;
	/** @type {undefined|!number} */
	var a13$0$9;
	/** @type {undefined|!number} */
	var a23$0$9;
	/** @type {undefined|!number} */
	var a33$0$9;
	/** @type {Float32Array} */
	var b$0$9;
	/** @type {undefined|!number} */
	var b00$0$9;
	/** @type {undefined|!number} */
	var b10$0$9;
	/** @type {undefined|!number} */
	var b20$0$9;
	/** @type {undefined|!number} */
	var b30$0$9;
	/** @type {undefined|!number} */
	var b01$0$9;
	/** @type {undefined|!number} */
	var b11$0$9;
	/** @type {undefined|!number} */
	var b21$0$9;
	/** @type {undefined|!number} */
	var b31$0$9;
	/** @type {undefined|!number} */
	var b02$0$9;
	/** @type {undefined|!number} */
	var b12$0$9;
	/** @type {undefined|!number} */
	var b22$0$9;
	/** @type {undefined|!number} */
	var b32$0$9;
	/** @type {undefined|!number} */
	var b03$0$9;
	/** @type {undefined|!number} */
	var b13$0$9;
	/** @type {undefined|!number} */
	var b23$0$9;
	/** @type {undefined|!number} */
	var b33$0$9;
	/** @type {M44} */
	var this$11;
	/** @type {M44} */
	var m$10;
	/** @type {Float32Array} */
	var a$0$10;
	/** @type {undefined|!number} */
	var a00$0$10;
	/** @type {undefined|!number} */
	var a10$0$10;
	/** @type {undefined|!number} */
	var a20$0$10;
	/** @type {undefined|!number} */
	var a30$0$10;
	/** @type {undefined|!number} */
	var a01$0$10;
	/** @type {undefined|!number} */
	var a11$0$10;
	/** @type {undefined|!number} */
	var a21$0$10;
	/** @type {undefined|!number} */
	var a31$0$10;
	/** @type {undefined|!number} */
	var a02$0$10;
	/** @type {undefined|!number} */
	var a12$0$10;
	/** @type {undefined|!number} */
	var a22$0$10;
	/** @type {undefined|!number} */
	var a32$0$10;
	/** @type {undefined|!number} */
	var a03$0$10;
	/** @type {undefined|!number} */
	var a13$0$10;
	/** @type {undefined|!number} */
	var a23$0$10;
	/** @type {undefined|!number} */
	var a33$0$10;
	/** @type {Float32Array} */
	var b$0$10;
	/** @type {undefined|!number} */
	var b00$0$10;
	/** @type {undefined|!number} */
	var b10$0$10;
	/** @type {undefined|!number} */
	var b20$0$10;
	/** @type {undefined|!number} */
	var b30$0$10;
	/** @type {undefined|!number} */
	var b01$0$10;
	/** @type {undefined|!number} */
	var b11$0$10;
	/** @type {undefined|!number} */
	var b21$0$10;
	/** @type {undefined|!number} */
	var b31$0$10;
	/** @type {undefined|!number} */
	var b02$0$10;
	/** @type {undefined|!number} */
	var b12$0$10;
	/** @type {undefined|!number} */
	var b22$0$10;
	/** @type {undefined|!number} */
	var b32$0$10;
	/** @type {undefined|!number} */
	var b03$0$10;
	/** @type {undefined|!number} */
	var b13$0$10;
	/** @type {undefined|!number} */
	var b23$0$10;
	/** @type {undefined|!number} */
	var b33$0$10;
	/** @type {M44} */
	var this$12;
	/** @type {M44} */
	var this$13;
	/** @type {M44} */
	var this$14;
	/** @type {M44} */
	var this$15;
	/** @type {M44} */
	var this$16;
	/** @type {M44} */
	var m$11;
	/** @type {Float32Array} */
	var a$0$11;
	/** @type {undefined|!number} */
	var a00$0$11;
	/** @type {undefined|!number} */
	var a10$0$11;
	/** @type {undefined|!number} */
	var a20$0$11;
	/** @type {undefined|!number} */
	var a30$0$11;
	/** @type {undefined|!number} */
	var a01$0$11;
	/** @type {undefined|!number} */
	var a11$0$11;
	/** @type {undefined|!number} */
	var a21$0$11;
	/** @type {undefined|!number} */
	var a31$0$11;
	/** @type {undefined|!number} */
	var a02$0$11;
	/** @type {undefined|!number} */
	var a12$0$11;
	/** @type {undefined|!number} */
	var a22$0$11;
	/** @type {undefined|!number} */
	var a32$0$11;
	/** @type {undefined|!number} */
	var a03$0$11;
	/** @type {undefined|!number} */
	var a13$0$11;
	/** @type {undefined|!number} */
	var a23$0$11;
	/** @type {undefined|!number} */
	var a33$0$11;
	/** @type {Float32Array} */
	var b$0$11;
	/** @type {undefined|!number} */
	var b00$0$11;
	/** @type {undefined|!number} */
	var b10$0$11;
	/** @type {undefined|!number} */
	var b20$0$11;
	/** @type {undefined|!number} */
	var b30$0$11;
	/** @type {undefined|!number} */
	var b01$0$11;
	/** @type {undefined|!number} */
	var b11$0$11;
	/** @type {undefined|!number} */
	var b21$0$11;
	/** @type {undefined|!number} */
	var b31$0$11;
	/** @type {undefined|!number} */
	var b02$0$11;
	/** @type {undefined|!number} */
	var b12$0$11;
	/** @type {undefined|!number} */
	var b22$0$11;
	/** @type {undefined|!number} */
	var b32$0$11;
	/** @type {undefined|!number} */
	var b03$0$11;
	/** @type {undefined|!number} */
	var b13$0$11;
	/** @type {undefined|!number} */
	var b23$0$11;
	/** @type {undefined|!number} */
	var b33$0$11;
	/** @type {M44} */
	var this$18;
	/** @type {!number} */
	var rad$0;
	/** @type {M44} */
	var this$19;
	/** @type {V3} */
	var v$0;
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {!number} */
	var z$0$0;
	/** @type {Float32Array} */
	var _$0;
	gl = Kingyo.gl;
	gl.uniform3fv(Kingyo.ulocs.color, this._color);
	gl.uniform3fv(Kingyo.ulocs.color2, this._color2);
	gl.uniform4fv(Kingyo.ulocs.color2pos, this._color2pos);
	modelMatLoc = Kingyo.ulocs.modelMatrix;
	s = Math.sin(this._anim * 5);
	this$19 = {_: new Float32Array(16)};
	v$0 = this._pos;
	x$0$0 = (_$0 = v$0._)[0];
	y$0$0 = _$0[1];
	z$0$0 = _$0[2];
	M44$setIdentity$LM44$(this$19);
	this$19._[12] = x$0$0;
	this$19._[13] = y$0$0;
	this$19._[14] = z$0$0;
	m$11 = this._spinMat;
	a$0$11 = this$19._;
	(a00$0$11 = a$0$11[0], a10$0$11 = a$0$11[1], a20$0$11 = a$0$11[2], a30$0$11 = a$0$11[3]);
	(a01$0$11 = a$0$11[4], a11$0$11 = a$0$11[5], a21$0$11 = a$0$11[6], a31$0$11 = a$0$11[7]);
	(a02$0$11 = a$0$11[8], a12$0$11 = a$0$11[9], a22$0$11 = a$0$11[10], a32$0$11 = a$0$11[11]);
	(a03$0$11 = a$0$11[12], a13$0$11 = a$0$11[13], a23$0$11 = a$0$11[14], a33$0$11 = a$0$11[15]);
	b$0$11 = m$11._;
	(b00$0$11 = b$0$11[0], b10$0$11 = b$0$11[1], b20$0$11 = b$0$11[2], b30$0$11 = b$0$11[3]);
	(b01$0$11 = b$0$11[4], b11$0$11 = b$0$11[5], b21$0$11 = b$0$11[6], b31$0$11 = b$0$11[7]);
	(b02$0$11 = b$0$11[8], b12$0$11 = b$0$11[9], b22$0$11 = b$0$11[10], b32$0$11 = b$0$11[11]);
	(b03$0$11 = b$0$11[12], b13$0$11 = b$0$11[13], b23$0$11 = b$0$11[14], b33$0$11 = b$0$11[15]);
	a$0$11[0] = a00$0$11 * b00$0$11 + a01$0$11 * b10$0$11 + a02$0$11 * b20$0$11 + a03$0$11 * b30$0$11;
	a$0$11[1] = a10$0$11 * b00$0$11 + a11$0$11 * b10$0$11 + a12$0$11 * b20$0$11 + a13$0$11 * b30$0$11;
	a$0$11[2] = a20$0$11 * b00$0$11 + a21$0$11 * b10$0$11 + a22$0$11 * b20$0$11 + a23$0$11 * b30$0$11;
	a$0$11[3] = a30$0$11 * b00$0$11 + a31$0$11 * b10$0$11 + a32$0$11 * b20$0$11 + a33$0$11 * b30$0$11;
	a$0$11[4] = a00$0$11 * b01$0$11 + a01$0$11 * b11$0$11 + a02$0$11 * b21$0$11 + a03$0$11 * b31$0$11;
	a$0$11[5] = a10$0$11 * b01$0$11 + a11$0$11 * b11$0$11 + a12$0$11 * b21$0$11 + a13$0$11 * b31$0$11;
	a$0$11[6] = a20$0$11 * b01$0$11 + a21$0$11 * b11$0$11 + a22$0$11 * b21$0$11 + a23$0$11 * b31$0$11;
	a$0$11[7] = a30$0$11 * b01$0$11 + a31$0$11 * b11$0$11 + a32$0$11 * b21$0$11 + a33$0$11 * b31$0$11;
	a$0$11[8] = a00$0$11 * b02$0$11 + a01$0$11 * b12$0$11 + a02$0$11 * b22$0$11 + a03$0$11 * b32$0$11;
	a$0$11[9] = a10$0$11 * b02$0$11 + a11$0$11 * b12$0$11 + a12$0$11 * b22$0$11 + a13$0$11 * b32$0$11;
	a$0$11[10] = a20$0$11 * b02$0$11 + a21$0$11 * b12$0$11 + a22$0$11 * b22$0$11 + a23$0$11 * b32$0$11;
	a$0$11[11] = a30$0$11 * b02$0$11 + a31$0$11 * b12$0$11 + a32$0$11 * b22$0$11 + a33$0$11 * b32$0$11;
	a$0$11[12] = a00$0$11 * b03$0$11 + a01$0$11 * b13$0$11 + a02$0$11 * b23$0$11 + a03$0$11 * b33$0$11;
	a$0$11[13] = a10$0$11 * b03$0$11 + a11$0$11 * b13$0$11 + a12$0$11 * b23$0$11 + a13$0$11 * b33$0$11;
	a$0$11[14] = a20$0$11 * b03$0$11 + a21$0$11 * b13$0$11 + a22$0$11 * b23$0$11 + a23$0$11 * b33$0$11;
	a$0$11[15] = a30$0$11 * b03$0$11 + a31$0$11 * b13$0$11 + a32$0$11 * b23$0$11 + a33$0$11 * b33$0$11;
	this$11 = this$19;
	this$18 = {_: new Float32Array(16)};
	rad$0 = this._vangle - s / 10;
	m$10 = M44$setRotate$LM44$NNNN(this$18, rad$0, 0, 0, 1);
	a$0$10 = this$11._;
	(a00$0$10 = a$0$10[0], a10$0$10 = a$0$10[1], a20$0$10 = a$0$10[2], a30$0$10 = a$0$10[3]);
	(a01$0$10 = a$0$10[4], a11$0$10 = a$0$10[5], a21$0$10 = a$0$10[6], a31$0$10 = a$0$10[7]);
	(a02$0$10 = a$0$10[8], a12$0$10 = a$0$10[9], a22$0$10 = a$0$10[10], a32$0$10 = a$0$10[11]);
	(a03$0$10 = a$0$10[12], a13$0$10 = a$0$10[13], a23$0$10 = a$0$10[14], a33$0$10 = a$0$10[15]);
	b$0$10 = m$10._;
	(b00$0$10 = b$0$10[0], b10$0$10 = b$0$10[1], b20$0$10 = b$0$10[2], b30$0$10 = b$0$10[3]);
	(b01$0$10 = b$0$10[4], b11$0$10 = b$0$10[5], b21$0$10 = b$0$10[6], b31$0$10 = b$0$10[7]);
	(b02$0$10 = b$0$10[8], b12$0$10 = b$0$10[9], b22$0$10 = b$0$10[10], b32$0$10 = b$0$10[11]);
	(b03$0$10 = b$0$10[12], b13$0$10 = b$0$10[13], b23$0$10 = b$0$10[14], b33$0$10 = b$0$10[15]);
	a$0$10[0] = a00$0$10 * b00$0$10 + a01$0$10 * b10$0$10 + a02$0$10 * b20$0$10 + a03$0$10 * b30$0$10;
	a$0$10[1] = a10$0$10 * b00$0$10 + a11$0$10 * b10$0$10 + a12$0$10 * b20$0$10 + a13$0$10 * b30$0$10;
	a$0$10[2] = a20$0$10 * b00$0$10 + a21$0$10 * b10$0$10 + a22$0$10 * b20$0$10 + a23$0$10 * b30$0$10;
	a$0$10[3] = a30$0$10 * b00$0$10 + a31$0$10 * b10$0$10 + a32$0$10 * b20$0$10 + a33$0$10 * b30$0$10;
	a$0$10[4] = a00$0$10 * b01$0$10 + a01$0$10 * b11$0$10 + a02$0$10 * b21$0$10 + a03$0$10 * b31$0$10;
	a$0$10[5] = a10$0$10 * b01$0$10 + a11$0$10 * b11$0$10 + a12$0$10 * b21$0$10 + a13$0$10 * b31$0$10;
	a$0$10[6] = a20$0$10 * b01$0$10 + a21$0$10 * b11$0$10 + a22$0$10 * b21$0$10 + a23$0$10 * b31$0$10;
	a$0$10[7] = a30$0$10 * b01$0$10 + a31$0$10 * b11$0$10 + a32$0$10 * b21$0$10 + a33$0$10 * b31$0$10;
	a$0$10[8] = a00$0$10 * b02$0$10 + a01$0$10 * b12$0$10 + a02$0$10 * b22$0$10 + a03$0$10 * b32$0$10;
	a$0$10[9] = a10$0$10 * b02$0$10 + a11$0$10 * b12$0$10 + a12$0$10 * b22$0$10 + a13$0$10 * b32$0$10;
	a$0$10[10] = a20$0$10 * b02$0$10 + a21$0$10 * b12$0$10 + a22$0$10 * b22$0$10 + a23$0$10 * b32$0$10;
	a$0$10[11] = a30$0$10 * b02$0$10 + a31$0$10 * b12$0$10 + a32$0$10 * b22$0$10 + a33$0$10 * b32$0$10;
	a$0$10[12] = a00$0$10 * b03$0$10 + a01$0$10 * b13$0$10 + a02$0$10 * b23$0$10 + a03$0$10 * b33$0$10;
	a$0$10[13] = a10$0$10 * b03$0$10 + a11$0$10 * b13$0$10 + a12$0$10 * b23$0$10 + a13$0$10 * b33$0$10;
	a$0$10[14] = a20$0$10 * b03$0$10 + a21$0$10 * b13$0$10 + a22$0$10 * b23$0$10 + a23$0$10 * b33$0$10;
	a$0$10[15] = a30$0$10 * b03$0$10 + a31$0$10 * b13$0$10 + a32$0$10 * b23$0$10 + a33$0$10 * b33$0$10;
	this$5 = this$11;
	this$12 = {_: new Float32Array(16)};
	m$5 = M44$setRotate$LM44$NNNN(this$12, 1.5707963267948966, 1, 0, 0);
	a$0$5 = this$5._;
	(a00$0$5 = a$0$5[0], a10$0$5 = a$0$5[1], a20$0$5 = a$0$5[2], a30$0$5 = a$0$5[3]);
	(a01$0$5 = a$0$5[4], a11$0$5 = a$0$5[5], a21$0$5 = a$0$5[6], a31$0$5 = a$0$5[7]);
	(a02$0$5 = a$0$5[8], a12$0$5 = a$0$5[9], a22$0$5 = a$0$5[10], a32$0$5 = a$0$5[11]);
	(a03$0$5 = a$0$5[12], a13$0$5 = a$0$5[13], a23$0$5 = a$0$5[14], a33$0$5 = a$0$5[15]);
	b$0$5 = m$5._;
	(b00$0$5 = b$0$5[0], b10$0$5 = b$0$5[1], b20$0$5 = b$0$5[2], b30$0$5 = b$0$5[3]);
	(b01$0$5 = b$0$5[4], b11$0$5 = b$0$5[5], b21$0$5 = b$0$5[6], b31$0$5 = b$0$5[7]);
	(b02$0$5 = b$0$5[8], b12$0$5 = b$0$5[9], b22$0$5 = b$0$5[10], b32$0$5 = b$0$5[11]);
	(b03$0$5 = b$0$5[12], b13$0$5 = b$0$5[13], b23$0$5 = b$0$5[14], b33$0$5 = b$0$5[15]);
	a$0$5[0] = a00$0$5 * b00$0$5 + a01$0$5 * b10$0$5 + a02$0$5 * b20$0$5 + a03$0$5 * b30$0$5;
	a$0$5[1] = a10$0$5 * b00$0$5 + a11$0$5 * b10$0$5 + a12$0$5 * b20$0$5 + a13$0$5 * b30$0$5;
	a$0$5[2] = a20$0$5 * b00$0$5 + a21$0$5 * b10$0$5 + a22$0$5 * b20$0$5 + a23$0$5 * b30$0$5;
	a$0$5[3] = a30$0$5 * b00$0$5 + a31$0$5 * b10$0$5 + a32$0$5 * b20$0$5 + a33$0$5 * b30$0$5;
	a$0$5[4] = a00$0$5 * b01$0$5 + a01$0$5 * b11$0$5 + a02$0$5 * b21$0$5 + a03$0$5 * b31$0$5;
	a$0$5[5] = a10$0$5 * b01$0$5 + a11$0$5 * b11$0$5 + a12$0$5 * b21$0$5 + a13$0$5 * b31$0$5;
	a$0$5[6] = a20$0$5 * b01$0$5 + a21$0$5 * b11$0$5 + a22$0$5 * b21$0$5 + a23$0$5 * b31$0$5;
	a$0$5[7] = a30$0$5 * b01$0$5 + a31$0$5 * b11$0$5 + a32$0$5 * b21$0$5 + a33$0$5 * b31$0$5;
	a$0$5[8] = a00$0$5 * b02$0$5 + a01$0$5 * b12$0$5 + a02$0$5 * b22$0$5 + a03$0$5 * b32$0$5;
	a$0$5[9] = a10$0$5 * b02$0$5 + a11$0$5 * b12$0$5 + a12$0$5 * b22$0$5 + a13$0$5 * b32$0$5;
	a$0$5[10] = a20$0$5 * b02$0$5 + a21$0$5 * b12$0$5 + a22$0$5 * b22$0$5 + a23$0$5 * b32$0$5;
	a$0$5[11] = a30$0$5 * b02$0$5 + a31$0$5 * b12$0$5 + a32$0$5 * b22$0$5 + a33$0$5 * b32$0$5;
	a$0$5[12] = a00$0$5 * b03$0$5 + a01$0$5 * b13$0$5 + a02$0$5 * b23$0$5 + a03$0$5 * b33$0$5;
	a$0$5[13] = a10$0$5 * b03$0$5 + a11$0$5 * b13$0$5 + a12$0$5 * b23$0$5 + a13$0$5 * b33$0$5;
	a$0$5[14] = a20$0$5 * b03$0$5 + a21$0$5 * b13$0$5 + a22$0$5 * b23$0$5 + a23$0$5 * b33$0$5;
	a$0$5[15] = a30$0$5 * b03$0$5 + a31$0$5 * b13$0$5 + a32$0$5 * b23$0$5 + a33$0$5 * b33$0$5;
	this$0 = this$5;
	this$6 = {_: new Float32Array(16)};
	m$0 = M44$setRotate$LM44$NNNN(this$6, 1.5707963267948966, 0, 1, 0);
	a$0$0 = this$0._;
	(a00$0$0 = a$0$0[0], a10$0$0 = a$0$0[1], a20$0$0 = a$0$0[2], a30$0$0 = a$0$0[3]);
	(a01$0$0 = a$0$0[4], a11$0$0 = a$0$0[5], a21$0$0 = a$0$0[6], a31$0$0 = a$0$0[7]);
	(a02$0$0 = a$0$0[8], a12$0$0 = a$0$0[9], a22$0$0 = a$0$0[10], a32$0$0 = a$0$0[11]);
	(a03$0$0 = a$0$0[12], a13$0$0 = a$0$0[13], a23$0$0 = a$0$0[14], a33$0$0 = a$0$0[15]);
	b$0$0 = m$0._;
	(b00$0$0 = b$0$0[0], b10$0$0 = b$0$0[1], b20$0$0 = b$0$0[2], b30$0$0 = b$0$0[3]);
	(b01$0$0 = b$0$0[4], b11$0$0 = b$0$0[5], b21$0$0 = b$0$0[6], b31$0$0 = b$0$0[7]);
	(b02$0$0 = b$0$0[8], b12$0$0 = b$0$0[9], b22$0$0 = b$0$0[10], b32$0$0 = b$0$0[11]);
	(b03$0$0 = b$0$0[12], b13$0$0 = b$0$0[13], b23$0$0 = b$0$0[14], b33$0$0 = b$0$0[15]);
	a$0$0[0] = a00$0$0 * b00$0$0 + a01$0$0 * b10$0$0 + a02$0$0 * b20$0$0 + a03$0$0 * b30$0$0;
	a$0$0[1] = a10$0$0 * b00$0$0 + a11$0$0 * b10$0$0 + a12$0$0 * b20$0$0 + a13$0$0 * b30$0$0;
	a$0$0[2] = a20$0$0 * b00$0$0 + a21$0$0 * b10$0$0 + a22$0$0 * b20$0$0 + a23$0$0 * b30$0$0;
	a$0$0[3] = a30$0$0 * b00$0$0 + a31$0$0 * b10$0$0 + a32$0$0 * b20$0$0 + a33$0$0 * b30$0$0;
	a$0$0[4] = a00$0$0 * b01$0$0 + a01$0$0 * b11$0$0 + a02$0$0 * b21$0$0 + a03$0$0 * b31$0$0;
	a$0$0[5] = a10$0$0 * b01$0$0 + a11$0$0 * b11$0$0 + a12$0$0 * b21$0$0 + a13$0$0 * b31$0$0;
	a$0$0[6] = a20$0$0 * b01$0$0 + a21$0$0 * b11$0$0 + a22$0$0 * b21$0$0 + a23$0$0 * b31$0$0;
	a$0$0[7] = a30$0$0 * b01$0$0 + a31$0$0 * b11$0$0 + a32$0$0 * b21$0$0 + a33$0$0 * b31$0$0;
	a$0$0[8] = a00$0$0 * b02$0$0 + a01$0$0 * b12$0$0 + a02$0$0 * b22$0$0 + a03$0$0 * b32$0$0;
	a$0$0[9] = a10$0$0 * b02$0$0 + a11$0$0 * b12$0$0 + a12$0$0 * b22$0$0 + a13$0$0 * b32$0$0;
	a$0$0[10] = a20$0$0 * b02$0$0 + a21$0$0 * b12$0$0 + a22$0$0 * b22$0$0 + a23$0$0 * b32$0$0;
	a$0$0[11] = a30$0$0 * b02$0$0 + a31$0$0 * b12$0$0 + a32$0$0 * b22$0$0 + a33$0$0 * b32$0$0;
	a$0$0[12] = a00$0$0 * b03$0$0 + a01$0$0 * b13$0$0 + a02$0$0 * b23$0$0 + a03$0$0 * b33$0$0;
	a$0$0[13] = a10$0$0 * b03$0$0 + a11$0$0 * b13$0$0 + a12$0$0 * b23$0$0 + a13$0$0 * b33$0$0;
	a$0$0[14] = a20$0$0 * b03$0$0 + a21$0$0 * b13$0$0 + a22$0$0 * b23$0$0 + a23$0$0 * b33$0$0;
	a$0$0[15] = a30$0$0 * b03$0$0 + a31$0$0 * b13$0$0 + a32$0$0 * b23$0$0 + a33$0$0 * b33$0$0;
	bodyMat = this$0;
	gl.uniformMatrix4fv(modelMatLoc, false, this$0._);
	p$0 = Kingyo.body;
	gl$0 = Kingyo.gl;
	gl$0.bindBuffer(gl$0.ARRAY_BUFFER, p$0.vbuf);
	gl$0.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$0.FLOAT, false, 0, 0);
	gl$0.bindBuffer(gl$0.ARRAY_BUFFER, p$0.nbuf);
	gl$0.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$0.FLOAT, false, 0, 0);
	gl$0.bindBuffer(gl$0.ELEMENT_ARRAY_BUFFER, p$0.ibuf);
	gl$0.drawElements(gl$0.TRIANGLES, p$0.numi, gl$0.UNSIGNED_SHORT, 0);
	this$7 = new M44$LM44$(this$0);
	this$13 = {_: new Float32Array(16)};
	M44$setIdentity$LM44$(this$13);
	this$13._[12] = 0.5;
	this$13._[13] = -0.3;
	this$13._[14] = 0;
	a$0$6 = this$7._;
	(a00$0$6 = a$0$6[0], a10$0$6 = a$0$6[1], a20$0$6 = a$0$6[2], a30$0$6 = a$0$6[3]);
	(a01$0$6 = a$0$6[4], a11$0$6 = a$0$6[5], a21$0$6 = a$0$6[6], a31$0$6 = a$0$6[7]);
	(a02$0$6 = a$0$6[8], a12$0$6 = a$0$6[9], a22$0$6 = a$0$6[10], a32$0$6 = a$0$6[11]);
	(a03$0$6 = a$0$6[12], a13$0$6 = a$0$6[13], a23$0$6 = a$0$6[14], a33$0$6 = a$0$6[15]);
	b$0$6 = this$13._;
	(b00$0$6 = b$0$6[0], b10$0$6 = b$0$6[1], b20$0$6 = b$0$6[2], b30$0$6 = b$0$6[3]);
	(b01$0$6 = b$0$6[4], b11$0$6 = b$0$6[5], b21$0$6 = b$0$6[6], b31$0$6 = b$0$6[7]);
	(b02$0$6 = b$0$6[8], b12$0$6 = b$0$6[9], b22$0$6 = b$0$6[10], b32$0$6 = b$0$6[11]);
	(b03$0$6 = b$0$6[12], b13$0$6 = b$0$6[13], b23$0$6 = b$0$6[14], b33$0$6 = b$0$6[15]);
	a$0$6[0] = a00$0$6 * b00$0$6 + a01$0$6 * b10$0$6 + a02$0$6 * b20$0$6 + a03$0$6 * b30$0$6;
	a$0$6[1] = a10$0$6 * b00$0$6 + a11$0$6 * b10$0$6 + a12$0$6 * b20$0$6 + a13$0$6 * b30$0$6;
	a$0$6[2] = a20$0$6 * b00$0$6 + a21$0$6 * b10$0$6 + a22$0$6 * b20$0$6 + a23$0$6 * b30$0$6;
	a$0$6[3] = a30$0$6 * b00$0$6 + a31$0$6 * b10$0$6 + a32$0$6 * b20$0$6 + a33$0$6 * b30$0$6;
	a$0$6[4] = a00$0$6 * b01$0$6 + a01$0$6 * b11$0$6 + a02$0$6 * b21$0$6 + a03$0$6 * b31$0$6;
	a$0$6[5] = a10$0$6 * b01$0$6 + a11$0$6 * b11$0$6 + a12$0$6 * b21$0$6 + a13$0$6 * b31$0$6;
	a$0$6[6] = a20$0$6 * b01$0$6 + a21$0$6 * b11$0$6 + a22$0$6 * b21$0$6 + a23$0$6 * b31$0$6;
	a$0$6[7] = a30$0$6 * b01$0$6 + a31$0$6 * b11$0$6 + a32$0$6 * b21$0$6 + a33$0$6 * b31$0$6;
	a$0$6[8] = a00$0$6 * b02$0$6 + a01$0$6 * b12$0$6 + a02$0$6 * b22$0$6 + a03$0$6 * b32$0$6;
	a$0$6[9] = a10$0$6 * b02$0$6 + a11$0$6 * b12$0$6 + a12$0$6 * b22$0$6 + a13$0$6 * b32$0$6;
	a$0$6[10] = a20$0$6 * b02$0$6 + a21$0$6 * b12$0$6 + a22$0$6 * b22$0$6 + a23$0$6 * b32$0$6;
	a$0$6[11] = a30$0$6 * b02$0$6 + a31$0$6 * b12$0$6 + a32$0$6 * b22$0$6 + a33$0$6 * b32$0$6;
	a$0$6[12] = a00$0$6 * b03$0$6 + a01$0$6 * b13$0$6 + a02$0$6 * b23$0$6 + a03$0$6 * b33$0$6;
	a$0$6[13] = a10$0$6 * b03$0$6 + a11$0$6 * b13$0$6 + a12$0$6 * b23$0$6 + a13$0$6 * b33$0$6;
	a$0$6[14] = a20$0$6 * b03$0$6 + a21$0$6 * b13$0$6 + a22$0$6 * b23$0$6 + a23$0$6 * b33$0$6;
	a$0$6[15] = a30$0$6 * b03$0$6 + a31$0$6 * b13$0$6 + a32$0$6 * b23$0$6 + a33$0$6 * b33$0$6;
	this$1 = this$7;
	m$1 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, 1 + s / 2, 0.2, 1, -0.5);
	a$0$1 = this$1._;
	(a00$0$1 = a$0$1[0], a10$0$1 = a$0$1[1], a20$0$1 = a$0$1[2], a30$0$1 = a$0$1[3]);
	(a01$0$1 = a$0$1[4], a11$0$1 = a$0$1[5], a21$0$1 = a$0$1[6], a31$0$1 = a$0$1[7]);
	(a02$0$1 = a$0$1[8], a12$0$1 = a$0$1[9], a22$0$1 = a$0$1[10], a32$0$1 = a$0$1[11]);
	(a03$0$1 = a$0$1[12], a13$0$1 = a$0$1[13], a23$0$1 = a$0$1[14], a33$0$1 = a$0$1[15]);
	b$0$1 = m$1._;
	(b00$0$1 = b$0$1[0], b10$0$1 = b$0$1[1], b20$0$1 = b$0$1[2], b30$0$1 = b$0$1[3]);
	(b01$0$1 = b$0$1[4], b11$0$1 = b$0$1[5], b21$0$1 = b$0$1[6], b31$0$1 = b$0$1[7]);
	(b02$0$1 = b$0$1[8], b12$0$1 = b$0$1[9], b22$0$1 = b$0$1[10], b32$0$1 = b$0$1[11]);
	(b03$0$1 = b$0$1[12], b13$0$1 = b$0$1[13], b23$0$1 = b$0$1[14], b33$0$1 = b$0$1[15]);
	a$0$1[0] = a00$0$1 * b00$0$1 + a01$0$1 * b10$0$1 + a02$0$1 * b20$0$1 + a03$0$1 * b30$0$1;
	a$0$1[1] = a10$0$1 * b00$0$1 + a11$0$1 * b10$0$1 + a12$0$1 * b20$0$1 + a13$0$1 * b30$0$1;
	a$0$1[2] = a20$0$1 * b00$0$1 + a21$0$1 * b10$0$1 + a22$0$1 * b20$0$1 + a23$0$1 * b30$0$1;
	a$0$1[3] = a30$0$1 * b00$0$1 + a31$0$1 * b10$0$1 + a32$0$1 * b20$0$1 + a33$0$1 * b30$0$1;
	a$0$1[4] = a00$0$1 * b01$0$1 + a01$0$1 * b11$0$1 + a02$0$1 * b21$0$1 + a03$0$1 * b31$0$1;
	a$0$1[5] = a10$0$1 * b01$0$1 + a11$0$1 * b11$0$1 + a12$0$1 * b21$0$1 + a13$0$1 * b31$0$1;
	a$0$1[6] = a20$0$1 * b01$0$1 + a21$0$1 * b11$0$1 + a22$0$1 * b21$0$1 + a23$0$1 * b31$0$1;
	a$0$1[7] = a30$0$1 * b01$0$1 + a31$0$1 * b11$0$1 + a32$0$1 * b21$0$1 + a33$0$1 * b31$0$1;
	a$0$1[8] = a00$0$1 * b02$0$1 + a01$0$1 * b12$0$1 + a02$0$1 * b22$0$1 + a03$0$1 * b32$0$1;
	a$0$1[9] = a10$0$1 * b02$0$1 + a11$0$1 * b12$0$1 + a12$0$1 * b22$0$1 + a13$0$1 * b32$0$1;
	a$0$1[10] = a20$0$1 * b02$0$1 + a21$0$1 * b12$0$1 + a22$0$1 * b22$0$1 + a23$0$1 * b32$0$1;
	a$0$1[11] = a30$0$1 * b02$0$1 + a31$0$1 * b12$0$1 + a32$0$1 * b22$0$1 + a33$0$1 * b32$0$1;
	a$0$1[12] = a00$0$1 * b03$0$1 + a01$0$1 * b13$0$1 + a02$0$1 * b23$0$1 + a03$0$1 * b33$0$1;
	a$0$1[13] = a10$0$1 * b03$0$1 + a11$0$1 * b13$0$1 + a12$0$1 * b23$0$1 + a13$0$1 * b33$0$1;
	a$0$1[14] = a20$0$1 * b03$0$1 + a21$0$1 * b13$0$1 + a22$0$1 * b23$0$1 + a23$0$1 * b33$0$1;
	a$0$1[15] = a30$0$1 * b03$0$1 + a31$0$1 * b13$0$1 + a32$0$1 * b23$0$1 + a33$0$1 * b33$0$1;
	gl.uniformMatrix4fv(modelMatLoc, false, this$1._);
	p$1 = Kingyo.lfin;
	gl$1 = Kingyo.gl;
	gl$1.bindBuffer(gl$1.ARRAY_BUFFER, p$1.vbuf);
	gl$1.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$1.FLOAT, false, 0, 0);
	gl$1.bindBuffer(gl$1.ARRAY_BUFFER, p$1.nbuf);
	gl$1.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$1.FLOAT, false, 0, 0);
	gl$1.bindBuffer(gl$1.ELEMENT_ARRAY_BUFFER, p$1.ibuf);
	gl$1.drawElements(gl$1.TRIANGLES, p$1.numi, gl$1.UNSIGNED_SHORT, 0);
	this$8 = new M44$LM44$(bodyMat);
	this$14 = {_: new Float32Array(16)};
	M44$setIdentity$LM44$(this$14);
	this$14._[12] = -0.5;
	this$14._[13] = -0.3;
	this$14._[14] = 0;
	a$0$7 = this$8._;
	(a00$0$7 = a$0$7[0], a10$0$7 = a$0$7[1], a20$0$7 = a$0$7[2], a30$0$7 = a$0$7[3]);
	(a01$0$7 = a$0$7[4], a11$0$7 = a$0$7[5], a21$0$7 = a$0$7[6], a31$0$7 = a$0$7[7]);
	(a02$0$7 = a$0$7[8], a12$0$7 = a$0$7[9], a22$0$7 = a$0$7[10], a32$0$7 = a$0$7[11]);
	(a03$0$7 = a$0$7[12], a13$0$7 = a$0$7[13], a23$0$7 = a$0$7[14], a33$0$7 = a$0$7[15]);
	b$0$7 = this$14._;
	(b00$0$7 = b$0$7[0], b10$0$7 = b$0$7[1], b20$0$7 = b$0$7[2], b30$0$7 = b$0$7[3]);
	(b01$0$7 = b$0$7[4], b11$0$7 = b$0$7[5], b21$0$7 = b$0$7[6], b31$0$7 = b$0$7[7]);
	(b02$0$7 = b$0$7[8], b12$0$7 = b$0$7[9], b22$0$7 = b$0$7[10], b32$0$7 = b$0$7[11]);
	(b03$0$7 = b$0$7[12], b13$0$7 = b$0$7[13], b23$0$7 = b$0$7[14], b33$0$7 = b$0$7[15]);
	a$0$7[0] = a00$0$7 * b00$0$7 + a01$0$7 * b10$0$7 + a02$0$7 * b20$0$7 + a03$0$7 * b30$0$7;
	a$0$7[1] = a10$0$7 * b00$0$7 + a11$0$7 * b10$0$7 + a12$0$7 * b20$0$7 + a13$0$7 * b30$0$7;
	a$0$7[2] = a20$0$7 * b00$0$7 + a21$0$7 * b10$0$7 + a22$0$7 * b20$0$7 + a23$0$7 * b30$0$7;
	a$0$7[3] = a30$0$7 * b00$0$7 + a31$0$7 * b10$0$7 + a32$0$7 * b20$0$7 + a33$0$7 * b30$0$7;
	a$0$7[4] = a00$0$7 * b01$0$7 + a01$0$7 * b11$0$7 + a02$0$7 * b21$0$7 + a03$0$7 * b31$0$7;
	a$0$7[5] = a10$0$7 * b01$0$7 + a11$0$7 * b11$0$7 + a12$0$7 * b21$0$7 + a13$0$7 * b31$0$7;
	a$0$7[6] = a20$0$7 * b01$0$7 + a21$0$7 * b11$0$7 + a22$0$7 * b21$0$7 + a23$0$7 * b31$0$7;
	a$0$7[7] = a30$0$7 * b01$0$7 + a31$0$7 * b11$0$7 + a32$0$7 * b21$0$7 + a33$0$7 * b31$0$7;
	a$0$7[8] = a00$0$7 * b02$0$7 + a01$0$7 * b12$0$7 + a02$0$7 * b22$0$7 + a03$0$7 * b32$0$7;
	a$0$7[9] = a10$0$7 * b02$0$7 + a11$0$7 * b12$0$7 + a12$0$7 * b22$0$7 + a13$0$7 * b32$0$7;
	a$0$7[10] = a20$0$7 * b02$0$7 + a21$0$7 * b12$0$7 + a22$0$7 * b22$0$7 + a23$0$7 * b32$0$7;
	a$0$7[11] = a30$0$7 * b02$0$7 + a31$0$7 * b12$0$7 + a32$0$7 * b22$0$7 + a33$0$7 * b32$0$7;
	a$0$7[12] = a00$0$7 * b03$0$7 + a01$0$7 * b13$0$7 + a02$0$7 * b23$0$7 + a03$0$7 * b33$0$7;
	a$0$7[13] = a10$0$7 * b03$0$7 + a11$0$7 * b13$0$7 + a12$0$7 * b23$0$7 + a13$0$7 * b33$0$7;
	a$0$7[14] = a20$0$7 * b03$0$7 + a21$0$7 * b13$0$7 + a22$0$7 * b23$0$7 + a23$0$7 * b33$0$7;
	a$0$7[15] = a30$0$7 * b03$0$7 + a31$0$7 * b13$0$7 + a32$0$7 * b23$0$7 + a33$0$7 * b33$0$7;
	this$2 = this$8;
	m$2 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, -1 - s / 2, -0.2, 1, -0.5);
	a$0$2 = this$2._;
	(a00$0$2 = a$0$2[0], a10$0$2 = a$0$2[1], a20$0$2 = a$0$2[2], a30$0$2 = a$0$2[3]);
	(a01$0$2 = a$0$2[4], a11$0$2 = a$0$2[5], a21$0$2 = a$0$2[6], a31$0$2 = a$0$2[7]);
	(a02$0$2 = a$0$2[8], a12$0$2 = a$0$2[9], a22$0$2 = a$0$2[10], a32$0$2 = a$0$2[11]);
	(a03$0$2 = a$0$2[12], a13$0$2 = a$0$2[13], a23$0$2 = a$0$2[14], a33$0$2 = a$0$2[15]);
	b$0$2 = m$2._;
	(b00$0$2 = b$0$2[0], b10$0$2 = b$0$2[1], b20$0$2 = b$0$2[2], b30$0$2 = b$0$2[3]);
	(b01$0$2 = b$0$2[4], b11$0$2 = b$0$2[5], b21$0$2 = b$0$2[6], b31$0$2 = b$0$2[7]);
	(b02$0$2 = b$0$2[8], b12$0$2 = b$0$2[9], b22$0$2 = b$0$2[10], b32$0$2 = b$0$2[11]);
	(b03$0$2 = b$0$2[12], b13$0$2 = b$0$2[13], b23$0$2 = b$0$2[14], b33$0$2 = b$0$2[15]);
	a$0$2[0] = a00$0$2 * b00$0$2 + a01$0$2 * b10$0$2 + a02$0$2 * b20$0$2 + a03$0$2 * b30$0$2;
	a$0$2[1] = a10$0$2 * b00$0$2 + a11$0$2 * b10$0$2 + a12$0$2 * b20$0$2 + a13$0$2 * b30$0$2;
	a$0$2[2] = a20$0$2 * b00$0$2 + a21$0$2 * b10$0$2 + a22$0$2 * b20$0$2 + a23$0$2 * b30$0$2;
	a$0$2[3] = a30$0$2 * b00$0$2 + a31$0$2 * b10$0$2 + a32$0$2 * b20$0$2 + a33$0$2 * b30$0$2;
	a$0$2[4] = a00$0$2 * b01$0$2 + a01$0$2 * b11$0$2 + a02$0$2 * b21$0$2 + a03$0$2 * b31$0$2;
	a$0$2[5] = a10$0$2 * b01$0$2 + a11$0$2 * b11$0$2 + a12$0$2 * b21$0$2 + a13$0$2 * b31$0$2;
	a$0$2[6] = a20$0$2 * b01$0$2 + a21$0$2 * b11$0$2 + a22$0$2 * b21$0$2 + a23$0$2 * b31$0$2;
	a$0$2[7] = a30$0$2 * b01$0$2 + a31$0$2 * b11$0$2 + a32$0$2 * b21$0$2 + a33$0$2 * b31$0$2;
	a$0$2[8] = a00$0$2 * b02$0$2 + a01$0$2 * b12$0$2 + a02$0$2 * b22$0$2 + a03$0$2 * b32$0$2;
	a$0$2[9] = a10$0$2 * b02$0$2 + a11$0$2 * b12$0$2 + a12$0$2 * b22$0$2 + a13$0$2 * b32$0$2;
	a$0$2[10] = a20$0$2 * b02$0$2 + a21$0$2 * b12$0$2 + a22$0$2 * b22$0$2 + a23$0$2 * b32$0$2;
	a$0$2[11] = a30$0$2 * b02$0$2 + a31$0$2 * b12$0$2 + a32$0$2 * b22$0$2 + a33$0$2 * b32$0$2;
	a$0$2[12] = a00$0$2 * b03$0$2 + a01$0$2 * b13$0$2 + a02$0$2 * b23$0$2 + a03$0$2 * b33$0$2;
	a$0$2[13] = a10$0$2 * b03$0$2 + a11$0$2 * b13$0$2 + a12$0$2 * b23$0$2 + a13$0$2 * b33$0$2;
	a$0$2[14] = a20$0$2 * b03$0$2 + a21$0$2 * b13$0$2 + a22$0$2 * b23$0$2 + a23$0$2 * b33$0$2;
	a$0$2[15] = a30$0$2 * b03$0$2 + a31$0$2 * b13$0$2 + a32$0$2 * b23$0$2 + a33$0$2 * b33$0$2;
	gl.uniformMatrix4fv(modelMatLoc, false, this$2._);
	p$2 = Kingyo.rfin;
	gl$2 = Kingyo.gl;
	gl$2.bindBuffer(gl$2.ARRAY_BUFFER, p$2.vbuf);
	gl$2.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$2.FLOAT, false, 0, 0);
	gl$2.bindBuffer(gl$2.ARRAY_BUFFER, p$2.nbuf);
	gl$2.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$2.FLOAT, false, 0, 0);
	gl$2.bindBuffer(gl$2.ELEMENT_ARRAY_BUFFER, p$2.ibuf);
	gl$2.drawElements(gl$2.TRIANGLES, p$2.numi, gl$2.UNSIGNED_SHORT, 0);
	this$9 = new M44$LM44$(bodyMat);
	this$15 = {_: new Float32Array(16)};
	M44$setIdentity$LM44$(this$15);
	this$15._[12] = 0;
	this$15._[13] = 0.7;
	this$15._[14] = 0;
	a$0$8 = this$9._;
	(a00$0$8 = a$0$8[0], a10$0$8 = a$0$8[1], a20$0$8 = a$0$8[2], a30$0$8 = a$0$8[3]);
	(a01$0$8 = a$0$8[4], a11$0$8 = a$0$8[5], a21$0$8 = a$0$8[6], a31$0$8 = a$0$8[7]);
	(a02$0$8 = a$0$8[8], a12$0$8 = a$0$8[9], a22$0$8 = a$0$8[10], a32$0$8 = a$0$8[11]);
	(a03$0$8 = a$0$8[12], a13$0$8 = a$0$8[13], a23$0$8 = a$0$8[14], a33$0$8 = a$0$8[15]);
	b$0$8 = this$15._;
	(b00$0$8 = b$0$8[0], b10$0$8 = b$0$8[1], b20$0$8 = b$0$8[2], b30$0$8 = b$0$8[3]);
	(b01$0$8 = b$0$8[4], b11$0$8 = b$0$8[5], b21$0$8 = b$0$8[6], b31$0$8 = b$0$8[7]);
	(b02$0$8 = b$0$8[8], b12$0$8 = b$0$8[9], b22$0$8 = b$0$8[10], b32$0$8 = b$0$8[11]);
	(b03$0$8 = b$0$8[12], b13$0$8 = b$0$8[13], b23$0$8 = b$0$8[14], b33$0$8 = b$0$8[15]);
	a$0$8[0] = a00$0$8 * b00$0$8 + a01$0$8 * b10$0$8 + a02$0$8 * b20$0$8 + a03$0$8 * b30$0$8;
	a$0$8[1] = a10$0$8 * b00$0$8 + a11$0$8 * b10$0$8 + a12$0$8 * b20$0$8 + a13$0$8 * b30$0$8;
	a$0$8[2] = a20$0$8 * b00$0$8 + a21$0$8 * b10$0$8 + a22$0$8 * b20$0$8 + a23$0$8 * b30$0$8;
	a$0$8[3] = a30$0$8 * b00$0$8 + a31$0$8 * b10$0$8 + a32$0$8 * b20$0$8 + a33$0$8 * b30$0$8;
	a$0$8[4] = a00$0$8 * b01$0$8 + a01$0$8 * b11$0$8 + a02$0$8 * b21$0$8 + a03$0$8 * b31$0$8;
	a$0$8[5] = a10$0$8 * b01$0$8 + a11$0$8 * b11$0$8 + a12$0$8 * b21$0$8 + a13$0$8 * b31$0$8;
	a$0$8[6] = a20$0$8 * b01$0$8 + a21$0$8 * b11$0$8 + a22$0$8 * b21$0$8 + a23$0$8 * b31$0$8;
	a$0$8[7] = a30$0$8 * b01$0$8 + a31$0$8 * b11$0$8 + a32$0$8 * b21$0$8 + a33$0$8 * b31$0$8;
	a$0$8[8] = a00$0$8 * b02$0$8 + a01$0$8 * b12$0$8 + a02$0$8 * b22$0$8 + a03$0$8 * b32$0$8;
	a$0$8[9] = a10$0$8 * b02$0$8 + a11$0$8 * b12$0$8 + a12$0$8 * b22$0$8 + a13$0$8 * b32$0$8;
	a$0$8[10] = a20$0$8 * b02$0$8 + a21$0$8 * b12$0$8 + a22$0$8 * b22$0$8 + a23$0$8 * b32$0$8;
	a$0$8[11] = a30$0$8 * b02$0$8 + a31$0$8 * b12$0$8 + a32$0$8 * b22$0$8 + a33$0$8 * b32$0$8;
	a$0$8[12] = a00$0$8 * b03$0$8 + a01$0$8 * b13$0$8 + a02$0$8 * b23$0$8 + a03$0$8 * b33$0$8;
	a$0$8[13] = a10$0$8 * b03$0$8 + a11$0$8 * b13$0$8 + a12$0$8 * b23$0$8 + a13$0$8 * b33$0$8;
	a$0$8[14] = a20$0$8 * b03$0$8 + a21$0$8 * b13$0$8 + a22$0$8 * b23$0$8 + a23$0$8 * b33$0$8;
	a$0$8[15] = a30$0$8 * b03$0$8 + a31$0$8 * b13$0$8 + a32$0$8 * b23$0$8 + a33$0$8 * b33$0$8;
	this$3 = this$9;
	m$3 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, s / 2, 0, 1, 1);
	a$0$3 = this$3._;
	(a00$0$3 = a$0$3[0], a10$0$3 = a$0$3[1], a20$0$3 = a$0$3[2], a30$0$3 = a$0$3[3]);
	(a01$0$3 = a$0$3[4], a11$0$3 = a$0$3[5], a21$0$3 = a$0$3[6], a31$0$3 = a$0$3[7]);
	(a02$0$3 = a$0$3[8], a12$0$3 = a$0$3[9], a22$0$3 = a$0$3[10], a32$0$3 = a$0$3[11]);
	(a03$0$3 = a$0$3[12], a13$0$3 = a$0$3[13], a23$0$3 = a$0$3[14], a33$0$3 = a$0$3[15]);
	b$0$3 = m$3._;
	(b00$0$3 = b$0$3[0], b10$0$3 = b$0$3[1], b20$0$3 = b$0$3[2], b30$0$3 = b$0$3[3]);
	(b01$0$3 = b$0$3[4], b11$0$3 = b$0$3[5], b21$0$3 = b$0$3[6], b31$0$3 = b$0$3[7]);
	(b02$0$3 = b$0$3[8], b12$0$3 = b$0$3[9], b22$0$3 = b$0$3[10], b32$0$3 = b$0$3[11]);
	(b03$0$3 = b$0$3[12], b13$0$3 = b$0$3[13], b23$0$3 = b$0$3[14], b33$0$3 = b$0$3[15]);
	a$0$3[0] = a00$0$3 * b00$0$3 + a01$0$3 * b10$0$3 + a02$0$3 * b20$0$3 + a03$0$3 * b30$0$3;
	a$0$3[1] = a10$0$3 * b00$0$3 + a11$0$3 * b10$0$3 + a12$0$3 * b20$0$3 + a13$0$3 * b30$0$3;
	a$0$3[2] = a20$0$3 * b00$0$3 + a21$0$3 * b10$0$3 + a22$0$3 * b20$0$3 + a23$0$3 * b30$0$3;
	a$0$3[3] = a30$0$3 * b00$0$3 + a31$0$3 * b10$0$3 + a32$0$3 * b20$0$3 + a33$0$3 * b30$0$3;
	a$0$3[4] = a00$0$3 * b01$0$3 + a01$0$3 * b11$0$3 + a02$0$3 * b21$0$3 + a03$0$3 * b31$0$3;
	a$0$3[5] = a10$0$3 * b01$0$3 + a11$0$3 * b11$0$3 + a12$0$3 * b21$0$3 + a13$0$3 * b31$0$3;
	a$0$3[6] = a20$0$3 * b01$0$3 + a21$0$3 * b11$0$3 + a22$0$3 * b21$0$3 + a23$0$3 * b31$0$3;
	a$0$3[7] = a30$0$3 * b01$0$3 + a31$0$3 * b11$0$3 + a32$0$3 * b21$0$3 + a33$0$3 * b31$0$3;
	a$0$3[8] = a00$0$3 * b02$0$3 + a01$0$3 * b12$0$3 + a02$0$3 * b22$0$3 + a03$0$3 * b32$0$3;
	a$0$3[9] = a10$0$3 * b02$0$3 + a11$0$3 * b12$0$3 + a12$0$3 * b22$0$3 + a13$0$3 * b32$0$3;
	a$0$3[10] = a20$0$3 * b02$0$3 + a21$0$3 * b12$0$3 + a22$0$3 * b22$0$3 + a23$0$3 * b32$0$3;
	a$0$3[11] = a30$0$3 * b02$0$3 + a31$0$3 * b12$0$3 + a32$0$3 * b22$0$3 + a33$0$3 * b32$0$3;
	a$0$3[12] = a00$0$3 * b03$0$3 + a01$0$3 * b13$0$3 + a02$0$3 * b23$0$3 + a03$0$3 * b33$0$3;
	a$0$3[13] = a10$0$3 * b03$0$3 + a11$0$3 * b13$0$3 + a12$0$3 * b23$0$3 + a13$0$3 * b33$0$3;
	a$0$3[14] = a20$0$3 * b03$0$3 + a21$0$3 * b13$0$3 + a22$0$3 * b23$0$3 + a23$0$3 * b33$0$3;
	a$0$3[15] = a30$0$3 * b03$0$3 + a31$0$3 * b13$0$3 + a32$0$3 * b23$0$3 + a33$0$3 * b33$0$3;
	gl.uniformMatrix4fv(modelMatLoc, false, this$3._);
	p$3 = Kingyo.bfin;
	gl$3 = Kingyo.gl;
	gl$3.bindBuffer(gl$3.ARRAY_BUFFER, p$3.vbuf);
	gl$3.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$3.FLOAT, false, 0, 0);
	gl$3.bindBuffer(gl$3.ARRAY_BUFFER, p$3.nbuf);
	gl$3.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$3.FLOAT, false, 0, 0);
	gl$3.bindBuffer(gl$3.ELEMENT_ARRAY_BUFFER, p$3.ibuf);
	gl$3.drawElements(gl$3.TRIANGLES, p$3.numi, gl$3.UNSIGNED_SHORT, 0);
	this$10 = new M44$LM44$(bodyMat);
	this$16 = {_: new Float32Array(16)};
	M44$setIdentity$LM44$(this$16);
	this$16._[12] = 0;
	this$16._[13] = 0;
	this$16._[14] = -0.7;
	a$0$9 = this$10._;
	(a00$0$9 = a$0$9[0], a10$0$9 = a$0$9[1], a20$0$9 = a$0$9[2], a30$0$9 = a$0$9[3]);
	(a01$0$9 = a$0$9[4], a11$0$9 = a$0$9[5], a21$0$9 = a$0$9[6], a31$0$9 = a$0$9[7]);
	(a02$0$9 = a$0$9[8], a12$0$9 = a$0$9[9], a22$0$9 = a$0$9[10], a32$0$9 = a$0$9[11]);
	(a03$0$9 = a$0$9[12], a13$0$9 = a$0$9[13], a23$0$9 = a$0$9[14], a33$0$9 = a$0$9[15]);
	b$0$9 = this$16._;
	(b00$0$9 = b$0$9[0], b10$0$9 = b$0$9[1], b20$0$9 = b$0$9[2], b30$0$9 = b$0$9[3]);
	(b01$0$9 = b$0$9[4], b11$0$9 = b$0$9[5], b21$0$9 = b$0$9[6], b31$0$9 = b$0$9[7]);
	(b02$0$9 = b$0$9[8], b12$0$9 = b$0$9[9], b22$0$9 = b$0$9[10], b32$0$9 = b$0$9[11]);
	(b03$0$9 = b$0$9[12], b13$0$9 = b$0$9[13], b23$0$9 = b$0$9[14], b33$0$9 = b$0$9[15]);
	a$0$9[0] = a00$0$9 * b00$0$9 + a01$0$9 * b10$0$9 + a02$0$9 * b20$0$9 + a03$0$9 * b30$0$9;
	a$0$9[1] = a10$0$9 * b00$0$9 + a11$0$9 * b10$0$9 + a12$0$9 * b20$0$9 + a13$0$9 * b30$0$9;
	a$0$9[2] = a20$0$9 * b00$0$9 + a21$0$9 * b10$0$9 + a22$0$9 * b20$0$9 + a23$0$9 * b30$0$9;
	a$0$9[3] = a30$0$9 * b00$0$9 + a31$0$9 * b10$0$9 + a32$0$9 * b20$0$9 + a33$0$9 * b30$0$9;
	a$0$9[4] = a00$0$9 * b01$0$9 + a01$0$9 * b11$0$9 + a02$0$9 * b21$0$9 + a03$0$9 * b31$0$9;
	a$0$9[5] = a10$0$9 * b01$0$9 + a11$0$9 * b11$0$9 + a12$0$9 * b21$0$9 + a13$0$9 * b31$0$9;
	a$0$9[6] = a20$0$9 * b01$0$9 + a21$0$9 * b11$0$9 + a22$0$9 * b21$0$9 + a23$0$9 * b31$0$9;
	a$0$9[7] = a30$0$9 * b01$0$9 + a31$0$9 * b11$0$9 + a32$0$9 * b21$0$9 + a33$0$9 * b31$0$9;
	a$0$9[8] = a00$0$9 * b02$0$9 + a01$0$9 * b12$0$9 + a02$0$9 * b22$0$9 + a03$0$9 * b32$0$9;
	a$0$9[9] = a10$0$9 * b02$0$9 + a11$0$9 * b12$0$9 + a12$0$9 * b22$0$9 + a13$0$9 * b32$0$9;
	a$0$9[10] = a20$0$9 * b02$0$9 + a21$0$9 * b12$0$9 + a22$0$9 * b22$0$9 + a23$0$9 * b32$0$9;
	a$0$9[11] = a30$0$9 * b02$0$9 + a31$0$9 * b12$0$9 + a32$0$9 * b22$0$9 + a33$0$9 * b32$0$9;
	a$0$9[12] = a00$0$9 * b03$0$9 + a01$0$9 * b13$0$9 + a02$0$9 * b23$0$9 + a03$0$9 * b33$0$9;
	a$0$9[13] = a10$0$9 * b03$0$9 + a11$0$9 * b13$0$9 + a12$0$9 * b23$0$9 + a13$0$9 * b33$0$9;
	a$0$9[14] = a20$0$9 * b03$0$9 + a21$0$9 * b13$0$9 + a22$0$9 * b23$0$9 + a23$0$9 * b33$0$9;
	a$0$9[15] = a30$0$9 * b03$0$9 + a31$0$9 * b13$0$9 + a32$0$9 * b23$0$9 + a33$0$9 * b33$0$9;
	this$4 = this$10;
	m$4 = M44$setRotate$LM44$NNNN({_: new Float32Array(16)}, s / 2, 0, 1, 0);
	a$0$4 = this$4._;
	(a00$0$4 = a$0$4[0], a10$0$4 = a$0$4[1], a20$0$4 = a$0$4[2], a30$0$4 = a$0$4[3]);
	(a01$0$4 = a$0$4[4], a11$0$4 = a$0$4[5], a21$0$4 = a$0$4[6], a31$0$4 = a$0$4[7]);
	(a02$0$4 = a$0$4[8], a12$0$4 = a$0$4[9], a22$0$4 = a$0$4[10], a32$0$4 = a$0$4[11]);
	(a03$0$4 = a$0$4[12], a13$0$4 = a$0$4[13], a23$0$4 = a$0$4[14], a33$0$4 = a$0$4[15]);
	b$0$4 = m$4._;
	(b00$0$4 = b$0$4[0], b10$0$4 = b$0$4[1], b20$0$4 = b$0$4[2], b30$0$4 = b$0$4[3]);
	(b01$0$4 = b$0$4[4], b11$0$4 = b$0$4[5], b21$0$4 = b$0$4[6], b31$0$4 = b$0$4[7]);
	(b02$0$4 = b$0$4[8], b12$0$4 = b$0$4[9], b22$0$4 = b$0$4[10], b32$0$4 = b$0$4[11]);
	(b03$0$4 = b$0$4[12], b13$0$4 = b$0$4[13], b23$0$4 = b$0$4[14], b33$0$4 = b$0$4[15]);
	a$0$4[0] = a00$0$4 * b00$0$4 + a01$0$4 * b10$0$4 + a02$0$4 * b20$0$4 + a03$0$4 * b30$0$4;
	a$0$4[1] = a10$0$4 * b00$0$4 + a11$0$4 * b10$0$4 + a12$0$4 * b20$0$4 + a13$0$4 * b30$0$4;
	a$0$4[2] = a20$0$4 * b00$0$4 + a21$0$4 * b10$0$4 + a22$0$4 * b20$0$4 + a23$0$4 * b30$0$4;
	a$0$4[3] = a30$0$4 * b00$0$4 + a31$0$4 * b10$0$4 + a32$0$4 * b20$0$4 + a33$0$4 * b30$0$4;
	a$0$4[4] = a00$0$4 * b01$0$4 + a01$0$4 * b11$0$4 + a02$0$4 * b21$0$4 + a03$0$4 * b31$0$4;
	a$0$4[5] = a10$0$4 * b01$0$4 + a11$0$4 * b11$0$4 + a12$0$4 * b21$0$4 + a13$0$4 * b31$0$4;
	a$0$4[6] = a20$0$4 * b01$0$4 + a21$0$4 * b11$0$4 + a22$0$4 * b21$0$4 + a23$0$4 * b31$0$4;
	a$0$4[7] = a30$0$4 * b01$0$4 + a31$0$4 * b11$0$4 + a32$0$4 * b21$0$4 + a33$0$4 * b31$0$4;
	a$0$4[8] = a00$0$4 * b02$0$4 + a01$0$4 * b12$0$4 + a02$0$4 * b22$0$4 + a03$0$4 * b32$0$4;
	a$0$4[9] = a10$0$4 * b02$0$4 + a11$0$4 * b12$0$4 + a12$0$4 * b22$0$4 + a13$0$4 * b32$0$4;
	a$0$4[10] = a20$0$4 * b02$0$4 + a21$0$4 * b12$0$4 + a22$0$4 * b22$0$4 + a23$0$4 * b32$0$4;
	a$0$4[11] = a30$0$4 * b02$0$4 + a31$0$4 * b12$0$4 + a32$0$4 * b22$0$4 + a33$0$4 * b32$0$4;
	a$0$4[12] = a00$0$4 * b03$0$4 + a01$0$4 * b13$0$4 + a02$0$4 * b23$0$4 + a03$0$4 * b33$0$4;
	a$0$4[13] = a10$0$4 * b03$0$4 + a11$0$4 * b13$0$4 + a12$0$4 * b23$0$4 + a13$0$4 * b33$0$4;
	a$0$4[14] = a20$0$4 * b03$0$4 + a21$0$4 * b13$0$4 + a22$0$4 * b23$0$4 + a23$0$4 * b33$0$4;
	a$0$4[15] = a30$0$4 * b03$0$4 + a31$0$4 * b13$0$4 + a32$0$4 * b23$0$4 + a33$0$4 * b33$0$4;
	gl.uniformMatrix4fv(modelMatLoc, false, this$4._);
	p$4 = Kingyo.tfin;
	gl$4 = Kingyo.gl;
	gl$4.bindBuffer(gl$4.ARRAY_BUFFER, p$4.vbuf);
	gl$4.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl$4.FLOAT, false, 0, 0);
	gl$4.bindBuffer(gl$4.ARRAY_BUFFER, p$4.nbuf);
	gl$4.vertexAttribPointer(Kingyo.alocs.normal, 3, gl$4.FLOAT, false, 0, 0);
	gl$4.bindBuffer(gl$4.ELEMENT_ARRAY_BUFFER, p$4.ibuf);
	gl$4.drawElements(gl$4.TRIANGLES, p$4.numi, gl$4.UNSIGNED_SHORT, 0);
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
	var this$0;
	/** @type {M44} */
	var m$0;
	/** @type {Float32Array} */
	var a$0$0;
	/** @type {undefined|!number} */
	var a00$0$0;
	/** @type {undefined|!number} */
	var a10$0$0;
	/** @type {undefined|!number} */
	var a20$0$0;
	/** @type {undefined|!number} */
	var a30$0$0;
	/** @type {undefined|!number} */
	var a01$0$0;
	/** @type {undefined|!number} */
	var a11$0$0;
	/** @type {undefined|!number} */
	var a21$0$0;
	/** @type {undefined|!number} */
	var a31$0$0;
	/** @type {undefined|!number} */
	var a02$0$0;
	/** @type {undefined|!number} */
	var a12$0$0;
	/** @type {undefined|!number} */
	var a22$0$0;
	/** @type {undefined|!number} */
	var a32$0$0;
	/** @type {undefined|!number} */
	var a03$0$0;
	/** @type {undefined|!number} */
	var a13$0$0;
	/** @type {undefined|!number} */
	var a23$0$0;
	/** @type {undefined|!number} */
	var a33$0$0;
	/** @type {Float32Array} */
	var b$0$0;
	/** @type {undefined|!number} */
	var b00$0$0;
	/** @type {undefined|!number} */
	var b10$0$0;
	/** @type {undefined|!number} */
	var b20$0$0;
	/** @type {undefined|!number} */
	var b30$0$0;
	/** @type {undefined|!number} */
	var b01$0$0;
	/** @type {undefined|!number} */
	var b11$0$0;
	/** @type {undefined|!number} */
	var b21$0$0;
	/** @type {undefined|!number} */
	var b31$0$0;
	/** @type {undefined|!number} */
	var b02$0$0;
	/** @type {undefined|!number} */
	var b12$0$0;
	/** @type {undefined|!number} */
	var b22$0$0;
	/** @type {undefined|!number} */
	var b32$0$0;
	/** @type {undefined|!number} */
	var b03$0$0;
	/** @type {undefined|!number} */
	var b13$0$0;
	/** @type {undefined|!number} */
	var b23$0$0;
	/** @type {undefined|!number} */
	var b33$0$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {Float32Array} */
	var a$0$1;
	/** @type {undefined|!number} */
	var a00$0$1;
	/** @type {undefined|!number} */
	var a10$0$1;
	/** @type {undefined|!number} */
	var a20$0$1;
	/** @type {undefined|!number} */
	var a30$0$1;
	/** @type {undefined|!number} */
	var a01$0$1;
	/** @type {undefined|!number} */
	var a11$0$1;
	/** @type {undefined|!number} */
	var a21$0$1;
	/** @type {undefined|!number} */
	var a31$0$1;
	/** @type {undefined|!number} */
	var a02$0$1;
	/** @type {undefined|!number} */
	var a12$0$1;
	/** @type {undefined|!number} */
	var a22$0$1;
	/** @type {undefined|!number} */
	var a32$0$1;
	/** @type {undefined|!number} */
	var a03$0$1;
	/** @type {undefined|!number} */
	var a13$0$1;
	/** @type {undefined|!number} */
	var a23$0$1;
	/** @type {undefined|!number} */
	var a33$0$1;
	/** @type {Float32Array} */
	var b$0$1;
	/** @type {undefined|!number} */
	var b00$0$1;
	/** @type {undefined|!number} */
	var b10$0$1;
	/** @type {undefined|!number} */
	var b20$0$1;
	/** @type {undefined|!number} */
	var b30$0$1;
	/** @type {undefined|!number} */
	var b01$0$1;
	/** @type {undefined|!number} */
	var b11$0$1;
	/** @type {undefined|!number} */
	var b21$0$1;
	/** @type {undefined|!number} */
	var b31$0$1;
	/** @type {undefined|!number} */
	var b02$0$1;
	/** @type {undefined|!number} */
	var b12$0$1;
	/** @type {undefined|!number} */
	var b22$0$1;
	/** @type {undefined|!number} */
	var b32$0$1;
	/** @type {undefined|!number} */
	var b03$0$1;
	/** @type {undefined|!number} */
	var b13$0$1;
	/** @type {undefined|!number} */
	var b23$0$1;
	/** @type {undefined|!number} */
	var b33$0$1;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var m$2;
	/** @type {Float32Array} */
	var a$0$2;
	/** @type {undefined|!number} */
	var a00$0$2;
	/** @type {undefined|!number} */
	var a10$0$2;
	/** @type {undefined|!number} */
	var a20$0$2;
	/** @type {undefined|!number} */
	var a30$0$2;
	/** @type {undefined|!number} */
	var a01$0$2;
	/** @type {undefined|!number} */
	var a11$0$2;
	/** @type {undefined|!number} */
	var a21$0$2;
	/** @type {undefined|!number} */
	var a31$0$2;
	/** @type {undefined|!number} */
	var a02$0$2;
	/** @type {undefined|!number} */
	var a12$0$2;
	/** @type {undefined|!number} */
	var a22$0$2;
	/** @type {undefined|!number} */
	var a32$0$2;
	/** @type {undefined|!number} */
	var a03$0$2;
	/** @type {undefined|!number} */
	var a13$0$2;
	/** @type {undefined|!number} */
	var a23$0$2;
	/** @type {undefined|!number} */
	var a33$0$2;
	/** @type {Float32Array} */
	var b$0$2;
	/** @type {undefined|!number} */
	var b00$0$2;
	/** @type {undefined|!number} */
	var b10$0$2;
	/** @type {undefined|!number} */
	var b20$0$2;
	/** @type {undefined|!number} */
	var b30$0$2;
	/** @type {undefined|!number} */
	var b01$0$2;
	/** @type {undefined|!number} */
	var b11$0$2;
	/** @type {undefined|!number} */
	var b21$0$2;
	/** @type {undefined|!number} */
	var b31$0$2;
	/** @type {undefined|!number} */
	var b02$0$2;
	/** @type {undefined|!number} */
	var b12$0$2;
	/** @type {undefined|!number} */
	var b22$0$2;
	/** @type {undefined|!number} */
	var b32$0$2;
	/** @type {undefined|!number} */
	var b03$0$2;
	/** @type {undefined|!number} */
	var b13$0$2;
	/** @type {undefined|!number} */
	var b23$0$2;
	/** @type {undefined|!number} */
	var b33$0$2;
	/** @type {M44} */
	var this$4;
	/** @type {M44} */
	var m$3;
	/** @type {Float32Array} */
	var a$0$3;
	/** @type {undefined|!number} */
	var a00$0$3;
	/** @type {undefined|!number} */
	var a10$0$3;
	/** @type {undefined|!number} */
	var a20$0$3;
	/** @type {undefined|!number} */
	var a30$0$3;
	/** @type {undefined|!number} */
	var a01$0$3;
	/** @type {undefined|!number} */
	var a11$0$3;
	/** @type {undefined|!number} */
	var a21$0$3;
	/** @type {undefined|!number} */
	var a31$0$3;
	/** @type {undefined|!number} */
	var a02$0$3;
	/** @type {undefined|!number} */
	var a12$0$3;
	/** @type {undefined|!number} */
	var a22$0$3;
	/** @type {undefined|!number} */
	var a32$0$3;
	/** @type {undefined|!number} */
	var a03$0$3;
	/** @type {undefined|!number} */
	var a13$0$3;
	/** @type {undefined|!number} */
	var a23$0$3;
	/** @type {undefined|!number} */
	var a33$0$3;
	/** @type {Float32Array} */
	var b$0$3;
	/** @type {undefined|!number} */
	var b00$0$3;
	/** @type {undefined|!number} */
	var b10$0$3;
	/** @type {undefined|!number} */
	var b20$0$3;
	/** @type {undefined|!number} */
	var b30$0$3;
	/** @type {undefined|!number} */
	var b01$0$3;
	/** @type {undefined|!number} */
	var b11$0$3;
	/** @type {undefined|!number} */
	var b21$0$3;
	/** @type {undefined|!number} */
	var b31$0$3;
	/** @type {undefined|!number} */
	var b02$0$3;
	/** @type {undefined|!number} */
	var b12$0$3;
	/** @type {undefined|!number} */
	var b22$0$3;
	/** @type {undefined|!number} */
	var b32$0$3;
	/** @type {undefined|!number} */
	var b03$0$3;
	/** @type {undefined|!number} */
	var b13$0$3;
	/** @type {undefined|!number} */
	var b23$0$3;
	/** @type {undefined|!number} */
	var b33$0$3;
	/** @type {M44} */
	var this$6;
	/** @type {!number} */
	var rad$0;
	/** @type {M44} */
	var this$7;
	/** @type {V3} */
	var v$0;
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {!number} */
	var z$0$0;
	/** @type {Float32Array} */
	var _$0;
	gl = Kingyo.gl;
	ulocs = Kingyo.eyeULocs;
	gl.uniform3fv(ulocs.color, this._color);
	s = Math.sin(this._anim * 5);
	this$7 = {_: new Float32Array(16)};
	v$0 = this._pos;
	x$0$0 = (_$0 = v$0._)[0];
	y$0$0 = _$0[1];
	z$0$0 = _$0[2];
	M44$setIdentity$LM44$(this$7);
	this$7._[12] = x$0$0;
	this$7._[13] = y$0$0;
	this$7._[14] = z$0$0;
	m$3 = this._spinMat;
	a$0$3 = this$7._;
	(a00$0$3 = a$0$3[0], a10$0$3 = a$0$3[1], a20$0$3 = a$0$3[2], a30$0$3 = a$0$3[3]);
	(a01$0$3 = a$0$3[4], a11$0$3 = a$0$3[5], a21$0$3 = a$0$3[6], a31$0$3 = a$0$3[7]);
	(a02$0$3 = a$0$3[8], a12$0$3 = a$0$3[9], a22$0$3 = a$0$3[10], a32$0$3 = a$0$3[11]);
	(a03$0$3 = a$0$3[12], a13$0$3 = a$0$3[13], a23$0$3 = a$0$3[14], a33$0$3 = a$0$3[15]);
	b$0$3 = m$3._;
	(b00$0$3 = b$0$3[0], b10$0$3 = b$0$3[1], b20$0$3 = b$0$3[2], b30$0$3 = b$0$3[3]);
	(b01$0$3 = b$0$3[4], b11$0$3 = b$0$3[5], b21$0$3 = b$0$3[6], b31$0$3 = b$0$3[7]);
	(b02$0$3 = b$0$3[8], b12$0$3 = b$0$3[9], b22$0$3 = b$0$3[10], b32$0$3 = b$0$3[11]);
	(b03$0$3 = b$0$3[12], b13$0$3 = b$0$3[13], b23$0$3 = b$0$3[14], b33$0$3 = b$0$3[15]);
	a$0$3[0] = a00$0$3 * b00$0$3 + a01$0$3 * b10$0$3 + a02$0$3 * b20$0$3 + a03$0$3 * b30$0$3;
	a$0$3[1] = a10$0$3 * b00$0$3 + a11$0$3 * b10$0$3 + a12$0$3 * b20$0$3 + a13$0$3 * b30$0$3;
	a$0$3[2] = a20$0$3 * b00$0$3 + a21$0$3 * b10$0$3 + a22$0$3 * b20$0$3 + a23$0$3 * b30$0$3;
	a$0$3[3] = a30$0$3 * b00$0$3 + a31$0$3 * b10$0$3 + a32$0$3 * b20$0$3 + a33$0$3 * b30$0$3;
	a$0$3[4] = a00$0$3 * b01$0$3 + a01$0$3 * b11$0$3 + a02$0$3 * b21$0$3 + a03$0$3 * b31$0$3;
	a$0$3[5] = a10$0$3 * b01$0$3 + a11$0$3 * b11$0$3 + a12$0$3 * b21$0$3 + a13$0$3 * b31$0$3;
	a$0$3[6] = a20$0$3 * b01$0$3 + a21$0$3 * b11$0$3 + a22$0$3 * b21$0$3 + a23$0$3 * b31$0$3;
	a$0$3[7] = a30$0$3 * b01$0$3 + a31$0$3 * b11$0$3 + a32$0$3 * b21$0$3 + a33$0$3 * b31$0$3;
	a$0$3[8] = a00$0$3 * b02$0$3 + a01$0$3 * b12$0$3 + a02$0$3 * b22$0$3 + a03$0$3 * b32$0$3;
	a$0$3[9] = a10$0$3 * b02$0$3 + a11$0$3 * b12$0$3 + a12$0$3 * b22$0$3 + a13$0$3 * b32$0$3;
	a$0$3[10] = a20$0$3 * b02$0$3 + a21$0$3 * b12$0$3 + a22$0$3 * b22$0$3 + a23$0$3 * b32$0$3;
	a$0$3[11] = a30$0$3 * b02$0$3 + a31$0$3 * b12$0$3 + a32$0$3 * b22$0$3 + a33$0$3 * b32$0$3;
	a$0$3[12] = a00$0$3 * b03$0$3 + a01$0$3 * b13$0$3 + a02$0$3 * b23$0$3 + a03$0$3 * b33$0$3;
	a$0$3[13] = a10$0$3 * b03$0$3 + a11$0$3 * b13$0$3 + a12$0$3 * b23$0$3 + a13$0$3 * b33$0$3;
	a$0$3[14] = a20$0$3 * b03$0$3 + a21$0$3 * b13$0$3 + a22$0$3 * b23$0$3 + a23$0$3 * b33$0$3;
	a$0$3[15] = a30$0$3 * b03$0$3 + a31$0$3 * b13$0$3 + a32$0$3 * b23$0$3 + a33$0$3 * b33$0$3;
	this$3 = this$7;
	this$6 = {_: new Float32Array(16)};
	rad$0 = this._vangle - s / 10;
	m$2 = M44$setRotate$LM44$NNNN(this$6, rad$0, 0, 0, 1);
	a$0$2 = this$3._;
	(a00$0$2 = a$0$2[0], a10$0$2 = a$0$2[1], a20$0$2 = a$0$2[2], a30$0$2 = a$0$2[3]);
	(a01$0$2 = a$0$2[4], a11$0$2 = a$0$2[5], a21$0$2 = a$0$2[6], a31$0$2 = a$0$2[7]);
	(a02$0$2 = a$0$2[8], a12$0$2 = a$0$2[9], a22$0$2 = a$0$2[10], a32$0$2 = a$0$2[11]);
	(a03$0$2 = a$0$2[12], a13$0$2 = a$0$2[13], a23$0$2 = a$0$2[14], a33$0$2 = a$0$2[15]);
	b$0$2 = m$2._;
	(b00$0$2 = b$0$2[0], b10$0$2 = b$0$2[1], b20$0$2 = b$0$2[2], b30$0$2 = b$0$2[3]);
	(b01$0$2 = b$0$2[4], b11$0$2 = b$0$2[5], b21$0$2 = b$0$2[6], b31$0$2 = b$0$2[7]);
	(b02$0$2 = b$0$2[8], b12$0$2 = b$0$2[9], b22$0$2 = b$0$2[10], b32$0$2 = b$0$2[11]);
	(b03$0$2 = b$0$2[12], b13$0$2 = b$0$2[13], b23$0$2 = b$0$2[14], b33$0$2 = b$0$2[15]);
	a$0$2[0] = a00$0$2 * b00$0$2 + a01$0$2 * b10$0$2 + a02$0$2 * b20$0$2 + a03$0$2 * b30$0$2;
	a$0$2[1] = a10$0$2 * b00$0$2 + a11$0$2 * b10$0$2 + a12$0$2 * b20$0$2 + a13$0$2 * b30$0$2;
	a$0$2[2] = a20$0$2 * b00$0$2 + a21$0$2 * b10$0$2 + a22$0$2 * b20$0$2 + a23$0$2 * b30$0$2;
	a$0$2[3] = a30$0$2 * b00$0$2 + a31$0$2 * b10$0$2 + a32$0$2 * b20$0$2 + a33$0$2 * b30$0$2;
	a$0$2[4] = a00$0$2 * b01$0$2 + a01$0$2 * b11$0$2 + a02$0$2 * b21$0$2 + a03$0$2 * b31$0$2;
	a$0$2[5] = a10$0$2 * b01$0$2 + a11$0$2 * b11$0$2 + a12$0$2 * b21$0$2 + a13$0$2 * b31$0$2;
	a$0$2[6] = a20$0$2 * b01$0$2 + a21$0$2 * b11$0$2 + a22$0$2 * b21$0$2 + a23$0$2 * b31$0$2;
	a$0$2[7] = a30$0$2 * b01$0$2 + a31$0$2 * b11$0$2 + a32$0$2 * b21$0$2 + a33$0$2 * b31$0$2;
	a$0$2[8] = a00$0$2 * b02$0$2 + a01$0$2 * b12$0$2 + a02$0$2 * b22$0$2 + a03$0$2 * b32$0$2;
	a$0$2[9] = a10$0$2 * b02$0$2 + a11$0$2 * b12$0$2 + a12$0$2 * b22$0$2 + a13$0$2 * b32$0$2;
	a$0$2[10] = a20$0$2 * b02$0$2 + a21$0$2 * b12$0$2 + a22$0$2 * b22$0$2 + a23$0$2 * b32$0$2;
	a$0$2[11] = a30$0$2 * b02$0$2 + a31$0$2 * b12$0$2 + a32$0$2 * b22$0$2 + a33$0$2 * b32$0$2;
	a$0$2[12] = a00$0$2 * b03$0$2 + a01$0$2 * b13$0$2 + a02$0$2 * b23$0$2 + a03$0$2 * b33$0$2;
	a$0$2[13] = a10$0$2 * b03$0$2 + a11$0$2 * b13$0$2 + a12$0$2 * b23$0$2 + a13$0$2 * b33$0$2;
	a$0$2[14] = a20$0$2 * b03$0$2 + a21$0$2 * b13$0$2 + a22$0$2 * b23$0$2 + a23$0$2 * b33$0$2;
	a$0$2[15] = a30$0$2 * b03$0$2 + a31$0$2 * b13$0$2 + a32$0$2 * b23$0$2 + a33$0$2 * b33$0$2;
	this$1 = this$3;
	this$4 = {_: new Float32Array(16)};
	m$1 = M44$setRotate$LM44$NNNN(this$4, 1.5707963267948966, 1, 0, 0);
	a$0$1 = this$1._;
	(a00$0$1 = a$0$1[0], a10$0$1 = a$0$1[1], a20$0$1 = a$0$1[2], a30$0$1 = a$0$1[3]);
	(a01$0$1 = a$0$1[4], a11$0$1 = a$0$1[5], a21$0$1 = a$0$1[6], a31$0$1 = a$0$1[7]);
	(a02$0$1 = a$0$1[8], a12$0$1 = a$0$1[9], a22$0$1 = a$0$1[10], a32$0$1 = a$0$1[11]);
	(a03$0$1 = a$0$1[12], a13$0$1 = a$0$1[13], a23$0$1 = a$0$1[14], a33$0$1 = a$0$1[15]);
	b$0$1 = m$1._;
	(b00$0$1 = b$0$1[0], b10$0$1 = b$0$1[1], b20$0$1 = b$0$1[2], b30$0$1 = b$0$1[3]);
	(b01$0$1 = b$0$1[4], b11$0$1 = b$0$1[5], b21$0$1 = b$0$1[6], b31$0$1 = b$0$1[7]);
	(b02$0$1 = b$0$1[8], b12$0$1 = b$0$1[9], b22$0$1 = b$0$1[10], b32$0$1 = b$0$1[11]);
	(b03$0$1 = b$0$1[12], b13$0$1 = b$0$1[13], b23$0$1 = b$0$1[14], b33$0$1 = b$0$1[15]);
	a$0$1[0] = a00$0$1 * b00$0$1 + a01$0$1 * b10$0$1 + a02$0$1 * b20$0$1 + a03$0$1 * b30$0$1;
	a$0$1[1] = a10$0$1 * b00$0$1 + a11$0$1 * b10$0$1 + a12$0$1 * b20$0$1 + a13$0$1 * b30$0$1;
	a$0$1[2] = a20$0$1 * b00$0$1 + a21$0$1 * b10$0$1 + a22$0$1 * b20$0$1 + a23$0$1 * b30$0$1;
	a$0$1[3] = a30$0$1 * b00$0$1 + a31$0$1 * b10$0$1 + a32$0$1 * b20$0$1 + a33$0$1 * b30$0$1;
	a$0$1[4] = a00$0$1 * b01$0$1 + a01$0$1 * b11$0$1 + a02$0$1 * b21$0$1 + a03$0$1 * b31$0$1;
	a$0$1[5] = a10$0$1 * b01$0$1 + a11$0$1 * b11$0$1 + a12$0$1 * b21$0$1 + a13$0$1 * b31$0$1;
	a$0$1[6] = a20$0$1 * b01$0$1 + a21$0$1 * b11$0$1 + a22$0$1 * b21$0$1 + a23$0$1 * b31$0$1;
	a$0$1[7] = a30$0$1 * b01$0$1 + a31$0$1 * b11$0$1 + a32$0$1 * b21$0$1 + a33$0$1 * b31$0$1;
	a$0$1[8] = a00$0$1 * b02$0$1 + a01$0$1 * b12$0$1 + a02$0$1 * b22$0$1 + a03$0$1 * b32$0$1;
	a$0$1[9] = a10$0$1 * b02$0$1 + a11$0$1 * b12$0$1 + a12$0$1 * b22$0$1 + a13$0$1 * b32$0$1;
	a$0$1[10] = a20$0$1 * b02$0$1 + a21$0$1 * b12$0$1 + a22$0$1 * b22$0$1 + a23$0$1 * b32$0$1;
	a$0$1[11] = a30$0$1 * b02$0$1 + a31$0$1 * b12$0$1 + a32$0$1 * b22$0$1 + a33$0$1 * b32$0$1;
	a$0$1[12] = a00$0$1 * b03$0$1 + a01$0$1 * b13$0$1 + a02$0$1 * b23$0$1 + a03$0$1 * b33$0$1;
	a$0$1[13] = a10$0$1 * b03$0$1 + a11$0$1 * b13$0$1 + a12$0$1 * b23$0$1 + a13$0$1 * b33$0$1;
	a$0$1[14] = a20$0$1 * b03$0$1 + a21$0$1 * b13$0$1 + a22$0$1 * b23$0$1 + a23$0$1 * b33$0$1;
	a$0$1[15] = a30$0$1 * b03$0$1 + a31$0$1 * b13$0$1 + a32$0$1 * b23$0$1 + a33$0$1 * b33$0$1;
	this$0 = this$1;
	this$2 = {_: new Float32Array(16)};
	m$0 = M44$setRotate$LM44$NNNN(this$2, 1.5707963267948966, 0, 1, 0);
	a$0$0 = this$0._;
	(a00$0$0 = a$0$0[0], a10$0$0 = a$0$0[1], a20$0$0 = a$0$0[2], a30$0$0 = a$0$0[3]);
	(a01$0$0 = a$0$0[4], a11$0$0 = a$0$0[5], a21$0$0 = a$0$0[6], a31$0$0 = a$0$0[7]);
	(a02$0$0 = a$0$0[8], a12$0$0 = a$0$0[9], a22$0$0 = a$0$0[10], a32$0$0 = a$0$0[11]);
	(a03$0$0 = a$0$0[12], a13$0$0 = a$0$0[13], a23$0$0 = a$0$0[14], a33$0$0 = a$0$0[15]);
	b$0$0 = m$0._;
	(b00$0$0 = b$0$0[0], b10$0$0 = b$0$0[1], b20$0$0 = b$0$0[2], b30$0$0 = b$0$0[3]);
	(b01$0$0 = b$0$0[4], b11$0$0 = b$0$0[5], b21$0$0 = b$0$0[6], b31$0$0 = b$0$0[7]);
	(b02$0$0 = b$0$0[8], b12$0$0 = b$0$0[9], b22$0$0 = b$0$0[10], b32$0$0 = b$0$0[11]);
	(b03$0$0 = b$0$0[12], b13$0$0 = b$0$0[13], b23$0$0 = b$0$0[14], b33$0$0 = b$0$0[15]);
	a$0$0[0] = a00$0$0 * b00$0$0 + a01$0$0 * b10$0$0 + a02$0$0 * b20$0$0 + a03$0$0 * b30$0$0;
	a$0$0[1] = a10$0$0 * b00$0$0 + a11$0$0 * b10$0$0 + a12$0$0 * b20$0$0 + a13$0$0 * b30$0$0;
	a$0$0[2] = a20$0$0 * b00$0$0 + a21$0$0 * b10$0$0 + a22$0$0 * b20$0$0 + a23$0$0 * b30$0$0;
	a$0$0[3] = a30$0$0 * b00$0$0 + a31$0$0 * b10$0$0 + a32$0$0 * b20$0$0 + a33$0$0 * b30$0$0;
	a$0$0[4] = a00$0$0 * b01$0$0 + a01$0$0 * b11$0$0 + a02$0$0 * b21$0$0 + a03$0$0 * b31$0$0;
	a$0$0[5] = a10$0$0 * b01$0$0 + a11$0$0 * b11$0$0 + a12$0$0 * b21$0$0 + a13$0$0 * b31$0$0;
	a$0$0[6] = a20$0$0 * b01$0$0 + a21$0$0 * b11$0$0 + a22$0$0 * b21$0$0 + a23$0$0 * b31$0$0;
	a$0$0[7] = a30$0$0 * b01$0$0 + a31$0$0 * b11$0$0 + a32$0$0 * b21$0$0 + a33$0$0 * b31$0$0;
	a$0$0[8] = a00$0$0 * b02$0$0 + a01$0$0 * b12$0$0 + a02$0$0 * b22$0$0 + a03$0$0 * b32$0$0;
	a$0$0[9] = a10$0$0 * b02$0$0 + a11$0$0 * b12$0$0 + a12$0$0 * b22$0$0 + a13$0$0 * b32$0$0;
	a$0$0[10] = a20$0$0 * b02$0$0 + a21$0$0 * b12$0$0 + a22$0$0 * b22$0$0 + a23$0$0 * b32$0$0;
	a$0$0[11] = a30$0$0 * b02$0$0 + a31$0$0 * b12$0$0 + a32$0$0 * b22$0$0 + a33$0$0 * b32$0$0;
	a$0$0[12] = a00$0$0 * b03$0$0 + a01$0$0 * b13$0$0 + a02$0$0 * b23$0$0 + a03$0$0 * b33$0$0;
	a$0$0[13] = a10$0$0 * b03$0$0 + a11$0$0 * b13$0$0 + a12$0$0 * b23$0$0 + a13$0$0 * b33$0$0;
	a$0$0[14] = a20$0$0 * b03$0$0 + a21$0$0 * b13$0$0 + a22$0$0 * b23$0$0 + a23$0$0 * b33$0$0;
	a$0$0[15] = a30$0$0 * b03$0$0 + a31$0$0 * b13$0$0 + a32$0$0 * b23$0$0 + a33$0$0 * b33$0$0;
	gl.uniformMatrix4fv(ulocs.modelMatrix, false, this$0._);
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
	/** @type {Float32Array} */
	var a$0$0;
	/** @type {undefined|!number} */
	var a00$0$0;
	/** @type {undefined|!number} */
	var a10$0$0;
	/** @type {undefined|!number} */
	var a20$0$0;
	/** @type {undefined|!number} */
	var a30$0$0;
	/** @type {undefined|!number} */
	var a01$0$0;
	/** @type {undefined|!number} */
	var a11$0$0;
	/** @type {undefined|!number} */
	var a21$0$0;
	/** @type {undefined|!number} */
	var a31$0$0;
	/** @type {undefined|!number} */
	var a02$0$0;
	/** @type {undefined|!number} */
	var a12$0$0;
	/** @type {undefined|!number} */
	var a22$0$0;
	/** @type {undefined|!number} */
	var a32$0$0;
	/** @type {undefined|!number} */
	var a03$0$0;
	/** @type {undefined|!number} */
	var a13$0$0;
	/** @type {undefined|!number} */
	var a23$0$0;
	/** @type {undefined|!number} */
	var a33$0$0;
	/** @type {Float32Array} */
	var b$0$0;
	/** @type {undefined|!number} */
	var b00$0$0;
	/** @type {undefined|!number} */
	var b10$0$0;
	/** @type {undefined|!number} */
	var b20$0$0;
	/** @type {undefined|!number} */
	var b30$0$0;
	/** @type {undefined|!number} */
	var b01$0$0;
	/** @type {undefined|!number} */
	var b11$0$0;
	/** @type {undefined|!number} */
	var b21$0$0;
	/** @type {undefined|!number} */
	var b31$0$0;
	/** @type {undefined|!number} */
	var b02$0$0;
	/** @type {undefined|!number} */
	var b12$0$0;
	/** @type {undefined|!number} */
	var b22$0$0;
	/** @type {undefined|!number} */
	var b32$0$0;
	/** @type {undefined|!number} */
	var b03$0$0;
	/** @type {undefined|!number} */
	var b13$0$0;
	/** @type {undefined|!number} */
	var b23$0$0;
	/** @type {undefined|!number} */
	var b33$0$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {Float32Array} */
	var a$0$1;
	/** @type {undefined|!number} */
	var a00$0$1;
	/** @type {undefined|!number} */
	var a10$0$1;
	/** @type {undefined|!number} */
	var a20$0$1;
	/** @type {undefined|!number} */
	var a30$0$1;
	/** @type {undefined|!number} */
	var a01$0$1;
	/** @type {undefined|!number} */
	var a11$0$1;
	/** @type {undefined|!number} */
	var a21$0$1;
	/** @type {undefined|!number} */
	var a31$0$1;
	/** @type {undefined|!number} */
	var a02$0$1;
	/** @type {undefined|!number} */
	var a12$0$1;
	/** @type {undefined|!number} */
	var a22$0$1;
	/** @type {undefined|!number} */
	var a32$0$1;
	/** @type {undefined|!number} */
	var a03$0$1;
	/** @type {undefined|!number} */
	var a13$0$1;
	/** @type {undefined|!number} */
	var a23$0$1;
	/** @type {undefined|!number} */
	var a33$0$1;
	/** @type {Float32Array} */
	var b$0$1;
	/** @type {undefined|!number} */
	var b00$0$1;
	/** @type {undefined|!number} */
	var b10$0$1;
	/** @type {undefined|!number} */
	var b20$0$1;
	/** @type {undefined|!number} */
	var b30$0$1;
	/** @type {undefined|!number} */
	var b01$0$1;
	/** @type {undefined|!number} */
	var b11$0$1;
	/** @type {undefined|!number} */
	var b21$0$1;
	/** @type {undefined|!number} */
	var b31$0$1;
	/** @type {undefined|!number} */
	var b02$0$1;
	/** @type {undefined|!number} */
	var b12$0$1;
	/** @type {undefined|!number} */
	var b22$0$1;
	/** @type {undefined|!number} */
	var b32$0$1;
	/** @type {undefined|!number} */
	var b03$0$1;
	/** @type {undefined|!number} */
	var b13$0$1;
	/** @type {undefined|!number} */
	var b23$0$1;
	/** @type {undefined|!number} */
	var b33$0$1;
	/** @type {M44} */
	var this$2;
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {Float32Array} */
	var a$0$2;
	/** @type {undefined|!number} */
	var a00$0$2;
	/** @type {undefined|!number} */
	var a10$0$2;
	/** @type {undefined|!number} */
	var a20$0$2;
	/** @type {undefined|!number} */
	var a30$0$2;
	/** @type {undefined|!number} */
	var a01$0$2;
	/** @type {undefined|!number} */
	var a11$0$2;
	/** @type {undefined|!number} */
	var a21$0$2;
	/** @type {undefined|!number} */
	var a31$0$2;
	/** @type {undefined|!number} */
	var a02$0$2;
	/** @type {undefined|!number} */
	var a12$0$2;
	/** @type {undefined|!number} */
	var a22$0$2;
	/** @type {undefined|!number} */
	var a32$0$2;
	/** @type {undefined|!number} */
	var a03$0$2;
	/** @type {undefined|!number} */
	var a13$0$2;
	/** @type {undefined|!number} */
	var a23$0$2;
	/** @type {undefined|!number} */
	var a33$0$2;
	/** @type {Float32Array} */
	var b$0$2;
	/** @type {undefined|!number} */
	var b00$0$2;
	/** @type {undefined|!number} */
	var b10$0$2;
	/** @type {undefined|!number} */
	var b20$0$2;
	/** @type {undefined|!number} */
	var b30$0$2;
	/** @type {undefined|!number} */
	var b01$0$2;
	/** @type {undefined|!number} */
	var b11$0$2;
	/** @type {undefined|!number} */
	var b21$0$2;
	/** @type {undefined|!number} */
	var b31$0$2;
	/** @type {undefined|!number} */
	var b02$0$2;
	/** @type {undefined|!number} */
	var b12$0$2;
	/** @type {undefined|!number} */
	var b22$0$2;
	/** @type {undefined|!number} */
	var b32$0$2;
	/** @type {undefined|!number} */
	var b03$0$2;
	/** @type {undefined|!number} */
	var b13$0$2;
	/** @type {undefined|!number} */
	var b23$0$2;
	/** @type {undefined|!number} */
	var b33$0$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var this$4;
	gl = Poi.gl;
	prog = Poi.prog;
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, projMat._);
	this$0 = new M44$LM44$(viewMat);
	this$2 = {_: new Float32Array(16)};
	x$0 = $this._x;
	y$0 = $this._y;
	z$0 = $this._z;
	M44$setIdentity$LM44$(this$2);
	this$2._[12] = x$0;
	this$2._[13] = y$0;
	this$2._[14] = z$0;
	a$0$0 = this$0._;
	(a00$0$0 = a$0$0[0], a10$0$0 = a$0$0[1], a20$0$0 = a$0$0[2], a30$0$0 = a$0$0[3]);
	(a01$0$0 = a$0$0[4], a11$0$0 = a$0$0[5], a21$0$0 = a$0$0[6], a31$0$0 = a$0$0[7]);
	(a02$0$0 = a$0$0[8], a12$0$0 = a$0$0[9], a22$0$0 = a$0$0[10], a32$0$0 = a$0$0[11]);
	(a03$0$0 = a$0$0[12], a13$0$0 = a$0$0[13], a23$0$0 = a$0$0[14], a33$0$0 = a$0$0[15]);
	b$0$0 = this$2._;
	(b00$0$0 = b$0$0[0], b10$0$0 = b$0$0[1], b20$0$0 = b$0$0[2], b30$0$0 = b$0$0[3]);
	(b01$0$0 = b$0$0[4], b11$0$0 = b$0$0[5], b21$0$0 = b$0$0[6], b31$0$0 = b$0$0[7]);
	(b02$0$0 = b$0$0[8], b12$0$0 = b$0$0[9], b22$0$0 = b$0$0[10], b32$0$0 = b$0$0[11]);
	(b03$0$0 = b$0$0[12], b13$0$0 = b$0$0[13], b23$0$0 = b$0$0[14], b33$0$0 = b$0$0[15]);
	a$0$0[0] = a00$0$0 * b00$0$0 + a01$0$0 * b10$0$0 + a02$0$0 * b20$0$0 + a03$0$0 * b30$0$0;
	a$0$0[1] = a10$0$0 * b00$0$0 + a11$0$0 * b10$0$0 + a12$0$0 * b20$0$0 + a13$0$0 * b30$0$0;
	a$0$0[2] = a20$0$0 * b00$0$0 + a21$0$0 * b10$0$0 + a22$0$0 * b20$0$0 + a23$0$0 * b30$0$0;
	a$0$0[3] = a30$0$0 * b00$0$0 + a31$0$0 * b10$0$0 + a32$0$0 * b20$0$0 + a33$0$0 * b30$0$0;
	a$0$0[4] = a00$0$0 * b01$0$0 + a01$0$0 * b11$0$0 + a02$0$0 * b21$0$0 + a03$0$0 * b31$0$0;
	a$0$0[5] = a10$0$0 * b01$0$0 + a11$0$0 * b11$0$0 + a12$0$0 * b21$0$0 + a13$0$0 * b31$0$0;
	a$0$0[6] = a20$0$0 * b01$0$0 + a21$0$0 * b11$0$0 + a22$0$0 * b21$0$0 + a23$0$0 * b31$0$0;
	a$0$0[7] = a30$0$0 * b01$0$0 + a31$0$0 * b11$0$0 + a32$0$0 * b21$0$0 + a33$0$0 * b31$0$0;
	a$0$0[8] = a00$0$0 * b02$0$0 + a01$0$0 * b12$0$0 + a02$0$0 * b22$0$0 + a03$0$0 * b32$0$0;
	a$0$0[9] = a10$0$0 * b02$0$0 + a11$0$0 * b12$0$0 + a12$0$0 * b22$0$0 + a13$0$0 * b32$0$0;
	a$0$0[10] = a20$0$0 * b02$0$0 + a21$0$0 * b12$0$0 + a22$0$0 * b22$0$0 + a23$0$0 * b32$0$0;
	a$0$0[11] = a30$0$0 * b02$0$0 + a31$0$0 * b12$0$0 + a32$0$0 * b22$0$0 + a33$0$0 * b32$0$0;
	a$0$0[12] = a00$0$0 * b03$0$0 + a01$0$0 * b13$0$0 + a02$0$0 * b23$0$0 + a03$0$0 * b33$0$0;
	a$0$0[13] = a10$0$0 * b03$0$0 + a11$0$0 * b13$0$0 + a12$0$0 * b23$0$0 + a13$0$0 * b33$0$0;
	a$0$0[14] = a20$0$0 * b03$0$0 + a21$0$0 * b13$0$0 + a22$0$0 * b23$0$0 + a23$0$0 * b33$0$0;
	a$0$0[15] = a30$0$0 * b03$0$0 + a31$0$0 * b13$0$0 + a32$0$0 * b23$0$0 + a33$0$0 * b33$0$0;
	mvMat = this$0;
	if ($this._down) {
		this$4 = {_: new Float32Array(16)};
		M44$setIdentity$LM44$(this$4);
		this$4._[12] = 0;
		this$4._[13] = 0;
		this$4._[14] = -7;
		a$0$2 = mvMat._;
		(a00$0$2 = a$0$2[0], a10$0$2 = a$0$2[1], a20$0$2 = a$0$2[2], a30$0$2 = a$0$2[3]);
		(a01$0$2 = a$0$2[4], a11$0$2 = a$0$2[5], a21$0$2 = a$0$2[6], a31$0$2 = a$0$2[7]);
		(a02$0$2 = a$0$2[8], a12$0$2 = a$0$2[9], a22$0$2 = a$0$2[10], a32$0$2 = a$0$2[11]);
		(a03$0$2 = a$0$2[12], a13$0$2 = a$0$2[13], a23$0$2 = a$0$2[14], a33$0$2 = a$0$2[15]);
		b$0$2 = this$4._;
		(b00$0$2 = b$0$2[0], b10$0$2 = b$0$2[1], b20$0$2 = b$0$2[2], b30$0$2 = b$0$2[3]);
		(b01$0$2 = b$0$2[4], b11$0$2 = b$0$2[5], b21$0$2 = b$0$2[6], b31$0$2 = b$0$2[7]);
		(b02$0$2 = b$0$2[8], b12$0$2 = b$0$2[9], b22$0$2 = b$0$2[10], b32$0$2 = b$0$2[11]);
		(b03$0$2 = b$0$2[12], b13$0$2 = b$0$2[13], b23$0$2 = b$0$2[14], b33$0$2 = b$0$2[15]);
		a$0$2[0] = a00$0$2 * b00$0$2 + a01$0$2 * b10$0$2 + a02$0$2 * b20$0$2 + a03$0$2 * b30$0$2;
		a$0$2[1] = a10$0$2 * b00$0$2 + a11$0$2 * b10$0$2 + a12$0$2 * b20$0$2 + a13$0$2 * b30$0$2;
		a$0$2[2] = a20$0$2 * b00$0$2 + a21$0$2 * b10$0$2 + a22$0$2 * b20$0$2 + a23$0$2 * b30$0$2;
		a$0$2[3] = a30$0$2 * b00$0$2 + a31$0$2 * b10$0$2 + a32$0$2 * b20$0$2 + a33$0$2 * b30$0$2;
		a$0$2[4] = a00$0$2 * b01$0$2 + a01$0$2 * b11$0$2 + a02$0$2 * b21$0$2 + a03$0$2 * b31$0$2;
		a$0$2[5] = a10$0$2 * b01$0$2 + a11$0$2 * b11$0$2 + a12$0$2 * b21$0$2 + a13$0$2 * b31$0$2;
		a$0$2[6] = a20$0$2 * b01$0$2 + a21$0$2 * b11$0$2 + a22$0$2 * b21$0$2 + a23$0$2 * b31$0$2;
		a$0$2[7] = a30$0$2 * b01$0$2 + a31$0$2 * b11$0$2 + a32$0$2 * b21$0$2 + a33$0$2 * b31$0$2;
		a$0$2[8] = a00$0$2 * b02$0$2 + a01$0$2 * b12$0$2 + a02$0$2 * b22$0$2 + a03$0$2 * b32$0$2;
		a$0$2[9] = a10$0$2 * b02$0$2 + a11$0$2 * b12$0$2 + a12$0$2 * b22$0$2 + a13$0$2 * b32$0$2;
		a$0$2[10] = a20$0$2 * b02$0$2 + a21$0$2 * b12$0$2 + a22$0$2 * b22$0$2 + a23$0$2 * b32$0$2;
		a$0$2[11] = a30$0$2 * b02$0$2 + a31$0$2 * b12$0$2 + a32$0$2 * b22$0$2 + a33$0$2 * b32$0$2;
		a$0$2[12] = a00$0$2 * b03$0$2 + a01$0$2 * b13$0$2 + a02$0$2 * b23$0$2 + a03$0$2 * b33$0$2;
		a$0$2[13] = a10$0$2 * b03$0$2 + a11$0$2 * b13$0$2 + a12$0$2 * b23$0$2 + a13$0$2 * b33$0$2;
		a$0$2[14] = a20$0$2 * b03$0$2 + a21$0$2 * b13$0$2 + a22$0$2 * b23$0$2 + a23$0$2 * b33$0$2;
		a$0$2[15] = a30$0$2 * b03$0$2 + a31$0$2 * b13$0$2 + a32$0$2 * b23$0$2 + a33$0$2 * b33$0$2;
		this$1 = mvMat;
		this$3 = {_: new Float32Array(16)};
		m$1 = M44$setRotate$LM44$NNNN(this$3, -0.1, 1, 0, 0);
		a$0$1 = this$1._;
		(a00$0$1 = a$0$1[0], a10$0$1 = a$0$1[1], a20$0$1 = a$0$1[2], a30$0$1 = a$0$1[3]);
		(a01$0$1 = a$0$1[4], a11$0$1 = a$0$1[5], a21$0$1 = a$0$1[6], a31$0$1 = a$0$1[7]);
		(a02$0$1 = a$0$1[8], a12$0$1 = a$0$1[9], a22$0$1 = a$0$1[10], a32$0$1 = a$0$1[11]);
		(a03$0$1 = a$0$1[12], a13$0$1 = a$0$1[13], a23$0$1 = a$0$1[14], a33$0$1 = a$0$1[15]);
		b$0$1 = m$1._;
		(b00$0$1 = b$0$1[0], b10$0$1 = b$0$1[1], b20$0$1 = b$0$1[2], b30$0$1 = b$0$1[3]);
		(b01$0$1 = b$0$1[4], b11$0$1 = b$0$1[5], b21$0$1 = b$0$1[6], b31$0$1 = b$0$1[7]);
		(b02$0$1 = b$0$1[8], b12$0$1 = b$0$1[9], b22$0$1 = b$0$1[10], b32$0$1 = b$0$1[11]);
		(b03$0$1 = b$0$1[12], b13$0$1 = b$0$1[13], b23$0$1 = b$0$1[14], b33$0$1 = b$0$1[15]);
		a$0$1[0] = a00$0$1 * b00$0$1 + a01$0$1 * b10$0$1 + a02$0$1 * b20$0$1 + a03$0$1 * b30$0$1;
		a$0$1[1] = a10$0$1 * b00$0$1 + a11$0$1 * b10$0$1 + a12$0$1 * b20$0$1 + a13$0$1 * b30$0$1;
		a$0$1[2] = a20$0$1 * b00$0$1 + a21$0$1 * b10$0$1 + a22$0$1 * b20$0$1 + a23$0$1 * b30$0$1;
		a$0$1[3] = a30$0$1 * b00$0$1 + a31$0$1 * b10$0$1 + a32$0$1 * b20$0$1 + a33$0$1 * b30$0$1;
		a$0$1[4] = a00$0$1 * b01$0$1 + a01$0$1 * b11$0$1 + a02$0$1 * b21$0$1 + a03$0$1 * b31$0$1;
		a$0$1[5] = a10$0$1 * b01$0$1 + a11$0$1 * b11$0$1 + a12$0$1 * b21$0$1 + a13$0$1 * b31$0$1;
		a$0$1[6] = a20$0$1 * b01$0$1 + a21$0$1 * b11$0$1 + a22$0$1 * b21$0$1 + a23$0$1 * b31$0$1;
		a$0$1[7] = a30$0$1 * b01$0$1 + a31$0$1 * b11$0$1 + a32$0$1 * b21$0$1 + a33$0$1 * b31$0$1;
		a$0$1[8] = a00$0$1 * b02$0$1 + a01$0$1 * b12$0$1 + a02$0$1 * b22$0$1 + a03$0$1 * b32$0$1;
		a$0$1[9] = a10$0$1 * b02$0$1 + a11$0$1 * b12$0$1 + a12$0$1 * b22$0$1 + a13$0$1 * b32$0$1;
		a$0$1[10] = a20$0$1 * b02$0$1 + a21$0$1 * b12$0$1 + a22$0$1 * b22$0$1 + a23$0$1 * b32$0$1;
		a$0$1[11] = a30$0$1 * b02$0$1 + a31$0$1 * b12$0$1 + a32$0$1 * b22$0$1 + a33$0$1 * b32$0$1;
		a$0$1[12] = a00$0$1 * b03$0$1 + a01$0$1 * b13$0$1 + a02$0$1 * b23$0$1 + a03$0$1 * b33$0$1;
		a$0$1[13] = a10$0$1 * b03$0$1 + a11$0$1 * b13$0$1 + a12$0$1 * b23$0$1 + a13$0$1 * b33$0$1;
		a$0$1[14] = a20$0$1 * b03$0$1 + a21$0$1 * b13$0$1 + a22$0$1 * b23$0$1 + a23$0$1 * b33$0$1;
		a$0$1[15] = a30$0$1 * b03$0$1 + a31$0$1 * b13$0$1 + a32$0$1 * b23$0$1 + a33$0$1 * b33$0$1;
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
	vp = (function (o) { return o instanceof Int32Array ? o : null; })(gl.getParameter(gl.VIEWPORT));
	if (! vp) {
		vp = new Int32Array((function (o) { return o instanceof Array ? o : null; })(gl.getParameter(gl.VIEWPORT)));
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
	_viewport$0 = this._viewport = (function (o) { return o instanceof Int32Array ? o : null; })(gl.getParameter(gl.VIEWPORT));
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
