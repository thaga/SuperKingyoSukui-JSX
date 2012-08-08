import 'js/web.jsx';

class MVQ {
	static const EQUAL_EPSILON = 0.000001;
}

class V2 {
	var _ = new Float32Array(2);
	function array() : Float32Array {return this._;}

	// constructors
	function constructor() {} // nop
	function constructor(v:V2) {this.set(v);} // copy constructor
	function constructor(v:number[]) {this.set(v);} // from array
	function constructor(v:Float32Array) {this.set(v);} // from typedarray
	function constructor(x:number, y:number) {this.set(x, y);} // from elements

	// dim conversion
	function constructor(v:V3) {this.set(v);}
	function constructor(v:V4) {this.set(v);}
	function v3(z:number) : V3 {return new V3(this, z);}
	function v4(z:number, w:number) : V4 {return new V4(this, z, w);}
	function set(v:V3): V2 {return this.set(v._[0], v._[1]);}
	function set(v:V4): V2 {return this.set(v._[0], v._[1]);}

	function clone() : V2 {return new V2(this);}
	function clear() : V2 {return this.set(0, 0);}

	function set(x:number, y:number) : V2 {
		this._[0] = x; this._[1] = y;
		return this;
	}
	function set(v:V2): V2 {this._.set(v._); return this;}
	function set(v:number[]) : V2 {this._.set(v); return this;}
	function set(v:Float32Array) : V2 {this._.set(v); return this;}

	function x() : number {return this._[0];}
	function y() : number {return this._[1];}
	function x(val:number) : V2 {this._[0] = val; return this;}
	function y(val:number) : V2 {this._[1] = val; return this;}

	function equals(v:V2) : boolean {
		return this.equals(v, MVQ.EQUAL_EPSILON);
	}
	function equals(v:V2, eps:number) : boolean {
		return
			Math.abs(v._[0] - this._[0]) < eps &&
			Math.abs(v._[1] - this._[1]) < eps;
	}

	function add(x:number, y:number) : V2 {
		this._[0] += x; this._[1] += y;
		return this;
	}
	function add(v:V2): V2 {return this.add(v._[0], v._[1]);}
	function add(v:number[]) : V2 {return this.add(v[0], v[1]);}
	function add(v:Float32Array) : V2 {return this.add(v[0], v[1]);}

	function sub(x:number, y:number) : V2 {
		this._[0] -= x; this._[1] -= y;
		return this;
	}
	function sub(v:V2): V2 {return this.sub(v._[0], v._[1]);}
	function sub(v:number[]) : V2 {return this.sub(v[0], v[1]);}
	function sub(v:Float32Array) : V2 {return this.sub(v[0], v[1]);}

	function mul(x:number, y:number) : V2 {
		this._[0] *= x; this._[1] *= y;
		return this;
	}
	function mul(v:V2): V2 {return this.mul(v._[0], v._[1]);}
	function mul(v:number[]) : V2 {return this.mul(v[0], v[1]);}
	function mul(v:Float32Array) : V2 {return this.mul(v[0], v[1]);}

	function mul(s:number) : V2 {
		this._[0] *= s;
		this._[1] *= s;
		return this;
	}

	function neg() : V2 {
		return this.mul(-1);
	}

	function normalize() : V2 {
		var l = this.len();
		if (l > 0) {
			return this.mul(1 / l);
		} else {
			return this;
		}
	}

	function cross(v:V2) : number {
		return this._[0] * v._[1] - v._[0] * this._[1];
	}

	function dot(v:V2) : number {
	    return this._[0] * v._[0] + this._[1] * v._[1];
	}

	function len() : number {
		return Math.sqrt(this.len2());
	}

	function len2() : number {
		var x = this._[0], y = this._[1];
		return x*x+y*y;
	}

	function dist(v:V2) : number {
		return Math.sqrt(this.dist2(v));
	}

	function dist2(v:V2) : number {
		var x = v._[0] - this._[0];
		var y = v._[1] - this._[1];
		return x*x+y*y;
	}

	function lerp(v0:V2, v1:V2, ratio:number) : V2 {
		this._[0] = v0._[0] + ratio * (v1._[0] - v0._[0]);
		this._[1] = v0._[1] + ratio * (v1._[1] - v0._[1]);
		return this;
	}

	function transformBy(m:M22) : V2 {
		var a = this.array(), t = m.array();
		var x = a[0], y = a[1];
		a[0] = t[0] * x + t[2] * y;
		a[1] = t[1] * x + t[3] * y;
		return this;
	}
	function transformBy(m:M33) : V2 {
		var a = this.array(), t = m.array();
		var x = a[0], y = a[1];
		a[0] = t[0] * x + t[3] * y + t[6];
		a[1] = t[1] * x + t[4] * y + t[7];
		return this;
	}
}

class V3 {
	var _ = new Float32Array(3);
	function array() : Float32Array {return this._;}

	// constructors
	function constructor() {} // nop
	function constructor(v:V3) {this.set(v);} // copy constructor
	function constructor(v:number[]) {this.set(v);} // from array
	function constructor(v:Float32Array) {this.set(v);} // from typedarray
	function constructor(x:number, y:number, z:number) {this.set(x, y, z);} // from elements

	// dim conversion
	function constructor(v:V2, z:number) {this.set(v, z);}
	function constructor(v:V4) {this.set(v);}
	function v2() : V2 {return new V2(this);}
	function v4(w:number) : V4 {return new V4(this, w);}
	function set(v:V2, z:number): V3 {return this.set(v._[0], v._[1], z);}
	function set(v:V4): V3 {return this.set(v._[0], v._[1], v._[2]);}

	function clone() : V3 {return new V3(this);}
	function clear() : V3 {return this.set(0, 0, 0);}

	function set(x:number, y:number, z:number) : V3 {
		this._[0] = x; this._[1] = y; this._[2] = z;
		return this;
	}
	function set(v:V3): V3 {this._.set(v._); return this;}
	function set(v:number[]) : V3 {this._.set(v); return this;}
	function set(v:Float32Array) : V3 {this._.set(v); return this;}

