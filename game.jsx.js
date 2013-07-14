// generatedy by JSX compiler 0.9.54 (2013-07-13 21:10:23 -0700; 42dc3cc8412f763fec8f0f0db03084a2a6927f49)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

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
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
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

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
function g_StopIteration() {
	Error.call(this);
};

$__jsx_extend([g_StopIteration], Error);
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	Game$main$SS('webgl-canvas', 'life-bar');
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function Game() {
};

$__jsx_extend([Game], Object);
function Game$main$SS(canvas_id, life_id) {
	var canvas;
	var ww;
	var wh;
	var canvas_size;
	var lbw;
	var gl;
	var getPoint;
	var lastTouchPos;
	var calcMousePosOnXYPlane;
	var touchStart;
	var touchEnd;
	var touchMove;
	var raf;
	var frame;
	var prev;
	var fps;
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
	Game.poi = ({_x: 0, _y: 0, _z: 1, _down: false, _live: true});
	Kingyo$init$I(20);
	Game.water = new Water();
	Game.bltProg = Util$getProgram$SS('vt.vs', 'vt.fs');
	Game.bltULocs = Util$getUniformLocations$LWebGLProgram$(Game.bltProg);
	Game.bltALocs = Util$getAttribLocations$LWebGLProgram$(Game.bltProg);
	Game.bltVTBuf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, Game.bltVTBuf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), gl.STATIC_DRAW);
	getPoint = (function (e) {
		var px;
		var py;
		var me;
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
		var wx;
		var wy;
		var epos;
		var pdir;
		var this$0;
		var l$0;
		var x$0$0;
		var y$0$0;
		var this$2;
		var s$0;
		var z$0;
		var x$0;
		var y$0;
		wx = p[0] / canvas.width * 2 - 1;
		wy = - p[1] / canvas.height * 2 + 1;
		epos = V3$transformBy_0$LV3$LM33$(new V3$3(0, 0, 80), M33$setRotation_0$LM33$NNNN(new M33(), 0.2, 1, 0, 0));
		this$0 = V3$transformBy_0$LV3$LM33$(new V3$3(0.2 * wx, 0.2 * wy, -1), M33$setRotation_0$LM33$NNNN(new M33(), 0.2, 1, 0, 0));
		l$0 = Math.sqrt(V3$len2_0$LV3$(this$0));
		pdir = (l$0 > 0 ? V3$mul_0$LV3$N(this$0, 1 / l$0) : this$0);
		this$2 = new V3$0(pdir);
		s$0 = (z$0 = epos.z) / - pdir.z;
		this$2.x *= s$0;
		this$2.y *= s$0;
		this$2.z *= s$0;
		x$0$0 = epos.x;
		y$0$0 = epos.y;
		x$0 = this$2.x += x$0$0;
		y$0 = this$2.y += y$0$0;
		this$2.z += z$0;
		return [ x$0, y$0 ];
	});
	touchStart = (function (e) {
		var pos;
		var hit;
		var this$0;
		var x$0;
		var y$0;
		var this$1;
		var this$2;
		var this$3;
		var s$0;
		var this$4;
		var x$1;
		var y$1;
		e.preventDefault();
		lastTouchPos = getPoint(e);
		pos = calcMousePosOnXYPlane(lastTouchPos);
		this$0 = Game.poi;
		x$0 = pos[0];
		y$0 = pos[1];
		this$0._x = x$0;
		this$0._y = y$0;
		if (! Game.poi._live || Kingyo$numRests$() === 0) {
			Game.life = 1;
			Game.life_bar.style.width = Game.life_bar_width.toString() + "px";
			this$1 = Game.poi;
			this$1._live = true;
			Kingyo$reset$();
			Game.status_text.innerHTML = 'click to start';
		} else {
			if (! ! Game.poi._live) {
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
				this$3._live = false;
				s$0 = dom.document.createElement('audio');
				s$0.src = 'tear.mp3';
				s$0.play();
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
		var pos;
		var hit;
		var this$0;
		var x$0;
		var y$0;
		var s$0;
		var this$1;
		var x$1;
		var y$1;
		var this$2;
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
		if (Game.poi._down) {
			if (! ! Game.poi._live) {
				hit = Kingyo$hit$NN(pos[0], pos[1]);
				Kingyo$fish$ALKingyo$(hit);
				if (hit.length > 0) {
					s$0 = dom.document.createElement('audio');
					s$0.src = 'fish.mp3';
					s$0.play();
				}
				if (Kingyo$numRests$() === 0) {
					Game.startTime = 0;
				}
			}
			this$1 = Game.water;
			x$1 = pos[0] / 40 + 0.5;
			y$1 = pos[1] / 40 + 0.5;
			this$1._ix = x$1;
			this$1._iy = y$1;
			this$1._ir = 0.03;
			this$1._iz = 1;
		}
		this$2 = Game.poi;
		this$2._down = false;
	});
	canvas.addEventListener("mouseup", touchEnd);
	canvas.addEventListener("touchend", touchEnd);
	touchMove = (function (e) {
		var pos;
		var this$0;
		var x$0;
		var y$0;
		var this$1;
		var x$1;
		var y$1;
		e.preventDefault();
		lastTouchPos = getPoint(e);
		pos = calcMousePosOnXYPlane(lastTouchPos);
		this$0 = Game.poi;
		x$0 = pos[0];
		y$0 = pos[1];
		this$0._x = x$0;
		this$0._y = y$0;
		if (Game.poi._down) {
			this$1 = Game.water;
			x$1 = pos[0] / 40 + 0.5;
			y$1 = pos[1] / 40 + 0.5;
			this$1._ix = x$1;
			this$1._iy = y$1;
			this$1._ir = 0.02;
			this$1._iz = 0.2;
		}
	});
	canvas.addEventListener("mousemove", touchMove);
	canvas.addEventListener("touchmove", touchMove);
	canvas.onmouseout = (function (e) {
		var pos;
		var this$0;
		var x$0;
		var y$0;
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
	Game.renderTex = new RenderTexture((canvas.width | 0), (canvas.height | 0));
	raf = dom.window.location.hash === "#raf";
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(raf);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(raf);
	frame = 0;
	prev = Date.now();
	fps = dom.document.getElementById("fps");
	(function update_render(time) {
		var now;
		frame++;
		now = Date.now();
		if (now - prev >= 1000) {
			fps.firstChild.nodeValue = NumberUtil$format$NI(frame * 1000 / (now - prev), 1) + " fps";
			frame = 0;
			prev = now;
		}
		Game$update$N(now);
		Game$render$();
		Timer._requestAnimationFrame(update_render);
	})(0);
};

Game.main$SS = Game$main$SS;

function Game$playSound$S(url) {
	var s;
	s = dom.document.createElement('audio');
	s.src = url;
	s.play();
};

Game.playSound$S = Game$playSound$S;

function Game$update$N(now) {
	var t;
	var newStatus;
	var this$0;
	var s$0;
	t = now / 1000;
	Kingyo$update$N(t);
	Water$step_0$LWater$N(Game.water, t);
	if (Game.poi._down) {
		Game.life -= (t - Game.poi_down_time) * 0.5;
		Game.poi_down_time = t;
		if (Game.life < 0 && ! ! Game.poi._live) {
			Game.life = 0;
			this$0 = Game.poi;
			this$0._live = false;
			s$0 = dom.document.createElement('audio');
			s$0.src = 'tear.mp3';
			s$0.play();
			Game.startTime = 0;
		}
		Game.life_bar.style.width = (Game.life * Game.life_bar_width).toString() + "px";
	}
	if (Game.startTime > 0) {
		newStatus = NumberUtil$format$NI((now - Game.startTime) / 1000, 3) + '[s]';
		Game.status_text.firstChild.nodeValue = newStatus;
	}
};

Game.update$N = Game$update$N;

function Game$render$() {
	var gl;
	var this$0;
	var gl$0;
	var vp$0;
	gl = Game.gl;
	RenderTexture$begin_0$LRenderTexture$(Game.renderTex);
	gl.clearColor(0.2, 0.6, 0.8, 1);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	gl.enable(gl.BLEND);
	gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);
	Kingyo$drawUnderWater$LM44$LM44$(Game.projMat, Game.viewMat);
	if (Game.poi._down) {
		Poi$draw$LPoi$LM44$LM44$(Game.poi, Game.projMat, Game.viewMat);
	}
	this$0 = Game.renderTex;
	gl$0 = RenderTexture.gl;
	gl$0.bindFramebuffer(gl$0.FRAMEBUFFER, null);
	vp$0 = this$0._viewport;
	gl$0.viewport(vp$0[0], vp$0[1], vp$0[2], vp$0[3]);
	gl.clear(gl.DEPTH_BUFFER_BIT);
	gl.useProgram(Game.bltProg);
	gl.bindTexture(gl.TEXTURE_2D, Game.renderTex.texturebuffer);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.uniform1i(Game.bltULocs.texture, 0);
	gl.uniformMatrix4fv(Game.bltULocs.projectionMatrix, false, M44$array_0$LM44$(M44$setOrtho_0$LM44$NNNNNN(new M44(), 0, 1, 0, 1, -1, 0)));
	gl.uniformMatrix4fv(Game.bltULocs.modelviewMatrix, false, M44$array_0$LM44$(M44$set_0$LM44$N(new M44(), 1)));
	gl.bindBuffer(gl.ARRAY_BUFFER, Game.bltVTBuf);
	gl.vertexAttribPointer(Game.bltALocs.vertex, 2, gl.FLOAT, false, 0, 0);
	gl.vertexAttribPointer(Game.bltALocs.texcoord, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(Game.bltALocs.vertex);
	gl.enableVertexAttribArray(Game.bltALocs.texcoord);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(Game.bltALocs.vertex);
	gl.disableVertexAttribArray(Game.bltALocs.texcoord);
	Water$draw_0$LWater$LM44$LM44$LWebGLTexture$NN(Game.water, Game.projMat, Game.viewMat, Game.renderTex.texturebuffer, Game.canvas.offsetWidth, Game.canvas.offsetHeight);
	Kingyo$drawAboveWater$LM44$LM44$(Game.projMat, Game.viewMat);
	if (! Game.poi._down) {
		Poi$draw$LPoi$LM44$LM44$(Game.poi, Game.projMat, Game.viewMat);
	}
	Util$checkGLError$();
};

Game.render$ = Game$render$;

function NumberUtil() {
};

$__jsx_extend([NumberUtil], Object);
function NumberUtil$format$NII(n, precision, width) {
	var i;
	var s;
	var repeat;
	var f;
	i = n | 0;
	s = i + "";
	function repeat(str, count) {
		var s;
		var i;
		s = "";
		for (i = 0; i < count; ++ i) {
			s += str;
		}
		return s;
	}
	if (precision > 0) {
		f = (n - i + "").slice(2, 2 + precision);
		f += repeat("0", precision - f.length);
		s += "." + f;
	}
	return repeat(" ", width - s.length) + s;
};

NumberUtil.format$NII = NumberUtil$format$NII;

function NumberUtil$format$NI(n, precision) {
	return NumberUtil$format$NII(n, precision, 0);
};

NumberUtil.format$NI = NumberUtil$format$NI;

function dom() {
};

$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return dom.document.getElementById(id);
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return dom.document.getElementById(id);
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return dom.document.createElement(tag);
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
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

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
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

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
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

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
	this.locale = "";
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function TrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function DragEventInit() {
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

$__jsx_extend([DragEventInit], EventInit);
function CloseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function ErrorEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.message = "";
	this.filename = "";
	this.lineno = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function RTCSessionDescriptionInit() {
	this.type = "";
	this.sdp = "";
};

$__jsx_extend([RTCSessionDescriptionInit], Object);
function RTCIceCandidateInit() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

$__jsx_extend([RTCIceCandidateInit], Object);
function RTCIceServer() {
	this.url = "";
	this.credential = null;
};

$__jsx_extend([RTCIceServer], Object);
function RTCConfiguration() {
	this.iceServers = null;
};

$__jsx_extend([RTCConfiguration], Object);
function DataChannelInit() {
	this.reliable = false;
};

$__jsx_extend([DataChannelInit], Object);
function RTCPeerConnectionIceEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.candidate = null;
};

$__jsx_extend([RTCPeerConnectionIceEventInit], EventInit);
function MediaStreamEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.stream = null;
};

$__jsx_extend([MediaStreamEventInit], EventInit);
function DataChannelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.channel = null;
};

$__jsx_extend([DataChannelEventInit], EventInit);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this.optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return js.global.setTimeout(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	js.global.clearTimeout(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return js.global.setInterval(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	js.global.clearInterval(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
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
		var now;
		var timeToCall;
		var max$value2$0;
		now = Date.now();
		timeToCall = (max$value2$0 = 16 - (now - lastTime), 0 >= max$value2$0 ? 0 : max$value2$0);
		lastTime = now + timeToCall;
		return js.global.setTimeout((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
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

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {
};

$__jsx_extend([TimerHandle], Object);
function Util() {
};

$__jsx_extend([Util], Object);
function Util$getWebGL$S(canvas_id) {
	var canvas;
	var ctx_names;
	var ctx;
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

Util.getWebGL$S = Util$getWebGL$S;

function Util$getFile$S(url) {
	var xhr;
	xhr = new XMLHttpRequest();
	xhr.open("GET", url, false);
	xhr.send();
	return xhr.responseText;
};

Util.getFile$S = Util$getFile$S;

function Util$checkGLError$() {
	var gl;
	var err;
	gl = Util.gl;
	err = gl.getError();
	if (err) {
		console.error('GL ERROR! :' + err.toString());
	}
};

Util.checkGLError$ = Util$checkGLError$;

function Util$getShader$SI(url, type) {
	var gl;
	var src;
	var shader;
	var xhr$0;
	gl = Util.gl;
	xhr$0 = new XMLHttpRequest();
	xhr$0.open("GET", url, false);
	xhr$0.send();
	src = xhr$0.responseText;
	shader = gl.createShader(type);
	gl.shaderSource(shader, src);
	gl.compileShader(shader);
	if (! (!! gl.getShaderParameter(shader, gl.COMPILE_STATUS))) {
		console.warn(gl.getShaderInfoLog(shader));
		return null;
	}
	return shader;
};

Util.getShader$SI = Util$getShader$SI;

function Util$getProgram$SS(vs_url, fs_url) {
	var gl;
	var vs;
	var fs;
	var program;
	gl = Util.gl;
	vs = Util$getShader$SI(vs_url, (gl.VERTEX_SHADER | 0));
	fs = Util$getShader$SI(fs_url, (gl.FRAGMENT_SHADER | 0));
	if (! vs || ! fs) {
		return null;
	}
	program = gl.createProgram();
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.linkProgram(program);
	if (! (!! gl.getProgramParameter(program, gl.LINK_STATUS))) {
		console.warn(gl.getProgramInfoLog(program));
		return null;
	}
	return program;
};

Util.getProgram$SS = Util$getProgram$SS;

function Util$getUniformLocations$LWebGLProgram$(prog) {
	var gl;
	var ulocs;
	var ui;
	var nu;
	var unif;
	gl = Util.gl;
	ulocs = ({  });
	for ((ui = 0, nu = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS) | 0); ui < nu; ++ ui) {
		unif = gl.getActiveUniform(prog, ui);
		ulocs[unif.name] = gl.getUniformLocation(prog, unif.name);
	}
	return ulocs;
};

Util.getUniformLocations$LWebGLProgram$ = Util$getUniformLocations$LWebGLProgram$;

function Util$getAttribLocations$LWebGLProgram$(prog) {
	var gl;
	var alocs;
	var ai;
	var na;
	var attr;
	gl = Util.gl;
	alocs = ({  });
	for ((ai = 0, na = gl.getProgramParameter(prog, gl.ACTIVE_ATTRIBUTES) | 0); ai < na; ++ ai) {
		attr = gl.getActiveAttrib(prog, ai);
		alocs[attr.name] = (gl.getAttribLocation(prog, attr.name) | 0);
	}
	return alocs;
};

Util.getAttribLocations$LWebGLProgram$ = Util$getAttribLocations$LWebGLProgram$;

function MVQ() {
};

$__jsx_extend([MVQ], Object);
function V2() {
	this.x = 0;
	this.y = 0;
};

function V2$0(v) {
	var x$0$0;
	var y$0$0;
	this.x = 0;
	this.y = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
};

function V2$1(v) {
	var x$0$0;
	var y$0$0;
	x$0$0 = v[0];
	y$0$0 = v[1];
	this.x = x$0$0;
	this.y = y$0$0;
};

function V2$2(v) {
	var x$0$0;
	var y$0$0;
	x$0$0 = v[0];
	y$0$0 = v[1];
	this.x = x$0$0;
	this.y = y$0$0;
};

function V2$3(x, y) {
	this.x = x;
	this.y = y;
};

function V2$4(v) {
	var x$0;
	var y$0;
	this.x = 0;
	this.y = 0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
};

function V2$5(v) {
	var x$0;
	var y$0;
	this.x = 0;
	this.y = 0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
};

$__jsx_extend([V2, V2$0, V2$1, V2$2, V2$3, V2$4, V2$5], Object);
V2.prototype.array$ = function () {
	return [ this.x, this.y ];
};


function V2$array_0$LV2$($this) {
	return [ $this.x, $this.y ];
};

V2.array_0$LV2$ = V2$array_0$LV2$;

V2.prototype.V3$N = function (z) {
	return new V3$4(this, z);
};


function V2$V3_0$LV2$N($this, z) {
	return new V3$4($this, z);
};

V2.V3_0$LV2$N = V2$V3_0$LV2$N;

V2.prototype.V4$NN = function (z, w) {
	return new V4$4(this, z, w);
};


function V2$V4_0$LV2$NN($this, z, w) {
	return new V4$4($this, z, w);
};

V2.V4_0$LV2$NN = V2$V4_0$LV2$NN;

V2.prototype.set$LV3$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set_0$LV2$LV3$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set_0$LV2$LV3$ = V2$set_0$LV2$LV3$;

V2.prototype.set$LV4$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set_0$LV2$LV4$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set_0$LV2$LV4$ = V2$set_0$LV2$LV4$;

V2.prototype.clone$ = function () {
	return new V2$0(this);
};


function V2$clone_0$LV2$($this) {
	return new V2$0($this);
};

V2.clone_0$LV2$ = V2$clone_0$LV2$;

V2.prototype.clear$ = function () {
	this.x = 0;
	this.y = 0;
	return this;
};


function V2$clear_0$LV2$($this) {
	$this.x = 0;
	$this.y = 0;
	return $this;
};

V2.clear_0$LV2$ = V2$clear_0$LV2$;

V2.prototype.set$NN = function (x, y) {
	this.x = x;
	this.y = y;
	return this;
};


function V2$set_0$LV2$NN($this, x, y) {
	$this.x = x;
	$this.y = y;
	return $this;
};

V2.set_0$LV2$NN = V2$set_0$LV2$NN;

V2.prototype.set$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set_0$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set_0$LV2$LV2$ = V2$set_0$LV2$LV2$;

V2.prototype.set$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set_0$LV2$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set_0$LV2$AN = V2$set_0$LV2$AN;

V2.prototype.set$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x = x$0;
	this.y = y$0;
	return this;
};


function V2$set_0$LV2$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x = x$0;
	$this.y = y$0;
	return $this;
};

V2.set_0$LV2$LFloat32Array$ = V2$set_0$LV2$LFloat32Array$;

V2.prototype.equals$LV2$ = function (v) {
	return V2$equals_0$LV2$LV2$N(this, v, 0.000001);
};


function V2$equals_0$LV2$LV2$($this, v) {
	return V2$equals_0$LV2$LV2$N($this, v, 0.000001);
};

V2.equals_0$LV2$LV2$ = V2$equals_0$LV2$LV2$;

V2.prototype.equals$LV2$N = function (v, eps) {
	var abs$x$0;
	var abs$x$1;
	return (abs$x$0 = v.x - this.x, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) < eps && (abs$x$1 = v.y - this.y, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) < eps;
};


function V2$equals_0$LV2$LV2$N($this, v, eps) {
	var abs$x$0;
	var abs$x$1;
	return (abs$x$0 = v.x - $this.x, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) < eps && (abs$x$1 = v.y - $this.y, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) < eps;
};

V2.equals_0$LV2$LV2$N = V2$equals_0$LV2$LV2$N;

V2.prototype.add$NN = function (x, y) {
	this.x += x;
	this.y += y;
	return this;
};


function V2$add_0$LV2$NN($this, x, y) {
	$this.x += x;
	$this.y += y;
	return $this;
};

V2.add_0$LV2$NN = V2$add_0$LV2$NN;

V2.prototype.add$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x += x$0;
	this.y += y$0;
	return this;
};


function V2$add_0$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x += x$0;
	$this.y += y$0;
	return $this;
};

V2.add_0$LV2$LV2$ = V2$add_0$LV2$LV2$;

V2.prototype.add$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x += x$0;
	this.y += y$0;
	return this;
};


function V2$add_0$LV2$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x += x$0;
	$this.y += y$0;
	return $this;
};

V2.add_0$LV2$AN = V2$add_0$LV2$AN;

V2.prototype.add$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x += x$0;
	this.y += y$0;
	return this;
};


function V2$add_0$LV2$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x += x$0;
	$this.y += y$0;
	return $this;
};

V2.add_0$LV2$LFloat32Array$ = V2$add_0$LV2$LFloat32Array$;

V2.prototype.sub$NN = function (x, y) {
	this.x -= x;
	this.y -= y;
	return this;
};


function V2$sub_0$LV2$NN($this, x, y) {
	$this.x -= x;
	$this.y -= y;
	return $this;
};

V2.sub_0$LV2$NN = V2$sub_0$LV2$NN;

V2.prototype.sub$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x -= x$0;
	this.y -= y$0;
	return this;
};


function V2$sub_0$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x -= x$0;
	$this.y -= y$0;
	return $this;
};

V2.sub_0$LV2$LV2$ = V2$sub_0$LV2$LV2$;

V2.prototype.sub$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x -= x$0;
	this.y -= y$0;
	return this;
};


function V2$sub_0$LV2$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x -= x$0;
	$this.y -= y$0;
	return $this;
};

V2.sub_0$LV2$AN = V2$sub_0$LV2$AN;

V2.prototype.sub$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x -= x$0;
	this.y -= y$0;
	return this;
};


function V2$sub_0$LV2$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x -= x$0;
	$this.y -= y$0;
	return $this;
};

V2.sub_0$LV2$LFloat32Array$ = V2$sub_0$LV2$LFloat32Array$;

V2.prototype.mul$NN = function (x, y) {
	this.x *= x;
	this.y *= y;
	return this;
};


function V2$mul_0$LV2$NN($this, x, y) {
	$this.x *= x;
	$this.y *= y;
	return $this;
};

V2.mul_0$LV2$NN = V2$mul_0$LV2$NN;

V2.prototype.mul$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x *= x$0;
	this.y *= y$0;
	return this;
};


function V2$mul_0$LV2$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x *= x$0;
	$this.y *= y$0;
	return $this;
};

V2.mul_0$LV2$LV2$ = V2$mul_0$LV2$LV2$;

V2.prototype.mul$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x *= x$0;
	this.y *= y$0;
	return this;
};


function V2$mul_0$LV2$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x *= x$0;
	$this.y *= y$0;
	return $this;
};

V2.mul_0$LV2$AN = V2$mul_0$LV2$AN;

V2.prototype.mul$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.x *= x$0;
	this.y *= y$0;
	return this;
};


function V2$mul_0$LV2$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.x *= x$0;
	$this.y *= y$0;
	return $this;
};

V2.mul_0$LV2$LFloat32Array$ = V2$mul_0$LV2$LFloat32Array$;

V2.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	return this;
};


function V2$mul_0$LV2$N($this, s) {
	$this.x *= s;
	$this.y *= s;
	return $this;
};

V2.mul_0$LV2$N = V2$mul_0$LV2$N;

V2.prototype.neg$ = function () {
	this.x *= -1;
	this.y *= -1;
	return this;
};


function V2$neg_0$LV2$($this) {
	$this.x *= -1;
	$this.y *= -1;
	return $this;
};

V2.neg_0$LV2$ = V2$neg_0$LV2$;

V2.prototype.normalize$ = function () {
	var l;
	l = Math.sqrt(V2$len2_0$LV2$(this));
	return (l > 0 ? V2$mul_0$LV2$N(this, 1 / l) : this);
};


function V2$normalize_0$LV2$($this) {
	var l;
	l = Math.sqrt(V2$len2_0$LV2$($this));
	return (l > 0 ? V2$mul_0$LV2$N($this, 1 / l) : $this);
};

