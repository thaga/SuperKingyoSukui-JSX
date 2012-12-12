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
	canvas.width = canvas_size;
	canvas.height = canvas_size;
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
		var hpos;
		/** @type {V3} */
		var this$0;
		/** @type {M33} */
		var m$0;
		/** @type {!number} */
		var x$0;
		/** @type {!number} */
		var y$0;
		/** @type {!number} */
		var z$0;
		/** @type {V3} */
		var this$1;
		/** @type {!number} */
		var l$0;
		/** @type {V3} */
		var this$2;
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
		/** @type {!number} */
		var x$1;
		/** @type {!number} */
		var y$1;
		/** @type {!number} */
		var z$1;
		/** @type {V3} */
		var this$5;
		/** @type {!number} */
		var s$0;
		/** @type {M33} */
		var this$6;
		/** @type {!number} */
		var z$2;
		wx = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[game.jsx:106] null access");
			}
			return v;
		}(p[0])) / canvas.width * 2 - 1;
		wy = - p[1] / canvas.height * 2 + 1;
		this$0 = new V3$NNN(0, 0, 80);
		this$3 = new M33$();
		m$0 = this$3.setRotate$NNNN(0.2, 1, 0, 0);
		(x$0 = this$0.x, y$0 = this$0.y, z$0 = this$0.z);
		this$0.x = m$0.m11 * x$0 + m$0.m12 * y$0 + m$0.m13 * z$0;
		this$0.y = m$0.m21 * x$0 + m$0.m22 * y$0 + m$0.m23 * z$0;
		this$0.z = m$0.m31 * x$0 + m$0.m32 * y$0 + m$0.m33 * z$0;
		epos = this$0;
		this$4 = new V3$NNN(0.2 * wx, 0.2 * wy, -1);
		this$6 = new M33$();
		m$1 = this$6.setRotate$NNNN(0.2, 1, 0, 0);
		(x$1 = this$4.x, y$1 = this$4.y, z$1 = this$4.z);
		this$4.x = m$1.m11 * x$1 + m$1.m12 * y$1 + m$1.m13 * z$1;
		this$4.y = m$1.m21 * x$1 + m$1.m22 * y$1 + m$1.m23 * z$1;
		this$4.z = m$1.m31 * x$1 + m$1.m32 * y$1 + m$1.m33 * z$1;
		this$1 = this$4;
		l$0 = Math.sqrt(this$1.len2$());
		pdir = (l$0 > 0 ? this$1.mul$N(1 / l$0) : this$1);
		this$5 = new V3$LV3$(pdir);
		s$0 = (z$2 = epos.z) / - pdir.z;
		this$5.x *= s$0;
		this$5.y *= s$0;
		this$5.z *= s$0;
		this$2 = this$5;
		x$0$0 = epos.x;
		y$0$0 = epos.y;
		z$0$0 = z$2;
		this$2.x += x$0$0;
		this$2.y += y$0$0;
		this$2.z += z$0$0;
		hpos = this$2;
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
		/** @type {Water} */
		var this$2;
		/** @type {M44} */
		var projMat$0;
		/** @type {M44} */
		var viewMat$0;
		/** @type {WebGLTexture} */
		var bgTex$0;
		/** @type {!number} */
		var w$0;
		/** @type {!number} */
		var h$0;
		/** @type {WebGLRenderingContext} */
		var gl$1;
		/** @type {WebGLProgram} */
		var prog$0;
		/** @type {!number} */
		var vloc$0;
		/** @type {!number} */
		var tloc$0;
		/** @type {RenderTexture} */
		var this$3;
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
		this$2 = Game.water;
		projMat$0 = Game.projMat;
		viewMat$0 = Game.viewMat;
		this$3 = Game.renderTex;
		bgTex$0 = this$3.texturebuffer;
		w$0 = Game.canvas.offsetWidth;
		h$0 = Game.canvas.offsetHeight;
		gl$1 = Water.gl;
		prog$0 = Water.drawProg;
		vloc$0 = gl$1.getAttribLocation(prog$0, 'vertex');
		tloc$0 = gl$1.getAttribLocation(prog$0, 'texcoord');
		gl$1.useProgram(prog$0);
		gl$1.uniformMatrix4fv(gl$1.getUniformLocation(prog$0, 'projectionMatrix'), false, [ projMat$0.m11, projMat$0.m21, projMat$0.m31, projMat$0.m41, projMat$0.m12, projMat$0.m22, projMat$0.m32, projMat$0.m42, projMat$0.m13, projMat$0.m23, projMat$0.m33, projMat$0.m43, projMat$0.m14, projMat$0.m24, projMat$0.m34, projMat$0.m44 ]);
		gl$1.uniformMatrix4fv(gl$1.getUniformLocation(prog$0, 'modelviewMatrix'), false, [ viewMat$0.m11, viewMat$0.m21, viewMat$0.m31, viewMat$0.m41, viewMat$0.m12, viewMat$0.m22, viewMat$0.m32, viewMat$0.m42, viewMat$0.m13, viewMat$0.m23, viewMat$0.m33, viewMat$0.m43, viewMat$0.m14, viewMat$0.m24, viewMat$0.m34, viewMat$0.m44 ]);
		gl$1.uniform2f(gl$1.getUniformLocation(prog$0, 'texSize'), w$0, h$0);
		gl$1.activeTexture(gl$1.TEXTURE1);
		gl$1.bindTexture(gl$1.TEXTURE_2D, this$2.texture);
		gl$1.uniform1i(gl$1.getUniformLocation(prog$0, 'waveTexture'), 1);
		gl$1.activeTexture(gl$1.TEXTURE0);
		gl$1.bindTexture(gl$1.TEXTURE_2D, bgTex$0);
		gl$1.uniform1i(gl$1.getUniformLocation(prog$0, 'bgTexture'), 0);
		gl$1.bindBuffer(gl$1.ARRAY_BUFFER, Water.drawVBuf);
		gl$1.vertexAttribPointer(vloc$0, 2, gl$1.FLOAT, false, 0, 0);
		gl$1.enableVertexAttribArray(vloc$0);
		gl$1.bindBuffer(gl$1.ARRAY_BUFFER, Water.drawTBuf);
		gl$1.vertexAttribPointer(tloc$0, 2, gl$1.FLOAT, false, 0, 0);
		gl$1.enableVertexAttribArray(tloc$0);
		gl$1.drawArrays(gl$1.TRIANGLE_FAN, 0, 4);
		gl$1.disableVertexAttribArray(vloc$0);
		gl$1.disableVertexAttribArray(tloc$0);
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
	return (function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/js/web.jsx:45] detected invalid cast, value is not an instance of the designated type or null");
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
			throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:34] detected invalid cast, value is not a function or null");
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
			throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:38] detected invalid cast, value is not a function or null");
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
			throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:42] detected invalid cast, value is not a function or null");
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
			throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:46] detected invalid cast, value is not a function or null");
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
						throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:72] detected invalid cast, value is not a function or null");
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
							throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:78] detected invalid cast, value is not a function or null");
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
								throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:84] detected invalid cast, value is not a function or null");
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
									throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:90] detected invalid cast, value is not a function or null");
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
										throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:96] detected invalid cast, value is not a function or null");
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
				throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:34] detected invalid cast, value is not a function or null");
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
 */
Timer._getCancelAnimationFrameImpl$B = function (useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				(function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:119] detected invalid cast, value is not a function or null");
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
							throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:125] detected invalid cast, value is not a function or null");
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
								throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:131] detected invalid cast, value is not a function or null");
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
									throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:137] detected invalid cast, value is not a function or null");
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
										throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/timer.jsx:143] detected invalid cast, value is not a function or null");
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
	canvas = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })((function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(canvas_id)));
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
	this.x = 0;
	this.y = 0;
};

V2$.prototype = new V2;

/**
 * @constructor
 * @param {V2} v
 */
function V2$LV2$(v) {
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	this.x = 0;
	this.y = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
	this;
	this;
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
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {!number} */
	var z$0$0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
	this;
	this;
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
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z;
	this;
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
	this;
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
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {!number} */
	var z$0$0;
	/** @type {!number} */
	var w$0$0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	w$0$0 = v.w;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
	this.w = w$0$0;
	this;
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
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
	this;
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z;
	this.w = w;
	this;
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
	this.w = w;
	this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this.z = z;
	this.w = w;
	return this;
};

/**
 * @param {V3} v
 * @param {!number} w
 * @return {V4}
 */
V4.prototype.set$LV3$N = function (v, w) {
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
	this.w = w;
	return this;
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
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	return this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this.w = w$0;
	this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	this.w += w$0;
	return this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	this.w -= w$0;
	return this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	this.w *= w$0;
	return this;
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
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	this.w *= -1;
	return this;
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
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this;
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
	this;
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
	this;
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
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m12 = v1.x;
	this.m22 = v1.y;
	this;
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
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this;
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
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this;
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
	/** @type {M22} */
	var m0$0;
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
	m0$0 = new M22$LM22$(this);
	this.m11 = (m11$1 = m0$0.m11) * (m11$0 = m.m11) + (m12$0 = m0$0.m12) * (m21$0 = m.m21);
	this.m21 = (m21$1 = m0$0.m21) * m11$0 + (m22$0 = m0$0.m22) * m21$0;
	this.m12 = m11$1 * (m12$1 = m.m12) + m12$0 * (m22$1 = m.m22);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1;
	return this;
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
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	this;
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
	this;
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
	this;
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
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m31 = v0.z;
	this.m12 = v1.x;
	this.m22 = v1.y;
	this.m32 = v1.z;
	this.m13 = v2.x;
	this.m23 = v2.y;
	this.m33 = v2.z;
	this;
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
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = 0;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	this;
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
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m31 = m.m31;
	this.m12 = m.m12;
	this.m22 = m.m22;
	this.m32 = m.m32;
	this.m13 = m.m13;
	this.m23 = m.m23;
	this.m33 = m.m33;
	this;
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
	/** @type {M33} */
	var m0$0;
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
	m0$0 = new M33$LM33$(this);
	this.m11 = (m11$1 = m0$0.m11) * (m11$0 = m.m11) + (m12$0 = m0$0.m12) * (m21$0 = m.m21) + (m13$0 = m0$0.m13) * (m31$0 = m.m31);
	this.m21 = (m21$1 = m0$0.m21) * m11$0 + (m22$0 = m0$0.m22) * m21$0 + (m23$0 = m0$0.m23) * m31$0;
	this.m31 = (m31$1 = m0$0.m31) * m11$0 + (m32$1 = m0$0.m32) * m21$0 + (m33$0 = m0$0.m33) * m31$0;
	this.m12 = m11$1 * (m12$1 = m.m12) + m12$0 * (m22$1 = m.m22) + m13$0 * (m32$0 = m.m32);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0;
	this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0;
	this.m13 = m11$1 * (m13$1 = m.m13) + m12$0 * (m23$1 = m.m23) + m13$0 * (m33$1 = m.m33);
	this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1;
	this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1;
	return this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.m11 = x$0;
	this.m22 = y$0;
	this.m33 = z$0;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
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
	this;
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
	this;
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
	this;
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
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m31 = v0.z;
	this.m41 = v0.w;
	this.m12 = v1.x;
	this.m22 = v1.y;
	this.m32 = v1.z;
	this.m42 = v1.w;
	this.m13 = v2.x;
	this.m23 = v2.y;
	this.m33 = v2.z;
	this.m43 = v2.w;
	this.m14 = v3.x;
	this.m24 = v3.y;
	this.m34 = v3.z;
	this.m44 = v3.w;
	this;
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
	this.m33 = m22;
	this.m43 = 0;
	this.m14 = 0;
	this.m24 = 0;
	this.m34 = 0;
	this.m44 = m33;
	this;
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
	this.m44 = m33;
	this;
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
	/** @type {M44} */
	var m0$0;
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
	m0$0 = new M44$LM44$(this);
	this.m11 = (m11$1 = m0$0.m11) * (m11$0 = m.m11) + (m12$0 = m0$0.m12) * (m21$0 = m.m21) + (m13$0 = m0$0.m13) * (m31$0 = m.m31) + (m14$0 = m0$0.m14) * (m41$0 = m.m41);
	this.m21 = (m21$1 = m0$0.m21) * m11$0 + (m22$0 = m0$0.m22) * m21$0 + (m23$0 = m0$0.m23) * m31$0 + (m24$0 = m0$0.m24) * m41$0;
	this.m31 = (m31$1 = m0$0.m31) * m11$0 + (m32$1 = m0$0.m32) * m21$0 + (m33$0 = m0$0.m33) * m31$0 + (m34$0 = m0$0.m34) * m41$0;
	this.m41 = (m41$1 = m0$0.m41) * m11$0 + (m42$1 = m0$0.m42) * m21$0 + (m43$0 = m0$0.m43) * m31$0 + (m44$0 = m0$0.m44) * m41$0;
	this.m12 = m11$1 * (m12$1 = m.m12) + m12$0 * (m22$1 = m.m22) + m13$0 * (m32$0 = m.m32) + m14$0 * (m42$0 = m.m42);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
	this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
	this.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
	this.m13 = m11$1 * (m13$1 = m.m13) + m12$0 * (m23$1 = m.m23) + m13$0 * (m33$1 = m.m33) + m14$0 * (m43$1 = m.m43);
	this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
	this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
	this.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
	this.m14 = m11$1 * (m14$1 = m.m14) + m12$0 * (m24$1 = m.m24) + m13$0 * (m34$1 = m.m34) + m14$0 * (m44$1 = m.m44);
	this.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
	this.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
	this.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
	return this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.m11 = this.m22 = this.m33 = this.m44 = 1;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	this;
	this.m14 = x$0;
	this.m24 = y$0;
	this.m34 = z$0;
	return this;
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
	this.m11 = this.m22 = this.m33 = this.m44 = 0;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	this;
	this.m11 = s;
	this.m22 = s;
	this.m33 = s;
	this.m44 = 1;
	return this;
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
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.m11 = this.m22 = this.m33 = this.m44 = 0;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m24 = this.m14 = this.m24 = this.m34 = 0;
	this;
	this.m11 = x$0;
	this.m22 = y$0;
	this.m33 = z$0;
	this.m44 = 1;
	return this;
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
	this.w = q.w;
	this.x = q.x;
	this.y = q.y;
	this.z = q.z;
	this;
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
	this;
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
	this;
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
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
	this;
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
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
};

/**
 * @return {Quat}
 */