	function x() : number {return this._[0];}
	function y() : number {return this._[1];}
	function z() : number {return this._[2];}
	function x(val:number) : V3 {this._[0] = val; return this;}
	function y(val:number) : V3 {this._[1] = val; return this;}
	function z(val:number) : V3 {this._[2] = val; return this;}

	function equals(v:V3) : boolean {
		return this.equals(v, MVQ.EQUAL_EPSILON);
	}
	function equals(v:V3, eps:number) : boolean {
		return
			Math.abs(v._[0] - this._[0]) < eps &&
			Math.abs(v._[1] - this._[1]) < eps &&
			Math.abs(v._[2] - this._[2]) < eps;
	}

	function add(x:number, y:number, z:number) : V3 {
		this._[0] += x; this._[1] += y; this._[2] += z;
		return this;
	}
	function add(v:V3): V3 {return this.add(v._[0], v._[1], v._[2]);}
	function add(v:number[]) : V3 {return this.add(v[0], v[1], v[2]);}
	function add(v:Float32Array) : V3 {return this.add(v[0], v[1], v[2]);}

	function sub(x:number, y:number, z:number) : V3 {
		this._[0] -= x; this._[1] -= y; this._[2] -= z;
		return this;
	}
	function sub(v:V3): V3 {return this.sub(v._[0], v._[1], v._[2]);}
	function sub(v:number[]) : V3 {return this.sub(v[0], v[1], v[2]);}
	function sub(v:Float32Array) : V3 {return this.sub(v[0], v[1], v[2]);}

	function mul(x:number, y:number, z:number) : V3 {
		this._[0] *= x; this._[1] *= y; this._[2] *= z;
		return this;
	}
	function mul(v:V3): V3 {return this.mul(v._[0], v._[1], v._[2]);}
	function mul(v:number[]) : V3 {return this.mul(v[0], v[1], v[2]);}
	function mul(v:Float32Array) : V3 {return this.mul(v[0], v[1], v[2]);}

	function mul(s:number) : V3 {
		this._[0] *= s;
		this._[1] *= s;
		this._[2] *= s;
		return this;
	}

	function neg() : V3 {
		return this.mul(-1);
	}

	function normalize() : V3 {
		var l = this.len();
		if (l > 0) {
			return this.mul(1 / l);
		} else {
			return this;
		}
	}

	function cross(v0:V3, v1:V3) : V3 {
		var x0 = v0._[0], y0 = v0._[1], z0 = v0._[2];
		var x1 = v1._[0], y1 = v1._[1], z1 = v1._[2];
		this._[0] = y0 * z1 - z0 * y1;
		this._[1] = z0 * x1 - x0 * z1;
		this._[2] = x0 * y1 - y0 * x1;
		return this;
	}

	function dot(v:V3) : number {
	    return this._[0] * v._[0] + this._[1] * v._[1] + this._[2] * v._[2];
	}

	function len() : number {
		return Math.sqrt(this.len2());
	}

	function len2() : number {
		var x = this._[0], y = this._[1], z = this._[2];
		return x*x+y*y+z*z;
	}

	function dist(v:V3) : number {
		return Math.sqrt(this.dist2(v));
	}

	function dist2(v:V3) : number {
		var x = v._[0] - this._[0];
		var y = v._[1] - this._[1];
		var z = v._[2] - this._[2];
		return x*x+y*y+z*z;
	}

	function lerp(v0:V3, v1:V3, ratio:number) : V3 {
		this._[0] = v0._[0] + ratio * (v1._[0] - v0._[0]);
		this._[1] = v0._[1] + ratio * (v1._[1] - v0._[1]);
		this._[2] = v0._[2] + ratio * (v1._[2] - v0._[2]);
		return this;
	}

	function transformBy(m:M33) : V3 {
		var a = this.array(), t = m.array();
		var x = a[0], y = a[1], z = a[2];
		a[0] = t[0] * x + t[3] * y + t[6] * z;
		a[1] = t[1] * x + t[4] * y + t[7] * z;
		a[2] = t[2] * x + t[5] * y + t[8] * z;
		return this;
	}
	function transformBy(m:M44) : V3 {
		var a = this.array(), t = m.array();
		var x = a[0], y = a[1], z = a[2];
		a[0] = t[0] * x + t[4] * y + t[8] * z + t[12];
		a[1] = t[1] * x + t[5] * y + t[9] * z + t[13];
		a[2] = t[2] * x + t[6] * y + t[10] * z + t[14];
		return this;
	}
}

class V4 {
	var _ = new Float32Array(4);
	function array() : Float32Array {return this._;}

	// constructors
	function constructor() {} // nop
	function constructor(v:V4) {this.set(v);} // copy constructor
	function constructor(v:number[]) {this.set(v);} // from array
	function constructor(v:Float32Array) {this.set(v);} // from typedarray
	function constructor(x:number, y:number, z:number, w:number) {this.set(x, y, z, w);} // from elements

	// dim conversion
	function constructor(v:V2, z:number, w:number) {this.set(v, z, w);}
	function constructor(v:V3, w:number) {this.set(v, w);}
	function v2() : V2 {return new V2(this);}
	function v3() : V3 {return new V3(this);}
	function set(v:V2, z:number, w:number): V4 {return this.set(v._[0], v._[1], z, w);}
	function set(v:V3, w:number): V4 {return this.set(v._[0], v._[1], v._[2], w);}

	function clone() : V4 {return new V4(this);}
	function clear() : V4 {return this.set(0, 0, 0, 0);}

	function set(x:number, y:number, z:number, w:number) : V4 {
		this._[0] = x; this._[1] = y; this._[2] = z; this._[3] = w;
		return this;
	}
	function set(v:V4): V4 {this._.set(v._); return this;}
	function set(v:number[]) : V4 {this._.set(v); return this;}
	function set(v:Float32Array) : V4 {this._.set(v); return this;}

	function x() : number {return this._[0];}
	function y() : number {return this._[1];}
	function z() : number {return this._[2];}
	function w() : number {return this._[3];}
	function x(val:number) : V4 {this._[0] = val; return this;}
	function y(val:number) : V4 {this._[1] = val; return this;}
	function z(val:number) : V4 {this._[2] = val; return this;}
	function w(val:number) : V4 {this._[3] = val; return this;}