V2.normalize_0$LV2$ = V2$normalize_0$LV2$;

V2.prototype.cross$LV2$ = function (v) {
	return this.x * v.y - v.x * this.y;
};


function V2$cross_0$LV2$LV2$($this, v) {
	return $this.x * v.y - v.x * $this.y;
};

V2.cross_0$LV2$LV2$ = V2$cross_0$LV2$LV2$;

V2.prototype.dot$LV2$ = function (v) {
	return this.x * v.x + this.y * v.y;
};


function V2$dot_0$LV2$LV2$($this, v) {
	return $this.x * v.x + $this.y * v.y;
};

V2.dot_0$LV2$LV2$ = V2$dot_0$LV2$LV2$;

V2.prototype.len$ = function () {
	return Math.sqrt(V2$len2_0$LV2$(this));
};


function V2$len_0$LV2$($this) {
	return Math.sqrt(V2$len2_0$LV2$($this));
};

V2.len_0$LV2$ = V2$len_0$LV2$;

V2.prototype.len2$ = function () {
	var x;
	var y;
	(x = this.x, y = this.y);
	return x * x + y * y;
};


function V2$len2_0$LV2$($this) {
	var x;
	var y;
	(x = $this.x, y = $this.y);
	return x * x + y * y;
};

V2.len2_0$LV2$ = V2$len2_0$LV2$;

V2.prototype.dist$LV2$ = function (v) {
	return Math.sqrt(V2$dist2_0$LV2$LV2$(this, v));
};


function V2$dist_0$LV2$LV2$($this, v) {
	return Math.sqrt(V2$dist2_0$LV2$LV2$($this, v));
};

V2.dist_0$LV2$LV2$ = V2$dist_0$LV2$LV2$;

V2.prototype.dist2$LV2$ = function (v) {
	var x;
	var y;
	x = v.x - this.x;
	y = v.y - this.y;
	return x * x + y * y;
};


function V2$dist2_0$LV2$LV2$($this, v) {
	var x;
	var y;
	x = v.x - $this.x;
	y = v.y - $this.y;
	return x * x + y * y;
};

V2.dist2_0$LV2$LV2$ = V2$dist2_0$LV2$LV2$;

V2.prototype.lerp$LV2$LV2$N = function (v0, v1, ratio) {
	var x$0;
	var y$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	return this;
};


function V2$lerp_0$LV2$LV2$LV2$N($this, v0, v1, ratio) {
	var x$0;
	var y$0;
	$this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	$this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	return $this;
};

V2.lerp_0$LV2$LV2$LV2$N = V2$lerp_0$LV2$LV2$LV2$N;

V2.prototype.transformBy$LM22$ = function (m) {
	var x;
	var y;
	(x = this.x, y = this.y);
	this.x = m.m11 * x + m.m12 * y;
	this.y = m.m21 * x + m.m22 * y;
	return this;
};


function V2$transformBy_0$LV2$LM22$($this, m) {
	var x;
	var y;
	(x = $this.x, y = $this.y);
	$this.x = m.m11 * x + m.m12 * y;
	$this.y = m.m21 * x + m.m22 * y;
	return $this;
};

V2.transformBy_0$LV2$LM22$ = V2$transformBy_0$LV2$LM22$;

V2.prototype.transformBy$LM33$ = function (m) {
	var x;
	var y;
	(x = this.x, y = this.y);
	this.x = m.m11 * x + m.m12 * y + m.m13;
	this.y = m.m21 * x + m.m22 * y + m.m23;
	return this;
};


function V2$transformBy_0$LV2$LM33$($this, m) {
	var x;
	var y;
	(x = $this.x, y = $this.y);
	$this.x = m.m11 * x + m.m12 * y + m.m13;
	$this.y = m.m21 * x + m.m22 * y + m.m23;
	return $this;
};

V2.transformBy_0$LV2$LM33$ = V2$transformBy_0$LV2$LM33$;

V2.prototype.toString = function () {
	return "V2" + JSON.stringify([ this.x, this.y ]);
};


function V3() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

function V3$0(v) {
	var x$0$0;
	var y$0$0;
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
};

function V3$1(v) {
	var x$0$0;
	var y$0$0;
	var z$0$0;
	x$0$0 = v[0];
	y$0$0 = v[1];
	z$0$0 = v[2];
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
};

function V3$2(v) {
	var x$0$0;
	var y$0$0;
	var z$0$0;
	x$0$0 = v[0];
	y$0$0 = v[1];
	z$0$0 = v[2];
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z$0$0;
};

function V3$3(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
};

function V3$4(v, z) {
	var x$0$0;
	var y$0$0;
	this.x = 0;
	this.y = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z;
};

function V3$5(v) {
	var x$0$0;
	var y$0$0;
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
};

$__jsx_extend([V3, V3$0, V3$1, V3$2, V3$3, V3$4, V3$5], Object);
V3.prototype.array$ = function () {
	return [ this.x, this.y, this.z ];
};


function V3$array_0$LV3$($this) {
	return [ $this.x, $this.y, $this.z ];
};

V3.array_0$LV3$ = V3$array_0$LV3$;

V3.prototype.V2$ = function () {
	return new V2$4(this);
};


function V3$V2_0$LV3$($this) {
	return new V2$4($this);
};

V3.V2_0$LV3$ = V3$V2_0$LV3$;

V3.prototype.V4$N = function (w) {
	return new V4$5(this, w);
};


function V3$V4_0$LV3$N($this, w) {
	return new V4$5($this, w);
};

V3.V4_0$LV3$N = V3$V4_0$LV3$N;

V3.prototype.set$LV2$N = function (v, z) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this.z = z;
	return this;
};


function V3$set_0$LV3$LV2$N($this, v, z) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z;
	return $this;
};

V3.set_0$LV3$LV2$N = V3$set_0$LV3$LV2$N;

V3.prototype.set$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
};


function V3$set_0$LV3$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	return $this;
};

V3.set_0$LV3$LV4$ = V3$set_0$LV3$LV4$;

V3.prototype.clone$ = function () {
	return new V3$0(this);
};


function V3$clone_0$LV3$($this) {
	return new V3$0($this);
};

V3.clone_0$LV3$ = V3$clone_0$LV3$;

V3.prototype.clear$ = function () {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
};


function V3$clear_0$LV3$($this) {
	$this.x = 0;
	$this.y = 0;
	$this.z = 0;
	return $this;
};

V3.clear_0$LV3$ = V3$clear_0$LV3$;

V3.prototype.set$NNN = function (x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};


function V3$set_0$LV3$NNN($this, x, y, z) {
	$this.x = x;
	$this.y = y;
	$this.z = z;
	return $this;
};

V3.set_0$LV3$NNN = V3$set_0$LV3$NNN;

V3.prototype.set$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
};


function V3$set_0$LV3$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	return $this;
};

V3.set_0$LV3$LV3$ = V3$set_0$LV3$LV3$;

V3.prototype.set$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
};


function V3$set_0$LV3$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	return $this;
};

V3.set_0$LV3$AN = V3$set_0$LV3$AN;

V3.prototype.set$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	return this;
};


function V3$set_0$LV3$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	return $this;
};

V3.set_0$LV3$LFloat32Array$ = V3$set_0$LV3$LFloat32Array$;

V3.prototype.equals$LV3$ = function (v) {
	return V3$equals_0$LV3$LV3$N(this, v, 0.000001);
};


function V3$equals_0$LV3$LV3$($this, v) {
	return V3$equals_0$LV3$LV3$N($this, v, 0.000001);
};

V3.equals_0$LV3$LV3$ = V3$equals_0$LV3$LV3$;

V3.prototype.equals$LV3$N = function (v, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	return (abs$x$0 = v.x - this.x, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) < eps && (abs$x$1 = v.y - this.y, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) < eps && (abs$x$2 = v.z - this.z, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) < eps;
};


function V3$equals_0$LV3$LV3$N($this, v, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	return (abs$x$0 = v.x - $this.x, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) < eps && (abs$x$1 = v.y - $this.y, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) < eps && (abs$x$2 = v.z - $this.z, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) < eps;
};

V3.equals_0$LV3$LV3$N = V3$equals_0$LV3$LV3$N;

V3.prototype.add$NNN = function (x, y, z) {
	this.x += x;
	this.y += y;
	this.z += z;
	return this;
};


function V3$add_0$LV3$NNN($this, x, y, z) {
	$this.x += x;
	$this.y += y;
	$this.z += z;
	return $this;
};

V3.add_0$LV3$NNN = V3$add_0$LV3$NNN;

V3.prototype.add$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	return this;
};


function V3$add_0$LV3$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	return $this;
};

V3.add_0$LV3$LV3$ = V3$add_0$LV3$LV3$;

V3.prototype.add$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	return this;
};


function V3$add_0$LV3$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	return $this;
};

V3.add_0$LV3$AN = V3$add_0$LV3$AN;

V3.prototype.add$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	return this;
};


function V3$add_0$LV3$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	return $this;
};

V3.add_0$LV3$LFloat32Array$ = V3$add_0$LV3$LFloat32Array$;

V3.prototype.sub$NNN = function (x, y, z) {
	this.x -= x;
	this.y -= y;
	this.z -= z;
	return this;
};


function V3$sub_0$LV3$NNN($this, x, y, z) {
	$this.x -= x;
	$this.y -= y;
	$this.z -= z;
	return $this;
};

V3.sub_0$LV3$NNN = V3$sub_0$LV3$NNN;

V3.prototype.sub$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	return this;
};


function V3$sub_0$LV3$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	return $this;
};

V3.sub_0$LV3$LV3$ = V3$sub_0$LV3$LV3$;

V3.prototype.sub$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	return this;
};


function V3$sub_0$LV3$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	return $this;
};

V3.sub_0$LV3$AN = V3$sub_0$LV3$AN;

V3.prototype.sub$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	return this;
};


function V3$sub_0$LV3$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	return $this;
};

V3.sub_0$LV3$LFloat32Array$ = V3$sub_0$LV3$LFloat32Array$;

V3.prototype.mul$NNN = function (x, y, z) {
	this.x *= x;
	this.y *= y;
	this.z *= z;
	return this;
};


function V3$mul_0$LV3$NNN($this, x, y, z) {
	$this.x *= x;
	$this.y *= y;
	$this.z *= z;
	return $this;
};

V3.mul_0$LV3$NNN = V3$mul_0$LV3$NNN;

V3.prototype.mul$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	return this;
};


function V3$mul_0$LV3$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	return $this;
};

V3.mul_0$LV3$LV3$ = V3$mul_0$LV3$LV3$;

V3.prototype.mul$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	return this;
};


function V3$mul_0$LV3$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	return $this;
};

V3.mul_0$LV3$AN = V3$mul_0$LV3$AN;

V3.prototype.mul$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	return this;
};


function V3$mul_0$LV3$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	return $this;
};

V3.mul_0$LV3$LFloat32Array$ = V3$mul_0$LV3$LFloat32Array$;

V3.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	this.z *= s;
	return this;
};


function V3$mul_0$LV3$N($this, s) {
	$this.x *= s;
	$this.y *= s;
	$this.z *= s;
	return $this;
};

V3.mul_0$LV3$N = V3$mul_0$LV3$N;

V3.prototype.neg$ = function () {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	return this;
};


function V3$neg_0$LV3$($this) {
	$this.x *= -1;
	$this.y *= -1;
	$this.z *= -1;
	return $this;
};

V3.neg_0$LV3$ = V3$neg_0$LV3$;

V3.prototype.normalize$ = function () {
	var l;
	l = Math.sqrt(V3$len2_0$LV3$(this));
	return (l > 0 ? V3$mul_0$LV3$N(this, 1 / l) : this);
};


function V3$normalize_0$LV3$($this) {
	var l;
	l = Math.sqrt(V3$len2_0$LV3$($this));
	return (l > 0 ? V3$mul_0$LV3$N($this, 1 / l) : $this);
};

V3.normalize_0$LV3$ = V3$normalize_0$LV3$;

V3.prototype.cross$LV3$LV3$ = function (v0, v1) {
	var x0;
	var y0;
	var z0;
	var x1;
	var y1;
	var z1;
	(x0 = v0.x, y0 = v0.y, z0 = v0.z);
	(x1 = v1.x, y1 = v1.y, z1 = v1.z);
	this.x = y0 * z1 - z0 * y1;
	this.y = z0 * x1 - x0 * z1;
	this.z = x0 * y1 - y0 * x1;
	return this;
};


function V3$cross_0$LV3$LV3$LV3$($this, v0, v1) {
	var x0;
	var y0;
	var z0;
	var x1;
	var y1;
	var z1;
	(x0 = v0.x, y0 = v0.y, z0 = v0.z);
	(x1 = v1.x, y1 = v1.y, z1 = v1.z);
	$this.x = y0 * z1 - z0 * y1;
	$this.y = z0 * x1 - x0 * z1;
	$this.z = x0 * y1 - y0 * x1;
	return $this;
};

V3.cross_0$LV3$LV3$LV3$ = V3$cross_0$LV3$LV3$LV3$;

V3.prototype.dot$LV3$ = function (v) {
	return this.x * v.x + this.y * v.y + this.z * v.z;
};


function V3$dot_0$LV3$LV3$($this, v) {
	return $this.x * v.x + $this.y * v.y + $this.z * v.z;
};

V3.dot_0$LV3$LV3$ = V3$dot_0$LV3$LV3$;

V3.prototype.len$ = function () {
	return Math.sqrt(V3$len2_0$LV3$(this));
};


function V3$len_0$LV3$($this) {
	return Math.sqrt(V3$len2_0$LV3$($this));
};

V3.len_0$LV3$ = V3$len_0$LV3$;

V3.prototype.len2$ = function () {
	var x;
	var y;
	var z;
	(x = this.x, y = this.y, z = this.z);
	return x * x + y * y + z * z;
};


function V3$len2_0$LV3$($this) {
	var x;
	var y;
	var z;
	(x = $this.x, y = $this.y, z = $this.z);
	return x * x + y * y + z * z;
};

V3.len2_0$LV3$ = V3$len2_0$LV3$;

V3.prototype.dist$LV3$ = function (v) {
	return Math.sqrt(V3$dist2_0$LV3$LV3$(this, v));
};


function V3$dist_0$LV3$LV3$($this, v) {
	return Math.sqrt(V3$dist2_0$LV3$LV3$($this, v));
};

V3.dist_0$LV3$LV3$ = V3$dist_0$LV3$LV3$;

V3.prototype.dist2$LV3$ = function (v) {
	var x;
	var y;
	var z;
	x = v.x - this.x;
	y = v.y - this.y;
	z = v.z - this.z;
	return x * x + y * y + z * z;
};


function V3$dist2_0$LV3$LV3$($this, v) {
	var x;
	var y;
	var z;
	x = v.x - $this.x;
	y = v.y - $this.y;
	z = v.z - $this.z;
	return x * x + y * y + z * z;
};

V3.dist2_0$LV3$LV3$ = V3$dist2_0$LV3$LV3$;

V3.prototype.lerp$LV3$LV3$N = function (v0, v1, ratio) {
	var x$0;
	var y$0;
	var z$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	return this;
};


function V3$lerp_0$LV3$LV3$LV3$N($this, v0, v1, ratio) {
	var x$0;
	var y$0;
	var z$0;
	$this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	$this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	$this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	return $this;
};

V3.lerp_0$LV3$LV3$LV3$N = V3$lerp_0$LV3$LV3$LV3$N;

V3.prototype.transformBy$LM33$ = function (m) {
	var x;
	var y;
	var z;
	(x = this.x, y = this.y, z = this.z);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z;
	return this;
};


function V3$transformBy_0$LV3$LM33$($this, m) {
	var x;
	var y;
	var z;
	(x = $this.x, y = $this.y, z = $this.z);
	$this.x = m.m11 * x + m.m12 * y + m.m13 * z;
	$this.y = m.m21 * x + m.m22 * y + m.m23 * z;
	$this.z = m.m31 * x + m.m32 * y + m.m33 * z;
	return $this;
};

V3.transformBy_0$LV3$LM33$ = V3$transformBy_0$LV3$LM33$;

V3.prototype.transformBy$LM44$ = function (m) {
	var x;
	var y;
	var z;
	(x = this.x, y = this.y, z = this.z);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34;
	return this;
};


function V3$transformBy_0$LV3$LM44$($this, m) {
	var x;
	var y;
	var z;
	(x = $this.x, y = $this.y, z = $this.z);
	$this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14;
	$this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24;
	$this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34;
	return $this;
};

V3.transformBy_0$LV3$LM44$ = V3$transformBy_0$LV3$LM44$;

V3.prototype.toString = function () {
	return "V3" + JSON.stringify([ this.x, this.y, this.z ]);
};


function V4() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
};

function V4$0(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	V4$set_0$LV4$LV4$(this, v);
};

function V4$1(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	V4$set_0$LV4$AN(this, v);
};

function V4$2(v) {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	V4$set_0$LV4$LFloat32Array$(this, v);
};

function V4$3(x, y, z, w) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};

function V4$4(v, z, w) {
	var x$0$0;
	var y$0$0;
	this.x = 0;
	this.y = 0;
	x$0$0 = v.x;
	y$0$0 = v.y;
	this.x = x$0$0;
	this.y = y$0$0;
	this.z = z;
	this.w = w;
};

function V4$5(v, w) {
	var x$0$0;
	var y$0$0;
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
	this.w = w;
};

$__jsx_extend([V4, V4$0, V4$1, V4$2, V4$3, V4$4, V4$5], Object);
V4.prototype.array$ = function () {
	return [ this.x, this.y, this.z, this.w ];
};


function V4$array_0$LV4$($this) {
	return [ $this.x, $this.y, $this.z, $this.w ];
};

V4.array_0$LV4$ = V4$array_0$LV4$;

V4.prototype.V2$ = function () {
	return new V2$5(this);
};


function V4$V2_0$LV4$($this) {
	return new V2$5($this);
};

V4.V2_0$LV4$ = V4$V2_0$LV4$;

V4.prototype.V3$ = function () {
	return new V3$5(this);
};


function V4$V3_0$LV4$($this) {
	return new V3$5($this);
};

V4.V3_0$LV4$ = V4$V3_0$LV4$;

V4.prototype.set$LV2$NN = function (v, z, w) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.x = x$0;
	this.y = y$0;
	this.z = z;
	this.w = w;
	return this;
};


function V4$set_0$LV4$LV2$NN($this, v, z, w) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z;
	$this.w = w;
	return $this;
};

V4.set_0$LV4$LV2$NN = V4$set_0$LV4$LV2$NN;

V4.prototype.set$LV3$N = function (v, w) {
	var x$0;
	var y$0;
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


function V4$set_0$LV4$LV3$N($this, v, w) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	$this.w = w;
	return $this;
};

V4.set_0$LV4$LV3$N = V4$set_0$LV4$LV3$N;

V4.prototype.clone$ = function () {
	return new V4$0(this);
};


function V4$clone_0$LV4$($this) {
	return new V4$0($this);
};

V4.clone_0$LV4$ = V4$clone_0$LV4$;

V4.prototype.clear$ = function () {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
	return this;
};


function V4$clear_0$LV4$($this) {
	$this.x = 0;
	$this.y = 0;
	$this.z = 0;
	$this.w = 0;
	return $this;
};

V4.clear_0$LV4$ = V4$clear_0$LV4$;

V4.prototype.set$NNNN = function (x, y, z, w) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
	return this;
};


function V4$set_0$LV4$NNNN($this, x, y, z, w) {
	$this.x = x;
	$this.y = y;
	$this.z = z;
	$this.w = w;
	return $this;
};

V4.set_0$LV4$NNNN = V4$set_0$LV4$NNNN;

V4.prototype.set$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this.w = w$0;
	return this;
};


function V4$set_0$LV4$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	$this.w = w$0;
	return $this;
};

V4.set_0$LV4$LV4$ = V4$set_0$LV4$LV4$;

V4.prototype.set$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this.w = w$0;
	return this;
};


function V4$set_0$LV4$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	$this.w = w$0;
	return $this;
};

V4.set_0$LV4$AN = V4$set_0$LV4$AN;

V4.prototype.set$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x = x$0;
	this.y = y$0;
	this.z = z$0;
	this.w = w$0;
	return this;
};


function V4$set_0$LV4$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x = x$0;
	$this.y = y$0;
	$this.z = z$0;
	$this.w = w$0;
	return $this;
};

V4.set_0$LV4$LFloat32Array$ = V4$set_0$LV4$LFloat32Array$;

V4.prototype.equals$LV4$ = function (v) {
	return V4$equals_0$LV4$LV4$N(this, v, 0.000001);
};


function V4$equals_0$LV4$LV4$($this, v) {
	return V4$equals_0$LV4$LV4$N($this, v, 0.000001);
};

V4.equals_0$LV4$LV4$ = V4$equals_0$LV4$LV4$;

V4.prototype.equals$LV4$N = function (v, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	return (abs$x$0 = v.x - this.x, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) < eps && (abs$x$1 = v.y - this.y, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) < eps && (abs$x$2 = v.z - this.z, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) < eps && (abs$x$3 = v.w - this.w, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) < eps;
};


function V4$equals_0$LV4$LV4$N($this, v, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	return (abs$x$0 = v.x - $this.x, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) < eps && (abs$x$1 = v.y - $this.y, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) < eps && (abs$x$2 = v.z - $this.z, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) < eps && (abs$x$3 = v.w - $this.w, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) < eps;
};

V4.equals_0$LV4$LV4$N = V4$equals_0$LV4$LV4$N;

V4.prototype.add$NNNN = function (x, y, z, w) {
	this.x += x;
	this.y += y;
	this.z += z;
	this.w += w;
	return this;
};


function V4$add_0$LV4$NNNN($this, x, y, z, w) {
	$this.x += x;
	$this.y += y;
	$this.z += z;
	$this.w += w;
	return $this;
};

V4.add_0$LV4$NNNN = V4$add_0$LV4$NNNN;

V4.prototype.add$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
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


function V4$add_0$LV4$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	$this.w += w$0;
	return $this;
};

V4.add_0$LV4$LV4$ = V4$add_0$LV4$LV4$;

V4.prototype.add$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	this.w += w$0;
	return this;
};


function V4$add_0$LV4$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	$this.w += w$0;
	return $this;
};

V4.add_0$LV4$AN = V4$add_0$LV4$AN;

V4.prototype.add$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x += x$0;
	this.y += y$0;
	this.z += z$0;
	this.w += w$0;
	return this;
};


function V4$add_0$LV4$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x += x$0;
	$this.y += y$0;
	$this.z += z$0;
	$this.w += w$0;
	return $this;
};

V4.add_0$LV4$LFloat32Array$ = V4$add_0$LV4$LFloat32Array$;

V4.prototype.sub$NNNN = function (x, y, z, w) {
	this.x -= x;
	this.y -= y;
	this.z -= z;
	this.w -= w;
	return this;
};


function V4$sub_0$LV4$NNNN($this, x, y, z, w) {
	$this.x -= x;
	$this.y -= y;
	$this.z -= z;
	$this.w -= w;
	return $this;
};

V4.sub_0$LV4$NNNN = V4$sub_0$LV4$NNNN;

V4.prototype.sub$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
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


function V4$sub_0$LV4$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	$this.w -= w$0;
	return $this;
};

V4.sub_0$LV4$LV4$ = V4$sub_0$LV4$LV4$;

V4.prototype.sub$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	this.w -= w$0;
	return this;
};


function V4$sub_0$LV4$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	$this.w -= w$0;
	return $this;
};

V4.sub_0$LV4$AN = V4$sub_0$LV4$AN;

V4.prototype.sub$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x -= x$0;
	this.y -= y$0;
	this.z -= z$0;
	this.w -= w$0;
	return this;
};


function V4$sub_0$LV4$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x -= x$0;
	$this.y -= y$0;
	$this.z -= z$0;
	$this.w -= w$0;
	return $this;
};

V4.sub_0$LV4$LFloat32Array$ = V4$sub_0$LV4$LFloat32Array$;

V4.prototype.mul$NNNN = function (x, y, z, w) {
	this.x *= x;
	this.y *= y;
	this.z *= z;
	this.w *= w;
	return this;
};


function V4$mul_0$LV4$NNNN($this, x, y, z, w) {
	$this.x *= x;
	$this.y *= y;
	$this.z *= z;
	$this.w *= w;
	return $this;
};

V4.mul_0$LV4$NNNN = V4$mul_0$LV4$NNNN;

V4.prototype.mul$LV4$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
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


function V4$mul_0$LV4$LV4$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	w$0 = v.w;
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	$this.w *= w$0;
	return $this;
};

