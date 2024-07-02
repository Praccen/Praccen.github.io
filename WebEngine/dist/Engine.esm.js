var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/gl-matrix/esm/common.js
var common_exports = {};
__export(common_exports, {
  ARRAY_TYPE: () => ARRAY_TYPE,
  EPSILON: () => EPSILON,
  RANDOM: () => RANDOM,
  equals: () => equals,
  setMatrixArrayType: () => setMatrixArrayType,
  toRadian: () => toRadian
});
var EPSILON = 1e-6;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
function toRadian(a) {
  return a * degree;
}
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
}
if (!Math.hypot)
  Math.hypot = function() {
    var y = 0, i = arguments.length;
    while (i--) {
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };

// node_modules/gl-matrix/esm/mat3.js
var mat3_exports = {};
__export(mat3_exports, {
  add: () => add,
  adjoint: () => adjoint,
  clone: () => clone,
  copy: () => copy,
  create: () => create,
  determinant: () => determinant,
  equals: () => equals2,
  exactEquals: () => exactEquals,
  frob: () => frob,
  fromMat2d: () => fromMat2d,
  fromMat4: () => fromMat4,
  fromQuat: () => fromQuat,
  fromRotation: () => fromRotation,
  fromScaling: () => fromScaling,
  fromTranslation: () => fromTranslation,
  fromValues: () => fromValues,
  identity: () => identity,
  invert: () => invert,
  mul: () => mul,
  multiply: () => multiply,
  multiplyScalar: () => multiplyScalar,
  multiplyScalarAndAdd: () => multiplyScalarAndAdd,
  normalFromMat4: () => normalFromMat4,
  projection: () => projection,
  rotate: () => rotate,
  scale: () => scale,
  set: () => set,
  str: () => str,
  sub: () => sub,
  subtract: () => subtract,
  translate: () => translate,
  transpose: () => transpose
});
function create() {
  var out = new ARRAY_TYPE(9);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
function clone(a) {
  var out = new ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
function transpose(out, a) {
  if (out === a) {
    var a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }
  return out;
}
function invert(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2];
  var a10 = a[3], a11 = a[4], a12 = a[5];
  var a20 = a[6], a21 = a[7], a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;
  var det = a00 * b01 + a01 * b11 + a02 * b21;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
function adjoint(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2];
  var a10 = a[3], a11 = a[4], a12 = a[5];
  var a20 = a[6], a21 = a[7], a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
function determinant(a) {
  var a00 = a[0], a01 = a[1], a02 = a[2];
  var a10 = a[3], a11 = a[4], a12 = a[5];
  var a20 = a[6], a21 = a[7], a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
function multiply(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2];
  var a10 = a[3], a11 = a[4], a12 = a[5];
  var a20 = a[6], a21 = a[7], a22 = a[8];
  var b00 = b[0], b01 = b[1], b02 = b[2];
  var b10 = b[3], b11 = b[4], b12 = b[5];
  var b20 = b[6], b21 = b[7], b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
function translate(out, a, v) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
function rotate(out, a, rad) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
function scale(out, a, v) {
  var x = v[0], y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
function fromRotation(out, rad) {
  var s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
function fromQuat(out, q) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
function normalFromMat4(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
function multiplyScalarAndAdd(out, a, b, scale7) {
  out[0] = a[0] + b[0] * scale7;
  out[1] = a[1] + b[1] * scale7;
  out[2] = a[2] + b[2] * scale7;
  out[3] = a[3] + b[3] * scale7;
  out[4] = a[4] + b[4] * scale7;
  out[5] = a[5] + b[5] * scale7;
  out[6] = a[6] + b[6] * scale7;
  out[7] = a[7] + b[7] * scale7;
  out[8] = a[8] + b[8] * scale7;
  return out;
}
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
function equals2(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8));
}
var mul = multiply;
var sub = subtract;

// node_modules/gl-matrix/esm/mat4.js
var mat4_exports = {};
__export(mat4_exports, {
  add: () => add2,
  adjoint: () => adjoint2,
  clone: () => clone2,
  copy: () => copy2,
  create: () => create2,
  determinant: () => determinant2,
  equals: () => equals3,
  exactEquals: () => exactEquals2,
  frob: () => frob2,
  fromQuat: () => fromQuat3,
  fromQuat2: () => fromQuat2,
  fromRotation: () => fromRotation2,
  fromRotationTranslation: () => fromRotationTranslation,
  fromRotationTranslationScale: () => fromRotationTranslationScale,
  fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
  fromScaling: () => fromScaling2,
  fromTranslation: () => fromTranslation2,
  fromValues: () => fromValues2,
  fromXRotation: () => fromXRotation,
  fromYRotation: () => fromYRotation,
  fromZRotation: () => fromZRotation,
  frustum: () => frustum,
  getRotation: () => getRotation,
  getScaling: () => getScaling,
  getTranslation: () => getTranslation,
  identity: () => identity2,
  invert: () => invert2,
  lookAt: () => lookAt,
  mul: () => mul2,
  multiply: () => multiply2,
  multiplyScalar: () => multiplyScalar2,
  multiplyScalarAndAdd: () => multiplyScalarAndAdd2,
  ortho: () => ortho,
  orthoNO: () => orthoNO,
  orthoZO: () => orthoZO,
  perspective: () => perspective,
  perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
  perspectiveNO: () => perspectiveNO,
  perspectiveZO: () => perspectiveZO,
  rotate: () => rotate2,
  rotateX: () => rotateX,
  rotateY: () => rotateY,
  rotateZ: () => rotateZ,
  scale: () => scale2,
  set: () => set2,
  str: () => str2,
  sub: () => sub2,
  subtract: () => subtract2,
  targetTo: () => targetTo,
  translate: () => translate2,
  transpose: () => transpose2
});
function create2() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
function clone2(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function copy2(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function fromValues2(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function set2(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function identity2(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function transpose2(out, a) {
  if (out === a) {
    var a01 = a[1], a02 = a[2], a03 = a[3];
    var a12 = a[6], a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}
function invert2(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function adjoint2(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
function determinant2(a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply2(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
function translate2(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
function scale2(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function rotate2(out, a, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len5 = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len5 < EPSILON) {
    return null;
  }
  len5 = 1 / len5;
  x *= len5;
  y *= len5;
  z *= len5;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
function fromTranslation2(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromScaling2(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotation2(out, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len5 = Math.hypot(x, y, z);
  var s, c, t;
  if (len5 < EPSILON) {
    return null;
  }
  len5 = 1 / len5;
  x *= len5;
  y *= len5;
  z *= len5;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotationTranslation(out, q, v) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}
function fromRotationTranslationScale(out, q, v, s) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
function fromQuat3(out, q) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}
var perspective = perspectiveNO;
function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
  var xScale = 2 / (leftTan + rightTan);
  var yScale = 2 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = yScale;
  out[6] = 0;
  out[7] = 0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near / (near - far);
  out[15] = 0;
  return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
var ortho = orthoNO;
function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len5;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity2(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len5 = 1 / Math.hypot(z0, z1, z2);
  z0 *= len5;
  z1 *= len5;
  z2 *= len5;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len5 = Math.hypot(x0, x1, x2);
  if (!len5) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len5 = 1 / len5;
    x0 *= len5;
    x1 *= len5;
    x2 *= len5;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len5 = Math.hypot(y0, y1, y2);
  if (!len5) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len5 = 1 / len5;
    y0 *= len5;
    y1 *= len5;
    y2 *= len5;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
function targetTo(out, eye, target, up) {
  var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
  var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
  var len5 = z0 * z0 + z1 * z1 + z2 * z2;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
    z0 *= len5;
    z1 *= len5;
    z2 *= len5;
  }
  var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
  len5 = x0 * x0 + x1 * x1 + x2 * x2;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
    x0 *= len5;
    x1 *= len5;
    x2 *= len5;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
function str2(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob2(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add2(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
function subtract2(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
function multiplyScalar2(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
function multiplyScalarAndAdd2(out, a, b, scale7) {
  out[0] = a[0] + b[0] * scale7;
  out[1] = a[1] + b[1] * scale7;
  out[2] = a[2] + b[2] * scale7;
  out[3] = a[3] + b[3] * scale7;
  out[4] = a[4] + b[4] * scale7;
  out[5] = a[5] + b[5] * scale7;
  out[6] = a[6] + b[6] * scale7;
  out[7] = a[7] + b[7] * scale7;
  out[8] = a[8] + b[8] * scale7;
  out[9] = a[9] + b[9] * scale7;
  out[10] = a[10] + b[10] * scale7;
  out[11] = a[11] + b[11] * scale7;
  out[12] = a[12] + b[12] * scale7;
  out[13] = a[13] + b[13] * scale7;
  out[14] = a[14] + b[14] * scale7;
  out[15] = a[15] + b[15] * scale7;
  return out;
}
function exactEquals2(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals3(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
  var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
  var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
  var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
  var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
}
var mul2 = multiply2;
var sub2 = subtract2;

// node_modules/gl-matrix/esm/quat.js
var quat_exports = {};
__export(quat_exports, {
  add: () => add5,
  calculateW: () => calculateW,
  clone: () => clone5,
  conjugate: () => conjugate,
  copy: () => copy5,
  create: () => create5,
  dot: () => dot3,
  equals: () => equals6,
  exactEquals: () => exactEquals5,
  exp: () => exp,
  fromEuler: () => fromEuler,
  fromMat3: () => fromMat3,
  fromValues: () => fromValues5,
  getAngle: () => getAngle,
  getAxisAngle: () => getAxisAngle,
  identity: () => identity3,
  invert: () => invert3,
  len: () => len3,
  length: () => length3,
  lerp: () => lerp3,
  ln: () => ln,
  mul: () => mul5,
  multiply: () => multiply5,
  normalize: () => normalize3,
  pow: () => pow,
  random: () => random3,
  rotateX: () => rotateX3,
  rotateY: () => rotateY3,
  rotateZ: () => rotateZ3,
  rotationTo: () => rotationTo,
  scale: () => scale5,
  set: () => set5,
  setAxes: () => setAxes,
  setAxisAngle: () => setAxisAngle,
  slerp: () => slerp,
  sqlerp: () => sqlerp,
  sqrLen: () => sqrLen3,
  squaredLength: () => squaredLength3,
  str: () => str5
});

// node_modules/gl-matrix/esm/vec3.js
var vec3_exports = {};
__export(vec3_exports, {
  add: () => add3,
  angle: () => angle,
  bezier: () => bezier,
  ceil: () => ceil,
  clone: () => clone3,
  copy: () => copy3,
  create: () => create3,
  cross: () => cross,
  dist: () => dist,
  distance: () => distance,
  div: () => div,
  divide: () => divide,
  dot: () => dot,
  equals: () => equals4,
  exactEquals: () => exactEquals3,
  floor: () => floor,
  forEach: () => forEach,
  fromValues: () => fromValues3,
  hermite: () => hermite,
  inverse: () => inverse,
  len: () => len,
  length: () => length,
  lerp: () => lerp,
  max: () => max,
  min: () => min,
  mul: () => mul3,
  multiply: () => multiply3,
  negate: () => negate,
  normalize: () => normalize,
  random: () => random,
  rotateX: () => rotateX2,
  rotateY: () => rotateY2,
  rotateZ: () => rotateZ2,
  round: () => round,
  scale: () => scale3,
  scaleAndAdd: () => scaleAndAdd,
  set: () => set3,
  sqrDist: () => sqrDist,
  sqrLen: () => sqrLen,
  squaredDistance: () => squaredDistance,
  squaredLength: () => squaredLength,
  str: () => str3,
  sub: () => sub3,
  subtract: () => subtract3,
  transformMat3: () => transformMat3,
  transformMat4: () => transformMat4,
  transformQuat: () => transformQuat,
  zero: () => zero
});
function create3() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
function clone3(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
function fromValues3(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function copy3(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function set3(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function add3(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract3(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function multiply3(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
function scale3(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
function scaleAndAdd(out, a, b, scale7) {
  out[0] = a[0] + b[0] * scale7;
  out[1] = a[1] + b[1] * scale7;
  out[2] = a[2] + b[2] * scale7;
  return out;
}
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
function inverse(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  return out;
}
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len5 = x * x + y * y + z * z;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = a[0] * len5;
  out[1] = a[1] * len5;
  out[2] = a[2] * len5;
  return out;
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2];
  var bx = b[0], by = b[1], bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function random(out, scale7) {
  scale7 = scale7 || 1;
  var r = RANDOM() * 2 * Math.PI;
  var z = RANDOM() * 2 - 1;
  var zScale = Math.sqrt(1 - z * z) * scale7;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale7;
  return out;
}
function transformMat4(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
function transformMat3(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
function transformQuat(out, a, q) {
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var x = a[0], y = a[1], z = a[2];
  var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
  var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
function rotateX2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateY2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateZ2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2];
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function angle(a, b) {
  var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}
function str3(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals3(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals4(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2];
  var b0 = b[0], b1 = b[1], b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
}
var sub3 = subtract3;
var mul3 = multiply3;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
  var vec = create3();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/vec4.js
var vec4_exports = {};
__export(vec4_exports, {
  add: () => add4,
  ceil: () => ceil2,
  clone: () => clone4,
  copy: () => copy4,
  create: () => create4,
  cross: () => cross2,
  dist: () => dist2,
  distance: () => distance2,
  div: () => div2,
  divide: () => divide2,
  dot: () => dot2,
  equals: () => equals5,
  exactEquals: () => exactEquals4,
  floor: () => floor2,
  forEach: () => forEach2,
  fromValues: () => fromValues4,
  inverse: () => inverse2,
  len: () => len2,
  length: () => length2,
  lerp: () => lerp2,
  max: () => max2,
  min: () => min2,
  mul: () => mul4,
  multiply: () => multiply4,
  negate: () => negate2,
  normalize: () => normalize2,
  random: () => random2,
  round: () => round2,
  scale: () => scale4,
  scaleAndAdd: () => scaleAndAdd2,
  set: () => set4,
  sqrDist: () => sqrDist2,
  sqrLen: () => sqrLen2,
  squaredDistance: () => squaredDistance2,
  squaredLength: () => squaredLength2,
  str: () => str4,
  sub: () => sub4,
  subtract: () => subtract4,
  transformMat4: () => transformMat42,
  transformQuat: () => transformQuat2,
  zero: () => zero2
});
function create4() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}
function clone4(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function fromValues4(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function copy4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function set4(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function add4(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
function subtract4(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
function multiply4(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
function divide2(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
function ceil2(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
function floor2(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
function min2(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
function max2(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
function round2(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
function scale4(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
function scaleAndAdd2(out, a, b, scale7) {
  out[0] = a[0] + b[0] * scale7;
  out[1] = a[1] + b[1] * scale7;
  out[2] = a[2] + b[2] * scale7;
  out[3] = a[3] + b[3] * scale7;
  return out;
}
function distance2(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
function squaredDistance2(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
function length2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
function squaredLength2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
function negate2(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
function inverse2(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  out[3] = 1 / a[3];
  return out;
}
function normalize2(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len5 = x * x + y * y + z * z + w * w;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = x * len5;
  out[1] = y * len5;
  out[2] = z * len5;
  out[3] = w * len5;
  return out;
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function cross2(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
function lerp2(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
function random2(out, scale7) {
  scale7 = scale7 || 1;
  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = RANDOM() * 2 - 1;
    v2 = RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = RANDOM() * 2 - 1;
    v4 = RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);
  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale7 * v1;
  out[1] = scale7 * v2;
  out[2] = scale7 * v3 * d;
  out[3] = scale7 * v4 * d;
  return out;
}
function transformMat42(out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
function transformQuat2(out, a, q) {
  var x = a[0], y = a[1], z = a[2];
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
function zero2(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}
function str4(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function exactEquals4(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals5(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
}
var sub4 = subtract4;
var mul4 = multiply4;
var div2 = divide2;
var dist2 = distance2;
var sqrDist2 = squaredDistance2;
var len2 = length2;
var sqrLen2 = squaredLength2;
var forEach2 = function() {
  var vec = create4();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 4;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/quat.js
function create5() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}
function identity3(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2;
  var s = Math.sin(rad / 2);
  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}
function getAngle(a, b) {
  var dotproduct = dot3(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply5(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
function rotateX3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
function rotateY3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var by = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
function rotateZ3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bz = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
function calculateW(out, a) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
  return out;
}
function exp(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
function ln(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
function pow(out, a, b) {
  ln(out, a);
  scale5(out, out, b);
  exp(out, out);
  return out;
}
function slerp(out, a, b, t) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  var omega, cosom, sinom, scale0, scale1;
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  if (cosom < 0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  if (1 - cosom > EPSILON) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    scale0 = 1 - t;
    scale1 = t;
  }
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
function random3(out) {
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
  return out;
}
function invert3(out, a) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var dot5 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot5 ? 1 / dot5 : 0;
  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
function fromMat3(out, m) {
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;
  if (fTrace > 0) {
    fRoot = Math.sqrt(fTrace + 1);
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    var i = 0;
    if (m[4] > m[0])
      i = 1;
    if (m[8] > m[i * 3 + i])
      i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
function str5(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone5 = clone4;
var fromValues5 = fromValues4;
var copy5 = copy4;
var set5 = set4;
var add5 = add4;
var mul5 = multiply5;
var scale5 = scale4;
var dot3 = dot2;
var lerp3 = lerp2;
var length3 = length2;
var len3 = length3;
var squaredLength3 = squaredLength2;
var sqrLen3 = squaredLength3;
var normalize3 = normalize2;
var exactEquals5 = exactEquals4;
var equals6 = equals5;
var rotationTo = function() {
  var tmpvec3 = create3();
  var xUnitVec3 = fromValues3(1, 0, 0);
  var yUnitVec3 = fromValues3(0, 1, 0);
  return function(out, a, b) {
    var dot5 = dot(a, b);
    if (dot5 < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 1e-6)
        cross(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot5 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot5;
      return normalize3(out, out);
    }
  };
}();
var sqlerp = function() {
  var temp1 = create5();
  var temp2 = create5();
  return function(out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
var setAxes = function() {
  var matr = create();
  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize3(out, fromMat3(out, matr));
  };
}();

// node_modules/gl-matrix/esm/vec2.js
var vec2_exports = {};
__export(vec2_exports, {
  add: () => add6,
  angle: () => angle2,
  ceil: () => ceil3,
  clone: () => clone6,
  copy: () => copy6,
  create: () => create6,
  cross: () => cross3,
  dist: () => dist3,
  distance: () => distance3,
  div: () => div3,
  divide: () => divide3,
  dot: () => dot4,
  equals: () => equals7,
  exactEquals: () => exactEquals6,
  floor: () => floor3,
  forEach: () => forEach3,
  fromValues: () => fromValues6,
  inverse: () => inverse3,
  len: () => len4,
  length: () => length4,
  lerp: () => lerp4,
  max: () => max3,
  min: () => min3,
  mul: () => mul6,
  multiply: () => multiply6,
  negate: () => negate3,
  normalize: () => normalize4,
  random: () => random4,
  rotate: () => rotate3,
  round: () => round3,
  scale: () => scale6,
  scaleAndAdd: () => scaleAndAdd3,
  set: () => set6,
  sqrDist: () => sqrDist3,
  sqrLen: () => sqrLen4,
  squaredDistance: () => squaredDistance3,
  squaredLength: () => squaredLength4,
  str: () => str6,
  sub: () => sub5,
  subtract: () => subtract5,
  transformMat2: () => transformMat2,
  transformMat2d: () => transformMat2d,
  transformMat3: () => transformMat32,
  transformMat4: () => transformMat43,
  zero: () => zero3
});
function create6() {
  var out = new ARRAY_TYPE(2);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}
function clone6(a) {
  var out = new ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function fromValues6(x, y) {
  var out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
function copy6(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function set6(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
function add6(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
function subtract5(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
function multiply6(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
function divide3(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
function ceil3(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
function floor3(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
function min3(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
function max3(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
function round3(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
function scale6(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
function scaleAndAdd3(out, a, b, scale7) {
  out[0] = a[0] + b[0] * scale7;
  out[1] = a[1] + b[1] * scale7;
  return out;
}
function distance3(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return Math.hypot(x, y);
}
function squaredDistance3(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return x * x + y * y;
}
function length4(a) {
  var x = a[0], y = a[1];
  return Math.hypot(x, y);
}
function squaredLength4(a) {
  var x = a[0], y = a[1];
  return x * x + y * y;
}
function negate3(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
function inverse3(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  return out;
}
function normalize4(out, a) {
  var x = a[0], y = a[1];
  var len5 = x * x + y * y;
  if (len5 > 0) {
    len5 = 1 / Math.sqrt(len5);
  }
  out[0] = a[0] * len5;
  out[1] = a[1] * len5;
  return out;
}
function dot4(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function cross3(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
function lerp4(out, a, b, t) {
  var ax = a[0], ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
function random4(out, scale7) {
  scale7 = scale7 || 1;
  var r = RANDOM() * 2 * Math.PI;
  out[0] = Math.cos(r) * scale7;
  out[1] = Math.sin(r) * scale7;
  return out;
}
function transformMat2(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
function transformMat2d(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
function transformMat32(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
function transformMat43(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
function rotate3(out, a, b, rad) {
  var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
function angle2(a, b) {
  var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero3(out) {
  out[0] = 0;
  out[1] = 0;
  return out;
}
function str6(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
function exactEquals6(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
function equals7(a, b) {
  var a0 = a[0], a1 = a[1];
  var b0 = b[0], b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
}
var len4 = length4;
var sub5 = subtract5;
var mul6 = multiply6;
var div3 = divide3;
var dist3 = distance3;
var sqrDist3 = squaredDistance3;
var sqrLen4 = squaredLength4;
var forEach3 = function() {
  var vec = create6();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 2;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }
    return a;
  };
}();

// src/Engine/Rendering/Renderer/Framebuffers/Framebuffer.ts
var Framebuffer = class {
  /**
   * @param width - width of framebuffer textures
   * @param height - height of framebuffer textures
   * @param textures - colour attachment textures, send empty array if no colour attachments should be used
   * @param depthTexture - depth attachment texture, send null if no depth attachment (an rbo will be created instead)
   */
  constructor(width, height, textures, depthTexture) {
    this.width = width;
    this.height = height;
    this.textures = textures;
    this.depthTexture = depthTexture;
    this.fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
    this.setupAttachments();
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
      console.warn("ERROR::FRAMEBUFFER:: Framebuffer is not complete!");
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  setupAttachments() {
    let attachments = new Array();
    for (let i = 0; i < this.textures.length; i++) {
      this.textures[i].setTextureData(null, this.width, this.height);
      if (this.textures[i].textureTarget == gl.TEXTURE_CUBE_MAP) {
        gl.framebufferTexture2D(
          gl.FRAMEBUFFER,
          gl.COLOR_ATTACHMENT0 + i,
          gl.TEXTURE_CUBE_MAP_POSITIVE_X,
          this.textures[i].texture,
          0
        );
        attachments.push(gl.COLOR_ATTACHMENT0 + i);
      } else {
        this.textures[i].setTexParameterI(gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        this.textures[i].setTexParameterI(gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        this.textures[i].setTexParameterI(gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        this.textures[i].setTexParameterI(gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.framebufferTexture2D(
          gl.FRAMEBUFFER,
          gl.COLOR_ATTACHMENT0 + i,
          gl.TEXTURE_2D,
          this.textures[i].texture,
          0
        );
        attachments.push(gl.COLOR_ATTACHMENT0 + i);
      }
    }
    gl.drawBuffers(attachments);
    if (this.depthTexture != void 0) {
      this.depthTexture.setTextureData(null, this.width, this.height);
      if (this.depthTexture.textureTarget == gl.TEXTURE_CUBE_MAP) {
        gl.framebufferTexture2D(
          gl.FRAMEBUFFER,
          gl.DEPTH_ATTACHMENT,
          gl.TEXTURE_CUBE_MAP_POSITIVE_X,
          this.depthTexture.texture,
          0
        );
      } else {
        gl.framebufferTexture2D(
          gl.FRAMEBUFFER,
          gl.DEPTH_ATTACHMENT,
          gl.TEXTURE_2D,
          this.depthTexture.texture,
          0
        );
      }
    } else {
      this.rbo = gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.rbo);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
      gl.framebufferRenderbuffer(
        gl.FRAMEBUFFER,
        gl.DEPTH_STENCIL_ATTACHMENT,
        gl.RENDERBUFFER,
        this.rbo
      );
    }
  }
  /**
   * Will setup the framebuffer to the given width and height, including resizing (and clearing) all textures (both normal render textures and depth texture)
   * For cubemaps all sides will be cleared and resized
   * @param width New width of the framebuffer
   * @param height New height of the framebuffer
   */
  setProportions(width, height) {
    this.width = width;
    this.height = height;
    for (let texture of this.textures) {
      texture.setTextureData(null, this.width, this.height);
    }
    if (this.depthTexture) {
      this.depthTexture.setTextureData(null, this.width, this.height);
    }
    if (this.rbo) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.rbo);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH24_STENCIL8, width, height);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  /**
   * Bind this framebuffer to the sent in target
   * @param target framebuffer target (for example gl.FRAMEBUFFER, gl.DRAW_FRAMEBUFFER, gl.READ_FRAMEBUFFER)
   */
  bind(target) {
    gl.bindFramebuffer(target, this.fbo);
  }
};

// src/Engine/Rendering/AssetHandling/Textures/Texture.ts
var Texture = class {
  constructor(useMipMap = true, internalFormat = gl.RGBA, format = gl.RGBA, dataStorageType = gl.UNSIGNED_BYTE, textureTarget = gl.TEXTURE_2D) {
    this.useMipMap = useMipMap;
    this.internalFormat = internalFormat;
    this.format = format;
    this.dataStorageType = dataStorageType;
    this.textureTarget = textureTarget;
    this.texture = gl.createTexture();
    gl.bindTexture(this.textureTarget, this.texture);
    gl.texParameteri(this.textureTarget, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(this.textureTarget, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(this.textureTarget, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(this.textureTarget, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    this.setTextureData(null, 1, 1);
    gl.bindTexture(this.textureTarget, null);
  }
  setTextureData(data, width, height) {
    this.width = width;
    this.height = height;
    gl.bindTexture(this.textureTarget, this.texture);
    gl.texImage2D(
      this.textureTarget,
      0,
      this.internalFormat,
      width,
      height,
      0,
      this.format,
      this.dataStorageType,
      data
    );
    if (this.useMipMap) {
      gl.generateMipmap(this.textureTarget);
      gl.texParameteri(this.textureTarget, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    }
    gl.bindTexture(this.textureTarget, null);
    this.loadedFromFile = false;
  }
  bind(textureIndex = 0) {
    gl.activeTexture(gl.TEXTURE0 + textureIndex);
    gl.bindTexture(this.textureTarget, this.texture);
  }
  loadFromFile(URL) {
    let image = new Image();
    image.crossOrigin = "";
    image.src = URL;
    let self = this;
    image.addEventListener("load", function() {
      self.width = image.width;
      self.height = image.height;
      gl.bindTexture(self.textureTarget, self.texture);
      gl.texImage2D(
        self.textureTarget,
        0,
        self.internalFormat,
        self.format,
        self.dataStorageType,
        image
      );
      if (self.useMipMap) {
        gl.generateMipmap(self.textureTarget);
        gl.texParameteri(self.textureTarget, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      }
      self.loadedFromFile = true;
    });
  }
  createFromCSSColorValue(colorValue) {
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 255;
    if (colorValue.startsWith("#")) {
      if (colorValue.length >= 7) {
        r = parseInt(colorValue.slice(1, 3), 16);
        g = parseInt(colorValue.slice(3, 5), 16);
        b = parseInt(colorValue.slice(5, 7), 16);
        if (colorValue.length == 9) {
          a = parseInt(colorValue.slice(7, 9), 16);
        }
      }
    } else if (colorValue.startsWith("rgba(")) {
      let rfindResult = colorValue.lastIndexOf(")");
      let values = colorValue.substring("rgba(".length, rfindResult).split(",").map((value) => {
        return parseFloat(value);
      });
      r = values[0];
      g = values[1];
      b = values[2];
      a = values[3] * 255;
    } else if (colorValue.startsWith("rgb(")) {
      let rfindResult = colorValue.lastIndexOf(")");
      let values = colorValue.substring("rgb(".length, rfindResult).split(",").map((value) => {
        return parseInt(value);
      });
      r = values[0];
      g = values[1];
      b = values[2];
    }
    this.setTextureData(new Uint8Array([r, g, b, a]), 1, 1);
  }
  setTexParameterI(a, b) {
    gl.bindTexture(this.textureTarget, this.texture);
    gl.texParameteri(this.textureTarget, a, b);
    gl.bindTexture(this.textureTarget, null);
  }
};

// src/Engine/Rendering/Objects/GraphicsObjects/GraphicsObject.ts
var GraphicsObject = class {
  constructor(shaderProgram) {
    this.shaderProgram = shaderProgram;
    this.VAO = null;
    this.VBO = null;
    this.EBO = null;
    this.init();
  }
  init() {
    this.VAO = gl.createVertexArray();
    this.VBO = gl.createBuffer();
    this.EBO = gl.createBuffer();
    gl.bindVertexArray(this.VAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    this.shaderProgram.setupVertexAttributePointers();
    gl.bindVertexArray(null);
  }
  bindVAO() {
    gl.bindVertexArray(this.VAO);
  }
  unbindVAO() {
    gl.bindVertexArray(null);
  }
  setVertexData(data) {
    if (data == void 0 || data.length == 0) {
      return;
    }
    gl.bindVertexArray(this.VAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.bindVertexArray(null);
  }
  setIndexData(data) {
    gl.bindVertexArray(this.VAO);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.EBO);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.bindVertexArray(null);
  }
  getVertexPositions() {
    return null;
  }
  draw() {
  }
};

// src/Engine/Rendering/Objects/GraphicsObjects/ScreenQuad.ts
var ScreenQuad = class extends GraphicsObject {
  constructor(shaderProgram, textures) {
    super(shaderProgram);
    this.vertices = new Float32Array([
      // positions        // uv
      -1,
      1,
      0,
      1,
      -1,
      -1,
      0,
      0,
      1,
      -1,
      1,
      0,
      1,
      1,
      1,
      1
    ]);
    this.indices = new Int32Array([
      0,
      1,
      2,
      0,
      2,
      3
    ]);
    this.setVertexData(this.vertices);
    this.setIndexData(this.indices);
    this.textures = textures;
    for (let texture of this.textures) {
      texture.setTexParameterI(gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      texture.setTexParameterI(gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
  }
  draw(bindTextures = true) {
    this.bindVAO();
    if (bindTextures) {
      for (let i = 0; i < this.textures.length; i++) {
        this.textures[i].bind(i);
      }
    }
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0);
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/ShaderProgram.ts
var ShaderProgram = class {
  constructor(shaderProgramName, vertexShaderName, fragmentShaderName, debugShaderCompilation = false) {
    this.shaderProgram = null;
    this.loadShaders(
      shaderProgramName,
      vertexShaderName,
      fragmentShaderName,
      debugShaderCompilation
    );
    this.uniformBindings = /* @__PURE__ */ new Map();
  }
  loadShaders(shaderProgramName, vertexShaderString, fragmentShaderString, debugShaderCompilation) {
    if (this.shaderProgram != null) {
      gl.deleteProgram(this.shaderProgram);
    }
    console.log("Compiling shader program: " + shaderProgramName);
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderString);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS) || debugShaderCompilation) {
      console.log(
        "Vertex shader compiled successfully: " + gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)
      );
      console.log("Vertex shader compiler log: \n" + gl.getShaderInfoLog(vertexShader));
    }
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderString);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) || debugShaderCompilation) {
      console.log(
        "Fragment shader compiled successfully: " + gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)
      );
      console.log("Fragment shader compiler log: \n" + gl.getShaderInfoLog(fragmentShader));
    }
    this.shaderProgram = gl.createProgram();
    gl.attachShader(this.shaderProgram, vertexShader);
    gl.attachShader(this.shaderProgram, fragmentShader);
    gl.linkProgram(this.shaderProgram);
    let linkedShaders = gl.getProgramParameter(this.shaderProgram, gl.LINK_STATUS);
    if (!linkedShaders || debugShaderCompilation) {
      console.log("Linked shaders successfully: " + linkedShaders);
      console.log("Linking shaders log: \n" + gl.getProgramInfoLog(this.shaderProgram));
    }
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
  }
  use() {
    gl.useProgram(this.shaderProgram);
  }
  setupVertexAttributePointers() {
  }
  setupInstancedVertexAttributePointers() {
  }
  setUniformLocation(uniformName) {
    this.uniformBindings.set(uniformName, gl.getUniformLocation(this.shaderProgram, uniformName));
  }
  getUniformLocation(uniformName) {
    if (this.uniformBindings.has(uniformName)) {
      return [this.uniformBindings.get(uniformName), true];
    }
    return [0, false];
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/ScreenQuadShaderProgram.ts
var screenQuadVertexSrc = `#version 300 es

layout (location = 0) in vec2 inPos;
layout (location = 1) in vec2 inTexCoords;

out vec2 texCoords;

void main()
{
    texCoords = inTexCoords;
    gl_Position = vec4(inPos, 0.0, 1.0); 
}  
`;
var screenQuadFragmentSrc = `#version 300 es
precision highp float;

out vec4 FragColor;
in vec2 texCoords;

uniform sampler2D screenTexture;

void main() {
    FragColor = texture(screenTexture, texCoords).rgba;
}
`;
var ScreenQuadShaderProgram = class extends ShaderProgram {
  constructor() {
    super("ScreenQuadShaderProgram", screenQuadVertexSrc, screenQuadFragmentSrc);
    this.setUniformLocation("screenTexture");
    gl.uniform1i(this.uniformBindings["screenTexture"], 0);
  }
  setupVertexAttributePointers() {
    const stride = 4 * 4;
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(1);
  }
};
var screenQuadShaderProgram = null;
var createScreenQuadShaderProgram = function() {
  screenQuadShaderProgram = new ScreenQuadShaderProgram();
};

// src/Engine/Rendering/Renderer/RenderPasses/ScreenQuadRenderPass.ts
var ScreenQuadPass = class {
  constructor(inputTextures) {
    this.screenQuad = new ScreenQuad(screenQuadShaderProgram, [inputTextures]);
    this.outputFramebuffer = null;
  }
  bindOutput() {
    if (this.outputFramebuffer == void 0) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    } else {
      this.outputFramebuffer.bind(gl.DRAW_FRAMEBUFFER);
    }
  }
  draw() {
    this.bindOutput();
    gl.disable(gl.DEPTH_TEST);
    screenQuadShaderProgram.use();
    this.screenQuad.draw(true);
    gl.enable(gl.DEPTH_TEST);
  }
};

// src/Engine/Rendering/Objects/GraphicsObjects/Skybox.ts
var Skybox = class extends GraphicsObject {
  constructor(shaderProgram, texture) {
    super(shaderProgram);
    this.vertices = new Float32Array([
      // positions
      -0.5,
      0.5,
      -0.5,
      /*0*/
      -0.5,
      -0.5,
      -0.5,
      /*1*/
      0.5,
      -0.5,
      -0.5,
      /*2*/
      0.5,
      0.5,
      -0.5,
      /*3*/
      -0.5,
      0.5,
      0.5,
      /*4*/
      -0.5,
      -0.5,
      0.5,
      /*5*/
      0.5,
      -0.5,
      0.5,
      /*6*/
      0.5,
      0.5,
      0.5
      /*7*/
    ]);
    this.indices = new Int32Array([
      0,
      1,
      2,
      0,
      2,
      3,
      3,
      2,
      6,
      3,
      6,
      7,
      7,
      6,
      5,
      7,
      5,
      4,
      4,
      5,
      1,
      4,
      1,
      0,
      4,
      0,
      3,
      4,
      3,
      7,
      1,
      5,
      6,
      1,
      6,
      2
    ]);
    this.setVertexData(this.vertices);
    this.setIndexData(this.indices);
    this.texture = texture;
  }
  draw() {
    this.bindVAO();
    this.texture.bind();
    gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_INT, 0);
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/Skybox/SkyboxShaderProgram.ts
var skyboxVertexSrc = `#version 300 es

layout (location = 0) in vec3 inPos;

out vec3 texCoords;

uniform mat4 viewProjMatrix;

void main()
{
    texCoords = inPos;
	texCoords.y *= -1.0;
	texCoords.z *= -1.0;
    vec4 pos = viewProjMatrix * vec4(inPos, 1.0);
    gl_Position = pos.xyww; 
}  
`;
var skyboxFragmentSrc = `#version 300 es
precision highp float;

layout (location = 0) out vec4 FragColor;
layout (location = 1) out float FragOpacity;

in vec3 texCoords;

uniform samplerCube skybox;

void main() {
	FragColor = texture(skybox, texCoords).rgba;
	FragOpacity = 0.0;
}
`;
var SkyboxShaderProgram = class extends ShaderProgram {
  constructor() {
    super("SkyboxShaderProgram", skyboxVertexSrc, skyboxFragmentSrc);
    this.setUniformLocation("skybox");
    gl.uniform1i(this.uniformBindings["skybox"], 0);
    this.setUniformLocation("viewProjMatrix");
  }
  setupVertexAttributePointers() {
    const stride = 3 * 4;
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(0);
  }
};
var skyboxShaderProgram = null;
var createSkyboxShaderProgram = function() {
  skyboxShaderProgram = new SkyboxShaderProgram();
};

// src/Engine/Rendering/Renderer/RenderPasses/SkyboxRenderPass.ts
var SkyboxRenderPass = class {
  constructor() {
    this.skybox = null;
  }
  setSkybox(cubemap) {
    this.skybox = new Skybox(skyboxShaderProgram, cubemap);
  }
  draw(camera) {
    if (this.skybox != void 0) {
      gl.enable(gl.DEPTH_TEST);
      skyboxShaderProgram.use();
      camera.bindViewProjMatrix(skyboxShaderProgram.getUniformLocation("viewProjMatrix")[0], true);
      gl.depthFunc(gl.LEQUAL);
      this.skybox.draw();
      gl.depthFunc(gl.LESS);
    }
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/DeferredRendering/GeometryPassShaderProgram.ts
var geometryVertexShaderSrc = `#version 300 es
// If inputs change, also update GeometryPass::setupVertexAttributePointers to match
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec3 inNormal;
layout (location = 2) in vec2 inTexCoords;

// If uniforms change, also update PhongShaderProgram to match
uniform mat4 modelMatrix;
uniform mat4 viewProjMatrix;
uniform mat4 textureMatrix;
uniform mat3 normalMatrix;

out vec3 fragPos;
out vec3 fragNormal;
out vec2 texCoords;

void main() {
    vec4 worldPos = modelMatrix * vec4(inPosition, 1.0);
	texCoords = vec2(textureMatrix * vec4(inTexCoords, 0.0, 1.0));

	fragNormal = normalize(normalMatrix * inNormal);
	fragPos = worldPos.xyz;

    gl_Position = viewProjMatrix * worldPos;
}`;
var geometryFragmentShaderSrc = `#version 300 es
precision highp float;

in vec3 fragPos;
in vec3 fragNormal;
in vec2 texCoords;

layout (location = 0) out vec4 gPosition;
layout (location = 1) out vec4 gNormal;
layout (location = 2) out vec4 gColourSpec;
layout (location = 3) out vec4 gEmission;

struct Material {
	sampler2D diffuse;
	sampler2D specular;
	sampler2D emission;
};

uniform Material material;
uniform vec3 emissionColor;

mat4 thresholdMatrix = mat4(
	1.0, 9.0, 3.0, 11.0,
	13.0, 5.0, 15.0, 7.0,
	4.0, 12.0, 2.0, 10.0,
	16.0, 8.0, 14.0, 6.0
	);

void main() {
	float opacity = texture(material.diffuse, texCoords).a;

	float threshold = thresholdMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))] / 17.0;
    if (threshold >= opacity) {
        discard;
    }

	vec3 emissionMapValues = texture(material.emission, texCoords).rgb;
	float emissionValue = (emissionMapValues.r + emissionMapValues.g + emissionMapValues.b) / 3.0;

	if ((emissionColor.r > 0.0 || emissionColor.g > 0.0 || emissionColor.b > 0.0) && emissionValue > 0.0) {
		gEmission.r = emissionColor.r * emissionMapValues.r;
		gEmission.g = emissionColor.g * emissionMapValues.g;
		gEmission.b = emissionColor.b * emissionMapValues.b;
	}
	else if (emissionValue > 0.0) {
		gEmission.rgb = emissionMapValues;
	}
	else if (emissionColor.r > 0.0 || emissionColor.g > 0.0 || emissionColor.b > 0.0) {
		gEmission.rgb = emissionColor.rgb;
	}
	
	gEmission.a = 1.0;

    gColourSpec = vec4(texture(material.diffuse, texCoords).rgb, texture(material.specular, texCoords).r);
	gPosition = vec4(fragPos, 1.0);
	gNormal = vec4(fragNormal, 1.0);
}`;
var GeometryPassShaderProgram = class extends ShaderProgram {
  constructor() {
    super("GeometryPass", geometryVertexShaderSrc, geometryFragmentShaderSrc);
    this.use();
    this.setUniformLocation("modelMatrix");
    this.setUniformLocation("normalMatrix");
    this.setUniformLocation("viewProjMatrix");
    this.setUniformLocation("textureMatrix");
    this.setUniformLocation("material.diffuse");
    this.setUniformLocation("material.specular");
    this.setUniformLocation("material.emission");
    this.setUniformLocation("emissionColor");
    gl.uniform1i(this.getUniformLocation("material.diffuse")[0], 0);
    gl.uniform1i(this.getUniformLocation("material.specular")[0], 1);
    gl.uniform1i(this.getUniformLocation("material.emission")[0], 2);
  }
  setupVertexAttributePointers() {
    const stride = 8 * 4;
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, stride, 3 * 4);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, stride, 6 * 4);
    gl.enableVertexAttribArray(2);
  }
};
var geometryPassShaderProgram = null;
var createGeometryPassShaderProgram = function() {
  geometryPassShaderProgram = new GeometryPassShaderProgram();
};

// src/Engine/Rendering/Renderer/RenderPasses/DefferedRendering/GeometryRenderPass.ts
var GeometryRenderPass = class {
  constructor() {
    this.outputFramebuffer = new Framebuffer(
      100,
      100,
      [
        new Texture(false, gl.RGBA32F, gl.RGBA, gl.FLOAT),
        new Texture(false, gl.RGBA32F, gl.RGBA, gl.FLOAT),
        new Texture(false),
        new Texture(false)
      ],
      null
    );
  }
  setResolution(x, y) {
    this.outputFramebuffer.setProportions(x, y);
  }
  draw(scene, camera) {
    geometryPassShaderProgram.use();
    gl.viewport(0, 0, this.outputFramebuffer.getWidth(), this.outputFramebuffer.getHeight());
    this.outputFramebuffer.bind(gl.FRAMEBUFFER);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
    gl.disable(gl.BLEND);
    camera.bindViewProjMatrix(geometryPassShaderProgram.getUniformLocation("viewProjMatrix")[0]);
    scene.renderScene(geometryPassShaderProgram, true);
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/DeferredRendering/LightingPassShaderProgram.ts
var pointLightsToAllocate = 2;
var pointShadowsToAllocate = 2;
var lightingFragmentShaderSrc;
var LightingPassShaderProgram = class extends ShaderProgram {
  constructor() {
    super("LightingPass", screenQuadVertexSrc, lightingFragmentShaderSrc);
    this.use();
    this.setUniformLocation("gPosition");
    this.setUniformLocation("gNormal");
    this.setUniformLocation("gColourSpec");
    this.setUniformLocation("gEmission");
    this.setUniformLocation("depthMap");
    gl.uniform1i(this.getUniformLocation("gPosition")[0], 0);
    gl.uniform1i(this.getUniformLocation("gNormal")[0], 1);
    gl.uniform1i(this.getUniformLocation("gColourSpec")[0], 2);
    gl.uniform1i(this.getUniformLocation("gEmission")[0], 3);
    gl.uniform1i(this.getUniformLocation("depthMap")[0], 4);
    for (let i = 0; i < pointShadowsToAllocate; i++) {
      this.setUniformLocation("pointDepthMaps[" + i + "]");
      gl.uniform1i(this.getUniformLocation("pointDepthMaps[" + i + "]")[0], 5 + i);
    }
    for (let i = 0; i < pointLightsToAllocate; i++) {
      this.setUniformLocation("pointLights[" + i + "].position");
      this.setUniformLocation("pointLights[" + i + "].colour");
      this.setUniformLocation("pointLights[" + i + "].constant");
      this.setUniformLocation("pointLights[" + i + "].linear");
      this.setUniformLocation("pointLights[" + i + "].quadratic");
      this.setUniformLocation("pointLights[" + i + "].pointDepthMapIndex");
    }
    this.setUniformLocation("directionalLight.direction");
    this.setUniformLocation("directionalLight.colour");
    this.setUniformLocation("directionalLight.ambientMultiplier");
    this.setUniformLocation("nrOfPointLights");
    this.setUniformLocation("camPos");
    this.setUniformLocation("lightSpaceMatrix");
  }
  setupVertexAttributePointers() {
    const stride = 4 * 4;
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(1);
  }
};
var lightingPassShaderProgram = null;
var createLightingPassShaderProgram = function() {
  pointShadowsToAllocate = Math.min(
    pointShadowsToAllocate,
    gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS) - 5
  );
  lightingFragmentShaderSrc = `#version 300 es
precision highp float;

#define NR_POINT_LIGHTS ` + pointLightsToAllocate + `
#define NR_POINT_SHADOWS ` + pointShadowsToAllocate + `

in vec2 texCoords;

layout (location = 0) out vec4 final_colour;

uniform sampler2D gPosition;
uniform sampler2D gNormal;
uniform sampler2D gColourSpec;
uniform sampler2D gEmission;
uniform sampler2D depthMap;
uniform samplerCube pointDepthMaps[NR_POINT_SHADOWS];

struct PointLight {
	vec3 position;
	vec3 colour;

	float constant;
	float linear;
	float quadratic;

	int pointDepthMapIndex;
};

struct DirectionalLight {
	vec3 direction;
	vec3 colour;
	float ambientMultiplier;
};

uniform DirectionalLight directionalLight;
uniform PointLight pointLights[NR_POINT_LIGHTS];
uniform int nrOfPointLights;
uniform vec3 camPos; //Used for specular lighting
uniform mat4 lightSpaceMatrix; // Used for shadow fragment position

vec3 CalcDirectionalLight(DirectionalLight light, vec3 normal, vec3 cameraDir, vec3 diffuse, float specular, float shininess, vec4 lightSpaceFragPos);
vec3 CalcPointLight(PointLight light, vec3 normal, vec3 fragPos, vec3 cameraDir, vec3 diffuse, float specular, float shininess);
float CalcShadow(vec4 lightSpaceFragPos, vec3 normal);
float CalcPointShadow(vec3 fragPos, PointLight light);

void main() {
	// Discard fragment if normal alpha is 0
	vec4 fragNormalWithAlpha = texture(gNormal, texCoords);
	if (fragNormalWithAlpha.a <= 0.0001) {
		discard;
	}
	
	vec3 fragPos = texture(gPosition, texCoords).rgb;
	vec3 fragNormal = fragNormalWithAlpha.rgb;
	float shininess = 32.0f;
	vec3 diffuse = texture(gColourSpec, texCoords).rgb;
	float specular = texture(gColourSpec, texCoords).a;
	vec3 emission = texture(gEmission, texCoords).rgb;
	vec4 lightSpaceFragPos = (lightSpaceMatrix * vec4(fragPos, 1.0f));
	
	vec3 cameraDir = normalize(camPos - fragPos); //Direction vector from fragment to camera
	
    vec3 result = vec3(0.0f);
	result += CalcDirectionalLight(directionalLight, fragNormal, cameraDir, diffuse, specular, shininess, lightSpaceFragPos);

	for (int i = 0; i < nrOfPointLights; i++) {
		result += CalcPointLight(pointLights[i], fragNormal, fragPos, cameraDir, diffuse, specular, shininess);
	}

	final_colour = vec4(result + emission, 1.0f); // Set colour of fragment. Since we use screen door transparency, do not use alpha value

	// final_colour.rgb = fragPos;
	// final_colour.rgb = fragNormal;
	// final_colour.rgb = diffuse;
	// final_colour.rgb = vec3(specular, specular, specular);
	// final_colour.rgb = texture(depthMap, texCoords).rrr;
}

// Calculates the colour when using a directional light
vec3 CalcDirectionalLight(DirectionalLight light, vec3 normal, vec3 cameraDir, vec3 diffuse, float specular, float shininess, vec4 lightSpaceFragPos) {
	vec3 lightDir = normalize(-light.direction); //light direction from the fragment position

	// Diffuse shading
	float diff = max(dot(normal, lightDir), 0.0);
	float oppositeDiff = min(dot(normal, lightDir), 0.0);
	oppositeDiff += 1.0;
	oppositeDiff *= 0.2;

	// Specular shading
	vec3 reflectDir = reflect(-lightDir, normal);
	float spec = pow(max(dot(cameraDir, reflectDir), 0.0), shininess);

	// Combine results	
	vec3 ambient = diffuse * light.ambientMultiplier; //Ambient lighting
	vec3 finalDiffuse = light.colour * diff * diffuse;
	vec3 finalSpecular = light.colour * spec * specular;
	
	float shadow = CalcShadow(lightSpaceFragPos, normal);
	vec3 lighting = (ambient + (1.1f - shadow) * (finalDiffuse + finalSpecular));
	lighting += oppositeDiff * ambient;
	return lighting;
}

float CalcShadow(vec4 lightSpaceFragPos, vec3 normal) {
	// perform perspective divide
    vec3 projCoords = lightSpaceFragPos.xyz / lightSpaceFragPos.w;

    // transform to [0,1] range
    projCoords = projCoords * 0.5 + 0.5;

	if (projCoords.z > 1.0) {
		return 0.0;
	}

    // get closest depth value from light's perspective (using [0,1] range fragPosLight as coords)
    float closestDepth = texture(depthMap, projCoords.xy).r; 

    // get depth of current fragment from light's perspective
    float currentDepth = projCoords.z;

    // check whether current frag pos is in shadow
	float bias = max(0.005 * (1.0 - dot(normal, directionalLight.direction)), 0.005);
	// float bias = 0.0;
	
	float shadow = 0.0;
	ivec2 textureSize = textureSize(depthMap, 0);
	vec2 texelSize = vec2(1.0 / float(textureSize.x), 1.0 / float(textureSize.y));
	for(int x = -1; x <= 1; ++x)
	{
		for(int y = -1; y <= 1; ++y)
		{
			float pcfDepth = texture(depthMap, projCoords.xy + vec2(x, y) * texelSize).r; 
			shadow += currentDepth - bias > pcfDepth ? 1.0 : 0.0;
		}    
	}
	shadow = shadow / 9.0;

    return shadow;
}

// Calculates the colour when using a point light.
vec3 CalcPointLight(PointLight light, vec3 normal, vec3 fragPos, vec3 cameraDir, vec3 diffuse, float specular, float shininess) {
	if (light.pointDepthMapIndex >= 0 && light.pointDepthMapIndex < NR_POINT_SHADOWS && CalcPointShadow(fragPos, light) == 1.0) {
		return vec3(0.0, 0.0, 0.0);
	} 

	vec3 lightDir = normalize(light.position - fragPos); //light direction from the fragment position

	// Diffuse shading
	float diff = max(dot(normal, lightDir), 0.0);

	// Specular shading
	vec3 reflectDir = reflect(-lightDir, normal);
	float spec = pow(max(dot(cameraDir, reflectDir), 0.0), shininess);

	// Attenuation
	float distance = length(light.position - fragPos);
	float attenuation = 1.0f / (light.constant + light.linear * distance + light.quadratic * (distance * distance));
	
	// Combine results
	vec3 finalDiffuse = light.colour * diff * diffuse;
	vec3 finalSpecular = light.colour * spec * specular;
	finalDiffuse *= attenuation;
	finalSpecular *= attenuation;
	return finalDiffuse + finalSpecular;
}

const float far_plane = 100.0;

float CalcPointShadow(vec3 fragPos, PointLight light) {
	// get vector between fragment position and light position
    vec3 fragToLight = fragPos - light.position;
	fragToLight.y *= -1.0;
	fragToLight.z *= -1.0;
    // use the light to fragment vector to sample from the depth map
    float closestDepth = 1.0;`;
  for (let i = 0; i < pointShadowsToAllocate; i++) {
    if (i == 0) {
      lightingFragmentShaderSrc += `
	if (light.pointDepthMapIndex == ` + i + `) {
		closestDepth = texture(pointDepthMaps[` + i + `], fragToLight).r;
	}
	`;
    } else {
      lightingFragmentShaderSrc += `
	else if (light.pointDepthMapIndex == ` + i + `) {
		closestDepth = texture(pointDepthMaps[` + i + `], fragToLight).r;
	}
	`;
    }
  }
  lightingFragmentShaderSrc += `
    // it is currently in linear range between [0,1]. Re-transform back to original value
    closestDepth *= far_plane;
    // now get current linear depth as the length between the fragment and light position
    float currentDepth = length(fragToLight);
    // now test for shadows
    float bias = 0.0;
    float shadow = currentDepth -  bias > closestDepth ? 1.0 : 0.0;

    return shadow;
}
`;
  lightingPassShaderProgram = new LightingPassShaderProgram();
};

// src/Engine/Rendering/Renderer/RenderPasses/DefferedRendering/LightingRenderPass.ts
var LightingRenderPass = class {
  constructor(inputTextures) {
    this.screenQuad = new ScreenQuad(lightingPassShaderProgram, inputTextures);
  }
  draw(scene, camera) {
    gl.disable(gl.DEPTH_TEST);
    lightingPassShaderProgram.use();
    gl.uniform3fv(lightingPassShaderProgram.getUniformLocation("camPos")[0], camera.getPosition());
    scene.directionalLight.bind(lightingPassShaderProgram);
    scene.directionalLight.calcAndSendLightSpaceMatrix(
      vec3_exports.zero(vec3_exports.create()),
      40,
      lightingPassShaderProgram.getUniformLocation("lightSpaceMatrix")[0]
    );
    gl.uniform1i(lightingPassShaderProgram.getUniformLocation("nrOfPointLights")[0], scene.pointLights.length);
    let counter = 0;
    for (let i = 0; i < scene.pointLights.length; i++) {
      scene.pointLights[i].bind(i, counter, lightingPassShaderProgram);
      if (scene.pointLights[i].castShadow) {
        counter++;
      }
    }
    for (let i = 0; i < this.screenQuad.textures.length; i++) {
      this.screenQuad.textures[i].bind(i);
    }
    counter = this.screenQuad.textures.length;
    for (const pointLight of scene.pointLights) {
      if (counter - this.screenQuad.textures.length >= pointShadowsToAllocate) {
        break;
      }
      if (pointLight.castShadow) {
        pointLight.pointShadowDepthMap.bind(counter++);
      }
    }
    this.screenQuad.draw(false);
    gl.enable(gl.DEPTH_TEST);
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/ShadowMapping/DirectionalShadowShaderProgram.ts
var shadowVertexShaderSrc = `#version 300 es
// If inputs change, also update ShadowPass::setupVertexAttributePointers to match
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec3 inNormal;
layout (location = 2) in vec2 inTexCoords;

uniform mat4 lightSpaceMatrix;
uniform mat4 modelMatrix;
uniform mat4 textureMatrix;

out vec2 texCoords;

void main()
{
    gl_Position = lightSpaceMatrix * modelMatrix * vec4(inPosition, 1.0);
	texCoords = vec2(textureMatrix * vec4(inTexCoords, 0.0, 1.0));
}`;
var shadowFragmentShaderSrc = `#version 300 es
precision highp float;

in vec2 texCoords;

uniform sampler2D diffuse;

mat4 thresholdMatrix = mat4(
	1.0, 9.0, 3.0, 11.0,
	13.0, 5.0, 15.0, 7.0,
	4.0, 12.0, 2.0, 10.0,
	16.0, 8.0, 14.0, 6.0
);

//out vec4 final_colour;

void main()
{
    float opacity = texture(diffuse, texCoords).a;

	float threshold = thresholdMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))] / 17.0;
    if (threshold >= opacity) {
        discard;
    }

    //final_colour = vec4(1.0, 1.0, 1.0, 1.0);
}`;
var DirectionalShadowShaderProgram = class extends ShaderProgram {
  constructor() {
    super("ShadowPass", shadowVertexShaderSrc, shadowFragmentShaderSrc);
    this.use();
    this.setUniformLocation("lightSpaceMatrix");
    this.setUniformLocation("modelMatrix");
    this.setUniformLocation("textureMatrix");
  }
  setupVertexAttributePointers() {
    const stride = 8 * 4;
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, stride, 3 * 4);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, stride, 6 * 4);
    gl.enableVertexAttribArray(2);
  }
};
var directionalShadowShaderProgram = null;
var createDirectionalShadowShaderProgram = function() {
  directionalShadowShaderProgram = new DirectionalShadowShaderProgram();
};

// src/Engine/Rendering/Renderer/RenderPasses/ShadowPasses/DirectionalShadowRenderPass.ts
var DirectionalShadowRenderPass = class {
  // ------------------------
  constructor() {
    this.shadowResolution = 4096;
    this.shadowOffset = 40;
    this.shadowBuffer = new Framebuffer(
      this.shadowResolution,
      this.shadowResolution,
      [],
      new Texture(false, gl.DEPTH_COMPONENT32F, gl.DEPTH_COMPONENT, gl.FLOAT)
    );
  }
  setShadowMappingResolution(res) {
    this.shadowResolution = res;
    this.shadowBuffer.setProportions(res, res);
  }
  draw(scene) {
    this.shadowBuffer.bind(gl.FRAMEBUFFER);
    gl.enable(gl.DEPTH_TEST);
    directionalShadowShaderProgram.use();
    gl.viewport(0, 0, this.shadowResolution, this.shadowResolution);
    gl.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    scene.directionalLight.calcAndSendLightSpaceMatrix(
      vec3_exports.zero(vec3_exports.create()),
      this.shadowOffset,
      directionalShadowShaderProgram.getUniformLocation("lightSpaceMatrix")[0]
    );
    scene.renderScene(directionalShadowShaderProgram, false);
  }
};

// src/Engine/Rendering/Objects/Camera.ts
var Camera = class {
  constructor() {
    this.pos = vec3_exports.create();
    this.dir = vec3_exports.fromValues(0, 0, -1);
    this.up = vec3_exports.fromValues(0, 1, 0);
    this.viewMatrix = mat4_exports.create();
    this.viewMatrixNeedsUpdate = true;
    this.projectionMatrix = mat4_exports.create();
    this.projMatrixNeedsUpdate = true;
    this.ratio = 16 / 9;
    this.fov = 85 * Math.PI / 180;
    this.farPlaneDistance = 1e3;
    this.viewProjMatrix = mat4_exports.create();
  }
  getViewProjMatrix() {
    this.updateViewProjMatrix();
    return this.viewProjMatrix;
  }
  getViewMatrix() {
    this.updateViewProjMatrix();
    return this.viewMatrix;
  }
  getProjectionMatrix() {
    this.updateViewProjMatrix();
    return this.projectionMatrix;
  }
  getFov() {
    return this.fov;
  }
  getPosition() {
    return this.pos;
  }
  getDir() {
    return this.dir;
  }
  getRight() {
    let returnVec = vec3_exports.create();
    vec3_exports.cross(returnVec, this.dir, this.up);
    vec3_exports.normalize(returnVec, returnVec);
    return returnVec;
  }
  setPosition(pos) {
    vec3_exports.copy(this.pos, pos);
    this.viewMatrixNeedsUpdate = true;
  }
  translate(translation) {
    vec3_exports.add(this.pos, this.pos, translation);
    this.viewMatrixNeedsUpdate = true;
  }
  setDir(dir) {
    vec3_exports.normalize(this.dir, dir);
    this.viewMatrixNeedsUpdate = true;
  }
  setUp(up) {
    vec3_exports.normalize(this.up, up);
    this.viewMatrixNeedsUpdate = true;
  }
  setPitchJawDegrees(pitch, jaw) {
    vec3_exports.set(
      this.dir,
      Math.cos(pitch * Math.PI / 180) * Math.sin(jaw * Math.PI / 180),
      Math.sin(pitch * Math.PI / 180),
      Math.cos(pitch * Math.PI / 180) * Math.cos(jaw * Math.PI / 180)
    );
    this.viewMatrixNeedsUpdate = true;
  }
  setPitchJawRadians(pitch, jaw) {
    vec3_exports.set(
      this.dir,
      Math.cos(pitch) * Math.sin(jaw),
      Math.sin(pitch),
      Math.cos(pitch) * Math.cos(jaw)
    );
    this.viewMatrixNeedsUpdate = true;
  }
  setFOV(fov) {
    this.fov = fov * Math.PI / 180;
    this.projMatrixNeedsUpdate = true;
  }
  setAspectRatio(ratio) {
    this.ratio = ratio;
    this.projMatrixNeedsUpdate = true;
  }
  setFarPlaneDistance(distance4) {
    this.farPlaneDistance = distance4;
    this.projMatrixNeedsUpdate;
  }
  updateViewProjMatrix() {
    let updateViewProj = false;
    if (this.viewMatrixNeedsUpdate) {
      mat4_exports.lookAt(this.viewMatrix, this.pos, vec3_exports.add(vec3_exports.create(), this.pos, this.dir), this.up);
      this.viewMatrixNeedsUpdate = false;
      updateViewProj = true;
    }
    if (this.projMatrixNeedsUpdate) {
      mat4_exports.perspective(this.projectionMatrix, this.fov, this.ratio, 0.01, this.farPlaneDistance);
      this.projMatrixNeedsUpdate = false;
      updateViewProj = true;
    }
    if (updateViewProj) {
      mat4_exports.mul(this.viewProjMatrix, this.projectionMatrix, this.viewMatrix);
    }
  }
  bindViewProjMatrix(uniformLocation, skybox = false) {
    this.updateViewProjMatrix();
    if (skybox) {
      let tempViewMatrix = mat4_exports.lookAt(mat4_exports.create(), vec3_exports.create(), this.dir, this.up);
      let tempViewProj = mat4_exports.mul(mat4_exports.create(), this.projectionMatrix, tempViewMatrix);
      gl.uniformMatrix4fv(uniformLocation, false, tempViewProj);
    } else {
      gl.uniformMatrix4fv(uniformLocation, false, this.viewProjMatrix);
    }
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/ShadowMapping/PointShadowShaderProgram.ts
var pointShadowVertexShaderSrc = `#version 300 es
// If inputs change, also update PointShadowPass::setupVertexAttributePointers to match
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec3 inNormal;
layout (location = 2) in vec2 inTexCoords;

uniform mat4 lightSpaceMatrix;
uniform mat4 modelMatrix;
uniform mat4 textureMatrix;

out vec2 texCoords;
out vec3 fragPos;

void main()
{
    gl_Position = lightSpaceMatrix * modelMatrix * vec4(inPosition, 1.0);
    fragPos = vec3(modelMatrix * vec4(inPosition, 1.0));
	texCoords = vec2(textureMatrix * vec4(inTexCoords, 0.0, 1.0));
}`;
var pointShadowFragmentShaderSrc = `#version 300 es
precision highp float;

in vec2 texCoords;
in vec3 fragPos;

uniform sampler2D diffuse;
uniform vec3 cameraPos;

mat4 thresholdMatrix = mat4(
	1.0, 9.0, 3.0, 11.0,
	13.0, 5.0, 15.0, 7.0,
	4.0, 12.0, 2.0, 10.0,
	16.0, 8.0, 14.0, 6.0
);


const float far_plane = 100.0;

void main()
{
    float opacity = texture(diffuse, texCoords).a;

	float threshold = thresholdMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))] / 17.0;
    if (threshold >= opacity) {
        discard;
    }

    // get distance between fragment and light source
    float lightDistance = length(fragPos - cameraPos);
    
    // map to [0;1] range by dividing by far_plane
    lightDistance = lightDistance / far_plane;
    
    // write this as modified depth
    gl_FragDepth = lightDistance;
}`;
var PointShadowShaderProgram = class extends ShaderProgram {
  constructor() {
    super("PointShadowPass", pointShadowVertexShaderSrc, pointShadowFragmentShaderSrc);
    this.use();
    this.setUniformLocation("lightSpaceMatrix");
    this.setUniformLocation("modelMatrix");
    this.setUniformLocation("textureMatrix");
    this.setUniformLocation("cameraPos");
  }
  setupVertexAttributePointers() {
    const stride = 8 * 4;
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, stride, 3 * 4);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, stride, 6 * 4);
    gl.enableVertexAttribArray(2);
  }
};
var pointShadowShaderProgram = null;
var createPointShadowShaderProgram = function() {
  pointShadowShaderProgram = new PointShadowShaderProgram();
};

// src/Engine/Rendering/Renderer/RenderPasses/ShadowPasses/PointShadowRenderPass.ts
var PointShadowRenderPass = class {
  constructor() {
    this.shadowResolution = 1023;
  }
  setShadowMappingResolution(res) {
    this.shadowResolution = res;
  }
  draw(scene) {
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);
    let pointLightCamera = new Camera();
    pointLightCamera.setFOV(90);
    pointLightCamera.setAspectRatio(1);
    pointLightCamera.setFarPlaneDistance(100);
    const directions = [
      vec3_exports.fromValues(1, 0, 0),
      vec3_exports.fromValues(-1, 0, 0),
      vec3_exports.fromValues(0, -1, 0),
      vec3_exports.fromValues(0, 1, 0),
      vec3_exports.fromValues(0, 0, -1),
      vec3_exports.fromValues(0, 0, 1)
    ];
    const ups = [
      vec3_exports.fromValues(0, 1, 0),
      vec3_exports.fromValues(0, 1, 0),
      vec3_exports.fromValues(0, 0, -1),
      vec3_exports.fromValues(0, 0, 1),
      vec3_exports.fromValues(0, 1, 0),
      vec3_exports.fromValues(0, 1, 0)
    ];
    let counter = 0;
    for (let pointLight of scene.pointLights) {
      if (counter >= pointShadowsToAllocate) {
        break;
      }
      if (pointLight.castShadow) {
        counter++;
        pointLightCamera.setPosition(pointLight.position);
        pointLight.pointShadowBuffer.bind(gl.FRAMEBUFFER);
        pointLight.pointShadowDepthMap.setTextureData(
          null,
          this.shadowResolution,
          this.shadowResolution
        );
        for (let i = 0; i < directions.length; i++) {
          pointLightCamera.setDir(directions[i]);
          pointLightCamera.setUp(ups[i]);
          gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.DEPTH_ATTACHMENT,
            gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
            pointLight.pointShadowDepthMap.texture,
            0
          );
          pointShadowShaderProgram.use();
          gl.viewport(0, 0, this.shadowResolution, this.shadowResolution);
          gl.clear(gl.DEPTH_BUFFER_BIT);
          pointLightCamera.bindViewProjMatrix(
            pointShadowShaderProgram.getUniformLocation("lightSpaceMatrix")[0]
          );
          gl.uniform3fv(
            pointShadowShaderProgram.getUniformLocation("cameraPos")[0],
            pointLightCamera.getPosition()
          );
          scene.renderScene(pointShadowShaderProgram, false);
        }
      }
    }
    gl.disable(gl.CULL_FACE);
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/Volumetric/VolumetricLightingShaderProgram.ts
var volumetricLightingFragmentShaderSrc;
var VolumetricLightingShaderProgram = class extends ShaderProgram {
  constructor() {
    super(
      "VolumetricLightingShaderProgram",
      screenQuadVertexSrc,
      volumetricLightingFragmentShaderSrc,
      false
    );
    this.use();
    this.setUniformLocation("viewProjMatrix");
    this.setUniformLocation("cameraPos");
    this.setUniformLocation("fogMaxDistance");
    this.setUniformLocation("fogDensity");
    this.setUniformLocation("gPosition");
    this.setUniformLocation("depthMap");
    gl.uniform1i(this.getUniformLocation("gPosition")[0], 0);
    gl.uniform1i(this.getUniformLocation("depthMap")[0], 1);
    this.setUniformLocation("nrOfPointLights");
    for (let i = 0; i < pointShadowsToAllocate; i++) {
      this.setUniformLocation("pointDepthMaps[" + i + "]");
      gl.uniform1i(this.getUniformLocation("pointDepthMaps[" + i + "]")[0], i + 2);
    }
    for (let i = 0; i < pointLightsToAllocate; i++) {
      this.setUniformLocation("pointLights[" + i + "].position");
      this.setUniformLocation("pointLights[" + i + "].colour");
      this.setUniformLocation("pointLights[" + i + "].constant");
      this.setUniformLocation("pointLights[" + i + "].linear");
      this.setUniformLocation("pointLights[" + i + "].quadratic");
      this.setUniformLocation("pointLights[" + i + "].pointDepthMapIndex");
    }
    this.setUniformLocation("directionalLight.direction");
    this.setUniformLocation("directionalLight.colour");
    this.setUniformLocation("directionalLight.ambientMultiplier");
    this.setUniformLocation("lightSpaceMatrix");
  }
  setupVertexAttributePointers() {
    const stride = 4 * 4;
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(1);
  }
};
var volumetricLightingShaderProgram = null;
var createVolumetricLightingShaderProgram = function() {
  volumetricLightingFragmentShaderSrc = `#version 300 es
precision highp float;

#define NR_POINT_LIGHTS ` + pointLightsToAllocate + `
#define NR_POINT_SHADOWS ` + pointShadowsToAllocate + `
in vec2 texCoords;

uniform mat4 viewProjMatrix;
uniform vec3 cameraPos;
uniform float fogMaxDistance;
uniform float fogDensity;

uniform sampler2D gPosition;
uniform sampler2D depthMap;
uniform samplerCube pointDepthMaps[NR_POINT_SHADOWS];

struct PointLight {
	vec3 position;
	vec3 colour;

	float constant;
	float linear;
	float quadratic;

	int pointDepthMapIndex;
};

struct DirectionalLight {
	vec3 direction;
	vec3 colour;
	float ambientMultiplier;
};

uniform DirectionalLight directionalLight;
uniform mat4 lightSpaceMatrix;
uniform PointLight pointLights[NR_POINT_LIGHTS];
uniform int nrOfPointLights;

out vec4 FragColor;
const float far_plane = 100.0;

const float scattering = 0.0;
const float steps = 20.0;

const mat4 offsetMatrix = mat4(
	0.0f, 0.5f, 0.125f, 0.625f,
	0.75f, 0.22f, 0.875f, 0.375f,
	0.1875f, 0.6875f, 0.0625f, 0.5625,
	0.9375f, 0.4375f, 0.8125f, 0.3125
);

float ComputeScattering(float lightDotView)
{
	float result = 1.0 - scattering * scattering;
	result /= (4.0 * 3.1415 * pow(1.0 + scattering * scattering - (2.0 * scattering) * lightDotView, 1.5));
	return result;
}


float CalcPointShadow(PointLight light, vec3 fragmentPos) {
	// get vector between fragment position and light position
    vec3 fragToLight = fragmentPos - light.position;
	fragToLight.y *= -1.0;
	fragToLight.z *= -1.0;
    // use the light to fragment vector to sample from the depth map
    float closestDepth = 1.0;`;
  for (let i = 0; i < pointShadowsToAllocate; i++) {
    if (i == 0) {
      volumetricLightingFragmentShaderSrc += `
	if (light.pointDepthMapIndex == ` + i + `) {
		closestDepth = texture(pointDepthMaps[` + i + `], fragToLight).r;
	}
	`;
    } else {
      volumetricLightingFragmentShaderSrc += `
	else if (light.pointDepthMapIndex == ` + i + `) {
		closestDepth = texture(pointDepthMaps[` + i + `], fragToLight).r;
	}
	`;
    }
  }
  volumetricLightingFragmentShaderSrc += `
    // it is currently in linear range between [0,1]. Re-transform back to original value
    closestDepth *= far_plane;
    // now get current linear depth as the length between the fragment and light position
    float currentDepth = length(fragToLight);
    // now test for shadows
    float shadow = currentDepth > closestDepth ? 1.0 : 0.0;

    return shadow;
}

// Calculates the colour when using a point light.
vec4 CalcPointLight(PointLight light, vec3 fragmentPos, vec3 rayDir) {
	if (light.pointDepthMapIndex >= 0 && light.pointDepthMapIndex < NR_POINT_SHADOWS && CalcPointShadow(light, fragmentPos) == 0.0) {
		float distance = length(light.position - fragmentPos);
		float attenuation = 1.0f / (light.constant + light.linear * distance + light.quadratic * (distance * distance));

		return vec4(light.colour * attenuation * ComputeScattering(dot(normalize(light.position - fragmentPos), rayDir)), 1.0); 
	} 
	return vec4(0.0, 0.0, 0.0, 0.0);
}

float CalcShadow(vec4 lightSpaceFragPos) {
	// perform perspective divide
    vec3 projCoords = lightSpaceFragPos.xyz / lightSpaceFragPos.w;

    // transform to [0,1] range
    projCoords = projCoords * 0.5 + 0.5;

	if (projCoords.z > 1.0) {
		return 0.0;
	}

    // get closest depth value from light's perspective (using [0,1] range fragPosLight as coords)
    float closestDepth = texture(depthMap, projCoords.xy).r; 

    // get depth of current fragment from light's perspective
    float currentDepth = projCoords.z;

    // check whether current frag pos is in shadow	
	float shadow = 0.0;
	ivec2 textureSize = textureSize(depthMap, 0);
	vec2 texelSize = vec2(1.0 / float(textureSize.x), 1.0 / float(textureSize.y));
	for(int x = -1; x <= 1; ++x)
	{
		for(int y = -1; y <= 1; ++y)
		{
			float pcfDepth = texture(depthMap, projCoords.xy + vec2(x, y) * texelSize).r; 
			shadow += currentDepth > pcfDepth ? 1.0 : 0.0;
		}    
	}
	shadow = shadow / 9.0;

    return shadow;
}

vec4 CalcDirectionalLight(DirectionalLight light, vec4 lightSpaceFragPos, vec3 rayDir) {
	float shadow = CalcShadow(lightSpaceFragPos);
	return vec4(light.colour * (1.0 - shadow) * ComputeScattering(dot(light.direction, rayDir)), 1.0); 
}

void main()
{
    vec4 result = vec4(0.0, 0.0, 0.0, 0.0);

	vec3 fragPos = vec3(0.0, 0.0, 0.0);
	vec4 gPosValues = texture(gPosition, texCoords);

	if (gPosValues.a < 0.01) {
		vec4 clipSpacePos = inverse(viewProjMatrix) * vec4(texCoords.xy * 2.0 - vec2(1.0, 1.0), 1.0, 1.0);
		vec3 worldPos = vec3(clipSpacePos.xyz / clipSpacePos.w);
		fragPos = cameraPos + normalize(worldPos - cameraPos) * fogMaxDistance;
	}
	else {
		fragPos.rgb = gPosValues.rgb;
	}

	vec3 dir = fragPos - cameraPos;
	float maxDistance = min(length(dir), fogMaxDistance);
	dir = normalize(dir);

	vec3 stepOffset = dir * (maxDistance / steps);
	vec3 startPos = cameraPos + stepOffset * offsetMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))];

	for (float step = 0.0; step < steps; step += 1.0) {
		vec4 tempResult;
		float effectedCounter = 0.0;
		vec3 pos = startPos + stepOffset * step;
		vec4 lightSpaceFragPos = (lightSpaceMatrix * vec4(pos, 1.0f));
		vec4 dirLightResult = CalcDirectionalLight(directionalLight, lightSpaceFragPos, dir);
		if (dirLightResult.a > 0.0) {
			effectedCounter += 1.0;
			tempResult += dirLightResult;
		}

		for (int i = 0; i < nrOfPointLights; i++) {
			vec4 lightResult = CalcPointLight(pointLights[i], pos, dir);
			if (lightResult.a > 0.0) {
				effectedCounter += 1.0;
				tempResult += lightResult;
			}
		}

		tempResult /= min(effectedCounter, 1.0);
		result += tempResult;
	}
	// result /= steps;
	result.a = (result.a / steps) * fogDensity;
	FragColor = result;

	// FragColor = vec4(1.0, 1.0, 1.0, maxDistance / fogMaxDistance);
}
`;
  volumetricLightingShaderProgram = new VolumetricLightingShaderProgram();
};

// src/Engine/Rendering/Renderer/RenderPasses/Volumetric/VolumetricLightingPass.ts
var VolumetricLightingPass = class {
  constructor(positionTexture, directionalDepthMap) {
    this.outputBuffer = null;
    this.fogMaxDistance = 100;
    this.fogDensity = 0.2;
    this.screenQuad = new ScreenQuad(volumetricLightingShaderProgram, [positionTexture, directionalDepthMap]);
  }
  bindFramebuffers() {
    if (this.outputBuffer == void 0) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    } else {
      this.outputBuffer.bind(gl.DRAW_FRAMEBUFFER);
    }
  }
  draw(scene, camera) {
    this.bindFramebuffers();
    volumetricLightingShaderProgram.use();
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    camera.bindViewProjMatrix(
      volumetricLightingShaderProgram.getUniformLocation("viewProjMatrix")[0]
    );
    gl.uniform3fv(
      volumetricLightingShaderProgram.getUniformLocation("cameraPos")[0],
      camera.getPosition()
    );
    scene.directionalLight.bind(volumetricLightingShaderProgram);
    scene.directionalLight.calcAndSendLightSpaceMatrix(
      vec3_exports.zero(vec3_exports.create()),
      40,
      volumetricLightingShaderProgram.getUniformLocation("lightSpaceMatrix")[0]
    );
    gl.uniform1f(volumetricLightingShaderProgram.getUniformLocation("fogMaxDistance")[0], this.fogMaxDistance);
    gl.uniform1f(volumetricLightingShaderProgram.getUniformLocation("fogDensity")[0], this.fogDensity);
    gl.uniform1i(
      volumetricLightingShaderProgram.getUniformLocation("nrOfPointLights")[0],
      scene.pointLights.length
    );
    let counter = 0;
    for (let i = 0; i < scene.pointLights.length; i++) {
      scene.pointLights[i].bind(i, counter, volumetricLightingShaderProgram);
      if (scene.pointLights[i].castShadow) {
        counter++;
      }
    }
    counter = this.screenQuad.textures.length;
    for (const pointLight of scene.pointLights) {
      if (counter - this.screenQuad.textures.length >= pointShadowsToAllocate) {
        break;
      }
      if (pointLight.castShadow) {
        pointLight.pointShadowDepthMap.bind(counter++);
      }
    }
    this.screenQuad.draw(true);
    gl.disable(gl.BLEND);
    gl.enable(gl.DEPTH_TEST);
  }
};

// src/Engine/Rendering/Renderer/ShaderPrograms/Particles/ParticleShaderProgram.ts
var particleVertexShaderSrc = `#version 300 es

layout (location = 0) in vec2 inVertexPosition;
layout (location = 1) in vec2 inTexCoords;

// Instanced attributes starts here
layout (location = 2) in vec3 inStartPosition;
layout (location = 3) in float inSize;
layout (location = 4) in vec3 inStartVel;
layout (location = 5) in float inStartTime;
layout (location = 6) in vec3 inConstantAcceleration;
// layout (location = 7) in float padding;

uniform mat4 viewProjMatrix;
uniform vec3 cameraPos;
uniform float currentTime;
uniform float fadePerSecond;
uniform float sizeChangePerSecond;
uniform float lifeTime;

out vec2 texCoords;
out float alpha;

void main() {
    // Calculate how long this has been alive
    float currentLifeTime = mod(currentTime - inStartTime, lifeTime);

    // Calculate current position
    vec3 currentPos = inStartPosition + (inStartVel * currentLifeTime + (inConstantAcceleration * currentLifeTime) * currentLifeTime) / 2.0;

    // Billboarding
    vec3 camDir = cameraPos - currentPos;
    vec3 rightVec = normalize(cross(vec3(0.0, 1.0, 0.0), camDir));
    vec3 upVec = normalize(cross(camDir, rightVec));
    rightVec = rightVec * inVertexPosition.x * (inSize + sizeChangePerSecond * currentLifeTime);
    upVec = upVec * inVertexPosition.y * (inSize + sizeChangePerSecond * currentLifeTime);
    gl_Position = viewProjMatrix * vec4(rightVec + upVec + currentPos, 1.0);

    // gl_Position = viewProjMatrix * vec4(vec3(inVertexPosition, 0.0) * inSize + currentPos, 1.0); // No billboarding
    texCoords = inTexCoords;
    alpha = max(1.0 - currentLifeTime * fadePerSecond, 0.0);
}`;
var particleFragmentShaderSrc = `#version 300 es
precision highp float;

in vec2 texCoords;
in float alpha;

uniform sampler2D texture0;

layout (location = 0) out vec4 FragColor;
layout (location = 1) out float FragOpacity;

mat4 thresholdMatrix = mat4(
    1.0, 9.0, 3.0, 11.0,
    13.0, 5.0, 15.0, 7.0,
    4.0, 12.0, 2.0, 10.0,
    16.0, 8.0, 14.0, 6.0
    );

void main()
{
    FragColor = texture(texture0, texCoords);

    FragColor.a = FragColor.a * alpha;
    
    float threshold = thresholdMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))] / 17.0;
    if (threshold >= FragColor.a) {
        discard;
    }

	FragOpacity = FragColor.a;

    FragColor.a = 1.0f; // Since we use screen door transparency, do not use alpha value
}`;
var ParticleShaderProgram = class extends ShaderProgram {
  constructor() {
    super("ParticleShaderProgram", particleVertexShaderSrc, particleFragmentShaderSrc, false);
    this.use();
    this.setUniformLocation("texture0");
    gl.uniform1i(this.getUniformLocation("texture0")[0], 0);
    this.setUniformLocation("viewProjMatrix");
    this.setUniformLocation("cameraPos");
    this.setUniformLocation("currentTime");
    this.setUniformLocation("fadePerSecond");
    this.setUniformLocation("sizeChangePerSecond");
    this.setUniformLocation("lifeTime");
  }
  setupVertexAttributePointers() {
    const stride = 4 * 4;
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(1);
  }
  setupInstancedVertexAttributePointers() {
    const stride = 11 * 4;
    gl.vertexAttribPointer(2, 3, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribDivisor(2, 1);
    gl.vertexAttribPointer(3, 1, gl.FLOAT, false, stride, 3 * 4);
    gl.enableVertexAttribArray(3);
    gl.vertexAttribDivisor(3, 1);
    gl.vertexAttribPointer(4, 3, gl.FLOAT, false, stride, 4 * 4);
    gl.enableVertexAttribArray(4);
    gl.vertexAttribDivisor(4, 1);
    gl.vertexAttribPointer(5, 1, gl.FLOAT, false, stride, 7 * 4);
    gl.enableVertexAttribArray(5);
    gl.vertexAttribDivisor(5, 1);
    gl.vertexAttribPointer(6, 3, gl.FLOAT, false, stride, 8 * 4);
    gl.enableVertexAttribArray(6);
    gl.vertexAttribDivisor(6, 1);
  }
};
var particleShaderProgram = null;
var createParticleShaderProgram = function() {
  particleShaderProgram = new ParticleShaderProgram();
};

// src/Engine/Rendering/Renderer/RenderPasses/Particles/ParticleRenderPass.ts
var ParticleRenderPass = class {
  constructor() {
    this.outputBuffer = null;
  }
  bindFramebuffers() {
    if (this.outputBuffer == void 0) {
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    } else {
      this.outputBuffer.bind(gl.DRAW_FRAMEBUFFER);
    }
  }
  draw(scene, camera) {
    gl.clearBufferfv(gl.COLOR, 1, [0, 0, 0, 1]);
    if (scene.particleSpawners.length > 0) {
      particleShaderProgram.use();
      camera.bindViewProjMatrix(particleShaderProgram.getUniformLocation("viewProjMatrix")[0]);
      gl.uniform3fv(particleShaderProgram.getUniformLocation("cameraPos")[0], camera.getPosition());
      gl.uniform1f(
        particleShaderProgram.getUniformLocation("currentTime")[0],
        (Date.now() - rendererStartTime) * 1e-3
      );
      for (const particleSpawner of scene.particleSpawners.values()) {
        particleSpawner.draw();
      }
    }
  }
};

// src/Engine/Rendering/Renderer/Renderer.ts
var gl;
var rendererStartTime = Date.now();
var Renderer = class {
  // -------------------------
  constructor() {
    this.initGL();
    this.createShaders();
    this.width = 100;
    this.height = 100;
    this.directionalShadowRenderPass = new DirectionalShadowRenderPass();
    this.pointShadowRenderPass = new PointShadowRenderPass();
    this.geometryRenderPass = new GeometryRenderPass();
    let textureArray = new Array();
    for (let i = 0; i < this.geometryRenderPass.outputFramebuffer.textures.length; i++) {
      textureArray.push(this.geometryRenderPass.outputFramebuffer.textures[i]);
    }
    textureArray.push(this.directionalShadowRenderPass.shadowBuffer.depthTexture);
    this.lightingRenderPass = new LightingRenderPass(textureArray);
    this.useSkybox = false;
    this.skyboxRenderPass = new SkyboxRenderPass();
    this.particleRenderPass = new ParticleRenderPass();
    this.volumetricLightingPass = new VolumetricLightingPass(this.geometryRenderPass.outputFramebuffer.textures[0], this.directionalShadowRenderPass.shadowBuffer.depthTexture);
    this.useVolumetric = false;
    this.finishedFramebuffer = new Framebuffer(
      this.width,
      this.height,
      [new Texture(false)],
      null
    );
    this.volumetricLightingPass.outputBuffer = this.finishedFramebuffer;
    this.particleRenderPass.outputBuffer = this.finishedFramebuffer;
    this.finishedOutputRenderPass = new ScreenQuadPass(this.finishedFramebuffer.textures[0]);
  }
  createShaders() {
    createGeometryPassShaderProgram();
    createLightingPassShaderProgram();
    createDirectionalShadowShaderProgram();
    createPointShadowShaderProgram();
    createParticleShaderProgram();
    createVolumetricLightingShaderProgram();
    createSkyboxShaderProgram();
    createScreenQuadShaderProgram();
  }
  initGL() {
    this.domElement = document.createElement("canvas");
    gl = this.domElement.getContext("webgl2", { antialias: false });
    if (!gl.getExtension("EXT_color_buffer_float")) {
      alert("Rendering to floating point textures is not supported on this platform");
    }
    if (!gl.getExtension("OES_texture_float_linear")) {
      alert("Floating point rendering to FBO textures not supported");
    }
    if (!gl) {
      console.log("Failed to get rendering context for WebGL");
      return;
    }
    this.clearColour = { r: 0, g: 0, b: 0, a: 1 };
    gl.clearColor(this.clearColour.r, this.clearColour.g, this.clearColour.b, this.clearColour.a);
    gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
    gl.cullFace(gl.BACK);
    gl.enable(gl.CULL_FACE);
  }
  setSize(x, y, updateStyle = false) {
    this.width = x;
    this.height = y;
    this.domElement.width = this.width;
    this.domElement.height = this.height;
    this.geometryRenderPass.setResolution(x, y);
    this.finishedFramebuffer.setProportions(x, y);
  }
  setSkybox(path) {
    if (path != void 0) {
      this.skyboxRenderPass.setSkybox(textureStore.getCubeMap(path));
      this.useSkybox = true;
    } else {
      this.useSkybox = false;
    }
  }
  setFogDensity(density) {
    this.volumetricLightingPass.fogDensity = density;
  }
  takeScreenshot(screenshotName) {
    var offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = gl.canvas.width;
    offscreenCanvas.height = gl.canvas.height;
    var ctx = offscreenCanvas.getContext("2d");
    ctx.drawImage(gl.canvas, 0, 0);
    const saveBlob = function() {
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      return function saveData(blob, fileName) {
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
      };
    }();
    offscreenCanvas.toBlob((blob) => {
      saveBlob(blob, screenshotName);
    });
  }
  render(scene, camera, saveScreenshot = false, screenshotName = "screencapture") {
    gl.enable(gl.DEPTH_TEST);
    scene.calculateAllTransforms();
    this.directionalShadowRenderPass.draw(scene);
    this.pointShadowRenderPass.draw(scene);
    this.geometryRenderPass.draw(scene, camera);
    this.particleRenderPass.bindFramebuffers();
    gl.clearColor(this.clearColour.r, this.clearColour.g, this.clearColour.b, this.clearColour.a);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
    this.lightingRenderPass.draw(scene, camera);
    this.geometryRenderPass.outputFramebuffer.bind(gl.READ_FRAMEBUFFER);
    gl.blitFramebuffer(
      0,
      0,
      this.width,
      this.height,
      0,
      0,
      this.width,
      this.height,
      gl.DEPTH_BUFFER_BIT,
      gl.NEAREST
    );
    if (this.useSkybox) {
      this.skyboxRenderPass.draw(camera);
    }
    this.particleRenderPass.draw(scene, camera);
    if (this.useVolumetric) {
      this.volumetricLightingPass.draw(scene, camera);
    }
    this.finishedOutputRenderPass.draw();
    if (saveScreenshot) {
      this.takeScreenshot(screenshotName);
    }
  }
};

// src/Engine/Rendering/Objects/Lighting/DirectionalLight.ts
var DirectionalLight = class {
  constructor() {
    this.direction = vec3_exports.fromValues(0, -1, -0.5);
    this.colour = vec3_exports.fromValues(0.2, 0.2, 0.2);
    this.ambientMultiplier = 0.1;
    this.lightProjectionBoxSideLength = 60;
  }
  bind(shaderProgram) {
    gl.uniform3fv(
      shaderProgram.getUniformLocation("directionalLight.direction")[0],
      vec3_exports.normalize(this.direction, this.direction)
    );
    gl.uniform3fv(shaderProgram.getUniformLocation("directionalLight.colour")[0], this.colour);
    gl.uniform1f(
      shaderProgram.getUniformLocation("directionalLight.ambientMultiplier")[0],
      this.ambientMultiplier
    );
  }
  calcAndSendLightSpaceMatrix(focusPos, offset, uniformLocation) {
    let cameraPos = vec3_exports.clone(focusPos);
    let offsetVec = vec3_exports.scale(
      vec3_exports.create(),
      vec3_exports.normalize(vec3_exports.create(), this.direction),
      offset
    );
    let lightSpaceMatrix = mat4_exports.ortho(
      mat4_exports.create(),
      -this.lightProjectionBoxSideLength,
      this.lightProjectionBoxSideLength,
      -this.lightProjectionBoxSideLength,
      this.lightProjectionBoxSideLength,
      0.1,
      offset * 2
    );
    vec3_exports.subtract(cameraPos, cameraPos, offsetVec);
    let lightView = mat4_exports.lookAt(mat4_exports.create(), cameraPos, focusPos, vec3_exports.fromValues(0, 1, 0));
    mat4_exports.mul(lightSpaceMatrix, lightSpaceMatrix, lightView);
    gl.uniformMatrix4fv(uniformLocation, false, lightSpaceMatrix);
  }
};

// src/Engine/Rendering/AssetHandling/Textures/CubeMap.ts
var CubeMap = class extends Texture {
  constructor(useMipMap = true, internalFormat = gl.RGBA, format = gl.RGBA, dataStorageType = gl.UNSIGNED_BYTE, textureTarget = gl.TEXTURE_CUBE_MAP) {
    super(useMipMap, internalFormat, format, dataStorageType, textureTarget);
    this.setTexParameterI(gl.TEXTURE_WRAP_R, gl.REPEAT);
    this.sidesLoaded = 0;
  }
  /**
   *
   * @param data - the data to set for the texture
   * @param width - width of the texture
   * @param height - height of the texture
   * @param face - cubemap face to set, leave empty to set data for all faces
   */
  setTextureData(data, width, height, face) {
    this.width = width;
    this.height = height;
    gl.bindTexture(this.textureTarget, this.texture);
    if (face == void 0) {
      for (let i = 0; i < 6; i++) {
        gl.texImage2D(
          gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
          0,
          this.internalFormat,
          this.width,
          this.height,
          0,
          this.format,
          this.dataStorageType,
          data
        );
      }
    } else {
      gl.texImage2D(
        face,
        0,
        this.internalFormat,
        this.width,
        this.height,
        0,
        this.format,
        this.dataStorageType,
        data
      );
    }
    gl.bindTexture(this.textureTarget, null);
  }
  loadCubemap(URLs) {
    for (let i = 0; i < URLs.length; i++) {
      let image = new Image();
      image.crossOrigin = "";
      image.src = URLs[i];
      let self = this;
      image.addEventListener("load", function() {
        self.width = image.width;
        self.height = image.height;
        gl.bindTexture(self.textureTarget, self.texture);
        gl.texImage2D(
          gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
          0,
          self.internalFormat,
          self.format,
          self.dataStorageType,
          image
        );
        self.sidesLoaded++;
        if (self.sidesLoaded >= 6) {
          self.loadedFromFile = true;
          if (self.useMipMap) {
            gl.generateMipmap(self.textureTarget);
            gl.texParameteri(self.textureTarget, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
          }
        }
      });
    }
  }
};

// src/Engine/Rendering/Objects/Lighting/PointLight.ts
var PointLight = class {
  constructor() {
    this.position = vec3_exports.fromValues(0, 0, 0);
    this.colour = vec3_exports.fromValues(1, 1, 1);
    this.constant = 1;
    this.linear = 0.07;
    this.quadratic = 0.017;
    this.castShadow = false;
    this.pointShadowDepthMap = new CubeMap(
      false,
      gl.DEPTH_COMPONENT32F,
      gl.DEPTH_COMPONENT,
      gl.FLOAT
    );
    this.pointShadowDepthMap.setTextureData(null, 1024, 1024);
    this.pointShadowBuffer = new Framebuffer(1024, 1024, [], this.pointShadowDepthMap);
  }
  bind(lightIndex, depthMapIndex, shaderProgram) {
    let ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].position");
    if (ul[1]) {
      gl.uniform3fv(ul[0], this.position);
    }
    ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].colour");
    if (ul[1]) {
      gl.uniform3fv(ul[0], this.colour);
    }
    ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].constant");
    if (ul[1]) {
      gl.uniform1f(ul[0], this.constant);
    }
    ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].linear");
    if (ul[1]) {
      gl.uniform1f(ul[0], this.linear);
    }
    ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].quadratic");
    if (ul[1]) {
      gl.uniform1f(ul[0], this.quadratic);
    }
    ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].pointDepthMapIndex");
    if (ul[1]) {
      gl.uniform1i(ul[0], this.castShadow ? depthMapIndex : -1);
    }
  }
};

// src/Engine/Shared/Transform.ts
var Transform = class {
  constructor() {
    this.parentTransform = null;
    this.position = vec3_exports.create();
    this.rotation = quat_exports.create();
    this.scale = vec3_exports.fromValues(1, 1, 1);
    this.origin = vec3_exports.create();
    this.matrix = mat4_exports.create();
  }
  translate(translation) {
    vec3_exports.add(this.position, this.position, translation);
  }
  setTranslation(translation) {
    vec3_exports.copy(this.position, translation);
  }
  calculateMatrix(matrix = this.matrix, identityMatrixFirst = true) {
    if (identityMatrixFirst) {
      mat4_exports.identity(matrix);
    }
    if (this.parentTransform != void 0) {
      this.parentTransform.calculateMatrix(matrix, false);
    }
    mat4_exports.translate(matrix, matrix, this.position);
    mat4_exports.multiply(matrix, matrix, mat4_exports.fromQuat(mat4_exports.create(), this.rotation));
    mat4_exports.scale(matrix, matrix, this.scale);
    mat4_exports.translate(matrix, matrix, vec3_exports.negate(vec3_exports.create(), this.origin));
  }
};

// src/Engine/Rendering/Objects/GraphicsBundle.ts
var GraphicsBundle = class {
  constructor(diffuse, specular, graphicsObject, emissionMap) {
    this.diffuse = diffuse;
    this.specular = specular;
    if (emissionMap != void 0) {
      this.emission = emissionMap;
    } else {
      this.emission = new Texture();
      this.emission.setTextureData(new Uint8Array([0, 0, 0, 0]), 1, 1);
    }
    this.emissionColor = vec3_exports.fromValues(0, 0, 0);
    this.transform = new Transform();
    this.textureMatrix = mat4_exports.create();
    this.normalMatrix = mat3_exports.create();
    this.graphicsObject = graphicsObject;
    this.enabled = true;
  }
  draw(bindSpecialTextures = true) {
    if (this.enabled) {
      this.diffuse.bind(0);
      if (bindSpecialTextures) {
        this.specular.bind(1);
        this.emission.bind(2);
      }
      let emissionColorU = this.graphicsObject.shaderProgram.getUniformLocation("emissionColor");
      if (emissionColorU[1]) {
        gl.uniform3fv(emissionColorU[0], this.emissionColor);
      }
      let modelReturn = this.graphicsObject.shaderProgram.getUniformLocation("modelMatrix");
      if (modelReturn[1]) {
        gl.uniformMatrix4fv(modelReturn[0], false, this.transform.matrix);
      }
      let textureReturn = this.graphicsObject.shaderProgram.getUniformLocation("textureMatrix");
      if (textureReturn[1]) {
        gl.uniformMatrix4fv(textureReturn[0], false, this.textureMatrix);
      }
      let normalReturn = this.graphicsObject.shaderProgram.getUniformLocation("normalMatrix");
      if (normalReturn[1]) {
        gl.uniformMatrix3fv(normalReturn[0], false, this.normalMatrix);
      }
      this.graphicsObject.draw();
    }
  }
};

// src/Engine/Rendering/Objects/GraphicsObjects/ParticleSpawner.ts
var ParticleSpawner = class extends GraphicsObject {
  constructor(shaderProgram, texture, numberOfStartingParticles = 0) {
    super(shaderProgram);
    this.texture = texture;
    this.bindVAO();
    this.instanceVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
    gl.bufferData(gl.ARRAY_BUFFER, numberOfStartingParticles * 11 * 4, gl.DYNAMIC_DRAW);
    shaderProgram.setupInstancedVertexAttributePointers();
    this.unbindVAO();
    this.vertices = new Float32Array([
      // positions  // uv
      -0.5,
      0.5,
      0,
      1,
      -0.5,
      -0.5,
      0,
      0,
      0.5,
      -0.5,
      1,
      0,
      0.5,
      0.5,
      1,
      1
    ]);
    this.indices = new Int32Array([
      0,
      1,
      2,
      0,
      2,
      3
    ]);
    this.setVertexData(this.vertices);
    this.setIndexData(this.indices);
    this.numParticles = numberOfStartingParticles;
    this.fadePerSecond = 0;
    this.sizeChangePerSecond = 1;
    this.lifeTime = 1;
  }
  setNumParticles(amount) {
    this.numParticles = amount;
    this.bindVAO();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
    gl.bufferData(gl.ARRAY_BUFFER, this.numParticles * 11 * 4, gl.DYNAMIC_DRAW);
    this.unbindVAO();
  }
  getNumberOfParticles() {
    return this.numParticles;
  }
  setParticleData(particleIndex, startPosition, size, startVel, acceleration, startTime) {
    if (particleIndex > this.numParticles) {
      return false;
    }
    let time = (Date.now() - applicationStartTime) * 1e-3;
    if (startTime != void 0) {
      time = startTime;
    }
    let data = new Float32Array([
      startPosition[0],
      startPosition[1],
      startPosition[2],
      size,
      startVel[0],
      startVel[1],
      startVel[2],
      time,
      acceleration[0],
      acceleration[1],
      acceleration[2]
    ]);
    this.bufferSubDataUpdate(particleIndex * 11, data);
    return true;
  }
  setParticleStartPosition(particleIndex, position) {
    if (particleIndex > this.numParticles) {
      return false;
    }
    this.bufferSubDataUpdate(particleIndex * 11, position);
    return true;
  }
  setParticleSize(particleIndex, size) {
    if (particleIndex > this.numParticles) {
      return false;
    }
    this.bufferSubDataUpdate(particleIndex * 11 + 3, new Float32Array([size]));
    return true;
  }
  setParticleStartVelocity(particleIndex, vel) {
    if (particleIndex > this.numParticles) {
      return false;
    }
    this.bufferSubDataUpdate(particleIndex * 11 + 4, vel);
    return true;
  }
  setParticleStartTime(particleIndex, time) {
    if (particleIndex > this.numParticles) {
      return false;
    }
    this.bufferSubDataUpdate(particleIndex * 11 + 7, new Float32Array([time]));
    return true;
  }
  resetParticleStartTime(particleIndex) {
    if (particleIndex > this.numParticles) {
      return false;
    }
    this.bufferSubDataUpdate(
      particleIndex * 11 + 7,
      new Float32Array([(Date.now() - applicationStartTime) * 1e-3])
    );
    return true;
  }
  setParticleAcceleration(particleIndex, acc) {
    if (particleIndex > this.numParticles) {
      return false;
    }
    this.bufferSubDataUpdate(particleIndex * 11 + 8, acc);
    return true;
  }
  bufferSubDataUpdate(start, data) {
    if (start > this.numParticles * 11) {
      return false;
    }
    this.bindVAO();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
    gl.bufferSubData(gl.ARRAY_BUFFER, start * 4, data);
    this.unbindVAO();
    return true;
  }
  draw() {
    this.bindVAO();
    this.texture.bind(0);
    gl.uniform1f(this.shaderProgram.getUniformLocation("fadePerSecond")[0], this.fadePerSecond);
    gl.uniform1f(
      this.shaderProgram.getUniformLocation("sizeChangePerSecond")[0],
      this.sizeChangePerSecond
    );
    gl.uniform1f(
      this.shaderProgram.getUniformLocation("lifeTime")[0],
      this.lifeTime
    );
    gl.drawElementsInstanced(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0, this.getNumberOfParticles());
    this.unbindVAO();
  }
};

// src/Engine/Rendering/Renderer/Scene.ts
var Scene = class {
  // ----------------
  constructor() {
    this.graphicBundles = new Array();
    this.particleSpawners = new Array();
    this.directionalLight = new DirectionalLight();
    this.pointLights = new Array();
  }
  addNewMesh(meshPath, diffusePath, specularPath) {
    const length5 = this.graphicBundles.push(
      new GraphicsBundle(
        textureStore.getTexture(diffusePath),
        textureStore.getTexture(specularPath),
        meshStore.getMesh(geometryPassShaderProgram, meshPath)
      )
    );
    return this.graphicBundles[length5 - 1];
  }
  addNewParticleSpawner(texturePath, numberOfStartingParticles = 0) {
    let length5 = this.particleSpawners.push(
      new ParticleSpawner(
        particleShaderProgram,
        textureStore.getTexture(texturePath),
        numberOfStartingParticles
      )
    );
    return this.particleSpawners[length5 - 1];
  }
  addNewPointLight() {
    const length5 = this.pointLights.push(new PointLight());
    return this.pointLights[length5 - 1];
  }
  getDirectionalLight() {
    return this.directionalLight;
  }
  deleteGraphicsBundle(object) {
    this.graphicBundles = this.graphicBundles.filter((o) => object !== o);
  }
  deletePointLight(light) {
    this.pointLights = this.pointLights.filter((l) => light !== l);
  }
  calculateAllTransforms() {
    for (let bundle of this.graphicBundles) {
      bundle.transform.calculateMatrix();
    }
  }
  renderScene(shaderProgram, bindSpecialTextures = true) {
    for (let bundle of this.graphicBundles) {
      bundle.graphicsObject.shaderProgram = shaderProgram;
      bundle.draw(bindSpecialTextures);
    }
  }
};

// src/Engine/Rendering/AssetHandling/TextureStore.ts
var TextureStore = class {
  constructor() {
    this.textures = /* @__PURE__ */ new Map();
    this.cubeMaps = /* @__PURE__ */ new Map();
  }
  setTexture(path, texture) {
    this.textures.set(path, texture);
  }
  getTexture(path) {
    let tex = this.textures.get(path);
    if (tex) {
      return tex;
    }
    let newTexture = new Texture();
    const CSSPrefix = "CSS:";
    if (path.startsWith(CSSPrefix)) {
      newTexture.createFromCSSColorValue(path.substring(CSSPrefix.length));
    } else {
      newTexture.loadFromFile(path);
    }
    this.textures.set(path, newTexture);
    return newTexture;
  }
  getCubeMap(path) {
    let cubeMap = this.cubeMaps.get(path);
    if (cubeMap) {
      return cubeMap;
    }
    let newCubeMap = new CubeMap();
    newCubeMap.loadCubemap([
      path + "/right.png",
      path + "/left.png",
      path + "/bottom.png",
      path + "/top.png",
      path + "/front.png",
      path + "/back.png"
    ]);
    this.cubeMaps.set(path, newCubeMap);
    return newCubeMap;
  }
};

// src/Engine/Rendering/Objects/GraphicsObjects/Mesh.ts
var Mesh = class extends GraphicsObject {
  constructor(shaderProgram, vertices) {
    super(shaderProgram);
    this.vertices = vertices;
    this.setVertexData(this.vertices);
  }
  setVertexData(data) {
    super.setVertexData(data);
    this.vertices = data;
  }
  getVertexPositions() {
    let returnArr = new Array();
    for (let i = 0; i < this.vertices.length; i += 8) {
      returnArr.push(vec3_exports.fromValues(this.vertices[i], this.vertices[i + 1], this.vertices[i + 2]));
    }
    return returnArr;
  }
  draw() {
    if (this.vertices != void 0 && this.vertices.length > 0) {
      this.bindVAO();
      gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length / 8);
    }
  }
};

// src/Engine/Rendering/AssetHandling/MeshStore.ts
var MeshStore = class {
  constructor(textureStore2) {
    this.meshMap = /* @__PURE__ */ new Map();
    this.heightmapMap = /* @__PURE__ */ new Map();
    this.textureStore = textureStore2;
  }
  getMesh(shaderProgram, path, printWarnings = true) {
    let mesh = this.meshMap.get(path);
    if (mesh) {
      return mesh;
    }
    this.meshMap.set(path, new Mesh(shaderProgram, null));
    let newlyCreatedMesh = this.meshMap.get(path);
    this.parseObjContent(path).then((data) => {
      newlyCreatedMesh.setVertexData(data);
    });
    return newlyCreatedMesh;
  }
  parseObjContent(meshPath) {
    return __async(this, null, function* () {
      const response = yield fetch(meshPath);
      const objContent = yield response.text();
      const lines = objContent.split("\n");
      let vertexPositions = new Array();
      let vertexTexCoords = new Array();
      let vertexNormals = new Array();
      let vertices = new Array();
      let mtls = /* @__PURE__ */ new Map();
      let usingMtl = "";
      for (let line of lines) {
        line = line.trim();
        if (line.startsWith("mtllib")) {
          const mtlName = line.split(/\s+/).filter((element) => {
            return element != "mtllib";
          });
          if (mtlName.length == 1) {
            let mtlPath = meshPath.substring(0, meshPath.lastIndexOf("/") + 1) + mtlName;
            try {
              const mtlResponse = yield fetch(mtlPath);
              if (mtlResponse.ok) {
                const mtlContent = yield mtlResponse.text();
                let lastMtl = "";
                let index = 0;
                for (const row of mtlContent.split("\n")) {
                  if (row.startsWith("newmtl")) {
                    let splitRow = row.split(/\s+/);
                    if (splitRow.length > 1) {
                      lastMtl = splitRow[1];
                      mtls.set(lastMtl, {
                        diffuseColor: vec3_exports.create(),
                        specularColor: vec3_exports.create(),
                        emissionColor: vec3_exports.create(),
                        dissolve: 1,
                        spriteIndex: index
                      });
                      index++;
                    }
                  } else if (row.startsWith("Kd") && lastMtl != "") {
                    const colorValues = row.split(/\s+/).filter((element) => {
                      return element != "Kd";
                    });
                    if (colorValues.length > 2) {
                      vec3_exports.set(
                        mtls.get(lastMtl).diffuseColor,
                        parseFloat(colorValues[0]),
                        parseFloat(colorValues[1]),
                        parseFloat(colorValues[2])
                      );
                    }
                  } else if (row.startsWith("Ks") && lastMtl != "") {
                    const colorValues = row.split(/\s+/).filter((element) => {
                      return element != "Ks";
                    });
                    if (colorValues.length > 2) {
                      vec3_exports.set(
                        mtls.get(lastMtl).specularColor,
                        parseFloat(colorValues[0]),
                        parseFloat(colorValues[1]),
                        parseFloat(colorValues[2])
                      );
                    }
                  } else if (row.startsWith("Ke") && lastMtl != "") {
                    const colorValues = row.split(/\s+/).filter((element) => {
                      return element != "Ke";
                    });
                    if (colorValues.length > 2) {
                      vec3_exports.set(
                        mtls.get(lastMtl).emissionColor,
                        parseFloat(colorValues[0]),
                        parseFloat(colorValues[1]),
                        parseFloat(colorValues[2])
                      );
                    }
                  } else if (row.startsWith("d") && lastMtl != "") {
                    const colorValues = row.split(/\s+/).filter((element) => {
                      return element != "d";
                    });
                    if (colorValues.length > 0) {
                      mtls.get(lastMtl).dissolve = parseFloat(colorValues[0]);
                    }
                  }
                }
                let diffuseTextureData = new Uint8Array(index * 4);
                for (let mtl of mtls) {
                  diffuseTextureData[mtl[1].spriteIndex * 4 + 0] = mtl[1].diffuseColor[0] * 255;
                  diffuseTextureData[mtl[1].spriteIndex * 4 + 1] = mtl[1].diffuseColor[1] * 255;
                  diffuseTextureData[mtl[1].spriteIndex * 4 + 2] = mtl[1].diffuseColor[2] * 255;
                  diffuseTextureData[mtl[1].spriteIndex * 4 + 3] = mtl[1].dissolve * 255;
                }
                let tempTexture = new Texture(false);
                tempTexture.setTextureData(diffuseTextureData, index, 1);
                this.textureStore.setTexture(mtlPath, tempTexture);
                let specularTextureData = new Uint8Array(index * 4);
                for (let mtl of mtls) {
                  specularTextureData[mtl[1].spriteIndex * 4 + 0] = mtl[1].specularColor[0] * 255;
                  specularTextureData[mtl[1].spriteIndex * 4 + 1] = mtl[1].specularColor[1] * 255;
                  specularTextureData[mtl[1].spriteIndex * 4 + 2] = mtl[1].specularColor[2] * 255;
                  specularTextureData[mtl[1].spriteIndex * 4 + 3] = 255;
                }
                tempTexture = new Texture(false);
                tempTexture.setTextureData(specularTextureData, index, 1);
                this.textureStore.setTexture(
                  mtlPath.substring(0, mtlPath.length - 4) + "_spec.mtl",
                  tempTexture
                );
                let emissionTextureData = new Uint8Array(index * 4);
                for (let mtl of mtls) {
                  emissionTextureData[mtl[1].spriteIndex * 4 + 0] = mtl[1].emissionColor[0] * 255;
                  emissionTextureData[mtl[1].spriteIndex * 4 + 1] = mtl[1].emissionColor[1] * 255;
                  emissionTextureData[mtl[1].spriteIndex * 4 + 2] = mtl[1].emissionColor[2] * 255;
                  emissionTextureData[mtl[1].spriteIndex * 4 + 3] = 255;
                }
                tempTexture = new Texture(false);
                tempTexture.setTextureData(emissionTextureData, index, 1);
                this.textureStore.setTexture(
                  mtlPath.substring(0, mtlPath.length - 4) + "_emission.mtl",
                  tempTexture
                );
              }
            } catch (e) {
            }
          }
        } else if (line.startsWith("usemtl") && mtls.size > 0) {
          usingMtl = line.split(/\s+/)[1];
        } else if (line.startsWith("vt")) {
          const coords = line.split(/\s+/).filter((element) => {
            return element != "vt";
          });
          vertexTexCoords.push(vec2_exports.fromValues(parseFloat(coords[0]), parseFloat(coords[1])));
        } else if (line.startsWith("vn")) {
          const coords = line.split(/\s+/).filter((element) => {
            return element != "vn";
          });
          vertexNormals.push(
            vec3_exports.fromValues(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2]))
          );
        } else if (line.startsWith("v")) {
          const coords = line.split(/\s+/).filter((element) => {
            return element != "v";
          });
          vertexPositions.push(
            vec3_exports.fromValues(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2]))
          );
        } else if (line.startsWith("f")) {
          const coords = line.split(/\s+/).filter((element) => {
            return element != "f";
          });
          for (let i = 0; i < coords.length - 2; i++) {
            for (let j = 0; j < 3; j++) {
              let index = j == 0 ? 0 : i + j;
              const indices = coords[index].split("/");
              const last = vertices.push({
                posIndex: NaN,
                texCoordIndex: NaN,
                normalIndex: NaN,
                mtlIndex: NaN
              });
              if (indices.length > 0) {
                vertices[last - 1].posIndex = parseInt(indices[0]) - 1;
              }
              if (indices.length > 1) {
                vertices[last - 1].texCoordIndex = parseInt(indices[1]) - 1;
              }
              if (indices.length > 2) {
                vertices[last - 1].normalIndex = parseInt(indices[2]) - 1;
              }
              if (usingMtl != "") {
                const mtl = mtls.get(usingMtl);
                if (mtl != void 0) {
                  vertices[last - 1].mtlIndex = mtl.spriteIndex;
                } else {
                  console.warn("usemtl " + usingMtl + ", there is no such mtl");
                }
              }
            }
          }
        } else if (line.startsWith("#")) {
        } else if (line.length > 0) {
        }
      }
      let returnArr = new Float32Array(vertices.length * 8);
      for (let i = 0; i < vertices.length; i++) {
        if (!isNaN(vertices[i].posIndex)) {
          returnArr[i * 8] = vertexPositions[vertices[i].posIndex][0];
          returnArr[i * 8 + 1] = vertexPositions[vertices[i].posIndex][1];
          returnArr[i * 8 + 2] = vertexPositions[vertices[i].posIndex][2];
        } else {
          returnArr[i * 8] = 0;
          returnArr[i * 8 + 1] = 0;
          returnArr[i * 8 + 2] = 0;
        }
        if (!isNaN(vertices[i].normalIndex)) {
          returnArr[i * 8 + 3] = vertexNormals[vertices[i].normalIndex][0];
          returnArr[i * 8 + 4] = vertexNormals[vertices[i].normalIndex][1];
          returnArr[i * 8 + 5] = vertexNormals[vertices[i].normalIndex][2];
        } else {
          returnArr[i * 8 + 3] = 1;
          returnArr[i * 8 + 4] = 0;
          returnArr[i * 8 + 5] = 0;
        }
        if (!isNaN(vertices[i].mtlIndex)) {
          returnArr[i * 8 + 6] = vertices[i].mtlIndex / mtls.size + 0.5 / mtls.size;
          returnArr[i * 8 + 7] = 0.5;
        } else if (!isNaN(vertices[i].texCoordIndex)) {
          returnArr[i * 8 + 6] = vertexTexCoords[vertices[i].texCoordIndex][0];
          returnArr[i * 8 + 7] = vertexTexCoords[vertices[i].texCoordIndex][1];
        } else {
          returnArr[i * 8 + 6] = 0;
          returnArr[i * 8 + 7] = 0;
        }
      }
      return returnArr;
    });
  }
};

// src/Engine/Rendering/GUI/Objects/GuiObject.ts
var GuiObject = class {
  constructor(domElement, parentDiv) {
    this.removed = false;
    this.position2D = vec2_exports.create();
    this.fontSize = 42;
    this.scaleWithWindow = true;
    this.textString = "";
    this.center = false;
    this.domElement = domElement;
    this.div = document.createElement("div");
    this.div.style.position = "absolute";
    this.div.style.width = "fit-content";
    this.div.style.height = "fit-content";
    this.div.style.userSelect = "none";
    if (parentDiv != void 0) {
      parentDiv.appendChild(this);
      this.hasParent = true;
    } else {
      domElement.appendChild(this.div);
      this.hasParent = false;
    }
  }
  getElement() {
    return this.div;
  }
  getHidden() {
    return this.div.hidden;
  }
  setHidden(hidden) {
    this.div.hidden = hidden;
  }
  toggleHidden() {
    this.div.hidden = !this.div.hidden;
    return this.div.hidden;
  }
  remove() {
    this.div.remove();
    this.removed = true;
  }
  drawObject() {
    this.div.style.left = this.position2D[0] * 100 + "%";
    this.div.style.top = this.position2D[1] * 100 + "%";
    if (this.scaleWithWindow) {
      this.div.style.fontSize = this.fontSize * (this.domElement.clientHeight / 1080) + "px";
    } else {
      this.div.style.fontSize = this.fontSize + "px";
    }
    if (this.center) {
      this.div.style.transform = "translate(-50%,-50%)";
    }
  }
  draw() {
  }
};

// src/Engine/Rendering/GUI/Objects/Button.ts
var Button = class extends GuiObject {
  constructor(domElement, parentDiv) {
    super(domElement, parentDiv);
    this.position = vec2_exports.create();
    this.textSize = 42;
    this.inputNode = document.createElement("input");
    this.inputNode.type = "button";
    this.inputNode.className = "button";
    this.div.appendChild(this.inputNode);
  }
  getElement() {
    return this.div;
  }
  getInputElement() {
    return this.inputNode;
  }
  onClick(fn) {
    this.onClickFunction = fn;
    this.inputNode.addEventListener("click", this.onClickFunction);
  }
  remove() {
    if (this.onClickFunction != void 0) {
      this.inputNode.removeEventListener("click", this.onClickFunction);
    }
    super.remove();
  }
  draw() {
    this.position2D = this.position;
    this.inputNode.value = this.textString;
    this.fontSize = this.textSize;
    this.drawObject();
  }
};

// src/Engine/Rendering/GUI/Objects/Checkbox.ts
var Checkbox = class extends GuiObject {
  constructor(domElement, parentDiv) {
    super(domElement, parentDiv);
    this.position = vec2_exports.create();
    this.textSize = 42;
    let container = document.createElement("label");
    container.className = "checkboxContainer";
    this.label = document.createElement("label");
    this.inputNode = document.createElement("input");
    this.inputNode.type = "checkbox";
    let checkmarkNode = document.createElement("span");
    checkmarkNode.className = "checkmark";
    container.appendChild(this.label);
    container.appendChild(this.inputNode);
    container.appendChild(checkmarkNode);
    this.div.appendChild(container);
  }
  getElement() {
    return this.div;
  }
  getInputElement() {
    return this.inputNode;
  }
  getChecked() {
    return this.inputNode.checked;
  }
  draw() {
    this.position2D = this.position;
    this.fontSize = this.textSize;
    this.label.textContent = this.textString;
    this.drawObject();
  }
};

// src/Engine/Rendering/GUI/Objects/Div.ts
var Div = class extends GuiObject {
  constructor(domElement, parentDiv) {
    super(domElement, parentDiv);
    this.position = vec2_exports.create();
    this.size = 42;
    this.children = new Array();
  }
  appendChild(childObj) {
    this.children.push(childObj);
    this.div.appendChild(childObj.getElement());
  }
  draw() {
    this.position2D = this.position;
    this.fontSize = this.size;
    this.drawObject();
  }
};

// src/Engine/Rendering/GUI/Objects/Progress.ts
var Progress = class extends GuiObject {
  constructor(domElement, parentDiv) {
    super(domElement, parentDiv);
    this.position = vec2_exports.create();
    this.size = 42;
    this.progressNode = document.createElement("progress");
    this.div.appendChild(this.progressNode);
  }
  getProgressElement() {
    return this.progressNode;
  }
  draw() {
    this.position2D = this.position;
    this.fontSize = this.size;
    this.progressNode.textContent = this.textString;
    this.drawObject();
  }
};

// src/Engine/Rendering/GUI/Objects/Slider.ts
var Slider = class extends GuiObject {
  constructor(domElement, parentDiv) {
    super(domElement, parentDiv);
    this.position = vec2_exports.create();
    this.textSize = 42;
    this.inputNode = document.createElement("input");
    this.inputNode.type = "range";
    this.inputNode.className = "slider";
    this.label = document.createElement("label");
    this.label.textContent = this.textString;
    this.label.className = "sliderLabel";
    this.div.appendChild(this.label);
    this.div.appendChild(this.inputNode);
  }
  getElement() {
    return this.div;
  }
  getInputElement() {
    return this.inputNode;
  }
  getValue() {
    return Number(this.inputNode.value);
  }
  draw() {
    this.position2D = this.position;
    this.fontSize = this.textSize;
    this.label.textContent = this.textString;
    super.drawObject();
  }
};

// src/Engine/Rendering/GUI/Objects/Text/EditText.ts
var EditText = class extends GuiObject {
  constructor(domElement, parentDiv) {
    super(domElement, parentDiv);
    this.position = vec2_exports.create();
    this.textSize = 42;
    this.inputNode = document.createElement("input");
    this.inputNode.type = "text";
    this.label = document.createElement("label");
    this.label.textContent = this.textString;
    this.div.appendChild(this.label);
    this.div.appendChild(this.inputNode);
  }
  getElement() {
    return this.div;
  }
  getInputElement() {
    return this.inputNode;
  }
  onChange(fn) {
    this.onChangeFn = fn;
    this.inputNode.addEventListener("change", this.onChangeFn);
  }
  remove() {
    if (this.onChangeFn != void 0) {
      this.inputNode.removeEventListener("change", this.onChangeFn);
    }
    super.remove();
  }
  draw() {
    this.position2D = this.position;
    this.fontSize = this.textSize;
    this.label.textContent = this.textString;
    this.drawObject();
  }
};

// src/Engine/Rendering/GUI/Objects/Text/TextObject2D.ts
var TextObject2D = class extends GuiObject {
  constructor(domElement, parentDiv) {
    super(domElement, parentDiv);
    this.position = vec2_exports.create();
    this.size = 42;
  }
  draw() {
    this.position2D = this.position;
    this.fontSize = this.size;
    this.div.textContent = this.textString;
    this.drawObject();
  }
};

// src/Engine/Rendering/GUI/Objects/Text/TextObject3D.ts
var TextObject3D = class extends GuiObject {
  constructor(domElement) {
    super(domElement);
    this.position = vec3_exports.create();
    this.size = 42;
    this.scaleFontWithDistance = true;
  }
  setHidden(hidden) {
    super.setHidden(hidden);
    this.hidden = hidden;
  }
  draw3D(viewProj) {
    let pos = vec4_exports.fromValues(this.position[0], this.position[1], this.position[2], 1);
    let screenCoords = vec4_exports.transformMat4(vec4_exports.create(), pos, viewProj);
    screenCoords[0] = (screenCoords[0] / screenCoords[3] + 1) / 2;
    screenCoords[1] = 1 - (screenCoords[1] / screenCoords[3] + 1) / 2;
    if (screenCoords[2] > 0 && !this.hidden) {
      this.position2D[0] = screenCoords[0];
      this.position2D[1] = screenCoords[1];
      let size = this.size;
      if (this.scaleFontWithDistance) {
        size = this.size / screenCoords[2];
      }
      this.fontSize = size;
      this.div.hidden = false;
      this.div.textContent = this.textString;
      this.drawObject();
    } else {
      this.div.hidden = true;
    }
  }
};

// src/Engine/Rendering/GUI/GUIRenderer.ts
var GUIRenderer = class {
  constructor() {
    this.guiObjects3D = new Array();
    this.guiObjects2D = new Array();
    this.domElement = document.createElement("div");
    this.domElement.style.overflow = "hidden";
  }
  setSize(width, height) {
    this.domElement.style.width = width + "px";
    this.domElement.style.height = height + "px";
  }
  clear() {
    for (let guiObject2D of this.guiObjects2D) {
      guiObject2D.remove();
    }
    for (let guiObject3D of this.guiObjects3D) {
      guiObject3D.remove();
    }
  }
  hide() {
    for (let guiObject2D of this.guiObjects2D) {
      if (!guiObject2D.hasParent) {
        guiObject2D.setHidden(true);
      }
    }
    for (let guiObject3D of this.guiObjects3D) {
      guiObject3D.setHidden(true);
    }
  }
  show() {
    for (let guiObject2D of this.guiObjects2D) {
      if (!guiObject2D.hasParent) {
        guiObject2D.setHidden(false);
      }
    }
    for (let guiObject3D of this.guiObjects3D) {
      guiObject3D.setHidden(false);
    }
  }
  getNew3DText() {
    const length5 = this.guiObjects3D.push(new TextObject3D(this.domElement));
    return this.guiObjects3D[length5 - 1];
  }
  getNew2DText(parentDiv) {
    const length5 = this.guiObjects2D.push(new TextObject2D(this.domElement, parentDiv));
    return this.guiObjects2D[length5 - 1];
  }
  getNewCheckbox(parentDiv) {
    const length5 = this.guiObjects2D.push(new Checkbox(this.domElement, parentDiv));
    return this.guiObjects2D[length5 - 1];
  }
  getNewButton(parentDiv) {
    const length5 = this.guiObjects2D.push(new Button(this.domElement, parentDiv));
    return this.guiObjects2D[length5 - 1];
  }
  getNewSlider(parentDiv) {
    const length5 = this.guiObjects2D.push(new Slider(this.domElement, parentDiv));
    return this.guiObjects2D[length5 - 1];
  }
  getNewEditText(parentDiv) {
    const length5 = this.guiObjects2D.push(new EditText(this.domElement, parentDiv));
    return this.guiObjects2D[length5 - 1];
  }
  getNewProgress(parentDiv) {
    const length5 = this.guiObjects2D.push(new Progress(this.domElement, parentDiv));
    return this.guiObjects2D[length5 - 1];
  }
  getNewDiv(parentDiv) {
    const length5 = this.guiObjects2D.push(new Div(this.domElement, parentDiv));
    return this.guiObjects2D[length5 - 1];
  }
  draw(camera) {
    for (let i = 0; i < this.guiObjects3D.length; i++) {
      if (!this.guiObjects3D[i].removed) {
        this.guiObjects3D[i].draw3D(camera.getViewProjMatrix());
      } else {
        this.guiObjects3D.splice(i, 1);
        i--;
      }
    }
    for (let i = 0; i < this.guiObjects2D.length; i++) {
      if (!this.guiObjects2D[i].removed) {
        this.guiObjects2D[i].draw();
      } else {
        this.guiObjects2D.splice(i, 1);
        i--;
      }
    }
  }
};

// src/Engine/Physics/Physics/CollisionSolver.ts
var CollisionSolver;
((CollisionSolver2) => {
  function getTranslationNeeded(intersectionInformation) {
    if (intersectionInformation.length == 0) {
      return vec3_exports.create();
    }
    let resultingVec = vec3_exports.create();
    let maxDepth = 0;
    for (let inf of intersectionInformation) {
      if (inf.shapeB.getTransformedNormals().length == 1) {
        if (vec3_exports.dot(inf.axis, inf.shapeB.getTransformedNormals()[0]) < 0.99) {
          continue;
        }
      }
      if (inf.depth > maxDepth) {
        vec3_exports.copy(resultingVec, inf.axis);
        maxDepth = inf.depth;
      }
    }
    vec3_exports.scale(resultingVec, resultingVec, maxDepth);
    return resultingVec;
  }
  CollisionSolver2.getTranslationNeeded = getTranslationNeeded;
  function handleCollision(intersectionInformation, po1, po2) {
    for (let inf of intersectionInformation) {
      let axis = vec3_exports.clone(inf.axis);
      if (inf.shapeB.getTransformedNormals().length == 1) {
        vec3_exports.copy(axis, inf.shapeB.getTransformedNormals()[0]);
      } else if (inf.shapeA.getTransformedNormals().length == 1) {
        vec3_exports.copy(axis, inf.shapeA.getTransformedNormals()[0]);
        vec3_exports.negate(axis, axis);
      }
      let e1Vel = po1.velocity;
      let e2Vel = po2.velocity;
      let velDifference = vec3_exports.sub(vec3_exports.create(), e1Vel, e2Vel);
      let dotProd = vec3_exports.dot(velDifference, axis);
      if (dotProd < 0) {
        let eN = vec3_exports.cross(vec3_exports.create(), vec3_exports.cross(vec3_exports.create(), velDifference, axis), axis);
        if (vec3_exports.squaredLength(eN) > 1e-4) {
          vec3_exports.normalize(eN, eN);
        }
        let e1Change = vec3_exports.create();
        let e2Change = vec3_exports.create();
        let collisionCoefficient = Math.max(po1.collisionCoefficient, po2.collisionCoefficient);
        let frictionCoefficient = Math.min(po1.frictionCoefficient, po2.frictionCoefficient);
        if (po1 && !po1.isStatic && !po1.isImmovable && po2 && !po2.isStatic && !po2.isImmovable) {
          let v1Dot = vec3_exports.dot(e1Vel, axis);
          let v2Dot = vec3_exports.dot(e2Vel, axis);
          let tangentVel1 = vec3_exports.dot(velDifference, eN);
          let tangentVel2 = -tangentVel1;
          let u1Dot = (po1.mass - collisionCoefficient * po2.mass) / (po1.mass + po2.mass) * v1Dot + (1 + collisionCoefficient) * po2.mass / (po1.mass + po2.mass) * v2Dot;
          let u2Dot = (po2.mass - collisionCoefficient * po1.mass) / (po2.mass + po1.mass) * v2Dot + (1 + collisionCoefficient) * po1.mass / (po2.mass + po1.mass) * v1Dot;
          let frictionMagnitude1 = -tangentVel1 * Math.min(frictionCoefficient, frictionCoefficient * Math.abs(u1Dot - v1Dot));
          let frictionMagnitude2 = -tangentVel2 * Math.min(frictionCoefficient, frictionCoefficient * Math.abs(u2Dot - v2Dot));
          vec3_exports.scaleAndAdd(e1Change, e1Change, axis, u1Dot - v1Dot);
          vec3_exports.scaleAndAdd(e1Change, e1Change, eN, frictionMagnitude1);
          vec3_exports.scaleAndAdd(e2Change, e2Change, axis, u2Dot - v2Dot);
          vec3_exports.scaleAndAdd(e2Change, e2Change, eN, frictionMagnitude2);
        } else if (po1.isStatic || po1.isImmovable) {
          let inverseVelDifference = vec3_exports.negate(vec3_exports.create(), velDifference);
          let v2Dot = vec3_exports.dot(inverseVelDifference, axis);
          let relativeTangentVel = vec3_exports.dot(inverseVelDifference, eN);
          let frictionMagnitude = relativeTangentVel * Math.min(frictionCoefficient, frictionCoefficient * Math.abs(v2Dot));
          vec3_exports.scaleAndAdd(e2Change, e2Change, axis, -v2Dot * (1 + collisionCoefficient));
          vec3_exports.scaleAndAdd(e2Change, e2Change, eN, -frictionMagnitude);
        } else if (po2.isStatic || po2.isImmovable) {
          let v1Dot = vec3_exports.dot(velDifference, axis);
          let relativeTangentVel = vec3_exports.dot(velDifference, eN);
          let frictionMagnitude = relativeTangentVel * Math.min(frictionCoefficient, frictionCoefficient * Math.abs(v1Dot));
          vec3_exports.scaleAndAdd(e1Change, e1Change, axis, -v1Dot * (1 + collisionCoefficient));
          vec3_exports.scaleAndAdd(e1Change, e1Change, eN, -frictionMagnitude);
        }
        vec3_exports.add(e1Vel, e1Vel, e1Change);
        if (e1Change[1] > 0) {
          po1.onGround = true;
        }
        vec3_exports.add(e2Vel, e2Vel, e2Change);
        if (e2Change[1] > 0) {
          po2.onGround = true;
        }
        let displacement = CollisionSolver2.getTranslationNeeded([inf]);
        if (!po1.isImmovable && !po1.isStatic) {
          po1.transform.translate(vec3_exports.scale(
            vec3_exports.create(),
            displacement,
            vec3_exports.len(e1Change) / (vec3_exports.len(e1Change) + vec3_exports.len(e2Change))
          ));
        }
        if (!po2.isImmovable && !po2.isStatic) {
          po2.transform.translate(vec3_exports.scale(
            vec3_exports.create(),
            displacement,
            -vec3_exports.len(e2Change) / (vec3_exports.len(e1Change) + vec3_exports.len(e2Change))
          ));
        }
      }
    }
  }
  CollisionSolver2.handleCollision = handleCollision;
})(CollisionSolver || (CollisionSolver = {}));

// src/Engine/Physics/Maths/SAT.ts
var SAT;
((SAT2) => {
  function getOverlap(overlapVector, shapeAVertices, shapeBVertices, reverse, margin) {
    let maxA = vec3_exports.dot(overlapVector, shapeAVertices[0]);
    let minA = maxA;
    let maxB = vec3_exports.dot(overlapVector, shapeBVertices[0]);
    let minB = maxB;
    let tempDot = 0;
    for (let i = 1; i < shapeAVertices.length; i++) {
      tempDot = vec3_exports.dot(overlapVector, shapeAVertices[i]);
      minA = Math.min(tempDot, minA);
      maxA = Math.max(tempDot, maxA);
    }
    for (let i = 1; i < shapeBVertices.length; i++) {
      tempDot = vec3_exports.dot(overlapVector, shapeBVertices[i]);
      minB = Math.min(tempDot, minB);
      maxB = Math.max(tempDot, maxB);
    }
    let overlap1 = maxB - minA;
    let overlap2 = maxA - minB;
    if (overlap1 >= -margin && overlap2 >= -margin) {
      if (overlap1 > overlap2) {
        reverse.value = true;
        return overlap2;
      } else {
        reverse.value = false;
        return overlap1;
      }
    }
    return -1;
  }
  SAT2.getOverlap = getOverlap;
  function getContinousOverlap(testVec, shapeAVertices, shapeBVertices, relativeVelocity, info) {
    let minA = Infinity, minB = Infinity;
    let maxA = -Infinity, maxB = -Infinity;
    let tempDot = 0;
    for (const vert of shapeAVertices) {
      tempDot = vec3_exports.dot(vert, testVec);
      minA = Math.min(minA, tempDot);
      maxA = Math.max(maxA, tempDot);
    }
    for (const vert of shapeBVertices) {
      tempDot = vec3_exports.dot(vert, testVec);
      minB = Math.min(minB, tempDot);
      maxB = Math.max(maxB, tempDot);
    }
    let T;
    let speed = vec3_exports.dot(testVec, relativeVelocity);
    if (maxB <= minA) {
      if (speed <= 0) {
        return false;
      }
      T = (minA - maxB) / speed;
      if (T > info.first) {
        info.first = T;
        vec3_exports.copy(info.intersectionVec, testVec);
      }
      if (info.first > info.max) {
        return false;
      }
      T = (maxA - minB) / speed;
      if (T < info.last) {
        info.last = T;
      }
      if (info.first > info.last) {
        return false;
      }
    } else if (maxA <= minB) {
      if (speed >= 0) {
        return false;
      }
      T = (maxA - minB) / speed;
      if (T > info.first) {
        info.first = T;
        vec3_exports.copy(info.intersectionVec, testVec);
      }
      if (info.first > info.max) {
        return false;
      }
      T = (minA - maxB) / speed;
      if (T < info.last) {
        info.last = T;
      }
      if (info.first > info.last) {
        return false;
      }
    } else {
      if (speed > 0) {
        T = (maxA - minB) / speed;
        if (T < info.last) {
          info.last = T;
        }
        if (info.first > info.last) {
          return false;
        }
      } else if (speed < 0) {
        T = (minA - maxB) / speed;
        if (T < info.last) {
          info.last = T;
        }
        if (info.first > info.last) {
          return false;
        }
      }
    }
    return true;
  }
  SAT2.getContinousOverlap = getContinousOverlap;
  function getIntersectionPoint(shapeA, shapeB, testAxis) {
    let shapeAVertices = shapeA.getTransformedVertices();
    let shapeBVertices = shapeB.getTransformedVertices();
    let maxAPoints = new Array();
    let minAPoints = new Array();
    let maxBPoints = new Array();
    let minBPoints = new Array();
    let maxA = vec3_exports.dot(testAxis, shapeAVertices[0]);
    maxAPoints.push(0);
    let minA = maxA;
    minAPoints.push(0);
    let maxB = vec3_exports.dot(testAxis, shapeBVertices[0]);
    maxBPoints.push(0);
    let minB = maxB;
    minBPoints.push(0);
    let tempDot = 0;
    for (let i = 1; i < shapeAVertices.length; i++) {
      tempDot = vec3_exports.dot(testAxis, shapeAVertices[i]);
      if (tempDot < minA) {
        minA = tempDot;
        minAPoints.length = 0;
        minAPoints.push(i);
      } else if (Math.abs(tempDot - minA) < 1e-4) {
        minAPoints.push(i);
      }
      if (tempDot > maxA) {
        maxA = tempDot;
        maxAPoints.length = 0;
        maxAPoints.push(i);
      } else if (Math.abs(tempDot - maxA) < 1e-4) {
        maxAPoints.push(i);
      }
    }
    for (let i = 1; i < shapeBVertices.length; i++) {
      tempDot = vec3_exports.dot(testAxis, shapeBVertices[i]);
      if (tempDot < minB) {
        minB = tempDot;
        minBPoints.length = 0;
        minBPoints.push(i);
      } else if (Math.abs(tempDot - minB) < 1e-4) {
        minBPoints.push(i);
      }
      if (tempDot > maxB) {
        maxB = tempDot;
        maxBPoints.length = 0;
        maxBPoints.push(i);
      } else if (Math.abs(tempDot - maxB) < 1e-4) {
        maxBPoints.push(i);
      }
    }
    let overlap1 = Math.abs(maxB - minA);
    let overlap2 = Math.abs(maxA - minB);
    let intersectionPoint = vec3_exports.create();
    if (overlap1 > overlap2) {
      if (maxAPoints.length == 1) {
        vec3_exports.copy(intersectionPoint, shapeAVertices[maxAPoints[0]]);
      } else if (minBPoints.length == 1) {
        vec3_exports.copy(intersectionPoint, shapeBVertices[minBPoints[0]]);
      }
    } else {
      if (minAPoints.length == 1) {
        vec3_exports.copy(intersectionPoint, shapeAVertices[minAPoints[0]]);
      } else if (maxBPoints.length == 1) {
        vec3_exports.copy(intersectionPoint, shapeBVertices[maxBPoints[0]]);
      }
    }
    return intersectionPoint;
  }
  SAT2.getIntersectionPoint = getIntersectionPoint;
  function getIntersection3D(shapeA, shapeB, intersectionAxis, intersectionDepth) {
    intersectionDepth.depth = Infinity;
    let shapeAVertices = shapeA.getTransformedVertices();
    let shapeBVertices = shapeB.getTransformedVertices();
    let checkNormal = function(normal) {
      let reverse = { value: false };
      let overlap = SAT2.getOverlap(
        normal,
        shapeAVertices,
        shapeBVertices,
        reverse,
        shapeA.margin + shapeB.margin
      );
      if (overlap < 0) {
        return false;
      }
      if (overlap < intersectionDepth.depth) {
        intersectionDepth.depth = overlap;
        vec3_exports.copy(intersectionAxis, normal);
        if (reverse.value) {
          vec3_exports.scale(intersectionAxis, intersectionAxis, -1);
        }
      }
      return true;
    };
    let shapeBNormals = shapeB.getTransformedNormals();
    for (let normal of shapeBNormals) {
      if (!checkNormal(normal)) {
        return false;
      }
    }
    let shapeANormals = shapeA.getTransformedNormals();
    for (let normal of shapeANormals) {
      if (!checkNormal(normal)) {
        return false;
      }
    }
    if (shapeANormals.length == 1 && shapeBNormals.length == 1) {
      let crossVector = vec3_exports.cross(vec3_exports.create(), shapeANormals[0], shapeBNormals[0]);
      if (crossVector[0] == 0 && crossVector[1] == 0 && crossVector[2] == 0) {
        for (const AEdgeNormal of shapeA.getTransformedEdgeNormals()) {
          if (!checkNormal(AEdgeNormal)) {
            return false;
          }
        }
        for (const BEdgeNormal of shapeB.getTransformedEdgeNormals()) {
          if (!checkNormal(BEdgeNormal)) {
            return false;
          }
        }
        return true;
      }
    }
    for (const e1 of shapeA.getTransformedEdges()) {
      for (const e2 of shapeB.getTransformedEdges()) {
        const dotProd = vec3_exports.dot(e1, e2);
        if (dotProd < 0.99 && dotProd > -0.99) {
          let testVec = vec3_exports.clone(e1);
          vec3_exports.normalize(testVec, vec3_exports.cross(testVec, testVec, e2));
          if (!checkNormal(testVec)) {
            return false;
          }
        }
      }
    }
    return true;
  }
  SAT2.getIntersection3D = getIntersection3D;
  function getContinousIntersection3D(shapeA, shapeB, velocityA, velocityB, timeMax) {
    let relativeVel = vec3_exports.subtract(vec3_exports.create(), velocityB, velocityA);
    let info = {
      first: 0,
      last: Infinity,
      max: timeMax,
      intersectionVec: vec3_exports.create()
    };
    let shapeAVertices = shapeA.getTransformedVertices();
    let shapeBVertices = shapeB.getTransformedVertices();
    let shapeANormals = shapeA.getTransformedNormals();
    for (let normal of shapeANormals) {
      if (!getContinousOverlap(normal, shapeAVertices, shapeBVertices, relativeVel, info)) {
        return [Infinity, null];
      }
    }
    let shapeBNormals = shapeB.getTransformedNormals();
    for (let normal of shapeBNormals) {
      if (!getContinousOverlap(normal, shapeAVertices, shapeBVertices, relativeVel, info)) {
        return [Infinity, null];
      }
    }
    if (shapeANormals.length == 1 && shapeBNormals.length == 1) {
      let crossVector = vec3_exports.cross(vec3_exports.create(), shapeANormals[0], shapeBNormals[0]);
      if (crossVector[0] == 0 && crossVector[1] == 0 && crossVector[2] == 0) {
        for (const AEdgeNormal of shapeA.getTransformedEdgeNormals()) {
          if (!getContinousOverlap(AEdgeNormal, shapeAVertices, shapeBVertices, relativeVel, info)) {
            return [Infinity, null];
          }
        }
        for (const BEdgeNormal of shapeB.getTransformedEdgeNormals()) {
          if (!getContinousOverlap(BEdgeNormal, shapeAVertices, shapeBVertices, relativeVel, info)) {
            return [Infinity, null];
          }
        }
        if (info.last == 0) {
          return [Infinity, null];
        }
        return [info.first, info.intersectionVec];
      }
    }
    for (const e1 of shapeA.getTransformedEdges()) {
      for (const e2 of shapeB.getTransformedEdges()) {
        const dotProd = vec3_exports.dot(e1, e2);
        if (dotProd < 0.99 && dotProd > -0.99) {
          let testVec = vec3_exports.clone(e1);
          vec3_exports.normalize(testVec, vec3_exports.cross(testVec, testVec, e2));
          if (!getContinousOverlap(testVec, shapeAVertices, shapeBVertices, relativeVel, info)) {
            return [Infinity, null];
          }
        }
      }
    }
    if (info.last == 0) {
      return [Infinity, null];
    }
    return [info.first, info.intersectionVec];
  }
  SAT2.getContinousIntersection3D = getContinousIntersection3D;
})(SAT || (SAT = {}));

// src/Engine/Physics/Physics/IntersectionTester.ts
var IntersectionTester;
((IntersectionTester2) => {
  class IntersectionInformation {
    /**
     * Holds information about an intersection
     * @param axis Normalized axis for the minimum translation vector (mtv)
     * @param depth The magnitude of the mtv
     * @param point The point of intersection (Under construction, not fully accurate yet)
     * @param shapeA The shape of physical object A that is intersecting
     * @param shapeB The shape of physical object B that is intersecting
     */
    constructor(axis, depth, point, shapeA, shapeB) {
      this.axis = vec3_exports.clone(axis);
      this.depth = depth;
      this.point = vec3_exports.clone(point);
      this.shapeA = shapeA;
      this.shapeB = shapeB;
    }
  }
  IntersectionTester2.IntersectionInformation = IntersectionInformation;
  function identifyIntersection(shapeArrayA, shapeArrayB) {
    let intersectionAxis = vec3_exports.create();
    let intersectionDepth = { depth: Infinity };
    for (let shapeA of shapeArrayA) {
      for (let shapeB of shapeArrayB) {
        if (SAT.getIntersection3D(shapeA, shapeB, intersectionAxis, intersectionDepth)) {
          return true;
        }
      }
    }
    return false;
  }
  IntersectionTester2.identifyIntersection = identifyIntersection;
  function identifyIntersectionInformation(shapeArrayA, shapeArrayB, intersectionInformation) {
    let intersecting = false;
    let tempIntersectionAxis = vec3_exports.create();
    let tempIntersectionDepth = { depth: Infinity };
    for (let shapeA of shapeArrayA) {
      for (let shapeB of shapeArrayB) {
        if (SAT.getIntersection3D(shapeA, shapeB, tempIntersectionAxis, tempIntersectionDepth)) {
          intersecting = true;
          intersectionInformation.push(
            new IntersectionInformation(
              tempIntersectionAxis,
              tempIntersectionDepth.depth,
              SAT.getIntersectionPoint(shapeA, shapeB, tempIntersectionAxis),
              shapeA,
              shapeB
            )
          );
        }
      }
    }
    return intersecting;
  }
  IntersectionTester2.identifyIntersectionInformation = identifyIntersectionInformation;
  function doRayCast(ray, shapeArray, maxDistance = Infinity, breakOnFirstHit = false) {
    let closestHit = Infinity;
    for (const shape of shapeArray) {
      let [dist4, _] = SAT.getContinousIntersection3D(
        ray,
        shape,
        ray.getDir(),
        vec3_exports.create(),
        maxDistance
      );
      if (dist4 < closestHit) {
        closestHit = dist4;
        maxDistance = closestHit;
        if (breakOnFirstHit) {
          return closestHit;
        }
      }
    }
    return closestHit;
  }
  IntersectionTester2.doRayCast = doRayCast;
  function doContinousIntersection(shapeArrayA, shapeAVelocity, shapeArrayB, shapeBVelocity, maxDistance = Infinity, allow0Collision = true, breakOnFirstHit = false) {
    let earliestHit = Infinity;
    let intersectionVec = null;
    for (let shapeA of shapeArrayA) {
      for (let shapeB of shapeArrayB) {
        let [dist4, iVec] = SAT.getContinousIntersection3D(
          shapeA,
          shapeB,
          shapeAVelocity,
          shapeBVelocity,
          maxDistance
        );
        if ((allow0Collision && dist4 >= 0 || dist4 > 0) && dist4 < earliestHit) {
          earliestHit = dist4;
          intersectionVec = iVec;
          maxDistance = earliestHit;
          if (breakOnFirstHit) {
            return [earliestHit, intersectionVec];
          }
        }
      }
    }
    return [earliestHit, intersectionVec];
  }
  IntersectionTester2.doContinousIntersection = doContinousIntersection;
})(IntersectionTester || (IntersectionTester = {}));

// src/Engine/Physics/Physics/Shapes/Shape.ts
var Shape = class {
  constructor() {
    this.margin = 0;
  }
  setUpdateNeeded() {
  }
  setTransformMatrix(matrix) {
  }
  getOriginalVertices() {
    return null;
  }
  getTransformedVertices() {
    return null;
  }
  getTransformedNormals() {
    return null;
  }
  getTransformedEdges() {
    return null;
  }
  getTransformedEdgeNormals() {
    return null;
  }
};

// src/Engine/Physics/Physics/Shapes/OBB.ts
var OBB = class extends Shape {
  constructor() {
    super();
    this.originalVertices = new Array();
    this.originalNormals = new Array();
    this.transformedVertices = new Array();
    this.transformedNormals = new Array();
    this.transformMatrix = mat4_exports.create();
    this.inverseMatrix = mat4_exports.create();
    this.verticesNeedsUpdate = false;
    this.normalsNeedsUpdate = false;
    this.setMinAndMaxVectors(vec3_exports.fromValues(-0.5, -0.5, -0.5), vec3_exports.fromValues(0.5, 0.5, 0.5));
  }
  setVertices(vertices) {
    this.originalVertices.length = 0;
    for (let vert of vertices) {
      this.originalVertices.push(vert);
    }
    this.verticesNeedsUpdate = true;
  }
  setNormals(normals) {
    this.originalNormals.length = 0;
    for (let norm of normals) {
      this.originalNormals.push(norm);
    }
    this.normalsNeedsUpdate = true;
  }
  /**
   * Creates an axis aligned bounding box (AABB).
   * @param minVec Corner for the lower bound.
   * @param maxVec Corner for the upper bound.
   */
  setMinAndMaxVectors(minVec, maxVec) {
    this.originalNormals.length = 0;
    this.originalNormals.push(vec3_exports.fromValues(1, 0, 0));
    this.originalNormals.push(vec3_exports.fromValues(0, 1, 0));
    this.originalNormals.push(vec3_exports.fromValues(0, 0, 1));
    this.originalVertices.length = 0;
    for (let i = 0; i < 8; i++) {
      this.originalVertices.push(vec3_exports.create());
    }
    vec3_exports.copy(this.originalVertices[0], minVec);
    vec3_exports.set(this.originalVertices[1], minVec[0], minVec[1], maxVec[2]);
    vec3_exports.set(this.originalVertices[2], minVec[0], maxVec[1], minVec[2]);
    vec3_exports.set(this.originalVertices[3], minVec[0], maxVec[1], maxVec[2]);
    vec3_exports.set(this.originalVertices[4], maxVec[0], minVec[1], minVec[2]);
    vec3_exports.set(this.originalVertices[5], maxVec[0], minVec[1], maxVec[2]);
    vec3_exports.set(this.originalVertices[6], maxVec[0], maxVec[1], minVec[2]);
    vec3_exports.copy(this.originalVertices[7], maxVec);
    this.normalsNeedsUpdate = true;
    this.verticesNeedsUpdate = true;
  }
  setMinAndMaxFromPointArray(pointArray) {
    this.originalNormals.length = 0;
    this.originalNormals.push(vec3_exports.fromValues(1, 0, 0));
    this.originalNormals.push(vec3_exports.fromValues(0, 1, 0));
    this.originalNormals.push(vec3_exports.fromValues(0, 0, 1));
    this.originalVertices.length = 0;
    let minVec = vec3_exports.fromValues(Infinity, Infinity, Infinity);
    let maxVec = vec3_exports.fromValues(-Infinity, -Infinity, -Infinity);
    for (let point of pointArray) {
      vec3_exports.min(minVec, minVec, point);
      vec3_exports.max(maxVec, maxVec, point);
    }
    for (let i = 0; i < 8; i++) {
      this.originalVertices.push(vec3_exports.create());
    }
    vec3_exports.copy(this.originalVertices[0], minVec);
    vec3_exports.set(this.originalVertices[1], minVec[0], minVec[1], maxVec[2]);
    vec3_exports.set(this.originalVertices[2], minVec[0], maxVec[1], minVec[2]);
    vec3_exports.set(this.originalVertices[3], minVec[0], maxVec[1], maxVec[2]);
    vec3_exports.set(this.originalVertices[4], maxVec[0], minVec[1], minVec[2]);
    vec3_exports.set(this.originalVertices[5], maxVec[0], minVec[1], maxVec[2]);
    vec3_exports.set(this.originalVertices[6], maxVec[0], maxVec[1], minVec[2]);
    vec3_exports.copy(this.originalVertices[7], maxVec);
    this.normalsNeedsUpdate = true;
    this.verticesNeedsUpdate = true;
  }
  setUpdateNeeded() {
    this.verticesNeedsUpdate = true;
    this.normalsNeedsUpdate = true;
  }
  setTransformMatrix(matrix) {
    this.transformMatrix = matrix;
    this.verticesNeedsUpdate = true;
    this.normalsNeedsUpdate = true;
  }
  setInverseMatrix(matrix) {
    this.inverseMatrix = matrix;
    this.verticesNeedsUpdate = true;
    this.normalsNeedsUpdate = true;
  }
  getTransformedVertices() {
    if (this.verticesNeedsUpdate) {
      this.transformedVertices.length = 0;
      let resultingMatrix = mat4_exports.mul(mat4_exports.create(), this.inverseMatrix, this.transformMatrix);
      for (const originalVertex of this.originalVertices) {
        this.transformedVertices.push(
          vec3_exports.transformMat4(vec3_exports.create(), originalVertex, resultingMatrix)
        );
      }
      this.verticesNeedsUpdate = false;
    }
    return this.transformedVertices;
  }
  getTransformedNormals() {
    if (this.normalsNeedsUpdate) {
      this.transformedNormals.length = 0;
      for (const originalNormal of this.originalNormals) {
        this.transformedNormals.push(
          vec3_exports.normalize(
            vec3_exports.create(),
            vec3_exports.transformMat3(
              vec3_exports.create(),
              originalNormal,
              mat3_exports.normalFromMat4(mat3_exports.create(), this.transformMatrix)
            )
          )
        );
      }
      this.normalsNeedsUpdate = false;
    }
    return this.transformedNormals;
  }
  getTransformedEdges() {
    return this.getTransformedNormals();
  }
  getTransformedEdgeNormals() {
    return this.getTransformedNormals();
  }
  getTransformMatrix() {
    return this.transformMatrix;
  }
};

// src/Engine/Physics/Physics/Objects/PhysicsObject.ts
var PhysicsObject = class {
  constructor(transform) {
    this.mass = 1;
    this.frictionCoefficient = 0;
    this.collisionCoefficient = 0;
    this.isStatic = false;
    this.isImmovable = false;
    this.isCollidable = true;
    this.onGround = false;
    this.velocity = vec3_exports.create();
    this.impulse = vec3_exports.create();
    this.force = vec3_exports.create();
    if (transform == void 0) {
      this.transform = new Transform();
    } else {
      this.transform = transform;
    }
    this.boundingBox = new OBB();
    this.boundingBox.setTransformMatrix(this.transform.matrix);
  }
};

// src/Engine/Physics/Physics/PhysicsScene.ts
var PhysicsScene = class {
  constructor() {
    this.gravity = vec3_exports.fromValues(0, -9.8, 0);
    this.physicsObjects = new Array();
  }
  /**
   * Will add a physics object to the PhysicsScene. Will create a new object if none is passed as a parameter.
   * @param physicsObject Optional: Already existing physics object, maybe from another physics scene
   * @returns the physics object
   */
  addNewPhysicsObject(transform, physicsObject) {
    let length5 = -1;
    if (physicsObject != void 0) {
      length5 = this.physicsObjects.push(physicsObject);
    } else {
      length5 = this.physicsObjects.push(new PhysicsObject(transform));
    }
    return this.physicsObjects[length5 - 1];
  }
  doRayCast(ray, maxDistance = Infinity) {
    let closestHit = Infinity;
    for (let physicsObject of this.physicsObjects) {
      let hit = IntersectionTester.doRayCast(ray, [physicsObject.boundingBox], Math.min(maxDistance, closestHit));
      closestHit = Math.min(closestHit, hit);
    }
    return closestHit;
  }
  update(dt) {
    for (let physicsObject of this.physicsObjects) {
      physicsObject.transform.calculateMatrix();
      physicsObject.boundingBox.setUpdateNeeded();
    }
    for (let i = 0; i < this.physicsObjects.length; i++) {
      let physicsObject = this.physicsObjects[i];
      const oldVelocity = vec3_exports.clone(physicsObject.velocity);
      for (let j = i + 1; j < this.physicsObjects.length; j++) {
        if (IntersectionTester.identifyIntersection([physicsObject.boundingBox], [this.physicsObjects[j].boundingBox])) {
          let inf = new Array();
          IntersectionTester.identifyIntersectionInformation([physicsObject.boundingBox], [this.physicsObjects[j].boundingBox], inf);
          CollisionSolver.handleCollision(inf, physicsObject, this.physicsObjects[j]);
        }
      }
      if (!physicsObject.isStatic) {
        vec3_exports.scaleAndAdd(physicsObject.velocity, physicsObject.velocity, this.gravity, dt);
        vec3_exports.scaleAndAdd(physicsObject.velocity, physicsObject.velocity, physicsObject.force, dt / physicsObject.mass);
        vec3_exports.scaleAndAdd(physicsObject.velocity, physicsObject.velocity, physicsObject.impulse, 1 / physicsObject.mass);
        vec3_exports.zero(physicsObject.force);
        vec3_exports.zero(physicsObject.impulse);
        let translation = vec3_exports.scale(vec3_exports.create(), vec3_exports.add(vec3_exports.create(), oldVelocity, physicsObject.velocity), 0.5 * dt);
        if (vec3_exports.len(translation) > 1e-3) {
          physicsObject.transform.translate(translation);
          physicsObject.transform.calculateMatrix();
        }
      }
    }
  }
};

// src/Engine/Physics/Physics/Shapes/Ray.ts
var Ray = class extends Shape {
  constructor() {
    super();
    this.start = vec3_exports.create();
    this.dir = vec3_exports.fromValues(0, 0, 1);
    this.inverseMatrix = mat4_exports.create();
  }
  setStart(start) {
    vec3_exports.copy(this.start, start);
  }
  setDir(dir) {
    vec3_exports.normalize(this.dir, dir);
  }
  getDir() {
    return this.getTransformedNormals()[0];
  }
  setStartAndDir(start, dir) {
    vec3_exports.copy(this.start, start);
    vec3_exports.normalize(this.dir, dir);
  }
  setInverseMatrix(matrix) {
    this.inverseMatrix = matrix;
  }
  getTransformedVertices() {
    return [vec3_exports.transformMat4(vec3_exports.create(), this.start, this.inverseMatrix)];
  }
  getTransformedNormals() {
    let start = this.getTransformedVertices()[0];
    let end = vec3_exports.transformMat4(
      vec3_exports.create(),
      vec3_exports.add(vec3_exports.create(), this.start, this.dir),
      this.inverseMatrix
    );
    return [vec3_exports.subtract(vec3_exports.create(), end, start)];
  }
  getTransformedEdges() {
    return [];
  }
  getTransformedEdgeNormals() {
    return [];
  }
};

// src/Engine/Physics/Maths/MousePicking.ts
var MousePicking;
((MousePicking2) => {
  function GetRay(camera, mouseNDC) {
    let mouseRayClip = vec4_exports.fromValues(mouseNDC[0], mouseNDC[1], -1, 1);
    let mouseRayCamera = vec4_exports.transformMat4(
      vec4_exports.create(),
      mouseRayClip,
      mat4_exports.invert(mat4_exports.create(), camera.getProjectionMatrix())
    );
    mouseRayCamera[2] = -1;
    mouseRayCamera[3] = 0;
    let mouseRayWorld4D = vec4_exports.transformMat4(
      vec4_exports.create(),
      mouseRayCamera,
      mat4_exports.invert(mat4_exports.create(), camera.getViewMatrix())
    );
    let dir = vec3_exports.normalize(
      vec3_exports.create(),
      vec3_exports.fromValues(mouseRayWorld4D[0], mouseRayWorld4D[1], mouseRayWorld4D[2])
    );
    let ray = new Ray();
    ray.setDir(dir);
    ray.setStart(vec3_exports.clone(camera.getPosition()));
    return ray;
  }
  MousePicking2.GetRay = GetRay;
})(MousePicking || (MousePicking = {}));

// src/Engine.ts
var applicationStartTime = Date.now();
var textureStore = new TextureStore();
var meshStore = new MeshStore(textureStore);
common_exports.setMatrixArrayType(Array);
export {
  Camera,
  GUIRenderer,
  MousePicking,
  PhysicsObject,
  PhysicsScene,
  Ray,
  Renderer,
  Scene,
  Transform,
  applicationStartTime,
  mat4_exports as mat4,
  meshStore,
  quat_exports as quat,
  textureStore,
  vec2_exports as vec2,
  vec3_exports as vec3
};
//# sourceMappingURL=Engine.esm.js.map