	function equals(v:V4) : boolean {
		return this.equals(v, MVQ.EQUAL_EPSILON);
	}
	function equals(v:V4, eps:number) : boolean {
		return
			Math.abs(v._[0] - this._[0]) < eps &&
			Math.abs(v._[1] - this._[1]) < eps &&
			Math.abs(v._[2] - this._[2]) < eps &&
			Math.abs(v._[3] - this._[3]) < eps;
	}

	function add(x:number, y:number, z:number, w:number) : V4 {
		this._[0] += x; this._[1] += y; this._[2] += z; this._[3] += w;
		return this;
	}
	function add(v:V4): V4 {return this.add(v._[0], v._[1], v._[2], v._[3]);}
	function add(v:number[]) : V4 {return this.add(v[0], v[1], v[2], v[3]);}
	function add(v:Float32Array) : V4 {return this.add(v[0], v[1], v[2], v[3]);}

	function sub(x:number, y:number, z:number, w:number) : V4 {
		this._[0] -= x; this._[1] -= y; this._[2] -= z; this._[3] -= w;
		return this;
	}
	function sub(v:V4): V4 {return this.sub(v._[0], v._[1], v._[2], v._[3]);}
	function sub(v:number[]) : V4 {return this.sub(v[0], v[1], v[2], v[3]);}
	function sub(v:Float32Array) : V4 {return this.sub(v[0], v[1], v[2], v[3]);}

	function mul(x:number, y:number, z:number, w:number) : V4 {
		this._[0] *= x; this._[1] *= y; this._[2] *= z; this._[3] *= w;
		return this;
	}
	function mul(v:V4): V4 {return this.mul(v._[0], v._[1], v._[2], v._[3]);}
	function mul(v:number[]) : V4 {return this.mul(v[0], v[1], v[2], v[3]);}
	function mul(v:Float32Array) : V4 {return this.mul(v[0], v[1], v[2], v[3]);}

	function mul(s:number) : V4 {
		this._[0] *= s;
		this._[1] *= s;
		this._[2] *= s;
		this._[3] *= s;
		return this;
	}

	function neg() : V4 {
		return this.mul(-1);
	}

	function normalize() : V4 {
		var l = this.len();
		if (l > 0) {
			return this.mul(1 / l);
		} else {
			return this;
		}
	}

	function dot(v:V4) : number {
	    return this._[0] * v._[0] + this._[1] * v._[1] + this._[2] * v._[2] + this._[3] * v._[3];
	}

	function len() : number {
		return Math.sqrt(this.len2());
	}

	function len2() : number {
		var x = this._[0], y = this._[1], z = this._[2], w = this._[3];
		return x*x+y*y+z*z+w*w;
	}

	function dist(v:V4) : number {
		return Math.sqrt(this.dist2(v));
	}

	function dist2(v:V4) : number {
		var x = v._[0] - this._[0];
		var y = v._[1] - this._[1];
		var z = v._[2] - this._[2];
		var w = v._[3] - this._[3];
		return x*x+y*y+z*z+w*w;
	}

	function lerp(v0:V4, v1:V4, ratio:number) : V4 {
		this._[0] = v0._[0] + ratio * (v1._[0] - v0._[0]);
		this._[1] = v0._[1] + ratio * (v1._[1] - v0._[1]);
		this._[2] = v0._[2] + ratio * (v1._[2] - v0._[2]);
		this._[3] = v0._[3] + ratio * (v1._[3] - v0._[3]);
		return this;
	}

	function transformBy(m:M44) : V4 {
		var a = this.array(), t = m.array();
		var x = a[0], y = a[1], z = a[2], w = a[3];
		a[0] = t[0] * x + t[4] * y + t[8] * z + t[12] * w;
		a[1] = t[1] * x + t[5] * y + t[9] * z + t[13] * w;
		a[2] = t[2] * x + t[6] * y + t[10] * z + t[14] * w;
		a[3] = t[3] * x + t[7] * y + t[11] * z + t[15] * w;
		return this;
	}
}

class M22 {
	static const ROWS = 2;
	static const COLS = 2;
	static const ELEMS = M22.ROWS * M22.COLS;

	var _ = new Float32Array(M22.ELEMS); // column-major
	function array() : Float32Array {return this._;}

	// constructors
	function constructor() {} // nop
	function constructor(m:M22) {this.set(m);} // copy constructor
	function constructor(m:number[]) {this.set(m);} // from array(column-major)
	function constructor(m:Float32Array) {this.set(m);} // from typedarray(column-major)
	function constructor( // from elements(row-major parameters)
		m00:number, m01:number,
		m10:number, m11:number
	) {
		var a = this.array();
		a[0] = m00; a[1] = m10;
		a[2] = m01; a[3] = m11;
	}
	function constructor(v0:V2, v1:V2) {this.set(v0,v1);} // from vectors

	// dim conversion
	function constructor(m:M33) {this.set(m);}
	function constructor(m:M44) {this.set(m);}
	function m33(m22:number) : M33 {return new M33(this, m22);}
	function m44(m22:number, m33:number) : M44 {return new M44(this, m22, m33);}
	function set(m:M33) : M22 {
		var a = this.array(), b =  m.array();
		a[0] = b[0]; a[1] = b[1]; a[2] = b[3]; a[3] = b[4];
		return this;
	}
	function set(m:M44) : M22 {
		var a = this.array(), b =  m.array();
		a[0] = b[0]; a[1] = b[1]; a[2] = b[4]; a[3] = b[5];
		return this;
	}

	function clone() : M22 {return new M22(this);}

	function setZero() : M22 {var a=this.array();for(var i=0;i<M22.ELEMS;++i)a[i]=0;return this;}
	function setIdentity() : M22 {var a=this.array();for(var i=0;i<M22.ELEMS;++i)a[i]=i%(M22.ROWS+1)==0?1:0;return this;}