V4.mul_0$LV4$LV4$ = V4$mul_0$LV4$LV4$;

V4.prototype.mul$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	this.w *= w$0;
	return this;
};


function V4$mul_0$LV4$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	$this.w *= w$0;
	return $this;
};

V4.mul_0$LV4$AN = V4$mul_0$LV4$AN;

V4.prototype.mul$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	this.x *= x$0;
	this.y *= y$0;
	this.z *= z$0;
	this.w *= w$0;
	return this;
};


function V4$mul_0$LV4$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	w$0 = v[3];
	$this.x *= x$0;
	$this.y *= y$0;
	$this.z *= z$0;
	$this.w *= w$0;
	return $this;
};

V4.mul_0$LV4$LFloat32Array$ = V4$mul_0$LV4$LFloat32Array$;

V4.prototype.mul$N = function (s) {
	this.x *= s;
	this.y *= s;
	this.z *= s;
	this.w *= s;
	return this;
};


function V4$mul_0$LV4$N($this, s) {
	$this.x *= s;
	$this.y *= s;
	$this.z *= s;
	$this.w *= s;
	return $this;
};

V4.mul_0$LV4$N = V4$mul_0$LV4$N;

V4.prototype.neg$ = function () {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	this.w *= -1;
	return this;
};


function V4$neg_0$LV4$($this) {
	$this.x *= -1;
	$this.y *= -1;
	$this.z *= -1;
	$this.w *= -1;
	return $this;
};

V4.neg_0$LV4$ = V4$neg_0$LV4$;

V4.prototype.normalize$ = function () {
	var l;
	l = Math.sqrt(V4$len2_0$LV4$(this));
	return (l > 0 ? V4$mul_0$LV4$N(this, 1 / l) : this);
};


function V4$normalize_0$LV4$($this) {
	var l;
	l = Math.sqrt(V4$len2_0$LV4$($this));
	return (l > 0 ? V4$mul_0$LV4$N($this, 1 / l) : $this);
};

V4.normalize_0$LV4$ = V4$normalize_0$LV4$;

V4.prototype.dot$LV4$ = function (v) {
	return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
};


function V4$dot_0$LV4$LV4$($this, v) {
	return $this.x * v.x + $this.y * v.y + $this.z * v.z + $this.w * v.w;
};

V4.dot_0$LV4$LV4$ = V4$dot_0$LV4$LV4$;

V4.prototype.len$ = function () {
	return Math.sqrt(V4$len2_0$LV4$(this));
};


function V4$len_0$LV4$($this) {
	return Math.sqrt(V4$len2_0$LV4$($this));
};

V4.len_0$LV4$ = V4$len_0$LV4$;

V4.prototype.len2$ = function () {
	var x;
	var y;
	var z;
	var w;
	(x = this.x, y = this.y, z = this.z, w = this.w);
	return x * x + y * y + z * z + w * w;
};


function V4$len2_0$LV4$($this) {
	var x;
	var y;
	var z;
	var w;
	(x = $this.x, y = $this.y, z = $this.z, w = $this.w);
	return x * x + y * y + z * z + w * w;
};

V4.len2_0$LV4$ = V4$len2_0$LV4$;

V4.prototype.dist$LV4$ = function (v) {
	return Math.sqrt(V4$dist2_0$LV4$LV4$(this, v));
};


function V4$dist_0$LV4$LV4$($this, v) {
	return Math.sqrt(V4$dist2_0$LV4$LV4$($this, v));
};

V4.dist_0$LV4$LV4$ = V4$dist_0$LV4$LV4$;

V4.prototype.dist2$LV4$ = function (v) {
	var x;
	var y;
	var z;
	var w;
	x = v.x - this.x;
	y = v.y - this.y;
	z = v.z - this.z;
	w = v.w - this.w;
	return x * x + y * y + z * z + w * w;
};


function V4$dist2_0$LV4$LV4$($this, v) {
	var x;
	var y;
	var z;
	var w;
	x = v.x - $this.x;
	y = v.y - $this.y;
	z = v.z - $this.z;
	w = v.w - $this.w;
	return x * x + y * y + z * z + w * w;
};

V4.dist2_0$LV4$LV4$ = V4$dist2_0$LV4$LV4$;

V4.prototype.lerp$LV4$LV4$N = function (v0, v1, ratio) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	this.w = (w$0 = v0.w) + ratio * (v1.w - w$0);
	return this;
};


function V4$lerp_0$LV4$LV4$LV4$N($this, v0, v1, ratio) {
	var x$0;
	var y$0;
	var z$0;
	var w$0;
	$this.x = (x$0 = v0.x) + ratio * (v1.x - x$0);
	$this.y = (y$0 = v0.y) + ratio * (v1.y - y$0);
	$this.z = (z$0 = v0.z) + ratio * (v1.z - z$0);
	$this.w = (w$0 = v0.w) + ratio * (v1.w - w$0);
	return $this;
};

V4.lerp_0$LV4$LV4$LV4$N = V4$lerp_0$LV4$LV4$LV4$N;

V4.prototype.transformBy$LM44$ = function (m) {
	var x;
	var y;
	var z;
	var w;
	(x = this.x, y = this.y, z = this.z, w = this.w);
	this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14 * w;
	this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24 * w;
	this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34 * w;
	this.w = m.m41 * x + m.m42 * y + m.m43 * z + m.m44 * w;
	return this;
};


function V4$transformBy_0$LV4$LM44$($this, m) {
	var x;
	var y;
	var z;
	var w;
	(x = $this.x, y = $this.y, z = $this.z, w = $this.w);
	$this.x = m.m11 * x + m.m12 * y + m.m13 * z + m.m14 * w;
	$this.y = m.m21 * x + m.m22 * y + m.m23 * z + m.m24 * w;
	$this.z = m.m31 * x + m.m32 * y + m.m33 * z + m.m34 * w;
	$this.w = m.m41 * x + m.m42 * y + m.m43 * z + m.m44 * w;
	return $this;
};

V4.transformBy_0$LV4$LM44$ = V4$transformBy_0$LV4$LM44$;

V4.prototype.toString = function () {
	return "V4" + JSON.stringify([ this.x, this.y, this.z, this.w ]);
};


function M22() {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
};

function M22$0(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
};

function M22$1(m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
};

function M22$2(m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
};

function M22$3(m11, m12, m21, m22) {
	this.m11 = m11;
	this.m21 = m21;
	this.m12 = m12;
	this.m22 = m22;
};

function M22$4(v0, v1) {
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m12 = v1.x;
	this.m22 = v1.y;
};

function M22$5(s) {
	this.m11 = this.m22 = s;
	this.m21 = this.m12 = 0;
};

function M22$6(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
};

function M22$7(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
};

$__jsx_extend([M22, M22$0, M22$1, M22$2, M22$3, M22$4, M22$5, M22$6, M22$7], Object);
M22.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m12, this.m22 ];
};


function M22$array_0$LM22$($this) {
	return [ $this.m11, $this.m21, $this.m12, $this.m22 ];
};

M22.array_0$LM22$ = M22$array_0$LM22$;

M22.prototype.transposedArray$ = function () {
	return [ this.m11, this.m12, this.m21, this.m22 ];
};


function M22$transposedArray_0$LM22$($this) {
	return [ $this.m11, $this.m12, $this.m21, $this.m22 ];
};

M22.transposedArray_0$LM22$ = M22$transposedArray_0$LM22$;

M22.prototype.M33$N = function (m22) {
	return new M33$6(this, m22);
};


function M22$M33_0$LM22$N($this, m22) {
	return new M33$6($this, m22);
};

M22.M33_0$LM22$N = M22$M33_0$LM22$N;

M22.prototype.M44$NN = function (m22, m33) {
	return new M44$6(this, m22, m33);
};


function M22$M44_0$LM22$NN($this, m22, m33) {
	return new M44$6($this, m22, m33);
};

M22.M44_0$LM22$NN = M22$M44_0$LM22$NN;

M22.prototype.set$LM33$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


function M22$set_0$LM22$LM33$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	return $this;
};

M22.set_0$LM22$LM33$ = M22$set_0$LM22$LM33$;

M22.prototype.set$LM44$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


function M22$set_0$LM22$LM44$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	return $this;
};

M22.set_0$LM22$LM44$ = M22$set_0$LM22$LM44$;

M22.prototype.clone$ = function () {
	return new M22$0(this);
};


function M22$clone_0$LM22$($this) {
	return new M22$0($this);
};

M22.clone_0$LM22$ = M22$clone_0$LM22$;

M22.prototype.setZero$ = function () {
	this.m11 = this.m22 = 0;
	this.m21 = this.m12 = 0;
	return this;
};


function M22$setZero_0$LM22$($this) {
	$this.m11 = $this.m22 = 0;
	$this.m21 = $this.m12 = 0;
	return $this;
};

M22.setZero_0$LM22$ = M22$setZero_0$LM22$;

M22.prototype.setIdentity$ = function () {
	this.m11 = this.m22 = 1;
	this.m21 = this.m12 = 0;
	return this;
};


function M22$setIdentity_0$LM22$($this) {
	$this.m11 = $this.m22 = 1;
	$this.m21 = $this.m12 = 0;
	return $this;
};

M22.setIdentity_0$LM22$ = M22$setIdentity_0$LM22$;

function M22$zero$() {
	var this$0;
	this$0 = new M22();
	this$0.m11 = this$0.m22 = 0;
	this$0.m21 = this$0.m12 = 0;
	return this$0;
};

M22.zero$ = M22$zero$;

function M22$identity$() {
	var this$0;
	this$0 = new M22();
	this$0.m11 = this$0.m22 = 1;
	this$0.m21 = this$0.m12 = 0;
	return this$0;
};

M22.identity$ = M22$identity$;

M22.prototype.set$NNNN = function (m11, m12, m21, m22) {
	this.m11 = m11;
	this.m21 = m21;
	this.m12 = m12;
	this.m22 = m22;
	return this;
};


function M22$set_0$LM22$NNNN($this, m11, m12, m21, m22) {
	$this.m11 = m11;
	$this.m21 = m21;
	$this.m12 = m12;
	$this.m22 = m22;
	return $this;
};

M22.set_0$LM22$NNNN = M22$set_0$LM22$NNNN;

M22.prototype.set$LV2$LV2$ = function (v0, v1) {
	this.m11 = v0.x;
	this.m21 = v0.y;
	this.m12 = v1.x;
	this.m22 = v1.y;
	return this;
};


function M22$set_0$LM22$LV2$LV2$($this, v0, v1) {
	$this.m11 = v0.x;
	$this.m21 = v0.y;
	$this.m12 = v1.x;
	$this.m22 = v1.y;
	return $this;
};

M22.set_0$LM22$LV2$LV2$ = M22$set_0$LM22$LV2$LV2$;

M22.prototype.set$LM22$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m21;
	this.m12 = m.m12;
	this.m22 = m.m22;
	return this;
};


function M22$set_0$LM22$LM22$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	return $this;
};

M22.set_0$LM22$LM22$ = M22$set_0$LM22$LM22$;

M22.prototype.set$AN = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
	return this;
};


function M22$set_0$LM22$AN($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m12 = m[2];
	$this.m22 = m[3];
	return $this;
};

M22.set_0$LM22$AN = M22$set_0$LM22$AN;

M22.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m12 = m[2];
	this.m22 = m[3];
	return this;
};


function M22$set_0$LM22$LFloat32Array$($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m12 = m[2];
	$this.m22 = m[3];
	return $this;
};

M22.set_0$LM22$LFloat32Array$ = M22$set_0$LM22$LFloat32Array$;

M22.prototype.set$N = function (s) {
	this.m11 = this.m22 = s;
	this.m21 = this.m12 = 0;
	return this;
};


function M22$set_0$LM22$N($this, s) {
	$this.m11 = $this.m22 = s;
	$this.m21 = $this.m12 = 0;
	return $this;
};

M22.set_0$LM22$N = M22$set_0$LM22$N;

M22.prototype.equals$LM22$ = function (m) {
	return M22$equals_0$LM22$LM22$N(this, m, 0.000001);
};


function M22$equals_0$LM22$LM22$($this, m) {
	return M22$equals_0$LM22$LM22$N($this, m, 0.000001);
};

M22.equals_0$LM22$LM22$ = M22$equals_0$LM22$LM22$;

M22.prototype.equals$LM22$N = function (m, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	return ((abs$x$0 = this.m11 - m.m11, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) >= eps ? false : (abs$x$1 = this.m21 - m.m21, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) >= eps ? false : (abs$x$2 = this.m12 - m.m12, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) >= eps ? false : (abs$x$3 = this.m22 - m.m22, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) >= eps ? false : true);
};


function M22$equals_0$LM22$LM22$N($this, m, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	return ((abs$x$0 = $this.m11 - m.m11, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) >= eps ? false : (abs$x$1 = $this.m21 - m.m21, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) >= eps ? false : (abs$x$2 = $this.m12 - m.m12, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) >= eps ? false : (abs$x$3 = $this.m22 - m.m22, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) >= eps ? false : true);
};

M22.equals_0$LM22$LM22$N = M22$equals_0$LM22$LM22$N;

M22.prototype.add$LM22$ = function (m) {
	this.m11 += m.m11;
	this.m21 += m.m21;
	this.m12 += m.m12;
	this.m22 += m.m22;
	return this;
};


function M22$add_0$LM22$LM22$($this, m) {
	$this.m11 += m.m11;
	$this.m21 += m.m21;
	$this.m12 += m.m12;
	$this.m22 += m.m22;
	return $this;
};

M22.add_0$LM22$LM22$ = M22$add_0$LM22$LM22$;

M22.prototype.sub$LM22$ = function (m) {
	this.m11 -= m.m11;
	this.m21 -= m.m21;
	this.m12 -= m.m12;
	this.m22 -= m.m22;
	return this;
};


function M22$sub_0$LM22$LM22$($this, m) {
	$this.m11 -= m.m11;
	$this.m21 -= m.m21;
	$this.m12 -= m.m12;
	$this.m22 -= m.m22;
	return $this;
};

M22.sub_0$LM22$LM22$ = M22$sub_0$LM22$LM22$;

M22.prototype.mul$LM22$ = function (m) {
	return M22$mul_0$LM22$LM22$LM22$(this, new M22$0(this), m);
};


function M22$mul_0$LM22$LM22$($this, m) {
	return M22$mul_0$LM22$LM22$LM22$($this, new M22$0($this), m);
};

M22.mul_0$LM22$LM22$ = M22$mul_0$LM22$LM22$;

M22.prototype.mul$LM22$LM22$ = function (m0, m1) {
	var m11$0;
	var m21$0;
	var m11$1;
	var m12$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21);
	this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0;
	this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22);
	this.m22 = m21$1 * m12$1 + m22$0 * m22$1;
	return this;
};


function M22$mul_0$LM22$LM22$LM22$($this, m0, m1) {
	var m11$0;
	var m21$0;
	var m11$1;
	var m12$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	$this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21);
	$this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0;
	$this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22);
	$this.m22 = m21$1 * m12$1 + m22$0 * m22$1;
	return $this;
};

M22.mul_0$LM22$LM22$LM22$ = M22$mul_0$LM22$LM22$LM22$;

M22.prototype.transpose$ = function () {
	var m12;
	m12 = this.m12;
	this.m12 = this.m21;
	this.m21 = m12;
	return this;
};


function M22$transpose_0$LM22$($this) {
	var m12;
	m12 = $this.m12;
	$this.m12 = $this.m21;
	$this.m21 = m12;
	return $this;
};

M22.transpose_0$LM22$ = M22$transpose_0$LM22$;

M22.prototype.transpose$LM22$ = function (m) {
	this.m11 = m.m11;
	this.m21 = m.m12;
	this.m12 = m.m21;
	this.m22 = m.m22;
	return this;
};


function M22$transpose_0$LM22$LM22$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m12;
	$this.m12 = m.m21;
	$this.m22 = m.m22;
	return $this;
};

M22.transpose_0$LM22$LM22$ = M22$transpose_0$LM22$LM22$;

M22.prototype.det$ = function () {
	return this.m11 * this.m22 - this.m21 * this.m12;
};


function M22$det_0$LM22$($this) {
	return $this.m11 * $this.m22 - $this.m21 * $this.m12;
};

M22.det_0$LM22$ = M22$det_0$LM22$;

M22.prototype.inverse$ = function () {
	var d;
	var invDet;
	var org$m11$0;
	var org$m21$0;
	var org$m12$0;
	var org$m22$0;
	d = this.m11 * this.m22 - this.m21 * this.m12;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	org$m11$0 = this.m11;
	org$m21$0 = this.m21;
	org$m12$0 = this.m12;
	org$m22$0 = this.m22;
	this.m11 = org$m22$0 * invDet;
	this.m21 = - org$m21$0 * invDet;
	this.m12 = - org$m12$0 * invDet;
	this.m22 = org$m11$0 * invDet;
	return this;
};


function M22$inverse_0$LM22$($this) {
	var d;
	var invDet;
	var org$m11$0;
	var org$m21$0;
	var org$m12$0;
	var org$m22$0;
	d = $this.m11 * $this.m22 - $this.m21 * $this.m12;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	org$m11$0 = $this.m11;
	org$m21$0 = $this.m21;
	org$m12$0 = $this.m12;
	org$m22$0 = $this.m22;
	$this.m11 = org$m22$0 * invDet;
	$this.m21 = - org$m21$0 * invDet;
	$this.m12 = - org$m12$0 * invDet;
	$this.m22 = org$m11$0 * invDet;
	return $this;
};

M22.inverse_0$LM22$ = M22$inverse_0$LM22$;

M22.prototype.setScale$N = function (s) {
	this.m11 = s;
	this.m21 = this.m12 = 0;
	this.m22 = s;
	return this;
};


function M22$setScale_0$LM22$N($this, s) {
	$this.m11 = s;
	$this.m21 = $this.m12 = 0;
	$this.m22 = s;
	return $this;
};

M22.setScale_0$LM22$N = M22$setScale_0$LM22$N;

M22.prototype.setScale$NN = function (x, y) {
	this.m11 = x;
	this.m21 = this.m12 = 0;
	this.m22 = y;
	return this;
};


function M22$setScale_0$LM22$NN($this, x, y) {
	$this.m11 = x;
	$this.m21 = $this.m12 = 0;
	$this.m22 = y;
	return $this;
};

M22.setScale_0$LM22$NN = M22$setScale_0$LM22$NN;

M22.prototype.setScale$LV2$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	this.m11 = x$0;
	this.m21 = this.m12 = 0;
	this.m22 = y$0;
	return this;
};


function M22$setScale_0$LM22$LV2$($this, v) {
	var x$0;
	var y$0;
	x$0 = v.x;
	y$0 = v.y;
	$this.m11 = x$0;
	$this.m21 = $this.m12 = 0;
	$this.m22 = y$0;
	return $this;
};

M22.setScale_0$LM22$LV2$ = M22$setScale_0$LM22$LV2$;

M22.prototype.setScale$AN = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.m11 = x$0;
	this.m21 = this.m12 = 0;
	this.m22 = y$0;
	return this;
};


function M22$setScale_0$LM22$AN($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.m11 = x$0;
	$this.m21 = $this.m12 = 0;
	$this.m22 = y$0;
	return $this;
};

M22.setScale_0$LM22$AN = M22$setScale_0$LM22$AN;

M22.prototype.setScale$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	this.m11 = x$0;
	this.m21 = this.m12 = 0;
	this.m22 = y$0;
	return this;
};


function M22$setScale_0$LM22$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	x$0 = v[0];
	y$0 = v[1];
	$this.m11 = x$0;
	$this.m21 = $this.m12 = 0;
	$this.m22 = y$0;
	return $this;
};

M22.setScale_0$LM22$LFloat32Array$ = M22$setScale_0$LM22$LFloat32Array$;

M22.prototype.setRotation$N = function (rad) {
	var c;
	var s;
	(c = Math.cos(rad), s = Math.sin(rad));
	this.m11 = c;
	this.m21 = s;
	this.m12 = - s;
	this.m22 = c;
	return this;
};


function M22$setRotation_0$LM22$N($this, rad) {
	var c;
	var s;
	(c = Math.cos(rad), s = Math.sin(rad));
	$this.m11 = c;
	$this.m21 = s;
	$this.m12 = - s;
	$this.m22 = c;
	return $this;
};

M22.setRotation_0$LM22$N = M22$setRotation_0$LM22$N;

M22.prototype.toString = function () {
	return "M22" + JSON.stringify([ this.m11, this.m21, this.m12, this.m22 ]);
};


function M33() {
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

function M33$0(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set_0$LM33$LM33$(this, m);
};

function M33$1(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set_0$LM33$AN(this, m);
};

function M33$2(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set_0$LM33$LFloat32Array$(this, m);
};

function M33$3(m11, m12, m13, m21, m22, m23, m31, m32, m33) {
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

function M33$4(v0, v1, v2) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set_0$LM33$LV3$LV3$LV3$(this, v0, v1, v2);
};

function M33$5(s) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set_0$LM33$N(this, s);
};

function M33$6(m, m22) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set_0$LM33$LM22$N(this, m, m22);
};

function M33$7(m) {
	this.m11 = 0;
	this.m21 = 0;
	this.m31 = 0;
	this.m12 = 0;
	this.m22 = 0;
	this.m32 = 0;
	this.m13 = 0;
	this.m23 = 0;
	this.m33 = 0;
	M33$set_0$LM33$LM44$(this, m);
};

$__jsx_extend([M33, M33$0, M33$1, M33$2, M33$3, M33$4, M33$5, M33$6, M33$7], Object);
M33.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33 ];
};


function M33$array_0$LM33$($this) {
	return [ $this.m11, $this.m21, $this.m31, $this.m12, $this.m22, $this.m32, $this.m13, $this.m23, $this.m33 ];
};

M33.array_0$LM33$ = M33$array_0$LM33$;

M33.prototype.M22$ = function () {
	return new M22$6(this);
};


function M33$M22_0$LM33$($this) {
	return new M22$6($this);
};

M33.M22_0$LM33$ = M33$M22_0$LM33$;

M33.prototype.M44$N = function (m33) {
	return new M44$7(this, m33);
};


function M33$M44_0$LM33$N($this, m33) {
	return new M44$7($this, m33);
};

M33.M44_0$LM33$N = M33$M44_0$LM33$N;

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


function M33$set_0$LM33$LM22$N($this, m, m22) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = 0;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = 0;
	$this.m13 = 0;
	$this.m23 = 0;
	$this.m33 = 0;
	return $this;
};

M33.set_0$LM33$LM22$N = M33$set_0$LM33$LM22$N;

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


function M33$set_0$LM33$LM44$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = m.m31;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = m.m32;
	$this.m13 = m.m13;
	$this.m23 = m.m23;
	$this.m33 = m.m33;
	return $this;
};

M33.set_0$LM33$LM44$ = M33$set_0$LM33$LM44$;

M33.prototype.clone$ = function () {
	return new M33$0(this);
};


function M33$clone_0$LM33$($this) {
	return new M33$0($this);
};

M33.clone_0$LM33$ = M33$clone_0$LM33$;

M33.prototype.setZero$ = function () {
	return M33$set_0$LM33$N(this, 0);
};


function M33$setZero_0$LM33$($this) {
	return M33$set_0$LM33$N($this, 0);
};

M33.setZero_0$LM33$ = M33$setZero_0$LM33$;

M33.prototype.setIdentity$ = function () {
	return M33$set_0$LM33$N(this, 1);
};


function M33$setIdentity_0$LM33$($this) {
	return M33$set_0$LM33$N($this, 1);
};

M33.setIdentity_0$LM33$ = M33$setIdentity_0$LM33$;

function M33$zero$() {
	return M33$set_0$LM33$N(new M33(), 0);
};

M33.zero$ = M33$zero$;

function M33$identity$() {
	return M33$set_0$LM33$N(new M33(), 1);
};

M33.identity$ = M33$identity$;

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


function M33$set_0$LM33$NNNNNNNNN($this, m11, m12, m13, m21, m22, m23, m31, m32, m33) {
	$this.m11 = m11;
	$this.m21 = m21;
	$this.m31 = m31;
	$this.m12 = m12;
	$this.m22 = m22;
	$this.m32 = m32;
	$this.m13 = m13;
	$this.m23 = m23;
	$this.m33 = m33;
	return $this;
};

M33.set_0$LM33$NNNNNNNNN = M33$set_0$LM33$NNNNNNNNN;

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