Quat.prototype.setIdentity$ = function () {
	this.w = 1;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
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
	/** @type {M44} */
	var this$1$0;
	/** @type {V3} */
	var this$2$0;
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
	this._vangle = Math.random() * 2 * 3.141592653589793;
	this._velo = Math.random() * 15 + 1;
	r$0 = 8 * Math.random();
	x$0 = r$0 * Math.cos(this._vangle);
	y$0 = r$0 * Math.sin(this._vangle);
	this$0$0 = this._pos;
	z$0$0 = -2 - Math.random() * 3;
	this$0$0.x = x$0;
	this$0$0.y = y$0;
	this$0$0.z = z$0$0;
	this$0$0;
	this._anim = 0;
	this._state = 'swimming';
	this$1$0 = this._spinMat;
	this$1$0.m11 = this$1$0.m22 = this$1$0.m33 = this$1$0.m44 = 1;
	this$1$0.m21 = this$1$0.m31 = this$1$0.m41 = this$1$0.m12 = this$1$0.m32 = this$1$0.m42 = this$1$0.m13 = this$1$0.m23 = this$1$0.m24 = this$1$0.m14 = this$1$0.m24 = this$1$0.m34 = 0;
	this$1$0;
	this$2$0 = this._spinAxis;
	this$2$0.x = 0;
	this$2$0.y = 0;
	this$2$0.z = 0;
	this$2$0;
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
	/** @type {M44} */
	var this$1$0;
	/** @type {V3} */
	var this$2$0;
	for (i = 0; i < Kingyo.all.length; ++ i) {
		this$0 = Kingyo.all[i];
		this$0._vangle = Math.random() * 2 * 3.141592653589793;
		this$0._velo = Math.random() * 15 + 1;
		r$0 = 8 * Math.random();
		x$0 = r$0 * Math.cos(this$0._vangle);
		y$0 = r$0 * Math.sin(this$0._vangle);
		this$0$0 = this$0._pos;
		z$0$0 = -2 - Math.random() * 3;
		this$0$0.x = x$0;
		this$0$0.y = y$0;
		this$0$0.z = z$0$0;
		this$0$0;
		this$0._anim = 0;
		this$0._state = 'swimming';
		this$1$0 = this$0._spinMat;
		this$1$0.m11 = this$1$0.m22 = this$1$0.m33 = this$1$0.m44 = 1;
		this$1$0.m21 = this$1$0.m31 = this$1$0.m41 = this$1$0.m12 = this$1$0.m32 = this$1$0.m42 = this$1$0.m13 = this$1$0.m23 = this$1$0.m24 = this$1$0.m14 = this$1$0.m24 = this$1$0.m34 = 0;
		this$1$0;
		this$2$0 = this$0._spinAxis;
		this$2$0.x = 0;
		this$2$0.y = 0;
		this$2$0.z = 0;
		this$2$0;
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
	/** @type {WebGLRenderingContext} */
	var gl$0;
	/** @type {WebGLProgram} */
	var prog$0;
	/** @type {WebGLUniformLocation} */
	var modelMatLoc$0;
	/** @type {!number} */
	var s$0;
	/** @type {M44} */
	var bodyMat$0;
	/** @type {M44} */
	var lfinMat$0;
	/** @type {M44} */
	var rfinMat$0;
	/** @type {M44} */
	var bfinMat$0;
	/** @type {M44} */
	var tfinMat$0;
	/** @type {M44} */
	var this$0$0;
	/** @type {M44} */
	var m$0$0;
	/** @type {M44} */
	var m0$0$0$0;
	/** @type {_Part} */
	var p$0$0;
	/** @type {WebGLRenderingContext} */
	var gl$0$0;
	/** @type {WebGLProgram} */
	var prog$0$0;
	/** @type {M44} */
	var this$1$0;
	/** @type {M44} */
	var m$1$0;
	/** @type {M44} */
	var m0$0$1$0;
	/** @type {_Part} */
	var p$1$0;
	/** @type {WebGLRenderingContext} */
	var gl$1$0;
	/** @type {WebGLProgram} */
	var prog$1$0;
	/** @type {M44} */
	var this$2$0;
	/** @type {M44} */
	var m$2$0;
	/** @type {M44} */
	var m0$0$2$0;
	/** @type {_Part} */
	var p$2$0;
	/** @type {WebGLRenderingContext} */
	var gl$2$0;
	/** @type {WebGLProgram} */
	var prog$2$0;
	/** @type {M44} */
	var this$3$0;
	/** @type {M44} */
	var m$3$0;
	/** @type {M44} */
	var m0$0$3$0;
	/** @type {_Part} */
	var p$3$0;
	/** @type {WebGLRenderingContext} */
	var gl$3$0;
	/** @type {WebGLProgram} */
	var prog$3$0;
	/** @type {M44} */
	var this$4$0;
	/** @type {M44} */
	var m$4$0;
	/** @type {M44} */
	var m0$0$4$0;
	/** @type {_Part} */
	var p$4$0;
	/** @type {WebGLRenderingContext} */
	var gl$4$0;
	/** @type {WebGLProgram} */
	var prog$4$0;
	/** @type {M44} */
	var this$5$0;
	/** @type {M44} */
	var m$5$0;
	/** @type {M44} */
	var m0$0$5$0;
	/** @type {M44} */
	var this$6$0;
	/** @type {M44} */
	var this$7$0;
	/** @type {M44} */
	var m$6$0;
	/** @type {M44} */
	var m0$0$6$0;
	/** @type {M44} */
	var this$8$0;
	/** @type {M44} */
	var m$7$0;
	/** @type {M44} */
	var m0$0$7$0;
	/** @type {M44} */
	var this$9$0;
	/** @type {M44} */
	var m$8$0;
	/** @type {M44} */
	var m0$0$8$0;
	/** @type {M44} */
	var this$10$0;
	/** @type {M44} */
	var m$9$0;
	/** @type {M44} */
	var m0$0$9$0;
	/** @type {M44} */
	var this$11$0;
	/** @type {M44} */
	var m$10$0;
	/** @type {M44} */
	var m0$0$10$0;
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
	var this$17$0;
	/** @type {M44} */
	var m$11$0;
	/** @type {M44} */
	var m0$0$11$0;
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
	/** @type {WebGLProgram} */
	var prog$1;
	/** @type {Object.<string, undefined|WebGLUniformLocation>} */
	var ulocs$0;
	/** @type {Object.<string, undefined|!number>} */
	var alocs$0;
	/** @type {!number} */
	var s$1;
	/** @type {M44} */
	var bodyMat$1;
	/** @type {M44} */
	var this$0$1;
	/** @type {M44} */
	var m$0$1;
	/** @type {M44} */
	var m0$0$0$1;
	/** @type {M44} */
	var this$1$1;
	/** @type {M44} */
	var m$1$1;
	/** @type {M44} */
	var m0$0$1$1;
	/** @type {M44} */
	var this$2$1;
	/** @type {M44} */
	var this$3$1;
	/** @type {M44} */
	var m$2$1;
	/** @type {M44} */
	var m0$0$2$1;
	/** @type {M44} */
	var this$4$1;
	/** @type {M44} */
	var this$5$1;
	/** @type {M44} */
	var m$3$1;
	/** @type {M44} */
	var m0$0$3$1;
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
	/** @type {!number} */
	var m11$2;
	/** @type {!number} */
	var m21$2;
	/** @type {!number} */
	var m31$2;
	/** @type {!number} */
	var m41$2;
	/** @type {!number} */
	var m11$3;
	/** @type {!number} */
	var m12$2;
	/** @type {!number} */
	var m13$2;
	/** @type {!number} */
	var m14$2;
	/** @type {!number} */
	var m21$3;
	/** @type {!number} */
	var m12$3;
	/** @type {!number} */
	var m22$2;
	/** @type {!number} */
	var m22$3;
	/** @type {!number} */
	var m23$2;
	/** @type {!number} */
	var m32$2;
	/** @type {!number} */
	var m24$2;
	/** @type {!number} */
	var m42$2;
	/** @type {!number} */
	var m31$3;
	/** @type {!number} */
	var m32$3;
	/** @type {!number} */
	var m33$2;
	/** @type {!number} */
	var m34$2;
	/** @type {!number} */
	var m41$3;
	/** @type {!number} */
	var m42$3;
	/** @type {!number} */
	var m43$2;
	/** @type {!number} */
	var m44$2;
	/** @type {!number} */
	var m13$3;
	/** @type {!number} */
	var m23$3;
	/** @type {!number} */
	var m33$3;
	/** @type {!number} */
	var m43$3;
	/** @type {!number} */
	var m14$3;
	/** @type {!number} */
	var m24$3;
	/** @type {!number} */
	var m34$3;
	/** @type {!number} */
	var m44$3;
	/** @type {!number} */
	var m11$4;
	/** @type {!number} */
	var m21$4;
	/** @type {!number} */
	var m31$4;
	/** @type {!number} */
	var m41$4;
	/** @type {!number} */
	var m11$5;
	/** @type {!number} */
	var m12$4;
	/** @type {!number} */
	var m13$4;
	/** @type {!number} */
	var m14$4;
	/** @type {!number} */
	var m21$5;
	/** @type {!number} */
	var m12$5;
	/** @type {!number} */
	var m22$4;
	/** @type {!number} */
	var m22$5;
	/** @type {!number} */
	var m23$4;
	/** @type {!number} */
	var m32$4;
	/** @type {!number} */
	var m24$4;
	/** @type {!number} */
	var m42$4;
	/** @type {!number} */
	var m31$5;
	/** @type {!number} */
	var m32$5;
	/** @type {!number} */
	var m33$4;
	/** @type {!number} */
	var m34$4;
	/** @type {!number} */
	var m41$5;
	/** @type {!number} */
	var m42$5;
	/** @type {!number} */
	var m43$4;
	/** @type {!number} */
	var m44$4;
	/** @type {!number} */
	var m13$5;
	/** @type {!number} */
	var m23$5;
	/** @type {!number} */
	var m33$5;
	/** @type {!number} */
	var m43$5;
	/** @type {!number} */
	var m14$5;
	/** @type {!number} */
	var m24$5;
	/** @type {!number} */
	var m34$5;
	/** @type {!number} */
	var m44$5;
	/** @type {!number} */
	var m11$6;
	/** @type {!number} */
	var m21$6;
	/** @type {!number} */
	var m31$6;
	/** @type {!number} */
	var m41$6;
	/** @type {!number} */
	var m11$7;
	/** @type {!number} */
	var m12$6;
	/** @type {!number} */
	var m13$6;
	/** @type {!number} */
	var m14$6;
	/** @type {!number} */
	var m21$7;
	/** @type {!number} */
	var m12$7;
	/** @type {!number} */
	var m22$6;
	/** @type {!number} */
	var m22$7;
	/** @type {!number} */
	var m23$6;
	/** @type {!number} */
	var m32$6;
	/** @type {!number} */
	var m24$6;
	/** @type {!number} */
	var m42$6;
	/** @type {!number} */
	var m31$7;
	/** @type {!number} */
	var m32$7;
	/** @type {!number} */
	var m33$6;
	/** @type {!number} */
	var m34$6;
	/** @type {!number} */
	var m41$7;
	/** @type {!number} */
	var m42$7;
	/** @type {!number} */
	var m43$6;
	/** @type {!number} */
	var m44$6;
	/** @type {!number} */
	var m13$7;
	/** @type {!number} */
	var m23$7;
	/** @type {!number} */
	var m33$7;
	/** @type {!number} */
	var m43$7;
	/** @type {!number} */
	var m14$7;
	/** @type {!number} */
	var m24$7;
	/** @type {!number} */
	var m34$7;
	/** @type {!number} */
	var m44$7;
	/** @type {!number} */
	var m11$8;
	/** @type {!number} */
	var m21$8;
	/** @type {!number} */
	var m31$8;
	/** @type {!number} */
	var m41$8;
	/** @type {!number} */
	var m11$9;
	/** @type {!number} */
	var m12$8;
	/** @type {!number} */
	var m13$8;
	/** @type {!number} */
	var m14$8;
	/** @type {!number} */
	var m21$9;
	/** @type {!number} */
	var m12$9;
	/** @type {!number} */
	var m22$8;
	/** @type {!number} */
	var m22$9;
	/** @type {!number} */
	var m23$8;
	/** @type {!number} */
	var m32$8;
	/** @type {!number} */
	var m24$8;
	/** @type {!number} */
	var m42$8;
	/** @type {!number} */
	var m31$9;
	/** @type {!number} */
	var m32$9;
	/** @type {!number} */
	var m33$8;
	/** @type {!number} */
	var m34$8;
	/** @type {!number} */
	var m41$9;
	/** @type {!number} */
	var m42$9;
	/** @type {!number} */
	var m43$8;
	/** @type {!number} */
	var m44$8;
	/** @type {!number} */
	var m13$9;
	/** @type {!number} */
	var m23$9;
	/** @type {!number} */
	var m33$9;
	/** @type {!number} */
	var m43$9;
	/** @type {!number} */
	var m14$9;
	/** @type {!number} */
	var m24$9;
	/** @type {!number} */
	var m34$9;
	/** @type {!number} */
	var m44$9;
	/** @type {!number} */
	var m11$10;
	/** @type {!number} */
	var m21$10;
	/** @type {!number} */
	var m31$10;
	/** @type {!number} */
	var m41$10;
	/** @type {!number} */
	var m11$11;
	/** @type {!number} */
	var m12$10;
	/** @type {!number} */
	var m13$10;
	/** @type {!number} */
	var m14$10;
	/** @type {!number} */
	var m21$11;
	/** @type {!number} */
	var m12$11;
	/** @type {!number} */
	var m22$10;
	/** @type {!number} */
	var m22$11;
	/** @type {!number} */
	var m23$10;
	/** @type {!number} */
	var m32$10;
	/** @type {!number} */
	var m24$10;
	/** @type {!number} */
	var m42$10;
	/** @type {!number} */
	var m31$11;
	/** @type {!number} */
	var m32$11;
	/** @type {!number} */
	var m33$10;
	/** @type {!number} */
	var m34$10;
	/** @type {!number} */
	var m41$11;
	/** @type {!number} */
	var m42$11;
	/** @type {!number} */
	var m43$10;
	/** @type {!number} */
	var m44$10;
	/** @type {!number} */
	var m13$11;
	/** @type {!number} */
	var m23$11;
	/** @type {!number} */
	var m33$11;
	/** @type {!number} */
	var m43$11;
	/** @type {!number} */
	var m14$11;
	/** @type {!number} */
	var m24$11;
	/** @type {!number} */
	var m34$11;
	/** @type {!number} */
	var m44$11;
	/** @type {!number} */
	var m11$12;
	/** @type {!number} */
	var m21$12;
	/** @type {!number} */
	var m31$12;
	/** @type {!number} */
	var m41$12;
	/** @type {!number} */
	var m11$13;
	/** @type {!number} */
	var m12$12;
	/** @type {!number} */
	var m13$12;
	/** @type {!number} */
	var m14$12;
	/** @type {!number} */
	var m21$13;
	/** @type {!number} */
	var m12$13;
	/** @type {!number} */
	var m22$12;
	/** @type {!number} */
	var m22$13;
	/** @type {!number} */
	var m23$12;
	/** @type {!number} */
	var m32$12;
	/** @type {!number} */
	var m24$12;
	/** @type {!number} */
	var m42$12;
	/** @type {!number} */
	var m31$13;
	/** @type {!number} */
	var m32$13;
	/** @type {!number} */
	var m33$12;
	/** @type {!number} */
	var m34$12;
	/** @type {!number} */
	var m41$13;
	/** @type {!number} */
	var m42$13;
	/** @type {!number} */
	var m43$12;
	/** @type {!number} */
	var m44$12;
	/** @type {!number} */
	var m13$13;
	/** @type {!number} */
	var m23$13;
	/** @type {!number} */
	var m33$13;
	/** @type {!number} */
	var m43$13;
	/** @type {!number} */
	var m14$13;
	/** @type {!number} */
	var m24$13;
	/** @type {!number} */
	var m34$13;
	/** @type {!number} */
	var m44$13;
	/** @type {!number} */
	var m11$14;
	/** @type {!number} */
	var m21$14;
	/** @type {!number} */
	var m31$14;
	/** @type {!number} */
	var m41$14;
	/** @type {!number} */
	var m11$15;
	/** @type {!number} */
	var m12$14;
	/** @type {!number} */
	var m13$14;
	/** @type {!number} */
	var m14$14;
	/** @type {!number} */
	var m21$15;
	/** @type {!number} */
	var m12$15;
	/** @type {!number} */
	var m22$14;
	/** @type {!number} */
	var m22$15;
	/** @type {!number} */
	var m23$14;
	/** @type {!number} */
	var m32$14;
	/** @type {!number} */
	var m24$14;
	/** @type {!number} */
	var m42$14;
	/** @type {!number} */
	var m31$15;
	/** @type {!number} */
	var m32$15;
	/** @type {!number} */
	var m33$14;
	/** @type {!number} */
	var m34$14;
	/** @type {!number} */
	var m41$15;
	/** @type {!number} */
	var m42$15;
	/** @type {!number} */
	var m43$14;
	/** @type {!number} */
	var m44$14;
	/** @type {!number} */
	var m13$15;
	/** @type {!number} */
	var m23$15;
	/** @type {!number} */
	var m33$15;
	/** @type {!number} */
	var m43$15;
	/** @type {!number} */
	var m14$15;
	/** @type {!number} */
	var m24$15;
	/** @type {!number} */
	var m34$15;
	/** @type {!number} */
	var m44$15;
	/** @type {!number} */
	var m11$16;
	/** @type {!number} */
	var m21$16;
	/** @type {!number} */
	var m31$16;
	/** @type {!number} */
	var m41$16;
	/** @type {!number} */
	var m11$17;
	/** @type {!number} */
	var m12$16;
	/** @type {!number} */
	var m13$16;
	/** @type {!number} */
	var m14$16;
	/** @type {!number} */
	var m21$17;
	/** @type {!number} */
	var m12$17;
	/** @type {!number} */
	var m22$16;
	/** @type {!number} */
	var m22$17;
	/** @type {!number} */
	var m23$16;
	/** @type {!number} */
	var m32$16;
	/** @type {!number} */
	var m24$16;
	/** @type {!number} */
	var m42$16;
	/** @type {!number} */
	var m31$17;
	/** @type {!number} */
	var m32$17;
	/** @type {!number} */
	var m33$16;
	/** @type {!number} */
	var m34$16;
	/** @type {!number} */
	var m41$17;
	/** @type {!number} */
	var m42$17;
	/** @type {!number} */
	var m43$16;
	/** @type {!number} */
	var m44$16;
	/** @type {!number} */
	var m13$17;
	/** @type {!number} */
	var m23$17;
	/** @type {!number} */
	var m33$17;
	/** @type {!number} */
	var m43$17;
	/** @type {!number} */
	var m14$17;
	/** @type {!number} */
	var m24$17;
	/** @type {!number} */
	var m34$17;
	/** @type {!number} */
	var m44$17;
	/** @type {!number} */
	var m11$18;
	/** @type {!number} */
	var m21$18;
	/** @type {!number} */
	var m31$18;
	/** @type {!number} */
	var m41$18;
	/** @type {!number} */
	var m11$19;
	/** @type {!number} */
	var m12$18;
	/** @type {!number} */
	var m13$18;
	/** @type {!number} */
	var m14$18;
	/** @type {!number} */
	var m21$19;
	/** @type {!number} */
	var m12$19;
	/** @type {!number} */
	var m22$18;
	/** @type {!number} */
	var m22$19;
	/** @type {!number} */
	var m23$18;
	/** @type {!number} */
	var m32$18;
	/** @type {!number} */
	var m24$18;
	/** @type {!number} */
	var m42$18;
	/** @type {!number} */
	var m31$19;
	/** @type {!number} */
	var m32$19;
	/** @type {!number} */
	var m33$18;
	/** @type {!number} */
	var m34$18;
	/** @type {!number} */
	var m41$19;
	/** @type {!number} */
	var m42$19;
	/** @type {!number} */
	var m43$18;
	/** @type {!number} */
	var m44$18;
	/** @type {!number} */
	var m13$19;
	/** @type {!number} */
	var m23$19;
	/** @type {!number} */
	var m33$19;
	/** @type {!number} */
	var m43$19;
	/** @type {!number} */
	var m14$19;
	/** @type {!number} */
	var m24$19;
	/** @type {!number} */
	var m34$19;
	/** @type {!number} */
	var m44$19;
	/** @type {!number} */
	var m11$20;
	/** @type {!number} */
	var m21$20;
	/** @type {!number} */
	var m31$20;
	/** @type {!number} */
	var m41$20;
	/** @type {!number} */
	var m11$21;
	/** @type {!number} */
	var m12$20;
	/** @type {!number} */
	var m13$20;
	/** @type {!number} */
	var m14$20;
	/** @type {!number} */
	var m21$21;
	/** @type {!number} */
	var m12$21;
	/** @type {!number} */
	var m22$20;
	/** @type {!number} */
	var m22$21;
	/** @type {!number} */
	var m23$20;
	/** @type {!number} */
	var m32$20;
	/** @type {!number} */
	var m24$20;
	/** @type {!number} */
	var m42$20;
	/** @type {!number} */
	var m31$21;
	/** @type {!number} */
	var m32$21;
	/** @type {!number} */
	var m33$20;
	/** @type {!number} */
	var m34$20;
	/** @type {!number} */
	var m41$21;
	/** @type {!number} */
	var m42$21;
	/** @type {!number} */
	var m43$20;
	/** @type {!number} */
	var m44$20;
	/** @type {!number} */
	var m13$21;
	/** @type {!number} */
	var m23$21;
	/** @type {!number} */
	var m33$21;
	/** @type {!number} */
	var m43$21;
	/** @type {!number} */
	var m14$21;
	/** @type {!number} */
	var m24$21;
	/** @type {!number} */
	var m34$21;
	/** @type {!number} */
	var m44$21;
	/** @type {!number} */
	var m11$22;
	/** @type {!number} */
	var m21$22;
	/** @type {!number} */
	var m31$22;
	/** @type {!number} */
	var m41$22;
	/** @type {!number} */
	var m11$23;
	/** @type {!number} */
	var m12$22;
	/** @type {!number} */
	var m13$22;
	/** @type {!number} */
	var m14$22;
	/** @type {!number} */
	var m21$23;
	/** @type {!number} */
	var m12$23;
	/** @type {!number} */
	var m22$22;
	/** @type {!number} */
	var m22$23;
	/** @type {!number} */
	var m23$22;
	/** @type {!number} */
	var m32$22;
	/** @type {!number} */
	var m24$22;
	/** @type {!number} */
	var m42$22;
	/** @type {!number} */
	var m31$23;
	/** @type {!number} */
	var m32$23;
	/** @type {!number} */
	var m33$22;
	/** @type {!number} */
	var m34$22;
	/** @type {!number} */
	var m41$23;
	/** @type {!number} */
	var m42$23;
	/** @type {!number} */
	var m43$22;
	/** @type {!number} */
	var m44$22;
	/** @type {!number} */
	var m13$23;
	/** @type {!number} */
	var m23$23;
	/** @type {!number} */
	var m33$23;
	/** @type {!number} */
	var m43$23;
	/** @type {!number} */
	var m14$23;
	/** @type {!number} */
	var m24$23;
	/** @type {!number} */
	var m34$23;
	/** @type {!number} */
	var m44$23;
	/** @type {!number} */
	var m11$24;
	/** @type {!number} */
	var m21$24;
	/** @type {!number} */
	var m31$24;
	/** @type {!number} */
	var m41$24;
	/** @type {!number} */
	var m11$25;
	/** @type {!number} */
	var m12$24;
	/** @type {!number} */
	var m13$24;
	/** @type {!number} */
	var m14$24;
	/** @type {!number} */
	var m21$25;
	/** @type {!number} */
	var m12$25;
	/** @type {!number} */
	var m22$24;
	/** @type {!number} */
	var m22$25;
	/** @type {!number} */
	var m23$24;
	/** @type {!number} */
	var m32$24;
	/** @type {!number} */
	var m24$24;
	/** @type {!number} */
	var m42$24;
	/** @type {!number} */
	var m31$25;
	/** @type {!number} */
	var m32$25;
	/** @type {!number} */
	var m33$24;
	/** @type {!number} */
	var m34$24;
	/** @type {!number} */
	var m41$25;
	/** @type {!number} */
	var m42$25;
	/** @type {!number} */
	var m43$24;
	/** @type {!number} */
	var m44$24;
	/** @type {!number} */
	var m13$25;
	/** @type {!number} */
	var m23$25;
	/** @type {!number} */
	var m33$25;
	/** @type {!number} */
	var m43$25;
	/** @type {!number} */
	var m14$25;
	/** @type {!number} */
	var m24$25;
	/** @type {!number} */
	var m34$25;
	/** @type {!number} */
	var m44$25;
	/** @type {!number} */
	var m11$26;
	/** @type {!number} */
	var m21$26;
	/** @type {!number} */
	var m31$26;
	/** @type {!number} */
	var m41$26;
	/** @type {!number} */
	var m11$27;
	/** @type {!number} */
	var m12$26;
	/** @type {!number} */
	var m13$26;
	/** @type {!number} */
	var m14$26;
	/** @type {!number} */
	var m21$27;
	/** @type {!number} */
	var m12$27;
	/** @type {!number} */
	var m22$26;
	/** @type {!number} */
	var m22$27;
	/** @type {!number} */
	var m23$26;
	/** @type {!number} */
	var m32$26;
	/** @type {!number} */
	var m24$26;
	/** @type {!number} */
	var m42$26;
	/** @type {!number} */
	var m31$27;
	/** @type {!number} */
	var m32$27;
	/** @type {!number} */
	var m33$26;
	/** @type {!number} */
	var m34$26;
	/** @type {!number} */
	var m41$27;
	/** @type {!number} */
	var m42$27;
	/** @type {!number} */
	var m43$26;
	/** @type {!number} */
	var m44$26;
	/** @type {!number} */
	var m13$27;
	/** @type {!number} */
	var m23$27;
	/** @type {!number} */
	var m33$27;
	/** @type {!number} */
	var m43$27;
	/** @type {!number} */
	var m14$27;
	/** @type {!number} */
	var m24$27;
	/** @type {!number} */
	var m34$27;
	/** @type {!number} */
	var m44$27;
	/** @type {!number} */
	var m11$28;
	/** @type {!number} */
	var m21$28;
	/** @type {!number} */
	var m31$28;
	/** @type {!number} */
	var m41$28;
	/** @type {!number} */
	var m11$29;
	/** @type {!number} */
	var m12$28;
	/** @type {!number} */
	var m13$28;
	/** @type {!number} */
	var m14$28;
	/** @type {!number} */
	var m21$29;
	/** @type {!number} */
	var m12$29;
	/** @type {!number} */
	var m22$28;
	/** @type {!number} */
	var m22$29;
	/** @type {!number} */
	var m23$28;
	/** @type {!number} */
	var m32$28;
	/** @type {!number} */
	var m24$28;
	/** @type {!number} */
	var m42$28;
	/** @type {!number} */
	var m31$29;
	/** @type {!number} */
	var m32$29;
	/** @type {!number} */
	var m33$28;
	/** @type {!number} */
	var m34$28;
	/** @type {!number} */
	var m41$29;
	/** @type {!number} */
	var m42$29;
	/** @type {!number} */
	var m43$28;
	/** @type {!number} */
	var m44$28;
	/** @type {!number} */
	var m13$29;
	/** @type {!number} */
	var m23$29;
	/** @type {!number} */
	var m33$29;
	/** @type {!number} */
	var m43$29;
	/** @type {!number} */
	var m14$29;
	/** @type {!number} */
	var m24$29;
	/** @type {!number} */
	var m34$29;
	/** @type {!number} */
	var m44$29;
	/** @type {!number} */
	var m11$30;
	/** @type {!number} */
	var m21$30;
	/** @type {!number} */
	var m31$30;
	/** @type {!number} */
	var m41$30;
	/** @type {!number} */
	var m11$31;
	/** @type {!number} */
	var m12$30;
	/** @type {!number} */
	var m13$30;
	/** @type {!number} */
	var m14$30;
	/** @type {!number} */
	var m21$31;
	/** @type {!number} */
	var m12$31;
	/** @type {!number} */
	var m22$30;
	/** @type {!number} */
	var m22$31;
	/** @type {!number} */
	var m23$30;
	/** @type {!number} */
	var m32$30;
	/** @type {!number} */
	var m24$30;
	/** @type {!number} */
	var m42$30;
	/** @type {!number} */
	var m31$31;
	/** @type {!number} */
	var m32$31;
	/** @type {!number} */
	var m33$30;
	/** @type {!number} */
	var m34$30;
	/** @type {!number} */
	var m41$31;
	/** @type {!number} */
	var m42$31;
	/** @type {!number} */
	var m43$30;
	/** @type {!number} */
	var m44$30;
	/** @type {!number} */
	var m13$31;
	/** @type {!number} */
	var m23$31;
	/** @type {!number} */
	var m33$31;
	/** @type {!number} */
	var m43$31;
	/** @type {!number} */
	var m14$31;
	/** @type {!number} */
	var m24$31;
	/** @type {!number} */
	var m34$31;
	/** @type {!number} */
	var m44$31;
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
			gl$0 = Kingyo.gl;
			prog$0 = Kingyo.prog;
			gl$0.uniform3fv(Kingyo.ulocs.color, k._color);
			gl$0.uniform3fv(Kingyo.ulocs.color2, k._color2);
			gl$0.uniform4fv(Kingyo.ulocs.color2pos, k._color2pos);
			modelMatLoc$0 = Kingyo.ulocs.modelMatrix;
			s$0 = Math.sin(k._anim * 5);
			this$19$0 = new M44$();
			v$0$0 = k._pos;
			x$0$0$0 = v$0$0.x;
			y$0$0$0 = v$0$0.y;
			z$0$0$0 = v$0$0.z;
			this$19$0.m11 = this$19$0.m22 = this$19$0.m33 = this$19$0.m44 = 1;
			this$19$0.m21 = this$19$0.m31 = this$19$0.m41 = this$19$0.m12 = this$19$0.m32 = this$19$0.m42 = this$19$0.m13 = this$19$0.m23 = this$19$0.m24 = this$19$0.m14 = this$19$0.m24 = this$19$0.m34 = 0;
			this$19$0;
			this$19$0.m14 = x$0$0$0;
			this$19$0.m24 = y$0$0$0;
			this$19$0.m34 = z$0$0$0;
			this$17$0 = this$19$0;
			m$11$0 = k._spinMat;
			m0$0$11$0 = new M44$LM44$(this$17$0);
			this$17$0.m11 = (m11$1 = m0$0$11$0.m11) * (m11$0 = m$11$0.m11) + (m12$0 = m0$0$11$0.m12) * (m21$0 = m$11$0.m21) + (m13$0 = m0$0$11$0.m13) * (m31$0 = m$11$0.m31) + (m14$0 = m0$0$11$0.m14) * (m41$0 = m$11$0.m41);
			this$17$0.m21 = (m21$1 = m0$0$11$0.m21) * m11$0 + (m22$0 = m0$0$11$0.m22) * m21$0 + (m23$0 = m0$0$11$0.m23) * m31$0 + (m24$0 = m0$0$11$0.m24) * m41$0;
			this$17$0.m31 = (m31$1 = m0$0$11$0.m31) * m11$0 + (m32$1 = m0$0$11$0.m32) * m21$0 + (m33$0 = m0$0$11$0.m33) * m31$0 + (m34$0 = m0$0$11$0.m34) * m41$0;
			this$17$0.m41 = (m41$1 = m0$0$11$0.m41) * m11$0 + (m42$1 = m0$0$11$0.m42) * m21$0 + (m43$0 = m0$0$11$0.m43) * m31$0 + (m44$0 = m0$0$11$0.m44) * m41$0;
			this$17$0.m12 = m11$1 * (m12$1 = m$11$0.m12) + m12$0 * (m22$1 = m$11$0.m22) + m13$0 * (m32$0 = m$11$0.m32) + m14$0 * (m42$0 = m$11$0.m42);
			this$17$0.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
			this$17$0.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
			this$17$0.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
			this$17$0.m13 = m11$1 * (m13$1 = m$11$0.m13) + m12$0 * (m23$1 = m$11$0.m23) + m13$0 * (m33$1 = m$11$0.m33) + m14$0 * (m43$1 = m$11$0.m43);
			this$17$0.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
			this$17$0.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
			this$17$0.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
			this$17$0.m14 = m11$1 * (m14$1 = m$11$0.m14) + m12$0 * (m24$1 = m$11$0.m24) + m13$0 * (m34$1 = m$11$0.m34) + m14$0 * (m44$1 = m$11$0.m44);
			this$17$0.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
			this$17$0.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
			this$17$0.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
			this$11$0 = this$17$0;
			this$18$0 = new M44$();
			rad$0$0 = k._vangle - s$0 / 10;
			m$10$0 = this$18$0.setRotate$NNNN(rad$0$0, 0, 0, 1);
			m0$0$10$0 = new M44$LM44$(this$11$0);
			this$11$0.m11 = (m11$3 = m0$0$10$0.m11) * (m11$2 = m$10$0.m11) + (m12$2 = m0$0$10$0.m12) * (m21$2 = m$10$0.m21) + (m13$2 = m0$0$10$0.m13) * (m31$2 = m$10$0.m31) + (m14$2 = m0$0$10$0.m14) * (m41$2 = m$10$0.m41);
			this$11$0.m21 = (m21$3 = m0$0$10$0.m21) * m11$2 + (m22$2 = m0$0$10$0.m22) * m21$2 + (m23$2 = m0$0$10$0.m23) * m31$2 + (m24$2 = m0$0$10$0.m24) * m41$2;
			this$11$0.m31 = (m31$3 = m0$0$10$0.m31) * m11$2 + (m32$3 = m0$0$10$0.m32) * m21$2 + (m33$2 = m0$0$10$0.m33) * m31$2 + (m34$2 = m0$0$10$0.m34) * m41$2;
			this$11$0.m41 = (m41$3 = m0$0$10$0.m41) * m11$2 + (m42$3 = m0$0$10$0.m42) * m21$2 + (m43$2 = m0$0$10$0.m43) * m31$2 + (m44$2 = m0$0$10$0.m44) * m41$2;
			this$11$0.m12 = m11$3 * (m12$3 = m$10$0.m12) + m12$2 * (m22$3 = m$10$0.m22) + m13$2 * (m32$2 = m$10$0.m32) + m14$2 * (m42$2 = m$10$0.m42);
			this$11$0.m22 = m21$3 * m12$3 + m22$2 * m22$3 + m23$2 * m32$2 + m24$2 * m42$2;
			this$11$0.m32 = m31$3 * m12$3 + m32$3 * m22$3 + m33$2 * m32$2 + m34$2 * m42$2;
			this$11$0.m42 = m41$3 * m12$3 + m42$3 * m22$3 + m43$2 * m32$2 + m44$2 * m42$2;
			this$11$0.m13 = m11$3 * (m13$3 = m$10$0.m13) + m12$2 * (m23$3 = m$10$0.m23) + m13$2 * (m33$3 = m$10$0.m33) + m14$2 * (m43$3 = m$10$0.m43);
			this$11$0.m23 = m21$3 * m13$3 + m22$2 * m23$3 + m23$2 * m33$3 + m24$2 * m43$3;
			this$11$0.m33 = m31$3 * m13$3 + m32$3 * m23$3 + m33$2 * m33$3 + m34$2 * m43$3;
			this$11$0.m43 = m41$3 * m13$3 + m42$3 * m23$3 + m43$2 * m33$3 + m44$2 * m43$3;
			this$11$0.m14 = m11$3 * (m14$3 = m$10$0.m14) + m12$2 * (m24$3 = m$10$0.m24) + m13$2 * (m34$3 = m$10$0.m34) + m14$2 * (m44$3 = m$10$0.m44);
			this$11$0.m24 = m21$3 * m14$3 + m22$2 * m24$3 + m23$2 * m34$3 + m24$2 * m44$3;
			this$11$0.m34 = m31$3 * m14$3 + m32$3 * m24$3 + m33$2 * m34$3 + m34$2 * m44$3;
			this$11$0.m44 = m41$3 * m14$3 + m42$3 * m24$3 + m43$2 * m34$3 + m44$2 * m44$3;
			this$5$0 = this$11$0;
			this$12$0 = new M44$();
			m$5$0 = this$12$0.setRotate$NNNN(1.5707963267948966, 1, 0, 0);
			m0$0$5$0 = new M44$LM44$(this$5$0);
			this$5$0.m11 = (m11$5 = m0$0$5$0.m11) * (m11$4 = m$5$0.m11) + (m12$4 = m0$0$5$0.m12) * (m21$4 = m$5$0.m21) + (m13$4 = m0$0$5$0.m13) * (m31$4 = m$5$0.m31) + (m14$4 = m0$0$5$0.m14) * (m41$4 = m$5$0.m41);
			this$5$0.m21 = (m21$5 = m0$0$5$0.m21) * m11$4 + (m22$4 = m0$0$5$0.m22) * m21$4 + (m23$4 = m0$0$5$0.m23) * m31$4 + (m24$4 = m0$0$5$0.m24) * m41$4;
			this$5$0.m31 = (m31$5 = m0$0$5$0.m31) * m11$4 + (m32$5 = m0$0$5$0.m32) * m21$4 + (m33$4 = m0$0$5$0.m33) * m31$4 + (m34$4 = m0$0$5$0.m34) * m41$4;
			this$5$0.m41 = (m41$5 = m0$0$5$0.m41) * m11$4 + (m42$5 = m0$0$5$0.m42) * m21$4 + (m43$4 = m0$0$5$0.m43) * m31$4 + (m44$4 = m0$0$5$0.m44) * m41$4;
			this$5$0.m12 = m11$5 * (m12$5 = m$5$0.m12) + m12$4 * (m22$5 = m$5$0.m22) + m13$4 * (m32$4 = m$5$0.m32) + m14$4 * (m42$4 = m$5$0.m42);
			this$5$0.m22 = m21$5 * m12$5 + m22$4 * m22$5 + m23$4 * m32$4 + m24$4 * m42$4;
			this$5$0.m32 = m31$5 * m12$5 + m32$5 * m22$5 + m33$4 * m32$4 + m34$4 * m42$4;
			this$5$0.m42 = m41$5 * m12$5 + m42$5 * m22$5 + m43$4 * m32$4 + m44$4 * m42$4;
			this$5$0.m13 = m11$5 * (m13$5 = m$5$0.m13) + m12$4 * (m23$5 = m$5$0.m23) + m13$4 * (m33$5 = m$5$0.m33) + m14$4 * (m43$5 = m$5$0.m43);
			this$5$0.m23 = m21$5 * m13$5 + m22$4 * m23$5 + m23$4 * m33$5 + m24$4 * m43$5;
			this$5$0.m33 = m31$5 * m13$5 + m32$5 * m23$5 + m33$4 * m33$5 + m34$4 * m43$5;
			this$5$0.m43 = m41$5 * m13$5 + m42$5 * m23$5 + m43$4 * m33$5 + m44$4 * m43$5;
			this$5$0.m14 = m11$5 * (m14$5 = m$5$0.m14) + m12$4 * (m24$5 = m$5$0.m24) + m13$4 * (m34$5 = m$5$0.m34) + m14$4 * (m44$5 = m$5$0.m44);
			this$5$0.m24 = m21$5 * m14$5 + m22$4 * m24$5 + m23$4 * m34$5 + m24$4 * m44$5;
			this$5$0.m34 = m31$5 * m14$5 + m32$5 * m24$5 + m33$4 * m34$5 + m34$4 * m44$5;
			this$5$0.m44 = m41$5 * m14$5 + m42$5 * m24$5 + m43$4 * m34$5 + m44$4 * m44$5;
			this$0$0 = this$5$0;
			this$6$0 = new M44$();
			m$0$0 = this$6$0.setRotate$NNNN(1.5707963267948966, 0, 1, 0);
			m0$0$0$0 = new M44$LM44$(this$0$0);
			this$0$0.m11 = (m11$7 = m0$0$0$0.m11) * (m11$6 = m$0$0.m11) + (m12$6 = m0$0$0$0.m12) * (m21$6 = m$0$0.m21) + (m13$6 = m0$0$0$0.m13) * (m31$6 = m$0$0.m31) + (m14$6 = m0$0$0$0.m14) * (m41$6 = m$0$0.m41);
			this$0$0.m21 = (m21$7 = m0$0$0$0.m21) * m11$6 + (m22$6 = m0$0$0$0.m22) * m21$6 + (m23$6 = m0$0$0$0.m23) * m31$6 + (m24$6 = m0$0$0$0.m24) * m41$6;
			this$0$0.m31 = (m31$7 = m0$0$0$0.m31) * m11$6 + (m32$7 = m0$0$0$0.m32) * m21$6 + (m33$6 = m0$0$0$0.m33) * m31$6 + (m34$6 = m0$0$0$0.m34) * m41$6;
			this$0$0.m41 = (m41$7 = m0$0$0$0.m41) * m11$6 + (m42$7 = m0$0$0$0.m42) * m21$6 + (m43$6 = m0$0$0$0.m43) * m31$6 + (m44$6 = m0$0$0$0.m44) * m41$6;
			this$0$0.m12 = m11$7 * (m12$7 = m$0$0.m12) + m12$6 * (m22$7 = m$0$0.m22) + m13$6 * (m32$6 = m$0$0.m32) + m14$6 * (m42$6 = m$0$0.m42);
			this$0$0.m22 = m21$7 * m12$7 + m22$6 * m22$7 + m23$6 * m32$6 + m24$6 * m42$6;
			this$0$0.m32 = m31$7 * m12$7 + m32$7 * m22$7 + m33$6 * m32$6 + m34$6 * m42$6;
			this$0$0.m42 = m41$7 * m12$7 + m42$7 * m22$7 + m43$6 * m32$6 + m44$6 * m42$6;
			this$0$0.m13 = m11$7 * (m13$7 = m$0$0.m13) + m12$6 * (m23$7 = m$0$0.m23) + m13$6 * (m33$7 = m$0$0.m33) + m14$6 * (m43$7 = m$0$0.m43);
			this$0$0.m23 = m21$7 * m13$7 + m22$6 * m23$7 + m23$6 * m33$7 + m24$6 * m43$7;
			this$0$0.m33 = m31$7 * m13$7 + m32$7 * m23$7 + m33$6 * m33$7 + m34$6 * m43$7;
			this$0$0.m43 = m41$7 * m13$7 + m42$7 * m23$7 + m43$6 * m33$7 + m44$6 * m43$7;
			this$0$0.m14 = m11$7 * (m14$7 = m$0$0.m14) + m12$6 * (m24$7 = m$0$0.m24) + m13$6 * (m34$7 = m$0$0.m34) + m14$6 * (m44$7 = m$0$0.m44);
			this$0$0.m24 = m21$7 * m14$7 + m22$6 * m24$7 + m23$6 * m34$7 + m24$6 * m44$7;
			this$0$0.m34 = m31$7 * m14$7 + m32$7 * m24$7 + m33$6 * m34$7 + m34$6 * m44$7;
			this$0$0.m44 = m41$7 * m14$7 + m42$7 * m24$7 + m43$6 * m34$7 + m44$6 * m44$7;
			bodyMat$0 = this$0$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, [ bodyMat$0.m11, bodyMat$0.m21, bodyMat$0.m31, bodyMat$0.m41, bodyMat$0.m12, bodyMat$0.m22, bodyMat$0.m32, bodyMat$0.m42, bodyMat$0.m13, bodyMat$0.m23, bodyMat$0.m33, bodyMat$0.m43, bodyMat$0.m14, bodyMat$0.m24, bodyMat$0.m34, bodyMat$0.m44 ]);
			p$0$0 = Kingyo.body;
			gl$0$0 = Kingyo.gl;
			prog$0$0 = Kingyo.prog;
			gl$0$0.bindBuffer(gl$0$0.ARRAY_BUFFER, p$0$0.vbuf);
			gl$0$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:332] null access");
				}
				return v;
			}(Kingyo.alocs.vertex)), 3, gl$0$0.FLOAT, false, 0, 0);
			gl$0$0.bindBuffer(gl$0$0.ARRAY_BUFFER, p$0$0.nbuf);
			gl$0$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:335] null access");
				}
				return v;
			}(Kingyo.alocs.normal)), 3, gl$0$0.FLOAT, false, 0, 0);
			gl$0$0.bindBuffer(gl$0$0.ELEMENT_ARRAY_BUFFER, p$0$0.ibuf);
			gl$0$0.drawElements(gl$0$0.TRIANGLES, p$0$0.numi, gl$0$0.UNSIGNED_SHORT, 0);
			this$7$0 = new M44$LM44$(bodyMat$0);
			this$13$0 = new M44$();
			this$13$0.m11 = this$13$0.m22 = this$13$0.m33 = this$13$0.m44 = 1;
			this$13$0.m21 = this$13$0.m31 = this$13$0.m41 = this$13$0.m12 = this$13$0.m32 = this$13$0.m42 = this$13$0.m13 = this$13$0.m23 = this$13$0.m24 = this$13$0.m14 = this$13$0.m24 = this$13$0.m34 = 0;
			this$13$0;
			this$13$0.m14 = 0.5;
			this$13$0.m24 = -0.3;
			this$13$0.m34 = 0;
			m$6$0 = this$13$0;
			m0$0$6$0 = new M44$LM44$(this$7$0);
			this$7$0.m11 = (m11$9 = m0$0$6$0.m11) * (m11$8 = m$6$0.m11) + (m12$8 = m0$0$6$0.m12) * (m21$8 = m$6$0.m21) + (m13$8 = m0$0$6$0.m13) * (m31$8 = m$6$0.m31) + (m14$8 = m0$0$6$0.m14) * (m41$8 = m$6$0.m41);
			this$7$0.m21 = (m21$9 = m0$0$6$0.m21) * m11$8 + (m22$8 = m0$0$6$0.m22) * m21$8 + (m23$8 = m0$0$6$0.m23) * m31$8 + (m24$8 = m0$0$6$0.m24) * m41$8;
			this$7$0.m31 = (m31$9 = m0$0$6$0.m31) * m11$8 + (m32$9 = m0$0$6$0.m32) * m21$8 + (m33$8 = m0$0$6$0.m33) * m31$8 + (m34$8 = m0$0$6$0.m34) * m41$8;
			this$7$0.m41 = (m41$9 = m0$0$6$0.m41) * m11$8 + (m42$9 = m0$0$6$0.m42) * m21$8 + (m43$8 = m0$0$6$0.m43) * m31$8 + (m44$8 = m0$0$6$0.m44) * m41$8;
			this$7$0.m12 = m11$9 * (m12$9 = m$6$0.m12) + m12$8 * (m22$9 = m$6$0.m22) + m13$8 * (m32$8 = m$6$0.m32) + m14$8 * (m42$8 = m$6$0.m42);
			this$7$0.m22 = m21$9 * m12$9 + m22$8 * m22$9 + m23$8 * m32$8 + m24$8 * m42$8;
			this$7$0.m32 = m31$9 * m12$9 + m32$9 * m22$9 + m33$8 * m32$8 + m34$8 * m42$8;
			this$7$0.m42 = m41$9 * m12$9 + m42$9 * m22$9 + m43$8 * m32$8 + m44$8 * m42$8;
			this$7$0.m13 = m11$9 * (m13$9 = m$6$0.m13) + m12$8 * (m23$9 = m$6$0.m23) + m13$8 * (m33$9 = m$6$0.m33) + m14$8 * (m43$9 = m$6$0.m43);
			this$7$0.m23 = m21$9 * m13$9 + m22$8 * m23$9 + m23$8 * m33$9 + m24$8 * m43$9;
			this$7$0.m33 = m31$9 * m13$9 + m32$9 * m23$9 + m33$8 * m33$9 + m34$8 * m43$9;
			this$7$0.m43 = m41$9 * m13$9 + m42$9 * m23$9 + m43$8 * m33$9 + m44$8 * m43$9;
			this$7$0.m14 = m11$9 * (m14$9 = m$6$0.m14) + m12$8 * (m24$9 = m$6$0.m24) + m13$8 * (m34$9 = m$6$0.m34) + m14$8 * (m44$9 = m$6$0.m44);
			this$7$0.m24 = m21$9 * m14$9 + m22$8 * m24$9 + m23$8 * m34$9 + m24$8 * m44$9;
			this$7$0.m34 = m31$9 * m14$9 + m32$9 * m24$9 + m33$8 * m34$9 + m34$8 * m44$9;
			this$7$0.m44 = m41$9 * m14$9 + m42$9 * m24$9 + m43$8 * m34$9 + m44$8 * m44$9;
			this$1$0 = this$7$0;
			m$1$0 = new M44$().setRotate$NNNN(1 + s$0 / 2, 0.2, 1, -0.5);
			m0$0$1$0 = new M44$LM44$(this$1$0);
			this$1$0.m11 = (m11$11 = m0$0$1$0.m11) * (m11$10 = m$1$0.m11) + (m12$10 = m0$0$1$0.m12) * (m21$10 = m$1$0.m21) + (m13$10 = m0$0$1$0.m13) * (m31$10 = m$1$0.m31) + (m14$10 = m0$0$1$0.m14) * (m41$10 = m$1$0.m41);
			this$1$0.m21 = (m21$11 = m0$0$1$0.m21) * m11$10 + (m22$10 = m0$0$1$0.m22) * m21$10 + (m23$10 = m0$0$1$0.m23) * m31$10 + (m24$10 = m0$0$1$0.m24) * m41$10;
			this$1$0.m31 = (m31$11 = m0$0$1$0.m31) * m11$10 + (m32$11 = m0$0$1$0.m32) * m21$10 + (m33$10 = m0$0$1$0.m33) * m31$10 + (m34$10 = m0$0$1$0.m34) * m41$10;
			this$1$0.m41 = (m41$11 = m0$0$1$0.m41) * m11$10 + (m42$11 = m0$0$1$0.m42) * m21$10 + (m43$10 = m0$0$1$0.m43) * m31$10 + (m44$10 = m0$0$1$0.m44) * m41$10;
			this$1$0.m12 = m11$11 * (m12$11 = m$1$0.m12) + m12$10 * (m22$11 = m$1$0.m22) + m13$10 * (m32$10 = m$1$0.m32) + m14$10 * (m42$10 = m$1$0.m42);
			this$1$0.m22 = m21$11 * m12$11 + m22$10 * m22$11 + m23$10 * m32$10 + m24$10 * m42$10;
			this$1$0.m32 = m31$11 * m12$11 + m32$11 * m22$11 + m33$10 * m32$10 + m34$10 * m42$10;
			this$1$0.m42 = m41$11 * m12$11 + m42$11 * m22$11 + m43$10 * m32$10 + m44$10 * m42$10;
			this$1$0.m13 = m11$11 * (m13$11 = m$1$0.m13) + m12$10 * (m23$11 = m$1$0.m23) + m13$10 * (m33$11 = m$1$0.m33) + m14$10 * (m43$11 = m$1$0.m43);
			this$1$0.m23 = m21$11 * m13$11 + m22$10 * m23$11 + m23$10 * m33$11 + m24$10 * m43$11;
			this$1$0.m33 = m31$11 * m13$11 + m32$11 * m23$11 + m33$10 * m33$11 + m34$10 * m43$11;
			this$1$0.m43 = m41$11 * m13$11 + m42$11 * m23$11 + m43$10 * m33$11 + m44$10 * m43$11;
			this$1$0.m14 = m11$11 * (m14$11 = m$1$0.m14) + m12$10 * (m24$11 = m$1$0.m24) + m13$10 * (m34$11 = m$1$0.m34) + m14$10 * (m44$11 = m$1$0.m44);
			this$1$0.m24 = m21$11 * m14$11 + m22$10 * m24$11 + m23$10 * m34$11 + m24$10 * m44$11;
			this$1$0.m34 = m31$11 * m14$11 + m32$11 * m24$11 + m33$10 * m34$11 + m34$10 * m44$11;
			this$1$0.m44 = m41$11 * m14$11 + m42$11 * m24$11 + m43$10 * m34$11 + m44$10 * m44$11;
			lfinMat$0 = this$1$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, [ lfinMat$0.m11, lfinMat$0.m21, lfinMat$0.m31, lfinMat$0.m41, lfinMat$0.m12, lfinMat$0.m22, lfinMat$0.m32, lfinMat$0.m42, lfinMat$0.m13, lfinMat$0.m23, lfinMat$0.m33, lfinMat$0.m43, lfinMat$0.m14, lfinMat$0.m24, lfinMat$0.m34, lfinMat$0.m44 ]);
			p$1$0 = Kingyo.lfin;
			gl$1$0 = Kingyo.gl;
			prog$1$0 = Kingyo.prog;
			gl$1$0.bindBuffer(gl$1$0.ARRAY_BUFFER, p$1$0.vbuf);
			gl$1$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:332] null access");
				}
				return v;
			}(Kingyo.alocs.vertex)), 3, gl$1$0.FLOAT, false, 0, 0);
			gl$1$0.bindBuffer(gl$1$0.ARRAY_BUFFER, p$1$0.nbuf);
			gl$1$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:335] null access");
				}
				return v;
			}(Kingyo.alocs.normal)), 3, gl$1$0.FLOAT, false, 0, 0);
			gl$1$0.bindBuffer(gl$1$0.ELEMENT_ARRAY_BUFFER, p$1$0.ibuf);
			gl$1$0.drawElements(gl$1$0.TRIANGLES, p$1$0.numi, gl$1$0.UNSIGNED_SHORT, 0);
			this$8$0 = new M44$LM44$(bodyMat$0);
			this$14$0 = new M44$();
			this$14$0.m11 = this$14$0.m22 = this$14$0.m33 = this$14$0.m44 = 1;
			this$14$0.m21 = this$14$0.m31 = this$14$0.m41 = this$14$0.m12 = this$14$0.m32 = this$14$0.m42 = this$14$0.m13 = this$14$0.m23 = this$14$0.m24 = this$14$0.m14 = this$14$0.m24 = this$14$0.m34 = 0;
			this$14$0;
			this$14$0.m14 = -0.5;
			this$14$0.m24 = -0.3;
			this$14$0.m34 = 0;
			m$7$0 = this$14$0;
			m0$0$7$0 = new M44$LM44$(this$8$0);
			this$8$0.m11 = (m11$13 = m0$0$7$0.m11) * (m11$12 = m$7$0.m11) + (m12$12 = m0$0$7$0.m12) * (m21$12 = m$7$0.m21) + (m13$12 = m0$0$7$0.m13) * (m31$12 = m$7$0.m31) + (m14$12 = m0$0$7$0.m14) * (m41$12 = m$7$0.m41);
			this$8$0.m21 = (m21$13 = m0$0$7$0.m21) * m11$12 + (m22$12 = m0$0$7$0.m22) * m21$12 + (m23$12 = m0$0$7$0.m23) * m31$12 + (m24$12 = m0$0$7$0.m24) * m41$12;
			this$8$0.m31 = (m31$13 = m0$0$7$0.m31) * m11$12 + (m32$13 = m0$0$7$0.m32) * m21$12 + (m33$12 = m0$0$7$0.m33) * m31$12 + (m34$12 = m0$0$7$0.m34) * m41$12;
			this$8$0.m41 = (m41$13 = m0$0$7$0.m41) * m11$12 + (m42$13 = m0$0$7$0.m42) * m21$12 + (m43$12 = m0$0$7$0.m43) * m31$12 + (m44$12 = m0$0$7$0.m44) * m41$12;
			this$8$0.m12 = m11$13 * (m12$13 = m$7$0.m12) + m12$12 * (m22$13 = m$7$0.m22) + m13$12 * (m32$12 = m$7$0.m32) + m14$12 * (m42$12 = m$7$0.m42);
			this$8$0.m22 = m21$13 * m12$13 + m22$12 * m22$13 + m23$12 * m32$12 + m24$12 * m42$12;
			this$8$0.m32 = m31$13 * m12$13 + m32$13 * m22$13 + m33$12 * m32$12 + m34$12 * m42$12;
			this$8$0.m42 = m41$13 * m12$13 + m42$13 * m22$13 + m43$12 * m32$12 + m44$12 * m42$12;
			this$8$0.m13 = m11$13 * (m13$13 = m$7$0.m13) + m12$12 * (m23$13 = m$7$0.m23) + m13$12 * (m33$13 = m$7$0.m33) + m14$12 * (m43$13 = m$7$0.m43);
			this$8$0.m23 = m21$13 * m13$13 + m22$12 * m23$13 + m23$12 * m33$13 + m24$12 * m43$13;
			this$8$0.m33 = m31$13 * m13$13 + m32$13 * m23$13 + m33$12 * m33$13 + m34$12 * m43$13;
			this$8$0.m43 = m41$13 * m13$13 + m42$13 * m23$13 + m43$12 * m33$13 + m44$12 * m43$13;
			this$8$0.m14 = m11$13 * (m14$13 = m$7$0.m14) + m12$12 * (m24$13 = m$7$0.m24) + m13$12 * (m34$13 = m$7$0.m34) + m14$12 * (m44$13 = m$7$0.m44);
			this$8$0.m24 = m21$13 * m14$13 + m22$12 * m24$13 + m23$12 * m34$13 + m24$12 * m44$13;
			this$8$0.m34 = m31$13 * m14$13 + m32$13 * m24$13 + m33$12 * m34$13 + m34$12 * m44$13;
			this$8$0.m44 = m41$13 * m14$13 + m42$13 * m24$13 + m43$12 * m34$13 + m44$12 * m44$13;
			this$2$0 = this$8$0;
			m$2$0 = new M44$().setRotate$NNNN(-1 - s$0 / 2, -0.2, 1, -0.5);
			m0$0$2$0 = new M44$LM44$(this$2$0);
			this$2$0.m11 = (m11$15 = m0$0$2$0.m11) * (m11$14 = m$2$0.m11) + (m12$14 = m0$0$2$0.m12) * (m21$14 = m$2$0.m21) + (m13$14 = m0$0$2$0.m13) * (m31$14 = m$2$0.m31) + (m14$14 = m0$0$2$0.m14) * (m41$14 = m$2$0.m41);
			this$2$0.m21 = (m21$15 = m0$0$2$0.m21) * m11$14 + (m22$14 = m0$0$2$0.m22) * m21$14 + (m23$14 = m0$0$2$0.m23) * m31$14 + (m24$14 = m0$0$2$0.m24) * m41$14;
			this$2$0.m31 = (m31$15 = m0$0$2$0.m31) * m11$14 + (m32$15 = m0$0$2$0.m32) * m21$14 + (m33$14 = m0$0$2$0.m33) * m31$14 + (m34$14 = m0$0$2$0.m34) * m41$14;
			this$2$0.m41 = (m41$15 = m0$0$2$0.m41) * m11$14 + (m42$15 = m0$0$2$0.m42) * m21$14 + (m43$14 = m0$0$2$0.m43) * m31$14 + (m44$14 = m0$0$2$0.m44) * m41$14;
			this$2$0.m12 = m11$15 * (m12$15 = m$2$0.m12) + m12$14 * (m22$15 = m$2$0.m22) + m13$14 * (m32$14 = m$2$0.m32) + m14$14 * (m42$14 = m$2$0.m42);
			this$2$0.m22 = m21$15 * m12$15 + m22$14 * m22$15 + m23$14 * m32$14 + m24$14 * m42$14;
			this$2$0.m32 = m31$15 * m12$15 + m32$15 * m22$15 + m33$14 * m32$14 + m34$14 * m42$14;
			this$2$0.m42 = m41$15 * m12$15 + m42$15 * m22$15 + m43$14 * m32$14 + m44$14 * m42$14;
			this$2$0.m13 = m11$15 * (m13$15 = m$2$0.m13) + m12$14 * (m23$15 = m$2$0.m23) + m13$14 * (m33$15 = m$2$0.m33) + m14$14 * (m43$15 = m$2$0.m43);
			this$2$0.m23 = m21$15 * m13$15 + m22$14 * m23$15 + m23$14 * m33$15 + m24$14 * m43$15;
			this$2$0.m33 = m31$15 * m13$15 + m32$15 * m23$15 + m33$14 * m33$15 + m34$14 * m43$15;
			this$2$0.m43 = m41$15 * m13$15 + m42$15 * m23$15 + m43$14 * m33$15 + m44$14 * m43$15;
			this$2$0.m14 = m11$15 * (m14$15 = m$2$0.m14) + m12$14 * (m24$15 = m$2$0.m24) + m13$14 * (m34$15 = m$2$0.m34) + m14$14 * (m44$15 = m$2$0.m44);
			this$2$0.m24 = m21$15 * m14$15 + m22$14 * m24$15 + m23$14 * m34$15 + m24$14 * m44$15;
			this$2$0.m34 = m31$15 * m14$15 + m32$15 * m24$15 + m33$14 * m34$15 + m34$14 * m44$15;
			this$2$0.m44 = m41$15 * m14$15 + m42$15 * m24$15 + m43$14 * m34$15 + m44$14 * m44$15;
			rfinMat$0 = this$2$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, [ rfinMat$0.m11, rfinMat$0.m21, rfinMat$0.m31, rfinMat$0.m41, rfinMat$0.m12, rfinMat$0.m22, rfinMat$0.m32, rfinMat$0.m42, rfinMat$0.m13, rfinMat$0.m23, rfinMat$0.m33, rfinMat$0.m43, rfinMat$0.m14, rfinMat$0.m24, rfinMat$0.m34, rfinMat$0.m44 ]);
			p$2$0 = Kingyo.rfin;
			gl$2$0 = Kingyo.gl;
			prog$2$0 = Kingyo.prog;
			gl$2$0.bindBuffer(gl$2$0.ARRAY_BUFFER, p$2$0.vbuf);
			gl$2$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:332] null access");
				}
				return v;
			}(Kingyo.alocs.vertex)), 3, gl$2$0.FLOAT, false, 0, 0);
			gl$2$0.bindBuffer(gl$2$0.ARRAY_BUFFER, p$2$0.nbuf);
			gl$2$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:335] null access");
				}
				return v;
			}(Kingyo.alocs.normal)), 3, gl$2$0.FLOAT, false, 0, 0);
			gl$2$0.bindBuffer(gl$2$0.ELEMENT_ARRAY_BUFFER, p$2$0.ibuf);
			gl$2$0.drawElements(gl$2$0.TRIANGLES, p$2$0.numi, gl$2$0.UNSIGNED_SHORT, 0);
			this$9$0 = new M44$LM44$(bodyMat$0);
			this$15$0 = new M44$();
			this$15$0.m11 = this$15$0.m22 = this$15$0.m33 = this$15$0.m44 = 1;
			this$15$0.m21 = this$15$0.m31 = this$15$0.m41 = this$15$0.m12 = this$15$0.m32 = this$15$0.m42 = this$15$0.m13 = this$15$0.m23 = this$15$0.m24 = this$15$0.m14 = this$15$0.m24 = this$15$0.m34 = 0;
			this$15$0;
			this$15$0.m14 = 0;
			this$15$0.m24 = 0.7;
			this$15$0.m34 = 0;
			m$8$0 = this$15$0;
			m0$0$8$0 = new M44$LM44$(this$9$0);
			this$9$0.m11 = (m11$17 = m0$0$8$0.m11) * (m11$16 = m$8$0.m11) + (m12$16 = m0$0$8$0.m12) * (m21$16 = m$8$0.m21) + (m13$16 = m0$0$8$0.m13) * (m31$16 = m$8$0.m31) + (m14$16 = m0$0$8$0.m14) * (m41$16 = m$8$0.m41);
			this$9$0.m21 = (m21$17 = m0$0$8$0.m21) * m11$16 + (m22$16 = m0$0$8$0.m22) * m21$16 + (m23$16 = m0$0$8$0.m23) * m31$16 + (m24$16 = m0$0$8$0.m24) * m41$16;
			this$9$0.m31 = (m31$17 = m0$0$8$0.m31) * m11$16 + (m32$17 = m0$0$8$0.m32) * m21$16 + (m33$16 = m0$0$8$0.m33) * m31$16 + (m34$16 = m0$0$8$0.m34) * m41$16;
			this$9$0.m41 = (m41$17 = m0$0$8$0.m41) * m11$16 + (m42$17 = m0$0$8$0.m42) * m21$16 + (m43$16 = m0$0$8$0.m43) * m31$16 + (m44$16 = m0$0$8$0.m44) * m41$16;
			this$9$0.m12 = m11$17 * (m12$17 = m$8$0.m12) + m12$16 * (m22$17 = m$8$0.m22) + m13$16 * (m32$16 = m$8$0.m32) + m14$16 * (m42$16 = m$8$0.m42);
			this$9$0.m22 = m21$17 * m12$17 + m22$16 * m22$17 + m23$16 * m32$16 + m24$16 * m42$16;
			this$9$0.m32 = m31$17 * m12$17 + m32$17 * m22$17 + m33$16 * m32$16 + m34$16 * m42$16;
			this$9$0.m42 = m41$17 * m12$17 + m42$17 * m22$17 + m43$16 * m32$16 + m44$16 * m42$16;
			this$9$0.m13 = m11$17 * (m13$17 = m$8$0.m13) + m12$16 * (m23$17 = m$8$0.m23) + m13$16 * (m33$17 = m$8$0.m33) + m14$16 * (m43$17 = m$8$0.m43);
			this$9$0.m23 = m21$17 * m13$17 + m22$16 * m23$17 + m23$16 * m33$17 + m24$16 * m43$17;
			this$9$0.m33 = m31$17 * m13$17 + m32$17 * m23$17 + m33$16 * m33$17 + m34$16 * m43$17;
			this$9$0.m43 = m41$17 * m13$17 + m42$17 * m23$17 + m43$16 * m33$17 + m44$16 * m43$17;
			this$9$0.m14 = m11$17 * (m14$17 = m$8$0.m14) + m12$16 * (m24$17 = m$8$0.m24) + m13$16 * (m34$17 = m$8$0.m34) + m14$16 * (m44$17 = m$8$0.m44);
			this$9$0.m24 = m21$17 * m14$17 + m22$16 * m24$17 + m23$16 * m34$17 + m24$16 * m44$17;
			this$9$0.m34 = m31$17 * m14$17 + m32$17 * m24$17 + m33$16 * m34$17 + m34$16 * m44$17;
			this$9$0.m44 = m41$17 * m14$17 + m42$17 * m24$17 + m43$16 * m34$17 + m44$16 * m44$17;
			this$3$0 = this$9$0;
			m$3$0 = new M44$().setRotate$NNNN(s$0 / 2, 0, 1, 1);
			m0$0$3$0 = new M44$LM44$(this$3$0);
			this$3$0.m11 = (m11$19 = m0$0$3$0.m11) * (m11$18 = m$3$0.m11) + (m12$18 = m0$0$3$0.m12) * (m21$18 = m$3$0.m21) + (m13$18 = m0$0$3$0.m13) * (m31$18 = m$3$0.m31) + (m14$18 = m0$0$3$0.m14) * (m41$18 = m$3$0.m41);
			this$3$0.m21 = (m21$19 = m0$0$3$0.m21) * m11$18 + (m22$18 = m0$0$3$0.m22) * m21$18 + (m23$18 = m0$0$3$0.m23) * m31$18 + (m24$18 = m0$0$3$0.m24) * m41$18;
			this$3$0.m31 = (m31$19 = m0$0$3$0.m31) * m11$18 + (m32$19 = m0$0$3$0.m32) * m21$18 + (m33$18 = m0$0$3$0.m33) * m31$18 + (m34$18 = m0$0$3$0.m34) * m41$18;
			this$3$0.m41 = (m41$19 = m0$0$3$0.m41) * m11$18 + (m42$19 = m0$0$3$0.m42) * m21$18 + (m43$18 = m0$0$3$0.m43) * m31$18 + (m44$18 = m0$0$3$0.m44) * m41$18;
			this$3$0.m12 = m11$19 * (m12$19 = m$3$0.m12) + m12$18 * (m22$19 = m$3$0.m22) + m13$18 * (m32$18 = m$3$0.m32) + m14$18 * (m42$18 = m$3$0.m42);
			this$3$0.m22 = m21$19 * m12$19 + m22$18 * m22$19 + m23$18 * m32$18 + m24$18 * m42$18;
			this$3$0.m32 = m31$19 * m12$19 + m32$19 * m22$19 + m33$18 * m32$18 + m34$18 * m42$18;
			this$3$0.m42 = m41$19 * m12$19 + m42$19 * m22$19 + m43$18 * m32$18 + m44$18 * m42$18;
			this$3$0.m13 = m11$19 * (m13$19 = m$3$0.m13) + m12$18 * (m23$19 = m$3$0.m23) + m13$18 * (m33$19 = m$3$0.m33) + m14$18 * (m43$19 = m$3$0.m43);
			this$3$0.m23 = m21$19 * m13$19 + m22$18 * m23$19 + m23$18 * m33$19 + m24$18 * m43$19;
			this$3$0.m33 = m31$19 * m13$19 + m32$19 * m23$19 + m33$18 * m33$19 + m34$18 * m43$19;
			this$3$0.m43 = m41$19 * m13$19 + m42$19 * m23$19 + m43$18 * m33$19 + m44$18 * m43$19;
			this$3$0.m14 = m11$19 * (m14$19 = m$3$0.m14) + m12$18 * (m24$19 = m$3$0.m24) + m13$18 * (m34$19 = m$3$0.m34) + m14$18 * (m44$19 = m$3$0.m44);
			this$3$0.m24 = m21$19 * m14$19 + m22$18 * m24$19 + m23$18 * m34$19 + m24$18 * m44$19;
			this$3$0.m34 = m31$19 * m14$19 + m32$19 * m24$19 + m33$18 * m34$19 + m34$18 * m44$19;
			this$3$0.m44 = m41$19 * m14$19 + m42$19 * m24$19 + m43$18 * m34$19 + m44$18 * m44$19;
			bfinMat$0 = this$3$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, [ bfinMat$0.m11, bfinMat$0.m21, bfinMat$0.m31, bfinMat$0.m41, bfinMat$0.m12, bfinMat$0.m22, bfinMat$0.m32, bfinMat$0.m42, bfinMat$0.m13, bfinMat$0.m23, bfinMat$0.m33, bfinMat$0.m43, bfinMat$0.m14, bfinMat$0.m24, bfinMat$0.m34, bfinMat$0.m44 ]);
			p$3$0 = Kingyo.bfin;
			gl$3$0 = Kingyo.gl;
			prog$3$0 = Kingyo.prog;
			gl$3$0.bindBuffer(gl$3$0.ARRAY_BUFFER, p$3$0.vbuf);
			gl$3$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:332] null access");
				}
				return v;
			}(Kingyo.alocs.vertex)), 3, gl$3$0.FLOAT, false, 0, 0);
			gl$3$0.bindBuffer(gl$3$0.ARRAY_BUFFER, p$3$0.nbuf);
			gl$3$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:335] null access");
				}
				return v;
			}(Kingyo.alocs.normal)), 3, gl$3$0.FLOAT, false, 0, 0);
			gl$3$0.bindBuffer(gl$3$0.ELEMENT_ARRAY_BUFFER, p$3$0.ibuf);
			gl$3$0.drawElements(gl$3$0.TRIANGLES, p$3$0.numi, gl$3$0.UNSIGNED_SHORT, 0);
			this$10$0 = new M44$LM44$(bodyMat$0);
			this$16$0 = new M44$();
			this$16$0.m11 = this$16$0.m22 = this$16$0.m33 = this$16$0.m44 = 1;
			this$16$0.m21 = this$16$0.m31 = this$16$0.m41 = this$16$0.m12 = this$16$0.m32 = this$16$0.m42 = this$16$0.m13 = this$16$0.m23 = this$16$0.m24 = this$16$0.m14 = this$16$0.m24 = this$16$0.m34 = 0;
			this$16$0;
			this$16$0.m14 = 0;
			this$16$0.m24 = 0;
			this$16$0.m34 = -0.7;
			m$9$0 = this$16$0;
			m0$0$9$0 = new M44$LM44$(this$10$0);
			this$10$0.m11 = (m11$21 = m0$0$9$0.m11) * (m11$20 = m$9$0.m11) + (m12$20 = m0$0$9$0.m12) * (m21$20 = m$9$0.m21) + (m13$20 = m0$0$9$0.m13) * (m31$20 = m$9$0.m31) + (m14$20 = m0$0$9$0.m14) * (m41$20 = m$9$0.m41);
			this$10$0.m21 = (m21$21 = m0$0$9$0.m21) * m11$20 + (m22$20 = m0$0$9$0.m22) * m21$20 + (m23$20 = m0$0$9$0.m23) * m31$20 + (m24$20 = m0$0$9$0.m24) * m41$20;
			this$10$0.m31 = (m31$21 = m0$0$9$0.m31) * m11$20 + (m32$21 = m0$0$9$0.m32) * m21$20 + (m33$20 = m0$0$9$0.m33) * m31$20 + (m34$20 = m0$0$9$0.m34) * m41$20;
			this$10$0.m41 = (m41$21 = m0$0$9$0.m41) * m11$20 + (m42$21 = m0$0$9$0.m42) * m21$20 + (m43$20 = m0$0$9$0.m43) * m31$20 + (m44$20 = m0$0$9$0.m44) * m41$20;
			this$10$0.m12 = m11$21 * (m12$21 = m$9$0.m12) + m12$20 * (m22$21 = m$9$0.m22) + m13$20 * (m32$20 = m$9$0.m32) + m14$20 * (m42$20 = m$9$0.m42);
			this$10$0.m22 = m21$21 * m12$21 + m22$20 * m22$21 + m23$20 * m32$20 + m24$20 * m42$20;
			this$10$0.m32 = m31$21 * m12$21 + m32$21 * m22$21 + m33$20 * m32$20 + m34$20 * m42$20;
			this$10$0.m42 = m41$21 * m12$21 + m42$21 * m22$21 + m43$20 * m32$20 + m44$20 * m42$20;
			this$10$0.m13 = m11$21 * (m13$21 = m$9$0.m13) + m12$20 * (m23$21 = m$9$0.m23) + m13$20 * (m33$21 = m$9$0.m33) + m14$20 * (m43$21 = m$9$0.m43);
			this$10$0.m23 = m21$21 * m13$21 + m22$20 * m23$21 + m23$20 * m33$21 + m24$20 * m43$21;
			this$10$0.m33 = m31$21 * m13$21 + m32$21 * m23$21 + m33$20 * m33$21 + m34$20 * m43$21;
			this$10$0.m43 = m41$21 * m13$21 + m42$21 * m23$21 + m43$20 * m33$21 + m44$20 * m43$21;
			this$10$0.m14 = m11$21 * (m14$21 = m$9$0.m14) + m12$20 * (m24$21 = m$9$0.m24) + m13$20 * (m34$21 = m$9$0.m34) + m14$20 * (m44$21 = m$9$0.m44);
			this$10$0.m24 = m21$21 * m14$21 + m22$20 * m24$21 + m23$20 * m34$21 + m24$20 * m44$21;
			this$10$0.m34 = m31$21 * m14$21 + m32$21 * m24$21 + m33$20 * m34$21 + m34$20 * m44$21;
			this$10$0.m44 = m41$21 * m14$21 + m42$21 * m24$21 + m43$20 * m34$21 + m44$20 * m44$21;
			this$4$0 = this$10$0;
			m$4$0 = new M44$().setRotate$NNNN(s$0 / 2, 0, 1, 0);
			m0$0$4$0 = new M44$LM44$(this$4$0);
			this$4$0.m11 = (m11$23 = m0$0$4$0.m11) * (m11$22 = m$4$0.m11) + (m12$22 = m0$0$4$0.m12) * (m21$22 = m$4$0.m21) + (m13$22 = m0$0$4$0.m13) * (m31$22 = m$4$0.m31) + (m14$22 = m0$0$4$0.m14) * (m41$22 = m$4$0.m41);
			this$4$0.m21 = (m21$23 = m0$0$4$0.m21) * m11$22 + (m22$22 = m0$0$4$0.m22) * m21$22 + (m23$22 = m0$0$4$0.m23) * m31$22 + (m24$22 = m0$0$4$0.m24) * m41$22;
			this$4$0.m31 = (m31$23 = m0$0$4$0.m31) * m11$22 + (m32$23 = m0$0$4$0.m32) * m21$22 + (m33$22 = m0$0$4$0.m33) * m31$22 + (m34$22 = m0$0$4$0.m34) * m41$22;
			this$4$0.m41 = (m41$23 = m0$0$4$0.m41) * m11$22 + (m42$23 = m0$0$4$0.m42) * m21$22 + (m43$22 = m0$0$4$0.m43) * m31$22 + (m44$22 = m0$0$4$0.m44) * m41$22;
			this$4$0.m12 = m11$23 * (m12$23 = m$4$0.m12) + m12$22 * (m22$23 = m$4$0.m22) + m13$22 * (m32$22 = m$4$0.m32) + m14$22 * (m42$22 = m$4$0.m42);
			this$4$0.m22 = m21$23 * m12$23 + m22$22 * m22$23 + m23$22 * m32$22 + m24$22 * m42$22;
			this$4$0.m32 = m31$23 * m12$23 + m32$23 * m22$23 + m33$22 * m32$22 + m34$22 * m42$22;
			this$4$0.m42 = m41$23 * m12$23 + m42$23 * m22$23 + m43$22 * m32$22 + m44$22 * m42$22;
			this$4$0.m13 = m11$23 * (m13$23 = m$4$0.m13) + m12$22 * (m23$23 = m$4$0.m23) + m13$22 * (m33$23 = m$4$0.m33) + m14$22 * (m43$23 = m$4$0.m43);
			this$4$0.m23 = m21$23 * m13$23 + m22$22 * m23$23 + m23$22 * m33$23 + m24$22 * m43$23;
			this$4$0.m33 = m31$23 * m13$23 + m32$23 * m23$23 + m33$22 * m33$23 + m34$22 * m43$23;
			this$4$0.m43 = m41$23 * m13$23 + m42$23 * m23$23 + m43$22 * m33$23 + m44$22 * m43$23;
			this$4$0.m14 = m11$23 * (m14$23 = m$4$0.m14) + m12$22 * (m24$23 = m$4$0.m24) + m13$22 * (m34$23 = m$4$0.m34) + m14$22 * (m44$23 = m$4$0.m44);
			this$4$0.m24 = m21$23 * m14$23 + m22$22 * m24$23 + m23$22 * m34$23 + m24$22 * m44$23;
			this$4$0.m34 = m31$23 * m14$23 + m32$23 * m24$23 + m33$22 * m34$23 + m34$22 * m44$23;
			this$4$0.m44 = m41$23 * m14$23 + m42$23 * m24$23 + m43$22 * m34$23 + m44$22 * m44$23;
			tfinMat$0 = this$4$0;
			gl$0.uniformMatrix4fv(modelMatLoc$0, false, [ tfinMat$0.m11, tfinMat$0.m21, tfinMat$0.m31, tfinMat$0.m41, tfinMat$0.m12, tfinMat$0.m22, tfinMat$0.m32, tfinMat$0.m42, tfinMat$0.m13, tfinMat$0.m23, tfinMat$0.m33, tfinMat$0.m43, tfinMat$0.m14, tfinMat$0.m24, tfinMat$0.m34, tfinMat$0.m44 ]);
			p$4$0 = Kingyo.tfin;
			gl$4$0 = Kingyo.gl;
			prog$4$0 = Kingyo.prog;
			gl$4$0.bindBuffer(gl$4$0.ARRAY_BUFFER, p$4$0.vbuf);
			gl$4$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:332] null access");
				}
				return v;
			}(Kingyo.alocs.vertex)), 3, gl$4$0.FLOAT, false, 0, 0);
			gl$4$0.bindBuffer(gl$4$0.ARRAY_BUFFER, p$4$0.nbuf);
			gl$4$0.vertexAttribPointer((function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[kingyo.jsx:335] null access");
				}
				return v;
			}(Kingyo.alocs.normal)), 3, gl$4$0.FLOAT, false, 0, 0);
			gl$4$0.bindBuffer(gl$4$0.ELEMENT_ARRAY_BUFFER, p$4$0.ibuf);
			gl$4$0.drawElements(gl$4$0.TRIANGLES, p$4$0.numi, gl$4$0.UNSIGNED_SHORT, 0);
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
			gl$1 = Kingyo.gl;
			prog$1 = Kingyo.eyeProg;
			ulocs$0 = Kingyo.eyeULocs;
			alocs$0 = Kingyo.eyeALocs;
			gl$1.uniform3fv(ulocs$0.color, k._color);
			s$1 = Math.sin(k._anim * 5);
			this$7$1 = new M44$();
			v$0$1 = k._pos;
			x$0$0$1 = v$0$1.x;
			y$0$0$1 = v$0$1.y;
			z$0$0$1 = v$0$1.z;
			this$7$1.m11 = this$7$1.m22 = this$7$1.m33 = this$7$1.m44 = 1;
			this$7$1.m21 = this$7$1.m31 = this$7$1.m41 = this$7$1.m12 = this$7$1.m32 = this$7$1.m42 = this$7$1.m13 = this$7$1.m23 = this$7$1.m24 = this$7$1.m14 = this$7$1.m24 = this$7$1.m34 = 0;
			this$7$1;
			this$7$1.m14 = x$0$0$1;
			this$7$1.m24 = y$0$0$1;
			this$7$1.m34 = z$0$0$1;
			this$5$1 = this$7$1;
			m$3$1 = k._spinMat;
			m0$0$3$1 = new M44$LM44$(this$5$1);
			this$5$1.m11 = (m11$25 = m0$0$3$1.m11) * (m11$24 = m$3$1.m11) + (m12$24 = m0$0$3$1.m12) * (m21$24 = m$3$1.m21) + (m13$24 = m0$0$3$1.m13) * (m31$24 = m$3$1.m31) + (m14$24 = m0$0$3$1.m14) * (m41$24 = m$3$1.m41);
			this$5$1.m21 = (m21$25 = m0$0$3$1.m21) * m11$24 + (m22$24 = m0$0$3$1.m22) * m21$24 + (m23$24 = m0$0$3$1.m23) * m31$24 + (m24$24 = m0$0$3$1.m24) * m41$24;
			this$5$1.m31 = (m31$25 = m0$0$3$1.m31) * m11$24 + (m32$25 = m0$0$3$1.m32) * m21$24 + (m33$24 = m0$0$3$1.m33) * m31$24 + (m34$24 = m0$0$3$1.m34) * m41$24;
			this$5$1.m41 = (m41$25 = m0$0$3$1.m41) * m11$24 + (m42$25 = m0$0$3$1.m42) * m21$24 + (m43$24 = m0$0$3$1.m43) * m31$24 + (m44$24 = m0$0$3$1.m44) * m41$24;
			this$5$1.m12 = m11$25 * (m12$25 = m$3$1.m12) + m12$24 * (m22$25 = m$3$1.m22) + m13$24 * (m32$24 = m$3$1.m32) + m14$24 * (m42$24 = m$3$1.m42);
			this$5$1.m22 = m21$25 * m12$25 + m22$24 * m22$25 + m23$24 * m32$24 + m24$24 * m42$24;
			this$5$1.m32 = m31$25 * m12$25 + m32$25 * m22$25 + m33$24 * m32$24 + m34$24 * m42$24;
			this$5$1.m42 = m41$25 * m12$25 + m42$25 * m22$25 + m43$24 * m32$24 + m44$24 * m42$24;
			this$5$1.m13 = m11$25 * (m13$25 = m$3$1.m13) + m12$24 * (m23$25 = m$3$1.m23) + m13$24 * (m33$25 = m$3$1.m33) + m14$24 * (m43$25 = m$3$1.m43);
			this$5$1.m23 = m21$25 * m13$25 + m22$24 * m23$25 + m23$24 * m33$25 + m24$24 * m43$25;
			this$5$1.m33 = m31$25 * m13$25 + m32$25 * m23$25 + m33$24 * m33$25 + m34$24 * m43$25;
			this$5$1.m43 = m41$25 * m13$25 + m42$25 * m23$25 + m43$24 * m33$25 + m44$24 * m43$25;
			this$5$1.m14 = m11$25 * (m14$25 = m$3$1.m14) + m12$24 * (m24$25 = m$3$1.m24) + m13$24 * (m34$25 = m$3$1.m34) + m14$24 * (m44$25 = m$3$1.m44);
			this$5$1.m24 = m21$25 * m14$25 + m22$24 * m24$25 + m23$24 * m34$25 + m24$24 * m44$25;
			this$5$1.m34 = m31$25 * m14$25 + m32$25 * m24$25 + m33$24 * m34$25 + m34$24 * m44$25;
			this$5$1.m44 = m41$25 * m14$25 + m42$25 * m24$25 + m43$24 * m34$25 + m44$24 * m44$25;
			this$3$1 = this$5$1;
			this$6$1 = new M44$();
			rad$0$1 = k._vangle - s$1 / 10;
			m$2$1 = this$6$1.setRotate$NNNN(rad$0$1, 0, 0, 1);
			m0$0$2$1 = new M44$LM44$(this$3$1);
			this$3$1.m11 = (m11$27 = m0$0$2$1.m11) * (m11$26 = m$2$1.m11) + (m12$26 = m0$0$2$1.m12) * (m21$26 = m$2$1.m21) + (m13$26 = m0$0$2$1.m13) * (m31$26 = m$2$1.m31) + (m14$26 = m0$0$2$1.m14) * (m41$26 = m$2$1.m41);
			this$3$1.m21 = (m21$27 = m0$0$2$1.m21) * m11$26 + (m22$26 = m0$0$2$1.m22) * m21$26 + (m23$26 = m0$0$2$1.m23) * m31$26 + (m24$26 = m0$0$2$1.m24) * m41$26;
			this$3$1.m31 = (m31$27 = m0$0$2$1.m31) * m11$26 + (m32$27 = m0$0$2$1.m32) * m21$26 + (m33$26 = m0$0$2$1.m33) * m31$26 + (m34$26 = m0$0$2$1.m34) * m41$26;
			this$3$1.m41 = (m41$27 = m0$0$2$1.m41) * m11$26 + (m42$27 = m0$0$2$1.m42) * m21$26 + (m43$26 = m0$0$2$1.m43) * m31$26 + (m44$26 = m0$0$2$1.m44) * m41$26;
			this$3$1.m12 = m11$27 * (m12$27 = m$2$1.m12) + m12$26 * (m22$27 = m$2$1.m22) + m13$26 * (m32$26 = m$2$1.m32) + m14$26 * (m42$26 = m$2$1.m42);
			this$3$1.m22 = m21$27 * m12$27 + m22$26 * m22$27 + m23$26 * m32$26 + m24$26 * m42$26;
			this$3$1.m32 = m31$27 * m12$27 + m32$27 * m22$27 + m33$26 * m32$26 + m34$26 * m42$26;
			this$3$1.m42 = m41$27 * m12$27 + m42$27 * m22$27 + m43$26 * m32$26 + m44$26 * m42$26;
			this$3$1.m13 = m11$27 * (m13$27 = m$2$1.m13) + m12$26 * (m23$27 = m$2$1.m23) + m13$26 * (m33$27 = m$2$1.m33) + m14$26 * (m43$27 = m$2$1.m43);
			this$3$1.m23 = m21$27 * m13$27 + m22$26 * m23$27 + m23$26 * m33$27 + m24$26 * m43$27;
			this$3$1.m33 = m31$27 * m13$27 + m32$27 * m23$27 + m33$26 * m33$27 + m34$26 * m43$27;
			this$3$1.m43 = m41$27 * m13$27 + m42$27 * m23$27 + m43$26 * m33$27 + m44$26 * m43$27;
			this$3$1.m14 = m11$27 * (m14$27 = m$2$1.m14) + m12$26 * (m24$27 = m$2$1.m24) + m13$26 * (m34$27 = m$2$1.m34) + m14$26 * (m44$27 = m$2$1.m44);
			this$3$1.m24 = m21$27 * m14$27 + m22$26 * m24$27 + m23$26 * m34$27 + m24$26 * m44$27;
			this$3$1.m34 = m31$27 * m14$27 + m32$27 * m24$27 + m33$26 * m34$27 + m34$26 * m44$27;
			this$3$1.m44 = m41$27 * m14$27 + m42$27 * m24$27 + m43$26 * m34$27 + m44$26 * m44$27;
			this$1$1 = this$3$1;
			this$4$1 = new M44$();
			m$1$1 = this$4$1.setRotate$NNNN(1.5707963267948966, 1, 0, 0);
			m0$0$1$1 = new M44$LM44$(this$1$1);
			this$1$1.m11 = (m11$29 = m0$0$1$1.m11) * (m11$28 = m$1$1.m11) + (m12$28 = m0$0$1$1.m12) * (m21$28 = m$1$1.m21) + (m13$28 = m0$0$1$1.m13) * (m31$28 = m$1$1.m31) + (m14$28 = m0$0$1$1.m14) * (m41$28 = m$1$1.m41);
			this$1$1.m21 = (m21$29 = m0$0$1$1.m21) * m11$28 + (m22$28 = m0$0$1$1.m22) * m21$28 + (m23$28 = m0$0$1$1.m23) * m31$28 + (m24$28 = m0$0$1$1.m24) * m41$28;
			this$1$1.m31 = (m31$29 = m0$0$1$1.m31) * m11$28 + (m32$29 = m0$0$1$1.m32) * m21$28 + (m33$28 = m0$0$1$1.m33) * m31$28 + (m34$28 = m0$0$1$1.m34) * m41$28;
			this$1$1.m41 = (m41$29 = m0$0$1$1.m41) * m11$28 + (m42$29 = m0$0$1$1.m42) * m21$28 + (m43$28 = m0$0$1$1.m43) * m31$28 + (m44$28 = m0$0$1$1.m44) * m41$28;
			this$1$1.m12 = m11$29 * (m12$29 = m$1$1.m12) + m12$28 * (m22$29 = m$1$1.m22) + m13$28 * (m32$28 = m$1$1.m32) + m14$28 * (m42$28 = m$1$1.m42);
			this$1$1.m22 = m21$29 * m12$29 + m22$28 * m22$29 + m23$28 * m32$28 + m24$28 * m42$28;
			this$1$1.m32 = m31$29 * m12$29 + m32$29 * m22$29 + m33$28 * m32$28 + m34$28 * m42$28;
			this$1$1.m42 = m41$29 * m12$29 + m42$29 * m22$29 + m43$28 * m32$28 + m44$28 * m42$28;
			this$1$1.m13 = m11$29 * (m13$29 = m$1$1.m13) + m12$28 * (m23$29 = m$1$1.m23) + m13$28 * (m33$29 = m$1$1.m33) + m14$28 * (m43$29 = m$1$1.m43);
			this$1$1.m23 = m21$29 * m13$29 + m22$28 * m23$29 + m23$28 * m33$29 + m24$28 * m43$29;
			this$1$1.m33 = m31$29 * m13$29 + m32$29 * m23$29 + m33$28 * m33$29 + m34$28 * m43$29;
			this$1$1.m43 = m41$29 * m13$29 + m42$29 * m23$29 + m43$28 * m33$29 + m44$28 * m43$29;
			this$1$1.m14 = m11$29 * (m14$29 = m$1$1.m14) + m12$28 * (m24$29 = m$1$1.m24) + m13$28 * (m34$29 = m$1$1.m34) + m14$28 * (m44$29 = m$1$1.m44);
			this$1$1.m24 = m21$29 * m14$29 + m22$28 * m24$29 + m23$28 * m34$29 + m24$28 * m44$29;
			this$1$1.m34 = m31$29 * m14$29 + m32$29 * m24$29 + m33$28 * m34$29 + m34$28 * m44$29;
			this$1$1.m44 = m41$29 * m14$29 + m42$29 * m24$29 + m43$28 * m34$29 + m44$28 * m44$29;
			this$0$1 = this$1$1;
			this$2$1 = new M44$();
			m$0$1 = this$2$1.setRotate$NNNN(1.5707963267948966, 0, 1, 0);
			m0$0$0$1 = new M44$LM44$(this$0$1);
			this$0$1.m11 = (m11$31 = m0$0$0$1.m11) * (m11$30 = m$0$1.m11) + (m12$30 = m0$0$0$1.m12) * (m21$30 = m$0$1.m21) + (m13$30 = m0$0$0$1.m13) * (m31$30 = m$0$1.m31) + (m14$30 = m0$0$0$1.m14) * (m41$30 = m$0$1.m41);
			this$0$1.m21 = (m21$31 = m0$0$0$1.m21) * m11$30 + (m22$30 = m0$0$0$1.m22) * m21$30 + (m23$30 = m0$0$0$1.m23) * m31$30 + (m24$30 = m0$0$0$1.m24) * m41$30;
			this$0$1.m31 = (m31$31 = m0$0$0$1.m31) * m11$30 + (m32$31 = m0$0$0$1.m32) * m21$30 + (m33$30 = m0$0$0$1.m33) * m31$30 + (m34$30 = m0$0$0$1.m34) * m41$30;
			this$0$1.m41 = (m41$31 = m0$0$0$1.m41) * m11$30 + (m42$31 = m0$0$0$1.m42) * m21$30 + (m43$30 = m0$0$0$1.m43) * m31$30 + (m44$30 = m0$0$0$1.m44) * m41$30;
			this$0$1.m12 = m11$31 * (m12$31 = m$0$1.m12) + m12$30 * (m22$31 = m$0$1.m22) + m13$30 * (m32$30 = m$0$1.m32) + m14$30 * (m42$30 = m$0$1.m42);
			this$0$1.m22 = m21$31 * m12$31 + m22$30 * m22$31 + m23$30 * m32$30 + m24$30 * m42$30;
			this$0$1.m32 = m31$31 * m12$31 + m32$31 * m22$31 + m33$30 * m32$30 + m34$30 * m42$30;
			this$0$1.m42 = m41$31 * m12$31 + m42$31 * m22$31 + m43$30 * m32$30 + m44$30 * m42$30;
			this$0$1.m13 = m11$31 * (m13$31 = m$0$1.m13) + m12$30 * (m23$31 = m$0$1.m23) + m13$30 * (m33$31 = m$0$1.m33) + m14$30 * (m43$31 = m$0$1.m43);
			this$0$1.m23 = m21$31 * m13$31 + m22$30 * m23$31 + m23$30 * m33$31 + m24$30 * m43$31;
			this$0$1.m33 = m31$31 * m13$31 + m32$31 * m23$31 + m33$30 * m33$31 + m34$30 * m43$31;
			this$0$1.m43 = m41$31 * m13$31 + m42$31 * m23$31 + m43$30 * m33$31 + m44$30 * m43$31;
			this$0$1.m14 = m11$31 * (m14$31 = m$0$1.m14) + m12$30 * (m24$31 = m$0$1.m24) + m13$30 * (m34$31 = m$0$1.m34) + m14$30 * (m44$31 = m$0$1.m44);
			this$0$1.m24 = m21$31 * m14$31 + m22$30 * m24$31 + m23$30 * m34$31 + m24$30 * m44$31;
			this$0$1.m34 = m31$31 * m14$31 + m32$31 * m24$31 + m33$30 * m34$31 + m34$30 * m44$31;
			this$0$1.m44 = m41$31 * m14$31 + m42$31 * m24$31 + m43$30 * m34$31 + m44$30 * m44$31;
			bodyMat$1 = this$0$1;
			gl$1.uniformMatrix4fv(ulocs$0.modelMatrix, false, [ bodyMat$1.m11, bodyMat$1.m21, bodyMat$1.m31, bodyMat$1.m41, bodyMat$1.m12, bodyMat$1.m22, bodyMat$1.m32, bodyMat$1.m42, bodyMat$1.m13, bodyMat$1.m23, bodyMat$1.m33, bodyMat$1.m43, bodyMat$1.m14, bodyMat$1.m24, bodyMat$1.m34, bodyMat$1.m44 ]);
			gl$1.bindBuffer(gl$1.ELEMENT_ARRAY_BUFFER, Kingyo.eyes.ibuf);
			gl$1.drawElements(gl$1.TRIANGLES, 12, gl$1.UNSIGNED_SHORT, 0);
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
	/** @type {Kingyo} */
	var this$0;
	/** @type {!number} */
	var a$0;
	/** @type {M44} */
	var this$0$0;
	/** @type {V3} */
	var this$1$0;
	/** @type {!number} */
	var x$0$0;
	/** @type {!number} */
	var y$0$0;
	/** @type {!number} */
	var z$0$0;
	/** @type {!number} */
	var kingyos$len$0;
	for ((i = 0, kingyos$len$0 = kingyos.length); i < kingyos$len$0; ++ i) {
		this$0 = kingyos[i];
		this$0._state = 'flying';
		this$0._pos.z = 2;
		this$0._vz = 150 + Math.random() * 50;
		this$0._velo = 12;
		this$0$0 = this$0._spinMat;
		this$0$0.m11 = this$0$0.m22 = this$0$0.m33 = this$0$0.m44 = 1;
		this$0$0.m21 = this$0$0.m31 = this$0$0.m41 = this$0$0.m12 = this$0$0.m32 = this$0$0.m42 = this$0$0.m13 = this$0$0.m23 = this$0$0.m24 = this$0$0.m14 = this$0$0.m24 = this$0$0.m34 = 0;
		this$0$0;
		a$0 = 6.283185307179586 * Math.random();
		this$1$0 = this$0._spinAxis;
		x$0$0 = Math.cos(a$0);
		y$0$0 = Math.sin(a$0);
		z$0$0 = Math.random() - 0.5;
		this$1$0.x = x$0$0;
		this$1$0.y = y$0$0;
		this$1$0.z = z$0$0;
		this$1$0;
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
	/** @type {M44} */
	var m0$0$0;
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
		m0$0$0 = new M44$LM44$(this$0);
		this$0.m11 = (m11$1 = m0$0$0.m11) * (m11$0 = m$0.m11) + (m12$0 = m0$0$0.m12) * (m21$0 = m$0.m21) + (m13$0 = m0$0$0.m13) * (m31$0 = m$0.m31) + (m14$0 = m0$0$0.m14) * (m41$0 = m$0.m41);
		this$0.m21 = (m21$1 = m0$0$0.m21) * m11$0 + (m22$0 = m0$0$0.m22) * m21$0 + (m23$0 = m0$0$0.m23) * m31$0 + (m24$0 = m0$0$0.m24) * m41$0;
		this$0.m31 = (m31$1 = m0$0$0.m31) * m11$0 + (m32$1 = m0$0$0.m32) * m21$0 + (m33$0 = m0$0$0.m33) * m31$0 + (m34$0 = m0$0$0.m34) * m41$0;
		this$0.m41 = (m41$1 = m0$0$0.m41) * m11$0 + (m42$1 = m0$0$0.m42) * m21$0 + (m43$0 = m0$0$0.m43) * m31$0 + (m44$0 = m0$0$0.m44) * m41$0;
		this$0.m12 = m11$1 * (m12$1 = m$0.m12) + m12$0 * (m22$1 = m$0.m22) + m13$0 * (m32$0 = m$0.m32) + m14$0 * (m42$0 = m$0.m42);
		this$0.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
		this$0.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
		this$0.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
		this$0.m13 = m11$1 * (m13$1 = m$0.m13) + m12$0 * (m23$1 = m$0.m23) + m13$0 * (m33$1 = m$0.m33) + m14$0 * (m43$1 = m$0.m43);
		this$0.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
		this$0.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
		this$0.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
		this$0.m14 = m11$1 * (m14$1 = m$0.m14) + m12$0 * (m24$1 = m$0.m24) + m13$0 * (m34$1 = m$0.m34) + m14$0 * (m44$1 = m$0.m44);
		this$0.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
		this$0.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
		this$0.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
		this$0;
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
	var m0$0$0;
	/** @type {_Part} */
	var p$0;
	/** @type {WebGLRenderingContext} */
	var gl$0;
	/** @type {WebGLProgram} */
	var prog$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {M44} */
	var m0$0$1;
	/** @type {_Part} */
	var p$1;
	/** @type {WebGLRenderingContext} */
	var gl$1;
	/** @type {WebGLProgram} */
	var prog$1;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var m$2;
	/** @type {M44} */
	var m0$0$2;
	/** @type {_Part} */
	var p$2;
	/** @type {WebGLRenderingContext} */
	var gl$2;
	/** @type {WebGLProgram} */
	var prog$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var m$3;
	/** @type {M44} */
	var m0$0$3;
	/** @type {_Part} */
	var p$3;
	/** @type {WebGLRenderingContext} */
	var gl$3;
	/** @type {WebGLProgram} */
	var prog$3;
	/** @type {M44} */
	var this$4;
	/** @type {M44} */
	var m$4;
	/** @type {M44} */
	var m0$0$4;
	/** @type {_Part} */
	var p$4;
	/** @type {WebGLRenderingContext} */
	var gl$4;
	/** @type {WebGLProgram} */
	var prog$4;
	/** @type {M44} */
	var this$5;
	/** @type {M44} */
	var m$5;
	/** @type {M44} */
	var m0$0$5;
	/** @type {M44} */
	var this$6;
	/** @type {M44} */
	var this$7;
	/** @type {M44} */
	var m$6;
	/** @type {M44} */
	var m0$0$6;
	/** @type {M44} */
	var this$8;
	/** @type {M44} */
	var m$7;
	/** @type {M44} */
	var m0$0$7;
	/** @type {M44} */
	var this$9;
	/** @type {M44} */
	var m$8;
	/** @type {M44} */
	var m0$0$8;
	/** @type {M44} */
	var this$10;
	/** @type {M44} */
	var m$9;
	/** @type {M44} */
	var m0$0$9;
	/** @type {M44} */
	var this$11;
	/** @type {M44} */
	var m$10;
	/** @type {M44} */
	var m0$0$10;
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
	var this$17;
	/** @type {M44} */
	var m$11;
	/** @type {M44} */
	var m0$0$11;
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
	/** @type {!number} */
	var m11$2;
	/** @type {!number} */
	var m21$2;
	/** @type {!number} */
	var m31$2;
	/** @type {!number} */
	var m41$2;
	/** @type {!number} */
	var m11$3;
	/** @type {!number} */
	var m12$2;
	/** @type {!number} */
	var m13$2;
	/** @type {!number} */
	var m14$2;
	/** @type {!number} */
	var m21$3;
	/** @type {!number} */
	var m12$3;
	/** @type {!number} */
	var m22$2;
	/** @type {!number} */
	var m22$3;
	/** @type {!number} */
	var m23$2;
	/** @type {!number} */
	var m32$2;
	/** @type {!number} */
	var m24$2;
	/** @type {!number} */
	var m42$2;
	/** @type {!number} */
	var m31$3;
	/** @type {!number} */
	var m32$3;
	/** @type {!number} */
	var m33$2;
	/** @type {!number} */
	var m34$2;
	/** @type {!number} */
	var m41$3;
	/** @type {!number} */
	var m42$3;
	/** @type {!number} */
	var m43$2;
	/** @type {!number} */
	var m44$2;
	/** @type {!number} */
	var m13$3;
	/** @type {!number} */
	var m23$3;
	/** @type {!number} */
	var m33$3;
	/** @type {!number} */
	var m43$3;
	/** @type {!number} */
	var m14$3;
	/** @type {!number} */
	var m24$3;
	/** @type {!number} */
	var m34$3;
	/** @type {!number} */
	var m44$3;
	/** @type {!number} */
	var m11$4;
	/** @type {!number} */
	var m21$4;
	/** @type {!number} */
	var m31$4;
	/** @type {!number} */
	var m41$4;
	/** @type {!number} */
	var m11$5;
	/** @type {!number} */
	var m12$4;
	/** @type {!number} */
	var m13$4;
	/** @type {!number} */
	var m14$4;
	/** @type {!number} */
	var m21$5;
	/** @type {!number} */
	var m12$5;
	/** @type {!number} */
	var m22$4;
	/** @type {!number} */
	var m22$5;
	/** @type {!number} */
	var m23$4;
	/** @type {!number} */
	var m32$4;
	/** @type {!number} */
	var m24$4;
	/** @type {!number} */
	var m42$4;
	/** @type {!number} */
	var m31$5;
	/** @type {!number} */
	var m32$5;
	/** @type {!number} */
	var m33$4;
	/** @type {!number} */
	var m34$4;
	/** @type {!number} */
	var m41$5;
	/** @type {!number} */
	var m42$5;
	/** @type {!number} */
	var m43$4;
	/** @type {!number} */
	var m44$4;
	/** @type {!number} */
	var m13$5;
	/** @type {!number} */
	var m23$5;
	/** @type {!number} */
	var m33$5;
	/** @type {!number} */
	var m43$5;
	/** @type {!number} */
	var m14$5;
	/** @type {!number} */
	var m24$5;
	/** @type {!number} */
	var m34$5;
	/** @type {!number} */
	var m44$5;
	/** @type {!number} */
	var m11$6;
	/** @type {!number} */
	var m21$6;
	/** @type {!number} */
	var m31$6;
	/** @type {!number} */
	var m41$6;
	/** @type {!number} */
	var m11$7;
	/** @type {!number} */
	var m12$6;
	/** @type {!number} */
	var m13$6;
	/** @type {!number} */
	var m14$6;
	/** @type {!number} */
	var m21$7;
	/** @type {!number} */
	var m12$7;
	/** @type {!number} */
	var m22$6;
	/** @type {!number} */
	var m22$7;
	/** @type {!number} */
	var m23$6;
	/** @type {!number} */
	var m32$6;
	/** @type {!number} */
	var m24$6;
	/** @type {!number} */
	var m42$6;
	/** @type {!number} */
	var m31$7;
	/** @type {!number} */
	var m32$7;
	/** @type {!number} */
	var m33$6;
	/** @type {!number} */
	var m34$6;
	/** @type {!number} */
	var m41$7;
	/** @type {!number} */
	var m42$7;
	/** @type {!number} */
	var m43$6;
	/** @type {!number} */
	var m44$6;
	/** @type {!number} */
	var m13$7;
	/** @type {!number} */
	var m23$7;
	/** @type {!number} */
	var m33$7;
	/** @type {!number} */
	var m43$7;
	/** @type {!number} */
	var m14$7;
	/** @type {!number} */
	var m24$7;
	/** @type {!number} */
	var m34$7;
	/** @type {!number} */
	var m44$7;
	/** @type {!number} */
	var m11$8;
	/** @type {!number} */
	var m21$8;
	/** @type {!number} */
	var m31$8;
	/** @type {!number} */
	var m41$8;
	/** @type {!number} */
	var m11$9;
	/** @type {!number} */
	var m12$8;
	/** @type {!number} */
	var m13$8;
	/** @type {!number} */
	var m14$8;
	/** @type {!number} */
	var m21$9;
	/** @type {!number} */
	var m12$9;
	/** @type {!number} */
	var m22$8;
	/** @type {!number} */
	var m22$9;
	/** @type {!number} */
	var m23$8;
	/** @type {!number} */
	var m32$8;
	/** @type {!number} */
	var m24$8;
	/** @type {!number} */
	var m42$8;
	/** @type {!number} */
	var m31$9;
	/** @type {!number} */
	var m32$9;
	/** @type {!number} */
	var m33$8;
	/** @type {!number} */
	var m34$8;
	/** @type {!number} */
	var m41$9;
	/** @type {!number} */
	var m42$9;
	/** @type {!number} */
	var m43$8;
	/** @type {!number} */
	var m44$8;
	/** @type {!number} */
	var m13$9;
	/** @type {!number} */
	var m23$9;
	/** @type {!number} */
	var m33$9;
	/** @type {!number} */
	var m43$9;
	/** @type {!number} */
	var m14$9;
	/** @type {!number} */
	var m24$9;
	/** @type {!number} */
	var m34$9;
	/** @type {!number} */
	var m44$9;
	/** @type {!number} */
	var m11$10;
	/** @type {!number} */
	var m21$10;
	/** @type {!number} */
	var m31$10;
	/** @type {!number} */
	var m41$10;
	/** @type {!number} */
	var m11$11;
	/** @type {!number} */
	var m12$10;
	/** @type {!number} */
	var m13$10;
	/** @type {!number} */
	var m14$10;
	/** @type {!number} */
	var m21$11;
	/** @type {!number} */
	var m12$11;
	/** @type {!number} */
	var m22$10;
	/** @type {!number} */
	var m22$11;
	/** @type {!number} */
	var m23$10;
	/** @type {!number} */
	var m32$10;
	/** @type {!number} */
	var m24$10;
	/** @type {!number} */
	var m42$10;
	/** @type {!number} */
	var m31$11;
	/** @type {!number} */
	var m32$11;
	/** @type {!number} */
	var m33$10;
	/** @type {!number} */
	var m34$10;
	/** @type {!number} */
	var m41$11;
	/** @type {!number} */
	var m42$11;
	/** @type {!number} */
	var m43$10;
	/** @type {!number} */
	var m44$10;
	/** @type {!number} */
	var m13$11;
	/** @type {!number} */
	var m23$11;
	/** @type {!number} */
	var m33$11;
	/** @type {!number} */
	var m43$11;
	/** @type {!number} */
	var m14$11;
	/** @type {!number} */
	var m24$11;
	/** @type {!number} */
	var m34$11;
	/** @type {!number} */
	var m44$11;
	/** @type {!number} */
	var m11$12;
	/** @type {!number} */
	var m21$12;
	/** @type {!number} */
	var m31$12;
	/** @type {!number} */
	var m41$12;
	/** @type {!number} */
	var m11$13;
	/** @type {!number} */
	var m12$12;
	/** @type {!number} */
	var m13$12;
	/** @type {!number} */
	var m14$12;
	/** @type {!number} */
	var m21$13;
	/** @type {!number} */
	var m12$13;
	/** @type {!number} */
	var m22$12;
	/** @type {!number} */
	var m22$13;
	/** @type {!number} */
	var m23$12;
	/** @type {!number} */
	var m32$12;
	/** @type {!number} */
	var m24$12;
	/** @type {!number} */
	var m42$12;
	/** @type {!number} */
	var m31$13;
	/** @type {!number} */
	var m32$13;
	/** @type {!number} */
	var m33$12;
	/** @type {!number} */
	var m34$12;
	/** @type {!number} */
	var m41$13;
	/** @type {!number} */
	var m42$13;
	/** @type {!number} */
	var m43$12;
	/** @type {!number} */
	var m44$12;
	/** @type {!number} */
	var m13$13;
	/** @type {!number} */
	var m23$13;
	/** @type {!number} */
	var m33$13;
	/** @type {!number} */
	var m43$13;
	/** @type {!number} */
	var m14$13;
	/** @type {!number} */
	var m24$13;
	/** @type {!number} */
	var m34$13;
	/** @type {!number} */
	var m44$13;
	/** @type {!number} */
	var m11$14;
	/** @type {!number} */
	var m21$14;
	/** @type {!number} */
	var m31$14;
	/** @type {!number} */
	var m41$14;
	/** @type {!number} */
	var m11$15;
	/** @type {!number} */
	var m12$14;
	/** @type {!number} */
	var m13$14;
	/** @type {!number} */
	var m14$14;
	/** @type {!number} */
	var m21$15;
	/** @type {!number} */
	var m12$15;
	/** @type {!number} */
	var m22$14;
	/** @type {!number} */
	var m22$15;
	/** @type {!number} */
	var m23$14;
	/** @type {!number} */
	var m32$14;
	/** @type {!number} */
	var m24$14;
	/** @type {!number} */
	var m42$14;
	/** @type {!number} */
	var m31$15;
	/** @type {!number} */
	var m32$15;
	/** @type {!number} */
	var m33$14;
	/** @type {!number} */
	var m34$14;
	/** @type {!number} */
	var m41$15;
	/** @type {!number} */
	var m42$15;
	/** @type {!number} */
	var m43$14;
	/** @type {!number} */
	var m44$14;
	/** @type {!number} */
	var m13$15;
	/** @type {!number} */
	var m23$15;
	/** @type {!number} */
	var m33$15;
	/** @type {!number} */
	var m43$15;
	/** @type {!number} */
	var m14$15;
	/** @type {!number} */
	var m24$15;
	/** @type {!number} */
	var m34$15;
	/** @type {!number} */
	var m44$15;
	/** @type {!number} */
	var m11$16;
	/** @type {!number} */
	var m21$16;
	/** @type {!number} */
	var m31$16;
	/** @type {!number} */
	var m41$16;
	/** @type {!number} */
	var m11$17;
	/** @type {!number} */
	var m12$16;
	/** @type {!number} */
	var m13$16;
	/** @type {!number} */
	var m14$16;
	/** @type {!number} */
	var m21$17;
	/** @type {!number} */
	var m12$17;
	/** @type {!number} */
	var m22$16;
	/** @type {!number} */
	var m22$17;
	/** @type {!number} */
	var m23$16;
	/** @type {!number} */
	var m32$16;
	/** @type {!number} */
	var m24$16;
	/** @type {!number} */
	var m42$16;
	/** @type {!number} */
	var m31$17;
	/** @type {!number} */
	var m32$17;
	/** @type {!number} */
	var m33$16;
	/** @type {!number} */
	var m34$16;
	/** @type {!number} */
	var m41$17;
	/** @type {!number} */
	var m42$17;
	/** @type {!number} */
	var m43$16;
	/** @type {!number} */
	var m44$16;
	/** @type {!number} */
	var m13$17;
	/** @type {!number} */
	var m23$17;
	/** @type {!number} */
	var m33$17;
	/** @type {!number} */
	var m43$17;
	/** @type {!number} */
	var m14$17;
	/** @type {!number} */
	var m24$17;
	/** @type {!number} */
	var m34$17;
	/** @type {!number} */
	var m44$17;
	/** @type {!number} */
	var m11$18;
	/** @type {!number} */
	var m21$18;
	/** @type {!number} */
	var m31$18;
	/** @type {!number} */
	var m41$18;
	/** @type {!number} */
	var m11$19;
	/** @type {!number} */
	var m12$18;
	/** @type {!number} */
	var m13$18;
	/** @type {!number} */
	var m14$18;
	/** @type {!number} */
	var m21$19;
	/** @type {!number} */
	var m12$19;
	/** @type {!number} */
	var m22$18;
	/** @type {!number} */
	var m22$19;
	/** @type {!number} */
	var m23$18;
	/** @type {!number} */
	var m32$18;
	/** @type {!number} */
	var m24$18;
	/** @type {!number} */
	var m42$18;
	/** @type {!number} */
	var m31$19;
	/** @type {!number} */
	var m32$19;
	/** @type {!number} */
	var m33$18;
	/** @type {!number} */
	var m34$18;
	/** @type {!number} */
	var m41$19;
	/** @type {!number} */
	var m42$19;
	/** @type {!number} */
	var m43$18;
	/** @type {!number} */
	var m44$18;
	/** @type {!number} */
	var m13$19;
	/** @type {!number} */
	var m23$19;
	/** @type {!number} */
	var m33$19;
	/** @type {!number} */
	var m43$19;
	/** @type {!number} */
	var m14$19;
	/** @type {!number} */
	var m24$19;
	/** @type {!number} */
	var m34$19;
	/** @type {!number} */
	var m44$19;
	/** @type {!number} */
	var m11$20;
	/** @type {!number} */
	var m21$20;
	/** @type {!number} */
	var m31$20;
	/** @type {!number} */
	var m41$20;
	/** @type {!number} */
	var m11$21;
	/** @type {!number} */
	var m12$20;
	/** @type {!number} */
	var m13$20;
	/** @type {!number} */
	var m14$20;
	/** @type {!number} */
	var m21$21;
	/** @type {!number} */
	var m12$21;
	/** @type {!number} */
	var m22$20;
	/** @type {!number} */
	var m22$21;
	/** @type {!number} */
	var m23$20;
	/** @type {!number} */
	var m32$20;
	/** @type {!number} */
	var m24$20;
	/** @type {!number} */
	var m42$20;
	/** @type {!number} */
	var m31$21;
	/** @type {!number} */
	var m32$21;
	/** @type {!number} */
	var m33$20;
	/** @type {!number} */
	var m34$20;
	/** @type {!number} */
	var m41$21;
	/** @type {!number} */
	var m42$21;
	/** @type {!number} */
	var m43$20;
	/** @type {!number} */
	var m44$20;
	/** @type {!number} */
	var m13$21;
	/** @type {!number} */
	var m23$21;
	/** @type {!number} */
	var m33$21;
	/** @type {!number} */
	var m43$21;
	/** @type {!number} */
	var m14$21;
	/** @type {!number} */
	var m24$21;
	/** @type {!number} */
	var m34$21;
	/** @type {!number} */
	var m44$21;
	/** @type {!number} */
	var m11$22;
	/** @type {!number} */
	var m21$22;
	/** @type {!number} */
	var m31$22;
	/** @type {!number} */
	var m41$22;
	/** @type {!number} */
	var m11$23;
	/** @type {!number} */
	var m12$22;
	/** @type {!number} */
	var m13$22;
	/** @type {!number} */
	var m14$22;
	/** @type {!number} */
	var m21$23;
	/** @type {!number} */
	var m12$23;
	/** @type {!number} */
	var m22$22;
	/** @type {!number} */
	var m22$23;
	/** @type {!number} */
	var m23$22;
	/** @type {!number} */
	var m32$22;
	/** @type {!number} */
	var m24$22;
	/** @type {!number} */
	var m42$22;
	/** @type {!number} */
	var m31$23;
	/** @type {!number} */
	var m32$23;
	/** @type {!number} */
	var m33$22;
	/** @type {!number} */
	var m34$22;
	/** @type {!number} */
	var m41$23;
	/** @type {!number} */
	var m42$23;
	/** @type {!number} */
	var m43$22;
	/** @type {!number} */
	var m44$22;
	/** @type {!number} */
	var m13$23;
	/** @type {!number} */
	var m23$23;
	/** @type {!number} */
	var m33$23;
	/** @type {!number} */
	var m43$23;
	/** @type {!number} */
	var m14$23;
	/** @type {!number} */
	var m24$23;
	/** @type {!number} */
	var m34$23;
	/** @type {!number} */
	var m44$23;
	gl = Kingyo.gl;
	prog = Kingyo.prog;
	gl.uniform3fv(Kingyo.ulocs.color, this._color);
	gl.uniform3fv(Kingyo.ulocs.color2, this._color2);
	gl.uniform4fv(Kingyo.ulocs.color2pos, this._color2pos);
	modelMatLoc = Kingyo.ulocs.modelMatrix;
	s = Math.sin(this._anim * 5);
	this$19 = new M44$();
	v$0 = this._pos;
	x$0$0 = v$0.x;
	y$0$0 = v$0.y;
	z$0$0 = v$0.z;
	this$19.m11 = this$19.m22 = this$19.m33 = this$19.m44 = 1;
	this$19.m21 = this$19.m31 = this$19.m41 = this$19.m12 = this$19.m32 = this$19.m42 = this$19.m13 = this$19.m23 = this$19.m24 = this$19.m14 = this$19.m24 = this$19.m34 = 0;
	this$19;
	this$19.m14 = x$0$0;
	this$19.m24 = y$0$0;
	this$19.m34 = z$0$0;
	this$17 = this$19;
	m$11 = this._spinMat;
	m0$0$11 = new M44$LM44$(this$17);
	this$17.m11 = (m11$1 = m0$0$11.m11) * (m11$0 = m$11.m11) + (m12$0 = m0$0$11.m12) * (m21$0 = m$11.m21) + (m13$0 = m0$0$11.m13) * (m31$0 = m$11.m31) + (m14$0 = m0$0$11.m14) * (m41$0 = m$11.m41);
	this$17.m21 = (m21$1 = m0$0$11.m21) * m11$0 + (m22$0 = m0$0$11.m22) * m21$0 + (m23$0 = m0$0$11.m23) * m31$0 + (m24$0 = m0$0$11.m24) * m41$0;
	this$17.m31 = (m31$1 = m0$0$11.m31) * m11$0 + (m32$1 = m0$0$11.m32) * m21$0 + (m33$0 = m0$0$11.m33) * m31$0 + (m34$0 = m0$0$11.m34) * m41$0;
	this$17.m41 = (m41$1 = m0$0$11.m41) * m11$0 + (m42$1 = m0$0$11.m42) * m21$0 + (m43$0 = m0$0$11.m43) * m31$0 + (m44$0 = m0$0$11.m44) * m41$0;
	this$17.m12 = m11$1 * (m12$1 = m$11.m12) + m12$0 * (m22$1 = m$11.m22) + m13$0 * (m32$0 = m$11.m32) + m14$0 * (m42$0 = m$11.m42);
	this$17.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
	this$17.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
	this$17.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
	this$17.m13 = m11$1 * (m13$1 = m$11.m13) + m12$0 * (m23$1 = m$11.m23) + m13$0 * (m33$1 = m$11.m33) + m14$0 * (m43$1 = m$11.m43);
	this$17.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
	this$17.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
	this$17.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
	this$17.m14 = m11$1 * (m14$1 = m$11.m14) + m12$0 * (m24$1 = m$11.m24) + m13$0 * (m34$1 = m$11.m34) + m14$0 * (m44$1 = m$11.m44);
	this$17.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
	this$17.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
	this$17.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
	this$11 = this$17;
	this$18 = new M44$();
	rad$0 = this._vangle - s / 10;
	m$10 = this$18.setRotate$NNNN(rad$0, 0, 0, 1);
	m0$0$10 = new M44$LM44$(this$11);
	this$11.m11 = (m11$3 = m0$0$10.m11) * (m11$2 = m$10.m11) + (m12$2 = m0$0$10.m12) * (m21$2 = m$10.m21) + (m13$2 = m0$0$10.m13) * (m31$2 = m$10.m31) + (m14$2 = m0$0$10.m14) * (m41$2 = m$10.m41);
	this$11.m21 = (m21$3 = m0$0$10.m21) * m11$2 + (m22$2 = m0$0$10.m22) * m21$2 + (m23$2 = m0$0$10.m23) * m31$2 + (m24$2 = m0$0$10.m24) * m41$2;
	this$11.m31 = (m31$3 = m0$0$10.m31) * m11$2 + (m32$3 = m0$0$10.m32) * m21$2 + (m33$2 = m0$0$10.m33) * m31$2 + (m34$2 = m0$0$10.m34) * m41$2;
	this$11.m41 = (m41$3 = m0$0$10.m41) * m11$2 + (m42$3 = m0$0$10.m42) * m21$2 + (m43$2 = m0$0$10.m43) * m31$2 + (m44$2 = m0$0$10.m44) * m41$2;
	this$11.m12 = m11$3 * (m12$3 = m$10.m12) + m12$2 * (m22$3 = m$10.m22) + m13$2 * (m32$2 = m$10.m32) + m14$2 * (m42$2 = m$10.m42);
	this$11.m22 = m21$3 * m12$3 + m22$2 * m22$3 + m23$2 * m32$2 + m24$2 * m42$2;
	this$11.m32 = m31$3 * m12$3 + m32$3 * m22$3 + m33$2 * m32$2 + m34$2 * m42$2;
	this$11.m42 = m41$3 * m12$3 + m42$3 * m22$3 + m43$2 * m32$2 + m44$2 * m42$2;
	this$11.m13 = m11$3 * (m13$3 = m$10.m13) + m12$2 * (m23$3 = m$10.m23) + m13$2 * (m33$3 = m$10.m33) + m14$2 * (m43$3 = m$10.m43);
	this$11.m23 = m21$3 * m13$3 + m22$2 * m23$3 + m23$2 * m33$3 + m24$2 * m43$3;
	this$11.m33 = m31$3 * m13$3 + m32$3 * m23$3 + m33$2 * m33$3 + m34$2 * m43$3;
	this$11.m43 = m41$3 * m13$3 + m42$3 * m23$3 + m43$2 * m33$3 + m44$2 * m43$3;
	this$11.m14 = m11$3 * (m14$3 = m$10.m14) + m12$2 * (m24$3 = m$10.m24) + m13$2 * (m34$3 = m$10.m34) + m14$2 * (m44$3 = m$10.m44);
	this$11.m24 = m21$3 * m14$3 + m22$2 * m24$3 + m23$2 * m34$3 + m24$2 * m44$3;
	this$11.m34 = m31$3 * m14$3 + m32$3 * m24$3 + m33$2 * m34$3 + m34$2 * m44$3;
	this$11.m44 = m41$3 * m14$3 + m42$3 * m24$3 + m43$2 * m34$3 + m44$2 * m44$3;
	this$5 = this$11;
	this$12 = new M44$();
	m$5 = this$12.setRotate$NNNN(1.5707963267948966, 1, 0, 0);
	m0$0$5 = new M44$LM44$(this$5);
	this$5.m11 = (m11$5 = m0$0$5.m11) * (m11$4 = m$5.m11) + (m12$4 = m0$0$5.m12) * (m21$4 = m$5.m21) + (m13$4 = m0$0$5.m13) * (m31$4 = m$5.m31) + (m14$4 = m0$0$5.m14) * (m41$4 = m$5.m41);
	this$5.m21 = (m21$5 = m0$0$5.m21) * m11$4 + (m22$4 = m0$0$5.m22) * m21$4 + (m23$4 = m0$0$5.m23) * m31$4 + (m24$4 = m0$0$5.m24) * m41$4;
	this$5.m31 = (m31$5 = m0$0$5.m31) * m11$4 + (m32$5 = m0$0$5.m32) * m21$4 + (m33$4 = m0$0$5.m33) * m31$4 + (m34$4 = m0$0$5.m34) * m41$4;
	this$5.m41 = (m41$5 = m0$0$5.m41) * m11$4 + (m42$5 = m0$0$5.m42) * m21$4 + (m43$4 = m0$0$5.m43) * m31$4 + (m44$4 = m0$0$5.m44) * m41$4;
	this$5.m12 = m11$5 * (m12$5 = m$5.m12) + m12$4 * (m22$5 = m$5.m22) + m13$4 * (m32$4 = m$5.m32) + m14$4 * (m42$4 = m$5.m42);
	this$5.m22 = m21$5 * m12$5 + m22$4 * m22$5 + m23$4 * m32$4 + m24$4 * m42$4;
	this$5.m32 = m31$5 * m12$5 + m32$5 * m22$5 + m33$4 * m32$4 + m34$4 * m42$4;
	this$5.m42 = m41$5 * m12$5 + m42$5 * m22$5 + m43$4 * m32$4 + m44$4 * m42$4;
	this$5.m13 = m11$5 * (m13$5 = m$5.m13) + m12$4 * (m23$5 = m$5.m23) + m13$4 * (m33$5 = m$5.m33) + m14$4 * (m43$5 = m$5.m43);
	this$5.m23 = m21$5 * m13$5 + m22$4 * m23$5 + m23$4 * m33$5 + m24$4 * m43$5;
	this$5.m33 = m31$5 * m13$5 + m32$5 * m23$5 + m33$4 * m33$5 + m34$4 * m43$5;
	this$5.m43 = m41$5 * m13$5 + m42$5 * m23$5 + m43$4 * m33$5 + m44$4 * m43$5;
	this$5.m14 = m11$5 * (m14$5 = m$5.m14) + m12$4 * (m24$5 = m$5.m24) + m13$4 * (m34$5 = m$5.m34) + m14$4 * (m44$5 = m$5.m44);
	this$5.m24 = m21$5 * m14$5 + m22$4 * m24$5 + m23$4 * m34$5 + m24$4 * m44$5;
	this$5.m34 = m31$5 * m14$5 + m32$5 * m24$5 + m33$4 * m34$5 + m34$4 * m44$5;
	this$5.m44 = m41$5 * m14$5 + m42$5 * m24$5 + m43$4 * m34$5 + m44$4 * m44$5;
	this$0 = this$5;
	this$6 = new M44$();
	m$0 = this$6.setRotate$NNNN(1.5707963267948966, 0, 1, 0);
	m0$0$0 = new M44$LM44$(this$0);
	this$0.m11 = (m11$7 = m0$0$0.m11) * (m11$6 = m$0.m11) + (m12$6 = m0$0$0.m12) * (m21$6 = m$0.m21) + (m13$6 = m0$0$0.m13) * (m31$6 = m$0.m31) + (m14$6 = m0$0$0.m14) * (m41$6 = m$0.m41);
	this$0.m21 = (m21$7 = m0$0$0.m21) * m11$6 + (m22$6 = m0$0$0.m22) * m21$6 + (m23$6 = m0$0$0.m23) * m31$6 + (m24$6 = m0$0$0.m24) * m41$6;
	this$0.m31 = (m31$7 = m0$0$0.m31) * m11$6 + (m32$7 = m0$0$0.m32) * m21$6 + (m33$6 = m0$0$0.m33) * m31$6 + (m34$6 = m0$0$0.m34) * m41$6;
	this$0.m41 = (m41$7 = m0$0$0.m41) * m11$6 + (m42$7 = m0$0$0.m42) * m21$6 + (m43$6 = m0$0$0.m43) * m31$6 + (m44$6 = m0$0$0.m44) * m41$6;
	this$0.m12 = m11$7 * (m12$7 = m$0.m12) + m12$6 * (m22$7 = m$0.m22) + m13$6 * (m32$6 = m$0.m32) + m14$6 * (m42$6 = m$0.m42);
	this$0.m22 = m21$7 * m12$7 + m22$6 * m22$7 + m23$6 * m32$6 + m24$6 * m42$6;
	this$0.m32 = m31$7 * m12$7 + m32$7 * m22$7 + m33$6 * m32$6 + m34$6 * m42$6;
	this$0.m42 = m41$7 * m12$7 + m42$7 * m22$7 + m43$6 * m32$6 + m44$6 * m42$6;
	this$0.m13 = m11$7 * (m13$7 = m$0.m13) + m12$6 * (m23$7 = m$0.m23) + m13$6 * (m33$7 = m$0.m33) + m14$6 * (m43$7 = m$0.m43);
	this$0.m23 = m21$7 * m13$7 + m22$6 * m23$7 + m23$6 * m33$7 + m24$6 * m43$7;
	this$0.m33 = m31$7 * m13$7 + m32$7 * m23$7 + m33$6 * m33$7 + m34$6 * m43$7;
	this$0.m43 = m41$7 * m13$7 + m42$7 * m23$7 + m43$6 * m33$7 + m44$6 * m43$7;
	this$0.m14 = m11$7 * (m14$7 = m$0.m14) + m12$6 * (m24$7 = m$0.m24) + m13$6 * (m34$7 = m$0.m34) + m14$6 * (m44$7 = m$0.m44);
	this$0.m24 = m21$7 * m14$7 + m22$6 * m24$7 + m23$6 * m34$7 + m24$6 * m44$7;
	this$0.m34 = m31$7 * m14$7 + m32$7 * m24$7 + m33$6 * m34$7 + m34$6 * m44$7;
	this$0.m44 = m41$7 * m14$7 + m42$7 * m24$7 + m43$6 * m34$7 + m44$6 * m44$7;
	bodyMat = this$0;
	gl.uniformMatrix4fv(modelMatLoc, false, [ bodyMat.m11, bodyMat.m21, bodyMat.m31, bodyMat.m41, bodyMat.m12, bodyMat.m22, bodyMat.m32, bodyMat.m42, bodyMat.m13, bodyMat.m23, bodyMat.m33, bodyMat.m43, bodyMat.m14, bodyMat.m24, bodyMat.m34, bodyMat.m44 ]);
	p$0 = Kingyo.body;
	gl$0 = Kingyo.gl;
	prog$0 = Kingyo.prog;
	gl$0.bindBuffer(gl$0.ARRAY_BUFFER, p$0.vbuf);
	gl$0.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:332] null access");
		}
		return v;
	}(Kingyo.alocs.vertex)), 3, gl$0.FLOAT, false, 0, 0);
	gl$0.bindBuffer(gl$0.ARRAY_BUFFER, p$0.nbuf);
	gl$0.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:335] null access");
		}
		return v;
	}(Kingyo.alocs.normal)), 3, gl$0.FLOAT, false, 0, 0);
	gl$0.bindBuffer(gl$0.ELEMENT_ARRAY_BUFFER, p$0.ibuf);
	gl$0.drawElements(gl$0.TRIANGLES, p$0.numi, gl$0.UNSIGNED_SHORT, 0);
	this$7 = new M44$LM44$(bodyMat);
	this$13 = new M44$();
	this$13.m11 = this$13.m22 = this$13.m33 = this$13.m44 = 1;
	this$13.m21 = this$13.m31 = this$13.m41 = this$13.m12 = this$13.m32 = this$13.m42 = this$13.m13 = this$13.m23 = this$13.m24 = this$13.m14 = this$13.m24 = this$13.m34 = 0;
	this$13;
	this$13.m14 = 0.5;
	this$13.m24 = -0.3;
	this$13.m34 = 0;
	m$6 = this$13;
	m0$0$6 = new M44$LM44$(this$7);
	this$7.m11 = (m11$9 = m0$0$6.m11) * (m11$8 = m$6.m11) + (m12$8 = m0$0$6.m12) * (m21$8 = m$6.m21) + (m13$8 = m0$0$6.m13) * (m31$8 = m$6.m31) + (m14$8 = m0$0$6.m14) * (m41$8 = m$6.m41);
	this$7.m21 = (m21$9 = m0$0$6.m21) * m11$8 + (m22$8 = m0$0$6.m22) * m21$8 + (m23$8 = m0$0$6.m23) * m31$8 + (m24$8 = m0$0$6.m24) * m41$8;
	this$7.m31 = (m31$9 = m0$0$6.m31) * m11$8 + (m32$9 = m0$0$6.m32) * m21$8 + (m33$8 = m0$0$6.m33) * m31$8 + (m34$8 = m0$0$6.m34) * m41$8;
	this$7.m41 = (m41$9 = m0$0$6.m41) * m11$8 + (m42$9 = m0$0$6.m42) * m21$8 + (m43$8 = m0$0$6.m43) * m31$8 + (m44$8 = m0$0$6.m44) * m41$8;
	this$7.m12 = m11$9 * (m12$9 = m$6.m12) + m12$8 * (m22$9 = m$6.m22) + m13$8 * (m32$8 = m$6.m32) + m14$8 * (m42$8 = m$6.m42);
	this$7.m22 = m21$9 * m12$9 + m22$8 * m22$9 + m23$8 * m32$8 + m24$8 * m42$8;
	this$7.m32 = m31$9 * m12$9 + m32$9 * m22$9 + m33$8 * m32$8 + m34$8 * m42$8;
	this$7.m42 = m41$9 * m12$9 + m42$9 * m22$9 + m43$8 * m32$8 + m44$8 * m42$8;
	this$7.m13 = m11$9 * (m13$9 = m$6.m13) + m12$8 * (m23$9 = m$6.m23) + m13$8 * (m33$9 = m$6.m33) + m14$8 * (m43$9 = m$6.m43);
	this$7.m23 = m21$9 * m13$9 + m22$8 * m23$9 + m23$8 * m33$9 + m24$8 * m43$9;
	this$7.m33 = m31$9 * m13$9 + m32$9 * m23$9 + m33$8 * m33$9 + m34$8 * m43$9;
	this$7.m43 = m41$9 * m13$9 + m42$9 * m23$9 + m43$8 * m33$9 + m44$8 * m43$9;
	this$7.m14 = m11$9 * (m14$9 = m$6.m14) + m12$8 * (m24$9 = m$6.m24) + m13$8 * (m34$9 = m$6.m34) + m14$8 * (m44$9 = m$6.m44);
	this$7.m24 = m21$9 * m14$9 + m22$8 * m24$9 + m23$8 * m34$9 + m24$8 * m44$9;
	this$7.m34 = m31$9 * m14$9 + m32$9 * m24$9 + m33$8 * m34$9 + m34$8 * m44$9;
	this$7.m44 = m41$9 * m14$9 + m42$9 * m24$9 + m43$8 * m34$9 + m44$8 * m44$9;
	this$1 = this$7;
	m$1 = new M44$().setRotate$NNNN(1 + s / 2, 0.2, 1, -0.5);
	m0$0$1 = new M44$LM44$(this$1);
	this$1.m11 = (m11$11 = m0$0$1.m11) * (m11$10 = m$1.m11) + (m12$10 = m0$0$1.m12) * (m21$10 = m$1.m21) + (m13$10 = m0$0$1.m13) * (m31$10 = m$1.m31) + (m14$10 = m0$0$1.m14) * (m41$10 = m$1.m41);
	this$1.m21 = (m21$11 = m0$0$1.m21) * m11$10 + (m22$10 = m0$0$1.m22) * m21$10 + (m23$10 = m0$0$1.m23) * m31$10 + (m24$10 = m0$0$1.m24) * m41$10;
	this$1.m31 = (m31$11 = m0$0$1.m31) * m11$10 + (m32$11 = m0$0$1.m32) * m21$10 + (m33$10 = m0$0$1.m33) * m31$10 + (m34$10 = m0$0$1.m34) * m41$10;
	this$1.m41 = (m41$11 = m0$0$1.m41) * m11$10 + (m42$11 = m0$0$1.m42) * m21$10 + (m43$10 = m0$0$1.m43) * m31$10 + (m44$10 = m0$0$1.m44) * m41$10;
	this$1.m12 = m11$11 * (m12$11 = m$1.m12) + m12$10 * (m22$11 = m$1.m22) + m13$10 * (m32$10 = m$1.m32) + m14$10 * (m42$10 = m$1.m42);
	this$1.m22 = m21$11 * m12$11 + m22$10 * m22$11 + m23$10 * m32$10 + m24$10 * m42$10;
	this$1.m32 = m31$11 * m12$11 + m32$11 * m22$11 + m33$10 * m32$10 + m34$10 * m42$10;
	this$1.m42 = m41$11 * m12$11 + m42$11 * m22$11 + m43$10 * m32$10 + m44$10 * m42$10;
	this$1.m13 = m11$11 * (m13$11 = m$1.m13) + m12$10 * (m23$11 = m$1.m23) + m13$10 * (m33$11 = m$1.m33) + m14$10 * (m43$11 = m$1.m43);
	this$1.m23 = m21$11 * m13$11 + m22$10 * m23$11 + m23$10 * m33$11 + m24$10 * m43$11;
	this$1.m33 = m31$11 * m13$11 + m32$11 * m23$11 + m33$10 * m33$11 + m34$10 * m43$11;
	this$1.m43 = m41$11 * m13$11 + m42$11 * m23$11 + m43$10 * m33$11 + m44$10 * m43$11;
	this$1.m14 = m11$11 * (m14$11 = m$1.m14) + m12$10 * (m24$11 = m$1.m24) + m13$10 * (m34$11 = m$1.m34) + m14$10 * (m44$11 = m$1.m44);
	this$1.m24 = m21$11 * m14$11 + m22$10 * m24$11 + m23$10 * m34$11 + m24$10 * m44$11;
	this$1.m34 = m31$11 * m14$11 + m32$11 * m24$11 + m33$10 * m34$11 + m34$10 * m44$11;
	this$1.m44 = m41$11 * m14$11 + m42$11 * m24$11 + m43$10 * m34$11 + m44$10 * m44$11;
	lfinMat = this$1;
	gl.uniformMatrix4fv(modelMatLoc, false, [ lfinMat.m11, lfinMat.m21, lfinMat.m31, lfinMat.m41, lfinMat.m12, lfinMat.m22, lfinMat.m32, lfinMat.m42, lfinMat.m13, lfinMat.m23, lfinMat.m33, lfinMat.m43, lfinMat.m14, lfinMat.m24, lfinMat.m34, lfinMat.m44 ]);
	p$1 = Kingyo.lfin;
	gl$1 = Kingyo.gl;
	prog$1 = Kingyo.prog;
	gl$1.bindBuffer(gl$1.ARRAY_BUFFER, p$1.vbuf);
	gl$1.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:332] null access");
		}
		return v;
	}(Kingyo.alocs.vertex)), 3, gl$1.FLOAT, false, 0, 0);
	gl$1.bindBuffer(gl$1.ARRAY_BUFFER, p$1.nbuf);
	gl$1.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:335] null access");
		}
		return v;
	}(Kingyo.alocs.normal)), 3, gl$1.FLOAT, false, 0, 0);
	gl$1.bindBuffer(gl$1.ELEMENT_ARRAY_BUFFER, p$1.ibuf);
	gl$1.drawElements(gl$1.TRIANGLES, p$1.numi, gl$1.UNSIGNED_SHORT, 0);
	this$8 = new M44$LM44$(bodyMat);
	this$14 = new M44$();
	this$14.m11 = this$14.m22 = this$14.m33 = this$14.m44 = 1;
	this$14.m21 = this$14.m31 = this$14.m41 = this$14.m12 = this$14.m32 = this$14.m42 = this$14.m13 = this$14.m23 = this$14.m24 = this$14.m14 = this$14.m24 = this$14.m34 = 0;
	this$14;
	this$14.m14 = -0.5;
	this$14.m24 = -0.3;
	this$14.m34 = 0;
	m$7 = this$14;
	m0$0$7 = new M44$LM44$(this$8);
	this$8.m11 = (m11$13 = m0$0$7.m11) * (m11$12 = m$7.m11) + (m12$12 = m0$0$7.m12) * (m21$12 = m$7.m21) + (m13$12 = m0$0$7.m13) * (m31$12 = m$7.m31) + (m14$12 = m0$0$7.m14) * (m41$12 = m$7.m41);
	this$8.m21 = (m21$13 = m0$0$7.m21) * m11$12 + (m22$12 = m0$0$7.m22) * m21$12 + (m23$12 = m0$0$7.m23) * m31$12 + (m24$12 = m0$0$7.m24) * m41$12;
	this$8.m31 = (m31$13 = m0$0$7.m31) * m11$12 + (m32$13 = m0$0$7.m32) * m21$12 + (m33$12 = m0$0$7.m33) * m31$12 + (m34$12 = m0$0$7.m34) * m41$12;
	this$8.m41 = (m41$13 = m0$0$7.m41) * m11$12 + (m42$13 = m0$0$7.m42) * m21$12 + (m43$12 = m0$0$7.m43) * m31$12 + (m44$12 = m0$0$7.m44) * m41$12;
	this$8.m12 = m11$13 * (m12$13 = m$7.m12) + m12$12 * (m22$13 = m$7.m22) + m13$12 * (m32$12 = m$7.m32) + m14$12 * (m42$12 = m$7.m42);
	this$8.m22 = m21$13 * m12$13 + m22$12 * m22$13 + m23$12 * m32$12 + m24$12 * m42$12;
	this$8.m32 = m31$13 * m12$13 + m32$13 * m22$13 + m33$12 * m32$12 + m34$12 * m42$12;
	this$8.m42 = m41$13 * m12$13 + m42$13 * m22$13 + m43$12 * m32$12 + m44$12 * m42$12;
	this$8.m13 = m11$13 * (m13$13 = m$7.m13) + m12$12 * (m23$13 = m$7.m23) + m13$12 * (m33$13 = m$7.m33) + m14$12 * (m43$13 = m$7.m43);
	this$8.m23 = m21$13 * m13$13 + m22$12 * m23$13 + m23$12 * m33$13 + m24$12 * m43$13;
	this$8.m33 = m31$13 * m13$13 + m32$13 * m23$13 + m33$12 * m33$13 + m34$12 * m43$13;
	this$8.m43 = m41$13 * m13$13 + m42$13 * m23$13 + m43$12 * m33$13 + m44$12 * m43$13;
	this$8.m14 = m11$13 * (m14$13 = m$7.m14) + m12$12 * (m24$13 = m$7.m24) + m13$12 * (m34$13 = m$7.m34) + m14$12 * (m44$13 = m$7.m44);
	this$8.m24 = m21$13 * m14$13 + m22$12 * m24$13 + m23$12 * m34$13 + m24$12 * m44$13;
	this$8.m34 = m31$13 * m14$13 + m32$13 * m24$13 + m33$12 * m34$13 + m34$12 * m44$13;
	this$8.m44 = m41$13 * m14$13 + m42$13 * m24$13 + m43$12 * m34$13 + m44$12 * m44$13;
	this$2 = this$8;
	m$2 = new M44$().setRotate$NNNN(-1 - s / 2, -0.2, 1, -0.5);
	m0$0$2 = new M44$LM44$(this$2);
	this$2.m11 = (m11$15 = m0$0$2.m11) * (m11$14 = m$2.m11) + (m12$14 = m0$0$2.m12) * (m21$14 = m$2.m21) + (m13$14 = m0$0$2.m13) * (m31$14 = m$2.m31) + (m14$14 = m0$0$2.m14) * (m41$14 = m$2.m41);
	this$2.m21 = (m21$15 = m0$0$2.m21) * m11$14 + (m22$14 = m0$0$2.m22) * m21$14 + (m23$14 = m0$0$2.m23) * m31$14 + (m24$14 = m0$0$2.m24) * m41$14;
	this$2.m31 = (m31$15 = m0$0$2.m31) * m11$14 + (m32$15 = m0$0$2.m32) * m21$14 + (m33$14 = m0$0$2.m33) * m31$14 + (m34$14 = m0$0$2.m34) * m41$14;
	this$2.m41 = (m41$15 = m0$0$2.m41) * m11$14 + (m42$15 = m0$0$2.m42) * m21$14 + (m43$14 = m0$0$2.m43) * m31$14 + (m44$14 = m0$0$2.m44) * m41$14;
	this$2.m12 = m11$15 * (m12$15 = m$2.m12) + m12$14 * (m22$15 = m$2.m22) + m13$14 * (m32$14 = m$2.m32) + m14$14 * (m42$14 = m$2.m42);
	this$2.m22 = m21$15 * m12$15 + m22$14 * m22$15 + m23$14 * m32$14 + m24$14 * m42$14;
	this$2.m32 = m31$15 * m12$15 + m32$15 * m22$15 + m33$14 * m32$14 + m34$14 * m42$14;
	this$2.m42 = m41$15 * m12$15 + m42$15 * m22$15 + m43$14 * m32$14 + m44$14 * m42$14;
	this$2.m13 = m11$15 * (m13$15 = m$2.m13) + m12$14 * (m23$15 = m$2.m23) + m13$14 * (m33$15 = m$2.m33) + m14$14 * (m43$15 = m$2.m43);
	this$2.m23 = m21$15 * m13$15 + m22$14 * m23$15 + m23$14 * m33$15 + m24$14 * m43$15;
	this$2.m33 = m31$15 * m13$15 + m32$15 * m23$15 + m33$14 * m33$15 + m34$14 * m43$15;
	this$2.m43 = m41$15 * m13$15 + m42$15 * m23$15 + m43$14 * m33$15 + m44$14 * m43$15;
	this$2.m14 = m11$15 * (m14$15 = m$2.m14) + m12$14 * (m24$15 = m$2.m24) + m13$14 * (m34$15 = m$2.m34) + m14$14 * (m44$15 = m$2.m44);
	this$2.m24 = m21$15 * m14$15 + m22$14 * m24$15 + m23$14 * m34$15 + m24$14 * m44$15;
	this$2.m34 = m31$15 * m14$15 + m32$15 * m24$15 + m33$14 * m34$15 + m34$14 * m44$15;
	this$2.m44 = m41$15 * m14$15 + m42$15 * m24$15 + m43$14 * m34$15 + m44$14 * m44$15;
	rfinMat = this$2;
	gl.uniformMatrix4fv(modelMatLoc, false, [ rfinMat.m11, rfinMat.m21, rfinMat.m31, rfinMat.m41, rfinMat.m12, rfinMat.m22, rfinMat.m32, rfinMat.m42, rfinMat.m13, rfinMat.m23, rfinMat.m33, rfinMat.m43, rfinMat.m14, rfinMat.m24, rfinMat.m34, rfinMat.m44 ]);
	p$2 = Kingyo.rfin;
	gl$2 = Kingyo.gl;
	prog$2 = Kingyo.prog;
	gl$2.bindBuffer(gl$2.ARRAY_BUFFER, p$2.vbuf);
	gl$2.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:332] null access");
		}
		return v;
	}(Kingyo.alocs.vertex)), 3, gl$2.FLOAT, false, 0, 0);
	gl$2.bindBuffer(gl$2.ARRAY_BUFFER, p$2.nbuf);
	gl$2.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:335] null access");
		}
		return v;
	}(Kingyo.alocs.normal)), 3, gl$2.FLOAT, false, 0, 0);
	gl$2.bindBuffer(gl$2.ELEMENT_ARRAY_BUFFER, p$2.ibuf);
	gl$2.drawElements(gl$2.TRIANGLES, p$2.numi, gl$2.UNSIGNED_SHORT, 0);
	this$9 = new M44$LM44$(bodyMat);
	this$15 = new M44$();
	this$15.m11 = this$15.m22 = this$15.m33 = this$15.m44 = 1;
	this$15.m21 = this$15.m31 = this$15.m41 = this$15.m12 = this$15.m32 = this$15.m42 = this$15.m13 = this$15.m23 = this$15.m24 = this$15.m14 = this$15.m24 = this$15.m34 = 0;
	this$15;
	this$15.m14 = 0;
	this$15.m24 = 0.7;
	this$15.m34 = 0;
	m$8 = this$15;
	m0$0$8 = new M44$LM44$(this$9);
	this$9.m11 = (m11$17 = m0$0$8.m11) * (m11$16 = m$8.m11) + (m12$16 = m0$0$8.m12) * (m21$16 = m$8.m21) + (m13$16 = m0$0$8.m13) * (m31$16 = m$8.m31) + (m14$16 = m0$0$8.m14) * (m41$16 = m$8.m41);
	this$9.m21 = (m21$17 = m0$0$8.m21) * m11$16 + (m22$16 = m0$0$8.m22) * m21$16 + (m23$16 = m0$0$8.m23) * m31$16 + (m24$16 = m0$0$8.m24) * m41$16;
	this$9.m31 = (m31$17 = m0$0$8.m31) * m11$16 + (m32$17 = m0$0$8.m32) * m21$16 + (m33$16 = m0$0$8.m33) * m31$16 + (m34$16 = m0$0$8.m34) * m41$16;
	this$9.m41 = (m41$17 = m0$0$8.m41) * m11$16 + (m42$17 = m0$0$8.m42) * m21$16 + (m43$16 = m0$0$8.m43) * m31$16 + (m44$16 = m0$0$8.m44) * m41$16;
	this$9.m12 = m11$17 * (m12$17 = m$8.m12) + m12$16 * (m22$17 = m$8.m22) + m13$16 * (m32$16 = m$8.m32) + m14$16 * (m42$16 = m$8.m42);
	this$9.m22 = m21$17 * m12$17 + m22$16 * m22$17 + m23$16 * m32$16 + m24$16 * m42$16;
	this$9.m32 = m31$17 * m12$17 + m32$17 * m22$17 + m33$16 * m32$16 + m34$16 * m42$16;
	this$9.m42 = m41$17 * m12$17 + m42$17 * m22$17 + m43$16 * m32$16 + m44$16 * m42$16;
	this$9.m13 = m11$17 * (m13$17 = m$8.m13) + m12$16 * (m23$17 = m$8.m23) + m13$16 * (m33$17 = m$8.m33) + m14$16 * (m43$17 = m$8.m43);
	this$9.m23 = m21$17 * m13$17 + m22$16 * m23$17 + m23$16 * m33$17 + m24$16 * m43$17;
	this$9.m33 = m31$17 * m13$17 + m32$17 * m23$17 + m33$16 * m33$17 + m34$16 * m43$17;
	this$9.m43 = m41$17 * m13$17 + m42$17 * m23$17 + m43$16 * m33$17 + m44$16 * m43$17;
	this$9.m14 = m11$17 * (m14$17 = m$8.m14) + m12$16 * (m24$17 = m$8.m24) + m13$16 * (m34$17 = m$8.m34) + m14$16 * (m44$17 = m$8.m44);
	this$9.m24 = m21$17 * m14$17 + m22$16 * m24$17 + m23$16 * m34$17 + m24$16 * m44$17;
	this$9.m34 = m31$17 * m14$17 + m32$17 * m24$17 + m33$16 * m34$17 + m34$16 * m44$17;
	this$9.m44 = m41$17 * m14$17 + m42$17 * m24$17 + m43$16 * m34$17 + m44$16 * m44$17;
	this$3 = this$9;
	m$3 = new M44$().setRotate$NNNN(s / 2, 0, 1, 1);
	m0$0$3 = new M44$LM44$(this$3);
	this$3.m11 = (m11$19 = m0$0$3.m11) * (m11$18 = m$3.m11) + (m12$18 = m0$0$3.m12) * (m21$18 = m$3.m21) + (m13$18 = m0$0$3.m13) * (m31$18 = m$3.m31) + (m14$18 = m0$0$3.m14) * (m41$18 = m$3.m41);
	this$3.m21 = (m21$19 = m0$0$3.m21) * m11$18 + (m22$18 = m0$0$3.m22) * m21$18 + (m23$18 = m0$0$3.m23) * m31$18 + (m24$18 = m0$0$3.m24) * m41$18;
	this$3.m31 = (m31$19 = m0$0$3.m31) * m11$18 + (m32$19 = m0$0$3.m32) * m21$18 + (m33$18 = m0$0$3.m33) * m31$18 + (m34$18 = m0$0$3.m34) * m41$18;
	this$3.m41 = (m41$19 = m0$0$3.m41) * m11$18 + (m42$19 = m0$0$3.m42) * m21$18 + (m43$18 = m0$0$3.m43) * m31$18 + (m44$18 = m0$0$3.m44) * m41$18;
	this$3.m12 = m11$19 * (m12$19 = m$3.m12) + m12$18 * (m22$19 = m$3.m22) + m13$18 * (m32$18 = m$3.m32) + m14$18 * (m42$18 = m$3.m42);
	this$3.m22 = m21$19 * m12$19 + m22$18 * m22$19 + m23$18 * m32$18 + m24$18 * m42$18;
	this$3.m32 = m31$19 * m12$19 + m32$19 * m22$19 + m33$18 * m32$18 + m34$18 * m42$18;
	this$3.m42 = m41$19 * m12$19 + m42$19 * m22$19 + m43$18 * m32$18 + m44$18 * m42$18;
	this$3.m13 = m11$19 * (m13$19 = m$3.m13) + m12$18 * (m23$19 = m$3.m23) + m13$18 * (m33$19 = m$3.m33) + m14$18 * (m43$19 = m$3.m43);
	this$3.m23 = m21$19 * m13$19 + m22$18 * m23$19 + m23$18 * m33$19 + m24$18 * m43$19;
	this$3.m33 = m31$19 * m13$19 + m32$19 * m23$19 + m33$18 * m33$19 + m34$18 * m43$19;
	this$3.m43 = m41$19 * m13$19 + m42$19 * m23$19 + m43$18 * m33$19 + m44$18 * m43$19;
	this$3.m14 = m11$19 * (m14$19 = m$3.m14) + m12$18 * (m24$19 = m$3.m24) + m13$18 * (m34$19 = m$3.m34) + m14$18 * (m44$19 = m$3.m44);
	this$3.m24 = m21$19 * m14$19 + m22$18 * m24$19 + m23$18 * m34$19 + m24$18 * m44$19;
	this$3.m34 = m31$19 * m14$19 + m32$19 * m24$19 + m33$18 * m34$19 + m34$18 * m44$19;
	this$3.m44 = m41$19 * m14$19 + m42$19 * m24$19 + m43$18 * m34$19 + m44$18 * m44$19;
	bfinMat = this$3;
	gl.uniformMatrix4fv(modelMatLoc, false, [ bfinMat.m11, bfinMat.m21, bfinMat.m31, bfinMat.m41, bfinMat.m12, bfinMat.m22, bfinMat.m32, bfinMat.m42, bfinMat.m13, bfinMat.m23, bfinMat.m33, bfinMat.m43, bfinMat.m14, bfinMat.m24, bfinMat.m34, bfinMat.m44 ]);
	p$3 = Kingyo.bfin;
	gl$3 = Kingyo.gl;
	prog$3 = Kingyo.prog;
	gl$3.bindBuffer(gl$3.ARRAY_BUFFER, p$3.vbuf);
	gl$3.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:332] null access");
		}
		return v;
	}(Kingyo.alocs.vertex)), 3, gl$3.FLOAT, false, 0, 0);
	gl$3.bindBuffer(gl$3.ARRAY_BUFFER, p$3.nbuf);
	gl$3.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:335] null access");
		}
		return v;
	}(Kingyo.alocs.normal)), 3, gl$3.FLOAT, false, 0, 0);
	gl$3.bindBuffer(gl$3.ELEMENT_ARRAY_BUFFER, p$3.ibuf);
	gl$3.drawElements(gl$3.TRIANGLES, p$3.numi, gl$3.UNSIGNED_SHORT, 0);
	this$10 = new M44$LM44$(bodyMat);
	this$16 = new M44$();
	this$16.m11 = this$16.m22 = this$16.m33 = this$16.m44 = 1;
	this$16.m21 = this$16.m31 = this$16.m41 = this$16.m12 = this$16.m32 = this$16.m42 = this$16.m13 = this$16.m23 = this$16.m24 = this$16.m14 = this$16.m24 = this$16.m34 = 0;
	this$16;
	this$16.m14 = 0;
	this$16.m24 = 0;
	this$16.m34 = -0.7;
	m$9 = this$16;
	m0$0$9 = new M44$LM44$(this$10);
	this$10.m11 = (m11$21 = m0$0$9.m11) * (m11$20 = m$9.m11) + (m12$20 = m0$0$9.m12) * (m21$20 = m$9.m21) + (m13$20 = m0$0$9.m13) * (m31$20 = m$9.m31) + (m14$20 = m0$0$9.m14) * (m41$20 = m$9.m41);
	this$10.m21 = (m21$21 = m0$0$9.m21) * m11$20 + (m22$20 = m0$0$9.m22) * m21$20 + (m23$20 = m0$0$9.m23) * m31$20 + (m24$20 = m0$0$9.m24) * m41$20;
	this$10.m31 = (m31$21 = m0$0$9.m31) * m11$20 + (m32$21 = m0$0$9.m32) * m21$20 + (m33$20 = m0$0$9.m33) * m31$20 + (m34$20 = m0$0$9.m34) * m41$20;
	this$10.m41 = (m41$21 = m0$0$9.m41) * m11$20 + (m42$21 = m0$0$9.m42) * m21$20 + (m43$20 = m0$0$9.m43) * m31$20 + (m44$20 = m0$0$9.m44) * m41$20;
	this$10.m12 = m11$21 * (m12$21 = m$9.m12) + m12$20 * (m22$21 = m$9.m22) + m13$20 * (m32$20 = m$9.m32) + m14$20 * (m42$20 = m$9.m42);
	this$10.m22 = m21$21 * m12$21 + m22$20 * m22$21 + m23$20 * m32$20 + m24$20 * m42$20;
	this$10.m32 = m31$21 * m12$21 + m32$21 * m22$21 + m33$20 * m32$20 + m34$20 * m42$20;
	this$10.m42 = m41$21 * m12$21 + m42$21 * m22$21 + m43$20 * m32$20 + m44$20 * m42$20;
	this$10.m13 = m11$21 * (m13$21 = m$9.m13) + m12$20 * (m23$21 = m$9.m23) + m13$20 * (m33$21 = m$9.m33) + m14$20 * (m43$21 = m$9.m43);
	this$10.m23 = m21$21 * m13$21 + m22$20 * m23$21 + m23$20 * m33$21 + m24$20 * m43$21;
	this$10.m33 = m31$21 * m13$21 + m32$21 * m23$21 + m33$20 * m33$21 + m34$20 * m43$21;
	this$10.m43 = m41$21 * m13$21 + m42$21 * m23$21 + m43$20 * m33$21 + m44$20 * m43$21;
	this$10.m14 = m11$21 * (m14$21 = m$9.m14) + m12$20 * (m24$21 = m$9.m24) + m13$20 * (m34$21 = m$9.m34) + m14$20 * (m44$21 = m$9.m44);
	this$10.m24 = m21$21 * m14$21 + m22$20 * m24$21 + m23$20 * m34$21 + m24$20 * m44$21;
	this$10.m34 = m31$21 * m14$21 + m32$21 * m24$21 + m33$20 * m34$21 + m34$20 * m44$21;
	this$10.m44 = m41$21 * m14$21 + m42$21 * m24$21 + m43$20 * m34$21 + m44$20 * m44$21;
	this$4 = this$10;
	m$4 = new M44$().setRotate$NNNN(s / 2, 0, 1, 0);
	m0$0$4 = new M44$LM44$(this$4);
	this$4.m11 = (m11$23 = m0$0$4.m11) * (m11$22 = m$4.m11) + (m12$22 = m0$0$4.m12) * (m21$22 = m$4.m21) + (m13$22 = m0$0$4.m13) * (m31$22 = m$4.m31) + (m14$22 = m0$0$4.m14) * (m41$22 = m$4.m41);
	this$4.m21 = (m21$23 = m0$0$4.m21) * m11$22 + (m22$22 = m0$0$4.m22) * m21$22 + (m23$22 = m0$0$4.m23) * m31$22 + (m24$22 = m0$0$4.m24) * m41$22;
	this$4.m31 = (m31$23 = m0$0$4.m31) * m11$22 + (m32$23 = m0$0$4.m32) * m21$22 + (m33$22 = m0$0$4.m33) * m31$22 + (m34$22 = m0$0$4.m34) * m41$22;
	this$4.m41 = (m41$23 = m0$0$4.m41) * m11$22 + (m42$23 = m0$0$4.m42) * m21$22 + (m43$22 = m0$0$4.m43) * m31$22 + (m44$22 = m0$0$4.m44) * m41$22;
	this$4.m12 = m11$23 * (m12$23 = m$4.m12) + m12$22 * (m22$23 = m$4.m22) + m13$22 * (m32$22 = m$4.m32) + m14$22 * (m42$22 = m$4.m42);
	this$4.m22 = m21$23 * m12$23 + m22$22 * m22$23 + m23$22 * m32$22 + m24$22 * m42$22;
	this$4.m32 = m31$23 * m12$23 + m32$23 * m22$23 + m33$22 * m32$22 + m34$22 * m42$22;
	this$4.m42 = m41$23 * m12$23 + m42$23 * m22$23 + m43$22 * m32$22 + m44$22 * m42$22;
	this$4.m13 = m11$23 * (m13$23 = m$4.m13) + m12$22 * (m23$23 = m$4.m23) + m13$22 * (m33$23 = m$4.m33) + m14$22 * (m43$23 = m$4.m43);
	this$4.m23 = m21$23 * m13$23 + m22$22 * m23$23 + m23$22 * m33$23 + m24$22 * m43$23;
	this$4.m33 = m31$23 * m13$23 + m32$23 * m23$23 + m33$22 * m33$23 + m34$22 * m43$23;
	this$4.m43 = m41$23 * m13$23 + m42$23 * m23$23 + m43$22 * m33$23 + m44$22 * m43$23;
	this$4.m14 = m11$23 * (m14$23 = m$4.m14) + m12$22 * (m24$23 = m$4.m24) + m13$22 * (m34$23 = m$4.m34) + m14$22 * (m44$23 = m$4.m44);
	this$4.m24 = m21$23 * m14$23 + m22$22 * m24$23 + m23$22 * m34$23 + m24$22 * m44$23;
	this$4.m34 = m31$23 * m14$23 + m32$23 * m24$23 + m33$22 * m34$23 + m34$22 * m44$23;
	this$4.m44 = m41$23 * m14$23 + m42$23 * m24$23 + m43$22 * m34$23 + m44$22 * m44$23;
	tfinMat = this$4;
	gl.uniformMatrix4fv(modelMatLoc, false, [ tfinMat.m11, tfinMat.m21, tfinMat.m31, tfinMat.m41, tfinMat.m12, tfinMat.m22, tfinMat.m32, tfinMat.m42, tfinMat.m13, tfinMat.m23, tfinMat.m33, tfinMat.m43, tfinMat.m14, tfinMat.m24, tfinMat.m34, tfinMat.m44 ]);
	p$4 = Kingyo.tfin;
	gl$4 = Kingyo.gl;
	prog$4 = Kingyo.prog;
	gl$4.bindBuffer(gl$4.ARRAY_BUFFER, p$4.vbuf);
	gl$4.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:332] null access");
		}
		return v;
	}(Kingyo.alocs.vertex)), 3, gl$4.FLOAT, false, 0, 0);
	gl$4.bindBuffer(gl$4.ARRAY_BUFFER, p$4.nbuf);
	gl$4.vertexAttribPointer((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[kingyo.jsx:335] null access");
		}
		return v;
	}(Kingyo.alocs.normal)), 3, gl$4.FLOAT, false, 0, 0);
	gl$4.bindBuffer(gl$4.ELEMENT_ARRAY_BUFFER, p$4.ibuf);
	gl$4.drawElements(gl$4.TRIANGLES, p$4.numi, gl$4.UNSIGNED_SHORT, 0);
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
	var m0$0$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {M44} */
	var m0$0$1;
	/** @type {M44} */
	var this$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var m$2;
	/** @type {M44} */
	var m0$0$2;
	/** @type {M44} */
	var this$4;
	/** @type {M44} */
	var this$5;
	/** @type {M44} */
	var m$3;
	/** @type {M44} */
	var m0$0$3;
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
	/** @type {!number} */
	var m11$2;
	/** @type {!number} */
	var m21$2;
	/** @type {!number} */
	var m31$2;
	/** @type {!number} */
	var m41$2;
	/** @type {!number} */
	var m11$3;
	/** @type {!number} */
	var m12$2;
	/** @type {!number} */
	var m13$2;
	/** @type {!number} */
	var m14$2;
	/** @type {!number} */
	var m21$3;
	/** @type {!number} */
	var m12$3;
	/** @type {!number} */
	var m22$2;
	/** @type {!number} */
	var m22$3;
	/** @type {!number} */
	var m23$2;
	/** @type {!number} */
	var m32$2;
	/** @type {!number} */
	var m24$2;
	/** @type {!number} */
	var m42$2;
	/** @type {!number} */
	var m31$3;
	/** @type {!number} */
	var m32$3;
	/** @type {!number} */
	var m33$2;
	/** @type {!number} */
	var m34$2;
	/** @type {!number} */
	var m41$3;
	/** @type {!number} */
	var m42$3;
	/** @type {!number} */
	var m43$2;
	/** @type {!number} */
	var m44$2;
	/** @type {!number} */
	var m13$3;
	/** @type {!number} */
	var m23$3;
	/** @type {!number} */
	var m33$3;
	/** @type {!number} */
	var m43$3;
	/** @type {!number} */
	var m14$3;
	/** @type {!number} */
	var m24$3;
	/** @type {!number} */
	var m34$3;
	/** @type {!number} */
	var m44$3;
	/** @type {!number} */
	var m11$4;
	/** @type {!number} */
	var m21$4;
	/** @type {!number} */
	var m31$4;
	/** @type {!number} */
	var m41$4;
	/** @type {!number} */
	var m11$5;
	/** @type {!number} */
	var m12$4;
	/** @type {!number} */
	var m13$4;
	/** @type {!number} */
	var m14$4;
	/** @type {!number} */
	var m21$5;
	/** @type {!number} */
	var m12$5;
	/** @type {!number} */
	var m22$4;
	/** @type {!number} */
	var m22$5;
	/** @type {!number} */
	var m23$4;
	/** @type {!number} */
	var m32$4;
	/** @type {!number} */
	var m24$4;
	/** @type {!number} */
	var m42$4;
	/** @type {!number} */
	var m31$5;
	/** @type {!number} */
	var m32$5;
	/** @type {!number} */
	var m33$4;
	/** @type {!number} */
	var m34$4;
	/** @type {!number} */
	var m41$5;
	/** @type {!number} */
	var m42$5;
	/** @type {!number} */
	var m43$4;
	/** @type {!number} */
	var m44$4;
	/** @type {!number} */
	var m13$5;
	/** @type {!number} */
	var m23$5;
	/** @type {!number} */
	var m33$5;
	/** @type {!number} */
	var m43$5;
	/** @type {!number} */
	var m14$5;
	/** @type {!number} */
	var m24$5;
	/** @type {!number} */
	var m34$5;
	/** @type {!number} */
	var m44$5;
	/** @type {!number} */
	var m11$6;
	/** @type {!number} */
	var m21$6;
	/** @type {!number} */
	var m31$6;
	/** @type {!number} */
	var m41$6;
	/** @type {!number} */
	var m11$7;
	/** @type {!number} */
	var m12$6;
	/** @type {!number} */
	var m13$6;
	/** @type {!number} */
	var m14$6;
	/** @type {!number} */
	var m21$7;
	/** @type {!number} */
	var m12$7;
	/** @type {!number} */
	var m22$6;
	/** @type {!number} */
	var m22$7;
	/** @type {!number} */
	var m23$6;
	/** @type {!number} */
	var m32$6;
	/** @type {!number} */
	var m24$6;
	/** @type {!number} */
	var m42$6;
	/** @type {!number} */
	var m31$7;
	/** @type {!number} */
	var m32$7;
	/** @type {!number} */
	var m33$6;
	/** @type {!number} */
	var m34$6;
	/** @type {!number} */
	var m41$7;
	/** @type {!number} */
	var m42$7;
	/** @type {!number} */
	var m43$6;
	/** @type {!number} */
	var m44$6;
	/** @type {!number} */
	var m13$7;
	/** @type {!number} */
	var m23$7;
	/** @type {!number} */
	var m33$7;
	/** @type {!number} */
	var m43$7;
	/** @type {!number} */
	var m14$7;
	/** @type {!number} */
	var m24$7;
	/** @type {!number} */
	var m34$7;
	/** @type {!number} */
	var m44$7;
	gl = Kingyo.gl;
	prog = Kingyo.eyeProg;
	ulocs = Kingyo.eyeULocs;
	alocs = Kingyo.eyeALocs;
	gl.uniform3fv(ulocs.color, this._color);
	s = Math.sin(this._anim * 5);
	this$7 = new M44$();
	v$0 = this._pos;
	x$0$0 = v$0.x;
	y$0$0 = v$0.y;
	z$0$0 = v$0.z;
	this$7.m11 = this$7.m22 = this$7.m33 = this$7.m44 = 1;
	this$7.m21 = this$7.m31 = this$7.m41 = this$7.m12 = this$7.m32 = this$7.m42 = this$7.m13 = this$7.m23 = this$7.m24 = this$7.m14 = this$7.m24 = this$7.m34 = 0;
	this$7;
	this$7.m14 = x$0$0;
	this$7.m24 = y$0$0;
	this$7.m34 = z$0$0;
	this$5 = this$7;
	m$3 = this._spinMat;
	m0$0$3 = new M44$LM44$(this$5);
	this$5.m11 = (m11$1 = m0$0$3.m11) * (m11$0 = m$3.m11) + (m12$0 = m0$0$3.m12) * (m21$0 = m$3.m21) + (m13$0 = m0$0$3.m13) * (m31$0 = m$3.m31) + (m14$0 = m0$0$3.m14) * (m41$0 = m$3.m41);
	this$5.m21 = (m21$1 = m0$0$3.m21) * m11$0 + (m22$0 = m0$0$3.m22) * m21$0 + (m23$0 = m0$0$3.m23) * m31$0 + (m24$0 = m0$0$3.m24) * m41$0;
	this$5.m31 = (m31$1 = m0$0$3.m31) * m11$0 + (m32$1 = m0$0$3.m32) * m21$0 + (m33$0 = m0$0$3.m33) * m31$0 + (m34$0 = m0$0$3.m34) * m41$0;
	this$5.m41 = (m41$1 = m0$0$3.m41) * m11$0 + (m42$1 = m0$0$3.m42) * m21$0 + (m43$0 = m0$0$3.m43) * m31$0 + (m44$0 = m0$0$3.m44) * m41$0;
	this$5.m12 = m11$1 * (m12$1 = m$3.m12) + m12$0 * (m22$1 = m$3.m22) + m13$0 * (m32$0 = m$3.m32) + m14$0 * (m42$0 = m$3.m42);
	this$5.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
	this$5.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
	this$5.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
	this$5.m13 = m11$1 * (m13$1 = m$3.m13) + m12$0 * (m23$1 = m$3.m23) + m13$0 * (m33$1 = m$3.m33) + m14$0 * (m43$1 = m$3.m43);
	this$5.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
	this$5.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
	this$5.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
	this$5.m14 = m11$1 * (m14$1 = m$3.m14) + m12$0 * (m24$1 = m$3.m24) + m13$0 * (m34$1 = m$3.m34) + m14$0 * (m44$1 = m$3.m44);
	this$5.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
	this$5.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
	this$5.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
	this$3 = this$5;
	this$6 = new M44$();
	rad$0 = this._vangle - s / 10;
	m$2 = this$6.setRotate$NNNN(rad$0, 0, 0, 1);
	m0$0$2 = new M44$LM44$(this$3);
	this$3.m11 = (m11$3 = m0$0$2.m11) * (m11$2 = m$2.m11) + (m12$2 = m0$0$2.m12) * (m21$2 = m$2.m21) + (m13$2 = m0$0$2.m13) * (m31$2 = m$2.m31) + (m14$2 = m0$0$2.m14) * (m41$2 = m$2.m41);
	this$3.m21 = (m21$3 = m0$0$2.m21) * m11$2 + (m22$2 = m0$0$2.m22) * m21$2 + (m23$2 = m0$0$2.m23) * m31$2 + (m24$2 = m0$0$2.m24) * m41$2;
	this$3.m31 = (m31$3 = m0$0$2.m31) * m11$2 + (m32$3 = m0$0$2.m32) * m21$2 + (m33$2 = m0$0$2.m33) * m31$2 + (m34$2 = m0$0$2.m34) * m41$2;
	this$3.m41 = (m41$3 = m0$0$2.m41) * m11$2 + (m42$3 = m0$0$2.m42) * m21$2 + (m43$2 = m0$0$2.m43) * m31$2 + (m44$2 = m0$0$2.m44) * m41$2;
	this$3.m12 = m11$3 * (m12$3 = m$2.m12) + m12$2 * (m22$3 = m$2.m22) + m13$2 * (m32$2 = m$2.m32) + m14$2 * (m42$2 = m$2.m42);
	this$3.m22 = m21$3 * m12$3 + m22$2 * m22$3 + m23$2 * m32$2 + m24$2 * m42$2;
	this$3.m32 = m31$3 * m12$3 + m32$3 * m22$3 + m33$2 * m32$2 + m34$2 * m42$2;
	this$3.m42 = m41$3 * m12$3 + m42$3 * m22$3 + m43$2 * m32$2 + m44$2 * m42$2;
	this$3.m13 = m11$3 * (m13$3 = m$2.m13) + m12$2 * (m23$3 = m$2.m23) + m13$2 * (m33$3 = m$2.m33) + m14$2 * (m43$3 = m$2.m43);
	this$3.m23 = m21$3 * m13$3 + m22$2 * m23$3 + m23$2 * m33$3 + m24$2 * m43$3;
	this$3.m33 = m31$3 * m13$3 + m32$3 * m23$3 + m33$2 * m33$3 + m34$2 * m43$3;
	this$3.m43 = m41$3 * m13$3 + m42$3 * m23$3 + m43$2 * m33$3 + m44$2 * m43$3;
	this$3.m14 = m11$3 * (m14$3 = m$2.m14) + m12$2 * (m24$3 = m$2.m24) + m13$2 * (m34$3 = m$2.m34) + m14$2 * (m44$3 = m$2.m44);
	this$3.m24 = m21$3 * m14$3 + m22$2 * m24$3 + m23$2 * m34$3 + m24$2 * m44$3;
	this$3.m34 = m31$3 * m14$3 + m32$3 * m24$3 + m33$2 * m34$3 + m34$2 * m44$3;
	this$3.m44 = m41$3 * m14$3 + m42$3 * m24$3 + m43$2 * m34$3 + m44$2 * m44$3;
	this$1 = this$3;
	this$4 = new M44$();
	m$1 = this$4.setRotate$NNNN(1.5707963267948966, 1, 0, 0);
	m0$0$1 = new M44$LM44$(this$1);
	this$1.m11 = (m11$5 = m0$0$1.m11) * (m11$4 = m$1.m11) + (m12$4 = m0$0$1.m12) * (m21$4 = m$1.m21) + (m13$4 = m0$0$1.m13) * (m31$4 = m$1.m31) + (m14$4 = m0$0$1.m14) * (m41$4 = m$1.m41);
	this$1.m21 = (m21$5 = m0$0$1.m21) * m11$4 + (m22$4 = m0$0$1.m22) * m21$4 + (m23$4 = m0$0$1.m23) * m31$4 + (m24$4 = m0$0$1.m24) * m41$4;
	this$1.m31 = (m31$5 = m0$0$1.m31) * m11$4 + (m32$5 = m0$0$1.m32) * m21$4 + (m33$4 = m0$0$1.m33) * m31$4 + (m34$4 = m0$0$1.m34) * m41$4;
	this$1.m41 = (m41$5 = m0$0$1.m41) * m11$4 + (m42$5 = m0$0$1.m42) * m21$4 + (m43$4 = m0$0$1.m43) * m31$4 + (m44$4 = m0$0$1.m44) * m41$4;
	this$1.m12 = m11$5 * (m12$5 = m$1.m12) + m12$4 * (m22$5 = m$1.m22) + m13$4 * (m32$4 = m$1.m32) + m14$4 * (m42$4 = m$1.m42);
	this$1.m22 = m21$5 * m12$5 + m22$4 * m22$5 + m23$4 * m32$4 + m24$4 * m42$4;
	this$1.m32 = m31$5 * m12$5 + m32$5 * m22$5 + m33$4 * m32$4 + m34$4 * m42$4;
	this$1.m42 = m41$5 * m12$5 + m42$5 * m22$5 + m43$4 * m32$4 + m44$4 * m42$4;
	this$1.m13 = m11$5 * (m13$5 = m$1.m13) + m12$4 * (m23$5 = m$1.m23) + m13$4 * (m33$5 = m$1.m33) + m14$4 * (m43$5 = m$1.m43);
	this$1.m23 = m21$5 * m13$5 + m22$4 * m23$5 + m23$4 * m33$5 + m24$4 * m43$5;
	this$1.m33 = m31$5 * m13$5 + m32$5 * m23$5 + m33$4 * m33$5 + m34$4 * m43$5;
	this$1.m43 = m41$5 * m13$5 + m42$5 * m23$5 + m43$4 * m33$5 + m44$4 * m43$5;
	this$1.m14 = m11$5 * (m14$5 = m$1.m14) + m12$4 * (m24$5 = m$1.m24) + m13$4 * (m34$5 = m$1.m34) + m14$4 * (m44$5 = m$1.m44);
	this$1.m24 = m21$5 * m14$5 + m22$4 * m24$5 + m23$4 * m34$5 + m24$4 * m44$5;
	this$1.m34 = m31$5 * m14$5 + m32$5 * m24$5 + m33$4 * m34$5 + m34$4 * m44$5;
	this$1.m44 = m41$5 * m14$5 + m42$5 * m24$5 + m43$4 * m34$5 + m44$4 * m44$5;
	this$0 = this$1;
	this$2 = new M44$();
	m$0 = this$2.setRotate$NNNN(1.5707963267948966, 0, 1, 0);
	m0$0$0 = new M44$LM44$(this$0);
	this$0.m11 = (m11$7 = m0$0$0.m11) * (m11$6 = m$0.m11) + (m12$6 = m0$0$0.m12) * (m21$6 = m$0.m21) + (m13$6 = m0$0$0.m13) * (m31$6 = m$0.m31) + (m14$6 = m0$0$0.m14) * (m41$6 = m$0.m41);
	this$0.m21 = (m21$7 = m0$0$0.m21) * m11$6 + (m22$6 = m0$0$0.m22) * m21$6 + (m23$6 = m0$0$0.m23) * m31$6 + (m24$6 = m0$0$0.m24) * m41$6;
	this$0.m31 = (m31$7 = m0$0$0.m31) * m11$6 + (m32$7 = m0$0$0.m32) * m21$6 + (m33$6 = m0$0$0.m33) * m31$6 + (m34$6 = m0$0$0.m34) * m41$6;
	this$0.m41 = (m41$7 = m0$0$0.m41) * m11$6 + (m42$7 = m0$0$0.m42) * m21$6 + (m43$6 = m0$0$0.m43) * m31$6 + (m44$6 = m0$0$0.m44) * m41$6;
	this$0.m12 = m11$7 * (m12$7 = m$0.m12) + m12$6 * (m22$7 = m$0.m22) + m13$6 * (m32$6 = m$0.m32) + m14$6 * (m42$6 = m$0.m42);
	this$0.m22 = m21$7 * m12$7 + m22$6 * m22$7 + m23$6 * m32$6 + m24$6 * m42$6;
	this$0.m32 = m31$7 * m12$7 + m32$7 * m22$7 + m33$6 * m32$6 + m34$6 * m42$6;
	this$0.m42 = m41$7 * m12$7 + m42$7 * m22$7 + m43$6 * m32$6 + m44$6 * m42$6;
	this$0.m13 = m11$7 * (m13$7 = m$0.m13) + m12$6 * (m23$7 = m$0.m23) + m13$6 * (m33$7 = m$0.m33) + m14$6 * (m43$7 = m$0.m43);
	this$0.m23 = m21$7 * m13$7 + m22$6 * m23$7 + m23$6 * m33$7 + m24$6 * m43$7;
	this$0.m33 = m31$7 * m13$7 + m32$7 * m23$7 + m33$6 * m33$7 + m34$6 * m43$7;
	this$0.m43 = m41$7 * m13$7 + m42$7 * m23$7 + m43$6 * m33$7 + m44$6 * m43$7;
	this$0.m14 = m11$7 * (m14$7 = m$0.m14) + m12$6 * (m24$7 = m$0.m24) + m13$6 * (m34$7 = m$0.m34) + m14$6 * (m44$7 = m$0.m44);
	this$0.m24 = m21$7 * m14$7 + m22$6 * m24$7 + m23$6 * m34$7 + m24$6 * m44$7;
	this$0.m34 = m31$7 * m14$7 + m32$7 * m24$7 + m33$6 * m34$7 + m34$6 * m44$7;
	this$0.m44 = m41$7 * m14$7 + m42$7 * m24$7 + m43$6 * m34$7 + m44$6 * m44$7;
	bodyMat = this$0;
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
	/** @type {M44} */
	var m$0;
	/** @type {M44} */
	var m0$0$0;
	/** @type {M44} */
	var this$1;
	/** @type {M44} */
	var m$1;
	/** @type {M44} */
	var m0$0$1;
	/** @type {M44} */
	var this$2;
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	/** @type {M44} */
	var m$2;
	/** @type {M44} */
	var m0$0$2;
	/** @type {M44} */
	var this$3;
	/** @type {M44} */
	var this$4;
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
	/** @type {!number} */
	var m11$2;
	/** @type {!number} */
	var m21$2;
	/** @type {!number} */
	var m31$2;
	/** @type {!number} */
	var m41$2;
	/** @type {!number} */
	var m11$3;
	/** @type {!number} */
	var m12$2;
	/** @type {!number} */
	var m13$2;
	/** @type {!number} */
	var m14$2;
	/** @type {!number} */
	var m21$3;
	/** @type {!number} */
	var m12$3;
	/** @type {!number} */
	var m22$2;
	/** @type {!number} */
	var m22$3;
	/** @type {!number} */
	var m23$2;
	/** @type {!number} */
	var m32$2;
	/** @type {!number} */
	var m24$2;
	/** @type {!number} */
	var m42$2;
	/** @type {!number} */
	var m31$3;
	/** @type {!number} */
	var m32$3;
	/** @type {!number} */
	var m33$2;
	/** @type {!number} */
	var m34$2;
	/** @type {!number} */
	var m41$3;
	/** @type {!number} */
	var m42$3;
	/** @type {!number} */
	var m43$2;
	/** @type {!number} */
	var m44$2;
	/** @type {!number} */
	var m13$3;
	/** @type {!number} */
	var m23$3;
	/** @type {!number} */
	var m33$3;
	/** @type {!number} */
	var m43$3;
	/** @type {!number} */
	var m14$3;
	/** @type {!number} */
	var m24$3;
	/** @type {!number} */
	var m34$3;
	/** @type {!number} */
	var m44$3;
	/** @type {!number} */
	var m11$4;
	/** @type {!number} */
	var m21$4;
	/** @type {!number} */
	var m31$4;
	/** @type {!number} */
	var m41$4;
	/** @type {!number} */
	var m11$5;
	/** @type {!number} */
	var m12$4;
	/** @type {!number} */
	var m13$4;
	/** @type {!number} */
	var m14$4;
	/** @type {!number} */
	var m21$5;
	/** @type {!number} */
	var m12$5;
	/** @type {!number} */
	var m22$4;
	/** @type {!number} */
	var m22$5;
	/** @type {!number} */
	var m23$4;
	/** @type {!number} */
	var m32$4;
	/** @type {!number} */
	var m24$4;
	/** @type {!number} */
	var m42$4;
	/** @type {!number} */
	var m31$5;
	/** @type {!number} */
	var m32$5;
	/** @type {!number} */
	var m33$4;
	/** @type {!number} */
	var m34$4;
	/** @type {!number} */
	var m41$5;
	/** @type {!number} */
	var m42$5;
	/** @type {!number} */
	var m43$4;
	/** @type {!number} */
	var m44$4;
	/** @type {!number} */
	var m13$5;
	/** @type {!number} */
	var m23$5;
	/** @type {!number} */
	var m33$5;
	/** @type {!number} */
	var m43$5;
	/** @type {!number} */
	var m14$5;
	/** @type {!number} */
	var m24$5;
	/** @type {!number} */
	var m34$5;
	/** @type {!number} */
	var m44$5;
	gl = Poi.gl;
	prog = Poi.prog;
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, [ projMat.m11, projMat.m21, projMat.m31, projMat.m41, projMat.m12, projMat.m22, projMat.m32, projMat.m42, projMat.m13, projMat.m23, projMat.m33, projMat.m43, projMat.m14, projMat.m24, projMat.m34, projMat.m44 ]);
	this$0 = new M44$LM44$(viewMat);
	this$2 = new M44$();
	x$0 = $this._x;
	y$0 = $this._y;
	z$0 = $this._z;
	this$2.m11 = this$2.m22 = this$2.m33 = this$2.m44 = 1;
	this$2.m21 = this$2.m31 = this$2.m41 = this$2.m12 = this$2.m32 = this$2.m42 = this$2.m13 = this$2.m23 = this$2.m24 = this$2.m14 = this$2.m24 = this$2.m34 = 0;
	this$2;
	this$2.m14 = x$0;
	this$2.m24 = y$0;
	this$2.m34 = z$0;
	m$0 = this$2;
	m0$0$0 = new M44$LM44$(this$0);
	this$0.m11 = (m11$5 = m0$0$0.m11) * (m11$4 = m$0.m11) + (m12$4 = m0$0$0.m12) * (m21$4 = m$0.m21) + (m13$4 = m0$0$0.m13) * (m31$4 = m$0.m31) + (m14$4 = m0$0$0.m14) * (m41$4 = m$0.m41);
	this$0.m21 = (m21$5 = m0$0$0.m21) * m11$4 + (m22$4 = m0$0$0.m22) * m21$4 + (m23$4 = m0$0$0.m23) * m31$4 + (m24$4 = m0$0$0.m24) * m41$4;
	this$0.m31 = (m31$5 = m0$0$0.m31) * m11$4 + (m32$5 = m0$0$0.m32) * m21$4 + (m33$4 = m0$0$0.m33) * m31$4 + (m34$4 = m0$0$0.m34) * m41$4;
	this$0.m41 = (m41$5 = m0$0$0.m41) * m11$4 + (m42$5 = m0$0$0.m42) * m21$4 + (m43$4 = m0$0$0.m43) * m31$4 + (m44$4 = m0$0$0.m44) * m41$4;
	this$0.m12 = m11$5 * (m12$5 = m$0.m12) + m12$4 * (m22$5 = m$0.m22) + m13$4 * (m32$4 = m$0.m32) + m14$4 * (m42$4 = m$0.m42);
	this$0.m22 = m21$5 * m12$5 + m22$4 * m22$5 + m23$4 * m32$4 + m24$4 * m42$4;
	this$0.m32 = m31$5 * m12$5 + m32$5 * m22$5 + m33$4 * m32$4 + m34$4 * m42$4;
	this$0.m42 = m41$5 * m12$5 + m42$5 * m22$5 + m43$4 * m32$4 + m44$4 * m42$4;
	this$0.m13 = m11$5 * (m13$5 = m$0.m13) + m12$4 * (m23$5 = m$0.m23) + m13$4 * (m33$5 = m$0.m33) + m14$4 * (m43$5 = m$0.m43);
	this$0.m23 = m21$5 * m13$5 + m22$4 * m23$5 + m23$4 * m33$5 + m24$4 * m43$5;
	this$0.m33 = m31$5 * m13$5 + m32$5 * m23$5 + m33$4 * m33$5 + m34$4 * m43$5;
	this$0.m43 = m41$5 * m13$5 + m42$5 * m23$5 + m43$4 * m33$5 + m44$4 * m43$5;
	this$0.m14 = m11$5 * (m14$5 = m$0.m14) + m12$4 * (m24$5 = m$0.m24) + m13$4 * (m34$5 = m$0.m34) + m14$4 * (m44$5 = m$0.m44);
	this$0.m24 = m21$5 * m14$5 + m22$4 * m24$5 + m23$4 * m34$5 + m24$4 * m44$5;
	this$0.m34 = m31$5 * m14$5 + m32$5 * m24$5 + m33$4 * m34$5 + m34$4 * m44$5;
	this$0.m44 = m41$5 * m14$5 + m42$5 * m24$5 + m43$4 * m34$5 + m44$4 * m44$5;
	mvMat = this$0;
	if ($this._down) {
		this$4 = new M44$();
		this$4.m11 = this$4.m22 = this$4.m33 = this$4.m44 = 1;
		this$4.m21 = this$4.m31 = this$4.m41 = this$4.m12 = this$4.m32 = this$4.m42 = this$4.m13 = this$4.m23 = this$4.m24 = this$4.m14 = this$4.m24 = this$4.m34 = 0;
		this$4;
		this$4.m14 = 0;
		this$4.m24 = 0;
		this$4.m34 = -7;
		m$2 = this$4;
		m0$0$2 = new M44$LM44$(mvMat);
		mvMat.m11 = (m11$1 = m0$0$2.m11) * (m11$0 = m$2.m11) + (m12$0 = m0$0$2.m12) * (m21$0 = m$2.m21) + (m13$0 = m0$0$2.m13) * (m31$0 = m$2.m31) + (m14$0 = m0$0$2.m14) * (m41$0 = m$2.m41);
		mvMat.m21 = (m21$1 = m0$0$2.m21) * m11$0 + (m22$0 = m0$0$2.m22) * m21$0 + (m23$0 = m0$0$2.m23) * m31$0 + (m24$0 = m0$0$2.m24) * m41$0;
		mvMat.m31 = (m31$1 = m0$0$2.m31) * m11$0 + (m32$1 = m0$0$2.m32) * m21$0 + (m33$0 = m0$0$2.m33) * m31$0 + (m34$0 = m0$0$2.m34) * m41$0;
		mvMat.m41 = (m41$1 = m0$0$2.m41) * m11$0 + (m42$1 = m0$0$2.m42) * m21$0 + (m43$0 = m0$0$2.m43) * m31$0 + (m44$0 = m0$0$2.m44) * m41$0;
		mvMat.m12 = m11$1 * (m12$1 = m$2.m12) + m12$0 * (m22$1 = m$2.m22) + m13$0 * (m32$0 = m$2.m32) + m14$0 * (m42$0 = m$2.m42);
		mvMat.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
		mvMat.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
		mvMat.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
		mvMat.m13 = m11$1 * (m13$1 = m$2.m13) + m12$0 * (m23$1 = m$2.m23) + m13$0 * (m33$1 = m$2.m33) + m14$0 * (m43$1 = m$2.m43);
		mvMat.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
		mvMat.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
		mvMat.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
		mvMat.m14 = m11$1 * (m14$1 = m$2.m14) + m12$0 * (m24$1 = m$2.m24) + m13$0 * (m34$1 = m$2.m34) + m14$0 * (m44$1 = m$2.m44);
		mvMat.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
		mvMat.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
		mvMat.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
		this$1 = mvMat;
		this$3 = new M44$();
		m$1 = this$3.setRotate$NNNN(-0.1, 1, 0, 0);
		m0$0$1 = new M44$LM44$(this$1);
		this$1.m11 = (m11$3 = m0$0$1.m11) * (m11$2 = m$1.m11) + (m12$2 = m0$0$1.m12) * (m21$2 = m$1.m21) + (m13$2 = m0$0$1.m13) * (m31$2 = m$1.m31) + (m14$2 = m0$0$1.m14) * (m41$2 = m$1.m41);
		this$1.m21 = (m21$3 = m0$0$1.m21) * m11$2 + (m22$2 = m0$0$1.m22) * m21$2 + (m23$2 = m0$0$1.m23) * m31$2 + (m24$2 = m0$0$1.m24) * m41$2;
		this$1.m31 = (m31$3 = m0$0$1.m31) * m11$2 + (m32$3 = m0$0$1.m32) * m21$2 + (m33$2 = m0$0$1.m33) * m31$2 + (m34$2 = m0$0$1.m34) * m41$2;
		this$1.m41 = (m41$3 = m0$0$1.m41) * m11$2 + (m42$3 = m0$0$1.m42) * m21$2 + (m43$2 = m0$0$1.m43) * m31$2 + (m44$2 = m0$0$1.m44) * m41$2;
		this$1.m12 = m11$3 * (m12$3 = m$1.m12) + m12$2 * (m22$3 = m$1.m22) + m13$2 * (m32$2 = m$1.m32) + m14$2 * (m42$2 = m$1.m42);
		this$1.m22 = m21$3 * m12$3 + m22$2 * m22$3 + m23$2 * m32$2 + m24$2 * m42$2;
		this$1.m32 = m31$3 * m12$3 + m32$3 * m22$3 + m33$2 * m32$2 + m34$2 * m42$2;
		this$1.m42 = m41$3 * m12$3 + m42$3 * m22$3 + m43$2 * m32$2 + m44$2 * m42$2;
		this$1.m13 = m11$3 * (m13$3 = m$1.m13) + m12$2 * (m23$3 = m$1.m23) + m13$2 * (m33$3 = m$1.m33) + m14$2 * (m43$3 = m$1.m43);
		this$1.m23 = m21$3 * m13$3 + m22$2 * m23$3 + m23$2 * m33$3 + m24$2 * m43$3;
		this$1.m33 = m31$3 * m13$3 + m32$3 * m23$3 + m33$2 * m33$3 + m34$2 * m43$3;
		this$1.m43 = m41$3 * m13$3 + m42$3 * m23$3 + m43$2 * m33$3 + m44$2 * m43$3;
		this$1.m14 = m11$3 * (m14$3 = m$1.m14) + m12$2 * (m24$3 = m$1.m24) + m13$2 * (m34$3 = m$1.m34) + m14$2 * (m44$3 = m$1.m44);
		this$1.m24 = m21$3 * m14$3 + m22$2 * m24$3 + m23$2 * m34$3 + m24$2 * m44$3;
		this$1.m34 = m31$3 * m14$3 + m32$3 * m24$3 + m33$2 * m34$3 + m34$2 * m44$3;
		this$1.m44 = m41$3 * m14$3 + m42$3 * m24$3 + m43$2 * m34$3 + m44$2 * m44$3;
		this$1;
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
	_viewport$0 = this._viewport = (function (o) { return o instanceof Int32Array ? o : null; })(gl.getParameter(gl.VIEWPORT));
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
			throw new Error("[/Users/fuji.goro/repo/JSX/lib/js/js/web.jsx:23] detected invalid cast, value is not an instance of the designated type or null");
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