	function set( // (row-major parameters)
		m00:number, m01:number,
		m10:number, m11:number
	) : M22 {
		var a = this.array();
		a[0] = m00; a[1] = m10;
		a[2] = m01; a[3] = m11;
		return this;
	}
	function set(v0:V2, v1:V2) : M22 {
		this._.set(v0._, 0);
		this._.set(v1._, 2);
		return this;
	}
	function set(m:M22): M22 {this._.set(m._); return this;}
	function set(m:number[]) : M22 {this._.set(m); return this;}
	function set(m:Float32Array) : M22 {this._.set(m); return this;}
	function set(m:number[], offs:number) : M22 {this._.set(m, offs); return this;}
	function set(m:Float32Array, offs:number) : M22 {this._.set(m, offs); return this;}

	function equals(m:M22) : boolean {
		return this.equals(m, MVQ.EQUAL_EPSILON);
	}
	function equals(m:M22, eps:number) : boolean {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M22.ELEMS; ++i) if (Math.abs(b[i] - a[i]) >= eps) return false;
		return true;
	}

	function add(m:M22) : M22 {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M22.ELEMS; ++i) a[i] += b[i];
		return this;
	}
	function sub(m:M22) : M22 {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M22.ELEMS; ++i) a[i] -= b[i];
		return this;
	}
	function mul(m:M22) : M22 {
		return this.mul(this, m);
	}
	function mul(m0:M22, m1:M22) : M22 {
		var a = m0.array();
		var a00=a[0], a10=a[1];
		var a01=a[2], a11=a[3];
		var b = m1.array();
		var b00=b[0], b10=b[1];
		var b01=b[2], b11=b[3];
		a[0] = a00*b00 + a01*b10;
		a[1] = a10*b00 + a11*b10;
		a[2] = a00*b01 + a01*b11;
		a[3] = a10*b01 + a11*b11;
		return this;
	}

	function transpose() : M22 {
		var a = this.array();
		var a10 = a[1];
		a[1] = a[2];
		a[2] = a10;
		return this;
	}
	function transpose(m:M22) : M22 {
		var a = this.array(), b = m.array();
		a[0] = b[0];
		a[1] = b[2];
		a[2] = b[1];
		a[3] = b[3];
		return this;
	}

	function det() : number {
		var a = this.array();
		return a[0]*a[3] - a[1]*a[2];
	}

	function inverse() : M22 {
		var a = this.array();
		var a00 = a[0], a10 = a[1], a01 = a[2], a11 = a[3];
		var d = a00*a11 - a10*a01;
		if (d == 0) return null;
		var invDet = 1 / d;
		a[0] = a11 * invDet;
		a[1] = -a10 * invDet;
		a[2] = -a01 * invDet;
		a[3] = a00 * invDet;
		return this;
	}

	function setScale(s:number) : M22 {return this.setScale(s, s);}
	function setScale(x:number, y:number) : M22 {
		this._[0] = x;
		this._[1] = this._[2] = 0;
		this._[3] = y;
		return this;
	}
	function setScale(v:V2) : M22 {return this.setScale(v._[0], v._[1]);}
	function setScale(v:number[]) : M22 {return this.setScale(v[0], v[1]);}
	function setScale(v:Float32Array) : M22 {return this.setScale(v[0], v[1]);}

	function setRotate(rad:number) : M22 {
		var a = this.array();
		var c = Math.cos(rad), s = Math.sin(rad);
		a[0] = c;
		a[1] = s;
		a[2] = -s;
		a[3] = c;
		return this;
	}
}

class M33 {
	static const ROWS = 3;
	static const COLS = 3;
	static const ELEMS = M33.ROWS * M33.COLS;

	var _ = new Float32Array(M33.ELEMS); // column-major
	function array() : Float32Array {return this._;}

	// constructors
	function constructor() {} // nop
	function constructor(m:M33) {this.set(m);} // copy constructor
	function constructor(m:number[]) {this.set(m);} // from array(column-major)
	function constructor(m:Float32Array) {this.set(m);} // from typedarray(column-major)
	function constructor( // from elements(row-major parameters)
		m00:number, m01:number, m02:number,
		m10:number, m11:number, m12:number,
		m20:number, m21:number, m22:number
	) {
		var a = this.array();
		a[0] = m00; a[1] = m10; a[2] = m20;
		a[3] = m01; a[4] = m11; a[5] = m21;
		a[5] = m02; a[7] = m12; a[8] = m22;
	}
	function constructor(v0:V3, v1:V3, v2:V3) {this.set(v0,v1,v2);} // from vectors

	// dim conversion
	function constructor(m:M22, m22:number) {this.set(m, m22);}
	function constructor(m:M44) {this.set(m);}
	function m22() : M22 {return new M22(this);}
	function m44(m33:number) : M44 {return new M44(this, m33);}
	function set(m:M22, m22:number) : M33 {
		var a = this.array(), b =  m.array();
		a[0] = b[0]; a[1] = b[1]; a[2] = 0;
		a[3] = b[2]; a[4] = b[3]; a[5] = 0;
		a[6] = 0; a[7] = 0; a[8] = m22;
		return this;
	}
	function set(m:M44) : M33 {
		var a = this.array(), b =  m.array();
		a[0] = b[0]; a[1] = b[1]; a[2] = b[2];
		a[3] = b[4]; a[4] = b[5]; a[5] = b[6];
		a[6] = b[8]; a[7] = b[9]; a[8] = b[10];
		return this;
	}

	function clone() : M33 {return new M33(this);}

	function setZero() : M33 {var a=this.array();for(var i=0;i<M33.ELEMS;++i)a[i]=0;return this;}
	function setIdentity() : M33 {var a=this.array();for(var i=0;i<M33.ELEMS;++i)a[i]=i%(M33.ROWS+1)==0?1:0;return this;}

	function set( // (row-major parameters)
		m00:number, m01:number, m02:number,
		m10:number, m11:number, m12:number,
		m20:number, m21:number, m22:number
	) : M33 {
		var a = this.array();
		a[0] = m00; a[1] = m10; a[2] = m20;
		a[3] = m01; a[4] = m11; a[5] = m21;
		a[6] = m02; a[7] = m12; a[8] = m22;
		return this;
	}
	function set(v0:V3, v1:V3, v2:V3) : M33 {
		this._.set(v0._, 0);
		this._.set(v1._, 3);
		this._.set(v2._, 6);
		return this;
	}
	function set(m:M33): M33 {this._.set(m._); return this;}
	function set(m:number[]) : M33 {this._.set(m); return this;}
	function set(m:Float32Array) : M33 {this._.set(m); return this;}
	function set(m:number[], offs:number) : M33 {this._.set(m, offs); return this;}
	function set(m:Float32Array, offs:number) : M33 {this._.set(m, offs); return this;}