function M33$set_0$LM33$LV3$LV3$LV3$($this, v0, v1, v2) {
	$this.m11 = v0.x;
	$this.m21 = v0.y;
	$this.m31 = v0.z;
	$this.m12 = v1.x;
	$this.m22 = v1.y;
	$this.m32 = v1.z;
	$this.m13 = v2.x;
	$this.m23 = v2.y;
	$this.m33 = v2.z;
	return $this;
};

M33.set_0$LM33$LV3$LV3$LV3$ = M33$set_0$LM33$LV3$LV3$LV3$;

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


function M33$set_0$LM33$LM33$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = m.m31;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = m.m32;
	$this.m13 = m.m13;
	$this.m23 = m.m23;
	$this.m33 = m.m33;
	return $this;
};

M33.set_0$LM33$LM33$ = M33$set_0$LM33$LM33$;

M33.prototype.set$AN = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m31 = m[2];
	this.m12 = m[3];
	this.m22 = m[4];
	this.m32 = m[5];
	this.m13 = m[6];
	this.m23 = m[7];
	this.m33 = m[8];
	return this;
};


function M33$set_0$LM33$AN($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m31 = m[2];
	$this.m12 = m[3];
	$this.m22 = m[4];
	$this.m32 = m[5];
	$this.m13 = m[6];
	$this.m23 = m[7];
	$this.m33 = m[8];
	return $this;
};

M33.set_0$LM33$AN = M33$set_0$LM33$AN;

M33.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m31 = m[2];
	this.m12 = m[3];
	this.m22 = m[4];
	this.m32 = m[5];
	this.m13 = m[6];
	this.m23 = m[7];
	this.m33 = m[8];
	return this;
};


function M33$set_0$LM33$LFloat32Array$($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m31 = m[2];
	$this.m12 = m[3];
	$this.m22 = m[4];
	$this.m32 = m[5];
	$this.m13 = m[6];
	$this.m23 = m[7];
	$this.m33 = m[8];
	return $this;
};

M33.set_0$LM33$LFloat32Array$ = M33$set_0$LM33$LFloat32Array$;

M33.prototype.set$N = function (s) {
	this.m11 = this.m22 = this.m33 = s;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};


function M33$set_0$LM33$N($this, s) {
	$this.m11 = $this.m22 = $this.m33 = s;
	$this.m21 = $this.m31 = $this.m12 = $this.m32 = $this.m13 = $this.m23 = 0;
	return $this;
};

M33.set_0$LM33$N = M33$set_0$LM33$N;

M33.prototype.equals$LM33$ = function (m) {
	return M33$equals_0$LM33$LM33$N(this, m, 0.000001);
};


function M33$equals_0$LM33$LM33$($this, m) {
	return M33$equals_0$LM33$LM33$N($this, m, 0.000001);
};

M33.equals_0$LM33$LM33$ = M33$equals_0$LM33$LM33$;

M33.prototype.equals$LM33$N = function (m, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	var abs$x$4;
	var abs$x$5;
	var abs$x$6;
	var abs$x$7;
	var abs$x$8;
	return ((abs$x$0 = this.m11 - m.m11, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) >= eps ? false : (abs$x$1 = this.m21 - m.m21, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) >= eps ? false : (abs$x$2 = this.m31 - m.m31, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) >= eps ? false : (abs$x$3 = this.m12 - m.m12, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) >= eps ? false : (abs$x$4 = this.m22 - m.m22, abs$x$4 >= 0 ? abs$x$4 : - abs$x$4) >= eps ? false : (abs$x$5 = this.m32 - m.m32, abs$x$5 >= 0 ? abs$x$5 : - abs$x$5) >= eps ? false : (abs$x$6 = this.m13 - m.m13, abs$x$6 >= 0 ? abs$x$6 : - abs$x$6) >= eps ? false : (abs$x$7 = this.m23 - m.m23, abs$x$7 >= 0 ? abs$x$7 : - abs$x$7) >= eps ? false : (abs$x$8 = this.m33 - m.m33, abs$x$8 >= 0 ? abs$x$8 : - abs$x$8) >= eps ? false : true);
};


function M33$equals_0$LM33$LM33$N($this, m, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	var abs$x$4;
	var abs$x$5;
	var abs$x$6;
	var abs$x$7;
	var abs$x$8;
	return ((abs$x$0 = $this.m11 - m.m11, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) >= eps ? false : (abs$x$1 = $this.m21 - m.m21, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) >= eps ? false : (abs$x$2 = $this.m31 - m.m31, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) >= eps ? false : (abs$x$3 = $this.m12 - m.m12, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) >= eps ? false : (abs$x$4 = $this.m22 - m.m22, abs$x$4 >= 0 ? abs$x$4 : - abs$x$4) >= eps ? false : (abs$x$5 = $this.m32 - m.m32, abs$x$5 >= 0 ? abs$x$5 : - abs$x$5) >= eps ? false : (abs$x$6 = $this.m13 - m.m13, abs$x$6 >= 0 ? abs$x$6 : - abs$x$6) >= eps ? false : (abs$x$7 = $this.m23 - m.m23, abs$x$7 >= 0 ? abs$x$7 : - abs$x$7) >= eps ? false : (abs$x$8 = $this.m33 - m.m33, abs$x$8 >= 0 ? abs$x$8 : - abs$x$8) >= eps ? false : true);
};

M33.equals_0$LM33$LM33$N = M33$equals_0$LM33$LM33$N;

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


function M33$add_0$LM33$LM33$($this, m) {
	$this.m11 += m.m11;
	$this.m21 += m.m21;
	$this.m31 += m.m31;
	$this.m12 += m.m12;
	$this.m22 += m.m22;
	$this.m32 += m.m32;
	$this.m13 += m.m13;
	$this.m23 += m.m23;
	$this.m33 += m.m33;
	return $this;
};

M33.add_0$LM33$LM33$ = M33$add_0$LM33$LM33$;

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


function M33$sub_0$LM33$LM33$($this, m) {
	$this.m11 -= m.m11;
	$this.m21 -= m.m21;
	$this.m31 -= m.m31;
	$this.m12 -= m.m12;
	$this.m22 -= m.m22;
	$this.m32 -= m.m32;
	$this.m13 -= m.m13;
	$this.m23 -= m.m23;
	$this.m33 -= m.m33;
	return $this;
};

M33.sub_0$LM33$LM33$ = M33$sub_0$LM33$LM33$;

M33.prototype.mul$LM33$ = function (m) {
	return M33$mul_0$LM33$LM33$LM33$(this, new M33$0(this), m);
};


function M33$mul_0$LM33$LM33$($this, m) {
	return M33$mul_0$LM33$LM33$LM33$($this, new M33$0($this), m);
};

M33.mul_0$LM33$LM33$ = M33$mul_0$LM33$LM33$;

M33.prototype.mul$LM33$LM33$ = function (m0, m1) {
	var m11$0;
	var m21$0;
	var m31$0;
	var m11$1;
	var m12$0;
	var m13$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	var m23$0;
	var m32$0;
	var m31$1;
	var m32$1;
	var m33$0;
	var m13$1;
	var m23$1;
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


function M33$mul_0$LM33$LM33$LM33$($this, m0, m1) {
	var m11$0;
	var m21$0;
	var m31$0;
	var m11$1;
	var m12$0;
	var m13$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	var m23$0;
	var m32$0;
	var m31$1;
	var m32$1;
	var m33$0;
	var m13$1;
	var m23$1;
	var m33$1;
	$this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21) + (m13$0 = m0.m13) * (m31$0 = m1.m31);
	$this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0 + (m23$0 = m0.m23) * m31$0;
	$this.m31 = (m31$1 = m0.m31) * m11$0 + (m32$1 = m0.m32) * m21$0 + (m33$0 = m0.m33) * m31$0;
	$this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22) + m13$0 * (m32$0 = m1.m32);
	$this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0;
	$this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0;
	$this.m13 = m11$1 * (m13$1 = m1.m13) + m12$0 * (m23$1 = m1.m23) + m13$0 * (m33$1 = m1.m33);
	$this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1;
	$this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1;
	return $this;
};

M33.mul_0$LM33$LM33$LM33$ = M33$mul_0$LM33$LM33$LM33$;

M33.prototype.transpose$ = function () {
	var m21;
	var m31;
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


function M33$transpose_0$LM33$($this) {
	var m21;
	var m31;
	var m32;
	(m21 = $this.m21, m31 = $this.m31, m32 = $this.m32);
	$this.m21 = $this.m12;
	$this.m31 = $this.m13;
	$this.m32 = $this.m23;
	$this.m12 = m21;
	$this.m13 = m31;
	$this.m23 = m32;
	return $this;
};

M33.transpose_0$LM33$ = M33$transpose_0$LM33$;

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


function M33$transpose_0$LM33$LM33$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m12;
	$this.m31 = m.m13;
	$this.m12 = m.m21;
	$this.m22 = m.m22;
	$this.m32 = m.m23;
	$this.m13 = m.m31;
	$this.m23 = m.m32;
	$this.m33 = m.m33;
	return $this;
};

M33.transpose_0$LM33$LM33$ = M33$transpose_0$LM33$LM33$;

M33.prototype.det$ = function () {
	var m11;
	var m12;
	var m13;
	var m21;
	var m22;
	var m23;
	var m31;
	var m32;
	var m33;
	(m11 = this.m11, m12 = this.m12, m13 = this.m13);
	(m21 = this.m21, m22 = this.m22, m23 = this.m23);
	(m31 = this.m31, m32 = this.m32, m33 = this.m33);
	return m11 * (m22 * m33 - m23 * m32) + m12 * (m23 * m31 - m21 * m33) + m13 * (m21 * m32 - m22 * m31);
};


function M33$det_0$LM33$($this) {
	var m11;
	var m12;
	var m13;
	var m21;
	var m22;
	var m23;
	var m31;
	var m32;
	var m33;
	(m11 = $this.m11, m12 = $this.m12, m13 = $this.m13);
	(m21 = $this.m21, m22 = $this.m22, m23 = $this.m23);
	(m31 = $this.m31, m32 = $this.m32, m33 = $this.m33);
	return m11 * (m22 * m33 - m23 * m32) + m12 * (m23 * m31 - m21 * m33) + m13 * (m21 * m32 - m22 * m31);
};

M33.det_0$LM33$ = M33$det_0$LM33$;

M33.prototype.inverse$ = function () {
	var d;
	var invDet;
	var m11;
	var m21;
	var m31;
	var m12;
	var m22;
	var m32;
	var m13;
	var m23;
	var m33;
	d = M33$det_0$LM33$(this);
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


function M33$inverse_0$LM33$($this) {
	var d;
	var invDet;
	var m11;
	var m21;
	var m31;
	var m12;
	var m22;
	var m32;
	var m13;
	var m23;
	var m33;
	d = M33$det_0$LM33$($this);
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	(m11 = $this.m11, m21 = $this.m21, m31 = $this.m31);
	(m12 = $this.m12, m22 = $this.m22, m32 = $this.m32);
	(m13 = $this.m13, m23 = $this.m23, m33 = $this.m33);
	$this.m11 = invDet * (m22 * m33 - m23 * m32);
	$this.m21 = invDet * (m23 * m31 - m21 * m33);
	$this.m31 = invDet * (m21 * m32 - m22 * m31);
	$this.m12 = invDet * (m13 * m32 - m12 * m33);
	$this.m22 = invDet * (m11 * m33 - m13 * m31);
	$this.m32 = invDet * (m12 * m31 - m11 * m32);
	$this.m13 = invDet * (m12 * m23 - m13 * m22);
	$this.m23 = invDet * (m13 * m21 - m11 * m23);
	$this.m33 = invDet * (m11 * m22 - m12 * m21);
	return $this;
};

M33.inverse_0$LM33$ = M33$inverse_0$LM33$;

M33.prototype.setScale$N = function (s) {
	return M33$set_0$LM33$N(this, s);
};


function M33$setScale_0$LM33$N($this, s) {
	return M33$set_0$LM33$N($this, s);
};

M33.setScale_0$LM33$N = M33$setScale_0$LM33$N;

M33.prototype.setScale$NNN = function (x, y, z) {
	this.m11 = x;
	this.m22 = y;
	this.m33 = z;
	this.m21 = this.m31 = this.m12 = this.m32 = this.m13 = this.m23 = 0;
	return this;
};


function M33$setScale_0$LM33$NNN($this, x, y, z) {
	$this.m11 = x;
	$this.m22 = y;
	$this.m33 = z;
	$this.m21 = $this.m31 = $this.m12 = $this.m32 = $this.m13 = $this.m23 = 0;
	return $this;
};

M33.setScale_0$LM33$NNN = M33$setScale_0$LM33$NNN;

M33.prototype.setScale$LV3$ = function (v) {
	return M33$setScale_0$LM33$NNN(this, v.x, v.y, v.z);
};


function M33$setScale_0$LM33$LV3$($this, v) {
	return M33$setScale_0$LM33$NNN($this, v.x, v.y, v.z);
};

M33.setScale_0$LM33$LV3$ = M33$setScale_0$LM33$LV3$;

M33.prototype.setScale$AN = function (v) {
	return M33$setScale_0$LM33$NNN(this, v[0], v[1], v[2]);
};


function M33$setScale_0$LM33$AN($this, v) {
	return M33$setScale_0$LM33$NNN($this, v[0], v[1], v[2]);
};

M33.setScale_0$LM33$AN = M33$setScale_0$LM33$AN;

M33.prototype.setScale$LFloat32Array$ = function (v) {
	return M33$setScale_0$LM33$NNN(this, v[0], v[1], v[2]);
};


function M33$setScale_0$LM33$LFloat32Array$($this, v) {
	return M33$setScale_0$LM33$NNN($this, v[0], v[1], v[2]);
};

M33.setScale_0$LM33$LFloat32Array$ = M33$setScale_0$LM33$LFloat32Array$;

M33.prototype.setRotation$NNNN = function (rad, x, y, z) {
	var l;
	var il;
	var c;
	var s;
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
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


function M33$setRotation_0$LM33$NNNN($this, rad, x, y, z) {
	var l;
	var il;
	var c;
	var s;
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	$this.m11 = x * x * _c + c;
	$this.m21 = y * x * _c + z * s;
	$this.m31 = x * z * _c - y * s;
	$this.m12 = x * y * _c - z * s;
	$this.m22 = y * y * _c + c;
	$this.m32 = y * z * _c + x * s;
	$this.m13 = x * z * _c + y * s;
	$this.m23 = y * z * _c - x * s;
	$this.m33 = z * z * _c + c;
	return $this;
};

M33.setRotation_0$LM33$NNNN = M33$setRotation_0$LM33$NNNN;

M33.prototype.setRotation$NLV3$ = function (rad, a) {
	return M33$setRotation_0$LM33$NNNN(this, rad, a.x, a.y, a.z);
};


function M33$setRotation_0$LM33$NLV3$($this, rad, a) {
	return M33$setRotation_0$LM33$NNNN($this, rad, a.x, a.y, a.z);
};

M33.setRotation_0$LM33$NLV3$ = M33$setRotation_0$LM33$NLV3$;

M33.prototype.setRotation$NAN = function (rad, a) {
	return M33$setRotation_0$LM33$NNNN(this, rad, this.m11, this.m21, this.m31);
};


function M33$setRotation_0$LM33$NAN($this, rad, a) {
	return M33$setRotation_0$LM33$NNNN($this, rad, $this.m11, $this.m21, $this.m31);
};

M33.setRotation_0$LM33$NAN = M33$setRotation_0$LM33$NAN;

M33.prototype.setRotation$NLFloat32Array$ = function (rad, a) {
	return M33$setRotation_0$LM33$NNNN(this, rad, this.m11, this.m21, this.m31);
};


function M33$setRotation_0$LM33$NLFloat32Array$($this, rad, a) {
	return M33$setRotation_0$LM33$NNNN($this, rad, $this.m11, $this.m21, $this.m31);
};

M33.setRotation_0$LM33$NLFloat32Array$ = M33$setRotation_0$LM33$NLFloat32Array$;

M33.prototype.setRotateX$N = function (rad) {
	return M33$setRotation_0$LM33$NNNN(this, rad, 1, 0, 0);
};


function M33$setRotateX_0$LM33$N($this, rad) {
	return M33$setRotation_0$LM33$NNNN($this, rad, 1, 0, 0);
};

M33.setRotateX_0$LM33$N = M33$setRotateX_0$LM33$N;

M33.prototype.setRotateY$N = function (rad) {
	return M33$setRotation_0$LM33$NNNN(this, rad, 0, 1, 0);
};


function M33$setRotateY_0$LM33$N($this, rad) {
	return M33$setRotation_0$LM33$NNNN($this, rad, 0, 1, 0);
};

M33.setRotateY_0$LM33$N = M33$setRotateY_0$LM33$N;

M33.prototype.setRotateZ$N = function (rad) {
	return M33$setRotation_0$LM33$NNNN(this, rad, 0, 0, 1);
};


function M33$setRotateZ_0$LM33$N($this, rad) {
	return M33$setRotation_0$LM33$NNNN($this, rad, 0, 0, 1);
};

M33.setRotateZ_0$LM33$N = M33$setRotateZ_0$LM33$N;

M33.prototype.toString = function () {
	return "M33" + JSON.stringify([ this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33 ]);
};


function M44() {
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

function M44$0(m) {
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
	M44$set_0$LM44$LM44$(this, m);
};

function M44$1(m) {
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
	M44$set_0$LM44$AN(this, m);
};

function M44$2(m) {
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
	M44$set_0$LM44$LFloat32Array$(this, m);
};

function M44$3(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
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

function M44$4(v0, v1, v2, v3) {
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
	M44$set_0$LM44$LV4$LV4$LV4$LV4$(this, v0, v1, v2, v3);
};

function M44$5(s) {
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
	M44$set_0$LM44$N(this, s);
};

function M44$6(m, m22, m33) {
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
	M44$set_0$LM44$LM22$NN(this, m, m22, m33);
};

function M44$7(m, m33) {
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
	M44$set_0$LM44$LM33$N(this, m, m33);
};

$__jsx_extend([M44, M44$0, M44$1, M44$2, M44$3, M44$4, M44$5, M44$6, M44$7], Object);
M44.prototype.array$ = function () {
	return [ this.m11, this.m21, this.m31, this.m41, this.m12, this.m22, this.m32, this.m42, this.m13, this.m23, this.m33, this.m43, this.m14, this.m24, this.m34, this.m44 ];
};


function M44$array_0$LM44$($this) {
	return [ $this.m11, $this.m21, $this.m31, $this.m41, $this.m12, $this.m22, $this.m32, $this.m42, $this.m13, $this.m23, $this.m33, $this.m43, $this.m14, $this.m24, $this.m34, $this.m44 ];
};

M44.array_0$LM44$ = M44$array_0$LM44$;

M44.prototype.M22$ = function () {
	return new M22$7(this);
};


function M44$M22_0$LM44$($this) {
	return new M22$7($this);
};

M44.M22_0$LM44$ = M44$M22_0$LM44$;

M44.prototype.M33$N = function (m33) {
	return new M33$7(this);
};


function M44$M33_0$LM44$N($this, m33) {
	return new M33$7($this);
};

M44.M33_0$LM44$N = M44$M33_0$LM44$N;

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


function M44$set_0$LM44$LM22$NN($this, m, m33, m44) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = 0;
	$this.m41 = 0;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = 0;
	$this.m42 = 0;
	$this.m13 = 0;
	$this.m23 = 0;
	$this.m33 = m33;
	$this.m43 = 0;
	$this.m14 = 0;
	$this.m24 = 0;
	$this.m34 = 0;
	$this.m44 = m44;
	return $this;
};

M44.set_0$LM44$LM22$NN = M44$set_0$LM44$LM22$NN;

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


function M44$set_0$LM44$LM33$N($this, m, m44) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = m.m31;
	$this.m41 = 0;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = m.m32;
	$this.m42 = 0;
	$this.m13 = m.m13;
	$this.m23 = m.m23;
	$this.m33 = m.m33;
	$this.m43 = 0;
	$this.m14 = 0;
	$this.m24 = 0;
	$this.m34 = 0;
	$this.m44 = m44;
	return $this;
};

M44.set_0$LM44$LM33$N = M44$set_0$LM44$LM33$N;

M44.prototype.clone$ = function () {
	return new M44$0(this);
};


function M44$clone_0$LM44$($this) {
	return new M44$0($this);
};

M44.clone_0$LM44$ = M44$clone_0$LM44$;

M44.prototype.setZero$ = function () {
	return M44$set_0$LM44$N(this, 0);
};


function M44$setZero_0$LM44$($this) {
	return M44$set_0$LM44$N($this, 0);
};

M44.setZero_0$LM44$ = M44$setZero_0$LM44$;

M44.prototype.setIdentity$ = function () {
	return M44$set_0$LM44$N(this, 1);
};


function M44$setIdentity_0$LM44$($this) {
	return M44$set_0$LM44$N($this, 1);
};

M44.setIdentity_0$LM44$ = M44$setIdentity_0$LM44$;

function M44$zero$() {
	return M44$set_0$LM44$N(new M44(), 0);
};

M44.zero$ = M44$zero$;

function M44$identity$() {
	return M44$set_0$LM44$N(new M44(), 1);
};

M44.identity$ = M44$identity$;

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


function M44$set_0$LM44$NNNNNNNNNNNNNNNN($this, m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
	$this.m11 = m11;
	$this.m21 = m21;
	$this.m31 = m31;
	$this.m41 = m41;
	$this.m12 = m12;
	$this.m22 = m22;
	$this.m32 = m32;
	$this.m42 = m42;
	$this.m13 = m13;
	$this.m23 = m23;
	$this.m33 = m33;
	$this.m43 = m43;
	$this.m14 = m14;
	$this.m24 = m24;
	$this.m34 = m34;
	$this.m44 = m44;
	return $this;
};

M44.set_0$LM44$NNNNNNNNNNNNNNNN = M44$set_0$LM44$NNNNNNNNNNNNNNNN;

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


function M44$set_0$LM44$LV4$LV4$LV4$LV4$($this, v1, v2, v3, v4) {
	$this.m11 = v1.x;
	$this.m21 = v1.y;
	$this.m31 = v1.z;
	$this.m41 = v1.w;
	$this.m12 = v2.x;
	$this.m22 = v2.y;
	$this.m32 = v2.z;
	$this.m42 = v2.w;
	$this.m13 = v3.x;
	$this.m23 = v3.y;
	$this.m33 = v3.z;
	$this.m43 = v3.w;
	$this.m14 = v4.x;
	$this.m24 = v4.y;
	$this.m34 = v4.z;
	$this.m44 = v4.w;
	return $this;
};

M44.set_0$LM44$LV4$LV4$LV4$LV4$ = M44$set_0$LM44$LV4$LV4$LV4$LV4$;

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


function M44$set_0$LM44$LM44$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m21;
	$this.m31 = m.m31;
	$this.m41 = m.m41;
	$this.m12 = m.m12;
	$this.m22 = m.m22;
	$this.m32 = m.m32;
	$this.m42 = m.m42;
	$this.m13 = m.m13;
	$this.m23 = m.m23;
	$this.m33 = m.m33;
	$this.m43 = m.m43;
	$this.m14 = m.m14;
	$this.m24 = m.m24;
	$this.m34 = m.m34;
	$this.m44 = m.m44;
	return $this;
};

M44.set_0$LM44$LM44$ = M44$set_0$LM44$LM44$;

M44.prototype.set$AN = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m31 = m[2];
	this.m41 = m[3];
	this.m12 = m[4];
	this.m22 = m[5];
	this.m32 = m[6];
	this.m42 = m[7];
	this.m13 = m[8];
	this.m23 = m[9];
	this.m33 = m[10];
	this.m43 = m[11];
	this.m14 = m[12];
	this.m24 = m[13];
	this.m34 = m[14];
	this.m44 = m[15];
	return this;
};


function M44$set_0$LM44$AN($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m31 = m[2];
	$this.m41 = m[3];
	$this.m12 = m[4];
	$this.m22 = m[5];
	$this.m32 = m[6];
	$this.m42 = m[7];
	$this.m13 = m[8];
	$this.m23 = m[9];
	$this.m33 = m[10];
	$this.m43 = m[11];
	$this.m14 = m[12];
	$this.m24 = m[13];
	$this.m34 = m[14];
	$this.m44 = m[15];
	return $this;
};

M44.set_0$LM44$AN = M44$set_0$LM44$AN;

M44.prototype.set$LFloat32Array$ = function (m) {
	this.m11 = m[0];
	this.m21 = m[1];
	this.m31 = m[2];
	this.m41 = m[3];
	this.m12 = m[4];
	this.m22 = m[5];
	this.m32 = m[6];
	this.m42 = m[7];
	this.m13 = m[8];
	this.m23 = m[9];
	this.m33 = m[10];
	this.m43 = m[11];
	this.m14 = m[12];
	this.m24 = m[13];
	this.m34 = m[14];
	this.m44 = m[15];
	return this;
};


function M44$set_0$LM44$LFloat32Array$($this, m) {
	$this.m11 = m[0];
	$this.m21 = m[1];
	$this.m31 = m[2];
	$this.m41 = m[3];
	$this.m12 = m[4];
	$this.m22 = m[5];
	$this.m32 = m[6];
	$this.m42 = m[7];
	$this.m13 = m[8];
	$this.m23 = m[9];
	$this.m33 = m[10];
	$this.m43 = m[11];
	$this.m14 = m[12];
	$this.m24 = m[13];
	$this.m34 = m[14];
	$this.m44 = m[15];
	return $this;
};

M44.set_0$LM44$LFloat32Array$ = M44$set_0$LM44$LFloat32Array$;

M44.prototype.set$N = function (s) {
	this.m11 = this.m22 = this.m33 = this.m44 = s;
	this.m21 = this.m31 = this.m41 = this.m12 = this.m32 = this.m42 = this.m13 = this.m23 = this.m43 = this.m14 = this.m24 = this.m34 = 0;
	return this;
};


function M44$set_0$LM44$N($this, s) {
	$this.m11 = $this.m22 = $this.m33 = $this.m44 = s;
	$this.m21 = $this.m31 = $this.m41 = $this.m12 = $this.m32 = $this.m42 = $this.m13 = $this.m23 = $this.m43 = $this.m14 = $this.m24 = $this.m34 = 0;
	return $this;
};

M44.set_0$LM44$N = M44$set_0$LM44$N;

M44.prototype.equals$LM44$ = function (m) {
	return M44$equals_0$LM44$LM44$N(this, m, 0.000001);
};


function M44$equals_0$LM44$LM44$($this, m) {
	return M44$equals_0$LM44$LM44$N($this, m, 0.000001);
};

M44.equals_0$LM44$LM44$ = M44$equals_0$LM44$LM44$;

M44.prototype.equals$LM44$N = function (m, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	var abs$x$4;
	var abs$x$5;
	var abs$x$6;
	var abs$x$7;
	var abs$x$8;
	var abs$x$9;
	var abs$x$10;
	var abs$x$11;
	var abs$x$12;
	var abs$x$13;
	var abs$x$14;
	var abs$x$15;
	return ((abs$x$0 = this.m11 - m.m11, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) >= eps ? false : (abs$x$1 = this.m21 - m.m21, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) >= eps ? false : (abs$x$2 = this.m31 - m.m31, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) >= eps ? false : (abs$x$3 = this.m41 - m.m41, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) >= eps ? false : (abs$x$4 = this.m12 - m.m12, abs$x$4 >= 0 ? abs$x$4 : - abs$x$4) >= eps ? false : (abs$x$5 = this.m22 - m.m22, abs$x$5 >= 0 ? abs$x$5 : - abs$x$5) >= eps ? false : (abs$x$6 = this.m32 - m.m32, abs$x$6 >= 0 ? abs$x$6 : - abs$x$6) >= eps ? false : (abs$x$7 = this.m42 - m.m42, abs$x$7 >= 0 ? abs$x$7 : - abs$x$7) >= eps ? false : (abs$x$8 = this.m13 - m.m13, abs$x$8 >= 0 ? abs$x$8 : - abs$x$8) >= eps ? false : (abs$x$9 = this.m23 - m.m23, abs$x$9 >= 0 ? abs$x$9 : - abs$x$9) >= eps ? false : (abs$x$10 = this.m33 - m.m33, abs$x$10 >= 0 ? abs$x$10 : - abs$x$10) >= eps ? false : (abs$x$11 = this.m43 - m.m43, abs$x$11 >= 0 ? abs$x$11 : - abs$x$11) >= eps ? false : (abs$x$12 = this.m14 - m.m14, abs$x$12 >= 0 ? abs$x$12 : - abs$x$12) >= eps ? false : (abs$x$13 = this.m24 - m.m24, abs$x$13 >= 0 ? abs$x$13 : - abs$x$13) >= eps ? false : (abs$x$14 = this.m34 - m.m34, abs$x$14 >= 0 ? abs$x$14 : - abs$x$14) >= eps ? false : (abs$x$15 = this.m44 - m.m44, abs$x$15 >= 0 ? abs$x$15 : - abs$x$15) >= eps ? false : true);
};


function M44$equals_0$LM44$LM44$N($this, m, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	var abs$x$4;
	var abs$x$5;
	var abs$x$6;
	var abs$x$7;
	var abs$x$8;
	var abs$x$9;
	var abs$x$10;
	var abs$x$11;
	var abs$x$12;
	var abs$x$13;
	var abs$x$14;
	var abs$x$15;
	return ((abs$x$0 = $this.m11 - m.m11, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) >= eps ? false : (abs$x$1 = $this.m21 - m.m21, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) >= eps ? false : (abs$x$2 = $this.m31 - m.m31, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) >= eps ? false : (abs$x$3 = $this.m41 - m.m41, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) >= eps ? false : (abs$x$4 = $this.m12 - m.m12, abs$x$4 >= 0 ? abs$x$4 : - abs$x$4) >= eps ? false : (abs$x$5 = $this.m22 - m.m22, abs$x$5 >= 0 ? abs$x$5 : - abs$x$5) >= eps ? false : (abs$x$6 = $this.m32 - m.m32, abs$x$6 >= 0 ? abs$x$6 : - abs$x$6) >= eps ? false : (abs$x$7 = $this.m42 - m.m42, abs$x$7 >= 0 ? abs$x$7 : - abs$x$7) >= eps ? false : (abs$x$8 = $this.m13 - m.m13, abs$x$8 >= 0 ? abs$x$8 : - abs$x$8) >= eps ? false : (abs$x$9 = $this.m23 - m.m23, abs$x$9 >= 0 ? abs$x$9 : - abs$x$9) >= eps ? false : (abs$x$10 = $this.m33 - m.m33, abs$x$10 >= 0 ? abs$x$10 : - abs$x$10) >= eps ? false : (abs$x$11 = $this.m43 - m.m43, abs$x$11 >= 0 ? abs$x$11 : - abs$x$11) >= eps ? false : (abs$x$12 = $this.m14 - m.m14, abs$x$12 >= 0 ? abs$x$12 : - abs$x$12) >= eps ? false : (abs$x$13 = $this.m24 - m.m24, abs$x$13 >= 0 ? abs$x$13 : - abs$x$13) >= eps ? false : (abs$x$14 = $this.m34 - m.m34, abs$x$14 >= 0 ? abs$x$14 : - abs$x$14) >= eps ? false : (abs$x$15 = $this.m44 - m.m44, abs$x$15 >= 0 ? abs$x$15 : - abs$x$15) >= eps ? false : true);
};

M44.equals_0$LM44$LM44$N = M44$equals_0$LM44$LM44$N;

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


function M44$add_0$LM44$LM44$($this, m) {
	$this.m11 += m.m11;
	$this.m21 += m.m21;
	$this.m31 += m.m31;
	$this.m41 += m.m41;
	$this.m12 += m.m12;
	$this.m22 += m.m22;
	$this.m32 += m.m32;
	$this.m42 += m.m42;
	$this.m13 += m.m13;
	$this.m23 += m.m23;
	$this.m33 += m.m33;
	$this.m43 += m.m43;
	$this.m14 += m.m14;
	$this.m24 += m.m24;
	$this.m34 += m.m34;
	$this.m44 += m.m44;
	return $this;
};

M44.add_0$LM44$LM44$ = M44$add_0$LM44$LM44$;

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


function M44$sub_0$LM44$LM44$($this, m) {
	$this.m11 -= m.m11;
	$this.m21 -= m.m21;
	$this.m31 -= m.m31;
	$this.m41 -= m.m41;
	$this.m12 -= m.m12;
	$this.m22 -= m.m22;
	$this.m32 -= m.m32;
	$this.m42 -= m.m42;
	$this.m13 -= m.m13;
	$this.m23 -= m.m23;
	$this.m33 -= m.m33;
	$this.m43 -= m.m43;
	$this.m14 -= m.m14;
	$this.m24 -= m.m24;
	$this.m34 -= m.m34;
	$this.m44 -= m.m44;
	return $this;
};

M44.sub_0$LM44$LM44$ = M44$sub_0$LM44$LM44$;

M44.prototype.mul$LM44$ = function (m) {
	return M44$mul_0$LM44$LM44$LM44$(this, new M44$0(this), m);
};


function M44$mul_0$LM44$LM44$($this, m) {
	return M44$mul_0$LM44$LM44$LM44$($this, new M44$0($this), m);
};

M44.mul_0$LM44$LM44$ = M44$mul_0$LM44$LM44$;

M44.prototype.mul$LM44$LM44$ = function (m0, m1) {
	var m11$0;
	var m21$0;
	var m31$0;
	var m41$0;
	var m11$1;
	var m12$0;
	var m13$0;
	var m14$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	var m23$0;
	var m32$0;
	var m24$0;
	var m42$0;
	var m31$1;
	var m32$1;
	var m33$0;
	var m34$0;
	var m41$1;
	var m42$1;
	var m43$0;
	var m44$0;
	var m13$1;
	var m23$1;
	var m33$1;
	var m43$1;
	var m14$1;
	var m24$1;
	var m34$1;
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


function M44$mul_0$LM44$LM44$LM44$($this, m0, m1) {
	var m11$0;
	var m21$0;
	var m31$0;
	var m41$0;
	var m11$1;
	var m12$0;
	var m13$0;
	var m14$0;
	var m21$1;
	var m12$1;
	var m22$0;
	var m22$1;
	var m23$0;
	var m32$0;
	var m24$0;
	var m42$0;
	var m31$1;
	var m32$1;
	var m33$0;
	var m34$0;
	var m41$1;
	var m42$1;
	var m43$0;
	var m44$0;
	var m13$1;
	var m23$1;
	var m33$1;
	var m43$1;
	var m14$1;
	var m24$1;
	var m34$1;
	var m44$1;
	$this.m11 = (m11$1 = m0.m11) * (m11$0 = m1.m11) + (m12$0 = m0.m12) * (m21$0 = m1.m21) + (m13$0 = m0.m13) * (m31$0 = m1.m31) + (m14$0 = m0.m14) * (m41$0 = m1.m41);
	$this.m21 = (m21$1 = m0.m21) * m11$0 + (m22$0 = m0.m22) * m21$0 + (m23$0 = m0.m23) * m31$0 + (m24$0 = m0.m24) * m41$0;
	$this.m31 = (m31$1 = m0.m31) * m11$0 + (m32$1 = m0.m32) * m21$0 + (m33$0 = m0.m33) * m31$0 + (m34$0 = m0.m34) * m41$0;
	$this.m41 = (m41$1 = m0.m41) * m11$0 + (m42$1 = m0.m42) * m21$0 + (m43$0 = m0.m43) * m31$0 + (m44$0 = m0.m44) * m41$0;
	$this.m12 = m11$1 * (m12$1 = m1.m12) + m12$0 * (m22$1 = m1.m22) + m13$0 * (m32$0 = m1.m32) + m14$0 * (m42$0 = m1.m42);
	$this.m22 = m21$1 * m12$1 + m22$0 * m22$1 + m23$0 * m32$0 + m24$0 * m42$0;
	$this.m32 = m31$1 * m12$1 + m32$1 * m22$1 + m33$0 * m32$0 + m34$0 * m42$0;
	$this.m42 = m41$1 * m12$1 + m42$1 * m22$1 + m43$0 * m32$0 + m44$0 * m42$0;
	$this.m13 = m11$1 * (m13$1 = m1.m13) + m12$0 * (m23$1 = m1.m23) + m13$0 * (m33$1 = m1.m33) + m14$0 * (m43$1 = m1.m43);
	$this.m23 = m21$1 * m13$1 + m22$0 * m23$1 + m23$0 * m33$1 + m24$0 * m43$1;
	$this.m33 = m31$1 * m13$1 + m32$1 * m23$1 + m33$0 * m33$1 + m34$0 * m43$1;
	$this.m43 = m41$1 * m13$1 + m42$1 * m23$1 + m43$0 * m33$1 + m44$0 * m43$1;
	$this.m14 = m11$1 * (m14$1 = m1.m14) + m12$0 * (m24$1 = m1.m24) + m13$0 * (m34$1 = m1.m34) + m14$0 * (m44$1 = m1.m44);
	$this.m24 = m21$1 * m14$1 + m22$0 * m24$1 + m23$0 * m34$1 + m24$0 * m44$1;
	$this.m34 = m31$1 * m14$1 + m32$1 * m24$1 + m33$0 * m34$1 + m34$0 * m44$1;
	$this.m44 = m41$1 * m14$1 + m42$1 * m24$1 + m43$0 * m34$1 + m44$0 * m44$1;
	return $this;
};

M44.mul_0$LM44$LM44$LM44$ = M44$mul_0$LM44$LM44$LM44$;

M44.prototype.transpose$ = function () {
	var m21;
	var m31;
	var m41;
	var m32;
	var m42;
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


function M44$transpose_0$LM44$($this) {
	var m21;
	var m31;
	var m41;
	var m32;
	var m42;
	var m43;
	(m21 = $this.m21, m31 = $this.m31, m41 = $this.m41, m32 = $this.m32, m42 = $this.m42, m43 = $this.m43);
	$this.m21 = $this.m12;
	$this.m31 = $this.m13;
	$this.m41 = $this.m14;
	$this.m12 = m21;
	$this.m32 = $this.m23;
	$this.m42 = $this.m24;
	$this.m13 = m31;
	$this.m23 = m32;
	$this.m43 = $this.m34;
	$this.m14 = m41;
	$this.m24 = m42;
	$this.m34 = m43;
	return $this;
};

M44.transpose_0$LM44$ = M44$transpose_0$LM44$;

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


function M44$transpose_0$LM44$LM44$($this, m) {
	$this.m11 = m.m11;
	$this.m21 = m.m12;
	$this.m31 = m.m13;
	$this.m41 = m.m14;
	$this.m12 = m.m21;
	$this.m22 = m.m22;
	$this.m32 = m.m23;
	$this.m42 = m.m24;
	$this.m13 = m.m31;
	$this.m23 = m.m32;
	$this.m33 = m.m33;
	$this.m43 = m.m34;
	$this.m14 = m.m41;
	$this.m24 = m.m42;
	$this.m34 = m.m43;
	$this.m44 = m.m44;
	return $this;
};

M44.transpose_0$LM44$LM44$ = M44$transpose_0$LM44$LM44$;

M44.prototype.det$ = function () {
	var m11;
	var m21;
	var m31;
	var m41;
	var m12;
	var m22;
	var m32;
	var m42;
	var m13;
	var m23;
	var m33;
	var m43;
	var m14;
	var m24;
	var m34;
	var m44;
	(m11 = this.m11, m21 = this.m21, m31 = this.m31, m41 = this.m41);
	(m12 = this.m12, m22 = this.m22, m32 = this.m32, m42 = this.m42);
	(m13 = this.m13, m23 = this.m23, m33 = this.m33, m43 = this.m43);
	(m14 = this.m14, m24 = this.m24, m34 = this.m34, m44 = this.m44);
	return m14 * m23 * m32 * m41 - m13 * m24 * m32 * m41 - m14 * m22 * m33 * m41 + m12 * m24 * m33 * m41 + m13 * m22 * m34 * m41 - m12 * m23 * m34 * m41 - m14 * m23 * m31 * m42 + m13 * m24 * m31 * m42 + m14 * m21 * m33 * m42 - m11 * m24 * m33 * m42 - m13 * m21 * m34 * m42 + m11 * m23 * m34 * m42 + m14 * m22 * m31 * m43 - m12 * m24 * m31 * m43 - m14 * m21 * m32 * m43 + m11 * m24 * m32 * m43 + m12 * m21 * m34 * m43 - m11 * m22 * m34 * m43 - m13 * m22 * m31 * m44 + m12 * m23 * m31 * m44 + m13 * m21 * m32 * m44 - m11 * m23 * m32 * m44 - m12 * m21 * m33 * m44 + m11 * m22 * m33 * m44;
};


function M44$det_0$LM44$($this) {
	var m11;
	var m21;
	var m31;
	var m41;
	var m12;
	var m22;
	var m32;
	var m42;
	var m13;
	var m23;
	var m33;
	var m43;
	var m14;
	var m24;
	var m34;
	var m44;
	(m11 = $this.m11, m21 = $this.m21, m31 = $this.m31, m41 = $this.m41);
	(m12 = $this.m12, m22 = $this.m22, m32 = $this.m32, m42 = $this.m42);
	(m13 = $this.m13, m23 = $this.m23, m33 = $this.m33, m43 = $this.m43);
	(m14 = $this.m14, m24 = $this.m24, m34 = $this.m34, m44 = $this.m44);
	return m14 * m23 * m32 * m41 - m13 * m24 * m32 * m41 - m14 * m22 * m33 * m41 + m12 * m24 * m33 * m41 + m13 * m22 * m34 * m41 - m12 * m23 * m34 * m41 - m14 * m23 * m31 * m42 + m13 * m24 * m31 * m42 + m14 * m21 * m33 * m42 - m11 * m24 * m33 * m42 - m13 * m21 * m34 * m42 + m11 * m23 * m34 * m42 + m14 * m22 * m31 * m43 - m12 * m24 * m31 * m43 - m14 * m21 * m32 * m43 + m11 * m24 * m32 * m43 + m12 * m21 * m34 * m43 - m11 * m22 * m34 * m43 - m13 * m22 * m31 * m44 + m12 * m23 * m31 * m44 + m13 * m21 * m32 * m44 - m11 * m23 * m32 * m44 - m12 * m21 * m33 * m44 + m11 * m22 * m33 * m44;
};

M44.det_0$LM44$ = M44$det_0$LM44$;

M44.prototype.inverse$ = function () {
	var m11;
	var m21;
	var m31;
	var m41;
	var m12;
	var m22;
	var m32;
	var m42;
	var m13;
	var m23;
	var m33;
	var m43;
	var m14;
	var m24;
	var m34;
	var m44;
	var b00;
	var b01;
	var b02;
	var b03;
	var b04;
	var b05;
	var b06;
	var b07;
	var b08;
	var b09;
	var b10;
	var b11;
	var d;
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


function M44$inverse_0$LM44$($this) {
	var m11;
	var m21;
	var m31;
	var m41;
	var m12;
	var m22;
	var m32;
	var m42;
	var m13;
	var m23;
	var m33;
	var m43;
	var m14;
	var m24;
	var m34;
	var m44;
	var b00;
	var b01;
	var b02;
	var b03;
	var b04;
	var b05;
	var b06;
	var b07;
	var b08;
	var b09;
	var b10;
	var b11;
	var d;
	var invDet;
	(m11 = $this.m11, m21 = $this.m21, m31 = $this.m31, m41 = $this.m41, m12 = $this.m12, m22 = $this.m22, m32 = $this.m32, m42 = $this.m42, m13 = $this.m13, m23 = $this.m23, m33 = $this.m33, m43 = $this.m43, m14 = $this.m14, m24 = $this.m24, m34 = $this.m34, m44 = $this.m44);
	(b00 = m11 * m22 - m21 * m12, b01 = m11 * m32 - m31 * m12, b02 = m11 * m42 - m41 * m12, b03 = m21 * m32 - m31 * m22, b04 = m21 * m42 - m41 * m22, b05 = m31 * m42 - m41 * m32, b06 = m13 * m24 - m23 * m14, b07 = m13 * m34 - m33 * m14, b08 = m13 * m44 - m43 * m14, b09 = m23 * m34 - m33 * m24, b10 = m23 * m44 - m43 * m24, b11 = m33 * m44 - m43 * m34);
	d = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (d === 0) {
		return null;
	}
	invDet = 1 / d;
	$this.m11 = (m22 * b11 - m32 * b10 + m42 * b09) * invDet;
	$this.m21 = (- m21 * b11 + m31 * b10 - m41 * b09) * invDet;
	$this.m31 = (m24 * b05 - m34 * b04 + m44 * b03) * invDet;
	$this.m41 = (- m23 * b05 + m33 * b04 - m43 * b03) * invDet;
	$this.m12 = (- m12 * b11 + m32 * b08 - m42 * b07) * invDet;
	$this.m22 = (m11 * b11 - m31 * b08 + m41 * b07) * invDet;
	$this.m32 = (- m14 * b05 + m34 * b02 - m44 * b01) * invDet;
	$this.m42 = (m13 * b05 - m33 * b02 + m43 * b01) * invDet;
	$this.m13 = (m12 * b10 - m22 * b08 + m42 * b06) * invDet;
	$this.m23 = (- m11 * b10 + m21 * b08 - m41 * b06) * invDet;
	$this.m33 = (m14 * b04 - m24 * b02 + m44 * b00) * invDet;
	$this.m43 = (- m13 * b04 + m23 * b02 - m43 * b00) * invDet;
	$this.m14 = (- m12 * b09 + m22 * b07 - m32 * b06) * invDet;
	$this.m24 = (m11 * b09 - m21 * b07 + m31 * b06) * invDet;
	$this.m34 = (- m14 * b03 + m24 * b01 - m34 * b00) * invDet;
	$this.m44 = (m13 * b03 - m23 * b01 + m33 * b00) * invDet;
	return $this;
};

M44.inverse_0$LM44$ = M44$inverse_0$LM44$;

M44.prototype.setTranslation$NNN = function (x, y, z) {
	M44$set_0$LM44$N(this, 1);
	this.m14 = x;
	this.m24 = y;
	this.m34 = z;
	return this;
};


function M44$setTranslation_0$LM44$NNN($this, x, y, z) {
	M44$set_0$LM44$N($this, 1);
	$this.m14 = x;
	$this.m24 = y;
	$this.m34 = z;
	return $this;
};

M44.setTranslation_0$LM44$NNN = M44$setTranslation_0$LM44$NNN;

M44.prototype.setTranslation$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	M44$set_0$LM44$N(this, 1);
	this.m14 = x$0;
	this.m24 = y$0;
	this.m34 = z$0;
	return this;
};


function M44$setTranslation_0$LM44$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	M44$set_0$LM44$N($this, 1);
	$this.m14 = x$0;
	$this.m24 = y$0;
	$this.m34 = z$0;
	return $this;
};

M44.setTranslation_0$LM44$LV3$ = M44$setTranslation_0$LM44$LV3$;

M44.prototype.setTranslation$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set_0$LM44$N(this, 1);
	this.m14 = x$0;
	this.m24 = y$0;
	this.m34 = z$0;
	return this;
};


function M44$setTranslation_0$LM44$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set_0$LM44$N($this, 1);
	$this.m14 = x$0;
	$this.m24 = y$0;
	$this.m34 = z$0;
	return $this;
};

M44.setTranslation_0$LM44$AN = M44$setTranslation_0$LM44$AN;

M44.prototype.setTranslation$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set_0$LM44$N(this, 1);
	this.m14 = x$0;
	this.m24 = y$0;
	this.m34 = z$0;
	return this;
};


function M44$setTranslation_0$LM44$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set_0$LM44$N($this, 1);
	$this.m14 = x$0;
	$this.m24 = y$0;
	$this.m34 = z$0;
	return $this;
};

M44.setTranslation_0$LM44$LFloat32Array$ = M44$setTranslation_0$LM44$LFloat32Array$;

function M44$translation$NNN(x, y, z) {
	var this$0;
	this$0 = new M44();
	M44$set_0$LM44$N(this$0, 1);
	this$0.m14 = x;
	this$0.m24 = y;
	this$0.m34 = z;
	return this$0;
};

M44.translation$NNN = M44$translation$NNN;

function M44$translation$LV3$(v) {
	var this$0;
	var x$0$0;
	var y$0$0;
	var z$0$0;
	this$0 = new M44();
	x$0$0 = v.x;
	y$0$0 = v.y;
	z$0$0 = v.z;
	M44$set_0$LM44$N(this$0, 1);
	this$0.m14 = x$0$0;
	this$0.m24 = y$0$0;
	this$0.m34 = z$0$0;
	return this$0;
};

M44.translation$LV3$ = M44$translation$LV3$;

function M44$translation$AN(v) {
	return M44$setTranslation_0$LM44$AN(new M44(), v);
};

M44.translation$AN = M44$translation$AN;

function M44$translation$LFloat32Array$(v) {
	return M44$setTranslation_0$LM44$LFloat32Array$(new M44(), v);
};