	function equals(m:M33) : boolean {
		return this.equals(m, MVQ.EQUAL_EPSILON);
	}
	function equals(m:M33, eps:number) : boolean {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M33.ELEMS; ++i) if (Math.abs(b[i] - a[i]) >= eps) return false;
		return true;
	}

	function add(m:M33) : M33 {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M33.ELEMS; ++i) a[i] += b[i];
		return this;
	}
	function sub(m:M33) : M33 {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M33.ELEMS; ++i) a[i] -= b[i];
		return this;
	}
	function mul(m:M33) : M33 {
		return this.mul(this, m);
	}
	function mul(m0:M33, m1:M33) : M33 {
		var a = m0.array();
		var a00=a[0], a10=a[1], a20=a[2];
		var a01=a[3], a11=a[4], a21=a[5];
		var a02=a[6], a12=a[7], a22=a[8];
		var b = m1.array();
		var b00=b[0], b10=b[1], b20=b[2];
		var b01=b[3], b11=b[4], b21=b[5];
		var b02=b[6], b12=b[7], b22=b[8];
		a[0] = a00*b00 + a01*b10 + a02*b20;
		a[1] = a10*b00 + a11*b10 + a12*b20;
		a[2] = a20*b00 + a21*b10 + a22*b20;
		a[3] = a00*b01 + a01*b11 + a02*b21;
		a[4] = a10*b01 + a11*b11 + a12*b21;
		a[5] = a20*b01 + a21*b11 + a22*b21;
		a[6] = a00*b02 + a01*b12 + a02*b22;
		a[7] = a10*b02 + a11*b12 + a12*b22;
		a[8] = a20*b02 + a21*b12 + a22*b22;
		return this;
	}

	function transpose() : M33 {
		var a = this.array();
		var a10 = a[1], a20 = a[2], a21 = a[5];
		a[1] = a[3];
		a[2] = a[6];
		a[3] = a10;
		a[5] = a[7];
		a[6] = a20;
		a[7] = a21;
		return this;
	}
	function transpose(m:M33) : M33 {
		var a = this.array(), b = m.array();
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
	}

	function det() : number {
		var a = this.array();
		var a00 = a[0], a01 = a[1], a02 = a[2];
		var a10 = a[3], a11 = a[4], a12 = a[5];
		var a20 = a[6], a21 = a[7], a22 = a[8];
		return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	}

	function inverse() : M33 {
		var a = this.array();
		var a00 = a[0], a01 = a[1], a02 = a[2];
		var a10 = a[3], a11 = a[4], a12 = a[5];
		var a20 = a[6], a21 = a[7], a22 = a[8];
		var b01 = a22 * a11 - a12 * a21;
		var b11 = -a22 * a10 + a12 * a20;
		var b21 = a21 * a10 - a11 * a20;
		
		var d = a00 * b01 + a01 * b11 + a02 * b21;
		if (d == 0) return null;
		
		var invDet = 1 / d;
		
		a[0] = b01 * invDet;
		a[1] = (-a22 * a01 + a02 * a21) * invDet;
		a[2] = (a12 * a01 - a02 * a11) * invDet;
		a[3] = b11 * invDet;
		a[4] = (a22 * a00 - a02 * a20) * invDet;
		a[5] = (-a12 * a00 + a02 * a10) * invDet;
		a[6] = b21 * invDet;
		a[7] = (-a21 * a00 + a01 * a20) * invDet;
		a[8] = (a11 * a00 - a01 * a10) * invDet;

		return this;
	}

	function setScale(s:number) : M33 {return this.setScale(s, s, s);}
	function setScale(x:number, y:number, z:number) : M33 {
		this.setZero();
		this._[0] = x;
		this._[4] = y;
		this._[8] = z;
		return this;
	}
	function setScale(v:V3) : M33 {return this.setScale(v._[0], v._[1], v._[2]);}
	function setScale(v:number[]) : M33 {return this.setScale(v[0], v[1], v[2]);}
	function setScale(v:Float32Array) : M33 {return this.setScale(v[0], v[1], v[2]);}

	function setRotate(rad:number, x:number, y:number, z:number) : M33 {
		var l = Math.sqrt(x*x+y*y+z*z);
		if (l == 0) return null;
		var il = 1 / l;
		x *= il;
		y *= il;
		z *= il;
		var a = this.array();
		var c = Math.cos(rad), s = Math.sin(rad);
		var _c = 1-c;
		a[0] = x*x*_c+c;
		a[1] = y*x*_c+z*s;
		a[2] = x*z*_c-y*s;
		a[3] = x*y*_c-z*s;
		a[4] = y*y*_c+c;
		a[5] = y*z*_c+x*s;
		a[6] = x*z*_c+y*s;
		a[7] = y*z*_c-x*s;
		a[8] = z*z*_c+c;
		return this;
	}
	function setRotate(rad:number, a:V3) : M33 {return this.setRotate(rad, a._[0], a._[1], a._[2]);}
	function setRotate(rad:number, a:number[]) : M33 {return this.setRotate(rad, a[0], a[1], a[2]);}
	function setRotate(rad:number, a:Float32Array) : M33 {return this.setRotate(rad, a[0], a[1], a[2]);}

	function setRotateX(rad:number) :M33 {return this.setRotate(rad, 1,0,0);}
	function setRotateY(rad:number) :M33 {return this.setRotate(rad, 0,1,0);}
	function setRotateZ(rad:number) :M33 {return this.setRotate(rad, 0,0,1);}
}

class M44 {
	static const ROWS = 4;
	static const COLS = 4;
	static const ELEMS = M44.ROWS * M44.COLS;

	var _ = new Float32Array(M44.ELEMS); // column-major
	function array() : Float32Array {return this._;}

	// constructors
	function constructor() {} // nop
	function constructor(m:M44) {this.set(m);} // copy constructor
	function constructor(m:number[]) {this.set(m);} // from array(column-major)
	function constructor(m:Float32Array) {this.set(m);} // from typedarray(column-major)
	function constructor( // from elements(row-major parameters)
		m00:number, m01:number, m02:number, m03:number,
		m10:number, m11:number, m12:number, m13:number,
		m20:number, m21:number, m22:number, m23:number,
		m30:number, m31:number, m32:number, m33:number
	) {
		var a = this.array();
		a[0] = m00; a[1] = m10; a[2] = m20; a[3] = m30;
		a[4] = m01; a[5] = m11; a[6] = m21; a[7] = m31;
		a[8] = m02; a[9] = m12; a[10] = m22; a[11] = m32;
		a[12] = m03; a[13] = m13; a[14] = m23; a[15] = m33;
	}
	function constructor(v0:V4, v1:V4, v2:V4, v3:V4) {this.set(v0,v1,v2,v3);} // from vectors

	// dim conversion
	function constructor(m:M22, m22:number, m33:number) {this.set(m, m22, m33);}
	function constructor(m:M33, m33:number) {this.set(m, m33);}
	function m22() : M22 {return new M22(this);}
	function m33(m33:number) : M33 {return new M33(this);}
	function set(m:M22, m22:number, m33:number) : M44 {
		var a = this.array(), b =  m.array();
		a[0] = b[0]; a[1] = b[1]; a[2] = 0; a[3] = 0;
		a[4] = b[2]; a[5] = b[3]; a[6] = 0; a[7] = 0;
		a[8] = 0; a[9] = 0; a[10] = m22; a[11] = 0;
		a[12] = 0; a[13] = 0; a[14] = 0; a[15] = m33;
		return this;
	}
	function set(m:M33, m33:number) : M44 {
		var a = this.array(), b =  m.array();
		a[0] = b[0]; a[1] = b[1]; a[2] = b[2]; a[3] = 0;
		a[4] = b[3]; a[5] = b[4]; a[6] = b[5]; a[7] = 0;
		a[8] = b[6]; a[9] = b[7]; a[10] = b[8]; a[11] = 0;
		a[12] = 0; a[13] = 0; a[14] = 0; a[15] = m33;
		return this;
	}

	function clone() : M44 {return new M44(this);}

	function setZero() : M44 {var a=this.array();for(var i=0;i<M44.ELEMS;++i)a[i]=0;return this;}
	function setIdentity() : M44 {var a=this.array();for(var i=0;i<M44.ELEMS;++i)a[i]=i%(M44.ROWS+1)==0?1:0;return this;}

	function set( // (row-major parameters)
		m00:number, m01:number, m02:number, m03:number,
		m10:number, m11:number, m12:number, m13:number,
		m20:number, m21:number, m22:number, m23:number,
		m30:number, m31:number, m32:number, m33:number
	) : M44 {
		var a = this.array();
		a[0] = m00; a[1] = m10; a[2] = m20; a[3] = m30;
		a[4] = m01; a[5] = m11; a[6] = m21; a[7] = m31;
		a[8] = m02; a[9] = m12; a[10] = m22; a[11] = m32;
		a[12] = m03; a[13] = m13; a[14] = m23; a[15] = m33;
		return this;
	}
	function set(v0:V4, v1:V4, v2:V4, v3:V4) : M44 {
		this._.set(v0._, 0);
		this._.set(v1._, 4);
		this._.set(v2._, 8);
		this._.set(v3._, 12);
		return this;
	}
	function set(m:M44): M44 {this._.set(m._); return this;}
	function set(m:number[]) : M44 {this._.set(m); return this;}
	function set(m:Float32Array) : M44 {this._.set(m); return this;}
	function set(m:number[], offs:number) : M44 {this._.set(m, offs); return this;}
	function set(m:Float32Array, offs:number) : M44 {this._.set(m, offs); return this;}