M44.translation$LFloat32Array$ = M44$translation$LFloat32Array$;

M44.prototype.setScale$N = function (s) {
	M44$set_0$LM44$N(this, 0);
	this.m11 = s;
	this.m22 = s;
	this.m33 = s;
	this.m44 = 1;
	return this;
};


function M44$setScale_0$LM44$N($this, s) {
	M44$set_0$LM44$N($this, 0);
	$this.m11 = s;
	$this.m22 = s;
	$this.m33 = s;
	$this.m44 = 1;
	return $this;
};

M44.setScale_0$LM44$N = M44$setScale_0$LM44$N;

M44.prototype.setScale$NNN = function (x, y, z) {
	M44$set_0$LM44$N(this, 0);
	this.m11 = x;
	this.m22 = y;
	this.m33 = z;
	this.m44 = 1;
	return this;
};


function M44$setScale_0$LM44$NNN($this, x, y, z) {
	M44$set_0$LM44$N($this, 0);
	$this.m11 = x;
	$this.m22 = y;
	$this.m33 = z;
	$this.m44 = 1;
	return $this;
};

M44.setScale_0$LM44$NNN = M44$setScale_0$LM44$NNN;

M44.prototype.setScale$LV3$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	M44$set_0$LM44$N(this, 0);
	this.m11 = x$0;
	this.m22 = y$0;
	this.m33 = z$0;
	this.m44 = 1;
	return this;
};


function M44$setScale_0$LM44$LV3$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v.x;
	y$0 = v.y;
	z$0 = v.z;
	M44$set_0$LM44$N($this, 0);
	$this.m11 = x$0;
	$this.m22 = y$0;
	$this.m33 = z$0;
	$this.m44 = 1;
	return $this;
};

M44.setScale_0$LM44$LV3$ = M44$setScale_0$LM44$LV3$;

M44.prototype.setScale$AN = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set_0$LM44$N(this, 0);
	this.m11 = x$0;
	this.m22 = y$0;
	this.m33 = z$0;
	this.m44 = 1;
	return this;
};


function M44$setScale_0$LM44$AN($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set_0$LM44$N($this, 0);
	$this.m11 = x$0;
	$this.m22 = y$0;
	$this.m33 = z$0;
	$this.m44 = 1;
	return $this;
};

M44.setScale_0$LM44$AN = M44$setScale_0$LM44$AN;

M44.prototype.setScale$LFloat32Array$ = function (v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set_0$LM44$N(this, 0);
	this.m11 = x$0;
	this.m22 = y$0;
	this.m33 = z$0;
	this.m44 = 1;
	return this;
};


function M44$setScale_0$LM44$LFloat32Array$($this, v) {
	var x$0;
	var y$0;
	var z$0;
	x$0 = v[0];
	y$0 = v[1];
	z$0 = v[2];
	M44$set_0$LM44$N($this, 0);
	$this.m11 = x$0;
	$this.m22 = y$0;
	$this.m33 = z$0;
	$this.m44 = 1;
	return $this;
};

M44.setScale_0$LM44$LFloat32Array$ = M44$setScale_0$LM44$LFloat32Array$;

function M44$scale$NNN(x, y, z) {
	var this$0;
	this$0 = new M44();
	M44$set_0$LM44$N(this$0, 0);
	this$0.m11 = x;
	this$0.m22 = y;
	this$0.m33 = z;
	this$0.m44 = 1;
	return this$0;
};

M44.scale$NNN = M44$scale$NNN;

function M44$scale$LV3$(v) {
	return M44$setScale_0$LM44$LV3$(new M44(), v);
};

M44.scale$LV3$ = M44$scale$LV3$;

function M44$scale$AN(v) {
	return M44$setScale_0$LM44$AN(new M44(), v);
};

M44.scale$AN = M44$scale$AN;

function M44$scale$LFloat32Array$(v) {
	return M44$setScale_0$LM44$LFloat32Array$(new M44(), v);
};

M44.scale$LFloat32Array$ = M44$scale$LFloat32Array$;

M44.prototype.setRotation$NNNN = function (rad, x, y, z) {
	var l;
	var il;
	var c;
	var s;
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	M44$array_0$LM44$(this);
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


function M44$setRotation_0$LM44$NNNN($this, rad, x, y, z) {
	var l;
	var il;
	var c;
	var s;
	var _c;
	l = Math.sqrt(x * x + y * y + z * z);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	x *= il;
	y *= il;
	z *= il;
	M44$array_0$LM44$($this);
	(c = Math.cos(rad), s = Math.sin(rad));
	_c = 1 - c;
	$this.m11 = x * x * _c + c;
	$this.m21 = y * x * _c + z * s;
	$this.m31 = x * z * _c - y * s;
	$this.m12 = x * y * _c - z * s;
	$this.m22 = y * y * _c + c;
	$this.m32 = y * z * _c + x * s;
	$this.m13 = x * z * _c + y * s;
	$this.m23 = y * z * _c - x * s;
	$this.m33 = z * z * _c + c;
	$this.m41 = $this.m42 = $this.m43 = $this.m14 = $this.m24 = $this.m34 = 0;
	$this.m44 = 1;
	return $this;
};

M44.setRotation_0$LM44$NNNN = M44$setRotation_0$LM44$NNNN;

M44.prototype.setRotation$NLV3$ = function (rad, a) {
	return M44$setRotation_0$LM44$NNNN(this, rad, a.x, a.y, a.z);
};


function M44$setRotation_0$LM44$NLV3$($this, rad, a) {
	return M44$setRotation_0$LM44$NNNN($this, rad, a.x, a.y, a.z);
};

M44.setRotation_0$LM44$NLV3$ = M44$setRotation_0$LM44$NLV3$;

M44.prototype.setRotation$NAN = function (rad, a) {
	return M44$setRotation_0$LM44$NNNN(this, rad, this.m11, this.m21, this.m31);
};


function M44$setRotation_0$LM44$NAN($this, rad, a) {
	return M44$setRotation_0$LM44$NNNN($this, rad, $this.m11, $this.m21, $this.m31);
};

M44.setRotation_0$LM44$NAN = M44$setRotation_0$LM44$NAN;

M44.prototype.setRotation$NLFloat32Array$ = function (rad, a) {
	return M44$setRotation_0$LM44$NNNN(this, rad, this.m11, this.m21, this.m31);
};


function M44$setRotation_0$LM44$NLFloat32Array$($this, rad, a) {
	return M44$setRotation_0$LM44$NNNN($this, rad, $this.m11, $this.m21, $this.m31);
};

M44.setRotation_0$LM44$NLFloat32Array$ = M44$setRotation_0$LM44$NLFloat32Array$;

function M44$rotation$NNNN(rad, ax, ay, az) {
	return M44$setRotation_0$LM44$NNNN(new M44(), rad, ax, ay, az);
};

M44.rotation$NNNN = M44$rotation$NNNN;

function M44$rotation$NLV3$(rad, axis) {
	return M44$setRotation_0$LM44$NNNN(new M44(), rad, axis.x, axis.y, axis.z);
};

M44.rotation$NLV3$ = M44$rotation$NLV3$;

function M44$rotation$NAN(rad, axis) {
	var setRotation$this$0;
	return (setRotation$this$0 = new M44(), M44$setRotation_0$LM44$NNNN(setRotation$this$0, rad, setRotation$this$0.m11, setRotation$this$0.m21, setRotation$this$0.m31));
};

M44.rotation$NAN = M44$rotation$NAN;

function M44$rotation$NLFloat32Array$(rad, axis) {
	var setRotation$this$0;
	return (setRotation$this$0 = new M44(), M44$setRotation_0$LM44$NNNN(setRotation$this$0, rad, setRotation$this$0.m11, setRotation$this$0.m21, setRotation$this$0.m31));
};

M44.rotation$NLFloat32Array$ = M44$rotation$NLFloat32Array$;

M44.prototype.setRotationX$N = function (rad) {
	return M44$setRotation_0$LM44$NNNN(this, rad, 1, 0, 0);
};


function M44$setRotationX_0$LM44$N($this, rad) {
	return M44$setRotation_0$LM44$NNNN($this, rad, 1, 0, 0);
};

M44.setRotationX_0$LM44$N = M44$setRotationX_0$LM44$N;

M44.prototype.setRotationY$N = function (rad) {
	return M44$setRotation_0$LM44$NNNN(this, rad, 0, 1, 0);
};


function M44$setRotationY_0$LM44$N($this, rad) {
	return M44$setRotation_0$LM44$NNNN($this, rad, 0, 1, 0);
};

M44.setRotationY_0$LM44$N = M44$setRotationY_0$LM44$N;

M44.prototype.setRotationZ$N = function (rad) {
	return M44$setRotation_0$LM44$NNNN(this, rad, 0, 0, 1);
};


function M44$setRotationZ_0$LM44$N($this, rad) {
	return M44$setRotation_0$LM44$NNNN($this, rad, 0, 0, 1);
};

M44.setRotationZ_0$LM44$N = M44$setRotationZ_0$LM44$N;

function M44$rotationX$N(rad) {
	return M44$setRotation_0$LM44$NNNN(new M44(), rad, 1, 0, 0);
};

M44.rotationX$N = M44$rotationX$N;

function M44$rotationY$N(rad) {
	return M44$setRotation_0$LM44$NNNN(new M44(), rad, 0, 1, 0);
};

M44.rotationY$N = M44$rotationY$N;

function M44$rotationZ$N(rad) {
	return M44$setRotation_0$LM44$NNNN(new M44(), rad, 0, 0, 1);
};

M44.rotationZ$N = M44$rotationZ$N;

M44.prototype.setFrustum$NNNNNN = function (l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	M44$array_0$LM44$(this);
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


function M44$setFrustum_0$LM44$NNNNNN($this, l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	M44$array_0$LM44$($this);
	(rl = r - l, tb = t - b, fn = f - n);
	$this.m11 = 2 * n / rl;
	$this.m22 = 2 * n / tb;
	$this.m13 = (r + l) / rl;
	$this.m23 = (t + b) / tb;
	$this.m33 = - (f + n) / fn;
	$this.m43 = -1;
	$this.m34 = -2 * f * n / fn;
	$this.m21 = $this.m31 = $this.m41 = $this.m12 = $this.m32 = $this.m42 = $this.m14 = $this.m24 = $this.m44 = 0;
	return $this;
};

M44.setFrustum_0$LM44$NNNNNN = M44$setFrustum_0$LM44$NNNNNN;

function M44$frustum$NNNNNN(l, r, b, t, n, f) {
	return M44$setFrustum_0$LM44$NNNNNN(new M44(), l, r, b, t, n, f);
};

M44.frustum$NNNNNN = M44$frustum$NNNNNN;

M44.prototype.setOrtho$NNNNNN = function (l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	M44$array_0$LM44$(this);
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


function M44$setOrtho_0$LM44$NNNNNN($this, l, r, b, t, n, f) {
	var rl;
	var tb;
	var fn;
	M44$array_0$LM44$($this);
	(rl = r - l, tb = t - b, fn = f - n);
	$this.m11 = 2 / rl;
	$this.m22 = 2 / tb;
	$this.m33 = -2 / fn;
	$this.m14 = - (r + l) / rl;
	$this.m24 = - (t + b) / tb;
	$this.m34 = - (f + n) / fn;
	$this.m21 = $this.m31 = $this.m41 = $this.m12 = $this.m32 = $this.m42 = $this.m13 = $this.m23 = $this.m43 = 0;
	$this.m44 = 1;
	return $this;
};

M44.setOrtho_0$LM44$NNNNNN = M44$setOrtho_0$LM44$NNNNNN;

function M44$ortho$NNNNNN(l, r, b, t, n, f) {
	return M44$setOrtho_0$LM44$NNNNNN(new M44(), l, r, b, t, n, f);
};

M44.ortho$NNNNNN = M44$ortho$NNNNNN;

M44.prototype.toString = function () {
	return "M44" + JSON.stringify(M44$array_0$LM44$(this));
};


function Quat() {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

function Quat$0(q) {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = q.w;
	this.x = q.x;
	this.y = q.y;
	this.z = q.z;
};

function Quat$1(q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
};

function Quat$2(q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
};

function Quat$3(w, x, y, z) {
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
};

$__jsx_extend([Quat, Quat$0, Quat$1, Quat$2, Quat$3], Object);
Quat.prototype.array$ = function () {
	return [ this.w, this.x, this.y, this.z ];
};


function Quat$array_0$LQuat$($this) {
	return [ $this.w, $this.x, $this.y, $this.z ];
};

Quat.array_0$LQuat$ = Quat$array_0$LQuat$;

Quat.prototype.clone$ = function () {
	return new Quat$0(this);
};


function Quat$clone_0$LQuat$($this) {
	return new Quat$0($this);
};

Quat.clone_0$LQuat$ = Quat$clone_0$LQuat$;

Quat.prototype.setZero$ = function () {
	this.w = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
};


function Quat$setZero_0$LQuat$($this) {
	$this.w = 0;
	$this.x = 0;
	$this.y = 0;
	$this.z = 0;
	return $this;
};

Quat.setZero_0$LQuat$ = Quat$setZero_0$LQuat$;

Quat.prototype.setIdentity$ = function () {
	this.w = 1;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	return this;
};


function Quat$setIdentity_0$LQuat$($this) {
	$this.w = 1;
	$this.x = 0;
	$this.y = 0;
	$this.z = 0;
	return $this;
};

Quat.setIdentity_0$LQuat$ = Quat$setIdentity_0$LQuat$;

function Quat$zero$() {
	var this$0;
	this$0 = new Quat();
	this$0.w = 0;
	this$0.x = 0;
	this$0.y = 0;
	this$0.z = 0;
	return this$0;
};

Quat.zero$ = Quat$zero$;

function Quat$identity$() {
	var this$0;
	this$0 = new Quat();
	this$0.w = 1;
	this$0.x = 0;
	this$0.y = 0;
	this$0.z = 0;
	return this$0;
};

Quat.identity$ = Quat$identity$;

Quat.prototype.set$NNNN = function (w, x, y, z) {
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};


function Quat$set_0$LQuat$NNNN($this, w, x, y, z) {
	$this.w = w;
	$this.x = x;
	$this.y = y;
	$this.z = z;
	return $this;
};

Quat.set_0$LQuat$NNNN = Quat$set_0$LQuat$NNNN;

Quat.prototype.set$LQuat$ = function (q) {
	this.w = q.w;
	this.x = q.x;
	this.y = q.y;
	this.z = q.z;
	return this;
};


function Quat$set_0$LQuat$LQuat$($this, q) {
	$this.w = q.w;
	$this.x = q.x;
	$this.y = q.y;
	$this.z = q.z;
	return $this;
};

Quat.set_0$LQuat$LQuat$ = Quat$set_0$LQuat$LQuat$;

Quat.prototype.set$AN = function (q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
	return this;
};


function Quat$set_0$LQuat$AN($this, q) {
	$this.w = q[0];
	$this.x = q[1];
	$this.y = q[2];
	$this.z = q[3];
	return $this;
};

Quat.set_0$LQuat$AN = Quat$set_0$LQuat$AN;

Quat.prototype.set$LFloat32Array$ = function (q) {
	this.w = q[0];
	this.x = q[1];
	this.y = q[2];
	this.z = q[3];
	return this;
};


function Quat$set_0$LQuat$LFloat32Array$($this, q) {
	$this.w = q[0];
	$this.x = q[1];
	$this.y = q[2];
	$this.z = q[3];
	return $this;
};

Quat.set_0$LQuat$LFloat32Array$ = Quat$set_0$LQuat$LFloat32Array$;

Quat.prototype.set$NLV3$ = function (w, v) {
	this.w = w;
	this.x = v.x;
	this.y = v.y;
	this.z = v.z;
	return this;
};


function Quat$set_0$LQuat$NLV3$($this, w, v) {
	$this.w = w;
	$this.x = v.x;
	$this.y = v.y;
	$this.z = v.z;
	return $this;
};

Quat.set_0$LQuat$NLV3$ = Quat$set_0$LQuat$NLV3$;

Quat.prototype.equals$LQuat$ = function (q) {
	return Quat$equals_0$LQuat$LQuat$N(this, q, 0.000001);
};


function Quat$equals_0$LQuat$LQuat$($this, q) {
	return Quat$equals_0$LQuat$LQuat$N($this, q, 0.000001);
};

Quat.equals_0$LQuat$LQuat$ = Quat$equals_0$LQuat$LQuat$;

Quat.prototype.equals$LQuat$N = function (q, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	return ((abs$x$0 = this.w - q.w, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) >= eps ? false : (abs$x$1 = this.x - q.x, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) >= eps ? false : (abs$x$2 = this.y - q.y, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) >= eps ? false : (abs$x$3 = this.z - q.z, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) >= eps ? false : true);
};


function Quat$equals_0$LQuat$LQuat$N($this, q, eps) {
	var abs$x$0;
	var abs$x$1;
	var abs$x$2;
	var abs$x$3;
	return ((abs$x$0 = $this.w - q.w, abs$x$0 >= 0 ? abs$x$0 : - abs$x$0) >= eps ? false : (abs$x$1 = $this.x - q.x, abs$x$1 >= 0 ? abs$x$1 : - abs$x$1) >= eps ? false : (abs$x$2 = $this.y - q.y, abs$x$2 >= 0 ? abs$x$2 : - abs$x$2) >= eps ? false : (abs$x$3 = $this.z - q.z, abs$x$3 >= 0 ? abs$x$3 : - abs$x$3) >= eps ? false : true);
};

Quat.equals_0$LQuat$LQuat$N = Quat$equals_0$LQuat$LQuat$N;

Quat.prototype.dot$LQuat$ = function (q) {
	return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
};


function Quat$dot_0$LQuat$LQuat$($this, q) {
	return $this.w * q.w + $this.x * q.x + $this.y * q.y + $this.z * q.z;
};

Quat.dot_0$LQuat$LQuat$ = Quat$dot_0$LQuat$LQuat$;

Quat.prototype.inverse$ = function () {
	var q0;
	var q1;
	var q2;
	var q3;
	var dot;
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


function Quat$inverse_0$LQuat$($this) {
	var q0;
	var q1;
	var q2;
	var q3;
	var dot;
	var invDot;
	(q0 = $this.w, q1 = $this.x, q2 = $this.y, q3 = $this.z);
	dot = q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3;
	if (dot === 0) {
		return null;
	}
	invDot = 1 / dot;
	$this.w *= invDot;
	$this.x *= - invDot;
	$this.y *= - invDot;
	$this.z *= - invDot;
	return $this;
};

Quat.inverse_0$LQuat$ = Quat$inverse_0$LQuat$;

Quat.prototype.conjugate$ = function () {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	return this;
};


function Quat$conjugate_0$LQuat$($this) {
	$this.x *= -1;
	$this.y *= -1;
	$this.z *= -1;
	return $this;
};

Quat.conjugate_0$LQuat$ = Quat$conjugate_0$LQuat$;

Quat.prototype.len$ = function () {
	return Math.sqrt(Quat$len2_0$LQuat$(this));
};


function Quat$len_0$LQuat$($this) {
	return Math.sqrt(Quat$len2_0$LQuat$($this));
};

Quat.len_0$LQuat$ = Quat$len_0$LQuat$;

Quat.prototype.len2$ = function () {
	var w;
	var x;
	var y;
	var z;
	(w = this.w, x = this.x, y = this.y, z = this.z);
	return w * w + x * x + y * y + z * z;
};


function Quat$len2_0$LQuat$($this) {
	var w;
	var x;
	var y;
	var z;
	(w = $this.w, x = $this.x, y = $this.y, z = $this.z);
	return w * w + x * x + y * y + z * z;
};

Quat.len2_0$LQuat$ = Quat$len2_0$LQuat$;

Quat.prototype.normalize$ = function () {
	var w;
	var x;
	var y;
	var z;
	var l;
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


function Quat$normalize_0$LQuat$($this) {
	var w;
	var x;
	var y;
	var z;
	var l;
	var il;
	(w = $this.w, x = $this.x, y = $this.y, z = $this.z);
	l = Math.sqrt(x * x + y * y + z * z + w * w);
	if (l === 0) {
		return null;
	}
	il = 1 / l;
	$this.w *= il;
	$this.x *= il;
	$this.y *= il;
	$this.z *= il;
	return $this;
};

Quat.normalize_0$LQuat$ = Quat$normalize_0$LQuat$;

Quat.prototype.add$LQuat$ = function (q) {
	this.w += q.w;
	this.x += q.x;
	this.y += q.y;
	this.z += q.z;
	return this;
};


function Quat$add_0$LQuat$LQuat$($this, q) {
	$this.w += q.w;
	$this.x += q.x;
	$this.y += q.y;
	$this.z += q.z;
	return $this;
};

Quat.add_0$LQuat$LQuat$ = Quat$add_0$LQuat$LQuat$;

Quat.prototype.sub$LQuat$ = function (q) {
	this.w -= q.w;
	this.x -= q.x;
	this.y -= q.y;
	this.z -= q.z;
	return this;
};


function Quat$sub_0$LQuat$LQuat$($this, q) {
	$this.w -= q.w;
	$this.x -= q.x;
	$this.y -= q.y;
	$this.z -= q.z;
	return $this;
};

Quat.sub_0$LQuat$LQuat$ = Quat$sub_0$LQuat$LQuat$;

Quat.prototype.mul$LQuat$ = function (q) {
	var aw;
	var ax;
	var ay;
	var az;
	var bw;
	var bx;
	var by;
	var bz;
	(aw = this.w, ax = this.x, ay = this.y, az = this.z);
	(bw = q.w, bx = q.x, by = q.y, bz = q.z);
	this.w = aw * bw - ax * bx - ay * by - az * bz;
	this.x = aw * bx + ax * bw + ay * bz - az * by;
	this.y = aw * by - ax * bz + ay * bw + az * bx;
	this.z = aw * bz + ax * by - ay * bx + az * bw;
	return this;
};


function Quat$mul_0$LQuat$LQuat$($this, q) {
	var aw;
	var ax;
	var ay;
	var az;
	var bw;
	var bx;
	var by;
	var bz;
	(aw = $this.w, ax = $this.x, ay = $this.y, az = $this.z);
	(bw = q.w, bx = q.x, by = q.y, bz = q.z);
	$this.w = aw * bw - ax * bx - ay * by - az * bz;
	$this.x = aw * bx + ax * bw + ay * bz - az * by;
	$this.y = aw * by - ax * bz + ay * bw + az * bx;
	$this.z = aw * bz + ax * by - ay * bx + az * bw;
	return $this;
};

Quat.mul_0$LQuat$LQuat$ = Quat$mul_0$LQuat$LQuat$;

Quat.prototype.mul$N = function (s) {
	this.w *= s;
	this.x *= s;
	this.y *= s;
	this.z *= s;
	return this;
};


function Quat$mul_0$LQuat$N($this, s) {
	$this.w *= s;
	$this.x *= s;
	$this.y *= s;
	$this.z *= s;
	return $this;
};

Quat.mul_0$LQuat$N = Quat$mul_0$LQuat$N;

Quat.prototype.slerp$LQuat$LQuat$N = function (q0, q1, slerp) {
	var aw;
	var ax;
	var ay;
	var az;
	var bw;
	var bx;
	var by;
	var bz;
	var cosHalfTheta;
	var halfTheta;
	var sinHalfTheta;
	var ratioA;
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


function Quat$slerp_0$LQuat$LQuat$LQuat$N($this, q0, q1, slerp) {
	var aw;
	var ax;
	var ay;
	var az;
	var bw;
	var bx;
	var by;
	var bz;
	var cosHalfTheta;
	var halfTheta;
	var sinHalfTheta;
	var ratioA;
	var ratioB;
	(aw = q0.w, ax = q0.x, ay = q0.y, az = q0.z);
	(bw = q1.w, bx = q1.x, by = q1.y, bz = q1.z);
	cosHalfTheta = aw * bw + ax * bx + ay * by + az * bz;
	if ((cosHalfTheta >= 0 ? cosHalfTheta : - cosHalfTheta) >= 1.0) {
		return $this;
	}
	halfTheta = Math.acos(cosHalfTheta);
	sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
	if ((sinHalfTheta >= 0 ? sinHalfTheta : - sinHalfTheta) < 0.001) {
		$this.w = (aw + bw) / 2;
		$this.x = (ax + bx) / 2;
		$this.y = (ay + by) / 2;
		$this.z = (az + bz) / 2;
		return $this;
	}
	ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
	ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;
	$this.w = aw * ratioA + bw * ratioB;
	$this.x = ax * ratioA + bx * ratioB;
	$this.y = ay * ratioA + by * ratioB;
	$this.z = az * ratioA + bz * ratioB;
	return $this;
};

Quat.slerp_0$LQuat$LQuat$LQuat$N = Quat$slerp_0$LQuat$LQuat$LQuat$N;

Quat.prototype.toString = function () {
	return "Quat" + JSON.stringify([ this.w, this.x, this.y, this.z ]);
};


function _Main$0() {
};

$__jsx_extend([_Main$0], Object);
function _Main$0$main$AS(args) {
};

_Main$0.main = _Main$0$main$AS;
_Main$0.main$AS = _Main$0$main$AS;

function _Part() {
	this.vbuf = null;
	this.nbuf = null;
	this.ibuf = null;
	this.numv = 0;
	this.numi = 0;
};

$__jsx_extend([_Part], Object);
function _Part$createArrayBuffer$AN(a) {
	var gl;
	var buf;
	gl = Kingyo.gl;
	buf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(a), gl.STATIC_DRAW);
	return buf;
};

_Part.createArrayBuffer$AN = _Part$createArrayBuffer$AN;

function _Part$createIndexBuffer$AI(a) {
	var gl;
	var buf;
	gl = Kingyo.gl;
	buf = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buf);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(a), gl.STATIC_DRAW);
	return buf;
};

_Part.createIndexBuffer$AI = _Part$createIndexBuffer$AI;

function _Part$setVertex$L_Part$AN($this, v) {
	var gl$0;
	var buf$0;
	gl$0 = Kingyo.gl;
	buf$0 = gl$0.createBuffer();
	gl$0.bindBuffer(gl$0.ARRAY_BUFFER, buf$0);
	gl$0.bufferData(gl$0.ARRAY_BUFFER, new Float32Array(v), gl$0.STATIC_DRAW);
	$this.vbuf = buf$0;
	$this.numv = (v.length / 3 | 0);
	return $this;
};

_Part.setVertex$L_Part$AN = _Part$setVertex$L_Part$AN;

function _Part$setNormal$L_Part$AN($this, n) {
	var gl$0;
	var buf$0;
	gl$0 = Kingyo.gl;
	buf$0 = gl$0.createBuffer();
	gl$0.bindBuffer(gl$0.ARRAY_BUFFER, buf$0);
	gl$0.bufferData(gl$0.ARRAY_BUFFER, new Float32Array(n), gl$0.STATIC_DRAW);
	$this.nbuf = buf$0;
	return $this;
};

_Part.setNormal$L_Part$AN = _Part$setNormal$L_Part$AN;

function _Part$setIndex$L_Part$AI($this, i) {
	var gl$0;
	var buf$0;
	gl$0 = Kingyo.gl;
	buf$0 = gl$0.createBuffer();
	gl$0.bindBuffer(gl$0.ELEMENT_ARRAY_BUFFER, buf$0);
	gl$0.bufferData(gl$0.ELEMENT_ARRAY_BUFFER, new Uint16Array(i), gl$0.STATIC_DRAW);
	$this.ibuf = buf$0;
	$this.numi = (i.length | 0);
	return $this;
};

_Part.setIndex$L_Part$AI = _Part$setIndex$L_Part$AI;

function Kingyo() {
	this._pos = new V3();
	this._vangle = 0;
	this._velo = 0;
	this._anim = 0;
	this._state = '';
	this._spinMat = new M44();
	this._spinAxis = new V3();
	this._spinSpeed = 0;
	this._vz = 0;
	this._color = [ 0.7, 0, 0 ];
	this._color2 = [ 0.7, 0, 0 ];
	this._color2pos = [ 0, 0, 0, 0 ];
	Kingyo$init_0$LKingyo$(this);
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

$__jsx_extend([Kingyo], Object);
function Kingyo$initWithGL$LWebGLRenderingContext$(gl) {
	var ex;
	var ey;
	var ez;
	Kingyo.gl = gl;
	Kingyo.prog = Util$getProgram$SS('kbody.vs', 'kbody.fs');
	Kingyo.body = _Part$setIndex$L_Part$AI(_Part$setNormal$L_Part$AN(_Part$setVertex$L_Part$AN(({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0}), [ 0, 0, 1, 0.7, 0, 0, 0, 1, 0, -0.7, 0, 0, 0, -1, 0, 0, 0, -1 ]), [ 0, 0, 1, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1 ]), [ 0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 5, 2, 1, 5, 3, 2, 5, 4, 3, 5, 1, 4 ]);
	Kingyo.lfin = _Part$setIndex$L_Part$AI(_Part$setNormal$L_Part$AN(_Part$setVertex$L_Part$AN(({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0}), [ 0, 0, 0, 0.5, -0.25, 0, 0.8, 0.25, 0 ]), [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ]), [ 0, 1, 2 ]);
	Kingyo.rfin = _Part$setIndex$L_Part$AI(_Part$setNormal$L_Part$AN(_Part$setVertex$L_Part$AN(({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0}), [ 0, 0, 0, -0.8, 0.25, 0, -0.5, -0.25, 0 ]), [ 0, 0, 1, 0, 0, 1, 0, 0, 1 ]), [ 0, 1, 2 ]);
	Kingyo.bfin = _Part$setIndex$L_Part$AI(_Part$setNormal$L_Part$AN(_Part$setVertex$L_Part$AN(({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0}), [ 0, 0, 0, 0, -0.5, -1, 0, 0.5, -0.8 ]), [ 1, 0, 0, 1, 0, 0, 1, 0, 0 ]), [ 0, 1, 2 ]);
	Kingyo.tfin = _Part$setIndex$L_Part$AI(_Part$setNormal$L_Part$AN(_Part$setVertex$L_Part$AN(({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0}), [ 0, 0, 0, 0.8, -0.5, -1, 0, 0.4, -0.8, -0.8, -0.5, -1 ]), [ 0, 1, 1, 1, 1, 1, 0, 1, 0, -1, 1, 1 ]), [ 0, 1, 2, 0, 2, 3 ]);
	Kingyo.ulocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.alocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.prog);
	Kingyo.eyeProg = Util$getProgram$SS('keye.vs', 'keye.fs');
	Kingyo.eyeULocs = Util$getUniformLocations$LWebGLProgram$(Kingyo.eyeProg);
	Kingyo.eyeALocs = Util$getAttribLocations$LWebGLProgram$(Kingyo.eyeProg);
	(ex = 0.3, ey = 0.15, ez = 0.5);
	Kingyo.eyes = _Part$setIndex$L_Part$AI(_Part$setVertex$L_Part$AN(({vbuf: null, nbuf: null, ibuf: null, numv: 0, numi: 0}), [ - ex, ey, ez, 0, - ex, ey, ez, 1, - ex, ey, ez, 2, - ex, ey, ez, 3, ex, ey, ez, 4, ex, ey, ez, 5, ex, ey, ez, 6, ex, ey, ez, 7 ]), [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7 ]);
};

Kingyo.initWithGL$LWebGLRenderingContext$ = Kingyo$initWithGL$LWebGLRenderingContext$;

function Kingyo$init$I(num_kingyos) {
	var i;
	for (i = 0; i < num_kingyos; ++ i) {
		Kingyo.all.push(new Kingyo());
	}
};

Kingyo.init$I = Kingyo$init$I;

function Kingyo$reset$() {
	var i;
	for (i = 0; i < Kingyo.all.length; ++ i) {
		Kingyo$init_0$LKingyo$(Kingyo.all[i]);
	}
};

Kingyo.reset$ = Kingyo$reset$;

function Kingyo$numRests$() {
	var r;
	var i;
	r = 0;
	for (i = 0; i < Kingyo.all.length; ++ i) {
		if (Kingyo.all[i]._state === 'swimming') {
			++ r;
		}
	}
	return (r | 0);
};

Kingyo.numRests$ = Kingyo$numRests$;

function Kingyo$update$N(t) {
	var dt;
	var i;
	if (Kingyo.prevTime === 0) {
		Kingyo.prevTime = t;
	}
	dt = t - Kingyo.prevTime;
	for (i = 0; i < Kingyo.all.length; ++ i) {
		Kingyo$_update_0$LKingyo$N(Kingyo.all[i], dt);
	}
	Kingyo.prevTime = t;
};

Kingyo.update$N = Kingyo$update$N;

function Kingyo$drawUnderWater$LM44$LM44$(projMat, viewMat) {
	Kingyo$draw$LM44$LM44$F$LKingyo$B$(projMat, viewMat, (function (k) {
		return k._state === 'swimming';
	}));
};

Kingyo.drawUnderWater$LM44$LM44$ = Kingyo$drawUnderWater$LM44$LM44$;

function Kingyo$drawAboveWater$LM44$LM44$(projMat, viewMat) {
	Kingyo$draw$LM44$LM44$F$LKingyo$B$(projMat, viewMat, (function (k) {
		return k._state !== 'swimming';
	}));
};

Kingyo.drawAboveWater$LM44$LM44$ = Kingyo$drawAboveWater$LM44$LM44$;

function Kingyo$draw$LM44$LM44$F$LKingyo$B$(projMat, viewMat, pred) {
	var gl;
	var ulocs;
	var alocs;
	var i;
	var k;
	var eulocs;
	var ealocs;
	gl = Kingyo.gl;
	ulocs = Kingyo.ulocs;
	alocs = Kingyo.alocs;
	gl.useProgram(Kingyo.prog);
	gl.uniformMatrix4fv(ulocs.projectionMatrix, false, M44$array_0$LM44$(projMat));
	gl.uniformMatrix4fv(ulocs.viewMatrix, false, M44$array_0$LM44$(viewMat));
	gl.uniform4fv(ulocs.lightPosition, [ 0, 1, 1, 0 ]);
	gl.enableVertexAttribArray(alocs.vertex);
	gl.enableVertexAttribArray(alocs.normal);
	for (i = 0; i < Kingyo.all.length; ++ i) {
		k = Kingyo.all[i];
		if (pred(k)) {
			Kingyo$_draw_0$LKingyo$(k);
		}
	}
	gl.disableVertexAttribArray(alocs.vertex);
	gl.disableVertexAttribArray(alocs.normal);
	eulocs = Kingyo.eyeULocs;
	ealocs = Kingyo.eyeALocs;
	gl.useProgram(Kingyo.eyeProg);
	gl.uniformMatrix4fv(eulocs.projectionMatrix, false, M44$array_0$LM44$(projMat));
	gl.uniformMatrix4fv(eulocs.viewMatrix, false, M44$array_0$LM44$(viewMat));
	gl.uniform4fv(eulocs.lightPosition, [ 0, 1, 1, 0 ]);
	gl.uniform1f(eulocs.radius, 0.2);
	gl.bindBuffer(gl.ARRAY_BUFFER, Kingyo.eyes.vbuf);
	gl.vertexAttribPointer(ealocs.position, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(ealocs.position);
	for (i = 0; i < Kingyo.all.length; ++ i) {
		k = Kingyo.all[i];
		if (pred(k)) {
			Kingyo$_drawEyes_0$LKingyo$(k);
		}
	}
	gl.disableVertexAttribArray(ealocs.position);
};

Kingyo.draw$LM44$LM44$F$LKingyo$B$ = Kingyo$draw$LM44$LM44$F$LKingyo$B$;

function Kingyo$hit$NN(x, y) {
	var h;
	var i;
	var k;
	var dx;
	var dy;
	var r;
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

Kingyo.hit$NN = Kingyo$hit$NN;

function Kingyo$fish$ALKingyo$(kingyos) {
	var i;
	for (i = 0; i < kingyos.length; ++ i) {
		Kingyo$_fished_0$LKingyo$(kingyos[i]);
	}
};

Kingyo.fish$ALKingyo$ = Kingyo$fish$ALKingyo$;

Kingyo.prototype.init$ = function () {
	var r;
	var x;
	var y;
	var this$0;
	var z$0;
	var this$1;
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
	this._anim = 0;
	this._state = 'swimming';
	M44$set_0$LM44$N(this._spinMat, 1);
	this$1 = this._spinAxis;
	this$1.x = 0;
	this$1.y = 0;
	this$1.z = 0;
	this._spinSpeed = 0;
	this._vz = 0;
};


function Kingyo$init_0$LKingyo$($this) {
	var r;
	var x;
	var y;
	var this$0;
	var z$0;
	var this$1;
	$this._vangle = Math.random() * 2 * 3.141592653589793;
	$this._velo = Math.random() * 15 + 1;
	r = 8 * Math.random();
	x = r * Math.cos($this._vangle);
	y = r * Math.sin($this._vangle);
	this$0 = $this._pos;
	z$0 = -2 - Math.random() * 3;
	this$0.x = x;
	this$0.y = y;
	this$0.z = z$0;
	$this._anim = 0;
	$this._state = 'swimming';
	M44$set_0$LM44$N($this._spinMat, 1);
	this$1 = $this._spinAxis;
	this$1.x = 0;
	this$1.y = 0;
	this$1.z = 0;
	$this._spinSpeed = 0;
	$this._vz = 0;
};

Kingyo.init_0$LKingyo$ = Kingyo$init_0$LKingyo$;

Kingyo.prototype._setRandom$ = function () {
	this._vangle = Math.random() * 2 * 3.141592653589793;
	this._velo = Math.random() * 15 + 1;
};


function Kingyo$_setRandom_0$LKingyo$($this) {
	$this._vangle = Math.random() * 2 * 3.141592653589793;
	$this._velo = Math.random() * 15 + 1;
};

Kingyo._setRandom_0$LKingyo$ = Kingyo$_setRandom_0$LKingyo$;

Kingyo.prototype._fished$ = function () {
	var a;
	var this$0;
	var x$0;
	var y$0;
	var z$0;
	this._state = 'flying';
	this._pos.z = 2;
	this._vz = 150 + Math.random() * 50;
	this._velo = 12;
	M44$set_0$LM44$N(this._spinMat, 1);
	a = 6.283185307179586 * Math.random();
	this$0 = this._spinAxis;
	x$0 = Math.cos(a);
	y$0 = Math.sin(a);
	z$0 = Math.random() - 0.5;
	this$0.x = x$0;
	this$0.y = y$0;
	this$0.z = z$0;
	this._spinSpeed = 10 * Math.random() + 2;
};


function Kingyo$_fished_0$LKingyo$($this) {
	var a;
	var this$0;
	var x$0;
	var y$0;
	var z$0;
	$this._state = 'flying';
	$this._pos.z = 2;
	$this._vz = 150 + Math.random() * 50;
	$this._velo = 12;
	M44$set_0$LM44$N($this._spinMat, 1);
	a = 6.283185307179586 * Math.random();
	this$0 = $this._spinAxis;
	x$0 = Math.cos(a);
	y$0 = Math.sin(a);
	z$0 = Math.random() - 0.5;
	this$0.x = x$0;
	this$0.y = y$0;
	this$0.z = z$0;
	$this._spinSpeed = 10 * Math.random() + 2;
};

Kingyo._fished_0$LKingyo$ = Kingyo$_fished_0$LKingyo$;

Kingyo.prototype._update$N = function (dt) {
	var x;
	var y;
	var b;
	var num_listed;
	var i;
	var setRotation$a$0;
	var mul$this$0;
	var this$0;
	var x$0;
	var _pos$0;
	var _pos$1;
	var _vz$0;
	switch (this._state) {
	default:
		break;
	case 'swimming':
		x = this._pos.x + Math.cos(this._vangle) * this._velo * dt;
		y = this._pos.y + Math.sin(this._vangle) * this._velo * dt;
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
		(_pos$0 = this._pos).x = x;
		_pos$0.y = y;
		break;
	case 'flying':
		_vz$0 = this._vz -= 300 * dt;
		(_pos$1 = this._pos).z = _pos$1.z + _vz$0 * dt;
		(mul$this$0 = this._spinMat, M44$mul_0$LM44$LM44$LM44$(mul$this$0, new M44$0(mul$this$0), (setRotation$a$0 = this._spinAxis, M44$setRotation_0$LM44$NNNN(new M44(), dt * this._spinSpeed, setRotation$a$0.x, setRotation$a$0.y, setRotation$a$0.z))));
		if (this._pos.z >= 2) {
			break;
		}
		num_listed = 0;
		for (i = 0; i < Kingyo.all.length; ++ i) {
			if (Kingyo.all[i]._state === 'listed') {
				++ num_listed;
			}
		}
		this$0 = this._pos;
		x$0 = num_listed * 1.5 - 10 - 4.25;
		this$0.x = x$0;
		this$0.y = 13;
		this$0.z = 2;
		this._vangle = 1.5707963267948966;
		M44$set_0$LM44$N(this._spinMat, 1);
		this._velo = 2;
		this._state = 'listed';
	case 'listed':
		break;
	}
	this._anim += dt * this._velo;
};


function Kingyo$_update_0$LKingyo$N($this, dt) {
	var x;
	var y;
	var b;
	var num_listed;
	var i;
	var setRotation$a$0;
	var mul$this$0;
	var this$0;
	var x$0;
	var _pos$0;
	var _pos$1;
	var _vz$0;
	switch ($this._state) {
	default:
		break;
	case 'swimming':
		x = $this._pos.x + Math.cos($this._vangle) * $this._velo * dt;
		y = $this._pos.y + Math.sin($this._vangle) * $this._velo * dt;
		b = 10;
		if (x < -10) {
			x = - b;
			$this._vangle = Math.random() * 2 * 3.141592653589793;
			$this._velo = Math.random() * 15 + 1;
		}
		if (y < - b) {
			y = - b;
			$this._vangle = Math.random() * 2 * 3.141592653589793;
			$this._velo = Math.random() * 15 + 1;
		}
		if (x > b) {
			x = b;
			$this._vangle = Math.random() * 2 * 3.141592653589793;
			$this._velo = Math.random() * 15 + 1;
		}
		if (y > b) {
			y = b;
			$this._vangle = Math.random() * 2 * 3.141592653589793;
			$this._velo = Math.random() * 15 + 1;
		}
		(_pos$0 = $this._pos).x = x;
		_pos$0.y = y;
		break;
	case 'flying':
		_vz$0 = $this._vz -= 300 * dt;
		(_pos$1 = $this._pos).z = _pos$1.z + _vz$0 * dt;
		(mul$this$0 = $this._spinMat, M44$mul_0$LM44$LM44$LM44$(mul$this$0, new M44$0(mul$this$0), (setRotation$a$0 = $this._spinAxis, M44$setRotation_0$LM44$NNNN(new M44(), dt * $this._spinSpeed, setRotation$a$0.x, setRotation$a$0.y, setRotation$a$0.z))));
		if ($this._pos.z >= 2) {
			break;
		}
		num_listed = 0;
		for (i = 0; i < Kingyo.all.length; ++ i) {
			if (Kingyo.all[i]._state === 'listed') {
				++ num_listed;
			}
		}
		this$0 = $this._pos;
		x$0 = num_listed * 1.5 - 10 - 4.25;
		this$0.x = x$0;
		this$0.y = 13;
		this$0.z = 2;
		$this._vangle = 1.5707963267948966;
		M44$set_0$LM44$N($this._spinMat, 1);
		$this._velo = 2;
		$this._state = 'listed';
	case 'listed':
		break;
	}
	$this._anim += dt * $this._velo;
};

Kingyo._update_0$LKingyo$N = Kingyo$_update_0$LKingyo$N;

Kingyo.prototype._draw$ = function () {
	var gl;
	var modelMatLoc;
	var s;
	var bodyMat;
	var lfinMat;
	var rfinMat;
	var bfinMat;
	var tfinMat;
	var mul$this$0;
	var mul$this$1;
	var mul$this$2;
	var mul$this$3;
	var mul$this$4;
	var mul$this$5;
	var mul$this$6;
	var mul$this$7;
	var mul$this$8;
	var mul$this$9;
	var mul$this$10;
	var mul$this$11;
	gl = Kingyo.gl;
	gl.uniform3fv(Kingyo.ulocs.color, this._color);
	gl.uniform3fv(Kingyo.ulocs.color2, this._color2);
	gl.uniform4fv(Kingyo.ulocs.color2pos, this._color2pos);
	modelMatLoc = Kingyo.ulocs.modelMatrix;
	s = Math.sin(this._anim * 5);
	bodyMat = (mul$this$3 = (mul$this$2 = (mul$this$1 = (mul$this$0 = M44$setTranslation_0$LM44$LV3$(new M44(), this._pos), M44$mul_0$LM44$LM44$LM44$(mul$this$0, new M44$0(mul$this$0), this._spinMat)), M44$mul_0$LM44$LM44$LM44$(mul$this$1, new M44$0(mul$this$1), M44$setRotation_0$LM44$NNNN(new M44(), this._vangle - s / 10, 0, 0, 1))), M44$mul_0$LM44$LM44$LM44$(mul$this$2, new M44$0(mul$this$2), M44$setRotation_0$LM44$NNNN(new M44(), 1.5707963267948966, 1, 0, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$3, new M44$0(mul$this$3), M44$setRotation_0$LM44$NNNN(new M44(), 1.5707963267948966, 0, 1, 0)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(bodyMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$(this, Kingyo.body);
	lfinMat = (mul$this$5 = (mul$this$4 = new M44$0(bodyMat), M44$mul_0$LM44$LM44$LM44$(mul$this$4, new M44$0(mul$this$4), M44$setTranslation_0$LM44$NNN(new M44(), 0.5, -0.3, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$5, new M44$0(mul$this$5), M44$setRotation_0$LM44$NNNN(new M44(), 1 + s / 2, 0.2, 1, -0.5)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(lfinMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$(this, Kingyo.lfin);
	rfinMat = (mul$this$7 = (mul$this$6 = new M44$0(bodyMat), M44$mul_0$LM44$LM44$LM44$(mul$this$6, new M44$0(mul$this$6), M44$setTranslation_0$LM44$NNN(new M44(), -0.5, -0.3, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$7, new M44$0(mul$this$7), M44$setRotation_0$LM44$NNNN(new M44(), -1 - s / 2, -0.2, 1, -0.5)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(rfinMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$(this, Kingyo.rfin);
	bfinMat = (mul$this$9 = (mul$this$8 = new M44$0(bodyMat), M44$mul_0$LM44$LM44$LM44$(mul$this$8, new M44$0(mul$this$8), M44$setTranslation_0$LM44$NNN(new M44(), 0, 0.7, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$9, new M44$0(mul$this$9), M44$setRotation_0$LM44$NNNN(new M44(), s / 2, 0, 1, 1)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(bfinMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$(this, Kingyo.bfin);
	tfinMat = (mul$this$11 = (mul$this$10 = new M44$0(bodyMat), M44$mul_0$LM44$LM44$LM44$(mul$this$10, new M44$0(mul$this$10), M44$setTranslation_0$LM44$NNN(new M44(), 0, 0, -0.7))), M44$mul_0$LM44$LM44$LM44$(mul$this$11, new M44$0(mul$this$11), M44$setRotation_0$LM44$NNNN(new M44(), s / 2, 0, 1, 0)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(tfinMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$(this, Kingyo.tfin);
};


function Kingyo$_draw_0$LKingyo$($this) {
	var gl;
	var modelMatLoc;
	var s;
	var bodyMat;
	var lfinMat;
	var rfinMat;
	var bfinMat;
	var tfinMat;
	var mul$this$0;
	var mul$this$1;
	var mul$this$2;
	var mul$this$3;
	var mul$this$4;
	var mul$this$5;
	var mul$this$6;
	var mul$this$7;
	var mul$this$8;
	var mul$this$9;
	var mul$this$10;
	var mul$this$11;
	gl = Kingyo.gl;
	gl.uniform3fv(Kingyo.ulocs.color, $this._color);
	gl.uniform3fv(Kingyo.ulocs.color2, $this._color2);
	gl.uniform4fv(Kingyo.ulocs.color2pos, $this._color2pos);
	modelMatLoc = Kingyo.ulocs.modelMatrix;
	s = Math.sin($this._anim * 5);
	bodyMat = (mul$this$3 = (mul$this$2 = (mul$this$1 = (mul$this$0 = M44$setTranslation_0$LM44$LV3$(new M44(), $this._pos), M44$mul_0$LM44$LM44$LM44$(mul$this$0, new M44$0(mul$this$0), $this._spinMat)), M44$mul_0$LM44$LM44$LM44$(mul$this$1, new M44$0(mul$this$1), M44$setRotation_0$LM44$NNNN(new M44(), $this._vangle - s / 10, 0, 0, 1))), M44$mul_0$LM44$LM44$LM44$(mul$this$2, new M44$0(mul$this$2), M44$setRotation_0$LM44$NNNN(new M44(), 1.5707963267948966, 1, 0, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$3, new M44$0(mul$this$3), M44$setRotation_0$LM44$NNNN(new M44(), 1.5707963267948966, 0, 1, 0)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(bodyMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$($this, Kingyo.body);
	lfinMat = (mul$this$5 = (mul$this$4 = new M44$0(bodyMat), M44$mul_0$LM44$LM44$LM44$(mul$this$4, new M44$0(mul$this$4), M44$setTranslation_0$LM44$NNN(new M44(), 0.5, -0.3, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$5, new M44$0(mul$this$5), M44$setRotation_0$LM44$NNNN(new M44(), 1 + s / 2, 0.2, 1, -0.5)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(lfinMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$($this, Kingyo.lfin);
	rfinMat = (mul$this$7 = (mul$this$6 = new M44$0(bodyMat), M44$mul_0$LM44$LM44$LM44$(mul$this$6, new M44$0(mul$this$6), M44$setTranslation_0$LM44$NNN(new M44(), -0.5, -0.3, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$7, new M44$0(mul$this$7), M44$setRotation_0$LM44$NNNN(new M44(), -1 - s / 2, -0.2, 1, -0.5)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(rfinMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$($this, Kingyo.rfin);
	bfinMat = (mul$this$9 = (mul$this$8 = new M44$0(bodyMat), M44$mul_0$LM44$LM44$LM44$(mul$this$8, new M44$0(mul$this$8), M44$setTranslation_0$LM44$NNN(new M44(), 0, 0.7, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$9, new M44$0(mul$this$9), M44$setRotation_0$LM44$NNNN(new M44(), s / 2, 0, 1, 1)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(bfinMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$($this, Kingyo.bfin);
	tfinMat = (mul$this$11 = (mul$this$10 = new M44$0(bodyMat), M44$mul_0$LM44$LM44$LM44$(mul$this$10, new M44$0(mul$this$10), M44$setTranslation_0$LM44$NNN(new M44(), 0, 0, -0.7))), M44$mul_0$LM44$LM44$LM44$(mul$this$11, new M44$0(mul$this$11), M44$setRotation_0$LM44$NNNN(new M44(), s / 2, 0, 1, 0)));
	gl.uniformMatrix4fv(modelMatLoc, false, M44$array_0$LM44$(tfinMat));
	Kingyo$_drawPart_0$LKingyo$L_Part$($this, Kingyo.tfin);
};

Kingyo._draw_0$LKingyo$ = Kingyo$_draw_0$LKingyo$;

Kingyo.prototype._drawPart$L_Part$ = function (p) {
	var gl;
	gl = Kingyo.gl;
	gl.bindBuffer(gl.ARRAY_BUFFER, p.vbuf);
	gl.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, p.nbuf);
	gl.vertexAttribPointer(Kingyo.alocs.normal, 3, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, p.ibuf);
	gl.drawElements(gl.TRIANGLES, p.numi, gl.UNSIGNED_SHORT, 0);
};


function Kingyo$_drawPart_0$LKingyo$L_Part$($this, p) {
	var gl;
	gl = Kingyo.gl;
	gl.bindBuffer(gl.ARRAY_BUFFER, p.vbuf);
	gl.vertexAttribPointer(Kingyo.alocs.vertex, 3, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, p.nbuf);
	gl.vertexAttribPointer(Kingyo.alocs.normal, 3, gl.FLOAT, false, 0, 0);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, p.ibuf);
	gl.drawElements(gl.TRIANGLES, p.numi, gl.UNSIGNED_SHORT, 0);
};

Kingyo._drawPart_0$LKingyo$L_Part$ = Kingyo$_drawPart_0$LKingyo$L_Part$;

Kingyo.prototype._drawEyes$ = function () {
	var gl;
	var ulocs;
	var s;
	var bodyMat;
	var mul$this$0;
	var mul$this$1;
	var mul$this$2;
	var mul$this$3;
	gl = Kingyo.gl;
	ulocs = Kingyo.eyeULocs;
	gl.uniform3fv(ulocs.color, this._color);
	s = Math.sin(this._anim * 5);
	bodyMat = (mul$this$3 = (mul$this$2 = (mul$this$1 = (mul$this$0 = M44$setTranslation_0$LM44$LV3$(new M44(), this._pos), M44$mul_0$LM44$LM44$LM44$(mul$this$0, new M44$0(mul$this$0), this._spinMat)), M44$mul_0$LM44$LM44$LM44$(mul$this$1, new M44$0(mul$this$1), M44$setRotation_0$LM44$NNNN(new M44(), this._vangle - s / 10, 0, 0, 1))), M44$mul_0$LM44$LM44$LM44$(mul$this$2, new M44$0(mul$this$2), M44$setRotation_0$LM44$NNNN(new M44(), 1.5707963267948966, 1, 0, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$3, new M44$0(mul$this$3), M44$setRotation_0$LM44$NNNN(new M44(), 1.5707963267948966, 0, 1, 0)));
	gl.uniformMatrix4fv(ulocs.modelMatrix, false, M44$array_0$LM44$(bodyMat));
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Kingyo.eyes.ibuf);
	gl.drawElements(gl.TRIANGLES, 12, gl.UNSIGNED_SHORT, 0);
};


function Kingyo$_drawEyes_0$LKingyo$($this) {
	var gl;
	var ulocs;
	var s;
	var bodyMat;
	var mul$this$0;
	var mul$this$1;
	var mul$this$2;
	var mul$this$3;
	gl = Kingyo.gl;
	ulocs = Kingyo.eyeULocs;
	gl.uniform3fv(ulocs.color, $this._color);
	s = Math.sin($this._anim * 5);
	bodyMat = (mul$this$3 = (mul$this$2 = (mul$this$1 = (mul$this$0 = M44$setTranslation_0$LM44$LV3$(new M44(), $this._pos), M44$mul_0$LM44$LM44$LM44$(mul$this$0, new M44$0(mul$this$0), $this._spinMat)), M44$mul_0$LM44$LM44$LM44$(mul$this$1, new M44$0(mul$this$1), M44$setRotation_0$LM44$NNNN(new M44(), $this._vangle - s / 10, 0, 0, 1))), M44$mul_0$LM44$LM44$LM44$(mul$this$2, new M44$0(mul$this$2), M44$setRotation_0$LM44$NNNN(new M44(), 1.5707963267948966, 1, 0, 0))), M44$mul_0$LM44$LM44$LM44$(mul$this$3, new M44$0(mul$this$3), M44$setRotation_0$LM44$NNNN(new M44(), 1.5707963267948966, 0, 1, 0)));
	gl.uniformMatrix4fv(ulocs.modelMatrix, false, M44$array_0$LM44$(bodyMat));
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Kingyo.eyes.ibuf);
	gl.drawElements(gl.TRIANGLES, 12, gl.UNSIGNED_SHORT, 0);
};

Kingyo._drawEyes_0$LKingyo$ = Kingyo$_drawEyes_0$LKingyo$;

function Poi() {
	this._x = 0;
	this._y = 0;
	this._z = 1;
	this._down = false;
	this._live = true;
};

$__jsx_extend([Poi], Object);
function Poi$initWithGL$LWebGLRenderingContext$(gl) {
	Poi.gl = gl;
	Poi.prog = Util$getProgram$SS('vt.vs', 'vt.fs');
	Poi.vtbuf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, Poi.vtbuf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ -2, -6, 2, -6, 2, 2, -2, 2, 0, 0, 1, 0, 1, 1, 0, 1 ]), gl.STATIC_DRAW);
	Poi.tex = Poi$loadTex$S('poi.png');
	Poi.texx = Poi$loadTex$S('poix.png');
};

Poi.initWithGL$LWebGLRenderingContext$ = Poi$initWithGL$LWebGLRenderingContext$;

function Poi$loadTex$S(filename) {
	var gl;
	var tex;
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

Poi.loadTex$S = Poi$loadTex$S;

function Poi$setPosition$LPoi$NN($this, x, y) {
	$this._x = x;
	$this._y = y;
	return $this;
};

Poi.setPosition$LPoi$NN = Poi$setPosition$LPoi$NN;

function Poi$down$LPoi$B($this, d) {
	$this._down = d;
	return $this;
};

Poi.down$LPoi$B = Poi$down$LPoi$B;

function Poi$down$LPoi$($this) {
	return $this._down;
};

Poi.down$LPoi$ = Poi$down$LPoi$;

function Poi$tear$LPoi$B($this, t) {
	$this._live = ! t;
	return $this;
};

Poi.tear$LPoi$B = Poi$tear$LPoi$B;

function Poi$tearing$LPoi$($this) {
	return ! $this._live;
};

Poi.tearing$LPoi$ = Poi$tearing$LPoi$;

function Poi$draw$LPoi$LM44$LM44$($this, projMat, viewMat) {
	var gl;
	var prog;
	var mvMat;
	var vloc;
	var tloc;
	var mul$this$0;
	var mul$this$1;
	gl = Poi.gl;
	prog = Poi.prog;
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array_0$LM44$(projMat));
	mvMat = (mul$this$0 = new M44$0(viewMat), M44$mul_0$LM44$LM44$LM44$(mul$this$0, new M44$0(mul$this$0), M44$setTranslation_0$LM44$NNN(new M44(), $this._x, $this._y, $this._z)));
	if ($this._down) {
		(mul$this$1 = M44$mul_0$LM44$LM44$LM44$(mvMat, new M44$0(mvMat), M44$setTranslation_0$LM44$NNN(new M44(), 0, 0, -7)), M44$mul_0$LM44$LM44$LM44$(mul$this$1, new M44$0(mul$this$1), M44$setRotation_0$LM44$NNNN(new M44(), -0.1, 1, 0, 0)));
	}
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, M44$array_0$LM44$(mvMat));
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

Poi.draw$LPoi$LM44$LM44$ = Poi$draw$LPoi$LM44$LM44$;

function Water() {
	var gl;
	var w;
	var h;
	var framebuffer;
	var i;
	var timg;
	var y;
	var x;
	var b;
	var texture;
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

$__jsx_extend([Water], Object);
function Water$initWithGL$LWebGLRenderingContext$(gl) {
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

Water.initWithGL$LWebGLRenderingContext$ = Water$initWithGL$LWebGLRenderingContext$;

Water.prototype.destroy$ = function () {
	var gl;
	gl = Water.gl;
	gl.deleteFramebuffer(this.framebuffer);
	gl.deleteTexture(this.texturebuffer);
	gl.deleteRenderbuffer(this.depthbuffer);
	gl.deleteTexture(this.texture);
};


function Water$destroy_0$LWater$($this) {
	var gl;
	gl = Water.gl;
	gl.deleteFramebuffer($this.framebuffer);
	gl.deleteTexture($this.texturebuffer);
	gl.deleteRenderbuffer($this.depthbuffer);
	gl.deleteTexture($this.texture);
};

Water.destroy_0$LWater$ = Water$destroy_0$LWater$;

Water.prototype.step$N = function (t) {
	var gl;
	var vp;
	var tmp_vp;
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
	vp = null;
	tmp_vp = gl.getParameter(gl.VIEWPORT);
	if (tmp_vp instanceof Int32Array) {
		vp = tmp_vp;
	} else {
		vp = new Int32Array(tmp_vp);
	}
	gl.disable(gl.BLEND);
	gl.disable(gl.DEPTH_TEST);
	Water$_step_0$LWater$LWebGLProgram$(this, Water.progDisp);
	Water$_step_0$LWater$LWebGLProgram$(this, Water.progVelo);
	gl.viewport(vp[0], vp[1], vp[2], vp[3]);
	gl.enable(gl.BLEND);
	gl.enable(gl.DEPTH_TEST);
	if (this._ir > 0) {
		this._ir = 0;
	}
};


function Water$step_0$LWater$N($this, t) {
	var gl;
	var vp;
	var tmp_vp;
	var _next_step_time$0;
	if (! $this._next_step_time) {
		$this._next_step_time = t;
	}
	if (t < $this._next_step_time) {
		return;
	}
	_next_step_time$0 = $this._next_step_time += 0.02;
	if (_next_step_time$0 < t) {
		$this._next_step_time = t;
	}
	gl = Water.gl;
	vp = null;
	tmp_vp = gl.getParameter(gl.VIEWPORT);
	if (tmp_vp instanceof Int32Array) {
		vp = tmp_vp;
	} else {
		vp = new Int32Array(tmp_vp);
	}
	gl.disable(gl.BLEND);
	gl.disable(gl.DEPTH_TEST);
	Water$_step_0$LWater$LWebGLProgram$($this, Water.progDisp);
	Water$_step_0$LWater$LWebGLProgram$($this, Water.progVelo);
	gl.viewport(vp[0], vp[1], vp[2], vp[3]);
	gl.enable(gl.BLEND);
	gl.enable(gl.DEPTH_TEST);
	if ($this._ir > 0) {
		$this._ir = 0;
	}
};

Water.step_0$LWater$N = Water$step_0$LWater$N;

Water.prototype._step$LWebGLProgram$ = function (prog) {
	var gl;
	var vloc;
	var impLoc;
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
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array_0$LM44$(M44$setOrtho_0$LM44$NNNNNN(new M44(), 0, 1, 0, 1, -1, 1)));
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


function Water$_step_0$LWater$LWebGLProgram$($this, prog) {
	var gl;
	var vloc;
	var impLoc;
	var tmpTex;
	gl = Water.gl;
	vloc = gl.getAttribLocation(prog, 'vertex');
	gl.bindFramebuffer(gl.FRAMEBUFFER, $this.framebuffer);
	gl.viewport(0, 0, $this.width, $this.height);
	gl.useProgram(prog);
	impLoc = gl.getUniformLocation(prog, 'impulse');
	if (impLoc) {
		gl.uniform4f(impLoc, $this._ix, $this._iy, $this._iz, $this._ir);
	}
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array_0$LM44$(M44$setOrtho_0$LM44$NNNNNN(new M44(), 0, 1, 0, 1, -1, 1)));
	gl.uniform2f(gl.getUniformLocation(prog, 'sampleStep'), 1 / $this.width, 1 / $this.height);
	gl.bindTexture(gl.TEXTURE_2D, $this.texture);
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.vbuf);
	gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vloc);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(vloc);
	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, $this.texture, 0);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	tmpTex = $this.texturebuffer;
	$this.texturebuffer = $this.texture;
	$this.texture = tmpTex;
};

Water._step_0$LWater$LWebGLProgram$ = Water$_step_0$LWater$LWebGLProgram$;

Water.prototype.debugDraw$ = function () {
	var gl;
	var prog;
	var vloc;
	gl = Water.gl;
	prog = Water.progDisp;
	vloc = gl.getAttribLocation(prog, 'vertex');
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array_0$LM44$(M44$setOrtho_0$LM44$NNNNNN(new M44(), 0, 1, 0, 1, -1, 1)));
	gl.uniform2f(gl.getUniformLocation(prog, 'sampleStep'), 1 / this.width, 1 / this.height);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.vbuf);
	gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vloc);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(vloc);
};


function Water$debugDraw_0$LWater$($this) {
	var gl;
	var prog;
	var vloc;
	gl = Water.gl;
	prog = Water.progDisp;
	vloc = gl.getAttribLocation(prog, 'vertex');
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array_0$LM44$(M44$setOrtho_0$LM44$NNNNNN(new M44(), 0, 1, 0, 1, -1, 1)));
	gl.uniform2f(gl.getUniformLocation(prog, 'sampleStep'), 1 / $this.width, 1 / $this.height);
	gl.bindTexture(gl.TEXTURE_2D, $this.texture);
	gl.bindBuffer(gl.ARRAY_BUFFER, Water.vbuf);
	gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vloc);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.disableVertexAttribArray(vloc);
};

Water.debugDraw_0$LWater$ = Water$debugDraw_0$LWater$;

Water.prototype.draw$LM44$LM44$LWebGLTexture$NN = function (projMat, viewMat, bgTex, w, h) {
	var gl;
	var prog;
	var vloc;
	var tloc;
	gl = Water.gl;
	prog = Water.drawProg;
	vloc = gl.getAttribLocation(prog, 'vertex');
	tloc = gl.getAttribLocation(prog, 'texcoord');
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array_0$LM44$(projMat));
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, M44$array_0$LM44$(viewMat));
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


function Water$draw_0$LWater$LM44$LM44$LWebGLTexture$NN($this, projMat, viewMat, bgTex, w, h) {
	var gl;
	var prog;
	var vloc;
	var tloc;
	gl = Water.gl;
	prog = Water.drawProg;
	vloc = gl.getAttribLocation(prog, 'vertex');
	tloc = gl.getAttribLocation(prog, 'texcoord');
	gl.useProgram(prog);
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'projectionMatrix'), false, M44$array_0$LM44$(projMat));
	gl.uniformMatrix4fv(gl.getUniformLocation(prog, 'modelviewMatrix'), false, M44$array_0$LM44$(viewMat));
	gl.uniform2f(gl.getUniformLocation(prog, 'texSize'), w, h);
	gl.activeTexture(gl.TEXTURE1);
	gl.bindTexture(gl.TEXTURE_2D, $this.texture);
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

Water.draw_0$LWater$LM44$LM44$LWebGLTexture$NN = Water$draw_0$LWater$LM44$LM44$LWebGLTexture$NN;

Water.prototype.setImpulse$NNNN = function (x, y, r, z) {
	this._ix = x;
	this._iy = y;
	this._ir = r;
	this._iz = z;
};


function Water$setImpulse_0$LWater$NNNN($this, x, y, r, z) {
	$this._ix = x;
	$this._iy = y;
	$this._ir = r;
	$this._iz = z;
};

Water.setImpulse_0$LWater$NNNN = Water$setImpulse_0$LWater$NNNN;

function RenderTexture(w, h) {
	var gl;
	var framebuffer;
	var texturebuffer;
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

$__jsx_extend([RenderTexture], Object);
function RenderTexture$initWithGL$LWebGLRenderingContext$(gl) {
	RenderTexture.gl = gl;
};

RenderTexture.initWithGL$LWebGLRenderingContext$ = RenderTexture$initWithGL$LWebGLRenderingContext$;

RenderTexture.prototype.destroy$ = function () {
	var gl;
	gl = RenderTexture.gl;
	gl.deleteFramebuffer(this.framebuffer);
	gl.deleteTexture(this.texturebuffer);
	gl.deleteRenderbuffer(this.depthbuffer);
};


function RenderTexture$destroy_0$LRenderTexture$($this) {
	var gl;
	gl = RenderTexture.gl;
	gl.deleteFramebuffer($this.framebuffer);
	gl.deleteTexture($this.texturebuffer);
	gl.deleteRenderbuffer($this.depthbuffer);
};

RenderTexture.destroy_0$LRenderTexture$ = RenderTexture$destroy_0$LRenderTexture$;

RenderTexture.prototype.begin$ = function () {
	var gl;
	var tmp_vp;
	gl = RenderTexture.gl;
	this._viewport = null;
	tmp_vp = gl.getParameter(gl.VIEWPORT);
	if (tmp_vp instanceof Int32Array) {
		this._viewport = tmp_vp;
	} else {
		this._viewport = new Int32Array(tmp_vp);
	}
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
	gl.viewport(0, 0, this.width, this.height);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};


function RenderTexture$begin_0$LRenderTexture$($this) {
	var gl;
	var tmp_vp;
	gl = RenderTexture.gl;
	$this._viewport = null;
	tmp_vp = gl.getParameter(gl.VIEWPORT);
	if (tmp_vp instanceof Int32Array) {
		$this._viewport = tmp_vp;
	} else {
		$this._viewport = new Int32Array(tmp_vp);
	}
	gl.bindFramebuffer(gl.FRAMEBUFFER, $this.framebuffer);
	gl.viewport(0, 0, $this.width, $this.height);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

RenderTexture.begin_0$LRenderTexture$ = RenderTexture$begin_0$LRenderTexture$;

RenderTexture.prototype.end$ = function () {
	var gl;
	var vp;
	gl = RenderTexture.gl;
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	vp = this._viewport;
	gl.viewport(vp[0], vp[1], vp[2], vp[3]);
};


function RenderTexture$end_0$LRenderTexture$($this) {
	var gl;
	var vp;
	gl = RenderTexture.gl;
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	vp = $this._viewport;
	gl.viewport(vp[0], vp[1], vp[2], vp[3]);
};

RenderTexture.end_0$LRenderTexture$ = RenderTexture$end_0$LRenderTexture$;

RenderTexture.prototype.texture$ = function () {
	return this.texturebuffer;
};


function RenderTexture$texture_0$LRenderTexture$($this) {
	return $this.texturebuffer;
};

RenderTexture.texture_0$LRenderTexture$ = RenderTexture$texture_0$LRenderTexture$;

Game.viewDistance = 80;
Game.viewLean = 0.2;
Game.near = 2;
Game.far = 1000;
Game.fovh = 0.2;
Game.fovv = 0.2;
Game.gl = null;
$__jsx_lazy_init(Game, "projMat", function () {
	return M44$setFrustum_0$LM44$NNNNNN(new M44(), - Game.near * Game.fovh, Game.near * Game.fovh, - Game.near * Game.fovv, Game.near * Game.fovv, Game.near, Game.far);
});
$__jsx_lazy_init(Game, "viewMat", function () {
	return M44$mul_0$LM44$LM44$(M44$setTranslation_0$LM44$NNN(new M44(), 0, 0, - Game.viewDistance), M44$setRotationX_0$LM44$N(new M44(), - Game.viewLean));
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
var js = { global: function () { return this; }() };
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
	"system:lib/built-in.jsx": {
		g_StopIteration: g_StopIteration,
		g_StopIteration$: g_StopIteration
	},
	"./game.jsx": {
		_Main: _Main,
		_Main$: _Main,
		Game: Game,
		Game$: Game,
		NumberUtil: NumberUtil,
		NumberUtil$: NumberUtil
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle
	},
	"webgl-util.jsx": {
		Util: Util,
		Util$: Util
	},
	"mvq.jsx": {
		MVQ: MVQ,
		MVQ$: MVQ,
		V2: V2,
		V2$: V2,
		V2$LV2$: V2$0,
		V2$AN: V2$1,
		V2$LFloat32Array$: V2$2,
		V2$NN: V2$3,
		V2$LV3$: V2$4,
		V2$LV4$: V2$5,
		V3: V3,
		V3$: V3,
		V3$LV3$: V3$0,
		V3$AN: V3$1,
		V3$LFloat32Array$: V3$2,
		V3$NNN: V3$3,
		V3$LV2$N: V3$4,
		V3$LV4$: V3$5,
		V4: V4,
		V4$: V4,
		V4$LV4$: V4$0,
		V4$AN: V4$1,
		V4$LFloat32Array$: V4$2,
		V4$NNNN: V4$3,
		V4$LV2$NN: V4$4,
		V4$LV3$N: V4$5,
		M22: M22,
		M22$: M22,
		M22$LM22$: M22$0,
		M22$AN: M22$1,
		M22$LFloat32Array$: M22$2,
		M22$NNNN: M22$3,
		M22$LV2$LV2$: M22$4,
		M22$N: M22$5,
		M22$LM33$: M22$6,
		M22$LM44$: M22$7,
		M33: M33,
		M33$: M33,
		M33$LM33$: M33$0,
		M33$AN: M33$1,
		M33$LFloat32Array$: M33$2,
		M33$NNNNNNNNN: M33$3,
		M33$LV3$LV3$LV3$: M33$4,
		M33$N: M33$5,
		M33$LM22$N: M33$6,
		M33$LM44$: M33$7,
		M44: M44,
		M44$: M44,
		M44$LM44$: M44$0,
		M44$AN: M44$1,
		M44$LFloat32Array$: M44$2,
		M44$NNNNNNNNNNNNNNNN: M44$3,
		M44$LV4$LV4$LV4$LV4$: M44$4,
		M44$N: M44$5,
		M44$LM22$NN: M44$6,
		M44$LM33$N: M44$7,
		Quat: Quat,
		Quat$: Quat,
		Quat$LQuat$: Quat$0,
		Quat$AN: Quat$1,
		Quat$LFloat32Array$: Quat$2,
		Quat$NNNN: Quat$3,
		_Main: _Main$0,
		_Main$: _Main$0
	},
	"kingyo.jsx": {
		_Part: _Part,
		_Part$: _Part,
		Kingyo: Kingyo,
		Kingyo$: Kingyo
	},
	"poi.jsx": {
		Poi: Poi,
		Poi$: Poi
	},
	"water.jsx": {
		Water: Water,
		Water$: Water
	},
	"rendertexture.jsx": {
		RenderTexture: RenderTexture,
		RenderTexture$II: RenderTexture
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	if (! module) return;

	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("./game.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);