	function equals(m:M44) : boolean {
		return this.equals(m, MVQ.EQUAL_EPSILON);
	}
	function equals(m:M44, eps:number) : boolean {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M44.ELEMS; ++i) if (Math.abs(b[i] - a[i]) >= eps) return false;
		return true;
	}

	function add(m:M44) : M44 {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M44.ELEMS; ++i) a[i] += b[i];
		return this;
	}
	function sub(m:M44) : M44 {
		var a = this.array(), b = m.array();
		for (var i = 0; i < M44.ELEMS; ++i) a[i] -= b[i];
		return this;
	}
	function mul(m:M44) : M44 {
		return this.mul(this, m);
	}
	function mul(m0:M44, m1:M44) : M44 {
		var a = m0.array();
		var a00=a[0], a10=a[1], a20=a[2], a30=a[3];
		var a01=a[4], a11=a[5], a21=a[6], a31=a[7];
		var a02=a[8], a12=a[9], a22=a[10], a32=a[11];
		var a03=a[12], a13=a[13], a23=a[14], a33=a[15];
		var b = m1.array();
		var b00=b[0], b10=b[1], b20=b[2], b30=b[3];
		var b01=b[4], b11=b[5], b21=b[6], b31=b[7];
		var b02=b[8], b12=b[9], b22=b[10], b32=b[11];
		var b03=b[12], b13=b[13], b23=b[14], b33=b[15];
		a[0] = a00*b00 + a01*b10 + a02*b20 + a03*b30;
		a[1] = a10*b00 + a11*b10 + a12*b20 + a13*b30;
		a[2] = a20*b00 + a21*b10 + a22*b20 + a23*b30;
		a[3] = a30*b00 + a31*b10 + a32*b20 + a33*b30;
		a[4] = a00*b01 + a01*b11 + a02*b21 + a03*b31;
		a[5] = a10*b01 + a11*b11 + a12*b21 + a13*b31;
		a[6] = a20*b01 + a21*b11 + a22*b21 + a23*b31;
		a[7] = a30*b01 + a31*b11 + a32*b21 + a33*b31;
		a[8] = a00*b02 + a01*b12 + a02*b22 + a03*b32;
		a[9] = a10*b02 + a11*b12 + a12*b22 + a13*b32;
		a[10] = a20*b02 + a21*b12 + a22*b22 + a23*b32;
		a[11] = a30*b02 + a31*b12 + a32*b22 + a33*b32;
		a[12] = a00*b03 + a01*b13 + a02*b23 + a03*b33;
		a[13] = a10*b03 + a11*b13 + a12*b23 + a13*b33;
		a[14] = a20*b03 + a21*b13 + a22*b23 + a23*b33;
		a[15] = a30*b03 + a31*b13 + a32*b23 + a33*b33;
		return this;
	}

	function transpose() : M44 {
		var a = this.array();
		var a10 = a[1], a20 = a[2], a30 = a[3], a21 = a[6], a31 = a[7], a32 = a[11];
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
	}
	function transpose(m:M44) : M44 {
		var a = this.array(), b = m.array();
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
	}

	function det() : number {
		var a = this.array();
		var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
		var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
		var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
		var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
		return
			a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 +
			a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 +
			a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 +
			a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 +
			a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 +
			a20 * a01 * a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33;
	}

	function inverse() : M44 {
		var a = this.array();
		var
			a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
			a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
			a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
			a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
		var
			b00 = a00 * a11 - a01 * a10,
			b01 = a00 * a12 - a02 * a10,
			b02 = a00 * a13 - a03 * a10,
			b03 = a01 * a12 - a02 * a11,
			b04 = a01 * a13 - a03 * a11,
			b05 = a02 * a13 - a03 * a12,
			b06 = a20 * a31 - a21 * a30,
			b07 = a20 * a32 - a22 * a30,
			b08 = a20 * a33 - a23 * a30,
			b09 = a21 * a32 - a22 * a31,
			b10 = a21 * a33 - a23 * a31,
			b11 = a22 * a33 - a23 * a32;

		var d = (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06);
		if (d == 0) return null;

		var invDet = 1 / d;

		a[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
		a[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
		a[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
		a[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
		a[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
		a[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
		a[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
		a[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
		a[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
		a[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
		a[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
		a[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
		a[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
		a[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
		a[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
		a[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;

		return this;
	}

	function setTranslate(x:number, y:number, z:number) : M44 {
		this.setIdentity();
		this._[12] = x;
		this._[13] = y;
		this._[14] = z;
		return this;
	}
	function setTranslate(v:V3) : M44 {return this.setTranslate(v._[0], v._[1], v._[2]);}
	function setTranslate(v:number[]) : M44 {return this.setTranslate(v[0], v[1], v[2]);}
	function setTranslate(v:Float32Array) : M44 {return this.setTranslate(v[0], v[1], v[2]);}

	function setScale(s:number) : M44 {return this.setScale(s, s, s);}
	function setScale(x:number, y:number, z:number) : M44 {
		this.setZero();
		this._[0] = x;
		this._[5] = y;
		this._[10] = z;
		this._[15] = 1;
		return this;
	}
	function setScale(v:V3) : M44 {return this.setScale(v._[0], v._[1], v._[2]);}
	function setScale(v:number[]) : M44 {return this.setScale(v[0], v[1], v[2]);}
	function setScale(v:Float32Array) : M44 {return this.setScale(v[0], v[1], v[2]);}

	function setRotate(rad:number, x:number, y:number, z:number) : M44 {
		var l = Math.sqrt(x*x+y*y+z*z);
		if (l == 0) return null;
		var il = 1 / l;
		x *= il;
		y *= il;
		z *= il;
		var a = this.array();
		var c = Math.cos(rad), s = Math.sin(rad);
		var _c = 1-c;
		a[0] = x*x*_c+c;
		a[1] = y*x*_c+z*s;
		a[2] = x*z*_c-y*s;
		a[4] = x*y*_c-z*s;
		a[5] = y*y*_c+c;
		a[6] = y*z*_c+x*s;
		a[8] = x*z*_c+y*s;
		a[9] = y*z*_c-x*s;
		a[10] = z*z*_c+c;
		a[3] = a[7] = a[11] = a[12] = a[13] = a[14]= 0;
		a[15] = 1;
		return this;
	}
	function setRotate(rad:number, a:V3) : M44 {return this.setRotate(rad, a._[0], a._[1], a._[2]);}
	function setRotate(rad:number, a:number[]) : M44 {return this.setRotate(rad, a[0], a[1], a[2]);}
	function setRotate(rad:number, a:Float32Array) : M44 {return this.setRotate(rad, a[0], a[1], a[2]);}

	function setRotateX(rad:number) :M44 {return this.setRotate(rad, 1,0,0);}
	function setRotateY(rad:number) :M44 {return this.setRotate(rad, 0,1,0);}
	function setRotateZ(rad:number) :M44 {return this.setRotate(rad, 0,0,1);}

	function setFrustum(l:number, r:number, b:number, t:number, n:number, f:number) : M44 {
		var a = this.array();
		var rl = r-l, tb = t-b, fn = f-n;
		a[0] = 2 * n / rl;
		a[5] = 2 * n / tb;
		a[8] = (r+l) / rl;
		a[9] = (t+b) / tb;
		a[10] = -(f+n) / fn;
		a[11] = -1;
		a[14] = -2*f*n / fn;
		a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[12] = a[13] = a[15] = 0;
		return this;
	}

	function setOrtho(l:number, r:number, b:number, t:number, n:number, f:number) : M44 {
		var a = this.array();
		var rl = r-l, tb = t-b, fn = f-n;
		a[0] = 2 / rl;
		a[5] = 2 / tb;
		a[10] = -2 / fn;
		a[12] = -(r+l) / rl;
		a[13] = -(t+b) / tb;
		a[14] = -(f+n) / fn;
		a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = 0;
		a[15] = 1;
		return this;
	}

	function dump() : M44 {
		var a = this.array();
		for (var i = 0; i < 4; ++i) {
			log a[i].toString() + ', ' + a[i+4].toString() + ', ' + a[i+8].toString() + ', ' + a[i+12].toString();
		}
		return this;
	}
}

class Quat {
	static const ELEMS = 4;

	var _ = new Float32Array(Quat.ELEMS);
	function array() : Float32Array {return this._;}

	// constructors
	function constructor() {} // nop
	function constructor(q:Quat) {this.set(q);} // copy constructor
	function constructor(q:number[]) {this.set(q);} // from array (q[0] + q[1]i + q[2]j + q[3]k)
	function constructor(q:Float32Array) {this.set(q);} // from typedarray (q[0] + q[1]i + q[2]j + q[3]k)
	function constructor(w:number, x:number, y:number, z:number) {this.set(w,x,y,z);}  // from elements (w + xi + yj + zk)

	function clone() : Quat {return new Quat(this);}

	function setZero() : Quat {return this.set(0, 0, 0, 0);}
	function setIdentity() : Quat {return this.set(1, 0, 0, 0);}

	function set(w:number, x:number, y:number, z:number) : Quat {
		this._[0] = w; this._[1] = x; this._[2] = y; this._[3] = z;
		return this;
	}
	function set(q:Quat) : Quat {this._.set(q._); return this;}
	function set(q:number[]) : Quat {this._.set(q); return this;}
	function set(q:Float32Array) : Quat {this._.set(q); return this;}
	function set(w:number, v:V3): Quat {return this.set(w, v._[0], v._[1], v._[2]);}

	function equals(q:Quat) : boolean {
		return this.equals(q, MVQ.EQUAL_EPSILON);
	}
	function equals(q:Quat, eps:number) : boolean {
		var a = this.array(), b = q.array();
		for (var i = 0; i < Quat.ELEMS; ++i) if (Math.abs(b[i] - a[i]) >= eps) return false;
		return true;
	}

	function dot(q:Quat) : number {
		return this._[0]*q._[0] + this._[1]*q._[1] + this._[2]*q._[2] + this._[3]*q._[3];
	}

	function inverse() : Quat {
		var a = this.array();
		var q0 = a[0], q1 = a[1], q2 = a[2], q3 = a[3];
		var dot = q0*q0 + q1*q1 + q2*q2 + q3*q3;
		if (dot == 0) return null;
		var invDot = 1 / dot;
		a[0] *= invDot;
		a[1] *= -invDot;
		a[2] *= -invDot;
		a[3] *= -invDot;
		return this;
	}

	function conjugate() : Quat {
		var a = this.array();
		a[1] *= -1;
		a[2] *= -1;
		a[3] *= -1;
		return this;
	}

	function len() : number {
		return Math.sqrt(this.len2());
	}

	function len2() : number {
		var w = this._[0], x = this._[1], y = this._[2], z = this._[3];
		return w*w + x*x + y*y + z*z;
	}

	function normalize() : Quat {
		var a = this.array();
		var w = a[0], x = a[1], y = a[2], z = a[3];
		var l = Math.sqrt(x * x + y * y + z * z + w * w);
		if (l == 0) return null;
		var il = 1 / l;
		a[0] *= il;
		a[1] *= il;
		a[2] *= il;
		a[3] *= il;
		return this;
	}

	function add(q:Quat) : Quat {
		var a = this.array(), b = q.array();
		for (var i = 0; i < Quat.ELEMS; ++i) a[i] += b[i];
		return this;
	}
	function sub(q:Quat) : Quat {
		var a = this.array(), b = q.array();
		for (var i = 0; i < Quat.ELEMS; ++i) a[i] -= b[i];
		return this;
	}
	function mul(q:Quat) : Quat {
		var a = this.array(), b = q.array();
		var  aw = a[0], ax = a[1], ay = a[2], az = a[3];
		var  bw = b[0], bx = b[1], by = b[2], bz = b[3];
		a[0] = aw * bw - ax * bx - ay * by - az * bz;
		a[1] = aw * bx + ax * bw + ay * bz - az * by;
		a[2] = aw * by - ax * bz + ay * bw + az * bx;
		a[3] = aw * bz + ax * by - ay * bx + az * bw;
		return this;
	}
	function mul(s:number) : Quat {
		var a = this.array();
		a[0] *= s;
		a[1] *= s;
		a[2] *= s;
		a[3] *= s;
		return this;
	}

	function slerp(q0:Quat, q1:Quat, slerp:number) : Quat {
		var a = q0.array(), b = q1.array(), c = this.array();
		var  aw = a[0], ax = a[1], ay = a[2], az = a[3];
		var  bw = b[0], bx = b[1], by = b[2], bz = b[3];

		var cosHalfTheta = aw*bw + ax*bx + ay*by + az*bz;
		if (Math.abs(cosHalfTheta) >= 1.0) return this;

		var halfTheta = Math.acos(cosHalfTheta);
		var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

		if (Math.abs(sinHalfTheta) < 0.001) {
			c[0] = (aw + bw) / 2;
			c[1] = (ax + bx) / 2;
			c[2] = (ay + by) / 2;
			c[3] = (az + bz) / 2;
			return this;
		}

		var ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
		var ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;

		c[0] = (aw * ratioA + bw * ratioB);
		c[1] = (ax * ratioA + bx * ratioB);
		c[2] = (ay * ratioA + by * ratioB);
		c[3] = (az * ratioA + bz * ratioB);

		return this;
	}
}

class _Main {
	static function main(args:string[]) : void {
		var v = new V3(1, 2, 3);
		var v2 = new V3(v);
		log v.dist(v2);
		var  m = new M44;
		//_Main.dump(m);
		m.set([1,2,43,5]);
		var ta = new Float32Array(5);
		ta[4] = 100;
		m.set(ta);
		//_Main.dump(m.setIdentity());

		m.setIdentity();
		m.mul(new M44.setRotateX(10));
		m = new M44.setTranslate(1, 2, 3).mul(m);
		m.mul(new M44.setScale(100));
		var im = new M44(m).inverse();
		_Main.dump(m);
		_Main.dump(im);
		var iim = new M44(m).mul(im);
		_Main.dump(iim);
		log iim.equals(new M44.setIdentity());
		_Main.dump(m.set(new V4(0,1,2,3), new V4(4,5,6,7), new V4(8,9,10,11), new V4(12,13,14,16)));

	}
	static function dump(m:M44) : void {
		for (var i = 0; i < 4; ++i) {
			log m._[i].toString() + ', ' + m._[i+4].toString() + ', ' + m._[i+8].toString() + ', ' + m._[i+12].toString();
		}
	}
}